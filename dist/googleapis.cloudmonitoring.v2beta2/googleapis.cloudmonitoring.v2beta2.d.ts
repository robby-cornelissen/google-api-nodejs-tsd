/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        cloudmonitoring(version: string): any;
        cloudmonitoring(version: 'v2beta2'): cloudmonitoring.v2beta2.Cloudmonitoring;
    }

    namespace cloudmonitoring {
        namespace v2beta2 {
            export interface Cloudmonitoring {
                new(options: any): Cloudmonitoring;

                'metricDescriptors': {
                    'create': (parameters: {'project': string}, callback: (error: any, body: MetricDescriptor, response: any) => void) => Request;
                    'delete': (parameters: {'metric': string, 'project': string}, callback: (error: any, body: DeleteMetricDescriptorResponse, response: any) => void) => Request;
                    'list': (parameters: {'count'?: number, 'pageToken'?: string, 'project': string, 'query'?: string}, callback: (error: any, body: ListMetricDescriptorsResponse, response: any) => void) => Request;
                };
                'timeseries': {
                    'list': (parameters: {'aggregator'?: string, 'count'?: number, 'labels'?: string, 'metric': string, 'oldest'?: string, 'pageToken'?: string, 'project': string, 'timespan'?: string, 'window'?: string, 'youngest': string}, callback: (error: any, body: ListTimeseriesResponse, response: any) => void) => Request;
                    'write': (parameters: {'project': string}, callback: (error: any, body: WriteTimeseriesResponse, response: any) => void) => Request;
                };
                'timeseriesDescriptors': {
                    'list': (parameters: {'aggregator'?: string, 'count'?: number, 'labels'?: string, 'metric': string, 'oldest'?: string, 'pageToken'?: string, 'project': string, 'timespan'?: string, 'window'?: string, 'youngest': string}, callback: (error: any, body: ListTimeseriesDescriptorsResponse, response: any) => void) => Request;
                };

            }

            interface DeleteMetricDescriptorResponse {
                'kind': string;
            }

            interface ListMetricDescriptorsRequest {
                'kind': string;
            }

            interface ListMetricDescriptorsResponse {
                'kind': string;
                'metrics': MetricDescriptor[];
                'nextPageToken': string;
            }

            interface ListTimeseriesDescriptorsRequest {
                'kind': string;
            }

            interface ListTimeseriesDescriptorsResponse {
                'kind': string;
                'nextPageToken': string;
                'oldest': string;
                'timeseries': TimeseriesDescriptor[];
                'youngest': string;
            }

            interface ListTimeseriesRequest {
                'kind': string;
            }

            interface ListTimeseriesResponse {
                'kind': string;
                'nextPageToken': string;
                'oldest': string;
                'timeseries': Timeseries[];
                'youngest': string;
            }

            interface MetricDescriptor {
                'description': string;
                'labels': MetricDescriptorLabelDescriptor[];
                'name': string;
                'project': string;
                'typeDescriptor': MetricDescriptorTypeDescriptor;
            }

            interface MetricDescriptorLabelDescriptor {
                'description': string;
                'key': string;
            }

            interface MetricDescriptorTypeDescriptor {
                'metricType': string;
                'valueType': string;
            }

            interface Point {
                'boolValue': boolean;
                'distributionValue': PointDistribution;
                'doubleValue': number;
                'end': string;
                'int64Value': string;
                'start': string;
                'stringValue': string;
            }

            interface PointDistribution {
                'buckets': PointDistributionBucket[];
                'overflowBucket': PointDistributionOverflowBucket;
                'underflowBucket': PointDistributionUnderflowBucket;
            }

            interface PointDistributionBucket {
                'count': string;
                'lowerBound': number;
                'upperBound': number;
            }

            interface PointDistributionOverflowBucket {
                'count': string;
                'lowerBound': number;
            }

            interface PointDistributionUnderflowBucket {
                'count': string;
                'upperBound': number;
            }

            interface Timeseries {
                'points': Point[];
                'timeseriesDesc': TimeseriesDescriptor;
            }

            interface TimeseriesDescriptor {
                'labels': {
                    [name: string]: string
                };
                'metric': string;
                'project': string;
            }

            interface TimeseriesDescriptorLabel {
                'key': string;
                'value': string;
            }

            interface TimeseriesPoint {
                'point': Point;
                'timeseriesDesc': TimeseriesDescriptor;
            }

            interface WriteTimeseriesRequest {
                'commonLabels': {
                    [name: string]: string
                };
                'timeseries': TimeseriesPoint[];
            }

            interface WriteTimeseriesResponse {
                'kind': string;
            }

        }
    }
}