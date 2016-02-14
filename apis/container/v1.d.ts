import {Request, RequestCallback} from 'request';

export interface Container {
    new(options: any): Container;

    projects: {
        zones: {
            getServerconfig: (params: any, callback: RequestCallback) => Request;
            clusters: {
                list: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
            operations: {
                list: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
            };
        };
    };
}