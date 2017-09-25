// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        deploymentmanager(version: string): any;
        deploymentmanager(version: 'v2'): deploymentmanager.v2.Deploymentmanager;
    }

    namespace deploymentmanager {
        namespace v2 {
            export interface Deploymentmanager {
                new(options: any): Deploymentmanager;

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

            export interface Binding {
                'condition': Expr;
                'members': string[];
                'role': string;
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

            export interface TargetConfiguration {
                'config': ConfigFile;
                'imports': ImportFile[];
            }

            export interface TestPermissionsRequest {
                'permissions': string[];
            }

            export interface TestPermissionsResponse {
                'permissions': string[];
            }

            export interface Type {
                'id': string;
                'insertTime': string;
                'name': string;
                'operation': Operation;
                'selfLink': string;
            }

            export interface TypesListResponse {
                'nextPageToken': string;
                'types': Type[];
            }

        }
    }
}
