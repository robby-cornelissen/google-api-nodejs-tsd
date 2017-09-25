// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        speech(version: string): any;
        speech(version: 'v1beta1'): speech.v1beta1.Speech;
    }

    namespace speech {
        namespace v1beta1 {
            export interface Speech {
                new(options: any): Speech;

                'operations': {
                    'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'name'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };
                'speech': {
                    'asyncrecognize': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'syncrecognize': (parameters: { [key: string]: any; }, callback: (error: any, body: SyncRecognizeResponse, response: any) => void) => Request;
                };

            }

            export interface RecognitionAudio {
                'content': string;
                'uri': string;
            }

            export interface AsyncRecognizeRequest {
                'audio': RecognitionAudio;
                'config': RecognitionConfig;
            }

            export interface Operation {
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
            }

            export interface RecognitionConfig {
                'maxAlternatives': number;
                'sampleRate': number;
                'languageCode': string;
                'encoding': string;
                'profanityFilter': boolean;
                'speechContext': SpeechContext;
            }

            export interface SyncRecognizeRequest {
                'audio': RecognitionAudio;
                'config': RecognitionConfig;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface SyncRecognizeResponse {
                'results': SpeechRecognitionResult[];
            }

            export interface Empty {}

            export interface SpeechContext {
                'phrases': string[];
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface SpeechRecognitionAlternative {
                'confidence': number;
                'transcript': string;
            }

            export interface SpeechRecognitionResult {
                'alternatives': SpeechRecognitionAlternative[];
            }

        }
    }
}
