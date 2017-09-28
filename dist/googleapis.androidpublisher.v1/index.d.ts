// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        androidpublisher(version: string): any;
        androidpublisher(version: 'v1'): androidpublisher.v1.Androidpublisher;
    }

    namespace androidpublisher {
        namespace v1 {
            export interface Androidpublisher {
                new(options: any): Androidpublisher;

                'purchases': {
                    'cancel': (parameters: { [key: string]: any; 'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: SubscriptionPurchase, response: any) => void) => Request;
                };

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
