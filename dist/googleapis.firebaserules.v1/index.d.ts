// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        firebaserules(version: string): any;
        firebaserules(version: 'v1'): firebaserules.v1.Firebaserules;
    }

    namespace firebaserules {
        namespace v1 {
            export interface Firebaserules {
                new(options: any): Firebaserules;

                'projects': {
                    'test': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: TestRulesetResponse, response: any) => void) => Request;

                    'rulesets': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListRulesetsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Ruleset, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Ruleset, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'releases': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListReleasesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Release, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Release, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Release, response: any) => void) => Request;
                        'getExecutable': (parameters: { [key: string]: any; 'name': string, 'executableVersion'?: string}, callback: (error: any, body: GetReleaseExecutableResponse, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };

            }

            export interface Ruleset {
                'createTime': string;
                'name': string;
                'source': Source;
            }

            export interface TestRulesetRequest {
                'testSuite': TestSuite;
                'source': Source;
            }

            export interface Issue {
                'description': string;
                'sourcePosition': SourcePosition;
                'severity': string;
            }

            export interface ListReleasesResponse {
                'releases': Release[];
                'nextPageToken': string;
            }

            export interface File {
                'content': string;
                'fingerprint': string;
                'name': string;
            }

            export interface FunctionCall {
                'args': any[];
                'function': string;
            }

            export interface Release {
                'updateTime': string;
                'rulesetName': string;
                'name': string;
                'createTime': string;
            }

            export interface TestRulesetResponse {
                'issues': Issue[];
                'testResults': TestResult[];
            }

            export interface ListRulesetsResponse {
                'rulesets': Ruleset[];
                'nextPageToken': string;
            }

            export interface TestResult {
                'errorPosition': SourcePosition;
                'functionCalls': FunctionCall[];
                'debugMessages': string[];
                'state': string;
            }

            export interface Arg {
                'anyValue': Empty;
                'exactValue': any;
            }

            export interface TestSuite {
                'testCases': TestCase[];
            }

            export interface Empty {}

            export interface FunctionMock {
                'result': Result;
                'args': Arg[];
                'function': string;
            }

            export interface GetReleaseExecutableResponse {
                'executable': string;
                'updateTime': string;
                'rulesetName': string;
                'language': string;
                'executableVersion': string;
            }

            export interface Source {
                'files': File[];
            }

            export interface Result {
                'undefined': Empty;
                'value': any;
            }

            export interface SourcePosition {
                'fileName': string;
                'line': number;
                'column': number;
            }

            export interface TestCase {
                'functionMocks': FunctionMock[];
                'resource': any;
                'expectation': string;
                'request': any;
            }

        }
    }
}
