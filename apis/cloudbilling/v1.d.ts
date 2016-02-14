import {Request, RequestCallback} from 'request';

export interface Cloudbilling {
    new(options: any): Cloudbilling;

    billingAccounts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        projects: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    projects: {
        getBillingInfo: (params: any, callback: RequestCallback) => Request;
        updateBillingInfo: (params: any, callback: RequestCallback) => Request;
    };
}