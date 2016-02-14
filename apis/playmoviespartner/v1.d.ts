import {Request, RequestCallback} from 'request';

export interface Playmoviespartner {
    new(options: any): Playmoviespartner;

    accounts: {
        avails: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        orders: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        experienceLocales: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        storeInfos: {
            list: (params: any, callback: RequestCallback) => Request;
            country: {
                get: (params: any, callback: RequestCallback) => Request;
            };
        };
    };
}