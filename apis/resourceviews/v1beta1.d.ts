import {Request, RequestCallback} from 'request';

export interface Resourceviews {
    new(options: any): Resourceviews;

    regionViews: {
        addresources: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listresources: (params: any, callback: RequestCallback) => Request;
        removeresources: (params: any, callback: RequestCallback) => Request;
    };
    zoneViews: {
        addresources: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listresources: (params: any, callback: RequestCallback) => Request;
        removeresources: (params: any, callback: RequestCallback) => Request;
    };
}