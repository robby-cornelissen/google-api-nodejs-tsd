import {Request, RequestCallback} from 'request';

export interface Dfareporting {
    new(options: any): Dfareporting;

    dimensionValues: {
        query: (params: any, callback: RequestCallback) => Request;
    };
    files: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    reports: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        run: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        files: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    userProfiles: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}