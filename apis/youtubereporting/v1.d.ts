import {Request, RequestCallback} from 'request';

export interface Youtubereporting {
    new(options: any): Youtubereporting;

    media: {
        download: (params: any, callback: RequestCallback) => Request;
    };
    reportTypes: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    jobs: {
        create: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        reports: {
            list: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
        };
    };
}