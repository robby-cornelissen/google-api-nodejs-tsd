// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        youtube(version: string): any;
        youtube(version: 'v3'): youtube.v3.Youtube;
    }

    namespace youtube {
        namespace v3 {
            export interface Youtube {
                new(options: any): Youtube;

                'activities': {
                    'insert': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: Activity, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'channelId'?: string, 'home'?: boolean, 'maxResults'?: number, 'mine'?: boolean, 'pageToken'?: string, 'part': string, 'publishedAfter'?: string, 'publishedBefore'?: string, 'regionCode'?: string}, callback: (error: any, body: ActivityListResponse, response: any) => void) => Request;
                };
                'captions': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'download': (parameters: { [key: string]: any; 'id': string, 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'tfmt'?: string, 'tlang'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'part': string, 'sync'?: boolean}, callback: (error: any, body: Caption, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'id'?: string, 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'part': string, 'videoId': string}, callback: (error: any, body: CaptionListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'part': string, 'sync'?: boolean}, callback: (error: any, body: Caption, response: any) => void) => Request;
                };
                'channelBanners': {
                    'insert': (parameters: { [key: string]: any; 'channelId'?: string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: ChannelBannerResource, response: any) => void) => Request;
                };
                'channelSections': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: ChannelSection, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'channelId'?: string, 'hl'?: string, 'id'?: string, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: ChannelSectionListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: ChannelSection, response: any) => void) => Request;
                };
                'channels': {
                    'list': (parameters: { [key: string]: any; 'categoryId'?: string, 'forUsername'?: string, 'hl'?: string, 'id'?: string, 'managedByMe'?: boolean, 'maxResults'?: number, 'mine'?: boolean, 'mySubscribers'?: boolean, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: ChannelListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'commentThreads': {
                    'insert': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: CommentThread, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'allThreadsRelatedToChannelId'?: string, 'channelId'?: string, 'id'?: string, 'maxResults'?: number, 'moderationStatus'?: string, 'order'?: string, 'pageToken'?: string, 'part': string, 'searchTerms'?: string, 'textFormat'?: string, 'videoId'?: string}, callback: (error: any, body: CommentThreadListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: CommentThread, response: any) => void) => Request;
                };
                'comments': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'id'?: string, 'maxResults'?: number, 'pageToken'?: string, 'parentId'?: string, 'part': string, 'textFormat'?: string}, callback: (error: any, body: CommentListResponse, response: any) => void) => Request;
                    'markAsSpam': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'setModerationStatus': (parameters: { [key: string]: any; 'banAuthor'?: boolean, 'id': string, 'moderationStatus': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                };
                'fanFundingEvents': {
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'maxResults'?: number, 'pageToken'?: string, 'part': string}, callback: (error: any, body: FanFundingEventListResponse, response: any) => void) => Request;
                };
                'guideCategories': {
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'id'?: string, 'part': string, 'regionCode'?: string}, callback: (error: any, body: GuideCategoryListResponse, response: any) => void) => Request;
                };
                'i18nLanguages': {
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'part': string}, callback: (error: any, body: I18nLanguageListResponse, response: any) => void) => Request;
                };
                'i18nRegions': {
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'part': string}, callback: (error: any, body: I18nRegionListResponse, response: any) => void) => Request;
                };
                'liveBroadcasts': {
                    'bind': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string, 'streamId'?: string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'control': (parameters: { [key: string]: any; 'displaySlate'?: boolean, 'id': string, 'offsetTimeMs'?: string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string, 'walltime'?: string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'broadcastStatus'?: string, 'broadcastType'?: string, 'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: LiveBroadcastListResponse, response: any) => void) => Request;
                    'transition': (parameters: { [key: string]: any; 'broadcastStatus': string, 'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                };
                'liveChatBans': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: LiveChatBan, response: any) => void) => Request;
                };
                'liveChatMessages': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: LiveChatMessage, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'liveChatId': string, 'maxResults'?: number, 'pageToken'?: string, 'part': string, 'profileImageSize'?: number}, callback: (error: any, body: LiveChatMessageListResponse, response: any) => void) => Request;
                };
                'liveChatModerators': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: LiveChatModerator, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'liveChatId': string, 'maxResults'?: number, 'pageToken'?: string, 'part': string}, callback: (error: any, body: LiveChatModeratorListResponse, response: any) => void) => Request;
                };
                'liveStreams': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveStream, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: LiveStreamListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveStream, response: any) => void) => Request;
                };
                'playlistItems': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: PlaylistItem, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'id'?: string, 'maxResults'?: number, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string, 'part': string, 'playlistId'?: string, 'videoId'?: string}, callback: (error: any, body: PlaylistItemListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: PlaylistItem, response: any) => void) => Request;
                };
                'playlists': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: Playlist, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'channelId'?: string, 'hl'?: string, 'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: PlaylistListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: Playlist, response: any) => void) => Request;
                };
                'search': {
                    'list': (parameters: { [key: string]: any; 'channelId'?: string, 'channelType'?: string, 'eventType'?: string, 'forContentOwner'?: boolean, 'forDeveloper'?: boolean, 'forMine'?: boolean, 'location'?: string, 'locationRadius'?: string, 'maxResults'?: number, 'onBehalfOfContentOwner'?: string, 'order'?: string, 'pageToken'?: string, 'part': string, 'publishedAfter'?: string, 'publishedBefore'?: string, 'q'?: string, 'regionCode'?: string, 'relatedToVideoId'?: string, 'relevanceLanguage'?: string, 'safeSearch'?: string, 'topicId'?: string, 'type'?: string, 'videoCaption'?: string, 'videoCategoryId'?: string, 'videoDefinition'?: string, 'videoDimension'?: string, 'videoDuration'?: string, 'videoEmbeddable'?: string, 'videoLicense'?: string, 'videoSyndicated'?: string, 'videoType'?: string}, callback: (error: any, body: SearchListResponse, response: any) => void) => Request;
                };
                'sponsors': {
                    'list': (parameters: { [key: string]: any; 'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'part': string}, callback: (error: any, body: SponsorListResponse, response: any) => void) => Request;
                };
                'subscriptions': {
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'part': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'channelId'?: string, 'forChannelId'?: string, 'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'myRecentSubscribers'?: boolean, 'mySubscribers'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'order'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: SubscriptionListResponse, response: any) => void) => Request;
                };
                'superChatEvents': {
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'maxResults'?: number, 'pageToken'?: string, 'part': string}, callback: (error: any, body: SuperChatEventListResponse, response: any) => void) => Request;
                };
                'thumbnails': {
                    'set': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'videoId': string}, callback: (error: any, body: ThumbnailSetResponse, response: any) => void) => Request;
                };
                'videoAbuseReportReasons': {
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'part': string}, callback: (error: any, body: VideoAbuseReportReasonListResponse, response: any) => void) => Request;
                };
                'videoCategories': {
                    'list': (parameters: { [key: string]: any; 'hl'?: string, 'id'?: string, 'part': string, 'regionCode'?: string}, callback: (error: any, body: VideoCategoryListResponse, response: any) => void) => Request;
                };
                'videos': {
                    'delete': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'getRating': (parameters: { [key: string]: any; 'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: VideoGetRatingResponse, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'autoLevels'?: boolean, 'notifySubscribers'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string, 'stabilize'?: boolean}, callback: (error: any, body: Video, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'chart'?: string, 'hl'?: string, 'id'?: string, 'locale'?: string, 'maxHeight'?: number, 'maxResults'?: number, 'maxWidth'?: number, 'myRating'?: string, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string, 'part': string, 'regionCode'?: string, 'videoCategoryId'?: string}, callback: (error: any, body: VideoListResponse, response: any) => void) => Request;
                    'rate': (parameters: { [key: string]: any; 'id': string, 'rating': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'reportAbuse': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: Video, response: any) => void) => Request;
                };
                'watermarks': {
                    'set': (parameters: { [key: string]: any; 'channelId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'unset': (parameters: { [key: string]: any; 'channelId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                };

            }

            export interface AccessPolicy {
                'allowed': boolean;
                'exception': string[];
            }

            export interface Activity {
                'contentDetails': ActivityContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': ActivitySnippet;
            }

            export interface ActivityContentDetails {
                'bulletin': ActivityContentDetailsBulletin;
                'channelItem': ActivityContentDetailsChannelItem;
                'comment': ActivityContentDetailsComment;
                'favorite': ActivityContentDetailsFavorite;
                'like': ActivityContentDetailsLike;
                'playlistItem': ActivityContentDetailsPlaylistItem;
                'promotedItem': ActivityContentDetailsPromotedItem;
                'recommendation': ActivityContentDetailsRecommendation;
                'social': ActivityContentDetailsSocial;
                'subscription': ActivityContentDetailsSubscription;
                'upload': ActivityContentDetailsUpload;
            }

            export interface ActivityContentDetailsBulletin {
                'resourceId': ResourceId;
            }

            export interface ActivityContentDetailsChannelItem {
                'resourceId': ResourceId;
            }

            export interface ActivityContentDetailsComment {
                'resourceId': ResourceId;
            }

            export interface ActivityContentDetailsFavorite {
                'resourceId': ResourceId;
            }

            export interface ActivityContentDetailsLike {
                'resourceId': ResourceId;
            }

            export interface ActivityContentDetailsPlaylistItem {
                'playlistId': string;
                'playlistItemId': string;
                'resourceId': ResourceId;
            }

            export interface ActivityContentDetailsPromotedItem {
                'adTag': string;
                'clickTrackingUrl': string;
                'creativeViewUrl': string;
                'ctaType': string;
                'customCtaButtonText': string;
                'descriptionText': string;
                'destinationUrl': string;
                'forecastingUrl': string[];
                'impressionUrl': string[];
                'videoId': string;
            }

            export interface ActivityContentDetailsRecommendation {
                'reason': string;
                'resourceId': ResourceId;
                'seedResourceId': ResourceId;
            }

            export interface ActivityContentDetailsSocial {
                'author': string;
                'imageUrl': string;
                'referenceUrl': string;
                'resourceId': ResourceId;
                'type': string;
            }

            export interface ActivityContentDetailsSubscription {
                'resourceId': ResourceId;
            }

            export interface ActivityContentDetailsUpload {
                'videoId': string;
            }

            export interface ActivityListResponse {
                'etag': string;
                'eventId': string;
                'items': Activity[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface ActivitySnippet {
                'channelId': string;
                'channelTitle': string;
                'description': string;
                'groupId': string;
                'publishedAt': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
                'type': string;
            }

            export interface Caption {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': CaptionSnippet;
            }

            export interface CaptionListResponse {
                'etag': string;
                'eventId': string;
                'items': Caption[];
                'kind': string;
                'visitorId': string;
            }

            export interface CaptionSnippet {
                'audioTrackType': string;
                'failureReason': string;
                'isAutoSynced': boolean;
                'isCC': boolean;
                'isDraft': boolean;
                'isEasyReader': boolean;
                'isLarge': boolean;
                'language': string;
                'lastUpdated': string;
                'name': string;
                'status': string;
                'trackKind': string;
                'videoId': string;
            }

            export interface CdnSettings {
                'format': string;
                'frameRate': string;
                'ingestionInfo': IngestionInfo;
                'ingestionType': string;
                'resolution': string;
            }

            export interface Channel {
                'auditDetails': ChannelAuditDetails;
                'brandingSettings': ChannelBrandingSettings;
                'contentDetails': ChannelContentDetails;
                'contentOwnerDetails': ChannelContentOwnerDetails;
                'conversionPings': ChannelConversionPings;
                'etag': string;
                'id': string;
                'invideoPromotion': InvideoPromotion;
                'kind': string;
                'localizations': {
                    [name: string]: ChannelLocalization
                ;
                };
                'snippet': ChannelSnippet;
                'statistics': ChannelStatistics;
                'status': ChannelStatus;
                'topicDetails': ChannelTopicDetails;
            }

            export interface ChannelAuditDetails {
                'communityGuidelinesGoodStanding': boolean;
                'contentIdClaimsGoodStanding': boolean;
                'copyrightStrikesGoodStanding': boolean;
                'overallGoodStanding': boolean;
            }

            export interface ChannelBannerResource {
                'etag': string;
                'kind': string;
                'url': string;
            }

            export interface ChannelBrandingSettings {
                'channel': ChannelSettings;
                'hints': PropertyValue[];
                'image': ImageSettings;
                'watch': WatchSettings;
            }

            export interface ChannelContentDetails {
                'relatedPlaylists': {
                    'favorites': string;
                    'likes': string;
                    'uploads': string;
                    'watchHistory': string;
                    'watchLater': string;
                };
            }

            export interface ChannelContentOwnerDetails {
                'contentOwner': string;
                'timeLinked': string;
            }

            export interface ChannelConversionPing {
                'context': string;
                'conversionUrl': string;
            }

            export interface ChannelConversionPings {
                'pings': ChannelConversionPing[];
            }

            export interface ChannelListResponse {
                'etag': string;
                'eventId': string;
                'items': Channel[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface ChannelLocalization {
                'description': string;
                'title': string;
            }

            export interface ChannelProfileDetails {
                'channelId': string;
                'channelUrl': string;
                'displayName': string;
                'profileImageUrl': string;
            }

            export interface ChannelSection {
                'contentDetails': ChannelSectionContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'localizations': {
                    [name: string]: ChannelSectionLocalization
                ;
                };
                'snippet': ChannelSectionSnippet;
                'targeting': ChannelSectionTargeting;
            }

            export interface ChannelSectionContentDetails {
                'channels': string[];
                'playlists': string[];
            }

            export interface ChannelSectionListResponse {
                'etag': string;
                'eventId': string;
                'items': ChannelSection[];
                'kind': string;
                'visitorId': string;
            }

            export interface ChannelSectionLocalization {
                'title': string;
            }

            export interface ChannelSectionSnippet {
                'channelId': string;
                'defaultLanguage': string;
                'localized': ChannelSectionLocalization;
                'position': number;
                'style': string;
                'title': string;
                'type': string;
            }

            export interface ChannelSectionTargeting {
                'countries': string[];
                'languages': string[];
                'regions': string[];
            }

            export interface ChannelSettings {
                'country': string;
                'defaultLanguage': string;
                'defaultTab': string;
                'description': string;
                'featuredChannelsTitle': string;
                'featuredChannelsUrls': string[];
                'keywords': string;
                'moderateComments': boolean;
                'profileColor': string;
                'showBrowseView': boolean;
                'showRelatedChannels': boolean;
                'title': string;
                'trackingAnalyticsAccountId': string;
                'unsubscribedTrailer': string;
            }

            export interface ChannelSnippet {
                'country': string;
                'customUrl': string;
                'defaultLanguage': string;
                'description': string;
                'localized': ChannelLocalization;
                'publishedAt': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface ChannelStatistics {
                'commentCount': string;
                'hiddenSubscriberCount': boolean;
                'subscriberCount': string;
                'videoCount': string;
                'viewCount': string;
            }

            export interface ChannelStatus {
                'isLinked': boolean;
                'longUploadsStatus': string;
                'privacyStatus': string;
            }

            export interface ChannelTopicDetails {
                'topicCategories': string[];
                'topicIds': string[];
            }

            export interface Comment {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': CommentSnippet;
            }

            export interface CommentListResponse {
                'etag': string;
                'eventId': string;
                'items': Comment[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface CommentSnippet {
                'authorChannelId': any;
                'authorChannelUrl': string;
                'authorDisplayName': string;
                'authorProfileImageUrl': string;
                'canRate': boolean;
                'channelId': string;
                'likeCount': number;
                'moderationStatus': string;
                'parentId': string;
                'publishedAt': string;
                'textDisplay': string;
                'textOriginal': string;
                'updatedAt': string;
                'videoId': string;
                'viewerRating': string;
            }

            export interface CommentThread {
                'etag': string;
                'id': string;
                'kind': string;
                'replies': CommentThreadReplies;
                'snippet': CommentThreadSnippet;
            }

            export interface CommentThreadListResponse {
                'etag': string;
                'eventId': string;
                'items': CommentThread[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface CommentThreadReplies {
                'comments': Comment[];
            }

            export interface CommentThreadSnippet {
                'canReply': boolean;
                'channelId': string;
                'isPublic': boolean;
                'topLevelComment': Comment;
                'totalReplyCount': number;
                'videoId': string;
            }

            export interface ContentRating {
                'acbRating': string;
                'agcomRating': string;
                'anatelRating': string;
                'bbfcRating': string;
                'bfvcRating': string;
                'bmukkRating': string;
                'catvRating': string;
                'catvfrRating': string;
                'cbfcRating': string;
                'cccRating': string;
                'cceRating': string;
                'chfilmRating': string;
                'chvrsRating': string;
                'cicfRating': string;
                'cnaRating': string;
                'cncRating': string;
                'csaRating': string;
                'cscfRating': string;
                'czfilmRating': string;
                'djctqRating': string;
                'djctqRatingReasons': string[];
                'ecbmctRating': string;
                'eefilmRating': string;
                'egfilmRating': string;
                'eirinRating': string;
                'fcbmRating': string;
                'fcoRating': string;
                'fmocRating': string;
                'fpbRating': string;
                'fpbRatingReasons': string[];
                'fskRating': string;
                'grfilmRating': string;
                'icaaRating': string;
                'ifcoRating': string;
                'ilfilmRating': string;
                'incaaRating': string;
                'kfcbRating': string;
                'kijkwijzerRating': string;
                'kmrbRating': string;
                'lsfRating': string;
                'mccaaRating': string;
                'mccypRating': string;
                'mcstRating': string;
                'mdaRating': string;
                'medietilsynetRating': string;
                'mekuRating': string;
                'menaMpaaRating': string;
                'mibacRating': string;
                'mocRating': string;
                'moctwRating': string;
                'mpaaRating': string;
                'mpaatRating': string;
                'mtrcbRating': string;
                'nbcRating': string;
                'nbcplRating': string;
                'nfrcRating': string;
                'nfvcbRating': string;
                'nkclvRating': string;
                'oflcRating': string;
                'pefilmRating': string;
                'rcnofRating': string;
                'resorteviolenciaRating': string;
                'rtcRating': string;
                'rteRating': string;
                'russiaRating': string;
                'skfilmRating': string;
                'smaisRating': string;
                'smsaRating': string;
                'tvpgRating': string;
                'ytRating': string;
            }

            export interface FanFundingEvent {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': FanFundingEventSnippet;
            }

            export interface FanFundingEventListResponse {
                'etag': string;
                'eventId': string;
                'items': FanFundingEvent[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface FanFundingEventSnippet {
                'amountMicros': string;
                'channelId': string;
                'commentText': string;
                'createdAt': string;
                'currency': string;
                'displayString': string;
                'supporterDetails': ChannelProfileDetails;
            }

            export interface GeoPoint {
                'altitude': number;
                'latitude': number;
                'longitude': number;
            }

            export interface GuideCategory {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': GuideCategorySnippet;
            }

            export interface GuideCategoryListResponse {
                'etag': string;
                'eventId': string;
                'items': GuideCategory[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface GuideCategorySnippet {
                'channelId': string;
                'title': string;
            }

            export interface I18nLanguage {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': I18nLanguageSnippet;
            }

            export interface I18nLanguageListResponse {
                'etag': string;
                'eventId': string;
                'items': I18nLanguage[];
                'kind': string;
                'visitorId': string;
            }

            export interface I18nLanguageSnippet {
                'hl': string;
                'name': string;
            }

            export interface I18nRegion {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': I18nRegionSnippet;
            }

            export interface I18nRegionListResponse {
                'etag': string;
                'eventId': string;
                'items': I18nRegion[];
                'kind': string;
                'visitorId': string;
            }

            export interface I18nRegionSnippet {
                'gl': string;
                'name': string;
            }

            export interface ImageSettings {
                'backgroundImageUrl': LocalizedProperty;
                'bannerExternalUrl': string;
                'bannerImageUrl': string;
                'bannerMobileExtraHdImageUrl': string;
                'bannerMobileHdImageUrl': string;
                'bannerMobileImageUrl': string;
                'bannerMobileLowImageUrl': string;
                'bannerMobileMediumHdImageUrl': string;
                'bannerTabletExtraHdImageUrl': string;
                'bannerTabletHdImageUrl': string;
                'bannerTabletImageUrl': string;
                'bannerTabletLowImageUrl': string;
                'bannerTvHighImageUrl': string;
                'bannerTvImageUrl': string;
                'bannerTvLowImageUrl': string;
                'bannerTvMediumImageUrl': string;
                'largeBrandedBannerImageImapScript': LocalizedProperty;
                'largeBrandedBannerImageUrl': LocalizedProperty;
                'smallBrandedBannerImageImapScript': LocalizedProperty;
                'smallBrandedBannerImageUrl': LocalizedProperty;
                'trackingImageUrl': string;
                'watchIconImageUrl': string;
            }

            export interface IngestionInfo {
                'backupIngestionAddress': string;
                'ingestionAddress': string;
                'streamName': string;
            }

            export interface InvideoBranding {
                'imageBytes': string;
                'imageUrl': string;
                'position': InvideoPosition;
                'targetChannelId': string;
                'timing': InvideoTiming;
            }

            export interface InvideoPosition {
                'cornerPosition': string;
                'type': string;
            }

            export interface InvideoPromotion {
                'defaultTiming': InvideoTiming;
                'items': PromotedItem[];
                'position': InvideoPosition;
                'useSmartTiming': boolean;
            }

            export interface InvideoTiming {
                'durationMs': string;
                'offsetMs': string;
                'type': string;
            }

            export interface LanguageTag {
                'value': string;
            }

            export interface LiveBroadcast {
                'contentDetails': LiveBroadcastContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveBroadcastSnippet;
                'statistics': LiveBroadcastStatistics;
                'status': LiveBroadcastStatus;
            }

            export interface LiveBroadcastContentDetails {
                'boundStreamId': string;
                'boundStreamLastUpdateTimeMs': string;
                'closedCaptionsType': string;
                'enableClosedCaptions': boolean;
                'enableContentEncryption': boolean;
                'enableDvr': boolean;
                'enableEmbed': boolean;
                'enableLowLatency': boolean;
                'latencyPreference': string;
                'mesh': string;
                'monitorStream': MonitorStreamInfo;
                'projection': string;
                'recordFromStart': boolean;
                'startWithSlate': boolean;
            }

            export interface LiveBroadcastListResponse {
                'etag': string;
                'eventId': string;
                'items': LiveBroadcast[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface LiveBroadcastSnippet {
                'actualEndTime': string;
                'actualStartTime': string;
                'channelId': string;
                'description': string;
                'isDefaultBroadcast': boolean;
                'liveChatId': string;
                'publishedAt': string;
                'scheduledEndTime': string;
                'scheduledStartTime': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface LiveBroadcastStatistics {
                'concurrentViewers': string;
                'totalChatCount': string;
            }

            export interface LiveBroadcastStatus {
                'lifeCycleStatus': string;
                'liveBroadcastPriority': string;
                'privacyStatus': string;
                'recordingStatus': string;
            }

            export interface LiveChatBan {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveChatBanSnippet;
            }

            export interface LiveChatBanSnippet {
                'banDurationSeconds': string;
                'bannedUserDetails': ChannelProfileDetails;
                'liveChatId': string;
                'type': string;
            }

            export interface LiveChatFanFundingEventDetails {
                'amountDisplayString': string;
                'amountMicros': string;
                'currency': string;
                'userComment': string;
            }

            export interface LiveChatMessage {
                'authorDetails': LiveChatMessageAuthorDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveChatMessageSnippet;
            }

            export interface LiveChatMessageAuthorDetails {
                'channelId': string;
                'channelUrl': string;
                'displayName': string;
                'isChatModerator': boolean;
                'isChatOwner': boolean;
                'isChatSponsor': boolean;
                'isVerified': boolean;
                'profileImageUrl': string;
            }

            export interface LiveChatMessageDeletedDetails {
                'deletedMessageId': string;
            }

            export interface LiveChatMessageListResponse {
                'etag': string;
                'eventId': string;
                'items': LiveChatMessage[];
                'kind': string;
                'nextPageToken': string;
                'offlineAt': string;
                'pageInfo': PageInfo;
                'pollingIntervalMillis': number;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface LiveChatMessageRetractedDetails {
                'retractedMessageId': string;
            }

            export interface LiveChatMessageSnippet {
                'authorChannelId': string;
                'displayMessage': string;
                'fanFundingEventDetails': LiveChatFanFundingEventDetails;
                'hasDisplayContent': boolean;
                'liveChatId': string;
                'messageDeletedDetails': LiveChatMessageDeletedDetails;
                'messageRetractedDetails': LiveChatMessageRetractedDetails;
                'pollClosedDetails': LiveChatPollClosedDetails;
                'pollEditedDetails': LiveChatPollEditedDetails;
                'pollOpenedDetails': LiveChatPollOpenedDetails;
                'pollVotedDetails': LiveChatPollVotedDetails;
                'publishedAt': string;
                'superChatDetails': LiveChatSuperChatDetails;
                'textMessageDetails': LiveChatTextMessageDetails;
                'type': string;
                'userBannedDetails': LiveChatUserBannedMessageDetails;
            }

            export interface LiveChatModerator {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveChatModeratorSnippet;
            }

            export interface LiveChatModeratorListResponse {
                'etag': string;
                'eventId': string;
                'items': LiveChatModerator[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface LiveChatModeratorSnippet {
                'liveChatId': string;
                'moderatorDetails': ChannelProfileDetails;
            }

            export interface LiveChatPollClosedDetails {
                'pollId': string;
            }

            export interface LiveChatPollEditedDetails {
                'id': string;
                'items': LiveChatPollItem[];
                'prompt': string;
            }

            export interface LiveChatPollItem {
                'description': string;
                'itemId': string;
            }

            export interface LiveChatPollOpenedDetails {
                'id': string;
                'items': LiveChatPollItem[];
                'prompt': string;
            }

            export interface LiveChatPollVotedDetails {
                'itemId': string;
                'pollId': string;
            }

            export interface LiveChatSuperChatDetails {
                'amountDisplayString': string;
                'amountMicros': string;
                'currency': string;
                'tier': number;
                'userComment': string;
            }

            export interface LiveChatTextMessageDetails {
                'messageText': string;
            }

            export interface LiveChatUserBannedMessageDetails {
                'banDurationSeconds': string;
                'banType': string;
                'bannedUserDetails': ChannelProfileDetails;
            }

            export interface LiveStream {
                'cdn': CdnSettings;
                'contentDetails': LiveStreamContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveStreamSnippet;
                'status': LiveStreamStatus;
            }

            export interface LiveStreamConfigurationIssue {
                'description': string;
                'reason': string;
                'severity': string;
                'type': string;
            }

            export interface LiveStreamContentDetails {
                'closedCaptionsIngestionUrl': string;
                'isReusable': boolean;
            }

            export interface LiveStreamHealthStatus {
                'configurationIssues': LiveStreamConfigurationIssue[];
                'lastUpdateTimeSeconds': string;
                'status': string;
            }

            export interface LiveStreamListResponse {
                'etag': string;
                'eventId': string;
                'items': LiveStream[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface LiveStreamSnippet {
                'channelId': string;
                'description': string;
                'isDefaultStream': boolean;
                'publishedAt': string;
                'title': string;
            }

            export interface LiveStreamStatus {
                'healthStatus': LiveStreamHealthStatus;
                'streamStatus': string;
            }

            export interface LocalizedProperty {
                'default': string;
                'defaultLanguage': LanguageTag;
                'localized': LocalizedString[];
            }

            export interface LocalizedString {
                'language': string;
                'value': string;
            }

            export interface MonitorStreamInfo {
                'broadcastStreamDelayMs': number;
                'embedHtml': string;
                'enableMonitorStream': boolean;
            }

            export interface PageInfo {
                'resultsPerPage': number;
                'totalResults': number;
            }

            export interface Playlist {
                'contentDetails': PlaylistContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'localizations': {
                    [name: string]: PlaylistLocalization
                ;
                };
                'player': PlaylistPlayer;
                'snippet': PlaylistSnippet;
                'status': PlaylistStatus;
            }

            export interface PlaylistContentDetails {
                'itemCount': number;
            }

            export interface PlaylistItem {
                'contentDetails': PlaylistItemContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': PlaylistItemSnippet;
                'status': PlaylistItemStatus;
            }

            export interface PlaylistItemContentDetails {
                'endAt': string;
                'note': string;
                'startAt': string;
                'videoId': string;
                'videoPublishedAt': string;
            }

            export interface PlaylistItemListResponse {
                'etag': string;
                'eventId': string;
                'items': PlaylistItem[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface PlaylistItemSnippet {
                'channelId': string;
                'channelTitle': string;
                'description': string;
                'playlistId': string;
                'position': number;
                'publishedAt': string;
                'resourceId': ResourceId;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface PlaylistItemStatus {
                'privacyStatus': string;
            }

            export interface PlaylistListResponse {
                'etag': string;
                'eventId': string;
                'items': Playlist[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface PlaylistLocalization {
                'description': string;
                'title': string;
            }

            export interface PlaylistPlayer {
                'embedHtml': string;
            }

            export interface PlaylistSnippet {
                'channelId': string;
                'channelTitle': string;
                'defaultLanguage': string;
                'description': string;
                'localized': PlaylistLocalization;
                'publishedAt': string;
                'tags': string[];
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface PlaylistStatus {
                'privacyStatus': string;
            }

            export interface PromotedItem {
                'customMessage': string;
                'id': PromotedItemId;
                'promotedByContentOwner': boolean;
                'timing': InvideoTiming;
            }

            export interface PromotedItemId {
                'recentlyUploadedBy': string;
                'type': string;
                'videoId': string;
                'websiteUrl': string;
            }

            export interface PropertyValue {
                'property': string;
                'value': string;
            }

            export interface ResourceId {
                'channelId': string;
                'kind': string;
                'playlistId': string;
                'videoId': string;
            }

            export interface SearchListResponse {
                'etag': string;
                'eventId': string;
                'items': SearchResult[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'regionCode': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface SearchResult {
                'etag': string;
                'id': ResourceId;
                'kind': string;
                'snippet': SearchResultSnippet;
            }

            export interface SearchResultSnippet {
                'channelId': string;
                'channelTitle': string;
                'description': string;
                'liveBroadcastContent': string;
                'publishedAt': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface Sponsor {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': SponsorSnippet;
            }

            export interface SponsorListResponse {
                'etag': string;
                'eventId': string;
                'items': Sponsor[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface SponsorSnippet {
                'channelId': string;
                'sponsorDetails': ChannelProfileDetails;
                'sponsorSince': string;
            }

            export interface Subscription {
                'contentDetails': SubscriptionContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': SubscriptionSnippet;
                'subscriberSnippet': SubscriptionSubscriberSnippet;
            }

            export interface SubscriptionContentDetails {
                'activityType': string;
                'newItemCount': number;
                'totalItemCount': number;
            }

            export interface SubscriptionListResponse {
                'etag': string;
                'eventId': string;
                'items': Subscription[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface SubscriptionSnippet {
                'channelId': string;
                'channelTitle': string;
                'description': string;
                'publishedAt': string;
                'resourceId': ResourceId;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface SubscriptionSubscriberSnippet {
                'channelId': string;
                'description': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface SuperChatEvent {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': SuperChatEventSnippet;
            }

            export interface SuperChatEventListResponse {
                'etag': string;
                'eventId': string;
                'items': SuperChatEvent[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface SuperChatEventSnippet {
                'amountMicros': string;
                'channelId': string;
                'commentText': string;
                'createdAt': string;
                'currency': string;
                'displayString': string;
                'messageType': number;
                'supporterDetails': ChannelProfileDetails;
            }

            export interface Thumbnail {
                'height': number;
                'url': string;
                'width': number;
            }

            export interface ThumbnailDetails {
                'default': Thumbnail;
                'high': Thumbnail;
                'maxres': Thumbnail;
                'medium': Thumbnail;
                'standard': Thumbnail;
            }

            export interface ThumbnailSetResponse {
                'etag': string;
                'eventId': string;
                'items': ThumbnailDetails[];
                'kind': string;
                'visitorId': string;
            }

            export interface TokenPagination {}

            export interface Video {
                'ageGating': VideoAgeGating;
                'contentDetails': VideoContentDetails;
                'etag': string;
                'fileDetails': VideoFileDetails;
                'id': string;
                'kind': string;
                'liveStreamingDetails': VideoLiveStreamingDetails;
                'localizations': {
                    [name: string]: VideoLocalization
                ;
                };
                'monetizationDetails': VideoMonetizationDetails;
                'player': VideoPlayer;
                'processingDetails': VideoProcessingDetails;
                'projectDetails': VideoProjectDetails;
                'recordingDetails': VideoRecordingDetails;
                'snippet': VideoSnippet;
                'statistics': VideoStatistics;
                'status': VideoStatus;
                'suggestions': VideoSuggestions;
                'topicDetails': VideoTopicDetails;
            }

            export interface VideoAbuseReport {
                'comments': string;
                'language': string;
                'reasonId': string;
                'secondaryReasonId': string;
                'videoId': string;
            }

            export interface VideoAbuseReportReason {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': VideoAbuseReportReasonSnippet;
            }

            export interface VideoAbuseReportReasonListResponse {
                'etag': string;
                'eventId': string;
                'items': VideoAbuseReportReason[];
                'kind': string;
                'visitorId': string;
            }

            export interface VideoAbuseReportReasonSnippet {
                'label': string;
                'secondaryReasons': VideoAbuseReportSecondaryReason[];
            }

            export interface VideoAbuseReportSecondaryReason {
                'id': string;
                'label': string;
            }

            export interface VideoAgeGating {
                'alcoholContent': boolean;
                'restricted': boolean;
                'videoGameRating': string;
            }

            export interface VideoCategory {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': VideoCategorySnippet;
            }

            export interface VideoCategoryListResponse {
                'etag': string;
                'eventId': string;
                'items': VideoCategory[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface VideoCategorySnippet {
                'assignable': boolean;
                'channelId': string;
                'title': string;
            }

            export interface VideoContentDetails {
                'caption': string;
                'contentRating': ContentRating;
                'countryRestriction': AccessPolicy;
                'definition': string;
                'dimension': string;
                'duration': string;
                'hasCustomThumbnail': boolean;
                'licensedContent': boolean;
                'projection': string;
                'regionRestriction': VideoContentDetailsRegionRestriction;
            }

            export interface VideoContentDetailsRegionRestriction {
                'allowed': string[];
                'blocked': string[];
            }

            export interface VideoFileDetails {
                'audioStreams': VideoFileDetailsAudioStream[];
                'bitrateBps': string;
                'container': string;
                'creationTime': string;
                'durationMs': string;
                'fileName': string;
                'fileSize': string;
                'fileType': string;
                'videoStreams': VideoFileDetailsVideoStream[];
            }

            export interface VideoFileDetailsAudioStream {
                'bitrateBps': string;
                'channelCount': number;
                'codec': string;
                'vendor': string;
            }

            export interface VideoFileDetailsVideoStream {
                'aspectRatio': number;
                'bitrateBps': string;
                'codec': string;
                'frameRateFps': number;
                'heightPixels': number;
                'rotation': string;
                'vendor': string;
                'widthPixels': number;
            }

            export interface VideoGetRatingResponse {
                'etag': string;
                'eventId': string;
                'items': VideoRating[];
                'kind': string;
                'visitorId': string;
            }

            export interface VideoListResponse {
                'etag': string;
                'eventId': string;
                'items': Video[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'prevPageToken': string;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            export interface VideoLiveStreamingDetails {
                'activeLiveChatId': string;
                'actualEndTime': string;
                'actualStartTime': string;
                'concurrentViewers': string;
                'scheduledEndTime': string;
                'scheduledStartTime': string;
            }

            export interface VideoLocalization {
                'description': string;
                'title': string;
            }

            export interface VideoMonetizationDetails {
                'access': AccessPolicy;
            }

            export interface VideoPlayer {
                'embedHeight': string;
                'embedHtml': string;
                'embedWidth': string;
            }

            export interface VideoProcessingDetails {
                'editorSuggestionsAvailability': string;
                'fileDetailsAvailability': string;
                'processingFailureReason': string;
                'processingIssuesAvailability': string;
                'processingProgress': VideoProcessingDetailsProcessingProgress;
                'processingStatus': string;
                'tagSuggestionsAvailability': string;
                'thumbnailsAvailability': string;
            }

            export interface VideoProcessingDetailsProcessingProgress {
                'partsProcessed': string;
                'partsTotal': string;
                'timeLeftMs': string;
            }

            export interface VideoProjectDetails {
                'tags': string[];
            }

            export interface VideoRating {
                'rating': string;
                'videoId': string;
            }

            export interface VideoRecordingDetails {
                'location': GeoPoint;
                'locationDescription': string;
                'recordingDate': string;
            }

            export interface VideoSnippet {
                'categoryId': string;
                'channelId': string;
                'channelTitle': string;
                'defaultAudioLanguage': string;
                'defaultLanguage': string;
                'description': string;
                'liveBroadcastContent': string;
                'localized': VideoLocalization;
                'publishedAt': string;
                'tags': string[];
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            export interface VideoStatistics {
                'commentCount': string;
                'dislikeCount': string;
                'favoriteCount': string;
                'likeCount': string;
                'viewCount': string;
            }

            export interface VideoStatus {
                'embeddable': boolean;
                'failureReason': string;
                'license': string;
                'privacyStatus': string;
                'publicStatsViewable': boolean;
                'publishAt': string;
                'rejectionReason': string;
                'uploadStatus': string;
            }

            export interface VideoSuggestions {
                'editorSuggestions': string[];
                'processingErrors': string[];
                'processingHints': string[];
                'processingWarnings': string[];
                'tagSuggestions': VideoSuggestionsTagSuggestion[];
            }

            export interface VideoSuggestionsTagSuggestion {
                'categoryRestricts': string[];
                'tag': string;
            }

            export interface VideoTopicDetails {
                'relevantTopicIds': string[];
                'topicCategories': string[];
                'topicIds': string[];
            }

            export interface WatchSettings {
                'backgroundColor': string;
                'featuredPlaylistId': string;
                'textColor': string;
            }

        }
    }
}
