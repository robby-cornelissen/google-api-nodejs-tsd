import {Request, RequestCallback} from 'request';

export interface Webmasters {
    new(options: any): Webmasters;

    searchanalytics: {
        query: (params: any, callback: RequestCallback) => Request;
    };
    sitemaps: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        submit: (params: any, callback: RequestCallback) => Request;
    };
    sites: {
        add: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    urlcrawlerrorscounts: {
        query: (params: any, callback: RequestCallback) => Request;
    };
    urlcrawlerrorssamples: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        markAsFixed: (params: any, callback: RequestCallback) => Request;
    };
}