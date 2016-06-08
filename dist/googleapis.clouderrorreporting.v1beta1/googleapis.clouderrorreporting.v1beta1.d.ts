// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        clouderrorreporting(version: string): any;
        clouderrorreporting(version: 'v1beta1'): clouderrorreporting.v1beta1.Clouderrorreporting;
    }

    namespace clouderrorreporting {
        namespace v1beta1 {
            export interface Clouderrorreporting {
                new(options: any): Clouderrorreporting;

                'projects': {
                    'deleteEvents': (parameters: {'projectName': string}, callback: (error: any, body: DeleteEventsResponse, response: any) => void) => Request;
                
                    'events': {
                        'list': (parameters: {'timeRange.period'?: string, 'projectName': string, 'serviceFilter.service'?: string, 'groupId'?: string, 'serviceFilter.version'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListEventsResponse, response: any) => void) => Request;
                    };
                    'groups': {
                        'update': (parameters: {'name': string}, callback: (error: any, body: ErrorGroup, response: any) => void) => Request;
                        'get': (parameters: {'groupName': string}, callback: (error: any, body: ErrorGroup, response: any) => void) => Request;
                    };
                    'groupStats': {
                        'list': (parameters: {'alignment'?: string, 'timeRange.period'?: string, 'projectName': string, 'order'?: string, 'groupId'?: string, 'serviceFilter.service'?: string, 'alignmentTime'?: string, 'serviceFilter.version'?: string, 'pageSize'?: number, 'timedCountDuration'?: string, 'pageToken'?: string}, callback: (error: any, body: ListGroupStatsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface SourceLocation {
                'filePath': string;
                'functionName': string;
                'lineNumber': number;
            }

            export interface ErrorGroupStats {
                'representative': ErrorEvent;
                'numAffectedServices': number;
                'affectedUsersCount': string;
                'count': string;
                'firstSeenTime': string;
                'lastSeenTime': string;
                'group': ErrorGroup;
                'affectedServices': ServiceContext[];
                'timedCounts': TimedCount[];
            }

            export interface ErrorContext {
                'httpRequest': HttpRequestContext;
                'reportLocation': SourceLocation;
                'user': string;
            }

            export interface ServiceContext {
                'service': string;
                'version': string;
            }

            export interface ErrorGroup {
                'groupId': string;
                'name': string;
                'trackingIssues': TrackingIssue[];
            }

            export interface TrackingIssue {
                'url': string;
            }

            export interface DeleteEventsResponse {}

            export interface ErrorEvent {
                'serviceContext': ServiceContext;
                'context': ErrorContext;
                'eventTime': string;
                'message': string;
            }

            export interface ListEventsResponse {
                'nextPageToken': string;
                'errorEvents': ErrorEvent[];
            }

            export interface TimedCount {
                'startTime': string;
                'endTime': string;
                'count': string;
            }

            export interface HttpRequestContext {
                'method': string;
                'responseStatusCode': number;
                'remoteIp': string;
                'url': string;
                'referrer': string;
                'userAgent': string;
            }

            export interface ListGroupStatsResponse {
                'nextPageToken': string;
                'errorGroupStats': ErrorGroupStats[];
            }

        }
    }
}