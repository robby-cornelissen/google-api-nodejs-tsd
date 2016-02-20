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

            interface AggregateBucket {
                'activity': number;
                'dataset': Dataset[];
                'endTimeMillis': string;
                'session': Session;
                'startTimeMillis': string;
                'type': string;
            }

            interface AggregateBy {
                'dataSourceId': string;
                'dataTypeName': string;
            }

            interface AggregateRequest {
                'aggregateBy': AggregateBy[];
                'bucketByActivitySegment': BucketByActivity;
                'bucketByActivityType': BucketByActivity;
                'bucketBySession': BucketBySession;
                'bucketByTime': BucketByTime;
                'endTimeMillis': string;
                'startTimeMillis': string;
            }

            interface AggregateResponse {
                'bucket': AggregateBucket[];
            }

            interface Application {
                'detailsUrl': string;
                'name': string;
                'packageName': string;
                'version': string;
            }

            interface BucketByActivity {
                'activityDataSourceId': string;
                'minDurationMillis': string;
            }

            interface BucketBySession {
                'minDurationMillis': string;
            }

            interface BucketByTime {
                'durationMillis': string;
            }

            interface DataPoint {
                'computationTimeMillis': string;
                'dataTypeName': string;
                'endTimeNanos': string;
                'modifiedTimeMillis': string;
                'originDataSourceId': string;
                'rawTimestampNanos': string;
                'startTimeNanos': string;
                'value': Value[];
            }

            interface DataSource {
                'application': Application;
                'dataStreamId': string;
                'dataStreamName': string;
                'dataType': DataType;
                'device': Device;
                'name': string;
                'type': string;
            }

            interface DataType {
                'field': DataTypeField[];
                'name': string;
            }

            interface DataTypeField {
                'format': string;
                'name': string;
                'optional': boolean;
            }

            interface Dataset {
                'dataSourceId': string;
                'maxEndTimeNs': string;
                'minStartTimeNs': string;
                'nextPageToken': string;
                'point': DataPoint[];
            }

            interface Device {
                'manufacturer': string;
                'model': string;
                'type': string;
                'uid': string;
                'version': string;
            }

            interface ListDataSourcesResponse {
                'dataSource': DataSource[];
            }

            interface ListSessionsResponse {
                'deletedSession': Session[];
                'nextPageToken': string;
                'session': Session[];
            }

            interface MapValue {
                'fpVal': number;
            }

            interface Session {
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

            interface Value {
                'fpVal': number;
                'intVal': number;
                'mapVal': ValueMapValEntry[];
                'stringVal': string;
            }

            interface ValueMapValEntry {
                'key': string;
                'value': MapValue;
            }

        }
    }
}