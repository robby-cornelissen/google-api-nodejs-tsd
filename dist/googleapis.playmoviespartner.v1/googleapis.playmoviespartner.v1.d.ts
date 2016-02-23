// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        playmoviespartner(version: string): any;
        playmoviespartner(version: 'v1'): playmoviespartner.v1.Playmoviespartner;
    }

    namespace playmoviespartner {
        namespace v1 {
            export interface Playmoviespartner {
                new(options: any): Playmoviespartner;

                'accounts': {
                    'avails': {
                        'list': (parameters: {'accountId': string, 'pageSize'?: number, 'pageToken'?: string, 'pphNames'?: string, 'studioNames'?: string, 'title'?: string, 'territories'?: string, 'altId'?: string, 'videoIds'?: string}, callback: (error: any, body: ListAvailsResponse, response: any) => void) => Request;
                    };
                    'orders': {
                        'get': (parameters: {'accountId': string, 'orderId': string}, callback: (error: any, body: Order, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'pageSize'?: number, 'pageToken'?: string, 'pphNames'?: string, 'studioNames'?: string, 'name'?: string, 'status'?: string, 'customId'?: string}, callback: (error: any, body: ListOrdersResponse, response: any) => void) => Request;
                    };
                    'experienceLocales': {
                        'get': (parameters: {'accountId': string, 'elId': string}, callback: (error: any, body: ExperienceLocale, response: any) => void) => Request;
                        'list': (parameters: {'accountId': string, 'pageSize'?: number, 'pageToken'?: string, 'pphNames'?: string, 'studioNames'?: string, 'titleLevelEidr'?: string, 'editLevelEidr'?: string, 'status'?: string, 'customId'?: string, 'altCutId'?: string}, callback: (error: any, body: ListExperienceLocalesResponse, response: any) => void) => Request;
                    };
                    'storeInfos': {
                        'list': (parameters: {'accountId': string, 'pageSize'?: number, 'pageToken'?: string, 'pphNames'?: string, 'studioNames'?: string, 'videoId'?: string, 'countries'?: string, 'name'?: string, 'videoIds'?: string}, callback: (error: any, body: ListStoreInfosResponse, response: any) => void) => Request;
                    
                        'country': {
                            'get': (parameters: {'accountId': string, 'videoId': string, 'country': string}, callback: (error: any, body: StoreInfo, response: any) => void) => Request;
                        };
                    };
                };

            }

            export interface ListAvailsResponse {
                'avails': Avail[];
                'nextPageToken': string;
            }

            export interface Avail {
                'displayName': string;
                'storeLanguage': string;
                'territory': string;
                'workType': string;
                'seriesTitleInternalAlias': string;
                'seasonNumber': string;
                'episodeNumber': string;
                'seasonTitleInternalAlias': string;
                'episodeTitleInternalAlias': string;
                'titleInternalAlias': string;
                'licenseType': string;
                'formatProfile': string;
                'start': string;
                'end': string;
                'priceType': string;
                'priceValue': string;
                'contentId': string;
                'productId': string;
                'encodeId': string;
                'seriesAltId': string;
                'seasonAltId': string;
                'episodeAltId': string;
                'altId': string;
                'suppressionLiftDate': string;
                'releaseDate': string;
                'ratingSystem': string;
                'ratingValue': string;
                'ratingReason': string;
                'captionIncluded': boolean;
                'captionExemption': string;
                'videoId': string;
                'pphNames': string[];
            }

            export interface Order {
                'orderId': string;
                'customId': string;
                'videoId': string;
                'countries': string[];
                'type': string;
                'name': string;
                'episodeName': string;
                'seasonName': string;
                'showName': string;
                'status': string;
                'statusDetail': string;
                'rejectionNote': string;
                'orderedTime': string;
                'approvedTime': string;
                'receivedTime': string;
                'earliestAvailStartTime': string;
                'priority': number;
                'legacyPriority': string;
                'channelId': string;
                'channelName': string;
                'studioName': string;
                'pphName': string;
                'normalizedPriority': string;
            }

            export interface ListOrdersResponse {
                'orders': Order[];
                'nextPageToken': string;
            }

            export interface ExperienceLocale {
                'elId': string;
                'country': string;
                'language': string;
                'videoId': string;
                'trailerId': string;
                'titleLevelEidr': string;
                'editLevelEidr': string;
                'altCutId': string;
                'customIds': string[];
                'presentationId': string;
                'inventoryId': string;
                'playableSequenceId': string;
                'type': string;
                'name': string;
                'status': string;
                'priority': number;
                'createdTime': string;
                'approvedTime': string;
                'earliestAvailStartTime': string;
                'channelId': string;
                'studioName': string;
                'pphNames': string[];
                'normalizedPriority': string;
            }

            export interface ListExperienceLocalesResponse {
                'experienceLocales': ExperienceLocale[];
                'nextPageToken': string;
            }

            export interface StoreInfo {
                'videoId': string;
                'seasonId': string;
                'showId': string;
                'country': string;
                'liveTime': string;
                'type': string;
                'name': string;
                'titleLevelEidr': string;
                'editLevelEidr': string;
                'seasonName': string;
                'showName': string;
                'seasonNumber': string;
                'episodeNumber': string;
                'hasSdOffer': boolean;
                'hasHdOffer': boolean;
                'hasVodOffer': boolean;
                'hasEstOffer': boolean;
                'hasAudio51': boolean;
                'audioTracks': string[];
                'subtitles': string[];
                'hasInfoCards': boolean;
                'mid': string;
                'trailerId': string;
                'studioName': string;
                'pphNames': string[];
            }

            export interface ListStoreInfosResponse {
                'storeInfos': StoreInfo[];
                'nextPageToken': string;
            }

        }
    }
}