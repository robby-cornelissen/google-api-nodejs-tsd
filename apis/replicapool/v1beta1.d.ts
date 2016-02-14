import {Request, RequestCallback} from 'request';

export interface Replicapool {
    new(options: any): Replicapool;

    pools: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        resize: (params: any, callback: RequestCallback) => Request;
        updatetemplate: (params: any, callback: RequestCallback) => Request;
    };
    replicas: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        restart: (params: any, callback: RequestCallback) => Request;
    };
}