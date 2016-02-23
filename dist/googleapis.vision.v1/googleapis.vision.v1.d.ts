// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        vision(version: string): any;
        vision(version: 'v1'): vision.v1.Vision;
    }

    namespace vision {
        namespace v1 {
            export interface Vision {
                new(options: any): Vision;

                'images': {
                    'annotate': (parameters: {}, callback: (error: any, body: BatchAnnotateImagesResponse, response: any) => void) => Request;
                };

            }

            export interface ImageSource {
                'gcsImageUri': string;
            }

            export interface AnnotateImageRequest {
                'image': Image;
                'imageContext': ImageContext;
                'features': Feature[];
            }

            export interface AnnotateImageResponse {
                'labelAnnotations': EntityAnnotation[];
                'landmarkAnnotations': EntityAnnotation[];
                'safeSearchAnnotation': SafeSearchAnnotation;
                'imagePropertiesAnnotation': ImageProperties;
                'textAnnotations': EntityAnnotation[];
                'logoAnnotations': EntityAnnotation[];
                'faceAnnotations': FaceAnnotation[];
                'error': Status;
            }

            export interface LatLongRect {
                'maxLatLng': LatLng;
                'minLatLng': LatLng;
            }

            export interface Status {
                'code': number;
                'details': {
                    [name: string]: any
                
                }[];
                'message': string;
            }

            export interface FaceAnnotation {
                'tiltAngle': number;
                'underExposedLikelihood': string;
                'fdBoundingPoly': BoundingPoly;
                'landmarkingConfidence': number;
                'joyLikelihood': string;
                'detectionConfidence': number;
                'surpriseLikelihood': string;
                'angerLikelihood': string;
                'headwearLikelihood': string;
                'boundingPoly': BoundingPoly;
                'panAngle': number;
                'landmarks': Landmark[];
                'blurredLikelihood': string;
                'rollAngle': number;
                'sorrowLikelihood': string;
            }

            export interface Vertex {
                'y': number;
                'x': number;
            }

            export interface ColorInfo {
                'pixelFraction': number;
                'color': Color;
                'score': number;
            }

            export interface BoundingPoly {
                'vertices': Vertex[];
            }

            export interface Landmark {
                'position': Position;
                'type': string;
            }

            export interface ImageContext {
                'languageHints': string[];
                'latLongRect': LatLongRect;
            }

            export interface BatchAnnotateImagesRequest {
                'requests': AnnotateImageRequest[];
            }

            export interface EntityAnnotation {
                'mid': string;
                'description': string;
                'topicality': number;
                'locale': string;
                'properties': Property[];
                'score': number;
                'boundingPoly': BoundingPoly;
                'locations': LocationInfo[];
                'confidence': number;
            }

            export interface Property {
                'value': string;
                'name': string;
            }

            export interface Color {
                'green': number;
                'blue': number;
                'red': number;
                'alpha': number;
            }

            export interface LocationInfo {
                'latLng': LatLng;
            }

            export interface SafeSearchAnnotation {
                'medical': string;
                'violence': string;
                'spoof': string;
                'adult': string;
            }

            export interface Image {
                'source': ImageSource;
                'content': string;
            }

            export interface DominantColorsAnnotation {
                'colors': ColorInfo[];
            }

            export interface Feature {
                'maxResults': number;
                'type': string;
            }

            export interface BatchAnnotateImagesResponse {
                'responses': AnnotateImageResponse[];
            }

            export interface ImageProperties {
                'dominantColors': DominantColorsAnnotation;
            }

            export interface Position {
                'y': number;
                'z': number;
                'x': number;
            }

            export interface LatLng {
                'longitude': number;
                'latitude': number;
            }

        }
    }
}