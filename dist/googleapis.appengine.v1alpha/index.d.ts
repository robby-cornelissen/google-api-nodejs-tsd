// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        appengine(version: string): any;
        appengine(version: 'v1alpha'): appengine.v1alpha.Appengine;
    }

    namespace appengine {
        namespace v1alpha {
            export interface Appengine {
                new(options: any): Appengine;

                'apps': {
                    'locations': {
                        'get': (parameters: { [key: string]: any; 'locationsId': string, 'appsId': string}, callback: (error: any, body: Location, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListLocationsResponse, response: any) => void) => Request;
                    };
                    'domainMappings': {
                        'delete': (parameters: { [key: string]: any; 'appsId': string, 'domainMappingsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'appsId': string, 'domainMappingsId': string, 'noManagedCertificate'?: boolean, 'updateMask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'domainMappingsId': string}, callback: (error: any, body: DomainMapping, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListDomainMappingsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'noManagedCertificate'?: boolean, 'appsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    };
                    'authorizedCertificates': {
                        'create': (parameters: { [key: string]: any; 'appsId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'authorizedCertificatesId': string, 'appsId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'appsId': string, 'authorizedCertificatesId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'view'?: string, 'authorizedCertificatesId': string}, callback: (error: any, body: AuthorizedCertificate, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number, 'view'?: string}, callback: (error: any, body: ListAuthorizedCertificatesResponse, response: any) => void) => Request;
                    };
                    'authorizedDomains': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListAuthorizedDomainsResponse, response: any) => void) => Request;
                    };
                    'operations': {
                        'get': (parameters: { [key: string]: any; 'appsId': string, 'operationsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'filter'?: string, 'pageToken'?: string, 'appsId': string, 'pageSize'?: number}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface ListAuthorizedDomainsResponse {
                'nextPageToken': string;
                'domains': AuthorizedDomain[];
            }

            export interface AuthorizedDomain {
                'name': string;
                'id': string;
            }

            export interface Empty {}

            export interface DomainMapping {
                'sslSettings': SslSettings;
                'name': string;
                'resourceRecords': ResourceRecord[];
                'id': string;
            }

            export interface LocationMetadata {
                'standardEnvironmentAvailable': boolean;
                'flexibleEnvironmentAvailable': boolean;
            }

            export interface OperationMetadataV1Beta {
                'method': string;
                'endTime': string;
                'warning': string[];
                'insertTime': string;
                'user': string;
                'target': string;
                'ephemeralMessage': string;
            }

            export interface Location {
                'labels': {
                    [name: string]: string
                ;
                };
                'name': string;
                'locationId': string;
                'metadata': {
                    [name: string]: any
                ;
                };
            }

            export interface AuthorizedCertificate {
                'domainMappingsCount': number;
                'domainNames': string[];
                'id': string;
                'displayName': string;
                'certificateRawData': CertificateRawData;
                'managedCertificate': ManagedCertificate;
                'visibleDomainMappings': string[];
                'expireTime': string;
                'name': string;
            }

            export interface ResourceRecord {
                'name': string;
                'type': string;
                'rrdata': string;
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface OperationMetadata {
                'insertTime': string;
                'user': string;
                'target': string;
                'method': string;
                'endTime': string;
                'operationType': string;
            }

            export interface ListAuthorizedCertificatesResponse {
                'nextPageToken': string;
                'certificates': AuthorizedCertificate[];
            }

            export interface OperationMetadataV1Beta5 {
                'method': string;
                'insertTime': string;
                'endTime': string;
                'target': string;
                'user': string;
            }

            export interface ListLocationsResponse {
                'locations': Location[];
                'nextPageToken': string;
            }

            export interface ManagedCertificate {
                'lastRenewalTime': string;
                'status': string;
            }

            export interface OperationMetadataV1 {
                'warning': string[];
                'insertTime': string;
                'user': string;
                'target': string;
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
            }

            export interface SslSettings {
                'isManagedCertificate': boolean;
                'certificateId': string;
            }

            export interface CertificateRawData {
                'privateKey': string;
                'publicCertificate': string;
            }

            export interface Operation {
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
            }

            export interface ListDomainMappingsResponse {
                'domainMappings': DomainMapping[];
                'nextPageToken': string;
            }

            export interface OperationMetadataExperimental {
                'insertTime': string;
                'endTime': string;
                'target': string;
                'user': string;
                'method': string;
            }

            export interface OperationMetadataV1Alpha {
                'warning': string[];
                'insertTime': string;
                'user': string;
                'target': string;
                'ephemeralMessage': string;
                'method': string;
                'endTime': string;
            }

        }
    }
}
