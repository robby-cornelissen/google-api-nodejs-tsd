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

            interface AccessConfig {
                'name': string;
                'natIp': string;
                'type': string;
            }

            interface Action {
                'commands': string[];
                'timeoutMs': number;
            }

            interface AllowedRule {
                'IPProtocol': string;
                'ports': string[];
            }

            interface AutoscalingModule {
                'coolDownPeriodSec': number;
                'description': string;
                'maxNumReplicas': number;
                'minNumReplicas': number;
                'signalType': string;
                'targetModule': string;
                'targetUtilization': number;
            }

            interface AutoscalingModuleStatus {
                'autoscalingConfigUrl': string;
            }

            interface DeployState {
                'details': string;
                'status': string;
            }

            interface Deployment {
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

            interface DeploymentsListResponse {
                'nextPageToken': string;
                'resources': Deployment[];
            }

            interface DiskAttachment {
                'deviceName': string;
                'index': number;
            }

            interface EnvVariable {
                'hidden': boolean;
                'value': string;
            }

            interface ExistingDisk {
                'attachment': DiskAttachment;
                'source': string;
            }

            interface FirewallModule {
                'allowed': AllowedRule[];
                'description': string;
                'network': string;
                'sourceRanges': string[];
                'sourceTags': string[];
                'targetTags': string[];
            }

            interface FirewallModuleStatus {
                'firewallUrl': string;
            }

            interface HealthCheckModule {
                'checkIntervalSec': number;
                'description': string;
                'healthyThreshold': number;
                'host': string;
                'path': string;
                'port': number;
                'timeoutSec': number;
                'unhealthyThreshold': number;
            }

            interface HealthCheckModuleStatus {
                'healthCheckUrl': string;
            }

            interface LbModule {
                'description': string;
                'healthChecks': string[];
                'ipAddress': string;
                'ipProtocol': string;
                'portRange': string;
                'sessionAffinity': string;
                'targetModules': string[];
            }

            interface LbModuleStatus {
                'forwardingRuleUrl': string;
                'targetPoolUrl': string;
            }

            interface Metadata {
                'fingerPrint': string;
                'items': MetadataItem[];
            }

            interface MetadataItem {
                'key': string;
                'value': string;
            }

            interface Module {
                'autoscalingModule': AutoscalingModule;
                'firewallModule': FirewallModule;
                'healthCheckModule': HealthCheckModule;
                'lbModule': LbModule;
                'networkModule': NetworkModule;
                'replicaPoolModule': ReplicaPoolModule;
                'type': string;
            }

            interface ModuleStatus {
                'autoscalingModuleStatus': AutoscalingModuleStatus;
                'firewallModuleStatus': FirewallModuleStatus;
                'healthCheckModuleStatus': HealthCheckModuleStatus;
                'lbModuleStatus': LbModuleStatus;
                'networkModuleStatus': NetworkModuleStatus;
                'replicaPoolModuleStatus': ReplicaPoolModuleStatus;
                'state': DeployState;
                'type': string;
            }

            interface NetworkInterface {
                'accessConfigs': AccessConfig[];
                'name': string;
                'network': string;
                'networkIp': string;
            }

            interface NetworkModule {
                'IPv4Range': string;
                'description': string;
                'gatewayIPv4': string;
            }

            interface NetworkModuleStatus {
                'networkUrl': string;
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

            interface ParamOverride {
                'path': string;
                'value': string;
            }

            interface ReplicaPoolModule {
                'envVariables': {
                    [name: string]: EnvVariable
                };
                'healthChecks': string[];
                'numReplicas': number;
                'replicaPoolParams': ReplicaPoolParams;
                'resourceView': string;
            }

            interface ReplicaPoolModuleStatus {
                'replicaPoolUrl': string;
                'resourceViewUrl': string;
            }

            interface ReplicaPoolParams {
                'v1beta1': ReplicaPoolParamsV1Beta1;
            }

            interface ReplicaPoolParamsV1Beta1 {
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

            interface ServiceAccount {
                'email': string;
                'scopes': string[];
            }

            interface Tag {
                'fingerPrint': string;
                'items': string[];
            }

            interface Template {
                'actions': {
                    [name: string]: Action
                };
                'description': string;
                'modules': {
                    [name: string]: Module
                };
                'name': string;
            }

            interface TemplatesListResponse {
                'nextPageToken': string;
                'resources': Template[];
            }

        }
    }
}