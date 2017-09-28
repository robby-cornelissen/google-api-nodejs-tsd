// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        clouddebugger(version: string): any;
        clouddebugger(version: 'v2'): clouddebugger.v2.Clouddebugger;
    }

    namespace clouddebugger {
        namespace v2 {
            export interface Clouddebugger {
                new(options: any): Clouddebugger;

                'debugger': {
                    'debuggees': {
                        'list': (parameters: { [key: string]: any; 'clientVersion'?: string, 'includeInactive'?: boolean, 'project'?: string}, callback: (error: any, body: ListDebuggeesResponse, response: any) => void) => Request;

                        'breakpoints': {
                            'list': (parameters: { [key: string]: any; 'action.value'?: string, 'clientVersion'?: string, 'includeInactive'?: boolean, 'includeAllUsers'?: boolean, 'stripResults'?: boolean, 'debuggeeId': string, 'waitToken'?: string}, callback: (error: any, body: ListBreakpointsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'debuggeeId': string, 'clientVersion'?: string, 'breakpointId': string}, callback: (error: any, body: GetBreakpointResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'debuggeeId': string, 'clientVersion'?: string, 'breakpointId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'set': (parameters: { [key: string]: any; 'clientVersion'?: string, 'debuggeeId': string}, callback: (error: any, body: SetBreakpointResponse, response: any) => void) => Request;
                        };
                    };
                };
                'controller': {
                    'debuggees': {
                        'register': (parameters: { [key: string]: any; }, callback: (error: any, body: RegisterDebuggeeResponse, response: any) => void) => Request;

                        'breakpoints': {
                            'list': (parameters: { [key: string]: any; 'successOnTimeout'?: boolean, 'debuggeeId': string, 'waitToken'?: string}, callback: (error: any, body: ListActiveBreakpointsResponse, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'debuggeeId': string, 'id': string}, callback: (error: any, body: UpdateActiveBreakpointResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface CloudWorkspaceSourceContext {
                'workspaceId': CloudWorkspaceId;
                'snapshotId': string;
            }

            export interface UpdateActiveBreakpointResponse {}

            export interface GerritSourceContext {
                'aliasContext': AliasContext;
                'gerritProject': string;
                'revisionId': string;
                'hostUri': string;
                'aliasName': string;
            }

            export interface CloudWorkspaceId {
                'repoId': RepoId;
                'name': string;
            }

            export interface ListBreakpointsResponse {
                'nextWaitToken': string;
                'breakpoints': Breakpoint[];
            }

            export interface Breakpoint {
                'logLevel': string;
                'id': string;
                'location': SourceLocation;
                'finalTime': string;
                'variableTable': Variable[];
                'logMessageFormat': string;
                'createTime': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'expressions': string[];
                'evaluatedExpressions': Variable[];
                'isFinalState': boolean;
                'stackFrames': StackFrame[];
                'condition': string;
                'status': StatusMessage;
                'userEmail': string;
                'action': string;
            }

            export interface SetBreakpointResponse {
                'breakpoint': Breakpoint;
            }

            export interface UpdateActiveBreakpointRequest {
                'breakpoint': Breakpoint;
            }

            export interface SourceContext {
                'git': GitSourceContext;
                'gerrit': GerritSourceContext;
                'cloudWorkspace': CloudWorkspaceSourceContext;
                'cloudRepo': CloudRepoSourceContext;
            }

            export interface CloudRepoSourceContext {
                'revisionId': string;
                'aliasName': string;
                'repoId': RepoId;
                'aliasContext': AliasContext;
            }

            export interface RegisterDebuggeeResponse {
                'debuggee': Debuggee;
            }

            export interface RegisterDebuggeeRequest {
                'debuggee': Debuggee;
            }

            export interface GetBreakpointResponse {
                'breakpoint': Breakpoint;
            }

            export interface StatusMessage {
                'description': FormatMessage;
                'isError': boolean;
                'refersTo': string;
            }

            export interface GitSourceContext {
                'revisionId': string;
                'url': string;
            }

            export interface Variable {
                'members': Variable[];
                'status': StatusMessage;
                'name': string;
                'type': string;
                'value': string;
                'varTableIndex': number;
            }

            export interface StackFrame {
                'locals': Variable[];
                'location': SourceLocation;
                'function': string;
                'arguments': Variable[];
            }

            export interface RepoId {
                'uid': string;
                'projectRepoId': ProjectRepoId;
            }

            export interface FormatMessage {
                'parameters': string[];
                'format': string;
            }

            export interface ExtendedSourceContext {
                'context': SourceContext;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface ListDebuggeesResponse {
                'debuggees': Debuggee[];
            }

            export interface AliasContext {
                'name': string;
                'kind': string;
            }

            export interface Empty {}

            export interface SourceLocation {
                'path': string;
                'line': number;
            }

            export interface Debuggee {
                'project': string;
                'isDisabled': boolean;
                'agentVersion': string;
                'id': string;
                'description': string;
                'uniquifier': string;
                'sourceContexts': SourceContext[];
                'extSourceContexts': ExtendedSourceContext[];
                'labels': {
                    [name: string]: string
                ;
                };
                'isInactive': boolean;
                'status': StatusMessage;
            }

            export interface ListActiveBreakpointsResponse {
                'waitExpired': boolean;
                'nextWaitToken': string;
                'breakpoints': Breakpoint[];
            }

            export interface ProjectRepoId {
                'repoName': string;
                'projectId': string;
            }

        }
    }
}
