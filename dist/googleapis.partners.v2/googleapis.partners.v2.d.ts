// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

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

            export interface LogUserEventRequest {
                'requestMetadata': RequestMetadata;
                'eventAction': string;
                'eventCategory': string;
                'eventScope': string;
                'eventDatas': EventData[];
                'url': string;
                'lead': Lead;
            }

            export interface RequestMetadata {
                'userOverrides': UserOverrides;
                'locale': string;
                'partnersSessionId': string;
                'experimentIds': string[];
                'trafficSource': TrafficSource;
            }

            export interface UserOverrides {
                'ipAddress': string;
                'userId': string;
            }

            export interface TrafficSource {
                'trafficSourceId': string;
                'trafficSubId': string;
            }

            export interface EventData {
                'key': string;
                'values': string[];
            }

            export interface Lead {
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

            export interface Money {
                'currencyCode': string;
                'units': string;
                'nanos': number;
            }

            export interface LogUserEventResponse {
                'responseMetadata': ResponseMetadata;
            }

            export interface ResponseMetadata {
                'debugInfo': DebugInfo;
            }

            export interface DebugInfo {
                'serverInfo': string;
                'serviceUrl': string;
                'serverTraceInfo': string;
            }

            export interface LogMessageRequest {
                'requestMetadata': RequestMetadata;
                'level': string;
                'details': string;
                'clientInfo': {
                    [name: string]: string
                
                };
            }

            export interface LogMessageResponse {
                'responseMetadata': ResponseMetadata;
            }

            export interface ListUserStatesResponse {
                'responseMetadata': ResponseMetadata;
                'userStates': string[];
            }

            export interface GetCompanyResponse {
                'responseMetadata': ResponseMetadata;
                'company': Company;
            }

            export interface Company {
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

            export interface LocalizedCompanyInfo {
                'languageCode': string;
                'displayName': string;
                'overview': string;
                'countryCodes': string[];
            }

            export interface Location {
                'address': string;
                'latLng': LatLng;
            }

            export interface LatLng {
                'latitude': number;
                'longitude': number;
            }

            export interface PublicProfile {
                'id': string;
                'displayName': string;
                'url': string;
                'displayImageUrl': string;
            }

            export interface CertificationStatus {
                'type': string;
                'examStatuses': CertificationExamStatus[];
                'isCertified': boolean;
            }

            export interface CertificationExamStatus {
                'type': string;
                'numberUsersPass': number;
            }

            export interface Rank {
                'type': string;
                'value': number;
            }

            export interface ListCompaniesResponse {
                'responseMetadata': ResponseMetadata;
                'companies': Company[];
                'nextPageToken': string;
            }

            export interface CreateLeadRequest {
                'requestMetadata': RequestMetadata;
                'lead': Lead;
                'recaptchaChallenge': RecaptchaChallenge;
            }

            export interface RecaptchaChallenge {
                'id': string;
                'response': string;
            }

            export interface CreateLeadResponse {
                'responseMetadata': ResponseMetadata;
                'lead': Lead;
                'recaptchaStatus': string;
            }

        }
    }
}