import {Request, RequestCallback} from 'request';

export interface Adexchangebuyer {
    new(options: any): Adexchangebuyer;

    accounts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    billingInfo: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    budget: {
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    creatives: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    directDeals: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    performanceReport: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    pretargetingConfig: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}