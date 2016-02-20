/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        sqladmin(version: string): any;
        sqladmin(version: 'v1beta3'): sqladmin.v1beta3.Sqladmin;
    }

    namespace sqladmin {
        namespace v1beta3 {
            export interface Sqladmin {
                new(options: any): Sqladmin;

                'backupRuns': {
                    'get': (parameters: {'backupConfiguration': string, 'dueTime': string, 'instance': string, 'project': string}, callback: (error: any, body: BackupRun, response: any) => void) => Request;
                    'list': (parameters: {'backupConfiguration': string, 'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackupRunsListResponse, response: any) => void) => Request;
                };
                'flags': {
                    'list': (parameters: any, callback: (error: any, body: FlagsListResponse, response: any) => void) => Request;
                };
                'instances': {
                    'clone': (parameters: {'project': string}, callback: (error: any, body: InstancesCloneResponse, response: any) => void) => Request;
                    'delete': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesDeleteResponse, response: any) => void) => Request;
                    'export': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesExportResponse, response: any) => void) => Request;
                    'get': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: DatabaseInstance, response: any) => void) => Request;
                    'import': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesImportResponse, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: InstancesInsertResponse, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstancesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesUpdateResponse, response: any) => void) => Request;
                    'promoteReplica': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesPromoteReplicaResponse, response: any) => void) => Request;
                    'resetSslConfig': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesResetSslConfigResponse, response: any) => void) => Request;
                    'restart': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesRestartResponse, response: any) => void) => Request;
                    'restoreBackup': (parameters: {'backupConfiguration': string, 'dueTime': string, 'instance': string, 'project': string}, callback: (error: any, body: InstancesRestoreBackupResponse, response: any) => void) => Request;
                    'setRootPassword': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesSetRootPasswordResponse, response: any) => void) => Request;
                    'update': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: InstancesUpdateResponse, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: {'instance': string, 'operation': string, 'project': string}, callback: (error: any, body: InstanceOperation, response: any) => void) => Request;
                    'list': (parameters: {'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };
                'sslCerts': {
                    'delete': (parameters: {'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: SslCertsDeleteResponse, response: any) => void) => Request;
                    'get': (parameters: {'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: SslCert, response: any) => void) => Request;
                    'insert': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: SslCertsInsertResponse, response: any) => void) => Request;
                    'list': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: SslCertsListResponse, response: any) => void) => Request;
                };
                'tiers': {
                    'list': (parameters: {'project': string}, callback: (error: any, body: TiersListResponse, response: any) => void) => Request;
                };

            }

            interface BackupConfiguration {
                'binaryLogEnabled': boolean;
                'enabled': boolean;
                'id': string;
                'kind': string;
                'startTime': string;
            }

            interface BackupRun {
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

            interface BackupRunsListResponse {
                'items': BackupRun[];
                'kind': string;
                'nextPageToken': string;
            }

            interface BinLogCoordinates {
                'binLogFileName': string;
                'binLogPosition': string;
                'kind': string;
            }

            interface CloneContext {
                'binLogCoordinates': BinLogCoordinates;
                'destinationInstanceName': string;
                'kind': string;
                'sourceInstanceName': string;
            }

            interface DatabaseFlags {
                'name': string;
                'value': string;
            }

            interface DatabaseInstance {
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

            interface ExportContext {
                'database': string[];
                'kind': string;
                'table': string[];
                'uri': string;
            }

            interface Flag {
                'allowedStringValues': string[];
                'appliesTo': string[];
                'kind': string;
                'maxValue': string;
                'minValue': string;
                'name': string;
                'type': string;
            }

            interface FlagsListResponse {
                'items': Flag[];
                'kind': string;
            }

            interface ImportContext {
                'database': string;
                'kind': string;
                'uri': string[];
            }

            interface InstanceOperation {
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

            interface InstanceSetRootPasswordRequest {
                'setRootPasswordContext': SetRootPasswordContext;
            }

            interface InstancesCloneRequest {
                'cloneContext': CloneContext;
            }

            interface InstancesCloneResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesDeleteResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesExportRequest {
                'exportContext': ExportContext;
            }

            interface InstancesExportResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesImportRequest {
                'importContext': ImportContext;
            }

            interface InstancesImportResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesInsertResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesListResponse {
                'items': DatabaseInstance[];
                'kind': string;
                'nextPageToken': string;
            }

            interface InstancesPromoteReplicaResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesResetSslConfigResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesRestartResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesRestoreBackupResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesSetRootPasswordResponse {
                'kind': string;
                'operation': string;
            }

            interface InstancesUpdateResponse {
                'kind': string;
                'operation': string;
            }

            interface IpConfiguration {
                'authorizedNetworks': string[];
                'enabled': boolean;
                'kind': string;
                'requireSsl': boolean;
            }

            interface IpMapping {
                'ipAddress': string;
                'timeToRetire': string;
            }

            interface LocationPreference {
                'followGaeApplication': string;
                'kind': string;
                'zone': string;
            }

            interface OperationError {
                'code': string;
                'kind': string;
            }

            interface OperationsListResponse {
                'items': InstanceOperation[];
                'kind': string;
                'nextPageToken': string;
            }

            interface SetRootPasswordContext {
                'kind': string;
                'password': string;
            }

            interface Settings {
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

            interface SslCert {
                'cert': string;
                'certSerialNumber': string;
                'commonName': string;
                'createTime': string;
                'expirationTime': string;
                'instance': string;
                'kind': string;
                'sha1Fingerprint': string;
            }

            interface SslCertDetail {
                'certInfo': SslCert;
                'certPrivateKey': string;
            }

            interface SslCertsDeleteResponse {
                'kind': string;
                'operation': string;
            }

            interface SslCertsInsertRequest {
                'commonName': string;
            }

            interface SslCertsInsertResponse {
                'clientCert': SslCertDetail;
                'kind': string;
                'serverCaCert': SslCert;
            }

            interface SslCertsListResponse {
                'items': SslCert[];
                'kind': string;
            }

            interface Tier {
                'DiskQuota': string;
                'RAM': string;
                'kind': string;
                'region': string[];
                'tier': string;
            }

            interface TiersListResponse {
                'items': Tier[];
                'kind': string;
            }

        }
    }
}