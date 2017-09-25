// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        dataproc(version: string): any;
        dataproc(version: 'v1'): dataproc.v1.Dataproc;
    }

    namespace dataproc {
        namespace v1 {
            export interface Dataproc {
                new(options: any): Dataproc;

                'projects': {
                    'regions': {
                        'operations': {
                            'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                        };
                        'jobs': {
                            'submit': (parameters: { [key: string]: any; 'projectId': string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'region': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'region': string, 'clusterName'?: string, 'projectId': string, 'filter'?: string, 'jobStateMatcher'?: string, 'pageToken'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                            'cancel': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'updateMask'?: string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        };
                        'clusters': {
                            'create': (parameters: { [key: string]: any; 'projectId': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'region': string, 'clusterName': string, 'projectId': string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'region': string, 'clusterName': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'clusterName': string, 'projectId': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'diagnose': (parameters: { [key: string]: any; 'region': string, 'clusterName': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'filter'?: string, 'region': string, 'pageToken'?: string, 'pageSize'?: number, 'projectId': string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface SparkJob {
                'mainClass': string;
                'archiveUris': string[];
                'mainJarFileUri': string;
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
                'properties': {
                    [name: string]: string
                ;
                };
                'args': string[];
                'fileUris': string[];
            }

            export interface Job {
                'pigJob': PigJob;
                'hiveJob': HiveJob;
                'labels': {
                    [name: string]: string
                ;
                };
                'driverOutputResourceUri': string;
                'sparkJob': SparkJob;
                'sparkSqlJob': SparkSqlJob;
                'statusHistory': JobStatus[];
                'yarnApplications': YarnApplication[];
                'pysparkJob': PySparkJob;
                'reference': JobReference;
                'hadoopJob': HadoopJob;
                'placement': JobPlacement;
                'status': JobStatus;
                'driverControlFilesUri': string;
                'scheduling': JobScheduling;
            }

            export interface JobStatus {
                'details': string;
                'state': string;
                'substate': string;
                'stateStartTime': string;
            }

            export interface ManagedGroupConfig {
                'instanceGroupManagerName': string;
                'instanceTemplateName': string;
            }

            export interface ClusterOperationStatus {
                'stateStartTime': string;
                'details': string;
                'state': string;
                'innerState': string;
            }

            export interface HadoopJob {
                'mainClass': string;
                'archiveUris': string[];
                'mainJarFileUri': string;
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
                'properties': {
                    [name: string]: string
                ;
                };
                'args': string[];
                'fileUris': string[];
            }

            export interface QueryList {
                'queries': string[];
            }

            export interface YarnApplication {
                'name': string;
                'trackingUrl': string;
                'progress': number;
                'state': string;
            }

            export interface DiagnoseClusterRequest {}

            export interface DiskConfig {
                'numLocalSsds': number;
                'bootDiskSizeGb': number;
            }

            export interface ClusterOperationMetadata {
                'warnings': string[];
                'labels': {
                    [name: string]: string
                ;
                };
                'status': ClusterOperationStatus;
                'statusHistory': ClusterOperationStatus[];
                'clusterName': string;
                'clusterUuid': string;
                'operationType': string;
                'description': string;
            }

            export interface Empty {}

            export interface HiveJob {
                'jarFileUris': string[];
                'scriptVariables': {
                    [name: string]: string
                ;
                };
                'properties': {
                    [name: string]: string
                ;
                };
                'continueOnFailure': boolean;
                'queryFileUri': string;
                'queryList': QueryList;
            }

            export interface DiagnoseClusterResults {
                'outputUri': string;
            }

            export interface ClusterConfig {
                'initializationActions': NodeInitializationAction[];
                'configBucket': string;
                'workerConfig': InstanceGroupConfig;
                'gceClusterConfig': GceClusterConfig;
                'softwareConfig': SoftwareConfig;
                'masterConfig': InstanceGroupConfig;
                'secondaryWorkerConfig': InstanceGroupConfig;
            }

            export interface PySparkJob {
                'args': string[];
                'fileUris': string[];
                'pythonFileUris': string[];
                'mainPythonFileUri': string;
                'archiveUris': string[];
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
                'properties': {
                    [name: string]: string
                ;
                };
            }

            export interface GceClusterConfig {
                'subnetworkUri': string;
                'networkUri': string;
                'zoneUri': string;
                'internalIpOnly': boolean;
                'metadata': {
                    [name: string]: string
                ;
                };
                'serviceAccountScopes': string[];
                'tags': string[];
                'serviceAccount': string;
            }

            export interface ClusterMetrics {
                'yarnMetrics': {
                    [name: string]: string
                ;
                };
                'hdfsMetrics': {
                    [name: string]: string
                ;
                };
            }

            export interface AcceleratorConfig {
                'acceleratorCount': number;
                'acceleratorTypeUri': string;
            }

            export interface LoggingConfig {
                'driverLogLevels': {
                    [name: string]: string
                ;
                };
            }

            export interface Operation {
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': Status;
            }

            export interface JobReference {
                'jobId': string;
                'projectId': string;
            }

            export interface SubmitJobRequest {
                'job': Job;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface InstanceGroupConfig {
                'diskConfig': DiskConfig;
                'machineTypeUri': string;
                'imageUri': string;
                'isPreemptible': boolean;
                'managedGroupConfig': ManagedGroupConfig;
                'instanceNames': string[];
                'accelerators': AcceleratorConfig[];
                'numInstances': number;
            }

            export interface JobScheduling {
                'maxFailuresPerHour': number;
            }

            export interface NodeInitializationAction {
                'executableFile': string;
                'executionTimeout': string;
            }

            export interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            export interface CancelJobRequest {}

            export interface SparkSqlJob {
                'queryList': QueryList;
                'queryFileUri': string;
                'scriptVariables': {
                    [name: string]: string
                ;
                };
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
                'properties': {
                    [name: string]: string
                ;
                };
            }

            export interface Cluster {
                'labels': {
                    [name: string]: string
                ;
                };
                'metrics': ClusterMetrics;
                'status': ClusterStatus;
                'statusHistory': ClusterStatus[];
                'config': ClusterConfig;
                'clusterUuid': string;
                'clusterName': string;
                'projectId': string;
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface SoftwareConfig {
                'properties': {
                    [name: string]: string
                ;
                };
                'imageVersion': string;
            }

            export interface JobPlacement {
                'clusterUuid': string;
                'clusterName': string;
            }

            export interface ClusterStatus {
                'detail': string;
                'state': string;
                'substate': string;
                'stateStartTime': string;
            }

            export interface PigJob {
                'continueOnFailure': boolean;
                'queryFileUri': string;
                'queryList': QueryList;
                'jarFileUris': string[];
                'scriptVariables': {
                    [name: string]: string
                ;
                };
                'loggingConfig': LoggingConfig;
                'properties': {
                    [name: string]: string
                ;
                };
            }

            export interface ListClustersResponse {
                'nextPageToken': string;
                'clusters': Cluster[];
            }

        }
    }
}
