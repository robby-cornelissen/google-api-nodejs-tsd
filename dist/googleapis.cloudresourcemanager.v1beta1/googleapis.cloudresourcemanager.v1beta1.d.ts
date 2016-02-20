/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        cloudresourcemanager(version: string): any;
        cloudresourcemanager(version: 'v1beta1'): cloudresourcemanager.v1beta1.Cloudresourcemanager;
    }

    namespace cloudresourcemanager {
        namespace v1beta1 {
            export interface Cloudresourcemanager {
                new(options: any): Cloudresourcemanager;

                'projects': {
                    'create': (parameters: any, callback: (error: any, body: Project, response: any) => void) => Request;
                    'list': (parameters: {'pageToken'?: string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListProjectsResponse, response: any) => void) => Request;
                    'get': (parameters: {'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'update': (parameters: {'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'delete': (parameters: {'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'undelete': (parameters: {'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                };
                'organizations': {
                    'list': (parameters: {'pageSize'?: number, 'pageToken'?: string, 'filter'?: string}, callback: (error: any, body: ListOrganizationsResponse, response: any) => void) => Request;
                    'get': (parameters: {'organizationId': string}, callback: (error: any, body: Organization, response: any) => void) => Request;
                    'update': (parameters: {'organizationId': string}, callback: (error: any, body: Organization, response: any) => void) => Request;
                    'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                };

            }

            interface Project {
                'projectNumber': string;
                'projectId': string;
                'lifecycleState': string;
                'name': string;
                'createTime': string;
                'labels': {
                    [name: string]: string
                };
                'parent': ResourceId;
            }

            interface ResourceId {
                'type': string;
                'id': string;
            }

            interface ListProjectsResponse {
                'projects': Project[];
                'nextPageToken': string;
            }

            interface Empty {}

            interface GetIamPolicyRequest {}

            interface Policy {
                'version': number;
                'bindings': Binding[];
                'etag': string;
            }

            interface Binding {
                'role': string;
                'members': string[];
            }

            interface SetIamPolicyRequest {
                'policy': Policy;
            }

            interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            interface ListOrganizationsResponse {
                'organizations': Organization[];
                'nextPageToken': string;
            }

            interface Organization {
                'organizationId': string;
                'displayName': string;
                'owner': OrganizationOwner;
                'creationTime': string;
            }

            interface OrganizationOwner {
                'directoryCustomerId': string;
            }

        }
    }
}