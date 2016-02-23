// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        storage(version: string): any;
        storage(version: 'v1'): storage.v1.Storage;
    }

    namespace storage {
        namespace v1 {
            export interface Storage {
                new(options: any): Storage;

                'bucketAccessControls': {
                    'delete': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'insert': (parameters: {'bucket': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'list': (parameters: {'bucket': string}, callback: (error: any, body: BucketAccessControls, response: any) => void) => Request;
                    'patch': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'update': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                };
                'buckets': {
                    'delete': (parameters: {'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'insert': (parameters: {'predefinedAcl'?: string, 'predefinedDefaultObjectAcl'?: string, 'project': string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'project': string, 'projection'?: string}, callback: (error: any, body: Buckets, response: any) => void) => Request;
                    'patch': (parameters: {'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'predefinedAcl'?: string, 'predefinedDefaultObjectAcl'?: string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'update': (parameters: {'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'predefinedAcl'?: string, 'predefinedDefaultObjectAcl'?: string, 'projection'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'defaultObjectAccessControls': {
                    'delete': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'insert': (parameters: {'bucket': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'list': (parameters: {'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string}, callback: (error: any, body: ObjectAccessControls, response: any) => void) => Request;
                    'patch': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'update': (parameters: {'bucket': string, 'entity': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                };
                'objectAccessControls': {
                    'delete': (parameters: {'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'insert': (parameters: {'bucket': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'list': (parameters: {'bucket': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControls, response: any) => void) => Request;
                    'patch': (parameters: {'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'update': (parameters: {'bucket': string, 'entity': string, 'generation'?: string, 'object': string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                };
                'objects': {
                    'compose': (parameters: {'destinationBucket': string, 'destinationObject': string, 'destinationPredefinedAcl'?: string, 'ifGenerationMatch'?: string, 'ifMetagenerationMatch'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'copy': (parameters: {'destinationBucket': string, 'destinationObject': string, 'destinationPredefinedAcl'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'ifSourceGenerationMatch'?: string, 'ifSourceGenerationNotMatch'?: string, 'ifSourceMetagenerationMatch'?: string, 'ifSourceMetagenerationNotMatch'?: string, 'projection'?: string, 'sourceBucket': string, 'sourceGeneration'?: string, 'sourceObject': string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'delete': (parameters: {'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'insert': (parameters: {'bucket': string, 'contentEncoding'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'name'?: string, 'predefinedAcl'?: string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'list': (parameters: {'bucket': string, 'delimiter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'projection'?: string, 'versions'?: boolean}, callback: (error: any, body: Objects, response: any) => void) => Request;
                    'patch': (parameters: {'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'predefinedAcl'?: string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'rewrite': (parameters: {'destinationBucket': string, 'destinationObject': string, 'destinationPredefinedAcl'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'ifSourceGenerationMatch'?: string, 'ifSourceGenerationNotMatch'?: string, 'ifSourceMetagenerationMatch'?: string, 'ifSourceMetagenerationNotMatch'?: string, 'maxBytesRewrittenPerCall'?: string, 'projection'?: string, 'rewriteToken'?: string, 'sourceBucket': string, 'sourceGeneration'?: string, 'sourceObject': string}, callback: (error: any, body: RewriteResponse, response: any) => void) => Request;
                    'update': (parameters: {'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'predefinedAcl'?: string, 'projection'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'watchAll': (parameters: {'bucket': string, 'delimiter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'projection'?: string, 'versions'?: boolean}, callback: (error: any, body: Channel, response: any) => void) => Request;
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
                'projectNumber': string;
                'selfLink': string;
                'storageClass': string;
                'timeCreated': string;
                'updated': string;
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
                'projectTeam': {
                    'projectNumber': string;
                    'team': string;
                };
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
                'customerEncryption': {
                    'encryptionAlgorithm': string;
                    'keySha256': string;
                };
                'etag': string;
                'generation': string;
                'id': string;
                'kind': string;
                'md5Hash': string;
                'mediaLink': string;
                'metadata': {
                    [name: string]: string
                
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
                'timeCreated': string;
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
                'projectTeam': {
                    'projectNumber': string;
                    'team': string;
                };
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

            export interface RewriteResponse {
                'done': boolean;
                'kind': string;
                'objectSize': string;
                'resource': Object;
                'rewriteToken': string;
                'totalBytesRewritten': string;
            }

        }
    }
}