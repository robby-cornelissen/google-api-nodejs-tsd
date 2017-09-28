// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        tagmanager(version: string): any;
        tagmanager(version: 'v1'): tagmanager.v1.Tagmanager;
    }

    namespace tagmanager {
        namespace v1 {
            export interface Tagmanager {
                new(options: any): Tagmanager;

                'accounts': {
                    'get': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: ListAccountsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'accountId': string, 'fingerprint'?: string}, callback: (error: any, body: Account, response: any) => void) => Request;

                    'containers': {
                        'create': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: Container, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: Container, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: ListContainersResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'fingerprint'?: string}, callback: (error: any, body: Container, response: any) => void) => Request;

                        'environments': {
                            'create': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'environmentId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'environmentId': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: ListEnvironmentsResponse, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'environmentId': string, 'fingerprint'?: string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'environmentId': string, 'fingerprint'?: string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                        };
                        'folders': {
                            'create': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'folderId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'folderId': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: ListFoldersResponse, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'fingerprint'?: string, 'folderId': string}, callback: (error: any, body: Folder, response: any) => void) => Request;

                            'entities': {
                                'list': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'folderId': string}, callback: (error: any, body: FolderEntities, response: any) => void) => Request;
                            };
                        };
                        'move_folders': {
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'folderId': string, 'tagId'?: string, 'triggerId'?: string, 'variableId'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                        };
                        'reauthorize_environments': {
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'environmentId': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                        };
                        'tags': {
                            'create': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: Tag, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'tagId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'tagId': string}, callback: (error: any, body: Tag, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: ListTagsResponse, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'fingerprint'?: string, 'tagId': string}, callback: (error: any, body: Tag, response: any) => void) => Request;
                        };
                        'triggers': {
                            'create': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: Trigger, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'triggerId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'triggerId': string}, callback: (error: any, body: Trigger, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: ListTriggersResponse, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'fingerprint'?: string, 'triggerId': string}, callback: (error: any, body: Trigger, response: any) => void) => Request;
                        };
                        'variables': {
                            'create': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'variableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'variableId': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: ListVariablesResponse, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'fingerprint'?: string, 'variableId': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                        };
                        'versions': {
                            'create': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string}, callback: (error: any, body: CreateContainerVersionResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'containerVersionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'containerVersionId': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'headers'?: boolean, 'includeDeleted'?: boolean}, callback: (error: any, body: ListContainerVersionsResponse, response: any) => void) => Request;
                            'publish': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'containerVersionId': string, 'fingerprint'?: string}, callback: (error: any, body: PublishContainerVersionResponse, response: any) => void) => Request;
                            'restore': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'containerVersionId': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                            'undelete': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'containerVersionId': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'containerId': string, 'containerVersionId': string, 'fingerprint'?: string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                        };
                    };
                    'permissions': {
                        'create': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: UserAccess, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'permissionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'permissionId': string}, callback: (error: any, body: UserAccess, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: ListAccountUsersResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'permissionId': string}, callback: (error: any, body: UserAccess, response: any) => void) => Request;
                    };
                };

            }

            export interface Account {
                'accountId': string;
                'fingerprint': string;
                'name': string;
                'shareData': boolean;
            }

            export interface AccountAccess {
                'permission': string[];
            }

            export interface Condition {
                'parameter': Parameter[];
                'type': string;
            }

            export interface Container {
                'accountId': string;
                'containerId': string;
                'domainName': string[];
                'enabledBuiltInVariable': string[];
                'fingerprint': string;
                'name': string;
                'notes': string;
                'publicId': string;
                'timeZoneCountryId': string;
                'timeZoneId': string;
                'usageContext': string[];
            }

            export interface ContainerAccess {
                'containerId': string;
                'permission': string[];
            }

            export interface ContainerVersion {
                'accountId': string;
                'container': Container;
                'containerId': string;
                'containerVersionId': string;
                'deleted': boolean;
                'fingerprint': string;
                'folder': Folder[];
                'macro': Macro[];
                'name': string;
                'notes': string;
                'rule': Rule[];
                'tag': Tag[];
                'trigger': Trigger[];
                'variable': Variable[];
            }

            export interface ContainerVersionHeader {
                'accountId': string;
                'containerId': string;
                'containerVersionId': string;
                'deleted': boolean;
                'name': string;
                'numMacros': string;
                'numRules': string;
                'numTags': string;
                'numTriggers': string;
                'numVariables': string;
            }

            export interface CreateContainerVersionRequestVersionOptions {
                'name': string;
                'notes': string;
                'quickPreview': boolean;
            }

            export interface CreateContainerVersionResponse {
                'compilerError': boolean;
                'containerVersion': ContainerVersion;
            }

            export interface Environment {
                'accountId': string;
                'authorizationCode': string;
                'authorizationTimestampMs': string;
                'containerId': string;
                'containerVersionId': string;
                'description': string;
                'enableDebug': boolean;
                'environmentId': string;
                'fingerprint': string;
                'name': string;
                'type': string;
                'url': string;
            }

            export interface Folder {
                'accountId': string;
                'containerId': string;
                'fingerprint': string;
                'folderId': string;
                'name': string;
            }

            export interface FolderEntities {
                'tag': Tag[];
                'trigger': Trigger[];
                'variable': Variable[];
            }

            export interface ListAccountUsersResponse {
                'userAccess': UserAccess[];
            }

            export interface ListAccountsResponse {
                'accounts': Account[];
            }

            export interface ListContainerVersionsResponse {
                'containerVersion': ContainerVersion[];
                'containerVersionHeader': ContainerVersionHeader[];
            }

            export interface ListContainersResponse {
                'containers': Container[];
            }

            export interface ListEnvironmentsResponse {
                'environments': Environment[];
            }

            export interface ListFoldersResponse {
                'folders': Folder[];
            }

            export interface ListTagsResponse {
                'tags': Tag[];
            }

            export interface ListTriggersResponse {
                'triggers': Trigger[];
            }

            export interface ListVariablesResponse {
                'variables': Variable[];
            }

            export interface Macro {
                'accountId': string;
                'containerId': string;
                'disablingRuleId': string[];
                'enablingRuleId': string[];
                'fingerprint': string;
                'macroId': string;
                'name': string;
                'notes': string;
                'parameter': Parameter[];
                'parentFolderId': string;
                'scheduleEndMs': string;
                'scheduleStartMs': string;
                'type': string;
            }

            export interface Parameter {
                'key': string;
                'list': Parameter[];
                'map': Parameter[];
                'type': string;
                'value': string;
            }

            export interface PublishContainerVersionResponse {
                'compilerError': boolean;
                'containerVersion': ContainerVersion;
            }

            export interface Rule {
                'accountId': string;
                'condition': Condition[];
                'containerId': string;
                'fingerprint': string;
                'name': string;
                'notes': string;
                'ruleId': string;
            }

            export interface SetupTag {
                'stopOnSetupFailure': boolean;
                'tagName': string;
            }

            export interface Tag {
                'accountId': string;
                'blockingRuleId': string[];
                'blockingTriggerId': string[];
                'containerId': string;
                'fingerprint': string;
                'firingRuleId': string[];
                'firingTriggerId': string[];
                'liveOnly': boolean;
                'name': string;
                'notes': string;
                'parameter': Parameter[];
                'parentFolderId': string;
                'priority': Parameter;
                'scheduleEndMs': string;
                'scheduleStartMs': string;
                'setupTag': SetupTag[];
                'tagFiringOption': string;
                'tagId': string;
                'teardownTag': TeardownTag[];
                'type': string;
            }

            export interface TeardownTag {
                'stopTeardownOnFailure': boolean;
                'tagName': string;
            }

            export interface Trigger {
                'accountId': string;
                'autoEventFilter': Condition[];
                'checkValidation': Parameter;
                'containerId': string;
                'customEventFilter': Condition[];
                'enableAllVideos': Parameter;
                'eventName': Parameter;
                'filter': Condition[];
                'fingerprint': string;
                'interval': Parameter;
                'limit': Parameter;
                'name': string;
                'parentFolderId': string;
                'triggerId': string;
                'type': string;
                'uniqueTriggerId': Parameter;
                'videoPercentageList': Parameter;
                'waitForTags': Parameter;
                'waitForTagsTimeout': Parameter;
            }

            export interface UserAccess {
                'accountAccess': AccountAccess;
                'accountId': string;
                'containerAccess': ContainerAccess[];
                'emailAddress': string;
                'permissionId': string;
            }

            export interface Variable {
                'accountId': string;
                'containerId': string;
                'disablingTriggerId': string[];
                'enablingTriggerId': string[];
                'fingerprint': string;
                'name': string;
                'notes': string;
                'parameter': Parameter[];
                'parentFolderId': string;
                'scheduleEndMs': string;
                'scheduleStartMs': string;
                'type': string;
                'variableId': string;
            }

        }
    }
}
