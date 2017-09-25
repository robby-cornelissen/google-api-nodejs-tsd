// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        plus(version: string): any;
        plus(version: 'v1'): plus.v1.Plus;
    }

    namespace plus {
        namespace v1 {
            export interface Plus {
                new(options: any): Plus;

                'activities': {
                    'get': (parameters: { [key: string]: any; 'activityId': string}, callback: (error: any, body: Activity, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'collection': string, 'maxResults'?: number, 'pageToken'?: string, 'userId': string}, callback: (error: any, body: ActivityFeed, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; 'language'?: string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'query': string}, callback: (error: any, body: ActivityFeed, response: any) => void) => Request;
                };
                'comments': {
                    'get': (parameters: { [key: string]: any; 'commentId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'activityId': string, 'maxResults'?: number, 'pageToken'?: string, 'sortOrder'?: string}, callback: (error: any, body: CommentFeed, response: any) => void) => Request;
                };
                'people': {
                    'get': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: Person, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'collection': string, 'maxResults'?: number, 'orderBy'?: string, 'pageToken'?: string, 'userId': string}, callback: (error: any, body: PeopleFeed, response: any) => void) => Request;
                    'listByActivity': (parameters: { [key: string]: any; 'activityId': string, 'collection': string, 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: PeopleFeed, response: any) => void) => Request;
                    'search': (parameters: { [key: string]: any; 'language'?: string, 'maxResults'?: number, 'pageToken'?: string, 'query': string}, callback: (error: any, body: PeopleFeed, response: any) => void) => Request;
                };

            }

            export interface Acl {
                'description': string;
                'items': PlusAclentryResource[];
                'kind': string;
            }

            export interface Activity {
                'access': Acl;
                'actor': {
                    'clientSpecificActorInfo': {
                        'youtubeActorInfo': {
                            'channelId': string;
                        };
                    };
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'name': {
                        'familyName': string;
                        'givenName': string;
                    };
                    'url': string;
                    'verification': {
                        'adHocVerified': string;
                    };
                };
                'address': string;
                'annotation': string;
                'crosspostSource': string;
                'etag': string;
                'geocode': string;
                'id': string;
                'kind': string;
                'location': Place;
                'object': {
                    'actor': {
                        'clientSpecificActorInfo': {
                            'youtubeActorInfo': {
                                'channelId': string;
                            };
                        };
                        'displayName': string;
                        'id': string;
                        'image': {
                            'url': string;
                        };
                        'url': string;
                        'verification': {
                            'adHocVerified': string;
                        };
                    };
                    'attachments': {
                        'content': string;
                        'displayName': string;
                        'embed': {
                            'type': string;
                            'url': string;
                        };
                        'fullImage': {
                            'height': number;
                            'type': string;
                            'url': string;
                            'width': number;
                        };
                        'id': string;
                        'image': {
                            'height': number;
                            'type': string;
                            'url': string;
                            'width': number;
                        };
                        'objectType': string;
                        'thumbnails': {
                            'description': string;
                            'image': {
                                'height': number;
                                'type': string;
                                'url': string;
                                'width': number;
                            };
                            'url': string;
                        }[];
                        'url': string;
                    }[];
                    'content': string;
                    'id': string;
                    'objectType': string;
                    'originalContent': string;
                    'plusoners': {
                        'selfLink': string;
                        'totalItems': number;
                    };
                    'replies': {
                        'selfLink': string;
                        'totalItems': number;
                    };
                    'resharers': {
                        'selfLink': string;
                        'totalItems': number;
                    };
                    'url': string;
                };
                'placeId': string;
                'placeName': string;
                'provider': {
                    'title': string;
                };
                'published': string;
                'radius': string;
                'title': string;
                'updated': string;
                'url': string;
                'verb': string;
            }

            export interface ActivityFeed {
                'etag': string;
                'id': string;
                'items': Activity[];
                'kind': string;
                'nextLink': string;
                'nextPageToken': string;
                'selfLink': string;
                'title': string;
                'updated': string;
            }

            export interface Comment {
                'actor': {
                    'clientSpecificActorInfo': {
                        'youtubeActorInfo': {
                            'channelId': string;
                        };
                    };
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'url': string;
                    'verification': {
                        'adHocVerified': string;
                    };
                };
                'etag': string;
                'id': string;
                'inReplyTo': {
                    'id': string;
                    'url': string;
                }[];
                'kind': string;
                'object': {
                    'content': string;
                    'objectType': string;
                    'originalContent': string;
                };
                'plusoners': {
                    'totalItems': number;
                };
                'published': string;
                'selfLink': string;
                'updated': string;
                'verb': string;
            }

            export interface CommentFeed {
                'etag': string;
                'id': string;
                'items': Comment[];
                'kind': string;
                'nextLink': string;
                'nextPageToken': string;
                'title': string;
                'updated': string;
            }

            export interface PeopleFeed {
                'etag': string;
                'items': Person[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
                'title': string;
                'totalItems': number;
            }

            export interface Person {
                'aboutMe': string;
                'ageRange': {
                    'max': number;
                    'min': number;
                };
                'birthday': string;
                'braggingRights': string;
                'circledByCount': number;
                'cover': {
                    'coverInfo': {
                        'leftImageOffset': number;
                        'topImageOffset': number;
                    };
                    'coverPhoto': {
                        'height': number;
                        'url': string;
                        'width': number;
                    };
                    'layout': string;
                };
                'currentLocation': string;
                'displayName': string;
                'domain': string;
                'emails': {
                    'type': string;
                    'value': string;
                }[];
                'etag': string;
                'gender': string;
                'id': string;
                'image': {
                    'isDefault': boolean;
                    'url': string;
                };
                'isPlusUser': boolean;
                'kind': string;
                'language': string;
                'name': {
                    'familyName': string;
                    'formatted': string;
                    'givenName': string;
                    'honorificPrefix': string;
                    'honorificSuffix': string;
                    'middleName': string;
                };
                'nickname': string;
                'objectType': string;
                'occupation': string;
                'organizations': {
                    'department': string;
                    'description': string;
                    'endDate': string;
                    'location': string;
                    'name': string;
                    'primary': boolean;
                    'startDate': string;
                    'title': string;
                    'type': string;
                }[];
                'placesLived': {
                    'primary': boolean;
                    'value': string;
                }[];
                'plusOneCount': number;
                'relationshipStatus': string;
                'skills': string;
                'tagline': string;
                'url': string;
                'urls': {
                    'label': string;
                    'type': string;
                    'value': string;
                }[];
                'verified': boolean;
            }

            export interface Place {
                'address': {
                    'formatted': string;
                };
                'displayName': string;
                'id': string;
                'kind': string;
                'position': {
                    'latitude': number;
                    'longitude': number;
                };
            }

            export interface PlusAclentryResource {
                'displayName': string;
                'id': string;
                'type': string;
            }

        }
    }
}
