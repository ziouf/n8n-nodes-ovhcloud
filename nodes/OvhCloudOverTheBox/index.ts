import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as remoteAccessAuthorizePostExecute } from './resources/remoteAccesses/remoteAccessAuthorizePost.operation';
import { execute as cancelResiliationPostExecute } from './resources/main/cancelResiliationPost.operation';
import { execute as changeContactPostExecute } from './resources/main/changeContactPost.operation';
import { execute as deviceBackupPostExecute } from './resources/device/deviceBackupPost.operation';
import { execute as deviceActionsPostExecute } from './resources/device/deviceActionsPost.operation';
import { execute as logSubscriptionPostExecute } from './resources/log/logSubscriptionPost.operation';
import { execute as logUrlPostExecute } from './resources/log/logUrlPost.operation';
import { execute as remoteAccessesPostExecute } from './resources/remoteAccesses/remoteAccessesPost.operation';
import { execute as backupDeleteExecute } from './resources/main/backupDelete.operation';
import { execute as logSubscriptionDeleteExecute } from './resources/log/logSubscriptionDelete.operation';
import { execute as deleteDeleteExecute } from './resources/main/deleteDelete.operation';
import { execute as remoteAccessDeleteExecute } from './resources/remoteAccesses/remoteAccessDelete.operation';
import { execute as backupGetExecute } from './resources/main/backupGet.operation';
import { execute as deviceGetExecute } from './resources/device/deviceGet.operation';
import { execute as deviceActionGetExecute } from './resources/device/deviceActionGet.operation';
import { execute as deviceHardwareGetExecute } from './resources/device/deviceHardwareGet.operation';
import { execute as deviceLogsPostExecute } from './resources/device/deviceLogsPost.operation';
import { execute as hardwareDetailGetExecute } from './resources/main/hardwareDetailGet.operation';
import { execute as ipGetExecute } from './resources/main/ipGet.operation';
import { execute as logKindNameGetExecute } from './resources/log/logKindNameGet.operation';
import { execute as logSubscriptionDetailGetExecute } from './resources/log/logSubscriptionDetailGet.operation';
import { execute as getExecute } from './resources/main/get.operation';
import { execute as remoteAccessGetExecute } from './resources/remoteAccesses/remoteAccessGet.operation';
import { execute as serviceInfosGetExecute } from './resources/main/serviceInfosGet.operation';
import { execute as statisticsGetExecute } from './resources/main/statisticsGet.operation';
import { execute as taskGetExecute } from './resources/main/taskGet.operation';
import { execute as linkDevicePostExecute } from './resources/main/linkDevicePost.operation';
import { execute as linkHardwarePostExecute } from './resources/main/linkHardwarePost.operation';
import { execute as deviceAvailableActionsGetExecute } from './resources/device/deviceAvailableActionsGet.operation';
import { execute as hardwareAvailableGetExecute } from './resources/main/hardwareAvailableGet.operation';
import { execute as availableOffersGetExecute } from './resources/main/availableOffersGet.operation';
import { execute as availableReleaseChannelsGetExecute } from './resources/main/availableReleaseChannelsGet.operation';
import { execute as backupsGetExecute } from './resources/main/backupsGet.operation';
import { execute as deviceActionsGetExecute } from './resources/device/deviceActionsGet.operation';
import { execute as devicesPostExecute } from './resources/main/devicesPost.operation';
import { execute as hardwareGetExecute } from './resources/main/hardwareGet.operation';
import { execute as ipsGetExecute } from './resources/main/ipsGet.operation';
import { execute as logKindGetExecute } from './resources/log/logKindGet.operation';
import { execute as logSubscriptionGetExecute } from './resources/log/logSubscriptionGet.operation';
import { execute as migrationOffersGetExecute } from './resources/main/migrationOffersGet.operation';
import { execute as listExecute } from './resources/main/list.operation';
import { execute as remoteAccessesGetExecute } from './resources/remoteAccesses/remoteAccessesGet.operation';
import { execute as tasksGetExecute } from './resources/main/tasksGet.operation';
import { execute as migrationChangeOffersPostExecute } from './resources/main/migrationChangeOffersPost.operation';
import { execute as deviceRestoreBackupPostExecute } from './resources/device/deviceRestoreBackupPost.operation';
import { execute as deviceDeleteExecute } from './resources/device/deviceDelete.operation';
import { execute as autoMTUPutExecute } from './resources/main/autoMTUPut.operation';
import { execute as ipv6PutExecute } from './resources/main/ipv6Put.operation';
import { execute as updatePutExecute } from './resources/main/updatePut.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/main/serviceInfosUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'overTheBoxOperation',
	'overthebox',
	[
	{
		name: 'Authorize Remote Access',
		value: 'remoteAccessAuthorizePost',
		action: 'Authorize the remote access',
		execute: remoteAccessAuthorizePostExecute,
		description: noProps,
	},
	{
		name: 'Cancel Resiliation',
		value: 'cancelResiliationPost',
		action: 'Cancel the resiliation of the service',
		execute: cancelResiliationPostExecute,
		description: noProps,
	},
	{
		name: 'Change Contact',
		value: 'changeContactPost',
		action: 'Change the contacts of this service',
		execute: changeContactPostExecute,
		description: noProps,
	},
	{
		name: 'Create Backup',
		value: 'deviceBackupPost',
		action: 'Create a backup',
		execute: deviceBackupPostExecute,
		description: noProps,
	},
	{
		name: 'Create Device Action',
		value: 'deviceActionsPost',
		action: 'Create a device action on the device',
		execute: deviceActionsPostExecute,
		description: noProps,
	},
	{
		name: 'Create Log Subscription',
		value: 'logSubscriptionPost',
		action: 'Create a subscription from logs to a pre-existing LDP stream',
		execute: logSubscriptionPostExecute,
		description: noProps,
	},
	{
		name: 'Create Log URL',
		value: 'logUrlPost',
		action: 'Generate a temporary URL to retrieve logs',
		execute: logUrlPostExecute,
		description: noProps,
	},
	{
		name: 'Create Remote Access',
		value: 'remoteAccessesPost',
		action: 'Create a new remote access for the service',
		execute: remoteAccessesPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Backup',
		value: 'backupDelete',
		action: 'Delete a backup',
		execute: backupDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Log Subscription',
		value: 'logSubscriptionDelete',
		action: 'Delete a subscription',
		execute: logSubscriptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete OverTheBox Service',
		value: 'deleteDelete',
		action: 'Resiliate an OverTheBox service',
		execute: deleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Remote Access',
		value: 'remoteAccessDelete',
		action: 'Delete a remote access',
		execute: remoteAccessDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Backup',
		value: 'backupGet',
		action: 'Get the properties of a backup',
		execute: backupGetExecute,
		description: noProps,
	},
	{
		name: 'Get Device',
		value: 'deviceGet',
		action: 'Get the device properties',
		execute: deviceGetExecute,
		description: noProps,
	},
	{
		name: 'Get Device Action',
		value: 'deviceActionGet',
		action: 'Get the properties of a device action',
		execute: deviceActionGetExecute,
		description: noProps,
	},
	{
		name: 'Get Device Hardware',
		value: 'deviceHardwareGet',
		action: 'Get the hardware properties of the device',
		execute: deviceHardwareGetExecute,
		description: noProps,
	},
	{
		name: 'Get Device Logs',
		value: 'deviceLogsPost',
		action: 'Generate a temporary URL to retrieve device logs',
		execute: deviceLogsPostExecute,
		description: noProps,
	},
	{
		name: 'Get Hardware Details',
		value: 'hardwareDetailGet',
		action: 'Get hardware properties',
		execute: hardwareDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get IP Details',
		value: 'ipGet',
		action: 'Get details IP assigned to an OverTheBox service',
		execute: ipGetExecute,
		description: noProps,
	},
	{
		name: 'Get Log Kind',
		value: 'logKindNameGet',
		action: 'Access to a specific available log kind',
		execute: logKindNameGetExecute,
		description: noProps,
	},
	{
		name: 'Get Log Subscription',
		value: 'logSubscriptionDetailGet',
		action: 'Get subscription details',
		execute: logSubscriptionDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get OverTheBox Service',
		value: 'get',
		action: 'Get this object properties',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get Remote Access',
		value: 'remoteAccessGet',
		action: 'Get the properties of a remote access',
		execute: remoteAccessGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get Statistics',
		value: 'statisticsGet',
		action: 'Get statistics for an OTB device',
		execute: statisticsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Task',
		value: 'taskGet',
		action: 'Get the properties of a specific task',
		execute: taskGetExecute,
		description: noProps,
	},
	{
		name: 'Link Device',
		value: 'linkDevicePost',
		action: 'Link a device to this service',
		execute: linkDevicePostExecute,
		description: noProps,
	},
	{
		name: 'Link Hardware',
		value: 'linkHardwarePost',
		action: 'Link an available hardware to this service',
		execute: linkHardwarePostExecute,
		description: noProps,
	},
	{
		name: 'List Available Device Actions',
		value: 'deviceAvailableActionsGet',
		action: 'List the available device actions',
		execute: deviceAvailableActionsGetExecute,
		description: noProps,
	},
	{
		name: 'List Available Hardware',
		value: 'hardwareAvailableGet',
		action: 'List hardware that can be linked to a service',
		execute: hardwareAvailableGetExecute,
		description: noProps,
	},
	{
		name: 'List Available Offers',
		value: 'availableOffersGet',
		action: 'List the available offers for the new call',
		execute: availableOffersGetExecute,
		description: noProps,
	},
	{
		name: 'List Available Release Channels',
		value: 'availableReleaseChannelsGet',
		action: 'List available release channels for this service',
		execute: availableReleaseChannelsGetExecute,
		description: noProps,
	},
	{
		name: 'List Backups',
		value: 'backupsGet',
		action: 'List the backups of an OverTheBox service',
		execute: backupsGetExecute,
		description: noProps,
	},
	{
		name: 'List Device Actions',
		value: 'deviceActionsGet',
		action: 'List of actions scheduled for this device',
		execute: deviceActionsGetExecute,
		description: noProps,
	},
	{
		name: 'List Devices',
		value: 'devicesPost',
		action: 'Get the list of devices connected from the same IP address',
		execute: devicesPostExecute,
		description: noProps,
	},
	{
		name: 'List Hardware',
		value: 'hardwareGet',
		action: 'List available OverTheBox hardware',
		execute: hardwareGetExecute,
		description: noProps,
	},
	{
		name: 'List IPs',
		value: 'ipsGet',
		action: 'List IP assigned to an OverTheBox service',
		execute: ipsGetExecute,
		description: noProps,
	},
	{
		name: 'List Log Kinds',
		value: 'logKindGet',
		action: 'Access to available log kind',
		execute: logKindGetExecute,
		description: noProps,
	},
	{
		name: 'List Log Subscriptions',
		value: 'logSubscriptionGet',
		action: 'List subscription IDs for a cluster',
		execute: logSubscriptionGetExecute,
		description: noProps,
	},
	{
		name: 'List Migration Offers',
		value: 'migrationOffersGet',
		action: 'List all available offers one can migrate to',
		execute: migrationOffersGetExecute,
		description: noProps,
	},
	{
		name: 'List OverTheBox Services',
		value: 'list',
		action: 'List available OverTheBox services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'List Remote Accesses',
		value: 'remoteAccessesGet',
		action: 'List of remote accesses for the service',
		execute: remoteAccessesGetExecute,
		description: noProps,
	},
	{
		name: 'List Tasks',
		value: 'tasksGet',
		action: 'List of tasks scheduled for this service',
		execute: tasksGetExecute,
		description: noProps,
	},
	{
		name: 'Migrate Offers',
		value: 'migrationChangeOffersPost',
		action: 'Migrate to the selected OverTheBox offer',
		execute: migrationChangeOffersPostExecute,
		description: noProps,
	},
	{
		name: 'Restore Backup',
		value: 'deviceRestoreBackupPost',
		action: 'Create a group of actions to restore a given backup',
		execute: deviceRestoreBackupPostExecute,
		description: noProps,
	},
	{
		name: 'Unlink Device',
		value: 'deviceDelete',
		action: 'Unlink a device from a service',
		execute: deviceDeleteExecute,
		description: noProps,
	},
	{
		name: 'Update Auto MTU',
		value: 'autoMTUPut',
		action: 'Change the value of autoMTU',
		execute: autoMTUPutExecute,
		description: noProps,
	},
	{
		name: 'Update IPv6',
		value: 'ipv6Put',
		action: 'Change the status of IPv6 on this service',
		execute: ipv6PutExecute,
		description: noProps,
	},
	{
		name: 'Update OverTheBox Service',
		value: 'updatePut',
		action: 'Alter the properties of an OverTheBox service',
		execute: updatePutExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update service information',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
