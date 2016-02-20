/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        genomics(version: string): any;
        genomics(version: 'v1alpha2'): genomics.v1alpha2.Genomics;
    }

    namespace genomics {
        namespace v1alpha2 {
            export interface Genomics {
                new(options: any): Genomics;

                'operations': {
                    'get': (parameters: {'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'name': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    'cancel': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'pipelines': {
                    'create': (parameters: any, callback: (error: any, body: Pipeline, response: any) => void) => Request;
                    'run': (parameters: any, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'pipelineId': string}, callback: (error: any, body: Pipeline, response: any) => void) => Request;
                    'list': (parameters: {'projectId'?: string, 'namePrefix'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListPipelinesResponse, response: any) => void) => Request;
                    'delete': (parameters: {'pipelineId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'update_status': (parameters: any, callback: (error: any, body: Empty, response: any) => void) => Request;
                
                    'controller_config': {
                        'get': (parameters: {'operationId': string, 'validationToken'?: string}, callback: (error: any, body: ControllerConfig, response: any) => void) => Request;
                    };
                };

            }

            interface Operation {
                'name': string;
                'metadata': {
                    [name: string]: any
                };
                'done': boolean;
                'error': Status;
                'response': {
                    [name: string]: any
                };
            }

            interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                }[];
            }

            interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            interface CancelOperationRequest {}

            interface Empty {}

            interface Pipeline {
                'projectId': string;
                'name': string;
                'description': string;
                'inputParameters': PipelineParameter[];
                'outputParameters': PipelineParameter[];
                'docker': DockerExecutor;
                'resources': PipelineResources;
                'pipelineId': string;
            }

            interface PipelineParameter {
                'name': string;
                'description': string;
                'defaultValue': string;
                'localCopy': LocalCopy;
            }

            interface LocalCopy {
                'path': string;
                'disk': string;
            }

            interface DockerExecutor {
                'imageName': string;
                'cmd': string;
            }

            interface PipelineResources {
                'minimumCpuCores': number;
                'preemptible': boolean;
                'minimumRamGb': number;
                'disks': Disk[];
                'zones': string[];
            }

            interface Disk {
                'name': string;
                'type': string;
                'sizeGb': number;
                'source': string;
                'autoDelete': boolean;
                'readOnly': boolean;
                'mountPoint': string;
            }

            interface RunPipelineRequest {
                'pipelineId': string;
                'ephemeralPipeline': Pipeline;
                'pipelineArgs': RunPipelineArgs;
            }

            interface RunPipelineArgs {
                'projectId': string;
                'inputs': {
                    [name: string]: string
                };
                'outputs': {
                    [name: string]: string
                };
                'serviceAccount': ServiceAccount;
                'clientId': string;
                'resources': PipelineResources;
                'logging': LoggingOptions;
            }

            interface ServiceAccount {
                'email': string;
                'scopes': string[];
            }

            interface LoggingOptions {
                'gcsPath': string;
            }

            interface ListPipelinesResponse {
                'pipelines': Pipeline[];
                'nextPageToken': string;
            }

            interface ControllerConfig {
                'image': string;
                'cmd': string;
                'gcsLogPath': string;
                'machineType': string;
                'vars': {
                    [name: string]: string
                };
                'disks': {
                    [name: string]: string
                };
                'gcsSources': {
                    [name: string]: RepeatedString
                };
                'gcsSinks': {
                    [name: string]: RepeatedString
                };
            }

            interface RepeatedString {
                'values': string[];
            }

            interface UpdateStatusRequest {
                'operationId': string;
                'timestampEvents': TimestampEvent[];
                'errorCode': string;
                'errorMessage': string;
                'validationToken': string;
            }

            interface TimestampEvent {
                'description': string;
                'timestamp': string;
            }

            interface ImportReadGroupSetsResponse {
                'readGroupSetIds': string[];
            }

            interface ImportVariantsResponse {
                'callSetIds': string[];
            }

            interface OperationMetadata {
                'projectId': string;
                'createTime': string;
                'request': {
                    [name: string]: any
                };
                'events': OperationEvent[];
            }

            interface OperationEvent {
                'description': string;
            }

        }
    }
}