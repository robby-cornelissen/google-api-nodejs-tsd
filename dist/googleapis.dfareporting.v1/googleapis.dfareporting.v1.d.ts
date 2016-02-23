// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dfareporting(version: string): any;
        dfareporting(version: 'v1'): dfareporting.v1.Dfareporting;
    }

    namespace dfareporting {
        namespace v1 {
            export interface Dfareporting {
                new(options: any): Dfareporting;

                'dimensionValues': {
                    'query': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string}, callback: (error: any, body: DimensionValueList, response: any) => void) => Request;
                };
                'files': {
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                };
                'reports': {
                    'delete': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: ReportList, response: any) => void) => Request;
                    'patch': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'run': (parameters: {'profileId': string, 'reportId': string, 'synchronous'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                
                    'files': {
                        'get': (parameters: {'fileId': string, 'profileId': string, 'reportId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                        'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'reportId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                    };
                };
                'userProfiles': {
                    'get': (parameters: {'profileId': string}, callback: (error: any, body: UserProfile, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: UserProfileList, response: any) => void) => Request;
                };

            }

            export interface DimensionFilter {
                'dimensionName': string;
                'kind': string;
                'value': string;
            }

            export interface DimensionValue {
                'dimensionName': string;
                'etag': string;
                'id': string;
                'kind': string;
                'value': string;
            }

            export interface DimensionValueList {
                'etag': string;
                'items': DimensionValue[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface DimensionValueRequest {
                'dimensionName': string;
                'endDate': string;
                'filters': DimensionFilter[];
                'kind': string;
                'startDate': string;
            }

            export interface File {
                'dateRange': {
                    'endDate': string;
                    'startDate': string;
                };
                'etag': string;
                'fileName': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'reportId': string;
                'status': string;
                'urls': {
                    'csv': {
                        'apiUrl': string;
                        'browserUrl': string;
                    };
                };
            }

            export interface FileList {
                'etag': string;
                'items': File[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Report {
                'accountId': string;
                'criteria': {
                    'activities': {
                        'filters': DimensionValue[];
                        'metricNames': string[];
                    };
                    'customRichMediaEvents': {
                        'filteredEventIds': DimensionValue[];
                    };
                    'dateRange': {
                        'endDate': string;
                        'relativeDateRange': string;
                        'startDate': string;
                    };
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'metricNames': string[];
                };
                'etag': string;
                'fileName': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'name': string;
                'ownerProfileId': string;
                'schedule': {
                    'active': boolean;
                    'every': number;
                    'expirationDate': string;
                    'repeats': string;
                    'repeatsOnWeekDays': string[];
                    'runsOnDayOfMonth': string;
                    'startDate': string;
                };
                'subAccountId': string;
                'type': string;
            }

            export interface ReportList {
                'etag': string;
                'items': Report[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface SortedDimension {
                'kind': string;
                'name': string;
                'sortOrder': string;
            }

            export interface UserProfile {
                'accountId': string;
                'accountName': string;
                'etag': string;
                'kind': string;
                'profileId': string;
                'subAccountId': string;
                'subAccountName': string;
                'userName': string;
            }

            export interface UserProfileList {
                'etag': string;
                'items': UserProfile[];
                'kind': string;
            }

        }
    }
}