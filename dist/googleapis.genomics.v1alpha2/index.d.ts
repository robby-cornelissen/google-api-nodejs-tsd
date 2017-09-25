// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        genomics(version: string): any;
        genomics(version: 'v1alpha2'): genomics.v1alpha2.Genomics;
    }

    namespace genomics {
        namespace v1alpha2 {
            export interface Genomics {
                new(options: any): Genomics;

                'pipelines': {
                    'get': (parameters: { [key: string]: any; 'pipelineId': string}, callback: (error: any, body: Pipeline, response: any) => void) => Request;
                    'setOperationStatus': (parameters: { [key: string]: any; }, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'pipelineId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'getControllerConfig': (parameters: { [key: string]: any; 'operationId'?: string, 'validationToken'?: string}, callback: (error: any, body: ControllerConfig, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'namePrefix'?: string, 'pageToken'?: string, 'pageSize'?: number, 'projectId'?: string}, callback: (error: any, body: ListPipelinesResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Pipeline, response: any) => void) => Request;
                    'run': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'operations': {
                    'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };

            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface ServiceAccount {
                'scopes': string[];
                'email': string;
            }

            export interface Pipeline {
                'name': string;
                'projectId': string;
                'pipelineId': string;
                'outputParameters': PipelineParameter[];
                'description': string;
                'docker': DockerExecutor;
                'inputParameters': PipelineParameter[];
                'resources': PipelineResources;
            }

            export interface PipelineResources {
                'minimumCpuCores': number;
                'noAddress': boolean;
                'disks': Disk[];
                'bootDiskSizeGb': number;
                'preemptible': boolean;
                'minimumRamGb': number;
                'zones': string[];
            }

            export interface OperationEvent {
                'startTime': string;
                'description': string;
                'endTime': string;
            }

            export interface ControllerConfig {
                'gcsSources': {
                    [name: string]: RepeatedString
                ;
                };
                'gcsSinks': {
                    [name: string]: RepeatedString
                ;
                };
                'disks': {
                    [name: string]: string
                ;
                };
                'machineType': string;
                'cmd': string;
                'vars': {
                    [name: string]: string
                ;
                };
                'image': string;
                'gcsLogPath': string;
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface RepeatedString {
                'values': string[];
            }

            export interface OperationMetadata {
                'startTime': string;
                'request': {
                    [name: string]: any
                ;
                };
                'runtimeMetadata': {
                    [name: string]: any
                ;
                };
                'createTime': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'projectId': string;
                'clientId': string;
                'endTime': string;
                'events': OperationEvent[];
            }

            export interface RunPipelineArgs {
                'labels': {
                    [name: string]: string
                ;
                };
                'logging': LoggingOptions;
                'outputs': {
                    [name: string]: string
                ;
                };
                'resources': PipelineResources;
                'keepVmAliveOnFailureDuration': string;
                'projectId': string;
                'clientId': string;
                'serviceAccount': ServiceAccount;
                'inputs': {
                    [name: string]: string
                ;
                };
            }

            export interface ListPipelinesResponse {
                'nextPageToken': string;
                'pipelines': Pipeline[];
            }

            export interface SetOperationStatusRequest {
                'operationId': string;
                'validationToken': string;
                'errorMessage': string;
                'errorCode': string;
                'timestampEvents': TimestampEvent[];
            }

            export interface ComputeEngine {
                'instanceName': string;
                'zone': string;
                'diskNames': string[];
                'machineType': string;
            }

            export interface ImportVariantsResponse {
                'callSetIds': string[];
            }

            export interface TimestampEvent {
                'timestamp': string;
                'description': string;
            }

            export interface LocalCopy {
                'path': string;
                'disk': string;
            }

            export interface DockerExecutor {
                'cmd': string;
                'imageName': string;
            }

            export interface Empty {}

            export interface Disk {
                'name': string;
                'type': string;
                'autoDelete': boolean;
                'sizeGb': number;
                'mountPoint': string;
                'readOnly': boolean;
                'source': string;
            }

            export interface PipelineParameter {
                'name': string;
                'description': string;
                'localCopy': LocalCopy;
                'defaultValue': string;
            }

            export interface LoggingOptions {
                'gcsPath': string;
            }

            export interface RunPipelineRequest {
                'pipelineArgs': RunPipelineArgs;
                'pipelineId': string;
                'ephemeralPipeline': Pipeline;
            }

            export interface CancelOperationRequest {}

            export interface Operation {
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
            }

            export interface RuntimeMetadata {
                'computeEngine': ComputeEngine;
            }

            export interface ImportReadGroupSetsResponse {
                'readGroupSetIds': string[];
            }

        }
    }
}
