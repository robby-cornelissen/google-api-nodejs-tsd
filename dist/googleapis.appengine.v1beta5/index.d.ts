// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        appengine(version: string): any;
        appengine(version: 'v1beta5'): appengine.v1beta5.Appengine;
    }

    namespace appengine {
        namespace v1beta5 {
            export interface Appengine {
                new(options: any): Appengine;

                'apps': {
                    'patch': (parameters: { [key: string]: any; 'appsId': string, 'mask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'ensureResourcesExist'?: boolean, 'appsId': string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;

                    'operations': {
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'operationsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'appsId': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    };
                    'locations': {
                        'get': (parameters: { [key: string]: any; 'locationsId': string, 'appsId': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;
                    };
                    'services': {
                        'patch': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string, 'migrateTraffic'?: boolean, 'mask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListServicesResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string}, callback: (error: any, body: Service, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                        'versions': {
                            'delete': (parameters: { [key: string]: any; 'appsId': string, 'versionsId': string, 'servicesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'mask'?: string, 'versionsId': string, 'servicesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'view'?: string, 'servicesId': string, 'pageToken'?: string, 'appsId': string}, callback: (error: any, body: ListVersionsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'appsId': string, 'view'?: string, 'versionsId': string, 'servicesId': string}, callback: (error: any, body: Version, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'instances': {
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'versionsId': string, 'servicesId': string}, callback: (error: any, body: ListInstancesResponse, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'servicesId': string, 'instancesId': string, 'appsId': string, 'versionsId': string}, callback: (error: any, body: Instance, response: any) => void) => Request;
                                'debug': (parameters: { [key: string]: any; 'versionsId': string, 'servicesId': string, 'instancesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'servicesId': string, 'instancesId': string, 'appsId': string, 'versionsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                    };
                };

            }

            export interface AutomaticScaling {
                'minIdleInstances': number;
                'maxTotalInstances': number;
                'minTotalInstances': number;
                'networkUtilization': NetworkUtilization;
                'maxConcurrentRequests': number;
                'coolDownPeriod': string;
                'maxPendingLatency': string;
                'cpuUtilization': CpuUtilization;
                'diskUtilization': DiskUtilization;
                'minPendingLatency': string;
                'maxIdleInstances': number;
                'requestUtilization': RequestUtilization;
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

            export interface NetworkUtilization {
                'targetReceivedBytesPerSec': number;
                'targetSentPacketsPerSec': number;
                'targetReceivedPacketsPerSec': number;
                'targetSentBytesPerSec': number;
            }

            export interface HealthCheck {
                'host': string;
                'restartThreshold': number;
                'healthyThreshold': number;
                'checkInterval': string;
                'timeout': string;
                'unhealthyThreshold': number;
                'disableHealthCheck': boolean;
            }

            export interface DebugInstanceRequest {
                'sshKey': string;
            }

            export interface SourceReference {
                'repository': string;
                'revisionId': string;
            }

            export interface OperationMetadataV1Beta5 {
                'target': string;
                'user': string;
                'method': string;
                'insertTime': string;
                'endTime': string;
            }

            export interface Library {
                'version': string;
                'name': string;
            }

            export interface ListLocationsResponse {
                'locations': Location[];
                'nextPageToken': string;
            }

            export interface Version {
                'network': Network;
                'betaSettings': {
                    [name: string]: string
                ;
                };
                'env': string;
                'handlers': UrlMap[];
                'deployer': string;
                'automaticScaling': AutomaticScaling;
                'diskUsageBytes': string;
                'healthCheck': HealthCheck;
                'threadsafe': boolean;
                'manualScaling': ManualScaling;
                'name': string;
                'apiConfig': ApiConfigHandler;
                'endpointsApiService': EndpointsApiService;
                'vm': boolean;
                'instanceClass': string;
                'servingStatus': string;
                'runtimeApiVersion': string;
                'deployment': Deployment;
                'inboundServices': string[];
                'resources': Resources;
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
            }

            export interface ContainerInfo {
                'image': string;
            }

            export interface RequestUtilization {
                'targetConcurrentRequests': number;
                'targetRequestCountPerSec': number;
            }

            export interface UrlMap {
                'urlRegex': string;
                'login': string;
                'apiEndpoint': ApiEndpointHandler;
                'staticFiles': StaticFilesHandler;
                'redirectHttpResponseCode': string;
                'securityLevel': string;
                'authFailAction': string;
                'script': ScriptHandler;
            }

            export interface EndpointsApiService {
                'configId': string;
                'name': string;
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

            export interface ApiConfigHandler {
                'authFailAction': string;
                'script': string;
                'login': string;
                'url': string;
                'securityLevel': string;
            }

            export interface FileInfo {
                'sourceUrl': string;
                'sha1Sum': string;
                'mimeType': string;
            }

            export interface StaticFilesHandler {
                'uploadPathRegex': string;
                'path': string;
                'mimeType': string;
                'requireMatchingFile': boolean;
                'expiration': string;
                'httpHeaders': {
                    [name: string]: string
                ;
                };
                'applicationReadable': boolean;
            }

            export interface ScriptHandler {
                'scriptPath': string;
            }

            export interface BasicScaling {
                'maxInstances': number;
                'idleTimeout': string;
            }

            export interface DiskUtilization {
                'targetReadOpsPerSec': number;
                'targetReadBytesPerSec': number;
                'targetWriteOpsPerSec': number;
                'targetWriteBytesPerSec': number;
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

            export interface IdentityAwareProxy {
                'enabled': boolean;
                'oauth2ClientSecret': string;
                'oauth2ClientId': string;
                'oauth2ClientSecretSha256': string;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface TrafficSplit {
                'allocations': {
                    [name: string]: number
                ;
                };
                'shardBy': string;
            }

            export interface ManualScaling {
                'instances': number;
            }

            export interface LocationMetadata {
                'flexibleEnvironmentAvailable': boolean;
                'standardEnvironmentAvailable': boolean;
            }

            export interface OperationMetadataV1Beta {
                'warning': string[];
                'insertTime': string;
                'user': string;
                'target': string;
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
            }

            export interface ListServicesResponse {
                'nextPageToken': string;
                'services': Service[];
            }

            export interface Resources {
                'volumes': Volume[];
                'diskGb': number;
                'memoryGb': number;
                'cpu': number;
            }

            export interface Deployment {
                'files': {
                    [name: string]: FileInfo
                ;
                };
                'sourceReferences': SourceReference[];
                'container': ContainerInfo;
            }

            export interface Volume {
                'volumeType': string;
                'sizeGb': number;
                'name': string;
            }

            export interface Service {
                'id': string;
                'name': string;
                'split': TrafficSplit;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface OperationMetadata {
                'insertTime': string;
                'target': string;
                'user': string;
                'method': string;
                'endTime': string;
                'operationType': string;
            }

            export interface ListInstancesResponse {
                'instances': Instance[];
                'nextPageToken': string;
            }

            export interface OperationMetadataV1 {
                'endTime': string;
                'warning': string[];
                'insertTime': string;
                'user': string;
                'target': string;
                'ephemeralMessage': string;
                'method': string;
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
                'authDomain': string;
                'iap': IdentityAwareProxy;
                'defaultCookieExpiration': string;
                'id': string;
                'codeBucket': string;
                'location': string;
                'defaultBucket': string;
            }

            export interface Network {
                'subnetworkName': string;
                'instanceTag': string;
                'forwardedPorts': string[];
                'name': string;
            }

            export interface Instance {
                'vmStatus': string;
                'availability': string;
                'errors': number;
                'requests': number;
                'appEngineRelease': string;
                'startTimestamp': string;
                'vmName': string;
                'qps': number;
                'vmId': string;
                'vmUnlocked': boolean;
                'vmZoneName': string;
                'name': string;
                'averageLatency': number;
                'id': string;
                'memoryUsage': string;
                'vmIp': string;
            }

            export interface UrlDispatchRule {
                'service': string;
                'domain': string;
                'path': string;
            }

            export interface ListVersionsResponse {
                'nextPageToken': string;
                'versions': Version[];
            }

            export interface ApiEndpointHandler {
                'scriptPath': string;
            }

        }
    }
}
