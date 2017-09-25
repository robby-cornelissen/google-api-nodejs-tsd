// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        admin(version: string): any;
        admin(version: 'reports_v1'): admin.reports_v1.Admin;
    }

    namespace admin {
        namespace reports_v1 {
            export interface Admin {
                new(options: any): Admin;

                'activities': {
                    'list': (parameters: { [key: string]: any; 'actorIpAddress'?: string, 'applicationName': string, 'customerId'?: string, 'endTime'?: string, 'eventName'?: string, 'filters'?: string, 'maxResults'?: number, 'pageToken'?: string, 'startTime'?: string, 'userKey': string}, callback: (error: any, body: Activities, response: any) => void) => Request;
                    'watch': (parameters: { [key: string]: any; 'actorIpAddress'?: string, 'applicationName': string, 'customerId'?: string, 'endTime'?: string, 'eventName'?: string, 'filters'?: string, 'maxResults'?: number, 'pageToken'?: string, 'startTime'?: string, 'userKey': string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'customerUsageReports': {
                    'get': (parameters: { [key: string]: any; 'customerId'?: string, 'date': string, 'pageToken'?: string, 'parameters'?: string}, callback: (error: any, body: UsageReports, response: any) => void) => Request;
                };
                'userUsageReport': {
                    'get': (parameters: { [key: string]: any; 'customerId'?: string, 'date': string, 'filters'?: string, 'maxResults'?: number, 'pageToken'?: string, 'parameters'?: string, 'userKey': string}, callback: (error: any, body: UsageReports, response: any) => void) => Request;
                };

            }

            export interface Activities {
                'etag': string;
                'items': Activity[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Activity {
                'actor': {
                    'callerType': string;
                    'email': string;
                    'key': string;
                    'profileId': string;
                };
                'etag': string;
                'events': {
                    'name': string;
                    'parameters': {
                        'boolValue': boolean;
                        'intValue': string;
                        'multiIntValue': string[];
                        'multiValue': string[];
                        'name': string;
                        'value': string;
                    }[];
                    'type': string;
                }[];
                'id': {
                    'applicationName': string;
                    'customerId': string;
                    'time': string;
                    'uniqueQualifier': string;
                };
                'ipAddress': string;
                'kind': string;
                'ownerDomain': string;
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

            export interface UsageReport {
                'date': string;
                'entity': {
                    'customerId': string;
                    'profileId': string;
                    'type': string;
                    'userEmail': string;
                };
                'etag': string;
                'kind': string;
                'parameters': {
                    'boolValue': boolean;
                    'datetimeValue': string;
                    'intValue': string;
                    'msgValue': {
                        [name: string]: any
                    ;
                    }[];
                    'name': string;
                    'stringValue': string;
                }[];
            }

            export interface UsageReports {
                'etag': string;
                'kind': string;
                'nextPageToken': string;
                'usageReports': UsageReport[];
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
            }

        }
    }
}
