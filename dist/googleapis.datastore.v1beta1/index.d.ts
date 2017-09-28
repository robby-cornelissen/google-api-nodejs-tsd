// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        datastore(version: string): any;
        datastore(version: 'v1beta1'): datastore.v1beta1.Datastore;
    }

    namespace datastore {
        namespace v1beta1 {
            export interface Datastore {
                new(options: any): Datastore;

                'projects': {
                    'export': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: GoogleLongrunningOperation, response: any) => void) => Request;
                    'import': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: GoogleLongrunningOperation, response: any) => void) => Request;
                };

            }

            export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {
                'outputUrlPrefix': string;
                'entityFilter': GoogleDatastoreAdminV1beta1EntityFilter;
                'progressEntities': GoogleDatastoreAdminV1beta1Progress;
                'common': GoogleDatastoreAdminV1beta1CommonMetadata;
                'progressBytes': GoogleDatastoreAdminV1beta1Progress;
            }

            export interface GoogleDatastoreAdminV1beta1ExportEntitiesRequest {
                'outputUrlPrefix': string;
                'entityFilter': GoogleDatastoreAdminV1beta1EntityFilter;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
                'outputUrl': string;
            }

            export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
                'entityFilter': GoogleDatastoreAdminV1beta1EntityFilter;
                'progressEntities': GoogleDatastoreAdminV1beta1Progress;
                'common': GoogleDatastoreAdminV1beta1CommonMetadata;
                'inputUrl': string;
                'progressBytes': GoogleDatastoreAdminV1beta1Progress;
            }

            export interface GoogleDatastoreAdminV1beta1ImportEntitiesRequest {
                'inputUrl': string;
                'entityFilter': GoogleDatastoreAdminV1beta1EntityFilter;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface GoogleDatastoreAdminV1beta1Progress {
                'workEstimated': string;
                'workCompleted': string;
            }

            export interface GoogleDatastoreAdminV1beta1EntityFilter {
                'kinds': string[];
                'namespaceIds': string[];
            }

            export interface GoogleLongrunningOperation {
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
            }

            export interface GoogleDatastoreAdminV1beta1CommonMetadata {
                'labels': {
                    [name: string]: string
                ;
                };
                'endTime': string;
                'state': string;
                'operationType': string;
                'startTime': string;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

        }
    }
}
