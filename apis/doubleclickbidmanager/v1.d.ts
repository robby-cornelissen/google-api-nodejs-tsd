import {Request, RequestCallback} from 'request';

export interface Doubleclickbidmanager {
    new(options: any): Doubleclickbidmanager;

    lineitems: {
        downloadlineitems: (params: any, callback: RequestCallback) => Request;
        uploadlineitems: (params: any, callback: RequestCallback) => Request;
    };
    queries: {
        createquery: (params: any, callback: RequestCallback) => Request;
        deletequery: (params: any, callback: RequestCallback) => Request;
        getquery: (params: any, callback: RequestCallback) => Request;
        listqueries: (params: any, callback: RequestCallback) => Request;
        runquery: (params: any, callback: RequestCallback) => Request;
    };
    reports: {
        listreports: (params: any, callback: RequestCallback) => Request;
    };
    rubicon: {
        notifyproposalchange: (params: any, callback: RequestCallback) => Request;
    };
}