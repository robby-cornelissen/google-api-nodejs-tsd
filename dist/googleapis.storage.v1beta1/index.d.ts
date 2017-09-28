// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        storage(version: string): any;
        storage(version: 'v1beta1'): storage.v1beta1.Storage;
    }

    namespace storage {
        namespace v1beta1 {
            export interface Storage {
                new(options: any): Storage;

                'bucketAccessControls': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string}, callback: (error: any, body: BucketAccessControls, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                };
                'buckets': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'max-results'?: number, 'pageToken'?: string, 'projectId': string, 'projection'?: string}, callback: (error: any, body: Buckets, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                };
                'objectAccessControls': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'object': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'object': string}, callback: (error: any, body: ObjectAccessControls, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                };
                'objects': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'object': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'object': string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'name'?: string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'delimiter'?: string, 'max-results'?: number, 'pageToken'?: string, 'prefix'?: string, 'projection'?: string}, callback: (error: any, body: Objects, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'object': string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'object': string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                };

            }

            export interface Bucket {
                'acl': BucketAccessControl[];
                'defaultObjectAcl': ObjectAccessControl[];
                'id': string;
                'kind': string;
                'location': string;
                'owner': {
                    'entity': string;
                    'entityId': string;
                };
                'projectId': string;
                'selfLink': string;
                'timeCreated': string;
                'website': {
                    'mainPageSuffix': string;
                    'notFoundPage': string;
                };
            }

            export interface BucketAccessControl {
                'bucket': string;
                'domain': string;
                'email': string;
                'entity': string;
                'entityId': string;
                'id': string;
                'kind': string;
                'role': string;
                'selfLink': string;
            }

            export interface BucketAccessControls {
                'items': BucketAccessControl[];
                'kind': string;
            }

            export interface Buckets {
                'items': Bucket[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Object {
                'acl': ObjectAccessControl[];
                'bucket': string;
                'cacheControl': string;
                'contentDisposition': string;
                'contentEncoding': string;
                'contentLanguage': string;
                'id': string;
                'kind': string;
                'media': {
                    'algorithm': string;
                    'contentType': string;
                    'data': string;
                    'hash': string;
                    'length': string;
                    'link': string;
                    'timeCreated': string;
                };
                'metadata': {
                    [name: string]: string
                ;
                };
                'name': string;
                'owner': {
                    'entity': string;
                    'entityId': string;
                };
                'selfLink': string;
            }

            export interface ObjectAccessControl {
                'bucket': string;
                'domain': string;
                'email': string;
                'entity': string;
                'entityId': string;
                'id': string;
                'kind': string;
                'object': string;
                'role': string;
                'selfLink': string;
            }

            export interface ObjectAccessControls {
                'items': ObjectAccessControl[];
                'kind': string;
            }

            export interface Objects {
                'items': Object[];
                'kind': string;
                'nextPageToken': string;
                'prefixes': string[];
            }

        }
    }
}
