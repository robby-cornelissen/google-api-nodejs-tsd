// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        androidpublisher(version: string): any;
        androidpublisher(version: 'v2'): androidpublisher.v2.Androidpublisher;
    }

    namespace androidpublisher {
        namespace v2 {
            export interface Androidpublisher {
                new(options: any): Androidpublisher;

                'edits': {
                    'commit': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: AppEdit, response: any) => void) => Request;
                    'delete': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: AppEdit, response: any) => void) => Request;
                    'insert': (parameters: {'packageName': string}, callback: (error: any, body: AppEdit, response: any) => void) => Request;
                    'validate': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: AppEdit, response: any) => void) => Request;
                
                    'apklistings': {
                        'delete': (parameters: {'apkVersionCode': number, 'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'deleteall': (parameters: {'apkVersionCode': number, 'editId': string, 'packageName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'apkVersionCode': number, 'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: ApkListing, response: any) => void) => Request;
                        'list': (parameters: {'apkVersionCode': number, 'editId': string, 'packageName': string}, callback: (error: any, body: ApkListingsListResponse, response: any) => void) => Request;
                        'patch': (parameters: {'apkVersionCode': number, 'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: ApkListing, response: any) => void) => Request;
                        'update': (parameters: {'apkVersionCode': number, 'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: ApkListing, response: any) => void) => Request;
                    };
                    'apks': {
                        'addexternallyhosted': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: ApksAddExternallyHostedResponse, response: any) => void) => Request;
                        'list': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: ApksListResponse, response: any) => void) => Request;
                        'upload': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: Apk, response: any) => void) => Request;
                    };
                    'details': {
                        'get': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: AppDetails, response: any) => void) => Request;
                        'patch': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: AppDetails, response: any) => void) => Request;
                        'update': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: AppDetails, response: any) => void) => Request;
                    };
                    'expansionfiles': {
                        'get': (parameters: {'apkVersionCode': number, 'editId': string, 'expansionFileType': string, 'packageName': string}, callback: (error: any, body: ExpansionFile, response: any) => void) => Request;
                        'patch': (parameters: {'apkVersionCode': number, 'editId': string, 'expansionFileType': string, 'packageName': string}, callback: (error: any, body: ExpansionFile, response: any) => void) => Request;
                        'update': (parameters: {'apkVersionCode': number, 'editId': string, 'expansionFileType': string, 'packageName': string}, callback: (error: any, body: ExpansionFile, response: any) => void) => Request;
                        'upload': (parameters: {'apkVersionCode': number, 'editId': string, 'expansionFileType': string, 'packageName': string}, callback: (error: any, body: ExpansionFilesUploadResponse, response: any) => void) => Request;
                    };
                    'images': {
                        'delete': (parameters: {'editId': string, 'imageId': string, 'imageType': string, 'language': string, 'packageName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'deleteall': (parameters: {'editId': string, 'imageType': string, 'language': string, 'packageName': string}, callback: (error: any, body: ImagesDeleteAllResponse, response: any) => void) => Request;
                        'list': (parameters: {'editId': string, 'imageType': string, 'language': string, 'packageName': string}, callback: (error: any, body: ImagesListResponse, response: any) => void) => Request;
                        'upload': (parameters: {'editId': string, 'imageType': string, 'language': string, 'packageName': string}, callback: (error: any, body: ImagesUploadResponse, response: any) => void) => Request;
                    };
                    'listings': {
                        'delete': (parameters: {'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'deleteall': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: {'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: Listing, response: any) => void) => Request;
                        'list': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: ListingsListResponse, response: any) => void) => Request;
                        'patch': (parameters: {'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: Listing, response: any) => void) => Request;
                        'update': (parameters: {'editId': string, 'language': string, 'packageName': string}, callback: (error: any, body: Listing, response: any) => void) => Request;
                    };
                    'testers': {
                        'get': (parameters: {'editId': string, 'packageName': string, 'track': string}, callback: (error: any, body: Testers, response: any) => void) => Request;
                        'patch': (parameters: {'editId': string, 'packageName': string, 'track': string}, callback: (error: any, body: Testers, response: any) => void) => Request;
                        'update': (parameters: {'editId': string, 'packageName': string, 'track': string}, callback: (error: any, body: Testers, response: any) => void) => Request;
                    };
                    'tracks': {
                        'get': (parameters: {'editId': string, 'packageName': string, 'track': string}, callback: (error: any, body: Track, response: any) => void) => Request;
                        'list': (parameters: {'editId': string, 'packageName': string}, callback: (error: any, body: TracksListResponse, response: any) => void) => Request;
                        'patch': (parameters: {'editId': string, 'packageName': string, 'track': string}, callback: (error: any, body: Track, response: any) => void) => Request;
                        'update': (parameters: {'editId': string, 'packageName': string, 'track': string}, callback: (error: any, body: Track, response: any) => void) => Request;
                    };
                };
                'entitlements': {
                    'list': (parameters: {'maxResults'?: number, 'packageName': string, 'productId'?: string, 'startIndex'?: number, 'token'?: string}, callback: (error: any, body: EntitlementsListResponse, response: any) => void) => Request;
                };
                'inappproducts': {
                    'batch': (parameters: any, callback: (error: any, body: InappproductsBatchResponse, response: any) => void) => Request;
                    'delete': (parameters: {'packageName': string, 'sku': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'packageName': string, 'sku': string}, callback: (error: any, body: InAppProduct, response: any) => void) => Request;
                    'insert': (parameters: {'autoConvertMissingPrices'?: boolean, 'packageName': string}, callback: (error: any, body: InAppProduct, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'packageName': string, 'startIndex'?: number, 'token'?: string}, callback: (error: any, body: InappproductsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'autoConvertMissingPrices'?: boolean, 'packageName': string, 'sku': string}, callback: (error: any, body: InAppProduct, response: any) => void) => Request;
                    'update': (parameters: {'autoConvertMissingPrices'?: boolean, 'packageName': string, 'sku': string}, callback: (error: any, body: InAppProduct, response: any) => void) => Request;
                };
                'purchases': {
                    'products': {
                        'get': (parameters: {'packageName': string, 'productId': string, 'token': string}, callback: (error: any, body: ProductPurchase, response: any) => void) => Request;
                    };
                    'subscriptions': {
                        'cancel': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'defer': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: SubscriptionPurchasesDeferResponse, response: any) => void) => Request;
                        'get': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: SubscriptionPurchase, response: any) => void) => Request;
                        'refund': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'revoke': (parameters: {'packageName': string, 'subscriptionId': string, 'token': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    };
                };

            }

            export interface Apk {
                'binary': ApkBinary;
                'versionCode': number;
            }

            export interface ApkBinary {
                'sha1': string;
            }

            export interface ApkListing {
                'language': string;
                'recentChanges': string;
            }

            export interface ApkListingsListResponse {
                'kind': string;
                'listings': ApkListing[];
            }

            export interface ApksAddExternallyHostedRequest {
                'externallyHostedApk': ExternallyHostedApk;
            }

            export interface ApksAddExternallyHostedResponse {
                'externallyHostedApk': ExternallyHostedApk;
            }

            export interface ApksListResponse {
                'apks': Apk[];
                'kind': string;
            }

            export interface AppDetails {
                'contactEmail': string;
                'contactPhone': string;
                'contactWebsite': string;
                'defaultLanguage': string;
            }

            export interface AppEdit {
                'expiryTimeSeconds': string;
                'id': string;
            }

            export interface Entitlement {
                'kind': string;
                'productId': string;
                'productType': string;
                'token': string;
            }

            export interface EntitlementsListResponse {
                'pageInfo': PageInfo;
                'resources': Entitlement[];
                'tokenPagination': TokenPagination;
            }

            export interface ExpansionFile {
                'fileSize': string;
                'referencesVersion': number;
            }

            export interface ExpansionFilesUploadResponse {
                'expansionFile': ExpansionFile;
            }

            export interface ExternallyHostedApk {
                'applicationLabel': string;
                'certificateBase64s': string[];
                'externallyHostedUrl': string;
                'fileSha1Base64': string;
                'fileSha256Base64': string;
                'fileSize': string;
                'iconBase64': string;
                'maximumSdk': number;
                'minimumSdk': number;
                'nativeCodes': string[];
                'packageName': string;
                'usesFeatures': string[];
                'usesPermissions': ExternallyHostedApkUsesPermission[];
                'versionCode': number;
                'versionName': string;
            }

            export interface ExternallyHostedApkUsesPermission {
                'maxSdkVersion': number;
                'name': string;
            }

            export interface Image {
                'id': string;
                'sha1': string;
                'url': string;
            }

            export interface ImagesDeleteAllResponse {
                'deleted': Image[];
            }

            export interface ImagesListResponse {
                'images': Image[];
            }

            export interface ImagesUploadResponse {
                'image': Image;
            }

            export interface InAppProduct {
                'defaultLanguage': string;
                'defaultPrice': Price;
                'listings': {
                    [name: string]: InAppProductListing
                
                };
                'packageName': string;
                'prices': {
                    [name: string]: Price
                
                };
                'purchaseType': string;
                'season': Season;
                'sku': string;
                'status': string;
                'subscriptionPeriod': string;
                'trialPeriod': string;
            }

            export interface InAppProductListing {
                'description': string;
                'title': string;
            }

            export interface InappproductsBatchRequest {
                'entrys': InappproductsBatchRequestEntry[];
            }

            export interface InappproductsBatchRequestEntry {
                'batchId': number;
                'inappproductsinsertrequest': InappproductsInsertRequest;
                'inappproductsupdaterequest': InappproductsUpdateRequest;
                'methodName': string;
            }

            export interface InappproductsBatchResponse {
                'entrys': InappproductsBatchResponseEntry[];
                'kind': string;
            }

            export interface InappproductsBatchResponseEntry {
                'batchId': number;
                'inappproductsinsertresponse': InappproductsInsertResponse;
                'inappproductsupdateresponse': InappproductsUpdateResponse;
            }

            export interface InappproductsInsertRequest {
                'inappproduct': InAppProduct;
            }

            export interface InappproductsInsertResponse {
                'inappproduct': InAppProduct;
            }

            export interface InappproductsListResponse {
                'inappproduct': InAppProduct[];
                'kind': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
            }

            export interface InappproductsUpdateRequest {
                'inappproduct': InAppProduct;
            }

            export interface InappproductsUpdateResponse {
                'inappproduct': InAppProduct;
            }

            export interface Listing {
                'fullDescription': string;
                'language': string;
                'shortDescription': string;
                'title': string;
                'video': string;
            }

            export interface ListingsListResponse {
                'kind': string;
                'listings': Listing[];
            }

            export interface MonthDay {
                'day': number;
                'month': number;
            }

            export interface PageInfo {
                'resultPerPage': number;
                'startIndex': number;
                'totalResults': number;
            }

            export interface Price {
                'currency': string;
                'priceMicros': string;
            }

            export interface ProductPurchase {
                'consumptionState': number;
                'developerPayload': string;
                'kind': string;
                'purchaseState': number;
                'purchaseTimeMillis': string;
            }

            export interface Prorate {
                'defaultPrice': Price;
                'start': MonthDay;
            }

            export interface Season {
                'end': MonthDay;
                'prorations': Prorate[];
                'start': MonthDay;
            }

            export interface SubscriptionDeferralInfo {
                'desiredExpiryTimeMillis': string;
                'expectedExpiryTimeMillis': string;
            }

            export interface SubscriptionPurchase {
                'autoRenewing': boolean;
                'expiryTimeMillis': string;
                'kind': string;
                'startTimeMillis': string;
            }

            export interface SubscriptionPurchasesDeferRequest {
                'deferralInfo': SubscriptionDeferralInfo;
            }

            export interface SubscriptionPurchasesDeferResponse {
                'newExpiryTimeMillis': string;
            }

            export interface Testers {
                'googleGroups': string[];
                'googlePlusCommunities': string[];
            }

            export interface TokenPagination {
                'nextPageToken': string;
                'previousPageToken': string;
            }

            export interface Track {
                'track': string;
                'userFraction': number;
                'versionCodes': number[];
            }

            export interface TracksListResponse {
                'kind': string;
                'tracks': Track[];
            }

        }
    }
}