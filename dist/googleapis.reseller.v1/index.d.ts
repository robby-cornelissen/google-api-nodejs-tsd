// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        reseller(version: string): any;
        reseller(version: 'v1'): reseller.v1.Reseller;
    }

    namespace reseller {
        namespace v1 {
            export interface Reseller {
                new(options: any): Reseller;

                'customers': {
                    'get': (parameters: { [key: string]: any; 'customerId': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'customerAuthToken'?: string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'customerId': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'customerId': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                };
                'resellernotify': {
                    'getwatchdetails': (parameters: any, callback: (error: any, body: ResellernotifyGetwatchdetailsResponse, response: any) => void) => Request;
                    'register': (parameters: { [key: string]: any; 'serviceAccountEmailAddress'?: string}, callback: (error: any, body: ResellernotifyResource, response: any) => void) => Request;
                    'unregister': (parameters: { [key: string]: any; 'serviceAccountEmailAddress'?: string}, callback: (error: any, body: ResellernotifyResource, response: any) => void) => Request;
                };
                'subscriptions': {
                    'activate': (parameters: { [key: string]: any; 'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'changePlan': (parameters: { [key: string]: any; 'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'changeRenewalSettings': (parameters: { [key: string]: any; 'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'changeSeats': (parameters: { [key: string]: any; 'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'customerId': string, 'deletionType': string, 'subscriptionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'customerAuthToken'?: string, 'customerId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'customerAuthToken'?: string, 'customerId'?: string, 'customerNamePrefix'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: Subscriptions, response: any) => void) => Request;
                    'startPaidService': (parameters: { [key: string]: any; 'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'suspend': (parameters: { [key: string]: any; 'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                };

            }

            export interface Address {
                'addressLine1': string;
                'addressLine2': string;
                'addressLine3': string;
                'contactName': string;
                'countryCode': string;
                'kind': string;
                'locality': string;
                'organizationName': string;
                'postalCode': string;
                'region': string;
            }

            export interface ChangePlanRequest {
                'dealCode': string;
                'kind': string;
                'planName': string;
                'purchaseOrderId': string;
                'seats': Seats;
            }

            export interface Customer {
                'alternateEmail': string;
                'customerDomain': string;
                'customerDomainVerified': boolean;
                'customerId': string;
                'kind': string;
                'phoneNumber': string;
                'postalAddress': Address;
                'resourceUiUrl': string;
            }

            export interface RenewalSettings {
                'kind': string;
                'renewalType': string;
            }

            export interface ResellernotifyGetwatchdetailsResponse {
                'serviceAccountEmailAddresses': string[];
                'topicName': string;
            }

            export interface ResellernotifyResource {
                'topicName': string;
            }

            export interface Seats {
                'kind': string;
                'licensedNumberOfSeats': number;
                'maximumNumberOfSeats': number;
                'numberOfSeats': number;
            }

            export interface Subscription {
                'billingMethod': string;
                'creationTime': string;
                'customerDomain': string;
                'customerId': string;
                'dealCode': string;
                'kind': string;
                'plan': {
                    'commitmentInterval': {
                        'endTime': string;
                        'startTime': string;
                    };
                    'isCommitmentPlan': boolean;
                    'planName': string;
                };
                'purchaseOrderId': string;
                'renewalSettings': RenewalSettings;
                'resourceUiUrl': string;
                'seats': Seats;
                'skuId': string;
                'skuName': string;
                'status': string;
                'subscriptionId': string;
                'suspensionReasons': string[];
                'transferInfo': {
                    'minimumTransferableSeats': number;
                    'transferabilityExpirationTime': string;
                };
                'trialSettings': {
                    'isInTrial': boolean;
                    'trialEndTime': string;
                };
            }

            export interface Subscriptions {
                'kind': string;
                'nextPageToken': string;
                'subscriptions': Subscription[];
            }

        }
    }
}
