// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        androiddeviceprovisioning(version: string): any;
        androiddeviceprovisioning(version: 'v1'): androiddeviceprovisioning.v1.Androiddeviceprovisioning;
    }

    namespace androiddeviceprovisioning {
        namespace v1 {
            export interface Androiddeviceprovisioning {
                new(options: any): Androiddeviceprovisioning;

                'partners': {
                    'devices': {
                        'claim': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: ClaimDeviceResponse, response: any) => void) => Request;
                        'claimAsync': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'findByIdentifier': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: FindDevicesByDeviceIdentifierResponse, response: any) => void) => Request;
                        'unclaimAsync': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'metadata': (parameters: { [key: string]: any; 'metadataOwnerId': string, 'deviceId': string}, callback: (error: any, body: DeviceMetadata, response: any) => void) => Request;
                        'updateMetadataAsync': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Device, response: any) => void) => Request;
                        'unclaim': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                        'findByOwner': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: FindDevicesByOwnerResponse, response: any) => void) => Request;
                    };
                    'customers': {
                        'create': (parameters: { [key: string]: any; 'parent': string}, callback: (error: any, body: Company, response: any) => void) => Request;
                        'list': (parameters: { [key: string]: any; 'partnerId': string}, callback: (error: any, body: ListCustomersResponse, response: any) => void) => Request;
                    };
                };
                'operations': {
                    'get': (parameters: { [key: string]: any; 'name': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };

            }

            export interface ClaimDeviceRequest {
                'deviceIdentifier': DeviceIdentifier;
                'sectionType': string;
                'customerId': string;
            }

            export interface DevicesLongRunningOperationMetadata {
                'processingStatus': string;
                'progress': number;
                'devicesCount': number;
            }

            export interface UpdateDeviceMetadataInBatchRequest {
                'updates': UpdateMetadataArguments[];
            }

            export interface ListCustomersResponse {
                'customers': Company[];
            }

            export interface ClaimDeviceResponse {
                'deviceName': string;
                'deviceId': string;
            }

            export interface UpdateMetadataArguments {
                'deviceId': string;
                'deviceIdentifier': DeviceIdentifier;
                'deviceMetadata': DeviceMetadata;
            }

            export interface Device {
                'configuration': string;
                'claims': DeviceClaim[];
                'deviceIdentifier': DeviceIdentifier;
                'deviceMetadata': DeviceMetadata;
                'name': string;
                'deviceId': string;
            }

            export interface CreateCustomerRequest {
                'customer': Company;
            }

            export interface Company {
                'ownerEmails': string[];
                'companyId': string;
                'companyName': string;
                'name': string;
                'adminEmails': string[];
            }

            export interface UpdateDeviceMetadataRequest {
                'deviceMetadata': DeviceMetadata;
            }

            export interface PartnerUnclaim {
                'deviceIdentifier': DeviceIdentifier;
                'sectionType': string;
                'deviceId': string;
            }

            export interface Empty {}

            export interface FindDevicesByDeviceIdentifierResponse {
                'devices': Device[];
                'nextPageToken': string;
            }

            export interface PartnerClaim {
                'deviceIdentifier': DeviceIdentifier;
                'deviceMetadata': DeviceMetadata;
                'sectionType': string;
                'customerId': string;
            }

            export interface UnclaimDeviceRequest {
                'deviceIdentifier': DeviceIdentifier;
                'sectionType': string;
                'deviceId': string;
            }

            export interface DeviceMetadata {
                'entries': {
                    [name: string]: string
                ;
                };
            }

            export interface DevicesLongRunningOperationResponse {
                'successCount': number;
                'perDeviceStatus': OperationPerDevice[];
            }

            export interface DeviceClaim {
                'sectionType': string;
                'ownerCompanyId': string;
            }

            export interface PerDeviceStatusInBatch {
                'errorIdentifier': string;
                'errorMessage': string;
                'deviceId': string;
                'status': string;
            }

            export interface FindDevicesByOwnerRequest {
                'limit': string;
                'pageToken': string;
                'sectionType': string;
                'customerId': string[];
            }

            export interface ClaimDevicesRequest {
                'claims': PartnerClaim[];
            }

            export interface DeviceIdentifier {
                'meid': string;
                'manufacturer': string;
                'serialNumber': string;
                'imei': string;
            }

            export interface Operation {
                'name': string;
                'error': Status;
                'metadata': {
                    [name: string]: any
                ;
                };
                'done': boolean;
                'response': {
                    [name: string]: any
                ;
                };
            }

            export interface UnclaimDevicesRequest {
                'unclaims': PartnerUnclaim[];
            }

            export interface FindDevicesByDeviceIdentifierRequest {
                'limit': string;
                'deviceIdentifier': DeviceIdentifier;
                'pageToken': string;
            }

            export interface Status {
                'message': string;
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
            }

            export interface OperationPerDevice {
                'claim': PartnerClaim;
                'updateMetadata': UpdateMetadataArguments;
                'unclaim': PartnerUnclaim;
                'result': PerDeviceStatusInBatch;
            }

            export interface FindDevicesByOwnerResponse {
                'devices': Device[];
                'nextPageToken': string;
            }

        }
    }
}
