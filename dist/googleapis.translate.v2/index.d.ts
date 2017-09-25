// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        translate(version: string): any;
        translate(version: 'v2'): translate.v2.Translate;
    }

    namespace translate {
        namespace v2 {
            export interface Translate {
                new(options: any): Translate;

                'translations': {
                    'translate': (parameters: { [key: string]: any; }, callback: (error: any, body: TranslationsListResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'cid'?: string, 'target': string, 'format'?: string, 'model'?: string, 'q': string, 'source'?: string}, callback: (error: any, body: TranslationsListResponse, response: any) => void) => Request;
                };
                'detections': {
                    'detect': (parameters: { [key: string]: any; }, callback: (error: any, body: DetectionsListResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'q': string}, callback: (error: any, body: DetectionsListResponse, response: any) => void) => Request;
                };
                'languages': {
                    'list': (parameters: { [key: string]: any; 'model'?: string, 'target'?: string}, callback: (error: any, body: LanguagesListResponse, response: any) => void) => Request;
                };

            }

            export interface LanguagesListResponse {
                'languages': LanguagesResource[];
            }

            export type DetectionsResource = {
                'confidence': number;
                'language': string;
                'isReliable': boolean;
            }[];

            export interface TranslationsResource {
                'model': string;
                'translatedText': string;
                'detectedSourceLanguage': string;
            }

            export interface TranslationsListResponse {
                'translations': TranslationsResource[];
            }

            export interface TranslateTextRequest {
                'target': string;
                'format': string;
                'q': string[];
                'source': string;
                'model': string;
            }

            export interface DetectLanguageRequest {
                'q': string[];
            }

            export interface LanguagesResource {
                'name': string;
                'language': string;
            }

            export interface DetectionsListResponse {
                'detections': DetectionsResource[];
            }

            export interface GetSupportedLanguagesRequest {
                'target': string;
            }

        }
    }
}
