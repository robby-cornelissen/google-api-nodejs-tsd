import {Request, RequestCallback} from 'request';

export interface Genomics {
    new(options: any): Genomics;

    datasets: {
        list: (params: any, callback: RequestCallback) => Request;
        create: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        undelete: (params: any, callback: RequestCallback) => Request;
        setIamPolicy: (params: any, callback: RequestCallback) => Request;
        getIamPolicy: (params: any, callback: RequestCallback) => Request;
        testIamPermissions: (params: any, callback: RequestCallback) => Request;
    };
    operations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        cancel: (params: any, callback: RequestCallback) => Request;
    };
    readgroupsets: {
        import: (params: any, callback: RequestCallback) => Request;
        export: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        coveragebuckets: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    reads: {
        search: (params: any, callback: RequestCallback) => Request;
        stream: (params: any, callback: RequestCallback) => Request;
    };
    referencesets: {
        search: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
    };
    references: {
        search: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        bases: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    variants: {
        import: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        create: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        stream: (params: any, callback: RequestCallback) => Request;
    };
    variantsets: {
        create: (params: any, callback: RequestCallback) => Request;
        export: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
    };
    callsets: {
        search: (params: any, callback: RequestCallback) => Request;
        create: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
    };
}