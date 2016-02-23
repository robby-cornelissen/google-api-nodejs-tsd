// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        coordinate(version: string): any;
        coordinate(version: 'v1'): coordinate.v1.Coordinate;
    }

    namespace coordinate {
        namespace v1 {
            export interface Coordinate {
                new(options: any): Coordinate;

                'customFieldDef': {
                    'list': (parameters: {'teamId': string}, callback: (error: any, body: CustomFieldDefListResponse, response: any) => void) => Request;
                };
                'jobs': {
                    'get': (parameters: {'jobId': string, 'teamId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'insert': (parameters: {'address': string, 'assignee'?: string, 'customField'?: string, 'customerName'?: string, 'customerPhoneNumber'?: string, 'lat': number, 'lng': number, 'note'?: string, 'teamId': string, 'title': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'minModifiedTimestampMs'?: string, 'omitJobChanges'?: boolean, 'pageToken'?: string, 'teamId': string}, callback: (error: any, body: JobListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'address'?: string, 'assignee'?: string, 'customField'?: string, 'customerName'?: string, 'customerPhoneNumber'?: string, 'jobId': string, 'lat'?: number, 'lng'?: number, 'note'?: string, 'progress'?: string, 'teamId': string, 'title'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    'update': (parameters: {'address'?: string, 'assignee'?: string, 'customField'?: string, 'customerName'?: string, 'customerPhoneNumber'?: string, 'jobId': string, 'lat'?: number, 'lng'?: number, 'note'?: string, 'progress'?: string, 'teamId': string, 'title'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                };
                'location': {
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'startTimestampMs': string, 'teamId': string, 'workerEmail': string}, callback: (error: any, body: LocationListResponse, response: any) => void) => Request;
                };
                'schedule': {
                    'get': (parameters: {'jobId': string, 'teamId': string}, callback: (error: any, body: Schedule, response: any) => void) => Request;
                    'patch': (parameters: {'allDay'?: boolean, 'duration'?: string, 'endTime'?: string, 'jobId': string, 'startTime'?: string, 'teamId': string}, callback: (error: any, body: Schedule, response: any) => void) => Request;
                    'update': (parameters: {'allDay'?: boolean, 'duration'?: string, 'endTime'?: string, 'jobId': string, 'startTime'?: string, 'teamId': string}, callback: (error: any, body: Schedule, response: any) => void) => Request;
                };
                'team': {
                    'list': (parameters: {'admin'?: boolean, 'dispatcher'?: boolean, 'worker'?: boolean}, callback: (error: any, body: TeamListResponse, response: any) => void) => Request;
                };
                'worker': {
                    'list': (parameters: {'teamId': string}, callback: (error: any, body: WorkerListResponse, response: any) => void) => Request;
                };

            }

            export interface CustomField {
                'customFieldId': string;
                'kind': string;
                'value': string;
            }

            export interface CustomFieldDef {
                'enabled': boolean;
                'enumitems': EnumItemDef[];
                'id': string;
                'kind': string;
                'name': string;
                'requiredForCheckout': boolean;
                'type': string;
            }

            export interface CustomFieldDefListResponse {
                'items': CustomFieldDef[];
                'kind': string;
            }

            export interface CustomFields {
                'customField': CustomField[];
                'kind': string;
            }

            export interface EnumItemDef {
                'active': boolean;
                'kind': string;
                'value': string;
            }

            export interface Job {
                'id': string;
                'jobChange': JobChange[];
                'kind': string;
                'state': JobState;
            }

            export interface JobChange {
                'kind': string;
                'state': JobState;
                'timestamp': string;
            }

            export interface JobListResponse {
                'items': Job[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface JobState {
                'assignee': string;
                'customFields': CustomFields;
                'customerName': string;
                'customerPhoneNumber': string;
                'kind': string;
                'location': Location;
                'note': string[];
                'progress': string;
                'title': string;
            }

            export interface Location {
                'addressLine': string[];
                'kind': string;
                'lat': number;
                'lng': number;
            }

            export interface LocationListResponse {
                'items': LocationRecord[];
                'kind': string;
                'nextPageToken': string;
                'tokenPagination': TokenPagination;
            }

            export interface LocationRecord {
                'collectionTime': string;
                'confidenceRadius': number;
                'kind': string;
                'latitude': number;
                'longitude': number;
            }

            export interface Schedule {
                'allDay': boolean;
                'duration': string;
                'endTime': string;
                'kind': string;
                'startTime': string;
            }

            export interface Team {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface TeamListResponse {
                'items': Team[];
                'kind': string;
            }

            export interface TokenPagination {
                'kind': string;
                'nextPageToken': string;
                'previousPageToken': string;
            }

            export interface Worker {
                'id': string;
                'kind': string;
            }

            export interface WorkerListResponse {
                'items': Worker[];
                'kind': string;
            }

        }
    }
}