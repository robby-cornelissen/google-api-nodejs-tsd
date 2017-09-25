// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudbilling(version: string): any;
        cloudbilling(version: 'v1'): cloudbilling.v1.Cloudbilling;
    }

    namespace cloudbilling {
        namespace v1 {
            export interface Cloudbilling {
                new(options: any): Cloudbilling;

                'projects': {
                    'updateBillingInfo': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: ProjectBillingInfo, response: any) => void) => Request;
                    'getBillingInfo': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: ProjectBillingInfo, response: any) => void) => Request;
                };
                'billingAccounts': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: BillingAccount, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListBillingAccountsResponse, response: any) => void) => Request;

                    'projects': {
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'name': string, 'pageToken'?: string}, callback: (error: any, body: ListProjectBillingInfoResponse, response: any) => void) => Request;
                    };
                };
                'services': {
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListServicesResponse, response: any) => void) => Request;

                    'skus': {
                        'list': (parameters: { [key: string]: any; 'parent': string, 'currencyCode'?: string, 'endTime'?: string, 'pageSize'?: number, 'startTime'?: string, 'pageToken'?: string}, callback: (error: any, body: ListSkusResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface PricingExpression {
                'displayQuantity': number;
                'baseUnitDescription': string;
                'baseUnitConversionFactor': number;
                'usageUnit': string;
                'baseUnit': string;
                'usageUnitDescription': string;
                'tieredRates': TierRate[];
            }

            export interface Sku {
                'description': string;
                'serviceRegions': string[];
                'serviceProviderName': string;
                'pricingInfo': PricingInfo[];
                'skuId': string;
                'name': string;
                'category': Category;
            }

            export interface Money {
                'currencyCode': string;
                'units': string;
                'nanos': number;
            }

            export interface AggregationInfo {
                'aggregationInterval': string;
                'aggregationLevel': string;
                'aggregationCount': number;
            }

            export interface ProjectBillingInfo {
                'billingEnabled': boolean;
                'name': string;
                'projectId': string;
                'billingAccountName': string;
            }

            export interface ListBillingAccountsResponse {
                'nextPageToken': string;
                'billingAccounts': BillingAccount[];
            }

            export interface ListSkusResponse {
                'nextPageToken': string;
                'skus': Sku[];
            }

            export interface Service {
                'displayName': string;
                'serviceId': string;
                'name': string;
            }

            export interface TierRate {
                'unitPrice': Money;
                'startUsageAmount': number;
            }

            export interface PricingInfo {
                'effectiveTime': string;
                'aggregationInfo': AggregationInfo;
                'currencyConversionRate': number;
                'pricingExpression': PricingExpression;
                'summary': string;
            }

            export interface ListProjectBillingInfoResponse {
                'nextPageToken': string;
                'projectBillingInfo': ProjectBillingInfo[];
            }

            export interface ListServicesResponse {
                'nextPageToken': string;
                'services': Service[];
            }

            export interface BillingAccount {
                'displayName': string;
                'open': boolean;
                'name': string;
            }

            export interface Category {
                'resourceFamily': string;
                'usageType': string;
                'resourceGroup': string;
                'serviceDisplayName': string;
            }

        }
    }
}
