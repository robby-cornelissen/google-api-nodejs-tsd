/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        civicinfo(version: string): any;
        civicinfo(version: 'v2'): civicinfo.v2.Civicinfo;
    }

    namespace civicinfo {
        namespace v2 {
            export interface Civicinfo {
                new(options: any): Civicinfo;

                'divisions': {
                    'search': (parameters: {'query'?: string}, callback: (error: any, body: DivisionSearchResponse, response: any) => void) => Request;
                };
                'elections': {
                    'electionQuery': (parameters: any, callback: (error: any, body: ElectionsQueryResponse, response: any) => void) => Request;
                    'voterInfoQuery': (parameters: {'address': string, 'electionId'?: string, 'officialOnly'?: boolean}, callback: (error: any, body: VoterInfoResponse, response: any) => void) => Request;
                };
                'representatives': {
                    'representativeInfoByAddress': (parameters: {'address'?: string, 'includeOffices'?: boolean, 'levels'?: string, 'roles'?: string}, callback: (error: any, body: RepresentativeInfoResponse, response: any) => void) => Request;
                    'representativeInfoByDivision': (parameters: {'levels'?: string, 'ocdId': string, 'recursive'?: boolean, 'roles'?: string}, callback: (error: any, body: RepresentativeInfoData, response: any) => void) => Request;
                };

            }

            interface AdministrationRegion {
                'electionAdministrationBody': AdministrativeBody;
                'id': string;
                'local_jurisdiction': AdministrationRegion;
                'name': string;
                'sources': Source[];
            }

            interface AdministrativeBody {
                'absenteeVotingInfoUrl': string;
                'ballotInfoUrl': string;
                'correspondenceAddress': SimpleAddressType;
                'electionInfoUrl': string;
                'electionOfficials': ElectionOfficial[];
                'electionRegistrationConfirmationUrl': string;
                'electionRegistrationUrl': string;
                'electionRulesUrl': string;
                'hoursOfOperation': string;
                'name': string;
                'physicalAddress': SimpleAddressType;
                'voter_services': string[];
                'votingLocationFinderUrl': string;
            }

            interface Candidate {
                'candidateUrl': string;
                'channels': Channel[];
                'email': string;
                'name': string;
                'orderOnBallot': string;
                'party': string;
                'phone': string;
                'photoUrl': string;
            }

            interface Channel {
                'id': string;
                'type': string;
            }

            interface Contest {
                'ballotPlacement': string;
                'candidates': Candidate[];
                'district': ElectoralDistrict;
                'electorateSpecifications': string;
                'id': string;
                'level': string[];
                'numberElected': string;
                'numberVotingFor': string;
                'office': string;
                'primaryParty': string;
                'referendumBallotResponses': string[];
                'referendumBrief': string;
                'referendumConStatement': string;
                'referendumEffectOfAbstain': string;
                'referendumPassageThreshold': string;
                'referendumProStatement': string;
                'referendumSubtitle': string;
                'referendumText': string;
                'referendumTitle': string;
                'referendumUrl': string;
                'roles': string[];
                'sources': Source[];
                'special': string;
                'type': string;
            }

            interface DivisionSearchResponse {
                'kind': string;
                'results': DivisionSearchResult[];
            }

            interface DivisionSearchResult {
                'aliases': string[];
                'name': string;
                'ocdId': string;
            }

            interface Election {
                'electionDay': string;
                'id': string;
                'name': string;
                'ocdDivisionId': string;
            }

            interface ElectionOfficial {
                'emailAddress': string;
                'faxNumber': string;
                'name': string;
                'officePhoneNumber': string;
                'title': string;
            }

            interface ElectionsQueryResponse {
                'elections': Election[];
                'kind': string;
            }

            interface ElectoralDistrict {
                'id': string;
                'name': string;
                'scope': string;
            }

            interface GeographicDivision {
                'alsoKnownAs': string[];
                'name': string;
                'officeIndices': number[];
            }

            interface Office {
                'divisionId': string;
                'levels': string[];
                'name': string;
                'officialIndices': number[];
                'roles': string[];
                'sources': Source[];
            }

            interface Official {
                'address': SimpleAddressType[];
                'channels': Channel[];
                'emails': string[];
                'name': string;
                'party': string;
                'phones': string[];
                'photoUrl': string;
                'urls': string[];
            }

            interface PollingLocation {
                'address': SimpleAddressType;
                'endDate': string;
                'id': string;
                'name': string;
                'notes': string;
                'pollingHours': string;
                'sources': Source[];
                'startDate': string;
                'voterServices': string;
            }

            interface RepresentativeInfoData {
                'divisions': {
                    [name: string]: GeographicDivision
                };
                'offices': Office[];
                'officials': Official[];
            }

            interface RepresentativeInfoResponse {
                'divisions': {
                    [name: string]: GeographicDivision
                };
                'kind': string;
                'normalizedInput': SimpleAddressType;
                'offices': Office[];
                'officials': Official[];
            }

            interface SimpleAddressType {
                'city': string;
                'line1': string;
                'line2': string;
                'line3': string;
                'locationName': string;
                'state': string;
                'zip': string;
            }

            interface Source {
                'name': string;
                'official': boolean;
            }

            interface VoterInfoResponse {
                'contests': Contest[];
                'dropOffLocations': PollingLocation[];
                'earlyVoteSites': PollingLocation[];
                'election': Election;
                'kind': string;
                'mailOnly': boolean;
                'normalizedInput': SimpleAddressType;
                'otherElections': Election[];
                'pollingLocations': PollingLocation[];
                'precinctId': string;
                'state': AdministrationRegion[];
            }

        }
    }
}