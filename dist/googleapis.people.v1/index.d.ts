// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        people(version: string): any;
        people(version: 'v1'): people.v1.People;
    }

    namespace people {
        namespace v1 {
            export interface People {
                new(options: any): People;

                'people': {
                    'updateContact': (parameters: { [key: string]: any; 'resourceName': string, 'updatePersonFields'?: string}, callback: (error: any, body: Person, response: any) => void) => Request;
                    'createContact': (parameters: { [key: string]: any; 'parent'?: string}, callback: (error: any, body: Person, response: any) => void) => Request;
                    'deleteContact': (parameters: { [key: string]: any; 'resourceName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'getBatchGet': (parameters: { [key: string]: any; 'requestMask.includeField'?: string, 'resourceNames'?: string, 'personFields'?: string}, callback: (error: any, body: GetPeopleResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'resourceName': string, 'personFields'?: string, 'requestMask.includeField'?: string}, callback: (error: any, body: Person, response: any) => void) => Request;

                    'connections': {
                        'list': (parameters: { [key: string]: any; 'requestSyncToken'?: boolean, 'pageToken'?: string, 'resourceName': string, 'requestMask.includeField'?: string, 'pageSize'?: number, 'syncToken'?: string, 'personFields'?: string, 'sortOrder'?: string}, callback: (error: any, body: ListConnectionsResponse, response: any) => void) => Request;
                    };
                };
                'contactGroups': {
                    'batchGet': (parameters: { [key: string]: any; 'maxMembers'?: number, 'resourceNames'?: string}, callback: (error: any, body: BatchGetContactGroupsResponse, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'resourceName': string, 'deleteContacts'?: boolean}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'syncToken'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListContactGroupsResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: ContactGroup, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'maxMembers'?: number, 'resourceName': string}, callback: (error: any, body: ContactGroup, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'resourceName': string}, callback: (error: any, body: ContactGroup, response: any) => void) => Request;

                    'members': {
                        'modify': (parameters: { [key: string]: any; 'resourceName': string}, callback: (error: any, body: ModifyContactGroupMembersResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface Person {
                'memberships': Membership[];
                'phoneNumbers': PhoneNumber[];
                'coverPhotos': CoverPhoto[];
                'imClients': ImClient[];
                'birthdays': Birthday[];
                'userDefined': UserDefined[];
                'locales': Locale[];
                'relationshipInterests': RelationshipInterest[];
                'urls': Url[];
                'nicknames': Nickname[];
                'names': Name[];
                'relations': Relation[];
                'occupations': Occupation[];
                'emailAddresses': EmailAddress[];
                'organizations': Organization[];
                'etag': string;
                'braggingRights': BraggingRights[];
                'metadata': PersonMetadata;
                'residences': Residence[];
                'genders': Gender[];
                'interests': Interest[];
                'resourceName': string;
                'biographies': Biography[];
                'skills': Skill[];
                'relationshipStatuses': RelationshipStatus[];
                'photos': Photo[];
                'ageRange': string;
                'taglines': Tagline[];
                'ageRanges': AgeRangeType[];
                'addresses': Address[];
                'events': Event[];
            }

            export interface UpdateContactGroupRequest {
                'contactGroup': ContactGroup;
            }

            export interface ContactGroupMetadata {
                'updateTime': string;
                'deleted': boolean;
            }

            export interface Residence {
                'metadata': FieldMetadata;
                'current': boolean;
                'value': string;
            }

            export interface Event {
                'formattedType': string;
                'metadata': FieldMetadata;
                'type': string;
                'date': Date;
            }

            export interface ModifyContactGroupMembersResponse {
                'notFoundResourceNames': string[];
            }

            export interface ProfileMetadata {
                'objectType': string;
                'userTypes': string[];
            }

            export interface Gender {
                'formattedValue': string;
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface CoverPhoto {
                'metadata': FieldMetadata;
                'default': boolean;
                'url': string;
            }

            export interface Interest {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Nickname {
                'metadata': FieldMetadata;
                'type': string;
                'value': string;
            }

            export interface EmailAddress {
                'value': string;
                'formattedType': string;
                'displayName': string;
                'metadata': FieldMetadata;
                'type': string;
            }

            export interface Skill {
                'value': string;
                'metadata': FieldMetadata;
            }

            export interface Date {
                'year': number;
                'day': number;
                'month': number;
            }

            export interface Tagline {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Name {
                'phoneticFamilyName': string;
                'familyName': string;
                'phoneticMiddleName': string;
                'metadata': FieldMetadata;
                'phoneticFullName': string;
                'displayNameLastFirst': string;
                'displayName': string;
                'honorificSuffix': string;
                'honorificPrefix': string;
                'phoneticHonorificSuffix': string;
                'middleName': string;
                'givenName': string;
                'phoneticHonorificPrefix': string;
                'phoneticGivenName': string;
            }

            export interface Locale {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Empty {}

            export interface UserDefined {
                'key': string;
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Biography {
                'metadata': FieldMetadata;
                'value': string;
                'contentType': string;
            }

            export interface FieldMetadata {
                'primary': boolean;
                'source': Source;
                'verified': boolean;
            }

            export interface Source {
                'profileMetadata': ProfileMetadata;
                'updateTime': string;
                'type': string;
                'etag': string;
                'id': string;
            }

            export interface RelationshipInterest {
                'formattedValue': string;
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface GetPeopleResponse {
                'responses': PersonResponse[];
            }

            export interface Photo {
                'url': string;
                'metadata': FieldMetadata;
                'default': boolean;
            }

            export interface PhoneNumber {
                'value': string;
                'formattedType': string;
                'canonicalForm': string;
                'metadata': FieldMetadata;
                'type': string;
            }

            export interface ListConnectionsResponse {
                'nextPageToken': string;
                'connections': Person[];
                'nextSyncToken': string;
                'totalItems': number;
                'totalPeople': number;
            }

            export interface Birthday {
                'metadata': FieldMetadata;
                'text': string;
                'date': Date;
            }

            export interface CreateContactGroupRequest {
                'contactGroup': ContactGroup;
            }

            export interface Address {
                'streetAddress': string;
                'metadata': FieldMetadata;
                'countryCode': string;
                'formattedType': string;
                'city': string;
                'formattedValue': string;
                'country': string;
                'type': string;
                'extendedAddress': string;
                'poBox': string;
                'postalCode': string;
                'region': string;
            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface ContactGroupMembership {
                'contactGroupId': string;
            }

            export interface PersonMetadata {
                'sources': Source[];
                'previousResourceNames': string[];
                'deleted': boolean;
                'objectType': string;
                'linkedPeopleResourceNames': string[];
            }

            export interface ModifyContactGroupMembersRequest {
                'resourceNamesToAdd': string[];
                'resourceNamesToRemove': string[];
            }

            export interface ContactGroupResponse {
                'contactGroup': ContactGroup;
                'status': Status;
                'requestedResourceName': string;
            }

            export interface Url {
                'metadata': FieldMetadata;
                'type': string;
                'value': string;
                'formattedType': string;
            }

            export interface ImClient {
                'username': string;
                'formattedProtocol': string;
                'formattedType': string;
                'metadata': FieldMetadata;
                'type': string;
                'protocol': string;
            }

            export interface DomainMembership {
                'inViewerDomain': boolean;
            }

            export interface Membership {
                'metadata': FieldMetadata;
                'contactGroupMembership': ContactGroupMembership;
                'domainMembership': DomainMembership;
            }

            export interface BatchGetContactGroupsResponse {
                'responses': ContactGroupResponse[];
            }

            export interface RelationshipStatus {
                'value': string;
                'formattedValue': string;
                'metadata': FieldMetadata;
            }

            export interface BraggingRights {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Organization {
                'symbol': string;
                'name': string;
                'metadata': FieldMetadata;
                'title': string;
                'location': string;
                'current': boolean;
                'startDate': Date;
                'formattedType': string;
                'domain': string;
                'department': string;
                'phoneticName': string;
                'type': string;
                'jobDescription': string;
                'endDate': Date;
            }

            export interface AgeRangeType {
                'ageRange': string;
                'metadata': FieldMetadata;
            }

            export interface ListContactGroupsResponse {
                'contactGroups': ContactGroup[];
                'nextPageToken': string;
                'totalItems': number;
                'nextSyncToken': string;
            }

            export interface PersonResponse {
                'person': Person;
                'status': Status;
                'httpStatusCode': number;
                'requestedResourceName': string;
            }

            export interface Relation {
                'metadata': FieldMetadata;
                'type': string;
                'person': string;
                'formattedType': string;
            }

            export interface Occupation {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface ContactGroup {
                'resourceName': string;
                'etag': string;
                'formattedName': string;
                'groupType': string;
                'memberResourceNames': string[];
                'name': string;
                'metadata': ContactGroupMetadata;
                'memberCount': number;
            }

        }
    }
}
