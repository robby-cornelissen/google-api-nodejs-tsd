// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        storagetransfer(version: string): any;
        storagetransfer(version: 'v1'): storagetransfer.v1.Storagetransfer;
    }

    namespace storagetransfer {
        namespace v1 {
            export interface Storagetransfer {
                new(options: any): Storagetransfer;

                'googleServiceAccounts': {
                    'get': (parameters: { [key: string]: any; 'projectId': string}, callback: (error: any, body: GoogleServiceAccount, response: any) => void) => Request;
                };
                'transferOperations': {
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'name': string, 'pageSize'?: number}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    'resume': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'pause': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'transferJobs': {
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListTransferJobsResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'projectId'?: string, 'jobName': string}, callback: (error: any, body: TransferJob, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'jobName': string}, callback: (error: any, body: TransferJob, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: TransferJob, response: any) => void) => Request;
                };

            }

            export interface AwsAccessKey {
                'accessKeyId': string;
                'secretAccessKey': string;
            }

            export interface Empty {}

            export interface PauseTransferOperationRequest {}

            export interface TransferCounters {
                'objectsDeletedFromSource': string;
                'bytesCopiedToSink': string;
                'bytesFoundFromSource': string;
                'objectsFromSourceSkippedBySync': string;
                'objectsFoundFromSource': string;
                'bytesDeletedFromSource': string;
                'objectsFailedToDeleteFromSink': string;
                'objectsFoundOnlyFromSink': string;
                'objectsDeletedFromSink': string;
                'bytesFromSourceSkippedBySync': string;
                'bytesDeletedFromSink': string;
                'bytesFailedToDeleteFromSink': string;
                'bytesFromSourceFailed': string;
                'objectsCopiedToSink': string;
                'objectsFromSourceFailed': string;
                'bytesFoundOnlyFromSink': string;
            }

            export interface ErrorSummary {
                'errorCode': string;
                'errorCount': string;
                'errorLogEntries': ErrorLogEntry[];
            }

            export interface HttpData {
                'listUrl': string;
            }

            export interface GcsData {
                'bucketName': string;
            }

            export interface ListTransferJobsResponse {
                'nextPageToken': string;
                'transferJobs': TransferJob[];
            }

            export interface UpdateTransferJobRequest {
                'transferJob': TransferJob;
                'projectId': string;
                'updateTransferJobFieldMask': string;
            }

            export interface ObjectConditions {
                'excludePrefixes': string[];
                'minTimeElapsedSinceLastModification': string;
                'maxTimeElapsedSinceLastModification': string;
                'includePrefixes': string[];
            }

            export interface Operation {
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': Status;
            }

            export interface TransferSpec {
                'gcsDataSource': GcsData;
                'transferOptions': TransferOptions;
                'awsS3DataSource': AwsS3Data;
                'httpDataSource': HttpData;
                'objectConditions': ObjectConditions;
                'gcsDataSink': GcsData;
            }

            export interface TransferOptions {
                'deleteObjectsFromSourceAfterTransfer': boolean;
                'deleteObjectsUniqueInSink': boolean;
                'overwriteObjectsAlreadyExistingInSink': boolean;
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
            }

            export interface ResumeTransferOperationRequest {}

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface GoogleServiceAccount {
                'accountEmail': string;
            }

            export interface TimeOfDay {
                'seconds': number;
                'minutes': number;
                'hours': number;
                'nanos': number;
            }

            export interface ErrorLogEntry {
                'errorDetails': string[];
                'url': string;
            }

            export interface TransferJob {
                'description': string;
                'creationTime': string;
                'transferSpec': TransferSpec;
                'status': string;
                'schedule': Schedule;
                'deletionTime': string;
                'name': string;
                'lastModificationTime': string;
                'projectId': string;
            }

            export interface Schedule {
                'scheduleEndDate': Date;
                'startTimeOfDay': TimeOfDay;
                'scheduleStartDate': Date;
            }

            export interface Date {
                'day': number;
                'year': number;
                'month': number;
            }

            export interface TransferOperation {
                'transferJobName': string;
                'transferSpec': TransferSpec;
                'counters': TransferCounters;
                'status': string;
                'errorBreakdowns': ErrorSummary[];
                'name': string;
                'projectId': string;
                'endTime': string;
                'startTime': string;
            }

            export interface AwsS3Data {
                'awsAccessKey': AwsAccessKey;
                'bucketName': string;
            }

        }
    }
}
