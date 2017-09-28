// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        fusiontables(version: string): any;
        fusiontables(version: 'v2'): fusiontables.v2.Fusiontables;
    }

    namespace fusiontables {
        namespace v2 {
            export interface Fusiontables {
                new(options: any): Fusiontables;

                'column': {
                    'delete': (parameters: { [key: string]: any; 'columnId': string, 'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'columnId': string, 'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'tableId': string}, callback: (error: any, body: ColumnList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'columnId': string, 'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'columnId': string, 'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                };
                'query': {
                    'sql': (parameters: { [key: string]: any; 'hdrs'?: boolean, 'sql': string, 'typed'?: boolean}, callback: (error: any, body: Sqlresponse, response: any) => void) => Request;
                    'sqlGet': (parameters: { [key: string]: any; 'hdrs'?: boolean, 'sql': string, 'typed'?: boolean}, callback: (error: any, body: Sqlresponse, response: any) => void) => Request;
                };
                'style': {
                    'delete': (parameters: { [key: string]: any; 'styleId': number, 'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'styleId': number, 'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'tableId': string}, callback: (error: any, body: StyleSettingList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'styleId': number, 'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'styleId': number, 'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                };
                'table': {
                    'copy': (parameters: { [key: string]: any; 'copyPresentation'?: boolean, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'delete': (parameters: { [key: string]: any; 'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'importRows': (parameters: { [key: string]: any; 'delimiter'?: string, 'encoding'?: string, 'endLine'?: number, 'isStrict'?: boolean, 'startLine'?: number, 'tableId': string}, callback: (error: any, body: Import, response: any) => void) => Request;
                    'importTable': (parameters: { [key: string]: any; 'delimiter'?: string, 'encoding'?: string, 'name': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Table, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: TableList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'replaceViewDefinition'?: boolean, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'replaceRows': (parameters: { [key: string]: any; 'delimiter'?: string, 'encoding'?: string, 'endLine'?: number, 'isStrict'?: boolean, 'startLine'?: number, 'tableId': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'replaceViewDefinition'?: boolean, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                };
                'task': {
                    'delete': (parameters: { [key: string]: any; 'tableId': string, 'taskId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'tableId': string, 'taskId': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'startIndex'?: number, 'tableId': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                };
                'template': {
                    'delete': (parameters: { [key: string]: any; 'tableId': string, 'templateId': number}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'tableId': string, 'templateId': number}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'insert': (parameters: { [key: string]: any; 'tableId': string}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'maxResults'?: number, 'pageToken'?: string, 'tableId': string}, callback: (error: any, body: TemplateList, response: any) => void) => Request;
                    'patch': (parameters: { [key: string]: any; 'tableId': string, 'templateId': number}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'update': (parameters: { [key: string]: any; 'tableId': string, 'templateId': number}, callback: (error: any, body: Template, response: any) => void) => Request;
                };

            }

            export interface Bucket {
                'color': string;
                'icon': string;
                'max': number;
                'min': number;
                'opacity': number;
                'weight': number;
            }

            export interface Column {
                'baseColumn': {
                    'columnId': number;
                    'tableIndex': number;
                };
                'columnId': number;
                'columnJsonSchema': string;
                'columnPropertiesJson': string;
                'description': string;
                'formatPattern': string;
                'graphPredicate': string;
                'kind': string;
                'name': string;
                'type': string;
                'validValues': string[];
                'validateData': boolean;
            }

            export interface ColumnList {
                'items': Column[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            export interface Geometry {
                'geometries': any[];
                'geometry': any;
                'type': string;
            }

            export interface Import {
                'kind': string;
                'numRowsReceived': string;
            }

            export interface Line {
                'coordinates': number[][];
                'type': string;
            }

            export interface LineStyle {
                'strokeColor': string;
                'strokeColorStyler': StyleFunction;
                'strokeOpacity': number;
                'strokeWeight': number;
                'strokeWeightStyler': StyleFunction;
            }

            export interface Point {
                'coordinates': number[];
                'type': string;
            }

            export interface PointStyle {
                'iconName': string;
                'iconStyler': StyleFunction;
            }

            export interface Polygon {
                'coordinates': number[][][];
                'type': string;
            }

            export interface PolygonStyle {
                'fillColor': string;
                'fillColorStyler': StyleFunction;
                'fillOpacity': number;
                'strokeColor': string;
                'strokeColorStyler': StyleFunction;
                'strokeOpacity': number;
                'strokeWeight': number;
                'strokeWeightStyler': StyleFunction;
            }

            export interface Sqlresponse {
                'columns': string[];
                'kind': string;
                'rows': any[][];
            }

            export interface StyleFunction {
                'buckets': Bucket[];
                'columnName': string;
                'gradient': {
                    'colors': {
                        'color': string;
                        'opacity': number;
                    }[];
                    'max': number;
                    'min': number;
                };
                'kind': string;
            }

            export interface StyleSetting {
                'kind': string;
                'markerOptions': PointStyle;
                'name': string;
                'polygonOptions': PolygonStyle;
                'polylineOptions': LineStyle;
                'styleId': number;
                'tableId': string;
            }

            export interface StyleSettingList {
                'items': StyleSetting[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            export interface Table {
                'attribution': string;
                'attributionLink': string;
                'baseTableIds': string[];
                'columnPropertiesJsonSchema': string;
                'columns': Column[];
                'description': string;
                'isExportable': boolean;
                'kind': string;
                'name': string;
                'sql': string;
                'tableId': string;
                'tablePropertiesJson': string;
                'tablePropertiesJsonSchema': string;
            }

            export interface TableList {
                'items': Table[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Task {
                'kind': string;
                'progress': string;
                'started': boolean;
                'taskId': string;
                'type': string;
            }

            export interface TaskList {
                'items': Task[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            export interface Template {
                'automaticColumnNames': string[];
                'body': string;
                'kind': string;
                'name': string;
                'tableId': string;
                'templateId': number;
            }

            export interface TemplateList {
                'items': Template[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

        }
    }
}
