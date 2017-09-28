// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        storage(version: string): any;
        storage(version: 'v1'): storage.v1.Storage;
    }

    namespace storage {
        namespace v1 {
            export interface Storage {
                new(options: any): Storage;

                'bucketAccessControls': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'userProject'?: string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'userProject'?: string}, callback: (error: any, body: BucketAccessControls, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: BucketAccessControl, response: any) => void) => Request;
                };
                'buckets': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'userProject'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'bucket': string, 'userProject'?: string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'predefinedAcl'?: string, 'predefinedDefaultObjectAcl'?: string, 'project': string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'project': string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Buckets, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'predefinedAcl'?: string, 'predefinedDefaultObjectAcl'?: string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'bucket': string, 'userProject'?: string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'bucket': string, 'permissions': string, 'userProject'?: string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'predefinedAcl'?: string, 'predefinedDefaultObjectAcl'?: string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Bucket, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'defaultObjectAccessControls': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControls, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                };
                'notifications': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'notification': string, 'userProject'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'notification': string, 'userProject'?: string}, callback: (error: any, body: Notification, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'userProject'?: string}, callback: (error: any, body: Notification, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'userProject'?: string}, callback: (error: any, body: Notifications, response: any) => void) => Request;
                };
                'objectAccessControls': {
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControls, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'entity': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: ObjectAccessControl, response: any) => void) => Request;
                };
                'objects': {
                    'compose': (parameters: { [key: string]: any; 'destinationBucket': string, 'destinationObject': string, 'destinationPredefinedAcl'?: string, 'ifGenerationMatch'?: string, 'ifMetagenerationMatch'?: string, 'kmsKeyName'?: string, 'userProject'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'copy': (parameters: { [key: string]: any; 'destinationBucket': string, 'destinationObject': string, 'destinationPredefinedAcl'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'ifSourceGenerationMatch'?: string, 'ifSourceGenerationNotMatch'?: string, 'ifSourceMetagenerationMatch'?: string, 'ifSourceMetagenerationNotMatch'?: string, 'projection'?: string, 'sourceBucket': string, 'sourceGeneration'?: string, 'sourceObject': string, 'userProject'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'bucket': string, 'contentEncoding'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'kmsKeyName'?: string, 'name'?: string, 'predefinedAcl'?: string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bucket': string, 'delimiter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'projection'?: string, 'userProject'?: string, 'versions'?: boolean}, callback: (error: any, body: Objects, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'predefinedAcl'?: string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'rewrite': (parameters: { [key: string]: any; 'destinationBucket': string, 'destinationKmsKeyName'?: string, 'destinationObject': string, 'destinationPredefinedAcl'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'ifSourceGenerationMatch'?: string, 'ifSourceGenerationNotMatch'?: string, 'ifSourceMetagenerationMatch'?: string, 'ifSourceMetagenerationNotMatch'?: string, 'maxBytesRewrittenPerCall'?: string, 'projection'?: string, 'rewriteToken'?: string, 'sourceBucket': string, 'sourceGeneration'?: string, 'sourceObject': string, 'userProject'?: string}, callback: (error: any, body: RewriteResponse, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'object': string, 'userProject'?: string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'object': string, 'permissions': string, 'userProject'?: string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'bucket': string, 'generation'?: string, 'ifGenerationMatch'?: string, 'ifGenerationNotMatch'?: string, 'ifMetagenerationMatch'?: string, 'ifMetagenerationNotMatch'?: string, 'object': string, 'predefinedAcl'?: string, 'projection'?: string, 'userProject'?: string}, callback: (error: any, body: Object, response: any) => void) => Request;
                    'watchAll': (parameters: { [key: string]: any; 'bucket': string, 'delimiter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'prefix'?: string, 'projection'?: string, 'userProject'?: string, 'versions'?: boolean}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'projects': {
                    'serviceAccount': {
                        'get': (parameters: { [key: string]: any; 'projectId': string, 'userProject'?: string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                    };
                };

            }

            export interface Bucket {
                'acl': BucketAccessControl[];
                'billing': {
                    'requesterPays': boolean;
                };
                'cors': {
                    'maxAgeSeconds': number;
                    'method': string[];
                    'origin': string[];
                    'responseHeader': string[];
                }[];
                'defaultObjectAcl': ObjectAccessControl[];
                'encryption': {
                    'defaultKmsKeyName': string;
                };
                'etag': string;
                'id': string;
                'kind': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'lifecycle': {
                    'rule': {
                        'action': {
                            'storageClass': string;
                            'type': string;
                        };
                        'condition': {
                            'age': number;
                            'createdBefore': string;
                            'isLive': boolean;
                            'matchesStorageClass': string[];
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

            export interface Notification {
                'custom_attributes': {
                    [name: string]: string
                ;
                };
                'etag': string;
                'event_types': string[];
                'id': string;
                'kind': string;
                'object_name_prefix': string;
                'payload_format': string;
                'selfLink': string;
                'topic': string;
            }

            export interface Notifications {
                'items': Notification[];
                'kind': string;
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
                'kmsKeyName': string;
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
                'timeCreated': string;
                'timeDeleted': string;
                'timeStorageClassUpdated': string;
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
                'items': ObjectAccessControl[];
                'kind': string;
            }

            export interface Objects {
                'items': Object[];
                'kind': string;
                'nextPageToken': string;
                'prefixes': string[];
            }

            export interface Policy {
                'bindings': {
                    'condition': any;
                    'members': string[];
                    'role': string;
                }[];
                'etag': string;
                'kind': string;
                'resourceId': string;
            }

            export interface RewriteResponse {
                'done': boolean;
                'kind': string;
                'objectSize': string;
                'resource': Object;
                'rewriteToken': string;
                'totalBytesRewritten': string;
            }

            export interface ServiceAccount {
                'email_address': string;
                'kind': string;
            }

            export interface TestIamPermissionsResponse {
                'kind': string;
                'permissions': string[];
            }

        }
    }
}
