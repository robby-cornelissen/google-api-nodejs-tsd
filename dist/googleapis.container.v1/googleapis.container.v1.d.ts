// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
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
                        'getServerconfig': (parameters: {'projectId': string, 'zone': string}, callback: (error: any, body: ServerConfig, response: any) => void) => Request;
                    
                        'clusters': {
                            'list': (parameters: {'projectId': string, 'zone': string}, callback: (error: any, body: ListClustersResponse, response: any) => void) => Request;
                            'get': (parameters: {'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Cluster, response: any) => void) => Request;
                            'create': (parameters: {'projectId': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'update': (parameters: {'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: {'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        
                            'nodePools': {
                                'list': (parameters: {'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: ListNodePoolsResponse, response: any) => void) => Request;
                                'get': (parameters: {'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string}, callback: (error: any, body: NodePool, response: any) => void) => Request;
                                'create': (parameters: {'projectId': string, 'zone': string, 'clusterId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                                'delete': (parameters: {'projectId': string, 'zone': string, 'clusterId': string, 'nodePoolId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            };
                        };
                        'operations': {
                            'list': (parameters: {'projectId': string, 'zone': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                            'get': (parameters: {'projectId': string, 'zone': string, 'operationId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface ListClustersResponse {
                'clusters': Cluster[];
                'missingZones': string[];
            }

            export interface Cluster {
                'name': string;
                'description': string;
                'initialNodeCount': number;
                'nodeConfig': NodeConfig;
                'masterAuth': MasterAuth;
                'loggingService': string;
                'monitoringService': string;
                'network': string;
                'clusterIpv4Cidr': string;
                'addonsConfig': AddonsConfig;
                'subnetwork': string;
                'nodePools': NodePool[];
                'locations': string[];
                'selfLink': string;
                'zone': string;
                'endpoint': string;
                'initialClusterVersion': string;
                'currentMasterVersion': string;
                'currentNodeVersion': string;
                'createTime': string;
                'status': string;
                'statusMessage': string;
                'nodeIpv4CidrSize': number;
                'servicesIpv4Cidr': string;
                'instanceGroupUrls': string[];
                'currentNodeCount': number;
            }

            export interface NodeConfig {
                'machineType': string;
                'diskSizeGb': number;
                'oauthScopes': string[];
                'metadata': {
                    [name: string]: string
                
                };
            }

            export interface MasterAuth {
                'username': string;
                'password': string;
                'clusterCaCertificate': string;
                'clientCertificate': string;
                'clientKey': string;
            }

            export interface AddonsConfig {
                'httpLoadBalancing': HttpLoadBalancing;
                'horizontalPodAutoscaling': HorizontalPodAutoscaling;
            }

            export interface HttpLoadBalancing {
                'disabled': boolean;
            }

            export interface HorizontalPodAutoscaling {
                'disabled': boolean;
            }

            export interface NodePool {
                'name': string;
                'config': NodeConfig;
                'initialNodeCount': number;
                'selfLink': string;
                'version': string;
                'instanceGroupUrls': string[];
                'status': string;
                'statusMessage': string;
            }

            export interface CreateClusterRequest {
                'cluster': Cluster;
            }

            export interface Operation {
                'name': string;
                'zone': string;
                'operationType': string;
                'status': string;
                'detail': string;
                'statusMessage': string;
                'selfLink': string;
                'targetLink': string;
            }

            export interface UpdateClusterRequest {
                'update': ClusterUpdate;
            }

            export interface ClusterUpdate {
                'desiredNodeVersion': string;
                'desiredMonitoringService': string;
                'desiredAddonsConfig': AddonsConfig;
                'desiredNodePoolId': string;
                'desiredMasterVersion': string;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'missingZones': string[];
            }

            export interface ServerConfig {
                'defaultClusterVersion': string;
                'validNodeVersions': string[];
                'defaultImageFamily': string;
                'validImageFamilies': string[];
            }

            export interface ListNodePoolsResponse {
                'nodePools': NodePool[];
            }

            export interface CreateNodePoolRequest {
                'nodePool': NodePool;
            }

        }
    }
}