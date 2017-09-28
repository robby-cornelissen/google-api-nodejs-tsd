// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        bigquerydatatransfer(version: string): any;
        bigquerydatatransfer(version: 'v1'): bigquerydatatransfer.v1.Bigquerydatatransfer;
    }

    namespace bigquerydatatransfer {
        namespace v1 {
            export interface Bigquerydatatransfer {
                new(options: any): Bigquerydatatransfer;

                'projects': {
                    'locations': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;

                        'transferConfigs': {
                            'create': (parameters: { [key: string]: any; 'parent': string, 'authorizationCode'?: string}, callback: (error: any, body: TransferConfig, response: any) => void) => Request;
                            'scheduleRuns': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: ScheduleTransferRunsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: TransferConfig, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'name': string, 'authorizationCode'?: string, 'updateMask'?: string}, callback: (error: any, body: TransferConfig, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'dataSourceIds'?: string, 'parent': string}, callback: (error: any, body: ListTransferConfigsResponse, response: any) => void) => Request;

                            'runs': {
                                'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'runAttempt'?: string, 'parent': string, 'pageToken'?: string, 'pageSize'?: number, 'states'?: string}, callback: (error: any, body: ListTransferRunsResponse, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: TransferRun, response: any) => void) => Request;

                                'transferLogs': {
                                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'messageTypes'?: string, 'parent': string}, callback: (error: any, body: ListTransferLogsResponse, response: any) => void) => Request;
                                };
                            };
                        };
                        'dataSources': {
                            'checkValidCreds': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CheckValidCredsResponse, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'parent': string}, callback: (error: any, body: ListDataSourcesResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        };
                    };
                    'transferConfigs': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: TransferConfig, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string, 'authorizationCode'?: string}, callback: (error: any, body: TransferConfig, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'dataSourceIds'?: string, 'parent': string}, callback: (error: any, body: ListTransferConfigsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'parent': string, 'authorizationCode'?: string}, callback: (error: any, body: TransferConfig, response: any) => void) => Request;
                        'scheduleRuns': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: ScheduleTransferRunsResponse, response: any) => void) => Request;

                        'runs': {
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'states'?: string, 'runAttempt'?: string, 'parent': string}, callback: (error: any, body: ListTransferRunsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: TransferRun, response: any) => void) => Request;

                            'transferLogs': {
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'messageTypes'?: string, 'parent': string}, callback: (error: any, body: ListTransferLogsResponse, response: any) => void) => Request;
                            };
                        };
                    };
                    'dataSources': {
                        'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListDataSourcesResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'checkValidCreds': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CheckValidCredsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface ListTransferConfigsResponse {
                'transferConfigs': TransferConfig[];
                'nextPageToken': string;
            }

            export interface DataSource {
                'parameters': DataSourceParameter[];
                'helpUrl': string;
                'defaultSchedule': string;
                'supportsMultipleTransfers': boolean;
                'manualRunsDisabled': boolean;
                'defaultDataRefreshWindowDays': number;
                'transferType': string;
                'description': string;
                'dataSourceId': string;
                'name': string;
                'scopes': string[];
                'minimumScheduleInterval': string;
                'clientId': string;
                'authorizationType': string;
                'supportsCustomSchedule': boolean;
                'displayName': string;
                'updateDeadlineSeconds': number;
                'dataRefreshType': string;
            }

            export interface ScheduleTransferRunsRequest {
                'endTime': string;
                'startTime': string;
            }

            export interface Empty {}

            export interface Location {
                'labels': {
                    [name: string]: string
                ;
                };
                'name': string;
                'locationId': string;
                'metadata': {
                    [name: string]: any
                ;
                };
            }

            export interface TransferConfig {
                'dataRefreshWindowDays': number;
                'dataSourceId': string;
                'state': string;
                'userId': string;
                'destinationDatasetId': string;
                'name': string;
                'params': {
                    [name: string]: any
                ;
                };
                'datasetRegion': string;
                'displayName': string;
                'nextRunTime': string;
                'disabled': boolean;
                'schedule': string;
                'updateTime': string;
            }

            export interface TransferRun {
                'state': string;
                'destinationDatasetId': string;
                'name': string;
                'userId': string;
                'params': {
                    [name: string]: any
                ;
                };
                'endTime': string;
                'datasetRegion': string;
                'startTime': string;
                'scheduleTime': string;
                'schedule': string;
                'updateTime': string;
                'runTime': string;
                'dataSourceId': string;
            }

            export interface CheckValidCredsRequest {}

            export interface CheckValidCredsResponse {
                'hasValidCreds': boolean;
            }

            export interface ScheduleTransferRunsResponse {
                'runs': TransferRun[];
            }

            export interface TransferMessage {
                'messageText': string;
                'severity': string;
                'messageTime': string;
            }

            export interface ListTransferLogsResponse {
                'nextPageToken': string;
                'transferMessages': TransferMessage[];
            }

            export interface ListDataSourcesResponse {
                'nextPageToken': string;
                'dataSources': DataSource[];
            }

            export interface DataSourceParameter {
                'validationRegex': string;
                'paramId': string;
                'required': boolean;
                'repeated': boolean;
                'displayName': string;
                'immutable': boolean;
                'validationDescription': string;
                'fields': DataSourceParameter[];
                'maxValue': number;
                'type': string;
                'recurse': boolean;
                'description': string;
                'allowedValues': string[];
                'minValue': number;
                'validationHelpUrl': string;
            }

            export interface ListLocationsResponse {
                'nextPageToken': string;
                'locations': Location[];
            }

            export interface ListTransferRunsResponse {
                'transferRuns': TransferRun[];
                'nextPageToken': string;
            }

        }
    }
}
