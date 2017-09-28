// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        videointelligence(version: string): any;
        videointelligence(version: 'v1beta1'): videointelligence.v1beta1.Videointelligence;
    }

    namespace videointelligence {
        namespace v1beta1 {
            export interface Videointelligence {
                new(options: any): Videointelligence;

                'videos': {
                    'annotate': (parameters: { [key: string]: any; }, callback: (error: any, body: GoogleLongrunning_Operation, response: any) => void) => Request;
                };

            }

            export interface GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation {
                'medical': string;
                'adult': string;
                'racy': string;
                'timeOffset': string;
                'spoof': string;
                'violent': string;
            }

            export interface GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress {
                'annotationProgress': GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress[];
            }

            export interface GoogleCloudVideointelligenceV1beta2_Entity {
                'entityId': string;
                'description': string;
                'languageCode': string;
            }

            export interface GoogleCloudVideointelligenceV1beta2_VideoSegment {
                'endTimeOffset': string;
                'startTimeOffset': string;
            }

            export interface GoogleCloudVideointelligenceV1_VideoAnnotationResults {
                'error': GoogleRpc_Status;
                'shotAnnotations': GoogleCloudVideointelligenceV1_VideoSegment[];
                'safeSearchAnnotations': GoogleCloudVideointelligenceV1_SafeSearchAnnotation[];
                'inputUri': string;
                'labelAnnotations': GoogleCloudVideointelligenceV1_LabelAnnotation[];
            }

            export interface GoogleCloudVideointelligenceV1_LabelLocation {
                'level': string;
                'confidence': number;
                'segment': GoogleCloudVideointelligenceV1_VideoSegment;
            }

            export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse {
                'annotationResults': GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults[];
            }

            export interface GoogleCloudVideointelligenceV1beta1_LabelAnnotation {
                'languageCode': string;
                'description': string;
                'locations': GoogleCloudVideointelligenceV1beta1_LabelLocation[];
            }

            export interface GoogleCloudVideointelligenceV1_LabelAnnotation {
                'description': string;
                'locations': GoogleCloudVideointelligenceV1_LabelLocation[];
                'languageCode': string;
            }

            export interface GoogleCloudVideointelligenceV1beta1_VideoContext {
                'shotChangeDetectionModel': string;
                'labelDetectionMode': string;
                'stationaryCamera': boolean;
                'safeSearchDetectionModel': string;
                'segments': GoogleCloudVideointelligenceV1beta1_VideoSegment[];
                'labelDetectionModel': string;
            }

            export interface GoogleRpc_Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface GoogleCloudVideointelligenceV1_VideoSegment {
                'endTime': string;
                'startTime': string;
            }

            export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults {
                'shotAnnotations': GoogleCloudVideointelligenceV1beta2_VideoSegment[];
                'shotLabelAnnotations': GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
                'error': GoogleRpc_Status;
                'frameLabelAnnotations': GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
                'inputUri': string;
                'explicitAnnotation': GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation;
                'segmentLabelAnnotations': GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
            }

            export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation {
                'frames': GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame[];
            }

            export interface GoogleCloudVideointelligenceV1beta1_LabelLocation {
                'segment': GoogleCloudVideointelligenceV1beta1_VideoSegment;
                'level': string;
                'confidence': number;
            }

            export interface GoogleCloudVideointelligenceV1beta2_LabelFrame {
                'timeOffset': string;
                'confidence': number;
            }

            export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress {
                'annotationProgress': GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress[];
            }

            export interface GoogleCloudVideointelligenceV1_VideoAnnotationProgress {
                'startTime': string;
                'inputUri': string;
                'progressPercent': number;
                'updateTime': string;
            }

            export interface GoogleCloudVideointelligenceV1_AnnotateVideoProgress {
                'annotationProgress': GoogleCloudVideointelligenceV1_VideoAnnotationProgress[];
            }

            export interface GoogleLongrunning_Operation {
                'name': string;
                'error': GoogleRpc_Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
            }

            export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress {
                'inputUri': string;
                'progressPercent': number;
                'updateTime': string;
                'startTime': string;
            }

            export interface GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults {
                'error': GoogleRpc_Status;
                'shotAnnotations': GoogleCloudVideointelligenceV1beta1_VideoSegment[];
                'safeSearchAnnotations': GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation[];
                'inputUri': string;
                'labelAnnotations': GoogleCloudVideointelligenceV1beta1_LabelAnnotation[];
            }

            export interface GoogleCloudVideointelligenceV1_AnnotateVideoResponse {
                'annotationResults': GoogleCloudVideointelligenceV1_VideoAnnotationResults[];
            }

            export interface GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse {
                'annotationResults': GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults[];
            }

            export interface GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress {
                'inputUri': string;
                'progressPercent': number;
                'updateTime': string;
                'startTime': string;
            }

            export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame {
                'timeOffset': string;
                'pornographyLikelihood': string;
            }

            export interface GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest {
                'features': string[];
                'outputUri': string;
                'videoContext': GoogleCloudVideointelligenceV1beta1_VideoContext;
                'locationId': string;
                'inputUri': string;
                'inputContent': string;
            }

            export interface GoogleCloudVideointelligenceV1beta1_VideoSegment {
                'endTimeOffset': string;
                'startTimeOffset': string;
            }

            export interface GoogleCloudVideointelligenceV1beta2_LabelSegment {
                'confidence': number;
                'segment': GoogleCloudVideointelligenceV1beta2_VideoSegment;
            }

            export interface GoogleCloudVideointelligenceV1_SafeSearchAnnotation {
                'time': string;
                'adult': string;
            }

            export interface GoogleCloudVideointelligenceV1beta2_LabelAnnotation {
                'segments': GoogleCloudVideointelligenceV1beta2_LabelSegment[];
                'categoryEntities': GoogleCloudVideointelligenceV1beta2_Entity[];
                'entity': GoogleCloudVideointelligenceV1beta2_Entity;
                'frames': GoogleCloudVideointelligenceV1beta2_LabelFrame[];
            }

        }
    }
}
