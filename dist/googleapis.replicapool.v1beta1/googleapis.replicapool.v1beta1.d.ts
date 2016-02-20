/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        replicapool(version: string): any;
        replicapool(version: 'v1beta1'): replicapool.v1beta1.Replicapool;
    }

    namespace replicapool {
        namespace v1beta1 {
            export interface Replicapool {
                new(options: any): Replicapool;

                'pools': {
                    'delete': (parameters: {'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: Pool, response: any) => void) => Request;
                    'insert': (parameters: {'projectName': string, 'zone': string}, callback: (error: any, body: Pool, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'projectName': string, 'zone': string}, callback: (error: any, body: PoolsListResponse, response: any) => void) => Request;
                    'resize': (parameters: {'numReplicas'?: number, 'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: Pool, response: any) => void) => Request;
                    'updatetemplate': (parameters: {'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'replicas': {
                    'delete': (parameters: {'poolName': string, 'projectName': string, 'replicaName': string, 'zone': string}, callback: (error: any, body: Replica, response: any) => void) => Request;
                    'get': (parameters: {'poolName': string, 'projectName': string, 'replicaName': string, 'zone': string}, callback: (error: any, body: Replica, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: ReplicasListResponse, response: any) => void) => Request;
                    'restart': (parameters: {'poolName': string, 'projectName': string, 'replicaName': string, 'zone': string}, callback: (error: any, body: Replica, response: any) => void) => Request;
                };

            }

            interface AccessConfig {
                'name': string;
                'natIp': string;
                'type': string;
            }

            interface Action {
                'commands': string[];
                'envVariables': EnvVariable[];
                'timeoutMilliSeconds': number;
            }

            interface DiskAttachment {
                'deviceName': string;
                'index': number;
            }

            interface EnvVariable {
                'hidden': boolean;
                'name': string;
                'value': string;
            }

            interface ExistingDisk {
                'attachment': DiskAttachment;
                'source': string;
            }

            interface HealthCheck {
                'checkIntervalSec': number;
                'description': string;
                'healthyThreshold': number;
                'host': string;
                'name': string;
                'path': string;
                'port': number;
                'timeoutSec': number;
                'unhealthyThreshold': number;
            }

            interface Label {
                'key': string;
                'value': string;
            }

            interface Metadata {
                'fingerPrint': string;
                'items': MetadataItem[];
            }

            interface MetadataItem {
                'key': string;
                'value': string;
            }

            interface NetworkInterface {
                'accessConfigs': AccessConfig[];
                'network': string;
                'networkIp': string;
            }

            interface NewDisk {
                'attachment': DiskAttachment;
                'autoDelete': boolean;
                'boot': boolean;
                'initializeParams': NewDiskInitializeParams;
            }

            interface NewDiskInitializeParams {
                'diskSizeGb': string;
                'diskType': string;
                'sourceImage': string;
            }

            interface Pool {
                'autoRestart': boolean;
                'baseInstanceName': string;
                'currentNumReplicas': number;
                'description': string;
                'healthChecks': HealthCheck[];
                'initialNumReplicas': number;
                'labels': Label[];
                'name': string;
                'numReplicas': number;
                'resourceViews': string[];
                'selfLink': string;
                'targetPool': string;
                'targetPools': string[];
                'template': Template;
                'type': string;
            }

            interface PoolsDeleteRequest {
                'abandonInstances': string[];
            }

            interface PoolsListResponse {
                'nextPageToken': string;
                'resources': Pool[];
            }

            interface Replica {
                'name': string;
                'selfLink': string;
                'status': ReplicaStatus;
            }

            interface ReplicaStatus {
                'details': string;
                'state': string;
                'templateVersion': string;
                'vmLink': string;
                'vmStartTime': string;
            }

            interface ReplicasDeleteRequest {
                'abandonInstance': boolean;
            }

            interface ReplicasListResponse {
                'nextPageToken': string;
                'resources': Replica[];
            }

            interface ServiceAccount {
                'email': string;
                'scopes': string[];
            }

            interface Tag {
                'fingerPrint': string;
                'items': string[];
            }

            interface Template {
                'action': Action;
                'healthChecks': HealthCheck[];
                'version': string;
                'vmParams': VmParams;
            }

            interface VmParams {
                'baseInstanceName': string;
                'canIpForward': boolean;
                'description': string;
                'disksToAttach': ExistingDisk[];
                'disksToCreate': NewDisk[];
                'machineType': string;
                'metadata': Metadata;
                'networkInterfaces': NetworkInterface[];
                'onHostMaintenance': string;
                'serviceAccounts': ServiceAccount[];
                'tags': Tag;
            }

        }
    }
}