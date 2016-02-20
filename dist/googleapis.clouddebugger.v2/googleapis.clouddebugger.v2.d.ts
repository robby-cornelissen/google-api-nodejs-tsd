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

            interface RegisterDebuggeeRequest {
                'debuggee': Debuggee;
            }

            interface Debuggee {
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

            interface StatusMessage {
                'isError': boolean;
                'refersTo': string;
                'description': FormatMessage;
            }

            interface FormatMessage {
                'format': string;
                'parameters': string[];
            }

            interface SourceContext {
                'cloudRepo': CloudRepoSourceContext;
                'cloudWorkspace': CloudWorkspaceSourceContext;
                'gerrit': GerritSourceContext;
                'git': GitSourceContext;
            }

            interface CloudRepoSourceContext {
                'repoId': RepoId;
                'revisionId': string;
                'aliasName': string;
                'aliasContext': AliasContext;
            }

            interface RepoId {
                'projectRepoId': ProjectRepoId;
                'uid': string;
            }

            interface ProjectRepoId {
                'projectId': string;
                'repoName': string;
            }

            interface AliasContext {
                'kind': string;
                'name': string;
            }

            interface CloudWorkspaceSourceContext {
                'workspaceId': CloudWorkspaceId;
                'snapshotId': string;
            }

            interface CloudWorkspaceId {
                'repoId': RepoId;
                'name': string;
            }

            interface GerritSourceContext {
                'hostUri': string;
                'gerritProject': string;
                'revisionId': string;
                'aliasName': string;
                'aliasContext': AliasContext;
            }

            interface GitSourceContext {
                'url': string;
                'revisionId': string;
            }

            interface ExtendedSourceContext {
                'context': SourceContext;
                'labels': {
                    [name: string]: string
                };
            }

            interface RegisterDebuggeeResponse {
                'debuggee': Debuggee;
            }

            interface ListActiveBreakpointsResponse {
                'breakpoints': Breakpoint[];
                'nextWaitToken': string;
                'waitExpired': boolean;
            }

            interface Breakpoint {
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

            interface SourceLocation {
                'path': string;
                'line': number;
            }

            interface StackFrame {
                'function': string;
                'location': SourceLocation;
                'arguments': Variable[];
                'locals': Variable[];
            }

            interface Variable {
                'name': string;
                'value': string;
                'type': string;
                'members': Variable[];
                'varTableIndex': number;
                'status': StatusMessage;
            }

            interface UpdateActiveBreakpointRequest {
                'breakpoint': Breakpoint;
            }

            interface UpdateActiveBreakpointResponse {}

            interface SetBreakpointResponse {
                'breakpoint': Breakpoint;
            }

            interface GetBreakpointResponse {
                'breakpoint': Breakpoint;
            }

            interface Empty {}

            interface ListBreakpointsResponse {
                'breakpoints': Breakpoint[];
                'nextWaitToken': string;
            }

            interface ListDebuggeesResponse {
                'debuggees': Debuggee[];
            }

        }
    }
}