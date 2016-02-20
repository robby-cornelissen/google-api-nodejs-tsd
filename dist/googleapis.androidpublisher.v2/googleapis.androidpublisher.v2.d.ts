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

            interface Apk {
                'binary': ApkBinary;
                'versionCode': number;
            }

            interface ApkBinary {
                'sha1': string;
            }

            interface ApkListing {
                'language': string;
                'recentChanges': string;
            }

            interface ApkListingsListResponse {
                'kind': string;
                'listings': ApkListing[];
            }

            interface ApksAddExternallyHostedRequest {
                'externallyHostedApk': ExternallyHostedApk;
            }

            interface ApksAddExternallyHostedResponse {
                'externallyHostedApk': ExternallyHostedApk;
            }

            interface ApksListResponse {
                'apks': Apk[];
                'kind': string;
            }

            interface AppDetails {
                'contactEmail': string;
                'contactPhone': string;
                'contactWebsite': string;
                'defaultLanguage': string;
            }

            interface AppEdit {
                'expiryTimeSeconds': string;
                'id': string;
            }

            interface Entitlement {
                'kind': string;
                'productId': string;
                'productType': string;
                'token': string;
            }

            interface EntitlementsListResponse {
                'pageInfo': PageInfo;
                'resources': Entitlement[];
                'tokenPagination': TokenPagination;
            }

            interface ExpansionFile {
                'fileSize': string;
                'referencesVersion': number;
            }

            interface ExpansionFilesUploadResponse {
                'expansionFile': ExpansionFile;
            }

            interface ExternallyHostedApk {
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

            interface ExternallyHostedApkUsesPermission {
                'maxSdkVersion': number;
                'name': string;
            }

            interface Image {
                'id': string;
                'sha1': string;
                'url': string;
            }

            interface ImagesDeleteAllResponse {
                'deleted': Image[];
            }

            interface ImagesListResponse {
                'images': Image[];
            }

            interface ImagesUploadResponse {
                'image': Image;
            }

            interface InAppProduct {
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

            interface InAppProductListing {
                'description': string;
                'title': string;
            }

            interface InappproductsBatchRequest {
                'entrys': InappproductsBatchRequestEntry[];
            }

            interface InappproductsBatchRequestEntry {
                'batchId': number;
                'inappproductsinsertrequest': InappproductsInsertRequest;
                'inappproductsupdaterequest': InappproductsUpdateRequest;
                'methodName': string;
            }

            interface InappproductsBatchResponse {
                'entrys': InappproductsBatchResponseEntry[];
                'kind': string;
            }

            interface InappproductsBatchResponseEntry {
                'batchId': number;
                'inappproductsinsertresponse': InappproductsInsertResponse;
                'inappproductsupdateresponse': InappproductsUpdateResponse;
            }

            interface InappproductsInsertRequest {
                'inappproduct': InAppProduct;
            }

            interface InappproductsInsertResponse {
                'inappproduct': InAppProduct;
            }

            interface InappproductsListResponse {
                'inappproduct': InAppProduct[];
                'kind': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
            }

            interface InappproductsUpdateRequest {
                'inappproduct': InAppProduct;
            }

            interface InappproductsUpdateResponse {
                'inappproduct': InAppProduct;
            }

            interface Listing {
                'fullDescription': string;
                'language': string;
                'shortDescription': string;
                'title': string;
                'video': string;
            }

            interface ListingsListResponse {
                'kind': string;
                'listings': Listing[];
            }

            interface MonthDay {
                'day': number;
                'month': number;
            }

            interface PageInfo {
                'resultPerPage': number;
                'startIndex': number;
                'totalResults': number;
            }

            interface Price {
                'currency': string;
                'priceMicros': string;
            }

            interface ProductPurchase {
                'consumptionState': number;
                'developerPayload': string;
                'kind': string;
                'purchaseState': number;
                'purchaseTimeMillis': string;
            }

            interface Prorate {
                'defaultPrice': Price;
                'start': MonthDay;
            }

            interface Season {
                'end': MonthDay;
                'prorations': Prorate[];
                'start': MonthDay;
            }

            interface SubscriptionDeferralInfo {
                'desiredExpiryTimeMillis': string;
                'expectedExpiryTimeMillis': string;
            }

            interface SubscriptionPurchase {
                'autoRenewing': boolean;
                'expiryTimeMillis': string;
                'kind': string;
                'startTimeMillis': string;
            }

            interface SubscriptionPurchasesDeferRequest {
                'deferralInfo': SubscriptionDeferralInfo;
            }

            interface SubscriptionPurchasesDeferResponse {
                'newExpiryTimeMillis': string;
            }

            interface Testers {
                'googleGroups': string[];
                'googlePlusCommunities': string[];
            }

            interface TokenPagination {
                'nextPageToken': string;
                'previousPageToken': string;
            }

            interface Track {
                'track': string;
                'userFraction': number;
                'versionCodes': number[];
            }

            interface TracksListResponse {
                'kind': string;
                'tracks': Track[];
            }

        }
    }
}