import {Request, RequestCallback} from 'request';

export interface Reseller {
    new(options: any): Reseller;

    customers: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    subscriptions: {
        activate: (params: any, callback: RequestCallback) => Request;
        changePlan: (params: any, callback: RequestCallback) => Request;
        changeRenewalSettings: (params: any, callback: RequestCallback) => Request;
        changeSeats: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        startPaidService: (params: any, callback: RequestCallback) => Request;
        suspend: (params: any, callback: RequestCallback) => Request;
    };
}