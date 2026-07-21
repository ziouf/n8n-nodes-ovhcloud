import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Payment Methods
// ============================================================

// listPaymentAvailableMethods
export async function executeListPaymentAvailableMethods(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/payment/availableMethods')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// listPaymentMethods
export async function executeListPaymentMethods(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/payment/method')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/payment/method/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getPaymentMethod
export function descriptionGetPaymentMethod(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Payment Method ID',
			name: 'paymentMethodId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetPaymentMethod(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const paymentMethodId = this.getNodeParameter('paymentMethodId', itemIndex) as string;
	const data = (await client.httpGet(`/me/payment/method/${paymentMethodId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listPaymentTransactions
export async function executeListPaymentTransactions(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/payment/transaction')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/payment/transaction/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getPaymentTransaction
export function descriptionGetPaymentTransaction(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Transaction ID',
			name: 'transactionId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetPaymentTransaction(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const transactionId = this.getNodeParameter('transactionId', itemIndex) as string;
	const data = (await client.httpGet(`/me/payment/transaction/${transactionId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listBankAccounts
export async function executeListBankAccounts(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/paymentMean/bankAccount')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/paymentMean/bankAccount/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getBankAccount
export function descriptionGetBankAccount(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bank Account ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetBankAccount(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/paymentMean/bankAccount/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listCreditCards
export async function executeListCreditCards(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/paymentMean/creditCard')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/paymentMean/creditCard/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getCreditCard
export function descriptionGetCreditCard(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Credit Card ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetCreditCard(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/paymentMean/creditCard/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listDeferredPaymentAccounts
export async function executeListDeferredPaymentAccounts(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/paymentMean/deferredPaymentAccount')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/paymentMean/deferredPaymentAccount/${id}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getDeferredPaymentAccount
export function descriptionGetDeferredPaymentAccount(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Deferred Payment Account ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetDeferredPaymentAccount(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/paymentMean/deferredPaymentAccount/${id}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listPaypalAccounts
export async function executeListPaypalAccounts(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/paymentMean/paypal')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/paymentMean/paypal/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getPaypalAccount
export function descriptionGetPaypalAccount(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'PayPal Account ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetPaypalAccount(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/paymentMean/paypal/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Orders
// ============================================================

// listOrders
export async function executeListOrders(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/order')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/order/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getOrder
export function descriptionGetOrder(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrder(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderAssociatedObject
export function descriptionGetOrderAssociatedObject(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderAssociatedObject(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/associatedObject`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listOrderAvailablePaymentMeans
export function descriptionListOrderAvailablePaymentMeans(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListOrderAvailablePaymentMeans(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/order/${orderId}/availableRegisteredPaymentMean`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// listOrderBalances
export function descriptionListOrderBalances(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListOrderBalances(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/order/${orderId}/balance`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/order/${orderId}/balance/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getOrderBalance
export function descriptionGetOrderBalance(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Balance Name',
			name: 'balanceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The credit balance name',
			displayOptions,
		},
	];
}

export async function executeGetOrderBalance(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const balanceName = this.getNodeParameter('balanceName', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/balance/${balanceName}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderConsumptionDetails
export function descriptionGetOrderConsumptionDetails(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderConsumptionDetails(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/order/${orderId}/consumption/details`,
	)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderDebt
export function descriptionGetOrderDebt(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderDebt(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/debt`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listOrderDebtOperations
export function descriptionListOrderDebtOperations(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListOrderDebtOperations(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/order/${orderId}/debt/operation`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/order/${orderId}/debt/operation/${id}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getOrderDebtOperation
export function descriptionGetOrderDebtOperation(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Operation ID',
			name: 'operationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The debt operation ID',
			displayOptions,
		},
	];
}

export async function executeGetOrderDebtOperation(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/order/${orderId}/debt/operation/${operationId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderDebtOperationAssociatedObject
export function descriptionGetOrderDebtOperationAssociatedObject(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Operation ID',
			name: 'operationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The debt operation ID',
			displayOptions,
		},
	];
}

export async function executeGetOrderDebtOperationAssociatedObject(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/order/${orderId}/debt/operation/${operationId}/associatedObject`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listOrderDetails
export function descriptionListOrderDetails(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListOrderDetails(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/order/${orderId}/details`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/order/${orderId}/details/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getOrderDetail
export function descriptionGetOrderDetail(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Order Detail ID',
			name: 'orderDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderDetail(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const orderDetailId = this.getNodeParameter('orderDetailId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/order/${orderId}/details/${orderDetailId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderDetailExtension
export function descriptionGetOrderDetailExtension(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Order Detail ID',
			name: 'orderDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderDetailExtension(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const orderDetailId = this.getNodeParameter('orderDetailId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/order/${orderId}/details/${orderDetailId}/extension`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderFollowUp
export function descriptionGetOrderFollowUp(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderFollowUp(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/followUp`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderPayment
export function descriptionGetOrderPayment(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderPayment(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getOrderPaymentMeans
export function descriptionGetOrderPaymentMeans(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderPaymentMeans(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/paymentMeans`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listOrderPaymentMethods
export function descriptionListOrderPaymentMethods(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListOrderPaymentMethods(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/paymentMethods`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// getOrderStatus
export function descriptionGetOrderStatus(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOrderStatus(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', itemIndex) as string;
	const data = (await client.httpGet(`/me/order/${orderId}/status`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
