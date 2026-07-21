import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Credit Balances
// ============================================================

// listCreditBalances
export async function executeListCreditBalances(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/credit/balance')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/credit/balance/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const balanceName = this.getNodeParameter('balanceName', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const balanceName = this.getNodeParameter('balanceName', itemIndex) as string;
	const ids = (await client.httpGet(`/me/credit/balance/${balanceName}/movement`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/credit/balance/${balanceName}/movement/${id}`,
		)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const balanceName = this.getNodeParameter('balanceName', itemIndex) as string;
	const movementId = this.getNodeParameter('movementId', itemIndex) as string;
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
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/debtAccount')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listDebtAccountDebts
export async function executeListDebtAccountDebts(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/debtAccount/debt')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/debtAccount/debt/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const debtId = this.getNodeParameter('debtId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const debtId = this.getNodeParameter('debtId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/debtAccount/debt/${debtId}/operation`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/debtAccount/debt/${debtId}/operation/${id}`,
		)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const debtId = this.getNodeParameter('debtId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const debtId = this.getNodeParameter('debtId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/debtAccount/debt/${debtId}/operation/${operationId}/associatedObject`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : Deposits
// ============================================================

// listDeposits
export async function executeListDeposits(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/deposit')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/deposit/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const depositId = this.getNodeParameter('depositId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const depositId = this.getNodeParameter('depositId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/deposit/${depositId}/details`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/deposit/${depositId}/details/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const depositId = this.getNodeParameter('depositId', itemIndex) as string;
	const depositDetailId = this.getNodeParameter('depositDetailId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const depositId = this.getNodeParameter('depositId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/deposit/${depositId}/paidBills`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/deposit/${depositId}/paidBills/${id}`,
		)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const depositId = this.getNodeParameter('depositId', itemIndex) as string;
	const billId = this.getNodeParameter('billId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const depositId = this.getNodeParameter('depositId', itemIndex) as string;
	const data = (await client.httpGet(`/me/deposit/${depositId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe D : Withdrawals
// ============================================================

// listWithdrawals
export async function executeListWithdrawals(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/withdrawal')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/withdrawal/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/withdrawal/${withdrawalId}/details`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/withdrawal/${withdrawalId}/details/${id}`,
		)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', itemIndex) as string;
	const withdrawalDetailId = this.getNodeParameter('withdrawalDetailId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const withdrawalId = this.getNodeParameter('withdrawalId', itemIndex) as string;
	const data = (await client.httpGet(`/me/withdrawal/${withdrawalId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe E : Refunds
// ============================================================

// listRefunds
export async function executeListRefunds(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/refund')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/refund/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const refundId = this.getNodeParameter('refundId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const refundId = this.getNodeParameter('refundId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/refund/${refundId}/details`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/refund/${refundId}/details/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const refundId = this.getNodeParameter('refundId', itemIndex) as string;
	const refundDetailId = this.getNodeParameter('refundDetailId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const refundId = this.getNodeParameter('refundId', itemIndex) as string;
	const data = (await client.httpGet(`/me/refund/${refundId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe F : Reverse Bills
// ============================================================

// listReverseBills
export async function executeListReverseBills(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/reverseBill')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/reverseBill/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/reverseBill/${reverseBillId}/details`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/reverseBill/${reverseBillId}/details/${id}`,
		)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', itemIndex) as string;
	const reverseBillDetailId = this.getNodeParameter('reverseBillDetailId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const reverseBillId = this.getNodeParameter('reverseBillId', itemIndex) as string;
	const data = (await client.httpGet(`/me/reverseBill/${reverseBillId}/payment`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe G : Corrective Invoices
// ============================================================

// listCorrectiveInvoices
export async function executeListCorrectiveInvoices(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/correctiveInvoice')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/correctiveInvoice/${id}`)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
	const ids = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/debt/operation`,
	)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/correctiveInvoice/${correctiveInvoiceId}/debt/operation/${id}`,
		)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
	const operationId = this.getNodeParameter('operationId', itemIndex) as string;
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
	const ids = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/details`,
	)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/correctiveInvoice/${correctiveInvoiceId}/details/${id}`,
		)) as IDataObject;
		results.push(details);
	}
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
	const correctiveInvoiceDetailId = this.getNodeParameter(
		'correctiveInvoiceDetailId',
		itemIndex,
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const correctiveInvoiceId = this.getNodeParameter('correctiveInvoiceId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/correctiveInvoice/${correctiveInvoiceId}/payment`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
