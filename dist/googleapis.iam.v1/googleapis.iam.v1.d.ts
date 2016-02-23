// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        iam(version: string): any;
        iam(version: 'v1'): iam.v1.Iam;
    }

    namespace iam {
        namespace v1 {
            export interface Iam {
                new(options: any): Iam;

                'projects': {
                    'serviceAccounts': {
                        'list': (parameters: {'name': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListServiceAccountsResponse, response: any) => void) => Request;
                        'get': (parameters: {'name': string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                        'create': (parameters: {'name': string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                        'update': (parameters: {'name': string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                        'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'signBlob': (parameters: {'name': string}, callback: (error: any, body: SignBlobResponse, response: any) => void) => Request;
                        'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    
                        'keys': {
                            'list': (parameters: {'name': string, 'keyTypes'?: string}, callback: (error: any, body: ListServiceAccountKeysResponse, response: any) => void) => Request;
                            'get': (parameters: {'name': string}, callback: (error: any, body: ServiceAccountKey, response: any) => void) => Request;
                            'create': (parameters: {'name': string}, callback: (error: any, body: ServiceAccountKey, response: any) => void) => Request;
                            'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface ListServiceAccountsResponse {
                'accounts': ServiceAccount[];
                'nextPageToken': string;
            }

            export interface ServiceAccount {
                'name': string;
                'projectId': string;
                'uniqueId': string;
                'email': string;
                'displayName': string;
                'etag': string;
                'oauth2ClientId': string;
            }

            export interface CreateServiceAccountRequest {
                'accountId': string;
                'serviceAccount': ServiceAccount;
            }

            export interface Empty {}

            export interface ListServiceAccountKeysResponse {
                'keys': ServiceAccountKey[];
            }

            export interface ServiceAccountKey {
                'name': string;
                'privateKeyType': string;
                'privateKeyData': string;
                'validAfterTime': string;
                'validBeforeTime': string;
            }

            export interface CreateServiceAccountKeyRequest {
                'privateKeyType': string;
            }

            export interface SignBlobRequest {
                'bytesToSign': string;
            }

            export interface SignBlobResponse {
                'keyId': string;
                'signature': string;
            }

            export interface Policy {
                'version': number;
                'bindings': Binding[];
                'rules': Rule[];
                'etag': string;
            }

            export interface Binding {
                'role': string;
                'members': string[];
            }

            export interface Rule {
                'description': string;
                'permissions': string[];
                'action': string;
                'in': string[];
                'notIn': string[];
                'conditions': Condition[];
                'logConfig': LogConfig[];
            }

            export interface Condition {
                'iam': string;
                'sys': string;
                'svc': string;
                'op': string;
                'value': string;
                'values': string[];
            }

            export interface LogConfig {
                'counter': CounterOptions;
                'dataAccess': DataAccessOptions;
                'cloudAudit': CloudAuditOptions;
            }

            export interface CounterOptions {
                'metric': string;
                'field': string;
            }

            export interface DataAccessOptions {}

            export interface CloudAuditOptions {}

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

        }
    }
}