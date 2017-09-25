// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        deploymentmanager(version: string): any;
        deploymentmanager(version: 'v2beta'): deploymentmanager.v2beta.Deploymentmanager;
    }

    namespace deploymentmanager {
        namespace v2beta {
            export interface Deploymentmanager {
                new(options: any): Deploymentmanager;

                'compositeTypes': {
                    'delete': (parameters: { [key: string]: any; 'compositeType': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'compositeType': string, 'project': string}, callback: (error: any, body: CompositeType, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: CompositeTypesListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'compositeType': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'compositeType': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'deployments': {
                    'cancelPreview': (parameters: { [key: string]: any; 'deployment': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'deletePolicy'?: string, 'deployment': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'deployment': string, 'project': string}, callback: (error: any, body: Deployment, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'preview'?: boolean, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DeploymentsListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'createPolicy'?: string, 'deletePolicy'?: string, 'deployment': string, 'preview'?: boolean, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'stop': (parameters: { [key: string]: any; 'deployment': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'createPolicy'?: string, 'deletePolicy'?: string, 'deployment': string, 'preview'?: boolean, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'manifests': {
                    'get': (parameters: { [key: string]: any; 'deployment': string, 'manifest': string, 'project': string}, callback: (error: any, body: Manifest, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'deployment': string, 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ManifestsListResponse, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: { [key: string]: any; 'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };
                'resources': {
                    'get': (parameters: { [key: string]: any; 'deployment': string, 'project': string, 'resource': string}, callback: (error: any, body: Resource, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'deployment': string, 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ResourcesListResponse, response: any) => void) => Request;
                };
                'typeProviders': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'typeProvider': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'typeProvider': string}, callback: (error: any, body: TypeProvider, response: any) => void) => Request;
                    'getType': (parameters: { [key: string]: any; 'project': string, 'type': string, 'typeProvider': string}, callback: (error: any, body: TypeInfo, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TypeProvidersListResponse, response: any) => void) => Request;
                    'listTypes': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'typeProvider': string}, callback: (error: any, body: TypeProvidersListTypesResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'project': string, 'typeProvider': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'project': string, 'typeProvider': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'types': {
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TypesListResponse, response: any) => void) => Request;
                };

            }

            export interface AuditConfig {
                'auditLogConfigs': AuditLogConfig[];
                'exemptedMembers': string[];
                'service': string;
            }

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface AuthorizationLoggingOptions {
                'permissionType': string;
            }

            export interface BaseType {
                'collectionOverrides': CollectionOverride[];
                'credential': Credential;
                'descriptorUrl': string;
                'options': Options;
            }

            export interface BasicAuth {
                'password': string;
                'user': string;
            }

            export interface Binding {
                'condition': Expr;
                'members': string[];
                'role': string;
            }

            export interface CollectionOverride {
                'collection': string;
                'options': Options;
            }

            export interface CompositeType {
                'description': string;
                'id': string;
                'insertTime': string;
                'labels': CompositeTypeLabelEntry[];
                'name': string;
                'operation': Operation;
                'selfLink': string;
                'status': string;
                'templateContents': TemplateContents;
            }

            export interface CompositeTypeLabelEntry {
                'key': string;
                'value': string;
            }

            export interface CompositeTypesListResponse {
                'compositeTypes': CompositeType[];
                'nextPageToken': string;
            }

            export interface Condition {
                'iam': string;
                'op': string;
                'svc': string;
                'sys': string;
                'value': string;
                'values': string[];
            }

            export interface ConfigFile {
                'content': string;
            }

            export interface Credential {
                'basicAuth': BasicAuth;
                'serviceAccount': ServiceAccount;
                'useProjectDefault': boolean;
            }

            export interface Deployment {
                'description': string;
                'fingerprint': string;
                'id': string;
                'insertTime': string;
                'labels': DeploymentLabelEntry[];
                'manifest': string;
                'name': string;
                'operation': Operation;
                'selfLink': string;
                'target': TargetConfiguration;
                'update': DeploymentUpdate;
            }

            export interface DeploymentLabelEntry {
                'key': string;
                'value': string;
            }

            export interface DeploymentUpdate {
                'description': string;
                'labels': DeploymentUpdateLabelEntry[];
                'manifest': string;
            }

            export interface DeploymentUpdateLabelEntry {
                'key': string;
                'value': string;
            }

            export interface DeploymentsCancelPreviewRequest {
                'fingerprint': string;
            }

            export interface DeploymentsListResponse {
                'deployments': Deployment[];
                'nextPageToken': string;
            }

            export interface DeploymentsStopRequest {
                'fingerprint': string;
            }

            export interface Expr {
                'description': string;
                'expression': string;
                'location': string;
                'title': string;
            }

            export interface ImportFile {
                'content': string;
                'name': string;
            }

            export interface InputMapping {
                'fieldName': string;
                'location': string;
                'methodMatch': string;
                'value': string;
            }

            export interface LogConfig {
                'cloudAudit': LogConfigCloudAuditOptions;
                'counter': LogConfigCounterOptions;
                'dataAccess': LogConfigDataAccessOptions;
            }

            export interface LogConfigCloudAuditOptions {
                'authorizationLoggingOptions': AuthorizationLoggingOptions;
                'logName': string;
            }

            export interface LogConfigCounterOptions {
                'field': string;
                'metric': string;
            }

            export interface LogConfigDataAccessOptions {
                'logMode': string;
            }

            export interface Manifest {
                'config': ConfigFile;
                'expandedConfig': string;
                'id': string;
                'imports': ImportFile[];
                'insertTime': string;
                'layout': string;
                'name': string;
                'selfLink': string;
            }

            export interface ManifestsListResponse {
                'manifests': Manifest[];
                'nextPageToken': string;
            }

            export interface Operation {
                'clientOperationId': string;
                'creationTimestamp': string;
                'description': string;
                'endTime': string;
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'httpErrorMessage': string;
                'httpErrorStatusCode': number;
                'id': string;
                'insertTime': string;
                'kind': string;
                'name': string;
                'operationType': string;
                'progress': number;
                'region': string;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'statusMessage': string;
                'targetId': string;
                'targetLink': string;
                'user': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
                'zone': string;
            }

            export interface OperationsListResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface Options {
                'inputMappings': InputMapping[];
                'validationOptions': ValidationOptions;
                'virtualProperties': string;
            }

            export interface Policy {
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
                'etag': string;
                'iamOwned': boolean;
                'rules': Rule[];
                'version': number;
            }

            export interface Resource {
                'accessControl': ResourceAccessControl;
                'finalProperties': string;
                'id': string;
                'insertTime': string;
                'manifest': string;
                'name': string;
                'properties': string;
                'type': string;
                'update': ResourceUpdate;
                'updateTime': string;
                'url': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
            }

            export interface ResourceAccessControl {
                'gcpIamPolicy': string;
            }

            export interface ResourceUpdate {
                'accessControl': ResourceAccessControl;
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'finalProperties': string;
                'intent': string;
                'manifest': string;
                'properties': string;
                'state': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
            }

            export interface ResourcesListResponse {
                'nextPageToken': string;
                'resources': Resource[];
            }

            export interface Rule {
                'action': string;
                'conditions': Condition[];
                'description': string;
                'ins': string[];
                'logConfigs': LogConfig[];
                'notIns': string[];
                'permissions': string[];
            }

            export interface ServiceAccount {
                'email': string;
            }

            export interface TargetConfiguration {
                'config': ConfigFile;
                'imports': ImportFile[];
            }

            export interface TemplateContents {
                'imports': ImportFile[];
                'interpreter': string;
                'schema': string;
                'template': string;
            }

            export interface TestPermissionsRequest {
                'permissions': string[];
            }

            export interface TestPermissionsResponse {
                'permissions': string[];
            }

            export interface Type {
                'base': BaseType;
                'description': string;
                'id': string;
                'insertTime': string;
                'labels': TypeLabelEntry[];
                'name': string;
                'operation': Operation;
                'selfLink': string;
            }

            export interface TypeInfo {
                'description': string;
                'documentationLink': string;
                'kind': string;
                'name': string;
                'schema': TypeInfoSchemaInfo;
                'selfLink': string;
                'title': string;
            }

            export interface TypeInfoSchemaInfo {
                'input': string;
                'output': string;
            }

            export interface TypeLabelEntry {
                'key': string;
                'value': string;
            }

            export interface TypeProvider {
                'collectionOverrides': CollectionOverride[];
                'credential': Credential;
                'description': string;
                'descriptorUrl': string;
                'id': string;
                'insertTime': string;
                'labels': TypeProviderLabelEntry[];
                'name': string;
                'operation': Operation;
                'options': Options;
                'selfLink': string;
            }

            export interface TypeProviderLabelEntry {
                'key': string;
                'value': string;
            }

            export interface TypeProvidersListResponse {
                'nextPageToken': string;
                'typeProviders': TypeProvider[];
            }

            export interface TypeProvidersListTypesResponse {
                'nextPageToken': string;
                'types': TypeInfo[];
            }

            export interface TypesListResponse {
                'nextPageToken': string;
                'types': Type[];
            }

            export interface ValidationOptions {
                'schemaValidation': string;
                'undeclaredProperties': string;
            }

        }
    }
}
