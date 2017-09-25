// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        slides(version: string): any;
        slides(version: 'v1'): slides.v1.Slides;
    }

    namespace slides {
        namespace v1 {
            export interface Slides {
                new(options: any): Slides;

                'presentations': {
                    'get': (parameters: { [key: string]: any; 'presentationId': string}, callback: (error: any, body: Presentation, response: any) => void) => Request;
                    'batchUpdate': (parameters: { [key: string]: any; 'presentationId': string}, callback: (error: any, body: BatchUpdatePresentationResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Presentation, response: any) => void) => Request;

                    'pages': {
                        'get': (parameters: { [key: string]: any; 'presentationId': string, 'pageObjectId': string}, callback: (error: any, body: Page, response: any) => void) => Request;
                        'getThumbnail': (parameters: { [key: string]: any; 'thumbnailProperties.thumbnailSize'?: string, 'thumbnailProperties.mimeType'?: string, 'presentationId': string, 'pageObjectId': string}, callback: (error: any, body: Thumbnail, response: any) => void) => Request;
                    };
                };

            }

            export interface ThemeColorPair {
                'color': RgbColor;
                'type': string;
            }

            export interface OptionalColor {
                'opaqueColor': OpaqueColor;
            }

            export interface PageElementProperties {
                'transform': AffineTransform;
                'pageObjectId': string;
                'size': Size;
            }

            export interface SheetsChartProperties {
                'chartImageProperties': ImageProperties;
            }

            export interface StretchedPictureFill {
                'size': Size;
                'contentUrl': string;
            }

            export interface UpdateTextStyleRequest {
                'style': TextStyle;
                'cellLocation': TableCellLocation;
                'fields': string;
                'textRange': Range;
                'objectId': string;
            }

            export interface DeleteTableColumnRequest {
                'cellLocation': TableCellLocation;
                'tableObjectId': string;
            }

            export interface List {
                'listId': string;
                'nestingLevel': {
                    [name: string]: NestingLevel
                ;
                };
            }

            export interface WeightedFontFamily {
                'weight': number;
                'fontFamily': string;
            }

            export interface PageElement {
                'size': Size;
                'sheetsChart': SheetsChart;
                'title': string;
                'video': Video;
                'wordArt': WordArt;
                'table': Table;
                'transform': AffineTransform;
                'objectId': string;
                'shape': Shape;
                'line': Line;
                'description': string;
                'elementGroup': Group;
                'image': Image;
            }

            export interface CreateImageRequest {
                'objectId': string;
                'elementProperties': PageElementProperties;
                'url': string;
            }

            export interface CreateParagraphBulletsRequest {
                'textRange': Range;
                'objectId': string;
                'bulletPreset': string;
                'cellLocation': TableCellLocation;
            }

            export interface TextStyle {
                'bold': boolean;
                'foregroundColor': OptionalColor;
                'fontFamily': string;
                'italic': boolean;
                'strikethrough': boolean;
                'fontSize': Dimension;
                'baselineOffset': string;
                'weightedFontFamily': WeightedFontFamily;
                'smallCaps': boolean;
                'backgroundColor': OptionalColor;
                'link': Link;
                'underline': boolean;
            }

            export interface Size {
                'height': Dimension;
                'width': Dimension;
            }

            export interface UpdateVideoPropertiesRequest {
                'objectId': string;
                'videoProperties': VideoProperties;
                'fields': string;
            }

            export interface Request {
                'replaceAllShapesWithImage': ReplaceAllShapesWithImageRequest;
                'replaceAllText': ReplaceAllTextRequest;
                'updateImageProperties': UpdateImagePropertiesRequest;
                'createSlide': CreateSlideRequest;
                'insertTableRows': InsertTableRowsRequest;
                'updateLineProperties': UpdateLinePropertiesRequest;
                'updateSlidesPosition': UpdateSlidesPositionRequest;
                'deleteTableRow': DeleteTableRowRequest;
                'updateShapeProperties': UpdateShapePropertiesRequest;
                'insertText': InsertTextRequest;
                'deleteText': DeleteTextRequest;
                'updatePageProperties': UpdatePagePropertiesRequest;
                'createShape': CreateShapeRequest;
                'deleteParagraphBullets': DeleteParagraphBulletsRequest;
                'insertTableColumns': InsertTableColumnsRequest;
                'refreshSheetsChart': RefreshSheetsChartRequest;
                'createTable': CreateTableRequest;
                'updateTableCellProperties': UpdateTableCellPropertiesRequest;
                'deleteObject': DeleteObjectRequest;
                'updateParagraphStyle': UpdateParagraphStyleRequest;
                'deleteTableColumn': DeleteTableColumnRequest;
                'duplicateObject': DuplicateObjectRequest;
                'updateVideoProperties': UpdateVideoPropertiesRequest;
                'createLine': CreateLineRequest;
                'createImage': CreateImageRequest;
                'createParagraphBullets': CreateParagraphBulletsRequest;
                'createVideo': CreateVideoRequest;
                'createSheetsChart': CreateSheetsChartRequest;
                'replaceAllShapesWithSheetsChart': ReplaceAllShapesWithSheetsChartRequest;
                'updatePageElementTransform': UpdatePageElementTransformRequest;
                'updateTextStyle': UpdateTextStyleRequest;
            }

            export interface UpdateImagePropertiesRequest {
                'imageProperties': ImageProperties;
                'objectId': string;
                'fields': string;
            }

            export interface ParagraphStyle {
                'spaceBelow': Dimension;
                'direction': string;
                'spacingMode': string;
                'indentEnd': Dimension;
                'indentStart': Dimension;
                'spaceAbove': Dimension;
                'indentFirstLine': Dimension;
                'lineSpacing': number;
                'alignment': string;
            }

            export interface ReplaceAllShapesWithSheetsChartResponse {
                'occurrencesChanged': number;
            }

            export interface TableCellProperties {
                'tableCellBackgroundFill': TableCellBackgroundFill;
            }

            export interface RefreshSheetsChartRequest {
                'objectId': string;
            }

            export interface Outline {
                'outlineFill': OutlineFill;
                'weight': Dimension;
                'dashStyle': string;
                'propertyState': string;
            }

            export interface NotesProperties {
                'speakerNotesObjectId': string;
            }

            export interface ShapeProperties {
                'outline': Outline;
                'shadow': Shadow;
                'shapeBackgroundFill': ShapeBackgroundFill;
                'link': Link;
            }

            export interface TableColumnProperties {
                'columnWidth': Dimension;
            }

            export interface TableRow {
                'tableCells': TableCell[];
                'rowHeight': Dimension;
            }

            export interface UpdateTableCellPropertiesRequest {
                'tableRange': TableRange;
                'objectId': string;
                'tableCellProperties': TableCellProperties;
                'fields': string;
            }

            export interface CreateSlideRequest {
                'objectId': string;
                'insertionIndex': number;
                'placeholderIdMappings': LayoutPlaceholderIdMapping[];
                'slideLayoutReference': LayoutReference;
            }

            export interface BatchUpdatePresentationRequest {
                'requests': Request[];
                'writeControl': WriteControl;
            }

            export interface TextContent {
                'lists': {
                    [name: string]: List
                ;
                };
                'textElements': TextElement[];
            }

            export interface CreateSheetsChartResponse {
                'objectId': string;
            }

            export interface WriteControl {
                'requiredRevisionId': string;
            }

            export interface DeleteParagraphBulletsRequest {
                'textRange': Range;
                'objectId': string;
                'cellLocation': TableCellLocation;
            }

            export interface ParagraphMarker {
                'style': ParagraphStyle;
                'bullet': Bullet;
            }

            export interface Thumbnail {
                'height': number;
                'contentUrl': string;
                'width': number;
            }

            export interface InsertTableColumnsRequest {
                'number': number;
                'cellLocation': TableCellLocation;
                'insertRight': boolean;
                'tableObjectId': string;
            }

            export interface LayoutPlaceholderIdMapping {
                'objectId': string;
                'layoutPlaceholder': Placeholder;
                'layoutPlaceholderObjectId': string;
            }

            export interface UpdateShapePropertiesRequest {
                'fields': string;
                'objectId': string;
                'shapeProperties': ShapeProperties;
            }

            export interface WordArt {
                'renderedText': string;
            }

            export interface Recolor {
                'recolorStops': ColorStop[];
                'name': string;
            }

            export interface Link {
                'pageObjectId': string;
                'slideIndex': number;
                'relativeLink': string;
                'url': string;
            }

            export interface RgbColor {
                'red': number;
                'blue': number;
                'green': number;
            }

            export interface CreateShapeResponse {
                'objectId': string;
            }

            export interface CreateLineRequest {
                'lineCategory': string;
                'objectId': string;
                'elementProperties': PageElementProperties;
            }

            export interface CreateSlideResponse {
                'objectId': string;
            }

            export interface CreateShapeRequest {
                'shapeType': string;
                'objectId': string;
                'elementProperties': PageElementProperties;
            }

            export interface Video {
                'source': string;
                'id': string;
                'url': string;
                'videoProperties': VideoProperties;
            }

            export interface PageProperties {
                'pageBackgroundFill': PageBackgroundFill;
                'colorScheme': ColorScheme;
            }

            export interface NestingLevel {
                'bulletStyle': TextStyle;
            }

            export interface TableCell {
                'text': TextContent;
                'tableCellProperties': TableCellProperties;
                'rowSpan': number;
                'location': TableCellLocation;
                'columnSpan': number;
            }

            export interface UpdateLinePropertiesRequest {
                'objectId': string;
                'lineProperties': LineProperties;
                'fields': string;
            }

            export interface TableCellBackgroundFill {
                'propertyState': string;
                'solidFill': SolidFill;
            }

            export interface UpdateSlidesPositionRequest {
                'slideObjectIds': string[];
                'insertionIndex': number;
            }

            export interface UpdatePagePropertiesRequest {
                'fields': string;
                'pageProperties': PageProperties;
                'objectId': string;
            }

            export interface Group {
                'children': PageElement[];
            }

            export interface Placeholder {
                'type': string;
                'parentObjectId': string;
                'index': number;
            }

            export interface DuplicateObjectRequest {
                'objectIds': {
                    [name: string]: string
                ;
                };
                'objectId': string;
            }

            export interface ReplaceAllTextRequest {
                'containsText': SubstringMatchCriteria;
                'pageObjectIds': string[];
                'replaceText': string;
            }

            export interface Page {
                'masterProperties': MasterProperties;
                'objectId': string;
                'revisionId': string;
                'layoutProperties': LayoutProperties;
                'pageElements': PageElement[];
                'notesProperties': NotesProperties;
                'pageType': string;
                'pageProperties': PageProperties;
                'slideProperties': SlideProperties;
            }

            export interface ShapeBackgroundFill {
                'solidFill': SolidFill;
                'propertyState': string;
            }

            export interface CropProperties {
                'leftOffset': number;
                'rightOffset': number;
                'bottomOffset': number;
                'angle': number;
                'topOffset': number;
            }

            export interface ReplaceAllShapesWithSheetsChartRequest {
                'linkingMode': string;
                'spreadsheetId': string;
                'pageObjectIds': string[];
                'chartId': number;
                'containsText': SubstringMatchCriteria;
            }

            export interface Range {
                'endIndex': number;
                'startIndex': number;
                'type': string;
            }

            export interface ColorStop {
                'position': number;
                'alpha': number;
                'color': OpaqueColor;
            }

            export interface CreateVideoRequest {
                'source': string;
                'objectId': string;
                'elementProperties': PageElementProperties;
                'id': string;
            }

            export interface DuplicateObjectResponse {
                'objectId': string;
            }

            export interface ReplaceAllShapesWithImageRequest {
                'imageUrl': string;
                'replaceMethod': string;
                'pageObjectIds': string[];
                'containsText': SubstringMatchCriteria;
            }

            export interface Shadow {
                'alpha': number;
                'color': OpaqueColor;
                'rotateWithShape': boolean;
                'propertyState': string;
                'blurRadius': Dimension;
                'type': string;
                'transform': AffineTransform;
                'alignment': string;
            }

            export interface DeleteTableRowRequest {
                'cellLocation': TableCellLocation;
                'tableObjectId': string;
            }

            export interface Bullet {
                'glyph': string;
                'nestingLevel': number;
                'bulletStyle': TextStyle;
                'listId': string;
            }

            export interface OutlineFill {
                'solidFill': SolidFill;
            }

            export interface CreateLineResponse {
                'objectId': string;
            }

            export interface TableCellLocation {
                'columnIndex': number;
                'rowIndex': number;
            }

            export interface ReplaceAllTextResponse {
                'occurrencesChanged': number;
            }

            export interface UpdateParagraphStyleRequest {
                'style': ParagraphStyle;
                'cellLocation': TableCellLocation;
                'fields': string;
                'textRange': Range;
                'objectId': string;
            }

            export interface ColorScheme {
                'colors': ThemeColorPair[];
            }

            export interface Shape {
                'placeholder': Placeholder;
                'text': TextContent;
                'shapeType': string;
                'shapeProperties': ShapeProperties;
            }

            export interface Image {
                'contentUrl': string;
                'imageProperties': ImageProperties;
            }

            export interface InsertTextRequest {
                'cellLocation': TableCellLocation;
                'text': string;
                'objectId': string;
                'insertionIndex': number;
            }

            export interface AffineTransform {
                'shearX': number;
                'scaleY': number;
                'translateY': number;
                'translateX': number;
                'shearY': number;
                'unit': string;
                'scaleX': number;
            }

            export interface AutoText {
                'style': TextStyle;
                'content': string;
                'type': string;
            }

            export interface CreateVideoResponse {
                'objectId': string;
            }

            export interface UpdatePageElementTransformRequest {
                'transform': AffineTransform;
                'objectId': string;
                'applyMode': string;
            }

            export interface DeleteTextRequest {
                'cellLocation': TableCellLocation;
                'textRange': Range;
                'objectId': string;
            }

            export interface DeleteObjectRequest {
                'objectId': string;
            }

            export interface TextElement {
                'paragraphMarker': ParagraphMarker;
                'endIndex': number;
                'startIndex': number;
                'textRun': TextRun;
                'autoText': AutoText;
            }

            export interface Dimension {
                'magnitude': number;
                'unit': string;
            }

            export interface LineFill {
                'solidFill': SolidFill;
            }

            export interface VideoProperties {
                'outline': Outline;
            }

            export interface InsertTableRowsRequest {
                'number': number;
                'cellLocation': TableCellLocation;
                'tableObjectId': string;
                'insertBelow': boolean;
            }

            export interface LayoutProperties {
                'masterObjectId': string;
                'name': string;
                'displayName': string;
            }

            export interface LineProperties {
                'endArrow': string;
                'startArrow': string;
                'weight': Dimension;
                'lineFill': LineFill;
                'dashStyle': string;
                'link': Link;
            }

            export interface Presentation {
                'revisionId': string;
                'notesMaster': Page;
                'layouts': Page[];
                'title': string;
                'locale': string;
                'masters': Page[];
                'pageSize': Size;
                'presentationId': string;
                'slides': Page[];
            }

            export interface OpaqueColor {
                'rgbColor': RgbColor;
                'themeColor': string;
            }

            export interface ImageProperties {
                'shadow': Shadow;
                'link': Link;
                'contrast': number;
                'recolor': Recolor;
                'cropProperties': CropProperties;
                'outline': Outline;
                'brightness': number;
                'transparency': number;
            }

            export interface ReplaceAllShapesWithImageResponse {
                'occurrencesChanged': number;
            }

            export interface Line {
                'lineProperties': LineProperties;
                'lineType': string;
            }

            export interface CreateSheetsChartRequest {
                'objectId': string;
                'elementProperties': PageElementProperties;
                'linkingMode': string;
                'spreadsheetId': string;
                'chartId': number;
            }

            export interface BatchUpdatePresentationResponse {
                'replies': Response[];
                'presentationId': string;
            }

            export interface CreateImageResponse {
                'objectId': string;
            }

            export interface SlideProperties {
                'notesPage': Page;
                'masterObjectId': string;
                'layoutObjectId': string;
            }

            export interface MasterProperties {
                'displayName': string;
            }

            export interface Response {
                'createSlide': CreateSlideResponse;
                'createShape': CreateShapeResponse;
                'duplicateObject': DuplicateObjectResponse;
                'createLine': CreateLineResponse;
                'createImage': CreateImageResponse;
                'createVideo': CreateVideoResponse;
                'createSheetsChart': CreateSheetsChartResponse;
                'replaceAllShapesWithSheetsChart': ReplaceAllShapesWithSheetsChartResponse;
                'replaceAllShapesWithImage': ReplaceAllShapesWithImageResponse;
                'createTable': CreateTableResponse;
                'replaceAllText': ReplaceAllTextResponse;
            }

            export interface SubstringMatchCriteria {
                'text': string;
                'matchCase': boolean;
            }

            export interface LayoutReference {
                'predefinedLayout': string;
                'layoutId': string;
            }

            export interface TextRun {
                'content': string;
                'style': TextStyle;
            }

            export interface TableRange {
                'rowSpan': number;
                'location': TableCellLocation;
                'columnSpan': number;
            }

            export interface CreateTableRequest {
                'rows': number;
                'columns': number;
                'objectId': string;
                'elementProperties': PageElementProperties;
            }

            export interface CreateTableResponse {
                'objectId': string;
            }

            export interface Table {
                'rows': number;
                'tableColumns': TableColumnProperties[];
                'columns': number;
                'tableRows': TableRow[];
            }

            export interface PageBackgroundFill {
                'propertyState': string;
                'stretchedPictureFill': StretchedPictureFill;
                'solidFill': SolidFill;
            }

            export interface SheetsChart {
                'contentUrl': string;
                'spreadsheetId': string;
                'chartId': number;
                'sheetsChartProperties': SheetsChartProperties;
            }

            export interface SolidFill {
                'alpha': number;
                'color': OpaqueColor;
            }

        }
    }
}
