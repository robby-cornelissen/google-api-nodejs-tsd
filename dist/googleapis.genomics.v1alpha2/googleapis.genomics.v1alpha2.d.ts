// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

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

            export interface Operation {
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

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                
                }[];
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface CancelOperationRequest {}

            export interface Empty {}

            export interface Pipeline {
                'projectId': string;
                'name': string;
                'description': string;
                'inputParameters': PipelineParameter[];
                'outputParameters': PipelineParameter[];
                'docker': DockerExecutor;
                'resources': PipelineResources;
                'pipelineId': string;
            }

            export interface PipelineParameter {
                'name': string;
                'description': string;
                'defaultValue': string;
                'localCopy': LocalCopy;
            }

            export interface LocalCopy {
                'path': string;
                'disk': string;
            }

            export interface DockerExecutor {
                'imageName': string;
                'cmd': string;
            }

            export interface PipelineResources {
                'minimumCpuCores': number;
                'preemptible': boolean;
                'minimumRamGb': number;
                'disks': Disk[];
                'zones': string[];
            }

            export interface Disk {
                'name': string;
                'type': string;
                'sizeGb': number;
                'source': string;
                'autoDelete': boolean;
                'readOnly': boolean;
                'mountPoint': string;
            }

            export interface RunPipelineRequest {
                'pipelineId': string;
                'ephemeralPipeline': Pipeline;
                'pipelineArgs': RunPipelineArgs;
            }

            export interface RunPipelineArgs {
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

            export interface ServiceAccount {
                'email': string;
                'scopes': string[];
            }

            export interface LoggingOptions {
                'gcsPath': string;
            }

            export interface ListPipelinesResponse {
                'pipelines': Pipeline[];
                'nextPageToken': string;
            }

            export interface ControllerConfig {
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

            export interface RepeatedString {
                'values': string[];
            }

            export interface UpdateStatusRequest {
                'operationId': string;
                'timestampEvents': TimestampEvent[];
                'errorCode': string;
                'errorMessage': string;
                'validationToken': string;
            }

            export interface TimestampEvent {
                'description': string;
                'timestamp': string;
            }

            export interface ImportReadGroupSetsResponse {
                'readGroupSetIds': string[];
            }

            export interface ImportVariantsResponse {
                'callSetIds': string[];
            }

            export interface OperationMetadata {
                'projectId': string;
                'createTime': string;
                'request': {
                    [name: string]: any
                
                };
                'events': OperationEvent[];
            }

            export interface OperationEvent {
                'description': string;
            }

        }
    }
}