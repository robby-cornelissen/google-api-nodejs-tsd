// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        iam(version: string): any;
        iam(version: 'v1alpha1'): iam.v1alpha1.Iam;
    }

    namespace iam {
        namespace v1alpha1 {
            export interface Iam {
                new(options: any): Iam;
            }
        }
    }
}