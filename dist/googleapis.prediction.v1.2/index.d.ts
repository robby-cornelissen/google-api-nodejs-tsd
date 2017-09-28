// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        prediction(version: string): any;
        prediction(version: 'v1.2'): prediction.v1_2.Prediction;
    }

    namespace prediction {
        namespace v1_2 {
            export interface Prediction {
                new(options: any): Prediction;

                'predict': (parameters: { [key: string]: any; 'data': string}, callback: (error: any, body: Output, response: any) => void) => Request;

                'hostedmodels': {
                    'predict': (parameters: { [key: string]: any; 'hostedModelName': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                };
                'training': {
                    'delete': (parameters: { [key: string]: any; 'data': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'data': string}, callback: (error: any, body: Training, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'data'?: string}, callback: (error: any, body: Training, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'data': string}, callback: (error: any, body: Training, response: any) => void) => Request;
                };

            }

            export interface Input {
                'input': {
                    'csvInstance': any[];
                };
            }

            export interface Output {
                'id': string;
                'kind': string;
                'outputLabel': string;
                'outputMulti': {
                    'label': string;
                    'score': number;
                }[];
                'outputValue': number;
                'selfLink': string;
            }

            export interface Training {
                'id': string;
                'kind': string;
                'modelInfo': {
                    'classificationAccuracy': number;
                    'meanSquaredError': number;
                    'modelType': string;
                };
                'selfLink': string;
                'trainingStatus': string;
            }

            export interface Update {
                'classLabel': string;
                'csvInstance': any[];
            }

        }
    }
}
