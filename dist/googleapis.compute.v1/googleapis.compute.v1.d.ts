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

            interface AccessConfig {
                'kind': string;
                'name': string;
                'natIP': string;
                'type': string;
            }

            interface Address {
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

            interface AddressAggregatedList {
                'id': string;
                'items': {
                    [name: string]: AddressesScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface AddressList {
                'id': string;
                'items': Address[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface AddressesScopedList {
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

            interface AttachedDisk {
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

            interface AttachedDiskInitializeParams {
                'diskName': string;
                'diskSizeGb': string;
                'diskType': string;
                'sourceImage': string;
            }

            interface Autoscaler {
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

            interface AutoscalerAggregatedList {
                'id': string;
                'items': {
                    [name: string]: AutoscalersScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface AutoscalerList {
                'id': string;
                'items': Autoscaler[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface AutoscalersScopedList {
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

            interface AutoscalingPolicy {
                'coolDownPeriodSec': number;
                'cpuUtilization': AutoscalingPolicyCpuUtilization;
                'customMetricUtilizations': AutoscalingPolicyCustomMetricUtilization[];
                'loadBalancingUtilization': AutoscalingPolicyLoadBalancingUtilization;
                'maxNumReplicas': number;
                'minNumReplicas': number;
            }

            interface AutoscalingPolicyCpuUtilization {
                'utilizationTarget': number;
            }

            interface AutoscalingPolicyCustomMetricUtilization {
                'metric': string;
                'utilizationTarget': number;
                'utilizationTargetType': string;
            }

            interface AutoscalingPolicyLoadBalancingUtilization {
                'utilizationTarget': number;
            }

            interface Backend {
                'balancingMode': string;
                'capacityScaler': number;
                'description': string;
                'group': string;
                'maxRate': number;
                'maxRatePerInstance': number;
                'maxUtilization': number;
            }

            interface BackendService {
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

            interface BackendServiceGroupHealth {
                'healthStatus': HealthStatus[];
                'kind': string;
            }

            interface BackendServiceList {
                'id': string;
                'items': BackendService[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface DeprecationStatus {
                'deleted': string;
                'deprecated': string;
                'obsolete': string;
                'replacement': string;
                'state': string;
            }

            interface Disk {
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

            interface DiskAggregatedList {
                'id': string;
                'items': {
                    [name: string]: DisksScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface DiskList {
                'id': string;
                'items': Disk[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface DiskMoveRequest {
                'destinationZone': string;
                'targetDisk': string;
            }

            interface DiskType {
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

            interface DiskTypeAggregatedList {
                'id': string;
                'items': {
                    [name: string]: DiskTypesScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface DiskTypeList {
                'id': string;
                'items': DiskType[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface DiskTypesScopedList {
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

            interface DisksScopedList {
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

            interface Firewall {
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

            interface FirewallList {
                'id': string;
                'items': Firewall[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface ForwardingRule {
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

            interface ForwardingRuleAggregatedList {
                'id': string;
                'items': {
                    [name: string]: ForwardingRulesScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface ForwardingRuleList {
                'id': string;
                'items': ForwardingRule[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface ForwardingRulesScopedList {
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

            interface HealthCheckReference {
                'healthCheck': string;
            }

            interface HealthStatus {
                'healthState': string;
                'instance': string;
                'ipAddress': string;
                'port': number;
            }

            interface HostRule {
                'description': string;
                'hosts': string[];
                'pathMatcher': string;
            }

            interface HttpHealthCheck {
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

            interface HttpHealthCheckList {
                'id': string;
                'items': HttpHealthCheck[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface HttpsHealthCheck {
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

            interface HttpsHealthCheckList {
                'id': string;
                'items': HttpsHealthCheck[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Image {
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

            interface ImageList {
                'id': string;
                'items': Image[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Instance {
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

            interface InstanceAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstancesScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceGroup {
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

            interface InstanceGroupAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstanceGroupsScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceGroupList {
                'id': string;
                'items': InstanceGroup[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceGroupManager {
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

            interface InstanceGroupManagerActionsSummary {
                'abandoning': number;
                'creating': number;
                'deleting': number;
                'none': number;
                'recreating': number;
                'refreshing': number;
                'restarting': number;
            }

            interface InstanceGroupManagerAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstanceGroupManagersScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceGroupManagerList {
                'id': string;
                'items': InstanceGroupManager[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceGroupManagersAbandonInstancesRequest {
                'instances': string[];
            }

            interface InstanceGroupManagersDeleteInstancesRequest {
                'instances': string[];
            }

            interface InstanceGroupManagersListManagedInstancesResponse {
                'managedInstances': ManagedInstance[];
            }

            interface InstanceGroupManagersRecreateInstancesRequest {
                'instances': string[];
            }

            interface InstanceGroupManagersScopedList {
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

            interface InstanceGroupManagersSetInstanceTemplateRequest {
                'instanceTemplate': string;
            }

            interface InstanceGroupManagersSetTargetPoolsRequest {
                'fingerprint': string;
                'targetPools': string[];
            }

            interface InstanceGroupsAddInstancesRequest {
                'instances': InstanceReference[];
            }

            interface InstanceGroupsListInstances {
                'id': string;
                'items': InstanceWithNamedPorts[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceGroupsListInstancesRequest {
                'instanceState': string;
            }

            interface InstanceGroupsRemoveInstancesRequest {
                'instances': InstanceReference[];
            }

            interface InstanceGroupsScopedList {
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

            interface InstanceGroupsSetNamedPortsRequest {
                'fingerprint': string;
                'namedPorts': NamedPort[];
            }

            interface InstanceList {
                'id': string;
                'items': Instance[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceMoveRequest {
                'destinationZone': string;
                'targetInstance': string;
            }

            interface InstanceProperties {
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

            interface InstanceReference {
                'instance': string;
            }

            interface InstanceTemplate {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'properties': InstanceProperties;
                'selfLink': string;
            }

            interface InstanceTemplateList {
                'id': string;
                'items': InstanceTemplate[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface InstanceWithNamedPorts {
                'instance': string;
                'namedPorts': NamedPort[];
                'status': string;
            }

            interface InstancesScopedList {
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

            interface InstancesSetMachineTypeRequest {
                'machineType': string;
            }

            interface License {
                'chargesUseFee': boolean;
                'kind': string;
                'name': string;
                'selfLink': string;
            }

            interface MachineType {
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

            interface MachineTypeAggregatedList {
                'id': string;
                'items': {
                    [name: string]: MachineTypesScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface MachineTypeList {
                'id': string;
                'items': MachineType[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface MachineTypesScopedList {
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

            interface ManagedInstance {
                'currentAction': string;
                'id': string;
                'instance': string;
                'instanceStatus': string;
                'lastAttempt': ManagedInstanceLastAttempt;
            }

            interface ManagedInstanceLastAttempt {
                'errors': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
            }

            interface Metadata {
                'fingerprint': string;
                'items': {
                    'key': string;
                    'value': string;
                }[];
                'kind': string;
            }

            interface NamedPort {
                'name': string;
                'port': number;
            }

            interface Network {
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

            interface NetworkInterface {
                'accessConfigs': AccessConfig[];
                'name': string;
                'network': string;
                'networkIP': string;
                'subnetwork': string;
            }

            interface NetworkList {
                'id': string;
                'items': Network[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Operation {
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

            interface OperationAggregatedList {
                'id': string;
                'items': {
                    [name: string]: OperationsScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface OperationList {
                'id': string;
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface OperationsScopedList {
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

            interface PathMatcher {
                'defaultService': string;
                'description': string;
                'name': string;
                'pathRules': PathRule[];
            }

            interface PathRule {
                'paths': string[];
                'service': string;
            }

            interface Project {
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

            interface Quota {
                'limit': number;
                'metric': string;
                'usage': number;
            }

            interface Region {
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

            interface RegionList {
                'id': string;
                'items': Region[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface ResourceGroupReference {
                'group': string;
            }

            interface Route {
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

            interface RouteList {
                'id': string;
                'items': Route[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Scheduling {
                'automaticRestart': boolean;
                'onHostMaintenance': string;
                'preemptible': boolean;
            }

            interface SerialPortOutput {
                'contents': string;
                'kind': string;
                'selfLink': string;
            }

            interface ServiceAccount {
                'email': string;
                'scopes': string[];
            }

            interface Snapshot {
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

            interface SnapshotList {
                'id': string;
                'items': Snapshot[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface SslCertificate {
                'certificate': string;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'privateKey': string;
                'selfLink': string;
            }

            interface SslCertificateList {
                'id': string;
                'items': SslCertificate[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Subnetwork {
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

            interface SubnetworkAggregatedList {
                'id': string;
                'items': {
                    [name: string]: SubnetworksScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface SubnetworkList {
                'id': string;
                'items': Subnetwork[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface SubnetworksScopedList {
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

            interface Tags {
                'fingerprint': string;
                'items': string[];
            }

            interface TargetHttpProxy {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'urlMap': string;
            }

            interface TargetHttpProxyList {
                'id': string;
                'items': TargetHttpProxy[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetHttpsProxiesSetSslCertificatesRequest {
                'sslCertificates': string[];
            }

            interface TargetHttpsProxy {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'sslCertificates': string[];
                'urlMap': string;
            }

            interface TargetHttpsProxyList {
                'id': string;
                'items': TargetHttpsProxy[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetInstance {
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

            interface TargetInstanceAggregatedList {
                'id': string;
                'items': {
                    [name: string]: TargetInstancesScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetInstanceList {
                'id': string;
                'items': TargetInstance[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetInstancesScopedList {
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

            interface TargetPool {
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

            interface TargetPoolAggregatedList {
                'id': string;
                'items': {
                    [name: string]: TargetPoolsScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetPoolInstanceHealth {
                'healthStatus': HealthStatus[];
                'kind': string;
            }

            interface TargetPoolList {
                'id': string;
                'items': TargetPool[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetPoolsAddHealthCheckRequest {
                'healthChecks': HealthCheckReference[];
            }

            interface TargetPoolsAddInstanceRequest {
                'instances': InstanceReference[];
            }

            interface TargetPoolsRemoveHealthCheckRequest {
                'healthChecks': HealthCheckReference[];
            }

            interface TargetPoolsRemoveInstanceRequest {
                'instances': InstanceReference[];
            }

            interface TargetPoolsScopedList {
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

            interface TargetReference {
                'target': string;
            }

            interface TargetVpnGateway {
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

            interface TargetVpnGatewayAggregatedList {
                'id': string;
                'items': {
                    [name: string]: TargetVpnGatewaysScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetVpnGatewayList {
                'id': string;
                'items': TargetVpnGateway[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface TargetVpnGatewaysScopedList {
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

            interface TestFailure {
                'actualService': string;
                'expectedService': string;
                'host': string;
                'path': string;
            }

            interface UrlMap {
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

            interface UrlMapList {
                'id': string;
                'items': UrlMap[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface UrlMapReference {
                'urlMap': string;
            }

            interface UrlMapTest {
                'description': string;
                'host': string;
                'path': string;
                'service': string;
            }

            interface UrlMapValidationResult {
                'loadErrors': string[];
                'loadSucceeded': boolean;
                'testFailures': TestFailure[];
                'testPassed': boolean;
            }

            interface UrlMapsValidateRequest {
                'resource': UrlMap;
            }

            interface UrlMapsValidateResponse {
                'result': UrlMapValidationResult;
            }

            interface UsageExportLocation {
                'bucketName': string;
                'reportNamePrefix': string;
            }

            interface VpnTunnel {
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

            interface VpnTunnelAggregatedList {
                'id': string;
                'items': {
                    [name: string]: VpnTunnelsScopedList
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface VpnTunnelList {
                'id': string;
                'items': VpnTunnel[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface VpnTunnelsScopedList {
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

            interface Zone {
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

            interface ZoneList {
                'id': string;
                'items': Zone[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

        }
    }
}