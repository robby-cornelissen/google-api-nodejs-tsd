// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        prediction(version: string): any;
        prediction(version: 'v1.4'): prediction.v1_4.Prediction;
    }

    namespace prediction {
        namespace v1_4 {
            export interface Prediction {
                new(options: any): Prediction;

                'hostedmodels': {
                    'predict': (parameters: { [key: string]: any; 'hostedModelName': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                };
                'trainedmodels': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Training, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Training, response: any) => void) => Request;
                    'predict': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Training, response: any) => void) => Request;
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
                'dataAnalysis': {
                    'warnings': string[];
                };
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
                    'numberInstances': string;
                    'numberLabels': string;
                };
                'selfLink': string;
                'storageDataLocation': string;
                'storagePMMLLocation': string;
                'storagePMMLModelLocation': string;
                'trainingStatus': string;
                'utility': {
                    [name: string]: number
                ;
                }[];
            }

            export interface Update {
                'csvInstance': any[];
                'label': string;
                'output': string;
            }

        }
    }
}
