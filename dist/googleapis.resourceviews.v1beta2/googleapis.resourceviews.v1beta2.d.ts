/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        resourceviews(version: string): any;
        resourceviews(version: 'v1beta2'): resourceviews.v1beta2.Resourceviews;
    }

    namespace resourceviews {
        namespace v1beta2 {
            export interface Resourceviews {
                new(options: any): Resourceviews;

                'zoneOperations': {
                    'get': (parameters: {'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'zoneViews': {
                    'addResources': (parameters: {'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: ResourceView, response: any) => void) => Request;
                    'getService': (parameters: {'project': string, 'resourceName'?: string, 'resourceView': string, 'zone': string}, callback: (error: any, body: ZoneViewsGetServiceResponse, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: ZoneViewsList, response: any) => void) => Request;
                    'listResources': (parameters: {'format'?: string, 'listState'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'resourceView': string, 'serviceName'?: string, 'zone': string}, callback: (error: any, body: ZoneViewsListResourcesResponse, response: any) => void) => Request;
                    'removeResources': (parameters: {'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setService': (parameters: {'project': string, 'resourceView': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };

            }

            interface Label {
                'key': string;
                'value': string;
            }

            interface ListResourceResponseItem {
                'endpoints': {
                    [name: string]: number[]
                };
                'resource': string;
            }

            interface Operation {
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

            interface OperationList {
                'id': string;
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface ResourceView {
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

            interface ServiceEndpoint {
                'name': string;
                'port': number;
            }

            interface ZoneViewsAddResourcesRequest {
                'resources': string[];
            }

            interface ZoneViewsGetServiceResponse {
                'endpoints': ServiceEndpoint[];
                'fingerprint': string;
            }

            interface ZoneViewsList {
                'items': ResourceView[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface ZoneViewsListResourcesResponse {
                'items': ListResourceResponseItem[];
                'network': string;
                'nextPageToken': string;
            }

            interface ZoneViewsRemoveResourcesRequest {
                'resources': string[];
            }

            interface ZoneViewsSetServiceRequest {
                'endpoints': ServiceEndpoint[];
                'fingerprint': string;
                'resourceName': string;
            }

        }
    }
}