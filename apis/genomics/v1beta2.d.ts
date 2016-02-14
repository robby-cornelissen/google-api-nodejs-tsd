import {Request, RequestCallback} from 'request';

export interface Genomics {
    new(options: any): Genomics;

    annotationSets: {
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    annotations: {
        batchCreate: (params: any, callback: RequestCallback) => Request;
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    callsets: {
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    datasets: {
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        undelete: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    experimental: {
        jobs: {
            create: (params: any, callback: RequestCallback) => Request;
        };
    };
    jobs: {
        cancel: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
    };
    readgroupsets: {
        delete: (params: any, callback: RequestCallback) => Request;
        export: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        import: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        coveragebuckets: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    reads: {
        search: (params: any, callback: RequestCallback) => Request;
    };
    references: {
        get: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        bases: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    referencesets: {
        get: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
    };
    variants: {
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    variantsets: {
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        export: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        importVariants: (params: any, callback: RequestCallback) => Request;
        mergeVariants: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        search: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}