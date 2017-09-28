// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        sqladmin(version: string): any;
        sqladmin(version: 'v1beta4'): sqladmin.v1beta4.Sqladmin;
    }

    namespace sqladmin {
        namespace v1beta4 {
            export interface Sqladmin {
                new(options: any): Sqladmin;

                'backupRuns': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string, 'instance': string, 'project': string}, callback: (error: any, body: BackupRun, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackupRunsListResponse, response: any) => void) => Request;
                };
                'databases': {
                    'delete': (parameters: { [key: string]: any; 'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Database, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: DatabasesListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'database': string, 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'flags': {
                    'list': (parameters: { [key: string]: any; 'databaseVersion'?: string}, callback: (error: any, body: FlagsListResponse, response: any) => void) => Request;
                };
                'instances': {
                    'clone': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'export': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'failover': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: DatabaseInstance, response: any) => void) => Request;
                    'import': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstancesListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'promoteReplica': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resetSslConfig': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'restart': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'restoreBackup': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'startReplica': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'stopReplica': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'truncateLog': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'operations': {
                    'get': (parameters: { [key: string]: any; 'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'instance': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationsListResponse, response: any) => void) => Request;
                };
                'sslCerts': {
                    'createEphemeral': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: SslCert, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'sha1Fingerprint': string}, callback: (error: any, body: SslCert, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: SslCertsInsertResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: SslCertsListResponse, response: any) => void) => Request;
                };
                'tiers': {
                    'list': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: TiersListResponse, response: any) => void) => Request;
                };
                'users': {
                    'delete': (parameters: { [key: string]: any; 'host': string, 'instance': string, 'name': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'instance': string, 'project': string}, callback: (error: any, body: UsersListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'host': string, 'instance': string, 'name': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
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
                'description': string;
                'endTime': string;
                'enqueuedTime': string;
                'error': OperationError;
                'id': string;
                'instance': string;
                'kind': string;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'type': string;
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
                'backendType': string;
                'connectionName': string;
                'currentDiskSize': string;
                'databaseVersion': string;
                'etag': string;
                'failoverReplica': {
                    'available': boolean;
                    'name': string;
                };
                'gceZone': string;
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
                'suspensionReason': string[];
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
                'importUser': string;
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

            export interface InstancesTruncateLogRequest {
                'truncateLogContext': TruncateLogContext;
            }

            export interface IpConfiguration {
                'authorizedNetworks': AclEntry[];
                'ipv4Enabled': boolean;
                'requireSsl': boolean;
            }

            export interface IpMapping {
                'ipAddress': string;
                'timeToRetire': string;
                'type': string;
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
                'availabilityType': string;
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
                'storageAutoResize': boolean;
                'storageAutoResizeLimit': string;
                'tier': string;
                'userLabels': {
                    [name: string]: string
                ;
                };
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
                'operation': Operation;
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

            export interface TruncateLogContext {
                'kind': string;
                'logType': string;
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
