import {Request, RequestCallback} from 'request';

export interface Fitness {
    new(options: any): Fitness;

    users: {
        dataSources: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            datasets: {
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
            };
        };
        dataset: {
            aggregate: (params: any, callback: RequestCallback) => Request;
        };
        sessions: {
            delete: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
    };
}