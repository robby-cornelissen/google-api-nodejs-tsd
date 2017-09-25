// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        analytics(version: string): any;
        analytics(version: 'v2.4'): analytics.v2_4.Analytics;
    }

    namespace analytics {
        namespace v2_4 {
            export interface Analytics {
                new(options: any): Analytics;

                'data': {
                    'get': (parameters: { [key: string]: any; 'dimensions'?: string, 'end-date': string, 'filters'?: string, 'ids': string, 'max-results'?: number, 'metrics': string, 'segment'?: string, 'sort'?: string, 'start-date': string, 'start-index'?: number}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'management': {
                    'accounts': {
                        'list': (parameters: { [key: string]: any; 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: any, response: any) => void) => Request;
                    };
                    'goals': {
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'profileId': string, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    };
                    'profiles': {
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    };
                    'segments': {
                        'list': (parameters: { [key: string]: any; 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: any, response: any) => void) => Request;
                    };
                    'webproperties': {
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: any, response: any) => void) => Request;
                    };
                };

            }
        }
    }
}
