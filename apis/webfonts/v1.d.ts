import {Request, RequestCallback} from 'request';

export interface Webfonts {
    new(options: any): Webfonts;

    webfonts: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}