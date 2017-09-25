// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        urlshortener(version: string): any;
        urlshortener(version: 'v1'): urlshortener.v1.Urlshortener;
    }

    namespace urlshortener {
        namespace v1 {
            export interface Urlshortener {
                new(options: any): Urlshortener;

                'url': {
                    'get': (parameters: { [key: string]: any; 'projection'?: string, 'shortUrl': string}, callback: (error: any, body: Url, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Url, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'projection'?: string, 'start-token'?: string}, callback: (error: any, body: UrlHistory, response: any) => void) => Request;
                };

            }

            export interface AnalyticsSnapshot {
                'browsers': StringCount[];
                'countries': StringCount[];
                'longUrlClicks': string;
                'platforms': StringCount[];
                'referrers': StringCount[];
                'shortUrlClicks': string;
            }

            export interface AnalyticsSummary {
                'allTime': AnalyticsSnapshot;
                'day': AnalyticsSnapshot;
                'month': AnalyticsSnapshot;
                'twoHours': AnalyticsSnapshot;
                'week': AnalyticsSnapshot;
            }

            export interface StringCount {
                'count': string;
                'id': string;
            }

            export interface Url {
                'analytics': AnalyticsSummary;
                'created': string;
                'id': string;
                'kind': string;
                'longUrl': string;
                'status': string;
            }

            export interface UrlHistory {
                'items': Url[];
                'itemsPerPage': number;
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

        }
    }
}
