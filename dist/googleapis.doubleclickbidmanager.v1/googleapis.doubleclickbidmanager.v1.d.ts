/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
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
                    'deletequery': (parameters: {'queryId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'getquery': (parameters: {'queryId': string}, callback: (error: any, body: Query, response: any) => void) => Request;
                    'listqueries': (parameters: any, callback: (error: any, body: ListQueriesResponse, response: any) => void) => Request;
                    'runquery': (parameters: {'queryId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'reports': {
                    'listreports': (parameters: {'queryId': string}, callback: (error: any, body: ListReportsResponse, response: any) => void) => Request;
                };
                'rubicon': {
                    'notifyproposalchange': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };

            }

            interface DownloadLineItemsRequest {
                'fileSpec': string;
                'filterIds': string[];
                'filterType': string;
                'format': string;
            }

            interface DownloadLineItemsResponse {
                'lineItems': string;
            }

            interface FilterPair {
                'type': string;
                'value': string;
            }

            interface ListQueriesResponse {
                'kind': string;
                'queries': Query[];
            }

            interface ListReportsResponse {
                'kind': string;
                'reports': Report[];
            }

            interface Note {
                'id': string;
                'message': string;
                'source': string;
                'timestamp': string;
                'username': string;
            }

            interface NotifyProposalChangeRequest {
                'action': string;
                'href': string;
                'id': string;
                'notes': Note[];
                'token': string;
            }

            interface Parameters {
                'filters': FilterPair[];
                'groupBys': string[];
                'includeInviteData': boolean;
                'metrics': string[];
                'type': string;
            }

            interface Query {
                'kind': string;
                'metadata': QueryMetadata;
                'params': Parameters;
                'queryId': string;
                'reportDataEndTimeMs': string;
                'reportDataStartTimeMs': string;
                'schedule': QuerySchedule;
                'timezoneCode': string;
            }

            interface QueryMetadata {
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

            interface QuerySchedule {
                'endTimeMs': string;
                'frequency': string;
                'nextRunMinuteOfDay': number;
                'nextRunTimezoneCode': string;
            }

            interface Report {
                'key': ReportKey;
                'metadata': ReportMetadata;
                'params': Parameters;
            }

            interface ReportFailure {
                'errorCode': string;
            }

            interface ReportKey {
                'queryId': string;
                'reportId': string;
            }

            interface ReportMetadata {
                'googleCloudStoragePath': string;
                'reportDataEndTimeMs': string;
                'reportDataStartTimeMs': string;
                'status': ReportStatus;
            }

            interface ReportStatus {
                'failure': ReportFailure;
                'finishTimeMs': string;
                'format': string;
                'state': string;
            }

            interface RowStatus {
                'changed': boolean;
                'entityId': string;
                'entityName': string;
                'errors': string[];
                'persisted': boolean;
                'rowNumber': number;
            }

            interface RunQueryRequest {
                'dataRange': string;
                'reportDataEndTimeMs': string;
                'reportDataStartTimeMs': string;
                'timezoneCode': string;
            }

            interface UploadLineItemsRequest {
                'dryRun': boolean;
                'format': string;
                'lineItems': string;
            }

            interface UploadLineItemsResponse {
                'uploadStatus': UploadStatus;
            }

            interface UploadStatus {
                'errors': string[];
                'rowStatus': RowStatus[];
            }

        }
    }
}