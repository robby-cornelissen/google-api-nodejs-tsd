// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

declare module google {
    export interface GoogleApis {
        new(options?: any): GoogleApis;

        options(options?: any): void;
    }

    interface Request {}

    interface Callback {
        (error: any, body: any, response: any): void;
    }
}

declare module "googleapis" {
    var google: google.GoogleApis;

    export = google;
}