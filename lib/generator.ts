'use strict';

import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as swig from 'swig';
import {Transporter} from "./transporter";

export class Generator {
    private static DEFAULT_OPTIONS: Options = {
        discoveryUrl: 'https://www.googleapis.com/discovery/v1/apis/',
        apiPath: './apis',
        apiIndexPath: './apis/index.ts',
        apiTemplatePath: './templates/api-endpoint.d.ts.swig',
        apiIndexTemplatePath: './templates/api-index.d.ts.swig',
    };

    private discoveryUrl: string;
    private apiPath: string;
    private apiIndexPath: string;
    private apiTemplate: string;
    private apiIndexTemplate: string;
    private transporter: Transporter;

    constructor(options?: Options) {
        let opts = Object.assign({}, Generator.DEFAULT_OPTIONS, options);

        this.discoveryUrl = opts.discoveryUrl;
        this.apiPath = opts.apiPath;
        this.apiIndexPath = opts.apiIndexPath;

        this.apiTemplate = fs.readFileSync(opts.apiTemplatePath, {encoding: 'utf8'});
        this.apiIndexTemplate = fs.readFileSync(opts.apiIndexTemplatePath, {encoding: 'utf8'});

        this.transporter = new Transporter();
    }

    generateApi(discoveryUrl: string): void {
        this.transporter.request({
            uri: discoveryUrl
        }, (e, response) => {
            if (e) {
                console.error(e);
            } else {
                //response.Br = "\n";
                let result = swig.render(this.apiTemplate, {locals: response});
                let exportPath = path.join('apis', response['name'], response['version'] + '.d.ts');

                mkdirp(path.dirname(exportPath), function(e) {
                    if (e) {
                        console.error(e);

                        return;
                    }

                    fs.writeFile(exportPath, result, function(e) {
                        if (e) {
                            console.error(e);
                        }

                        return;
                    });
                });
            }
        });
    }

    static initialize(): void {
        swig.setDefaults({
            autoescape: false,
            locals: { br: '\n' },
            loader: swig.loaders.fs(path.join(__dirname, '..', 'templates'))
        });
        swig.setFilter('indent', (input: string, number: number) => {
            let prefix = ' '.repeat(number || 4);

            return input.replace(/^/gm, prefix);
        })
    }
}

export module Generator {
    Generator.initialize();
}

interface Options {
    discoveryUrl?: string;
    apiPath?: string;
    apiIndexPath?: string;
    apiTemplatePath?: string;
    apiIndexTemplatePath?: string;
}