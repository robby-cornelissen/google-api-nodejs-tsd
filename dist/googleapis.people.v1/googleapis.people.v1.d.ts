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

            interface Person {
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

            interface PersonMetadata {
                'sources': Source[];
                'previousResourceNames': string[];
                'deleted': boolean;
                'objectType': string;
            }

            interface Source {
                'type': string;
                'id': string;
            }

            interface Locale {
                'metadata': FieldMetadata;
                'value': string;
            }

            interface FieldMetadata {
                'primary': boolean;
                'verified': boolean;
                'source': Source;
            }

            interface Name {
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

            interface Nickname {
                'metadata': FieldMetadata;
                'value': string;
                'type': string;
            }

            interface CoverPhoto {
                'metadata': FieldMetadata;
                'url': string;
                'default': boolean;
            }

            interface Photo {
                'metadata': FieldMetadata;
                'url': string;
            }

            interface Gender {
                'metadata': FieldMetadata;
                'value': string;
                'formattedValue': string;
            }

            interface Birthday {
                'metadata': FieldMetadata;
                'date': Date;
                'text': string;
            }

            interface Date {
                'year': number;
                'month': number;
                'day': number;
            }

            interface Event {
                'metadata': FieldMetadata;
                'date': Date;
                'type': string;
                'formattedType': string;
            }

            interface Address {
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

            interface Residence {
                'metadata': FieldMetadata;
                'value': string;
                'current': boolean;
            }

            interface EmailAddress {
                'metadata': FieldMetadata;
                'value': string;
                'type': string;
                'formattedType': string;
            }

            interface PhoneNumber {
                'metadata': FieldMetadata;
                'value': string;
                'canonicalForm': string;
                'type': string;
                'formattedType': string;
            }

            interface ImClient {
                'metadata': FieldMetadata;
                'username': string;
                'type': string;
                'formattedType': string;
                'protocol': string;
                'formattedProtocol': string;
            }

            interface Tagline {
                'metadata': FieldMetadata;
                'value': string;
            }

            interface Biography {
                'metadata': FieldMetadata;
                'value': string;
            }

            interface Url {
                'metadata': FieldMetadata;
                'value': string;
                'type': string;
                'formattedType': string;
            }

            interface Organization {
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

            interface Occupation {
                'metadata': FieldMetadata;
                'value': string;
            }

            interface Interest {
                'metadata': FieldMetadata;
                'value': string;
            }

            interface Skill {
                'metadata': FieldMetadata;
                'value': string;
            }

            interface BraggingRights {
                'metadata': FieldMetadata;
                'value': string;
            }

            interface Relation {
                'metadata': FieldMetadata;
                'person': string;
                'type': string;
                'formattedType': string;
            }

            interface RelationshipInterest {
                'metadata': FieldMetadata;
                'value': string;
                'formattedValue': string;
            }

            interface RelationshipStatus {
                'metadata': FieldMetadata;
                'value': string;
                'formattedValue': string;
            }

            interface Membership {
                'metadata': FieldMetadata;
                'contactGroupMembership': ContactGroupMembership;
                'domainMembership': DomainMembership;
            }

            interface ContactGroupMembership {
                'contactGroupId': string;
            }

            interface DomainMembership {
                'inViewerDomain': boolean;
            }

            interface GetPeopleResponse {
                'responses': PersonResponse[];
            }

            interface PersonResponse {
                'httpStatusCode': number;
                'person': Person;
                'requestedResourceName': string;
            }

            interface ListConnectionsResponse {
                'connections': Person[];
                'nextPageToken': string;
                'nextSyncToken': string;
            }

        }
    }
}