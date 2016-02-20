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

            interface SetIamPolicyRequest {
                'policy': Policy;
            }

            interface Policy {
                'version': number;
                'bindings': Binding[];
                'etag': string;
            }

            interface Binding {
                'role': string;
                'members': string[];
            }

            interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            interface Topic {
                'name': string;
            }

            interface PublishRequest {
                'messages': PubsubMessage[];
            }

            interface PubsubMessage {
                'data': string;
                'attributes': {
                    [name: string]: string
                };
                'messageId': string;
                'publishTime': string;
            }

            interface PublishResponse {
                'messageIds': string[];
            }

            interface ListTopicsResponse {
                'topics': Topic[];
                'nextPageToken': string;
            }

            interface ListTopicSubscriptionsResponse {
                'subscriptions': string[];
                'nextPageToken': string;
            }

            interface Empty {}

            interface Subscription {
                'name': string;
                'topic': string;
                'pushConfig': PushConfig;
                'ackDeadlineSeconds': number;
            }

            interface PushConfig {
                'pushEndpoint': string;
                'attributes': {
                    [name: string]: string
                };
            }

            interface ListSubscriptionsResponse {
                'subscriptions': Subscription[];
                'nextPageToken': string;
            }

            interface ModifyAckDeadlineRequest {
                'ackIds': string[];
                'ackDeadlineSeconds': number;
            }

            interface AcknowledgeRequest {
                'ackIds': string[];
            }

            interface PullRequest {
                'returnImmediately': boolean;
                'maxMessages': number;
            }

            interface PullResponse {
                'receivedMessages': ReceivedMessage[];
            }

            interface ReceivedMessage {
                'ackId': string;
                'message': PubsubMessage;
            }

            interface ModifyPushConfigRequest {
                'pushConfig': PushConfig;
            }

        }
    }
}