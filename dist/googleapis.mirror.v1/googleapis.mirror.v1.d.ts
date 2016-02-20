/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        mirror(version: string): any;
        mirror(version: 'v1'): mirror.v1.Mirror;
    }

    namespace mirror {
        namespace v1 {
            export interface Mirror {
                new(options: any): Mirror;

                'accounts': {
                    'insert': (parameters: {'accountName': string, 'accountType': string, 'userToken': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'contacts': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string}, callback: (error: any, body: Contact, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Contact, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: ContactsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string}, callback: (error: any, body: Contact, response: any) => void) => Request;
                    'update': (parameters: {'id': string}, callback: (error: any, body: Contact, response: any) => void) => Request;
                };
                'locations': {
                    'get': (parameters: {'id': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: LocationsListResponse, response: any) => void) => Request;
                };
                'settings': {
                    'get': (parameters: {'id': string}, callback: (error: any, body: Setting, response: any) => void) => Request;
                };
                'subscriptions': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: SubscriptionsListResponse, response: any) => void) => Request;
                    'update': (parameters: {'id': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                };
                'timeline': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string}, callback: (error: any, body: TimelineItem, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: TimelineItem, response: any) => void) => Request;
                    'list': (parameters: {'bundleId'?: string, 'includeDeleted'?: boolean, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'pinnedOnly'?: boolean, 'sourceItemId'?: string}, callback: (error: any, body: TimelineListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string}, callback: (error: any, body: TimelineItem, response: any) => void) => Request;
                    'update': (parameters: {'id': string}, callback: (error: any, body: TimelineItem, response: any) => void) => Request;
                
                    'attachments': {
                        'delete': (parameters: {'attachmentId': string, 'itemId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'attachmentId': string, 'itemId': string}, callback: (error: any, body: Attachment, response: any) => void) => Request;
                        'insert': (parameters: {'itemId': string}, callback: (error: any, body: Attachment, response: any) => void) => Request;
                        'list': (parameters: {'itemId': string}, callback: (error: any, body: AttachmentsListResponse, response: any) => void) => Request;
                    };
                };

            }

            interface Account {
                'authTokens': AuthToken[];
                'features': string[];
                'password': string;
                'userData': UserData[];
            }

            interface Attachment {
                'contentType': string;
                'contentUrl': string;
                'id': string;
                'isProcessingContent': boolean;
            }

            interface AttachmentsListResponse {
                'items': Attachment[];
                'kind': string;
            }

            interface AuthToken {
                'authToken': string;
                'type': string;
            }

            interface Command {
                'type': string;
            }

            interface Contact {
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

            interface ContactsListResponse {
                'items': Contact[];
                'kind': string;
            }

            interface Location {
                'accuracy': number;
                'address': string;
                'displayName': string;
                'id': string;
                'kind': string;
                'latitude': number;
                'longitude': number;
                'timestamp': string;
            }

            interface LocationsListResponse {
                'items': Location[];
                'kind': string;
            }

            interface MenuItem {
                'action': string;
                'contextual_command': string;
                'id': string;
                'payload': string;
                'removeWhenSelected': boolean;
                'values': MenuValue[];
            }

            interface MenuValue {
                'displayName': string;
                'iconUrl': string;
                'state': string;
            }

            interface Notification {
                'collection': string;
                'itemId': string;
                'operation': string;
                'userActions': UserAction[];
                'userToken': string;
                'verifyToken': string;
            }

            interface NotificationConfig {
                'deliveryTime': string;
                'level': string;
            }

            interface Setting {
                'id': string;
                'kind': string;
                'value': string;
            }

            interface Subscription {
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

            interface SubscriptionsListResponse {
                'items': Subscription[];
                'kind': string;
            }

            interface TimelineItem {
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

            interface TimelineListResponse {
                'items': TimelineItem[];
                'kind': string;
                'nextPageToken': string;
            }

            interface UserAction {
                'payload': string;
                'type': string;
            }

            interface UserData {
                'key': string;
                'value': string;
            }

        }
    }
}