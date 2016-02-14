import {Request, RequestCallback} from 'request';

export interface Vision {
    new(options: any): Vision;

    images: {
        annotate: (params: any, callback: RequestCallback) => Request;
    };
}