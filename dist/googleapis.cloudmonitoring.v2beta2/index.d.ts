// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudmonitoring(version: string): any;
        cloudmonitoring(version: 'v2beta2'): cloudmonitoring.v2beta2.Cloudmonitoring;
    }

    namespace cloudmonitoring {
        namespace v2beta2 {
            export interface Cloudmonitoring {
                new(options: any): Cloudmonitoring;

                'metricDescriptors': {
                    'create': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: MetricDescriptor, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'metric': string, 'project': string}, callback: (error: any, body: DeleteMetricDescriptorResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'count'?: number, 'pageToken'?: string, 'project': string, 'query'?: string}, callback: (error: any, body: ListMetricDescriptorsResponse, response: any) => void) => Request;
                };
                'timeseries': {
                    'list': (parameters: { [key: string]: any; 'aggregator'?: string, 'count'?: number, 'labels'?: string, 'metric': string, 'oldest'?: string, 'pageToken'?: string, 'project': string, 'timespan'?: string, 'window'?: string, 'youngest': string}, callback: (error: any, body: ListTimeseriesResponse, response: any) => void) => Request;
                    'write': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: WriteTimeseriesResponse, response: any) => void) => Request;
                };
                'timeseriesDescriptors': {
                    'list': (parameters: { [key: string]: any; 'aggregator'?: string, 'count'?: number, 'labels'?: string, 'metric': string, 'oldest'?: string, 'pageToken'?: string, 'project': string, 'timespan'?: string, 'window'?: string, 'youngest': string}, callback: (error: any, body: ListTimeseriesDescriptorsResponse, response: any) => void) => Request;
                };

            }

            export interface DeleteMetricDescriptorResponse {
                'kind': string;
            }

            export interface ListMetricDescriptorsRequest {
                'kind': string;
            }

            export interface ListMetricDescriptorsResponse {
                'kind': string;
                'metrics': MetricDescriptor[];
                'nextPageToken': string;
            }

            export interface ListTimeseriesDescriptorsRequest {
                'kind': string;
            }

            export interface ListTimeseriesDescriptorsResponse {
                'kind': string;
                'nextPageToken': string;
                'oldest': string;
                'timeseries': TimeseriesDescriptor[];
                'youngest': string;
            }

            export interface ListTimeseriesRequest {
                'kind': string;
            }

            export interface ListTimeseriesResponse {
                'kind': string;
                'nextPageToken': string;
                'oldest': string;
                'timeseries': Timeseries[];
                'youngest': string;
            }

            export interface MetricDescriptor {
                'description': string;
                'labels': MetricDescriptorLabelDescriptor[];
                'name': string;
                'project': string;
                'typeDescriptor': MetricDescriptorTypeDescriptor;
            }

            export interface MetricDescriptorLabelDescriptor {
                'description': string;
                'key': string;
            }

            export interface MetricDescriptorTypeDescriptor {
                'metricType': string;
                'valueType': string;
            }

            export interface Point {
                'boolValue': boolean;
                'distributionValue': PointDistribution;
                'doubleValue': number;
                'end': string;
                'int64Value': string;
                'start': string;
                'stringValue': string;
            }

            export interface PointDistribution {
                'buckets': PointDistributionBucket[];
                'overflowBucket': PointDistributionOverflowBucket;
                'underflowBucket': PointDistributionUnderflowBucket;
            }

            export interface PointDistributionBucket {
                'count': string;
                'lowerBound': number;
                'upperBound': number;
            }

            export interface PointDistributionOverflowBucket {
                'count': string;
                'lowerBound': number;
            }

            export interface PointDistributionUnderflowBucket {
                'count': string;
                'upperBound': number;
            }

            export interface Timeseries {
                'points': Point[];
                'timeseriesDesc': TimeseriesDescriptor;
            }

            export interface TimeseriesDescriptor {
                'labels': {
                    [name: string]: string
                ;
                };
                'metric': string;
                'project': string;
            }

            export interface TimeseriesDescriptorLabel {
                'key': string;
                'value': string;
            }

            export interface TimeseriesPoint {
                'point': Point;
                'timeseriesDesc': TimeseriesDescriptor;
            }

            export interface WriteTimeseriesRequest {
                'commonLabels': {
                    [name: string]: string
                ;
                };
                'timeseries': TimeseriesPoint[];
            }

            export interface WriteTimeseriesResponse {
                'kind': string;
            }

        }
    }
}
