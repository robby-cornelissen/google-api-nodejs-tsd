// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        dlp(version: string): any;
        dlp(version: 'v2beta1'): dlp.v2beta1.Dlp;
    }

    namespace dlp {
        namespace v2beta1 {
            export interface Dlp {
                new(options: any): Dlp;

                'inspect': {
                    'results': {
                        'findings': {
                            'list': (parameters: { [key: string]: any; 'filter'?: string, 'name': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: GooglePrivacyDlpV2beta1ListInspectFindingsResponse, response: any) => void) => Request;
                        };
                    };
                    'operations': {
                        'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleProtobufEmpty, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleProtobufEmpty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'name': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: GoogleLongrunningListOperationsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleLongrunningOperation, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; }, callback: (error: any, body: GoogleLongrunningOperation, response: any) => void) => Request;
                    };
                };
                'content': {
                    'deidentify': (parameters: { [key: string]: any; }, callback: (error: any, body: GooglePrivacyDlpV2beta1DeidentifyContentResponse, response: any) => void) => Request;
                    'inspect': (parameters: { [key: string]: any; }, callback: (error: any, body: GooglePrivacyDlpV2beta1InspectContentResponse, response: any) => void) => Request;
                    'redact': (parameters: { [key: string]: any; }, callback: (error: any, body: GooglePrivacyDlpV2beta1RedactContentResponse, response: any) => void) => Request;
                };
                'rootCategories': {
                    'list': (parameters: { [key: string]: any; 'languageCode'?: string}, callback: (error: any, body: GooglePrivacyDlpV2beta1ListRootCategoriesResponse, response: any) => void) => Request;

                    'infoTypes': {
                        'list': (parameters: { [key: string]: any; 'category': string, 'languageCode'?: string}, callback: (error: any, body: GooglePrivacyDlpV2beta1ListInfoTypesResponse, response: any) => void) => Request;
                    };
                };
                'riskAnalysis': {
                    'operations': {
                        'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleProtobufEmpty, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleProtobufEmpty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'name': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: GoogleLongrunningListOperationsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: GoogleLongrunningOperation, response: any) => void) => Request;
                    };
                };
                'dataSource': {
                    'analyze': (parameters: { [key: string]: any; }, callback: (error: any, body: GoogleLongrunningOperation, response: any) => void) => Request;
                };

            }

            export interface GooglePrivacyDlpV2beta1CreateInspectOperationRequest {
                'inspectConfig': GooglePrivacyDlpV2beta1InspectConfig;
                'storageConfig': GooglePrivacyDlpV2beta1StorageConfig;
                'outputConfig': GooglePrivacyDlpV2beta1OutputStorageConfig;
                'operationConfig': GooglePrivacyDlpV2beta1OperationConfig;
            }

            export interface GooglePrivacyDlpV2beta1InfoTypeStatistics {
                'infoType': GooglePrivacyDlpV2beta1InfoType;
                'count': string;
            }

            export interface GooglePrivacyDlpV2beta1RedactContentResponse {
                'items': GooglePrivacyDlpV2beta1ContentItem[];
            }

            export interface GooglePrivacyDlpV2beta1PropertyReference {
                'name': string;
            }

            export interface GooglePrivacyDlpV2beta1OutputStorageConfig {
                'table': GooglePrivacyDlpV2beta1BigQueryTable;
                'storagePath': GooglePrivacyDlpV2beta1CloudStoragePath;
            }

            export interface GooglePrivacyDlpV2beta1FieldTransformation {
                'condition': GooglePrivacyDlpV2beta1RecordCondition;
                'infoTypeTransformations': GooglePrivacyDlpV2beta1InfoTypeTransformations;
                'fields': GooglePrivacyDlpV2beta1FieldId[];
                'primitiveTransformation': GooglePrivacyDlpV2beta1PrimitiveTransformation;
            }

            export interface GooglePrivacyDlpV2beta1BucketingConfig {
                'buckets': GooglePrivacyDlpV2beta1Bucket[];
            }

            export interface GooglePrivacyDlpV2beta1DeidentifyContentResponse {
                'summaries': GooglePrivacyDlpV2beta1DeidentificationSummary[];
                'items': GooglePrivacyDlpV2beta1ContentItem[];
            }

            export interface GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass {
                'equivalenceClassSize': string;
                'quasiIdsValues': GooglePrivacyDlpV2beta1Value[];
            }

            export interface GoogleLongrunningOperation {
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': GoogleRpcStatus;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
            }

            export interface GooglePrivacyDlpV2beta1InspectOperationMetadata {
                'requestInspectConfig': GooglePrivacyDlpV2beta1InspectConfig;
                'requestOutputConfig': GooglePrivacyDlpV2beta1OutputStorageConfig;
                'createTime': string;
                'requestStorageConfig': GooglePrivacyDlpV2beta1StorageConfig;
                'processedBytes': string;
                'totalEstimatedBytes': string;
                'infoTypeStats': GooglePrivacyDlpV2beta1InfoTypeStatistics[];
            }

            export interface GooglePrivacyDlpV2beta1KmsWrappedCryptoKey {
                'wrappedKey': string;
                'cryptoKeyName': string;
            }

            export interface GooglePrivacyDlpV2beta1InfoType {
                'name': string;
            }

            export interface GooglePrivacyDlpV2beta1FixedSizeBucketingConfig {
                'upperBound': GooglePrivacyDlpV2beta1Value;
                'lowerBound': GooglePrivacyDlpV2beta1Value;
                'bucketSize': number;
            }

            export interface GooglePrivacyDlpV2beta1CharsToIgnore {
                'commonCharactersToIgnore': string;
                'charactersToSkip': string;
            }

            export interface GooglePrivacyDlpV2beta1RiskAnalysisOperationResult {
                'categoricalStatsResult': GooglePrivacyDlpV2beta1CategoricalStatsResult;
                'numericalStatsResult': GooglePrivacyDlpV2beta1NumericalStatsResult;
                'kAnonymityResult': GooglePrivacyDlpV2beta1KAnonymityResult;
                'lDiversityResult': GooglePrivacyDlpV2beta1LDiversityResult;
            }

            export interface GooglePrivacyDlpV2beta1Conditions {
                'conditions': GooglePrivacyDlpV2beta1Condition[];
            }

            export interface GooglePrivacyDlpV2beta1CategoryDescription {
                'name': string;
                'displayName': string;
            }

            export interface GooglePrivacyDlpV2beta1PrimitiveTransformation {
                'replaceConfig': GooglePrivacyDlpV2beta1ReplaceValueConfig;
                'timePartConfig': GooglePrivacyDlpV2beta1TimePartConfig;
                'fixedSizeBucketingConfig': GooglePrivacyDlpV2beta1FixedSizeBucketingConfig;
                'cryptoReplaceRegexFpeConfig': GooglePrivacyDlpV2beta1CryptoReplaceRegexFpeConfig;
                'characterMaskConfig': GooglePrivacyDlpV2beta1CharacterMaskConfig;
                'redactConfig': GooglePrivacyDlpV2beta1RedactConfig;
                'bucketingConfig': GooglePrivacyDlpV2beta1BucketingConfig;
                'replaceWithInfoTypeConfig': GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig;
                'cryptoHashConfig': GooglePrivacyDlpV2beta1CryptoHashConfig;
                'cryptoReplaceFfxFpeConfig': GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig;
            }

            export interface GooglePrivacyDlpV2beta1CategoricalStatsConfig {
                'field': GooglePrivacyDlpV2beta1FieldId;
            }

            export interface GooglePrivacyDlpV2beta1Finding {
                'infoType': GooglePrivacyDlpV2beta1InfoType;
                'createTime': string;
                'quote': string;
                'location': GooglePrivacyDlpV2beta1Location;
                'likelihood': string;
            }

            export interface GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata {
                'requestedPrivacyMetric': GooglePrivacyDlpV2beta1PrivacyMetric;
                'createTime': string;
                'requestedSourceTable': GooglePrivacyDlpV2beta1BigQueryTable;
            }

            export interface GoogleLongrunningListOperationsResponse {
                'nextPageToken': string;
                'operations': GoogleLongrunningOperation[];
            }

            export interface GooglePrivacyDlpV2beta1Row {
                'values': GooglePrivacyDlpV2beta1Value[];
            }

            export interface GoogleProtobufEmpty {}

            export interface GooglePrivacyDlpV2beta1ListInspectFindingsResponse {
                'nextPageToken': string;
                'result': GooglePrivacyDlpV2beta1InspectResult;
            }

            export interface GooglePrivacyDlpV2beta1Expressions {
                'logicalOperator': string;
                'conditions': GooglePrivacyDlpV2beta1Conditions;
            }

            export interface GooglePrivacyDlpV2beta1CloudStorageOptions {
                'fileSet': GooglePrivacyDlpV2beta1FileSet;
            }

            export interface GooglePrivacyDlpV2beta1CloudStoragePath {
                'path': string;
            }

            export interface GooglePrivacyDlpV2beta1KAnonymityHistogramBucket {
                'bucketValues': GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass[];
                'equivalenceClassSizeLowerBound': string;
                'equivalenceClassSizeUpperBound': string;
                'bucketSize': string;
            }

            export interface GooglePrivacyDlpV2beta1InspectOperationResult {
                'name': string;
            }

            export interface GooglePrivacyDlpV2beta1LDiversityResult {
                'sensitiveValueFrequencyHistogramBuckets': GooglePrivacyDlpV2beta1LDiversityHistogramBucket[];
            }

            export interface GooglePrivacyDlpV2beta1CategoricalStatsResult {
                'valueFrequencyHistogramBuckets': GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket[];
            }

            export interface GooglePrivacyDlpV2beta1Range {
                'start': string;
                'end': string;
            }

            export interface GoogleTypeTimeOfDay {
                'hours': number;
                'nanos': number;
                'seconds': number;
                'minutes': number;
            }

            export interface GooglePrivacyDlpV2beta1DeidentifyConfig {
                'recordTransformations': GooglePrivacyDlpV2beta1RecordTransformations;
                'infoTypeTransformations': GooglePrivacyDlpV2beta1InfoTypeTransformations;
            }

            export interface GooglePrivacyDlpV2beta1LDiversityConfig {
                'sensitiveAttribute': GooglePrivacyDlpV2beta1FieldId;
                'quasiIds': GooglePrivacyDlpV2beta1FieldId[];
            }

            export interface GooglePrivacyDlpV2beta1StorageConfig {
                'cloudStorageOptions': GooglePrivacyDlpV2beta1CloudStorageOptions;
                'datastoreOptions': GooglePrivacyDlpV2beta1DatastoreOptions;
                'bigQueryOptions': GooglePrivacyDlpV2beta1BigQueryOptions;
            }

            export interface GooglePrivacyDlpV2beta1BigQueryOptions {
                'identifyingFields': GooglePrivacyDlpV2beta1FieldId[];
                'tableReference': GooglePrivacyDlpV2beta1BigQueryTable;
            }

            export interface GooglePrivacyDlpV2beta1OperationConfig {
                'maxItemFindings': string;
            }

            export interface GooglePrivacyDlpV2beta1PrivacyMetric {
                'numericalStatsConfig': GooglePrivacyDlpV2beta1NumericalStatsConfig;
                'kAnonymityConfig': GooglePrivacyDlpV2beta1KAnonymityConfig;
                'categoricalStatsConfig': GooglePrivacyDlpV2beta1CategoricalStatsConfig;
                'lDiversityConfig': GooglePrivacyDlpV2beta1LDiversityConfig;
            }

            export interface GooglePrivacyDlpV2beta1ReplaceConfig {
                'infoType': GooglePrivacyDlpV2beta1InfoType;
                'replaceWith': string;
            }

            export interface GooglePrivacyDlpV2beta1LDiversityEquivalenceClass {
                'equivalenceClassSize': string;
                'quasiIdsValues': GooglePrivacyDlpV2beta1Value[];
                'numDistinctSensitiveValues': string;
                'topSensitiveValues': GooglePrivacyDlpV2beta1ValueFrequency[];
            }

            export interface GooglePrivacyDlpV2beta1NumericalStatsConfig {
                'field': GooglePrivacyDlpV2beta1FieldId;
            }

            export interface GooglePrivacyDlpV2beta1TimePartConfig {
                'partToExtract': string;
            }

            export interface GooglePrivacyDlpV2beta1RecordCondition {
                'expressions': GooglePrivacyDlpV2beta1Expressions;
            }

            export interface GooglePrivacyDlpV2beta1DeidentificationSummary {
                'transformedBytes': string;
                'transformationSummaries': GooglePrivacyDlpV2beta1TransformationSummary[];
            }

            export interface GooglePrivacyDlpV2beta1ListInfoTypesResponse {
                'infoTypes': GooglePrivacyDlpV2beta1InfoTypeDescription[];
            }

            export interface GooglePrivacyDlpV2beta1CloudStorageKey {
                'filePath': string;
                'startOffset': string;
            }

            export interface GooglePrivacyDlpV2beta1NumericalStatsResult {
                'maxValue': GooglePrivacyDlpV2beta1Value;
                'quantileValues': GooglePrivacyDlpV2beta1Value[];
                'minValue': GooglePrivacyDlpV2beta1Value;
            }

            export interface GooglePrivacyDlpV2beta1DatastoreOptions {
                'kind': GooglePrivacyDlpV2beta1KindExpression;
                'projection': GooglePrivacyDlpV2beta1Projection[];
                'partitionId': GooglePrivacyDlpV2beta1PartitionId;
            }

            export interface GooglePrivacyDlpV2beta1RecordTransformations {
                'recordSuppressions': GooglePrivacyDlpV2beta1RecordSuppression[];
                'fieldTransformations': GooglePrivacyDlpV2beta1FieldTransformation[];
            }

            export interface GooglePrivacyDlpV2beta1InspectConfig {
                'excludeTypes': boolean;
                'minLikelihood': string;
                'maxFindings': number;
                'infoTypeLimits': GooglePrivacyDlpV2beta1InfoTypeLimit[];
                'infoTypes': GooglePrivacyDlpV2beta1InfoType[];
                'includeQuote': boolean;
            }

            export interface GooglePrivacyDlpV2beta1Projection {
                'property': GooglePrivacyDlpV2beta1PropertyReference;
            }

            export interface GooglePrivacyDlpV2beta1RedactConfig {}

            export interface GooglePrivacyDlpV2beta1Key {
                'path': GooglePrivacyDlpV2beta1PathElement[];
                'partitionId': GooglePrivacyDlpV2beta1PartitionId;
            }

            export interface GooglePrivacyDlpV2beta1CryptoHashConfig {
                'cryptoKey': GooglePrivacyDlpV2beta1CryptoKey;
            }

            export interface GooglePrivacyDlpV2beta1InspectContentRequest {
                'inspectConfig': GooglePrivacyDlpV2beta1InspectConfig;
                'items': GooglePrivacyDlpV2beta1ContentItem[];
            }

            export interface GoogleTypeDate {
                'year': number;
                'day': number;
                'month': number;
            }

            export interface GooglePrivacyDlpV2beta1ImageRedactionConfig {
                'redactionColor': GooglePrivacyDlpV2beta1Color;
                'redactAllText': boolean;
                'infoType': GooglePrivacyDlpV2beta1InfoType;
            }

            export interface GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig {}

            export interface GooglePrivacyDlpV2beta1Location {
                'codepointRange': GooglePrivacyDlpV2beta1Range;
                'fieldId': GooglePrivacyDlpV2beta1FieldId;
                'imageBoxes': GooglePrivacyDlpV2beta1ImageLocation[];
                'byteRange': GooglePrivacyDlpV2beta1Range;
                'recordKey': GooglePrivacyDlpV2beta1RecordKey;
                'tableLocation': GooglePrivacyDlpV2beta1TableLocation;
            }

            export interface GooglePrivacyDlpV2beta1RecordSuppression {
                'condition': GooglePrivacyDlpV2beta1RecordCondition;
            }

            export interface GooglePrivacyDlpV2beta1InfoTypeDescription {
                'name': string;
                'displayName': string;
                'categories': GooglePrivacyDlpV2beta1CategoryDescription[];
            }

            export interface GooglePrivacyDlpV2beta1EntityId {
                'field': GooglePrivacyDlpV2beta1FieldId;
            }

            export interface GooglePrivacyDlpV2beta1UnwrappedCryptoKey {
                'key': string;
            }

            export interface GoogleRpcStatus {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface GooglePrivacyDlpV2beta1PathElement {
                'name': string;
                'kind': string;
                'id': string;
            }

            export interface GooglePrivacyDlpV2beta1BigQueryTable {
                'datasetId': string;
                'tableId': string;
                'projectId': string;
            }

            export interface GooglePrivacyDlpV2beta1SummaryResult {
                'details': string;
                'count': string;
                'code': string;
            }

            export interface GooglePrivacyDlpV2beta1ListRootCategoriesResponse {
                'categories': GooglePrivacyDlpV2beta1CategoryDescription[];
            }

            export interface GooglePrivacyDlpV2beta1InfoTypeTransformations {
                'transformations': GooglePrivacyDlpV2beta1InfoTypeTransformation[];
            }

            export interface GooglePrivacyDlpV2beta1KindExpression {
                'name': string;
            }

            export interface GooglePrivacyDlpV2beta1FileSet {
                'url': string;
            }

            export interface GooglePrivacyDlpV2beta1InfoTypeTransformation {
                'primitiveTransformation': GooglePrivacyDlpV2beta1PrimitiveTransformation;
                'infoTypes': GooglePrivacyDlpV2beta1InfoType[];
            }

            export interface GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest {
                'privacyMetric': GooglePrivacyDlpV2beta1PrivacyMetric;
                'sourceTable': GooglePrivacyDlpV2beta1BigQueryTable;
            }

            export interface GooglePrivacyDlpV2beta1KAnonymityResult {
                'equivalenceClassHistogramBuckets': GooglePrivacyDlpV2beta1KAnonymityHistogramBucket[];
            }

            export interface GooglePrivacyDlpV2beta1Bucket {
                'min': GooglePrivacyDlpV2beta1Value;
                'max': GooglePrivacyDlpV2beta1Value;
                'replacementValue': GooglePrivacyDlpV2beta1Value;
            }

            export interface GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket {
                'bucketSize': string;
                'valueFrequencyUpperBound': string;
                'valueFrequencyLowerBound': string;
                'bucketValues': GooglePrivacyDlpV2beta1ValueFrequency[];
            }

            export interface GooglePrivacyDlpV2beta1TableLocation {
                'rowIndex': string;
            }

            export interface GooglePrivacyDlpV2beta1KAnonymityConfig {
                'entityId': GooglePrivacyDlpV2beta1EntityId;
                'quasiIds': GooglePrivacyDlpV2beta1FieldId[];
            }

            export interface GooglePrivacyDlpV2beta1DatastoreKey {
                'entityKey': GooglePrivacyDlpV2beta1Key;
            }

            export interface GooglePrivacyDlpV2beta1RecordKey {
                'datastoreKey': GooglePrivacyDlpV2beta1DatastoreKey;
                'cloudStorageKey': GooglePrivacyDlpV2beta1CloudStorageKey;
            }

            export interface GooglePrivacyDlpV2beta1DeidentifyContentRequest {
                'deidentifyConfig': GooglePrivacyDlpV2beta1DeidentifyConfig;
                'inspectConfig': GooglePrivacyDlpV2beta1InspectConfig;
                'items': GooglePrivacyDlpV2beta1ContentItem[];
            }

            export interface GooglePrivacyDlpV2beta1CryptoReplaceRegexFpeConfig {
                'context': GooglePrivacyDlpV2beta1FieldId;
                'regex': string;
                'cryptoKey': GooglePrivacyDlpV2beta1CryptoKey;
            }

            export interface GooglePrivacyDlpV2beta1InspectResult {
                'findings': GooglePrivacyDlpV2beta1Finding[];
                'findingsTruncated': boolean;
            }

            export interface GooglePrivacyDlpV2beta1ImageLocation {
                'width': number;
                'height': number;
                'top': number;
                'left': number;
            }

            export interface GooglePrivacyDlpV2beta1ReplaceValueConfig {
                'newValue': GooglePrivacyDlpV2beta1Value;
            }

            export interface GooglePrivacyDlpV2beta1ContentItem {
                'value': string;
                'table': GooglePrivacyDlpV2beta1Table;
                'data': string;
                'type': string;
            }

            export interface GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig {
                'context': GooglePrivacyDlpV2beta1FieldId;
                'customAlphabet': string;
                'cryptoKey': GooglePrivacyDlpV2beta1CryptoKey;
                'commonAlphabet': string;
                'radix': number;
            }

            export interface GooglePrivacyDlpV2beta1Color {
                'red': number;
                'green': number;
                'blue': number;
            }

            export interface GooglePrivacyDlpV2beta1ValueFrequency {
                'count': string;
                'value': GooglePrivacyDlpV2beta1Value;
            }

            export interface GooglePrivacyDlpV2beta1Table {
                'headers': GooglePrivacyDlpV2beta1FieldId[];
                'rows': GooglePrivacyDlpV2beta1Row[];
            }

            export interface GooglePrivacyDlpV2beta1CryptoKey {
                'unwrapped': GooglePrivacyDlpV2beta1UnwrappedCryptoKey;
                'transient': GooglePrivacyDlpV2beta1TransientCryptoKey;
                'kmsWrapped': GooglePrivacyDlpV2beta1KmsWrappedCryptoKey;
            }

            export interface GooglePrivacyDlpV2beta1InfoTypeLimit {
                'maxFindings': number;
                'infoType': GooglePrivacyDlpV2beta1InfoType;
            }

            export interface GooglePrivacyDlpV2beta1LDiversityHistogramBucket {
                'sensitiveValueFrequencyUpperBound': string;
                'sensitiveValueFrequencyLowerBound': string;
                'bucketValues': GooglePrivacyDlpV2beta1LDiversityEquivalenceClass[];
                'bucketSize': string;
            }

            export interface GooglePrivacyDlpV2beta1Value {
                'timeValue': GoogleTypeTimeOfDay;
                'integerValue': string;
                'stringValue': string;
                'dateValue': GoogleTypeDate;
                'timestampValue': string;
                'booleanValue': boolean;
                'floatValue': number;
            }

            export interface GooglePrivacyDlpV2beta1Condition {
                'field': GooglePrivacyDlpV2beta1FieldId;
                'operator': string;
                'value': GooglePrivacyDlpV2beta1Value;
            }

            export interface GooglePrivacyDlpV2beta1PartitionId {
                'namespaceId': string;
                'projectId': string;
            }

            export interface GooglePrivacyDlpV2beta1InspectContentResponse {
                'results': GooglePrivacyDlpV2beta1InspectResult[];
            }

            export interface GooglePrivacyDlpV2beta1RedactContentRequest {
                'items': GooglePrivacyDlpV2beta1ContentItem[];
                'replaceConfigs': GooglePrivacyDlpV2beta1ReplaceConfig[];
                'imageRedactionConfigs': GooglePrivacyDlpV2beta1ImageRedactionConfig[];
                'inspectConfig': GooglePrivacyDlpV2beta1InspectConfig;
            }

            export interface GooglePrivacyDlpV2beta1FieldId {
                'columnName': string;
            }

            export interface GooglePrivacyDlpV2beta1TransformationSummary {
                'recordSuppress': GooglePrivacyDlpV2beta1RecordSuppression;
                'infoType': GooglePrivacyDlpV2beta1InfoType;
                'transformation': GooglePrivacyDlpV2beta1PrimitiveTransformation;
                'results': GooglePrivacyDlpV2beta1SummaryResult[];
                'field': GooglePrivacyDlpV2beta1FieldId;
                'fieldTransformations': GooglePrivacyDlpV2beta1FieldTransformation[];
            }

            export interface GoogleLongrunningCancelOperationRequest {}

            export interface GooglePrivacyDlpV2beta1CharacterMaskConfig {
                'maskingCharacter': string;
                'reverseOrder': boolean;
                'numberToMask': number;
                'charactersToIgnore': GooglePrivacyDlpV2beta1CharsToIgnore[];
            }

            export interface GooglePrivacyDlpV2beta1TransientCryptoKey {
                'name': string;
            }

        }
    }
}
