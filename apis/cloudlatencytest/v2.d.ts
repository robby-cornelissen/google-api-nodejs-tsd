import {Request, RequestCallback} from 'request';

export interface Cloudlatencytest {
    new(options: any): Cloudlatencytest;

    statscollection: {
        updateaggregatedstats: (params: any, callback: RequestCallback) => Request;
        updatestats: (params: any, callback: RequestCallback) => Request;
    };
}