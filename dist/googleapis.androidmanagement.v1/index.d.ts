// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        androidmanagement(version: string): any;
        androidmanagement(version: 'v1'): androidmanagement.v1.Androidmanagement;
    }

    namespace androidmanagement {
        namespace v1 {
            export interface Androidmanagement {
                new(options: any): Androidmanagement;

                'signupUrls': {
                    'create': (parameters: { [key: string]: any; 'callbackUrl'?: string, 'projectId'?: string}, callback: (error: any, body: SignupUrl, response: any) => void) => Request;
                };
                'enterprises': {
                    'create': (parameters: { [key: string]: any; 'signupUrlName'?: string, 'enterpriseToken'?: string, 'projectId'?: string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;

                    'policies': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'parent': string, 'pageToken'?: string}, callback: (error: any, body: ListPoliciesResponse, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'applications': {
                        'get': (parameters: { [key: string]: any; 'languageCode'?: string, 'name': string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    };
                    'enrollmentTokens': {
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: EnrollmentToken, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'webTokens': {
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: WebToken, response: any) => void) => Request;
                    };
                    'devices': {
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'parent': string, 'pageToken'?: string}, callback: (error: any, body: ListDevicesResponse, response: any) => void) => Request;
                        'issueCommand': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'name': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;

                        'operations': {
                            'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'filter'?: string, 'name': string, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                            'delete': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'cancel': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Device {
                'userName': string;
                'disabledReason': UserFacingMessage;
                'policyName': string;
                'lastPolicyComplianceReportTime': string;
                'nonComplianceDetails': NonComplianceDetail[];
                'lastPolicySyncTime': string;
                'networkInfo': NetworkInfo;
                'appliedState': string;
                'enrollmentTokenData': string;
                'enrollmentTokenName': string;
                'memoryInfo': MemoryInfo;
                'state': string;
                'softwareInfo': SoftwareInfo;
                'memoryEvents': MemoryEvent[];
                'previousDeviceNames': string[];
                'policyCompliant': boolean;
                'lastStatusReportTime': string;
                'name': string;
                'hardwareStatusSamples': HardwareStatus[];
                'enrollmentTime': string;
                'appliedPolicyVersion': string;
                'apiLevel': number;
                'hardwareInfo': HardwareInfo;
                'appliedPolicyName': string;
                'displays': Display[];
                'powerManagementEvents': PowerManagementEvent[];
            }

            export interface PermissionGrant {
                'permission': string;
                'policy': string;
            }

            export interface Application {
                'managedProperties': ManagedProperty[];
                'title': string;
                'permissions': ApplicationPermission[];
                'name': string;
            }

            export interface Status {
                'code': number;
                'details': {
                    [name: string]: any
                ;
                }[];
                'message': string;
            }

            export interface ApplicationPolicy {
                'lockTaskAllowed': boolean;
                'permissionGrants': PermissionGrant[];
                'managedConfiguration': {
                    [name: string]: any
                ;
                };
                'packageName': string;
                'installType': string;
                'defaultPermissionPolicy': string;
            }

            export interface ApplicationPermission {
                'description': string;
                'permissionId': string;
                'name': string;
            }

            export interface ManagedProperty {
                'nestedProperties': ManagedProperty[];
                'description': string;
                'defaultValue': any;
                'title': string;
                'key': string;
                'entries': ManagedPropertyEntry[];
                'type': string;
            }

            export interface Operation {
                'error': Status;
                'done': boolean;
                'metadata': {
                    [name: string]: any
                ;
                };
                'response': {
                    [name: string]: any
                ;
                };
                'name': string;
            }

            export interface NonComplianceDetailCondition {
                'nonComplianceReason': string;
                'settingName': string;
                'packageName': string;
            }

            export interface NonComplianceDetail {
                'settingName': string;
                'currentValue': any;
                'packageName': string;
                'installationFailureReason': string;
                'fieldPath': string;
                'nonComplianceReason': string;
            }

            export interface ListDevicesResponse {
                'nextPageToken': string;
                'devices': Device[];
            }

            export interface PersistentPreferredActivity {
                'receiverActivity': string;
                'actions': string[];
                'categories': string[];
            }

            export interface Policy {
                'openNetworkConfiguration': {
                    [name: string]: any
                ;
                };
                'adjustVolumeDisabled': boolean;
                'passwordRequirements': PasswordRequirements;
                'modifyAccountsDisabled': boolean;
                'statusReportingSettings': StatusReportingSettings;
                'factoryResetDisabled': boolean;
                'funDisabled': boolean;
                'applications': ApplicationPolicy[];
                'safeBootDisabled': boolean;
                'wifiConfigsLockdownEnabled': boolean;
                'complianceRules': ComplianceRule[];
                'wifiConfigDisabled': boolean;
                'unmuteMicrophoneDisabled': boolean;
                'installUnknownSourcesAllowed': boolean;
                'autoTimeRequired': boolean;
                'removeUserDisabled': boolean;
                'statusBarDisabled': boolean;
                'stayOnPluggedModes': string[];
                'cameraDisabled': boolean;
                'blockApplicationsEnabled': boolean;
                'debuggingFeaturesAllowed': boolean;
                'maximumTimeToLock': string;
                'name': string;
                'defaultPermissionPolicy': string;
                'persistentPreferredActivities': PersistentPreferredActivity[];
                'networkEscapeHatchEnabled': boolean;
                'systemUpdate': SystemUpdate;
                'frpAdminEmails': string[];
                'version': string;
                'screenCaptureDisabled': boolean;
                'keyguardDisabled': boolean;
                'addUserDisabled': boolean;
            }

            export interface Command {
                'duration': string;
                'newPassword': string;
                'type': string;
                'createTime': string;
                'resetPasswordFlags': string[];
            }

            export interface ComplianceRule {
                'nonComplianceDetailCondition': NonComplianceDetailCondition;
                'disableApps': boolean;
                'apiLevelCondition': ApiLevelCondition;
            }

            export interface ListPoliciesResponse {
                'policies': Policy[];
                'nextPageToken': string;
            }

            export interface StatusReportingSettings {
                'displayInfoEnabled': boolean;
                'hardwareStatusEnabled': boolean;
                'softwareInfoEnabled': boolean;
                'memoryInfoEnabled': boolean;
                'powerManagementEventsEnabled': boolean;
                'networkInfoEnabled': boolean;
            }

            export interface Display {
                'refreshRate': number;
                'state': string;
                'width': number;
                'displayId': number;
                'name': string;
                'density': number;
                'height': number;
            }

            export interface SignupUrl {
                'url': string;
                'name': string;
            }

            export interface EnrollmentToken {
                'expirationTimestamp': string;
                'policyName': string;
                'name': string;
                'duration': string;
                'value': string;
                'additionalData': string;
                'qrCode': string;
            }

            export interface SoftwareInfo {
                'androidVersion': string;
                'androidBuildNumber': string;
                'androidBuildTime': string;
                'bootloaderVersion': string;
                'securityPatchLevel': string;
                'deviceKernelVersion': string;
            }

            export interface ManagedPropertyEntry {
                'value': string;
                'name': string;
            }

            export interface WebToken {
                'value': string;
                'permissions': string[];
                'name': string;
                'parentFrameUrl': string;
            }

            export interface Enterprise {
                'pubsubTopic': string;
                'logo': ExternalData;
                'enabledNotificationTypes': string[];
                'name': string;
                'primaryColor': number;
                'appAutoApprovalEnabled': boolean;
                'enterpriseDisplayName': string;
            }

            export interface ListOperationsResponse {
                'nextPageToken': string;
                'operations': Operation[];
            }

            export interface MemoryEvent {
                'byteCount': string;
                'eventType': string;
                'createTime': string;
            }

            export interface ExternalData {
                'url': string;
                'sha256Hash': string;
            }

            export interface UserFacingMessage {
                'localizedMessages': {
                    [name: string]: string
                ;
                };
                'defaultMessage': string;
            }

            export interface PowerManagementEvent {
                'batteryLevel': number;
                'eventType': string;
                'createTime': string;
            }

            export interface PasswordRequirements {
                'passwordMinimumNumeric': number;
                'passwordMinimumNonLetter': number;
                'maximumFailedPasswordsForWipe': number;
                'passwordMinimumLetters': number;
                'passwordMinimumUpperCase': number;
                'passwordQuality': string;
                'passwordMinimumLength': number;
                'passwordExpirationTimeout': string;
                'passwordMinimumSymbols': number;
                'passwordHistoryLength': number;
                'passwordMinimumLowerCase': number;
            }

            export interface HardwareInfo {
                'gpuThrottlingTemperatures': number[];
                'cpuShutdownTemperatures': number[];
                'gpuShutdownTemperatures': number[];
                'manufacturer': string;
                'model': string;
                'serialNumber': string;
                'brand': string;
                'cpuThrottlingTemperatures': number[];
                'skinThrottlingTemperatures': number[];
                'deviceBasebandVersion': string;
                'hardware': string;
                'skinShutdownTemperatures': number[];
                'batteryShutdownTemperatures': number[];
                'batteryThrottlingTemperatures': number[];
            }

            export interface Empty {}

            export interface NetworkInfo {
                'meid': string;
                'wifiMacAddress': string;
                'imei': string;
            }

            export interface MemoryInfo {
                'totalRam': string;
                'totalInternalStorage': string;
            }

            export interface ApiLevelCondition {
                'minApiLevel': number;
            }

            export interface SystemUpdate {
                'startMinutes': number;
                'type': string;
                'endMinutes': number;
            }

            export interface HardwareStatus {
                'fanSpeeds': number[];
                'skinTemperatures': number[];
                'createTime': string;
                'batteryTemperatures': number[];
                'cpuTemperatures': number[];
                'gpuTemperatures': number[];
                'cpuUsages': number[];
            }

        }
    }
}
