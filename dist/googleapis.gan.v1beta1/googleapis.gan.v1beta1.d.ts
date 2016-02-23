// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        gan(version: string): any;
        gan(version: 'v1beta1'): gan.v1beta1.Gan;
    }

    namespace gan {
        namespace v1beta1 {
            export interface Gan {
                new(options: any): Gan;

                'advertisers': {
                    'get': (parameters: {'advertiserId'?: string, 'role': string, 'roleId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                    'list': (parameters: {'advertiserCategory'?: string, 'maxResults'?: number, 'minNinetyDayEpc'?: number, 'minPayoutRank'?: number, 'minSevenDayEpc'?: number, 'pageToken'?: string, 'relationshipStatus'?: string, 'role': string, 'roleId': string}, callback: (error: any, body: Advertisers, response: any) => void) => Request;
                };
                'ccOffers': {
                    'list': (parameters: {'advertiser'?: string, 'projection'?: string, 'publisher': string}, callback: (error: any, body: CcOffers, response: any) => void) => Request;
                };
                'events': {
                    'list': (parameters: {'advertiserId'?: string, 'chargeType'?: string, 'eventDateMax'?: string, 'eventDateMin'?: string, 'linkId'?: string, 'maxResults'?: number, 'memberId'?: string, 'modifyDateMax'?: string, 'modifyDateMin'?: string, 'orderId'?: string, 'pageToken'?: string, 'productCategory'?: string, 'publisherId'?: string, 'role': string, 'roleId': string, 'sku'?: string, 'status'?: string, 'type'?: string}, callback: (error: any, body: Events, response: any) => void) => Request;
                };
                'links': {
                    'get': (parameters: {'linkId': string, 'role': string, 'roleId': string}, callback: (error: any, body: Link, response: any) => void) => Request;
                    'insert': (parameters: {'role': string, 'roleId': string}, callback: (error: any, body: Link, response: any) => void) => Request;
                    'list': (parameters: {'advertiserId'?: string, 'assetSize'?: string, 'authorship'?: string, 'createDateMax'?: string, 'createDateMin'?: string, 'linkType'?: string, 'maxResults'?: number, 'pageToken'?: string, 'promotionType'?: string, 'relationshipStatus'?: string, 'role': string, 'roleId': string, 'searchText'?: string, 'startDateMax'?: string, 'startDateMin'?: string}, callback: (error: any, body: Links, response: any) => void) => Request;
                };
                'publishers': {
                    'get': (parameters: {'publisherId'?: string, 'role': string, 'roleId': string}, callback: (error: any, body: Publisher, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'minNinetyDayEpc'?: number, 'minPayoutRank'?: number, 'minSevenDayEpc'?: number, 'pageToken'?: string, 'publisherCategory'?: string, 'relationshipStatus'?: string, 'role': string, 'roleId': string}, callback: (error: any, body: Publishers, response: any) => void) => Request;
                };
                'reports': {
                    'get': (parameters: {'advertiserId'?: string, 'calculateTotals'?: boolean, 'endDate'?: string, 'eventType'?: string, 'linkId'?: string, 'maxResults'?: number, 'orderId'?: string, 'publisherId'?: string, 'reportType': string, 'role': string, 'roleId': string, 'startDate'?: string, 'startIndex'?: number, 'status'?: string}, callback: (error: any, body: Report, response: any) => void) => Request;
                };

            }

            export interface Advertiser {
                'allowPublisherCreatedLinks': boolean;
                'category': string;
                'commissionDuration': number;
                'contactEmail': string;
                'contactPhone': string;
                'defaultLinkId': string;
                'description': string;
                'epcNinetyDayAverage': Money;
                'epcSevenDayAverage': Money;
                'id': string;
                'item': Advertiser;
                'joinDate': string;
                'kind': string;
                'logoUrl': string;
                'merchantCenterIds': string[];
                'name': string;
                'payoutRank': string;
                'productFeedsEnabled': boolean;
                'redirectDomains': string[];
                'siteUrl': string;
                'status': string;
            }

            export interface Advertisers {
                'items': Advertiser[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CcOffer {
                'additionalCardBenefits': string[];
                'additionalCardHolderFee': string;
                'ageMinimum': number;
                'ageMinimumDetails': string;
                'annualFee': number;
                'annualFeeDisplay': string;
                'annualRewardMaximum': number;
                'approvedCategories': string[];
                'aprDisplay': string;
                'balanceComputationMethod': string;
                'balanceTransferTerms': string;
                'bonusRewards': {
                    'amount': number;
                    'details': string;
                }[];
                'carRentalInsurance': string;
                'cardBenefits': string[];
                'cardName': string;
                'cardType': string;
                'cashAdvanceTerms': string;
                'creditLimitMax': number;
                'creditLimitMin': number;
                'creditRatingDisplay': string;
                'defaultFees': {
                    'category': string;
                    'maxRate': number;
                    'minRate': number;
                    'rateType': string;
                }[];
                'disclaimer': string;
                'emergencyInsurance': string;
                'existingCustomerOnly': boolean;
                'extendedWarranty': string;
                'firstYearAnnualFee': number;
                'flightAccidentInsurance': string;
                'foreignCurrencyTransactionFee': string;
                'fraudLiability': string;
                'gracePeriodDisplay': string;
                'imageUrl': string;
                'initialSetupAndProcessingFee': string;
                'introBalanceTransferTerms': string;
                'introCashAdvanceTerms': string;
                'introPurchaseTerms': string;
                'issuer': string;
                'issuerId': string;
                'issuerWebsite': string;
                'kind': string;
                'landingPageUrl': string;
                'latePaymentFee': string;
                'luggageInsurance': string;
                'maxPurchaseRate': number;
                'minPurchaseRate': number;
                'minimumFinanceCharge': string;
                'network': string;
                'offerId': string;
                'offersImmediateCashReward': boolean;
                'overLimitFee': string;
                'prohibitedCategories': string[];
                'purchaseRateAdditionalDetails': string;
                'purchaseRateType': string;
                'returnedPaymentFee': string;
                'rewardPartner': string;
                'rewardUnit': string;
                'rewards': {
                    'additionalDetails': string;
                    'amount': number;
                    'category': string;
                    'expirationMonths': number;
                    'maxRewardTier': number;
                    'minRewardTier': number;
                }[];
                'rewardsExpire': boolean;
                'rewardsHaveBlackoutDates': boolean;
                'statementCopyFee': string;
                'trackingUrl': string;
                'travelInsurance': string;
                'variableRatesLastUpdated': string;
                'variableRatesUpdateFrequency': string;
            }

            export interface CcOffers {
                'items': CcOffer[];
                'kind': string;
            }

            export interface Event {
                'advertiserId': string;
                'advertiserName': string;
                'chargeId': string;
                'chargeType': string;
                'commissionableSales': Money;
                'earnings': Money;
                'eventDate': string;
                'kind': string;
                'memberId': string;
                'modifyDate': string;
                'networkFee': Money;
                'orderId': string;
                'products': {
                    'categoryId': string;
                    'categoryName': string;
                    'earnings': Money;
                    'networkFee': Money;
                    'publisherFee': Money;
                    'quantity': string;
                    'sku': string;
                    'skuName': string;
                    'unitPrice': Money;
                }[];
                'publisherFee': Money;
                'publisherId': string;
                'publisherName': string;
                'status': string;
                'type': string;
            }

            export interface Events {
                'items': Event[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Link {
                'advertiserId': string;
                'authorship': string;
                'availability': string;
                'clickTrackingUrl': string;
                'createDate': string;
                'description': string;
                'destinationUrl': string;
                'duration': string;
                'endDate': string;
                'epcNinetyDayAverage': Money;
                'epcSevenDayAverage': Money;
                'id': string;
                'imageAltText': string;
                'impressionTrackingUrl': string;
                'isActive': boolean;
                'kind': string;
                'linkType': string;
                'name': string;
                'promotionType': string;
                'specialOffers': {
                    'freeGift': boolean;
                    'freeShipping': boolean;
                    'freeShippingMin': Money;
                    'percentOff': number;
                    'percentOffMin': Money;
                    'priceCut': Money;
                    'priceCutMin': Money;
                    'promotionCodes': string[];
                };
                'startDate': string;
            }

            export interface Links {
                'items': Link[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Money {
                'amount': number;
                'currencyCode': string;
            }

            export interface Publisher {
                'classification': string;
                'epcNinetyDayAverage': Money;
                'epcSevenDayAverage': Money;
                'id': string;
                'item': Publisher;
                'joinDate': string;
                'kind': string;
                'name': string;
                'payoutRank': string;
                'sites': string[];
                'status': string;
            }

            export interface Publishers {
                'items': Publisher[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Report {
                'column_names': string[];
                'end_date': string;
                'kind': string;
                'matching_row_count': string;
                'rows': any[][];
                'start_date': string;
                'totals_rows': any[][];
                'type': string;
            }

        }
    }
}