// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        adsensehost(version: string): any;
        adsensehost(version: 'v4.1'): adsensehost.v4_1.Adsensehost;
    }

    namespace adsensehost {
        namespace v4_1 {
            export interface Adsensehost {
                new(options: any): Adsensehost;

                'accounts': {
                    'get': (parameters: {'accountId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: {'filterAdClientId': string}, callback: (error: any, body: Accounts, response: any) => void) => Request;
                
                    'adclients': {
                        'get': (parameters: {'accountId': string, 'adClientId': string}, callback: (error: any, body: AdClient, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                    };
                    'adunits': {
                        'delete': (parameters: {'accountId': string, 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                        'get': (parameters: {'accountId': string, 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                        'getAdCode': (parameters: {'accountId': string, 'adClientId': string, 'adUnitId': string, 'hostCustomChannelId'?: string}, callback: (error: any, body: AdCode, response: any) => void) => Request;
                        'insert': (parameters: {'accountId': string, 'adClientId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'adClientId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
                        'patch': (parameters: {'accountId': string, 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                        'update': (parameters: {'accountId': string, 'adClientId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                    };
                    'reports': {
                        'generate': (parameters: {'accountId': string, 'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number}, callback: (error: any, body: Report, response: any) => void) => Request;
                    };
                };
                'adclients': {
                    'get': (parameters: {'adClientId': string}, callback: (error: any, body: AdClient, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                };
                'associationsessions': {
                    'start': (parameters: {'productCode': string, 'userLocale'?: string, 'websiteLocale'?: string, 'websiteUrl': string}, callback: (error: any, body: AssociationSession, response: any) => void) => Request;
                    'verify': (parameters: {'token': string}, callback: (error: any, body: AssociationSession, response: any) => void) => Request;
                };
                'customchannels': {
                    'delete': (parameters: {'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                    'get': (parameters: {'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                    'insert': (parameters: {'adClientId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                    'list': (parameters: {'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                    'patch': (parameters: {'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                    'update': (parameters: {'adClientId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                };
                'reports': {
                    'generate': (parameters: {'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number}, callback: (error: any, body: Report, response: any) => void) => Request;
                };
                'urlchannels': {
                    'delete': (parameters: {'adClientId': string, 'urlChannelId': string}, callback: (error: any, body: UrlChannel, response: any) => void) => Request;
                    'insert': (parameters: {'adClientId': string}, callback: (error: any, body: UrlChannel, response: any) => void) => Request;
                    'list': (parameters: {'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: UrlChannels, response: any) => void) => Request;
                };

            }

            export interface Account {
                'id': string;
                'kind': string;
                'name': string;
                'status': string;
            }

            export interface Accounts {
                'etag': string;
                'items': Account[];
                'kind': string;
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

            export interface AdCode {
                'adCode': string;
                'kind': string;
            }

            export interface AdStyle {
                'colors': {
                    'background': string;
                    'border': string;
                    'text': string;
                    'title': string;
                    'url': string;
                };
                'corners': string;
                'font': {
                    'family': string;
                    'size': string;
                };
                'kind': string;
            }

            export interface AdUnit {
                'code': string;
                'contentAdsSettings': {
                    'backupOption': {
                        'color': string;
                        'type': string;
                        'url': string;
                    };
                    'size': string;
                    'type': string;
                };
                'customStyle': AdStyle;
                'id': string;
                'kind': string;
                'mobileContentAdsSettings': {
                    'markupLanguage': string;
                    'scriptingLanguage': string;
                    'size': string;
                    'type': string;
                };
                'name': string;
                'status': string;
            }

            export interface AdUnits {
                'etag': string;
                'items': AdUnit[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface AssociationSession {
                'accountId': string;
                'id': string;
                'kind': string;
                'productCodes': string[];
                'redirectUrl': string;
                'status': string;
                'userLocale': string;
                'websiteLocale': string;
                'websiteUrl': string;
            }

            export interface CustomChannel {
                'code': string;
                'id': string;
                'kind': string;
                'name': string;
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