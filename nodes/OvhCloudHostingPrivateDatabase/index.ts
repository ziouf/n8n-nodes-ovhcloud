import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeAvailableOrderCapacitiesGet,
	description as descriptionAvailableOrderCapacitiesGet,
} from './service/availableOrderCapacitiesGet.operation';
import {
	execute as executeAvailableVersionsGet,
	description as descriptionAvailableVersionsGet,
} from './service/availableVersionsGet.operation';
import {
	execute as executeChangeContactPost,
	description as descriptionChangeContactPost,
} from './service/changeContactPost.operation';
import {
	execute as executeChangeFtpPasswordPost,
	description as descriptionChangeFtpPasswordPost,
} from './service/changeFtpPasswordPost.operation';
import {
	execute as executeChangeVersionPost,
	description as descriptionChangeVersionPost,
} from './service/changeVersionPost.operation';
import {
	execute as executeConfigGet,
	description as descriptionConfigGet,
} from './config/configGet.operation';
import {
	execute as executeConfigUpdatePost,
	description as descriptionConfigUpdatePost,
} from './config/configUpdatePost.operation';
import {
	execute as executeConfirmTerminationPost,
	description as descriptionConfirmTerminationPost,
} from './service/confirmTerminationPost.operation';
import {
	execute as executeCpuThrottleGet,
	description as descriptionCpuThrottleGet,
} from './service/cpuThrottleGet.operation';
import {
	execute as executeDatabase_Delete,
	description as descriptionDatabase_Delete,
} from './service/database_Delete.operation';
import {
	execute as executeDatabase_Get,
	description as descriptionDatabase_Get,
} from './service/database_Get.operation';
import {
	execute as executeDatabaseCopyCreatePost,
	description as descriptionDatabaseCopyCreatePost,
} from './databaseCopy/databaseCopyCreatePost.operation';
import {
	execute as executeDatabaseCopyDelete,
	description as descriptionDatabaseCopyDelete,
} from './service/databaseCopyDelete.operation';
import {
	execute as executeDatabaseCopyGet,
	description as descriptionDatabaseCopyGet,
} from './service/databaseCopyGet.operation';
import {
	execute as executeDatabaseCopyListGet,
	description as descriptionDatabaseCopyListGet,
} from './databaseCopy/databaseCopyListGet.operation';
import {
	execute as executeDatabaseCopyRestorePost,
	description as descriptionDatabaseCopyRestorePost,
} from './databaseCopy/databaseCopyRestorePost.operation';
import {
	execute as executeDatabaseCreatePost,
	description as descriptionDatabaseCreatePost,
} from './database/databaseCreatePost.operation';
import {
	execute as executeDatabaseDumpCreatePost,
	description as descriptionDatabaseDumpCreatePost,
} from './databaseDump/databaseDumpCreatePost.operation';
import {
	execute as executeDatabaseDumpDelete,
	description as descriptionDatabaseDumpDelete,
} from './service/databaseDumpDelete.operation';
import {
	execute as executeDatabaseDumpGet,
	description as descriptionDatabaseDumpGet,
} from './service/databaseDumpGet.operation';
import {
	execute as executeDatabaseDumpListGet,
	description as descriptionDatabaseDumpListGet,
} from './databaseDump/databaseDumpListGet.operation';
import {
	execute as executeDatabaseDumpRestorePost,
	description as descriptionDatabaseDumpRestorePost,
} from './databaseDump/databaseDumpRestorePost.operation';
import {
	execute as executeDatabaseExtensionDisablePost,
	description as descriptionDatabaseExtensionDisablePost,
} from './service/databaseExtensionDisablePost.operation';
import {
	execute as executeDatabaseExtensionEnablePost,
	description as descriptionDatabaseExtensionEnablePost,
} from './service/databaseExtensionEnablePost.operation';
import {
	execute as executeDatabaseExtensionGet,
	description as descriptionDatabaseExtensionGet,
} from './service/databaseExtensionGet.operation';
import {
	execute as executeDatabaseExtensionListGet,
	description as descriptionDatabaseExtensionListGet,
} from './databaseExtension/databaseExtensionListGet.operation';
import {
	execute as executeDatabaseImportPost,
	description as descriptionDatabaseImportPost,
} from './databaseImport/databaseImportPost.operation';
import {
	execute as executeDatabaseListGet,
	description as descriptionDatabaseListGet,
} from './database/databaseListGet.operation';
import {
	execute as executeDatabaseWizardPost,
	description as descriptionDatabaseWizardPost,
} from './service/databaseWizardPost.operation';
import {
	execute as executeDumpDelete,
	description as descriptionDumpDelete,
} from './service/dumpDelete.operation';
import {
	execute as executeDumpGet,
	description as descriptionDumpGet,
} from './service/dumpGet.operation';
import {
	execute as executeDumpListGet,
	description as descriptionDumpListGet,
} from './dumpRestore/dumpListGet.operation';
import {
	execute as executeDumpRestorePost,
	description as descriptionDumpRestorePost,
} from './service/dumpRestorePost.operation';
import {
	execute as executeGenerateTemporaryLogsLinkPost,
	description as descriptionGenerateTemporaryLogsLinkPost,
} from './service/generateTemporaryLogsLinkPost.operation';
import {
	execute as executeListGet,
	description as descriptionListGet,
} from './service/listGet.operation';
import {
	execute as executeLogKindGet,
	description as descriptionLogKindGet,
} from './log/logKindGet.operation';
import {
	execute as executeLogKindNameGet,
	description as descriptionLogKindNameGet,
} from './service/logKindNameGet.operation';
import {
	execute as executeLogSubscriptionCreatePost,
	description as descriptionLogSubscriptionCreatePost,
} from './logSubscription/logSubscriptionCreatePost.operation';
import {
	execute as executeLogSubscriptionDelete,
	description as descriptionLogSubscriptionDelete,
} from './service/logSubscriptionDelete.operation';
import {
	execute as executeLogSubscriptionGet,
	description as descriptionLogSubscriptionGet,
} from './service/logSubscriptionGet.operation';
import {
	execute as executeLogSubscriptionListGet,
	description as descriptionLogSubscriptionListGet,
} from './logSubscription/logSubscriptionListGet.operation';
import {
	execute as executeLogUrlPost,
	description as descriptionLogUrlPost,
} from './log/logUrlPost.operation';
import {
	execute as executeMetricsTokenGet,
	description as descriptionMetricsTokenGet,
} from './service/metricsTokenGet.operation';
import {
	execute as executeOomGet,
	description as descriptionOomGet,
} from './service/oomGet.operation';
import {
	execute as executeQuotaRefreshPost,
	description as descriptionQuotaRefreshPost,
} from './service/quotaRefreshPost.operation';
import {
	execute as executeRestartPost,
	description as descriptionRestartPost,
} from './service/restartPost.operation';
import {
	execute as executeServiceGet,
	description as descriptionServiceGet,
} from './service/serviceGet.operation';
import {
	execute as executeServiceInfosGet,
	description as descriptionServiceInfosGet,
} from './serviceInfos/serviceInfosGet.operation';
import {
	execute as executeServiceInfosUpdate,
	description as descriptionServiceInfosUpdate,
} from './serviceInfos/serviceInfosUpdate.operation';
import {
	execute as executeServiceUpdate,
	description as descriptionServiceUpdate,
} from './service/serviceUpdate.operation';
import {
	execute as executeTaskGet,
	description as descriptionTaskGet,
} from './service/taskGet.operation';
import {
	execute as executeTaskListGet,
	description as descriptionTaskListGet,
} from './task/taskListGet.operation';
import {
	execute as executeTerminatePost,
	description as descriptionTerminatePost,
} from './service/terminatePost.operation';
import {
	execute as executeUserChangePasswordPost,
	description as descriptionUserChangePasswordPost,
} from './service/userChangePasswordPost.operation';
import {
	execute as executeUserCreatePost,
	description as descriptionUserCreatePost,
} from './user/userCreatePost.operation';
import {
	execute as executeUserDelete,
	description as descriptionUserDelete,
} from './service/userDelete.operation';
import {
	execute as executeUserGet,
	description as descriptionUserGet,
} from './service/userGet.operation';
import {
	execute as executeUserGrantCreatePost,
	description as descriptionUserGrantCreatePost,
} from './userGrant/userGrantCreatePost.operation';
import {
	execute as executeUserGrantDelete,
	description as descriptionUserGrantDelete,
} from './service/userGrantDelete.operation';
import {
	execute as executeUserGrantGet,
	description as descriptionUserGrantGet,
} from './service/userGrantGet.operation';
import {
	execute as executeUserGrantListGet,
	description as descriptionUserGrantListGet,
} from './userGrant/userGrantListGet.operation';
import {
	execute as executeUserGrantUpdatePost,
	description as descriptionUserGrantUpdatePost,
} from './service/userGrantUpdatePost.operation';
import {
	execute as executeUserListGet,
	description as descriptionUserListGet,
} from './user/userListGet.operation';
import {
	execute as executeWebhostingNetworkDelete,
	description as descriptionWebhostingNetworkDelete,
} from './service/webhostingNetworkDelete.operation';
import {
	execute as executeWebhostingNetworkGet,
	description as descriptionWebhostingNetworkGet,
} from './service/webhostingNetworkGet.operation';
import {
	execute as executeWebhostingNetworkPost,
	description as descriptionWebhostingNetworkPost,
} from './service/webhostingNetworkPost.operation';
import {
	execute as executeWebsGet,
	description as descriptionWebsGet,
} from './service/websGet.operation';
import {
	execute as executeWhitelistCreatePost,
	description as descriptionWhitelistCreatePost,
} from './whitelist/whitelistCreatePost.operation';
import {
	execute as executeWhitelistDelete,
	description as descriptionWhitelistDelete,
} from './service/whitelistDelete.operation';
import {
	execute as executeWhitelistGet,
	description as descriptionWhitelistGet,
} from './service/whitelistGet.operation';
import {
	execute as executeWhitelistListGet,
	description as descriptionWhitelistListGet,
} from './whitelist/whitelistListGet.operation';
import {
	execute as executeWhitelistUpdate,
	description as descriptionWhitelistUpdate,
} from './service/whitelistUpdate.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'hostingPrivateDatabaseOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Add Grant on a Web Cloud Database',
					value: 'userGrantCreatePost',
					action: 'Add grant on a Web Cloud Database',
				},
				{
					name: 'Alter a Web Cloud Database Properties',
					value: 'serviceUpdate',
					action: 'Alter a Web Cloud Database properties',
				},
				{
					name: 'Ask for the Termination of Your Service',
					value: 'terminatePost',
					action: 'Ask for the termination of your service',
				},
				{
					name: 'Change DBMS Version of Your Web Cloud Data...',
					value: 'changeVersionPost',
					action: 'Change DBMS version of your Web Cloud Database',
				},
				{
					name: 'Change FTP Password of Your Web Cloud Data...',
					value: 'changeFtpPasswordPost',
					action: 'Change FTP password of your Web Cloud Database',
				},
				{
					name: 'Change the Password of a User on a Web Clo...',
					value: 'userChangePasswordPost',
					action: 'Change the password of a user on a Web Cloud Database',
				},
				{
					name: 'Confirm Service Termination',
					value: 'confirmTerminationPost',
					action: 'Confirm service termination',
				},
				{
					name: 'Create a New Database Copy in a Web Cloud ...',
					value: 'databaseCopyCreatePost',
					action: 'Create a new database copy in a Web Cloud Database',
				},
				{
					name: 'Create a New Database in a Web Cloud Database',
					value: 'databaseCreatePost',
					action: 'Create a new database in a Web Cloud Database',
				},
				{
					name: 'Create a New Database/user and Grant It',
					value: 'databaseWizardPost',
					action: 'Create a new database/user and grant it',
				},
				{
					name: 'Create a New IP Whitelist in a Web Cloud D...',
					value: 'whitelistCreatePost',
					action: 'Create a new IP whitelist in a Web Cloud Database',
				},
				{
					name: 'Create a User on a Web Cloud Database',
					value: 'userCreatePost',
					action: 'Create a user on a Web Cloud Database',
				},
				{
					name: 'Create Subscription to Log to Customer for...',
					value: 'logSubscriptionCreatePost',
					action: 'Create subscription to log to customer for a Web Cloud Database',
				},
				{
					name: 'Delete a Database Dump From a Web Cloud Da...',
					value: 'dumpDelete',
					action: 'Delete a database dump from a Web Cloud Database',
				},
				{
					name: 'Delete a Database From a Web Cloud Database',
					value: 'database_Delete',
					action: 'Delete a database from a Web Cloud Database',
				},
				{
					name: 'Delete a Grant From a Web Cloud Database',
					value: 'userGrantDelete',
					action: 'Delete a grant from a Web Cloud Database',
				},
				{
					name: 'Delete a Subscription',
					value: 'logSubscriptionDelete',
					action: 'Delete a subscription',
				},
				{
					name: 'Delete a User on a Web Cloud Database',
					value: 'userDelete',
					action: 'Delete a user on a Web Cloud Database',
				},
				{
					name: 'Delete Access From the Web Hosting network...',
					value: 'webhostingNetworkDelete',
					action: 'Delete access from the web hosting network on a Web Cloud Database',
				},
				{
					name: 'Delete an IP Whitelist From a Web Cloud Da...',
					value: 'whitelistDelete',
					action: 'Delete an IP whitelist from a Web Cloud Database',
				},
				{
					name: 'Delete Dump Before Expiration Date',
					value: 'databaseDumpDelete',
					action: 'Delete dump before expiration date',
				},
				{
					name: 'Delete the Database Copy of a Web Cloud Da...',
					value: 'databaseCopyDelete',
					action: 'Delete the database copy of a Web Cloud Database',
				},
				{
					name: 'Disable an Extension on a Web Cloud Database',
					value: 'databaseExtensionDisablePost',
					action: 'Disable an extension on a Web Cloud Database',
				},
				{
					name: 'Enable an Extension on a Web Cloud Database',
					value: 'databaseExtensionEnablePost',
					action: 'Enable an extension on a Web Cloud Database',
				},
				{
					name: 'Generate a Metrics Token',
					value: 'metricsTokenGet',
					action: 'Generate a metrics token',
				},
				{
					name: 'Generate a Temporary Link to Access Logs f...',
					value: 'generateTemporaryLogsLinkPost',
					action: 'Generate a temporary link to access logs for a Web Cloud Database',
				},
				{
					name: 'Generate a Temporary URL to Retrieve Logs',
					value: 'logUrlPost',
					action: 'Generate a temporary URL to retrieve logs',
				},
				{
					name: 'Get a Database Dump From a Web Cloud Database',
					value: 'databaseDumpGet',
					action: 'Get a database dump from a Web Cloud Database',
				},
				{
					name: 'Get a Log Kind',
					value: 'logKindNameGet',
					action: 'Get a log kind',
				},
				{
					name: 'Get a Web Cloud Database Properties',
					value: 'serviceGet',
					action: 'Get a Web Cloud Database properties',
				},
				{
					name: 'Get All Database Dump From a Web Cloud Dat...',
					value: 'databaseDumpListGet',
					action: 'Get all database dump from a Web Cloud Database',
				},
				{
					name: 'Get All Information About the Grants for a...',
					value: 'userGrantListGet',
					action: 'Get all information about the grants for a user in a Web Cloud Database',
				},
				{
					name: 'Get Available Order Capacities',
					value: 'availableOrderCapacitiesGet',
					action: 'Get available order capacities',
				},
				{
					name: 'Get Database Copy Properties',
					value: 'databaseCopyGet',
					action: 'Get database copy properties',
				},
				{
					name: 'Get Database Properties',
					value: 'database_Get',
					action: 'Get database properties',
				},
				{
					name: 'Get Information About the Grants for a use...',
					value: 'userGrantGet',
					action: 'Get information about the grants for a user in a Web Cloud Database',
				},
				{
					name: 'Get Properties of a Webcloud Database exte...',
					value: 'databaseExtensionGet',
					action: 'Get properties of a Webcloud Database extension',
				},
				{
					name: 'Get Service Information',
					value: 'serviceInfosGet',
					action: 'Get service information',
				},
				{
					name: 'Get Subscription Details',
					value: 'logSubscriptionGet',
					action: 'Get subscription details',
				},
				{
					name: 'Get Task Details',
					value: 'taskGet',
					action: 'Get task details',
				},
				{
					name: 'Get the Availables Versions for This priva...',
					value: 'availableVersionsGet',
					action: 'Get the availables versions for this private database',
				},
				{
					name: 'Get the Current Configuration for This Web...',
					value: 'configGet',
					action: 'Get the current configuration for this Web Cloud Database',
				},
				{
					name: 'Get User Properties',
					value: 'userGet',
					action: 'Get user properties',
				},
				{
					name: 'Get Webhosting Network Status',
					value: 'webhostingNetworkGet',
					action: 'Get Webhosting network status',
				},
				{
					name: 'Get Whitelist Properties',
					value: 'whitelistGet',
					action: 'Get whitelist properties',
				},
				{
					name: 'Import a Database Into a Web Cloud Database',
					value: 'databaseImportPost',
					action: 'Import a database into a Web Cloud Database',
				},
				{
					name: 'Launch a Contact Change Procedure',
					value: 'changeContactPost',
					action: 'Launch a contact change procedure',
				},
				{
					name: 'List Available Log Kinds',
					value: 'logKindGet',
					action: 'List available log kinds',
				},
				{
					name: 'List Available Web Cloud Databases',
					value: 'listGet',
					action: 'List available Web Cloud Databases',
				},
				{
					name: 'List Database Copy of a privateDatabase',
					value: 'databaseCopyListGet',
					action: 'List database copy of a privateDatabase',
				},
				{
					name: 'List Databases on a privateDatabase',
					value: 'databaseListGet',
					action: 'List databases on a privateDatabase',
				},
				{
					name: 'List Extensions Available for a Webcloud D...',
					value: 'databaseExtensionListGet',
					action: 'List extensions available for a Webcloud Database',
				},
				{
					name: 'List Linked Webs',
					value: 'websGet',
					action: 'List linked webs',
				},
				{
					name: 'List of Privatesql CPU Throttle',
					value: 'cpuThrottleGet',
					action: 'List of privatesql CPU throttle',
				},
				{
					name: 'List of Privatesql OOM Kill',
					value: 'oomGet',
					action: 'List of privatesql OOM kill',
				},
				{
					name: 'List Subscription IDs for Web Cloud Database',
					value: 'logSubscriptionListGet',
					action: 'List subscription IDs for Web Cloud Database',
				},
				{
					name: 'List Tasks for a Webcloud Database',
					value: 'taskListGet',
					action: 'List tasks for a Webcloud Database',
				},
				{
					name: 'List Users on a Web Cloud Database',
					value: 'userListGet',
					action: 'List users on a Web Cloud Database',
				},
				{
					name: 'List Whitelists on a Web Cloud Database',
					value: 'whitelistListGet',
					action: 'List whitelists on a Web Cloud Database',
				},
				{
					name: 'Permit Access From the Web Hosting network...',
					value: 'webhostingNetworkPost',
					action: 'Permit access from the web hosting network on a Web Cloud Database',
				},
				{
					name: 'Refresh the Quota of Your Web Cloud Database',
					value: 'quotaRefreshPost',
					action: 'Refresh the quota of your Web Cloud Database',
				},
				{
					name: 'Request the Copy Into a Web Cloud Database',
					value: 'databaseCopyRestorePost',
					action: 'Request the copy into a Web Cloud Database',
				},
				{
					name: 'Request the Dump of This Database (an emai...',
					value: 'databaseDumpCreatePost',
					action: 'Request the dump of this database (an email will be sent with a link available 30 days)',
				},
				{
					name: 'Request the Restore From This Dump',
					value: 'databaseDumpRestorePost',
					action: 'Request the restore from this dump',
				},
				{
					name: 'Restart the Web Cloud Database',
					value: 'restartPost',
					action: 'Restart the Web Cloud Database',
				},
				{
					name: 'Restore a Database Dump Into a Web Cloud D...',
					value: 'dumpRestorePost',
					action: 'Restore a database dump into a Web Cloud Database',
				},
				{
					name: 'Update an IP Whitelist in a Web Cloud Data...',
					value: 'whitelistUpdate',
					action: 'Update an IP whitelist in a Web Cloud Database',
				},
				{
					name: 'Update Service Information',
					value: 'serviceInfosUpdate',
					action: 'Update service information',
				},
				{
					name: 'Update the Configuration of This Web Cloud...',
					value: 'configUpdatePost',
					action: 'Update the configuration of this Web Cloud Database',
				},
				{
					name: 'Update the Permissions of a Grant for a us...',
					value: 'userGrantUpdatePost',
					action: 'Update the permissions of a grant for a user on a Web Cloud Database',
				},
			],
			default: 'availableOrderCapacitiesGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionAvailableOrderCapacitiesGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['availableOrderCapacitiesGet'] },
		}) as INodeProperties[]),
		...(descriptionAvailableVersionsGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['availableVersionsGet'] },
		}) as INodeProperties[]),
		...(descriptionChangeContactPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['changeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionChangeFtpPasswordPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['changeFtpPasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionChangeVersionPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['changeVersionPost'] },
		}) as INodeProperties[]),
		...(descriptionConfigGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['configGet'] },
		}) as INodeProperties[]),
		...(descriptionConfigUpdatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['configUpdatePost'] },
		}) as INodeProperties[]),
		...(descriptionConfirmTerminationPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['confirmTerminationPost'] },
		}) as INodeProperties[]),
		...(descriptionCpuThrottleGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['cpuThrottleGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabase_Delete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['database_Delete'] },
		}) as INodeProperties[]),
		...(descriptionDatabase_Get({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['database_Get'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseCopyCreatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseCopyCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseCopyDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseCopyDelete'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseCopyGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseCopyGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseCopyListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseCopyListGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseCopyRestorePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseCopyRestorePost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseCreatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseDumpCreatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseDumpCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseDumpDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseDumpDelete'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseDumpGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseDumpGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseDumpListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseDumpListGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseDumpRestorePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseDumpRestorePost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseExtensionDisablePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseExtensionDisablePost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseExtensionEnablePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseExtensionEnablePost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseExtensionGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseExtensionGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseExtensionListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseExtensionListGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseImportPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseImportPost'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseListGet'] },
		}) as INodeProperties[]),
		...(descriptionDatabaseWizardPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['databaseWizardPost'] },
		}) as INodeProperties[]),
		...(descriptionDumpDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['dumpDelete'] },
		}) as INodeProperties[]),
		...(descriptionDumpGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['dumpGet'] },
		}) as INodeProperties[]),
		...(descriptionDumpListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['dumpListGet'] },
		}) as INodeProperties[]),
		...(descriptionDumpRestorePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['dumpRestorePost'] },
		}) as INodeProperties[]),
		...(descriptionGenerateTemporaryLogsLinkPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['generateTemporaryLogsLinkPost'] },
		}) as INodeProperties[]),
		...(descriptionListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['listGet'] },
		}) as INodeProperties[]),
		...(descriptionLogKindGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['logKindGet'] },
		}) as INodeProperties[]),
		...(descriptionLogKindNameGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['logKindNameGet'] },
		}) as INodeProperties[]),
		...(descriptionLogSubscriptionCreatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['logSubscriptionCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLogSubscriptionDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['logSubscriptionDelete'] },
		}) as INodeProperties[]),
		...(descriptionLogSubscriptionGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['logSubscriptionGet'] },
		}) as INodeProperties[]),
		...(descriptionLogSubscriptionListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['logSubscriptionListGet'] },
		}) as INodeProperties[]),
		...(descriptionLogUrlPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['logUrlPost'] },
		}) as INodeProperties[]),
		...(descriptionMetricsTokenGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['metricsTokenGet'] },
		}) as INodeProperties[]),
		...(descriptionOomGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['oomGet'] },
		}) as INodeProperties[]),
		...(descriptionQuotaRefreshPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['quotaRefreshPost'] },
		}) as INodeProperties[]),
		...(descriptionRestartPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['restartPost'] },
		}) as INodeProperties[]),
		...(descriptionServiceGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['serviceGet'] },
		}) as INodeProperties[]),
		...(descriptionServiceInfosGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['serviceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionServiceInfosUpdate({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['serviceInfosUpdate'] },
		}) as INodeProperties[]),
		...(descriptionServiceUpdate({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['serviceUpdate'] },
		}) as INodeProperties[]),
		...(descriptionTaskGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['taskGet'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['taskListGet'] },
		}) as INodeProperties[]),
		...(descriptionTerminatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['terminatePost'] },
		}) as INodeProperties[]),
		...(descriptionUserChangePasswordPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userChangePasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionUserCreatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionUserDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userDelete'] },
		}) as INodeProperties[]),
		...(descriptionUserGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userGet'] },
		}) as INodeProperties[]),
		...(descriptionUserGrantCreatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userGrantCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionUserGrantDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userGrantDelete'] },
		}) as INodeProperties[]),
		...(descriptionUserGrantGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userGrantGet'] },
		}) as INodeProperties[]),
		...(descriptionUserGrantListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userGrantListGet'] },
		}) as INodeProperties[]),
		...(descriptionUserGrantUpdatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userGrantUpdatePost'] },
		}) as INodeProperties[]),
		...(descriptionUserListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['userListGet'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingNetworkDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['webhostingNetworkDelete'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingNetworkGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['webhostingNetworkGet'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingNetworkPost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['webhostingNetworkPost'] },
		}) as INodeProperties[]),
		...(descriptionWebsGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['websGet'] },
		}) as INodeProperties[]),
		...(descriptionWhitelistCreatePost({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['whitelistCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionWhitelistDelete({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['whitelistDelete'] },
		}) as INodeProperties[]),
		...(descriptionWhitelistGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['whitelistGet'] },
		}) as INodeProperties[]),
		...(descriptionWhitelistListGet({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['whitelistListGet'] },
		}) as INodeProperties[]),
		...(descriptionWhitelistUpdate({
			...displayOptions,
			show: { hostingPrivateDatabaseOperation: ['whitelistUpdate'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('hostingPrivateDatabaseOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'availableOrderCapacitiesGet':
			return executeAvailableOrderCapacitiesGet.call(this, itemIndex ?? 0);
		case 'availableVersionsGet':
			return executeAvailableVersionsGet.call(this, itemIndex ?? 0);
		case 'changeContactPost':
			return executeChangeContactPost.call(this, itemIndex ?? 0);
		case 'changeFtpPasswordPost':
			return executeChangeFtpPasswordPost.call(this, itemIndex ?? 0);
		case 'changeVersionPost':
			return executeChangeVersionPost.call(this, itemIndex ?? 0);
		case 'configGet':
			return executeConfigGet.call(this, itemIndex ?? 0);
		case 'configUpdatePost':
			return executeConfigUpdatePost.call(this, itemIndex ?? 0);
		case 'confirmTerminationPost':
			return executeConfirmTerminationPost.call(this, itemIndex ?? 0);
		case 'cpuThrottleGet':
			return executeCpuThrottleGet.call(this, itemIndex ?? 0);
		case 'database_Delete':
			return executeDatabase_Delete.call(this, itemIndex ?? 0);
		case 'database_Get':
			return executeDatabase_Get.call(this, itemIndex ?? 0);
		case 'databaseCopyCreatePost':
			return executeDatabaseCopyCreatePost.call(this, itemIndex ?? 0);
		case 'databaseCopyDelete':
			return executeDatabaseCopyDelete.call(this, itemIndex ?? 0);
		case 'databaseCopyGet':
			return executeDatabaseCopyGet.call(this, itemIndex ?? 0);
		case 'databaseCopyListGet':
			return executeDatabaseCopyListGet.call(this, itemIndex ?? 0);
		case 'databaseCopyRestorePost':
			return executeDatabaseCopyRestorePost.call(this, itemIndex ?? 0);
		case 'databaseCreatePost':
			return executeDatabaseCreatePost.call(this, itemIndex ?? 0);
		case 'databaseDumpCreatePost':
			return executeDatabaseDumpCreatePost.call(this, itemIndex ?? 0);
		case 'databaseDumpDelete':
			return executeDatabaseDumpDelete.call(this, itemIndex ?? 0);
		case 'databaseDumpGet':
			return executeDatabaseDumpGet.call(this, itemIndex ?? 0);
		case 'databaseDumpListGet':
			return executeDatabaseDumpListGet.call(this, itemIndex ?? 0);
		case 'databaseDumpRestorePost':
			return executeDatabaseDumpRestorePost.call(this, itemIndex ?? 0);
		case 'databaseExtensionDisablePost':
			return executeDatabaseExtensionDisablePost.call(this, itemIndex ?? 0);
		case 'databaseExtensionEnablePost':
			return executeDatabaseExtensionEnablePost.call(this, itemIndex ?? 0);
		case 'databaseExtensionGet':
			return executeDatabaseExtensionGet.call(this, itemIndex ?? 0);
		case 'databaseExtensionListGet':
			return executeDatabaseExtensionListGet.call(this, itemIndex ?? 0);
		case 'databaseImportPost':
			return executeDatabaseImportPost.call(this, itemIndex ?? 0);
		case 'databaseListGet':
			return executeDatabaseListGet.call(this, itemIndex ?? 0);
		case 'databaseWizardPost':
			return executeDatabaseWizardPost.call(this, itemIndex ?? 0);
		case 'dumpDelete':
			return executeDumpDelete.call(this, itemIndex ?? 0);
		case 'dumpGet':
			return executeDumpGet.call(this, itemIndex ?? 0);
		case 'dumpListGet':
			return executeDumpListGet.call(this, itemIndex ?? 0);
		case 'dumpRestorePost':
			return executeDumpRestorePost.call(this, itemIndex ?? 0);
		case 'generateTemporaryLogsLinkPost':
			return executeGenerateTemporaryLogsLinkPost.call(this, itemIndex ?? 0);
		case 'listGet':
			return executeListGet.call(this, itemIndex ?? 0);
		case 'logKindGet':
			return executeLogKindGet.call(this, itemIndex ?? 0);
		case 'logKindNameGet':
			return executeLogKindNameGet.call(this, itemIndex ?? 0);
		case 'logSubscriptionCreatePost':
			return executeLogSubscriptionCreatePost.call(this, itemIndex ?? 0);
		case 'logSubscriptionDelete':
			return executeLogSubscriptionDelete.call(this, itemIndex ?? 0);
		case 'logSubscriptionGet':
			return executeLogSubscriptionGet.call(this, itemIndex ?? 0);
		case 'logSubscriptionListGet':
			return executeLogSubscriptionListGet.call(this, itemIndex ?? 0);
		case 'logUrlPost':
			return executeLogUrlPost.call(this, itemIndex ?? 0);
		case 'metricsTokenGet':
			return executeMetricsTokenGet.call(this, itemIndex ?? 0);
		case 'oomGet':
			return executeOomGet.call(this, itemIndex ?? 0);
		case 'quotaRefreshPost':
			return executeQuotaRefreshPost.call(this, itemIndex ?? 0);
		case 'restartPost':
			return executeRestartPost.call(this, itemIndex ?? 0);
		case 'serviceGet':
			return executeServiceGet.call(this, itemIndex ?? 0);
		case 'serviceInfosGet':
			return executeServiceInfosGet.call(this, itemIndex ?? 0);
		case 'serviceInfosUpdate':
			return executeServiceInfosUpdate.call(this, itemIndex ?? 0);
		case 'serviceUpdate':
			return executeServiceUpdate.call(this, itemIndex ?? 0);
		case 'taskGet':
			return executeTaskGet.call(this, itemIndex ?? 0);
		case 'taskListGet':
			return executeTaskListGet.call(this, itemIndex ?? 0);
		case 'terminatePost':
			return executeTerminatePost.call(this, itemIndex ?? 0);
		case 'userChangePasswordPost':
			return executeUserChangePasswordPost.call(this, itemIndex ?? 0);
		case 'userCreatePost':
			return executeUserCreatePost.call(this, itemIndex ?? 0);
		case 'userDelete':
			return executeUserDelete.call(this, itemIndex ?? 0);
		case 'userGet':
			return executeUserGet.call(this, itemIndex ?? 0);
		case 'userGrantCreatePost':
			return executeUserGrantCreatePost.call(this, itemIndex ?? 0);
		case 'userGrantDelete':
			return executeUserGrantDelete.call(this, itemIndex ?? 0);
		case 'userGrantGet':
			return executeUserGrantGet.call(this, itemIndex ?? 0);
		case 'userGrantListGet':
			return executeUserGrantListGet.call(this, itemIndex ?? 0);
		case 'userGrantUpdatePost':
			return executeUserGrantUpdatePost.call(this, itemIndex ?? 0);
		case 'userListGet':
			return executeUserListGet.call(this, itemIndex ?? 0);
		case 'webhostingNetworkDelete':
			return executeWebhostingNetworkDelete.call(this, itemIndex ?? 0);
		case 'webhostingNetworkGet':
			return executeWebhostingNetworkGet.call(this, itemIndex ?? 0);
		case 'webhostingNetworkPost':
			return executeWebhostingNetworkPost.call(this, itemIndex ?? 0);
		case 'websGet':
			return executeWebsGet.call(this, itemIndex ?? 0);
		case 'whitelistCreatePost':
			return executeWhitelistCreatePost.call(this, itemIndex ?? 0);
		case 'whitelistDelete':
			return executeWhitelistDelete.call(this, itemIndex ?? 0);
		case 'whitelistGet':
			return executeWhitelistGet.call(this, itemIndex ?? 0);
		case 'whitelistListGet':
			return executeWhitelistListGet.call(this, itemIndex ?? 0);
		case 'whitelistUpdate':
			return executeWhitelistUpdate.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hostingPrivateDatabase"`);
}
