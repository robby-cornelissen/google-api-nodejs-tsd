import {Request, RequestCallback} from 'request';

export interface Identitytoolkit {
    new(options: any): Identitytoolkit;

    relyingparty: {
        createAuthUri: (params: any, callback: RequestCallback) => Request;
        deleteAccount: (params: any, callback: RequestCallback) => Request;
        downloadAccount: (params: any, callback: RequestCallback) => Request;
        getAccountInfo: (params: any, callback: RequestCallback) => Request;
        getOobConfirmationCode: (params: any, callback: RequestCallback) => Request;
        getProjectConfig: (params: any, callback: RequestCallback) => Request;
        getPublicKeys: (params: any, callback: RequestCallback) => Request;
        getRecaptchaParam: (params: any, callback: RequestCallback) => Request;
        resetPassword: (params: any, callback: RequestCallback) => Request;
        setAccountInfo: (params: any, callback: RequestCallback) => Request;
        signOutUser: (params: any, callback: RequestCallback) => Request;
        uploadAccount: (params: any, callback: RequestCallback) => Request;
        verifyAssertion: (params: any, callback: RequestCallback) => Request;
        verifyCustomToken: (params: any, callback: RequestCallback) => Request;
        verifyPassword: (params: any, callback: RequestCallback) => Request;
    };
}