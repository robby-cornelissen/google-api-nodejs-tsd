import {Request, RequestCallback} from 'request';

export interface Storagetransfer {
    new(options: any): Storagetransfer;

    googleServiceAccounts: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    v1: {
        getGoogleServiceAccount: (params: any, callback: RequestCallback) => Request;
    };
    transferJobs: {
        create: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    transferOperations: {
        pause: (params: any, callback: RequestCallback) => Request;
        resume: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        cancel: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
    };
}