// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudkms(version: string): any;
        cloudkms(version: 'v1'): cloudkms.v1.Cloudkms;
    }

    namespace cloudkms {
        namespace v1 {
            export interface Cloudkms {
                new(options: any): Cloudkms;

                'projects': {
                    'locations': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;

                        'keyRings': {
                            'create': (parameters: { [key: string]: any; 'parent': string, 'keyRingId'?: string}, callback: (error: any, body: KeyRing, response: any) => void) => Request;
                            'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: KeyRing, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListKeyRingsResponse, response: any) => void) => Request;

                            'cryptoKeys': {
                                'updatePrimaryVersion': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CryptoKey, response: any) => void) => Request;
                                'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CryptoKey, response: any) => void) => Request;
                                'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: CryptoKey, response: any) => void) => Request;
                                'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                                'decrypt': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: DecryptResponse, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListCryptoKeysResponse, response: any) => void) => Request;
                                'encrypt': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: EncryptResponse, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'cryptoKeyId'?: string, 'parent': string}, callback: (error: any, body: CryptoKey, response: any) => void) => Request;
                                'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;

                                'cryptoKeyVersions': {
                                    'destroy': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CryptoKeyVersion, response: any) => void) => Request;
                                    'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: CryptoKeyVersion, response: any) => void) => Request;
                                    'restore': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CryptoKeyVersion, response: any) => void) => Request;
                                    'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: CryptoKeyVersion, response: any) => void) => Request;
                                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CryptoKeyVersion, response: any) => void) => Request;
                                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListCryptoKeyVersionsResponse, response: any) => void) => Request;
                                };
                            };
                        };
                    };
                };

            }

            export interface CryptoKey {
                'primary': CryptoKeyVersion;
                'name': string;
                'purpose': string;
                'nextRotationTime': string;
                'createTime': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'rotationPeriod': string;
            }

            export interface DecryptResponse {
                'plaintext': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Policy {
                'etag': string;
                'version': number;
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
                'iamOwned': boolean;
            }

            export interface ListLocationsResponse {
                'locations': Location[];
                'nextPageToken': string;
            }

            export interface EncryptResponse {
                'ciphertext': string;
                'name': string;
            }

            export interface KeyRing {
                'name': string;
                'createTime': string;
            }

            export interface RestoreCryptoKeyVersionRequest {}

            export interface UpdateCryptoKeyPrimaryVersionRequest {
                'cryptoKeyVersionId': string;
            }

            export interface ListKeyRingsResponse {
                'nextPageToken': string;
                'totalSize': number;
                'keyRings': KeyRing[];
            }

            export interface AuditConfig {
                'exemptedMembers': string[];
                'service': string;
                'auditLogConfigs': AuditLogConfig[];
            }

            export interface CryptoKeyVersion {
                'destroyTime': string;
                'createTime': string;
                'state': string;
                'name': string;
                'destroyEventTime': string;
            }

            export interface SetIamPolicyRequest {
                'updateMask': string;
                'policy': Policy;
            }

            export interface DecryptRequest {
                'additionalAuthenticatedData': string;
                'ciphertext': string;
            }

            export interface Binding {
                'condition': Expr;
                'members': string[];
                'role': string;
            }

            export interface Expr {
                'location': string;
                'title': string;
                'description': string;
                'expression': string;
            }

            export interface EncryptRequest {
                'additionalAuthenticatedData': string;
                'plaintext': string;
            }

            export interface ListCryptoKeyVersionsResponse {
                'nextPageToken': string;
                'totalSize': number;
                'cryptoKeyVersions': CryptoKeyVersion[];
            }

            export interface Location {
                'name': string;
                'locationId': string;
                'metadata': {
                    [name: string]: any
                ;
                };
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface ListCryptoKeysResponse {
                'nextPageToken': string;
                'totalSize': number;
                'cryptoKeys': CryptoKey[];
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface DestroyCryptoKeyVersionRequest {}

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

        }
    }
}
