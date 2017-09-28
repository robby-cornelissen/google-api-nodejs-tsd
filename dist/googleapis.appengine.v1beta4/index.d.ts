// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        appengine(version: string): any;
        appengine(version: 'v1beta4'): appengine.v1beta4.Appengine;
    }

    namespace appengine {
        namespace v1beta4 {
            export interface Appengine {
                new(options: any): Appengine;

                'apps': {
                    'patch': (parameters: { [key: string]: any; 'appsId': string, 'mask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'ensureResourcesExist'?: boolean, 'appsId': string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;

                    'modules': {
                        'delete': (parameters: { [key: string]: any; 'modulesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'appsId': string, 'migrateTraffic'?: boolean, 'mask'?: string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListModulesResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'modulesId': string}, callback: (error: any, body: Module, response: any) => void) => Request;

                        'versions': {
                            'delete': (parameters: { [key: string]: any; 'appsId': string, 'versionsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'appsId': string, 'mask'?: string, 'versionsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'view'?: string, 'modulesId': string}, callback: (error: any, body: ListVersionsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'appsId': string, 'view'?: string, 'versionsId': string, 'modulesId': string}, callback: (error: any, body: Version, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'appsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'instances': {
                                'delete': (parameters: { [key: string]: any; 'instancesId': string, 'appsId': string, 'versionsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'versionsId': string, 'modulesId': string}, callback: (error: any, body: ListInstancesResponse, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'versionsId': string, 'modulesId': string, 'instancesId': string, 'appsId': string}, callback: (error: any, body: Instance, response: any) => void) => Request;
                                'debug': (parameters: { [key: string]: any; 'versionsId': string, 'modulesId': string, 'instancesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                    };
                    'operations': {
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'operationsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'appsId': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    };
                    'locations': {
                        'get': (parameters: { [key: string]: any; 'locationsId': string, 'appsId': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface ManualScaling {
                'instances': number;
            }

            export interface TrafficSplit {
                'allocations': {
                    [name: string]: number
                ;
                };
                'shardBy': string;
            }

            export interface LocationMetadata {
                'standardEnvironmentAvailable': boolean;
                'flexibleEnvironmentAvailable': boolean;
            }

            export interface OperationMetadataV1Beta {
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
                'insertTime': string;
                'warning': string[];
                'user': string;
                'target': string;
            }

            export interface ListModulesResponse {
                'modules': Module[];
                'nextPageToken': string;
            }

            export interface Deployment {
                'files': {
                    [name: string]: FileInfo
                ;
                };
                'sourceReferences': SourceReference[];
                'container': ContainerInfo;
            }

            export interface Resources {
                'volumes': Volume[];
                'diskGb': number;
                'memoryGb': number;
                'cpu': number;
            }

            export interface Volume {
                'volumeType': string;
                'sizeGb': number;
                'name': string;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface OperationMetadata {
                'user': string;
                'target': string;
                'method': string;
                'endTime': string;
                'operationType': string;
                'insertTime': string;
            }

            export interface ListInstancesResponse {
                'nextPageToken': string;
                'instances': Instance[];
            }

            export interface OperationMetadataV1 {
                'user': string;
                'target': string;
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
                'warning': string[];
                'insertTime': string;
            }

            export interface ErrorHandler {
                'mimeType': string;
                'errorCode': string;
                'staticFile': string;
            }

            export interface OperationMetadataV1Alpha {
                'method': string;
                'endTime': string;
                'warning': string[];
                'insertTime': string;
                'user': string;
                'target': string;
                'ephemeralMessage': string;
            }

            export interface Application {
                'dispatchRules': UrlDispatchRule[];
                'defaultHostname': string;
                'name': string;
                'iap': IdentityAwareProxy;
                'authDomain': string;
                'defaultCookieExpiration': string;
                'id': string;
                'codeBucket': string;
                'location': string;
                'defaultBucket': string;
            }

            export interface Network {
                'name': string;
                'instanceTag': string;
                'forwardedPorts': string[];
            }

            export interface Instance {
                'requests': number;
                'appEngineRelease': string;
                'startTimestamp': string;
                'vmName': string;
                'vmId': string;
                'qps': number;
                'vmZoneName': string;
                'vmUnlocked': boolean;
                'name': string;
                'averageLatency': number;
                'vmIp': string;
                'memoryUsage': string;
                'id': string;
                'vmStatus': string;
                'availability': string;
                'errors': number;
            }

            export interface UrlDispatchRule {
                'path': string;
                'module': string;
                'domain': string;
            }

            export interface Module {
                'split': TrafficSplit;
                'id': string;
                'name': string;
            }

            export interface ListVersionsResponse {
                'versions': Version[];
                'nextPageToken': string;
            }

            export interface ApiEndpointHandler {
                'scriptPath': string;
            }

            export interface StaticDirectoryHandler {
                'expiration': string;
                'httpHeaders': {
                    [name: string]: string
                ;
                };
                'applicationReadable': boolean;
                'directory': string;
                'mimeType': string;
                'requireMatchingFile': boolean;
            }

            export interface AutomaticScaling {
                'minTotalInstances': number;
                'networkUtilization': NetworkUtilization;
                'coolDownPeriod': string;
                'maxConcurrentRequests': number;
                'maxPendingLatency': string;
                'cpuUtilization': CpuUtilization;
                'diskUtilization': DiskUtilization;
                'minPendingLatency': string;
                'requestUtilization': RequestUtilization;
                'maxIdleInstances': number;
                'minIdleInstances': number;
                'maxTotalInstances': number;
            }

            export interface NetworkUtilization {
                'targetReceivedBytesPerSec': number;
                'targetSentPacketsPerSec': number;
                'targetReceivedPacketsPerSec': number;
                'targetSentBytesPerSec': number;
            }

            export interface Location {
                'labels': {
                    [name: string]: string
                ;
                };
                'name': string;
                'locationId': string;
                'metadata': {
                    [name: string]: any
                ;
                };
            }

            export interface HealthCheck {
                'unhealthyThreshold': number;
                'disableHealthCheck': boolean;
                'host': string;
                'healthyThreshold': number;
                'restartThreshold': number;
                'checkInterval': string;
                'timeout': string;
            }

            export interface SourceReference {
                'repository': string;
                'revisionId': string;
            }

            export interface DebugInstanceRequest {
                'sshKey': string;
            }

            export interface Library {
                'name': string;
                'version': string;
            }

            export interface OperationMetadataV1Beta5 {
                'target': string;
                'user': string;
                'method': string;
                'insertTime': string;
                'endTime': string;
            }

            export interface ListLocationsResponse {
                'nextPageToken': string;
                'locations': Location[];
            }

            export interface Version {
                'errorHandlers': ErrorHandler[];
                'defaultExpiration': string;
                'libraries': Library[];
                'creationTime': string;
                'nobuildFilesRegex': string;
                'basicScaling': BasicScaling;
                'runtime': string;
                'id': string;
                'envVariables': {
                    [name: string]: string
                ;
                };
                'network': Network;
                'betaSettings': {
                    [name: string]: string
                ;
                };
                'env': string;
                'handlers': UrlMap[];
                'deployer': string;
                'automaticScaling': AutomaticScaling;
                'healthCheck': HealthCheck;
                'threadsafe': boolean;
                'manualScaling': ManualScaling;
                'name': string;
                'apiConfig': ApiConfigHandler;
                'vm': boolean;
                'instanceClass': string;
                'servingStatus': string;
                'deployment': Deployment;
                'runtimeApiVersion': string;
                'resources': Resources;
                'inboundServices': string[];
            }

            export interface ContainerInfo {
                'image': string;
            }

            export interface RequestUtilization {
                'targetConcurrentRequests': number;
                'targetRequestCountPerSec': number;
            }

            export interface UrlMap {
                'securityLevel': string;
                'authFailAction': string;
                'script': ScriptHandler;
                'urlRegex': string;
                'login': string;
                'apiEndpoint': ApiEndpointHandler;
                'staticDirectory': StaticDirectoryHandler;
                'staticFiles': StaticFilesHandler;
                'redirectHttpResponseCode': string;
            }

            export interface ApiConfigHandler {
                'login': string;
                'url': string;
                'securityLevel': string;
                'authFailAction': string;
                'script': string;
            }

            export interface Operation {
                'done': boolean;
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
            }

            export interface FileInfo {
                'sha1Sum': string;
                'mimeType': string;
                'sourceUrl': string;
            }

            export interface StaticFilesHandler {
                'httpHeaders': {
                    [name: string]: string
                ;
                };
                'applicationReadable': boolean;
                'uploadPathRegex': string;
                'path': string;
                'mimeType': string;
                'requireMatchingFile': boolean;
                'expiration': string;
            }

            export interface ScriptHandler {
                'scriptPath': string;
            }

            export interface DiskUtilization {
                'targetReadOpsPerSec': number;
                'targetReadBytesPerSec': number;
                'targetWriteOpsPerSec': number;
                'targetWriteBytesPerSec': number;
            }

            export interface BasicScaling {
                'maxInstances': number;
                'idleTimeout': string;
            }

            export interface OperationMetadataExperimental {
                'method': string;
                'insertTime': string;
                'endTime': string;
                'target': string;
                'user': string;
            }

            export interface CpuUtilization {
                'aggregationWindowLength': string;
                'targetUtilization': number;
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface IdentityAwareProxy {
                'oauth2ClientSecret': string;
                'oauth2ClientId': string;
                'oauth2ClientSecretSha256': string;
                'enabled': boolean;
            }

        }
    }
}
