import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';
import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import {
	execute as attachedDomainDigStatusGetExecute,
	description as attachedDomainDigStatusGetDescription,
} from './attachedDomain/digStatusGet.operation';

import {
	execute as attachedDomainRestartPostExecute,
	description as attachedDomainRestartPostDescription,
} from './attachedDomain/restartPost.operation';

import {
	execute as attachedDomainSslCreatePostExecute,
	description as attachedDomainSslCreatePostDescription,
} from './attachedDomain/sslCreatePost.operation';

import {
	execute as attachedDomainSslDeleteExecute,
	description as attachedDomainSslDeleteDescription,
} from './attachedDomain/sslDelete.operation';

import {
	execute as attachedDomainSslGetExecute,
	description as attachedDomainSslGetDescription,
} from './attachedDomain/sslGet.operation';

import {
	execute as attachedDomainSslRegeneratePostExecute,
	description as attachedDomainSslRegeneratePostDescription,
} from './attachedDomain/sslRegeneratePost.operation';

import {
	execute as attachedDomainSslReportGetExecute,
	description as attachedDomainSslReportGetDescription,
} from './attachedDomain/sslReportGet.operation';

import {
	execute as attachedDomainSslUpdatePutExecute,
	description as attachedDomainSslUpdatePutDescription,
} from './attachedDomain/sslUpdatePut.operation';

import {
	execute as executeAttachedDomainCreate,
	description as descriptionAttachedDomainCreate,
} from './attachedDomainCreate.operation';

import {
	execute as executeAttachedDomainDelete,
	description as descriptionAttachedDomainDelete,
} from './attachedDomainDelete.operation';

import {
	execute as executeAttachedDomainPurgeCacheCreate,
	description as descriptionAttachedDomainPurgeCacheCreate,
} from './attachedDomainPurgeCacheCreate.operation';

import {
	execute as executeAttachedDomainUpdate,
	description as descriptionAttachedDomainUpdate,
} from './attachedDomainUpdate.operation';

import {
	execute as availableOfferGetExecute,
	description as availableOfferGetDescription,
} from './availableOfferGet.operation';

import {
	execute as boostHistoryGetGetExecute,
	description as boostHistoryGetGetDescription,
} from './boostHistory/getGet.operation';

import {
	execute as boostHistoryListGetExecute,
	description as boostHistoryListGetDescription,
} from './boostHistory/listGet.operation';

import {
	execute as cdnAvailableOptionsGetExecute,
} from './cdn/cdnAvailableOptionsGet.operation';

import {
	execute as cdnDomainCreatePostExecute,
	description as cdnDomainCreatePostDescription,
} from './cdn/cdnDomainCreatePost.operation';

import {
	execute as cdnDomainDeleteDeleteExecute,
	description as cdnDomainDeleteDeleteDescription,
} from './cdn/cdnDomainDeleteDelete.operation';

import {
	execute as cdnDomainGetGetExecute,
	description as cdnDomainGetGetDescription,
} from './cdn/cdnDomainGetGet.operation';

import {
	execute as cdnDomainListGetExecute,
} from './cdn/cdnDomainListGet.operation';

import {
	execute as cdnDomainLogsGetExecute,
	description as cdnDomainLogsGetDescription,
} from './cdn/cdnDomainLogsGet.operation';

import {
	execute as cdnDomainOptionCreatePostExecute,
	description as cdnDomainOptionCreatePostDescription,
} from './cdn/cdnDomainOptionCreatePost.operation';

import {
	execute as cdnDomainOptionDeleteDeleteExecute,
	description as cdnDomainOptionDeleteDeleteDescription,
} from './cdn/cdnDomainOptionDeleteDelete.operation';

import {
	execute as cdnDomainOptionGetGetExecute,
	description as cdnDomainOptionGetGetDescription,
} from './cdn/cdnDomainOptionGetGet.operation';

import {
	execute as cdnDomainOptionListGetExecute,
} from './cdn/cdnDomainOptionListGet.operation';

import {
	execute as cdnDomainOptionUpdatePutExecute,
	description as cdnDomainOptionUpdatePutDescription,
} from './cdn/cdnDomainOptionUpdatePut.operation';

import {
	execute as cdnDomainPurgePostExecute,
	description as cdnDomainPurgePostDescription,
} from './cdn/cdnDomainPurgePost.operation';

import {
	execute as cdnDomainRefreshPostExecute,
	description as cdnDomainRefreshPostDescription,
} from './cdn/cdnDomainRefreshPost.operation';

import {
	execute as cdnDomainStatisticsGetExecute,
	description as cdnDomainStatisticsGetDescription,
} from './cdn/cdnDomainStatisticsGet.operation';

import {
	execute as cdnGetExecute,
} from './cdn/cdnGet.operation';

import {
	execute as cdnOperationGetGetExecute,
	description as cdnOperationGetGetDescription,
} from './cdn/cdnOperationGetGet.operation';

import {
	execute as cdnOperationListGetExecute,
} from './cdn/cdnOperationListGet.operation';

import {
	execute as cdnServiceInfosGetExecute,
} from './cdn/cdnServiceInfosGet.operation';

import {
	execute as cdnServiceInfosUpdatePutExecute,
	description as cdnServiceInfosUpdatePutDescription,
} from './cdn/cdnServiceInfosUpdatePut.operation';

import {
	execute as cdnTerminateCreateExecute,
} from './cdn/cdnTerminateCreate.operation';

import {
	execute as configurationGetGetExecute,
	description as configurationGetGetDescription,
} from './configuration/getGet.operation';

import {
	execute as executeConfigurationPut,
	description as descriptionConfigurationPut,
} from './configurationPut.operation';

import {
	execute as executeCronCreatePost,
	description as descriptionCronCreatePost,
} from './cron/cronCreatePost.operation';

import {
	execute as executeCronDeleteDelete,
	description as descriptionCronDeleteDelete,
} from './cron/cronDeleteDelete.operation';

import {
	execute as executeCronUpdatePut,
	description as descriptionCronUpdatePut,
} from './cron/cronUpdatePut.operation';

import {
	execute as cronAvailableLanguageListGetExecute,
	description as cronAvailableLanguageListGetDescription,
} from './cronAvailableLanguage/listGet.operation';

import {
	execute as executeDatabaseUpdatePut,
	description as descriptionDatabaseUpdatePut,
} from './database/databaseUpdatePut.operation';

import {
	execute as dbCreationCapabilitiesGetExecute,
	description as dbCreationCapabilitiesGetDescription,
} from './databaseAvailable/creationCapabilitiesGet.operation';

import {
	execute as dbAvailableTypeListGetExecute,
	description as dbAvailableTypeListGetDescription,
} from './databaseAvailable/typeListGet.operation';

import {
	execute as dbAvailableVersionListGetExecute,
	description as dbAvailableVersionListGetDescription,
} from './databaseAvailable/versionListGet.operation';

import {
	execute as executeDatabaseCreatePost,
	description as descriptionDatabaseCreatePost,
} from './databaseCreatePost.operation';

import {
	execute as executeDatabaseDelete,
	description as descriptionDatabaseDelete,
} from './databaseDelete.operation';

import {
	execute as dbCapabilitiesGetExecute,
} from './databaseSub/capabilitiesGet.operation';

import {
	execute as dbChangePasswordPutExecute,
	description as dbChangePasswordPutDescription,
} from './databaseSub/changePasswordPut.operation';

import {
	execute as dbCopyDeleteDeleteExecute,
	description as dbCopyDeleteDeleteDescription,
} from './databaseSub/copyDeleteDelete.operation';

import {
	execute as dbCopyGetGetExecute,
	description as dbCopyGetGetDescription,
} from './databaseSub/copyGetGet.operation';

import {
	execute as dbCopyListGetExecute,
	description as dbCopyListGetDescription,
} from './databaseSub/copyListGet.operation';

import {
	execute as dbCopyPostExecute,
	description as dbCopyPostDescription,
} from './databaseSub/copyPost.operation';

import {
	execute as dbCopyRestorePostExecute,
	description as dbCopyRestorePostDescription,
} from './databaseSub/copyRestorePost.operation';

import {
	execute as dbDumpCreatePostExecute,
} from './databaseSub/dumpCreatePost.operation';

import {
	execute as dbDumpDeleteDeleteExecute,
	description as dbDumpDeleteDeleteDescription,
} from './databaseSub/dumpDeleteDelete.operation';

import {
	execute as dbDumpGetExecute,
} from './databaseSub/dumpGet.operation';

import {
	execute as dbDumpGetGetExecute,
	description as dbDumpGetGetDescription,
} from './databaseSub/dumpGetGet.operation';

import {
	execute as dbDumpRestorePostExecute,
	description as dbDumpRestorePostDescription,
} from './databaseSub/dumpRestorePost.operation';

import {
	execute as dbImportPostExecute,
	description as dbImportPostDescription,
} from './databaseSub/importPost.operation';

import {
	execute as dbMetricsTokenGetExecute,
} from './databaseSub/metricsTokenGet.operation';

import {
	execute as dbRequestListGetExecute,
} from './databaseSub/requestListGet.operation';

import {
	execute as dbRestoreCreatePostExecute,
} from './databaseSub/restoreCreatePost.operation';

import {
	execute as dbRestoreGetExecute,
	description as dbRestoreGetDescription,
} from './databaseSub/restoreGet.operation';

import {
	execute as dbStatisticsGetExecute,
} from './databaseSub/statisticsGet.operation';

import {
	execute as executeDefaultSslCertificateCreate,
	description as descriptionDefaultSslCertificateCreate,
} from './defaultSslCertificateCreate.operation';

import {
	execute as dumpDeleteDeleteExecute,
	description as dumpDeleteDeleteDescription,
} from './dump/deleteDelete.operation';

import {
	execute as dumpGetGetExecute,
	description as dumpGetGetDescription,
} from './dump/getGet.operation';

import {
	execute as dumpListGetExecute,
	description as dumpListGetDescription,
} from './dump/listGet.operation';

import {
	execute as emailBouncesGetExecute,
	description as emailBouncesGetDescription,
} from './email/bouncesGet.operation';

import {
	execute as emailCreatePostExecute,
	description as emailCreatePostDescription,
} from './email/createPost.operation';

import {
	execute as emailDeleteDeleteExecute,
} from './email/deleteDelete.operation';

import {
	execute as emailListGetExecute,
} from './email/listGet.operation';

import {
	execute as emailRequestPostExecute,
	description as emailRequestPostDescription,
} from './email/requestPost.operation';

import {
	execute as emailUpdatePutExecute,
	description as emailUpdatePutDescription,
} from './email/updatePut.operation';

import {
	execute as emailVolumesGetExecute,
	description as emailVolumesGetDescription,
} from './email/volumesGet.operation';

import {
	execute as emailOptionGetGetExecute,
	description as emailOptionGetGetDescription,
} from './emailOption/getGet.operation';

import {
	execute as emailOptionListGetExecute,
	description as emailOptionListGetDescription,
} from './emailOption/listGet.operation';

import {
	execute as emailOptionServiceInfosGetExecute,
	description as emailOptionServiceInfosGetDescription,
} from './emailOption/serviceInfosGet.operation';

import {
	execute as emailOptionTerminatePostExecute,
	description as emailOptionTerminatePostDescription,
} from './emailOption/terminatePost.operation';

import {
	execute as envVarCreatePostExecute,
	description as envVarCreatePostDescription,
} from './envVarCreatePost.operation';

import {
	execute as envVarDeleteDeleteExecute,
	description as envVarDeleteDeleteDescription,
} from './envVarDeleteDelete.operation';

import {
	execute as executeEnvVarSetCreate,
	description as descriptionEnvVarSetCreate,
} from './envVarSetCreate.operation';

import {
	execute as envVarUpdatePutExecute,
	description as envVarUpdatePutDescription,
} from './envVarUpdatePut.operation';

import {
	execute as extraSqlPersoDatabasesGetExecute,
	description as extraSqlPersoDatabasesGetDescription,
} from './extraSqlPerso/databasesGet.operation';

import {
	execute as extraSqlPersoGetGetExecute,
	description as extraSqlPersoGetGetDescription,
} from './extraSqlPerso/getGet.operation';

import {
	execute as extraSqlPersoListGetExecute,
	description as extraSqlPersoListGetDescription,
} from './extraSqlPerso/listGet.operation';

import {
	execute as extraSqlPersoServiceInfosGetExecute,
	description as extraSqlPersoServiceInfosGetDescription,
} from './extraSqlPerso/serviceInfosGet.operation';

import {
	execute as extraSqlPersoServiceInfosUpdatePostExecute,
	description as extraSqlPersoServiceInfosUpdatePostDescription,
} from './extraSqlPerso/serviceInfosUpdatePost.operation';

import {
	execute as extraSqlPersoTerminatePostExecute,
	description as extraSqlPersoTerminatePostDescription,
} from './extraSqlPerso/terminatePost.operation';

import {
	execute as executeFindByDomain,
	description as descriptionFindByDomain,
} from './findByDomain.operation';

import {
	execute as freedomListGetExecute,
	description as freedomListGetDescription,
} from './freedom/listGet.operation';

import {
	execute as executeGet,
	description as descriptionGet,
} from './get.operation';

import {
	execute as executeGetAttachedDomain,
	description as descriptionGetAttachedDomain,
} from './getAttachedDomain.operation';

import {
	execute as executeGetCron,
	description as descriptionGetCron,
} from './getCron.operation';

import {
	execute as executeGetDatabase,
	description as descriptionGetDatabase,
} from './getDatabase.operation';

import {
	execute as executeGetEmail,
	description as descriptionGetEmail,
} from './getEmail.operation';

import {
	execute as executeGetEnvVar,
	description as descriptionGetEnvVar,
} from './getEnvVar.operation';

import {
	execute as executeGetModule,
	description as descriptionGetModule,
} from './getModule.operation';

import {
	execute as executeGetRuntime,
	description as descriptionGetRuntime,
} from './getRuntime.operation';

import {
	execute as executeGetServiceInfos,
	description as descriptionGetServiceInfos,
} from './getServiceInfos.operation';

import {
	execute as executeGetSsl,
	description as descriptionGetSsl,
} from './getSsl.operation';

import {
	execute as executeGetTask,
	description as descriptionGetTask,
} from './getTask.operation';

import {
	execute as executeGetUser,
	description as descriptionGetUser,
} from './getUser.operation';

import {
	execute as executeHostingUpdate,
	description as descriptionHostingUpdate,
} from './hostingUpdate.operation';

import {
	execute as executeImportCustomCertificateCreate,
	description as descriptionImportCustomCertificateCreate,
} from './importCustomCertificateCreate.operation';

import {
	execute as incidentGetExecute,
	description as incidentGetDescription,
} from './incidentGet.operation';

import {
	execute as indyGetGetExecute,
	description as indyGetGetDescription,
} from './indy/getGet.operation';

import {
	execute as indyListGetExecute,
	description as indyListGetDescription,
} from './indy/listGet.operation';

import {
	execute as sshKeyCreatePostExecute,
	description as sshKeyCreatePostDescription,
} from './key/sshCreatePost.operation';

import {
	execute as sshKeyListGetExecute,
	description as sshKeyListGetDescription,
} from './key/sshListGet.operation';

import {
	execute as executeList,
	description as descriptionList,
} from './list.operation';

import {
	execute as executeListAttachedDomains,
	description as descriptionListAttachedDomains,
} from './listAttachedDomains.operation';

import {
	execute as executeListCrons,
	description as descriptionListCrons,
} from './listCrons.operation';

import {
	execute as executeListDatabases,
	description as descriptionListDatabases,
} from './listDatabases.operation';

import {
	execute as executeListEnvVars,
	description as descriptionListEnvVars,
} from './listEnvVars.operation';

import {
	execute as executeListModules,
	description as descriptionListModules,
} from './listModules.operation';

import {
	execute as executeListRuntimes,
	description as descriptionListRuntimes,
} from './listRuntimes.operation';

import {
	execute as executeListTasks,
	description as descriptionListTasks,
} from './listTasks.operation';

import {
	execute as localSeoAccountGetExecute,
	description as localSeoAccountGetDescription,
} from './localSeo/accountGet.operation';

import {
	execute as localSeoAccountListGetExecute,
	description as localSeoAccountListGetDescription,
} from './localSeo/accountListGet.operation';

import {
	execute as localSeoAccountLoginPostExecute,
	description as localSeoAccountLoginPostDescription,
} from './localSeo/accountLoginPost.operation';

import {
	execute as localSeoDirectoriesListGetExecute,
	description as localSeoDirectoriesListGetDescription,
} from './localSeo/directoriesListGet.operation';

import {
	execute as localSeoEmailAvailabilityGetExecute,
	description as localSeoEmailAvailabilityGetDescription,
} from './localSeo/emailAvailabilityGet.operation';

import {
	execute as localSeoEmailAvailabilityGlobalGetExecute,
	description as localSeoEmailAvailabilityGlobalGetDescription,
} from './localSeo/emailAvailabilityGlobalGet.operation';

import {
	execute as localSeoLocationGetExecute,
	description as localSeoLocationGetDescription,
} from './localSeo/locationGet.operation';

import {
	execute as localSeoLocationListGetExecute,
	description as localSeoLocationListGetDescription,
} from './localSeo/locationListGet.operation';

import {
	execute as localSeoLocationServiceInfosGetExecute,
	description as localSeoLocationServiceInfosGetDescription,
} from './localSeo/locationServiceInfosGet.operation';

import {
	execute as localSeoLocationServiceInfosUpdatePostExecute,
	description as localSeoLocationServiceInfosUpdatePostDescription,
} from './localSeo/locationServiceInfosUpdatePost.operation';

import {
	execute as localSeoLocationTerminatePostExecute,
	description as localSeoLocationTerminatePostDescription,
} from './localSeo/locationTerminatePost.operation';

import {
	execute as localSeoVisibilityCheckPostExecute,
	description as localSeoVisibilityCheckPostDescription,
} from './localSeo/visibilityCheckPost.operation';

import {
	execute as localSeoVisibilityCheckResultGetExecute,
	description as localSeoVisibilityCheckResultGetDescription,
} from './localSeo/visibilityCheckResultGet.operation';

import {
	execute as logKindGetGetExecute,
	description as logKindGetGetDescription,
} from './log/kindGetGet.operation';

import {
	execute as logKindListGetExecute,
	description as logKindListGetDescription,
} from './log/kindListGet.operation';

import {
	execute as logSubscriptionCreatePostExecute,
	description as logSubscriptionCreatePostDescription,
} from './log/subscriptionCreatePost.operation';

import {
	execute as logSubscriptionDeleteDeleteExecute,
	description as logSubscriptionDeleteDeleteDescription,
} from './log/subscriptionDeleteDelete.operation';

import {
	execute as logSubscriptionGetGetExecute,
	description as logSubscriptionGetGetDescription,
} from './log/subscriptionGetGet.operation';

import {
	execute as logSubscriptionListGetExecute,
	description as logSubscriptionListGetDescription,
} from './log/subscriptionListGet.operation';

import {
	execute as logUrlCreatePostExecute,
	description as logUrlCreatePostDescription,
} from './log/urlCreatePost.operation';

import {
	execute as moduleCreatePostExecute,
	description as moduleCreatePostDescription,
} from './module/createPost.operation';

import {
	execute as moduleDeleteDeleteExecute,
	description as moduleDeleteDeleteDescription,
} from './module/deleteDelete.operation';

import {
	execute as moduleListGetExecute,
} from './module/listGet.operation';

import {
	execute as moduleUpdatePutExecute,
	description as moduleUpdatePutDescription,
} from './module/updatePut.operation';

import {
	execute as moduleCatalogGetByIdExecute,
	description as moduleCatalogGetByIdDescription,
} from './moduleList/getById.operation';

import {
	execute as moduleCatalogListGetExecute,
	description as moduleCatalogListGetDescription,
} from './moduleList/listGet.operation';

import {
	execute as offerCapabilitiesGetExecute,
	description as offerCapabilitiesGetDescription,
} from './offerCapabilitiesGet.operation';

import {
	execute as ovhConfigCapabilitiesGetExecute,
	description as ovhConfigCapabilitiesGetDescription,
} from './ovhConfig/capabilitiesGet.operation';

import {
	execute as ovhConfigChangeConfigurationPostExecute,
	description as ovhConfigChangeConfigurationPostDescription,
} from './ovhConfig/changeConfigurationPost.operation';

import {
	execute as ovhConfigGetGetExecute,
	description as ovhConfigGetGetDescription,
} from './ovhConfig/getGet.operation';

import {
	execute as ovhConfigListGetExecute,
	description as ovhConfigListGetDescription,
} from './ovhConfig/listGet.operation';

import {
	execute as ovhConfigRecommendedValuesGetExecute,
	description as ovhConfigRecommendedValuesGetDescription,
} from './ovhConfig/recommendedValuesGet.operation';

import {
	execute as ovhConfigRefreshPostExecute,
	description as ovhConfigRefreshPostDescription,
} from './ovhConfig/refreshPost.operation';

import {
	execute as ovhConfigRollbackPostExecute,
	description as ovhConfigRollbackPostDescription,
} from './ovhConfig/rollbackPost.operation';

import {
	execute as ownLogsGetGetExecute,
	description as ownLogsGetGetDescription,
} from './ownLogs/getGet.operation';

import {
	execute as ownLogsListGetExecute,
	description as ownLogsListGetDescription,
} from './ownLogs/listGet.operation';

import {
	execute as ownLogsUserLogsChangePasswordPostExecute,
	description as ownLogsUserLogsChangePasswordPostDescription,
} from './ownLogs/userLogsChangePasswordPost.operation';

import {
	execute as ownLogsUserLogsCreatePostExecute,
	description as ownLogsUserLogsCreatePostDescription,
} from './ownLogs/userLogsCreatePost.operation';

import {
	execute as ownLogsUserLogsDeleteDeleteExecute,
	description as ownLogsUserLogsDeleteDeleteDescription,
} from './ownLogs/userLogsDeleteDelete.operation';

import {
	execute as ownLogsUserLogsGetGetExecute,
	description as ownLogsUserLogsGetGetDescription,
} from './ownLogs/userLogsGetGet.operation';

import {
	execute as ownLogsUserLogsListGetExecute,
	description as ownLogsUserLogsListGetDescription,
} from './ownLogs/userLogsListGet.operation';

import {
	execute as ownLogsUserLogsUpdatePutExecute,
	description as ownLogsUserLogsUpdatePutDescription,
} from './ownLogs/userLogsUpdatePut.operation';

import {
	execute as privateDatabaseCreationCapabilitiesGetExecute,
	description as privateDatabaseCreationCapabilitiesGetDescription,
} from './privateDatabase/creationCapabilitiesGet.operation';

import {
	execute as privateDatabaseGetGetExecute,
} from './privateDatabase/getGet.operation';

import {
	execute as privateDatabaseListGetExecute,
} from './privateDatabase/listGet.operation';

import {
	execute as restoreSnapshotCreatePostExecute,
	description as restoreSnapshotCreatePostDescription,
} from './restoreSnapshot/createPost.operation';

import {
	execute as runtimeAttachedDomainsGetExecute,
	description as runtimeAttachedDomainsGetDescription,
} from './runtime/attachedDomainsGet.operation';

import {
	execute as runtimeAvailableTypesGetExecute,
	description as runtimeAvailableTypesGetDescription,
} from './runtime/availableTypesGet.operation';

import {
	execute as runtimeCreatePostExecute,
	description as runtimeCreatePostDescription,
} from './runtime/createPost.operation';

import {
	execute as runtimeDeleteDeleteExecute,
	description as runtimeDeleteDeleteDescription,
} from './runtime/deleteDelete.operation';

import {
	execute as runtimeGetGetExecute,
} from './runtime/getGet.operation';

import {
	execute as runtimeListGetExecute,
} from './runtime/listGet.operation';

import {
	execute as runtimeUpdatePutExecute,
	description as runtimeUpdatePutDescription,
} from './runtime/updatePut.operation';

import {
	execute as serviceInfosUpdatePutExecute,
	description as serviceInfosUpdatePutDescription,
} from './serviceInfosUpdatePut.operation';

import {
	execute as smAbuseStateGetExecute,
} from './serviceManagement/abuseStateGet.operation';

import {
	execute as smAvailableConfigurationsGetExecute,
} from './serviceManagement/availableConfigurationsGet.operation';

import {
	execute as smChangeContactPostExecute,
	description as smChangeContactPostDescription,
} from './serviceManagement/changeContactPost.operation';

import {
	execute as smConfirmTerminationCreateExecute,
} from './serviceManagement/confirmTerminationCreate.operation';

import {
	execute as smMetricsTokenGetExecute,
} from './serviceManagement/metricsTokenGet.operation';

import {
	execute as smRequestBoostPostExecute,
} from './serviceManagement/requestBoostPost.operation';

import {
	execute as smRequestPostExecute,
	description as smRequestPostDescription,
} from './serviceManagement/requestPost.operation';

import {
	execute as smTerminateCreateExecute,
} from './serviceManagement/terminateCreate.operation';

import {
	execute as smUnblockTCPOutPutExecute,
} from './serviceManagement/unblockTCPOutPut.operation';

import {
	execute as smUserLogsTokenGetExecute,
} from './serviceManagement/userLogsTokenGet.operation';

import {
	execute as sslServiceCreatePostExecute,
} from './sslService/createPost.operation';

import {
	execute as sslServiceDeleteDeleteExecute,
	description as sslServiceDeleteDeleteDescription,
} from './sslService/deleteDelete.operation';

import {
	execute as sslServiceDomainsGetExecute,
	description as sslServiceDomainsGetDescription,
} from './sslService/domainsGet.operation';

import {
	execute as sslServiceGetGetExecute,
	description as sslServiceGetGetDescription,
} from './sslService/getGet.operation';

import {
	execute as sslServiceListGetExecute,
} from './sslService/listGet.operation';

import {
	execute as sslServiceRegeneratePostExecute,
	description as sslServiceRegeneratePostDescription,
} from './sslService/regeneratePost.operation';

import {
	execute as sslServiceReportGetExecute,
	description as sslServiceReportGetDescription,
} from './sslService/reportGet.operation';

import {
	execute as executeStatisticsGet,
	description as descriptionStatisticsGet,
} from './statistics/statisticsGet.operation';

import {
	execute as tokenGetGetExecute,
	description as tokenGetGetDescription,
} from './token/getGet.operation';

import {
	execute as userChangePasswordPostExecute,
	description as userChangePasswordPostDescription,
} from './user/changePasswordPost.operation';

import {
	execute as userCreatePostExecute,
	description as userCreatePostDescription,
} from './user/createPost.operation';

import {
	execute as userDeleteDeleteExecute,
	description as userDeleteDeleteDescription,
} from './user/deleteDelete.operation';

import {
	execute as userLogsChangePasswordPostExecute,
	description as userLogsChangePasswordPostDescription,
} from './userLogs/changePasswordPost.operation';

import {
	execute as userLogsCreatePostExecute,
	description as userLogsCreatePostDescription,
} from './userLogs/createPost.operation';

import {
	execute as userLogsDeleteDeleteExecute,
	description as userLogsDeleteDeleteDescription,
} from './userLogs/deleteDelete.operation';

import {
	execute as userLogsGetGetExecute,
	description as userLogsGetGetDescription,
} from './userLogs/getGet.operation';

import {
	execute as userLogsListGetExecute,
	description as userLogsListGetDescription,
} from './userLogs/listGet.operation';

import {
	execute as userLogsUpdatePutExecute,
	description as userLogsUpdatePutDescription,
} from './userLogs/updatePut.operation';

import {
	execute as executeUserUpdatePut,
	description as descriptionUserUpdatePut,
} from './userUpdatePut.operation';

import {
	execute as v2AttachedDomainCreateExecute,
	description as v2AttachedDomainCreateDescription,
} from './v2/attachedDomain/createPostV2.operation';

import {
	execute as v2AttachedDomainListByResourceExecute,
	description as v2AttachedDomainListByResourceDescription,
} from './v2/attachedDomain/listByResourceGetV2.operation';

import {
	execute as v2AttachedDomainListGetExecute,
	description as v2AttachedDomainListGetDescription,
} from './v2/attachedDomainListGetV2.operation';

import {
	execute as v2CertificateListGetExecute,
	description as v2CertificateListGetDescription,
} from './v2/certificateListGetV2.operation';

import {
	execute as v2ResourceAttachedDomainListGetExecute,
	description as v2ResourceAttachedDomainListGetDescription,
} from './v2/resourceAttachedDomainListGetV2.operation';

import {
	execute as v2ResourceGetGetExecute,
	description as v2ResourceGetGetDescription,
} from './v2/resourceGetGetV2.operation';

import {
	execute as v2ResourceListGetAllExecute,
	description as v2ResourceListGetAllDescription,
} from './v2/resourceListGetV2.operation';

import {
	execute as v2ImportCustomCertExecute,
	description as v2ImportCustomCertDescription,
} from './v2/ssl/importCustomCertificatePostV2.operation';

import {
	execute as v2DeleteUserExecute,
	description as v2DeleteUserDescription,
} from './v2/user/deleteUserV2.operation';

import {
	execute as v2WebsiteDeleteDeleteExecute,
	description as v2WebsiteDeleteDeleteDescription,
} from './v2/website/deleteDeleteByWebsiteIdGetV2.operation';

import {
	execute as v2WebsiteCreatePostExecute,
	description as v2WebsiteCreatePostDescription,
} from './v2/websiteCreatePostV2.operation';

import {
	execute as v2WebsiteDomainListGetExecute,
	description as v2WebsiteDomainListGetDescription,
} from './v2/websiteDomainListGetV2.operation';

import {
	execute as v2WebsiteGetGetExecute,
	description as v2WebsiteGetGetDescription,
} from './v2/websiteGetGetV2.operation';

import {
	execute as v2WebsiteListGetExecute,
	description as v2WebsiteListGetDescription,
} from './v2/websiteListGetV2.operation';

import {
	execute as v2WebsiteUpdatePutExecute,
	description as v2WebsiteUpdatePutDescription,
} from './v2/websiteUpdatePutV2.operation';

import {
	execute as vcsSupportedGetExecute,
	description as vcsSupportedGetDescription,
} from './vcs/supportedGet.operation';

import {
	execute as vcsWebhooksGetExecute,
	description as vcsWebhooksGetDescription,
} from './vcs/webhooksGet.operation';

import {
	execute as websiteCreatePostExecute,
	description as websiteCreatePostDescription,
} from './website/createPost.operation';

import {
	execute as websiteCreationCapabilitiesGetExecute,
	description as websiteCreationCapabilitiesGetDescription,
} from './website/creationCapabilitiesGet.operation';

import {
	execute as websiteDeleteDeleteExecute,
	description as websiteDeleteDeleteDescription,
} from './website/deleteDelete.operation';

import {
	execute as websiteDeploymentCreatePostExecute,
	description as websiteDeploymentCreatePostDescription,
} from './website/deploymentCreatePost.operation';

import {
	execute as websiteDeploymentGetExecute,
	description as websiteDeploymentGetDescription,
} from './website/deploymentGet.operation';

import {
	execute as websiteDeploymentGetByIdExecute,
	description as websiteDeploymentGetByIdDescription,
} from './website/deploymentGetById.operation';

import {
	execute as websiteDeploymentLogsGetExecute,
	description as websiteDeploymentLogsGetDescription,
} from './website/deploymentLogsGet.operation';

import {
	execute as websiteGetGetExecute,
	description as websiteGetGetDescription,
} from './website/getGet.operation';

import {
	execute as websiteListGetExecute,
	description as websiteListGetDescription,
} from './website/listGet.operation';

import {
	execute as websiteUpdatePutExecute,
	description as websiteUpdatePutDescription,
} from './website/updatePut.operation';

const noProps = (): never[] => [];

const apiVersionSelector: INodeProperties = {
	displayName: 'API Version',
	name: 'apiVersion',
	type: 'options',
	options: [{ name: 'V1 API', value: 'v1' }, { name: 'V2 API', value: 'v2' },],
	default: 'v1',
	description: 'Select the API version to use',
};

const v1 = createOperationDispatcher(
	'hostingOperation',
	'hosting',
	[
	{
		name: 'Attach Domain',
		value: 'attachedDomainCreate',
		action: 'Attach a domain to hosting',
		execute: executeAttachedDomainCreate,
		description: descriptionAttachedDomainCreate,
	},
	{
		name: 'Attached Domain - Dig Status',
		value: 'attachedDomainDigStatus',
		action: 'attachedDomainDigStatus',
		execute: attachedDomainDigStatusGetExecute,
		description: attachedDomainDigStatusGetDescription,
	},
	{
		name: 'Attached Domain - Restart',
		value: 'attachedDomainRestart',
		action: 'attachedDomainRestart',
		execute: attachedDomainRestartPostExecute,
		description: attachedDomainRestartPostDescription,
	},
	{
		name: 'Attached Domain - SSL Create',
		value: 'attachedDomainSslCreate',
		action: 'attachedDomainSslCreate',
		execute: attachedDomainSslCreatePostExecute,
		description: attachedDomainSslCreatePostDescription,
	},
	{
		name: 'Attached Domain - SSL Delete',
		value: 'attachedDomainSslDelete',
		action: 'attachedDomainSslDelete',
		execute: attachedDomainSslDeleteExecute,
		description: attachedDomainSslDeleteDescription,
	},
	{
		name: 'Attached Domain - SSL Get',
		value: 'attachedDomainSslGet',
		action: 'attachedDomainSslGet',
		execute: attachedDomainSslGetExecute,
		description: attachedDomainSslGetDescription,
	},
	{
		name: 'Attached Domain - SSL Regenerate',
		value: 'attachedDomainSslRegenerate',
		action: 'attachedDomainSslRegenerate',
		execute: attachedDomainSslRegeneratePostExecute,
		description: attachedDomainSslRegeneratePostDescription,
	},
	{
		name: 'Attached Domain - SSL Report',
		value: 'attachedDomainSslReport',
		action: 'attachedDomainSslReport',
		execute: attachedDomainSslReportGetExecute,
		description: attachedDomainSslReportGetDescription,
	},
	{
		name: 'Attached Domain - SSL Update',
		value: 'attachedDomainSslUpdate',
		action: 'attachedDomainSslUpdate',
		execute: attachedDomainSslUpdatePutExecute,
		description: attachedDomainSslUpdatePutDescription,
	},
	{
		name: 'Available Offer',
		value: 'availableOfferGet',
		action: 'availableOfferGet',
		execute: availableOfferGetExecute,
		description: availableOfferGetDescription,
	},
	{
		name: 'Boost History - Get',
		value: 'boostHistoryGet',
		action: 'boostHistoryGet',
		execute: boostHistoryGetGetExecute,
		description: boostHistoryGetGetDescription,
	},
	{
		name: 'Boost History - List',
		value: 'boostHistoryList',
		action: 'boostHistoryList',
		execute: boostHistoryListGetExecute,
		description: boostHistoryListGetDescription,
	},
	{
		name: 'Add CDN Domain',
		value: 'cdnAddDomain',
		action: 'cdnAddDomain',
		execute: cdnDomainCreatePostExecute,
		description: cdnDomainCreatePostDescription,
	},
	{
		name: 'CDN - Available Options',
		value: 'cdnAvailableOptions',
		action: 'cdnAvailableOptions',
		execute: cdnAvailableOptionsGetExecute,
		description: noProps,
	},
	{
		name: 'CDN - Delete Domain',
		value: 'cdnDeleteDomain',
		action: 'cdnDeleteDomain',
		execute: cdnDomainDeleteDeleteExecute,
		description: cdnDomainDeleteDeleteDescription,
	},
	{
		name: 'CDN - Get Domain',
		value: 'cdnDomainGet',
		action: 'cdnDomainGet',
		execute: cdnDomainGetGetExecute,
		description: cdnDomainGetGetDescription,
	},
	{
		name: 'CDN - Domain Logs',
		value: 'cdnDomainLogs',
		action: 'cdnDomainLogs',
		execute: cdnDomainLogsGetExecute,
		description: cdnDomainLogsGetDescription,
	},
	{
		name: 'CDN - Create Domain Option',
		value: 'cdnDomainOptionCreate',
		action: 'cdnDomainOptionCreate',
		execute: cdnDomainOptionCreatePostExecute,
		description: cdnDomainOptionCreatePostDescription,
	},
	{
		name: 'CDN - Delete Domain Option',
		value: 'cdnDomainOptionDelete',
		action: 'cdnDomainOptionDelete',
		execute: cdnDomainOptionDeleteDeleteExecute,
		description: cdnDomainOptionDeleteDeleteDescription,
	},
	{
		name: 'CDN - Get Domain Option',
		value: 'cdnDomainOptionGet',
		action: 'cdnDomainOptionGet',
		execute: cdnDomainOptionGetGetExecute,
		description: cdnDomainOptionGetGetDescription,
	},
	{
		name: 'CDN - Refresh Domain',
		value: 'cdnDomainRefresh',
		action: 'cdnDomainRefresh',
		execute: cdnDomainRefreshPostExecute,
		description: cdnDomainRefreshPostDescription,
	},
	{
		name: 'CDN - Domain Statistics',
		value: 'cdnDomainStatistics',
		action: 'cdnDomainStatistics',
		execute: cdnDomainStatisticsGetExecute,
		description: cdnDomainStatisticsGetDescription,
	},
	{
		name: 'CDN - Get',
		value: 'cdnGet',
		action: 'cdnGet',
		execute: cdnGetExecute,
		description: noProps,
	},
	{
		name: 'CDN - List Domains',
		value: 'cdnListDomains',
		action: 'cdnListDomains',
		execute: cdnDomainListGetExecute,
		description: noProps,
	},
	{
		name: 'CDN - List Operations',
		value: 'cdnListOperations',
		action: 'cdnListOperations',
		execute: cdnOperationListGetExecute,
		description: noProps,
	},
	{
		name: 'CDN - List Options',
		value: 'cdnListOptions',
		action: 'cdnListOptions',
		execute: cdnDomainOptionListGetExecute,
		description: noProps,
	},
	{
		name: 'CDN - Get Operation',
		value: 'cdnOperationGet',
		action: 'cdnOperationGet',
		execute: cdnOperationGetGetExecute,
		description: cdnOperationGetGetDescription,
	},
	{
		name: 'CDN - Purge Cache',
		value: 'cdnPurgeCache',
		action: 'cdnPurgeCache',
		execute: cdnDomainPurgePostExecute,
		description: cdnDomainPurgePostDescription,
	},
	{
		name: 'CDN - Service Infos',
		value: 'cdnServiceInfos',
		action: 'cdnServiceInfos',
		execute: cdnServiceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'CDN - Terminate',
		value: 'cdnTerminate',
		action: 'cdnTerminate',
		execute: cdnTerminateCreateExecute,
		description: noProps,
	},
	{
		name: 'CDN - Update Domain Option',
		value: 'cdnUpdateDomainOption',
		action: 'cdnUpdateDomainOption',
		execute: cdnDomainOptionUpdatePutExecute,
		description: cdnDomainOptionUpdatePutDescription,
	},
	{
		name: 'CDN - Update Service Infos',
		value: 'cdnUpdateServiceInfos',
		action: 'cdnUpdateServiceInfos',
		execute: cdnServiceInfosUpdatePutExecute,
		description: cdnServiceInfosUpdatePutDescription,
	},
	{
		name: 'Configuration - Get',
		value: 'configurationGet',
		action: 'configurationGet',
		execute: configurationGetGetExecute,
		description: configurationGetGetDescription,
	},
	{
		name: 'Configure Hosting',
		value: 'configurationPut',
		action: 'Set PHP version configuration',
		execute: executeConfigurationPut,
		description: descriptionConfigurationPut,
	},
	{
		name: 'Create Cron Job',
		value: 'cronCreatePost',
		action: 'Create a new cron job on the hosting',
		execute: executeCronCreatePost,
		description: descriptionCronCreatePost,
	},
	{
		name: 'Create Default SSL Certificate',
		value: 'defaultSslCertificateCreate',
		action: 'Create a default OVH SSL certificate',
		execute: executeDefaultSslCertificateCreate,
		description: descriptionDefaultSslCertificateCreate,
	},
	{
		name: 'Cron Available Language - List',
		value: 'cronAvailableLanguageList',
		action: 'cronAvailableLanguageList',
		execute: cronAvailableLanguageListGetExecute,
		description: cronAvailableLanguageListGetDescription,
	},
	{
		name: 'Database Create',
		value: 'databaseCreatePost',
		action: 'Create a new database on the hosting service',
		execute: executeDatabaseCreatePost,
		description: descriptionDatabaseCreatePost,
	},
	{
		name: 'Database Delete',
		value: 'databaseDelete',
		action: 'Delete a database from the hosting service',
		execute: executeDatabaseDelete,
		description: descriptionDatabaseDelete,
	},
	{
		name: 'Database Update',
		value: 'databaseUpdatePut',
		action: 'Update a database on the hosting service',
		execute: executeDatabaseUpdatePut,
		description: descriptionDatabaseUpdatePut,
	},
	{
		name: 'DB - Available Types',
		value: 'dbAvailableTypes',
		action: 'dbAvailableTypes',
		execute: dbAvailableTypeListGetExecute,
		description: dbAvailableTypeListGetDescription,
	},
	{
		name: 'DB - Available Versions',
		value: 'dbAvailableVersions',
		action: 'dbAvailableVersions',
		execute: dbAvailableVersionListGetExecute,
		description: dbAvailableVersionListGetDescription,
	},
	{
		name: 'DB - Capabilities',
		value: 'dbCapabilities',
		action: 'dbCapabilities',
		execute: dbCapabilitiesGetExecute,
		description: noProps,
	},
	{
		name: 'DB - Change Password',
		value: 'dbChangePassword',
		action: 'dbChangePassword',
		execute: dbChangePasswordPutExecute,
		description: dbChangePasswordPutDescription,
	},
	{
		name: 'DB - Copy Database',
		value: 'dbCopyDatabase',
		action: 'dbCopyDatabase',
		execute: dbCopyPostExecute,
		description: dbCopyPostDescription,
	},
	{
		name: 'DB - Delete Copy',
		value: 'dbCopyDelete',
		action: 'dbCopyDelete',
		execute: dbCopyDeleteDeleteExecute,
		description: dbCopyDeleteDeleteDescription,
	},
	{
		name: 'DB - Get Copy',
		value: 'dbCopyGet',
		action: 'dbCopyGet',
		execute: dbCopyGetGetExecute,
		description: dbCopyGetGetDescription,
	},
	{
		name: 'DB - Copy List',
		value: 'dbCopyList',
		action: 'dbCopyList',
		execute: dbCopyListGetExecute,
		description: dbCopyListGetDescription,
	},
	{
		name: 'DB - Restore From Copy',
		value: 'dbCopyRestore',
		action: 'dbCopyRestore',
		execute: dbCopyRestorePostExecute,
		description: dbCopyRestorePostDescription,
	},
	{
		name: 'DB - Create Dump',
		value: 'dbCreateDump',
		action: 'dbCreateDump',
		execute: dbDumpCreatePostExecute,
		description: noProps,
	},
	{
		name: 'DB - Creation Capabilities',
		value: 'dbCreationCapabilities',
		action: 'dbCreationCapabilities',
		execute: dbCreationCapabilitiesGetExecute,
		description: dbCreationCapabilitiesGetDescription,
	},
	{
		name: 'DB - Delete Dump',
		value: 'dbDumpDelete',
		action: 'dbDumpDelete',
		execute: dbDumpDeleteDeleteExecute,
		description: dbDumpDeleteDeleteDescription,
	},
	{
		name: 'DB - Get Dump by ID',
		value: 'dbDumpGetById',
		action: 'dbDumpGetById',
		execute: dbDumpGetGetExecute,
		description: dbDumpGetGetDescription,
	},
	{
		name: 'DB - Restore From Dump',
		value: 'dbDumpRestore',
		action: 'dbDumpRestore',
		execute: dbDumpRestorePostExecute,
		description: dbDumpRestorePostDescription,
	},
	{
		name: 'DB - Get Dump',
		value: 'dbGetDump',
		action: 'dbGetDump',
		execute: dbDumpGetExecute,
		description: noProps,
	},
	{
		name: 'DB - Get Restore',
		value: 'dbGetRestore',
		action: 'dbGetRestore',
		execute: dbRestoreGetExecute,
		description: dbRestoreGetDescription,
	},
	{
		name: 'DB - Import Dump',
		value: 'dbImportDump',
		action: 'dbImportDump',
		execute: dbImportPostExecute,
		description: dbImportPostDescription,
	},
	{
		name: 'DB - List Requests',
		value: 'dbListRequests',
		action: 'dbListRequests',
		execute: dbRequestListGetExecute,
		description: noProps,
	},
	{
		name: 'DB - Metrics Token',
		value: 'dbMetricsToken',
		action: 'dbMetricsToken',
		execute: dbMetricsTokenGetExecute,
		description: noProps,
	},
	{
		name: 'DB - Restore',
		value: 'dbRestore',
		action: 'dbRestore',
		execute: dbRestoreCreatePostExecute,
		description: noProps,
	},
	{
		name: 'DB - Statistics',
		value: 'dbStatistics',
		action: 'dbStatistics',
		execute: dbStatisticsGetExecute,
		description: noProps,
	},
	{
		name: 'Delete Attached Domain',
		value: 'attachedDomainDelete',
		action: 'Detach/delete an attached domain from hosting',
		execute: executeAttachedDomainDelete,
		description: descriptionAttachedDomainDelete,
	},
	{
		name: 'Delete Cron Job',
		value: 'cronDeleteDelete',
		action: 'Delete a cron job from the hosting',
		execute: executeCronDeleteDelete,
		description: descriptionCronDeleteDelete,
	},
	{
		name: 'Dump - Delete',
		value: 'dumpDelete',
		action: 'dumpDelete',
		execute: dumpDeleteDeleteExecute,
		description: dumpDeleteDeleteDescription,
	},
	{
		name: 'Dump - Get',
		value: 'dumpGet',
		action: 'dumpGet',
		execute: dumpGetGetExecute,
		description: dumpGetGetDescription,
	},
	{
		name: 'Dump - List',
		value: 'dumpList',
		action: 'dumpList',
		execute: dumpListGetExecute,
		description: dumpListGetDescription,
	},
	{
		name: 'Email - Bounces',
		value: 'emailBounces',
		action: 'emailBounces',
		execute: emailBouncesGetExecute,
		description: emailBouncesGetDescription,
	},
	{
		name: 'Email - Create',
		value: 'emailCreate',
		action: 'emailCreate',
		execute: emailCreatePostExecute,
		description: emailCreatePostDescription,
	},
	{
		name: 'Email - Delete',
		value: 'emailDelete',
		action: 'emailDelete',
		execute: emailDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'Email - List',
		value: 'emailList',
		action: 'emailList',
		execute: emailListGetExecute,
		description: noProps,
	},
	{
		name: 'Email Option - Get',
		value: 'emailOptionGet',
		action: 'emailOptionGet',
		execute: emailOptionGetGetExecute,
		description: emailOptionGetGetDescription,
	},
	{
		name: 'Email Option - List',
		value: 'emailOptionList',
		action: 'emailOptionList',
		execute: emailOptionListGetExecute,
		description: emailOptionListGetDescription,
	},
	{
		name: 'Email Option - Service Infos',
		value: 'emailOptionServiceInfos',
		action: 'emailOptionServiceInfos',
		execute: emailOptionServiceInfosGetExecute,
		description: emailOptionServiceInfosGetDescription,
	},
	{
		name: 'Email Option - Terminate',
		value: 'emailOptionTerminate',
		action: 'emailOptionTerminate',
		execute: emailOptionTerminatePostExecute,
		description: emailOptionTerminatePostDescription,
	},
	{
		name: 'Email - Request Operation',
		value: 'emailRequest',
		action: 'emailRequest',
		execute: emailRequestPostExecute,
		description: emailRequestPostDescription,
	},
	{
		name: 'Email - Update',
		value: 'emailUpdate',
		action: 'emailUpdate',
		execute: emailUpdatePutExecute,
		description: emailUpdatePutDescription,
	},
	{
		name: 'Email - Volumes History',
		value: 'emailVolumes',
		action: 'emailVolumes',
		execute: emailVolumesGetExecute,
		description: emailVolumesGetDescription,
	},
	{
		name: 'Environment Variable Set',
		value: 'envVarSetCreate',
		action: 'Set an environment variable',
		execute: executeEnvVarSetCreate,
		description: descriptionEnvVarSetCreate,
	},
	{
		name: 'Environment Variable - Create',
		value: 'envVarCreatePost',
		action: 'envVarCreatePost',
		execute: envVarCreatePostExecute,
		description: envVarCreatePostDescription,
	},
	{
		name: 'Environment Variable - Delete',
		value: 'envVarDeleteDelete',
		action: 'envVarDeleteDelete',
		execute: envVarDeleteDeleteExecute,
		description: envVarDeleteDeleteDescription,
	},
	{
		name: 'Environment Variable - Update',
		value: 'envVarUpdatePut',
		action: 'envVarUpdatePut',
		execute: envVarUpdatePutExecute,
		description: envVarUpdatePutDescription,
	},
	{
		name: 'Extra SQL Perso - Databases',
		value: 'extraSqlPersoDatabases',
		action: 'extraSqlPersoDatabases',
		execute: extraSqlPersoDatabasesGetExecute,
		description: extraSqlPersoDatabasesGetDescription,
	},
	{
		name: 'Extra SQL Perso - Get',
		value: 'extraSqlPersoGet',
		action: 'extraSqlPersoGet',
		execute: extraSqlPersoGetGetExecute,
		description: extraSqlPersoGetGetDescription,
	},
	{
		name: 'Extra SQL Perso - List',
		value: 'extraSqlPersoList',
		action: 'extraSqlPersoList',
		execute: extraSqlPersoListGetExecute,
		description: extraSqlPersoListGetDescription,
	},
	{
		name: 'Extra SQL Perso - Service Infos',
		value: 'extraSqlPersoServiceInfos',
		action: 'extraSqlPersoServiceInfos',
		execute: extraSqlPersoServiceInfosGetExecute,
		description: extraSqlPersoServiceInfosGetDescription,
	},
	{
		name: 'Extra SQL Perso - Service Infos Update',
		value: 'extraSqlPersoServiceInfosUpdate',
		action: 'extraSqlPersoServiceInfosUpdate',
		execute: extraSqlPersoServiceInfosUpdatePostExecute,
		description: extraSqlPersoServiceInfosUpdatePostDescription,
	},
	{
		name: 'Extra SQL Perso - Terminate',
		value: 'extraSqlPersoTerminate',
		action: 'extraSqlPersoTerminate',
		execute: extraSqlPersoTerminatePostExecute,
		description: extraSqlPersoTerminatePostDescription,
	},
	{
		name: 'Find Hosting by Domain',
		value: 'findByDomain',
		action: 'Find hosting services linked to a domain',
		execute: executeFindByDomain,
		description: descriptionFindByDomain,
	},
	{
		name: 'Freedom - List',
		value: 'freedomList',
		action: 'freedomList',
		execute: freedomListGetExecute,
		description: freedomListGetDescription,
	},
	{
		name: 'Get',
		value: 'get',
		action: 'Get hosting web service details',
		execute: executeGet,
		description: descriptionGet,
	},
	{
		name: 'Get Attached Domain',
		value: 'getAttachedDomain',
		action: 'Get an attached domain',
		execute: executeGetAttachedDomain,
		description: descriptionGetAttachedDomain,
	},
	{
		name: 'Get Cron',
		value: 'getCron',
		action: 'Get a cron job',
		execute: executeGetCron,
		description: descriptionGetCron,
	},
	{
		name: 'Get Database',
		value: 'getDatabase',
		action: 'Get a database',
		execute: executeGetDatabase,
		description: descriptionGetDatabase,
	},
	{
		name: 'Get Email',
		value: 'getEmail',
		action: 'Get email configuration',
		execute: executeGetEmail,
		description: descriptionGetEmail,
	},
	{
		name: 'Get Env Var',
		value: 'getEnvVar',
		action: 'Get an environment variable',
		execute: executeGetEnvVar,
		description: descriptionGetEnvVar,
	},
	{
		name: 'Get Module',
		value: 'getModule',
		action: 'Get a module',
		execute: executeGetModule,
		description: descriptionGetModule,
	},
	{
		name: 'Get Runtime',
		value: 'getRuntime',
		action: 'Get a runtime',
		execute: executeGetRuntime,
		description: descriptionGetRuntime,
	},
	{
		name: 'Get Service Infos',
		value: 'getServiceInfos',
		action: 'Get service billing infos',
		execute: executeGetServiceInfos,
		description: descriptionGetServiceInfos,
	},
	{
		name: 'Get SSL',
		value: 'getSsl',
		action: 'Get SSL certificate info',
		execute: executeGetSsl,
		description: descriptionGetSsl,
	},
	{
		name: 'Get Statistics',
		value: 'statisticsGet',
		action: 'Get hosting statistics (bandwidth, hits, errors)',
		execute: executeStatisticsGet,
		description: descriptionStatisticsGet,
	},
	{
		name: 'Get Task',
		value: 'getTask',
		action: 'Get a task',
		execute: executeGetTask,
		description: descriptionGetTask,
	},
	{
		name: 'Get User',
		value: 'getUser',
		action: 'Get a user',
		execute: executeGetUser,
		description: descriptionGetUser,
	},
	{
		name: 'Import Custom Certificate',
		value: 'importCustomCertificateCreate',
		action: 'Import a custom SSL certificate',
		execute: executeImportCustomCertificateCreate,
		description: descriptionImportCustomCertificateCreate,
	},
	{
		name: 'Incident - Get',
		value: 'incidentGet',
		action: 'incidentGet',
		execute: incidentGetExecute,
		description: incidentGetDescription,
	},
	{
		name: 'Indy - Get',
		value: 'indyGet',
		action: 'indyGet',
		execute: indyGetGetExecute,
		description: indyGetGetDescription,
	},
	{
		name: 'Indy - List',
		value: 'indyList',
		action: 'indyList',
		execute: indyListGetExecute,
		description: indyListGetDescription,
	},
	{
		name: 'List',
		value: 'list',
		action: 'List all hosting web services',
		execute: executeList,
		description: descriptionList,
		default: true,
	},
	{
		name: 'List Attached Domains',
		value: 'listAttachedDomains',
		action: 'List attached domains',
		execute: executeListAttachedDomains,
		description: descriptionListAttachedDomains,
	},
	{
		name: 'List Crons',
		value: 'listCrons',
		action: 'List cron jobs',
		execute: executeListCrons,
		description: descriptionListCrons,
	},
	{
		name: 'List Databases',
		value: 'listDatabases',
		action: 'List databases',
		execute: executeListDatabases,
		description: descriptionListDatabases,
	},
	{
		name: 'List Env Vars',
		value: 'listEnvVars',
		action: 'List environment variables',
		execute: executeListEnvVars,
		description: descriptionListEnvVars,
	},
	{
		name: 'List Modules',
		value: 'listModules',
		action: 'List installed modules',
		execute: executeListModules,
		description: descriptionListModules,
	},
	{
		name: 'List Runtimes',
		value: 'listRuntimes',
		action: 'List runtimes',
		execute: executeListRuntimes,
		description: descriptionListRuntimes,
	},
	{
		name: 'List Tasks',
		value: 'listTasks',
		action: 'List tasks',
		execute: executeListTasks,
		description: descriptionListTasks,
	},
	{
		name: 'Local SEO - Account Get',
		value: 'localSeoAccountGet',
		action: 'localSeoAccountGet',
		execute: localSeoAccountGetExecute,
		description: localSeoAccountGetDescription,
	},
	{
		name: 'Local SEO - Account List',
		value: 'localSeoAccountList',
		action: 'localSeoAccountList',
		execute: localSeoAccountListGetExecute,
		description: localSeoAccountListGetDescription,
	},
	{
		name: 'Local SEO - Account Login',
		value: 'localSeoAccountLogin',
		action: 'localSeoAccountLogin',
		execute: localSeoAccountLoginPostExecute,
		description: localSeoAccountLoginPostDescription,
	},
	{
		name: 'Local SEO - Directories List',
		value: 'localSeoDirectoriesList',
		action: 'localSeoDirectoriesList',
		execute: localSeoDirectoriesListGetExecute,
		description: localSeoDirectoriesListGetDescription,
	},
	{
		name: 'Local SEO - Email Availability',
		value: 'localSeoEmailAvailability',
		action: 'localSeoEmailAvailability',
		execute: localSeoEmailAvailabilityGetExecute,
		description: localSeoEmailAvailabilityGetDescription,
	},
	{
		name: 'Local SEO - Email Availability (Global)',
		value: 'localSeoEmailAvailabilityGlobal',
		action: 'localSeoEmailAvailabilityGlobal',
		execute: localSeoEmailAvailabilityGlobalGetExecute,
		description: localSeoEmailAvailabilityGlobalGetDescription,
	},
	{
		name: 'Local SEO - Location Get',
		value: 'localSeoLocationGet',
		action: 'localSeoLocationGet',
		execute: localSeoLocationGetExecute,
		description: localSeoLocationGetDescription,
	},
	{
		name: 'Local SEO - Location List',
		value: 'localSeoLocationList',
		action: 'localSeoLocationList',
		execute: localSeoLocationListGetExecute,
		description: localSeoLocationListGetDescription,
	},
	{
		name: 'Local SEO - Location Service Infos',
		value: 'localSeoLocationServiceInfos',
		action: 'localSeoLocationServiceInfos',
		execute: localSeoLocationServiceInfosGetExecute,
		description: localSeoLocationServiceInfosGetDescription,
	},
	{
		name: 'Local SEO - Location Service Infos Update',
		value: 'localSeoLocationServiceInfosUpdate',
		action: 'localSeoLocationServiceInfosUpdate',
		execute: localSeoLocationServiceInfosUpdatePostExecute,
		description: localSeoLocationServiceInfosUpdatePostDescription,
	},
	{
		name: 'Local SEO - Location Terminate',
		value: 'localSeoLocationTerminate',
		action: 'localSeoLocationTerminate',
		execute: localSeoLocationTerminatePostExecute,
		description: localSeoLocationTerminatePostDescription,
	},
	{
		name: 'Local SEO - Visibility Check',
		value: 'localSeoVisibilityCheck',
		action: 'localSeoVisibilityCheck',
		execute: localSeoVisibilityCheckPostExecute,
		description: localSeoVisibilityCheckPostDescription,
	},
	{
		name: 'Local SEO - Visibility Check Result',
		value: 'localSeoVisibilityCheckResult',
		action: 'localSeoVisibilityCheckResult',
		execute: localSeoVisibilityCheckResultGetExecute,
		description: localSeoVisibilityCheckResultGetDescription,
	},
	{
		name: 'Log - Get Kind',
		value: 'logKindGet',
		action: 'logKindGet',
		execute: logKindGetGetExecute,
		description: logKindGetGetDescription,
	},
	{
		name: 'Log - List Kinds',
		value: 'logKindList',
		action: 'logKindList',
		execute: logKindListGetExecute,
		description: logKindListGetDescription,
	},
	{
		name: 'Log - Create Subscription',
		value: 'logSubscriptionCreate',
		action: 'logSubscriptionCreate',
		execute: logSubscriptionCreatePostExecute,
		description: logSubscriptionCreatePostDescription,
	},
	{
		name: 'Log - Delete Subscription',
		value: 'logSubscriptionDelete',
		action: 'logSubscriptionDelete',
		execute: logSubscriptionDeleteDeleteExecute,
		description: logSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'Log - Get Subscription',
		value: 'logSubscriptionGet',
		action: 'logSubscriptionGet',
		execute: logSubscriptionGetGetExecute,
		description: logSubscriptionGetGetDescription,
	},
	{
		name: 'Log - List Subscriptions',
		value: 'logSubscriptionList',
		action: 'logSubscriptionList',
		execute: logSubscriptionListGetExecute,
		description: logSubscriptionListGetDescription,
	},
	{
		name: 'Log - Generate Temporary URL',
		value: 'logUrl',
		action: 'logUrl',
		execute: logUrlCreatePostExecute,
		description: logUrlCreatePostDescription,
	},
	{
		name: 'Module Catalog - Get by ID',
		value: 'moduleCatalogGetById',
		action: 'moduleCatalogGetById',
		execute: moduleCatalogGetByIdExecute,
		description: moduleCatalogGetByIdDescription,
	},
	{
		name: 'Module Catalog - List',
		value: 'moduleCatalogList',
		action: 'moduleCatalogList',
		execute: moduleCatalogListGetExecute,
		description: moduleCatalogListGetDescription,
	},
	{
		name: 'Module - Create',
		value: 'moduleCreate',
		action: 'moduleCreate',
		execute: moduleCreatePostExecute,
		description: moduleCreatePostDescription,
	},
	{
		name: 'Module - Delete',
		value: 'moduleDelete',
		action: 'moduleDelete',
		execute: moduleDeleteDeleteExecute,
		description: moduleDeleteDeleteDescription,
	},
	{
		name: 'Module - List',
		value: 'moduleList',
		action: 'moduleList',
		execute: moduleListGetExecute,
		description: noProps,
	},
	{
		name: 'Module - Update',
		value: 'moduleUpdate',
		action: 'moduleUpdate',
		execute: moduleUpdatePutExecute,
		description: moduleUpdatePutDescription,
	},
	{
		name: 'Offer Capabilities',
		value: 'offerCapabilitiesGet',
		action: 'offerCapabilitiesGet',
		execute: offerCapabilitiesGetExecute,
		description: offerCapabilitiesGetDescription,
	},
	{
		name: 'OvhConfig - Capabilities',
		value: 'ovhConfigCapabilities',
		action: 'ovhConfigCapabilities',
		execute: ovhConfigCapabilitiesGetExecute,
		description: ovhConfigCapabilitiesGetDescription,
	},
	{
		name: 'OvhConfig - Change Configuration',
		value: 'ovhConfigChangeConfiguration',
		action: 'ovhConfigChangeConfiguration',
		execute: ovhConfigChangeConfigurationPostExecute,
		description: ovhConfigChangeConfigurationPostDescription,
	},
	{
		name: 'OvhConfig - Get',
		value: 'ovhConfigGet',
		action: 'ovhConfigGet',
		execute: ovhConfigGetGetExecute,
		description: ovhConfigGetGetDescription,
	},
	{
		name: 'OvhConfig - List',
		value: 'ovhConfigList',
		action: 'ovhConfigList',
		execute: ovhConfigListGetExecute,
		description: ovhConfigListGetDescription,
	},
	{
		name: 'OvhConfig - Recommended Values',
		value: 'ovhConfigRecommendedValues',
		action: 'ovhConfigRecommendedValues',
		execute: ovhConfigRecommendedValuesGetExecute,
		description: ovhConfigRecommendedValuesGetDescription,
	},
	{
		name: 'OvhConfig - Refresh',
		value: 'ovhConfigRefresh',
		action: 'ovhConfigRefresh',
		execute: ovhConfigRefreshPostExecute,
		description: ovhConfigRefreshPostDescription,
	},
	{
		name: 'OvhConfig - Rollback',
		value: 'ovhConfigRollback',
		action: 'ovhConfigRollback',
		execute: ovhConfigRollbackPostExecute,
		description: ovhConfigRollbackPostDescription,
	},
	{
		name: 'Own Logs - Get',
		value: 'ownLogsGet',
		action: 'ownLogsGet',
		execute: ownLogsGetGetExecute,
		description: ownLogsGetGetDescription,
	},
	{
		name: 'Own Logs - List',
		value: 'ownLogsList',
		action: 'ownLogsList',
		execute: ownLogsListGetExecute,
		description: ownLogsListGetDescription,
	},
	{
		name: 'Own Logs - Change Password',
		value: 'ownLogsUserLogsChangePassword',
		action: 'ownLogsUserLogsChangePassword',
		execute: ownLogsUserLogsChangePasswordPostExecute,
		description: ownLogsUserLogsChangePasswordPostDescription,
	},
	{
		name: 'Own Logs - Create User Logs',
		value: 'ownLogsUserLogsCreate',
		action: 'ownLogsUserLogsCreate',
		execute: ownLogsUserLogsCreatePostExecute,
		description: ownLogsUserLogsCreatePostDescription,
	},
	{
		name: 'Own Logs - Delete User Logs',
		value: 'ownLogsUserLogsDelete',
		action: 'ownLogsUserLogsDelete',
		execute: ownLogsUserLogsDeleteDeleteExecute,
		description: ownLogsUserLogsDeleteDeleteDescription,
	},
	{
		name: 'Own Logs - Get User Logs',
		value: 'ownLogsUserLogsGet',
		action: 'ownLogsUserLogsGet',
		execute: ownLogsUserLogsGetGetExecute,
		description: ownLogsUserLogsGetGetDescription,
	},
	{
		name: 'Own Logs - List User Logs',
		value: 'ownLogsUserLogsList',
		action: 'ownLogsUserLogsList',
		execute: ownLogsUserLogsListGetExecute,
		description: ownLogsUserLogsListGetDescription,
	},
	{
		name: 'Own Logs - Update User Logs',
		value: 'ownLogsUserLogsUpdate',
		action: 'ownLogsUserLogsUpdate',
		execute: ownLogsUserLogsUpdatePutExecute,
		description: ownLogsUserLogsUpdatePutDescription,
	},
	{
		name: 'Private DB - Creation Capabilities',
		value: 'privateDatabaseCreationCapabilities',
		action: 'privateDatabaseCreationCapabilities',
		execute: privateDatabaseCreationCapabilitiesGetExecute,
		description: privateDatabaseCreationCapabilitiesGetDescription,
	},
	{
		name: 'Private DB - Get',
		value: 'privateDatabaseGet',
		action: 'privateDatabaseGet',
		execute: privateDatabaseGetGetExecute,
		description: noProps,
	},
	{
		name: 'Private DB - List',
		value: 'privateDatabaseList',
		action: 'privateDatabaseList',
		execute: privateDatabaseListGetExecute,
		description: noProps,
	},
	{
		name: 'Purge CDN Cache',
		value: 'attachedDomainPurgeCacheCreate',
		action: 'Purge CDN cache for an attached domain',
		execute: executeAttachedDomainPurgeCacheCreate,
		description: descriptionAttachedDomainPurgeCacheCreate,
	},
	{
		name: 'Restore Snapshot',
		value: 'restoreSnapshot',
		action: 'restoreSnapshot',
		execute: restoreSnapshotCreatePostExecute,
		description: restoreSnapshotCreatePostDescription,
	},
	{
		name: 'Runtime - Attached Domains',
		value: 'runtimeAttachedDomains',
		action: 'runtimeAttachedDomains',
		execute: runtimeAttachedDomainsGetExecute,
		description: runtimeAttachedDomainsGetDescription,
	},
	{
		name: 'Runtime - Available Types',
		value: 'runtimeAvailableTypes',
		action: 'runtimeAvailableTypes',
		execute: runtimeAvailableTypesGetExecute,
		description: runtimeAvailableTypesGetDescription,
	},
	{
		name: 'Runtime - Create',
		value: 'runtimeCreate',
		action: 'runtimeCreate',
		execute: runtimeCreatePostExecute,
		description: runtimeCreatePostDescription,
	},
	{
		name: 'Runtime - Delete',
		value: 'runtimeDelete',
		action: 'runtimeDelete',
		execute: runtimeDeleteDeleteExecute,
		description: runtimeDeleteDeleteDescription,
	},
	{
		name: 'Runtime - Get',
		value: 'runtimeGet2',
		action: 'runtimeGet2',
		execute: runtimeGetGetExecute,
		description: noProps,
	},
	{
		name: 'Runtime - List',
		value: 'runtimeList2',
		action: 'runtimeList2',
		execute: runtimeListGetExecute,
		description: noProps,
	},
	{
		name: 'Runtime - Update',
		value: 'runtimeUpdate',
		action: 'runtimeUpdate',
		execute: runtimeUpdatePutExecute,
		description: runtimeUpdatePutDescription,
	},
	{
		name: 'Service - Abuse State',
		value: 'serviceAbuseState',
		action: 'serviceAbuseState',
		execute: smAbuseStateGetExecute,
		description: noProps,
	},
	{
		name: 'Service - Available Configurations',
		value: 'serviceAvailableConfigurations',
		action: 'serviceAvailableConfigurations',
		execute: smAvailableConfigurationsGetExecute,
		description: noProps,
	},
	{
		name: 'Service - Change Contact',
		value: 'serviceChangeContact',
		action: 'serviceChangeContact',
		execute: smChangeContactPostExecute,
		description: smChangeContactPostDescription,
	},
	{
		name: 'Service - Confirm Termination',
		value: 'serviceConfirmTermination',
		action: 'serviceConfirmTermination',
		execute: smConfirmTerminationCreateExecute,
		description: noProps,
	},
	{
		name: 'Service Infos - Update',
		value: 'serviceInfosUpdatePut',
		action: 'serviceInfosUpdatePut',
		execute: serviceInfosUpdatePutExecute,
		description: serviceInfosUpdatePutDescription,
	},
	{
		name: 'Service - Metrics Token',
		value: 'serviceMetricsToken',
		action: 'serviceMetricsToken',
		execute: smMetricsTokenGetExecute,
		description: noProps,
	},
	{
		name: 'Service - Request Boost',
		value: 'serviceRequestBoost',
		action: 'serviceRequestBoost',
		execute: smRequestBoostPostExecute,
		description: noProps,
	},
	{
		name: 'Service - Support Request',
		value: 'serviceSupportRequest',
		action: 'serviceSupportRequest',
		execute: smRequestPostExecute,
		description: smRequestPostDescription,
	},
	{
		name: 'Service - Terminate',
		value: 'serviceTerminate',
		action: 'serviceTerminate',
		execute: smTerminateCreateExecute,
		description: noProps,
	},
	{
		name: 'Service - Unblock TCP Out',
		value: 'serviceUnblockTCPOut',
		action: 'serviceUnblockTCPOut',
		execute: smUnblockTCPOutPutExecute,
		description: noProps,
	},
	{
		name: 'Service - User Logs Token',
		value: 'serviceUserLogsToken',
		action: 'serviceUserLogsToken',
		execute: smUserLogsTokenGetExecute,
		description: noProps,
	},
	{
		name: 'SSH Key - Create',
		value: 'sshKeyCreate',
		action: 'sshKeyCreate',
		execute: sshKeyCreatePostExecute,
		description: sshKeyCreatePostDescription,
	},
	{
		name: 'SSH Key - List',
		value: 'sshKeyList',
		action: 'sshKeyList',
		execute: sshKeyListGetExecute,
		description: sshKeyListGetDescription,
	},
	{
		name: 'SSL - Create',
		value: 'sslCreate',
		action: 'sslCreate',
		execute: sslServiceCreatePostExecute,
		description: noProps,
	},
	{
		name: 'SSL - Delete',
		value: 'sslDelete',
		action: 'sslDelete',
		execute: sslServiceDeleteDeleteExecute,
		description: sslServiceDeleteDeleteDescription,
	},
	{
		name: 'SSL - Domains',
		value: 'sslDomains',
		action: 'sslDomains',
		execute: sslServiceDomainsGetExecute,
		description: sslServiceDomainsGetDescription,
	},
	{
		name: 'SSL - Get',
		value: 'sslGet',
		action: 'sslGet',
		execute: sslServiceGetGetExecute,
		description: sslServiceGetGetDescription,
	},
	{
		name: 'SSL - List',
		value: 'sslList',
		action: 'sslList',
		execute: sslServiceListGetExecute,
		description: noProps,
	},
	{
		name: 'SSL - Regenerate',
		value: 'sslRegenerate',
		action: 'sslRegenerate',
		execute: sslServiceRegeneratePostExecute,
		description: sslServiceRegeneratePostDescription,
	},
	{
		name: 'SSL - Report',
		value: 'sslReport',
		action: 'sslReport',
		execute: sslServiceReportGetExecute,
		description: sslServiceReportGetDescription,
	},
	{
		name: 'Token - Get',
		value: 'tokenGet',
		action: 'tokenGet',
		execute: tokenGetGetExecute,
		description: tokenGetGetDescription,
	},
	{
		name: 'Update Attached Domain',
		value: 'attachedDomainUpdate',
		action: 'Update properties of an attached domain',
		execute: executeAttachedDomainUpdate,
		description: descriptionAttachedDomainUpdate,
	},
	{
		name: 'Update Cron Job',
		value: 'cronUpdatePut',
		action: 'Update a cron job on the hosting',
		execute: executeCronUpdatePut,
		description: descriptionCronUpdatePut,
	},
	{
		name: 'Update Hosting Service',
		value: 'hostingUpdate',
		action: 'Update hosting web service properties',
		execute: executeHostingUpdate,
		description: descriptionHostingUpdate,
	},
	{
		name: 'User Update',
		value: 'userUpdatePut',
		action: 'Update a user password',
		execute: executeUserUpdatePut,
		description: descriptionUserUpdatePut,
	},
	{
		name: 'User - Change Password',
		value: 'userChangePassword',
		action: 'userChangePassword',
		execute: userChangePasswordPostExecute,
		description: userChangePasswordPostDescription,
	},
	{
		name: 'User - Create',
		value: 'userCreate',
		action: 'userCreate',
		execute: userCreatePostExecute,
		description: userCreatePostDescription,
	},
	{
		name: 'User - Delete',
		value: 'userDelete',
		action: 'userDelete',
		execute: userDeleteDeleteExecute,
		description: userDeleteDeleteDescription,
	},
	{
		name: 'User Logs - Change Password',
		value: 'userLogsChangePassword',
		action: 'userLogsChangePassword',
		execute: userLogsChangePasswordPostExecute,
		description: userLogsChangePasswordPostDescription,
	},
	{
		name: 'User Logs - Create',
		value: 'userLogsCreate',
		action: 'userLogsCreate',
		execute: userLogsCreatePostExecute,
		description: userLogsCreatePostDescription,
	},
	{
		name: 'User Logs - Delete',
		value: 'userLogsDelete',
		action: 'userLogsDelete',
		execute: userLogsDeleteDeleteExecute,
		description: userLogsDeleteDeleteDescription,
	},
	{
		name: 'User Logs - Get',
		value: 'userLogsGet',
		action: 'userLogsGet',
		execute: userLogsGetGetExecute,
		description: userLogsGetGetDescription,
	},
	{
		name: 'User Logs - List',
		value: 'userLogsList',
		action: 'userLogsList',
		execute: userLogsListGetExecute,
		description: userLogsListGetDescription,
	},
	{
		name: 'User Logs - Update',
		value: 'userLogsUpdate',
		action: 'userLogsUpdate',
		execute: userLogsUpdatePutExecute,
		description: userLogsUpdatePutDescription,
	},
	{
		name: 'VCS - Supported Platforms',
		value: 'vcsSupported',
		action: 'vcsSupported',
		execute: vcsSupportedGetExecute,
		description: vcsSupportedGetDescription,
	},
	{
		name: 'VCS - Webhooks',
		value: 'vcsWebhooks',
		action: 'vcsWebhooks',
		execute: vcsWebhooksGetExecute,
		description: vcsWebhooksGetDescription,
	},
	{
		name: 'Website - Create',
		value: 'websiteCreate',
		action: 'websiteCreate',
		execute: websiteCreatePostExecute,
		description: websiteCreatePostDescription,
	},
	{
		name: 'Website Creation Capabilities',
		value: 'websiteCreationCapabilities',
		action: 'websiteCreationCapabilities',
		execute: websiteCreationCapabilitiesGetExecute,
		description: websiteCreationCapabilitiesGetDescription,
	},
	{
		name: 'Website - Delete',
		value: 'websiteDelete',
		action: 'websiteDelete',
		execute: websiteDeleteDeleteExecute,
		description: websiteDeleteDeleteDescription,
	},
	{
		name: 'Website - Deployment',
		value: 'websiteDeployment',
		action: 'websiteDeployment',
		execute: websiteDeploymentCreatePostExecute,
		description: websiteDeploymentCreatePostDescription,
	},
	{
		name: 'Website - Get Deployment',
		value: 'websiteDeploymentGetById',
		action: 'websiteDeploymentGetById',
		execute: websiteDeploymentGetByIdExecute,
		description: websiteDeploymentGetByIdDescription,
	},
	{
		name: 'Website - Deployment Logs',
		value: 'websiteDeploymentLogs',
		action: 'websiteDeploymentLogs',
		execute: websiteDeploymentLogsGetExecute,
		description: websiteDeploymentLogsGetDescription,
	},
	{
		name: 'Website Deployment Status',
		value: 'websiteDeploymentStatus',
		action: 'websiteDeploymentStatus',
		execute: websiteDeploymentGetExecute,
		description: websiteDeploymentGetDescription,
	},
	{
		name: 'Website - Get',
		value: 'websiteGet',
		action: 'websiteGet',
		execute: websiteGetGetExecute,
		description: websiteGetGetDescription,
	},
	{
		name: 'Website - List',
		value: 'websiteList',
		action: 'websiteList',
		execute: websiteListGetExecute,
		description: websiteListGetDescription,
	},
	{
		name: 'Website - Update',
		value: 'websiteUpdate',
		action: 'websiteUpdate',
		execute: websiteUpdatePutExecute,
		description: websiteUpdatePutDescription,
	},
	],
	{
		operationDisplayOptions: { show: { apiVersion: ['v1'] } },
		extraShow: { apiVersion: ['v1'] },
	},
);

const v2 = createOperationDispatcher(
	'hostingOperationV2',
	'hosting',
	[
	{
		name: 'V2 - Create Attached Domain',
		value: 'v2CreateAttachedDomain',
		action: 'v2CreateAttachedDomain',
		execute: v2AttachedDomainCreateExecute,
		description: v2AttachedDomainCreateDescription,
	},
	{
		name: 'V2 - Create Website',
		value: 'v2CreateWebsite',
		action: 'v2CreateWebsite',
		execute: v2WebsiteCreatePostExecute,
		description: v2WebsiteCreatePostDescription,
	},
	{
		name: 'V2 - Delete User',
		value: 'v2DeleteUser',
		action: 'v2DeleteUser',
		execute: v2DeleteUserExecute,
		description: v2DeleteUserDescription,
	},
	{
		name: 'V2 - Delete Website',
		value: 'v2DeleteWebsite',
		action: 'v2DeleteWebsite',
		execute: v2WebsiteDeleteDeleteExecute,
		description: v2WebsiteDeleteDeleteDescription,
	},
	{
		name: 'V2 - Get Resource',
		value: 'v2GetResource',
		action: 'v2GetResource',
		execute: v2ResourceGetGetExecute,
		description: v2ResourceGetGetDescription,
	},
	{
		name: 'V2 - Get Resource Attached Domains',
		value: 'v2GetResourceAttachedDomains',
		action: 'v2GetResourceAttachedDomains',
		execute: v2ResourceAttachedDomainListGetExecute,
		description: v2ResourceAttachedDomainListGetDescription,
	},
	{
		name: 'V2 - Get Website',
		value: 'v2GetWebsite',
		action: 'v2GetWebsite',
		execute: v2WebsiteGetGetExecute,
		description: v2WebsiteGetGetDescription,
	},
	{
		name: 'V2 - Import Custom Certificate',
		value: 'v2ImportCustomCertificate',
		action: 'v2ImportCustomCertificate',
		execute: v2ImportCustomCertExecute,
		description: v2ImportCustomCertDescription,
	},
	{
		name: 'V2 - List Attached Domains',
		value: 'v2ListAttachedDomains',
		action: 'v2ListAttachedDomains',
		execute: v2AttachedDomainListGetExecute,
		description: v2AttachedDomainListGetDescription,
	},
	{
		name: 'V2 - List Certificates',
		value: 'v2ListCertificates',
		action: 'v2ListCertificates',
		execute: v2CertificateListGetExecute,
		description: v2CertificateListGetDescription,
	},
	{
		name: 'V2 - List Resource Attached Domains',
		value: 'v2ListResourceAttachedDomains',
		action: 'v2ListResourceAttachedDomains',
		execute: v2AttachedDomainListByResourceExecute,
		description: v2AttachedDomainListByResourceDescription,
	},
	{
		name: 'V2 - List Resources',
		value: 'v2ListResources',
		action: 'v2ListResources',
		execute: v2ResourceListGetAllExecute,
		description: v2ResourceListGetAllDescription,
		default: true,
	},
	{
		name: 'V2 - List Website Domains',
		value: 'v2ListWebsiteDomains',
		action: 'v2ListWebsiteDomains',
		execute: v2WebsiteDomainListGetExecute,
		description: v2WebsiteDomainListGetDescription,
	},
	{
		name: 'V2 - List Websites',
		value: 'v2ListWebsites',
		action: 'v2ListWebsites',
		execute: v2WebsiteListGetExecute,
		description: v2WebsiteListGetDescription,
	},
	{
		name: 'V2 - Update Website',
		value: 'v2UpdateWebsite',
		action: 'v2UpdateWebsite',
		execute: v2WebsiteUpdatePutExecute,
		description: v2WebsiteUpdatePutDescription,
	},
	],
	{
		operationDisplayOptions: { show: { apiVersion: ['v2'] } },
		extraShow: { apiVersion: ['v2'] },
	},
);

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [apiVersionSelector, ...v1.description(displayOptions), ...v2.description(displayOptions)];
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const apiVersion = this.getNodeParameter('apiVersion', itemIndex ?? 0) as string;
	return apiVersion === 'v2'
		? v2.execute.call(this, itemIndex ?? 0)
		: v1.execute.call(this, itemIndex ?? 0);
}
