// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        fitness(version: string): any;
        fitness(version: 'v1'): fitness.v1.Fitness;
    }

    namespace fitness {
        namespace v1 {
            export interface Fitness {
                new(options: any): Fitness;

                'users': {
                    'dataSources': {
                        'create': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'dataTypeName'?: string, 'userId': string}, callback: (error: any, body: ListDataSourcesResponse, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;

                        'dataPointChanges': {
                            'list': (parameters: { [key: string]: any; 'dataSourceId': string, 'limit'?: number, 'pageToken'?: string, 'userId': string}, callback: (error: any, body: ListDataPointChangesResponse, response: any) => void) => Request;
                        };
                        'datasets': {
                            'delete': (parameters: { [key: string]: any; 'currentTimeMillis'?: string, 'dataSourceId': string, 'datasetId': string, 'modifiedTimeMillis'?: string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'dataSourceId': string, 'datasetId': string, 'limit'?: number, 'pageToken'?: string, 'userId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'currentTimeMillis'?: string, 'dataSourceId': string, 'datasetId': string, 'userId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                        };
                    };
                    'dataset': {
                        'aggregate': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: AggregateResponse, response: any) => void) => Request;
                    };
                    'sessions': {
                        'delete': (parameters: { [key: string]: any; 'currentTimeMillis'?: string, 'sessionId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'endTime'?: string, 'includeDeleted'?: boolean, 'pageToken'?: string, 'startTime'?: string, 'userId': string}, callback: (error: any, body: ListSessionsResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'currentTimeMillis'?: string, 'sessionId': string, 'userId': string}, callback: (error: any, body: Session, response: any) => void) => Request;
                    };
                };

            }

            export interface AggregateBucket {
                'activity': number;
                'dataset': Dataset[];
                'endTimeMillis': string;
                'session': Session;
                'startTimeMillis': string;
                'type': string;
            }

            export interface AggregateBy {
                'dataSourceId': string;
                'dataTypeName': string;
            }

            export interface AggregateRequest {
                'aggregateBy': AggregateBy[];
                'bucketByActivitySegment': BucketByActivity;
                'bucketByActivityType': BucketByActivity;
                'bucketBySession': BucketBySession;
                'bucketByTime': BucketByTime;
                'endTimeMillis': string;
                'filteredDataQualityStandard': string[];
                'startTimeMillis': string;
            }

            export interface AggregateResponse {
                'bucket': AggregateBucket[];
            }

            export interface Application {
                'detailsUrl': string;
                'name': string;
                'packageName': string;
                'version': string;
            }

            export interface BucketByActivity {
                'activityDataSourceId': string;
                'minDurationMillis': string;
            }

            export interface BucketBySession {
                'minDurationMillis': string;
            }

            export interface BucketByTime {
                'durationMillis': string;
                'period': BucketByTimePeriod;
            }

            export interface BucketByTimePeriod {
                'timeZoneId': string;
                'type': string;
                'value': number;
            }

            export interface DataPoint {
                'computationTimeMillis': string;
                'dataTypeName': string;
                'endTimeNanos': string;
                'modifiedTimeMillis': string;
                'originDataSourceId': string;
                'rawTimestampNanos': string;
                'startTimeNanos': string;
                'value': Value[];
            }

            export interface DataSource {
                'application': Application;
                'dataQualityStandard': string[];
                'dataStreamId': string;
                'dataStreamName': string;
                'dataType': DataType;
                'device': Device;
                'name': string;
                'type': string;
            }

            export interface DataType {
                'field': DataTypeField[];
                'name': string;
            }

            export interface DataTypeField {
                'format': string;
                'name': string;
                'optional': boolean;
            }

            export interface Dataset {
                'dataSourceId': string;
                'maxEndTimeNs': string;
                'minStartTimeNs': string;
                'nextPageToken': string;
                'point': DataPoint[];
            }

            export interface Device {
                'manufacturer': string;
                'model': string;
                'type': string;
                'uid': string;
                'version': string;
            }

            export interface ListDataPointChangesResponse {
                'dataSourceId': string;
                'deletedDataPoint': DataPoint[];
                'insertedDataPoint': DataPoint[];
                'nextPageToken': string;
            }

            export interface ListDataSourcesResponse {
                'dataSource': DataSource[];
            }

            export interface ListSessionsResponse {
                'deletedSession': Session[];
                'hasMoreData': boolean;
                'nextPageToken': string;
                'session': Session[];
            }

            export interface MapValue {
                'fpVal': number;
            }

            export interface Session {
                'activeTimeMillis': string;
                'activityType': number;
                'application': Application;
                'description': string;
                'endTimeMillis': string;
                'id': string;
                'modifiedTimeMillis': string;
                'name': string;
                'startTimeMillis': string;
            }

            export interface Value {
                'fpVal': number;
                'intVal': number;
                'mapVal': ValueMapValEntry[];
                'stringVal': string;
            }

            export interface ValueMapValEntry {
                'key': string;
                'value': MapValue;
            }

        }
    }
}
