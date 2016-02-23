// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        clouddebugger(version: string): any;
        clouddebugger(version: 'v2'): clouddebugger.v2.Clouddebugger;
    }

    namespace clouddebugger {
        namespace v2 {
            export interface Clouddebugger {
                new(options: any): Clouddebugger;

                'controller': {
                    'debuggees': {
                        'register': (parameters: any, callback: (error: any, body: RegisterDebuggeeResponse, response: any) => void) => Request;
                    
                        'breakpoints': {
                            'list': (parameters: {'debuggeeId': string, 'waitToken'?: string, 'successOnTimeout'?: boolean}, callback: (error: any, body: ListActiveBreakpointsResponse, response: any) => void) => Request;
                            'update': (parameters: {'debuggeeId': string, 'id': string}, callback: (error: any, body: UpdateActiveBreakpointResponse, response: any) => void) => Request;
                        };
                    };
                };
                'debugger': {
                    'debuggees': {
                        'list': (parameters: {'project'?: string, 'includeInactive'?: boolean}, callback: (error: any, body: ListDebuggeesResponse, response: any) => void) => Request;
                    
                        'breakpoints': {
                            'set': (parameters: {'debuggeeId': string}, callback: (error: any, body: SetBreakpointResponse, response: any) => void) => Request;
                            'get': (parameters: {'debuggeeId': string, 'breakpointId': string}, callback: (error: any, body: GetBreakpointResponse, response: any) => void) => Request;
                            'delete': (parameters: {'debuggeeId': string, 'breakpointId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: {'debuggeeId': string, 'includeAllUsers'?: boolean, 'includeInactive'?: boolean, 'action.value'?: string, 'stripResults'?: boolean, 'waitToken'?: string}, callback: (error: any, body: ListBreakpointsResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface RegisterDebuggeeRequest {
                'debuggee': Debuggee;
            }

            export interface Debuggee {
                'id': string;
                'project': string;
                'uniquifier': string;
                'description': string;
                'isInactive': boolean;
                'agentVersion': string;
                'isDisabled': boolean;
                'status': StatusMessage;
                'sourceContexts': SourceContext[];
                'extSourceContexts': ExtendedSourceContext[];
                'labels': {
                    [name: string]: string
                
                };
            }

            export interface StatusMessage {
                'isError': boolean;
                'refersTo': string;
                'description': FormatMessage;
            }

            export interface FormatMessage {
                'format': string;
                'parameters': string[];
            }

            export interface SourceContext {
                'cloudRepo': CloudRepoSourceContext;
                'cloudWorkspace': CloudWorkspaceSourceContext;
                'gerrit': GerritSourceContext;
                'git': GitSourceContext;
            }

            export interface CloudRepoSourceContext {
                'repoId': RepoId;
                'revisionId': string;
                'aliasName': string;
                'aliasContext': AliasContext;
            }

            export interface RepoId {
                'projectRepoId': ProjectRepoId;
                'uid': string;
            }

            export interface ProjectRepoId {
                'projectId': string;
                'repoName': string;
            }

            export interface AliasContext {
                'kind': string;
                'name': string;
            }

            export interface CloudWorkspaceSourceContext {
                'workspaceId': CloudWorkspaceId;
                'snapshotId': string;
            }

            export interface CloudWorkspaceId {
                'repoId': RepoId;
                'name': string;
            }

            export interface GerritSourceContext {
                'hostUri': string;
                'gerritProject': string;
                'revisionId': string;
                'aliasName': string;
                'aliasContext': AliasContext;
            }

            export interface GitSourceContext {
                'url': string;
                'revisionId': string;
            }

            export interface ExtendedSourceContext {
                'context': SourceContext;
                'labels': {
                    [name: string]: string
                
                };
            }

            export interface RegisterDebuggeeResponse {
                'debuggee': Debuggee;
            }

            export interface ListActiveBreakpointsResponse {
                'breakpoints': Breakpoint[];
                'nextWaitToken': string;
                'waitExpired': boolean;
            }

            export interface Breakpoint {
                'id': string;
                'action': string;
                'location': SourceLocation;
                'condition': string;
                'expressions': string[];
                'logMessageFormat': string;
                'logLevel': string;
                'isFinalState': boolean;
                'createTime': string;
                'finalTime': string;
                'userEmail': string;
                'status': StatusMessage;
                'stackFrames': StackFrame[];
                'evaluatedExpressions': Variable[];
                'variableTable': Variable[];
            }

            export interface SourceLocation {
                'path': string;
                'line': number;
            }

            export interface StackFrame {
                'function': string;
                'location': SourceLocation;
                'arguments': Variable[];
                'locals': Variable[];
            }

            export interface Variable {
                'name': string;
                'value': string;
                'type': string;
                'members': Variable[];
                'varTableIndex': number;
                'status': StatusMessage;
            }

            export interface UpdateActiveBreakpointRequest {
                'breakpoint': Breakpoint;
            }

            export interface UpdateActiveBreakpointResponse {}

            export interface SetBreakpointResponse {
                'breakpoint': Breakpoint;
            }

            export interface GetBreakpointResponse {
                'breakpoint': Breakpoint;
            }

            export interface Empty {}

            export interface ListBreakpointsResponse {
                'breakpoints': Breakpoint[];
                'nextWaitToken': string;
            }

            export interface ListDebuggeesResponse {
                'debuggees': Debuggee[];
            }

        }
    }
}