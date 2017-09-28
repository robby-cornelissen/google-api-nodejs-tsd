// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        container(version: string): any;
        container(version: 'v1beta1'): container.v1beta1.Container;
    }

    namespace container {
        namespace v1beta1 {
            export interface Container {
                new(options: any): Container;

                'projects': {
                    'zones': {
                        'getServerconfig': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'name'?: string}, callback: (error: any, body: ServerConfig, response: any) => void) => Request;

                        'clusters': {
                            'update': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setMasterAuth': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'parent'?: string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                            'resourceLabels': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'completeIpRotation': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string, 'name'?: string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'legacyAbac': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setNetworkPolicy': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'startIpRotation': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setMaintenancePolicy': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'name'?: string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'nodePools': {
                                'get': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'nodePoolId': string, 'name'?: string, 'projectId': string}, callback: (error: any, body: NodePool, response: any) => void) => Request;
                                'setManagement': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string, 'name'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'projectId': string, 'zone': string, 'parent'?: string, 'clusterId': string}, callback: (error: any, body: ListNodePoolsResponse, response: any) => void) => Request;
                                'rollback': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'nodePoolId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'zone': string, 'clusterId': string, 'projectId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                        'operations': {
                            'cancel': (parameters: { [key: string]: any; 'operationId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name'?: string, 'operationId': string, 'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'parent'?: string, 'projectId': string, 'zone': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                        };
                    };
                    'locations': {
                        'getServerConfig': (parameters: { [key: string]: any; 'projectId'?: string, 'zone'?: string, 'name': string}, callback: (error: any, body: ServerConfig, response: any) => void) => Request;

                        'clusters': {
                            'update': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setMasterAuth': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'projectId'?: string, 'zone'?: string, 'parent': string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'completeIpRotation': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'clusterId'?: string, 'name': string, 'projectId'?: string, 'zone'?: string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'setNetworkPolicy': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'startIpRotation': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setMaintenancePolicy': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'zone'?: string, 'clusterId'?: string, 'name': string, 'projectId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setResourceLabels': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'setLegacyAbac': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;

                            'nodePools': {
                                'list': (parameters: { [key: string]: any; 'clusterId'?: string, 'parent': string, 'projectId'?: string, 'zone'?: string}, callback: (error: any, body: ListNodePoolsResponse, response: any) => void) => Request;
                                'rollback': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'nodePoolId'?: string, 'name': string, 'projectId'?: string, 'zone'?: string, 'clusterId'?: string}, callback: (error: any, body: NodePool, response: any) => void) => Request;
                                'setManagement': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'clusterId'?: string, 'nodePoolId'?: string, 'name': string, 'projectId'?: string, 'zone'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                        'operations': {
                            'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'zone'?: string, 'name': string, 'operationId'?: string, 'projectId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'projectId'?: string, 'zone'?: string, 'parent': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface AutoUpgradeOptions {
                'description': string;
                'autoUpgradeStartTime': string;
            }

            export interface ListClustersResponse {
                'clusters': Cluster[];
                'missingZones': string[];
            }

            export interface HttpLoadBalancing {
                'disabled': boolean;
            }

            export interface MaintenancePolicy {
                'window': MaintenanceWindow;
            }

            export interface SetNetworkPolicyRequest {
                'networkPolicy': NetworkPolicy;
                'name': string;
                'projectId': string;
                'zone': string;
                'clusterId': string;
            }

            export interface SetMasterAuthRequest {
                'action': string;
                'name': string;
                'projectId': string;
                'clusterId': string;
                'update': MasterAuth;
                'zone': string;
            }

            export interface ClientCertificateConfig {
                'issueClientCertificate': boolean;
            }

            export interface NodePoolAutoscaling {
                'enabled': boolean;
                'maxNodeCount': number;
                'minNodeCount': number;
            }

            export interface IPAllocationPolicy {
                'nodeIpv4Cidr': string;
                'clusterIpv4CidrBlock': string;
                'clusterSecondaryRangeName': string;
                'nodeIpv4CidrBlock': string;
                'servicesIpv4Cidr': string;
                'createSubnetwork': boolean;
                'useIpAliases': boolean;
                'servicesSecondaryRangeName': string;
                'servicesIpv4CidrBlock': string;
                'subnetworkName': string;
                'clusterIpv4Cidr': string;
            }

            export interface ClusterUpdate {
                'desiredLocations': string[];
                'desiredNodePoolAutoscaling': NodePoolAutoscaling;
                'desiredMonitoringService': string;
                'desiredImageType': string;
                'desiredAddonsConfig': AddonsConfig;
                'desiredNodePoolId': string;
                'desiredNodeVersion': string;
                'desiredMasterVersion': string;
                'desiredMasterAuthorizedNetworksConfig': MasterAuthorizedNetworksConfig;
            }

            export interface HorizontalPodAutoscaling {
                'disabled': boolean;
            }

            export interface SetMaintenancePolicyRequest {
                'clusterId': string;
                'name': string;
                'maintenancePolicy': MaintenancePolicy;
                'projectId': string;
                'zone': string;
            }

            export interface MasterAuthorizedNetworksConfig {
                'enabled': boolean;
                'cidrBlocks': CidrBlock[];
            }

            export interface Empty {}

            export interface SetNodePoolManagementRequest {
                'projectId': string;
                'management': NodeManagement;
                'clusterId': string;
                'nodePoolId': string;
                'zone': string;
                'name': string;
            }

            export interface CreateClusterRequest {
                'cluster': Cluster;
                'projectId': string;
                'zone': string;
                'parent': string;
            }

            export interface ListNodePoolsResponse {
                'nodePools': NodePool[];
            }

            export interface CompleteIPRotationRequest {
                'zone': string;
                'clusterId': string;
                'name': string;
                'projectId': string;
            }

            export interface StartIPRotationRequest {
                'projectId': string;
                'zone': string;
                'clusterId': string;
                'name': string;
            }

            export interface AcceleratorConfig {
                'acceleratorType': string;
                'acceleratorCount': string;
            }

            export interface NodePool {
                'management': NodeManagement;
                'initialNodeCount': number;
                'selfLink': string;
                'instanceGroupUrls': string[];
                'version': string;
                'status': string;
                'config': NodeConfig;
                'statusMessage': string;
                'name': string;
                'autoscaling': NodePoolAutoscaling;
            }

            export interface SetLabelsRequest {
                'name': string;
                'resourceLabels': {
                    [name: string]: string
                ;
                };
                'projectId': string;
                'clusterId': string;
                'labelFingerprint': string;
                'zone': string;
            }

            export interface NodeManagement {
                'autoRepair': boolean;
                'autoUpgrade': boolean;
                'upgradeOptions': AutoUpgradeOptions;
            }

            export interface NodeTaint {
                'key': string;
                'effect': string;
                'value': string;
            }

            export interface CancelOperationRequest {
                'name': string;
                'operationId': string;
                'projectId': string;
                'zone': string;
            }

            export interface SetLegacyAbacRequest {
                'zone': string;
                'clusterId': string;
                'name': string;
                'enabled': boolean;
                'projectId': string;
            }

            export interface KubernetesDashboard {
                'disabled': boolean;
            }

            export interface Operation {
                'selfLink': string;
                'endTime': string;
                'location': string;
                'targetLink': string;
                'detail': string;
                'operationType': string;
                'startTime': string;
                'zone': string;
                'status': string;
                'statusMessage': string;
                'name': string;
            }

            export interface AddonsConfig {
                'horizontalPodAutoscaling': HorizontalPodAutoscaling;
                'httpLoadBalancing': HttpLoadBalancing;
                'kubernetesDashboard': KubernetesDashboard;
                'networkPolicyConfig': NetworkPolicyConfig;
            }

            export interface MaintenanceWindow {
                'dailyMaintenanceWindow': DailyMaintenanceWindow;
            }

            export interface RollbackNodePoolUpgradeRequest {
                'name': string;
                'projectId': string;
                'zone': string;
                'clusterId': string;
                'nodePoolId': string;
            }

            export interface NetworkPolicyConfig {
                'disabled': boolean;
            }

            export interface UpdateClusterRequest {
                'update': ClusterUpdate;
                'name': string;
                'projectId': string;
                'zone': string;
                'clusterId': string;
            }

            export interface NetworkPolicy {
                'enabled': boolean;
                'provider': string;
            }

            export interface Cluster {
                'zone': string;
                'expireTime': string;
                'nodeIpv4CidrSize': number;
                'loggingService': string;
                'masterAuthorizedNetworksConfig': MasterAuthorizedNetworksConfig;
                'statusMessage': string;
                'masterAuth': MasterAuth;
                'currentMasterVersion': string;
                'nodeConfig': NodeConfig;
                'addonsConfig': AddonsConfig;
                'status': string;
                'currentNodeVersion': string;
                'subnetwork': string;
                'name': string;
                'maintenancePolicy': MaintenancePolicy;
                'initialClusterVersion': string;
                'ipAllocationPolicy': IPAllocationPolicy;
                'location': string;
                'endpoint': string;
                'createTime': string;
                'clusterIpv4Cidr': string;
                'initialNodeCount': number;
                'locations': string[];
                'selfLink': string;
                'nodePools': NodePool[];
                'instanceGroupUrls': string[];
                'servicesIpv4Cidr': string;
                'networkPolicy': NetworkPolicy;
                'enableKubernetesAlpha': boolean;
                'description': string;
                'currentNodeCount': number;
                'monitoringService': string;
                'network': string;
            }

            export interface CreateNodePoolRequest {
                'projectId': string;
                'zone': string;
                'parent': string;
                'nodePool': NodePool;
                'clusterId': string;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'missingZones': string[];
            }

            export interface CidrBlock {
                'cidrBlock': string;
                'displayName': string;
            }

            export interface ServerConfig {
                'validMasterVersions': string[];
                'defaultImageType': string;
                'defaultClusterVersion': string;
                'validImageTypes': string[];
                'validNodeVersions': string[];
            }

            export interface MasterAuth {
                'clusterCaCertificate': string;
                'clientCertificate': string;
                'username': string;
                'password': string;
                'clientCertificateConfig': ClientCertificateConfig;
                'clientKey': string;
            }

            export interface NodeConfig {
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
                'taints': NodeTaint[];
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface DailyMaintenanceWindow {
                'startTime': string;
                'duration': string;
            }

        }
    }
}
