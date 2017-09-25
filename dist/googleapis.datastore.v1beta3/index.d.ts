// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        datastore(version: string): any;
        datastore(version: 'v1beta3'): datastore.v1beta3.Datastore;
    }

    namespace datastore {
        namespace v1beta3 {
            export interface Datastore {
                new(options: any): Datastore;

                'projects': {
                    'beginTransaction': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: BeginTransactionResponse, response: any) => void) => Request;
                    'commit': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: CommitResponse, response: any) => void) => Request;
                    'runQuery': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: RunQueryResponse, response: any) => void) => Request;
                    'rollback': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: RollbackResponse, response: any) => void) => Request;
                    'lookup': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: LookupResponse, response: any) => void) => Request;
                    'allocateIds': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: AllocateIdsResponse, response: any) => void) => Request;
                };

            }

            export interface MutationResult {
                'conflictDetected': boolean;
                'key': Key;
                'version': string;
            }

            export interface GqlQuery {
                'queryString': string;
                'positionalBindings': GqlQueryParameter[];
                'namedBindings': {
                    [name: string]: GqlQueryParameter
                ;
                };
                'allowLiterals': boolean;
            }

            export interface Filter {
                'compositeFilter': CompositeFilter;
                'propertyFilter': PropertyFilter;
            }

            export interface RunQueryRequest {
                'readOptions': ReadOptions;
                'query': Query;
                'gqlQuery': GqlQuery;
                'partitionId': PartitionId;
            }

            export interface RollbackRequest {
                'transaction': string;
            }

            export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {
                'common': GoogleDatastoreAdminV1beta1CommonMetadata;
                'progressBytes': GoogleDatastoreAdminV1beta1Progress;
                'outputUrlPrefix': string;
                'entityFilter': GoogleDatastoreAdminV1beta1EntityFilter;
                'progressEntities': GoogleDatastoreAdminV1beta1Progress;
            }

            export interface TransactionOptions {
                'readOnly': ReadOnly;
                'readWrite': ReadWrite;
            }

            export interface CompositeFilter {
                'op': string;
                'filters': Filter[];
            }

            export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
                'entityFilter': GoogleDatastoreAdminV1beta1EntityFilter;
                'progressEntities': GoogleDatastoreAdminV1beta1Progress;
                'common': GoogleDatastoreAdminV1beta1CommonMetadata;
                'inputUrl': string;
                'progressBytes': GoogleDatastoreAdminV1beta1Progress;
            }

            export interface AllocateIdsResponse {
                'keys': Key[];
            }

            export interface Query {
                'limit': number;
                'filter': Filter;
                'startCursor': string;
                'offset': number;
                'kind': KindExpression[];
                'distinctOn': PropertyReference[];
                'order': PropertyOrder[];
                'projection': Projection[];
                'endCursor': string;
            }

            export interface ReadOnly {}

            export interface PropertyFilter {
                'value': Value;
                'property': PropertyReference;
                'op': string;
            }

            export interface EntityResult {
                'cursor': string;
                'version': string;
                'entity': Entity;
            }

            export interface Value {
                'excludeFromIndexes': boolean;
                'doubleValue': number;
                'timestampValue': string;
                'booleanValue': boolean;
                'nullValue': string;
                'blobValue': string;
                'meaning': number;
                'arrayValue': ArrayValue;
                'entityValue': Entity;
                'geoPointValue': LatLng;
                'integerValue': string;
                'keyValue': Key;
                'stringValue': string;
            }

            export interface CommitResponse {
                'indexUpdates': number;
                'mutationResults': MutationResult[];
            }

            export interface PartitionId {
                'projectId': string;
                'namespaceId': string;
            }

            export interface Entity {
                'properties': {
                    [name: string]: Value
                ;
                };
                'key': Key;
            }

            export interface ReadWrite {
                'previousTransaction': string;
            }

            export interface LookupRequest {
                'readOptions': ReadOptions;
                'keys': Key[];
            }

            export interface QueryResultBatch {
                'skippedCursor': string;
                'skippedResults': number;
                'entityResultType': string;
                'entityResults': EntityResult[];
                'moreResults': string;
                'endCursor': string;
                'snapshotVersion': string;
            }

            export interface GoogleDatastoreAdminV1beta1Progress {
                'workEstimated': string;
                'workCompleted': string;
            }

            export interface PathElement {
                'name': string;
                'kind': string;
                'id': string;
            }

            export interface GqlQueryParameter {
                'value': Value;
                'cursor': string;
            }

            export interface BeginTransactionResponse {
                'transaction': string;
            }

            export interface RunQueryResponse {
                'query': Query;
                'batch': QueryResultBatch;
            }

            export interface LookupResponse {
                'missing': EntityResult[];
                'found': EntityResult[];
                'deferred': Key[];
            }

            export interface AllocateIdsRequest {
                'keys': Key[];
            }

            export interface CommitRequest {
                'transaction': string;
                'mode': string;
                'mutations': Mutation[];
            }

            export interface BeginTransactionRequest {
                'transactionOptions': TransactionOptions;
            }

            export interface PropertyOrder {
                'direction': string;
                'property': PropertyReference;
            }

            export interface KindExpression {
                'name': string;
            }

            export interface LatLng {
                'latitude': number;
                'longitude': number;
            }

            export interface Key {
                'path': PathElement[];
                'partitionId': PartitionId;
            }

            export interface PropertyReference {
                'name': string;
            }

            export interface GoogleDatastoreAdminV1beta1EntityFilter {
                'kinds': string[];
                'namespaceIds': string[];
            }

            export interface GoogleDatastoreAdminV1beta1CommonMetadata {
                'startTime': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'endTime': string;
                'state': string;
                'operationType': string;
            }

            export interface Projection {
                'property': PropertyReference;
            }

            export interface ArrayValue {
                'values': Value[];
            }

            export interface Mutation {
                'baseVersion': string;
                'insert': Entity;
                'update': Entity;
                'upsert': Entity;
                'delete': Key;
            }

            export interface ReadOptions {
                'transaction': string;
                'readConsistency': string;
            }

            export interface RollbackResponse {}

            export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
                'outputUrl': string;
            }

        }
    }
}
