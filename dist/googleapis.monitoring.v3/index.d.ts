// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        monitoring(version: string): any;
        monitoring(version: 'v3'): monitoring.v3.Monitoring;
    }

    namespace monitoring {
        namespace v3 {
            export interface Monitoring {
                new(options: any): Monitoring;

                'projects': {
                    'groups': {
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Group, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'ancestorsOfGroup'?: string, 'name': string, 'childrenOfGroup'?: string, 'descendantsOfGroup'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListGroupsResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'validateOnly'?: boolean, 'name': string}, callback: (error: any, body: Group, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'validateOnly'?: boolean, 'name': string}, callback: (error: any, body: Group, response: any) => void) => Request;

                        'members': {
                            'list': (parameters: { [key: string]: any; 'interval.endTime'?: string, 'filter'?: string, 'pageToken'?: string, 'pageSize'?: number, 'interval.startTime'?: string, 'name': string}, callback: (error: any, body: ListGroupMembersResponse, response: any) => void) => Request;
                        };
                    };
                    'collectdTimeSeries': {
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: CreateCollectdTimeSeriesResponse, response: any) => void) => Request;
                    };
                    'timeSeries': {
                        'list': (parameters: { [key: string]: any; 'aggregation.crossSeriesReducer'?: string, 'filter'?: string, 'aggregation.perSeriesAligner'?: string, 'pageToken'?: string, 'interval.startTime'?: string, 'view'?: string, 'aggregation.groupByFields'?: string, 'name': string, 'interval.endTime'?: string, 'aggregation.alignmentPeriod'?: string, 'pageSize'?: number, 'orderBy'?: string}, callback: (error: any, body: ListTimeSeriesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'metricDescriptors': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: MetricDescriptor, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListMetricDescriptorsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: MetricDescriptor, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'monitoredResourceDescriptors': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: MonitoredResourceDescriptor, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListMonitoredResourceDescriptorsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface Exponential {
                'growthFactor': number;
                'scale': number;
                'numFiniteBuckets': number;
            }

            export interface Point {
                'value': TypedValue;
                'interval': TimeInterval;
            }

            export interface Field {
                'options': Option[];
                'oneofIndex': number;
                'cardinality': string;
                'packed': boolean;
                'defaultValue': string;
                'name': string;
                'typeUrl': string;
                'number': number;
                'kind': string;
                'jsonName': string;
            }

            export interface Metric {
                'type': string;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface ListTimeSeriesResponse {
                'timeSeries': TimeSeries[];
                'nextPageToken': string;
            }

            export interface LabelDescriptor {
                'valueType': string;
                'key': string;
                'description': string;
            }

            export interface Group {
                'isCluster': boolean;
                'filter': string;
                'parentName': string;
                'name': string;
                'displayName': string;
            }

            export interface Type {
                'syntax': string;
                'sourceContext': SourceContext;
                'options': Option[];
                'fields': Field[];
                'name': string;
                'oneofs': string[];
            }

            export interface BucketOptions {
                'exponentialBuckets': Exponential;
                'explicitBuckets': Explicit;
                'linearBuckets': Linear;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface CollectdValue {
                'value': TypedValue;
                'dataSourceType': string;
                'dataSourceName': string;
            }

            export interface MetricDescriptor {
                'name': string;
                'type': string;
                'valueType': string;
                'metricKind': string;
                'description': string;
                'displayName': string;
                'unit': string;
                'labels': LabelDescriptor[];
            }

            export interface SourceContext {
                'fileName': string;
            }

            export interface Range {
                'min': number;
                'max': number;
            }

            export interface ListGroupsResponse {
                'nextPageToken': string;
                'group': Group[];
            }

            export interface ListGroupMembersResponse {
                'members': MonitoredResource[];
                'nextPageToken': string;
                'totalSize': number;
            }

            export interface CreateCollectdTimeSeriesRequest {
                'collectdPayloads': CollectdPayload[];
                'resource': MonitoredResource;
                'collectdVersion': string;
            }

            export interface ListMonitoredResourceDescriptorsResponse {
                'resourceDescriptors': MonitoredResourceDescriptor[];
                'nextPageToken': string;
            }

            export interface TimeSeries {
                'resource': MonitoredResource;
                'metricKind': string;
                'points': Point[];
                'metric': Metric;
                'valueType': string;
            }

            export interface CreateTimeSeriesRequest {
                'timeSeries': TimeSeries[];
            }

            export interface Distribution {
                'bucketCounts': string[];
                'bucketOptions': BucketOptions;
                'sumOfSquaredDeviation': number;
                'range': Range;
                'count': string;
                'mean': number;
            }

            export interface MonitoredResource {
                'type': string;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface ListMetricDescriptorsResponse {
                'nextPageToken': string;
                'metricDescriptors': MetricDescriptor[];
            }

            export interface CollectdPayloadError {
                'index': number;
                'valueErrors': CollectdValueError[];
                'error': Status;
            }

            export interface MonitoredResourceDescriptor {
                'name': string;
                'description': string;
                'displayName': string;
                'type': string;
                'labels': LabelDescriptor[];
            }

            export interface TypedValue {
                'doubleValue': number;
                'int64Value': string;
                'distributionValue': Distribution;
                'stringValue': string;
                'boolValue': boolean;
            }

            export interface CollectdValueError {
                'index': number;
                'error': Status;
            }

            export interface CollectdPayload {
                'endTime': string;
                'startTime': string;
                'values': CollectdValue[];
                'typeInstance': string;
                'metadata': {
                    [name: string]: TypedValue
                ;
                };
                'type': string;
                'plugin': string;
                'pluginInstance': string;
            }

            export interface CreateCollectdTimeSeriesResponse {
                'payloadErrors': CollectdPayloadError[];
            }

            export interface Linear {
                'width': number;
                'offset': number;
                'numFiniteBuckets': number;
            }

            export interface Option {
                'value': {
                    [name: string]: any
                ;
                };
                'name': string;
            }

            export interface Empty {}

            export interface Explicit {
                'bounds': number[];
            }

            export interface TimeInterval {
                'endTime': string;
                'startTime': string;
            }

        }
    }
}
