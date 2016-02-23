// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        manager(version: string): any;
        manager(version: 'v1beta2'): manager.v1beta2.Manager;
    }

    namespace manager {
        namespace v1beta2 {
            export interface Manager {
                new(options: any): Manager;

                'deployments': {
                    'delete': (parameters: {'deploymentName': string, 'projectId': string, 'region': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'deploymentName': string, 'projectId': string, 'region': string}, callback: (error: any, body: Deployment, response: any) => void) => Request;
                    'insert': (parameters: {'projectId': string, 'region': string}, callback: (error: any, body: Deployment, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'projectId': string, 'region': string}, callback: (error: any, body: DeploymentsListResponse, response: any) => void) => Request;
                };
                'templates': {
                    'delete': (parameters: {'projectId': string, 'templateName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'projectId': string, 'templateName': string}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'insert': (parameters: {'projectId': string}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'projectId': string}, callback: (error: any, body: TemplatesListResponse, response: any) => void) => Request;
                };

            }

            export interface AccessConfig {
                'name': string;
                'natIp': string;
                'type': string;
            }

            export interface Action {
                'commands': string[];
                'timeoutMs': number;
            }

            export interface AllowedRule {
                'IPProtocol': string;
                'ports': string[];
            }

            export interface AutoscalingModule {
                'coolDownPeriodSec': number;
                'description': string;
                'maxNumReplicas': number;
                'minNumReplicas': number;
                'signalType': string;
                'targetModule': string;
                'targetUtilization': number;
            }

            export interface AutoscalingModuleStatus {
                'autoscalingConfigUrl': string;
            }

            export interface DeployState {
                'details': string;
                'status': string;
            }

            export interface Deployment {
                'creationDate': string;
                'description': string;
                'modules': {
                    [name: string]: ModuleStatus
                
                };
                'name': string;
                'overrides': ParamOverride[];
                'state': DeployState;
                'templateName': string;
            }

            export interface DeploymentsListResponse {
                'nextPageToken': string;
                'resources': Deployment[];
            }

            export interface DiskAttachment {
                'deviceName': string;
                'index': number;
            }

            export interface EnvVariable {
                'hidden': boolean;
                'value': string;
            }

            export interface ExistingDisk {
                'attachment': DiskAttachment;
                'source': string;
            }

            export interface FirewallModule {
                'allowed': AllowedRule[];
                'description': string;
                'network': string;
                'sourceRanges': string[];
                'sourceTags': string[];
                'targetTags': string[];
            }

            export interface FirewallModuleStatus {
                'firewallUrl': string;
            }

            export interface HealthCheckModule {
                'checkIntervalSec': number;
                'description': string;
                'healthyThreshold': number;
                'host': string;
                'path': string;
                'port': number;
                'timeoutSec': number;
                'unhealthyThreshold': number;
            }

            export interface HealthCheckModuleStatus {
                'healthCheckUrl': string;
            }

            export interface LbModule {
                'description': string;
                'healthChecks': string[];
                'ipAddress': string;
                'ipProtocol': string;
                'portRange': string;
                'sessionAffinity': string;
                'targetModules': string[];
            }

            export interface LbModuleStatus {
                'forwardingRuleUrl': string;
                'targetPoolUrl': string;
            }

            export interface Metadata {
                'fingerPrint': string;
                'items': MetadataItem[];
            }

            export interface MetadataItem {
                'key': string;
                'value': string;
            }

            export interface Module {
                'autoscalingModule': AutoscalingModule;
                'firewallModule': FirewallModule;
                'healthCheckModule': HealthCheckModule;
                'lbModule': LbModule;
                'networkModule': NetworkModule;
                'replicaPoolModule': ReplicaPoolModule;
                'type': string;
            }

            export interface ModuleStatus {
                'autoscalingModuleStatus': AutoscalingModuleStatus;
                'firewallModuleStatus': FirewallModuleStatus;
                'healthCheckModuleStatus': HealthCheckModuleStatus;
                'lbModuleStatus': LbModuleStatus;
                'networkModuleStatus': NetworkModuleStatus;
                'replicaPoolModuleStatus': ReplicaPoolModuleStatus;
                'state': DeployState;
                'type': string;
            }

            export interface NetworkInterface {
                'accessConfigs': AccessConfig[];
                'name': string;
                'network': string;
                'networkIp': string;
            }

            export interface NetworkModule {
                'IPv4Range': string;
                'description': string;
                'gatewayIPv4': string;
            }

            export interface NetworkModuleStatus {
                'networkUrl': string;
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

            export interface ParamOverride {
                'path': string;
                'value': string;
            }

            export interface ReplicaPoolModule {
                'envVariables': {
                    [name: string]: EnvVariable
                
                };
                'healthChecks': string[];
                'numReplicas': number;
                'replicaPoolParams': ReplicaPoolParams;
                'resourceView': string;
            }

            export interface ReplicaPoolModuleStatus {
                'replicaPoolUrl': string;
                'resourceViewUrl': string;
            }

            export interface ReplicaPoolParams {
                'v1beta1': ReplicaPoolParamsV1Beta1;
            }

            export interface ReplicaPoolParamsV1Beta1 {
                'autoRestart': boolean;
                'baseInstanceName': string;
                'canIpForward': boolean;
                'description': string;
                'disksToAttach': ExistingDisk[];
                'disksToCreate': NewDisk[];
                'initAction': string;
                'machineType': string;
                'metadata': Metadata;
                'networkInterfaces': NetworkInterface[];
                'onHostMaintenance': string;
                'serviceAccounts': ServiceAccount[];
                'tags': Tag;
                'zone': string;
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
                'actions': {
                    [name: string]: Action
                
                };
                'description': string;
                'modules': {
                    [name: string]: Module
                
                };
                'name': string;
            }

            export interface TemplatesListResponse {
                'nextPageToken': string;
                'resources': Template[];
            }

        }
    }
}