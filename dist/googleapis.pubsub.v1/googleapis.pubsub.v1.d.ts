// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
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
                        'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        'create': (parameters: {'name': string}, callback: (error: any, body: Topic, response: any) => void) => Request;
                        'publish': (parameters: {'topic': string}, callback: (error: any, body: PublishResponse, response: any) => void) => Request;
                        'get': (parameters: {'topic': string}, callback: (error: any, body: Topic, response: any) => void) => Request;
                        'list': (parameters: {'project': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListTopicsResponse, response: any) => void) => Request;
                        'delete': (parameters: {'topic': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    
                        'subscriptions': {
                            'list': (parameters: {'topic': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListTopicSubscriptionsResponse, response: any) => void) => Request;
                        };
                    };
                    'subscriptions': {
                        'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                        'create': (parameters: {'name': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                        'get': (parameters: {'subscription': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                        'list': (parameters: {'project': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListSubscriptionsResponse, response: any) => void) => Request;
                        'delete': (parameters: {'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'modifyAckDeadline': (parameters: {'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'acknowledge': (parameters: {'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'pull': (parameters: {'subscription': string}, callback: (error: any, body: PullResponse, response: any) => void) => Request;
                        'modifyPushConfig': (parameters: {'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                };

            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface Policy {
                'version': number;
                'bindings': Binding[];
                'etag': string;
            }

            export interface Binding {
                'role': string;
                'members': string[];
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface Topic {
                'name': string;
            }

            export interface PublishRequest {
                'messages': PubsubMessage[];
            }

            export interface PubsubMessage {
                'data': string;
                'attributes': {
                    [name: string]: string
                
                };
                'messageId': string;
                'publishTime': string;
            }

            export interface PublishResponse {
                'messageIds': string[];
            }

            export interface ListTopicsResponse {
                'topics': Topic[];
                'nextPageToken': string;
            }

            export interface ListTopicSubscriptionsResponse {
                'subscriptions': string[];
                'nextPageToken': string;
            }

            export interface Empty {}

            export interface Subscription {
                'name': string;
                'topic': string;
                'pushConfig': PushConfig;
                'ackDeadlineSeconds': number;
            }

            export interface PushConfig {
                'pushEndpoint': string;
                'attributes': {
                    [name: string]: string
                
                };
            }

            export interface ListSubscriptionsResponse {
                'subscriptions': Subscription[];
                'nextPageToken': string;
            }

            export interface ModifyAckDeadlineRequest {
                'ackIds': string[];
                'ackDeadlineSeconds': number;
            }

            export interface AcknowledgeRequest {
                'ackIds': string[];
            }

            export interface PullRequest {
                'returnImmediately': boolean;
                'maxMessages': number;
            }

            export interface PullResponse {
                'receivedMessages': ReceivedMessage[];
            }

            export interface ReceivedMessage {
                'ackId': string;
                'message': PubsubMessage;
            }

            export interface ModifyPushConfigRequest {
                'pushConfig': PushConfig;
            }

        }
    }
}