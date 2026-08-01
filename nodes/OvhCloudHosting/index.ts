import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeFindByDomain,
	description as descriptionFindByDomain,
} from './findByDomain.operation';
import {
	execute as executeListAttachedDomains,
	description as descriptionListAttachedDomains,
} from './listAttachedDomains.operation';
import {
	execute as executeGetAttachedDomain,
	description as descriptionGetAttachedDomain,
} from './getAttachedDomain.operation';
import {
	execute as executeListDatabases,
	description as descriptionListDatabases,
} from './listDatabases.operation';
import {
	execute as executeGetDatabase,
	description as descriptionGetDatabase,
} from './getDatabase.operation';
import {
	execute as executeListCrons,
	description as descriptionListCrons,
} from './listCrons.operation';
import { execute as executeGetCron, description as descriptionGetCron } from './getCron.operation';
import {
	execute as executeListUsers,
	description as descriptionListUsers,
} from './listUsers.operation';
import { execute as executeGetUser, description as descriptionGetUser } from './getUser.operation';
import {
	execute as executeListTasks,
	description as descriptionListTasks,
} from './listTasks.operation';
import { execute as executeGetTask, description as descriptionGetTask } from './getTask.operation';
import {
	execute as executeListEnvVars,
	description as descriptionListEnvVars,
} from './listEnvVars.operation';
import {
	execute as executeGetEnvVar,
	description as descriptionGetEnvVar,
} from './getEnvVar.operation';
import {
	execute as executeListModules,
	description as descriptionListModules,
} from './listModules.operation';
import {
	execute as executeGetModule,
	description as descriptionGetModule,
} from './getModule.operation';
import {
	execute as executeListRuntimes,
	description as descriptionListRuntimes,
} from './listRuntimes.operation';
import {
	execute as executeGetRuntime,
	description as descriptionGetRuntime,
} from './getRuntime.operation';
import { execute as executeGetSsl, description as descriptionGetSsl } from './getSsl.operation';
import {
	execute as executeGetEmail,
	description as descriptionGetEmail,
} from './getEmail.operation';
import {
	execute as executeGetServiceInfos,
	description as descriptionGetServiceInfos,
} from './getServiceInfos.operation';
import {
	execute as executeHostingUpdate,
	description as descriptionHostingUpdate,
} from './hostingUpdate.operation';
import {
	execute as executeConfigurationPut,
	description as descriptionConfigurationPut,
} from './configurationPut.operation';
import {
	execute as executeAttachedDomainCreate,
	description as descriptionAttachedDomainCreate,
} from './attachedDomainCreate.operation';
import {
	execute as executeAttachedDomainUpdate,
	description as descriptionAttachedDomainUpdate,
} from './attachedDomainUpdate.operation';
import {
	execute as executeAttachedDomainDelete,
	description as descriptionAttachedDomainDelete,
} from './attachedDomainDelete.operation';
import {
	execute as executeDefaultSslCertificateCreate,
	description as descriptionDefaultSslCertificateCreate,
} from './defaultSslCertificateCreate.operation';
import {
	execute as executeAttachedDomainPurgeCacheCreate,
	description as descriptionAttachedDomainPurgeCacheCreate,
} from './attachedDomainPurgeCacheCreate.operation';
import {
	execute as executeUserUpdatePut,
	description as descriptionUserUpdatePut,
} from './userUpdatePut.operation';
import {
	execute as executeDatabaseCreatePost,
	description as descriptionDatabaseCreatePost,
} from './databaseCreatePost.operation';
import {
	execute as executeDatabaseDelete,
	description as descriptionDatabaseDelete,
} from './databaseDelete.operation';
import {
	execute as executeImportCustomCertificateCreate,
	description as descriptionImportCustomCertificateCreate,
} from './importCustomCertificateCreate.operation';
import {
	execute as executeEnvVarSetCreate,
	description as descriptionEnvVarSetCreate,
} from './envVarSetCreate.operation';
import {
	execute as executeCronCreatePost,
	description as descriptionCronCreatePost,
} from './cron/cronCreatePost.operation';
import {
	execute as executeCronUpdatePut,
	description as descriptionCronUpdatePut,
} from './cron/cronUpdatePut.operation';
import {
	execute as executeCronDeleteDelete,
	description as descriptionCronDeleteDelete,
} from './cron/cronDeleteDelete.operation';
import {
	execute as executeDatabaseUpdatePut,
	description as descriptionDatabaseUpdatePut,
} from './database/databaseUpdatePut.operation';
import {
	execute as executeStatisticsGet,
	description as descriptionStatisticsGet,
} from './statistics/statisticsGet.operation';

// ==================== Database Sub-Resources ====================
import { execute as dbCapabilitiesGetExecute } from './databaseSub/capabilitiesGet.operation';
import {
	description as dbChangePasswordPutDescription,
	execute as dbChangePasswordPutExecute,
} from './databaseSub/changePasswordPut.operation';
import {
	description as dbCopyPostDescription,
	execute as dbCopyPostExecute,
} from './databaseSub/copyPost.operation';
import { execute as dbDumpGetExecute } from './databaseSub/dumpGet.operation';
import { execute as dbDumpCreatePostExecute } from './databaseSub/dumpCreatePost.operation';
import {
	description as dbImportPostDescription,
	execute as dbImportPostExecute,
} from './databaseSub/importPost.operation';
import { execute as dbMetricsTokenGetExecute } from './databaseSub/metricsTokenGet.operation';
import { execute as dbRequestListGetExecute } from './databaseSub/requestListGet.operation';
import { execute as dbRestoreCreatePostExecute } from './databaseSub/restoreCreatePost.operation';
import { execute as dbStatisticsGetExecute } from './databaseSub/statisticsGet.operation';

// ==================== Website Operations ====================
import {
	description as websiteCreationCapabilitiesGetDescription,
	execute as websiteCreationCapabilitiesGetExecute,
} from './website/creationCapabilitiesGet.operation';
import {
	description as websiteCreatePostDescription,
	execute as websiteCreatePostExecute,
} from './website/createPost.operation';
import {
	description as websiteDeleteDeleteDescription,
	execute as websiteDeleteDeleteExecute,
} from './website/deleteDelete.operation';
import {
	description as websiteGetGetDescription,
	execute as websiteGetGetExecute,
} from './website/getGet.operation';
import {
	description as websiteListGetDescription,
	execute as websiteListGetExecute,
} from './website/listGet.operation';
import {
	description as websiteUpdatePutDescription,
	execute as websiteUpdatePutExecute,
} from './website/updatePut.operation';
import {
	description as websiteDeploymentGetDescription,
	execute as websiteDeploymentGetExecute,
} from './website/deploymentGet.operation';
import {
	description as websiteDeploymentCreatePostDescription,
	execute as websiteDeploymentCreatePostExecute,
} from './website/deploymentCreatePost.operation';

// ==================== CDN Operations ====================
import { execute as cdnGetExecute } from './cdn/cdnGet.operation';
import { execute as cdnAvailableOptionsGetExecute } from './cdn/cdnAvailableOptionsGet.operation';
import { execute as cdnDomainListGetExecute } from './cdn/cdnDomainListGet.operation';
import {
	description as cdnDomainCreatePostDescription,
	execute as cdnDomainCreatePostExecute,
} from './cdn/cdnDomainCreatePost.operation';
import {
	description as cdnDomainDeleteDeleteDescription,
	execute as cdnDomainDeleteDeleteExecute,
} from './cdn/cdnDomainDeleteDelete.operation';
import {
	description as cdnDomainPurgePostDescription,
	execute as cdnDomainPurgePostExecute,
} from './cdn/cdnDomainPurgePost.operation';
import { execute as cdnDomainOptionListGetExecute } from './cdn/cdnDomainOptionListGet.operation';
import {
	description as cdnDomainOptionUpdatePutDescription,
	execute as cdnDomainOptionUpdatePutExecute,
} from './cdn/cdnDomainOptionUpdatePut.operation';
import { execute as cdnOperationListGetExecute } from './cdn/cdnOperationListGet.operation';
import { execute as cdnServiceInfosGetExecute } from './cdn/cdnServiceInfosGet.operation';
import {
	description as cdnServiceInfosUpdatePutDescription,
	execute as cdnServiceInfosUpdatePutExecute,
} from './cdn/cdnServiceInfosUpdatePut.operation';
import { execute as cdnTerminateCreateExecute } from './cdn/cdnTerminateCreate.operation';

// ==================== Service Management ====================
import { execute as smAbuseStateGetExecute } from './serviceManagement/abuseStateGet.operation';
import { execute as smAvailableConfigurationsGetExecute } from './serviceManagement/availableConfigurationsGet.operation';
import {
	description as smChangeContactPostDescription,
	execute as smChangeContactPostExecute,
} from './serviceManagement/changeContactPost.operation';
import { execute as smConfirmTerminationCreateExecute } from './serviceManagement/confirmTerminationCreate.operation';
import { execute as smMetricsTokenGetExecute } from './serviceManagement/metricsTokenGet.operation';
import {
	description as smRequestPostDescription,
	execute as smRequestPostExecute,
} from './serviceManagement/requestPost.operation';
import { execute as smRequestBoostPostExecute } from './serviceManagement/requestBoostPost.operation';
import { execute as smTerminateCreateExecute } from './serviceManagement/terminateCreate.operation';
import { execute as smUnblockTCPOutPutExecute } from './serviceManagement/unblockTCPOutPut.operation';
import { execute as smUserLogsTokenGetExecute } from './serviceManagement/userLogsTokenGet.operation';

// ==================== v2 API Operations ====================
import {
	description as v2AttachedDomainCreateDescription,
	execute as v2AttachedDomainCreateExecute,
} from './v2/attachedDomain/createPostV2.operation';
import {
	description as v2AttachedDomainListByResourceDescription,
	execute as v2AttachedDomainListByResourceExecute,
} from './v2/attachedDomain/listByResourceGetV2.operation';
import {
	description as v2ImportCustomCertDescription,
	execute as v2ImportCustomCertExecute,
} from './v2/ssl/importCustomCertificatePostV2.operation';
import {
	description as v2DeleteUserDescription,
	execute as v2DeleteUserExecute,
} from './v2/user/deleteUserV2.operation';
import {
	description as v2AttachedDomainListGetDescription,
	execute as v2AttachedDomainListGetExecute,
} from './v2/attachedDomainListGetV2.operation';
import {
	description as v2ResourceListGetAllDescription,
	execute as v2ResourceListGetAllExecute,
} from './v2/resourceListGetV2.operation';
import {
	description as v2ResourceGetGetDescription,
	execute as v2ResourceGetGetExecute,
} from './v2/resourceGetGetV2.operation';
import {
	description as v2ResourceAttachedDomainListGetDescription,
	execute as v2ResourceAttachedDomainListGetExecute,
} from './v2/resourceAttachedDomainListGetV2.operation';
import {
	description as v2CertificateListGetDescription,
	execute as v2CertificateListGetExecute,
} from './v2/certificateListGetV2.operation';
import {
	description as v2WebsiteListGetDescription,
	execute as v2WebsiteListGetExecute,
} from './v2/websiteListGetV2.operation';
import {
	description as v2WebsiteCreatePostDescription,
	execute as v2WebsiteCreatePostExecute,
} from './v2/websiteCreatePostV2.operation';
import {
	description as v2WebsiteGetGetDescription,
	execute as v2WebsiteGetGetExecute,
} from './v2/websiteGetGetV2.operation';
import {
	description as v2WebsiteUpdatePutDescription,
	execute as v2WebsiteUpdatePutExecute,
} from './v2/websiteUpdatePutV2.operation';
import {
	description as v2WebsiteDomainListGetDescription,
	execute as v2WebsiteDomainListGetExecute,
} from './v2/websiteDomainListGetV2.operation';

// ==================== Runtime Operations ====================
import {
	description as runtimeUpdatePutDescription,
	execute as runtimeUpdatePutExecute,
} from './runtime/updatePut.operation';
import {
	description as runtimeCreatePostDescription,
	execute as runtimeCreatePostExecute,
} from './runtime/createPost.operation';
import { execute as runtimeListGetExecute } from './runtime/listGet.operation';
import { execute as runtimeGetGetExecute } from './runtime/getGet.operation';

// ==================== Module Operations ====================
import { execute as moduleListGetExecute } from './module/listGet.operation';
import {
	description as moduleUpdatePutDescription,
	execute as moduleUpdatePutExecute,
} from './module/updatePut.operation';

// ==================== Email Operations ====================
import { execute as emailListGetExecute } from './email/listGet.operation';
import {
	description as emailCreatePostDescription,
	execute as emailCreatePostExecute,
} from './email/createPost.operation';
import { execute as emailDeleteDeleteExecute } from './email/deleteDelete.operation';

// ==================== SSL Service Operations ====================
import { execute as sslServiceListGetExecute } from './sslService/listGet.operation';
import { execute as sslServiceCreatePostExecute } from './sslService/createPost.operation';

// ==================== Private Database Operations ====================
import { execute as privateDatabaseListGetExecute } from './privateDatabase/listGet.operation';
import { execute as privateDatabaseGetGetExecute } from './privateDatabase/getGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const properties: INodeProperties[] = [];

	// API Version selector (parent)
	properties.push({
		displayName: 'API Version',
		name: 'apiVersion',
		type: 'options',
		options: [
			{ name: 'V1 API', value: 'v1' },
			{ name: 'V2 API', value: 'v2' },
		],
		default: 'v1',
		description: 'Select the API version to use',
	});

	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'hostingOperation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					apiVersion: ['v1'],
				},
			},
			options: [
				{
					name: 'Attach Domain',
					value: 'attachedDomainCreate',
					action: 'Attach a domain to hosting',
				},
				{ displayName: 'Add CDN Domain', name: 'cdnAddDomain', value: 'cdnAddDomain' },
				{
					displayName: 'CDN - Available Options',
					name: 'cdnAvailableOptions',
					value: 'cdnAvailableOptions',
				},
				{ displayName: 'CDN - Delete Domain', name: 'cdnDeleteDomain', value: 'cdnDeleteDomain' },
				{ displayName: 'CDN - Get', name: 'cdnGet', value: 'cdnGet' },
				{ displayName: 'CDN - List Domains', name: 'cdnListDomains', value: 'cdnListDomains' },
				{
					displayName: 'CDN - List Operations',
					name: 'cdnListOperations',
					value: 'cdnListOperations',
				},
				{ displayName: 'CDN - List Options', name: 'cdnListOptions', value: 'cdnListOptions' },
				{ displayName: 'CDN - Purge Cache', name: 'cdnPurgeCache', value: 'cdnPurgeCache' },
				{ displayName: 'CDN - Service Infos', name: 'cdnServiceInfos', value: 'cdnServiceInfos' },
				{ displayName: 'CDN - Terminate', name: 'cdnTerminate', value: 'cdnTerminate' },
				{
					displayName: 'CDN - Update Domain Option',
					name: 'cdnUpdateDomainOption',
					value: 'cdnUpdateDomainOption',
				},
				{
					displayName: 'CDN - Update Service Infos',
					name: 'cdnUpdateServiceInfos',
					value: 'cdnUpdateServiceInfos',
				},
				{
					name: 'Configure Hosting',
					value: 'configurationPut',
					action: 'Set PHP version configuration',
				},
				{
					name: 'Create Cron Job',
					value: 'cronCreatePost',
					action: 'Create a new cron job on the hosting',
				},
				{
					name: 'Create Default SSL Certificate',
					value: 'defaultSslCertificateCreate',
					action: 'Create a default OVH SSL certificate',
				},
				{
					name: 'Database Create',
					value: 'databaseCreatePost',
					action: 'Create a new database on the hosting service',
				},
				{
					name: 'Database Delete',
					value: 'databaseDelete',
					action: 'Delete a database from the hosting service',
				},
				{
					name: 'Database Update',
					value: 'databaseUpdatePut',
					action: 'Update a database on the hosting service',
				},
				{ displayName: 'DB - Capabilities', name: 'dbCapabilities', value: 'dbCapabilities' },
				{
					displayName: 'DB - Change Password',
					name: 'dbChangePassword',
					value: 'dbChangePassword',
				},
				{ displayName: 'DB - Copy Database', name: 'dbCopyDatabase', value: 'dbCopyDatabase' },
				{ displayName: 'DB - Create Dump', name: 'dbCreateDump', value: 'dbCreateDump' },
				{ displayName: 'DB - Get Dump', name: 'dbGetDump', value: 'dbGetDump' },
				{ displayName: 'DB - Import Dump', name: 'dbImportDump', value: 'dbImportDump' },
				{ displayName: 'DB - List Requests', name: 'dbListRequests', value: 'dbListRequests' },
				{ displayName: 'DB - Metrics Token', name: 'dbMetricsToken', value: 'dbMetricsToken' },
				{ displayName: 'DB - Restore', name: 'dbRestore', value: 'dbRestore' },
				{ displayName: 'DB - Statistics', name: 'dbStatistics', value: 'dbStatistics' },
				{
					name: 'Delete Attached Domain',
					value: 'attachedDomainDelete',
					action: 'Detach/delete an attached domain from hosting',
				},
				{
					name: 'Delete Cron Job',
					value: 'cronDeleteDelete',
					action: 'Delete a cron job from the hosting',
				},
				{
					name: 'Environment Variable Set',
					value: 'envVarSetCreate',
					action: 'Set an environment variable',
				},
				{
					name: 'Find Hosting by Domain',
					value: 'findByDomain',
					action: 'Find hosting services linked to a domain',
				},
				{ name: 'Get', value: 'get', action: 'Get hosting web service details' },
				{
					name: 'Get Attached Domain',
					value: 'getAttachedDomain',
					action: 'Get an attached domain',
				},
				{ name: 'Get Cron', value: 'getCron', action: 'Get a cron job' },
				{ name: 'Get Database', value: 'getDatabase', action: 'Get a database' },
				{ name: 'Get Email', value: 'getEmail', action: 'Get email configuration' },
				{ name: 'Get Env Var', value: 'getEnvVar', action: 'Get an environment variable' },
				{ name: 'Get Module', value: 'getModule', action: 'Get a module' },
				{ name: 'Get Runtime', value: 'getRuntime', action: 'Get a runtime' },
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service billing infos',
				},
				{ name: 'Get SSL', value: 'getSsl', action: 'Get SSL certificate info' },
				{ name: 'Get Task', value: 'getTask', action: 'Get a task' },
				{
					name: 'Get Statistics',
					value: 'statisticsGet',
					action: 'Get hosting statistics (bandwidth, hits, errors)',
				},
				{ name: 'Get User', value: 'getUser', action: 'Get a user' },
				{
					name: 'Import Custom Certificate',
					value: 'importCustomCertificateCreate',
					action: 'Import a custom SSL certificate',
				},
				{ name: 'List', value: 'list', action: 'List all hosting web services' },
				{
					name: 'List Attached Domains',
					value: 'listAttachedDomains',
					action: 'List attached domains',
				},
				{ name: 'List Crons', value: 'listCrons', action: 'List cron jobs' },
				{ name: 'List Databases', value: 'listDatabases', action: 'List databases' },
				{ name: 'List Env Vars', value: 'listEnvVars', action: 'List environment variables' },
				{ name: 'List Modules', value: 'listModules', action: 'List installed modules' },
				{ name: 'List Runtimes', value: 'listRuntimes', action: 'List runtimes' },
				{ name: 'List Tasks', value: 'listTasks', action: 'List tasks' },
				{
					name: 'Purge CDN Cache',
					value: 'attachedDomainPurgeCacheCreate',
					action: 'Purge CDN cache for an attached domain',
				},
				{
					displayName: 'Service - Abuse State',
					name: 'serviceAbuseState',
					value: 'serviceAbuseState',
				},
				{
					displayName: 'Service - Available Configurations',
					name: 'serviceAvailableConfigurations',
					value: 'serviceAvailableConfigurations',
				},
				{
					displayName: 'Service - Change Contact',
					name: 'serviceChangeContact',
					value: 'serviceChangeContact',
				},
				{
					displayName: 'Service - Confirm Termination',
					name: 'serviceConfirmTermination',
					value: 'serviceConfirmTermination',
				},
				{
					displayName: 'Service - Metrics Token',
					name: 'serviceMetricsToken',
					value: 'serviceMetricsToken',
				},
				{
					displayName: 'Service - Request Boost',
					name: 'serviceRequestBoost',
					value: 'serviceRequestBoost',
				},
				{
					displayName: 'Service - Support Request',
					name: 'serviceSupportRequest',
					value: 'serviceSupportRequest',
				},
				{
					displayName: 'Service - Terminate',
					name: 'serviceTerminate',
					value: 'serviceTerminate',
				},
				{
					displayName: 'Service - Unblock TCP Out',
					name: 'serviceUnblockTCPOut',
					value: 'serviceUnblockTCPOut',
				},
				{
					displayName: 'Service - User Logs Token',
					name: 'serviceUserLogsToken',
					value: 'serviceUserLogsToken',
				},
				{
					name: 'Update Attached Domain',
					value: 'attachedDomainUpdate',
					action: 'Update properties of an attached domain',
				},
				{
					name: 'Update Cron Job',
					value: 'cronUpdatePut',
					action: 'Update a cron job on the hosting',
				},
				{
					name: 'Update Hosting Service',
					value: 'hostingUpdate',
					action: 'Update hosting web service properties',
				},
				{ name: 'User Update', value: 'userUpdatePut', action: 'Update a user password' },
				{ displayName: 'Website - Create', name: 'websiteCreate', value: 'websiteCreate' },
				{
					displayName: 'Website Creation Capabilities',
					name: 'websiteCreationCapabilities',
					value: 'websiteCreationCapabilities',
				},
				{ displayName: 'Website - Delete', name: 'websiteDelete', value: 'websiteDelete' },
				{
					displayName: 'Website - Deployment',
					name: 'websiteDeployment',
					value: 'websiteDeployment',
				},
				{
					displayName: 'Website Deployment Status',
					name: 'websiteDeploymentStatus',
					value: 'websiteDeploymentStatus',
				},
				{ displayName: 'Website - Get', name: 'websiteGet', value: 'websiteGet' },
				{ displayName: 'Website - List', name: 'websiteList', value: 'websiteList' },
				{ displayName: 'Website - Update', name: 'websiteUpdate', value: 'websiteUpdate' },
				{ displayName: 'Email - Create', name: 'emailCreate', value: 'emailCreate' },
				{ displayName: 'Email - Delete', name: 'emailDelete', value: 'emailDelete' },
				{ displayName: 'Email - List', name: 'emailList', value: 'emailList' },
				{ displayName: 'Module - List', name: 'moduleList', value: 'moduleList' },
				{ displayName: 'Module - Update', name: 'moduleUpdate', value: 'moduleUpdate' },
				{
					displayName: 'Private DB - Get',
					name: 'privateDatabaseGet',
					value: 'privateDatabaseGet',
				},
				{
					displayName: 'Private DB - List',
					name: 'privateDatabaseList',
					value: 'privateDatabaseList',
				},
				{ displayName: 'Runtime - Create', name: 'runtimeCreate', value: 'runtimeCreate' },
				{ displayName: 'Runtime - Get', name: 'runtimeGet2', value: 'runtimeGet2' },
				{ displayName: 'Runtime - List', name: 'runtimeList2', value: 'runtimeList2' },
				{ displayName: 'Runtime - Update', name: 'runtimeUpdate', value: 'runtimeUpdate' },
				{ displayName: 'SSL - Create', name: 'sslCreate', value: 'sslCreate' },
				{ displayName: 'SSL - List', name: 'sslList', value: 'sslList' },
			],
			default: 'list',
		},
	];

	// Separate operation picker for v2
	properties.push({
		displayName: 'Operation (v2)',
		name: 'hostingOperationV2',
		type: 'options',
		noDataExpression: true,
		default: 'v2ListResources',
		displayOptions: {
			show: {
				apiVersion: ['v2'],
			},
		},
		options: [
			{ displayName: 'v2 - List Resources', name: 'v2ListResources', value: 'v2ListResources' },
			{ displayName: 'v2 - Get Resource', name: 'v2GetResource', value: 'v2GetResource' },
			{
				displayName: 'v2 - List Attached Domains',
				name: 'v2ListAttachedDomains',
				value: 'v2ListAttachedDomains',
			},
			{
				displayName: 'v2 - Get Resource Attached Domains',
				name: 'v2GetResourceAttachedDomains',
				value: 'v2GetResourceAttachedDomains',
			},
			{
				displayName: 'v2 - List Certificates',
				name: 'v2ListCertificates',
				value: 'v2ListCertificates',
			},
			{ displayName: 'v2 - List Websites', name: 'v2ListWebsites', value: 'v2ListWebsites' },
			{ displayName: 'v2 - Create Website', name: 'v2CreateWebsite', value: 'v2CreateWebsite' },
			{ displayName: 'v2 - Get Website', name: 'v2GetWebsite', value: 'v2GetWebsite' },
			{ displayName: 'v2 - Update Website', name: 'v2UpdateWebsite', value: 'v2UpdateWebsite' },
			{
				displayName: 'v2 - List Website Domains',
				name: 'v2ListWebsiteDomains',
				value: 'v2ListWebsiteDomains',
			},
			{
				displayName: 'v2 - Create Attached Domain',
				name: 'v2CreateAttachedDomain',
				value: 'v2CreateAttachedDomain',
			},
			{
				displayName: 'v2 - List Resource Attached Domains',
				name: 'v2ListResourceAttachedDomains',
				value: 'v2ListResourceAttachedDomains',
			},
			{
				displayName: 'v2 - Import Custom Certificate',
				name: 'v2ImportCustomCertificate',
				value: 'v2ImportCustomCertificate',
			},
			{ displayName: 'v2 - Delete User', name: 'v2DeleteUser', value: 'v2DeleteUser' },
		],
	});

	properties.push(...operationProperties);

	return [
		...properties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['list'] },
		}),
		...descriptionFindByDomain({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['findByDomain'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['get'] },
		}),
		...descriptionListAttachedDomains({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['listAttachedDomains'],
			},
		}),
		...descriptionGetAttachedDomain({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['getAttachedDomain'],
			},
		}),
		...descriptionListDatabases({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['listDatabases'] },
		}),
		...descriptionGetDatabase({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getDatabase'] },
		}),
		...descriptionListCrons({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['listCrons'] },
		}),
		...descriptionGetCron({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getCron'] },
		}),
		...descriptionListUsers({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['listUsers'] },
		}),
		...descriptionGetUser({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getUser'] },
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getTask'] },
		}),
		...descriptionListEnvVars({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['listEnvVars'] },
		}),
		...descriptionGetEnvVar({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getEnvVar'] },
		}),
		...descriptionListModules({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['listModules'] },
		}),
		...descriptionGetModule({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getModule'] },
		}),
		...descriptionListRuntimes({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['listRuntimes'] },
		}),
		...descriptionGetRuntime({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getRuntime'] },
		}),
		...descriptionGetSsl({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getSsl'] },
		}),
		...descriptionGetEmail({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getEmail'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['getServiceInfos'] },
		}),
		...descriptionHostingUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['hostingUpdate'] },
		}),
		...descriptionConfigurationPut({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['configurationPut'] },
		}),
		...descriptionAttachedDomainCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['attachedDomainCreate'],
			},
		}),
		...descriptionAttachedDomainUpdate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['attachedDomainUpdate'],
			},
		}),
		...descriptionAttachedDomainDelete({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['attachedDomainDelete'],
			},
		}),
		...descriptionDefaultSslCertificateCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['defaultSslCertificateCreate'],
			},
		}),
		...descriptionAttachedDomainPurgeCacheCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['attachedDomainPurgeCacheCreate'],
			},
		}),
		...descriptionUserUpdatePut({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['userUpdatePut'] },
		}),
		...descriptionDatabaseCreatePost({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['databaseCreatePost'],
			},
		}),
		...descriptionDatabaseDelete({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['databaseDelete'] },
		}),
		...descriptionImportCustomCertificateCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['importCustomCertificateCreate'],
			},
		}),
		...descriptionEnvVarSetCreate({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['envVarSetCreate'] },
		}),
		...descriptionCronCreatePost({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['cronCreatePost'] },
		}),
		...descriptionCronUpdatePut({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['cronUpdatePut'] },
		}),
		...descriptionCronDeleteDelete({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['cronDeleteDelete'] },
		}),
		...descriptionDatabaseUpdatePut({
			...displayOptions,
			show: {
				...displayOptions?.show,
				apiVersion: ['v1'],
				hostingOperation: ['databaseUpdatePut'],
			},
		}),
		...descriptionStatisticsGet({
			...displayOptions,
			show: { ...displayOptions?.show, apiVersion: ['v1'], hostingOperation: ['statisticsGet'] },
		}),

		// Database sub-resource parameters
		...(dbChangePasswordPutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbChangePassword'] },
		}) as INodeProperties[]),
		...(dbCopyPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbCopyDatabase'] },
		}) as INodeProperties[]),
		...(dbImportPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbImportDump'] },
		}) as INodeProperties[]),

		// CDN parameters
		...(cdnDomainCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnAddDomain'] },
		}) as INodeProperties[]),
		...(cdnDomainDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDeleteDomain'] },
		}) as INodeProperties[]),
		...(cdnDomainPurgePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnPurgeCache'] },
		}) as INodeProperties[]),
		...(cdnDomainOptionUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnUpdateDomainOption'] },
		}) as INodeProperties[]),
		...(cdnServiceInfosUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnUpdateServiceInfos'] },
		}) as INodeProperties[]),

		// Service Management parameters
		...(smChangeContactPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['serviceChangeContact'] },
		}) as INodeProperties[]),
		...(smRequestPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['serviceSupportRequest'] },
		}) as INodeProperties[]),

		// Website parameters
		...(websiteCreationCapabilitiesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteCreationCapabilities'] },
		}) as INodeProperties[]),
		...(websiteCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteCreate'] },
		}) as INodeProperties[]),
		...(websiteDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteDelete'] },
		}) as INodeProperties[]),
		...(websiteDeploymentCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteDeployment'] },
		}) as INodeProperties[]),
		...(websiteDeploymentGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteDeploymentStatus'] },
		}) as INodeProperties[]),
		...(websiteGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteGet'] },
		}) as INodeProperties[]),
		...(websiteListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteList'] },
		}) as INodeProperties[]),
		...(websiteUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteUpdate'] },
		}) as INodeProperties[]),

		// v2 API properties
		...(v2ResourceListGetAllDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2ListResources'] },
		}) as INodeProperties[]),
		...(v2ResourceGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2GetResource'] },
		}) as INodeProperties[]),
		...(v2AttachedDomainListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2ListAttachedDomains'] },
		}) as INodeProperties[]),
		...(v2ResourceAttachedDomainListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2GetResourceAttachedDomains'] },
		}) as INodeProperties[]),
		...(v2CertificateListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2ListCertificates'] },
		}) as INodeProperties[]),
		...(v2WebsiteListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2ListWebsites'] },
		}) as INodeProperties[]),
		...(v2WebsiteCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2CreateWebsite'] },
		}) as INodeProperties[]),
		...(v2WebsiteGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2GetWebsite'] },
		}) as INodeProperties[]),
		...(v2WebsiteUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2UpdateWebsite'] },
		}) as INodeProperties[]),
		...(v2WebsiteDomainListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2ListWebsiteDomains'] },
		}) as INodeProperties[]),
		...(v2AttachedDomainCreateDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2CreateAttachedDomain'] },
		}) as INodeProperties[]),
		...(v2AttachedDomainListByResourceDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2ListResourceAttachedDomains'] },
		}) as INodeProperties[]),
		...(v2ImportCustomCertDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2ImportCustomCertificate'] },
		}) as INodeProperties[]),
		...(v2DeleteUserDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2DeleteUser'] },
		}) as INodeProperties[]),

		// Runtime parameters
		...(runtimeUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['runtimeUpdate'] },
		}) as INodeProperties[]),
		...(runtimeCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['runtimeCreate'] },
		}) as INodeProperties[]),
		// Module parameters
		...(moduleUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['moduleUpdate'] },
		}) as INodeProperties[]),
		// Email parameters
		...(emailCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailCreate'] },
		}) as INodeProperties[]),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const apiVersion = this.getNodeParameter('apiVersion', 0) as string;
	const operation = this.getNodeParameter(
		apiVersion === 'v2' ? 'hostingOperationV2' : 'hostingOperation',
		itemIndex,
		{ extractValue: true },
	);

	switch (operation) {
		// ==================== v1 API Operations ====================
		case 'list':
			return executeList.call(this, itemIndex);
		case 'findByDomain':
			return executeFindByDomain.call(this, itemIndex);
		case 'get':
			return executeGet.call(this, itemIndex);
		case 'listAttachedDomains':
			return executeListAttachedDomains.call(this, itemIndex);
		case 'getAttachedDomain':
			return executeGetAttachedDomain.call(this, itemIndex);
		case 'listDatabases':
			return executeListDatabases.call(this, itemIndex);
		case 'getDatabase':
			return executeGetDatabase.call(this, itemIndex);
		case 'listCrons':
			return executeListCrons.call(this, itemIndex);
		case 'getCron':
			return executeGetCron.call(this, itemIndex);
		case 'listUsers':
			return executeListUsers.call(this, itemIndex);
		case 'getUser':
			return executeGetUser.call(this, itemIndex);
		case 'listTasks':
			return executeListTasks.call(this, itemIndex);
		case 'getTask':
			return executeGetTask.call(this, itemIndex);
		case 'listEnvVars':
			return executeListEnvVars.call(this, itemIndex);
		case 'getEnvVar':
			return executeGetEnvVar.call(this, itemIndex);
		case 'listModules':
			return executeListModules.call(this, itemIndex);
		case 'getModule':
			return executeGetModule.call(this, itemIndex);
		case 'listRuntimes':
			return executeListRuntimes.call(this, itemIndex);
		case 'getRuntime':
			return executeGetRuntime.call(this, itemIndex);
		case 'getSsl':
			return executeGetSsl.call(this, itemIndex);
		case 'getEmail':
			return executeGetEmail.call(this, itemIndex);
		case 'getServiceInfos':
			return executeGetServiceInfos.call(this, itemIndex);
		case 'hostingUpdate':
			return executeHostingUpdate.call(this, itemIndex);
		case 'configurationPut':
			return executeConfigurationPut.call(this, itemIndex);
		case 'attachedDomainCreate':
			return executeAttachedDomainCreate.call(this, itemIndex);
		case 'attachedDomainUpdate':
			return executeAttachedDomainUpdate.call(this, itemIndex);
		case 'attachedDomainDelete':
			return executeAttachedDomainDelete.call(this, itemIndex);
		case 'defaultSslCertificateCreate':
			return executeDefaultSslCertificateCreate.call(this, itemIndex);
		case 'attachedDomainPurgeCacheCreate':
			return executeAttachedDomainPurgeCacheCreate.call(this, itemIndex);
		case 'userUpdatePut':
			return executeUserUpdatePut.call(this, itemIndex);
		case 'databaseCreatePost':
			return executeDatabaseCreatePost.call(this, itemIndex);
		case 'databaseDelete':
			return executeDatabaseDelete.call(this, itemIndex);
		case 'importCustomCertificateCreate':
			return executeImportCustomCertificateCreate.call(this, itemIndex);
		case 'envVarSetCreate':
			return executeEnvVarSetCreate.call(this, itemIndex);
		case 'cronCreatePost':
			return executeCronCreatePost.call(this, itemIndex);
		case 'cronUpdatePut':
			return executeCronUpdatePut.call(this, itemIndex);
		case 'cronDeleteDelete':
			return executeCronDeleteDelete.call(this, itemIndex);
		case 'databaseUpdatePut':
			return executeDatabaseUpdatePut.call(this, itemIndex);
		case 'statisticsGet':
			return executeStatisticsGet.call(this, itemIndex);
		case 'dbCapabilities':
			return dbCapabilitiesGetExecute.call(this);
		case 'dbChangePassword':
			return dbChangePasswordPutExecute.call(this);
		case 'dbCopyDatabase':
			return dbCopyPostExecute.call(this);
		case 'dbCreateDump':
			return dbDumpCreatePostExecute.call(this);
		case 'dbGetDump':
			return dbDumpGetExecute.call(this);
		case 'dbImportDump':
			return dbImportPostExecute.call(this);
		case 'dbListRequests':
			return dbRequestListGetExecute.call(this);
		case 'dbMetricsToken':
			return dbMetricsTokenGetExecute.call(this);
		case 'dbRestore':
			return dbRestoreCreatePostExecute.call(this);
		case 'dbStatistics':
			return dbStatisticsGetExecute.call(this);

		// ==================== Website Operations ====================
		case 'websiteCreate':
			return websiteCreatePostExecute.call(this, itemIndex);
		case 'websiteDelete':
			return websiteDeleteDeleteExecute.call(this, itemIndex);
		case 'websiteDeployment':
			return websiteDeploymentCreatePostExecute.call(this, itemIndex);
		case 'websiteGet':
			return websiteGetGetExecute.call(this, itemIndex);
		case 'websiteList':
			return websiteListGetExecute.call(this, itemIndex);
		case 'websiteUpdate':
			return websiteUpdatePutExecute.call(this, itemIndex);
		case 'websiteCreationCapabilities':
			return websiteCreationCapabilitiesGetExecute.call(this, itemIndex);
		case 'websiteDeploymentStatus':
			return websiteDeploymentGetExecute.call(this, itemIndex);

		// ==================== CDN Operations ====================
		case 'cdnAvailableOptions':
			return cdnAvailableOptionsGetExecute.call(this, itemIndex);
		case 'cdnAddDomain':
			return cdnDomainCreatePostExecute.call(this, itemIndex);
		case 'cdnDeleteDomain':
			return cdnDomainDeleteDeleteExecute.call(this, itemIndex);
		case 'cdnGet':
			return cdnGetExecute.call(this, itemIndex);
		case 'cdnListDomains':
			return cdnDomainListGetExecute.call(this, itemIndex);
		case 'cdnListOptions':
			return cdnDomainOptionListGetExecute.call(this, itemIndex);
		case 'cdnListOperations':
			return cdnOperationListGetExecute.call(this, itemIndex);
		case 'cdnPurgeCache':
			return cdnDomainPurgePostExecute.call(this, itemIndex);
		case 'cdnServiceInfos':
			return cdnServiceInfosGetExecute.call(this, itemIndex);
		case 'cdnTerminate':
			return cdnTerminateCreateExecute.call(this, itemIndex);
		case 'cdnUpdateDomainOption':
			return cdnDomainOptionUpdatePutExecute.call(this, itemIndex);
		case 'cdnUpdateServiceInfos':
			return cdnServiceInfosUpdatePutExecute.call(this, itemIndex);

		// ==================== Service Management ====================
		case 'serviceAbuseState':
			return smAbuseStateGetExecute.call(this);
		case 'serviceAvailableConfigurations':
			return smAvailableConfigurationsGetExecute.call(this);
		case 'serviceChangeContact':
			return smChangeContactPostExecute.call(this);
		case 'serviceConfirmTermination':
			return smConfirmTerminationCreateExecute.call(this);
		case 'serviceMetricsToken':
			return smMetricsTokenGetExecute.call(this);
		case 'serviceRequestBoost':
			return smRequestBoostPostExecute.call(this);
		case 'serviceSupportRequest':
			return smRequestPostExecute.call(this);
		case 'serviceTerminate':
			return smTerminateCreateExecute.call(this);
		case 'serviceUnblockTCPOut':
			return smUnblockTCPOutPutExecute.call(this);
		case 'serviceUserLogsToken':
			return smUserLogsTokenGetExecute.call(this);

		// ==================== v2 API Operations ====================
		case 'v2ListResources':
			return v2ResourceListGetAllExecute.call(this, itemIndex);
		case 'v2GetResource':
			return v2ResourceGetGetExecute.call(this, itemIndex);
		case 'v2ListAttachedDomains':
			return v2AttachedDomainListGetExecute.call(this, itemIndex);
		case 'v2GetResourceAttachedDomains':
			return v2ResourceAttachedDomainListGetExecute.call(this, itemIndex);
		case 'v2ListCertificates':
			return v2CertificateListGetExecute.call(this, itemIndex);
		case 'v2ListWebsites':
			return v2WebsiteListGetExecute.call(this, itemIndex);
		case 'v2CreateWebsite':
			return v2WebsiteCreatePostExecute.call(this, itemIndex);
		case 'v2GetWebsite':
			return v2WebsiteGetGetExecute.call(this, itemIndex);
		case 'v2UpdateWebsite':
			return v2WebsiteUpdatePutExecute.call(this, itemIndex);
		case 'v2ListWebsiteDomains':
			return v2WebsiteDomainListGetExecute.call(this, itemIndex);
		case 'v2CreateAttachedDomain':
			return v2AttachedDomainCreateExecute.call(this);
		case 'v2ListResourceAttachedDomains':
			return v2AttachedDomainListByResourceExecute.call(this);
		case 'v2ImportCustomCertificate':
			return v2ImportCustomCertExecute.call(this);
		case 'v2DeleteUser':
			return v2DeleteUserExecute.call(this);
		case 'emailCreate':
			return emailCreatePostExecute.call(this);
		case 'emailDelete':
			return emailDeleteDeleteExecute.call(this);
		case 'emailList':
			return emailListGetExecute.call(this);
		case 'moduleList':
			return moduleListGetExecute.call(this);
		case 'moduleUpdate':
			return moduleUpdatePutExecute.call(this);
		case 'privateDatabaseGet':
			return privateDatabaseGetGetExecute.call(this);
		case 'privateDatabaseList':
			return privateDatabaseListGetExecute.call(this);
		case 'runtimeCreate':
			return runtimeCreatePostExecute.call(this);
		case 'runtimeGet2':
			return runtimeGetGetExecute.call(this);
		case 'runtimeList2':
			return runtimeListGetExecute.call(this);
		case 'runtimeUpdate':
			return runtimeUpdatePutExecute.call(this);
		case 'sslCreate':
			return sslServiceCreatePostExecute.call(this);
		case 'sslList':
			return sslServiceListGetExecute.call(this);

		default:
			throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudHosting"`);
	}
}
