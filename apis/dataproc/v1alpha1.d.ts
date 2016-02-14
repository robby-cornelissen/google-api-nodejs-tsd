import {Request, RequestCallback} from 'request';

export interface Dataproc {
    new(options: any): Dataproc;

    projects: {
        clusters: {
            create: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            agents: {
                create: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
            tasks: {
                lease: (params: any, callback: RequestCallback) => Request;
                report: (params: any, callback: RequestCallback) => Request;
            };
        };
        jobs: {
            submit: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            cancel: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
        };
    };
    operations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        cancel: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
    };
}