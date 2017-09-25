// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        replicapool(version: string): any;
        replicapool(version: 'v1beta1'): replicapool.v1beta1.Replicapool;
    }

    namespace replicapool {
        namespace v1beta1 {
            export interface Replicapool {
                new(options: any): Replicapool;

                'pools': {
                    'delete': (parameters: { [key: string]: any; 'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: Pool, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'projectName': string, 'zone': string}, callback: (error: any, body: Pool, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'projectName': string, 'zone': string}, callback: (error: any, body: PoolsListResponse, response: any) => void) => Request;
                    'resize': (parameters: { [key: string]: any; 'numReplicas'?: number, 'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: Pool, response: any) => void) => Request;
                    'updatetemplate': (parameters: { [key: string]: any; 'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'replicas': {
                    'delete': (parameters: { [key: string]: any; 'poolName': string, 'projectName': string, 'replicaName': string, 'zone': string}, callback: (error: any, body: Replica, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'poolName': string, 'projectName': string, 'replicaName': string, 'zone': string}, callback: (error: any, body: Replica, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'poolName': string, 'projectName': string, 'zone': string}, callback: (error: any, body: ReplicasListResponse, response: any) => void) => Request;
                    'restart': (parameters: { [key: string]: any; 'poolName': string, 'projectName': string, 'replicaName': string, 'zone': string}, callback: (error: any, body: Replica, response: any) => void) => Request;
                };

            }

            export interface AccessConfig {
                'name': string;
                'natIp': string;
                'type': string;
            }

            export interface Action {
                'commands': string[];
                'envVariables': EnvVariable[];
                'timeoutMilliSeconds': number;
            }

            export interface DiskAttachment {
                'deviceName': string;
                'index': number;
            }

            export interface EnvVariable {
                'hidden': boolean;
                'name': string;
                'value': string;
            }

            export interface ExistingDisk {
                'attachment': DiskAttachment;
                'source': string;
            }

            export interface HealthCheck {
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

            export interface Label {
                'key': string;
                'value': string;
            }

            export interface Metadata {
                'fingerPrint': string;
                'items': MetadataItem[];
            }

            export interface MetadataItem {
                'key': string;
                'value': string;
            }

            export interface NetworkInterface {
                'accessConfigs': AccessConfig[];
                'network': string;
                'networkIp': string;
            }

            export interface NewDisk {
                'attachment': DiskAttachment;
                'autoDelete': boolean;
                'boot': boolean;
                'initializeParams': NewDiskInitializeParams;
            }

            export interface NewDiskInitializeParams {
                'diskSizeGb': string;
                'diskType': string;
                'sourceImage': string;
            }

            export interface Pool {
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

            export interface PoolsDeleteRequest {
                'abandonInstances': string[];
            }

            export interface PoolsListResponse {
                'nextPageToken': string;
                'resources': Pool[];
            }

            export interface Replica {
                'name': string;
                'selfLink': string;
                'status': ReplicaStatus;
            }

            export interface ReplicaStatus {
                'details': string;
                'state': string;
                'templateVersion': string;
                'vmLink': string;
                'vmStartTime': string;
            }

            export interface ReplicasDeleteRequest {
                'abandonInstance': boolean;
            }

            export interface ReplicasListResponse {
                'nextPageToken': string;
                'resources': Replica[];
            }

            export interface ServiceAccount {
                'email': string;
                'scopes': string[];
            }

            export interface Tag {
                'fingerPrint': string;
                'items': string[];
            }

            export interface Template {
                'action': Action;
                'healthChecks': HealthCheck[];
                'version': string;
                'vmParams': VmParams;
            }

            export interface VmParams {
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
