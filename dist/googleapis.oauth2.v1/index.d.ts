// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        oauth2(version: string): any;
        oauth2(version: 'v1'): oauth2.v1.Oauth2;
    }

    namespace oauth2 {
        namespace v1 {
            export interface Oauth2 {
                new(options: any): Oauth2;

                'getCertForOpenIdConnect': (parameters: any, callback: (error: any, body: X509, response: any) => void) => Request;
                'getCertForOpenIdConnectRaw': (parameters: any, callback: (error: any, body: Raw, response: any) => void) => Request;
                'getRobotJwk': (parameters: { [key: string]: any; 'robotEmail': string}, callback: (error: any, body: Jwk, response: any) => void) => Request;
                'getRobotMetadataRaw': (parameters: { [key: string]: any; 'robotEmail': string}, callback: (error: any, body: Raw, response: any) => void) => Request;
                'getRobotMetadataX509': (parameters: { [key: string]: any; 'robotEmail': string}, callback: (error: any, body: X509, response: any) => void) => Request;
                'tokeninfo': (parameters: { [key: string]: any; 'access_token'?: string, 'id_token'?: string}, callback: (error: any, body: Tokeninfo, response: any) => void) => Request;

                'userinfo': {
                    'get': (parameters: any, callback: (error: any, body: Userinfoplus, response: any) => void) => Request;

                    'v2': {
                        'me': {
                            'get': (parameters: any, callback: (error: any, body: Userinfoplus, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Jwk {
                'keys': {
                    'alg': string;
                    'e': string;
                    'kid': string;
                    'kty': string;
                    'n': string;
                    'use': string;
                }[];
            }

            export interface Raw {
                'keyvalues': {
                    'algorithm': string;
                    'exponent': string;
                    'keyid': string;
                    'modulus': string;
                }[];
            }

            export interface Tokeninfo {
                'access_type': string;
                'audience': string;
                'email': string;
                'email_verified': boolean;
                'expires_in': number;
                'issued_at': number;
                'issued_to': string;
                'issuer': string;
                'nonce': string;
                'scope': string;
                'user_id': string;
                'verified_email': boolean;
            }

            export interface Userinfoplus {
                'email': string;
                'family_name': string;
                'gender': string;
                'given_name': string;
                'hd': string;
                'id': string;
                'link': string;
                'locale': string;
                'name': string;
                'picture': string;
                'verified_email': boolean;
            }

            export interface X509 {
                [name: string]: string
            ;
            }

        }
    }
}
