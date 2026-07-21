import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Bills
// ============================================================

// listBills
export async function executeListBills(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billIds = (await client.httpGet('/me/bill')) as string[];
	const results: IDataObject[] = [];
	for (const id of billIds) {
		const details = (await client.httpGet(`/me/bill/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getBill
export function descriptionGetBill(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetBill(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const data = (await client.httpGet(`/me/bill/${billId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getBillDebt
export function descriptionGetBillDebt(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetBillDebt(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const data = (await client.httpGet(`/me/bill/${billId}/debt`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listBillDebtOperations
export function descriptionListBillDebtOperations(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListBillDebtOperations(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const operationIds = (await client.httpGet(`/me/bill/${billId}/debt/operation`)) as string[];
	const results: IDataObject[] = [];
	for (const id of operationIds) {
		const details = (await client.httpGet(
			`/me/bill/${billId}/debt/operation/${id}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getBillDebtOperation
export function descriptionGetBillDebtOperation(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
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

export async function executeGetBillDebtOperation(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/bill/${billId}/debt/operation/${operationId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getBillDebtOperationAssociatedObject
export function descriptionGetBillDebtOperationAssociatedObject(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
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

export async function executeGetBillDebtOperationAssociatedObject(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/bill/${billId}/debt/operation/${operationId}/associatedObject`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listBillDetails
export function descriptionListBillDetails(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListBillDetails(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const detailIds = (await client.httpGet(`/me/bill/${billId}/details`)) as string[];
	const results: IDataObject[] = [];
	for (const id of detailIds) {
		const details = (await client.httpGet(`/me/bill/${billId}/details/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getBillDetail
export function descriptionGetBillDetail(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Bill Detail ID',
			name: 'billDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetBillDetail(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const billDetailId = this.getNodeParameter('billDetailId', itemIndex) as string;
	const data = (await client.httpGet(`/me/bill/${billId}/details/${billDetailId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getBillPayment
export function descriptionGetBillPayment(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetBillPayment(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', itemIndex) as string;
	const data = (await client.httpGet(`/me/bill/${billId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Billing Groups
// ============================================================

// listBillingGroups
export async function executeListBillingGroups(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const groupIds = (await client.httpGet('/me/billing/group')) as string[];
	const results: IDataObject[] = [];
	for (const id of groupIds) {
		const details = (await client.httpGet(`/me/billing/group/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getBillingGroup
export function descriptionGetBillingGroup(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Group ID',
			name: 'groupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The billing group ID',
			displayOptions,
		},
	];
}

export async function executeGetBillingGroup(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const groupId = this.getNodeParameter('groupId', itemIndex) as string;
	const data = (await client.httpGet(`/me/billing/group/${groupId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listBillingGroupServices
export function descriptionListBillingGroupServices(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Group ID',
			name: 'groupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The billing group ID',
			displayOptions,
		},
	];
}

export async function executeListBillingGroupServices(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const groupId = this.getNodeParameter('groupId', itemIndex) as string;
	const serviceIds = (await client.httpGet(`/me/billing/group/${groupId}/service`)) as string[];
	const results: IDataObject[] = [];
	for (const id of serviceIds) {
		const details = (await client.httpGet(
			`/me/billing/group/${groupId}/service/${id}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getBillingGroupService
export function descriptionGetBillingGroupService(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Group ID',
			name: 'groupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The billing group ID',
			displayOptions,
		},
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetBillingGroupService(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const groupId = this.getNodeParameter('groupId', itemIndex) as string;
	const serviceId = this.getNodeParameter('serviceId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/billing/group/${groupId}/service/${serviceId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : Purchase Orders & Reports
// ============================================================

// listPurchaseOrders
export async function executeListPurchaseOrders(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderIds = (await client.httpGet('/me/billing/purchaseOrder')) as string[];
	const results: IDataObject[] = [];
	for (const id of orderIds) {
		const details = (await client.httpGet(`/me/billing/purchaseOrder/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getPurchaseOrder
export function descriptionGetPurchaseOrder(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Purchase Order ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetPurchaseOrder(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/billing/purchaseOrder/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listConsumptionReports
export async function executeListConsumptionReports(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const taskIds = (await client.httpGet('/me/billing/report/consumption')) as string[];
	const results: IDataObject[] = [];
	for (const id of taskIds) {
		const details = (await client.httpGet(`/me/billing/report/consumption/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getConsumptionReport
export function descriptionGetConsumptionReport(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The consumption report task ID',
			displayOptions,
		},
	];
}

export async function executeGetConsumptionReport(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;
	const data = (await client.httpGet(`/me/billing/report/consumption/${taskId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
