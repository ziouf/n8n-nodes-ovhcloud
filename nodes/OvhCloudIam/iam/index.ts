/**
 * @brief IAM resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH IAM resources including:
 * - List all IAM resources
 * - Get detailed information about a specific IAM resource
 * - Manage authorizations, logs, permissions groups, policies, references, and resource groups
 *
 * Available operations:
 * - `list`: List all IAM resources
 * - `get`: Get details of a specific IAM resource
 * - `listAuthorizations`: List IAM authorizations
 * - `getAuthorization`: Get a specific authorization
 * - `listLogs`: List IAM logs
 * - `getLog`: Get a specific log
 * - `listPermissionsGroups`: List IAM permissions groups
 * - `getPermissionsGroup`: Get a specific permissions group
 * - `listPolicies`: List IAM policies
 * - `getPolicy`: Get a specific policy
 * - `listReferences`: List IAM references
 * - `listResources`: List IAM resources
 * - `getResource`: Get a specific resource
 * - `listResourceGroups`: List IAM resource groups
 * - `getResourceGroup`: Get a specific resource group
 *
 * @remarks
 * IAM resources are managed under `/v2/iam` route.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as resources from './resources';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IAM Operation',
			name: 'iamOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an IAM resource',
				},
				{
					name: 'Get Authorization',
					value: 'getAuthorization',
					action: 'Get a specific authorization',
				},
				{
					name: 'Get Log',
					value: 'getLog',
					action: 'Get a specific log',
				},
				{
					name: 'Get Permissions Group',
					value: 'getPermissionsGroup',
					action: 'Get a specific permissions group',
				},
				{
					name: 'Get Policy',
					value: 'getPolicy',
					action: 'Get a specific policy',
				},
				{
					name: 'Get Resource',
					value: 'getResource',
					action: 'Get a specific resource',
				},
				{
					name: 'Get Resource Group',
					value: 'getResourceGroup',
					action: 'Get a specific resource group',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all IAM resources',
				},
				{
					name: 'List Authorizations',
					value: 'listAuthorizations',
					action: 'List IAM authorizations',
				},
				{
					name: 'List Logs',
					value: 'listLogs',
					action: 'List IAM logs',
				},
				{
					name: 'List Permissions Groups',
					value: 'listPermissionsGroups',
					action: 'List IAM permissions groups',
				},
				{
					name: 'List Policies',
					value: 'listPolicies',
					action: 'List IAM policies',
				},
				{
					name: 'List References',
					value: 'listReferences',
					action: 'List IAM references',
				},
				{
					name: 'List Resource Groups',
					value: 'listResourceGroups',
					action: 'List IAM resource groups',
				},
				{
					name: 'List Resources',
					value: 'listResources',
					action: 'List IAM resources',
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
			show: { ...displayOptions?.show, iamOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['get'] },
		}),
		...resources.authorization.descriptionListIamAuthorizations({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['listAuthorizations'] },
		}),
		...resources.authorization.descriptionGetIamAuthorization({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['getAuthorization'] },
		}),
		...resources.log.descriptionListIamLogs({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['listLogs'] },
		}),
		...resources.log.descriptionGetIamLog({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['getLog'] },
		}),
		...resources.permissionsGroup.descriptionListIamPermissionsGroups({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['listPermissionsGroups'] },
		}),
		...resources.permissionsGroup.descriptionGetIamPermissionsGroup({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['getPermissionsGroup'] },
		}),
		...resources.policy.descriptionListIamPolicies({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['listPolicies'] },
		}),
		...resources.policy.descriptionGetIamPolicy({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['getPolicy'] },
		}),
		...resources.reference.descriptionListIamReferences({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['listReferences'] },
		}),
		...resources.resource.descriptionListIamResources({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['listResources'] },
		}),
		...resources.resource.descriptionGetIamResource({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['getResource'] },
		}),
		...resources.resourceGroup.descriptionListIamResourceGroups({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['listResourceGroups'] },
		}),
		...resources.resourceGroup.descriptionGetIamResourceGroup({
			...displayOptions,
			show: { ...displayOptions?.show, iamOperation: ['getResourceGroup'] },
		}),
	];
}

/**
 * Executes the selected IAM operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('iamOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listAuthorizations':
			return await resources.authorization.executeListIamAuthorizations.call(this);
		case 'getAuthorization':
			return await resources.authorization.executeGetIamAuthorization.call(this);
		case 'listLogs':
			return await resources.log.executeListIamLogs.call(this);
		case 'getLog':
			return await resources.log.executeGetIamLog.call(this);
		case 'listPermissionsGroups':
			return await resources.permissionsGroup.executeListIamPermissionsGroups.call(this);
		case 'getPermissionsGroup':
			return await resources.permissionsGroup.executeGetIamPermissionsGroup.call(this);
		case 'listPolicies':
			return await resources.policy.executeListIamPolicies.call(this);
		case 'getPolicy':
			return await resources.policy.executeGetIamPolicy.call(this);
		case 'listReferences':
			return await resources.reference.executeListIamReferences.call(this);
		case 'listResources':
			return await resources.resource.executeListIamResources.call(this);
		case 'getResource':
			return await resources.resource.executeGetIamResource.call(this);
		case 'listResourceGroups':
			return await resources.resourceGroup.executeListIamResourceGroups.call(this);
		case 'getResourceGroup':
			return await resources.resourceGroup.executeGetIamResourceGroup.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "iam"`);
}
