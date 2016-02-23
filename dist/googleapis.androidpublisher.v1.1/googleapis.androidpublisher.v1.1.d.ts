// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        androidpublisher(version: string): any;
        androidpublisher(version: 'v1.1'): androidpublisher.v1_1.Androidpublisher;
    }

    namespace androidpublisher {
        namespace v1_1 {
            export interface Androidpublisher {
                new(options: any): Androidpublisher;

                'inapppurchases': {
                    'get': (parameters: {'packageName': string, 'productId': string, 'token': string}, callback: (error: any, body: InappPurchase, response: any) => void) => Request;
                };
                'purchases': {
                    'cancel': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: SubscriptionPurchase, response: any) => void) => Request;
                };

            }

            export interface InappPurchase {
                'consumptionState': number;
                'developerPayload': string;
                'kind': string;
                'purchaseState': number;
                'purchaseTime': string;
            }

            export interface SubscriptionPurchase {
                'autoRenewing': boolean;
                'initiationTimestampMsec': string;
                'kind': string;
                'validUntilTimestampMsec': string;
            }

        }
    }
}