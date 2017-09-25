// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        servicecontrol(version: string): any;
        servicecontrol(version: 'v1'): servicecontrol.v1.Servicecontrol;
    }

    namespace servicecontrol {
        namespace v1 {
            export interface Servicecontrol {
                new(options: any): Servicecontrol;

                'services': {
                    'startReconciliation': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: StartReconciliationResponse, response: any) => void) => Request;
                    'check': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: CheckResponse, response: any) => void) => Request;
                    'releaseQuota': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: ReleaseQuotaResponse, response: any) => void) => Request;
                    'endReconciliation': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: EndReconciliationResponse, response: any) => void) => Request;
                    'report': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: ReportResponse, response: any) => void) => Request;
                    'allocateQuota': (parameters: { [key: string]: any; 'serviceName': string}, callback: (error: any, body: AllocateQuotaResponse, response: any) => void) => Request;
                };

            }

            export interface Status {
                'details': {
                    [name: string]: any
                ;
                }[];
                'code': number;
                'message': string;
            }

            export interface ReportRequest {
                'serviceConfigId': string;
                'operations': Operation[];
            }

            export interface AllocateInfo {
                'unusedArguments': string[];
            }

            export interface AuditLog {
                'serviceName': string;
                'response': {
                    [name: string]: any
                ;
                };
                'metadata': {
                    [name: string]: any
                ;
                }[];
                'methodName': string;
                'resourceName': string;
                'serviceData': {
                    [name: string]: any
                ;
                };
                'numResponseItems': string;
                'authorizationInfo': AuthorizationInfo[];
                'request': {
                    [name: string]: any
                ;
                };
                'requestMetadata': RequestMetadata;
                'authenticationInfo': AuthenticationInfo;
                'status': Status;
            }

            export interface LogEntry {
                'labels': {
                    [name: string]: string
                ;
                };
                'severity': string;
                'insertId': string;
                'name': string;
                'structPayload': {
                    [name: string]: any
                ;
                };
                'textPayload': string;
                'protoPayload': {
                    [name: string]: any
                ;
                };
                'timestamp': string;
            }

            export interface MetricValue {
                'int64Value': string;
                'distributionValue': Distribution;
                'boolValue': boolean;
                'endTime': string;
                'startTime': string;
                'moneyValue': Money;
                'stringValue': string;
                'labels': {
                    [name: string]: string
                ;
                };
                'doubleValue': number;
            }

            export interface EndReconciliationResponse {
                'quotaMetrics': MetricValueSet[];
                'reconciliationErrors': QuotaError[];
                'operationId': string;
                'serviceConfigId': string;
            }

            export interface Money {
                'currencyCode': string;
                'nanos': number;
                'units': string;
            }

            export interface ExplicitBuckets {
                'bounds': number[];
            }

            export interface Distribution {
                'bucketCounts': string[];
                'explicitBuckets': ExplicitBuckets;
                'maximum': number;
                'sumOfSquaredDeviation': number;
                'exponentialBuckets': ExponentialBuckets;
                'minimum': number;
                'linearBuckets': LinearBuckets;
                'count': string;
                'mean': number;
            }

            export interface ExponentialBuckets {
                'growthFactor': number;
                'scale': number;
                'numFiniteBuckets': number;
            }

            export interface AuthorizationInfo {
                'granted': boolean;
                'permission': string;
                'resource': string;
            }

            export interface ResourceInfo {
                'resourceName': string;
                'resourceContainer': string;
            }

            export interface StartReconciliationResponse {
                'quotaMetrics': MetricValueSet[];
                'reconciliationErrors': QuotaError[];
                'operationId': string;
                'serviceConfigId': string;
            }

            export interface QuotaProperties {
                'quotaMode': string;
                'limitByIds': {
                    [name: string]: string
                ;
                };
            }

            export interface LinearBuckets {
                'width': number;
                'offset': number;
                'numFiniteBuckets': number;
            }

            export interface AuthenticationInfo {
                'principalEmail': string;
                'authoritySelector': string;
                'thirdPartyPrincipal': {
                    [name: string]: any
                ;
                };
            }

            export interface AllocateQuotaResponse {
                'operationId': string;
                'allocateInfo': AllocateInfo;
                'serviceConfigId': string;
                'allocateErrors': QuotaError[];
                'quotaMetrics': MetricValueSet[];
            }

            export interface ReleaseQuotaRequest {
                'serviceConfigId': string;
                'releaseOperation': QuotaOperation;
            }

            export interface QuotaError {
                'description': string;
                'subject': string;
                'code': string;
            }

            export interface RequestMetadata {
                'callerIp': string;
                'callerSuppliedUserAgent': string;
            }

            export interface CheckInfo {
                'unusedArguments': string[];
                'consumerInfo': ConsumerInfo;
            }

            export interface ReleaseQuotaResponse {
                'quotaMetrics': MetricValueSet[];
                'operationId': string;
                'serviceConfigId': string;
                'releaseErrors': QuotaError[];
            }

            export interface AllocateQuotaRequest {
                'serviceConfigId': string;
                'allocateOperation': QuotaOperation;
            }

            export interface MetricValueSet {
                'metricName': string;
                'metricValues': MetricValue[];
            }

            export interface ReportError {
                'operationId': string;
                'status': Status;
            }

            export interface StartReconciliationRequest {
                'reconciliationOperation': QuotaOperation;
                'serviceConfigId': string;
            }

            export interface CheckError {
                'code': string;
                'detail': string;
            }

            export interface QuotaInfo {
                'limitExceeded': string[];
                'quotaConsumed': {
                    [name: string]: number
                ;
                };
                'quotaMetrics': MetricValueSet[];
            }

            export interface ConsumerInfo {
                'projectNumber': string;
            }

            export interface CheckRequest {
                'skipActivationCheck': boolean;
                'requestProjectSettings': boolean;
                'operation': Operation;
                'serviceConfigId': string;
            }

            export interface QuotaOperation {
                'consumerId': string;
                'operationId': string;
                'quotaMode': string;
                'methodName': string;
                'quotaMetrics': MetricValueSet[];
                'labels': {
                    [name: string]: string
                ;
                };
            }

            export interface EndReconciliationRequest {
                'serviceConfigId': string;
                'reconciliationOperation': QuotaOperation;
            }

            export interface ReportInfo {
                'operationId': string;
                'quotaInfo': QuotaInfo;
            }

            export interface Operation {
                'labels': {
                    [name: string]: string
                ;
                };
                'resources': ResourceInfo[];
                'logEntries': LogEntry[];
                'userLabels': {
                    [name: string]: string
                ;
                };
                'metricValueSets': MetricValueSet[];
                'quotaProperties': QuotaProperties;
                'consumerId': string;
                'operationId': string;
                'endTime': string;
                'operationName': string;
                'startTime': string;
                'importance': string;
                'resourceContainer': string;
            }

            export interface ReportResponse {
                'reportErrors': ReportError[];
                'reportInfos': ReportInfo[];
                'serviceConfigId': string;
            }

            export interface CheckResponse {
                'checkInfo': CheckInfo;
                'checkErrors': CheckError[];
                'operationId': string;
                'serviceConfigId': string;
                'quotaInfo': QuotaInfo;
            }

        }
    }
}
