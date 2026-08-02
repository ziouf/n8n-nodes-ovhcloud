import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import * as list from './resources/main/list.operation';
import * as availableOffersGet from './resources/main/availableOffersGet.operation';
import * as devicesPost from './resources/main/devicesPost.operation';
import * as hardwareGet from './resources/main/hardwareGet.operation';
import * as hardwareAvailableGet from './resources/main/hardwareAvailableGet.operation';
import * as hardwareDetailGet from './resources/main/hardwareDetailGet.operation';
import * as get from './resources/main/get.operation';
import * as deleteDelete from './resources/main/deleteDelete.operation';
import * as updatePut from './resources/main/updatePut.operation';
import * as autoMTUPut from './resources/main/autoMTUPut.operation';
import * as availableReleaseChannelsGet from './resources/main/availableReleaseChannelsGet.operation';
import * as backupsGet from './resources/main/backupsGet.operation';
import * as backupDelete from './resources/main/backupDelete.operation';
import * as backupGet from './resources/main/backupGet.operation';
import * as cancelResiliationPost from './resources/main/cancelResiliationPost.operation';
import * as changeContactPost from './resources/main/changeContactPost.operation';
import * as ipsGet from './resources/main/ipsGet.operation';
import * as ipGet from './resources/main/ipGet.operation';
import * as ipv6Put from './resources/main/ipv6Put.operation';
import * as linkDevicePost from './resources/main/linkDevicePost.operation';
import * as linkHardwarePost from './resources/main/linkHardwarePost.operation';
import * as migrationOffersGet from './resources/main/migrationOffersGet.operation';
import * as migrationChangeOffersPost from './resources/main/migrationChangeOffersPost.operation';
import * as serviceInfosGet from './resources/main/serviceInfosGet.operation';
import * as statisticsGet from './resources/main/statisticsGet.operation';
import * as tasksGet from './resources/main/tasksGet.operation';
import * as taskGet from './resources/main/taskGet.operation';
import * as serviceInfosUpdatePut from './resources/main/serviceInfosUpdatePut.operation';
import * as deviceGet from './resources/device/deviceGet.operation';
import * as deviceDelete from './resources/device/deviceDelete.operation';
import * as deviceActionsGet from './resources/device/deviceActionsGet.operation';
import * as deviceActionsPost from './resources/device/deviceActionsPost.operation';
import * as deviceActionGet from './resources/device/deviceActionGet.operation';
import * as deviceAvailableActionsGet from './resources/device/deviceAvailableActionsGet.operation';
import * as deviceBackupPost from './resources/device/deviceBackupPost.operation';
import * as deviceHardwareGet from './resources/device/deviceHardwareGet.operation';
import * as deviceLogsPost from './resources/device/deviceLogsPost.operation';
import * as deviceRestoreBackupPost from './resources/device/deviceRestoreBackupPost.operation';
import * as logKindGet from './resources/log/logKindGet.operation';
import * as logKindNameGet from './resources/log/logKindNameGet.operation';
import * as logSubscriptionGet from './resources/log/logSubscriptionGet.operation';
import * as logSubscriptionPost from './resources/log/logSubscriptionPost.operation';
import * as logSubscriptionDelete from './resources/log/logSubscriptionDelete.operation';
import * as logSubscriptionDetailGet from './resources/log/logSubscriptionDetailGet.operation';
import * as logUrlPost from './resources/log/logUrlPost.operation';
import * as remoteAccessesGet from './resources/remoteAccesses/remoteAccessesGet.operation';
import * as remoteAccessesPost from './resources/remoteAccesses/remoteAccessesPost.operation';
import * as remoteAccessDelete from './resources/remoteAccesses/remoteAccessDelete.operation';
import * as remoteAccessGet from './resources/remoteAccesses/remoteAccessGet.operation';
import * as remoteAccessAuthorizePost from './resources/remoteAccesses/remoteAccessAuthorizePost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'overTheBoxOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Authorize Remote Access',
				value: 'remoteAccessAuthorizePost',
				action: 'Authorize the remote access',
			},
			{
				name: 'Cancel Resiliation',
				value: 'cancelResiliationPost',
				action: 'Cancel the resiliation of the service',
			},
			{
				name: 'Change Contact',
				value: 'changeContactPost',
				action: 'Change the contacts of this service',
			},
			{
				name: 'Create Backup',
				value: 'deviceBackupPost',
				action: 'Create a backup',
			},
			{
				name: 'Create Device Action',
				value: 'deviceActionsPost',
				action: 'Create a device action on the device',
			},
			{
				name: 'Create Log Subscription',
				value: 'logSubscriptionPost',
				action: 'Create a subscription from logs to a pre-existing LDP stream',
			},
			{
				name: 'Create Log URL',
				value: 'logUrlPost',
				action: 'Generate a temporary URL to retrieve logs',
			},
			{
				name: 'Create Remote Access',
				value: 'remoteAccessesPost',
				action: 'Create a new remote access for the service',
			},
			{
				name: 'Delete Backup',
				value: 'backupDelete',
				action: 'Delete a backup',
			},
			{
				name: 'Delete Log Subscription',
				value: 'logSubscriptionDelete',
				action: 'Delete a subscription',
			},
			{
				name: 'Delete OverTheBox Service',
				value: 'deleteDelete',
				action: 'Resiliate an OverTheBox service',
			},
			{
				name: 'Delete Remote Access',
				value: 'remoteAccessDelete',
				action: 'Delete a remote access',
			},
			{
				name: 'Get Backup',
				value: 'backupGet',
				action: 'Get the properties of a backup',
			},
			{
				name: 'Get Device',
				value: 'deviceGet',
				action: 'Get the device properties',
			},
			{
				name: 'Get Device Action',
				value: 'deviceActionGet',
				action: 'Get the properties of a device action',
			},
			{
				name: 'Get Device Hardware',
				value: 'deviceHardwareGet',
				action: 'Get the hardware properties of the device',
			},
			{
				name: 'Get Device Logs',
				value: 'deviceLogsPost',
				action: 'Generate a temporary URL to retrieve device logs',
			},
			{
				name: 'Get Hardware Details',
				value: 'hardwareDetailGet',
				action: 'Get hardware properties',
			},
			{
				name: 'Get IP Details',
				value: 'ipGet',
				action: 'Get details IP assigned to an OverTheBox service',
			},
			{
				name: 'Get Log Kind',
				value: 'logKindNameGet',
				action: 'Access to a specific available log kind',
			},
			{
				name: 'Get Log Subscription',
				value: 'logSubscriptionDetailGet',
				action: 'Get subscription details',
			},
			{
				name: 'Get OverTheBox Service',
				value: 'get',
				action: 'Get this object properties',
			},
			{
				name: 'Get Remote Access',
				value: 'remoteAccessGet',
				action: 'Get the properties of a remote access',
			},
			{
				name: 'Get Service Information',
				value: 'serviceInfosGet',
				action: 'Get service information',
			},
			{
				name: 'Get Statistics',
				value: 'statisticsGet',
				action: 'Get statistics for an OTB device',
			},
			{
				name: 'Get Task',
				value: 'taskGet',
				action: 'Get the properties of a specific task',
			},
			{
				name: 'Link Device',
				value: 'linkDevicePost',
				action: 'Link a device to this service',
			},
			{
				name: 'Link Hardware',
				value: 'linkHardwarePost',
				action: 'Link an available hardware to this service',
			},
			{
				name: 'List Available Device Actions',
				value: 'deviceAvailableActionsGet',
				action: 'List the available device actions',
			},
			{
				name: 'List Available Hardware',
				value: 'hardwareAvailableGet',
				action: 'List hardware that can be linked to a service',
			},
			{
				name: 'List Available Offers',
				value: 'availableOffersGet',
				action: 'List the available offers for the new call',
			},
			{
				name: 'List Available Release Channels',
				value: 'availableReleaseChannelsGet',
				action: 'List available release channels for this service',
			},
			{
				name: 'List Backups',
				value: 'backupsGet',
				action: 'List the backups of an OverTheBox service',
			},
			{
				name: 'List Device Actions',
				value: 'deviceActionsGet',
				action: 'List of actions scheduled for this device',
			},
			{
				name: 'List Devices',
				value: 'devicesPost',
				action: 'Get the list of devices connected from the same IP address',
			},
			{
				name: 'List Hardware',
				value: 'hardwareGet',
				action: 'List available OverTheBox hardware',
			},
			{
				name: 'List IPs',
				value: 'ipsGet',
				action: 'List IP assigned to an OverTheBox service',
			},
			{
				name: 'List Log Kinds',
				value: 'logKindGet',
				action: 'Access to available log kind',
			},
			{
				name: 'List Log Subscriptions',
				value: 'logSubscriptionGet',
				action: 'List subscription IDs for a cluster',
			},
			{
				name: 'List Migration Offers',
				value: 'migrationOffersGet',
				action: 'List all available offers one can migrate to',
			},
			{
				name: 'List OverTheBox Services',
				value: 'list',
				action: 'List available OverTheBox services',
			},
			{
				name: 'List Remote Accesses',
				value: 'remoteAccessesGet',
				action: 'List of remote accesses for the service',
			},
			{
				name: 'List Tasks',
				value: 'tasksGet',
				action: 'List of tasks scheduled for this service',
			},
			{
				name: 'Migrate Offers',
				value: 'migrationChangeOffersPost',
				action: 'Migrate to the selected OverTheBox offer',
			},
			{
				name: 'Restore Backup',
				value: 'deviceRestoreBackupPost',
				action: 'Create a group of actions to restore a given backup',
			},
			{
				name: 'Unlink Device',
				value: 'deviceDelete',
				action: 'Unlink a device from a service',
			},
			{
				name: 'Update Auto MTU',
				value: 'autoMTUPut',
				action: 'Change the value of autoMTU',
			},
			{
				name: 'Update IPv6',
				value: 'ipv6Put',
				action: 'Change the status of IPv6 on this service',
			},
			{
				name: 'Update OverTheBox Service',
				value: 'updatePut',
				action: 'Alter the properties of an OverTheBox service',
			},
			{
				name: 'Update Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update service information',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('overTheBoxOperation', 0) as string;

	switch (operation) {
		case 'remoteAccessAuthorizePost':
			return remoteAccessAuthorizePost.execute.call(this);
		case 'cancelResiliationPost':
			return cancelResiliationPost.execute.call(this);
		case 'changeContactPost':
			return changeContactPost.execute.call(this);
		case 'deviceBackupPost':
			return deviceBackupPost.execute.call(this);
		case 'deviceActionsPost':
			return deviceActionsPost.execute.call(this);
		case 'logSubscriptionPost':
			return logSubscriptionPost.execute.call(this);
		case 'logUrlPost':
			return logUrlPost.execute.call(this);
		case 'remoteAccessesPost':
			return remoteAccessesPost.execute.call(this);
		case 'backupDelete':
			return backupDelete.execute.call(this);
		case 'logSubscriptionDelete':
			return logSubscriptionDelete.execute.call(this);
		case 'deleteDelete':
			return deleteDelete.execute.call(this);
		case 'remoteAccessDelete':
			return remoteAccessDelete.execute.call(this);
		case 'backupGet':
			return backupGet.execute.call(this);
		case 'deviceGet':
			return deviceGet.execute.call(this);
		case 'deviceActionGet':
			return deviceActionGet.execute.call(this);
		case 'deviceHardwareGet':
			return deviceHardwareGet.execute.call(this);
		case 'deviceLogsPost':
			return deviceLogsPost.execute.call(this);
		case 'hardwareDetailGet':
			return hardwareDetailGet.execute.call(this);
		case 'ipGet':
			return ipGet.execute.call(this);
		case 'logKindNameGet':
			return logKindNameGet.execute.call(this);
		case 'logSubscriptionDetailGet':
			return logSubscriptionDetailGet.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'remoteAccessGet':
			return remoteAccessGet.execute.call(this);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this);
		case 'statisticsGet':
			return statisticsGet.execute.call(this);
		case 'taskGet':
			return taskGet.execute.call(this);
		case 'linkDevicePost':
			return linkDevicePost.execute.call(this);
		case 'linkHardwarePost':
			return linkHardwarePost.execute.call(this);
		case 'deviceAvailableActionsGet':
			return deviceAvailableActionsGet.execute.call(this);
		case 'hardwareAvailableGet':
			return hardwareAvailableGet.execute.call(this);
		case 'availableOffersGet':
			return availableOffersGet.execute.call(this);
		case 'availableReleaseChannelsGet':
			return availableReleaseChannelsGet.execute.call(this);
		case 'backupsGet':
			return backupsGet.execute.call(this);
		case 'deviceActionsGet':
			return deviceActionsGet.execute.call(this);
		case 'devicesPost':
			return devicesPost.execute.call(this);
		case 'hardwareGet':
			return hardwareGet.execute.call(this);
		case 'ipsGet':
			return ipsGet.execute.call(this);
		case 'logKindGet':
			return logKindGet.execute.call(this);
		case 'logSubscriptionGet':
			return logSubscriptionGet.execute.call(this);
		case 'migrationOffersGet':
			return migrationOffersGet.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'remoteAccessesGet':
			return remoteAccessesGet.execute.call(this);
		case 'tasksGet':
			return tasksGet.execute.call(this);
		case 'migrationChangeOffersPost':
			return migrationChangeOffersPost.execute.call(this);
		case 'deviceRestoreBackupPost':
			return deviceRestoreBackupPost.execute.call(this);
		case 'deviceDelete':
			return deviceDelete.execute.call(this);
		case 'autoMTUPut':
			return autoMTUPut.execute.call(this);
		case 'ipv6Put':
			return ipv6Put.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
