// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        adsense(version: string): any;
        adsense(version: 'v1.4'): adsense.v1_4.Adsense;
    }

    namespace adsense {
        namespace v1_4 {
            export interface Adsense {
                new(options: any): Adsense;

                'accounts': {
                    'get': (parameters: { [key: string]: any; 'accountId': string, 'tree'?: boolean}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: Accounts, response: any) => void) => Request;

                    'adclients': {
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                    };
                    'adunits': {
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                        'getAdCode': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdCode, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;

                        'customchannels': {
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'adUnitId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                        };
                    };
                    'alerts': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'alertId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'locale'?: string}, callback: (error: any, body: Alerts, response: any) => void) => Request;
                    };
                    'customchannels': {
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;

                        'adunits': {
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'customChannelId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
                        };
                    };
                    'payments': {
                        'list': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: Payments, response: any) => void) => Request;
                    };
                    'reports': {
                        'generate': (parameters: { [key: string]: any; 'accountId': string, 'currency'?: string, 'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number, 'useTimezoneReporting'?: boolean}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;

                        'saved': {
                            'generate': (parameters: { [key: string]: any; 'accountId': string, 'locale'?: string, 'maxResults'?: number, 'savedReportId': string, 'startIndex'?: number}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedReports, response: any) => void) => Request;
                        };
                    };
                    'savedadstyles': {
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'savedAdStyleId': string}, callback: (error: any, body: SavedAdStyle, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedAdStyles, response: any) => void) => Request;
                    };
                    'urlchannels': {
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: UrlChannels, response: any) => void) => Request;
                    };
                };
                'adclients': {
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                };
                'adunits': {
                    'get': (parameters: { [key: string]: any; 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                    'getAdCode': (parameters: { [key: string]: any; 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdCode, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'adClientId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;

                    'customchannels': {
                        'list': (parameters: { [key: string]: any; 'adClientId': string, 'adUnitId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                    };
                };
                'alerts': {
                    'delete': (parameters: { [key: string]: any; 'alertId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'locale'?: string}, callback: (error: any, body: Alerts, response: any) => void) => Request;
                };
                'customchannels': {
                    'get': (parameters: { [key: string]: any; 'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;

                    'adunits': {
                        'list': (parameters: { [key: string]: any; 'adClientId': string, 'customChannelId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
                    };
                };
                'metadata': {
                    'dimensions': {
                        'list': (parameters: any, callback: (error: any, body: Metadata, response: any) => void) => Request;
                    };
                    'metrics': {
                        'list': (parameters: any, callback: (error: any, body: Metadata, response: any) => void) => Request;
                    };
                };
                'payments': {
                    'list': (parameters: any, callback: (error: any, body: Payments, response: any) => void) => Request;
                };
                'reports': {
                    'generate': (parameters: { [key: string]: any; 'accountId'?: string, 'currency'?: string, 'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number, 'useTimezoneReporting'?: boolean}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;

                    'saved': {
                        'generate': (parameters: { [key: string]: any; 'locale'?: string, 'maxResults'?: number, 'savedReportId': string, 'startIndex'?: number}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedReports, response: any) => void) => Request;
                    };
                };
                'savedadstyles': {
                    'get': (parameters: { [key: string]: any; 'savedAdStyleId': string}, callback: (error: any, body: SavedAdStyle, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedAdStyles, response: any) => void) => Request;
                };
                'urlchannels': {
                    'list': (parameters: { [key: string]: any; 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: UrlChannels, response: any) => void) => Request;
                };

            }

            export interface Account {
                'creation_time': string;
                'id': string;
                'kind': string;
                'name': string;
                'premium': boolean;
                'subAccounts': Account[];
                'timezone': string;
            }

            export interface Accounts {
                'etag': string;
                'items': Account[];
                'kind': string;
                'nextPageToken': string;
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
                'feedAdsSettings': {
                    'adPosition': string;
                    'frequency': number;
                    'minimumWordCount': number;
                    'type': string;
                };
                'id': string;
                'kind': string;
                'mobileContentAdsSettings': {
                    'markupLanguage': string;
                    'scriptingLanguage': string;
                    'size': string;
                    'type': string;
                };
                'name': string;
                'savedStyleId': string;
                'status': string;
            }

            export interface AdUnits {
                'etag': string;
                'items': AdUnit[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface AdsenseReportsGenerateResponse {
                'averages': string[];
                'endDate': string;
                'headers': {
                    'currency': string;
                    'name': string;
                    'type': string;
                }[];
                'kind': string;
                'rows': string[][];
                'startDate': string;
                'totalMatchedRows': string;
                'totals': string[];
                'warnings': string[];
            }

            export interface Alert {
                'id': string;
                'isDismissible': boolean;
                'kind': string;
                'message': string;
                'severity': string;
                'type': string;
            }

            export interface Alerts {
                'items': Alert[];
                'kind': string;
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

            export interface Metadata {
                'items': ReportingMetadataEntry[];
                'kind': string;
            }

            export interface Payment {
                'id': string;
                'kind': string;
                'paymentAmount': string;
                'paymentAmountCurrencyCode': string;
                'paymentDate': string;
            }

            export interface Payments {
                'items': Payment[];
                'kind': string;
            }

            export interface ReportingMetadataEntry {
                'compatibleDimensions': string[];
                'compatibleMetrics': string[];
                'id': string;
                'kind': string;
                'requiredDimensions': string[];
                'requiredMetrics': string[];
                'supportedProducts': string[];
            }

            export interface SavedAdStyle {
                'adStyle': AdStyle;
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface SavedAdStyles {
                'etag': string;
                'items': SavedAdStyle[];
                'kind': string;
                'nextPageToken': string;
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
