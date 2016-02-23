// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        deploymentmanager(version: string): any;
        deploymentmanager(version: 'v2'): deploymentmanager.v2.Deploymentmanager;
    }

    namespace deploymentmanager {
        namespace v2 {
            export interface Deploymentmanager {
                new(options: any): Deploymentmanager;

                'deployments': {
                    'cancelPreview': (parameters: {'deployment': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'deployment': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'deployment': string, 'project': string}, callback: (error: any, body: Deployment, response: any) => void) => Request;
                    'insert': (parameters: {'preview'?: boolean, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DeploymentsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'createPolicy'?: string, 'deletePolicy'?: string, 'deployment': string, 'preview'?: boolean, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'stop': (parameters: {'deployment': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'createPolicy'?: string, 'deletePolicy'?: string, 'deployment': string, 'preview'?: boolean, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'manifests': {
                    'get': (parameters: {'deployment': string, 'manifest': string, 'project': string}, callback: (error: any, body: Manifest, response: any) => void) => Request;
                    'list': (parameters: {'deployment': string, 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ManifestsListResponse, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };
                'resources': {
                    'get': (parameters: {'deployment': string, 'project': string, 'resource': string}, callback: (error: any, body: Resource, response: any) => void) => Request;
                    'list': (parameters: {'deployment': string, 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ResourcesListResponse, response: any) => void) => Request;
                };
                'types': {
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TypesListResponse, response: any) => void) => Request;
                };

            }

            export interface ConfigFile {
                'content': string;
            }

            export interface Deployment {
                'description': string;
                'fingerprint': string;
                'id': string;
                'insertTime': string;
                'labels': DeploymentLabelEntry[];
                'manifest': string;
                'name': string;
                'operation': Operation;
                'target': TargetConfiguration;
                'update': DeploymentUpdate;
            }

            export interface DeploymentLabelEntry {
                'key': string;
                'value': string;
            }

            export interface DeploymentUpdate {
                'labels': DeploymentUpdateLabelEntry[];
                'manifest': string;
            }

            export interface DeploymentUpdateLabelEntry {
                'key': string;
                'value': string;
            }

            export interface DeploymentsCancelPreviewRequest {
                'fingerprint': string;
            }

            export interface DeploymentsListResponse {
                'deployments': Deployment[];
                'nextPageToken': string;
            }

            export interface DeploymentsStopRequest {
                'fingerprint': string;
            }

            export interface ImportFile {
                'content': string;
                'name': string;
            }

            export interface Manifest {
                'config': ConfigFile;
                'expandedConfig': string;
                'id': string;
                'imports': ImportFile[];
                'insertTime': string;
                'layout': string;
                'name': string;
                'selfLink': string;
            }

            export interface ManifestsListResponse {
                'manifests': Manifest[];
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

            export interface Resource {
                'finalProperties': string;
                'id': string;
                'insertTime': string;
                'manifest': string;
                'name': string;
                'properties': string;
                'type': string;
                'update': ResourceUpdate;
                'updateTime': string;
                'url': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
            }

            export interface ResourceUpdate {
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'finalProperties': string;
                'intent': string;
                'manifest': string;
                'properties': string;
                'state': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
            }

            export interface ResourcesListResponse {
                'nextPageToken': string;
                'resources': Resource[];
            }

            export interface TargetConfiguration {
                'config': ConfigFile;
                'imports': ImportFile[];
            }

            export interface Type {
                'id': string;
                'insertTime': string;
                'name': string;
                'selfLink': string;
            }

            export interface TypesListResponse {
                'nextPageToken': string;
                'types': Type[];
            }

        }
    }
}