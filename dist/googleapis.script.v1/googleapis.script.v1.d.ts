// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        script(version: string): any;
        script(version: 'v1'): script.v1.Script;
    }

    namespace script {
        namespace v1 {
            export interface Script {
                new(options: any): Script;

                'scripts': {
                    'run': (parameters: {'scriptId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };

            }

            export interface ExecutionRequest {
                'function': string;
                'parameters': any[];
                'sessionState': string;
                'devMode': boolean;
            }

            export interface Operation {
                'name': string;
                'metadata': {
                    [name: string]: any
                
                };
                'done': boolean;
                'error': Status;
                'response': {
                    [name: string]: any
                
                };
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                
                }[];
            }

            export interface ExecutionError {
                'scriptStackTraceElements': ScriptStackTraceElement[];
                'errorMessage': string;
                'errorType': string;
            }

            export interface ScriptStackTraceElement {
                'function': string;
                'lineNumber': number;
            }

            export interface ExecutionResponse {
                'result': any;
            }

        }
    }
}