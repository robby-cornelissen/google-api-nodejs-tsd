// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        searchconsole(version: string): any;
        searchconsole(version: 'v1'): searchconsole.v1.Searchconsole;
    }

    namespace searchconsole {
        namespace v1 {
            export interface Searchconsole {
                new(options: any): Searchconsole;

                'urlTestingTools': {
                    'mobileFriendlyTest': {
                        'run': (parameters: { [key: string]: any; }, callback: (error: any, body: RunMobileFriendlyTestResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface ResourceIssue {
                'blockedResource': BlockedResource;
            }

            export interface BlockedResource {
                'url': string;
            }

            export interface TestStatus {
                'status': string;
                'details': string;
            }

            export interface RunMobileFriendlyTestRequest {
                'url': string;
                'requestScreenshot': boolean;
            }

            export interface Image {
                'mimeType': string;
                'data': string;
            }

            export interface MobileFriendlyIssue {
                'rule': string;
            }

            export interface RunMobileFriendlyTestResponse {
                'screenshot': Image;
                'testStatus': TestStatus;
                'resourceIssues': ResourceIssue[];
                'mobileFriendliness': string;
                'mobileFriendlyIssues': MobileFriendlyIssue[];
            }

        }
    }
}
