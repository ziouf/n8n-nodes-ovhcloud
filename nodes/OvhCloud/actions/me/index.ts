/**
 * @brief My Account (Me) resource operations for n8n node
 *
 * Provides operations related to the authenticated user's OVH account including:
 * - Get account details (my info)
 * - List and retrieve bills with filters (date range, category, order ID)
 * - Manage debt account (outstanding balances)
 * - List and retrieve orders (with date range filtering)
 *
 * Available operations:
 * - `get`: GetMyInfo - Retrieve authenticated user information
 * - `bills.list`: ListBills - List all bills with filtering options
 * - `bills.get`: GetBill - Retrieve specific bill by ID
 * - `debtAccount.get`: GetDebtAccount - Retrieve debt account information
 * - `orders.list`: ListOrders - List all orders with date range filtering
 * - `orders.get`: GetOrder - Retrieve specific order by ID
 *
 * @remarks
 * All operations require valid OVH API credentials with consumerKey authentication.
 * Date filters use ISO 8601 format (e.g., `2026-03-01T00:00:00Z`).
 *
 * @example
 * // Configure in n8n node
 * Resource: My Account (Me)
 * Operation: List Bills
 * Filter: Category = 'purchase-web', Date From = '2026-03-01'
 * Output: Array of bill details including totalWithTax, status, creationDate
 *
 * @example
 * // Get specific bill details
 * // Resource: My Account (Me) -> Bills -> Get Bill
 * // billId = "bill-123456"
 * // Output: Bill details with lines, totalWithTax, status, etc.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeMeGet, description as descriptionMeGet } from './get.operation';
import {
	execute as executeBillsList,
	description as descriptionBillsList,
} from './bills/list.operation';
import {
	execute as executeBillsGet,
	description as descriptionBillsGet,
} from './bills/get.operation';
import {
	execute as executeDebtAccountGet,
	description as descriptionDebtAccountGet,
} from './debtAccount/get.operation';
import {
	execute as executeOrdersList,
	description as descriptionOrdersList,
} from './orders/list.operation';
import {
	execute as executeOrdersGet,
	description as descriptionOrdersGet,
} from './orders/get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const meResourceProperties: INodeProperties[] = [
		{
			displayName: 'My Account Resource',
			name: 'meResource',
			type: 'options',
			noDataExpression: true,
			displayOptions,
			options: [
				{
					name: 'My Account',
					value: 'me',
					action: 'Operations about the authenticated user',
				},
				{
					name: 'Bills',
					value: 'bills',
					action: 'Operations about bills',
				},
				{
					name: 'Debt Account',
					value: 'debtAccount',
					action: 'Operations about debt account',
				},
				{
					name: 'Orders',
					value: 'orders',
					action: 'Operations about orders',
				},
			],
			default: 'me',
		},
	];

	const meOperationProperties: INodeProperties[] = [
		{
			displayName: 'My Account Operation',
			name: 'meOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get My Info',
					value: 'get',
					action: 'Get information about the authenticated user',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['me'],
				},
			},
		},
		...descriptionMeGet({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['me'], meOperation: ['get'] },
		}),
	];

	const billsOperationProperties: INodeProperties[] = [
		{
			displayName: 'Bill Operation',
			name: 'billOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Bills',
					value: 'list',
					action: 'List bills',
				},
				{
					name: 'Get Bill',
					value: 'get',
					action: 'Get a specific bill',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['bills'],
				},
			},
		},
		...descriptionBillsGet({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['bills'], billOperation: ['get'] },
		}),
		...descriptionBillsList({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['bills'], billOperation: ['list'] },
		}),
	];

	const debtAccountOperationProperties: INodeProperties[] = [
		{
			displayName: 'Debt Account Operation',
			name: 'debtAccountOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Debt Account',
					value: 'get',
					action: 'Get information about the debt account of the authenticated user',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['debtAccount'],
				},
			},
		},
		...descriptionDebtAccountGet({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['debtAccount'], debtAccountOperation: ['get'] },
		}),
	];

	const ordersOperationProperties: INodeProperties[] = [
		{
			displayName: 'Order Operation',
			name: 'orderOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Orders',
					value: 'list',
					action: 'List all orders',
				},
				{
					name: 'Get Order',
					value: 'get',
					action: 'Get a specific order by ID',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['orders'],
				},
			},
		},
		...descriptionOrdersGet({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['orders'], orderOperation: ['get'] },
		}),
		...descriptionOrdersList({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['orders'], orderOperation: ['list'] },
		}),
	];

	return [
		...meResourceProperties,
		...meOperationProperties,
		...billsOperationProperties,
		...debtAccountOperationProperties,
		...ordersOperationProperties,
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const meResource = this.getNodeParameter('meResource', 0);

	switch (meResource) {
		case 'me': {
			const operation = this.getNodeParameter('meOperation', 0, { extractValue: true });
			switch (operation) {
				case 'get':
					return await executeMeGet.call(this);
			}
			break;
		}
		case 'bills': {
			const operation = this.getNodeParameter('billOperation', 0, { extractValue: true });
			switch (operation) {
				case 'list':
					return await executeBillsList.call(this);
				case 'get':
					return await executeBillsGet.call(this);
			}
			break;
		}
		case 'debtAccount': {
			const operation = this.getNodeParameter('debtAccountOperation', 0, { extractValue: true });
			switch (operation) {
				case 'get':
					return await executeDebtAccountGet.call(this);
			}
			break;
		}
		case 'orders': {
			const operation = this.getNodeParameter('orderOperation', 0, { extractValue: true });
			switch (operation) {
				case 'list':
					return await executeOrdersList.call(this);
				case 'get':
					return await executeOrdersGet.call(this);
			}
			break;
		}
	}

	throw new Error(`Unsupported operation "${meResource}" for resource "me"`);
}
