// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        genomics(version: string): any;
        genomics(version: 'v1'): genomics.v1.Genomics;
    }

    namespace genomics {
        namespace v1 {
            export interface Genomics {
                new(options: any): Genomics;

                'datasets': {
                    'list': (parameters: {'projectId'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListDatasetsResponse, response: any) => void) => Request;
                    'create': (parameters: any, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'get': (parameters: {'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'patch': (parameters: {'datasetId': string, 'updateMask'?: string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'delete': (parameters: {'datasetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'undelete': (parameters: {'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: {'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'name': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    'cancel': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'readgroupsets': {
                    'import': (parameters: any, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'export': (parameters: {'readGroupSetId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchReadGroupSetsResponse, response: any) => void) => Request;
                    'patch': (parameters: {'readGroupSetId': string, 'updateMask'?: string}, callback: (error: any, body: ReadGroupSet, response: any) => void) => Request;
                    'delete': (parameters: {'readGroupSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: {'readGroupSetId': string}, callback: (error: any, body: ReadGroupSet, response: any) => void) => Request;
                
                    'coveragebuckets': {
                        'list': (parameters: {'readGroupSetId': string, 'referenceName'?: string, 'start'?: string, 'end'?: string, 'targetBucketWidth'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListCoverageBucketsResponse, response: any) => void) => Request;
                    };
                };
                'reads': {
                    'search': (parameters: any, callback: (error: any, body: SearchReadsResponse, response: any) => void) => Request;
                    'stream': (parameters: any, callback: (error: any, body: StreamReadsResponse, response: any) => void) => Request;
                };
                'referencesets': {
                    'search': (parameters: any, callback: (error: any, body: SearchReferenceSetsResponse, response: any) => void) => Request;
                    'get': (parameters: {'referenceSetId': string}, callback: (error: any, body: ReferenceSet, response: any) => void) => Request;
                };
                'references': {
                    'search': (parameters: any, callback: (error: any, body: SearchReferencesResponse, response: any) => void) => Request;
                    'get': (parameters: {'referenceId': string}, callback: (error: any, body: Reference, response: any) => void) => Request;
                
                    'bases': {
                        'list': (parameters: {'referenceId': string, 'start'?: string, 'end'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListBasesResponse, response: any) => void) => Request;
                    };
                };
                'variants': {
                    'import': (parameters: any, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchVariantsResponse, response: any) => void) => Request;
                    'create': (parameters: any, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'patch': (parameters: {'variantId': string, 'updateMask'?: string}, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'delete': (parameters: {'variantId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: {'variantId': string}, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'stream': (parameters: any, callback: (error: any, body: StreamVariantsResponse, response: any) => void) => Request;
                };
                'variantsets': {
                    'create': (parameters: any, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                    'export': (parameters: {'variantSetId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'variantSetId': string}, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchVariantSetsResponse, response: any) => void) => Request;
                    'delete': (parameters: {'variantSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'patch': (parameters: {'variantSetId': string, 'updateMask'?: string}, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                };
                'callsets': {
                    'search': (parameters: any, callback: (error: any, body: SearchCallSetsResponse, response: any) => void) => Request;
                    'create': (parameters: any, callback: (error: any, body: CallSet, response: any) => void) => Request;
                    'patch': (parameters: {'callSetId': string, 'updateMask'?: string}, callback: (error: any, body: CallSet, response: any) => void) => Request;
                    'delete': (parameters: {'callSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: {'callSetId': string}, callback: (error: any, body: CallSet, response: any) => void) => Request;
                };

            }

            export interface ListDatasetsResponse {
                'datasets': Dataset[];
                'nextPageToken': string;
            }

            export interface Dataset {
                'id': string;
                'projectId': string;
                'name': string;
                'createTime': string;
            }

            export interface Empty {}

            export interface UndeleteDatasetRequest {}

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface Policy {
                'version': number;
                'bindings': Binding[];
                'etag': string;
            }

            export interface Binding {
                'role': string;
                'members': string[];
            }

            export interface GetIamPolicyRequest {}

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface Operation {
                'name': string;
                'metadata': {
                    [name: string]: any
                
                };
                'done': boolean;
                'error': Status;
                'response': {
                    [name: string]: any
                
                };
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                
                }[];
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface CancelOperationRequest {}

            export interface ImportReadGroupSetsRequest {
                'datasetId': string;
                'referenceSetId': string;
                'sourceUris': string[];
                'partitionStrategy': string;
            }

            export interface ExportReadGroupSetRequest {
                'projectId': string;
                'exportUri': string;
                'referenceNames': string[];
            }

            export interface SearchReadGroupSetsRequest {
                'datasetIds': string[];
                'name': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface SearchReadGroupSetsResponse {
                'readGroupSets': ReadGroupSet[];
                'nextPageToken': string;
            }

            export interface ReadGroupSet {
                'id': string;
                'datasetId': string;
                'referenceSetId': string;
                'name': string;
                'filename': string;
                'readGroups': ReadGroup[];
                'info': {
                    [name: string]: any[]
                
                };
            }

            export interface ReadGroup {
                'id': string;
                'datasetId': string;
                'name': string;
                'description': string;
                'sampleId': string;
                'experiment': Experiment;
                'predictedInsertSize': number;
                'programs': Program[];
                'referenceSetId': string;
                'info': {
                    [name: string]: any[]
                
                };
            }

            export interface Experiment {
                'libraryId': string;
                'platformUnit': string;
                'sequencingCenter': string;
                'instrumentModel': string;
            }

            export interface Program {
                'commandLine': string;
                'id': string;
                'name': string;
                'prevProgramId': string;
                'version': string;
            }

            export interface ListCoverageBucketsResponse {
                'bucketWidth': string;
                'coverageBuckets': CoverageBucket[];
                'nextPageToken': string;
            }

            export interface CoverageBucket {
                'range': Range;
                'meanCoverage': number;
            }

            export interface Range {
                'referenceName': string;
                'start': string;
                'end': string;
            }

            export interface SearchReadsRequest {
                'readGroupSetIds': string[];
                'readGroupIds': string[];
                'referenceName': string;
                'start': string;
                'end': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface SearchReadsResponse {
                'alignments': Read[];
                'nextPageToken': string;
            }

            export interface Read {
                'id': string;
                'readGroupId': string;
                'readGroupSetId': string;
                'fragmentName': string;
                'properPlacement': boolean;
                'duplicateFragment': boolean;
                'fragmentLength': number;
                'readNumber': number;
                'numberReads': number;
                'failedVendorQualityChecks': boolean;
                'alignment': LinearAlignment;
                'secondaryAlignment': boolean;
                'supplementaryAlignment': boolean;
                'alignedSequence': string;
                'alignedQuality': number[];
                'nextMatePosition': Position;
                'info': {
                    [name: string]: any[]
                
                };
            }

            export interface LinearAlignment {
                'position': Position;
                'mappingQuality': number;
                'cigar': CigarUnit[];
            }

            export interface Position {
                'referenceName': string;
                'position': string;
                'reverseStrand': boolean;
            }

            export interface CigarUnit {
                'operation': string;
                'operationLength': string;
                'referenceSequence': string;
            }

            export interface StreamReadsRequest {
                'projectId': string;
                'readGroupSetId': string;
                'referenceName': string;
                'start': string;
                'end': string;
            }

            export interface StreamReadsResponse {
                'alignments': Read[];
            }

            export interface SearchReferenceSetsRequest {
                'md5checksums': string[];
                'accessions': string[];
                'assemblyId': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface SearchReferenceSetsResponse {
                'referenceSets': ReferenceSet[];
                'nextPageToken': string;
            }

            export interface ReferenceSet {
                'id': string;
                'referenceIds': string[];
                'md5checksum': string;
                'ncbiTaxonId': number;
                'description': string;
                'assemblyId': string;
                'sourceUri': string;
                'sourceAccessions': string[];
            }

            export interface SearchReferencesRequest {
                'md5checksums': string[];
                'accessions': string[];
                'referenceSetId': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface SearchReferencesResponse {
                'references': Reference[];
                'nextPageToken': string;
            }

            export interface Reference {
                'id': string;
                'length': string;
                'md5checksum': string;
                'name': string;
                'sourceUri': string;
                'sourceAccessions': string[];
                'ncbiTaxonId': number;
            }

            export interface ListBasesResponse {
                'offset': string;
                'sequence': string;
                'nextPageToken': string;
            }

            export interface ImportVariantsRequest {
                'variantSetId': string;
                'sourceUris': string[];
                'format': string;
                'normalizeReferenceNames': boolean;
            }

            export interface VariantSet {
                'datasetId': string;
                'id': string;
                'referenceSetId': string;
                'referenceBounds': ReferenceBound[];
                'metadata': VariantSetMetadata[];
            }

            export interface ReferenceBound {
                'referenceName': string;
                'upperBound': string;
            }

            export interface VariantSetMetadata {
                'key': string;
                'value': string;
                'id': string;
                'type': string;
                'number': string;
                'description': string;
                'info': {
                    [name: string]: any[]
                
                };
            }

            export interface ExportVariantSetRequest {
                'callSetIds': string[];
                'projectId': string;
                'format': string;
                'bigqueryDataset': string;
                'bigqueryTable': string;
            }

            export interface SearchVariantSetsRequest {
                'datasetIds': string[];
                'pageToken': string;
                'pageSize': number;
            }

            export interface SearchVariantSetsResponse {
                'variantSets': VariantSet[];
                'nextPageToken': string;
            }

            export interface SearchVariantsRequest {
                'variantSetIds': string[];
                'variantName': string;
                'callSetIds': string[];
                'referenceName': string;
                'start': string;
                'end': string;
                'pageToken': string;
                'pageSize': number;
                'maxCalls': number;
            }

            export interface SearchVariantsResponse {
                'variants': Variant[];
                'nextPageToken': string;
            }

            export interface Variant {
                'variantSetId': string;
                'id': string;
                'names': string[];
                'created': string;
                'referenceName': string;
                'start': string;
                'end': string;
                'referenceBases': string;
                'alternateBases': string[];
                'quality': number;
                'filter': string[];
                'info': {
                    [name: string]: any[]
                
                };
                'calls': VariantCall[];
            }

            export interface VariantCall {
                'callSetId': string;
                'callSetName': string;
                'genotype': number[];
                'phaseset': string;
                'genotypeLikelihood': number[];
                'info': {
                    [name: string]: any[]
                
                };
            }

            export interface SearchCallSetsRequest {
                'variantSetIds': string[];
                'name': string;
                'pageToken': string;
                'pageSize': number;
            }

            export interface SearchCallSetsResponse {
                'callSets': CallSet[];
                'nextPageToken': string;
            }

            export interface CallSet {
                'id': string;
                'name': string;
                'sampleId': string;
                'variantSetIds': string[];
                'created': string;
                'info': {
                    [name: string]: any[]
                
                };
            }

            export interface StreamVariantsRequest {
                'projectId': string;
                'variantSetId': string;
                'callSetIds': string[];
                'referenceName': string;
                'start': string;
                'end': string;
            }

            export interface StreamVariantsResponse {
                'variants': Variant[];
            }

            export interface ImportReadGroupSetsResponse {
                'readGroupSetIds': string[];
            }

            export interface ImportVariantsResponse {
                'callSetIds': string[];
            }

            export interface OperationMetadata {
                'projectId': string;
                'createTime': string;
                'request': {
                    [name: string]: any
                
                };
                'events': OperationEvent[];
            }

            export interface OperationEvent {
                'description': string;
            }

        }
    }
}