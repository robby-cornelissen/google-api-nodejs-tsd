import {Request, RequestCallback} from 'request';

export interface Pagespeedonline {
    new(options: any): Pagespeedonline;

    pagespeedapi: {
        runpagespeed: (params: any, callback: RequestCallback) => Request;
    };
}