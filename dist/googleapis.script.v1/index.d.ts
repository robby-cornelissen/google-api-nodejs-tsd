// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        script(version: string): any;
        script(version: 'v1'): script.v1.Script;
    }

    namespace script {
        namespace v1 {
            export interface Script {
                new(options: any): Script;

                'scripts': {
                    'run': (parameters: { [key: string]: any; 'scriptId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };

            }

            export interface ExecutionResponse {
                'result': any;
            }

            export interface Operation {
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

            export interface ScriptStackTraceElement {
                'lineNumber': number;
                'function': string;
            }

            export interface ExecutionError {
                'errorType': string;
                'errorMessage': string;
                'scriptStackTraceElements': ScriptStackTraceElement[];
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface ExecutionRequest {
                'function': string;
                'devMode': boolean;
                'parameters': any[];
                'sessionState': string;
            }

        }
    }
}
