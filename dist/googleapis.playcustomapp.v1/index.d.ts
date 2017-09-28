// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        playcustomapp(version: string): any;
        playcustomapp(version: 'v1'): playcustomapp.v1.Playcustomapp;
    }

    namespace playcustomapp {
        namespace v1 {
            export interface Playcustomapp {
                new(options: any): Playcustomapp;

                'accounts': {
                    'customApps': {
                        'create': (parameters: { [key: string]: any; 'account': string}, callback: (error: any, body: CustomApp, response: any) => void) => Request;
                    };
                };

            }

            export interface CustomApp {
                'languageCode': string;
                'title': string;
            }

        }
    }
}
