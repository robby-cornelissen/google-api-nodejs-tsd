import {Request, RequestCallback} from 'request';

export interface Games {
    new(options: any): Games;

    achievementDefinitions: {
        list: (params: any, callback: RequestCallback) => Request;
    };
    achievements: {
        increment: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        reveal: (params: any, callback: RequestCallback) => Request;
        setStepsAtLeast: (params: any, callback: RequestCallback) => Request;
        unlock: (params: any, callback: RequestCallback) => Request;
        updateMultiple: (params: any, callback: RequestCallback) => Request;
    };
    applications: {
        get: (params: any, callback: RequestCallback) => Request;
        played: (params: any, callback: RequestCallback) => Request;
        verify: (params: any, callback: RequestCallback) => Request;
    };
    events: {
        listByPlayer: (params: any, callback: RequestCallback) => Request;
        listDefinitions: (params: any, callback: RequestCallback) => Request;
        record: (params: any, callback: RequestCallback) => Request;
    };
    leaderboards: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    metagame: {
        getMetagameConfig: (params: any, callback: RequestCallback) => Request;
        listCategoriesByPlayer: (params: any, callback: RequestCallback) => Request;
    };
    players: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    pushtokens: {
        remove: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
    questMilestones: {
        claim: (params: any, callback: RequestCallback) => Request;
    };
    quests: {
        accept: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    revisions: {
        check: (params: any, callback: RequestCallback) => Request;
    };
    rooms: {
        create: (params: any, callback: RequestCallback) => Request;
        decline: (params: any, callback: RequestCallback) => Request;
        dismiss: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        join: (params: any, callback: RequestCallback) => Request;
        leave: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        reportStatus: (params: any, callback: RequestCallback) => Request;
    };
    scores: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        listWindow: (params: any, callback: RequestCallback) => Request;
        submit: (params: any, callback: RequestCallback) => Request;
        submitMultiple: (params: any, callback: RequestCallback) => Request;
    };
    snapshots: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
    };
    turnBasedMatches: {
        cancel: (params: any, callback: RequestCallback) => Request;
        create: (params: any, callback: RequestCallback) => Request;
        decline: (params: any, callback: RequestCallback) => Request;
        dismiss: (params: any, callback: RequestCallback) => Request;
        finish: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        join: (params: any, callback: RequestCallback) => Request;
        leave: (params: any, callback: RequestCallback) => Request;
        leaveTurn: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        rematch: (params: any, callback: RequestCallback) => Request;
        sync: (params: any, callback: RequestCallback) => Request;
        takeTurn: (params: any, callback: RequestCallback) => Request;
    };
}