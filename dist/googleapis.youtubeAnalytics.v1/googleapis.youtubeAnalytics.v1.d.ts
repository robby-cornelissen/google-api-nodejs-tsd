/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        youtubeAnalytics(version: string): any;
        youtubeAnalytics(version: 'v1'): youtubeAnalytics.v1.Youtubeanalytics;
    }

    namespace youtubeAnalytics {
        namespace v1 {
            export interface Youtubeanalytics {
                new(options: any): Youtubeanalytics;

                'batchReportDefinitions': {
                    'list': (parameters: {'onBehalfOfContentOwner': string}, callback: (error: any, body: BatchReportDefinitionList, response: any) => void) => Request;
                };
                'batchReports': {
                    'list': (parameters: {'batchReportDefinitionId': string, 'onBehalfOfContentOwner': string}, callback: (error: any, body: BatchReportList, response: any) => void) => Request;
                };
                'groupItems': {
                    'delete': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string}, callback: (error: any, body: GroupItem, response: any) => void) => Request;
                    'list': (parameters: {'groupId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: GroupItemListResponse, response: any) => void) => Request;
                };
                'groups': {
                    'delete': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Group, response: any) => void) => Request;
                    'list': (parameters: {'id'?: string, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string}, callback: (error: any, body: GroupListResponse, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Group, response: any) => void) => Request;
                };
                'reports': {
                    'query': (parameters: {'currency'?: string, 'dimensions'?: string, 'end-date': string, 'filters'?: string, 'ids': string, 'max-results'?: number, 'metrics': string, 'sort'?: string, 'start-date': string, 'start-index'?: number}, callback: (error: any, body: ResultTable, response: any) => void) => Request;
                };

            }

            interface BatchReport {
                'id': string;
                'kind': string;
                'outputs': {
                    'downloadUrl': string;
                    'format': string;
                    'type': string;
                }[];
                'reportId': string;
                'timeSpan': {
                    'endTime': string;
                    'startTime': string;
                };
                'timeUpdated': string;
            }

            interface BatchReportDefinition {
                'id': string;
                'kind': string;
                'name': string;
                'status': string;
                'type': string;
            }

            interface BatchReportDefinitionList {
                'items': BatchReportDefinition[];
                'kind': string;
            }

            interface BatchReportList {
                'items': BatchReport[];
                'kind': string;
            }

            interface Group {
                'contentDetails': {
                    'itemCount': string;
                    'itemType': string;
                };
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': {
                    'publishedAt': string;
                    'title': string;
                };
            }

            interface GroupItem {
                'etag': string;
                'groupId': string;
                'id': string;
                'kind': string;
                'resource': {
                    'id': string;
                    'kind': string;
                };
            }

            interface GroupItemListResponse {
                'etag': string;
                'items': GroupItem[];
                'kind': string;
            }

            interface GroupListResponse {
                'etag': string;
                'items': Group[];
                'kind': string;
                'nextPageToken': string;
            }

            interface ResultTable {
                'columnHeaders': {
                    'columnType': string;
                    'dataType': string;
                    'name': string;
                }[];
                'kind': string;
                'rows': any[][];
            }

        }
    }
}