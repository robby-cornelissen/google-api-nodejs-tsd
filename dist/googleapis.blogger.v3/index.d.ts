// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        blogger(version: string): any;
        blogger(version: 'v3'): blogger.v3.Blogger;
    }

    namespace blogger {
        namespace v3 {
            export interface Blogger {
                new(options: any): Blogger;

                'blogUserInfos': {
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'maxPosts'?: number, 'userId': string}, callback: (error: any, body: BlogUserInfo, response: any) => void) => Request;
                };
                'blogs': {
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'maxPosts'?: number, 'view'?: string}, callback: (error: any, body: Blog, response: any) => void) => Request;
                    'getByUrl': (parameters: { [key: string]: any; 'url': string, 'view'?: string}, callback: (error: any, body: Blog, response: any) => void) => Request;
                    'listByUser': (parameters: { [key: string]: any; 'fetchUserInfo'?: boolean, 'role'?: string, 'status'?: string, 'userId': string, 'view'?: string}, callback: (error: any, body: BlogList, response: any) => void) => Request;
                };
                'comments': {
                    'approve': (parameters: { [key: string]: any; 'blogId': string, 'commentId': string, 'postId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'blogId': string, 'commentId': string, 'postId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'commentId': string, 'postId': string, 'view'?: string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'blogId': string, 'endDate'?: string, 'fetchBodies'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'postId': string, 'startDate'?: string, 'status'?: string, 'view'?: string}, callback: (error: any, body: CommentList, response: any) => void) => Request;
                    'listByBlog': (parameters: { [key: string]: any; 'blogId': string, 'endDate'?: string, 'fetchBodies'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'startDate'?: string, 'status'?: string}, callback: (error: any, body: CommentList, response: any) => void) => Request;
                    'markAsSpam': (parameters: { [key: string]: any; 'blogId': string, 'commentId': string, 'postId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'removeContent': (parameters: { [key: string]: any; 'blogId': string, 'commentId': string, 'postId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                };
                'pageViews': {
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'range'?: string}, callback: (error: any, body: Pageviews, response: any) => void) => Request;
                };
                'pages': {
                    'delete': (parameters: { [key: string]: any; 'blogId': string, 'pageId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'pageId': string, 'view'?: string}, callback: (error: any, body: Page, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'blogId': string, 'isDraft'?: boolean}, callback: (error: any, body: Page, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'blogId': string, 'fetchBodies'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'status'?: string, 'view'?: string}, callback: (error: any, body: PageList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'blogId': string, 'pageId': string, 'publish'?: boolean, 'revert'?: boolean}, callback: (error: any, body: Page, response: any) => void) => Request;
                    'publish': (parameters: { [key: string]: any; 'blogId': string, 'pageId': string}, callback: (error: any, body: Page, response: any) => void) => Request;
                    'revert': (parameters: { [key: string]: any; 'blogId': string, 'pageId': string}, callback: (error: any, body: Page, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'blogId': string, 'pageId': string, 'publish'?: boolean, 'revert'?: boolean}, callback: (error: any, body: Page, response: any) => void) => Request;
                };
                'postUserInfos': {
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'maxComments'?: number, 'postId': string, 'userId': string}, callback: (error: any, body: PostUserInfo, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'blogId': string, 'endDate'?: string, 'fetchBodies'?: boolean, 'labels'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'startDate'?: string, 'status'?: string, 'userId': string, 'view'?: string}, callback: (error: any, body: PostUserInfosList, response: any) => void) => Request;
                };
                'posts': {
                    'delete': (parameters: { [key: string]: any; 'blogId': string, 'postId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'fetchBody'?: boolean, 'fetchImages'?: boolean, 'maxComments'?: number, 'postId': string, 'view'?: string}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'getByPath': (parameters: { [key: string]: any; 'blogId': string, 'maxComments'?: number, 'path': string, 'view'?: string}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'blogId': string, 'fetchBody'?: boolean, 'fetchImages'?: boolean, 'isDraft'?: boolean}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'blogId': string, 'endDate'?: string, 'fetchBodies'?: boolean, 'fetchImages'?: boolean, 'labels'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'startDate'?: string, 'status'?: string, 'view'?: string}, callback: (error: any, body: PostList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'blogId': string, 'fetchBody'?: boolean, 'fetchImages'?: boolean, 'maxComments'?: number, 'postId': string, 'publish'?: boolean, 'revert'?: boolean}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'publish': (parameters: { [key: string]: any; 'blogId': string, 'postId': string, 'publishDate'?: string}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'revert': (parameters: { [key: string]: any; 'blogId': string, 'postId': string}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; 'blogId': string, 'fetchBodies'?: boolean, 'orderBy'?: string, 'q': string}, callback: (error: any, body: PostList, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'blogId': string, 'fetchBody'?: boolean, 'fetchImages'?: boolean, 'maxComments'?: number, 'postId': string, 'publish'?: boolean, 'revert'?: boolean}, callback: (error: any, body: Post, response: any) => void) => Request;
                };
                'users': {
                    'get': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                };

            }

            export interface Blog {
                'customMetaData': string;
                'description': string;
                'id': string;
                'kind': string;
                'locale': {
                    'country': string;
                    'language': string;
                    'variant': string;
                };
                'name': string;
                'pages': {
                    'selfLink': string;
                    'totalItems': number;
                };
                'posts': {
                    'items': Post[];
                    'selfLink': string;
                    'totalItems': number;
                };
                'published': string;
                'selfLink': string;
                'status': string;
                'updated': string;
                'url': string;
            }

            export interface BlogList {
                'blogUserInfos': BlogUserInfo[];
                'items': Blog[];
                'kind': string;
            }

            export interface BlogPerUserInfo {
                'blogId': string;
                'hasAdminAccess': boolean;
                'kind': string;
                'photosAlbumKey': string;
                'role': string;
                'userId': string;
            }

            export interface BlogUserInfo {
                'blog': Blog;
                'blog_user_info': BlogPerUserInfo;
                'kind': string;
            }

            export interface Comment {
                'author': {
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'url': string;
                };
                'blog': {
                    'id': string;
                };
                'content': string;
                'id': string;
                'inReplyTo': {
                    'id': string;
                };
                'kind': string;
                'post': {
                    'id': string;
                };
                'published': string;
                'selfLink': string;
                'status': string;
                'updated': string;
            }

            export interface CommentList {
                'etag': string;
                'items': Comment[];
                'kind': string;
                'nextPageToken': string;
                'prevPageToken': string;
            }

            export interface Page {
                'author': {
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'url': string;
                };
                'blog': {
                    'id': string;
                };
                'content': string;
                'etag': string;
                'id': string;
                'kind': string;
                'published': string;
                'selfLink': string;
                'status': string;
                'title': string;
                'updated': string;
                'url': string;
            }

            export interface PageList {
                'etag': string;
                'items': Page[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Pageviews {
                'blogId': string;
                'counts': {
                    'count': string;
                    'timeRange': string;
                }[];
                'kind': string;
            }

            export interface Post {
                'author': {
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'url': string;
                };
                'blog': {
                    'id': string;
                };
                'content': string;
                'customMetaData': string;
                'etag': string;
                'id': string;
                'images': {
                    'url': string;
                }[];
                'kind': string;
                'labels': string[];
                'location': {
                    'lat': number;
                    'lng': number;
                    'name': string;
                    'span': string;
                };
                'published': string;
                'readerComments': string;
                'replies': {
                    'items': Comment[];
                    'selfLink': string;
                    'totalItems': string;
                };
                'selfLink': string;
                'status': string;
                'title': string;
                'titleLink': string;
                'updated': string;
                'url': string;
            }

            export interface PostList {
                'etag': string;
                'items': Post[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface PostPerUserInfo {
                'blogId': string;
                'hasEditAccess': boolean;
                'kind': string;
                'postId': string;
                'userId': string;
            }

            export interface PostUserInfo {
                'kind': string;
                'post': Post;
                'post_user_info': PostPerUserInfo;
            }

            export interface PostUserInfosList {
                'items': PostUserInfo[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface User {
                'about': string;
                'blogs': {
                    'selfLink': string;
                };
                'created': string;
                'displayName': string;
                'id': string;
                'kind': string;
                'locale': {
                    'country': string;
                    'language': string;
                    'variant': string;
                };
                'selfLink': string;
                'url': string;
            }

        }
    }
}
