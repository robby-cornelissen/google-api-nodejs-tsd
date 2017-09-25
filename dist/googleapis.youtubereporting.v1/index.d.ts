// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        youtubereporting(version: string): any;
        youtubereporting(version: 'v1'): youtubereporting.v1.Youtubereporting;
    }

    namespace youtubereporting {
        namespace v1 {
            export interface Youtubereporting {
                new(options: any): Youtubereporting;

                'jobs': {
                    'create': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'jobId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'jobId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'includeSystemManaged'?: boolean, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;

                    'reports': {
                        'get': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'reportId': string, 'jobId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'jobId': string, 'createdAfter'?: string, 'startTimeAtOrAfter'?: string, 'pageToken'?: string, 'pageSize'?: number, 'onBehalfOfContentOwner'?: string, 'startTimeBefore'?: string}, callback: (error: any, body: ListReportsResponse, response: any) => void) => Request;
                    };
                };
                'reportTypes': {
                    'list': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'includeSystemManaged'?: boolean, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListReportTypesResponse, response: any) => void) => Request;
                };
                'media': {
                    'download': (parameters: { [key: string]: any; 'resourceName': string}, callback: (error: any, body: Media, response: any) => void) => Request;
                };

            }

            export interface Report {
                'createTime': string;
                'jobId': string;
                'id': string;
                'jobExpireTime': string;
                'endTime': string;
                'downloadUrl': string;
                'startTime': string;
            }

            export interface Empty {}

            export interface ListReportTypesResponse {
                'reportTypes': ReportType[];
                'nextPageToken': string;
            }

            export interface ReportType {
                'systemManaged': boolean;
                'id': string;
                'deprecateTime': string;
                'name': string;
            }

            export interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            export interface Job {
                'createTime': string;
                'reportTypeId': string;
                'expireTime': string;
                'name': string;
                'id': string;
                'systemManaged': boolean;
            }

            export interface ListReportsResponse {
                'nextPageToken': string;
                'reports': Report[];
            }

            export interface Media {
                'resourceName': string;
            }

        }
    }
}
