// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        freebase(version: string): any;
        freebase(version: 'v1'): freebase.v1.Freebase;
    }

    namespace freebase {
        namespace v1 {
            export interface Freebase {
                new(options: any): Freebase;

                'reconcile': (parameters: {'confidence'?: number, 'kind'?: string, 'lang'?: string, 'limit'?: number, 'name'?: string, 'prop'?: string}, callback: (error: any, body: ReconcileGet, response: any) => void) => Request;
                'search': (parameters: {'as_of_time'?: string, 'callback'?: string, 'cursor'?: number, 'domain'?: string, 'encode'?: string, 'exact'?: boolean, 'filter'?: string, 'format'?: string, 'help'?: string, 'indent'?: boolean, 'lang'?: string, 'limit'?: number, 'mid'?: string, 'mql_output'?: string, 'output'?: string, 'prefixed'?: boolean, 'query'?: string, 'scoring'?: string, 'spell'?: string, 'stemmed'?: boolean, 'type'?: string, 'with'?: string, 'without'?: string}, callback: (error: any, body: any, response: any) => void) => Request;

            }

            export interface ReconcileCandidate {
                'confidence': number;
                'lang': string;
                'mid': string;
                'name': string;
                'notable': {
                    'id': string;
                    'name': string;
                };
            }

            export interface ReconcileGet {
                'candidate': ReconcileCandidate[];
                'costs': {
                    'hits': number;
                    'ms': number;
                };
                'match': ReconcileCandidate;
                'warning': {
                    'location': string;
                    'message': string;
                    'reason': string;
                }[];
            }

        }
    }
}