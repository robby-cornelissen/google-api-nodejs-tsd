// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        sourcerepo(version: string): any;
        sourcerepo(version: 'v1'): sourcerepo.v1.Sourcerepo;
    }

    namespace sourcerepo {
        namespace v1 {
            export interface Sourcerepo {
                new(options: any): Sourcerepo;

                'projects': {
                    'repos': {
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number}, callback: (error: any, body: ListReposResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Repo, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Repo, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface Repo {
                'size': string;
                'name': string;
                'mirrorConfig': MirrorConfig;
                'url': string;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface ListReposResponse {
                'repos': Repo[];
                'nextPageToken': string;
            }

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Policy {
                'version': number;
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
                'iamOwned': boolean;
                'etag': string;
            }

            export interface AuditConfig {
                'exemptedMembers': string[];
                'service': string;
                'auditLogConfigs': AuditLogConfig[];
            }

            export interface SetIamPolicyRequest {
                'updateMask': string;
                'policy': Policy;
            }

            export interface Binding {
                'condition': Expr;
                'members': string[];
                'role': string;
            }

            export interface Expr {
                'location': string;
                'title': string;
                'description': string;
                'expression': string;
            }

            export interface MirrorConfig {
                'deployKeyId': string;
                'url': string;
                'webhookId': string;
            }

            export interface Empty {}

        }
    }
}
