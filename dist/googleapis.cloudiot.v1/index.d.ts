// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        cloudiot(version: string): any;
        cloudiot(version: 'v1'): cloudiot.v1.Cloudiot;
    }

    namespace cloudiot {
        namespace v1 {
            export interface Cloudiot {
                new(options: any): Cloudiot;

                'projects': {
                    'locations': {
                        'registries': {
                            'getIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: DeviceRegistry, response: any) => void) => Request;
                            'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: DeviceRegistry, response: any) => void) => Request;
                            'testIamPermissions': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'parent': string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListDeviceRegistriesResponse, response: any) => void) => Request;
                            'setIamPolicy': (parameters: { [key: string]: any; 'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                            'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: DeviceRegistry, response: any) => void) => Request;

                            'devices': {
                                'patch': (parameters: { [key: string]: any; 'name': string, 'updateMask'?: string}, callback: (error: any, body: Device, response: any) => void) => Request;
                                'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                                'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                                'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'fieldMask'?: string, 'pageSize'?: number, 'parent': string, 'deviceIds'?: string, 'deviceNumIds'?: string}, callback: (error: any, body: ListDevicesResponse, response: any) => void) => Request;
                                'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                                'modifyCloudToDeviceConfig': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: DeviceConfig, response: any) => void) => Request;

                                'states': {
                                    'list': (parameters: { [key: string]: any; 'name': string, 'numStates'?: number}, callback: (error: any, body: ListDeviceStatesResponse, response: any) => void) => Request;
                                };
                                'configVersions': {
                                    'list': (parameters: { [key: string]: any; 'numVersions'?: number, 'name': string}, callback: (error: any, body: ListDeviceConfigVersionsResponse, response: any) => void) => Request;
                                };
                            };
                        };
                    };
                };

            }

            export interface ListDevicesResponse {
                'nextPageToken': string;
                'devices': Device[];
            }

            export interface DeviceCredential {
                'expirationTime': string;
                'publicKey': PublicKeyCredential;
            }

            export interface HttpConfig {
                'httpEnabledState': string;
            }

            export interface AuditConfig {
                'service': string;
                'auditLogConfigs': AuditLogConfig[];
                'exemptedMembers': string[];
            }

            export interface DeviceConfig {
                'binaryData': string;
                'deviceAckTime': string;
                'cloudUpdateTime': string;
                'version': string;
            }

            export interface MqttConfig {
                'mqttEnabledState': string;
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface Binding {
                'condition': Expr;
                'members': string[];
                'role': string;
            }

            export interface Expr {
                'location': string;
                'title': string;
                'description': string;
                'expression': string;
            }

            export interface ModifyCloudToDeviceConfigRequest {
                'binaryData': string;
                'versionToUpdate': string;
            }

            export interface ListDeviceStatesResponse {
                'deviceStates': DeviceState[];
            }

            export interface GetIamPolicyRequest {}

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

            export interface Device {
                'blocked': boolean;
                'lastHeartbeatTime': string;
                'lastEventTime': string;
                'lastConfigSendTime': string;
                'lastErrorStatus': Status;
                'lastStateTime': string;
                'config': DeviceConfig;
                'state': DeviceState;
                'name': string;
                'credentials': DeviceCredential[];
                'lastErrorTime': string;
                'metadata': {
                    [name: string]: string
                ;
                };
                'id': string;
                'lastConfigAckTime': string;
                'numId': string;
            }

            export interface ListDeviceConfigVersionsResponse {
                'deviceConfigs': DeviceConfig[];
            }

            export interface X509CertificateDetails {
                'signatureAlgorithm': string;
                'startTime': string;
                'expiryTime': string;
                'subject': string;
                'issuer': string;
                'publicKeyType': string;
            }

            export interface SetIamPolicyRequest {
                'updateMask': string;
                'policy': Policy;
            }

            export interface EventNotificationConfig {
                'pubsubTopicName': string;
            }

            export interface Empty {}

            export interface PublicKeyCredential {
                'key': string;
                'format': string;
            }

            export interface PublicKeyCertificate {
                'x509Details': X509CertificateDetails;
                'format': string;
                'certificate': string;
            }

            export interface DeviceState {
                'binaryData': string;
                'updateTime': string;
            }

            export interface AuditLogConfig {
                'exemptedMembers': string[];
                'logType': string;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface StateNotificationConfig {
                'pubsubTopicName': string;
            }

            export interface RegistryCredential {
                'publicKeyCertificate': PublicKeyCertificate;
            }

            export interface Policy {
                'iamOwned': boolean;
                'etag': string;
                'version': number;
                'auditConfigs': AuditConfig[];
                'bindings': Binding[];
            }

            export interface ListDeviceRegistriesResponse {
                'nextPageToken': string;
                'deviceRegistries': DeviceRegistry[];
            }

            export interface DeviceRegistry {
                'httpConfig': HttpConfig;
                'id': string;
                'mqttConfig': MqttConfig;
                'stateNotificationConfig': StateNotificationConfig;
                'credentials': RegistryCredential[];
                'name': string;
                'eventNotificationConfigs': EventNotificationConfig[];
            }

        }
    }
}
