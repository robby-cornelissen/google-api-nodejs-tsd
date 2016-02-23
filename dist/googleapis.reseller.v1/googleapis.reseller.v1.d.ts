// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        reseller(version: string): any;
        reseller(version: 'v1'): reseller.v1.Reseller;
    }

    namespace reseller {
        namespace v1 {
            export interface Reseller {
                new(options: any): Reseller;

                'customers': {
                    'get': (parameters: {'customerId': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'insert': (parameters: {'customerAuthToken'?: string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'patch': (parameters: {'customerId': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                    'update': (parameters: {'customerId': string}, callback: (error: any, body: Customer, response: any) => void) => Request;
                };
                'subscriptions': {
                    'activate': (parameters: {'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'changePlan': (parameters: {'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'changeRenewalSettings': (parameters: {'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'changeSeats': (parameters: {'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'delete': (parameters: {'customerId': string, 'deletionType': string, 'subscriptionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'insert': (parameters: {'customerAuthToken'?: string, 'customerId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'list': (parameters: {'customerAuthToken'?: string, 'customerId'?: string, 'customerNamePrefix'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: Subscriptions, response: any) => void) => Request;
                    'startPaidService': (parameters: {'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'suspend': (parameters: {'customerId': string, 'subscriptionId': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
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