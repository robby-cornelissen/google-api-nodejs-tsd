import {Request, RequestCallback} from 'request';

export interface Plus {
    new(options: any): Plus;

    activities: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
    };
    comments: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    people: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listByActivity: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
    };
}