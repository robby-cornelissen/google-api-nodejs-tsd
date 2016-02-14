import {Request, RequestCallback} from 'request';

export interface Androidpublisher {
    new(options: any): Androidpublisher;

    edits: {
        commit: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        validate: (params: any, callback: RequestCallback) => Request;
        apklistings: {
            delete: (params: any, callback: RequestCallback) => Request;
            deleteall: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        apks: {
            addexternallyhosted: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            upload: (params: any, callback: RequestCallback) => Request;
        };
        details: {
            get: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        expansionfiles: {
            get: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            upload: (params: any, callback: RequestCallback) => Request;
        };
        images: {
            delete: (params: any, callback: RequestCallback) => Request;
            deleteall: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            upload: (params: any, callback: RequestCallback) => Request;
        };
        listings: {
            delete: (params: any, callback: RequestCallback) => Request;
            deleteall: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        testers: {
            get: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        tracks: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
    };
    entitlements: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    inappproducts: {
        batch: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    purchases: {
        products: {
            get: (params: any, callback: RequestCallback) => Request;
        };
        subscriptions: {
            cancel: (params: any, callback: RequestCallback) => Request;
            defer: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            refund: (params: any, callback: RequestCallback) => Request;
            revoke: (params: any, callback: RequestCallback) => Request;
        };
    };
}