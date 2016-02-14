import {Request, RequestCallback} from 'request';

export interface Androidenterprise {
    new(options: any): Androidenterprise;

    collections: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    collectionviewers: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    devices: {
        get: (params: any, callback: RequestCallback) => Request;
        getState: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        setState: (params: any, callback: RequestCallback) => Request;
    };
    enterprises: {
        delete: (params: any, callback: RequestCallback) => Request;
        enroll: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getStoreLayout: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        sendTestPushNotification: (params: any, callback: RequestCallback) => Request;
        setAccount: (params: any, callback: RequestCallback) => Request;
        setStoreLayout: (params: any, callback: RequestCallback) => Request;
        unenroll: (params: any, callback: RequestCallback) => Request;
    };
    entitlements: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    grouplicenses: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    grouplicenseusers: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    installs: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    permissions: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    products: {
        approve: (params: any, callback: RequestCallback) => Request;
        generateApprovalUrl: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getAppRestrictionsSchema: (params: any, callback: RequestCallback) => Request;
        getPermissions: (params: any, callback: RequestCallback) => Request;
        updatePermissions: (params: any, callback: RequestCallback) => Request;
    };
    storelayoutclusters: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    storelayoutpages: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    users: {
        generateToken: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getAvailableProductSet: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        revokeToken: (params: any, callback: RequestCallback) => Request;
        setAvailableProductSet: (params: any, callback: RequestCallback) => Request;
    };
}