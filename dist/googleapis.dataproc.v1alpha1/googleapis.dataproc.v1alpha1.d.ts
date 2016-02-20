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

            interface Cluster {
                'projectId': string;
                'clusterName': string;
                'configuration': ClusterConfiguration;
                'status': ClusterStatus;
                'statusHistory': ClusterStatus[];
                'createTime': string;
                'clusterUuid': string;
            }

            interface ClusterConfiguration {
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

            interface GceConfiguration {
                'imageUri': string;
                'machineTypeUri': string;
                'zoneUri': string;
                'networkUri': string;
                'serviceAccountScopes': string[];
            }

            interface DiskConfiguration {
                'bootDiskSizeGb': number;
                'numLocalSsds': number;
            }

            interface GceClusterConfiguration {
                'zoneUri': string;
                'networkUri': string;
                'subnetworkUri': string;
                'serviceAccountScopes': string[];
                'tags': string[];
                'metadata': {
                    [name: string]: string
                };
            }

            interface InstanceGroupConfiguration {
                'numInstances': number;
                'instanceNames': string[];
                'imageUri': string;
                'machineTypeUri': string;
                'diskConfiguration': DiskConfiguration;
                'isPreemptible': boolean;
                'managedGroupConfiguration': ManagedGroupConfiguration;
            }

            interface ManagedGroupConfiguration {
                'instanceTemplateName': string;
                'instanceGroupManagerName': string;
            }

            interface SoftwareConfiguration {
                'imageVersion': string;
                'properties': {
                    [name: string]: string
                };
            }

            interface NodeInitializationAction {
                'executableFile': string;
                'executionTimeout': string;
            }

            interface ClusterStatus {
                'state': string;
                'detail': string;
                'stateStartTime': string;
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

            interface ListClustersResponse {
                'clusters': Cluster[];
                'nextPageToken': string;
            }

            interface SubmitJobRequest {
                'job': Job;
            }

            interface Job {
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

            interface JobReference {
                'projectId': string;
                'jobId': string;
            }

            interface JobPlacement {
                'clusterName': string;
                'clusterUuid': string;
            }

            interface HadoopJob {
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

            interface LoggingConfiguration {
                'driverLogLevels': {
                    [name: string]: string
                };
            }

            interface SparkJob {
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

            interface PySparkJob {
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

            interface HiveJob {
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

            interface QueryList {
                'queries': string[];
            }

            interface PigJob {
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

            interface SparkSqlJob {
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

            interface JobStatus {
                'state': string;
                'details': string;
                'insertTime': string;
                'startTime': string;
                'endTime': string;
                'stateStartTime': string;
            }

            interface YarnApplication {
                'name': string;
                'state': string;
                'progress': number;
                'trackingUrl': string;
            }

            interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            interface ListJobsRequest {
                'pageSize': number;
                'pageToken': string;
                'clusterName': string;
                'jobStateMatcher': string;
            }

            interface CancelJobRequest {}

            interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            interface CancelOperationRequest {}

            interface Empty {}

            interface DiagnoseClusterResults {
                'outputUri': string;
            }

            interface ClusterOperationMetadata {
                'clusterName': string;
                'clusterUuid': string;
                'status': ClusterOperationStatus;
                'statusHistory': ClusterOperationStatus[];
                'operationType': string;
                'description': string;
            }

            interface ClusterOperationStatus {
                'state': string;
                'innerState': string;
                'details': string;
                'stateStartTime': string;
            }

            interface DiagnoseClusterOutputLocation {
                'outputUri': string;
            }

            interface OperationMetadata {
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

            interface OperationStatus {
                'state': string;
                'innerState': string;
                'details': string;
                'stateStartTime': string;
            }

        }
    }
}