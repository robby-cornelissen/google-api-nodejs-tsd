// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        analyticsreporting(version: string): any;
        analyticsreporting(version: 'v4'): analyticsreporting.v4.Analyticsreporting;
    }

    namespace analyticsreporting {
        namespace v4 {
            export interface Analyticsreporting {
                new(options: any): Analyticsreporting;

                'reports': {
                    'batchGet': (parameters: {}, callback: (error: any, body: GetReportsResponse, response: any) => void) => Request;
                };

            }

            export interface PivotHeader {
                'totalPivotGroupsCount': number;
                'pivotHeaderEntries': PivotHeaderEntry[];
            }

            export interface Metric {
                'alias': string;
                'formattingType': string;
                'expression': string;
            }

            export interface ColumnHeader {
                'dimensions': string[];
                'metricHeader': MetricHeader;
            }

            export interface DynamicSegment {
                'sessionSegment': SegmentDefinition;
                'name': string;
                'userSegment': SegmentDefinition;
            }

            export interface MetricHeader {
                'metricHeaderEntries': MetricHeaderEntry[];
                'pivotHeaders': PivotHeader[];
            }

            export interface Report {
                'columnHeader': ColumnHeader;
                'data': ReportData;
                'nextPageToken': string;
            }

            export interface SegmentFilterClause {
                'dimensionFilter': SegmentDimensionFilter;
                'metricFilter': SegmentMetricFilter;
                'not': boolean;
            }

            export interface DimensionFilter {
                'dimensionName': string;
                'operator': string;
                'caseSensitive': boolean;
                'expressions': string[];
                'not': boolean;
            }

            export interface SegmentDimensionFilter {
                'maxComparisonValue': string;
                'dimensionName': string;
                'caseSensitive': boolean;
                'operator': string;
                'expressions': string[];
                'minComparisonValue': string;
            }

            export interface ReportRequest {
                'cohortGroup': CohortGroup;
                'dimensions': Dimension[];
                'metricFilterClauses': MetricFilterClause[];
                'hideTotals': boolean;
                'includeEmptyRows': boolean;
                'dimensionFilterClauses': DimensionFilterClause[];
                'pivots': Pivot[];
                'dateRanges': DateRange[];
                'segments': Segment[];
                'samplingLevel': string;
                'metrics': Metric[];
                'pageSize': number;
                'orderBys': OrderBy[];
                'filtersExpression': string;
                'hideValueRanges': boolean;
                'viewId': string;
                'pageToken': string;
            }

            export interface SimpleSegment {
                'orFiltersForSegment': OrFiltersForSegment[];
            }

            export interface SegmentDefinition {
                'segmentFilters': SegmentFilter[];
            }

            export interface SegmentMetricFilter {
                'metricName': string;
                'operator': string;
                'comparisonValue': string;
                'scope': string;
                'maxComparisonValue': string;
            }

            export interface ReportData {
                'rowCount': number;
                'samplingSpaceSizes': string[];
                'maximums': DateRangeValues[];
                'samplesReadCounts': string[];
                'minimums': DateRangeValues[];
                'rows': ReportRow[];
                'totals': DateRangeValues[];
                'isDataGolden': boolean;
            }

            export interface GetReportsRequest {
                'reportRequests': ReportRequest[];
            }

            export interface OrderBy {
                'sortOrder': string;
                'orderType': string;
                'fieldName': string;
            }

            export interface Cohort {
                'type': string;
                'dateRange': DateRange;
                'name': string;
            }

            export interface OrFiltersForSegment {
                'segmentFilterClauses': SegmentFilterClause[];
            }

            export interface SequenceSegment {
                'firstStepShouldMatchFirstHit': boolean;
                'segmentSequenceSteps': SegmentSequenceStep[];
            }

            export interface SegmentFilter {
                'sequenceSegment': SequenceSegment;
                'not': boolean;
                'simpleSegment': SimpleSegment;
            }

            export interface PivotHeaderEntry {
                'dimensionNames': string[];
                'dimensionValues': string[];
                'metric': MetricHeaderEntry;
            }

            export interface DimensionFilterClause {
                'operator': string;
                'filters': DimensionFilter[];
            }

            export interface SegmentSequenceStep {
                'matchType': string;
                'orFiltersForSegment': OrFiltersForSegment[];
            }

            export interface Pivot {
                'dimensions': Dimension[];
                'metrics': Metric[];
                'maxGroupCount': number;
                'dimensionFilterClauses': DimensionFilterClause[];
                'startGroup': number;
            }

            export interface DateRangeValues {
                'values': string[];
                'pivotValueRegions': PivotValueRegion[];
            }

            export interface MetricFilterClause {
                'operator': string;
                'filters': MetricFilter[];
            }

            export interface Segment {
                'dynamicSegment': DynamicSegment;
                'segmentId': string;
            }

            export interface DateRange {
                'startDate': string;
                'endDate': string;
            }

            export interface ReportRow {
                'dimensions': string[];
                'metrics': DateRangeValues[];
            }

            export interface CohortGroup {
                'lifetimeValue': boolean;
                'cohorts': Cohort[];
            }

            export interface GetReportsResponse {
                'reports': Report[];
            }

            export interface MetricHeaderEntry {
                'type': string;
                'name': string;
            }

            export interface MetricFilter {
                'metricName': string;
                'operator': string;
                'comparisonValue': string;
                'not': boolean;
            }

            export interface Dimension {
                'histogramBuckets': string[];
                'name': string;
            }

            export interface PivotValueRegion {
                'values': string[];
            }

        }
    }
}