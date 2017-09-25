// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        logging(version: string): any;
        logging(version: 'v2beta1'): logging.v2beta1.Logging;
    }

    namespace logging {
        namespace v2beta1 {
            export interface Logging {
                new(options: any): Logging;

                'projects': {
                    'sinks': {
                        'delete': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListSinksResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'updateMask'?: string, 'uniqueWriterIdentity'?: boolean, 'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string, 'uniqueWriterIdentity'?: boolean}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                    };
                    'logs': {
                        'delete': (parameters: { [key: string]: any; 'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListLogsResponse, response: any) => void) => Request;
                    };
                    'metrics': {
                        'delete': (parameters: { [key: string]: any; 'metricName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'metricName': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListLogMetricsResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'metricName': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                    };
                };
                'billingAccounts': {
                    'logs': {
                        'delete': (parameters: { [key: string]: any; 'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListLogsResponse, response: any) => void) => Request;
                    };
                };
                'monitoredResourceDescriptors': {
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListMonitoredResourceDescriptorsResponse, response: any) => void) => Request;
                };
                'organizations': {
                    'logs': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListLogsResponse, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };
                'entries': {
                    'list': (parameters: { [key: string]: any; }, callback: (error: any, body: ListLogEntriesResponse, response: any) => void) => Request;
                    'write': (parameters: { [key: string]: any; }, callback: (error: any, body: WriteLogEntriesResponse, response: any) => void) => Request;
                };

            }

            export interface Linear {
                'numFiniteBuckets': number;
                'width': number;
                'offset': number;
            }

            export interface Empty {}

            export interface SourceLocation {
                'file': string;
                'functionName': string;
                'line': string;
            }

            export interface ListLogEntriesRequest {
                'orderBy': string;
                'resourceNames': string[];
                'projectIds': string[];
                'filter': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface Explicit {
                'bounds': number[];
            }

            export interface SourceReference {
                'repository': string;
                'revisionId': string;
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
                'name': string;
                'type': string;
                'valueType': string;
                'metricKind': string;
                'displayName': string;
                'description': string;
                'unit': string;
                'labels': LabelDescriptor[];
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

            export interface RequestLog {
                'userAgent': string;
                'wasLoadingRequest': boolean;
                'sourceReference': SourceReference[];
                'responseSize': string;
                'traceId': string;
                'line': LogLine[];
                'referrer': string;
                'taskQueueName': string;
                'requestId': string;
                'nickname': string;
                'pendingTime': string;
                'resource': string;
                'status': number;
                'taskName': string;
                'urlMapEntry': string;
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
            }

            export interface ListMonitoredResourceDescriptorsResponse {
                'nextPageToken': string;
                'resourceDescriptors': MonitoredResourceDescriptor[];
            }

            export interface LogMetric {
                'description': string;
                'bucketOptions': BucketOptions;
                'valueExtractor': string;
                'name': string;
                'labelExtractors': {
                    [name: string]: string
                ;
                };
                'version': string;
                'metricDescriptor': MetricDescriptor;
                'filter': string;
            }

            export interface LogEntryOperation {
                'last': boolean;
                'id': string;
                'first': boolean;
                'producer': string;
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
                'destination': string;
                'filter': string;
                'endTime': string;
                'startTime': string;
                'writerIdentity': string;
                'outputVersionFormat': string;
            }

            export interface ListLogsResponse {
                'nextPageToken': string;
                'logNames': string[];
            }

            export interface HttpRequest {
                'requestUrl': string;
                'serverIp': string;
                'remoteIp': string;
                'cacheLookup': boolean;
                'cacheHit': boolean;
                'cacheValidatedWithOriginServer': boolean;
                'status': number;
                'referer': string;
                'latency': string;
                'userAgent': string;
                'cacheFillBytes': string;
                'requestMethod': string;
                'requestSize': string;
                'protocol': string;
                'responseSize': string;
            }

            export interface ListSinksResponse {
                'sinks': LogSink[];
                'nextPageToken': string;
            }

            export interface MonitoredResourceDescriptor {
                'name': string;
                'description': string;
                'displayName': string;
                'type': string;
                'labels': LabelDescriptor[];
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

        }
    }
}
