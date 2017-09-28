// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        bigquery(version: string): any;
        bigquery(version: 'v2'): bigquery.v2.Bigquery;
    }

    namespace bigquery {
        namespace v2 {
            export interface Bigquery {
                new(options: any): Bigquery;

                'datasets': {
                    'delete': (parameters: { [key: string]: any; 'datasetId': string, 'deleteContents'?: boolean, 'projectId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'all'?: boolean, 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: DatasetList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                };
                'jobs': {
                    'cancel': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string}, callback: (error: any, body: JobCancelResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'getQueryResults': (parameters: { [key: string]: any; 'jobId': string, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string, 'startIndex'?: string, 'timeoutMs'?: number}, callback: (error: any, body: GetQueryResultsResponse, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'allUsers'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string, 'projection'?: string, 'stateFilter'?: string}, callback: (error: any, body: JobList, response: any) => void) => Request;
                    'query': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: QueryResponse, response: any) => void) => Request;
                };
                'projects': {
                    'getServiceAccount': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: GetServiceAccountResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: ProjectList, response: any) => void) => Request;
                };
                'tabledata': {
                    'insertAll': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: TableDataInsertAllResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'datasetId': string, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string, 'selectedFields'?: string, 'startIndex'?: string, 'tableId': string}, callback: (error: any, body: TableDataList, response: any) => void) => Request;
                };
                'tables': {
                    'delete': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string, 'selectedFields'?: string, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'datasetId': string, 'maxResults'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: TableList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'datasetId': string, 'projectId': string, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                };

            }

            export interface BigtableColumn {
                'encoding': string;
                'fieldName': string;
                'onlyReadLatest': boolean;
                'qualifierEncoded': string;
                'qualifierString': string;
                'type': string;
            }

            export interface BigtableColumnFamily {
                'columns': BigtableColumn[];
                'encoding': string;
                'familyId': string;
                'onlyReadLatest': boolean;
                'type': string;
            }

            export interface BigtableOptions {
                'columnFamilies': BigtableColumnFamily[];
                'ignoreUnspecifiedColumnFamilies': boolean;
                'readRowkeyAsString': boolean;
            }

            export interface CsvOptions {
                'allowJaggedRows': boolean;
                'allowQuotedNewlines': boolean;
                'encoding': string;
                'fieldDelimiter': string;
                'quote': string;
                'skipLeadingRows': string;
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
                'labels': {
                    [name: string]: string
                ;
                };
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
                    'labels': {
                        [name: string]: string
                    ;
                    };
                }[];
                'etag': string;
                'kind': string;
                'nextPageToken': string;
            }

            export interface DatasetReference {
                'datasetId': string;
                'projectId': string;
            }

            export interface EncryptionConfiguration {
                'kmsKeyName': string;
            }

            export interface ErrorProto {
                'debugInfo': string;
                'location': string;
                'message': string;
                'reason': string;
            }

            export interface ExplainQueryStage {
                'computeMsAvg': string;
                'computeMsMax': string;
                'computeRatioAvg': number;
                'computeRatioMax': number;
                'id': string;
                'name': string;
                'readMsAvg': string;
                'readMsMax': string;
                'readRatioAvg': number;
                'readRatioMax': number;
                'recordsRead': string;
                'recordsWritten': string;
                'shuffleOutputBytes': string;
                'shuffleOutputBytesSpilled': string;
                'status': string;
                'steps': ExplainQueryStep[];
                'waitMsAvg': string;
                'waitMsMax': string;
                'waitRatioAvg': number;
                'waitRatioMax': number;
                'writeMsAvg': string;
                'writeMsMax': string;
                'writeRatioAvg': number;
                'writeRatioMax': number;
            }

            export interface ExplainQueryStep {
                'kind': string;
                'substeps': string[];
            }

            export interface ExternalDataConfiguration {
                'autodetect': boolean;
                'bigtableOptions': BigtableOptions;
                'compression': string;
                'csvOptions': CsvOptions;
                'googleSheetsOptions': GoogleSheetsOptions;
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
                'numDmlAffectedRows': string;
                'pageToken': string;
                'rows': TableRow[];
                'schema': TableSchema;
                'totalBytesProcessed': string;
                'totalRows': string;
            }

            export interface GetServiceAccountResponse {
                'email': string;
                'kind': string;
            }

            export interface GoogleSheetsOptions {
                'skipLeadingRows': string;
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
                'labels': {
                    [name: string]: string
                ;
                };
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
                'autodetect': boolean;
                'createDisposition': string;
                'destinationEncryptionConfiguration': EncryptionConfiguration;
                'destinationTable': TableReference;
                'encoding': string;
                'fieldDelimiter': string;
                'ignoreUnknownValues': boolean;
                'maxBadRecords': number;
                'nullMarker': string;
                'projectionFields': string[];
                'quote': string;
                'schema': TableSchema;
                'schemaInline': string;
                'schemaInlineFormat': string;
                'schemaUpdateOptions': string[];
                'skipLeadingRows': number;
                'sourceFormat': string;
                'sourceUris': string[];
                'timePartitioning': TimePartitioning;
                'writeDisposition': string;
            }

            export interface JobConfigurationQuery {
                'allowLargeResults': boolean;
                'createDisposition': string;
                'defaultDataset': DatasetReference;
                'destinationEncryptionConfiguration': EncryptionConfiguration;
                'destinationTable': TableReference;
                'flattenResults': boolean;
                'maximumBillingTier': number;
                'maximumBytesBilled': string;
                'parameterMode': string;
                'preserveNulls': boolean;
                'priority': string;
                'query': string;
                'queryParameters': QueryParameter[];
                'schemaUpdateOptions': string[];
                'tableDefinitions': {
                    [name: string]: ExternalDataConfiguration
                ;
                };
                'timePartitioning': TimePartitioning;
                'useLegacySql': boolean;
                'useQueryCache': boolean;
                'userDefinedFunctionResources': UserDefinedFunctionResource[];
                'writeDisposition': string;
            }

            export interface JobConfigurationTableCopy {
                'createDisposition': string;
                'destinationEncryptionConfiguration': EncryptionConfiguration;
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
                'numDmlAffectedRows': string;
                'queryPlan': ExplainQueryStage[];
                'referencedTables': TableReference[];
                'schema': TableSchema;
                'statementType': string;
                'totalBytesBilled': string;
                'totalBytesProcessed': string;
                'totalSlotMs': string;
                'undeclaredQueryParameters': QueryParameter[];
            }

            export interface JobStatistics3 {
                'badRecords': string;
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
            ;
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

            export interface QueryParameter {
                'name': string;
                'parameterType': QueryParameterType;
                'parameterValue': QueryParameterValue;
            }

            export interface QueryParameterType {
                'arrayType': QueryParameterType;
                'structTypes': {
                    'description': string;
                    'name': string;
                    'type': QueryParameterType;
                }[];
                'type': string;
            }

            export interface QueryParameterValue {
                'arrayValues': QueryParameterValue[];
                'structValues': {
                    [name: string]: QueryParameterValue
                ;
                };
                'value': string;
            }

            export interface QueryRequest {
                'defaultDataset': DatasetReference;
                'dryRun': boolean;
                'kind': string;
                'maxResults': number;
                'parameterMode': string;
                'preserveNulls': boolean;
                'query': string;
                'queryParameters': QueryParameter[];
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
                'numDmlAffectedRows': string;
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
                'encryptionConfiguration': EncryptionConfiguration;
                'etag': string;
                'expirationTime': string;
                'externalDataConfiguration': ExternalDataConfiguration;
                'friendlyName': string;
                'id': string;
                'kind': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'lastModifiedTime': string;
                'location': string;
                'numBytes': string;
                'numLongTermBytes': string;
                'numRows': string;
                'schema': TableSchema;
                'selfLink': string;
                'streamingBuffer': Streamingbuffer;
                'tableReference': TableReference;
                'timePartitioning': TimePartitioning;
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
                    'labels': {
                        [name: string]: string
                    ;
                    };
                    'tableReference': TableReference;
                    'timePartitioning': TimePartitioning;
                    'type': string;
                    'view': {
                        'useLegacySql': boolean;
                    };
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

            export interface TimePartitioning {
                'expirationMs': string;
                'field': string;
                'type': string;
            }

            export interface UserDefinedFunctionResource {
                'inlineCode': string;
                'resourceUri': string;
            }

            export interface ViewDefinition {
                'query': string;
                'useLegacySql': boolean;
                'userDefinedFunctionResources': UserDefinedFunctionResource[];
            }

        }
    }
}
