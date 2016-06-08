// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

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
                    'courseWork': {
                        'create': (parameters: {'courseId': string}, callback: (error: any, body: CourseWork, response: any) => void) => Request;
                        'get': (parameters: {'courseId': string, 'id': string}, callback: (error: any, body: CourseWork, response: any) => void) => Request;
                        'list': (parameters: {'courseId': string, 'courseWorkStates'?: string, 'orderBy'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListCourseWorkResponse, response: any) => void) => Request;
                    
                        'studentSubmissions': {
                            'get': (parameters: {'courseId': string, 'courseWorkId': string, 'id': string}, callback: (error: any, body: StudentSubmission, response: any) => void) => Request;
                            'patch': (parameters: {'courseId': string, 'courseWorkId': string, 'id': string, 'updateMask'?: string}, callback: (error: any, body: StudentSubmission, response: any) => void) => Request;
                            'list': (parameters: {'courseId': string, 'courseWorkId': string, 'userId'?: string, 'states'?: string, 'late'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListStudentSubmissionsResponse, response: any) => void) => Request;
                            'turnIn': (parameters: {'courseId': string, 'courseWorkId': string, 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'reclaim': (parameters: {'courseId': string, 'courseWorkId': string, 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'return': (parameters: {'courseId': string, 'courseWorkId': string, 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'modifyAttachments': (parameters: {'courseId': string, 'courseWorkId': string, 'id': string}, callback: (error: any, body: StudentSubmission, response: any) => void) => Request;
                        };
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

            export interface Course {
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
                'teacherGroupEmail': string;
                'courseGroupEmail': string;
                'teacherFolder': DriveFolder;
                'courseMaterialSets': CourseMaterialSet[];
            }

            export interface DriveFolder {
                'id': string;
                'title': string;
                'alternateLink': string;
            }

            export interface CourseMaterialSet {
                'title': string;
                'materials': CourseMaterial[];
            }

            export interface CourseMaterial {
                'driveFile': DriveFile;
                'youTubeVideo': YouTubeVideo;
                'link': Link;
                'form': Form;
            }

            export interface DriveFile {
                'id': string;
                'title': string;
                'alternateLink': string;
                'thumbnailUrl': string;
            }

            export interface YouTubeVideo {
                'id': string;
                'title': string;
                'alternateLink': string;
                'thumbnailUrl': string;
            }

            export interface Link {
                'url': string;
                'title': string;
                'thumbnailUrl': string;
            }

            export interface Form {
                'formUrl': string;
                'responseUrl': string;
                'title': string;
                'thumbnailUrl': string;
            }

            export interface Empty {}

            export interface ListCoursesResponse {
                'courses': Course[];
                'nextPageToken': string;
            }

            export interface CourseAlias {
                'alias': string;
            }

            export interface ListCourseAliasesResponse {
                'aliases': CourseAlias[];
                'nextPageToken': string;
            }

            export interface Invitation {
                'id': string;
                'userId': string;
                'courseId': string;
                'role': string;
            }

            export interface ListInvitationsResponse {
                'invitations': Invitation[];
                'nextPageToken': string;
            }

            export interface UserProfile {
                'id': string;
                'name': Name;
                'emailAddress': string;
                'photoUrl': string;
                'permissions': GlobalPermission[];
            }

            export interface Name {
                'givenName': string;
                'familyName': string;
                'fullName': string;
            }

            export interface GlobalPermission {
                'permission': string;
            }

            export interface Teacher {
                'courseId': string;
                'userId': string;
                'profile': UserProfile;
            }

            export interface ListTeachersResponse {
                'teachers': Teacher[];
                'nextPageToken': string;
            }

            export interface Student {
                'courseId': string;
                'userId': string;
                'profile': UserProfile;
                'studentWorkFolder': DriveFolder;
            }

            export interface ListStudentsResponse {
                'students': Student[];
                'nextPageToken': string;
            }

            export interface CourseWork {
                'courseId': string;
                'id': string;
                'title': string;
                'description': string;
                'materials': Material[];
                'state': string;
                'alternateLink': string;
                'creationTime': string;
                'updateTime': string;
                'dueDate': Date;
                'dueTime': TimeOfDay;
                'maxPoints': number;
                'workType': string;
                'associatedWithDeveloper': boolean;
                'submissionModificationMode': string;
                'assignment': Assignment;
                'multipleChoiceQuestion': MultipleChoiceQuestion;
            }

            export interface Material {
                'driveFile': SharedDriveFile;
                'youtubeVideo': YouTubeVideo;
                'link': Link;
                'form': Form;
            }

            export interface SharedDriveFile {
                'driveFile': DriveFile;
                'shareMode': string;
            }

            export interface Date {
                'year': number;
                'month': number;
                'day': number;
            }

            export interface TimeOfDay {
                'hours': number;
                'minutes': number;
                'seconds': number;
                'nanos': number;
            }

            export interface Assignment {
                'studentWorkFolder': DriveFolder;
            }

            export interface MultipleChoiceQuestion {
                'choices': string[];
            }

            export interface ListCourseWorkResponse {
                'courseWork': CourseWork[];
                'nextPageToken': string;
            }

            export interface StudentSubmission {
                'courseId': string;
                'courseWorkId': string;
                'id': string;
                'userId': string;
                'creationTime': string;
                'updateTime': string;
                'state': string;
                'late': boolean;
                'draftGrade': number;
                'assignedGrade': number;
                'alternateLink': string;
                'courseWorkType': string;
                'associatedWithDeveloper': boolean;
                'assignmentSubmission': AssignmentSubmission;
                'shortAnswerSubmission': ShortAnswerSubmission;
                'multipleChoiceSubmission': MultipleChoiceSubmission;
            }

            export interface AssignmentSubmission {
                'attachments': Attachment[];
            }

            export interface Attachment {
                'driveFile': DriveFile;
                'youTubeVideo': YouTubeVideo;
                'link': Link;
                'form': Form;
            }

            export interface ShortAnswerSubmission {
                'answer': string;
            }

            export interface MultipleChoiceSubmission {
                'answer': string;
            }

            export interface ListStudentSubmissionsResponse {
                'studentSubmissions': StudentSubmission[];
                'nextPageToken': string;
            }

            export interface TurnInStudentSubmissionRequest {}

            export interface ReclaimStudentSubmissionRequest {}

            export interface ReturnStudentSubmissionRequest {}

            export interface ModifyAttachmentsRequest {
                'addAttachments': Attachment[];
            }

        }
    }
}