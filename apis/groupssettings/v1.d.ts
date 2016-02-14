import {Request, RequestCallback} from 'request';

export interface Groupssettings {
    new(options: any): Groupssettings;

    groups: {
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}