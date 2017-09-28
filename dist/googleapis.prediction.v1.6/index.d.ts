// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        prediction(version: string): any;
        prediction(version: 'v1.6'): prediction.v1_6.Prediction;
    }

    namespace prediction {
        namespace v1_6 {
            export interface Prediction {
                new(options: any): Prediction;

                'hostedmodels': {
                    'predict': (parameters: { [key: string]: any; 'hostedModelName': string, 'project': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                };
                'trainedmodels': {
                    'analyze': (parameters: { [key: string]: any; 'id': string, 'project': string}, callback: (error: any, body: Analyze, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'id': string, 'project': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string, 'project': string}, callback: (error: any, body: Insert2, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: Insert2, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: List, response: any) => void) => Request;
                    'predict': (parameters: { [key: string]: any; 'id': string, 'project': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string, 'project': string}, callback: (error: any, body: Insert2, response: any) => void) => Request;
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
                            'mean': string;
                            'variance': string;
                        };
                        'text': {
                            'count': string;
                        };
                    }[];
                    'outputFeature': {
                        'numeric': {
                            'count': string;
                            'mean': string;
                            'variance': string;
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
                            [name: string]: string
                        ;
                        }
                    ;
                    };
                    'confusionMatrixRowTotals': {
                        [name: string]: string
                    ;
                    };
                    'modelinfo': Insert2;
                };
                'selfLink': string;
            }

            export interface Input {
                'input': {
                    'csvInstance': any[];
                };
            }

            export interface Insert {
                'id': string;
                'modelType': string;
                'sourceModel': string;
                'storageDataLocation': string;
                'storagePMMLLocation': string;
                'storagePMMLModelLocation': string;
                'trainingInstances': {
                    'csvInstance': any[];
                    'output': string;
                }[];
                'utility': {
                    [name: string]: number
                ;
                }[];
            }

            export interface Insert2 {
                'created': string;
                'id': string;
                'kind': string;
                'modelInfo': {
                    'classWeightedAccuracy': string;
                    'classificationAccuracy': string;
                    'meanSquaredError': string;
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
                'trainingStatus': string;
            }

            export interface List {
                'items': Insert2[];
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
                    'score': string;
                }[];
                'outputValue': string;
                'selfLink': string;
            }

            export interface Update {
                'csvInstance': any[];
                'output': string;
            }

        }
    }
}
