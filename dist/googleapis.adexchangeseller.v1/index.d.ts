// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        adexchangeseller(version: string): any;
        adexchangeseller(version: 'v1'): adexchangeseller.v1.Adexchangeseller;
    }

    namespace adexchangeseller {
        namespace v1 {
            export interface Adexchangeseller {
                new(options: any): Adexchangeseller;

                'adclients': {
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                };
                'adunits': {
                    'get': (parameters: { [key: string]: any; 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'adClientId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;

                    'customchannels': {
                        'list': (parameters: { [key: string]: any; 'adClientId': string, 'adUnitId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                    };
                };
                'customchannels': {
                    'get': (parameters: { [key: string]: any; 'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;

                    'adunits': {
                        'list': (parameters: { [key: string]: any; 'adClientId': string, 'customChannelId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
                    };
                };
                'reports': {
                    'generate': (parameters: { [key: string]: any; 'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number}, callback: (error: any, body: Report, response: any) => void) => Request;

                    'saved': {
                        'generate': (parameters: { [key: string]: any; 'locale'?: string, 'maxResults'?: number, 'savedReportId': string, 'startIndex'?: number}, callback: (error: any, body: Report, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedReports, response: any) => void) => Request;
                    };
                };
                'urlchannels': {
                    'list': (parameters: { [key: string]: any; 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: UrlChannels, response: any) => void) => Request;
                };

            }

            export interface AdClient {
                'arcOptIn': boolean;
                'id': string;
                'kind': string;
                'productCode': string;
                'supportsReporting': boolean;
            }

            export interface AdClients {
                'etag': string;
                'items': AdClient[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface AdUnit {
                'code': string;
                'id': string;
                'kind': string;
                'name': string;
                'status': string;
            }

            export interface AdUnits {
                'etag': string;
                'items': AdUnit[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CustomChannel {
                'code': string;
                'id': string;
                'kind': string;
                'name': string;
                'targetingInfo': {
                    'adsAppearOn': string;
                    'description': string;
                    'location': string;
                    'siteLanguage': string;
                };
            }

            export interface CustomChannels {
                'etag': string;
                'items': CustomChannel[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Report {
                'averages': string[];
                'headers': {
                    'currency': string;
                    'name': string;
                    'type': string;
                }[];
                'kind': string;
                'rows': string[][];
                'totalMatchedRows': string;
                'totals': string[];
                'warnings': string[];
            }

            export interface SavedReport {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface SavedReports {
                'etag': string;
                'items': SavedReport[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface UrlChannel {
                'id': string;
                'kind': string;
                'urlPattern': string;
            }

            export interface UrlChannels {
                'etag': string;
                'items': UrlChannel[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}
