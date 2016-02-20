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

            interface Topic {
                'name': string;
            }

            interface PublishRequest {
                'topic': string;
                'message': PubsubMessage;
            }

            interface PubsubMessage {
                'data': string;
                'label': Label[];
                'messageId': string;
                'publishTime': string;
            }

            interface Label {
                'key': string;
                'strValue': string;
                'numValue': string;
            }

            interface Empty {}

            interface PublishBatchRequest {
                'topic': string;
                'messages': PubsubMessage[];
            }

            interface PublishBatchResponse {
                'messageIds': string[];
            }

            interface ListTopicsResponse {
                'topic': Topic[];
                'nextPageToken': string;
            }

            interface Subscription {
                'name': string;
                'topic': string;
                'pushConfig': PushConfig;
                'ackDeadlineSeconds': number;
            }

            interface PushConfig {
                'pushEndpoint': string;
            }

            interface ListSubscriptionsResponse {
                'subscription': Subscription[];
                'nextPageToken': string;
            }

            interface ModifyPushConfigRequest {
                'subscription': string;
                'pushConfig': PushConfig;
            }

            interface PullRequest {
                'subscription': string;
                'returnImmediately': boolean;
            }

            interface PullResponse {
                'ackId': string;
                'pubsubEvent': PubsubEvent;
            }

            interface PubsubEvent {
                'subscription': string;
                'message': PubsubMessage;
                'truncated': boolean;
                'deleted': boolean;
            }

            interface PullBatchRequest {
                'subscription': string;
                'returnImmediately': boolean;
                'maxEvents': number;
            }

            interface PullBatchResponse {
                'pullResponses': PullResponse[];
            }

            interface ModifyAckDeadlineRequest {
                'subscription': string;
                'ackId': string;
                'ackIds': string[];
                'ackDeadlineSeconds': number;
            }

            interface AcknowledgeRequest {
                'subscription': string;
                'ackId': string[];
            }

        }
    }
}