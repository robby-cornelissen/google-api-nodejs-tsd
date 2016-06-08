// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        adexchangebuyer2(version: string): any;
        adexchangebuyer2(version: 'v2beta1'): adexchangebuyer2.v2beta1.Adexchangebuyer2;
    }

    namespace adexchangebuyer2 {
        namespace v2beta1 {
            export interface Adexchangebuyer2 {
                new(options: any): Adexchangebuyer2;

                'accounts': {
                    'clients': {
                        'update': (parameters: {'clientAccountId': string, 'accountId': string}, callback: (error: any, body: Client, response: any) => void) => Request;
                        'get': (parameters: {'clientAccountId': string, 'accountId': string}, callback: (error: any, body: Client, response: any) => void) => Request;
                        'create': (parameters: {'accountId': string}, callback: (error: any, body: Client, response: any) => void) => Request;
                        'list': (parameters: {'pageSize'?: number, 'accountId': string, 'pageToken'?: string}, callback: (error: any, body: ListClientsResponse, response: any) => void) => Request;
                    
                        'users': {
                            'update': (parameters: {'clientAccountId': string, 'userId': string, 'accountId': string}, callback: (error: any, body: ClientUser, response: any) => void) => Request;
                            'get': (parameters: {'clientAccountId': string, 'userId': string, 'accountId': string}, callback: (error: any, body: ClientUser, response: any) => void) => Request;
                            'list': (parameters: {'clientAccountId': string, 'pageSize'?: number, 'accountId': string, 'pageToken'?: string}, callback: (error: any, body: ListClientUsersResponse, response: any) => void) => Request;
                        };
                        'invitations': {
                            'create': (parameters: {'clientAccountId': string, 'accountId': string}, callback: (error: any, body: ClientUserInvitation, response: any) => void) => Request;
                            'get': (parameters: {'clientAccountId': string, 'invitationId': string, 'accountId': string}, callback: (error: any, body: ClientUserInvitation, response: any) => void) => Request;
                            'list': (parameters: {'clientAccountId': string, 'pageSize'?: number, 'accountId': string, 'pageToken'?: string}, callback: (error: any, body: ListClientUserInvitationsResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface ClientUser {
                'email': string;
                'clientAccountId': string;
                'status': string;
                'userId': string;
            }

            export interface ClientUserInvitation {
                'email': string;
                'clientAccountId': string;
                'invitationId': string;
            }

            export interface ListClientUserInvitationsResponse {
                'nextPageToken': string;
                'invitations': ClientUserInvitation[];
            }

            export interface ListClientUsersResponse {
                'users': ClientUser[];
                'nextPageToken': string;
            }

            export interface Client {
                'visibleToSeller': boolean;
                'status': string;
                'entityType': string;
                'role': string;
                'clientName': string;
                'clientAccountId': string;
                'entityId': string;
                'entityName': string;
            }

            export interface ListClientsResponse {
                'nextPageToken': string;
                'clients': Client[];
            }

        }
    }
}