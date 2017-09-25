// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        ml(version: string): any;
        ml(version: 'v1'): ml.v1.Ml;
    }

    namespace ml {
        namespace v1 {
            export interface Ml {
                new(options: any): Ml;

                'projects': {
                    'getConfig': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleCloudMlV1__GetConfigResponse, response: any) => void) => Request;
                    'predict': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleApi__HttpBody, response: any) => void) => Request;

                    'models': {
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: GoogleCloudMlV1__Model, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: GoogleIamV1__Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: GoogleIamV1__Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleCloudMlV1__Model, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: GoogleIamV1__TestIamPermissionsResponse, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleLongrunning__Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'parent': string, 'pageToken'?: string}, callback: (error: any, body: GoogleCloudMlV1__ListModelsResponse, response: any) => void) => Request;

                        'versions': {
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleCloudMlV1__Version, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: GoogleCloudMlV1__ListVersionsResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: GoogleLongrunning__Operation, response: any) => void) => Request;
                            'setDefault': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleCloudMlV1__Version, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleLongrunning__Operation, response: any) => void) => Request;
                        };
                    };
                    'operations': {
                        'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleProtobuf__Empty, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleProtobuf__Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleLongrunning__Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: GoogleLongrunning__ListOperationsResponse, response: any) => void) => Request;
                    };
                    'jobs': {
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: GoogleCloudMlV1__Job, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: GoogleIamV1__Policy, response: any) => void) => Request;
                        'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleProtobuf__Empty, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: GoogleIamV1__Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleCloudMlV1__Job, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: GoogleIamV1__TestIamPermissionsResponse, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string, 'filter'?: string}, callback: (error: any, body: GoogleCloudMlV1__ListJobsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface GoogleCloudMlV1__Version {
                'lastUseTime': string;
                'runtimeVersion': string;
                'description': string;
                'deploymentUri': string;
                'autoScaling': GoogleCloudMlV1__AutoScaling;
                'isDefault': boolean;
                'createTime': string;
                'manualScaling': GoogleCloudMlV1__ManualScaling;
                'state': string;
                'name': string;
                'errorMessage': string;
            }

            export interface GoogleCloudMlV1__ParameterSpec {
                'discreteValues': number[];
                'scaleType': string;
                'maxValue': number;
                'type': string;
                'parameterName': string;
                'categoricalValues': string[];
                'minValue': number;
            }

            export interface GoogleCloudMlV1__PredictionInput {
                'maxWorkerCount': string;
                'uri': string;
                'dataFormat': string;
                'runtimeVersion': string;
                'batchSize': string;
                'inputPaths': string[];
                'region': string;
                'versionName': string;
                'modelName': string;
                'outputPath': string;
            }

            export interface GoogleType__Expr {
                'description': string;
                'expression': string;
                'location': string;
                'title': string;
            }

            export interface GoogleCloudMlV1__OperationMetadata {
                'version': GoogleCloudMlV1__Version;
                'endTime': string;
                'operationType': string;
                'startTime': string;
                'isCancellationRequested': boolean;
                'createTime': string;
                'modelName': string;
            }

            export interface GoogleIamV1__AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface GoogleCloudMlV1__HyperparameterSpec {
                'hyperparameterMetricTag': string;
                'goal': string;
                'maxTrials': number;
                'params': GoogleCloudMlV1__ParameterSpec[];
                'maxParallelTrials': number;
            }

            export interface GoogleCloudMlV1__ListJobsResponse {
                'jobs': GoogleCloudMlV1__Job[];
                'nextPageToken': string;
            }

            export interface GoogleCloudMlV1__SetDefaultVersionRequest {}

            export interface GoogleLongrunning__Operation {
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': GoogleRpc__Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
            }

            export interface GoogleIamV1__AuditConfig {
                'auditLogConfigs': GoogleIamV1__AuditLogConfig[];
                'exemptedMembers': string[];
                'service': string;
            }

            export interface GoogleCloudMlV1__Model {
                'regions': string[];
                'name': string;
                'description': string;
                'onlinePredictionLogging': boolean;
                'defaultVersion': GoogleCloudMlV1__Version;
            }

            export interface GoogleProtobuf__Empty {}

            export interface GoogleIamV1__TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface GoogleCloudMlV1__CancelJobRequest {}

            export interface GoogleCloudMlV1__ListVersionsResponse {
                'versions': GoogleCloudMlV1__Version[];
                'nextPageToken': string;
            }

            export interface GoogleCloudMlV1__AutoScaling {
                'minNodes': number;
            }

            export interface GoogleRpc__Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface GoogleCloudMlV1__ListModelsResponse {
                'nextPageToken': string;
                'models': GoogleCloudMlV1__Model[];
            }

            export interface GoogleCloudMlV1__TrainingInput {
                'jobDir': string;
                'hyperparameters': GoogleCloudMlV1__HyperparameterSpec;
                'parameterServerCount': string;
                'packageUris': string[];
                'workerCount': string;
                'masterType': string;
                'runtimeVersion': string;
                'pythonModule': string;
                'region': string;
                'args': string[];
                'workerType': string;
                'parameterServerType': string;
                'scaleTier': string;
            }

            export interface GoogleCloudMlV1__Job {
                'jobId': string;
                'errorMessage': string;
                'endTime': string;
                'startTime': string;
                'predictionOutput': GoogleCloudMlV1__PredictionOutput;
                'trainingOutput': GoogleCloudMlV1__TrainingOutput;
                'trainingInput': GoogleCloudMlV1__TrainingInput;
                'createTime': string;
                'state': string;
                'predictionInput': GoogleCloudMlV1__PredictionInput;
            }

            export interface GoogleApi__HttpBody {
                'extensions': {
                    [name: string]: any
                ;
                }[];
                'data': string;
                'contentType': string;
            }

            export interface GoogleCloudMlV1__GetConfigResponse {
                'serviceAccountProject': string;
                'serviceAccount': string;
            }

            export interface GoogleIamV1__TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface GoogleIamV1__SetIamPolicyRequest {
                'policy': GoogleIamV1__Policy;
                'updateMask': string;
            }

            export interface GoogleCloudMlV1__HyperparameterOutput {
                'finalMetric': GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric;
                'hyperparameters': {
                    [name: string]: string
                ;
                };
                'trialId': string;
                'allMetrics': GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric[];
            }

            export interface GoogleCloudMlV1__PredictionOutput {
                'nodeHours': number;
                'outputPath': string;
                'predictionCount': string;
                'errorCount': string;
            }

            export interface GoogleIamV1__Policy {
                'version': number;
                'auditConfigs': GoogleIamV1__AuditConfig[];
                'bindings': GoogleIamV1__Binding[];
                'iamOwned': boolean;
                'etag': string;
            }

            export interface GoogleLongrunning__ListOperationsResponse {
                'nextPageToken': string;
                'operations': GoogleLongrunning__Operation[];
            }

            export interface GoogleCloudMlV1__ManualScaling {
                'nodes': number;
            }

            export interface GoogleCloudMlV1__TrainingOutput {
                'consumedMLUnits': number;
                'trials': GoogleCloudMlV1__HyperparameterOutput[];
                'completedTrialCount': string;
                'isHyperparameterTuningJob': boolean;
            }

            export interface GoogleIamV1__Binding {
                'role': string;
                'condition': GoogleType__Expr;
                'members': string[];
            }

            export interface GoogleCloudMlV1__PredictRequest {
                'httpBody': GoogleApi__HttpBody;
            }

            export interface GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric {
                'trainingStep': string;
                'objectiveValue': number;
            }

        }
    }
}
