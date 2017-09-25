// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        vault(version: string): any;
        vault(version: 'v1'): vault.v1.Vault;
    }

    namespace vault {
        namespace v1 {
            export interface Vault {
                new(options: any): Vault;

                'matters': {
                    'delete': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: Matter, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'state'?: string, 'pageToken'?: string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListMattersResponse, response: any) => void) => Request;
                    'addPermissions': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: MatterPermission, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Matter, response: any) => void) => Request;
                    'reopen': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: ReopenMatterResponse, response: any) => void) => Request;
                    'removePermissions': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'undelete': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: Matter, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'matterId': string, 'view'?: string}, callback: (error: any, body: Matter, response: any) => void) => Request;
                    'close': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: CloseMatterResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: Matter, response: any) => void) => Request;

                    'holds': {
                        'update': (parameters: { [key: string]: any; 'holdId': string, 'matterId': string}, callback: (error: any, body: Hold, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'matterId': string}, callback: (error: any, body: Hold, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'matterId': string, 'holdId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'matterId': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListHoldsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'holdId': string, 'matterId': string}, callback: (error: any, body: Hold, response: any) => void) => Request;

                        'accounts': {
                            'list': (parameters: { [key: string]: any; 'matterId': string, 'holdId': string}, callback: (error: any, body: ListHeldAccountsResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'matterId': string, 'holdId': string}, callback: (error: any, body: HeldAccount, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'accountId': string, 'matterId': string, 'holdId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface RemoveMatterPermissionsRequest {
                'accountId': string;
            }

            export interface MatterPermission {
                'role': string;
                'accountId': string;
            }

            export interface ListMattersResponse {
                'nextPageToken': string;
                'matters': Matter[];
            }

            export interface HeldMailQuery {
                'startTime': string;
                'terms': string;
                'endTime': string;
            }

            export interface CloseMatterResponse {
                'matter': Matter;
            }

            export interface HeldGroupsQuery {
                'endTime': string;
                'startTime': string;
                'terms': string;
            }

            export interface HeldDriveQuery {
                'includeTeamDriveFiles': boolean;
            }

            export interface HeldOrgUnit {
                'holdTime': string;
                'orgUnitId': string;
            }

            export interface AddMatterPermissionsRequest {
                'sendEmails': boolean;
                'matterPermission': MatterPermission;
                'ccMe': boolean;
            }

            export interface Matter {
                'matterId': string;
                'state': string;
                'matterPermissions': MatterPermission[];
                'name': string;
                'description': string;
            }

            export interface HeldAccount {
                'accountId': string;
                'holdTime': string;
            }

            export interface ReopenMatterResponse {
                'matter': Matter;
            }

            export interface CorpusQuery {
                'groupsQuery': HeldGroupsQuery;
                'mailQuery': HeldMailQuery;
                'driveQuery': HeldDriveQuery;
            }

            export interface Hold {
                'accounts': HeldAccount[];
                'query': CorpusQuery;
                'orgUnit': HeldOrgUnit;
                'corpus': string;
                'updateTime': string;
                'holdId': string;
                'name': string;
            }

            export interface ListHoldsResponse {
                'nextPageToken': string;
                'holds': Hold[];
            }

            export interface UndeleteMatterRequest {}

            export interface ListHeldAccountsResponse {
                'accounts': HeldAccount[];
            }

            export interface Empty {}

            export interface ReopenMatterRequest {}

            export interface CloseMatterRequest {}

        }
    }
}
