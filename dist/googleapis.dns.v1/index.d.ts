// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        dns(version: string): any;
        dns(version: 'v1'): dns.v1.Dns;
    }

    namespace dns {
        namespace v1 {
            export interface Dns {
                new(options: any): Dns;

                'changes': {
                    'create': (parameters: { [key: string]: any; 'managedZone': string, 'project': string}, callback: (error: any, body: Change, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'changeId': string, 'managedZone': string, 'project': string}, callback: (error: any, body: Change, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'managedZone': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'sortBy'?: string, 'sortOrder'?: string}, callback: (error: any, body: ChangesListResponse, response: any) => void) => Request;
                };
                'managedZones': {
                    'create': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: ManagedZone, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'managedZone': string, 'project': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'managedZone': string, 'project': string}, callback: (error: any, body: ManagedZone, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'dnsName'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ManagedZonesListResponse, response: any) => void) => Request;
                };
                'projects': {
                    'get': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                };
                'resourceRecordSets': {
                    'list': (parameters: { [key: string]: any; 'managedZone': string, 'maxResults'?: number, 'name'?: string, 'pageToken'?: string, 'project': string, 'type'?: string}, callback: (error: any, body: ResourceRecordSetsListResponse, response: any) => void) => Request;
                };

            }

            export interface Change {
                'additions': ResourceRecordSet[];
                'deletions': ResourceRecordSet[];
                'id': string;
                'kind': string;
                'startTime': string;
                'status': string;
            }

            export interface ChangesListResponse {
                'changes': Change[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface ManagedZone {
                'creationTime': string;
                'description': string;
                'dnsName': string;
                'id': string;
                'kind': string;
                'name': string;
                'nameServerSet': string;
                'nameServers': string[];
            }

            export interface ManagedZonesListResponse {
                'kind': string;
                'managedZones': ManagedZone[];
                'nextPageToken': string;
            }

            export interface Project {
                'id': string;
                'kind': string;
                'number': string;
                'quota': Quota;
            }

            export interface Quota {
                'kind': string;
                'managedZones': number;
                'resourceRecordsPerRrset': number;
                'rrsetAdditionsPerChange': number;
                'rrsetDeletionsPerChange': number;
                'rrsetsPerManagedZone': number;
                'totalRrdataSizePerChange': number;
            }

            export interface ResourceRecordSet {
                'kind': string;
                'name': string;
                'rrdatas': string[];
                'ttl': number;
                'type': string;
            }

            export interface ResourceRecordSetsListResponse {
                'kind': string;
                'nextPageToken': string;
                'rrsets': ResourceRecordSet[];
            }

        }
    }
}
