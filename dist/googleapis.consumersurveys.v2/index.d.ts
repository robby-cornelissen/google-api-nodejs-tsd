// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        consumersurveys(version: string): any;
        consumersurveys(version: 'v2'): consumersurveys.v2.Consumersurveys;
    }

    namespace consumersurveys {
        namespace v2 {
            export interface Consumersurveys {
                new(options: any): Consumersurveys;

                'mobileapppanels': {
                    'get': (parameters: { [key: string]: any; 'panelId': string}, callback: (error: any, body: MobileAppPanel, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'startIndex'?: number, 'token'?: string}, callback: (error: any, body: MobileAppPanelsListResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'panelId': string}, callback: (error: any, body: MobileAppPanel, response: any) => void) => Request;
                };
                'results': {
                    'get': (parameters: { [key: string]: any; 'surveyUrlId': string}, callback: (error: any, body: SurveyResults, response: any) => void) => Request;
                };
                'surveys': {
                    'delete': (parameters: { [key: string]: any; 'surveyUrlId': string}, callback: (error: any, body: SurveysDeleteResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'surveyUrlId': string}, callback: (error: any, body: Survey, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Survey, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'startIndex'?: number, 'token'?: string}, callback: (error: any, body: SurveysListResponse, response: any) => void) => Request;
                    'start': (parameters: { [key: string]: any; 'resourceId': string}, callback: (error: any, body: SurveysStartResponse, response: any) => void) => Request;
                    'stop': (parameters: { [key: string]: any; 'resourceId': string}, callback: (error: any, body: SurveysStopResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'surveyUrlId': string}, callback: (error: any, body: Survey, response: any) => void) => Request;
                };

            }

            export interface FieldMask {
                'fields': FieldMask[];
                'id': number;
            }

            export interface MobileAppPanel {
                'country': string;
                'isPublicPanel': boolean;
                'language': string;
                'mobileAppPanelId': string;
                'name': string;
                'owners': string[];
            }

            export interface MobileAppPanelsListResponse {
                'pageInfo': PageInfo;
                'requestId': string;
                'resources': MobileAppPanel[];
                'tokenPagination': TokenPagination;
            }

            export interface PageInfo {
                'resultPerPage': number;
                'startIndex': number;
                'totalResults': number;
            }

            export interface ResultsGetRequest {
                'resultMask': ResultsMask;
            }

            export interface ResultsMask {
                'fields': FieldMask[];
                'projection': string;
            }

            export interface Survey {
                'audience': SurveyAudience;
                'cost': SurveyCost;
                'customerData': string;
                'description': string;
                'owners': string[];
                'questions': SurveyQuestion[];
                'rejectionReason': SurveyRejection;
                'state': string;
                'surveyUrlId': string;
                'title': string;
                'wantedResponseCount': number;
            }

            export interface SurveyAudience {
                'ages': string[];
                'country': string;
                'countrySubdivision': string;
                'gender': string;
                'languages': string[];
                'mobileAppPanelId': string;
                'populationSource': string;
            }

            export interface SurveyCost {
                'costPerResponseNanos': string;
                'currencyCode': string;
                'maxCostPerResponseNanos': string;
                'nanos': string;
            }

            export interface SurveyQuestion {
                'answerOrder': string;
                'answers': string[];
                'hasOther': boolean;
                'highValueLabel': string;
                'images': SurveyQuestionImage[];
                'lastAnswerPositionPinned': boolean;
                'lowValueLabel': string;
                'mustPickSuggestion': boolean;
                'numStars': string;
                'openTextPlaceholder': string;
                'openTextSuggestions': string[];
                'question': string;
                'sentimentText': string;
                'singleLineResponse': boolean;
                'thresholdAnswers': string[];
                'type': string;
                'unitOfMeasurementLabel': string;
                'videoId': string;
            }

            export interface SurveyQuestionImage {
                'altText': string;
                'data': string;
                'url': string;
            }

            export interface SurveyRejection {
                'explanation': string;
                'type': string;
            }

            export interface SurveyResults {
                'status': string;
                'surveyUrlId': string;
            }

            export interface SurveysDeleteResponse {
                'requestId': string;
            }

            export interface SurveysListResponse {
                'pageInfo': PageInfo;
                'requestId': string;
                'resources': Survey[];
                'tokenPagination': TokenPagination;
            }

            export interface SurveysStartRequest {
                'maxCostPerResponseNanos': string;
            }

            export interface SurveysStartResponse {
                'requestId': string;
            }

            export interface SurveysStopResponse {
                'requestId': string;
            }

            export interface TokenPagination {
                'nextPageToken': string;
                'previousPageToken': string;
            }

        }
    }
}
