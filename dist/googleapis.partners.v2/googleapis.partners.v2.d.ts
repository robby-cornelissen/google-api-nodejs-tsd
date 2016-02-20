/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        partners(version: string): any;
        partners(version: 'v2'): partners.v2.Partners;
    }

    namespace partners {
        namespace v2 {
            export interface Partners {
                new(options: any): Partners;

                'userEvents': {
                    'log': (parameters: any, callback: (error: any, body: LogUserEventResponse, response: any) => void) => Request;
                };
                'clientMessages': {
                    'log': (parameters: any, callback: (error: any, body: LogMessageResponse, response: any) => void) => Request;
                };
                'userStates': {
                    'list': (parameters: {'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string}, callback: (error: any, body: ListUserStatesResponse, response: any) => void) => Request;
                };
                'companies': {
                    'get': (parameters: {'companyId': string, 'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'view'?: string, 'orderBy'?: string, 'currencyCode'?: string, 'address'?: string}, callback: (error: any, body: GetCompanyResponse, response: any) => void) => Request;
                    'list': (parameters: {'requestMetadata.userOverrides.ipAddress'?: string, 'requestMetadata.userOverrides.userId'?: string, 'requestMetadata.locale'?: string, 'requestMetadata.partnersSessionId'?: string, 'requestMetadata.experimentIds'?: string, 'requestMetadata.trafficSource.trafficSourceId'?: string, 'requestMetadata.trafficSource.trafficSubId'?: string, 'pageSize'?: number, 'pageToken'?: string, 'companyName'?: string, 'view'?: string, 'minMonthlyBudget.currencyCode'?: string, 'minMonthlyBudget.units'?: string, 'minMonthlyBudget.nanos'?: number, 'maxMonthlyBudget.currencyCode'?: string, 'maxMonthlyBudget.units'?: string, 'maxMonthlyBudget.nanos'?: number, 'industries'?: string, 'services'?: string, 'languageCodes'?: string, 'address'?: string, 'orderBy'?: string, 'gpsMotivations'?: string, 'websiteUrl'?: string}, callback: (error: any, body: ListCompaniesResponse, response: any) => void) => Request;
                
                    'leads': {
                        'create': (parameters: {'companyId': string}, callback: (error: any, body: CreateLeadResponse, response: any) => void) => Request;
                    };
                };

            }

            interface LogUserEventRequest {
                'requestMetadata': RequestMetadata;
                'eventAction': string;
                'eventCategory': string;
                'eventScope': string;
                'eventDatas': EventData[];
                'url': string;
                'lead': Lead;
            }

            interface RequestMetadata {
                'userOverrides': UserOverrides;
                'locale': string;
                'partnersSessionId': string;
                'experimentIds': string[];
                'trafficSource': TrafficSource;
            }

            interface UserOverrides {
                'ipAddress': string;
                'userId': string;
            }

            interface TrafficSource {
                'trafficSourceId': string;
                'trafficSubId': string;
            }

            interface EventData {
                'key': string;
                'values': string[];
            }

            interface Lead {
                'id': string;
                'type': string;
                'email': string;
                'givenName': string;
                'familyName': string;
                'websiteUrl': string;
                'phoneNumber': string;
                'comments': string;
                'gpsMotivations': string[];
                'minMonthlyBudget': Money;
            }

            interface Money {
                'currencyCode': string;
                'units': string;
                'nanos': number;
            }

            interface LogUserEventResponse {
                'responseMetadata': ResponseMetadata;
            }

            interface ResponseMetadata {
                'debugInfo': DebugInfo;
            }

            interface DebugInfo {
                'serverInfo': string;
                'serviceUrl': string;
                'serverTraceInfo': string;
            }

            interface LogMessageRequest {
                'requestMetadata': RequestMetadata;
                'level': string;
                'details': string;
                'clientInfo': {
                    [name: string]: string
                };
            }

            interface LogMessageResponse {
                'responseMetadata': ResponseMetadata;
            }

            interface ListUserStatesResponse {
                'responseMetadata': ResponseMetadata;
                'userStates': string[];
            }

            interface GetCompanyResponse {
                'responseMetadata': ResponseMetadata;
                'company': Company;
            }

            interface Company {
                'id': string;
                'name': string;
                'localizedInfos': LocalizedCompanyInfo[];
                'locations': Location[];
                'convertedMinMonthlyBudget': Money;
                'originalMinMonthlyBudget': Money;
                'publicProfile': PublicProfile;
                'certificationStatuses': CertificationStatus[];
                'ranks': Rank[];
                'websiteUrl': string;
                'industries': string[];
                'services': string[];
            }

            interface LocalizedCompanyInfo {
                'languageCode': string;
                'displayName': string;
                'overview': string;
                'countryCodes': string[];
            }

            interface Location {
                'address': string;
                'latLng': LatLng;
            }

            interface LatLng {
                'latitude': number;
                'longitude': number;
            }

            interface PublicProfile {
                'id': string;
                'displayName': string;
                'url': string;
                'displayImageUrl': string;
            }

            interface CertificationStatus {
                'type': string;
                'examStatuses': CertificationExamStatus[];
                'isCertified': boolean;
            }

            interface CertificationExamStatus {
                'type': string;
                'numberUsersPass': number;
            }

            interface Rank {
                'type': string;
                'value': number;
            }

            interface ListCompaniesResponse {
                'responseMetadata': ResponseMetadata;
                'companies': Company[];
                'nextPageToken': string;
            }

            interface CreateLeadRequest {
                'requestMetadata': RequestMetadata;
                'lead': Lead;
                'recaptchaChallenge': RecaptchaChallenge;
            }

            interface RecaptchaChallenge {
                'id': string;
                'response': string;
            }

            interface CreateLeadResponse {
                'responseMetadata': ResponseMetadata;
                'lead': Lead;
                'recaptchaStatus': string;
            }

        }
    }
}