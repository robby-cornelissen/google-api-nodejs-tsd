// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        pubsub(version: string): any;
        pubsub(version: 'v1beta1a'): pubsub.v1beta1a.Pubsub;
    }

    namespace pubsub {
        namespace v1beta1a {
            export interface Pubsub {
                new(options: any): Pubsub;

                'subscriptions': {
                    'modifyAckDeadline': (parameters: { [key: string]: any; }, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'acknowledge': (parameters: { [key: string]: any; }, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'pullBatch': (parameters: { [key: string]: any; }, callback: (error: any, body: PullBatchResponse, response: any) => void) => Request;
                    'modifyPushConfig': (parameters: { [key: string]: any; }, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'subscription': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'pull': (parameters: { [key: string]: any; }, callback: (error: any, body: PullResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'maxResults'?: number, 'query'?: string}, callback: (error: any, body: ListSubscriptionsResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Subscription, response: any) => void) => Request;
                };
                'topics': {
                    'publish': (parameters: { [key: string]: any; }, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'topic': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'publishBatch': (parameters: { [key: string]: any; }, callback: (error: any, body: PublishBatchResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'maxResults'?: number, 'query'?: string}, callback: (error: any, body: ListTopicsResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Topic, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'topic': string}, callback: (error: any, body: Topic, response: any) => void) => Request;
                };

            }

            export interface PubsubEvent {
                'message': PubsubMessage;
                'subscription': string;
                'deleted': boolean;
                'truncated': boolean;
            }

            export interface ListSubscriptionsResponse {
                'subscription': Subscription[];
                'nextPageToken': string;
            }

            export interface PublishRequest {
                'topic': string;
                'message': PubsubMessage;
            }

            export interface PublishBatchResponse {
                'messageIds': string[];
            }

            export interface Subscription {
                'pushConfig': PushConfig;
                'ackDeadlineSeconds': number;
                'name': string;
                'topic': string;
            }

            export interface Topic {
                'name': string;
            }

            export interface Label {
                'strValue': string;
                'numValue': string;
                'key': string;
            }

            export interface ModifyAckDeadlineRequest {
                'ackDeadlineSeconds': number;
                'ackIds': string[];
                'subscription': string;
                'ackId': string;
            }

            export interface PullBatchRequest {
                'subscription': string;
                'returnImmediately': boolean;
                'maxEvents': number;
            }

            export interface ModifyPushConfigRequest {
                'pushConfig': PushConfig;
                'subscription': string;
            }

            export interface PubsubMessage {
                'publishTime': string;
                'label': Label[];
                'data': string;
                'messageId': string;
            }

            export interface PullBatchResponse {
                'pullResponses': PullResponse[];
            }

            export interface AcknowledgeRequest {
                'subscription': string;
                'ackId': string[];
            }

            export interface Empty {}

            export interface PublishBatchRequest {
                'messages': PubsubMessage[];
                'topic': string;
            }

            export interface ListTopicsResponse {
                'nextPageToken': string;
                'topic': Topic[];
            }

            export interface PullResponse {
                'ackId': string;
                'pubsubEvent': PubsubEvent;
            }

            export interface PushConfig {
                'pushEndpoint': string;
            }

            export interface PullRequest {
                'subscription': string;
                'returnImmediately': boolean;
            }

        }
    }
}
