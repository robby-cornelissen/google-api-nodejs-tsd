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

            interface ImageSource {
                'gcsImageUri': string;
            }

            interface AnnotateImageRequest {
                'image': Image;
                'imageContext': ImageContext;
                'features': Feature[];
            }

            interface AnnotateImageResponse {
                'labelAnnotations': EntityAnnotation[];
                'landmarkAnnotations': EntityAnnotation[];
                'safeSearchAnnotation': SafeSearchAnnotation;
                'imagePropertiesAnnotation': ImageProperties;
                'textAnnotations': EntityAnnotation[];
                'logoAnnotations': EntityAnnotation[];
                'faceAnnotations': FaceAnnotation[];
                'error': Status;
            }

            interface LatLongRect {
                'maxLatLng': LatLng;
                'minLatLng': LatLng;
            }

            interface Status {
                'code': number;
                'details': {
                    [name: string]: any
                }[];
                'message': string;
            }

            interface FaceAnnotation {
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

            interface Vertex {
                'y': number;
                'x': number;
            }

            interface ColorInfo {
                'pixelFraction': number;
                'color': Color;
                'score': number;
            }

            interface BoundingPoly {
                'vertices': Vertex[];
            }

            interface Landmark {
                'position': Position;
                'type': string;
            }

            interface ImageContext {
                'languageHints': string[];
                'latLongRect': LatLongRect;
            }

            interface BatchAnnotateImagesRequest {
                'requests': AnnotateImageRequest[];
            }

            interface EntityAnnotation {
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

            interface Property {
                'value': string;
                'name': string;
            }

            interface Color {
                'green': number;
                'blue': number;
                'red': number;
                'alpha': number;
            }

            interface LocationInfo {
                'latLng': LatLng;
            }

            interface SafeSearchAnnotation {
                'medical': string;
                'violence': string;
                'spoof': string;
                'adult': string;
            }

            interface Image {
                'source': ImageSource;
                'content': string;
            }

            interface DominantColorsAnnotation {
                'colors': ColorInfo[];
            }

            interface Feature {
                'maxResults': number;
                'type': string;
            }

            interface BatchAnnotateImagesResponse {
                'responses': AnnotateImageResponse[];
            }

            interface ImageProperties {
                'dominantColors': DominantColorsAnnotation;
            }

            interface Position {
                'y': number;
                'z': number;
                'x': number;
            }

            interface LatLng {
                'longitude': number;
                'latitude': number;
            }

        }
    }
}