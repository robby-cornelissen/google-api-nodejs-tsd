// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        cloudbuild(version: string): any;
        cloudbuild(version: 'v1'): cloudbuild.v1.Cloudbuild;
    }

    namespace cloudbuild {
        namespace v1 {
            export interface Cloudbuild {
                new(options: any): Cloudbuild;

                'projects': {
                    'builds': {
                        'get': (parameters: {'id': string, 'projectId': string}, callback: (error: any, body: Build, response: any) => void) => Request;
                        'create': (parameters: {'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: {'pageSize'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: ListBuildsResponse, response: any) => void) => Request;
                        'cancel': (parameters: {'id': string, 'projectId': string}, callback: (error: any, body: Build, response: any) => void) => Request;
                    };
                };
                'operations': {
                    'get': (parameters: {'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'name': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };

            }

            export interface Status {
                'code': number;
                'details': {
                    [name: string]: any
                
                }[];
                'message': string;
            }

            export interface BuildOperationMetadata {
                'build': Build;
            }

            export interface Source {
                'storageSource': StorageSource;
            }

            export interface Operation {
                'error': Status;
                'done': boolean;
                'response': {
                    [name: string]: any
                
                };
                'metadata': {
                    [name: string]: any
                
                };
                'name': string;
            }

            export interface BuiltImage {
                'digest': string;
                'name': string;
            }

            export interface StorageSource {
                'bucket': string;
                'object': string;
            }

            export interface Results {
                'images': BuiltImage[];
            }

            export interface Build {
                'id': string;
                'results': Results;
                'status': string;
                'finishTime': string;
                'timeout': string;
                'steps': BuildStep[];
                'source': Source;
                'createTime': string;
                'images': string[];
                'startTime': string;
                'logsBucket': string;
                'projectId': string;
            }

            export interface CancelBuildRequest {}

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface BuildStep {
                'args': string[];
                'dir': string;
                'env': string[];
                'name': string;
            }

            export interface ListBuildsResponse {
                'nextPageToken': string;
                'builds': Build[];
            }

        }
    }
}