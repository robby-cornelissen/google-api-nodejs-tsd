/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        replicapool(version: string): any;
        replicapool(version: 'v1beta2'): replicapool.v1beta2.Replicapool;
    }

    namespace replicapool {
        namespace v1beta2 {
            export interface Replicapool {
                new(options: any): Replicapool;

                'instanceGroupManagers': {
                    'abandonInstances': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deleteInstances': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManager, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'size': number, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManagerList, response: any) => void) => Request;
                    'recreateInstances': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resize': (parameters: {'instanceGroupManager': string, 'project': string, 'size': number, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setInstanceTemplate': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTargetPools': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'zoneOperations': {
                    'get': (parameters: {'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };

            }

            interface InstanceGroupManager {
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

            interface InstanceGroupManagerList {
                'id': string;
                'items': InstanceGroupManager[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceGroupManagersAbandonInstancesRequest {
                'instances': string[];
            }

            interface InstanceGroupManagersDeleteInstancesRequest {
                'instances': string[];
            }

            interface InstanceGroupManagersRecreateInstancesRequest {
                'instances': string[];
            }

            interface InstanceGroupManagersSetInstanceTemplateRequest {
                'instanceTemplate': string;
            }

            interface InstanceGroupManagersSetTargetPoolsRequest {
                'fingerprint': string;
                'targetPools': string[];
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

            interface ReplicaPoolAutoHealingPolicy {
                'actionType': string;
                'healthCheck': string;
            }

        }
    }
}