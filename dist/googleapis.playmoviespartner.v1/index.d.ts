// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        playmoviespartner(version: string): any;
        playmoviespartner(version: 'v1'): playmoviespartner.v1.Playmoviespartner;
    }

    namespace playmoviespartner {
        namespace v1 {
            export interface Playmoviespartner {
                new(options: any): Playmoviespartner;

                'accounts': {
                    'orders': {
                        'list': (parameters: { [key: string]: any; 'status'?: string, 'studioNames'?: string, 'name'?: string, 'accountId': string, 'pageToken'?: string, 'customId'?: string, 'videoIds'?: string, 'pageSize'?: number, 'pphNames'?: string}, callback: (error: any, body: ListOrdersResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'orderId': string, 'accountId': string}, callback: (error: any, body: Order, response: any) => void) => Request;
                    };
                    'avails': {
                        'list': (parameters: { [key: string]: any; 'title'?: string, 'pageToken'?: string, 'videoIds'?: string, 'pageSize'?: number, 'altIds'?: string, 'pphNames'?: string, 'altId'?: string, 'studioNames'?: string, 'accountId': string, 'territories'?: string}, callback: (error: any, body: ListAvailsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'availId': string}, callback: (error: any, body: Avail, response: any) => void) => Request;
                    };
                    'storeInfos': {
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'seasonIds'?: string, 'pageToken'?: string, 'videoId'?: string, 'videoIds'?: string, 'pageSize'?: number, 'mids'?: string, 'pphNames'?: string, 'countries'?: string, 'studioNames'?: string, 'name'?: string}, callback: (error: any, body: ListStoreInfosResponse, response: any) => void) => Request;

                        'country': {
                            'get': (parameters: { [key: string]: any; 'accountId': string, 'country': string, 'videoId': string}, callback: (error: any, body: StoreInfo, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface Order {
                'studioName': string;
                'receivedTime': string;
                'seasonName': string;
                'customId': string;
                'channelName': string;
                'approvedTime': string;
                'showName': string;
                'orderId': string;
                'normalizedPriority': string;
                'type': string;
                'rejectionNote': string;
                'channelId': string;
                'legacyPriority': string;
                'pphName': string;
                'orderedTime': string;
                'priority': number;
                'videoId': string;
                'episodeName': string;
                'countries': string[];
                'earliestAvailStartTime': string;
                'status': string;
                'statusDetail': string;
                'name': string;
            }

            export interface ListStoreInfosResponse {
                'nextPageToken': string;
                'totalSize': number;
                'storeInfos': StoreInfo[];
            }

            export interface ListAvailsResponse {
                'avails': Avail[];
                'nextPageToken': string;
                'totalSize': number;
            }

            export interface ListOrdersResponse {
                'orders': Order[];
                'nextPageToken': string;
                'totalSize': number;
            }

            export interface StoreInfo {
                'name': string;
                'seasonId': string;
                'titleLevelEidr': string;
                'seasonName': string;
                'seasonNumber': string;
                'hasEstOffer': boolean;
                'editLevelEidr': string;
                'hasSdOffer': boolean;
                'liveTime': string;
                'videoId': string;
                'hasInfoCards': boolean;
                'hasVodOffer': boolean;
                'pphNames': string[];
                'episodeNumber': string;
                'studioName': string;
                'subtitles': string[];
                'audioTracks': string[];
                'showName': string;
                'country': string;
                'showId': string;
                'type': string;
                'trailerId': string;
                'hasHdOffer': boolean;
                'mid': string;
                'hasAudio51': boolean;
            }

            export interface Avail {
                'workType': string;
                'availId': string;
                'ratingReason': string;
                'episodeTitleInternalAlias': string;
                'suppressionLiftDate': string;
                'seasonAltId': string;
                'encodeId': string;
                'priceType': string;
                'captionIncluded': boolean;
                'licenseType': string;
                'seasonNumber': string;
                'releaseDate': string;
                'end': string;
                'videoId': string;
                'start': string;
                'pphNames': string[];
                'ratingSystem': string;
                'seriesAltId': string;
                'altId': string;
                'episodeNumber': string;
                'seriesTitleInternalAlias': string;
                'formatProfile': string;
                'contentId': string;
                'titleInternalAlias': string;
                'ratingValue': string;
                'storeLanguage': string;
                'displayName': string;
                'captionExemption': string;
                'productId': string;
                'seasonTitleInternalAlias': string;
                'episodeAltId': string;
                'priceValue': string;
                'territory': string;
            }

        }
    }
}
