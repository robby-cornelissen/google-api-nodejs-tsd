/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        content(version: string): any;
        content(version: 'v2'): content.v2.Content;
    }

    namespace content {
        namespace v2 {
            export interface Content {
                new(options: any): Content;

                'accounts': {
                    'authinfo': (parameters: any, callback: (error: any, body: AccountsAuthInfoResponse, response: any) => void) => Request;
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: AccountsCustomBatchResponse, response: any) => void) => Request;
                    'delete': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'insert': (parameters: {'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccountsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'accountshipping': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: AccountshippingCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: AccountShipping, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccountshippingListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountShipping, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountShipping, response: any) => void) => Request;
                };
                'accountstatuses': {
                    'custombatch': (parameters: any, callback: (error: any, body: AccountstatusesCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: AccountStatus, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccountstatusesListResponse, response: any) => void) => Request;
                };
                'accounttax': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: AccounttaxCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: AccountTax, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccounttaxListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountTax, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountTax, response: any) => void) => Request;
                };
                'datafeeds': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: DatafeedsCustomBatchResponse, response: any) => void) => Request;
                    'delete': (parameters: {'datafeedId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'datafeedId': string, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                    'insert': (parameters: {'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: DatafeedsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'datafeedId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                    'update': (parameters: {'datafeedId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                };
                'datafeedstatuses': {
                    'custombatch': (parameters: any, callback: (error: any, body: DatafeedstatusesCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'datafeedId': string, 'merchantId': string}, callback: (error: any, body: DatafeedStatus, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: DatafeedstatusesListResponse, response: any) => void) => Request;
                };
                'inventory': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: InventoryCustomBatchResponse, response: any) => void) => Request;
                    'set': (parameters: {'dryRun'?: boolean, 'merchantId': string, 'productId': string, 'storeCode': string}, callback: (error: any, body: InventorySetResponse, response: any) => void) => Request;
                };
                'orders': {
                    'acknowledge': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersAcknowledgeResponse, response: any) => void) => Request;
                    'advancetestorder': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersAdvanceTestOrderResponse, response: any) => void) => Request;
                    'cancel': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersCancelResponse, response: any) => void) => Request;
                    'cancellineitem': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersCancelLineItemResponse, response: any) => void) => Request;
                    'createtestorder': (parameters: {'merchantId': string}, callback: (error: any, body: OrdersCreateTestOrderResponse, response: any) => void) => Request;
                    'custombatch': (parameters: any, callback: (error: any, body: OrdersCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: Order, response: any) => void) => Request;
                    'getbymerchantorderid': (parameters: {'merchantId': string, 'merchantOrderId': string}, callback: (error: any, body: OrdersGetByMerchantOrderIdResponse, response: any) => void) => Request;
                    'gettestordertemplate': (parameters: {'merchantId': string, 'templateName': string}, callback: (error: any, body: OrdersGetTestOrderTemplateResponse, response: any) => void) => Request;
                    'list': (parameters: {'acknowledged'?: boolean, 'maxResults'?: number, 'merchantId': string, 'orderBy'?: string, 'pageToken'?: string, 'placedDateEnd'?: string, 'placedDateStart'?: string, 'statuses'?: string}, callback: (error: any, body: OrdersListResponse, response: any) => void) => Request;
                    'refund': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersRefundResponse, response: any) => void) => Request;
                    'returnlineitem': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersReturnLineItemResponse, response: any) => void) => Request;
                    'shiplineitems': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersShipLineItemsResponse, response: any) => void) => Request;
                    'updatemerchantorderid': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersUpdateMerchantOrderIdResponse, response: any) => void) => Request;
                    'updateshipment': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersUpdateShipmentResponse, response: any) => void) => Request;
                };
                'products': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: ProductsCustomBatchResponse, response: any) => void) => Request;
                    'delete': (parameters: {'dryRun'?: boolean, 'merchantId': string, 'productId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'merchantId': string, 'productId': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    'insert': (parameters: {'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    'list': (parameters: {'includeInvalidInsertedItems'?: boolean, 'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: ProductsListResponse, response: any) => void) => Request;
                };
                'productstatuses': {
                    'custombatch': (parameters: any, callback: (error: any, body: ProductstatusesCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'merchantId': string, 'productId': string}, callback: (error: any, body: ProductStatus, response: any) => void) => Request;
                    'list': (parameters: {'includeInvalidInsertedItems'?: boolean, 'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: ProductstatusesListResponse, response: any) => void) => Request;
                };

            }

            interface Account {
                'adultContent': boolean;
                'adwordsLinks': AccountAdwordsLink[];
                'id': string;
                'kind': string;
                'name': string;
                'reviewsUrl': string;
                'sellerId': string;
                'users': AccountUser[];
                'websiteUrl': string;
            }

            interface AccountAdwordsLink {
                'adwordsId': string;
                'status': string;
            }

            interface AccountIdentifier {
                'aggregatorId': string;
                'merchantId': string;
            }

            interface AccountShipping {
                'accountId': string;
                'carrierRates': AccountShippingCarrierRate[];
                'kind': string;
                'locationGroups': AccountShippingLocationGroup[];
                'rateTables': AccountShippingRateTable[];
                'services': AccountShippingShippingService[];
            }

            interface AccountShippingCarrierRate {
                'carrier': string;
                'carrierService': string;
                'modifierFlatRate': Price;
                'modifierPercent': string;
                'name': string;
                'saleCountry': string;
                'shippingOrigin': string;
            }

            interface AccountShippingCondition {
                'deliveryLocationGroup': string;
                'deliveryLocationId': string;
                'deliveryPostalCode': string;
                'deliveryPostalCodeRange': AccountShippingPostalCodeRange;
                'priceMax': Price;
                'shippingLabel': string;
                'weightMax': Weight;
            }

            interface AccountShippingLocationGroup {
                'country': string;
                'locationIds': string[];
                'name': string;
                'postalCodeRanges': AccountShippingPostalCodeRange[];
                'postalCodes': string[];
            }

            interface AccountShippingPostalCodeRange {
                'end': string;
                'start': string;
            }

            interface AccountShippingRateTable {
                'content': AccountShippingRateTableCell[];
                'name': string;
                'saleCountry': string;
            }

            interface AccountShippingRateTableCell {
                'condition': AccountShippingCondition;
                'rate': Price;
            }

            interface AccountShippingShippingService {
                'active': boolean;
                'calculationMethod': AccountShippingShippingServiceCalculationMethod;
                'costRuleTree': AccountShippingShippingServiceCostRule;
                'name': string;
                'saleCountry': string;
            }

            interface AccountShippingShippingServiceCalculationMethod {
                'carrierRate': string;
                'excluded': boolean;
                'flatRate': Price;
                'percentageRate': string;
                'rateTable': string;
            }

            interface AccountShippingShippingServiceCostRule {
                'calculationMethod': AccountShippingShippingServiceCalculationMethod;
                'children': AccountShippingShippingServiceCostRule[];
                'condition': AccountShippingCondition;
            }

            interface AccountStatus {
                'accountId': string;
                'dataQualityIssues': AccountStatusDataQualityIssue[];
                'kind': string;
            }

            interface AccountStatusDataQualityIssue {
                'country': string;
                'displayedValue': string;
                'exampleItems': AccountStatusExampleItem[];
                'id': string;
                'lastChecked': string;
                'numItems': number;
                'severity': string;
                'submittedValue': string;
            }

            interface AccountStatusExampleItem {
                'itemId': string;
                'link': string;
                'submittedValue': string;
                'title': string;
                'valueOnLandingPage': string;
            }

            interface AccountTax {
                'accountId': string;
                'kind': string;
                'rules': AccountTaxTaxRule[];
            }

            interface AccountTaxTaxRule {
                'country': string;
                'locationId': string;
                'ratePercent': string;
                'shippingTaxed': boolean;
                'useGlobalRate': boolean;
            }

            interface AccountUser {
                'admin': boolean;
                'emailAddress': string;
            }

            interface AccountsAuthInfoResponse {
                'accountIdentifiers': AccountIdentifier[];
                'kind': string;
            }

            interface AccountsCustomBatchRequest {
                'entries': AccountsCustomBatchRequestEntry[];
            }

            interface AccountsCustomBatchRequestEntry {
                'account': Account;
                'accountId': string;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            interface AccountsCustomBatchResponse {
                'entries': AccountsCustomBatchResponseEntry[];
                'kind': string;
            }

            interface AccountsCustomBatchResponseEntry {
                'account': Account;
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            interface AccountsListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Account[];
            }

            interface AccountshippingCustomBatchRequest {
                'entries': AccountshippingCustomBatchRequestEntry[];
            }

            interface AccountshippingCustomBatchRequestEntry {
                'accountId': string;
                'accountShipping': AccountShipping;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            interface AccountshippingCustomBatchResponse {
                'entries': AccountshippingCustomBatchResponseEntry[];
                'kind': string;
            }

            interface AccountshippingCustomBatchResponseEntry {
                'accountShipping': AccountShipping;
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            interface AccountshippingListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': AccountShipping[];
            }

            interface AccountstatusesCustomBatchRequest {
                'entries': AccountstatusesCustomBatchRequestEntry[];
            }

            interface AccountstatusesCustomBatchRequestEntry {
                'accountId': string;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            interface AccountstatusesCustomBatchResponse {
                'entries': AccountstatusesCustomBatchResponseEntry[];
                'kind': string;
            }

            interface AccountstatusesCustomBatchResponseEntry {
                'accountStatus': AccountStatus;
                'batchId': number;
                'errors': Errors;
            }

            interface AccountstatusesListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': AccountStatus[];
            }

            interface AccounttaxCustomBatchRequest {
                'entries': AccounttaxCustomBatchRequestEntry[];
            }

            interface AccounttaxCustomBatchRequestEntry {
                'accountId': string;
                'accountTax': AccountTax;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            interface AccounttaxCustomBatchResponse {
                'entries': AccounttaxCustomBatchResponseEntry[];
                'kind': string;
            }

            interface AccounttaxCustomBatchResponseEntry {
                'accountTax': AccountTax;
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            interface AccounttaxListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': AccountTax[];
            }

            interface Datafeed {
                'attributeLanguage': string;
                'contentLanguage': string;
                'contentType': string;
                'fetchSchedule': DatafeedFetchSchedule;
                'fileName': string;
                'format': DatafeedFormat;
                'id': string;
                'intendedDestinations': string[];
                'kind': string;
                'name': string;
                'targetCountry': string;
            }

            interface DatafeedFetchSchedule {
                'dayOfMonth': number;
                'fetchUrl': string;
                'hour': number;
                'password': string;
                'timeZone': string;
                'username': string;
                'weekday': string;
            }

            interface DatafeedFormat {
                'columnDelimiter': string;
                'fileEncoding': string;
                'quotingMode': string;
            }

            interface DatafeedStatus {
                'datafeedId': string;
                'errors': DatafeedStatusError[];
                'itemsTotal': string;
                'itemsValid': string;
                'kind': string;
                'lastUploadDate': string;
                'processingStatus': string;
                'warnings': DatafeedStatusError[];
            }

            interface DatafeedStatusError {
                'code': string;
                'count': string;
                'examples': DatafeedStatusExample[];
                'message': string;
            }

            interface DatafeedStatusExample {
                'itemId': string;
                'lineNumber': string;
                'value': string;
            }

            interface DatafeedsCustomBatchRequest {
                'entries': DatafeedsCustomBatchRequestEntry[];
            }

            interface DatafeedsCustomBatchRequestEntry {
                'batchId': number;
                'datafeed': Datafeed;
                'datafeedId': string;
                'merchantId': string;
                'method': string;
            }

            interface DatafeedsCustomBatchResponse {
                'entries': DatafeedsCustomBatchResponseEntry[];
                'kind': string;
            }

            interface DatafeedsCustomBatchResponseEntry {
                'batchId': number;
                'datafeed': Datafeed;
                'errors': Errors;
            }

            interface DatafeedsListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Datafeed[];
            }

            interface DatafeedstatusesCustomBatchRequest {
                'entries': DatafeedstatusesCustomBatchRequestEntry[];
            }

            interface DatafeedstatusesCustomBatchRequestEntry {
                'batchId': number;
                'datafeedId': string;
                'merchantId': string;
                'method': string;
            }

            interface DatafeedstatusesCustomBatchResponse {
                'entries': DatafeedstatusesCustomBatchResponseEntry[];
                'kind': string;
            }

            interface DatafeedstatusesCustomBatchResponseEntry {
                'batchId': number;
                'datafeedStatus': DatafeedStatus;
                'errors': Errors;
            }

            interface DatafeedstatusesListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': DatafeedStatus[];
            }

            interface Error {
                'domain': string;
                'message': string;
                'reason': string;
            }

            interface Errors {
                'code': number;
                'errors': Error[];
                'message': string;
            }

            interface Installment {
                'amount': Price;
                'months': string;
            }

            interface Inventory {
                'availability': string;
                'installment': Installment;
                'kind': string;
                'loyaltyPoints': LoyaltyPoints;
                'price': Price;
                'quantity': number;
                'salePrice': Price;
                'salePriceEffectiveDate': string;
                'sellOnGoogleQuantity': number;
            }

            interface InventoryCustomBatchRequest {
                'entries': InventoryCustomBatchRequestEntry[];
            }

            interface InventoryCustomBatchRequestEntry {
                'batchId': number;
                'inventory': Inventory;
                'merchantId': string;
                'productId': string;
                'storeCode': string;
            }

            interface InventoryCustomBatchResponse {
                'entries': InventoryCustomBatchResponseEntry[];
                'kind': string;
            }

            interface InventoryCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            interface InventorySetRequest {
                'availability': string;
                'installment': Installment;
                'loyaltyPoints': LoyaltyPoints;
                'price': Price;
                'quantity': number;
                'salePrice': Price;
                'salePriceEffectiveDate': string;
                'sellOnGoogleQuantity': number;
            }

            interface InventorySetResponse {
                'kind': string;
            }

            interface LoyaltyPoints {
                'name': string;
                'pointsValue': string;
                'ratio': number;
            }

            interface Order {
                'acknowledged': boolean;
                'customer': OrderCustomer;
                'deliveryDetails': OrderDeliveryDetails;
                'id': string;
                'kind': string;
                'lineItems': OrderLineItem[];
                'merchantId': string;
                'merchantOrderId': string;
                'netAmount': Price;
                'paymentMethod': OrderPaymentMethod;
                'paymentStatus': string;
                'placedDate': string;
                'promotions': OrderPromotion[];
                'refunds': OrderRefund[];
                'shipments': OrderShipment[];
                'shippingCost': Price;
                'shippingCostTax': Price;
                'shippingOption': string;
                'status': string;
            }

            interface OrderAddress {
                'country': string;
                'fullAddress': string[];
                'isPostOfficeBox': boolean;
                'locality': string;
                'postalCode': string;
                'recipientName': string;
                'region': string;
                'streetAddress': string[];
            }

            interface OrderCancellation {
                'actor': string;
                'creationDate': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            interface OrderCustomer {
                'email': string;
                'explicitMarketingPreference': boolean;
                'fullName': string;
            }

            interface OrderDeliveryDetails {
                'address': OrderAddress;
                'phoneNumber': string;
            }

            interface OrderLineItem {
                'cancellations': OrderCancellation[];
                'id': string;
                'price': Price;
                'product': OrderLineItemProduct;
                'quantityCanceled': number;
                'quantityDelivered': number;
                'quantityOrdered': number;
                'quantityPending': number;
                'quantityReturned': number;
                'quantityShipped': number;
                'returnInfo': OrderLineItemReturnInfo;
                'returns': OrderReturn[];
                'shippingDetails': OrderLineItemShippingDetails;
                'tax': Price;
            }

            interface OrderLineItemProduct {
                'brand': string;
                'channel': string;
                'condition': string;
                'contentLanguage': string;
                'gtin': string;
                'id': string;
                'imageLink': string;
                'itemGroupId': string;
                'mpn': string;
                'offerId': string;
                'price': Price;
                'shownImage': string;
                'targetCountry': string;
                'title': string;
                'variantAttributes': OrderLineItemProductVariantAttribute[];
            }

            interface OrderLineItemProductVariantAttribute {
                'dimension': string;
                'value': string;
            }

            interface OrderLineItemReturnInfo {
                'daysToReturn': number;
                'isReturnable': boolean;
                'policyUrl': string;
            }

            interface OrderLineItemShippingDetails {
                'deliverByDate': string;
                'method': OrderLineItemShippingDetailsMethod;
                'shipByDate': string;
            }

            interface OrderLineItemShippingDetailsMethod {
                'carrier': string;
                'maxDaysInTransit': number;
                'methodName': string;
                'minDaysInTransit': number;
            }

            interface OrderPaymentMethod {
                'billingAddress': OrderAddress;
                'expirationMonth': number;
                'expirationYear': number;
                'lastFourDigits': string;
                'phoneNumber': string;
                'type': string;
            }

            interface OrderPromotion {
                'benefits': OrderPromotionBenefit[];
                'effectiveDates': string;
                'genericRedemptionCode': string;
                'id': string;
                'longTitle': string;
                'productApplicability': string;
                'redemptionChannel': string;
            }

            interface OrderPromotionBenefit {
                'discount': Price;
                'offerIds': string[];
                'subType': string;
                'taxImpact': Price;
                'type': string;
            }

            interface OrderRefund {
                'actor': string;
                'amount': Price;
                'creationDate': string;
                'reason': string;
                'reasonText': string;
            }

            interface OrderReturn {
                'actor': string;
                'creationDate': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            interface OrderShipment {
                'carrier': string;
                'creationDate': string;
                'deliveryDate': string;
                'id': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'status': string;
                'trackingId': string;
            }

            interface OrderShipmentLineItemShipment {
                'lineItemId': string;
                'quantity': number;
            }

            interface OrdersAcknowledgeRequest {
                'operationId': string;
            }

            interface OrdersAcknowledgeResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface OrdersAdvanceTestOrderResponse {
                'kind': string;
            }

            interface OrdersCancelLineItemRequest {
                'amount': Price;
                'lineItemId': string;
                'operationId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            interface OrdersCancelLineItemResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface OrdersCancelRequest {
                'operationId': string;
                'reason': string;
                'reasonText': string;
            }

            interface OrdersCancelResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface OrdersCreateTestOrderRequest {
                'templateName': string;
                'testOrder': TestOrder;
            }

            interface OrdersCreateTestOrderResponse {
                'kind': string;
                'orderId': string;
            }

            interface OrdersCustomBatchRequest {
                'entries': OrdersCustomBatchRequestEntry[];
            }

            interface OrdersCustomBatchRequestEntry {
                'batchId': number;
                'cancel': OrdersCustomBatchRequestEntryCancel;
                'cancelLineItem': OrdersCustomBatchRequestEntryCancelLineItem;
                'merchantId': string;
                'merchantOrderId': string;
                'method': string;
                'operationId': string;
                'orderId': string;
                'refund': OrdersCustomBatchRequestEntryRefund;
                'returnLineItem': OrdersCustomBatchRequestEntryReturnLineItem;
                'shipLineItems': OrdersCustomBatchRequestEntryShipLineItems;
                'updateShipment': OrdersCustomBatchRequestEntryUpdateShipment;
            }

            interface OrdersCustomBatchRequestEntryCancel {
                'reason': string;
                'reasonText': string;
            }

            interface OrdersCustomBatchRequestEntryCancelLineItem {
                'amount': Price;
                'lineItemId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            interface OrdersCustomBatchRequestEntryRefund {
                'amount': Price;
                'reason': string;
                'reasonText': string;
            }

            interface OrdersCustomBatchRequestEntryReturnLineItem {
                'lineItemId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            interface OrdersCustomBatchRequestEntryShipLineItems {
                'carrier': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'shipmentId': string;
                'trackingId': string;
            }

            interface OrdersCustomBatchRequestEntryUpdateShipment {
                'carrier': string;
                'shipmentId': string;
                'status': string;
                'trackingId': string;
            }

            interface OrdersCustomBatchResponse {
                'entries': OrdersCustomBatchResponseEntry[];
                'kind': string;
            }

            interface OrdersCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'executionStatus': string;
                'kind': string;
                'order': Order;
            }

            interface OrdersGetByMerchantOrderIdResponse {
                'kind': string;
                'order': Order;
            }

            interface OrdersGetTestOrderTemplateResponse {
                'kind': string;
                'template': TestOrder;
            }

            interface OrdersListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Order[];
            }

            interface OrdersRefundRequest {
                'amount': Price;
                'operationId': string;
                'reason': string;
                'reasonText': string;
            }

            interface OrdersRefundResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface OrdersReturnLineItemRequest {
                'lineItemId': string;
                'operationId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            interface OrdersReturnLineItemResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface OrdersShipLineItemsRequest {
                'carrier': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'operationId': string;
                'shipmentId': string;
                'trackingId': string;
            }

            interface OrdersShipLineItemsResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface OrdersUpdateMerchantOrderIdRequest {
                'merchantOrderId': string;
                'operationId': string;
            }

            interface OrdersUpdateMerchantOrderIdResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface OrdersUpdateShipmentRequest {
                'carrier': string;
                'operationId': string;
                'shipmentId': string;
                'status': string;
                'trackingId': string;
            }

            interface OrdersUpdateShipmentResponse {
                'executionStatus': string;
                'kind': string;
            }

            interface Price {
                'currency': string;
                'value': string;
            }

            interface Product {
                'additionalImageLinks': string[];
                'adult': boolean;
                'adwordsGrouping': string;
                'adwordsLabels': string[];
                'adwordsRedirect': string;
                'ageGroup': string;
                'aspects': ProductAspect[];
                'availability': string;
                'availabilityDate': string;
                'brand': string;
                'channel': string;
                'color': string;
                'condition': string;
                'contentLanguage': string;
                'customAttributes': ProductCustomAttribute[];
                'customGroups': ProductCustomGroup[];
                'customLabel0': string;
                'customLabel1': string;
                'customLabel2': string;
                'customLabel3': string;
                'customLabel4': string;
                'description': string;
                'destinations': ProductDestination[];
                'displayAdsId': string;
                'displayAdsLink': string;
                'displayAdsSimilarIds': string[];
                'displayAdsTitle': string;
                'displayAdsValue': number;
                'energyEfficiencyClass': string;
                'expirationDate': string;
                'gender': string;
                'googleProductCategory': string;
                'gtin': string;
                'id': string;
                'identifierExists': boolean;
                'imageLink': string;
                'installment': Installment;
                'isBundle': boolean;
                'itemGroupId': string;
                'kind': string;
                'link': string;
                'loyaltyPoints': LoyaltyPoints;
                'material': string;
                'mobileLink': string;
                'mpn': string;
                'multipack': string;
                'offerId': string;
                'onlineOnly': boolean;
                'pattern': string;
                'price': Price;
                'productType': string;
                'promotionIds': string[];
                'salePrice': Price;
                'salePriceEffectiveDate': string;
                'sellOnGoogleQuantity': string;
                'shipping': ProductShipping[];
                'shippingHeight': ProductShippingDimension;
                'shippingLabel': string;
                'shippingLength': ProductShippingDimension;
                'shippingWeight': ProductShippingWeight;
                'shippingWidth': ProductShippingDimension;
                'sizeSystem': string;
                'sizeType': string;
                'sizes': string[];
                'targetCountry': string;
                'taxes': ProductTax[];
                'title': string;
                'unitPricingBaseMeasure': ProductUnitPricingBaseMeasure;
                'unitPricingMeasure': ProductUnitPricingMeasure;
                'validatedDestinations': string[];
                'warnings': Error[];
            }

            interface ProductAspect {
                'aspectName': string;
                'destinationName': string;
                'intention': string;
            }

            interface ProductCustomAttribute {
                'name': string;
                'type': string;
                'unit': string;
                'value': string;
            }

            interface ProductCustomGroup {
                'attributes': ProductCustomAttribute[];
                'name': string;
            }

            interface ProductDestination {
                'destinationName': string;
                'intention': string;
            }

            interface ProductShipping {
                'country': string;
                'locationGroupName': string;
                'locationId': string;
                'postalCode': string;
                'price': Price;
                'region': string;
                'service': string;
            }

            interface ProductShippingDimension {
                'unit': string;
                'value': number;
            }

            interface ProductShippingWeight {
                'unit': string;
                'value': number;
            }

            interface ProductStatus {
                'creationDate': string;
                'dataQualityIssues': ProductStatusDataQualityIssue[];
                'destinationStatuses': ProductStatusDestinationStatus[];
                'googleExpirationDate': string;
                'kind': string;
                'lastUpdateDate': string;
                'link': string;
                'productId': string;
                'title': string;
            }

            interface ProductStatusDataQualityIssue {
                'detail': string;
                'fetchStatus': string;
                'id': string;
                'location': string;
                'severity': string;
                'timestamp': string;
                'valueOnLandingPage': string;
                'valueProvided': string;
            }

            interface ProductStatusDestinationStatus {
                'approvalStatus': string;
                'destination': string;
                'intention': string;
            }

            interface ProductTax {
                'country': string;
                'locationId': string;
                'postalCode': string;
                'rate': number;
                'region': string;
                'taxShip': boolean;
            }

            interface ProductUnitPricingBaseMeasure {
                'unit': string;
                'value': string;
            }

            interface ProductUnitPricingMeasure {
                'unit': string;
                'value': number;
            }

            interface ProductsCustomBatchRequest {
                'entries': ProductsCustomBatchRequestEntry[];
            }

            interface ProductsCustomBatchRequestEntry {
                'batchId': number;
                'merchantId': string;
                'method': string;
                'product': Product;
                'productId': string;
            }

            interface ProductsCustomBatchResponse {
                'entries': ProductsCustomBatchResponseEntry[];
                'kind': string;
            }

            interface ProductsCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'kind': string;
                'product': Product;
            }

            interface ProductsListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Product[];
            }

            interface ProductstatusesCustomBatchRequest {
                'entries': ProductstatusesCustomBatchRequestEntry[];
            }

            interface ProductstatusesCustomBatchRequestEntry {
                'batchId': number;
                'merchantId': string;
                'method': string;
                'productId': string;
            }

            interface ProductstatusesCustomBatchResponse {
                'entries': ProductstatusesCustomBatchResponseEntry[];
                'kind': string;
            }

            interface ProductstatusesCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'kind': string;
                'productStatus': ProductStatus;
            }

            interface ProductstatusesListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': ProductStatus[];
            }

            interface TestOrder {
                'customer': TestOrderCustomer;
                'kind': string;
                'lineItems': TestOrderLineItem[];
                'paymentMethod': TestOrderPaymentMethod;
                'predefinedDeliveryAddress': string;
                'promotions': OrderPromotion[];
                'shippingCost': Price;
                'shippingCostTax': Price;
                'shippingOption': string;
            }

            interface TestOrderCustomer {
                'email': string;
                'explicitMarketingPreference': boolean;
                'fullName': string;
            }

            interface TestOrderLineItem {
                'product': TestOrderLineItemProduct;
                'quantityOrdered': number;
                'returnInfo': OrderLineItemReturnInfo;
                'shippingDetails': OrderLineItemShippingDetails;
                'unitTax': Price;
            }

            interface TestOrderLineItemProduct {
                'brand': string;
                'channel': string;
                'condition': string;
                'contentLanguage': string;
                'gtin': string;
                'imageLink': string;
                'itemGroupId': string;
                'mpn': string;
                'offerId': string;
                'price': Price;
                'targetCountry': string;
                'title': string;
                'variantAttributes': OrderLineItemProductVariantAttribute[];
            }

            interface TestOrderPaymentMethod {
                'expirationMonth': number;
                'expirationYear': number;
                'lastFourDigits': string;
                'predefinedBillingAddress': string;
                'type': string;
            }

            interface Weight {
                'unit': string;
                'value': string;
            }

        }
    }
}