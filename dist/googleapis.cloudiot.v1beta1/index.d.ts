// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudiot(version: string): any;
        cloudiot(version: 'v1beta1'): cloudiot.v1beta1.Cloudiot;
    }

    namespace cloudiot {
        namespace v1beta1 {
            export interface Cloudiot {
                new(options: any): Cloudiot;

                'projects': {
                    'locations': {
                        'registries': {
                            'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: DeviceRegistry, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: DeviceRegistry, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListDeviceRegistriesResponse, response: any) => void) => Request;
                            'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: DeviceRegistry, response: any) => void) => Request;

                            'devices': {
                                'setState': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'getConfig': (parameters: { [key: string]: any; 'name': string, 'localVersion'?: string}, callback: (error: any, body: HttpDeviceConfig, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'deviceNumIds'?: string, 'pageToken'?: string, 'fieldMask'?: string, 'pageSize'?: number, 'parent': string, 'deviceIds'?: string}, callback: (error: any, body: ListDevicesResponse, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                                'modifyCloudToDeviceConfig': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: DeviceConfig, response: any) => void) => Request;
                                'publishEvent': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: HttpPublishEventResponse, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                                'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: Device, response: any) => void) => Request;

                                'configVersions': {
                                    'list': (parameters: { [key: string]: any; 'name': string, 'numVersions'?: number}, callback: (error: any, body: ListDeviceConfigVersionsResponse, response: any) => void) => Request;
                                };
                            };
                        };
                    };
                };

            }

            export interface DeviceConfig {
                'deviceAckTime': string;
                'cloudUpdateTime': string;
                'version': string;
                'data': DeviceConfigData;
            }

            export interface MqttConfig {
                'mqttConfigState': string;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface Binding {
                'condition': Expr;
                'members': string[];
                'role': string;
            }

            export interface Expr {
                'description': string;
                'expression': string;
                'location': string;
                'title': string;
            }

            export interface ModifyCloudToDeviceConfigRequest {
                'data': DeviceConfigData;
                'versionToUpdate': string;
            }

            export interface HttpPublishEventResponse {}

            export interface GetIamPolicyRequest {}

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface HttpDeviceConfig {
                'version': string;
                'binaryData': string;
            }

            export interface NotificationConfig {
                'pubsubTopicName': string;
            }

            export interface HttpPublishEventRequest {
                'subFolder': string;
                'binaryData': string;
            }

            export interface Device {
                'lastEventTime': string;
                'lastErrorStatus': Status;
                'lastConfigAckTime': string;
                'numId': string;
                'config': DeviceConfig;
                'name': string;
                'credentials': DeviceCredential[];
                'lastErrorTime': string;
                'enabledState': string;
                'id': string;
                'lastHeartbeatTime': string;
            }

            export interface HttpSetDeviceStateRequest {
                'state': HttpDeviceState;
            }

            export interface ListDeviceConfigVersionsResponse {
                'deviceConfigs': DeviceConfig[];
            }

            export interface SetIamPolicyRequest {
                'updateMask': string;
                'policy': Policy;
            }

            export interface HttpDeviceState {
                'binaryData': string;
            }

            export interface Empty {}

            export interface DeviceConfigData {
                'binaryData': string;
            }

            export interface PublicKeyCredential {
                'key': string;
                'format': string;
            }

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface Policy {
                'iamOwned': boolean;
                'etag': string;
                'version': number;
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
            }

            export interface ListDeviceRegistriesResponse {
                'deviceRegistries': DeviceRegistry[];
                'nextPageToken': string;
            }

            export interface DeviceRegistry {
                'name': string;
                'eventNotificationConfig': NotificationConfig;
                'id': string;
                'mqttConfig': MqttConfig;
            }

            export interface ListDevicesResponse {
                'devices': Device[];
                'nextPageToken': string;
            }

            export interface AuditConfig {
                'service': string;
                'auditLogConfigs': AuditLogConfig[];
                'exemptedMembers': string[];
            }

            export interface DeviceCredential {
                'expirationTime': string;
                'publicKey': PublicKeyCredential;
            }

        }
    }
}
