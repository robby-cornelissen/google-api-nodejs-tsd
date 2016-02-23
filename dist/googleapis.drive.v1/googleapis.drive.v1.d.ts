// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        drive(version: string): any;
        drive(version: 'v1'): drive.v1.Drive;
    }

    namespace drive {
        namespace v1 {
            export interface Drive {
                new(options: any): Drive;

                'files': {
                    'get': (parameters: {'id': string, 'projection'?: string, 'updateViewedDate'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: File, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'newRevision'?: boolean, 'updateModifiedDate'?: boolean, 'updateViewedDate'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'update': (parameters: {'id': string, 'newRevision'?: boolean, 'updateModifiedDate'?: boolean, 'updateViewedDate'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                };

            }

            export interface File {
                'createdDate': string;
                'description': string;
                'downloadUrl': string;
                'etag': string;
                'fileExtension': string;
                'fileSize': string;
                'id': string;
                'indexableText': {
                    'text': string;
                };
                'kind': string;
                'labels': {
                    'hidden': boolean;
                    'starred': boolean;
                    'trashed': boolean;
                };
                'lastViewedDate': string;
                'md5Checksum': string;
                'mimeType': string;
                'modifiedByMeDate': string;
                'modifiedDate': string;
                'parentsCollection': {
                    'id': string;
                    'parentLink': string;
                }[];
                'selfLink': string;
                'title': string;
                'userPermission': Permission;
            }

            export interface Permission {
                'additionalRoles': string[];
                'etag': string;
                'kind': string;
                'role': string;
                'type': string;
            }

        }
    }
}