import {Request, RequestCallback} from 'request';

export interface Dataproc {
    new(options: any): Dataproc;

    media: {
        upload: (params: any, callback: RequestCallback) => Request;
        download: (params: any, callback: RequestCallback) => Request;
    };
}