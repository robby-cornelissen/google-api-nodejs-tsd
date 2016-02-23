// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        groupssettings(version: string): any;
        groupssettings(version: 'v1'): groupssettings.v1.Groupssettings;
    }

    namespace groupssettings {
        namespace v1 {
            export interface Groupssettings {
                new(options: any): Groupssettings;

                'groups': {
                    'get': (parameters: {'groupUniqueId': string}, callback: (error: any, body: Groups, response: any) => void) => Request;
                    'patch': (parameters: {'groupUniqueId': string}, callback: (error: any, body: Groups, response: any) => void) => Request;
                    'update': (parameters: {'groupUniqueId': string}, callback: (error: any, body: Groups, response: any) => void) => Request;
                };

            }

            export interface Groups {
                'allowExternalMembers': string;
                'allowGoogleCommunication': string;
                'allowWebPosting': string;
                'archiveOnly': string;
                'customReplyTo': string;
                'defaultMessageDenyNotificationText': string;
                'description': string;
                'email': string;
                'includeInGlobalAddressList': string;
                'isArchived': string;
                'kind': string;
                'maxMessageBytes': number;
                'membersCanPostAsTheGroup': string;
                'messageDisplayFont': string;
                'messageModerationLevel': string;
                'name': string;
                'primaryLanguage': string;
                'replyTo': string;
                'sendMessageDenyNotification': string;
                'showInGroupDirectory': string;
                'spamModerationLevel': string;
                'whoCanContactOwner': string;
                'whoCanInvite': string;
                'whoCanJoin': string;
                'whoCanLeaveGroup': string;
                'whoCanPostMessage': string;
                'whoCanViewGroup': string;
                'whoCanViewMembership': string;
            }

        }
    }
}