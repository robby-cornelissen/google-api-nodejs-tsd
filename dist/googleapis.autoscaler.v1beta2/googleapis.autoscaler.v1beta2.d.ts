/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        autoscaler(version: string): any;
        autoscaler(version: 'v1beta2'): autoscaler.v1beta2.Autoscaler;
    }

    namespace autoscaler {
        namespace v1beta2 {
            export interface Autoscaler {
                new(options: any): Autoscaler;

                'autoscalers': {
                    'delete': (parameters: {'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Autoscaler, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: AutoscalerListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'zoneOperations': {
                    'delete': (parameters: {'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'zones': {
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ZoneList, response: any) => void) => Request;
                };

            }

            interface Autoscaler {
                'autoscalingPolicy': AutoscalingPolicy;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'target': string;
            }

            interface AutoscalerListResponse {
                'items': Autoscaler[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AutoscalingPolicy {
                'coolDownPeriodSec': number;
                'cpuUtilization': AutoscalingPolicyCpuUtilization;
                'customMetricUtilizations': AutoscalingPolicyCustomMetricUtilization[];
                'loadBalancingUtilization': AutoscalingPolicyLoadBalancingUtilization;
                'maxNumReplicas': number;
                'minNumReplicas': number;
            }

            interface AutoscalingPolicyCpuUtilization {
                'utilizationTarget': number;
            }

            interface AutoscalingPolicyCustomMetricUtilization {
                'metric': string;
                'utilizationTarget': number;
                'utilizationTargetType': string;
            }

            interface AutoscalingPolicyLoadBalancingUtilization {
                'utilizationTarget': number;
            }

            interface DeprecationStatus {
                'deleted': string;
                'deprecated': string;
                'obsolete': string;
                'replacement': string;
                'state': string;
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

            interface Zone {
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'id': string;
                'kind': string;
                'maintenanceWindows': {
                    'beginTime': string;
                    'description': string;
                    'endTime': string;
                    'name': string;
                }[];
                'name': string;
                'region': string;
                'selfLink': string;
                'status': string;
            }

            interface ZoneList {
                'id': string;
                'items': Zone[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

        }
    }
}