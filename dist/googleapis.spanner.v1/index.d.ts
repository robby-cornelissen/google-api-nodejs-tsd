// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        spanner(version: string): any;
        spanner(version: 'v1'): spanner.v1.Spanner;
    }

    namespace spanner {
        namespace v1 {
            export interface Spanner {
                new(options: any): Spanner;

                'projects': {
                    'instanceConfigs': {
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'parent': string, 'pageToken'?: string}, callback: (error: any, body: ListInstanceConfigsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: InstanceConfig, response: any) => void) => Request;
                    };
                    'instances': {
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'parent': string, 'filter'?: string, 'pageToken'?: string}, callback: (error: any, body: ListInstancesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Instance, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;

                        'databases': {
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                            'getDdl': (parameters: { [key: string]: any; 'database': string}, callback: (error: any, body: GetDatabaseDdlResponse, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListDatabasesResponse, response: any) => void) => Request;
                            'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Database, response: any) => void) => Request;
                            'dropDatabase': (parameters: { [key: string]: any; 'database': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'updateDdl': (parameters: { [key: string]: any; 'database': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'operations': {
                                'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'filter'?: string, 'name': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                            'sessions': {
                                'read': (parameters: { [key: string]: any; 'session': string}, callback: (error: any, body: ResultSet, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Session, response: any) => void) => Request;
                                'commit': (parameters: { [key: string]: any; 'session': string}, callback: (error: any, body: CommitResponse, response: any) => void) => Request;
                                'beginTransaction': (parameters: { [key: string]: any; 'session': string}, callback: (error: any, body: Transaction, response: any) => void) => Request;
                                'executeStreamingSql': (parameters: { [key: string]: any; 'session': string}, callback: (error: any, body: PartialResultSet, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'executeSql': (parameters: { [key: string]: any; 'session': string}, callback: (error: any, body: ResultSet, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'database': string, 'filter'?: string, 'pageToken'?: string}, callback: (error: any, body: ListSessionsResponse, response: any) => void) => Request;
                                'streamingRead': (parameters: { [key: string]: any; 'session': string}, callback: (error: any, body: PartialResultSet, response: any) => void) => Request;
                                'rollback': (parameters: { [key: string]: any; 'session': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'database': string}, callback: (error: any, body: Session, response: any) => void) => Request;
                            };
                        };
                        'operations': {
                            'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'filter'?: string, 'name': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Database {
                'state': string;
                'name': string;
            }

            export interface Instance {
                'displayName': string;
                'nodeCount': number;
                'labels': {
                    [name: string]: string
                ;
                };
                'config': string;
                'state': string;
                'name': string;
            }

            export interface ListDatabasesResponse {
                'nextPageToken': string;
                'databases': Database[];
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface RollbackRequest {
                'transactionId': string;
            }

            export interface Transaction {
                'id': string;
                'readTimestamp': string;
            }

            export interface UpdateDatabaseDdlMetadata {
                'statements': string[];
                'commitTimestamps': string[];
                'database': string;
            }

            export interface StructType {
                'fields': Field[];
            }

            export interface QueryPlan {
                'planNodes': PlanNode[];
            }

            export interface Field {
                'type': Type;
                'name': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface ResultSetStats {
                'queryStats': {
                    [name: string]: any
                ;
                };
                'queryPlan': QueryPlan;
            }

            export interface CommitResponse {
                'commitTimestamp': string;
            }

            export interface Type {
                'arrayElementType': Type;
                'code': string;
                'structType': StructType;
            }

            export interface PlanNode {
                'displayName': string;
                'kind': string;
                'childLinks': ChildLink[];
                'metadata': {
                    [name: string]: any
                ;
                };
                'executionStats': {
                    [name: string]: any
                ;
                };
                'shortRepresentation': ShortRepresentation;
                'index': number;
            }

            export interface CreateInstanceMetadata {
                'cancelTime': string;
                'endTime': string;
                'instance': Instance;
                'startTime': string;
            }

            export interface ChildLink {
                'type': string;
                'childIndex': number;
                'variable': string;
            }

            export interface Delete {
                'table': string;
                'keySet': KeySet;
            }

            export interface CommitRequest {
                'singleUseTransaction': TransactionOptions;
                'mutations': Mutation[];
                'transactionId': string;
            }

            export interface BeginTransactionRequest {
                'options': TransactionOptions;
            }

            export interface ListInstanceConfigsResponse {
                'nextPageToken': string;
                'instanceConfigs': InstanceConfig[];
            }

            export interface GetIamPolicyRequest {}

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface CreateDatabaseMetadata {
                'database': string;
            }

            export interface ListSessionsResponse {
                'sessions': Session[];
                'nextPageToken': string;
            }

            export interface Session {
                'labels': {
                    [name: string]: string
                ;
                };
                'createTime': string;
                'name': string;
                'approximateLastUseTime': string;
            }

            export interface KeyRange {
                'endOpen': any[];
                'endClosed': any[];
                'startClosed': any[];
                'startOpen': any[];
            }

            export interface ListInstancesResponse {
                'instances': Instance[];
                'nextPageToken': string;
            }

            export interface ShortRepresentation {
                'description': string;
                'subqueries': {
                    [name: string]: number
                ;
                };
            }

            export interface InstanceConfig {
                'displayName': string;
                'name': string;
            }

            export interface UpdateInstanceRequest {
                'instance': Instance;
                'fieldMask': string;
            }

            export interface Empty {}

            export interface TransactionOptions {
                'readWrite': ReadWrite;
                'readOnly': ReadOnly;
            }

            export interface CreateDatabaseRequest {
                'extraStatements': string[];
                'createStatement': string;
            }

            export interface CreateInstanceRequest {
                'instanceId': string;
                'instance': Instance;
            }

            export interface ReadOnly {
                'maxStaleness': string;
                'readTimestamp': string;
                'returnReadTimestamp': boolean;
                'exactStaleness': string;
                'strong': boolean;
                'minReadTimestamp': string;
            }

            export interface ExecuteSqlRequest {
                'paramTypes': {
                    [name: string]: Type
                ;
                };
                'sql': string;
                'params': {
                    [name: string]: any
                ;
                };
                'queryMode': string;
                'transaction': TransactionSelector;
                'resumeToken': string;
            }

            export interface Policy {
                'bindings': Binding[];
                'etag': string;
                'version': number;
            }

            export interface ReadRequest {
                'columns': string[];
                'transaction': TransactionSelector;
                'resumeToken': string;
                'table': string;
                'limit': string;
                'index': string;
                'keySet': KeySet;
            }

            export interface Write {
                'columns': string[];
                'values': any[][];
                'table': string;
            }

            export interface ReadWrite {}

            export interface Operation {
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
            }

            export interface ResultSet {
                'stats': ResultSetStats;
                'rows': any[][];
                'metadata': ResultSetMetadata;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface CreateSessionRequest {
                'session': Session;
            }

            export interface UpdateDatabaseDdlRequest {
                'statements': string[];
                'operationId': string;
            }

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface PartialResultSet {
                'chunkedValue': boolean;
                'metadata': ResultSetMetadata;
                'values': any[];
                'resumeToken': string;
                'stats': ResultSetStats;
            }

            export interface UpdateInstanceMetadata {
                'cancelTime': string;
                'endTime': string;
                'instance': Instance;
                'startTime': string;
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface ResultSetMetadata {
                'rowType': StructType;
                'transaction': Transaction;
            }

            export interface TransactionSelector {
                'singleUse': TransactionOptions;
                'begin': TransactionOptions;
                'id': string;
            }

            export interface KeySet {
                'ranges': KeyRange[];
                'keys': any[][];
                'all': boolean;
            }

            export interface Mutation {
                'insert': Write;
                'insertOrUpdate': Write;
                'update': Write;
                'replace': Write;
                'delete': Delete;
            }

            export interface GetDatabaseDdlResponse {
                'statements': string[];
            }

        }
    }
}
