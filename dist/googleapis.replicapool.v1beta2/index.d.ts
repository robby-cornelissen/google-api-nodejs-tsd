// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        replicapool(version: string): any;
        replicapool(version: 'v1beta2'): replicapool.v1beta2.Replicapool;
    }

    namespace replicapool {
        namespace v1beta2 {
            export interface Replicapool {
                new(options: any): Replicapool;

                'instanceGroupManagers': {
                    'abandonInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deleteInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManager, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'size': number, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManagerList, response: any) => void) => Request;
                    'recreateInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resize': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'size': number, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setInstanceTemplate': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTargetPools': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'zoneOperations': {
                    'get': (parameters: { [key: string]: any; 'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };

            }

            export interface InstanceGroupManager {
                'autoHealingPolicies': ReplicaPoolAutoHealingPolicy[];
                'baseInstanceName': string;
                'creationTimestamp': string;
                'currentSize': number;
                'description': string;
                'fingerprint': string;
                'group': string;
                'id': string;
                'instanceTemplate': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'targetPools': string[];
                'targetSize': number;
            }

            export interface InstanceGroupManagerList {
                'id': string;
                'items': InstanceGroupManager[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceGroupManagersAbandonInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersDeleteInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersRecreateInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersSetInstanceTemplateRequest {
                'instanceTemplate': string;
            }

            export interface InstanceGroupManagersSetTargetPoolsRequest {
                'fingerprint': string;
                'targetPools': string[];
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

            export interface ReplicaPoolAutoHealingPolicy {
                'actionType': string;
                'healthCheck': string;
            }

        }
    }
}
