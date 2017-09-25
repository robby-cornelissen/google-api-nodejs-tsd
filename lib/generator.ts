import fs = require('fs');
import path = require('path');
import mkdirp = require('mkdirp');
import req = require('request');

import { Request } from 'request';
import { format } from 'util';
import { Renderer, NunjucksRenderer } from './renderer';

const MODULE: string = 'googleapis';
const PACKAGE: any = require('../package.json');
const USER_AGENT: string = PACKAGE.name + '/' + PACKAGE.version;

interface Options {
    discoveryUrl?: string;
    indexTemplatePath?: string;
    baseTemplatePath?: string;
    apiTemplatePath?: string;
    exportPath?: string;
    renderer?: Renderer;
}

export class Generator {
    private static DEFAULT_OPTIONS: Options = {
        discoveryUrl: 'https://www.googleapis.com/discovery/v1/apis/',
        indexTemplatePath: './templates/index.d.ts.nj',
        baseTemplatePath: './templates/apis.d.ts.nj',
        apiTemplatePath: './templates/api.d.ts.nj',
        exportPath: 'dist',
        renderer: new NunjucksRenderer('./templates', {
            module: MODULE,
            br: '\n'
        })
    };

    private discoveryUrl: string;
    private indexTemplate: string;
    private baseTemplate: string;
    private apiTemplate: string;
    private exportPath: string;
    private renderer: Renderer;

    private indexPath: string;
    private apiData: { apiList: { apiPath: string, relPath: string }[] } = { apiList: [] };

    constructor(options?: Options) {
        const opts = Object.assign({}, Generator.DEFAULT_OPTIONS, options);

        this.discoveryUrl = opts.discoveryUrl;
        this.indexTemplate = fs.readFileSync(opts.indexTemplatePath, { encoding: 'utf8' });
        this.baseTemplate = fs.readFileSync(opts.baseTemplatePath, { encoding: 'utf8' });
        this.apiTemplate = fs.readFileSync(opts.apiTemplatePath, { encoding: 'utf8' });
        this.exportPath = opts.exportPath;
        this.renderer = opts.renderer;
        this.indexPath = path.posix.join(this.exportPath, 'index.d.ts');
    }

    generate(): Promise<any> {
        return this.get(this.discoveryUrl).then((data) => {
            const baseName = MODULE;
            const renderBase = this.generateFile(baseName, this.baseTemplate, {});

            const renderApis = data['items'].map((item: any) => this.get(item['discoveryRestUrl']).then(api => {
                const apiName = MODULE + '.' + api['name'] + '.' + api['version'];
                return this.generateFile(apiName, this.apiTemplate, api);
            }).catch((e) => {
                // ingore but log errors, that can occur when an API is listed by discovery but not available
                console.error(e);
                return;
            }));

            return Promise.all<any>([renderBase, Promise.all(renderApis)]).then(() => {
                console.log('Generating definitions index');
                return this.render(this.indexTemplate, this.apiData, this.indexPath);
            });
        });
    }

    generateFile(apiName: string, template: string, data: any) {
        console.log('Generating definition for [%s]', apiName);
        const apiPath = path.posix.join(this.exportPath, apiName, 'index' + '.d.ts');
        this.apiData.apiList.push({ apiPath: apiPath, relPath: path.posix.relative(path.posix.dirname(this.indexPath), apiPath) });
        return this.render(template, data, apiPath);
    }

    get(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log('Retrieving data from [%s]', url);

            const options = {
                uri: url,
                headers: {
                    'User-Agent': USER_AGENT
                }
            };

            req(options, (e, response, body) => {
                if (e) {
                    return reject(e);
                }

                if (!body || response.statusCode !== 200) {
                    const detail = (body) ? (typeof body === 'string') ? body : JSON.stringify(body['error']) : response.statusCode.toString();
                    const summary = format('Error retrieving data from [%s]: %s', url, detail);
                    return reject(new Error(summary));
                }

                return resolve(JSON.parse(body));
            });
        });
    }

    render(template: string, data: any, exportPath: string): Promise<void> {
        return this.renderer.render(template, data).then(result => new Promise<void>((resolve, reject) => {
            mkdirp(path.dirname(exportPath), function(e) {
                if (e) {
                    return reject(e);
                }

                fs.writeFile(exportPath, result, function(e) {
                    if (e) {
                        return reject(e);
                    }

                    return resolve();
                });
            });
        }));
    }
}
