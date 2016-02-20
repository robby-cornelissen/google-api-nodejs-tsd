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

            interface CustomField {
                'customFieldId': string;
                'kind': string;
                'value': string;
            }

            interface CustomFieldDef {
                'enabled': boolean;
                'enumitems': EnumItemDef[];
                'id': string;
                'kind': string;
                'name': string;
                'requiredForCheckout': boolean;
                'type': string;
            }

            interface CustomFieldDefListResponse {
                'items': CustomFieldDef[];
                'kind': string;
            }

            interface CustomFields {
                'customField': CustomField[];
                'kind': string;
            }

            interface EnumItemDef {
                'active': boolean;
                'kind': string;
                'value': string;
            }

            interface Job {
                'id': string;
                'jobChange': JobChange[];
                'kind': string;
                'state': JobState;
            }

            interface JobChange {
                'kind': string;
                'state': JobState;
                'timestamp': string;
            }

            interface JobListResponse {
                'items': Job[];
                'kind': string;
                'nextPageToken': string;
            }

            interface JobState {
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

            interface Location {
                'addressLine': string[];
                'kind': string;
                'lat': number;
                'lng': number;
            }

            interface LocationListResponse {
                'items': LocationRecord[];
                'kind': string;
                'nextPageToken': string;
                'tokenPagination': TokenPagination;
            }

            interface LocationRecord {
                'collectionTime': string;
                'confidenceRadius': number;
                'kind': string;
                'latitude': number;
                'longitude': number;
            }

            interface Schedule {
                'allDay': boolean;
                'duration': string;
                'endTime': string;
                'kind': string;
                'startTime': string;
            }

            interface Team {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface TeamListResponse {
                'items': Team[];
                'kind': string;
            }

            interface TokenPagination {
                'kind': string;
                'nextPageToken': string;
                'previousPageToken': string;
            }

            interface Worker {
                'id': string;
                'kind': string;
            }

            interface WorkerListResponse {
                'items': Worker[];
                'kind': string;
            }

        }
    }
}