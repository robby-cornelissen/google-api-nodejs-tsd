import {Request, RequestCallback} from 'request';

export interface Drive {
    new(options: any): Drive;

    files: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}