// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        drive(version: string): any;
        drive(version: 'v3'): drive.v3.Drive;
    }

    namespace drive {
        namespace v3 {
            export interface Drive {
                new(options: any): Drive;

                'about': {
                    'get': (parameters: any, callback: (error: any, body: About, response: any) => void) => Request;
                };
                'changes': {
                    'getStartPageToken': (parameters: any, callback: (error: any, body: StartPageToken, response: any) => void) => Request;
                    'list': (parameters: {'includeRemoved'?: boolean, 'pageSize'?: number, 'pageToken': string, 'restrictToMyDrive'?: boolean, 'spaces'?: string}, callback: (error: any, body: ChangeList, response: any) => void) => Request;
                    'watch': (parameters: {'includeRemoved'?: boolean, 'pageSize'?: number, 'pageToken': string, 'restrictToMyDrive'?: boolean, 'spaces'?: string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'comments': {
                    'create': (parameters: {'fileId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'delete': (parameters: {'commentId': string, 'fileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'commentId': string, 'fileId': string, 'includeDeleted'?: boolean}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string, 'includeDeleted'?: boolean, 'pageSize'?: number, 'pageToken'?: string, 'startModifiedTime'?: string}, callback: (error: any, body: CommentList, response: any) => void) => Request;
                    'update': (parameters: {'commentId': string, 'fileId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                };
                'files': {
                    'copy': (parameters: {'fileId': string, 'ignoreDefaultVisibility'?: boolean, 'keepRevisionForever'?: boolean, 'ocrLanguage'?: string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'create': (parameters: {'ignoreDefaultVisibility'?: boolean, 'keepRevisionForever'?: boolean, 'ocrLanguage'?: string, 'useContentAsIndexableText'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'delete': (parameters: {'fileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'emptyTrash': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'export': (parameters: {'fileId': string, 'mimeType': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'generateIds': (parameters: {'count'?: number, 'space'?: string}, callback: (error: any, body: GeneratedIds, response: any) => void) => Request;
                    'get': (parameters: {'acknowledgeAbuse'?: boolean, 'fileId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'list': (parameters: {'corpus'?: string, 'orderBy'?: string, 'pageSize'?: number, 'pageToken'?: string, 'q'?: string, 'spaces'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                    'update': (parameters: {'addParents'?: string, 'fileId': string, 'keepRevisionForever'?: boolean, 'ocrLanguage'?: string, 'removeParents'?: string, 'useContentAsIndexableText'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'watch': (parameters: {'acknowledgeAbuse'?: boolean, 'fileId': string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'permissions': {
                    'create': (parameters: {'emailMessage'?: string, 'fileId': string, 'sendNotificationEmail'?: boolean, 'transferOwnership'?: boolean}, callback: (error: any, body: Permission, response: any) => void) => Request;
                    'delete': (parameters: {'fileId': string, 'permissionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'fileId': string, 'permissionId': string}, callback: (error: any, body: Permission, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string}, callback: (error: any, body: PermissionList, response: any) => void) => Request;
                    'update': (parameters: {'fileId': string, 'permissionId': string, 'transferOwnership'?: boolean}, callback: (error: any, body: Permission, response: any) => void) => Request;
                };
                'replies': {
                    'create': (parameters: {'commentId': string, 'fileId': string}, callback: (error: any, body: Reply, response: any) => void) => Request;
                    'delete': (parameters: {'commentId': string, 'fileId': string, 'replyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'commentId': string, 'fileId': string, 'includeDeleted'?: boolean, 'replyId': string}, callback: (error: any, body: Reply, response: any) => void) => Request;
                    'list': (parameters: {'commentId': string, 'fileId': string, 'includeDeleted'?: boolean, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ReplyList, response: any) => void) => Request;
                    'update': (parameters: {'commentId': string, 'fileId': string, 'replyId': string}, callback: (error: any, body: Reply, response: any) => void) => Request;
                };
                'revisions': {
                    'delete': (parameters: {'fileId': string, 'revisionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'acknowledgeAbuse'?: boolean, 'fileId': string, 'revisionId': string}, callback: (error: any, body: Revision, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string}, callback: (error: any, body: RevisionList, response: any) => void) => Request;
                    'update': (parameters: {'fileId': string, 'revisionId': string}, callback: (error: any, body: Revision, response: any) => void) => Request;
                };

            }

            export interface About {
                'appInstalled': boolean;
                'exportFormats': {
                    [name: string]: string[]
                
                };
                'folderColorPalette': string[];
                'importFormats': {
                    [name: string]: string[]
                
                };
                'kind': string;
                'maxImportSizes': {
                    [name: string]: string
                
                };
                'maxUploadSize': string;
                'storageQuota': {
                    'limit': string;
                    'usage': string;
                    'usageInDrive': string;
                    'usageInDriveTrash': string;
                };
                'user': User;
            }

            export interface Change {
                'file': File;
                'fileId': string;
                'kind': string;
                'removed': boolean;
                'time': string;
            }

            export interface ChangeList {
                'changes': Change[];
                'kind': string;
                'newStartPageToken': string;
                'nextPageToken': string;
            }

            export interface Channel {
                'address': string;
                'expiration': string;
                'id': string;
                'kind': string;
                'params': {
                    [name: string]: string
                
                };
                'payload': boolean;
                'resourceId': string;
                'resourceUri': string;
                'token': string;
                'type': string;
            }

            export interface Comment {
                'anchor': string;
                'author': User;
                'content': string;
                'createdTime': string;
                'deleted': boolean;
                'htmlContent': string;
                'id': string;
                'kind': string;
                'modifiedTime': string;
                'quotedFileContent': {
                    'mimeType': string;
                    'value': string;
                };
                'replies': Reply[];
                'resolved': boolean;
            }

            export interface CommentList {
                'comments': Comment[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface File {
                'appProperties': {
                    [name: string]: string
                
                };
                'capabilities': {
                    'canComment': boolean;
                    'canCopy': boolean;
                    'canEdit': boolean;
                    'canReadRevisions': boolean;
                    'canShare': boolean;
                };
                'contentHints': {
                    'indexableText': string;
                    'thumbnail': {
                        'image': string;
                        'mimeType': string;
                    };
                };
                'createdTime': string;
                'description': string;
                'explicitlyTrashed': boolean;
                'fileExtension': string;
                'folderColorRgb': string;
                'fullFileExtension': string;
                'headRevisionId': string;
                'iconLink': string;
                'id': string;
                'imageMediaMetadata': {
                    'aperture': number;
                    'cameraMake': string;
                    'cameraModel': string;
                    'colorSpace': string;
                    'exposureBias': number;
                    'exposureMode': string;
                    'exposureTime': number;
                    'flashUsed': boolean;
                    'focalLength': number;
                    'height': number;
                    'isoSpeed': number;
                    'lens': string;
                    'location': {
                        'altitude': number;
                        'latitude': number;
                        'longitude': number;
                    };
                    'maxApertureValue': number;
                    'meteringMode': string;
                    'rotation': number;
                    'sensor': string;
                    'subjectDistance': number;
                    'time': string;
                    'whiteBalance': string;
                    'width': number;
                };
                'kind': string;
                'lastModifyingUser': User;
                'md5Checksum': string;
                'mimeType': string;
                'modifiedByMeTime': string;
                'modifiedTime': string;
                'name': string;
                'originalFilename': string;
                'ownedByMe': boolean;
                'owners': User[];
                'parents': string[];
                'permissions': Permission[];
                'properties': {
                    [name: string]: string
                
                };
                'quotaBytesUsed': string;
                'shared': boolean;
                'sharedWithMeTime': string;
                'sharingUser': User;
                'size': string;
                'spaces': string[];
                'starred': boolean;
                'thumbnailLink': string;
                'trashed': boolean;
                'version': string;
                'videoMediaMetadata': {
                    'durationMillis': string;
                    'height': number;
                    'width': number;
                };
                'viewedByMe': boolean;
                'viewedByMeTime': string;
                'viewersCanCopyContent': boolean;
                'webContentLink': string;
                'webViewLink': string;
                'writersCanShare': boolean;
            }

            export interface FileList {
                'files': File[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface GeneratedIds {
                'ids': string[];
                'kind': string;
                'space': string;
            }

            export interface Permission {
                'allowFileDiscovery': boolean;
                'displayName': string;
                'domain': string;
                'emailAddress': string;
                'id': string;
                'kind': string;
                'photoLink': string;
                'role': string;
                'type': string;
            }

            export interface PermissionList {
                'kind': string;
                'permissions': Permission[];
            }

            export interface Reply {
                'action': string;
                'author': User;
                'content': string;
                'createdTime': string;
                'deleted': boolean;
                'htmlContent': string;
                'id': string;
                'kind': string;
                'modifiedTime': string;
            }

            export interface ReplyList {
                'kind': string;
                'nextPageToken': string;
                'replies': Reply[];
            }

            export interface Revision {
                'id': string;
                'keepForever': boolean;
                'kind': string;
                'lastModifyingUser': User;
                'md5Checksum': string;
                'mimeType': string;
                'modifiedTime': string;
                'originalFilename': string;
                'publishAuto': boolean;
                'published': boolean;
                'publishedOutsideDomain': boolean;
                'size': string;
            }

            export interface RevisionList {
                'kind': string;
                'revisions': Revision[];
            }

            export interface StartPageToken {
                'kind': string;
                'startPageToken': string;
            }

            export interface User {
                'displayName': string;
                'emailAddress': string;
                'kind': string;
                'me': boolean;
                'permissionId': string;
                'photoLink': string;
            }

        }
    }
}