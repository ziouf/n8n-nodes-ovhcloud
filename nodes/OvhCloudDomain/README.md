# OVH Cloud Domain

> Manage domains — contacts, DNS zones, records, DNSSEC, tasks and domain options

## Overview

This node provides **119 operations** covering the `/domain` API (v1 + v2), grouped by resource family (root, service, zone, alldom and name). Each operation has a dedicated unit test.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). Requests are signed with SHA1 and dispatched through `ApiClient`.

> **Optional filters**: The **List tasks related to a managed domain name** operation (`domainNameTaskListGet`) supports optional Filters (search, status, type). See [docs/_shared/filtering.md](../../docs/_shared/filtering.md) for details.

## Available Operations

### Root ( /domain )

| Operation                                                                                                                  | Method | Endpoint                                           |
| -------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------- |
| [domainListGet](./resources/root/domainListGet.operation.ts)                                                               | GET    | `/domain`                                          |
| [domainConfigurationRuleListGet](./resources/root/domainConfigurationRuleListGet.operation.ts)                             | GET    | `/domain/configurationRule`                        |
| [domainConfigurationRuleCheckPost](./resources/root/domainConfigurationRuleCheckPost.operation.ts)                         | POST   | `/domain/configurationRule/check`                  |
| [domainContactListGet](./resources/root/domainContactListGet.operation.ts)                                                 | GET    | `/domain/contact`                                  |
| [domainContactCreatePost](./resources/root/domainContactCreatePost.operation.ts)                                           | POST   | `/domain/contact`                                  |
| [domainContactGetGet](./resources/root/domainContactGetGet.operation.ts)                                                   | GET    | `/domain/contact/{contactId}`                      |
| [domainContactUpdatePut](./resources/root/domainContactUpdatePut.operation.ts)                                             | PUT    | `/domain/contact/{contactId}`                      |
| [domainDataClaimNoticeGetGet](./resources/root/domainDataClaimNoticeGetGet.operation.ts)                                   | GET    | `/domain/data/claimNotice`                         |
| [domainDataExtensionListGet](./resources/root/domainDataExtensionListGet.operation.ts)                                     | GET    | `/domain/data/extension`                           |
| [domainDataSmdListGet](./resources/root/domainDataSmdListGet.operation.ts)                                                 | GET    | `/domain/data/smd`                                 |
| [domainDataSmdCreatePost](./resources/root/domainDataSmdCreatePost.operation.ts)                                           | POST   | `/domain/data/smd`                                 |
| [domainDataSmdDeleteDelete](./resources/root/domainDataSmdDeleteDelete.operation.ts)                                       | DELETE | `/domain/data/smd/{smdId}`                         |
| [domainDataSmdGetGet](./resources/root/domainDataSmdGetGet.operation.ts)                                                   | GET    | `/domain/data/smd/{smdId}`                         |
| [domainDataSmdUpdatePut](./resources/root/domainDataSmdUpdatePut.operation.ts)                                             | PUT    | `/domain/data/smd/{smdId}`                         |
| [domainExtensionsListGet](./resources/root/domainExtensionsListGet.operation.ts)                                           | GET    | `/domain/extensions`                               |
| [domainExtensionsByCategoryListGet](./resources/root/domainExtensionsByCategoryListGet.operation.ts)                       | GET    | `/domain/extensions/byCategory`                    |
| [domainExtensionsHighlightedListGet](./resources/root/domainExtensionsHighlightedListGet.operation.ts)                     | GET    | `/domain/extensions/highlighted`                   |
| [domainExtensionsPricingAttributesListGet](./resources/root/domainExtensionsPricingAttributesListGet.operation.ts)         | GET    | `/domain/extensions/pricingAttributes`             |
| [domainExtensionsGetGet](./resources/root/domainExtensionsGetGet.operation.ts)                                             | GET    | `/domain/extensions/{name}`                        |
| [domainExtensionsRegistryConfigurationsGetGet](./resources/root/domainExtensionsRegistryConfigurationsGetGet.operation.ts) | GET    | `/domain/extensions/{name}/registryConfigurations` |

### Zone ( /domain/zone/{zoneName} )

| Operation                                                                                                        | Method | Endpoint                                                       |
| ---------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------- |
| [domainZoneListGet](./resources/zone/domainZoneListGet.operation.ts)                                             | GET    | `/domain/zone`                                                 |
| [domainZoneGetGet](./resources/zone/domainZoneGetGet.operation.ts)                                               | GET    | `/domain/zone/{zoneName}`                                      |
| [domainZoneCapabilitiesGetGet](./resources/zone/domainZoneCapabilitiesGetGet.operation.ts)                       | GET    | `/domain/zone/{zoneName}/capabilities`                         |
| [domainZoneChangeContactPost](./resources/zone/domainZoneChangeContactPost.operation.ts)                         | POST   | `/domain/zone/{zoneName}/changeContact`                        |
| [domainZoneConfirmTerminationPost](./resources/zone/domainZoneConfirmTerminationPost.operation.ts)               | POST   | `/domain/zone/{zoneName}/confirmTermination`                   |
| [domainZoneDnssecDeleteDelete](./resources/zone/domainZoneDnssecDeleteDelete.operation.ts)                       | DELETE | `/domain/zone/{zoneName}/dnssec`                               |
| [domainZoneDnssecGetGet](./resources/zone/domainZoneDnssecGetGet.operation.ts)                                   | GET    | `/domain/zone/{zoneName}/dnssec`                               |
| [domainZoneDnssecEnablePost](./resources/zone/domainZoneDnssecEnablePost.operation.ts)                           | POST   | `/domain/zone/{zoneName}/dnssec`                               |
| [domainZoneDynHostLoginListGet](./resources/zone/domainZoneDynHostLoginListGet.operation.ts)                     | GET    | `/domain/zone/{zoneName}/dynHost/login`                        |
| [domainZoneDynHostLoginCreatePost](./resources/zone/domainZoneDynHostLoginCreatePost.operation.ts)               | POST   | `/domain/zone/{zoneName}/dynHost/login`                        |
| [domainZoneDynHostLoginDeleteDelete](./resources/zone/domainZoneDynHostLoginDeleteDelete.operation.ts)           | DELETE | `/domain/zone/{zoneName}/dynHost/login/{login}`                |
| [domainZoneDynHostLoginGetGet](./resources/zone/domainZoneDynHostLoginGetGet.operation.ts)                       | GET    | `/domain/zone/{zoneName}/dynHost/login/{login}`                |
| [domainZoneDynHostLoginUpdatePut](./resources/zone/domainZoneDynHostLoginUpdatePut.operation.ts)                 | PUT    | `/domain/zone/{zoneName}/dynHost/login/{login}`                |
| [domainZoneDynHostLoginChangeContactPost](./resources/zone/domainZoneDynHostLoginChangeContactPost.operation.ts) | POST   | `/domain/zone/{zoneName}/dynHost/login/{login}/changePassword` |
| [domainZoneDynHostRecordListGet](./resources/zone/domainZoneDynHostRecordListGet.operation.ts)                   | GET    | `/domain/zone/{zoneName}/dynHost/record`                       |
| [domainZoneDynHostRecordCreatePost](./resources/zone/domainZoneDynHostRecordCreatePost.operation.ts)             | POST   | `/domain/zone/{zoneName}/dynHost/record`                       |
| [domainZoneDynHostRecordDeleteDelete](./resources/zone/domainZoneDynHostRecordDeleteDelete.operation.ts)         | DELETE | `/domain/zone/{zoneName}/dynHost/record/{id}`                  |
| [domainZoneDynHostRecordGetGet](./resources/zone/domainZoneDynHostRecordGetGet.operation.ts)                     | GET    | `/domain/zone/{zoneName}/dynHost/record/{id}`                  |
| [domainZoneDynHostRecordUpdatePut](./resources/zone/domainZoneDynHostRecordUpdatePut.operation.ts)               | PUT    | `/domain/zone/{zoneName}/dynHost/record/{id}`                  |
| [domainZoneExportGetGet](./resources/zone/domainZoneExportGetGet.operation.ts)                                   | GET    | `/domain/zone/{zoneName}/export`                               |
| [domainZoneHistoryListGet](./resources/zone/domainZoneHistoryListGet.operation.ts)                               | GET    | `/domain/zone/{zoneName}/history`                              |
| [domainZoneHistoryGetGet](./resources/zone/domainZoneHistoryGetGet.operation.ts)                                 | GET    | `/domain/zone/{zoneName}/history/{creationDate}`               |
| [domainZoneHistoryRestorePost](./resources/zone/domainZoneHistoryRestorePost.operation.ts)                       | POST   | `/domain/zone/{zoneName}/history/{creationDate}/restore`       |
| [domainZoneImportPost](./resources/zone/domainZoneImportPost.operation.ts)                                       | POST   | `/domain/zone/{zoneName}/import`                               |
| [domainZoneOptionListGet](./resources/zone/domainZoneOptionListGet.operation.ts)                                 | GET    | `/domain/zone/{zoneName}/option`                               |
| [domainZoneOptionGetGet](./resources/zone/domainZoneOptionGetGet.operation.ts)                                   | GET    | `/domain/zone/{zoneName}/option/{name}`                        |
| [domainZoneOptionServiceInfosGetGet](./resources/zone/domainZoneOptionServiceInfosGetGet.operation.ts)           | GET    | `/domain/zone/{zoneName}/option/{name}/serviceInfos`           |
| [domainZoneOptionServiceInfosUpdatePut](./resources/zone/domainZoneOptionServiceInfosUpdatePut.operation.ts)     | PUT    | `/domain/zone/{zoneName}/option/{name}/serviceInfos`           |
| [domainZoneRecordListGet](./resources/zone/domainZoneRecordListGet.operation.ts)                                 | GET    | `/domain/zone/{zoneName}/record`                               |
| [domainZoneRecordCreatePost](./resources/zone/domainZoneRecordCreatePost.operation.ts)                           | POST   | `/domain/zone/{zoneName}/record`                               |
| [domainZoneRecordDeleteDelete](./resources/zone/domainZoneRecordDeleteDelete.operation.ts)                       | DELETE | `/domain/zone/{zoneName}/record/{id}`                          |
| [domainZoneRecordGetGet](./resources/zone/domainZoneRecordGetGet.operation.ts)                                   | GET    | `/domain/zone/{zoneName}/record/{id}`                          |
| [domainZoneRecordUpdatePut](./resources/zone/domainZoneRecordUpdatePut.operation.ts)                             | PUT    | `/domain/zone/{zoneName}/record/{id}`                          |
| [domainZoneRedirectionListGet](./resources/zone/domainZoneRedirectionListGet.operation.ts)                       | GET    | `/domain/zone/{zoneName}/redirection`                          |
| [domainZoneRedirectionCreatePost](./resources/zone/domainZoneRedirectionCreatePost.operation.ts)                 | POST   | `/domain/zone/{zoneName}/redirection`                          |
| [domainZoneRedirectionDeleteDelete](./resources/zone/domainZoneRedirectionDeleteDelete.operation.ts)             | DELETE | `/domain/zone/{zoneName}/redirection/{id}`                     |
| [domainZoneRedirectionGetGet](./resources/zone/domainZoneRedirectionGetGet.operation.ts)                         | GET    | `/domain/zone/{zoneName}/redirection/{id}`                     |
| [domainZoneRedirectionUpdatePut](./resources/zone/domainZoneRedirectionUpdatePut.operation.ts)                   | PUT    | `/domain/zone/{zoneName}/redirection/{id}`                     |
| [domainZoneRefreshPost](./resources/zone/domainZoneRefreshPost.operation.ts)                                     | POST   | `/domain/zone/{zoneName}/refresh`                              |
| [domainZoneResetPost](./resources/zone/domainZoneResetPost.operation.ts)                                         | POST   | `/domain/zone/{zoneName}/reset`                                |
| [domainZoneServiceInfosGetGet](./resources/zone/domainZoneServiceInfosGetGet.operation.ts)                       | GET    | `/domain/zone/{zoneName}/serviceInfos`                         |
| [domainZoneServiceInfosUpdatePut](./resources/zone/domainZoneServiceInfosUpdatePut.operation.ts)                 | PUT    | `/domain/zone/{zoneName}/serviceInfos`                         |
| [domainZoneSoaGetGet](./resources/zone/domainZoneSoaGetGet.operation.ts)                                         | GET    | `/domain/zone/{zoneName}/soa`                                  |
| [domainZoneSoaUpdatePut](./resources/zone/domainZoneSoaUpdatePut.operation.ts)                                   | PUT    | `/domain/zone/{zoneName}/soa`                                  |
| [domainZoneStatusGetGet](./resources/zone/domainZoneStatusGetGet.operation.ts)                                   | GET    | `/domain/zone/{zoneName}/status`                               |
| [domainZoneTaskListGet](./resources/zone/domainZoneTaskListGet.operation.ts)                                     | GET    | `/domain/zone/{zoneName}/task`                                 |
| [domainZoneTaskGetGet](./resources/zone/domainZoneTaskGetGet.operation.ts)                                       | GET    | `/domain/zone/{zoneName}/task/{id}`                            |
| [domainZoneTaskAcceleratePost](./resources/zone/domainZoneTaskAcceleratePost.operation.ts)                       | POST   | `/domain/zone/{zoneName}/task/{id}/accelerate`                 |
| [domainZoneTaskCancelPost](./resources/zone/domainZoneTaskCancelPost.operation.ts)                               | POST   | `/domain/zone/{zoneName}/task/{id}/cancel`                     |
| [domainZoneTaskRelaunchPost](./resources/zone/domainZoneTaskRelaunchPost.operation.ts)                           | POST   | `/domain/zone/{zoneName}/task/{id}/relaunch`                   |
| [domainZoneTerminatePost](./resources/zone/domainZoneTerminatePost.operation.ts)                                 | POST   | `/domain/zone/{zoneName}/terminate`                            |

### Service ( /domain/{serviceName} )

| Operation                                                                                                 | Method | Endpoint                                         |
| --------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------ |
| [domainGetGet](./resources/service/domainGetGet.operation.ts)                                             | GET    | `/domain/{serviceName}`                          |
| [domainUpdatePut](./resources/service/domainUpdatePut.operation.ts)                                       | PUT    | `/domain/{serviceName}`                          |
| [domainAuthInfoGetGet](./resources/service/domainAuthInfoGetGet.operation.ts)                             | GET    | `/domain/{serviceName}/authInfo`                 |
| [domainChangeContactPost](./resources/service/domainChangeContactPost.operation.ts)                       | POST   | `/domain/{serviceName}/changeContact`            |
| [domainOptionListGet](./resources/service/domainOptionListGet.operation.ts)                               | GET    | `/domain/{serviceName}/option`                   |
| [domainOptionDeleteDelete](./resources/service/domainOptionDeleteDelete.operation.ts)                     | DELETE | `/domain/{serviceName}/option/{option}`          |
| [domainOptionGetGet](./resources/service/domainOptionGetGet.operation.ts)                                 | GET    | `/domain/{serviceName}/option/{option}`          |
| [domainOptionsGetGet](./resources/service/domainOptionsGetGet.operation.ts)                               | GET    | `/domain/{serviceName}/options`                  |
| [domainOutgoingTransferApprovePost](./resources/service/domainOutgoingTransferApprovePost.operation.ts)   | POST   | `/domain/{serviceName}/outgoingTransfer/approve` |
| [domainRulesEmailsObfuscationGetGet](./resources/service/domainRulesEmailsObfuscationGetGet.operation.ts) | GET    | `/domain/{serviceName}/rules/emailsObfuscation`  |
| [domainRulesOptinGetGet](./resources/service/domainRulesOptinGetGet.operation.ts)                         | GET    | `/domain/{serviceName}/rules/optin`              |
| [domainServiceInfosGetGet](./resources/service/domainServiceInfosGetGet.operation.ts)                     | GET    | `/domain/{serviceName}/serviceInfos`             |
| [domainServiceInfosUpdatePut](./resources/service/domainServiceInfosUpdatePut.operation.ts)               | PUT    | `/domain/{serviceName}/serviceInfos`             |
| [domainUkOutgoingTransferPost](./resources/service/domainUkOutgoingTransferPost.operation.ts)             | POST   | `/domain/{serviceName}/ukOutgoingTransfer`       |
| [domainUkRegistrarsListGet](./resources/service/domainUkRegistrarsListGet.operation.ts)                   | GET    | `/domain/{serviceName}/ukRegistrars`             |

### service/configurations

| Operation                                                                                                                                          | Method | Endpoint                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------- |
| [domainConfigurationsObfuscatedEmailsGetGet](./resources/service/configurations/domainConfigurationsObfuscatedEmailsGetGet.operation.ts)           | GET    | `/domain/{serviceName}/configurations/obfuscatedEmails`         |
| [domainConfigurationsObfuscatedEmailsUpdatePut](./resources/service/configurations/domainConfigurationsObfuscatedEmailsUpdatePut.operation.ts)     | PUT    | `/domain/{serviceName}/configurations/obfuscatedEmails`         |
| [domainConfigurationsObfuscatedEmailsRefreshPost](./resources/service/configurations/domainConfigurationsObfuscatedEmailsRefreshPost.operation.ts) | POST   | `/domain/{serviceName}/configurations/obfuscatedEmails/refresh` |
| [domainConfigurationsOptinGetGet](./resources/service/configurations/domainConfigurationsOptinGetGet.operation.ts)                                 | GET    | `/domain/{serviceName}/configurations/optin`                    |
| [domainConfigurationsOptinUpdatePut](./resources/service/configurations/domainConfigurationsOptinUpdatePut.operation.ts)                           | PUT    | `/domain/{serviceName}/configurations/optin`                    |

### service/dsRecord

| Operation                                                                                      | Method | Endpoint                              |
| ---------------------------------------------------------------------------------------------- | ------ | ------------------------------------- |
| [domainDsRecordListGet](./resources/service/dsRecord/domainDsRecordListGet.operation.ts)       | GET    | `/domain/{serviceName}/dsRecord`      |
| [domainDsRecordCreatePost](./resources/service/dsRecord/domainDsRecordCreatePost.operation.ts) | POST   | `/domain/{serviceName}/dsRecord`      |
| [domainDsRecordGetGet](./resources/service/dsRecord/domainDsRecordGetGet.operation.ts)         | GET    | `/domain/{serviceName}/dsRecord/{id}` |

### service/glueRecord

| Operation                                                                                                | Method | Endpoint                                         |
| -------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------ |
| [domainGlueRecordListGet](./resources/service/glueRecord/domainGlueRecordListGet.operation.ts)           | GET    | `/domain/{serviceName}/glueRecord`               |
| [domainGlueRecordCreatePost](./resources/service/glueRecord/domainGlueRecordCreatePost.operation.ts)     | POST   | `/domain/{serviceName}/glueRecord`               |
| [domainGlueRecordDeleteDelete](./resources/service/glueRecord/domainGlueRecordDeleteDelete.operation.ts) | DELETE | `/domain/{serviceName}/glueRecord/{host}`        |
| [domainGlueRecordGetGet](./resources/service/glueRecord/domainGlueRecordGetGet.operation.ts)             | GET    | `/domain/{serviceName}/glueRecord/{host}`        |
| [domainGlueRecordUpdatePost](./resources/service/glueRecord/domainGlueRecordUpdatePost.operation.ts)     | POST   | `/domain/{serviceName}/glueRecord/{host}/update` |

### service/nameServer

| Operation                                                                                                | Method | Endpoint                                       |
| -------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------- |
| [domainNameServerListGet](./resources/service/nameServer/domainNameServerListGet.operation.ts)           | GET    | `/domain/{serviceName}/nameServer`             |
| [domainNameServerCreatePost](./resources/service/nameServer/domainNameServerCreatePost.operation.ts)     | POST   | `/domain/{serviceName}/nameServer`             |
| [domainNameServerDeleteDelete](./resources/service/nameServer/domainNameServerDeleteDelete.operation.ts) | DELETE | `/domain/{serviceName}/nameServer/{id}`        |
| [domainNameServerGetGet](./resources/service/nameServer/domainNameServerGetGet.operation.ts)             | GET    | `/domain/{serviceName}/nameServer/{id}`        |
| [domainNameServerStatusGetGet](./resources/service/nameServer/domainNameServerStatusGetGet.operation.ts) | GET    | `/domain/{serviceName}/nameServer/{id}/status` |
| [domainNameServersUpdatePost](./resources/service/nameServer/domainNameServersUpdatePost.operation.ts)   | POST   | `/domain/{serviceName}/nameServers/update`     |

### service/task

| Operation                                                                                  | Method | Endpoint                                     |
| ------------------------------------------------------------------------------------------ | ------ | -------------------------------------------- |
| [domainTaskListGet](./resources/service/task/domainTaskListGet.operation.ts)               | GET    | `/domain/{serviceName}/task`                 |
| [domainTaskGetGet](./resources/service/task/domainTaskGetGet.operation.ts)                 | GET    | `/domain/{serviceName}/task/{id}`            |
| [domainTaskAcceleratePost](./resources/service/task/domainTaskAcceleratePost.operation.ts) | POST   | `/domain/{serviceName}/task/{id}/accelerate` |
| [domainTaskCancelPost](./resources/service/task/domainTaskCancelPost.operation.ts)         | POST   | `/domain/{serviceName}/task/{id}/cancel`     |
| [domainTaskRelaunchPost](./resources/service/task/domainTaskRelaunchPost.operation.ts)     | POST   | `/domain/{serviceName}/task/{id}/relaunch`   |

### alldom (v2, /domain/alldom)

| Operation                                                                          | Method | Endpoint                                    |
| ---------------------------------------------------------------------------------- | ------ | ------------------------------------------- |
| [domainAlldomListGet](./resources/alldom/domainAlldomListGet.operation.ts)         | GET    | `/domain/alldom`                            |
| [domainAlldomGetGet](./resources/alldom/domainAlldomGetGet.operation.ts)           | GET    | `/domain/alldom/{alldomName}`               |
| [domainAlldomTaskListGet](./resources/alldom/domainAlldomTaskListGet.operation.ts) | GET    | `/domain/alldom/{alldomName}/task`          |
| [domainAlldomTaskGetGet](./resources/alldom/domainAlldomTaskGetGet.operation.ts)   | GET    | `/domain/alldom/{alldomName}/task/{taskId}` |

### name (v2, /domain/name)

| Operation                                                                    | Method | Endpoint                                  |
| ---------------------------------------------------------------------------- | ------ | ----------------------------------------- |
| [domainNameListGet](./resources/name/domainNameListGet.operation.ts)         | GET    | `/domain/name`                            |
| [domainNameGetGet](./resources/name/domainNameGetGet.operation.ts)           | GET    | `/domain/name/{domainName}`               |
| [domainNameUpdatePut](./resources/name/domainNameUpdatePut.operation.ts)     | PUT    | `/domain/name/{domainName}`               |
| [domainNameTaskListGet](./resources/name/domainNameTaskListGet.operation.ts) | GET    | `/domain/name/{domainName}/task`          |
| [domainNameTaskGetGet](./resources/name/domainNameTaskGetGet.operation.ts)   | GET    | `/domain/name/{domainName}/task/{taskId}` |

**Total:** 119 operations
