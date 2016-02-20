/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        clouduseraccounts(version: string): any;
        clouduseraccounts(version: 'vm_alpha'): clouduseraccounts.vm_alpha.Clouduseraccounts;
    }

    namespace clouduseraccounts {
        namespace vm_alpha {
            export interface Clouduseraccounts {
                new(options: any): Clouduseraccounts;

                'globalAccountsOperations': {
                    'delete': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'groups': {
                    'addMember': (parameters: {'groupName': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'groupName': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'groupName': string, 'project': string}, callback: (error: any, body: Group, response: any) => void) => Request;
                    'getIamPolicy': (parameters: {'project': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: GroupList, response: any) => void) => Request;
                    'removeMember': (parameters: {'groupName': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setIamPolicy': (parameters: {'project': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: {'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'linux': {
                    'getAuthorizedKeysView': (parameters: {'instance': string, 'login'?: boolean, 'project': string, 'user': string, 'zone': string}, callback: (error: any, body: LinuxGetAuthorizedKeysViewResponse, response: any) => void) => Request;
                    'getLinuxAccountViews': (parameters: {'filter'?: string, 'instance': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: LinuxGetLinuxAccountViewsResponse, response: any) => void) => Request;
                };
                'users': {
                    'addPublicKey': (parameters: {'project': string, 'user': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'project': string, 'user': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'user': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'getIamPolicy': (parameters: {'project': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: UserList, response: any) => void) => Request;
                    'removePublicKey': (parameters: {'fingerprint': string, 'project': string, 'user': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setIamPolicy': (parameters: {'project': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: {'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };

            }

            interface AuthorizedKeysView {
                'keys': string[];
                'sudoer': boolean;
            }

            interface Binding {
                'members': string[];
                'role': string;
            }

            interface Condition {
                'iam': string;
                'op': string;
                'svc': string;
                'sys': string;
                'value': string;
                'values': string[];
            }

            interface Group {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'members': string[];
                'name': string;
                'selfLink': string;
            }

            interface GroupList {
                'id': string;
                'items': Group[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface GroupsAddMemberRequest {
                'users': string[];
            }

            interface GroupsRemoveMemberRequest {
                'users': string[];
            }

            interface LinuxAccountViews {
                'groupViews': LinuxGroupView[];
                'kind': string;
                'userViews': LinuxUserView[];
            }

            interface LinuxGetAuthorizedKeysViewResponse {
                'resource': AuthorizedKeysView;
            }

            interface LinuxGetLinuxAccountViewsResponse {
                'resource': LinuxAccountViews;
            }

            interface LinuxGroupView {
                'gid': number;
                'groupName': string;
                'members': string[];
            }

            interface LinuxUserView {
                'gecos': string;
                'gid': number;
                'homeDirectory': string;
                'shell': string;
                'uid': number;
                'username': string;
            }

            interface LogConfig {
                'counter': LogConfigCounterOptions;
            }

            interface LogConfigCounterOptions {
                'field': string;
                'metric': string;
            }

            interface Operation {
                'clientOperationId': string;
                'creationTimestamp': string;
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

            interface OperationList {
                'id': string;
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Policy {
                'bindings': Binding[];
                'etag': string;
                'rules': Rule[];
                'version': number;
            }

            interface PublicKey {
                'creationTimestamp': string;
                'description': string;
                'expirationTimestamp': string;
                'fingerprint': string;
                'key': string;
            }

            interface Rule {
                'action': string;
                'conditions': Condition[];
                'description': string;
                'ins': string[];
                'logConfigs': LogConfig[];
                'notIns': string[];
                'permissions': string[];
            }

            interface TestPermissionsRequest {
                'permissions': string[];
            }

            interface TestPermissionsResponse {
                'permissions': string[];
            }

            interface User {
                'creationTimestamp': string;
                'description': string;
                'groups': string[];
                'id': string;
                'kind': string;
                'name': string;
                'owner': string;
                'publicKeys': PublicKey[];
                'selfLink': string;
            }

            interface UserList {
                'id': string;
                'items': User[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

        }
    }
}