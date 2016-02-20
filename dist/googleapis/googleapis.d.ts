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