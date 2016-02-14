import {Request, RequestCallback} from 'request';

export interface Blogger {
    new(options: any): Blogger;

    blogUserInfos: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    blogs: {
        get: (params: any, callback: RequestCallback) => Request;
        getByUrl: (params: any, callback: RequestCallback) => Request;
        listByUser: (params: any, callback: RequestCallback) => Request;
    };
    comments: {
        approve: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listByBlog: (params: any, callback: RequestCallback) => Request;
        markAsSpam: (params: any, callback: RequestCallback) => Request;
        removeContent: (params: any, callback: RequestCallback) => Request;
    };
    pageViews: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    pages: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        publish: (params: any, callback: RequestCallback) => Request;
        revert: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    postUserInfos: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    posts: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getByPath: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        publish: (params: any, callback: RequestCallback) => Request;
        revert: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    users: {
        get: (params: any, callback: RequestCallback) => Request;
    };
}