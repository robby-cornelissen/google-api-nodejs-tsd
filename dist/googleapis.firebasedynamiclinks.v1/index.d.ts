// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        firebasedynamiclinks(version: string): any;
        firebasedynamiclinks(version: 'v1'): firebasedynamiclinks.v1.Firebasedynamiclinks;
    }

    namespace firebasedynamiclinks {
        namespace v1 {
            export interface Firebasedynamiclinks {
                new(options: any): Firebasedynamiclinks;

                'shortLinks': {
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: CreateShortDynamicLinkResponse, response: any) => void) => Request;
                };
                'v1': {
                    'getLinkStats': (parameters: { [key: string]: any; 'dynamicLink': string, 'durationDays'?: string}, callback: (error: any, body: DynamicLinkStats, response: any) => void) => Request;
                    'installAttribution': (parameters: { [key: string]: any; }, callback: (error: any, body: GetIosPostInstallAttributionResponse, response: any) => void) => Request;
                };

            }

            export interface NavigationInfo {
                'enableForcedRedirect': boolean;
            }

            export interface IosInfo {
                'iosIpadBundleId': string;
                'iosCustomScheme': string;
                'iosBundleId': string;
                'iosFallbackLink': string;
                'iosAppStoreId': string;
                'iosIpadFallbackLink': string;
            }

            export interface AnalyticsInfo {
                'itunesConnectAnalytics': ITunesConnectAnalytics;
                'googlePlayAnalytics': GooglePlayAnalytics;
            }

            export interface CreateShortDynamicLinkRequest {
                'longDynamicLink': string;
                'suffix': Suffix;
                'dynamicLinkInfo': DynamicLinkInfo;
            }

            export interface DynamicLinkEventStat {
                'platform': string;
                'count': string;
                'event': string;
            }

            export interface GetIosPostInstallAttributionRequest {
                'bundleId': string;
                'device': DeviceInfo;
                'uniqueMatchLinkToCheck': string;
                'appInstallationTime': string;
                'iosVersion': string;
                'visualStyle': string;
                'retrievalMethod': string;
                'sdkVersion': string;
            }

            export interface CreateShortDynamicLinkResponse {
                'previewLink': string;
                'warning': DynamicLinkWarning[];
                'shortLink': string;
            }

            export interface Suffix {
                'option': string;
            }

            export interface GooglePlayAnalytics {
                'gclid': string;
                'utmCampaign': string;
                'utmContent': string;
                'utmMedium': string;
                'utmTerm': string;
                'utmSource': string;
            }

            export interface DynamicLinkInfo {
                'socialMetaTagInfo': SocialMetaTagInfo;
                'androidInfo': AndroidInfo;
                'navigationInfo': NavigationInfo;
                'analyticsInfo': AnalyticsInfo;
                'dynamicLinkDomain': string;
                'link': string;
                'iosInfo': IosInfo;
            }

            export interface ITunesConnectAnalytics {
                'ct': string;
                'mt': string;
                'pt': string;
                'at': string;
            }

            export interface DeviceInfo {
                'screenResolutionWidth': string;
                'deviceModelName': string;
                'screenResolutionHeight': string;
                'languageCode': string;
                'timezone': string;
            }

            export interface GetIosPostInstallAttributionResponse {
                'appMinimumVersion': string;
                'invitationId': string;
                'deepLink': string;
                'attributionConfidence': string;
                'externalBrowserDestinationLink': string;
                'matchMessage': string;
                'resolvedLink': string;
                'utmCampaign': string;
                'fallbackLink': string;
                'requestedLink': string;
                'utmMedium': string;
                'utmSource': string;
                'isStrongMatchExecutable': boolean;
            }

            export interface SocialMetaTagInfo {
                'socialDescription': string;
                'socialTitle': string;
                'socialImageLink': string;
            }

            export interface AndroidInfo {
                'androidLink': string;
                'androidFallbackLink': string;
                'androidPackageName': string;
                'androidMinPackageVersionCode': string;
            }

            export interface DynamicLinkWarning {
                'warningMessage': string;
                'warningDocumentLink': string;
                'warningCode': string;
            }

            export interface DynamicLinkStats {
                'linkEventStats': DynamicLinkEventStat[];
            }

        }
    }
}
