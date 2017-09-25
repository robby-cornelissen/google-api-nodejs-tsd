// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        gamesConfiguration(version: string): any;
        gamesConfiguration(version: 'v1configuration'): gamesConfiguration.v1configuration.Gamesconfiguration;
    }

    namespace gamesConfiguration {
        namespace v1configuration {
            export interface Gamesconfiguration {
                new(options: any): Gamesconfiguration;

                'achievementConfigurations': {
                    'delete': (parameters: { [key: string]: any; 'achievementId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'achievementId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'applicationId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'applicationId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AchievementConfigurationListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'achievementId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'achievementId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                };
                'imageConfigurations': {
                    'upload': (parameters: { [key: string]: any; 'imageType': string, 'resourceId': string}, callback: (error: any, body: ImageConfiguration, response: any) => void) => Request;
                };
                'leaderboardConfigurations': {
                    'delete': (parameters: { [key: string]: any; 'leaderboardId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'leaderboardId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'applicationId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'applicationId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: LeaderboardConfigurationListResponse, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'leaderboardId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'leaderboardId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                };

            }

            export interface AchievementConfiguration {
                'achievementType': string;
                'draft': AchievementConfigurationDetail;
                'id': string;
                'initialState': string;
                'kind': string;
                'published': AchievementConfigurationDetail;
                'stepsToUnlock': number;
                'token': string;
            }

            export interface AchievementConfigurationDetail {
                'description': LocalizedStringBundle;
                'iconUrl': string;
                'kind': string;
                'name': LocalizedStringBundle;
                'pointValue': number;
                'sortRank': number;
            }

            export interface AchievementConfigurationListResponse {
                'items': AchievementConfiguration[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface GamesNumberAffixConfiguration {
                'few': LocalizedStringBundle;
                'many': LocalizedStringBundle;
                'one': LocalizedStringBundle;
                'other': LocalizedStringBundle;
                'two': LocalizedStringBundle;
                'zero': LocalizedStringBundle;
            }

            export interface GamesNumberFormatConfiguration {
                'currencyCode': string;
                'numDecimalPlaces': number;
                'numberFormatType': string;
                'suffix': GamesNumberAffixConfiguration;
            }

            export interface ImageConfiguration {
                'imageType': string;
                'kind': string;
                'resourceId': string;
                'url': string;
            }

            export interface LeaderboardConfiguration {
                'draft': LeaderboardConfigurationDetail;
                'id': string;
                'kind': string;
                'published': LeaderboardConfigurationDetail;
                'scoreMax': string;
                'scoreMin': string;
                'scoreOrder': string;
                'token': string;
            }

            export interface LeaderboardConfigurationDetail {
                'iconUrl': string;
                'kind': string;
                'name': LocalizedStringBundle;
                'scoreFormat': GamesNumberFormatConfiguration;
                'sortRank': number;
            }

            export interface LeaderboardConfigurationListResponse {
                'items': LeaderboardConfiguration[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface LocalizedString {
                'kind': string;
                'locale': string;
                'value': string;
            }

            export interface LocalizedStringBundle {
                'kind': string;
                'translations': LocalizedString[];
            }

        }
    }
}
