import {Request, RequestCallback} from 'request';

export interface Freebase {
    new(options: any): Freebase;

    reconcile: (params: any, callback: RequestCallback) => Request;
    search: (params: any, callback: RequestCallback) => Request;
}