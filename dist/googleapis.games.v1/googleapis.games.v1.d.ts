/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        games(version: string): any;
        games(version: 'v1'): games.v1.Games;
    }

    namespace games {
        namespace v1 {
            export interface Games {
                new(options: any): Games;

                'achievementDefinitions': {
                    'list': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: AchievementDefinitionsListResponse, response: any) => void) => Request;
                };
                'achievements': {
                    'increment': (parameters: {'achievementId': string, 'requestId'?: string, 'stepsToIncrement': number}, callback: (error: any, body: AchievementIncrementResponse, response: any) => void) => Request;
                    'list': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string, 'state'?: string}, callback: (error: any, body: PlayerAchievementListResponse, response: any) => void) => Request;
                    'reveal': (parameters: {'achievementId': string}, callback: (error: any, body: AchievementRevealResponse, response: any) => void) => Request;
                    'setStepsAtLeast': (parameters: {'achievementId': string, 'steps': number}, callback: (error: any, body: AchievementSetStepsAtLeastResponse, response: any) => void) => Request;
                    'unlock': (parameters: {'achievementId': string}, callback: (error: any, body: AchievementUnlockResponse, response: any) => void) => Request;
                    'updateMultiple': (parameters: any, callback: (error: any, body: AchievementUpdateMultipleResponse, response: any) => void) => Request;
                };
                'applications': {
                    'get': (parameters: {'applicationId': string, 'language'?: string, 'platformType'?: string}, callback: (error: any, body: Application, response: any) => void) => Request;
                    'played': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'verify': (parameters: {'applicationId': string}, callback: (error: any, body: ApplicationVerifyResponse, response: any) => void) => Request;
                };
                'events': {
                    'listByPlayer': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: PlayerEventListResponse, response: any) => void) => Request;
                    'listDefinitions': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: EventDefinitionListResponse, response: any) => void) => Request;
                    'record': (parameters: {'language'?: string}, callback: (error: any, body: EventUpdateResponse, response: any) => void) => Request;
                };
                'leaderboards': {
                    'get': (parameters: {'language'?: string, 'leaderboardId': string}, callback: (error: any, body: Leaderboard, response: any) => void) => Request;
                    'list': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: LeaderboardListResponse, response: any) => void) => Request;
                };
                'metagame': {
                    'getMetagameConfig': (parameters: any, callback: (error: any, body: MetagameConfig, response: any) => void) => Request;
                    'listCategoriesByPlayer': (parameters: {'collection': string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string}, callback: (error: any, body: CategoryListResponse, response: any) => void) => Request;
                };
                'players': {
                    'get': (parameters: {'language'?: string, 'playerId': string}, callback: (error: any, body: Player, response: any) => void) => Request;
                    'list': (parameters: {'collection': string, 'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: PlayerListResponse, response: any) => void) => Request;
                };
                'pushtokens': {
                    'remove': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'questMilestones': {
                    'claim': (parameters: {'milestoneId': string, 'questId': string, 'requestId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'quests': {
                    'accept': (parameters: {'language'?: string, 'questId': string}, callback: (error: any, body: Quest, response: any) => void) => Request;
                    'list': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string}, callback: (error: any, body: QuestListResponse, response: any) => void) => Request;
                };
                'revisions': {
                    'check': (parameters: {'clientRevision': string}, callback: (error: any, body: RevisionCheckResponse, response: any) => void) => Request;
                };
                'rooms': {
                    'create': (parameters: {'language'?: string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'decline': (parameters: {'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'dismiss': (parameters: {'roomId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'join': (parameters: {'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'leave': (parameters: {'language'?: string, 'roomId': string}, callback: (error: any, body: Room, response: any) => void) => Request;
                    'list': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: RoomList, response: any) => void) => Request;
                    'reportStatus': (parameters: {'language'?: string, 'roomId': string}, callback: (error: any, body: RoomStatus, response: any) => void) => Request;
                };
                'scores': {
                    'get': (parameters: {'includeRankType'?: string, 'language'?: string, 'leaderboardId': string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string, 'timeSpan': string}, callback: (error: any, body: PlayerLeaderboardScoreListResponse, response: any) => void) => Request;
                    'list': (parameters: {'collection': string, 'language'?: string, 'leaderboardId': string, 'maxResults'?: number, 'pageToken'?: string, 'timeSpan': string}, callback: (error: any, body: LeaderboardScores, response: any) => void) => Request;
                    'listWindow': (parameters: {'collection': string, 'language'?: string, 'leaderboardId': string, 'maxResults'?: number, 'pageToken'?: string, 'resultsAbove'?: number, 'returnTopIfAbsent'?: boolean, 'timeSpan': string}, callback: (error: any, body: LeaderboardScores, response: any) => void) => Request;
                    'submit': (parameters: {'language'?: string, 'leaderboardId': string, 'score': string, 'scoreTag'?: string}, callback: (error: any, body: PlayerScoreResponse, response: any) => void) => Request;
                    'submitMultiple': (parameters: {'language'?: string}, callback: (error: any, body: PlayerScoreListResponse, response: any) => void) => Request;
                };
                'snapshots': {
                    'get': (parameters: {'language'?: string, 'snapshotId': string}, callback: (error: any, body: Snapshot, response: any) => void) => Request;
                    'list': (parameters: {'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'playerId': string}, callback: (error: any, body: SnapshotListResponse, response: any) => void) => Request;
                };
                'turnBasedMatches': {
                    'cancel': (parameters: {'matchId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'create': (parameters: {'language'?: string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'decline': (parameters: {'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'dismiss': (parameters: {'matchId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'finish': (parameters: {'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'get': (parameters: {'includeMatchData'?: boolean, 'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'join': (parameters: {'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'leave': (parameters: {'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'leaveTurn': (parameters: {'language'?: string, 'matchId': string, 'matchVersion': number, 'pendingParticipantId'?: string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                    'list': (parameters: {'includeMatchData'?: boolean, 'language'?: string, 'maxCompletedMatches'?: number, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: TurnBasedMatchList, response: any) => void) => Request;
                    'rematch': (parameters: {'language'?: string, 'matchId': string, 'requestId'?: string}, callback: (error: any, body: TurnBasedMatchRematch, response: any) => void) => Request;
                    'sync': (parameters: {'includeMatchData'?: boolean, 'language'?: string, 'maxCompletedMatches'?: number, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: TurnBasedMatchSync, response: any) => void) => Request;
                    'takeTurn': (parameters: {'language'?: string, 'matchId': string}, callback: (error: any, body: TurnBasedMatch, response: any) => void) => Request;
                };

            }

            interface AchievementDefinition {
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

            interface AchievementDefinitionsListResponse {
                'items': AchievementDefinition[];
                'kind': string;
                'nextPageToken': string;
            }

            interface AchievementIncrementResponse {
                'currentSteps': number;
                'kind': string;
                'newlyUnlocked': boolean;
            }

            interface AchievementRevealResponse {
                'currentState': string;
                'kind': string;
            }

            interface AchievementSetStepsAtLeastResponse {
                'currentSteps': number;
                'kind': string;
                'newlyUnlocked': boolean;
            }

            interface AchievementUnlockResponse {
                'kind': string;
                'newlyUnlocked': boolean;
            }

            interface AchievementUpdateMultipleRequest {
                'kind': string;
                'updates': AchievementUpdateRequest[];
            }

            interface AchievementUpdateMultipleResponse {
                'kind': string;
                'updatedAchievements': AchievementUpdateResponse[];
            }

            interface AchievementUpdateRequest {
                'achievementId': string;
                'incrementPayload': GamesAchievementIncrement;
                'kind': string;
                'setStepsAtLeastPayload': GamesAchievementSetStepsAtLeast;
                'updateType': string;
            }

            interface AchievementUpdateResponse {
                'achievementId': string;
                'currentState': string;
                'currentSteps': number;
                'kind': string;
                'newlyUnlocked': boolean;
                'updateOccurred': boolean;
            }

            interface AggregateStats {
                'count': string;
                'kind': string;
                'max': string;
                'min': string;
                'sum': string;
            }

            interface AnonymousPlayer {
                'avatarImageUrl': string;
                'displayName': string;
                'kind': string;
            }

            interface Application {
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

            interface ApplicationCategory {
                'kind': string;
                'primary': string;
                'secondary': string;
            }

            interface ApplicationVerifyResponse {
                'kind': string;
                'player_id': string;
            }

            interface Category {
                'category': string;
                'experiencePoints': string;
                'kind': string;
            }

            interface CategoryListResponse {
                'items': Category[];
                'kind': string;
                'nextPageToken': string;
            }

            interface EventBatchRecordFailure {
                'failureCause': string;
                'kind': string;
                'range': EventPeriodRange;
            }

            interface EventChild {
                'childId': string;
                'kind': string;
            }

            interface EventDefinition {
                'childEvents': EventChild[];
                'description': string;
                'displayName': string;
                'id': string;
                'imageUrl': string;
                'isDefaultImageUrl': boolean;
                'kind': string;
                'visibility': string;
            }

            interface EventDefinitionListResponse {
                'items': EventDefinition[];
                'kind': string;
                'nextPageToken': string;
            }

            interface EventPeriodRange {
                'kind': string;
                'periodEndMillis': string;
                'periodStartMillis': string;
            }

            interface EventPeriodUpdate {
                'kind': string;
                'timePeriod': EventPeriodRange;
                'updates': EventUpdateRequest[];
            }

            interface EventRecordFailure {
                'eventId': string;
                'failureCause': string;
                'kind': string;
            }

            interface EventRecordRequest {
                'currentTimeMillis': string;
                'kind': string;
                'requestId': string;
                'timePeriods': EventPeriodUpdate[];
            }

            interface EventUpdateRequest {
                'definitionId': string;
                'kind': string;
                'updateCount': string;
            }

            interface EventUpdateResponse {
                'batchFailures': EventBatchRecordFailure[];
                'eventFailures': EventRecordFailure[];
                'kind': string;
                'playerEvents': PlayerEvent[];
            }

            interface GamesAchievementIncrement {
                'kind': string;
                'requestId': string;
                'steps': number;
            }

            interface GamesAchievementSetStepsAtLeast {
                'kind': string;
                'steps': number;
            }

            interface ImageAsset {
                'height': number;
                'kind': string;
                'name': string;
                'url': string;
                'width': number;
            }

            interface Instance {
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

            interface InstanceAndroidDetails {
                'enablePiracyCheck': boolean;
                'kind': string;
                'packageName': string;
                'preferred': boolean;
            }

            interface InstanceIosDetails {
                'bundleIdentifier': string;
                'itunesAppId': string;
                'kind': string;
                'preferredForIpad': boolean;
                'preferredForIphone': boolean;
                'supportIpad': boolean;
                'supportIphone': boolean;
            }

            interface InstanceWebDetails {
                'kind': string;
                'launchUrl': string;
                'preferred': boolean;
            }

            interface Leaderboard {
                'iconUrl': string;
                'id': string;
                'isIconUrlDefault': boolean;
                'kind': string;
                'name': string;
                'order': string;
            }

            interface LeaderboardEntry {
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

            interface LeaderboardListResponse {
                'items': Leaderboard[];
                'kind': string;
                'nextPageToken': string;
            }

            interface LeaderboardScoreRank {
                'formattedNumScores': string;
                'formattedRank': string;
                'kind': string;
                'numScores': string;
                'rank': string;
            }

            interface LeaderboardScores {
                'items': LeaderboardEntry[];
                'kind': string;
                'nextPageToken': string;
                'numScores': string;
                'playerScore': LeaderboardEntry;
                'prevPageToken': string;
            }

            interface MetagameConfig {
                'currentVersion': number;
                'kind': string;
                'playerLevels': PlayerLevel[];
            }

            interface NetworkDiagnostics {
                'androidNetworkSubtype': number;
                'androidNetworkType': number;
                'iosNetworkType': number;
                'kind': string;
                'networkOperatorCode': string;
                'networkOperatorName': string;
                'registrationLatencyMillis': number;
            }

            interface ParticipantResult {
                'kind': string;
                'participantId': string;
                'placing': number;
                'result': string;
            }

            interface PeerChannelDiagnostics {
                'bytesReceived': AggregateStats;
                'bytesSent': AggregateStats;
                'kind': string;
                'numMessagesLost': number;
                'numMessagesReceived': number;
                'numMessagesSent': number;
                'numSendFailures': number;
                'roundtripLatencyMillis': AggregateStats;
            }

            interface PeerSessionDiagnostics {
                'connectedTimestampMillis': string;
                'kind': string;
                'participantId': string;
                'reliableChannel': PeerChannelDiagnostics;
                'unreliableChannel': PeerChannelDiagnostics;
            }

            interface Played {
                'autoMatched': boolean;
                'kind': string;
                'timeMillis': string;
            }

            interface Player {
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
                'title': string;
            }

            interface PlayerAchievement {
                'achievementState': string;
                'currentSteps': number;
                'experiencePoints': string;
                'formattedCurrentStepsString': string;
                'id': string;
                'kind': string;
                'lastUpdatedTimestamp': string;
            }

            interface PlayerAchievementListResponse {
                'items': PlayerAchievement[];
                'kind': string;
                'nextPageToken': string;
            }

            interface PlayerEvent {
                'definitionId': string;
                'formattedNumEvents': string;
                'kind': string;
                'numEvents': string;
                'playerId': string;
            }

            interface PlayerEventListResponse {
                'items': PlayerEvent[];
                'kind': string;
                'nextPageToken': string;
            }

            interface PlayerExperienceInfo {
                'currentExperiencePoints': string;
                'currentLevel': PlayerLevel;
                'kind': string;
                'lastLevelUpTimestampMillis': string;
                'nextLevel': PlayerLevel;
            }

            interface PlayerLeaderboardScore {
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

            interface PlayerLeaderboardScoreListResponse {
                'items': PlayerLeaderboardScore[];
                'kind': string;
                'nextPageToken': string;
                'player': Player;
            }

            interface PlayerLevel {
                'kind': string;
                'level': number;
                'maxExperiencePoints': string;
                'minExperiencePoints': string;
            }

            interface PlayerListResponse {
                'items': Player[];
                'kind': string;
                'nextPageToken': string;
            }

            interface PlayerScore {
                'formattedScore': string;
                'kind': string;
                'score': string;
                'scoreTag': string;
                'timeSpan': string;
            }

            interface PlayerScoreListResponse {
                'kind': string;
                'submittedScores': PlayerScoreResponse[];
            }

            interface PlayerScoreResponse {
                'beatenScoreTimeSpans': string[];
                'formattedScore': string;
                'kind': string;
                'leaderboardId': string;
                'scoreTag': string;
                'unbeatenScores': PlayerScore[];
            }

            interface PlayerScoreSubmissionList {
                'kind': string;
                'scores': ScoreSubmission[];
            }

            interface PushToken {
                'clientRevision': string;
                'id': PushTokenId;
                'kind': string;
                'language': string;
            }

            interface PushTokenId {
                'ios': {
                    'apns_device_token': string;
                    'apns_environment': string;
                };
                'kind': string;
            }

            interface Quest {
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

            interface QuestContribution {
                'formattedValue': string;
                'kind': string;
                'value': string;
            }

            interface QuestCriterion {
                'completionContribution': QuestContribution;
                'currentContribution': QuestContribution;
                'eventId': string;
                'initialPlayerProgress': QuestContribution;
                'kind': string;
            }

            interface QuestListResponse {
                'items': Quest[];
                'kind': string;
                'nextPageToken': string;
            }

            interface QuestMilestone {
                'completionRewardData': string;
                'criteria': QuestCriterion[];
                'id': string;
                'kind': string;
                'state': string;
            }

            interface RevisionCheckResponse {
                'apiVersion': string;
                'kind': string;
                'revisionStatus': string;
            }

            interface Room {
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

            interface RoomAutoMatchStatus {
                'kind': string;
                'waitEstimateSeconds': number;
            }

            interface RoomAutoMatchingCriteria {
                'exclusiveBitmask': string;
                'kind': string;
                'maxAutoMatchingPlayers': number;
                'minAutoMatchingPlayers': number;
            }

            interface RoomClientAddress {
                'kind': string;
                'xmppAddress': string;
            }

            interface RoomCreateRequest {
                'autoMatchingCriteria': RoomAutoMatchingCriteria;
                'capabilities': string[];
                'clientAddress': RoomClientAddress;
                'invitedPlayerIds': string[];
                'kind': string;
                'networkDiagnostics': NetworkDiagnostics;
                'requestId': string;
                'variant': number;
            }

            interface RoomJoinRequest {
                'capabilities': string[];
                'clientAddress': RoomClientAddress;
                'kind': string;
                'networkDiagnostics': NetworkDiagnostics;
            }

            interface RoomLeaveDiagnostics {
                'androidNetworkSubtype': number;
                'androidNetworkType': number;
                'iosNetworkType': number;
                'kind': string;
                'networkOperatorCode': string;
                'networkOperatorName': string;
                'peerSession': PeerSessionDiagnostics[];
                'socketsUsed': boolean;
            }

            interface RoomLeaveRequest {
                'kind': string;
                'leaveDiagnostics': RoomLeaveDiagnostics;
                'reason': string;
            }

            interface RoomList {
                'items': Room[];
                'kind': string;
                'nextPageToken': string;
            }

            interface RoomModification {
                'kind': string;
                'modifiedTimestampMillis': string;
                'participantId': string;
            }

            interface RoomP2PStatus {
                'connectionSetupLatencyMillis': number;
                'error': string;
                'error_reason': string;
                'kind': string;
                'participantId': string;
                'status': string;
                'unreliableRoundtripLatencyMillis': number;
            }

            interface RoomP2PStatuses {
                'kind': string;
                'updates': RoomP2PStatus[];
            }

            interface RoomParticipant {
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

            interface RoomStatus {
                'autoMatchingStatus': RoomAutoMatchStatus;
                'kind': string;
                'participants': RoomParticipant[];
                'roomId': string;
                'status': string;
                'statusVersion': number;
            }

            interface ScoreSubmission {
                'kind': string;
                'leaderboardId': string;
                'score': string;
                'scoreTag': string;
                'signature': string;
            }

            interface Snapshot {
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

            interface SnapshotImage {
                'height': number;
                'kind': string;
                'mime_type': string;
                'url': string;
                'width': number;
            }

            interface SnapshotListResponse {
                'items': Snapshot[];
                'kind': string;
                'nextPageToken': string;
            }

            interface TurnBasedAutoMatchingCriteria {
                'exclusiveBitmask': string;
                'kind': string;
                'maxAutoMatchingPlayers': number;
                'minAutoMatchingPlayers': number;
            }

            interface TurnBasedMatch {
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

            interface TurnBasedMatchCreateRequest {
                'autoMatchingCriteria': TurnBasedAutoMatchingCriteria;
                'invitedPlayerIds': string[];
                'kind': string;
                'requestId': string;
                'variant': number;
            }

            interface TurnBasedMatchData {
                'data': string;
                'dataAvailable': boolean;
                'kind': string;
            }

            interface TurnBasedMatchDataRequest {
                'data': string;
                'kind': string;
            }

            interface TurnBasedMatchList {
                'items': TurnBasedMatch[];
                'kind': string;
                'nextPageToken': string;
            }

            interface TurnBasedMatchModification {
                'kind': string;
                'modifiedTimestampMillis': string;
                'participantId': string;
            }

            interface TurnBasedMatchParticipant {
                'autoMatched': boolean;
                'autoMatchedPlayer': AnonymousPlayer;
                'id': string;
                'kind': string;
                'player': Player;
                'status': string;
            }

            interface TurnBasedMatchRematch {
                'kind': string;
                'previousMatch': TurnBasedMatch;
                'rematch': TurnBasedMatch;
            }

            interface TurnBasedMatchResults {
                'data': TurnBasedMatchDataRequest;
                'kind': string;
                'matchVersion': number;
                'results': ParticipantResult[];
            }

            interface TurnBasedMatchSync {
                'items': TurnBasedMatch[];
                'kind': string;
                'moreAvailable': boolean;
                'nextPageToken': string;
            }

            interface TurnBasedMatchTurn {
                'data': TurnBasedMatchDataRequest;
                'kind': string;
                'matchVersion': number;
                'pendingParticipantId': string;
                'results': ParticipantResult[];
            }

        }
    }
}