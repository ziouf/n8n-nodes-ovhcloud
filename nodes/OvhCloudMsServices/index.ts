/**
 * @brief MS Services resource operations for n8n node
 *
 * Provides operations for managing OVHcloud Microsoft services including:
 * - List all MS services for the authenticated account
 * - Get detailed information about a specific MS service
 * - Update MS service configuration
 * - Manage Exchange, SharePoint, and Sync configurations
 * - Manage tasks, UPN suffixes, accounts, and service information
 * - Change contacts, manage MFA, and more
 *
 * Available operations:
 * - `list`: ListMsServices - List all MS services
 * - `get`: GetMsService - Get details of a specific MS service
 * - `update`: UpdateMsService - Update an MS service
 * - `changeContact`: ChangeContact - Change service contact
 * - `taskList`: ListTasks - List all tasks
 * - `taskGet`: GetTask - Get task details
 * - `exchangeGet`: GetExchange - Get Exchange configuration
 * - `exchangeUpdate`: UpdateExchange - Update Exchange configuration
 * - `exchangeBillingMigrated`: GetExchangeBillingMigrated - Get Exchange billing status
 * - `exchangeTaskList`: ListExchangeTasks - List Exchange tasks
 * - `exchangeTaskGet`: GetExchangeTask - Get Exchange task details
 * - `sharepointGet`: GetSharepoint - Get SharePoint configuration
 * - `sharepointUpdate`: UpdateSharepoint - Update SharePoint configuration
 * - `sharepointBillingMigrated`: GetSharepointBillingMigrated - Get SharePoint billing status
 * - `sharepointLicense`: GetSharepointLicense - Get SharePoint license
 * - `sharepointTaskList`: ListSharepointTasks - List SharePoint tasks
 * - `sharepointTaskGet`: GetSharepointTask - Get SharePoint task details
 * - `sharepointRestoreAdminRights`: RestoreSharepointAdminRights - Restore admin rights
 * - `syncGet`: GetSync - Get Sync configuration
 * - `syncDelete`: DeleteSync - Delete Sync configuration
 * - `syncLicense`: GetSyncLicense - Get Sync license
 * - `syncClientSoftwareURL`: GetSyncClientSoftwareURL - Get Sync client software URL
 * - `syncChangePassword`: ChangeSyncPassword - Change Sync password
 * - `upnSuffixList`: ListUpnSuffixes - List UPN suffixes
 * - `upnSuffixGet`: GetUpnSuffix - Get UPN suffix details
 * - `upnSuffixDelete`: DeleteUpnSuffix - Delete a UPN suffix
 * - `serviceInfosGet`: GetServiceInfos - Get service information
 * - `serviceInfosUpdate`: UpdateServiceInfos - Update service information
 * - `sharepointDomainGet`: GetSharepointDomain - Get SharePoint domain info
 * - `sharepointDomainServiceInfosGet`: GetSharepointDomainServiceInfos - Get SharePoint domain service info
 * - `createMfaOnAllUsers`: CreateMfaOnAllUsers - Create MFA on all users
 * - `removeMfaOnAllUsers`: RemoveMfaOnAllUsers - Remove MFA on all users
 * - `accountList`: ListAccounts - List accounts
 * - `accountGet`: GetAccount - Get account details
 * - `accountUpdate`: UpdateAccount - Update account
 * - `accountChangePassword`: ChangeAccountPassword - Change account password
 * - `accountMfaGet`: GetAccountMfa - Get account MFA status
 * - `accountMfaDisable`: DisableAccountMfa - Disable account MFA
 * - `accountMfaEnable`: EnableAccountMfa - Enable account MFA
 * - `accountMfaReset`: ResetAccountMfa - Reset account MFA
 * - `accountExchangeGet`: GetAccountExchange - Get account Exchange config
 * - `accountExchangeConfigure`: ConfigureAccountExchange - Configure account Exchange
 * - `accountSharepointGet`: GetAccountSharepoint - Get account SharePoint config
 * - `accountSharepointClearSpace`: ClearAccountSharepointSpace - Clear account SharePoint space
 * - `accountSharepointConfigure`: ConfigureAccountSharepoint - Configure account SharePoint
 * - `accountSyncGet`: GetAccountSync - Get account Sync config
 * - `accountSyncConfigure`: ConfigureAccountSync - Configure account Sync
 *
 * @remarks
 * MS services are managed under `/msServices` route.
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
	execute as executeListTasks,
	description as descriptionListTasks,
} from './resources/tasks/list.operation';
import {
	execute as executeGetTask,
	description as descriptionGetTask,
} from './resources/tasks/get.operation';
import {
	execute as executeGetExchange,
	description as descriptionGetExchange,
} from './resources/exchange/get.operation';
import {
	execute as executeUpdateExchange,
	description as descriptionUpdateExchange,
} from './resources/exchange/update.operation';
import {
	execute as executeGetExchangeBillingMigrated,
	description as descriptionGetExchangeBillingMigrated,
} from './resources/exchange/billingMigrated.operation';
import {
	execute as executeListExchangeTasks,
	description as descriptionListExchangeTasks,
} from './resources/exchange/listTasks.operation';
import {
	execute as executeGetExchangeTask,
	description as descriptionGetExchangeTask,
} from './resources/exchange/getTask.operation';
import {
	execute as executeGetSharepoint,
	description as descriptionGetSharepoint,
} from './resources/sharepoint/get.operation';
import {
	execute as executeUpdateSharepoint,
	description as descriptionUpdateSharepoint,
} from './resources/sharepoint/update.operation';
import {
	execute as executeGetSharepointBillingMigrated,
	description as descriptionGetSharepointBillingMigrated,
} from './resources/sharepoint/billingMigrated.operation';
import {
	execute as executeGetSharepointLicense,
	description as descriptionGetSharepointLicense,
} from './resources/sharepoint/license.operation';
import {
	execute as executeListSharepointTasks,
	description as descriptionListSharepointTasks,
} from './resources/sharepoint/listTasks.operation';
import {
	execute as executeGetSharepointTask,
	description as descriptionGetSharepointTask,
} from './resources/sharepoint/getTask.operation';
import {
	execute as executeRestoreSharepointAdminRights,
	description as descriptionRestoreSharepointAdminRights,
} from './resources/sharepointRestoreAdminRights/restoreAdminRights.operation';
import {
	execute as executeGetSync,
	description as descriptionGetSync,
} from './resources/sync/get.operation';
import {
	execute as executeDeleteSync,
	description as descriptionDeleteSync,
} from './resources/sync/delete.operation';
import {
	execute as executeGetSyncLicense,
	description as descriptionGetSyncLicense,
} from './resources/sync/license.operation';
import {
	execute as executeGetSyncClientSoftwareURL,
	description as descriptionGetSyncClientSoftwareURL,
} from './resources/sync/clientSoftwareURL.operation';
import {
	execute as executeChangeSyncPassword,
	description as descriptionChangeSyncPassword,
} from './resources/syncChangePassword/changePassword.operation';
import {
	execute as executeListUpnSuffixes,
	description as descriptionListUpnSuffixes,
} from './resources/upnSuffix/list.operation';
import {
	execute as executeGetUpnSuffix,
	description as descriptionGetUpnSuffix,
} from './resources/upnSuffix/get.operation';
import {
	execute as executeDeleteUpnSuffix,
	description as descriptionDeleteUpnSuffix,
} from './resources/upnSuffix/delete.operation';
import {
	execute as executeGetServiceInfos,
	description as descriptionGetServiceInfos,
} from './resources/serviceInfos/get.operation';
import {
	execute as executeUpdateServiceInfos,
	description as descriptionUpdateServiceInfos,
} from './resources/serviceInfos/update.operation';
import {
	execute as executeGetSharepointDomain,
	description as descriptionGetSharepointDomain,
} from './resources/sharepointDomain/get.operation';
import {
	execute as executeGetSharepointDomainServiceInfos,
	description as descriptionGetSharepointDomainServiceInfos,
} from './resources/sharepointDomainServiceInfos/get.operation';
import {
	execute as executeCreateMfaOnAllUsers,
	description as descriptionCreateMfaOnAllUsers,
} from './resources/createMfaOnAllUsers/createMfaOnAllUsers.operation';
import {
	execute as executeRemoveMfaOnAllUsers,
	description as descriptionRemoveMfaOnAllUsers,
} from './resources/removeMfaOnAllUsers/removeMfaOnAllUsers.operation';
import {
	execute as executeListAccounts,
	description as descriptionListAccounts,
} from './resources/account/list.operation';
import {
	execute as executeGetAccount,
	description as descriptionGetAccount,
} from './resources/account/get.operation';
import {
	execute as executeUpdateAccount,
	description as descriptionUpdateAccount,
} from './resources/account/update.operation';
import {
	execute as executeChangeAccountPassword,
	description as descriptionChangeAccountPassword,
} from './resources/accountChangePassword/changePassword.operation';
import {
	execute as executeGetAccountMfa,
	description as descriptionGetAccountMfa,
} from './resources/accountMfa/get.operation';
import {
	execute as executeDisableAccountMfa,
	description as descriptionDisableAccountMfa,
} from './resources/accountMfaDisable/disable.operation';
import {
	execute as executeEnableAccountMfa,
	description as descriptionEnableAccountMfa,
} from './resources/accountMfaEnable/enable.operation';
import {
	execute as executeResetAccountMfa,
	description as descriptionResetAccountMfa,
} from './resources/accountMfaReset/reset.operation';
import {
	execute as executeGetAccountExchange,
	description as descriptionGetAccountExchange,
} from './resources/accountExchange/get.operation';
import {
	execute as executeConfigureAccountExchange,
	description as descriptionConfigureAccountExchange,
} from './resources/accountExchangeConfigure/configure.operation';
import {
	execute as executeGetAccountSharepoint,
	description as descriptionGetAccountSharepoint,
} from './resources/accountSharepoint/get.operation';
import {
	execute as executeClearAccountSharepointSpace,
	description as descriptionClearAccountSharepointSpace,
} from './resources/accountSharepointClearSpace/clearSpace.operation';
import {
	execute as executeConfigureAccountSharepoint,
	description as descriptionConfigureAccountSharepoint,
} from './resources/accountSharepointConfigure/configure.operation';
import {
	execute as executeGetAccountSync,
	description as descriptionGetAccountSync,
} from './resources/accountSync/get.operation';
import {
	execute as executeConfigureAccountSync,
	description as descriptionConfigureAccountSync,
} from './resources/accountSyncConfigure/configure.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'MS Services Operation',
			name: 'msServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all MS services' },
				{ name: 'Get', value: 'get', action: 'Get details of an MS service' },
				{ name: 'Update', value: 'update', action: 'Update an MS service' },
				{ name: 'Change Contact', value: 'changeContact', action: 'Change service contact' },
				{ name: 'List Tasks', value: 'taskList', action: 'List all tasks' },
				{ name: 'Get Task', value: 'taskGet', action: 'Get task details' },
				{ name: 'Get Exchange', value: 'exchangeGet', action: 'Get Exchange configuration' },
				{
					name: 'Update Exchange',
					value: 'exchangeUpdate',
					action: 'Update Exchange configuration',
				},
				{
					name: 'Get Exchange Billing Migrated',
					value: 'exchangeBillingMigrated',
					action: 'Get Exchange billing status',
				},
				{ name: 'List Exchange Tasks', value: 'exchangeTaskList', action: 'List Exchange tasks' },
				{
					name: 'Get Exchange Task',
					value: 'exchangeTaskGet',
					action: 'Get Exchange task details',
				},
				{ name: 'Get SharePoint', value: 'sharepointGet', action: 'Get SharePoint configuration' },
				{
					name: 'Update SharePoint',
					value: 'sharepointUpdate',
					action: 'Update SharePoint configuration',
				},
				{
					name: 'Get SharePoint Billing Migrated',
					value: 'sharepointBillingMigrated',
					action: 'Get SharePoint billing status',
				},
				{
					name: 'Get SharePoint License',
					value: 'sharepointLicense',
					action: 'Get SharePoint license',
				},
				{
					name: 'List SharePoint Tasks',
					value: 'sharepointTaskList',
					action: 'List SharePoint tasks',
				},
				{
					name: 'Get SharePoint Task',
					value: 'sharepointTaskGet',
					action: 'Get SharePoint task details',
				},
				{
					name: 'Restore SharePoint Admin Rights',
					value: 'sharepointRestoreAdminRights',
					action: 'Restore admin rights',
				},
				{ name: 'Get Sync', value: 'syncGet', action: 'Get Sync configuration' },
				{ name: 'Delete Sync', value: 'syncDelete', action: 'Delete Sync configuration' },
				{ name: 'Get Sync License', value: 'syncLicense', action: 'Get Sync license' },
				{
					name: 'Get Sync Client Software URL',
					value: 'syncClientSoftwareURL',
					action: 'Get Sync client software URL',
				},
				{
					name: 'Change Sync Password',
					value: 'syncChangePassword',
					action: 'Change Sync password',
				},
				{ name: 'List UPN Suffixes', value: 'upnSuffixList', action: 'List UPN suffixes' },
				{ name: 'Get UPN Suffix', value: 'upnSuffixGet', action: 'Get UPN suffix details' },
				{ name: 'Delete UPN Suffix', value: 'upnSuffixDelete', action: 'Delete a UPN suffix' },
				{ name: 'Get Service Infos', value: 'serviceInfosGet', action: 'Get service information' },
				{
					name: 'Update Service Infos',
					value: 'serviceInfosUpdate',
					action: 'Update service information',
				},
				{
					name: 'Get SharePoint Domain',
					value: 'sharepointDomainGet',
					action: 'Get SharePoint domain info',
				},
				{
					name: 'Get SharePoint Domain Service Infos',
					value: 'sharepointDomainServiceInfosGet',
					action: 'Get SharePoint domain service info',
				},
				{
					name: 'Create MFA On All Users',
					value: 'createMfaOnAllUsers',
					action: 'Create MFA on all users',
				},
				{
					name: 'Remove MFA On All Users',
					value: 'removeMfaOnAllUsers',
					action: 'Remove MFA on all users',
				},
				{ name: 'List Accounts', value: 'accountList', action: 'List accounts' },
				{ name: 'Get Account', value: 'accountGet', action: 'Get account details' },
				{ name: 'Update Account', value: 'accountUpdate', action: 'Update account' },
				{
					name: 'Change Account Password',
					value: 'accountChangePassword',
					action: 'Change account password',
				},
				{ name: 'Get Account MFA', value: 'accountMfaGet', action: 'Get account MFA status' },
				{ name: 'Disable Account MFA', value: 'accountMfaDisable', action: 'Disable account MFA' },
				{ name: 'Enable Account MFA', value: 'accountMfaEnable', action: 'Enable account MFA' },
				{ name: 'Reset Account MFA', value: 'accountMfaReset', action: 'Reset account MFA' },
				{
					name: 'Get Account Exchange',
					value: 'accountExchangeGet',
					action: 'Get account Exchange config',
				},
				{
					name: 'Configure Account Exchange',
					value: 'accountExchangeConfigure',
					action: 'Configure account Exchange',
				},
				{
					name: 'Get Account SharePoint',
					value: 'accountSharepointGet',
					action: 'Get account SharePoint config',
				},
				{
					name: 'Clear Account SharePoint Space',
					value: 'accountSharepointClearSpace',
					action: 'Clear account SharePoint space',
				},
				{
					name: 'Configure Account SharePoint',
					value: 'accountSharepointConfigure',
					action: 'Configure account SharePoint',
				},
				{ name: 'Get Account Sync', value: 'accountSyncGet', action: 'Get account Sync config' },
				{
					name: 'Configure Account Sync',
					value: 'accountSyncConfigure',
					action: 'Configure account Sync',
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
			show: { ...displayOptions?.show, msServicesOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['update'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['changeContact'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['taskList'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['taskGet'] },
		}),
		...descriptionGetExchange({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['exchangeGet'] },
		}),
		...descriptionUpdateExchange({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['exchangeUpdate'] },
		}),
		...descriptionGetExchangeBillingMigrated({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['exchangeBillingMigrated'] },
		}),
		...descriptionListExchangeTasks({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['exchangeTaskList'] },
		}),
		...descriptionGetExchangeTask({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['exchangeTaskGet'] },
		}),
		...descriptionGetSharepoint({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointGet'] },
		}),
		...descriptionUpdateSharepoint({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointUpdate'] },
		}),
		...descriptionGetSharepointBillingMigrated({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointBillingMigrated'] },
		}),
		...descriptionGetSharepointLicense({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointLicense'] },
		}),
		...descriptionListSharepointTasks({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointTaskList'] },
		}),
		...descriptionGetSharepointTask({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointTaskGet'] },
		}),
		...descriptionRestoreSharepointAdminRights({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointRestoreAdminRights'] },
		}),
		...descriptionGetSync({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['syncGet'] },
		}),
		...descriptionDeleteSync({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['syncDelete'] },
		}),
		...descriptionGetSyncLicense({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['syncLicense'] },
		}),
		...descriptionGetSyncClientSoftwareURL({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['syncClientSoftwareURL'] },
		}),
		...descriptionChangeSyncPassword({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['syncChangePassword'] },
		}),
		...descriptionListUpnSuffixes({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['upnSuffixList'] },
		}),
		...descriptionGetUpnSuffix({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['upnSuffixGet'] },
		}),
		...descriptionDeleteUpnSuffix({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['upnSuffixDelete'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['serviceInfosGet'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['serviceInfosUpdate'] },
		}),
		...descriptionGetSharepointDomain({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointDomainGet'] },
		}),
		...descriptionGetSharepointDomainServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['sharepointDomainServiceInfosGet'] },
		}),
		...descriptionCreateMfaOnAllUsers({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['createMfaOnAllUsers'] },
		}),
		...descriptionRemoveMfaOnAllUsers({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['removeMfaOnAllUsers'] },
		}),
		...descriptionListAccounts({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountList'] },
		}),
		...descriptionGetAccount({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountGet'] },
		}),
		...descriptionUpdateAccount({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountUpdate'] },
		}),
		...descriptionChangeAccountPassword({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountChangePassword'] },
		}),
		...descriptionGetAccountMfa({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountMfaGet'] },
		}),
		...descriptionDisableAccountMfa({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountMfaDisable'] },
		}),
		...descriptionEnableAccountMfa({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountMfaEnable'] },
		}),
		...descriptionResetAccountMfa({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountMfaReset'] },
		}),
		...descriptionGetAccountExchange({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountExchangeGet'] },
		}),
		...descriptionConfigureAccountExchange({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountExchangeConfigure'] },
		}),
		...descriptionGetAccountSharepoint({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountSharepointGet'] },
		}),
		...descriptionClearAccountSharepointSpace({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountSharepointClearSpace'] },
		}),
		...descriptionConfigureAccountSharepoint({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountSharepointConfigure'] },
		}),
		...descriptionGetAccountSync({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountSyncGet'] },
		}),
		...descriptionConfigureAccountSync({
			...displayOptions,
			show: { ...displayOptions?.show, msServicesOperation: ['accountSyncConfigure'] },
		}),
	];
}

/**
 * Executes the selected MS services operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('msServicesOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'changeContact':
			return await executeChangeContact.call(this);
		case 'taskList':
			return await executeListTasks.call(this);
		case 'taskGet':
			return await executeGetTask.call(this);
		case 'exchangeGet':
			return await executeGetExchange.call(this);
		case 'exchangeUpdate':
			return await executeUpdateExchange.call(this);
		case 'exchangeBillingMigrated':
			return await executeGetExchangeBillingMigrated.call(this);
		case 'exchangeTaskList':
			return await executeListExchangeTasks.call(this);
		case 'exchangeTaskGet':
			return await executeGetExchangeTask.call(this);
		case 'sharepointGet':
			return await executeGetSharepoint.call(this);
		case 'sharepointUpdate':
			return await executeUpdateSharepoint.call(this);
		case 'sharepointBillingMigrated':
			return await executeGetSharepointBillingMigrated.call(this);
		case 'sharepointLicense':
			return await executeGetSharepointLicense.call(this);
		case 'sharepointTaskList':
			return await executeListSharepointTasks.call(this);
		case 'sharepointTaskGet':
			return await executeGetSharepointTask.call(this);
		case 'sharepointRestoreAdminRights':
			return await executeRestoreSharepointAdminRights.call(this);
		case 'syncGet':
			return await executeGetSync.call(this);
		case 'syncDelete':
			return await executeDeleteSync.call(this);
		case 'syncLicense':
			return await executeGetSyncLicense.call(this);
		case 'syncClientSoftwareURL':
			return await executeGetSyncClientSoftwareURL.call(this);
		case 'syncChangePassword':
			return await executeChangeSyncPassword.call(this);
		case 'upnSuffixList':
			return await executeListUpnSuffixes.call(this);
		case 'upnSuffixGet':
			return await executeGetUpnSuffix.call(this);
		case 'upnSuffixDelete':
			return await executeDeleteUpnSuffix.call(this);
		case 'serviceInfosGet':
			return await executeGetServiceInfos.call(this);
		case 'serviceInfosUpdate':
			return await executeUpdateServiceInfos.call(this);
		case 'sharepointDomainGet':
			return await executeGetSharepointDomain.call(this);
		case 'sharepointDomainServiceInfosGet':
			return await executeGetSharepointDomainServiceInfos.call(this);
		case 'createMfaOnAllUsers':
			return await executeCreateMfaOnAllUsers.call(this);
		case 'removeMfaOnAllUsers':
			return await executeRemoveMfaOnAllUsers.call(this);
		case 'accountList':
			return await executeListAccounts.call(this);
		case 'accountGet':
			return await executeGetAccount.call(this);
		case 'accountUpdate':
			return await executeUpdateAccount.call(this);
		case 'accountChangePassword':
			return await executeChangeAccountPassword.call(this);
		case 'accountMfaGet':
			return await executeGetAccountMfa.call(this);
		case 'accountMfaDisable':
			return await executeDisableAccountMfa.call(this);
		case 'accountMfaEnable':
			return await executeEnableAccountMfa.call(this);
		case 'accountMfaReset':
			return await executeResetAccountMfa.call(this);
		case 'accountExchangeGet':
			return await executeGetAccountExchange.call(this);
		case 'accountExchangeConfigure':
			return await executeConfigureAccountExchange.call(this);
		case 'accountSharepointGet':
			return await executeGetAccountSharepoint.call(this);
		case 'accountSharepointClearSpace':
			return await executeClearAccountSharepointSpace.call(this);
		case 'accountSharepointConfigure':
			return await executeConfigureAccountSharepoint.call(this);
		case 'accountSyncGet':
			return await executeGetAccountSync.call(this);
		case 'accountSyncConfigure':
			return await executeConfigureAccountSync.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "msServices"`);
}
