# OVHcloud API Conformity Report

> Généré par `scripts/audit-conformity.js` le 2026-08-06T00:19:23.202Z. Document généré automatiquement — ne pas éditer à la main.

Ce rapport vérifie que les opérations des nodes respectent leur spec (méthode, chemin, paramètres path requis, query requis, champs body requis).

## Résumé

- **Opérations auditées** : 5871
- **Conformes** : 3547
- **Non conformes** : 2324
- **Sans correspondance spec** (informatif) : 2028
- **Taux de conformité** : **60.4%**

## Conformité par spec

Triée par taux de non-conformité décroissant.

| Spec (version) | Auditées | Conformes | Non conformes | % |
|----------------|---------:|----------:|--------------:|---:|
| secret (v1) | 1 | 0 | 1 | 0% |
| connectivity (v1) | 28 | 10 | 18 | 35.7% |
| startup (v1) | 2 | 1 | 1 | 50% |
| networkDefense (v2) | 2 | 1 | 1 | 50% |
| iam (v2) | 31 | 20 | 11 | 64.5% |
| zimbra (v2) | 30 | 20 | 10 | 66.7% |
| nutanix (v1) | 17 | 12 | 5 | 70.6% |
| dbaas (v1) | 116 | 85 | 31 | 73.3% |
| okms (v2) | 32 | 24 | 8 | 75% |
| support (v1) | 9 | 7 | 2 | 77.8% |
| overTheBox (v1) | 50 | 39 | 11 | 78% |
| dedicatedCloud (v1) | 305 | 238 | 67 | 78% |
| ovhCloudConnect (v1) | 42 | 33 | 9 | 78.6% |
| storage (v1) | 47 | 37 | 10 | 78.7% |
| cdn (v1) | 44 | 35 | 9 | 79.5% |
| xdsl (v1) | 39 | 32 | 7 | 82.1% |
| managedCMS (v2) | 17 | 14 | 3 | 82.4% |
| notification (v2) | 19 | 16 | 3 | 84.2% |
| vmwareCloudDirector (v2) | 32 | 27 | 5 | 84.4% |
| ip (v1) | 92 | 68 | 13 | 73.9% |
| backupServices (v2) | 15 | 13 | 2 | 86.7% |
| newAccount (v1) | 8 | 7 | 1 | 87.5% |
| vrackServices (v2) | 8 | 7 | 1 | 87.5% |
| service (v1) | 9 | 8 | 1 | 88.9% |
| vrack (v1) | 12 | 4 | 1 | 33.3% |
| veeamCloudConnect (v1) | 14 | 13 | 1 | 92.9% |
| vps (v1) | 63 | 20 | 4 | 31.7% |
| order (v1) | 166 | 31 | 6 | 18.7% |
| me (v1) | 309 | 300 | 9 | 97.1% |
| dedicated (v1) | 69 | 31 | 2 | 44.9% |
| cloud (v1) | 928 | 496 | 24 | 53.4% |
| horizonView (v1) | 42 | 41 | 1 | 97.6% |
| hosting (v1) | 237 | 154 | 5 | 65% |
| webhosting (v2) | 246 | 12 | 3 | 4.9% |
| domain (v1) | 119 | 109 | 1 | 91.6% |
| telephony (v1) | 644 | 602 | 5 | 93.5% |
| publicCloud (v2) | 928 | 26 | 4 | 2.8% |
| price (v1) | 581 | 581 | 0 | 100% |
| sms (v1) | 126 | 124 | 0 | 98.4% |
| domain (v2) | 119 | 9 | 0 | 7.6% |
| cluster (v1) | 50 | 42 | 0 | 84% |
| services (v1) | 50 | 47 | 0 | 94% |
| pack (v1) | 39 | 33 | 0 | 84.6% |
| freefax (v1) | 19 | 18 | 0 | 94.7% |
| saas (v1) | 19 | 19 | 0 | 100% |
| metrics (v1) | 13 | 12 | 0 | 92.3% |
| email (v1) | 9 | 2 | 0 | 22.2% |
| ipLoadbalancing (v1) | 9 | 9 | 0 | 100% |
| license (v1) | 9 | 7 | 0 | 77.8% |
| ssl (v1) | 9 | 6 | 0 | 66.7% |
| msServices (v1) | 7 | 5 | 0 | 71.4% |
| allDom (v1) | 6 | 6 | 0 | 100% |
| auth (v1) | 6 | 6 | 0 | 100% |
| sslGateway (v1) | 6 | 6 | 0 | 100% |
| veeam (v1) | 5 | 5 | 0 | 100% |
| stack (v1) | 4 | 4 | 0 | 100% |
| vip (v1) | 4 | 4 | 0 | 100% |
| contact (v1) | 2 | 2 | 0 | 100% |
| partner (v1) | 2 | 2 | 0 | 100% |
| commercialCatalog (v2) | 2 | 2 | 0 | 100% |
| location (v2) | 2 | 2 | 0 | 100% |
| supply (v1) | 1 | 1 | 0 | 100% |

## Non-conformités détaillées

Chaque ligne correspond à un appel HTTP non conforme, groupée par spec :

### backupServices — 2 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| PUT | `/backupServices/tenant/{x}/vault/{x}` | OvhCloudBackupServices/backupServicestenantvaultUpdatePut.operation.ts | missing required body field 'name' |
| PUT | `/backupServices/tenant/{x}/vspc/{x}` | OvhCloudBackupServices/backupServicestenantvspcUpdatePut.operation.ts | missing required body field 'name' |

### cdn — 9 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/cdn/dedicated/{x}/domains` | OvhCloudCdn/resources/domains/domainsCreatePost.operation.ts | missing required body field 'domain' |
| POST | `/cdn/dedicated/{x}/domains/{x}/backends` | OvhCloudCdn/resources/domains/backendsCreatePost.operation.ts | missing required body field 'ip' |
| POST | `/cdn/dedicated/{x}/domains/{x}/cacheRules` | OvhCloudCdn/resources/domains/cacheRulesCreatePost.operation.ts | missing required body field 'cacheType'; missing required body field 'fileMatch'; missing required body field 'fileType'; missing required body field 'ttl' |
| GET | `/cdn/dedicated/{x}/domains/{x}/statistics` | OvhCloudCdn/resources/domains/domainStatisticsGet.operation.ts | missing required query param 'period'; missing required query param 'type'; missing required query param 'value' |
| POST | `/cdn/dedicated/{x}/log/subscription` | OvhCloudCdn/resources/log/subscriptionsCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cdn/dedicated/{x}/log/url` | OvhCloudCdn/resources/log/logUrlPost.operation.ts | missing required body field 'kind' |
| GET | `/cdn/dedicated/{x}/quota` | OvhCloudCdn/resources/service/quotaGet.operation.ts | missing required query param 'period' |
| POST | `/cdn/dedicated/{x}/ssl` | OvhCloudCdn/resources/ssl/sslCreatePost.operation.ts | missing required body field 'name' |
| POST | `/cdn/dedicated/{x}/ssl/update` | OvhCloudCdn/resources/ssl/sslUpdatePost.operation.ts | missing required body field 'certificate'; missing required body field 'key' |

### cloud — 24 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/cloud/project/{x}/ai/data/region/{x}/alias` | OvhCloudPublicCloudAi/dataStore/dataCreatePost.operation.ts | missing required body field 'alias'; missing required body field 'credentials'; missing required body field 'endpoint'; missing required body field 'owner'; missing required body field 'type' |
| POST | `/cloud/project/{x}/database/cassandra/{x}/integration` | OvhCloudPublicCloud/database/cassandra/integrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/cassandra/{x}/log/subscription` | OvhCloudPublicCloud/database/cassandra/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/cassandra/{x}/log/url` | OvhCloudPublicCloud/database/cassandra/logUrlCreatePost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/cassandra/{x}/metric/{x}` | OvhCloudPublicCloud/database/cassandra/metricGetGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/kafka/{x}/log/subscription` | OvhCloudPublicCloud/database/kafka/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/kafka/{x}/log/url` | OvhCloudPublicCloud/database/kafka/logUrlCreatePost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/kafka/{x}/metric/{x}` | OvhCloudPublicCloud/database/kafka/metricGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/kafka/{x}/schemaRegistryAcl` | OvhCloudPublicCloud/database/kafka/schemaRegistryAclCreatePost.operation.ts | missing required body field 'permission'; missing required body field 'resource'; missing required body field 'username' |
| POST | `/cloud/project/{x}/database/kafka/{x}/topic` | OvhCloudPublicCloud/database/kafka/topicCreatePost.operation.ts | missing required body field 'name' |
| POST | `/cloud/project/{x}/database/kafka/{x}/topicAcl` | OvhCloudPublicCloud/database/kafka/topicAclCreatePost.operation.ts | missing required body field 'permission'; missing required body field 'topic'; missing required body field 'username' |
| POST | `/cloud/project/{x}/database/mysql/{x}/log/url` | OvhCloudPublicCloud/database/mysql/logUrlCreatePost.operation.ts | missing required body field 'kind' |
| POST | `/cloud/project/{x}/database/mysql/{x}/migration` | OvhCloudPublicCloud/database/mysql/migrationCreatePost.operation.ts | missing required body field 'sourcePort'; missing required body field 'sourceSsl' |
| POST | `/cloud/project/{x}/database/mysql/{x}/migration/check` | OvhCloudPublicCloud/database/mysql/migrationCheckPost.operation.ts | missing required body field 'sourcePort'; missing required body field 'sourceSsl' |
| POST | `/cloud/project/{x}/database/opensearch/{x}/integration` | OvhCloudPublicCloud/database/opensearch/IntegrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/opensearch/{x}/log/subscription` | OvhCloudPublicCloud/database/opensearch/LogSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/opensearch/{x}/log/url` | OvhCloudPublicCloud/database/opensearch/LogUrlCreatePost.operation.ts | missing required body field 'kind' |
| POST | `/cloud/project/{x}/database/opensearch/{x}/pattern` | OvhCloudPublicCloud/database/opensearch/PatternCreatePost.operation.ts | missing required body field 'pattern' |
| POST | `/cloud/project/{x}/database/opensearch/{x}/user` | OvhCloudPublicCloud/database/opensearch/UserCreatePost.operation.ts | missing required body field 'name' |
| POST | `/cloud/project/{x}/database/postgresql/{x}/connectionPool` | OvhCloudPublicCloud/database/postgresql/connectionPoolCreatePost.operation.ts | missing required body field 'databaseId'; missing required body field 'mode'; missing required body field 'name'; missing required body field 'size' |
| POST | `/cloud/project/{x}/database/postgresql/{x}/database` | OvhCloudPublicCloud/database/postgresql/databaseCreatePost.operation.ts | missing required body field 'name' |
| POST | `/cloud/project/{x}/database/postgresql/{x}/integration` | OvhCloudPublicCloud/database/postgresql/integrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/postgresql/{x}/log/subscription` | OvhCloudPublicCloud/database/postgresql/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/postgresql/{x}/log/url` | OvhCloudPublicCloud/database/postgresql/logUrlCreatePost.operation.ts | missing required body field 'kind' |

### connectivity — 18 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/connectivity/eligibility/recall` | OvhCloudConnectivity/resources/eligibilityRecall/recallPost.operation.ts | missing required body field 'reference'; missing required body field 'referenceType' |
| PUT | `/connectivity/eligibility/recall/{x}` | OvhCloudConnectivity/resources/eligibilityRecall/recallUpdatePut.operation.ts | missing required body field 'reference'; missing required body field 'referenceType' |
| POST | `/connectivity/eligibility/search/addresses` | OvhCloudConnectivity/resources/eligibilitySearch/searchAddressesPost.operation.ts | missing required body field 'latitude'; missing required body field 'longitude' |
| POST | `/connectivity/eligibility/search/buildingDetails` | OvhCloudConnectivity/resources/eligibilitySearch/searchBuildingDetailsPost.operation.ts | missing required body field 'building' |
| POST | `/connectivity/eligibility/search/buildingsByLine` | OvhCloudConnectivity/resources/eligibilitySearch/searchBuildingsByLinePost.operation.ts | missing required body field 'lineNumber'; missing required body field 'status' |
| POST | `/connectivity/eligibility/search/cities` | OvhCloudConnectivity/resources/eligibilitySearch/searchCitiesPost.operation.ts | missing required body field 'zipCode' |
| POST | `/connectivity/eligibility/search/lines` | OvhCloudConnectivity/resources/eligibilitySearch/searchLinesPost.operation.ts | missing required body field 'streetCode'; missing required body field 'streetNumber' |
| POST | `/connectivity/eligibility/search/meetings` | OvhCloudConnectivity/resources/eligibilitySearch/searchMeetingsPost.operation.ts | missing required body field 'eligibilityReference' |
| POST | `/connectivity/eligibility/search/streetNumbers` | OvhCloudConnectivity/resources/eligibilitySearch/searchStreetNumbersPost.operation.ts | missing required body field 'streetCode' |
| POST | `/connectivity/eligibility/search/streetNumbers/details` | OvhCloudConnectivity/resources/eligibilitySearch/searchStreetNumbersDetailsPost.operation.ts | missing required body field 'streetCode' |
| POST | `/connectivity/eligibility/search/streets` | OvhCloudConnectivity/resources/eligibilitySearch/searchStreetsPost.operation.ts | missing required body field 'inseeCode' |
| GET | `/connectivity/eligibility/test` | OvhCloudConnectivity/resources/eligibilityTest/testGet.operation.ts | missing required query param 'eligibilityReference' |
| POST | `/connectivity/eligibility/test/building` | OvhCloudConnectivity/resources/eligibilityTest/testBuildingPost.operation.ts | missing required body field 'building' |
| POST | `/connectivity/eligibility/test/building/partners` | OvhCloudConnectivity/resources/eligibilityTest/testBuildingPartnersPost.operation.ts | missing required body field 'building' |
| POST | `/connectivity/eligibility/test/line` | OvhCloudConnectivity/resources/eligibilityTest/testLinePost.operation.ts | missing required body field 'lineNumber'; missing required body field 'status' |
| POST | `/connectivity/eligibility/test/line/partners` | OvhCloudConnectivity/resources/eligibilityTest/testLinePartnersPost.operation.ts | missing required body field 'lineNumber'; missing required body field 'status' |
| POST | `/connectivity/eligibility/test/otp` | OvhCloudConnectivity/resources/eligibilityTest/testOtpPost.operation.ts | missing required body field 'otp' |
| POST | `/connectivity/eligibility/test/otp/partners` | OvhCloudConnectivity/resources/eligibilityTest/testOtpPartnersPost.operation.ts | missing required body field 'otp' |

### dbaas — 31 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/dbaas/logs/{x}/encryptionKey` | OvhCloudDbaas/encryptionKey/encryptionKeyCreatePost.operation.ts | missing required body field 'content'; missing required body field 'fingerprint'; missing required body field 'title' |
| POST | `/dbaas/logs/{x}/input` | OvhCloudDbaas/input/inputCreatePost.operation.ts | missing required body field 'description'; missing required body field 'engineId'; missing required body field 'streamId'; missing required body field 'title' |
| PUT | `/dbaas/logs/{x}/input/{x}` | OvhCloudDbaas/input/inputUpdatePut.operation.ts | missing required body field 'description'; missing required body field 'engineId'; missing required body field 'streamId'; missing required body field 'title' |
| PUT | `/dbaas/logs/{x}/input/{x}/configuration/flowgger` | OvhCloudDbaas/input/inputConfigurationFlowggerUpdatePut.operation.ts | missing required body field 'logFormat'; missing required body field 'logFraming' |
| PUT | `/dbaas/logs/{x}/input/{x}/configuration/logstash` | OvhCloudDbaas/input/inputConfigurationLogstashUpdatePut.operation.ts | missing required body field 'inputSection' |
| POST | `/dbaas/logs/{x}/output/graylog/dashboard` | OvhCloudDbaas/outputGraylogDashboard/outputGraylogDashboardCreatePost.operation.ts | missing required body field 'description'; missing required body field 'title' |
| PUT | `/dbaas/logs/{x}/output/graylog/dashboard/{x}` | OvhCloudDbaas/outputGraylogDashboard/outputGraylogDashboardUpdatePut.operation.ts | missing required body field 'description'; missing required body field 'title' |
| POST | `/dbaas/logs/{x}/output/graylog/dashboard/{x}/duplicate` | OvhCloudDbaas/outputGraylogDashboard/outputGraylogDashboardDuplicatePost.operation.ts | missing required body field 'description'; missing required body field 'title' |
| POST | `/dbaas/logs/{x}/output/graylog/stream` | OvhCloudDbaas/outputGraylogStream/outputGraylogStreamCreatePost.operation.ts | missing required body field 'description'; missing required body field 'title' |
| PUT | `/dbaas/logs/{x}/output/graylog/stream/{x}` | OvhCloudDbaas/outputGraylogStream/outputGraylogStreamUpdatePut.operation.ts | missing required body field 'description'; missing required body field 'title' |
| POST | `/dbaas/logs/{x}/output/graylog/stream/{x}/alert` | OvhCloudDbaas/outputGraylogStream/outputGraylogStreamAlertCreatePost.operation.ts | missing required body field 'backlog'; missing required body field 'grace'; missing required body field 'title' |
| PUT | `/dbaas/logs/{x}/output/graylog/stream/{x}/alert/{x}` | OvhCloudDbaas/outputGraylogStream/outputGraylogStreamAlertUpdatePut.operation.ts | missing required body field 'backlog'; missing required body field 'grace'; missing required body field 'title' |
| POST | `/dbaas/logs/{x}/output/graylog/stream/{x}/rule` | OvhCloudDbaas/outputGraylogStream/outputGraylogStreamRuleCreatePost.operation.ts | missing required body field 'field'; missing required body field 'operator'; missing required body field 'value' |
| POST | `/dbaas/logs/{x}/output/opensearch/alias` | OvhCloudDbaas/outputOpenSearchAlias/outputOpenSearchAliasCreatePost.operation.ts | missing required body field 'description'; missing required body field 'suffix' |
| PUT | `/dbaas/logs/{x}/output/opensearch/alias/{x}` | OvhCloudDbaas/outputOpenSearchAlias/outputOpenSearchAliasUpdatePut.operation.ts | missing required body field 'description' |
| POST | `/dbaas/logs/{x}/output/opensearch/alias/{x}/index` | OvhCloudDbaas/outputOpenSearchAlias/outputOpenSearchAliasIndexCreatePost.operation.ts | missing required body field 'indexId' |
| POST | `/dbaas/logs/{x}/output/opensearch/alias/{x}/stream` | OvhCloudDbaas/outputOpenSearchAlias/outputOpenSearchAliasStreamCreatePost.operation.ts | missing required body field 'streamId' |
| POST | `/dbaas/logs/{x}/output/opensearch/index` | OvhCloudDbaas/outputOpenSearchIndex/outputOpenSearchIndexCreatePost.operation.ts | missing required body field 'description'; missing required body field 'suffix' |
| PUT | `/dbaas/logs/{x}/output/opensearch/index/{x}` | OvhCloudDbaas/outputOpenSearchIndex/outputOpenSearchIndexUpdatePut.operation.ts | missing required body field 'description' |
| POST | `/dbaas/logs/{x}/output/opensearch/osd` | OvhCloudDbaas/outputOpenSearchOsd/outputOpenSearchOsdCreatePost.operation.ts | missing required body field 'description' |
| PUT | `/dbaas/logs/{x}/output/opensearch/osd/{x}` | OvhCloudDbaas/outputOpenSearchOsd/outputOpenSearchOsdUpdatePut.operation.ts | missing required body field 'description' |
| POST | `/dbaas/logs/{x}/role` | OvhCloudDbaas/role/roleCreatePost.operation.ts | missing required body field 'description'; missing required body field 'name' |
| PUT | `/dbaas/logs/{x}/role/{x}` | OvhCloudDbaas/role/roleUpdatePut.operation.ts | missing required body field 'description'; missing required body field 'name' |
| POST | `/dbaas/logs/{x}/role/{x}/member` | OvhCloudDbaas/role/roleMemberCreatePost.operation.ts | missing required body field 'username' |
| POST | `/dbaas/logs/{x}/role/{x}/permission/alias` | OvhCloudDbaas/role/rolePermissionAliasCreatePost.operation.ts | missing required body field 'aliasId' |
| POST | `/dbaas/logs/{x}/role/{x}/permission/dashboard` | OvhCloudDbaas/role/rolePermissionDashboardCreatePost.operation.ts | missing required body field 'dashboardId' |
| POST | `/dbaas/logs/{x}/role/{x}/permission/index` | OvhCloudDbaas/role/rolePermissionIndexCreatePost.operation.ts | missing required body field 'indexId' |
| POST | `/dbaas/logs/{x}/role/{x}/permission/osd` | OvhCloudDbaas/role/rolePermissionOsdCreatePost.operation.ts | missing required body field 'osdId' |
| POST | `/dbaas/logs/{x}/role/{x}/permission/stream` | OvhCloudDbaas/role/rolePermissionStreamCreatePost.operation.ts | missing required body field 'streamId' |
| POST | `/dbaas/logs/{x}/token` | OvhCloudDbaas/token/tokenCreatePost.operation.ts | missing required body field 'name' |
| POST | `/dbaas/logs/{x}/user/changePassword` | OvhCloudDbaas/service/serviceUserChangePasswordPost.operation.ts | missing required body field 'password' |

### dedicated — 2 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/dedicated/server/{x}/confirmTermination` | OvhCloudDedicated/resources/confirmTerminationCreate.operation.ts | missing required body field 'token' |
| POST | `/dedicated/server/{x}/features/backupFTP/access` | OvhCloudDedicated/resources/backupFtpAccessPost.operation.ts | missing required body field 'cifs'; missing required body field 'ipBlock'; missing required body field 'nfs' |

### dedicatedCloud — 67 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/dedicatedCloud/{x}/allowedNetwork` | OvhCloudDedicatedCloud/allowedNetwork/allowedNetworkCreate.operation.ts | missing required body field 'network' |
| POST | `/dedicatedCloud/{x}/allowedNetwork/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/allowedNetwork/allowedNetworkTaskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/allowedNetwork/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/allowedNetwork/allowedNetworkTaskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/confirmTermination` | OvhCloudDedicatedCloud/root/confirmTermination.operation.ts | missing required body field 'token' |
| POST | `/dedicatedCloud/{x}/datacenter` | OvhCloudDedicatedCloud/datacenter/datacenterCreate.operation.ts | missing required body field 'commercialRangeName' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/backup/batchRestore` | OvhCloudDedicatedCloud/datacenter/backup/datacenterBackupBatchRestore.operation.ts | missing required body field 'backupRepositoryName' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/backup/changeProperties` | OvhCloudDedicatedCloud/datacenter/backup/datacenterBackupChangeProperties.operation.ts | missing required body field 'backupOffer' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zerto/disable` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoDisable.operation.ts | missing required body field 'secondaryDatacenterId'; missing required body field 'secondaryServiceName' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zerto/enable` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoEnable.operation.ts | missing required body field 'primaryEndpointIp'; missing required body field 'secondaryDatacenterId'; missing required body field 'secondaryEndpointIp'; missing required body field 'secondaryServiceName' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zerto/endpointPublicIp` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoEndpointPublicIp.operation.ts | missing required body field 'newEndpointPublicIp' |
| DELETE | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zerto/remoteSites` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoRemoteSiteDelete.operation.ts | missing required query param 'id' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zerto/remoteSites` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoRemoteSiteCreate.operation.ts | missing required body field 'label'; missing required body field 'preSharedKey'; missing required body field 'remoteEndpointPublicIp'; missing required body field 'remoteVraNetwork'; missing required body field 'remoteZvmInternalIp' |
| GET | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zerto/usageReport` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoUsageReport.operation.ts | missing required query param 'month'; missing required query param 'year' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zerto/vraResources` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoVraResourcesUpdate.operation.ts | missing required body field 'resourcesSize'; missing required body field 'vmId' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zertoSingle/configureVpn` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleConfigureVpn.operation.ts | missing required body field 'preSharedKey'; missing required body field 'remoteEndpointInternalIp'; missing required body field 'remoteEndpointPublicIp'; missing required body field 'remoteZvmInternalIp' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zertoSingle/enable` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleEnable.operation.ts | missing required body field 'localVraNetwork'; missing required body field 'ovhEndpointIp' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zertoSingle/endpointPublicIp` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleEndpointPublicIp.operation.ts | missing required body field 'newEndpointPublicIp' |
| DELETE | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zertoSingle/remoteSites` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteDelete.operation.ts | missing required query param 'id' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zertoSingle/remoteSites` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteCreate.operation.ts | missing required body field 'label'; missing required body field 'preSharedKey'; missing required body field 'remoteEndpointPublicIp'; missing required body field 'remoteVraNetwork'; missing required body field 'remoteZvmInternalIp' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/disasterRecovery/zertoSingle/vraResources` | OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleVraResourcesUpdate.operation.ts | missing required body field 'resourcesSize'; missing required body field 'vmId' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/filer/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/filer/filerTaskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/filer/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/filer/filerTaskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/host/{x}/addHostSpare` | OvhCloudDedicatedCloud/host/hostAddHostSpare.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/host/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/host/hostTaskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/host/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/host/hostTaskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/orderNewFilerHourly` | OvhCloudDedicatedCloud/datacenter/datacenterOrderNewFilerHourly.operation.ts | missing required body field 'name' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/orderNewHostHourly` | OvhCloudDedicatedCloud/datacenter/datacenterOrderNewHostHourly.operation.ts | missing required body field 'name' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/privateGateway/enable` | OvhCloudDedicatedCloud/datacenter/privateGateway/privateGatewayEnable.operation.ts | missing required body field 'ip'; missing required body field 'netmask'; missing required body field 'portgroup' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/resizeNsxtEdgeCluster` | OvhCloudDedicatedCloud/datacenter/nsxtEdge/resizeNsxtEdgeCluster.operation.ts | missing required body field 'size' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/datacenter/datacenterTaskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/datacenter/datacenterTaskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/backupJob` | OvhCloudDedicatedCloud/vm/vmBackupJobUpdate.operation.ts | missing required body field 'backupDays' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/backupJob/enable` | OvhCloudDedicatedCloud/vm/vmBackupJobEnable.operation.ts | missing required body field 'backupDays' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/backupJob/restorePoints/{x}/restore` | OvhCloudDedicatedCloud/vm/vmRestorePointRestore.operation.ts | missing required body field 'filerId' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/disableCarp` | OvhCloudDedicatedCloud/vm/vmDisableCarp.operation.ts | missing required body field 'macAddress' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/editBackup` | OvhCloudDedicatedCloud/vm/vmEditBackup.operation.ts | missing required body field 'backupDays' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/enableBackup` | OvhCloudDedicatedCloud/vm/vmEnableBackup.operation.ts | missing required body field 'backupDays' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/enableCarp` | OvhCloudDedicatedCloud/vm/vmEnableCarp.operation.ts | missing required body field 'macAddress' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/restoreBackup` | OvhCloudDedicatedCloud/vm/vmRestoreBackup.operation.ts | missing required body field 'filerId'; missing required body field 'restorePointId' |
| POST | `/dedicatedCloud/{x}/datacenter/{x}/vm/{x}/setLicense` | OvhCloudDedicatedCloud/vm/vmSetLicense.operation.ts | missing required body field 'bypassGuestOsFamilyCheck'; missing required body field 'kmsLicense' |
| POST | `/dedicatedCloud/{x}/federation/activeDirectory` | OvhCloudDedicatedCloud/federation/federationActiveDirectoryCreate.operation.ts | missing required body field 'baseDnForGroups'; missing required body field 'baseDnForUsers'; missing required body field 'domainAlias'; missing required body field 'domainName'; missing required body field 'ip'; missing required body field 'password'; missing required body field 'username' |
| POST | `/dedicatedCloud/{x}/federation/activeDirectory/{x}/changeProperties` | OvhCloudDedicatedCloud/federation/federationActiveDirectoryChangeProperties.operation.ts | missing required body field 'password'; missing required body field 'username' |
| POST | `/dedicatedCloud/{x}/federation/activeDirectory/{x}/grantActiveDirectoryGroup` | OvhCloudDedicatedCloud/federation/federationActiveDirectoryGrantGroup.operation.ts | missing required body field 'groupName' |
| POST | `/dedicatedCloud/{x}/federation/activeDirectory/{x}/grantActiveDirectoryUser` | OvhCloudDedicatedCloud/federation/federationActiveDirectoryGrantUser.operation.ts | missing required body field 'username' |
| POST | `/dedicatedCloud/{x}/filer/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/filer/filerGlobalTaskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/filer/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/filer/filerGlobalTaskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/iam/addRole` | OvhCloudDedicatedCloud/iam/iamAddRole.operation.ts | missing required body field 'name' |
| POST | `/dedicatedCloud/{x}/ip/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/ip/ipTaskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/ip/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/ip/ipTaskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/log/subscription` | OvhCloudDedicatedCloud/log/logSubscriptionCreate.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/dedicatedCloud/{x}/log/url` | OvhCloudDedicatedCloud/log/logUrlCreate.operation.ts | missing required body field 'kind' |
| POST | `/dedicatedCloud/{x}/orderNewFilerHourly` | OvhCloudDedicatedCloud/root/orderNewFilerHourly.operation.ts | missing required body field 'name' |
| POST | `/dedicatedCloud/{x}/sap` | OvhCloudDedicatedCloud/sap/sapCreate.operation.ts | missing required body field 'applicationServers'; missing required body field 'applicationType'; missing required body field 'applicationVersion'; missing required body field 'bucketSources'; missing required body field 'clusterName'; missing required body field 'datacenterId'; missing required body field 'deploymentType'; missing required body field 'domainName'; missing required body field 'firewall'; missing required body field 'hanaServers'; missing required body field 'osUpdate'; missing required body field 'passwords'; missing required body field 'sids'; missing required body field 'systemUsage' |
| GET | `/dedicatedCloud/{x}/securityOptions/dependenciesTree` | OvhCloudDedicatedCloud/securityOptions/securityOptionsDependenciesTree.operation.ts | missing required query param 'option' |
| POST | `/dedicatedCloud/{x}/securityOptions/resumePendingEnabling` | OvhCloudDedicatedCloud/securityOptions/securityOptionsResumePendingEnabling.operation.ts | missing required body field 'option' |
| POST | `/dedicatedCloud/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/task/taskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/task/taskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/twoFAWhitelist` | OvhCloudDedicatedCloud/twoFAWhitelist/twoFAWhitelistCreate.operation.ts | missing required body field 'description'; missing required body field 'ip' |
| POST | `/dedicatedCloud/{x}/user` | OvhCloudDedicatedCloud/user/userCreate.operation.ts | missing required body field 'name' |
| POST | `/dedicatedCloud/{x}/user/{x}/confirmPhoneNumber` | OvhCloudDedicatedCloud/user/userConfirmPhoneNumber.operation.ts | missing required body field 'token' |
| POST | `/dedicatedCloud/{x}/user/{x}/objectRight` | OvhCloudDedicatedCloud/user/userObjectRightCreate.operation.ts | missing required body field 'right'; missing required body field 'type'; missing required body field 'vmwareObjectId' |
| POST | `/dedicatedCloud/{x}/user/{x}/task/{x}/changeMaintenanceExecutionDate` | OvhCloudDedicatedCloud/user/userTaskChangeMaintenanceExecutionDate.operation.ts | missing required body field 'executionDate' |
| POST | `/dedicatedCloud/{x}/user/{x}/task/{x}/resetTaskState` | OvhCloudDedicatedCloud/user/userTaskResetTaskState.operation.ts | missing required body field 'reason' |
| POST | `/dedicatedCloud/{x}/vendor/ovhId` | OvhCloudDedicatedCloud/vendor/vendorOvhId.operation.ts | missing required body field 'objectType'; missing required body field 'vendorId' |
| POST | `/dedicatedCloud/{x}/vmEncryption/kms` | OvhCloudDedicatedCloud/vmEncryption/kms/vmEncryptionKmsCreate.operation.ts | missing required body field 'ip'; missing required body field 'sslThumbprint' |
| POST | `/dedicatedCloud/{x}/vmEncryption/kms/{x}/changeProperties` | OvhCloudDedicatedCloud/vmEncryption/kms/vmEncryptionKmsChangeProperties.operation.ts | missing required body field 'sslThumbprint' |
| POST | `/dedicatedCloud/{x}/vrops/outgoingFlow` | OvhCloudDedicatedCloud/vrops/vropsOutgoingFlowCreate.operation.ts | missing required body field 'ip'; missing required body field 'servicePort' |

### domain — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| PUT | `/domain/zone/{x}/option/{x}/serviceInfos` | OvhCloudDomain/resources/zone/domainZoneOptionServiceInfosUpdatePut.operation.ts | missing required body field 'renew' |

### horizonView — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/horizonView/{x}/accessPoint/{x}/enableTwoFA` | OvhCloudHorizonView/resources/accessPoint/enableTwoFAPost.operation.ts | missing required body field 'radiusIp'; missing required body field 'secret' |

### hosting — 5 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/hosting/web/{x}/confirmTermination` | OvhCloudHosting/serviceManagement/confirmTerminationCreate.operation.ts | missing required body field 'token' |
| POST | `/hosting/web/{x}/cron` | OvhCloudHosting/cron/cronCreatePost.operation.ts | missing required body field 'command'; missing required body field 'frequency'; missing required body field 'language' |
| PUT | `/hosting/web/{x}/cron/{x}` | OvhCloudHosting/cron/cronUpdatePut.operation.ts | missing required body field 'command'; missing required body field 'frequency'; missing required body field 'language' |
| POST | `/hosting/web/{x}/request` | OvhCloudHosting/serviceManagement/requestPost.operation.ts | missing required body field 'action' |
| GET | `/hosting/web/localSeo/visibilityCheckResult` | OvhCloudHosting/localSeo/visibilityCheckResultGet.operation.ts | missing required query param 'directory' |

### iam — 11 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/iam/authorization/check` | OvhCloudIam/iamauthorizationcheckCreatePost.operation.ts | missing required body field 'actions'; missing required body field 'resourceURNs' |
| POST | `/iam/log/subscription` | OvhCloudIam/iamlogsubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/iam/log/url` | OvhCloudIam/iamlogurlCreatePost.operation.ts | missing required body field 'kind' |
| POST | `/iam/permissionsGroup` | OvhCloudIam/iampermissionsGroupCreatePost.operation.ts | missing required body field 'description'; missing required body field 'name'; missing required body field 'permissions' |
| PUT | `/iam/permissionsGroup/{x}` | OvhCloudIam/iampermissionsGroupUpdatePut.operation.ts | missing required body field 'description'; missing required body field 'name'; missing required body field 'permissions' |
| POST | `/iam/policy` | OvhCloudIam/iampolicyCreatePost.operation.ts | missing required body field 'identities'; missing required body field 'name'; missing required body field 'permissions'; missing required body field 'resources' |
| PUT | `/iam/policy/{x}` | OvhCloudIam/iampolicyUpdatePut.operation.ts | missing required body field 'identities'; missing required body field 'name'; missing required body field 'permissions'; missing required body field 'resources' |
| POST | `/iam/resource/{x}/authorization/check` | OvhCloudIam/iamresourceauthorizationcheckCreatePost.operation.ts | missing required body field 'actions' |
| POST | `/iam/resource/{x}/tag` | OvhCloudIam/iamresourcetagCreatePost.operation.ts | missing required body field 'key'; missing required body field 'value' |
| POST | `/iam/resourceGroup` | OvhCloudIam/iamresourceGroupCreatePost.operation.ts | missing required body field 'name' |
| PUT | `/iam/resourceGroup/{x}` | OvhCloudIam/iamresourceGroupUpdatePut.operation.ts | missing required body field 'name'; missing required body field 'resources' |

### ip — 13 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/ip/{x}/bringYourOwnIp/aggregate` | OvhCloudIp/resources/bringYourOwnIp/ipBringYourOwnIpAggregateCreatePost.operation.ts | missing required body field 'aggregationIp' |
| POST | `/ip/{x}/bringYourOwnIp/slice` | OvhCloudIp/resources/bringYourOwnIp/ipBringYourOwnIpSliceCreatePost.operation.ts | missing required body field 'slicingSize' |
| POST | `/ip/{x}/changeOrg` | OvhCloudIp/resources/main/ipChangeOrgPost.operation.ts | missing required body field 'organisation' |
| POST | `/ip/{x}/delegation` | OvhCloudIp/resources/delegation/ipDelegationCreatePost.operation.ts | missing required body field 'target' |
| POST | `/ip/{x}/firewall` | OvhCloudIp/resources/firewall/ipFirewallCreatePost.operation.ts | missing required body field 'ipOnFirewall' |
| POST | `/ip/{x}/firewall/{x}/rule` | OvhCloudIp/resources/firewall/ipFirewallRuleCreatePost.operation.ts | missing required body field 'action'; missing required body field 'protocol'; missing required body field 'sequence' |
| POST | `/ip/{x}/game/{x}/rule` | OvhCloudIp/resources/game/ipGameRuleCreatePost.operation.ts | missing required body field 'ports'; missing required body field 'protocol' |
| POST | `/ip/{x}/migrationToken` | OvhCloudIp/resources/migrationToken/ipMigrationTokenCreatePost.operation.ts | missing required body field 'customerId' |
| POST | `/ip/{x}/mitigation` | OvhCloudIp/resources/mitigation/ipMitigationCreatePost.operation.ts | missing required body field 'ipOnMitigation' |
| POST | `/ip/{x}/mitigationProfiles` | OvhCloudIp/resources/mitigationProfiles/ipMitigationProfilesCreatePost.operation.ts | missing required body field 'autoMitigationTimeOut'; missing required body field 'ipMitigationProfile' |
| POST | `/ip/{x}/move` | OvhCloudIp/resources/main/ipMovePost.operation.ts | missing required body field 'to' |
| POST | `/ip/{x}/reverse` | OvhCloudIp/resources/reverse/ipReverseCreatePost.operation.ts | missing required body field 'ipReverse'; missing required body field 'reverse' |
| POST | `/ip/service/{x}/confirmTermination` | OvhCloudIp/resources/service/ipServiceConfirmTerminationPost.operation.ts | missing required body field 'token' |

### managedCMS — 3 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| GET | `/managedCMS/reference/availableLanguages` | OvhCloudManagedCms/managedCMSreferenceavailableLanguagesListGet.operation.ts | missing required query param 'cms' |
| GET | `/managedCMS/reference/supportedPHPVersions` | OvhCloudManagedCms/managedCMSreferencesupportedPHPVersionsListGet.operation.ts | missing required query param 'cms' |
| POST | `/managedCMS/resource/{x}/website` | OvhCloudManagedCms/managedCMSresourcewebsiteCreatePost.operation.ts | missing required body field 'targetSpec' |

### me — 9 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/me/accessRestriction/sms/{x}/disable` | OvhCloudMe/operations/accessRestriction.operation.ts | missing required body field 'code' |
| POST | `/me/accessRestriction/sms/{x}/enable` | OvhCloudMe/operations/accessRestriction.operation.ts | missing required body field 'code' |
| POST | `/me/accessRestriction/sms/{x}/validate` | OvhCloudMe/operations/accessRestriction.operation.ts | missing required body field 'code' |
| POST | `/me/accessRestriction/totp/{x}/disable` | OvhCloudMe/operations/accessRestriction.operation.ts | missing required body field 'code' |
| POST | `/me/accessRestriction/totp/{x}/enable` | OvhCloudMe/operations/accessRestriction.operation.ts | missing required body field 'code' |
| POST | `/me/accessRestriction/totp/{x}/validate` | OvhCloudMe/operations/accessRestriction.operation.ts | missing required body field 'code' |
| GET | `/me/bringYourOwnIp/token` | OvhCloudMe/operations/partner.operation.ts | missing required query param 'campus' |
| GET | `/me/consumption/usage/history` | OvhCloudMe/operations/notification.operation.ts | missing required query param 'beginDate'; missing required query param 'endDate' |
| GET | `/me/order/{x}/consumption/details` | OvhCloudMe/operations/payment.operation.ts | missing required query param 'fileFormat' |

### networkDefense — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| GET | `/networkDefense/vac/traffic` | OvhCloudNetworkDefense/networkDefensevactrafficListGet.operation.ts | missing required query param 'after'; missing required query param 'subnet' |

### newAccount — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/newAccount` | OvhCloudNewAccount/resources/newAccountPost.operation.ts | missing required body field 'country'; missing required body field 'email'; missing required body field 'legalform'; missing required body field 'ovhCompany'; missing required body field 'ovhSubsidiary' |

### notification — 3 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/notification/contactMean` | OvhCloudNotification/notificationcontactMeanCreatePost.operation.ts | missing required body field 'type' |
| POST | `/notification/contactMean/{x}/validate` | OvhCloudNotification/notificationcontactMeanvalidateCreatePost.operation.ts | missing required body field 'otp' |
| POST | `/notification/routing` | OvhCloudNotification/notificationroutingCreatePost.operation.ts | missing required body field 'active'; missing required body field 'name'; missing required body field 'rules' |

### nutanix — 5 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/nutanix/{x}/confirmTermination` | OvhCloudNutanix/resources/confirmTerminationPost.operation.ts | missing required body field 'token' |
| PUT | `/nutanix/{x}/nodes/{x}` | OvhCloudNutanix/resources/nodeUpdatePut.operation.ts | missing required body field 'version' |
| GET | `/nutanix/availabilities` | OvhCloudNutanix/resources/availabilitiesGet.operation.ts | missing required query param 'quantity' |
| GET | `/nutanix/availabilities/raw` | OvhCloudNutanix/resources/availabilitiesRawGet.operation.ts | missing required query param 'quantity' |
| GET | `/nutanix/requirements` | OvhCloudNutanix/resources/requirementsGet.operation.ts | missing required query param 'erasureCoding'; missing required query param 'rackAwareness'; missing required query param 'redundancyFactor' |

### okms — 8 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| GET | `/okms/reference/secretConfig` | OvhCloudOkms/okmsreferencesecretConfigListGet.operation.ts | missing required query param 'region' |
| GET | `/okms/reference/serviceKey` | OvhCloudOkms/okmsreferenceserviceKeyListGet.operation.ts | missing required query param 'region' |
| POST | `/okms/resource/{x}/credential` | OvhCloudOkms/okmsresourcecredentialCreatePost.operation.ts | missing required body field 'identityURNs'; missing required body field 'name' |
| POST | `/okms/resource/{x}/log/subscription` | OvhCloudOkms/okmsresourcelogsubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/okms/resource/{x}/log/url` | OvhCloudOkms/okmsresourcelogurlCreatePost.operation.ts | missing required body field 'kind' |
| POST | `/okms/resource/{x}/secret` | OvhCloudOkms/okmsresourcesecretCreatePost.operation.ts | missing required body field 'path'; missing required body field 'version' |
| POST | `/okms/resource/{x}/secret/{x}/version` | OvhCloudOkms/okmsresourcesecretversionCreatePost.operation.ts | missing required body field 'data' |
| PUT | `/okms/resource/{x}/secret/{x}/version/{x}` | OvhCloudOkms/okmsresourcesecretversionUpdatePut.operation.ts | missing required body field 'state' |

### order — 6 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/order/cart/{x}/coupon` | OvhCloudOrder/cart/cartCouponCreatePost.operation.ts | missing required body field 'coupon' |
| POST | `/order/cart/{x}/item/{x}/configuration` | OvhCloudOrder/cart/cartItemConfigurationCreatePost.operation.ts | missing required body field 'label'; missing required body field 'value' |
| POST | `/order/cart/{x}/support` | OvhCloudOrder/cart/cartSupportCreatePost.operation.ts | missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| GET | `/order/vps/{x}/additionalDisk` | OvhCloudOrder/vps/additionalDisk/additionalDiskListGet.operation.ts | missing required query param 'additionalDiskSize' |
| GET | `/order/vps/{x}/additionalDisk/{x}` | OvhCloudOrder/vps/additionalDisk/additionalDiskDurationGet.operation.ts | missing required query param 'additionalDiskSize' |
| POST | `/order/vps/{x}/additionalDisk/{x}` | OvhCloudOrder/vps/additionalDisk/additionalDiskCreatePost.operation.ts | missing required body field 'additionalDiskSize' |

### overTheBox — 11 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| PUT | `/overTheBox/{x}/autoMTU` | OvhCloudOverTheBox/resources/main/autoMTUPut.operation.ts | missing required body field 'mtuAuto' |
| POST | `/overTheBox/{x}/device/actions` | OvhCloudOverTheBox/resources/device/deviceActionsPost.operation.ts | missing required body field 'name' |
| POST | `/overTheBox/{x}/device/restoreBackup` | OvhCloudOverTheBox/resources/device/deviceRestoreBackupPost.operation.ts | missing required body field 'backupId' |
| PUT | `/overTheBox/{x}/ipv6` | OvhCloudOverTheBox/resources/main/ipv6Put.operation.ts | missing required body field 'enabled' |
| POST | `/overTheBox/{x}/linkDevice` | OvhCloudOverTheBox/resources/main/linkDevicePost.operation.ts | missing required body field 'deviceId' |
| POST | `/overTheBox/{x}/linkHardware` | OvhCloudOverTheBox/resources/main/linkHardwarePost.operation.ts | missing required body field 'hardwareName' |
| POST | `/overTheBox/{x}/log/subscription` | OvhCloudOverTheBox/resources/log/logSubscriptionPost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/overTheBox/{x}/log/url` | OvhCloudOverTheBox/resources/log/logUrlPost.operation.ts | missing required body field 'kind' |
| POST | `/overTheBox/{x}/migration/changeOffers` | OvhCloudOverTheBox/resources/main/migrationChangeOffersPost.operation.ts | missing required body field 'offer' |
| POST | `/overTheBox/{x}/remoteAccesses` | OvhCloudOverTheBox/resources/remoteAccesses/remoteAccessesPost.operation.ts | missing required body field 'exposedPort' |
| GET | `/overTheBox/{x}/statistics` | OvhCloudOverTheBox/resources/main/statisticsGet.operation.ts | missing required query param 'metricsType' |

### ovhCloudConnect — 9 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/ovhCloudConnect/{x}/config/pop` | OvhCloudOvhCloudConnect/resources/config/popPost.operation.ts | missing required body field 'interfaceId'; missing required body field 'type' |
| POST | `/ovhCloudConnect/{x}/config/pop/{x}/datacenter` | OvhCloudOvhCloudConnect/resources/config/popDatacenterPost.operation.ts | missing required body field 'datacenterId' |
| POST | `/ovhCloudConnect/{x}/config/pop/{x}/datacenter/{x}/extra` | OvhCloudOvhCloudConnect/resources/config/popDatacenterExtraPost.operation.ts | missing required body field 'type' |
| GET | `/ovhCloudConnect/{x}/config/pop/{x}/statistics` | OvhCloudOvhCloudConnect/resources/config/popStatisticsGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| POST | `/ovhCloudConnect/{x}/confirmTermination` | OvhCloudOvhCloudConnect/resources/main/confirmTerminationPost.operation.ts | missing required body field 'token' |
| POST | `/ovhCloudConnect/{x}/diagnostic` | OvhCloudOvhCloudConnect/resources/main/diagnosticPost.operation.ts | missing required body field 'diagnosticName'; missing required body field 'popConfigId' |
| GET | `/ovhCloudConnect/{x}/interface/{x}/statistics` | OvhCloudOvhCloudConnect/resources/main/interfaceStatisticsGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| POST | `/ovhCloudConnect/{x}/log/subscription` | OvhCloudOvhCloudConnect/resources/log/logSubscriptionPost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/ovhCloudConnect/{x}/log/url` | OvhCloudOvhCloudConnect/resources/log/logUrlPost.operation.ts | missing required body field 'kind' |

### publicCloud — 4 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/publicCloud/project/{x}/rancher` | OvhCloudPublicCloud/rancher/serviceCreatePost.operation.ts | missing required body field 'targetSpec' |
| POST | `/publicCloud/project/{x}/rancher` | OvhCloudPublicCloud/rancher/serviceCreatePostV2.operation.ts | missing required body field 'targetSpec' |
| PUT | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceUpdatePut.operation.ts | missing required body field 'targetSpec' |
| PUT | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceUpdatePutV2.operation.ts | missing required body field 'targetSpec' |

### secret — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/secret/retrieve` | OvhCloudSecret/resources/retrievePost.operation.ts | missing required body field 'id' |

### service — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/service/{x}/renew` | OvhCloudService/createRenew.operation.ts | missing required body field 'duration'; missing required body field 'services' |

### startup — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/startup` | OvhCloudStartup/resources/registerPost.operation.ts | missing required body field 'company'; missing required body field 'fundRaising'; missing required body field 'project' |

### storage — 10 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| PUT | `/storage/netapp/{x}` | OvhCloudStorage/service/serviceUpdatePut.operation.ts | missing required body field 'name' |
| POST | `/storage/netapp/{x}/confirmTermination` | OvhCloudStorage/service/confirmTerminationPost.operation.ts | missing required body field 'token' |
| POST | `/storage/netapp/{x}/share` | OvhCloudStorage/share/shareCreatePost.operation.ts | missing required body field 'protocol'; missing required body field 'size' |
| POST | `/storage/netapp/{x}/share/{x}/acl` | OvhCloudStorage/share/acl/aclCreatePost.operation.ts | missing required body field 'accessLevel'; missing required body field 'accessTo' |
| POST | `/storage/netapp/{x}/share/{x}/extend` | OvhCloudStorage/share/shareExtendPost.operation.ts | missing required body field 'size' |
| POST | `/storage/netapp/{x}/share/{x}/revert` | OvhCloudStorage/share/shareRevertPost.operation.ts | missing required body field 'snapshotID' |
| POST | `/storage/netapp/{x}/share/{x}/shrink` | OvhCloudStorage/share/shareShrinkPost.operation.ts | missing required body field 'size' |
| PUT | `/storage/netapp/{x}/share/{x}/snapshotPolicy` | OvhCloudStorage/share/snapshot/shareSnapshotPolicyUpdatePut.operation.ts | missing required body field 'snapshotPolicyID' |
| PUT | `/storage/netapp/{x}/share/{x}/snapshotReserve` | OvhCloudStorage/share/snapshot/shareSnapshotReserveUpdatePut.operation.ts | missing required body field 'percent' |
| POST | `/storage/netapp/{x}/snapshotPolicy` | OvhCloudStorage/snapshotPolicy/snapshotPolicyCreatePost.operation.ts | missing required body field 'rules' |

### support — 2 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/support/tickets/{x}/reopen` | OvhCloudSupport/resources/reopen.operation.ts | missing required body field 'body' |
| POST | `/support/tickets/create` | OvhCloudSupport/resources/create.operation.ts | missing required body field 'body'; missing required body field 'subject' |

### telephony — 5 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/telephony/{x}/line/{x}/phone/rma` | OvhCloudTelephony/line/linePhoneRmaPost.operation.ts | missing required body field 'type' |
| POST | `/telephony/{x}/line/{x}/phone/rma/{x}/changeType` | OvhCloudTelephony/line/linePhoneRmaChangeTypePost.operation.ts | missing required body field 'type' |
| POST | `/telephony/{x}/line/{x}/tones/toneUpload` | OvhCloudTelephony/line/lineTonesToneUploadPost.operation.ts | missing required body field 'type' |
| GET | `/telephony/searchServices` | OvhCloudTelephony/misc/searchServicesGet.operation.ts | missing required query param 'axiom' |
| POST | `/telephony/setDefaultSipDomain` | OvhCloudTelephony/misc/setDefaultSipDomainPost.operation.ts | missing required body field 'domain' |

### veeamCloudConnect — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/veeamCloudConnect/{x}/backupRepository/{x}/upgradeQuota` | OvhCloudVeeamCloudConnect/resources/backupRepositoryUpgradeQuotaPost.operation.ts | missing required body field 'newQuota' |

### vmwareCloudDirector — 5 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| PUT | `/vmwareCloudDirector/backup/{x}` | OvhCloudVmwareCloudDirector/vmwareCloudDirectorbackupUpdatePut.operation.ts | missing required body field 'targetSpec' |
| PUT | `/vmwareCloudDirector/organization/{x}` | OvhCloudVmwareCloudDirector/vmwareCloudDirectororganizationUpdatePut.operation.ts | missing required body field 'targetSpec' |
| PUT | `/vmwareCloudDirector/organization/{x}/networkAcl/{x}` | OvhCloudVmwareCloudDirector/vmwareCloudDirectororganizationnetworkAclUpdatePut.operation.ts | missing required body field 'targetSpec' |
| PUT | `/vmwareCloudDirector/organization/{x}/virtualDataCenter/{x}` | OvhCloudVmwareCloudDirector/vmwareCloudDirectororganizationvirtualDataCenterUpdatePut.operation.ts | missing required body field 'targetSpec' |
| PUT | `/vmwareCloudDirector/organization/{x}/virtualDataCenter/{x}/vrackSegment/{x}` | OvhCloudVmwareCloudDirector/vmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut.operation.ts | missing required body field 'targetSpec' |

### vps — 4 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/vps/{x}/automatedBackup/reschedule` | OvhCloudVps/automatedBackupReschedulePost.operation.ts | missing required body field 'schedule' |
| POST | `/vps/{x}/automatedBackup/restore` | OvhCloudVps/automatedBackupRestoreCreate.operation.ts | missing required body field 'restorePoint'; missing required body field 'type' |
| GET | `/vps/{x}/automatedBackup/restorePoints` | OvhCloudVps/restorePointListGet.operation.ts | missing required query param 'state' |
| POST | `/vps/{x}/confirmTermination` | OvhCloudVps/confirmTerminationCreateVps.operation.ts | missing required body field 'token' |

### vrack — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/vrack/{x}/ip` | OvhCloudVrack/ipSubCreatePost.operation.ts | missing required body field 'block' |

### vrackServices — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| PUT | `/vrackServices/resource/{x}` | OvhCloudVrackServices/vrackServicesresourceUpdatePut.operation.ts | missing required body field 'checksum'; missing required body field 'targetSpec' |

### webhosting — 3 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/webhosting/resource/{x}/website` | OvhCloudHosting/v2/website/createPostV2.operation.ts | missing required body field 'targetSpec' |
| POST | `/webhosting/resource/{x}/website` | OvhCloudHosting/v2/websiteCreatePostV2.operation.ts | missing required body field 'targetSpec' |
| PUT | `/webhosting/resource/{x}/website/{x}` | OvhCloudHosting/v2/websiteUpdatePutV2.operation.ts | missing required body field 'targetSpec' |

### xdsl — 7 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/xdsl/{x}/lines/{x}/diagnostic/run` | OvhCloudXdsl/resources/lines/lineDiagnosticRunPost.operation.ts | missing required body field 'faultType' |
| POST | `/xdsl/{x}/lines/{x}/dslamPort/changeProfile` | OvhCloudXdsl/resources/lines/dslamPortChangeProfilePost.operation.ts | missing required body field 'dslamProfileId' |
| GET | `/xdsl/{x}/lines/{x}/dslamPort/logs` | OvhCloudXdsl/resources/lines/dslamPortLogsGet.operation.ts | missing required query param 'limit' |
| GET | `/xdsl/{x}/lines/{x}/statistics` | OvhCloudXdsl/resources/lines/linesStatisticsGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| POST | `/xdsl/{x}/log/subscription` | OvhCloudXdsl/resources/log/logSubscriptionPost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/xdsl/{x}/log/url` | OvhCloudXdsl/resources/log/logUrlPost.operation.ts | missing required body field 'kind' |
| POST | `/xdsl/{x}/mailSending` | OvhCloudXdsl/resources/main/mailSendingPost.operation.ts | missing required body field 'status' |

### zimbra — 10 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| PUT | `/zimbra/platform/{x}` | OvhCloudZimbra/zimbraplatformUpdatePut.operation.ts | missing required body field 'targetSpec' |
| POST | `/zimbra/platform/{x}/account` | OvhCloudZimbra/zimbraplatformaccountCreatePost.operation.ts | missing required body field 'targetSpec' |
| PUT | `/zimbra/platform/{x}/account/{x}` | OvhCloudZimbra/zimbraplatformaccountUpdatePut.operation.ts | missing required body field 'targetSpec' |
| POST | `/zimbra/platform/{x}/alias` | OvhCloudZimbra/zimbraplatformaliasCreatePost.operation.ts | missing required body field 'targetSpec' |
| POST | `/zimbra/platform/{x}/diagnostic/domain` | OvhCloudZimbra/zimbraplatformdiagnosticdomainCreatePost.operation.ts | missing required body field 'domains' |
| POST | `/zimbra/platform/{x}/domain` | OvhCloudZimbra/zimbraplatformdomainCreatePost.operation.ts | missing required body field 'targetSpec' |
| PUT | `/zimbra/platform/{x}/domain/{x}` | OvhCloudZimbra/zimbraplatformdomainUpdatePut.operation.ts | missing required body field 'targetSpec' |
| POST | `/zimbra/platform/{x}/organization` | OvhCloudZimbra/zimbraplatformorganizationCreatePost.operation.ts | missing required body field 'targetSpec' |
| PUT | `/zimbra/platform/{x}/organization/{x}` | OvhCloudZimbra/zimbraplatformorganizationUpdatePut.operation.ts | missing required body field 'targetSpec' |
| POST | `/zimbra/platform/{x}/redirection` | OvhCloudZimbra/zimbraplatformredirectionCreatePost.operation.ts | missing required body field 'targetSpec' |

## Opérations sans correspondance spec

Ces opérations appellent un chemin qui ne correspond à aucun endpoint de la spec auditée (souvent un chemin d’une autre version de spec, ou une sur-implantation). Non comptées dans le taux de conformité.

| Spec (version) | Méthode | Chemin | Fichier |
|----------------|--------|--------|---------|
| cloud (v1) | POST | `/cloud/project/{x}/database/cassandra/{x}/backup` | OvhCloudPublicCloud/database/cassandra/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/backup/{x}` | OvhCloudPublicCloud/database/cassandra/backupDeleteDelete.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/cassandra/{x}/certificates` | OvhCloudPublicCloud/database/cassandra/certificateCreatePost.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/cassandra/{x}/node` | OvhCloudPublicCloud/database/cassandra/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/node/{x}` | OvhCloudPublicCloud/database/cassandra/nodeDeleteDelete.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/cassandra/{x}/node/{x}` | OvhCloudPublicCloud/database/cassandra/nodeUpdatePut.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/cassandra/{x}/user/{x}` | OvhCloudPublicCloud/database/cassandra/userUpdatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/aclCreatePost.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/integrationCreatePost.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/aclDeleteDelete.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/integrationDeleteDelete.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionDeleteDelete.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/aclGetGet.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/integrationGetGet.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionGetGet.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/maintenanceGet.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/nodeGetGet.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionUpdatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/kafka/{x}/{x}/apply` | OvhCloudPublicCloud/database/kafka/maintenanceApplyPost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/mongodb/{x}/backup/{x}` | OvhCloudPublicCloud/database/mongodb/backupDeleteDelete.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/mysql/{x}/backup` | OvhCloudPublicCloud/database/mysql/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/mysql/{x}/backup/{x}` | OvhCloudPublicCloud/database/mysql/backupDeleteDelete.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/mysql/{x}/certificates` | OvhCloudPublicCloud/database/mysql/certificateCreatePost.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/mysql/{x}/maintenance` | OvhCloudPublicCloud/database/mysql/maintenanceUpdatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/mysql/{x}/node` | OvhCloudPublicCloud/database/mysql/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/mysql/{x}/node/{x}` | OvhCloudPublicCloud/database/mysql/nodeDeleteDelete.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/mysql/{x}/node/{x}` | OvhCloudPublicCloud/database/mysql/nodeUpdatePut.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/mysql/{x}/user/{x}` | OvhCloudPublicCloud/database/mysql/userUpdatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/postgresql/enableWrites` | OvhCloudPublicCloud/database/postgresql/enableWritesPost.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/postgresql/prometheus/credentials/reset` | OvhCloudPublicCloud/database/postgresql/prometheusCredentialsResetPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project` | OvhCloudPublicCloud/project/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project` | OvhCloudPublicCloud/project/listGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}` | OvhCloudPublicCloud/project/getDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}` | OvhCloudPublicCloud/project/getDetailGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/acl` | OvhCloudPublicCloud/acl/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/acl` | OvhCloudPublicCloud/acl/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/acl/{x}` | OvhCloudPublicCloud/acl/deleteDelete.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/activateMonthlyBilling` | OvhCloudPublicCloud/activateMonthlyBilling/activateMonthlyBillingPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/app` | OvhCloudPublicCloudAi/app/appListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/ai/app` | OvhCloudPublicCloudAi/app/appCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/ai/app/{x}` | OvhCloudPublicCloudAi/app/appDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/app/{x}` | OvhCloudPublicCloudAi/app/appGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/ai/app/{x}` | OvhCloudPublicCloudAi/app/appUpdatePut.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/ai/app/{x}/start` | OvhCloudPublicCloudAi/app/appStartPut.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/ai/app/{x}/stop` | OvhCloudPublicCloudAi/app/appStopPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/data/region/eu/alias` | OvhCloudPublicCloudAi/dataStore/dataListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/job` | OvhCloudPublicCloudAi/job/jobListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/ai/job` | OvhCloudPublicCloudAi/job/jobCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/ai/job/{x}` | OvhCloudPublicCloudAi/job/jobDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/job/{x}` | OvhCloudPublicCloudAi/job/jobGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/notebook` | OvhCloudPublicCloudAi/notebook/notebookListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/ai/notebook` | OvhCloudPublicCloudAi/notebook/notebookCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/ai/notebook/{x}` | OvhCloudPublicCloudAi/notebook/notebookDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/notebook/{x}` | OvhCloudPublicCloudAi/notebook/notebookGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/ai/notebook/{x}/start` | OvhCloudPublicCloudAi/notebook/notebookStartPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ai/registry` | OvhCloudPublicCloudAi/registry/registryListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/ai/registry` | OvhCloudPublicCloudAi/registry/registryCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloud/alerting/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloudAi/alerting/alertListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloud/alerting/createPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloudAi/alerting/alertCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/bill` | OvhCloudPublicCloud/bill/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/backup` | OvhCloudPublicCloud/blockstorage/backupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/blockStorage/backup` | OvhCloudPublicCloud/blockstorage/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/blockStorage/backup/{x}` | OvhCloudPublicCloud/blockstorage/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/backup/{x}` | OvhCloudPublicCloud/blockstorage/backupGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/blockStorage/backup/{x}` | OvhCloudPublicCloud/blockstorage/backupUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/blockStorage/backup/{x}/retention/daily/set` | OvhCloudPublicCloud/blockstorage/backupRetentionDailySetPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/capability/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumeCapabilitiesListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/snapshot` | OvhCloudPublicCloud/blockstorage/snapshotListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/blockStorage/snapshot` | OvhCloudPublicCloud/blockstorage/snapshotCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/blockStorage/snapshot/{x}` | OvhCloudPublicCloud/blockstorage/snapshotDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/snapshot/{x}` | OvhCloudPublicCloud/blockstorage/snapshotGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/blockStorage/snapshot/{x}` | OvhCloudPublicCloud/blockstorage/snapshotUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/volume` | OvhCloudPublicCloud/blockstorage/volumeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/blockStorage/volume` | OvhCloudPublicCloud/blockstorage/volumeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/blockStorage/volume/{x}` | OvhCloudPublicCloud/blockstorage/volumeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/volume/{x}` | OvhCloudPublicCloud/blockstorage/volumeGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/blockStorage/volume/{x}` | OvhCloudPublicCloud/blockstorage/volumeUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/volume/{x}/backupReferences` | OvhCloudPublicCloud/blockstorage/volumeBackupReferenceListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/blockStorage/volume/{x}/stats` | OvhCloudPublicCloud/blockstorage/volumeMonitoringStatsGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cancel` | OvhCloudPublicCloud/cancel/cancelPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities` | OvhCloudPublicCloud/capabilities/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/kube` | OvhCloudPublicCloud/capabilities/listKubeGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/kube/{x}` | OvhCloudPublicCloud/capabilities/getKubeDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer` | OvhCloudPublicCloud/capabilities/listLoadbalancerGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer/{x}` | OvhCloudPublicCloud/capabilities/getLoadbalancerDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/region` | OvhCloudPublicCloud/capabilities/listRegionGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/region/{x}` | OvhCloudPublicCloud/capabilities/getRegionDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/region/{x}/{x}` | OvhCloudPublicCloud/capabilities/getRegionProductDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cassandra/{x}/maintenance` | OvhCloudPublicCloud/database/cassandra/maintenanceUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/changeContact` | OvhCloudPublicCloud/changeContact/changeContactPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse` | OvhCloudPublicCloud/database/clickhouse/clusterListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse` | OvhCloudPublicCloud/database/clickhouse/clusterCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/backup` | OvhCloudPublicCloud/database/clickhouse/backupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse/{x}/backup` | OvhCloudPublicCloud/database/clickhouse/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/backup/{x}` | OvhCloudPublicCloud/database/clickhouse/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/backup/{x}` | OvhCloudPublicCloud/database/clickhouse/backupGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/certificate` | OvhCloudPublicCloud/database/clickhouse/certificateListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse/{x}/certificate` | OvhCloudPublicCloud/database/clickhouse/certificateCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/integration` | OvhCloudPublicCloud/database/clickhouse/integrationListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse/{x}/integration` | OvhCloudPublicCloud/database/clickhouse/integrationCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/ipRestriction` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse/{x}/ipRestriction` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/log/subscription` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse/{x}/log/subscription` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/maintenance` | OvhCloudPublicCloud/database/clickhouse/maintenanceGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/maintenance` | OvhCloudPublicCloud/database/clickhouse/maintenanceUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/metric` | OvhCloudPublicCloud/database/clickhouse/metricGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/node` | OvhCloudPublicCloud/database/clickhouse/nodeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse/{x}/node` | OvhCloudPublicCloud/database/clickhouse/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/prometheus` | OvhCloudPublicCloud/database/clickhouse/prometheusGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/user` | OvhCloudPublicCloud/database/clickhouse/userListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/clickhouse/{x}/user` | OvhCloudPublicCloud/database/clickhouse/userCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup` | OvhCloudPublicCloud/database/kafkaConnect/backupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup` | OvhCloudPublicCloud/database/kafkaConnect/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaConnect/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaConnect/backupGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/certificate` | OvhCloudPublicCloud/database/kafkaConnect/certificateListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/certificate` | OvhCloudPublicCloud/database/kafkaConnect/certificateCreatePost.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaConnect/maintenanceUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node` | OvhCloudPublicCloud/database/kafkaConnect/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaConnect/nodeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaConnect/nodeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaConnect/nodeUpdatePut.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaConnect/userUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/certificate` | OvhCloudPublicCloud/database/kafkaMirrorMaker/certificateListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/certificate` | OvhCloudPublicCloud/database/kafkaMirrorMaker/certificateCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/ipRestriction` | OvhCloudPublicCloud/database/kafkaMirrorMaker/ipRestrictionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/ipRestriction` | OvhCloudPublicCloud/database/kafkaMirrorMaker/ipRestrictionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaMirrorMaker/maintenanceGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaMirrorMaker/maintenanceUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/metric` | OvhCloudPublicCloud/database/kafkaMirrorMaker/metricGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/prometheus` | OvhCloudPublicCloud/database/kafkaMirrorMaker/prometheusGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator` | OvhCloudPublicCloud/database/m3aggregator/clusterListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator` | OvhCloudPublicCloud/database/m3aggregator/clusterCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup` | OvhCloudPublicCloud/database/m3aggregator/backupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup` | OvhCloudPublicCloud/database/m3aggregator/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3aggregator/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3aggregator/backupGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/certificate` | OvhCloudPublicCloud/database/m3aggregator/certificateListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/certificate` | OvhCloudPublicCloud/database/m3aggregator/certificateCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3aggregator/ipRestrictionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3aggregator/ipRestrictionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/log/subscription` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/log/subscription` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/maintenance` | OvhCloudPublicCloud/database/m3aggregator/maintenanceGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/maintenance` | OvhCloudPublicCloud/database/m3aggregator/maintenanceUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/metric` | OvhCloudPublicCloud/database/m3aggregator/metricGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node` | OvhCloudPublicCloud/database/m3aggregator/nodeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node` | OvhCloudPublicCloud/database/m3aggregator/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node/{x}` | OvhCloudPublicCloud/database/m3aggregator/nodeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node/{x}` | OvhCloudPublicCloud/database/m3aggregator/nodeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node/{x}` | OvhCloudPublicCloud/database/m3aggregator/nodeUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/prometheus` | OvhCloudPublicCloud/database/m3aggregator/prometheusGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user` | OvhCloudPublicCloud/database/m3aggregator/userListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user` | OvhCloudPublicCloud/database/m3aggregator/userCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user/{x}` | OvhCloudPublicCloud/database/m3aggregator/userDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user/{x}` | OvhCloudPublicCloud/database/m3aggregator/userGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user/{x}` | OvhCloudPublicCloud/database/m3aggregator/userUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db` | OvhCloudPublicCloud/database/m3db/clusterListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3db` | OvhCloudPublicCloud/database/m3db/clusterCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/clusterDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/clusterGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/clusterUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup` | OvhCloudPublicCloud/database/m3db/backupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup` | OvhCloudPublicCloud/database/m3db/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3db/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3db/backupGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/certificate` | OvhCloudPublicCloud/database/m3db/certificateListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/certificate` | OvhCloudPublicCloud/database/m3db/certificateCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3db/ipRestrictionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3db/ipRestrictionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/log/subscription` | OvhCloudPublicCloud/database/m3db/logSubscriptionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/log/subscription` | OvhCloudPublicCloud/database/m3db/logSubscriptionCreatePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3db/logSubscriptionGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/maintenance` | OvhCloudPublicCloud/database/m3db/maintenanceGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}/maintenance` | OvhCloudPublicCloud/database/m3db/maintenanceUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/metric` | OvhCloudPublicCloud/database/m3db/metricGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node` | OvhCloudPublicCloud/database/m3db/nodeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node` | OvhCloudPublicCloud/database/m3db/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node/{x}` | OvhCloudPublicCloud/database/m3db/nodeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node/{x}` | OvhCloudPublicCloud/database/m3db/nodeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node/{x}` | OvhCloudPublicCloud/database/m3db/nodeUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/prometheus` | OvhCloudPublicCloud/database/m3db/prometheusGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user` | OvhCloudPublicCloud/database/m3db/userListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user` | OvhCloudPublicCloud/database/m3db/userCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/userDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/userGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/userUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey` | OvhCloudPublicCloud/database/valkey/clusterListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey` | OvhCloudPublicCloud/database/valkey/clusterCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/clusterDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/backupListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/certificateListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/clusterGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/integrationListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/ipRestrictionListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/logSubscriptionListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/maintenanceGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/metricGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/nodeListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/prometheusGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/userListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/backupCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/certificateCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/integrationCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/ipRestrictionCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/logSubscriptionCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/nodeCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/userCreatePost.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/clusterUpdatePut.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/maintenanceUpdatePut.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}/backup/{x}` | OvhCloudPublicCloud/database/valkey/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/backup/{x}` | OvhCloudPublicCloud/database/valkey/backupGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/valkey/logSubscriptionGetGet.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}/node/{x}` | OvhCloudPublicCloud/database/valkey/nodeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/node/{x}` | OvhCloudPublicCloud/database/valkey/nodeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}/node/{x}` | OvhCloudPublicCloud/database/valkey/nodeUpdatePut.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}/user/{x}` | OvhCloudPublicCloud/database/valkey/userDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/user/{x}` | OvhCloudPublicCloud/database/valkey/userGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}/user/{x}` | OvhCloudPublicCloud/database/valkey/userUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/confirmTermination` | OvhCloudPublicCloud/confirmTermination/confirmTerminationPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/user` | OvhCloudPublicCloud/containerRegistry/listUsersGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/user` | OvhCloudPublicCloud/containerRegistry/createUserPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/user/{x}` | OvhCloudPublicCloud/containerRegistry/deleteUserDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/user/{x}` | OvhCloudPublicCloud/containerRegistry/getUserDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/credit` | OvhCloudPublicCloud/credit/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/credit/{x}` | OvhCloudPublicCloud/credit/getDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/flavor` | OvhCloudPublicCloud/flavor/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/flavor/{x}` | OvhCloudPublicCloud/flavor/getDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/image` | OvhCloudPublicCloud/image/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/image/{x}` | OvhCloudPublicCloud/image/getDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/instance` | OvhCloudPublicCloud/instance/instanceListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/instance` | OvhCloudPublicCloud/instance/instanceCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/instance/bulk` | OvhCloudPublicCloud/instance/instanceBulkPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/instance/group` | OvhCloudPublicCloud/instance/instanceGroupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/instance/group` | OvhCloudPublicCloud/instance/instanceGroupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/instance/group/{x}` | OvhCloudPublicCloud/instance/instanceGroupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/instance/group/{x}` | OvhCloudPublicCloud/instance/instanceGroupGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ip` | OvhCloudPublicCloud/ip/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/ip` | OvhCloudPublicCloud/ip/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/ip/{x}` | OvhCloudPublicCloud/ip/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/ip/{x}` | OvhCloudPublicCloud/ip/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/ip/{x}` | OvhCloudPublicCloud/ip/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/kafka/{x}/backup` | OvhCloudPublicCloud/database/kafka/backupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/kafka/{x}/backup` | OvhCloudPublicCloud/database/kafka/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/kafka/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafka/backupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/kafka/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafka/backupGetGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/kafka/{x}/certificate` | OvhCloudPublicCloud/database/kafka/certificateCreatePost.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/kafka/{x}/maintenance` | OvhCloudPublicCloud/database/kafka/maintenanceUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/kafka/{x}/node` | OvhCloudPublicCloud/database/kafka/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/kafka/{x}/node/{x}` | OvhCloudPublicCloud/database/kafka/nodeDeleteDelete.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/kafka/{x}/node/{x}` | OvhCloudPublicCloud/database/kafka/nodeUpdatePut.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/kafka/{x}/user/{x}` | OvhCloudPublicCloud/database/kafka/userUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/lab` | OvhCloudPublicCloud/lab/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/lab` | OvhCloudPublicCloud/lab/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/privateNetwork` | OvhCloudPublicCloud/network/listPrivateNetworksGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/network/privateNetwork` | OvhCloudPublicCloud/network/createPrivateNetworkPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/network/privateNetwork/{x}` | OvhCloudPublicCloud/network/deletePrivateNetworkDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/privateNetwork/{x}` | OvhCloudPublicCloud/network/getPrivateNetworkDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/network/privateNetwork/{x}` | OvhCloudPublicCloud/network/updatePrivateNetworkPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/publicNetwork` | OvhCloudPublicCloud/network/listPublicNetworksGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/subnet` | OvhCloudPublicCloud/network/listSubnetsGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/network/subnet` | OvhCloudPublicCloud/network/createSubnetPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/deleteSubnetDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/getSubnetDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/updateSubnetPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/operation` | OvhCloudPublicCloud/operation/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/operation/{x}` | OvhCloudPublicCloud/operation/getDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities` | OvhCloudPublicCloud/quantum/listCapabilitiesGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities/region` | OvhCloudPublicCloud/quantum/listCapabilitiesRegionGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities/region/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesRegionDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quota` | OvhCloudPublicCloud/quota/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher` | OvhCloudPublicCloud/rancher/serviceListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher` | OvhCloudPublicCloud/rancher/serviceListGetV2.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/rancher` | OvhCloudPublicCloud/rancher/serviceCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/rancher` | OvhCloudPublicCloud/rancher/serviceCreatePostV2.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceDeleteDelete.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceDeleteDeleteV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceGetGetV2.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceUpdatePut.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/rancher/{x}` | OvhCloudPublicCloud/rancher/serviceUpdatePutV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/adminCredentials` | OvhCloudPublicCloud/rancher/adminCredentials.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/rancher/{x}/adminCredentials` | OvhCloudPublicCloud/rancher/adminCredentials.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/rancher/{x}/adminCredentials` | OvhCloudPublicCloud/rancher/adminCredentialsResetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/capabilities/plan` | OvhCloudPublicCloud/rancher/planCapabilityListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/capabilities/plan` | OvhCloudPublicCloud/rancher/planCapabilityListGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/capabilities/version` | OvhCloudPublicCloud/rancher/versionCapabilityListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/capabilities/version` | OvhCloudPublicCloud/rancher/versionCapabilityListGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/event` | OvhCloudPublicCloud/rancher/eventListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/event` | OvhCloudPublicCloud/rancher/eventListGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/task` | OvhCloudPublicCloud/rancher/taskListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/task` | OvhCloudPublicCloud/rancher/taskListGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/task/{x}` | OvhCloudPublicCloud/rancher/taskDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/rancher/{x}/task/{x}` | OvhCloudPublicCloud/rancher/taskDetailGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/reference/rancher/plan` | OvhCloudPublicCloud/rancher/referencePlanListGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/reference/rancher/version` | OvhCloudPublicCloud/rancher/referenceVersionListGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region` | OvhCloudPublicCloud/region/regionListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}` | OvhCloudPublicCloud/region/regionGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/workflow/backup` | OvhCloudPublicCloud/region/regionWorkflowBackupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/regionAvailable` | OvhCloudPublicCloud/regionAvailable/checkRegionAvailableGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/retain` | OvhCloudPublicCloud/retain/retainPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/role` | OvhCloudPublicCloud/role/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/serviceInfos` | OvhCloudPublicCloud/serviceInfos/getServiceInfosGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/snapshot` | OvhCloudPublicCloud/snapshot/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/snapshot` | OvhCloudPublicCloud/snapshot/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/snapshot/{x}` | OvhCloudPublicCloud/snapshot/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/sshkey` | OvhCloudPublicCloud/sshkey/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/sshkey` | OvhCloudPublicCloud/sshkey/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/sshkey/{x}` | OvhCloudPublicCloud/sshkey/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/storage` | OvhCloudPublicCloud/storage/listGet.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/storage/{x}` | OvhCloudPublicCloud/storage/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/storage/{x}` | OvhCloudPublicCloud/storage/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/storage/{x}` | OvhCloudPublicCloud/storage/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/storage/{x}/container` | OvhCloudPublicCloud/storage/listContainersGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/storage/{x}/container` | OvhCloudPublicCloud/storage/createContainerPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/storage/{x}/container/{x}` | OvhCloudPublicCloud/storage/deleteContainerDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/storage/{x}/container/{x}` | OvhCloudPublicCloud/storage/getContainerDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/storage/{x}/container/{x}` | OvhCloudPublicCloud/storage/updateContainerPut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/terminate` | OvhCloudPublicCloud/terminate/terminatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/unleash` | OvhCloudPublicCloud/unleash/unleashPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/current` | OvhCloudPublicCloud/usage/getCurrentGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/forecast` | OvhCloudPublicCloud/usage/getForecastGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/history` | OvhCloudPublicCloud/usage/listHistoryGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/history/{x}` | OvhCloudPublicCloud/usage/getHistoryDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/createPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/vrack` | OvhCloudPublicCloud/vrack/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/blockStorage/capability/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumeCapabilityListGetByRegionNameGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/blockStorage/plan/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumePlanCapabilityListGetByRegionNameGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/capabilities/kubernetes` | OvhCloudPublicCloudAi/capabilities/kube/kubeListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/capabilities/kubernetes/{x}` | OvhCloudPublicCloudAi/capabilities/kube/kubeGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/capabilities/loadBalancer/getByRegionName` | OvhCloudPublicCloudAi/capabilities/loadbalancer/lbDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/rancher/plan` | OvhCloudPublicCloud/rancher/globalReferencePlanListGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/rancher/version` | OvhCloudPublicCloud/rancher/globalReferenceVersionListGetV2.operation.ts |
| cluster (v1) | GET | `/cluster` | OvhCloudCluster/clusterListGet.operation.ts |
| cluster (v1) | DELETE | `/cluster/{x}` | OvhCloudCluster/clusterDeleteDelete.operation.ts |
| cluster (v1) | GET | `/cluster/{x}` | OvhCloudCluster/clusterGetGet.operation.ts |
| cluster (v1) | PUT | `/cluster/{x}` | OvhCloudCluster/clusterUpdatePut.operation.ts |
| cluster (v1) | POST | `/cluster/{x}/reinstall` | OvhCloudCluster/reinstallPost.operation.ts |
| cluster (v1) | GET | `/cluster/{x}/serviceInfos` | OvhCloudCluster/serviceInfosGetGet.operation.ts |
| cluster (v1) | GET | `/cluster/{x}/task` | OvhCloudCluster/taskListGet.operation.ts |
| cluster (v1) | GET | `/cluster/{x}/task/{x}` | OvhCloudCluster/taskGetGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/cluster` | OvhCloudDedicated/resources/cluster/clusterListGet.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/cluster/{x}` | OvhCloudDedicated/resources/cluster/clusterDeleteDelete.operation.ts |
| dedicated (v1) | GET | `/dedicated/cluster/{x}` | OvhCloudDedicated/resources/cluster/clusterGetGet.operation.ts |
| dedicated (v1) | PUT | `/dedicated/cluster/{x}` | OvhCloudDedicated/resources/cluster/clusterUpdatePut.operation.ts |
| dedicated (v1) | GET | `/dedicated/cluster/{x}/node` | OvhCloudDedicated/resources/cluster/nodeListGet.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/cluster/{x}/node/{x}` | OvhCloudDedicated/resources/cluster/nodeDeleteDelete.operation.ts |
| dedicated (v1) | GET | `/dedicated/cluster/{x}/node/{x}` | OvhCloudDedicated/resources/cluster/nodeGetGet.operation.ts |
| dedicated (v1) | PUT | `/dedicated/cluster/{x}/node/{x}` | OvhCloudDedicated/resources/cluster/nodeUpdatePut.operation.ts |
| dedicated (v1) | GET | `/dedicated/housing` | OvhCloudDedicated/resources/housing/housingListGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/housing/{x}` | OvhCloudDedicated/resources/housing/housingGetGet.operation.ts |
| dedicated (v1) | PUT | `/dedicated/housing/{x}` | OvhCloudDedicated/resources/housing/housingUpdatePut.operation.ts |
| dedicated (v1) | GET | `/dedicated/housing/{x}/bandwidth` | OvhCloudDedicated/resources/housing/bandwidthGetGet.operation.ts |
| dedicated (v1) | POST | `/dedicated/housing/{x}/bandwidth` | OvhCloudDedicated/resources/housing/bandwidthCreatePost.operation.ts |
| dedicated (v1) | GET | `/dedicated/housing/{x}/bandwidthvRack` | OvhCloudDedicated/resources/housing/bandwidthVrackGetGet.operation.ts |
| dedicated (v1) | POST | `/dedicated/housing/{x}/bandwidthvRack` | OvhCloudDedicated/resources/housing/bandwidthVrackCreatePost.operation.ts |
| dedicated (v1) | GET | `/dedicated/installationTemplate` | OvhCloudDedicated/resources/installation/templateListGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/installationTemplate/{x}` | OvhCloudDedicated/resources/installation/templateGetGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/nasha` | OvhCloudDedicated/resources/ceph/nashaListGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/nasha/{x}` | OvhCloudDedicated/resources/ceph/nashaGetGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/nasha/{x}/share` | OvhCloudDedicated/resources/ceph/shareListGet.operation.ts |
| dedicated (v1) | POST | `/dedicated/nasha/{x}/share` | OvhCloudDedicated/resources/ceph/shareCreatePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/nasha/{x}/share/{x}` | OvhCloudDedicated/resources/ceph/shareDeleteDelete.operation.ts |
| dedicated (v1) | GET | `/dedicated/nasha/{x}/share/{x}` | OvhCloudDedicated/resources/ceph/shareGetGet.operation.ts |
| dedicated (v1) | PUT | `/dedicated/nasha/{x}/share/{x}` | OvhCloudDedicated/resources/ceph/shareUpdatePut.operation.ts |
| dedicated (v1) | GET | `/dedicated/nasha/{x}/snapshot` | OvhCloudDedicated/resources/ceph/snapshotListGet.operation.ts |
| dedicated (v1) | POST | `/dedicated/nasha/{x}/snapshot` | OvhCloudDedicated/resources/ceph/snapshotCreatePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/nasha/{x}/snapshot/{x}` | OvhCloudDedicated/resources/ceph/snapshotDeleteDelete.operation.ts |
| dedicated (v1) | GET | `/dedicated/nasha/{x}/snapshot/{x}` | OvhCloudDedicated/resources/ceph/snapshotGetGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/server/{x}/features/backupCloud/get/{x}` | OvhCloudDedicated/resources/backupCloudGetByIdGet.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/features/backupFTP/access/delete?ipBlock={x}` | OvhCloudDedicated/resources/backupFtpAccessDelete.operation.ts |
| dedicated (v1) | PUT | `/dedicated/server/{x}/features/backupFTP/access/edit?ipBlock={x}` | OvhCloudDedicated/resources/backupFtpAccessEditPut.operation.ts |
| dedicated (v1) | POST | `/dedicated/server/{x}/install` | OvhCloudDedicated/resources/installation/installPost.operation.ts |
| dedicated (v1) | GET | `/dedicated/server/{x}/monitoring` | OvhCloudDedicated/resources/monitoring/monitoringGetGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/server/{x}/monitoring/{x}` | OvhCloudDedicated/resources/monitoring/monitoringMetricGetGet.operation.ts |
| dedicated (v1) | PUT | `/dedicated/server/{x}/netboot/order` | OvhCloudDedicated/resources/netbootOrderPut.operation.ts |
| dedicated (v1) | POST | `/dedicated/server/{x}/option/{x}` | OvhCloudDedicated/resources/option/optionCreatePost.operation.ts |
| domain (v2) | GET | `/domain` | OvhCloudDomain/resources/root/domainListGet.operation.ts |
| domain (v2) | GET | `/domain/{x}` | OvhCloudDomain/resources/service/domainGetGet.operation.ts |
| domain (v2) | PUT | `/domain/{x}` | OvhCloudDomain/resources/service/domainUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/{x}/authInfo` | OvhCloudDomain/resources/service/domainAuthInfoGetGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/changeContact` | OvhCloudDomain/resources/service/domainChangeContactPost.operation.ts |
| domain (v2) | GET | `/domain/{x}/configurations/obfuscatedEmails` | OvhCloudDomain/resources/service/configurations/domainConfigurationsObfuscatedEmailsGetGet.operation.ts |
| domain (v2) | PUT | `/domain/{x}/configurations/obfuscatedEmails` | OvhCloudDomain/resources/service/configurations/domainConfigurationsObfuscatedEmailsUpdatePut.operation.ts |
| domain (v2) | POST | `/domain/{x}/configurations/obfuscatedEmails/refresh` | OvhCloudDomain/resources/service/configurations/domainConfigurationsObfuscatedEmailsRefreshPost.operation.ts |
| domain (v2) | GET | `/domain/{x}/configurations/optin` | OvhCloudDomain/resources/service/configurations/domainConfigurationsOptinGetGet.operation.ts |
| domain (v2) | PUT | `/domain/{x}/configurations/optin` | OvhCloudDomain/resources/service/configurations/domainConfigurationsOptinUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/{x}/dsRecord` | OvhCloudDomain/resources/service/dsRecord/domainDsRecordListGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/dsRecord` | OvhCloudDomain/resources/service/dsRecord/domainDsRecordCreatePost.operation.ts |
| domain (v2) | GET | `/domain/{x}/dsRecord/{x}` | OvhCloudDomain/resources/service/dsRecord/domainDsRecordGetGet.operation.ts |
| domain (v2) | GET | `/domain/{x}/glueRecord` | OvhCloudDomain/resources/service/glueRecord/domainGlueRecordListGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/glueRecord` | OvhCloudDomain/resources/service/glueRecord/domainGlueRecordCreatePost.operation.ts |
| domain (v2) | DELETE | `/domain/{x}/glueRecord/{x}` | OvhCloudDomain/resources/service/glueRecord/domainGlueRecordDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/{x}/glueRecord/{x}` | OvhCloudDomain/resources/service/glueRecord/domainGlueRecordGetGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/glueRecord/{x}/update` | OvhCloudDomain/resources/service/glueRecord/domainGlueRecordUpdatePost.operation.ts |
| domain (v2) | GET | `/domain/{x}/nameServer` | OvhCloudDomain/resources/service/nameServer/domainNameServerListGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/nameServer` | OvhCloudDomain/resources/service/nameServer/domainNameServerCreatePost.operation.ts |
| domain (v2) | DELETE | `/domain/{x}/nameServer/{x}` | OvhCloudDomain/resources/service/nameServer/domainNameServerDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/{x}/nameServer/{x}` | OvhCloudDomain/resources/service/nameServer/domainNameServerGetGet.operation.ts |
| domain (v2) | GET | `/domain/{x}/nameServer/{x}/status` | OvhCloudDomain/resources/service/nameServer/domainNameServerStatusGetGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/nameServers/update` | OvhCloudDomain/resources/service/nameServer/domainNameServersUpdatePost.operation.ts |
| domain (v2) | GET | `/domain/{x}/option` | OvhCloudDomain/resources/service/domainOptionListGet.operation.ts |
| domain (v2) | DELETE | `/domain/{x}/option/{x}` | OvhCloudDomain/resources/service/domainOptionDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/{x}/option/{x}` | OvhCloudDomain/resources/service/domainOptionGetGet.operation.ts |
| domain (v2) | GET | `/domain/{x}/options` | OvhCloudDomain/resources/service/domainOptionsGetGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/outgoingTransfer/approve` | OvhCloudDomain/resources/service/domainOutgoingTransferApprovePost.operation.ts |
| domain (v2) | GET | `/domain/{x}/rules/emailsObfuscation` | OvhCloudDomain/resources/service/domainRulesEmailsObfuscationGetGet.operation.ts |
| domain (v2) | GET | `/domain/{x}/rules/optin` | OvhCloudDomain/resources/service/domainRulesOptinGetGet.operation.ts |
| domain (v2) | GET | `/domain/{x}/serviceInfos` | OvhCloudDomain/resources/service/domainServiceInfosGetGet.operation.ts |
| domain (v2) | PUT | `/domain/{x}/serviceInfos` | OvhCloudDomain/resources/service/domainServiceInfosUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/{x}/task` | OvhCloudDomain/resources/service/task/domainTaskListGet.operation.ts |
| domain (v2) | GET | `/domain/{x}/task/{x}` | OvhCloudDomain/resources/service/task/domainTaskGetGet.operation.ts |
| domain (v2) | POST | `/domain/{x}/task/{x}/accelerate` | OvhCloudDomain/resources/service/task/domainTaskAcceleratePost.operation.ts |
| domain (v2) | POST | `/domain/{x}/task/{x}/cancel` | OvhCloudDomain/resources/service/task/domainTaskCancelPost.operation.ts |
| domain (v2) | POST | `/domain/{x}/task/{x}/relaunch` | OvhCloudDomain/resources/service/task/domainTaskRelaunchPost.operation.ts |
| domain (v2) | POST | `/domain/{x}/ukOutgoingTransfer` | OvhCloudDomain/resources/service/domainUkOutgoingTransferPost.operation.ts |
| domain (v2) | GET | `/domain/{x}/ukRegistrars` | OvhCloudDomain/resources/service/domainUkRegistrarsListGet.operation.ts |
| domain (v1) | GET | `/domain/alldom` | OvhCloudDomain/resources/alldom/domainAlldomListGet.operation.ts |
| domain (v1) | GET | `/domain/alldom/{x}` | OvhCloudDomain/resources/alldom/domainAlldomGetGet.operation.ts |
| domain (v1) | GET | `/domain/alldom/{x}/task` | OvhCloudDomain/resources/alldom/domainAlldomTaskListGet.operation.ts |
| domain (v1) | GET | `/domain/alldom/{x}/task/{x}` | OvhCloudDomain/resources/alldom/domainAlldomTaskGetGet.operation.ts |
| domain (v2) | GET | `/domain/configurationRule` | OvhCloudDomain/resources/root/domainConfigurationRuleListGet.operation.ts |
| domain (v2) | POST | `/domain/configurationRule/check` | OvhCloudDomain/resources/root/domainConfigurationRuleCheckPost.operation.ts |
| domain (v2) | GET | `/domain/contact` | OvhCloudDomain/resources/root/domainContactListGet.operation.ts |
| domain (v2) | POST | `/domain/contact` | OvhCloudDomain/resources/root/domainContactCreatePost.operation.ts |
| domain (v2) | GET | `/domain/contact/{x}` | OvhCloudDomain/resources/root/domainContactGetGet.operation.ts |
| domain (v2) | PUT | `/domain/contact/{x}` | OvhCloudDomain/resources/root/domainContactUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/data/claimNotice` | OvhCloudDomain/resources/root/domainDataClaimNoticeGetGet.operation.ts |
| domain (v2) | GET | `/domain/data/extension` | OvhCloudDomain/resources/root/domainDataExtensionListGet.operation.ts |
| domain (v2) | GET | `/domain/data/smd` | OvhCloudDomain/resources/root/domainDataSmdListGet.operation.ts |
| domain (v2) | POST | `/domain/data/smd` | OvhCloudDomain/resources/root/domainDataSmdCreatePost.operation.ts |
| domain (v2) | DELETE | `/domain/data/smd/{x}` | OvhCloudDomain/resources/root/domainDataSmdDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/data/smd/{x}` | OvhCloudDomain/resources/root/domainDataSmdGetGet.operation.ts |
| domain (v2) | PUT | `/domain/data/smd/{x}` | OvhCloudDomain/resources/root/domainDataSmdUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/extensions` | OvhCloudDomain/resources/root/domainExtensionsListGet.operation.ts |
| domain (v2) | GET | `/domain/extensions/{x}` | OvhCloudDomain/resources/root/domainExtensionsGetGet.operation.ts |
| domain (v2) | GET | `/domain/extensions/{x}/registryConfigurations` | OvhCloudDomain/resources/root/domainExtensionsRegistryConfigurationsGetGet.operation.ts |
| domain (v2) | GET | `/domain/extensions/byCategory` | OvhCloudDomain/resources/root/domainExtensionsByCategoryListGet.operation.ts |
| domain (v2) | GET | `/domain/extensions/highlighted` | OvhCloudDomain/resources/root/domainExtensionsHighlightedListGet.operation.ts |
| domain (v2) | GET | `/domain/extensions/pricingAttributes` | OvhCloudDomain/resources/root/domainExtensionsPricingAttributesListGet.operation.ts |
| domain (v1) | GET | `/domain/name` | OvhCloudDomain/resources/name/domainNameListGet.operation.ts |
| domain (v1) | GET | `/domain/name/{x}` | OvhCloudDomain/resources/name/domainNameGetGet.operation.ts |
| domain (v1) | PUT | `/domain/name/{x}` | OvhCloudDomain/resources/name/domainNameUpdatePut.operation.ts |
| domain (v1) | GET | `/domain/name/{x}/task` | OvhCloudDomain/resources/name/domainNameTaskListGet.operation.ts |
| domain (v1) | GET | `/domain/name/{x}/task/{x}` | OvhCloudDomain/resources/name/domainNameTaskGetGet.operation.ts |
| domain (v2) | GET | `/domain/zone` | OvhCloudDomain/resources/zone/domainZoneListGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}` | OvhCloudDomain/resources/zone/domainZoneGetGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/capabilities` | OvhCloudDomain/resources/zone/domainZoneCapabilitiesGetGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/changeContact` | OvhCloudDomain/resources/zone/domainZoneChangeContactPost.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/confirmTermination` | OvhCloudDomain/resources/zone/domainZoneConfirmTerminationPost.operation.ts |
| domain (v2) | DELETE | `/domain/zone/{x}/dnssec` | OvhCloudDomain/resources/zone/domainZoneDnssecDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/dnssec` | OvhCloudDomain/resources/zone/domainZoneDnssecGetGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/dnssec` | OvhCloudDomain/resources/zone/domainZoneDnssecEnablePost.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/dynHost/login` | OvhCloudDomain/resources/zone/domainZoneDynHostLoginListGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/dynHost/login` | OvhCloudDomain/resources/zone/domainZoneDynHostLoginCreatePost.operation.ts |
| domain (v2) | DELETE | `/domain/zone/{x}/dynHost/login/{x}` | OvhCloudDomain/resources/zone/domainZoneDynHostLoginDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/dynHost/login/{x}` | OvhCloudDomain/resources/zone/domainZoneDynHostLoginGetGet.operation.ts |
| domain (v2) | PUT | `/domain/zone/{x}/dynHost/login/{x}` | OvhCloudDomain/resources/zone/domainZoneDynHostLoginUpdatePut.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/dynHost/login/{x}/changePassword` | OvhCloudDomain/resources/zone/domainZoneDynHostLoginChangeContactPost.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/dynHost/record` | OvhCloudDomain/resources/zone/domainZoneDynHostRecordListGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/dynHost/record` | OvhCloudDomain/resources/zone/domainZoneDynHostRecordCreatePost.operation.ts |
| domain (v2) | DELETE | `/domain/zone/{x}/dynHost/record/{x}` | OvhCloudDomain/resources/zone/domainZoneDynHostRecordDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/dynHost/record/{x}` | OvhCloudDomain/resources/zone/domainZoneDynHostRecordGetGet.operation.ts |
| domain (v2) | PUT | `/domain/zone/{x}/dynHost/record/{x}` | OvhCloudDomain/resources/zone/domainZoneDynHostRecordUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/export` | OvhCloudDomain/resources/zone/domainZoneExportGetGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/history` | OvhCloudDomain/resources/zone/domainZoneHistoryListGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/history/{x}` | OvhCloudDomain/resources/zone/domainZoneHistoryGetGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/history/{x}/restore` | OvhCloudDomain/resources/zone/domainZoneHistoryRestorePost.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/import` | OvhCloudDomain/resources/zone/domainZoneImportPost.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/option` | OvhCloudDomain/resources/zone/domainZoneOptionListGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/option/{x}` | OvhCloudDomain/resources/zone/domainZoneOptionGetGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/option/{x}/serviceInfos` | OvhCloudDomain/resources/zone/domainZoneOptionServiceInfosGetGet.operation.ts |
| domain (v2) | PUT | `/domain/zone/{x}/option/{x}/serviceInfos` | OvhCloudDomain/resources/zone/domainZoneOptionServiceInfosUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/record` | OvhCloudDomain/resources/zone/domainZoneRecordListGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/record` | OvhCloudDomain/resources/zone/domainZoneRecordCreatePost.operation.ts |
| domain (v2) | DELETE | `/domain/zone/{x}/record/{x}` | OvhCloudDomain/resources/zone/domainZoneRecordDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/record/{x}` | OvhCloudDomain/resources/zone/domainZoneRecordGetGet.operation.ts |
| domain (v2) | PUT | `/domain/zone/{x}/record/{x}` | OvhCloudDomain/resources/zone/domainZoneRecordUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/redirection` | OvhCloudDomain/resources/zone/domainZoneRedirectionListGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/redirection` | OvhCloudDomain/resources/zone/domainZoneRedirectionCreatePost.operation.ts |
| domain (v2) | DELETE | `/domain/zone/{x}/redirection/{x}` | OvhCloudDomain/resources/zone/domainZoneRedirectionDeleteDelete.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/redirection/{x}` | OvhCloudDomain/resources/zone/domainZoneRedirectionGetGet.operation.ts |
| domain (v2) | PUT | `/domain/zone/{x}/redirection/{x}` | OvhCloudDomain/resources/zone/domainZoneRedirectionUpdatePut.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/refresh` | OvhCloudDomain/resources/zone/domainZoneRefreshPost.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/reset` | OvhCloudDomain/resources/zone/domainZoneResetPost.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/serviceInfos` | OvhCloudDomain/resources/zone/domainZoneServiceInfosGetGet.operation.ts |
| domain (v2) | PUT | `/domain/zone/{x}/serviceInfos` | OvhCloudDomain/resources/zone/domainZoneServiceInfosUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/soa` | OvhCloudDomain/resources/zone/domainZoneSoaGetGet.operation.ts |
| domain (v2) | PUT | `/domain/zone/{x}/soa` | OvhCloudDomain/resources/zone/domainZoneSoaUpdatePut.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/status` | OvhCloudDomain/resources/zone/domainZoneStatusGetGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/task` | OvhCloudDomain/resources/zone/domainZoneTaskListGet.operation.ts |
| domain (v2) | GET | `/domain/zone/{x}/task/{x}` | OvhCloudDomain/resources/zone/domainZoneTaskGetGet.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/task/{x}/accelerate` | OvhCloudDomain/resources/zone/domainZoneTaskAcceleratePost.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/task/{x}/cancel` | OvhCloudDomain/resources/zone/domainZoneTaskCancelPost.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/task/{x}/relaunch` | OvhCloudDomain/resources/zone/domainZoneTaskRelaunchPost.operation.ts |
| domain (v2) | POST | `/domain/zone/{x}/terminate` | OvhCloudDomain/resources/zone/domainZoneTerminatePost.operation.ts |
| email (v1) | GET | `/email/mxplan` | OvhCloudMxPlan/resources/mxplan/mxPlanListGet.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}` | OvhCloudMxPlan/resources/mxplan/mxPlanDeleteDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}` | OvhCloudMxPlan/resources/mxplan/mxPlanGetGet.operation.ts |
| email (v1) | PUT | `/email/mxplan/{x}` | OvhCloudMxPlan/resources/mxplan/mxPlanUpdatePut.operation.ts |
| email (v1) | PUT | `/email/pro/{x}/suspendStatus` | OvhCloudEmailPro/resources/updateSuspendStatusByServiceNamePut.operation.ts |
| email (v1) | GET | `/email/pro/{x}/tasks` | OvhCloudEmailPro/resources/taskListGet.operation.ts |
| email (v1) | GET | `/email/pro/{x}/tasks/{x}` | OvhCloudEmailPro/resources/taskGetGet.operation.ts |
| freefax (v1) | GET | `/freefax/{x}/directory/getDirectoryServiceCode?apeCode={x}` | OvhCloudFreefax/resources/directoryGetDirectoryServiceCodeGet.operation.ts |
| hosting (v1) | PUT | `/hosting/web/{x}/database/{x}` | OvhCloudHosting/database/databaseUpdatePut.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/database/create` | OvhCloudHosting/databaseCreatePost.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/database/delete` | OvhCloudHosting/databaseDelete.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/email` | OvhCloudHosting/email/createPost.operation.ts |
| hosting (v1) | DELETE | `/hosting/web/{x}/email/{x}` | OvhCloudHosting/email/deleteDelete.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/env/set` | OvhCloudHosting/envVarSetCreate.operation.ts |
| hosting (v1) | PUT | `/hosting/web/{x}/module/{x}` | OvhCloudHosting/module/updatePut.operation.ts |
| hosting (v1) | GET | `/hosting/web/{x}/privateDatabase/{x}` | OvhCloudHosting/privateDatabase/getGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/{x}/ssl/{x}` | OvhCloudHosting/sslService/getGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/ssl/defaultSslCertificate` | OvhCloudHosting/defaultSslCertificateCreate.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/ssl/importCustomCertificate` | OvhCloudHosting/importCustomCertificateCreate.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/user/update` | OvhCloudHosting/userUpdatePut.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}` | OvhCloudHosting/cdn/cdnGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/availableOptions` | OvhCloudHosting/cdn/cdnAvailableOptionsGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/domain` | OvhCloudHosting/cdn/cdnDomainListGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/cdn/{x}/domain` | OvhCloudHosting/cdn/cdnDomainCreatePost.operation.ts |
| hosting (v1) | DELETE | `/hosting/web/cdn/{x}/domain/{x}` | OvhCloudHosting/cdn/cdnDomainDeleteDelete.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/domain/{x}` | OvhCloudHosting/cdn/cdnDomainGetGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/domain/{x}/logs` | OvhCloudHosting/cdn/cdnDomainLogsGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/cdn/{x}/domain/{x}/option` | OvhCloudHosting/cdn/cdnDomainOptionCreatePost.operation.ts |
| hosting (v1) | DELETE | `/hosting/web/cdn/{x}/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionDeleteDelete.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionGetGet.operation.ts |
| hosting (v1) | PUT | `/hosting/web/cdn/{x}/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionUpdatePut.operation.ts |
| hosting (v1) | POST | `/hosting/web/cdn/{x}/domain/{x}/purge` | OvhCloudHosting/cdn/cdnDomainPurgePost.operation.ts |
| hosting (v1) | POST | `/hosting/web/cdn/{x}/domain/{x}/refresh` | OvhCloudHosting/cdn/cdnDomainRefreshPost.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/domain/{x}/statistics` | OvhCloudHosting/cdn/cdnDomainStatisticsGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/domain/option` | OvhCloudHosting/cdn/cdnDomainOptionListGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/operation` | OvhCloudHosting/cdn/cdnOperationListGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/operation/{x}` | OvhCloudHosting/cdn/cdnOperationGetGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/cdn/{x}/serviceInfos` | OvhCloudHosting/cdn/cdnServiceInfosGet.operation.ts |
| hosting (v1) | PUT | `/hosting/web/cdn/{x}/serviceInfos` | OvhCloudHosting/cdn/cdnServiceInfosUpdatePut.operation.ts |
| hosting (v1) | POST | `/hosting/web/cdn/{x}/terminate` | OvhCloudHosting/cdn/cdnTerminateCreate.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/capabilities` | OvhCloudHosting/databaseSub/capabilitiesGet.operation.ts |
| hosting (v1) | PUT | `/hosting/web/database/{x}/{x}/changePassword` | OvhCloudHosting/databaseSub/changePasswordPut.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/copy` | OvhCloudHosting/databaseSub/copyListGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/database/{x}/{x}/copy` | OvhCloudHosting/databaseSub/copyPost.operation.ts |
| hosting (v1) | DELETE | `/hosting/web/database/{x}/{x}/copy/{x}` | OvhCloudHosting/databaseSub/copyDeleteDelete.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/copy/{x}` | OvhCloudHosting/databaseSub/copyGetGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/database/{x}/{x}/copyRestore` | OvhCloudHosting/databaseSub/copyRestorePost.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/dump` | OvhCloudHosting/databaseSub/dumpGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/database/{x}/{x}/dump` | OvhCloudHosting/databaseSub/dumpCreatePost.operation.ts |
| hosting (v1) | DELETE | `/hosting/web/database/{x}/{x}/dump/{x}` | OvhCloudHosting/databaseSub/dumpDeleteDelete.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/dump/{x}` | OvhCloudHosting/databaseSub/dumpGetGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/database/{x}/{x}/dump/{x}/restore` | OvhCloudHosting/databaseSub/dumpRestorePost.operation.ts |
| hosting (v1) | POST | `/hosting/web/database/{x}/{x}/import` | OvhCloudHosting/databaseSub/importPost.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/metricsToken` | OvhCloudHosting/databaseSub/metricsTokenGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/request` | OvhCloudHosting/databaseSub/requestListGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/restore` | OvhCloudHosting/databaseSub/restoreGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/database/{x}/{x}/restore` | OvhCloudHosting/databaseSub/restoreCreatePost.operation.ts |
| hosting (v1) | GET | `/hosting/web/database/{x}/{x}/statistics` | OvhCloudHosting/databaseSub/statisticsGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/website/{x}` | OvhCloudHosting/website/listGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/website/{x}` | OvhCloudHosting/website/createPost.operation.ts |
| hosting (v1) | DELETE | `/hosting/web/website/{x}/{x}` | OvhCloudHosting/website/deleteDelete.operation.ts |
| hosting (v1) | GET | `/hosting/web/website/{x}/{x}` | OvhCloudHosting/website/getGet.operation.ts |
| hosting (v1) | PUT | `/hosting/web/website/{x}/{x}` | OvhCloudHosting/website/updatePut.operation.ts |
| hosting (v1) | GET | `/hosting/web/website/{x}/{x}/deployment` | OvhCloudHosting/website/deploymentGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/website/{x}/{x}/deployment` | OvhCloudHosting/website/deploymentCreatePost.operation.ts |
| hosting (v1) | GET | `/hosting/web/website/{x}/{x}/deployment/{x}` | OvhCloudHosting/website/deploymentGetById.operation.ts |
| hosting (v1) | GET | `/hosting/web/website/{x}/{x}/deployment/{x}/logs` | OvhCloudHosting/website/deploymentLogsGet.operation.ts |
| hosting (v1) | GET | `/hosting/web/website/{x}/creationCapabilities` | OvhCloudHosting/website/creationCapabilitiesGet.operation.ts |
| hosting (v1) | GET | `/webhosting/attachedDomain` | OvhCloudHosting/v2/attachedDomainListGetV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource` | OvhCloudHosting/v2/resource/listGetV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource` | OvhCloudHosting/v2/resourceListGetV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}` | OvhCloudHosting/v2/resource/getByNameGetV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}` | OvhCloudHosting/v2/resourceGetGetV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}/attachedDomain` | OvhCloudHosting/v2/attachedDomain/listByResourceGetV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}/attachedDomain` | OvhCloudHosting/v2/resourceAttachedDomainListGetV2.operation.ts |
| hosting (v1) | POST | `/webhosting/resource/{x}/attachedDomain` | OvhCloudHosting/v2/attachedDomain/createPostV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}/certificate` | OvhCloudHosting/v2/certificateListGetV2.operation.ts |
| hosting (v1) | POST | `/webhosting/resource/{x}/ssl/import` | OvhCloudHosting/v2/ssl/importCustomCertificatePostV2.operation.ts |
| hosting (v1) | DELETE | `/webhosting/resource/{x}/user` | OvhCloudHosting/v2/user/deleteUserV2.operation.ts |
| hosting (v1) | DELETE | `/webhosting/resource/{x}/website` | OvhCloudHosting/v2/website/deleteDeleteByWebsiteIdGetV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}/website` | OvhCloudHosting/v2/websiteListGetV2.operation.ts |
| hosting (v1) | POST | `/webhosting/resource/{x}/website` | OvhCloudHosting/v2/website/createPostV2.operation.ts |
| hosting (v1) | POST | `/webhosting/resource/{x}/website` | OvhCloudHosting/v2/websiteCreatePostV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}/website/{x}` | OvhCloudHosting/v2/websiteGetGetV2.operation.ts |
| hosting (v1) | PUT | `/webhosting/resource/{x}/website/{x}` | OvhCloudHosting/v2/websiteUpdatePutV2.operation.ts |
| hosting (v1) | GET | `/webhosting/resource/{x}/website/{x}/domain` | OvhCloudHosting/v2/websiteDomainListGetV2.operation.ts |
| ip (v1) | DELETE | `/ip/{x}/equilibrium` | OvhCloudIp/ipEquilibriumDeleteDelete.operation.ts |
| ip (v1) | GET | `/ip/{x}/equilibrium` | OvhCloudIp/ipEquilibriumListGet.operation.ts |
| ip (v1) | POST | `/ip/{x}/equilibrium` | OvhCloudIp/ipEquilibriumCreatePost.operation.ts |
| ip (v1) | DELETE | `/ip/{x}/equilibrium/{x}` | OvhCloudIp/ipEquilibriumDetailDeleteDelete.operation.ts |
| ip (v1) | GET | `/ip/{x}/equilibrium/{x}` | OvhCloudIp/ipEquilibriumDetailGet.operation.ts |
| ip (v1) | PUT | `/ip/{x}/equilibrium/{x}` | OvhCloudIp/ipEquilibriumUpdatePut.operation.ts |
| ip (v1) | POST | `/ip/{x}/failover` | OvhCloudIp/ipFailoverPost.operation.ts |
| ip (v1) | DELETE | `/ip/{x}/failover/{x}` | OvhCloudIp/ipFailoverDeleteDelete.operation.ts |
| ip (v1) | GET | `/ip/{x}/failover/{x}` | OvhCloudIp/ipFailoverGetGet.operation.ts |
| ip (v1) | PUT | `/ip/{x}/failover/{x}` | OvhCloudIp/ipFailoverUpdatePut.operation.ts |
| ip (v1) | PUT | `/ip/{x}/reverse` | OvhCloudIp/ipReverseUpdatePut.operation.ts |
| license (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| license (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| metrics (v1) | GET | `/metrics/{x}/quota` | OvhCloudMetrics/resources/quotaGet.operation.ts |
| msServices (v1) | DELETE | `/msServices/{x}` | OvhCloudMsServices/msServicesDeleteDelete.operation.ts |
| msServices (v1) | POST | `/msServices/{x}/reinstall` | OvhCloudMsServices/reinstallPost.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/catalogPublicGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/domainGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/ecoGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/emailDomainGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/emailproGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/exchangeGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/ipLoadbalancingGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/licenseHycuGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/licensePleskGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/licenseSqlServerGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/licenseWindowsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/licensecPanelGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/logsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/nashaGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/netappGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/nutanixGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/office365PrepaidGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/officePrepaidGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/okmsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/ovhCloudConnectGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/packsProfessionalServicesGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/privateCloudEnterpriseGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/privateCloudGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/privateSQLGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/sslGatewayGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/telephonyGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/vmwareCloudDirectorBackupGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/vmwareCloudDirectorGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/vpsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/webHostingGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/webPaaSGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}` | OvhCloudOrder/catalog/zimbraGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/catalogPublicOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/domainOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/ecoOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/emailDomainOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/emailproOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/exchangeOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/ipLoadbalancingOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/licenseHycuOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/licensePleskOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/licenseSqlServerOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/licenseWindowsOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/licensecPanelOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/logsOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/nashaOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/netappOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/nutanixOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/office365PrepaidOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/officePrepaidOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/okmsOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/ovhCloudConnectOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/packsProfessionalServicesOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/privateCloudEnterpriseOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/privateCloudOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/privateSQLOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/sslGatewayOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/telephonyOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/vmwareCloudDirectorBackupOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/vmwareCloudDirectorOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/vpsOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/webHostingOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/webPaaSOptionsGet.operation.ts |
| order (v1) | GET | `/order/catalog/public/{x}/options` | OvhCloudOrder/catalog/zimbraOptionsGet.operation.ts |
| order (v1) | POST | `/order/cloud/project` | OvhCloudOrder/cloud/cloudProjectCreatePost.operation.ts |
| order (v1) | GET | `/order/email/exchange/{x}` | OvhCloudOrder/email/exchange/exchangeOrganizationListGet.operation.ts |
| order (v1) | GET | `/order/email/exchange/{x}/{x}` | OvhCloudOrder/email/exchange/exchangeServiceGet.operation.ts |
| order (v1) | POST | `/order/email/exchange/{x}/{x}` | OvhCloudOrder/email/exchange/exchangeServiceCreatePost.operation.ts |
| order (v1) | GET | `/order/email/exchange/{x}/{x}/account/{x}` | OvhCloudOrder/email/exchange/exchangeAccountGet.operation.ts |
| order (v1) | POST | `/order/email/exchange/{x}/{x}/accountUpgrade/{x}` | OvhCloudOrder/email/exchange/exchangeAccountUpgradeCreatePost.operation.ts |
| order (v1) | POST | `/order/email/exchange/{x}/{x}/diskSpace/{x}` | OvhCloudOrder/email/exchange/exchangeDiskSpaceCreatePost.operation.ts |
| order (v1) | POST | `/order/email/exchange/{x}/{x}/outlook/{x}` | OvhCloudOrder/email/exchange/exchangeOutlookCreatePost.operation.ts |
| order (v1) | POST | `/order/email/exchange/{x}/{x}/upgrade/{x}` | OvhCloudOrder/email/exchange/exchangeUpgradeCreatePost.operation.ts |
| order (v1) | POST | `/order/email/pro/{x}` | OvhCloudOrder/email/pro/proOrganizationCreatePost.operation.ts |
| order (v1) | POST | `/order/freefax/{x}` | OvhCloudOrder/freefax/freefaxCreatePost.operation.ts |
| order (v1) | GET | `/order/freefax/{x}/{x}` | OvhCloudOrder/freefax/freefaxNumberGet.operation.ts |
| order (v1) | GET | `/order/license/{x}` | OvhCloudOrder/license/cPanel/cPanelListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}` | OvhCloudOrder/license/office/officeListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}` | OvhCloudOrder/license/plesk/pleskListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}` | OvhCloudOrder/license/sqlserver/sqlserverListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}` | OvhCloudOrder/license/windows/windowsListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}` | OvhCloudOrder/license/cPanel/cPanelServiceGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}` | OvhCloudOrder/license/office/officeServiceGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}` | OvhCloudOrder/license/plesk/pleskServiceGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}` | OvhCloudOrder/license/sqlserver/sqlserverServiceGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}` | OvhCloudOrder/license/windows/windowsServiceGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade` | OvhCloudOrder/license/cPanel/cPanelServiceUpgradeListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade` | OvhCloudOrder/license/office/officeServiceUpgradeListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade` | OvhCloudOrder/license/plesk/pleskServiceUpgradeListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade` | OvhCloudOrder/license/sqlserver/sqlserverServiceUpgradeListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade` | OvhCloudOrder/license/windows/windowsServiceUpgradeListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/cPanel/cPanelServiceUpgradeDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/office/officeServiceUpgradeDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/plesk/pleskServiceUpgradeDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/sqlserver/sqlserverServiceUpgradeDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/windows/windowsServiceUpgradeDurationGet.operation.ts |
| order (v1) | POST | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/cPanel/cPanelServiceUpgradeCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/office/officeServiceUpgradeCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/plesk/pleskServiceUpgradeCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/sqlserver/sqlserverServiceUpgradeCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/{x}/upgrade/{x}` | OvhCloudOrder/license/windows/windowsServiceUpgradeCreatePost.operation.ts |
| order (v1) | GET | `/order/license/{x}/new` | OvhCloudOrder/license/cPanel/cPanelNewListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new` | OvhCloudOrder/license/office/officeNewListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new` | OvhCloudOrder/license/plesk/pleskNewListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new` | OvhCloudOrder/license/sqlserver/sqlserverNewListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new` | OvhCloudOrder/license/windows/windowsNewListGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/cPanel/cPanelNewDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/office/officeNewDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/plesk/pleskNewDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/sqlserver/sqlserverNewDurationGet.operation.ts |
| order (v1) | GET | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/windows/windowsNewDurationGet.operation.ts |
| order (v1) | POST | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/cPanel/cPanelNewCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/office/officeNewCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/plesk/pleskNewCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/sqlserver/sqlserverNewCreatePost.operation.ts |
| order (v1) | POST | `/order/license/{x}/new/{x}` | OvhCloudOrder/license/windows/windowsNewCreatePost.operation.ts |
| order (v1) | POST | `/order/overTheBox` | OvhCloudOrder/overTheBox/overTheBoxCreatePost.operation.ts |
| order (v1) | POST | `/order/overTheBox` | OvhCloudOrder/overTheBox/overTheBoxOrderCreatePost.operation.ts |
| order (v1) | GET | `/order/saas/csp2` | OvhCloudOrder/saas/saasCsp2ListGet.operation.ts |
| order (v1) | POST | `/order/saas/csp2` | OvhCloudOrder/saas/saasCsp2CreatePost.operation.ts |
| order (v1) | GET | `/order/saas/csp2/{x}` | OvhCloudOrder/saas/saasCsp2ProductGet.operation.ts |
| order (v1) | POST | `/order/sms` | OvhCloudOrder/sms/smsCreatePost.operation.ts |
| order (v1) | POST | `/order/sms/{x}` | OvhCloudOrder/sms/smsProductCreatePost.operation.ts |
| order (v1) | GET | `/order/sms/{x}/{x}` | OvhCloudOrder/sms/smsProductDurationGet.operation.ts |
| order (v1) | POST | `/order/veeamCloudConnect` | OvhCloudOrder/veeamCloudConnect/veeamCloudConnectCreatePost.operation.ts |
| order (v1) | POST | `/order/veeamCloudConnect/{x}` | OvhCloudOrder/veeamCloudConnect/veeamCloudConnectConfigCreatePost.operation.ts |
| order (v1) | POST | `/order/veeamCloudConnect/{x}/option` | OvhCloudOrder/veeamCloudConnect/veeamCloudConnectOptionCreatePost.operation.ts |
| order (v1) | GET | `/order/xdsl/spare` | OvhCloudOrder/xdsl/xdslSpareListGet.operation.ts |
| order (v1) | POST | `/order/xdsl/spare` | OvhCloudOrder/xdsl/xdslSpareCreatePost.operation.ts |
| pack (v1) | GET | `/pack` | OvhCloudPack/packListGet.operation.ts |
| pack (v1) | DELETE | `/pack/{x}` | OvhCloudPack/packDeleteDelete.operation.ts |
| pack (v1) | GET | `/pack/{x}` | OvhCloudPack/packGetGet.operation.ts |
| pack (v1) | PUT | `/pack/{x}` | OvhCloudPack/packUpdatePut.operation.ts |
| pack (v1) | POST | `/pack/{x}/reinstall` | OvhCloudPack/reinstallPost.operation.ts |
| pack (v1) | GET | `/pack/{x}/serviceInfos` | OvhCloudPack/serviceInfosGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/ai/data/region/{x}/alias` | OvhCloudPublicCloudAi/dataStore/dataCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra` | OvhCloudPublicCloud/database/cassandra/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra` | OvhCloudPublicCloud/database/cassandra/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/cassandra/{x}` | OvhCloudPublicCloud/database/cassandra/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}` | OvhCloudPublicCloud/database/cassandra/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/cassandra/{x}` | OvhCloudPublicCloud/database/cassandra/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/cassandra/advancedConfigurationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/cassandra/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/cassandra/advancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/backup` | OvhCloudPublicCloud/database/cassandra/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/backup` | OvhCloudPublicCloud/database/cassandra/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/backup/{x}` | OvhCloudPublicCloud/database/cassandra/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/backup/{x}` | OvhCloudPublicCloud/database/cassandra/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/cassandra/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/capabilities/integration` | OvhCloudPublicCloud/database/cassandra/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/certificates` | OvhCloudPublicCloud/database/cassandra/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/certificates` | OvhCloudPublicCloud/database/cassandra/certificateCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/integration` | OvhCloudPublicCloud/database/cassandra/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/integration` | OvhCloudPublicCloud/database/cassandra/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/integration/{x}` | OvhCloudPublicCloud/database/cassandra/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/integration/{x}` | OvhCloudPublicCloud/database/cassandra/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction` | OvhCloudPublicCloud/database/cassandra/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction` | OvhCloudPublicCloud/database/cassandra/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/cassandra/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/cassandra/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/cassandra/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/log/kind` | OvhCloudPublicCloud/database/cassandra/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/cassandra/logKindGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/log/subscription` | OvhCloudPublicCloud/database/cassandra/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/log/subscription` | OvhCloudPublicCloud/database/cassandra/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/cassandra/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/cassandra/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/log/url` | OvhCloudPublicCloud/database/cassandra/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/logs` | OvhCloudPublicCloud/database/cassandra/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/maintenance` | OvhCloudPublicCloud/database/cassandra/maintenanceGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/cassandra/maintenanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/cassandra/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/metric` | OvhCloudPublicCloud/database/cassandra/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/metric/{x}` | OvhCloudPublicCloud/database/cassandra/metricGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/node` | OvhCloudPublicCloud/database/cassandra/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/node` | OvhCloudPublicCloud/database/cassandra/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/node/{x}` | OvhCloudPublicCloud/database/cassandra/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/node/{x}` | OvhCloudPublicCloud/database/cassandra/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/cassandra/{x}/node/{x}` | OvhCloudPublicCloud/database/cassandra/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/prometheus` | OvhCloudPublicCloud/database/cassandra/prometheusGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/cassandra/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/user` | OvhCloudPublicCloud/database/cassandra/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/user` | OvhCloudPublicCloud/database/cassandra/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/cassandra/{x}/user/{x}` | OvhCloudPublicCloud/database/cassandra/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/cassandra/{x}/user/{x}` | OvhCloudPublicCloud/database/cassandra/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/cassandra/{x}/user/{x}` | OvhCloudPublicCloud/database/cassandra/userUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/cassandra/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/cassandra/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana` | OvhCloudPublicCloud/database/grafana/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/grafana` | OvhCloudPublicCloud/database/grafana/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/grafana/{x}` | OvhCloudPublicCloud/database/grafana/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}` | OvhCloudPublicCloud/database/grafana/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/grafana/{x}` | OvhCloudPublicCloud/database/grafana/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/grafana/advancedConfigurationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/grafana/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/grafana/advancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/backup` | OvhCloudPublicCloud/database/grafana/backupListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/backup/{x}` | OvhCloudPublicCloud/database/grafana/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/grafana/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/grafana/capabilitiesBackupRegionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/capabilities/integration` | OvhCloudPublicCloud/database/grafana/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/integration` | OvhCloudPublicCloud/database/grafana/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/grafana/{x}/integration` | OvhCloudPublicCloud/database/grafana/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/grafana/{x}/integration/{x}` | OvhCloudPublicCloud/database/grafana/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/integration/{x}` | OvhCloudPublicCloud/database/grafana/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/ipRestriction` | OvhCloudPublicCloud/database/grafana/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/grafana/{x}/ipRestriction` | OvhCloudPublicCloud/database/grafana/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/grafana/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/grafana/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/grafana/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/grafana/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/grafana/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/log/kind` | OvhCloudPublicCloud/database/grafana/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/grafana/logKindGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/log/subscription` | OvhCloudPublicCloud/database/grafana/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/grafana/{x}/log/subscription` | OvhCloudPublicCloud/database/grafana/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/grafana/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/grafana/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/grafana/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/grafana/{x}/log/url` | OvhCloudPublicCloud/database/grafana/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/logs` | OvhCloudPublicCloud/database/grafana/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/maintenance` | OvhCloudPublicCloud/database/grafana/maintenanceListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/grafana/maintenanceGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/grafana/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/grafana/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/metric` | OvhCloudPublicCloud/database/grafana/metricListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/metric/{x}` | OvhCloudPublicCloud/database/grafana/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/node` | OvhCloudPublicCloud/database/grafana/nodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/node/{x}` | OvhCloudPublicCloud/database/grafana/nodeGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/user` | OvhCloudPublicCloud/database/grafana/userListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/grafana/{x}/user/{x}` | OvhCloudPublicCloud/database/grafana/userGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/grafana/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/grafana/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka` | OvhCloudPublicCloud/database/kafka/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka` | OvhCloudPublicCloud/database/kafka/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/aclListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/advancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/clusterGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/integrationListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/maintenanceListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/aclCreatePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/integrationCreatePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/advancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafka/{x}` | OvhCloudPublicCloud/database/kafka/clusterUpdatePut.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/aclDeleteDelete.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/aclGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/maintenanceGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafka/{x}/{x}` | OvhCloudPublicCloud/database/kafka/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/{x}/apply` | OvhCloudPublicCloud/database/kafka/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/kafka/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/kafka/capabilitiesBackupRegionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/capabilities/integration` | OvhCloudPublicCloud/database/kafka/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/certificates` | OvhCloudPublicCloud/database/kafka/certificateListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/log/kind` | OvhCloudPublicCloud/database/kafka/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/kafka/logKindGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/log/subscription` | OvhCloudPublicCloud/database/kafka/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/log/subscription` | OvhCloudPublicCloud/database/kafka/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafka/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafka/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/log/url` | OvhCloudPublicCloud/database/kafka/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/logs` | OvhCloudPublicCloud/database/kafka/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/metric` | OvhCloudPublicCloud/database/kafka/metricListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/metric/{x}` | OvhCloudPublicCloud/database/kafka/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/permissions` | OvhCloudPublicCloud/database/kafka/permissionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/prometheus` | OvhCloudPublicCloud/database/kafka/prometheusGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/kafka/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/schemaRegistryAcl` | OvhCloudPublicCloud/database/kafka/schemaRegistryAclListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/schemaRegistryAcl` | OvhCloudPublicCloud/database/kafka/schemaRegistryAclCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/schemaRegistryAcl/{x}` | OvhCloudPublicCloud/database/kafka/schemaRegistryAclDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/schemaRegistryAcl/{x}` | OvhCloudPublicCloud/database/kafka/schemaRegistryAclGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/topic` | OvhCloudPublicCloud/database/kafka/topicListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/topic` | OvhCloudPublicCloud/database/kafka/topicCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/topic/{x}` | OvhCloudPublicCloud/database/kafka/topicDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/topic/{x}` | OvhCloudPublicCloud/database/kafka/topicGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafka/{x}/topic/{x}` | OvhCloudPublicCloud/database/kafka/topicUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/topicAcl` | OvhCloudPublicCloud/database/kafka/topicAclListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/topicAcl` | OvhCloudPublicCloud/database/kafka/topicAclCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/topicAcl/{x}` | OvhCloudPublicCloud/database/kafka/topicAclDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/topicAcl/{x}` | OvhCloudPublicCloud/database/kafka/topicAclGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/user` | OvhCloudPublicCloud/database/kafka/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/user` | OvhCloudPublicCloud/database/kafka/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafka/{x}/user/{x}` | OvhCloudPublicCloud/database/kafka/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/user/{x}` | OvhCloudPublicCloud/database/kafka/userGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafka/{x}/user/{x}/access` | OvhCloudPublicCloud/database/kafka/userAccessGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafka/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/kafka/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect` | OvhCloudPublicCloud/database/kafkaConnect/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect` | OvhCloudPublicCloud/database/kafkaConnect/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}` | OvhCloudPublicCloud/database/kafkaConnect/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}` | OvhCloudPublicCloud/database/kafkaConnect/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafkaConnect/{x}` | OvhCloudPublicCloud/database/kafkaConnect/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/kafkaConnect/advancedConfigurationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafkaConnect/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/kafkaConnect/advancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/kafkaConnect/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/kafkaConnect/capabilitiesBackupRegionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector` | OvhCloudPublicCloud/database/kafkaConnect/capabilitiesConnectorListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector/{x}` | OvhCloudPublicCloud/database/kafkaConnect/capabilitiesConnectorGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector/{x}/configuration` | OvhCloudPublicCloud/database/kafkaConnect/capabilitiesConnectorConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector/{x}/transforms` | OvhCloudPublicCloud/database/kafkaConnect/capabilitiesConnectorTransformsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/integration` | OvhCloudPublicCloud/database/kafkaConnect/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector` | OvhCloudPublicCloud/database/kafkaConnect/connectorListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector` | OvhCloudPublicCloud/database/kafkaConnect/connectorCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}` | OvhCloudPublicCloud/database/kafkaConnect/connectorDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}` | OvhCloudPublicCloud/database/kafkaConnect/connectorGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}` | OvhCloudPublicCloud/database/kafkaConnect/connectorUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/pause` | OvhCloudPublicCloud/database/kafkaConnect/connectorPausePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/restart` | OvhCloudPublicCloud/database/kafkaConnect/connectorRestartPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/resume` | OvhCloudPublicCloud/database/kafkaConnect/connectorResumePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/task` | OvhCloudPublicCloud/database/kafkaConnect/connectorTaskListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/task/{x}` | OvhCloudPublicCloud/database/kafkaConnect/connectorTaskGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/task/{x}/restart` | OvhCloudPublicCloud/database/kafkaConnect/connectorTaskRestartPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/integration` | OvhCloudPublicCloud/database/kafkaConnect/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/integration` | OvhCloudPublicCloud/database/kafkaConnect/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/integration/{x}` | OvhCloudPublicCloud/database/kafkaConnect/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/integration/{x}` | OvhCloudPublicCloud/database/kafkaConnect/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction` | OvhCloudPublicCloud/database/kafkaConnect/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction` | OvhCloudPublicCloud/database/kafkaConnect/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/kafkaConnect/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/kafkaConnect/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/kafkaConnect/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/kind` | OvhCloudPublicCloud/database/kafkaConnect/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/kafkaConnect/logKindGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaConnect/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaConnect/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafkaConnect/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafkaConnect/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/log/url` | OvhCloudPublicCloud/database/kafkaConnect/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/logs` | OvhCloudPublicCloud/database/kafkaConnect/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaConnect/maintenanceListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/kafkaConnect/maintenanceGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/kafkaConnect/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/metric` | OvhCloudPublicCloud/database/kafkaConnect/metricListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/metric/{x}` | OvhCloudPublicCloud/database/kafkaConnect/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/node` | OvhCloudPublicCloud/database/kafkaConnect/nodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaConnect/nodeGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/prometheus` | OvhCloudPublicCloud/database/kafkaConnect/prometheusGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/kafkaConnect/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/user` | OvhCloudPublicCloud/database/kafkaConnect/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/user` | OvhCloudPublicCloud/database/kafkaConnect/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaConnect/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaConnect/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaConnect/userGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaConnect/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/kafkaConnect/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb` | OvhCloudPublicCloud/database/mongodb/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb` | OvhCloudPublicCloud/database/mongodb/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mongodb/{x}` | OvhCloudPublicCloud/database/mongodb/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}` | OvhCloudPublicCloud/database/mongodb/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mongodb/{x}` | OvhCloudPublicCloud/database/mongodb/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/backup` | OvhCloudPublicCloud/database/mongodb/backupListGet.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mongodb/{x}/backup/{x}` | OvhCloudPublicCloud/database/mongodb/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/backup/{x}` | OvhCloudPublicCloud/database/mongodb/backupGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/backup/{x}/restore` | OvhCloudPublicCloud/database/mongodb/backupRestorePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction` | OvhCloudPublicCloud/database/mongodb/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction` | OvhCloudPublicCloud/database/mongodb/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/mongodb/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/mongodb/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/mongodb/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/log/kind` | OvhCloudPublicCloud/database/mongodb/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/mongodb/logKindGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/log/subscription` | OvhCloudPublicCloud/database/mongodb/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/log/subscription` | OvhCloudPublicCloud/database/mongodb/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mongodb/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/mongodb/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/mongodb/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/log/url` | OvhCloudPublicCloud/database/mongodb/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/logs` | OvhCloudPublicCloud/database/mongodb/logListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/maintenance` | OvhCloudPublicCloud/database/mongodb/maintenanceListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/mongodb/maintenanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/mongodb/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/metric` | OvhCloudPublicCloud/database/mongodb/metricListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/metric/{x}` | OvhCloudPublicCloud/database/mongodb/metricNameGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/node` | OvhCloudPublicCloud/database/mongodb/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/node` | OvhCloudPublicCloud/database/mongodb/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mongodb/{x}/node/{x}` | OvhCloudPublicCloud/database/mongodb/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/node/{x}` | OvhCloudPublicCloud/database/mongodb/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mongodb/{x}/node/{x}` | OvhCloudPublicCloud/database/mongodb/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/prometheus` | OvhCloudPublicCloud/database/mongodb/prometheusGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/mongodb/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/restore` | OvhCloudPublicCloud/database/mongodb/restoreCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/roles` | OvhCloudPublicCloud/database/mongodb/roleListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/user` | OvhCloudPublicCloud/database/mongodb/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/user` | OvhCloudPublicCloud/database/mongodb/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mongodb/{x}/user/{x}` | OvhCloudPublicCloud/database/mongodb/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mongodb/{x}/user/{x}` | OvhCloudPublicCloud/database/mongodb/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mongodb/{x}/user/{x}` | OvhCloudPublicCloud/database/mongodb/userUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mongodb/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/mongodb/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql` | OvhCloudPublicCloud/database/mysql/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql` | OvhCloudPublicCloud/database/mysql/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}` | OvhCloudPublicCloud/database/mysql/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}` | OvhCloudPublicCloud/database/mysql/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mysql/{x}` | OvhCloudPublicCloud/database/mysql/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/mysql/advancedConfigurationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mysql/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/mysql/advancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/backup` | OvhCloudPublicCloud/database/mysql/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/backup` | OvhCloudPublicCloud/database/mysql/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}/backup/{x}` | OvhCloudPublicCloud/database/mysql/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/backup/{x}` | OvhCloudPublicCloud/database/mysql/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/mysql/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/mysql/capabilitiesBackupRegionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/capabilities/integration` | OvhCloudPublicCloud/database/mysql/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/certificates` | OvhCloudPublicCloud/database/mysql/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/certificates` | OvhCloudPublicCloud/database/mysql/certificateCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/currentQueries` | OvhCloudPublicCloud/database/mysql/currentQueriesGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/currentQueries/cancel` | OvhCloudPublicCloud/database/mysql/currentQueriesCancelPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/database` | OvhCloudPublicCloud/database/mysql/databaseListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/database` | OvhCloudPublicCloud/database/mysql/databaseCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}/database/{x}` | OvhCloudPublicCloud/database/mysql/databaseDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/database/{x}` | OvhCloudPublicCloud/database/mysql/databaseGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/enableWrites` | OvhCloudPublicCloud/database/mysql/enableWritesPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/integration` | OvhCloudPublicCloud/database/mysql/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/integration` | OvhCloudPublicCloud/database/mysql/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}/integration/{x}` | OvhCloudPublicCloud/database/mysql/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/integration/{x}` | OvhCloudPublicCloud/database/mysql/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/ipRestriction` | OvhCloudPublicCloud/database/mysql/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/ipRestriction` | OvhCloudPublicCloud/database/mysql/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/mysql/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/mysql/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mysql/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/mysql/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/log/kind` | OvhCloudPublicCloud/database/mysql/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/mysql/logKindGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/log/subscription` | OvhCloudPublicCloud/database/mysql/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/log/subscription` | OvhCloudPublicCloud/database/mysql/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/mysql/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/mysql/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/log/url` | OvhCloudPublicCloud/database/mysql/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/logs` | OvhCloudPublicCloud/database/mysql/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/maintenance` | OvhCloudPublicCloud/database/mysql/maintenanceGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mysql/{x}/maintenance` | OvhCloudPublicCloud/database/mysql/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/mysql/maintenanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/mysql/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/metric` | OvhCloudPublicCloud/database/mysql/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/metric/{x}` | OvhCloudPublicCloud/database/mysql/metricGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/migration` | OvhCloudPublicCloud/database/mysql/migrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/migration` | OvhCloudPublicCloud/database/mysql/migrationCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/migration/check` | OvhCloudPublicCloud/database/mysql/migrationCheckGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/migration/check` | OvhCloudPublicCloud/database/mysql/migrationCheckPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/migration/stop` | OvhCloudPublicCloud/database/mysql/migrationStopPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/node` | OvhCloudPublicCloud/database/mysql/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/node` | OvhCloudPublicCloud/database/mysql/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}/node/{x}` | OvhCloudPublicCloud/database/mysql/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/node/{x}` | OvhCloudPublicCloud/database/mysql/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mysql/{x}/node/{x}` | OvhCloudPublicCloud/database/mysql/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/prometheus` | OvhCloudPublicCloud/database/mysql/prometheusGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/mysql/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/queryStatistics` | OvhCloudPublicCloud/database/mysql/queryStatisticsGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/queryStatistics/reset` | OvhCloudPublicCloud/database/mysql/queryStatisticsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/user` | OvhCloudPublicCloud/database/mysql/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/user` | OvhCloudPublicCloud/database/mysql/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/mysql/{x}/user/{x}` | OvhCloudPublicCloud/database/mysql/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/mysql/{x}/user/{x}` | OvhCloudPublicCloud/database/mysql/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/mysql/{x}/user/{x}` | OvhCloudPublicCloud/database/mysql/userUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/mysql/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/mysql/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch` | OvhCloudPublicCloud/database/opensearch/ClusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch` | OvhCloudPublicCloud/database/opensearch/ClusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/opensearch/{x}` | OvhCloudPublicCloud/database/opensearch/ClusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}` | OvhCloudPublicCloud/database/opensearch/ClusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/opensearch/{x}` | OvhCloudPublicCloud/database/opensearch/ClusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/opensearch/AdvancedConfigurationListGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/opensearch/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/opensearch/AdvancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/backup` | OvhCloudPublicCloud/database/opensearch/BackupListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/backup/{x}` | OvhCloudPublicCloud/database/opensearch/BackupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/opensearch/CapabilitiesAdvancedConfigurationListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/opensearch/CapabilitiesBackupRegionsListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/capabilities/integration` | OvhCloudPublicCloud/database/opensearch/CapabilitiesIntegrationListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/index` | OvhCloudPublicCloud/database/opensearch/IndexListGet.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/opensearch/{x}/index/{x}` | OvhCloudPublicCloud/database/opensearch/IndexDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/index/{x}` | OvhCloudPublicCloud/database/opensearch/IndexGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/integration` | OvhCloudPublicCloud/database/opensearch/IntegrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/integration` | OvhCloudPublicCloud/database/opensearch/IntegrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/opensearch/{x}/integration/{x}` | OvhCloudPublicCloud/database/opensearch/IntegrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/integration/{x}` | OvhCloudPublicCloud/database/opensearch/IntegrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/ipRestriction` | OvhCloudPublicCloud/database/opensearch/IpRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/ipRestriction` | OvhCloudPublicCloud/database/opensearch/IpRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/opensearch/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/opensearch/IpRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/opensearch/IpRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/opensearch/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/opensearch/IpRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/log/kind` | OvhCloudPublicCloud/database/opensearch/LogKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/opensearch/LogKindGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/log/subscription` | OvhCloudPublicCloud/database/opensearch/LogSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/log/subscription` | OvhCloudPublicCloud/database/opensearch/LogSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/opensearch/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/opensearch/LogSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/opensearch/LogSubscriptionGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/log/url` | OvhCloudPublicCloud/database/opensearch/LogUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/logs` | OvhCloudPublicCloud/database/opensearch/LogsListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/maintenance` | OvhCloudPublicCloud/database/opensearch/MaintenanceListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/opensearch/MaintenanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/opensearch/MaintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/metric` | OvhCloudPublicCloud/database/opensearch/MetricListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/metric/{x}` | OvhCloudPublicCloud/database/opensearch/MetricGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/node` | OvhCloudPublicCloud/database/opensearch/NodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/node/{x}` | OvhCloudPublicCloud/database/opensearch/NodeGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/pattern` | OvhCloudPublicCloud/database/opensearch/PatternListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/pattern` | OvhCloudPublicCloud/database/opensearch/PatternCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/opensearch/{x}/pattern/{x}` | OvhCloudPublicCloud/database/opensearch/PatternDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/pattern/{x}` | OvhCloudPublicCloud/database/opensearch/PatternGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/permissions` | OvhCloudPublicCloud/database/opensearch/PermissionsListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/prometheus` | OvhCloudPublicCloud/database/opensearch/PrometheusListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/opensearch/PrometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/user` | OvhCloudPublicCloud/database/opensearch/UserListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/user` | OvhCloudPublicCloud/database/opensearch/UserCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/opensearch/{x}/user/{x}` | OvhCloudPublicCloud/database/opensearch/UserDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/opensearch/{x}/user/{x}` | OvhCloudPublicCloud/database/opensearch/UserGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/opensearch/{x}/user/{x}` | OvhCloudPublicCloud/database/opensearch/UserUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/opensearch/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/opensearch/UserCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql` | OvhCloudPublicCloud/database/postgresql/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql` | OvhCloudPublicCloud/database/postgresql/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}` | OvhCloudPublicCloud/database/postgresql/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}` | OvhCloudPublicCloud/database/postgresql/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/postgresql/{x}` | OvhCloudPublicCloud/database/postgresql/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/postgresql/advancedConfigurationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/postgresql/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/postgresql/advancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/backup` | OvhCloudPublicCloud/database/postgresql/backupListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/backup/{x}` | OvhCloudPublicCloud/database/postgresql/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/postgresql/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/postgresql/capabilitiesBackupRegionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/capabilities/integration` | OvhCloudPublicCloud/database/postgresql/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/certificates` | OvhCloudPublicCloud/database/postgresql/certificateListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/connectionPool` | OvhCloudPublicCloud/database/postgresql/connectionPoolListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/connectionPool` | OvhCloudPublicCloud/database/postgresql/connectionPoolCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/connectionPool/{x}` | OvhCloudPublicCloud/database/postgresql/connectionPoolDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/connectionPool/{x}` | OvhCloudPublicCloud/database/postgresql/connectionPoolGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/postgresql/{x}/connectionPool/{x}` | OvhCloudPublicCloud/database/postgresql/connectionPoolUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/currentQueries` | OvhCloudPublicCloud/database/postgresql/currentQueriesGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/currentQueries/cancel` | OvhCloudPublicCloud/database/postgresql/currentQueriesCancelPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/database` | OvhCloudPublicCloud/database/postgresql/databaseListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/database` | OvhCloudPublicCloud/database/postgresql/databaseCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/database/{x}` | OvhCloudPublicCloud/database/postgresql/databaseDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/database/{x}` | OvhCloudPublicCloud/database/postgresql/databaseGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/integration` | OvhCloudPublicCloud/database/postgresql/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/integration` | OvhCloudPublicCloud/database/postgresql/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/integration/{x}` | OvhCloudPublicCloud/database/postgresql/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/integration/{x}` | OvhCloudPublicCloud/database/postgresql/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/ipRestriction` | OvhCloudPublicCloud/database/postgresql/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/ipRestriction` | OvhCloudPublicCloud/database/postgresql/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/postgresql/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/postgresql/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/postgresql/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/postgresql/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/log/kind` | OvhCloudPublicCloud/database/postgresql/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/postgresql/logKindGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/log/subscription` | OvhCloudPublicCloud/database/postgresql/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/log/subscription` | OvhCloudPublicCloud/database/postgresql/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/postgresql/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/postgresql/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/log/url` | OvhCloudPublicCloud/database/postgresql/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/logs` | OvhCloudPublicCloud/database/postgresql/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/maintenance` | OvhCloudPublicCloud/database/postgresql/maintenanceGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/postgresql/maintenanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/postgresql/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/metric` | OvhCloudPublicCloud/database/postgresql/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/metric/{x}` | OvhCloudPublicCloud/database/postgresql/metricGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/node` | OvhCloudPublicCloud/database/postgresql/nodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/node/{x}` | OvhCloudPublicCloud/database/postgresql/nodeGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/prometheus` | OvhCloudPublicCloud/database/postgresql/prometheusGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/queryStatistics` | OvhCloudPublicCloud/database/postgresql/queryStatisticsGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/queryStatistics/reset` | OvhCloudPublicCloud/database/postgresql/queryStatisticsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/roles` | OvhCloudPublicCloud/database/postgresql/rolesGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/user` | OvhCloudPublicCloud/database/postgresql/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/user` | OvhCloudPublicCloud/database/postgresql/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/user/{x}` | OvhCloudPublicCloud/database/postgresql/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/user/{x}` | OvhCloudPublicCloud/database/postgresql/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/postgresql/{x}/user/{x}` | OvhCloudPublicCloud/database/postgresql/userUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/postgresql/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/enableWrites` | OvhCloudPublicCloud/database/postgresql/enableWritesPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/prometheus/credentials/reset` | OvhCloudPublicCloud/database/postgresql/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis` | OvhCloudPublicCloud/database/redis/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis` | OvhCloudPublicCloud/database/redis/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/redis/{x}` | OvhCloudPublicCloud/database/redis/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}` | OvhCloudPublicCloud/database/redis/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/redis/{x}` | OvhCloudPublicCloud/database/redis/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/redis/advancedConfigurationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/redis/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/redis/advancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/backup` | OvhCloudPublicCloud/database/redis/backupListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/backup/{x}` | OvhCloudPublicCloud/database/redis/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/redis/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/capabilities/categories` | OvhCloudPublicCloud/database/redis/capabilitiesCategoriesGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/capabilities/commands` | OvhCloudPublicCloud/database/redis/capabilitiesCommandsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/capabilities/integration` | OvhCloudPublicCloud/database/redis/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/integration` | OvhCloudPublicCloud/database/redis/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/integration` | OvhCloudPublicCloud/database/redis/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/redis/{x}/integration/{x}` | OvhCloudPublicCloud/database/redis/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/integration/{x}` | OvhCloudPublicCloud/database/redis/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/ipRestriction` | OvhCloudPublicCloud/database/redis/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/ipRestriction` | OvhCloudPublicCloud/database/redis/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/redis/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/redis/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/redis/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/redis/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/redis/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/log/kind` | OvhCloudPublicCloud/database/redis/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/redis/logKindGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/log/subscription` | OvhCloudPublicCloud/database/redis/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/log/subscription` | OvhCloudPublicCloud/database/redis/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/redis/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/redis/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/redis/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/log/url` | OvhCloudPublicCloud/database/redis/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/logs` | OvhCloudPublicCloud/database/redis/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/maintenance` | OvhCloudPublicCloud/database/redis/maintenanceListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/redis/maintenanceGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/redis/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/metric` | OvhCloudPublicCloud/database/redis/metricListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/metric/{x}` | OvhCloudPublicCloud/database/redis/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/node` | OvhCloudPublicCloud/database/redis/nodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/node/{x}` | OvhCloudPublicCloud/database/redis/nodeGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/prometheus` | OvhCloudPublicCloud/database/redis/prometheusGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/redis/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/user` | OvhCloudPublicCloud/database/redis/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/user` | OvhCloudPublicCloud/database/redis/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/redis/{x}/user/{x}` | OvhCloudPublicCloud/database/redis/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/redis/{x}/user/{x}` | OvhCloudPublicCloud/database/redis/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/redis/{x}/user/{x}` | OvhCloudPublicCloud/database/redis/userUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/redis/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/redis/userCredentialsResetPost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/instance/{x}` | OvhCloudPublicCloud/instance/instanceDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/instance/{x}` | OvhCloudPublicCloud/instance/instanceGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/instance/{x}` | OvhCloudPublicCloud/instance/instanceUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/activeMonthlyBilling` | OvhCloudPublicCloud/instance/instanceActiveMonthlyBillingPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/applicationAccess` | OvhCloudPublicCloud/instance/instanceApplicationAccessPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/instance/{x}/interface` | OvhCloudPublicCloud/instance/instanceInterfaceListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/interface` | OvhCloudPublicCloud/instance/instanceInterfaceCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/instance/{x}/interface/{x}` | OvhCloudPublicCloud/instance/instanceInterfaceDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/instance/{x}/interface/{x}` | OvhCloudPublicCloud/instance/instanceInterfaceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/reboot` | OvhCloudPublicCloud/instance/instanceRebootPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/reinstall` | OvhCloudPublicCloud/instance/instanceReinstallPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/rescueMode` | OvhCloudPublicCloud/instance/instanceRescueModePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/resize` | OvhCloudPublicCloud/instance/instanceResizePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/resume` | OvhCloudPublicCloud/instance/instanceResumePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/shelve` | OvhCloudPublicCloud/instance/instanceShelvePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/snapshot` | OvhCloudPublicCloud/instance/instanceSnapshotPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/start` | OvhCloudPublicCloud/instance/instanceStartPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/stop` | OvhCloudPublicCloud/instance/instanceStopPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/unshelve` | OvhCloudPublicCloud/instance/instanceUnshelvePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/instance/{x}/vnc` | OvhCloudPublicCloud/instance/instanceVncPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube` | OvhCloudPublicCloud/kube/kubeListGet.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/kube/{x}` | OvhCloudPublicCloud/kube/kubeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}` | OvhCloudPublicCloud/kube/kubeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}` | OvhCloudPublicCloud/kube/kubeUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/auditLogs` | OvhCloudPublicCloud/kube/kubeAuditLogsPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/customization` | OvhCloudPublicCloud/kube/kubeCustomizationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}/customization` | OvhCloudPublicCloud/kube/kubeCustomizationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/flavors` | OvhCloudPublicCloud/kube/kubeFlavorsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/ipRestrictions` | OvhCloudPublicCloud/kube/kubeIpRestrictionsGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/ipRestrictions` | OvhCloudPublicCloud/kube/kubeIpRestrictionsPost.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}/ipRestrictions` | OvhCloudPublicCloud/kube/kubeIpRestrictionsUpdatePut.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/kube/{x}/ipRestrictions/{x}` | OvhCloudPublicCloud/kube/kubeIpRestrictionsDeleteDelete.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/kubeconfig` | OvhCloudPublicCloud/kube/kubeKubeconfigPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/kubeconfig/reset` | OvhCloudPublicCloud/kube/kubeKubeconfigResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/log/subscription` | OvhCloudPublicCloud/kube/kubeLogSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/log/subscription` | OvhCloudPublicCloud/kube/kubeLogSubscriptionPost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/kube/{x}/log/subscription/{x}` | OvhCloudPublicCloud/kube/kubeLogSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/log/subscription/{x}` | OvhCloudPublicCloud/kube/kubeLogSubscriptionGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/log/url` | OvhCloudPublicCloud/kube/kubeLogUrlPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/metrics/etcdUsage` | OvhCloudPublicCloud/kube/kubeMetricsEtcdUsageGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/node` | OvhCloudPublicCloud/kube/kubeNodeListGet.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/kube/{x}/node/{x}` | OvhCloudPublicCloud/kube/kubeNodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/node/{x}` | OvhCloudPublicCloud/kube/kubeNodeGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/nodepool` | OvhCloudPublicCloud/kube/kubeNodepoolListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/nodepool` | OvhCloudPublicCloud/kube/kubeNodepoolCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/kube/{x}/nodepool/{x}` | OvhCloudPublicCloud/kube/kubeNodepoolDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/nodepool/{x}` | OvhCloudPublicCloud/kube/kubeNodepoolGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}/nodepool/{x}` | OvhCloudPublicCloud/kube/kubeNodepoolUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/nodepool/{x}/nodes` | OvhCloudPublicCloud/kube/kubeNodepoolListNodepoolNodesGet.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/kube/{x}/openIdConnect` | OvhCloudPublicCloud/kube/kubeOpenIdConnectDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/openIdConnect` | OvhCloudPublicCloud/kube/kubeOpenIdConnectGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/openIdConnect` | OvhCloudPublicCloud/kube/kubeOpenIdConnectPost.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}/openIdConnect` | OvhCloudPublicCloud/kube/kubeOpenIdConnectUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/kube/{x}/privateNetworkConfiguration` | OvhCloudPublicCloud/kube/kubePrivateNetworkConfigurationGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}/privateNetworkConfiguration` | OvhCloudPublicCloud/kube/kubePrivateNetworkConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/reset` | OvhCloudPublicCloud/kube/kubeResetPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/restart` | OvhCloudPublicCloud/kube/kubeRestartPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/kube/{x}/update` | OvhCloudPublicCloud/kube/kubeUpdatePost.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}/updateLoadBalancersSubnetId` | OvhCloudPublicCloud/kube/kubeUpdateLoadBalancersSubnetIdUpdatePut.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/kube/{x}/updatePolicy` | OvhCloudPublicCloud/kube/kubeUpdatePolicyUpdatePut.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/user/{x}` | OvhCloudPublicCloud/user/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}` | OvhCloudPublicCloud/user/getDetailGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/configuration` | OvhCloudPublicCloud/user/getUserConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/openrc` | OvhCloudPublicCloud/user/getUserOpenrcGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/policy` | OvhCloudPublicCloud/user/getUserPolicyGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/user/{x}/policy` | OvhCloudPublicCloud/user/createUserPolicyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/rclone` | OvhCloudPublicCloud/user/getUserRcloneGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/user/{x}/regeneratePassword` | OvhCloudPublicCloud/user/regeneratePasswordPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/role` | OvhCloudPublicCloud/user/getUserRoleGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/user/{x}/role` | OvhCloudPublicCloud/user/createUserRolePost.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/user/{x}/role` | OvhCloudPublicCloud/user/updateUserRolePut.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/user/{x}/role/{x}` | OvhCloudPublicCloud/user/deleteUserRoleDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/role/{x}` | OvhCloudPublicCloud/user/getUserRoleDetailGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/s3Credentials` | OvhCloudPublicCloud/user/getUserS3CredentialsGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/user/{x}/s3Credentials` | OvhCloudPublicCloud/user/createUserS3CredentialsPost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/user/{x}/s3Credentials/{x}` | OvhCloudPublicCloud/user/deleteUserS3CredentialDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/user/{x}/s3Credentials/{x}` | OvhCloudPublicCloud/user/getUserS3CredentialDetailGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/user/{x}/s3Credentials/{x}/secret` | OvhCloudPublicCloud/user/createS3CredentialSecretPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/user/{x}/token` | OvhCloudPublicCloud/user/createUserTokenPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/acl` | OvhCloudPublicCloud/acl/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/acl` | OvhCloudPublicCloud/acl/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/acl/{x}` | OvhCloudPublicCloud/acl/deleteDelete.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/activateMonthlyBilling` | OvhCloudPublicCloud/activateMonthlyBilling/activateMonthlyBillingPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/app` | OvhCloudPublicCloudAi/app/appListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/ai/app` | OvhCloudPublicCloudAi/app/appCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/ai/app/{x}` | OvhCloudPublicCloudAi/app/appDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/app/{x}` | OvhCloudPublicCloudAi/app/appGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/ai/app/{x}` | OvhCloudPublicCloudAi/app/appUpdatePut.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/ai/app/{x}/start` | OvhCloudPublicCloudAi/app/appStartPut.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/ai/app/{x}/stop` | OvhCloudPublicCloudAi/app/appStopPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/data/region/eu/alias` | OvhCloudPublicCloudAi/dataStore/dataListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/job` | OvhCloudPublicCloudAi/job/jobListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/ai/job` | OvhCloudPublicCloudAi/job/jobCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/ai/job/{x}` | OvhCloudPublicCloudAi/job/jobDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/job/{x}` | OvhCloudPublicCloudAi/job/jobGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/notebook` | OvhCloudPublicCloudAi/notebook/notebookListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/ai/notebook` | OvhCloudPublicCloudAi/notebook/notebookCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/ai/notebook/{x}` | OvhCloudPublicCloudAi/notebook/notebookDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/notebook/{x}` | OvhCloudPublicCloudAi/notebook/notebookGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/ai/notebook/{x}/start` | OvhCloudPublicCloudAi/notebook/notebookStartPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ai/registry` | OvhCloudPublicCloudAi/registry/registryListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/ai/registry` | OvhCloudPublicCloudAi/registry/registryCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloud/alerting/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloudAi/alerting/alertListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloud/alerting/createPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/alerting` | OvhCloudPublicCloudAi/alerting/alertCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/bill` | OvhCloudPublicCloud/bill/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/backup` | OvhCloudPublicCloud/blockstorage/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/blockStorage/backup` | OvhCloudPublicCloud/blockstorage/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/blockStorage/backup/{x}` | OvhCloudPublicCloud/blockstorage/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/backup/{x}` | OvhCloudPublicCloud/blockstorage/backupGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/blockStorage/backup/{x}` | OvhCloudPublicCloud/blockstorage/backupUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/blockStorage/backup/{x}/retention/daily/set` | OvhCloudPublicCloud/blockstorage/backupRetentionDailySetPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/capability/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumeCapabilitiesListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/snapshot` | OvhCloudPublicCloud/blockstorage/snapshotListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/blockStorage/snapshot` | OvhCloudPublicCloud/blockstorage/snapshotCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/blockStorage/snapshot/{x}` | OvhCloudPublicCloud/blockstorage/snapshotDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/snapshot/{x}` | OvhCloudPublicCloud/blockstorage/snapshotGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/blockStorage/snapshot/{x}` | OvhCloudPublicCloud/blockstorage/snapshotUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/volume` | OvhCloudPublicCloud/blockstorage/volumeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/blockStorage/volume` | OvhCloudPublicCloud/blockstorage/volumeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/blockStorage/volume/{x}` | OvhCloudPublicCloud/blockstorage/volumeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/volume/{x}` | OvhCloudPublicCloud/blockstorage/volumeGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/blockStorage/volume/{x}` | OvhCloudPublicCloud/blockstorage/volumeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/volume/{x}/backupReferences` | OvhCloudPublicCloud/blockstorage/volumeBackupReferenceListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/blockStorage/volume/{x}/stats` | OvhCloudPublicCloud/blockstorage/volumeMonitoringStatsGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cancel` | OvhCloudPublicCloud/cancel/cancelPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities` | OvhCloudPublicCloud/capabilities/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/kube` | OvhCloudPublicCloud/capabilities/listKubeGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/kube/{x}` | OvhCloudPublicCloud/capabilities/getKubeDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer` | OvhCloudPublicCloud/capabilities/listLoadbalancerGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer/{x}` | OvhCloudPublicCloud/capabilities/getLoadbalancerDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/region` | OvhCloudPublicCloud/capabilities/listRegionGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/region/{x}` | OvhCloudPublicCloud/capabilities/getRegionDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/region/{x}/{x}` | OvhCloudPublicCloud/capabilities/getRegionProductDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cassandra/{x}/maintenance` | OvhCloudPublicCloud/database/cassandra/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/changeContact` | OvhCloudPublicCloud/changeContact/changeContactPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse` | OvhCloudPublicCloud/database/clickhouse/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse` | OvhCloudPublicCloud/database/clickhouse/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/backup` | OvhCloudPublicCloud/database/clickhouse/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse/{x}/backup` | OvhCloudPublicCloud/database/clickhouse/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/backup/{x}` | OvhCloudPublicCloud/database/clickhouse/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/backup/{x}` | OvhCloudPublicCloud/database/clickhouse/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/certificate` | OvhCloudPublicCloud/database/clickhouse/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse/{x}/certificate` | OvhCloudPublicCloud/database/clickhouse/certificateCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/integration` | OvhCloudPublicCloud/database/clickhouse/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse/{x}/integration` | OvhCloudPublicCloud/database/clickhouse/integrationCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/ipRestriction` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse/{x}/ipRestriction` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/log/subscription` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse/{x}/log/subscription` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/maintenance` | OvhCloudPublicCloud/database/clickhouse/maintenanceGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/maintenance` | OvhCloudPublicCloud/database/clickhouse/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/metric` | OvhCloudPublicCloud/database/clickhouse/metricGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/node` | OvhCloudPublicCloud/database/clickhouse/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse/{x}/node` | OvhCloudPublicCloud/database/clickhouse/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/prometheus` | OvhCloudPublicCloud/database/clickhouse/prometheusGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/user` | OvhCloudPublicCloud/database/clickhouse/userListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/clickhouse/{x}/user` | OvhCloudPublicCloud/database/clickhouse/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup` | OvhCloudPublicCloud/database/kafkaConnect/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup` | OvhCloudPublicCloud/database/kafkaConnect/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaConnect/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaConnect/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/certificate` | OvhCloudPublicCloud/database/kafkaConnect/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/certificate` | OvhCloudPublicCloud/database/kafkaConnect/certificateCreatePost.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaConnect/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node` | OvhCloudPublicCloud/database/kafkaConnect/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaConnect/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaConnect/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaConnect/nodeUpdatePut.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaConnect/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaConnect/userUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/certificate` | OvhCloudPublicCloud/database/kafkaMirrorMaker/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/certificate` | OvhCloudPublicCloud/database/kafkaMirrorMaker/certificateCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/ipRestriction` | OvhCloudPublicCloud/database/kafkaMirrorMaker/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/ipRestriction` | OvhCloudPublicCloud/database/kafkaMirrorMaker/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaMirrorMaker/maintenanceGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaMirrorMaker/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/metric` | OvhCloudPublicCloud/database/kafkaMirrorMaker/metricGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/prometheus` | OvhCloudPublicCloud/database/kafkaMirrorMaker/prometheusGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/kafkaMirrorMaker/{x}/user/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/userUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator` | OvhCloudPublicCloud/database/m3aggregator/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator` | OvhCloudPublicCloud/database/m3aggregator/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup` | OvhCloudPublicCloud/database/m3aggregator/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup` | OvhCloudPublicCloud/database/m3aggregator/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3aggregator/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3aggregator/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/certificate` | OvhCloudPublicCloud/database/m3aggregator/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/certificate` | OvhCloudPublicCloud/database/m3aggregator/certificateCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3aggregator/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3aggregator/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/log/subscription` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/log/subscription` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/maintenance` | OvhCloudPublicCloud/database/m3aggregator/maintenanceGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/maintenance` | OvhCloudPublicCloud/database/m3aggregator/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/metric` | OvhCloudPublicCloud/database/m3aggregator/metricGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node` | OvhCloudPublicCloud/database/m3aggregator/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node` | OvhCloudPublicCloud/database/m3aggregator/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node/{x}` | OvhCloudPublicCloud/database/m3aggregator/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node/{x}` | OvhCloudPublicCloud/database/m3aggregator/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/node/{x}` | OvhCloudPublicCloud/database/m3aggregator/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/prometheus` | OvhCloudPublicCloud/database/m3aggregator/prometheusGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user` | OvhCloudPublicCloud/database/m3aggregator/userListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user` | OvhCloudPublicCloud/database/m3aggregator/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user/{x}` | OvhCloudPublicCloud/database/m3aggregator/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user/{x}` | OvhCloudPublicCloud/database/m3aggregator/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3aggregator/{x}/user/{x}` | OvhCloudPublicCloud/database/m3aggregator/userUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db` | OvhCloudPublicCloud/database/m3db/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3db` | OvhCloudPublicCloud/database/m3db/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup` | OvhCloudPublicCloud/database/m3db/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup` | OvhCloudPublicCloud/database/m3db/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3db/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3db/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/certificate` | OvhCloudPublicCloud/database/m3db/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/certificate` | OvhCloudPublicCloud/database/m3db/certificateCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3db/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3db/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/log/subscription` | OvhCloudPublicCloud/database/m3db/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/log/subscription` | OvhCloudPublicCloud/database/m3db/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3db/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/maintenance` | OvhCloudPublicCloud/database/m3db/maintenanceGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}/maintenance` | OvhCloudPublicCloud/database/m3db/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/metric` | OvhCloudPublicCloud/database/m3db/metricGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node` | OvhCloudPublicCloud/database/m3db/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node` | OvhCloudPublicCloud/database/m3db/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node/{x}` | OvhCloudPublicCloud/database/m3db/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node/{x}` | OvhCloudPublicCloud/database/m3db/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}/node/{x}` | OvhCloudPublicCloud/database/m3db/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/prometheus` | OvhCloudPublicCloud/database/m3db/prometheusGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user` | OvhCloudPublicCloud/database/m3db/userListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user` | OvhCloudPublicCloud/database/m3db/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/userUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey` | OvhCloudPublicCloud/database/valkey/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey` | OvhCloudPublicCloud/database/valkey/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/backupListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/certificateListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/clusterGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/integrationListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/maintenanceGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/metricGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/nodeListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/prometheusGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/userListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/backupCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/certificateCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/integrationCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/nodeCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/userCreatePost.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/clusterUpdatePut.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}` | OvhCloudPublicCloud/database/valkey/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}/backup/{x}` | OvhCloudPublicCloud/database/valkey/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/backup/{x}` | OvhCloudPublicCloud/database/valkey/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/valkey/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}/node/{x}` | OvhCloudPublicCloud/database/valkey/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/node/{x}` | OvhCloudPublicCloud/database/valkey/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}/node/{x}` | OvhCloudPublicCloud/database/valkey/nodeUpdatePut.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/cloud/database/valkey/{x}/user/{x}` | OvhCloudPublicCloud/database/valkey/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/cloud/database/valkey/{x}/user/{x}` | OvhCloudPublicCloud/database/valkey/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cloud/database/valkey/{x}/user/{x}` | OvhCloudPublicCloud/database/valkey/userUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/confirmTermination` | OvhCloudPublicCloud/confirmTermination/confirmTerminationPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/user` | OvhCloudPublicCloud/containerRegistry/listUsersGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/user` | OvhCloudPublicCloud/containerRegistry/createUserPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/user/{x}` | OvhCloudPublicCloud/containerRegistry/deleteUserDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/user/{x}` | OvhCloudPublicCloud/containerRegistry/getUserDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/credit` | OvhCloudPublicCloud/credit/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/credit/{x}` | OvhCloudPublicCloud/credit/getDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/flavor` | OvhCloudPublicCloud/flavor/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/flavor/{x}` | OvhCloudPublicCloud/flavor/getDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/image` | OvhCloudPublicCloud/image/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/image/{x}` | OvhCloudPublicCloud/image/getDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/instance` | OvhCloudPublicCloud/instance/instanceListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/instance` | OvhCloudPublicCloud/instance/instanceCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/instance/bulk` | OvhCloudPublicCloud/instance/instanceBulkPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/instance/group` | OvhCloudPublicCloud/instance/instanceGroupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/instance/group` | OvhCloudPublicCloud/instance/instanceGroupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/instance/group/{x}` | OvhCloudPublicCloud/instance/instanceGroupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/instance/group/{x}` | OvhCloudPublicCloud/instance/instanceGroupGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ip` | OvhCloudPublicCloud/ip/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/ip` | OvhCloudPublicCloud/ip/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/ip/{x}` | OvhCloudPublicCloud/ip/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/ip/{x}` | OvhCloudPublicCloud/ip/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/ip/{x}` | OvhCloudPublicCloud/ip/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/kafka/{x}/backup` | OvhCloudPublicCloud/database/kafka/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/kafka/{x}/backup` | OvhCloudPublicCloud/database/kafka/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/kafka/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafka/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/kafka/{x}/backup/{x}` | OvhCloudPublicCloud/database/kafka/backupGetGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/kafka/{x}/certificate` | OvhCloudPublicCloud/database/kafka/certificateCreatePost.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/kafka/{x}/maintenance` | OvhCloudPublicCloud/database/kafka/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/kafka/{x}/node` | OvhCloudPublicCloud/database/kafka/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/kafka/{x}/node/{x}` | OvhCloudPublicCloud/database/kafka/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/kafka/{x}/node/{x}` | OvhCloudPublicCloud/database/kafka/nodeUpdatePut.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/kafka/{x}/user/{x}` | OvhCloudPublicCloud/database/kafka/userUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/lab` | OvhCloudPublicCloud/lab/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/lab` | OvhCloudPublicCloud/lab/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/privateNetwork` | OvhCloudPublicCloud/network/listPrivateNetworksGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/network/privateNetwork` | OvhCloudPublicCloud/network/createPrivateNetworkPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/network/privateNetwork/{x}` | OvhCloudPublicCloud/network/deletePrivateNetworkDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/privateNetwork/{x}` | OvhCloudPublicCloud/network/getPrivateNetworkDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/network/privateNetwork/{x}` | OvhCloudPublicCloud/network/updatePrivateNetworkPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/publicNetwork` | OvhCloudPublicCloud/network/listPublicNetworksGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/subnet` | OvhCloudPublicCloud/network/listSubnetsGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/network/subnet` | OvhCloudPublicCloud/network/createSubnetPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/deleteSubnetDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/getSubnetDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/updateSubnetPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/operation` | OvhCloudPublicCloud/operation/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/operation/{x}` | OvhCloudPublicCloud/operation/getDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities` | OvhCloudPublicCloud/quantum/listCapabilitiesGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities/region` | OvhCloudPublicCloud/quantum/listCapabilitiesRegionGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities/region/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesRegionDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quota` | OvhCloudPublicCloud/quota/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/rancher/{x}/adminCredentials` | OvhCloudPublicCloud/rancher/adminCredentials.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region` | OvhCloudPublicCloud/region/regionListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}` | OvhCloudPublicCloud/region/regionGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/workflow/backup` | OvhCloudPublicCloud/region/regionWorkflowBackupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/regionAvailable` | OvhCloudPublicCloud/regionAvailable/checkRegionAvailableGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/retain` | OvhCloudPublicCloud/retain/retainPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/role` | OvhCloudPublicCloud/role/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/serviceInfos` | OvhCloudPublicCloud/serviceInfos/getServiceInfosGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/snapshot` | OvhCloudPublicCloud/snapshot/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/snapshot` | OvhCloudPublicCloud/snapshot/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/snapshot/{x}` | OvhCloudPublicCloud/snapshot/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/sshkey` | OvhCloudPublicCloud/sshkey/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/sshkey` | OvhCloudPublicCloud/sshkey/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/sshkey/{x}` | OvhCloudPublicCloud/sshkey/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/storage` | OvhCloudPublicCloud/storage/listGet.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/storage/{x}` | OvhCloudPublicCloud/storage/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/storage/{x}` | OvhCloudPublicCloud/storage/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/storage/{x}` | OvhCloudPublicCloud/storage/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/storage/{x}/container` | OvhCloudPublicCloud/storage/listContainersGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/storage/{x}/container` | OvhCloudPublicCloud/storage/createContainerPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/storage/{x}/container/{x}` | OvhCloudPublicCloud/storage/deleteContainerDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/storage/{x}/container/{x}` | OvhCloudPublicCloud/storage/getContainerDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/storage/{x}/container/{x}` | OvhCloudPublicCloud/storage/updateContainerPut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/terminate` | OvhCloudPublicCloud/terminate/terminatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/unleash` | OvhCloudPublicCloud/unleash/unleashPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/current` | OvhCloudPublicCloud/usage/getCurrentGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/forecast` | OvhCloudPublicCloud/usage/getForecastGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/history` | OvhCloudPublicCloud/usage/listHistoryGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/history/{x}` | OvhCloudPublicCloud/usage/getHistoryDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/createPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/vrack` | OvhCloudPublicCloud/vrack/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/reference/blockStorage/capability/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumeCapabilityListGetByRegionNameGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/reference/blockStorage/plan/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumePlanCapabilityListGetByRegionNameGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/reference/capabilities/kubernetes` | OvhCloudPublicCloudAi/capabilities/kube/kubeListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/reference/capabilities/kubernetes/{x}` | OvhCloudPublicCloudAi/capabilities/kube/kubeGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/reference/capabilities/loadBalancer/getByRegionName` | OvhCloudPublicCloudAi/capabilities/loadbalancer/lbDetailGet.operation.ts |
| services (v1) | POST | `/services/{x}/reinstall` | OvhCloudServices/reinstallPost.operation.ts |
| services (v1) | GET | `/services/{x}/task` | OvhCloudServices/taskListGet.operation.ts |
| services (v1) | GET | `/services/{x}/task/{x}` | OvhCloudServices/taskGetGet.operation.ts |
| sms (v1) | DELETE | `/sms/{x}` | OvhCloudSms/resources/sms/smsDeleteDelete.operation.ts |
| sms (v1) | POST | `/sms/{x}/blacklists` | OvhCloudSms/resources/blacklist/blacklistCreatePost.operation.ts |
| ssl (v1) | GET | `/webhosting/resource/{x}/certificate` | OvhCloudSsl/resources/getCertificateByResourceName.operation.ts |
| ssl (v1) | POST | `/webhosting/resource/{x}/certificate` | OvhCloudSsl/resources/createCertificateByResourceName.operation.ts |
| ssl (v1) | PUT | `/webhosting/resource/{x}/certificate` | OvhCloudSsl/resources/updateCertificateByResourceName.operation.ts |
| telephony (v1) | GET | `/telephony/directories/countries` | OvhCloudTelephony/directories/directoriesCountriesGet.operation.ts |
| telephony (v1) | GET | `/telephony/directories/services` | OvhCloudTelephony/directories/directoriesServicesGet.operation.ts |
| telephony (v1) | GET | `/telephony/line/offer/details` | OvhCloudTelephony/offers/lineOfferDetailsGet.operation.ts |
| telephony (v1) | GET | `/telephony/lines/{x}/hardware` | OvhCloudTelephony/lines/linesHardwareListGet.operation.ts |
| telephony (v1) | POST | `/telephony/lines/{x}/hardware` | OvhCloudTelephony/lines/linesHardwarePost.operation.ts |
| telephony (v1) | GET | `/telephony/lines/{x}/number` | OvhCloudTelephony/lines/linesNumberListGet.operation.ts |
| telephony (v1) | POST | `/telephony/lines/{x}/number` | OvhCloudTelephony/lines/linesNumberPost.operation.ts |
| telephony (v1) | DELETE | `/telephony/lines/{x}/number/{x}` | OvhCloudTelephony/lines/linesNumberDelete.operation.ts |
| telephony (v1) | GET | `/telephony/lines/{x}/number/{x}` | OvhCloudTelephony/lines/linesNumberGet.operation.ts |
| telephony (v1) | PUT | `/telephony/lines/{x}/number/{x}` | OvhCloudTelephony/lines/linesNumberPut.operation.ts |
| telephony (v1) | GET | `/telephony/lines/{x}/portability` | OvhCloudTelephony/lines/linesPortabilityListGet.operation.ts |
| telephony (v1) | POST | `/telephony/lines/{x}/portability` | OvhCloudTelephony/lines/linesPortabilityPost.operation.ts |
| telephony (v1) | DELETE | `/telephony/lines/{x}/portability/{x}` | OvhCloudTelephony/lines/linesPortabilityDelete.operation.ts |
| telephony (v1) | GET | `/telephony/lines/{x}/portability/{x}` | OvhCloudTelephony/lines/linesPortabilityGet.operation.ts |
| telephony (v1) | PUT | `/telephony/lines/{x}/portability/{x}` | OvhCloudTelephony/lines/linesPortabilityPut.operation.ts |
| telephony (v1) | GET | `/telephony/lines/{x}/sim` | OvhCloudTelephony/lines/linesSimListGet.operation.ts |
| telephony (v1) | POST | `/telephony/lines/{x}/sim` | OvhCloudTelephony/lines/linesSimPost.operation.ts |
| telephony (v1) | DELETE | `/telephony/lines/{x}/sim/{x}` | OvhCloudTelephony/lines/linesSimDelete.operation.ts |
| telephony (v1) | GET | `/telephony/lines/{x}/sim/{x}` | OvhCloudTelephony/lines/linesSimGet.operation.ts |
| telephony (v1) | PUT | `/telephony/lines/{x}/sim/{x}` | OvhCloudTelephony/lines/linesSimPut.operation.ts |
| telephony (v1) | GET | `/telephony/numbers` | OvhCloudTelephony/numbers/numbersListGet.operation.ts |
| telephony (v1) | POST | `/telephony/numbers` | OvhCloudTelephony/numbers/numbersPost.operation.ts |
| telephony (v1) | DELETE | `/telephony/numbers/{x}` | OvhCloudTelephony/numbers/numbersDelete.operation.ts |
| telephony (v1) | GET | `/telephony/numbers/{x}` | OvhCloudTelephony/numbers/numbersGet.operation.ts |
| telephony (v1) | PUT | `/telephony/numbers/{x}` | OvhCloudTelephony/numbers/numbersPut.operation.ts |
| telephony (v1) | GET | `/telephony/numbers/{x}/portability` | OvhCloudTelephony/numbers/numbersPortabilityListGet.operation.ts |
| telephony (v1) | POST | `/telephony/numbers/{x}/portability` | OvhCloudTelephony/numbers/numbersPortabilityPost.operation.ts |
| telephony (v1) | DELETE | `/telephony/numbers/{x}/portability/{x}` | OvhCloudTelephony/numbers/numbersPortabilityDelete.operation.ts |
| telephony (v1) | GET | `/telephony/numbers/{x}/portability/{x}` | OvhCloudTelephony/numbers/numbersPortabilityGet.operation.ts |
| telephony (v1) | PUT | `/telephony/numbers/{x}/portability/{x}` | OvhCloudTelephony/numbers/numbersPortabilityPut.operation.ts |
| telephony (v1) | GET | `/telephony/trunks/{x}/hardware` | OvhCloudTelephony/trunks/trunksHardwareListGet.operation.ts |
| telephony (v1) | POST | `/telephony/trunks/{x}/hardware` | OvhCloudTelephony/trunks/trunksHardwarePost.operation.ts |
| telephony (v1) | GET | `/telephony/trunks/{x}/number` | OvhCloudTelephony/trunks/trunksNumberListGet.operation.ts |
| telephony (v1) | POST | `/telephony/trunks/{x}/number` | OvhCloudTelephony/trunks/trunksNumberPost.operation.ts |
| telephony (v1) | DELETE | `/telephony/trunks/{x}/number/{x}` | OvhCloudTelephony/trunks/trunksNumberDelete.operation.ts |
| telephony (v1) | GET | `/telephony/trunks/{x}/number/{x}` | OvhCloudTelephony/trunks/trunksNumberGet.operation.ts |
| telephony (v1) | PUT | `/telephony/trunks/{x}/number/{x}` | OvhCloudTelephony/trunks/trunksNumberPut.operation.ts |
| vps (v1) | POST | `/vps/{x}/automatedBackup/set` | OvhCloudVps/automatedBackupSetPost.operation.ts |
| vps (v1) | GET | `/vps/{x}/automaticBackups` | OvhCloudVps/automatedBackupList.operation.ts |
| vps (v1) | GET | `/vps/{x}/availableDatacenters` | OvhCloudVps/datacenterList.operation.ts |
| vps (v1) | POST | `/vps/{x}/backupftp/access/{x}` | OvhCloudVps/backupFtpAccessPostVps.operation.ts |
| vps (v1) | GET | `/vps/{x}/datacenter/availabilities/raw` | OvhCloudVps/datacenterAvailabilityRawGet.operation.ts |
| vps (v1) | POST | `/vps/{x}/disks/{x}` | OvhCloudVps/diskUpdatePut.operation.ts |
| vps (v1) | POST | `/vps/{x}/disks/create` | OvhCloudVps/diskCreatePost.operation.ts |
| vps (v1) | GET | `/vps/{x}/disks/monitoring/stats` | OvhCloudVps/diskMonitoringStatsGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/distribution/{x}` | OvhCloudVps/distributionGet.operation.ts |
| vps (v1) | POST | `/vps/{x}/distribution/update` | OvhCloudVps/distributionUpdatePut.operation.ts |
| vps (v1) | GET | `/vps/{x}/images` | OvhCloudVps/imageList.operation.ts |
| vps (v1) | GET | `/vps/{x}/images/{x}` | OvhCloudVps/imageGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/information` | OvhCloudVps/serviceInformationGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/ip` | OvhCloudVps/ipList.operation.ts |
| vps (v1) | GET | `/vps/{x}/ip/{x}` | OvhCloudVps/ipGeolocationGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/ip/{x}` | OvhCloudVps/ipGet.operation.ts |
| vps (v1) | POST | `/vps/{x}/ips` | OvhCloudVps/ipAdd.operation.ts |
| vps (v1) | GET | `/vps/{x}/ips/country/available` | OvhCloudVps/ipCountryAvailableGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/kernels` | OvhCloudVps/netbootConfigGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/migrations/2020/migration/{x}` | OvhCloudVps/migrationMigrationIdGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/migrations/2020/migration/{x}/{x}` | OvhCloudVps/migrationMigrationIdStepGet.operation.ts |
| vps (v1) | POST | `/vps/{x}/netboot/order/applyTemplate` | OvhCloudVps/templateApplyPost.operation.ts |
| vps (v1) | POST | `/vps/{x}/netboot/order/create` | OvhCloudVps/netbootCreatePost.operation.ts |
| vps (v1) | GET | `/vps/{x}/options` | OvhCloudVps/optionList.operation.ts |
| vps (v1) | GET | `/vps/{x}/options/{x}` | OvhCloudVps/optionDetailGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/order/netboot` | OvhCloudVps/netbootOrderGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/order/netboot/template` | OvhCloudVps/netbootTemplateDetailsGet.operation.ts |
| vps (v1) | DELETE | `/vps/{x}/reboot` | OvhCloudVps/powerRebootDelete.operation.ts |
| vps (v1) | GET | `/vps/{x}/secdns/domain` | OvhCloudVps/secondaryDnsDomainListDomains.operation.ts |
| vps (v1) | GET | `/vps/{x}/secdns/server` | OvhCloudVps/secondaryDnsServerList.operation.ts |
| vps (v1) | PUT | `/vps/{x}/secondaryDns/{x}` | OvhCloudVps/secondaryDnsAttachPut.operation.ts |
| vps (v1) | GET | `/vps/{x}/secret/key/get` | OvhCloudVps/serviceSecretGet.operation.ts |
| vps (v1) | POST | `/vps/{x}/snapshot/create` | OvhCloudVps/snapshotCreatePost.operation.ts |
| vps (v1) | GET | `/vps/{x}/snapshot/image/get` | OvhCloudVps/snapshotGetImageGet.operation.ts |
| vps (v1) | GET | `/vps/{x}/sshKey` | OvhCloudVps/sshKeyListGet.operation.ts |
| vps (v1) | DELETE | `/vps/{x}/stop` | OvhCloudVps/powerStopDelete.operation.ts |
| vps (v1) | PUT | `/vps/{x}/storage/disk/{x}` | OvhCloudVps/disksIdPut.operation.ts |
| vps (v1) | GET | `/vps/{x}/upgrade` | OvhCloudVps/availableUpgradeList.operation.ts |
| vps (v1) | GET | `/vps/template/{x}` | OvhCloudVps/templateGet.operation.ts |
| vrack (v1) | DELETE | `/vrack/{x}` | OvhCloudVrack/vrackDeleteDelete.operation.ts |
| vrack (v1) | GET | `/vrack/{x}/publicNetwork` | OvhCloudVrack/publicNetworkSubListGet.operation.ts |
| vrack (v1) | POST | `/vrack/{x}/publicNetwork` | OvhCloudVrack/publicNetworkSubCreatePost.operation.ts |
| vrack (v1) | GET | `/vrack/{x}/serviceOrder` | OvhCloudVrack/vrackServiceOrderListGet.operation.ts |
| vrack (v1) | POST | `/vrack/{x}/serviceOrder` | OvhCloudVrack/vrackServiceOrderCreatePost.operation.ts |
| vrack (v1) | GET | `/vrack/{x}/serviceOrder/{x}` | OvhCloudVrack/serviceOrderGetGet.operation.ts |
| vrack (v1) | GET | `/vrack/{x}/vRack` | OvhCloudVrack/vrackSubListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web` | OvhCloudHosting/list.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}` | OvhCloudHosting/findByDomain.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}` | OvhCloudHosting/get.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}` | OvhCloudHosting/list.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}` | OvhCloudHosting/hostingUpdate.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/abuseState` | OvhCloudHosting/serviceManagement/abuseStateGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/attachedDomain` | OvhCloudHosting/findByDomain.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/attachedDomain` | OvhCloudHosting/list.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/attachedDomain` | OvhCloudHosting/listAttachedDomains.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/attachedDomain` | OvhCloudHosting/attachedDomainCreate.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/attachedDomain/{x}` | OvhCloudHosting/attachedDomainDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/attachedDomain/{x}` | OvhCloudHosting/getAttachedDomain.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/attachedDomain/{x}` | OvhCloudHosting/attachedDomainUpdate.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/attachedDomain/{x}/digStatus` | OvhCloudHosting/attachedDomain/digStatusGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/attachedDomain/{x}/purgeCache` | OvhCloudHosting/attachedDomainPurgeCacheCreate.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/attachedDomain/{x}/restart` | OvhCloudHosting/attachedDomain/restartPost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/attachedDomain/{x}/ssl` | OvhCloudHosting/attachedDomain/sslDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/attachedDomain/{x}/ssl` | OvhCloudHosting/attachedDomain/sslGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/attachedDomain/{x}/ssl` | OvhCloudHosting/attachedDomain/sslCreatePost.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/attachedDomain/{x}/ssl` | OvhCloudHosting/attachedDomain/sslUpdatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/attachedDomain/{x}/ssl/regenerate` | OvhCloudHosting/attachedDomain/sslRegeneratePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/attachedDomain/{x}/ssl/report` | OvhCloudHosting/attachedDomain/sslReportGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/availableConfigurations` | OvhCloudHosting/serviceManagement/availableConfigurationsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/boostHistory` | OvhCloudHosting/boostHistory/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/boostHistory/{x}` | OvhCloudHosting/boostHistory/getGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/changeContact` | OvhCloudHosting/serviceManagement/changeContactPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/configuration` | OvhCloudHosting/configuration/getGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/configuration` | OvhCloudHosting/configurationPut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/confirmTermination` | OvhCloudHosting/serviceManagement/confirmTerminationCreate.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cron` | OvhCloudHosting/listCrons.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/cron` | OvhCloudHosting/cron/cronCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/cron/{x}` | OvhCloudHosting/cron/cronDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cron/{x}` | OvhCloudHosting/getCron.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/cron/{x}` | OvhCloudHosting/cron/cronUpdatePut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cronAvailableLanguage` | OvhCloudHosting/cronAvailableLanguage/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/database` | OvhCloudHosting/listDatabases.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/database/{x}` | OvhCloudHosting/getDatabase.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/database/{x}` | OvhCloudHosting/database/databaseUpdatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/database/create` | OvhCloudHosting/databaseCreatePost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/database/delete` | OvhCloudHosting/databaseDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/databaseAvailableType` | OvhCloudHosting/databaseAvailable/typeListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/databaseAvailableVersion` | OvhCloudHosting/databaseAvailable/versionListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/databaseCreationCapabilities` | OvhCloudHosting/databaseAvailable/creationCapabilitiesGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/dump` | OvhCloudHosting/dump/listGet.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/dump/{x}` | OvhCloudHosting/dump/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/dump/{x}` | OvhCloudHosting/dump/getGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/email` | OvhCloudHosting/email/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/email` | OvhCloudHosting/getEmail.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/email` | OvhCloudHosting/email/createPost.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/email` | OvhCloudHosting/email/updatePut.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/email/{x}` | OvhCloudHosting/email/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/email/bounces` | OvhCloudHosting/email/bouncesGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/email/request` | OvhCloudHosting/email/requestPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/email/volumes` | OvhCloudHosting/email/volumesGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/emailOption` | OvhCloudHosting/emailOption/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/emailOption/{x}` | OvhCloudHosting/emailOption/getGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/emailOption/{x}/serviceInfos` | OvhCloudHosting/emailOption/serviceInfosGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/emailOption/{x}/terminate` | OvhCloudHosting/emailOption/terminatePost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/env/set` | OvhCloudHosting/envVarSetCreate.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/envVar` | OvhCloudHosting/listEnvVars.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/envVar` | OvhCloudHosting/envVarCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/envVar/{x}` | OvhCloudHosting/envVarDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/envVar/{x}` | OvhCloudHosting/getEnvVar.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/envVar/{x}` | OvhCloudHosting/envVarUpdatePut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/extraSqlPerso` | OvhCloudHosting/extraSqlPerso/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/extraSqlPerso/{x}` | OvhCloudHosting/extraSqlPerso/getGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/extraSqlPerso/{x}/databases` | OvhCloudHosting/extraSqlPerso/databasesGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/extraSqlPerso/{x}/serviceInfos` | OvhCloudHosting/extraSqlPerso/serviceInfosGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/extraSqlPerso/{x}/serviceInfosUpdate` | OvhCloudHosting/extraSqlPerso/serviceInfosUpdatePost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/extraSqlPerso/{x}/terminate` | OvhCloudHosting/extraSqlPerso/terminatePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/freedom` | OvhCloudHosting/freedom/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/indy` | OvhCloudHosting/indy/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/indy/{x}` | OvhCloudHosting/indy/getGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/key/ssh` | OvhCloudHosting/key/sshListGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/key/ssh` | OvhCloudHosting/key/sshCreatePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/localSeo/account` | OvhCloudHosting/localSeo/accountListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/localSeo/account/{x}` | OvhCloudHosting/localSeo/accountGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/localSeo/account/{x}/login` | OvhCloudHosting/localSeo/accountLoginPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/localSeo/emailAvailability` | OvhCloudHosting/localSeo/emailAvailabilityGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/localSeo/location` | OvhCloudHosting/localSeo/locationListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/localSeo/location/{x}` | OvhCloudHosting/localSeo/locationGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/localSeo/location/{x}/serviceInfos` | OvhCloudHosting/localSeo/locationServiceInfosGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/localSeo/location/{x}/serviceInfosUpdate` | OvhCloudHosting/localSeo/locationServiceInfosUpdatePost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/localSeo/location/{x}/terminate` | OvhCloudHosting/localSeo/locationTerminatePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/log/kind` | OvhCloudHosting/log/kindListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/log/kind/{x}` | OvhCloudHosting/log/kindGetGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/log/subscription` | OvhCloudHosting/log/subscriptionListGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/log/subscription` | OvhCloudHosting/log/subscriptionCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/log/subscription/{x}` | OvhCloudHosting/log/subscriptionDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/log/subscription/{x}` | OvhCloudHosting/log/subscriptionGetGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/log/url` | OvhCloudHosting/log/urlCreatePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/metricsToken` | OvhCloudHosting/serviceManagement/metricsTokenGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/module` | OvhCloudHosting/listModules.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/module` | OvhCloudHosting/module/listGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/module` | OvhCloudHosting/module/createPost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/module/{x}` | OvhCloudHosting/module/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/module/{x}` | OvhCloudHosting/getModule.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/module/{x}` | OvhCloudHosting/module/updatePut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ovhConfig` | OvhCloudHosting/ovhConfig/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ovhConfig/{x}` | OvhCloudHosting/ovhConfig/getGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ovhConfig/{x}/changeConfiguration` | OvhCloudHosting/ovhConfig/changeConfigurationPost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ovhConfig/{x}/rollback` | OvhCloudHosting/ovhConfig/rollbackPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ovhConfigCapabilities` | OvhCloudHosting/ovhConfig/capabilitiesGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ovhConfigRecommendedValues` | OvhCloudHosting/ovhConfig/recommendedValuesGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ovhConfigRefresh` | OvhCloudHosting/ovhConfig/refreshPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ownLogs` | OvhCloudHosting/ownLogs/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ownLogs/{x}` | OvhCloudHosting/ownLogs/getGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ownLogs/{x}/userLogs` | OvhCloudHosting/ownLogs/userLogsListGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ownLogs/{x}/userLogs` | OvhCloudHosting/ownLogs/userLogsCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/ownLogs/{x}/userLogs/{x}` | OvhCloudHosting/ownLogs/userLogsDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ownLogs/{x}/userLogs/{x}` | OvhCloudHosting/ownLogs/userLogsGetGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/ownLogs/{x}/userLogs/{x}` | OvhCloudHosting/ownLogs/userLogsUpdatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ownLogs/{x}/userLogs/{x}/changePassword` | OvhCloudHosting/ownLogs/userLogsChangePasswordPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/privateDatabase/{x}` | OvhCloudHosting/privateDatabase/getGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/privateDatabaseCreationCapabilities` | OvhCloudHosting/privateDatabase/creationCapabilitiesGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/privateDatabases` | OvhCloudHosting/privateDatabase/listGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/request` | OvhCloudHosting/serviceManagement/requestPost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/requestBoost` | OvhCloudHosting/serviceManagement/requestBoostPost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/restoreSnapshot` | OvhCloudHosting/restoreSnapshot/createPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/runtime` | OvhCloudHosting/listRuntimes.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/runtime` | OvhCloudHosting/runtime/listGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/runtime` | OvhCloudHosting/runtime/createPost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/runtime/{x}` | OvhCloudHosting/runtime/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/runtime/{x}` | OvhCloudHosting/getRuntime.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/runtime/{x}` | OvhCloudHosting/runtime/getGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/runtime/{x}` | OvhCloudHosting/runtime/updatePut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/runtime/{x}/attachedDomains` | OvhCloudHosting/runtime/attachedDomainsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/runtimeAvailableTypes` | OvhCloudHosting/runtime/availableTypesGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/serviceInfos` | OvhCloudHosting/getServiceInfos.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/serviceInfos` | OvhCloudHosting/serviceInfosUpdatePut.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/ssl` | OvhCloudHosting/sslService/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ssl` | OvhCloudHosting/getSsl.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ssl` | OvhCloudHosting/sslService/listGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ssl` | OvhCloudHosting/sslService/createPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ssl/{x}` | OvhCloudHosting/sslService/getGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ssl/defaultSslCertificate` | OvhCloudHosting/defaultSslCertificateCreate.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ssl/domains` | OvhCloudHosting/sslService/domainsGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ssl/importCustomCertificate` | OvhCloudHosting/importCustomCertificateCreate.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/ssl/regenerate` | OvhCloudHosting/sslService/regeneratePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/ssl/report` | OvhCloudHosting/sslService/reportGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/statistics` | OvhCloudHosting/statistics/statisticsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/tasks` | OvhCloudHosting/listTasks.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/tasks/{x}` | OvhCloudHosting/getTask.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/terminate` | OvhCloudHosting/serviceManagement/terminateCreate.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/token` | OvhCloudHosting/token/getGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/unblockTCPOut` | OvhCloudHosting/serviceManagement/unblockTCPOutPut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/user` | OvhCloudHosting/listUsers.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/user` | OvhCloudHosting/user/createPost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/user/{x}` | OvhCloudHosting/user/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/user/{x}` | OvhCloudHosting/getUser.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/user/{x}/changePassword` | OvhCloudHosting/user/changePasswordPost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/user/update` | OvhCloudHosting/userUpdatePut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/userLogs` | OvhCloudHosting/userLogs/listGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/userLogs` | OvhCloudHosting/userLogs/createPost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/userLogs/{x}` | OvhCloudHosting/userLogs/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/userLogs/{x}` | OvhCloudHosting/userLogs/getGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/userLogs/{x}` | OvhCloudHosting/userLogs/updatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/userLogs/{x}/changePassword` | OvhCloudHosting/userLogs/changePasswordPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/userLogsToken` | OvhCloudHosting/serviceManagement/userLogsTokenGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/vcs/webhooks` | OvhCloudHosting/vcs/webhooksGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/attachedDomain` | OvhCloudHosting/findByDomain.operation.ts |
| webhosting (v2) | GET | `/hosting/web/availableOffer` | OvhCloudHosting/availableOfferGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}` | OvhCloudHosting/cdn/cdnGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/availableOptions` | OvhCloudHosting/cdn/cdnAvailableOptionsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/domain` | OvhCloudHosting/cdn/cdnDomainListGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/cdn/{x}/domain` | OvhCloudHosting/cdn/cdnDomainCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/cdn/{x}/domain/{x}` | OvhCloudHosting/cdn/cdnDomainDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/domain/{x}` | OvhCloudHosting/cdn/cdnDomainGetGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/domain/{x}/logs` | OvhCloudHosting/cdn/cdnDomainLogsGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/cdn/{x}/domain/{x}/option` | OvhCloudHosting/cdn/cdnDomainOptionCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/cdn/{x}/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionGetGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/cdn/{x}/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionUpdatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/cdn/{x}/domain/{x}/purge` | OvhCloudHosting/cdn/cdnDomainPurgePost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/cdn/{x}/domain/{x}/refresh` | OvhCloudHosting/cdn/cdnDomainRefreshPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/domain/{x}/statistics` | OvhCloudHosting/cdn/cdnDomainStatisticsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/domain/option` | OvhCloudHosting/cdn/cdnDomainOptionListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/operation` | OvhCloudHosting/cdn/cdnOperationListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/operation/{x}` | OvhCloudHosting/cdn/cdnOperationGetGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/cdn/{x}/serviceInfos` | OvhCloudHosting/cdn/cdnServiceInfosGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/cdn/{x}/serviceInfos` | OvhCloudHosting/cdn/cdnServiceInfosUpdatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/cdn/{x}/terminate` | OvhCloudHosting/cdn/cdnTerminateCreate.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/capabilities` | OvhCloudHosting/databaseSub/capabilitiesGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/database/{x}/{x}/changePassword` | OvhCloudHosting/databaseSub/changePasswordPut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/copy` | OvhCloudHosting/databaseSub/copyListGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/database/{x}/{x}/copy` | OvhCloudHosting/databaseSub/copyPost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/database/{x}/{x}/copy/{x}` | OvhCloudHosting/databaseSub/copyDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/copy/{x}` | OvhCloudHosting/databaseSub/copyGetGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/database/{x}/{x}/copyRestore` | OvhCloudHosting/databaseSub/copyRestorePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/dump` | OvhCloudHosting/databaseSub/dumpGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/database/{x}/{x}/dump` | OvhCloudHosting/databaseSub/dumpCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/database/{x}/{x}/dump/{x}` | OvhCloudHosting/databaseSub/dumpDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/dump/{x}` | OvhCloudHosting/databaseSub/dumpGetGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/database/{x}/{x}/dump/{x}/restore` | OvhCloudHosting/databaseSub/dumpRestorePost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/database/{x}/{x}/import` | OvhCloudHosting/databaseSub/importPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/metricsToken` | OvhCloudHosting/databaseSub/metricsTokenGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/request` | OvhCloudHosting/databaseSub/requestListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/restore` | OvhCloudHosting/databaseSub/restoreGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/database/{x}/{x}/restore` | OvhCloudHosting/databaseSub/restoreCreatePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/database/{x}/{x}/statistics` | OvhCloudHosting/databaseSub/statisticsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/incident` | OvhCloudHosting/incidentGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/localSeo/directoriesList` | OvhCloudHosting/localSeo/directoriesListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/localSeo/emailAvailability` | OvhCloudHosting/localSeo/emailAvailabilityGlobalGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/localSeo/visibilityCheck` | OvhCloudHosting/localSeo/visibilityCheckPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/localSeo/visibilityCheckResult` | OvhCloudHosting/localSeo/visibilityCheckResultGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/moduleList` | OvhCloudHosting/moduleList/listGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/moduleList/{x}` | OvhCloudHosting/moduleList/getById.operation.ts |
| webhosting (v2) | GET | `/hosting/web/offerCapabilities` | OvhCloudHosting/offerCapabilitiesGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/vcs/supported` | OvhCloudHosting/vcs/supportedGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/website/{x}` | OvhCloudHosting/website/listGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/website/{x}` | OvhCloudHosting/website/createPost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/website/{x}/{x}` | OvhCloudHosting/website/deleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/website/{x}/{x}` | OvhCloudHosting/website/getGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/website/{x}/{x}` | OvhCloudHosting/website/updatePut.operation.ts |
| webhosting (v2) | GET | `/hosting/web/website/{x}/{x}/deployment` | OvhCloudHosting/website/deploymentGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/website/{x}/{x}/deployment` | OvhCloudHosting/website/deploymentCreatePost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/website/{x}/{x}/deployment/{x}` | OvhCloudHosting/website/deploymentGetById.operation.ts |
| webhosting (v2) | GET | `/hosting/web/website/{x}/{x}/deployment/{x}/logs` | OvhCloudHosting/website/deploymentLogsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/website/{x}/creationCapabilities` | OvhCloudHosting/website/creationCapabilitiesGet.operation.ts |
| webhosting (v2) | GET | `/ssl` | OvhCloudSsl/resources/listAllDomains.operation.ts |
| webhosting (v2) | GET | `/ssl/{x}` | OvhCloudSsl/resources/certificateGetGet.operation.ts |
| webhosting (v2) | GET | `/ssl/{x}/serviceInfos` | OvhCloudSsl/resources/serviceInfosGetGet.operation.ts |
| webhosting (v2) | PUT | `/ssl/{x}/serviceInfos` | OvhCloudSsl/resources/serviceInfosUpdatePut.operation.ts |
| webhosting (v2) | GET | `/ssl/{x}/tasks` | OvhCloudSsl/resources/taskListGet.operation.ts |
| webhosting (v2) | GET | `/ssl/{x}/tasks/{x}` | OvhCloudSsl/resources/taskGetGet.operation.ts |
| webhosting (v2) | POST | `/webhosting/resource/{x}/attachedDomain` | OvhCloudHosting/v2/attachedDomain/createPostV2.operation.ts |
| webhosting (v2) | POST | `/webhosting/resource/{x}/certificate` | OvhCloudSsl/resources/createCertificateByResourceName.operation.ts |
| webhosting (v2) | PUT | `/webhosting/resource/{x}/certificate` | OvhCloudSsl/resources/updateCertificateByResourceName.operation.ts |
| webhosting (v2) | POST | `/webhosting/resource/{x}/ssl/import` | OvhCloudHosting/v2/ssl/importCustomCertificatePostV2.operation.ts |
| webhosting (v2) | DELETE | `/webhosting/resource/{x}/user` | OvhCloudHosting/v2/user/deleteUserV2.operation.ts |
| webhosting (v2) | DELETE | `/webhosting/resource/{x}/website` | OvhCloudHosting/v2/website/deleteDeleteByWebsiteIdGetV2.operation.ts |

## Notes

- Le mapping spec→node est le tableau manuel partagé avec `compare-coverage.js`.
- La conformité repose sur une analyse statique (voir les limites en en-tête du script).
- Les champs body requis sont lus depuis les paramètres `body` nommés (Type A) ou depuis le modèle pointé par l’objet body (Type B).