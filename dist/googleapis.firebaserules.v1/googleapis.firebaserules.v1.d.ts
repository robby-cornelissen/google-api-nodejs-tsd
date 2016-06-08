// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        firebaserules(version: string): any;
        firebaserules(version: 'v1'): firebaserules.v1.Firebaserules;
    }

    namespace firebaserules {
        namespace v1 {
            export interface Firebaserules {
                new(options: any): Firebaserules;

                'projects': {
                    'test': (parameters: {'name': string}, callback: (error: any, body: TestRulesetResponse, response: any) => void) => Request;
                
                    'rulesets': {
                        'create': (parameters: {'name': string}, callback: (error: any, body: Ruleset, response: any) => void) => Request;
                        'get': (parameters: {'name': string}, callback: (error: any, body: Ruleset, response: any) => void) => Request;
                        'list': (parameters: {'pageSize'?: number, 'name': string, 'pageToken'?: string}, callback: (error: any, body: ListRulesetsResponse, response: any) => void) => Request;
                        'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'releases': {
                        'update': (parameters: {'name': string}, callback: (error: any, body: Release, response: any) => void) => Request;
                        'create': (parameters: {'name': string}, callback: (error: any, body: Release, response: any) => void) => Request;
                        'get': (parameters: {'name': string}, callback: (error: any, body: Release, response: any) => void) => Request;
                        'list': (parameters: {'pageSize'?: number, 'filter'?: string, 'name': string, 'pageToken'?: string}, callback: (error: any, body: ListReleasesResponse, response: any) => void) => Request;
                        'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };

            }

            export interface Release {
                'updateTime': string;
                'createTime': string;
                'name': string;
                'rulesetName': string;
            }

            export interface Source {
                'files': File[];
            }

            export interface SourcePosition {
                'fileName': string;
                'column': number;
                'line': number;
            }

            export interface TestRulesetResponse {
                'issues': Issue[];
            }

            export interface Ruleset {
                'source': Source;
                'createTime': string;
                'name': string;
            }

            export interface ListReleasesResponse {
                'nextPageToken': string;
                'releases': Release[];
            }

            export interface ListRulesetsResponse {
                'rulesets': Ruleset[];
                'nextPageToken': string;
            }

            export interface Empty {}

            export interface File {
                'content': string;
                'name': string;
                'fingerprint': string;
            }

            export interface TestRulesetRequest {
                'source': Source;
            }

            export interface Issue {
                'description': string;
                'severity': string;
                'sourcePosition': SourcePosition;
            }

        }
    }
}