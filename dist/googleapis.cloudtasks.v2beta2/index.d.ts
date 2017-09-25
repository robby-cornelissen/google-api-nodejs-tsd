// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudtasks(version: string): any;
        cloudtasks(version: 'v2beta2'): cloudtasks.v2beta2.Cloudtasks;
    }

    namespace cloudtasks {
        namespace v2beta2 {
            export interface Cloudtasks {
                new(options: any): Cloudtasks;

                'projects': {
                    'locations': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'name': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;

                        'queues': {
                            'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: Queue, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Queue, response: any) => void) => Request;
                            'purge': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Queue, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                            'pause': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Queue, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'parent': string, 'filter'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListQueuesResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Queue, response: any) => void) => Request;
                            'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'resume': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Queue, response: any) => void) => Request;
                            'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;

                            'tasks': {
                                'get': (parameters: { [key: string]: any; 'responseView'?: string, 'name': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'pull': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: PullTasksResponse, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'orderBy'?: string, 'responseView'?: string, 'pageSize'?: number}, callback: (error: any, body: ListTasksResponse, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                                'run': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                                'cancelLease': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                                'acknowledge': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'renewLease': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                            };
                        };
                    };
                };

            }

            export interface RenewLeaseRequest {
                'scheduleTime': string;
                'newLeaseDuration': string;
                'responseView': string;
            }

            export interface TaskStatus {
                'lastAttemptStatus': AttemptStatus;
                'attemptDispatchCount': string;
                'firstAttemptStatus': AttemptStatus;
                'attemptResponseCount': string;
            }

            export interface AppEngineHttpRequest {
                'relativeUrl': string;
                'headers': {
                    [name: string]: string
                ;
                };
                'appEngineRouting': AppEngineRouting;
                'httpMethod': string;
                'payload': string;
            }

            export interface PullTaskTarget {
                'payload': string;
                'tag': string;
            }

            export interface AppEngineQueueConfig {
                'appEngineRoutingOverride': AppEngineRouting;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface GetIamPolicyRequest {}

            export interface RetryConfig {
                'maxDoublings': number;
                'maxAttempts': number;
                'unlimitedAttempts': boolean;
                'taskAgeLimit': string;
                'minBackoff': string;
                'maxBackoff': string;
            }

            export interface PullTarget {}

            export interface ThrottleConfig {
                'maxOutstandingTasks': number;
                'maxTasksDispatchedPerSecond': number;
                'maxBurstSize': number;
            }

            export interface ResumeQueueRequest {}

            export interface CreateTaskRequest {
                'responseView': string;
                'task': Task;
            }

            export interface ListTasksResponse {
                'nextPageToken': string;
                'tasks': Task[];
            }

            export interface PullQueueConfig {}

            export interface Queue {
                'purgeTime': string;
                'queueState': string;
                'retryConfig': RetryConfig;
                'name': string;
                'throttleConfig': ThrottleConfig;
                'appEngineQueueConfig': AppEngineQueueConfig;
                'pullTarget': PullTarget;
                'pullQueueConfig': PullQueueConfig;
                'appEngineHttpTarget': AppEngineHttpTarget;
            }

            export interface PullTasksRequest {
                'leaseDuration': string;
                'maxTasks': number;
                'responseView': string;
                'filter': string;
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface AppEngineRouting {
                'service': string;
                'instance': string;
                'version': string;
                'host': string;
            }

            export interface Empty {}

            export interface AppEngineHttpTarget {
                'appEngineRoutingOverride': AppEngineRouting;
            }

            export interface Location {
                'name': string;
                'locationId': string;
                'metadata': {
                    [name: string]: any
                ;
                };
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface AcknowledgeTaskRequest {
                'scheduleTime': string;
            }

            export interface ListQueuesResponse {
                'nextPageToken': string;
                'queues': Queue[];
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface ListLocationsResponse {
                'nextPageToken': string;
                'locations': Location[];
            }

            export interface Policy {
                'bindings': Binding[];
                'etag': string;
                'version': number;
            }

            export interface AppEngineTaskTarget {
                'relativeUrl': string;
                'headers': {
                    [name: string]: string
                ;
                };
                'appEngineRouting': AppEngineRouting;
                'httpMethod': string;
                'payload': string;
            }

            export interface CancelLeaseRequest {
                'scheduleTime': string;
                'responseView': string;
            }

            export interface AttemptStatus {
                'responseStatus': Status;
                'responseTime': string;
                'scheduleTime': string;
                'dispatchTime': string;
            }

            export interface PurgeQueueRequest {}

            export interface PauseQueueRequest {}

            export interface Task {
                'view': string;
                'createTime': string;
                'pullMessage': PullMessage;
                'scheduleTime': string;
                'name': string;
                'appEngineTaskTarget': AppEngineTaskTarget;
                'taskStatus': TaskStatus;
                'appEngineHttpRequest': AppEngineHttpRequest;
                'pullTaskTarget': PullTaskTarget;
            }

            export interface PullTasksResponse {
                'tasks': Task[];
            }

            export interface RunTaskRequest {
                'responseView': string;
            }

            export interface PullMessage {
                'payload': string;
                'tag': string;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface Binding {
                'members': string[];
                'role': string;
            }

        }
    }
}
