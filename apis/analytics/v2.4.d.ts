import {Request, RequestCallback} from 'request';

export interface Analytics {
    new(options: any): Analytics;

    data: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    management: {
        accounts: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        goals: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        profiles: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        segments: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        webproperties: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
}