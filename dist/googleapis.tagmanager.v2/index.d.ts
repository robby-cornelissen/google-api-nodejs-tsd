// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        tagmanager(version: string): any;
        tagmanager(version: 'v2'): tagmanager.v2.Tagmanager;
    }

    namespace tagmanager {
        namespace v2 {
            export interface Tagmanager {
                new(options: any): Tagmanager;

                'accounts': {
                    'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string}, callback: (error: any, body: ListAccountsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Account, response: any) => void) => Request;

                    'containers': {
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Container, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Container, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListContainersResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Container, response: any) => void) => Request;

                        'environments': {
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListEnvironmentsResponse, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                            'reauthorize': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Environment, response: any) => void) => Request;
                        };
                        'version_headers': {
                            'latest': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: ContainerVersionHeader, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'includeDeleted'?: boolean, 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListContainerVersionsResponse, response: any) => void) => Request;
                        };
                        'versions': {
                            'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'containerVersionId'?: string, 'path': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                            'live': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                            'publish': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: PublishContainerVersionResponse, response: any) => void) => Request;
                            'set_latest': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                            'undelete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: ContainerVersion, response: any) => void) => Request;
                        };
                        'workspaces': {
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Workspace, response: any) => void) => Request;
                            'create_version': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: CreateContainerVersionResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Workspace, response: any) => void) => Request;
                            'getProposal': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: WorkspaceProposal, response: any) => void) => Request;
                            'getStatus': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: GetWorkspaceStatusResponse, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListWorkspacesResponse, response: any) => void) => Request;
                            'quick_preview': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: QuickPreviewResponse, response: any) => void) => Request;
                            'resolve_conflict': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'sync': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: SyncWorkspaceResponse, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Workspace, response: any) => void) => Request;
                            'updateProposal': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: WorkspaceProposal, response: any) => void) => Request;

                            'built_in_variables': {
                                'create': (parameters: { [key: string]: any; 'parent': string, 'type'?: string}, callback: (error: any, body: CreateBuiltInVariableResponse, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'path': string, 'type'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListEnabledBuiltInVariablesResponse, response: any) => void) => Request;
                                'revert': (parameters: { [key: string]: any; 'path': string, 'type'?: string}, callback: (error: any, body: RevertBuiltInVariableResponse, response: any) => void) => Request;
                            };
                            'folders': {
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                                'entities': (parameters: { [key: string]: any; 'pageToken'?: string, 'path': string}, callback: (error: any, body: FolderEntities, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListFoldersResponse, response: any) => void) => Request;
                                'move_entities_to_folder': (parameters: { [key: string]: any; 'path': string, 'tagId'?: string, 'triggerId'?: string, 'variableId'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                                'revert': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: RevertFolderResponse, response: any) => void) => Request;
                                'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Folder, response: any) => void) => Request;
                            };
                            'proposal': {
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: WorkspaceProposal, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            };
                            'tags': {
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Tag, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Tag, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListTagsResponse, response: any) => void) => Request;
                                'revert': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: RevertTagResponse, response: any) => void) => Request;
                                'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Tag, response: any) => void) => Request;
                            };
                            'triggers': {
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Trigger, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Trigger, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListTriggersResponse, response: any) => void) => Request;
                                'revert': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: RevertTriggerResponse, response: any) => void) => Request;
                                'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Trigger, response: any) => void) => Request;
                            };
                            'variables': {
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListVariablesResponse, response: any) => void) => Request;
                                'revert': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: RevertVariableResponse, response: any) => void) => Request;
                                'update': (parameters: { [key: string]: any; 'fingerprint'?: string, 'path': string}, callback: (error: any, body: Variable, response: any) => void) => Request;
                            };
                        };
                    };
                    'user_permissions': {
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: UserPermission, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: UserPermission, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'parent': string}, callback: (error: any, body: ListUserPermissionsResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'path': string}, callback: (error: any, body: UserPermission, response: any) => void) => Request;
                    };
                };

            }

            export interface Account {
                'accountId': string;
                'fingerprint': string;
                'name': string;
                'path': string;
                'shareData': boolean;
                'tagManagerUrl': string;
            }

            export interface AccountAccess {
                'permission': string;
            }

            export interface BuiltInVariable {
                'accountId': string;
                'containerId': string;
                'name': string;
                'path': string;
                'type': string;
                'workspaceId': string;
            }

            export interface Condition {
                'parameter': Parameter[];
                'type': string;
            }

            export interface Container {
                'accountId': string;
                'containerId': string;
                'domainName': string[];
                'fingerprint': string;
                'name': string;
                'notes': string;
                'path': string;
                'publicId': string;
                'tagManagerUrl': string;
                'usageContext': string[];
            }

            export interface ContainerAccess {
                'containerId': string;
                'permission': string;
            }

            export interface ContainerVersion {
                'accountId': string;
                'builtInVariable': BuiltInVariable[];
                'container': Container;
                'containerId': string;
                'containerVersionId': string;
                'deleted': boolean;
                'description': string;
                'fingerprint': string;
                'folder': Folder[];
                'name': string;
                'path': string;
                'tag': Tag[];
                'tagManagerUrl': string;
                'trigger': Trigger[];
                'variable': Variable[];
                'zone': Zone[];
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
                'numZones': string;
                'path': string;
            }

            export interface CreateBuiltInVariableResponse {
                'builtInVariable': BuiltInVariable[];
            }

            export interface CreateContainerVersionRequestVersionOptions {
                'name': string;
                'notes': string;
            }

            export interface CreateContainerVersionResponse {
                'compilerError': boolean;
                'containerVersion': ContainerVersion;
                'newWorkspacePath': string;
                'syncStatus': SyncStatus;
            }

            export interface CreateWorkspaceProposalRequest {
                'initialComment': WorkspaceProposalHistoryComment;
                'reviewers': WorkspaceProposalUser[];
            }

            export interface Entity {
                'changeStatus': string;
                'folder': Folder;
                'tag': Tag;
                'trigger': Trigger;
                'variable': Variable;
            }

            export interface Environment {
                'accountId': string;
                'authorizationCode': string;
                'authorizationTimestamp': Timestamp;
                'containerId': string;
                'containerVersionId': string;
                'description': string;
                'enableDebug': boolean;
                'environmentId': string;
                'fingerprint': string;
                'name': string;
                'path': string;
                'tagManagerUrl': string;
                'type': string;
                'url': string;
                'workspaceId': string;
            }

            export interface Folder {
                'accountId': string;
                'containerId': string;
                'fingerprint': string;
                'folderId': string;
                'name': string;
                'notes': string;
                'path': string;
                'tagManagerUrl': string;
                'workspaceId': string;
            }

            export interface FolderEntities {
                'nextPageToken': string;
                'tag': Tag[];
                'trigger': Trigger[];
                'variable': Variable[];
            }

            export interface GetWorkspaceStatusResponse {
                'mergeConflict': MergeConflict[];
                'workspaceChange': Entity[];
            }

            export interface ListAccountsResponse {
                'account': Account[];
                'nextPageToken': string;
            }

            export interface ListContainerVersionsResponse {
                'containerVersionHeader': ContainerVersionHeader[];
                'nextPageToken': string;
            }

            export interface ListContainersResponse {
                'container': Container[];
                'nextPageToken': string;
            }

            export interface ListEnabledBuiltInVariablesResponse {
                'builtInVariable': BuiltInVariable[];
                'nextPageToken': string;
            }

            export interface ListEnvironmentsResponse {
                'environment': Environment[];
                'nextPageToken': string;
            }

            export interface ListFoldersResponse {
                'folder': Folder[];
                'nextPageToken': string;
            }

            export interface ListTagsResponse {
                'nextPageToken': string;
                'tag': Tag[];
            }

            export interface ListTriggersResponse {
                'nextPageToken': string;
                'trigger': Trigger[];
            }

            export interface ListUserPermissionsResponse {
                'nextPageToken': string;
                'userPermission': UserPermission[];
            }

            export interface ListVariablesResponse {
                'nextPageToken': string;
                'variable': Variable[];
            }

            export interface ListWorkspacesResponse {
                'nextPageToken': string;
                'workspace': Workspace[];
            }

            export interface MergeConflict {
                'entityInBaseVersion': Entity;
                'entityInWorkspace': Entity;
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

            export interface QuickPreviewResponse {
                'compilerError': boolean;
                'containerVersion': ContainerVersion;
                'syncStatus': SyncStatus;
            }

            export interface RevertBuiltInVariableResponse {
                'enabled': boolean;
            }

            export interface RevertFolderResponse {
                'folder': Folder;
            }

            export interface RevertTagResponse {
                'tag': Tag;
            }

            export interface RevertTriggerResponse {
                'trigger': Trigger;
            }

            export interface RevertVariableResponse {
                'variable': Variable;
            }

            export interface SetupTag {
                'stopOnSetupFailure': boolean;
                'tagName': string;
            }

            export interface SyncStatus {
                'mergeConflict': boolean;
                'syncError': boolean;
            }

            export interface SyncWorkspaceResponse {
                'mergeConflict': MergeConflict[];
                'syncStatus': SyncStatus;
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
                'path': string;
                'priority': Parameter;
                'scheduleEndMs': string;
                'scheduleStartMs': string;
                'setupTag': SetupTag[];
                'tagFiringOption': string;
                'tagId': string;
                'tagManagerUrl': string;
                'teardownTag': TeardownTag[];
                'type': string;
                'workspaceId': string;
            }

            export interface TeardownTag {
                'stopTeardownOnFailure': boolean;
                'tagName': string;
            }

            export interface Timestamp {
                'nanos': number;
                'seconds': string;
            }

            export interface Trigger {
                'accountId': string;
                'autoEventFilter': Condition[];
                'checkValidation': Parameter;
                'containerId': string;
                'continuousTimeMinMilliseconds': Parameter;
                'customEventFilter': Condition[];
                'eventName': Parameter;
                'filter': Condition[];
                'fingerprint': string;
                'horizontalScrollPercentageList': Parameter;
                'interval': Parameter;
                'intervalSeconds': Parameter;
                'limit': Parameter;
                'maxTimerLengthSeconds': Parameter;
                'name': string;
                'notes': string;
                'parameter': Parameter[];
                'parentFolderId': string;
                'path': string;
                'selector': Parameter;
                'tagManagerUrl': string;
                'totalTimeMinMilliseconds': Parameter;
                'triggerId': string;
                'type': string;
                'uniqueTriggerId': Parameter;
                'verticalScrollPercentageList': Parameter;
                'visibilitySelector': Parameter;
                'visiblePercentageMax': Parameter;
                'visiblePercentageMin': Parameter;
                'waitForTags': Parameter;
                'waitForTagsTimeout': Parameter;
                'workspaceId': string;
            }

            export interface UpdateWorkspaceProposalRequest {
                'fingerprint': string;
                'newComment': WorkspaceProposalHistoryComment;
                'reviewers': WorkspaceProposalUser[];
                'status': string;
            }

            export interface UserPermission {
                'accountAccess': AccountAccess;
                'accountId': string;
                'containerAccess': ContainerAccess[];
                'emailAddress': string;
                'path': string;
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
                'path': string;
                'scheduleEndMs': string;
                'scheduleStartMs': string;
                'tagManagerUrl': string;
                'type': string;
                'variableId': string;
                'workspaceId': string;
            }

            export interface Workspace {
                'accountId': string;
                'containerId': string;
                'description': string;
                'fingerprint': string;
                'name': string;
                'path': string;
                'tagManagerUrl': string;
                'workspaceId': string;
            }

            export interface WorkspaceProposal {
                'authors': WorkspaceProposalUser[];
                'fingerprint': string;
                'history': WorkspaceProposalHistory[];
                'path': string;
                'reviewers': WorkspaceProposalUser[];
                'status': string;
            }

            export interface WorkspaceProposalHistory {
                'comment': WorkspaceProposalHistoryComment;
                'createdBy': WorkspaceProposalUser;
                'createdTimestamp': Timestamp;
                'statusChange': WorkspaceProposalHistoryStatusChange;
                'type': string;
            }

            export interface WorkspaceProposalHistoryComment {
                'content': string;
            }

            export interface WorkspaceProposalHistoryStatusChange {
                'newStatus': string;
                'oldStatus': string;
            }

            export interface WorkspaceProposalUser {
                'gaiaId': string;
                'type': string;
            }

            export interface Zone {
                'accountId': string;
                'boundary': ZoneBoundary;
                'childContainer': ZoneChildContainer[];
                'containerId': string;
                'fingerprint': string;
                'name': string;
                'notes': string;
                'path': string;
                'tagManagerUrl': string;
                'typeRestriction': ZoneTypeRestriction;
                'workspaceId': string;
                'zoneId': string;
            }

            export interface ZoneBoundary {
                'condition': Condition[];
                'customEvaluationTriggerId': string[];
            }

            export interface ZoneChildContainer {
                'nickname': string;
                'publicId': string;
            }

            export interface ZoneTypeRestriction {
                'enable': boolean;
                'whitelistedTypeId': string[];
            }

        }
    }
}
