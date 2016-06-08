// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        monitoring(version: string): any;
        monitoring(version: 'v3'): monitoring.v3.Monitoring;
    }

    namespace monitoring {
        namespace v3 {
            export interface Monitoring {
                new(options: any): Monitoring;

                'projects': {
                    'collectdTimeSeries': {
                        'create': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'groups': {
                        'list': (parameters: {'name': string, 'childrenOfGroup'?: string, 'ancestorsOfGroup'?: string, 'descendantsOfGroup'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListGroupsResponse, response: any) => void) => Request;
                        'get': (parameters: {'name': string}, callback: (error: any, body: Group, response: any) => void) => Request;
                        'create': (parameters: {'name': string, 'validateOnly'?: boolean}, callback: (error: any, body: Group, response: any) => void) => Request;
                        'update': (parameters: {'name': string, 'validateOnly'?: boolean}, callback: (error: any, body: Group, response: any) => void) => Request;
                        'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    
                        'members': {
                            'list': (parameters: {'name': string, 'pageSize'?: number, 'pageToken'?: string, 'filter'?: string, 'interval.endTime'?: string, 'interval.startTime'?: string}, callback: (error: any, body: ListGroupMembersResponse, response: any) => void) => Request;
                        };
                    };
                    'monitoredResourceDescriptors': {
                        'list': (parameters: {'name': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListMonitoredResourceDescriptorsResponse, response: any) => void) => Request;
                        'get': (parameters: {'name': string}, callback: (error: any, body: MonitoredResourceDescriptor, response: any) => void) => Request;
                    };
                    'metricDescriptors': {
                        'list': (parameters: {'name': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListMetricDescriptorsResponse, response: any) => void) => Request;
                        'get': (parameters: {'name': string}, callback: (error: any, body: MetricDescriptor, response: any) => void) => Request;
                        'create': (parameters: {'name': string}, callback: (error: any, body: MetricDescriptor, response: any) => void) => Request;
                        'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'timeSeries': {
                        'list': (parameters: {'name': string, 'filter'?: string, 'interval.endTime'?: string, 'interval.startTime'?: string, 'aggregation.alignmentPeriod'?: string, 'aggregation.perSeriesAligner'?: string, 'aggregation.crossSeriesReducer'?: string, 'aggregation.groupByFields'?: string, 'orderBy'?: string, 'view'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListTimeSeriesResponse, response: any) => void) => Request;
                        'create': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };

            }

            export interface CreateCollectdTimeSeriesRequest {
                'resource': MonitoredResource;
                'collectdVersion': string;
                'collectdPayloads': CollectdPayload[];
            }

            export interface MonitoredResource {
                'type': string;
                'labels': {
                    [name: string]: string
                
                };
            }

            export interface CollectdPayload {
                'values': CollectdValue[];
                'startTime': string;
                'endTime': string;
                'plugin': string;
                'pluginInstance': string;
                'type': string;
                'typeInstance': string;
                'metadata': {
                    [name: string]: TypedValue
                
                };
            }

            export interface CollectdValue {
                'dataSourceName': string;
                'dataSourceType': string;
                'value': TypedValue;
            }

            export interface TypedValue {
                'boolValue': boolean;
                'int64Value': string;
                'doubleValue': number;
                'stringValue': string;
                'distributionValue': Distribution;
            }

            export interface Distribution {
                'count': string;
                'mean': number;
                'sumOfSquaredDeviation': number;
                'range': Range;
                'bucketOptions': BucketOptions;
                'bucketCounts': string[];
            }

            export interface Range {
                'min': number;
                'max': number;
            }

            export interface BucketOptions {
                'linearBuckets': Linear;
                'exponentialBuckets': Exponential;
                'explicitBuckets': Explicit;
            }

            export interface Linear {
                'numFiniteBuckets': number;
                'width': number;
                'offset': number;
            }

            export interface Exponential {
                'numFiniteBuckets': number;
                'growthFactor': number;
                'scale': number;
            }

            export interface Explicit {
                'bounds': number[];
            }

            export interface Empty {}

            export interface ListGroupsResponse {
                'group': Group[];
                'nextPageToken': string;
            }

            export interface Group {
                'name': string;
                'displayName': string;
                'parentName': string;
                'filter': string;
                'isCluster': boolean;
            }

            export interface ListGroupMembersResponse {
                'members': MonitoredResource[];
                'nextPageToken': string;
                'totalSize': number;
            }

            export interface ListMonitoredResourceDescriptorsResponse {
                'resourceDescriptors': MonitoredResourceDescriptor[];
                'nextPageToken': string;
            }

            export interface MonitoredResourceDescriptor {
                'name': string;
                'type': string;
                'displayName': string;
                'description': string;
                'labels': LabelDescriptor[];
            }

            export interface LabelDescriptor {
                'key': string;
                'valueType': string;
                'description': string;
            }

            export interface ListMetricDescriptorsResponse {
                'metricDescriptors': MetricDescriptor[];
                'nextPageToken': string;
            }

            export interface MetricDescriptor {
                'name': string;
                'type': string;
                'labels': LabelDescriptor[];
                'metricKind': string;
                'valueType': string;
                'unit': string;
                'description': string;
                'displayName': string;
            }

            export interface ListTimeSeriesResponse {
                'timeSeries': TimeSeries[];
                'nextPageToken': string;
            }

            export interface TimeSeries {
                'metric': Metric;
                'resource': MonitoredResource;
                'metricKind': string;
                'valueType': string;
                'points': Point[];
            }

            export interface Metric {
                'type': string;
                'labels': {
                    [name: string]: string
                
                };
            }

            export interface Point {
                'interval': TimeInterval;
                'value': TypedValue;
            }

            export interface TimeInterval {
                'endTime': string;
                'startTime': string;
            }

            export interface CreateTimeSeriesRequest {
                'timeSeries': TimeSeries[];
            }

            export interface Type {
                'name': string;
                'fields': Field[];
                'oneofs': string[];
                'options': Option[];
                'sourceContext': SourceContext;
                'syntax': string;
            }

            export interface Field {
                'kind': string;
                'cardinality': string;
                'number': number;
                'name': string;
                'typeUrl': string;
                'oneofIndex': number;
                'packed': boolean;
                'options': Option[];
                'jsonName': string;
                'defaultValue': string;
            }

            export interface Option {
                'name': string;
                'value': {
                    [name: string]: any
                
                };
            }

            export interface SourceContext {
                'fileName': string;
            }

        }
    }
}