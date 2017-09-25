// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        dataflow(version: string): any;
        dataflow(version: 'v1b3'): dataflow.v1b3.Dataflow;
    }

    namespace dataflow {
        namespace v1b3 {
            export interface Dataflow {
                new(options: any): Dataflow;

                'projects': {
                    'workerMessages': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: SendWorkerMessagesResponse, response: any) => void) => Request;

                    'locations': {
                        'workerMessages': (parameters: { [key: string]: any; 'location': string, 'projectId': string}, callback: (error: any, body: SendWorkerMessagesResponse, response: any) => void) => Request;

                        'templates': {
                            'launch': (parameters: { [key: string]: any; 'validateOnly'?: boolean, 'projectId': string, 'gcsPath'?: string, 'location': string}, callback: (error: any, body: LaunchTemplateResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'view'?: string, 'projectId': string, 'gcsPath'?: string, 'location': string}, callback: (error: any, body: GetTemplateResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'projectId': string, 'location': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        };
                        'jobs': {
                            'getMetrics': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'location': string, 'startTime'?: string}, callback: (error: any, body: JobMetrics, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'projectId': string, 'filter'?: string, 'location': string, 'pageToken'?: string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'view'?: string, 'jobId': string, 'projectId': string, 'location': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'location': string, 'jobId': string, 'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'replaceJobId'?: string, 'view'?: string, 'projectId': string, 'location': string}, callback: (error: any, body: Job, response: any) => void) => Request;

                            'workItems': {
                                'lease': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'location': string}, callback: (error: any, body: LeaseWorkItemResponse, response: any) => void) => Request;
                                'reportStatus': (parameters: { [key: string]: any; 'location': string, 'jobId': string, 'projectId': string}, callback: (error: any, body: ReportWorkItemStatusResponse, response: any) => void) => Request;
                            };
                            'debug': {
                                'sendCapture': (parameters: { [key: string]: any; 'location': string, 'jobId': string, 'projectId': string}, callback: (error: any, body: SendDebugCaptureResponse, response: any) => void) => Request;
                                'getConfig': (parameters: { [key: string]: any; 'location': string, 'jobId': string, 'projectId': string}, callback: (error: any, body: GetDebugConfigResponse, response: any) => void) => Request;
                            };
                            'messages': {
                                'list': (parameters: { [key: string]: any; 'startTime'?: string, 'pageToken'?: string, 'pageSize'?: number, 'minimumImportance'?: string, 'projectId': string, 'jobId': string, 'location': string, 'endTime'?: string}, callback: (error: any, body: ListJobMessagesResponse, response: any) => void) => Request;
                            };
                        };
                    };
                    'templates': {
                        'launch': (parameters: { [key: string]: any; 'gcsPath'?: string, 'location'?: string, 'validateOnly'?: boolean, 'projectId': string}, callback: (error: any, body: LaunchTemplateResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'view'?: string, 'projectId': string, 'gcsPath'?: string, 'location'?: string}, callback: (error: any, body: GetTemplateResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                    };
                    'jobs': {
                        'getMetrics': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'location'?: string, 'startTime'?: string}, callback: (error: any, body: JobMetrics, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'location'?: string, 'view'?: string, 'jobId': string, 'projectId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string, 'location'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'aggregated': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'view'?: string, 'projectId': string, 'filter'?: string, 'location'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'view'?: string, 'projectId': string, 'filter'?: string, 'location'?: string, 'pageToken'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'replaceJobId'?: string, 'view'?: string, 'projectId': string, 'location'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;

                        'workItems': {
                            'lease': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string}, callback: (error: any, body: LeaseWorkItemResponse, response: any) => void) => Request;
                            'reportStatus': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string}, callback: (error: any, body: ReportWorkItemStatusResponse, response: any) => void) => Request;
                        };
                        'debug': {
                            'sendCapture': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string}, callback: (error: any, body: SendDebugCaptureResponse, response: any) => void) => Request;
                            'getConfig': (parameters: { [key: string]: any; 'jobId': string, 'projectId': string}, callback: (error: any, body: GetDebugConfigResponse, response: any) => void) => Request;
                        };
                        'messages': {
                            'list': (parameters: { [key: string]: any; 'projectId': string, 'jobId': string, 'location'?: string, 'endTime'?: string, 'startTime'?: string, 'pageToken'?: string, 'pageSize'?: number, 'minimumImportance'?: string}, callback: (error: any, body: ListJobMessagesResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Source {
                'doesNotNeedSplitting': boolean;
                'codec': {
                    [name: string]: any
                ;
                };
                'spec': {
                    [name: string]: any
                ;
                };
                'metadata': SourceMetadata;
                'baseSpecs': {
                    [name: string]: any
                ;
                }[];
            }

            export interface SplitInt64 {
                'highBits': number;
                'lowBits': number;
            }

            export interface WorkerPool {
                'diskSizeGb': number;
                'workerHarnessContainerImage': string;
                'machineType': string;
                'diskType': string;
                'kind': string;
                'dataDisks': Disk[];
                'subnetwork': string;
                'ipConfiguration': string;
                'taskrunnerSettings': TaskRunnerSettings;
                'autoscalingSettings': AutoscalingSettings;
                'metadata': {
                    [name: string]: string
                ;
                };
                'network': string;
                'defaultPackageSet': string;
                'numThreadsPerWorker': number;
                'numWorkers': number;
                'zone': string;
                'diskSourceImage': string;
                'packages': Package[];
                'teardownPolicy': string;
                'onHostMaintenance': string;
                'poolArgs': {
                    [name: string]: any
                ;
                };
            }

            export interface SourceOperationRequest {
                'getMetadata': SourceGetMetadataRequest;
                'split': SourceSplitRequest;
            }

            export interface WorkItem {
                'mapTask': MapTask;
                'seqMapTask': SeqMapTask;
                'packages': Package[];
                'projectId': string;
                'reportStatusInterval': string;
                'streamingSetupTask': StreamingSetupTask;
                'sourceOperationTask': SourceOperationRequest;
                'streamingConfigTask': StreamingConfigTask;
                'leaseExpireTime': string;
                'initialReportIndex': string;
                'streamingComputationTask': StreamingComputationTask;
                'shellTask': ShellTask;
                'jobId': string;
                'id': string;
                'configuration': string;
            }

            export interface StructuredMessage {
                'messageKey': string;
                'messageText': string;
                'parameters': Parameter[];
            }

            export interface ReportedParallelism {
                'isInfinite': boolean;
                'value': number;
            }

            export interface ResourceUtilizationReport {
                'cpuTime': CPUTime[];
            }

            export interface TopologyConfig {
                'forwardingKeyBits': number;
                'userStageToComputationNameMap': {
                    [name: string]: string
                ;
                };
                'computations': ComputationTopology[];
                'persistentStateVersion': number;
                'dataDiskAssignments': DataDiskAssignment[];
            }

            export interface SourceSplitOptions {
                'desiredBundleSizeBytes': string;
                'desiredShardSizeBytes': string;
            }

            export interface ReadInstruction {
                'source': Source;
            }

            export interface WorkerSettings {
                'baseUrl': string;
                'reportingEnabled': boolean;
                'servicePath': string;
                'shuffleServicePath': string;
                'workerId': string;
                'tempStoragePrefix': string;
            }

            export interface StreamingStageLocation {
                'streamId': string;
            }

            export interface DataDiskAssignment {
                'dataDisks': string[];
                'vmInstance': string;
            }

            export interface ApproximateSplitRequest {
                'fractionConsumed': number;
                'position': Position;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface ExecutionStageState {
                'executionStageState': string;
                'executionStageName': string;
                'currentStateTime': string;
            }

            export interface StreamLocation {
                'customSourceLocation': CustomSourceLocation;
                'sideInputLocation': StreamingSideInputLocation;
                'pubsubLocation': PubsubLocation;
                'streamingStageLocation': StreamingStageLocation;
            }

            export interface SendWorkerMessagesResponse {
                'workerMessageResponses': WorkerMessageResponse[];
            }

            export interface LeaseWorkItemResponse {
                'workItems': WorkItem[];
            }

            export interface TransformSummary {
                'id': string;
                'outputCollectionName': string[];
                'displayData': DisplayData[];
                'kind': string;
                'inputCollectionName': string[];
                'name': string;
            }

            export interface StreamingComputationConfig {
                'computationId': string;
                'stageName': string;
                'systemName': string;
                'instructions': ParallelInstruction[];
            }

            export interface Sink {
                'spec': {
                    [name: string]: any
                ;
                };
                'codec': {
                    [name: string]: any
                ;
                };
            }

            export interface LaunchTemplateParameters {
                'environment': RuntimeEnvironment;
                'parameters': {
                    [name: string]: string
                ;
                };
                'jobName': string;
            }

            export interface FlattenInstruction {
                'inputs': InstructionInput[];
            }

            export interface PartialGroupByKeyInstruction {
                'inputElementCodec': {
                    [name: string]: any
                ;
                };
                'valueCombiningFn': {
                    [name: string]: any
                ;
                };
                'originalCombineValuesInputStoreName': string;
                'sideInputs': SideInputInfo[];
                'originalCombineValuesStepName': string;
                'input': InstructionInput;
            }

            export interface InstructionInput {
                'producerInstructionIndex': number;
                'outputNum': number;
            }

            export interface StageSource {
                'userName': string;
                'originalTransformOrCollection': string;
                'sizeBytes': string;
                'name': string;
            }

            export interface StringList {
                'elements': string[];
            }

            export interface DisplayData {
                'label': string;
                'url': string;
                'timestampValue': string;
                'javaClassValue': string;
                'boolValue': boolean;
                'strValue': string;
                'int64Value': string;
                'durationValue': string;
                'namespace': string;
                'floatValue': number;
                'key': string;
                'shortStrValue': string;
            }

            export interface GetDebugConfigRequest {
                'componentId': string;
                'workerId': string;
                'location': string;
            }

            export interface LeaseWorkItemRequest {
                'workerCapabilities': string[];
                'workerId': string;
                'requestedLeaseDuration': string;
                'currentWorkerTime': string;
                'workItemTypes': string[];
                'location': string;
            }

            export interface GetTemplateResponse {
                'metadata': TemplateMetadata;
                'status': Status;
            }

            export interface Parameter {
                'value': any;
                'key': string;
            }

            export interface ReportWorkItemStatusRequest {
                'currentWorkerTime': string;
                'workerId': string;
                'location': string;
                'workItemStatuses': WorkItemStatus[];
            }

            export interface StreamingConfigTask {
                'userStepToStateFamilyNameMap': {
                    [name: string]: string
                ;
                };
                'windmillServicePort': string;
                'streamingComputationConfigs': StreamingComputationConfig[];
                'windmillServiceEndpoint': string;
            }

            export interface PipelineDescription {
                'displayData': DisplayData[];
                'executionPipelineStage': ExecutionStageSummary[];
                'originalPipelineTransform': TransformSummary[];
            }

            export interface Step {
                'properties': {
                    [name: string]: any
                ;
                };
                'name': string;
                'kind': string;
            }

            export interface JobExecutionInfo {
                'stages': {
                    [name: string]: JobExecutionStageInfo
                ;
                };
            }

            export interface FailedLocation {
                'name': string;
            }

            export interface Disk {
                'diskType': string;
                'sizeGb': number;
                'mountPoint': string;
            }

            export interface ListJobMessagesResponse {
                'autoscalingEvents': AutoscalingEvent[];
                'jobMessages': JobMessage[];
                'nextPageToken': string;
            }

            export interface CounterMetadata {
                'description': string;
                'kind': string;
                'standardUnits': string;
                'otherUnits': string;
            }

            export interface ApproximateReportedProgress {
                'position': Position;
                'fractionConsumed': number;
                'consumedParallelism': ReportedParallelism;
                'remainingParallelism': ReportedParallelism;
            }

            export interface StateFamilyConfig {
                'isRead': boolean;
                'stateFamily': string;
            }

            export interface IntegerList {
                'elements': SplitInt64[];
            }

            export interface ResourceUtilizationReportResponse {}

            export interface SourceSplitResponse {
                'outcome': string;
                'bundles': DerivedSource[];
                'shards': SourceSplitShard[];
            }

            export interface ParallelInstruction {
                'partialGroupByKey': PartialGroupByKeyInstruction;
                'outputs': InstructionOutput[];
                'name': string;
                'parDo': ParDoInstruction;
                'read': ReadInstruction;
                'originalName': string;
                'flatten': FlattenInstruction;
                'systemName': string;
                'write': WriteInstruction;
            }

            export interface KeyRangeDataDiskAssignment {
                'dataDisk': string;
                'start': string;
                'end': string;
            }

            export interface Package {
                'location': string;
                'name': string;
            }

            export interface ParDoInstruction {
                'input': InstructionInput;
                'numOutputs': number;
                'sideInputs': SideInputInfo[];
                'multiOutputInfos': MultiOutputInfo[];
                'userFn': {
                    [name: string]: any
                ;
                };
            }

            export interface MetricUpdate {
                'kind': string;
                'scalar': any;
                'meanCount': any;
                'meanSum': any;
                'updateTime': string;
                'name': MetricStructuredName;
                'distribution': any;
                'set': any;
                'cumulative': boolean;
                'internal': any;
            }

            export interface CounterStructuredName {
                'componentStepName': string;
                'portion': string;
                'originalShuffleStepName': string;
                'originalStepName': string;
                'workerId': string;
                'originNamespace': string;
                'sideInput': SideInputId;
                'executionStepName': string;
                'name': string;
                'origin': string;
            }

            export interface WorkerShutdownNotice {
                'reason': string;
            }

            export interface ApproximateProgress {
                'percentComplete': number;
                'remainingTime': string;
                'position': Position;
            }

            export interface WorkerMessageResponse {
                'workerHealthReportResponse': WorkerHealthReportResponse;
                'workerShutdownNoticeResponse': WorkerShutdownNoticeResponse;
                'workerMetricsResponse': ResourceUtilizationReportResponse;
            }

            export interface TemplateMetadata {
                'parameters': ParameterMetadata[];
                'name': string;
                'description': string;
            }

            export interface WorkerMessage {
                'workerShutdownNotice': WorkerShutdownNotice;
                'workerHealthReport': WorkerHealthReport;
                'workerMetrics': ResourceUtilizationReport;
                'workerMessageCode': WorkerMessageCode;
                'labels': {
                    [name: string]: string
                ;
                };
                'time': string;
            }

            export interface JobMetrics {
                'metrics': MetricUpdate[];
                'metricTime': string;
            }

            export interface WorkerShutdownNoticeResponse {}

            export interface FloatingPointList {
                'elements': number[];
            }

            export interface CounterUpdate {
                'structuredNameAndMetadata': CounterStructuredNameAndMetadata;
                'integerList': IntegerList;
                'floatingPoint': number;
                'integerMean': IntegerMean;
                'cumulative': boolean;
                'internal': any;
                'floatingPointMean': FloatingPointMean;
                'boolean': boolean;
                'nameAndKind': NameAndKind;
                'distribution': DistributionUpdate;
                'stringList': StringList;
                'shortId': string;
                'floatingPointList': FloatingPointList;
                'integer': SplitInt64;
            }

            export interface SourceMetadata {
                'estimatedSizeBytes': string;
                'infinite': boolean;
                'producesSortedKeys': boolean;
            }

            export interface DistributionUpdate {
                'histogram': Histogram;
                'max': SplitInt64;
                'count': SplitInt64;
                'min': SplitInt64;
                'sumOfSquares': number;
                'sum': SplitInt64;
            }

            export interface SourceFork {
                'residual': SourceSplitShard;
                'residualSource': DerivedSource;
                'primary': SourceSplitShard;
                'primarySource': DerivedSource;
            }

            export interface WorkerHealthReportResponse {
                'reportInterval': string;
            }

            export interface WorkItemStatus {
                'sourceFork': SourceFork;
                'totalThrottlerWaitTimeSeconds': number;
                'counterUpdates': CounterUpdate[];
                'workItemId': string;
                'errors': Status[];
                'metricUpdates': MetricUpdate[];
                'dynamicSourceSplit': DynamicSourceSplit;
                'sourceOperationResponse': SourceOperationResponse;
                'progress': ApproximateProgress;
                'requestedLeaseDuration': string;
                'reportIndex': string;
                'stopPosition': Position;
                'completed': boolean;
                'reportedProgress': ApproximateReportedProgress;
            }

            export interface ComponentSource {
                'name': string;
                'userName': string;
                'originalTransformOrCollection': string;
            }

            export interface Histogram {
                'bucketCounts': string[];
                'firstBucketOffset': number;
            }

            export interface WorkItemServiceState {
                'suggestedStopPosition': Position;
                'reportStatusInterval': string;
                'harnessData': {
                    [name: string]: any
                ;
                };
                'leaseExpireTime': string;
                'metricShortId': MetricShortId[];
                'nextReportIndex': string;
                'suggestedStopPoint': ApproximateProgress;
                'splitRequest': ApproximateSplitRequest;
            }

            export interface MetricStructuredName {
                'context': {
                    [name: string]: string
                ;
                };
                'name': string;
                'origin': string;
            }

            export interface SeqMapTaskOutputInfo {
                'tag': string;
                'sink': Sink;
            }

            export interface JobExecutionStageInfo {
                'stepName': string[];
            }

            export interface KeyRangeLocation {
                'end': string;
                'deprecatedPersistentDirectory': string;
                'deliveryEndpoint': string;
                'dataDisk': string;
                'start': string;
            }

            export interface SourceGetMetadataRequest {
                'source': Source;
            }

            export interface NameAndKind {
                'name': string;
                'kind': string;
            }

            export interface SeqMapTask {
                'outputInfos': SeqMapTaskOutputInfo[];
                'inputs': SideInputInfo[];
                'systemName': string;
                'stageName': string;
                'userFn': {
                    [name: string]: any
                ;
                };
                'name': string;
            }

            export interface WorkerMessageCode {
                'code': string;
                'parameters': {
                    [name: string]: any
                ;
                };
            }

            export interface CustomSourceLocation {
                'stateful': boolean;
            }

            export interface MapTask {
                'stageName': string;
                'systemName': string;
                'instructions': ParallelInstruction[];
            }

            export interface FloatingPointMean {
                'sum': number;
                'count': SplitInt64;
            }

            export interface ReportWorkItemStatusResponse {
                'workItemServiceStates': WorkItemServiceState[];
            }

            export interface InstructionOutput {
                'originalName': string;
                'systemName': string;
                'onlyCountKeyBytes': boolean;
                'onlyCountValueBytes': boolean;
                'codec': {
                    [name: string]: any
                ;
                };
                'name': string;
            }

            export interface CreateJobFromTemplateRequest {
                'environment': RuntimeEnvironment;
                'location': string;
                'parameters': {
                    [name: string]: string
                ;
                };
                'jobName': string;
                'gcsPath': string;
            }

            export interface IntegerMean {
                'count': SplitInt64;
                'sum': SplitInt64;
            }

            export interface ListJobsResponse {
                'failedLocation': FailedLocation[];
                'nextPageToken': string;
                'jobs': Job[];
            }

            export interface ComputationTopology {
                'systemStageName': string;
                'computationId': string;
                'inputs': StreamLocation[];
                'keyRanges': KeyRangeLocation[];
                'stateFamilies': StateFamilyConfig[];
                'outputs': StreamLocation[];
            }

            export interface RuntimeEnvironment {
                'maxWorkers': number;
                'serviceAccountEmail': string;
                'tempLocation': string;
                'bypassTempDirValidation': boolean;
                'machineType': string;
                'zone': string;
            }

            export interface MountedDataDisk {
                'dataDisk': string;
            }

            export interface StreamingSideInputLocation {
                'tag': string;
                'stateFamily': string;
            }

            export interface LaunchTemplateResponse {
                'job': Job;
            }

            export interface DerivedSource {
                'derivationMode': string;
                'source': Source;
            }

            export interface DynamicSourceSplit {
                'primary': DerivedSource;
                'residual': DerivedSource;
            }

            export interface Job {
                'currentStateTime': string;
                'transformNameMapping': {
                    [name: string]: string
                ;
                };
                'createTime': string;
                'environment': Environment;
                'labels': {
                    [name: string]: string
                ;
                };
                'stageStates': ExecutionStageState[];
                'type': string;
                'projectId': string;
                'pipelineDescription': PipelineDescription;
                'replaceJobId': string;
                'requestedState': string;
                'tempFiles': string[];
                'clientRequestId': string;
                'name': string;
                'steps': Step[];
                'replacedByJobId': string;
                'executionInfo': JobExecutionInfo;
                'id': string;
                'currentState': string;
                'location': string;
            }

            export interface SideInputId {
                'inputIndex': number;
                'declaringStepName': string;
            }

            export interface SourceOperationResponse {
                'getMetadata': SourceGetMetadataResponse;
                'split': SourceSplitResponse;
            }

            export interface SideInputInfo {
                'tag': string;
                'kind': {
                    [name: string]: any
                ;
                };
                'sources': Source[];
            }

            export interface SendDebugCaptureResponse {}

            export interface WriteInstruction {
                'sink': Sink;
                'input': InstructionInput;
            }

            export interface ConcatPosition {
                'index': number;
                'position': Position;
            }

            export interface CounterStructuredNameAndMetadata {
                'name': CounterStructuredName;
                'metadata': CounterMetadata;
            }

            export interface AutoscalingSettings {
                'maxNumWorkers': number;
                'algorithm': string;
            }

            export interface StreamingComputationRanges {
                'computationId': string;
                'rangeAssignments': KeyRangeDataDiskAssignment[];
            }

            export interface ExecutionStageSummary {
                'inputSource': StageSource[];
                'id': string;
                'componentTransform': ComponentTransform[];
                'componentSource': ComponentSource[];
                'kind': string;
                'outputSource': StageSource[];
                'name': string;
            }

            export interface SendWorkerMessagesRequest {
                'workerMessages': WorkerMessage[];
                'location': string;
            }

            export interface SourceSplitShard {
                'derivationMode': string;
                'source': Source;
            }

            export interface CPUTime {
                'totalMs': string;
                'rate': number;
                'timestamp': string;
            }

            export interface Environment {
                'sdkPipelineOptions': {
                    [name: string]: any
                ;
                };
                'userAgent': {
                    [name: string]: any
                ;
                };
                'clusterManagerApiService': string;
                'tempStoragePrefix': string;
                'workerPools': WorkerPool[];
                'dataset': string;
                'experiments': string[];
                'internalExperiments': {
                    [name: string]: any
                ;
                };
                'version': {
                    [name: string]: any
                ;
                };
                'serviceAccountEmail': string;
            }

            export interface StreamingComputationTask {
                'taskType': string;
                'computationRanges': StreamingComputationRanges[];
                'dataDisks': MountedDataDisk[];
            }

            export interface SendDebugCaptureRequest {
                'workerId': string;
                'location': string;
                'data': string;
                'componentId': string;
            }

            export interface GetDebugConfigResponse {
                'config': string;
            }

            export interface ComponentTransform {
                'originalTransform': string;
                'name': string;
                'userName': string;
            }

            export interface StreamingSetupTask {
                'streamingComputationTopology': TopologyConfig;
                'drain': boolean;
                'workerHarnessPort': number;
                'receiveWorkPort': number;
            }

            export interface PubsubLocation {
                'timestampLabel': string;
                'topic': string;
                'subscription': string;
                'dropLateData': boolean;
                'trackingSubscription': string;
                'withAttributes': boolean;
                'idLabel': string;
            }

            export interface WorkerHealthReport {
                'pods': {
                    [name: string]: any
                ;
                }[];
                'vmStartupTime': string;
                'reportInterval': string;
                'vmIsHealthy': boolean;
            }

            export interface JobMessage {
                'time': string;
                'id': string;
                'messageImportance': string;
                'messageText': string;
            }

            export interface ParameterMetadata {
                'regexes': string[];
                'label': string;
                'helpText': string;
                'isOptional': boolean;
                'name': string;
            }

            export interface MultiOutputInfo {
                'tag': string;
            }

            export interface SourceSplitRequest {
                'options': SourceSplitOptions;
                'source': Source;
            }

            export interface SourceGetMetadataResponse {
                'metadata': SourceMetadata;
            }

            export interface ShellTask {
                'command': string;
                'exitCode': number;
            }

            export interface MetricShortId {
                'metricIndex': number;
                'shortId': string;
            }

            export interface AutoscalingEvent {
                'eventType': string;
                'targetNumWorkers': string;
                'currentNumWorkers': string;
                'time': string;
                'description': StructuredMessage;
            }

            export interface TaskRunnerSettings {
                'logToSerialconsole': boolean;
                'continueOnException': boolean;
                'parallelWorkerSettings': WorkerSettings;
                'taskUser': string;
                'vmId': string;
                'alsologtostderr': boolean;
                'taskGroup': string;
                'harnessCommand': string;
                'logDir': string;
                'dataflowApiVersion': string;
                'oauthScopes': string[];
                'logUploadLocation': string;
                'streamingWorkerMainClass': string;
                'workflowFileName': string;
                'languageHint': string;
                'baseTaskDir': string;
                'tempStoragePrefix': string;
                'commandlinesFileName': string;
                'baseUrl': string;
            }

            export interface Position {
                'recordIndex': string;
                'shufflePosition': string;
                'byteOffset': string;
                'concatPosition': ConcatPosition;
                'end': boolean;
                'key': string;
            }

        }
    }
}
