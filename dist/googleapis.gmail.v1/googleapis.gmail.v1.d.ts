/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        gmail(version: string): any;
        gmail(version: 'v1'): gmail.v1.Gmail;
    }

    namespace gmail {
        namespace v1 {
            export interface Gmail {
                new(options: any): Gmail;

                'users': {
                    'getProfile': (parameters: {'userId': string}, callback: (error: any, body: Profile, response: any) => void) => Request;
                    'stop': (parameters: {'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'watch': (parameters: {'userId': string}, callback: (error: any, body: WatchResponse, response: any) => void) => Request;
                
                    'drafts': {
                        'create': (parameters: {'userId': string}, callback: (error: any, body: Draft, response: any) => void) => Request;
                        'delete': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'format'?: string, 'id': string, 'userId': string}, callback: (error: any, body: Draft, response: any) => void) => Request;
                        'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'userId': string}, callback: (error: any, body: ListDraftsResponse, response: any) => void) => Request;
                        'send': (parameters: {'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'update': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Draft, response: any) => void) => Request;
                    };
                    'history': {
                        'list': (parameters: {'labelId'?: string, 'maxResults'?: number, 'pageToken'?: string, 'startHistoryId'?: string, 'userId': string}, callback: (error: any, body: ListHistoryResponse, response: any) => void) => Request;
                    };
                    'labels': {
                        'create': (parameters: {'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                        'delete': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                        'list': (parameters: {'userId': string}, callback: (error: any, body: ListLabelsResponse, response: any) => void) => Request;
                        'patch': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                        'update': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                    };
                    'messages': {
                        'delete': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'format'?: string, 'id': string, 'metadataHeaders'?: string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'import': (parameters: {'deleted'?: boolean, 'internalDateSource'?: string, 'neverMarkSpam'?: boolean, 'processForCalendar'?: boolean, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'insert': (parameters: {'deleted'?: boolean, 'internalDateSource'?: string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'list': (parameters: {'includeSpamTrash'?: boolean, 'labelIds'?: string, 'maxResults'?: number, 'pageToken'?: string, 'q'?: string, 'userId': string}, callback: (error: any, body: ListMessagesResponse, response: any) => void) => Request;
                        'modify': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'send': (parameters: {'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'trash': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'untrash': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                    
                        'attachments': {
                            'get': (parameters: {'id': string, 'messageId': string, 'userId': string}, callback: (error: any, body: MessagePartBody, response: any) => void) => Request;
                        };
                    };
                    'threads': {
                        'delete': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'format'?: string, 'id': string, 'metadataHeaders'?: string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                        'list': (parameters: {'includeSpamTrash'?: boolean, 'labelIds'?: string, 'maxResults'?: number, 'pageToken'?: string, 'q'?: string, 'userId': string}, callback: (error: any, body: ListThreadsResponse, response: any) => void) => Request;
                        'modify': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                        'trash': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                        'untrash': (parameters: {'id': string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                    };
                };

            }

            interface Draft {
                'id': string;
                'message': Message;
            }

            interface History {
                'id': string;
                'labelsAdded': HistoryLabelAdded[];
                'labelsRemoved': HistoryLabelRemoved[];
                'messages': Message[];
                'messagesAdded': HistoryMessageAdded[];
                'messagesDeleted': HistoryMessageDeleted[];
            }

            interface HistoryLabelAdded {
                'labelIds': string[];
                'message': Message;
            }

            interface HistoryLabelRemoved {
                'labelIds': string[];
                'message': Message;
            }

            interface HistoryMessageAdded {
                'message': Message;
            }

            interface HistoryMessageDeleted {
                'message': Message;
            }

            interface Label {
                'id': string;
                'labelListVisibility': string;
                'messageListVisibility': string;
                'messagesTotal': number;
                'messagesUnread': number;
                'name': string;
                'threadsTotal': number;
                'threadsUnread': number;
                'type': string;
            }

            interface ListDraftsResponse {
                'drafts': Draft[];
                'nextPageToken': string;
                'resultSizeEstimate': number;
            }

            interface ListHistoryResponse {
                'history': History[];
                'historyId': string;
                'nextPageToken': string;
            }

            interface ListLabelsResponse {
                'labels': Label[];
            }

            interface ListMessagesResponse {
                'messages': Message[];
                'nextPageToken': string;
                'resultSizeEstimate': number;
            }

            interface ListThreadsResponse {
                'nextPageToken': string;
                'resultSizeEstimate': number;
                'threads': Thread[];
            }

            interface Message {
                'historyId': string;
                'id': string;
                'internalDate': string;
                'labelIds': string[];
                'payload': MessagePart;
                'raw': string;
                'sizeEstimate': number;
                'snippet': string;
                'threadId': string;
            }

            interface MessagePart {
                'body': MessagePartBody;
                'filename': string;
                'headers': MessagePartHeader[];
                'mimeType': string;
                'partId': string;
                'parts': MessagePart[];
            }

            interface MessagePartBody {
                'attachmentId': string;
                'data': string;
                'size': number;
            }

            interface MessagePartHeader {
                'name': string;
                'value': string;
            }

            interface ModifyMessageRequest {
                'addLabelIds': string[];
                'removeLabelIds': string[];
            }

            interface ModifyThreadRequest {
                'addLabelIds': string[];
                'removeLabelIds': string[];
            }

            interface Profile {
                'emailAddress': string;
                'historyId': string;
                'messagesTotal': number;
                'threadsTotal': number;
            }

            interface Thread {
                'historyId': string;
                'id': string;
                'messages': Message[];
                'snippet': string;
            }

            interface WatchRequest {
                'labelFilterAction': string;
                'labelIds': string[];
                'topicName': string;
            }

            interface WatchResponse {
                'expiration': string;
                'historyId': string;
            }

        }
    }
}