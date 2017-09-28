// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        resourceviews(version: string): any;
        resourceviews(version: 'v1beta2'): resourceviews.v1beta2.Resourceviews;
    }

    namespace resourceviews {
        namespace v1beta2 {
            export interface Resourceviews {
                new(options: any): Resourceviews;

                'zoneOperations': {
                    'get': (parameters: { [key: string]: any; 'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'zoneViews': {
                    'addResources': (parameters: { [key: string]: any; 'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: ResourceView, response: any) => void) => Request;
                    'getService': (parameters: { [key: string]: any; 'project': string, 'resourceName'?: string, 'resourceView': string, 'zone': string}, callback: (error: any, body: ZoneViewsGetServiceResponse, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: ZoneViewsList, response: any) => void) => Request;
                    'listResources': (parameters: { [key: string]: any; 'format'?: string, 'listState'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'resourceView': string, 'serviceName'?: string, 'zone': string}, callback: (error: any, body: ZoneViewsListResourcesResponse, response: any) => void) => Request;
                    'removeResources': (parameters: { [key: string]: any; 'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setService': (parameters: { [key: string]: any; 'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };

            }

            export interface Label {
                'key': string;
                'value': string;
            }

            export interface ListResourceResponseItem {
                'endpoints': {
                    [name: string]: number[]
                ;
                };
                'resource': string;
            }

            export interface Operation {
                'clientOperationId': string;
                'creationTimestamp': string;
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

            export interface OperationList {
                'id': string;
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface ResourceView {
                'creationTimestamp': string;
                'description': string;
                'endpoints': ServiceEndpoint[];
                'fingerprint': string;
                'id': string;
                'kind': string;
                'labels': Label[];
                'name': string;
                'network': string;
                'resources': string[];
                'selfLink': string;
                'size': number;
            }

            export interface ServiceEndpoint {
                'name': string;
                'port': number;
            }

            export interface ZoneViewsAddResourcesRequest {
                'resources': string[];
            }

            export interface ZoneViewsGetServiceResponse {
                'endpoints': ServiceEndpoint[];
                'fingerprint': string;
            }

            export interface ZoneViewsList {
                'items': ResourceView[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface ZoneViewsListResourcesResponse {
                'items': ListResourceResponseItem[];
                'network': string;
                'nextPageToken': string;
            }

            export interface ZoneViewsRemoveResourcesRequest {
                'resources': string[];
            }

            export interface ZoneViewsSetServiceRequest {
                'endpoints': ServiceEndpoint[];
                'fingerprint': string;
                'resourceName': string;
            }

        }
    }
}
