import {Request, RequestCallback} from 'request';

export interface Content {
    new(options: any): Content;

    orders: {
        acknowledge: (params: any, callback: RequestCallback) => Request;
        advancetestorder: (params: any, callback: RequestCallback) => Request;
        cancel: (params: any, callback: RequestCallback) => Request;
        cancellineitem: (params: any, callback: RequestCallback) => Request;
        createtestorder: (params: any, callback: RequestCallback) => Request;
        custombatch: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getbymerchantorderid: (params: any, callback: RequestCallback) => Request;
        gettestordertemplate: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        refund: (params: any, callback: RequestCallback) => Request;
        returnlineitem: (params: any, callback: RequestCallback) => Request;
        shiplineitems: (params: any, callback: RequestCallback) => Request;
        updatemerchantorderid: (params: any, callback: RequestCallback) => Request;
        updateshipment: (params: any, callback: RequestCallback) => Request;
    };
}