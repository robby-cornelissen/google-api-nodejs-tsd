import {Request, RequestCallback} from 'request';

export interface Coordinate {
    new(options: any): Coordinate;

    customFieldDef: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    jobs: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    location: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    schedule: {
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    team: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    worker: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}