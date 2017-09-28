// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        youtubeAnalytics(version: string): any;
        youtubeAnalytics(version: 'v1beta1'): youtubeAnalytics.v1beta1.Youtubeanalytics;
    }

    namespace youtubeAnalytics {
        namespace v1beta1 {
            export interface Youtubeanalytics {
                new(options: any): Youtubeanalytics;

                'groupItems': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: GroupItem, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'groupId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: GroupItemListResponse, response: any) => void) => Request;
                };
                'groups': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Group, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'id'?: string, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string}, callback: (error: any, body: GroupListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: Group, response: any) => void) => Request;
                };
                'reports': {
                    'query': (parameters: { [key: string]: any; 'currency'?: string, 'dimensions'?: string, 'end-date': string, 'filters'?: string, 'ids': string, 'include-historical-channel-data'?: boolean, 'max-results'?: number, 'metrics': string, 'sort'?: string, 'start-date': string, 'start-index'?: number}, callback: (error: any, body: ResultTable, response: any) => void) => Request;
                };

            }

            export interface Group {
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

            export interface GroupItem {
                'etag': string;
                'groupId': string;
                'id': string;
                'kind': string;
                'resource': {
                    'id': string;
                    'kind': string;
                };
            }

            export interface GroupItemListResponse {
                'etag': string;
                'items': GroupItem[];
                'kind': string;
            }

            export interface GroupListResponse {
                'etag': string;
                'items': Group[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface ResultTable {
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
