// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        sqladmin(version: string): any;
        sqladmin(version: 'v1beta3'): sqladmin.v1beta3.Sqladmin;
    }

    namespace sqladmin {
        namespace v1beta3 {
            export interface Sqladmin {
                new(options: any): Sqladmin;

                'backupRuns': {
                    'get': (parameters: { [key: string]: any; 'backupConfiguration': string, 'dueTime': string, 'instance': string, 'project': string}, callback: (error: any, body: BackupRun, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'backupConfiguration': string, 'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackupRunsListResponse, response: any) => void) => Request;
                };
                'flags': {
                    'list': (parameters: any, callback: (error: any, body: FlagsListResponse, response: any) => void) => Request;
                };
                'instances': {
                    'clone': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: InstancesCloneResponse, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesDeleteResponse, response: any) => void) => Request;
                    'export': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesExportResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: DatabaseInstance, response: any) => void) => Request;
                    'import': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesImportResponse, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: InstancesInsertResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstancesListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesUpdateResponse, response: any) => void) => Request;
                    'promoteReplica': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesPromoteReplicaResponse, response: any) => void) => Request;
                    'resetSslConfig': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesResetSslConfigResponse, response: any) => void) => Request;
                    'restart': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesRestartResponse, response: any) => void) => Request;
                    'restoreBackup': (parameters: { [key: string]: any; 'backupConfiguration': string, 'dueTime': string, 'instance': string, 'project': string}, callback: (error: any, body: InstancesRestoreBackupResponse, response: any) => void) => Request;
                    'setRootPassword': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesSetRootPasswordResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: InstancesUpdateResponse, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: { [key: string]: any; 'instance': string, 'operation': string, 'project': string}, callback: (error: any, body: InstanceOperation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };
                'sslCerts': {
                    'delete': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: SslCertsDeleteResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: SslCert, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: SslCertsInsertResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: SslCertsListResponse, response: any) => void) => Request;
                };
                'tiers': {
                    'list': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: TiersListResponse, response: any) => void) => Request;
                };

            }

            export interface BackupConfiguration {
                'binaryLogEnabled': boolean;
                'enabled': boolean;
                'id': string;
                'kind': string;
                'startTime': string;
            }

            export interface BackupRun {
                'backupConfiguration': string;
                'dueTime': string;
                'endTime': string;
                'enqueuedTime': string;
                'error': OperationError;
                'instance': string;
                'kind': string;
                'startTime': string;
                'status': string;
            }

            export interface BackupRunsListResponse {
                'items': BackupRun[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface BinLogCoordinates {
                'binLogFileName': string;
                'binLogPosition': string;
                'kind': string;
            }

            export interface CloneContext {
                'binLogCoordinates': BinLogCoordinates;
                'destinationInstanceName': string;
                'kind': string;
                'sourceInstanceName': string;
            }

            export interface DatabaseFlags {
                'name': string;
                'value': string;
            }

            export interface DatabaseInstance {
                'connectionName': string;
                'currentDiskSize': string;
                'databaseVersion': string;
                'etag': string;
                'instance': string;
                'instanceType': string;
                'ipAddresses': IpMapping[];
                'ipv6Address': string;
                'kind': string;
                'masterInstanceName': string;
                'maxDiskSize': string;
                'project': string;
                'region': string;
                'replicaNames': string[];
                'serverCaCert': SslCert;
                'serviceAccountEmailAddress': string;
                'settings': Settings;
                'state': string;
            }

            export interface ExportContext {
                'database': string[];
                'kind': string;
                'table': string[];
                'uri': string;
            }

            export interface Flag {
                'allowedStringValues': string[];
                'appliesTo': string[];
                'kind': string;
                'maxValue': string;
                'minValue': string;
                'name': string;
                'type': string;
            }

            export interface FlagsListResponse {
                'items': Flag[];
                'kind': string;
            }

            export interface ImportContext {
                'database': string;
                'kind': string;
                'uri': string[];
            }

            export interface InstanceOperation {
                'endTime': string;
                'enqueuedTime': string;
                'error': OperationError[];
                'exportContext': ExportContext;
                'importContext': ImportContext;
                'instance': string;
                'kind': string;
                'operation': string;
                'operationType': string;
                'startTime': string;
                'state': string;
                'userEmailAddress': string;
            }

            export interface InstanceSetRootPasswordRequest {
                'setRootPasswordContext': SetRootPasswordContext;
            }

            export interface InstancesCloneRequest {
                'cloneContext': CloneContext;
            }

            export interface InstancesCloneResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesDeleteResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesExportRequest {
                'exportContext': ExportContext;
            }

            export interface InstancesExportResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesImportRequest {
                'importContext': ImportContext;
            }

            export interface InstancesImportResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesInsertResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesListResponse {
                'items': DatabaseInstance[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface InstancesPromoteReplicaResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesResetSslConfigResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesRestartResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesRestoreBackupResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesSetRootPasswordResponse {
                'kind': string;
                'operation': string;
            }

            export interface InstancesUpdateResponse {
                'kind': string;
                'operation': string;
            }

            export interface IpConfiguration {
                'authorizedNetworks': string[];
                'enabled': boolean;
                'kind': string;
                'requireSsl': boolean;
            }

            export interface IpMapping {
                'ipAddress': string;
                'timeToRetire': string;
            }

            export interface LocationPreference {
                'followGaeApplication': string;
                'kind': string;
                'zone': string;
            }

            export interface OperationError {
                'code': string;
                'kind': string;
            }

            export interface OperationsListResponse {
                'items': InstanceOperation[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface SetRootPasswordContext {
                'kind': string;
                'password': string;
            }

            export interface Settings {
                'activationPolicy': string;
                'authorizedGaeApplications': string[];
                'backupConfiguration': BackupConfiguration[];
                'databaseFlags': DatabaseFlags[];
                'databaseReplicationEnabled': boolean;
                'ipConfiguration': IpConfiguration;
                'kind': string;
                'locationPreference': LocationPreference;
                'pricingPlan': string;
                'replicationType': string;
                'settingsVersion': string;
                'tier': string;
            }

            export interface SslCert {
                'cert': string;
                'certSerialNumber': string;
                'commonName': string;
                'createTime': string;
                'expirationTime': string;
                'instance': string;
                'kind': string;
                'sha1Fingerprint': string;
            }

            export interface SslCertDetail {
                'certInfo': SslCert;
                'certPrivateKey': string;
            }

            export interface SslCertsDeleteResponse {
                'kind': string;
                'operation': string;
            }

            export interface SslCertsInsertRequest {
                'commonName': string;
            }

            export interface SslCertsInsertResponse {
                'clientCert': SslCertDetail;
                'kind': string;
                'serverCaCert': SslCert;
            }

            export interface SslCertsListResponse {
                'items': SslCert[];
                'kind': string;
            }

            export interface Tier {
                'DiskQuota': string;
                'RAM': string;
                'kind': string;
                'region': string[];
                'tier': string;
            }

            export interface TiersListResponse {
                'items': Tier[];
                'kind': string;
            }

        }
    }
}
