/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        content(version: string): any;
        content(version: 'v2sandbox'): content.v2sandbox.Content;
    }

    namespace content {
        namespace v2sandbox {
            export interface Content {
                new(options: any): Content;

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

        }
    }
}