/**
 * @brief OverTheBox resource operations for n8n node
 *
 * Provides operations for managing OVHcloud OverTheBox services including:
 * - List all OverTheBox services for the authenticated account
 * - Get detailed information about a specific OverTheBox service
 * - Manage devices, hardware, backups, IPs, tasks, logs, remote accesses, and more
 *
 * Available operations:
 * - `list`: ListOverTheBox - List all OverTheBox services
 * - `get`: GetOverTheBox - Get details of an OverTheBox service
 * - `update`: UpdateOverTheBox - Update an OverTheBox service
 * - `delete`: DeleteOverTheBox - Resiliate an OverTheBox service
 * - `getAvailableOffers`: GetAvailableOffers - List available offers
 * - `listDevices`: ListDevices - List devices connected from same IP
 * - `listHardware`: ListHardware - List hardware services
 * - `getServiceInfos`: GetServiceInfos - Get service information
 * - `updateServiceInfos`: UpdateServiceInfos - Update service information
 * - `changeContact`: ChangeContact - Change contact
 * - `cancelResiliation`: CancelResiliation - Cancel resiliation
 * - `updateAutoMTU`: UpdateAutoMTU - Change auto MTU value
 * - `updateIPv6`: UpdateIPv6 - Change IPv6 status
 * - `listBackups`: ListBackups - List backups
 * - `getBackup`: GetBackup - Get backup details
 * - `deleteBackup`: DeleteBackup - Delete a backup
 * - `listDeviceActions`: ListDeviceActions - List device actions
 * - `createDeviceAction`: CreateDeviceAction - Create a device action
 * - `getDeviceAction`: GetDeviceAction - Get device action details
 * - `listIPs`: ListIPs - List IPs assigned to service
 * - `getIP`: GetIP - Get IP details
 * - `listTasks`: ListTasks - List tasks
 * - `getTask`: GetTask - Get task details
 * - `linkDevice`: LinkDevice - Link a device
 * - `linkHardware`: LinkHardware - Link hardware
 * - `listLogSubscriptions`: ListLogSubscriptions - List log subscriptions
 * - `createLogSubscription`: CreateLogSubscription - Create log subscription
 * - `getLogSubscription`: GetLogSubscription - Get log subscription details
 * - `deleteLogSubscription`: DeleteLogSubscription - Delete log subscription
 * - `generateLogUrl`: GenerateLogUrl - Generate temporary log URL
 * - `listLogKinds`: ListLogKinds - List available log kinds
 * - `getLogKind`: GetLogKind - Get log kind details
 * - `listMigrationOffers`: ListMigrationOffers - List migration offers
 * - `changeMigrationOffer`: ChangeMigrationOffer - Migrate to selected offer
 * - `listRemoteAccesses`: ListRemoteAccesses - List remote accesses
 * - `createRemoteAccess`: CreateRemoteAccess - Create remote access
 * - `getRemoteAccess`: GetRemoteAccess - Get remote access details
 * - `deleteRemoteAccess`: DeleteRemoteAccess - Delete remote access
 * - `authorizeRemoteAccess`: AuthorizeRemoteAccess - Authorize remote access
 * - `getStatistics`: GetStatistics - Get statistics
 *
 * @remarks
 * OverTheBox services are managed under `/overTheBox` route.
 * Service name can be entered manually.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './resources/list.operation';
import { execute as executeGet, description as descriptionGet } from './resources/get.operation';
import {
	execute as executeUpdate,
	description as descriptionUpdate,
} from './resources/update.operation';
import {
	execute as executeDelete,
	description as descriptionDelete,
} from './resources/delete.operation';
import {
	executeGetAvailableOffers,
	descriptionGetAvailableOffers,
} from './resources/availableOffers';
import { executeListDevices, descriptionListDevices } from './resources/devices';
import { executeListHardware, descriptionListHardware } from './resources/hardware';
import { executeGetServiceInfos, descriptionGetServiceInfos, executeUpdateServiceInfos, descriptionUpdateServiceInfos  } from './resources/serviceInfos';
import { executeChangeContact, descriptionChangeContact } from './resources/changeContact';
import {
	executeCancelResiliation,
	descriptionCancelResiliation,
} from './resources/cancelResiliation';
import { executeUpdateAutoMTU, descriptionUpdateAutoMTU } from './resources/autoMTU';
import { executeUpdateIPv6, descriptionUpdateIPv6 } from './resources/ipv6';
import { executeListBackups, descriptionListBackups, executeGetBackup, descriptionGetBackup , executeDeleteBackup, descriptionDeleteBackup  } from './resources/backups';
import { executeListDeviceActions, descriptionListDeviceActions,
	executeCreateDeviceAction,
	descriptionCreateDeviceAction, executeGetDeviceAction, descriptionGetDeviceAction  } from './resources/deviceActions';
import { executeListIPs, descriptionListIPs, executeGetIP, descriptionGetIP  } from './resources/ips';
import { executeListTasks, descriptionListTasks, executeGetTask, descriptionGetTask  } from './resources/tasks';
import { executeLinkDevice, descriptionLinkDevice } from './resources/linkDevice';
import { executeLinkHardware, descriptionLinkHardware } from './resources/linkHardware';
import {
	executeListLogSubscriptions,
	descriptionListLogSubscriptions,
	executeCreateLogSubscription,
	descriptionCreateLogSubscription,
	executeGetLogSubscription,
	descriptionGetLogSubscription,
	executeDeleteLogSubscription,
	descriptionDeleteLogSubscription
} from './resources/logSubscription';
import { executeGenerateLogUrl, descriptionGenerateLogUrl } from './resources/logUrl';
import { executeListLogKinds, descriptionListLogKinds, executeGetLogKind, descriptionGetLogKind  } from './resources/logKind';
import { executeListMigrationOffers, descriptionListMigrationOffers,
	executeChangeMigrationOffer,
	descriptionChangeMigrationOffer } from './resources/migration';
import {
	executeListRemoteAccesses,
	descriptionListRemoteAccesses,
	executeCreateRemoteAccess,
	descriptionCreateRemoteAccess, executeGetRemoteAccess, descriptionGetRemoteAccess ,
	executeDeleteRemoteAccess,
	descriptionDeleteRemoteAccess,
	executeAuthorizeRemoteAccess,
	descriptionAuthorizeRemoteAccess
} from './resources/remoteAccesses';
import { executeGetStatistics, descriptionGetStatistics } from './resources/statistics';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'OverTheBox Operation',
			name: 'overTheBoxOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Authorize Remote Access',
					value: 'authorizeRemoteAccess',
					action: 'Authorize remote access',
				},
				{ name: 'Cancel Resiliation', value: 'cancelResiliation', action: 'Cancel resiliation' },
				{ name: 'Change Contact', value: 'changeContact', action: 'Change contact' },
				{
					name: 'Change Migration Offer',
					value: 'changeMigrationOffer',
					action: 'Migrate to selected offer',
				},
				{
					name: 'Create Device Action',
					value: 'createDeviceAction',
					action: 'Create a device action',
				},
				{
					name: 'Create Log Subscription',
					value: 'createLogSubscription',
					action: 'Create log subscription',
				},
				{
					name: 'Create Remote Access',
					value: 'createRemoteAccess',
					action: 'Create remote access',
				},
				{ name: 'Delete', value: 'delete', action: 'Resiliate an OverTheBox service' },
				{ name: 'Delete Backup', value: 'deleteBackup', action: 'Delete a backup' },
				{
					name: 'Delete Log Subscription',
					value: 'deleteLogSubscription',
					action: 'Delete log subscription',
				},
				{
					name: 'Delete Remote Access',
					value: 'deleteRemoteAccess',
					action: 'Delete remote access',
				},
				{ name: 'Generate Log URL', value: 'generateLogUrl', action: 'Generate temporary log URL' },
				{ name: 'Get', value: 'get', action: 'Get details of an OverTheBox service' },
				{
					name: 'Get Available Offers',
					value: 'getAvailableOffers',
					action: 'List available offers',
				},
				{ name: 'Get Backup', value: 'getBackup', action: 'Get backup details' },
				{
					name: 'Get Device Action',
					value: 'getDeviceAction',
					action: 'Get device action details',
				},
				{ name: 'Get IP', value: 'getIP', action: 'Get IP details' },
				{ name: 'Get Log Kind', value: 'getLogKind', action: 'Get log kind details' },
				{
					name: 'Get Log Subscription',
					value: 'getLogSubscription',
					action: 'Get log subscription details',
				},
				{
					name: 'Get Remote Access',
					value: 'getRemoteAccess',
					action: 'Get remote access details',
				},
				{ name: 'Get Service Infos', value: 'getServiceInfos', action: 'Get service information' },
				{ name: 'Get Statistics', value: 'getStatistics', action: 'Get statistics' },
				{ name: 'Get Task', value: 'getTask', action: 'Get task details' },
				{ name: 'Link Device', value: 'linkDevice', action: 'Link a device' },
				{ name: 'Link Hardware', value: 'linkHardware', action: 'Link hardware' },
				{ name: 'List', value: 'list', action: 'List all OverTheBox services' },
				{ name: 'List Backups', value: 'listBackups', action: 'List backups' },
				{ name: 'List Device Actions', value: 'listDeviceActions', action: 'List device actions' },
				{
					name: 'List Devices',
					value: 'listDevices',
					action: 'List devices connected from same IP',
				},
				{ name: 'List Hardware', value: 'listHardware', action: 'List hardware services' },
				{ name: 'List IPs', value: 'listIPs', action: 'List IPs assigned to service' },
				{ name: 'List Log Kinds', value: 'listLogKinds', action: 'List available log kinds' },
				{
					name: 'List Log Subscriptions',
					value: 'listLogSubscriptions',
					action: 'List log subscriptions',
				},
				{
					name: 'List Migration Offers',
					value: 'listMigrationOffers',
					action: 'List migration offers',
				},
				{
					name: 'List Remote Accesses',
					value: 'listRemoteAccesses',
					action: 'List remote accesses',
				},
				{ name: 'List Tasks', value: 'listTasks', action: 'List tasks' },
				{ name: 'Update', value: 'update', action: 'Update an OverTheBox service' },
				{ name: 'Update Auto MTU', value: 'updateAutoMTU', action: 'Change auto MTU value' },
				{ name: 'Update IPv6', value: 'updateIPv6', action: 'Change IPv6 status' },
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information',
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
			show: { ...displayOptions?.show, overTheBoxOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['update'] },
		}),
		...descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['delete'] },
		}),
		...descriptionGetAvailableOffers({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getAvailableOffers'] },
		}),
		...descriptionListDevices({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listDevices'] },
		}),
		...descriptionListHardware({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listHardware'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['updateServiceInfos'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['changeContact'] },
		}),
		...descriptionCancelResiliation({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['cancelResiliation'] },
		}),
		...descriptionUpdateAutoMTU({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['updateAutoMTU'] },
		}),
		...descriptionUpdateIPv6({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['updateIPv6'] },
		}),
		...descriptionListBackups({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listBackups'] },
		}),
		...descriptionGetBackup({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getBackup'] },
		}),
		...descriptionDeleteBackup({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['deleteBackup'] },
		}),
		...descriptionListDeviceActions({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listDeviceActions'] },
		}),
		...descriptionCreateDeviceAction({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['createDeviceAction'] },
		}),
		...descriptionGetDeviceAction({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getDeviceAction'] },
		}),
		...descriptionListIPs({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listIPs'] },
		}),
		...descriptionGetIP({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getIP'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getTask'] },
		}),
		...descriptionLinkDevice({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['linkDevice'] },
		}),
		...descriptionLinkHardware({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['linkHardware'] },
		}),
		...descriptionListLogSubscriptions({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listLogSubscriptions'] },
		}),
		...descriptionCreateLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['createLogSubscription'] },
		}),
		...descriptionGetLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getLogSubscription'] },
		}),
		...descriptionDeleteLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['deleteLogSubscription'] },
		}),
		...descriptionGenerateLogUrl({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['generateLogUrl'] },
		}),
		...descriptionListLogKinds({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listLogKinds'] },
		}),
		...descriptionGetLogKind({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getLogKind'] },
		}),
		...descriptionListMigrationOffers({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listMigrationOffers'] },
		}),
		...descriptionChangeMigrationOffer({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['changeMigrationOffer'] },
		}),
		...descriptionListRemoteAccesses({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['listRemoteAccesses'] },
		}),
		...descriptionCreateRemoteAccess({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['createRemoteAccess'] },
		}),
		...descriptionGetRemoteAccess({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getRemoteAccess'] },
		}),
		...descriptionDeleteRemoteAccess({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['deleteRemoteAccess'] },
		}),
		...descriptionAuthorizeRemoteAccess({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['authorizeRemoteAccess'] },
		}),
		...descriptionGetStatistics({
			...displayOptions,
			show: { ...displayOptions?.show, overTheBoxOperation: ['getStatistics'] },
		}),
	];
}

/**
 * Executes the selected OverTheBox operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('overTheBoxOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'delete':
			return await executeDelete.call(this);
		case 'getAvailableOffers':
			return await executeGetAvailableOffers.call(this);
		case 'listDevices':
			return await executeListDevices.call(this);
		case 'listHardware':
			return await executeListHardware.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'changeContact':
			return await executeChangeContact.call(this);
		case 'cancelResiliation':
			return await executeCancelResiliation.call(this);
		case 'updateAutoMTU':
			return await executeUpdateAutoMTU.call(this);
		case 'updateIPv6':
			return await executeUpdateIPv6.call(this);
		case 'listBackups':
			return await executeListBackups.call(this);
		case 'getBackup':
			return await executeGetBackup.call(this);
		case 'deleteBackup':
			return await executeDeleteBackup.call(this);
		case 'listDeviceActions':
			return await executeListDeviceActions.call(this);
		case 'createDeviceAction':
			return await executeCreateDeviceAction.call(this);
		case 'getDeviceAction':
			return await executeGetDeviceAction.call(this);
		case 'listIPs':
			return await executeListIPs.call(this);
		case 'getIP':
			return await executeGetIP.call(this);
		case 'listTasks':
			return await executeListTasks.call(this);
		case 'getTask':
			return await executeGetTask.call(this);
		case 'linkDevice':
			return await executeLinkDevice.call(this);
		case 'linkHardware':
			return await executeLinkHardware.call(this);
		case 'listLogSubscriptions':
			return await executeListLogSubscriptions.call(this);
		case 'createLogSubscription':
			return await executeCreateLogSubscription.call(this);
		case 'getLogSubscription':
			return await executeGetLogSubscription.call(this);
		case 'deleteLogSubscription':
			return await executeDeleteLogSubscription.call(this);
		case 'generateLogUrl':
			return await executeGenerateLogUrl.call(this);
		case 'listLogKinds':
			return await executeListLogKinds.call(this);
		case 'getLogKind':
			return await executeGetLogKind.call(this);
		case 'listMigrationOffers':
			return await executeListMigrationOffers.call(this);
		case 'changeMigrationOffer':
			return await executeChangeMigrationOffer.call(this);
		case 'listRemoteAccesses':
			return await executeListRemoteAccesses.call(this);
		case 'createRemoteAccess':
			return await executeCreateRemoteAccess.call(this);
		case 'getRemoteAccess':
			return await executeGetRemoteAccess.call(this);
		case 'deleteRemoteAccess':
			return await executeDeleteRemoteAccess.call(this);
		case 'authorizeRemoteAccess':
			return await executeAuthorizeRemoteAccess.call(this);
		case 'getStatistics':
			return await executeGetStatistics.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "overTheBox"`);
}
