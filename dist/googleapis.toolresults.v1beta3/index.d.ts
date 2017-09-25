// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        toolresults(version: string): any;
        toolresults(version: 'v1beta3'): toolresults.v1beta3.Toolresults;
    }

    namespace toolresults {
        namespace v1beta3 {
            export interface Toolresults {
                new(options: any): Toolresults;

                'projects': {
                    'getSettings': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: ProjectSettings, response: any) => void) => Request;
                    'initializeSettings': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: ProjectSettings, response: any) => void) => Request;

                    'histories': {
                        'create': (parameters: { [key: string]: any; 'projectId': string, 'requestId'?: string}, callback: (error: any, body: History, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'historyId': string, 'projectId': string}, callback: (error: any, body: History, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filterByName'?: string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: ListHistoriesResponse, response: any) => void) => Request;

                        'executions': {
                            'create': (parameters: { [key: string]: any; 'historyId': string, 'projectId': string, 'requestId'?: string}, callback: (error: any, body: Execution, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string}, callback: (error: any, body: Execution, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'historyId': string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: ListExecutionsResponse, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'requestId'?: string}, callback: (error: any, body: Execution, response: any) => void) => Request;

                            'clusters': {
                                'get': (parameters: { [key: string]: any; 'clusterId': string, 'executionId': string, 'historyId': string, 'projectId': string}, callback: (error: any, body: ScreenshotCluster, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string}, callback: (error: any, body: ListScreenshotClustersResponse, response: any) => void) => Request;
                            };
                            'steps': {
                                'create': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'requestId'?: string}, callback: (error: any, body: Step, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: Step, response: any) => void) => Request;
                                'getPerfMetricsSummary': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: PerfMetricsSummary, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: ListStepsResponse, response: any) => void) => Request;
                                'patch': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'requestId'?: string, 'stepId': string}, callback: (error: any, body: Step, response: any) => void) => Request;
                                'publishXunitXmlFiles': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: Step, response: any) => void) => Request;

                                'perfMetricsSummary': {
                                    'create': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: PerfMetricsSummary, response: any) => void) => Request;
                                };
                                'perfSampleSeries': {
                                    'create': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: PerfSampleSeries, response: any) => void) => Request;
                                    'get': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'sampleSeriesId': string, 'stepId': string}, callback: (error: any, body: PerfSampleSeries, response: any) => void) => Request;
                                    'list': (parameters: { [key: string]: any; 'executionId': string, 'filter'?: string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: ListPerfSampleSeriesResponse, response: any) => void) => Request;

                                    'samples': {
                                        'batchCreate': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'projectId': string, 'sampleSeriesId': string, 'stepId': string}, callback: (error: any, body: BatchCreatePerfSamplesResponse, response: any) => void) => Request;
                                        'list': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string, 'sampleSeriesId': string, 'stepId': string}, callback: (error: any, body: ListPerfSamplesResponse, response: any) => void) => Request;
                                    };
                                };
                                'thumbnails': {
                                    'list': (parameters: { [key: string]: any; 'executionId': string, 'historyId': string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string, 'stepId': string}, callback: (error: any, body: ListStepThumbnailsResponse, response: any) => void) => Request;
                                };
                            };
                        };
                    };
                };

            }

            export interface AndroidAppInfo {
                'name': string;
                'packageName': string;
                'versionCode': string;
                'versionName': string;
            }

            export interface AndroidInstrumentationTest {
                'testPackageId': string;
                'testRunnerClass': string;
                'testTargets': string[];
                'useOrchestrator': boolean;
            }

            export interface AndroidRoboTest {
                'appInitialActivity': string;
                'bootstrapPackageId': string;
                'bootstrapRunnerClass': string;
                'maxDepth': number;
                'maxSteps': number;
            }

            export interface AndroidTest {
                'androidAppInfo': AndroidAppInfo;
                'androidInstrumentationTest': AndroidInstrumentationTest;
                'androidRoboTest': AndroidRoboTest;
                'testTimeout': Duration;
            }

            export interface Any {
                'typeUrl': string;
                'value': string;
            }

            export interface AppStartTime {
                'fullyDrawnTime': Duration;
                'initialDisplayTime': Duration;
            }

            export interface BasicPerfSampleSeries {
                'perfMetricType': string;
                'perfUnit': string;
                'sampleSeriesLabel': string;
            }

            export interface BatchCreatePerfSamplesRequest {
                'perfSamples': PerfSample[];
            }

            export interface BatchCreatePerfSamplesResponse {
                'perfSamples': PerfSample[];
            }

            export interface CPUInfo {
                'cpuProcessor': string;
                'cpuSpeedInGhz': number;
                'numberOfCores': number;
            }

            export interface Duration {
                'nanos': number;
                'seconds': string;
            }

            export interface Execution {
                'completionTime': Timestamp;
                'creationTime': Timestamp;
                'executionId': string;
                'outcome': Outcome;
                'specification': Specification;
                'state': string;
                'testExecutionMatrixId': string;
            }

            export interface FailureDetail {
                'crashed': boolean;
                'notInstalled': boolean;
                'otherNativeCrash': boolean;
                'timedOut': boolean;
                'unableToCrawl': boolean;
            }

            export interface FileReference {
                'fileUri': string;
            }

            export interface History {
                'displayName': string;
                'historyId': string;
                'name': string;
            }

            export interface Image {
                'error': Status;
                'sourceImage': ToolOutputReference;
                'stepId': string;
                'thumbnail': Thumbnail;
            }

            export interface InconclusiveDetail {
                'abortedByUser': boolean;
                'infrastructureFailure': boolean;
            }

            export interface ListExecutionsResponse {
                'executions': Execution[];
                'nextPageToken': string;
            }

            export interface ListHistoriesResponse {
                'histories': History[];
                'nextPageToken': string;
            }

            export interface ListPerfSampleSeriesResponse {
                'perfSampleSeries': PerfSampleSeries[];
            }

            export interface ListPerfSamplesResponse {
                'nextPageToken': string;
                'perfSamples': PerfSample[];
            }

            export interface ListScreenshotClustersResponse {
                'clusters': ScreenshotCluster[];
            }

            export interface ListStepThumbnailsResponse {
                'nextPageToken': string;
                'thumbnails': Image[];
            }

            export interface ListStepsResponse {
                'nextPageToken': string;
                'steps': Step[];
            }

            export interface MemoryInfo {
                'memoryCapInKibibyte': string;
                'memoryTotalInKibibyte': string;
            }

            export interface Outcome {
                'failureDetail': FailureDetail;
                'inconclusiveDetail': InconclusiveDetail;
                'skippedDetail': SkippedDetail;
                'successDetail': SuccessDetail;
                'summary': string;
            }

            export interface PerfEnvironment {
                'cpuInfo': CPUInfo;
                'memoryInfo': MemoryInfo;
            }

            export interface PerfMetricsSummary {
                'appStartTime': AppStartTime;
                'executionId': string;
                'historyId': string;
                'perfEnvironment': PerfEnvironment;
                'perfMetrics': string[];
                'projectId': string;
                'stepId': string;
            }

            export interface PerfSample {
                'sampleTime': Timestamp;
                'value': number;
            }

            export interface PerfSampleSeries {
                'basicPerfSampleSeries': BasicPerfSampleSeries;
                'executionId': string;
                'historyId': string;
                'projectId': string;
                'sampleSeriesId': string;
                'stepId': string;
            }

            export interface ProjectSettings {
                'defaultBucket': string;
                'name': string;
            }

            export interface PublishXunitXmlFilesRequest {
                'xunitXmlFiles': FileReference[];
            }

            export interface Screen {
                'fileReference': string;
                'locale': string;
                'model': string;
                'version': string;
            }

            export interface ScreenshotCluster {
                'activity': string;
                'clusterId': string;
                'keyScreen': Screen;
                'screens': Screen[];
            }

            export interface SkippedDetail {
                'incompatibleAppVersion': boolean;
                'incompatibleArchitecture': boolean;
                'incompatibleDevice': boolean;
            }

            export interface Specification {
                'androidTest': AndroidTest;
            }

            export interface StackTrace {
                'clusterId': string;
                'exception': string;
                'reportId': string;
            }

            export interface Status {
                'code': number;
                'details': Any[];
                'message': string;
            }

            export interface Step {
                'completionTime': Timestamp;
                'creationTime': Timestamp;
                'description': string;
                'deviceUsageDuration': Duration;
                'dimensionValue': StepDimensionValueEntry[];
                'hasImages': boolean;
                'labels': StepLabelsEntry[];
                'name': string;
                'outcome': Outcome;
                'runDuration': Duration;
                'state': string;
                'stepId': string;
                'testExecutionStep': TestExecutionStep;
                'toolExecutionStep': ToolExecutionStep;
            }

            export interface StepDimensionValueEntry {
                'key': string;
                'value': string;
            }

            export interface StepLabelsEntry {
                'key': string;
                'value': string;
            }

            export interface SuccessDetail {
                'otherNativeCrash': boolean;
            }

            export interface TestCaseReference {
                'className': string;
                'name': string;
                'testSuiteName': string;
            }

            export interface TestExecutionStep {
                'testIssues': TestIssue[];
                'testSuiteOverviews': TestSuiteOverview[];
                'testTiming': TestTiming;
                'toolExecution': ToolExecution;
            }

            export interface TestIssue {
                'errorMessage': string;
                'severity': string;
                'stackTrace': StackTrace;
                'type': string;
                'warning': Any;
            }

            export interface TestSuiteOverview {
                'errorCount': number;
                'failureCount': number;
                'name': string;
                'skippedCount': number;
                'totalCount': number;
                'xmlSource': FileReference;
            }

            export interface TestTiming {
                'testProcessDuration': Duration;
            }

            export interface Thumbnail {
                'contentType': string;
                'data': string;
                'heightPx': number;
                'widthPx': number;
            }

            export interface Timestamp {
                'nanos': number;
                'seconds': string;
            }

            export interface ToolExecution {
                'commandLineArguments': string[];
                'exitCode': ToolExitCode;
                'toolLogs': FileReference[];
                'toolOutputs': ToolOutputReference[];
            }

            export interface ToolExecutionStep {
                'toolExecution': ToolExecution;
            }

            export interface ToolExitCode {
                'number': number;
            }

            export interface ToolOutputReference {
                'creationTime': Timestamp;
                'output': FileReference;
                'testCase': TestCaseReference;
            }

        }
    }
}
