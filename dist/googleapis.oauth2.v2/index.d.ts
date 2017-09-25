// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        oauth2(version: string): any;
        oauth2(version: 'v2'): oauth2.v2.Oauth2;
    }

    namespace oauth2 {
        namespace v2 {
            export interface Oauth2 {
                new(options: any): Oauth2;

                'getCertForOpenIdConnect': (parameters: any, callback: (error: any, body: Jwk, response: any) => void) => Request;
                'tokeninfo': (parameters: { [key: string]: any; 'access_token'?: string, 'id_token'?: string, 'token_handle'?: string}, callback: (error: any, body: Tokeninfo, response: any) => void) => Request;

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

            export interface Tokeninfo {
                'access_type': string;
                'audience': string;
                'email': string;
                'expires_in': number;
                'issued_to': string;
                'scope': string;
                'token_handle': string;
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

        }
    }
}
