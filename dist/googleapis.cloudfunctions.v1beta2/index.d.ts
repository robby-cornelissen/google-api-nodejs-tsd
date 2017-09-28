// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudfunctions(version: string): any;
        cloudfunctions(version: 'v1beta2'): cloudfunctions.v1beta2.Cloudfunctions;
    }

    namespace cloudfunctions {
        namespace v1beta2 {
            export interface Cloudfunctions {
                new(options: any): Cloudfunctions;

                'projects': {
                    'locations': {
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'name': string, 'pageSize'?: number}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;

                        'functions': {
                            'call': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CallFunctionResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'location': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CloudFunction, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'location': string, 'pageToken'?: string}, callback: (error: any, body: ListFunctionsResponse, response: any) => void) => Request;
                        };
                    };
                };
                'operations': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name'?: string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };

            }

            export interface CloudFunction {
                'serviceAccount': string;
                'sourceArchiveUrl': string;
                'sourceRepository': SourceRepository;
                'entryPoint': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'sourceRepositoryUrl': string;
                'updateTime': string;
                'latestOperation': string;
                'httpsTrigger': HTTPSTrigger;
                'timeout': string;
                'status': string;
                'eventTrigger': EventTrigger;
                'availableMemoryMb': number;
                'name': string;
                'versionId': string;
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

            export interface Retry {}

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface ListFunctionsResponse {
                'functions': CloudFunction[];
                'nextPageToken': string;
            }

            export interface ListLocationsResponse {
                'nextPageToken': string;
                'locations': Location[];
            }

            export interface CallFunctionResponse {
                'executionId': string;
                'error': string;
                'result': string;
            }

            export interface EventTrigger {
                'service': string;
                'failurePolicy': FailurePolicy;
                'eventType': string;
                'resource': string;
            }

            export interface HTTPSTrigger {
                'url': string;
            }

            export interface FailurePolicy {
                'retry': Retry;
            }

            export interface Operation {
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
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

            export interface SourceRepository {
                'sourcePath': string;
                'deployedRevision': string;
                'revision': string;
                'repositoryUrl': string;
                'tag': string;
                'branch': string;
            }

            export interface CallFunctionRequest {
                'data': string;
            }

        }
    }
}
