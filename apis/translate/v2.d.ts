import {Request, RequestCallback} from 'request';

export interface Translate {
    new(options: any): Translate;

    detections: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    languages: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    translations: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}