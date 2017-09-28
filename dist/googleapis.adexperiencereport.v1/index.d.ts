// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        adexperiencereport(version: string): any;
        adexperiencereport(version: 'v1'): adexperiencereport.v1.Adexperiencereport;
    }

    namespace adexperiencereport {
        namespace v1 {
            export interface Adexperiencereport {
                new(options: any): Adexperiencereport;

                'violatingSites': {
                    'list': (parameters: { [key: string]: any; }, callback: (error: any, body: ViolatingSitesResponse, response: any) => void) => Request;
                };
                'sites': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: SiteSummaryResponse, response: any) => void) => Request;
                };

            }

            export interface PlatformSummary {
                'underReview': boolean;
                'reportUrl': string;
                'lastChangeTime': string;
                'betterAdsStatus': string;
                'region': string[];
                'enforcementTime': string;
                'filterStatus': string;
            }

            export interface ViolatingSitesResponse {
                'violatingSites': SiteSummaryResponse[];
            }

            export interface SiteSummaryResponse {
                'desktopSummary': PlatformSummary;
                'mobileSummary': PlatformSummary;
                'reviewedSite': string;
            }

        }
    }
}
