// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        datastore(version: string): any;
        datastore(version: 'v1beta3'): datastore.v1beta3.Datastore;
    }

    namespace datastore {
        namespace v1beta3 {
            export interface Datastore {
                new(options: any): Datastore;

                'projects': {
                    'runQuery': (parameters: {'projectId': string}, callback: (error: any, body: RunQueryResponse, response: any) => void) => Request;
                    'beginTransaction': (parameters: {'projectId': string}, callback: (error: any, body: BeginTransactionResponse, response: any) => void) => Request;
                    'allocateIds': (parameters: {'projectId': string}, callback: (error: any, body: AllocateIdsResponse, response: any) => void) => Request;
                    'lookup': (parameters: {'projectId': string}, callback: (error: any, body: LookupResponse, response: any) => void) => Request;
                    'commit': (parameters: {'projectId': string}, callback: (error: any, body: CommitResponse, response: any) => void) => Request;
                    'rollback': (parameters: {'projectId': string}, callback: (error: any, body: RollbackResponse, response: any) => void) => Request;
                };

            }

            export interface Value {
                'stringValue': string;
                'arrayValue': ArrayValue;
                'entityValue': Entity;
                'meaning': number;
                'integerValue': string;
                'doubleValue': number;
                'geoPointValue': LatLng;
                'blobValue': string;
                'nullValue': string;
                'keyValue': Key;
                'booleanValue': boolean;
                'excludeFromIndexes': boolean;
                'timestampValue': string;
            }

            export interface ReadOptions {
                'transaction': string;
                'readConsistency': string;
            }

            export interface PropertyOrder {
                'direction': string;
                'property': PropertyReference;
            }

            export interface CommitRequest {
                'transaction': string;
                'mutations': Mutation[];
                'mode': string;
            }

            export interface RollbackRequest {
                'transaction': string;
            }

            export interface Query {
                'limit': number;
                'filter': Filter;
                'endCursor': string;
                'distinctOn': PropertyReference[];
                'offset': number;
                'projection': Projection[];
                'startCursor': string;
                'order': PropertyOrder[];
                'kind': KindExpression[];
            }

            export interface EntityResult {
                'cursor': string;
                'entity': Entity;
            }

            export interface GqlQueryParameter {
                'cursor': string;
                'value': Value;
            }

            export interface BeginTransactionResponse {
                'transaction': string;
            }

            export interface Filter {
                'propertyFilter': PropertyFilter;
                'compositeFilter': CompositeFilter;
            }

            export interface ArrayValue {
                'values': Value[];
            }

            export interface PartitionId {
                'namespaceId': string;
                'projectId': string;
            }

            export interface QueryResultBatch {
                'endCursor': string;
                'skippedCursor': string;
                'entityResultType': string;
                'moreResults': string;
                'entityResults': EntityResult[];
                'skippedResults': number;
            }

            export interface AllocateIdsRequest {
                'keys': Key[];
            }

            export interface PropertyFilter {
                'value': Value;
                'op': string;
                'property': PropertyReference;
            }

            export interface KindExpression {
                'name': string;
            }

            export interface PathElement {
                'kind': string;
                'name': string;
                'id': string;
            }

            export interface RollbackResponse {}

            export interface PropertyReference {
                'name': string;
            }

            export interface Projection {
                'property': PropertyReference;
            }

            export interface AllocateIdsResponse {
                'keys': Key[];
            }

            export interface MutationResult {
                'key': Key;
            }

            export interface LookupResponse {
                'found': EntityResult[];
                'deferred': Key[];
                'missing': EntityResult[];
            }

            export interface BeginTransactionRequest {}

            export interface Key {
                'partitionId': PartitionId;
                'path': PathElement[];
            }

            export interface RunQueryResponse {
                'batch': QueryResultBatch;
                'query': Query;
            }

            export interface Entity {
                'properties': {
                    [name: string]: Value
                
                };
                'key': Key;
            }

            export interface GqlQuery {
                'namedBindings': {
                    [name: string]: GqlQueryParameter
                
                };
                'queryString': string;
                'allowLiterals': boolean;
                'positionalBindings': GqlQueryParameter[];
            }

            export interface CommitResponse {
                'mutationResults': MutationResult[];
                'indexUpdates': number;
            }

            export interface Mutation {
                'update': Entity;
                'insert': Entity;
                'delete': Key;
                'upsert': Entity;
            }

            export interface RunQueryRequest {
                'partitionId': PartitionId;
                'gqlQuery': GqlQuery;
                'query': Query;
                'readOptions': ReadOptions;
            }

            export interface CompositeFilter {
                'op': string;
                'filters': Filter[];
            }

            export interface LatLng {
                'longitude': number;
                'latitude': number;
            }

            export interface LookupRequest {
                'keys': Key[];
                'readOptions': ReadOptions;
            }

        }
    }
}