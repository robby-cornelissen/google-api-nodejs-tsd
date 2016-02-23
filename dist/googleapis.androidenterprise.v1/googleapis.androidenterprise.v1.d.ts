// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        androidenterprise(version: string): any;
        androidenterprise(version: 'v1'): androidenterprise.v1.Androidenterprise;
    }

    namespace androidenterprise {
        namespace v1 {
            export interface Androidenterprise {
                new(options: any): Androidenterprise;

                'collections': {
                    'delete': (parameters: {'collectionId': string, 'enterpriseId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'collectionId': string, 'enterpriseId': string}, callback: (error: any, body: Collection, response: any) => void) => Request;
                    'insert': (parameters: {'enterpriseId': string}, callback: (error: any, body: Collection, response: any) => void) => Request;
                    'list': (parameters: {'enterpriseId': string}, callback: (error: any, body: CollectionsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'collectionId': string, 'enterpriseId': string}, callback: (error: any, body: Collection, response: any) => void) => Request;
                    'update': (parameters: {'collectionId': string, 'enterpriseId': string}, callback: (error: any, body: Collection, response: any) => void) => Request;
                };
                'collectionviewers': {
                    'delete': (parameters: {'collectionId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'collectionId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'list': (parameters: {'collectionId': string, 'enterpriseId': string}, callback: (error: any, body: CollectionViewersListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'collectionId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'update': (parameters: {'collectionId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                };
                'devices': {
                    'get': (parameters: {'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                    'getState': (parameters: {'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: DeviceState, response: any) => void) => Request;
                    'list': (parameters: {'enterpriseId': string, 'userId': string}, callback: (error: any, body: DevicesListResponse, response: any) => void) => Request;
                    'setState': (parameters: {'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: DeviceState, response: any) => void) => Request;
                };
                'enterprises': {
                    'delete': (parameters: {'enterpriseId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'enroll': (parameters: {'token': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'get': (parameters: {'enterpriseId': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'getStoreLayout': (parameters: {'enterpriseId': string}, callback: (error: any, body: StoreLayout, response: any) => void) => Request;
                    'insert': (parameters: {'token': string}, callback: (error: any, body: Enterprise, response: any) => void) => Request;
                    'list': (parameters: {'domain': string}, callback: (error: any, body: EnterprisesListResponse, response: any) => void) => Request;
                    'sendTestPushNotification': (parameters: {'enterpriseId': string}, callback: (error: any, body: EnterprisesSendTestPushNotificationResponse, response: any) => void) => Request;
                    'setAccount': (parameters: {'enterpriseId': string}, callback: (error: any, body: EnterpriseAccount, response: any) => void) => Request;
                    'setStoreLayout': (parameters: {'enterpriseId': string}, callback: (error: any, body: StoreLayout, response: any) => void) => Request;
                    'unenroll': (parameters: {'enterpriseId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'entitlements': {
                    'delete': (parameters: {'enterpriseId': string, 'entitlementId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'enterpriseId': string, 'entitlementId': string, 'userId': string}, callback: (error: any, body: Entitlement, response: any) => void) => Request;
                    'list': (parameters: {'enterpriseId': string, 'userId': string}, callback: (error: any, body: EntitlementsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'enterpriseId': string, 'entitlementId': string, 'install'?: boolean, 'userId': string}, callback: (error: any, body: Entitlement, response: any) => void) => Request;
                    'update': (parameters: {'enterpriseId': string, 'entitlementId': string, 'install'?: boolean, 'userId': string}, callback: (error: any, body: Entitlement, response: any) => void) => Request;
                };
                'grouplicenses': {
                    'get': (parameters: {'enterpriseId': string, 'groupLicenseId': string}, callback: (error: any, body: GroupLicense, response: any) => void) => Request;
                    'list': (parameters: {'enterpriseId': string}, callback: (error: any, body: GroupLicensesListResponse, response: any) => void) => Request;
                };
                'grouplicenseusers': {
                    'list': (parameters: {'enterpriseId': string, 'groupLicenseId': string}, callback: (error: any, body: GroupLicenseUsersListResponse, response: any) => void) => Request;
                };
                'installs': {
                    'delete': (parameters: {'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: Install, response: any) => void) => Request;
                    'list': (parameters: {'deviceId': string, 'enterpriseId': string, 'userId': string}, callback: (error: any, body: InstallsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: Install, response: any) => void) => Request;
                    'update': (parameters: {'deviceId': string, 'enterpriseId': string, 'installId': string, 'userId': string}, callback: (error: any, body: Install, response: any) => void) => Request;
                };
                'permissions': {
                    'get': (parameters: {'language'?: string, 'permissionId': string}, callback: (error: any, body: Permission, response: any) => void) => Request;
                };
                'products': {
                    'approve': (parameters: {'enterpriseId': string, 'productId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'generateApprovalUrl': (parameters: {'enterpriseId': string, 'languageCode'?: string, 'productId': string}, callback: (error: any, body: ProductsGenerateApprovalUrlResponse, response: any) => void) => Request;
                    'get': (parameters: {'enterpriseId': string, 'language'?: string, 'productId': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    'getAppRestrictionsSchema': (parameters: {'enterpriseId': string, 'language'?: string, 'productId': string}, callback: (error: any, body: AppRestrictionsSchema, response: any) => void) => Request;
                    'getPermissions': (parameters: {'enterpriseId': string, 'productId': string}, callback: (error: any, body: ProductPermissions, response: any) => void) => Request;
                    'updatePermissions': (parameters: {'enterpriseId': string, 'productId': string}, callback: (error: any, body: ProductPermissions, response: any) => void) => Request;
                };
                'storelayoutclusters': {
                    'delete': (parameters: {'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                    'insert': (parameters: {'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                    'list': (parameters: {'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreLayoutClustersListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                    'update': (parameters: {'clusterId': string, 'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StoreCluster, response: any) => void) => Request;
                };
                'storelayoutpages': {
                    'delete': (parameters: {'enterpriseId': string, 'pageId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                    'insert': (parameters: {'enterpriseId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                    'list': (parameters: {'enterpriseId': string}, callback: (error: any, body: StoreLayoutPagesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                    'update': (parameters: {'enterpriseId': string, 'pageId': string}, callback: (error: any, body: StorePage, response: any) => void) => Request;
                };
                'users': {
                    'generateToken': (parameters: {'enterpriseId': string, 'userId': string}, callback: (error: any, body: UserToken, response: any) => void) => Request;
                    'get': (parameters: {'enterpriseId': string, 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                    'getAvailableProductSet': (parameters: {'enterpriseId': string, 'userId': string}, callback: (error: any, body: ProductSet, response: any) => void) => Request;
                    'list': (parameters: {'email': string, 'enterpriseId': string}, callback: (error: any, body: UsersListResponse, response: any) => void) => Request;
                    'revokeToken': (parameters: {'enterpriseId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'setAvailableProductSet': (parameters: {'enterpriseId': string, 'userId': string}, callback: (error: any, body: ProductSet, response: any) => void) => Request;
                };

            }

            export interface AppRestrictionsSchema {
                'kind': string;
                'restrictions': AppRestrictionsSchemaRestriction[];
            }

            export interface AppRestrictionsSchemaRestriction {
                'defaultValue': AppRestrictionsSchemaRestrictionRestrictionValue;
                'description': string;
                'entry': string[];
                'entryValue': string[];
                'key': string;
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

            export interface AppVersion {
                'versionCode': number;
                'versionString': string;
            }

            export interface ApprovalUrlInfo {
                'approvalUrl': string;
                'kind': string;
            }

            export interface Collection {
                'collectionId': string;
                'kind': string;
                'name': string;
                'productId': string[];
                'visibility': string;
            }

            export interface CollectionViewersListResponse {
                'kind': string;
                'user': User[];
            }

            export interface CollectionsListResponse {
                'collection': Collection[];
                'kind': string;
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

            export interface InstallsListResponse {
                'install': Install[];
                'kind': string;
            }

            export interface LocalizedText {
                'locale': string;
                'text': string;
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
                'title': string;
                'workDetailsUrl': string;
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
            }

            export interface ProductsApproveRequest {
                'approvalUrlInfo': ApprovalUrlInfo;
            }

            export interface ProductsGenerateApprovalUrlResponse {
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

            export interface User {
                'id': string;
                'kind': string;
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