// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        acceleratedmobilepageurl(version: string): any;
        acceleratedmobilepageurl(version: 'v1'): acceleratedmobilepageurl.v1.Acceleratedmobilepageurl;
    }

    namespace acceleratedmobilepageurl {
        namespace v1 {
            export interface Acceleratedmobilepageurl {
                new(options: any): Acceleratedmobilepageurl;

                'ampUrls': {
                    'batchGet': (parameters: { [key: string]: any; }, callback: (error: any, body: BatchGetAmpUrlsResponse, response: any) => void) => Request;
                };

            }

            export interface AmpUrl {
                'cdnAmpUrl': string;
                'ampUrl': string;
                'originalUrl': string;
            }

            export interface AmpUrlError {
                'errorMessage': string;
                'errorCode': string;
                'originalUrl': string;
            }

            export interface BatchGetAmpUrlsRequest {
                'urls': string[];
                'lookupStrategy': string;
            }

            export interface BatchGetAmpUrlsResponse {
                'urlErrors': AmpUrlError[];
                'ampUrls': AmpUrl[];
            }

        }
    }
}
