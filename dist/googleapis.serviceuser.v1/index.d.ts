// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        serviceuser(version: string): any;
        serviceuser(version: 'v1'): serviceuser.v1.Serviceuser;
    }

    namespace serviceuser {
        namespace v1 {
            export interface Serviceuser {
                new(options: any): Serviceuser;

                'projects': {
                    'services': {
                        'disable': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'enable': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListEnabledServicesResponse, response: any) => void) => Request;
                    };
                };
                'services': {
                    'search': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: SearchServicesResponse, response: any) => void) => Request;
                };

            }

            export interface Monitoring {
                'consumerDestinations': MonitoringDestination[];
                'producerDestinations': MonitoringDestination[];
            }

            export interface Field {
                'jsonName': string;
                'kind': string;
                'options': Option[];
                'oneofIndex': number;
                'packed': boolean;
                'cardinality': string;
                'defaultValue': string;
                'name': string;
                'typeUrl': string;
                'number': number;
            }

            export interface Enum {
                'options': Option[];
                'syntax': string;
                'sourceContext': SourceContext;
                'enumvalue': EnumValue[];
                'name': string;
            }

            export interface LabelDescriptor {
                'key': string;
                'description': string;
                'valueType': string;
            }

            export interface EnableServiceRequest {}

            export interface Type {
                'options': Option[];
                'fields': Field[];
                'name': string;
                'oneofs': string[];
                'syntax': string;
                'sourceContext': SourceContext;
            }

            export interface Experimental {
                'authorization': AuthorizationConfig;
            }

            export interface Backend {
                'rules': BackendRule[];
            }

            export interface DocumentationRule {
                'deprecationDescription': string;
                'selector': string;
                'description': string;
            }

            export interface AuthorizationConfig {
                'provider': string;
            }

            export interface ContextRule {
                'selector': string;
                'provided': string[];
                'requested': string[];
            }

            export interface MetricDescriptor {
                'unit': string;
                'labels': LabelDescriptor[];
                'name': string;
                'type': string;
                'valueType': string;
                'metricKind': string;
                'displayName': string;
                'description': string;
            }

            export interface SourceContext {
                'fileName': string;
            }

            export interface Endpoint {
                'features': string[];
                'apis': string[];
                'allowCors': boolean;
                'aliases': string[];
                'target': string;
                'name': string;
            }

            export interface ListEnabledServicesResponse {
                'nextPageToken': string;
                'services': PublishedService[];
            }

            export interface OAuthRequirements {
                'canonicalScopes': string;
            }

            export interface Usage {
                'requirements': string[];
                'producerNotificationChannel': string;
                'rules': UsageRule[];
            }

            export interface Context {
                'rules': ContextRule[];
            }

            export interface LogDescriptor {
                'name': string;
                'displayName': string;
                'description': string;
                'labels': LabelDescriptor[];
            }

            export interface MonitoredResourceDescriptor {
                'type': string;
                'labels': LabelDescriptor[];
                'name': string;
                'description': string;
                'displayName': string;
            }

            export interface CustomErrorRule {
                'isErrorType': boolean;
                'selector': string;
            }

            export interface CustomAuthRequirements {
                'provider': string;
            }

            export interface MediaDownload {
                'enabled': boolean;
                'downloadService': string;
                'completeNotification': boolean;
                'dropzone': string;
                'maxDirectDownloadSize': string;
                'useDirectDownload': boolean;
            }

            export interface DisableServiceRequest {}

            export interface AuthorizationRule {
                'selector': string;
                'permissions': string;
            }

            export interface SearchServicesResponse {
                'nextPageToken': string;
                'services': PublishedService[];
            }

            export interface MediaUpload {
                'startNotification': boolean;
                'uploadService': string;
                'maxSize': string;
                'mimeTypes': string[];
                'completeNotification': boolean;
                'progressNotification': boolean;
                'enabled': boolean;
                'dropzone': string;
            }

            export interface UsageRule {
                'selector': string;
                'skipServiceControl': boolean;
                'allowUnregisteredCalls': boolean;
            }

            export interface AuthRequirement {
                'audiences': string;
                'providerId': string;
            }

            export interface Documentation {
                'summary': string;
                'documentationRootUrl': string;
                'overview': string;
                'rules': DocumentationRule[];
                'pages': Page[];
            }

            export interface BackendRule {
                'minDeadline': number;
                'address': string;
                'selector': string;
                'deadline': number;
            }

            export interface AuthenticationRule {
                'customAuth': CustomAuthRequirements;
                'oauth': OAuthRequirements;
                'requirements': AuthRequirement[];
                'allowWithoutCredential': boolean;
                'selector': string;
            }

            export interface Api {
                'methods': Method[];
                'name': string;
                'syntax': string;
                'sourceContext': SourceContext;
                'version': string;
                'mixins': Mixin[];
                'options': Option[];
            }

            export interface MetricRule {
                'metricCosts': {
                    [name: string]: string
                ;
                };
                'selector': string;
            }

            export interface Authentication {
                'rules': AuthenticationRule[];
                'providers': AuthProvider[];
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

            export interface Page {
                'name': string;
                'content': string;
                'subpages': Page[];
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface AuthProvider {
                'authorizationUrl': string;
                'issuer': string;
                'id': string;
                'jwksUri': string;
                'audiences': string;
            }

            export interface EnumValue {
                'name': string;
                'options': Option[];
                'number': number;
            }

            export interface Service {
                'http': Http;
                'systemParameters': SystemParameters;
                'backend': Backend;
                'documentation': Documentation;
                'monitoredResources': MonitoredResourceDescriptor[];
                'logging': Logging;
                'enums': Enum[];
                'context': Context;
                'id': string;
                'usage': Usage;
                'metrics': MetricDescriptor[];
                'authentication': Authentication;
                'experimental': Experimental;
                'control': Control;
                'configVersion': number;
                'monitoring': Monitoring;
                'systemTypes': Type[];
                'producerProjectId': string;
                'visibility': Visibility;
                'quota': Quota;
                'name': string;
                'customError': CustomError;
                'title': string;
                'endpoints': Endpoint[];
                'apis': Api[];
                'logs': LogDescriptor[];
                'types': Type[];
                'sourceInfo': SourceInfo;
            }

            export interface CustomHttpPattern {
                'kind': string;
                'path': string;
            }

            export interface OperationMetadata {
                'progressPercentage': number;
                'startTime': string;
                'steps': Step[];
                'resourceNames': string[];
            }

            export interface SystemParameterRule {
                'parameters': SystemParameter[];
                'selector': string;
            }

            export interface PublishedService {
                'service': Service;
                'name': string;
            }

            export interface HttpRule {
                'delete': string;
                'body': string;
                'mediaDownload': MediaDownload;
                'post': string;
                'restMethodName': string;
                'additionalBindings': HttpRule[];
                'responseBody': string;
                'restCollection': string;
                'mediaUpload': MediaUpload;
                'selector': string;
                'custom': CustomHttpPattern;
                'patch': string;
                'get': string;
                'put': string;
                'authorizations': AuthorizationRule[];
            }

            export interface VisibilityRule {
                'restriction': string;
                'selector': string;
            }

            export interface MonitoringDestination {
                'monitoredResource': string;
                'metrics': string[];
            }

            export interface Visibility {
                'rules': VisibilityRule[];
            }

            export interface SystemParameters {
                'rules': SystemParameterRule[];
            }

            export interface Quota {
                'metricRules': MetricRule[];
                'limits': QuotaLimit[];
            }

            export interface Step {
                'description': string;
                'status': string;
            }

            export interface LoggingDestination {
                'logs': string[];
                'monitoredResource': string;
            }

            export interface Option {
                'name': string;
                'value': {
                    [name: string]: any
                ;
                };
            }

            export interface Logging {
                'consumerDestinations': LoggingDestination[];
                'producerDestinations': LoggingDestination[];
            }

            export interface QuotaLimit {
                'defaultLimit': string;
                'displayName': string;
                'metric': string;
                'description': string;
                'values': {
                    [name: string]: string
                ;
                };
                'unit': string;
                'maxLimit': string;
                'name': string;
                'duration': string;
                'freeTier': string;
            }

            export interface Method {
                'options': Option[];
                'responseStreaming': boolean;
                'name': string;
                'requestTypeUrl': string;
                'requestStreaming': boolean;
                'syntax': string;
                'responseTypeUrl': string;
            }

            export interface Mixin {
                'name': string;
                'root': string;
            }

            export interface CustomError {
                'rules': CustomErrorRule[];
                'types': string[];
            }

            export interface Http {
                'fullyDecodeReservedExpansion': boolean;
                'rules': HttpRule[];
            }

            export interface SourceInfo {
                'sourceFiles': {
                    [name: string]: any
                ;
                }[];
            }

            export interface Control {
                'environment': string;
            }

            export interface SystemParameter {
                'urlQueryParameter': string;
                'httpHeader': string;
                'name': string;
            }

        }
    }
}
