// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        firebaseremoteconfig(version: string): any;
        firebaseremoteconfig(version: 'v1'): firebaseremoteconfig.v1.Firebaseremoteconfig;
    }

    namespace firebaseremoteconfig {
        namespace v1 {
            export interface Firebaseremoteconfig {
                new(options: any): Firebaseremoteconfig;

                'projects': {
                    'updateRemoteConfig': (parameters: { [key: string]: any; 'validateOnly'?: boolean, 'project': string}, callback: (error: any, body: RemoteConfig, response: any) => void) => Request;
                    'getRemoteConfig': (parameters: { [key: string]: any; 'project': string}, callback: (error: any, body: RemoteConfig, response: any) => void) => Request;
                };

            }

            export interface RemoteConfigParameterValue {
                'useInAppDefault': boolean;
                'value': string;
            }

            export interface RemoteConfig {
                'parameters': {
                    [name: string]: RemoteConfigParameter
                ;
                };
                'conditions': RemoteConfigCondition[];
            }

            export interface RemoteConfigParameter {
                'defaultValue': RemoteConfigParameterValue;
                'conditionalValues': {
                    [name: string]: RemoteConfigParameterValue
                ;
                };
            }

            export interface RemoteConfigCondition {
                'tagColor': string;
                'name': string;
                'expression': string;
            }

        }
    }
}
