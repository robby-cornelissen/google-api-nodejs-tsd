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
                        };
                        'operations': {
                            'list': (parameters: {'projectId': string, 'zone': string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                            'get': (parameters: {'projectId': string, 'zone': string, 'operationId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        };
                    };
                };

            }

            interface ListClustersResponse {
                'clusters': Cluster[];
            }

            interface Cluster {
                'name': string;
                'description': string;
                'initialNodeCount': number;
                'nodeConfig': NodeConfig;
                'masterAuth': MasterAuth;
                'loggingService': string;
                'monitoringService': string;
                'network': string;
                'clusterIpv4Cidr': string;
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
            }

            interface NodeConfig {
                'machineType': string;
                'diskSizeGb': number;
                'oauthScopes': string[];
            }

            interface MasterAuth {
                'username': string;
                'password': string;
                'clusterCaCertificate': string;
                'clientCertificate': string;
                'clientKey': string;
            }

            interface CreateClusterRequest {
                'cluster': Cluster;
            }

            interface Operation {
                'name': string;
                'zone': string;
                'operationType': string;
                'status': string;
                'statusMessage': string;
                'selfLink': string;
                'targetLink': string;
            }

            interface UpdateClusterRequest {
                'update': ClusterUpdate;
            }

            interface ClusterUpdate {
                'desiredNodeVersion': string;
            }

            interface ListOperationsResponse {
                'operations': Operation[];
            }

            interface ServerConfig {
                'defaultClusterVersion': string;
                'validNodeVersions': string[];
            }

        }
    }
}