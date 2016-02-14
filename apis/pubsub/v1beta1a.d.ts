import {Request, RequestCallback} from 'request';

export interface Pubsub {
    new(options: any): Pubsub;

    topics: {
        create: (params: any, callback: RequestCallback) => Request;
        publish: (params: any, callback: RequestCallback) => Request;
        publishBatch: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
    };
    subscriptions: {
        create: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        modifyPushConfig: (params: any, callback: RequestCallback) => Request;
        pull: (params: any, callback: RequestCallback) => Request;
        pullBatch: (params: any, callback: RequestCallback) => Request;
        modifyAckDeadline: (params: any, callback: RequestCallback) => Request;
        acknowledge: (params: any, callback: RequestCallback) => Request;
    };
}