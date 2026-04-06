/**
 * @brief Zimbra resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH Zimbra services including:
 * - List all Zimbra platforms
 * - Get detailed information about a specific Zimbra platform
 * - Manage accounts, aliases, domains, organizations, redirections, slots, tasks, and diagnostics
 *
 * Available operations:
 * - `list`: List all Zimbra platforms
 * - `get`: Get details of a specific Zimbra platform
 * - `listPlatforms`: List Zimbra platforms
 * - `getPlatform`: Get a specific platform
 * - `listPlatformAccounts`: List platform accounts
 * - `getPlatformAccount`: Get a specific account
 * - `listPlatformAliases`: List platform aliases
 * - `getPlatformAlias`: Get a specific alias
 * - `listPlatformDomains`: List platform domains
 * - `getPlatformDomain`: Get a specific domain
 * - `listPlatformOrganizations`: List platform organizations
 * - `getPlatformOrganization`: Get a specific organization
 * - `listPlatformRedirections`: List platform redirections
 * - `getPlatformRedirection`: Get a specific redirection
 * - `listPlatformSlots`: List platform slots
 * - `getPlatformSlot`: Get a specific slot
 * - `listPlatformTasks`: List platform tasks
 * - `listPlatformDiagnosticDomains`: List platform diagnostic domains
 *
 * @remarks
 * Zimbra services are managed under `/v2/zimbra` route.
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
			displayName: 'Zimbra Operation',
			name: 'zimbraOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Zimbra platforms',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Zimbra platform',
				},
				{
					name: 'List Platforms',
					value: 'listPlatforms',
					action: 'List Zimbra platforms',
				},
				{
					name: 'Get Platform',
					value: 'getPlatform',
					action: 'Get a specific platform',
				},
				{
					name: 'List Platform Accounts',
					value: 'listPlatformAccounts',
					action: 'List platform accounts',
				},
				{
					name: 'Get Platform Account',
					value: 'getPlatformAccount',
					action: 'Get a specific account',
				},
				{
					name: 'List Platform Aliases',
					value: 'listPlatformAliases',
					action: 'List platform aliases',
				},
				{
					name: 'Get Platform Alias',
					value: 'getPlatformAlias',
					action: 'Get a specific alias',
				},
				{
					name: 'List Platform Domains',
					value: 'listPlatformDomains',
					action: 'List platform domains',
				},
				{
					name: 'Get Platform Domain',
					value: 'getPlatformDomain',
					action: 'Get a specific domain',
				},
				{
					name: 'List Platform Organizations',
					value: 'listPlatformOrganizations',
					action: 'List platform organizations',
				},
				{
					name: 'Get Platform Organization',
					value: 'getPlatformOrganization',
					action: 'Get a specific organization',
				},
				{
					name: 'List Platform Redirections',
					value: 'listPlatformRedirections',
					action: 'List platform redirections',
				},
				{
					name: 'Get Platform Redirection',
					value: 'getPlatformRedirection',
					action: 'Get a specific redirection',
				},
				{
					name: 'List Platform Slots',
					value: 'listPlatformSlots',
					action: 'List platform slots',
				},
				{
					name: 'Get Platform Slot',
					value: 'getPlatformSlot',
					action: 'Get a specific slot',
				},
				{
					name: 'List Platform Tasks',
					value: 'listPlatformTasks',
					action: 'List platform tasks',
				},
				{
					name: 'List Platform Diagnostic Domains',
					value: 'listPlatformDiagnosticDomains',
					action: 'List platform diagnostic domains',
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
			show: { ...displayOptions?.show, zimbraOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['get'] },
		}),
		...resources.platform.descriptionListZimbraPlatforms({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatforms'] },
		}),
		...resources.platform.descriptionGetZimbraPlatform({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['getPlatform'] },
		}),
		...resources.account.descriptionListZimbraPlatformAccounts({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformAccounts'] },
		}),
		...resources.account.descriptionGetZimbraPlatformAccount({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['getPlatformAccount'] },
		}),
		...resources.alias.descriptionListZimbraPlatformAliases({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformAliases'] },
		}),
		...resources.alias.descriptionGetZimbraPlatformAlias({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['getPlatformAlias'] },
		}),
		...resources.domain.descriptionListZimbraPlatformDomains({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformDomains'] },
		}),
		...resources.domain.descriptionGetZimbraPlatformDomain({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['getPlatformDomain'] },
		}),
		...resources.organization.descriptionListZimbraPlatformOrganizations({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformOrganizations'] },
		}),
		...resources.organization.descriptionGetZimbraPlatformOrganization({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['getPlatformOrganization'] },
		}),
		...resources.redirection.descriptionListZimbraPlatformRedirections({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformRedirections'] },
		}),
		...resources.redirection.descriptionGetZimbraPlatformRedirection({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['getPlatformRedirection'] },
		}),
		...resources.slot.descriptionListZimbraPlatformSlots({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformSlots'] },
		}),
		...resources.slot.descriptionGetZimbraPlatformSlot({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['getPlatformSlot'] },
		}),
		...resources.task.descriptionListZimbraPlatformTasks({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformTasks'] },
		}),
		...resources.diagnostic.descriptionListZimbraPlatformDiagnosticDomains({
			...displayOptions,
			show: { ...displayOptions?.show, zimbraOperation: ['listPlatformDiagnosticDomains'] },
		}),
	];
}

/**
 * Executes the selected Zimbra operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('zimbraOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listPlatforms':
			return await resources.platform.executeListZimbraPlatforms.call(this);
		case 'getPlatform':
			return await resources.platform.executeGetZimbraPlatform.call(this);
		case 'listPlatformAccounts':
			return await resources.account.executeListZimbraPlatformAccounts.call(this);
		case 'getPlatformAccount':
			return await resources.account.executeGetZimbraPlatformAccount.call(this);
		case 'listPlatformAliases':
			return await resources.alias.executeListZimbraPlatformAliases.call(this);
		case 'getPlatformAlias':
			return await resources.alias.executeGetZimbraPlatformAlias.call(this);
		case 'listPlatformDomains':
			return await resources.domain.executeListZimbraPlatformDomains.call(this);
		case 'getPlatformDomain':
			return await resources.domain.executeGetZimbraPlatformDomain.call(this);
		case 'listPlatformOrganizations':
			return await resources.organization.executeListZimbraPlatformOrganizations.call(this);
		case 'getPlatformOrganization':
			return await resources.organization.executeGetZimbraPlatformOrganization.call(this);
		case 'listPlatformRedirections':
			return await resources.redirection.executeListZimbraPlatformRedirections.call(this);
		case 'getPlatformRedirection':
			return await resources.redirection.executeGetZimbraPlatformRedirection.call(this);
		case 'listPlatformSlots':
			return await resources.slot.executeListZimbraPlatformSlots.call(this);
		case 'getPlatformSlot':
			return await resources.slot.executeGetZimbraPlatformSlot.call(this);
		case 'listPlatformTasks':
			return await resources.task.executeListZimbraPlatformTasks.call(this);
		case 'listPlatformDiagnosticDomains':
			return await resources.diagnostic.executeListZimbraPlatformDiagnosticDomains.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "zimbra"`);
}
