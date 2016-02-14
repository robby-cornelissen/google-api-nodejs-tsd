import {Request, RequestCallback} from 'request';

export interface Licensing {
    new(options: any): Licensing;

    licenseAssignments: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        listForProduct: (params: any, callback: RequestCallback) => Request;
        listForProductAndSku: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}