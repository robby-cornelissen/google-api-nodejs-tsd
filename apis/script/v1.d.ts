import {Request, RequestCallback} from 'request';

export interface Script {
    new(options: any): Script;

    scripts: {
        run: (params: any, callback: RequestCallback) => Request;
    };
}