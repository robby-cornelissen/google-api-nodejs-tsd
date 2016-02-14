import {Request, RequestCallback} from 'request';

export interface Gamesmanagement {
    new(options: any): Gamesmanagement;

    achievements: {
        reset: (params: any, callback: RequestCallback) => Request;
        resetAll: (params: any, callback: RequestCallback) => Request;
        resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
    };
    applications: {
        listHidden: (params: any, callback: RequestCallback) => Request;
    };
    events: {
        reset: (params: any, callback: RequestCallback) => Request;
        resetAll: (params: any, callback: RequestCallback) => Request;
        resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
    };
    players: {
        hide: (params: any, callback: RequestCallback) => Request;
        unhide: (params: any, callback: RequestCallback) => Request;
    };
    quests: {
        reset: (params: any, callback: RequestCallback) => Request;
        resetAll: (params: any, callback: RequestCallback) => Request;
        resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
    };
    rooms: {
        reset: (params: any, callback: RequestCallback) => Request;
        resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
    };
    scores: {
        reset: (params: any, callback: RequestCallback) => Request;
        resetAll: (params: any, callback: RequestCallback) => Request;
        resetAllForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
        resetMultipleForAllPlayers: (params: any, callback: RequestCallback) => Request;
    };
    turnBasedMatches: {
        reset: (params: any, callback: RequestCallback) => Request;
        resetForAllPlayers: (params: any, callback: RequestCallback) => Request;
    };
}