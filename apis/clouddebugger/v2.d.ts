import {Request, RequestCallback} from 'request';

export interface Clouddebugger {
    new(options: any): Clouddebugger;

    controller: {
        debuggees: {
            register: (params: any, callback: RequestCallback) => Request;
            breakpoints: {
                list: (params: any, callback: RequestCallback) => Request;
                update: (params: any, callback: RequestCallback) => Request;
            };
        };
    };
    debugger: {
        debuggees: {
            list: (params: any, callback: RequestCallback) => Request;
            breakpoints: {
                set: (params: any, callback: RequestCallback) => Request;
                get: (params: any, callback: RequestCallback) => Request;
                delete: (params: any, callback: RequestCallback) => Request;
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
    };
}