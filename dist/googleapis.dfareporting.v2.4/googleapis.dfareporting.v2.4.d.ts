/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dfareporting(version: string): any;
        dfareporting(version: 'v2.4'): dfareporting.v2_4.Dfareporting;
    }

    namespace dfareporting {
        namespace v2_4 {
            export interface Dfareporting {
                new(options: any): Dfareporting;

                'accountActiveAdSummaries': {
                    'get': (parameters: {'profileId': string, 'summaryAccountId': string}, callback: (error: any, body: AccountActiveAdSummary, response: any) => void) => Request;
                };
                'accountPermissionGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountPermissionGroup, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: AccountPermissionGroupsListResponse, response: any) => void) => Request;
                };
                'accountPermissions': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountPermission, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: AccountPermissionsListResponse, response: any) => void) => Request;
                };
                'accountUserProfiles': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountUserProfile, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: AccountUserProfile, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string, 'userRoleId'?: string}, callback: (error: any, body: AccountUserProfilesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountUserProfile, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: AccountUserProfile, response: any) => void) => Request;
                };
                'accounts': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: AccountsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'ads': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'advertiserId'?: string, 'archived'?: boolean, 'audienceSegmentIds'?: string, 'campaignIds'?: string, 'compatibility'?: string, 'creativeIds'?: string, 'creativeOptimizationConfigurationIds'?: string, 'creativeType'?: string, 'dynamicClickTracker'?: boolean, 'ids'?: string, 'landingPageIds'?: string, 'maxResults'?: number, 'overriddenEventTagId'?: string, 'pageToken'?: string, 'placementIds'?: string, 'profileId': string, 'remarketingListIds'?: string, 'searchString'?: string, 'sizeIds'?: string, 'sortField'?: string, 'sortOrder'?: string, 'sslCompliant'?: boolean, 'sslRequired'?: boolean, 'type'?: string}, callback: (error: any, body: AdsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                };
                'advertiserGroups': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: AdvertiserGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                };
                'advertisers': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                    'list': (parameters: {'advertiserGroupIds'?: string, 'floodlightConfigurationIds'?: string, 'ids'?: string, 'includeAdvertisersWithoutGroupsOnly'?: boolean, 'maxResults'?: number, 'onlyParent'?: boolean, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'status'?: string, 'subaccountId'?: string}, callback: (error: any, body: AdvertisersListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                };
                'browsers': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: BrowsersListResponse, response: any) => void) => Request;
                };
                'campaignCreativeAssociations': {
                    'insert': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: CampaignCreativeAssociation, response: any) => void) => Request;
                    'list': (parameters: {'campaignId': string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'sortOrder'?: string}, callback: (error: any, body: CampaignCreativeAssociationsListResponse, response: any) => void) => Request;
                };
                'campaigns': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                    'insert': (parameters: {'defaultLandingPageName': string, 'defaultLandingPageUrl': string, 'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                    'list': (parameters: {'advertiserGroupIds'?: string, 'advertiserIds'?: string, 'archived'?: boolean, 'atLeastOneOptimizationActivity'?: boolean, 'excludedIds'?: string, 'ids'?: string, 'maxResults'?: number, 'overriddenEventTagId'?: string, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string}, callback: (error: any, body: CampaignsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                };
                'changeLogs': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: ChangeLog, response: any) => void) => Request;
                    'list': (parameters: {'action'?: string, 'ids'?: string, 'maxChangeTime'?: string, 'maxResults'?: number, 'minChangeTime'?: string, 'objectIds'?: string, 'objectType'?: string, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'userProfileIds'?: string}, callback: (error: any, body: ChangeLogsListResponse, response: any) => void) => Request;
                };
                'cities': {
                    'list': (parameters: {'countryDartIds'?: string, 'dartIds'?: string, 'namePrefix'?: string, 'profileId': string, 'regionDartIds'?: string}, callback: (error: any, body: CitiesListResponse, response: any) => void) => Request;
                };
                'connectionTypes': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: ConnectionType, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: ConnectionTypesListResponse, response: any) => void) => Request;
                };
                'contentCategories': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: ContentCategoriesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                };
                'countries': {
                    'get': (parameters: {'dartId': string, 'profileId': string}, callback: (error: any, body: Country, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: CountriesListResponse, response: any) => void) => Request;
                };
                'creativeAssets': {
                    'insert': (parameters: {'advertiserId': string, 'profileId': string}, callback: (error: any, body: CreativeAssetMetadata, response: any) => void) => Request;
                };
                'creativeFieldValues': {
                    'delete': (parameters: {'creativeFieldId': string, 'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'creativeFieldId': string, 'id': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                    'insert': (parameters: {'creativeFieldId': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                    'list': (parameters: {'creativeFieldId': string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: CreativeFieldValuesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'creativeFieldId': string, 'id': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                    'update': (parameters: {'creativeFieldId': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                };
                'creativeFields': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: CreativeFieldsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                };
                'creativeGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'groupNumber'?: number, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: CreativeGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                };
                'creatives': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'advertiserId'?: string, 'archived'?: boolean, 'campaignId'?: string, 'companionCreativeIds'?: string, 'creativeFieldIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'renderingIds'?: string, 'searchString'?: string, 'sizeIds'?: string, 'sortField'?: string, 'sortOrder'?: string, 'studioCreativeId'?: string, 'types'?: string}, callback: (error: any, body: CreativesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                };
                'dimensionValues': {
                    'query': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string}, callback: (error: any, body: DimensionValueList, response: any) => void) => Request;
                };
                'directorySiteContacts': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: DirectorySiteContact, response: any) => void) => Request;
                    'list': (parameters: {'directorySiteIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: DirectorySiteContactsListResponse, response: any) => void) => Request;
                };
                'directorySites': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: DirectorySite, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: DirectorySite, response: any) => void) => Request;
                    'list': (parameters: {'acceptsInStreamVideoPlacements'?: boolean, 'acceptsInterstitialPlacements'?: boolean, 'acceptsPublisherPaidPlacements'?: boolean, 'active'?: boolean, 'countryId'?: string, 'dfp_network_code'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'parentId'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: DirectorySitesListResponse, response: any) => void) => Request;
                };
                'eventTags': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                    'list': (parameters: {'adId'?: string, 'advertiserId'?: string, 'campaignId'?: string, 'definitionsOnly'?: boolean, 'enabled'?: boolean, 'eventTagTypes'?: string, 'ids'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: EventTagsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                };
                'files': {
                    'get': (parameters: {'fileId': string, 'reportId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'scope'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                };
                'floodlightActivities': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'generatetag': (parameters: {'floodlightActivityId'?: string, 'profileId': string}, callback: (error: any, body: FloodlightActivitiesGenerateTagResponse, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                    'list': (parameters: {'advertiserId'?: string, 'floodlightActivityGroupIds'?: string, 'floodlightActivityGroupName'?: string, 'floodlightActivityGroupTagString'?: string, 'floodlightActivityGroupType'?: string, 'floodlightConfigurationId'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'tagString'?: string}, callback: (error: any, body: FloodlightActivitiesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                };
                'floodlightActivityGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                    'list': (parameters: {'advertiserId'?: string, 'floodlightConfigurationId'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'type'?: string}, callback: (error: any, body: FloodlightActivityGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                };
                'floodlightConfigurations': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightConfiguration, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'profileId': string}, callback: (error: any, body: FloodlightConfigurationsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightConfiguration, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightConfiguration, response: any) => void) => Request;
                };
                'inventoryItems': {
                    'get': (parameters: {'id': string, 'profileId': string, 'projectId': string}, callback: (error: any, body: InventoryItem, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'inPlan'?: boolean, 'maxResults'?: number, 'orderId'?: string, 'pageToken'?: string, 'profileId': string, 'projectId': string, 'siteId'?: string, 'sortField'?: string, 'sortOrder'?: string, 'type'?: string}, callback: (error: any, body: InventoryItemsListResponse, response: any) => void) => Request;
                };
                'landingPages': {
                    'delete': (parameters: {'campaignId': string, 'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'campaignId': string, 'id': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                    'insert': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                    'list': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: LandingPagesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'campaignId': string, 'id': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                    'update': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                };
                'metros': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: MetrosListResponse, response: any) => void) => Request;
                };
                'mobileCarriers': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: MobileCarrier, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: MobileCarriersListResponse, response: any) => void) => Request;
                };
                'operatingSystemVersions': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: OperatingSystemVersion, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: OperatingSystemVersionsListResponse, response: any) => void) => Request;
                };
                'operatingSystems': {
                    'get': (parameters: {'dartId': string, 'profileId': string}, callback: (error: any, body: OperatingSystem, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: OperatingSystemsListResponse, response: any) => void) => Request;
                };
                'orderDocuments': {
                    'get': (parameters: {'id': string, 'profileId': string, 'projectId': string}, callback: (error: any, body: OrderDocument, response: any) => void) => Request;
                    'list': (parameters: {'approved'?: boolean, 'ids'?: string, 'maxResults'?: number, 'orderId'?: string, 'pageToken'?: string, 'profileId': string, 'projectId': string, 'searchString'?: string, 'siteId'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: OrderDocumentsListResponse, response: any) => void) => Request;
                };
                'orders': {
                    'get': (parameters: {'id': string, 'profileId': string, 'projectId': string}, callback: (error: any, body: Order, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'projectId': string, 'searchString'?: string, 'siteId'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: OrdersListResponse, response: any) => void) => Request;
                };
                'placementGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'archived'?: boolean, 'campaignIds'?: string, 'contentCategoryIds'?: string, 'directorySiteIds'?: string, 'ids'?: string, 'maxEndDate'?: string, 'maxResults'?: number, 'maxStartDate'?: string, 'minEndDate'?: string, 'minStartDate'?: string, 'pageToken'?: string, 'placementGroupType'?: string, 'placementStrategyIds'?: string, 'pricingTypes'?: string, 'profileId': string, 'searchString'?: string, 'siteIds'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: PlacementGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                };
                'placementStrategies': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: PlacementStrategiesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                };
                'placements': {
                    'generatetags': (parameters: {'campaignId'?: string, 'placementIds'?: string, 'profileId': string, 'tagFormats'?: string}, callback: (error: any, body: PlacementsGenerateTagsResponse, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'archived'?: boolean, 'campaignIds'?: string, 'compatibilities'?: string, 'contentCategoryIds'?: string, 'directorySiteIds'?: string, 'groupIds'?: string, 'ids'?: string, 'maxEndDate'?: string, 'maxResults'?: number, 'maxStartDate'?: string, 'minEndDate'?: string, 'minStartDate'?: string, 'pageToken'?: string, 'paymentSource'?: string, 'placementStrategyIds'?: string, 'pricingTypes'?: string, 'profileId': string, 'searchString'?: string, 'siteIds'?: string, 'sizeIds'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: PlacementsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                };
                'platformTypes': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlatformType, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: PlatformTypesListResponse, response: any) => void) => Request;
                };
                'postalCodes': {
                    'get': (parameters: {'code': string, 'profileId': string}, callback: (error: any, body: PostalCode, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: PostalCodesListResponse, response: any) => void) => Request;
                };
                'projects': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: ProjectsListResponse, response: any) => void) => Request;
                };
                'regions': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: RegionsListResponse, response: any) => void) => Request;
                };
                'remarketingListShares': {
                    'get': (parameters: {'profileId': string, 'remarketingListId': string}, callback: (error: any, body: RemarketingListShare, response: any) => void) => Request;
                    'patch': (parameters: {'profileId': string, 'remarketingListId': string}, callback: (error: any, body: RemarketingListShare, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: RemarketingListShare, response: any) => void) => Request;
                };
                'remarketingLists': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: RemarketingList, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: RemarketingList, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'advertiserId': string, 'floodlightActivityId'?: string, 'maxResults'?: number, 'name'?: string, 'pageToken'?: string, 'profileId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: RemarketingListsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: RemarketingList, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: RemarketingList, response: any) => void) => Request;
                };
                'reports': {
                    'delete': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'scope'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: ReportList, response: any) => void) => Request;
                    'patch': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'run': (parameters: {'profileId': string, 'reportId': string, 'synchronous'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                
                    'compatibleFields': {
                        'query': (parameters: {'profileId': string}, callback: (error: any, body: CompatibleFields, response: any) => void) => Request;
                    };
                    'files': {
                        'get': (parameters: {'fileId': string, 'profileId': string, 'reportId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                        'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'reportId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                    };
                };
                'sites': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                    'list': (parameters: {'acceptsInStreamVideoPlacements'?: boolean, 'acceptsInterstitialPlacements'?: boolean, 'acceptsPublisherPaidPlacements'?: boolean, 'adWordsSite'?: boolean, 'approved'?: boolean, 'campaignIds'?: string, 'directorySiteIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string, 'unmappedSite'?: boolean}, callback: (error: any, body: SitesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                };
                'sizes': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Size, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Size, response: any) => void) => Request;
                    'list': (parameters: {'height'?: number, 'iabStandard'?: boolean, 'ids'?: string, 'profileId': string, 'width'?: number}, callback: (error: any, body: SizesListResponse, response: any) => void) => Request;
                };
                'subaccounts': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: SubaccountsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                };
                'targetableRemarketingLists': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: TargetableRemarketingList, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'advertiserId': string, 'maxResults'?: number, 'name'?: string, 'pageToken'?: string, 'profileId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: TargetableRemarketingListsListResponse, response: any) => void) => Request;
                };
                'userProfiles': {
                    'get': (parameters: {'profileId': string}, callback: (error: any, body: UserProfile, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: UserProfileList, response: any) => void) => Request;
                };
                'userRolePermissionGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRolePermissionGroup, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: UserRolePermissionGroupsListResponse, response: any) => void) => Request;
                };
                'userRolePermissions': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRolePermission, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'profileId': string}, callback: (error: any, body: UserRolePermissionsListResponse, response: any) => void) => Request;
                };
                'userRoles': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                    'list': (parameters: {'accountUserRoleOnly'?: boolean, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string}, callback: (error: any, body: UserRolesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                };

            }

            interface Account {
                'accountPermissionIds': string[];
                'accountProfile': string;
                'active': boolean;
                'activeAdsLimitTier': string;
                'activeViewOptOut': boolean;
                'availablePermissionIds': string[];
                'comscoreVceEnabled': boolean;
                'countryId': string;
                'currencyId': string;
                'defaultCreativeSizeId': string;
                'description': string;
                'id': string;
                'kind': string;
                'locale': string;
                'maximumImageSize': string;
                'name': string;
                'nielsenOcrEnabled': boolean;
                'reportsConfiguration': ReportsConfiguration;
                'teaserSizeLimit': string;
            }

            interface AccountActiveAdSummary {
                'accountId': string;
                'activeAds': string;
                'activeAdsLimitTier': string;
                'availableAds': string;
                'kind': string;
            }

            interface AccountPermission {
                'accountProfiles': string[];
                'id': string;
                'kind': string;
                'level': string;
                'name': string;
                'permissionGroupId': string;
            }

            interface AccountPermissionGroup {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface AccountPermissionGroupsListResponse {
                'accountPermissionGroups': AccountPermissionGroup[];
                'kind': string;
            }

            interface AccountPermissionsListResponse {
                'accountPermissions': AccountPermission[];
                'kind': string;
            }

            interface AccountUserProfile {
                'accountId': string;
                'active': boolean;
                'advertiserFilter': ObjectFilter;
                'campaignFilter': ObjectFilter;
                'comments': string;
                'email': string;
                'id': string;
                'kind': string;
                'locale': string;
                'name': string;
                'siteFilter': ObjectFilter;
                'subaccountId': string;
                'traffickerType': string;
                'userAccessType': string;
                'userRoleFilter': ObjectFilter;
                'userRoleId': string;
            }

            interface AccountUserProfilesListResponse {
                'accountUserProfiles': AccountUserProfile[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AccountsListResponse {
                'accounts': Account[];
                'kind': string;
                'nextPageToken': string;
            }

            interface Activities {
                'filters': DimensionValue[];
                'kind': string;
                'metricNames': string[];
            }

            interface Ad {
                'accountId': string;
                'active': boolean;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'audienceSegmentId': string;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'clickThroughUrl': ClickThroughUrl;
                'clickThroughUrlSuffixProperties': ClickThroughUrlSuffixProperties;
                'comments': string;
                'compatibility': string;
                'createInfo': LastModifiedInfo;
                'creativeGroupAssignments': CreativeGroupAssignment[];
                'creativeRotation': CreativeRotation;
                'dayPartTargeting': DayPartTargeting;
                'defaultClickThroughEventTagProperties': DefaultClickThroughEventTagProperties;
                'deliverySchedule': DeliverySchedule;
                'dynamicClickTracker': boolean;
                'endTime': string;
                'eventTagOverrides': EventTagOverride[];
                'geoTargeting': GeoTargeting;
                'id': string;
                'idDimensionValue': DimensionValue;
                'keyValueTargetingExpression': KeyValueTargetingExpression;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'name': string;
                'placementAssignments': PlacementAssignment[];
                'remarketingListExpression': ListTargetingExpression;
                'size': Size;
                'sslCompliant': boolean;
                'sslRequired': boolean;
                'startTime': string;
                'subaccountId': string;
                'technologyTargeting': TechnologyTargeting;
                'type': string;
            }

            interface AdSlot {
                'comment': string;
                'compatibility': string;
                'height': string;
                'linkedPlacementId': string;
                'name': string;
                'paymentSourceType': string;
                'primary': boolean;
                'width': string;
            }

            interface AdsListResponse {
                'ads': Ad[];
                'kind': string;
                'nextPageToken': string;
            }

            interface Advertiser {
                'accountId': string;
                'advertiserGroupId': string;
                'clickThroughUrlSuffix': string;
                'defaultClickThroughEventTagId': string;
                'defaultEmail': string;
                'floodlightConfigurationId': string;
                'floodlightConfigurationIdDimensionValue': DimensionValue;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'name': string;
                'originalFloodlightConfigurationId': string;
                'status': string;
                'subaccountId': string;
                'suspended': boolean;
            }

            interface AdvertiserGroup {
                'accountId': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            interface AdvertiserGroupsListResponse {
                'advertiserGroups': AdvertiserGroup[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AdvertisersListResponse {
                'advertisers': Advertiser[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AudienceSegment {
                'allocation': number;
                'id': string;
                'name': string;
            }

            interface AudienceSegmentGroup {
                'audienceSegments': AudienceSegment[];
                'id': string;
                'name': string;
            }

            interface Browser {
                'browserVersionId': string;
                'dartId': string;
                'kind': string;
                'majorVersion': string;
                'minorVersion': string;
                'name': string;
            }

            interface BrowsersListResponse {
                'browsers': Browser[];
                'kind': string;
            }

            interface Campaign {
                'accountId': string;
                'additionalCreativeOptimizationConfigurations': CreativeOptimizationConfiguration[];
                'advertiserGroupId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'audienceSegmentGroups': AudienceSegmentGroup[];
                'billingInvoiceCode': string;
                'clickThroughUrlSuffixProperties': ClickThroughUrlSuffixProperties;
                'comment': string;
                'comscoreVceEnabled': boolean;
                'createInfo': LastModifiedInfo;
                'creativeGroupIds': string[];
                'creativeOptimizationConfiguration': CreativeOptimizationConfiguration;
                'defaultClickThroughEventTagProperties': DefaultClickThroughEventTagProperties;
                'endDate': string;
                'eventTagOverrides': EventTagOverride[];
                'externalId': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'lookbackConfiguration': LookbackConfiguration;
                'name': string;
                'nielsenOcrEnabled': boolean;
                'startDate': string;
                'subaccountId': string;
                'traffickerEmails': string[];
            }

            interface CampaignCreativeAssociation {
                'creativeId': string;
                'kind': string;
            }

            interface CampaignCreativeAssociationsListResponse {
                'campaignCreativeAssociations': CampaignCreativeAssociation[];
                'kind': string;
                'nextPageToken': string;
            }

            interface CampaignsListResponse {
                'campaigns': Campaign[];
                'kind': string;
                'nextPageToken': string;
            }

            interface ChangeLog {
                'accountId': string;
                'action': string;
                'changeTime': string;
                'fieldName': string;
                'id': string;
                'kind': string;
                'newValue': string;
                'objectId': string;
                'objectType': string;
                'oldValue': string;
                'subaccountId': string;
                'transactionId': string;
                'userProfileId': string;
                'userProfileName': string;
            }

            interface ChangeLogsListResponse {
                'changeLogs': ChangeLog[];
                'kind': string;
                'nextPageToken': string;
            }

            interface CitiesListResponse {
                'cities': City[];
                'kind': string;
            }

            interface City {
                'countryCode': string;
                'countryDartId': string;
                'dartId': string;
                'kind': string;
                'metroCode': string;
                'metroDmaId': string;
                'name': string;
                'regionCode': string;
                'regionDartId': string;
            }

            interface ClickTag {
                'eventName': string;
                'name': string;
                'value': string;
            }

            interface ClickThroughUrl {
                'computedClickThroughUrl': string;
                'customClickThroughUrl': string;
                'defaultLandingPage': boolean;
                'landingPageId': string;
            }

            interface ClickThroughUrlSuffixProperties {
                'clickThroughUrlSuffix': string;
                'overrideInheritedSuffix': boolean;
            }

            interface CompanionClickThroughOverride {
                'clickThroughUrl': ClickThroughUrl;
                'creativeId': string;
            }

            interface CompatibleFields {
                'crossDimensionReachReportCompatibleFields': CrossDimensionReachReportCompatibleFields;
                'floodlightReportCompatibleFields': FloodlightReportCompatibleFields;
                'kind': string;
                'pathToConversionReportCompatibleFields': PathToConversionReportCompatibleFields;
                'reachReportCompatibleFields': ReachReportCompatibleFields;
                'reportCompatibleFields': ReportCompatibleFields;
            }

            interface ConnectionType {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface ConnectionTypesListResponse {
                'connectionTypes': ConnectionType[];
                'kind': string;
            }

            interface ContentCategoriesListResponse {
                'contentCategories': ContentCategory[];
                'kind': string;
                'nextPageToken': string;
            }

            interface ContentCategory {
                'accountId': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            interface CountriesListResponse {
                'countries': Country[];
                'kind': string;
            }

            interface Country {
                'countryCode': string;
                'dartId': string;
                'kind': string;
                'name': string;
                'sslEnabled': boolean;
            }

            interface Creative {
                'accountId': string;
                'active': boolean;
                'adParameters': string;
                'adTagKeys': string[];
                'advertiserId': string;
                'allowScriptAccess': boolean;
                'archived': boolean;
                'artworkType': string;
                'authoringSource': string;
                'authoringTool': string;
                'auto_advance_images': boolean;
                'backgroundColor': string;
                'backupImageClickThroughUrl': string;
                'backupImageFeatures': string[];
                'backupImageReportingLabel': string;
                'backupImageTargetWindow': TargetWindow;
                'clickTags': ClickTag[];
                'commercialId': string;
                'companionCreatives': string[];
                'compatibility': string[];
                'convertFlashToHtml5': boolean;
                'counterCustomEvents': CreativeCustomEvent[];
                'creativeAssets': CreativeAsset[];
                'creativeFieldAssignments': CreativeFieldAssignment[];
                'customKeyValues': string[];
                'exitCustomEvents': CreativeCustomEvent[];
                'fsCommand': FsCommand;
                'htmlCode': string;
                'htmlCodeLocked': boolean;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'latestTraffickedCreativeId': string;
                'name': string;
                'overrideCss': string;
                'redirectUrl': string;
                'renderingId': string;
                'renderingIdDimensionValue': DimensionValue;
                'requiredFlashPluginVersion': string;
                'requiredFlashVersion': number;
                'size': Size;
                'skippable': boolean;
                'sslCompliant': boolean;
                'sslOverride': boolean;
                'studioAdvertiserId': string;
                'studioCreativeId': string;
                'studioTraffickedCreativeId': string;
                'subaccountId': string;
                'thirdPartyBackupImageImpressionsUrl': string;
                'thirdPartyRichMediaImpressionsUrl': string;
                'thirdPartyUrls': ThirdPartyTrackingUrl[];
                'timerCustomEvents': CreativeCustomEvent[];
                'totalFileSize': string;
                'type': string;
                'version': number;
                'videoDescription': string;
                'videoDuration': number;
            }

            interface CreativeAsset {
                'actionScript3': boolean;
                'active': boolean;
                'alignment': string;
                'artworkType': string;
                'assetIdentifier': CreativeAssetId;
                'backupImageExit': CreativeCustomEvent;
                'bitRate': number;
                'childAssetType': string;
                'collapsedSize': Size;
                'customStartTimeValue': number;
                'detectedFeatures': string[];
                'displayType': string;
                'duration': number;
                'durationType': string;
                'expandedDimension': Size;
                'fileSize': string;
                'flashVersion': number;
                'hideFlashObjects': boolean;
                'hideSelectionBoxes': boolean;
                'horizontallyLocked': boolean;
                'id': string;
                'mimeType': string;
                'offset': OffsetPosition;
                'originalBackup': boolean;
                'position': OffsetPosition;
                'positionLeftUnit': string;
                'positionTopUnit': string;
                'progressiveServingUrl': string;
                'pushdown': boolean;
                'pushdownDuration': number;
                'role': string;
                'size': Size;
                'sslCompliant': boolean;
                'startTimeType': string;
                'streamingServingUrl': string;
                'transparency': boolean;
                'verticallyLocked': boolean;
                'videoDuration': number;
                'windowMode': string;
                'zIndex': number;
                'zipFilename': string;
                'zipFilesize': string;
            }

            interface CreativeAssetId {
                'name': string;
                'type': string;
            }

            interface CreativeAssetMetadata {
                'assetIdentifier': CreativeAssetId;
                'clickTags': ClickTag[];
                'detectedFeatures': string[];
                'kind': string;
                'warnedValidationRules': string[];
            }

            interface CreativeAssignment {
                'active': boolean;
                'applyEventTags': boolean;
                'clickThroughUrl': ClickThroughUrl;
                'companionCreativeOverrides': CompanionClickThroughOverride[];
                'creativeGroupAssignments': CreativeGroupAssignment[];
                'creativeId': string;
                'creativeIdDimensionValue': DimensionValue;
                'endTime': string;
                'richMediaExitOverrides': RichMediaExitOverride[];
                'sequence': number;
                'sslCompliant': boolean;
                'startTime': string;
                'weight': number;
            }

            interface CreativeCustomEvent {
                'advertiserCustomEventId': string;
                'advertiserCustomEventName': string;
                'advertiserCustomEventType': string;
                'artworkLabel': string;
                'artworkType': string;
                'exitUrl': string;
                'id': string;
                'popupWindowProperties': PopupWindowProperties;
                'targetType': string;
                'videoReportingId': string;
            }

            interface CreativeField {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'id': string;
                'kind': string;
                'name': string;
                'subaccountId': string;
            }

            interface CreativeFieldAssignment {
                'creativeFieldId': string;
                'creativeFieldValueId': string;
            }

            interface CreativeFieldValue {
                'id': string;
                'kind': string;
                'value': string;
            }

            interface CreativeFieldValuesListResponse {
                'creativeFieldValues': CreativeFieldValue[];
                'kind': string;
                'nextPageToken': string;
            }

            interface CreativeFieldsListResponse {
                'creativeFields': CreativeField[];
                'kind': string;
                'nextPageToken': string;
            }

            interface CreativeGroup {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'groupNumber': number;
                'id': string;
                'kind': string;
                'name': string;
                'subaccountId': string;
            }

            interface CreativeGroupAssignment {
                'creativeGroupId': string;
                'creativeGroupNumber': string;
            }

            interface CreativeGroupsListResponse {
                'creativeGroups': CreativeGroup[];
                'kind': string;
                'nextPageToken': string;
            }

            interface CreativeOptimizationConfiguration {
                'id': string;
                'name': string;
                'optimizationActivitys': OptimizationActivity[];
                'optimizationModel': string;
            }

            interface CreativeRotation {
                'creativeAssignments': CreativeAssignment[];
                'creativeOptimizationConfigurationId': string;
                'type': string;
                'weightCalculationStrategy': string;
            }

            interface CreativeSettings {
                'iFrameFooter': string;
                'iFrameHeader': string;
            }

            interface CreativesListResponse {
                'creatives': Creative[];
                'kind': string;
                'nextPageToken': string;
            }

            interface CrossDimensionReachReportCompatibleFields {
                'breakdown': Dimension[];
                'dimensionFilters': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'overlapMetrics': Metric[];
            }

            interface CustomRichMediaEvents {
                'filteredEventIds': DimensionValue[];
                'kind': string;
            }

            interface DateRange {
                'endDate': string;
                'kind': string;
                'relativeDateRange': string;
                'startDate': string;
            }

            interface DayPartTargeting {
                'daysOfWeek': string[];
                'hoursOfDay': number[];
                'userLocalTime': boolean;
            }

            interface DefaultClickThroughEventTagProperties {
                'defaultClickThroughEventTagId': string;
                'overrideInheritedEventTag': boolean;
            }

            interface DeliverySchedule {
                'frequencyCap': FrequencyCap;
                'hardCutoff': boolean;
                'impressionRatio': string;
                'priority': string;
            }

            interface DfpSettings {
                'dfp_network_code': string;
                'dfp_network_name': string;
                'programmaticPlacementAccepted': boolean;
                'pubPaidPlacementAccepted': boolean;
                'publisherPortalOnly': boolean;
            }

            interface Dimension {
                'kind': string;
                'name': string;
            }

            interface DimensionFilter {
                'dimensionName': string;
                'kind': string;
                'value': string;
            }

            interface DimensionValue {
                'dimensionName': string;
                'etag': string;
                'id': string;
                'kind': string;
                'matchType': string;
                'value': string;
            }

            interface DimensionValueList {
                'etag': string;
                'items': DimensionValue[];
                'kind': string;
                'nextPageToken': string;
            }

            interface DimensionValueRequest {
                'dimensionName': string;
                'endDate': string;
                'filters': DimensionFilter[];
                'kind': string;
                'startDate': string;
            }

            interface DirectorySite {
                'active': boolean;
                'contactAssignments': DirectorySiteContactAssignment[];
                'countryId': string;
                'currencyId': string;
                'description': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'inpageTagFormats': string[];
                'interstitialTagFormats': string[];
                'kind': string;
                'name': string;
                'parentId': string;
                'settings': DirectorySiteSettings;
                'url': string;
            }

            interface DirectorySiteContact {
                'address': string;
                'email': string;
                'firstName': string;
                'id': string;
                'kind': string;
                'lastName': string;
                'phone': string;
                'role': string;
                'title': string;
                'type': string;
            }

            interface DirectorySiteContactAssignment {
                'contactId': string;
                'visibility': string;
            }

            interface DirectorySiteContactsListResponse {
                'directorySiteContacts': DirectorySiteContact[];
                'kind': string;
                'nextPageToken': string;
            }

            interface DirectorySiteSettings {
                'activeViewOptOut': boolean;
                'dfp_settings': DfpSettings;
                'instream_video_placement_accepted': boolean;
                'interstitialPlacementAccepted': boolean;
                'nielsenOcrOptOut': boolean;
                'verificationTagOptOut': boolean;
                'videoActiveViewOptOut': boolean;
            }

            interface DirectorySitesListResponse {
                'directorySites': DirectorySite[];
                'kind': string;
                'nextPageToken': string;
            }

            interface EventTag {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'enabledByDefault': boolean;
                'excludeFromAdxRequests': boolean;
                'id': string;
                'kind': string;
                'name': string;
                'siteFilterType': string;
                'siteIds': string[];
                'sslCompliant': boolean;
                'status': string;
                'subaccountId': string;
                'type': string;
                'url': string;
                'urlEscapeLevels': number;
            }

            interface EventTagOverride {
                'enabled': boolean;
                'id': string;
            }

            interface EventTagsListResponse {
                'eventTags': EventTag[];
                'kind': string;
            }

            interface File {
                'dateRange': DateRange;
                'etag': string;
                'fileName': string;
                'format': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'reportId': string;
                'status': string;
                'urls': {
                    'apiUrl': string;
                    'browserUrl': string;
                };
            }

            interface FileList {
                'etag': string;
                'items': File[];
                'kind': string;
                'nextPageToken': string;
            }

            interface Flight {
                'endDate': string;
                'rateOrCost': string;
                'startDate': string;
                'units': string;
            }

            interface FloodlightActivitiesGenerateTagResponse {
                'floodlightActivityTag': string;
                'kind': string;
            }

            interface FloodlightActivitiesListResponse {
                'floodlightActivities': FloodlightActivity[];
                'kind': string;
                'nextPageToken': string;
            }

            interface FloodlightActivity {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'cacheBustingType': string;
                'countingMethod': string;
                'defaultTags': FloodlightActivityDynamicTag[];
                'expectedUrl': string;
                'floodlightActivityGroupId': string;
                'floodlightActivityGroupName': string;
                'floodlightActivityGroupTagString': string;
                'floodlightActivityGroupType': string;
                'floodlightConfigurationId': string;
                'floodlightConfigurationIdDimensionValue': DimensionValue;
                'hidden': boolean;
                'id': string;
                'idDimensionValue': DimensionValue;
                'imageTagEnabled': boolean;
                'kind': string;
                'name': string;
                'notes': string;
                'publisherTags': FloodlightActivityPublisherDynamicTag[];
                'secure': boolean;
                'sslCompliant': boolean;
                'sslRequired': boolean;
                'subaccountId': string;
                'tagFormat': string;
                'tagString': string;
                'userDefinedVariableTypes': string[];
            }

            interface FloodlightActivityDynamicTag {
                'id': string;
                'name': string;
                'tag': string;
            }

            interface FloodlightActivityGroup {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'floodlightConfigurationId': string;
                'floodlightConfigurationIdDimensionValue': DimensionValue;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'name': string;
                'subaccountId': string;
                'tagString': string;
                'type': string;
            }

            interface FloodlightActivityGroupsListResponse {
                'floodlightActivityGroups': FloodlightActivityGroup[];
                'kind': string;
                'nextPageToken': string;
            }

            interface FloodlightActivityPublisherDynamicTag {
                'clickThrough': boolean;
                'directorySiteId': string;
                'dynamicTag': FloodlightActivityDynamicTag;
                'siteId': string;
                'siteIdDimensionValue': DimensionValue;
                'viewThrough': boolean;
            }

            interface FloodlightConfiguration {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'analyticsDataSharingEnabled': boolean;
                'exposureToConversionEnabled': boolean;
                'firstDayOfWeek': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'inAppAttributionTrackingEnabled': boolean;
                'kind': string;
                'lookbackConfiguration': LookbackConfiguration;
                'naturalSearchConversionAttributionOption': string;
                'omnitureSettings': OmnitureSettings;
                'standardVariableTypes': string[];
                'subaccountId': string;
                'tagSettings': TagSettings;
                'thirdPartyAuthenticationTokens': ThirdPartyAuthenticationToken[];
                'userDefinedVariableConfigurations': UserDefinedVariableConfiguration[];
            }

            interface FloodlightConfigurationsListResponse {
                'floodlightConfigurations': FloodlightConfiguration[];
                'kind': string;
            }

            interface FloodlightReportCompatibleFields {
                'dimensionFilters': Dimension[];
                'dimensions': Dimension[];
                'kind': string;
                'metrics': Metric[];
            }

            interface FrequencyCap {
                'duration': string;
                'impressions': string;
            }

            interface FsCommand {
                'left': number;
                'positionOption': string;
                'top': number;
                'windowHeight': number;
                'windowWidth': number;
            }

            interface GeoTargeting {
                'cities': City[];
                'countries': Country[];
                'excludeCountries': boolean;
                'metros': Metro[];
                'postalCodes': PostalCode[];
                'regions': Region[];
            }

            interface InventoryItem {
                'accountId': string;
                'adSlots': AdSlot[];
                'advertiserId': string;
                'contentCategoryId': string;
                'estimatedClickThroughRate': string;
                'estimatedConversionRate': string;
                'id': string;
                'inPlan': boolean;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'name': string;
                'negotiationChannelId': string;
                'orderId': string;
                'placementStrategyId': string;
                'pricing': Pricing;
                'projectId': string;
                'rfpId': string;
                'siteId': string;
                'subaccountId': string;
                'type': string;
            }

            interface InventoryItemsListResponse {
                'inventoryItems': InventoryItem[];
                'kind': string;
                'nextPageToken': string;
            }

            interface KeyValueTargetingExpression {
                'expression': string;
            }

            interface LandingPage {
                'default': boolean;
                'id': string;
                'kind': string;
                'name': string;
                'url': string;
            }

            interface LandingPagesListResponse {
                'kind': string;
                'landingPages': LandingPage[];
            }

            interface LastModifiedInfo {
                'time': string;
            }

            interface ListPopulationClause {
                'terms': ListPopulationTerm[];
            }

            interface ListPopulationRule {
                'floodlightActivityId': string;
                'floodlightActivityName': string;
                'listPopulationClauses': ListPopulationClause[];
            }

            interface ListPopulationTerm {
                'contains': boolean;
                'negation': boolean;
                'operator': string;
                'remarketingListId': string;
                'type': string;
                'value': string;
                'variableFriendlyName': string;
                'variableName': string;
            }

            interface ListTargetingExpression {
                'expression': string;
            }

            interface LookbackConfiguration {
                'clickDuration': number;
                'postImpressionActivitiesDuration': number;
            }

            interface Metric {
                'kind': string;
                'name': string;
            }

            interface Metro {
                'countryCode': string;
                'countryDartId': string;
                'dartId': string;
                'dmaId': string;
                'kind': string;
                'metroCode': string;
                'name': string;
            }

            interface MetrosListResponse {
                'kind': string;
                'metros': Metro[];
            }

            interface MobileCarrier {
                'countryCode': string;
                'countryDartId': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            interface MobileCarriersListResponse {
                'kind': string;
                'mobileCarriers': MobileCarrier[];
            }

            interface ObjectFilter {
                'kind': string;
                'objectIds': string[];
                'status': string;
            }

            interface OffsetPosition {
                'left': number;
                'top': number;
            }

            interface OmnitureSettings {
                'omnitureCostDataEnabled': boolean;
                'omnitureIntegrationEnabled': boolean;
            }

            interface OperatingSystem {
                'dartId': string;
                'desktop': boolean;
                'kind': string;
                'mobile': boolean;
                'name': string;
            }

            interface OperatingSystemVersion {
                'id': string;
                'kind': string;
                'majorVersion': string;
                'minorVersion': string;
                'name': string;
                'operatingSystem': OperatingSystem;
            }

            interface OperatingSystemVersionsListResponse {
                'kind': string;
                'operatingSystemVersions': OperatingSystemVersion[];
            }

            interface OperatingSystemsListResponse {
                'kind': string;
                'operatingSystems': OperatingSystem[];
            }

            interface OptimizationActivity {
                'floodlightActivityId': string;
                'floodlightActivityIdDimensionValue': DimensionValue;
                'weight': number;
            }

            interface Order {
                'accountId': string;
                'advertiserId': string;
                'approverUserProfileIds': string[];
                'buyerInvoiceId': string;
                'buyerOrganizationName': string;
                'comments': string;
                'contacts': OrderContact[];
                'id': string;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'name': string;
                'notes': string;
                'planningTermId': string;
                'projectId': string;
                'sellerOrderId': string;
                'sellerOrganizationName': string;
                'siteId': string[];
                'siteNames': string[];
                'subaccountId': string;
                'termsAndConditions': string;
            }

            interface OrderContact {
                'contactInfo': string;
                'contactName': string;
                'contactTitle': string;
                'contactType': string;
                'signatureUserProfileId': string;
            }

            interface OrderDocument {
                'accountId': string;
                'advertiserId': string;
                'amendedOrderDocumentId': string;
                'approvedByUserProfileIds': string[];
                'cancelled': boolean;
                'createdInfo': LastModifiedInfo;
                'effectiveDate': string;
                'id': string;
                'kind': string;
                'lastSentRecipients': string[];
                'lastSentTime': string;
                'orderId': string;
                'projectId': string;
                'signed': boolean;
                'subaccountId': string;
                'title': string;
                'type': string;
            }

            interface OrderDocumentsListResponse {
                'kind': string;
                'nextPageToken': string;
                'orderDocuments': OrderDocument[];
            }

            interface OrdersListResponse {
                'kind': string;
                'nextPageToken': string;
                'orders': Order[];
            }

            interface PathToConversionReportCompatibleFields {
                'conversionDimensions': Dimension[];
                'customFloodlightVariables': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'perInteractionDimensions': Dimension[];
            }

            interface Placement {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'comment': string;
                'compatibility': string;
                'contentCategoryId': string;
                'createInfo': LastModifiedInfo;
                'directorySiteId': string;
                'directorySiteIdDimensionValue': DimensionValue;
                'externalId': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'keyName': string;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'lookbackConfiguration': LookbackConfiguration;
                'name': string;
                'paymentApproved': boolean;
                'paymentSource': string;
                'placementGroupId': string;
                'placementGroupIdDimensionValue': DimensionValue;
                'placementStrategyId': string;
                'pricingSchedule': PricingSchedule;
                'primary': boolean;
                'publisherUpdateInfo': LastModifiedInfo;
                'siteId': string;
                'siteIdDimensionValue': DimensionValue;
                'size': Size;
                'sslRequired': boolean;
                'status': string;
                'subaccountId': string;
                'tagFormats': string[];
                'tagSetting': TagSetting;
            }

            interface PlacementAssignment {
                'active': boolean;
                'placementId': string;
                'placementIdDimensionValue': DimensionValue;
                'sslRequired': boolean;
            }

            interface PlacementGroup {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'childPlacementIds': string[];
                'comment': string;
                'contentCategoryId': string;
                'createInfo': LastModifiedInfo;
                'directorySiteId': string;
                'directorySiteIdDimensionValue': DimensionValue;
                'externalId': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'name': string;
                'placementGroupType': string;
                'placementStrategyId': string;
                'pricingSchedule': PricingSchedule;
                'primaryPlacementId': string;
                'primaryPlacementIdDimensionValue': DimensionValue;
                'siteId': string;
                'siteIdDimensionValue': DimensionValue;
                'subaccountId': string;
            }

            interface PlacementGroupsListResponse {
                'kind': string;
                'nextPageToken': string;
                'placementGroups': PlacementGroup[];
            }

            interface PlacementStrategiesListResponse {
                'kind': string;
                'nextPageToken': string;
                'placementStrategies': PlacementStrategy[];
            }

            interface PlacementStrategy {
                'accountId': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            interface PlacementTag {
                'placementId': string;
                'tagDatas': TagData[];
            }

            interface PlacementsGenerateTagsResponse {
                'kind': string;
                'placementTags': PlacementTag[];
            }

            interface PlacementsListResponse {
                'kind': string;
                'nextPageToken': string;
                'placements': Placement[];
            }

            interface PlatformType {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface PlatformTypesListResponse {
                'kind': string;
                'platformTypes': PlatformType[];
            }

            interface PopupWindowProperties {
                'dimension': Size;
                'offset': OffsetPosition;
                'positionType': string;
                'showAddressBar': boolean;
                'showMenuBar': boolean;
                'showScrollBar': boolean;
                'showStatusBar': boolean;
                'showToolBar': boolean;
                'title': string;
            }

            interface PostalCode {
                'code': string;
                'countryCode': string;
                'countryDartId': string;
                'id': string;
                'kind': string;
            }

            interface PostalCodesListResponse {
                'kind': string;
                'postalCodes': PostalCode[];
            }

            interface Pricing {
                'capCostType': string;
                'endDate': string;
                'flights': Flight[];
                'groupType': string;
                'pricingType': string;
                'startDate': string;
            }

            interface PricingSchedule {
                'capCostOption': string;
                'disregardOverdelivery': boolean;
                'endDate': string;
                'flighted': boolean;
                'floodlightActivityId': string;
                'pricingPeriods': PricingSchedulePricingPeriod[];
                'pricingType': string;
                'startDate': string;
                'testingStartDate': string;
            }

            interface PricingSchedulePricingPeriod {
                'endDate': string;
                'pricingComment': string;
                'rateOrCostNanos': string;
                'startDate': string;
                'units': string;
            }

            interface Project {
                'accountId': string;
                'advertiserId': string;
                'audienceAgeGroup': string;
                'audienceGender': string;
                'budget': string;
                'clientBillingCode': string;
                'clientName': string;
                'endDate': string;
                'id': string;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'name': string;
                'overview': string;
                'startDate': string;
                'subaccountId': string;
                'targetClicks': string;
                'targetConversions': string;
                'targetCpaNanos': string;
                'targetCpcNanos': string;
                'targetCpmNanos': string;
                'targetImpressions': string;
            }

            interface ProjectsListResponse {
                'kind': string;
                'nextPageToken': string;
                'projects': Project[];
            }

            interface ReachReportCompatibleFields {
                'dimensionFilters': Dimension[];
                'dimensions': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'pivotedActivityMetrics': Metric[];
                'reachByFrequencyMetrics': Metric[];
            }

            interface Recipient {
                'deliveryType': string;
                'email': string;
                'kind': string;
            }

            interface Region {
                'countryCode': string;
                'countryDartId': string;
                'dartId': string;
                'kind': string;
                'name': string;
                'regionCode': string;
            }

            interface RegionsListResponse {
                'kind': string;
                'regions': Region[];
            }

            interface RemarketingList {
                'accountId': string;
                'active': boolean;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'description': string;
                'id': string;
                'kind': string;
                'lifeSpan': string;
                'listPopulationRule': ListPopulationRule;
                'listSize': string;
                'listSource': string;
                'name': string;
                'subaccountId': string;
            }

            interface RemarketingListShare {
                'kind': string;
                'remarketingListId': string;
                'sharedAccountIds': string[];
                'sharedAdvertiserIds': string[];
            }

            interface RemarketingListsListResponse {
                'kind': string;
                'nextPageToken': string;
                'remarketingLists': RemarketingList[];
            }

            interface Report {
                'accountId': string;
                'criteria': {
                    'activities': Activities;
                    'customRichMediaEvents': CustomRichMediaEvents;
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'metricNames': string[];
                };
                'crossDimensionReachCriteria': {
                    'breakdown': SortedDimension[];
                    'dateRange': DateRange;
                    'dimension': string;
                    'dimensionFilters': DimensionValue[];
                    'metricNames': string[];
                    'overlapMetricNames': string[];
                    'pivoted': boolean;
                };
                'delivery': {
                    'emailOwner': boolean;
                    'emailOwnerDeliveryType': string;
                    'message': string;
                    'recipients': Recipient[];
                };
                'etag': string;
                'fileName': string;
                'floodlightCriteria': {
                    'customRichMediaEvents': DimensionValue[];
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'floodlightConfigId': DimensionValue;
                    'metricNames': string[];
                    'reportProperties': {
                        'includeAttributedIPConversions': boolean;
                        'includeUnattributedCookieConversions': boolean;
                        'includeUnattributedIPConversions': boolean;
                    };
                };
                'format': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'name': string;
                'ownerProfileId': string;
                'pathToConversionCriteria': {
                    'activityFilters': DimensionValue[];
                    'conversionDimensions': SortedDimension[];
                    'customFloodlightVariables': SortedDimension[];
                    'customRichMediaEvents': DimensionValue[];
                    'dateRange': DateRange;
                    'floodlightConfigId': DimensionValue;
                    'metricNames': string[];
                    'perInteractionDimensions': SortedDimension[];
                    'reportProperties': {
                        'clicksLookbackWindow': number;
                        'impressionsLookbackWindow': number;
                        'includeAttributedIPConversions': boolean;
                        'includeUnattributedCookieConversions': boolean;
                        'includeUnattributedIPConversions': boolean;
                        'maximumClickInteractions': number;
                        'maximumImpressionInteractions': number;
                        'maximumInteractionGap': number;
                        'pivotOnInteractionPath': boolean;
                    };
                };
                'reachCriteria': {
                    'activities': Activities;
                    'customRichMediaEvents': CustomRichMediaEvents;
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'enableAllDimensionCombinations': boolean;
                    'metricNames': string[];
                    'reachByFrequencyMetricNames': string[];
                };
                'schedule': {
                    'active': boolean;
                    'every': number;
                    'expirationDate': string;
                    'repeats': string;
                    'repeatsOnWeekDays': string[];
                    'runsOnDayOfMonth': string;
                    'startDate': string;
                };
                'subAccountId': string;
                'type': string;
            }

            interface ReportCompatibleFields {
                'dimensionFilters': Dimension[];
                'dimensions': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'pivotedActivityMetrics': Metric[];
            }

            interface ReportList {
                'etag': string;
                'items': Report[];
                'kind': string;
                'nextPageToken': string;
            }

            interface ReportsConfiguration {
                'exposureToConversionEnabled': boolean;
                'lookbackConfiguration': LookbackConfiguration;
                'reportGenerationTimeZoneId': string;
            }

            interface RichMediaExitOverride {
                'customExitUrl': string;
                'exitId': string;
                'useCustomExitUrl': boolean;
            }

            interface Site {
                'accountId': string;
                'approved': boolean;
                'directorySiteId': string;
                'directorySiteIdDimensionValue': DimensionValue;
                'id': string;
                'idDimensionValue': DimensionValue;
                'keyName': string;
                'kind': string;
                'name': string;
                'siteContacts': SiteContact[];
                'siteSettings': SiteSettings;
                'subaccountId': string;
            }

            interface SiteContact {
                'address': string;
                'contactType': string;
                'email': string;
                'firstName': string;
                'id': string;
                'lastName': string;
                'phone': string;
                'title': string;
            }

            interface SiteSettings {
                'activeViewOptOut': boolean;
                'creativeSettings': CreativeSettings;
                'disableBrandSafeAds': boolean;
                'disableNewCookie': boolean;
                'lookbackConfiguration': LookbackConfiguration;
                'tagSetting': TagSetting;
                'videoActiveViewOptOut': boolean;
            }

            interface SitesListResponse {
                'kind': string;
                'nextPageToken': string;
                'sites': Site[];
            }

            interface Size {
                'height': number;
                'iab': boolean;
                'id': string;
                'kind': string;
                'width': number;
            }

            interface SizesListResponse {
                'kind': string;
                'sizes': Size[];
            }

            interface SortedDimension {
                'kind': string;
                'name': string;
                'sortOrder': string;
            }

            interface Subaccount {
                'accountId': string;
                'availablePermissionIds': string[];
                'id': string;
                'kind': string;
                'name': string;
            }

            interface SubaccountsListResponse {
                'kind': string;
                'nextPageToken': string;
                'subaccounts': Subaccount[];
            }

            interface TagData {
                'adId': string;
                'clickTag': string;
                'creativeId': string;
                'format': string;
                'impressionTag': string;
            }

            interface TagSetting {
                'additionalKeyValues': string;
                'includeClickThroughUrls': boolean;
                'includeClickTracking': boolean;
                'keywordOption': string;
            }

            interface TagSettings {
                'dynamicTagEnabled': boolean;
                'imageTagEnabled': boolean;
            }

            interface TargetWindow {
                'customHtml': string;
                'targetWindowOption': string;
            }

            interface TargetableRemarketingList {
                'accountId': string;
                'active': boolean;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'description': string;
                'id': string;
                'kind': string;
                'lifeSpan': string;
                'listSize': string;
                'listSource': string;
                'name': string;
                'subaccountId': string;
            }

            interface TargetableRemarketingListsListResponse {
                'kind': string;
                'nextPageToken': string;
                'targetableRemarketingLists': TargetableRemarketingList[];
            }

            interface TechnologyTargeting {
                'browsers': Browser[];
                'connectionTypes': ConnectionType[];
                'mobileCarriers': MobileCarrier[];
                'operatingSystemVersions': OperatingSystemVersion[];
                'operatingSystems': OperatingSystem[];
                'platformTypes': PlatformType[];
            }

            interface ThirdPartyAuthenticationToken {
                'name': string;
                'value': string;
            }

            interface ThirdPartyTrackingUrl {
                'thirdPartyUrlType': string;
                'url': string;
            }

            interface UserDefinedVariableConfiguration {
                'dataType': string;
                'reportName': string;
                'variableType': string;
            }

            interface UserProfile {
                'accountId': string;
                'accountName': string;
                'etag': string;
                'kind': string;
                'profileId': string;
                'subAccountId': string;
                'subAccountName': string;
                'userName': string;
            }

            interface UserProfileList {
                'etag': string;
                'items': UserProfile[];
                'kind': string;
            }

            interface UserRole {
                'accountId': string;
                'defaultUserRole': boolean;
                'id': string;
                'kind': string;
                'name': string;
                'parentUserRoleId': string;
                'permissions': UserRolePermission[];
                'subaccountId': string;
            }

            interface UserRolePermission {
                'availability': string;
                'id': string;
                'kind': string;
                'name': string;
                'permissionGroupId': string;
            }

            interface UserRolePermissionGroup {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface UserRolePermissionGroupsListResponse {
                'kind': string;
                'userRolePermissionGroups': UserRolePermissionGroup[];
            }

            interface UserRolePermissionsListResponse {
                'kind': string;
                'userRolePermissions': UserRolePermission[];
            }

            interface UserRolesListResponse {
                'kind': string;
                'nextPageToken': string;
                'userRoles': UserRole[];
            }

        }
    }
}