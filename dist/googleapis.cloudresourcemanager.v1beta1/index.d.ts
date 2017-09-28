// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudresourcemanager(version: string): any;
        cloudresourcemanager(version: 'v1beta1'): cloudresourcemanager.v1beta1.Cloudresourcemanager;
    }

    namespace cloudresourcemanager {
        namespace v1beta1 {
            export interface Cloudresourcemanager {
                new(options: any): Cloudresourcemanager;

                'projects': {
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string}, callback: (error: any, body: ListProjectsResponse, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; 'useLegacyStack'?: boolean}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'undelete': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'getAncestry': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: GetAncestryResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'organizations': {
                    'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'organizationId'?: string, 'name': string}, callback: (error: any, body: Organization, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Organization, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListOrganizationsResponse, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                };

            }

            export interface GetAncestryRequest {}

            export interface Project {
                'projectNumber': string;
                'parent': ResourceId;
                'labels': {
                    [name: string]: string
                ;
                };
                'createTime': string;
                'name': string;
                'projectId': string;
                'lifecycleState': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface FolderOperationError {
                'errorMessageId': string;
            }

            export interface FolderOperation {
                'sourceParent': string;
                'displayName': string;
                'destinationParent': string;
                'operationType': string;
            }

            export interface Policy {
                'etag': string;
                'version': number;
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
            }

            export interface ResourceId {
                'type': string;
                'id': string;
            }

            export interface AuditConfig {
                'auditLogConfigs': AuditLogConfig[];
                'service': string;
            }

            export interface Ancestor {
                'resourceId': ResourceId;
            }

            export interface ListOrganizationsResponse {
                'organizations': Organization[];
                'nextPageToken': string;
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
                'updateMask': string;
            }

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface Empty {}

            export interface Organization {
                'organizationId': string;
                'lifecycleState': string;
                'displayName': string;
                'creationTime': string;
                'owner': OrganizationOwner;
                'name': string;
            }

            export interface UndeleteProjectRequest {}

            export interface ProjectCreationStatus {
                'gettable': boolean;
                'createTime': string;
                'ready': boolean;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface GetIamPolicyRequest {}

            export interface OrganizationOwner {
                'directoryCustomerId': string;
            }

            export interface GetAncestryResponse {
                'ancestor': Ancestor[];
            }

            export interface AuditLogConfig {
                'logType': string;
                'exemptedMembers': string[];
            }

            export interface ListProjectsResponse {
                'projects': Project[];
                'nextPageToken': string;
            }

        }
    }
}
