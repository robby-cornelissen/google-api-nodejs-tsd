import {Request, RequestCallback} from 'request';

export interface Adsensehost {
    new(options: any): Adsensehost;

    accounts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        adclients: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        adunits: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            getAdCode: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        reports: {
            generate: (params: any, callback: RequestCallback) => Request;
        };
    };
    adclients: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    associationsessions: {
        start: (params: any, callback: RequestCallback) => Request;
        verify: (params: any, callback: RequestCallback) => Request;
    };
    customchannels: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    reports: {
        generate: (params: any, callback: RequestCallback) => Request;
    };
    urlchannels: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}