// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        siteVerification(version: string): any;
        siteVerification(version: 'v1'): siteVerification.v1.Siteverification;
    }

    namespace siteVerification {
        namespace v1 {
            export interface Siteverification {
                new(options: any): Siteverification;

                'webResource': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: SiteVerificationWebResourceResource, response: any) => void) => Request;
                    'getToken': (parameters: any, callback: (error: any, body: SiteVerificationWebResourceGettokenResponse, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'verificationMethod': string}, callback: (error: any, body: SiteVerificationWebResourceResource, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: SiteVerificationWebResourceListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: SiteVerificationWebResourceResource, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: SiteVerificationWebResourceResource, response: any) => void) => Request;
                };

            }

            export interface SiteVerificationWebResourceGettokenRequest {
                'site': {
                    'identifier': string;
                    'type': string;
                };
                'verificationMethod': string;
            }

            export interface SiteVerificationWebResourceGettokenResponse {
                'method': string;
                'token': string;
            }

            export interface SiteVerificationWebResourceListResponse {
                'items': SiteVerificationWebResourceResource[];
            }

            export interface SiteVerificationWebResourceResource {
                'id': string;
                'owners': string[];
                'site': {
                    'identifier': string;
                    'type': string;
                };
            }

        }
    }
}
