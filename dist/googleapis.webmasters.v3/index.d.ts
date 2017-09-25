// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        webmasters(version: string): any;
        webmasters(version: 'v3'): webmasters.v3.Webmasters;
    }

    namespace webmasters {
        namespace v3 {
            export interface Webmasters {
                new(options: any): Webmasters;

                'searchanalytics': {
                    'query': (parameters: { [key: string]: any; 'siteUrl': string}, callback: (error: any, body: SearchAnalyticsQueryResponse, response: any) => void) => Request;
                };
                'sitemaps': {
                    'delete': (parameters: { [key: string]: any; 'feedpath': string, 'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'feedpath': string, 'siteUrl': string}, callback: (error: any, body: WmxSitemap, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'siteUrl': string, 'sitemapIndex'?: string}, callback: (error: any, body: SitemapsListResponse, response: any) => void) => Request;
                    'submit': (parameters: { [key: string]: any; 'feedpath': string, 'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'sites': {
                    'add': (parameters: { [key: string]: any; 'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'siteUrl': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'siteUrl': string}, callback: (error: any, body: WmxSite, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: SitesListResponse, response: any) => void) => Request;
                };
                'urlcrawlerrorscounts': {
                    'query': (parameters: { [key: string]: any; 'category'?: string, 'latestCountsOnly'?: boolean, 'platform'?: string, 'siteUrl': string}, callback: (error: any, body: UrlCrawlErrorsCountsQueryResponse, response: any) => void) => Request;
                };
                'urlcrawlerrorssamples': {
                    'get': (parameters: { [key: string]: any; 'category': string, 'platform': string, 'siteUrl': string, 'url': string}, callback: (error: any, body: UrlCrawlErrorsSample, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'category': string, 'platform': string, 'siteUrl': string}, callback: (error: any, body: UrlCrawlErrorsSamplesListResponse, response: any) => void) => Request;
                    'markAsFixed': (parameters: { [key: string]: any; 'category': string, 'platform': string, 'siteUrl': string, 'url': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };

            }

            export interface ApiDataRow {
                'clicks': number;
                'ctr': number;
                'impressions': number;
                'keys': string[];
                'position': number;
            }

            export interface ApiDimensionFilter {
                'dimension': string;
                'expression': string;
                'operator': string;
            }

            export interface ApiDimensionFilterGroup {
                'filters': ApiDimensionFilter[];
                'groupType': string;
            }

            export interface SearchAnalyticsQueryRequest {
                'aggregationType': string;
                'dimensionFilterGroups': ApiDimensionFilterGroup[];
                'dimensions': string[];
                'endDate': string;
                'rowLimit': number;
                'searchType': string;
                'startDate': string;
                'startRow': number;
            }

            export interface SearchAnalyticsQueryResponse {
                'responseAggregationType': string;
                'rows': ApiDataRow[];
            }

            export interface SitemapsListResponse {
                'sitemap': WmxSitemap[];
            }

            export interface SitesListResponse {
                'siteEntry': WmxSite[];
            }

            export interface UrlCrawlErrorCount {
                'count': string;
                'timestamp': string;
            }

            export interface UrlCrawlErrorCountsPerType {
                'category': string;
                'entries': UrlCrawlErrorCount[];
                'platform': string;
            }

            export interface UrlCrawlErrorsCountsQueryResponse {
                'countPerTypes': UrlCrawlErrorCountsPerType[];
            }

            export interface UrlCrawlErrorsSample {
                'first_detected': string;
                'last_crawled': string;
                'pageUrl': string;
                'responseCode': number;
                'urlDetails': UrlSampleDetails;
            }

            export interface UrlCrawlErrorsSamplesListResponse {
                'urlCrawlErrorSample': UrlCrawlErrorsSample[];
            }

            export interface UrlSampleDetails {
                'containingSitemaps': string[];
                'linkedFromUrls': string[];
            }

            export interface WmxSite {
                'permissionLevel': string;
                'siteUrl': string;
            }

            export interface WmxSitemap {
                'contents': WmxSitemapContent[];
                'errors': string;
                'isPending': boolean;
                'isSitemapsIndex': boolean;
                'lastDownloaded': string;
                'lastSubmitted': string;
                'path': string;
                'type': string;
                'warnings': string;
            }

            export interface WmxSitemapContent {
                'indexed': string;
                'submitted': string;
                'type': string;
            }

        }
    }
}
