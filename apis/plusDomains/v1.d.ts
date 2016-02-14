import {Request, RequestCallback} from 'request';

export interface Plusdomains {
    new(options: any): Plusdomains;

    activities: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    audiences: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    circles: {
        addPeople: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        remove: (params: any, callback: RequestCallback) => Request;
        removePeople: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    comments: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    media: {
        insert: (params: any, callback: RequestCallback) => Request;
    };
    people: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listByActivity: (params: any, callback: RequestCallback) => Request;
        listByCircle: (params: any, callback: RequestCallback) => Request;
    };
}