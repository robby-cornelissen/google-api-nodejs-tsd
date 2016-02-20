/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        identitytoolkit(version: string): any;
        identitytoolkit(version: 'v3'): identitytoolkit.v3.Identitytoolkit;
    }

    namespace identitytoolkit {
        namespace v3 {
            export interface Identitytoolkit {
                new(options: any): Identitytoolkit;

                'relyingparty': {
                    'createAuthUri': (parameters: any, callback: (error: any, body: CreateAuthUriResponse, response: any) => void) => Request;
                    'deleteAccount': (parameters: any, callback: (error: any, body: DeleteAccountResponse, response: any) => void) => Request;
                    'downloadAccount': (parameters: any, callback: (error: any, body: DownloadAccountResponse, response: any) => void) => Request;
                    'getAccountInfo': (parameters: any, callback: (error: any, body: GetAccountInfoResponse, response: any) => void) => Request;
                    'getOobConfirmationCode': (parameters: any, callback: (error: any, body: GetOobConfirmationCodeResponse, response: any) => void) => Request;
                    'getProjectConfig': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartyGetProjectConfigResponse, response: any) => void) => Request;
                    'getPublicKeys': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartyGetPublicKeysResponse, response: any) => void) => Request;
                    'getRecaptchaParam': (parameters: any, callback: (error: any, body: GetRecaptchaParamResponse, response: any) => void) => Request;
                    'resetPassword': (parameters: any, callback: (error: any, body: ResetPasswordResponse, response: any) => void) => Request;
                    'setAccountInfo': (parameters: any, callback: (error: any, body: SetAccountInfoResponse, response: any) => void) => Request;
                    'signOutUser': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartySignOutUserResponse, response: any) => void) => Request;
                    'signupNewUser': (parameters: any, callback: (error: any, body: SignupNewUserResponse, response: any) => void) => Request;
                    'uploadAccount': (parameters: any, callback: (error: any, body: UploadAccountResponse, response: any) => void) => Request;
                    'verifyAssertion': (parameters: any, callback: (error: any, body: VerifyAssertionResponse, response: any) => void) => Request;
                    'verifyCustomToken': (parameters: any, callback: (error: any, body: VerifyCustomTokenResponse, response: any) => void) => Request;
                    'verifyPassword': (parameters: any, callback: (error: any, body: VerifyPasswordResponse, response: any) => void) => Request;
                };

            }

            interface CreateAuthUriResponse {
                'allProviders': string[];
                'authUri': string;
                'captchaRequired': boolean;
                'forExistingProvider': boolean;
                'kind': string;
                'providerId': string;
                'registered': boolean;
                'sessionId': string;
            }

            interface DeleteAccountResponse {
                'kind': string;
            }

            interface DownloadAccountResponse {
                'kind': string;
                'nextPageToken': string;
                'users': UserInfo[];
            }

            interface GetAccountInfoResponse {
                'kind': string;
                'users': UserInfo[];
            }

            interface GetOobConfirmationCodeResponse {
                'email': string;
                'kind': string;
                'oobCode': string;
            }

            interface GetRecaptchaParamResponse {
                'kind': string;
                'recaptchaSiteKey': string;
                'recaptchaStoken': string;
            }

            interface IdentitytoolkitRelyingpartyCreateAuthUriRequest {
                'appId': string;
                'clientId': string;
                'context': string;
                'continueUri': string;
                'identifier': string;
                'oauthConsumerKey': string;
                'oauthScope': string;
                'openidRealm': string;
                'otaApp': string;
                'providerId': string;
            }

            interface IdentitytoolkitRelyingpartyDeleteAccountRequest {
                'delegatedProjectNumber': string;
                'localId': string;
            }

            interface IdentitytoolkitRelyingpartyDownloadAccountRequest {
                'delegatedProjectNumber': string;
                'maxResults': number;
                'nextPageToken': string;
            }

            interface IdentitytoolkitRelyingpartyGetAccountInfoRequest {
                'email': string[];
                'idToken': string;
                'localId': string[];
            }

            interface IdentitytoolkitRelyingpartyGetProjectConfigResponse {
                'allowPasswordUser': boolean;
                'apiKey': string;
                'idpConfig': IdpConfig[];
                'projectId': string;
            }

            interface IdentitytoolkitRelyingpartyGetPublicKeysResponse {
                [name: string]: string
            }

            interface IdentitytoolkitRelyingpartyResetPasswordRequest {
                'email': string;
                'newPassword': string;
                'oldPassword': string;
                'oobCode': string;
            }

            interface IdentitytoolkitRelyingpartySetAccountInfoRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'delegatedProjectNumber': string;
                'disableUser': boolean;
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'idToken': string;
                'instanceId': string;
                'localId': string;
                'oobCode': string;
                'password': string;
                'photoUrl': string;
                'provider': string[];
                'upgradeToFederatedLogin': boolean;
                'validSince': string;
            }

            interface IdentitytoolkitRelyingpartySignOutUserRequest {
                'instanceId': string;
                'localId': string;
            }

            interface IdentitytoolkitRelyingpartySignOutUserResponse {
                'localId': string;
            }

            interface IdentitytoolkitRelyingpartySignupNewUserRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'displayName': string;
                'email': string;
                'idToken': string;
                'instanceId': string;
                'password': string;
            }

            interface IdentitytoolkitRelyingpartyUploadAccountRequest {
                'delegatedProjectNumber': string;
                'hashAlgorithm': string;
                'memoryCost': number;
                'rounds': number;
                'saltSeparator': string;
                'signerKey': string;
                'users': UserInfo[];
            }

            interface IdentitytoolkitRelyingpartyVerifyAssertionRequest {
                'delegatedProjectNumber': string;
                'idToken': string;
                'instanceId': string;
                'pendingIdToken': string;
                'postBody': string;
                'requestUri': string;
                'returnRefreshToken': boolean;
                'sessionId': string;
            }

            interface IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
                'instanceId': string;
                'token': string;
            }

            interface IdentitytoolkitRelyingpartyVerifyPasswordRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'delegatedProjectNumber': string;
                'email': string;
                'idToken': string;
                'instanceId': string;
                'password': string;
                'pendingIdToken': string;
            }

            interface IdpConfig {
                'clientId': string;
                'enabled': boolean;
                'experimentPercent': number;
                'provider': string;
            }

            interface Relyingparty {
                'captchaResp': string;
                'challenge': string;
                'email': string;
                'idToken': string;
                'kind': string;
                'newEmail': string;
                'requestType': string;
                'userIp': string;
            }

            interface ResetPasswordResponse {
                'email': string;
                'kind': string;
            }

            interface SetAccountInfoResponse {
                'displayName': string;
                'email': string;
                'idToken': string;
                'kind': string;
                'newEmail': string;
                'photoUrl': string;
                'providerUserInfo': {
                    'displayName': string;
                    'photoUrl': string;
                    'providerId': string;
                }[];
            }

            interface SignupNewUserResponse {
                'displayName': string;
                'email': string;
                'idToken': string;
                'kind': string;
            }

            interface UploadAccountResponse {
                'error': {
                    'index': number;
                    'message': string;
                }[];
                'kind': string;
            }

            interface UserInfo {
                'disabled': boolean;
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'localId': string;
                'passwordHash': string;
                'passwordUpdatedAt': number;
                'photoUrl': string;
                'providerUserInfo': {
                    'displayName': string;
                    'email': string;
                    'federatedId': string;
                    'photoUrl': string;
                    'providerId': string;
                }[];
                'salt': string;
                'validSince': string;
                'version': number;
            }

            interface VerifyAssertionResponse {
                'action': string;
                'appInstallationUrl': string;
                'appScheme': string;
                'context': string;
                'dateOfBirth': string;
                'displayName': string;
                'email': string;
                'emailRecycled': boolean;
                'emailVerified': boolean;
                'federatedId': string;
                'firstName': string;
                'fullName': string;
                'idToken': string;
                'inputEmail': string;
                'kind': string;
                'language': string;
                'lastName': string;
                'localId': string;
                'needConfirmation': boolean;
                'needEmail': boolean;
                'nickName': string;
                'oauthAccessToken': string;
                'oauthAuthorizationCode': string;
                'oauthExpireIn': number;
                'oauthRequestToken': string;
                'oauthScope': string;
                'originalEmail': string;
                'photoUrl': string;
                'providerId': string;
                'timeZone': string;
                'verifiedProvider': string[];
            }

            interface VerifyCustomTokenResponse {
                'idToken': string;
                'kind': string;
            }

            interface VerifyPasswordResponse {
                'displayName': string;
                'email': string;
                'idToken': string;
                'kind': string;
                'localId': string;
                'oauthAccessToken': string;
                'oauthAuthorizationCode': string;
                'oauthExpireIn': number;
                'photoUrl': string;
                'registered': boolean;
            }

        }
    }
}