/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dataproc(version: string): any;
        dataproc(version: 'v1beta1'): dataproc.v1beta1.Dataproc;
    }

    namespace dataproc {
        namespace v1beta1 {
            export interface Dataproc {
                new(options: any): Dataproc;

                'projects': {
                    'clusters': {
                        'create': (parameters: {'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'patch': (parameters: {'projectId': string, 'clusterName': string, 'updateMask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'delete': (parameters: {'projectId': string, 'clusterName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: {'projectId': string, 'clusterName': string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                        'list': (parameters: {'projectId': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                        'diagnose': (parameters: {'projectId': string, 'clusterName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    };
                    'jobs': {
                        'submit': (parameters: {'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'get': (parameters: {'projectId': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'list': (parameters: {'projectId': string, 'pageSize'?: number, 'pageToken'?: string, 'clusterName'?: string, 'jobStateMatcher'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                        'cancel': (parameters: {'projectId': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'delete': (parameters: {'projectId': string, 'jobId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
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
                'clusterUuid': string;
            }

            interface ClusterConfiguration {
                'configurationBucket': string;
                'gceClusterConfiguration': GceClusterConfiguration;
                'masterConfiguration': InstanceGroupConfiguration;
                'workerConfiguration': InstanceGroupConfiguration;
                'secondaryWorkerConfiguration': InstanceGroupConfiguration;
                'softwareConfiguration': SoftwareConfiguration;
                'initializationActions': NodeInitializationAction[];
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

            interface DiskConfiguration {
                'bootDiskSizeGb': number;
                'numLocalSsds': number;
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

            interface DiagnoseClusterRequest {}

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

            interface CancelJobRequest {}

            interface Empty {}

            interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            interface CancelOperationRequest {}

            interface SetIamPolicyRequest {
                'policy': Policy;
            }

            interface Policy {
                'version': number;
                'bindings': Binding[];
                'etag': string;
            }

            interface Binding {
                'role': string;
                'members': string[];
            }

            interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            interface TestIamPermissionsResponse {
                'permissions': string[];
            }

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