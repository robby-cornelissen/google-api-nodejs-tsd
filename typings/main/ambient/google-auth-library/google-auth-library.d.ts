// TODO complete this definition file and factor it out of this project

declare module "google-auth-library" {
    import {Request} from "request";

    function GoogleAuth(): void;

    module GoogleAuth {
        export interface GoogleAuth {
            IAMAuth: IAMAuth;
            Compute: Compute;
            JWT: JWT;
            JWTAccess: JWTAccess;
            OAuth2: OAuth2Client;
            UserRefreshClient: UserRefreshClient;

            new(): GoogleAuth;

            getApplicationDefault(callback?: Function): void;

            fromJSON(json: any, callback?: Function): void;

            fromStream(stream: any, callback?: Function): void;
        }

        export interface IAMAuth {
            new(selector: any, token: any): IAMAuth;

            getRequestMetadata(unusedUri: string, metadataFn: (err: Error, headers: any) => void);

            createScopedRequired(): boolean;
        }

        export interface AuthClient {
            new(): AuthClient;

            transporter: any;

            setCredentials(credentials: any): void;
        }

        export interface OAuth2Client extends AuthClient {
            opts: any;
            credentials: any;

            new (clientId: string, clientSecret: string, redirectUri: string, opts?: any): OAuth2Client;

            generateAuthUrl(opts?: any);

            getToken(code: string, callback?: (err: Error, token: any, response: any) => void);

            refreshAccessToken(callback: (err: Error, token: any, response: any) => void);

            getAccessToken(callback: (err: Error, token: any, response: any) => void);

            getRequestMetadata(unusedUri: string, metadataFn: (err: Error, headers: any, response: any) => void);

            revokeToken(token: string, callback?: Function);

            revokeCredentials(callback?: Function);

            request(opts: any, callback: Function);

            verifyIdToken(idToken: string, audience: string, callback: Function);

            getFederatedSignonCerts(callback: Function);

            verifySignedJwtWithCerts(jwt: string, certs: any[], requiredAudience: string, issuers?: any[], maxExpiry?: string);

            decodeBase64(b64String: string): string;
        }

        export interface Compute extends OAuth2Client {
            new();

            createScopedRequired(): boolean;
        }

        export interface JWT extends OAuth2Client {
            email: string;
            keyFile: string;
            key: string;
            scopes: string | string[];
            subject: string;
            gToken: any;

            new (email: string, keyFile: string, key: string, scopes: string | string[], subject: string): JWT;

            createdScoped(scopes: string | string[]): JWT;

            createScopedRequired: boolean;

            authorize(callback?: (err: Error, result: any) => void);

            fromJSON(json: any, callback?: Function): void;

            fromStream(stream: any, callback?: Function): void;
        }

        export interface JWTAccess {
            email: string;
            key: string;

            new(email: string, key: string): JWTAccess;

            createScopedRequired: boolean;

            getRequestMetadata(authUri: string, metadataFn: (err: Error, headers: any) => void);

            fromJSON(json: any, callback?: Function): void;

            fromStream(stream: any, callback?: Function): void;
        }

        export interface UserRefreshClient extends OAuth2Client {
            new(clientId: string, clientSecret: string, refreshToken: string): UserRefreshClient;

            fromJSON(json: any, callback?: Function): void;

            fromStream(stream: any, callback?: Function): void;
        }

        export interface LoginTicket {
            envelope: string;
            payload: string;

            new(envelope: string, payload: string): LoginTicket;

            getUserId(): string;

            getAttributes(): {
                envelope: string;
                payload: string;
            };
        }

        // Below not exported
        export interface DefaultTransporter {
            USER_AGENT: string;

            new(): DefaultTransporter;

            configure(opts: any): any;

            request(opts: any, callback?: Function): Request;
        }

        export interface PemVerifier {
            new(): PemVerifier;

            verify(pubkey: any, data: any, signature: any, encoding: string): boolean;
        }
    }

    export = GoogleAuth;
}