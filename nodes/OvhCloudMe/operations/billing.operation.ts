/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-default-missing, n8n-nodes-base/node-param-display-name-not-first-position */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { filtersCollection, type FilterDefinition } from '../../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../../shared/nodes/filterQuery';

// ============================================================
// Groupe A : Bills
// ============================================================

export const BILL_FILTERS: FilterDefinition[] = [
	{
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'from',
		displayName: 'From (>=)',
		queryParam: 'date.from',
		type: 'dateTime',
		description: 'Filter bills from this date (ISO 8601)',
	},
	{
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'to',
		displayName: 'To (<=)',
		queryParam: 'date.to',
		type: 'dateTime',
		description: 'Filter bills up to this date (ISO 8601)',
	},
	{
		group: 'ids',
		groupDisplayName: 'Identifiers',
		name: 'orderId',
		displayName: 'Order ID',
		queryParam: 'orderId',
		type: 'number',
		default: 0,
	},
	{
		group: 'category',
		groupDisplayName: 'Category',
		name: 'value',
		displayName: 'Category',
		queryParam: 'category',
		type: 'options',
		description: 'Filter bills by category',
		options: [
			{ name: 'Auto Renew', value: 'autorenew' },
			{ name: 'Early Renewal', value: 'earlyrenewal' },
			{ name: 'Purchase', value: 'purchase' },
			{ name: 'Purchase Cloud', value: 'purchase-cloud' },
			{ name: 'Purchase Servers', value: 'purchase-servers' },
			{ name: 'Purchase Telecom', value: 'purchase-telecom' },
			{ name: 'Purchase Web', value: 'purchase-web' },
		],
	},
];

export function descriptionListBills(displayOptions: IDisplayOptions): INodeProperties[] {
	return filtersCollection(displayOptions, BILL_FILTERS);
}

// listBills
export async function executeListBills(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	// Uses paginateResources for parallel detail fetching (concurrency 3).
	// Failed item fetches are silently skipped (previously threw).
	const results = await client.paginateResources<IDataObject>('/me/bill', '/me/bill/{id}', {
		query: buildFilterQuery(this, itemIndex ?? 0, BILL_FILTERS),
	});
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', _itemIndex) as string;
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', _itemIndex) as string;
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
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', itemIndex ?? 0) as string;
	// Uses paginateResources for parallel detail fetching (concurrency 3).
	// Failed item fetches are silently skipped (previously threw).
	const results = await client.paginateResources<IDataObject>(
		`/me/bill/${billId}/debt/operation`,
		`/me/bill/${billId}/debt/operation/{id}`,
	);
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', _itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', _itemIndex) as string;
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', _itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', _itemIndex) as string;
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
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', itemIndex ?? 0) as string;
	// Uses paginateResources for parallel detail fetching (concurrency 3).
	// Failed item fetches are silently skipped (previously threw).
	const results = await client.paginateResources<IDataObject>(
		`/me/bill/${billId}/details`,
		`/me/bill/${billId}/details/{id}`,
	);
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', _itemIndex) as string;
	const billDetailId = this.getNodeParameter('billDetailId', _itemIndex) as string;
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const billId = this.getNodeParameter('billId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/bill/${billId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Billing Groups
// ============================================================

// listBillingGroups
export async function executeListBillingGroups(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	// Uses paginateResources for parallel detail fetching (concurrency 3).
	// Failed item fetches are silently skipped (previously threw).
	const results = await client.paginateResources<IDataObject>(
		'/me/billing/group',
		'/me/billing/group/{id}',
	);
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const groupId = this.getNodeParameter('groupId', _itemIndex) as string;
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
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const groupId = this.getNodeParameter('groupId', itemIndex ?? 0) as string;
	// Uses paginateResources for parallel detail fetching (concurrency 3).
	// Failed item fetches are silently skipped (previously threw).
	const results = await client.paginateResources<IDataObject>(
		`/me/billing/group/${groupId}/service`,
		`/me/billing/group/${groupId}/service/{id}`,
	);
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const groupId = this.getNodeParameter('groupId', _itemIndex) as string;
	const serviceId = this.getNodeParameter('serviceId', _itemIndex) as string;
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
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	// Uses paginateResources for parallel detail fetching (concurrency 3).
	// Failed item fetches are silently skipped (previously threw).
	const results = await client.paginateResources<IDataObject>(
		'/me/billing/purchaseOrder',
		'/me/billing/purchaseOrder/{id}',
	);
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(`/me/billing/purchaseOrder/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listConsumptionReports
export async function executeListConsumptionReports(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	// Uses paginateResources for parallel detail fetching (concurrency 3).
	// Failed item fetches are silently skipped (previously threw).
	const results = await client.paginateResources<IDataObject>(
		'/me/billing/report/consumption',
		'/me/billing/report/consumption/{id}',
	);
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/billing/report/consumption/${taskId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
