import {Request, RequestCallback} from 'request';

export interface Iam {
    new(options: any): Iam;

    projects: {
        serviceAccounts: {
            list: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            create: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            signBlob: (params: any, callback: RequestCallback) => Request;
            getIamPolicy: (params: any, callback: RequestCallback) => Request;
            setIamPolicy: (params: any, callback: RequestCallback) => Request;
            testIamPermissions: (params: any, callback: RequestCallback) => Request;
            keys: {
                list: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
            };
        };
    };
}