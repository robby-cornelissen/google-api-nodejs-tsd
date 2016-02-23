// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        drive(version: string): any;
        drive(version: 'v2'): drive.v2.Drive;
    }

    namespace drive {
        namespace v2 {
            export interface Drive {
                new(options: any): Drive;

                'about': {
                    'get': (parameters: {'includeSubscribed'?: boolean, 'maxChangeIdCount'?: string, 'startChangeId'?: string}, callback: (error: any, body: About, response: any) => void) => Request;
                };
                'apps': {
                    'get': (parameters: {'appId': string}, callback: (error: any, body: App, response: any) => void) => Request;
                    'list': (parameters: {'appFilterExtensions'?: string, 'appFilterMimeTypes'?: string, 'languageCode'?: string}, callback: (error: any, body: AppList, response: any) => void) => Request;
                };
                'changes': {
                    'get': (parameters: {'changeId': string}, callback: (error: any, body: Change, response: any) => void) => Request;
                    'list': (parameters: {'includeDeleted'?: boolean, 'includeSubscribed'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'spaces'?: string, 'startChangeId'?: string}, callback: (error: any, body: ChangeList, response: any) => void) => Request;
                    'watch': (parameters: {'includeDeleted'?: boolean, 'includeSubscribed'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'spaces'?: string, 'startChangeId'?: string}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'channels': {
                    'stop': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'children': {
                    'delete': (parameters: {'childId': string, 'folderId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'childId': string, 'folderId': string}, callback: (error: any, body: ChildReference, response: any) => void) => Request;
                    'insert': (parameters: {'folderId': string}, callback: (error: any, body: ChildReference, response: any) => void) => Request;
                    'list': (parameters: {'folderId': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'q'?: string}, callback: (error: any, body: ChildList, response: any) => void) => Request;
                };
                'comments': {
                    'delete': (parameters: {'commentId': string, 'fileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'commentId': string, 'fileId': string, 'includeDeleted'?: boolean}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'insert': (parameters: {'fileId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string, 'includeDeleted'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'updatedMin'?: string}, callback: (error: any, body: CommentList, response: any) => void) => Request;
                    'patch': (parameters: {'commentId': string, 'fileId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'update': (parameters: {'commentId': string, 'fileId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                };
                'files': {
                    'copy': (parameters: {'convert'?: boolean, 'fileId': string, 'ocr'?: boolean, 'ocrLanguage'?: string, 'pinned'?: boolean, 'timedTextLanguage'?: string, 'timedTextTrackName'?: string, 'visibility'?: string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'delete': (parameters: {'fileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'emptyTrash': (parameters: any, callback: (error: any, body: any, response: any) => void) => Request;
                    'export': (parameters: {'fileId': string, 'mimeType': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'generateIds': (parameters: {'maxResults'?: number, 'space'?: string}, callback: (error: any, body: GeneratedIds, response: any) => void) => Request;
                    'get': (parameters: {'acknowledgeAbuse'?: boolean, 'fileId': string, 'projection'?: string, 'revisionId'?: string, 'updateViewedDate'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'insert': (parameters: {'convert'?: boolean, 'ocr'?: boolean, 'ocrLanguage'?: string, 'pinned'?: boolean, 'timedTextLanguage'?: string, 'timedTextTrackName'?: string, 'useContentAsIndexableText'?: boolean, 'visibility'?: string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'list': (parameters: {'corpus'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'projection'?: string, 'q'?: string, 'spaces'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                    'patch': (parameters: {'addParents'?: string, 'convert'?: boolean, 'fileId': string, 'modifiedDateBehavior'?: string, 'newRevision'?: boolean, 'ocr'?: boolean, 'ocrLanguage'?: string, 'pinned'?: boolean, 'removeParents'?: string, 'setModifiedDate'?: boolean, 'timedTextLanguage'?: string, 'timedTextTrackName'?: string, 'updateViewedDate'?: boolean, 'useContentAsIndexableText'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'touch': (parameters: {'fileId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'trash': (parameters: {'fileId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'untrash': (parameters: {'fileId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'update': (parameters: {'addParents'?: string, 'convert'?: boolean, 'fileId': string, 'modifiedDateBehavior'?: string, 'newRevision'?: boolean, 'ocr'?: boolean, 'ocrLanguage'?: string, 'pinned'?: boolean, 'removeParents'?: string, 'setModifiedDate'?: boolean, 'timedTextLanguage'?: string, 'timedTextTrackName'?: string, 'updateViewedDate'?: boolean, 'useContentAsIndexableText'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'watch': (parameters: {'acknowledgeAbuse'?: boolean, 'fileId': string, 'projection'?: string, 'revisionId'?: string, 'updateViewedDate'?: boolean}, callback: (error: any, body: Channel, response: any) => void) => Request;
                };
                'parents': {
                    'delete': (parameters: {'fileId': string, 'parentId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'fileId': string, 'parentId': string}, callback: (error: any, body: ParentReference, response: any) => void) => Request;
                    'insert': (parameters: {'fileId': string}, callback: (error: any, body: ParentReference, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string}, callback: (error: any, body: ParentList, response: any) => void) => Request;
                };
                'permissions': {
                    'delete': (parameters: {'fileId': string, 'permissionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'fileId': string, 'permissionId': string}, callback: (error: any, body: Permission, response: any) => void) => Request;
                    'getIdForEmail': (parameters: {'email': string}, callback: (error: any, body: PermissionId, response: any) => void) => Request;
                    'insert': (parameters: {'emailMessage'?: string, 'fileId': string, 'sendNotificationEmails'?: boolean}, callback: (error: any, body: Permission, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string}, callback: (error: any, body: PermissionList, response: any) => void) => Request;
                    'patch': (parameters: {'fileId': string, 'permissionId': string, 'transferOwnership'?: boolean}, callback: (error: any, body: Permission, response: any) => void) => Request;
                    'update': (parameters: {'fileId': string, 'permissionId': string, 'transferOwnership'?: boolean}, callback: (error: any, body: Permission, response: any) => void) => Request;
                };
                'properties': {
                    'delete': (parameters: {'fileId': string, 'propertyKey': string, 'visibility'?: string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'fileId': string, 'propertyKey': string, 'visibility'?: string}, callback: (error: any, body: Property, response: any) => void) => Request;
                    'insert': (parameters: {'fileId': string}, callback: (error: any, body: Property, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string}, callback: (error: any, body: PropertyList, response: any) => void) => Request;
                    'patch': (parameters: {'fileId': string, 'propertyKey': string, 'visibility'?: string}, callback: (error: any, body: Property, response: any) => void) => Request;
                    'update': (parameters: {'fileId': string, 'propertyKey': string, 'visibility'?: string}, callback: (error: any, body: Property, response: any) => void) => Request;
                };
                'realtime': {
                    'get': (parameters: {'fileId': string, 'revision'?: number}, callback: (error: any, body: any, response: any) => void) => Request;
                    'update': (parameters: {'baseRevision'?: string, 'fileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                };
                'replies': {
                    'delete': (parameters: {'commentId': string, 'fileId': string, 'replyId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'commentId': string, 'fileId': string, 'includeDeleted'?: boolean, 'replyId': string}, callback: (error: any, body: CommentReply, response: any) => void) => Request;
                    'insert': (parameters: {'commentId': string, 'fileId': string}, callback: (error: any, body: CommentReply, response: any) => void) => Request;
                    'list': (parameters: {'commentId': string, 'fileId': string, 'includeDeleted'?: boolean, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: CommentReplyList, response: any) => void) => Request;
                    'patch': (parameters: {'commentId': string, 'fileId': string, 'replyId': string}, callback: (error: any, body: CommentReply, response: any) => void) => Request;
                    'update': (parameters: {'commentId': string, 'fileId': string, 'replyId': string}, callback: (error: any, body: CommentReply, response: any) => void) => Request;
                };
                'revisions': {
                    'delete': (parameters: {'fileId': string, 'revisionId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'fileId': string, 'revisionId': string}, callback: (error: any, body: Revision, response: any) => void) => Request;
                    'list': (parameters: {'fileId': string}, callback: (error: any, body: RevisionList, response: any) => void) => Request;
                    'patch': (parameters: {'fileId': string, 'revisionId': string}, callback: (error: any, body: Revision, response: any) => void) => Request;
                    'update': (parameters: {'fileId': string, 'revisionId': string}, callback: (error: any, body: Revision, response: any) => void) => Request;
                };

            }

            export interface About {
                'additionalRoleInfo': {
                    'roleSets': {
                        'additionalRoles': string[];
                        'primaryRole': string;
                    }[];
                    'type': string;
                }[];
                'domainSharingPolicy': string;
                'etag': string;
                'exportFormats': {
                    'source': string;
                    'targets': string[];
                }[];
                'features': {
                    'featureName': string;
                    'featureRate': number;
                }[];
                'folderColorPalette': string[];
                'importFormats': {
                    'source': string;
                    'targets': string[];
                }[];
                'isCurrentAppInstalled': boolean;
                'kind': string;
                'languageCode': string;
                'largestChangeId': string;
                'maxUploadSizes': {
                    'size': string;
                    'type': string;
                }[];
                'name': string;
                'permissionId': string;
                'quotaBytesByService': {
                    'bytesUsed': string;
                    'serviceName': string;
                }[];
                'quotaBytesTotal': string;
                'quotaBytesUsed': string;
                'quotaBytesUsedAggregate': string;
                'quotaBytesUsedInTrash': string;
                'quotaType': string;
                'remainingChangeIds': string;
                'rootFolderId': string;
                'selfLink': string;
                'user': User;
            }

            export interface App {
                'authorized': boolean;
                'createInFolderTemplate': string;
                'createUrl': string;
                'hasDriveWideScope': boolean;
                'icons': {
                    'category': string;
                    'iconUrl': string;
                    'size': number;
                }[];
                'id': string;
                'installed': boolean;
                'kind': string;
                'longDescription': string;
                'name': string;
                'objectType': string;
                'openUrlTemplate': string;
                'primaryFileExtensions': string[];
                'primaryMimeTypes': string[];
                'productId': string;
                'productUrl': string;
                'secondaryFileExtensions': string[];
                'secondaryMimeTypes': string[];
                'shortDescription': string;
                'supportsCreate': boolean;
                'supportsImport': boolean;
                'supportsMultiOpen': boolean;
                'supportsOfflineCreate': boolean;
                'useByDefault': boolean;
            }

            export interface AppList {
                'defaultAppIds': string[];
                'etag': string;
                'items': App[];
                'kind': string;
                'selfLink': string;
            }

            export interface Change {
                'deleted': boolean;
                'file': File;
                'fileId': string;
                'id': string;
                'kind': string;
                'modificationDate': string;
                'selfLink': string;
            }

            export interface ChangeList {
                'etag': string;
                'items': Change[];
                'kind': string;
                'largestChangeId': string;
                'nextLink': string;
                'nextPageToken': string;
                'selfLink': string;
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

            export interface ChildList {
                'etag': string;
                'items': ChildReference[];
                'kind': string;
                'nextLink': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface ChildReference {
                'childLink': string;
                'id': string;
                'kind': string;
                'selfLink': string;
            }

            export interface Comment {
                'anchor': string;
                'author': User;
                'commentId': string;
                'content': string;
                'context': {
                    'type': string;
                    'value': string;
                };
                'createdDate': string;
                'deleted': boolean;
                'fileId': string;
                'fileTitle': string;
                'htmlContent': string;
                'kind': string;
                'modifiedDate': string;
                'replies': CommentReply[];
                'selfLink': string;
                'status': string;
            }

            export interface CommentList {
                'items': Comment[];
                'kind': string;
                'nextLink': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface CommentReply {
                'author': User;
                'content': string;
                'createdDate': string;
                'deleted': boolean;
                'htmlContent': string;
                'kind': string;
                'modifiedDate': string;
                'replyId': string;
                'verb': string;
            }

            export interface CommentReplyList {
                'items': CommentReply[];
                'kind': string;
                'nextLink': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface File {
                'alternateLink': string;
                'appDataContents': boolean;
                'canComment': boolean;
                'canReadRevisions': boolean;
                'copyable': boolean;
                'createdDate': string;
                'defaultOpenWithLink': string;
                'description': string;
                'downloadUrl': string;
                'editable': boolean;
                'embedLink': string;
                'etag': string;
                'explicitlyTrashed': boolean;
                'exportLinks': {
                    [name: string]: string
                
                };
                'fileExtension': string;
                'fileSize': string;
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
                    'date': string;
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
                    'whiteBalance': string;
                    'width': number;
                };
                'indexableText': {
                    'text': string;
                };
                'kind': string;
                'labels': {
                    'hidden': boolean;
                    'restricted': boolean;
                    'starred': boolean;
                    'trashed': boolean;
                    'viewed': boolean;
                };
                'lastModifyingUser': User;
                'lastModifyingUserName': string;
                'lastViewedByMeDate': string;
                'markedViewedByMeDate': string;
                'md5Checksum': string;
                'mimeType': string;
                'modifiedByMeDate': string;
                'modifiedDate': string;
                'openWithLinks': {
                    [name: string]: string
                
                };
                'originalFilename': string;
                'ownedByMe': boolean;
                'ownerNames': string[];
                'owners': User[];
                'parents': ParentReference[];
                'permissions': Permission[];
                'properties': Property[];
                'quotaBytesUsed': string;
                'selfLink': string;
                'shareable': boolean;
                'shared': boolean;
                'sharedWithMeDate': string;
                'sharingUser': User;
                'spaces': string[];
                'thumbnail': {
                    'image': string;
                    'mimeType': string;
                };
                'thumbnailLink': string;
                'title': string;
                'userPermission': Permission;
                'version': string;
                'videoMediaMetadata': {
                    'durationMillis': string;
                    'height': number;
                    'width': number;
                };
                'webContentLink': string;
                'webViewLink': string;
                'writersCanShare': boolean;
            }

            export interface FileList {
                'etag': string;
                'items': File[];
                'kind': string;
                'nextLink': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            export interface GeneratedIds {
                'ids': string[];
                'kind': string;
                'space': string;
            }

            export interface ParentList {
                'etag': string;
                'items': ParentReference[];
                'kind': string;
                'selfLink': string;
            }

            export interface ParentReference {
                'id': string;
                'isRoot': boolean;
                'kind': string;
                'parentLink': string;
                'selfLink': string;
            }

            export interface Permission {
                'additionalRoles': string[];
                'authKey': string;
                'domain': string;
                'emailAddress': string;
                'etag': string;
                'id': string;
                'kind': string;
                'name': string;
                'photoLink': string;
                'role': string;
                'selfLink': string;
                'type': string;
                'value': string;
                'withLink': boolean;
            }

            export interface PermissionId {
                'id': string;
                'kind': string;
            }

            export interface PermissionList {
                'etag': string;
                'items': Permission[];
                'kind': string;
                'selfLink': string;
            }

            export interface Property {
                'etag': string;
                'key': string;
                'kind': string;
                'selfLink': string;
                'value': string;
                'visibility': string;
            }

            export interface PropertyList {
                'etag': string;
                'items': Property[];
                'kind': string;
                'selfLink': string;
            }

            export interface Revision {
                'downloadUrl': string;
                'etag': string;
                'exportLinks': {
                    [name: string]: string
                
                };
                'fileSize': string;
                'id': string;
                'kind': string;
                'lastModifyingUser': User;
                'lastModifyingUserName': string;
                'md5Checksum': string;
                'mimeType': string;
                'modifiedDate': string;
                'originalFilename': string;
                'pinned': boolean;
                'publishAuto': boolean;
                'published': boolean;
                'publishedLink': string;
                'publishedOutsideDomain': boolean;
                'selfLink': string;
            }

            export interface RevisionList {
                'etag': string;
                'items': Revision[];
                'kind': string;
                'selfLink': string;
            }

            export interface User {
                'displayName': string;
                'emailAddress': string;
                'isAuthenticatedUser': boolean;
                'kind': string;
                'permissionId': string;
                'picture': {
                    'url': string;
                };
            }

        }
    }
}