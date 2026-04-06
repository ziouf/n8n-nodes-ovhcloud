/**
 * @brief My Account (Me) resource operations for n8n node
 *
 * Provides operations related to the authenticated user's OVH account including:
 * - Get and update account details
 * - List and retrieve bills with filters
 * - Manage debt account
 * - List and retrieve orders
 * - Manage API applications and credentials
 * - Manage contacts and SSH keys
 *
 * Available operations:
 * - `get`: GetMyInfo - Retrieve authenticated user information
 * - `update`: UpdateMyInfo - Update authenticated user information
 * - `bills.list`: ListBills - List all bills with filtering options
 * - `bills.get`: GetBill - Retrieve specific bill by ID
 * - `debtAccount.get`: GetDebtAccount - Retrieve debt account information
 * - `orders.list`: ListOrders - List all orders with date range filtering
 * - `orders.get`: GetOrder - Retrieve specific order by ID
 * - `meApiApplication.list`: ListApiApplications - List API applications
 * - `meApiApplication.get`: GetApiApplication - Get API application details
 * - `meApiApplication.delete`: DeleteApiApplication - Delete an API application
 * - `meApiCredential.list`: ListApiCredentials - List API credentials
 * - `meApiCredential.get`: GetApiCredential - Get API credential details
 * - `meApiCredential.update`: UpdateApiCredential - Update an API credential
 * - `meApiCredential.delete`: DeleteApiCredential - Delete an API credential
 * - `meContact.list`: ListContacts - List all contacts
 * - `meContact.get`: GetContact - Get contact details
 * - `meSshKey.list`: ListSshKeys - List all SSH keys
 * - `meSshKey.get`: GetSshKey - Get SSH key details
 * - `meSshKey.create`: CreateSshKey - Create a new SSH key
 * - `meSshKey.delete`: DeleteSshKey - Delete an SSH key
 *
 * @remarks
 * All operations require valid OVH API credentials with consumerKey authentication.
 * Date filters use ISO 8601 format (e.g., `2026-03-01T00:00:00Z`).
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeMeGet, description as descriptionMeGet } from './get.operation';
import { execute as executeMeUpdate, description as descriptionMeUpdate } from './update.operation';
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
import {
	execute as executeMeApiApplicationList,
	description as descriptionMeApiApplicationList,
} from './resources/meApiApplication/list.operation';
import {
	execute as executeMeApiApplicationGet,
	description as descriptionMeApiApplicationGet,
} from './resources/meApiApplication/get.operation';
import {
	execute as executeMeApiApplicationDelete,
	description as descriptionMeApiApplicationDelete,
} from './resources/meApiApplication/delete.operation';
import {
	execute as executeMeApiCredentialList,
	description as descriptionMeApiCredentialList,
} from './resources/meApiCredential/list.operation';
import {
	execute as executeMeApiCredentialGet,
	description as descriptionMeApiCredentialGet,
} from './resources/meApiCredential/get.operation';
import {
	execute as executeMeApiCredentialUpdate,
	description as descriptionMeApiCredentialUpdate,
} from './resources/meApiCredential/update.operation';
import {
	execute as executeMeApiCredentialDelete,
	description as descriptionMeApiCredentialDelete,
} from './resources/meApiCredential/delete.operation';
import {
	execute as executeMeContactList,
	description as descriptionMeContactList,
} from './resources/meContact/list.operation';
import {
	execute as executeMeContactGet,
	description as descriptionMeContactGet,
} from './resources/meContact/get.operation';
import {
	execute as executeMeSshKeyList,
	description as descriptionMeSshKeyList,
} from './resources/meSshKey/list.operation';
import {
	execute as executeMeSshKeyGet,
	description as descriptionMeSshKeyGet,
} from './resources/meSshKey/get.operation';
import {
	execute as executeMeSshKeyCreate,
	description as descriptionMeSshKeyCreate,
} from './resources/meSshKey/create.operation';
import {
	execute as executeMeSshKeyDelete,
	description as descriptionMeSshKeyDelete,
} from './resources/meSshKey/delete.operation';

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
				{
					name: 'API Applications',
					value: 'meApiApplication',
					action: 'Operations about API applications',
				},
				{
					name: 'API Credentials',
					value: 'meApiCredential',
					action: 'Operations about API credentials',
				},
				{
					name: 'Contacts',
					value: 'meContact',
					action: 'Operations about contacts',
				},
				{
					name: 'SSH Keys',
					value: 'meSshKey',
					action: 'Operations about SSH keys',
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
				{
					name: 'Update My Info',
					value: 'update',
					action: 'Update information about the authenticated user',
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
		...descriptionMeUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['me'], meOperation: ['update'] },
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

	const meApiApplicationOperationProperties: INodeProperties[] = [
		{
			displayName: 'API Application Operation',
			name: 'meApiApplicationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all API applications',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an API application',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete an API application',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['meApiApplication'],
				},
			},
		},
		...descriptionMeApiApplicationList({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meResource: ['meApiApplication'],
				meApiApplicationOperation: ['list'],
			},
		}),
		...descriptionMeApiApplicationGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meResource: ['meApiApplication'],
				meApiApplicationOperation: ['get'],
			},
		}),
		...descriptionMeApiApplicationDelete({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meResource: ['meApiApplication'],
				meApiApplicationOperation: ['delete'],
			},
		}),
	];

	const meApiCredentialOperationProperties: INodeProperties[] = [
		{
			displayName: 'API Credential Operation',
			name: 'meApiCredentialOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all API credentials',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an API credential',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update an API credential',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete an API credential',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['meApiCredential'],
				},
			},
		},
		...descriptionMeApiCredentialList({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meResource: ['meApiCredential'],
				meApiCredentialOperation: ['list'],
			},
		}),
		...descriptionMeApiCredentialGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meResource: ['meApiCredential'],
				meApiCredentialOperation: ['get'],
			},
		}),
		...descriptionMeApiCredentialUpdate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meResource: ['meApiCredential'],
				meApiCredentialOperation: ['update'],
			},
		}),
		...descriptionMeApiCredentialDelete({
			...displayOptions,
			show: {
				...displayOptions?.show,
				meResource: ['meApiCredential'],
				meApiCredentialOperation: ['delete'],
			},
		}),
	];

	const meContactOperationProperties: INodeProperties[] = [
		{
			displayName: 'Contact Operation',
			name: 'meContactOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all contacts',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a contact',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['meContact'],
				},
			},
		},
		...descriptionMeContactList({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['meContact'], meContactOperation: ['list'] },
		}),
		...descriptionMeContactGet({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['meContact'], meContactOperation: ['get'] },
		}),
	];

	const meSshKeyOperationProperties: INodeProperties[] = [
		{
			displayName: 'SSH Key Operation',
			name: 'meSshKeyOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all SSH keys',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an SSH key',
				},
				{
					name: 'Create',
					value: 'create',
					action: 'Create a new SSH key',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete an SSH key',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					meResource: ['meSshKey'],
				},
			},
		},
		...descriptionMeSshKeyList({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['meSshKey'], meSshKeyOperation: ['list'] },
		}),
		...descriptionMeSshKeyGet({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['meSshKey'], meSshKeyOperation: ['get'] },
		}),
		...descriptionMeSshKeyCreate({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['meSshKey'], meSshKeyOperation: ['create'] },
		}),
		...descriptionMeSshKeyDelete({
			...displayOptions,
			show: { ...displayOptions?.show, meResource: ['meSshKey'], meSshKeyOperation: ['delete'] },
		}),
	];

	return [
		...meResourceProperties,
		...meOperationProperties,
		...billsOperationProperties,
		...debtAccountOperationProperties,
		...ordersOperationProperties,
		...meApiApplicationOperationProperties,
		...meApiCredentialOperationProperties,
		...meContactOperationProperties,
		...meSshKeyOperationProperties,
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
				case 'update':
					return await executeMeUpdate.call(this);
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
		case 'meApiApplication': {
			const operation = this.getNodeParameter('meApiApplicationOperation', 0, {
				extractValue: true,
			});
			switch (operation) {
				case 'list':
					return await executeMeApiApplicationList.call(this);
				case 'get':
					return await executeMeApiApplicationGet.call(this);
				case 'delete':
					return await executeMeApiApplicationDelete.call(this);
			}
			break;
		}
		case 'meApiCredential': {
			const operation = this.getNodeParameter('meApiCredentialOperation', 0, {
				extractValue: true,
			});
			switch (operation) {
				case 'list':
					return await executeMeApiCredentialList.call(this);
				case 'get':
					return await executeMeApiCredentialGet.call(this);
				case 'update':
					return await executeMeApiCredentialUpdate.call(this);
				case 'delete':
					return await executeMeApiCredentialDelete.call(this);
			}
			break;
		}
		case 'meContact': {
			const operation = this.getNodeParameter('meContactOperation', 0, { extractValue: true });
			switch (operation) {
				case 'list':
					return await executeMeContactList.call(this);
				case 'get':
					return await executeMeContactGet.call(this);
			}
			break;
		}
		case 'meSshKey': {
			const operation = this.getNodeParameter('meSshKeyOperation', 0, { extractValue: true });
			switch (operation) {
				case 'list':
					return await executeMeSshKeyList.call(this);
				case 'get':
					return await executeMeSshKeyGet.call(this);
				case 'create':
					return await executeMeSshKeyCreate.call(this);
				case 'delete':
					return await executeMeSshKeyDelete.call(this);
			}
			break;
		}
	}

	throw new Error(`Unsupported operation "${meResource}" for resource "me"`);
}
