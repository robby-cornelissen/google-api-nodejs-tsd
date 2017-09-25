// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        storage(version: string): any;
        storage(version: 'v1beta2'): storage.v1beta2.Storage;
    }

    namespace storage {
        namespace v1beta2 {
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
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'projection'?: string}, callback: (error: any, body: Buckets, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'defaultObjectAccessControls': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string}, callback: (error: any, body: ObjectAccessControls, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'entity': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                };
                'objectAccessControls': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControls, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                };
                'objects': {
                    'compose': (parameters: { [key: string]: any; 'destinationBucket': string, 'destinationObject': string, 'ifGenerationMatch'?: string, 'ifMetagenerationMatch'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'copy': (parameters: { [key: string]: any; 'destinationBucket': string, 'destinationObject': string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'ifSourceGenerationMatch'?: string, 'ifSourceGenerationNotMatch'?: string, 'ifSourceMetagenerationMatch'?: string, 'ifSourceMetagenerationNotMatch'?: string, 'projection'?: string, 'sourceBucket': string, 'sourceGeneration'?: string, 'sourceObject': string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'name'?: string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'delimiter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'projection'?: string, 'versions'?: boolean}, callback: (error: any, body: Objects, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'watchAll': (parameters: { [key: string]: any; 'bucket': string, 'delimiter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'projection'?: string, 'versions'?: boolean}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };

            }

            export interface Bucket {
                'acl': BucketAccessControl[];
                'cors': {
                    'maxAgeSeconds': number;
                    'method': string[];
                    'origin': string[];
                    'responseHeader': string[];
                }[];
                'defaultObjectAcl': ObjectAccessControl[];
                'etag': string;
                'id': string;
                'kind': string;
                'lifecycle': {
                    'rule': {
                        'action': {
                            'type': string;
                        };
                        'condition': {
                            'age': number;
                            'createdBefore': string;
                            'isLive': boolean;
                            'numNewerVersions': number;
                        };
                    }[];
                };
                'location': string;
                'logging': {
                    'logBucket': string;
                    'logObjectPrefix': string;
                };
                'metageneration': string;
                'name': string;
                'owner': {
                    'entity': string;
                    'entityId': string;
                };
                'selfLink': string;
                'storageClass': string;
                'timeCreated': string;
                'versioning': {
                    'enabled': boolean;
                };
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
                'etag': string;
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

            export interface Channel {
                'address': string;
                'expiration': string;
                'id': string;
                'kind': string;
                'params': {
                    [name: string]: string
                ;
                };
                'payload': boolean;
                'resourceId': string;
                'resourceUri': string;
                'token': string;
                'type': string;
            }

            export interface ComposeRequest {
                'destination': Object;
                'kind': string;
                'sourceObjects': {
                    'generation': string;
                    'name': string;
                    'objectPreconditions': {
                        'ifGenerationMatch': string;
                    };
                }[];
            }

            export interface Object {
                'acl': ObjectAccessControl[];
                'bucket': string;
                'cacheControl': string;
                'componentCount': number;
                'contentDisposition': string;
                'contentEncoding': string;
                'contentLanguage': string;
                'contentType': string;
                'crc32c': string;
                'etag': string;
                'generation': string;
                'id': string;
                'kind': string;
                'md5Hash': string;
                'mediaLink': string;
                'metadata': {
                    [name: string]: string
                ;
                };
                'metageneration': string;
                'name': string;
                'owner': {
                    'entity': string;
                    'entityId': string;
                };
                'selfLink': string;
                'size': string;
                'storageClass': string;
                'timeDeleted': string;
                'updated': string;
            }

            export interface ObjectAccessControl {
                'bucket': string;
                'domain': string;
                'email': string;
                'entity': string;
                'entityId': string;
                'etag': string;
                'generation': string;
                'id': string;
                'kind': string;
                'object': string;
                'role': string;
                'selfLink': string;
            }

            export interface ObjectAccessControls {
                'items': any[];
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
