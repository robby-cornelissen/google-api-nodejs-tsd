// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        partners(version: string): any;
        partners(version: 'v2'): partners.v2.Partners;
    }

    namespace partners {
        namespace v2 {
            export interface Partners {
                new(options: any): Partners;

                'companies': {
                    'list': (parameters: { [key: string]: any; 'services'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'maxMonthlyBudget.units'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'minMonthlyBudget.nanos'?: number, 'requestMetadata.partnersSessionId'?: string, 'companyName'?: string, 'pageToken'?: string, 'industries'?: string, 'websiteUrl'?: string, 'gpsMotivations'?: string, 'languageCodes'?: string, 'pageSize'?: number, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'orderBy'?: string, 'specializations'?: string, 'maxMonthlyBudget.currencyCode'?: string, 'requestMetadata.userOverrides.userId'?: string, 'minMonthlyBudget.currencyCode'?: string, 'view'?: string, 'requestMetadata.locale'?: string, 'address'?: string, 'minMonthlyBudget.units'?: string, 'maxMonthlyBudget.nanos'?: number}, callback: (error: any, body: ListCompaniesResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'address'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'companyId': string, 'currencyCode'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'orderBy'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string, 'view'?: string}, callback: (error: any, body: GetCompanyResponse, response: any) => void) => Request;

                    'leads': {
                        'create': (parameters: { [key: string]: any; 'companyId': string}, callback: (error: any, body: CreateLeadResponse, response: any) => void) => Request;
                    };
                };
                'users': {
                    'updateProfile': (parameters: { [key: string]: any; 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.userOverrides.userId'?: string}, callback: (error: any, body: UserProfile, response: any) => void) => Request;
                    'deleteCompanyRelation': (parameters: { [key: string]: any; 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'userId': string, 'requestMetadata.trafficSource.trafficSubId'?: string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'createCompanyRelation': (parameters: { [key: string]: any; 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'userId': string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string}, callback: (error: any, body: CompanyRelation, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'userId': string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string, 'userView'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string}, callback: (error: any, body: User, response: any) => void) => Request;
                };
                'userEvents': {
                    'log': (parameters: { [key: string]: any; }, callback: (error: any, body: LogUserEventResponse, response: any) => void) => Request;
                };
                'clientMessages': {
                    'log': (parameters: { [key: string]: any; }, callback: (error: any, body: LogMessageResponse, response: any) => void) => Request;
                };
                'exams': {
                    'getToken': (parameters: { [key: string]: any; 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'examType': string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string}, callback: (error: any, body: ExamToken, response: any) => void) => Request;
                };
                'leads': {
                    'list': (parameters: { [key: string]: any; 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.userOverrides.userId'?: string, 'pageToken'?: string, 'pageSize'?: number, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'orderBy'?: string}, callback: (error: any, body: ListLeadsResponse, response: any) => void) => Request;
                };
                'offers': {
                    'list': (parameters: { [key: string]: any; 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string}, callback: (error: any, body: ListOffersResponse, response: any) => void) => Request;

                    'history': {
                        'list': (parameters: { [key: string]: any; 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string, 'pageToken'?: string, 'pageSize'?: number, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'entireCompany'?: boolean, 'requestMetadata.trafficSource.trafficSubId'?: string, 'orderBy'?: string}, callback: (error: any, body: ListOffersHistoryResponse, response: any) => void) => Request;
                    };
                };
                'analytics': {
                    'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string}, callback: (error: any, body: ListAnalyticsResponse, response: any) => void) => Request;
                };
                'userStates': {
                    'list': (parameters: { [key: string]: any; 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string}, callback: (error: any, body: ListUserStatesResponse, response: any) => void) => Request;
                };
                'v2': {
                    'updateCompanies': (parameters: { [key: string]: any; 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'updateMask'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.userOverrides.userId'?: string}, callback: (error: any, body: Company, response: any) => void) => Request;
                    'getPartnersstatus': (parameters: { [key: string]: any; 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.partnersSessionId'?: string}, callback: (error: any, body: GetPartnersStatusResponse, response: any) => void) => Request;
                    'updateLeads': (parameters: { [key: string]: any; 'updateMask'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.userOverrides.ipAddress'?: string}, callback: (error: any, body: Lead, response: any) => void) => Request;
                };

            }

            export interface LogUserEventResponse {
                'responseMetadata': ResponseMetadata;
            }

            export interface ListOffersHistoryResponse {
                'canShowEntireCompany': boolean;
                'totalResults': number;
                'showingEntireCompany': boolean;
                'offers': HistoricalOffer[];
                'nextPageToken': string;
                'responseMetadata': ResponseMetadata;
            }

            export interface LogMessageResponse {
                'responseMetadata': ResponseMetadata;
            }

            export interface SpecializationStatus {
                'badgeSpecialization': string;
                'badgeSpecializationState': string;
            }

            export interface Certification {
                'warning': boolean;
                'expiration': string;
                'achieved': boolean;
                'certificationType': string;
                'lastAchieved': string;
            }

            export interface User {
                'internalId': string;
                'examStatus': ExamStatus[];
                'id': string;
                'publicProfile': PublicProfile;
                'companyVerificationEmail': string;
                'certificationStatus': Certification[];
                'profile': UserProfile;
                'company': CompanyRelation;
                'lastAccessTime': string;
                'primaryEmails': string[];
                'availableAdwordsManagerAccounts': AdWordsManagerAccountInfo[];
            }

            export interface ListAnalyticsResponse {
                'analyticsSummary': AnalyticsSummary;
                'responseMetadata': ResponseMetadata;
                'analytics': Analytics[];
                'nextPageToken': string;
            }

            export interface Company {
                'locations': Location[];
                'convertedMinMonthlyBudget': Money;
                'industries': string[];
                'additionalWebsites': string[];
                'websiteUrl': string;
                'primaryAdwordsManagerAccountId': string;
                'name': string;
                'localizedInfos': LocalizedCompanyInfo[];
                'id': string;
                'certificationStatuses': CertificationStatus[];
                'originalMinMonthlyBudget': Money;
                'services': string[];
                'primaryLocation': Location;
                'publicProfile': PublicProfile;
                'ranks': Rank[];
                'specializationStatus': SpecializationStatus[];
                'badgeTier': string;
                'autoApprovalEmailDomains': string[];
                'companyTypes': string[];
                'profileStatus': string;
                'primaryLanguageCode': string;
            }

            export interface ListLeadsResponse {
                'nextPageToken': string;
                'totalSize': number;
                'responseMetadata': ResponseMetadata;
                'leads': Lead[];
            }

            export interface CreateLeadResponse {
                'responseMetadata': ResponseMetadata;
                'recaptchaStatus': string;
                'lead': Lead;
            }

            export interface GetCompanyResponse {
                'company': Company;
                'responseMetadata': ResponseMetadata;
            }

            export interface Location {
                'locality': string;
                'administrativeArea': string;
                'latLng': LatLng;
                'dependentLocality': string;
                'regionCode': string;
                'address': string;
                'postalCode': string;
                'sortingCode': string;
                'languageCode': string;
                'addressLine': string[];
            }

            export interface CertificationExamStatus {
                'numberUsersPass': number;
                'type': string;
            }

            export interface ExamToken {
                'token': string;
                'examType': string;
                'examId': string;
            }

            export interface OptIns {
                'specialOffers': boolean;
                'performanceSuggestions': boolean;
                'phoneContact': boolean;
                'physicalMail': boolean;
                'marketComm': boolean;
            }

            export interface Rank {
                'type': string;
                'value': number;
            }

            export interface UserProfile {
                'markets': string[];
                'phoneNumber': string;
                'adwordsManagerAccount': string;
                'primaryCountryCode': string;
                'emailAddress': string;
                'channels': string[];
                'profilePublic': boolean;
                'jobFunctions': string[];
                'givenName': string;
                'address': Location;
                'industries': string[];
                'languages': string[];
                'familyName': string;
                'emailOptIns': OptIns;
            }

            export interface GetPartnersStatusResponse {
                'responseMetadata': ResponseMetadata;
            }

            export interface HistoricalOffer {
                'creationTime': string;
                'status': string;
                'clientEmail': string;
                'clientId': string;
                'clientName': string;
                'lastModifiedTime': string;
                'adwordsUrl': string;
                'offerType': string;
                'senderName': string;
                'offerCountryCode': string;
                'expirationTime': string;
                'offerCode': string;
            }

            export interface UserOverrides {
                'ipAddress': string;
                'userId': string;
            }

            export interface LogUserEventRequest {
                'eventCategory': string;
                'lead': Lead;
                'eventAction': string;
                'url': string;
                'requestMetadata': RequestMetadata;
                'eventDatas': EventData[];
                'eventScope': string;
            }

            export interface AnalyticsDataPoint {
                'eventCount': number;
                'eventLocations': LatLng[];
            }

            export interface Analytics {
                'contacts': AnalyticsDataPoint;
                'searchViews': AnalyticsDataPoint;
                'profileViews': AnalyticsDataPoint;
                'eventDate': Date;
            }

            export interface PublicProfile {
                'url': string;
                'id': string;
                'profileImage': string;
                'displayImageUrl': string;
                'displayName': string;
            }

            export interface AdWordsManagerAccountInfo {
                'id': string;
                'customerName': string;
            }

            export interface ResponseMetadata {
                'debugInfo': DebugInfo;
            }

            export interface RecaptchaChallenge {
                'id': string;
                'response': string;
            }

            export interface AvailableOffer {
                'offerType': string;
                'maxAccountAge': number;
                'qualifiedCustomer': OfferCustomer[];
                'terms': string;
                'showSpecialOfferCopy': boolean;
                'available': number;
                'description': string;
                'offerLevel': string;
                'name': string;
                'qualifiedCustomersComplete': boolean;
                'id': string;
                'countryOfferInfos': CountryOfferInfo[];
            }

            export interface LatLng {
                'latitude': number;
                'longitude': number;
            }

            export interface Money {
                'nanos': number;
                'units': string;
                'currencyCode': string;
            }

            export interface AnalyticsSummary {
                'searchViewsCount': number;
                'contactsCount': number;
                'profileViewsCount': number;
            }

            export interface LogMessageRequest {
                'clientInfo': {
                    [name: string]: string
                ;
                };
                'requestMetadata': RequestMetadata;
                'level': string;
                'details': string;
            }

            export interface Lead {
                'createTime': string;
                'marketingOptIn': boolean;
                'type': string;
                'minMonthlyBudget': Money;
                'givenName': string;
                'languageCode': string;
                'websiteUrl': string;
                'gpsMotivations': string[];
                'state': string;
                'email': string;
                'familyName': string;
                'comments': string;
                'id': string;
                'adwordsCustomerId': string;
                'phoneNumber': string;
            }

            export interface DebugInfo {
                'serverTraceInfo': string;
                'serverInfo': string;
                'serviceUrl': string;
            }

            export interface ListUserStatesResponse {
                'userStates': string[];
                'responseMetadata': ResponseMetadata;
            }

            export interface CompanyRelation {
                'companyAdmin': boolean;
                'address': string;
                'isPending': boolean;
                'creationTime': string;
                'state': string;
                'primaryAddress': Location;
                'name': string;
                'managerAccount': string;
                'segment': string[];
                'internalCompanyId': string;
                'specializationStatus': SpecializationStatus[];
                'badgeTier': string;
                'phoneNumber': string;
                'website': string;
                'primaryCountryCode': string;
                'companyId': string;
                'primaryLanguageCode': string;
                'logoUrl': string;
                'resolvedTimestamp': string;
            }

            export interface Date {
                'day': number;
                'year': number;
                'month': number;
            }

            export interface Empty {}

            export interface TrafficSource {
                'trafficSourceId': string;
                'trafficSubId': string;
            }

            export interface RequestMetadata {
                'trafficSource': TrafficSource;
                'experimentIds': string[];
                'locale': string;
                'partnersSessionId': string;
                'userOverrides': UserOverrides;
            }

            export interface CreateLeadRequest {
                'requestMetadata': RequestMetadata;
                'recaptchaChallenge': RecaptchaChallenge;
                'lead': Lead;
            }

            export interface EventData {
                'key': string;
                'values': string[];
            }

            export interface ExamStatus {
                'lastPassed': string;
                'examType': string;
                'passed': boolean;
                'taken': string;
                'warning': boolean;
                'expiration': string;
            }

            export interface ListOffersResponse {
                'responseMetadata': ResponseMetadata;
                'noOfferReason': string;
                'availableOffers': AvailableOffer[];
            }

            export interface CountryOfferInfo {
                'spendXAmount': string;
                'offerCountryCode': string;
                'offerType': string;
                'getYAmount': string;
            }

            export interface ListCompaniesResponse {
                'nextPageToken': string;
                'responseMetadata': ResponseMetadata;
                'companies': Company[];
            }

            export interface OfferCustomer {
                'getYAmount': string;
                'name': string;
                'spendXAmount': string;
                'adwordsUrl': string;
                'creationTime': string;
                'countryCode': string;
                'externalCid': string;
                'eligibilityDaysLeft': number;
                'offerType': string;
            }

            export interface CertificationStatus {
                'type': string;
                'userCount': number;
                'isCertified': boolean;
                'examStatuses': CertificationExamStatus[];
            }

            export interface LocalizedCompanyInfo {
                'overview': string;
                'displayName': string;
                'languageCode': string;
                'countryCodes': string[];
            }

        }
    }
}
