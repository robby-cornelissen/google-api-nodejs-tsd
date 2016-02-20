/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        webfonts(version: string): any;
        webfonts(version: 'v1'): webfonts.v1.Webfonts;
    }

    namespace webfonts {
        namespace v1 {
            export interface Webfonts {
                new(options: any): Webfonts;

                'webfonts': {
                    'list': (parameters: {'sort'?: string}, callback: (error: any, body: WebfontList, response: any) => void) => Request;
                };

            }

            interface Webfont {
                'category': string;
                'family': string;
                'files': {
                    [name: string]: string
                };
                'kind': string;
                'lastModified': string;
                'subsets': string[];
                'variants': string[];
                'version': string;
            }

            interface WebfontList {
                'items': Webfont[];
                'kind': string;
            }

        }
    }
}