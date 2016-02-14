import {Request, RequestCallback} from 'request';

export interface Genomics {
    new(options: any): Genomics;

    operations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        cancel: (params: any, callback: RequestCallback) => Request;
    };
    pipelines: {
        create: (params: any, callback: RequestCallback) => Request;
        run: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
    };
}