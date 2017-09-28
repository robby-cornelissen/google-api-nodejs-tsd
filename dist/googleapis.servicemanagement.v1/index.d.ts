// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        servicemanagement(version: string): any;
        servicemanagement(version: 'v1'): servicemanagement.v1.Servicemanagement;
    }

    namespace servicemanagement {
        namespace v1 {
            export interface Servicemanagement {
                new(options: any): Servicemanagement;

                'operations': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'name'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };
                'services': {
                    'generateConfigReport': (parameters: { [key: string]: any; }, callback: (error: any, body: GenerateConfigReportResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: ManagedService, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'getConfig': (parameters: { [key: string]: any; 'serviceName': string, 'configId'?: string, 'view'?: string}, callback: (error: any, body: Service, response: any) => void) => Request;
                    'enable': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'disable': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'undelete': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'producerProjectId'?: string, 'consumerId'?: string, 'pageToken'?: string}, callback: (error: any, body: ListServicesResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;

                    'configs': {
                        'get': (parameters: { [key: string]: any; 'serviceName': string, 'configId': string, 'view'?: string}, callback: (error: any, body: Service, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'serviceName': string, 'pageToken'?: string}, callback: (error: any, body: ListServiceConfigsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: Service, response: any) => void) => Request;
                        'submit': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    };
                    'consumers': {
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    };
                    'rollouts': {
                        'get': (parameters: { [key: string]: any; 'serviceName': string, 'rolloutId': string}, callback: (error: any, body: Rollout, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'serviceName': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListServiceRolloutsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    };
                };

            }

            export interface SetIamPolicyRequest {
                'updateMask': string;
                'policy': Policy;
            }

            export interface Step {
                'description': string;
                'status': string;
            }

            export interface DeleteServiceStrategy {}

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

            export interface Method {
                'responseStreaming': boolean;
                'name': string;
                'requestTypeUrl': string;
                'requestStreaming': boolean;
                'syntax': string;
                'responseTypeUrl': string;
                'options': Option[];
            }

            export interface QuotaLimit {
                'freeTier': string;
                'duration': string;
                'defaultLimit': string;
                'description': string;
                'metric': string;
                'displayName': string;
                'values': {
                    [name: string]: string
                ;
                };
                'unit': string;
                'maxLimit': string;
                'name': string;
            }

            export interface ConfigRef {
                'name': string;
            }

            export interface ListServiceRolloutsResponse {
                'rollouts': Rollout[];
                'nextPageToken': string;
            }

            export interface Mixin {
                'name': string;
                'root': string;
            }

            export interface FlowOperationMetadata {
                'resourceNames': string[];
                'flowName': string;
                'deadline': string;
                'cancelState': string;
                'startTime': string;
            }

            export interface CustomError {
                'types': string[];
                'rules': CustomErrorRule[];
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
                'httpHeader': string;
                'name': string;
                'urlQueryParameter': string;
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
                'cardinality': string;
                'packed': boolean;
                'defaultValue': string;
                'name': string;
                'typeUrl': string;
                'number': number;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Enum {
                'enumvalue': EnumValue[];
                'name': string;
                'options': Option[];
                'syntax': string;
                'sourceContext': SourceContext;
            }

            export interface LabelDescriptor {
                'key': string;
                'description': string;
                'valueType': string;
            }

            export interface Diagnostic {
                'location': string;
                'kind': string;
                'message': string;
            }

            export interface EnableServiceRequest {
                'consumerId': string;
            }

            export interface GenerateConfigReportResponse {
                'changeReports': ChangeReport[];
                'id': string;
                'diagnostics': Diagnostic[];
                'serviceName': string;
            }

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

            export interface ListServiceConfigsResponse {
                'serviceConfigs': Service[];
                'nextPageToken': string;
            }

            export interface AuditConfig {
                'auditLogConfigs': AuditLogConfig[];
                'exemptedMembers': string[];
                'service': string;
            }

            export interface Backend {
                'rules': BackendRule[];
            }

            export interface SubmitConfigSourceRequest {
                'configSource': ConfigSource;
                'validateOnly': boolean;
            }

            export interface AuthorizationConfig {
                'provider': string;
            }

            export interface DocumentationRule {
                'description': string;
                'deprecationDescription': string;
                'selector': string;
            }

            export interface ContextRule {
                'provided': string[];
                'requested': string[];
                'selector': string;
            }

            export interface MetricDescriptor {
                'metricKind': string;
                'description': string;
                'displayName': string;
                'unit': string;
                'labels': LabelDescriptor[];
                'name': string;
                'type': string;
                'valueType': string;
            }

            export interface SourceContext {
                'fileName': string;
            }

            export interface Expr {
                'description': string;
                'expression': string;
                'location': string;
                'title': string;
            }

            export interface ListServicesResponse {
                'nextPageToken': string;
                'services': ManagedService[];
            }

            export interface Endpoint {
                'apis': string[];
                'allowCors': boolean;
                'aliases': string[];
                'name': string;
                'target': string;
                'features': string[];
            }

            export interface OAuthRequirements {
                'canonicalScopes': string;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface GetIamPolicyRequest {}

            export interface Usage {
                'producerNotificationChannel': string;
                'rules': UsageRule[];
                'requirements': string[];
            }

            export interface Context {
                'rules': ContextRule[];
            }

            export interface LogDescriptor {
                'labels': LabelDescriptor[];
                'name': string;
                'displayName': string;
                'description': string;
            }

            export interface ConfigFile {
                'fileType': string;
                'fileContents': string;
                'filePath': string;
            }

            export interface MonitoredResourceDescriptor {
                'labels': LabelDescriptor[];
                'name': string;
                'description': string;
                'displayName': string;
                'type': string;
            }

            export interface CustomErrorRule {
                'isErrorType': boolean;
                'selector': string;
            }

            export interface MediaDownload {
                'enabled': boolean;
                'downloadService': string;
                'completeNotification': boolean;
                'dropzone': string;
                'maxDirectDownloadSize': string;
                'useDirectDownload': boolean;
            }

            export interface CustomAuthRequirements {
                'provider': string;
            }

            export interface ChangeReport {
                'configChanges': ConfigChange[];
            }

            export interface DisableServiceRequest {
                'consumerId': string;
            }

            export interface SubmitConfigSourceResponse {
                'serviceConfig': Service;
            }

            export interface MediaUpload {
                'startNotification': boolean;
                'uploadService': string;
                'mimeTypes': string[];
                'maxSize': string;
                'completeNotification': boolean;
                'progressNotification': boolean;
                'enabled': boolean;
                'dropzone': string;
            }

            export interface Advice {
                'description': string;
            }

            export interface ManagedService {
                'serviceName': string;
                'producerProjectId': string;
            }

            export interface UsageRule {
                'selector': string;
                'skipServiceControl': boolean;
                'allowUnregisteredCalls': boolean;
            }

            export interface TrafficPercentStrategy {
                'percentages': {
                    [name: string]: number
                ;
                };
            }

            export interface AuthRequirement {
                'audiences': string;
                'providerId': string;
            }

            export interface Documentation {
                'pages': Page[];
                'summary': string;
                'documentationRootUrl': string;
                'overview': string;
                'rules': DocumentationRule[];
            }

            export interface AuditLogConfig {
                'logType': string;
                'exemptedMembers': string[];
            }

            export interface ConfigSource {
                'files': ConfigFile[];
                'id': string;
            }

            export interface BackendRule {
                'minDeadline': number;
                'address': string;
                'selector': string;
                'deadline': number;
            }

            export interface AuthenticationRule {
                'requirements': AuthRequirement[];
                'allowWithoutCredential': boolean;
                'selector': string;
                'customAuth': CustomAuthRequirements;
                'oauth': OAuthRequirements;
            }

            export interface UndeleteServiceResponse {
                'service': ManagedService;
            }

            export interface Policy {
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
                'iamOwned': boolean;
                'etag': string;
                'version': number;
            }

            export interface Api {
                'syntax': string;
                'sourceContext': SourceContext;
                'version': string;
                'mixins': Mixin[];
                'options': Option[];
                'methods': Method[];
                'name': string;
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
                'error': Status;
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
            }

            export interface Page {
                'subpages': Page[];
                'name': string;
                'content': string;
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
                'condition': Expr;
                'members': string[];
                'role': string;
            }

            export interface AuthProvider {
                'audiences': string;
                'authorizationUrl': string;
                'issuer': string;
                'id': string;
                'jwksUri': string;
            }

            export interface Service {
                'http': Http;
                'backend': Backend;
                'systemParameters': SystemParameters;
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
                'producerProjectId': string;
                'systemTypes': Type[];
                'visibility': Visibility;
                'quota': Quota;
                'name': string;
                'customError': CustomError;
                'title': string;
                'endpoints': Endpoint[];
                'logs': LogDescriptor[];
                'apis': Api[];
                'types': Type[];
                'sourceInfo': SourceInfo;
            }

            export interface EnumValue {
                'options': Option[];
                'number': number;
                'name': string;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface OperationMetadata {
                'steps': Step[];
                'resourceNames': string[];
                'progressPercentage': number;
                'startTime': string;
            }

            export interface CustomHttpPattern {
                'kind': string;
                'path': string;
            }

            export interface SystemParameterRule {
                'parameters': SystemParameter[];
                'selector': string;
            }

            export interface VisibilityRule {
                'restriction': string;
                'selector': string;
            }

            export interface HttpRule {
                'responseBody': string;
                'mediaUpload': MediaUpload;
                'selector': string;
                'custom': CustomHttpPattern;
                'get': string;
                'patch': string;
                'put': string;
                'delete': string;
                'body': string;
                'post': string;
                'mediaDownload': MediaDownload;
                'additionalBindings': HttpRule[];
            }

            export interface MonitoringDestination {
                'metrics': string[];
                'monitoredResource': string;
            }

            export interface Visibility {
                'rules': VisibilityRule[];
            }

            export interface SystemParameters {
                'rules': SystemParameterRule[];
            }

            export interface ConfigChange {
                'changeType': string;
                'element': string;
                'advices': Advice[];
                'oldValue': string;
                'newValue': string;
            }

            export interface Quota {
                'limits': QuotaLimit[];
                'metricRules': MetricRule[];
            }

            export interface Rollout {
                'createTime': string;
                'status': string;
                'serviceName': string;
                'createdBy': string;
                'trafficPercentStrategy': TrafficPercentStrategy;
                'rolloutId': string;
                'deleteServiceStrategy': DeleteServiceStrategy;
            }

            export interface GenerateConfigReportRequest {
                'oldConfig': {
                    [name: string]: any
                ;
                };
                'newConfig': {
                    [name: string]: any
                ;
                };
            }

        }
    }
}
