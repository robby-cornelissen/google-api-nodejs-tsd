// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudresourcemanager(version: string): any;
        cloudresourcemanager(version: 'v1'): cloudresourcemanager.v1.Cloudresourcemanager;
    }

    namespace cloudresourcemanager {
        namespace v1 {
            export interface Cloudresourcemanager {
                new(options: any): Cloudresourcemanager;

                'folders': {
                    'clearOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'setOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'listOrgPolicies': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: ListOrgPoliciesResponse, response: any) => void) => Request;
                    'listAvailableOrgPolicyConstraints': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: ListAvailableOrgPolicyConstraintsResponse, response: any) => void) => Request;
                    'getOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'getEffectiveOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                };
                'projects': {
                    'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'listAvailableOrgPolicyConstraints': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: ListAvailableOrgPolicyConstraintsResponse, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'getOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'undelete': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'getEffectiveOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListProjectsResponse, response: any) => void) => Request;
                    'setOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'listOrgPolicies': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: ListOrgPoliciesResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'getAncestry': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: GetAncestryResponse, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'clearOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'organizations': {
                    'listAvailableOrgPolicyConstraints': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: ListAvailableOrgPolicyConstraintsResponse, response: any) => void) => Request;
                    'listOrgPolicies': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: ListOrgPoliciesResponse, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchOrganizationsResponse, response: any) => void) => Request;
                    'getOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Organization, response: any) => void) => Request;
                    'getEffectiveOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'clearOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'setOrgPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: OrgPolicy, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'liens': {
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Lien, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent'?: string}, callback: (error: any, body: ListLiensResponse, response: any) => void) => Request;
                };

            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface ListAvailableOrgPolicyConstraintsRequest {
                'pageToken': string;
                'pageSize': number;
            }

            export interface FolderOperation {
                'operationType': string;
                'sourceParent': string;
                'displayName': string;
                'destinationParent': string;
            }

            export interface Policy {
                'etag': string;
                'version': number;
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
            }

            export interface ResourceId {
                'id': string;
                'type': string;
            }

            export interface GetEffectiveOrgPolicyRequest {
                'constraint': string;
            }

            export interface ListOrgPoliciesRequest {
                'pageToken': string;
                'pageSize': number;
            }

            export interface AuditConfig {
                'service': string;
                'auditLogConfigs': AuditLogConfig[];
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

            export interface Constraint {
                'constraintDefault': string;
                'name': string;
                'listConstraint': ListConstraint;
                'version': number;
                'description': string;
                'displayName': string;
                'booleanConstraint': BooleanConstraint;
            }

            export interface ListLiensResponse {
                'nextPageToken': string;
                'liens': Lien[];
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface GetOrgPolicyRequest {
                'constraint': string;
            }

            export interface RestoreDefault {}

            export interface UndeleteProjectRequest {}

            export interface ClearOrgPolicyRequest {
                'etag': string;
                'constraint': string;
            }

            export interface ProjectCreationStatus {
                'ready': boolean;
                'gettable': boolean;
                'createTime': string;
            }

            export interface BooleanConstraint {}

            export interface GetIamPolicyRequest {}

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface OrganizationOwner {
                'directoryCustomerId': string;
            }

            export interface ListProjectsResponse {
                'nextPageToken': string;
                'projects': Project[];
            }

            export interface Project {
                'lifecycleState': string;
                'projectNumber': string;
                'parent': ResourceId;
                'labels': {
                    [name: string]: string
                ;
                };
                'createTime': string;
                'name': string;
                'projectId': string;
            }

            export interface SearchOrganizationsResponse {
                'nextPageToken': string;
                'organizations': Organization[];
            }

            export interface ListOrgPoliciesResponse {
                'nextPageToken': string;
                'policies': OrgPolicy[];
            }

            export interface FolderOperationError {
                'errorMessageId': string;
            }

            export interface BooleanPolicy {
                'enforced': boolean;
            }

            export interface OrgPolicy {
                'listPolicy': ListPolicy;
                'etag': string;
                'booleanPolicy': BooleanPolicy;
                'constraint': string;
                'updateTime': string;
                'version': number;
                'restoreDefault': RestoreDefault;
            }

            export interface Lien {
                'parent': string;
                'createTime': string;
                'name': string;
                'reason': string;
                'origin': string;
                'restrictions': string[];
            }

            export interface Ancestor {
                'resourceId': ResourceId;
            }

            export interface ListConstraint {
                'suggestedValue': string;
            }

            export interface SetOrgPolicyRequest {
                'policy': OrgPolicy;
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
                'updateMask': string;
            }

            export interface Empty {}

            export interface Organization {
                'creationTime': string;
                'lifecycleState': string;
                'owner': OrganizationOwner;
                'name': string;
                'displayName': string;
            }

            export interface ListAvailableOrgPolicyConstraintsResponse {
                'nextPageToken': string;
                'constraints': Constraint[];
            }

            export interface ListPolicy {
                'allValues': string;
                'allowedValues': string[];
                'inheritFromParent': boolean;
                'suggestedValue': string;
                'deniedValues': string[];
            }

            export interface GetAncestryResponse {
                'ancestor': Ancestor[];
            }

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface SearchOrganizationsRequest {
                'filter': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface GetAncestryRequest {}

        }
    }
}
