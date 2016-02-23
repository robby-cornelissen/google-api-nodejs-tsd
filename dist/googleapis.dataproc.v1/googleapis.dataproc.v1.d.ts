// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dataproc(version: string): any;
        dataproc(version: 'v1'): dataproc.v1.Dataproc;
    }

    namespace dataproc {
        namespace v1 {
            export interface Dataproc {
                new(options: any): Dataproc;

                'media': {
                    'upload': (parameters: {'resourceName': string}, callback: (error: any, body: Media, response: any) => void) => Request;
                    'download': (parameters: {'resourceName': string}, callback: (error: any, body: Media, response: any) => void) => Request;
                };
                'projects': {
                    'regions': {
                        'clusters': {
                            'create': (parameters: {'projectId': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'patch': (parameters: {'projectId': string, 'region': string, 'clusterName': string, 'updateMask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: {'projectId': string, 'region': string, 'clusterName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: {'projectId': string, 'region': string, 'clusterName': string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'list': (parameters: {'projectId': string, 'region': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                            'diagnose': (parameters: {'projectId': string, 'region': string, 'clusterName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        };
                        'jobs': {
                            'submit': (parameters: {'projectId': string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'get': (parameters: {'projectId': string, 'region': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'list': (parameters: {'projectId': string, 'region': string, 'pageSize'?: number, 'pageToken'?: string, 'clusterName'?: string, 'jobStateMatcher'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                            'cancel': (parameters: {'projectId': string, 'region': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'delete': (parameters: {'projectId': string, 'region': string, 'jobId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                        'operations': {
                            'get': (parameters: {'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: {'name': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                            'cancel': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Media {
                'resourceName': string;
            }

            export interface Cluster {
                'projectId': string;
                'clusterName': string;
                'config': ClusterConfig;
                'status': ClusterStatus;
                'statusHistory': ClusterStatus[];
                'clusterUuid': string;
            }

            export interface ClusterConfig {
                'configBucket': string;
                'gceClusterConfig': GceClusterConfig;
                'masterConfig': InstanceGroupConfig;
                'workerConfig': InstanceGroupConfig;
                'secondaryWorkerConfig': InstanceGroupConfig;
                'softwareConfig': SoftwareConfig;
                'initializationActions': NodeInitializationAction[];
            }

            export interface GceClusterConfig {
                'zoneUri': string;
                'networkUri': string;
                'subnetworkUri': string;
                'serviceAccountScopes': string[];
                'tags': string[];
                'metadata': {
                    [name: string]: string
                
                };
            }

            export interface InstanceGroupConfig {
                'numInstances': number;
                'instanceNames': string[];
                'imageUri': string;
                'machineTypeUri': string;
                'diskConfig': DiskConfig;
                'isPreemptible': boolean;
                'managedGroupConfig': ManagedGroupConfig;
            }

            export interface DiskConfig {
                'bootDiskSizeGb': number;
                'numLocalSsds': number;
            }

            export interface ManagedGroupConfig {
                'instanceTemplateName': string;
                'instanceGroupManagerName': string;
            }

            export interface SoftwareConfig {
                'imageVersion': string;
                'properties': {
                    [name: string]: string
                
                };
            }

            export interface NodeInitializationAction {
                'executableFile': string;
                'executionTimeout': string;
            }

            export interface ClusterStatus {
                'state': string;
                'detail': string;
                'stateStartTime': string;
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

            export interface ListClustersResponse {
                'clusters': Cluster[];
                'nextPageToken': string;
            }

            export interface DiagnoseClusterRequest {}

            export interface SubmitJobRequest {
                'job': Job;
            }

            export interface Job {
                'reference': JobReference;
                'placement': JobPlacement;
                'hadoopJob': HadoopJob;
                'sparkJob': SparkJob;
                'pysparkJob': PySparkJob;
                'hiveJob': HiveJob;
                'pigJob': PigJob;
                'sparkSqlJob': SparkSqlJob;
                'status': JobStatus;
                'statusHistory': JobStatus[];
                'driverOutputResourceUri': string;
                'driverControlFilesUri': string;
            }

            export interface JobReference {
                'projectId': string;
                'jobId': string;
            }

            export interface JobPlacement {
                'clusterName': string;
                'clusterUuid': string;
            }

            export interface HadoopJob {
                'mainJarFileUri': string;
                'mainClass': string;
                'args': string[];
                'jarFileUris': string[];
                'fileUris': string[];
                'archiveUris': string[];
                'properties': {
                    [name: string]: string
                
                };
                'loggingConfig': LoggingConfig;
            }

            export interface LoggingConfig {
                'driverLogLevels': {
                    [name: string]: string
                
                };
            }

            export interface SparkJob {
                'mainJarFileUri': string;
                'mainClass': string;
                'args': string[];
                'jarFileUris': string[];
                'fileUris': string[];
                'archiveUris': string[];
                'properties': {
                    [name: string]: string
                
                };
                'loggingConfig': LoggingConfig;
            }

            export interface PySparkJob {
                'mainPythonFileUri': string;
                'args': string[];
                'pythonFileUris': string[];
                'jarFileUris': string[];
                'fileUris': string[];
                'archiveUris': string[];
                'properties': {
                    [name: string]: string
                
                };
                'loggingConfig': LoggingConfig;
            }

            export interface HiveJob {
                'queryFileUri': string;
                'queryList': QueryList;
                'continueOnFailure': boolean;
                'scriptVariables': {
                    [name: string]: string
                
                };
                'properties': {
                    [name: string]: string
                
                };
                'jarFileUris': string[];
            }

            export interface QueryList {
                'queries': string[];
            }

            export interface PigJob {
                'queryFileUri': string;
                'queryList': QueryList;
                'continueOnFailure': boolean;
                'scriptVariables': {
                    [name: string]: string
                
                };
                'properties': {
                    [name: string]: string
                
                };
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
            }

            export interface SparkSqlJob {
                'queryFileUri': string;
                'queryList': QueryList;
                'scriptVariables': {
                    [name: string]: string
                
                };
                'properties': {
                    [name: string]: string
                
                };
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
            }

            export interface JobStatus {
                'state': string;
                'details': string;
                'stateStartTime': string;
            }

            export interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            export interface CancelJobRequest {}

            export interface Empty {}

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface DiagnoseClusterResults {
                'outputUri': string;
            }

            export interface ClusterOperationMetadata {
                'clusterName': string;
                'clusterUuid': string;
                'status': ClusterOperationStatus;
                'statusHistory': ClusterOperationStatus[];
                'operationType': string;
                'description': string;
            }

            export interface ClusterOperationStatus {
                'state': string;
                'innerState': string;
                'details': string;
                'stateStartTime': string;
            }

            export interface DiagnoseClusterOutputLocation {
                'outputUri': string;
            }

            export interface OperationMetadata {
                'state': string;
                'innerState': string;
                'details': string;
                'insertTime': string;
                'startTime': string;
                'endTime': string;
                'clusterName': string;
                'clusterUuid': string;
                'status': OperationStatus;
                'statusHistory': OperationStatus[];
                'operationType': string;
                'description': string;
            }

            export interface OperationStatus {
                'state': string;
                'innerState': string;
                'details': string;
                'stateStartTime': string;
            }

        }
    }
}