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

            interface ExecutionRequest {
                'function': string;
                'parameters': any[];
                'sessionState': string;
                'devMode': boolean;
            }

            interface Operation {
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

            interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                }[];
            }

            interface ExecutionError {
                'scriptStackTraceElements': ScriptStackTraceElement[];
                'errorMessage': string;
                'errorType': string;
            }

            interface ScriptStackTraceElement {
                'function': string;
                'lineNumber': number;
            }

            interface ExecutionResponse {
                'result': any;
            }

        }
    }
}