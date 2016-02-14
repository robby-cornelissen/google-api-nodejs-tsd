import {Request, RequestCallback} from 'request';

export interface Bigquery {
    new(options: any): Bigquery;

    datasets: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    jobs: {
        cancel: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getQueryResults: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        query: (params: any, callback: RequestCallback) => Request;
    };
    projects: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    tabledata: {
        insertAll: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    tables: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}