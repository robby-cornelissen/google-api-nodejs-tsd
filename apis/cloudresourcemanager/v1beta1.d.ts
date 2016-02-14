import {Request, RequestCallback} from 'request';

export interface Cloudresourcemanager {
    new(options: any): Cloudresourcemanager;

    projects: {
        create: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        undelete: (params: any, callback: RequestCallback) => Request;
        getIamPolicy: (params: any, callback: RequestCallback) => Request;
        setIamPolicy: (params: any, callback: RequestCallback) => Request;
        testIamPermissions: (params: any, callback: RequestCallback) => Request;
    };
    organizations: {
        list: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        setIamPolicy: (params: any, callback: RequestCallback) => Request;
        getIamPolicy: (params: any, callback: RequestCallback) => Request;
        testIamPermissions: (params: any, callback: RequestCallback) => Request;
    };
}