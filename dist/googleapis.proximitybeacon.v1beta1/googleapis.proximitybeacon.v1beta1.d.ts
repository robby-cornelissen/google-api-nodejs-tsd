/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        proximitybeacon(version: string): any;
        proximitybeacon(version: 'v1beta1'): proximitybeacon.v1beta1.Proximitybeacon;
    }

    namespace proximitybeacon {
        namespace v1beta1 {
            export interface Proximitybeacon {
                new(options: any): Proximitybeacon;

                'beacons': {
                    'register': (parameters: any, callback: (error: any, body: Beacon, response: any) => void) => Request;
                    'decommission': (parameters: {'beaconName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'get': (parameters: {'beaconName': string}, callback: (error: any, body: Beacon, response: any) => void) => Request;
                    'list': (parameters: {'q'?: string, 'pageToken'?: string, 'pageSize'?: number}, callback: (error: any, body: ListBeaconsResponse, response: any) => void) => Request;
                    'update': (parameters: {'beaconName': string}, callback: (error: any, body: Beacon, response: any) => void) => Request;
                    'activate': (parameters: {'beaconName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'deactivate': (parameters: {'beaconName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                
                    'attachments': {
                        'create': (parameters: {'beaconName': string}, callback: (error: any, body: BeaconAttachment, response: any) => void) => Request;
                        'list': (parameters: {'beaconName': string, 'namespacedType'?: string}, callback: (error: any, body: ListBeaconAttachmentsResponse, response: any) => void) => Request;
                        'delete': (parameters: {'attachmentName': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'batchDelete': (parameters: {'beaconName': string, 'namespacedType'?: string}, callback: (error: any, body: DeleteAttachmentsResponse, response: any) => void) => Request;
                    };
                    'diagnostics': {
                        'list': (parameters: {'beaconName': string, 'pageSize'?: number, 'pageToken'?: string, 'alertFilter'?: string}, callback: (error: any, body: ListDiagnosticsResponse, response: any) => void) => Request;
                    };
                };
                'namespaces': {
                    'list': (parameters: any, callback: (error: any, body: ListNamespacesResponse, response: any) => void) => Request;
                };
                'beaconinfo': {
                    'getforobserved': (parameters: any, callback: (error: any, body: GetInfoForObservedBeaconsResponse, response: any) => void) => Request;
                };

            }

            interface Beacon {
                'beaconName': string;
                'advertisedId': AdvertisedId;
                'status': string;
                'placeId': string;
                'latLng': LatLng;
                'indoorLevel': IndoorLevel;
                'expectedStability': string;
                'description': string;
                'properties': {
                    [name: string]: string
                };
            }

            interface AdvertisedId {
                'type': string;
                'id': string;
            }

            interface LatLng {
                'latitude': number;
                'longitude': number;
            }

            interface IndoorLevel {
                'name': string;
            }

            interface Empty {}

            interface ListBeaconsResponse {
                'beacons': Beacon[];
                'nextPageToken': string;
                'totalCount': string;
            }

            interface BeaconAttachment {
                'attachmentName': string;
                'namespacedType': string;
                'data': string;
            }

            interface ListBeaconAttachmentsResponse {
                'attachments': BeaconAttachment[];
            }

            interface DeleteAttachmentsResponse {
                'numDeleted': number;
            }

            interface ListNamespacesResponse {
                'namespaces': Namespace[];
            }

            interface Namespace {
                'namespaceName': string;
                'servingVisibility': string;
            }

            interface ListDiagnosticsResponse {
                'diagnostics': Diagnostics[];
                'nextPageToken': string;
            }

            interface Diagnostics {
                'beaconName': string;
                'estimatedLowBatteryDate': Date;
                'alerts': string[];
            }

            interface Date {
                'year': number;
                'month': number;
                'day': number;
            }

            interface GetInfoForObservedBeaconsRequest {
                'observations': Observation[];
                'namespacedTypes': string[];
            }

            interface Observation {
                'advertisedId': AdvertisedId;
                'telemetry': string;
                'timestampMs': string;
            }

            interface GetInfoForObservedBeaconsResponse {
                'beacons': BeaconInfo[];
            }

            interface BeaconInfo {
                'advertisedId': AdvertisedId;
                'beaconName': string;
                'description': string;
                'attachments': AttachmentInfo[];
            }

            interface AttachmentInfo {
                'namespacedType': string;
                'data': string;
            }

        }
    }
}