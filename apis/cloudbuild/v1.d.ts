import {Request, RequestCallback} from 'request';

export interface Cloudbuild {
    new(options: any): Cloudbuild;

    projects: {
        builds: {
            get: (params: any, callback: RequestCallback) => Request;
            create: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            cancel: (params: any, callback: RequestCallback) => Request;
        };
    };
    operations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}