// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        streetviewpublish(version: string): any;
        streetviewpublish(version: 'v1'): streetviewpublish.v1.Streetviewpublish;
    }

    namespace streetviewpublish {
        namespace v1 {
            export interface Streetviewpublish {
                new(options: any): Streetviewpublish;

                'photos': {
                    'batchGet': (parameters: { [key: string]: any; 'photoIds'?: string, 'view'?: string}, callback: (error: any, body: BatchGetPhotosResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'view'?: string, 'filter'?: string, 'pageToken'?: string}, callback: (error: any, body: ListPhotosResponse, response: any) => void) => Request;
                    'batchUpdate': (parameters: { [key: string]: any; }, callback: (error: any, body: BatchUpdatePhotosResponse, response: any) => void) => Request;
                    'batchDelete': (parameters: { [key: string]: any; }, callback: (error: any, body: BatchDeletePhotosResponse, response: any) => void) => Request;
                };
                'photo': {
                    'startUpload': (parameters: { [key: string]: any; }, callback: (error: any, body: UploadRef, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'photoId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'photoId': string, 'view'?: string}, callback: (error: any, body: Photo, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'updateMask'?: string, 'id': string}, callback: (error: any, body: Photo, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Photo, response: any) => void) => Request;
                };

            }

            export interface Empty {}

            export interface Level {
                'name': string;
                'number': number;
            }

            export interface UploadRef {
                'uploadUrl': string;
            }

            export interface Place {
                'placeId': string;
            }

            export interface BatchGetPhotosResponse {
                'results': PhotoResponse[];
            }

            export interface LatLng {
                'latitude': number;
                'longitude': number;
            }

            export interface BatchDeletePhotosRequest {
                'photoIds': string[];
            }

            export interface UpdatePhotoRequest {
                'updateMask': string;
                'photo': Photo;
            }

            export interface PhotoId {
                'id': string;
            }

            export interface Pose {
                'pitch': number;
                'latLngPair': LatLng;
                'roll': number;
                'level': Level;
                'heading': number;
                'altitude': number;
            }

            export interface BatchUpdatePhotosRequest {
                'updatePhotoRequests': UpdatePhotoRequest[];
            }

            export interface ListPhotosResponse {
                'nextPageToken': string;
                'photos': Photo[];
            }

            export interface Photo {
                'downloadUrl': string;
                'connections': Connection[];
                'places': Place[];
                'uploadReference': UploadRef;
                'photoId': PhotoId;
                'pose': Pose;
                'shareLink': string;
                'captureTime': string;
                'thumbnailUrl': string;
                'viewCount': string;
            }

            export interface PhotoResponse {
                'status': Status;
                'photo': Photo;
            }

            export interface Connection {
                'target': PhotoId;
            }

            export interface BatchUpdatePhotosResponse {
                'results': PhotoResponse[];
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface BatchDeletePhotosResponse {
                'status': Status[];
            }

        }
    }
}
