// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        sheets(version: string): any;
        sheets(version: 'v4'): sheets.v4.Sheets;
    }

    namespace sheets {
        namespace v4 {
            export interface Sheets {
                new(options: any): Sheets;

                'spreadsheets': {
                    'create': (parameters: {}, callback: (error: any, body: Spreadsheet, response: any) => void) => Request;
                    'get': (parameters: {'spreadsheetId': string, 'ranges'?: string, 'includeGridData'?: boolean}, callback: (error: any, body: Spreadsheet, response: any) => void) => Request;
                    'batchUpdate': (parameters: {'spreadsheetId': string}, callback: (error: any, body: BatchUpdateSpreadsheetResponse, response: any) => void) => Request;
                
                    'values': {
                        'update': (parameters: {'valueInputOption'?: string, 'spreadsheetId': string, 'range': string}, callback: (error: any, body: UpdateValuesResponse, response: any) => void) => Request;
                        'get': (parameters: {'spreadsheetId': string, 'valueRenderOption'?: string, 'dateTimeRenderOption'?: string, 'range': string, 'majorDimension'?: string}, callback: (error: any, body: ValueRange, response: any) => void) => Request;
                        'batchGet': (parameters: {'spreadsheetId': string, 'ranges'?: string, 'valueRenderOption'?: string, 'dateTimeRenderOption'?: string, 'majorDimension'?: string}, callback: (error: any, body: BatchGetValuesResponse, response: any) => void) => Request;
                        'batchUpdate': (parameters: {'spreadsheetId': string}, callback: (error: any, body: BatchUpdateValuesResponse, response: any) => void) => Request;
                    };
                    'sheets': {
                        'copyTo': (parameters: {'sheetId': number, 'spreadsheetId': string}, callback: (error: any, body: SheetProperties, response: any) => void) => Request;
                    };
                };

            }

            export interface AddNamedRangeResponse {
                'namedRange': NamedRange;
            }

            export interface UpdateProtectedRangeRequest {
                'protectedRange': ProtectedRange;
                'fields': string;
            }

            export interface Padding {
                'right': number;
                'left': number;
                'top': number;
                'bottom': number;
            }

            export interface MergeCellsRequest {
                'mergeType': string;
                'range': GridRange;
            }

            export interface AddSheetResponse {
                'properties': SheetProperties;
            }

            export interface PivotGroupValueMetadata {
                'value': ExtendedValue;
                'collapsed': boolean;
            }

            export interface UpdateEmbeddedObjectPositionResponse {
                'position': EmbeddedObjectPosition;
            }

            export interface UpdateConditionalFormatRuleRequest {
                'sheetId': number;
                'rule': ConditionalFormatRule;
                'index': number;
                'newIndex': number;
            }

            export interface TextFormat {
                'bold': boolean;
                'italic': boolean;
                'foregroundColor': Color;
                'fontFamily': string;
                'strikethrough': boolean;
                'fontSize': number;
                'underline': boolean;
            }

            export interface UpdateChartSpecRequest {
                'chartId': number;
                'spec': ChartSpec;
            }

            export interface GridCoordinate {
                'sheetId': number;
                'rowIndex': number;
                'columnIndex': number;
            }

            export interface DeleteFilterViewRequest {
                'filterId': number;
            }

            export interface BatchUpdateValuesResponse {
                'totalUpdatedSheets': number;
                'totalUpdatedColumns': number;
                'responses': UpdateValuesResponse[];
                'totalUpdatedCells': number;
                'spreadsheetId': string;
                'totalUpdatedRows': number;
            }

            export interface UpdateNamedRangeRequest {
                'fields': string;
                'namedRange': NamedRange;
            }

            export interface UpdateValuesResponse {
                'updatedRange': string;
                'updatedColumns': number;
                'spreadsheetId': string;
                'updatedRows': number;
                'updatedCells': number;
            }

            export interface SpreadsheetProperties {
                'timeZone': string;
                'autoRecalc': string;
                'locale': string;
                'title': string;
                'defaultFormat': CellFormat;
            }

            export interface CellData {
                'hyperlink': string;
                'effectiveFormat': CellFormat;
                'note': string;
                'formattedValue': string;
                'userEnteredValue': ExtendedValue;
                'dataValidation': DataValidationRule;
                'userEnteredFormat': CellFormat;
                'pivotTable': PivotTable;
                'textFormatRuns': TextFormatRun[];
                'effectiveValue': ExtendedValue;
            }

            export interface UnmergeCellsRequest {
                'range': GridRange;
            }

            export interface TextToColumnsRequest {
                'source': GridRange;
                'delimiter': string;
                'delimiterType': string;
            }

            export interface AddProtectedRangeResponse {
                'protectedRange': ProtectedRange;
            }

            export interface BooleanCondition {
                'values': ConditionValue[];
                'type': string;
            }

            export interface DeleteProtectedRangeRequest {
                'protectedRangeId': number;
            }

            export interface BasicChartDomain {
                'domain': ChartData;
            }

            export interface DimensionRange {
                'sheetId': number;
                'endIndex': number;
                'startIndex': number;
                'dimension': string;
            }

            export interface Response {
                'updateEmbeddedObjectPosition': UpdateEmbeddedObjectPositionResponse;
                'addFilterView': AddFilterViewResponse;
                'addSheet': AddSheetResponse;
                'findReplace': FindReplaceResponse;
                'addProtectedRange': AddProtectedRangeResponse;
                'updateConditionalFormatRule': UpdateConditionalFormatRuleResponse;
                'addChart': AddChartResponse;
                'deleteConditionalFormatRule': DeleteConditionalFormatRuleResponse;
                'duplicateSheet': DuplicateSheetResponse;
                'duplicateFilterView': DuplicateFilterViewResponse;
                'addNamedRange': AddNamedRangeResponse;
            }

            export interface AddConditionalFormatRuleRequest {
                'rule': ConditionalFormatRule;
                'index': number;
            }

            export interface FilterView {
                'title': string;
                'namedRangeId': string;
                'sortSpecs': SortSpec[];
                'range': GridRange;
                'criteria': {
                    [name: string]: FilterCriteria
                
                };
                'filterViewId': number;
            }

            export interface SortRangeRequest {
                'range': GridRange;
                'sortSpecs': SortSpec[];
            }

            export interface TextFormatRun {
                'startIndex': number;
                'format': TextFormat;
            }

            export interface UpdateFilterViewRequest {
                'filter': FilterView;
                'fields': string;
            }

            export interface UpdateConditionalFormatRuleResponse {
                'oldIndex': number;
                'newRule': ConditionalFormatRule;
                'oldRule': ConditionalFormatRule;
                'newIndex': number;
            }

            export interface FilterCriteria {
                'condition': BooleanCondition;
                'hiddenValues': string[];
            }

            export interface DeleteDimensionRequest {
                'range': DimensionRange;
            }

            export interface PivotTable {
                'valueLayout': string;
                'columns': PivotGroup[];
                'source': GridRange;
                'rows': PivotGroup[];
                'values': PivotValue[];
                'criteria': {
                    [name: string]: PivotFilterCriteria
                
                };
            }

            export interface DataValidationRule {
                'condition': BooleanCondition;
                'inputMessage': string;
                'showCustomUi': boolean;
                'strict': boolean;
            }

            export interface UpdateSpreadsheetPropertiesRequest {
                'fields': string;
                'properties': SpreadsheetProperties;
            }

            export interface ChartSourceRange {
                'sources': GridRange[];
            }

            export interface BatchUpdateValuesRequest {
                'valueInputOption': string;
                'data': ValueRange[];
            }

            export interface ClearBasicFilterRequest {
                'sheetId': number;
            }

            export interface ConditionalFormatRule {
                'gradientRule': GradientRule;
                'booleanRule': BooleanRule;
                'ranges': GridRange[];
            }

            export interface UpdateBordersRequest {
                'right': Border;
                'innerVertical': Border;
                'top': Border;
                'innerHorizontal': Border;
                'range': GridRange;
                'bottom': Border;
                'left': Border;
            }

            export interface PivotFilterCriteria {
                'visibleValues': string[];
            }

            export interface Borders {
                'left': Border;
                'right': Border;
                'top': Border;
                'bottom': Border;
            }

            export interface EmbeddedChart {
                'chartId': number;
                'position': EmbeddedObjectPosition;
                'spec': ChartSpec;
            }

            export interface Color {
                'green': number;
                'blue': number;
                'red': number;
                'alpha': number;
            }

            export interface AddSheetRequest {
                'properties': SheetProperties;
            }

            export interface AddProtectedRangeRequest {
                'protectedRange': ProtectedRange;
            }

            export interface ValueRange {
                'values': any[][];
                'range': string;
                'majorDimension': string;
            }

            export interface FindReplaceResponse {
                'valuesChanged': number;
                'rowsChanged': number;
                'occurrencesChanged': number;
                'formulasChanged': number;
                'sheetsChanged': number;
            }

            export interface CellFormat {
                'horizontalAlignment': string;
                'hyperlinkDisplayType': string;
                'borders': Borders;
                'textDirection': string;
                'textFormat': TextFormat;
                'padding': Padding;
                'numberFormat': NumberFormat;
                'wrapStrategy': string;
                'backgroundColor': Color;
                'verticalAlignment': string;
            }

            export interface MoveDimensionRequest {
                'source': DimensionRange;
                'destinationIndex': number;
            }

            export interface BasicChartAxis {
                'position': string;
                'title': string;
                'format': TextFormat;
            }

            export interface PivotGroupSortValueBucket {
                'buckets': ExtendedValue[];
                'valuesIndex': number;
            }

            export interface DimensionProperties {
                'hiddenByUser': boolean;
                'pixelSize': number;
                'hiddenByFilter': boolean;
            }

            export interface EmbeddedObjectPosition {
                'sheetId': number;
                'overlayPosition': OverlayPosition;
                'newSheet': boolean;
            }

            export interface InterpolationPoint {
                'value': string;
                'color': Color;
                'type': string;
            }

            export interface ErrorValue {
                'type': string;
                'message': string;
            }

            export interface DuplicateFilterViewRequest {
                'filterId': number;
            }

            export interface BatchUpdateSpreadsheetRequest {
                'requests': Request[];
            }

            export interface SheetProperties {
                'title': string;
                'index': number;
                'hidden': boolean;
                'gridProperties': GridProperties;
                'sheetId': number;
                'rightToLeft': boolean;
                'tabColor': Color;
                'sheetType': string;
            }

            export interface ProtectedRange {
                'unprotectedRanges': GridRange[];
                'description': string;
                'namedRangeId': string;
                'requestingUserCanEdit': boolean;
                'editors': Editors;
                'protectedRangeId': number;
                'warningOnly': boolean;
                'range': GridRange;
            }

            export interface DeleteConditionalFormatRuleRequest {
                'sheetId': number;
                'index': number;
            }

            export interface ChartSpec {
                'hiddenDimensionStrategy': string;
                'basicChart': BasicChartSpec;
                'title': string;
                'pieChart': PieChartSpec;
            }

            export interface SourceAndDestination {
                'source': GridRange;
                'fillLength': number;
                'dimension': string;
            }

            export interface ConditionValue {
                'relativeDate': string;
                'userEnteredValue': string;
            }

            export interface PasteDataRequest {
                'data': string;
                'coordinate': GridCoordinate;
                'delimiter': string;
                'type': string;
                'html': boolean;
            }

            export interface FindReplaceRequest {
                'find': string;
                'replacement': string;
                'searchByRegex': boolean;
                'sheetId': number;
                'allSheets': boolean;
                'matchCase': boolean;
                'includeFormulas': boolean;
                'range': GridRange;
                'matchEntireCell': boolean;
            }

            export interface SortSpec {
                'sortOrder': string;
                'dimensionIndex': number;
            }

            export interface CopySheetToAnotherSpreadsheetRequest {
                'destinationSpreadsheetId': string;
            }

            export interface NumberFormat {
                'pattern': string;
                'type': string;
            }

            export interface UpdateDimensionPropertiesRequest {
                'fields': string;
                'range': DimensionRange;
                'properties': DimensionProperties;
            }

            export interface Editors {
                'users': string[];
                'groups': string[];
                'domainUsersCanEdit': boolean;
            }

            export interface Spreadsheet {
                'spreadsheetId': string;
                'properties': SpreadsheetProperties;
                'sheets': Sheet[];
                'namedRanges': NamedRange[];
            }

            export interface GridData {
                'columnMetadata': DimensionProperties[];
                'rowData': RowData[];
                'startRow': number;
                'rowMetadata': DimensionProperties[];
                'startColumn': number;
            }

            export interface PivotValue {
                'formula': string;
                'sourceColumnOffset': number;
                'summarizeFunction': string;
                'name': string;
            }

            export interface BasicFilter {
                'criteria': {
                    [name: string]: FilterCriteria
                
                };
                'range': GridRange;
                'sortSpecs': SortSpec[];
            }

            export interface DuplicateSheetRequest {
                'sourceSheetId': number;
                'newSheetId': number;
                'insertSheetIndex': number;
                'newSheetName': string;
            }

            export interface AddFilterViewResponse {
                'filter': FilterView;
            }

            export interface DuplicateSheetResponse {
                'properties': SheetProperties;
            }

            export interface Border {
                'style': string;
                'width': number;
                'color': Color;
            }

            export interface AddNamedRangeRequest {
                'namedRange': NamedRange;
            }

            export interface AddChartResponse {
                'chart': EmbeddedChart;
            }

            export interface AppendCellsRequest {
                'sheetId': number;
                'rows': RowData[];
                'fields': string;
            }

            export interface RowData {
                'values': CellData[];
            }

            export interface BasicChartSeries {
                'series': ChartData;
                'targetAxis': string;
                'type': string;
            }

            export interface RepeatCellRequest {
                'cell': CellData;
                'fields': string;
                'range': GridRange;
            }

            export interface BasicChartSpec {
                'chartType': string;
                'domains': BasicChartDomain[];
                'headerCount': number;
                'series': BasicChartSeries[];
                'legendPosition': string;
                'axis': BasicChartAxis[];
            }

            export interface NamedRange {
                'namedRangeId': string;
                'range': GridRange;
                'name': string;
            }

            export interface SetBasicFilterRequest {
                'filter': BasicFilter;
            }

            export interface UpdateEmbeddedObjectPositionRequest {
                'newPosition': EmbeddedObjectPosition;
                'objectId': number;
                'fields': string;
            }

            export interface AutoResizeDimensionsRequest {
                'dimensions': DimensionRange;
            }

            export interface DuplicateFilterViewResponse {
                'filter': FilterView;
            }

            export interface PivotGroup {
                'sortOrder': string;
                'sourceColumnOffset': number;
                'showTotals': boolean;
                'valueBucket': PivotGroupSortValueBucket;
                'valueMetadata': PivotGroupValueMetadata[];
            }

            export interface GridRange {
                'sheetId': number;
                'startColumnIndex': number;
                'startRowIndex': number;
                'endRowIndex': number;
                'endColumnIndex': number;
            }

            export interface DeleteSheetRequest {
                'sheetId': number;
            }

            export interface ChartData {
                'sourceRange': ChartSourceRange;
            }

            export interface Sheet {
                'properties': SheetProperties;
                'charts': EmbeddedChart[];
                'filterViews': FilterView[];
                'conditionalFormats': ConditionalFormatRule[];
                'protectedRanges': ProtectedRange[];
                'basicFilter': BasicFilter;
                'merges': GridRange[];
                'data': GridData[];
            }

            export interface CopyPasteRequest {
                'pasteType': string;
                'pasteOrientation': string;
                'source': GridRange;
                'destination': GridRange;
            }

            export interface UpdateCellsRequest {
                'rows': RowData[];
                'fields': string;
                'start': GridCoordinate;
                'range': GridRange;
            }

            export interface ExtendedValue {
                'formulaValue': string;
                'errorValue': ErrorValue;
                'boolValue': boolean;
                'numberValue': number;
                'stringValue': string;
            }

            export interface BatchUpdateSpreadsheetResponse {
                'spreadsheetId': string;
                'replies': Response[];
            }

            export interface GradientRule {
                'maxpoint': InterpolationPoint;
                'midpoint': InterpolationPoint;
                'minpoint': InterpolationPoint;
            }

            export interface CutPasteRequest {
                'pasteType': string;
                'source': GridRange;
                'destination': GridCoordinate;
            }

            export interface OverlayPosition {
                'widthPixels': number;
                'anchorCell': GridCoordinate;
                'offsetXPixels': number;
                'heightPixels': number;
                'offsetYPixels': number;
            }

            export interface AutoFillRequest {
                'useAlternateSeries': boolean;
                'range': GridRange;
                'sourceAndDestination': SourceAndDestination;
            }

            export interface PieChartSpec {
                'legendPosition': string;
                'series': ChartData;
                'pieHole': number;
                'threeDimensional': boolean;
                'domain': ChartData;
            }

            export interface UpdateSheetPropertiesRequest {
                'fields': string;
                'properties': SheetProperties;
            }

            export interface BooleanRule {
                'condition': BooleanCondition;
                'format': CellFormat;
            }

            export interface AppendDimensionRequest {
                'sheetId': number;
                'length': number;
                'dimension': string;
            }

            export interface AddFilterViewRequest {
                'filter': FilterView;
            }

            export interface GridProperties {
                'rowCount': number;
                'columnCount': number;
                'frozenRowCount': number;
                'frozenColumnCount': number;
                'hideGridlines': boolean;
            }

            export interface DeleteNamedRangeRequest {
                'namedRangeId': string;
            }

            export interface AddChartRequest {
                'chart': EmbeddedChart;
            }

            export interface SetDataValidationRequest {
                'rule': DataValidationRule;
                'range': GridRange;
            }

            export interface Request {
                'updateEmbeddedObjectPosition': UpdateEmbeddedObjectPositionRequest;
                'deleteNamedRange': DeleteNamedRangeRequest;
                'updateNamedRange': UpdateNamedRangeRequest;
                'addFilterView': AddFilterViewRequest;
                'updateSpreadsheetProperties': UpdateSpreadsheetPropertiesRequest;
                'appendDimension': AppendDimensionRequest;
                'unmergeCells': UnmergeCellsRequest;
                'updateProtectedRange': UpdateProtectedRangeRequest;
                'deleteFilterView': DeleteFilterViewRequest;
                'clearBasicFilter': ClearBasicFilterRequest;
                'sortRange': SortRangeRequest;
                'repeatCell': RepeatCellRequest;
                'setDataValidation': SetDataValidationRequest;
                'updateCells': UpdateCellsRequest;
                'addSheet': AddSheetRequest;
                'updateFilterView': UpdateFilterViewRequest;
                'updateSheetProperties': UpdateSheetPropertiesRequest;
                'updateDimensionProperties': UpdateDimensionPropertiesRequest;
                'deleteSheet': DeleteSheetRequest;
                'findReplace': FindReplaceRequest;
                'addProtectedRange': AddProtectedRangeRequest;
                'deleteProtectedRange': DeleteProtectedRangeRequest;
                'updateConditionalFormatRule': UpdateConditionalFormatRuleRequest;
                'setBasicFilter': SetBasicFilterRequest;
                'mergeCells': MergeCellsRequest;
                'addChart': AddChartRequest;
                'deleteConditionalFormatRule': DeleteConditionalFormatRuleRequest;
                'updateChartSpec': UpdateChartSpecRequest;
                'deleteDimension': DeleteDimensionRequest;
                'deleteEmbeddedObject': DeleteEmbeddedObjectRequest;
                'pasteData': PasteDataRequest;
                'addConditionalFormatRule': AddConditionalFormatRuleRequest;
                'updateBorders': UpdateBordersRequest;
                'autoResizeDimensions': AutoResizeDimensionsRequest;
                'duplicateSheet': DuplicateSheetRequest;
                'duplicateFilterView': DuplicateFilterViewRequest;
                'cutPaste': CutPasteRequest;
                'appendCells': AppendCellsRequest;
                'addNamedRange': AddNamedRangeRequest;
                'autoFill': AutoFillRequest;
                'moveDimension': MoveDimensionRequest;
                'textToColumns': TextToColumnsRequest;
                'insertDimension': InsertDimensionRequest;
                'copyPaste': CopyPasteRequest;
            }

            export interface BatchGetValuesResponse {
                'valueRanges': ValueRange[];
                'spreadsheetId': string;
            }

            export interface InsertDimensionRequest {
                'inheritFromBefore': boolean;
                'range': DimensionRange;
            }

            export interface DeleteEmbeddedObjectRequest {
                'objectId': number;
            }

            export interface DeleteConditionalFormatRuleResponse {
                'rule': ConditionalFormatRule;
            }

        }
    }
}