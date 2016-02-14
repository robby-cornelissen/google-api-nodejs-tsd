import {Request, RequestCallback} from 'request';

export interface Youtube {
    new(options: any): Youtube;

    activities: {
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    captions: {
        delete: (params: any, callback: RequestCallback) => Request;
        download: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    channelBanners: {
        insert: (params: any, callback: RequestCallback) => Request;
    };
    channelSections: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    channels: {
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    commentThreads: {
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    comments: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        markAsSpam: (params: any, callback: RequestCallback) => Request;
        setModerationStatus: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    fanFundingEvents: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    guideCategories: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    i18nLanguages: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    i18nRegions: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    liveBroadcasts: {
        bind: (params: any, callback: RequestCallback) => Request;
        control: (params: any, callback: RequestCallback) => Request;
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        transition: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    liveChatBans: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
    };
    liveChatMessages: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    liveChatModerators: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    liveStreams: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    playlistItems: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    playlists: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    search: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    sponsors: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    subscriptions: {
        delete: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    thumbnails: {
        set: (params: any, callback: RequestCallback) => Request;
    };
    videoAbuseReportReasons: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    videoCategories: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    videos: {
        delete: (params: any, callback: RequestCallback) => Request;
        getRating: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        rate: (params: any, callback: RequestCallback) => Request;
        reportAbuse: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    watermarks: {
        set: (params: any, callback: RequestCallback) => Request;
        unset: (params: any, callback: RequestCallback) => Request;
    };
}