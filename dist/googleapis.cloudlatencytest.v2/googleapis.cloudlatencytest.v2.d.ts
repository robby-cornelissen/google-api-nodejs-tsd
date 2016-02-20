/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        cloudlatencytest(version: string): any;
        cloudlatencytest(version: 'v2'): cloudlatencytest.v2.Cloudlatencytest;
    }

    namespace cloudlatencytest {
        namespace v2 {
            export interface Cloudlatencytest {
                new(options: any): Cloudlatencytest;

                'statscollection': {
                    'updateaggregatedstats': (parameters: any, callback: (error: any, body: AggregatedStatsReply, response: any) => void) => Request;
                    'updatestats': (parameters: any, callback: (error: any, body: StatsReply, response: any) => void) => Request;
                };

            }

            interface AggregatedStats {
                'stats': Stats[];
            }

            interface AggregatedStatsReply {
                'testValue': string;
            }

            interface DoubleValue {
                'label': string;
                'value': number;
            }

            interface IntValue {
                'label': string;
                'value': string;
            }

            interface Stats {
                'doubleValues': DoubleValue[];
                'intValues': IntValue[];
                'stringValues': StringValue[];
                'time': number;
            }

            interface StatsReply {
                'testValue': string;
            }

            interface StringValue {
                'label': string;
                'value': string;
            }

        }
    }
}