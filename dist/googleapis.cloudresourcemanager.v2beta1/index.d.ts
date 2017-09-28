// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudresourcemanager(version: string): any;
        cloudresourcemanager(version: 'v2beta1'): cloudresourcemanager.v2beta1.Cloudresourcemanager;
    }

    namespace cloudresourcemanager {
        namespace v2beta1 {
            export interface Cloudresourcemanager {
                new(options: any): Cloudresourcemanager;

                'folders': {
                    'move': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'parent'?: string, 'showDeleted'?: boolean, 'pageToken'?: string}, callback: (error: any, body: ListFoldersResponse, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; 'parent'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchFoldersResponse, response: any) => void) => Request;
                    'undelete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                };

            }

            export interface SearchFoldersRequest {
                'pageToken': string;
                'pageSize': number;
                'query': string;
            }

            export interface Folder {
                'parent': string;
                'createTime': string;
                'lifecycleState': string;
                'name': string;
                'displayName': string;
            }

            export interface ProjectCreationStatus {
                'ready': boolean;
                'gettable': boolean;
                'createTime': string;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface GetIamPolicyRequest {}

            export interface UndeleteFolderRequest {}

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface FolderOperationError {
                'errorMessageId': string;
            }

            export interface FolderOperation {
                'operationType': string;
                'sourceParent': string;
                'displayName': string;
                'destinationParent': string;
            }

            export interface Policy {
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
                'etag': string;
                'version': number;
            }

            export interface Operation {
                'name': string;
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
            }

            export interface AuditConfig {
                'auditLogConfigs': AuditLogConfig[];
                'service': string;
            }

            export interface ListFoldersResponse {
                'folders': Folder[];
                'nextPageToken': string;
            }

            export interface MoveFolderRequest {
                'destinationParent': string;
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
                'updateMask': string;
            }

            export interface SearchFoldersResponse {
                'folders': Folder[];
                'nextPageToken': string;
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
                'members': string[];
                'role': string;
            }

        }
    }
}
