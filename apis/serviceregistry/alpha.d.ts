import {Request, RequestCallback} from 'request';

export interface Serviceregistry {
    new(options: any): Serviceregistry;

    endpoints: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    operations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}