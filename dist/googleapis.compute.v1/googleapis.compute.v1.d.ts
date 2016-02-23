// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        compute(version: string): any;
        compute(version: 'v1'): compute.v1.Compute;
    }

    namespace compute {
        namespace v1 {
            export interface Compute {
                new(options: any): Compute;

                'addresses': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: AddressAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'address': string, 'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'address': string, 'project': string, 'region': string}, callback: (error: any, body: Address, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: AddressList, response: any) => void) => Request;
                };
                'autoscalers': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: AutoscalerAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Autoscaler, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: AutoscalerList, response: any) => void) => Request;
                    'patch': (parameters: {'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'autoscaler'?: string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'backendServices': {
                    'delete': (parameters: {'backendService': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'backendService': string, 'project': string}, callback: (error: any, body: BackendService, response: any) => void) => Request;
                    'getHealth': (parameters: {'backendService': string, 'project': string}, callback: (error: any, body: BackendServiceGroupHealth, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackendServiceList, response: any) => void) => Request;
                    'patch': (parameters: {'backendService': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'backendService': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'diskTypes': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DiskTypeAggregatedList, response: any) => void) => Request;
                    'get': (parameters: {'diskType': string, 'project': string, 'zone': string}, callback: (error: any, body: DiskType, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: DiskTypeList, response: any) => void) => Request;
                };
                'disks': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DiskAggregatedList, response: any) => void) => Request;
                    'createSnapshot': (parameters: {'disk': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'disk': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'disk': string, 'project': string, 'zone': string}, callback: (error: any, body: Disk, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'sourceImage'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: DiskList, response: any) => void) => Request;
                };
                'firewalls': {
                    'delete': (parameters: {'firewall': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'firewall': string, 'project': string}, callback: (error: any, body: Firewall, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: FirewallList, response: any) => void) => Request;
                    'patch': (parameters: {'firewall': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'firewall': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'forwardingRules': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ForwardingRuleAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'forwardingRule': string, 'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'forwardingRule': string, 'project': string, 'region': string}, callback: (error: any, body: ForwardingRule, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: ForwardingRuleList, response: any) => void) => Request;
                    'setTarget': (parameters: {'forwardingRule': string, 'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'globalAddresses': {
                    'delete': (parameters: {'address': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'address': string, 'project': string}, callback: (error: any, body: Address, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: AddressList, response: any) => void) => Request;
                };
                'globalForwardingRules': {
                    'delete': (parameters: {'forwardingRule': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'forwardingRule': string, 'project': string}, callback: (error: any, body: ForwardingRule, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ForwardingRuleList, response: any) => void) => Request;
                    'setTarget': (parameters: {'forwardingRule': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'globalOperations': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'httpHealthChecks': {
                    'delete': (parameters: {'httpHealthCheck': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'httpHealthCheck': string, 'project': string}, callback: (error: any, body: HttpHealthCheck, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: HttpHealthCheckList, response: any) => void) => Request;
                    'patch': (parameters: {'httpHealthCheck': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'httpHealthCheck': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'httpsHealthChecks': {
                    'delete': (parameters: {'httpsHealthCheck': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'httpsHealthCheck': string, 'project': string}, callback: (error: any, body: HttpsHealthCheck, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: HttpsHealthCheckList, response: any) => void) => Request;
                    'patch': (parameters: {'httpsHealthCheck': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'httpsHealthCheck': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'images': {
                    'delete': (parameters: {'image': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deprecate': (parameters: {'image': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'image': string, 'project': string}, callback: (error: any, body: Image, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ImageList, response: any) => void) => Request;
                };
                'instanceGroupManagers': {
                    'abandonInstances': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceGroupManagerAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deleteInstances': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManager, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManagerList, response: any) => void) => Request;
                    'listManagedInstances': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManagersListManagedInstancesResponse, response: any) => void) => Request;
                    'recreateInstances': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resize': (parameters: {'instanceGroupManager': string, 'project': string, 'size': number, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setInstanceTemplate': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTargetPools': (parameters: {'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'instanceGroups': {
                    'addInstances': (parameters: {'instanceGroup': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceGroupAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'instanceGroup': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'instanceGroup': string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroup, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupList, response: any) => void) => Request;
                    'listInstances': (parameters: {'filter'?: string, 'instanceGroup': string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupsListInstances, response: any) => void) => Request;
                    'removeInstances': (parameters: {'instanceGroup': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setNamedPorts': (parameters: {'instanceGroup': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'instanceTemplates': {
                    'delete': (parameters: {'instanceTemplate': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'instanceTemplate': string, 'project': string}, callback: (error: any, body: InstanceTemplate, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceTemplateList, response: any) => void) => Request;
                };
                'instances': {
                    'addAccessConfig': (parameters: {'instance': string, 'networkInterface': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceAggregatedList, response: any) => void) => Request;
                    'attachDisk': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deleteAccessConfig': (parameters: {'accessConfig': string, 'instance': string, 'networkInterface': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'detachDisk': (parameters: {'deviceName': string, 'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Instance, response: any) => void) => Request;
                    'getSerialPortOutput': (parameters: {'instance': string, 'port'?: number, 'project': string, 'zone': string}, callback: (error: any, body: SerialPortOutput, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceList, response: any) => void) => Request;
                    'reset': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setDiskAutoDelete': (parameters: {'autoDelete': boolean, 'deviceName': string, 'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setMachineType': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setMetadata': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setScheduling': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTags': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'start': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'stop': (parameters: {'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'licenses': {
                    'get': (parameters: {'license': string, 'project': string}, callback: (error: any, body: License, response: any) => void) => Request;
                };
                'machineTypes': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: MachineTypeAggregatedList, response: any) => void) => Request;
                    'get': (parameters: {'machineType': string, 'project': string, 'zone': string}, callback: (error: any, body: MachineType, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: MachineTypeList, response: any) => void) => Request;
                };
                'networks': {
                    'delete': (parameters: {'network': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'network': string, 'project': string}, callback: (error: any, body: Network, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: NetworkList, response: any) => void) => Request;
                };
                'projects': {
                    'get': (parameters: {'project': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'moveDisk': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'moveInstance': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setCommonInstanceMetadata': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setUsageExportBucket': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'regionOperations': {
                    'delete': (parameters: {'operation': string, 'project': string, 'region': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'operation': string, 'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'regions': {
                    'get': (parameters: {'project': string, 'region': string}, callback: (error: any, body: Region, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: RegionList, response: any) => void) => Request;
                };
                'routes': {
                    'delete': (parameters: {'project': string, 'route': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'route': string}, callback: (error: any, body: Route, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: RouteList, response: any) => void) => Request;
                };
                'snapshots': {
                    'delete': (parameters: {'project': string, 'snapshot': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'snapshot': string}, callback: (error: any, body: Snapshot, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: SnapshotList, response: any) => void) => Request;
                };
                'sslCertificates': {
                    'delete': (parameters: {'project': string, 'sslCertificate': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'sslCertificate': string}, callback: (error: any, body: SslCertificate, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: SslCertificateList, response: any) => void) => Request;
                };
                'subnetworks': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: SubnetworkAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'project': string, 'region': string, 'subnetwork': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'region': string, 'subnetwork': string}, callback: (error: any, body: Subnetwork, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: SubnetworkList, response: any) => void) => Request;
                };
                'targetHttpProxies': {
                    'delete': (parameters: {'project': string, 'targetHttpProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'targetHttpProxy': string}, callback: (error: any, body: TargetHttpProxy, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetHttpProxyList, response: any) => void) => Request;
                    'setUrlMap': (parameters: {'project': string, 'targetHttpProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'targetHttpsProxies': {
                    'delete': (parameters: {'project': string, 'targetHttpsProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'targetHttpsProxy': string}, callback: (error: any, body: TargetHttpsProxy, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetHttpsProxyList, response: any) => void) => Request;
                    'setSslCertificates': (parameters: {'project': string, 'targetHttpsProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setUrlMap': (parameters: {'project': string, 'targetHttpsProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'targetInstances': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetInstanceAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'project': string, 'targetInstance': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'targetInstance': string, 'zone': string}, callback: (error: any, body: TargetInstance, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: TargetInstanceList, response: any) => void) => Request;
                };
                'targetPools': {
                    'addHealthCheck': (parameters: {'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'addInstance': (parameters: {'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetPoolAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: TargetPool, response: any) => void) => Request;
                    'getHealth': (parameters: {'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: TargetPoolInstanceHealth, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: TargetPoolList, response: any) => void) => Request;
                    'removeHealthCheck': (parameters: {'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'removeInstance': (parameters: {'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setBackup': (parameters: {'failoverRatio'?: number, 'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'targetVpnGateways': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetVpnGatewayAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'project': string, 'region': string, 'targetVpnGateway': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'region': string, 'targetVpnGateway': string}, callback: (error: any, body: TargetVpnGateway, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: TargetVpnGatewayList, response: any) => void) => Request;
                };
                'urlMaps': {
                    'delete': (parameters: {'project': string, 'urlMap': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'urlMap': string}, callback: (error: any, body: UrlMap, response: any) => void) => Request;
                    'insert': (parameters: {'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: UrlMapList, response: any) => void) => Request;
                    'patch': (parameters: {'project': string, 'urlMap': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: {'project': string, 'urlMap': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'validate': (parameters: {'project': string, 'urlMap': string}, callback: (error: any, body: UrlMapsValidateResponse, response: any) => void) => Request;
                };
                'vpnTunnels': {
                    'aggregatedList': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: VpnTunnelAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: {'project': string, 'region': string, 'vpnTunnel': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'region': string, 'vpnTunnel': string}, callback: (error: any, body: VpnTunnel, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: VpnTunnelList, response: any) => void) => Request;
                };
                'zoneOperations': {
                    'delete': (parameters: {'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'zones': {
                    'get': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Zone, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ZoneList, response: any) => void) => Request;
                };

            }

            export interface AccessConfig {
                'kind': string;
                'name': string;
                'natIP': string;
                'type': string;
            }

            export interface Address {
                'address': string;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'region': string;
                'selfLink': string;
                'status': string;
                'users': string[];
            }

            export interface AddressAggregatedList {
                'id': string;
                'items': {
                    [name: string]: AddressesScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface AddressList {
                'id': string;
                'items': Address[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface AddressesScopedList {
                'addresses': Address[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AttachedDisk {
                'autoDelete': boolean;
                'boot': boolean;
                'deviceName': string;
                'index': number;
                'initializeParams': AttachedDiskInitializeParams;
                'interface': string;
                'kind': string;
                'licenses': string[];
                'mode': string;
                'source': string;
                'type': string;
            }

            export interface AttachedDiskInitializeParams {
                'diskName': string;
                'diskSizeGb': string;
                'diskType': string;
                'sourceImage': string;
            }

            export interface Autoscaler {
                'autoscalingPolicy': AutoscalingPolicy;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'target': string;
                'zone': string;
            }

            export interface AutoscalerAggregatedList {
                'id': string;
                'items': {
                    [name: string]: AutoscalersScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface AutoscalerList {
                'id': string;
                'items': Autoscaler[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface AutoscalersScopedList {
                'autoscalers': Autoscaler[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AutoscalingPolicy {
                'coolDownPeriodSec': number;
                'cpuUtilization': AutoscalingPolicyCpuUtilization;
                'customMetricUtilizations': AutoscalingPolicyCustomMetricUtilization[];
                'loadBalancingUtilization': AutoscalingPolicyLoadBalancingUtilization;
                'maxNumReplicas': number;
                'minNumReplicas': number;
            }

            export interface AutoscalingPolicyCpuUtilization {
                'utilizationTarget': number;
            }

            export interface AutoscalingPolicyCustomMetricUtilization {
                'metric': string;
                'utilizationTarget': number;
                'utilizationTargetType': string;
            }

            export interface AutoscalingPolicyLoadBalancingUtilization {
                'utilizationTarget': number;
            }

            export interface Backend {
                'balancingMode': string;
                'capacityScaler': number;
                'description': string;
                'group': string;
                'maxRate': number;
                'maxRatePerInstance': number;
                'maxUtilization': number;
            }

            export interface BackendService {
                'backends': Backend[];
                'creationTimestamp': string;
                'description': string;
                'fingerprint': string;
                'healthChecks': string[];
                'id': string;
                'kind': string;
                'name': string;
                'port': number;
                'portName': string;
                'protocol': string;
                'selfLink': string;
                'timeoutSec': number;
            }

            export interface BackendServiceGroupHealth {
                'healthStatus': HealthStatus[];
                'kind': string;
            }

            export interface BackendServiceList {
                'id': string;
                'items': BackendService[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface DeprecationStatus {
                'deleted': string;
                'deprecated': string;
                'obsolete': string;
                'replacement': string;
                'state': string;
            }

            export interface Disk {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'lastAttachTimestamp': string;
                'lastDetachTimestamp': string;
                'licenses': string[];
                'name': string;
                'options': string;
                'selfLink': string;
                'sizeGb': string;
                'sourceImage': string;
                'sourceImageId': string;
                'sourceSnapshot': string;
                'sourceSnapshotId': string;
                'status': string;
                'type': string;
                'users': string[];
                'zone': string;
            }

            export interface DiskAggregatedList {
                'id': string;
                'items': {
                    [name: string]: DisksScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface DiskList {
                'id': string;
                'items': Disk[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface DiskMoveRequest {
                'destinationZone': string;
                'targetDisk': string;
            }

            export interface DiskType {
                'creationTimestamp': string;
                'defaultDiskSizeGb': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'validDiskSize': string;
                'zone': string;
            }

            export interface DiskTypeAggregatedList {
                'id': string;
                'items': {
                    [name: string]: DiskTypesScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface DiskTypeList {
                'id': string;
                'items': DiskType[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface DiskTypesScopedList {
                'diskTypes': DiskType[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface DisksScopedList {
                'disks': Disk[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Firewall {
                'allowed': {
                    'IPProtocol': string;
                    'ports': string[];
                }[];
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'network': string;
                'selfLink': string;
                'sourceRanges': string[];
                'sourceTags': string[];
                'targetTags': string[];
            }

            export interface FirewallList {
                'id': string;
                'items': Firewall[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface ForwardingRule {
                'IPAddress': string;
                'IPProtocol': string;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'portRange': string;
                'region': string;
                'selfLink': string;
                'target': string;
            }

            export interface ForwardingRuleAggregatedList {
                'id': string;
                'items': {
                    [name: string]: ForwardingRulesScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface ForwardingRuleList {
                'id': string;
                'items': ForwardingRule[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface ForwardingRulesScopedList {
                'forwardingRules': ForwardingRule[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface HealthCheckReference {
                'healthCheck': string;
            }

            export interface HealthStatus {
                'healthState': string;
                'instance': string;
                'ipAddress': string;
                'port': number;
            }

            export interface HostRule {
                'description': string;
                'hosts': string[];
                'pathMatcher': string;
            }

            export interface HttpHealthCheck {
                'checkIntervalSec': number;
                'creationTimestamp': string;
                'description': string;
                'healthyThreshold': number;
                'host': string;
                'id': string;
                'kind': string;
                'name': string;
                'port': number;
                'requestPath': string;
                'selfLink': string;
                'timeoutSec': number;
                'unhealthyThreshold': number;
            }

            export interface HttpHealthCheckList {
                'id': string;
                'items': HttpHealthCheck[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface HttpsHealthCheck {
                'checkIntervalSec': number;
                'creationTimestamp': string;
                'description': string;
                'healthyThreshold': number;
                'host': string;
                'id': string;
                'kind': string;
                'name': string;
                'port': number;
                'requestPath': string;
                'selfLink': string;
                'timeoutSec': number;
                'unhealthyThreshold': number;
            }

            export interface HttpsHealthCheckList {
                'id': string;
                'items': HttpsHealthCheck[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface Image {
                'archiveSizeBytes': string;
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'diskSizeGb': string;
                'id': string;
                'kind': string;
                'licenses': string[];
                'name': string;
                'rawDisk': {
                    'containerType': string;
                    'sha1Checksum': string;
                    'source': string;
                };
                'selfLink': string;
                'sourceDisk': string;
                'sourceDiskId': string;
                'sourceType': string;
                'status': string;
            }

            export interface ImageList {
                'id': string;
                'items': Image[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface Instance {
                'canIpForward': boolean;
                'cpuPlatform': string;
                'creationTimestamp': string;
                'description': string;
                'disks': AttachedDisk[];
                'id': string;
                'kind': string;
                'machineType': string;
                'metadata': Metadata;
                'name': string;
                'networkInterfaces': NetworkInterface[];
                'scheduling': Scheduling;
                'selfLink': string;
                'serviceAccounts': ServiceAccount[];
                'status': string;
                'statusMessage': string;
                'tags': Tags;
                'zone': string;
            }

            export interface InstanceAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstancesScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceGroup {
                'creationTimestamp': string;
                'description': string;
                'fingerprint': string;
                'id': string;
                'kind': string;
                'name': string;
                'namedPorts': NamedPort[];
                'network': string;
                'selfLink': string;
                'size': number;
                'subnetwork': string;
                'zone': string;
            }

            export interface InstanceGroupAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstanceGroupsScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceGroupList {
                'id': string;
                'items': InstanceGroup[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceGroupManager {
                'baseInstanceName': string;
                'creationTimestamp': string;
                'currentActions': InstanceGroupManagerActionsSummary;
                'description': string;
                'fingerprint': string;
                'id': string;
                'instanceGroup': string;
                'instanceTemplate': string;
                'kind': string;
                'name': string;
                'namedPorts': NamedPort[];
                'selfLink': string;
                'targetPools': string[];
                'targetSize': number;
                'zone': string;
            }

            export interface InstanceGroupManagerActionsSummary {
                'abandoning': number;
                'creating': number;
                'deleting': number;
                'none': number;
                'recreating': number;
                'refreshing': number;
                'restarting': number;
            }

            export interface InstanceGroupManagerAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstanceGroupManagersScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceGroupManagerList {
                'id': string;
                'items': InstanceGroupManager[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceGroupManagersAbandonInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersDeleteInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersListManagedInstancesResponse {
                'managedInstances': ManagedInstance[];
            }

            export interface InstanceGroupManagersRecreateInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersScopedList {
                'instanceGroupManagers': InstanceGroupManager[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceGroupManagersSetInstanceTemplateRequest {
                'instanceTemplate': string;
            }

            export interface InstanceGroupManagersSetTargetPoolsRequest {
                'fingerprint': string;
                'targetPools': string[];
            }

            export interface InstanceGroupsAddInstancesRequest {
                'instances': InstanceReference[];
            }

            export interface InstanceGroupsListInstances {
                'id': string;
                'items': InstanceWithNamedPorts[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceGroupsListInstancesRequest {
                'instanceState': string;
            }

            export interface InstanceGroupsRemoveInstancesRequest {
                'instances': InstanceReference[];
            }

            export interface InstanceGroupsScopedList {
                'instanceGroups': InstanceGroup[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceGroupsSetNamedPortsRequest {
                'fingerprint': string;
                'namedPorts': NamedPort[];
            }

            export interface InstanceList {
                'id': string;
                'items': Instance[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceMoveRequest {
                'destinationZone': string;
                'targetInstance': string;
            }

            export interface InstanceProperties {
                'canIpForward': boolean;
                'description': string;
                'disks': AttachedDisk[];
                'machineType': string;
                'metadata': Metadata;
                'networkInterfaces': NetworkInterface[];
                'scheduling': Scheduling;
                'serviceAccounts': ServiceAccount[];
                'tags': Tags;
            }

            export interface InstanceReference {
                'instance': string;
            }

            export interface InstanceTemplate {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'properties': InstanceProperties;
                'selfLink': string;
            }

            export interface InstanceTemplateList {
                'id': string;
                'items': InstanceTemplate[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface InstanceWithNamedPorts {
                'instance': string;
                'namedPorts': NamedPort[];
                'status': string;
            }

            export interface InstancesScopedList {
                'instances': Instance[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstancesSetMachineTypeRequest {
                'machineType': string;
            }

            export interface License {
                'chargesUseFee': boolean;
                'kind': string;
                'name': string;
                'selfLink': string;
            }

            export interface MachineType {
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'guestCpus': number;
                'id': string;
                'imageSpaceGb': number;
                'kind': string;
                'maximumPersistentDisks': number;
                'maximumPersistentDisksSizeGb': string;
                'memoryMb': number;
                'name': string;
                'scratchDisks': {
                    'diskGb': number;
                }[];
                'selfLink': string;
                'zone': string;
            }

            export interface MachineTypeAggregatedList {
                'id': string;
                'items': {
                    [name: string]: MachineTypesScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface MachineTypeList {
                'id': string;
                'items': MachineType[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface MachineTypesScopedList {
                'machineTypes': MachineType[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface ManagedInstance {
                'currentAction': string;
                'id': string;
                'instance': string;
                'instanceStatus': string;
                'lastAttempt': ManagedInstanceLastAttempt;
            }

            export interface ManagedInstanceLastAttempt {
                'errors': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
            }

            export interface Metadata {
                'fingerprint': string;
                'items': {
                    'key': string;
                    'value': string;
                }[];
                'kind': string;
            }

            export interface NamedPort {
                'name': string;
                'port': number;
            }

            export interface Network {
                'IPv4Range': string;
                'autoCreateSubnetworks': boolean;
                'creationTimestamp': string;
                'description': string;
                'gatewayIPv4': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'subnetworks': string[];
            }

            export interface NetworkInterface {
                'accessConfigs': AccessConfig[];
                'name': string;
                'network': string;
                'networkIP': string;
                'subnetwork': string;
            }

            export interface NetworkList {
                'id': string;
                'items': Network[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface Operation {
                'clientOperationId': string;
                'creationTimestamp': string;
                'description': string;
                'endTime': string;
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'httpErrorMessage': string;
                'httpErrorStatusCode': number;
                'id': string;
                'insertTime': string;
                'kind': string;
                'name': string;
                'operationType': string;
                'progress': number;
                'region': string;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'statusMessage': string;
                'targetId': string;
                'targetLink': string;
                'user': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
                'zone': string;
            }

            export interface OperationAggregatedList {
                'id': string;
                'items': {
                    [name: string]: OperationsScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface OperationList {
                'id': string;
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface OperationsScopedList {
                'operations': Operation[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface PathMatcher {
                'defaultService': string;
                'description': string;
                'name': string;
                'pathRules': PathRule[];
            }

            export interface PathRule {
                'paths': string[];
                'service': string;
            }

            export interface Project {
                'commonInstanceMetadata': Metadata;
                'creationTimestamp': string;
                'description': string;
                'enabledFeatures': string[];
                'id': string;
                'kind': string;
                'name': string;
                'quotas': Quota[];
                'selfLink': string;
                'usageExportLocation': UsageExportLocation;
            }

            export interface Quota {
                'limit': number;
                'metric': string;
                'usage': number;
            }

            export interface Region {
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'quotas': Quota[];
                'selfLink': string;
                'status': string;
                'zones': string[];
            }

            export interface RegionList {
                'id': string;
                'items': Region[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface ResourceGroupReference {
                'group': string;
            }

            export interface Route {
                'creationTimestamp': string;
                'description': string;
                'destRange': string;
                'id': string;
                'kind': string;
                'name': string;
                'network': string;
                'nextHopGateway': string;
                'nextHopInstance': string;
                'nextHopIp': string;
                'nextHopNetwork': string;
                'nextHopVpnTunnel': string;
                'priority': number;
                'selfLink': string;
                'tags': string[];
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
            }

            export interface RouteList {
                'id': string;
                'items': Route[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface Scheduling {
                'automaticRestart': boolean;
                'onHostMaintenance': string;
                'preemptible': boolean;
            }

            export interface SerialPortOutput {
                'contents': string;
                'kind': string;
                'selfLink': string;
            }

            export interface ServiceAccount {
                'email': string;
                'scopes': string[];
            }

            export interface Snapshot {
                'creationTimestamp': string;
                'description': string;
                'diskSizeGb': string;
                'id': string;
                'kind': string;
                'licenses': string[];
                'name': string;
                'selfLink': string;
                'sourceDisk': string;
                'sourceDiskId': string;
                'status': string;
                'storageBytes': string;
                'storageBytesStatus': string;
            }

            export interface SnapshotList {
                'id': string;
                'items': Snapshot[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface SslCertificate {
                'certificate': string;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'privateKey': string;
                'selfLink': string;
            }

            export interface SslCertificateList {
                'id': string;
                'items': SslCertificate[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface Subnetwork {
                'creationTimestamp': string;
                'description': string;
                'gatewayAddress': string;
                'id': string;
                'ipCidrRange': string;
                'kind': string;
                'name': string;
                'network': string;
                'region': string;
                'selfLink': string;
            }

            export interface SubnetworkAggregatedList {
                'id': string;
                'items': {
                    [name: string]: SubnetworksScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface SubnetworkList {
                'id': string;
                'items': Subnetwork[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface SubnetworksScopedList {
                'subnetworks': Subnetwork[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Tags {
                'fingerprint': string;
                'items': string[];
            }

            export interface TargetHttpProxy {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'urlMap': string;
            }

            export interface TargetHttpProxyList {
                'id': string;
                'items': TargetHttpProxy[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetHttpsProxiesSetSslCertificatesRequest {
                'sslCertificates': string[];
            }

            export interface TargetHttpsProxy {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'sslCertificates': string[];
                'urlMap': string;
            }

            export interface TargetHttpsProxyList {
                'id': string;
                'items': TargetHttpsProxy[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetInstance {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'instance': string;
                'kind': string;
                'name': string;
                'natPolicy': string;
                'selfLink': string;
                'zone': string;
            }

            export interface TargetInstanceAggregatedList {
                'id': string;
                'items': {
                    [name: string]: TargetInstancesScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetInstanceList {
                'id': string;
                'items': TargetInstance[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetInstancesScopedList {
                'targetInstances': TargetInstance[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface TargetPool {
                'backupPool': string;
                'creationTimestamp': string;
                'description': string;
                'failoverRatio': number;
                'healthChecks': string[];
                'id': string;
                'instances': string[];
                'kind': string;
                'name': string;
                'region': string;
                'selfLink': string;
                'sessionAffinity': string;
            }

            export interface TargetPoolAggregatedList {
                'id': string;
                'items': {
                    [name: string]: TargetPoolsScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetPoolInstanceHealth {
                'healthStatus': HealthStatus[];
                'kind': string;
            }

            export interface TargetPoolList {
                'id': string;
                'items': TargetPool[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetPoolsAddHealthCheckRequest {
                'healthChecks': HealthCheckReference[];
            }

            export interface TargetPoolsAddInstanceRequest {
                'instances': InstanceReference[];
            }

            export interface TargetPoolsRemoveHealthCheckRequest {
                'healthChecks': HealthCheckReference[];
            }

            export interface TargetPoolsRemoveInstanceRequest {
                'instances': InstanceReference[];
            }

            export interface TargetPoolsScopedList {
                'targetPools': TargetPool[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface TargetReference {
                'target': string;
            }

            export interface TargetVpnGateway {
                'creationTimestamp': string;
                'description': string;
                'forwardingRules': string[];
                'id': string;
                'kind': string;
                'name': string;
                'network': string;
                'region': string;
                'selfLink': string;
                'status': string;
                'tunnels': string[];
            }

            export interface TargetVpnGatewayAggregatedList {
                'id': string;
                'items': {
                    [name: string]: TargetVpnGatewaysScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetVpnGatewayList {
                'id': string;
                'items': TargetVpnGateway[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface TargetVpnGatewaysScopedList {
                'targetVpnGateways': TargetVpnGateway[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface TestFailure {
                'actualService': string;
                'expectedService': string;
                'host': string;
                'path': string;
            }

            export interface UrlMap {
                'creationTimestamp': string;
                'defaultService': string;
                'description': string;
                'fingerprint': string;
                'hostRules': HostRule[];
                'id': string;
                'kind': string;
                'name': string;
                'pathMatchers': PathMatcher[];
                'selfLink': string;
                'tests': UrlMapTest[];
            }

            export interface UrlMapList {
                'id': string;
                'items': UrlMap[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface UrlMapReference {
                'urlMap': string;
            }

            export interface UrlMapTest {
                'description': string;
                'host': string;
                'path': string;
                'service': string;
            }

            export interface UrlMapValidationResult {
                'loadErrors': string[];
                'loadSucceeded': boolean;
                'testFailures': TestFailure[];
                'testPassed': boolean;
            }

            export interface UrlMapsValidateRequest {
                'resource': UrlMap;
            }

            export interface UrlMapsValidateResponse {
                'result': UrlMapValidationResult;
            }

            export interface UsageExportLocation {
                'bucketName': string;
                'reportNamePrefix': string;
            }

            export interface VpnTunnel {
                'creationTimestamp': string;
                'description': string;
                'detailedStatus': string;
                'id': string;
                'ikeVersion': number;
                'kind': string;
                'localTrafficSelector': string[];
                'name': string;
                'peerIp': string;
                'region': string;
                'selfLink': string;
                'sharedSecret': string;
                'sharedSecretHash': string;
                'status': string;
                'targetVpnGateway': string;
            }

            export interface VpnTunnelAggregatedList {
                'id': string;
                'items': {
                    [name: string]: VpnTunnelsScopedList
                
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface VpnTunnelList {
                'id': string;
                'items': VpnTunnel[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface VpnTunnelsScopedList {
                'vpnTunnels': VpnTunnel[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Zone {
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'id': string;
                'kind': string;
                'maintenanceWindows': {
                    'beginTime': string;
                    'description': string;
                    'endTime': string;
                    'name': string;
                }[];
                'name': string;
                'region': string;
                'selfLink': string;
                'status': string;
            }

            export interface ZoneList {
                'id': string;
                'items': Zone[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

        }
    }
}