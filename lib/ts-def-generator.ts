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

export class TsDefGenerator {
    private static DEFAULT_OPTIONS: Options = {
        discoveryUrl: 'https://www.googleapis.com/discovery/v1/apis/',
        templatePath: './templates/googleapis.d.ts.swig'
    };

    private discoveryUrl: string;
    private template: string;

    constructor(options?: Options) {
        let opts = Object.assign({}, TsDefGenerator.DEFAULT_OPTIONS, options);

        this.discoveryUrl = opts.discoveryUrl;
        this.template = fs.readFileSync(opts.templatePath, {encoding: 'utf8'});
    }

    generate(): Promise<void> {
        return this.generateContent().then((content) => {
            let exportPath = path.join('dist', MODULE + '.d.ts');

            mkdirp(path.dirname(exportPath), function(e) {
                if (e) {
                    throw e;
                } else {
                    fs.writeFile(exportPath, content, function(e) {
                        if (e) {
                            throw e;
                        }
                    });
                }
            });
        });
    }

    generateContent(): Promise<string> {
        return this.getApis(this.discoveryUrl).then(apis => {
            let tsDef = swig.render(this.template, {
                locals: {
                    apis: apis,
                    index: apis.reduce((index, api) => {
                        if (!(api.name in index)) {
                            index[api.name] = [];
                        }

                        index[api.name].push(api.version);

                        return index;
                    }, {})
                }
            });

            return tsDef;
        });
    }

    getApis(apisUrl: string): Promise<any[]> {
        return this.getData(apisUrl).then(apis => {
            return Promise.all(apis['items'].map(api => {
                let apiUrl = api['discoveryRestUrl'];

                return this.getData(apiUrl);
            }));
        });
    }

    getData(url: string): Promise<any> {
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
                } else {
                    return resolve(JSON.parse(body))
                }
            });
        });
    }

    static initialize(): void {
        swig.setDefaults({
            autoescape: false,
            locals: {br: '\n'},
            loader: swig.loaders.fs(path.join(__dirname, '..', 'templates'))
        });
        swig.setFilter('indent', (input: string, number: number) => {
            let prefix = ' '.repeat(number || 4);

            return input.replace(/^/gm, prefix);
        })
    }
}

export module TsDefGenerator {
    TsDefGenerator.initialize();
}

interface Options {
    discoveryUrl?: string;
    templatePath?: string;
}