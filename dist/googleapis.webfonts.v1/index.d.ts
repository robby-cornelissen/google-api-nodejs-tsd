// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        webfonts(version: string): any;
        webfonts(version: 'v1'): webfonts.v1.Webfonts;
    }

    namespace webfonts {
        namespace v1 {
            export interface Webfonts {
                new(options: any): Webfonts;

                'webfonts': {
                    'list': (parameters: { [key: string]: any; 'sort'?: string}, callback: (error: any, body: WebfontList, response: any) => void) => Request;
                };

            }

            export interface Webfont {
                'category': string;
                'family': string;
                'files': {
                    [name: string]: string
                ;
                };
                'kind': string;
                'lastModified': string;
                'subsets': string[];
                'variants': string[];
                'version': string;
            }

            export interface WebfontList {
                'items': Webfont[];
                'kind': string;
            }

        }
    }
}
