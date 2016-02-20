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

            interface AllocateIdsRequest {
                'keys': Key[];
            }

            interface AllocateIdsResponse {
                'header': ResponseHeader;
                'keys': Key[];
            }

            interface BeginTransactionRequest {
                'isolationLevel': string;
            }

            interface BeginTransactionResponse {
                'header': ResponseHeader;
                'transaction': string;
            }

            interface CommitRequest {
                'ignoreReadOnly': boolean;
                'mode': string;
                'mutation': Mutation;
                'transaction': string;
            }

            interface CommitResponse {
                'header': ResponseHeader;
                'mutationResult': MutationResult;
            }

            interface CompositeFilter {
                'filters': Filter[];
                'operator': string;
            }

            interface Entity {
                'key': Key;
                'properties': {
                    [name: string]: Property
                };
            }

            interface EntityResult {
                'entity': Entity;
            }

            interface Filter {
                'compositeFilter': CompositeFilter;
                'propertyFilter': PropertyFilter;
            }

            interface GqlQuery {
                'allowLiteral': boolean;
                'nameArgs': GqlQueryArg[];
                'numberArgs': GqlQueryArg[];
                'queryString': string;
            }

            interface GqlQueryArg {
                'cursor': string;
                'name': string;
                'value': Value;
            }

            interface Key {
                'partitionId': PartitionId;
                'path': KeyPathElement[];
            }

            interface KeyPathElement {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface KindExpression {
                'name': string;
            }

            interface LookupRequest {
                'keys': Key[];
                'readOptions': ReadOptions;
            }

            interface LookupResponse {
                'deferred': Key[];
                'found': EntityResult[];
                'header': ResponseHeader;
                'missing': EntityResult[];
            }

            interface Mutation {
                'delete': Key[];
                'force': boolean;
                'insert': Entity[];
                'insertAutoId': Entity[];
                'update': Entity[];
                'upsert': Entity[];
            }

            interface MutationResult {
                'indexUpdates': number;
                'insertAutoIdKeys': Key[];
            }

            interface PartitionId {
                'datasetId': string;
                'namespace': string;
            }

            interface Property {
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

            interface PropertyExpression {
                'aggregationFunction': string;
                'property': PropertyReference;
            }

            interface PropertyFilter {
                'operator': string;
                'property': PropertyReference;
                'value': Value;
            }

            interface PropertyOrder {
                'direction': string;
                'property': PropertyReference;
            }

            interface PropertyReference {
                'name': string;
            }

            interface Query {
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

            interface QueryResultBatch {
                'endCursor': string;
                'entityResultType': string;
                'entityResults': EntityResult[];
                'moreResults': string;
                'skippedResults': number;
            }

            interface ReadOptions {
                'readConsistency': string;
                'transaction': string;
            }

            interface ResponseHeader {
                'kind': string;
            }

            interface RollbackRequest {
                'transaction': string;
            }

            interface RollbackResponse {
                'header': ResponseHeader;
            }

            interface RunQueryRequest {
                'gqlQuery': GqlQuery;
                'partitionId': PartitionId;
                'query': Query;
                'readOptions': ReadOptions;
            }

            interface RunQueryResponse {
                'batch': QueryResultBatch;
                'header': ResponseHeader;
            }

            interface Value {
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