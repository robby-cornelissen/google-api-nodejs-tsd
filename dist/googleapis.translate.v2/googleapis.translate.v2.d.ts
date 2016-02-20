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

            interface DetectionsListResponse {
                'detections': DetectionsResource[];
            }

            

            interface LanguagesListResponse {
                'languages': LanguagesResource[];
            }

            interface LanguagesResource {
                'language': string;
                'name': string;
            }

            interface TranslationsListResponse {
                'translations': TranslationsResource[];
            }

            interface TranslationsResource {
                'detectedSourceLanguage': string;
                'translatedText': string;
            }

        }
    }
}