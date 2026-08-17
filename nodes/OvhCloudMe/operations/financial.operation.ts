/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-default-missing */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { buildFilterQuery } from '../../../shared/nodes/filterQuery';
import { filtersCollection, type FilterDefinition } from '../../../shared/nodes/filterOptions';

// ============================================================
// Groupe A : Credit Balances
// ============================================================

// listCreditBalances
export async function executeListCreditBalances(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const results = await client.fetchEachResources(`/me/credit/balance`, `/me/credit/balance/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getCreditBalance
export function descriptionGetCreditBalance(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
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

export async function executeGetCreditBalance(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const balanceName = this.getNodeParameter('balanceName', _itemIndex) as string;
	const data = (await client.httpGet(`/me/credit/balance/${balanceName}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listCreditBalanceMovements
export function descriptionListCreditBalanceMovements(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
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

export async function executeListCreditBalanceMovements(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const balanceName = this.getNodeParameter('balanceName', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/credit/balance/${balanceName}/movement`, `/me/credit/balance/${balanceName}/movement/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getCreditBalanceMovement
export function descriptionGetCreditBalanceMovement(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Balance Name',
			name: 'balanceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The credit balance name',
			displayOptions,
		},
		{
			displayName: 'Movement ID',
			name: 'movementId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetCreditBalanceMovement(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const balanceName = this.getNodeParameter('balanceName', _itemIndex) as string;
	const movementId = this.getNodeParameter('movementId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/credit/balance/${balanceName}/movement/${movementId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Debt Account
// ============================================================

// getDebtAccount
export async function executeGetDebtAccount(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/me/debtAccount')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listDebtAccountDebts
export async function executeListDebtAccountDebts(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const results = await client.fetchEachResources(`/me/debtAccount/debt`, `/me/debtAccount/debt/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getDebtAccountDebt
export function descriptionGetDebtAccountDebt(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Debt ID',
			name: 'debtId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetDebtAccountDebt(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const debtId = this.getNodeParameter('debtId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/debtAccount/debt/${debtId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listDebtAccountDebtOperations
export function descriptionListDebtAccountDebtOperations(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Debt ID',
			name: 'debtId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListDebtAccountDebtOperations(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const debtId = this.getNodeParameter('debtId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/debtAccount/debt/${debtId}/operation`, `/me/debtAccount/debt/${debtId}/operation/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getDebtAccountDebtOperation
export function descriptionGetDebtAccountDebtOperation(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Debt ID',
			name: 'debtId',
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

export async function executeGetDebtAccountDebtOperation(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const debtId = this.getNodeParameter('debtId', _itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/debtAccount/debt/${debtId}/operation/${operationId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getDebtAccountDebtOperationAssociatedObject
export function descriptionGetDebtAccountDebtOperationAssociatedObject(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Debt ID',
			name: 'debtId',
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

export async function executeGetDebtAccountDebtOperationAssociatedObject(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const debtId = this.getNodeParameter('debtId', _itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/debtAccount/debt/${debtId}/operation/${operationId}/associatedObject`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : Deposits
// ============================================================

// Deposit filter definitions (used by both descriptionListDeposits and buildFilterQuery)
export const DEPOSIT_FILTERS: FilterDefinition[] = [
	{
		displayName: 'From (>=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'from',
		queryParam: 'date.from',
		type: 'dateTime',
		default: '',
		description: 'Filter deposits from this date (ISO 8601)',
	},
	{
		displayName: 'To (<=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'to',
		queryParam: 'date.to',
		type: 'dateTime',
		default: '',
		description: 'Filter deposits up to this date (ISO 8601)',
	},
	{
		displayName: 'Order ID',
		group: 'ids',
		groupDisplayName: 'Identifiers',
		name: 'orderId',
		queryParam: 'orderId',
		type: 'number',
		default: 0,
	},
];

// listDeposits
export function descriptionListDeposits(displayOptions: IDisplayOptions): INodeProperties[] {
	return filtersCollection(displayOptions, DEPOSIT_FILTERS);
}

export async function executeListDeposits(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs = buildFilterQuery(this, itemIndex ?? 0, DEPOSIT_FILTERS);
	const results = await client.fetchEachResources(`/me/deposit`, `/me/deposit/{id}`, { qs: qs });
	return this.helpers.returnJsonArray(results);
}

// getDeposit
export function descriptionGetDeposit(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Deposit ID',
			name: 'depositId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetDeposit(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const depositId = this.getNodeParameter('depositId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/deposit/${depositId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listDepositDetails
export function descriptionListDepositDetails(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Deposit ID',
			name: 'depositId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListDepositDetails(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const depositId = this.getNodeParameter('depositId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/deposit/${depositId}/details`, `/me/deposit/${depositId}/details/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getDepositDetail
export function descriptionGetDepositDetail(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Deposit ID',
			name: 'depositId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Deposit Detail ID',
			name: 'depositDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetDepositDetail(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const depositId = this.getNodeParameter('depositId', _itemIndex) as string;
	const depositDetailId = this.getNodeParameter('depositDetailId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/deposit/${depositId}/details/${depositDetailId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listDepositPaidBills
export function descriptionListDepositPaidBills(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Deposit ID',
			name: 'depositId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListDepositPaidBills(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const depositId = this.getNodeParameter('depositId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/deposit/${depositId}/paidBills`, `/me/deposit/${depositId}/paidBills/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getDepositPaidBill
export function descriptionGetDepositPaidBill(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Deposit ID',
			name: 'depositId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			description: 'The paid bill ID',
			displayOptions,
		},
	];
}

export async function executeGetDepositPaidBill(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const depositId = this.getNodeParameter('depositId', _itemIndex) as string;
	const billId = this.getNodeParameter('billId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/deposit/${depositId}/paidBills/${billId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getDepositPayment
export function descriptionGetDepositPayment(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Deposit ID',
			name: 'depositId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetDepositPayment(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const depositId = this.getNodeParameter('depositId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/deposit/${depositId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe D : Withdrawals
// ============================================================

// Withdrawal filter definitions
export const WITHDRAWAL_FILTERS: FilterDefinition[] = [
	{
		displayName: 'From (>=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'from',
		queryParam: 'date.from',
		type: 'dateTime',
		default: '',
		description: 'Filter withdrawals from this date (ISO 8601)',
	},
	{
		displayName: 'To (<=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'to',
		queryParam: 'date.to',
		type: 'dateTime',
		default: '',
		description: 'Filter withdrawals up to this date (ISO 8601)',
	},
	{
		displayName: 'Order ID',
		group: 'ids',
		groupDisplayName: 'Identifiers',
		name: 'orderId',
		queryParam: 'orderId',
		type: 'number',
		default: 0,
	},
];

export function descriptionListWithdrawals(displayOptions: IDisplayOptions): INodeProperties[] {
	return filtersCollection(displayOptions, WITHDRAWAL_FILTERS);
}

// listWithdrawals
export async function executeListWithdrawals(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs = buildFilterQuery(this, itemIndex ?? 0, WITHDRAWAL_FILTERS);
	const results = await client.fetchEachResources(`/me/withdrawal`, `/me/withdrawal/{id}`, { qs: qs });
	return this.helpers.returnJsonArray(results);
}

// getWithdrawal
export function descriptionGetWithdrawal(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Withdrawal ID',
			name: 'withdrawalId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetWithdrawal(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/withdrawal/${withdrawalId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listWithdrawalDetails
export function descriptionListWithdrawalDetails(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Withdrawal ID',
			name: 'withdrawalId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListWithdrawalDetails(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/withdrawal/${withdrawalId}/details`, `/me/withdrawal/${withdrawalId}/details/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getWithdrawalDetail
export function descriptionGetWithdrawalDetail(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Withdrawal ID',
			name: 'withdrawalId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Withdrawal Detail ID',
			name: 'withdrawalDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetWithdrawalDetail(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', _itemIndex) as string;
	const withdrawalDetailId = this.getNodeParameter('withdrawalDetailId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/withdrawal/${withdrawalId}/details/${withdrawalDetailId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getWithdrawalPayment
export function descriptionGetWithdrawalPayment(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Withdrawal ID',
			name: 'withdrawalId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetWithdrawalPayment(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/withdrawal/${withdrawalId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe E : Refunds
// ============================================================

// Refund filter definitions
export const REFUND_FILTERS: FilterDefinition[] = [
	{
		displayName: 'From (>=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'from',
		queryParam: 'date.from',
		type: 'dateTime',
		default: '',
		description: 'Filter refunds from this date (ISO 8601)',
	},
	{
		displayName: 'To (<=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'to',
		queryParam: 'date.to',
		type: 'dateTime',
		default: '',
		description: 'Filter refunds up to this date (ISO 8601)',
	},
	{
		displayName: 'Order ID',
		group: 'ids',
		groupDisplayName: 'Identifiers',
		name: 'orderId',
		queryParam: 'orderId',
		type: 'number',
		default: 0,
	},
];

export function descriptionListRefunds(displayOptions: IDisplayOptions): INodeProperties[] {
	return filtersCollection(displayOptions, REFUND_FILTERS);
}

// listRefunds
export async function executeListRefunds(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs = buildFilterQuery(this, itemIndex ?? 0, REFUND_FILTERS);
	const results = await client.fetchEachResources(`/me/refund`, `/me/refund/{id}`, { qs: qs });
	return this.helpers.returnJsonArray(results);
}

// getRefund
export function descriptionGetRefund(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Refund ID',
			name: 'refundId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetRefund(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const refundId = this.getNodeParameter('refundId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/refund/${refundId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listRefundDetails
export function descriptionListRefundDetails(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Refund ID',
			name: 'refundId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListRefundDetails(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const refundId = this.getNodeParameter('refundId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/refund/${refundId}/details`, `/me/refund/${refundId}/details/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getRefundDetail
export function descriptionGetRefundDetail(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Refund ID',
			name: 'refundId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Refund Detail ID',
			name: 'refundDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetRefundDetail(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const refundId = this.getNodeParameter('refundId', _itemIndex) as string;
	const refundDetailId = this.getNodeParameter('refundDetailId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/refund/${refundId}/details/${refundDetailId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getRefundPayment
export function descriptionGetRefundPayment(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Refund ID',
			name: 'refundId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetRefundPayment(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const refundId = this.getNodeParameter('refundId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/refund/${refundId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe F : Reverse Bills
// ============================================================

// Reverse Bill filter definitions
export const REVERSE_BILL_FILTERS: FilterDefinition[] = [
	{
		displayName: 'From (>=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'from',
		queryParam: 'date.from',
		type: 'dateTime',
		default: '',
		description: 'Filter reverse bills from this date (ISO 8601)',
	},
	{
		displayName: 'To (<=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'to',
		queryParam: 'date.to',
		type: 'dateTime',
		default: '',
		description: 'Filter reverse bills up to this date (ISO 8601)',
	},
	{
		displayName: 'Order ID',
		group: 'ids',
		groupDisplayName: 'Identifiers',
		name: 'orderId',
		queryParam: 'orderId',
		type: 'number',
		default: 0,
	},
];

export function descriptionListReverseBills(displayOptions: IDisplayOptions): INodeProperties[] {
	return filtersCollection(displayOptions, REVERSE_BILL_FILTERS);
}

// listReverseBills
export async function executeListReverseBills(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs = buildFilterQuery(this, itemIndex ?? 0, REVERSE_BILL_FILTERS);
	const results = await client.fetchEachResources(`/me/reverseBill`, `/me/reverseBill/{id}`, { qs: qs });
	return this.helpers.returnJsonArray(results);
}

// getReverseBill
export function descriptionGetReverseBill(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Reverse Bill ID',
			name: 'reverseBillId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetReverseBill(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/reverseBill/${reverseBillId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listReverseBillDetails
export function descriptionListReverseBillDetails(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Reverse Bill ID',
			name: 'reverseBillId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListReverseBillDetails(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/reverseBill/${reverseBillId}/details`, `/me/reverseBill/${reverseBillId}/details/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getReverseBillDetail
export function descriptionGetReverseBillDetail(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Reverse Bill ID',
			name: 'reverseBillId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Reverse Bill Detail ID',
			name: 'reverseBillDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetReverseBillDetail(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', _itemIndex) as string;
	const reverseBillDetailId = this.getNodeParameter('reverseBillDetailId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/reverseBill/${reverseBillId}/details/${reverseBillDetailId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getReverseBillPayment
export function descriptionGetReverseBillPayment(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Reverse Bill ID',
			name: 'reverseBillId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetReverseBillPayment(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/reverseBill/${reverseBillId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe G : Corrective Invoices
// ============================================================

// Corrective Invoice filter definitions
export const CORRECTIVE_INVOICE_FILTERS: FilterDefinition[] = [
	{
		displayName: 'From (>=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'from',
		queryParam: 'date.from',
		type: 'dateTime',
		default: '',
		description: 'Filter corrective invoices from this date (ISO 8601)',
	},
	{
		displayName: 'To (<=)',
		group: 'dateRange',
		groupDisplayName: 'Date Range',
		name: 'to',
		queryParam: 'date.to',
		type: 'dateTime',
		default: '',
		description: 'Filter corrective invoices up to this date (ISO 8601)',
	},
	{
		displayName: 'Order ID',
		group: 'ids',
		groupDisplayName: 'Identifiers',
		name: 'orderId',
		queryParam: 'orderId',
		type: 'number',
		default: 0,
	},
	{
		displayName: 'Category',
		group: 'category',
		groupDisplayName: 'Category',
		name: 'value',
		queryParam: 'category',
		type: 'options',
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

export function descriptionListCorrectiveInvoices(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return filtersCollection(displayOptions, CORRECTIVE_INVOICE_FILTERS);
}

// listCorrectiveInvoices
export async function executeListCorrectiveInvoices(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs = buildFilterQuery(this, itemIndex ?? 0, CORRECTIVE_INVOICE_FILTERS);
	const results = await client.fetchEachResources(`/me/correctiveInvoice`, `/me/correctiveInvoice/{id}`, { qs: qs });
	return this.helpers.returnJsonArray(results);
}

// getCorrectiveInvoice
export function descriptionGetCorrectiveInvoice(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetCorrectiveInvoice(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getCorrectiveInvoiceDebt
export function descriptionGetCorrectiveInvoiceDebt(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetCorrectiveInvoiceDebt(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/debt`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listCorrectiveInvoiceDebtOperations
export function descriptionListCorrectiveInvoiceDebtOperations(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListCorrectiveInvoiceDebtOperations(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/correctiveInvoice/${correctiveInvoiceId}/debt/operation`, `/me/correctiveInvoice/${correctiveInvoiceId}/debt/operation/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getCorrectiveInvoiceDebtOperation
export function descriptionGetCorrectiveInvoiceDebtOperation(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
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

export async function executeGetCorrectiveInvoiceDebtOperation(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/debt/operation/${operationId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getCorrectiveInvoiceDebtOperationAssociatedObject
export function descriptionGetCorrectiveInvoiceDebtOperationAssociatedObject(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
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

export async function executeGetCorrectiveInvoiceDebtOperationAssociatedObject(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/debt/operation/${operationId}/associatedObject`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listCorrectiveInvoiceDetails
export function descriptionListCorrectiveInvoiceDetails(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListCorrectiveInvoiceDetails(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const results = await client.fetchEachResources(`/me/correctiveInvoice/${correctiveInvoiceId}/details`, `/me/correctiveInvoice/${correctiveInvoiceId}/details/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getCorrectiveInvoiceDetail
export function descriptionGetCorrectiveInvoiceDetail(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Corrective Invoice Detail ID',
			name: 'correctiveInvoiceDetailId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetCorrectiveInvoiceDetail(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const correctiveInvoiceDetailId = this.getNodeParameter(
		'correctiveInvoiceDetailId',
		_itemIndex,
	) as string;
	const data = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/details/${correctiveInvoiceDetailId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getCorrectiveInvoicePayment
export function descriptionGetCorrectiveInvoicePayment(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Corrective Invoice ID',
			name: 'correctiveInvoiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetCorrectiveInvoicePayment(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/payment`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
