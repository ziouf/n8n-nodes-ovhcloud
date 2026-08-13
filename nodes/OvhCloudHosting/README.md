# OVH Cloud Hosting Web

> Manage web hosting services (databases, dumps, crons, FTP, mail, logs, PHP, statistics, users, SSL)

## Overview

This node provides **233 operations** (215 V1 + 18 V2) with **142 test suites** for managing OVHcloud resources.

## Available Operations (V1)

### Global

Global (service-independent) operations.

| Operation                            | Method | Endpoint                                      | Tests | Filters |
| ------------------------------------ | ------ | --------------------------------------------- | ----- | ------- |
| `availableOfferGet`                  | GET    | `/hosting/web/availableOffer`                 | 1     | —       | —   |
| `incidentGet`                        | GET    | `/hosting/web/incident`                       | 1     | —       | —   |
| `offerCapabilitiesGet`               | GET    | `/hosting/web/offerCapabilities`              | 1     | —       | —   |
| `moduleCatalogListGet`               | GET    | `/hosting/web/moduleList`                     | 1     | —       | —   |
| `moduleCatalogGetById`               | GET    | `/hosting/web/moduleList/{...}`               | 1     | —       | —   |
| `vcsSupportedGet`                    | GET    | `/hosting/web/vcs/supported`                  | 1     | —       | —   |
| `localSeoDirectoriesListGet`         | GET    | `/hosting/web/localSeo/directoriesList`       | 1     | —       | —   |
| `localSeoEmailAvailabilityGlobalGet` | GET    | `/hosting/web/localSeo/emailAvailability`     | 1     | —       | —   |
| `localSeoVisibilityCheckPost`        | POST   | `/hosting/web/localSeo/visibilityCheck`       | 1     | —       | —   |
| `localSeoVisibilityCheckResultGet`   | GET    | `/hosting/web/localSeo/visibilityCheckResult` | 1     | —       | —   |

### envVar

Environment variable management (full CRUD).

| Operation            | Method | Endpoint                          | Tests | Filters |
| -------------------- | ------ | --------------------------------- | ----- | ------- |
| `listGet`            | GET    | `/hosting/web/{...}/envVar`       | 1     | —       | —   |
| `getGet`             | GET    | `/hosting/web/{...}/envVar/{...}` | 1     | —       | —   |
| `envVarCreatePost`   | POST   | `/hosting/web/{...}/envVar`       | 1     | —       | —   |
| `envVarUpdatePut`    | PUT    | `/hosting/web/{...}/envVar/{...}` | 1     | —       | —   |
| `envVarDeleteDelete` | DELETE | `/hosting/web/{...}/envVar/{...}` | 1     | —       | —   |

### serviceInfos

| Operation               | Method | Endpoint                          | Tests | Filters |
| ----------------------- | ------ | --------------------------------- | ----- | ------- |
| `serviceInfosGet`       | GET    | `/hosting/web/{...}/serviceInfos` | 1     | —       | —   |
| `serviceInfosUpdatePut` | PUT    | `/hosting/web/{...}/serviceInfos` | 1     | —       | —   |

### attachedDomain

Attached domain sub-resources (dig status, restart, SSL management).

| Operation           | Method | Endpoint                                                 | Tests | Filters |
| ------------------- | ------ | -------------------------------------------------------- | ----- | ------- |
| `digStatusGet`      | GET    | `/hosting/web/{...}/attachedDomain/{...}/digStatus`      | 1     | —       | —   |
| `restartPost`       | POST   | `/hosting/web/{...}/attachedDomain/{...}/restart`        | 1     | —       | —   |
| `sslGet`            | GET    | `/hosting/web/{...}/attachedDomain/{...}/ssl`            | 1     | —       | —   |
| `sslCreatePost`     | POST   | `/hosting/web/{...}/attachedDomain/{...}/ssl`            | 1     | —       | —   |
| `sslUpdatePut`      | PUT    | `/hosting/web/{...}/attachedDomain/{...}/ssl`            | 1     | —       | —   |
| `sslDelete`         | DELETE | `/hosting/web/{...}/attachedDomain/{...}/ssl`            | 1     | —       | —   |
| `sslRegeneratePost` | POST   | `/hosting/web/{...}/attachedDomain/{...}/ssl/regenerate` | 1     | —       | —   |
| `sslReportGet`      | GET    | `/hosting/web/{...}/attachedDomain/{...}/ssl/report`     | 1     | —       | —   |

### boostHistory

| Operation | Method | Endpoint                                | Tests |
| --------- | ------ | --------------------------------------- | ----- |
| `listGet` | GET    | `/hosting/web/{...}/boostHistory`       | 1     | —   |
| `getGet`  | GET    | `/hosting/web/{...}/boostHistory/{...}` | 1     | —   |

### configuration

| Operation | Method | Endpoint                           | Tests |
| --------- | ------ | ---------------------------------- | ----- |
| `getGet`  | GET    | `/hosting/web/{...}/configuration` | 1     | —   |

### cronAvailableLanguage

| Operation | Method | Endpoint                                   | Tests |
| --------- | ------ | ------------------------------------------ | ----- |
| `listGet` | GET    | `/hosting/web/{...}/cronAvailableLanguage` | 1     | —   |

### extraSqlPerso

| Operation                | Method | Endpoint                                                    | Tests |
| ------------------------ | ------ | ----------------------------------------------------------- | ----- |
| `listGet`                | GET    | `/hosting/web/{...}/extraSqlPerso`                          | 1     | —   |
| `getGet`                 | GET    | `/hosting/web/{...}/extraSqlPerso/{...}`                    | 1     | —   |
| `databasesGet`           | GET    | `/hosting/web/{...}/extraSqlPerso/{...}/databases`          | 1     | —   |
| `serviceInfosGet`        | GET    | `/hosting/web/{...}/extraSqlPerso/{...}/serviceInfos`       | 1     | —   |
| `serviceInfosUpdatePost` | POST   | `/hosting/web/{...}/extraSqlPerso/{...}/serviceInfosUpdate` | 1     | —   |
| `terminatePost`          | POST   | `/hosting/web/{...}/extraSqlPerso/{...}/terminate`          | 1     | —   |

### freedom

| Operation | Method | Endpoint                     | Tests |
| --------- | ------ | ---------------------------- | ----- |
| `listGet` | GET    | `/hosting/web/{...}/freedom` | 1     | —   |

### indy

| Operation | Method | Endpoint                        | Tests |
| --------- | ------ | ------------------------------- | ----- |
| `listGet` | GET    | `/hosting/web/{...}/indy`       | 1     | —   |
| `getGet`  | GET    | `/hosting/web/{...}/indy/{...}` | 1     | —   |

### key

| Operation       | Method | Endpoint                     | Tests |
| --------------- | ------ | ---------------------------- | ----- |
| `sshListGet`    | GET    | `/hosting/web/{...}/key/ssh` | 1     | —   |
| `sshCreatePost` | POST   | `/hosting/web/{...}/key/ssh` | 1     | —   |

### localSeo

| Operation                        | Method | Endpoint                                                        | Tests |
| -------------------------------- | ------ | --------------------------------------------------------------- | ----- |
| `directoriesListGet`             | GET    | `/hosting/web/localSeo/directoriesList`                         | 1     | —   |
| `emailAvailabilityGlobalGet`     | GET    | `/hosting/web/localSeo/emailAvailability`                       | 1     | —   |
| `visibilityCheckPost`            | POST   | `/hosting/web/localSeo/visibilityCheck`                         | 1     | —   |
| `visibilityCheckResultGet`       | GET    | `/hosting/web/localSeo/visibilityCheckResult`                   | 1     | —   |
| `accountListGet`                 | GET    | `/hosting/web/{...}/localSeo/account`                           | 1     | —   |
| `accountGet`                     | GET    | `/hosting/web/{...}/localSeo/account/{...}`                     | 1     | —   |
| `accountLoginPost`               | POST   | `/hosting/web/{...}/localSeo/account/{...}/login`               | 1     | —   |
| `emailAvailabilityGet`           | GET    | `/hosting/web/{...}/localSeo/emailAvailability`                 | 1     | —   |
| `locationListGet`                | GET    | `/hosting/web/{...}/localSeo/location`                          | 1     | —   |
| `locationGet`                    | GET    | `/hosting/web/{...}/localSeo/location/{...}`                    | 1     | —   |
| `locationServiceInfosGet`        | GET    | `/hosting/web/{...}/localSeo/location/{...}/serviceInfos`       | 1     | —   |
| `locationServiceInfosUpdatePost` | POST   | `/hosting/web/{...}/localSeo/location/{...}/serviceInfosUpdate` | 1     | —   |
| `locationTerminatePost`          | POST   | `/hosting/web/{...}/localSeo/location/{...}/terminate`          | 1     | —   |

### ovhConfig

| Operation                 | Method | Endpoint                                                 | Tests |
| ------------------------- | ------ | -------------------------------------------------------- | ----- |
| `listGet`                 | GET    | `/hosting/web/{...}/ovhConfig`                           | 1     | —   |
| `getGet`                  | GET    | `/hosting/web/{...}/ovhConfig/{...}`                     | 1     | —   |
| `changeConfigurationPost` | POST   | `/hosting/web/{...}/ovhConfig/{...}/changeConfiguration` | 1     | —   |
| `rollbackPost`            | POST   | `/hosting/web/{...}/ovhConfig/{...}/rollback`            | 1     | —   |
| `capabilitiesGet`         | GET    | `/hosting/web/{...}/ovhConfigCapabilities`               | 1     | —   |
| `recommendedValuesGet`    | GET    | `/hosting/web/{...}/ovhConfigRecommendedValues`          | 1     | —   |
| `refreshPost`             | POST   | `/hosting/web/{...}/ovhConfigRefresh`                    | 1     | —   |

### restoreSnapshot

| Operation    | Method | Endpoint                             | Tests |
| ------------ | ------ | ------------------------------------ | ----- |
| `createPost` | POST   | `/hosting/web/{...}/restoreSnapshot` | 1     | —   |

### runtime

| Operation            | Method | Endpoint                                           | Tests |
| -------------------- | ------ | -------------------------------------------------- | ----- |
| `deleteDelete`       | DELETE | `/hosting/web/{...}/runtime/{...}`                 | 1     | —   |
| `attachedDomainsGet` | GET    | `/hosting/web/{...}/runtime/{...}/attachedDomains` | 1     | —   |
| `availableTypesGet`  | GET    | `/hosting/web/{...}/runtimeAvailableTypes`         | 1     | —   |

### sslService

| Operation        | Method | Endpoint                            | Tests |
| ---------------- | ------ | ----------------------------------- | ----- |
| `deleteDelete`   | DELETE | `/hosting/web/{...}/ssl`            | 1     | —   |
| `domainsGet`     | GET    | `/hosting/web/{...}/ssl/domains`    | 1     | —   |
| `regeneratePost` | POST   | `/hosting/web/{...}/ssl/regenerate` | 1     | —   |
| `reportGet`      | GET    | `/hosting/web/{...}/ssl/report`     | 1     | —   |

### user

| Operation            | Method | Endpoint                                       | Tests |
| -------------------- | ------ | ---------------------------------------------- | ----- |
| `createPost`         | POST   | `/hosting/web/{...}/user`                      | 1     | —   |
| `deleteDelete`       | DELETE | `/hosting/web/{...}/user/{...}`                | 1     | —   |
| `changePasswordPost` | POST   | `/hosting/web/{...}/user/{...}/changePassword` | 1     | —   |

### vcs

| Operation      | Method | Endpoint                          | Tests |
| -------------- | ------ | --------------------------------- | ----- |
| `supportedGet` | GET    | `/hosting/web/vcs/supported`      | 1     | —   |
| `webhooksGet`  | GET    | `/hosting/web/{...}/vcs/webhooks` | 1     | —   |

### website

Website deployments (path convention of the node: `/hosting/web/website/{serviceName}/{websiteName}/...`).

| Operation                 | Method | Endpoint                                                 | Tests |
| ------------------------- | ------ | -------------------------------------------------------- | ----- |
| `createPost`              | POST   | `/hosting/web/website/{...}`                             | 1     | —   |
| `listGet`                 | GET    | `/hosting/web/website/{...}`                             | 1     | —   |
| `getGet`                  | GET    | `/hosting/web/website/{...}/{...}`                       | 1     | —   |
| `updatePut`               | PUT    | `/hosting/web/website/{...}/{...}`                       | 1     | —   |
| `deleteDelete`            | DELETE | `/hosting/web/website/{...}/{...}`                       | 1     | —   |
| `deploymentCreatePost`    | POST   | `/hosting/web/website/{...}/{...}/deployment`            | 1     | —   |
| `deploymentGet`           | GET    | `/hosting/web/website/{...}/{...}/deployment`            | 1     | —   |
| `deploymentGetById`       | GET    | `/hosting/web/website/{...}/{...}/deployment/{...}`      | 1     | —   |
| `deploymentLogsGet`       | GET    | `/hosting/web/website/{...}/{...}/deployment/{...}/logs` | 1     | —   |
| `creationCapabilitiesGet` | GET    | `/hosting/web/website/{...}/creationCapabilities`        | 1     | —   |

### cdn

Shared CDN (path convention of the node: `/hosting/web/cdn/{serviceName}/...`).

| Operation                     | Method | Endpoint                                           | Tests |
| ----------------------------- | ------ | -------------------------------------------------- | ----- |
| `cdnGet`                      | GET    | `/hosting/web/cdn/{...}`                           | 1     | —   |
| `cdnAvailableOptionsGet`      | GET    | `/hosting/web/cdn/{...}/availableOptions`          | 1     | —   |
| `cdnDomainListGet`            | GET    | `/hosting/web/cdn/{...}/domain`                    | 1     | —   |
| `cdnDomainCreatePost`         | POST   | `/hosting/web/cdn/{...}/domain`                    | 1     | —   |
| `cdnDomainGetGet`             | GET    | `/hosting/web/cdn/{...}/domain/{...}`              | 1     | —   |
| `cdnDomainDeleteDelete`       | DELETE | `/hosting/web/cdn/{...}/domain/{...}`              | 1     | —   |
| `cdnDomainLogsGet`            | GET    | `/hosting/web/cdn/{...}/domain/{...}/logs`         | 1     | —   |
| `cdnDomainStatisticsGet`      | GET    | `/hosting/web/cdn/{...}/domain/{...}/statistics`   | 1     | —   |
| `cdnDomainRefreshPost`        | POST   | `/hosting/web/cdn/{...}/domain/{...}/refresh`      | 1     | —   |
| `cdnDomainPurgePost`          | POST   | `/hosting/web/cdn/{...}/domain/{...}/purge`        | 1     | —   |
| `cdnDomainOptionListGet`      | GET    | `/hosting/web/cdn/{...}/domain/option`             | 1     | —   |
| `cdnDomainOptionCreatePost`   | POST   | `/hosting/web/cdn/{...}/domain/{...}/option`       | 1     | —   |
| `cdnDomainOptionGetGet`       | GET    | `/hosting/web/cdn/{...}/domain/{...}/option/{...}` | 1     | —   |
| `cdnDomainOptionUpdatePut`    | PUT    | `/hosting/web/cdn/{...}/domain/{...}/option/{...}` | 1     | —   |
| `cdnDomainOptionDeleteDelete` | DELETE | `/hosting/web/cdn/{...}/domain/{...}/option/{...}` | 1     | —   |
| `cdnOperationListGet`         | GET    | `/hosting/web/cdn/{...}/operation`                 | 1     | —   |
| `cdnOperationGetGet`          | GET    | `/hosting/web/cdn/{...}/operation/{...}`           | 1     | —   |
| `cdnServiceInfosGet`          | GET    | `/hosting/web/cdn/{...}/serviceInfos`              | 1     | —   |
| `cdnServiceInfosUpdatePut`    | PUT    | `/hosting/web/cdn/{...}/serviceInfos`              | 1     | —   |
| `cdnTerminateCreate`          | POST   | `/hosting/web/cdn/{...}/terminate`                 | 1     | —   |

### databaseSub

Database sub-resources (path convention of the node: `/hosting/web/database/{serviceName}/{databaseName}/...`).

| Operation           | Method | Endpoint                                               | Tests |
| ------------------- | ------ | ------------------------------------------------------ | ----- |
| `capabilitiesGet`   | GET    | `/hosting/web/database/{...}/{...}/capabilities`       | 1     | —   |
| `changePasswordPut` | PUT    | `/hosting/web/database/{...}/{...}/changePassword`     | 1     | —   |
| `copyPost`          | POST   | `/hosting/web/database/{...}/{...}/copy`               | 1     | —   |
| `copyListGet`       | GET    | `/hosting/web/database/{...}/{...}/copy`               | 1     | —   |
| `copyGetGet`        | GET    | `/hosting/web/database/{...}/{...}/copy/{...}`         | 1     | —   |
| `copyDeleteDelete`  | DELETE | `/hosting/web/database/{...}/{...}/copy/{...}`         | 1     | —   |
| `copyRestorePost`   | POST   | `/hosting/web/database/{...}/{...}/copyRestore`        | 1     | —   |
| `dumpGet`           | GET    | `/hosting/web/database/{...}/{...}/dump`               | 1     | —   |
| `dumpCreatePost`    | POST   | `/hosting/web/database/{...}/{...}/dump`               | 1     | —   |
| `dumpGetGet`        | GET    | `/hosting/web/database/{...}/{...}/dump/{...}`         | 1     | —   |
| `dumpDeleteDelete`  | DELETE | `/hosting/web/database/{...}/{...}/dump/{...}`         | 1     | —   |
| `dumpRestorePost`   | POST   | `/hosting/web/database/{...}/{...}/dump/{...}/restore` | 1     | —   |
| `importPost`        | POST   | `/hosting/web/database/{...}/{...}/import`             | 1     | —   |
| `metricsTokenGet`   | GET    | `/hosting/web/database/{...}/{...}/metricsToken`       | 1     | —   |
| `requestListGet`    | GET    | `/hosting/web/database/{...}/{...}/request`            | 1     | —   |
| `restoreGet`        | GET    | `/hosting/web/database/{...}/{...}/restore`            | 1     | —   |
| `restoreCreatePost` | POST   | `/hosting/web/database/{...}/{...}/restore`            | 1     | —   |
| `statisticsGet`     | GET    | `/hosting/web/database/{...}/{...}/statistics`         | 1     | —   |

### databaseAvailable

| Operation                 | Method | Endpoint                                          | Tests |
| ------------------------- | ------ | ------------------------------------------------- | ----- |
| `typeListGet`             | GET    | `/hosting/web/{...}/databaseAvailableType`        | 1     | —   |
| `versionListGet`          | GET    | `/hosting/web/{...}/databaseAvailableVersion`     | 1     | —   |
| `creationCapabilitiesGet` | GET    | `/hosting/web/{...}/databaseCreationCapabilities` | 1     | —   |

### dump

| Operation      | Method | Endpoint                        | Tests |
| -------------- | ------ | ------------------------------- | ----- |
| `listGet`      | GET    | `/hosting/web/{...}/dump`       | 1     | —   |
| `getGet`       | GET    | `/hosting/web/{...}/dump/{...}` | 1     | —   |
| `deleteDelete` | DELETE | `/hosting/web/{...}/dump/{...}` | 1     | —   |

### email

| Operation      | Method | Endpoint                           | Tests |
| -------------- | ------ | ---------------------------------- | ----- |
| `listGet`      | GET    | `/hosting/web/{...}/email`         | 1     | —   |
| `createPost`   | POST   | `/hosting/web/{...}/email`         | 1     | —   |
| `deleteDelete` | DELETE | `/hosting/web/{...}/email/{...}`   | 1     | —   |
| `updatePut`    | PUT    | `/hosting/web/{...}/email`         | 1     | —   |
| `bouncesGet`   | GET    | `/hosting/web/{...}/email/bounces` | 1     | —   |
| `requestPost`  | POST   | `/hosting/web/{...}/email/request` | 1     | —   |
| `volumesGet`   | GET    | `/hosting/web/{...}/email/volumes` | 1     | —   |

### emailOption

| Operation         | Method | Endpoint                                            | Tests |
| ----------------- | ------ | --------------------------------------------------- | ----- |
| `listGet`         | GET    | `/hosting/web/{...}/emailOption`                    | 1     | —   |
| `getGet`          | GET    | `/hosting/web/{...}/emailOption/{...}`              | 1     | —   |
| `serviceInfosGet` | GET    | `/hosting/web/{...}/emailOption/{...}/serviceInfos` | 1     | —   |
| `terminatePost`   | POST   | `/hosting/web/{...}/emailOption/{...}/terminate`    | 1     | —   |

### userLogs

| Operation            | Method | Endpoint                                           | Tests |
| -------------------- | ------ | -------------------------------------------------- | ----- |
| `listGet`            | GET    | `/hosting/web/{...}/userLogs`                      | 1     | —   |
| `createPost`         | POST   | `/hosting/web/{...}/userLogs`                      | 1     | —   |
| `getGet`             | GET    | `/hosting/web/{...}/userLogs/{...}`                | 1     | —   |
| `updatePut`          | PUT    | `/hosting/web/{...}/userLogs/{...}`                | 1     | —   |
| `deleteDelete`       | DELETE | `/hosting/web/{...}/userLogs/{...}`                | 1     | —   |
| `changePasswordPost` | POST   | `/hosting/web/{...}/userLogs/{...}/changePassword` | 1     | —   |

### ownLogs

| Operation                    | Method | Endpoint                                                         | Tests |
| ---------------------------- | ------ | ---------------------------------------------------------------- | ----- |
| `listGet`                    | GET    | `/hosting/web/{...}/ownLogs`                                     | 1     | —   |
| `getGet`                     | GET    | `/hosting/web/{...}/ownLogs/{...}`                               | 1     | —   |
| `userLogsListGet`            | GET    | `/hosting/web/{...}/ownLogs/{...}/userLogs`                      | 1     | —   |
| `userLogsCreatePost`         | POST   | `/hosting/web/{...}/ownLogs/{...}/userLogs`                      | 1     | —   |
| `userLogsGetGet`             | GET    | `/hosting/web/{...}/ownLogs/{...}/userLogs/{...}`                | 1     | —   |
| `userLogsUpdatePut`          | PUT    | `/hosting/web/{...}/ownLogs/{...}/userLogs/{...}`                | 1     | —   |
| `userLogsDeleteDelete`       | DELETE | `/hosting/web/{...}/ownLogs/{...}/userLogs/{...}`                | 1     | —   |
| `userLogsChangePasswordPost` | POST   | `/hosting/web/{...}/ownLogs/{...}/userLogs/{...}/changePassword` | 1     | —   |

### log

| Operation                  | Method | Endpoint                                    | Tests |
| -------------------------- | ------ | ------------------------------------------- | ----- |
| `kindListGet`              | GET    | `/hosting/web/{...}/log/kind`               | 1     | —   |
| `kindGetGet`               | GET    | `/hosting/web/{...}/log/kind/{...}`         | 1     | —   |
| `subscriptionListGet`      | GET    | `/hosting/web/{...}/log/subscription`       | 1     | —   |
| `subscriptionCreatePost`   | POST   | `/hosting/web/{...}/log/subscription`       | 1     | —   |
| `subscriptionGetGet`       | GET    | `/hosting/web/{...}/log/subscription/{...}` | 1     | —   |
| `subscriptionDeleteDelete` | DELETE | `/hosting/web/{...}/log/subscription/{...}` | 1     | —   |
| `urlCreatePost`            | POST   | `/hosting/web/{...}/log/url`                | 1     | —   |

### token

| Operation | Method | Endpoint                   | Tests |
| --------- | ------ | -------------------------- | ----- |
| `getGet`  | GET    | `/hosting/web/{...}/token` | 1     | —   |

### cron

| Operation          | Method | Endpoint                        | Tests |
| ------------------ | ------ | ------------------------------- | ----- |
| `cronCreatePost`   | POST   | `/hosting/web/{...}/cron`       | 1     | —   |
| `cronDeleteDelete` | DELETE | `/hosting/web/{...}/cron/{...}` | 1     | —   |
| `cronUpdatePut`    | PUT    | `/hosting/web/{...}/cron/{...}` | 1     | —   |

### database

| Operation           | Method | Endpoint                            | Tests |
| ------------------- | ------ | ----------------------------------- | ----- |
| `databaseUpdatePut` | PUT    | `/hosting/web/{...}/database/{...}` | 1     | —   |

### statistics

| Operation       | Method | Endpoint                        | Tests |
| --------------- | ------ | ------------------------------- | ----- |
| `statisticsGet` | GET    | `/hosting/web/{...}/statistics` | 1     | —   |

### module

| Operation      | Method | Endpoint                          | Tests |
| -------------- | ------ | --------------------------------- | ----- |
| `createPost`   | POST   | `/hosting/web/{...}/module`       | 1     | —   |
| `deleteDelete` | DELETE | `/hosting/web/{...}/module/{...}` | 1     | —   |

### moduleList

Global module catalog (not to be confused with the service-scoped `module` family).

| Operation | Method | Endpoint                        | Tests |
| --------- | ------ | ------------------------------- | ----- |
| `listGet` | GET    | `/hosting/web/moduleList`       | 1     | —   |
| `getById` | GET    | `/hosting/web/moduleList/{...}` | 1     | —   |

### privateDatabase

| Operation                 | Method | Endpoint                                                 | Tests |
| ------------------------- | ------ | -------------------------------------------------------- | ----- |
| `creationCapabilitiesGet` | GET    | `/hosting/web/{...}/privateDatabaseCreationCapabilities` | 1     | —   |
| `listGet`                 | GET    | `/hosting/web/{...}/privateDatabases`                    | 1     | —   |

### Root Operations

Root operations cover hosting CRUD, attached domains, CDN, environment variables, modules, runtimes, SSL service, private databases, users, websites and service management. See the corresponding `.operation.ts` files in the node root and its subfolders for the exact endpoints.

**Total:** 233 operations, 142 test suites

> **Optional filters**: The **List Tasks** operation (`listTasks`) supports optional Filters (search, status). See [docs/_shared/filtering.md](../../docs/_shared/filtering.md) for details.
