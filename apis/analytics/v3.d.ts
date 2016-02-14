import {Request, RequestCallback} from 'request';

export interface Analytics {
    new(options: any): Analytics;

    data: {
        ga: {
            get: (params: any, callback: RequestCallback) => Request;
        };
        mcf: {
            get: (params: any, callback: RequestCallback) => Request;
        };
        realtime: {
            get: (params: any, callback: RequestCallback) => Request;
        };
    };
    management: {
        accountSummaries: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        accountUserLinks: {
            delete: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        accounts: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        customDataSources: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        customDimensions: {
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        customMetrics: {
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        experiments: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        filters: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        goals: {
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        profileFilterLinks: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        profileUserLinks: {
            delete: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        profiles: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        segments: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        unsampledReports: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        uploads: {
            deleteUploadData: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            uploadData: (params: any, callback: RequestCallback) => Request;
        };
        webPropertyAdWordsLinks: {
            delete: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        webproperties: {
            get: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            patch: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        webpropertyUserLinks: {
            delete: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
    };
    metadata: {
        columns: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    provisioning: {
        createAccountTicket: (params: any, callback: RequestCallback) => Request;
    };
}