// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        prediction(version: string): any;
        prediction(version: 'v1.3'): prediction.v1_3.Prediction;
    }

    namespace prediction {
        namespace v1_3 {
            export interface Prediction {
                new(options: any): Prediction;

                'hostedmodels': {
                    'predict': (parameters: { [key: string]: any; 'hostedModelName': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                };
                'training': {
                    'delete': (parameters: { [key: string]: any; 'data': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'data': string}, callback: (error: any, body: Training, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Training, response: any) => void) => Request;
                    'predict': (parameters: { [key: string]: any; 'data': string}, callback: (error: any, body: Output, response: any) => void) => Request;
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
                    'classWeightedAccuracy': number;
                    'classificationAccuracy': number;
                    'confusionMatrix': {
                        [name: string]: {
                            [name: string]: number
                        ;
                        }
                    ;
                    };
                    'confusionMatrixRowTotals': {
                        [name: string]: number
                    ;
                    };
                    'meanSquaredError': number;
                    'modelType': string;
                    'numberClasses': string;
                    'numberInstances': string;
                };
                'selfLink': string;
                'trainingStatus': string;
                'utility': {
                    [name: string]: number
                ;
                }[];
            }

            export interface Update {
                'classLabel': string;
                'csvInstance': any[];
            }

        }
    }
}
