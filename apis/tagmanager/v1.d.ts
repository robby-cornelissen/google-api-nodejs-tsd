import {Request, RequestCallback} from 'request';

export interface Tagmanager {
    new(options: any): Tagmanager;

    accounts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        containers: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            environments: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                patch: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            folders: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
                entities: {
                    list: (params: any, callback: RequestCallback) => Request;
                };
            };
            move_folders: {
                update: (params: any, callback: RequestCallback) => Request;
            };
            reauthorize_environments: {
                update: (params: any, callback: RequestCallback) => Request;
            };
            tags: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            triggers: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            variables: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
            versions: {
                create: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
                publish: (params: any, callback: RequestCallback) => Request;
                restore: (params: any, callback: RequestCallback) => Request;
                undelete: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        };
        permissions: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
    };
}