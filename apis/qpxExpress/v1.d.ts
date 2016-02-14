import {Request, RequestCallback} from 'request';

export interface Qpxexpress {
    new(options: any): Qpxexpress;

    trips: {
        search: (params: any, callback: RequestCallback) => Request;
    };
}