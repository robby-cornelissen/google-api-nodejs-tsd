// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        iam(version: string): any;
        iam(version: 'v1'): iam.v1.Iam;
    }

    namespace iam {
        namespace v1 {
            export interface Iam {
                new(options: any): Iam;

                'organizations': {
                    'roles': {
                        'delete': (parameters: { [key: string]: any; 'name': string, 'etag'?: string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'showDeleted'?: boolean, 'pageToken'?: string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListRolesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'undelete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: Role, response: any) => void) => Request;
                    };
                };
                'projects': {
                    'roles': {
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'undelete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string, 'etag'?: string}, callback: (error: any, body: Role, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'showDeleted'?: boolean, 'pageToken'?: string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListRolesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                    };
                    'serviceAccounts': {
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number}, callback: (error: any, body: ListServiceAccountsResponse, response: any) => void) => Request;
                        'signBlob': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: SignBlobResponse, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'signJwt': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: SignJwtResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;

                        'keys': {
                            'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: ServiceAccountKey, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string, 'publicKeyType'?: string}, callback: (error: any, body: ServiceAccountKey, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'name': string, 'keyTypes'?: string}, callback: (error: any, body: ListServiceAccountKeysResponse, response: any) => void) => Request;
                        };
                    };
                };
                'permissions': {
                    'queryTestablePermissions': (parameters: { [key: string]: any; }, callback: (error: any, body: QueryTestablePermissionsResponse, response: any) => void) => Request;
                };
                'roles': {
                    'queryGrantableRoles': (parameters: { [key: string]: any; }, callback: (error: any, body: QueryGrantableRolesResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Role, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'parent'?: string, 'showDeleted'?: boolean, 'pageToken'?: string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListRolesResponse, response: any) => void) => Request;
                };

            }

            export interface Role {
                'includedPermissions': string[];
                'description': string;
                'etag': string;
                'stage': string;
                'name': string;
                'deleted': boolean;
                'title': string;
            }

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface QueryGrantableRolesRequest {
                'fullResourceName': string;
                'pageToken': string;
                'pageSize': number;
                'view': string;
            }

            export interface Expr {
                'description': string;
                'expression': string;
                'location': string;
                'title': string;
            }

            export interface ServiceAccount {
                'displayName': string;
                'etag': string;
                'email': string;
                'name': string;
                'projectId': string;
                'oauth2ClientId': string;
                'uniqueId': string;
            }

            export interface CreateRoleRequest {
                'roleId': string;
                'role': Role;
            }

            export interface QueryTestablePermissionsRequest {
                'fullResourceName': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface ListServiceAccountKeysResponse {
                'keys': ServiceAccountKey[];
            }

            export interface ServiceAccountKey {
                'privateKeyData': string;
                'publicKeyData': string;
                'name': string;
                'validBeforeTime': string;
                'keyAlgorithm': string;
                'privateKeyType': string;
                'validAfterTime': string;
            }

            export interface SignBlobResponse {
                'signature': string;
                'keyId': string;
            }

            export interface Permission {
                'onlyInPredefinedRoles': boolean;
                'title': string;
                'description': string;
                'customRolesSupportLevel': string;
                'stage': string;
                'name': string;
            }

            export interface SignJwtRequest {
                'payload': string;
            }

            export interface PolicyDelta {
                'bindingDeltas': BindingDelta[];
            }

            export interface ListServiceAccountsResponse {
                'accounts': ServiceAccount[];
                'nextPageToken': string;
            }

            export interface QueryGrantableRolesResponse {
                'nextPageToken': string;
                'roles': Role[];
            }

            export interface SignBlobRequest {
                'bytesToSign': string;
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface QueryTestablePermissionsResponse {
                'nextPageToken': string;
                'permissions': Permission[];
            }

            export interface Empty {}

            export interface CreateServiceAccountKeyRequest {
                'keyAlgorithm': string;
                'privateKeyType': string;
            }

            export interface SignJwtResponse {
                'signedJwt': string;
                'keyId': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Policy {
                'version': number;
                'bindings': Binding[];
                'etag': string;
            }

            export interface ListRolesResponse {
                'nextPageToken': string;
                'roles': Role[];
            }

            export interface AuditData {
                'policyDelta': PolicyDelta;
            }

            export interface BindingDelta {
                'role': string;
                'action': string;
                'condition': Expr;
                'member': string;
            }

            export interface UndeleteRoleRequest {
                'etag': string;
            }

            export interface CreateServiceAccountRequest {
                'serviceAccount': ServiceAccount;
                'accountId': string;
            }

        }
    }
}
