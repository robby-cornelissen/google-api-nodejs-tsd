// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        qpxExpress(version: string): any;
        qpxExpress(version: 'v1'): qpxExpress.v1.Qpxexpress;
    }

    namespace qpxExpress {
        namespace v1 {
            export interface Qpxexpress {
                new(options: any): Qpxexpress;

                'trips': {
                    'search': (parameters: any, callback: (error: any, body: TripsSearchResponse, response: any) => void) => Request;
                };

            }

            export interface AircraftData {
                'code': string;
                'kind': string;
                'name': string;
            }

            export interface AirportData {
                'city': string;
                'code': string;
                'kind': string;
                'name': string;
            }

            export interface BagDescriptor {
                'commercialName': string;
                'count': number;
                'description': string[];
                'kind': string;
                'subcode': string;
            }

            export interface CarrierData {
                'code': string;
                'kind': string;
                'name': string;
            }

            export interface CityData {
                'code': string;
                'country': string;
                'kind': string;
                'name': string;
            }

            export interface Data {
                'aircraft': AircraftData[];
                'airport': AirportData[];
                'carrier': CarrierData[];
                'city': CityData[];
                'kind': string;
                'tax': TaxData[];
            }

            export interface FareInfo {
                'basisCode': string;
                'carrier': string;
                'destination': string;
                'id': string;
                'kind': string;
                'origin': string;
                'private': boolean;
            }

            export interface FlightInfo {
                'carrier': string;
                'number': string;
            }

            export interface FreeBaggageAllowance {
                'bagDescriptor': BagDescriptor[];
                'kilos': number;
                'kilosPerPiece': number;
                'kind': string;
                'pieces': number;
                'pounds': number;
            }

            export interface LegInfo {
                'aircraft': string;
                'arrivalTime': string;
                'changePlane': boolean;
                'connectionDuration': number;
                'departureTime': string;
                'destination': string;
                'destinationTerminal': string;
                'duration': number;
                'id': string;
                'kind': string;
                'meal': string;
                'mileage': number;
                'onTimePerformance': number;
                'operatingDisclosure': string;
                'origin': string;
                'originTerminal': string;
                'secure': boolean;
            }

            export interface PassengerCounts {
                'adultCount': number;
                'childCount': number;
                'infantInLapCount': number;
                'infantInSeatCount': number;
                'kind': string;
                'seniorCount': number;
            }

            export interface PricingInfo {
                'baseFareTotal': string;
                'fare': FareInfo[];
                'fareCalculation': string;
                'kind': string;
                'latestTicketingTime': string;
                'passengers': PassengerCounts;
                'ptc': string;
                'refundable': boolean;
                'saleFareTotal': string;
                'saleTaxTotal': string;
                'saleTotal': string;
                'segmentPricing': SegmentPricing[];
                'tax': TaxInfo[];
            }

            export interface SegmentInfo {
                'bookingCode': string;
                'bookingCodeCount': number;
                'cabin': string;
                'connectionDuration': number;
                'duration': number;
                'flight': FlightInfo;
                'id': string;
                'kind': string;
                'leg': LegInfo[];
                'marriedSegmentGroup': string;
                'subjectToGovernmentApproval': boolean;
            }

            export interface SegmentPricing {
                'fareId': string;
                'freeBaggageOption': FreeBaggageAllowance[];
                'kind': string;
                'segmentId': string;
            }

            export interface SliceInfo {
                'duration': number;
                'kind': string;
                'segment': SegmentInfo[];
            }

            export interface SliceInput {
                'alliance': string;
                'date': string;
                'destination': string;
                'kind': string;
                'maxConnectionDuration': number;
                'maxStops': number;
                'origin': string;
                'permittedCarrier': string[];
                'permittedDepartureTime': TimeOfDayRange;
                'preferredCabin': string;
                'prohibitedCarrier': string[];
            }

            export interface TaxData {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface TaxInfo {
                'chargeType': string;
                'code': string;
                'country': string;
                'id': string;
                'kind': string;
                'salePrice': string;
            }

            export interface TimeOfDayRange {
                'earliestTime': string;
                'kind': string;
                'latestTime': string;
            }

            export interface TripOption {
                'id': string;
                'kind': string;
                'pricing': PricingInfo[];
                'saleTotal': string;
                'slice': SliceInfo[];
            }

            export interface TripOptionsRequest {
                'maxPrice': string;
                'passengers': PassengerCounts;
                'refundable': boolean;
                'saleCountry': string;
                'slice': SliceInput[];
                'solutions': number;
                'ticketingCountry': string;
            }

            export interface TripOptionsResponse {
                'data': Data;
                'kind': string;
                'requestId': string;
                'tripOption': TripOption[];
            }

            export interface TripsSearchRequest {
                'request': TripOptionsRequest;
            }

            export interface TripsSearchResponse {
                'kind': string;
                'trips': TripOptionsResponse;
            }

        }
    }
}
