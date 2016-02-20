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

            interface Label {
                'key': string;
                'value': string;
            }

            interface RegionViewsAddResourcesRequest {
                'resources': string[];
            }

            interface RegionViewsInsertResponse {
                'resource': ResourceView;
            }

            interface RegionViewsListResourcesResponse {
                'members': string[];
                'nextPageToken': string;
            }

            interface RegionViewsListResponse {
                'nextPageToken': string;
                'resourceViews': ResourceView[];
            }

            interface RegionViewsRemoveResourcesRequest {
                'resources': string[];
            }

            interface ResourceView {
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

            interface ZoneViewsAddResourcesRequest {
                'resources': string[];
            }

            interface ZoneViewsInsertResponse {
                'resource': ResourceView;
            }

            interface ZoneViewsListResourcesResponse {
                'members': string[];
                'nextPageToken': string;
            }

            interface ZoneViewsListResponse {
                'nextPageToken': string;
                'resourceViews': ResourceView[];
            }

            interface ZoneViewsRemoveResourcesRequest {
                'resources': string[];
            }

        }
    }
}