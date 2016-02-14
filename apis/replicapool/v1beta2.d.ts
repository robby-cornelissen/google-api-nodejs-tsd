import {Request, RequestCallback} from 'request';

export interface Replicapool {
    new(options: any): Replicapool;

    instanceGroupManagers: {
        abandonInstances: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        deleteInstances: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        recreateInstances: (params: any, callback: RequestCallback) => Request;
        resize: (params: any, callback: RequestCallback) => Request;
        setInstanceTemplate: (params: any, callback: RequestCallback) => Request;
        setTargetPools: (params: any, callback: RequestCallback) => Request;
    };
    zoneOperations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}