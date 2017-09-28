// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        dns(version: string): any;
        dns(version: 'v2beta1'): dns.v2beta1.Dns;
    }

    namespace dns {
        namespace v2beta1 {
            export interface Dns {
                new(options: any): Dns;

                'changes': {
                    'create': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'managedZone': string, 'project': string}, callback: (error: any, body: Change, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'changeId': string, 'clientOperationId'?: string, 'managedZone': string, 'project': string}, callback: (error: any, body: Change, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'managedZone': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'sortBy'?: string, 'sortOrder'?: string}, callback: (error: any, body: ChangesListResponse, response: any) => void) => Request;
                };
                'dnsKeys': {
                    'get': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'digestType'?: string, 'dnsKeyId': string, 'managedZone': string, 'project': string}, callback: (error: any, body: DnsKey, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'digestType'?: string, 'managedZone': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DnsKeysListResponse, response: any) => void) => Request;
                };
                'managedZoneOperations': {
                    'get': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'managedZone': string, 'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'managedZone': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'sortBy'?: string}, callback: (error: any, body: ManagedZoneOperationsListResponse, response: any) => void) => Request;
                };
                'managedZones': {
                    'create': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'project': string}, callback: (error: any, body: ManagedZone, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'managedZone': string, 'project': string}, callback: (error: any, body: ManagedZonesDeleteResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'managedZone': string, 'project': string}, callback: (error: any, body: ManagedZone, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'dnsName'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ManagedZonesListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'managedZone': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'managedZone': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'projects': {
                    'get': (parameters: { [key: string]: any; 'clientOperationId'?: string, 'project': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                };
                'resourceRecordSets': {
                    'list': (parameters: { [key: string]: any; 'managedZone': string, 'maxResults'?: number, 'name'?: string, 'pageToken'?: string, 'project': string, 'type'?: string}, callback: (error: any, body: ResourceRecordSetsListResponse, response: any) => void) => Request;
                };

            }

            export interface Change {
                'additions': ResourceRecordSet[];
                'deletions': ResourceRecordSet[];
                'id': string;
                'isServing': boolean;
                'kind': string;
                'startTime': string;
                'status': string;
            }

            export interface ChangesListResponse {
                'changes': Change[];
                'header': ResponseHeader;
                'kind': string;
                'nextPageToken': string;
            }

            export interface DnsKey {
                'algorithm': string;
                'creationTime': string;
                'description': string;
                'digests': DnsKeyDigest[];
                'id': string;
                'isActive': boolean;
                'keyLength': number;
                'keyTag': number;
                'kind': string;
                'publicKey': string;
                'type': string;
            }

            export interface DnsKeyDigest {
                'digest': string;
                'type': string;
            }

            export interface DnsKeySpec {
                'algorithm': string;
                'keyLength': number;
                'keyType': string;
                'kind': string;
            }

            export interface DnsKeysListResponse {
                'dnsKeys': DnsKey[];
                'header': ResponseHeader;
                'kind': string;
                'nextPageToken': string;
            }

            export interface ManagedZone {
                'creationTime': string;
                'description': string;
                'dnsName': string;
                'dnssecConfig': ManagedZoneDnsSecConfig;
                'id': string;
                'kind': string;
                'name': string;
                'nameServerSet': string;
                'nameServers': string[];
            }

            export interface ManagedZoneDnsSecConfig {
                'defaultKeySpecs': DnsKeySpec[];
                'kind': string;
                'nonExistence': string;
                'state': string;
            }

            export interface ManagedZoneOperationsListResponse {
                'header': ResponseHeader;
                'kind': string;
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface ManagedZonesDeleteResponse {
                'header': ResponseHeader;
            }

            export interface ManagedZonesListResponse {
                'header': ResponseHeader;
                'kind': string;
                'managedZones': ManagedZone[];
                'nextPageToken': string;
            }

            export interface Operation {
                'dnsKeyContext': OperationDnsKeyContext;
                'id': string;
                'kind': string;
                'startTime': string;
                'status': string;
                'type': string;
                'user': string;
                'zoneContext': OperationManagedZoneContext;
            }

            export interface OperationDnsKeyContext {
                'newValue': DnsKey;
                'oldValue': DnsKey;
            }

            export interface OperationManagedZoneContext {
                'newValue': ManagedZone;
                'oldValue': ManagedZone;
            }

            export interface Project {
                'id': string;
                'kind': string;
                'number': string;
                'quota': Quota;
            }

            export interface Quota {
                'dnsKeysPerManagedZone': number;
                'kind': string;
                'managedZones': number;
                'resourceRecordsPerRrset': number;
                'rrsetAdditionsPerChange': number;
                'rrsetDeletionsPerChange': number;
                'rrsetsPerManagedZone': number;
                'totalRrdataSizePerChange': number;
                'whitelistedKeySpecs': DnsKeySpec[];
            }

            export interface ResourceRecordSet {
                'kind': string;
                'name': string;
                'rrdatas': string[];
                'signatureRrdatas': string[];
                'ttl': number;
                'type': string;
            }

            export interface ResourceRecordSetsListResponse {
                'header': ResponseHeader;
                'kind': string;
                'nextPageToken': string;
                'rrsets': ResourceRecordSet[];
            }

            export interface ResponseHeader {
                'operationId': string;
            }

        }
    }
}
