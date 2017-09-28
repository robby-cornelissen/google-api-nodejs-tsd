// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        groupsmigration(version: string): any;
        groupsmigration(version: 'v1'): groupsmigration.v1.Groupsmigration;
    }

    namespace groupsmigration {
        namespace v1 {
            export interface Groupsmigration {
                new(options: any): Groupsmigration;

                'archive': {
                    'insert': (parameters: { [key: string]: any; 'groupId': string}, callback: (error: any, body: Groups, response: any) => void) => Request;
                };

            }

            export interface Groups {
                'kind': string;
                'responseCode': string;
            }

        }
    }
}
