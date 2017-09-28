// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        customsearch(version: string): any;
        customsearch(version: 'v1'): customsearch.v1.Customsearch;
    }

    namespace customsearch {
        namespace v1 {
            export interface Customsearch {
                new(options: any): Customsearch;

                'cse': {
                    'list': (parameters: { [key: string]: any; 'c2coff'?: string, 'cr'?: string, 'cx'?: string, 'dateRestrict'?: string, 'exactTerms'?: string, 'excludeTerms'?: string, 'fileType'?: string, 'filter'?: string, 'gl'?: string, 'googlehost'?: string, 'highRange'?: string, 'hl'?: string, 'hq'?: string, 'imgColorType'?: string, 'imgDominantColor'?: string, 'imgSize'?: string, 'imgType'?: string, 'linkSite'?: string, 'lowRange'?: string, 'lr'?: string, 'num'?: number, 'orTerms'?: string, 'q': string, 'relatedSite'?: string, 'rights'?: string, 'safe'?: string, 'searchType'?: string, 'siteSearch'?: string, 'siteSearchFilter'?: string, 'sort'?: string, 'start'?: number}, callback: (error: any, body: Search, response: any) => void) => Request;
                };

            }

            export interface Context {
                'facets': {
                    'anchor': string;
                    'label': string;
                    'label_with_op': string;
                }[][];
                'title': string;
            }

            export interface Promotion {
                'bodyLines': {
                    'htmlTitle': string;
                    'link': string;
                    'title': string;
                    'url': string;
                }[];
                'displayLink': string;
                'htmlTitle': string;
                'image': {
                    'height': number;
                    'source': string;
                    'width': number;
                };
                'link': string;
                'title': string;
            }

            export interface Query {
                'count': number;
                'cr': string;
                'cx': string;
                'dateRestrict': string;
                'disableCnTwTranslation': string;
                'exactTerms': string;
                'excludeTerms': string;
                'fileType': string;
                'filter': string;
                'gl': string;
                'googleHost': string;
                'highRange': string;
                'hl': string;
                'hq': string;
                'imgColorType': string;
                'imgDominantColor': string;
                'imgSize': string;
                'imgType': string;
                'inputEncoding': string;
                'language': string;
                'linkSite': string;
                'lowRange': string;
                'orTerms': string;
                'outputEncoding': string;
                'relatedSite': string;
                'rights': string;
                'safe': string;
                'searchTerms': string;
                'searchType': string;
                'siteSearch': string;
                'siteSearchFilter': string;
                'sort': string;
                'startIndex': number;
                'startPage': number;
                'title': string;
                'totalResults': string;
            }

            export interface Result {
                'cacheId': string;
                'displayLink': string;
                'fileFormat': string;
                'formattedUrl': string;
                'htmlFormattedUrl': string;
                'htmlSnippet': string;
                'htmlTitle': string;
                'image': {
                    'byteSize': number;
                    'contextLink': string;
                    'height': number;
                    'thumbnailHeight': number;
                    'thumbnailLink': string;
                    'thumbnailWidth': number;
                    'width': number;
                };
                'kind': string;
                'labels': {
                    'displayName': string;
                    'label_with_op': string;
                    'name': string;
                }[];
                'link': string;
                'mime': string;
                'pagemap': {
                    [name: string]: {
                        [name: string]: any
                    ;
                    }[]
                ;
                };
                'snippet': string;
                'title': string;
            }

            export interface Search {
                'context': Context;
                'items': Result[];
                'kind': string;
                'promotions': Promotion[];
                'queries': {
                    [name: string]: Query[]
                ;
                };
                'searchInformation': {
                    'formattedSearchTime': string;
                    'formattedTotalResults': string;
                    'searchTime': number;
                    'totalResults': string;
                };
                'spelling': {
                    'correctedQuery': string;
                    'htmlCorrectedQuery': string;
                };
                'url': {
                    'template': string;
                    'type': string;
                };
            }

        }
    }
}
