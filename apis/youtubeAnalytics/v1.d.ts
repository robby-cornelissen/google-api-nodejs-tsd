import {Request, RequestCallback} from 'request';

export interface Youtubeanalytics {
    new(options: any): Youtubeanalytics;

    batchReportDefinitions: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    batchReports: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    groupItems: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    groups: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    reports: {
        query: (params: any, callback: RequestCallback) => Request;
    };
}