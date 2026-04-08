/**
 * @brief Metrics resource operations for n8n node
 *
 * Provides operations for managing OVHcloud metrics including:
 * - List all metrics services for the authenticated account
 * - Get detailed information about a specific metrics service
 * - Update metrics service properties
 * - Manage tokens (list, get, create, update, delete)
 * - Manage service information
 * - Change contacts, confirm termination, terminate service
 * - Get consumption data, lookup tokens, set quota
 *
 * Available operations:
 * - `list`: ListMetrics - List all metrics services
 * - `get`: GetMetrics - Get details of a specific metrics service
 * - `update`: UpdateMetrics - Update a metrics service
 * - `changeContact`: ChangeContact - Change admin, billing, or tech contact
 * - `confirmTermination`: ConfirmTermination - Confirm service termination
 * - `consumption`: GetConsumption - Get consumption data
 * - `lookupToken`: LookupToken - Lookup a token
 * - `quota`: SetQuota - Set quota
 * - `serviceInfosGet`: GetServiceInfos - Get service information
 * - `serviceInfosUpdate`: UpdateServiceInfos - Update service information
 * - `terminate`: Terminate - Terminate service
 * - `tokenList`: ListTokens - List tokens
 * - `tokenGet`: GetToken - Get a specific token
 * - `tokenCreate`: CreateToken - Create a token
 * - `tokenUpdate`: UpdateToken - Update a token
 * - `tokenDelete`: DeleteToken - Delete a token
 *
 * @remarks
 * Metrics services are managed under `/metrics` route.
 * Service name can be entered manually.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeUpdate,
	description as descriptionUpdate,
} from './resources/update.operation';
import {
	execute as executeChangeContact,
	description as descriptionChangeContact,
} from './resources/changeContact/execute.operation';
import {
	execute as executeConfirmTermination,
	description as descriptionConfirmTermination,
} from './resources/confirmTermination/execute.operation';
import {
	execute as executeGetConsumption,
	description as descriptionGetConsumption,
} from './resources/consumption/get.operation';
import {
	execute as executeLookupToken,
	description as descriptionLookupToken,
} from './resources/lookupToken/execute.operation';
import {
	execute as executeSetQuota,
	description as descriptionSetQuota,
} from './resources/quota/set.operation';
import {
	execute as executeGetServiceInfos,
	description as descriptionGetServiceInfos,
} from './resources/serviceInfos/get.operation';
import {
	execute as executeUpdateServiceInfos,
	description as descriptionUpdateServiceInfos,
} from './resources/serviceInfos/update.operation';
import {
	execute as executeTerminate,
	description as descriptionTerminate,
} from './resources/terminate/execute.operation';
import {
	execute as executeListTokens,
	description as descriptionListTokens,
} from './resources/tokens/list.operation';
import {
	execute as executeGetToken,
	description as descriptionGetToken,
} from './resources/tokens/get.operation';
import {
	execute as executeCreateToken,
	description as descriptionCreateToken,
} from './resources/tokens/create.operation';
import {
	execute as executeUpdateToken,
	description as descriptionUpdateToken,
} from './resources/tokens/update.operation';
import {
	execute as executeDeleteToken,
	description as descriptionDeleteToken,
} from './resources/tokens/delete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Metrics Operation',
			name: 'metricsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change admin, billing, or tech contact',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm service termination',
				},
				{
					name: 'Create Token',
					value: 'tokenCreate',
					action: 'Create a token',
				},
				{
					name: 'Delete Token',
					value: 'tokenDelete',
					action: 'Delete a token',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a metrics service',
				},
				{
					name: 'Get Consumption',
					value: 'consumption',
					action: 'Get consumption data',
				},
				{
					name: 'Get Service Infos',
					value: 'serviceInfosGet',
					action: 'Get service information',
				},
				{
					name: 'Get Token',
					value: 'tokenGet',
					action: 'Get a specific token',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all metrics services',
				},
				{
					name: 'List Tokens',
					value: 'tokenList',
					action: 'List tokens',
				},
				{
					name: 'Lookup Token',
					value: 'lookupToken',
					action: 'Lookup a token',
				},
				{
					name: 'Set Quota',
					value: 'quota',
					action: 'Set quota',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate service',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a metrics service',
				},
				{
					name: 'Update Service Infos',
					value: 'serviceInfosUpdate',
					action: 'Update service information',
				},
				{
					name: 'Update Token',
					value: 'tokenUpdate',
					action: 'Update a token',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['update'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['changeContact'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['confirmTermination'] },
		}),
		...descriptionGetConsumption({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['consumption'] },
		}),
		...descriptionLookupToken({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['lookupToken'] },
		}),
		...descriptionSetQuota({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['quota'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['serviceInfosGet'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['serviceInfosUpdate'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['terminate'] },
		}),
		...descriptionListTokens({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['tokenList'] },
		}),
		...descriptionGetToken({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['tokenGet'] },
		}),
		...descriptionCreateToken({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['tokenCreate'] },
		}),
		...descriptionUpdateToken({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['tokenUpdate'] },
		}),
		...descriptionDeleteToken({
			...displayOptions,
			show: { ...displayOptions?.show, metricsOperation: ['tokenDelete'] },
		}),
	];
}

/**
 * Executes the selected metrics operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('metricsOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'changeContact':
			return await executeChangeContact.call(this);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this);
		case 'consumption':
			return await executeGetConsumption.call(this);
		case 'lookupToken':
			return await executeLookupToken.call(this);
		case 'quota':
			return await executeSetQuota.call(this);
		case 'serviceInfosGet':
			return await executeGetServiceInfos.call(this);
		case 'serviceInfosUpdate':
			return await executeUpdateServiceInfos.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
		case 'tokenList':
			return await executeListTokens.call(this);
		case 'tokenGet':
			return await executeGetToken.call(this);
		case 'tokenCreate':
			return await executeCreateToken.call(this);
		case 'tokenUpdate':
			return await executeUpdateToken.call(this);
		case 'tokenDelete':
			return await executeDeleteToken.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "metrics"`);
}
