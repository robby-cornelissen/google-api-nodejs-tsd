/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        fusiontables(version: string): any;
        fusiontables(version: 'v2'): fusiontables.v2.Fusiontables;
    }

    namespace fusiontables {
        namespace v2 {
            export interface Fusiontables {
                new(options: any): Fusiontables;

                'column': {
                    'delete': (parameters: {'columnId': string, 'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'columnId': string, 'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                    'insert': (parameters: {'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'tableId': string}, callback: (error: any, body: ColumnList, response: any) => void) => Request;
                    'patch': (parameters: {'columnId': string, 'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                    'update': (parameters: {'columnId': string, 'tableId': string}, callback: (error: any, body: Column, response: any) => void) => Request;
                };
                'query': {
                    'sql': (parameters: {'hdrs'?: boolean, 'sql': string, 'typed'?: boolean}, callback: (error: any, body: Sqlresponse, response: any) => void) => Request;
                    'sqlGet': (parameters: {'hdrs'?: boolean, 'sql': string, 'typed'?: boolean}, callback: (error: any, body: Sqlresponse, response: any) => void) => Request;
                };
                'style': {
                    'delete': (parameters: {'styleId': number, 'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'styleId': number, 'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                    'insert': (parameters: {'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'tableId': string}, callback: (error: any, body: StyleSettingList, response: any) => void) => Request;
                    'patch': (parameters: {'styleId': number, 'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                    'update': (parameters: {'styleId': number, 'tableId': string}, callback: (error: any, body: StyleSetting, response: any) => void) => Request;
                };
                'table': {
                    'copy': (parameters: {'copyPresentation'?: boolean, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'delete': (parameters: {'tableId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'importRows': (parameters: {'delimiter'?: string, 'encoding'?: string, 'endLine'?: number, 'isStrict'?: boolean, 'startLine'?: number, 'tableId': string}, callback: (error: any, body: Import, response: any) => void) => Request;
                    'importTable': (parameters: {'delimiter'?: string, 'encoding'?: string, 'name': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'insert': (parameters: any, callback: (error: any, body: Table, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string}, callback: (error: any, body: TableList, response: any) => void) => Request;
                    'patch': (parameters: {'replaceViewDefinition'?: boolean, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                    'replaceRows': (parameters: {'delimiter'?: string, 'encoding'?: string, 'endLine'?: number, 'isStrict'?: boolean, 'startLine'?: number, 'tableId': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'update': (parameters: {'replaceViewDefinition'?: boolean, 'tableId': string}, callback: (error: any, body: Table, response: any) => void) => Request;
                };
                'task': {
                    'delete': (parameters: {'tableId': string, 'taskId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'tableId': string, 'taskId': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'startIndex'?: number, 'tableId': string}, callback: (error: any, body: TaskList, response: any) => void) => Request;
                };
                'template': {
                    'delete': (parameters: {'tableId': string, 'templateId': number}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'tableId': string, 'templateId': number}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'insert': (parameters: {'tableId': string}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'tableId': string}, callback: (error: any, body: TemplateList, response: any) => void) => Request;
                    'patch': (parameters: {'tableId': string, 'templateId': number}, callback: (error: any, body: Template, response: any) => void) => Request;
                    'update': (parameters: {'tableId': string, 'templateId': number}, callback: (error: any, body: Template, response: any) => void) => Request;
                };

            }

            interface Bucket {
                'color': string;
                'icon': string;
                'max': number;
                'min': number;
                'opacity': number;
                'weight': number;
            }

            interface Column {
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

            interface ColumnList {
                'items': Column[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            interface Geometry {
                'geometries': any[];
                'geometry': any;
                'type': string;
            }

            interface Import {
                'kind': string;
                'numRowsReceived': string;
            }

            interface Line {
                'coordinates': number[][];
                'type': string;
            }

            interface LineStyle {
                'strokeColor': string;
                'strokeColorStyler': StyleFunction;
                'strokeOpacity': number;
                'strokeWeight': number;
                'strokeWeightStyler': StyleFunction;
            }

            interface Point {
                'coordinates': number[];
                'type': string;
            }

            interface PointStyle {
                'iconName': string;
                'iconStyler': StyleFunction;
            }

            interface Polygon {
                'coordinates': number[][][];
                'type': string;
            }

            interface PolygonStyle {
                'fillColor': string;
                'fillColorStyler': StyleFunction;
                'fillOpacity': number;
                'strokeColor': string;
                'strokeColorStyler': StyleFunction;
                'strokeOpacity': number;
                'strokeWeight': number;
                'strokeWeightStyler': StyleFunction;
            }

            interface Sqlresponse {
                'columns': string[];
                'kind': string;
                'rows': any[][];
            }

            interface StyleFunction {
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

            interface StyleSetting {
                'kind': string;
                'markerOptions': PointStyle;
                'name': string;
                'polygonOptions': PolygonStyle;
                'polylineOptions': LineStyle;
                'styleId': number;
                'tableId': string;
            }

            interface StyleSettingList {
                'items': StyleSetting[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            interface Table {
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

            interface TableList {
                'items': Table[];
                'kind': string;
                'nextPageToken': string;
            }

            interface Task {
                'kind': string;
                'progress': string;
                'started': boolean;
                'taskId': string;
                'type': string;
            }

            interface TaskList {
                'items': Task[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

            interface Template {
                'automaticColumnNames': string[];
                'body': string;
                'kind': string;
                'name': string;
                'tableId': string;
                'templateId': number;
            }

            interface TemplateList {
                'items': Template[];
                'kind': string;
                'nextPageToken': string;
                'totalItems': number;
            }

        }
    }
}