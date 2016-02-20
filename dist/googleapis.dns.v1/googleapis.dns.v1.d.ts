/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dns(version: string): any;
        dns(version: 'v1'): dns.v1.Dns;
    }

    namespace dns {
        namespace v1 {
            export interface Dns {
                new(options: any): Dns;

                'changes': {
                    'create': (parameters: {'managedZone': string, 'project': string}, callback: (error: any, body: Change, response: any) => void) => Request;
                    'get': (parameters: {'changeId': string, 'managedZone': string, 'project': string}, callback: (error: any, body: Change, response: any) => void) => Request;
                    'list': (parameters: {'managedZone': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'sortBy'?: string, 'sortOrder'?: string}, callback: (error: any, body: ChangesListResponse, response: any) => void) => Request;
                };
                'managedZones': {
                    'create': (parameters: {'project': string}, callback: (error: any, body: ManagedZone, response: any) => void) => Request;
                    'delete': (parameters: {'managedZone': string, 'project': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'managedZone': string, 'project': string}, callback: (error: any, body: ManagedZone, response: any) => void) => Request;
                    'list': (parameters: {'dnsName'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ManagedZonesListResponse, response: any) => void) => Request;
                };
                'projects': {
                    'get': (parameters: {'project': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                };
                'resourceRecordSets': {
                    'list': (parameters: {'managedZone': string, 'maxResults'?: number, 'name'?: string, 'pageToken'?: string, 'project': string, 'type'?: string}, callback: (error: any, body: ResourceRecordSetsListResponse, response: any) => void) => Request;
                };

            }

            interface Change {
                'additions': ResourceRecordSet[];
                'deletions': ResourceRecordSet[];
                'id': string;
                'kind': string;
                'startTime': string;
                'status': string;
            }

            interface ChangesListResponse {
                'changes': Change[];
                'kind': string;
                'nextPageToken': string;
            }

            interface ManagedZone {
                'creationTime': string;
                'description': string;
                'dnsName': string;
                'id': string;
                'kind': string;
                'name': string;
                'nameServerSet': string;
                'nameServers': string[];
            }

            interface ManagedZonesListResponse {
                'kind': string;
                'managedZones': ManagedZone[];
                'nextPageToken': string;
            }

            interface Project {
                'id': string;
                'kind': string;
                'number': string;
                'quota': Quota;
            }

            interface Quota {
                'kind': string;
                'managedZones': number;
                'resourceRecordsPerRrset': number;
                'rrsetAdditionsPerChange': number;
                'rrsetDeletionsPerChange': number;
                'rrsetsPerManagedZone': number;
                'totalRrdataSizePerChange': number;
            }

            interface ResourceRecordSet {
                'kind': string;
                'name': string;
                'rrdatas': string[];
                'ttl': number;
                'type': string;
            }

            interface ResourceRecordSetsListResponse {
                'kind': string;
                'nextPageToken': string;
                'rrsets': ResourceRecordSet[];
            }

        }
    }
}