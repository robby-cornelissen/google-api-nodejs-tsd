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

            interface ListTracesResponse {
                'traces': Trace[];
                'nextPageToken': string;
            }

            interface Trace {
                'projectId': string;
                'traceId': string;
                'spans': TraceSpan[];
            }

            interface TraceSpan {
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

            interface Traces {
                'traces': Trace[];
            }

            interface Empty {}

        }
    }
}