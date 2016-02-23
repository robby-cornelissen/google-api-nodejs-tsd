// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dataproc(version: string): any;
        dataproc(version: 'v1alpha1'): dataproc.v1alpha1.Dataproc;
    }

    namespace dataproc {
        namespace v1alpha1 {
            export interface Dataproc {
                new(options: any): Dataproc;

                'projects': {
                    'regions': {
                        'clusters': {
                            'create': (parameters: {'projectId': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'patch': (parameters: {'projectId': string, 'region': string, 'clusterName': string, 'updateMask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: {'projectId': string, 'region': string, 'clusterName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: {'projectId': string, 'region': string, 'clusterName': string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'list': (parameters: {'projectId': string, 'region': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                        };
                        'jobs': {
                            'submit': (parameters: {'projectId': string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'get': (parameters: {'projectId': string, 'region': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'cancel': (parameters: {'projectId': string, 'region': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'delete': (parameters: {'projectId': string, 'region': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        };
                    };
                };
                'operations': {
                    'get': (parameters: {'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'name': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    'cancel': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };

            }

            export interface Cluster {
                'projectId': string;
                'clusterName': string;
                'configuration': ClusterConfiguration;
                'status': ClusterStatus;
                'statusHistory': ClusterStatus[];
                'createTime': string;
                'clusterUuid': string;
            }

            export interface ClusterConfiguration {
                'configurationBucket': string;
                'gceConfiguration': GceConfiguration;
                'numWorkers': number;
                'workers': string[];
                'masterName': string;
                'masterDiskConfiguration': DiskConfiguration;
                'workerDiskConfiguration': DiskConfiguration;
                'gceClusterConfiguration': GceClusterConfiguration;
                'masterConfiguration': InstanceGroupConfiguration;
                'workerConfiguration': InstanceGroupConfiguration;
                'secondaryWorkerConfiguration': InstanceGroupConfiguration;
                'softwareConfiguration': SoftwareConfiguration;
                'initializationActions': NodeInitializationAction[];
            }

            export interface GceConfiguration {
                'imageUri': string;
                'machineTypeUri': string;
                'zoneUri': string;
                'networkUri': string;
                'serviceAccountScopes': string[];
            }

            export interface DiskConfiguration {
                'bootDiskSizeGb': number;
                'numLocalSsds': number;
            }

            export interface GceClusterConfiguration {
                'zoneUri': string;
                'networkUri': string;
                'subnetworkUri': string;
                'serviceAccountScopes': string[];
                'tags': string[];
                'metadata': {
                    [name: string]: string
                
                };
            }

            export interface InstanceGroupConfiguration {
                'numInstances': number;
                'instanceNames': string[];
                'imageUri': string;
                'machineTypeUri': string;
                'diskConfiguration': DiskConfiguration;
                'isPreemptible': boolean;
                'managedGroupConfiguration': ManagedGroupConfiguration;
            }

            export interface ManagedGroupConfiguration {
                'instanceTemplateName': string;
                'instanceGroupManagerName': string;
            }

            export interface SoftwareConfiguration {
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
                'yarnApplications': YarnApplication[];
                'submittedBy': string;
                'driverOutputUri': string;
                'driverInputResourceUri': string;
                'driverOutputResourceUri': string;
                'driverControlFilesUri': string;
                'interactive': boolean;
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
                'loggingConfiguration': LoggingConfiguration;
            }

            export interface LoggingConfiguration {
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
                'loggingConfiguration': LoggingConfiguration;
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
                'loggingConfiguration': LoggingConfiguration;
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
                'loggingConfiguration': LoggingConfiguration;
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
                'loggingConfiguration': LoggingConfiguration;
            }

            export interface JobStatus {
                'state': string;
                'details': string;
                'insertTime': string;
                'startTime': string;
                'endTime': string;
                'stateStartTime': string;
            }

            export interface YarnApplication {
                'name': string;
                'state': string;
                'progress': number;
                'trackingUrl': string;
            }

            export interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            export interface ListJobsRequest {
                'pageSize': number;
                'pageToken': string;
                'clusterName': string;
                'jobStateMatcher': string;
            }

            export interface CancelJobRequest {}

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface CancelOperationRequest {}

            export interface Empty {}

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