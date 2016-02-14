import {Request, RequestCallback} from 'request';

export interface Resourceviews {
    new(options: any): Resourceviews;

    zoneOperations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    zoneViews: {
        addResources: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getService: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listResources: (params: any, callback: RequestCallback) => Request;
        removeResources: (params: any, callback: RequestCallback) => Request;
        setService: (params: any, callback: RequestCallback) => Request;
    };
}