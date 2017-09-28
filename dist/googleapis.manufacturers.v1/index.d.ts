// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        manufacturers(version: string): any;
        manufacturers(version: 'v1'): manufacturers.v1.Manufacturers;
    }

    namespace manufacturers {
        namespace v1 {
            export interface Manufacturers {
                new(options: any): Manufacturers;

                'accounts': {
                    'products': {
                        'delete': (parameters: { [key: string]: any; 'parent': string, 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string, 'parent': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListProductsResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'parent': string, 'name': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    };
                };

            }

            export interface Count {
                'unit': string;
                'value': string;
            }

            export interface Product {
                'issues': Issue[];
                'manuallyDeletedAttributes': string[];
                'finalAttributes': Attributes;
                'productId': string;
                'uploadedAttributes': Attributes;
                'parent': string;
                'manuallyProvidedAttributes': Attributes;
                'targetCountry': string;
                'contentLanguage': string;
                'name': string;
            }

            export interface Capacity {
                'unit': string;
                'value': string;
            }

            export interface ListProductsResponse {
                'products': Product[];
                'nextPageToken': string;
            }

            export interface ProductDetail {
                'sectionName': string;
                'attributeName': string;
                'attributeValue': string;
            }

            export interface FeatureDescription {
                'image': Image;
                'headline': string;
                'text': string;
            }

            export interface Issue {
                'timestamp': string;
                'severity': string;
                'description': string;
                'type': string;
                'attribute': string;
            }

            export interface Price {
                'currency': string;
                'amount': string;
            }

            export interface Empty {}

            export interface Image {
                'type': string;
                'imageUrl': string;
                'status': string;
            }

            export interface Attributes {
                'disclosureDate': string;
                'material': string;
                'scent': string;
                'ageGroup': string;
                'productDetail': ProductDetail[];
                'flavor': string;
                'mpn': string;
                'productPageUrl': string;
                'releaseDate': string;
                'gtin': string[];
                'itemGroupId': string;
                'productLine': string;
                'capacity': Capacity;
                'description': string;
                'gender': string;
                'sizeSystem': string;
                'theme': string;
                'pattern': string;
                'imageLink': Image;
                'productType': string[];
                'format': string;
                'additionalImageLink': Image[];
                'videoLink': string[];
                'color': string;
                'productName': string;
                'sizeType': string;
                'suggestedRetailPrice': Price;
                'featureDescription': FeatureDescription[];
                'targetAccountId': string;
                'size': string;
                'title': string;
                'count': Count;
                'brand': string;
            }

        }
    }
}
