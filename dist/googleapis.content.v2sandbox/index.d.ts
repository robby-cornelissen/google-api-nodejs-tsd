// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/index.d.ts" />
declare namespace google {
    export interface GoogleApis {
        content(version: string): any;
        content(version: 'v2sandbox'): content.v2sandbox.Content;
    }

    namespace content {
        namespace v2sandbox {
            export interface Content {
                new(options: any): Content;

                'orders': {
                    'acknowledge': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersAcknowledgeResponse, response: any) => void) => Request;
                    'advancetestorder': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersAdvanceTestOrderResponse, response: any) => void) => Request;
                    'cancel': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersCancelResponse, response: any) => void) => Request;
                    'cancellineitem': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersCancelLineItemResponse, response: any) => void) => Request;
                    'createtestorder': (parameters: { [key: string]: any; 'merchantId': string}, callback: (error: any, body: OrdersCreateTestOrderResponse, response: any) => void) => Request;
                    'custombatch': (parameters: any, callback: (error: any, body: OrdersCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: Order, response: any) => void) => Request;
                    'getbymerchantorderid': (parameters: { [key: string]: any; 'merchantId': string, 'merchantOrderId': string}, callback: (error: any, body: OrdersGetByMerchantOrderIdResponse, response: any) => void) => Request;
                    'gettestordertemplate': (parameters: { [key: string]: any; 'merchantId': string, 'templateName': string}, callback: (error: any, body: OrdersGetTestOrderTemplateResponse, response: any) => void) => Request;
                    'list': (parameters: { [key: string]: any; 'acknowledged'?: boolean, 'maxResults'?: number, 'merchantId': string, 'orderBy'?: string, 'pageToken'?: string, 'placedDateEnd'?: string, 'placedDateStart'?: string, 'statuses'?: string}, callback: (error: any, body: OrdersListResponse, response: any) => void) => Request;
                    'refund': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersRefundResponse, response: any) => void) => Request;
                    'returnlineitem': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersReturnLineItemResponse, response: any) => void) => Request;
                    'shiplineitems': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersShipLineItemsResponse, response: any) => void) => Request;
                    'updatemerchantorderid': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersUpdateMerchantOrderIdResponse, response: any) => void) => Request;
                    'updateshipment': (parameters: { [key: string]: any; 'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersUpdateShipmentResponse, response: any) => void) => Request;
                };

            }

            export interface Error {
                'domain': string;
                'message': string;
                'reason': string;
            }

            export interface Errors {
                'code': number;
                'errors': Error[];
                'message': string;
            }

            export interface Order {
                'acknowledged': boolean;
                'channelType': string;
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

            export interface OrderAddress {
                'country': string;
                'fullAddress': string[];
                'isPostOfficeBox': boolean;
                'locality': string;
                'postalCode': string;
                'recipientName': string;
                'region': string;
                'streetAddress': string[];
            }

            export interface OrderCancellation {
                'actor': string;
                'creationDate': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrderCustomer {
                'email': string;
                'explicitMarketingPreference': boolean;
                'fullName': string;
            }

            export interface OrderDeliveryDetails {
                'address': OrderAddress;
                'phoneNumber': string;
            }

            export interface OrderLineItem {
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

            export interface OrderLineItemProduct {
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

            export interface OrderLineItemProductVariantAttribute {
                'dimension': string;
                'value': string;
            }

            export interface OrderLineItemReturnInfo {
                'daysToReturn': number;
                'isReturnable': boolean;
                'policyUrl': string;
            }

            export interface OrderLineItemShippingDetails {
                'deliverByDate': string;
                'method': OrderLineItemShippingDetailsMethod;
                'shipByDate': string;
            }

            export interface OrderLineItemShippingDetailsMethod {
                'carrier': string;
                'maxDaysInTransit': number;
                'methodName': string;
                'minDaysInTransit': number;
            }

            export interface OrderPaymentMethod {
                'billingAddress': OrderAddress;
                'expirationMonth': number;
                'expirationYear': number;
                'lastFourDigits': string;
                'phoneNumber': string;
                'type': string;
            }

            export interface OrderPromotion {
                'benefits': OrderPromotionBenefit[];
                'effectiveDates': string;
                'genericRedemptionCode': string;
                'id': string;
                'longTitle': string;
                'productApplicability': string;
                'redemptionChannel': string;
            }

            export interface OrderPromotionBenefit {
                'discount': Price;
                'offerIds': string[];
                'subType': string;
                'taxImpact': Price;
                'type': string;
            }

            export interface OrderRefund {
                'actor': string;
                'amount': Price;
                'creationDate': string;
                'reason': string;
                'reasonText': string;
            }

            export interface OrderReturn {
                'actor': string;
                'creationDate': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrderShipment {
                'carrier': string;
                'creationDate': string;
                'deliveryDate': string;
                'id': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'status': string;
                'trackingId': string;
            }

            export interface OrderShipmentLineItemShipment {
                'lineItemId': string;
                'quantity': number;
            }

            export interface OrdersAcknowledgeRequest {
                'operationId': string;
            }

            export interface OrdersAcknowledgeResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersAdvanceTestOrderResponse {
                'kind': string;
            }

            export interface OrdersCancelLineItemRequest {
                'amount': Price;
                'lineItemId': string;
                'operationId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCancelLineItemResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersCancelRequest {
                'operationId': string;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCancelResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersCreateTestOrderRequest {
                'templateName': string;
                'testOrder': TestOrder;
            }

            export interface OrdersCreateTestOrderResponse {
                'kind': string;
                'orderId': string;
            }

            export interface OrdersCustomBatchRequest {
                'entries': OrdersCustomBatchRequestEntry[];
            }

            export interface OrdersCustomBatchRequestEntry {
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

            export interface OrdersCustomBatchRequestEntryCancel {
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryCancelLineItem {
                'amount': Price;
                'lineItemId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryRefund {
                'amount': Price;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryReturnLineItem {
                'lineItemId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryShipLineItems {
                'carrier': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'shipmentId': string;
                'shipmentInfos': OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
                'trackingId': string;
            }

            export interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
                'carrier': string;
                'shipmentId': string;
                'trackingId': string;
            }

            export interface OrdersCustomBatchRequestEntryUpdateShipment {
                'carrier': string;
                'shipmentId': string;
                'status': string;
                'trackingId': string;
            }

            export interface OrdersCustomBatchResponse {
                'entries': OrdersCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface OrdersCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'executionStatus': string;
                'kind': string;
                'order': Order;
            }

            export interface OrdersGetByMerchantOrderIdResponse {
                'kind': string;
                'order': Order;
            }

            export interface OrdersGetTestOrderTemplateResponse {
                'kind': string;
                'template': TestOrder;
            }

            export interface OrdersListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Order[];
            }

            export interface OrdersRefundRequest {
                'amount': Price;
                'operationId': string;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersRefundResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersReturnLineItemRequest {
                'lineItemId': string;
                'operationId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersReturnLineItemResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersShipLineItemsRequest {
                'carrier': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'operationId': string;
                'shipmentId': string;
                'shipmentInfos': OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
                'trackingId': string;
            }

            export interface OrdersShipLineItemsResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersUpdateMerchantOrderIdRequest {
                'merchantOrderId': string;
                'operationId': string;
            }

            export interface OrdersUpdateMerchantOrderIdResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersUpdateShipmentRequest {
                'carrier': string;
                'operationId': string;
                'shipmentId': string;
                'status': string;
                'trackingId': string;
            }

            export interface OrdersUpdateShipmentResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface Price {
                'currency': string;
                'value': string;
            }

            export interface TestOrder {
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

            export interface TestOrderCustomer {
                'email': string;
                'explicitMarketingPreference': boolean;
                'fullName': string;
            }

            export interface TestOrderLineItem {
                'product': TestOrderLineItemProduct;
                'quantityOrdered': number;
                'returnInfo': OrderLineItemReturnInfo;
                'shippingDetails': OrderLineItemShippingDetails;
                'unitTax': Price;
            }

            export interface TestOrderLineItemProduct {
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

            export interface TestOrderPaymentMethod {
                'expirationMonth': number;
                'expirationYear': number;
                'lastFourDigits': string;
                'predefinedBillingAddress': string;
                'type': string;
            }

        }
    }
}
