/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
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

            interface AntennaCharacteristics {
                'height': number;
                'heightType': string;
                'heightUncertainty': number;
            }

            interface DatabaseSpec {
                'name': string;
                'uri': string;
            }

            interface DbUpdateSpec {
                'databases': DatabaseSpec[];
            }

            interface DeviceCapabilities {
                'frequencyRanges': FrequencyRange[];
            }

            interface DeviceDescriptor {
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

            interface DeviceOwner {
                'operator': Vcard;
                'owner': Vcard;
            }

            interface DeviceValidity {
                'deviceDesc': DeviceDescriptor;
                'isValid': boolean;
                'reason': string;
            }

            interface EventTime {
                'startTime': string;
                'stopTime': string;
            }

            interface FrequencyRange {
                'channelId': string;
                'maxPowerDBm': number;
                'startHz': number;
                'stopHz': number;
            }

            interface GeoLocation {
                'confidence': number;
                'point': GeoLocationEllipse;
                'region': GeoLocationPolygon;
            }

            interface GeoLocationEllipse {
                'center': GeoLocationPoint;
                'orientation': number;
                'semiMajorAxis': number;
                'semiMinorAxis': number;
            }

            interface GeoLocationPoint {
                'latitude': number;
                'longitude': number;
            }

            interface GeoLocationPolygon {
                'exterior': GeoLocationPoint[];
            }

            interface GeoSpectrumSchedule {
                'location': GeoLocation;
                'spectrumSchedules': SpectrumSchedule[];
            }

            interface PawsGetSpectrumBatchRequest {
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

            interface PawsGetSpectrumBatchResponse {
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

            interface PawsGetSpectrumRequest {
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

            interface PawsGetSpectrumResponse {
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

            interface PawsInitRequest {
                'deviceDesc': DeviceDescriptor;
                'location': GeoLocation;
                'type': string;
                'version': string;
            }

            interface PawsInitResponse {
                'databaseChange': DbUpdateSpec;
                'kind': string;
                'rulesetInfo': RulesetInfo;
                'type': string;
                'version': string;
            }

            interface PawsNotifySpectrumUseRequest {
                'deviceDesc': DeviceDescriptor;
                'location': GeoLocation;
                'spectra': SpectrumMessage[];
                'type': string;
                'version': string;
            }

            interface PawsNotifySpectrumUseResponse {
                'kind': string;
                'type': string;
                'version': string;
            }

            interface PawsRegisterRequest {
                'antenna': AntennaCharacteristics;
                'deviceDesc': DeviceDescriptor;
                'deviceOwner': DeviceOwner;
                'location': GeoLocation;
                'type': string;
                'version': string;
            }

            interface PawsRegisterResponse {
                'databaseChange': DbUpdateSpec;
                'kind': string;
                'type': string;
                'version': string;
            }

            interface PawsVerifyDeviceRequest {
                'deviceDescs': DeviceDescriptor[];
                'type': string;
                'version': string;
            }

            interface PawsVerifyDeviceResponse {
                'databaseChange': DbUpdateSpec;
                'deviceValidities': DeviceValidity[];
                'kind': string;
                'type': string;
                'version': string;
            }

            interface RulesetInfo {
                'authority': string;
                'maxLocationChange': number;
                'maxPollingSecs': number;
                'rulesetIds': string[];
            }

            interface SpectrumMessage {
                'bandwidth': number;
                'frequencyRanges': FrequencyRange[];
            }

            interface SpectrumSchedule {
                'eventTime': EventTime;
                'spectra': SpectrumMessage[];
            }

            interface Vcard {
                'adr': VcardAddress;
                'email': VcardTypedText;
                'fn': string;
                'org': VcardTypedText;
                'tel': VcardTelephone;
            }

            interface VcardAddress {
                'code': string;
                'country': string;
                'locality': string;
                'pobox': string;
                'region': string;
                'street': string;
            }

            interface VcardTelephone {
                'uri': string;
            }

            interface VcardTypedText {
                'text': string;
            }

        }
    }
}