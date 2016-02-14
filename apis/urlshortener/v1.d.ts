import {Request, RequestCallback} from 'request';

export interface Urlshortener {
    new(options: any): Urlshortener;

    url: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}