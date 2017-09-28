// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        appengine(version: string): any;
        appengine(version: 'v1'): appengine.v1.Appengine;
    }

    namespace appengine {
        namespace v1 {
            export interface Appengine {
                new(options: any): Appengine;

                'apps': {
                    'repair': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'appsId': string, 'updateMask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;

                    'locations': {
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'locationsId': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;
                    };
                    'authorizedCertificates': {
                        'create': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'authorizedCertificatesId': string, 'appsId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'appsId': string, 'authorizedCertificatesId': string, 'updateMask'?: string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'view'?: string, 'authorizedCertificatesId': string, 'appsId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListAuthorizedCertificatesResponse, response: any) => void) => Request;
                    };
                    'services': {
                        'delete': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'appsId': string, 'migrateTraffic'?: boolean, 'updateMask'?: string, 'servicesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string}, callback: (error: any, body: Service, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListServicesResponse, response: any) => void) => Request;

                        'versions': {
                            'delete': (parameters: { [key: string]: any; 'appsId': string, 'versionsId': string, 'servicesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'versionsId': string, 'updateMask'?: string, 'servicesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'view'?: string, 'versionsId': string, 'servicesId': string, 'appsId': string}, callback: (error: any, body: Version, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'servicesId': string, 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListVersionsResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'appsId': string, 'servicesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'instances': {
                                'delete': (parameters: { [key: string]: any; 'servicesId': string, 'instancesId': string, 'appsId': string, 'versionsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'servicesId': string, 'instancesId': string, 'appsId': string, 'versionsId': string}, callback: (error: any, body: Instance, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'versionsId': string, 'servicesId': string, 'pageToken'?: string, 'appsId': string}, callback: (error: any, body: ListInstancesResponse, response: any) => void) => Request;
                                'debug': (parameters: { [key: string]: any; 'versionsId': string, 'servicesId': string, 'instancesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                    };
                    'authorizedDomains': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListAuthorizedDomainsResponse, response: any) => void) => Request;
                    };
                    'operations': {
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'operationsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    };
                    'domainMappings': {
                        'delete': (parameters: { [key: string]: any; 'domainMappingsId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'appsId': string, 'domainMappingsId': string, 'updateMask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'domainMappingsId': string}, callback: (error: any, body: DomainMapping, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListDomainMappingsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    };
                    'firewall': {
                        'ingressRules': {
                            'batchUpdate': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: BatchUpdateIngressRulesResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'appsId': string, 'ingressRulesId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'matchingAddress'?: string}, callback: (error: any, body: ListIngressRulesResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: FirewallRule, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'appsId': string, 'ingressRulesId': string}, callback: (error: any, body: FirewallRule, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'appsId': string, 'ingressRulesId': string}, callback: (error: any, body: FirewallRule, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface FeatureSettings {
                'splitHealthChecks': boolean;
            }

            export interface ErrorHandler {
                'mimeType': string;
                'errorCode': string;
                'staticFile': string;
            }

            export interface SslSettings {
                'certificateId': string;
            }

            export interface OperationMetadataV1 {
                'target': string;
                'user': string;
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
                'insertTime': string;
                'warning': string[];
            }

            export interface Application {
                'id': string;
                'defaultCookieExpiration': string;
                'locationId': string;
                'servingStatus': string;
                'defaultHostname': string;
                'featureSettings': FeatureSettings;
                'authDomain': string;
                'iap': IdentityAwareProxy;
                'codeBucket': string;
                'defaultBucket': string;
                'dispatchRules': UrlDispatchRule[];
                'gcrDomain': string;
                'name': string;
            }

            export interface Network {
                'subnetworkName': string;
                'instanceTag': string;
                'forwardedPorts': string[];
                'name': string;
            }

            export interface Instance {
                'vmDebugEnabled': boolean;
                'requests': number;
                'appEngineRelease': string;
                'vmName': string;
                'qps': number;
                'vmId': string;
                'vmZoneName': string;
                'name': string;
                'averageLatency': number;
                'id': string;
                'vmIp': string;
                'memoryUsage': string;
                'errors': number;
                'availability': string;
                'vmStatus': string;
                'startTime': string;
            }

            export interface LivenessCheck {
                'timeout': string;
                'failureThreshold': number;
                'initialDelay': string;
                'path': string;
                'host': string;
                'successThreshold': number;
                'checkInterval': string;
            }

            export interface BatchUpdateIngressRulesRequest {
                'ingressRules': FirewallRule[];
            }

            export interface Location {
                'locationId': string;
                'metadata': {
                    [name: string]: any
                ;
                };
                'labels': {
                    [name: string]: string
                ;
                };
                'name': string;
            }

            export interface NetworkUtilization {
                'targetSentBytesPerSecond': number;
                'targetReceivedBytesPerSecond': number;
                'targetSentPacketsPerSecond': number;
                'targetReceivedPacketsPerSecond': number;
            }

            export interface HealthCheck {
                'restartThreshold': number;
                'healthyThreshold': number;
                'checkInterval': string;
                'timeout': string;
                'unhealthyThreshold': number;
                'disableHealthCheck': boolean;
                'host': string;
            }

            export interface ReadinessCheck {
                'timeout': string;
                'failureThreshold': number;
                'appStartTimeout': string;
                'path': string;
                'host': string;
                'successThreshold': number;
                'checkInterval': string;
            }

            export interface DebugInstanceRequest {
                'sshKey': string;
            }

            export interface OperationMetadataV1Beta5 {
                'method': string;
                'insertTime': string;
                'endTime': string;
                'target': string;
                'user': string;
            }

            export interface Version {
                'instanceClass': string;
                'servingStatus': string;
                'deployment': Deployment;
                'runtimeApiVersion': string;
                'createTime': string;
                'resources': Resources;
                'inboundServices': string[];
                'errorHandlers': ErrorHandler[];
                'defaultExpiration': string;
                'libraries': Library[];
                'nobuildFilesRegex': string;
                'basicScaling': BasicScaling;
                'runtime': string;
                'id': string;
                'createdBy': string;
                'envVariables': {
                    [name: string]: string
                ;
                };
                'livenessCheck': LivenessCheck;
                'network': Network;
                'betaSettings': {
                    [name: string]: string
                ;
                };
                'env': string;
                'handlers': UrlMap[];
                'automaticScaling': AutomaticScaling;
                'diskUsageBytes': string;
                'healthCheck': HealthCheck;
                'threadsafe': boolean;
                'readinessCheck': ReadinessCheck;
                'manualScaling': ManualScaling;
                'name': string;
                'apiConfig': ApiConfigHandler;
                'endpointsApiService': EndpointsApiService;
                'versionUrl': string;
                'vm': boolean;
            }

            export interface RepairApplicationRequest {}

            export interface CertificateRawData {
                'privateKey': string;
                'publicCertificate': string;
            }

            export interface ScriptHandler {
                'scriptPath': string;
            }

            export interface FileInfo {
                'sourceUrl': string;
                'sha1Sum': string;
                'mimeType': string;
            }

            export interface OperationMetadataExperimental {
                'method': string;
                'insertTime': string;
                'endTime': string;
                'target': string;
                'user': string;
            }

            export interface AuthorizedDomain {
                'name': string;
                'id': string;
            }

            export interface TrafficSplit {
                'allocations': {
                    [name: string]: number
                ;
                };
                'shardBy': string;
            }

            export interface OperationMetadataV1Beta {
                'method': string;
                'endTime': string;
                'insertTime': string;
                'warning': string[];
                'user': string;
                'target': string;
                'ephemeralMessage': string;
            }

            export interface ListServicesResponse {
                'nextPageToken': string;
                'services': Service[];
            }

            export interface ListIngressRulesResponse {
                'ingressRules': FirewallRule[];
                'nextPageToken': string;
            }

            export interface Deployment {
                'zip': ZipInfo;
                'container': ContainerInfo;
                'files': {
                    [name: string]: FileInfo
                ;
                };
            }

            export interface Resources {
                'volumes': Volume[];
                'diskGb': number;
                'memoryGb': number;
                'cpu': number;
            }

            export interface BatchUpdateIngressRulesResponse {
                'ingressRules': FirewallRule[];
            }

            export interface Volume {
                'sizeGb': number;
                'name': string;
                'volumeType': string;
            }

            export interface ListInstancesResponse {
                'instances': Instance[];
                'nextPageToken': string;
            }

            export interface ListDomainMappingsResponse {
                'domainMappings': DomainMapping[];
                'nextPageToken': string;
            }

            export interface OperationMetadataV1Alpha {
                'insertTime': string;
                'warning': string[];
                'user': string;
                'target': string;
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
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

            export interface ListAuthorizedDomainsResponse {
                'nextPageToken': string;
                'domains': AuthorizedDomain[];
            }

            export interface DomainMapping {
                'resourceRecords': ResourceRecord[];
                'id': string;
                'sslSettings': SslSettings;
                'name': string;
            }

            export interface ApiEndpointHandler {
                'scriptPath': string;
            }

            export interface Empty {}

            export interface AutomaticScaling {
                'minPendingLatency': string;
                'requestUtilization': RequestUtilization;
                'maxIdleInstances': number;
                'minIdleInstances': number;
                'maxTotalInstances': number;
                'minTotalInstances': number;
                'networkUtilization': NetworkUtilization;
                'coolDownPeriod': string;
                'maxConcurrentRequests': number;
                'maxPendingLatency': string;
                'cpuUtilization': CpuUtilization;
                'diskUtilization': DiskUtilization;
            }

            export interface ZipInfo {
                'filesCount': number;
                'sourceUrl': string;
            }

            export interface AuthorizedCertificate {
                'expireTime': string;
                'name': string;
                'domainMappingsCount': number;
                'domainNames': string[];
                'id': string;
                'displayName': string;
                'certificateRawData': CertificateRawData;
                'visibleDomainMappings': string[];
            }

            export interface ResourceRecord {
                'name': string;
                'type': string;
                'rrdata': string;
            }

            export interface Library {
                'name': string;
                'version': string;
            }

            export interface ListLocationsResponse {
                'nextPageToken': string;
                'locations': Location[];
            }

            export interface ContainerInfo {
                'image': string;
            }

            export interface RequestUtilization {
                'targetRequestCountPerSecond': number;
                'targetConcurrentRequests': number;
            }

            export interface EndpointsApiService {
                'configId': string;
                'name': string;
            }

            export interface UrlMap {
                'redirectHttpResponseCode': string;
                'securityLevel': string;
                'authFailAction': string;
                'script': ScriptHandler;
                'urlRegex': string;
                'login': string;
                'apiEndpoint': ApiEndpointHandler;
                'staticFiles': StaticFilesHandler;
            }

            export interface ApiConfigHandler {
                'script': string;
                'login': string;
                'url': string;
                'securityLevel': string;
                'authFailAction': string;
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

            export interface BasicScaling {
                'maxInstances': number;
                'idleTimeout': string;
            }

            export interface DiskUtilization {
                'targetWriteBytesPerSecond': number;
                'targetReadOpsPerSecond': number;
                'targetReadBytesPerSecond': number;
                'targetWriteOpsPerSecond': number;
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
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface ManualScaling {
                'instances': number;
            }

            export interface LocationMetadata {
                'standardEnvironmentAvailable': boolean;
                'flexibleEnvironmentAvailable': boolean;
            }

            export interface Service {
                'id': string;
                'name': string;
                'split': TrafficSplit;
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface OperationMetadata {
                'user': string;
                'target': string;
                'method': string;
                'endTime': string;
                'operationType': string;
                'insertTime': string;
            }

            export interface FirewallRule {
                'description': string;
                'sourceRange': string;
                'priority': number;
                'action': string;
            }

            export interface ListAuthorizedCertificatesResponse {
                'nextPageToken': string;
                'certificates': AuthorizedCertificate[];
            }

        }
    }
}
