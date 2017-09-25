// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        appstate(version: string): any;
        appstate(version: 'v1'): appstate.v1.Appstate;
    }

    namespace appstate {
        namespace v1 {
            export interface Appstate {
                new(options: any): Appstate;

                'states': {
                    'clear': (parameters: { [key: string]: any; 'currentDataVersion'?: string, 'stateKey': number}, callback: (error: any, body: WriteResult, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'stateKey': number}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'stateKey': number}, callback: (error: any, body: GetResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'includeData'?: boolean}, callback: (error: any, body: ListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'currentStateVersion'?: string, 'stateKey': number}, callback: (error: any, body: WriteResult, response: any) => void) => Request;
                };

            }

            export interface GetResponse {
                'currentStateVersion': string;
                'data': string;
                'kind': string;
                'stateKey': number;
            }

            export interface ListResponse {
                'items': GetResponse[];
                'kind': string;
                'maximumKeyCount': number;
            }

            export interface UpdateRequest {
                'data': string;
                'kind': string;
            }

            export interface WriteResult {
                'currentStateVersion': string;
                'kind': string;
                'stateKey': number;
            }

        }
    }
}
