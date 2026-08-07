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
					name: 'Get available order capacities',
					value: 'availableOrderCapacitiesGet',
					action: 'Get available order capacities',
				},
				{
					name: 'Get the availables versions for this priva...',
					value: 'availableVersionsGet',
					action: 'Get the availables versions for this private database',
				},
				{
					name: 'Launch a contact change procedure',
					value: 'changeContactPost',
					action: 'Launch a contact change procedure',
				},
				{
					name: 'Change FTP password of your Web Cloud Data...',
					value: 'changeFtpPasswordPost',
					action: 'Change FTP password of your Web Cloud Database',
				},
				{
					name: 'Change DBMS version of your Web Cloud Data...',
					value: 'changeVersionPost',
					action: 'Change DBMS version of your Web Cloud Database',
				},
				{
					name: 'Get the current configuration for this Web...',
					value: 'configGet',
					action: 'Get the current configuration for this Web Cloud Database',
				},
				{
					name: 'Update the configuration of this Web Cloud...',
					value: 'configUpdatePost',
					action: 'Update the configuration of this Web Cloud Database',
				},
				{
					name: 'Confirm service termination',
					value: 'confirmTerminationPost',
					action: 'Confirm service termination',
				},
				{
					name: 'List of privatesql CPU throttle',
					value: 'cpuThrottleGet',
					action: 'List of privatesql CPU throttle',
				},
				{
					name: 'Delete a database from a Web Cloud Database',
					value: 'database_Delete',
					action: 'Delete a database from a Web Cloud Database',
				},
				{
					name: 'Get database properties',
					value: 'database_Get',
					action: 'Get database properties',
				},
				{
					name: 'Create a new database copy in a Web Cloud ...',
					value: 'databaseCopyCreatePost',
					action: 'Create a new database copy in a Web Cloud Database',
				},
				{
					name: 'Delete the database copy of a Web Cloud Da...',
					value: 'databaseCopyDelete',
					action: 'Delete the database copy of a Web Cloud Database',
				},
				{
					name: 'Get database copy properties',
					value: 'databaseCopyGet',
					action: 'Get database copy properties',
				},
				{
					name: 'List database copy of a privateDatabase',
					value: 'databaseCopyListGet',
					action: 'List database copy of a privateDatabase',
				},
				{
					name: 'Request the copy into a Web Cloud Database',
					value: 'databaseCopyRestorePost',
					action: 'Request the copy into a Web Cloud Database',
				},
				{
					name: 'Create a new database in a Web Cloud Database',
					value: 'databaseCreatePost',
					action: 'Create a new database in a Web Cloud Database',
				},
				{
					name: 'Request the dump of this database (an emai...',
					value: 'databaseDumpCreatePost',
					action: 'Request the dump of this database (an email will be sent with a link available 30 days)',
				},
				{
					name: 'Delete dump before expiration date',
					value: 'databaseDumpDelete',
					action: 'Delete dump before expiration date',
				},
				{
					name: 'Get a database dump from a Web Cloud Database',
					value: 'databaseDumpGet',
					action: 'Get a database dump from a Web Cloud Database',
				},
				{
					name: 'Get all database dump from a Web Cloud Dat...',
					value: 'databaseDumpListGet',
					action: 'Get all database dump from a Web Cloud Database',
				},
				{
					name: 'Request the restore from this dump',
					value: 'databaseDumpRestorePost',
					action: 'Request the restore from this dump',
				},
				{
					name: 'Disable an extension on a Web Cloud Database',
					value: 'databaseExtensionDisablePost',
					action: 'Disable an extension on a Web Cloud Database',
				},
				{
					name: 'Enable an extension on a Web Cloud Database',
					value: 'databaseExtensionEnablePost',
					action: 'Enable an extension on a Web Cloud Database',
				},
				{
					name: 'Get properties of a Webcloud Database exte...',
					value: 'databaseExtensionGet',
					action: 'Get properties of a Webcloud Database extension',
				},
				{
					name: 'List extensions available for a Webcloud D...',
					value: 'databaseExtensionListGet',
					action: 'List extensions available for a Webcloud Database',
				},
				{
					name: 'Import a database into a Web Cloud Database',
					value: 'databaseImportPost',
					action: 'Import a database into a Web Cloud Database',
				},
				{
					name: 'List databases on a privateDatabase',
					value: 'databaseListGet',
					action: 'List databases on a privateDatabase',
				},
				{
					name: 'Create a new database/user and grant it',
					value: 'databaseWizardPost',
					action: 'Create a new database/user and grant it',
				},
				{
					name: 'Delete a database dump from a Web Cloud Da...',
					value: 'dumpDelete',
					action: 'Delete a database dump from a Web Cloud Database',
				},
				{
					name: 'Get a database dump from a Web Cloud Database',
					value: 'dumpGet',
					action: 'Get a database dump from a Web Cloud Database',
				},
				{
					name: 'Get all database dump from a Web Cloud Dat...',
					value: 'dumpListGet',
					action: 'Get all database dump from a Web Cloud Database',
				},
				{
					name: 'Restore a database dump into a Web Cloud D...',
					value: 'dumpRestorePost',
					action: 'Restore a database dump into a Web Cloud Database',
				},
				{
					name: 'Generate a temporary link to access logs f...',
					value: 'generateTemporaryLogsLinkPost',
					action: 'Generate a temporary link to access logs for a Web Cloud Database',
				},
				{
					name: 'List available Web Cloud Databases',
					value: 'listGet',
					action: 'List available Web Cloud Databases',
				},
				{
					name: 'List available log kinds',
					value: 'logKindGet',
					action: 'List available log kinds',
				},
				{
					name: 'Get a log kind',
					value: 'logKindNameGet',
					action: 'Get a log kind',
				},
				{
					name: 'Create subscription to log to customer for...',
					value: 'logSubscriptionCreatePost',
					action: 'Create subscription to log to customer for a Web Cloud Database',
				},
				{
					name: 'Delete a subscription',
					value: 'logSubscriptionDelete',
					action: 'Delete a subscription',
				},
				{
					name: 'Get subscription details',
					value: 'logSubscriptionGet',
					action: 'Get subscription details',
				},
				{
					name: 'List subscription IDs for Web Cloud Database',
					value: 'logSubscriptionListGet',
					action: 'List subscription IDs for Web Cloud Database',
				},
				{
					name: 'Generate a temporary URL to retrieve logs',
					value: 'logUrlPost',
					action: 'Generate a temporary URL to retrieve logs',
				},
				{
					name: 'Generate a metrics token',
					value: 'metricsTokenGet',
					action: 'Generate a metrics token',
				},
				{
					name: 'List of privatesql OOM kill',
					value: 'oomGet',
					action: 'List of privatesql OOM kill',
				},
				{
					name: 'Refresh the quota of your Web Cloud Database',
					value: 'quotaRefreshPost',
					action: 'Refresh the quota of your Web Cloud Database',
				},
				{
					name: 'Restart the Web Cloud Database',
					value: 'restartPost',
					action: 'Restart the Web Cloud Database',
				},
				{
					name: 'Get a Web Cloud Database properties',
					value: 'serviceGet',
					action: 'Get a Web Cloud Database properties',
				},
				{
					name: 'Get service information',
					value: 'serviceInfosGet',
					action: 'Get service information',
				},
				{
					name: 'Update service information',
					value: 'serviceInfosUpdate',
					action: 'Update service information',
				},
				{
					name: 'Alter a Web Cloud Database properties',
					value: 'serviceUpdate',
					action: 'Alter a Web Cloud Database properties',
				},
				{
					name: 'Get task details',
					value: 'taskGet',
					action: 'Get task details',
				},
				{
					name: 'List tasks for a Webcloud Database',
					value: 'taskListGet',
					action: 'List tasks for a Webcloud Database',
				},
				{
					name: 'Ask for the termination of your service',
					value: 'terminatePost',
					action: 'Ask for the termination of your service',
				},
				{
					name: 'Change the password of a user on a Web Clo...',
					value: 'userChangePasswordPost',
					action: 'Change the password of a user on a Web Cloud Database',
				},
				{
					name: 'Create a user on a Web Cloud Database',
					value: 'userCreatePost',
					action: 'Create a user on a Web Cloud Database',
				},
				{
					name: 'Delete a user on a Web Cloud Database',
					value: 'userDelete',
					action: 'Delete a user on a Web Cloud Database',
				},
				{
					name: 'Get user properties',
					value: 'userGet',
					action: 'Get user properties',
				},
				{
					name: 'Add grant on a Web Cloud Database',
					value: 'userGrantCreatePost',
					action: 'Add grant on a Web Cloud Database',
				},
				{
					name: 'Delete a grant from a Web Cloud Database',
					value: 'userGrantDelete',
					action: 'Delete a grant from a Web Cloud Database',
				},
				{
					name: 'Get information about the grants for a use...',
					value: 'userGrantGet',
					action: 'Get information about the grants for a user in a Web Cloud Database',
				},
				{
					name: 'Get all information about the grants for a...',
					value: 'userGrantListGet',
					action: 'Get all information about the grants for a user in a Web Cloud Database',
				},
				{
					name: 'Update the permissions of a grant for a us...',
					value: 'userGrantUpdatePost',
					action: 'Update the permissions of a grant for a user on a Web Cloud Database',
				},
				{
					name: 'List users on a Web Cloud Database',
					value: 'userListGet',
					action: 'List users on a Web Cloud Database',
				},
				{
					name: 'Delete access from the web hosting network...',
					value: 'webhostingNetworkDelete',
					action: 'Delete access from the web hosting network on a Web Cloud Database',
				},
				{
					name: 'Get Webhosting network status',
					value: 'webhostingNetworkGet',
					action: 'Get Webhosting network status',
				},
				{
					name: 'Permit access from the web hosting network...',
					value: 'webhostingNetworkPost',
					action: 'Permit access from the web hosting network on a Web Cloud Database',
				},
				{
					name: 'List linked webs',
					value: 'websGet',
					action: 'List linked webs',
				},
				{
					name: 'Create a new IP whitelist in a Web Cloud D...',
					value: 'whitelistCreatePost',
					action: 'Create a new IP whitelist in a Web Cloud Database',
				},
				{
					name: 'Delete an IP whitelist from a Web Cloud Da...',
					value: 'whitelistDelete',
					action: 'Delete an IP whitelist from a Web Cloud Database',
				},
				{
					name: 'Get whitelist properties',
					value: 'whitelistGet',
					action: 'Get whitelist properties',
				},
				{
					name: 'List whitelists on a Web Cloud Database',
					value: 'whitelistListGet',
					action: 'List whitelists on a Web Cloud Database',
				},
				{
					name: 'Update an IP whitelist in a Web Cloud Data...',
					value: 'whitelistUpdate',
					action: 'Update an IP whitelist in a Web Cloud Database',
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
			return executeAvailableOrderCapacitiesGet.call(this, itemIndex);
		case 'availableVersionsGet':
			return executeAvailableVersionsGet.call(this, itemIndex);
		case 'changeContactPost':
			return executeChangeContactPost.call(this, itemIndex);
		case 'changeFtpPasswordPost':
			return executeChangeFtpPasswordPost.call(this, itemIndex);
		case 'changeVersionPost':
			return executeChangeVersionPost.call(this, itemIndex);
		case 'configGet':
			return executeConfigGet.call(this, itemIndex);
		case 'configUpdatePost':
			return executeConfigUpdatePost.call(this, itemIndex);
		case 'confirmTerminationPost':
			return executeConfirmTerminationPost.call(this, itemIndex);
		case 'cpuThrottleGet':
			return executeCpuThrottleGet.call(this, itemIndex);
		case 'database_Delete':
			return executeDatabase_Delete.call(this, itemIndex);
		case 'database_Get':
			return executeDatabase_Get.call(this, itemIndex);
		case 'databaseCopyCreatePost':
			return executeDatabaseCopyCreatePost.call(this, itemIndex);
		case 'databaseCopyDelete':
			return executeDatabaseCopyDelete.call(this, itemIndex);
		case 'databaseCopyGet':
			return executeDatabaseCopyGet.call(this, itemIndex);
		case 'databaseCopyListGet':
			return executeDatabaseCopyListGet.call(this, itemIndex);
		case 'databaseCopyRestorePost':
			return executeDatabaseCopyRestorePost.call(this, itemIndex);
		case 'databaseCreatePost':
			return executeDatabaseCreatePost.call(this, itemIndex);
		case 'databaseDumpCreatePost':
			return executeDatabaseDumpCreatePost.call(this, itemIndex);
		case 'databaseDumpDelete':
			return executeDatabaseDumpDelete.call(this, itemIndex);
		case 'databaseDumpGet':
			return executeDatabaseDumpGet.call(this, itemIndex);
		case 'databaseDumpListGet':
			return executeDatabaseDumpListGet.call(this, itemIndex);
		case 'databaseDumpRestorePost':
			return executeDatabaseDumpRestorePost.call(this, itemIndex);
		case 'databaseExtensionDisablePost':
			return executeDatabaseExtensionDisablePost.call(this, itemIndex);
		case 'databaseExtensionEnablePost':
			return executeDatabaseExtensionEnablePost.call(this, itemIndex);
		case 'databaseExtensionGet':
			return executeDatabaseExtensionGet.call(this, itemIndex);
		case 'databaseExtensionListGet':
			return executeDatabaseExtensionListGet.call(this, itemIndex);
		case 'databaseImportPost':
			return executeDatabaseImportPost.call(this, itemIndex);
		case 'databaseListGet':
			return executeDatabaseListGet.call(this, itemIndex);
		case 'databaseWizardPost':
			return executeDatabaseWizardPost.call(this, itemIndex);
		case 'dumpDelete':
			return executeDumpDelete.call(this, itemIndex);
		case 'dumpGet':
			return executeDumpGet.call(this, itemIndex);
		case 'dumpListGet':
			return executeDumpListGet.call(this, itemIndex);
		case 'dumpRestorePost':
			return executeDumpRestorePost.call(this, itemIndex);
		case 'generateTemporaryLogsLinkPost':
			return executeGenerateTemporaryLogsLinkPost.call(this, itemIndex);
		case 'listGet':
			return executeListGet.call(this, itemIndex);
		case 'logKindGet':
			return executeLogKindGet.call(this, itemIndex);
		case 'logKindNameGet':
			return executeLogKindNameGet.call(this, itemIndex);
		case 'logSubscriptionCreatePost':
			return executeLogSubscriptionCreatePost.call(this, itemIndex);
		case 'logSubscriptionDelete':
			return executeLogSubscriptionDelete.call(this, itemIndex);
		case 'logSubscriptionGet':
			return executeLogSubscriptionGet.call(this, itemIndex);
		case 'logSubscriptionListGet':
			return executeLogSubscriptionListGet.call(this, itemIndex);
		case 'logUrlPost':
			return executeLogUrlPost.call(this, itemIndex);
		case 'metricsTokenGet':
			return executeMetricsTokenGet.call(this, itemIndex);
		case 'oomGet':
			return executeOomGet.call(this, itemIndex);
		case 'quotaRefreshPost':
			return executeQuotaRefreshPost.call(this, itemIndex);
		case 'restartPost':
			return executeRestartPost.call(this, itemIndex);
		case 'serviceGet':
			return executeServiceGet.call(this, itemIndex);
		case 'serviceInfosGet':
			return executeServiceInfosGet.call(this, itemIndex);
		case 'serviceInfosUpdate':
			return executeServiceInfosUpdate.call(this, itemIndex);
		case 'serviceUpdate':
			return executeServiceUpdate.call(this, itemIndex);
		case 'taskGet':
			return executeTaskGet.call(this, itemIndex);
		case 'taskListGet':
			return executeTaskListGet.call(this, itemIndex);
		case 'terminatePost':
			return executeTerminatePost.call(this, itemIndex);
		case 'userChangePasswordPost':
			return executeUserChangePasswordPost.call(this, itemIndex);
		case 'userCreatePost':
			return executeUserCreatePost.call(this, itemIndex);
		case 'userDelete':
			return executeUserDelete.call(this, itemIndex);
		case 'userGet':
			return executeUserGet.call(this, itemIndex);
		case 'userGrantCreatePost':
			return executeUserGrantCreatePost.call(this, itemIndex);
		case 'userGrantDelete':
			return executeUserGrantDelete.call(this, itemIndex);
		case 'userGrantGet':
			return executeUserGrantGet.call(this, itemIndex);
		case 'userGrantListGet':
			return executeUserGrantListGet.call(this, itemIndex);
		case 'userGrantUpdatePost':
			return executeUserGrantUpdatePost.call(this, itemIndex);
		case 'userListGet':
			return executeUserListGet.call(this, itemIndex);
		case 'webhostingNetworkDelete':
			return executeWebhostingNetworkDelete.call(this, itemIndex);
		case 'webhostingNetworkGet':
			return executeWebhostingNetworkGet.call(this, itemIndex);
		case 'webhostingNetworkPost':
			return executeWebhostingNetworkPost.call(this, itemIndex);
		case 'websGet':
			return executeWebsGet.call(this, itemIndex);
		case 'whitelistCreatePost':
			return executeWhitelistCreatePost.call(this, itemIndex);
		case 'whitelistDelete':
			return executeWhitelistDelete.call(this, itemIndex);
		case 'whitelistGet':
			return executeWhitelistGet.call(this, itemIndex);
		case 'whitelistListGet':
			return executeWhitelistListGet.call(this, itemIndex);
		case 'whitelistUpdate':
			return executeWhitelistUpdate.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hostingPrivateDatabase"`);
}
