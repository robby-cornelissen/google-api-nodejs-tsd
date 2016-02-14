import {Request, RequestCallback} from 'request';

export interface Prediction {
    new(options: any): Prediction;

    hostedmodels: {
        predict: (params: any, callback: RequestCallback) => Request;
    };
    trainedmodels: {
        analyze: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        predict: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}