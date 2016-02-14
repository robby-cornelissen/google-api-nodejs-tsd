import {Request, RequestCallback} from 'request';

export interface Adsense {
    new(options: any): Adsense;

    accounts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        adclients: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        adunits: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            customchannels: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
        customchannels: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            adunits: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
        reports: {
            generate: (params: any, callback: RequestCallback) => Request;
            saved: {
                generate: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
        savedadstyles: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        urlchannels: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    adclients: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    adunits: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        customchannels: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    customchannels: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        adunits: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    reports: {
        generate: (params: any, callback: RequestCallback) => Request;
        saved: {
            generate: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    savedadstyles: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    urlchannels: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}