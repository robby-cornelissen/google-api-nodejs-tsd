/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        cloudbilling(version: string): any;
        cloudbilling(version: 'v1'): cloudbilling.v1.Cloudbilling;
    }

    namespace cloudbilling {
        namespace v1 {
            export interface Cloudbilling {
                new(options: any): Cloudbilling;

                'billingAccounts': {
                    'get': (parameters: {'name': string}, callback: (error: any, body: BillingAccount, response: any) => void) => Request;
                    'list': (parameters: {'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListBillingAccountsResponse, response: any) => void) => Request;
                
                    'projects': {
                        'list': (parameters: {'name': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListProjectBillingInfoResponse, response: any) => void) => Request;
                    };
                };
                'projects': {
                    'getBillingInfo': (parameters: {'name': string}, callback: (error: any, body: ProjectBillingInfo, response: any) => void) => Request;
                    'updateBillingInfo': (parameters: {'name': string}, callback: (error: any, body: ProjectBillingInfo, response: any) => void) => Request;
                };

            }

            interface BillingAccount {
                'name': string;
                'open': boolean;
                'displayName': string;
            }

            interface ListBillingAccountsResponse {
                'billingAccounts': BillingAccount[];
                'nextPageToken': string;
            }

            interface ListProjectBillingInfoResponse {
                'projectBillingInfo': ProjectBillingInfo[];
                'nextPageToken': string;
            }

            interface ProjectBillingInfo {
                'name': string;
                'projectId': string;
                'billingAccountName': string;
                'billingEnabled': boolean;
            }

        }
    }
}