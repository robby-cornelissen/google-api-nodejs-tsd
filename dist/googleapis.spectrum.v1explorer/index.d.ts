// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        spectrum(version: string): any;
        spectrum(version: 'v1explorer'): spectrum.v1explorer.Spectrum;
    }

    namespace spectrum {
        namespace v1explorer {
            export interface Spectrum {
                new(options: any): Spectrum;

                'paws': {
                    'getSpectrum': (parameters: any, callback: (error: any, body: PawsGetSpectrumResponse, response: any) => void) => Request;
                    'getSpectrumBatch': (parameters: any, callback: (error: any, body: PawsGetSpectrumBatchResponse, response: any) => void) => Request;
                    'init': (parameters: any, callback: (error: any, body: PawsInitResponse, response: any) => void) => Request;
                    'notifySpectrumUse': (parameters: any, callback: (error: any, body: PawsNotifySpectrumUseResponse, response: any) => void) => Request;
                    'register': (parameters: any, callback: (error: any, body: PawsRegisterResponse, response: any) => void) => Request;
                    'verifyDevice': (parameters: any, callback: (error: any, body: PawsVerifyDeviceResponse, response: any) => void) => Request;
                };

            }

            export interface AntennaCharacteristics {
                'height': number;
                'heightType': string;
                'heightUncertainty': number;
            }

            export interface DatabaseSpec {
                'name': string;
                'uri': string;
            }

            export interface DbUpdateSpec {
                'databases': DatabaseSpec[];
            }

            export interface DeviceCapabilities {
                'frequencyRanges': FrequencyRange[];
            }

            export interface DeviceDescriptor {
                'etsiEnDeviceCategory': string;
                'etsiEnDeviceEmissionsClass': string;
                'etsiEnDeviceType': string;
                'etsiEnTechnologyId': string;
                'fccId': string;
                'fccTvbdDeviceType': string;
                'manufacturerId': string;
                'modelId': string;
                'rulesetIds': string[];
                'serialNumber': string;
            }

            export interface DeviceOwner {
                'operator': Vcard;
                'owner': Vcard;
            }

            export interface DeviceValidity {
                'deviceDesc': DeviceDescriptor;
                'isValid': boolean;
                'reason': string;
            }

            export interface EventTime {
                'startTime': string;
                'stopTime': string;
            }

            export interface FrequencyRange {
                'channelId': string;
                'maxPowerDBm': number;
                'startHz': number;
                'stopHz': number;
            }

            export interface GeoLocation {
                'confidence': number;
                'point': GeoLocationEllipse;
                'region': GeoLocationPolygon;
            }

            export interface GeoLocationEllipse {
                'center': GeoLocationPoint;
                'orientation': number;
                'semiMajorAxis': number;
                'semiMinorAxis': number;
            }

            export interface GeoLocationPoint {
                'latitude': number;
                'longitude': number;
            }

            export interface GeoLocationPolygon {
                'exterior': GeoLocationPoint[];
            }

            export interface GeoSpectrumSchedule {
                'location': GeoLocation;
                'spectrumSchedules': SpectrumSchedule[];
            }

            export interface PawsGetSpectrumBatchRequest {
                'antenna': AntennaCharacteristics;
                'capabilities': DeviceCapabilities;
                'deviceDesc': DeviceDescriptor;
                'locations': GeoLocation[];
                'masterDeviceDesc': DeviceDescriptor;
                'owner': DeviceOwner;
                'requestType': string;
                'type': string;
                'version': string;
            }

            export interface PawsGetSpectrumBatchResponse {
                'databaseChange': DbUpdateSpec;
                'deviceDesc': DeviceDescriptor;
                'geoSpectrumSchedules': GeoSpectrumSchedule[];
                'kind': string;
                'maxContiguousBwHz': number;
                'maxTotalBwHz': number;
                'needsSpectrumReport': boolean;
                'rulesetInfo': RulesetInfo;
                'timestamp': string;
                'type': string;
                'version': string;
            }

            export interface PawsGetSpectrumRequest {
                'antenna': AntennaCharacteristics;
                'capabilities': DeviceCapabilities;
                'deviceDesc': DeviceDescriptor;
                'location': GeoLocation;
                'masterDeviceDesc': DeviceDescriptor;
                'owner': DeviceOwner;
                'requestType': string;
                'type': string;
                'version': string;
            }

            export interface PawsGetSpectrumResponse {
                'databaseChange': DbUpdateSpec;
                'deviceDesc': DeviceDescriptor;
                'kind': string;
                'maxContiguousBwHz': number;
                'maxTotalBwHz': number;
                'needsSpectrumReport': boolean;
                'rulesetInfo': RulesetInfo;
                'spectrumSchedules': SpectrumSchedule[];
                'timestamp': string;
                'type': string;
                'version': string;
            }

            export interface PawsInitRequest {
                'deviceDesc': DeviceDescriptor;
                'location': GeoLocation;
                'type': string;
                'version': string;
            }

            export interface PawsInitResponse {
                'databaseChange': DbUpdateSpec;
                'kind': string;
                'rulesetInfo': RulesetInfo;
                'type': string;
                'version': string;
            }

            export interface PawsNotifySpectrumUseRequest {
                'deviceDesc': DeviceDescriptor;
                'location': GeoLocation;
                'spectra': SpectrumMessage[];
                'type': string;
                'version': string;
            }

            export interface PawsNotifySpectrumUseResponse {
                'kind': string;
                'type': string;
                'version': string;
            }

            export interface PawsRegisterRequest {
                'antenna': AntennaCharacteristics;
                'deviceDesc': DeviceDescriptor;
                'deviceOwner': DeviceOwner;
                'location': GeoLocation;
                'type': string;
                'version': string;
            }

            export interface PawsRegisterResponse {
                'databaseChange': DbUpdateSpec;
                'kind': string;
                'type': string;
                'version': string;
            }

            export interface PawsVerifyDeviceRequest {
                'deviceDescs': DeviceDescriptor[];
                'type': string;
                'version': string;
            }

            export interface PawsVerifyDeviceResponse {
                'databaseChange': DbUpdateSpec;
                'deviceValidities': DeviceValidity[];
                'kind': string;
                'type': string;
                'version': string;
            }

            export interface RulesetInfo {
                'authority': string;
                'maxLocationChange': number;
                'maxPollingSecs': number;
                'rulesetIds': string[];
            }

            export interface SpectrumMessage {
                'bandwidth': number;
                'frequencyRanges': FrequencyRange[];
            }

            export interface SpectrumSchedule {
                'eventTime': EventTime;
                'spectra': SpectrumMessage[];
            }

            export interface Vcard {
                'adr': VcardAddress;
                'email': VcardTypedText;
                'fn': string;
                'org': VcardTypedText;
                'tel': VcardTelephone;
            }

            export interface VcardAddress {
                'code': string;
                'country': string;
                'locality': string;
                'pobox': string;
                'region': string;
                'street': string;
            }

            export interface VcardTelephone {
                'uri': string;
            }

            export interface VcardTypedText {
                'text': string;
            }

        }
    }
}
