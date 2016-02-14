import {Request, RequestCallback} from 'request';

export interface Appsactivity {
    new(options: any): Appsactivity;

    activities: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}