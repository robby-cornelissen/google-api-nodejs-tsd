// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        bigquery(version: string): any;
        bigquery(version: 'v2'): bigquery.v2.Bigquery;
    }

    namespace bigquery {
        namespace v2 {
            export interface Bigquery {
                new(options: any): Bigquery;

                'datasets': {
                    'delete': (parameters: {'datasetId': string, 'deleteContents'?: boolean, 'projectId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'datasetId': string, 'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'insert': (parameters: {'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'list': (parameters: {'all'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: DatasetList, response: any) => void) => Request;
                    'patch': (parameters: {'datasetId': string, 'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'update': (parameters: {'datasetId': string, 'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                };
                'jobs': {
                    'cancel': (parameters: {'jobId': string, 'projectId': string}, callback: (error: any, body: JobCancelResponse, response: any) => void) => Request;
                    'get': (parameters: {'jobId': string, 'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'getQueryResults': (parameters: {'jobId': string, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string, 'startIndex'?: string, 'timeoutMs'?: number}, callback: (error: any, body: GetQueryResultsResponse, response: any) => void) => Request;
                    'insert': (parameters: {'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'list': (parameters: {'allUsers'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string, 'projection'?: string, 'stateFilter'?: string}, callback: (error: any, body: JobList, response: any) => void) => Request;
                    'query': (parameters: {'projectId': string}, callback: (error: any, body: QueryResponse, response: any) => void) => Request;
                };
                'projects': {
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: ProjectList, response: any) => void) => Request;
                };
                'tabledata': {
                    'insertAll': (parameters: {'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: TableDataInsertAllResponse, response: any) => void) => Request;
                    'list': (parameters: {'datasetId': string, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string, 'startIndex'?: string, 'tableId': string}, callback: (error: any, body: TableDataList, response: any) => void) => Request;
                };
                'tables': {
                    'delete': (parameters: {'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'insert': (parameters: {'datasetId': string, 'projectId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'list': (parameters: {'datasetId': string, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: TableList, response: any) => void) => Request;
                    'patch': (parameters: {'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'update': (parameters: {'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                };

            }

            export interface CsvOptions {
                'allowJaggedRows': boolean;
                'allowQuotedNewlines': boolean;
                'encoding': string;
                'fieldDelimiter': string;
                'quote': string;
                'skipLeadingRows': number;
            }

            export interface Dataset {
                'access': {
                    'domain': string;
                    'groupByEmail': string;
                    'role': string;
                    'specialGroup': string;
                    'userByEmail': string;
                    'view': TableReference;
                }[];
                'creationTime': string;
                'datasetReference': DatasetReference;
                'defaultTableExpirationMs': string;
                'description': string;
                'etag': string;
                'friendlyName': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'location': string;
                'selfLink': string;
            }

            export interface DatasetList {
                'datasets': {
                    'datasetReference': DatasetReference;
                    'friendlyName': string;
                    'id': string;
                    'kind': string;
                }[];
                'etag': string;
                'kind': string;
                'nextPageToken': string;
            }

            export interface DatasetReference {
                'datasetId': string;
                'projectId': string;
            }

            export interface ErrorProto {
                'debugInfo': string;
                'location': string;
                'message': string;
                'reason': string;
            }

            export interface ExplainQueryStage {
                'computeRatioAvg': number;
                'computeRatioMax': number;
                'id': string;
                'name': string;
                'readRatioAvg': number;
                'readRatioMax': number;
                'recordsRead': string;
                'recordsWritten': string;
                'steps': ExplainQueryStep[];
                'waitRatioAvg': number;
                'waitRatioMax': number;
                'writeRatioAvg': number;
                'writeRatioMax': number;
            }

            export interface ExplainQueryStep {
                'kind': string;
                'substeps': string[];
            }

            export interface ExternalDataConfiguration {
                'compression': string;
                'csvOptions': CsvOptions;
                'ignoreUnknownValues': boolean;
                'maxBadRecords': number;
                'schema': TableSchema;
                'sourceFormat': string;
                'sourceUris': string[];
            }

            export interface GetQueryResultsResponse {
                'cacheHit': boolean;
                'errors': ErrorProto[];
                'etag': string;
                'jobComplete': boolean;
                'jobReference': JobReference;
                'kind': string;
                'pageToken': string;
                'rows': TableRow[];
                'schema': TableSchema;
                'totalBytesProcessed': string;
                'totalRows': string;
            }

            export interface Job {
                'configuration': JobConfiguration;
                'etag': string;
                'id': string;
                'jobReference': JobReference;
                'kind': string;
                'selfLink': string;
                'statistics': JobStatistics;
                'status': JobStatus;
                'user_email': string;
            }

            export interface JobCancelResponse {
                'job': Job;
                'kind': string;
            }

            export interface JobConfiguration {
                'copy': JobConfigurationTableCopy;
                'dryRun': boolean;
                'extract': JobConfigurationExtract;
                'load': JobConfigurationLoad;
                'query': JobConfigurationQuery;
            }

            export interface JobConfigurationExtract {
                'compression': string;
                'destinationFormat': string;
                'destinationUri': string;
                'destinationUris': string[];
                'fieldDelimiter': string;
                'printHeader': boolean;
                'sourceTable': TableReference;
            }

            export interface JobConfigurationLoad {
                'allowJaggedRows': boolean;
                'allowQuotedNewlines': boolean;
                'createDisposition': string;
                'destinationTable': TableReference;
                'encoding': string;
                'fieldDelimiter': string;
                'ignoreUnknownValues': boolean;
                'maxBadRecords': number;
                'projectionFields': string[];
                'quote': string;
                'schema': TableSchema;
                'schemaInline': string;
                'schemaInlineFormat': string;
                'skipLeadingRows': number;
                'sourceFormat': string;
                'sourceUris': string[];
                'writeDisposition': string;
            }

            export interface JobConfigurationQuery {
                'allowLargeResults': boolean;
                'createDisposition': string;
                'defaultDataset': DatasetReference;
                'destinationTable': TableReference;
                'flattenResults': boolean;
                'maximumBillingTier': number;
                'preserveNulls': boolean;
                'priority': string;
                'query': string;
                'tableDefinitions': {
                    [name: string]: ExternalDataConfiguration
                
                };
                'useLegacySql': boolean;
                'useQueryCache': boolean;
                'userDefinedFunctionResources': UserDefinedFunctionResource[];
                'writeDisposition': string;
            }

            export interface JobConfigurationTableCopy {
                'createDisposition': string;
                'destinationTable': TableReference;
                'sourceTable': TableReference;
                'sourceTables': TableReference[];
                'writeDisposition': string;
            }

            export interface JobList {
                'etag': string;
                'jobs': {
                    'configuration': JobConfiguration;
                    'errorResult': ErrorProto;
                    'id': string;
                    'jobReference': JobReference;
                    'kind': string;
                    'state': string;
                    'statistics': JobStatistics;
                    'status': JobStatus;
                    'user_email': string;
                }[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface JobReference {
                'jobId': string;
                'projectId': string;
            }

            export interface JobStatistics {
                'creationTime': string;
                'endTime': string;
                'extract': JobStatistics4;
                'load': JobStatistics3;
                'query': JobStatistics2;
                'startTime': string;
                'totalBytesProcessed': string;
            }

            export interface JobStatistics2 {
                'billingTier': number;
                'cacheHit': boolean;
                'queryPlan': ExplainQueryStage[];
                'referencedTables': TableReference[];
                'totalBytesBilled': string;
                'totalBytesProcessed': string;
            }

            export interface JobStatistics3 {
                'inputFileBytes': string;
                'inputFiles': string;
                'outputBytes': string;
                'outputRows': string;
            }

            export interface JobStatistics4 {
                'destinationUriFileCounts': string[];
            }

            export interface JobStatus {
                'errorResult': ErrorProto;
                'errors': ErrorProto[];
                'state': string;
            }

            export interface JsonObject {
                [name: string]: JsonValue
            
            }

            export type JsonValue = any;

            export interface ProjectList {
                'etag': string;
                'kind': string;
                'nextPageToken': string;
                'projects': {
                    'friendlyName': string;
                    'id': string;
                    'kind': string;
                    'numericId': string;
                    'projectReference': ProjectReference;
                }[];
                'totalItems': number;
            }

            export interface ProjectReference {
                'projectId': string;
            }

            export interface QueryRequest {
                'defaultDataset': DatasetReference;
                'dryRun': boolean;
                'kind': string;
                'maxResults': number;
                'preserveNulls': boolean;
                'query': string;
                'timeoutMs': number;
                'useLegacySql': boolean;
                'useQueryCache': boolean;
            }

            export interface QueryResponse {
                'cacheHit': boolean;
                'errors': ErrorProto[];
                'jobComplete': boolean;
                'jobReference': JobReference;
                'kind': string;
                'pageToken': string;
                'rows': TableRow[];
                'schema': TableSchema;
                'totalBytesProcessed': string;
                'totalRows': string;
            }

            export interface Streamingbuffer {
                'estimatedBytes': string;
                'estimatedRows': string;
                'oldestEntryTime': string;
            }

            export interface Table {
                'creationTime': string;
                'description': string;
                'etag': string;
                'expirationTime': string;
                'externalDataConfiguration': ExternalDataConfiguration;
                'friendlyName': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'location': string;
                'numBytes': string;
                'numRows': string;
                'schema': TableSchema;
                'selfLink': string;
                'streamingBuffer': Streamingbuffer;
                'tableReference': TableReference;
                'type': string;
                'view': ViewDefinition;
            }

            export interface TableCell {
                'v': any;
            }

            export interface TableDataInsertAllRequest {
                'ignoreUnknownValues': boolean;
                'kind': string;
                'rows': {
                    'insertId': string;
                    'json': JsonObject;
                }[];
                'skipInvalidRows': boolean;
                'templateSuffix': string;
            }

            export interface TableDataInsertAllResponse {
                'insertErrors': {
                    'errors': ErrorProto[];
                    'index': number;
                }[];
                'kind': string;
            }

            export interface TableDataList {
                'etag': string;
                'kind': string;
                'pageToken': string;
                'rows': TableRow[];
                'totalRows': string;
            }

            export interface TableFieldSchema {
                'description': string;
                'fields': TableFieldSchema[];
                'mode': string;
                'name': string;
                'type': string;
            }

            export interface TableList {
                'etag': string;
                'kind': string;
                'nextPageToken': string;
                'tables': {
                    'friendlyName': string;
                    'id': string;
                    'kind': string;
                    'tableReference': TableReference;
                    'type': string;
                }[];
                'totalItems': number;
            }

            export interface TableReference {
                'datasetId': string;
                'projectId': string;
                'tableId': string;
            }

            export interface TableRow {
                'f': TableCell[];
            }

            export interface TableSchema {
                'fields': TableFieldSchema[];
            }

            export interface UserDefinedFunctionResource {
                'inlineCode': string;
                'resourceUri': string;
            }

            export interface ViewDefinition {
                'query': string;
                'userDefinedFunctionResources': UserDefinedFunctionResource[];
            }

        }
    }
}