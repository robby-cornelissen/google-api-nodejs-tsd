// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        games(version: string): any;
        games(version: 'v1'): games.v1.Games;
    }

    namespace games {
        namespace v1 {
            export interface Games {
                new(options: any): Games;

                'achievementDefinitions': {
                    'list': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AchievementDefinitionsListResponse, response: any) => void) => Request;
                };
                'achievements': {
                    'increment': (parameters: { [key: string]: any; 'achievementId': string, 'consistencyToken'?: string, 'requestId'?: string, 'stepsToIncrement': number}, callback: (error: any, body: AchievementIncrementResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string, 'state'?: string}, callback: (error: any, body: PlayerAchievementListResponse, response: any) => void) => Request;
                    'reveal': (parameters: { [key: string]: any; 'achievementId': string, 'consistencyToken'?: string}, callback: (error: any, body: AchievementRevealResponse, response: any) => void) => Request;
                    'setStepsAtLeast': (parameters: { [key: string]: any; 'achievementId': string, 'consistencyToken'?: string, 'steps': number}, callback: (error: any, body: AchievementSetStepsAtLeastResponse, response: any) => void) => Request;
                    'unlock': (parameters: { [key: string]: any; 'achievementId': string, 'consistencyToken'?: string}, callback: (error: any, body: AchievementUnlockResponse, response: any) => void) => Request;
                    'updateMultiple': (parameters: { [key: string]: any; 'consistencyToken'?: string}, callback: (error: any, body: AchievementUpdateMultipleResponse, response: any) => void) => Request;
                };
                'applications': {
                    'get': (parameters: { [key: string]: any; 'applicationId': string, 'consistencyToken'?: string, 'language'?: string, 'platformType'?: string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'played': (parameters: { [key: string]: any; 'consistencyToken'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'verify': (parameters: { [key: string]: any; 'applicationId': string, 'consistencyToken'?: string}, callback: (error: any, body: ApplicationVerifyResponse, response: any) => void) => Request;
                };
                'events': {
                    'listByPlayer': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: PlayerEventListResponse, response: any) => void) => Request;
                    'listDefinitions': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: EventDefinitionListResponse, response: any) => void) => Request;
                    'record': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string}, callback: (error: any, body: EventUpdateResponse, response: any) => void) => Request;
                };
                'leaderboards': {
                    'get': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'leaderboardId': string}, callback: (error: any, body: Leaderboard, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: LeaderboardListResponse, response: any) => void) => Request;
                };
                'metagame': {
                    'getMetagameConfig': (parameters: { [key: string]: any; 'consistencyToken'?: string}, callback: (error: any, body: MetagameConfig, response: any) => void) => Request;
                    'listCategoriesByPlayer': (parameters: { [key: string]: any; 'collection': string, 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string}, callback: (error: any, body: CategoryListResponse, response: any) => void) => Request;
                };
                'players': {
                    'get': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'playerId': string}, callback: (error: any, body: Player, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'collection': string, 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: PlayerListResponse, response: any) => void) => Request;
                };
                'pushtokens': {
                    'remove': (parameters: { [key: string]: any; 'consistencyToken'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'consistencyToken'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'questMilestones': {
                    'claim': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'milestoneId': string, 'questId': string, 'requestId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'quests': {
                    'accept': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'questId': string}, callback: (error: any, body: Quest, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string}, callback: (error: any, body: QuestListResponse, response: any) => void) => Request;
                };
                'revisions': {
                    'check': (parameters: { [key: string]: any; 'clientRevision': string, 'consistencyToken'?: string}, callback: (error: any, body: RevisionCheckResponse, response: any) => void) => Request;
                };
                'rooms': {
                    'create': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'decline': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'dismiss': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'roomId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'join': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'leave': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: RoomList, response: any) => void) => Request;
                    'reportStatus': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'roomId': string}, callback: (error: any, body: RoomStatus, response: any) => void) => Request;
                };
                'scores': {
                    'get': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'includeRankType'?: string, 'language'?: string, 'leaderboardId': string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string, 'timeSpan': string}, callback: (error: any, body: PlayerLeaderboardScoreListResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'collection': string, 'consistencyToken'?: string, 'language'?: string, 'leaderboardId': string, 'maxResults'?: number, 'pageToken'?: string, 'timeSpan': string}, callback: (error: any, body: LeaderboardScores, response: any) => void) => Request;
                    'listWindow': (parameters: { [key: string]: any; 'collection': string, 'consistencyToken'?: string, 'language'?: string, 'leaderboardId': string, 'maxResults'?: number, 'pageToken'?: string, 'resultsAbove'?: number, 'returnTopIfAbsent'?: boolean, 'timeSpan': string}, callback: (error: any, body: LeaderboardScores, response: any) => void) => Request;
                    'submit': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'leaderboardId': string, 'score': string, 'scoreTag'?: string}, callback: (error: any, body: PlayerScoreResponse, response: any) => void) => Request;
                    'submitMultiple': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string}, callback: (error: any, body: PlayerScoreListResponse, response: any) => void) => Request;
                };
                'snapshots': {
                    'get': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'snapshotId': string}, callback: (error: any, body: Snapshot, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string}, callback: (error: any, body: SnapshotListResponse, response: any) => void) => Request;
                };
                'turnBasedMatches': {
                    'cancel': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'matchId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'decline': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'dismiss': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'matchId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'finish': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'includeMatchData'?: boolean, 'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'join': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'leave': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'leaveTurn': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'matchId': string, 'matchVersion': number, 'pendingParticipantId'?: string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'includeMatchData'?: boolean, 'language'?: string, 'maxCompletedMatches'?: number, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: TurnBasedMatchList, response: any) => void) => Request;
                    'rematch': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'matchId': string, 'requestId'?: string}, callback: (error: any, body: TurnBasedMatchRematch, response: any) => void) => Request;
                    'sync': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'includeMatchData'?: boolean, 'language'?: string, 'maxCompletedMatches'?: number, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: TurnBasedMatchSync, response: any) => void) => Request;
                    'takeTurn': (parameters: { [key: string]: any; 'consistencyToken'?: string, 'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                };

            }

            export interface AchievementDefinition {
                'achievementType': string;
                'description': string;
                'experiencePoints': string;
                'formattedTotalSteps': string;
                'id': string;
                'initialState': string;
                'isRevealedIconUrlDefault': boolean;
                'isUnlockedIconUrlDefault': boolean;
                'kind': string;
                'name': string;
                'revealedIconUrl': string;
                'totalSteps': number;
                'unlockedIconUrl': string;
            }

            export interface AchievementDefinitionsListResponse {
                'items': AchievementDefinition[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface AchievementIncrementResponse {
                'currentSteps': number;
                'kind': string;
                'newlyUnlocked': boolean;
            }

            export interface AchievementRevealResponse {
                'currentState': string;
                'kind': string;
            }

            export interface AchievementSetStepsAtLeastResponse {
                'currentSteps': number;
                'kind': string;
                'newlyUnlocked': boolean;
            }

            export interface AchievementUnlockResponse {
                'kind': string;
                'newlyUnlocked': boolean;
            }

            export interface AchievementUpdateMultipleRequest {
                'kind': string;
                'updates': AchievementUpdateRequest[];
            }

            export interface AchievementUpdateMultipleResponse {
                'kind': string;
                'updatedAchievements': AchievementUpdateResponse[];
            }

            export interface AchievementUpdateRequest {
                'achievementId': string;
                'incrementPayload': GamesAchievementIncrement;
                'kind': string;
                'setStepsAtLeastPayload': GamesAchievementSetStepsAtLeast;
                'updateType': string;
            }

            export interface AchievementUpdateResponse {
                'achievementId': string;
                'currentState': string;
                'currentSteps': number;
                'kind': string;
                'newlyUnlocked': boolean;
                'updateOccurred': boolean;
            }

            export interface AggregateStats {
                'count': string;
                'kind': string;
                'max': string;
                'min': string;
                'sum': string;
            }

            export interface AnonymousPlayer {
                'avatarImageUrl': string;
                'displayName': string;
                'kind': string;
            }

            export interface Application {
                'achievement_count': number;
                'assets': ImageAsset[];
                'author': string;
                'category': ApplicationCategory;
                'description': string;
                'enabledFeatures': string[];
                'id': string;
                'instances': Instance[];
                'kind': string;
                'lastUpdatedTimestamp': string;
                'leaderboard_count': number;
                'name': string;
                'themeColor': string;
            }

            export interface ApplicationCategory {
                'kind': string;
                'primary': string;
                'secondary': string;
            }

            export interface ApplicationVerifyResponse {
                'alternate_player_id': string;
                'kind': string;
                'player_id': string;
            }

            export interface Category {
                'category': string;
                'experiencePoints': string;
                'kind': string;
            }

            export interface CategoryListResponse {
                'items': Category[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface EventBatchRecordFailure {
                'failureCause': string;
                'kind': string;
                'range': EventPeriodRange;
            }

            export interface EventChild {
                'childId': string;
                'kind': string;
            }

            export interface EventDefinition {
                'childEvents': EventChild[];
                'description': string;
                'displayName': string;
                'id': string;
                'imageUrl': string;
                'isDefaultImageUrl': boolean;
                'kind': string;
                'visibility': string;
            }

            export interface EventDefinitionListResponse {
                'items': EventDefinition[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface EventPeriodRange {
                'kind': string;
                'periodEndMillis': string;
                'periodStartMillis': string;
            }

            export interface EventPeriodUpdate {
                'kind': string;
                'timePeriod': EventPeriodRange;
                'updates': EventUpdateRequest[];
            }

            export interface EventRecordFailure {
                'eventId': string;
                'failureCause': string;
                'kind': string;
            }

            export interface EventRecordRequest {
                'currentTimeMillis': string;
                'kind': string;
                'requestId': string;
                'timePeriods': EventPeriodUpdate[];
            }

            export interface EventUpdateRequest {
                'definitionId': string;
                'kind': string;
                'updateCount': string;
            }

            export interface EventUpdateResponse {
                'batchFailures': EventBatchRecordFailure[];
                'eventFailures': EventRecordFailure[];
                'kind': string;
                'playerEvents': PlayerEvent[];
            }

            export interface GamesAchievementIncrement {
                'kind': string;
                'requestId': string;
                'steps': number;
            }

            export interface GamesAchievementSetStepsAtLeast {
                'kind': string;
                'steps': number;
            }

            export interface ImageAsset {
                'height': number;
                'kind': string;
                'name': string;
                'url': string;
                'width': number;
            }

            export interface Instance {
                'acquisitionUri': string;
                'androidInstance': InstanceAndroidDetails;
                'iosInstance': InstanceIosDetails;
                'kind': string;
                'name': string;
                'platformType': string;
                'realtimePlay': boolean;
                'turnBasedPlay': boolean;
                'webInstance': InstanceWebDetails;
            }

            export interface InstanceAndroidDetails {
                'enablePiracyCheck': boolean;
                'kind': string;
                'packageName': string;
                'preferred': boolean;
            }

            export interface InstanceIosDetails {
                'bundleIdentifier': string;
                'itunesAppId': string;
                'kind': string;
                'preferredForIpad': boolean;
                'preferredForIphone': boolean;
                'supportIpad': boolean;
                'supportIphone': boolean;
            }

            export interface InstanceWebDetails {
                'kind': string;
                'launchUrl': string;
                'preferred': boolean;
            }

            export interface Leaderboard {
                'iconUrl': string;
                'id': string;
                'isIconUrlDefault': boolean;
                'kind': string;
                'name': string;
                'order': string;
            }

            export interface LeaderboardEntry {
                'formattedScore': string;
                'formattedScoreRank': string;
                'kind': string;
                'player': Player;
                'scoreRank': string;
                'scoreTag': string;
                'scoreValue': string;
                'timeSpan': string;
                'writeTimestampMillis': string;
            }

            export interface LeaderboardListResponse {
                'items': Leaderboard[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface LeaderboardScoreRank {
                'formattedNumScores': string;
                'formattedRank': string;
                'kind': string;
                'numScores': string;
                'rank': string;
            }

            export interface LeaderboardScores {
                'items': LeaderboardEntry[];
                'kind': string;
                'nextPageToken': string;
                'numScores': string;
                'playerScore': LeaderboardEntry;
                'prevPageToken': string;
            }

            export interface MetagameConfig {
                'currentVersion': number;
                'kind': string;
                'playerLevels': PlayerLevel[];
            }

            export interface NetworkDiagnostics {
                'androidNetworkSubtype': number;
                'androidNetworkType': number;
                'iosNetworkType': number;
                'kind': string;
                'networkOperatorCode': string;
                'networkOperatorName': string;
                'registrationLatencyMillis': number;
            }

            export interface ParticipantResult {
                'kind': string;
                'participantId': string;
                'placing': number;
                'result': string;
            }

            export interface PeerChannelDiagnostics {
                'bytesReceived': AggregateStats;
                'bytesSent': AggregateStats;
                'kind': string;
                'numMessagesLost': number;
                'numMessagesReceived': number;
                'numMessagesSent': number;
                'numSendFailures': number;
                'roundtripLatencyMillis': AggregateStats;
            }

            export interface PeerSessionDiagnostics {
                'connectedTimestampMillis': string;
                'kind': string;
                'participantId': string;
                'reliableChannel': PeerChannelDiagnostics;
                'unreliableChannel': PeerChannelDiagnostics;
            }

            export interface Played {
                'autoMatched': boolean;
                'kind': string;
                'timeMillis': string;
            }

            export interface Player {
                'avatarImageUrl': string;
                'bannerUrlLandscape': string;
                'bannerUrlPortrait': string;
                'displayName': string;
                'experienceInfo': PlayerExperienceInfo;
                'kind': string;
                'lastPlayedWith': Played;
                'name': {
                    'familyName': string;
                    'givenName': string;
                };
                'originalPlayerId': string;
                'playerId': string;
                'profileSettings': ProfileSettings;
                'title': string;
            }

            export interface PlayerAchievement {
                'achievementState': string;
                'currentSteps': number;
                'experiencePoints': string;
                'formattedCurrentStepsString': string;
                'id': string;
                'kind': string;
                'lastUpdatedTimestamp': string;
            }

            export interface PlayerAchievementListResponse {
                'items': PlayerAchievement[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface PlayerEvent {
                'definitionId': string;
                'formattedNumEvents': string;
                'kind': string;
                'numEvents': string;
                'playerId': string;
            }

            export interface PlayerEventListResponse {
                'items': PlayerEvent[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface PlayerExperienceInfo {
                'currentExperiencePoints': string;
                'currentLevel': PlayerLevel;
                'kind': string;
                'lastLevelUpTimestampMillis': string;
                'nextLevel': PlayerLevel;
            }

            export interface PlayerLeaderboardScore {
                'kind': string;
                'leaderboard_id': string;
                'publicRank': LeaderboardScoreRank;
                'scoreString': string;
                'scoreTag': string;
                'scoreValue': string;
                'socialRank': LeaderboardScoreRank;
                'timeSpan': string;
                'writeTimestamp': string;
            }

            export interface PlayerLeaderboardScoreListResponse {
                'items': PlayerLeaderboardScore[];
                'kind': string;
                'nextPageToken': string;
                'player': Player;
            }

            export interface PlayerLevel {
                'kind': string;
                'level': number;
                'maxExperiencePoints': string;
                'minExperiencePoints': string;
            }

            export interface PlayerListResponse {
                'items': Player[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface PlayerScore {
                'formattedScore': string;
                'kind': string;
                'score': string;
                'scoreTag': string;
                'timeSpan': string;
            }

            export interface PlayerScoreListResponse {
                'kind': string;
                'submittedScores': PlayerScoreResponse[];
            }

            export interface PlayerScoreResponse {
                'beatenScoreTimeSpans': string[];
                'formattedScore': string;
                'kind': string;
                'leaderboardId': string;
                'scoreTag': string;
                'unbeatenScores': PlayerScore[];
            }

            export interface PlayerScoreSubmissionList {
                'kind': string;
                'scores': ScoreSubmission[];
            }

            export interface ProfileSettings {
                'kind': string;
                'profileVisible': boolean;
            }

            export interface PushToken {
                'clientRevision': string;
                'id': PushTokenId;
                'kind': string;
                'language': string;
            }

            export interface PushTokenId {
                'ios': {
                    'apns_device_token': string;
                    'apns_environment': string;
                };
                'kind': string;
            }

            export interface Quest {
                'acceptedTimestampMillis': string;
                'applicationId': string;
                'bannerUrl': string;
                'description': string;
                'endTimestampMillis': string;
                'iconUrl': string;
                'id': string;
                'isDefaultBannerUrl': boolean;
                'isDefaultIconUrl': boolean;
                'kind': string;
                'lastUpdatedTimestampMillis': string;
                'milestones': QuestMilestone[];
                'name': string;
                'notifyTimestampMillis': string;
                'startTimestampMillis': string;
                'state': string;
            }

            export interface QuestContribution {
                'formattedValue': string;
                'kind': string;
                'value': string;
            }

            export interface QuestCriterion {
                'completionContribution': QuestContribution;
                'currentContribution': QuestContribution;
                'eventId': string;
                'initialPlayerProgress': QuestContribution;
                'kind': string;
            }

            export interface QuestListResponse {
                'items': Quest[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface QuestMilestone {
                'completionRewardData': string;
                'criteria': QuestCriterion[];
                'id': string;
                'kind': string;
                'state': string;
            }

            export interface RevisionCheckResponse {
                'apiVersion': string;
                'kind': string;
                'revisionStatus': string;
            }

            export interface Room {
                'applicationId': string;
                'autoMatchingCriteria': RoomAutoMatchingCriteria;
                'autoMatchingStatus': RoomAutoMatchStatus;
                'creationDetails': RoomModification;
                'description': string;
                'inviterId': string;
                'kind': string;
                'lastUpdateDetails': RoomModification;
                'participants': RoomParticipant[];
                'roomId': string;
                'roomStatusVersion': number;
                'status': string;
                'variant': number;
            }

            export interface RoomAutoMatchStatus {
                'kind': string;
                'waitEstimateSeconds': number;
            }

            export interface RoomAutoMatchingCriteria {
                'exclusiveBitmask': string;
                'kind': string;
                'maxAutoMatchingPlayers': number;
                'minAutoMatchingPlayers': number;
            }

            export interface RoomClientAddress {
                'kind': string;
                'xmppAddress': string;
            }

            export interface RoomCreateRequest {
                'autoMatchingCriteria': RoomAutoMatchingCriteria;
                'capabilities': string[];
                'clientAddress': RoomClientAddress;
                'invitedPlayerIds': string[];
                'kind': string;
                'networkDiagnostics': NetworkDiagnostics;
                'requestId': string;
                'variant': number;
            }

            export interface RoomJoinRequest {
                'capabilities': string[];
                'clientAddress': RoomClientAddress;
                'kind': string;
                'networkDiagnostics': NetworkDiagnostics;
            }

            export interface RoomLeaveDiagnostics {
                'androidNetworkSubtype': number;
                'androidNetworkType': number;
                'iosNetworkType': number;
                'kind': string;
                'networkOperatorCode': string;
                'networkOperatorName': string;
                'peerSession': PeerSessionDiagnostics[];
                'socketsUsed': boolean;
            }

            export interface RoomLeaveRequest {
                'kind': string;
                'leaveDiagnostics': RoomLeaveDiagnostics;
                'reason': string;
            }

            export interface RoomList {
                'items': Room[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface RoomModification {
                'kind': string;
                'modifiedTimestampMillis': string;
                'participantId': string;
            }

            export interface RoomP2PStatus {
                'connectionSetupLatencyMillis': number;
                'error': string;
                'error_reason': string;
                'kind': string;
                'participantId': string;
                'status': string;
                'unreliableRoundtripLatencyMillis': number;
            }

            export interface RoomP2PStatuses {
                'kind': string;
                'updates': RoomP2PStatus[];
            }

            export interface RoomParticipant {
                'autoMatched': boolean;
                'autoMatchedPlayer': AnonymousPlayer;
                'capabilities': string[];
                'clientAddress': RoomClientAddress;
                'connected': boolean;
                'id': string;
                'kind': string;
                'leaveReason': string;
                'player': Player;
                'status': string;
            }

            export interface RoomStatus {
                'autoMatchingStatus': RoomAutoMatchStatus;
                'kind': string;
                'participants': RoomParticipant[];
                'roomId': string;
                'status': string;
                'statusVersion': number;
            }

            export interface ScoreSubmission {
                'kind': string;
                'leaderboardId': string;
                'score': string;
                'scoreTag': string;
                'signature': string;
            }

            export interface Snapshot {
                'coverImage': SnapshotImage;
                'description': string;
                'driveId': string;
                'durationMillis': string;
                'id': string;
                'kind': string;
                'lastModifiedMillis': string;
                'progressValue': string;
                'title': string;
                'type': string;
                'uniqueName': string;
            }

            export interface SnapshotImage {
                'height': number;
                'kind': string;
                'mime_type': string;
                'url': string;
                'width': number;
            }

            export interface SnapshotListResponse {
                'items': Snapshot[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface TurnBasedAutoMatchingCriteria {
                'exclusiveBitmask': string;
                'kind': string;
                'maxAutoMatchingPlayers': number;
                'minAutoMatchingPlayers': number;
            }

            export interface TurnBasedMatch {
                'applicationId': string;
                'autoMatchingCriteria': TurnBasedAutoMatchingCriteria;
                'creationDetails': TurnBasedMatchModification;
                'data': TurnBasedMatchData;
                'description': string;
                'inviterId': string;
                'kind': string;
                'lastUpdateDetails': TurnBasedMatchModification;
                'matchId': string;
                'matchNumber': number;
                'matchVersion': number;
                'participants': TurnBasedMatchParticipant[];
                'pendingParticipantId': string;
                'previousMatchData': TurnBasedMatchData;
                'rematchId': string;
                'results': ParticipantResult[];
                'status': string;
                'userMatchStatus': string;
                'variant': number;
                'withParticipantId': string;
            }

            export interface TurnBasedMatchCreateRequest {
                'autoMatchingCriteria': TurnBasedAutoMatchingCriteria;
                'invitedPlayerIds': string[];
                'kind': string;
                'requestId': string;
                'variant': number;
            }

            export interface TurnBasedMatchData {
                'data': string;
                'dataAvailable': boolean;
                'kind': string;
            }

            export interface TurnBasedMatchDataRequest {
                'data': string;
                'kind': string;
            }

            export interface TurnBasedMatchList {
                'items': TurnBasedMatch[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface TurnBasedMatchModification {
                'kind': string;
                'modifiedTimestampMillis': string;
                'participantId': string;
            }

            export interface TurnBasedMatchParticipant {
                'autoMatched': boolean;
                'autoMatchedPlayer': AnonymousPlayer;
                'id': string;
                'kind': string;
                'player': Player;
                'status': string;
            }

            export interface TurnBasedMatchRematch {
                'kind': string;
                'previousMatch': TurnBasedMatch;
                'rematch': TurnBasedMatch;
            }

            export interface TurnBasedMatchResults {
                'data': TurnBasedMatchDataRequest;
                'kind': string;
                'matchVersion': number;
                'results': ParticipantResult[];
            }

            export interface TurnBasedMatchSync {
                'items': TurnBasedMatch[];
                'kind': string;
                'moreAvailable': boolean;
                'nextPageToken': string;
            }

            export interface TurnBasedMatchTurn {
                'data': TurnBasedMatchDataRequest;
                'kind': string;
                'matchVersion': number;
                'pendingParticipantId': string;
                'results': ParticipantResult[];
            }

        }
    }
}
