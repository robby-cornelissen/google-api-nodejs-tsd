// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        pubsub(version: string): any;
        pubsub(version: 'v1'): pubsub.v1.Pubsub;
    }

    namespace pubsub {
        namespace v1 {
            export interface Pubsub {
                new(options: any): Pubsub;

                'projects': {
                    'topics': {
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Topic, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'topic': string}, callback: (error: any, body: Topic, response: any) => void) => Request;
                        'publish': (parameters: { [key: string]: any; 'topic': string}, callback: (error: any, body: PublishResponse, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'topic': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'project': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListTopicsResponse, response: any) => void) => Request;

                        'subscriptions': {
                            'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'topic': string}, callback: (error: any, body: ListTopicSubscriptionsResponse, response: any) => void) => Request;
                        };
                    };
                    'snapshots': {
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                    };
                    'subscriptions': {
                        'create': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                        'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'modifyAckDeadline': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'acknowledge': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                        'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        'modifyPushConfig': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'pull': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: PullResponse, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'project': string}, callback: (error: any, body: ListSubscriptionsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface ModifyPushConfigRequest {
                'pushConfig': PushConfig;
            }

            export interface PubsubMessage {
                'messageId': string;
                'attributes': {
                    [name: string]: string
                ;
                };
                'publishTime': string;
                'data': string;
            }

            export interface Binding {
                'members': string[];
                'role': string;
            }

            export interface AcknowledgeRequest {
                'ackIds': string[];
            }

            export interface Empty {}

            export interface ListTopicsResponse {
                'nextPageToken': string;
                'topics': Topic[];
            }

            export interface ListTopicSubscriptionsResponse {
                'nextPageToken': string;
                'subscriptions': string[];
            }

            export interface PullResponse {
                'receivedMessages': ReceivedMessage[];
            }

            export interface ReceivedMessage {
                'message': PubsubMessage;
                'ackId': string;
            }

            export interface PushConfig {
                'attributes': {
                    [name: string]: string
                ;
                };
                'pushEndpoint': string;
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface PullRequest {
                'returnImmediately': boolean;
                'maxMessages': number;
            }

            export interface ListSubscriptionsResponse {
                'nextPageToken': string;
                'subscriptions': Subscription[];
            }

            export interface PublishRequest {
                'messages': PubsubMessage[];
            }

            export interface PublishResponse {
                'messageIds': string[];
            }

            export interface Subscription {
                'topic': string;
                'pushConfig': PushConfig;
                'ackDeadlineSeconds': number;
                'name': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Policy {
                'bindings': Binding[];
                'etag': string;
                'version': number;
            }

            export interface Topic {
                'name': string;
            }

            export interface ModifyAckDeadlineRequest {
                'ackIds': string[];
                'ackDeadlineSeconds': number;
            }

        }
    }
}
