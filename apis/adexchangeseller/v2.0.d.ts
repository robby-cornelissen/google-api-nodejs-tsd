import {Request, RequestCallback} from 'request';

export interface Adexchangeseller {
    new(options: any): Adexchangeseller;

    accounts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        adclients: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        alerts: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        customchannels: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        metadata: {
            dimensions: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            metrics: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
        preferreddeals: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        reports: {
            generate: (params: any, callback: RequestCallback) => Request;
            saved: {
                generate: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
        urlchannels: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
}