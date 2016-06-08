// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        toolresults(version: string): any;
        toolresults(version: 'v1beta3'): toolresults.v1beta3.Toolresults;
    }

    namespace toolresults {
        namespace v1beta3 {
            export interface Toolresults {
                new(options: any): Toolresults;

                'projects': {
                    'getSettings': (parameters: {'projectId': string}, callback: (error: any, body: ProjectSettings, response: any) => void) => Request;
                    'initializeSettings': (parameters: {'projectId': string}, callback: (error: any, body: ProjectSettings, response: any) => void) => Request;
                
                    'histories': {
                        'create': (parameters: {'projectId': string, 'requestId'?: string}, callback: (error: any, body: History, response: any) => void) => Request;
                        'get': (parameters: {'historyId': string, 'projectId': string}, callback: (error: any, body: History, response: any) => void) => Request;
                        'list': (parameters: {'filterByName'?: string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: ListHistoriesResponse, response: any) => void) => Request;
                    
                        'executions': {
                            'create': (parameters: {'historyId': string, 'projectId': string, 'requestId'?: string}, callback: (error: any, body: Execution, response: any) => void) => Request;
                            'get': (parameters: {'executionId': string, 'historyId': string, 'projectId': string}, callback: (error: any, body: Execution, response: any) => void) => Request;
                            'list': (parameters: {'historyId': string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: ListExecutionsResponse, response: any) => void) => Request;
                            'patch': (parameters: {'executionId': string, 'historyId': string, 'projectId': string, 'requestId'?: string}, callback: (error: any, body: Execution, response: any) => void) => Request;
                        
                            'steps': {
                                'create': (parameters: {'executionId': string, 'historyId': string, 'projectId': string, 'requestId'?: string}, callback: (error: any, body: Step, response: any) => void) => Request;
                                'get': (parameters: {'executionId': string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: Step, response: any) => void) => Request;
                                'list': (parameters: {'executionId': string, 'historyId': string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: ListStepsResponse, response: any) => void) => Request;
                                'patch': (parameters: {'executionId': string, 'historyId': string, 'projectId': string, 'requestId'?: string, 'stepId': string}, callback: (error: any, body: Step, response: any) => void) => Request;
                                'publishXunitXmlFiles': (parameters: {'executionId': string, 'historyId': string, 'projectId': string, 'stepId': string}, callback: (error: any, body: Step, response: any) => void) => Request;
                            
                                'thumbnails': {
                                    'list': (parameters: {'executionId': string, 'historyId': string, 'pageSize'?: number, 'pageToken'?: string, 'projectId': string, 'stepId': string}, callback: (error: any, body: ListStepThumbnailsResponse, response: any) => void) => Request;
                                };
                            };
                        };
                    };
                };

            }

            export interface Any {
                'typeUrl': string;
                'value': string;
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
                'nativeCrash': boolean;
            }

            export interface ListExecutionsResponse {
                'executions': Execution[];
                'nextPageToken': string;
            }

            export interface ListHistoriesResponse {
                'histories': History[];
                'nextPageToken': string;
            }

            export interface ListStepThumbnailsResponse {
                'nextPageToken': string;
                'thumbnails': Image[];
            }

            export interface ListStepsResponse {
                'nextPageToken': string;
                'steps': Step[];
            }

            export interface Outcome {
                'failureDetail': FailureDetail;
                'inconclusiveDetail': InconclusiveDetail;
                'skippedDetail': SkippedDetail;
                'successDetail': SuccessDetail;
                'summary': string;
            }

            export interface ProjectSettings {
                'defaultBucket': string;
                'name': string;
            }

            export interface PublishXunitXmlFilesRequest {
                'xunitXmlFiles': FileReference[];
            }

            export interface SkippedDetail {
                'incompatibleAppVersion': boolean;
                'incompatibleArchitecture': boolean;
                'incompatibleDevice': boolean;
            }

            export interface StackTrace {
                'exception': string;
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
                'stackTrace': StackTrace;
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