/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        admin(version: string): any;
        admin(version: 'datatransfer_v1'): admin.datatransfer_v1.Admin;
    }

    namespace admin {
        namespace datatransfer_v1 {
            export interface Admin {
                new(options: any): Admin;

                'applications': {
                    'get': (parameters: {'applicationId': string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'list': (parameters: {'customerId'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: ApplicationsListResponse, response: any) => void) => Request;
                };
                'transfers': {
                    'get': (parameters: {'dataTransferId': string}, callback: (error: any, body: DataTransfer, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: DataTransfer, response: any) => void) => Request;
                    'list': (parameters: {'customerId'?: string, 'maxResults'?: number, 'newOwnerUserId'?: string, 'oldOwnerUserId'?: string, 'pageToken'?: string, 'status'?: string}, callback: (error: any, body: DataTransfersListResponse, response: any) => void) => Request;
                };

            }

            interface Application {
                'etag': string;
                'id': string;
                'kind': string;
                'name': string;
                'transferParams': ApplicationTransferParam[];
            }

            interface ApplicationDataTransfer {
                'applicationId': string;
                'applicationTransferParams': ApplicationTransferParam[];
                'applicationTransferStatus': string;
            }

            interface ApplicationTransferParam {
                'key': string;
                'value': string[];
            }

            interface ApplicationsListResponse {
                'applications': Application[];
                'etag': string;
                'kind': string;
                'nextPageToken': string;
            }

            interface DataTransfer {
                'applicationDataTransfers': ApplicationDataTransfer[];
                'etag': string;
                'id': string;
                'kind': string;
                'newOwnerUserId': string;
                'oldOwnerUserId': string;
                'overallTransferStatusCode': string;
                'requestTime': string;
            }

            interface DataTransfersListResponse {
                'dataTransfers': DataTransfer[];
                'etag': string;
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}