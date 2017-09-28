// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        calendar(version: string): any;
        calendar(version: 'v3'): calendar.v3.Calendar;
    }

    namespace calendar {
        namespace v3 {
            export interface Calendar {
                new(options: any): Calendar;

                'acl': {
                    'delete': (parameters: { [key: string]: any; 'calendarId': string, 'ruleId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'calendarId': string, 'ruleId': string}, callback: (error: any, body: AclRule, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: AclRule, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'calendarId': string, 'maxResults'?: number, 'pageToken'?: string, 'showDeleted'?: boolean, 'syncToken'?: string}, callback: (error: any, body: Acl, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'calendarId': string, 'ruleId': string}, callback: (error: any, body: AclRule, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'calendarId': string, 'ruleId': string}, callback: (error: any, body: AclRule, response: any) => void) => Request;
                    'watch': (parameters: { [key: string]: any; 'calendarId': string, 'maxResults'?: number, 'pageToken'?: string, 'showDeleted'?: boolean, 'syncToken'?: string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'calendarList': {
                    'delete': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: CalendarListEntry, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'colorRgbFormat'?: boolean}, callback: (error: any, body: CalendarListEntry, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'minAccessRole'?: string, 'pageToken'?: string, 'showDeleted'?: boolean, 'showHidden'?: boolean, 'syncToken'?: string}, callback: (error: any, body: CalendarList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'calendarId': string, 'colorRgbFormat'?: boolean}, callback: (error: any, body: CalendarListEntry, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'calendarId': string, 'colorRgbFormat'?: boolean}, callback: (error: any, body: CalendarListEntry, response: any) => void) => Request;
                    'watch': (parameters: { [key: string]: any; 'maxResults'?: number, 'minAccessRole'?: string, 'pageToken'?: string, 'showDeleted'?: boolean, 'showHidden'?: boolean, 'syncToken'?: string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'calendars': {
                    'clear': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: Calendar, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Calendar, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: Calendar, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'calendarId': string}, callback: (error: any, body: Calendar, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'colors': {
                    'get': (parameters: any, callback: (error: any, body: Colors, response: any) => void) => Request;
                };
                'events': {
                    'delete': (parameters: { [key: string]: any; 'calendarId': string, 'eventId': string, 'sendNotifications'?: boolean}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'alwaysIncludeEmail'?: boolean, 'calendarId': string, 'eventId': string, 'maxAttendees'?: number, 'timeZone'?: string}, callback: (error: any, body: Event, response: any) => void) => Request;
                    'import': (parameters: { [key: string]: any; 'calendarId': string, 'supportsAttachments'?: boolean}, callback: (error: any, body: Event, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'calendarId': string, 'maxAttendees'?: number, 'sendNotifications'?: boolean, 'supportsAttachments'?: boolean}, callback: (error: any, body: Event, response: any) => void) => Request;
                    'instances': (parameters: { [key: string]: any; 'alwaysIncludeEmail'?: boolean, 'calendarId': string, 'eventId': string, 'maxAttendees'?: number, 'maxResults'?: number, 'originalStart'?: string, 'pageToken'?: string, 'showDeleted'?: boolean, 'timeMax'?: string, 'timeMin'?: string, 'timeZone'?: string}, callback: (error: any, body: Events, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'alwaysIncludeEmail'?: boolean, 'calendarId': string, 'iCalUID'?: string, 'maxAttendees'?: number, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'privateExtendedProperty'?: string, 'q'?: string, 'sharedExtendedProperty'?: string, 'showDeleted'?: boolean, 'showHiddenInvitations'?: boolean, 'singleEvents'?: boolean, 'syncToken'?: string, 'timeMax'?: string, 'timeMin'?: string, 'timeZone'?: string, 'updatedMin'?: string}, callback: (error: any, body: Events, response: any) => void) => Request;
                    'move': (parameters: { [key: string]: any; 'calendarId': string, 'destination': string, 'eventId': string, 'sendNotifications'?: boolean}, callback: (error: any, body: Event, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'alwaysIncludeEmail'?: boolean, 'calendarId': string, 'eventId': string, 'maxAttendees'?: number, 'sendNotifications'?: boolean, 'supportsAttachments'?: boolean}, callback: (error: any, body: Event, response: any) => void) => Request;
                    'quickAdd': (parameters: { [key: string]: any; 'calendarId': string, 'sendNotifications'?: boolean, 'text': string}, callback: (error: any, body: Event, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'alwaysIncludeEmail'?: boolean, 'calendarId': string, 'eventId': string, 'maxAttendees'?: number, 'sendNotifications'?: boolean, 'supportsAttachments'?: boolean}, callback: (error: any, body: Event, response: any) => void) => Request;
                    'watch': (parameters: { [key: string]: any; 'alwaysIncludeEmail'?: boolean, 'calendarId': string, 'iCalUID'?: string, 'maxAttendees'?: number, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'privateExtendedProperty'?: string, 'q'?: string, 'sharedExtendedProperty'?: string, 'showDeleted'?: boolean, 'showHiddenInvitations'?: boolean, 'singleEvents'?: boolean, 'syncToken'?: string, 'timeMax'?: string, 'timeMin'?: string, 'timeZone'?: string, 'updatedMin'?: string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'freebusy': {
                    'query': (parameters: any, callback: (error: any, body: FreeBusyResponse, response: any) => void) => Request;
                };
                'settings': {
                    'get': (parameters: { [key: string]: any; 'setting': string}, callback: (error: any, body: Setting, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'syncToken'?: string}, callback: (error: any, body: Settings, response: any) => void) => Request;
                    'watch': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'syncToken'?: string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };

            }

            export interface Acl {
                'etag': string;
                'items': AclRule[];
                'kind': string;
                'nextPageToken': string;
                'nextSyncToken': string;
            }

            export interface AclRule {
                'etag': string;
                'id': string;
                'kind': string;
                'role': string;
                'scope': {
                    'type': string;
                    'value': string;
                };
            }

            export interface Calendar {
                'description': string;
                'etag': string;
                'id': string;
                'kind': string;
                'location': string;
                'summary': string;
                'timeZone': string;
            }

            export interface CalendarList {
                'etag': string;
                'items': CalendarListEntry[];
                'kind': string;
                'nextPageToken': string;
                'nextSyncToken': string;
            }

            export interface CalendarListEntry {
                'accessRole': string;
                'backgroundColor': string;
                'colorId': string;
                'defaultReminders': EventReminder[];
                'deleted': boolean;
                'description': string;
                'etag': string;
                'foregroundColor': string;
                'hidden': boolean;
                'id': string;
                'kind': string;
                'location': string;
                'notificationSettings': {
                    'notifications': CalendarNotification[];
                };
                'primary': boolean;
                'selected': boolean;
                'summary': string;
                'summaryOverride': string;
                'timeZone': string;
            }

            export interface CalendarNotification {
                'method': string;
                'type': string;
            }

            export interface Channel {
                'address': string;
                'expiration': string;
                'id': string;
                'kind': string;
                'params': {
                    [name: string]: string
                ;
                };
                'payload': boolean;
                'resourceId': string;
                'resourceUri': string;
                'token': string;
                'type': string;
            }

            export interface ColorDefinition {
                'background': string;
                'foreground': string;
            }

            export interface Colors {
                'calendar': {
                    [name: string]: ColorDefinition
                ;
                };
                'event': {
                    [name: string]: ColorDefinition
                ;
                };
                'kind': string;
                'updated': string;
            }

            export interface Error {
                'domain': string;
                'reason': string;
            }

            export interface Event {
                'anyoneCanAddSelf': boolean;
                'attachments': EventAttachment[];
                'attendees': EventAttendee[];
                'attendeesOmitted': boolean;
                'colorId': string;
                'created': string;
                'creator': {
                    'displayName': string;
                    'email': string;
                    'id': string;
                    'self': boolean;
                };
                'description': string;
                'end': EventDateTime;
                'endTimeUnspecified': boolean;
                'etag': string;
                'extendedProperties': {
                    'private': {
                        [name: string]: string
                    ;
                    };
                    'shared': {
                        [name: string]: string
                    ;
                    };
                };
                'gadget': {
                    'display': string;
                    'height': number;
                    'iconLink': string;
                    'link': string;
                    'preferences': {
                        [name: string]: string
                    ;
                    };
                    'title': string;
                    'type': string;
                    'width': number;
                };
                'guestsCanInviteOthers': boolean;
                'guestsCanModify': boolean;
                'guestsCanSeeOtherGuests': boolean;
                'hangoutLink': string;
                'htmlLink': string;
                'iCalUID': string;
                'id': string;
                'kind': string;
                'location': string;
                'locked': boolean;
                'organizer': {
                    'displayName': string;
                    'email': string;
                    'id': string;
                    'self': boolean;
                };
                'originalStartTime': EventDateTime;
                'privateCopy': boolean;
                'recurrence': string[];
                'recurringEventId': string;
                'reminders': {
                    'overrides': EventReminder[];
                    'useDefault': boolean;
                };
                'sequence': number;
                'source': {
                    'title': string;
                    'url': string;
                };
                'start': EventDateTime;
                'status': string;
                'summary': string;
                'transparency': string;
                'updated': string;
                'visibility': string;
            }

            export interface EventAttachment {
                'fileId': string;
                'fileUrl': string;
                'iconLink': string;
                'mimeType': string;
                'title': string;
            }

            export interface EventAttendee {
                'additionalGuests': number;
                'comment': string;
                'displayName': string;
                'email': string;
                'id': string;
                'optional': boolean;
                'organizer': boolean;
                'resource': boolean;
                'responseStatus': string;
                'self': boolean;
            }

            export interface EventDateTime {
                'date': string;
                'dateTime': string;
                'timeZone': string;
            }

            export interface EventReminder {
                'method': string;
                'minutes': number;
            }

            export interface Events {
                'accessRole': string;
                'defaultReminders': EventReminder[];
                'description': string;
                'etag': string;
                'items': Event[];
                'kind': string;
                'nextPageToken': string;
                'nextSyncToken': string;
                'summary': string;
                'timeZone': string;
                'updated': string;
            }

            export interface FreeBusyCalendar {
                'busy': TimePeriod[];
                'errors': Error[];
            }

            export interface FreeBusyGroup {
                'calendars': string[];
                'errors': Error[];
            }

            export interface FreeBusyRequest {
                'calendarExpansionMax': number;
                'groupExpansionMax': number;
                'items': FreeBusyRequestItem[];
                'timeMax': string;
                'timeMin': string;
                'timeZone': string;
            }

            export interface FreeBusyRequestItem {
                'id': string;
            }

            export interface FreeBusyResponse {
                'calendars': {
                    [name: string]: FreeBusyCalendar
                ;
                };
                'groups': {
                    [name: string]: FreeBusyGroup
                ;
                };
                'kind': string;
                'timeMax': string;
                'timeMin': string;
            }

            export interface Setting {
                'etag': string;
                'id': string;
                'kind': string;
                'value': string;
            }

            export interface Settings {
                'etag': string;
                'items': Setting[];
                'kind': string;
                'nextPageToken': string;
                'nextSyncToken': string;
            }

            export interface TimePeriod {
                'end': string;
                'start': string;
            }

        }
    }
}
