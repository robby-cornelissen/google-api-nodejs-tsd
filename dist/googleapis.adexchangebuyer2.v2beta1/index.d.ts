// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        adexchangebuyer2(version: string): any;
        adexchangebuyer2(version: 'v2beta1'): adexchangebuyer2.v2beta1.Adexchangebuyer2;
    }

    namespace adexchangebuyer2 {
        namespace v2beta1 {
            export interface Adexchangebuyer2 {
                new(options: any): Adexchangebuyer2;

                'accounts': {
                    'creatives': {
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'query'?: string, 'pageToken'?: string}, callback: (error: any, body: ListCreativesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'duplicateIdMode'?: string, 'accountId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                        'stopWatching': (parameters: { [key: string]: any; 'accountId': string, 'creativeId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'creativeId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                        'watch': (parameters: { [key: string]: any; 'accountId': string, 'creativeId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'creativeId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;

                        'dealAssociations': {
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'query'?: string, 'creativeId': string, 'pageToken'?: string}, callback: (error: any, body: ListDealAssociationsResponse, response: any) => void) => Request;
                            'remove': (parameters: { [key: string]: any; 'accountId': string, 'creativeId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'add': (parameters: { [key: string]: any; 'accountId': string, 'creativeId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                    };
                    'filterSets': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'filterSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'pageToken'?: string}, callback: (error: any, body: ListFilterSetsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'filterSetId': string}, callback: (error: any, body: FilterSet, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'isTransient'?: boolean, 'accountId': string}, callback: (error: any, body: FilterSet, response: any) => void) => Request;

                        'nonBillableWinningBids': {
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'accountId': string, 'filterSetId': string}, callback: (error: any, body: ListNonBillableWinningBidsResponse, response: any) => void) => Request;
                        };
                        'filteredBids': {
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'filterSetId': string, 'pageToken'?: string}, callback: (error: any, body: ListFilteredBidsResponse, response: any) => void) => Request;

                            'creatives': {
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'creativeStatusId': number, 'pageSize'?: number, 'accountId': string, 'filterSetId': string}, callback: (error: any, body: ListCreativeStatusBreakdownByCreativeResponse, response: any) => void) => Request;
                            };
                            'details': {
                                'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'filterSetId': string, 'pageToken'?: string, 'creativeStatusId': number}, callback: (error: any, body: ListCreativeStatusBreakdownByDetailResponse, response: any) => void) => Request;
                            };
                        };
                        'losingBids': {
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'filterSetId': string, 'pageToken'?: string}, callback: (error: any, body: ListLosingBidsResponse, response: any) => void) => Request;
                        };
                        'impressionMetrics': {
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'filterSetId': string, 'pageToken'?: string}, callback: (error: any, body: ListImpressionMetricsResponse, response: any) => void) => Request;
                        };
                        'bidMetrics': {
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'filterSetId': string, 'pageToken'?: string}, callback: (error: any, body: ListBidMetricsResponse, response: any) => void) => Request;
                        };
                        'bidResponseErrors': {
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'accountId': string, 'filterSetId': string}, callback: (error: any, body: ListBidResponseErrorsResponse, response: any) => void) => Request;
                        };
                        'bidResponsesWithoutBids': {
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'accountId': string, 'filterSetId': string}, callback: (error: any, body: ListBidResponsesWithoutBidsResponse, response: any) => void) => Request;
                        };
                        'filteredBidRequests': {
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'filterSetId': string, 'pageToken'?: string}, callback: (error: any, body: ListFilteredBidRequestsResponse, response: any) => void) => Request;
                        };
                    };
                    'clients': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'accountId': string}, callback: (error: any, body: ListClientsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'clientAccountId': string}, callback: (error: any, body: Client, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'clientAccountId': string}, callback: (error: any, body: Client, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: Client, response: any) => void) => Request;

                        'invitations': {
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'clientAccountId': string, 'pageToken'?: string}, callback: (error: any, body: ListClientUserInvitationsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'invitationId': string, 'accountId': string, 'clientAccountId': string}, callback: (error: any, body: ClientUserInvitation, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'accountId': string, 'clientAccountId': string}, callback: (error: any, body: ClientUserInvitation, response: any) => void) => Request;
                        };
                        'users': {
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'clientAccountId': string, 'userId': string}, callback: (error: any, body: ClientUser, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'accountId': string, 'clientAccountId': string, 'pageToken'?: string}, callback: (error: any, body: ListClientUsersResponse, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'accountId': string, 'clientAccountId': string, 'userId': string}, callback: (error: any, body: ClientUser, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Empty {}

            export interface AppContext {
                'appTypes': string[];
            }

            export interface ListFilteredBidsResponse {
                'creativeStatusRows': CreativeStatusRow[];
                'nextPageToken': string;
            }

            export interface SecurityContext {
                'securities': string[];
            }

            export interface ListFilteredBidRequestsResponse {
                'calloutStatusRows': CalloutStatusRow[];
                'nextPageToken': string;
            }

            export interface ListCreativesResponse {
                'creatives': Creative[];
                'nextPageToken': string;
            }

            export interface HtmlContent {
                'height': number;
                'width': number;
                'snippet': string;
            }

            export interface ListBidMetricsResponse {
                'nextPageToken': string;
                'bidMetricsRows': BidMetricsRow[];
            }

            export interface Reason {
                'status': number;
                'count': string;
            }

            export interface ListNonBillableWinningBidsResponse {
                'nextPageToken': string;
                'nonBillableWinningBidStatusRows': NonBillableWinningBidStatusRow[];
            }

            export interface ListLosingBidsResponse {
                'creativeStatusRows': CreativeStatusRow[];
                'nextPageToken': string;
            }

            export interface VideoContent {
                'videoUrl': string;
            }

            export interface ImpressionMetricsRow {
                'rowDimensions': RowDimensions;
                'availableImpressions': MetricValue;
                'inventoryMatches': MetricValue;
                'bidRequests': MetricValue;
                'responsesWithBids': MetricValue;
                'successfulResponses': MetricValue;
            }

            export interface AuctionContext {
                'auctionTypes': string[];
            }

            export interface ListImpressionMetricsResponse {
                'nextPageToken': string;
                'impressionMetricsRows': ImpressionMetricsRow[];
            }

            export interface BidMetricsRow {
                'billedImpressions': MetricValue;
                'bidsInAuction': MetricValue;
                'rowDimensions': RowDimensions;
                'viewableImpressions': MetricValue;
                'impressionsWon': MetricValue;
                'measurableImpressions': MetricValue;
                'bids': MetricValue;
            }

            export interface ListBidResponseErrorsResponse {
                'calloutStatusRows': CalloutStatusRow[];
                'nextPageToken': string;
            }

            export interface CreativeStatusRow {
                'rowDimensions': RowDimensions;
                'creativeStatusId': number;
                'bidCount': MetricValue;
            }

            export interface RealtimeTimeRange {
                'startTimestamp': string;
            }

            export interface NonBillableWinningBidStatusRow {
                'status': string;
                'rowDimensions': RowDimensions;
                'bidCount': MetricValue;
            }

            export interface FilteredBidDetailRow {
                'rowDimensions': RowDimensions;
                'detailId': number;
                'bidCount': MetricValue;
            }

            export interface AbsoluteDateRange {
                'endDate': Date;
                'startDate': Date;
            }

            export interface AddDealAssociationRequest {
                'association': CreativeDealAssociation;
            }

            export interface WatchCreativeRequest {
                'topic': string;
            }

            export interface TimeInterval {
                'endTime': string;
                'startTime': string;
            }

            export interface FilteredBidCreativeRow {
                'rowDimensions': RowDimensions;
                'bidCount': MetricValue;
                'creativeId': string;
            }

            export interface RelativeDateRange {
                'offsetDays': number;
                'durationDays': number;
            }

            export interface ListClientsResponse {
                'nextPageToken': string;
                'clients': Client[];
            }

            export interface NativeContent {
                'videoUrl': string;
                'clickLinkUrl': string;
                'logo': Image;
                'priceDisplayText': string;
                'clickTrackingUrl': string;
                'image': Image;
                'advertiserName': string;
                'storeUrl': string;
                'headline': string;
                'appIcon': Image;
                'callToAction': string;
                'body': string;
                'starRating': number;
            }

            export interface ListBidResponsesWithoutBidsResponse {
                'nextPageToken': string;
                'bidResponseWithoutBidsStatusRows': BidResponseWithoutBidsStatusRow[];
            }

            export interface ServingContext {
                'location': LocationContext;
                'auctionType': AuctionContext;
                'all': string;
                'appType': AppContext;
                'securityType': SecurityContext;
                'platform': PlatformContext;
            }

            export interface Image {
                'width': number;
                'url': string;
                'height': number;
            }

            export interface ListFilterSetsResponse {
                'filterSets': FilterSet[];
                'nextPageToken': string;
            }

            export interface BidResponseWithoutBidsStatusRow {
                'impressionCount': MetricValue;
                'status': string;
                'rowDimensions': RowDimensions;
            }

            export interface ClientUserInvitation {
                'clientAccountId': string;
                'invitationId': string;
                'email': string;
            }

            export interface ListClientUserInvitationsResponse {
                'nextPageToken': string;
                'invitations': ClientUserInvitation[];
            }

            export interface ListClientUsersResponse {
                'users': ClientUser[];
                'nextPageToken': string;
            }

            export interface ListCreativeStatusBreakdownByDetailResponse {
                'nextPageToken': string;
                'filteredBidDetailRows': FilteredBidDetailRow[];
                'detailType': string;
            }

            export interface LocationContext {
                'geoCriteriaIds': number[];
            }

            export interface PlatformContext {
                'platforms': string[];
            }

            export interface MetricValue {
                'variance': string;
                'value': string;
            }

            export interface ClientUser {
                'status': string;
                'email': string;
                'userId': string;
                'clientAccountId': string;
            }

            export interface CreativeDealAssociation {
                'accountId': string;
                'creativeId': string;
                'dealsId': string;
            }

            export interface FilteringStats {
                'reasons': Reason[];
                'date': Date;
            }

            export interface Creative {
                'vendorIds': number[];
                'impressionTrackingUrls': string[];
                'html': HtmlContent;
                'detectedProductCategories': number[];
                'dealsStatus': string;
                'openAuctionStatus': string;
                'advertiserName': string;
                'detectedAdvertiserIds': string[];
                'detectedDomains': string[];
                'filteringStats': FilteringStats;
                'attributes': string[];
                'apiUpdateTime': string;
                'detectedLanguages': string[];
                'creativeId': string;
                'accountId': string;
                'native': NativeContent;
                'servingRestrictions': ServingRestriction[];
                'video': VideoContent;
                'agencyId': string;
                'clickThroughUrls': string[];
                'detectedSensitiveCategories': number[];
                'adChoicesDestinationUrl': string;
                'restrictedCategories': string[];
                'corrections': Correction[];
                'version': number;
            }

            export interface RemoveDealAssociationRequest {
                'association': CreativeDealAssociation;
            }

            export interface ListCreativeStatusBreakdownByCreativeResponse {
                'nextPageToken': string;
                'filteredBidCreativeRows': FilteredBidCreativeRow[];
            }

            export interface Client {
                'entityType': string;
                'clientName': string;
                'role': string;
                'visibleToSeller': boolean;
                'entityId': string;
                'clientAccountId': string;
                'entityName': string;
                'status': string;
            }

            export interface Correction {
                'type': string;
                'contexts': ServingContext[];
                'details': string[];
            }

            export interface FilterSet {
                'ownerAccountId': string;
                'absoluteDateRange': AbsoluteDateRange;
                'buyerAccountId': string;
                'environment': string;
                'dealId': string;
                'format': string;
                'timeSeriesGranularity': string;
                'filterSetId': string;
                'realtimeTimeRange': RealtimeTimeRange;
                'creativeId': string;
                'platforms': string[];
                'relativeDateRange': RelativeDateRange;
                'sellerNetworkIds': number[];
            }

            export interface ListDealAssociationsResponse {
                'associations': CreativeDealAssociation[];
                'nextPageToken': string;
            }

            export interface CalloutStatusRow {
                'impressionCount': MetricValue;
                'rowDimensions': RowDimensions;
                'calloutStatusId': number;
            }

            export interface Disapproval {
                'details': string[];
                'reason': string;
            }

            export interface StopWatchingCreativeRequest {}

            export interface ServingRestriction {
                'disapprovalReasons': Disapproval[];
                'contexts': ServingContext[];
                'status': string;
            }

            export interface Date {
                'day': number;
                'year': number;
                'month': number;
            }

            export interface RowDimensions {
                'timeInterval': TimeInterval;
            }

        }
    }
}
