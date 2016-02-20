/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        logging(version: string): any;
        logging(version: 'v2beta1'): logging.v2beta1.Logging;
    }

    namespace logging {
        namespace v2beta1 {
            export interface Logging {
                new(options: any): Logging;

                'projects': {
                    'logs': {
                        'delete': (parameters: {'logName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'sinks': {
                        'list': (parameters: {'projectName': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListSinksResponse, response: any) => void) => Request;
                        'get': (parameters: {'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'create': (parameters: {'projectName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'update': (parameters: {'sinkName': string}, callback: (error: any, body: LogSink, response: any) => void) => Request;
                        'delete': (parameters: {'sinkName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'metrics': {
                        'list': (parameters: {'projectName': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListLogMetricsResponse, response: any) => void) => Request;
                        'get': (parameters: {'metricName': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                        'create': (parameters: {'projectName': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                        'update': (parameters: {'metricName': string}, callback: (error: any, body: LogMetric, response: any) => void) => Request;
                        'delete': (parameters: {'metricName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };
                'entries': {
                    'write': (parameters: any, callback: (error: any, body: WriteLogEntriesResponse, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: ListLogEntriesResponse, response: any) => void) => Request;
                };
                'monitoredResourceDescriptors': {
                    'list': (parameters: {'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListMonitoredResourceDescriptorsResponse, response: any) => void) => Request;
                };

            }

            interface Empty {}

            interface WriteLogEntriesRequest {
                'logName': string;
                'resource': MonitoredResource;
                'labels': {
                    [name: string]: string
                };
                'entries': LogEntry[];
            }

            interface MonitoredResource {
                'type': string;
                'labels': {
                    [name: string]: string
                };
            }

            interface LogEntry {
                'logName': string;
                'resource': MonitoredResource;
                'protoPayload': {
                    [name: string]: any
                };
                'textPayload': string;
                'jsonPayload': {
                    [name: string]: any
                };
                'timestamp': string;
                'severity': string;
                'insertId': string;
                'httpRequest': HttpRequest;
                'labels': {
                    [name: string]: string
                };
                'operation': LogEntryOperation;
            }

            interface HttpRequest {
                'requestMethod': string;
                'requestUrl': string;
                'requestSize': string;
                'status': number;
                'responseSize': string;
                'userAgent': string;
                'remoteIp': string;
                'referer': string;
                'cacheHit': boolean;
                'validatedWithOriginServer': boolean;
            }

            interface LogEntryOperation {
                'id': string;
                'producer': string;
                'first': boolean;
                'last': boolean;
            }

            interface WriteLogEntriesResponse {}

            interface ListLogEntriesRequest {
                'projectIds': string[];
                'filter': string;
                'orderBy': string;
                'pageSize': number;
                'pageToken': string;
            }

            interface ListLogEntriesResponse {
                'entries': LogEntry[];
                'nextPageToken': string;
            }

            interface ListMonitoredResourceDescriptorsResponse {
                'resourceDescriptors': MonitoredResourceDescriptor[];
                'nextPageToken': string;
            }

            interface MonitoredResourceDescriptor {
                'type': string;
                'displayName': string;
                'description': string;
                'labels': LabelDescriptor[];
            }

            interface LabelDescriptor {
                'key': string;
                'valueType': string;
                'description': string;
            }

            interface ListSinksResponse {
                'sinks': LogSink[];
                'nextPageToken': string;
            }

            interface LogSink {
                'name': string;
                'destination': string;
                'filter': string;
                'outputVersionFormat': string;
            }

            interface ListLogMetricsResponse {
                'metrics': LogMetric[];
                'nextPageToken': string;
            }

            interface LogMetric {
                'name': string;
                'description': string;
                'filter': string;
            }

            interface RequestLog {
                'appId': string;
                'moduleId': string;
                'versionId': string;
                'requestId': string;
                'ip': string;
                'startTime': string;
                'endTime': string;
                'latency': string;
                'megaCycles': string;
                'method': string;
                'resource': string;
                'httpVersion': string;
                'status': number;
                'responseSize': string;
                'referrer': string;
                'userAgent': string;
                'nickname': string;
                'urlMapEntry': string;
                'host': string;
                'cost': number;
                'taskQueueName': string;
                'taskName': string;
                'wasLoadingRequest': boolean;
                'pendingTime': string;
                'instanceIndex': number;
                'finished': boolean;
                'instanceId': string;
                'line': LogLine[];
                'appEngineRelease': string;
                'traceId': string;
                'sourceReference': SourceReference[];
            }

            interface LogLine {
                'time': string;
                'severity': string;
                'logMessage': string;
                'sourceLocation': SourceLocation;
            }

            interface SourceLocation {
                'file': string;
                'line': string;
                'functionName': string;
            }

            interface SourceReference {
                'repository': string;
                'revisionId': string;
            }

        }
    }
}