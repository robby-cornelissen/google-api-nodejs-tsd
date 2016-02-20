/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        prediction(version: string): any;
        prediction(version: 'v1.6'): prediction.v1_6.Prediction;
    }

    namespace prediction {
        namespace v1_6 {
            export interface Prediction {
                new(options: any): Prediction;

                'hostedmodels': {
                    'predict': (parameters: {'hostedModelName': string, 'project': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                };
                'trainedmodels': {
                    'analyze': (parameters: {'id': string, 'project': string}, callback: (error: any, body: Analyze, response: any) => void) => Request;
                    'delete': (parameters: {'id': string, 'project': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'project': string}, callback: (error: any, body: Insert2, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Insert2, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: List, response: any) => void) => Request;
                    'predict': (parameters: {'id': string, 'project': string}, callback: (error: any, body: Output, response: any) => void) => Request;
                    'update': (parameters: {'id': string, 'project': string}, callback: (error: any, body: Insert2, response: any) => void) => Request;
                };

            }

            interface Analyze {
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
                }[];
                'id': string;
                'kind': string;
                'modelDescription': {
                    'confusionMatrix': {
                        [name: string]: {
                        [name: string]: string
                    }
                    };
                    'confusionMatrixRowTotals': {
                        [name: string]: string
                    };
                    'modelinfo': Insert2;
                };
                'selfLink': string;
            }

            interface Input {
                'input': {
                    'csvInstance': any[];
                };
            }

            interface Insert {
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
                }[];
            }

            interface Insert2 {
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

            interface List {
                'items': Insert2[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Output {
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

            interface Update {
                'csvInstance': any[];
                'output': string;
            }

        }
    }
}