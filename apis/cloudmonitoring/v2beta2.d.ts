import {Request, RequestCallback} from 'request';

export interface Cloudmonitoring {
    new(options: any): Cloudmonitoring;

    metricDescriptors: {
        create: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    timeseries: {
        list: (params: any, callback: RequestCallback) => Request;
        write: (params: any, callback: RequestCallback) => Request;
    };
    timeseriesDescriptors: {
        list: (params: any, callback: RequestCallback) => Request;
    };
}