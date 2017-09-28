// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        androidenterprise(version: string): any;
        androidenterprise(version: 'v1'): androidenterprise.v1.Androidenterprise;
    }

    namespace androidenterprise {
        namespace v1 {
            export interface Androidenterprise {
                new(options: any): Androidenterprise;

                'devices': {
                    'get': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                    'getState': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: DeviceState, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: DevicesListResponse, response: any) => void) => Request;
                    'setState': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: DeviceState, response: any) => void) => Request;
                };
                'enterprises': {
                    'acknowledgeNotificationSet': (parameters: { [key: string]: any; 'notificationSetId'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'completeSignup': (parameters: { [key: string]: any; 'completionToken'?: string, 'enterpriseToken'?: string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'createWebToken': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: AdministratorWebToken, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'enroll': (parameters: { [key: string]: any; 'token': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'generateSignupUrl': (parameters: { [key: string]: any; 'callbackUrl'?: string}, callback: (error: any, body: SignupInfo, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'getAndroidDevicePolicyConfig': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: AndroidDevicePolicyConfig, response: any) => void) => Request;
                    'getServiceAccount': (parameters: { [key: string]: any; 'enterpriseId': string, 'keyType'?: string}, callback: (error: any, body: ServiceAccount, response: any) => void) => Request;
                    'getStoreLayout': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: StoreLayout, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'token': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'domain': string}, callback: (error: any, body: EnterprisesListResponse, response: any) => void) => Request;
                    'pullNotificationSet': (parameters: { [key: string]: any; 'requestMode'?: string}, callback: (error: any, body: NotificationSet, response: any) => void) => Request;
                    'sendTestPushNotification': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: EnterprisesSendTestPushNotificationResponse, response: any) => void) => Request;
                    'setAccount': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: EnterpriseAccount, response: any) => void) => Request;
                    'setAndroidDevicePolicyConfig': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: AndroidDevicePolicyConfig, response: any) => void) => Request;
                    'setStoreLayout': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: StoreLayout, response: any) => void) => Request;
                    'unenroll': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'entitlements': {
                    'delete': (parameters: { [key: string]: any; 'enterpriseId': string, 'entitlementId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'enterpriseId': string, 'entitlementId': string, 'userId': string}, callback: (error: any, body: Entitlement, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: EntitlementsListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'enterpriseId': string, 'entitlementId': string, 'install'?: boolean, 'userId': string}, callback: (error: any, body: Entitlement, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'enterpriseId': string, 'entitlementId': string, 'install'?: boolean, 'userId': string}, callback: (error: any, body: Entitlement, response: any) => void) => Request;
                };
                'grouplicenses': {
                    'get': (parameters: { [key: string]: any; 'enterpriseId': string, 'groupLicenseId': string}, callback: (error: any, body: GroupLicense, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: GroupLicensesListResponse, response: any) => void) => Request;
                };
                'grouplicenseusers': {
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string, 'groupLicenseId': string}, callback: (error: any, body: GroupLicenseUsersListResponse, response: any) => void) => Request;
                };
                'installs': {
                    'delete': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: Install, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: InstallsListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: Install, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: Install, response: any) => void) => Request;
                };
                'managedconfigurationsfordevice': {
                    'delete': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'managedConfigurationForDeviceId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'managedConfigurationForDeviceId': string, 'userId': string}, callback: (error: any, body: ManagedConfiguration, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: ManagedConfigurationsForDeviceListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'managedConfigurationForDeviceId': string, 'userId': string}, callback: (error: any, body: ManagedConfiguration, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'deviceId': string, 'enterpriseId': string, 'managedConfigurationForDeviceId': string, 'userId': string}, callback: (error: any, body: ManagedConfiguration, response: any) => void) => Request;
                };
                'managedconfigurationsforuser': {
                    'delete': (parameters: { [key: string]: any; 'enterpriseId': string, 'managedConfigurationForUserId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'enterpriseId': string, 'managedConfigurationForUserId': string, 'userId': string}, callback: (error: any, body: ManagedConfiguration, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: ManagedConfigurationsForUserListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'enterpriseId': string, 'managedConfigurationForUserId': string, 'userId': string}, callback: (error: any, body: ManagedConfiguration, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'enterpriseId': string, 'managedConfigurationForUserId': string, 'userId': string}, callback: (error: any, body: ManagedConfiguration, response: any) => void) => Request;
                };
                'permissions': {
                    'get': (parameters: { [key: string]: any; 'language'?: string, 'permissionId': string}, callback: (error: any, body: Permission, response: any) => void) => Request;
                };
                'products': {
                    'approve': (parameters: { [key: string]: any; 'enterpriseId': string, 'productId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'generateApprovalUrl': (parameters: { [key: string]: any; 'enterpriseId': string, 'languageCode'?: string, 'productId': string}, callback: (error: any, body: ProductsGenerateApprovalUrlResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'enterpriseId': string, 'language'?: string, 'productId': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    'getAppRestrictionsSchema': (parameters: { [key: string]: any; 'enterpriseId': string, 'language'?: string, 'productId': string}, callback: (error: any, body: AppRestrictionsSchema, response: any) => void) => Request;
                    'getPermissions': (parameters: { [key: string]: any; 'enterpriseId': string, 'productId': string}, callback: (error: any, body: ProductPermissions, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'approved'?: boolean, 'enterpriseId': string, 'language'?: string, 'maxResults'?: number, 'query'?: string, 'token'?: string}, callback: (error: any, body: ProductsListResponse, response: any) => void) => Request;
                    'unapprove': (parameters: { [key: string]: any; 'enterpriseId': string, 'productId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'serviceaccountkeys': {
                    'delete': (parameters: { [key: string]: any; 'enterpriseId': string, 'keyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: ServiceAccountKey, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: ServiceAccountKeysListResponse, response: any) => void) => Request;
                };
                'storelayoutclusters': {
                    'delete': (parameters: { [key: string]: any; 'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreLayoutClustersListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                };
                'storelayoutpages': {
                    'delete': (parameters: { [key: string]: any; 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: StoreLayoutPagesListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                };
                'users': {
                    'delete': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'generateAuthenticationToken': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: AuthenticationToken, response: any) => void) => Request;
                    'generateToken': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: UserToken, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'getAvailableProductSet': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: ProductSet, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'enterpriseId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'email': string, 'enterpriseId': string}, callback: (error: any, body: UsersListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'revokeToken': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'setAvailableProductSet': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: ProductSet, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'enterpriseId': string, 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                };

            }

            export interface Administrator {
                'email': string;
            }

            export interface AdministratorWebToken {
                'kind': string;
                'token': string;
            }

            export interface AdministratorWebTokenSpec {
                'kind': string;
                'parent': string;
                'permission': string[];
            }

            export interface AndroidDevicePolicyConfig {
                'kind': string;
                'state': string;
            }

            export interface AppRestrictionsSchema {
                'kind': string;
                'restrictions': AppRestrictionsSchemaRestriction[];
            }

            export interface AppRestrictionsSchemaChangeEvent {
                'productId': string;
            }

            export interface AppRestrictionsSchemaRestriction {
                'defaultValue': AppRestrictionsSchemaRestrictionRestrictionValue;
                'description': string;
                'entry': string[];
                'entryValue': string[];
                'key': string;
                'nestedRestriction': AppRestrictionsSchemaRestriction[];
                'restrictionType': string;
                'title': string;
            }

            export interface AppRestrictionsSchemaRestrictionRestrictionValue {
                'type': string;
                'valueBool': boolean;
                'valueInteger': number;
                'valueMultiselect': string[];
                'valueString': string;
            }

            export interface AppUpdateEvent {
                'productId': string;
            }

            export interface AppVersion {
                'versionCode': number;
                'versionString': string;
            }

            export interface ApprovalUrlInfo {
                'approvalUrl': string;
                'kind': string;
            }

            export interface AuthenticationToken {
                'kind': string;
                'token': string;
            }

            export interface Device {
                'androidId': string;
                'kind': string;
                'managementType': string;
            }

            export interface DeviceState {
                'accountState': string;
                'kind': string;
            }

            export interface DevicesListResponse {
                'device': Device[];
                'kind': string;
            }

            export interface Enterprise {
                'administrator': Administrator[];
                'id': string;
                'kind': string;
                'name': string;
                'primaryDomain': string;
            }

            export interface EnterpriseAccount {
                'accountEmail': string;
                'kind': string;
            }

            export interface EnterprisesListResponse {
                'enterprise': Enterprise[];
                'kind': string;
            }

            export interface EnterprisesSendTestPushNotificationResponse {
                'messageId': string;
                'topicName': string;
            }

            export interface Entitlement {
                'kind': string;
                'productId': string;
                'reason': string;
            }

            export interface EntitlementsListResponse {
                'entitlement': Entitlement[];
                'kind': string;
            }

            export interface GroupLicense {
                'acquisitionKind': string;
                'approval': string;
                'kind': string;
                'numProvisioned': number;
                'numPurchased': number;
                'permissions': string;
                'productId': string;
            }

            export interface GroupLicenseUsersListResponse {
                'kind': string;
                'user': User[];
            }

            export interface GroupLicensesListResponse {
                'groupLicense': GroupLicense[];
                'kind': string;
            }

            export interface Install {
                'installState': string;
                'kind': string;
                'productId': string;
                'versionCode': number;
            }

            export interface InstallFailureEvent {
                'deviceId': string;
                'failureDetails': string;
                'failureReason': string;
                'productId': string;
                'userId': string;
            }

            export interface InstallsListResponse {
                'install': Install[];
                'kind': string;
            }

            export interface LocalizedText {
                'locale': string;
                'text': string;
            }

            export interface ManagedConfiguration {
                'kind': string;
                'managedProperty': ManagedProperty[];
                'productId': string;
            }

            export interface ManagedConfigurationsForDeviceListResponse {
                'kind': string;
                'managedConfigurationForDevice': ManagedConfiguration[];
            }

            export interface ManagedConfigurationsForUserListResponse {
                'kind': string;
                'managedConfigurationForUser': ManagedConfiguration[];
            }

            export interface ManagedProperty {
                'key': string;
                'valueBool': boolean;
                'valueBundle': ManagedPropertyBundle;
                'valueBundleArray': ManagedPropertyBundle[];
                'valueInteger': number;
                'valueString': string;
                'valueStringArray': string[];
            }

            export interface ManagedPropertyBundle {
                'managedProperty': ManagedProperty[];
            }

            export interface NewDeviceEvent {
                'deviceId': string;
                'managementType': string;
                'userId': string;
            }

            export interface NewPermissionsEvent {
                'approvedPermissions': string[];
                'productId': string;
                'requestedPermissions': string[];
            }

            export interface Notification {
                'appRestrictionsSchemaChangeEvent': AppRestrictionsSchemaChangeEvent;
                'appUpdateEvent': AppUpdateEvent;
                'enterpriseId': string;
                'installFailureEvent': InstallFailureEvent;
                'newDeviceEvent': NewDeviceEvent;
                'newPermissionsEvent': NewPermissionsEvent;
                'notificationType': string;
                'productApprovalEvent': ProductApprovalEvent;
                'productAvailabilityChangeEvent': ProductAvailabilityChangeEvent;
                'timestampMillis': string;
            }

            export interface NotificationSet {
                'kind': string;
                'notification': Notification[];
                'notificationSetId': string;
            }

            export interface PageInfo {
                'resultPerPage': number;
                'startIndex': number;
                'totalResults': number;
            }

            export interface Permission {
                'description': string;
                'kind': string;
                'name': string;
                'permissionId': string;
            }

            export interface Product {
                'appVersion': AppVersion[];
                'authorName': string;
                'detailsUrl': string;
                'distributionChannel': string;
                'iconUrl': string;
                'kind': string;
                'productId': string;
                'productPricing': string;
                'requiresContainerApp': boolean;
                'signingCertificate': ProductSigningCertificate;
                'smallIconUrl': string;
                'title': string;
                'workDetailsUrl': string;
            }

            export interface ProductApprovalEvent {
                'approved': string;
                'productId': string;
            }

            export interface ProductAvailabilityChangeEvent {
                'availabilityStatus': string;
                'productId': string;
            }

            export interface ProductPermission {
                'permissionId': string;
                'state': string;
            }

            export interface ProductPermissions {
                'kind': string;
                'permission': ProductPermission[];
                'productId': string;
            }

            export interface ProductSet {
                'kind': string;
                'productId': string[];
                'productSetBehavior': string;
            }

            export interface ProductSigningCertificate {
                'certificateHashSha1': string;
                'certificateHashSha256': string;
            }

            export interface ProductsApproveRequest {
                'approvalUrlInfo': ApprovalUrlInfo;
                'approvedPermissions': string;
            }

            export interface ProductsGenerateApprovalUrlResponse {
                'url': string;
            }

            export interface ProductsListResponse {
                'kind': string;
                'pageInfo': PageInfo;
                'product': Product[];
                'tokenPagination': TokenPagination;
            }

            export interface ServiceAccount {
                'key': ServiceAccountKey;
                'kind': string;
                'name': string;
            }

            export interface ServiceAccountKey {
                'data': string;
                'id': string;
                'kind': string;
                'publicData': string;
                'type': string;
            }

            export interface ServiceAccountKeysListResponse {
                'serviceAccountKey': ServiceAccountKey[];
            }

            export interface SignupInfo {
                'completionToken': string;
                'kind': string;
                'url': string;
            }

            export interface StoreCluster {
                'id': string;
                'kind': string;
                'name': LocalizedText[];
                'orderInPage': string;
                'productId': string[];
            }

            export interface StoreLayout {
                'homepageId': string;
                'kind': string;
                'storeLayoutType': string;
            }

            export interface StoreLayoutClustersListResponse {
                'cluster': StoreCluster[];
                'kind': string;
            }

            export interface StoreLayoutPagesListResponse {
                'kind': string;
                'page': StorePage[];
            }

            export interface StorePage {
                'id': string;
                'kind': string;
                'link': string[];
                'name': LocalizedText[];
            }

            export interface TokenPagination {
                'nextPageToken': string;
                'previousPageToken': string;
            }

            export interface User {
                'accountIdentifier': string;
                'accountType': string;
                'displayName': string;
                'id': string;
                'kind': string;
                'managementType': string;
                'primaryEmail': string;
            }

            export interface UserToken {
                'kind': string;
                'token': string;
                'userId': string;
            }

            export interface UsersListResponse {
                'kind': string;
                'user': User[];
            }

        }
    }
}
