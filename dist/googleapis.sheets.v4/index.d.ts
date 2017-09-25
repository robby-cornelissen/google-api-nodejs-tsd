// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        sheets(version: string): any;
        sheets(version: 'v4'): sheets.v4.Sheets;
    }

    namespace sheets {
        namespace v4 {
            export interface Sheets {
                new(options: any): Sheets;

                'spreadsheets': {
                    'getByDataFilter': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: Spreadsheet, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'spreadsheetId': string, 'includeGridData'?: boolean, 'ranges'?: string}, callback: (error: any, body: Spreadsheet, response: any) => void) => Request;
                    'batchUpdate': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: BatchUpdateSpreadsheetResponse, response: any) => void) => Request;
                    'create': (parameters: { [key: string]: any; }, callback: (error: any, body: Spreadsheet, response: any) => void) => Request;

                    'sheets': {
                        'copyTo': (parameters: { [key: string]: any; 'spreadsheetId': string, 'sheetId': number}, callback: (error: any, body: SheetProperties, response: any) => void) => Request;
                    };
                    'developerMetadata': {
                        'search': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: SearchDeveloperMetadataResponse, response: any) => void) => Request;
                        'get': (parameters: { [key: string]: any; 'spreadsheetId': string, 'metadataId': number}, callback: (error: any, body: DeveloperMetadata, response: any) => void) => Request;
                    };
                    'values': {
                        'get': (parameters: { [key: string]: any; 'majorDimension'?: string, 'spreadsheetId': string, 'range': string, 'dateTimeRenderOption'?: string, 'valueRenderOption'?: string}, callback: (error: any, body: ValueRange, response: any) => void) => Request;
                        'batchUpdateByDataFilter': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: BatchUpdateValuesByDataFilterResponse, response: any) => void) => Request;
                        'update': (parameters: { [key: string]: any; 'spreadsheetId': string, 'responseValueRenderOption'?: string, 'valueInputOption'?: string, 'responseDateTimeRenderOption'?: string, 'includeValuesInResponse'?: boolean, 'range': string}, callback: (error: any, body: UpdateValuesResponse, response: any) => void) => Request;
                        'batchUpdate': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: BatchUpdateValuesResponse, response: any) => void) => Request;
                        'clear': (parameters: { [key: string]: any; 'spreadsheetId': string, 'range': string}, callback: (error: any, body: ClearValuesResponse, response: any) => void) => Request;
                        'batchGet': (parameters: { [key: string]: any; 'majorDimension'?: string, 'ranges'?: string, 'spreadsheetId': string, 'dateTimeRenderOption'?: string, 'valueRenderOption'?: string}, callback: (error: any, body: BatchGetValuesResponse, response: any) => void) => Request;
                        'batchClearByDataFilter': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: BatchClearValuesByDataFilterResponse, response: any) => void) => Request;
                        'append': (parameters: { [key: string]: any; 'spreadsheetId': string, 'responseValueRenderOption'?: string, 'insertDataOption'?: string, 'valueInputOption'?: string, 'responseDateTimeRenderOption'?: string, 'includeValuesInResponse'?: boolean, 'range': string}, callback: (error: any, body: AppendValuesResponse, response: any) => void) => Request;
                        'batchGetByDataFilter': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: BatchGetValuesByDataFilterResponse, response: any) => void) => Request;
                        'batchClear': (parameters: { [key: string]: any; 'spreadsheetId': string}, callback: (error: any, body: BatchClearValuesResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface IterativeCalculationSettings {
                'convergenceThreshold': number;
                'maxIterations': number;
            }

            export interface OverlayPosition {
                'offsetXPixels': number;
                'anchorCell': GridCoordinate;
                'heightPixels': number;
                'offsetYPixels': number;
                'widthPixels': number;
            }

            export interface SpreadsheetProperties {
                'autoRecalc': string;
                'defaultFormat': CellFormat;
                'title': string;
                'timeZone': string;
                'locale': string;
                'iterativeCalculationSettings': IterativeCalculationSettings;
            }

            export interface RepeatCellRequest {
                'range': GridRange;
                'fields': string;
                'cell': CellData;
            }

            export interface AddChartResponse {
                'chart': EmbeddedChart;
            }

            export interface InsertDimensionRequest {
                'inheritFromBefore': boolean;
                'range': DimensionRange;
            }

            export interface UpdateSpreadsheetPropertiesRequest {
                'properties': SpreadsheetProperties;
                'fields': string;
            }

            export interface ProtectedRange {
                'warningOnly': boolean;
                'requestingUserCanEdit': boolean;
                'range': GridRange;
                'editors': Editors;
                'description': string;
                'unprotectedRanges': GridRange[];
                'namedRangeId': string;
                'protectedRangeId': number;
            }

            export interface BatchUpdateValuesRequest {
                'responseValueRenderOption': string;
                'includeValuesInResponse': boolean;
                'data': ValueRange[];
                'valueInputOption': string;
                'responseDateTimeRenderOption': string;
            }

            export interface DimensionProperties {
                'developerMetadata': DeveloperMetadata[];
                'pixelSize': number;
                'hiddenByUser': boolean;
                'hiddenByFilter': boolean;
            }

            export interface NamedRange {
                'namedRangeId': string;
                'range': GridRange;
                'name': string;
            }

            export interface DimensionRange {
                'dimension': string;
                'endIndex': number;
                'startIndex': number;
                'sheetId': number;
            }

            export interface CutPasteRequest {
                'destination': GridCoordinate;
                'pasteType': string;
                'source': GridRange;
            }

            export interface BasicChartSeries {
                'targetAxis': string;
                'type': string;
                'series': ChartData;
            }

            export interface Borders {
                'right': Border;
                'bottom': Border;
                'top': Border;
                'left': Border;
            }

            export interface AutoResizeDimensionsRequest {
                'dimensions': DimensionRange;
            }

            export interface UpdateBordersRequest {
                'innerHorizontal': Border;
                'top': Border;
                'left': Border;
                'bottom': Border;
                'innerVertical': Border;
                'right': Border;
                'range': GridRange;
            }

            export interface CellFormat {
                'numberFormat': NumberFormat;
                'hyperlinkDisplayType': string;
                'horizontalAlignment': string;
                'textFormat': TextFormat;
                'backgroundColor': Color;
                'padding': Padding;
                'verticalAlignment': string;
                'textDirection': string;
                'borders': Borders;
                'wrapStrategy': string;
                'textRotation': TextRotation;
            }

            export interface ClearValuesResponse {
                'spreadsheetId': string;
                'clearedRange': string;
            }

            export interface DeleteConditionalFormatRuleRequest {
                'sheetId': number;
                'index': number;
            }

            export interface AddBandingResponse {
                'bandedRange': BandedRange;
            }

            export interface DeleteNamedRangeRequest {
                'namedRangeId': string;
            }

            export interface ChartData {
                'sourceRange': ChartSourceRange;
            }

            export interface BatchGetValuesResponse {
                'spreadsheetId': string;
                'valueRanges': ValueRange[];
            }

            export interface UpdateBandingRequest {
                'bandedRange': BandedRange;
                'fields': string;
            }

            export interface Color {
                'alpha': number;
                'blue': number;
                'green': number;
                'red': number;
            }

            export interface PivotGroup {
                'sortOrder': string;
                'valueBucket': PivotGroupSortValueBucket;
                'valueMetadata': PivotGroupValueMetadata[];
                'showTotals': boolean;
                'sourceColumnOffset': number;
            }

            export interface PivotTable {
                'valueLayout': string;
                'columns': PivotGroup[];
                'values': PivotValue[];
                'source': GridRange;
                'criteria': {
                    [name: string]: PivotFilterCriteria
                ;
                };
                'rows': PivotGroup[];
            }

            export interface ChartSourceRange {
                'sources': GridRange[];
            }

            export interface SearchDeveloperMetadataResponse {
                'matchedDeveloperMetadata': MatchedDeveloperMetadata[];
            }

            export interface AppendCellsRequest {
                'sheetId': number;
                'fields': string;
                'rows': RowData[];
            }

            export interface ValueRange {
                'range': string;
                'values': any[][];
                'majorDimension': string;
            }

            export interface AddBandingRequest {
                'bandedRange': BandedRange;
            }

            export interface Response {
                'addFilterView': AddFilterViewResponse;
                'addBanding': AddBandingResponse;
                'addProtectedRange': AddProtectedRangeResponse;
                'duplicateSheet': DuplicateSheetResponse;
                'updateEmbeddedObjectPosition': UpdateEmbeddedObjectPositionResponse;
                'deleteConditionalFormatRule': DeleteConditionalFormatRuleResponse;
                'duplicateFilterView': DuplicateFilterViewResponse;
                'addChart': AddChartResponse;
                'updateDeveloperMetadata': UpdateDeveloperMetadataResponse;
                'findReplace': FindReplaceResponse;
                'addSheet': AddSheetResponse;
                'createDeveloperMetadata': CreateDeveloperMetadataResponse;
                'updateConditionalFormatRule': UpdateConditionalFormatRuleResponse;
                'addNamedRange': AddNamedRangeResponse;
                'deleteDeveloperMetadata': DeleteDeveloperMetadataResponse;
            }

            export interface InsertRangeRequest {
                'shiftDimension': string;
                'range': GridRange;
            }

            export interface TextFormatRun {
                'startIndex': number;
                'format': TextFormat;
            }

            export interface EmbeddedChart {
                'chartId': number;
                'position': EmbeddedObjectPosition;
                'spec': ChartSpec;
            }

            export interface AddNamedRangeResponse {
                'namedRange': NamedRange;
            }

            export interface BatchUpdateValuesByDataFilterResponse {
                'totalUpdatedCells': number;
                'totalUpdatedColumns': number;
                'spreadsheetId': string;
                'totalUpdatedRows': number;
                'responses': UpdateValuesByDataFilterResponse[];
                'totalUpdatedSheets': number;
            }

            export interface RowData {
                'values': CellData[];
            }

            export interface GridData {
                'rowData': RowData[];
                'startRow': number;
                'columnMetadata': DimensionProperties[];
                'startColumn': number;
                'rowMetadata': DimensionProperties[];
            }

            export interface Border {
                'style': string;
                'color': Color;
                'width': number;
            }

            export interface UpdateNamedRangeRequest {
                'namedRange': NamedRange;
                'fields': string;
            }

            export interface FindReplaceRequest {
                'searchByRegex': boolean;
                'find': string;
                'replacement': string;
                'range': GridRange;
                'sheetId': number;
                'matchCase': boolean;
                'allSheets': boolean;
                'includeFormulas': boolean;
                'matchEntireCell': boolean;
            }

            export interface AddSheetRequest {
                'properties': SheetProperties;
            }

            export interface UpdateCellsRequest {
                'range': GridRange;
                'fields': string;
                'rows': RowData[];
                'start': GridCoordinate;
            }

            export interface RandomizeRangeRequest {
                'range': GridRange;
            }

            export interface DeleteConditionalFormatRuleResponse {
                'rule': ConditionalFormatRule;
            }

            export interface DeleteRangeRequest {
                'shiftDimension': string;
                'range': GridRange;
            }

            export interface GridCoordinate {
                'sheetId': number;
                'columnIndex': number;
                'rowIndex': number;
            }

            export interface UpdateSheetPropertiesRequest {
                'fields': string;
                'properties': SheetProperties;
            }

            export interface GridProperties {
                'hideGridlines': boolean;
                'frozenRowCount': number;
                'frozenColumnCount': number;
                'columnCount': number;
                'rowCount': number;
            }

            export interface UnmergeCellsRequest {
                'range': GridRange;
            }

            export interface SortSpec {
                'dimensionIndex': number;
                'sortOrder': string;
            }

            export interface Sheet {
                'bandedRanges': BandedRange[];
                'properties': SheetProperties;
                'charts': EmbeddedChart[];
                'filterViews': FilterView[];
                'conditionalFormats': ConditionalFormatRule[];
                'protectedRanges': ProtectedRange[];
                'developerMetadata': DeveloperMetadata[];
                'basicFilter': BasicFilter;
                'merges': GridRange[];
                'data': GridData[];
            }

            export interface UpdateEmbeddedObjectPositionResponse {
                'position': EmbeddedObjectPosition;
            }

            export interface BooleanRule {
                'format': CellFormat;
                'condition': BooleanCondition;
            }

            export interface FilterCriteria {
                'condition': BooleanCondition;
                'hiddenValues': string[];
            }

            export interface PivotGroupValueMetadata {
                'value': ExtendedValue;
                'collapsed': boolean;
            }

            export interface Editors {
                'users': string[];
                'domainUsersCanEdit': boolean;
                'groups': string[];
            }

            export interface UpdateConditionalFormatRuleRequest {
                'sheetId': number;
                'newIndex': number;
                'rule': ConditionalFormatRule;
                'index': number;
            }

            export interface BasicChartDomain {
                'reversed': boolean;
                'domain': ChartData;
            }

            export interface DataValidationRule {
                'inputMessage': string;
                'condition': BooleanCondition;
                'showCustomUi': boolean;
                'strict': boolean;
            }

            export interface PasteDataRequest {
                'coordinate': GridCoordinate;
                'delimiter': string;
                'data': string;
                'type': string;
                'html': boolean;
            }

            export interface UpdateDeveloperMetadataResponse {
                'developerMetadata': DeveloperMetadata[];
            }

            export interface AppendDimensionRequest {
                'sheetId': number;
                'dimension': string;
                'length': number;
            }

            export interface AddNamedRangeRequest {
                'namedRange': NamedRange;
            }

            export interface CreateDeveloperMetadataResponse {
                'developerMetadata': DeveloperMetadata;
            }

            export interface UpdateEmbeddedObjectPositionRequest {
                'objectId': number;
                'newPosition': EmbeddedObjectPosition;
                'fields': string;
            }

            export interface TextRotation {
                'angle': number;
                'vertical': boolean;
            }

            export interface PieChartSpec {
                'series': ChartData;
                'pieHole': number;
                'legendPosition': string;
                'threeDimensional': boolean;
                'domain': ChartData;
            }

            export interface UpdateDeveloperMetadataRequest {
                'dataFilters': DataFilter[];
                'fields': string;
                'developerMetadata': DeveloperMetadata;
            }

            export interface UpdateFilterViewRequest {
                'filter': FilterView;
                'fields': string;
            }

            export interface ConditionalFormatRule {
                'booleanRule': BooleanRule;
                'ranges': GridRange[];
                'gradientRule': GradientRule;
            }

            export interface CopyPasteRequest {
                'destination': GridRange;
                'pasteOrientation': string;
                'pasteType': string;
                'source': GridRange;
            }

            export interface BooleanCondition {
                'values': ConditionValue[];
                'type': string;
            }

            export interface Request {
                'addBanding': AddBandingRequest;
                'autoResizeDimensions': AutoResizeDimensionsRequest;
                'appendCells': AppendCellsRequest;
                'cutPaste': CutPasteRequest;
                'mergeCells': MergeCellsRequest;
                'updateNamedRange': UpdateNamedRangeRequest;
                'updateSheetProperties': UpdateSheetPropertiesRequest;
                'autoFill': AutoFillRequest;
                'deleteDimension': DeleteDimensionRequest;
                'sortRange': SortRangeRequest;
                'deleteProtectedRange': DeleteProtectedRangeRequest;
                'duplicateFilterView': DuplicateFilterViewRequest;
                'addChart': AddChartRequest;
                'findReplace': FindReplaceRequest;
                'updateChartSpec': UpdateChartSpecRequest;
                'textToColumns': TextToColumnsRequest;
                'updateProtectedRange': UpdateProtectedRangeRequest;
                'addSheet': AddSheetRequest;
                'deleteFilterView': DeleteFilterViewRequest;
                'copyPaste': CopyPasteRequest;
                'insertDimension': InsertDimensionRequest;
                'deleteRange': DeleteRangeRequest;
                'deleteBanding': DeleteBandingRequest;
                'addFilterView': AddFilterViewRequest;
                'setDataValidation': SetDataValidationRequest;
                'updateBorders': UpdateBordersRequest;
                'deleteConditionalFormatRule': DeleteConditionalFormatRuleRequest;
                'repeatCell': RepeatCellRequest;
                'clearBasicFilter': ClearBasicFilterRequest;
                'appendDimension': AppendDimensionRequest;
                'createDeveloperMetadata': CreateDeveloperMetadataRequest;
                'updateConditionalFormatRule': UpdateConditionalFormatRuleRequest;
                'insertRange': InsertRangeRequest;
                'deleteDeveloperMetadata': DeleteDeveloperMetadataRequest;
                'moveDimension': MoveDimensionRequest;
                'randomizeRange': RandomizeRangeRequest;
                'updateBanding': UpdateBandingRequest;
                'addProtectedRange': AddProtectedRangeRequest;
                'deleteNamedRange': DeleteNamedRangeRequest;
                'duplicateSheet': DuplicateSheetRequest;
                'unmergeCells': UnmergeCellsRequest;
                'deleteSheet': DeleteSheetRequest;
                'updateEmbeddedObjectPosition': UpdateEmbeddedObjectPositionRequest;
                'updateDeveloperMetadata': UpdateDeveloperMetadataRequest;
                'updateDimensionProperties': UpdateDimensionPropertiesRequest;
                'pasteData': PasteDataRequest;
                'setBasicFilter': SetBasicFilterRequest;
                'addConditionalFormatRule': AddConditionalFormatRuleRequest;
                'addNamedRange': AddNamedRangeRequest;
                'updateCells': UpdateCellsRequest;
                'updateSpreadsheetProperties': UpdateSpreadsheetPropertiesRequest;
                'deleteEmbeddedObject': DeleteEmbeddedObjectRequest;
                'updateFilterView': UpdateFilterViewRequest;
            }

            export interface GridRange {
                'startRowIndex': number;
                'startColumnIndex': number;
                'sheetId': number;
                'endColumnIndex': number;
                'endRowIndex': number;
            }

            export interface BasicChartSpec {
                'headerCount': number;
                'stackedType': string;
                'threeDimensional': boolean;
                'axis': BasicChartAxis[];
                'chartType': string;
                'interpolateNulls': boolean;
                'series': BasicChartSeries[];
                'legendPosition': string;
                'domains': BasicChartDomain[];
                'lineSmoothing': boolean;
            }

            export interface BubbleChartSpec {
                'bubbleSizes': ChartData;
                'bubbleOpacity': number;
                'domain': ChartData;
                'bubbleTextStyle': TextFormat;
                'bubbleBorderColor': Color;
                'groupIds': ChartData;
                'bubbleLabels': ChartData;
                'bubbleMinRadiusSize': number;
                'bubbleMaxRadiusSize': number;
                'series': ChartData;
                'legendPosition': string;
            }

            export interface SetDataValidationRequest {
                'rule': DataValidationRule;
                'range': GridRange;
            }

            export interface CellData {
                'note': string;
                'effectiveFormat': CellFormat;
                'userEnteredValue': ExtendedValue;
                'dataValidation': DataValidationRule;
                'effectiveValue': ExtendedValue;
                'textFormatRuns': TextFormatRun[];
                'formattedValue': string;
                'hyperlink': string;
                'pivotTable': PivotTable;
                'userEnteredFormat': CellFormat;
            }

            export interface BatchUpdateValuesByDataFilterRequest {
                'responseValueRenderOption': string;
                'includeValuesInResponse': boolean;
                'data': DataFilterValueRange[];
                'valueInputOption': string;
                'responseDateTimeRenderOption': string;
            }

            export interface BatchUpdateSpreadsheetRequest {
                'requests': Request[];
                'responseIncludeGridData': boolean;
                'responseRanges': string[];
                'includeSpreadsheetInResponse': boolean;
            }

            export interface BasicChartAxis {
                'format': TextFormat;
                'title': string;
                'position': string;
            }

            export interface Padding {
                'right': number;
                'bottom': number;
                'top': number;
                'left': number;
            }

            export interface DeleteDimensionRequest {
                'range': DimensionRange;
            }

            export interface UpdateChartSpecRequest {
                'chartId': number;
                'spec': ChartSpec;
            }

            export interface DeleteFilterViewRequest {
                'filterId': number;
            }

            export interface DeleteDeveloperMetadataResponse {
                'deletedDeveloperMetadata': DeveloperMetadata[];
            }

            export interface BatchGetValuesByDataFilterRequest {
                'majorDimension': string;
                'dataFilters': DataFilter[];
                'dateTimeRenderOption': string;
                'valueRenderOption': string;
            }

            export interface BatchUpdateValuesResponse {
                'spreadsheetId': string;
                'totalUpdatedRows': number;
                'responses': UpdateValuesResponse[];
                'totalUpdatedSheets': number;
                'totalUpdatedCells': number;
                'totalUpdatedColumns': number;
            }

            export interface SortRangeRequest {
                'range': GridRange;
                'sortSpecs': SortSpec[];
            }

            export interface MatchedDeveloperMetadata {
                'dataFilters': DataFilter[];
                'developerMetadata': DeveloperMetadata;
            }

            export interface MergeCellsRequest {
                'mergeType': string;
                'range': GridRange;
            }

            export interface AddProtectedRangeRequest {
                'protectedRange': ProtectedRange;
            }

            export interface BatchClearValuesRequest {
                'ranges': string[];
            }

            export interface DuplicateFilterViewResponse {
                'filter': FilterView;
            }

            export interface DeveloperMetadata {
                'metadataKey': string;
                'visibility': string;
                'location': DeveloperMetadataLocation;
                'metadataId': number;
                'metadataValue': string;
            }

            export interface DuplicateSheetResponse {
                'properties': SheetProperties;
            }

            export interface TextToColumnsRequest {
                'delimiterType': string;
                'source': GridRange;
                'delimiter': string;
            }

            export interface ClearBasicFilterRequest {
                'sheetId': number;
            }

            export interface BatchUpdateSpreadsheetResponse {
                'spreadsheetId': string;
                'updatedSpreadsheet': Spreadsheet;
                'replies': Response[];
            }

            export interface DeleteBandingRequest {
                'bandedRangeId': number;
            }

            export interface AppendValuesResponse {
                'updates': UpdateValuesResponse;
                'tableRange': string;
                'spreadsheetId': string;
            }

            export interface MoveDimensionRequest {
                'destinationIndex': number;
                'source': DimensionRange;
            }

            export interface AddFilterViewRequest {
                'filter': FilterView;
            }

            export interface PivotFilterCriteria {
                'visibleValues': string[];
            }

            export interface AddConditionalFormatRuleRequest {
                'rule': ConditionalFormatRule;
                'index': number;
            }

            export interface CreateDeveloperMetadataRequest {
                'developerMetadata': DeveloperMetadata;
            }

            export interface ChartSpec {
                'backgroundColor': Color;
                'basicChart': BasicChartSpec;
                'orgChart': OrgChartSpec;
                'pieChart': PieChartSpec;
                'titleTextFormat': TextFormat;
                'title': string;
                'altText': string;
                'histogramChart': HistogramChartSpec;
                'candlestickChart': CandlestickChartSpec;
                'bubbleChart': BubbleChartSpec;
                'fontName': string;
                'maximized': boolean;
                'hiddenDimensionStrategy': string;
            }

            export interface BatchGetValuesByDataFilterResponse {
                'valueRanges': MatchedValueRange[];
                'spreadsheetId': string;
            }

            export interface NumberFormat {
                'type': string;
                'pattern': string;
            }

            export interface DataFilterValueRange {
                'dataFilter': DataFilter;
                'values': any[][];
                'majorDimension': string;
            }

            export interface CandlestickDomain {
                'data': ChartData;
                'reversed': boolean;
            }

            export interface SheetProperties {
                'title': string;
                'tabColor': Color;
                'index': number;
                'sheetId': number;
                'rightToLeft': boolean;
                'hidden': boolean;
                'sheetType': string;
                'gridProperties': GridProperties;
            }

            export interface UpdateDimensionPropertiesRequest {
                'range': DimensionRange;
                'fields': string;
                'properties': DimensionProperties;
            }

            export interface SourceAndDestination {
                'dimension': string;
                'fillLength': number;
                'source': GridRange;
            }

            export interface FilterView {
                'namedRangeId': string;
                'filterViewId': number;
                'criteria': {
                    [name: string]: FilterCriteria
                ;
                };
                'title': string;
                'range': GridRange;
                'sortSpecs': SortSpec[];
            }

            export interface OrgChartSpec {
                'selectedNodeColor': Color;
                'parentLabels': ChartData;
                'nodeSize': string;
                'labels': ChartData;
                'nodeColor': Color;
                'tooltips': ChartData;
            }

            export interface SearchDeveloperMetadataRequest {
                'dataFilters': DataFilter[];
            }

            export interface BandingProperties {
                'headerColor': Color;
                'firstBandColor': Color;
                'secondBandColor': Color;
                'footerColor': Color;
            }

            export interface CandlestickSeries {
                'data': ChartData;
            }

            export interface BasicFilter {
                'criteria': {
                    [name: string]: FilterCriteria
                ;
                };
                'range': GridRange;
                'sortSpecs': SortSpec[];
            }

            export interface AddProtectedRangeResponse {
                'protectedRange': ProtectedRange;
            }

            export interface HistogramChartSpec {
                'outlierPercentile': number;
                'showItemDividers': boolean;
                'series': HistogramSeries[];
                'legendPosition': string;
                'bucketSize': number;
            }

            export interface UpdateValuesResponse {
                'updatedRows': number;
                'updatedData': ValueRange;
                'updatedColumns': number;
                'spreadsheetId': string;
                'updatedRange': string;
                'updatedCells': number;
            }

            export interface PivotValue {
                'name': string;
                'formula': string;
                'summarizeFunction': string;
                'sourceColumnOffset': number;
            }

            export interface ErrorValue {
                'type': string;
                'message': string;
            }

            export interface CopySheetToAnotherSpreadsheetRequest {
                'destinationSpreadsheetId': string;
            }

            export interface PivotGroupSortValueBucket {
                'valuesIndex': number;
                'buckets': ExtendedValue[];
            }

            export interface DeleteDeveloperMetadataRequest {
                'dataFilter': DataFilter;
            }

            export interface CandlestickChartSpec {
                'data': CandlestickData[];
                'domain': CandlestickDomain;
            }

            export interface BatchClearValuesByDataFilterResponse {
                'spreadsheetId': string;
                'clearedRanges': string[];
            }

            export interface CandlestickData {
                'highSeries': CandlestickSeries;
                'closeSeries': CandlestickSeries;
                'lowSeries': CandlestickSeries;
                'openSeries': CandlestickSeries;
            }

            export interface EmbeddedObjectPosition {
                'overlayPosition': OverlayPosition;
                'sheetId': number;
                'newSheet': boolean;
            }

            export interface DeleteProtectedRangeRequest {
                'protectedRangeId': number;
            }

            export interface DeveloperMetadataLookup {
                'metadataKey': string;
                'metadataId': number;
                'visibility': string;
                'metadataValue': string;
                'locationMatchingStrategy': string;
                'metadataLocation': DeveloperMetadataLocation;
                'locationType': string;
            }

            export interface AutoFillRequest {
                'useAlternateSeries': boolean;
                'sourceAndDestination': SourceAndDestination;
                'range': GridRange;
            }

            export interface GradientRule {
                'midpoint': InterpolationPoint;
                'maxpoint': InterpolationPoint;
                'minpoint': InterpolationPoint;
            }

            export interface ClearValuesRequest {}

            export interface SetBasicFilterRequest {
                'filter': BasicFilter;
            }

            export interface InterpolationPoint {
                'color': Color;
                'type': string;
                'value': string;
            }

            export interface BatchClearValuesByDataFilterRequest {
                'dataFilters': DataFilter[];
            }

            export interface GetSpreadsheetByDataFilterRequest {
                'includeGridData': boolean;
                'dataFilters': DataFilter[];
            }

            export interface DeleteEmbeddedObjectRequest {
                'objectId': number;
            }

            export interface FindReplaceResponse {
                'formulasChanged': number;
                'valuesChanged': number;
                'occurrencesChanged': number;
                'rowsChanged': number;
                'sheetsChanged': number;
            }

            export interface UpdateValuesByDataFilterResponse {
                'updatedRange': string;
                'updatedCells': number;
                'dataFilter': DataFilter;
                'updatedData': ValueRange;
                'updatedRows': number;
                'updatedColumns': number;
            }

            export interface DeleteSheetRequest {
                'sheetId': number;
            }

            export interface DuplicateFilterViewRequest {
                'filterId': number;
            }

            export interface MatchedValueRange {
                'valueRange': ValueRange;
                'dataFilters': DataFilter[];
            }

            export interface DeveloperMetadataLocation {
                'dimensionRange': DimensionRange;
                'sheetId': number;
                'spreadsheet': boolean;
                'locationType': string;
            }

            export interface UpdateConditionalFormatRuleResponse {
                'newIndex': number;
                'newRule': ConditionalFormatRule;
                'oldIndex': number;
                'oldRule': ConditionalFormatRule;
            }

            export interface ConditionValue {
                'userEnteredValue': string;
                'relativeDate': string;
            }

            export interface DuplicateSheetRequest {
                'newSheetName': string;
                'sourceSheetId': number;
                'newSheetId': number;
                'insertSheetIndex': number;
            }

            export interface ExtendedValue {
                'errorValue': ErrorValue;
                'formulaValue': string;
                'boolValue': boolean;
                'stringValue': string;
                'numberValue': number;
            }

            export interface BandedRange {
                'columnProperties': BandingProperties;
                'rowProperties': BandingProperties;
                'range': GridRange;
                'bandedRangeId': number;
            }

            export interface HistogramSeries {
                'barColor': Color;
                'data': ChartData;
            }

            export interface BatchClearValuesResponse {
                'spreadsheetId': string;
                'clearedRanges': string[];
            }

            export interface Spreadsheet {
                'properties': SpreadsheetProperties;
                'spreadsheetId': string;
                'namedRanges': NamedRange[];
                'developerMetadata': DeveloperMetadata[];
                'sheets': Sheet[];
                'spreadsheetUrl': string;
            }

            export interface AddChartRequest {
                'chart': EmbeddedChart;
            }

            export interface UpdateProtectedRangeRequest {
                'fields': string;
                'protectedRange': ProtectedRange;
            }

            export interface DataFilter {
                'gridRange': GridRange;
                'developerMetadataLookup': DeveloperMetadataLookup;
                'a1Range': string;
            }

            export interface TextFormat {
                'underline': boolean;
                'foregroundColor': Color;
                'bold': boolean;
                'fontFamily': string;
                'strikethrough': boolean;
                'italic': boolean;
                'fontSize': number;
            }

            export interface AddSheetResponse {
                'properties': SheetProperties;
            }

            export interface AddFilterViewResponse {
                'filter': FilterView;
            }

        }
    }
}
