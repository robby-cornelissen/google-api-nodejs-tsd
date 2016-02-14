import {Request, RequestCallback} from 'request';

export interface Partners {
    new(options: any): Partners;

    userEvents: {
        log: (params: any, callback: RequestCallback) => Request;
    };
    clientMessages: {
        log: (params: any, callback: RequestCallback) => Request;
    };
    userStates: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    companies: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        leads: {
            create: (params: any, callback: RequestCallback) => Request;
        };
    };
}