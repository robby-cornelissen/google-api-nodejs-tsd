// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dataflow(version: string): any;
        dataflow(version: 'v1b3'): dataflow.v1b3.Dataflow;
    }

    namespace dataflow {
        namespace v1b3 {
            export interface Dataflow {
                new(options: any): Dataflow;

                'projects': {
                    'workerMessages': (parameters: {'projectId': string}, callback: (error: any, body: SendWorkerMessagesResponse, response: any) => void) => Request;
                
                    'jobs': {
                        'create': (parameters: {'projectId': string, 'view'?: string, 'replaceJobId'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'get': (parameters: {'projectId': string, 'jobId': string, 'view'?: string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'update': (parameters: {'projectId': string, 'jobId': string}, callback: (error: any, body: Job, response: any) => void) => Request;
                        'list': (parameters: {'projectId': string, 'view'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListJobsResponse, response: any) => void) => Request;
                        'getMetrics': (parameters: {'projectId': string, 'jobId': string, 'startTime'?: string}, callback: (error: any, body: JobMetrics, response: any) => void) => Request;
                    
                        'messages': {
                            'list': (parameters: {'projectId': string, 'jobId': string, 'minimumImportance'?: string, 'pageSize'?: number, 'pageToken'?: string, 'startTime'?: string, 'endTime'?: string}, callback: (error: any, body: ListJobMessagesResponse, response: any) => void) => Request;
                        };
                        'workItems': {
                            'reportStatus': (parameters: {'projectId': string, 'jobId': string}, callback: (error: any, body: ReportWorkItemStatusResponse, response: any) => void) => Request;
                            'lease': (parameters: {'projectId': string, 'jobId': string}, callback: (error: any, body: LeaseWorkItemResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Job {
                'id': string;
                'projectId': string;
                'name': string;
                'type': string;
                'environment': Environment;
                'steps': Step[];
                'currentState': string;
                'currentStateTime': string;
                'requestedState': string;
                'executionInfo': JobExecutionInfo;
                'createTime': string;
                'replaceJobId': string;
                'transformNameMapping': {
                    [name: string]: string
                
                };
                'clientRequestId': string;
                'replacedByJobId': string;
                'tempFiles': string[];
            }

            export interface Environment {
                'tempStoragePrefix': string;
                'clusterManagerApiService': string;
                'experiments': string[];
                'workerPools': WorkerPool[];
                'userAgent': {
                    [name: string]: any
                
                };
                'version': {
                    [name: string]: any
                
                };
                'dataset': string;
                'sdkPipelineOptions': {
                    [name: string]: any
                
                };
                'internalExperiments': {
                    [name: string]: any
                
                };
            }

            export interface WorkerPool {
                'kind': string;
                'numWorkers': number;
                'packages': Package[];
                'defaultPackageSet': string;
                'machineType': string;
                'teardownPolicy': string;
                'diskSizeGb': number;
                'diskType': string;
                'diskSourceImage': string;
                'zone': string;
                'taskrunnerSettings': TaskRunnerSettings;
                'onHostMaintenance': string;
                'dataDisks': Disk[];
                'metadata': {
                    [name: string]: string
                
                };
                'autoscalingSettings': AutoscalingSettings;
                'poolArgs': {
                    [name: string]: any
                
                };
                'network': string;
                'workerHarnessContainerImage': string;
            }

            export interface Package {
                'name': string;
                'location': string;
            }

            export interface TaskRunnerSettings {
                'taskUser': string;
                'taskGroup': string;
                'oauthScopes': string[];
                'baseUrl': string;
                'dataflowApiVersion': string;
                'parallelWorkerSettings': WorkerSettings;
                'baseTaskDir': string;
                'continueOnException': boolean;
                'logToSerialconsole': boolean;
                'alsologtostderr': boolean;
                'logUploadLocation': string;
                'logDir': string;
                'tempStoragePrefix': string;
                'harnessCommand': string;
                'workflowFileName': string;
                'commandlinesFileName': string;
                'vmId': string;
                'languageHint': string;
                'streamingWorkerMainClass': string;
            }

            export interface WorkerSettings {
                'baseUrl': string;
                'reportingEnabled': boolean;
                'servicePath': string;
                'shuffleServicePath': string;
                'workerId': string;
                'tempStoragePrefix': string;
            }

            export interface Disk {
                'sizeGb': number;
                'diskType': string;
                'mountPoint': string;
            }

            export interface AutoscalingSettings {
                'algorithm': string;
                'maxNumWorkers': number;
            }

            export interface Step {
                'kind': string;
                'name': string;
                'properties': {
                    [name: string]: any
                
                };
            }

            export interface JobExecutionInfo {
                'stages': {
                    [name: string]: JobExecutionStageInfo
                
                };
            }

            export interface JobExecutionStageInfo {
                'stepName': string[];
            }

            export interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            export interface ListJobMessagesResponse {
                'jobMessages': JobMessage[];
                'nextPageToken': string;
            }

            export interface JobMessage {
                'id': string;
                'time': string;
                'messageText': string;
                'messageImportance': string;
            }

            export interface JobMetrics {
                'metricTime': string;
                'metrics': MetricUpdate[];
            }

            export interface MetricUpdate {
                'name': MetricStructuredName;
                'kind': string;
                'cumulative': boolean;
                'scalar': any;
                'meanSum': any;
                'meanCount': any;
                'set': any;
                'internal': any;
                'updateTime': string;
            }

            export interface MetricStructuredName {
                'origin': string;
                'name': string;
                'context': {
                    [name: string]: string
                
                };
            }

            export interface ReportWorkItemStatusRequest {
                'workerId': string;
                'workItemStatuses': WorkItemStatus[];
                'currentWorkerTime': string;
            }

            export interface WorkItemStatus {
                'workItemId': string;
                'reportIndex': string;
                'requestedLeaseDuration': string;
                'completed': boolean;
                'errors': Status[];
                'metricUpdates': MetricUpdate[];
                'reportedProgress': ApproximateReportedProgress;
                'stopPosition': Position;
                'dynamicSourceSplit': DynamicSourceSplit;
                'sourceOperationResponse': SourceOperationResponse;
                'sourceFork': SourceFork;
                'progress': ApproximateProgress;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                
                }[];
            }

            export interface ApproximateReportedProgress {
                'position': Position;
                'fractionConsumed': number;
                'remainingParallelism': ReportedParallelism;
                'consumedParallelism': ReportedParallelism;
            }

            export interface Position {
                'end': boolean;
                'key': string;
                'byteOffset': string;
                'recordIndex': string;
                'shufflePosition': string;
                'concatPosition': ConcatPosition;
            }

            export interface ConcatPosition {
                'index': number;
                'position': Position;
            }

            export interface ReportedParallelism {
                'isInfinite': boolean;
                'value': number;
            }

            export interface DynamicSourceSplit {
                'primary': DerivedSource;
                'residual': DerivedSource;
            }

            export interface DerivedSource {
                'source': Source;
                'derivationMode': string;
            }

            export interface Source {
                'spec': {
                    [name: string]: any
                
                };
                'codec': {
                    [name: string]: any
                
                };
                'baseSpecs': {
                    [name: string]: any
                
                }[];
                'metadata': SourceMetadata;
                'doesNotNeedSplitting': boolean;
            }

            export interface SourceMetadata {
                'producesSortedKeys': boolean;
                'infinite': boolean;
                'estimatedSizeBytes': string;
            }

            export interface SourceOperationResponse {
                'split': SourceSplitResponse;
                'getMetadata': SourceGetMetadataResponse;
            }

            export interface SourceSplitResponse {
                'outcome': string;
                'bundles': DerivedSource[];
                'shards': SourceSplitShard[];
            }

            export interface SourceSplitShard {
                'source': Source;
                'derivationMode': string;
            }

            export interface SourceGetMetadataResponse {
                'metadata': SourceMetadata;
            }

            export interface SourceFork {
                'primary': SourceSplitShard;
                'residual': SourceSplitShard;
                'primarySource': DerivedSource;
                'residualSource': DerivedSource;
            }

            export interface ApproximateProgress {
                'position': Position;
                'percentComplete': number;
                'remainingTime': string;
            }

            export interface ReportWorkItemStatusResponse {
                'workItemServiceStates': WorkItemServiceState[];
            }

            export interface WorkItemServiceState {
                'splitRequest': ApproximateSplitRequest;
                'leaseExpireTime': string;
                'reportStatusInterval': string;
                'harnessData': {
                    [name: string]: any
                
                };
                'nextReportIndex': string;
                'suggestedStopPosition': Position;
                'suggestedStopPoint': ApproximateProgress;
            }

            export interface ApproximateSplitRequest {
                'position': Position;
                'fractionConsumed': number;
            }

            export interface LeaseWorkItemRequest {
                'workItemTypes': string[];
                'workerCapabilities': string[];
                'requestedLeaseDuration': string;
                'currentWorkerTime': string;
                'workerId': string;
            }

            export interface LeaseWorkItemResponse {
                'workItems': WorkItem[];
            }

            export interface WorkItem {
                'id': string;
                'projectId': string;
                'jobId': string;
                'packages': Package[];
                'mapTask': MapTask;
                'seqMapTask': SeqMapTask;
                'shellTask': ShellTask;
                'streamingSetupTask': StreamingSetupTask;
                'sourceOperationTask': SourceOperationRequest;
                'streamingComputationTask': StreamingComputationTask;
                'reportStatusInterval': string;
                'leaseExpireTime': string;
                'configuration': string;
                'initialReportIndex': string;
            }

            export interface MapTask {
                'instructions': ParallelInstruction[];
                'systemName': string;
                'stageName': string;
            }

            export interface ParallelInstruction {
                'systemName': string;
                'name': string;
                'read': ReadInstruction;
                'write': WriteInstruction;
                'parDo': ParDoInstruction;
                'partialGroupByKey': PartialGroupByKeyInstruction;
                'flatten': FlattenInstruction;
                'outputs': InstructionOutput[];
            }

            export interface ReadInstruction {
                'source': Source;
            }

            export interface WriteInstruction {
                'input': InstructionInput;
                'sink': Sink;
            }

            export interface InstructionInput {
                'producerInstructionIndex': number;
                'outputNum': number;
            }

            export interface Sink {
                'spec': {
                    [name: string]: any
                
                };
                'codec': {
                    [name: string]: any
                
                };
            }

            export interface ParDoInstruction {
                'input': InstructionInput;
                'sideInputs': SideInputInfo[];
                'userFn': {
                    [name: string]: any
                
                };
                'numOutputs': number;
                'multiOutputInfos': MultiOutputInfo[];
            }

            export interface SideInputInfo {
                'sources': Source[];
                'kind': {
                    [name: string]: any
                
                };
                'tag': string;
            }

            export interface MultiOutputInfo {
                'tag': string;
            }

            export interface PartialGroupByKeyInstruction {
                'input': InstructionInput;
                'inputElementCodec': {
                    [name: string]: any
                
                };
                'valueCombiningFn': {
                    [name: string]: any
                
                };
                'sideInputs': SideInputInfo[];
            }

            export interface FlattenInstruction {
                'inputs': InstructionInput[];
            }

            export interface InstructionOutput {
                'name': string;
                'systemName': string;
                'codec': {
                    [name: string]: any
                
                };
            }

            export interface SeqMapTask {
                'inputs': SideInputInfo[];
                'userFn': {
                    [name: string]: any
                
                };
                'outputInfos': SeqMapTaskOutputInfo[];
                'name': string;
                'systemName': string;
                'stageName': string;
            }

            export interface SeqMapTaskOutputInfo {
                'tag': string;
                'sink': Sink;
            }

            export interface ShellTask {
                'command': string;
                'exitCode': number;
            }

            export interface StreamingSetupTask {
                'receiveWorkPort': number;
                'workerHarnessPort': number;
                'streamingComputationTopology': TopologyConfig;
                'drain': boolean;
            }

            export interface TopologyConfig {
                'computations': ComputationTopology[];
                'dataDiskAssignments': DataDiskAssignment[];
                'userStageToComputationNameMap': {
                    [name: string]: string
                
                };
                'forwardingKeyBits': number;
            }

            export interface ComputationTopology {
                'systemStageName': string;
                'computationId': string;
                'userStageName': string;
                'keyRanges': KeyRangeLocation[];
                'inputs': StreamLocation[];
                'outputs': StreamLocation[];
                'stateFamilies': StateFamilyConfig[];
            }

            export interface KeyRangeLocation {
                'start': string;
                'end': string;
                'deliveryEndpoint': string;
                'persistentDirectory': string;
                'dataDisk': string;
            }

            export interface StreamLocation {
                'streamingStageLocation': StreamingStageLocation;
                'pubsubLocation': PubsubLocation;
                'sideInputLocation': StreamingSideInputLocation;
                'customSourceLocation': CustomSourceLocation;
            }

            export interface StreamingStageLocation {
                'streamId': string;
            }

            export interface PubsubLocation {
                'topic': string;
                'subscription': string;
                'timestampLabel': string;
                'idLabel': string;
                'dropLateData': boolean;
                'trackingSubscription': string;
            }

            export interface StreamingSideInputLocation {
                'tag': string;
                'stateFamily': string;
            }

            export interface CustomSourceLocation {
                'stateful': boolean;
            }

            export interface StateFamilyConfig {
                'stateFamily': string;
                'isRead': boolean;
            }

            export interface DataDiskAssignment {
                'vmInstance': string;
                'dataDisks': string[];
            }

            export interface SourceOperationRequest {
                'split': SourceSplitRequest;
                'getMetadata': SourceGetMetadataRequest;
            }

            export interface SourceSplitRequest {
                'source': Source;
                'options': SourceSplitOptions;
            }

            export interface SourceSplitOptions {
                'desiredBundleSizeBytes': string;
                'desiredShardSizeBytes': string;
            }

            export interface SourceGetMetadataRequest {
                'source': Source;
            }

            export interface StreamingComputationTask {
                'taskType': string;
                'dataDisks': MountedDataDisk[];
                'computationRanges': StreamingComputationRanges[];
            }

            export interface MountedDataDisk {
                'dataDisk': string;
            }

            export interface StreamingComputationRanges {
                'computationId': string;
                'rangeAssignments': KeyRangeDataDiskAssignment[];
            }

            export interface KeyRangeDataDiskAssignment {
                'start': string;
                'end': string;
                'dataDisk': string;
            }

            export interface SendWorkerMessagesRequest {
                'workerMessages': WorkerMessage[];
            }

            export interface WorkerMessage {
                'labels': {
                    [name: string]: string
                
                };
                'time': string;
                'workerHealthReport': WorkerHealthReport;
                'workerMessageCode': WorkerMessageCode;
            }

            export interface WorkerHealthReport {
                'vmIsHealthy': boolean;
                'vmStartupTime': string;
                'reportInterval': string;
                'pods': {
                    [name: string]: any
                
                }[];
            }

            export interface WorkerMessageCode {
                'code': string;
                'parameters': {
                    [name: string]: any
                
                };
            }

            export interface SendWorkerMessagesResponse {
                'workerMessageResponses': WorkerMessageResponse[];
            }

            export interface WorkerMessageResponse {
                'workerHealthReportResponse': WorkerHealthReportResponse;
            }

            export interface WorkerHealthReportResponse {
                'reportInterval': string;
            }

        }
    }
}