// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        oslogin(version: string): any;
        oslogin(version: 'v1alpha'): oslogin.v1alpha.Oslogin;
    }

    namespace oslogin {
        namespace v1alpha {
            export interface Oslogin {
                new(options: any): Oslogin;

                'users': {
                    'importSshPublicKey': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: ImportSshPublicKeyResponse, response: any) => void) => Request;
                    'getLoginProfile': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: LoginProfile, response: any) => void) => Request;

                    'sshPublicKeys': {
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string}, callback: (error: any, body: SshPublicKey, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: SshPublicKey, response: any) => void) => Request;
                    };
                };

            }

            export interface ImportSshPublicKeyResponse {
                'loginProfile': LoginProfile;
            }

            export interface PosixAccount {
                'uid': string;
                'username': string;
                'shell': string;
                'homeDirectory': string;
                'gecos': string;
                'systemId': string;
                'primary': boolean;
                'gid': string;
            }

            export interface LoginProfile {
                'sshPublicKeys': {
                    [name: string]: SshPublicKey
                ;
                };
                'posixAccounts': PosixAccount[];
                'name': string;
                'suspended': boolean;
            }

            export interface SshPublicKey {
                'expirationTimeUsec': string;
                'fingerprint': string;
                'key': string;
            }

            export interface Empty {}

        }
    }
}
