/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        translate(version: string): any;
        translate(version: 'v2'): translate.v2.Translate;
    }

    namespace translate {
        namespace v2 {
            export interface Translate {
                new(options: any): Translate;

                'detections': {
                    'list': (parameters: {'q': string}, callback: (error: any, body: DetectionsListResponse, response: any) => void) => Request;
                };
                'languages': {
                    'list': (parameters: {'target'?: string}, callback: (error: any, body: LanguagesListResponse, response: any) => void) => Request;
                };
                'translations': {
                    'list': (parameters: {'cid'?: string, 'format'?: string, 'q': string, 'source'?: string, 'target': string}, callback: (error: any, body: TranslationsListResponse, response: any) => void) => Request;
                };

            }

            export interface DetectionsListResponse {
                'detections': DetectionsResource[];
            }

            export type DetectionsResource = {
                'confidence': number;
                'isReliable': boolean;
                'language': string;
            }[];

            export interface LanguagesListResponse {
                'languages': LanguagesResource[];
            }

            export interface LanguagesResource {
                'language': string;
                'name': string;
            }

            export interface TranslationsListResponse {
                'translations': TranslationsResource[];
            }

            export interface TranslationsResource {
                'detectedSourceLanguage': string;
                'translatedText': string;
            }

        }
    }
}