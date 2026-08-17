import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionConfigGet,
	execute as executeConfigGet,
} from './config/configGet.operation';
import {
	description as descriptionConfigUpdatePost,
	execute as executeConfigUpdatePost,
} from './config/configUpdatePost.operation';
import {
	description as descriptionDatabaseCreatePost,
	execute as executeDatabaseCreatePost,
} from './database/databaseCreatePost.operation';
import {
	description as descriptionDatabaseListGet,
	execute as executeDatabaseListGet,
} from './database/databaseListGet.operation';
import {
	description as descriptionDatabaseCopyCreatePost,
	execute as executeDatabaseCopyCreatePost,
} from './databaseCopy/databaseCopyCreatePost.operation';
import {
	description as descriptionDatabaseCopyListGet,
	execute as executeDatabaseCopyListGet,
} from './databaseCopy/databaseCopyListGet.operation';
import {
	description as descriptionDatabaseCopyRestorePost,
	execute as executeDatabaseCopyRestorePost,
} from './databaseCopy/databaseCopyRestorePost.operation';
import {
	description as descriptionDatabaseDumpCreatePost,
	execute as executeDatabaseDumpCreatePost,
} from './databaseDump/databaseDumpCreatePost.operation';
import {
	description as descriptionDatabaseDumpListGet,
	execute as executeDatabaseDumpListGet,
} from './databaseDump/databaseDumpListGet.operation';
import {
	description as descriptionDatabaseDumpRestorePost,
	execute as executeDatabaseDumpRestorePost,
} from './databaseDump/databaseDumpRestorePost.operation';
import {
	description as descriptionDatabaseExtensionListGet,
	execute as executeDatabaseExtensionListGet,
} from './databaseExtension/databaseExtensionListGet.operation';
import {
	description as descriptionDatabaseImportPost,
	execute as executeDatabaseImportPost,
} from './databaseImport/databaseImportPost.operation';
import {
	description as descriptionLogKindGet,
	execute as executeLogKindGet,
} from './log/logKindGet.operation';
import {
	description as descriptionLogUrlPost,
	execute as executeLogUrlPost,
} from './log/logUrlPost.operation';
import {
	description as descriptionLogSubscriptionCreatePost,
	execute as executeLogSubscriptionCreatePost,
} from './logSubscription/logSubscriptionCreatePost.operation';
import {
	description as descriptionLogSubscriptionListGet,
	execute as executeLogSubscriptionListGet,
} from './logSubscription/logSubscriptionListGet.operation';
import {
	description as descriptionAvailableOrderCapacitiesGet,
	execute as executeAvailableOrderCapacitiesGet,
} from './service/availableOrderCapacitiesGet.operation';
import {
	description as descriptionAvailableVersionsGet,
	execute as executeAvailableVersionsGet,
} from './service/availableVersionsGet.operation';
import {
	description as descriptionChangeContactPost,
	execute as executeChangeContactPost,
} from './service/changeContactPost.operation';
import {
	description as descriptionChangeFtpPasswordPost,
	execute as executeChangeFtpPasswordPost,
} from './service/changeFtpPasswordPost.operation';
import {
	description as descriptionChangeVersionPost,
	execute as executeChangeVersionPost,
} from './service/changeVersionPost.operation';
import {
	description as descriptionConfirmTerminationPost,
	execute as executeConfirmTerminationPost,
} from './service/confirmTerminationPost.operation';
import {
	description as descriptionCpuThrottleGet,
	execute as executeCpuThrottleGet,
} from './service/cpuThrottleGet.operation';
import {
	description as descriptionDatabaseCopyDelete,
	execute as executeDatabaseCopyDelete,
} from './service/databaseCopyDelete.operation';
import {
	description as descriptionDatabaseCopyGet,
	execute as executeDatabaseCopyGet,
} from './service/databaseCopyGet.operation';
import {
	description as descriptionDatabaseDumpDelete,
	execute as executeDatabaseDumpDelete,
} from './service/databaseDumpDelete.operation';
import {
	description as descriptionDatabaseDumpGet,
	execute as executeDatabaseDumpGet,
} from './service/databaseDumpGet.operation';
import {
	description as descriptionDatabaseExtensionDisablePost,
	execute as executeDatabaseExtensionDisablePost,
} from './service/databaseExtensionDisablePost.operation';
import {
	description as descriptionDatabaseExtensionEnablePost,
	execute as executeDatabaseExtensionEnablePost,
} from './service/databaseExtensionEnablePost.operation';
import {
	description as descriptionDatabaseExtensionGet,
	execute as executeDatabaseExtensionGet,
} from './service/databaseExtensionGet.operation';
import {
	description as descriptionDatabaseWizardPost,
	execute as executeDatabaseWizardPost,
} from './service/databaseWizardPost.operation';
import {
	description as descriptionDatabase_Delete,
	execute as executeDatabase_Delete,
} from './service/database_Delete.operation';
import {
	description as descriptionDatabase_Get,
	execute as executeDatabase_Get,
} from './service/database_Get.operation';
import {
	description as descriptionDumpDelete,
	execute as executeDumpDelete,
} from './service/dumpDelete.operation';
import {
	description as descriptionDumpRestorePost,
	execute as executeDumpRestorePost,
} from './service/dumpRestorePost.operation';
import {
	description as descriptionGenerateTemporaryLogsLinkPost,
	execute as executeGenerateTemporaryLogsLinkPost,
} from './service/generateTemporaryLogsLinkPost.operation';
import {
	description as descriptionListGet,
	execute as executeListGet,
} from './service/listGet.operation';
import {
	description as descriptionLogKindNameGet,
	execute as executeLogKindNameGet,
} from './service/logKindNameGet.operation';
import {
	description as descriptionLogSubscriptionDelete,
	execute as executeLogSubscriptionDelete,
} from './service/logSubscriptionDelete.operation';
import {
	description as descriptionLogSubscriptionGet,
	execute as executeLogSubscriptionGet,
} from './service/logSubscriptionGet.operation';
import {
	description as descriptionMetricsTokenGet,
	execute as executeMetricsTokenGet,
} from './service/metricsTokenGet.operation';
import {
	description as descriptionOomGet,
	execute as executeOomGet,
} from './service/oomGet.operation';
import {
	description as descriptionQuotaRefreshPost,
	execute as executeQuotaRefreshPost,
} from './service/quotaRefreshPost.operation';
import {
	description as descriptionRestartPost,
	execute as executeRestartPost,
} from './service/restartPost.operation';
import {
	description as descriptionServiceGet,
	execute as executeServiceGet,
} from './service/serviceGet.operation';
import {
	description as descriptionServiceUpdate,
	execute as executeServiceUpdate,
} from './service/serviceUpdate.operation';
import {
	description as descriptionTaskGet,
	execute as executeTaskGet,
} from './service/taskGet.operation';
import {
	description as descriptionTerminatePost,
	execute as executeTerminatePost,
} from './service/terminatePost.operation';
import {
	description as descriptionUserChangePasswordPost,
	execute as executeUserChangePasswordPost,
} from './service/userChangePasswordPost.operation';
import {
	description as descriptionUserDelete,
	execute as executeUserDelete,
} from './service/userDelete.operation';
import {
	description as descriptionUserGet,
	execute as executeUserGet,
} from './service/userGet.operation';
import {
	description as descriptionUserGrantDelete,
	execute as executeUserGrantDelete,
} from './service/userGrantDelete.operation';
import {
	description as descriptionUserGrantGet,
	execute as executeUserGrantGet,
} from './service/userGrantGet.operation';
import {
	description as descriptionUserGrantUpdatePost,
	execute as executeUserGrantUpdatePost,
} from './service/userGrantUpdatePost.operation';
import {
	description as descriptionWebhostingNetworkDelete,
	execute as executeWebhostingNetworkDelete,
} from './service/webhostingNetworkDelete.operation';
import {
	description as descriptionWebhostingNetworkGet,
	execute as executeWebhostingNetworkGet,
} from './service/webhostingNetworkGet.operation';
import {
	description as descriptionWebhostingNetworkPost,
	execute as executeWebhostingNetworkPost,
} from './service/webhostingNetworkPost.operation';
import {
	description as descriptionWebsGet,
	execute as executeWebsGet,
} from './service/websGet.operation';
import {
	description as descriptionWhitelistDelete,
	execute as executeWhitelistDelete,
} from './service/whitelistDelete.operation';
import {
	description as descriptionWhitelistGet,
	execute as executeWhitelistGet,
} from './service/whitelistGet.operation';
import {
	description as descriptionWhitelistUpdate,
	execute as executeWhitelistUpdate,
} from './service/whitelistUpdate.operation';
import {
	description as descriptionServiceInfosGet,
	execute as executeServiceInfosGet,
} from './serviceInfos/serviceInfosGet.operation';
import {
	description as descriptionServiceInfosUpdate,
	execute as executeServiceInfosUpdate,
} from './serviceInfos/serviceInfosUpdate.operation';
import {
	description as descriptionTaskListGet,
	execute as executeTaskListGet,
} from './task/taskListGet.operation';
import {
	description as descriptionUserCreatePost,
	execute as executeUserCreatePost,
} from './user/userCreatePost.operation';
import {
	description as descriptionUserListGet,
	execute as executeUserListGet,
} from './user/userListGet.operation';
import {
	description as descriptionUserGrantCreatePost,
	execute as executeUserGrantCreatePost,
} from './userGrant/userGrantCreatePost.operation';
import {
	description as descriptionUserGrantListGet,
	execute as executeUserGrantListGet,
} from './userGrant/userGrantListGet.operation';
import {
	description as descriptionWhitelistCreatePost,
	execute as executeWhitelistCreatePost,
} from './whitelist/whitelistCreatePost.operation';
import {
	description as descriptionWhitelistListGet,
	execute as executeWhitelistListGet,
} from './whitelist/whitelistListGet.operation';

const { description, execute } = createOperationDispatcher(
	'hostingPrivateDatabaseOperation',
	'hostingPrivateDatabase',
	[
	{
		name: 'Add Grant on a Web Cloud Database',
		value: 'userGrantCreatePost',
		action: 'Add grant on a Web Cloud Database',
		execute: executeUserGrantCreatePost,
		description: descriptionUserGrantCreatePost,
	},
	{
		name: 'Alter a Web Cloud Database Properties',
		value: 'serviceUpdate',
		action: 'Alter a Web Cloud Database properties',
		execute: executeServiceUpdate,
		description: descriptionServiceUpdate,
	},
	{
		name: 'Ask for the Termination of Your Service',
		value: 'terminatePost',
		action: 'Ask for the termination of your service',
		execute: executeTerminatePost,
		description: descriptionTerminatePost,
	},
	{
		name: 'Change DBMS Version of Your Web Cloud Data...',
		value: 'changeVersionPost',
		action: 'Change DBMS version of your Web Cloud Database',
		execute: executeChangeVersionPost,
		description: descriptionChangeVersionPost,
	},
	{
		name: 'Change FTP Password of Your Web Cloud Data...',
		value: 'changeFtpPasswordPost',
		action: 'Change FTP password of your Web Cloud Database',
		execute: executeChangeFtpPasswordPost,
		description: descriptionChangeFtpPasswordPost,
	},
	{
		name: 'Change the Password of a User on a Web Clo...',
		value: 'userChangePasswordPost',
		action: 'Change the password of a user on a Web Cloud Database',
		execute: executeUserChangePasswordPost,
		description: descriptionUserChangePasswordPost,
	},
	{
		name: 'Confirm Service Termination',
		value: 'confirmTerminationPost',
		action: 'Confirm service termination',
		execute: executeConfirmTerminationPost,
		description: descriptionConfirmTerminationPost,
	},
	{
		name: 'Create a New Database Copy in a Web Cloud ...',
		value: 'databaseCopyCreatePost',
		action: 'Create a new database copy in a Web Cloud Database',
		execute: executeDatabaseCopyCreatePost,
		description: descriptionDatabaseCopyCreatePost,
	},
	{
		name: 'Create a New Database in a Web Cloud Database',
		value: 'databaseCreatePost',
		action: 'Create a new database in a Web Cloud Database',
		execute: executeDatabaseCreatePost,
		description: descriptionDatabaseCreatePost,
	},
	{
		name: 'Create a New Database/user and Grant It',
		value: 'databaseWizardPost',
		action: 'Create a new database/user and grant it',
		execute: executeDatabaseWizardPost,
		description: descriptionDatabaseWizardPost,
	},
	{
		name: 'Create a New IP Whitelist in a Web Cloud D...',
		value: 'whitelistCreatePost',
		action: 'Create a new IP whitelist in a Web Cloud Database',
		execute: executeWhitelistCreatePost,
		description: descriptionWhitelistCreatePost,
	},
	{
		name: 'Create a User on a Web Cloud Database',
		value: 'userCreatePost',
		action: 'Create a user on a Web Cloud Database',
		execute: executeUserCreatePost,
		description: descriptionUserCreatePost,
	},
	{
		name: 'Create Subscription to Log to Customer for...',
		value: 'logSubscriptionCreatePost',
		action: 'Create subscription to log to customer for a Web Cloud Database',
		execute: executeLogSubscriptionCreatePost,
		description: descriptionLogSubscriptionCreatePost,
	},
	{
		name: 'Delete a Database Dump From a Web Cloud Da...',
		value: 'dumpDelete',
		action: 'Delete a database dump from a Web Cloud Database',
		execute: executeDumpDelete,
		description: descriptionDumpDelete,
	},
	{
		name: 'Delete a Database From a Web Cloud Database',
		value: 'database_Delete',
		action: 'Delete a database from a Web Cloud Database',
		execute: executeDatabase_Delete,
		description: descriptionDatabase_Delete,
	},
	{
		name: 'Delete a Grant From a Web Cloud Database',
		value: 'userGrantDelete',
		action: 'Delete a grant from a Web Cloud Database',
		execute: executeUserGrantDelete,
		description: descriptionUserGrantDelete,
	},
	{
		name: 'Delete a Subscription',
		value: 'logSubscriptionDelete',
		action: 'Delete a subscription',
		execute: executeLogSubscriptionDelete,
		description: descriptionLogSubscriptionDelete,
	},
	{
		name: 'Delete a User on a Web Cloud Database',
		value: 'userDelete',
		action: 'Delete a user on a Web Cloud Database',
		execute: executeUserDelete,
		description: descriptionUserDelete,
	},
	{
		name: 'Delete Access From the Web Hosting network...',
		value: 'webhostingNetworkDelete',
		action: 'Delete access from the web hosting network on a Web Cloud Database',
		execute: executeWebhostingNetworkDelete,
		description: descriptionWebhostingNetworkDelete,
	},
	{
		name: 'Delete an IP Whitelist From a Web Cloud Da...',
		value: 'whitelistDelete',
		action: 'Delete an IP whitelist from a Web Cloud Database',
		execute: executeWhitelistDelete,
		description: descriptionWhitelistDelete,
	},
	{
		name: 'Delete Dump Before Expiration Date',
		value: 'databaseDumpDelete',
		action: 'Delete dump before expiration date',
		execute: executeDatabaseDumpDelete,
		description: descriptionDatabaseDumpDelete,
	},
	{
		name: 'Delete the Database Copy of a Web Cloud Da...',
		value: 'databaseCopyDelete',
		action: 'Delete the database copy of a Web Cloud Database',
		execute: executeDatabaseCopyDelete,
		description: descriptionDatabaseCopyDelete,
	},
	{
		name: 'Disable an Extension on a Web Cloud Database',
		value: 'databaseExtensionDisablePost',
		action: 'Disable an extension on a Web Cloud Database',
		execute: executeDatabaseExtensionDisablePost,
		description: descriptionDatabaseExtensionDisablePost,
	},
	{
		name: 'Enable an Extension on a Web Cloud Database',
		value: 'databaseExtensionEnablePost',
		action: 'Enable an extension on a Web Cloud Database',
		execute: executeDatabaseExtensionEnablePost,
		description: descriptionDatabaseExtensionEnablePost,
	},
	{
		name: 'Generate a Metrics Token',
		value: 'metricsTokenGet',
		action: 'Generate a metrics token',
		execute: executeMetricsTokenGet,
		description: descriptionMetricsTokenGet,
	},
	{
		name: 'Generate a Temporary Link to Access Logs f...',
		value: 'generateTemporaryLogsLinkPost',
		action: 'Generate a temporary link to access logs for a Web Cloud Database',
		execute: executeGenerateTemporaryLogsLinkPost,
		description: descriptionGenerateTemporaryLogsLinkPost,
	},
	{
		name: 'Generate a Temporary URL to Retrieve Logs',
		value: 'logUrlPost',
		action: 'Generate a temporary URL to retrieve logs',
		execute: executeLogUrlPost,
		description: descriptionLogUrlPost,
	},
	{
		name: 'Get a Database Dump From a Web Cloud Database',
		value: 'databaseDumpGet',
		action: 'Get a database dump from a Web Cloud Database',
		execute: executeDatabaseDumpGet,
		description: descriptionDatabaseDumpGet,
	},
	{
		name: 'Get a Log Kind',
		value: 'logKindNameGet',
		action: 'Get a log kind',
		execute: executeLogKindNameGet,
		description: descriptionLogKindNameGet,
	},
	{
		name: 'Get a Web Cloud Database Properties',
		value: 'serviceGet',
		action: 'Get a Web Cloud Database properties',
		execute: executeServiceGet,
		description: descriptionServiceGet,
	},
	{
		name: 'Get All Database Dump From a Web Cloud Dat...',
		value: 'databaseDumpListGet',
		action: 'Get all database dump from a Web Cloud Database',
		execute: executeDatabaseDumpListGet,
		description: descriptionDatabaseDumpListGet,
	},
	{
		name: 'Get All Information About the Grants for a...',
		value: 'userGrantListGet',
		action: 'Get all information about the grants for a user in a Web Cloud Database',
		execute: executeUserGrantListGet,
		description: descriptionUserGrantListGet,
	},
	{
		name: 'Get Available Order Capacities',
		value: 'availableOrderCapacitiesGet',
		action: 'Get available order capacities',
		execute: executeAvailableOrderCapacitiesGet,
		description: descriptionAvailableOrderCapacitiesGet,
		default: true,
	},
	{
		name: 'Get Database Copy Properties',
		value: 'databaseCopyGet',
		action: 'Get database copy properties',
		execute: executeDatabaseCopyGet,
		description: descriptionDatabaseCopyGet,
	},
	{
		name: 'Get Database Properties',
		value: 'database_Get',
		action: 'Get database properties',
		execute: executeDatabase_Get,
		description: descriptionDatabase_Get,
	},
	{
		name: 'Get Information About the Grants for a use...',
		value: 'userGrantGet',
		action: 'Get information about the grants for a user in a Web Cloud Database',
		execute: executeUserGrantGet,
		description: descriptionUserGrantGet,
	},
	{
		name: 'Get Properties of a Webcloud Database exte...',
		value: 'databaseExtensionGet',
		action: 'Get properties of a Webcloud Database extension',
		execute: executeDatabaseExtensionGet,
		description: descriptionDatabaseExtensionGet,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information',
		execute: executeServiceInfosGet,
		description: descriptionServiceInfosGet,
	},
	{
		name: 'Get Subscription Details',
		value: 'logSubscriptionGet',
		action: 'Get subscription details',
		execute: executeLogSubscriptionGet,
		description: descriptionLogSubscriptionGet,
	},
	{
		name: 'Get Task Details',
		value: 'taskGet',
		action: 'Get task details',
		execute: executeTaskGet,
		description: descriptionTaskGet,
	},
	{
		name: 'Get the Availables Versions for This priva...',
		value: 'availableVersionsGet',
		action: 'Get the availables versions for this private database',
		execute: executeAvailableVersionsGet,
		description: descriptionAvailableVersionsGet,
	},
	{
		name: 'Get the Current Configuration for This Web...',
		value: 'configGet',
		action: 'Get the current configuration for this Web Cloud Database',
		execute: executeConfigGet,
		description: descriptionConfigGet,
	},
	{
		name: 'Get User Properties',
		value: 'userGet',
		action: 'Get user properties',
		execute: executeUserGet,
		description: descriptionUserGet,
	},
	{
		name: 'Get Webhosting Network Status',
		value: 'webhostingNetworkGet',
		action: 'Get Webhosting network status',
		execute: executeWebhostingNetworkGet,
		description: descriptionWebhostingNetworkGet,
	},
	{
		name: 'Get Whitelist Properties',
		value: 'whitelistGet',
		action: 'Get whitelist properties',
		execute: executeWhitelistGet,
		description: descriptionWhitelistGet,
	},
	{
		name: 'Import a Database Into a Web Cloud Database',
		value: 'databaseImportPost',
		action: 'Import a database into a Web Cloud Database',
		execute: executeDatabaseImportPost,
		description: descriptionDatabaseImportPost,
	},
	{
		name: 'Launch a Contact Change Procedure',
		value: 'changeContactPost',
		action: 'Launch a contact change procedure',
		execute: executeChangeContactPost,
		description: descriptionChangeContactPost,
	},
	{
		name: 'List Available Log Kinds',
		value: 'logKindGet',
		action: 'List available log kinds',
		execute: executeLogKindGet,
		description: descriptionLogKindGet,
	},
	{
		name: 'List Available Web Cloud Databases',
		value: 'listGet',
		action: 'List available Web Cloud Databases',
		execute: executeListGet,
		description: descriptionListGet,
	},
	{
		name: 'List Database Copy of a privateDatabase',
		value: 'databaseCopyListGet',
		action: 'List database copy of a privateDatabase',
		execute: executeDatabaseCopyListGet,
		description: descriptionDatabaseCopyListGet,
	},
	{
		name: 'List Databases on a privateDatabase',
		value: 'databaseListGet',
		action: 'List databases on a privateDatabase',
		execute: executeDatabaseListGet,
		description: descriptionDatabaseListGet,
	},
	{
		name: 'List Extensions Available for a Webcloud D...',
		value: 'databaseExtensionListGet',
		action: 'List extensions available for a Webcloud Database',
		execute: executeDatabaseExtensionListGet,
		description: descriptionDatabaseExtensionListGet,
	},
	{
		name: 'List Linked Webs',
		value: 'websGet',
		action: 'List linked webs',
		execute: executeWebsGet,
		description: descriptionWebsGet,
	},
	{
		name: 'List of Privatesql CPU Throttle',
		value: 'cpuThrottleGet',
		action: 'List of privatesql CPU throttle',
		execute: executeCpuThrottleGet,
		description: descriptionCpuThrottleGet,
	},
	{
		name: 'List of Privatesql OOM Kill',
		value: 'oomGet',
		action: 'List of privatesql OOM kill',
		execute: executeOomGet,
		description: descriptionOomGet,
	},
	{
		name: 'List Subscription IDs for Web Cloud Database',
		value: 'logSubscriptionListGet',
		action: 'List subscription IDs for Web Cloud Database',
		execute: executeLogSubscriptionListGet,
		description: descriptionLogSubscriptionListGet,
	},
	{
		name: 'List Tasks for a Webcloud Database',
		value: 'taskListGet',
		action: 'List tasks for a Webcloud Database',
		execute: executeTaskListGet,
		description: descriptionTaskListGet,
	},
	{
		name: 'List Users on a Web Cloud Database',
		value: 'userListGet',
		action: 'List users on a Web Cloud Database',
		execute: executeUserListGet,
		description: descriptionUserListGet,
	},
	{
		name: 'List Whitelists on a Web Cloud Database',
		value: 'whitelistListGet',
		action: 'List whitelists on a Web Cloud Database',
		execute: executeWhitelistListGet,
		description: descriptionWhitelistListGet,
	},
	{
		name: 'Permit Access From the Web Hosting network...',
		value: 'webhostingNetworkPost',
		action: 'Permit access from the web hosting network on a Web Cloud Database',
		execute: executeWebhostingNetworkPost,
		description: descriptionWebhostingNetworkPost,
	},
	{
		name: 'Refresh the Quota of Your Web Cloud Database',
		value: 'quotaRefreshPost',
		action: 'Refresh the quota of your Web Cloud Database',
		execute: executeQuotaRefreshPost,
		description: descriptionQuotaRefreshPost,
	},
	{
		name: 'Request the Copy Into a Web Cloud Database',
		value: 'databaseCopyRestorePost',
		action: 'Request the copy into a Web Cloud Database',
		execute: executeDatabaseCopyRestorePost,
		description: descriptionDatabaseCopyRestorePost,
	},
	{
		name: 'Request the Dump of This Database (an emai...',
		value: 'databaseDumpCreatePost',
		action: 'Request the dump of this database (an email will be sent with a link available 30 days)',
		execute: executeDatabaseDumpCreatePost,
		description: descriptionDatabaseDumpCreatePost,
	},
	{
		name: 'Request the Restore From This Dump',
		value: 'databaseDumpRestorePost',
		action: 'Request the restore from this dump',
		execute: executeDatabaseDumpRestorePost,
		description: descriptionDatabaseDumpRestorePost,
	},
	{
		name: 'Restart the Web Cloud Database',
		value: 'restartPost',
		action: 'Restart the Web Cloud Database',
		execute: executeRestartPost,
		description: descriptionRestartPost,
	},
	{
		name: 'Restore a Database Dump Into a Web Cloud D...',
		value: 'dumpRestorePost',
		action: 'Restore a database dump into a Web Cloud Database',
		execute: executeDumpRestorePost,
		description: descriptionDumpRestorePost,
	},
	{
		name: 'Update an IP Whitelist in a Web Cloud Data...',
		value: 'whitelistUpdate',
		action: 'Update an IP whitelist in a Web Cloud Database',
		execute: executeWhitelistUpdate,
		description: descriptionWhitelistUpdate,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdate',
		action: 'Update service information',
		execute: executeServiceInfosUpdate,
		description: descriptionServiceInfosUpdate,
	},
	{
		name: 'Update the Configuration of This Web Cloud...',
		value: 'configUpdatePost',
		action: 'Update the configuration of this Web Cloud Database',
		execute: executeConfigUpdatePost,
		description: descriptionConfigUpdatePost,
	},
	{
		name: 'Update the Permissions of a Grant for a us...',
		value: 'userGrantUpdatePost',
		action: 'Update the permissions of a grant for a user on a Web Cloud Database',
		execute: executeUserGrantUpdatePost,
		description: descriptionUserGrantUpdatePost,
	},
	],
);

export { description, execute };
