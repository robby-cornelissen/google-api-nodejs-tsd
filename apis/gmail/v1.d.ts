import {Request, RequestCallback} from 'request';

export interface Gmail {
    new(options: any): Gmail;

    users: {
        getProfile: (params: any, callback: RequestCallback) => Request;
        stop: (params: any, callback: RequestCallback) => Request;
        watch: (params: any, callback: RequestCallback) => Request;
        drafts: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            send: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        history: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        labels: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        messages: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            import: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            modify: (params: any, callback: RequestCallback) => Request;
            send: (params: any, callback: RequestCallback) => Request;
            trash: (params: any, callback: RequestCallback) => Request;
            untrash: (params: any, callback: RequestCallback) => Request;
            attachments: {
                get: (params: any, callback: RequestCallback) => Request;
            };
        };
        threads: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            modify: (params: any, callback: RequestCallback) => Request;
            trash: (params: any, callback: RequestCallback) => Request;
            untrash: (params: any, callback: RequestCallback) => Request;
        };
    };
}