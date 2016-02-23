// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        pubsub(version: string): any;
        pubsub(version: 'v1beta1a'): pubsub.v1beta1a.Pubsub;
    }

    namespace pubsub {
        namespace v1beta1a {
            export interface Pubsub {
                new(options: any): Pubsub;

                'topics': {
                    'create': (parameters: any, callback: (error: any, body: Topic, response: any) => void) => Request;
                    'publish': (parameters: any, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'publishBatch': (parameters: any, callback: (error: any, body: PublishBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'topic': string}, callback: (error: any, body: Topic, response: any) => void) => Request;
                    'list': (parameters: {'query'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: ListTopicsResponse, response: any) => void) => Request;
                    'delete': (parameters: {'topic': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'subscriptions': {
                    'create': (parameters: any, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'get': (parameters: {'subscription': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'list': (parameters: {'query'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: ListSubscriptionsResponse, response: any) => void) => Request;
                    'delete': (parameters: {'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'modifyPushConfig': (parameters: any, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'pull': (parameters: any, callback: (error: any, body: PullResponse, response: any) => void) => Request;
                    'pullBatch': (parameters: any, callback: (error: any, body: PullBatchResponse, response: any) => void) => Request;
                    'modifyAckDeadline': (parameters: any, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'acknowledge': (parameters: any, callback: (error: any, body: Empty, response: any) => void) => Request;
                };

            }

            export interface Topic {
                'name': string;
            }

            export interface PublishRequest {
                'topic': string;
                'message': PubsubMessage;
            }

            export interface PubsubMessage {
                'data': string;
                'label': Label[];
                'messageId': string;
                'publishTime': string;
            }

            export interface Label {
                'key': string;
                'strValue': string;
                'numValue': string;
            }

            export interface Empty {}

            export interface PublishBatchRequest {
                'topic': string;
                'messages': PubsubMessage[];
            }

            export interface PublishBatchResponse {
                'messageIds': string[];
            }

            export interface ListTopicsResponse {
                'topic': Topic[];
                'nextPageToken': string;
            }

            export interface Subscription {
                'name': string;
                'topic': string;
                'pushConfig': PushConfig;
                'ackDeadlineSeconds': number;
            }

            export interface PushConfig {
                'pushEndpoint': string;
            }

            export interface ListSubscriptionsResponse {
                'subscription': Subscription[];
                'nextPageToken': string;
            }

            export interface ModifyPushConfigRequest {
                'subscription': string;
                'pushConfig': PushConfig;
            }

            export interface PullRequest {
                'subscription': string;
                'returnImmediately': boolean;
            }

            export interface PullResponse {
                'ackId': string;
                'pubsubEvent': PubsubEvent;
            }

            export interface PubsubEvent {
                'subscription': string;
                'message': PubsubMessage;
                'truncated': boolean;
                'deleted': boolean;
            }

            export interface PullBatchRequest {
                'subscription': string;
                'returnImmediately': boolean;
                'maxEvents': number;
            }

            export interface PullBatchResponse {
                'pullResponses': PullResponse[];
            }

            export interface ModifyAckDeadlineRequest {
                'subscription': string;
                'ackId': string;
                'ackIds': string[];
                'ackDeadlineSeconds': number;
            }

            export interface AcknowledgeRequest {
                'subscription': string;
                'ackId': string[];
            }

        }
    }
}