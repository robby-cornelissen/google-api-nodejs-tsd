// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        prediction(version: string): any;
        prediction(version: 'v1.2'): prediction.v1_2.Prediction;
    }

    namespace prediction {
        namespace v1_2 {
            export interface Prediction {
                new(options: any): Prediction;

                'predict': (parameters: {'data': string}, callback: (error: any, body: Output, response: any) => void) => Request;

                'hostedmodels': {
                    'predict': (parameters: {'hostedModelName': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                };
                'training': {
                    'delete': (parameters: {'data': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'data': string}, callback: (error: any, body: Training, response: any) => void) => Request;
                    'insert': (parameters: {'data'?: string}, callback: (error: any, body: Training, response: any) => void) => Request;
                    'update': (parameters: {'data': string}, callback: (error: any, body: Training, response: any) => void) => Request;
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