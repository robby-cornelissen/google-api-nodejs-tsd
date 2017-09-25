// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        civicinfo(version: string): any;
        civicinfo(version: 'v2'): civicinfo.v2.Civicinfo;
    }

    namespace civicinfo {
        namespace v2 {
            export interface Civicinfo {
                new(options: any): Civicinfo;

                'divisions': {
                    'search': (parameters: { [key: string]: any; 'query'?: string}, callback: (error: any, body: DivisionSearchResponse, response: any) => void) => Request;
                };
                'elections': {
                    'electionQuery': (parameters: any, callback: (error: any, body: ElectionsQueryResponse, response: any) => void) => Request;
                    'voterInfoQuery': (parameters: { [key: string]: any; 'address': string, 'electionId'?: string, 'officialOnly'?: boolean, 'returnAllAvailableData'?: boolean}, callback: (error: any, body: VoterInfoResponse, response: any) => void) => Request;
                };
                'representatives': {
                    'representativeInfoByAddress': (parameters: { [key: string]: any; 'address'?: string, 'includeOffices'?: boolean, 'levels'?: string, 'roles'?: string}, callback: (error: any, body: RepresentativeInfoResponse, response: any) => void) => Request;
                    'representativeInfoByDivision': (parameters: { [key: string]: any; 'levels'?: string, 'ocdId': string, 'recursive'?: boolean, 'roles'?: string}, callback: (error: any, body: RepresentativeInfoData, response: any) => void) => Request;
                };

            }

            export interface AdministrationRegion {
                'electionAdministrationBody': AdministrativeBody;
                'id': string;
                'local_jurisdiction': AdministrationRegion;
                'name': string;
                'sources': Source[];
            }

            export interface AdministrativeBody {
                'absenteeVotingInfoUrl': string;
                'addressLines': string[];
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

            export interface Candidate {
                'candidateUrl': string;
                'channels': Channel[];
                'email': string;
                'name': string;
                'orderOnBallot': string;
                'party': string;
                'phone': string;
                'photoUrl': string;
            }

            export interface Channel {
                'id': string;
                'type': string;
            }

            export interface Contest {
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

            export interface ContextParams {
                'clientProfile': string;
            }

            export interface DivisionRepresentativeInfoRequest {
                'contextParams': ContextParams;
            }

            export interface DivisionSearchRequest {
                'contextParams': ContextParams;
            }

            export interface DivisionSearchResponse {
                'kind': string;
                'results': DivisionSearchResult[];
            }

            export interface DivisionSearchResult {
                'aliases': string[];
                'name': string;
                'ocdId': string;
            }

            export interface Election {
                'electionDay': string;
                'id': string;
                'name': string;
                'ocdDivisionId': string;
            }

            export interface ElectionOfficial {
                'emailAddress': string;
                'faxNumber': string;
                'name': string;
                'officePhoneNumber': string;
                'title': string;
            }

            export interface ElectionsQueryRequest {
                'contextParams': ContextParams;
            }

            export interface ElectionsQueryResponse {
                'elections': Election[];
                'kind': string;
            }

            export interface ElectoralDistrict {
                'id': string;
                'kgForeignKey': string;
                'name': string;
                'scope': string;
            }

            export interface GeographicDivision {
                'alsoKnownAs': string[];
                'name': string;
                'officeIndices': number[];
            }

            export interface Office {
                'divisionId': string;
                'levels': string[];
                'name': string;
                'officialIndices': number[];
                'roles': string[];
                'sources': Source[];
            }

            export interface Official {
                'address': SimpleAddressType[];
                'channels': Channel[];
                'emails': string[];
                'name': string;
                'party': string;
                'phones': string[];
                'photoUrl': string;
                'urls': string[];
            }

            export interface PollingLocation {
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

            export interface PostalAddress {
                'addressLines': string[];
                'administrativeAreaName': string;
                'countryName': string;
                'countryNameCode': string;
                'dependentLocalityName': string;
                'dependentThoroughfareLeadingType': string;
                'dependentThoroughfareName': string;
                'dependentThoroughfarePostDirection': string;
                'dependentThoroughfarePreDirection': string;
                'dependentThoroughfareTrailingType': string;
                'dependentThoroughfaresConnector': string;
                'dependentThoroughfaresIndicator': string;
                'dependentThoroughfaresType': string;
                'firmName': string;
                'isDisputed': boolean;
                'languageCode': string;
                'localityName': string;
                'postBoxNumber': string;
                'postalCodeNumber': string;
                'postalCodeNumberExtension': string;
                'premiseName': string;
                'recipientName': string;
                'sortingCode': string;
                'subAdministrativeAreaName': string;
                'subPremiseName': string;
                'thoroughfareLeadingType': string;
                'thoroughfareName': string;
                'thoroughfareNumber': string;
                'thoroughfarePostDirection': string;
                'thoroughfarePreDirection': string;
                'thoroughfareTrailingType': string;
            }

            export interface RepresentativeInfoData {
                'divisions': {
                    [name: string]: GeographicDivision
                ;
                };
                'offices': Office[];
                'officials': Official[];
            }

            export interface RepresentativeInfoRequest {
                'contextParams': ContextParams;
            }

            export interface RepresentativeInfoResponse {
                'divisions': {
                    [name: string]: GeographicDivision
                ;
                };
                'kind': string;
                'normalizedInput': SimpleAddressType;
                'offices': Office[];
                'officials': Official[];
            }

            export interface SimpleAddressType {
                'city': string;
                'line1': string;
                'line2': string;
                'line3': string;
                'locationName': string;
                'state': string;
                'zip': string;
            }

            export interface Source {
                'name': string;
                'official': boolean;
            }

            export interface VoterInfoRequest {
                'contextParams': ContextParams;
                'voterInfoSegmentResult': VoterInfoSegmentResult;
            }

            export interface VoterInfoResponse {
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

            export interface VoterInfoSegmentResult {
                'generatedMillis': string;
                'postalAddress': PostalAddress;
                'request': VoterInfoRequest;
                'response': VoterInfoResponse;
            }

        }
    }
}
