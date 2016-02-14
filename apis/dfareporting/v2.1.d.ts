import {Request, RequestCallback} from 'request';

export interface Dfareporting {
    new(options: any): Dfareporting;

    accountActiveAdSummaries: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    accountPermissionGroups: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    accountPermissions: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    accountUserProfiles: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    accounts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    ads: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    advertiserGroups: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    advertisers: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    browsers: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    campaignCreativeAssociations: {
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    campaigns: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    changeLogs: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    cities: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    connectionTypes: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    contentCategories: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    countries: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    creativeAssets: {
        insert: (params: any, callback: RequestCallback) => Request;
    };
    creativeFieldValues: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    creativeFields: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    creativeGroups: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    creatives: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    dimensionValues: {
        query: (params: any, callback: RequestCallback) => Request;
    };
    directorySiteContacts: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    directorySites: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    eventTags: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    files: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    floodlightActivities: {
        delete: (params: any, callback: RequestCallback) => Request;
        generatetag: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    floodlightActivityGroups: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    floodlightConfigurations: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    inventoryItems: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    landingPages: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    metros: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    mobileCarriers: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    operatingSystemVersions: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    operatingSystems: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    orderDocuments: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    orders: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    placementGroups: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    placementStrategies: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    placements: {
        generatetags: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    platformTypes: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    postalCodes: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    projects: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    regions: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    remarketingListShares: {
        get: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    remarketingLists: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    reports: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        run: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
        compatibleFields: {
            query: (params: any, callback: RequestCallback) => Request;
        };
        files: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    sites: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    sizes: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    subaccounts: {
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    targetableRemarketingLists: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    userProfiles: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    userRolePermissionGroups: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    userRolePermissions: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    userRoles: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}