// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        gmail(version: string): any;
        gmail(version: 'v1'): gmail.v1.Gmail;
    }

    namespace gmail {
        namespace v1 {
            export interface Gmail {
                new(options: any): Gmail;

                'users': {
                    'getProfile': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: Profile, response: any) => void) => Request;
                    'stop': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'watch': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: WatchResponse, response: any) => void) => Request;

                    'drafts': {
                        'create': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: Draft, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'format'?: string, 'id': string, 'userId': string}, callback: (error: any, body: Draft, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'includeSpamTrash'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'q'?: string, 'userId': string}, callback: (error: any, body: ListDraftsResponse, response: any) => void) => Request;
                        'send': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Draft, response: any) => void) => Request;
                    };
                    'history': {
                        'list': (parameters: { [key: string]: any; 'historyTypes'?: string, 'labelId'?: string, 'maxResults'?: number, 'pageToken'?: string, 'startHistoryId'?: string, 'userId': string}, callback: (error: any, body: ListHistoryResponse, response: any) => void) => Request;
                    };
                    'labels': {
                        'create': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: ListLabelsResponse, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Label, response: any) => void) => Request;
                    };
                    'messages': {
                        'batchDelete': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'batchModify': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'format'?: string, 'id': string, 'metadataHeaders'?: string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'import': (parameters: { [key: string]: any; 'deleted'?: boolean, 'internalDateSource'?: string, 'neverMarkSpam'?: boolean, 'processForCalendar'?: boolean, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'deleted'?: boolean, 'internalDateSource'?: string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'includeSpamTrash'?: boolean, 'labelIds'?: string, 'maxResults'?: number, 'pageToken'?: string, 'q'?: string, 'userId': string}, callback: (error: any, body: ListMessagesResponse, response: any) => void) => Request;
                        'modify': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'send': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'trash': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;
                        'untrash': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Message, response: any) => void) => Request;

                        'attachments': {
                            'get': (parameters: { [key: string]: any; 'id': string, 'messageId': string, 'userId': string}, callback: (error: any, body: MessagePartBody, response: any) => void) => Request;
                        };
                    };
                    'settings': {
                        'getAutoForwarding': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: AutoForwarding, response: any) => void) => Request;
                        'getImap': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: ImapSettings, response: any) => void) => Request;
                        'getPop': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: PopSettings, response: any) => void) => Request;
                        'getVacation': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: VacationSettings, response: any) => void) => Request;
                        'updateAutoForwarding': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: AutoForwarding, response: any) => void) => Request;
                        'updateImap': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: ImapSettings, response: any) => void) => Request;
                        'updatePop': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: PopSettings, response: any) => void) => Request;
                        'updateVacation': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: VacationSettings, response: any) => void) => Request;

                        'filters': {
                            'create': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: Filter, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Filter, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: ListFiltersResponse, response: any) => void) => Request;
                        };
                        'forwardingAddresses': {
                            'create': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: ForwardingAddress, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'forwardingEmail': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'forwardingEmail': string, 'userId': string}, callback: (error: any, body: ForwardingAddress, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: ListForwardingAddressesResponse, response: any) => void) => Request;
                        };
                        'sendAs': {
                            'create': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: SendAs, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: SendAs, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: ListSendAsResponse, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: SendAs, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: SendAs, response: any) => void) => Request;
                            'verify': (parameters: { [key: string]: any; 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;

                            'smimeInfo': {
                                'delete': (parameters: { [key: string]: any; 'id': string, 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'id': string, 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: SmimeInfo, response: any) => void) => Request;
                                'insert': (parameters: { [key: string]: any; 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: SmimeInfo, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: ListSmimeInfoResponse, response: any) => void) => Request;
                                'setDefault': (parameters: { [key: string]: any; 'id': string, 'sendAsEmail': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                            };
                        };
                    };
                    'threads': {
                        'delete': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'format'?: string, 'id': string, 'metadataHeaders'?: string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'includeSpamTrash'?: boolean, 'labelIds'?: string, 'maxResults'?: number, 'pageToken'?: string, 'q'?: string, 'userId': string}, callback: (error: any, body: ListThreadsResponse, response: any) => void) => Request;
                        'modify': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                        'trash': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                        'untrash': (parameters: { [key: string]: any; 'id': string, 'userId': string}, callback: (error: any, body: Thread, response: any) => void) => Request;
                    };
                };

            }

            export interface AutoForwarding {
                'disposition': string;
                'emailAddress': string;
                'enabled': boolean;
            }

            export interface BatchDeleteMessagesRequest {
                'ids': string[];
            }

            export interface BatchModifyMessagesRequest {
                'addLabelIds': string[];
                'ids': string[];
                'removeLabelIds': string[];
            }

            export interface Draft {
                'id': string;
                'message': Message;
            }

            export interface Filter {
                'action': FilterAction;
                'criteria': FilterCriteria;
                'id': string;
            }

            export interface FilterAction {
                'addLabelIds': string[];
                'forward': string;
                'removeLabelIds': string[];
            }

            export interface FilterCriteria {
                'excludeChats': boolean;
                'from': string;
                'hasAttachment': boolean;
                'negatedQuery': string;
                'query': string;
                'size': number;
                'sizeComparison': string;
                'subject': string;
                'to': string;
            }

            export interface ForwardingAddress {
                'forwardingEmail': string;
                'verificationStatus': string;
            }

            export interface History {
                'id': string;
                'labelsAdded': HistoryLabelAdded[];
                'labelsRemoved': HistoryLabelRemoved[];
                'messages': Message[];
                'messagesAdded': HistoryMessageAdded[];
                'messagesDeleted': HistoryMessageDeleted[];
            }

            export interface HistoryLabelAdded {
                'labelIds': string[];
                'message': Message;
            }

            export interface HistoryLabelRemoved {
                'labelIds': string[];
                'message': Message;
            }

            export interface HistoryMessageAdded {
                'message': Message;
            }

            export interface HistoryMessageDeleted {
                'message': Message;
            }

            export interface ImapSettings {
                'autoExpunge': boolean;
                'enabled': boolean;
                'expungeBehavior': string;
                'maxFolderSize': number;
            }

            export interface Label {
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

            export interface ListDraftsResponse {
                'drafts': Draft[];
                'nextPageToken': string;
                'resultSizeEstimate': number;
            }

            export interface ListFiltersResponse {
                'filter': Filter[];
            }

            export interface ListForwardingAddressesResponse {
                'forwardingAddresses': ForwardingAddress[];
            }

            export interface ListHistoryResponse {
                'history': History[];
                'historyId': string;
                'nextPageToken': string;
            }

            export interface ListLabelsResponse {
                'labels': Label[];
            }

            export interface ListMessagesResponse {
                'messages': Message[];
                'nextPageToken': string;
                'resultSizeEstimate': number;
            }

            export interface ListSendAsResponse {
                'sendAs': SendAs[];
            }

            export interface ListSmimeInfoResponse {
                'smimeInfo': SmimeInfo[];
            }

            export interface ListThreadsResponse {
                'nextPageToken': string;
                'resultSizeEstimate': number;
                'threads': Thread[];
            }

            export interface Message {
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

            export interface MessagePart {
                'body': MessagePartBody;
                'filename': string;
                'headers': MessagePartHeader[];
                'mimeType': string;
                'partId': string;
                'parts': MessagePart[];
            }

            export interface MessagePartBody {
                'attachmentId': string;
                'data': string;
                'size': number;
            }

            export interface MessagePartHeader {
                'name': string;
                'value': string;
            }

            export interface ModifyMessageRequest {
                'addLabelIds': string[];
                'removeLabelIds': string[];
            }

            export interface ModifyThreadRequest {
                'addLabelIds': string[];
                'removeLabelIds': string[];
            }

            export interface PopSettings {
                'accessWindow': string;
                'disposition': string;
            }

            export interface Profile {
                'emailAddress': string;
                'historyId': string;
                'messagesTotal': number;
                'threadsTotal': number;
            }

            export interface SendAs {
                'displayName': string;
                'isDefault': boolean;
                'isPrimary': boolean;
                'replyToAddress': string;
                'sendAsEmail': string;
                'signature': string;
                'smtpMsa': SmtpMsa;
                'treatAsAlias': boolean;
                'verificationStatus': string;
            }

            export interface SmimeInfo {
                'encryptedKeyPassword': string;
                'expiration': string;
                'id': string;
                'isDefault': boolean;
                'issuerCn': string;
                'pem': string;
                'pkcs12': string;
            }

            export interface SmtpMsa {
                'host': string;
                'password': string;
                'port': number;
                'securityMode': string;
                'username': string;
            }

            export interface Thread {
                'historyId': string;
                'id': string;
                'messages': Message[];
                'snippet': string;
            }

            export interface VacationSettings {
                'enableAutoReply': boolean;
                'endTime': string;
                'responseBodyHtml': string;
                'responseBodyPlainText': string;
                'responseSubject': string;
                'restrictToContacts': boolean;
                'restrictToDomain': boolean;
                'startTime': string;
            }

            export interface WatchRequest {
                'labelFilterAction': string;
                'labelIds': string[];
                'topicName': string;
            }

            export interface WatchResponse {
                'expiration': string;
                'historyId': string;
            }

        }
    }
}
