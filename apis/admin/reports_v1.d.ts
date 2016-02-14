import {Request, RequestCallback} from 'request';

export interface Admin {
    new(options: any): Admin;

    activities: {
        list: (params: any, callback: RequestCallback) => Request;
        watch: (params: any, callback: RequestCallback) => Request;
    };
    channels: {
        stop: (params: any, callback: RequestCallback) => Request;
    };
    customerUsageReports: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    userUsageReport: {
        get: (params: any, callback: RequestCallback) => Request;
    };
}