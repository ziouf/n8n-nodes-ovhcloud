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
import {
	description as dbRestoreGetDescription,
	execute as dbRestoreGetExecute,
} from './databaseSub/restoreGet.operation';
import { execute as dbRestoreCreatePostExecute } from './databaseSub/restoreCreatePost.operation';
import { execute as dbStatisticsGetExecute } from './databaseSub/statisticsGet.operation';
import {
	description as dbCopyListGetDescription,
	execute as dbCopyListGetExecute,
} from './databaseSub/copyListGet.operation';
import {
	description as dbCopyGetGetDescription,
	execute as dbCopyGetGetExecute,
} from './databaseSub/copyGetGet.operation';
import {
	description as dbCopyDeleteDeleteDescription,
	execute as dbCopyDeleteDeleteExecute,
} from './databaseSub/copyDeleteDelete.operation';
import {
	description as dbCopyRestorePostDescription,
	execute as dbCopyRestorePostExecute,
} from './databaseSub/copyRestorePost.operation';
import {
	description as dbDumpGetGetDescription,
	execute as dbDumpGetGetExecute,
} from './databaseSub/dumpGetGet.operation';
import {
	description as dbDumpDeleteDeleteDescription,
	execute as dbDumpDeleteDeleteExecute,
} from './databaseSub/dumpDeleteDelete.operation';
import {
	description as dbDumpRestorePostDescription,
	execute as dbDumpRestorePostExecute,
} from './databaseSub/dumpRestorePost.operation';

// ==================== Database Available Operations ====================
import {
	description as dbAvailableTypeListGetDescription,
	execute as dbAvailableTypeListGetExecute,
} from './databaseAvailable/typeListGet.operation';
import {
	description as dbAvailableVersionListGetDescription,
	execute as dbAvailableVersionListGetExecute,
} from './databaseAvailable/versionListGet.operation';
import {
	description as dbCreationCapabilitiesGetDescription,
	execute as dbCreationCapabilitiesGetExecute,
} from './databaseAvailable/creationCapabilitiesGet.operation';

// ==================== Dump Operations ====================
import {
	description as dumpListGetDescription,
	execute as dumpListGetExecute,
} from './dump/listGet.operation';
import {
	description as dumpGetGetDescription,
	execute as dumpGetGetExecute,
} from './dump/getGet.operation';
import {
	description as dumpDeleteDeleteDescription,
	execute as dumpDeleteDeleteExecute,
} from './dump/deleteDelete.operation';

// ==================== Email Operations ====================
import {
	description as emailUpdatePutDescription,
	execute as emailUpdatePutExecute,
} from './email/updatePut.operation';
import {
	description as emailBouncesGetDescription,
	execute as emailBouncesGetExecute,
} from './email/bouncesGet.operation';
import {
	description as emailRequestPostDescription,
	execute as emailRequestPostExecute,
} from './email/requestPost.operation';
import {
	description as emailVolumesGetDescription,
	execute as emailVolumesGetExecute,
} from './email/volumesGet.operation';

// ==================== Email Option Operations ====================
import {
	description as emailOptionListGetDescription,
	execute as emailOptionListGetExecute,
} from './emailOption/listGet.operation';
import {
	description as emailOptionGetGetDescription,
	execute as emailOptionGetGetExecute,
} from './emailOption/getGet.operation';
import {
	description as emailOptionServiceInfosGetDescription,
	execute as emailOptionServiceInfosGetExecute,
} from './emailOption/serviceInfosGet.operation';
import {
	description as emailOptionTerminatePostDescription,
	execute as emailOptionTerminatePostExecute,
} from './emailOption/terminatePost.operation';

// ==================== User Logs Operations ====================
import {
	description as userLogsListGetDescription,
	execute as userLogsListGetExecute,
} from './userLogs/listGet.operation';
import {
	description as userLogsCreatePostDescription,
	execute as userLogsCreatePostExecute,
} from './userLogs/createPost.operation';
import {
	description as userLogsDeleteDeleteDescription,
	execute as userLogsDeleteDeleteExecute,
} from './userLogs/deleteDelete.operation';
import {
	description as userLogsGetGetDescription,
	execute as userLogsGetGetExecute,
} from './userLogs/getGet.operation';
import {
	description as userLogsUpdatePutDescription,
	execute as userLogsUpdatePutExecute,
} from './userLogs/updatePut.operation';
import {
	description as userLogsChangePasswordPostDescription,
	execute as userLogsChangePasswordPostExecute,
} from './userLogs/changePasswordPost.operation';

// ==================== Own Logs Operations ====================
import {
	description as ownLogsListGetDescription,
	execute as ownLogsListGetExecute,
} from './ownLogs/listGet.operation';
import {
	description as ownLogsGetGetDescription,
	execute as ownLogsGetGetExecute,
} from './ownLogs/getGet.operation';
import {
	description as ownLogsUserLogsListGetDescription,
	execute as ownLogsUserLogsListGetExecute,
} from './ownLogs/userLogsListGet.operation';
import {
	description as ownLogsUserLogsCreatePostDescription,
	execute as ownLogsUserLogsCreatePostExecute,
} from './ownLogs/userLogsCreatePost.operation';
import {
	description as ownLogsUserLogsDeleteDeleteDescription,
	execute as ownLogsUserLogsDeleteDeleteExecute,
} from './ownLogs/userLogsDeleteDelete.operation';
import {
	description as ownLogsUserLogsGetGetDescription,
	execute as ownLogsUserLogsGetGetExecute,
} from './ownLogs/userLogsGetGet.operation';
import {
	description as ownLogsUserLogsUpdatePutDescription,
	execute as ownLogsUserLogsUpdatePutExecute,
} from './ownLogs/userLogsUpdatePut.operation';
import {
	description as ownLogsUserLogsChangePasswordPostDescription,
	execute as ownLogsUserLogsChangePasswordPostExecute,
} from './ownLogs/userLogsChangePasswordPost.operation';

// ==================== Log Operations ====================
import {
	description as logKindListGetDescription,
	execute as logKindListGetExecute,
} from './log/kindListGet.operation';
import {
	description as logKindGetGetDescription,
	execute as logKindGetGetExecute,
} from './log/kindGetGet.operation';
import {
	description as logSubscriptionListGetDescription,
	execute as logSubscriptionListGetExecute,
} from './log/subscriptionListGet.operation';
import {
	description as logSubscriptionCreatePostDescription,
	execute as logSubscriptionCreatePostExecute,
} from './log/subscriptionCreatePost.operation';
import {
	description as logSubscriptionDeleteDeleteDescription,
	execute as logSubscriptionDeleteDeleteExecute,
} from './log/subscriptionDeleteDelete.operation';
import {
	description as logSubscriptionGetGetDescription,
	execute as logSubscriptionGetGetExecute,
} from './log/subscriptionGetGet.operation';
import {
	description as logUrlCreatePostDescription,
	execute as logUrlCreatePostExecute,
} from './log/urlCreatePost.operation';

// ==================== Token Operations ====================
import {
	description as tokenGetGetDescription,
	execute as tokenGetGetExecute,
} from './token/getGet.operation';

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
	description as v2WebsiteDeleteDeleteDescription,
	execute as v2WebsiteDeleteDeleteExecute,
} from './v2/website/deleteDeleteByWebsiteIdGetV2.operation';
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
import {
	description as sslServiceGetGetDescription,
	execute as sslServiceGetGetExecute,
} from './sslService/getGet.operation';
import { execute as sslServiceListGetExecute } from './sslService/listGet.operation';
import { execute as sslServiceCreatePostExecute } from './sslService/createPost.operation';

// ==================== Private Database Operations ====================
import { execute as privateDatabaseListGetExecute } from './privateDatabase/listGet.operation';
import { execute as privateDatabaseGetGetExecute } from './privateDatabase/getGet.operation';
import {
	description as privateDatabaseCreationCapabilitiesGetDescription,
	execute as privateDatabaseCreationCapabilitiesGetExecute,
} from './privateDatabase/creationCapabilitiesGet.operation';

// ==================== Attached Domain Sub-Resources (Phase 4c - lot 2) ====================
import {
	description as attachedDomainDigStatusGetDescription,
	execute as attachedDomainDigStatusGetExecute,
} from './attachedDomain/digStatusGet.operation';
import {
	description as attachedDomainRestartPostDescription,
	execute as attachedDomainRestartPostExecute,
} from './attachedDomain/restartPost.operation';
import {
	description as attachedDomainSslGetDescription,
	execute as attachedDomainSslGetExecute,
} from './attachedDomain/sslGet.operation';
import {
	description as attachedDomainSslCreatePostDescription,
	execute as attachedDomainSslCreatePostExecute,
} from './attachedDomain/sslCreatePost.operation';
import {
	description as attachedDomainSslUpdatePutDescription,
	execute as attachedDomainSslUpdatePutExecute,
} from './attachedDomain/sslUpdatePut.operation';
import {
	description as attachedDomainSslDeleteDescription,
	execute as attachedDomainSslDeleteExecute,
} from './attachedDomain/sslDelete.operation';
import {
	description as attachedDomainSslRegeneratePostDescription,
	execute as attachedDomainSslRegeneratePostExecute,
} from './attachedDomain/sslRegeneratePost.operation';
import {
	description as attachedDomainSslReportGetDescription,
	execute as attachedDomainSslReportGetExecute,
} from './attachedDomain/sslReportGet.operation';

// ==================== Boost History Operations (Phase 4c - lot 2) ====================
import {
	description as boostHistoryListGetDescription,
	execute as boostHistoryListGetExecute,
} from './boostHistory/listGet.operation';
import {
	description as boostHistoryGetGetDescription,
	execute as boostHistoryGetGetExecute,
} from './boostHistory/getGet.operation';

// ==================== Configuration Operations (Phase 4c - lot 2) ====================
import {
	description as configurationGetGetDescription,
	execute as configurationGetGetExecute,
} from './configuration/getGet.operation';

// ==================== Cron Available Language Operations (Phase 4c - lot 2) ====================
import {
	description as cronAvailableLanguageListGetDescription,
	execute as cronAvailableLanguageListGetExecute,
} from './cronAvailableLanguage/listGet.operation';

// ==================== Extra SQL Perso Operations (Phase 4c - lot 2) ====================
import {
	description as extraSqlPersoListGetDescription,
	execute as extraSqlPersoListGetExecute,
} from './extraSqlPerso/listGet.operation';
import {
	description as extraSqlPersoGetGetDescription,
	execute as extraSqlPersoGetGetExecute,
} from './extraSqlPerso/getGet.operation';
import {
	description as extraSqlPersoDatabasesGetDescription,
	execute as extraSqlPersoDatabasesGetExecute,
} from './extraSqlPerso/databasesGet.operation';
import {
	description as extraSqlPersoServiceInfosGetDescription,
	execute as extraSqlPersoServiceInfosGetExecute,
} from './extraSqlPerso/serviceInfosGet.operation';
import {
	description as extraSqlPersoServiceInfosUpdatePostDescription,
	execute as extraSqlPersoServiceInfosUpdatePostExecute,
} from './extraSqlPerso/serviceInfosUpdatePost.operation';
import {
	description as extraSqlPersoTerminatePostDescription,
	execute as extraSqlPersoTerminatePostExecute,
} from './extraSqlPerso/terminatePost.operation';

// ==================== Freedom Operations (Phase 4c - lot 2) ====================
import {
	description as freedomListGetDescription,
	execute as freedomListGetExecute,
} from './freedom/listGet.operation';

// ==================== Indy Operations (Phase 4c - lot 2) ====================
import {
	description as indyListGetDescription,
	execute as indyListGetExecute,
} from './indy/listGet.operation';
import {
	description as indyGetGetDescription,
	execute as indyGetGetExecute,
} from './indy/getGet.operation';

// ==================== SSH Key Operations (Phase 4c - lot 2) ====================
import {
	description as sshKeyListGetDescription,
	execute as sshKeyListGetExecute,
} from './key/sshListGet.operation';
import {
	description as sshKeyCreatePostDescription,
	execute as sshKeyCreatePostExecute,
} from './key/sshCreatePost.operation';

// ==================== Local SEO Operations (Phase 4c - lot 2) ====================
import {
	description as localSeoAccountListGetDescription,
	execute as localSeoAccountListGetExecute,
} from './localSeo/accountListGet.operation';
import {
	description as localSeoAccountGetDescription,
	execute as localSeoAccountGetExecute,
} from './localSeo/accountGet.operation';
import {
	description as localSeoAccountLoginPostDescription,
	execute as localSeoAccountLoginPostExecute,
} from './localSeo/accountLoginPost.operation';
import {
	description as localSeoEmailAvailabilityGetDescription,
	execute as localSeoEmailAvailabilityGetExecute,
} from './localSeo/emailAvailabilityGet.operation';
import {
	description as localSeoLocationListGetDescription,
	execute as localSeoLocationListGetExecute,
} from './localSeo/locationListGet.operation';
import {
	description as localSeoLocationGetDescription,
	execute as localSeoLocationGetExecute,
} from './localSeo/locationGet.operation';
import {
	description as localSeoLocationServiceInfosGetDescription,
	execute as localSeoLocationServiceInfosGetExecute,
} from './localSeo/locationServiceInfosGet.operation';
import {
	description as localSeoLocationServiceInfosUpdatePostDescription,
	execute as localSeoLocationServiceInfosUpdatePostExecute,
} from './localSeo/locationServiceInfosUpdatePost.operation';
import {
	description as localSeoLocationTerminatePostDescription,
	execute as localSeoLocationTerminatePostExecute,
} from './localSeo/locationTerminatePost.operation';

// ==================== Module Operations (Phase 4c - lot 2) ====================
import {
	description as moduleCreatePostDescription,
	execute as moduleCreatePostExecute,
} from './module/createPost.operation';
import {
	description as moduleDeleteDeleteDescription,
	execute as moduleDeleteDeleteExecute,
} from './module/deleteDelete.operation';

// ==================== OvhConfig Operations (Phase 4c - lot 2) ====================
import {
	description as ovhConfigListGetDescription,
	execute as ovhConfigListGetExecute,
} from './ovhConfig/listGet.operation';
import {
	description as ovhConfigGetGetDescription,
	execute as ovhConfigGetGetExecute,
} from './ovhConfig/getGet.operation';
import {
	description as ovhConfigChangeConfigurationPostDescription,
	execute as ovhConfigChangeConfigurationPostExecute,
} from './ovhConfig/changeConfigurationPost.operation';
import {
	description as ovhConfigRollbackPostDescription,
	execute as ovhConfigRollbackPostExecute,
} from './ovhConfig/rollbackPost.operation';
import {
	description as ovhConfigCapabilitiesGetDescription,
	execute as ovhConfigCapabilitiesGetExecute,
} from './ovhConfig/capabilitiesGet.operation';
import {
	description as ovhConfigRecommendedValuesGetDescription,
	execute as ovhConfigRecommendedValuesGetExecute,
} from './ovhConfig/recommendedValuesGet.operation';
import {
	description as ovhConfigRefreshPostDescription,
	execute as ovhConfigRefreshPostExecute,
} from './ovhConfig/refreshPost.operation';

// ==================== Restore Snapshot Operations (Phase 4c - lot 2) ====================
import {
	description as restoreSnapshotCreatePostDescription,
	execute as restoreSnapshotCreatePostExecute,
} from './restoreSnapshot/createPost.operation';

// ==================== Runtime Operations (Phase 4c - lot 2) ====================
import {
	description as runtimeDeleteDeleteDescription,
	execute as runtimeDeleteDeleteExecute,
} from './runtime/deleteDelete.operation';
import {
	description as runtimeAttachedDomainsGetDescription,
	execute as runtimeAttachedDomainsGetExecute,
} from './runtime/attachedDomainsGet.operation';
import {
	description as runtimeAvailableTypesGetDescription,
	execute as runtimeAvailableTypesGetExecute,
} from './runtime/availableTypesGet.operation';

// ==================== SSL Service Operations (Phase 4c - lot 2) ====================
import {
	description as sslServiceDeleteDeleteDescription,
	execute as sslServiceDeleteDeleteExecute,
} from './sslService/deleteDelete.operation';
import {
	description as sslServiceDomainsGetDescription,
	execute as sslServiceDomainsGetExecute,
} from './sslService/domainsGet.operation';
import {
	description as sslServiceRegeneratePostDescription,
	execute as sslServiceRegeneratePostExecute,
} from './sslService/regeneratePost.operation';
import {
	description as sslServiceReportGetDescription,
	execute as sslServiceReportGetExecute,
} from './sslService/reportGet.operation';

// ==================== User Operations (Phase 4c - lot 2) ====================
import {
	description as userCreatePostDescription,
	execute as userCreatePostExecute,
} from './user/createPost.operation';
import {
	description as userDeleteDeleteDescription,
	execute as userDeleteDeleteExecute,
} from './user/deleteDelete.operation';
import {
	description as userChangePasswordPostDescription,
	execute as userChangePasswordPostExecute,
} from './user/changePasswordPost.operation';

// ==================== VCS Operations (Phase 4c - lot 2) ====================
import {
	description as vcsWebhooksGetDescription,
	execute as vcsWebhooksGetExecute,
} from './vcs/webhooksGet.operation';

// ==================== Website Operations (Phase 4c - lot 2) ====================
import {
	description as websiteDeploymentGetByIdDescription,
	execute as websiteDeploymentGetByIdExecute,
} from './website/deploymentGetById.operation';
import {
	description as websiteDeploymentLogsGetDescription,
	execute as websiteDeploymentLogsGetExecute,
} from './website/deploymentLogsGet.operation';

// ==================== Phase 4c - lot 3 : Global operations ====================
import {
	description as availableOfferGetDescription,
	execute as availableOfferGetExecute,
} from './availableOfferGet.operation';
import {
	description as incidentGetDescription,
	execute as incidentGetExecute,
} from './incidentGet.operation';
import {
	description as offerCapabilitiesGetDescription,
	execute as offerCapabilitiesGetExecute,
} from './offerCapabilitiesGet.operation';
import {
	description as moduleCatalogListGetDescription,
	execute as moduleCatalogListGetExecute,
} from './moduleList/listGet.operation';
import {
	description as moduleCatalogGetByIdDescription,
	execute as moduleCatalogGetByIdExecute,
} from './moduleList/getById.operation';
import {
	description as vcsSupportedGetDescription,
	execute as vcsSupportedGetExecute,
} from './vcs/supportedGet.operation';
import {
	description as localSeoDirectoriesListGetDescription,
	execute as localSeoDirectoriesListGetExecute,
} from './localSeo/directoriesListGet.operation';
import {
	description as localSeoEmailAvailabilityGlobalGetDescription,
	execute as localSeoEmailAvailabilityGlobalGetExecute,
} from './localSeo/emailAvailabilityGlobalGet.operation';
import {
	description as localSeoVisibilityCheckPostDescription,
	execute as localSeoVisibilityCheckPostExecute,
} from './localSeo/visibilityCheckPost.operation';
import {
	description as localSeoVisibilityCheckResultGetDescription,
	execute as localSeoVisibilityCheckResultGetExecute,
} from './localSeo/visibilityCheckResultGet.operation';

// ==================== Phase 4c - lot 3 : envVar / serviceInfos ====================
import {
	description as envVarCreatePostDescription,
	execute as envVarCreatePostExecute,
} from './envVarCreatePost.operation';
import {
	description as envVarUpdatePutDescription,
	execute as envVarUpdatePutExecute,
} from './envVarUpdatePut.operation';
import {
	description as envVarDeleteDeleteDescription,
	execute as envVarDeleteDeleteExecute,
} from './envVarDeleteDelete.operation';
import {
	description as serviceInfosUpdatePutDescription,
	execute as serviceInfosUpdatePutExecute,
} from './serviceInfosUpdatePut.operation';

// ==================== Phase 4c - lot 3 : CDN sub-resources ====================
import {
	description as cdnDomainGetGetDescription,
	execute as cdnDomainGetGetExecute,
} from './cdn/cdnDomainGetGet.operation';
import {
	description as cdnDomainLogsGetDescription,
	execute as cdnDomainLogsGetExecute,
} from './cdn/cdnDomainLogsGet.operation';
import {
	description as cdnDomainStatisticsGetDescription,
	execute as cdnDomainStatisticsGetExecute,
} from './cdn/cdnDomainStatisticsGet.operation';
import {
	description as cdnDomainRefreshPostDescription,
	execute as cdnDomainRefreshPostExecute,
} from './cdn/cdnDomainRefreshPost.operation';
import {
	description as cdnDomainOptionCreatePostDescription,
	execute as cdnDomainOptionCreatePostExecute,
} from './cdn/cdnDomainOptionCreatePost.operation';
import {
	description as cdnDomainOptionGetGetDescription,
	execute as cdnDomainOptionGetGetExecute,
} from './cdn/cdnDomainOptionGetGet.operation';
import {
	description as cdnDomainOptionDeleteDeleteDescription,
	execute as cdnDomainOptionDeleteDeleteExecute,
} from './cdn/cdnDomainOptionDeleteDelete.operation';
import {
	description as cdnOperationGetGetDescription,
	execute as cdnOperationGetGetExecute,
} from './cdn/cdnOperationGetGet.operation';

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
				// ==================== Phase 4c - lot 3 : Global ====================
				// ==================== Phase 4c - lot 3 : envVar / serviceInfos ====================
				// ==================== Phase 4c - lot 3 : CDN ====================
				{
					name: 'Attach Domain',
					value: 'attachedDomainCreate',
					action: 'Attach a domain to hosting',
				},
				{
					displayName: 'Attached Domain - Dig Status',
					name: 'attachedDomainDigStatus',
					value: 'attachedDomainDigStatus',
				},
				{
					displayName: 'Attached Domain - Restart',
					name: 'attachedDomainRestart',
					value: 'attachedDomainRestart',
				},
				{
					displayName: 'Attached Domain - SSL Create',
					name: 'attachedDomainSslCreate',
					value: 'attachedDomainSslCreate',
				},
				{
					displayName: 'Attached Domain - SSL Delete',
					name: 'attachedDomainSslDelete',
					value: 'attachedDomainSslDelete',
				},
				{
					displayName: 'Attached Domain - SSL Get',
					name: 'attachedDomainSslGet',
					value: 'attachedDomainSslGet',
				},
				{
					displayName: 'Attached Domain - SSL Regenerate',
					name: 'attachedDomainSslRegenerate',
					value: 'attachedDomainSslRegenerate',
				},
				{
					displayName: 'Attached Domain - SSL Report',
					name: 'attachedDomainSslReport',
					value: 'attachedDomainSslReport',
				},
				{
					displayName: 'Attached Domain - SSL Update',
					name: 'attachedDomainSslUpdate',
					value: 'attachedDomainSslUpdate',
				},
				{
					displayName: 'Available Offer',
					name: 'availableOfferGet',
					value: 'availableOfferGet',
				},
				{
					displayName: 'Boost History - Get',
					name: 'boostHistoryGet',
					value: 'boostHistoryGet',
				},
				{
					displayName: 'Boost History - List',
					name: 'boostHistoryList',
					value: 'boostHistoryList',
				},
				{ displayName: 'Add CDN Domain', name: 'cdnAddDomain', value: 'cdnAddDomain' },
				{
					displayName: 'CDN - Available Options',
					name: 'cdnAvailableOptions',
					value: 'cdnAvailableOptions',
				},
				{ displayName: 'CDN - Delete Domain', name: 'cdnDeleteDomain', value: 'cdnDeleteDomain' },
				{
					displayName: 'CDN - Get Domain',
					name: 'cdnDomainGet',
					value: 'cdnDomainGet',
				},
				{
					displayName: 'CDN - Domain Logs',
					name: 'cdnDomainLogs',
					value: 'cdnDomainLogs',
				},
				{
					displayName: 'CDN - Create Domain Option',
					name: 'cdnDomainOptionCreate',
					value: 'cdnDomainOptionCreate',
				},
				{
					displayName: 'CDN - Delete Domain Option',
					name: 'cdnDomainOptionDelete',
					value: 'cdnDomainOptionDelete',
				},
				{
					displayName: 'CDN - Get Domain Option',
					name: 'cdnDomainOptionGet',
					value: 'cdnDomainOptionGet',
				},
				{
					displayName: 'CDN - Refresh Domain',
					name: 'cdnDomainRefresh',
					value: 'cdnDomainRefresh',
				},
				{
					displayName: 'CDN - Domain Statistics',
					name: 'cdnDomainStatistics',
					value: 'cdnDomainStatistics',
				},
				{ displayName: 'CDN - Get', name: 'cdnGet', value: 'cdnGet' },
				{ displayName: 'CDN - List Domains', name: 'cdnListDomains', value: 'cdnListDomains' },
				{
					displayName: 'CDN - List Operations',
					name: 'cdnListOperations',
					value: 'cdnListOperations',
				},
				{ displayName: 'CDN - List Options', name: 'cdnListOptions', value: 'cdnListOptions' },
				{
					displayName: 'CDN - Get Operation',
					name: 'cdnOperationGet',
					value: 'cdnOperationGet',
				},
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
					displayName: 'Configuration - Get',
					name: 'configurationGet',
					value: 'configurationGet',
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
					displayName: 'Cron Available Language - List',
					name: 'cronAvailableLanguageList',
					value: 'cronAvailableLanguageList',
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
				{
					displayName: 'DB - Available Types',
					name: 'dbAvailableTypes',
					value: 'dbAvailableTypes',
				},
				{
					displayName: 'DB - Available Versions',
					name: 'dbAvailableVersions',
					value: 'dbAvailableVersions',
				},
				{ displayName: 'DB - Capabilities', name: 'dbCapabilities', value: 'dbCapabilities' },
				{
					displayName: 'DB - Change Password',
					name: 'dbChangePassword',
					value: 'dbChangePassword',
				},
				{ displayName: 'DB - Copy Database', name: 'dbCopyDatabase', value: 'dbCopyDatabase' },
				{ displayName: 'DB - Delete Copy', name: 'dbCopyDelete', value: 'dbCopyDelete' },
				{ displayName: 'DB - Get Copy', name: 'dbCopyGet', value: 'dbCopyGet' },
				{ displayName: 'DB - Copy List', name: 'dbCopyList', value: 'dbCopyList' },
				{
					displayName: 'DB - Restore from Copy',
					name: 'dbCopyRestore',
					value: 'dbCopyRestore',
				},
				{ displayName: 'DB - Create Dump', name: 'dbCreateDump', value: 'dbCreateDump' },
				{
					displayName: 'DB - Creation Capabilities',
					name: 'dbCreationCapabilities',
					value: 'dbCreationCapabilities',
				},
				{ displayName: 'DB - Delete Dump', name: 'dbDumpDelete', value: 'dbDumpDelete' },
				{
					displayName: 'DB - Get Dump by ID',
					name: 'dbDumpGetById',
					value: 'dbDumpGetById',
				},
				{
					displayName: 'DB - Restore from Dump',
					name: 'dbDumpRestore',
					value: 'dbDumpRestore',
				},
				{ displayName: 'DB - Get Dump', name: 'dbGetDump', value: 'dbGetDump' },
				{ displayName: 'DB - Get Restore', name: 'dbGetRestore', value: 'dbGetRestore' },
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
				{ displayName: 'Dump - Delete', name: 'dumpDelete', value: 'dumpDelete' },
				{ displayName: 'Dump - Get', name: 'dumpGet', value: 'dumpGet' },
				{ displayName: 'Dump - List', name: 'dumpList', value: 'dumpList' },
				{
					displayName: 'Email - Bounces',
					name: 'emailBounces',
					value: 'emailBounces',
				},
				{ displayName: 'Email - Create', name: 'emailCreate', value: 'emailCreate' },
				{ displayName: 'Email - Delete', name: 'emailDelete', value: 'emailDelete' },
				{ displayName: 'Email - List', name: 'emailList', value: 'emailList' },
				{
					displayName: 'Email Option - Get',
					name: 'emailOptionGet',
					value: 'emailOptionGet',
				},
				{
					displayName: 'Email Option - List',
					name: 'emailOptionList',
					value: 'emailOptionList',
				},
				{
					displayName: 'Email Option - Service Infos',
					name: 'emailOptionServiceInfos',
					value: 'emailOptionServiceInfos',
				},
				{
					displayName: 'Email Option - Terminate',
					name: 'emailOptionTerminate',
					value: 'emailOptionTerminate',
				},
				{
					displayName: 'Email - Request Operation',
					name: 'emailRequest',
					value: 'emailRequest',
				},
				{ displayName: 'Email - Update', name: 'emailUpdate', value: 'emailUpdate' },
				{
					displayName: 'Email - Volumes History',
					name: 'emailVolumes',
					value: 'emailVolumes',
				},
				{
					name: 'Environment Variable Set',
					value: 'envVarSetCreate',
					action: 'Set an environment variable',
				},
				{
					displayName: 'Environment Variable - Create',
					name: 'envVarCreatePost',
					value: 'envVarCreatePost',
				},
				{
					displayName: 'Environment Variable - Delete',
					name: 'envVarDeleteDelete',
					value: 'envVarDeleteDelete',
				},
				{
					displayName: 'Environment Variable - Update',
					name: 'envVarUpdatePut',
					value: 'envVarUpdatePut',
				},
				{
					displayName: 'Extra SQL Perso - Databases',
					name: 'extraSqlPersoDatabases',
					value: 'extraSqlPersoDatabases',
				},
				{
					displayName: 'Extra SQL Perso - Get',
					name: 'extraSqlPersoGet',
					value: 'extraSqlPersoGet',
				},
				{
					displayName: 'Extra SQL Perso - List',
					name: 'extraSqlPersoList',
					value: 'extraSqlPersoList',
				},
				{
					displayName: 'Extra SQL Perso - Service Infos',
					name: 'extraSqlPersoServiceInfos',
					value: 'extraSqlPersoServiceInfos',
				},
				{
					displayName: 'Extra SQL Perso - Service Infos Update',
					name: 'extraSqlPersoServiceInfosUpdate',
					value: 'extraSqlPersoServiceInfosUpdate',
				},
				{
					displayName: 'Extra SQL Perso - Terminate',
					name: 'extraSqlPersoTerminate',
					value: 'extraSqlPersoTerminate',
				},
				{
					name: 'Find Hosting by Domain',
					value: 'findByDomain',
					action: 'Find hosting services linked to a domain',
				},
				{
					displayName: 'Freedom - List',
					name: 'freedomList',
					value: 'freedomList',
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
				{
					name: 'Get Statistics',
					value: 'statisticsGet',
					action: 'Get hosting statistics (bandwidth, hits, errors)',
				},
				{ name: 'Get Task', value: 'getTask', action: 'Get a task' },
				{ name: 'Get User', value: 'getUser', action: 'Get a user' },
				{
					name: 'Import Custom Certificate',
					value: 'importCustomCertificateCreate',
					action: 'Import a custom SSL certificate',
				},
				{ displayName: 'Incident - Get', name: 'incidentGet', value: 'incidentGet' },
				{ displayName: 'Indy - Get', name: 'indyGet', value: 'indyGet' },
				{
					displayName: 'Indy - List',
					name: 'indyList',
					value: 'indyList',
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
					displayName: 'Local SEO - Account Get',
					name: 'localSeoAccountGet',
					value: 'localSeoAccountGet',
				},
				{
					displayName: 'Local SEO - Account List',
					name: 'localSeoAccountList',
					value: 'localSeoAccountList',
				},
				{
					displayName: 'Local SEO - Account Login',
					name: 'localSeoAccountLogin',
					value: 'localSeoAccountLogin',
				},
				{
					displayName: 'Local SEO - Directories List',
					name: 'localSeoDirectoriesList',
					value: 'localSeoDirectoriesList',
				},
				{
					displayName: 'Local SEO - Email Availability',
					name: 'localSeoEmailAvailability',
					value: 'localSeoEmailAvailability',
				},
				{
					displayName: 'Local SEO - Email Availability (Global)',
					name: 'localSeoEmailAvailabilityGlobal',
					value: 'localSeoEmailAvailabilityGlobal',
				},
				{
					displayName: 'Local SEO - Location Get',
					name: 'localSeoLocationGet',
					value: 'localSeoLocationGet',
				},
				{
					displayName: 'Local SEO - Location List',
					name: 'localSeoLocationList',
					value: 'localSeoLocationList',
				},
				{
					displayName: 'Local SEO - Location Service Infos',
					name: 'localSeoLocationServiceInfos',
					value: 'localSeoLocationServiceInfos',
				},
				{
					displayName: 'Local SEO - Location Service Infos Update',
					name: 'localSeoLocationServiceInfosUpdate',
					value: 'localSeoLocationServiceInfosUpdate',
				},
				{
					displayName: 'Local SEO - Location Terminate',
					name: 'localSeoLocationTerminate',
					value: 'localSeoLocationTerminate',
				},
				{
					displayName: 'Local SEO - Visibility Check',
					name: 'localSeoVisibilityCheck',
					value: 'localSeoVisibilityCheck',
				},
				{
					displayName: 'Local SEO - Visibility Check Result',
					name: 'localSeoVisibilityCheckResult',
					value: 'localSeoVisibilityCheckResult',
				},
				{
					displayName: 'Log - Get Kind',
					name: 'logKindGet',
					value: 'logKindGet',
				},
				{
					displayName: 'Log - List Kinds',
					name: 'logKindList',
					value: 'logKindList',
				},
				{
					displayName: 'Log - Create Subscription',
					name: 'logSubscriptionCreate',
					value: 'logSubscriptionCreate',
				},
				{
					displayName: 'Log - Delete Subscription',
					name: 'logSubscriptionDelete',
					value: 'logSubscriptionDelete',
				},
				{
					displayName: 'Log - Get Subscription',
					name: 'logSubscriptionGet',
					value: 'logSubscriptionGet',
				},
				{
					displayName: 'Log - List Subscriptions',
					name: 'logSubscriptionList',
					value: 'logSubscriptionList',
				},
				{
					displayName: 'Log - Generate Temporary URL',
					name: 'logUrl',
					value: 'logUrl',
				},
				{
					displayName: 'Module Catalog - Get by ID',
					name: 'moduleCatalogGetById',
					value: 'moduleCatalogGetById',
				},
				{
					displayName: 'Module Catalog - List',
					name: 'moduleCatalogList',
					value: 'moduleCatalogList',
				},
				{
					displayName: 'Module - Create',
					name: 'moduleCreate',
					value: 'moduleCreate',
				},
				{
					displayName: 'Module - Delete',
					name: 'moduleDelete',
					value: 'moduleDelete',
				},
				{ displayName: 'Module - List', name: 'moduleList', value: 'moduleList' },
				{ displayName: 'Module - Update', name: 'moduleUpdate', value: 'moduleUpdate' },
				{
					displayName: 'Offer Capabilities',
					name: 'offerCapabilitiesGet',
					value: 'offerCapabilitiesGet',
				},
				{
					displayName: 'OvhConfig - Capabilities',
					name: 'ovhConfigCapabilities',
					value: 'ovhConfigCapabilities',
				},
				{
					displayName: 'OvhConfig - Change Configuration',
					name: 'ovhConfigChangeConfiguration',
					value: 'ovhConfigChangeConfiguration',
				},
				{
					displayName: 'OvhConfig - Get',
					name: 'ovhConfigGet',
					value: 'ovhConfigGet',
				},
				{
					displayName: 'OvhConfig - List',
					name: 'ovhConfigList',
					value: 'ovhConfigList',
				},
				{
					displayName: 'OvhConfig - Recommended Values',
					name: 'ovhConfigRecommendedValues',
					value: 'ovhConfigRecommendedValues',
				},
				{
					displayName: 'OvhConfig - Refresh',
					name: 'ovhConfigRefresh',
					value: 'ovhConfigRefresh',
				},
				{
					displayName: 'OvhConfig - Rollback',
					name: 'ovhConfigRollback',
					value: 'ovhConfigRollback',
				},
				{
					displayName: 'Own Logs - Get',
					name: 'ownLogsGet',
					value: 'ownLogsGet',
				},
				{
					displayName: 'Own Logs - List',
					name: 'ownLogsList',
					value: 'ownLogsList',
				},
				{
					displayName: 'Own Logs - Change Password',
					name: 'ownLogsUserLogsChangePassword',
					value: 'ownLogsUserLogsChangePassword',
				},
				{
					displayName: 'Own Logs - Create User Logs',
					name: 'ownLogsUserLogsCreate',
					value: 'ownLogsUserLogsCreate',
				},
				{
					displayName: 'Own Logs - Delete User Logs',
					name: 'ownLogsUserLogsDelete',
					value: 'ownLogsUserLogsDelete',
				},
				{
					displayName: 'Own Logs - Get User Logs',
					name: 'ownLogsUserLogsGet',
					value: 'ownLogsUserLogsGet',
				},
				{
					displayName: 'Own Logs - List User Logs',
					name: 'ownLogsUserLogsList',
					value: 'ownLogsUserLogsList',
				},
				{
					displayName: 'Own Logs - Update User Logs',
					name: 'ownLogsUserLogsUpdate',
					value: 'ownLogsUserLogsUpdate',
				},
				{
					displayName: 'Private DB - Creation Capabilities',
					name: 'privateDatabaseCreationCapabilities',
					value: 'privateDatabaseCreationCapabilities',
				},
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
				{
					name: 'Purge CDN Cache',
					value: 'attachedDomainPurgeCacheCreate',
					action: 'Purge CDN cache for an attached domain',
				},
				{
					displayName: 'Restore Snapshot',
					name: 'restoreSnapshot',
					value: 'restoreSnapshot',
				},
				{
					displayName: 'Runtime - Attached Domains',
					name: 'runtimeAttachedDomains',
					value: 'runtimeAttachedDomains',
				},
				{
					displayName: 'Runtime - Available Types',
					name: 'runtimeAvailableTypes',
					value: 'runtimeAvailableTypes',
				},
				{ displayName: 'Runtime - Create', name: 'runtimeCreate', value: 'runtimeCreate' },
				{
					displayName: 'Runtime - Delete',
					name: 'runtimeDelete',
					value: 'runtimeDelete',
				},
				{ displayName: 'Runtime - Get', name: 'runtimeGet2', value: 'runtimeGet2' },
				{ displayName: 'Runtime - List', name: 'runtimeList2', value: 'runtimeList2' },
				{ displayName: 'Runtime - Update', name: 'runtimeUpdate', value: 'runtimeUpdate' },
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
					displayName: 'Service Infos - Update',
					name: 'serviceInfosUpdatePut',
					value: 'serviceInfosUpdatePut',
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
				{ displayName: 'SSH Key - Create', name: 'sshKeyCreate', value: 'sshKeyCreate' },
				{ displayName: 'SSH Key - List', name: 'sshKeyList', value: 'sshKeyList' },
				{ displayName: 'SSL - Create', name: 'sslCreate', value: 'sslCreate' },
				{
					displayName: 'SSL - Delete',
					name: 'sslDelete',
					value: 'sslDelete',
				},
				{
					displayName: 'SSL - Domains',
					name: 'sslDomains',
					value: 'sslDomains',
				},
				{ displayName: 'SSL - Get', name: 'sslGet', value: 'sslGet' },
				{ displayName: 'SSL - List', name: 'sslList', value: 'sslList' },
				{
					displayName: 'SSL - Regenerate',
					name: 'sslRegenerate',
					value: 'sslRegenerate',
				},
				{
					displayName: 'SSL - Report',
					name: 'sslReport',
					value: 'sslReport',
				},
				{
					displayName: 'Token - Get',
					name: 'tokenGet',
					value: 'tokenGet',
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
				{
					displayName: 'User - Change Password',
					name: 'userChangePassword',
					value: 'userChangePassword',
				},
				{
					displayName: 'User - Create',
					name: 'userCreate',
					value: 'userCreate',
				},
				{
					displayName: 'User - Delete',
					name: 'userDelete',
					value: 'userDelete',
				},
				{
					displayName: 'User Logs - Change Password',
					name: 'userLogsChangePassword',
					value: 'userLogsChangePassword',
				},
				{
					displayName: 'User Logs - Create',
					name: 'userLogsCreate',
					value: 'userLogsCreate',
				},
				{
					displayName: 'User Logs - Delete',
					name: 'userLogsDelete',
					value: 'userLogsDelete',
				},
				{
					displayName: 'User Logs - Get',
					name: 'userLogsGet',
					value: 'userLogsGet',
				},
				{
					displayName: 'User Logs - List',
					name: 'userLogsList',
					value: 'userLogsList',
				},
				{
					displayName: 'User Logs - Update',
					name: 'userLogsUpdate',
					value: 'userLogsUpdate',
				},
				{
					displayName: 'VCS - Supported Platforms',
					name: 'vcsSupported',
					value: 'vcsSupported',
				},
				{
					displayName: 'VCS - Webhooks',
					name: 'vcsWebhooks',
					value: 'vcsWebhooks',
				},
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
					displayName: 'Website - Get Deployment',
					name: 'websiteDeploymentGetById',
					value: 'websiteDeploymentGetById',
				},
				{
					displayName: 'Website - Deployment Logs',
					name: 'websiteDeploymentLogs',
					value: 'websiteDeploymentLogs',
				},
				{
					displayName: 'Website Deployment Status',
					name: 'websiteDeploymentStatus',
					value: 'websiteDeploymentStatus',
				},
				{ displayName: 'Website - Get', name: 'websiteGet', value: 'websiteGet' },
				{ displayName: 'Website - List', name: 'websiteList', value: 'websiteList' },
				{ displayName: 'Website - Update', name: 'websiteUpdate', value: 'websiteUpdate' },
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
			{
				displayName: 'v2 - Create Attached Domain',
				name: 'v2CreateAttachedDomain',
				value: 'v2CreateAttachedDomain',
			},
			{ displayName: 'v2 - Create Website', name: 'v2CreateWebsite', value: 'v2CreateWebsite' },
			{ displayName: 'v2 - Delete User', name: 'v2DeleteUser', value: 'v2DeleteUser' },
			{ displayName: 'v2 - Delete Website', name: 'v2DeleteWebsite', value: 'v2DeleteWebsite' },
			{ displayName: 'v2 - Get Resource', name: 'v2GetResource', value: 'v2GetResource' },
			{
				displayName: 'v2 - Get Resource Attached Domains',
				name: 'v2GetResourceAttachedDomains',
				value: 'v2GetResourceAttachedDomains',
			},
			{ displayName: 'v2 - Get Website', name: 'v2GetWebsite', value: 'v2GetWebsite' },
			{
				displayName: 'v2 - Import Custom Certificate',
				name: 'v2ImportCustomCertificate',
				value: 'v2ImportCustomCertificate',
			},
			{
				displayName: 'v2 - List Attached Domains',
				name: 'v2ListAttachedDomains',
				value: 'v2ListAttachedDomains',
			},
			{
				displayName: 'v2 - List Certificates',
				name: 'v2ListCertificates',
				value: 'v2ListCertificates',
			},
			{
				displayName: 'v2 - List Resource Attached Domains',
				name: 'v2ListResourceAttachedDomains',
				value: 'v2ListResourceAttachedDomains',
			},
			{ displayName: 'v2 - List Resources', name: 'v2ListResources', value: 'v2ListResources' },
			{
				displayName: 'v2 - List Website Domains',
				name: 'v2ListWebsiteDomains',
				value: 'v2ListWebsiteDomains',
			},
			{ displayName: 'v2 - List Websites', name: 'v2ListWebsites', value: 'v2ListWebsites' },
			{ displayName: 'v2 - Update Website', name: 'v2UpdateWebsite', value: 'v2UpdateWebsite' },
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
		...(dbRestoreGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbGetRestore'] },
		}) as INodeProperties[]),

		// Database copy/dump sub-resources (Phase 4c)
		...(dbCopyListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbCopyList'] },
		}) as INodeProperties[]),
		...(dbCopyGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbCopyGet'] },
		}) as INodeProperties[]),
		...(dbCopyDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbCopyDelete'] },
		}) as INodeProperties[]),
		...(dbCopyRestorePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbCopyRestore'] },
		}) as INodeProperties[]),
		...(dbDumpGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbDumpGetById'] },
		}) as INodeProperties[]),
		...(dbDumpDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbDumpDelete'] },
		}) as INodeProperties[]),
		...(dbDumpRestorePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbDumpRestore'] },
		}) as INodeProperties[]),

		// Database available operations (Phase 4c)
		...(dbAvailableTypeListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbAvailableTypes'] },
		}) as INodeProperties[]),
		...(dbAvailableVersionListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbAvailableVersions'] },
		}) as INodeProperties[]),
		...(dbCreationCapabilitiesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dbCreationCapabilities'] },
		}) as INodeProperties[]),

		// Dump operations (Phase 4c)
		...(dumpListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dumpList'] },
		}) as INodeProperties[]),
		...(dumpGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dumpGet'] },
		}) as INodeProperties[]),
		...(dumpDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['dumpDelete'] },
		}) as INodeProperties[]),

		// Email operations (Phase 4c)
		...(emailUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailUpdate'] },
		}) as INodeProperties[]),
		...(emailBouncesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailBounces'] },
		}) as INodeProperties[]),
		...(emailRequestPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailRequest'] },
		}) as INodeProperties[]),
		...(emailVolumesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailVolumes'] },
		}) as INodeProperties[]),

		// Email Option operations (Phase 4c)
		...(emailOptionListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailOptionList'] },
		}) as INodeProperties[]),
		...(emailOptionGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailOptionGet'] },
		}) as INodeProperties[]),
		...(emailOptionServiceInfosGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailOptionServiceInfos'] },
		}) as INodeProperties[]),
		...(emailOptionTerminatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['emailOptionTerminate'] },
		}) as INodeProperties[]),

		// User Logs operations (Phase 4c)
		...(userLogsListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userLogsList'] },
		}) as INodeProperties[]),
		...(userLogsCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userLogsCreate'] },
		}) as INodeProperties[]),
		...(userLogsDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userLogsDelete'] },
		}) as INodeProperties[]),
		...(userLogsGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userLogsGet'] },
		}) as INodeProperties[]),
		...(userLogsUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userLogsUpdate'] },
		}) as INodeProperties[]),
		...(userLogsChangePasswordPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userLogsChangePassword'] },
		}) as INodeProperties[]),

		// Own Logs operations (Phase 4c)
		...(ownLogsListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsList'] },
		}) as INodeProperties[]),
		...(ownLogsGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsGet'] },
		}) as INodeProperties[]),
		...(ownLogsUserLogsListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsUserLogsList'] },
		}) as INodeProperties[]),
		...(ownLogsUserLogsCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsUserLogsCreate'] },
		}) as INodeProperties[]),
		...(ownLogsUserLogsDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsUserLogsDelete'] },
		}) as INodeProperties[]),
		...(ownLogsUserLogsGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsUserLogsGet'] },
		}) as INodeProperties[]),
		...(ownLogsUserLogsUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsUserLogsUpdate'] },
		}) as INodeProperties[]),
		...(ownLogsUserLogsChangePasswordPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ownLogsUserLogsChangePassword'] },
		}) as INodeProperties[]),

		// Log operations (Phase 4c)
		...(logKindListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['logKindList'] },
		}) as INodeProperties[]),
		...(logKindGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['logKindGet'] },
		}) as INodeProperties[]),
		...(logSubscriptionListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['logSubscriptionList'] },
		}) as INodeProperties[]),
		...(logSubscriptionCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['logSubscriptionCreate'] },
		}) as INodeProperties[]),
		...(logSubscriptionDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['logSubscriptionDelete'] },
		}) as INodeProperties[]),
		...(logSubscriptionGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['logSubscriptionGet'] },
		}) as INodeProperties[]),
		...(logUrlCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['logUrl'] },
		}) as INodeProperties[]),

		// Token operations (Phase 4c)
		...(tokenGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['tokenGet'] },
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
		...(v2WebsiteDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v2'], hostingOperationV2: ['v2DeleteWebsite'] },
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
		// SSL Service parameters
		...(sslServiceGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['sslGet'] },
		}) as INodeProperties[]),

		// ==================== Phase 4c - Lot 2 parameters ====================
		// Attached Domain sub-resources
		...(attachedDomainDigStatusGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainDigStatus'] },
		}) as INodeProperties[]),
		...(attachedDomainRestartPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainRestart'] },
		}) as INodeProperties[]),
		...(attachedDomainSslDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainSslDelete'] },
		}) as INodeProperties[]),
		...(attachedDomainSslGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainSslGet'] },
		}) as INodeProperties[]),
		...(attachedDomainSslCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainSslCreate'] },
		}) as INodeProperties[]),
		...(attachedDomainSslUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainSslUpdate'] },
		}) as INodeProperties[]),
		...(attachedDomainSslRegeneratePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainSslRegenerate'] },
		}) as INodeProperties[]),
		...(attachedDomainSslReportGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['attachedDomainSslReport'] },
		}) as INodeProperties[]),
		// Boost History
		...(boostHistoryListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['boostHistoryList'] },
		}) as INodeProperties[]),
		...(boostHistoryGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['boostHistoryGet'] },
		}) as INodeProperties[]),
		// Configuration
		...(configurationGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['configurationGet'] },
		}) as INodeProperties[]),
		// Cron Available Language
		...(cronAvailableLanguageListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cronAvailableLanguageList'] },
		}) as INodeProperties[]),
		// Extra SQL Perso
		...(extraSqlPersoListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['extraSqlPersoList'] },
		}) as INodeProperties[]),
		...(extraSqlPersoGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['extraSqlPersoGet'] },
		}) as INodeProperties[]),
		...(extraSqlPersoDatabasesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['extraSqlPersoDatabases'] },
		}) as INodeProperties[]),
		...(extraSqlPersoServiceInfosGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['extraSqlPersoServiceInfos'] },
		}) as INodeProperties[]),
		...(extraSqlPersoServiceInfosUpdatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['extraSqlPersoServiceInfosUpdate'] },
		}) as INodeProperties[]),
		...(extraSqlPersoTerminatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['extraSqlPersoTerminate'] },
		}) as INodeProperties[]),
		// Freedom
		...(freedomListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['freedomList'] },
		}) as INodeProperties[]),
		// Indy
		...(indyListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['indyList'] },
		}) as INodeProperties[]),
		...(indyGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['indyGet'] },
		}) as INodeProperties[]),
		// SSH Keys
		...(sshKeyListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['sshKeyList'] },
		}) as INodeProperties[]),
		...(sshKeyCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['sshKeyCreate'] },
		}) as INodeProperties[]),
		// Local SEO
		...(localSeoAccountListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoAccountList'] },
		}) as INodeProperties[]),
		...(localSeoAccountGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoAccountGet'] },
		}) as INodeProperties[]),
		...(localSeoAccountLoginPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoAccountLogin'] },
		}) as INodeProperties[]),
		...(localSeoEmailAvailabilityGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoEmailAvailability'] },
		}) as INodeProperties[]),
		...(localSeoLocationListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoLocationList'] },
		}) as INodeProperties[]),
		...(localSeoLocationGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoLocationGet'] },
		}) as INodeProperties[]),
		...(localSeoLocationServiceInfosGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoLocationServiceInfos'] },
		}) as INodeProperties[]),
		...(localSeoLocationServiceInfosUpdatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoLocationServiceInfosUpdate'] },
		}) as INodeProperties[]),
		...(localSeoLocationTerminatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoLocationTerminate'] },
		}) as INodeProperties[]),
		// Module
		...(moduleCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['moduleCreate'] },
		}) as INodeProperties[]),
		...(moduleDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['moduleDelete'] },
		}) as INodeProperties[]),
		// OvhConfig
		...(ovhConfigListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ovhConfigList'] },
		}) as INodeProperties[]),
		...(ovhConfigGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ovhConfigGet'] },
		}) as INodeProperties[]),
		...(ovhConfigChangeConfigurationPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ovhConfigChangeConfiguration'] },
		}) as INodeProperties[]),
		...(ovhConfigRollbackPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ovhConfigRollback'] },
		}) as INodeProperties[]),
		...(ovhConfigCapabilitiesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ovhConfigCapabilities'] },
		}) as INodeProperties[]),
		...(ovhConfigRecommendedValuesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ovhConfigRecommendedValues'] },
		}) as INodeProperties[]),
		...(ovhConfigRefreshPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['ovhConfigRefresh'] },
		}) as INodeProperties[]),
		// Private Database
		...(privateDatabaseCreationCapabilitiesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['privateDatabaseCreationCapabilities'] },
		}) as INodeProperties[]),
		// Restore Snapshot
		...(restoreSnapshotCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['restoreSnapshot'] },
		}) as INodeProperties[]),
		// Runtime
		...(runtimeDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['runtimeDelete'] },
		}) as INodeProperties[]),
		...(runtimeAttachedDomainsGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['runtimeAttachedDomains'] },
		}) as INodeProperties[]),
		...(runtimeAvailableTypesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['runtimeAvailableTypes'] },
		}) as INodeProperties[]),
		// SSL Service
		...(sslServiceDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['sslDelete'] },
		}) as INodeProperties[]),
		...(sslServiceDomainsGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['sslDomains'] },
		}) as INodeProperties[]),
		...(sslServiceRegeneratePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['sslRegenerate'] },
		}) as INodeProperties[]),
		...(sslServiceReportGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['sslReport'] },
		}) as INodeProperties[]),
		// User
		...(userCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userCreate'] },
		}) as INodeProperties[]),
		...(userDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userDelete'] },
		}) as INodeProperties[]),
		...(userChangePasswordPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['userChangePassword'] },
		}) as INodeProperties[]),
		// VCS
		...(vcsWebhooksGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['vcsWebhooks'] },
		}) as INodeProperties[]),
		// Website deployment
		...(websiteDeploymentGetByIdDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteDeploymentGetById'] },
		}) as INodeProperties[]),
		...(websiteDeploymentLogsGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['websiteDeploymentLogs'] },
		}) as INodeProperties[]),
		// ==================== Phase 4c - lot 3 : Global ====================
		...(availableOfferGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['availableOfferGet'] },
		}) as INodeProperties[]),
		...(incidentGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['incidentGet'] },
		}) as INodeProperties[]),
		...(offerCapabilitiesGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['offerCapabilitiesGet'] },
		}) as INodeProperties[]),
		...(moduleCatalogListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['moduleCatalogList'] },
		}) as INodeProperties[]),
		...(moduleCatalogGetByIdDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['moduleCatalogGetById'] },
		}) as INodeProperties[]),
		...(vcsSupportedGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['vcsSupported'] },
		}) as INodeProperties[]),
		...(localSeoDirectoriesListGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoDirectoriesList'] },
		}) as INodeProperties[]),
		...(localSeoEmailAvailabilityGlobalGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoEmailAvailabilityGlobal'] },
		}) as INodeProperties[]),
		...(localSeoVisibilityCheckPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoVisibilityCheck'] },
		}) as INodeProperties[]),
		...(localSeoVisibilityCheckResultGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['localSeoVisibilityCheckResult'] },
		}) as INodeProperties[]),
		// ==================== Phase 4c - lot 3 : envVar / serviceInfos ====================
		...(envVarCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['envVarCreatePost'] },
		}) as INodeProperties[]),
		...(envVarUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['envVarUpdatePut'] },
		}) as INodeProperties[]),
		...(envVarDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['envVarDeleteDelete'] },
		}) as INodeProperties[]),
		...(serviceInfosUpdatePutDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['serviceInfosUpdatePut'] },
		}) as INodeProperties[]),
		// ==================== Phase 4c - lot 3 : CDN ====================
		...(cdnDomainGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDomainGet'] },
		}) as INodeProperties[]),
		...(cdnDomainLogsGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDomainLogs'] },
		}) as INodeProperties[]),
		...(cdnDomainStatisticsGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDomainStatistics'] },
		}) as INodeProperties[]),
		...(cdnDomainRefreshPostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDomainRefresh'] },
		}) as INodeProperties[]),
		...(cdnDomainOptionCreatePostDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDomainOptionCreate'] },
		}) as INodeProperties[]),
		...(cdnDomainOptionGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDomainOptionGet'] },
		}) as INodeProperties[]),
		...(cdnDomainOptionDeleteDeleteDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnDomainOptionDelete'] },
		}) as INodeProperties[]),
		...(cdnOperationGetGetDescription({
			...displayOptions,
			show: { apiVersion: ['v1'], hostingOperation: ['cdnOperationGet'] },
		}) as INodeProperties[]),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const apiVersion = this.getNodeParameter('apiVersion', 0) as string;
	const operation = this.getNodeParameter(
		apiVersion === 'v2' ? 'hostingOperationV2' : 'hostingOperation',
		itemIndex ?? 0,
		{ extractValue: true },
	);

	switch (operation) {
		// ==================== v1 API Operations ====================
		case 'list':
			return executeList.call(this, itemIndex ?? 0);
		case 'findByDomain':
			return executeFindByDomain.call(this, itemIndex ?? 0);
		case 'get':
			return executeGet.call(this, itemIndex ?? 0);
		case 'listAttachedDomains':
			return executeListAttachedDomains.call(this, itemIndex ?? 0);
		case 'getAttachedDomain':
			return executeGetAttachedDomain.call(this, itemIndex ?? 0);
		case 'listDatabases':
			return executeListDatabases.call(this, itemIndex ?? 0);
		case 'getDatabase':
			return executeGetDatabase.call(this, itemIndex ?? 0);
		case 'listCrons':
			return executeListCrons.call(this, itemIndex ?? 0);
		case 'getCron':
			return executeGetCron.call(this, itemIndex ?? 0);
		case 'listUsers':
			return executeListUsers.call(this, itemIndex ?? 0);
		case 'getUser':
			return executeGetUser.call(this, itemIndex ?? 0);
		case 'listTasks':
			return executeListTasks.call(this, itemIndex ?? 0);
		case 'getTask':
			return executeGetTask.call(this, itemIndex ?? 0);
		case 'listEnvVars':
			return executeListEnvVars.call(this, itemIndex ?? 0);
		case 'getEnvVar':
			return executeGetEnvVar.call(this, itemIndex ?? 0);
		case 'listModules':
			return executeListModules.call(this, itemIndex ?? 0);
		case 'getModule':
			return executeGetModule.call(this, itemIndex ?? 0);
		case 'listRuntimes':
			return executeListRuntimes.call(this, itemIndex ?? 0);
		case 'getRuntime':
			return executeGetRuntime.call(this, itemIndex ?? 0);
		case 'getSsl':
			return executeGetSsl.call(this, itemIndex ?? 0);
		case 'getEmail':
			return executeGetEmail.call(this, itemIndex ?? 0);
		case 'getServiceInfos':
			return executeGetServiceInfos.call(this, itemIndex ?? 0);
		case 'hostingUpdate':
			return executeHostingUpdate.call(this, itemIndex ?? 0);
		case 'configurationPut':
			return executeConfigurationPut.call(this, itemIndex ?? 0);
		case 'attachedDomainCreate':
			return executeAttachedDomainCreate.call(this, itemIndex ?? 0);
		case 'attachedDomainUpdate':
			return executeAttachedDomainUpdate.call(this, itemIndex ?? 0);
		case 'attachedDomainDelete':
			return executeAttachedDomainDelete.call(this, itemIndex ?? 0);
		case 'defaultSslCertificateCreate':
			return executeDefaultSslCertificateCreate.call(this, itemIndex ?? 0);
		case 'attachedDomainPurgeCacheCreate':
			return executeAttachedDomainPurgeCacheCreate.call(this, itemIndex ?? 0);
		case 'userUpdatePut':
			return executeUserUpdatePut.call(this, itemIndex ?? 0);
		case 'databaseCreatePost':
			return executeDatabaseCreatePost.call(this, itemIndex ?? 0);
		case 'databaseDelete':
			return executeDatabaseDelete.call(this, itemIndex ?? 0);
		case 'importCustomCertificateCreate':
			return executeImportCustomCertificateCreate.call(this, itemIndex ?? 0);
		case 'envVarSetCreate':
			return executeEnvVarSetCreate.call(this, itemIndex ?? 0);
		case 'cronCreatePost':
			return executeCronCreatePost.call(this, itemIndex ?? 0);
		case 'cronUpdatePut':
			return executeCronUpdatePut.call(this, itemIndex ?? 0);
		case 'cronDeleteDelete':
			return executeCronDeleteDelete.call(this, itemIndex ?? 0);
		case 'databaseUpdatePut':
			return executeDatabaseUpdatePut.call(this, itemIndex ?? 0);
		case 'statisticsGet':
			return executeStatisticsGet.call(this, itemIndex ?? 0);
		case 'dbCapabilities':
			return dbCapabilitiesGetExecute.call(this, itemIndex ?? 0);
		case 'dbChangePassword':
			return dbChangePasswordPutExecute.call(this, itemIndex ?? 0);
		case 'dbCopyDatabase':
			return dbCopyPostExecute.call(this, itemIndex ?? 0);
		case 'dbCreateDump':
			return dbDumpCreatePostExecute.call(this, itemIndex ?? 0);
		case 'dbGetDump':
			return dbDumpGetExecute.call(this, itemIndex ?? 0);
		case 'dbImportDump':
			return dbImportPostExecute.call(this, itemIndex ?? 0);
		case 'dbListRequests':
			return dbRequestListGetExecute.call(this, itemIndex ?? 0);
		case 'dbMetricsToken':
			return dbMetricsTokenGetExecute.call(this, itemIndex ?? 0);
		case 'dbRestore':
			return dbRestoreCreatePostExecute.call(this, itemIndex ?? 0);
		case 'dbGetRestore':
			return dbRestoreGetExecute.call(this, itemIndex ?? 0);
		case 'dbStatistics':
			return dbStatisticsGetExecute.call(this, itemIndex ?? 0);
		case 'dbCopyList':
			return dbCopyListGetExecute.call(this, itemIndex ?? 0);
		case 'dbCopyGet':
			return dbCopyGetGetExecute.call(this, itemIndex ?? 0);
		case 'dbCopyDelete':
			return dbCopyDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'dbCopyRestore':
			return dbCopyRestorePostExecute.call(this, itemIndex ?? 0);
		case 'dbDumpGetById':
			return dbDumpGetGetExecute.call(this, itemIndex ?? 0);
		case 'dbDumpDelete':
			return dbDumpDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'dbDumpRestore':
			return dbDumpRestorePostExecute.call(this, itemIndex ?? 0);
		case 'dbAvailableTypes':
			return dbAvailableTypeListGetExecute.call(this, itemIndex ?? 0);
		case 'dbAvailableVersions':
			return dbAvailableVersionListGetExecute.call(this, itemIndex ?? 0);
		case 'dbCreationCapabilities':
			return dbCreationCapabilitiesGetExecute.call(this, itemIndex ?? 0);
		case 'dumpList':
			return dumpListGetExecute.call(this, itemIndex ?? 0);
		case 'dumpGet':
			return dumpGetGetExecute.call(this, itemIndex ?? 0);
		case 'dumpDelete':
			return dumpDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'emailUpdate':
			return emailUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'emailBounces':
			return emailBouncesGetExecute.call(this, itemIndex ?? 0);
		case 'emailRequest':
			return emailRequestPostExecute.call(this, itemIndex ?? 0);
		case 'emailVolumes':
			return emailVolumesGetExecute.call(this, itemIndex ?? 0);
		case 'emailOptionList':
			return emailOptionListGetExecute.call(this, itemIndex ?? 0);
		case 'emailOptionGet':
			return emailOptionGetGetExecute.call(this, itemIndex ?? 0);
		case 'emailOptionServiceInfos':
			return emailOptionServiceInfosGetExecute.call(this, itemIndex ?? 0);
		case 'emailOptionTerminate':
			return emailOptionTerminatePostExecute.call(this, itemIndex ?? 0);
		case 'userLogsList':
			return userLogsListGetExecute.call(this, itemIndex ?? 0);
		case 'userLogsCreate':
			return userLogsCreatePostExecute.call(this, itemIndex ?? 0);
		case 'userLogsDelete':
			return userLogsDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'userLogsGet':
			return userLogsGetGetExecute.call(this, itemIndex ?? 0);
		case 'userLogsUpdate':
			return userLogsUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'userLogsChangePassword':
			return userLogsChangePasswordPostExecute.call(this, itemIndex ?? 0);
		case 'ownLogsList':
			return ownLogsListGetExecute.call(this, itemIndex ?? 0);
		case 'ownLogsGet':
			return ownLogsGetGetExecute.call(this, itemIndex ?? 0);
		case 'ownLogsUserLogsList':
			return ownLogsUserLogsListGetExecute.call(this, itemIndex ?? 0);
		case 'ownLogsUserLogsCreate':
			return ownLogsUserLogsCreatePostExecute.call(this, itemIndex ?? 0);
		case 'ownLogsUserLogsDelete':
			return ownLogsUserLogsDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'ownLogsUserLogsGet':
			return ownLogsUserLogsGetGetExecute.call(this, itemIndex ?? 0);
		case 'ownLogsUserLogsUpdate':
			return ownLogsUserLogsUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'ownLogsUserLogsChangePassword':
			return ownLogsUserLogsChangePasswordPostExecute.call(this, itemIndex ?? 0);
		case 'logKindList':
			return logKindListGetExecute.call(this, itemIndex ?? 0);
		case 'logKindGet':
			return logKindGetGetExecute.call(this, itemIndex ?? 0);
		case 'logSubscriptionList':
			return logSubscriptionListGetExecute.call(this, itemIndex ?? 0);
		case 'logSubscriptionCreate':
			return logSubscriptionCreatePostExecute.call(this, itemIndex ?? 0);
		case 'logSubscriptionDelete':
			return logSubscriptionDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'logSubscriptionGet':
			return logSubscriptionGetGetExecute.call(this, itemIndex ?? 0);
		case 'logUrl':
			return logUrlCreatePostExecute.call(this, itemIndex ?? 0);
		case 'tokenGet':
			return tokenGetGetExecute.call(this, itemIndex ?? 0);

		// ==================== Website Operations ====================
		case 'websiteCreate':
			return websiteCreatePostExecute.call(this, itemIndex ?? 0);
		case 'websiteDelete':
			return websiteDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'websiteDeployment':
			return websiteDeploymentCreatePostExecute.call(this, itemIndex ?? 0);
		case 'websiteGet':
			return websiteGetGetExecute.call(this, itemIndex ?? 0);
		case 'websiteList':
			return websiteListGetExecute.call(this, itemIndex ?? 0);
		case 'websiteUpdate':
			return websiteUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'websiteCreationCapabilities':
			return websiteCreationCapabilitiesGetExecute.call(this, itemIndex ?? 0);
		case 'websiteDeploymentStatus':
			return websiteDeploymentGetExecute.call(this, itemIndex ?? 0);

		// ==================== CDN Operations ====================
		case 'cdnAvailableOptions':
			return cdnAvailableOptionsGetExecute.call(this, itemIndex ?? 0);
		case 'cdnAddDomain':
			return cdnDomainCreatePostExecute.call(this, itemIndex ?? 0);
		case 'cdnDeleteDomain':
			return cdnDomainDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'cdnGet':
			return cdnGetExecute.call(this, itemIndex ?? 0);
		case 'cdnListDomains':
			return cdnDomainListGetExecute.call(this, itemIndex ?? 0);
		case 'cdnListOptions':
			return cdnDomainOptionListGetExecute.call(this, itemIndex ?? 0);
		case 'cdnListOperations':
			return cdnOperationListGetExecute.call(this, itemIndex ?? 0);
		case 'cdnPurgeCache':
			return cdnDomainPurgePostExecute.call(this, itemIndex ?? 0);
		case 'cdnServiceInfos':
			return cdnServiceInfosGetExecute.call(this, itemIndex ?? 0);
		case 'cdnTerminate':
			return cdnTerminateCreateExecute.call(this, itemIndex ?? 0);
		case 'cdnUpdateDomainOption':
			return cdnDomainOptionUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'cdnUpdateServiceInfos':
			return cdnServiceInfosUpdatePutExecute.call(this, itemIndex ?? 0);

		// ==================== Service Management ====================
		case 'serviceAbuseState':
			return smAbuseStateGetExecute.call(this, itemIndex ?? 0);
		case 'serviceAvailableConfigurations':
			return smAvailableConfigurationsGetExecute.call(this, itemIndex ?? 0);
		case 'serviceChangeContact':
			return smChangeContactPostExecute.call(this, itemIndex ?? 0);
		case 'serviceConfirmTermination':
			return smConfirmTerminationCreateExecute.call(this, itemIndex ?? 0);
		case 'serviceMetricsToken':
			return smMetricsTokenGetExecute.call(this, itemIndex ?? 0);
		case 'serviceRequestBoost':
			return smRequestBoostPostExecute.call(this, itemIndex ?? 0);
		case 'serviceSupportRequest':
			return smRequestPostExecute.call(this, itemIndex ?? 0);
		case 'serviceTerminate':
			return smTerminateCreateExecute.call(this, itemIndex ?? 0);
		case 'serviceUnblockTCPOut':
			return smUnblockTCPOutPutExecute.call(this, itemIndex ?? 0);
		case 'serviceUserLogsToken':
			return smUserLogsTokenGetExecute.call(this, itemIndex ?? 0);

		// ==================== v2 API Operations ====================
		case 'v2ListResources':
			return v2ResourceListGetAllExecute.call(this, itemIndex ?? 0);
		case 'v2GetResource':
			return v2ResourceGetGetExecute.call(this, itemIndex ?? 0);
		case 'v2ListAttachedDomains':
			return v2AttachedDomainListGetExecute.call(this, itemIndex ?? 0);
		case 'v2GetResourceAttachedDomains':
			return v2ResourceAttachedDomainListGetExecute.call(this, itemIndex ?? 0);
		case 'v2ListCertificates':
			return v2CertificateListGetExecute.call(this, itemIndex ?? 0);
		case 'v2ListWebsites':
			return v2WebsiteListGetExecute.call(this, itemIndex ?? 0);
		case 'v2CreateWebsite':
			return v2WebsiteCreatePostExecute.call(this, itemIndex ?? 0);
		case 'v2GetWebsite':
			return v2WebsiteGetGetExecute.call(this, itemIndex ?? 0);
		case 'v2UpdateWebsite':
			return v2WebsiteUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'v2DeleteWebsite':
			return v2WebsiteDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'v2ListWebsiteDomains':
			return v2WebsiteDomainListGetExecute.call(this, itemIndex ?? 0);
		case 'v2CreateAttachedDomain':
			return v2AttachedDomainCreateExecute.call(this, itemIndex ?? 0);
		case 'v2ListResourceAttachedDomains':
			return v2AttachedDomainListByResourceExecute.call(this, itemIndex ?? 0);
		case 'v2ImportCustomCertificate':
			return v2ImportCustomCertExecute.call(this, itemIndex ?? 0);
		case 'v2DeleteUser':
			return v2DeleteUserExecute.call(this, itemIndex ?? 0);
		case 'emailCreate':
			return emailCreatePostExecute.call(this, itemIndex ?? 0);
		case 'emailDelete':
			return emailDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'emailList':
			return emailListGetExecute.call(this, itemIndex ?? 0);
		case 'moduleList':
			return moduleListGetExecute.call(this, itemIndex ?? 0);
		case 'moduleUpdate':
			return moduleUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'privateDatabaseGet':
			return privateDatabaseGetGetExecute.call(this, itemIndex ?? 0);
		case 'privateDatabaseList':
			return privateDatabaseListGetExecute.call(this, itemIndex ?? 0);
		case 'runtimeCreate':
			return runtimeCreatePostExecute.call(this, itemIndex ?? 0);
		case 'runtimeGet2':
			return runtimeGetGetExecute.call(this, itemIndex ?? 0);
		case 'runtimeList2':
			return runtimeListGetExecute.call(this, itemIndex ?? 0);
		case 'runtimeUpdate':
			return runtimeUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'sslCreate':
			return sslServiceCreatePostExecute.call(this, itemIndex ?? 0);
		case 'sslGet':
			return sslServiceGetGetExecute.call(this, itemIndex ?? 0);
		case 'sslList':
			return sslServiceListGetExecute.call(this, itemIndex ?? 0);

		// ==================== Phase 4c - Lot 2 Operations ====================
		case 'attachedDomainDigStatus':
			return attachedDomainDigStatusGetExecute.call(this, itemIndex ?? 0);
		case 'attachedDomainRestart':
			return attachedDomainRestartPostExecute.call(this, itemIndex ?? 0);
		case 'attachedDomainSslDelete':
			return attachedDomainSslDeleteExecute.call(this, itemIndex ?? 0);
		case 'attachedDomainSslGet':
			return attachedDomainSslGetExecute.call(this, itemIndex ?? 0);
		case 'attachedDomainSslCreate':
			return attachedDomainSslCreatePostExecute.call(this, itemIndex ?? 0);
		case 'attachedDomainSslUpdate':
			return attachedDomainSslUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'attachedDomainSslRegenerate':
			return attachedDomainSslRegeneratePostExecute.call(this, itemIndex ?? 0);
		case 'attachedDomainSslReport':
			return attachedDomainSslReportGetExecute.call(this, itemIndex ?? 0);
		case 'boostHistoryList':
			return boostHistoryListGetExecute.call(this, itemIndex ?? 0);
		case 'boostHistoryGet':
			return boostHistoryGetGetExecute.call(this, itemIndex ?? 0);
		case 'configurationGet':
			return configurationGetGetExecute.call(this, itemIndex ?? 0);
		case 'cronAvailableLanguageList':
			return cronAvailableLanguageListGetExecute.call(this, itemIndex ?? 0);
		case 'extraSqlPersoList':
			return extraSqlPersoListGetExecute.call(this, itemIndex ?? 0);
		case 'extraSqlPersoGet':
			return extraSqlPersoGetGetExecute.call(this, itemIndex ?? 0);
		case 'extraSqlPersoDatabases':
			return extraSqlPersoDatabasesGetExecute.call(this, itemIndex ?? 0);
		case 'extraSqlPersoServiceInfos':
			return extraSqlPersoServiceInfosGetExecute.call(this, itemIndex ?? 0);
		case 'extraSqlPersoServiceInfosUpdate':
			return extraSqlPersoServiceInfosUpdatePostExecute.call(this, itemIndex ?? 0);
		case 'extraSqlPersoTerminate':
			return extraSqlPersoTerminatePostExecute.call(this, itemIndex ?? 0);
		case 'freedomList':
			return freedomListGetExecute.call(this, itemIndex ?? 0);
		case 'indyList':
			return indyListGetExecute.call(this, itemIndex ?? 0);
		case 'indyGet':
			return indyGetGetExecute.call(this, itemIndex ?? 0);
		case 'sshKeyList':
			return sshKeyListGetExecute.call(this, itemIndex ?? 0);
		case 'sshKeyCreate':
			return sshKeyCreatePostExecute.call(this, itemIndex ?? 0);
		case 'localSeoAccountList':
			return localSeoAccountListGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoAccountGet':
			return localSeoAccountGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoAccountLogin':
			return localSeoAccountLoginPostExecute.call(this, itemIndex ?? 0);
		case 'localSeoEmailAvailability':
			return localSeoEmailAvailabilityGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoLocationList':
			return localSeoLocationListGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoLocationGet':
			return localSeoLocationGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoLocationServiceInfos':
			return localSeoLocationServiceInfosGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoLocationServiceInfosUpdate':
			return localSeoLocationServiceInfosUpdatePostExecute.call(this, itemIndex ?? 0);
		case 'localSeoLocationTerminate':
			return localSeoLocationTerminatePostExecute.call(this, itemIndex ?? 0);
		case 'moduleCreate':
			return moduleCreatePostExecute.call(this, itemIndex ?? 0);
		case 'moduleDelete':
			return moduleDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'ovhConfigList':
			return ovhConfigListGetExecute.call(this, itemIndex ?? 0);
		case 'ovhConfigGet':
			return ovhConfigGetGetExecute.call(this, itemIndex ?? 0);
		case 'ovhConfigChangeConfiguration':
			return ovhConfigChangeConfigurationPostExecute.call(this, itemIndex ?? 0);
		case 'ovhConfigRollback':
			return ovhConfigRollbackPostExecute.call(this, itemIndex ?? 0);
		case 'ovhConfigCapabilities':
			return ovhConfigCapabilitiesGetExecute.call(this, itemIndex ?? 0);
		case 'ovhConfigRecommendedValues':
			return ovhConfigRecommendedValuesGetExecute.call(this, itemIndex ?? 0);
		case 'ovhConfigRefresh':
			return ovhConfigRefreshPostExecute.call(this, itemIndex ?? 0);
		case 'privateDatabaseCreationCapabilities':
			return privateDatabaseCreationCapabilitiesGetExecute.call(this, itemIndex ?? 0);
		case 'restoreSnapshot':
			return restoreSnapshotCreatePostExecute.call(this, itemIndex ?? 0);
		case 'runtimeDelete':
			return runtimeDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'runtimeAttachedDomains':
			return runtimeAttachedDomainsGetExecute.call(this, itemIndex ?? 0);
		case 'runtimeAvailableTypes':
			return runtimeAvailableTypesGetExecute.call(this, itemIndex ?? 0);
		case 'sslDelete':
			return sslServiceDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'sslDomains':
			return sslServiceDomainsGetExecute.call(this, itemIndex ?? 0);
		case 'sslRegenerate':
			return sslServiceRegeneratePostExecute.call(this, itemIndex ?? 0);
		case 'sslReport':
			return sslServiceReportGetExecute.call(this, itemIndex ?? 0);
		case 'userCreate':
			return userCreatePostExecute.call(this, itemIndex ?? 0);
		case 'userDelete':
			return userDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'userChangePassword':
			return userChangePasswordPostExecute.call(this, itemIndex ?? 0);
		case 'vcsWebhooks':
			return vcsWebhooksGetExecute.call(this, itemIndex ?? 0);
		case 'websiteDeploymentGetById':
			return websiteDeploymentGetByIdExecute.call(this, itemIndex ?? 0);
		case 'websiteDeploymentLogs':
			return websiteDeploymentLogsGetExecute.call(this, itemIndex ?? 0);

		// ==================== Phase 4c - lot 3 : Global ====================
		case 'availableOfferGet':
			return availableOfferGetExecute.call(this, itemIndex ?? 0);
		case 'incidentGet':
			return incidentGetExecute.call(this, itemIndex ?? 0);
		case 'offerCapabilitiesGet':
			return offerCapabilitiesGetExecute.call(this, itemIndex ?? 0);
		case 'moduleCatalogList':
			return moduleCatalogListGetExecute.call(this, itemIndex ?? 0);
		case 'moduleCatalogGetById':
			return moduleCatalogGetByIdExecute.call(this, itemIndex ?? 0);
		case 'vcsSupported':
			return vcsSupportedGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoDirectoriesList':
			return localSeoDirectoriesListGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoEmailAvailabilityGlobal':
			return localSeoEmailAvailabilityGlobalGetExecute.call(this, itemIndex ?? 0);
		case 'localSeoVisibilityCheck':
			return localSeoVisibilityCheckPostExecute.call(this, itemIndex ?? 0);
		case 'localSeoVisibilityCheckResult':
			return localSeoVisibilityCheckResultGetExecute.call(this, itemIndex ?? 0);

		// ==================== Phase 4c - lot 3 : envVar / serviceInfos ====================
		case 'envVarCreatePost':
			return envVarCreatePostExecute.call(this, itemIndex ?? 0);
		case 'envVarUpdatePut':
			return envVarUpdatePutExecute.call(this, itemIndex ?? 0);
		case 'envVarDeleteDelete':
			return envVarDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePutExecute.call(this, itemIndex ?? 0);

		// ==================== Phase 4c - lot 3 : CDN ====================
		case 'cdnDomainGet':
			return cdnDomainGetGetExecute.call(this, itemIndex ?? 0);
		case 'cdnDomainLogs':
			return cdnDomainLogsGetExecute.call(this, itemIndex ?? 0);
		case 'cdnDomainStatistics':
			return cdnDomainStatisticsGetExecute.call(this, itemIndex ?? 0);
		case 'cdnDomainRefresh':
			return cdnDomainRefreshPostExecute.call(this, itemIndex ?? 0);
		case 'cdnDomainOptionCreate':
			return cdnDomainOptionCreatePostExecute.call(this, itemIndex ?? 0);
		case 'cdnDomainOptionGet':
			return cdnDomainOptionGetGetExecute.call(this, itemIndex ?? 0);
		case 'cdnDomainOptionDelete':
			return cdnDomainOptionDeleteDeleteExecute.call(this, itemIndex ?? 0);
		case 'cdnOperationGet':
			return cdnOperationGetGetExecute.call(this, itemIndex ?? 0);

		default:
			throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudHosting"`);
	}
}
