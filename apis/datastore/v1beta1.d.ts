import {Request, RequestCallback} from 'request';

export interface Datastore {
    new(options: any): Datastore;

    datasets: {
        allocateIds: (params: any, callback: RequestCallback) => Request;
        beginTransaction: (params: any, callback: RequestCallback) => Request;
        blindWrite: (params: any, callback: RequestCallback) => Request;
        commit: (params: any, callback: RequestCallback) => Request;
        lookup: (params: any, callback: RequestCallback) => Request;
        rollback: (params: any, callback: RequestCallback) => Request;
        runQuery: (params: any, callback: RequestCallback) => Request;
    };
}