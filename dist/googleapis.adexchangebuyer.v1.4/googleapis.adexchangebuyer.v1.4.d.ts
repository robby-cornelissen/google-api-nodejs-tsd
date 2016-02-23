// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        adexchangebuyer(version: string): any;
        adexchangebuyer(version: 'v1.4'): adexchangebuyer.v1_4.Adexchangebuyer;
    }

    namespace adexchangebuyer {
        namespace v1_4 {
            export interface Adexchangebuyer {
                new(options: any): Adexchangebuyer;

                'accounts': {
                    'get': (parameters: {'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: AccountsList, response: any) => void) => Request;
                    'patch': (parameters: {'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'update': (parameters: {'id': number}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'billingInfo': {
                    'get': (parameters: {'accountId': number}, callback: (error: any, body: BillingInfo, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: BillingInfoList, response: any) => void) => Request;
                };
                'budget': {
                    'get': (parameters: {'accountId': string, 'billingId': string}, callback: (error: any, body: Budget, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'billingId': string}, callback: (error: any, body: Budget, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'billingId': string}, callback: (error: any, body: Budget, response: any) => void) => Request;
                };
                'creatives': {
                    'addDeal': (parameters: {'accountId': number, 'buyerCreativeId': string, 'dealId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'accountId': number, 'buyerCreativeId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'list': (parameters: {'accountId'?: number, 'buyerCreativeId'?: string, 'dealsStatusFilter'?: string, 'maxResults'?: number, 'openAuctionStatusFilter'?: string, 'pageToken'?: string}, callback: (error: any, body: CreativesList, response: any) => void) => Request;
                    'removeDeal': (parameters: {'accountId': number, 'buyerCreativeId': string, 'dealId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'marketplacedeals': {
                    'delete': (parameters: {'proposalId': string}, callback: (error: any, body: DeleteOrderDealsResponse, response: any) => void) => Request;
                    'insert': (parameters: {'proposalId': string}, callback: (error: any, body: AddOrderDealsResponse, response: any) => void) => Request;
                    'list': (parameters: {'proposalId': string}, callback: (error: any, body: GetOrderDealsResponse, response: any) => void) => Request;
                    'update': (parameters: {'proposalId': string}, callback: (error: any, body: EditAllOrderDealsResponse, response: any) => void) => Request;
                };
                'marketplacenotes': {
                    'insert': (parameters: {'proposalId': string}, callback: (error: any, body: AddOrderNotesResponse, response: any) => void) => Request;
                    'list': (parameters: {'proposalId': string}, callback: (error: any, body: GetOrderNotesResponse, response: any) => void) => Request;
                };
                'performanceReport': {
                    'list': (parameters: {'accountId': string, 'endDateTime': string, 'maxResults'?: number, 'pageToken'?: string, 'startDateTime': string}, callback: (error: any, body: PerformanceReportList, response: any) => void) => Request;
                };
                'pretargetingConfig': {
                    'delete': (parameters: {'accountId': string, 'configId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'configId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                    'insert': (parameters: {'accountId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                    'list': (parameters: {'accountId': string}, callback: (error: any, body: PretargetingConfigList, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'configId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'configId': string}, callback: (error: any, body: PretargetingConfig, response: any) => void) => Request;
                };
                'products': {
                    'get': (parameters: {'productId': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    'search': (parameters: {'pqlQuery'?: string}, callback: (error: any, body: GetOffersResponse, response: any) => void) => Request;
                };
                'proposals': {
                    'get': (parameters: {'proposalId': string}, callback: (error: any, body: Proposal, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: CreateOrdersResponse, response: any) => void) => Request;
                    'patch': (parameters: {'proposalId': string, 'revisionNumber': string, 'updateAction': string}, callback: (error: any, body: Proposal, response: any) => void) => Request;
                    'search': (parameters: {'pqlQuery'?: string}, callback: (error: any, body: GetOrdersResponse, response: any) => void) => Request;
                    'update': (parameters: {'proposalId': string, 'revisionNumber': string, 'updateAction': string}, callback: (error: any, body: Proposal, response: any) => void) => Request;
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

            export interface AddOrderDealsRequest {
                'deals': MarketplaceDeal[];
                'proposalRevisionNumber': string;
                'updateAction': string;
            }

            export interface AddOrderDealsResponse {
                'deals': MarketplaceDeal[];
                'proposalRevisionNumber': string;
            }

            export interface AddOrderNotesRequest {
                'notes': MarketplaceNote[];
            }

            export interface AddOrderNotesResponse {
                'notes': MarketplaceNote[];
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

            export interface Buyer {
                'accountId': string;
            }

            export interface ContactInformation {
                'email': string;
                'name': string;
            }

            export interface CreateOrdersRequest {
                'proposals': Proposal[];
                'webPropertyCode': string;
            }

            export interface CreateOrdersResponse {
                'proposals': Proposal[];
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
                'dealsStatus': string;
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
                'openAuctionStatus': string;
                'productCategories': number[];
                'restrictedCategories': number[];
                'sensitiveCategories': number[];
                'servingRestrictions': {
                    'contexts': {
                        'auctionType': string[];
                        'contextType': string;
                        'geoCriteriaId': number[];
                        'platform': string[];
                    }[];
                    'disapprovalReasons': {
                        'details': string[];
                        'reason': string;
                    }[];
                    'reason': string;
                }[];
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

            export interface DealTerms {
                'brandingType': string;
                'description': string;
                'estimatedGrossSpend': Price;
                'estimatedImpressionsPerDay': string;
                'guaranteedFixedPriceTerms': DealTermsGuaranteedFixedPriceTerms;
                'nonGuaranteedAuctionTerms': DealTermsNonGuaranteedAuctionTerms;
                'nonGuaranteedFixedPriceTerms': DealTermsNonGuaranteedFixedPriceTerms;
            }

            export interface DealTermsGuaranteedFixedPriceTerms {
                'fixedPrices': PricePerBuyer[];
                'guaranteedImpressions': string;
                'guaranteedLooks': string;
            }

            export interface DealTermsNonGuaranteedAuctionTerms {
                'privateAuctionId': string;
                'reservePricePerBuyers': PricePerBuyer[];
            }

            export interface DealTermsNonGuaranteedFixedPriceTerms {
                'fixedPrices': PricePerBuyer[];
            }

            export interface DeleteOrderDealsRequest {
                'dealIds': string[];
                'proposalRevisionNumber': string;
                'updateAction': string;
            }

            export interface DeleteOrderDealsResponse {
                'deals': MarketplaceDeal[];
                'proposalRevisionNumber': string;
            }

            export interface DeliveryControl {
                'creativeBlockingLevel': string;
                'deliveryRateType': string;
                'frequencyCaps': DeliveryControlFrequencyCap[];
            }

            export interface DeliveryControlFrequencyCap {
                'maxImpressions': number;
                'numTimeUnits': number;
                'timeUnitType': string;
            }

            export interface EditAllOrderDealsRequest {
                'deals': MarketplaceDeal[];
                'proposal': Proposal;
                'proposalRevisionNumber': string;
                'updateAction': string;
            }

            export interface EditAllOrderDealsResponse {
                'deals': MarketplaceDeal[];
            }

            export interface GetOffersResponse {
                'products': Product[];
            }

            export interface GetOrderDealsResponse {
                'deals': MarketplaceDeal[];
            }

            export interface GetOrderNotesResponse {
                'notes': MarketplaceNote[];
            }

            export interface GetOrdersResponse {
                'proposals': Proposal[];
            }

            export interface MarketplaceDeal {
                'buyerPrivateData': PrivateData;
                'creationTimeMs': string;
                'creativePreApprovalPolicy': string;
                'dealId': string;
                'deliveryControl': DeliveryControl;
                'externalDealId': string;
                'flightEndTimeMs': string;
                'flightStartTimeMs': string;
                'inventoryDescription': string;
                'kind': string;
                'lastUpdateTimeMs': string;
                'name': string;
                'productId': string;
                'productRevisionNumber': string;
                'proposalId': string;
                'sellerContacts': ContactInformation[];
                'sharedTargetings': SharedTargeting[];
                'syndicationProduct': string;
                'terms': DealTerms;
                'webPropertyCode': string;
            }

            export interface MarketplaceDealParty {
                'buyer': Buyer;
                'seller': Seller;
            }

            export interface MarketplaceLabel {
                'accountId': string;
                'createTimeMs': string;
                'deprecatedMarketplaceDealParty': MarketplaceDealParty;
                'label': string;
            }

            export interface MarketplaceNote {
                'creatorRole': string;
                'dealId': string;
                'kind': string;
                'note': string;
                'noteId': string;
                'proposalId': string;
                'proposalRevisionNumber': string;
                'timestampMs': string;
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
                'videoPlayerSizes': {
                    'aspectRatio': string;
                    'minHeight': string;
                    'minWidth': string;
                }[];
            }

            export interface PretargetingConfigList {
                'items': PretargetingConfig[];
                'kind': string;
            }

            export interface Price {
                'amountMicros': number;
                'currencyCode': string;
                'pricingType': string;
            }

            export interface PricePerBuyer {
                'buyer': Buyer;
                'price': Price;
            }

            export interface PrivateData {
                'referenceId': string;
                'referencePayload': string;
            }

            export interface Product {
                'creationTimeMs': string;
                'creatorContacts': ContactInformation[];
                'flightEndTimeMs': string;
                'flightStartTimeMs': string;
                'hasCreatorSignedOff': boolean;
                'inventorySource': string;
                'kind': string;
                'labels': MarketplaceLabel[];
                'lastUpdateTimeMs': string;
                'name': string;
                'productId': string;
                'revisionNumber': string;
                'seller': Seller;
                'sharedTargetings': SharedTargeting[];
                'state': string;
                'syndicationProduct': string;
                'terms': DealTerms;
                'webPropertyCode': string;
            }

            export interface Proposal {
                'billedBuyer': Buyer;
                'buyer': Buyer;
                'buyerContacts': ContactInformation[];
                'buyerPrivateData': PrivateData;
                'hasBuyerSignedOff': boolean;
                'hasSellerSignedOff': boolean;
                'inventorySource': string;
                'isRenegotiating': boolean;
                'isSetupComplete': boolean;
                'kind': string;
                'labels': MarketplaceLabel[];
                'lastUpdaterOrCommentorRole': string;
                'lastUpdaterRole': string;
                'name': string;
                'originatorRole': string;
                'proposalId': string;
                'proposalState': string;
                'revisionNumber': string;
                'revisionTimeMs': string;
                'seller': Seller;
                'sellerContacts': ContactInformation[];
            }

            export interface Seller {
                'accountId': string;
                'subAccountId': string;
            }

            export interface SharedTargeting {
                'exclusions': TargetingValue[];
                'inclusions': TargetingValue[];
                'key': string;
            }

            export interface TargetingValue {
                'creativeSizeValue': TargetingValueCreativeSize;
                'dayPartTargetingValue': TargetingValueDayPartTargeting;
                'longValue': string;
                'stringValue': string;
            }

            export interface TargetingValueCreativeSize {
                'companionSizes': TargetingValueSize[];
                'creativeSizeType': string;
                'size': TargetingValueSize;
            }

            export interface TargetingValueDayPartTargeting {
                'dayParts': TargetingValueDayPartTargetingDayPart[];
                'timeZoneType': string;
            }

            export interface TargetingValueDayPartTargetingDayPart {
                'dayOfWeek': string;
                'endHour': number;
                'endMinute': number;
                'startHour': number;
                'startMinute': number;
            }

            export interface TargetingValueSize {
                'height': number;
                'width': number;
            }

        }
    }
}