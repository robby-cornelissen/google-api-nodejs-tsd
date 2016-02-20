/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        storagetransfer(version: string): any;
        storagetransfer(version: 'v1'): storagetransfer.v1.Storagetransfer;
    }

    namespace storagetransfer {
        namespace v1 {
            export interface Storagetransfer {
                new(options: any): Storagetransfer;

                'googleServiceAccounts': {
                    'get': (parameters: {'projectId': string}, callback: (error: any, body: GoogleServiceAccount, response: any) => void) => Request;
                };
                'v1': {
                    'getGoogleServiceAccount': (parameters: {'projectId'?: string}, callback: (error: any, body: GoogleServiceAccount, response: any) => void) => Request;
                };
                'transferJobs': {
                    'create': (parameters: any, callback: (error: any, body: TransferJob, response: any) => void) => Request;
                    'patch': (parameters: {'jobName': string}, callback: (error: any, body: TransferJob, response: any) => void) => Request;
                    'get': (parameters: {'jobName': string, 'projectId'?: string}, callback: (error: any, body: TransferJob, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListTransferJobsResponse, response: any) => void) => Request;
                };
                'transferOperations': {
                    'pause': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'resume': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: {'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'name': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    'cancel': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: {'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };

            }

            interface GoogleServiceAccount {
                'accountEmail': string;
            }

            interface TransferJob {
                'name': string;
                'description': string;
                'projectId': string;
                'transferSpec': TransferSpec;
                'schedule': Schedule;
                'status': string;
                'creationTime': string;
                'lastModificationTime': string;
                'deletionTime': string;
            }

            interface TransferSpec {
                'gcsDataSource': GcsData;
                'awsS3DataSource': AwsS3Data;
                'httpDataSource': HttpData;
                'gcsDataSink': GcsData;
                'objectConditions': ObjectConditions;
                'transferOptions': TransferOptions;
            }

            interface GcsData {
                'bucketName': string;
            }

            interface AwsS3Data {
                'bucketName': string;
                'awsAccessKey': AwsAccessKey;
            }

            interface AwsAccessKey {
                'accessKeyId': string;
                'secretAccessKey': string;
            }

            interface HttpData {
                'listUrl': string;
            }

            interface ObjectConditions {
                'minTimeElapsedSinceLastModification': string;
                'maxTimeElapsedSinceLastModification': string;
                'includePrefixes': string[];
                'excludePrefixes': string[];
            }

            interface TransferOptions {
                'overwriteObjectsAlreadyExistingInSink': boolean;
                'deleteObjectsUniqueInSink': boolean;
                'deleteObjectsFromSourceAfterTransfer': boolean;
            }

            interface Schedule {
                'scheduleStartDate': Date;
                'scheduleEndDate': Date;
                'startTimeOfDay': TimeOfDay;
            }

            interface Date {
                'year': number;
                'month': number;
                'day': number;
            }

            interface TimeOfDay {
                'hours': number;
                'minutes': number;
                'seconds': number;
                'nanos': number;
            }

            interface UpdateTransferJobRequest {
                'projectId': string;
                'transferJob': TransferJob;
                'updateTransferJobFieldMask': string;
            }

            interface ListTransferJobsResponse {
                'transferJobs': TransferJob[];
                'nextPageToken': string;
            }

            interface PauseTransferOperationRequest {}

            interface Empty {}

            interface ResumeTransferOperationRequest {}

            interface Operation {
                'name': string;
                'metadata': {
                    [name: string]: any
                };
                'done': boolean;
                'error': Status;
                'response': {
                    [name: string]: any
                };
            }

            interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                }[];
            }

            interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            interface TransferOperation {
                'name': string;
                'projectId': string;
                'transferSpec': TransferSpec;
                'startTime': string;
                'endTime': string;
                'status': string;
                'counters': TransferCounters;
                'errorBreakdowns': ErrorSummary[];
                'transferJobName': string;
            }

            interface TransferCounters {
                'objectsFoundFromSource': string;
                'bytesFoundFromSource': string;
                'objectsFoundOnlyFromSink': string;
                'bytesFoundOnlyFromSink': string;
                'objectsFromSourceSkippedBySync': string;
                'bytesFromSourceSkippedBySync': string;
                'objectsCopiedToSink': string;
                'bytesCopiedToSink': string;
                'objectsDeletedFromSource': string;
                'bytesDeletedFromSource': string;
                'objectsDeletedFromSink': string;
                'bytesDeletedFromSink': string;
                'objectsFromSourceFailed': string;
                'bytesFromSourceFailed': string;
                'objectsFailedToDeleteFromSink': string;
                'bytesFailedToDeleteFromSink': string;
            }

            interface ErrorSummary {
                'errorCode': string;
                'errorCount': string;
                'errorLogEntries': ErrorLogEntry[];
            }

            interface ErrorLogEntry {
                'url': string;
                'errorDetails': string[];
            }

        }
    }
}