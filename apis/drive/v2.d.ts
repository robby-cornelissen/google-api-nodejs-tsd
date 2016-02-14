import {Request, RequestCallback} from 'request';

export interface Drive {
    new(options: any): Drive;

    about: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    apps: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    changes: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        watch: (params: any, callback: RequestCallback) => Request;
    };
    channels: {
        stop: (params: any, callback: RequestCallback) => Request;
    };
    children: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    comments: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    files: {
        copy: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        emptyTrash: (params: any, callback: RequestCallback) => Request;
        export: (params: any, callback: RequestCallback) => Request;
        generateIds: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        touch: (params: any, callback: RequestCallback) => Request;
        trash: (params: any, callback: RequestCallback) => Request;
        untrash: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        watch: (params: any, callback: RequestCallback) => Request;
    };
    parents: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    permissions: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getIdForEmail: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    properties: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    realtime: {
        get: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    replies: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    revisions: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}