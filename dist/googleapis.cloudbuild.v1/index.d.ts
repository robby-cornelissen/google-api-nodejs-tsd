// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudbuild(version: string): any;
        cloudbuild(version: 'v1'): cloudbuild.v1.Cloudbuild;
    }

    namespace cloudbuild {
        namespace v1 {
            export interface Cloudbuild {
                new(options: any): Cloudbuild;

                'operations': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'name': string, 'pageSize'?: number}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'projects': {
                    'builds': {
                        'cancel': (parameters: { [key: string]: any; 'projectId': string, 'id': string}, callback: (error: any, body: Build, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'projectId': string, 'filter'?: string, 'pageToken'?: string}, callback: (error: any, body: ListBuildsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'projectId': string, 'id': string}, callback: (error: any, body: Build, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    };
                    'triggers': {
                        'patch': (parameters: { [key: string]: any; 'triggerId': string, 'projectId': string}, callback: (error: any, body: BuildTrigger, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: ListBuildTriggersResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'triggerId': string, 'projectId': string}, callback: (error: any, body: BuildTrigger, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: BuildTrigger, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'triggerId': string, 'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };

            }

            export interface BuiltImage {
                'digest': string;
                'name': string;
            }

            export interface BuildStep {
                'args': string[];
                'name': string;
                'entrypoint': string;
                'secretEnv': string[];
                'id': string;
                'volumes': Volume[];
                'dir': string;
                'waitFor': string[];
                'env': string[];
            }

            export interface RepoSource {
                'branchName': string;
                'repoName': string;
                'projectId': string;
                'commitSha': string;
                'tagName': string;
            }

            export interface Hash {
                'type': string;
                'value': string;
            }

            export interface FileHashes {
                'fileHash': Hash[];
            }

            export interface Secret {
                'secretEnv': {
                    [name: string]: string
                ;
                };
                'kmsKeyName': string;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface Empty {}

            export interface BuildTrigger {
                'id': string;
                'build': Build;
                'substitutions': {
                    [name: string]: string
                ;
                };
                'description': string;
                'createTime': string;
                'disabled': boolean;
                'filename': string;
                'triggerTemplate': RepoSource;
            }

            export interface Build {
                'results': Results;
                'logsBucket': string;
                'steps': BuildStep[];
                'buildTriggerId': string;
                'tags': string[];
                'id': string;
                'substitutions': {
                    [name: string]: string
                ;
                };
                'startTime': string;
                'createTime': string;
                'sourceProvenance': SourceProvenance;
                'images': string[];
                'projectId': string;
                'finishTime': string;
                'logUrl': string;
                'options': BuildOptions;
                'source': Source;
                'statusDetail': string;
                'status': string;
                'timeout': string;
                'secrets': Secret[];
            }

            export interface CancelBuildRequest {}

            export interface Volume {
                'path': string;
                'name': string;
            }

            export interface ListBuildsResponse {
                'nextPageToken': string;
                'builds': Build[];
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface Source {
                'storageSource': StorageSource;
                'repoSource': RepoSource;
            }

            export interface BuildOptions {
                'substitutionOption': string;
                'requestedVerifyOption': string;
                'sourceProvenanceHash': string[];
            }

            export interface StorageSource {
                'generation': string;
                'bucket': string;
                'object': string;
            }

            export interface Results {
                'buildStepImages': string[];
                'images': BuiltImage[];
            }

            export interface BuildOperationMetadata {
                'build': Build;
            }

            export interface SourceProvenance {
                'resolvedRepoSource': RepoSource;
                'resolvedStorageSource': StorageSource;
                'fileHashes': {
                    [name: string]: FileHashes
                ;
                };
            }

            export interface CancelOperationRequest {}

            export interface Operation {
                'done': boolean;
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
            }

            export interface ListBuildTriggersResponse {
                'triggers': BuildTrigger[];
            }

        }
    }
}
