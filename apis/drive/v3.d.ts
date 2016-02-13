import {Request, RequestCallback} from 'request';

export interface Drive {
    new(options: any): Drive;

        about: {
            get: (params: any, callback: RequestCallback) => Request;
        };
        changes: {
            getStartPageToken: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            watch: (params: any, callback: RequestCallback) => Request;
        };
        channels: {
            stop: (params: any, callback: RequestCallback) => Request;
        };
        comments: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        files: {
            copy: (params: any, callback: RequestCallback) => Request;
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            emptyTrash: (params: any, callback: RequestCallback) => Request;
            export: (params: any, callback: RequestCallback) => Request;
            generateIds: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
            watch: (params: any, callback: RequestCallback) => Request;
        };
        permissions: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        replies: {
            create: (params: any, callback: RequestCallback) => Request;
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        revisions: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
    }