import {Request, RequestCallback} from 'request';

export interface Dataflow {
    new(options: any): Dataflow;

    projects: {
        workerMessages: (params: any, callback: RequestCallback) => Request;
        jobs: {
            create: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            getMetrics: (params: any, callback: RequestCallback) => Request;
            messages: {
                list: (params: any, callback: RequestCallback) => Request;
            };
            workItems: {
                reportStatus: (params: any, callback: RequestCallback) => Request;
                lease: (params: any, callback: RequestCallback) => Request;
            };
        };
    };
}