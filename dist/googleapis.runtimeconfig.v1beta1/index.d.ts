// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
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
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListConfigsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'requestId'?: string, 'parent': string}, callback: (error: any, body: RuntimeConfig, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: RuntimeConfig, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: RuntimeConfig, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;

                        'waiters': {
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Waiter, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListWaitersResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'requestId'?: string, 'parent': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        };
                        'operations': {
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        };
                        'variables': {
                            'create': (parameters: { [key: string]: any; 'requestId'?: string, 'parent': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'watch': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'recursive'?: boolean, 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'parent': string, 'filter'?: string, 'returnValues'?: boolean, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListVariablesResponse, response: any) => void) => Request;
                        };
                    };
                };

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

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface Cardinality {
                'number': number;
                'path': string;
            }

            export interface Empty {}

            export interface ListConfigsResponse {
                'configs': RuntimeConfig[];
                'nextPageToken': string;
            }

            export interface EndCondition {
                'cardinality': Cardinality;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface ListVariablesResponse {
                'nextPageToken': string;
                'variables': Variable[];
            }

            export interface RuntimeConfig {
                'name': string;
                'description': string;
            }

            export interface WatchVariableRequest {
                'newerThan': string;
            }

            export interface ListWaitersResponse {
                'nextPageToken': string;
                'waiters': Waiter[];
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Waiter {
                'failure': EndCondition;
                'success': EndCondition;
                'done': boolean;
                'createTime': string;
                'timeout': string;
                'name': string;
                'error': Status;
            }

            export interface Variable {
                'value': string;
                'state': string;
                'updateTime': string;
                'name': string;
                'text': string;
            }

            export interface Policy {
                'etag': string;
                'version': number;
                'bindings': Binding[];
            }

        }
    }
}
