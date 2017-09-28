// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        logging(version: string): any;
        logging(version: 'v2'): logging.v2.Logging;
    }

    namespace logging {
        namespace v2 {
            export interface Logging {
                new(options: any): Logging;

                'monitoredResourceDescriptors': {
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListMonitoredResourceDescriptorsResponse, response: any) => void) => Request;
                };
                'organizations': {
                    'sinks': {
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListSinksResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string, 'uniqueWriterIdentity'?: boolean}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'logs': {
                        'delete': (parameters: { [key: string]: any; 'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListLogsResponse, response: any) => void) => Request;
                    };
                    'exclusions': {
                        'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListExclusionsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };
                'entries': {
                    'list': (parameters: { [key: string]: any; }, callback: (error: any, body: ListLogEntriesResponse, response: any) => void) => Request;
                    'write': (parameters: { [key: string]: any; }, callback: (error: any, body: WriteLogEntriesResponse, response: any) => void) => Request;
                };
                'projects': {
                    'metrics': {
                        'delete': (parameters: { [key: string]: any; 'metricName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'metricName': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListLogMetricsResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'metricName': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                    };
                    'sinks': {
                        'get': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListSinksResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string, 'uniqueWriterIdentity'?: boolean}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                    };
                    'logs': {
                        'delete': (parameters: { [key: string]: any; 'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListLogsResponse, response: any) => void) => Request;
                    };
                    'exclusions': {
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListExclusionsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                    };
                };
                'billingAccounts': {
                    'sinks': {
                        'get': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListSinksResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string, 'uniqueWriterIdentity'?: boolean}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                    };
                    'logs': {
                        'delete': (parameters: { [key: string]: any; 'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListLogsResponse, response: any) => void) => Request;
                    };
                    'exclusions': {
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListExclusionsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                    };
                };
                'folders': {
                    'sinks': {
                        'get': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListSinksResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string, 'uniqueWriterIdentity'?: boolean}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                    };
                    'logs': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListLogsResponse, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'exclusions': {
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListExclusionsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: LogExclusion, response: any) => void) => Request;
                    };
                };

            }

            export interface RequestLog {
                'instanceIndex': number;
                'finished': boolean;
                'host': string;
                'httpVersion': string;
                'startTime': string;
                'latency': string;
                'ip': string;
                'appId': string;
                'appEngineRelease': string;
                'method': string;
                'cost': number;
                'instanceId': string;
                'megaCycles': string;
                'first': boolean;
                'versionId': string;
                'moduleId': string;
                'endTime': string;
                'userAgent': string;
                'wasLoadingRequest': boolean;
                'sourceReference': SourceReference[];
                'responseSize': string;
                'traceId': string;
                'line': LogLine[];
                'taskQueueName': string;
                'referrer': string;
                'requestId': string;
                'nickname': string;
                'status': number;
                'pendingTime': string;
                'resource': string;
                'taskName': string;
                'urlMapEntry': string;
            }

            export interface LogExclusion {
                'disabled': boolean;
                'filter': string;
                'name': string;
                'description': string;
            }

            export interface ListMonitoredResourceDescriptorsResponse {
                'nextPageToken': string;
                'resourceDescriptors': MonitoredResourceDescriptor[];
            }

            export interface ListExclusionsResponse {
                'nextPageToken': string;
                'exclusions': LogExclusion[];
            }

            export interface LogEntryOperation {
                'first': boolean;
                'producer': string;
                'last': boolean;
                'id': string;
            }

            export interface LogMetric {
                'name': string;
                'labelExtractors': {
                    [name: string]: string
                ;
                };
                'metricDescriptor': MetricDescriptor;
                'version': string;
                'filter': string;
                'description': string;
                'valueExtractor': string;
                'bucketOptions': BucketOptions;
            }

            export interface MonitoredResource {
                'type': string;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface LogSink {
                'name': string;
                'includeChildren': boolean;
                'filter': string;
                'destination': string;
                'endTime': string;
                'writerIdentity': string;
                'startTime': string;
                'outputVersionFormat': string;
            }

            export interface ListLogsResponse {
                'logNames': string[];
                'nextPageToken': string;
            }

            export interface HttpRequest {
                'status': number;
                'referer': string;
                'userAgent': string;
                'latency': string;
                'cacheFillBytes': string;
                'requestMethod': string;
                'requestSize': string;
                'responseSize': string;
                'protocol': string;
                'requestUrl': string;
                'remoteIp': string;
                'serverIp': string;
                'cacheLookup': boolean;
                'cacheHit': boolean;
                'cacheValidatedWithOriginServer': boolean;
            }

            export interface ListSinksResponse {
                'sinks': LogSink[];
                'nextPageToken': string;
            }

            export interface MonitoredResourceDescriptor {
                'type': string;
                'labels': LabelDescriptor[];
                'name': string;
                'description': string;
                'displayName': string;
            }

            export interface LogEntrySourceLocation {
                'file': string;
                'function': string;
                'line': string;
            }

            export interface ListLogEntriesResponse {
                'entries': LogEntry[];
                'nextPageToken': string;
            }

            export interface LogLine {
                'logMessage': string;
                'severity': string;
                'sourceLocation': SourceLocation;
                'time': string;
            }

            export interface Linear {
                'width': number;
                'offset': number;
                'numFiniteBuckets': number;
            }

            export interface Empty {}

            export interface SourceLocation {
                'file': string;
                'functionName': string;
                'line': string;
            }

            export interface ListLogEntriesRequest {
                'resourceNames': string[];
                'projectIds': string[];
                'filter': string;
                'pageToken': string;
                'pageSize': number;
                'orderBy': string;
            }

            export interface Explicit {
                'bounds': number[];
            }

            export interface SourceReference {
                'revisionId': string;
                'repository': string;
            }

            export interface WriteLogEntriesResponse {}

            export interface Exponential {
                'growthFactor': number;
                'scale': number;
                'numFiniteBuckets': number;
            }

            export interface WriteLogEntriesRequest {
                'entries': LogEntry[];
                'logName': string;
                'partialSuccess': boolean;
                'labels': {
                    [name: string]: string
                ;
                };
                'resource': MonitoredResource;
            }

            export interface LabelDescriptor {
                'key': string;
                'description': string;
                'valueType': string;
            }

            export interface BucketOptions {
                'exponentialBuckets': Exponential;
                'explicitBuckets': Explicit;
                'linearBuckets': Linear;
            }

            export interface ListLogMetricsResponse {
                'metrics': LogMetric[];
                'nextPageToken': string;
            }

            export interface MetricDescriptor {
                'type': string;
                'valueType': string;
                'metricKind': string;
                'displayName': string;
                'description': string;
                'unit': string;
                'labels': LabelDescriptor[];
                'name': string;
            }

            export interface LogEntry {
                'trace': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'severity': string;
                'sourceLocation': LogEntrySourceLocation;
                'timestamp': string;
                'receiveTimestamp': string;
                'logName': string;
                'resource': MonitoredResource;
                'httpRequest': HttpRequest;
                'jsonPayload': {
                    [name: string]: any
                ;
                };
                'operation': LogEntryOperation;
                'insertId': string;
                'textPayload': string;
                'protoPayload': {
                    [name: string]: any
                ;
                };
            }

        }
    }
}
