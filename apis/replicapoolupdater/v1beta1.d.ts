import {Request, RequestCallback} from 'request';

export interface Replicapoolupdater {
    new(options: any): Replicapoolupdater;

    rollingUpdates: {
        cancel: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listInstanceUpdates: (params: any, callback: RequestCallback) => Request;
        pause: (params: any, callback: RequestCallback) => Request;
        resume: (params: any, callback: RequestCallback) => Request;
        rollback: (params: any, callback: RequestCallback) => Request;
    };
    zoneOperations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}