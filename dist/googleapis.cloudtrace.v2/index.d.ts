// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudtrace(version: string): any;
        cloudtrace(version: 'v2'): cloudtrace.v2.Cloudtrace;
    }

    namespace cloudtrace {
        namespace v2 {
            export interface Cloudtrace {
                new(options: any): Cloudtrace;

                'projects': {
                    'traces': {
                        'batchWrite': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;

                        'spans': {
                            'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Span, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface NetworkEvent {
                'uncompressedMessageSize': string;
                'type': string;
                'messageId': string;
                'compressedMessageSize': string;
                'time': string;
            }

            export interface StackFrame {
                'functionName': TruncatableString;
                'lineNumber': string;
                'loadModule': Module;
                'columnNumber': string;
                'fileName': TruncatableString;
                'sourceVersion': TruncatableString;
                'originalFunctionName': TruncatableString;
            }

            export interface Link {
                'type': string;
                'attributes': Attributes;
                'traceId': string;
                'spanId': string;
            }

            export interface Annotation {
                'attributes': Attributes;
                'description': TruncatableString;
            }

            export interface StackFrames {
                'droppedFramesCount': number;
                'frame': StackFrame[];
            }

            export interface TimeEvents {
                'droppedNetworkEventsCount': number;
                'droppedAnnotationsCount': number;
                'timeEvent': TimeEvent[];
            }

            export interface Module {
                'module': TruncatableString;
                'buildId': TruncatableString;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface BatchWriteSpansRequest {
                'spans': Span[];
            }

            export interface Empty {}

            export interface Span {
                'childSpanCount': number;
                'sameProcessAsParentSpan': boolean;
                'status': Status;
                'name': string;
                'stackTrace': StackTrace;
                'parentSpanId': string;
                'endTime': string;
                'startTime': string;
                'displayName': TruncatableString;
                'timeEvents': TimeEvents;
                'links': Links;
                'attributes': Attributes;
                'spanId': string;
            }

            export interface AttributeValue {
                'intValue': string;
                'boolValue': boolean;
                'stringValue': TruncatableString;
            }

            export interface Attributes {
                'droppedAttributesCount': number;
                'attributeMap': {
                    [name: string]: AttributeValue
                ;
                };
            }

            export interface Links {
                'link': Link[];
                'droppedLinksCount': number;
            }

            export interface TruncatableString {
                'truncatedByteCount': number;
                'value': string;
            }

            export interface StackTrace {
                'stackFrames': StackFrames;
                'stackTraceHashId': string;
            }

            export interface TimeEvent {
                'networkEvent': NetworkEvent;
                'annotation': Annotation;
                'time': string;
            }

        }
    }
}
