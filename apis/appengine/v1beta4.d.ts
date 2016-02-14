import {Request, RequestCallback} from 'request';

export interface Appengine {
    new(options: any): Appengine;

    apps: {
        get: (params: any, callback: RequestCallback) => Request;
        modules: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            versions: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
        operations: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
}