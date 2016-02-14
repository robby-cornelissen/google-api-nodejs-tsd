import {Request, RequestCallback} from 'request';

export interface Civicinfo {
    new(options: any): Civicinfo;

    divisions: {
        search: (params: any, callback: RequestCallback) => Request;
    };
    elections: {
        electionQuery: (params: any, callback: RequestCallback) => Request;
        voterInfoQuery: (params: any, callback: RequestCallback) => Request;
    };
    representatives: {
        representativeInfoByAddress: (params: any, callback: RequestCallback) => Request;
        representativeInfoByDivision: (params: any, callback: RequestCallback) => Request;
    };
}