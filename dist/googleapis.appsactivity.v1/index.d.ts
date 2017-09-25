// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        appsactivity(version: string): any;
        appsactivity(version: 'v1'): appsactivity.v1.Appsactivity;
    }

    namespace appsactivity {
        namespace v1 {
            export interface Appsactivity {
                new(options: any): Appsactivity;

                'activities': {
                    'list': (parameters: { [key: string]: any; 'drive.ancestorId'?: string, 'drive.fileId'?: string, 'groupingStrategy'?: string, 'pageSize'?: number, 'pageToken'?: string, 'source'?: string, 'userId'?: string}, callback: (error: any, body: ListActivitiesResponse, response: any) => void) => Request;
                };

            }

            export interface Activity {
                'combinedEvent': Event;
                'singleEvents': Event[];
            }

            export interface Event {
                'additionalEventTypes': string[];
                'eventTimeMillis': string;
                'fromUserDeletion': boolean;
                'move': Move;
                'permissionChanges': PermissionChange[];
                'primaryEventType': string;
                'rename': Rename;
                'target': Target;
                'user': User;
            }

            export interface ListActivitiesResponse {
                'activities': Activity[];
                'nextPageToken': string;
            }

            export interface Move {
                'addedParents': Parent[];
                'removedParents': Parent[];
            }

            export interface Parent {
                'id': string;
                'isRoot': boolean;
                'title': string;
            }

            export interface Permission {
                'name': string;
                'permissionId': string;
                'role': string;
                'type': string;
                'user': User;
                'withLink': boolean;
            }

            export interface PermissionChange {
                'addedPermissions': Permission[];
                'removedPermissions': Permission[];
            }

            export interface Photo {
                'url': string;
            }

            export interface Rename {
                'newTitle': string;
                'oldTitle': string;
            }

            export interface Target {
                'id': string;
                'mimeType': string;
                'name': string;
            }

            export interface User {
                'isDeleted': boolean;
                'isMe': boolean;
                'name': string;
                'permissionId': string;
                'photo': Photo;
            }

        }
    }
}
