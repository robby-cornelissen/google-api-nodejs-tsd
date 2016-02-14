import {Request, RequestCallback} from 'request';

export interface Customsearch {
    new(options: any): Customsearch;

    cse: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}