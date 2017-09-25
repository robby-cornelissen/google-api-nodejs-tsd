// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        gamesManagement(version: string): any;
        gamesManagement(version: 'v1management'): gamesManagement.v1management.Gamesmanagement;
    }

    namespace gamesManagement {
        namespace v1management {
            export interface Gamesmanagement {
                new(options: any): Gamesmanagement;

                'achievements': {
                    'reset': (parameters: { [key: string]: any; 'achievementId': string}, callback: (error: any, body: AchievementResetResponse, response: any) => void) => Request;
                    'resetAll': (parameters: any, callback: (error: any, body: AchievementResetAllResponse, response: any) => void) => Request;
                    'resetAllForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetForAllPlayers': (parameters: { [key: string]: any; 'achievementId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetMultipleForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'applications': {
                    'listHidden': (parameters: { [key: string]: any; 'applicationId': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: HiddenPlayerList, response: any) => void) => Request;
                };
                'events': {
                    'reset': (parameters: { [key: string]: any; 'eventId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetAll': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetAllForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetForAllPlayers': (parameters: { [key: string]: any; 'eventId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetMultipleForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'players': {
                    'hide': (parameters: { [key: string]: any; 'applicationId': string, 'playerId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'unhide': (parameters: { [key: string]: any; 'applicationId': string, 'playerId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'quests': {
                    'reset': (parameters: { [key: string]: any; 'questId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetAll': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetAllForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetForAllPlayers': (parameters: { [key: string]: any; 'questId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetMultipleForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'rooms': {
                    'reset': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'scores': {
                    'reset': (parameters: { [key: string]: any; 'leaderboardId': string}, callback: (error: any, body: PlayerScoreResetResponse, response: any) => void) => Request;
                    'resetAll': (parameters: any, callback: (error: any, body: PlayerScoreResetAllResponse, response: any) => void) => Request;
                    'resetAllForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetForAllPlayers': (parameters: { [key: string]: any; 'leaderboardId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetMultipleForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'turnBasedMatches': {
                    'reset': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'resetForAllPlayers': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };

            }

            export interface AchievementResetAllResponse {
                'kind': string;
                'results': AchievementResetResponse[];
            }

            export interface AchievementResetMultipleForAllRequest {
                'achievement_ids': string[];
                'kind': string;
            }

            export interface AchievementResetResponse {
                'currentState': string;
                'definitionId': string;
                'kind': string;
                'updateOccurred': boolean;
            }

            export interface EventsResetMultipleForAllRequest {
                'event_ids': string[];
                'kind': string;
            }

            export interface GamesPlayedResource {
                'autoMatched': boolean;
                'timeMillis': string;
            }

            export interface GamesPlayerExperienceInfoResource {
                'currentExperiencePoints': string;
                'currentLevel': GamesPlayerLevelResource;
                'lastLevelUpTimestampMillis': string;
                'nextLevel': GamesPlayerLevelResource;
            }

            export interface GamesPlayerLevelResource {
                'level': number;
                'maxExperiencePoints': string;
                'minExperiencePoints': string;
            }

            export interface HiddenPlayer {
                'hiddenTimeMillis': string;
                'kind': string;
                'player': Player;
            }

            export interface HiddenPlayerList {
                'items': HiddenPlayer[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Player {
                'avatarImageUrl': string;
                'bannerUrlLandscape': string;
                'bannerUrlPortrait': string;
                'displayName': string;
                'experienceInfo': GamesPlayerExperienceInfoResource;
                'kind': string;
                'lastPlayedWith': GamesPlayedResource;
                'name': {
                    'familyName': string;
                    'givenName': string;
                };
                'originalPlayerId': string;
                'playerId': string;
                'profileSettings': ProfileSettings;
                'title': string;
            }

            export interface PlayerScoreResetAllResponse {
                'kind': string;
                'results': PlayerScoreResetResponse[];
            }

            export interface PlayerScoreResetResponse {
                'definitionId': string;
                'kind': string;
                'resetScoreTimeSpans': string[];
            }

            export interface ProfileSettings {
                'kind': string;
                'profileVisible': boolean;
            }

            export interface QuestsResetMultipleForAllRequest {
                'kind': string;
                'quest_ids': string[];
            }

            export interface ScoresResetMultipleForAllRequest {
                'kind': string;
                'leaderboard_ids': string[];
            }

        }
    }
}
