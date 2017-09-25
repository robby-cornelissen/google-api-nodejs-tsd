// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        datastore(version: string): any;
        datastore(version: 'v1'): datastore.v1.Datastore;
    }

    namespace datastore {
        namespace v1 {
            export interface Datastore {
                new(options: any): Datastore;

                'projects': {
                    'beginTransaction': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: BeginTransactionResponse, response: any) => void) => Request;
                    'commit': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: CommitResponse, response: any) => void) => Request;
                    'runQuery': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: RunQueryResponse, response: any) => void) => Request;
                    'rollback': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: RollbackResponse, response: any) => void) => Request;
                    'lookup': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: LookupResponse, response: any) => void) => Request;
                    'allocateIds': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: AllocateIdsResponse, response: any) => void) => Request;

                    'operations': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleLongrunningOperation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'name': string, 'pageSize'?: number}, callback: (error: any, body: GoogleLongrunningListOperationsResponse, response: any) => void) => Request;
                        'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };

            }

            export interface GoogleLongrunningListOperationsResponse {
                'nextPageToken': string;
                'operations': GoogleLongrunningOperation[];
            }

            export interface BeginTransactionResponse {
                'transaction': string;
            }

            export interface LookupResponse {
                'deferred': Key[];
                'missing': EntityResult[];
                'found': EntityResult[];
            }

            export interface AllocateIdsRequest {
                'keys': Key[];
            }

            export interface RunQueryResponse {
                'query': Query;
                'batch': QueryResultBatch;
            }

            export interface CommitRequest {
                'transaction': string;
                'mode': string;
                'mutations': Mutation[];
            }

            export interface PropertyOrder {
                'direction': string;
                'property': PropertyReference;
            }

            export interface BeginTransactionRequest {
                'transactionOptions': TransactionOptions;
            }

            export interface KindExpression {
                'name': string;
            }

            export interface Key {
                'path': PathElement[];
                'partitionId': PartitionId;
            }

            export interface LatLng {
                'latitude': number;
                'longitude': number;
            }

            export interface GoogleDatastoreAdminV1beta1EntityFilter {
                'kinds': string[];
                'namespaceIds': string[];
            }

            export interface PropertyReference {
                'name': string;
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

            export interface Projection {
                'property': PropertyReference;
            }

            export interface ArrayValue {
                'values': Value[];
            }

            export interface Mutation {
                'delete': Key;
                'baseVersion': string;
                'insert': Entity;
                'update': Entity;
                'upsert': Entity;
            }

            export interface ReadOptions {
                'transaction': string;
                'readConsistency': string;
            }

            export interface RollbackResponse {}

            export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
                'outputUrl': string;
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
                'propertyFilter': PropertyFilter;
                'compositeFilter': CompositeFilter;
            }

            export interface RollbackRequest {
                'transaction': string;
            }

            export interface RunQueryRequest {
                'readOptions': ReadOptions;
                'query': Query;
                'gqlQuery': GqlQuery;
                'partitionId': PartitionId;
            }

            export interface Empty {}

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
                'filters': Filter[];
                'op': string;
            }

            export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
                'common': GoogleDatastoreAdminV1beta1CommonMetadata;
                'inputUrl': string;
                'progressBytes': GoogleDatastoreAdminV1beta1Progress;
                'entityFilter': GoogleDatastoreAdminV1beta1EntityFilter;
                'progressEntities': GoogleDatastoreAdminV1beta1Progress;
            }

            export interface AllocateIdsResponse {
                'keys': Key[];
            }

            export interface Query {
                'projection': Projection[];
                'endCursor': string;
                'limit': number;
                'filter': Filter;
                'offset': number;
                'startCursor': string;
                'kind': KindExpression[];
                'distinctOn': PropertyReference[];
                'order': PropertyOrder[];
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

            export interface ReadOnly {}

            export interface PropertyFilter {
                'value': Value;
                'property': PropertyReference;
                'op': string;
            }

            export interface EntityResult {
                'entity': Entity;
                'cursor': string;
                'version': string;
            }

            export interface CommitResponse {
                'mutationResults': MutationResult[];
                'indexUpdates': number;
            }

            export interface Value {
                'blobValue': string;
                'meaning': number;
                'arrayValue': ArrayValue;
                'entityValue': Entity;
                'geoPointValue': LatLng;
                'integerValue': string;
                'keyValue': Key;
                'stringValue': string;
                'excludeFromIndexes': boolean;
                'doubleValue': number;
                'timestampValue': string;
                'booleanValue': boolean;
                'nullValue': string;
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
                'keys': Key[];
                'readOptions': ReadOptions;
            }

            export interface QueryResultBatch {
                'skippedCursor': string;
                'skippedResults': number;
                'entityResultType': string;
                'entityResults': EntityResult[];
                'endCursor': string;
                'moreResults': string;
                'snapshotVersion': string;
            }

            export interface GoogleDatastoreAdminV1beta1Progress {
                'workCompleted': string;
                'workEstimated': string;
            }

            export interface PathElement {
                'kind': string;
                'id': string;
                'name': string;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface GqlQueryParameter {
                'cursor': string;
                'value': Value;
            }

        }
    }
}
