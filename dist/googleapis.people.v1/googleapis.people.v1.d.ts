// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        people(version: string): any;
        people(version: 'v1'): people.v1.People;
    }

    namespace people {
        namespace v1 {
            export interface People {
                new(options: any): People;

                'people': {
                    'get': (parameters: {'resourceName': string, 'requestMask.includeField'?: string}, callback: (error: any, body: Person, response: any) => void) => Request;
                    'getBatchGet': (parameters: {'resourceNames'?: string, 'requestMask.includeField'?: string}, callback: (error: any, body: GetPeopleResponse, response: any) => void) => Request;
                
                    'connections': {
                        'list': (parameters: {'resourceName': string, 'pageToken'?: string, 'pageSize'?: number, 'sortOrder'?: string, 'syncToken'?: string, 'requestMask.includeField'?: string}, callback: (error: any, body: ListConnectionsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface Person {
                'resourceName': string;
                'etag': string;
                'metadata': PersonMetadata;
                'locales': Locale[];
                'names': Name[];
                'nicknames': Nickname[];
                'coverPhotos': CoverPhoto[];
                'photos': Photo[];
                'genders': Gender[];
                'ageRange': string;
                'birthdays': Birthday[];
                'events': Event[];
                'addresses': Address[];
                'residences': Residence[];
                'emailAddresses': EmailAddress[];
                'phoneNumbers': PhoneNumber[];
                'imClients': ImClient[];
                'taglines': Tagline[];
                'biographies': Biography[];
                'urls': Url[];
                'organizations': Organization[];
                'occupations': Occupation[];
                'interests': Interest[];
                'skills': Skill[];
                'braggingRights': BraggingRights[];
                'relations': Relation[];
                'relationshipInterests': RelationshipInterest[];
                'relationshipStatuses': RelationshipStatus[];
                'memberships': Membership[];
            }

            export interface PersonMetadata {
                'sources': Source[];
                'previousResourceNames': string[];
                'deleted': boolean;
                'objectType': string;
            }

            export interface Source {
                'type': string;
                'id': string;
            }

            export interface Locale {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface FieldMetadata {
                'primary': boolean;
                'verified': boolean;
                'source': Source;
            }

            export interface Name {
                'metadata': FieldMetadata;
                'displayName': string;
                'familyName': string;
                'givenName': string;
                'middleName': string;
                'honorificPrefix': string;
                'honorificSuffix': string;
                'phoneticFamilyName': string;
                'phoneticGivenName': string;
                'phoneticMiddleName': string;
                'phoneticHonorificPrefix': string;
                'phoneticHonorificSuffix': string;
            }

            export interface Nickname {
                'metadata': FieldMetadata;
                'value': string;
                'type': string;
            }

            export interface CoverPhoto {
                'metadata': FieldMetadata;
                'url': string;
                'default': boolean;
            }

            export interface Photo {
                'metadata': FieldMetadata;
                'url': string;
            }

            export interface Gender {
                'metadata': FieldMetadata;
                'value': string;
                'formattedValue': string;
            }

            export interface Birthday {
                'metadata': FieldMetadata;
                'date': Date;
                'text': string;
            }

            export interface Date {
                'year': number;
                'month': number;
                'day': number;
            }

            export interface Event {
                'metadata': FieldMetadata;
                'date': Date;
                'type': string;
                'formattedType': string;
            }

            export interface Address {
                'metadata': FieldMetadata;
                'formattedValue': string;
                'type': string;
                'formattedType': string;
                'poBox': string;
                'streetAddress': string;
                'extendedAddress': string;
                'city': string;
                'region': string;
                'postalCode': string;
                'country': string;
                'countryCode': string;
            }

            export interface Residence {
                'metadata': FieldMetadata;
                'value': string;
                'current': boolean;
            }

            export interface EmailAddress {
                'metadata': FieldMetadata;
                'value': string;
                'type': string;
                'formattedType': string;
            }

            export interface PhoneNumber {
                'metadata': FieldMetadata;
                'value': string;
                'canonicalForm': string;
                'type': string;
                'formattedType': string;
            }

            export interface ImClient {
                'metadata': FieldMetadata;
                'username': string;
                'type': string;
                'formattedType': string;
                'protocol': string;
                'formattedProtocol': string;
            }

            export interface Tagline {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Biography {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Url {
                'metadata': FieldMetadata;
                'value': string;
                'type': string;
                'formattedType': string;
            }

            export interface Organization {
                'metadata': FieldMetadata;
                'type': string;
                'formattedType': string;
                'startDate': Date;
                'endDate': Date;
                'current': boolean;
                'name': string;
                'phoneticName': string;
                'department': string;
                'title': string;
                'jobDescription': string;
                'symbol': string;
                'domain': string;
                'location': string;
            }

            export interface Occupation {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Interest {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Skill {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface BraggingRights {
                'metadata': FieldMetadata;
                'value': string;
            }

            export interface Relation {
                'metadata': FieldMetadata;
                'person': string;
                'type': string;
                'formattedType': string;
            }

            export interface RelationshipInterest {
                'metadata': FieldMetadata;
                'value': string;
                'formattedValue': string;
            }

            export interface RelationshipStatus {
                'metadata': FieldMetadata;
                'value': string;
                'formattedValue': string;
            }

            export interface Membership {
                'metadata': FieldMetadata;
                'contactGroupMembership': ContactGroupMembership;
                'domainMembership': DomainMembership;
            }

            export interface ContactGroupMembership {
                'contactGroupId': string;
            }

            export interface DomainMembership {
                'inViewerDomain': boolean;
            }

            export interface GetPeopleResponse {
                'responses': PersonResponse[];
            }

            export interface PersonResponse {
                'httpStatusCode': number;
                'person': Person;
                'requestedResourceName': string;
            }

            export interface ListConnectionsResponse {
                'connections': Person[];
                'nextPageToken': string;
                'nextSyncToken': string;
            }

        }
    }
}