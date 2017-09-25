// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        admin(version: string): any;
        admin(version: 'datatransfer_v1'): admin.datatransfer_v1.Admin;
    }

    namespace admin {
        namespace datatransfer_v1 {
            export interface Admin {
                new(options: any): Admin;

                'applications': {
                    'get': (parameters: { [key: string]: any; 'applicationId': string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'customerId'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: ApplicationsListResponse, response: any) => void) => Request;
                };
                'transfers': {
                    'get': (parameters: { [key: string]: any; 'dataTransferId': string}, callback: (error: any, body: DataTransfer, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: DataTransfer, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'customerId'?: string, 'maxResults'?: number, 'newOwnerUserId'?: string, 'oldOwnerUserId'?: string, 'pageToken'?: string, 'status'?: string}, callback: (error: any, body: DataTransfersListResponse, response: any) => void) => Request;
                };

            }

            export interface Application {
                'etag': string;
                'id': string;
                'kind': string;
                'name': string;
                'transferParams': ApplicationTransferParam[];
            }

            export interface ApplicationDataTransfer {
                'applicationId': string;
                'applicationTransferParams': ApplicationTransferParam[];
                'applicationTransferStatus': string;
            }

            export interface ApplicationTransferParam {
                'key': string;
                'value': string[];
            }

            export interface ApplicationsListResponse {
                'applications': Application[];
                'etag': string;
                'kind': string;
                'nextPageToken': string;
            }

            export interface DataTransfer {
                'applicationDataTransfers': ApplicationDataTransfer[];
                'etag': string;
                'id': string;
                'kind': string;
                'newOwnerUserId': string;
                'oldOwnerUserId': string;
                'overallTransferStatusCode': string;
                'requestTime': string;
            }

            export interface DataTransfersListResponse {
                'dataTransfers': DataTransfer[];
                'etag': string;
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}
