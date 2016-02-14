import {Request, RequestCallback} from 'request';

export interface Clouduseraccounts {
    new(options: any): Clouduseraccounts;

    globalAccountsOperations: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    groups: {
        addMember: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getIamPolicy: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        removeMember: (params: any, callback: RequestCallback) => Request;
        setIamPolicy: (params: any, callback: RequestCallback) => Request;
        testIamPermissions: (params: any, callback: RequestCallback) => Request;
    };
    linux: {
        getAuthorizedKeysView: (params: any, callback: RequestCallback) => Request;
        getLinuxAccountViews: (params: any, callback: RequestCallback) => Request;
    };
    users: {
        addPublicKey: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        getIamPolicy: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        removePublicKey: (params: any, callback: RequestCallback) => Request;
        setIamPolicy: (params: any, callback: RequestCallback) => Request;
        testIamPermissions: (params: any, callback: RequestCallback) => Request;
    };
}