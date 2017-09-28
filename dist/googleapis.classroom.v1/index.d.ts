// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        classroom(version: string): any;
        classroom(version: 'v1'): classroom.v1.Classroom;
    }

    namespace classroom {
        namespace v1 {
            export interface Classroom {
                new(options: any): Classroom;

                'invitations': {
                    'accept': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'courseId'?: string, 'pageToken'?: string, 'userId'?: string, 'pageSize'?: number}, callback: (error: any, body: ListInvitationsResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Invitation, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Invitation, response: any) => void) => Request;
                };
                'registrations': {
                    'delete': (parameters: { [key: string]: any; 'registrationId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Registration, response: any) => void) => Request;
                };
                'userProfiles': {
                    'get': (parameters: { [key: string]: any; 'userId': string}, callback: (error: any, body: UserProfile, response: any) => void) => Request;

                    'guardianInvitations': {
                        'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'invitationId': string, 'studentId': string}, callback: (error: any, body: GuardianInvitation, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'invitationId': string, 'studentId': string}, callback: (error: any, body: GuardianInvitation, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'states'?: string, 'invitedEmailAddress'?: string, 'studentId': string}, callback: (error: any, body: ListGuardianInvitationsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'studentId': string}, callback: (error: any, body: GuardianInvitation, response: any) => void) => Request;
                    };
                    'guardians': {
                        'delete': (parameters: { [key: string]: any; 'studentId': string, 'guardianId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'guardianId': string, 'studentId': string}, callback: (error: any, body: Guardian, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'invitedEmailAddress'?: string, 'studentId': string, 'pageToken'?: string}, callback: (error: any, body: ListGuardiansResponse, response: any) => void) => Request;
                    };
                };
                'courses': {
                    'get': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Course, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'updateMask'?: string, 'id': string}, callback: (error: any, body: Course, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Course, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'studentId'?: string, 'pageToken'?: string, 'pageSize'?: number, 'courseStates'?: string, 'teacherId'?: string}, callback: (error: any, body: ListCoursesResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Course, response: any) => void) => Request;

                    'announcements': {
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'orderBy'?: string, 'pageSize'?: number, 'courseId': string, 'announcementStates'?: string}, callback: (error: any, body: ListAnnouncementsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'courseId': string}, callback: (error: any, body: Announcement, response: any) => void) => Request;
                        'modifyAssignees': (parameters: { [key: string]: any; 'courseId': string, 'id': string}, callback: (error: any, body: Announcement, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'courseId': string, 'id': string}, callback: (error: any, body: Announcement, response: any) => void) => Request;
                        'patch': (parameters: { [key: string]: any; 'courseId': string, 'id': string, 'updateMask'?: string}, callback: (error: any, body: Announcement, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'courseId': string, 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    };
                    'aliases': {
                        'delete': (parameters: { [key: string]: any; 'courseId': string, 'alias': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'courseId': string}, callback: (error: any, body: ListCourseAliasesResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'courseId': string}, callback: (error: any, body: CourseAlias, response: any) => void) => Request;
                    };
                    'students': {
                        'delete': (parameters: { [key: string]: any; 'courseId': string, 'userId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'pageSize'?: number, 'courseId': string}, callback: (error: any, body: ListStudentsResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'userId': string, 'courseId': string}, callback: (error: any, body: Student, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'courseId': string, 'enrollmentCode'?: string}, callback: (error: any, body: Student, response: any) => void) => Request;
                    };
                    'courseWork': {
                        'patch': (parameters: { [key: string]: any; 'courseId': string, 'id': string, 'updateMask'?: string}, callback: (error: any, body: CourseWork, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'courseId': string, 'id': string}, callback: (error: any, body: CourseWork, response: any) => void) => Request;
                        'delete': (parameters: { [key: string]: any; 'courseId': string, 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageToken'?: string, 'orderBy'?: string, 'pageSize'?: number, 'courseWorkStates'?: string, 'courseId': string}, callback: (error: any, body: ListCourseWorkResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'courseId': string}, callback: (error: any, body: CourseWork, response: any) => void) => Request;
                        'modifyAssignees': (parameters: { [key: string]: any; 'id': string, 'courseId': string}, callback: (error: any, body: CourseWork, response: any) => void) => Request;

                        'studentSubmissions': {
                            'patch': (parameters: { [key: string]: any; 'courseWorkId': string, 'courseId': string, 'id': string, 'updateMask'?: string}, callback: (error: any, body: StudentSubmission, response: any) => void) => Request;
                            'get': (parameters: { [key: string]: any; 'courseWorkId': string, 'courseId': string, 'id': string}, callback: (error: any, body: StudentSubmission, response: any) => void) => Request;
                            'return': (parameters: { [key: string]: any; 'courseWorkId': string, 'courseId': string, 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'reclaim': (parameters: { [key: string]: any; 'id': string, 'courseWorkId': string, 'courseId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'turnIn': (parameters: { [key: string]: any; 'courseWorkId': string, 'courseId': string, 'id': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                            'list': (parameters: { [key: string]: any; 'userId'?: string, 'courseWorkId': string, 'courseId': string, 'late'?: string, 'pageToken'?: string, 'states'?: string, 'pageSize'?: number}, callback: (error: any, body: ListStudentSubmissionsResponse, response: any) => void) => Request;
                            'modifyAttachments': (parameters: { [key: string]: any; 'courseId': string, 'id': string, 'courseWorkId': string}, callback: (error: any, body: StudentSubmission, response: any) => void) => Request;
                        };
                    };
                    'teachers': {
                        'delete': (parameters: { [key: string]: any; 'courseId': string, 'userId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'courseId': string, 'pageToken'?: string}, callback: (error: any, body: ListTeachersResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'userId': string, 'courseId': string}, callback: (error: any, body: Teacher, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'courseId': string}, callback: (error: any, body: Teacher, response: any) => void) => Request;
                    };
                };

            }

            export interface Attachment {
                'youTubeVideo': YouTubeVideo;
                'driveFile': DriveFile;
                'form': Form;
                'link': Link;
            }

            export interface ListAnnouncementsResponse {
                'nextPageToken': string;
                'announcements': Announcement[];
            }

            export interface TimeOfDay {
                'nanos': number;
                'seconds': number;
                'minutes': number;
                'hours': number;
            }

            export interface ListCoursesResponse {
                'courses': Course[];
                'nextPageToken': string;
            }

            export interface Form {
                'thumbnailUrl': string;
                'responseUrl': string;
                'formUrl': string;
                'title': string;
            }

            export interface ModifyCourseWorkAssigneesRequest {
                'modifyIndividualStudentsOptions': ModifyIndividualStudentsOptions;
                'assigneeMode': string;
            }

            export interface ListGuardiansResponse {
                'guardians': Guardian[];
                'nextPageToken': string;
            }

            export interface CourseAlias {
                'alias': string;
            }

            export interface ListCourseAliasesResponse {
                'aliases': CourseAlias[];
                'nextPageToken': string;
            }

            export interface ListGuardianInvitationsResponse {
                'nextPageToken': string;
                'guardianInvitations': GuardianInvitation[];
            }

            export interface IndividualStudentsOptions {
                'studentIds': string[];
            }

            export interface MultipleChoiceSubmission {
                'answer': string;
            }

            export interface Registration {
                'registrationId': string;
                'expiryTime': string;
                'cloudPubsubTopic': CloudPubsubTopic;
                'feed': Feed;
            }

            export interface CourseMaterial {
                'youTubeVideo': YouTubeVideo;
                'driveFile': DriveFile;
                'form': Form;
                'link': Link;
            }

            export interface MultipleChoiceQuestion {
                'choices': string[];
            }

            export interface Course {
                'creationTime': string;
                'teacherFolder': DriveFolder;
                'name': string;
                'section': string;
                'id': string;
                'room': string;
                'courseGroupEmail': string;
                'courseMaterialSets': CourseMaterialSet[];
                'enrollmentCode': string;
                'descriptionHeading': string;
                'updateTime': string;
                'calendarId': string;
                'alternateLink': string;
                'guardiansEnabled': boolean;
                'ownerId': string;
                'courseState': string;
                'description': string;
                'teacherGroupEmail': string;
            }

            export interface DriveFile {
                'id': string;
                'title': string;
                'alternateLink': string;
                'thumbnailUrl': string;
            }

            export interface ReturnStudentSubmissionRequest {}

            export interface ReclaimStudentSubmissionRequest {}

            export interface CourseRosterChangesInfo {
                'courseId': string;
            }

            export interface CourseWork {
                'id': string;
                'dueTime': TimeOfDay;
                'title': string;
                'materials': Material[];
                'associatedWithDeveloper': boolean;
                'updateTime': string;
                'alternateLink': string;
                'assigneeMode': string;
                'maxPoints': number;
                'workType': string;
                'assignment': Assignment;
                'multipleChoiceQuestion': MultipleChoiceQuestion;
                'description': string;
                'scheduledTime': string;
                'creationTime': string;
                'creatorUserId': string;
                'individualStudentsOptions': IndividualStudentsOptions;
                'dueDate': Date;
                'submissionModificationMode': string;
                'state': string;
                'courseId': string;
            }

            export interface Guardian {
                'studentId': string;
                'invitedEmailAddress': string;
                'guardianId': string;
                'guardianProfile': UserProfile;
            }

            export interface ListStudentsResponse {
                'nextPageToken': string;
                'students': Student[];
            }

            export interface UserProfile {
                'emailAddress': string;
                'photoUrl': string;
                'permissions': GlobalPermission[];
                'name': Name;
                'id': string;
                'verifiedTeacher': boolean;
            }

            export interface Announcement {
                'materials': Material[];
                'updateTime': string;
                'assigneeMode': string;
                'alternateLink': string;
                'scheduledTime': string;
                'creationTime': string;
                'creatorUserId': string;
                'individualStudentsOptions': IndividualStudentsOptions;
                'state': string;
                'text': string;
                'courseId': string;
                'id': string;
            }

            export interface ModifyIndividualStudentsOptions {
                'addStudentIds': string[];
                'removeStudentIds': string[];
            }

            export interface DriveFolder {
                'id': string;
                'title': string;
                'alternateLink': string;
            }

            export interface SubmissionHistory {
                'gradeHistory': GradeHistory;
                'stateHistory': StateHistory;
            }

            export interface ShortAnswerSubmission {
                'answer': string;
            }

            export interface ListStudentSubmissionsResponse {
                'nextPageToken': string;
                'studentSubmissions': StudentSubmission[];
            }

            export interface StudentSubmission {
                'late': boolean;
                'draftGrade': number;
                'courseWorkType': string;
                'creationTime': string;
                'state': string;
                'userId': string;
                'courseWorkId': string;
                'courseId': string;
                'id': string;
                'submissionHistory': SubmissionHistory[];
                'assignedGrade': number;
                'multipleChoiceSubmission': MultipleChoiceSubmission;
                'assignmentSubmission': AssignmentSubmission;
                'associatedWithDeveloper': boolean;
                'shortAnswerSubmission': ShortAnswerSubmission;
                'updateTime': string;
                'alternateLink': string;
            }

            export interface ModifyAttachmentsRequest {
                'addAttachments': Attachment[];
            }

            export interface YouTubeVideo {
                'id': string;
                'title': string;
                'alternateLink': string;
                'thumbnailUrl': string;
            }

            export interface ListInvitationsResponse {
                'nextPageToken': string;
                'invitations': Invitation[];
            }

            export interface CloudPubsubTopic {
                'topicName': string;
            }

            export interface GuardianInvitation {
                'creationTime': string;
                'invitationId': string;
                'state': string;
                'studentId': string;
                'invitedEmailAddress': string;
            }

            export interface StateHistory {
                'state': string;
                'stateTimestamp': string;
                'actorUserId': string;
            }

            export interface CourseMaterialSet {
                'materials': CourseMaterial[];
                'title': string;
            }

            export interface ListTeachersResponse {
                'nextPageToken': string;
                'teachers': Teacher[];
            }

            export interface Link {
                'title': string;
                'thumbnailUrl': string;
                'url': string;
            }

            export interface Date {
                'day': number;
                'year': number;
                'month': number;
            }

            export interface Name {
                'familyName': string;
                'givenName': string;
                'fullName': string;
            }

            export interface Assignment {
                'studentWorkFolder': DriveFolder;
            }

            export interface SharedDriveFile {
                'shareMode': string;
                'driveFile': DriveFile;
            }

            export interface Empty {}

            export interface GlobalPermission {
                'permission': string;
            }

            export interface ModifyAnnouncementAssigneesRequest {
                'modifyIndividualStudentsOptions': ModifyIndividualStudentsOptions;
                'assigneeMode': string;
            }

            export interface Teacher {
                'profile': UserProfile;
                'userId': string;
                'courseId': string;
            }

            export interface GradeHistory {
                'actorUserId': string;
                'gradeChangeType': string;
                'gradeTimestamp': string;
                'maxPoints': number;
                'pointsEarned': number;
            }

            export interface AssignmentSubmission {
                'attachments': Attachment[];
            }

            export interface Material {
                'youtubeVideo': YouTubeVideo;
                'driveFile': SharedDriveFile;
                'form': Form;
                'link': Link;
            }

            export interface Feed {
                'courseRosterChangesInfo': CourseRosterChangesInfo;
                'feedType': string;
            }

            export interface Student {
                'studentWorkFolder': DriveFolder;
                'profile': UserProfile;
                'userId': string;
                'courseId': string;
            }

            export interface Invitation {
                'userId': string;
                'courseId': string;
                'id': string;
                'role': string;
            }

            export interface TurnInStudentSubmissionRequest {}

            export interface ListCourseWorkResponse {
                'courseWork': CourseWork[];
                'nextPageToken': string;
            }

        }
    }
}
