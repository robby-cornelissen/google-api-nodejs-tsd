// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        licensing(version: string): any;
        licensing(version: 'v1'): licensing.v1.Licensing;
    }

    namespace licensing {
        namespace v1 {
            export interface Licensing {
                new(options: any): Licensing;

                'licenseAssignments': {
                    'delete': (parameters: { [key: string]: any; 'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'productId': string, 'skuId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                    'listForProduct': (parameters: { [key: string]: any; 'customerId': string, 'maxResults'?: number, 'pageToken'?: string, 'productId': string}, callback: (error: any, body: LicenseAssignmentList, response: any) => void) => Request;
                    'listForProductAndSku': (parameters: { [key: string]: any; 'customerId': string, 'maxResults'?: number, 'pageToken'?: string, 'productId': string, 'skuId': string}, callback: (error: any, body: LicenseAssignmentList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                };

            }

            export interface LicenseAssignment {
                'etags': string;
                'kind': string;
                'productId': string;
                'productName': string;
                'selfLink': string;
                'skuId': string;
                'skuName': string;
                'userId': string;
            }

            export interface LicenseAssignmentInsert {
                'userId': string;
            }

            export interface LicenseAssignmentList {
                'etag': string;
                'items': LicenseAssignment[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}
