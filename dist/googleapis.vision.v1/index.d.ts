// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        vision(version: string): any;
        vision(version: 'v1'): vision.v1.Vision;
    }

    namespace vision {
        namespace v1 {
            export interface Vision {
                new(options: any): Vision;

                'images': {
                    'annotate': (parameters: { [key: string]: any; }, callback: (error: any, body: BatchAnnotateImagesResponse, response: any) => void) => Request;
                };

            }

            export interface CropHintsAnnotation {
                'cropHints': CropHint[];
            }

            export interface LatLng {
                'longitude': number;
                'latitude': number;
            }

            export interface Color {
                'red': number;
                'alpha': number;
                'blue': number;
                'green': number;
            }

            export interface Feature {
                'maxResults': number;
                'type': string;
            }

            export interface ImageProperties {
                'dominantColors': DominantColorsAnnotation;
            }

            export interface SafeSearchAnnotation {
                'violence': string;
                'adult': string;
                'spoof': string;
                'medical': string;
            }

            export interface DominantColorsAnnotation {
                'colors': ColorInfo[];
            }

            export interface TextAnnotation {
                'pages': Page[];
                'text': string;
            }

            export interface DetectedLanguage {
                'languageCode': string;
                'confidence': number;
            }

            export interface Vertex {
                'y': number;
                'x': number;
            }

            export interface WebEntity {
                'entityId': string;
                'description': string;
                'score': number;
            }

            export interface BoundingPoly {
                'vertices': Vertex[];
            }

            export interface TextProperty {
                'detectedLanguages': DetectedLanguage[];
                'detectedBreak': DetectedBreak;
            }

            export interface AnnotateImageResponse {
                'landmarkAnnotations': EntityAnnotation[];
                'textAnnotations': EntityAnnotation[];
                'faceAnnotations': FaceAnnotation[];
                'imagePropertiesAnnotation': ImageProperties;
                'logoAnnotations': EntityAnnotation[];
                'cropHintsAnnotation': CropHintsAnnotation;
                'webDetection': WebDetection;
                'labelAnnotations': EntityAnnotation[];
                'safeSearchAnnotation': SafeSearchAnnotation;
                'error': Status;
                'fullTextAnnotation': TextAnnotation;
            }

            export interface CropHintsParams {
                'aspectRatios': number[];
            }

            export interface Block {
                'paragraphs': Paragraph[];
                'property': TextProperty;
                'blockType': string;
                'boundingBox': BoundingPoly;
            }

            export interface Property {
                'value': string;
                'uint64Value': string;
                'name': string;
            }

            export interface LocationInfo {
                'latLng': LatLng;
            }

            export interface ImageSource {
                'gcsImageUri': string;
                'imageUri': string;
            }

            export interface BatchAnnotateImagesResponse {
                'responses': AnnotateImageResponse[];
            }

            export interface WebDetection {
                'fullMatchingImages': WebImage[];
                'webEntities': WebEntity[];
                'pagesWithMatchingImages': WebPage[];
                'visuallySimilarImages': WebImage[];
                'partialMatchingImages': WebImage[];
            }

            export interface Position {
                'z': number;
                'x': number;
                'y': number;
            }

            export interface ColorInfo {
                'color': Color;
                'score': number;
                'pixelFraction': number;
            }

            export interface WebPage {
                'score': number;
                'url': string;
            }

            export interface EntityAnnotation {
                'boundingPoly': BoundingPoly;
                'locale': string;
                'topicality': number;
                'description': string;
                'properties': Property[];
                'score': number;
                'locations': LocationInfo[];
                'mid': string;
                'confidence': number;
            }

            export interface CropHint {
                'boundingPoly': BoundingPoly;
                'importanceFraction': number;
                'confidence': number;
            }

            export interface Landmark {
                'position': Position;
                'type': string;
            }

            export interface WebImage {
                'score': number;
                'url': string;
            }

            export interface Word {
                'property': TextProperty;
                'boundingBox': BoundingPoly;
                'symbols': Symbol[];
            }

            export interface Paragraph {
                'words': Word[];
                'property': TextProperty;
                'boundingBox': BoundingPoly;
            }

            export interface Image {
                'source': ImageSource;
                'content': string;
            }

            export interface FaceAnnotation {
                'headwearLikelihood': string;
                'boundingPoly': BoundingPoly;
                'rollAngle': number;
                'sorrowLikelihood': string;
                'tiltAngle': number;
                'fdBoundingPoly': BoundingPoly;
                'angerLikelihood': string;
                'landmarks': Landmark[];
                'surpriseLikelihood': string;
                'landmarkingConfidence': number;
                'joyLikelihood': string;
                'detectionConfidence': number;
                'panAngle': number;
                'underExposedLikelihood': string;
                'blurredLikelihood': string;
            }

            export interface BatchAnnotateImagesRequest {
                'requests': AnnotateImageRequest[];
            }

            export interface DetectedBreak {
                'type': string;
                'isPrefix': boolean;
            }

            export interface ImageContext {
                'languageHints': string[];
                'latLongRect': LatLongRect;
                'cropHintsParams': CropHintsParams;
            }

            export interface Page {
                'height': number;
                'width': number;
                'blocks': Block[];
                'property': TextProperty;
            }

            export interface AnnotateImageRequest {
                'features': Feature[];
                'image': Image;
                'imageContext': ImageContext;
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface LatLongRect {
                'minLatLng': LatLng;
                'maxLatLng': LatLng;
            }

            export interface Symbol {
                'property': TextProperty;
                'boundingBox': BoundingPoly;
                'text': string;
            }

        }
    }
}
