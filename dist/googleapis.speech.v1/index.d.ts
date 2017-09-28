// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        speech(version: string): any;
        speech(version: 'v1'): speech.v1.Speech;
    }

    namespace speech {
        namespace v1 {
            export interface Speech {
                new(options: any): Speech;

                'operations': {
                    'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'pageToken'?: string, 'name'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };
                'speech': {
                    'longrunningrecognize': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'recognize': (parameters: { [key: string]: any; }, callback: (error: any, body: RecognizeResponse, response: any) => void) => Request;
                };

            }

            export interface LongRunningRecognizeRequest {
                'audio': RecognitionAudio;
                'config': RecognitionConfig;
            }

            export interface RecognizeResponse {
                'results': SpeechRecognitionResult[];
            }

            export interface CancelOperationRequest {}

            export interface Operation {
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
            }

            export interface RecognitionConfig {
                'enableWordTimeOffsets': boolean;
                'maxAlternatives': number;
                'languageCode': string;
                'speechContexts': SpeechContext[];
                'encoding': string;
                'profanityFilter': boolean;
                'sampleRateHertz': number;
            }

            export interface WordInfo {
                'endTime': string;
                'startTime': string;
                'word': string;
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface Empty {}

            export interface RecognizeRequest {
                'audio': RecognitionAudio;
                'config': RecognitionConfig;
            }

            export interface SpeechRecognitionAlternative {
                'confidence': number;
                'words': WordInfo[];
                'transcript': string;
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface SpeechContext {
                'phrases': string[];
            }

            export interface SpeechRecognitionResult {
                'alternatives': SpeechRecognitionAlternative[];
            }

            export interface RecognitionAudio {
                'uri': string;
                'content': string;
            }

        }
    }
}
