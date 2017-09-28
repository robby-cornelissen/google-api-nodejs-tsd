// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudtrace(version: string): any;
        cloudtrace(version: 'v1'): cloudtrace.v1.Cloudtrace;
    }

    namespace cloudtrace {
        namespace v1 {
            export interface Cloudtrace {
                new(options: any): Cloudtrace;

                'projects': {
                    'patchTraces': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;

                    'traces': {
                        'get': (parameters: { [key: string]: any; 'projectId': string, 'traceId': string}, callback: (error: any, body: Trace, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'orderBy'?: string, 'projectId': string, 'filter'?: string, 'endTime'?: string, 'startTime'?: string, 'pageToken'?: string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListTracesResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface TraceSpan {
                'labels': {
                    [name: string]: string
                ;
                };
                'name': string;
                'spanId': string;
                'parentSpanId': string;
                'endTime': string;
                'startTime': string;
                'kind': string;
            }

            export interface Empty {}

            export interface ListTracesResponse {
                'nextPageToken': string;
                'traces': Trace[];
            }

            export interface Trace {
                'spans': TraceSpan[];
                'projectId': string;
                'traceId': string;
            }

            export interface Traces {
                'traces': Trace[];
            }

        }
    }
}
