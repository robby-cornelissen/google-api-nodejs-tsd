// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        clouderrorreporting(version: string): any;
        clouderrorreporting(version: 'v1beta1'): clouderrorreporting.v1beta1.Clouderrorreporting;
    }

    namespace clouderrorreporting {
        namespace v1beta1 {
            export interface Clouderrorreporting {
                new(options: any): Clouderrorreporting;

                'projects': {
                    'deleteEvents': (parameters: { [key: string]: any; 'projectName': string}, callback: (error: any, body: DeleteEventsResponse, response: any) => void) => Request;

                    'groupStats': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'timeRange.period'?: string, 'alignment'?: string, 'groupId'?: string, 'serviceFilter.service'?: string, 'pageSize'?: number, 'serviceFilter.version'?: string, 'order'?: string, 'alignmentTime'?: string, 'serviceFilter.resourceType'?: string, 'projectName': string, 'timedCountDuration'?: string}, callback: (error: any, body: ListGroupStatsResponse, response: any) => void) => Request;
                    };
                    'groups': {
                        'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: ErrorGroup, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'groupName': string}, callback: (error: any, body: ErrorGroup, response: any) => void) => Request;
                    };
                    'events': {
                        'list': (parameters: { [key: string]: any; 'serviceFilter.service'?: string, 'pageToken'?: string, 'pageSize'?: number, 'serviceFilter.version'?: string, 'serviceFilter.resourceType'?: string, 'timeRange.period'?: string, 'projectName': string, 'groupId'?: string}, callback: (error: any, body: ListEventsResponse, response: any) => void) => Request;
                        'report': (parameters: { [key: string]: any; 'projectName': string}, callback: (error: any, body: ReportErrorEventResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface ErrorEvent {
                'serviceContext': ServiceContext;
                'eventTime': string;
                'context': ErrorContext;
                'message': string;
            }

            export interface ReportedErrorEvent {
                'context': ErrorContext;
                'message': string;
                'serviceContext': ServiceContext;
                'eventTime': string;
            }

            export interface ErrorContext {
                'httpRequest': HttpRequestContext;
                'user': string;
                'sourceReferences': SourceReference[];
                'reportLocation': SourceLocation;
            }

            export interface TrackingIssue {
                'url': string;
            }

            export interface ErrorGroupStats {
                'count': string;
                'affectedUsersCount': string;
                'lastSeenTime': string;
                'numAffectedServices': number;
                'affectedServices': ServiceContext[];
                'representative': ErrorEvent;
                'timedCounts': TimedCount[];
                'group': ErrorGroup;
                'firstSeenTime': string;
            }

            export interface ListEventsResponse {
                'nextPageToken': string;
                'timeRangeBegin': string;
                'errorEvents': ErrorEvent[];
            }

            export interface TimedCount {
                'endTime': string;
                'startTime': string;
                'count': string;
            }

            export interface ErrorGroup {
                'name': string;
                'trackingIssues': TrackingIssue[];
                'groupId': string;
            }

            export interface ServiceContext {
                'resourceType': string;
                'version': string;
                'service': string;
            }

            export interface SourceLocation {
                'functionName': string;
                'filePath': string;
                'lineNumber': number;
            }

            export interface ReportErrorEventResponse {}

            export interface HttpRequestContext {
                'url': string;
                'responseStatusCode': number;
                'method': string;
                'remoteIp': string;
                'referrer': string;
                'userAgent': string;
            }

            export interface ListGroupStatsResponse {
                'timeRangeBegin': string;
                'errorGroupStats': ErrorGroupStats[];
                'nextPageToken': string;
            }

            export interface DeleteEventsResponse {}

            export interface SourceReference {
                'revisionId': string;
                'repository': string;
            }

        }
    }
}
