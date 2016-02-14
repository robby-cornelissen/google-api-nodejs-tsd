import {Request, RequestCallback} from 'request';

export interface Androidpublisher {
    new(options: any): Androidpublisher;

    purchases: {
        cancel: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
    };
}