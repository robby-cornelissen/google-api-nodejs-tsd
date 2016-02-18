'use strict';

import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as req from 'request';
import * as swig from 'swig';
import {format} from 'util';

const MODULE: string = 'googleapis';
const PACKAGE: any = require(path.join(MODULE, 'package.json'));
const USER_AGENT: string = 'google-api-nodejs-client/' + PACKAGE.version;

interface Options {
    discoveryUrl?: string;
    baseTemplatePath?: string;
    apiTemplatePath?: string;
    exportPath?: string;
}

export class Generator {
    private static DEFAULT_OPTIONS: Options = {
        discoveryUrl: 'https://www.googleapis.com/discovery/v1/apis/',
        baseTemplatePath: './templates/apis.d.ts.swig',
        apiTemplatePath: './templates/api.d.ts.swig',
        exportPath: 'dist'
    };

    private discoveryUrl: string;
    private baseTemplate: string;
    private apiTemplate: string;
    private exportPath: string;

    constructor(options?: Options) {
        let opts = Object.assign({}, Generator.DEFAULT_OPTIONS, options);

        this.discoveryUrl = opts.discoveryUrl;
        this.baseTemplate = fs.readFileSync(opts.baseTemplatePath, {encoding: 'utf8'});
        this.apiTemplate = fs.readFileSync(opts.apiTemplatePath, {encoding: 'utf8'});
        this.exportPath = opts.exportPath;
    }

    generate(): Promise<any> {
        return this.get(this.discoveryUrl).then((data) => {
            let baseName = MODULE;
            let basePath = path.join(this.exportPath, baseName, baseName + '.d.ts');

            let renderBase = this.render(this.baseTemplate, {}, basePath);
            let renderApis = data['items'].filter(item => item.name === 'discovery').map((item) => this.get(item['discoveryRestUrl']).then(api => {
                let apiName = MODULE + '.' + api['name'] + '.' + api['version'];
                let apiPath = path.join(this.exportPath, apiName, apiName + '.d.ts');

                return this.render(this.apiTemplate, api, apiPath);
            }));

            return Promise.all<any>([renderBase, Promise.all(renderApis)]);
        });
    }

    get(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log('Retrieving data from [%s]', url);

            let options = {
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
                    let detail = body ? JSON.stringify(body['error']) : response.statusCode.toString();
                    let summary = format('Error retrieving data from [%s]: %s', url, detail);

                    return reject(new Error(summary));
                }

                return resolve(JSON.parse(body))
            });
        });
    }

    render(template, data, exportPath): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let content = swig.render(template, {locals: data});

            mkdirp(path.dirname(exportPath), function(e) {
                if (e) {
                    return reject(e);
                }

                fs.writeFile(exportPath, content, function(e) {
                    if (e) {
                        return reject(e);
                    }

                    return resolve();
                });
            });
        });
    }

    static initialize(): void {
        swig.setDefaults({
            autoescape: false,
            locals: {
                module: MODULE,
                br: '\n'
            },
            loader: swig.loaders.fs(path.join(__dirname, '..', 'templates'))
        });
        swig.setFilter('indent', (input: string, number: number) => {
            let prefix = ' '.repeat(number || 4);

            return input.replace(/^/gm, prefix);
        });
    }
}

export module Generator {
    Generator.initialize();
}