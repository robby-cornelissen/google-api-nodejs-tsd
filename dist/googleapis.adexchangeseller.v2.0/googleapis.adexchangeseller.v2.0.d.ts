/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        adexchangeseller(version: string): any;
        adexchangeseller(version: 'v2.0'): adexchangeseller.v2_0.Adexchangeseller;
    }

    namespace adexchangeseller {
        namespace v2_0 {
            export interface Adexchangeseller {
                new(options: any): Adexchangeseller;

                'accounts': {
                    'get': (parameters: {'accountId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: Accounts, response: any) => void) => Request;
                
                    'adclients': {
                        'list': (parameters: {'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AdClients, response: any) => void) => Request;
                    };
                    'alerts': {
                        'list': (parameters: {'accountId': string, 'locale'?: string}, callback: (error: any, body: Alerts, response: any) => void) => Request;
                    };
                    'customchannels': {
                        'get': (parameters: {'accountId': string, 'adClientId': string, 'customChannelId': string}, callback: (error: any, body: CustomChannel, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CustomChannels, response: any) => void) => Request;
                    };
                    'metadata': {
                        'dimensions': {
                            'list': (parameters: {'accountId': string}, callback: (error: any, body: Metadata, response: any) => void) => Request;
                        };
                        'metrics': {
                            'list': (parameters: {'accountId': string}, callback: (error: any, body: Metadata, response: any) => void) => Request;
                        };
                    };
                    'preferreddeals': {
                        'get': (parameters: {'accountId': string, 'dealId': string}, callback: (error: any, body: PreferredDeal, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string}, callback: (error: any, body: PreferredDeals, response: any) => void) => Request;
                    };
                    'reports': {
                        'generate': (parameters: {'accountId': string, 'dimension'?: string, 'endDate': string, 'filter'?: string, 'locale'?: string, 'maxResults'?: number, 'metric'?: string, 'sort'?: string, 'startDate': string, 'startIndex'?: number}, callback: (error: any, body: Report, response: any) => void) => Request;
                    
                        'saved': {
                            'generate': (parameters: {'accountId': string, 'locale'?: string, 'maxResults'?: number, 'savedReportId': string, 'startIndex'?: number}, callback: (error: any, body: Report, response: any) => void) => Request;
                            'list': (parameters: {'accountId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: SavedReports, response: any) => void) => Request;
                        };
                    };
                    'urlchannels': {
                        'list': (parameters: {'accountId': string, 'adClientId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: UrlChannels, response: any) => void) => Request;
                    };
                };

            }

            interface Account {
                'id': string;
                'kind': string;
                'name': string;
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

            interface PreferredDeal {
                'advertiserName': string;
                'buyerNetworkName': string;
                'currencyCode': string;
                'endTime': string;
                'fixedCpm': string;
                'id': string;
                'kind': string;
                'startTime': string;
            }

            interface PreferredDeals {
                'items': PreferredDeal[];
                'kind': string;
            }

            interface Report {
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

            interface ReportingMetadataEntry {
                'compatibleDimensions': string[];
                'compatibleMetrics': string[];
                'id': string;
                'kind': string;
                'requiredDimensions': string[];
                'requiredMetrics': string[];
                'supportedProducts': string[];
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