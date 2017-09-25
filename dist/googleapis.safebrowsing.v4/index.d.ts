// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        safebrowsing(version: string): any;
        safebrowsing(version: 'v4'): safebrowsing.v4.Safebrowsing;
    }

    namespace safebrowsing {
        namespace v4 {
            export interface Safebrowsing {
                new(options: any): Safebrowsing;

                'fullHashes': {
                    'find': (parameters: { [key: string]: any; }, callback: (error: any, body: FindFullHashesResponse, response: any) => void) => Request;
                };
                'encodedUpdates': {
                    'get': (parameters: { [key: string]: any; 'encodedRequest': string, 'clientId'?: string, 'clientVersion'?: string}, callback: (error: any, body: FetchThreatListUpdatesResponse, response: any) => void) => Request;
                };
                'threatListUpdates': {
                    'fetch': (parameters: { [key: string]: any; }, callback: (error: any, body: FetchThreatListUpdatesResponse, response: any) => void) => Request;
                };
                'encodedFullHashes': {
                    'get': (parameters: { [key: string]: any; 'clientId'?: string, 'clientVersion'?: string, 'encodedRequest': string}, callback: (error: any, body: FindFullHashesResponse, response: any) => void) => Request;
                };
                'threatLists': {
                    'list': (parameters: { [key: string]: any; }, callback: (error: any, body: ListThreatListsResponse, response: any) => void) => Request;
                };
                'threatMatches': {
                    'find': (parameters: { [key: string]: any; }, callback: (error: any, body: FindThreatMatchesResponse, response: any) => void) => Request;
                };

            }

            export interface RawIndices {
                'indices': number[];
            }

            export interface RawHashes {
                'prefixSize': number;
                'rawHashes': string;
            }

            export interface FetchThreatListUpdatesResponse {
                'minimumWaitDuration': string;
                'listUpdateResponses': ListUpdateResponse[];
            }

            export interface Checksum {
                'sha256': string;
            }

            export interface FindFullHashesResponse {
                'negativeCacheDuration': string;
                'minimumWaitDuration': string;
                'matches': ThreatMatch[];
            }

            export interface ThreatEntrySet {
                'riceIndices': RiceDeltaEncoding;
                'compressionType': string;
                'rawIndices': RawIndices;
                'rawHashes': RawHashes;
                'riceHashes': RiceDeltaEncoding;
            }

            export interface FindFullHashesRequest {
                'clientStates': string[];
                'client': ClientInfo;
                'threatInfo': ThreatInfo;
                'apiClient': ClientInfo;
            }

            export interface ListUpdateRequest {
                'platformType': string;
                'constraints': Constraints;
                'threatType': string;
                'threatEntryType': string;
                'state': string;
            }

            export interface FetchThreatListUpdatesRequest {
                'listUpdateRequests': ListUpdateRequest[];
                'client': ClientInfo;
            }

            export interface ListUpdateResponse {
                'newClientState': string;
                'removals': ThreatEntrySet[];
                'platformType': string;
                'threatEntryType': string;
                'additions': ThreatEntrySet[];
                'checksum': Checksum;
                'responseType': string;
                'threatType': string;
            }

            export interface Constraints {
                'maxUpdateEntries': number;
                'region': string;
                'maxDatabaseEntries': number;
                'supportedCompressions': string[];
            }

            export interface ThreatMatch {
                'platformType': string;
                'threatEntryType': string;
                'cacheDuration': string;
                'threatType': string;
                'threatEntryMetadata': ThreatEntryMetadata;
                'threat': ThreatEntry;
            }

            export interface ListThreatListsResponse {
                'threatLists': ThreatListDescriptor[];
            }

            export interface RiceDeltaEncoding {
                'riceParameter': number;
                'encodedData': string;
                'firstValue': string;
                'numEntries': number;
            }

            export interface FindThreatMatchesResponse {
                'matches': ThreatMatch[];
            }

            export interface ThreatEntry {
                'digest': string;
                'hash': string;
                'url': string;
            }

            export interface ThreatListDescriptor {
                'platformType': string;
                'threatType': string;
                'threatEntryType': string;
            }

            export interface MetadataEntry {
                'value': string;
                'key': string;
            }

            export interface ClientInfo {
                'clientId': string;
                'clientVersion': string;
            }

            export interface ThreatInfo {
                'threatTypes': string[];
                'platformTypes': string[];
                'threatEntries': ThreatEntry[];
                'threatEntryTypes': string[];
            }

            export interface FindThreatMatchesRequest {
                'client': ClientInfo;
                'threatInfo': ThreatInfo;
            }

            export interface ThreatEntryMetadata {
                'entries': MetadataEntry[];
            }

        }
    }
}
