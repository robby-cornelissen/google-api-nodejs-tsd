// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        prediction(version: string): any;
        prediction(version: 'v1.5'): prediction.v1_5.Prediction;
    }

    namespace prediction {
        namespace v1_5 {
            export interface Prediction {
                new(options: any): Prediction;

                'hostedmodels': {
                    'predict': (parameters: { [key: string]: any; 'hostedModelName': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                };
                'trainedmodels': {
                    'analyze': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Analyze, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Training, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Training, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: List, response: any) => void) => Request;
                    'predict': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Training, response: any) => void) => Request;
                };

            }

            export interface Analyze {
                'dataDescription': {
                    'features': {
                        'categorical': {
                            'count': string;
                            'values': {
                                'count': string;
                                'value': string;
                            }[];
                        };
                        'index': string;
                        'numeric': {
                            'count': string;
                            'mean': number;
                            'variance': number;
                        };
                        'text': {
                            'count': string;
                        };
                    }[];
                    'outputFeature': {
                        'numeric': {
                            'count': string;
                            'mean': number;
                            'variance': number;
                        };
                        'text': {
                            'count': string;
                            'value': string;
                        }[];
                    };
                };
                'errors': {
                    [name: string]: string
                ;
                }[];
                'id': string;
                'kind': string;
                'modelDescription': {
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
                    'modelinfo': Training;
                };
                'selfLink': string;
            }

            export interface Input {
                'input': {
                    'csvInstance': any[];
                };
            }

            export interface List {
                'items': Training[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
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
                'created': string;
                'id': string;
                'kind': string;
                'modelInfo': {
                    'classWeightedAccuracy': number;
                    'classificationAccuracy': number;
                    'meanSquaredError': number;
                    'modelType': string;
                    'numberInstances': string;
                    'numberLabels': string;
                };
                'modelType': string;
                'selfLink': string;
                'storageDataLocation': string;
                'storagePMMLLocation': string;
                'storagePMMLModelLocation': string;
                'trainingComplete': string;
                'trainingInstances': {
                    'csvInstance': any[];
                    'output': string;
                }[];
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
