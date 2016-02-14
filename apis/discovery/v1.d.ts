import {Request, RequestCallback} from 'request';

export interface Discovery {
    new(options: any): Discovery;

    apis: {
        getRest: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
}