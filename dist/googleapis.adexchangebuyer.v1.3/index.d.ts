// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        adexchangebuyer(version: string): any;
        adexchangebuyer(version: 'v1.3'): adexchangebuyer.v1_3.Adexchangebuyer;
    }

    namespace adexchangebuyer {
        namespace v1_3 {
            export interface Adexchangebuyer {
                new(options: any): Adexchangebuyer;

                'accounts': {
                    'get': (parameters: { [key: string]: any; 'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: AccountsList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'billingInfo': {
                    'get': (parameters: { [key: string]: any; 'accountId': number}, callback: (error: any, body: BillingInfo, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: BillingInfoList, response: any) => void) => Request;
                };
                'budget': {
                    'get': (parameters: { [key: string]: any; 'accountId': string, 'billingId': string}, callback: (error: any, body: Budget, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'accountId': string, 'billingId': string}, callback: (error: any, body: Budget, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'accountId': string, 'billingId': string}, callback: (error: any, body: Budget, response: any) => void) => Request;
                };
                'creatives': {
                    'get': (parameters: { [key: string]: any; 'accountId': number, 'buyerCreativeId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'accountId'?: number, 'buyerCreativeId'?: string, 'maxResults'?: number, 'pageToken'?: string, 'statusFilter'?: string}, callback: (error: any, body: CreativesList, response: any) => void) => Request;
                };
                'directDeals': {
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: DirectDeal, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: DirectDealsList, response: any) => void) => Request;
                };
                'performanceReport': {
                    'list': (parameters: { [key: string]: any; 'accountId': string, 'endDateTime': string, 'maxResults'?: number, 'pageToken'?: string, 'startDateTime': string}, callback: (error: any, body: PerformanceReportList, response: any) => void) => Request;
                };
                'pretargetingConfig': {
                    'delete': (parameters: { [key: string]: any; 'accountId': string, 'configId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'accountId': string, 'configId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: PretargetingConfigList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'accountId': string, 'configId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'accountId': string, 'configId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                };

            }

            export interface Account {
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

            export interface AccountsList {
                'items': Account[];
                'kind': string;
            }

            export interface BillingInfo {
                'accountId': number;
                'accountName': string;
                'billingId': string[];
                'kind': string;
            }

            export interface BillingInfoList {
                'items': BillingInfo[];
                'kind': string;
            }

            export interface Budget {
                'accountId': string;
                'billingId': string;
                'budgetAmount': string;
                'currencyCode': string;
                'id': string;
                'kind': string;
            }

            export interface Creative {
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
                'nativeAd': {
                    'advertiser': string;
                    'appIcon': {
                        'height': number;
                        'url': string;
                        'width': number;
                    };
                    'body': string;
                    'callToAction': string;
                    'clickTrackingUrl': string;
                    'headline': string;
                    'image': {
                        'height': number;
                        'url': string;
                        'width': number;
                    };
                    'impressionTrackingUrl': string[];
                    'logo': {
                        'height': number;
                        'url': string;
                        'width': number;
                    };
                    'price': string;
                    'starRating': number;
                    'store': string;
                };
                'productCategories': number[];
                'restrictedCategories': number[];
                'sensitiveCategories': number[];
                'status': string;
                'vendorType': number[];
                'version': number;
                'videoURL': string;
                'width': number;
            }

            export interface CreativesList {
                'items': Creative[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface DirectDeal {
                'accountId': number;
                'advertiser': string;
                'allowsAlcohol': boolean;
                'buyerAccountId': string;
                'currencyCode': string;
                'dealTier': string;
                'endTime': string;
                'fixedCpm': string;
                'id': string;
                'kind': string;
                'name': string;
                'privateExchangeMinCpm': string;
                'publisherBlocksOverriden': boolean;
                'sellerNetwork': string;
                'startTime': string;
            }

            export interface DirectDealsList {
                'directDeals': DirectDeal[];
                'kind': string;
            }

            export interface PerformanceReport {
                'bidRate': number;
                'bidRequestRate': number;
                'calloutStatusRate': any[];
                'cookieMatcherStatusRate': any[];
                'creativeStatusRate': any[];
                'filteredBidRate': number;
                'hostedMatchStatusRate': any[];
                'inventoryMatchRate': number;
                'kind': string;
                'latency50thPercentile': number;
                'latency85thPercentile': number;
                'latency95thPercentile': number;
                'noQuotaInRegion': number;
                'outOfQuota': number;
                'pixelMatchRequests': number;
                'pixelMatchResponses': number;
                'quotaConfiguredLimit': number;
                'quotaThrottledLimit': number;
                'region': string;
                'successfulRequestRate': number;
                'timestamp': string;
                'unsuccessfulRequestRate': number;
            }

            export interface PerformanceReportList {
                'kind': string;
                'performanceReport': PerformanceReport[];
            }

            export interface PretargetingConfig {
                'billingId': string;
                'configId': string;
                'configName': string;
                'creativeType': string[];
                'dimensions': {
                    'height': string;
                    'width': string;
                }[];
                'excludedContentLabels': string[];
                'excludedGeoCriteriaIds': string[];
                'excludedPlacements': {
                    'token': string;
                    'type': string;
                }[];
                'excludedUserLists': string[];
                'excludedVerticals': string[];
                'geoCriteriaIds': string[];
                'isActive': boolean;
                'kind': string;
                'languages': string[];
                'mobileCarriers': string[];
                'mobileDevices': string[];
                'mobileOperatingSystemVersions': string[];
                'placements': {
                    'token': string;
                    'type': string;
                }[];
                'platforms': string[];
                'supportedCreativeAttributes': string[];
                'userLists': string[];
                'vendorTypes': string[];
                'verticals': string[];
            }

            export interface PretargetingConfigList {
                'items': PretargetingConfig[];
                'kind': string;
            }

        }
    }
}
