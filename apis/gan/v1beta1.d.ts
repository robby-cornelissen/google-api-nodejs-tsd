import {Request, RequestCallback} from 'request';

export interface Gan {
    new(options: any): Gan;

    advertisers: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    ccOffers: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    events: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    links: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    publishers: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    reports: {
        get: (params: any, callback: RequestCallback) => Request;
    };
}