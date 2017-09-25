// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        appengine(version: string): any;
        appengine(version: 'v1beta'): appengine.v1beta.Appengine;
    }

    namespace appengine {
        namespace v1beta {
            export interface Appengine {
                new(options: any): Appengine;

                'apps': {
                    'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'repair': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                    'locations': {
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'locationsId': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'appsId': string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;
                    };
                    'authorizedCertificates': {
                        'delete': (parameters: { [key: string]: any; 'appsId': string, 'authorizedCertificatesId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'authorizedCertificatesId': string, 'updateMask'?: string, 'appsId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'view'?: string, 'authorizedCertificatesId': string, 'appsId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListAuthorizedCertificatesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                    };
                    'services': {
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'servicesId': string, 'appsId': string, 'migrateTraffic'?: boolean}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'servicesId': string}, callback: (error: any, body: Service, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListServicesResponse, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                        'versions': {
                            'delete': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string, 'versionsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'appsId': string, 'versionsId': string, 'updateMask'?: string, 'servicesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'view'?: string, 'versionsId': string, 'servicesId': string, 'appsId': string}, callback: (error: any, body: Version, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'servicesId': string, 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListVersionsResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'servicesId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'instances': {
                                'delete': (parameters: { [key: string]: any; 'servicesId': string, 'instancesId': string, 'appsId': string, 'versionsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'servicesId': string, 'instancesId': string, 'appsId': string, 'versionsId': string}, callback: (error: any, body: Instance, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'versionsId': string, 'servicesId': string}, callback: (error: any, body: ListInstancesResponse, response: any) => void) => Request;
                                'debug': (parameters: { [key: string]: any; 'instancesId': string, 'appsId': string, 'versionsId': string, 'servicesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                    };
                    'authorizedDomains': {
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'pageToken'?: string, 'appsId': string}, callback: (error: any, body: ListAuthorizedDomainsResponse, response: any) => void) => Request;
                    };
                    'operations': {
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'operationsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    };
                    'domainMappings': {
                        'delete': (parameters: { [key: string]: any; 'domainMappingsId': string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'domainMappingsId': string, 'updateMask'?: string, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'domainMappingsId': string, 'appsId': string}, callback: (error: any, body: DomainMapping, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListDomainMappingsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    };
                    'firewall': {
                        'ingressRules': {
                            'get': (parameters: { [key: string]: any; 'ingressRulesId': string, 'appsId': string}, callback: (error: any, body: FirewallRule, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'appsId': string, 'ingressRulesId': string}, callback: (error: any, body: FirewallRule, response: any) => void) => Request;
                            'batchUpdate': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: BatchUpdateIngressRulesResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'appsId': string, 'ingressRulesId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'matchingAddress'?: string, 'pageToken'?: string, 'appsId': string}, callback: (error: any, body: ListIngressRulesResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: FirewallRule, response: any) => void) => Request;
                        };
                    };
                };

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

            export interface FirewallRule {
                'priority': number;
                'action': string;
                'description': string;
                'sourceRange': string;
            }

            export interface OperationMetadata {
                'method': string;
                'endTime': string;
                'operationType': string;
                'insertTime': string;
                'target': string;
                'user': string;
            }

            export interface ListAuthorizedCertificatesResponse {
                'certificates': AuthorizedCertificate[];
                'nextPageToken': string;
            }

            export interface FeatureSettings {
                'splitHealthChecks': boolean;
            }

            export interface OperationMetadataV1 {
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
                'insertTime': string;
                'warning': string[];
                'user': string;
                'target': string;
            }

            export interface ErrorHandler {
                'mimeType': string;
                'errorCode': string;
                'staticFile': string;
            }

            export interface SslSettings {
                'sslManagementType': string;
                'certificateId': string;
                'pendingManagedCertificateId': string;
            }

            export interface Application {
                'defaultBucket': string;
                'dispatchRules': UrlDispatchRule[];
                'gcrDomain': string;
                'name': string;
                'id': string;
                'defaultCookieExpiration': string;
                'locationId': string;
                'servingStatus': string;
                'defaultHostname': string;
                'featureSettings': FeatureSettings;
                'authDomain': string;
                'iap': IdentityAwareProxy;
                'codeBucket': string;
            }

            export interface Network {
                'subnetworkName': string;
                'instanceTag': string;
                'forwardedPorts': string[];
                'name': string;
            }

            export interface Instance {
                'averageLatency': number;
                'id': string;
                'vmIp': string;
                'memoryUsage': string;
                'availability': string;
                'vmStatus': string;
                'errors': number;
                'startTime': string;
                'vmDebugEnabled': boolean;
                'requests': number;
                'appEngineRelease': string;
                'vmName': string;
                'qps': number;
                'vmId': string;
                'vmZoneName': string;
                'name': string;
            }

            export interface LivenessCheck {
                'path': string;
                'host': string;
                'successThreshold': number;
                'checkInterval': string;
                'timeout': string;
                'failureThreshold': number;
                'initialDelay': string;
            }

            export interface BatchUpdateIngressRulesRequest {
                'ingressRules': FirewallRule[];
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
                'targetReceivedBytesPerSecond': number;
                'targetSentPacketsPerSecond': number;
                'targetReceivedPacketsPerSecond': number;
                'targetSentBytesPerSecond': number;
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

            export interface ReadinessCheck {
                'checkInterval': string;
                'failureThreshold': number;
                'timeout': string;
                'appStartTimeout': string;
                'path': string;
                'successThreshold': number;
                'host': string;
            }

            export interface StandardSchedulerSettings {
                'targetCpuUtilization': number;
                'targetThroughputUtilization': number;
                'maxInstances': number;
                'minInstances': number;
            }

            export interface DebugInstanceRequest {
                'sshKey': string;
            }

            export interface OperationMetadataV1Beta5 {
                'endTime': string;
                'target': string;
                'user': string;
                'method': string;
                'insertTime': string;
            }

            export interface Version {
                'createdBy': string;
                'id': string;
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
                'instanceClass': string;
                'servingStatus': string;
                'deployment': Deployment;
                'runtimeApiVersion': string;
                'createTime': string;
                'inboundServices': string[];
                'resources': Resources;
                'errorHandlers': ErrorHandler[];
                'defaultExpiration': string;
                'libraries': Library[];
                'nobuildFilesRegex': string;
                'basicScaling': BasicScaling;
                'runtime': string;
            }

            export interface RepairApplicationRequest {}

            export interface CertificateRawData {
                'privateKey': string;
                'publicCertificate': string;
            }

            export interface BuildInfo {
                'cloudBuildId': string;
            }

            export interface ScriptHandler {
                'scriptPath': string;
            }

            export interface FileInfo {
                'sha1Sum': string;
                'mimeType': string;
                'sourceUrl': string;
            }

            export interface OperationMetadataExperimental {
                'insertTime': string;
                'endTime': string;
                'target': string;
                'user': string;
                'method': string;
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
                'insertTime': string;
                'warning': string[];
                'user': string;
                'target': string;
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
            }

            export interface ListIngressRulesResponse {
                'ingressRules': FirewallRule[];
                'nextPageToken': string;
            }

            export interface ListServicesResponse {
                'nextPageToken': string;
                'services': Service[];
            }

            export interface Resources {
                'memoryGb': number;
                'cpu': number;
                'volumes': Volume[];
                'diskGb': number;
            }

            export interface Deployment {
                'files': {
                    [name: string]: FileInfo
                ;
                };
                'zip': ZipInfo;
                'container': ContainerInfo;
                'build': BuildInfo;
            }

            export interface Volume {
                'sizeGb': number;
                'name': string;
                'volumeType': string;
            }

            export interface BatchUpdateIngressRulesResponse {
                'ingressRules': FirewallRule[];
            }

            export interface ManagedCertificate {
                'status': string;
                'lastRenewalTime': string;
            }

            export interface ListInstancesResponse {
                'nextPageToken': string;
                'instances': Instance[];
            }

            export interface ListDomainMappingsResponse {
                'domainMappings': DomainMapping[];
                'nextPageToken': string;
            }

            export interface OperationMetadataV1Alpha {
                'method': string;
                'endTime': string;
                'warning': string[];
                'insertTime': string;
                'target': string;
                'user': string;
                'ephemeralMessage': string;
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
                'domains': AuthorizedDomain[];
                'nextPageToken': string;
            }

            export interface ApiEndpointHandler {
                'scriptPath': string;
            }

            export interface Empty {}

            export interface DomainMapping {
                'resourceRecords': ResourceRecord[];
                'id': string;
                'sslSettings': SslSettings;
                'name': string;
            }

            export interface ZipInfo {
                'filesCount': number;
                'sourceUrl': string;
            }

            export interface AutomaticScaling {
                'minPendingLatency': string;
                'requestUtilization': RequestUtilization;
                'standardSchedulerSettings': StandardSchedulerSettings;
                'maxIdleInstances': number;
                'minIdleInstances': number;
                'maxTotalInstances': number;
                'minTotalInstances': number;
                'networkUtilization': NetworkUtilization;
                'maxConcurrentRequests': number;
                'coolDownPeriod': string;
                'maxPendingLatency': string;
                'cpuUtilization': CpuUtilization;
                'diskUtilization': DiskUtilization;
            }

            export interface AuthorizedCertificate {
                'domainMappingsCount': number;
                'domainNames': string[];
                'id': string;
                'displayName': string;
                'certificateRawData': CertificateRawData;
                'managedCertificate': ManagedCertificate;
                'visibleDomainMappings': string[];
                'expireTime': string;
                'name': string;
            }

            export interface ResourceRecord {
                'name': string;
                'type': string;
                'rrdata': string;
            }

            export interface Library {
                'version': string;
                'name': string;
            }

            export interface ListLocationsResponse {
                'locations': Location[];
                'nextPageToken': string;
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
                'url': string;
                'securityLevel': string;
                'authFailAction': string;
                'script': string;
                'login': string;
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

            export interface StaticFilesHandler {
                'applicationReadable': boolean;
                'httpHeaders': {
                    [name: string]: string
                ;
                };
                'uploadPathRegex': string;
                'path': string;
                'mimeType': string;
                'requireMatchingFile': boolean;
                'expiration': string;
            }

            export interface DiskUtilization {
                'targetReadOpsPerSecond': number;
                'targetReadBytesPerSecond': number;
                'targetWriteOpsPerSecond': number;
                'targetWriteBytesPerSecond': number;
            }

            export interface BasicScaling {
                'maxInstances': number;
                'idleTimeout': string;
            }

            export interface CpuUtilization {
                'aggregationWindowLength': string;
                'targetUtilization': number;
            }

            export interface IdentityAwareProxy {
                'oauth2ClientSecret': string;
                'oauth2ClientId': string;
                'oauth2ClientSecretSha256': string;
                'enabled': boolean;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface ManualScaling {
                'instances': number;
            }

            export interface LocationMetadata {
                'flexibleEnvironmentAvailable': boolean;
                'standardEnvironmentAvailable': boolean;
            }

        }
    }
}
