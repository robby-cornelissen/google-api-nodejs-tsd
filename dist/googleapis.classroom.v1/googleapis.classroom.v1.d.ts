/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        classroom(version: string): any;
        classroom(version: 'v1'): classroom.v1.Classroom;
    }

    namespace classroom {
        namespace v1 {
            export interface Classroom {
                new(options: any): Classroom;

                'courses': {
                    'create': (parameters: any, callback: (error: any, body: Course, response: any) => void) => Request;
                    'get': (parameters: {'id': string}, callback: (error: any, body: Course, response: any) => void) => Request;
                    'update': (parameters: {'id': string}, callback: (error: any, body: Course, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'updateMask'?: string}, callback: (error: any, body: Course, response: any) => void) => Request;
                    'delete': (parameters: {'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: {'studentId'?: string, 'teacherId'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListCoursesResponse, response: any) => void) => Request;
                
                    'aliases': {
                        'create': (parameters: {'courseId': string}, callback: (error: any, body: CourseAlias, response: any) => void) => Request;
                        'delete': (parameters: {'courseId': string, 'alias': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: {'courseId': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListCourseAliasesResponse, response: any) => void) => Request;
                    };
                    'teachers': {
                        'create': (parameters: {'courseId': string}, callback: (error: any, body: Teacher, response: any) => void) => Request;
                        'get': (parameters: {'courseId': string, 'userId': string}, callback: (error: any, body: Teacher, response: any) => void) => Request;
                        'delete': (parameters: {'courseId': string, 'userId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: {'courseId': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListTeachersResponse, response: any) => void) => Request;
                    };
                    'students': {
                        'create': (parameters: {'courseId': string, 'enrollmentCode'?: string}, callback: (error: any, body: Student, response: any) => void) => Request;
                        'get': (parameters: {'courseId': string, 'userId': string}, callback: (error: any, body: Student, response: any) => void) => Request;
                        'delete': (parameters: {'courseId': string, 'userId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: {'courseId': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListStudentsResponse, response: any) => void) => Request;
                    };
                };
                'invitations': {
                    'create': (parameters: any, callback: (error: any, body: Invitation, response: any) => void) => Request;
                    'get': (parameters: {'id': string}, callback: (error: any, body: Invitation, response: any) => void) => Request;
                    'delete': (parameters: {'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: {'userId'?: string, 'courseId'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListInvitationsResponse, response: any) => void) => Request;
                    'accept': (parameters: {'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                };
                'userProfiles': {
                    'get': (parameters: {'userId': string}, callback: (error: any, body: UserProfile, response: any) => void) => Request;
                };

            }

            interface Course {
                'id': string;
                'name': string;
                'section': string;
                'descriptionHeading': string;
                'description': string;
                'room': string;
                'ownerId': string;
                'creationTime': string;
                'updateTime': string;
                'enrollmentCode': string;
                'courseState': string;
                'alternateLink': string;
            }

            interface Empty {}

            interface ListCoursesResponse {
                'courses': Course[];
                'nextPageToken': string;
            }

            interface CourseAlias {
                'alias': string;
            }

            interface ListCourseAliasesResponse {
                'aliases': CourseAlias[];
                'nextPageToken': string;
            }

            interface Invitation {
                'id': string;
                'userId': string;
                'courseId': string;
                'role': string;
            }

            interface ListInvitationsResponse {
                'invitations': Invitation[];
                'nextPageToken': string;
            }

            interface UserProfile {
                'id': string;
                'name': Name;
                'emailAddress': string;
                'photoUrl': string;
                'permissions': GlobalPermission[];
            }

            interface Name {
                'givenName': string;
                'familyName': string;
                'fullName': string;
            }

            interface GlobalPermission {
                'permission': string;
            }

            interface Teacher {
                'courseId': string;
                'userId': string;
                'profile': UserProfile;
            }

            interface ListTeachersResponse {
                'teachers': Teacher[];
                'nextPageToken': string;
            }

            interface Student {
                'courseId': string;
                'userId': string;
                'profile': UserProfile;
            }

            interface ListStudentsResponse {
                'students': Student[];
                'nextPageToken': string;
            }

        }
    }
}