/**
 * @brief Hosting resource operations for n8n node
 *
 * Provides operations for managing OVH hosting services including:
 * - Private Database hosting (list, get, update, restart)
 * - Web hosting operations
 * - Sub-resources: databases, users, tasks, whitelists, config, versions, serviceInfos, lifecycle, etc.
 *
 * All operations are flattened into a single dropdown for simplicity.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

// Local operations
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import { execute as executeRestart, description as descriptionRestart } from './restart.operation';

// Sub-resource operations (namespace imports)
import * as availableVersions from './resources/availableVersions';
import * as config from './resources/config';
import * as hostingDatabase from './resources/hostingDatabase';
import * as hostingTask from './resources/hostingTask';
import * as hostingUser from './resources/hostingUser';
import * as hostingWhitelist from './resources/hostingWhitelist';
import * as serviceInfos from './resources/serviceInfos';
import * as lifecycle from './resources/lifecycle';
import * as databaseCopy from './resources/databaseCopy';
import * as databaseDump from './resources/databaseDump';
import * as databaseExtension from './resources/databaseExtension';
import * as databaseImport from './resources/databaseImport';
import * as databaseWizard from './resources/databaseWizard';
import * as dump from './resources/dump';
import * as userGrant from './resources/userGrant';
import * as userChangePassword from './resources/userChangePassword';
import * as log from './resources/log';
import * as metricsToken from './resources/metricsToken';
import * as cpuThrottle from './resources/cpuThrottle';
import * as oom from './resources/oom';
import * as webhostingNetwork from './resources/webhostingNetwork';
import * as webs from './resources/webs';
import * as quotaRefresh from './resources/quotaRefresh';
import * as generateTemporaryLogsLink from './resources/generateTemporaryLogsLink';
import * as availableOrderCapacities from './resources/availableOrderCapacities';
import * as tasks from './resources/tasks';
import * as whitelist from './resources/whitelist';

// Web sub-resource operations (namespace imports)
import * as webServiceInfos from './web/resources/serviceInfos';
import * as webAttachedDomain from './web/resources/attachedDomain';
import * as webAttachedDomainSsl from './web/resources/attachedDomain/ssl';
import * as webCdnDomainOptions from './web/resources/cdn/domainOptions';
import * as webConfiguration from './web/resources/configuration';
import * as webCron from './web/resources/cron';
import * as webDatabase from './web/resources/database';
import * as webDatabaseCopy from './web/resources/database/copy';
import * as webDatabaseDump from './web/resources/database/dump';
import * as webDump from './web/resources/dump';
import * as webEmail from './web/resources/email';
import * as webEnvVar from './web/resources/envVar';
import * as webSshKey from './web/resources/sshKey';
import * as webLogSubscription from './web/resources/logSubscription';
import * as webModule from './web/resources/module';
import * as webOwnLogs from './web/resources/ownLogs';
import * as webRuntime from './web/resources/runtime';
import * as webSsl from './web/resources/ssl';
import * as webUser from './web/resources/user';
import * as webUserLogs from './web/resources/userLogs';
import * as webWebsite from './web/resources/website';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Hosting Operation',
			name: 'hostingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				// Private Database - Main operations
				{
					name: 'Available Versions List',
					value: 'availableVersionsList',
					action: 'List available DBMS versions for a private database',
				},
				{
					name: 'Config Get',
					value: 'configGet',
					action: 'Get database configuration',
				},
				{
					name: 'Config Update',
					value: 'configUpdate',
					action: 'Update database configuration',
				},
				{
					name: 'Database Create',
					value: 'hostingDatabaseCreate',
					action: 'Create a new database',
				},
				{
					name: 'Database Delete',
					value: 'hostingDatabaseDelete',
					action: 'Delete a database',
				},
				{
					name: 'Database Get',
					value: 'hostingDatabaseGet',
					action: 'Get database details',
				},
				{
					name: 'Database List',
					value: 'hostingDatabaseList',
					action: 'List all databases',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a private database',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all private database hosting services',
				},
				{
					name: 'Restart',
					value: 'restart',
					action: 'Restart a private database',
				},
				{
					name: 'Service Infos Get',
					value: 'serviceInfosGet',
					action: 'Get service information',
				},
				{
					name: 'Service Infos Update',
					value: 'serviceInfosUpdate',
					action: 'Update service information',
				},
				{
					name: 'Task Get',
					value: 'hostingTaskGet',
					action: 'Get task details',
				},
				{
					name: 'Task List',
					value: 'hostingTaskList',
					action: 'List all tasks',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a private database',
				},
				{
					name: 'User Create',
					value: 'hostingUserCreate',
					action: 'Create a new user',
				},
				{
					name: 'User Delete',
					value: 'hostingUserDelete',
					action: 'Delete a user',
				},
				{
					name: 'User Get',
					value: 'hostingUserGet',
					action: 'Get user details',
				},
				{
					name: 'User List',
					value: 'hostingUserList',
					action: 'List all users',
				},
				{
					name: 'Whitelist Create',
					value: 'hostingWhitelistCreate',
					action: 'Create a new whitelist entry',
				},
				{
					name: 'Whitelist Delete',
					value: 'hostingWhitelistDelete',
					action: 'Delete a whitelist entry',
				},
				{
					name: 'Whitelist Get',
					value: 'hostingWhitelistGet',
					action: 'Get whitelist entry details',
				},
				{
					name: 'Whitelist List',
					value: 'hostingWhitelistList',
					action: 'List all whitelisted IPs',
				},
				// Lifecycle operations
				{
					name: 'Lifecycle Change Contact',
					value: 'lifecycleChangeContact',
					action: 'Change contact for a private database',
				},
				{
					name: 'Lifecycle Change FTP Password',
					value: 'lifecycleChangeFtpPassword',
					action: 'Change FTP password for a private database',
				},
				{
					name: 'Lifecycle Change Version',
					value: 'lifecycleChangeVersion',
					action: 'Change version for a private database',
				},
				{
					name: 'Lifecycle Confirm Termination',
					value: 'lifecycleConfirmTermination',
					action: 'Confirm termination of a private database',
				},
				{
					name: 'Lifecycle Terminate',
					value: 'lifecycleTerminate',
					action: 'Terminate a private database',
				},
				// Database Copy operations
				{
					name: 'Database Copy Create',
					value: 'databaseCopyCreate',
					action: 'Create a database copy',
				},
				{
					name: 'Database Copy Delete',
					value: 'databaseCopyDelete',
					action: 'Delete a database copy',
				},
				{
					name: 'Database Copy Get',
					value: 'databaseCopyGet',
					action: 'Get database copy details',
				},
				{
					name: 'Database Copy List',
					value: 'databaseCopyList',
					action: 'List database copies',
				},
				{
					name: 'Database Copy Restore',
					value: 'databaseCopyRestore',
					action: 'Restore a database copy',
				},
				// Database Dump operations
				{
					name: 'Database Dump Create',
					value: 'databaseDumpCreate',
					action: 'Create a database dump',
				},
				{
					name: 'Database Dump Delete',
					value: 'databaseDumpDelete',
					action: 'Delete a database dump',
				},
				{
					name: 'Database Dump Get',
					value: 'databaseDumpGet',
					action: 'Get database dump details',
				},
				{
					name: 'Database Dump List',
					value: 'databaseDumpList',
					action: 'List database dumps',
				},
				{
					name: 'Database Dump Restore',
					value: 'databaseDumpRestore',
					action: 'Restore a database dump',
				},
				// Database Extension operations
				{
					name: 'Database Extension Disable',
					value: 'databaseExtensionDisable',
					action: 'Disable a database extension',
				},
				{
					name: 'Database Extension Enable',
					value: 'databaseExtensionEnable',
					action: 'Enable a database extension',
				},
				{
					name: 'Database Extension Get',
					value: 'databaseExtensionGet',
					action: 'Get database extension details',
				},
				{
					name: 'Database Extension List',
					value: 'databaseExtensionList',
					action: 'List database extensions',
				},
				// Database Import operations
				{
					name: 'Database Import Create',
					value: 'databaseImportCreate',
					action: 'Create a database import',
				},
				// Database Wizard operations
				{
					name: 'Database Wizard Create',
					value: 'databaseWizardCreate',
					action: 'Create a database via wizard',
				},
				// Dump operations
				{
					name: 'Dump Delete',
					value: 'dumpDelete',
					action: 'Delete a dump',
				},
				{
					name: 'Dump Get',
					value: 'dumpGet',
					action: 'Get dump details',
				},
				{
					name: 'Dump List',
					value: 'dumpList',
					action: 'List dumps',
				},
				{
					name: 'Dump Restore',
					value: 'dumpRestore',
					action: 'Restore a dump',
				},
				// User Grant operations
				{
					name: 'User Grant Create',
					value: 'userGrantCreate',
					action: 'Create a user grant',
				},
				{
					name: 'User Grant Delete',
					value: 'userGrantDelete',
					action: 'Delete a user grant',
				},
				{
					name: 'User Grant Get',
					value: 'userGrantGet',
					action: 'Get user grant details',
				},
				{
					name: 'User Grant List',
					value: 'userGrantList',
					action: 'List user grants',
				},
				{
					name: 'User Grant Update',
					value: 'userGrantUpdate',
					action: 'Update a user grant',
				},
				// User Change Password
				{
					name: 'User Change Password',
					value: 'userChangePassword',
					action: 'Change user password',
				},
				// Log operations
				{
					name: 'Log Create Subscription',
					value: 'logCreateSubscription',
					action: 'Create a log subscription',
				},
				{
					name: 'Log Delete Subscription',
					value: 'logDeleteSubscription',
					action: 'Delete a log subscription',
				},
				{
					name: 'Log Generate URL',
					value: 'logGenerateUrl',
					action: 'Generate a log URL',
				},
				{
					name: 'Log Get Kind',
					value: 'logGetKind',
					action: 'Get log kind details',
				},
				{
					name: 'Log Get Subscription',
					value: 'logGetSubscription',
					action: 'Get log subscription details',
				},
				{
					name: 'Log List Kinds',
					value: 'logListKinds',
					action: 'List log kinds',
				},
				{
					name: 'Log List Subscriptions',
					value: 'logListSubscriptions',
					action: 'List log subscriptions',
				},
				// Metrics Token
				{
					name: 'Metrics Token Get',
					value: 'metricsTokenGet',
					action: 'Get metrics token',
				},
				// CPU Throttle
				{
					name: 'CPU Throttle Get',
					value: 'cpuThrottleGet',
					action: 'Get CPU throttle status',
				},
				// OOM
				{
					name: 'OOM List',
					value: 'oomList',
					action: 'List OOM events',
				},
				// Webhosting Network
				{
					name: 'Webhosting Network Create',
					value: 'webhostingNetworkCreate',
					action: 'Create webhosting network',
				},
				{
					name: 'Webhosting Network Delete',
					value: 'webhostingNetworkDelete',
					action: 'Delete webhosting network',
				},
				{
					name: 'Webhosting Network List',
					value: 'webhostingNetworkList',
					action: 'List webhosting networks',
				},
				// Webs
				{
					name: 'Webs List',
					value: 'websList',
					action: 'List webs',
				},
				// Quota Refresh
				{
					name: 'Quota Refresh Create',
					value: 'quotaRefreshCreate',
					action: 'Refresh quota',
				},
				// Generate Temporary Logs Link
				{
					name: 'Generate Temporary Logs Link',
					value: 'generateTemporaryLogsLinkCreate',
					action: 'Generate temporary logs link',
				},
				// Available Order Capacities
				{
					name: 'Available Order Capacities List',
					value: 'availableOrderCapacitiesList',
					action: 'List available order capacities',
				},
				// Tasks
				{
					name: 'Tasks Get',
					value: 'tasksGet',
					action: 'Get task details',
				},
				// Whitelist Update
				{
					name: 'Whitelist Update',
					value: 'whitelistUpdate',
					action: 'Update a whitelist entry',
				},
				// Web - Service Infos
				{
					name: 'Web Service Infos Get',
					value: 'webServiceInfosGet',
					action: 'Get web service information',
				},
				{
					name: 'Web Service Infos Update',
					value: 'webServiceInfosUpdate',
					action: 'Update web service information',
				},
				// Web - Attached Domain
				{
					name: 'Web Attached Domain Delete',
					value: 'webAttachedDomainDelete',
					action: 'Delete an attached domain',
				},
				// Web - Attached Domain SSL
				{
					name: 'Web Attached Domain SSL Create',
					value: 'webAttachedDomainSslCreate',
					action: 'Create SSL for attached domain',
				},
				{
					name: 'Web Attached Domain SSL Delete',
					value: 'webAttachedDomainSslDelete',
					action: 'Delete SSL for attached domain',
				},
				{
					name: 'Web Attached Domain SSL List',
					value: 'webAttachedDomainSslList',
					action: 'List SSL for attached domain',
				},
				// Web - CDN Domain Options
				{
					name: 'Web CDN Domain Option Create',
					value: 'webCdnDomainOptionsCreate',
					action: 'Create CDN domain option',
				},
				{
					name: 'Web CDN Domain Option Delete',
					value: 'webCdnDomainOptionsDelete',
					action: 'Delete CDN domain option',
				},
				{
					name: 'Web CDN Domain Option Get',
					value: 'webCdnDomainOptionsGet',
					action: 'Get CDN domain option details',
				},
				{
					name: 'Web CDN Domain Option List',
					value: 'webCdnDomainOptionsList',
					action: 'List CDN domain options',
				},
				{
					name: 'Web CDN Domain Option Update',
					value: 'webCdnDomainOptionsUpdate',
					action: 'Update CDN domain option',
				},
				// Web - Configuration
				{
					name: 'Web Configuration List',
					value: 'webConfigurationList',
					action: 'List web configurations',
				},
				{
					name: 'Web Configuration Update',
					value: 'webConfigurationUpdate',
					action: 'Update web configuration',
				},
				// Web - Cron
				{
					name: 'Web Cron Create',
					value: 'webCronCreate',
					action: 'Create a cron job',
				},
				{
					name: 'Web Cron Delete',
					value: 'webCronDelete',
					action: 'Delete a cron job',
				},
				{
					name: 'Web Cron Get',
					value: 'webCronGet',
					action: 'Get cron job details',
				},
				{
					name: 'Web Cron List',
					value: 'webCronList',
					action: 'List cron jobs',
				},
				{
					name: 'Web Cron Update',
					value: 'webCronUpdate',
					action: 'Update a cron job',
				},
				// Web - Database
				{
					name: 'Web Database Create',
					value: 'webDatabaseCreate',
					action: 'Create a web database',
				},
				{
					name: 'Web Database Delete',
					value: 'webDatabaseDelete',
					action: 'Delete a web database',
				},
				{
					name: 'Web Database Get',
					value: 'webDatabaseGet',
					action: 'Get web database details',
				},
				{
					name: 'Web Database List',
					value: 'webDatabaseList',
					action: 'List web databases',
				},
				{
					name: 'Web Database Update',
					value: 'webDatabaseUpdate',
					action: 'Update a web database',
				},
				// Web - Database Copy
				{
					name: 'Web Database Copy Delete',
					value: 'webDatabaseCopyDelete',
					action: 'Delete a web database copy',
				},
				{
					name: 'Web Database Copy List',
					value: 'webDatabaseCopyList',
					action: 'List web database copies',
				},
				// Web - Database Dump
				{
					name: 'Web Database Dump Delete',
					value: 'webDatabaseDumpDelete',
					action: 'Delete a web database dump',
				},
				{
					name: 'Web Database Dump List',
					value: 'webDatabaseDumpList',
					action: 'List web database dumps',
				},
				// Web - Dump
				{
					name: 'Web Dump Delete',
					value: 'webDumpDelete',
					action: 'Delete a web dump',
				},
				{
					name: 'Web Dump Get',
					value: 'webDumpGet',
					action: 'Get web dump details',
				},
				{
					name: 'Web Dump List',
					value: 'webDumpList',
					action: 'List web dumps',
				},
				// Web - Email
				{
					name: 'Web Email List',
					value: 'webEmailList',
					action: 'List web emails',
				},
				// Web - Environment Variable
				{
					name: 'Web Env Var Create',
					value: 'webEnvVarCreate',
					action: 'Create an environment variable',
				},
				{
					name: 'Web Env Var Delete',
					value: 'webEnvVarDelete',
					action: 'Delete an environment variable',
				},
				{
					name: 'Web Env Var Get',
					value: 'webEnvVarGet',
					action: 'Get environment variable details',
				},
				{
					name: 'Web Env Var List',
					value: 'webEnvVarList',
					action: 'List environment variables',
				},
				{
					name: 'Web Env Var Update',
					value: 'webEnvVarUpdate',
					action: 'Update an environment variable',
				},
				// Web - SSH Key
				{
					name: 'Web SSH Key List',
					value: 'webSshKeyList',
					action: 'List SSH keys',
				},
				// Web - Log Subscription
				{
					name: 'Web Log Subscription Delete',
					value: 'webLogSubscriptionDelete',
					action: 'Delete a log subscription',
				},
				{
					name: 'Web Log Subscription List',
					value: 'webLogSubscriptionList',
					action: 'List log subscriptions',
				},
				// Web - Module
				{
					name: 'Web Module Delete',
					value: 'webModuleDelete',
					action: 'Delete a module',
				},
				{
					name: 'Web Module List',
					value: 'webModuleList',
					action: 'List modules',
				},
				// Web - Own Logs
				{
					name: 'Web Own Logs Delete User',
					value: 'webOwnLogsDeleteUser',
					action: 'Delete an own logs user',
				},
				{
					name: 'Web Own Logs Get User',
					value: 'webOwnLogsGetUser',
					action: 'Get own logs user details',
				},
				{
					name: 'Web Own Logs List Users',
					value: 'webOwnLogsListUsers',
					action: 'List own logs users',
				},
				// Web - Runtime
				{
					name: 'Web Runtime Create',
					value: 'webRuntimeCreate',
					action: 'Create a runtime',
				},
				{
					name: 'Web Runtime Delete',
					value: 'webRuntimeDelete',
					action: 'Delete a runtime',
				},
				{
					name: 'Web Runtime Get',
					value: 'webRuntimeGet',
					action: 'Get runtime details',
				},
				{
					name: 'Web Runtime List',
					value: 'webRuntimeList',
					action: 'List runtimes',
				},
				{
					name: 'Web Runtime Update',
					value: 'webRuntimeUpdate',
					action: 'Update a runtime',
				},
				// Web - SSL
				{
					name: 'Web SSL Delete',
					value: 'webSslDelete',
					action: 'Delete SSL',
				},
				{
					name: 'Web SSL List',
					value: 'webSslList',
					action: 'List SSL certificates',
				},
				// Web - User
				{
					name: 'Web User Create',
					value: 'webUserCreate',
					action: 'Create a user',
				},
				{
					name: 'Web User Delete',
					value: 'webUserDelete',
					action: 'Delete a user',
				},
				{
					name: 'Web User Get',
					value: 'webUserGet',
					action: 'Get user details',
				},
				{
					name: 'Web User List',
					value: 'webUserList',
					action: 'List users',
				},
				{
					name: 'Web User Update',
					value: 'webUserUpdate',
					action: 'Update a user',
				},
				// Web - User Logs
				{
					name: 'Web User Logs Delete',
					value: 'webUserLogsDelete',
					action: 'Delete user logs',
				},
				{
					name: 'Web User Logs Get',
					value: 'webUserLogsGet',
					action: 'Get user logs details',
				},
				{
					name: 'Web User Logs List',
					value: 'webUserLogsList',
					action: 'List user logs',
				},
				// Web - Website
				{
					name: 'Web Website Create',
					value: 'webWebsiteCreate',
					action: 'Create a website',
				},
				{
					name: 'Web Website Delete',
					value: 'webWebsiteDelete',
					action: 'Delete a website',
				},
				{
					name: 'Web Website Get',
					value: 'webWebsiteGet',
					action: 'Get website details',
				},
				{
					name: 'Web Website List',
					value: 'webWebsiteList',
					action: 'List websites',
				},
				{
					name: 'Web Website Update',
					value: 'webWebsiteUpdate',
					action: 'Update a website',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		// Private Database - Main operations
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['update'] },
		}),
		...descriptionRestart({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['restart'] },
		}),
		...availableVersions.listDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['availableVersionsList'] },
		}),
		...config.getDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['configGet'] },
		}),
		...config.updateDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['configUpdate'] },
		}),
		...hostingDatabase.listDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingDatabaseList'] },
		}),
		...hostingDatabase.getDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingDatabaseGet'] },
		}),
		...hostingDatabase.createDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingDatabaseCreate'] },
		}),
		...hostingDatabase.deleteDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingDatabaseDelete'] },
		}),
		...hostingTask.listDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingTaskList'] },
		}),
		...hostingTask.getDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingTaskGet'] },
		}),
		...hostingUser.listDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingUserList'] },
		}),
		...hostingUser.getDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingUserGet'] },
		}),
		...hostingUser.createDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingUserCreate'] },
		}),
		...hostingUser.deleteDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingUserDelete'] },
		}),
		...hostingWhitelist.listDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingWhitelistList'] },
		}),
		...hostingWhitelist.getDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingWhitelistGet'] },
		}),
		...hostingWhitelist.createDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingWhitelistCreate'] },
		}),
		...hostingWhitelist.deleteDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['hostingWhitelistDelete'] },
		}),
		...serviceInfos.getDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['serviceInfosGet'] },
		}),
		...serviceInfos.updateDescription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['serviceInfosUpdate'] },
		}),
		// Lifecycle
		...lifecycle.descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['lifecycleChangeContact'] },
		}),
		...lifecycle.descriptionChangeFtpPassword({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['lifecycleChangeFtpPassword'] },
		}),
		...lifecycle.descriptionChangeVersion({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['lifecycleChangeVersion'] },
		}),
		...lifecycle.descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['lifecycleConfirmTermination'] },
		}),
		...lifecycle.descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['lifecycleTerminate'] },
		}),
		// Database Copy
		...databaseCopy.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseCopyList'] },
		}),
		...databaseCopy.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseCopyGet'] },
		}),
		...databaseCopy.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseCopyCreate'] },
		}),
		...databaseCopy.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseCopyDelete'] },
		}),
		...databaseCopy.descriptionRestore({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseCopyRestore'] },
		}),
		// Database Dump
		...databaseDump.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseDumpList'] },
		}),
		...databaseDump.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseDumpGet'] },
		}),
		...databaseDump.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseDumpCreate'] },
		}),
		...databaseDump.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseDumpDelete'] },
		}),
		...databaseDump.descriptionRestore({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseDumpRestore'] },
		}),
		// Database Extension
		...databaseExtension.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseExtensionList'] },
		}),
		...databaseExtension.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseExtensionGet'] },
		}),
		...databaseExtension.descriptionEnable({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseExtensionEnable'] },
		}),
		...databaseExtension.descriptionDisable({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseExtensionDisable'] },
		}),
		// Database Import
		...databaseImport.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseImportCreate'] },
		}),
		// Database Wizard
		...databaseWizard.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['databaseWizardCreate'] },
		}),
		// Dump
		...dump.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['dumpList'] },
		}),
		...dump.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['dumpGet'] },
		}),
		...dump.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['dumpDelete'] },
		}),
		...dump.descriptionRestore({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['dumpRestore'] },
		}),
		// User Grant
		...userGrant.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['userGrantList'] },
		}),
		...userGrant.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['userGrantGet'] },
		}),
		...userGrant.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['userGrantCreate'] },
		}),
		...userGrant.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['userGrantDelete'] },
		}),
		...userGrant.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['userGrantUpdate'] },
		}),
		// User Change Password
		...userChangePassword.descriptionChangePassword({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['userChangePassword'] },
		}),
		// Log
		...log.descriptionListKinds({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['logListKinds'] },
		}),
		...log.descriptionGetKind({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['logGetKind'] },
		}),
		...log.descriptionListSubscriptions({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['logListSubscriptions'] },
		}),
		...log.descriptionGetSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['logGetSubscription'] },
		}),
		...log.descriptionCreateSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['logCreateSubscription'] },
		}),
		...log.descriptionDeleteSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['logDeleteSubscription'] },
		}),
		...log.descriptionGenerateUrl({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['logGenerateUrl'] },
		}),
		// Metrics Token
		...metricsToken.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['metricsTokenGet'] },
		}),
		// CPU Throttle
		...cpuThrottle.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['cpuThrottleGet'] },
		}),
		// OOM
		...oom.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['oomList'] },
		}),
		// Webhosting Network
		...webhostingNetwork.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webhostingNetworkList'] },
		}),
		...webhostingNetwork.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webhostingNetworkCreate'] },
		}),
		...webhostingNetwork.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webhostingNetworkDelete'] },
		}),
		// Webs
		...webs.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['websList'] },
		}),
		// Quota Refresh
		...quotaRefresh.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['quotaRefreshCreate'] },
		}),
		// Generate Temporary Logs Link
		...generateTemporaryLogsLink.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['generateTemporaryLogsLinkCreate'] },
		}),
		// Available Order Capacities
		...availableOrderCapacities.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['availableOrderCapacitiesList'] },
		}),
		// Tasks
		...tasks.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['tasksGet'] },
		}),
		// Whitelist Update
		...whitelist.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['whitelistUpdate'] },
		}),
		// Web - Service Infos
		...webServiceInfos.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webServiceInfosGet'] },
		}),
		...webServiceInfos.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webServiceInfosUpdate'] },
		}),
		// Web - Attached Domain
		...webAttachedDomain.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webAttachedDomainDelete'] },
		}),
		// Web - Attached Domain SSL
		...webAttachedDomainSsl.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webAttachedDomainSslList'] },
		}),
		...webAttachedDomainSsl.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webAttachedDomainSslCreate'] },
		}),
		...webAttachedDomainSsl.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webAttachedDomainSslDelete'] },
		}),
		// Web - CDN Domain Options
		...webCdnDomainOptions.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCdnDomainOptionsList'] },
		}),
		...webCdnDomainOptions.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCdnDomainOptionsGet'] },
		}),
		...webCdnDomainOptions.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCdnDomainOptionsCreate'] },
		}),
		...webCdnDomainOptions.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCdnDomainOptionsUpdate'] },
		}),
		...webCdnDomainOptions.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCdnDomainOptionsDelete'] },
		}),
		// Web - Configuration
		...webConfiguration.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webConfigurationList'] },
		}),
		...webConfiguration.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webConfigurationUpdate'] },
		}),
		// Web - Cron
		...webCron.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCronList'] },
		}),
		...webCron.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCronGet'] },
		}),
		...webCron.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCronCreate'] },
		}),
		...webCron.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCronUpdate'] },
		}),
		...webCron.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webCronDelete'] },
		}),
		// Web - Database
		...webDatabase.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseList'] },
		}),
		...webDatabase.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseGet'] },
		}),
		...webDatabase.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseCreate'] },
		}),
		...webDatabase.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseUpdate'] },
		}),
		...webDatabase.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseDelete'] },
		}),
		// Web - Database Copy
		...webDatabaseCopy.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseCopyList'] },
		}),
		...webDatabaseCopy.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseCopyDelete'] },
		}),
		// Web - Database Dump
		...webDatabaseDump.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseDumpList'] },
		}),
		...webDatabaseDump.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDatabaseDumpDelete'] },
		}),
		// Web - Dump
		...webDump.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDumpList'] },
		}),
		...webDump.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDumpGet'] },
		}),
		...webDump.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webDumpDelete'] },
		}),
		// Web - Email
		...webEmail.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webEmailList'] },
		}),
		// Web - Environment Variable
		...webEnvVar.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webEnvVarList'] },
		}),
		...webEnvVar.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webEnvVarGet'] },
		}),
		...webEnvVar.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webEnvVarCreate'] },
		}),
		...webEnvVar.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webEnvVarUpdate'] },
		}),
		...webEnvVar.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webEnvVarDelete'] },
		}),
		// Web - SSH Key
		...webSshKey.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webSshKeyList'] },
		}),
		// Web - Log Subscription
		...webLogSubscription.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webLogSubscriptionList'] },
		}),
		...webLogSubscription.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webLogSubscriptionDelete'] },
		}),
		// Web - Module
		...webModule.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webModuleList'] },
		}),
		...webModule.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webModuleDelete'] },
		}),
		// Web - Own Logs
		...webOwnLogs.descriptionListUsers({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webOwnLogsListUsers'] },
		}),
		...webOwnLogs.descriptionGetUser({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webOwnLogsGetUser'] },
		}),
		...webOwnLogs.descriptionDeleteUser({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webOwnLogsDeleteUser'] },
		}),
		// Web - Runtime
		...webRuntime.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webRuntimeList'] },
		}),
		...webRuntime.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webRuntimeGet'] },
		}),
		...webRuntime.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webRuntimeCreate'] },
		}),
		...webRuntime.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webRuntimeUpdate'] },
		}),
		...webRuntime.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webRuntimeDelete'] },
		}),
		// Web - SSL
		...webSsl.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webSslList'] },
		}),
		...webSsl.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webSslDelete'] },
		}),
		// Web - User
		...webUser.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserList'] },
		}),
		...webUser.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserGet'] },
		}),
		...webUser.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserCreate'] },
		}),
		...webUser.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserUpdate'] },
		}),
		...webUser.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserDelete'] },
		}),
		// Web - User Logs
		...webUserLogs.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserLogsList'] },
		}),
		...webUserLogs.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserLogsGet'] },
		}),
		...webUserLogs.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webUserLogsDelete'] },
		}),
		// Web - Website
		...webWebsite.descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webWebsiteList'] },
		}),
		...webWebsite.descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webWebsiteGet'] },
		}),
		...webWebsite.descriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webWebsiteCreate'] },
		}),
		...webWebsite.descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webWebsiteUpdate'] },
		}),
		...webWebsite.descriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, hostingOperation: ['webWebsiteDelete'] },
		}),
	];
}

/**
 * Executes the selected hosting operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('hostingOperation', 0, { extractValue: true });

	switch (operation) {
		// Private Database - Main operations
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'restart':
			return await executeRestart.call(this);
		case 'availableVersionsList':
			return await availableVersions.listExecute.call(this);
		case 'configGet':
			return await config.getExecute.call(this);
		case 'configUpdate':
			return await config.updateExecute.call(this);
		case 'hostingDatabaseList':
			return await hostingDatabase.listExecute.call(this);
		case 'hostingDatabaseGet':
			return await hostingDatabase.getExecute.call(this);
		case 'hostingDatabaseCreate':
			return await hostingDatabase.createExecute.call(this);
		case 'hostingDatabaseDelete':
			return await hostingDatabase.deleteExecute.call(this);
		case 'hostingTaskList':
			return await hostingTask.listExecute.call(this);
		case 'hostingTaskGet':
			return await hostingTask.getExecute.call(this);
		case 'hostingUserList':
			return await hostingUser.listExecute.call(this);
		case 'hostingUserGet':
			return await hostingUser.getExecute.call(this);
		case 'hostingUserCreate':
			return await hostingUser.createExecute.call(this);
		case 'hostingUserDelete':
			return await hostingUser.deleteExecute.call(this);
		case 'hostingWhitelistList':
			return await hostingWhitelist.listExecute.call(this);
		case 'hostingWhitelistGet':
			return await hostingWhitelist.getExecute.call(this);
		case 'hostingWhitelistCreate':
			return await hostingWhitelist.createExecute.call(this);
		case 'hostingWhitelistDelete':
			return await hostingWhitelist.deleteExecute.call(this);
		case 'serviceInfosGet':
			return await serviceInfos.getExecute.call(this);
		case 'serviceInfosUpdate':
			return await serviceInfos.updateExecute.call(this);
		// Lifecycle
		case 'lifecycleChangeContact':
			return await lifecycle.executeChangeContact.call(this);
		case 'lifecycleChangeFtpPassword':
			return await lifecycle.executeChangeFtpPassword.call(this);
		case 'lifecycleChangeVersion':
			return await lifecycle.executeChangeVersion.call(this);
		case 'lifecycleConfirmTermination':
			return await lifecycle.executeConfirmTermination.call(this);
		case 'lifecycleTerminate':
			return await lifecycle.executeTerminate.call(this);
		// Database Copy
		case 'databaseCopyList':
			return await databaseCopy.executeList.call(this);
		case 'databaseCopyGet':
			return await databaseCopy.executeGet.call(this);
		case 'databaseCopyCreate':
			return await databaseCopy.executeCreate.call(this);
		case 'databaseCopyDelete':
			return await databaseCopy.executeDelete.call(this);
		case 'databaseCopyRestore':
			return await databaseCopy.executeRestore.call(this);
		// Database Dump
		case 'databaseDumpList':
			return await databaseDump.executeList.call(this);
		case 'databaseDumpGet':
			return await databaseDump.executeGet.call(this);
		case 'databaseDumpCreate':
			return await databaseDump.executeCreate.call(this);
		case 'databaseDumpDelete':
			return await databaseDump.executeDelete.call(this);
		case 'databaseDumpRestore':
			return await databaseDump.executeRestore.call(this);
		// Database Extension
		case 'databaseExtensionList':
			return await databaseExtension.executeList.call(this);
		case 'databaseExtensionGet':
			return await databaseExtension.executeGet.call(this);
		case 'databaseExtensionEnable':
			return await databaseExtension.executeEnable.call(this);
		case 'databaseExtensionDisable':
			return await databaseExtension.executeDisable.call(this);
		// Database Import
		case 'databaseImportCreate':
			return await databaseImport.executeCreate.call(this);
		// Database Wizard
		case 'databaseWizardCreate':
			return await databaseWizard.executeCreate.call(this);
		// Dump
		case 'dumpList':
			return await dump.executeList.call(this);
		case 'dumpGet':
			return await dump.executeGet.call(this);
		case 'dumpDelete':
			return await dump.executeDelete.call(this);
		case 'dumpRestore':
			return await dump.executeRestore.call(this);
		// User Grant
		case 'userGrantList':
			return await userGrant.executeList.call(this);
		case 'userGrantGet':
			return await userGrant.executeGet.call(this);
		case 'userGrantCreate':
			return await userGrant.executeCreate.call(this);
		case 'userGrantDelete':
			return await userGrant.executeDelete.call(this);
		case 'userGrantUpdate':
			return await userGrant.executeUpdate.call(this);
		// User Change Password
		case 'userChangePassword':
			return await userChangePassword.executeChangePassword.call(this);
		// Log
		case 'logListKinds':
			return await log.executeListKinds.call(this);
		case 'logGetKind':
			return await log.executeGetKind.call(this);
		case 'logListSubscriptions':
			return await log.executeListSubscriptions.call(this);
		case 'logGetSubscription':
			return await log.executeGetSubscription.call(this);
		case 'logCreateSubscription':
			return await log.executeCreateSubscription.call(this);
		case 'logDeleteSubscription':
			return await log.executeDeleteSubscription.call(this);
		case 'logGenerateUrl':
			return await log.executeGenerateUrl.call(this);
		// Metrics Token
		case 'metricsTokenGet':
			return await metricsToken.executeGet.call(this);
		// CPU Throttle
		case 'cpuThrottleGet':
			return await cpuThrottle.executeGet.call(this);
		// OOM
		case 'oomList':
			return await oom.executeList.call(this);
		// Webhosting Network
		case 'webhostingNetworkList':
			return await webhostingNetwork.executeList.call(this);
		case 'webhostingNetworkCreate':
			return await webhostingNetwork.executeCreate.call(this);
		case 'webhostingNetworkDelete':
			return await webhostingNetwork.executeDelete.call(this);
		// Webs
		case 'websList':
			return await webs.executeList.call(this);
		// Quota Refresh
		case 'quotaRefreshCreate':
			return await quotaRefresh.executeCreate.call(this);
		// Generate Temporary Logs Link
		case 'generateTemporaryLogsLinkCreate':
			return await generateTemporaryLogsLink.executeCreate.call(this);
		// Available Order Capacities
		case 'availableOrderCapacitiesList':
			return await availableOrderCapacities.executeList.call(this);
		// Tasks
		case 'tasksGet':
			return await tasks.executeGet.call(this);
		// Whitelist Update
		case 'whitelistUpdate':
			return await whitelist.executeUpdate.call(this);
		// Web - Service Infos
		case 'webServiceInfosGet':
			return await webServiceInfos.executeGet.call(this);
		case 'webServiceInfosUpdate':
			return await webServiceInfos.executeUpdate.call(this);
		// Web - Attached Domain
		case 'webAttachedDomainDelete':
			return await webAttachedDomain.executeDelete.call(this);
		// Web - Attached Domain SSL
		case 'webAttachedDomainSslList':
			return await webAttachedDomainSsl.executeList.call(this);
		case 'webAttachedDomainSslCreate':
			return await webAttachedDomainSsl.executeCreate.call(this);
		case 'webAttachedDomainSslDelete':
			return await webAttachedDomainSsl.executeDelete.call(this);
		// Web - CDN Domain Options
		case 'webCdnDomainOptionsList':
			return await webCdnDomainOptions.executeList.call(this);
		case 'webCdnDomainOptionsGet':
			return await webCdnDomainOptions.executeGet.call(this);
		case 'webCdnDomainOptionsCreate':
			return await webCdnDomainOptions.executeCreate.call(this);
		case 'webCdnDomainOptionsUpdate':
			return await webCdnDomainOptions.executeUpdate.call(this);
		case 'webCdnDomainOptionsDelete':
			return await webCdnDomainOptions.executeDelete.call(this);
		// Web - Configuration
		case 'webConfigurationList':
			return await webConfiguration.executeList.call(this);
		case 'webConfigurationUpdate':
			return await webConfiguration.executeUpdate.call(this);
		// Web - Cron
		case 'webCronList':
			return await webCron.executeList.call(this);
		case 'webCronGet':
			return await webCron.executeGet.call(this);
		case 'webCronCreate':
			return await webCron.executeCreate.call(this);
		case 'webCronUpdate':
			return await webCron.executeUpdate.call(this);
		case 'webCronDelete':
			return await webCron.executeDelete.call(this);
		// Web - Database
		case 'webDatabaseList':
			return await webDatabase.executeList.call(this);
		case 'webDatabaseGet':
			return await webDatabase.executeGet.call(this);
		case 'webDatabaseCreate':
			return await webDatabase.executeCreate.call(this);
		case 'webDatabaseUpdate':
			return await webDatabase.executeUpdate.call(this);
		case 'webDatabaseDelete':
			return await webDatabase.executeDelete.call(this);
		// Web - Database Copy
		case 'webDatabaseCopyList':
			return await webDatabaseCopy.executeList.call(this);
		case 'webDatabaseCopyDelete':
			return await webDatabaseCopy.executeDelete.call(this);
		// Web - Database Dump
		case 'webDatabaseDumpList':
			return await webDatabaseDump.executeList.call(this);
		case 'webDatabaseDumpDelete':
			return await webDatabaseDump.executeDelete.call(this);
		// Web - Dump
		case 'webDumpList':
			return await webDump.executeList.call(this);
		case 'webDumpGet':
			return await webDump.executeGet.call(this);
		case 'webDumpDelete':
			return await webDump.executeDelete.call(this);
		// Web - Email
		case 'webEmailList':
			return await webEmail.executeList.call(this);
		// Web - Environment Variable
		case 'webEnvVarList':
			return await webEnvVar.executeList.call(this);
		case 'webEnvVarGet':
			return await webEnvVar.executeGet.call(this);
		case 'webEnvVarCreate':
			return await webEnvVar.executeCreate.call(this);
		case 'webEnvVarUpdate':
			return await webEnvVar.executeUpdate.call(this);
		case 'webEnvVarDelete':
			return await webEnvVar.executeDelete.call(this);
		// Web - SSH Key
		case 'webSshKeyList':
			return await webSshKey.executeList.call(this);
		// Web - Log Subscription
		case 'webLogSubscriptionList':
			return await webLogSubscription.executeList.call(this);
		case 'webLogSubscriptionDelete':
			return await webLogSubscription.executeDelete.call(this);
		// Web - Module
		case 'webModuleList':
			return await webModule.executeList.call(this);
		case 'webModuleDelete':
			return await webModule.executeDelete.call(this);
		// Web - Own Logs
		case 'webOwnLogsListUsers':
			return await webOwnLogs.executeListUsers.call(this);
		case 'webOwnLogsGetUser':
			return await webOwnLogs.executeGetUser.call(this);
		case 'webOwnLogsDeleteUser':
			return await webOwnLogs.executeDeleteUser.call(this);
		// Web - Runtime
		case 'webRuntimeList':
			return await webRuntime.executeList.call(this);
		case 'webRuntimeGet':
			return await webRuntime.executeGet.call(this);
		case 'webRuntimeCreate':
			return await webRuntime.executeCreate.call(this);
		case 'webRuntimeUpdate':
			return await webRuntime.executeUpdate.call(this);
		case 'webRuntimeDelete':
			return await webRuntime.executeDelete.call(this);
		// Web - SSL
		case 'webSslList':
			return await webSsl.executeList.call(this);
		case 'webSslDelete':
			return await webSsl.executeDelete.call(this);
		// Web - User
		case 'webUserList':
			return await webUser.executeList.call(this);
		case 'webUserGet':
			return await webUser.executeGet.call(this);
		case 'webUserCreate':
			return await webUser.executeCreate.call(this);
		case 'webUserUpdate':
			return await webUser.executeUpdate.call(this);
		case 'webUserDelete':
			return await webUser.executeDelete.call(this);
		// Web - User Logs
		case 'webUserLogsList':
			return await webUserLogs.executeList.call(this);
		case 'webUserLogsGet':
			return await webUserLogs.executeGet.call(this);
		case 'webUserLogsDelete':
			return await webUserLogs.executeDelete.call(this);
		// Web - Website
		case 'webWebsiteList':
			return await webWebsite.executeList.call(this);
		case 'webWebsiteGet':
			return await webWebsite.executeGet.call(this);
		case 'webWebsiteCreate':
			return await webWebsite.executeCreate.call(this);
		case 'webWebsiteUpdate':
			return await webWebsite.executeUpdate.call(this);
		case 'webWebsiteDelete':
			return await webWebsite.executeDelete.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hosting"`);
}
