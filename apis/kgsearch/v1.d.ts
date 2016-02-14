import {Request, RequestCallback} from 'request';

export interface Kgsearch {
    new(options: any): Kgsearch;

    entities: {
        search: (params: any, callback: RequestCallback) => Request;
    };
}