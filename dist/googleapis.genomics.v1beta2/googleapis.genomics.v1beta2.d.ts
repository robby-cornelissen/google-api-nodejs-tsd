/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        genomics(version: string): any;
        genomics(version: 'v1beta2'): genomics.v1beta2.Genomics;
    }

    namespace genomics {
        namespace v1beta2 {
            export interface Genomics {
                new(options: any): Genomics;

                'annotationSets': {
                    'create': (parameters: any, callback: (error: any, body: AnnotationSet, response: any) => void) => Request;
                    'delete': (parameters: {'annotationSetId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'annotationSetId': string}, callback: (error: any, body: AnnotationSet, response: any) => void) => Request;
                    'patch': (parameters: {'annotationSetId': string}, callback: (error: any, body: AnnotationSet, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchAnnotationSetsResponse, response: any) => void) => Request;
                    'update': (parameters: {'annotationSetId': string}, callback: (error: any, body: AnnotationSet, response: any) => void) => Request;
                };
                'annotations': {
                    'batchCreate': (parameters: any, callback: (error: any, body: BatchAnnotationsResponse, response: any) => void) => Request;
                    'create': (parameters: any, callback: (error: any, body: Annotation, response: any) => void) => Request;
                    'delete': (parameters: {'annotationId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'annotationId': string}, callback: (error: any, body: Annotation, response: any) => void) => Request;
                    'patch': (parameters: {'annotationId': string}, callback: (error: any, body: Annotation, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchAnnotationsResponse, response: any) => void) => Request;
                    'update': (parameters: {'annotationId': string}, callback: (error: any, body: Annotation, response: any) => void) => Request;
                };
                'callsets': {
                    'create': (parameters: any, callback: (error: any, body: CallSet, response: any) => void) => Request;
                    'delete': (parameters: {'callSetId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'callSetId': string}, callback: (error: any, body: CallSet, response: any) => void) => Request;
                    'patch': (parameters: {'callSetId': string}, callback: (error: any, body: CallSet, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchCallSetsResponse, response: any) => void) => Request;
                    'update': (parameters: {'callSetId': string}, callback: (error: any, body: CallSet, response: any) => void) => Request;
                };
                'datasets': {
                    'create': (parameters: any, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'delete': (parameters: {'datasetId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'list': (parameters: {'pageSize'?: number, 'pageToken'?: string, 'projectNumber'?: string}, callback: (error: any, body: ListDatasetsResponse, response: any) => void) => Request;
                    'patch': (parameters: {'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'undelete': (parameters: {'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                    'update': (parameters: {'datasetId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                };
                'experimental': {
                    'jobs': {
                        'create': (parameters: any, callback: (error: any, body: ExperimentalCreateJobResponse, response: any) => void) => Request;
                    };
                };
                'jobs': {
                    'cancel': (parameters: {'jobId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchJobsResponse, response: any) => void) => Request;
                };
                'readgroupsets': {
                    'delete': (parameters: {'readGroupSetId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'export': (parameters: any, callback: (error: any, body: ExportReadGroupSetsResponse, response: any) => void) => Request;
                    'get': (parameters: {'readGroupSetId': string}, callback: (error: any, body: ReadGroupSet, response: any) => void) => Request;
                    'import': (parameters: any, callback: (error: any, body: ImportReadGroupSetsResponse, response: any) => void) => Request;
                    'patch': (parameters: {'readGroupSetId': string}, callback: (error: any, body: ReadGroupSet, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchReadGroupSetsResponse, response: any) => void) => Request;
                    'update': (parameters: {'readGroupSetId': string}, callback: (error: any, body: ReadGroupSet, response: any) => void) => Request;
                
                    'coveragebuckets': {
                        'list': (parameters: {'pageSize'?: number, 'pageToken'?: string, 'range.end'?: string, 'range.referenceName'?: string, 'range.start'?: string, 'readGroupSetId': string, 'targetBucketWidth'?: string}, callback: (error: any, body: ListCoverageBucketsResponse, response: any) => void) => Request;
                    };
                };
                'reads': {
                    'search': (parameters: any, callback: (error: any, body: SearchReadsResponse, response: any) => void) => Request;
                };
                'references': {
                    'get': (parameters: {'referenceId': string}, callback: (error: any, body: Reference, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchReferencesResponse, response: any) => void) => Request;
                
                    'bases': {
                        'list': (parameters: {'end'?: string, 'pageSize'?: number, 'pageToken'?: string, 'referenceId': string, 'start'?: string}, callback: (error: any, body: ListBasesResponse, response: any) => void) => Request;
                    };
                };
                'referencesets': {
                    'get': (parameters: {'referenceSetId': string}, callback: (error: any, body: ReferenceSet, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchReferenceSetsResponse, response: any) => void) => Request;
                };
                'variants': {
                    'create': (parameters: any, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'delete': (parameters: {'variantId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'variantId': string}, callback: (error: any, body: Variant, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchVariantsResponse, response: any) => void) => Request;
                    'update': (parameters: {'variantId': string}, callback: (error: any, body: Variant, response: any) => void) => Request;
                };
                'variantsets': {
                    'create': (parameters: any, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                    'delete': (parameters: {'variantSetId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'export': (parameters: {'variantSetId': string}, callback: (error: any, body: ExportVariantSetResponse, response: any) => void) => Request;
                    'get': (parameters: {'variantSetId': string}, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                    'importVariants': (parameters: {'variantSetId': string}, callback: (error: any, body: ImportVariantsResponse, response: any) => void) => Request;
                    'mergeVariants': (parameters: {'variantSetId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'patch': (parameters: {'variantSetId': string}, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                    'search': (parameters: any, callback: (error: any, body: SearchVariantSetsResponse, response: any) => void) => Request;
                    'update': (parameters: {'variantSetId': string}, callback: (error: any, body: VariantSet, response: any) => void) => Request;
                };

            }

            interface Annotation {
                'annotationSetId': string;
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'name': string;
                'position': RangePosition;
                'transcript': Transcript;
                'type': string;
                'variant': VariantAnnotation;
            }

            interface AnnotationSet {
                'datasetId': string;
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'name': string;
                'referenceSetId': string;
                'sourceUri': string;
                'type': string;
            }

            interface BatchAnnotationsResponse {
                'entries': BatchAnnotationsResponseEntry[];
            }

            interface BatchAnnotationsResponseEntry {
                'annotation': Annotation;
                'status': BatchAnnotationsResponseEntryStatus;
            }

            interface BatchAnnotationsResponseEntryStatus {
                'code': number;
                'message': string;
            }

            interface BatchCreateAnnotationsRequest {
                'annotations': Annotation[];
            }

            interface Call {
                'callSetId': string;
                'callSetName': string;
                'genotype': number[];
                'genotypeLikelihood': number[];
                'info': {
                    [name: string]: string[]
                };
                'phaseset': string;
            }

            interface CallSet {
                'created': string;
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'name': string;
                'sampleId': string;
                'variantSetIds': string[];
            }

            interface CigarUnit {
                'operation': string;
                'operationLength': string;
                'referenceSequence': string;
            }

            interface CoverageBucket {
                'meanCoverage': number;
                'range': Range;
            }

            interface Dataset {
                'createTime': string;
                'id': string;
                'isPublic': boolean;
                'name': string;
                'projectNumber': string;
            }

            interface ExperimentalCreateJobRequest {
                'align': boolean;
                'callVariants': boolean;
                'gcsOutputPath': string;
                'pairedSourceUris': string[];
                'projectNumber': string;
                'sourceUris': string[];
            }

            interface ExperimentalCreateJobResponse {
                'jobId': string;
            }

            interface ExportReadGroupSetsRequest {
                'exportUri': string;
                'projectNumber': string;
                'readGroupSetIds': string[];
                'referenceNames': string[];
            }

            interface ExportReadGroupSetsResponse {
                'jobId': string;
            }

            interface ExportVariantSetRequest {
                'bigqueryDataset': string;
                'bigqueryTable': string;
                'callSetIds': string[];
                'format': string;
                'projectNumber': string;
            }

            interface ExportVariantSetResponse {
                'jobId': string;
            }

            interface ExternalId {
                'id': string;
                'sourceName': string;
            }

            interface ImportReadGroupSetsRequest {
                'datasetId': string;
                'partitionStrategy': string;
                'referenceSetId': string;
                'sourceUris': string[];
            }

            interface ImportReadGroupSetsResponse {
                'jobId': string;
            }

            interface ImportVariantsRequest {
                'format': string;
                'normalizeReferenceNames': boolean;
                'sourceUris': string[];
            }

            interface ImportVariantsResponse {
                'jobId': string;
            }

            interface Int32Value {
                'value': number;
            }

            interface Job {
                'created': string;
                'detailedStatus': string;
                'errors': string[];
                'id': string;
                'importedIds': string[];
                'projectNumber': string;
                'request': JobRequest;
                'status': string;
                'warnings': string[];
            }

            interface JobRequest {
                'destination': string[];
                'source': string[];
                'type': string;
            }

            interface KeyValue {
                'key': string;
                'value': string[];
            }

            interface LinearAlignment {
                'cigar': CigarUnit[];
                'mappingQuality': number;
                'position': Position;
            }

            interface ListBasesResponse {
                'nextPageToken': string;
                'offset': string;
                'sequence': string;
            }

            interface ListCoverageBucketsResponse {
                'bucketWidth': string;
                'coverageBuckets': CoverageBucket[];
                'nextPageToken': string;
            }

            interface ListDatasetsResponse {
                'datasets': Dataset[];
                'nextPageToken': string;
            }

            interface MergeVariantsRequest {
                'variants': Variant[];
            }

            interface Metadata {
                'description': string;
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'key': string;
                'number': string;
                'type': string;
                'value': string;
            }

            interface Position {
                'position': string;
                'referenceName': string;
                'reverseStrand': boolean;
            }

            interface QueryRange {
                'end': string;
                'referenceId': string;
                'referenceName': string;
                'start': string;
            }

            interface Range {
                'end': string;
                'referenceName': string;
                'start': string;
            }

            interface RangePosition {
                'end': string;
                'referenceId': string;
                'referenceName': string;
                'reverseStrand': boolean;
                'start': string;
            }

            interface Read {
                'alignedQuality': number[];
                'alignedSequence': string;
                'alignment': LinearAlignment;
                'duplicateFragment': boolean;
                'failedVendorQualityChecks': boolean;
                'fragmentLength': number;
                'fragmentName': string;
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'nextMatePosition': Position;
                'numberReads': number;
                'properPlacement': boolean;
                'readGroupId': string;
                'readGroupSetId': string;
                'readNumber': number;
                'secondaryAlignment': boolean;
                'supplementaryAlignment': boolean;
            }

            interface ReadGroup {
                'datasetId': string;
                'description': string;
                'experiment': ReadGroupExperiment;
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'name': string;
                'predictedInsertSize': number;
                'programs': ReadGroupProgram[];
                'referenceSetId': string;
                'sampleId': string;
            }

            interface ReadGroupExperiment {
                'instrumentModel': string;
                'libraryId': string;
                'platformUnit': string;
                'sequencingCenter': string;
            }

            interface ReadGroupProgram {
                'commandLine': string;
                'id': string;
                'name': string;
                'prevProgramId': string;
                'version': string;
            }

            interface ReadGroupSet {
                'datasetId': string;
                'filename': string;
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'name': string;
                'readGroups': ReadGroup[];
                'referenceSetId': string;
            }

            interface Reference {
                'id': string;
                'length': string;
                'md5checksum': string;
                'name': string;
                'ncbiTaxonId': number;
                'sourceAccessions': string[];
                'sourceURI': string;
            }

            interface ReferenceBound {
                'referenceName': string;
                'upperBound': string;
            }

            interface ReferenceSet {
                'assemblyId': string;
                'description': string;
                'id': string;
                'md5checksum': string;
                'ncbiTaxonId': number;
                'referenceIds': string[];
                'sourceAccessions': string[];
                'sourceURI': string;
            }

            interface SearchAnnotationSetsRequest {
                'datasetIds': string[];
                'name': string;
                'pageSize': number;
                'pageToken': string;
                'referenceSetId': string;
                'types': string[];
            }

            interface SearchAnnotationSetsResponse {
                'annotationSets': AnnotationSet[];
                'nextPageToken': string;
            }

            interface SearchAnnotationsRequest {
                'annotationSetIds': string[];
                'pageSize': number;
                'pageToken': string;
                'range': QueryRange;
            }

            interface SearchAnnotationsResponse {
                'annotations': Annotation[];
                'nextPageToken': string;
            }

            interface SearchCallSetsRequest {
                'name': string;
                'pageSize': number;
                'pageToken': string;
                'variantSetIds': string[];
            }

            interface SearchCallSetsResponse {
                'callSets': CallSet[];
                'nextPageToken': string;
            }

            interface SearchJobsRequest {
                'createdAfter': string;
                'createdBefore': string;
                'pageSize': number;
                'pageToken': string;
                'projectNumber': string;
                'status': string[];
            }

            interface SearchJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            interface SearchReadGroupSetsRequest {
                'datasetIds': string[];
                'name': string;
                'pageSize': number;
                'pageToken': string;
            }

            interface SearchReadGroupSetsResponse {
                'nextPageToken': string;
                'readGroupSets': ReadGroupSet[];
            }

            interface SearchReadsRequest {
                'end': string;
                'pageSize': number;
                'pageToken': string;
                'readGroupIds': string[];
                'readGroupSetIds': string[];
                'referenceName': string;
                'start': string;
            }

            interface SearchReadsResponse {
                'alignments': Read[];
                'nextPageToken': string;
            }

            interface SearchReferenceSetsRequest {
                'accessions': string[];
                'assemblyId': string;
                'md5checksums': string[];
                'pageSize': number;
                'pageToken': string;
            }

            interface SearchReferenceSetsResponse {
                'nextPageToken': string;
                'referenceSets': ReferenceSet[];
            }

            interface SearchReferencesRequest {
                'accessions': string[];
                'md5checksums': string[];
                'pageSize': number;
                'pageToken': string;
                'referenceSetId': string;
            }

            interface SearchReferencesResponse {
                'nextPageToken': string;
                'references': Reference[];
            }

            interface SearchVariantSetsRequest {
                'datasetIds': string[];
                'pageSize': number;
                'pageToken': string;
            }

            interface SearchVariantSetsResponse {
                'nextPageToken': string;
                'variantSets': VariantSet[];
            }

            interface SearchVariantsRequest {
                'callSetIds': string[];
                'end': string;
                'maxCalls': number;
                'pageSize': number;
                'pageToken': string;
                'referenceName': string;
                'start': string;
                'variantName': string;
                'variantSetIds': string[];
            }

            interface SearchVariantsResponse {
                'nextPageToken': string;
                'variants': Variant[];
            }

            interface Transcript {
                'codingSequence': TranscriptCodingSequence;
                'exons': TranscriptExon[];
                'geneId': string;
            }

            interface TranscriptCodingSequence {
                'end': string;
                'start': string;
            }

            interface TranscriptExon {
                'end': string;
                'frame': Int32Value;
                'start': string;
            }

            interface Variant {
                'alternateBases': string[];
                'calls': Call[];
                'created': string;
                'end': string;
                'filter': string[];
                'id': string;
                'info': {
                    [name: string]: string[]
                };
                'names': string[];
                'quality': number;
                'referenceBases': string;
                'referenceName': string;
                'start': string;
                'variantSetId': string;
            }

            interface VariantAnnotation {
                'alternateBases': string;
                'clinicalSignificance': string;
                'conditions': VariantAnnotationCondition[];
                'effect': string;
                'geneId': string;
                'transcriptIds': string[];
                'type': string;
            }

            interface VariantAnnotationCondition {
                'conceptId': string;
                'externalIds': ExternalId[];
                'names': string[];
                'omimId': string;
            }

            interface VariantSet {
                'datasetId': string;
                'id': string;
                'metadata': Metadata[];
                'referenceBounds': ReferenceBound[];
                'referenceSetId': string;
            }

        }
    }
}