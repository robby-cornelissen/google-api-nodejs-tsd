/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        groupsmigration(version: string): any;
        groupsmigration(version: 'v1'): groupsmigration.v1.Groupsmigration;
    }

    namespace groupsmigration {
        namespace v1 {
            export interface Groupsmigration {
                new(options: any): Groupsmigration;

                'archive': {
                    'insert': (parameters: {'groupId': string}, callback: (error: any, body: Groups, response: any) => void) => Request;
                };

            }

            export interface Groups {
                'kind': string;
                'responseCode': string;
            }

        }
    }
}