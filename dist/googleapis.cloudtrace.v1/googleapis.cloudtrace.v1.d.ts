// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        cloudtrace(version: string): any;
        cloudtrace(version: 'v1'): cloudtrace.v1.Cloudtrace;
    }

    namespace cloudtrace {
        namespace v1 {
            export interface Cloudtrace {
                new(options: any): Cloudtrace;

                'projects': {
                    'patchTraces': (parameters: {'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                
                    'traces': {
                        'list': (parameters: {'projectId': string, 'view'?: string, 'pageSize'?: number, 'pageToken'?: string, 'startTime'?: string, 'endTime'?: string, 'filter'?: string, 'orderBy'?: string}, callback: (error: any, body: ListTracesResponse, response: any) => void) => Request;
                        'get': (parameters: {'projectId': string, 'traceId': string}, callback: (error: any, body: Trace, response: any) => void) => Request;
                    };
                };

            }

            export interface ListTracesResponse {
                'traces': Trace[];
                'nextPageToken': string;
            }

            export interface Trace {
                'projectId': string;
                'traceId': string;
                'spans': TraceSpan[];
            }

            export interface TraceSpan {
                'spanId': string;
                'kind': string;
                'name': string;
                'startTime': string;
                'endTime': string;
                'parentSpanId': string;
                'labels': {
                    [name: string]: string
                
                };
            }

            export interface Traces {
                'traces': Trace[];
            }

            export interface Empty {}

        }
    }
}