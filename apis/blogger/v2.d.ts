import {Request, RequestCallback} from 'request';

export interface Blogger {
    new(options: any): Blogger;

    blogs: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    comments: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    pages: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    posts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    users: {
        get: (params: any, callback: RequestCallback) => Request;
        blogs: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
}