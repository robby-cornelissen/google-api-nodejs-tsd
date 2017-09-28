// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        genomics(version: string): any;
        genomics(version: 'v1'): genomics.v1.Genomics;
    }

    namespace genomics {
        namespace v1 {
            export interface Genomics {
                new(options: any): Genomics;

                'callsets': {
                    'delete': (parameters: { [key: string]: any; 'callSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchCallSetsResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'callSetId': string}, callback: (error: any, body: CallSet, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'callSetId': string, 'updateMask'?: string}, callback: (error: any, body: CallSet, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: CallSet, response: any) => void) => Request;
                };
                'reads': {
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchReadsResponse, response: any) => void) => Request;
                };
                'readgroupsets': {
                    'delete': (parameters: { [key: string]: any; 'readGroupSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'import': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'export': (parameters: { [key: string]: any; 'readGroupSetId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchReadGroupSetsResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'readGroupSetId': string, 'updateMask'?: string}, callback: (error: any, body: ReadGroupSet, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'readGroupSetId': string}, callback: (error: any, body: ReadGroupSet, response: any) => void) => Request;

                    'coveragebuckets': {
                        'list': (parameters: { [key: string]: any; 'referenceName'?: string, 'end'?: string, 'pageToken'?: string, 'pageSize'?: number, 'start'?: string, 'readGroupSetId': string, 'targetBucketWidth'?: string}, callback: (error: any, body: ListCoverageBucketsResponse, response: any) => void) => Request;
                    };
                };
                'annotationsets': {
                    'delete': (parameters: { [key: string]: any; 'annotationSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchAnnotationSetsResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'annotationSetId': string}, callback: (error: any, body: AnnotationSet, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'annotationSetId': string, 'updateMask'?: string}, callback: (error: any, body: AnnotationSet, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: AnnotationSet, response: any) => void) => Request;
                };
                'variants': {
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchVariantsResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'variantId': string}, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'variantId': string}, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'import': (parameters: { [key: string]: any; }, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'merge': (parameters: { [key: string]: any; }, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'variantId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'references': {
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchReferencesResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'referenceId': string}, callback: (error: any, body: Reference, response: any) => void) => Request;

                    'bases': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'start'?: string, 'referenceId': string, 'end'?: string}, callback: (error: any, body: ListBasesResponse, response: any) => void) => Request;
                    };
                };
                'datasets': {
                    'delete': (parameters: { [key: string]: any; 'datasetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'projectId'?: string}, callback: (error: any, body: ListDatasetsResponse, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'undelete': (parameters: { [key: string]: any; 'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'datasetId': string, 'updateMask'?: string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                };
                'variantsets': {
                    'export': (parameters: { [key: string]: any; 'variantSetId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchVariantSetsResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'variantSetId': string}, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'variantSetId': string}, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'variantSetId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                };
                'annotations': {
                    'delete': (parameters: { [key: string]: any; 'annotationId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Annotation, response: any) => void) => Request;
                    'batchCreate': (parameters: { [key: string]: any; }, callback: (error: any, body: BatchCreateAnnotationsResponse, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchAnnotationsResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'annotationId': string}, callback: (error: any, body: Annotation, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'updateMask'?: string, 'annotationId': string}, callback: (error: any, body: Annotation, response: any) => void) => Request;
                };
                'operations': {
                    'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                };
                'referencesets': {
                    'search': (parameters: { [key: string]: any; }, callback: (error: any, body: SearchReferenceSetsResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'referenceSetId': string}, callback: (error: any, body: ReferenceSet, response: any) => void) => Request;
                };

            }

            export interface Dataset {
                'name': string;
                'projectId': string;
                'id': string;
                'createTime': string;
            }

            export interface ImportVariantsResponse {
                'callSetIds': string[];
            }

            export interface ReadGroup {
                'datasetId': string;
                'experiment': Experiment;
                'name': string;
                'referenceSetId': string;
                'info': {
                    [name: string]: any[]
                ;
                };
                'id': string;
                'programs': Program[];
                'predictedInsertSize': number;
                'description': string;
                'sampleId': string;
            }

            export interface ReadGroupSet {
                'datasetId': string;
                'readGroups': ReadGroup[];
                'filename': string;
                'name': string;
                'referenceSetId': string;
                'info': {
                    [name: string]: any[]
                ;
                };
                'id': string;
            }

            export interface SearchVariantSetsResponse {
                'variantSets': VariantSet[];
                'nextPageToken': string;
            }

            export interface Empty {}

            export interface Entry {
                'annotation': Annotation;
                'status': Status;
            }

            export interface Position {
                'position': string;
                'referenceName': string;
                'reverseStrand': boolean;
            }

            export interface SearchReferenceSetsResponse {
                'nextPageToken': string;
                'referenceSets': ReferenceSet[];
            }

            export interface SearchCallSetsRequest {
                'variantSetIds': string[];
                'pageToken': string;
                'name': string;
                'pageSize': number;
            }

            export interface ImportReadGroupSetsRequest {
                'referenceSetId': string;
                'partitionStrategy': string;
                'datasetId': string;
                'sourceUris': string[];
            }

            export interface Policy {
                'etag': string;
                'version': number;
                'bindings': Binding[];
            }

            export interface SearchReadsRequest {
                'pageToken': string;
                'pageSize': number;
                'start': string;
                'referenceName': string;
                'readGroupSetIds': string[];
                'readGroupIds': string[];
                'end': string;
            }

            export interface Annotation {
                'id': string;
                'referenceId': string;
                'reverseStrand': boolean;
                'referenceName': string;
                'info': {
                    [name: string]: any[]
                ;
                };
                'type': string;
                'end': string;
                'transcript': Transcript;
                'start': string;
                'annotationSetId': string;
                'name': string;
                'variant': VariantAnnotation;
            }

            export interface CancelOperationRequest {}

            export interface Operation {
                'done': boolean;
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
            }

            export interface RuntimeMetadata {
                'computeEngine': ComputeEngine;
            }

            export interface ImportReadGroupSetsResponse {
                'readGroupSetIds': string[];
            }

            export interface VariantCall {
                'phaseset': string;
                'info': {
                    [name: string]: any[]
                ;
                };
                'callSetName': string;
                'genotypeLikelihood': number[];
                'callSetId': string;
                'genotype': number[];
            }

            export interface SearchVariantsResponse {
                'nextPageToken': string;
                'variants': Variant[];
            }

            export interface ListBasesResponse {
                'sequence': string;
                'offset': string;
                'nextPageToken': string;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface UndeleteDatasetRequest {}

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface Range {
                'referenceName': string;
                'start': string;
                'end': string;
            }

            export interface VariantSet {
                'referenceBounds': ReferenceBound[];
                'id': string;
                'description': string;
                'datasetId': string;
                'name': string;
                'referenceSetId': string;
                'metadata': VariantSetMetadata[];
            }

            export interface BatchCreateAnnotationsResponse {
                'entries': Entry[];
            }

            export interface ReferenceBound {
                'referenceName': string;
                'upperBound': string;
            }

            export interface SearchCallSetsResponse {
                'nextPageToken': string;
                'callSets': CallSet[];
            }

            export interface Variant {
                'referenceBases': string;
                'names': string[];
                'alternateBases': string[];
                'end': string;
                'filter': string[];
                'calls': VariantCall[];
                'created': string;
                'start': string;
                'quality': number;
                'id': string;
                'variantSetId': string;
                'referenceName': string;
                'info': {
                    [name: string]: any[]
                ;
                };
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface OperationMetadata {
                'projectId': string;
                'clientId': string;
                'events': OperationEvent[];
                'endTime': string;
                'startTime': string;
                'request': {
                    [name: string]: any
                ;
                };
                'runtimeMetadata': {
                    [name: string]: any
                ;
                };
                'labels': {
                    [name: string]: string
                ;
                };
                'createTime': string;
            }

            export interface SearchVariantsRequest {
                'maxCalls': number;
                'pageToken': string;
                'pageSize': number;
                'callSetIds': string[];
                'variantName': string;
                'start': string;
                'referenceName': string;
                'variantSetIds': string[];
                'end': string;
            }

            export interface SearchReadGroupSetsRequest {
                'pageToken': string;
                'name': string;
                'pageSize': number;
                'datasetIds': string[];
            }

            export interface SearchAnnotationsResponse {
                'nextPageToken': string;
                'annotations': Annotation[];
            }

            export interface ClinicalCondition {
                'omimId': string;
                'externalIds': ExternalId[];
                'conceptId': string;
                'names': string[];
            }

            export interface SearchReadsResponse {
                'nextPageToken': string;
                'alignments': Read[];
            }

            export interface Program {
                'name': string;
                'prevProgramId': string;
                'commandLine': string;
                'version': string;
                'id': string;
            }

            export interface ComputeEngine {
                'zone': string;
                'diskNames': string[];
                'machineType': string;
                'instanceName': string;
            }

            export interface CoverageBucket {
                'meanCoverage': number;
                'range': Range;
            }

            export interface ExternalId {
                'sourceName': string;
                'id': string;
            }

            export interface SearchVariantSetsRequest {
                'pageToken': string;
                'pageSize': number;
                'datasetIds': string[];
            }

            export interface VariantSetMetadata {
                'info': {
                    [name: string]: any[]
                ;
                };
                'type': string;
                'value': string;
                'id': string;
                'number': string;
                'key': string;
                'description': string;
            }

            export interface Reference {
                'name': string;
                'md5checksum': string;
                'id': string;
                'length': string;
                'sourceAccessions': string[];
                'sourceUri': string;
                'ncbiTaxonId': number;
            }

            export interface SearchReferenceSetsRequest {
                'pageToken': string;
                'accessions': string[];
                'pageSize': number;
                'assemblyId': string;
                'md5checksums': string[];
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface MergeVariantsRequest {
                'variants': Variant[];
                'infoMergeConfig': {
                    [name: string]: string
                ;
                };
                'variantSetId': string;
            }

            export interface Read {
                'supplementaryAlignment': boolean;
                'properPlacement': boolean;
                'fragmentLength': number;
                'failedVendorQualityChecks': boolean;
                'alignedQuality': number[];
                'alignment': LinearAlignment;
                'numberReads': number;
                'id': string;
                'secondaryAlignment': boolean;
                'fragmentName': string;
                'readGroupSetId': string;
                'duplicateFragment': boolean;
                'readNumber': number;
                'readGroupId': string;
                'alignedSequence': string;
                'info': {
                    [name: string]: any[]
                ;
                };
                'nextMatePosition': Position;
            }

            export interface BatchCreateAnnotationsRequest {
                'requestId': string;
                'annotations': Annotation[];
            }

            export interface CigarUnit {
                'operation': string;
                'referenceSequence': string;
                'operationLength': string;
            }

            export interface ReferenceSet {
                'id': string;
                'description': string;
                'sourceAccessions': string[];
                'sourceUri': string;
                'ncbiTaxonId': number;
                'referenceIds': string[];
                'md5checksum': string;
                'assemblyId': string;
            }

            export interface AnnotationSet {
                'id': string;
                'sourceUri': string;
                'datasetId': string;
                'name': string;
                'referenceSetId': string;
                'type': string;
                'info': {
                    [name: string]: any[]
                ;
                };
            }

            export interface Transcript {
                'exons': Exon[];
                'codingSequence': CodingSequence;
                'geneId': string;
            }

            export interface Experiment {
                'sequencingCenter': string;
                'platformUnit': string;
                'instrumentModel': string;
                'libraryId': string;
            }

            export interface ListDatasetsResponse {
                'nextPageToken': string;
                'datasets': Dataset[];
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Exon {
                'start': string;
                'frame': number;
                'end': string;
            }

            export interface ExportReadGroupSetRequest {
                'referenceNames': string[];
                'exportUri': string;
                'projectId': string;
            }

            export interface CallSet {
                'name': string;
                'info': {
                    [name: string]: any[]
                ;
                };
                'variantSetIds': string[];
                'id': string;
                'created': string;
                'sampleId': string;
            }

            export interface SearchAnnotationSetsResponse {
                'nextPageToken': string;
                'annotationSets': AnnotationSet[];
            }

            export interface ImportVariantsRequest {
                'infoMergeConfig': {
                    [name: string]: string
                ;
                };
                'sourceUris': string[];
                'variantSetId': string;
                'normalizeReferenceNames': boolean;
                'format': string;
            }

            export interface ListCoverageBucketsResponse {
                'nextPageToken': string;
                'bucketWidth': string;
                'coverageBuckets': CoverageBucket[];
            }

            export interface VariantAnnotation {
                'effect': string;
                'transcriptIds': string[];
                'type': string;
                'alternateBases': string;
                'geneId': string;
                'clinicalSignificance': string;
                'conditions': ClinicalCondition[];
            }

            export interface ExportVariantSetRequest {
                'bigqueryTable': string;
                'bigqueryDataset': string;
                'format': string;
                'projectId': string;
                'callSetIds': string[];
            }

            export interface SearchAnnotationsRequest {
                'referenceName': string;
                'referenceId': string;
                'end': string;
                'pageToken': string;
                'pageSize': number;
                'start': string;
                'annotationSetIds': string[];
            }

            export interface OperationEvent {
                'endTime': string;
                'startTime': string;
                'description': string;
            }

            export interface CodingSequence {
                'start': string;
                'end': string;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface GetIamPolicyRequest {}

            export interface SearchReferencesResponse {
                'nextPageToken': string;
                'references': Reference[];
            }

            export interface SearchAnnotationSetsRequest {
                'name': string;
                'referenceSetId': string;
                'pageToken': string;
                'pageSize': number;
                'datasetIds': string[];
                'types': string[];
            }

            export interface SearchReadGroupSetsResponse {
                'readGroupSets': ReadGroupSet[];
                'nextPageToken': string;
            }

            export interface LinearAlignment {
                'mappingQuality': number;
                'cigar': CigarUnit[];
                'position': Position;
            }

            export interface SearchReferencesRequest {
                'pageToken': string;
                'accessions': string[];
                'pageSize': number;
                'referenceSetId': string;
                'md5checksums': string[];
            }

        }
    }
}
