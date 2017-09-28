// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        doubleclicksearch(version: string): any;
        doubleclicksearch(version: 'v2'): doubleclicksearch.v2.Doubleclicksearch;
    }

    namespace doubleclicksearch {
        namespace v2 {
            export interface Doubleclicksearch {
                new(options: any): Doubleclicksearch;

                'conversion': {
                    'get': (parameters: { [key: string]: any; 'adGroupId'?: string, 'adId'?: string, 'advertiserId': string, 'agencyId': string, 'campaignId'?: string, 'criterionId'?: string, 'endDate': number, 'engineAccountId': string, 'rowCount': number, 'startDate': number, 'startRow': number}, callback: (error: any, body: ConversionList, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: ConversionList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'advertiserId': string, 'agencyId': string, 'endDate': number, 'engineAccountId': string, 'rowCount': number, 'startDate': number, 'startRow': number}, callback: (error: any, body: ConversionList, response: any) => void) => Request;
                    'update': (parameters: any, callback: (error: any, body: ConversionList, response: any) => void) => Request;
                    'updateAvailability': (parameters: any, callback: (error: any, body: UpdateAvailabilityResponse, response: any) => void) => Request;
                };
                'reports': {
                    'generate': (parameters: any, callback: (error: any, body: Report, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'getFile': (parameters: { [key: string]: any; 'reportFragment': number, 'reportId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'request': (parameters: any, callback: (error: any, body: Report, response: any) => void) => Request;
                };
                'savedColumns': {
                    'list': (parameters: { [key: string]: any; 'advertiserId': string, 'agencyId': string}, callback: (error: any, body: SavedColumnList, response: any) => void) => Request;
                };

            }

            export interface Availability {
                'advertiserId': string;
                'agencyId': string;
                'availabilityTimestamp': string;
                'segmentationId': string;
                'segmentationName': string;
                'segmentationType': string;
            }

            export interface Conversion {
                'adGroupId': string;
                'adId': string;
                'advertiserId': string;
                'agencyId': string;
                'attributionModel': string;
                'campaignId': string;
                'channel': string;
                'clickId': string;
                'conversionId': string;
                'conversionModifiedTimestamp': string;
                'conversionTimestamp': string;
                'countMillis': string;
                'criterionId': string;
                'currencyCode': string;
                'customDimension': CustomDimension[];
                'customMetric': CustomMetric[];
                'deviceType': string;
                'dsConversionId': string;
                'engineAccountId': string;
                'floodlightOrderId': string;
                'inventoryAccountId': string;
                'productCountry': string;
                'productGroupId': string;
                'productId': string;
                'productLanguage': string;
                'quantityMillis': string;
                'revenueMicros': string;
                'segmentationId': string;
                'segmentationName': string;
                'segmentationType': string;
                'state': string;
                'storeId': string;
                'type': string;
            }

            export interface ConversionList {
                'conversion': Conversion[];
                'kind': string;
            }

            export interface CustomDimension {
                'name': string;
                'value': string;
            }

            export interface CustomMetric {
                'name': string;
                'value': number;
            }

            export interface Report {
                'files': {
                    'byteCount': string;
                    'url': string;
                }[];
                'id': string;
                'isReportReady': boolean;
                'kind': string;
                'request': ReportRequest;
                'rowCount': number;
                'rows': ReportRow[];
                'statisticsCurrencyCode': string;
                'statisticsTimeZone': string;
            }

            export interface ReportApiColumnSpec {
                'columnName': string;
                'customDimensionName': string;
                'customMetricName': string;
                'endDate': string;
                'groupByColumn': boolean;
                'headerText': string;
                'platformSource': string;
                'productReportPerspective': string;
                'savedColumnName': string;
                'startDate': string;
            }

            export interface ReportRequest {
                'columns': ReportApiColumnSpec[];
                'downloadFormat': string;
                'filters': {
                    'column': ReportApiColumnSpec;
                    'operator': string;
                    'values': any[];
                }[];
                'includeDeletedEntities': boolean;
                'includeRemovedEntities': boolean;
                'maxRowsPerFile': number;
                'orderBy': {
                    'column': ReportApiColumnSpec;
                    'sortOrder': string;
                }[];
                'reportScope': {
                    'adGroupId': string;
                    'adId': string;
                    'advertiserId': string;
                    'agencyId': string;
                    'campaignId': string;
                    'engineAccountId': string;
                    'keywordId': string;
                };
                'reportType': string;
                'rowCount': number;
                'startRow': number;
                'statisticsCurrency': string;
                'timeRange': {
                    'changedAttributesSinceTimestamp': string;
                    'changedMetricsSinceTimestamp': string;
                    'endDate': string;
                    'startDate': string;
                };
                'verifySingleTimeZone': boolean;
            }

            export interface ReportRow {
                [name: string]: any
            ;
            }

            export interface SavedColumn {
                'kind': string;
                'savedColumnName': string;
                'type': string;
            }

            export interface SavedColumnList {
                'items': SavedColumn[];
                'kind': string;
            }

            export interface UpdateAvailabilityRequest {
                'availabilities': Availability[];
            }

            export interface UpdateAvailabilityResponse {
                'availabilities': Availability[];
            }

        }
    }
}
