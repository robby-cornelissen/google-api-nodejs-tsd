/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        urlshortener(version: string): any;
        urlshortener(version: 'v1'): urlshortener.v1.Urlshortener;
    }

    namespace urlshortener {
        namespace v1 {
            export interface Urlshortener {
                new(options: any): Urlshortener;

                'url': {
                    'get': (parameters: {'projection'?: string, 'shortUrl': string}, callback: (error: any, body: Url, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Url, response: any) => void) => Request;
                    'list': (parameters: {'projection'?: string, 'start-token'?: string}, callback: (error: any, body: UrlHistory, response: any) => void) => Request;
                };

            }

            interface AnalyticsSnapshot {
                'browsers': StringCount[];
                'countries': StringCount[];
                'longUrlClicks': string;
                'platforms': StringCount[];
                'referrers': StringCount[];
                'shortUrlClicks': string;
            }

            interface AnalyticsSummary {
                'allTime': AnalyticsSnapshot;
                'day': AnalyticsSnapshot;
                'month': AnalyticsSnapshot;
                'twoHours': AnalyticsSnapshot;
                'week': AnalyticsSnapshot;
            }

            interface StringCount {
                'count': string;
                'id': string;
            }

            interface Url {
                'analytics': AnalyticsSummary;
                'created': string;
                'id': string;
                'kind': string;
                'longUrl': string;
                'status': string;
            }

            interface UrlHistory {
                'items': Url[];
                'itemsPerPage': number;
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

        }
    }
}