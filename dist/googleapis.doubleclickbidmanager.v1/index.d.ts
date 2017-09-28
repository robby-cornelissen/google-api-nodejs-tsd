// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        doubleclickbidmanager(version: string): any;
        doubleclickbidmanager(version: 'v1'): doubleclickbidmanager.v1.Doubleclickbidmanager;
    }

    namespace doubleclickbidmanager {
        namespace v1 {
            export interface Doubleclickbidmanager {
                new(options: any): Doubleclickbidmanager;

                'lineitems': {
                    'downloadlineitems': (parameters: any, callback: (error: any, body: DownloadLineItemsResponse, response: any) => void) => Request;
                    'uploadlineitems': (parameters: any, callback: (error: any, body: UploadLineItemsResponse, response: any) => void) => Request;
                };
                'queries': {
                    'createquery': (parameters: any, callback: (error: any, body: Query, response: any) => void) => Request;
                    'deletequery': (parameters: { [key: string]: any; 'queryId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'getquery': (parameters: { [key: string]: any; 'queryId': string}, callback: (error: any, body: Query, response: any) => void) => Request;
                    'listqueries': (parameters: any, callback: (error: any, body: ListQueriesResponse, response: any) => void) => Request;
                    'runquery': (parameters: { [key: string]: any; 'queryId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'reports': {
                    'listreports': (parameters: { [key: string]: any; 'queryId': string}, callback: (error: any, body: ListReportsResponse, response: any) => void) => Request;
                };
                'sdf': {
                    'download': (parameters: any, callback: (error: any, body: DownloadResponse, response: any) => void) => Request;
                };

            }

            export interface DownloadLineItemsRequest {
                'fileSpec': string;
                'filterIds': string[];
                'filterType': string;
                'format': string;
            }

            export interface DownloadLineItemsResponse {
                'lineItems': string;
            }

            export interface DownloadRequest {
                'fileTypes': string[];
                'filterIds': string[];
                'filterType': string;
                'version': string;
            }

            export interface DownloadResponse {
                'adGroups': string;
                'ads': string;
                'insertionOrders': string;
                'lineItems': string;
            }

            export interface FilterPair {
                'type': string;
                'value': string;
            }

            export interface ListQueriesResponse {
                'kind': string;
                'queries': Query[];
            }

            export interface ListReportsResponse {
                'kind': string;
                'reports': Report[];
            }

            export interface Parameters {
                'filters': FilterPair[];
                'groupBys': string[];
                'includeInviteData': boolean;
                'metrics': string[];
                'type': string;
            }

            export interface Query {
                'kind': string;
                'metadata': QueryMetadata;
                'params': Parameters;
                'queryId': string;
                'reportDataEndTimeMs': string;
                'reportDataStartTimeMs': string;
                'schedule': QuerySchedule;
                'timezoneCode': string;
            }

            export interface QueryMetadata {
                'dataRange': string;
                'format': string;
                'googleCloudStoragePathForLatestReport': string;
                'googleDrivePathForLatestReport': string;
                'latestReportRunTimeMs': string;
                'locale': string;
                'reportCount': number;
                'running': boolean;
                'sendNotification': boolean;
                'shareEmailAddress': string[];
                'title': string;
            }

            export interface QuerySchedule {
                'endTimeMs': string;
                'frequency': string;
                'nextRunMinuteOfDay': number;
                'nextRunTimezoneCode': string;
            }

            export interface Report {
                'key': ReportKey;
                'metadata': ReportMetadata;
                'params': Parameters;
            }

            export interface ReportFailure {
                'errorCode': string;
            }

            export interface ReportKey {
                'queryId': string;
                'reportId': string;
            }

            export interface ReportMetadata {
                'googleCloudStoragePath': string;
                'reportDataEndTimeMs': string;
                'reportDataStartTimeMs': string;
                'status': ReportStatus;
            }

            export interface ReportStatus {
                'failure': ReportFailure;
                'finishTimeMs': string;
                'format': string;
                'state': string;
            }

            export interface RowStatus {
                'changed': boolean;
                'entityId': string;
                'entityName': string;
                'errors': string[];
                'persisted': boolean;
                'rowNumber': number;
            }

            export interface RunQueryRequest {
                'dataRange': string;
                'reportDataEndTimeMs': string;
                'reportDataStartTimeMs': string;
                'timezoneCode': string;
            }

            export interface UploadLineItemsRequest {
                'dryRun': boolean;
                'format': string;
                'lineItems': string;
            }

            export interface UploadLineItemsResponse {
                'uploadStatus': UploadStatus;
            }

            export interface UploadStatus {
                'errors': string[];
                'rowStatus': RowStatus[];
            }

        }
    }
}
