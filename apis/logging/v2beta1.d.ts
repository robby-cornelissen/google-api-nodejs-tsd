import {Request, RequestCallback} from 'request';

export interface Logging {
    new(options: any): Logging;

    projects: {
        logs: {
            delete: (params: any, callback: RequestCallback) => Request;
        };
        sinks: {
            list: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            create: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
        };
        metrics: {
            list: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            create: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
        };
    };
    entries: {
        write: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    monitoredResourceDescriptors: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}