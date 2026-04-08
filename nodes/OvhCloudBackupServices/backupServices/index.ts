/**
 * @brief Backup Services resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH backup services including:
 * - List all backup services
 * - Get detailed information about a specific backup service
 * - Manage tenants, vaults, VSPCs, backup agents, backup policies, and management agents
 *
 * Available operations:
 * - `list`: List all backup services
 * - `get`: Get details of a specific backup service
 * - `listTenants`: List backup service tenants
 * - `getTenant`: Get a specific tenant
 * - `listVaults`: List backup service vaults
 * - `getVault`: Get a specific vault
 * - `listVspcs`: List backup service VSPCs
 * - `getVspc`: Get a specific VSPC
 * - `listBackupAgents`: List backup service agents
 * - `getBackupAgent`: Get a specific backup agent
 * - `listBackupPolicies`: List backup service policies
 * - `getBackupPolicy`: Get a specific backup policy
 * - `listManagementAgents`: List backup service management agents
 * - `getManagementAgent`: Get a specific management agent
 *
 * @remarks
 * Backup services are managed under `/v2/backupServices` route.
 * Service name can be entered manually or selected from dynamic dropdown.
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
			displayName: 'Backup Services Operation',
			name: 'backupServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a backup service',
				},
				{
					name: 'Get Backup Agent',
					value: 'getBackupAgent',
					action: 'Get a specific backup agent',
				},
				{
					name: 'Get Backup Policy',
					value: 'getBackupPolicy',
					action: 'Get a specific backup policy',
				},
				{
					name: 'Get Management Agent',
					value: 'getManagementAgent',
					action: 'Get a specific management agent',
				},
				{
					name: 'Get Tenant',
					value: 'getTenant',
					action: 'Get a specific tenant',
				},
				{
					name: 'Get Vault',
					value: 'getVault',
					action: 'Get a specific vault',
				},
				{
					name: 'Get VSPC',
					value: 'getVspc',
					action: 'Get a specific VSPC',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all backup services',
				},
				{
					name: 'List Backup Agents',
					value: 'listBackupAgents',
					action: 'List backup service agents',
				},
				{
					name: 'List Backup Policies',
					value: 'listBackupPolicies',
					action: 'List backup service policies',
				},
				{
					name: 'List Management Agents',
					value: 'listManagementAgents',
					action: 'List backup service management agents',
				},
				{
					name: 'List Tenants',
					value: 'listTenants',
					action: 'List backup service tenants',
				},
				{
					name: 'List Vaults',
					value: 'listVaults',
					action: 'List backup service vaults',
				},
				{
					name: 'List VSPCs',
					value: 'listVspcs',
					action: 'List backup service VSPCs',
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
			show: { ...displayOptions?.show, backupServicesOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['get'] },
		}),
		...resources.tenant.descriptionListBackupServiceTenants({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['listTenants'] },
		}),
		...resources.tenant.descriptionGetBackupServiceTenant({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['getTenant'] },
		}),
		...resources.vault.descriptionListBackupServiceVaults({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['listVaults'] },
		}),
		...resources.vault.descriptionGetBackupServiceVault({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['getVault'] },
		}),
		...resources.vspc.descriptionListBackupServiceVspcs({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['listVspcs'] },
		}),
		...resources.vspc.descriptionGetBackupServiceVspc({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['getVspc'] },
		}),
		...resources.backupAgent.descriptionListBackupServiceAgents({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['listBackupAgents'] },
		}),
		...resources.backupAgent.descriptionGetBackupServiceAgent({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['getBackupAgent'] },
		}),
		...resources.backupPolicy.descriptionListBackupServicePolicies({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['listBackupPolicies'] },
		}),
		...resources.backupPolicy.descriptionGetBackupServicePolicy({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['getBackupPolicy'] },
		}),
		...resources.managementAgent.descriptionListBackupServiceManagementAgents({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['listManagementAgents'] },
		}),
		...resources.managementAgent.descriptionGetBackupServiceManagementAgent({
			...displayOptions,
			show: { ...displayOptions?.show, backupServicesOperation: ['getManagementAgent'] },
		}),
	];
}

/**
 * Executes the selected backup services operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('backupServicesOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listTenants':
			return await resources.tenant.executeListBackupServiceTenants.call(this);
		case 'getTenant':
			return await resources.tenant.executeGetBackupServiceTenant.call(this);
		case 'listVaults':
			return await resources.vault.executeListBackupServiceVaults.call(this);
		case 'getVault':
			return await resources.vault.executeGetBackupServiceVault.call(this);
		case 'listVspcs':
			return await resources.vspc.executeListBackupServiceVspcs.call(this);
		case 'getVspc':
			return await resources.vspc.executeGetBackupServiceVspc.call(this);
		case 'listBackupAgents':
			return await resources.backupAgent.executeListBackupServiceAgents.call(this);
		case 'getBackupAgent':
			return await resources.backupAgent.executeGetBackupServiceAgent.call(this);
		case 'listBackupPolicies':
			return await resources.backupPolicy.executeListBackupServicePolicies.call(this);
		case 'getBackupPolicy':
			return await resources.backupPolicy.executeGetBackupServicePolicy.call(this);
		case 'listManagementAgents':
			return await resources.managementAgent.executeListBackupServiceManagementAgents.call(this);
		case 'getManagementAgent':
			return await resources.managementAgent.executeGetBackupServiceManagementAgent.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "backupServices"`);
}
