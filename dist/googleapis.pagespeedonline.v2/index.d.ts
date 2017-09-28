// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        pagespeedonline(version: string): any;
        pagespeedonline(version: 'v2'): pagespeedonline.v2.Pagespeedonline;
    }

    namespace pagespeedonline {
        namespace v2 {
            export interface Pagespeedonline {
                new(options: any): Pagespeedonline;

                'pagespeedapi': {
                    'runpagespeed': (parameters: { [key: string]: any; 'filter_third_party_resources'?: boolean, 'locale'?: string, 'rule'?: string, 'screenshot'?: boolean, 'strategy'?: string, 'url': string}, callback: (error: any, body: Result, response: any) => void) => Request;
                };

            }

            export interface PagespeedApiFormatStringV2 {
                'args': {
                    'key': string;
                    'rects': {
                        'height': number;
                        'left': number;
                        'top': number;
                        'width': number;
                    }[];
                    'secondary_rects': {
                        'height': number;
                        'left': number;
                        'top': number;
                        'width': number;
                    }[];
                    'type': string;
                    'value': string;
                }[];
                'format': string;
            }

            export interface PagespeedApiImageV2 {
                'data': string;
                'height': number;
                'key': string;
                'mime_type': string;
                'page_rect': {
                    'height': number;
                    'left': number;
                    'top': number;
                    'width': number;
                };
                'width': number;
            }

            export interface Result {
                'formattedResults': {
                    'locale': string;
                    'ruleResults': {
                        [name: string]: {
                            'groups': string[];
                            'localizedRuleName': string;
                            'ruleImpact': number;
                            'summary': PagespeedApiFormatStringV2;
                            'urlBlocks': {
                                'header': PagespeedApiFormatStringV2;
                                'urls': {
                                    'details': PagespeedApiFormatStringV2[];
                                    'result': PagespeedApiFormatStringV2;
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
                'ruleGroups': {
                    [name: string]: {
                        'score': number;
                    }
                ;
                };
                'screenshot': PagespeedApiImageV2;
                'title': string;
                'version': {
                    'major': number;
                    'minor': number;
                };
            }

        }
    }
}
