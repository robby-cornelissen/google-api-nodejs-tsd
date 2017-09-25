// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        compute(version: string): any;
        compute(version: 'beta'): compute.beta.Compute;
    }

    namespace compute {
        namespace beta {
            export interface Compute {
                new(options: any): Compute;

                'acceleratorTypes': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: AcceleratorTypeAggregatedList, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'acceleratorType': string, 'project': string, 'zone': string}, callback: (error: any, body: AcceleratorType, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: AcceleratorTypeList, response: any) => void) => Request;
                };
                'addresses': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: AddressAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'address': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'address': string, 'project': string, 'region': string}, callback: (error: any, body: Address, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: AddressList, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'resource': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'autoscalers': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: AutoscalerAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'autoscaler': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'autoscaler': string, 'project': string, 'zone': string}, callback: (error: any, body: Autoscaler, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: AutoscalerList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'autoscaler'?: string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string, 'zone': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'autoscaler'?: string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'backendBuckets': {
                    'delete': (parameters: { [key: string]: any; 'backendBucket': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'backendBucket': string, 'project': string}, callback: (error: any, body: BackendBucket, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackendBucketList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'backendBucket': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'backendBucket': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'backendServices': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackendServiceAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'backendService': string, 'project': string}, callback: (error: any, body: BackendService, response: any) => void) => Request;
                    'getHealth': (parameters: { [key: string]: any; 'backendService': string, 'project': string}, callback: (error: any, body: BackendServiceGroupHealth, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: BackendServiceList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setSecurityPolicy': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'diskTypes': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DiskTypeAggregatedList, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'diskType': string, 'project': string, 'zone': string}, callback: (error: any, body: DiskType, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: DiskTypeList, response: any) => void) => Request;
                };
                'disks': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: DiskAggregatedList, response: any) => void) => Request;
                    'createSnapshot': (parameters: { [key: string]: any; 'disk': string, 'guestFlush'?: boolean, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'disk': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'disk': string, 'project': string, 'zone': string}, callback: (error: any, body: Disk, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'sourceImage'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: DiskList, response: any) => void) => Request;
                    'resize': (parameters: { [key: string]: any; 'disk': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'resource': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string, 'zone': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'firewalls': {
                    'delete': (parameters: { [key: string]: any; 'firewall': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'firewall': string, 'project': string}, callback: (error: any, body: Firewall, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: FirewallList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'firewall': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'firewall': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'forwardingRules': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ForwardingRuleAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'forwardingRule': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'forwardingRule': string, 'project': string, 'region': string}, callback: (error: any, body: ForwardingRule, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: ForwardingRuleList, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'resource': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTarget': (parameters: { [key: string]: any; 'forwardingRule': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'globalAddresses': {
                    'delete': (parameters: { [key: string]: any; 'address': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'address': string, 'project': string}, callback: (error: any, body: Address, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: AddressList, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'globalForwardingRules': {
                    'delete': (parameters: { [key: string]: any; 'forwardingRule': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'forwardingRule': string, 'project': string}, callback: (error: any, body: ForwardingRule, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ForwardingRuleList, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTarget': (parameters: { [key: string]: any; 'forwardingRule': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'globalOperations': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'operation': string, 'project': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'operation': string, 'project': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'healthChecks': {
                    'delete': (parameters: { [key: string]: any; 'healthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'healthCheck': string, 'project': string}, callback: (error: any, body: HealthCheck, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: HealthCheckList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'healthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'healthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'httpHealthChecks': {
                    'delete': (parameters: { [key: string]: any; 'httpHealthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'httpHealthCheck': string, 'project': string}, callback: (error: any, body: HttpHealthCheck, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: HttpHealthCheckList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'httpHealthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'httpHealthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'httpsHealthChecks': {
                    'delete': (parameters: { [key: string]: any; 'httpsHealthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'httpsHealthCheck': string, 'project': string}, callback: (error: any, body: HttpsHealthCheck, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: HttpsHealthCheckList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'httpsHealthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'httpsHealthCheck': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'images': {
                    'delete': (parameters: { [key: string]: any; 'image': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deprecate': (parameters: { [key: string]: any; 'image': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'image': string, 'project': string}, callback: (error: any, body: Image, response: any) => void) => Request;
                    'getFromFamily': (parameters: { [key: string]: any; 'family': string, 'project': string}, callback: (error: any, body: Image, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'forceCreate'?: boolean, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ImageList, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'instanceGroupManagers': {
                    'abandonInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceGroupManagerAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deleteInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManager, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManagerList, response: any) => void) => Request;
                    'listManagedInstances': (parameters: { [key: string]: any; 'filter'?: string, 'instanceGroupManager': string, 'maxResults'?: number, 'order_by'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupManagersListManagedInstancesResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'recreateInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resize': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'size': number, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resizeAdvanced': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setAutoHealingPolicies': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setInstanceTemplate': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTargetPools': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string, 'zone': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'instanceGroups': {
                    'addInstances': (parameters: { [key: string]: any; 'instanceGroup': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceGroupAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instanceGroup': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instanceGroup': string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroup, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupList, response: any) => void) => Request;
                    'listInstances': (parameters: { [key: string]: any; 'filter'?: string, 'instanceGroup': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceGroupsListInstances, response: any) => void) => Request;
                    'removeInstances': (parameters: { [key: string]: any; 'instanceGroup': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setNamedPorts': (parameters: { [key: string]: any; 'instanceGroup': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string, 'zone': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'instanceTemplates': {
                    'delete': (parameters: { [key: string]: any; 'instanceTemplate': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instanceTemplate': string, 'project': string}, callback: (error: any, body: InstanceTemplate, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceTemplateList, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'instances': {
                    'addAccessConfig': (parameters: { [key: string]: any; 'instance': string, 'networkInterface': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InstanceAggregatedList, response: any) => void) => Request;
                    'attachDisk': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deleteAccessConfig': (parameters: { [key: string]: any; 'accessConfig': string, 'instance': string, 'networkInterface': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'detachDisk': (parameters: { [key: string]: any; 'deviceName': string, 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'zone': string}, callback: (error: any, body: Instance, response: any) => void) => Request;
                    'getSerialPortOutput': (parameters: { [key: string]: any; 'instance': string, 'port'?: number, 'project': string, 'start'?: string, 'zone': string}, callback: (error: any, body: SerialPortOutput, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceList, response: any) => void) => Request;
                    'listReferrers': (parameters: { [key: string]: any; 'filter'?: string, 'instance': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: InstanceListReferrers, response: any) => void) => Request;
                    'reset': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setDiskAutoDelete': (parameters: { [key: string]: any; 'autoDelete': boolean, 'deviceName': string, 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setMachineResources': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setMachineType': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setMetadata': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setMinCpuPlatform': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setScheduling': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setServiceAccount': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTags': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'start': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'startWithEncryptionKey': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'stop': (parameters: { [key: string]: any; 'instance': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string, 'zone': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'updateAccessConfig': (parameters: { [key: string]: any; 'instance': string, 'networkInterface': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'updateNetworkInterface': (parameters: { [key: string]: any; 'instance': string, 'networkInterface': string, 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'interconnectAttachments': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InterconnectAttachmentAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'interconnectAttachment': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'interconnectAttachment': string, 'project': string, 'region': string}, callback: (error: any, body: InterconnectAttachment, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: InterconnectAttachmentList, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'interconnectLocations': {
                    'get': (parameters: { [key: string]: any; 'interconnectLocation': string, 'project': string}, callback: (error: any, body: InterconnectLocation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InterconnectLocationList, response: any) => void) => Request;
                };
                'interconnects': {
                    'delete': (parameters: { [key: string]: any; 'interconnect': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'interconnect': string, 'project': string}, callback: (error: any, body: Interconnect, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: InterconnectList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'interconnect': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'licenses': {
                    'get': (parameters: { [key: string]: any; 'license': string, 'project': string}, callback: (error: any, body: License, response: any) => void) => Request;
                };
                'machineTypes': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: MachineTypeAggregatedList, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'machineType': string, 'project': string, 'zone': string}, callback: (error: any, body: MachineType, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: MachineTypeList, response: any) => void) => Request;
                };
                'networks': {
                    'addPeering': (parameters: { [key: string]: any; 'network': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'network': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'network': string, 'project': string}, callback: (error: any, body: Network, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: NetworkList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'network': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'removePeering': (parameters: { [key: string]: any; 'network': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'switchToCustomMode': (parameters: { [key: string]: any; 'network': string, 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'projects': {
                    'disableXpnHost': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'disableXpnResource': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'enableXpnHost': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'enableXpnResource': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'getXpnHost': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'getXpnResources': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'order_by'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ProjectsGetXpnResources, response: any) => void) => Request;
                    'listXpnHosts': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'order_by'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: XpnHostList, response: any) => void) => Request;
                    'moveDisk': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'moveInstance': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setCommonInstanceMetadata': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setUsageExportBucket': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'regionAutoscalers': {
                    'delete': (parameters: { [key: string]: any; 'autoscaler': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'autoscaler': string, 'project': string, 'region': string}, callback: (error: any, body: Autoscaler, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: RegionAutoscalerList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'autoscaler'?: string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'autoscaler'?: string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'regionBackendServices': {
                    'delete': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'region': string}, callback: (error: any, body: BackendService, response: any) => void) => Request;
                    'getHealth': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'region': string}, callback: (error: any, body: BackendServiceGroupHealth, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: BackendServiceList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'backendService': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'regionCommitments': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: CommitmentAggregatedList, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'commitment': string, 'project': string, 'region': string}, callback: (error: any, body: Commitment, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: CommitmentList, response: any) => void) => Request;
                };
                'regionInstanceGroupManagers': {
                    'abandonInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'deleteInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string}, callback: (error: any, body: InstanceGroupManager, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: RegionInstanceGroupManagerList, response: any) => void) => Request;
                    'listManagedInstances': (parameters: { [key: string]: any; 'filter'?: string, 'instanceGroupManager': string, 'maxResults'?: number, 'order_by'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: RegionInstanceGroupManagersListInstancesResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'recreateInstances': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resize': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string, 'size': number}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setAutoHealingPolicies': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setInstanceTemplate': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setTargetPools': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'instanceGroupManager': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'regionInstanceGroups': {
                    'get': (parameters: { [key: string]: any; 'instanceGroup': string, 'project': string, 'region': string}, callback: (error: any, body: InstanceGroup, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: RegionInstanceGroupList, response: any) => void) => Request;
                    'listInstances': (parameters: { [key: string]: any; 'filter'?: string, 'instanceGroup': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: RegionInstanceGroupsListInstances, response: any) => void) => Request;
                    'setNamedPorts': (parameters: { [key: string]: any; 'instanceGroup': string, 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'regionOperations': {
                    'delete': (parameters: { [key: string]: any; 'operation': string, 'project': string, 'region': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'operation': string, 'project': string, 'region': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'regions': {
                    'get': (parameters: { [key: string]: any; 'project': string, 'region': string}, callback: (error: any, body: Region, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: RegionList, response: any) => void) => Request;
                };
                'routers': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: RouterAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'router': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'region': string, 'router': string}, callback: (error: any, body: Router, response: any) => void) => Request;
                    'getRouterStatus': (parameters: { [key: string]: any; 'project': string, 'region': string, 'router': string}, callback: (error: any, body: RouterStatusResponse, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: RouterList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'router': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'preview': (parameters: { [key: string]: any; 'project': string, 'region': string, 'router': string}, callback: (error: any, body: RoutersPreviewResponse, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'router': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'routes': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'route': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'route': string}, callback: (error: any, body: Route, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: RouteList, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'securityPolicies': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'securityPolicy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'securityPolicy': string}, callback: (error: any, body: SecurityPolicy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: SecurityPolicyList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'securityPolicy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'snapshots': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'snapshot': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'snapshot': string}, callback: (error: any, body: Snapshot, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: SnapshotList, response: any) => void) => Request;
                    'setLabels': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'sslCertificates': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'sslCertificate': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'sslCertificate': string}, callback: (error: any, body: SslCertificate, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: SslCertificateList, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'subnetworks': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: SubnetworkAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'subnetwork': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'expandIpCidrRange': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'subnetwork': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'region': string, 'subnetwork': string}, callback: (error: any, body: Subnetwork, response: any) => void) => Request;
                    'getIamPolicy': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: SubnetworkList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'subnetwork': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setIamPolicy': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'setPrivateIpGoogleAccess': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'subnetwork': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'targetHttpProxies': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetHttpProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'targetHttpProxy': string}, callback: (error: any, body: TargetHttpProxy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetHttpProxyList, response: any) => void) => Request;
                    'setUrlMap': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetHttpProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'targetHttpsProxies': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetHttpsProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'targetHttpsProxy': string}, callback: (error: any, body: TargetHttpsProxy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetHttpsProxyList, response: any) => void) => Request;
                    'setSslCertificates': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetHttpsProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setUrlMap': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetHttpsProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'targetInstances': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetInstanceAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetInstance': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'targetInstance': string, 'zone': string}, callback: (error: any, body: TargetInstance, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: TargetInstanceList, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string, 'zone': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'targetPools': {
                    'addHealthCheck': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'addInstance': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetPoolAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: TargetPool, response: any) => void) => Request;
                    'getHealth': (parameters: { [key: string]: any; 'project': string, 'region': string, 'targetPool': string}, callback: (error: any, body: TargetPoolInstanceHealth, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: TargetPoolList, response: any) => void) => Request;
                    'removeHealthCheck': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'removeInstance': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setBackup': (parameters: { [key: string]: any; 'failoverRatio'?: number, 'project': string, 'region': string, 'requestId'?: string, 'targetPool': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'targetSslProxies': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetSslProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'targetSslProxy': string}, callback: (error: any, body: TargetSslProxy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetSslProxyList, response: any) => void) => Request;
                    'setBackendService': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetSslProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setProxyHeader': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetSslProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setSslCertificates': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetSslProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'targetTcpProxies': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetTcpProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'targetTcpProxy': string}, callback: (error: any, body: TargetTcpProxy, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetTcpProxyList, response: any) => void) => Request;
                    'setBackendService': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetTcpProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'setProxyHeader': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'targetTcpProxy': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'targetVpnGateways': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: TargetVpnGatewayAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'targetVpnGateway': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'region': string, 'targetVpnGateway': string}, callback: (error: any, body: TargetVpnGateway, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: TargetVpnGatewayList, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'urlMaps': {
                    'delete': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'urlMap': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'urlMap': string}, callback: (error: any, body: UrlMap, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'invalidateCache': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'urlMap': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: UrlMapList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'urlMap': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'project': string, 'requestId'?: string, 'urlMap': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'validate': (parameters: { [key: string]: any; 'project': string, 'urlMap': string}, callback: (error: any, body: UrlMapsValidateResponse, response: any) => void) => Request;
                };
                'vpnTunnels': {
                    'aggregatedList': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: VpnTunnelAggregatedList, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string, 'vpnTunnel': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'project': string, 'region': string, 'vpnTunnel': string}, callback: (error: any, body: VpnTunnel, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'project': string, 'region': string, 'requestId'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'region': string}, callback: (error: any, body: VpnTunnelList, response: any) => void) => Request;
                    'testIamPermissions': (parameters: { [key: string]: any; 'project': string, 'region': string, 'resource': string}, callback: (error: any, body: TestPermissionsResponse, response: any) => void) => Request;
                };
                'zoneOperations': {
                    'delete': (parameters: { [key: string]: any; 'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };
                'zones': {
                    'get': (parameters: { [key: string]: any; 'project': string, 'zone': string}, callback: (error: any, body: Zone, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'project': string}, callback: (error: any, body: ZoneList, response: any) => void) => Request;
                };

            }

            export interface AcceleratorConfig {
                'acceleratorCount': number;
                'acceleratorType': string;
            }

            export interface AcceleratorType {
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'id': string;
                'kind': string;
                'maximumCardsPerInstance': number;
                'name': string;
                'selfLink': string;
                'zone': string;
            }

            export interface AcceleratorTypeAggregatedList {
                'id': string;
                'items': {
                    [name: string]: AcceleratorTypesScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AcceleratorTypeList {
                'id': string;
                'items': AcceleratorType[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AcceleratorTypesScopedList {
                'acceleratorTypes': AcceleratorType[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AccessConfig {
                'kind': string;
                'name': string;
                'natIP': string;
                'publicPtrDomainName': string;
                'setPublicPtr': boolean;
                'type': string;
            }

            export interface Address {
                'address': string;
                'addressType': string;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'ipVersion': string;
                'kind': string;
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'name': string;
                'region': string;
                'selfLink': string;
                'status': string;
                'subnetwork': string;
                'users': string[];
            }

            export interface AddressAggregatedList {
                'id': string;
                'items': {
                    [name: string]: AddressesScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AddressList {
                'id': string;
                'items': Address[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface AliasIpRange {
                'ipCidrRange': string;
                'subnetworkRangeName': string;
            }

            export interface AttachedDisk {
                'autoDelete': boolean;
                'boot': boolean;
                'deviceName': string;
                'diskEncryptionKey': CustomerEncryptionKey;
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
                'diskStorageType': string;
                'diskType': string;
                'sourceImage': string;
                'sourceImageEncryptionKey': CustomerEncryptionKey;
            }

            export interface AuditConfig {
                'auditLogConfigs': AuditLogConfig[];
                'exemptedMembers': string[];
                'service': string;
            }

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface AuthorizationLoggingOptions {
                'permissionType': string;
            }

            export interface Autoscaler {
                'autoscalingPolicy': AutoscalingPolicy;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'region': string;
                'selfLink': string;
                'status': string;
                'statusDetails': AutoscalerStatusDetails[];
                'target': string;
                'zone': string;
            }

            export interface AutoscalerAggregatedList {
                'id': string;
                'items': {
                    [name: string]: AutoscalersScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AutoscalerList {
                'id': string;
                'items': Autoscaler[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface AutoscalerStatusDetails {
                'message': string;
                'type': string;
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
                'filter': string;
                'metric': string;
                'singleInstanceAssignment': number;
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
                'maxConnections': number;
                'maxConnectionsPerInstance': number;
                'maxRate': number;
                'maxRatePerInstance': number;
                'maxUtilization': number;
            }

            export interface BackendBucket {
                'bucketName': string;
                'creationTimestamp': string;
                'description': string;
                'enableCdn': boolean;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
            }

            export interface BackendBucketList {
                'id': string;
                'items': BackendBucket[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface BackendService {
                'affinityCookieTtlSec': number;
                'backends': Backend[];
                'cdnPolicy': BackendServiceCdnPolicy;
                'connectionDraining': ConnectionDraining;
                'creationTimestamp': string;
                'description': string;
                'enableCDN': boolean;
                'fingerprint': string;
                'healthChecks': string[];
                'iap': BackendServiceIAP;
                'id': string;
                'kind': string;
                'loadBalancingScheme': string;
                'name': string;
                'port': number;
                'portName': string;
                'protocol': string;
                'region': string;
                'securityPolicy': string;
                'selfLink': string;
                'sessionAffinity': string;
                'timeoutSec': number;
            }

            export interface BackendServiceAggregatedList {
                'id': string;
                'items': {
                    [name: string]: BackendServicesScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface BackendServiceCdnPolicy {
                'cacheKeyPolicy': CacheKeyPolicy;
            }

            export interface BackendServiceGroupHealth {
                'healthStatus': HealthStatus[];
                'kind': string;
            }

            export interface BackendServiceIAP {
                'enabled': boolean;
                'oauth2ClientId': string;
                'oauth2ClientSecret': string;
                'oauth2ClientSecretSha256': string;
            }

            export interface BackendServiceList {
                'id': string;
                'items': BackendService[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface BackendServicesScopedList {
                'backendServices': BackendService[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Binding {
                'condition': Expr;
                'members': string[];
                'role': string;
            }

            export interface CacheInvalidationRule {
                'host': string;
                'path': string;
            }

            export interface CacheKeyPolicy {
                'includeHost': boolean;
                'includeProtocol': boolean;
                'includeQueryString': boolean;
                'queryStringBlacklist': string[];
                'queryStringWhitelist': string[];
            }

            export interface Commitment {
                'creationTimestamp': string;
                'description': string;
                'endTimestamp': string;
                'id': string;
                'kind': string;
                'name': string;
                'plan': string;
                'region': string;
                'resources': ResourceCommitment[];
                'selfLink': string;
                'startTimestamp': string;
                'status': string;
                'statusMessage': string;
            }

            export interface CommitmentAggregatedList {
                'id': string;
                'items': {
                    [name: string]: CommitmentsScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface CommitmentList {
                'id': string;
                'items': Commitment[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface CommitmentsScopedList {
                'commitments': Commitment[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Condition {
                'iam': string;
                'op': string;
                'svc': string;
                'sys': string;
                'value': string;
                'values': string[];
            }

            export interface ConnectionDraining {
                'drainingTimeoutSec': number;
            }

            export interface CustomerEncryptionKey {
                'rawKey': string;
                'rsaEncryptedKey': string;
                'sha256': string;
            }

            export interface CustomerEncryptionKeyProtectedDisk {
                'diskEncryptionKey': CustomerEncryptionKey;
                'source': string;
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
                'diskEncryptionKey': CustomerEncryptionKey;
                'id': string;
                'kind': string;
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'lastAttachTimestamp': string;
                'lastDetachTimestamp': string;
                'licenses': string[];
                'name': string;
                'options': string;
                'selfLink': string;
                'sizeGb': string;
                'sourceImage': string;
                'sourceImageEncryptionKey': CustomerEncryptionKey;
                'sourceImageId': string;
                'sourceSnapshot': string;
                'sourceSnapshotEncryptionKey': CustomerEncryptionKey;
                'sourceSnapshotId': string;
                'status': string;
                'storageType': string;
                'type': string;
                'users': string[];
                'zone': string;
            }

            export interface DiskAggregatedList {
                'id': string;
                'items': {
                    [name: string]: DisksScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface DiskList {
                'id': string;
                'items': Disk[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface DiskTypeList {
                'id': string;
                'items': DiskType[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface DisksResizeRequest {
                'sizeGb': string;
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

            export interface DistributionPolicy {
                'zones': DistributionPolicyZoneConfiguration[];
            }

            export interface DistributionPolicyZoneConfiguration {
                'zone': string;
            }

            export interface Expr {
                'description': string;
                'expression': string;
                'location': string;
                'title': string;
            }

            export interface Firewall {
                'allowed': {
                    'IPProtocol': string;
                    'ports': string[];
                }[];
                'creationTimestamp': string;
                'denied': {
                    'IPProtocol': string;
                    'ports': string[];
                }[];
                'description': string;
                'destinationRanges': string[];
                'direction': string;
                'id': string;
                'kind': string;
                'name': string;
                'network': string;
                'priority': number;
                'selfLink': string;
                'sourceRanges': string[];
                'sourceServiceAccounts': string[];
                'sourceTags': string[];
                'targetServiceAccounts': string[];
                'targetTags': string[];
            }

            export interface FirewallList {
                'id': string;
                'items': Firewall[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface FixedOrPercent {
                'calculated': number;
                'fixed': number;
                'percent': number;
            }

            export interface ForwardingRule {
                'IPAddress': string;
                'IPProtocol': string;
                'backendService': string;
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'ipVersion': string;
                'kind': string;
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'loadBalancingScheme': string;
                'name': string;
                'network': string;
                'portRange': string;
                'ports': string[];
                'region': string;
                'selfLink': string;
                'serviceLabel': string;
                'serviceName': string;
                'subnetwork': string;
                'target': string;
            }

            export interface ForwardingRuleAggregatedList {
                'id': string;
                'items': {
                    [name: string]: ForwardingRulesScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface ForwardingRuleList {
                'id': string;
                'items': ForwardingRule[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface GlobalSetLabelsRequest {
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface GuestOsFeature {
                'type': string;
            }

            export interface HTTPHealthCheck {
                'host': string;
                'port': number;
                'portName': string;
                'proxyHeader': string;
                'requestPath': string;
            }

            export interface HTTPSHealthCheck {
                'host': string;
                'port': number;
                'portName': string;
                'proxyHeader': string;
                'requestPath': string;
            }

            export interface HealthCheck {
                'checkIntervalSec': number;
                'creationTimestamp': string;
                'description': string;
                'healthyThreshold': number;
                'httpHealthCheck': HTTPHealthCheck;
                'httpsHealthCheck': HTTPSHealthCheck;
                'id': string;
                'kind': string;
                'name': string;
                'selfLink': string;
                'sslHealthCheck': SSLHealthCheck;
                'tcpHealthCheck': TCPHealthCheck;
                'timeoutSec': number;
                'type': string;
                'udpHealthCheck': UDPHealthCheck;
                'unhealthyThreshold': number;
            }

            export interface HealthCheckList {
                'id': string;
                'items': HealthCheck[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Image {
                'archiveSizeBytes': string;
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'diskSizeGb': string;
                'family': string;
                'guestOsFeatures': GuestOsFeature[];
                'id': string;
                'imageEncryptionKey': CustomerEncryptionKey;
                'kind': string;
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'licenses': string[];
                'name': string;
                'rawDisk': {
                    'containerType': string;
                    'sha1Checksum': string;
                    'source': string;
                };
                'selfLink': string;
                'sourceDisk': string;
                'sourceDiskEncryptionKey': CustomerEncryptionKey;
                'sourceDiskId': string;
                'sourceImage': string;
                'sourceImageEncryptionKey': CustomerEncryptionKey;
                'sourceImageId': string;
                'sourceType': string;
                'status': string;
            }

            export interface ImageList {
                'id': string;
                'items': Image[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Instance {
                'canIpForward': boolean;
                'cpuPlatform': string;
                'creationTimestamp': string;
                'description': string;
                'disks': AttachedDisk[];
                'guestAccelerators': AcceleratorConfig[];
                'id': string;
                'kind': string;
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'machineType': string;
                'metadata': Metadata;
                'minCpuPlatform': string;
                'name': string;
                'networkInterfaces': NetworkInterface[];
                'scheduling': Scheduling;
                'selfLink': string;
                'serviceAccounts': ServiceAccount[];
                'startRestricted': boolean;
                'status': string;
                'statusMessage': string;
                'tags': Tags;
                'zone': string;
            }

            export interface InstanceAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstancesScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'region': string;
                'selfLink': string;
                'size': number;
                'subnetwork': string;
                'zone': string;
            }

            export interface InstanceGroupAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstanceGroupsScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceGroupList {
                'id': string;
                'items': InstanceGroup[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceGroupManager {
                'autoHealingPolicies': InstanceGroupManagerAutoHealingPolicy[];
                'baseInstanceName': string;
                'creationTimestamp': string;
                'currentActions': InstanceGroupManagerActionsSummary;
                'description': string;
                'distributionPolicy': DistributionPolicy;
                'failoverAction': string;
                'fingerprint': string;
                'id': string;
                'instanceGroup': string;
                'instanceTemplate': string;
                'kind': string;
                'name': string;
                'namedPorts': NamedPort[];
                'pendingActions': InstanceGroupManagerPendingActionsSummary;
                'region': string;
                'selfLink': string;
                'serviceAccount': string;
                'targetPools': string[];
                'targetSize': number;
                'updatePolicy': InstanceGroupManagerUpdatePolicy;
                'versions': InstanceGroupManagerVersion[];
                'zone': string;
            }

            export interface InstanceGroupManagerActionsSummary {
                'abandoning': number;
                'creating': number;
                'creatingWithoutRetries': number;
                'deleting': number;
                'none': number;
                'recreating': number;
                'refreshing': number;
                'restarting': number;
                'verifying': number;
            }

            export interface InstanceGroupManagerAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InstanceGroupManagersScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceGroupManagerAutoHealingPolicy {
                'healthCheck': string;
                'initialDelaySec': number;
            }

            export interface InstanceGroupManagerList {
                'id': string;
                'items': InstanceGroupManager[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceGroupManagerPendingActionsSummary {
                'creating': number;
                'deleting': number;
                'recreating': number;
                'restarting': number;
            }

            export interface InstanceGroupManagerUpdatePolicy {
                'maxSurge': FixedOrPercent;
                'maxUnavailable': FixedOrPercent;
                'minReadySec': number;
                'minimalAction': string;
                'type': string;
            }

            export interface InstanceGroupManagerVersion {
                'instanceTemplate': string;
                'name': string;
                'targetSize': FixedOrPercent;
            }

            export interface InstanceGroupManagersAbandonInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersDeleteInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersListManagedInstancesResponse {
                'managedInstances': ManagedInstance[];
                'nextPageToken': string;
            }

            export interface InstanceGroupManagersRecreateInstancesRequest {
                'instances': string[];
            }

            export interface InstanceGroupManagersResizeAdvancedRequest {
                'noCreationRetries': boolean;
                'targetSize': number;
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

            export interface InstanceGroupManagersSetAutoHealingRequest {
                'autoHealingPolicies': InstanceGroupManagerAutoHealingPolicy[];
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceListReferrers {
                'id': string;
                'items': Reference[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InstanceMoveRequest {
                'destinationZone': string;
                'targetInstance': string;
            }

            export interface InstanceProperties {
                'canIpForward': boolean;
                'description': string;
                'disks': AttachedDisk[];
                'guestAccelerators': AcceleratorConfig[];
                'labels': {
                    [name: string]: string
                ;
                };
                'machineType': string;
                'metadata': Metadata;
                'minCpuPlatform': string;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface InstancesSetLabelsRequest {
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface InstancesSetMachineResourcesRequest {
                'guestAccelerators': AcceleratorConfig[];
            }

            export interface InstancesSetMachineTypeRequest {
                'machineType': string;
            }

            export interface InstancesSetMinCpuPlatformRequest {
                'minCpuPlatform': string;
            }

            export interface InstancesSetServiceAccountRequest {
                'email': string;
                'scopes': string[];
            }

            export interface InstancesStartWithEncryptionKeyRequest {
                'disks': CustomerEncryptionKeyProtectedDisk[];
            }

            export interface Interconnect {
                'adminEnabled': boolean;
                'circuitInfos': InterconnectCircuitInfo[];
                'connectionAuthorization': string;
                'creationTimestamp': string;
                'customerName': string;
                'description': string;
                'expectedOutages': InterconnectOutageNotification[];
                'googleIpAddress': string;
                'googleReferenceId': string;
                'id': string;
                'interconnectAttachments': string[];
                'interconnectType': string;
                'kind': string;
                'linkType': string;
                'location': string;
                'name': string;
                'nocContactEmail': string;
                'operationalStatus': string;
                'peerIpAddress': string;
                'provisionedLinkCount': number;
                'requestedLinkCount': number;
                'selfLink': string;
            }

            export interface InterconnectAttachment {
                'cloudRouterIpAddress': string;
                'creationTimestamp': string;
                'customerRouterIpAddress': string;
                'description': string;
                'googleReferenceId': string;
                'id': string;
                'interconnect': string;
                'kind': string;
                'name': string;
                'operationalStatus': string;
                'privateInterconnectInfo': InterconnectAttachmentPrivateInfo;
                'region': string;
                'router': string;
                'selfLink': string;
            }

            export interface InterconnectAttachmentAggregatedList {
                'id': string;
                'items': {
                    [name: string]: InterconnectAttachmentsScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InterconnectAttachmentList {
                'id': string;
                'items': InterconnectAttachment[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InterconnectAttachmentPrivateInfo {
                'tag8021q': number;
            }

            export interface InterconnectAttachmentsScopedList {
                'interconnectAttachments': InterconnectAttachment[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InterconnectCircuitInfo {
                'customerDemarcId': string;
                'googleCircuitId': string;
                'googleDemarcId': string;
            }

            export interface InterconnectList {
                'id': string;
                'items': Interconnect[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InterconnectLocation {
                'address': string;
                'availabilityZone': string;
                'city': string;
                'continent': string;
                'creationTimestamp': string;
                'description': string;
                'facilityProvider': string;
                'facilityProviderFacilityId': string;
                'id': string;
                'kind': string;
                'name': string;
                'peeringdbFacilityId': string;
                'regionInfos': InterconnectLocationRegionInfo[];
                'selfLink': string;
            }

            export interface InterconnectLocationList {
                'id': string;
                'items': InterconnectLocation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface InterconnectLocationRegionInfo {
                'expectedRttMs': string;
                'locationPresence': string;
                'region': string;
                'regionKey': string;
            }

            export interface InterconnectOutageNotification {
                'affectedCircuits': string[];
                'description': string;
                'endTime': string;
                'issueType': string;
                'name': string;
                'source': string;
                'startTime': string;
                'state': string;
            }

            export interface License {
                'chargesUseFee': boolean;
                'kind': string;
                'name': string;
                'selfLink': string;
            }

            export interface LogConfig {
                'cloudAudit': LogConfigCloudAuditOptions;
                'counter': LogConfigCounterOptions;
                'dataAccess': LogConfigDataAccessOptions;
            }

            export interface LogConfigCloudAuditOptions {
                'authorizationLoggingOptions': AuthorizationLoggingOptions;
                'logName': string;
            }

            export interface LogConfigCounterOptions {
                'field': string;
                'metric': string;
            }

            export interface LogConfigDataAccessOptions {
                'logMode': string;
            }

            export interface MachineType {
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'guestCpus': number;
                'id': string;
                'isSharedCpu': boolean;
                'kind': string;
                'maximumPersistentDisks': number;
                'maximumPersistentDisksSizeGb': string;
                'memoryMb': number;
                'name': string;
                'selfLink': string;
                'zone': string;
            }

            export interface MachineTypeAggregatedList {
                'id': string;
                'items': {
                    [name: string]: MachineTypesScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface MachineTypeList {
                'id': string;
                'items': MachineType[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'version': ManagedInstanceVersion;
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

            export interface ManagedInstanceVersion {
                'instanceTemplate': string;
                'name': string;
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
                'peerings': NetworkPeering[];
                'routingConfig': NetworkRoutingConfig;
                'selfLink': string;
                'subnetworks': string[];
            }

            export interface NetworkInterface {
                'accessConfigs': AccessConfig[];
                'aliasIpRanges': AliasIpRange[];
                'fingerprint': string;
                'kind': string;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface NetworkPeering {
                'autoCreateRoutes': boolean;
                'name': string;
                'network': string;
                'state': string;
                'stateDetails': string;
            }

            export interface NetworkRoutingConfig {
                'routingMode': string;
            }

            export interface NetworksAddPeeringRequest {
                'autoCreateRoutes': boolean;
                'name': string;
                'peerNetwork': string;
            }

            export interface NetworksRemovePeeringRequest {
                'name': string;
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
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface OperationList {
                'id': string;
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface Policy {
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
                'etag': string;
                'iamOwned': boolean;
                'rules': Rule[];
                'version': number;
            }

            export interface Project {
                'commonInstanceMetadata': Metadata;
                'creationTimestamp': string;
                'defaultServiceAccount': string;
                'description': string;
                'enabledFeatures': string[];
                'id': string;
                'kind': string;
                'name': string;
                'quotas': Quota[];
                'selfLink': string;
                'usageExportLocation': UsageExportLocation;
                'xpnProjectStatus': string;
            }

            export interface ProjectsDisableXpnResourceRequest {
                'xpnResource': XpnResourceId;
            }

            export interface ProjectsEnableXpnResourceRequest {
                'xpnResource': XpnResourceId;
            }

            export interface ProjectsGetXpnResources {
                'kind': string;
                'nextPageToken': string;
                'resources': XpnResourceId[];
            }

            export interface ProjectsListXpnHostsRequest {
                'organization': string;
            }

            export interface Quota {
                'limit': number;
                'metric': string;
                'usage': number;
            }

            export interface Reference {
                'kind': string;
                'referenceType': string;
                'referrer': string;
                'target': string;
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

            export interface RegionAutoscalerList {
                'id': string;
                'items': Autoscaler[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface RegionInstanceGroupList {
                'id': string;
                'items': InstanceGroup[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface RegionInstanceGroupManagerList {
                'id': string;
                'items': InstanceGroupManager[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface RegionInstanceGroupManagersAbandonInstancesRequest {
                'instances': string[];
            }

            export interface RegionInstanceGroupManagersDeleteInstancesRequest {
                'instances': string[];
            }

            export interface RegionInstanceGroupManagersListInstancesResponse {
                'managedInstances': ManagedInstance[];
                'nextPageToken': string;
            }

            export interface RegionInstanceGroupManagersRecreateRequest {
                'instances': string[];
            }

            export interface RegionInstanceGroupManagersSetAutoHealingRequest {
                'autoHealingPolicies': InstanceGroupManagerAutoHealingPolicy[];
            }

            export interface RegionInstanceGroupManagersSetTargetPoolsRequest {
                'fingerprint': string;
                'targetPools': string[];
            }

            export interface RegionInstanceGroupManagersSetTemplateRequest {
                'instanceTemplate': string;
            }

            export interface RegionInstanceGroupsListInstances {
                'id': string;
                'items': InstanceWithNamedPorts[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface RegionInstanceGroupsListInstancesRequest {
                'instanceState': string;
                'portName': string;
            }

            export interface RegionInstanceGroupsSetNamedPortsRequest {
                'fingerprint': string;
                'namedPorts': NamedPort[];
            }

            export interface RegionList {
                'id': string;
                'items': Region[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface RegionSetLabelsRequest {
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface ResourceCommitment {
                'amount': string;
                'type': string;
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
                'nextHopPeering': string;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Router {
                'bgp': RouterBgp;
                'bgpPeers': RouterBgpPeer[];
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'interfaces': RouterInterface[];
                'kind': string;
                'name': string;
                'network': string;
                'region': string;
                'selfLink': string;
            }

            export interface RouterAggregatedList {
                'id': string;
                'items': {
                    [name: string]: RoutersScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface RouterBgp {
                'asn': number;
            }

            export interface RouterBgpPeer {
                'advertisedRoutePriority': number;
                'interfaceName': string;
                'ipAddress': string;
                'name': string;
                'peerAsn': number;
                'peerIpAddress': string;
            }

            export interface RouterInterface {
                'ipRange': string;
                'linkedInterconnectAttachment': string;
                'linkedVpnTunnel': string;
                'name': string;
            }

            export interface RouterList {
                'id': string;
                'items': Router[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface RouterStatus {
                'bestRoutes': Route[];
                'bestRoutesForRouter': Route[];
                'bgpPeerStatus': RouterStatusBgpPeerStatus[];
                'network': string;
            }

            export interface RouterStatusBgpPeerStatus {
                'advertisedRoutes': Route[];
                'ipAddress': string;
                'linkedVpnTunnel': string;
                'name': string;
                'numLearnedRoutes': number;
                'peerIpAddress': string;
                'state': string;
                'status': string;
                'uptime': string;
                'uptimeSeconds': string;
            }

            export interface RouterStatusResponse {
                'kind': string;
                'result': RouterStatus;
            }

            export interface RoutersPreviewResponse {
                'resource': Router;
            }

            export interface RoutersScopedList {
                'routers': Router[];
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Rule {
                'action': string;
                'conditions': Condition[];
                'description': string;
                'ins': string[];
                'logConfigs': LogConfig[];
                'notIns': string[];
                'permissions': string[];
            }

            export interface SSLHealthCheck {
                'port': number;
                'portName': string;
                'proxyHeader': string;
                'request': string;
                'response': string;
            }

            export interface Scheduling {
                'automaticRestart': boolean;
                'onHostMaintenance': string;
                'preemptible': boolean;
            }

            export interface SecurityPolicy {
                'creationTimestamp': string;
                'description': string;
                'fingerprint': string;
                'id': string;
                'kind': string;
                'name': string;
                'rules': SecurityPolicyRule[];
                'selfLink': string;
            }

            export interface SecurityPolicyList {
                'id': string;
                'items': SecurityPolicy[];
                'kind': string;
                'nextPageToken': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface SecurityPolicyReference {
                'securityPolicy': string;
            }

            export interface SecurityPolicyRule {
                'action': string;
                'description': string;
                'kind': string;
                'match': SecurityPolicyRuleMatcher;
                'preview': boolean;
                'priority': number;
            }

            export interface SecurityPolicyRuleMatcher {
                'srcIpRanges': string[];
            }

            export interface SerialPortOutput {
                'contents': string;
                'kind': string;
                'next': string;
                'selfLink': string;
                'start': string;
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
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'licenses': string[];
                'name': string;
                'selfLink': string;
                'snapshotEncryptionKey': CustomerEncryptionKey;
                'sourceDisk': string;
                'sourceDiskEncryptionKey': CustomerEncryptionKey;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface Subnetwork {
                'allowSubnetCidrRoutesOverlap': boolean;
                'creationTimestamp': string;
                'description': string;
                'fingerprint': string;
                'gatewayAddress': string;
                'id': string;
                'ipCidrRange': string;
                'kind': string;
                'name': string;
                'network': string;
                'privateIpGoogleAccess': boolean;
                'region': string;
                'secondaryIpRanges': SubnetworkSecondaryRange[];
                'selfLink': string;
            }

            export interface SubnetworkAggregatedList {
                'id': string;
                'items': {
                    [name: string]: SubnetworksScopedList
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface SubnetworkList {
                'id': string;
                'items': Subnetwork[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface SubnetworkSecondaryRange {
                'ipCidrRange': string;
                'rangeName': string;
            }

            export interface SubnetworksExpandIpCidrRangeRequest {
                'ipCidrRange': string;
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

            export interface SubnetworksSetPrivateIpGoogleAccessRequest {
                'privateIpGoogleAccess': boolean;
            }

            export interface TCPHealthCheck {
                'port': number;
                'portName': string;
                'proxyHeader': string;
                'request': string;
                'response': string;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface TargetInstanceList {
                'id': string;
                'items': TargetInstance[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface TargetSslProxiesSetBackendServiceRequest {
                'service': string;
            }

            export interface TargetSslProxiesSetProxyHeaderRequest {
                'proxyHeader': string;
            }

            export interface TargetSslProxiesSetSslCertificatesRequest {
                'sslCertificates': string[];
            }

            export interface TargetSslProxy {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'proxyHeader': string;
                'selfLink': string;
                'service': string;
                'sslCertificates': string[];
            }

            export interface TargetSslProxyList {
                'id': string;
                'items': TargetSslProxy[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface TargetTcpProxiesSetBackendServiceRequest {
                'service': string;
            }

            export interface TargetTcpProxiesSetProxyHeaderRequest {
                'proxyHeader': string;
            }

            export interface TargetTcpProxy {
                'creationTimestamp': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
                'proxyHeader': string;
                'selfLink': string;
                'service': string;
            }

            export interface TargetTcpProxyList {
                'id': string;
                'items': TargetTcpProxy[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface TargetVpnGatewayList {
                'id': string;
                'items': TargetVpnGateway[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface TestPermissionsRequest {
                'permissions': string[];
            }

            export interface TestPermissionsResponse {
                'permissions': string[];
            }

            export interface UDPHealthCheck {
                'port': number;
                'portName': string;
                'request': string;
                'response': string;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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
                'remoteTrafficSelector': string[];
                'router': string;
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
                ;
                };
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface VpnTunnelList {
                'id': string;
                'items': VpnTunnel[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
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

            export interface XpnHostList {
                'id': string;
                'items': Project[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface XpnResourceId {
                'id': string;
                'type': string;
            }

            export interface Zone {
                'availableCpuPlatforms': string[];
                'creationTimestamp': string;
                'deprecated': DeprecationStatus;
                'description': string;
                'id': string;
                'kind': string;
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
                'warning': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                };
            }

            export interface ZoneSetLabelsRequest {
                'labelFingerprint': string;
                'labels': {
                    [name: string]: string
                ;
                };
            }

        }
    }
}
