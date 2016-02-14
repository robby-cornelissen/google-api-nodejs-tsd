import {Request, RequestCallback} from 'request';

export interface Groupsmigration {
    new(options: any): Groupsmigration;

    archive: {
        insert: (params: any, callback: RequestCallback) => Request;
    };
}