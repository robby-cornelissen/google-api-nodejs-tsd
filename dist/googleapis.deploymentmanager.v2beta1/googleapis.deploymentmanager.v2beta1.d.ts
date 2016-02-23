// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        deploymentmanager(version: string): any;
        deploymentmanager(version: 'v2beta1'): deploymentmanager.v2beta1.Deploymentmanager;
    }

    namespace deploymentmanager {
        namespace v2beta1 {
            export interface Deploymentmanager {
                new(options: any): Deploymentmanager;

                'deployments': {
                    'delete': (parameters: {'deployment': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'deployment': string, 'project': string}, callback: (error: any, body: Deployment, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DeploymentsListResponse, response: any) => void) => Request;
                };
                'manifests': {
                    'get': (parameters: {'deployment': string, 'manifest': string, 'project': string}, callback: (error: any, body: Manifest, response: any) => void) => Request;
                    'list': (parameters: {'deployment': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ManifestsListResponse, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };
                'resources': {
                    'get': (parameters: {'deployment': string, 'project': string, 'resource': string}, callback: (error: any, body: Resource, response: any) => void) => Request;
                    'list': (parameters: {'deployment': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ResourcesListResponse, response: any) => void) => Request;
                };
                'types': {
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TypesListResponse, response: any) => void) => Request;
                };

            }

            export interface Deployment {
                'description': string;
                'id': string;
                'manifest': string;
                'name': string;
                'targetConfig': string;
            }

            export interface DeploymentsListResponse {
                'deployments': Deployment[];
                'nextPageToken': string;
            }

            export interface Manifest {
                'config': string;
                'evaluatedConfig': string;
                'id': string;
                'name': string;
                'selfLink': string;
            }

            export interface ManifestsListResponse {
                'manifests': Manifest[];
                'nextPageToken': string;
            }

            export interface Operation {
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
                'name': string;
                'operationType': string;
                'progress': number;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'statusMessage': string;
                'targetId': string;
                'targetLink': string;
                'user': string;
                'warnings': {
                    'code': any;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
            }

            export interface OperationsListResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface Resource {
                'errors': string[];
                'id': string;
                'intent': string;
                'manifest': string;
                'name': string;
                'state': string;
                'type': string;
                'url': string;
            }

            export interface ResourcesListResponse {
                'nextPageToken': string;
                'resources': Resource[];
            }

            export interface Type {
                'name': string;
            }

            export interface TypesListResponse {
                'types': Type[];
            }

        }
    }
}