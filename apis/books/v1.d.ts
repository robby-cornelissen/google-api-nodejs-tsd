import {Request, RequestCallback} from 'request';

export interface Books {
    new(options: any): Books;

    bookshelves: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        volumes: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    cloudloading: {
        addBook: (params: any, callback: RequestCallback) => Request;
        deleteBook: (params: any, callback: RequestCallback) => Request;
        updateBook: (params: any, callback: RequestCallback) => Request;
    };
    dictionary: {
        listOfflineMetadata: (params: any, callback: RequestCallback) => Request;
    };
    layers: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        annotationData: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
        volumeAnnotations: {
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
    myconfig: {
        getUserSettings: (params: any, callback: RequestCallback) => Request;
        releaseDownloadAccess: (params: any, callback: RequestCallback) => Request;
        requestAccess: (params: any, callback: RequestCallback) => Request;
        syncVolumeLicenses: (params: any, callback: RequestCallback) => Request;
        updateUserSettings: (params: any, callback: RequestCallback) => Request;
    };
    mylibrary: {
        annotations: {
            delete: (params: any, callback: RequestCallback) => Request;
            insert: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            summary: (params: any, callback: RequestCallback) => Request;
            update: (params: any, callback: RequestCallback) => Request;
        };
        bookshelves: {
            addVolume: (params: any, callback: RequestCallback) => Request;
            clearVolumes: (params: any, callback: RequestCallback) => Request;
            get: (params: any, callback: RequestCallback) => Request;
            list: (params: any, callback: RequestCallback) => Request;
            moveVolume: (params: any, callback: RequestCallback) => Request;
            removeVolume: (params: any, callback: RequestCallback) => Request;
            volumes: {
                list: (params: any, callback: RequestCallback) => Request;
            };
        };
        readingpositions: {
            get: (params: any, callback: RequestCallback) => Request;
            setPosition: (params: any, callback: RequestCallback) => Request;
        };
    };
    notification: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    onboarding: {
        listCategories: (params: any, callback: RequestCallback) => Request;
        listCategoryVolumes: (params: any, callback: RequestCallback) => Request;
    };
    personalizedstream: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    promooffer: {
        accept: (params: any, callback: RequestCallback) => Request;
        dismiss: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
    };
    series: {
        get: (params: any, callback: RequestCallback) => Request;
        membership: {
            get: (params: any, callback: RequestCallback) => Request;
        };
    };
    volumes: {
        get: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        associated: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        mybooks: {
            list: (params: any, callback: RequestCallback) => Request;
        };
        recommended: {
            list: (params: any, callback: RequestCallback) => Request;
            rate: (params: any, callback: RequestCallback) => Request;
        };
        useruploaded: {
            list: (params: any, callback: RequestCallback) => Request;
        };
    };
}