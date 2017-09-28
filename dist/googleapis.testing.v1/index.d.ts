// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        testing(version: string): any;
        testing(version: 'v1'): testing.v1.Testing;
    }

    namespace testing {
        namespace v1 {
            export interface Testing {
                new(options: any): Testing;

                'projects': {
                    'testMatrices': {
                        'create': (parameters: { [key: string]: any; 'projectId': string, 'requestId'?: string}, callback: (error: any, body: TestMatrix, response: any) => void) => Request;
                        'cancel': (parameters: { [key: string]: any; 'projectId': string, 'testMatrixId': string}, callback: (error: any, body: CancelTestMatrixResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'testMatrixId': string, 'projectId': string}, callback: (error: any, body: TestMatrix, response: any) => void) => Request;
                    };
                };
                'testEnvironmentCatalog': {
                    'get': (parameters: { [key: string]: any; 'projectId'?: string, 'environmentType': string}, callback: (error: any, body: TestEnvironmentCatalog, response: any) => void) => Request;
                };

            }

            export interface TestSpecification {
                'autoGoogleLogin': boolean;
                'testSetup': TestSetup;
                'androidRoboTest': AndroidRoboTest;
                'androidTestLoop': AndroidTestLoop;
                'androidInstrumentationTest': AndroidInstrumentationTest;
                'disablePerformanceMetrics': boolean;
                'disableVideoRecording': boolean;
                'testTimeout': string;
            }

            export interface TestMatrix {
                'testSpecification': TestSpecification;
                'projectId': string;
                'clientInfo': ClientInfo;
                'testExecutions': TestExecution[];
                'timestamp': string;
                'environmentMatrix': EnvironmentMatrix;
                'resultStorage': ResultStorage;
                'testMatrixId': string;
                'invalidMatrixDetails': string;
                'state': string;
            }

            export interface ResultStorage {
                'toolResultsHistory': ToolResultsHistory;
                'googleCloudStorage': GoogleCloudStorage;
                'toolResultsExecution': ToolResultsExecution;
            }

            export interface FileReference {
                'gcsPath': string;
            }

            export interface AndroidVersion {
                'apiLevel': number;
                'distribution': Distribution;
                'releaseDate': Date;
                'id': string;
                'tags': string[];
                'versionString': string;
                'codeName': string;
            }

            export interface TestDetails {
                'progressMessages': string[];
                'errorMessage': string;
            }

            export interface ToolResultsExecution {
                'executionId': string;
                'historyId': string;
                'projectId': string;
            }

            export interface Distribution {
                'marketShare': number;
                'measurementTime': string;
            }

            export interface AndroidRoboTest {
                'appInitialActivity': string;
                'maxSteps': number;
                'roboDirectives': RoboDirective[];
                'maxDepth': number;
                'appApk': FileReference;
                'appPackageId': string;
            }

            export interface ToolResultsHistory {
                'historyId': string;
                'projectId': string;
            }

            export interface Orientation {
                'tags': string[];
                'id': string;
                'name': string;
            }

            export interface AndroidTestLoop {
                'appPackageId': string;
                'appApk': FileReference;
                'scenarioLabels': string[];
                'scenarios': number[];
            }

            export interface NetworkConfigurationCatalog {
                'configurations': NetworkConfiguration[];
            }

            export interface AndroidDeviceCatalog {
                'runtimeConfiguration': AndroidRuntimeConfiguration;
                'versions': AndroidVersion[];
                'models': AndroidModel[];
            }

            export interface GoogleAuto {}

            export interface AndroidDeviceList {
                'androidDevices': AndroidDevice[];
            }

            export interface ClientInfo {
                'clientInfoDetails': ClientInfoDetail[];
                'name': string;
            }

            export interface EnvironmentMatrix {
                'androidDeviceList': AndroidDeviceList;
                'androidMatrix': AndroidMatrix;
            }

            export interface Date {
                'day': number;
                'year': number;
                'month': number;
            }

            export interface CancelTestMatrixResponse {
                'testState': string;
            }

            export interface Locale {
                'name': string;
                'tags': string[];
                'id': string;
                'region': string;
            }

            export interface TestEnvironmentCatalog {
                'androidDeviceCatalog': AndroidDeviceCatalog;
                'networkConfigurationCatalog': NetworkConfigurationCatalog;
            }

            export interface Account {
                'googleAuto': GoogleAuto;
            }

            export interface ObbFile {
                'obb': FileReference;
                'obbFileName': string;
            }

            export interface AndroidRuntimeConfiguration {
                'locales': Locale[];
                'orientations': Orientation[];
            }

            export interface AndroidDevice {
                'orientation': string;
                'locale': string;
                'androidVersionId': string;
                'androidModelId': string;
            }

            export interface NetworkConfiguration {
                'id': string;
                'upRule': TrafficRule;
                'downRule': TrafficRule;
            }

            export interface ToolResultsStep {
                'stepId': string;
                'historyId': string;
                'projectId': string;
                'executionId': string;
            }

            export interface TrafficRule {
                'packetLossRatio': number;
                'burst': number;
                'bandwidth': number;
                'packetDuplicationRatio': number;
                'delay': string;
            }

            export interface AndroidInstrumentationTest {
                'orchestratorOption': string;
                'testTargets': string[];
                'testApk': FileReference;
                'testRunnerClass': string;
                'testPackageId': string;
                'appApk': FileReference;
                'appPackageId': string;
            }

            export interface DeviceFile {
                'obbFile': ObbFile;
            }

            export interface ClientInfoDetail {
                'value': string;
                'key': string;
            }

            export interface EnvironmentVariable {
                'value': string;
                'key': string;
            }

            export interface Environment {
                'androidDevice': AndroidDevice;
            }

            export interface TestExecution {
                'testDetails': TestDetails;
                'matrixId': string;
                'environment': Environment;
                'state': string;
                'toolResultsStep': ToolResultsStep;
                'projectId': string;
                'testSpecification': TestSpecification;
                'id': string;
                'timestamp': string;
            }

            export interface GoogleCloudStorage {
                'gcsPath': string;
            }

            export interface RoboDirective {
                'actionType': string;
                'inputText': string;
                'resourceName': string;
            }

            export interface AndroidMatrix {
                'locales': string[];
                'androidVersionIds': string[];
                'androidModelIds': string[];
                'orientations': string[];
            }

            export interface AndroidModel {
                'form': string;
                'screenDensity': number;
                'supportedVersionIds': string[];
                'supportedAbis': string[];
                'name': string;
                'id': string;
                'tags': string[];
                'manufacturer': string;
                'brand': string;
                'screenX': number;
                'codename': string;
                'screenY': number;
            }

            export interface TestSetup {
                'directoriesToPull': string[];
                'filesToPush': DeviceFile[];
                'networkProfile': string;
                'environmentVariables': EnvironmentVariable[];
                'account': Account;
            }

        }
    }
}
