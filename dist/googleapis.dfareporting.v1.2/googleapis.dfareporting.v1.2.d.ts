// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dfareporting(version: string): any;
        dfareporting(version: 'v1.2'): dfareporting.v1_2.Dfareporting;
    }

    namespace dfareporting {
        namespace v1_2 {
            export interface Dfareporting {
                new(options: any): Dfareporting;

                'dimensionValues': {
                    'query': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string}, callback: (error: any, body: DimensionValueList, response: any) => void) => Request;
                };
                'files': {
                    'get': (parameters: {'fileId': string, 'reportId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'scope'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                };
                'reports': {
                    'delete': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'scope'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: ReportList, response: any) => void) => Request;
                    'patch': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'run': (parameters: {'profileId': string, 'reportId': string, 'synchronous'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                
                    'files': {
                        'get': (parameters: {'fileId': string, 'profileId': string, 'reportId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                        'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'reportId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                    };
                };
                'userProfiles': {
                    'get': (parameters: {'profileId': string}, callback: (error: any, body: UserProfile, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: UserProfileList, response: any) => void) => Request;
                };

            }

            export interface Activities {
                'filters': DimensionValue[];
                'kind': string;
                'metricNames': string[];
            }

            export interface CustomRichMediaEvents {
                'filteredEventIds': DimensionValue[];
                'kind': string;
            }

            export interface DateRange {
                'endDate': string;
                'kind': string;
                'relativeDateRange': string;
                'startDate': string;
            }

            export interface DimensionFilter {
                'dimensionName': string;
                'kind': string;
                'value': string;
            }

            export interface DimensionValue {
                'dimensionName': string;
                'etag': string;
                'id': string;
                'kind': string;
                'matchType': string;
                'value': string;
            }

            export interface DimensionValueList {
                'etag': string;
                'items': DimensionValue[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface DimensionValueRequest {
                'dimensionName': string;
                'endDate': string;
                'filters': DimensionFilter[];
                'kind': string;
                'startDate': string;
            }

            export interface File {
                'dateRange': DateRange;
                'etag': string;
                'fileName': string;
                'format': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'reportId': string;
                'status': string;
                'urls': {
                    'apiUrl': string;
                    'browserUrl': string;
                };
            }

            export interface FileList {
                'etag': string;
                'items': File[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Recipient {
                'deliveryType': string;
                'email': string;
                'kind': string;
            }

            export interface Report {
                'accountId': string;
                'activeGrpCriteria': {
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'metricNames': string[];
                };
                'criteria': {
                    'activities': Activities;
                    'customRichMediaEvents': CustomRichMediaEvents;
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'metricNames': string[];
                };
                'crossDimensionReachCriteria': {
                    'breakdown': SortedDimension[];
                    'dateRange': DateRange;
                    'dimension': string;
                    'dimensionFilters': DimensionValue[];
                    'metricNames': string[];
                    'overlapMetricNames': string[];
                    'pivoted': boolean;
                };
                'delivery': {
                    'emailOwner': boolean;
                    'emailOwnerDeliveryType': string;
                    'message': string;
                    'recipients': Recipient[];
                };
                'etag': string;
                'fileName': string;
                'floodlightCriteria': {
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'floodlightConfigId': DimensionValue;
                    'metricNames': string[];
                    'reportProperties': {
                        'includeAttributedIPConversions': boolean;
                        'includeUnattributedCookieConversions': boolean;
                        'includeUnattributedIPConversions': boolean;
                    };
                };
                'format': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'name': string;
                'ownerProfileId': string;
                'pathToConversionCriteria': {
                    'activityFilters': DimensionValue[];
                    'conversionDimensions': SortedDimension[];
                    'customFloodlightVariables': SortedDimension[];
                    'dateRange': DateRange;
                    'floodlightConfigId': DimensionValue;
                    'metricNames': string[];
                    'perInteractionDimensions': SortedDimension[];
                    'reportProperties': {
                        'clicksLookbackWindow': number;
                        'impressionsLookbackWindow': number;
                        'includeAttributedIPConversions': boolean;
                        'includeUnattributedCookieConversions': boolean;
                        'includeUnattributedIPConversions': boolean;
                        'maximumClickInteractions': number;
                        'maximumImpressionInteractions': number;
                        'maximumInteractionGap': number;
                        'pivotOnInteractionPath': boolean;
                    };
                };
                'reachCriteria': {
                    'activities': Activities;
                    'customRichMediaEvents': CustomRichMediaEvents;
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'metricNames': string[];
                    'reachByFrequencyMetricNames': string[];
                };
                'schedule': {
                    'active': boolean;
                    'every': number;
                    'expirationDate': string;
                    'repeats': string;
                    'repeatsOnWeekDays': string[];
                    'runsOnDayOfMonth': string;
                    'startDate': string;
                };
                'subAccountId': string;
                'type': string;
            }

            export interface ReportList {
                'etag': string;
                'items': Report[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface SortedDimension {
                'kind': string;
                'name': string;
                'sortOrder': string;
            }

            export interface UserProfile {
                'accountId': string;
                'accountName': string;
                'etag': string;
                'kind': string;
                'profileId': string;
                'subAccountId': string;
                'subAccountName': string;
                'userName': string;
            }

            export interface UserProfileList {
                'etag': string;
                'items': UserProfile[];
                'kind': string;
            }

        }
    }
}