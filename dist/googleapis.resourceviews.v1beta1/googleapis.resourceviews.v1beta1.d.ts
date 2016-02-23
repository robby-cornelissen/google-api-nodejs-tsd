// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        resourceviews(version: string): any;
        resourceviews(version: 'v1beta1'): resourceviews.v1beta1.Resourceviews;
    }

    namespace resourceviews {
        namespace v1beta1 {
            export interface Resourceviews {
                new(options: any): Resourceviews;

                'regionViews': {
                    'addresources': (parameters: {'projectName': string, 'region': string, 'resourceViewName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: {'projectName': string, 'region': string, 'resourceViewName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'projectName': string, 'region': string, 'resourceViewName': string}, callback: (error: any, body: ResourceView, response: any) => void) => Request;
                    'insert': (parameters: {'projectName': string, 'region': string}, callback: (error: any, body: RegionViewsInsertResponse, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'projectName': string, 'region': string}, callback: (error: any, body: RegionViewsListResponse, response: any) => void) => Request;
                    'listresources': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'projectName': string, 'region': string, 'resourceViewName': string}, callback: (error: any, body: RegionViewsListResourcesResponse, response: any) => void) => Request;
                    'removeresources': (parameters: {'projectName': string, 'region': string, 'resourceViewName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'zoneViews': {
                    'addresources': (parameters: {'projectName': string, 'resourceViewName': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: {'projectName': string, 'resourceViewName': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'projectName': string, 'resourceViewName': string, 'zone': string}, callback: (error: any, body: ResourceView, response: any) => void) => Request;
                    'insert': (parameters: {'projectName': string, 'zone': string}, callback: (error: any, body: ZoneViewsInsertResponse, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'projectName': string, 'zone': string}, callback: (error: any, body: ZoneViewsListResponse, response: any) => void) => Request;
                    'listresources': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'projectName': string, 'resourceViewName': string, 'zone': string}, callback: (error: any, body: ZoneViewsListResourcesResponse, response: any) => void) => Request;
                    'removeresources': (parameters: {'projectName': string, 'resourceViewName': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };

            }

            export interface Label {
                'key': string;
                'value': string;
            }

            export interface RegionViewsAddResourcesRequest {
                'resources': string[];
            }

            export interface RegionViewsInsertResponse {
                'resource': ResourceView;
            }

            export interface RegionViewsListResourcesResponse {
                'members': string[];
                'nextPageToken': string;
            }

            export interface RegionViewsListResponse {
                'nextPageToken': string;
                'resourceViews': ResourceView[];
            }

            export interface RegionViewsRemoveResourcesRequest {
                'resources': string[];
            }

            export interface ResourceView {
                'creationTime': string;
                'description': string;
                'id': string;
                'kind': string;
                'labels': Label[];
                'lastModified': string;
                'members': string[];
                'name': string;
                'numMembers': number;
                'selfLink': string;
            }

            export interface ZoneViewsAddResourcesRequest {
                'resources': string[];
            }

            export interface ZoneViewsInsertResponse {
                'resource': ResourceView;
            }

            export interface ZoneViewsListResourcesResponse {
                'members': string[];
                'nextPageToken': string;
            }

            export interface ZoneViewsListResponse {
                'nextPageToken': string;
                'resourceViews': ResourceView[];
            }

            export interface ZoneViewsRemoveResourcesRequest {
                'resources': string[];
            }

        }
    }
}