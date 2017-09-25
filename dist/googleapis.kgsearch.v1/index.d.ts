// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        kgsearch(version: string): any;
        kgsearch(version: 'v1'): kgsearch.v1.Kgsearch;
    }

    namespace kgsearch {
        namespace v1 {
            export interface Kgsearch {
                new(options: any): Kgsearch;

                'entities': {
                    'search': (parameters: { [key: string]: any; 'prefix'?: boolean, 'query'?: string, 'types'?: string, 'indent'?: boolean, 'languages'?: string, 'ids'?: string, 'limit'?: number}, callback: (error: any, body: SearchResponse, response: any) => void) => Request;
                };

            }

            export interface SearchResponse {
                '@type': any;
                'itemListElement': any[];
                '@context': any;
            }

        }
    }
}
