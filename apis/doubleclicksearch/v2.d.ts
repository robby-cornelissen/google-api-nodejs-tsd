import {Request, RequestCallback} from 'request';

export interface Doubleclicksearch {
    new(options: any): Doubleclicksearch;

    conversion: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        updateAvailability: (params: any, callback: RequestCallback) => Request;
    };
    reports: {
        generate: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getFile: (params: any, callback: RequestCallback) => Request;
        request: (params: any, callback: RequestCallback) => Request;
    };
    savedColumns: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}