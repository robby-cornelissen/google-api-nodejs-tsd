// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudfunctions(version: string): any;
        cloudfunctions(version: 'v1'): cloudfunctions.v1.Cloudfunctions;
    }

    namespace cloudfunctions {
        namespace v1 {
            export interface Cloudfunctions {
                new(options: any): Cloudfunctions;

                'projects': {
                    'locations': {
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'name': string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;
                    };
                };
                'operations': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name'?: string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };

            }

            export interface OperationMetadataV1Beta2 {
                'target': string;
                'versionId': string;
                'request': {
                    [name: string]: any
                ;
                };
                'type': string;
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface ListLocationsResponse {
                'locations': Location[];
                'nextPageToken': string;
            }

            export interface Location {
                'metadata': {
                    [name: string]: any
                ;
                };
                'labels': {
                    [name: string]: string
                ;
                };
                'name': string;
                'locationId': string;
            }

            export interface Operation {
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

        }
    }
}
