import {Request, RequestCallback} from 'request';

export interface Dns {
    new(options: any): Dns;

    changes: {
        create: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    managedZones: {
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    projects: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    resourceRecordSets: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}