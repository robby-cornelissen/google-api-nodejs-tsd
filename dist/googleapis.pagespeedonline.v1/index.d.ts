// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        pagespeedonline(version: string): any;
        pagespeedonline(version: 'v1'): pagespeedonline.v1.Pagespeedonline;
    }

    namespace pagespeedonline {
        namespace v1 {
            export interface Pagespeedonline {
                new(options: any): Pagespeedonline;

                'pagespeedapi': {
                    'runpagespeed': (parameters: { [key: string]: any; 'filter_third_party_resources'?: boolean, 'locale'?: string, 'rule'?: string, 'screenshot'?: boolean, 'strategy'?: string, 'url': string}, callback: (error: any, body: Result, response: any) => void) => Request;
                };

            }

            export interface Result {
                'formattedResults': {
                    'locale': string;
                    'ruleResults': {
                        [name: string]: {
                            'localizedRuleName': string;
                            'ruleImpact': number;
                            'urlBlocks': {
                                'header': {
                                    'args': {
                                        'type': string;
                                        'value': string;
                                    }[];
                                    'format': string;
                                };
                                'urls': {
                                    'details': {
                                        'args': {
                                            'type': string;
                                            'value': string;
                                        }[];
                                        'format': string;
                                    }[];
                                    'result': {
                                        'args': {
                                            'type': string;
                                            'value': string;
                                        }[];
                                        'format': string;
                                    };
                                }[];
                            }[];
                        }
                    ;
                    };
                };
                'id': string;
                'invalidRules': string[];
                'kind': string;
                'pageStats': {
                    'cssResponseBytes': string;
                    'flashResponseBytes': string;
                    'htmlResponseBytes': string;
                    'imageResponseBytes': string;
                    'javascriptResponseBytes': string;
                    'numberCssResources': number;
                    'numberHosts': number;
                    'numberJsResources': number;
                    'numberResources': number;
                    'numberStaticResources': number;
                    'otherResponseBytes': string;
                    'textResponseBytes': string;
                    'totalRequestBytes': string;
                };
                'responseCode': number;
                'score': number;
                'screenshot': {
                    'data': string;
                    'height': number;
                    'mime_type': string;
                    'width': number;
                };
                'title': string;
                'version': {
                    'major': number;
                    'minor': number;
                };
            }

        }
    }
}
