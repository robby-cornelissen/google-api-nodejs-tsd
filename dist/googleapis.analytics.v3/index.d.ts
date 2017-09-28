// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        analytics(version: string): any;
        analytics(version: 'v3'): analytics.v3.Analytics;
    }

    namespace analytics {
        namespace v3 {
            export interface Analytics {
                new(options: any): Analytics;

                'data': {
                    'ga': {
                        'get': (parameters: { [key: string]: any; 'dimensions'?: string, 'end-date': string, 'filters'?: string, 'ids': string, 'include-empty-rows'?: boolean, 'max-results'?: number, 'metrics': string, 'output'?: string, 'samplingLevel'?: string, 'segment'?: string, 'sort'?: string, 'start-date': string, 'start-index'?: number}, callback: (error: any, body: GaData, response: any) => void) => Request;
                    };
                    'mcf': {
                        'get': (parameters: { [key: string]: any; 'dimensions'?: string, 'end-date': string, 'filters'?: string, 'ids': string, 'max-results'?: number, 'metrics': string, 'samplingLevel'?: string, 'sort'?: string, 'start-date': string, 'start-index'?: number}, callback: (error: any, body: McfData, response: any) => void) => Request;
                    };
                    'realtime': {
                        'get': (parameters: { [key: string]: any; 'dimensions'?: string, 'filters'?: string, 'ids': string, 'max-results'?: number, 'metrics': string, 'sort'?: string}, callback: (error: any, body: RealtimeData, response: any) => void) => Request;
                    };
                };
                'management': {
                    'accountSummaries': {
                        'list': (parameters: { [key: string]: any; 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: AccountSummaries, response: any) => void) => Request;
                    };
                    'accountUserLinks': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: EntityUserLink, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: EntityUserLinks, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string}, callback: (error: any, body: EntityUserLink, response: any) => void) => Request;
                    };
                    'accounts': {
                        'list': (parameters: { [key: string]: any; 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: Accounts, response: any) => void) => Request;
                    };
                    'customDataSources': {
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: CustomDataSources, response: any) => void) => Request;
                    };
                    'customDimensions': {
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'customDimensionId': string, 'webPropertyId': string}, callback: (error: any, body: CustomDimension, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: CustomDimension, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: CustomDimensions, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'customDimensionId': string, 'ignoreCustomDataSourceLinks'?: boolean, 'webPropertyId': string}, callback: (error: any, body: CustomDimension, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'customDimensionId': string, 'ignoreCustomDataSourceLinks'?: boolean, 'webPropertyId': string}, callback: (error: any, body: CustomDimension, response: any) => void) => Request;
                    };
                    'customMetrics': {
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'customMetricId': string, 'webPropertyId': string}, callback: (error: any, body: CustomMetric, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: CustomMetric, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: CustomMetrics, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'customMetricId': string, 'ignoreCustomDataSourceLinks'?: boolean, 'webPropertyId': string}, callback: (error: any, body: CustomMetric, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'customMetricId': string, 'ignoreCustomDataSourceLinks'?: boolean, 'webPropertyId': string}, callback: (error: any, body: CustomMetric, response: any) => void) => Request;
                    };
                    'experiments': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'experimentId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'experimentId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Experiment, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Experiment, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'profileId': string, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: Experiments, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'experimentId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Experiment, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'experimentId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Experiment, response: any) => void) => Request;
                    };
                    'filters': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'filterId': string}, callback: (error: any, body: Filter, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'filterId': string}, callback: (error: any, body: Filter, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: Filter, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: Filters, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'filterId': string}, callback: (error: any, body: Filter, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'filterId': string}, callback: (error: any, body: Filter, response: any) => void) => Request;
                    };
                    'goals': {
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'goalId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Goal, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Goal, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'profileId': string, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: Goals, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'goalId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Goal, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'goalId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Goal, response: any) => void) => Request;
                    };
                    'profileFilterLinks': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: ProfileFilterLink, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: ProfileFilterLink, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'profileId': string, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: ProfileFilterLinks, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: ProfileFilterLink, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: ProfileFilterLink, response: any) => void) => Request;
                    };
                    'profileUserLinks': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: EntityUserLink, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'profileId': string, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: EntityUserLinks, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: EntityUserLink, response: any) => void) => Request;
                    };
                    'profiles': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Profile, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: Profile, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: Profiles, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Profile, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: Profile, response: any) => void) => Request;
                    };
                    'remarketingAudience': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'remarketingAudienceId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'remarketingAudienceId': string, 'webPropertyId': string}, callback: (error: any, body: RemarketingAudience, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: RemarketingAudience, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'type'?: string, 'webPropertyId': string}, callback: (error: any, body: RemarketingAudiences, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'remarketingAudienceId': string, 'webPropertyId': string}, callback: (error: any, body: RemarketingAudience, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'remarketingAudienceId': string, 'webPropertyId': string}, callback: (error: any, body: RemarketingAudience, response: any) => void) => Request;
                    };
                    'segments': {
                        'list': (parameters: { [key: string]: any; 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: Segments, response: any) => void) => Request;
                    };
                    'unsampledReports': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'unsampledReportId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'unsampledReportId': string, 'webPropertyId': string}, callback: (error: any, body: UnsampledReport, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'profileId': string, 'webPropertyId': string}, callback: (error: any, body: UnsampledReport, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'profileId': string, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: UnsampledReports, response: any) => void) => Request;
                    };
                    'uploads': {
                        'deleteUploadData': (parameters: { [key: string]: any; 'accountId': string, 'customDataSourceId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'customDataSourceId': string, 'uploadId': string, 'webPropertyId': string}, callback: (error: any, body: Upload, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'customDataSourceId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: Uploads, response: any) => void) => Request;
                        'uploadData': (parameters: { [key: string]: any; 'accountId': string, 'customDataSourceId': string, 'webPropertyId': string}, callback: (error: any, body: Upload, response: any) => void) => Request;
                    };
                    'webPropertyAdWordsLinks': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyAdWordsLinkId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyAdWordsLinkId': string, 'webPropertyId': string}, callback: (error: any, body: EntityAdWordsLink, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: EntityAdWordsLink, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: EntityAdWordsLinks, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyAdWordsLinkId': string, 'webPropertyId': string}, callback: (error: any, body: EntityAdWordsLink, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyAdWordsLinkId': string, 'webPropertyId': string}, callback: (error: any, body: EntityAdWordsLink, response: any) => void) => Request;
                    };
                    'webproperties': {
                        'get': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: Webproperty, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string}, callback: (error: any, body: Webproperty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number}, callback: (error: any, body: Webproperties, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: Webproperty, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: Webproperty, response: any) => void) => Request;
                    };
                    'webpropertyUserLinks': {
                        'delete': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'webPropertyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                        'insert': (parameters: { [key: string]: any; 'accountId': string, 'webPropertyId': string}, callback: (error: any, body: EntityUserLink, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'accountId': string, 'max-results'?: number, 'start-index'?: number, 'webPropertyId': string}, callback: (error: any, body: EntityUserLinks, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'accountId': string, 'linkId': string, 'webPropertyId': string}, callback: (error: any, body: EntityUserLink, response: any) => void) => Request;
                    };
                };
                'metadata': {
                    'columns': {
                        'list': (parameters: { [key: string]: any; 'reportType': string}, callback: (error: any, body: Columns, response: any) => void) => Request;
                    };
                };
                'provisioning': {
                    'createAccountTicket': (parameters: any, callback: (error: any, body: AccountTicket, response: any) => void) => Request;
                };

            }

            export interface Account {
                'childLink': {
                    'href': string;
                    'type': string;
                };
                'created': string;
                'id': string;
                'kind': string;
                'name': string;
                'permissions': {
                    'effective': string[];
                };
                'selfLink': string;
                'starred': boolean;
                'updated': string;
            }

            export interface AccountRef {
                'href': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface AccountSummaries {
                'items': AccountSummary[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface AccountSummary {
                'id': string;
                'kind': string;
                'name': string;
                'starred': boolean;
                'webProperties': WebPropertySummary[];
            }

            export interface AccountTicket {
                'account': Account;
                'id': string;
                'kind': string;
                'profile': Profile;
                'redirectUri': string;
                'webproperty': Webproperty;
            }

            export interface Accounts {
                'items': Account[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface AdWordsAccount {
                'autoTaggingEnabled': boolean;
                'customerId': string;
                'kind': string;
            }

            export interface AnalyticsDataimportDeleteUploadDataRequest {
                'customDataImportUids': string[];
            }

            export interface Column {
                'attributes': {
                    [name: string]: string
                ;
                };
                'id': string;
                'kind': string;
            }

            export interface Columns {
                'attributeNames': string[];
                'etag': string;
                'items': Column[];
                'kind': string;
                'totalResults': number;
            }

            export interface CustomDataSource {
                'accountId': string;
                'childLink': {
                    'href': string;
                    'type': string;
                };
                'created': string;
                'description': string;
                'id': string;
                'importBehavior': string;
                'kind': string;
                'name': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'profilesLinked': string[];
                'schema': string[];
                'selfLink': string;
                'type': string;
                'updated': string;
                'uploadType': string;
                'webPropertyId': string;
            }

            export interface CustomDataSources {
                'items': CustomDataSource[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface CustomDimension {
                'accountId': string;
                'active': boolean;
                'created': string;
                'id': string;
                'index': number;
                'kind': string;
                'name': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'scope': string;
                'selfLink': string;
                'updated': string;
                'webPropertyId': string;
            }

            export interface CustomDimensions {
                'items': CustomDimension[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface CustomMetric {
                'accountId': string;
                'active': boolean;
                'created': string;
                'id': string;
                'index': number;
                'kind': string;
                'max_value': string;
                'min_value': string;
                'name': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'scope': string;
                'selfLink': string;
                'type': string;
                'updated': string;
                'webPropertyId': string;
            }

            export interface CustomMetrics {
                'items': CustomMetric[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface EntityAdWordsLink {
                'adWordsAccounts': AdWordsAccount[];
                'entity': {
                    'webPropertyRef': WebPropertyRef;
                };
                'id': string;
                'kind': string;
                'name': string;
                'profileIds': string[];
                'selfLink': string;
            }

            export interface EntityAdWordsLinks {
                'items': EntityAdWordsLink[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
            }

            export interface EntityUserLink {
                'entity': {
                    'accountRef': AccountRef;
                    'profileRef': ProfileRef;
                    'webPropertyRef': WebPropertyRef;
                };
                'id': string;
                'kind': string;
                'permissions': {
                    'effective': string[];
                    'local': string[];
                };
                'selfLink': string;
                'userRef': UserRef;
            }

            export interface EntityUserLinks {
                'items': EntityUserLink[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
            }

            export interface Experiment {
                'accountId': string;
                'created': string;
                'description': string;
                'editableInGaUi': boolean;
                'endTime': string;
                'equalWeighting': boolean;
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'minimumExperimentLengthInDays': number;
                'name': string;
                'objectiveMetric': string;
                'optimizationType': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'profileId': string;
                'reasonExperimentEnded': string;
                'rewriteVariationUrlsAsOriginal': boolean;
                'selfLink': string;
                'servingFramework': string;
                'snippet': string;
                'startTime': string;
                'status': string;
                'trafficCoverage': number;
                'updated': string;
                'variations': {
                    'name': string;
                    'status': string;
                    'url': string;
                    'weight': number;
                    'won': boolean;
                }[];
                'webPropertyId': string;
                'winnerConfidenceLevel': number;
                'winnerFound': boolean;
            }

            export interface Experiments {
                'items': Experiment[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface Filter {
                'accountId': string;
                'advancedDetails': {
                    'caseSensitive': boolean;
                    'extractA': string;
                    'extractB': string;
                    'fieldA': string;
                    'fieldAIndex': number;
                    'fieldARequired': boolean;
                    'fieldB': string;
                    'fieldBIndex': number;
                    'fieldBRequired': boolean;
                    'outputConstructor': string;
                    'outputToField': string;
                    'outputToFieldIndex': number;
                    'overrideOutputField': boolean;
                };
                'created': string;
                'excludeDetails': FilterExpression;
                'id': string;
                'includeDetails': FilterExpression;
                'kind': string;
                'lowercaseDetails': {
                    'field': string;
                    'fieldIndex': number;
                };
                'name': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'searchAndReplaceDetails': {
                    'caseSensitive': boolean;
                    'field': string;
                    'fieldIndex': number;
                    'replaceString': string;
                    'searchString': string;
                };
                'selfLink': string;
                'type': string;
                'updated': string;
                'uppercaseDetails': {
                    'field': string;
                    'fieldIndex': number;
                };
            }

            export interface FilterExpression {
                'caseSensitive': boolean;
                'expressionValue': string;
                'field': string;
                'fieldIndex': number;
                'kind': string;
                'matchType': string;
            }

            export interface FilterRef {
                'accountId': string;
                'href': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface Filters {
                'items': Filter[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface GaData {
                'columnHeaders': {
                    'columnType': string;
                    'dataType': string;
                    'name': string;
                }[];
                'containsSampledData': boolean;
                'dataLastRefreshed': string;
                'dataTable': {
                    'cols': {
                        'id': string;
                        'label': string;
                        'type': string;
                    }[];
                    'rows': {
                        'c': {
                            'v': string;
                        }[];
                    }[];
                };
                'id': string;
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'profileInfo': {
                    'accountId': string;
                    'internalWebPropertyId': string;
                    'profileId': string;
                    'profileName': string;
                    'tableId': string;
                    'webPropertyId': string;
                };
                'query': {
                    'dimensions': string;
                    'end-date': string;
                    'filters': string;
                    'ids': string;
                    'max-results': number;
                    'metrics': string[];
                    'samplingLevel': string;
                    'segment': string;
                    'sort': string[];
                    'start-date': string;
                    'start-index': number;
                };
                'rows': string[][];
                'sampleSize': string;
                'sampleSpace': string;
                'selfLink': string;
                'totalResults': number;
                'totalsForAllResults': {
                    [name: string]: string
                ;
                };
            }

            export interface Goal {
                'accountId': string;
                'active': boolean;
                'created': string;
                'eventDetails': {
                    'eventConditions': {
                        'comparisonType': string;
                        'comparisonValue': string;
                        'expression': string;
                        'matchType': string;
                        'type': string;
                    }[];
                    'useEventValue': boolean;
                };
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'name': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'profileId': string;
                'selfLink': string;
                'type': string;
                'updated': string;
                'urlDestinationDetails': {
                    'caseSensitive': boolean;
                    'firstStepRequired': boolean;
                    'matchType': string;
                    'steps': {
                        'name': string;
                        'number': number;
                        'url': string;
                    }[];
                    'url': string;
                };
                'value': number;
                'visitNumPagesDetails': {
                    'comparisonType': string;
                    'comparisonValue': string;
                };
                'visitTimeOnSiteDetails': {
                    'comparisonType': string;
                    'comparisonValue': string;
                };
                'webPropertyId': string;
            }

            export interface Goals {
                'items': Goal[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface IncludeConditions {
                'daysToLookBack': number;
                'isSmartList': boolean;
                'kind': string;
                'membershipDurationDays': number;
                'segment': string;
            }

            export interface LinkedForeignAccount {
                'accountId': string;
                'eligibleForSearch': boolean;
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'linkedAccountId': string;
                'remarketingAudienceId': string;
                'status': string;
                'type': string;
                'webPropertyId': string;
            }

            export interface McfData {
                'columnHeaders': {
                    'columnType': string;
                    'dataType': string;
                    'name': string;
                }[];
                'containsSampledData': boolean;
                'id': string;
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'profileInfo': {
                    'accountId': string;
                    'internalWebPropertyId': string;
                    'profileId': string;
                    'profileName': string;
                    'tableId': string;
                    'webPropertyId': string;
                };
                'query': {
                    'dimensions': string;
                    'end-date': string;
                    'filters': string;
                    'ids': string;
                    'max-results': number;
                    'metrics': string[];
                    'samplingLevel': string;
                    'segment': string;
                    'sort': string[];
                    'start-date': string;
                    'start-index': number;
                };
                'rows': {
                    'conversionPathValue': {
                        'interactionType': string;
                        'nodeValue': string;
                    }[];
                    'primitiveValue': string;
                }[][];
                'sampleSize': string;
                'sampleSpace': string;
                'selfLink': string;
                'totalResults': number;
                'totalsForAllResults': {
                    [name: string]: string
                ;
                };
            }

            export interface Profile {
                'accountId': string;
                'botFilteringEnabled': boolean;
                'childLink': {
                    'href': string;
                    'type': string;
                };
                'created': string;
                'currency': string;
                'defaultPage': string;
                'eCommerceTracking': boolean;
                'enhancedECommerceTracking': boolean;
                'excludeQueryParameters': string;
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'name': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'permissions': {
                    'effective': string[];
                };
                'selfLink': string;
                'siteSearchCategoryParameters': string;
                'siteSearchQueryParameters': string;
                'starred': boolean;
                'stripSiteSearchCategoryParameters': boolean;
                'stripSiteSearchQueryParameters': boolean;
                'timezone': string;
                'type': string;
                'updated': string;
                'webPropertyId': string;
                'websiteUrl': string;
            }

            export interface ProfileFilterLink {
                'filterRef': FilterRef;
                'id': string;
                'kind': string;
                'profileRef': ProfileRef;
                'rank': number;
                'selfLink': string;
            }

            export interface ProfileFilterLinks {
                'items': ProfileFilterLink[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface ProfileRef {
                'accountId': string;
                'href': string;
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'name': string;
                'webPropertyId': string;
            }

            export interface ProfileSummary {
                'id': string;
                'kind': string;
                'name': string;
                'starred': boolean;
                'type': string;
            }

            export interface Profiles {
                'items': Profile[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface RealtimeData {
                'columnHeaders': {
                    'columnType': string;
                    'dataType': string;
                    'name': string;
                }[];
                'id': string;
                'kind': string;
                'profileInfo': {
                    'accountId': string;
                    'internalWebPropertyId': string;
                    'profileId': string;
                    'profileName': string;
                    'tableId': string;
                    'webPropertyId': string;
                };
                'query': {
                    'dimensions': string;
                    'filters': string;
                    'ids': string;
                    'max-results': number;
                    'metrics': string[];
                    'sort': string[];
                };
                'rows': string[][];
                'selfLink': string;
                'totalResults': number;
                'totalsForAllResults': {
                    [name: string]: string
                ;
                };
            }

            export interface RemarketingAudience {
                'accountId': string;
                'audienceDefinition': {
                    'includeConditions': IncludeConditions;
                };
                'audienceType': string;
                'created': string;
                'description': string;
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'linkedAdAccounts': LinkedForeignAccount[];
                'linkedViews': string[];
                'name': string;
                'stateBasedAudienceDefinition': {
                    'excludeConditions': {
                        'exclusionDuration': string;
                        'segment': string;
                    };
                    'includeConditions': IncludeConditions;
                };
                'updated': string;
                'webPropertyId': string;
            }

            export interface RemarketingAudiences {
                'items': RemarketingAudience[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface Segment {
                'created': string;
                'definition': string;
                'id': string;
                'kind': string;
                'name': string;
                'segmentId': string;
                'selfLink': string;
                'type': string;
                'updated': string;
            }

            export interface Segments {
                'items': Segment[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface UnsampledReport {
                'accountId': string;
                'cloudStorageDownloadDetails': {
                    'bucketId': string;
                    'objectId': string;
                };
                'created': string;
                'dimensions': string;
                'downloadType': string;
                'driveDownloadDetails': {
                    'documentId': string;
                };
                'end-date': string;
                'filters': string;
                'id': string;
                'kind': string;
                'metrics': string;
                'profileId': string;
                'segment': string;
                'selfLink': string;
                'start-date': string;
                'status': string;
                'title': string;
                'updated': string;
                'webPropertyId': string;
            }

            export interface UnsampledReports {
                'items': UnsampledReport[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface Upload {
                'accountId': string;
                'customDataSourceId': string;
                'errors': string[];
                'id': string;
                'kind': string;
                'status': string;
                'uploadTime': string;
            }

            export interface Uploads {
                'items': Upload[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
            }

            export interface UserRef {
                'email': string;
                'id': string;
                'kind': string;
            }

            export interface WebPropertyRef {
                'accountId': string;
                'href': string;
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'name': string;
            }

            export interface WebPropertySummary {
                'id': string;
                'internalWebPropertyId': string;
                'kind': string;
                'level': string;
                'name': string;
                'profiles': ProfileSummary[];
                'starred': boolean;
                'websiteUrl': string;
            }

            export interface Webproperties {
                'items': Webproperty[];
                'itemsPerPage': number;
                'kind': string;
                'nextLink': string;
                'previousLink': string;
                'startIndex': number;
                'totalResults': number;
                'username': string;
            }

            export interface Webproperty {
                'accountId': string;
                'childLink': {
                    'href': string;
                    'type': string;
                };
                'created': string;
                'defaultProfileId': string;
                'id': string;
                'industryVertical': string;
                'internalWebPropertyId': string;
                'kind': string;
                'level': string;
                'name': string;
                'parentLink': {
                    'href': string;
                    'type': string;
                };
                'permissions': {
                    'effective': string[];
                };
                'profileCount': number;
                'selfLink': string;
                'starred': boolean;
                'updated': string;
                'websiteUrl': string;
            }

        }
    }
}
