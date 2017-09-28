// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        discovery(version: string): any;
        discovery(version: 'v1'): discovery.v1.Discovery;
    }

    namespace discovery {
        namespace v1 {
            export interface Discovery {
                new(options: any): Discovery;

                'apis': {
                    'getRest': (parameters: { [key: string]: any; 'api': string, 'version': string}, callback: (error: any, body: RestDescription, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'name'?: string, 'preferred'?: boolean}, callback: (error: any, body: DirectoryList, response: any) => void) => Request;
                };

            }

            export interface DirectoryList {
                'discoveryVersion': string;
                'items': {
                    'description': string;
                    'discoveryLink': string;
                    'discoveryRestUrl': string;
                    'documentationLink': string;
                    'icons': {
                        'x16': string;
                        'x32': string;
                    };
                    'id': string;
                    'kind': string;
                    'labels': string[];
                    'name': string;
                    'preferred': boolean;
                    'title': string;
                    'version': string;
                }[];
                'kind': string;
            }

            export interface JsonSchema {
                '$ref': string;
                'additionalProperties': JsonSchema;
                'annotations': {
                    'required': string[];
                };
                'default': string;
                'description': string;
                'enum': string[];
                'enumDescriptions': string[];
                'format': string;
                'id': string;
                'items': JsonSchema;
                'location': string;
                'maximum': string;
                'minimum': string;
                'pattern': string;
                'properties': {
                    [name: string]: JsonSchema
                ;
                };
                'readOnly': boolean;
                'repeated': boolean;
                'required': boolean;
                'type': string;
                'variant': {
                    'discriminant': string;
                    'map': {
                        '$ref': string;
                        'type_value': string;
                    }[];
                };
            }

            export interface RestDescription {
                'auth': {
                    'oauth2': {
                        'scopes': {
                            [name: string]: {
                                'description': string;
                            }
                        ;
                        };
                    };
                };
                'basePath': string;
                'baseUrl': string;
                'batchPath': string;
                'canonicalName': string;
                'description': string;
                'discoveryVersion': string;
                'documentationLink': string;
                'etag': string;
                'exponentialBackoffDefault': boolean;
                'features': string[];
                'icons': {
                    'x16': string;
                    'x32': string;
                };
                'id': string;
                'kind': string;
                'labels': string[];
                'methods': {
                    [name: string]: RestMethod
                ;
                };
                'name': string;
                'ownerDomain': string;
                'ownerName': string;
                'packagePath': string;
                'parameters': {
                    [name: string]: JsonSchema
                ;
                };
                'protocol': string;
                'resources': {
                    [name: string]: RestResource
                ;
                };
                'revision': string;
                'rootUrl': string;
                'schemas': {
                    [name: string]: JsonSchema
                ;
                };
                'servicePath': string;
                'title': string;
                'version': string;
                'version_module': boolean;
            }

            export interface RestMethod {
                'description': string;
                'etagRequired': boolean;
                'httpMethod': string;
                'id': string;
                'mediaUpload': {
                    'accept': string[];
                    'maxSize': string;
                    'protocols': {
                        'resumable': {
                            'multipart': boolean;
                            'path': string;
                        };
                        'simple': {
                            'multipart': boolean;
                            'path': string;
                        };
                    };
                };
                'parameterOrder': string[];
                'parameters': {
                    [name: string]: JsonSchema
                ;
                };
                'path': string;
                'request': {
                    '$ref': string;
                    'parameterName': string;
                };
                'response': {
                    '$ref': string;
                };
                'scopes': string[];
                'supportsMediaDownload': boolean;
                'supportsMediaUpload': boolean;
                'supportsSubscription': boolean;
                'useMediaDownloadService': boolean;
            }

            export interface RestResource {
                'methods': {
                    [name: string]: RestMethod
                ;
                };
                'resources': {
                    [name: string]: RestResource
                ;
                };
            }

        }
    }
}
