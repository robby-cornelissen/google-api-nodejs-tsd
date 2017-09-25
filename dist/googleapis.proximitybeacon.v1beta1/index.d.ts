// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        proximitybeacon(version: string): any;
        proximitybeacon(version: 'v1beta1'): proximitybeacon.v1beta1.Proximitybeacon;
    }

    namespace proximitybeacon {
        namespace v1beta1 {
            export interface Proximitybeacon {
                new(options: any): Proximitybeacon;

                'beaconinfo': {
                    'getforobserved': (parameters: { [key: string]: any; }, callback: (error: any, body: GetInfoForObservedBeaconsResponse, response: any) => void) => Request;
                };
                'namespaces': {
                    'list': (parameters: { [key: string]: any; 'projectId'?: string}, callback: (error: any, body: ListNamespacesResponse, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'namespaceName': string, 'projectId'?: string}, callback: (error: any, body: Namespace, response: any) => void) => Request;
                };
                'v1beta1': {
                    'getEidparams': (parameters: { [key: string]: any; }, callback: (error: any, body: EphemeralIdRegistrationParams, response: any) => void) => Request;
                };
                'beacons': {
                    'activate': (parameters: { [key: string]: any; 'beaconName': string, 'projectId'?: string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'projectId'?: string, 'beaconName': string}, callback: (error: any, body: Beacon, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'beaconName': string, 'projectId'?: string}, callback: (error: any, body: Beacon, response: any) => void) => Request;
                    'decommission': (parameters: { [key: string]: any; 'beaconName': string, 'projectId'?: string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'beaconName': string, 'projectId'?: string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'deactivate': (parameters: { [key: string]: any; 'beaconName': string, 'projectId'?: string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'pageSize'?: number, 'q'?: string, 'projectId'?: string, 'pageToken'?: string}, callback: (error: any, body: ListBeaconsResponse, response: any) => void) => Request;
                    'register': (parameters: { [key: string]: any; 'projectId'?: string}, callback: (error: any, body: Beacon, response: any) => void) => Request;

                    'diagnostics': {
                        'list': (parameters: { [key: string]: any; 'projectId'?: string, 'beaconName': string, 'pageToken'?: string, 'alertFilter'?: string, 'pageSize'?: number}, callback: (error: any, body: ListDiagnosticsResponse, response: any) => void) => Request;
                    };
                    'attachments': {
                        'delete': (parameters: { [key: string]: any; 'projectId'?: string, 'attachmentName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'beaconName': string, 'projectId'?: string, 'namespacedType'?: string}, callback: (error: any, body: ListBeaconAttachmentsResponse, response: any) => void) => Request;
                        'batchDelete': (parameters: { [key: string]: any; 'namespacedType'?: string, 'beaconName': string, 'projectId'?: string}, callback: (error: any, body: DeleteAttachmentsResponse, response: any) => void) => Request;
                        'create': (parameters: { [key: string]: any; 'projectId'?: string, 'beaconName': string}, callback: (error: any, body: BeaconAttachment, response: any) => void) => Request;
                    };
                };

            }

            export interface ListBeaconAttachmentsResponse {
                'attachments': BeaconAttachment[];
            }

            export interface Namespace {
                'servingVisibility': string;
                'namespaceName': string;
            }

            export interface BeaconInfo {
                'beaconName': string;
                'attachments': AttachmentInfo[];
                'advertisedId': AdvertisedId;
            }

            export interface AttachmentInfo {
                'namespacedType': string;
                'data': string;
            }

            export interface EphemeralIdRegistrationParams {
                'maxRotationPeriodExponent': number;
                'minRotationPeriodExponent': number;
                'serviceEcdhPublicKey': string;
            }

            export interface DeleteAttachmentsResponse {
                'numDeleted': number;
            }

            export interface Observation {
                'advertisedId': AdvertisedId;
                'telemetry': string;
                'timestampMs': string;
            }

            export interface ListDiagnosticsResponse {
                'diagnostics': Diagnostics[];
                'nextPageToken': string;
            }

            export interface GetInfoForObservedBeaconsResponse {
                'beacons': BeaconInfo[];
            }

            export interface Beacon {
                'description': string;
                'placeId': string;
                'latLng': LatLng;
                'properties': {
                    [name: string]: string
                ;
                };
                'indoorLevel': IndoorLevel;
                'status': string;
                'beaconName': string;
                'expectedStability': string;
                'advertisedId': AdvertisedId;
                'ephemeralIdRegistration': EphemeralIdRegistration;
                'provisioningKey': string;
            }

            export interface AdvertisedId {
                'type': string;
                'id': string;
            }

            export interface Date {
                'day': number;
                'year': number;
                'month': number;
            }

            export interface IndoorLevel {
                'name': string;
            }

            export interface ListNamespacesResponse {
                'namespaces': Namespace[];
            }

            export interface Diagnostics {
                'estimatedLowBatteryDate': Date;
                'beaconName': string;
                'alerts': string[];
            }

            export interface ListBeaconsResponse {
                'nextPageToken': string;
                'totalCount': string;
                'beacons': Beacon[];
            }

            export interface GetInfoForObservedBeaconsRequest {
                'observations': Observation[];
                'namespacedTypes': string[];
            }

            export interface Empty {}

            export interface BeaconAttachment {
                'data': string;
                'creationTimeMs': string;
                'attachmentName': string;
                'namespacedType': string;
            }

            export interface EphemeralIdRegistration {
                'beaconIdentityKey': string;
                'serviceEcdhPublicKey': string;
                'initialEid': string;
                'beaconEcdhPublicKey': string;
                'initialClockValue': string;
                'rotationPeriodExponent': number;
            }

            export interface LatLng {
                'latitude': number;
                'longitude': number;
            }

        }
    }
}
