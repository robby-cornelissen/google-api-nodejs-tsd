import {Request, RequestCallback} from 'request';

export interface People {
    new(options: any): People;

    people: {
        get: (params: any, callback: RequestCallback) => Request;
        getBatchGet: (params: any, callback: RequestCallback) => Request;
        connections: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
}