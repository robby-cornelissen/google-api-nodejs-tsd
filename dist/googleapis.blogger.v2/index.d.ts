// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        blogger(version: string): any;
        blogger(version: 'v2'): blogger.v2.Blogger;
    }

    namespace blogger {
        namespace v2 {
            export interface Blogger {
                new(options: any): Blogger;

                'blogs': {
                    'get': (parameters: { [key: string]: any; 'blogId': string}, callback: (error: any, body: Blog, response: any) => void) => Request;
                };
                'comments': {
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'commentId': string, 'postId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'blogId': string, 'fetchBodies'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'postId': string, 'startDate'?: string}, callback: (error: any, body: CommentList, response: any) => void) => Request;
                };
                'pages': {
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'pageId': string}, callback: (error: any, body: Page, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'blogId': string, 'fetchBodies'?: boolean}, callback: (error: any, body: PageList, response: any) => void) => Request;
                };
                'posts': {
                    'get': (parameters: { [key: string]: any; 'blogId': string, 'postId': string}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'blogId': string, 'fetchBodies'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'startDate'?: string}, callback: (error: any, body: PostList, response: any) => void) => Request;
                };
                'users': {
                    'get': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;

                    'blogs': {
                        'list': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: BlogList, response: any) => void) => Request;
                    };
                };

            }

            export interface Blog {
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
                    'selfLink': string;
                    'totalItems': number;
                };
                'published': string;
                'selfLink': string;
                'updated': string;
                'url': string;
            }

            export interface BlogList {
                'items': Blog[];
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
                'updated': string;
            }

            export interface CommentList {
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
                'id': string;
                'kind': string;
                'published': string;
                'selfLink': string;
                'title': string;
                'updated': string;
                'url': string;
            }

            export interface PageList {
                'items': Page[];
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
                'id': string;
                'kind': string;
                'labels': string[];
                'published': string;
                'replies': {
                    'selfLink': string;
                    'totalItems': string;
                };
                'selfLink': string;
                'title': string;
                'updated': string;
                'url': string;
            }

            export interface PostList {
                'items': Post[];
                'kind': string;
                'nextPageToken': string;
                'prevPageToken': string;
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
