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

            interface Job {
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

            interface Environment {
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

            interface WorkerPool {
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

            interface Package {
                'name': string;
                'location': string;
            }

            interface TaskRunnerSettings {
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

            interface WorkerSettings {
                'baseUrl': string;
                'reportingEnabled': boolean;
                'servicePath': string;
                'shuffleServicePath': string;
                'workerId': string;
                'tempStoragePrefix': string;
            }

            interface Disk {
                'sizeGb': number;
                'diskType': string;
                'mountPoint': string;
            }

            interface AutoscalingSettings {
                'algorithm': string;
                'maxNumWorkers': number;
            }

            interface Step {
                'kind': string;
                'name': string;
                'properties': {
                    [name: string]: any
                };
            }

            interface JobExecutionInfo {
                'stages': {
                    [name: string]: JobExecutionStageInfo
                };
            }

            interface JobExecutionStageInfo {
                'stepName': string[];
            }

            interface ListJobsResponse {
                'jobs': Job[];
                'nextPageToken': string;
            }

            interface ListJobMessagesResponse {
                'jobMessages': JobMessage[];
                'nextPageToken': string;
            }

            interface JobMessage {
                'id': string;
                'time': string;
                'messageText': string;
                'messageImportance': string;
            }

            interface JobMetrics {
                'metricTime': string;
                'metrics': MetricUpdate[];
            }

            interface MetricUpdate {
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

            interface MetricStructuredName {
                'origin': string;
                'name': string;
                'context': {
                    [name: string]: string
                };
            }

            interface ReportWorkItemStatusRequest {
                'workerId': string;
                'workItemStatuses': WorkItemStatus[];
                'currentWorkerTime': string;
            }

            interface WorkItemStatus {
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

            interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                }[];
            }

            interface ApproximateReportedProgress {
                'position': Position;
                'fractionConsumed': number;
                'remainingParallelism': ReportedParallelism;
                'consumedParallelism': ReportedParallelism;
            }

            interface Position {
                'end': boolean;
                'key': string;
                'byteOffset': string;
                'recordIndex': string;
                'shufflePosition': string;
                'concatPosition': ConcatPosition;
            }

            interface ConcatPosition {
                'index': number;
                'position': Position;
            }

            interface ReportedParallelism {
                'isInfinite': boolean;
                'value': number;
            }

            interface DynamicSourceSplit {
                'primary': DerivedSource;
                'residual': DerivedSource;
            }

            interface DerivedSource {
                'source': Source;
                'derivationMode': string;
            }

            interface Source {
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

            interface SourceMetadata {
                'producesSortedKeys': boolean;
                'infinite': boolean;
                'estimatedSizeBytes': string;
            }

            interface SourceOperationResponse {
                'split': SourceSplitResponse;
                'getMetadata': SourceGetMetadataResponse;
            }

            interface SourceSplitResponse {
                'outcome': string;
                'bundles': DerivedSource[];
                'shards': SourceSplitShard[];
            }

            interface SourceSplitShard {
                'source': Source;
                'derivationMode': string;
            }

            interface SourceGetMetadataResponse {
                'metadata': SourceMetadata;
            }

            interface SourceFork {
                'primary': SourceSplitShard;
                'residual': SourceSplitShard;
                'primarySource': DerivedSource;
                'residualSource': DerivedSource;
            }

            interface ApproximateProgress {
                'position': Position;
                'percentComplete': number;
                'remainingTime': string;
            }

            interface ReportWorkItemStatusResponse {
                'workItemServiceStates': WorkItemServiceState[];
            }

            interface WorkItemServiceState {
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

            interface ApproximateSplitRequest {
                'position': Position;
                'fractionConsumed': number;
            }

            interface LeaseWorkItemRequest {
                'workItemTypes': string[];
                'workerCapabilities': string[];
                'requestedLeaseDuration': string;
                'currentWorkerTime': string;
                'workerId': string;
            }

            interface LeaseWorkItemResponse {
                'workItems': WorkItem[];
            }

            interface WorkItem {
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

            interface MapTask {
                'instructions': ParallelInstruction[];
                'systemName': string;
                'stageName': string;
            }

            interface ParallelInstruction {
                'systemName': string;
                'name': string;
                'read': ReadInstruction;
                'write': WriteInstruction;
                'parDo': ParDoInstruction;
                'partialGroupByKey': PartialGroupByKeyInstruction;
                'flatten': FlattenInstruction;
                'outputs': InstructionOutput[];
            }

            interface ReadInstruction {
                'source': Source;
            }

            interface WriteInstruction {
                'input': InstructionInput;
                'sink': Sink;
            }

            interface InstructionInput {
                'producerInstructionIndex': number;
                'outputNum': number;
            }

            interface Sink {
                'spec': {
                    [name: string]: any
                };
                'codec': {
                    [name: string]: any
                };
            }

            interface ParDoInstruction {
                'input': InstructionInput;
                'sideInputs': SideInputInfo[];
                'userFn': {
                    [name: string]: any
                };
                'numOutputs': number;
                'multiOutputInfos': MultiOutputInfo[];
            }

            interface SideInputInfo {
                'sources': Source[];
                'kind': {
                    [name: string]: any
                };
                'tag': string;
            }

            interface MultiOutputInfo {
                'tag': string;
            }

            interface PartialGroupByKeyInstruction {
                'input': InstructionInput;
                'inputElementCodec': {
                    [name: string]: any
                };
                'valueCombiningFn': {
                    [name: string]: any
                };
                'sideInputs': SideInputInfo[];
            }

            interface FlattenInstruction {
                'inputs': InstructionInput[];
            }

            interface InstructionOutput {
                'name': string;
                'systemName': string;
                'codec': {
                    [name: string]: any
                };
            }

            interface SeqMapTask {
                'inputs': SideInputInfo[];
                'userFn': {
                    [name: string]: any
                };
                'outputInfos': SeqMapTaskOutputInfo[];
                'name': string;
                'systemName': string;
                'stageName': string;
            }

            interface SeqMapTaskOutputInfo {
                'tag': string;
                'sink': Sink;
            }

            interface ShellTask {
                'command': string;
                'exitCode': number;
            }

            interface StreamingSetupTask {
                'receiveWorkPort': number;
                'workerHarnessPort': number;
                'streamingComputationTopology': TopologyConfig;
                'drain': boolean;
            }

            interface TopologyConfig {
                'computations': ComputationTopology[];
                'dataDiskAssignments': DataDiskAssignment[];
                'userStageToComputationNameMap': {
                    [name: string]: string
                };
                'forwardingKeyBits': number;
            }

            interface ComputationTopology {
                'systemStageName': string;
                'computationId': string;
                'userStageName': string;
                'keyRanges': KeyRangeLocation[];
                'inputs': StreamLocation[];
                'outputs': StreamLocation[];
                'stateFamilies': StateFamilyConfig[];
            }

            interface KeyRangeLocation {
                'start': string;
                'end': string;
                'deliveryEndpoint': string;
                'persistentDirectory': string;
                'dataDisk': string;
            }

            interface StreamLocation {
                'streamingStageLocation': StreamingStageLocation;
                'pubsubLocation': PubsubLocation;
                'sideInputLocation': StreamingSideInputLocation;
                'customSourceLocation': CustomSourceLocation;
            }

            interface StreamingStageLocation {
                'streamId': string;
            }

            interface PubsubLocation {
                'topic': string;
                'subscription': string;
                'timestampLabel': string;
                'idLabel': string;
                'dropLateData': boolean;
                'trackingSubscription': string;
            }

            interface StreamingSideInputLocation {
                'tag': string;
                'stateFamily': string;
            }

            interface CustomSourceLocation {
                'stateful': boolean;
            }

            interface StateFamilyConfig {
                'stateFamily': string;
                'isRead': boolean;
            }

            interface DataDiskAssignment {
                'vmInstance': string;
                'dataDisks': string[];
            }

            interface SourceOperationRequest {
                'split': SourceSplitRequest;
                'getMetadata': SourceGetMetadataRequest;
            }

            interface SourceSplitRequest {
                'source': Source;
                'options': SourceSplitOptions;
            }

            interface SourceSplitOptions {
                'desiredBundleSizeBytes': string;
                'desiredShardSizeBytes': string;
            }

            interface SourceGetMetadataRequest {
                'source': Source;
            }

            interface StreamingComputationTask {
                'taskType': string;
                'dataDisks': MountedDataDisk[];
                'computationRanges': StreamingComputationRanges[];
            }

            interface MountedDataDisk {
                'dataDisk': string;
            }

            interface StreamingComputationRanges {
                'computationId': string;
                'rangeAssignments': KeyRangeDataDiskAssignment[];
            }

            interface KeyRangeDataDiskAssignment {
                'start': string;
                'end': string;
                'dataDisk': string;
            }

            interface SendWorkerMessagesRequest {
                'workerMessages': WorkerMessage[];
            }

            interface WorkerMessage {
                'labels': {
                    [name: string]: string
                };
                'time': string;
                'workerHealthReport': WorkerHealthReport;
                'workerMessageCode': WorkerMessageCode;
            }

            interface WorkerHealthReport {
                'vmIsHealthy': boolean;
                'vmStartupTime': string;
                'reportInterval': string;
                'pods': {
                    [name: string]: any
                }[];
            }

            interface WorkerMessageCode {
                'code': string;
                'parameters': {
                    [name: string]: any
                };
            }

            interface SendWorkerMessagesResponse {
                'workerMessageResponses': WorkerMessageResponse[];
            }

            interface WorkerMessageResponse {
                'workerHealthReportResponse': WorkerHealthReportResponse;
            }

            interface WorkerHealthReportResponse {
                'reportInterval': string;
            }

        }
    }
}