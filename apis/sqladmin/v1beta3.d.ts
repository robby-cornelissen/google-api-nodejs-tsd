import {Request, RequestCallback} from 'request';

export interface Sqladmin {
    new(options: any): Sqladmin;

    backupRuns: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    flags: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    instances: {
        clone: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        export: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        import: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        promoteReplica: (params: any, callback: RequestCallback) => Request;
        resetSslConfig: (params: any, callback: RequestCallback) => Request;
        restart: (params: any, callback: RequestCallback) => Request;
        restoreBackup: (params: any, callback: RequestCallback) => Request;
        setRootPassword: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    operations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    sslCerts: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    tiers: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}