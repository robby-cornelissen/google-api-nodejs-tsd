// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        mirror(version: string): any;
        mirror(version: 'v1'): mirror.v1.Mirror;
    }

    namespace mirror {
        namespace v1 {
            export interface Mirror {
                new(options: any): Mirror;

                'accounts': {
                    'insert': (parameters: { [key: string]: any; 'accountName': string, 'accountType': string, 'userToken': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'contacts': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Contact, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Contact, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: ContactsListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Contact, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Contact, response: any) => void) => Request;
                };
                'locations': {
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: LocationsListResponse, response: any) => void) => Request;
                };
                'settings': {
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Setting, response: any) => void) => Request;
                };
                'subscriptions': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: SubscriptionsListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                };
                'timeline': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: TimelineItem, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: TimelineItem, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'bundleId'?: string, 'includeDeleted'?: boolean, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'pinnedOnly'?: boolean, 'sourceItemId'?: string}, callback: (error: any, body: TimelineListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: TimelineItem, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: TimelineItem, response: any) => void) => Request;

                    'attachments': {
                        'delete': (parameters: { [key: string]: any; 'attachmentId': string, 'itemId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'attachmentId': string, 'itemId': string}, callback: (error: any, body: Attachment, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'itemId': string}, callback: (error: any, body: Attachment, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'itemId': string}, callback: (error: any, body: AttachmentsListResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface Account {
                'authTokens': AuthToken[];
                'features': string[];
                'password': string;
                'userData': UserData[];
            }

            export interface Attachment {
                'contentType': string;
                'contentUrl': string;
                'id': string;
                'isProcessingContent': boolean;
            }

            export interface AttachmentsListResponse {
                'items': Attachment[];
                'kind': string;
            }

            export interface AuthToken {
                'authToken': string;
                'type': string;
            }

            export interface Command {
                'type': string;
            }

            export interface Contact {
                'acceptCommands': Command[];
                'acceptTypes': string[];
                'displayName': string;
                'id': string;
                'imageUrls': string[];
                'kind': string;
                'phoneNumber': string;
                'priority': number;
                'sharingFeatures': string[];
                'source': string;
                'speakableName': string;
                'type': string;
            }

            export interface ContactsListResponse {
                'items': Contact[];
                'kind': string;
            }

            export interface Location {
                'accuracy': number;
                'address': string;
                'displayName': string;
                'id': string;
                'kind': string;
                'latitude': number;
                'longitude': number;
                'timestamp': string;
            }

            export interface LocationsListResponse {
                'items': Location[];
                'kind': string;
            }

            export interface MenuItem {
                'action': string;
                'contextual_command': string;
                'id': string;
                'payload': string;
                'removeWhenSelected': boolean;
                'values': MenuValue[];
            }

            export interface MenuValue {
                'displayName': string;
                'iconUrl': string;
                'state': string;
            }

            export interface Notification {
                'collection': string;
                'itemId': string;
                'operation': string;
                'userActions': UserAction[];
                'userToken': string;
                'verifyToken': string;
            }

            export interface NotificationConfig {
                'deliveryTime': string;
                'level': string;
            }

            export interface Setting {
                'id': string;
                'kind': string;
                'value': string;
            }

            export interface Subscription {
                'callbackUrl': string;
                'collection': string;
                'id': string;
                'kind': string;
                'notification': Notification;
                'operation': string[];
                'updated': string;
                'userToken': string;
                'verifyToken': string;
            }

            export interface SubscriptionsListResponse {
                'items': Subscription[];
                'kind': string;
            }

            export interface TimelineItem {
                'attachments': Attachment[];
                'bundleId': string;
                'canonicalUrl': string;
                'created': string;
                'creator': Contact;
                'displayTime': string;
                'etag': string;
                'html': string;
                'id': string;
                'inReplyTo': string;
                'isBundleCover': boolean;
                'isDeleted': boolean;
                'isPinned': boolean;
                'kind': string;
                'location': Location;
                'menuItems': MenuItem[];
                'notification': NotificationConfig;
                'pinScore': number;
                'recipients': Contact[];
                'selfLink': string;
                'sourceItemId': string;
                'speakableText': string;
                'speakableType': string;
                'text': string;
                'title': string;
                'updated': string;
            }

            export interface TimelineListResponse {
                'items': TimelineItem[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface UserAction {
                'payload': string;
                'type': string;
            }

            export interface UserData {
                'key': string;
                'value': string;
            }

        }
    }
}
