// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
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
                        'create': (parameters: {'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'delete': (parameters: {'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'get': (parameters: {'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'list': (parameters: {'dataTypeName'?: string, 'userId': string}, callback: (error: any, body: ListDataSourcesResponse, response: any) => void) => Request;
                        'patch': (parameters: {'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                        'update': (parameters: {'dataSourceId': string, 'userId': string}, callback: (error: any, body: DataSource, response: any) => void) => Request;
                    
                        'datasets': {
                            'delete': (parameters: {'currentTimeMillis'?: string, 'dataSourceId': string, 'datasetId': string, 'modifiedTimeMillis'?: string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: {'dataSourceId': string, 'datasetId': string, 'limit'?: number, 'pageToken'?: string, 'userId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                            'patch': (parameters: {'currentTimeMillis'?: string, 'dataSourceId': string, 'datasetId': string, 'userId': string}, callback: (error: any, body: Dataset, response: any) => void) => Request;
                        };
                    };
                    'dataset': {
                        'aggregate': (parameters: {'userId': string}, callback: (error: any, body: AggregateResponse, response: any) => void) => Request;
                    };
                    'sessions': {
                        'delete': (parameters: {'currentTimeMillis'?: string, 'sessionId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'list': (parameters: {'endTime'?: string, 'includeDeleted'?: boolean, 'pageToken'?: string, 'startTime'?: string, 'userId': string}, callback: (error: any, body: ListSessionsResponse, response: any) => void) => Request;
                        'update': (parameters: {'currentTimeMillis'?: string, 'sessionId': string, 'userId': string}, callback: (error: any, body: Session, response: any) => void) => Request;
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

            export interface ListDataSourcesResponse {
                'dataSource': DataSource[];
            }

            export interface ListSessionsResponse {
                'deletedSession': Session[];
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