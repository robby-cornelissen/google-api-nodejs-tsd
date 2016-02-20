/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        youtube(version: string): any;
        youtube(version: 'v3'): youtube.v3.Youtube;
    }

    namespace youtube {
        namespace v3 {
            export interface Youtube {
                new(options: any): Youtube;

                'activities': {
                    'insert': (parameters: {'part': string}, callback: (error: any, body: Activity, response: any) => void) => Request;
                    'list': (parameters: {'channelId'?: string, 'home'?: boolean, 'maxResults'?: number, 'mine'?: boolean, 'pageToken'?: string, 'part': string, 'publishedAfter'?: string, 'publishedBefore'?: string, 'regionCode'?: string}, callback: (error: any, body: ActivityListResponse, response: any) => void) => Request;
                };
                'captions': {
                    'delete': (parameters: {'id': string, 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'download': (parameters: {'id': string, 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'tfmt'?: string, 'tlang'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'part': string, 'sync'?: boolean}, callback: (error: any, body: Caption, response: any) => void) => Request;
                    'list': (parameters: {'id'?: string, 'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'part': string, 'videoId': string}, callback: (error: any, body: CaptionListResponse, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOf'?: string, 'onBehalfOfContentOwner'?: string, 'part': string, 'sync'?: boolean}, callback: (error: any, body: Caption, response: any) => void) => Request;
                };
                'channelBanners': {
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string}, callback: (error: any, body: ChannelBannerResource, response: any) => void) => Request;
                };
                'channelSections': {
                    'delete': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: ChannelSection, response: any) => void) => Request;
                    'list': (parameters: {'channelId'?: string, 'hl'?: string, 'id'?: string, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: ChannelSectionListResponse, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: ChannelSection, response: any) => void) => Request;
                };
                'channels': {
                    'list': (parameters: {'categoryId'?: string, 'forUsername'?: string, 'hl'?: string, 'id'?: string, 'managedByMe'?: boolean, 'maxResults'?: number, 'mine'?: boolean, 'mySubscribers'?: boolean, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: ChannelListResponse, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'commentThreads': {
                    'insert': (parameters: {'part': string}, callback: (error: any, body: CommentThread, response: any) => void) => Request;
                    'list': (parameters: {'allThreadsRelatedToChannelId'?: string, 'channelId'?: string, 'id'?: string, 'maxResults'?: number, 'moderationStatus'?: string, 'order'?: string, 'pageToken'?: string, 'part': string, 'searchTerms'?: string, 'textFormat'?: string, 'videoId'?: string}, callback: (error: any, body: CommentThreadListResponse, response: any) => void) => Request;
                    'update': (parameters: {'part': string}, callback: (error: any, body: CommentThread, response: any) => void) => Request;
                };
                'comments': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'part': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: {'id'?: string, 'maxResults'?: number, 'pageToken'?: string, 'parentId'?: string, 'part': string, 'textFormat'?: string}, callback: (error: any, body: CommentListResponse, response: any) => void) => Request;
                    'markAsSpam': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'setModerationStatus': (parameters: {'banAuthor'?: boolean, 'id': string, 'moderationStatus': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: {'part': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                };
                'fanFundingEvents': {
                    'list': (parameters: {'hl'?: string, 'maxResults'?: number, 'pageToken'?: string, 'part': string}, callback: (error: any, body: FanFundingEventListResponse, response: any) => void) => Request;
                };
                'guideCategories': {
                    'list': (parameters: {'hl'?: string, 'id'?: string, 'part': string, 'regionCode'?: string}, callback: (error: any, body: GuideCategoryListResponse, response: any) => void) => Request;
                };
                'i18nLanguages': {
                    'list': (parameters: {'hl'?: string, 'part': string}, callback: (error: any, body: I18nLanguageListResponse, response: any) => void) => Request;
                };
                'i18nRegions': {
                    'list': (parameters: {'hl'?: string, 'part': string}, callback: (error: any, body: I18nRegionListResponse, response: any) => void) => Request;
                };
                'liveBroadcasts': {
                    'bind': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string, 'streamId'?: string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'control': (parameters: {'displaySlate'?: boolean, 'id': string, 'offsetTimeMs'?: string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string, 'walltime'?: string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'delete': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'list': (parameters: {'broadcastStatus'?: string, 'broadcastType'?: string, 'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: LiveBroadcastListResponse, response: any) => void) => Request;
                    'transition': (parameters: {'broadcastStatus': string, 'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveBroadcast, response: any) => void) => Request;
                };
                'liveChatBans': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'part': string}, callback: (error: any, body: LiveChatBan, response: any) => void) => Request;
                };
                'liveChatMessages': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'part': string}, callback: (error: any, body: LiveChatMessage, response: any) => void) => Request;
                    'list': (parameters: {'hl'?: string, 'liveChatId': string, 'maxResults'?: number, 'pageToken'?: string, 'part': string, 'profileImageSize'?: number}, callback: (error: any, body: LiveChatMessageListResponse, response: any) => void) => Request;
                };
                'liveChatModerators': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'part': string}, callback: (error: any, body: LiveChatModerator, response: any) => void) => Request;
                    'list': (parameters: {'liveChatId': string, 'maxResults'?: number, 'pageToken'?: string, 'part': string}, callback: (error: any, body: LiveChatModeratorListResponse, response: any) => void) => Request;
                };
                'liveStreams': {
                    'delete': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveStream, response: any) => void) => Request;
                    'list': (parameters: {'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: LiveStreamListResponse, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: LiveStream, response: any) => void) => Request;
                };
                'playlistItems': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: PlaylistItem, response: any) => void) => Request;
                    'list': (parameters: {'id'?: string, 'maxResults'?: number, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string, 'part': string, 'playlistId'?: string, 'videoId'?: string}, callback: (error: any, body: PlaylistItemListResponse, response: any) => void) => Request;
                    'update': (parameters: {'part': string}, callback: (error: any, body: PlaylistItem, response: any) => void) => Request;
                };
                'playlists': {
                    'delete': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string}, callback: (error: any, body: Playlist, response: any) => void) => Request;
                    'list': (parameters: {'channelId'?: string, 'hl'?: string, 'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: PlaylistListResponse, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: Playlist, response: any) => void) => Request;
                };
                'search': {
                    'list': (parameters: {'channelId'?: string, 'channelType'?: string, 'eventType'?: string, 'forContentOwner'?: boolean, 'forDeveloper'?: boolean, 'forMine'?: boolean, 'location'?: string, 'locationRadius'?: string, 'maxResults'?: number, 'onBehalfOfContentOwner'?: string, 'order'?: string, 'pageToken'?: string, 'part': string, 'publishedAfter'?: string, 'publishedBefore'?: string, 'q'?: string, 'regionCode'?: string, 'relatedToVideoId'?: string, 'relevanceLanguage'?: string, 'safeSearch'?: string, 'topicId'?: string, 'type'?: string, 'videoCaption'?: string, 'videoCategoryId'?: string, 'videoDefinition'?: string, 'videoDimension'?: string, 'videoDuration'?: string, 'videoEmbeddable'?: string, 'videoLicense'?: string, 'videoSyndicated'?: string, 'videoType'?: string}, callback: (error: any, body: SearchListResponse, response: any) => void) => Request;
                };
                'sponsors': {
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'part': string}, callback: (error: any, body: SponsorListResponse, response: any) => void) => Request;
                };
                'subscriptions': {
                    'delete': (parameters: {'id': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'insert': (parameters: {'part': string}, callback: (error: any, body: Subscription, response: any) => void) => Request;
                    'list': (parameters: {'channelId'?: string, 'forChannelId'?: string, 'id'?: string, 'maxResults'?: number, 'mine'?: boolean, 'mySubscribers'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'order'?: string, 'pageToken'?: string, 'part': string}, callback: (error: any, body: SubscriptionListResponse, response: any) => void) => Request;
                };
                'thumbnails': {
                    'set': (parameters: {'onBehalfOfContentOwner'?: string, 'videoId': string}, callback: (error: any, body: ThumbnailSetResponse, response: any) => void) => Request;
                };
                'videoAbuseReportReasons': {
                    'list': (parameters: {'hl'?: string, 'part': string}, callback: (error: any, body: VideoAbuseReportReasonListResponse, response: any) => void) => Request;
                };
                'videoCategories': {
                    'list': (parameters: {'hl'?: string, 'id'?: string, 'part': string, 'regionCode'?: string}, callback: (error: any, body: VideoCategoryListResponse, response: any) => void) => Request;
                };
                'videos': {
                    'delete': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'getRating': (parameters: {'id': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: VideoGetRatingResponse, response: any) => void) => Request;
                    'insert': (parameters: {'autoLevels'?: boolean, 'notifySubscribers'?: boolean, 'onBehalfOfContentOwner'?: string, 'onBehalfOfContentOwnerChannel'?: string, 'part': string, 'stabilize'?: boolean}, callback: (error: any, body: Video, response: any) => void) => Request;
                    'list': (parameters: {'chart'?: string, 'hl'?: string, 'id'?: string, 'locale'?: string, 'maxResults'?: number, 'myRating'?: string, 'onBehalfOfContentOwner'?: string, 'pageToken'?: string, 'part': string, 'regionCode'?: string, 'videoCategoryId'?: string}, callback: (error: any, body: VideoListResponse, response: any) => void) => Request;
                    'rate': (parameters: {'id': string, 'rating': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'reportAbuse': (parameters: {'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: {'onBehalfOfContentOwner'?: string, 'part': string}, callback: (error: any, body: Video, response: any) => void) => Request;
                };
                'watermarks': {
                    'set': (parameters: {'channelId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'unset': (parameters: {'channelId': string, 'onBehalfOfContentOwner'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                };

            }

            interface AccessPolicy {
                'allowed': boolean;
                'exception': string[];
            }

            interface Activity {
                'contentDetails': ActivityContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': ActivitySnippet;
            }

            interface ActivityContentDetails {
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

            interface ActivityContentDetailsBulletin {
                'resourceId': ResourceId;
            }

            interface ActivityContentDetailsChannelItem {
                'resourceId': ResourceId;
            }

            interface ActivityContentDetailsComment {
                'resourceId': ResourceId;
            }

            interface ActivityContentDetailsFavorite {
                'resourceId': ResourceId;
            }

            interface ActivityContentDetailsLike {
                'resourceId': ResourceId;
            }

            interface ActivityContentDetailsPlaylistItem {
                'playlistId': string;
                'playlistItemId': string;
                'resourceId': ResourceId;
            }

            interface ActivityContentDetailsPromotedItem {
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

            interface ActivityContentDetailsRecommendation {
                'reason': string;
                'resourceId': ResourceId;
                'seedResourceId': ResourceId;
            }

            interface ActivityContentDetailsSocial {
                'author': string;
                'imageUrl': string;
                'referenceUrl': string;
                'resourceId': ResourceId;
                'type': string;
            }

            interface ActivityContentDetailsSubscription {
                'resourceId': ResourceId;
            }

            interface ActivityContentDetailsUpload {
                'videoId': string;
            }

            interface ActivityListResponse {
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

            interface ActivitySnippet {
                'channelId': string;
                'channelTitle': string;
                'description': string;
                'groupId': string;
                'publishedAt': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
                'type': string;
            }

            interface Caption {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': CaptionSnippet;
            }

            interface CaptionListResponse {
                'etag': string;
                'eventId': string;
                'items': Caption[];
                'kind': string;
                'visitorId': string;
            }

            interface CaptionSnippet {
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

            interface CdnSettings {
                'format': string;
                'ingestionInfo': IngestionInfo;
                'ingestionType': string;
            }

            interface Channel {
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
                };
                'snippet': ChannelSnippet;
                'statistics': ChannelStatistics;
                'status': ChannelStatus;
                'topicDetails': ChannelTopicDetails;
            }

            interface ChannelAuditDetails {
                'communityGuidelinesGoodStanding': boolean;
                'contentIdClaimsGoodStanding': boolean;
                'copyrightStrikesGoodStanding': boolean;
                'overallGoodStanding': boolean;
            }

            interface ChannelBannerResource {
                'etag': string;
                'kind': string;
                'url': string;
            }

            interface ChannelBrandingSettings {
                'channel': ChannelSettings;
                'hints': PropertyValue[];
                'image': ImageSettings;
                'watch': WatchSettings;
            }

            interface ChannelContentDetails {
                'googlePlusUserId': string;
                'relatedPlaylists': {
                    'favorites': string;
                    'likes': string;
                    'uploads': string;
                    'watchHistory': string;
                    'watchLater': string;
                };
            }

            interface ChannelContentOwnerDetails {
                'contentOwner': string;
                'timeLinked': string;
            }

            interface ChannelConversionPing {
                'context': string;
                'conversionUrl': string;
            }

            interface ChannelConversionPings {
                'pings': ChannelConversionPing[];
            }

            interface ChannelListResponse {
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

            interface ChannelLocalization {
                'description': string;
                'title': string;
            }

            interface ChannelProfileDetails {
                'channelId': string;
                'channelUrl': string;
                'displayName': string;
                'profileImageUrl': string;
            }

            interface ChannelSection {
                'contentDetails': ChannelSectionContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'localizations': {
                    [name: string]: ChannelSectionLocalization
                };
                'snippet': ChannelSectionSnippet;
                'targeting': ChannelSectionTargeting;
            }

            interface ChannelSectionContentDetails {
                'channels': string[];
                'playlists': string[];
            }

            interface ChannelSectionListResponse {
                'etag': string;
                'eventId': string;
                'items': ChannelSection[];
                'kind': string;
                'visitorId': string;
            }

            interface ChannelSectionLocalization {
                'title': string;
            }

            interface ChannelSectionSnippet {
                'channelId': string;
                'defaultLanguage': string;
                'localized': ChannelSectionLocalization;
                'position': number;
                'style': string;
                'title': string;
                'type': string;
            }

            interface ChannelSectionTargeting {
                'countries': string[];
                'languages': string[];
                'regions': string[];
            }

            interface ChannelSettings {
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

            interface ChannelSnippet {
                'country': string;
                'defaultLanguage': string;
                'description': string;
                'localized': ChannelLocalization;
                'publishedAt': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            interface ChannelStatistics {
                'commentCount': string;
                'hiddenSubscriberCount': boolean;
                'subscriberCount': string;
                'videoCount': string;
                'viewCount': string;
            }

            interface ChannelStatus {
                'isLinked': boolean;
                'longUploadsStatus': string;
                'privacyStatus': string;
            }

            interface ChannelTopicDetails {
                'topicIds': string[];
            }

            interface Comment {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': CommentSnippet;
            }

            interface CommentListResponse {
                'etag': string;
                'eventId': string;
                'items': Comment[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            interface CommentSnippet {
                'authorChannelId': any;
                'authorChannelUrl': string;
                'authorDisplayName': string;
                'authorGoogleplusProfileUrl': string;
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

            interface CommentThread {
                'etag': string;
                'id': string;
                'kind': string;
                'replies': CommentThreadReplies;
                'snippet': CommentThreadSnippet;
            }

            interface CommentThreadListResponse {
                'etag': string;
                'eventId': string;
                'items': CommentThread[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            interface CommentThreadReplies {
                'comments': Comment[];
            }

            interface CommentThreadSnippet {
                'canReply': boolean;
                'channelId': string;
                'isPublic': boolean;
                'topLevelComment': Comment;
                'totalReplyCount': number;
                'videoId': string;
            }

            interface ContentRating {
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
                'mdaRating': string;
                'medietilsynetRating': string;
                'mekuRating': string;
                'mibacRating': string;
                'mocRating': string;
                'moctwRating': string;
                'mpaaRating': string;
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

            interface FanFundingEvent {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': FanFundingEventSnippet;
            }

            interface FanFundingEventListResponse {
                'etag': string;
                'eventId': string;
                'items': FanFundingEvent[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            interface FanFundingEventSnippet {
                'amountMicros': string;
                'channelId': string;
                'commentText': string;
                'createdAt': string;
                'currency': string;
                'displayString': string;
                'supporterDetails': ChannelProfileDetails;
            }

            interface GeoPoint {
                'altitude': number;
                'latitude': number;
                'longitude': number;
            }

            interface GuideCategory {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': GuideCategorySnippet;
            }

            interface GuideCategoryListResponse {
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

            interface GuideCategorySnippet {
                'channelId': string;
                'title': string;
            }

            interface I18nLanguage {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': I18nLanguageSnippet;
            }

            interface I18nLanguageListResponse {
                'etag': string;
                'eventId': string;
                'items': I18nLanguage[];
                'kind': string;
                'visitorId': string;
            }

            interface I18nLanguageSnippet {
                'hl': string;
                'name': string;
            }

            interface I18nRegion {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': I18nRegionSnippet;
            }

            interface I18nRegionListResponse {
                'etag': string;
                'eventId': string;
                'items': I18nRegion[];
                'kind': string;
                'visitorId': string;
            }

            interface I18nRegionSnippet {
                'gl': string;
                'name': string;
            }

            interface ImageSettings {
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

            interface IngestionInfo {
                'backupIngestionAddress': string;
                'ingestionAddress': string;
                'streamName': string;
            }

            interface InvideoBranding {
                'imageBytes': string;
                'imageUrl': string;
                'position': InvideoPosition;
                'targetChannelId': string;
                'timing': InvideoTiming;
            }

            interface InvideoPosition {
                'cornerPosition': string;
                'type': string;
            }

            interface InvideoPromotion {
                'defaultTiming': InvideoTiming;
                'items': PromotedItem[];
                'position': InvideoPosition;
                'useSmartTiming': boolean;
            }

            interface InvideoTiming {
                'durationMs': string;
                'offsetMs': string;
                'type': string;
            }

            interface LanguageTag {
                'value': string;
            }

            interface LiveBroadcast {
                'contentDetails': LiveBroadcastContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveBroadcastSnippet;
                'statistics': LiveBroadcastStatistics;
                'status': LiveBroadcastStatus;
                'topicDetails': LiveBroadcastTopicDetails;
            }

            interface LiveBroadcastContentDetails {
                'boundStreamId': string;
                'closedCaptionsType': string;
                'enableClosedCaptions': boolean;
                'enableContentEncryption': boolean;
                'enableDvr': boolean;
                'enableEmbed': boolean;
                'enableLowLatency': boolean;
                'monitorStream': MonitorStreamInfo;
                'recordFromStart': boolean;
                'startWithSlate': boolean;
            }

            interface LiveBroadcastListResponse {
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

            interface LiveBroadcastSnippet {
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

            interface LiveBroadcastStatistics {
                'concurrentViewers': string;
                'totalChatCount': string;
            }

            interface LiveBroadcastStatus {
                'lifeCycleStatus': string;
                'liveBroadcastPriority': string;
                'privacyStatus': string;
                'recordingStatus': string;
            }

            interface LiveBroadcastTopic {
                'snippet': LiveBroadcastTopicSnippet;
                'type': string;
                'unmatched': boolean;
            }

            interface LiveBroadcastTopicDetails {
                'topics': LiveBroadcastTopic[];
            }

            interface LiveBroadcastTopicSnippet {
                'name': string;
                'releaseDate': string;
            }

            interface LiveChatBan {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveChatBanSnippet;
            }

            interface LiveChatBanSnippet {
                'banDurationSeconds': string;
                'bannedUserDetails': ChannelProfileDetails;
                'liveChatId': string;
                'type': string;
            }

            interface LiveChatFanFundingEventDetails {
                'amountDisplayString': string;
                'amountMicros': string;
                'currency': string;
                'userComment': string;
            }

            interface LiveChatMessage {
                'authorDetails': LiveChatMessageAuthorDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveChatMessageSnippet;
            }

            interface LiveChatMessageAuthorDetails {
                'channelId': string;
                'channelUrl': string;
                'displayName': string;
                'isChatModerator': boolean;
                'isChatOwner': boolean;
                'isChatSponsor': boolean;
                'isVerified': boolean;
                'profileImageUrl': string;
            }

            interface LiveChatMessageListResponse {
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

            interface LiveChatMessageSnippet {
                'authorChannelId': string;
                'displayMessage': string;
                'fanFundingEventDetails': LiveChatFanFundingEventDetails;
                'hasDisplayContent': boolean;
                'liveChatId': string;
                'publishedAt': string;
                'textMessageDetails': LiveChatTextMessageDetails;
                'type': string;
            }

            interface LiveChatModerator {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveChatModeratorSnippet;
            }

            interface LiveChatModeratorListResponse {
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

            interface LiveChatModeratorSnippet {
                'liveChatId': string;
                'moderatorDetails': ChannelProfileDetails;
            }

            interface LiveChatTextMessageDetails {
                'messageText': string;
            }

            interface LiveStream {
                'cdn': CdnSettings;
                'contentDetails': LiveStreamContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': LiveStreamSnippet;
                'status': LiveStreamStatus;
            }

            interface LiveStreamConfigurationIssue {
                'description': string;
                'reason': string;
                'severity': string;
                'type': string;
            }

            interface LiveStreamContentDetails {
                'closedCaptionsIngestionUrl': string;
                'isReusable': boolean;
            }

            interface LiveStreamHealthStatus {
                'configurationIssues': LiveStreamConfigurationIssue[];
                'lastUpdateTimeSeconds': string;
                'status': string;
            }

            interface LiveStreamListResponse {
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

            interface LiveStreamSnippet {
                'channelId': string;
                'description': string;
                'isDefaultStream': boolean;
                'publishedAt': string;
                'title': string;
            }

            interface LiveStreamStatus {
                'healthStatus': LiveStreamHealthStatus;
                'streamStatus': string;
            }

            interface LocalizedProperty {
                'default': string;
                'defaultLanguage': LanguageTag;
                'localized': LocalizedString[];
            }

            interface LocalizedString {
                'language': string;
                'value': string;
            }

            interface MonitorStreamInfo {
                'broadcastStreamDelayMs': number;
                'embedHtml': string;
                'enableMonitorStream': boolean;
            }

            interface PageInfo {
                'resultsPerPage': number;
                'totalResults': number;
            }

            interface Playlist {
                'contentDetails': PlaylistContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'localizations': {
                    [name: string]: PlaylistLocalization
                };
                'player': PlaylistPlayer;
                'snippet': PlaylistSnippet;
                'status': PlaylistStatus;
            }

            interface PlaylistContentDetails {
                'itemCount': number;
            }

            interface PlaylistItem {
                'contentDetails': PlaylistItemContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': PlaylistItemSnippet;
                'status': PlaylistItemStatus;
            }

            interface PlaylistItemContentDetails {
                'endAt': string;
                'note': string;
                'startAt': string;
                'videoId': string;
            }

            interface PlaylistItemListResponse {
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

            interface PlaylistItemSnippet {
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

            interface PlaylistItemStatus {
                'privacyStatus': string;
            }

            interface PlaylistListResponse {
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

            interface PlaylistLocalization {
                'description': string;
                'title': string;
            }

            interface PlaylistPlayer {
                'embedHtml': string;
            }

            interface PlaylistSnippet {
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

            interface PlaylistStatus {
                'privacyStatus': string;
            }

            interface PromotedItem {
                'customMessage': string;
                'id': PromotedItemId;
                'promotedByContentOwner': boolean;
                'timing': InvideoTiming;
            }

            interface PromotedItemId {
                'recentlyUploadedBy': string;
                'type': string;
                'videoId': string;
                'websiteUrl': string;
            }

            interface PropertyValue {
                'property': string;
                'value': string;
            }

            interface ResourceId {
                'channelId': string;
                'kind': string;
                'playlistId': string;
                'videoId': string;
            }

            interface SearchListResponse {
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

            interface SearchResult {
                'etag': string;
                'id': ResourceId;
                'kind': string;
                'snippet': SearchResultSnippet;
            }

            interface SearchResultSnippet {
                'channelId': string;
                'channelTitle': string;
                'description': string;
                'liveBroadcastContent': string;
                'publishedAt': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            interface Sponsor {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': SponsorSnippet;
            }

            interface SponsorListResponse {
                'etag': string;
                'eventId': string;
                'items': Sponsor[];
                'kind': string;
                'nextPageToken': string;
                'pageInfo': PageInfo;
                'tokenPagination': TokenPagination;
                'visitorId': string;
            }

            interface SponsorSnippet {
                'channelId': string;
                'sponsorDetails': ChannelProfileDetails;
                'sponsorSince': string;
            }

            interface Subscription {
                'contentDetails': SubscriptionContentDetails;
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': SubscriptionSnippet;
                'subscriberSnippet': SubscriptionSubscriberSnippet;
            }

            interface SubscriptionContentDetails {
                'activityType': string;
                'newItemCount': number;
                'totalItemCount': number;
            }

            interface SubscriptionListResponse {
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

            interface SubscriptionSnippet {
                'channelId': string;
                'channelTitle': string;
                'description': string;
                'publishedAt': string;
                'resourceId': ResourceId;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            interface SubscriptionSubscriberSnippet {
                'channelId': string;
                'description': string;
                'thumbnails': ThumbnailDetails;
                'title': string;
            }

            interface Thumbnail {
                'height': number;
                'url': string;
                'width': number;
            }

            interface ThumbnailDetails {
                'default': Thumbnail;
                'high': Thumbnail;
                'maxres': Thumbnail;
                'medium': Thumbnail;
                'standard': Thumbnail;
            }

            interface ThumbnailSetResponse {
                'etag': string;
                'eventId': string;
                'items': ThumbnailDetails[];
                'kind': string;
                'visitorId': string;
            }

            interface TokenPagination {}

            interface Video {
                'ageGating': VideoAgeGating;
                'contentDetails': VideoContentDetails;
                'etag': string;
                'fileDetails': VideoFileDetails;
                'id': string;
                'kind': string;
                'liveStreamingDetails': VideoLiveStreamingDetails;
                'localizations': {
                    [name: string]: VideoLocalization
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

            interface VideoAbuseReport {
                'comments': string;
                'language': string;
                'reasonId': string;
                'secondaryReasonId': string;
                'videoId': string;
            }

            interface VideoAbuseReportReason {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': VideoAbuseReportReasonSnippet;
            }

            interface VideoAbuseReportReasonListResponse {
                'etag': string;
                'eventId': string;
                'items': VideoAbuseReportReason[];
                'kind': string;
                'visitorId': string;
            }

            interface VideoAbuseReportReasonSnippet {
                'label': string;
                'secondaryReasons': VideoAbuseReportSecondaryReason[];
            }

            interface VideoAbuseReportSecondaryReason {
                'id': string;
                'label': string;
            }

            interface VideoAgeGating {
                'alcoholContent': boolean;
                'restricted': boolean;
                'videoGameRating': string;
            }

            interface VideoCategory {
                'etag': string;
                'id': string;
                'kind': string;
                'snippet': VideoCategorySnippet;
            }

            interface VideoCategoryListResponse {
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

            interface VideoCategorySnippet {
                'assignable': boolean;
                'channelId': string;
                'title': string;
            }

            interface VideoContentDetails {
                'caption': string;
                'contentRating': ContentRating;
                'countryRestriction': AccessPolicy;
                'definition': string;
                'dimension': string;
                'duration': string;
                'licensedContent': boolean;
                'regionRestriction': VideoContentDetailsRegionRestriction;
            }

            interface VideoContentDetailsRegionRestriction {
                'allowed': string[];
                'blocked': string[];
            }

            interface VideoFileDetails {
                'audioStreams': VideoFileDetailsAudioStream[];
                'bitrateBps': string;
                'container': string;
                'creationTime': string;
                'durationMs': string;
                'fileName': string;
                'fileSize': string;
                'fileType': string;
                'recordingLocation': GeoPoint;
                'videoStreams': VideoFileDetailsVideoStream[];
            }

            interface VideoFileDetailsAudioStream {
                'bitrateBps': string;
                'channelCount': number;
                'codec': string;
                'vendor': string;
            }

            interface VideoFileDetailsVideoStream {
                'aspectRatio': number;
                'bitrateBps': string;
                'codec': string;
                'frameRateFps': number;
                'heightPixels': number;
                'rotation': string;
                'vendor': string;
                'widthPixels': number;
            }

            interface VideoGetRatingResponse {
                'etag': string;
                'eventId': string;
                'items': VideoRating[];
                'kind': string;
                'visitorId': string;
            }

            interface VideoListResponse {
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

            interface VideoLiveStreamingDetails {
                'activeLiveChatId': string;
                'actualEndTime': string;
                'actualStartTime': string;
                'concurrentViewers': string;
                'scheduledEndTime': string;
                'scheduledStartTime': string;
            }

            interface VideoLocalization {
                'description': string;
                'title': string;
            }

            interface VideoMonetizationDetails {
                'access': AccessPolicy;
            }

            interface VideoPlayer {
                'embedHtml': string;
            }

            interface VideoProcessingDetails {
                'editorSuggestionsAvailability': string;
                'fileDetailsAvailability': string;
                'processingFailureReason': string;
                'processingIssuesAvailability': string;
                'processingProgress': VideoProcessingDetailsProcessingProgress;
                'processingStatus': string;
                'tagSuggestionsAvailability': string;
                'thumbnailsAvailability': string;
            }

            interface VideoProcessingDetailsProcessingProgress {
                'partsProcessed': string;
                'partsTotal': string;
                'timeLeftMs': string;
            }

            interface VideoProjectDetails {
                'tags': string[];
            }

            interface VideoRating {
                'rating': string;
                'videoId': string;
            }

            interface VideoRecordingDetails {
                'location': GeoPoint;
                'locationDescription': string;
                'recordingDate': string;
            }

            interface VideoSnippet {
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

            interface VideoStatistics {
                'commentCount': string;
                'dislikeCount': string;
                'favoriteCount': string;
                'likeCount': string;
                'viewCount': string;
            }

            interface VideoStatus {
                'embeddable': boolean;
                'failureReason': string;
                'license': string;
                'privacyStatus': string;
                'publicStatsViewable': boolean;
                'publishAt': string;
                'rejectionReason': string;
                'uploadStatus': string;
            }

            interface VideoSuggestions {
                'editorSuggestions': string[];
                'processingErrors': string[];
                'processingHints': string[];
                'processingWarnings': string[];
                'tagSuggestions': VideoSuggestionsTagSuggestion[];
            }

            interface VideoSuggestionsTagSuggestion {
                'categoryRestricts': string[];
                'tag': string;
            }

            interface VideoTopicDetails {
                'relevantTopicIds': string[];
                'topicIds': string[];
            }

            interface WatchSettings {
                'backgroundColor': string;
                'featuredPlaylistId': string;
                'textColor': string;
            }

        }
    }
}