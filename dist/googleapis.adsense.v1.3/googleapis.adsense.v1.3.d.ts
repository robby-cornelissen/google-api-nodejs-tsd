/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        adsense(version: string): any;
        adsense(version: 'v1.3'): adsense.v1_3.Adsense;
    }

    namespace adsense {
        namespace v1_3 {
            export interface Adsense {
                new(options: any): Adsense;

                'accounts': {
                    'get': (parameters: {'accountId': string, 'tree'?: boolean}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: Accounts, response: any) => void) => Request;
                
                    'adclients': {
                        'list': (parameters: {'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                    };
                    'adunits': {
                        'get': (parameters: {'accountId': string, 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                        'getAdCode': (parameters: {'accountId': string, 'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdCode, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'adClientId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
                    
                        'customchannels': {
                            'list': (parameters: {'accountId': string, 'adClientId': string, 'adUnitId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                        };
                    };
                    'alerts': {
                        'list': (parameters: {'accountId': string, 'locale'?: string}, callback: (error: any, body: Alerts, response: any) => void) => Request;
                    };
                    'customchannels': {
                        'get': (parameters: {'accountId': string, 'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                    
                        'adunits': {
                            'list': (parameters: {'accountId': string, 'adClientId': string, 'customChannelId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
                        };
                    };
                    'reports': {
                        'generate': (parameters: {'accountId': string, 'currency'?: string, 'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number, 'useTimezoneReporting'?: boolean}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;
                    
                        'saved': {
                            'generate': (parameters: {'accountId': string, 'locale'?: string, 'maxResults'?: number, 'savedReportId': string, 'startIndex'?: number}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;
                            'list': (parameters: {'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedReports, response: any) => void) => Request;
                        };
                    };
                    'savedadstyles': {
                        'get': (parameters: {'accountId': string, 'savedAdStyleId': string}, callback: (error: any, body: SavedAdStyle, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedAdStyles, response: any) => void) => Request;
                    };
                    'urlchannels': {
                        'list': (parameters: {'accountId': string, 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: UrlChannels, response: any) => void) => Request;
                    };
                };
                'adclients': {
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                };
                'adunits': {
                    'get': (parameters: {'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdUnit, response: any) => void) => Request;
                    'getAdCode': (parameters: {'adClientId': string, 'adUnitId': string}, callback: (error: any, body: AdCode, response: any) => void) => Request;
                    'list': (parameters: {'adClientId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
                
                    'customchannels': {
                        'list': (parameters: {'adClientId': string, 'adUnitId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                    };
                };
                'alerts': {
                    'list': (parameters: {'locale'?: string}, callback: (error: any, body: Alerts, response: any) => void) => Request;
                };
                'customchannels': {
                    'get': (parameters: {'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                    'list': (parameters: {'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                
                    'adunits': {
                        'list': (parameters: {'adClientId': string, 'customChannelId': string, 'includeInactive'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdUnits, response: any) => void) => Request;
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
                'reports': {
                    'generate': (parameters: {'accountId'?: string, 'currency'?: string, 'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number, 'useTimezoneReporting'?: boolean}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;
                
                    'saved': {
                        'generate': (parameters: {'locale'?: string, 'maxResults'?: number, 'savedReportId': string, 'startIndex'?: number}, callback: (error: any, body: AdsenseReportsGenerateResponse, response: any) => void) => Request;
                        'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedReports, response: any) => void) => Request;
                    };
                };
                'savedadstyles': {
                    'get': (parameters: {'savedAdStyleId': string}, callback: (error: any, body: SavedAdStyle, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedAdStyles, response: any) => void) => Request;
                };
                'urlchannels': {
                    'list': (parameters: {'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: UrlChannels, response: any) => void) => Request;
                };

            }

            interface Account {
                'id': string;
                'kind': string;
                'name': string;
                'premium': boolean;
                'subAccounts': Account[];
            }

            interface Accounts {
                'etag': string;
                'items': Account[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AdClient {
                'arcOptIn': boolean;
                'id': string;
                'kind': string;
                'productCode': string;
                'supportsReporting': boolean;
            }

            interface AdClients {
                'etag': string;
                'items': AdClient[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AdCode {
                'adCode': string;
                'kind': string;
            }

            interface AdStyle {
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

            interface AdUnit {
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

            interface AdUnits {
                'etag': string;
                'items': AdUnit[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AdsenseReportsGenerateResponse {
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

            interface Alert {
                'id': string;
                'kind': string;
                'message': string;
                'severity': string;
                'type': string;
            }

            interface Alerts {
                'items': Alert[];
                'kind': string;
            }

            interface CustomChannel {
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

            interface CustomChannels {
                'etag': string;
                'items': CustomChannel[];
                'kind': string;
                'nextPageToken': string;
            }

            interface Metadata {
                'items': ReportingMetadataEntry[];
                'kind': string;
            }

            interface ReportingMetadataEntry {
                'compatibleDimensions': string[];
                'compatibleMetrics': string[];
                'id': string;
                'kind': string;
                'requiredDimensions': string[];
                'requiredMetrics': string[];
                'supportedProducts': string[];
            }

            interface SavedAdStyle {
                'adStyle': AdStyle;
                'id': string;
                'kind': string;
                'name': string;
            }

            interface SavedAdStyles {
                'etag': string;
                'items': SavedAdStyle[];
                'kind': string;
                'nextPageToken': string;
            }

            interface SavedReport {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface SavedReports {
                'etag': string;
                'items': SavedReport[];
                'kind': string;
                'nextPageToken': string;
            }

            interface UrlChannel {
                'id': string;
                'kind': string;
                'urlPattern': string;
            }

            interface UrlChannels {
                'etag': string;
                'items': UrlChannel[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}