/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        adexchangebuyer(version: string): any;
        adexchangebuyer(version: 'v1.2'): adexchangebuyer.v1_2.Adexchangebuyer;
    }

    namespace adexchangebuyer {
        namespace v1_2 {
            export interface Adexchangebuyer {
                new(options: any): Adexchangebuyer;

                'accounts': {
                    'get': (parameters: {'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: AccountsList, response: any) => void) => Request;
                    'patch': (parameters: {'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'update': (parameters: {'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'creatives': {
                    'get': (parameters: {'accountId': number, 'buyerCreativeId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'statusFilter'?: string}, callback: (error: any, body: CreativesList, response: any) => void) => Request;
                };

            }

            interface Account {
                'bidderLocation': {
                    'maximumQps': number;
                    'region': string;
                    'url': string;
                }[];
                'cookieMatchingNid': string;
                'cookieMatchingUrl': string;
                'id': number;
                'kind': string;
                'maximumActiveCreatives': number;
                'maximumTotalQps': number;
                'numberActiveCreatives': number;
            }

            interface AccountsList {
                'items': Account[];
                'kind': string;
            }

            interface Creative {
                'HTMLSnippet': string;
                'accountId': number;
                'advertiserId': string[];
                'advertiserName': string;
                'agencyId': string;
                'apiUploadTimestamp': string;
                'attribute': number[];
                'buyerCreativeId': string;
                'clickThroughUrl': string[];
                'corrections': {
                    'details': string[];
                    'reason': string;
                }[];
                'disapprovalReasons': {
                    'details': string[];
                    'reason': string;
                }[];
                'filteringReasons': {
                    'date': string;
                    'reasons': {
                        'filteringCount': string;
                        'filteringStatus': number;
                    }[];
                };
                'height': number;
                'impressionTrackingUrl': string[];
                'kind': string;
                'productCategories': number[];
                'restrictedCategories': number[];
                'sensitiveCategories': number[];
                'status': string;
                'vendorType': number[];
                'version': number;
                'videoURL': string;
                'width': number;
            }

            interface CreativesList {
                'items': Creative[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}