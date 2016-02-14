import {Request, RequestCallback} from 'request';

export interface Proximitybeacon {
    new(options: any): Proximitybeacon;

    beacons: {
        register: (params: any, callback: RequestCallback) => Request;
        decommission: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        activate: (params: any, callback: RequestCallback) => Request;
        deactivate: (params: any, callback: RequestCallback) => Request;
        attachments: {
            create: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            batchDelete: (params: any, callback: RequestCallback) => Request;
        };
        diagnostics: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    namespaces: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    beaconinfo: {
        getforobserved: (params: any, callback: RequestCallback) => Request;
    };
}