// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        analyticsreporting(version: string): any;
        analyticsreporting(version: 'v4'): analyticsreporting.v4.Analyticsreporting;
    }

    namespace analyticsreporting {
        namespace v4 {
            export interface Analyticsreporting {
                new(options: any): Analyticsreporting;

                'reports': {
                    'batchGet': (parameters: { [key: string]: any; }, callback: (error: any, body: GetReportsResponse, response: any) => void) => Request;
                };

            }

            export interface SegmentFilter {
                'sequenceSegment': SequenceSegment;
                'not': boolean;
                'simpleSegment': SimpleSegment;
            }

            export interface SegmentDefinition {
                'segmentFilters': SegmentFilter[];
            }

            export interface MetricHeaderEntry {
                'name': string;
                'type': string;
            }

            export interface ReportData {
                'minimums': DateRangeValues[];
                'samplingSpaceSizes': string[];
                'totals': DateRangeValues[];
                'samplesReadCounts': string[];
                'rowCount': number;
                'rows': ReportRow[];
                'isDataGolden': boolean;
                'dataLastRefreshed': string;
                'maximums': DateRangeValues[];
            }

            export interface DimensionFilter {
                'caseSensitive': boolean;
                'operator': string;
                'dimensionName': string;
                'expressions': string[];
                'not': boolean;
            }

            export interface Segment {
                'segmentId': string;
                'dynamicSegment': DynamicSegment;
            }

            export interface OrderBy {
                'orderType': string;
                'fieldName': string;
                'sortOrder': string;
            }

            export interface SegmentDimensionFilter {
                'minComparisonValue': string;
                'maxComparisonValue': string;
                'dimensionName': string;
                'operator': string;
                'expressions': string[];
                'caseSensitive': boolean;
            }

            export interface SegmentSequenceStep {
                'orFiltersForSegment': OrFiltersForSegment[];
                'matchType': string;
            }

            export interface Metric {
                'alias': string;
                'expression': string;
                'formattingType': string;
            }

            export interface PivotValueRegion {
                'values': string[];
            }

            export interface Report {
                'columnHeader': ColumnHeader;
                'nextPageToken': string;
                'data': ReportData;
            }

            export interface PivotHeader {
                'pivotHeaderEntries': PivotHeaderEntry[];
                'totalPivotGroupsCount': number;
            }

            export interface DateRange {
                'endDate': string;
                'startDate': string;
            }

            export interface MetricFilter {
                'metricName': string;
                'comparisonValue': string;
                'operator': string;
                'not': boolean;
            }

            export interface ReportRequest {
                'metrics': Metric[];
                'dimensionFilterClauses': DimensionFilterClause[];
                'orderBys': OrderBy[];
                'segments': Segment[];
                'samplingLevel': string;
                'dimensions': Dimension[];
                'pageToken': string;
                'dateRanges': DateRange[];
                'pivots': Pivot[];
                'includeEmptyRows': boolean;
                'metricFilterClauses': MetricFilterClause[];
                'pageSize': number;
                'hideValueRanges': boolean;
                'hideTotals': boolean;
                'cohortGroup': CohortGroup;
                'filtersExpression': string;
                'viewId': string;
            }

            export interface Dimension {
                'histogramBuckets': string[];
                'name': string;
            }

            export interface SimpleSegment {
                'orFiltersForSegment': OrFiltersForSegment[];
            }

            export interface DynamicSegment {
                'sessionSegment': SegmentDefinition;
                'name': string;
                'userSegment': SegmentDefinition;
            }

            export interface ColumnHeader {
                'dimensions': string[];
                'metricHeader': MetricHeader;
            }

            export interface SegmentFilterClause {
                'metricFilter': SegmentMetricFilter;
                'not': boolean;
                'dimensionFilter': SegmentDimensionFilter;
            }

            export interface ReportRow {
                'dimensions': string[];
                'metrics': DateRangeValues[];
            }

            export interface Cohort {
                'dateRange': DateRange;
                'name': string;
                'type': string;
            }

            export interface MetricFilterClause {
                'filters': MetricFilter[];
                'operator': string;
            }

            export interface OrFiltersForSegment {
                'segmentFilterClauses': SegmentFilterClause[];
            }

            export interface MetricHeader {
                'metricHeaderEntries': MetricHeaderEntry[];
                'pivotHeaders': PivotHeader[];
            }

            export interface DimensionFilterClause {
                'filters': DimensionFilter[];
                'operator': string;
            }

            export interface GetReportsResponse {
                'reports': Report[];
            }

            export interface SequenceSegment {
                'segmentSequenceSteps': SegmentSequenceStep[];
                'firstStepShouldMatchFirstHit': boolean;
            }

            export interface SegmentMetricFilter {
                'metricName': string;
                'scope': string;
                'maxComparisonValue': string;
                'comparisonValue': string;
                'operator': string;
            }

            export interface DateRangeValues {
                'values': string[];
                'pivotValueRegions': PivotValueRegion[];
            }

            export interface CohortGroup {
                'cohorts': Cohort[];
                'lifetimeValue': boolean;
            }

            export interface GetReportsRequest {
                'reportRequests': ReportRequest[];
            }

            export interface Pivot {
                'dimensionFilterClauses': DimensionFilterClause[];
                'dimensions': Dimension[];
                'maxGroupCount': number;
                'startGroup': number;
                'metrics': Metric[];
            }

            export interface PivotHeaderEntry {
                'dimensionValues': string[];
                'metric': MetricHeaderEntry;
                'dimensionNames': string[];
            }

        }
    }
}
