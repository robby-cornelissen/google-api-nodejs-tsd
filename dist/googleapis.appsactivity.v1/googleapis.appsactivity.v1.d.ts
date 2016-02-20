/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        appsactivity(version: string): any;
        appsactivity(version: 'v1'): appsactivity.v1.Appsactivity;
    }

    namespace appsactivity {
        namespace v1 {
            export interface Appsactivity {
                new(options: any): Appsactivity;

                'activities': {
                    'list': (parameters: {'drive.ancestorId'?: string, 'drive.fileId'?: string, 'groupingStrategy'?: string, 'pageSize'?: number, 'pageToken'?: string, 'source'?: string, 'userId'?: string}, callback: (error: any, body: ListActivitiesResponse, response: any) => void) => Request;
                };

            }

            interface Activity {
                'combinedEvent': Event;
                'singleEvents': Event[];
            }

            interface Event {
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

            interface ListActivitiesResponse {
                'activities': Activity[];
                'nextPageToken': string;
            }

            interface Move {
                'addedParents': Parent[];
                'removedParents': Parent[];
            }

            interface Parent {
                'id': string;
                'isRoot': boolean;
                'title': string;
            }

            interface Permission {
                'name': string;
                'permissionId': string;
                'role': string;
                'type': string;
                'user': User;
                'withLink': boolean;
            }

            interface PermissionChange {
                'addedPermissions': Permission[];
                'removedPermissions': Permission[];
            }

            interface Photo {
                'url': string;
            }

            interface Rename {
                'newTitle': string;
                'oldTitle': string;
            }

            interface Target {
                'id': string;
                'mimeType': string;
                'name': string;
            }

            interface User {
                'name': string;
                'photo': Photo;
            }

        }
    }
}