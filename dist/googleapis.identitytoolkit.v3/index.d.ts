// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
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
                    'getProjectConfig': (parameters: { [key: string]: any; 'delegatedProjectNumber'?: string, 'projectNumber'?: string}, callback: (error: any, body: IdentitytoolkitRelyingpartyGetProjectConfigResponse, response: any) => void) => Request;
                    'getPublicKeys': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartyGetPublicKeysResponse, response: any) => void) => Request;
                    'getRecaptchaParam': (parameters: any, callback: (error: any, body: GetRecaptchaParamResponse, response: any) => void) => Request;
                    'resetPassword': (parameters: any, callback: (error: any, body: ResetPasswordResponse, response: any) => void) => Request;
                    'sendVerificationCode': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartySendVerificationCodeResponse, response: any) => void) => Request;
                    'setAccountInfo': (parameters: any, callback: (error: any, body: SetAccountInfoResponse, response: any) => void) => Request;
                    'setProjectConfig': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartySetProjectConfigResponse, response: any) => void) => Request;
                    'signOutUser': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartySignOutUserResponse, response: any) => void) => Request;
                    'signupNewUser': (parameters: any, callback: (error: any, body: SignupNewUserResponse, response: any) => void) => Request;
                    'uploadAccount': (parameters: any, callback: (error: any, body: UploadAccountResponse, response: any) => void) => Request;
                    'verifyAssertion': (parameters: any, callback: (error: any, body: VerifyAssertionResponse, response: any) => void) => Request;
                    'verifyCustomToken': (parameters: any, callback: (error: any, body: VerifyCustomTokenResponse, response: any) => void) => Request;
                    'verifyPassword': (parameters: any, callback: (error: any, body: VerifyPasswordResponse, response: any) => void) => Request;
                    'verifyPhoneNumber': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse, response: any) => void) => Request;
                };

            }

            export interface CreateAuthUriResponse {
                'allProviders': string[];
                'authUri': string;
                'captchaRequired': boolean;
                'forExistingProvider': boolean;
                'kind': string;
                'providerId': string;
                'registered': boolean;
                'sessionId': string;
            }

            export interface DeleteAccountResponse {
                'kind': string;
            }

            export interface DownloadAccountResponse {
                'kind': string;
                'nextPageToken': string;
                'users': UserInfo[];
            }

            export interface EmailTemplate {
                'body': string;
                'format': string;
                'from': string;
                'fromDisplayName': string;
                'replyTo': string;
                'subject': string;
            }

            export interface GetAccountInfoResponse {
                'kind': string;
                'users': UserInfo[];
            }

            export interface GetOobConfirmationCodeResponse {
                'email': string;
                'kind': string;
                'oobCode': string;
            }

            export interface GetRecaptchaParamResponse {
                'kind': string;
                'recaptchaSiteKey': string;
                'recaptchaStoken': string;
            }

            export interface IdentitytoolkitRelyingpartyCreateAuthUriRequest {
                'appId': string;
                'authFlowType': string;
                'clientId': string;
                'context': string;
                'continueUri': string;
                'customParameter': {
                    [name: string]: string
                ;
                };
                'hostedDomain': string;
                'identifier': string;
                'oauthConsumerKey': string;
                'oauthScope': string;
                'openidRealm': string;
                'otaApp': string;
                'providerId': string;
                'sessionId': string;
            }

            export interface IdentitytoolkitRelyingpartyDeleteAccountRequest {
                'delegatedProjectNumber': string;
                'idToken': string;
                'localId': string;
            }

            export interface IdentitytoolkitRelyingpartyDownloadAccountRequest {
                'delegatedProjectNumber': string;
                'maxResults': number;
                'nextPageToken': string;
                'targetProjectId': string;
            }

            export interface IdentitytoolkitRelyingpartyGetAccountInfoRequest {
                'delegatedProjectNumber': string;
                'email': string[];
                'idToken': string;
                'localId': string[];
                'phoneNumber': string[];
            }

            export interface IdentitytoolkitRelyingpartyGetProjectConfigResponse {
                'allowPasswordUser': boolean;
                'apiKey': string;
                'authorizedDomains': string[];
                'changeEmailTemplate': EmailTemplate;
                'dynamicLinksDomain': string;
                'enableAnonymousUser': boolean;
                'idpConfig': IdpConfig[];
                'legacyResetPasswordTemplate': EmailTemplate;
                'projectId': string;
                'resetPasswordTemplate': EmailTemplate;
                'useEmailSending': boolean;
                'verifyEmailTemplate': EmailTemplate;
            }

            export interface IdentitytoolkitRelyingpartyGetPublicKeysResponse {
                [name: string]: string
            ;
            }

            export interface IdentitytoolkitRelyingpartyResetPasswordRequest {
                'email': string;
                'newPassword': string;
                'oldPassword': string;
                'oobCode': string;
            }

            export interface IdentitytoolkitRelyingpartySendVerificationCodeRequest {
                'iosReceipt': string;
                'iosSecret': string;
                'phoneNumber': string;
                'recaptchaToken': string;
            }

            export interface IdentitytoolkitRelyingpartySendVerificationCodeResponse {
                'sessionInfo': string;
            }

            export interface IdentitytoolkitRelyingpartySetAccountInfoRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'createdAt': string;
                'customAttributes': string;
                'delegatedProjectNumber': string;
                'deleteAttribute': string[];
                'deleteProvider': string[];
                'disableUser': boolean;
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'idToken': string;
                'instanceId': string;
                'lastLoginAt': string;
                'localId': string;
                'oobCode': string;
                'password': string;
                'phoneNumber': string;
                'photoUrl': string;
                'provider': string[];
                'returnSecureToken': boolean;
                'upgradeToFederatedLogin': boolean;
                'validSince': string;
            }

            export interface IdentitytoolkitRelyingpartySetProjectConfigRequest {
                'allowPasswordUser': boolean;
                'apiKey': string;
                'authorizedDomains': string[];
                'changeEmailTemplate': EmailTemplate;
                'delegatedProjectNumber': string;
                'enableAnonymousUser': boolean;
                'idpConfig': IdpConfig[];
                'legacyResetPasswordTemplate': EmailTemplate;
                'resetPasswordTemplate': EmailTemplate;
                'useEmailSending': boolean;
                'verifyEmailTemplate': EmailTemplate;
            }

            export interface IdentitytoolkitRelyingpartySetProjectConfigResponse {
                'projectId': string;
            }

            export interface IdentitytoolkitRelyingpartySignOutUserRequest {
                'instanceId': string;
                'localId': string;
            }

            export interface IdentitytoolkitRelyingpartySignOutUserResponse {
                'localId': string;
            }

            export interface IdentitytoolkitRelyingpartySignupNewUserRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'disabled': boolean;
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'idToken': string;
                'instanceId': string;
                'localId': string;
                'password': string;
                'phoneNumber': string;
                'photoUrl': string;
            }

            export interface IdentitytoolkitRelyingpartyUploadAccountRequest {
                'allowOverwrite': boolean;
                'blockSize': number;
                'cpuMemCost': number;
                'delegatedProjectNumber': string;
                'dkLen': number;
                'hashAlgorithm': string;
                'memoryCost': number;
                'parallelization': number;
                'rounds': number;
                'saltSeparator': string;
                'sanityCheck': boolean;
                'signerKey': string;
                'targetProjectId': string;
                'users': UserInfo[];
            }

            export interface IdentitytoolkitRelyingpartyVerifyAssertionRequest {
                'autoCreate': boolean;
                'delegatedProjectNumber': string;
                'idToken': string;
                'instanceId': string;
                'pendingIdToken': string;
                'postBody': string;
                'requestUri': string;
                'returnIdpCredential': boolean;
                'returnRefreshToken': boolean;
                'returnSecureToken': boolean;
                'sessionId': string;
            }

            export interface IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
                'delegatedProjectNumber': string;
                'instanceId': string;
                'returnSecureToken': boolean;
                'token': string;
            }

            export interface IdentitytoolkitRelyingpartyVerifyPasswordRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'delegatedProjectNumber': string;
                'email': string;
                'idToken': string;
                'instanceId': string;
                'password': string;
                'pendingIdToken': string;
                'returnSecureToken': boolean;
            }

            export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
                'code': string;
                'idToken': string;
                'operation': string;
                'phoneNumber': string;
                'sessionInfo': string;
                'temporaryProof': string;
                'verificationProof': string;
            }

            export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse {
                'expiresIn': string;
                'idToken': string;
                'isNewUser': boolean;
                'localId': string;
                'phoneNumber': string;
                'refreshToken': string;
                'temporaryProof': string;
                'temporaryProofExpiresIn': string;
                'verificationProof': string;
                'verificationProofExpiresIn': string;
            }

            export interface IdpConfig {
                'clientId': string;
                'enabled': boolean;
                'experimentPercent': number;
                'provider': string;
                'secret': string;
                'whitelistedAudiences': string[];
            }

            export interface Relyingparty {
                'androidInstallApp': boolean;
                'androidMinimumVersion': string;
                'androidPackageName': string;
                'canHandleCodeInApp': boolean;
                'captchaResp': string;
                'challenge': string;
                'continueUrl': string;
                'email': string;
                'iOSAppStoreId': string;
                'iOSBundleId': string;
                'idToken': string;
                'kind': string;
                'newEmail': string;
                'requestType': string;
                'userIp': string;
            }

            export interface ResetPasswordResponse {
                'email': string;
                'kind': string;
                'newEmail': string;
                'requestType': string;
            }

            export interface SetAccountInfoResponse {
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'expiresIn': string;
                'idToken': string;
                'kind': string;
                'localId': string;
                'newEmail': string;
                'passwordHash': string;
                'photoUrl': string;
                'providerUserInfo': {
                    'displayName': string;
                    'federatedId': string;
                    'photoUrl': string;
                    'providerId': string;
                }[];
                'refreshToken': string;
            }

            export interface SignupNewUserResponse {
                'displayName': string;
                'email': string;
                'expiresIn': string;
                'idToken': string;
                'kind': string;
                'localId': string;
                'refreshToken': string;
            }

            export interface UploadAccountResponse {
                'error': {
                    'index': number;
                    'message': string;
                }[];
                'kind': string;
            }

            export interface UserInfo {
                'createdAt': string;
                'customAttributes': string;
                'customAuth': boolean;
                'disabled': boolean;
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'lastLoginAt': string;
                'localId': string;
                'passwordHash': string;
                'passwordUpdatedAt': number;
                'phoneNumber': string;
                'photoUrl': string;
                'providerUserInfo': {
                    'displayName': string;
                    'email': string;
                    'federatedId': string;
                    'phoneNumber': string;
                    'photoUrl': string;
                    'providerId': string;
                    'rawId': string;
                    'screenName': string;
                }[];
                'rawPassword': string;
                'salt': string;
                'screenName': string;
                'validSince': string;
                'version': number;
            }

            export interface VerifyAssertionResponse {
                'action': string;
                'appInstallationUrl': string;
                'appScheme': string;
                'context': string;
                'dateOfBirth': string;
                'displayName': string;
                'email': string;
                'emailRecycled': boolean;
                'emailVerified': boolean;
                'errorMessage': string;
                'expiresIn': string;
                'federatedId': string;
                'firstName': string;
                'fullName': string;
                'idToken': string;
                'inputEmail': string;
                'isNewUser': boolean;
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
                'oauthIdToken': string;
                'oauthRequestToken': string;
                'oauthScope': string;
                'oauthTokenSecret': string;
                'originalEmail': string;
                'photoUrl': string;
                'providerId': string;
                'rawUserInfo': string;
                'refreshToken': string;
                'screenName': string;
                'timeZone': string;
                'verifiedProvider': string[];
            }

            export interface VerifyCustomTokenResponse {
                'expiresIn': string;
                'idToken': string;
                'isNewUser': boolean;
                'kind': string;
                'refreshToken': string;
            }

            export interface VerifyPasswordResponse {
                'displayName': string;
                'email': string;
                'expiresIn': string;
                'idToken': string;
                'kind': string;
                'localId': string;
                'oauthAccessToken': string;
                'oauthAuthorizationCode': string;
                'oauthExpireIn': number;
                'photoUrl': string;
                'refreshToken': string;
                'registered': boolean;
            }

        }
    }
}
