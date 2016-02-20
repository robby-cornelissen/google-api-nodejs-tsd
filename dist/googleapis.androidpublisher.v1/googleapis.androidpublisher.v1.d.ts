/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        androidpublisher(version: string): any;
        androidpublisher(version: 'v1'): androidpublisher.v1.Androidpublisher;
    }

    namespace androidpublisher {
        namespace v1 {
            export interface Androidpublisher {
                new(options: any): Androidpublisher;

                'purchases': {
                    'cancel': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: SubscriptionPurchase, response: any) => void) => Request;
                };

            }

            interface SubscriptionPurchase {
                'autoRenewing': boolean;
                'initiationTimestampMsec': string;
                'kind': string;
                'validUntilTimestampMsec': string;
            }

        }
    }
}