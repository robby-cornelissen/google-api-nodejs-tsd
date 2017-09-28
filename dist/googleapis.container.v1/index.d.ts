// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        container(version: string): any;
        container(version: 'v1'): container.v1.Container;
    }

    namespace container {
        namespace v1 {
            export interface Container {
                new(options: any): Container;

                'projects': {
                    'zones': {
                        'getServerconfig': (parameters: { [key: string]: any; 'projectId': string, 'zone': string}, callback: (error: any, body: ServerConfig, response: any) => void) => Request;

                        'clusters': {
                            'setMaintenancePolicy': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'addons': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'locations': (parameters: { [key: string]: any; 'clusterId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'update': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'monitoring': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'master': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setMasterAuth': (parameters: { [key: string]: any; 'clusterId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'logging': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'projectId': string, 'zone': string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'resourceLabels': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'completeIpRotation': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setNetworkPolicy': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'legacyAbac': (parameters: { [key: string]: any; 'clusterId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'startIpRotation': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'nodePools': {
                                'get': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string}, callback: (error: any, body: NodePool, response: any) => void) => Request;
                                'update': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'nodePoolId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'setManagement': (parameters: { [key: string]: any; 'nodePoolId': string, 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'setSize': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: ListNodePoolsResponse, response: any) => void) => Request;
                                'rollback': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'autoscaling': (parameters: { [key: string]: any; 'clusterId': string, 'nodePoolId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                        'operations': {
                            'cancel': (parameters: { [key: string]: any; 'operationId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'operationId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'projectId': string, 'zone': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface UpdateClusterRequest {
                'update': ClusterUpdate;
            }

            export interface NetworkPolicyConfig {
                'disabled': boolean;
            }

            export interface Cluster {
                'network': string;
                'labelFingerprint': string;
                'zone': string;
                'loggingService': string;
                'nodeIpv4CidrSize': number;
                'expireTime': string;
                'masterAuthorizedNetworksConfig': MasterAuthorizedNetworksConfig;
                'statusMessage': string;
                'masterAuth': MasterAuth;
                'currentMasterVersion': string;
                'nodeConfig': NodeConfig;
                'addonsConfig': AddonsConfig;
                'status': string;
                'subnetwork': string;
                'currentNodeVersion': string;
                'maintenancePolicy': MaintenancePolicy;
                'resourceLabels': {
                    [name: string]: string
                ;
                };
                'name': string;
                'initialClusterVersion': string;
                'ipAllocationPolicy': IPAllocationPolicy;
                'legacyAbac': LegacyAbac;
                'endpoint': string;
                'createTime': string;
                'clusterIpv4Cidr': string;
                'initialNodeCount': number;
                'selfLink': string;
                'locations': string[];
                'nodePools': NodePool[];
                'instanceGroupUrls': string[];
                'servicesIpv4Cidr': string;
                'networkPolicy': NetworkPolicy;
                'enableKubernetesAlpha': boolean;
                'description': string;
                'currentNodeCount': number;
                'monitoringService': string;
            }

            export interface CreateNodePoolRequest {
                'nodePool': NodePool;
            }

            export interface MasterAuth {
                'password': string;
                'clientCertificateConfig': ClientCertificateConfig;
                'clientKey': string;
                'clusterCaCertificate': string;
                'clientCertificate': string;
                'username': string;
            }

            export interface DailyMaintenanceWindow {
                'duration': string;
                'startTime': string;
            }

            export interface ClientCertificateConfig {
                'issueClientCertificate': boolean;
            }

            export interface MaintenancePolicy {
                'window': MaintenanceWindow;
            }

            export interface SetLoggingServiceRequest {
                'loggingService': string;
            }

            export interface SetMaintenancePolicyRequest {
                'maintenancePolicy': MaintenancePolicy;
            }

            export interface Empty {}

            export interface ListNodePoolsResponse {
                'nodePools': NodePool[];
            }

            export interface CompleteIPRotationRequest {}

            export interface StartIPRotationRequest {}

            export interface NodePool {
                'selfLink': string;
                'instanceGroupUrls': string[];
                'version': string;
                'status': string;
                'config': NodeConfig;
                'statusMessage': string;
                'name': string;
                'autoscaling': NodePoolAutoscaling;
                'management': NodeManagement;
                'initialNodeCount': number;
            }

            export interface SetLabelsRequest {
                'resourceLabels': {
                    [name: string]: string
                ;
                };
                'labelFingerprint': string;
            }

            export interface NodeManagement {
                'autoRepair': boolean;
                'autoUpgrade': boolean;
                'upgradeOptions': AutoUpgradeOptions;
            }

            export interface CancelOperationRequest {}

            export interface KubernetesDashboard {
                'disabled': boolean;
            }

            export interface Operation {
                'selfLink': string;
                'endTime': string;
                'targetLink': string;
                'detail': string;
                'operationType': string;
                'startTime': string;
                'zone': string;
                'status': string;
                'statusMessage': string;
                'name': string;
            }

            export interface MaintenanceWindow {
                'dailyMaintenanceWindow': DailyMaintenanceWindow;
            }

            export interface RollbackNodePoolUpgradeRequest {}

            export interface NetworkPolicy {
                'enabled': boolean;
                'provider': string;
            }

            export interface UpdateMasterRequest {
                'masterVersion': string;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'missingZones': string[];
            }

            export interface CidrBlock {
                'displayName': string;
                'cidrBlock': string;
            }

            export interface SetMonitoringServiceRequest {
                'monitoringService': string;
            }

            export interface ServerConfig {
                'defaultImageType': string;
                'defaultClusterVersion': string;
                'validImageTypes': string[];
                'validNodeVersions': string[];
                'validMasterVersions': string[];
            }

            export interface NodeConfig {
                'labels': {
                    [name: string]: string
                ;
                };
                'diskSizeGb': number;
                'accelerators': AcceleratorConfig[];
                'machineType': string;
                'minCpuPlatform': string;
                'preemptible': boolean;
                'localSsdCount': number;
                'metadata': {
                    [name: string]: string
                ;
                };
                'tags': string[];
                'serviceAccount': string;
                'imageType': string;
                'oauthScopes': string[];
            }

            export interface AutoUpgradeOptions {
                'autoUpgradeStartTime': string;
                'description': string;
            }

            export interface ListClustersResponse {
                'missingZones': string[];
                'clusters': Cluster[];
            }

            export interface HttpLoadBalancing {
                'disabled': boolean;
            }

            export interface SetMasterAuthRequest {
                'update': MasterAuth;
                'action': string;
            }

            export interface NodePoolAutoscaling {
                'enabled': boolean;
                'maxNodeCount': number;
                'minNodeCount': number;
            }

            export interface SetNetworkPolicyRequest {
                'networkPolicy': NetworkPolicy;
            }

            export interface IPAllocationPolicy {
                'servicesSecondaryRangeName': string;
                'useIpAliases': boolean;
                'createSubnetwork': boolean;
                'servicesIpv4CidrBlock': string;
                'subnetworkName': string;
                'clusterIpv4Cidr': string;
                'nodeIpv4Cidr': string;
                'clusterIpv4CidrBlock': string;
                'clusterSecondaryRangeName': string;
                'nodeIpv4CidrBlock': string;
                'servicesIpv4Cidr': string;
            }

            export interface ClusterUpdate {
                'desiredNodeVersion': string;
                'desiredMasterVersion': string;
                'desiredMasterAuthorizedNetworksConfig': MasterAuthorizedNetworksConfig;
                'desiredLocations': string[];
                'desiredNodePoolAutoscaling': NodePoolAutoscaling;
                'desiredMonitoringService': string;
                'desiredImageType': string;
                'desiredAddonsConfig': AddonsConfig;
                'desiredNodePoolId': string;
            }

            export interface HorizontalPodAutoscaling {
                'disabled': boolean;
            }

            export interface SetNodePoolManagementRequest {
                'management': NodeManagement;
            }

            export interface MasterAuthorizedNetworksConfig {
                'cidrBlocks': CidrBlock[];
                'enabled': boolean;
            }

            export interface SetNodePoolAutoscalingRequest {
                'autoscaling': NodePoolAutoscaling;
            }

            export interface CreateClusterRequest {
                'cluster': Cluster;
            }

            export interface LegacyAbac {
                'enabled': boolean;
            }

            export interface AcceleratorConfig {
                'acceleratorType': string;
                'acceleratorCount': string;
            }

            export interface UpdateNodePoolRequest {
                'nodeVersion': string;
                'imageType': string;
            }

            export interface SetAddonsConfigRequest {
                'addonsConfig': AddonsConfig;
            }

            export interface SetLegacyAbacRequest {
                'enabled': boolean;
            }

            export interface AddonsConfig {
                'networkPolicyConfig': NetworkPolicyConfig;
                'horizontalPodAutoscaling': HorizontalPodAutoscaling;
                'httpLoadBalancing': HttpLoadBalancing;
                'kubernetesDashboard': KubernetesDashboard;
            }

            export interface SetLocationsRequest {
                'locations': string[];
            }

            export interface SetNodePoolSizeRequest {
                'nodeCount': number;
            }

        }
    }
}
