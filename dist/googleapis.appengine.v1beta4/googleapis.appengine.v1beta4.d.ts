/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        appengine(version: string): any;
        appengine(version: 'v1beta4'): appengine.v1beta4.Appengine;
    }

    namespace appengine {
        namespace v1beta4 {
            export interface Appengine {
                new(options: any): Appengine;

                'apps': {
                    'get': (parameters: {'appsId': string, 'ensureResourcesExist'?: boolean}, callback: (error: any, body: Application, response: any) => void) => Request;
                
                    'modules': {
                        'delete': (parameters: {'appsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: {'appsId': string, 'modulesId': string}, callback: (error: any, body: Module, response: any) => void) => Request;
                        'list': (parameters: {'appsId': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListModulesResponse, response: any) => void) => Request;
                        'patch': (parameters: {'appsId': string, 'modulesId': string, 'mask'?: string, 'migrateTraffic'?: boolean}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    
                        'versions': {
                            'create': (parameters: {'appsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: {'appsId': string, 'modulesId': string, 'versionsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: {'appsId': string, 'modulesId': string, 'versionsId': string, 'view'?: string}, callback: (error: any, body: Version, response: any) => void) => Request;
                            'list': (parameters: {'appsId': string, 'modulesId': string, 'view'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListVersionsResponse, response: any) => void) => Request;
                        };
                    };
                    'operations': {
                        'get': (parameters: {'appsId': string, 'operationsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: {'appsId': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    };
                };

            }

            interface Application {
                'name': string;
                'id': string;
                'dispatchRules': UrlDispatchRule[];
                'location': string;
                'codeBucket': string;
                'defaultBucket': string;
            }

            interface UrlDispatchRule {
                'domain': string;
                'path': string;
                'module': string;
            }

            interface Version {
                'name': string;
                'id': string;
                'automaticScaling': AutomaticScaling;
                'basicScaling': BasicScaling;
                'manualScaling': ManualScaling;
                'inboundServices': string[];
                'instanceClass': string;
                'network': Network;
                'resources': Resources;
                'runtime': string;
                'threadsafe': boolean;
                'vm': boolean;
                'betaSettings': {
                    [name: string]: string
                };
                'env': string;
                'servingStatus': string;
                'deployer': string;
                'creationTime': string;
                'handlers': UrlMap[];
                'errorHandlers': ErrorHandler[];
                'libraries': Library[];
                'apiConfig': ApiConfigHandler;
                'envVariables': {
                    [name: string]: string
                };
                'defaultExpiration': string;
                'healthCheck': HealthCheck;
                'nobuildFilesRegex': string;
                'deployment': Deployment;
            }

            interface AutomaticScaling {
                'coolDownPeriod': string;
                'cpuUtilization': CpuUtilization;
                'maxConcurrentRequests': number;
                'maxIdleInstances': number;
                'maxTotalInstances': number;
                'maxPendingLatency': string;
                'minIdleInstances': number;
                'minTotalInstances': number;
                'minPendingLatency': string;
                'requestUtilization': RequestUtilization;
                'diskUtilization': DiskUtilization;
                'networkUtilization': NetworkUtilization;
            }

            interface CpuUtilization {
                'aggregationWindowLength': string;
                'targetUtilization': number;
            }

            interface RequestUtilization {
                'targetRequestCountPerSec': number;
                'targetConcurrentRequests': number;
            }

            interface DiskUtilization {
                'targetWriteBytesPerSec': number;
                'targetWriteOpsPerSec': number;
                'targetReadBytesPerSec': number;
                'targetReadOpsPerSec': number;
            }

            interface NetworkUtilization {
                'targetSentBytesPerSec': number;
                'targetSentPacketsPerSec': number;
                'targetReceivedBytesPerSec': number;
                'targetReceivedPacketsPerSec': number;
            }

            interface BasicScaling {
                'idleTimeout': string;
                'maxInstances': number;
            }

            interface ManualScaling {
                'instances': number;
            }

            interface Network {
                'forwardedPorts': string[];
                'instanceTag': string;
                'name': string;
            }

            interface Resources {
                'cpu': number;
                'diskGb': number;
                'memoryGb': number;
            }

            interface UrlMap {
                'urlRegex': string;
                'staticFiles': StaticFilesHandler;
                'staticDirectory': StaticDirectoryHandler;
                'script': ScriptHandler;
                'apiEndpoint': ApiEndpointHandler;
                'securityLevel': string;
                'login': string;
                'authFailAction': string;
                'redirectHttpResponseCode': string;
            }

            interface StaticFilesHandler {
                'path': string;
                'uploadPathRegex': string;
                'httpHeaders': {
                    [name: string]: string
                };
                'mimeType': string;
                'expiration': string;
                'requireMatchingFile': boolean;
                'applicationReadable': boolean;
            }

            interface StaticDirectoryHandler {
                'directory': string;
                'httpHeaders': {
                    [name: string]: string
                };
                'mimeType': string;
                'expiration': string;
                'requireMatchingFile': boolean;
                'applicationReadable': boolean;
            }

            interface ScriptHandler {
                'scriptPath': string;
            }

            interface ApiEndpointHandler {
                'scriptPath': string;
            }

            interface ErrorHandler {
                'errorCode': string;
                'staticFile': string;
                'mimeType': string;
            }

            interface Library {
                'name': string;
                'version': string;
            }

            interface ApiConfigHandler {
                'authFailAction': string;
                'login': string;
                'script': string;
                'securityLevel': string;
                'url': string;
            }

            interface HealthCheck {
                'disableHealthCheck': boolean;
                'host': string;
                'healthyThreshold': number;
                'unhealthyThreshold': number;
                'restartThreshold': number;
                'checkInterval': string;
                'timeout': string;
            }

            interface Deployment {
                'files': {
                    [name: string]: FileInfo
                };
                'container': ContainerInfo;
                'sourceReferences': SourceReference[];
            }

            interface FileInfo {
                'sourceUrl': string;
                'sha1Sum': string;
                'mimeType': string;
            }

            interface ContainerInfo {
                'image': string;
            }

            interface SourceReference {
                'repository': string;
                'revisionId': string;
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

            interface ListVersionsResponse {
                'versions': Version[];
                'nextPageToken': string;
            }

            interface Module {
                'name': string;
                'id': string;
                'split': TrafficSplit;
            }

            interface TrafficSplit {
                'shardBy': string;
                'allocations': {
                    [name: string]: number
                };
            }

            interface ListModulesResponse {
                'modules': Module[];
                'nextPageToken': string;
            }

            interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            interface OperationMetadata {
                'operationType': string;
                'insertTime': string;
                'endTime': string;
                'user': string;
                'target': string;
                'method': string;
            }

            interface OperationMetadataV1Beta5 {
                'method': string;
                'insertTime': string;
                'endTime': string;
                'user': string;
                'target': string;
            }

        }
    }
}