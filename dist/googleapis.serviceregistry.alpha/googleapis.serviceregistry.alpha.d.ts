// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        serviceregistry(version: string): any;
        serviceregistry(version: 'alpha'): serviceregistry.alpha.Serviceregistry;
    }

    namespace serviceregistry {
        namespace alpha {
            export interface Serviceregistry {
                new(options: any): Serviceregistry;

                'endpoints': {
                    'delete': (parameters: {'endpoint': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'endpoint': string, 'project': string}, callback: (error: any, body: Endpoint, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: EndpointsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'endpoint': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'endpoint': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };

            }

            export interface Endpoint {
                'address': string;
                'creationTimestamp': string;
                'description': string;
                'fingerprint': string;
                'id': string;
                'name': string;
                'port': number;
                'selfLink': string;
                'state': string;
                'visibility': EndpointEndpointVisibility;
            }

            export interface EndpointEndpointVisibility {
                'networks': string[];
            }

            export interface EndpointsListResponse {
                'endpoints': Endpoint[];
                'nextPageToken': string;
            }

            export interface Operation {
                'clientOperationId': string;
                'creationTimestamp': string;
                'description': string;
                'endTime': string;
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'httpErrorMessage': string;
                'httpErrorStatusCode': number;
                'id': string;
                'insertTime': string;
                'kind': string;
                'name': string;
                'operationType': string;
                'progress': number;
                'region': string;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'statusMessage': string;
                'targetId': string;
                'targetLink': string;
                'user': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
                'zone': string;
            }

            export interface OperationsListResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

        }
    }
}