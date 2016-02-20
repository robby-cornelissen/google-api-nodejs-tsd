/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        gamesConfiguration(version: string): any;
        gamesConfiguration(version: 'v1configuration'): gamesConfiguration.v1configuration.Gamesconfiguration;
    }

    namespace gamesConfiguration {
        namespace v1configuration {
            export interface Gamesconfiguration {
                new(options: any): Gamesconfiguration;

                'achievementConfigurations': {
                    'delete': (parameters: {'achievementId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'achievementId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                    'insert': (parameters: {'applicationId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                    'list': (parameters: {'applicationId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AchievementConfigurationListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'achievementId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                    'update': (parameters: {'achievementId': string}, callback: (error: any, body: AchievementConfiguration, response: any) => void) => Request;
                };
                'imageConfigurations': {
                    'upload': (parameters: {'imageType': string, 'resourceId': string}, callback: (error: any, body: ImageConfiguration, response: any) => void) => Request;
                };
                'leaderboardConfigurations': {
                    'delete': (parameters: {'leaderboardId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'leaderboardId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                    'insert': (parameters: {'applicationId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                    'list': (parameters: {'applicationId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: LeaderboardConfigurationListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'leaderboardId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                    'update': (parameters: {'leaderboardId': string}, callback: (error: any, body: LeaderboardConfiguration, response: any) => void) => Request;
                };

            }

            interface AchievementConfiguration {
                'achievementType': string;
                'draft': AchievementConfigurationDetail;
                'id': string;
                'initialState': string;
                'kind': string;
                'published': AchievementConfigurationDetail;
                'stepsToUnlock': number;
                'token': string;
            }

            interface AchievementConfigurationDetail {
                'description': LocalizedStringBundle;
                'iconUrl': string;
                'kind': string;
                'name': LocalizedStringBundle;
                'pointValue': number;
                'sortRank': number;
            }

            interface AchievementConfigurationListResponse {
                'items': AchievementConfiguration[];
                'kind': string;
                'nextPageToken': string;
            }

            interface GamesNumberAffixConfiguration {
                'few': LocalizedStringBundle;
                'many': LocalizedStringBundle;
                'one': LocalizedStringBundle;
                'other': LocalizedStringBundle;
                'two': LocalizedStringBundle;
                'zero': LocalizedStringBundle;
            }

            interface GamesNumberFormatConfiguration {
                'currencyCode': string;
                'numDecimalPlaces': number;
                'numberFormatType': string;
                'suffix': GamesNumberAffixConfiguration;
            }

            interface ImageConfiguration {
                'imageType': string;
                'kind': string;
                'resourceId': string;
                'url': string;
            }

            interface LeaderboardConfiguration {
                'draft': LeaderboardConfigurationDetail;
                'id': string;
                'kind': string;
                'published': LeaderboardConfigurationDetail;
                'scoreMax': string;
                'scoreMin': string;
                'scoreOrder': string;
                'token': string;
            }

            interface LeaderboardConfigurationDetail {
                'iconUrl': string;
                'kind': string;
                'name': LocalizedStringBundle;
                'scoreFormat': GamesNumberFormatConfiguration;
                'sortRank': number;
            }

            interface LeaderboardConfigurationListResponse {
                'items': LeaderboardConfiguration[];
                'kind': string;
                'nextPageToken': string;
            }

            interface LocalizedString {
                'kind': string;
                'locale': string;
                'value': string;
            }

            interface LocalizedStringBundle {
                'kind': string;
                'translations': LocalizedString[];
            }

        }
    }
}