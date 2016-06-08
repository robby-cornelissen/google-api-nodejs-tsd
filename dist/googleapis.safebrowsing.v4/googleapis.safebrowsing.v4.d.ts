// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        safebrowsing(version: string): any;
        safebrowsing(version: 'v4'): safebrowsing.v4.Safebrowsing;
    }

    namespace safebrowsing {
        namespace v4 {
            export interface Safebrowsing {
                new(options: any): Safebrowsing;

                'threatMatches': {
                    'find': (parameters: any, callback: (error: any, body: FindThreatMatchesResponse, response: any) => void) => Request;
                };
                'threatListUpdates': {
                    'fetch': (parameters: any, callback: (error: any, body: FetchThreatListUpdatesResponse, response: any) => void) => Request;
                };
                'fullHashes': {
                    'find': (parameters: any, callback: (error: any, body: FindFullHashesResponse, response: any) => void) => Request;
                };
                'threatLists': {
                    'list': (parameters: any, callback: (error: any, body: ListThreatListsResponse, response: any) => void) => Request;
                };

            }

            export interface FindThreatMatchesRequest {
                'client': ClientInfo;
                'threatInfo': ThreatInfo;
            }

            export interface ClientInfo {
                'clientId': string;
                'clientVersion': string;
            }

            export interface ThreatInfo {
                'threatTypes': string[];
                'platformTypes': string[];
                'threatEntryTypes': string[];
                'threatEntries': ThreatEntry[];
            }

            export interface ThreatEntry {
                'hash': string;
                'url': string;
                'digest': string;
            }

            export interface FindThreatMatchesResponse {
                'matches': ThreatMatch[];
            }

            export interface ThreatMatch {
                'threatType': string;
                'platformType': string;
                'threatEntryType': string;
                'threat': ThreatEntry;
                'threatEntryMetadata': ThreatEntryMetadata;
                'cacheDuration': string;
            }

            export interface ThreatEntryMetadata {
                'entries': MetadataEntry[];
            }

            export interface MetadataEntry {
                'key': string;
                'value': string;
            }

            export interface FetchThreatListUpdatesRequest {
                'client': ClientInfo;
                'listUpdateRequests': ListUpdateRequest[];
            }

            export interface ListUpdateRequest {
                'threatType': string;
                'platformType': string;
                'threatEntryType': string;
                'state': string;
                'constraints': Constraints;
            }

            export interface Constraints {
                'maxUpdateEntries': number;
                'maxDatabaseEntries': number;
                'region': string;
                'supportedCompressions': string[];
            }

            export interface FetchThreatListUpdatesResponse {
                'listUpdateResponses': ListUpdateResponse[];
                'minimumWaitDuration': string;
            }

            export interface ListUpdateResponse {
                'threatType': string;
                'threatEntryType': string;
                'platformType': string;
                'responseType': string;
                'additions': ThreatEntrySet[];
                'removals': ThreatEntrySet[];
                'newClientState': string;
                'checksum': Checksum;
            }

            export interface ThreatEntrySet {
                'compressionType': string;
                'rawHashes': RawHashes;
                'rawIndices': RawIndices;
                'riceHashes': RiceDeltaEncoding;
                'riceIndices': RiceDeltaEncoding;
            }

            export interface RawHashes {
                'prefixSize': number;
                'rawHashes': string;
            }

            export interface RawIndices {
                'indices': number[];
            }

            export interface RiceDeltaEncoding {
                'firstValue': string;
                'riceParameter': number;
                'numEntries': number;
                'encodedData': string;
            }

            export interface Checksum {
                'sha256': string;
            }

            export interface FindFullHashesRequest {
                'client': ClientInfo;
                'clientStates': string[];
                'threatInfo': ThreatInfo;
            }

            export interface FindFullHashesResponse {
                'matches': ThreatMatch[];
                'minimumWaitDuration': string;
                'negativeCacheDuration': string;
            }

            export interface ListThreatListsResponse {
                'threatLists': ThreatListDescriptor[];
            }

            export interface ThreatListDescriptor {
                'threatType': string;
                'platformType': string;
                'threatEntryType': string;
            }

        }
    }
}