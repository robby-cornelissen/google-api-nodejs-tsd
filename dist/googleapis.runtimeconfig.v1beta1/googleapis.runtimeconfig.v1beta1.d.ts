// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        runtimeconfig(version: string): any;
        runtimeconfig(version: 'v1beta1'): runtimeconfig.v1beta1.Runtimeconfig;
    }

    namespace runtimeconfig {
        namespace v1beta1 {
            export interface Runtimeconfig {
                new(options: any): Runtimeconfig;

                'projects': {
                    'configs': {
                        'update': (parameters: {'name': string}, callback: (error: any, body: RuntimeConfig, response: any) => void) => Request;
                        'get': (parameters: {'name': string}, callback: (error: any, body: RuntimeConfig, response: any) => void) => Request;
                        'create': (parameters: {'parent': string}, callback: (error: any, body: RuntimeConfig, response: any) => void) => Request;
                        'list': (parameters: {'pageSize'?: number, 'parent': string, 'pageToken'?: string}, callback: (error: any, body: ListConfigsResponse, response: any) => void) => Request;
                        'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    
                        'variables': {
                            'watch': (parameters: {'name': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'list': (parameters: {'pageSize'?: number, 'filter'?: string, 'parent': string, 'pageToken'?: string}, callback: (error: any, body: ListVariablesResponse, response: any) => void) => Request;
                            'get': (parameters: {'name': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'create': (parameters: {'parent': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'update': (parameters: {'name': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'delete': (parameters: {'recursive'?: boolean, 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                        'waiters': {
                            'get': (parameters: {'name': string}, callback: (error: any, body: Waiter, response: any) => void) => Request;
                            'create': (parameters: {'parent': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: {'pageSize'?: number, 'parent': string, 'pageToken'?: string}, callback: (error: any, body: ListWaitersResponse, response: any) => void) => Request;
                            'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                        'operations': {
                            'get': (parameters: {'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Status {
                'code': number;
                'details': {
                    [name: string]: any
                
                }[];
                'message': string;
            }

            export interface ListConfigsResponse {
                'nextPageToken': string;
                'configs': RuntimeConfig[];
            }

            export interface Variable {
                'value': string;
                'updateTime': string;
                'state': string;
                'name': string;
            }

            export interface Operation {
                'error': Status;
                'done': boolean;
                'metadata': {
                    [name: string]: any
                
                };
                'response': {
                    [name: string]: any
                
                };
                'name': string;
            }

            export interface Waiter {
                'timeout': string;
                'success': EndCondition;
                'failure': EndCondition;
                'createTime': string;
                'name': string;
                'error': Status;
                'done': boolean;
            }

            export interface RuntimeConfig {
                'description': string;
                'name': string;
            }

            export interface ListWaitersResponse {
                'nextPageToken': string;
                'waiters': Waiter[];
            }

            export interface EndCondition {
                'cardinality': Cardinality;
            }

            export interface Cardinality {
                'path': string;
                'number': number;
            }

            export interface Empty {}

            export interface WatchVariableRequest {
                'newerThan': string;
            }

            export interface ListVariablesResponse {
                'variables': Variable[];
                'nextPageToken': string;
            }

        }
    }
}