import {Request, RequestCallback} from 'request';

export interface Cloudtrace {
    new(options: any): Cloudtrace;

    projects: {
        patchTraces: (params: any, callback: RequestCallback) => Request;
        traces: {
            list: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
        };
    };
}