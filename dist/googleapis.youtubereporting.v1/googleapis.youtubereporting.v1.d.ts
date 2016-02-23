// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        youtubereporting(version: string): any;
        youtubereporting(version: 'v1'): youtubereporting.v1.Youtubereporting;
    }

    namespace youtubereporting {
        namespace v1 {
            export interface Youtubereporting {
                new(options: any): Youtubereporting;

                'media': {
                    'download': (parameters: {'resourceName': string}, callback: (error: any, body: Media, response: any) => void) => Request;
                };
                'reportTypes': {
                    'list': (parameters: {'onBehalfOfContentOwner'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListReportTypesResponse, response: any) => void) => Request;
                };
                'jobs': {
                    'create': (parameters: {'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'list': (parameters: {'onBehalfOfContentOwner'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                    'get': (parameters: {'jobId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'delete': (parameters: {'jobId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                
                    'reports': {
                        'list': (parameters: {'jobId': string, 'onBehalfOfContentOwner'?: string, 'pageSize'?: number, 'pageToken'?: string, 'createdAfter'?: string}, callback: (error: any, body: ListReportsResponse, response: any) => void) => Request;
                        'get': (parameters: {'jobId': string, 'reportId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    };
                };

            }

            export interface Media {
                'resourceName': string;
            }

            export interface ListReportTypesResponse {
                'reportTypes': ReportType[];
                'nextPageToken': string;
            }

            export interface ReportType {
                'id': string;
                'name': string;
            }

            export interface Job {
                'id': string;
                'reportTypeId': string;
                'name': string;
                'createTime': string;
            }

            export interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            export interface Empty {}

            export interface ListReportsResponse {
                'reports': Report[];
                'nextPageToken': string;
            }

            export interface Report {
                'id': string;
                'jobId': string;
                'startTime': string;
                'endTime': string;
                'createTime': string;
                'downloadUrl': string;
            }

        }
    }
}