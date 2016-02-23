// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        datastore(version: string): any;
        datastore(version: 'v1beta2'): datastore.v1beta2.Datastore;
    }

    namespace datastore {
        namespace v1beta2 {
            export interface Datastore {
                new(options: any): Datastore;

                'datasets': {
                    'allocateIds': (parameters: {'datasetId': string}, callback: (error: any, body: AllocateIdsResponse, response: any) => void) => Request;
                    'beginTransaction': (parameters: {'datasetId': string}, callback: (error: any, body: BeginTransactionResponse, response: any) => void) => Request;
                    'commit': (parameters: {'datasetId': string}, callback: (error: any, body: CommitResponse, response: any) => void) => Request;
                    'lookup': (parameters: {'datasetId': string}, callback: (error: any, body: LookupResponse, response: any) => void) => Request;
                    'rollback': (parameters: {'datasetId': string}, callback: (error: any, body: RollbackResponse, response: any) => void) => Request;
                    'runQuery': (parameters: {'datasetId': string}, callback: (error: any, body: RunQueryResponse, response: any) => void) => Request;
                };

            }

            export interface AllocateIdsRequest {
                'keys': Key[];
            }

            export interface AllocateIdsResponse {
                'header': ResponseHeader;
                'keys': Key[];
            }

            export interface BeginTransactionRequest {
                'isolationLevel': string;
            }

            export interface BeginTransactionResponse {
                'header': ResponseHeader;
                'transaction': string;
            }

            export interface CommitRequest {
                'ignoreReadOnly': boolean;
                'mode': string;
                'mutation': Mutation;
                'transaction': string;
            }

            export interface CommitResponse {
                'header': ResponseHeader;
                'mutationResult': MutationResult;
            }

            export interface CompositeFilter {
                'filters': Filter[];
                'operator': string;
            }

            export interface Entity {
                'key': Key;
                'properties': {
                    [name: string]: Property
                
                };
            }

            export interface EntityResult {
                'entity': Entity;
            }

            export interface Filter {
                'compositeFilter': CompositeFilter;
                'propertyFilter': PropertyFilter;
            }

            export interface GqlQuery {
                'allowLiteral': boolean;
                'nameArgs': GqlQueryArg[];
                'numberArgs': GqlQueryArg[];
                'queryString': string;
            }

            export interface GqlQueryArg {
                'cursor': string;
                'name': string;
                'value': Value;
            }

            export interface Key {
                'partitionId': PartitionId;
                'path': KeyPathElement[];
            }

            export interface KeyPathElement {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface KindExpression {
                'name': string;
            }

            export interface LookupRequest {
                'keys': Key[];
                'readOptions': ReadOptions;
            }

            export interface LookupResponse {
                'deferred': Key[];
                'found': EntityResult[];
                'header': ResponseHeader;
                'missing': EntityResult[];
            }

            export interface Mutation {
                'delete': Key[];
                'force': boolean;
                'insert': Entity[];
                'insertAutoId': Entity[];
                'update': Entity[];
                'upsert': Entity[];
            }

            export interface MutationResult {
                'indexUpdates': number;
                'insertAutoIdKeys': Key[];
            }

            export interface PartitionId {
                'datasetId': string;
                'namespace': string;
            }

            export interface Property {
                'blobKeyValue': string;
                'blobValue': string;
                'booleanValue': boolean;
                'dateTimeValue': string;
                'doubleValue': number;
                'entityValue': Entity;
                'indexed': boolean;
                'integerValue': string;
                'keyValue': Key;
                'listValue': Value[];
                'meaning': number;
                'stringValue': string;
            }

            export interface PropertyExpression {
                'aggregationFunction': string;
                'property': PropertyReference;
            }

            export interface PropertyFilter {
                'operator': string;
                'property': PropertyReference;
                'value': Value;
            }

            export interface PropertyOrder {
                'direction': string;
                'property': PropertyReference;
            }

            export interface PropertyReference {
                'name': string;
            }

            export interface Query {
                'endCursor': string;
                'filter': Filter;
                'groupBy': PropertyReference[];
                'kinds': KindExpression[];
                'limit': number;
                'offset': number;
                'order': PropertyOrder[];
                'projection': PropertyExpression[];
                'startCursor': string;
            }

            export interface QueryResultBatch {
                'endCursor': string;
                'entityResultType': string;
                'entityResults': EntityResult[];
                'moreResults': string;
                'skippedResults': number;
            }

            export interface ReadOptions {
                'readConsistency': string;
                'transaction': string;
            }

            export interface ResponseHeader {
                'kind': string;
            }

            export interface RollbackRequest {
                'transaction': string;
            }

            export interface RollbackResponse {
                'header': ResponseHeader;
            }

            export interface RunQueryRequest {
                'gqlQuery': GqlQuery;
                'partitionId': PartitionId;
                'query': Query;
                'readOptions': ReadOptions;
            }

            export interface RunQueryResponse {
                'batch': QueryResultBatch;
                'header': ResponseHeader;
            }

            export interface Value {
                'blobKeyValue': string;
                'blobValue': string;
                'booleanValue': boolean;
                'dateTimeValue': string;
                'doubleValue': number;
                'entityValue': Entity;
                'indexed': boolean;
                'integerValue': string;
                'keyValue': Key;
                'listValue': Value[];
                'meaning': number;
                'stringValue': string;
            }

        }
    }
}