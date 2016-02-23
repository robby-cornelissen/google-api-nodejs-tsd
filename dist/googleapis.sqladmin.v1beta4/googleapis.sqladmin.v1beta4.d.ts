// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        sqladmin(version: string): any;
        sqladmin(version: 'v1beta4'): sqladmin.v1beta4.Sqladmin;
    }

    namespace sqladmin {
        namespace v1beta4 {
            export interface Sqladmin {
                new(options: any): Sqladmin;

                'backupRuns': {
                    'delete': (parameters: {'id': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'instance': string, 'project': string}, callback: (error: any, body: BackupRun, response: any) => void) => Request;
                    'list': (parameters: {'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackupRunsListResponse, response: any) => void) => Request;
                };
                'databases': {
                    'delete': (parameters: {'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Database, response: any) => void) => Request;
                    'insert': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: DatabasesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'flags': {
                    'list': (parameters: any, callback: (error: any, body: FlagsListResponse, response: any) => void) => Request;
                };
                'instances': {
                    'clone': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'export': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'failover': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: DatabaseInstance, response: any) => void) => Request;
                    'import': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstancesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'promoteReplica': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resetSslConfig': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'restart': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'restoreBackup': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'startReplica': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'stopReplica': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };
                'sslCerts': {
                    'createEphemeral': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: SslCert, response: any) => void) => Request;
                    'delete': (parameters: {'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: SslCert, response: any) => void) => Request;
                    'insert': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: SslCertsInsertResponse, response: any) => void) => Request;
                    'list': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: SslCertsListResponse, response: any) => void) => Request;
                };
                'tiers': {
                    'list': (parameters: {'project': string}, callback: (error: any, body: TiersListResponse, response: any) => void) => Request;
                };
                'users': {
                    'delete': (parameters: {'host': string, 'instance': string, 'name': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'insert': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'instance': string, 'project': string}, callback: (error: any, body: UsersListResponse, response: any) => void) => Request;
                    'update': (parameters: {'host': string, 'instance': string, 'name': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };

            }

            export interface AclEntry {
                'expirationTime': string;
                'kind': string;
                'name': string;
                'value': string;
            }

            export interface BackupConfiguration {
                'binaryLogEnabled': boolean;
                'enabled': boolean;
                'kind': string;
                'startTime': string;
            }

            export interface BackupRun {
                'endTime': string;
                'enqueuedTime': string;
                'error': OperationError;
                'id': string;
                'instance': string;
                'kind': string;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'windowStartTime': string;
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
            }

            export interface Database {
                'charset': string;
                'collation': string;
                'etag': string;
                'instance': string;
                'kind': string;
                'name': string;
                'project': string;
                'selfLink': string;
            }

            export interface DatabaseFlags {
                'name': string;
                'value': string;
            }

            export interface DatabaseInstance {
                'currentDiskSize': string;
                'databaseVersion': string;
                'etag': string;
                'failoverReplica': {
                    'available': boolean;
                    'name': string;
                };
                'instanceType': string;
                'ipAddresses': IpMapping[];
                'ipv6Address': string;
                'kind': string;
                'masterInstanceName': string;
                'maxDiskSize': string;
                'name': string;
                'onPremisesConfiguration': OnPremisesConfiguration;
                'project': string;
                'region': string;
                'replicaConfiguration': ReplicaConfiguration;
                'replicaNames': string[];
                'selfLink': string;
                'serverCaCert': SslCert;
                'serviceAccountEmailAddress': string;
                'settings': Settings;
                'state': string;
            }

            export interface DatabasesListResponse {
                'items': Database[];
                'kind': string;
            }

            export interface ExportContext {
                'csvExportOptions': {
                    'selectQuery': string;
                };
                'databases': string[];
                'fileType': string;
                'kind': string;
                'sqlExportOptions': {
                    'schemaOnly': boolean;
                    'tables': string[];
                };
                'uri': string;
            }

            export interface FailoverContext {
                'kind': string;
                'settingsVersion': string;
            }

            export interface Flag {
                'allowedStringValues': string[];
                'appliesTo': string[];
                'kind': string;
                'maxValue': string;
                'minValue': string;
                'name': string;
                'requiresRestart': boolean;
                'type': string;
            }

            export interface FlagsListResponse {
                'items': Flag[];
                'kind': string;
            }

            export interface ImportContext {
                'csvImportOptions': {
                    'columns': string[];
                    'table': string;
                };
                'database': string;
                'fileType': string;
                'kind': string;
                'uri': string;
            }

            export interface InstancesCloneRequest {
                'cloneContext': CloneContext;
            }

            export interface InstancesExportRequest {
                'exportContext': ExportContext;
            }

            export interface InstancesFailoverRequest {
                'failoverContext': FailoverContext;
            }

            export interface InstancesImportRequest {
                'importContext': ImportContext;
            }

            export interface InstancesListResponse {
                'items': DatabaseInstance[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface InstancesRestoreBackupRequest {
                'restoreBackupContext': RestoreBackupContext;
            }

            export interface IpConfiguration {
                'authorizedNetworks': AclEntry[];
                'ipv4Enabled': boolean;
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

            export interface MaintenanceWindow {
                'day': number;
                'hour': number;
                'kind': string;
                'updateTrack': string;
            }

            export interface MySqlReplicaConfiguration {
                'caCertificate': string;
                'clientCertificate': string;
                'clientKey': string;
                'connectRetryInterval': number;
                'dumpFilePath': string;
                'kind': string;
                'masterHeartbeatPeriod': string;
                'password': string;
                'sslCipher': string;
                'username': string;
                'verifyServerCertificate': boolean;
            }

            export interface OnPremisesConfiguration {
                'hostPort': string;
                'kind': string;
            }

            export interface Operation {
                'endTime': string;
                'error': OperationErrors;
                'exportContext': ExportContext;
                'importContext': ImportContext;
                'insertTime': string;
                'kind': string;
                'name': string;
                'operationType': string;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'targetId': string;
                'targetLink': string;
                'targetProject': string;
                'user': string;
            }

            export interface OperationError {
                'code': string;
                'kind': string;
                'message': string;
            }

            export interface OperationErrors {
                'errors': OperationError[];
                'kind': string;
            }

            export interface OperationsListResponse {
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface ReplicaConfiguration {
                'failoverTarget': boolean;
                'kind': string;
                'mysqlReplicaConfiguration': MySqlReplicaConfiguration;
            }

            export interface RestoreBackupContext {
                'backupRunId': string;
                'instanceId': string;
                'kind': string;
            }

            export interface Settings {
                'activationPolicy': string;
                'authorizedGaeApplications': string[];
                'backupConfiguration': BackupConfiguration;
                'crashSafeReplicationEnabled': boolean;
                'dataDiskSizeGb': string;
                'dataDiskType': string;
                'databaseFlags': DatabaseFlags[];
                'databaseReplicationEnabled': boolean;
                'ipConfiguration': IpConfiguration;
                'kind': string;
                'locationPreference': LocationPreference;
                'maintenanceWindow': MaintenanceWindow;
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
                'selfLink': string;
                'sha1Fingerprint': string;
            }

            export interface SslCertDetail {
                'certInfo': SslCert;
                'certPrivateKey': string;
            }

            export interface SslCertsCreateEphemeralRequest {
                'public_key': string;
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

            export interface User {
                'etag': string;
                'host': string;
                'instance': string;
                'kind': string;
                'name': string;
                'password': string;
                'project': string;
            }

            export interface UsersListResponse {
                'items': User[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}