// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        dataproc(version: string): any;
        dataproc(version: 'v1beta2'): dataproc.v1beta2.Dataproc;
    }

    namespace dataproc {
        namespace v1beta2 {
            export interface Dataproc {
                new(options: any): Dataproc;

                'projects': {
                    'regions': {
                        'jobs': {
                            'list': (parameters: { [key: string]: any; 'jobStateMatcher'?: string, 'pageToken'?: string, 'pageSize'?: number, 'region': string, 'clusterName'?: string, 'projectId': string, 'filter'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                            'cancel': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'region': string, 'jobId': string, 'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'updateMask'?: string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'submit': (parameters: { [key: string]: any; 'projectId': string, 'region': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'region': string, 'jobId': string, 'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                        'clusters': {
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'projectId': string, 'filter'?: string, 'region': string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'region': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'clusterName': string, 'projectId': string, 'region': string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'clusterName': string, 'gracefulDecommissionTimeout'?: string, 'projectId': string, 'updateMask'?: string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'projectId': string, 'region': string, 'clusterName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'diagnose': (parameters: { [key: string]: any; 'clusterName': string, 'projectId': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        };
                        'operations': {
                            'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface ListClustersResponse {
                'nextPageToken': string;
                'clusters': Cluster[];
            }

            export interface Job {
                'reference': JobReference;
                'hadoopJob': HadoopJob;
                'placement': JobPlacement;
                'status': JobStatus;
                'driverControlFilesUri': string;
                'scheduling': JobScheduling;
                'pigJob': PigJob;
                'hiveJob': HiveJob;
                'labels': {
                    [name: string]: string
                ;
                };
                'driverOutputResourceUri': string;
                'sparkJob': SparkJob;
                'statusHistory': JobStatus[];
                'sparkSqlJob': SparkSqlJob;
                'yarnApplications': YarnApplication[];
                'pysparkJob': PySparkJob;
            }

            export interface SparkJob {
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
                'properties': {
                    [name: string]: string
                ;
                };
                'args': string[];
                'fileUris': string[];
                'mainClass': string;
                'archiveUris': string[];
                'mainJarFileUri': string;
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

            export interface LifecycleConfig {
                'autoDeleteTtl': string;
                'autoDeleteTime': string;
                'idleDeleteTtl': string;
            }

            export interface ClusterOperationStatus {
                'innerState': string;
                'stateStartTime': string;
                'details': string;
                'state': string;
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
                'state': string;
                'name': string;
                'trackingUrl': string;
                'progress': number;
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
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
                'clusterUuid': string;
                'clusterName': string;
                'operationType': string;
                'description': string;
            }

            export interface HiveJob {
                'continueOnFailure': boolean;
                'queryList': QueryList;
                'queryFileUri': string;
                'jarFileUris': string[];
                'scriptVariables': {
                    [name: string]: string
                ;
                };
                'properties': {
                    [name: string]: string
                ;
                };
            }

            export interface Empty {}

            export interface DiagnoseClusterResults {
                'outputUri': string;
            }

            export interface ClusterConfig {
                'gceClusterConfig': GceClusterConfig;
                'softwareConfig': SoftwareConfig;
                'masterConfig': InstanceGroupConfig;
                'secondaryWorkerConfig': InstanceGroupConfig;
                'lifecycleConfig': LifecycleConfig;
                'initializationActions': NodeInitializationAction[];
                'configBucket': string;
                'workerConfig': InstanceGroupConfig;
            }

            export interface PySparkJob {
                'pythonFileUris': string[];
                'mainPythonFileUri': string;
                'archiveUris': string[];
                'jarFileUris': string[];
                'loggingConfig': LoggingConfig;
                'properties': {
                    [name: string]: string
                ;
                };
                'args': string[];
                'fileUris': string[];
            }

            export interface GceClusterConfig {
                'tags': string[];
                'serviceAccount': string;
                'subnetworkUri': string;
                'networkUri': string;
                'zoneUri': string;
                'metadata': {
                    [name: string]: string
                ;
                };
                'internalIpOnly': boolean;
                'serviceAccountScopes': string[];
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

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface LoggingConfig {
                'driverLogLevels': {
                    [name: string]: string
                ;
                };
            }

            export interface Policy {
                'etag': string;
                'version': number;
                'bindings': Binding[];
            }

            export interface Operation {
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
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

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface JobScheduling {
                'maxFailuresPerHour': number;
            }

            export interface InstanceGroupConfig {
                'diskConfig': DiskConfig;
                'imageUri': string;
                'isPreemptible': boolean;
                'machineTypeUri': string;
                'managedGroupConfig': ManagedGroupConfig;
                'instanceNames': string[];
                'accelerators': AcceleratorConfig[];
                'numInstances': number;
            }

            export interface ListJobsResponse {
                'nextPageToken': string;
                'jobs': Job[];
            }

            export interface NodeInitializationAction {
                'executionTimeout': string;
                'executableFile': string;
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
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface JobPlacement {
                'clusterUuid': string;
                'clusterName': string;
            }

            export interface SoftwareConfig {
                'imageVersion': string;
                'properties': {
                    [name: string]: string
                ;
                };
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

        }
    }
}
