# OVHcloud API Conformity Report

> Généré par `scripts/audit-conformity.js` le 2026-08-07T16:01:42.760Z. Document généré automatiquement — ne pas éditer à la main.

Ce rapport vérifie que les opérations des nodes respectent leur spec (méthode, chemin, paramètres path requis, query requis, champs body requis).

## Résumé

- **Opérations auditées** : 8131
- **Conformes** : 5174
- **Non conformes** : 2957
- **Sans correspondance spec** (informatif) : 2491
- **Taux de conformité** : **63.6%**

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
| xdsl (v1) | 142 | 113 | 29 | 79.6% |
| managedCMS (v2) | 17 | 14 | 3 | 82.4% |
| notification (v2) | 19 | 16 | 3 | 84.2% |
| vmwareCloudDirector (v2) | 32 | 27 | 5 | 84.4% |
| dedicated (v1) | 168 | 93 | 26 | 55.4% |
| ip (v1) | 92 | 68 | 13 | 73.9% |
| vps (v1) | 135 | 78 | 18 | 57.8% |
| backupServices (v2) | 15 | 13 | 2 | 86.7% |
| newAccount (v1) | 8 | 7 | 1 | 87.5% |
| vrackServices (v2) | 8 | 7 | 1 | 87.5% |
| order (v1) | 789 | 447 | 92 | 56.7% |
| service (v1) | 9 | 8 | 1 | 88.9% |
| veeamCloudConnect (v1) | 14 | 13 | 1 | 92.9% |
| cloud (v1) | 1129 | 673 | 44 | 59.6% |
| hosting (v1) | 237 | 169 | 7 | 71.3% |
| me (v1) | 309 | 300 | 9 | 97.1% |
| horizonView (v1) | 42 | 41 | 1 | 97.6% |
| emailDomain (v1) | 107 | 105 | 2 | 98.1% |
| vrack (v1) | 75 | 67 | 1 | 89.3% |
| webhosting (v2) | 246 | 12 | 3 | 4.9% |
| domain (v1) | 119 | 109 | 1 | 91.6% |
| telephony (v1) | 644 | 602 | 5 | 93.5% |
| publicCloud (v2) | 1129 | 26 | 4 | 2.3% |
| price (v1) | 581 | 581 | 0 | 100% |
| emailExchange (v1) | 203 | 203 | 0 | 100% |
| sms (v1) | 126 | 124 | 0 | 98.4% |
| ipLoadbalancing (v1) | 121 | 121 | 0 | 100% |
| domain (v2) | 119 | 9 | 0 | 7.6% |
| email (v1) | 108 | 59 | 0 | 54.6% |
| hostingPrivateDatabase (v1) | 72 | 72 | 0 | 100% |
| msServices (v1) | 57 | 55 | 0 | 96.5% |
| cluster (v1) | 50 | 42 | 0 | 84% |
| services (v1) | 50 | 47 | 0 | 94% |
| emailMxplan (v1) | 46 | 46 | 0 | 100% |
| dedicatedNasha (v1) | 39 | 39 | 0 | 100% |
| pack (v1) | 39 | 33 | 0 | 84.6% |
| dedicatedCeph (v1) | 35 | 35 | 0 | 100% |
| freefax (v1) | 19 | 18 | 0 | 94.7% |
| saas (v1) | 19 | 19 | 0 | 100% |
| dedicatedHousing (v1) | 18 | 18 | 0 | 100% |
| metrics (v1) | 13 | 12 | 0 | 92.3% |
| dedicatedCluster (v1) | 9 | 9 | 0 | 100% |
| dedicatedInstallationTemplate (v1) | 9 | 9 | 0 | 100% |
| license (v1) | 9 | 7 | 0 | 77.8% |
| licenseCloudLinux (v1) | 9 | 0 | 0 | 0% |
| licenseCpanel (v1) | 9 | 0 | 0 | 0% |
| licenseDirectadmin (v1) | 9 | 0 | 0 | 0% |
| licenseHycu (v1) | 9 | 0 | 0 | 0% |
| licenseOffice (v1) | 9 | 0 | 0 | 0% |
| licenseOfficePrepaid (v1) | 9 | 0 | 0 | 0% |
| licensePlesk (v1) | 9 | 0 | 0 | 0% |
| licenseRedhat (v1) | 9 | 0 | 0 | 0% |
| licenseSqlserver (v1) | 9 | 0 | 0 | 0% |
| licenseVirtuozzo (v1) | 9 | 0 | 0 | 0% |
| licenseWindows (v1) | 9 | 0 | 0 | 0% |
| ssl (v1) | 9 | 6 | 0 | 66.7% |
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

### cloud — 44 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/cloud/project/{x}/database/cassandra/{x}/integration` | OvhCloudPublicCloud/database/cassandra/integrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/cassandra/{x}/log/subscription` | OvhCloudPublicCloud/database/cassandra/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/cassandra/{x}/log/url` | OvhCloudPublicCloud/database/cassandra/logUrlCreatePost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/cassandra/{x}/metric/{x}` | OvhCloudPublicCloud/database/cassandra/metricGetGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/database` | OvhCloudPublicCloud/database/clickhouse/databaseCreatePost.operation.ts | missing required body field 'name' |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/integration` | OvhCloudPublicCloud/database/clickhouse/integrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/log/url` | OvhCloudPublicCloud/database/clickhouse/logUrlCreatePost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/metric/{x}` | OvhCloudPublicCloud/database/clickhouse/metricGetGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/kafka/{x}/log/subscription` | OvhCloudPublicCloud/database/kafka/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/kafka/{x}/log/url` | OvhCloudPublicCloud/database/kafka/logUrlCreatePost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/kafka/{x}/metric/{x}` | OvhCloudPublicCloud/database/kafka/metricGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/kafka/{x}/schemaRegistryAcl` | OvhCloudPublicCloud/database/kafka/schemaRegistryAclCreatePost.operation.ts | missing required body field 'permission'; missing required body field 'resource'; missing required body field 'username' |
| POST | `/cloud/project/{x}/database/kafka/{x}/topic` | OvhCloudPublicCloud/database/kafka/topicCreatePost.operation.ts | missing required body field 'name' |
| POST | `/cloud/project/{x}/database/kafka/{x}/topicAcl` | OvhCloudPublicCloud/database/kafka/topicAclCreatePost.operation.ts | missing required body field 'permission'; missing required body field 'topic'; missing required body field 'username' |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration` | OvhCloudPublicCloud/database/kafkaMirrorMaker/integrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/url` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logUrlPost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/metric/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/metricNameGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication` | OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationCreatePost.operation.ts | missing required body field 'enabled'; missing required body field 'sourceIntegration'; missing required body field 'targetIntegration' |
| PUT | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationUpdatePut.operation.ts | missing required body field 'enabled' |
| POST | `/cloud/project/{x}/database/m3aggregator/{x}/integration` | OvhCloudPublicCloud/database/m3aggregator/integrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/m3aggregator/{x}/log/url` | OvhCloudPublicCloud/database/m3aggregator/logUrlPost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/metric/{x}` | OvhCloudPublicCloud/database/m3aggregator/metricNameGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/m3db/{x}/integration` | OvhCloudPublicCloud/database/m3db/M3dbIntegrationCreatePost.operation.ts | missing required body field 'destinationServiceId'; missing required body field 'sourceServiceId' |
| POST | `/cloud/project/{x}/database/m3db/{x}/log/subscription` | OvhCloudPublicCloud/database/m3db/M3dbLogSubscriptionCreatePost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/cloud/project/{x}/database/m3db/{x}/log/url` | OvhCloudPublicCloud/database/m3db/M3dbLogUrlCreatePost.operation.ts | missing required body field 'kind' |
| GET | `/cloud/project/{x}/database/m3db/{x}/metric/{x}` | OvhCloudPublicCloud/database/m3db/M3dbMetricGetGet.operation.ts | missing required query param 'period' |
| POST | `/cloud/project/{x}/database/m3db/{x}/namespace` | OvhCloudPublicCloud/database/m3db/M3dbNamespaceCreatePost.operation.ts | missing required body field 'name'; missing required body field 'resolution'; missing required body field 'type' |
| POST | `/cloud/project/{x}/database/m3db/{x}/user` | OvhCloudPublicCloud/database/m3db/M3dbUserCreatePost.operation.ts | missing required body field 'name' |
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

### dedicated — 26 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/dedicated/server/{x}/confirmTermination` | OvhCloudDedicated/resources/confirmTerminationCreate.operation.ts | missing required body field 'token' |
| POST | `/dedicated/server/{x}/features/backupFTP/access` | OvhCloudDedicated/resources/backupFtpAccessPost.operation.ts | missing required body field 'cifs'; missing required body field 'ipBlock'; missing required body field 'nfs' |
| GET | `/dedicated/server/{x}/features/ipmi/access` | OvhCloudDedicated/resources/featuresIpmiAccessGet.operation.ts | missing required query param 'type' |
| GET | `/dedicated/server/{x}/features/ipmi/test` | OvhCloudDedicated/resources/featuresIpmiTestGet.operation.ts | missing required query param 'type' |
| GET | `/dedicated/server/{x}/install/compatibleTemplatePartitionSchemes` | OvhCloudDedicated/resources/installCompatibleTemplatePartitionSchemesGet.operation.ts | missing required query param 'templateName' |
| POST | `/dedicated/server/{x}/ipBlockMerge` | OvhCloudDedicated/resources/ipBlockMergePost.operation.ts | missing required body field 'block' |
| GET | `/dedicated/server/{x}/ipCanBeMovedTo` | OvhCloudDedicated/resources/ipCanBeMovedToGet.operation.ts | missing required query param 'ip' |
| POST | `/dedicated/server/{x}/ipMove` | OvhCloudDedicated/resources/ipMovePost.operation.ts | missing required body field 'ip' |
| POST | `/dedicated/server/{x}/license/windows` | OvhCloudDedicated/resources/licenseWindowsPost.operation.ts | missing required body field 'licenseId'; missing required body field 'version' |
| GET | `/dedicated/server/{x}/mrtg` | OvhCloudDedicated/resources/mrtgGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| GET | `/dedicated/server/{x}/networkInterfaceController/{x}/mrtg` | OvhCloudDedicated/resources/networkInterfaceControllerMrtgGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| POST | `/dedicated/server/{x}/ola/aggregation` | OvhCloudDedicated/resources/olaAggregationPost.operation.ts | missing required body field 'name'; missing required body field 'virtualNetworkInterfaces' |
| POST | `/dedicated/server/{x}/ola/group` | OvhCloudDedicated/resources/olaGroupPost.operation.ts | missing required body field 'name'; missing required body field 'virtualNetworkInterfaces' |
| POST | `/dedicated/server/{x}/ola/ungroup` | OvhCloudDedicated/resources/olaUngroupPost.operation.ts | missing required body field 'virtualNetworkInterface' |
| GET | `/dedicated/server/{x}/orderable/feature` | OvhCloudDedicated/resources/orderableFeatureGet.operation.ts | missing required query param 'feature' |
| POST | `/dedicated/server/{x}/reinstall` | OvhCloudDedicated/resources/reinstallPost.operation.ts | missing required body field 'operatingSystem' |
| POST | `/dedicated/server/{x}/secondaryDnsDomains` | OvhCloudDedicated/resources/secondaryDnsDomainsCreatePost.operation.ts | missing required body field 'domain' |
| GET | `/dedicated/server/{x}/secondaryDnsNameDomainToken` | OvhCloudDedicated/resources/secondaryDnsNameDomainTokenGet.operation.ts | missing required query param 'domain' |
| POST | `/dedicated/server/{x}/spla` | OvhCloudDedicated/resources/splaCreatePost.operation.ts | missing required body field 'serialNumber'; missing required body field 'type' |
| GET | `/dedicated/server/{x}/task/{x}/availableTimeslots` | OvhCloudDedicated/resources/taskAvailableTimeslotsGet.operation.ts | missing required query param 'periodEnd'; missing required query param 'periodStart' |
| POST | `/dedicated/server/{x}/task/{x}/schedule` | OvhCloudDedicated/resources/taskSchedulePost.operation.ts | missing required body field 'hasPerformedBackup'; missing required body field 'wantedBeginingDate' |
| POST | `/dedicated/server/{x}/virtualMac` | OvhCloudDedicated/resources/virtualMacCreatePost.operation.ts | missing required body field 'ipAddress'; missing required body field 'type'; missing required body field 'virtualMachineName' |
| POST | `/dedicated/server/{x}/virtualMac/{x}/virtualAddress` | OvhCloudDedicated/resources/virtualMacVirtualAddressCreatePost.operation.ts | missing required body field 'ipAddress'; missing required body field 'virtualMachineName' |
| GET | `/dedicated/server/{x}/vrack/{x}/mrtg` | OvhCloudDedicated/resources/vrackMrtgGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| GET | `/dedicated/server/availabilities` | OvhCloudDedicated/resources/availabilitiesGet.operation.ts | missing required query param 'country' |
| GET | `/dedicated/server/osAvailabilities` | OvhCloudDedicated/resources/osAvailabilitiesGet.operation.ts | missing required query param 'hardware' |

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

### emailDomain — 2 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/email/domain/{x}/redirection` | OvhCloudEmailDomain/domainRedirection/DomainRedirectionCreate.operation.ts | missing required body field 'from'; missing required body field 'localCopy'; missing required body field 'to' |
| POST | `/email/domain/{x}/redirection/{x}/changeRedirection` | OvhCloudEmailDomain/domainRedirection/DomainRedirectionChangeCreate.operation.ts | missing required body field 'to' |

### horizonView — 1 non-conformité

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/horizonView/{x}/accessPoint/{x}/enableTwoFA` | OvhCloudHorizonView/resources/accessPoint/enableTwoFAPost.operation.ts | missing required body field 'radiusIp'; missing required body field 'secret' |

### hosting — 7 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/hosting/web/{x}/cdn/domain/{x}/option` | OvhCloudHosting/cdn/cdnDomainOptionCreatePost.operation.ts | missing required body field 'type' |
| PUT | `/hosting/web/{x}/cdn/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionUpdatePut.operation.ts | missing required body field 'enabled'; missing required body field 'type' |
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

### order — 92 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/order/cart/{x}/coupon` | OvhCloudOrder/cart/cartCouponCreatePost.operation.ts | missing required body field 'coupon' |
| POST | `/order/cart/{x}/domain` | OvhCloudOrder/cart/domain/cartDomainPOST.operation.ts | missing required body field 'domain' |
| POST | `/order/cart/{x}/domainPacks` | OvhCloudOrder/cart/domainPacks/cartDomainPacksPOST.operation.ts | missing required body field 'domain' |
| POST | `/order/cart/{x}/item/{x}/configuration` | OvhCloudOrder/cart/cartItemConfigurationCreatePost.operation.ts | missing required body field 'label'; missing required body field 'value' |
| POST | `/order/cart/{x}/support` | OvhCloudOrder/cart/cartSupportCreatePost.operation.ts | missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/baremetalServers/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionBaremetalServersCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/cloud/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionCloudCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/dedicated/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionDedicatedCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/dns/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionDnsCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/domain/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionDomainCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/emailpro/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionEmailproCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/ipLoadbalancing/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionIpLoadbalancingCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/licenseHycu/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionLicenseHycuCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/logs/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionLogsCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/microsoft/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionMicrosoftCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/microsoftExchange/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionMicrosoftExchangeCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/nutanix/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionNutanixCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/office365Prepaid/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionOffice365PrepaidCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/officePrepaid/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionOfficePrepaidCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/privateCloud/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionPrivateCloudCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/privateCloudEnterprise/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionPrivateCloudEnterpriseCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/privateCloudReseller/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionPrivateCloudResellerCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/privateCloudResellerEnterprise/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionPrivateCloudResellerEnterpriseCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/sharepoint/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionSharepointCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/sms/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionSmsCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/sncNetworkServices/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionSncNetworkServicesCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/sslGateway/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionSslGatewayCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/vdi/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionVdiCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/vmwareCloudDirector/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionVmwareCloudDirectorCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/vps/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionVpsCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/vrack/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionVrackCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| POST | `/order/cartServiceOption/webHosting/{x}` | OvhCloudOrder/cartServiceOption/cartServiceOptionWebHostingCreatePost.operation.ts | missing required body field 'cartId'; missing required body field 'duration'; missing required body field 'planCode'; missing required body field 'pricingMode'; missing required body field 'quantity' |
| GET | `/order/dedicated/server/{x}/backupStorage/{x}` | OvhCloudOrder/dedicated/dedicatedServerBackupStorageListGet.operation.ts | missing required query param 'capacity' |
| POST | `/order/dedicated/server/{x}/backupStorage/{x}` | OvhCloudOrder/dedicated/dedicatedServerBackupStorageCreatePost.operation.ts | missing required body field 'capacity' |
| GET | `/order/dedicated/server/{x}/bandwidth/{x}` | OvhCloudOrder/dedicated/dedicatedServerBandwidthListGet.operation.ts | missing required query param 'bandwidth'; missing required query param 'type' |
| POST | `/order/dedicated/server/{x}/bandwidth/{x}` | OvhCloudOrder/dedicated/dedicatedServerBandwidthCreatePost.operation.ts | missing required body field 'bandwidth'; missing required body field 'type' |
| GET | `/order/dedicated/server/{x}/bandwidthvRack/{x}` | OvhCloudOrder/dedicated/dedicatedServerBandwidthvRackListGet.operation.ts | missing required query param 'bandwidth' |
| POST | `/order/dedicated/server/{x}/bandwidthvRack/{x}` | OvhCloudOrder/dedicated/dedicatedServerBandwidthvRackCreatePost.operation.ts | missing required body field 'bandwidth' |
| GET | `/order/dedicated/server/{x}/feature/{x}` | OvhCloudOrder/dedicated/dedicatedServerFeatureListGet.operation.ts | missing required query param 'feature' |
| POST | `/order/dedicated/server/{x}/feature/{x}` | OvhCloudOrder/dedicated/dedicatedServerFeatureCreatePost.operation.ts | missing required body field 'feature' |
| GET | `/order/dedicated/server/{x}/firewall/{x}` | OvhCloudOrder/dedicated/dedicatedServerFirewallListGet.operation.ts | missing required query param 'firewallModel' |
| POST | `/order/dedicated/server/{x}/firewall/{x}` | OvhCloudOrder/dedicated/dedicatedServerFirewallCreatePost.operation.ts | missing required body field 'firewallModel' |
| GET | `/order/dedicated/server/{x}/ipMigration/{x}` | OvhCloudOrder/dedicated/dedicatedServerIpMigrationListGet.operation.ts | missing required query param 'ip'; missing required query param 'token' |
| POST | `/order/dedicated/server/{x}/ipMigration/{x}` | OvhCloudOrder/dedicated/dedicatedServerIpMigrationCreatePost.operation.ts | missing required body field 'ip'; missing required body field 'token' |
| GET | `/order/dedicated/server/{x}/traffic/{x}` | OvhCloudOrder/dedicated/dedicatedServerTrafficListGet.operation.ts | missing required query param 'traffic' |
| POST | `/order/dedicated/server/{x}/traffic/{x}` | OvhCloudOrder/dedicated/dedicatedServerTrafficCreatePost.operation.ts | missing required body field 'traffic' |
| GET | `/order/dedicated/server/{x}/usbKey/{x}` | OvhCloudOrder/dedicated/dedicatedServerUsbKeyListGet.operation.ts | missing required query param 'capacity' |
| POST | `/order/dedicated/server/{x}/usbKey/{x}` | OvhCloudOrder/dedicated/dedicatedServerUsbKeyCreatePost.operation.ts | missing required body field 'capacity' |
| GET | `/order/dedicatedCloud/{x}/additionalBandwidth/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudAdditionalBandwidthListGet.operation.ts | missing required query param 'bandwidth' |
| POST | `/order/dedicatedCloud/{x}/additionalBandwidth/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudAdditionalBandwidthCreatePost.operation.ts | missing required body field 'bandwidth' |
| GET | `/order/dedicatedCloud/{x}/filer/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudFilerListGet.operation.ts | missing required query param 'name' |
| POST | `/order/dedicatedCloud/{x}/filer/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudFilerCreatePost.operation.ts | missing required body field 'name' |
| GET | `/order/dedicatedCloud/{x}/host/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudHostListGet.operation.ts | missing required query param 'datacenterId'; missing required query param 'name' |
| POST | `/order/dedicatedCloud/{x}/host/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudHostCreatePost.operation.ts | missing required body field 'datacenterId'; missing required body field 'name' |
| GET | `/order/dedicatedCloud/{x}/ip/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudIpListGet.operation.ts | missing required query param 'country'; missing required query param 'description'; missing required query param 'estimatedClientsNumber'; missing required query param 'networkName'; missing required query param 'size'; missing required query param 'usage' |
| POST | `/order/dedicatedCloud/{x}/ip/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudIpCreatePost.operation.ts | missing required body field 'country'; missing required body field 'description'; missing required body field 'estimatedClientsNumber'; missing required body field 'networkName'; missing required body field 'size'; missing required body field 'usage' |
| GET | `/order/dedicatedCloud/{x}/upgradeRessource/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudUpgradeRessourceListGet.operation.ts | missing required query param 'upgradeType'; missing required query param 'upgradedRessourceType' |
| POST | `/order/dedicatedCloud/{x}/upgradeRessource/{x}` | OvhCloudOrder/dedicatedCloud/dedicatedCloudUpgradeRessourceCreatePost.operation.ts | missing required body field 'upgradeType'; missing required body field 'upgradedRessourceType' |
| GET | `/order/dedicatedCloud/{x}/vdi` | OvhCloudOrder/dedicatedCloud/dedicatedCloudVdiListGet.operation.ts | missing required query param 'datacenterId'; missing required query param 'firstPublicIpAddress'; missing required query param 'secondPublicIpAddress' |
| POST | `/order/dedicatedCloud/{x}/vdi` | OvhCloudOrder/dedicatedCloud/dedicatedCloudVdiCreatePost.operation.ts | missing required body field 'datacenterId'; missing required body field 'firstPublicIpAddress'; missing required body field 'secondPublicIpAddress' |
| POST | `/order/email/domain/new/{x}` | OvhCloudOrder/emailDomain/emailDomainNewOrderCreatePost.operation.ts | missing required body field 'domain' |
| GET | `/order/telephony/{x}/accessories` | OvhCloudOrder/telephony/telephonyAccessoriesListGet.operation.ts | missing required query param 'accessories'; missing required query param 'retractation'; missing required query param 'shippingContactId' |
| POST | `/order/telephony/{x}/accessories` | OvhCloudOrder/telephony/telephonyAccessoriesCreatePost.operation.ts | missing required body field 'accessories'; missing required body field 'retractation'; missing required body field 'shippingContactId' |
| GET | `/order/telephony/{x}/line` | OvhCloudOrder/telephony/telephonyLineListGet.operation.ts | missing required query param 'displayUniversalDirectories'; missing required query param 'extraSimultaneousLines'; missing required query param 'offers'; missing required query param 'ownerContactIds'; missing required query param 'quantity'; missing required query param 'retractation'; missing required query param 'shippingContactId'; missing required query param 'types' |
| POST | `/order/telephony/{x}/line` | OvhCloudOrder/telephony/telephonyLineCreatePost.operation.ts | missing required body field 'displayUniversalDirectories'; missing required body field 'extraSimultaneousLines'; missing required body field 'offers'; missing required body field 'ownerContactIds'; missing required body field 'quantity'; missing required body field 'retractation'; missing required body field 'shippingContactId'; missing required body field 'types' |
| GET | `/order/telephony/{x}/numberGeographic` | OvhCloudOrder/telephony/telephonyNumberGeographicListGet.operation.ts | missing required query param 'city'; missing required query param 'country'; missing required query param 'displayUniversalDirectory'; missing required query param 'legalform'; missing required query param 'offer'; missing required query param 'retractation'; missing required query param 'zone' |
| POST | `/order/telephony/{x}/numberGeographic` | OvhCloudOrder/telephony/telephonyNumberGeographicCreatePost.operation.ts | missing required body field 'city'; missing required body field 'country'; missing required body field 'displayUniversalDirectory'; missing required body field 'legalform'; missing required body field 'offer'; missing required body field 'retractation'; missing required body field 'zone' |
| GET | `/order/telephony/{x}/numberNogeographic` | OvhCloudOrder/telephony/telephonyNumberNogeographicListGet.operation.ts | missing required query param 'country'; missing required query param 'displayUniversalDirectory'; missing required query param 'legalform'; missing required query param 'offer'; missing required query param 'retractation' |
| POST | `/order/telephony/{x}/numberNogeographic` | OvhCloudOrder/telephony/telephonyNumberNogeographicCreatePost.operation.ts | missing required body field 'country'; missing required body field 'displayUniversalDirectory'; missing required body field 'legalform'; missing required body field 'offer'; missing required body field 'retractation' |
| GET | `/order/telephony/{x}/numberSpecial` | OvhCloudOrder/telephony/telephonyNumberSpecialListGet.operation.ts | missing required query param 'country'; missing required query param 'displayUniversalDirectory'; missing required query param 'legalform'; missing required query param 'range'; missing required query param 'retractation'; missing required query param 'siret'; missing required query param 'socialNomination'; missing required query param 'typology' |
| POST | `/order/telephony/{x}/numberSpecial` | OvhCloudOrder/telephony/telephonyNumberSpecialCreatePost.operation.ts | missing required body field 'country'; missing required body field 'displayUniversalDirectory'; missing required body field 'legalform'; missing required body field 'range'; missing required body field 'retractation'; missing required body field 'siret'; missing required body field 'socialNomination'; missing required body field 'typology' |
| GET | `/order/telephony/{x}/portability` | OvhCloudOrder/telephony/telephonyPortabilityListGet.operation.ts | missing required query param 'callNumber'; missing required query param 'city'; missing required query param 'country'; missing required query param 'displayUniversalDirectory'; missing required query param 'name'; missing required query param 'offer'; missing required query param 'socialReason'; missing required query param 'streetName'; missing required query param 'streetNumber'; missing required query param 'zip' |
| POST | `/order/telephony/{x}/portability` | OvhCloudOrder/telephony/telephonyPortabilityCreatePost.operation.ts | missing required body field 'callNumber'; missing required body field 'city'; missing required body field 'country'; missing required body field 'displayUniversalDirectory'; missing required body field 'name'; missing required body field 'offer'; missing required body field 'socialReason'; missing required body field 'streetName'; missing required body field 'streetNumber'; missing required body field 'zip' |
| GET | `/order/telephony/{x}/securityDeposit` | OvhCloudOrder/telephony/telephonySecurityDepositListGet.operation.ts | missing required query param 'amount' |
| POST | `/order/telephony/{x}/securityDeposit` | OvhCloudOrder/telephony/telephonySecurityDepositCreatePost.operation.ts | missing required body field 'amount' |
| GET | `/order/telephony/lines/{x}/addSimultaneousLines` | OvhCloudOrder/telephony/telephonyLinesAddSimultaneousLinesListGet.operation.ts | missing required query param 'billingAccount'; missing required query param 'quantity' |
| POST | `/order/telephony/lines/{x}/addSimultaneousLines` | OvhCloudOrder/telephony/telephonyLinesAddSimultaneousLinesCreatePost.operation.ts | missing required body field 'billingAccount'; missing required body field 'quantity' |
| GET | `/order/telephony/lines/{x}/hardware` | OvhCloudOrder/telephony/telephonyLinesHardwareListGet.operation.ts | missing required query param 'hardware'; missing required query param 'retractation' |
| POST | `/order/telephony/lines/{x}/hardware` | OvhCloudOrder/telephony/telephonyLinesHardwareCreatePost.operation.ts | missing required body field 'hardware'; missing required body field 'retractation' |
| GET | `/order/telephony/lines/{x}/updateSimultaneousChannels` | OvhCloudOrder/telephony/telephonyLinesUpdateSimultaneousChannelsListGet.operation.ts | missing required query param 'quantity' |
| POST | `/order/telephony/lines/{x}/updateSimultaneousChannels` | OvhCloudOrder/telephony/telephonyLinesUpdateSimultaneousChannelsCreatePost.operation.ts | missing required body field 'quantity' |
| GET | `/order/telephony/spare/new` | OvhCloudOrder/telephony/telephonySpareNewListGet.operation.ts | missing required query param 'brand'; missing required query param 'quantity'; missing required query param 'shippingContactId' |
| POST | `/order/telephony/spare/new` | OvhCloudOrder/telephony/telephonySpareNewCreatePost.operation.ts | missing required body field 'brand'; missing required body field 'quantity'; missing required body field 'shippingContactId' |
| GET | `/order/telephony/trunks/{x}/addSimultaneousLines` | OvhCloudOrder/telephony/telephonyTrunksAddSimultaneousLinesListGet.operation.ts | missing required query param 'billingAccount'; missing required query param 'quantity' |
| POST | `/order/telephony/trunks/{x}/addSimultaneousLines` | OvhCloudOrder/telephony/telephonyTrunksAddSimultaneousLinesCreatePost.operation.ts | missing required body field 'billingAccount'; missing required body field 'quantity' |
| GET | `/order/telephony/trunks/{x}/hardware` | OvhCloudOrder/telephony/telephonyTrunksHardwareListGet.operation.ts | missing required query param 'hardware'; missing required query param 'retractation' |
| POST | `/order/telephony/trunks/{x}/hardware` | OvhCloudOrder/telephony/telephonyTrunksHardwareCreatePost.operation.ts | missing required body field 'hardware'; missing required body field 'retractation' |
| GET | `/order/telephony/trunks/{x}/updateSimultaneousChannels` | OvhCloudOrder/telephony/telephonyTrunksUpdateSimultaneousChannelsListGet.operation.ts | missing required query param 'quantity' |
| POST | `/order/telephony/trunks/{x}/updateSimultaneousChannels` | OvhCloudOrder/telephony/telephonyTrunksUpdateSimultaneousChannelsCreatePost.operation.ts | missing required body field 'quantity' |
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

### vps — 18 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/vps/{x}/automatedBackup/detachBackup` | OvhCloudVps/postVpsAutomatedBackupDetachBackupPost.operation.ts | missing required body field 'restorePoint' |
| POST | `/vps/{x}/automatedBackup/reschedule` | OvhCloudVps/automatedBackupReschedulePost.operation.ts | missing required body field 'schedule' |
| POST | `/vps/{x}/automatedBackup/restore` | OvhCloudVps/automatedBackupRestoreCreate.operation.ts | missing required body field 'restorePoint'; missing required body field 'type' |
| GET | `/vps/{x}/automatedBackup/restorePoints` | OvhCloudVps/restorePointListGet.operation.ts | missing required query param 'state' |
| POST | `/vps/{x}/backupftp/access` | OvhCloudVps/postVpsBackupFtpAccessPost.operation.ts | missing required body field 'cifs'; missing required body field 'ipBlock'; missing required body field 'nfs' |
| POST | `/vps/{x}/confirmTermination` | OvhCloudVps/confirmTerminationCreateVps.operation.ts | missing required body field 'token' |
| GET | `/vps/{x}/disks/{x}/monitoring` | OvhCloudVps/getVpsDiskMonitoringGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| GET | `/vps/{x}/disks/{x}/use` | OvhCloudVps/getVpsDiskUseGet.operation.ts | missing required query param 'type' |
| POST | `/vps/{x}/migration2018` | OvhCloudVps/postVpsMigration2018Post.operation.ts | missing required body field 'newPlan' |
| POST | `/vps/{x}/migration2020` | OvhCloudVps/postVpsMigration2020Post.operation.ts | missing required body field 'plan' |
| GET | `/vps/{x}/monitoring` | OvhCloudVps/getVpsMonitoringGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| POST | `/vps/{x}/rebuild` | OvhCloudVps/postVpsRebuildPost.operation.ts | missing required body field 'imageId' |
| POST | `/vps/{x}/reinstall` | OvhCloudVps/postVpsReinstallPost.operation.ts | missing required body field 'templateId' |
| POST | `/vps/{x}/secondaryDnsDomains` | OvhCloudVps/postVpsSecondaryDnsDomainsPost.operation.ts | missing required body field 'domain' |
| GET | `/vps/{x}/use` | OvhCloudVps/getVpsUseGet.operation.ts | missing required query param 'type' |
| POST | `/vps/{x}/veeam/restorePoints/{x}/restore` | OvhCloudVps/postVpsVeeamRestorePost.operation.ts | missing required body field 'full' |
| GET | `/vps/order/rule/datacenter` | OvhCloudVps/getVpsOrderRuleDatacenterGet.operation.ts | missing required query param 'ovhSubsidiary'; missing required query param 'planCode' |
| GET | `/vps/order/rule/osChoices` | OvhCloudVps/getVpsOrderRuleOsChoicesGet.operation.ts | missing required query param 'datacenter'; missing required query param 'os' |

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

### xdsl — 29 non-conformités

| Méthode | Chemin | Fichier | Problèmes |
|--------|--------|---------|-----------|
| POST | `/xdsl/{x}/applyTemplateToModem` | OvhCloudXdsl/resources/main/postXdslApplyTemplateToModemPost.operation.ts | missing required body field 'templateName' |
| POST | `/xdsl/{x}/ipv6` | OvhCloudXdsl/resources/main/postXdslIpv6Post.operation.ts | missing required body field 'enabled' |
| POST | `/xdsl/{x}/lines/{x}/diagnostic/run` | OvhCloudXdsl/resources/lines/lineDiagnosticRunPost.operation.ts | missing required body field 'faultType' |
| POST | `/xdsl/{x}/lines/{x}/dslamPort/changeProfile` | OvhCloudXdsl/resources/lines/dslamPortChangeProfilePost.operation.ts | missing required body field 'dslamProfileId' |
| GET | `/xdsl/{x}/lines/{x}/dslamPort/logs` | OvhCloudXdsl/resources/lines/dslamPortLogsGet.operation.ts | missing required query param 'limit' |
| GET | `/xdsl/{x}/lines/{x}/statistics` | OvhCloudXdsl/resources/lines/linesStatisticsGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| POST | `/xdsl/{x}/log/subscription` | OvhCloudXdsl/resources/log/logSubscriptionPost.operation.ts | missing required body field 'kind'; missing required body field 'streamId' |
| POST | `/xdsl/{x}/log/url` | OvhCloudXdsl/resources/log/logUrlPost.operation.ts | missing required body field 'kind' |
| POST | `/xdsl/{x}/mailSending` | OvhCloudXdsl/resources/main/mailSendingPost.operation.ts | missing required body field 'status' |
| GET | `/xdsl/{x}/modem/availableWLANChannel` | OvhCloudXdsl/resources/main/listXdslModemAvailableWlanChannelGet.operation.ts | missing required query param 'frequency' |
| POST | `/xdsl/{x}/modem/blocIp` | OvhCloudXdsl/resources/main/postXdslModemBlocIpPost.operation.ts | missing required body field 'status' |
| POST | `/xdsl/{x}/modem/callWaiting` | OvhCloudXdsl/resources/main/postXdslModemCallWaitingPost.operation.ts | missing required body field 'callWaiting' |
| POST | `/xdsl/{x}/modem/contentSharing` | OvhCloudXdsl/resources/main/postXdslModemContentSharingPost.operation.ts | missing required body field 'contentSharing' |
| POST | `/xdsl/{x}/modem/firmware` | OvhCloudXdsl/resources/main/postXdslModemFirmwarePost.operation.ts | missing required body field 'firmware' |
| POST | `/xdsl/{x}/modem/ftp` | OvhCloudXdsl/resources/main/postXdslModemFtpPost.operation.ts | missing required body field 'ftp' |
| POST | `/xdsl/{x}/modem/ipsecAlg` | OvhCloudXdsl/resources/main/postXdslModemIpsecAlgPost.operation.ts | missing required body field 'ipsecAlg' |
| POST | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}/DHCPStaticAddresses` | OvhCloudXdsl/resources/main/postXdslModemLanDhcpStaticPost.operation.ts | missing required body field 'IPAddress'; missing required body field 'MACAddress' |
| POST | `/xdsl/{x}/modem/portMappings` | OvhCloudXdsl/resources/main/postXdslModemPortMappingsPost.operation.ts | missing required body field 'externalPortStart'; missing required body field 'internalClient'; missing required body field 'internalPort'; missing required body field 'name'; missing required body field 'protocol' |
| POST | `/xdsl/{x}/modem/sipAlg` | OvhCloudXdsl/resources/main/postXdslModemSipAlgPost.operation.ts | missing required body field 'sipAlg' |
| POST | `/xdsl/{x}/modem/upnp` | OvhCloudXdsl/resources/main/postXdslModemUpnpPost.operation.ts | missing required body field 'upnp' |
| POST | `/xdsl/{x}/monitoringNotifications` | OvhCloudXdsl/resources/main/postXdslMonitoringNotificationPost.operation.ts | missing required body field 'frequency'; missing required body field 'type' |
| POST | `/xdsl/{x}/orderMeeting` | OvhCloudXdsl/resources/main/postXdslOrderMeetingPost.operation.ts | missing required body field 'endDate'; missing required body field 'startDate'; missing required body field 'uiCode' |
| POST | `/xdsl/{x}/resiliate` | OvhCloudXdsl/resources/main/postXdslResiliatePost.operation.ts | missing required body field 'resiliationSurvey' |
| POST | `/xdsl/{x}/rma/{x}/changeType` | OvhCloudXdsl/resources/main/postXdslRmaChangeTypePost.operation.ts | missing required body field 'type' |
| GET | `/xdsl/{x}/statistics` | OvhCloudXdsl/resources/main/getXdslStatisticsGet.operation.ts | missing required query param 'period'; missing required query param 'type' |
| POST | `/xdsl/{x}/updateInvalidOrMissingRio` | OvhCloudXdsl/resources/main/postXdslUpdateInvalidOrMissingRioPost.operation.ts | missing required body field 'relaunchWithoutPortability' |
| POST | `/xdsl/email/pro/{x}/changePassword` | OvhCloudXdsl/resources/main/postXdslEmailProChangePasswordPost.operation.ts | missing required body field 'password' |
| POST | `/xdsl/spare/{x}/replace` | OvhCloudXdsl/resources/main/postXdslSpareReplacePost.operation.ts | missing required body field 'domain' |
| POST | `/xdsl/templateModem` | OvhCloudXdsl/resources/main/postXdslTemplateModemPost.operation.ts | missing required body field 'name'; missing required body field 'serviceName' |

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
| cloud (v1) | POST | `/cloud/project/{x}/database/clickhouse/{x}/backup` | OvhCloudPublicCloud/database/clickhouse/backupCreatePost.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/clickhouse/{x}/certificates` | OvhCloudPublicCloud/database/clickhouse/certificateCreatePost.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionListGet.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions/{x}` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionDeleteDelete.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions/{x}` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionGetGet.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions/{x}` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionUpdatePut.operation.ts |
| cloud (v1) | GET | `/cloud/project/{x}/database/clickhouse/{x}/log` | OvhCloudPublicCloud/database/clickhouse/logsGet.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/clickhouse/{x}/node` | OvhCloudPublicCloud/database/clickhouse/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeDeleteDelete.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeUpdatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/clickhouse/{x}/queryStatistics/reset` | OvhCloudPublicCloud/database/clickhouse/queryStatisticsResetPost.operation.ts |
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
| cloud (v1) | POST | `/cloud/project/{x}/database/postgresql/{x}/backup` | OvhCloudPublicCloud/database/postgresql/backupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/backup/{x}` | OvhCloudPublicCloud/database/postgresql/backupDeleteDelete.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/postgresql/{x}/certificates` | OvhCloudPublicCloud/database/postgresql/certificateCreatePost.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/postgresql/{x}/maintenance` | OvhCloudPublicCloud/database/postgresql/maintenanceUpdatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/postgresql/{x}/node` | OvhCloudPublicCloud/database/postgresql/nodeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/node/{x}` | OvhCloudPublicCloud/database/postgresql/nodeDeleteDelete.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/database/postgresql/{x}/node/{x}` | OvhCloudPublicCloud/database/postgresql/nodeUpdatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/postgresql/enableWrites` | OvhCloudPublicCloud/database/postgresql/enableWritesPost.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/database/postgresql/prometheus/credentials/reset` | OvhCloudPublicCloud/database/postgresql/prometheusCredentialsResetPost.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/lab` | OvhCloudPublicCloud/lab/createPost.operation.ts |
| cloud (v1) | DELETE | `/cloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/deleteDelete.operation.ts |
| cloud (v1) | PUT | `/cloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/updatePut.operation.ts |
| cloud (v1) | POST | `/cloud/project/{x}/role` | OvhCloudPublicCloud/role/createPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/agreements` | OvhCloudPublicCloud/cloud/agreementsGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/eligibility` | OvhCloudPublicCloud/cloud/eligibilityGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/order` | OvhCloudPublicCloud/cloud/orderListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/order/rule/availability` | OvhCloudPublicCloud/cloud/orderRuleAvailabilityGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project` | OvhCloudPublicCloud/project/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project` | OvhCloudPublicCloud/project/listGetV2.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}` | OvhCloudPublicCloud/project/getDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}` | OvhCloudPublicCloud/project/getDetailGetV2.operation.ts |
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
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities` | OvhCloudPublicCloud/capabilities/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/kube` | OvhCloudPublicCloud/capabilities/listKubeGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/kube/{x}` | OvhCloudPublicCloud/capabilities/getKubeDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer` | OvhCloudPublicCloud/capabilities/listLoadbalancerGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer/{x}` | OvhCloudPublicCloud/capabilities/getLoadbalancerDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/region` | OvhCloudPublicCloud/capabilities/listRegionGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/region/{x}` | OvhCloudPublicCloud/capabilities/getRegionDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/capabilities/region/{x}/{x}` | OvhCloudPublicCloud/capabilities/getRegionProductDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/cassandra/{x}/maintenance` | OvhCloudPublicCloud/database/cassandra/maintenanceUpdatePut.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/backup/{x}` | OvhCloudPublicCloud/database/clickhouse/backupDeleteDelete.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/maintenance` | OvhCloudPublicCloud/database/clickhouse/maintenanceUpdatePut.operation.ts |
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
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/capabilities/plan` | OvhCloudPublicCloud/containerRegistry/getCapabilitiesPlanGet.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/iam` | OvhCloudPublicCloud/containerRegistry/deleteIamDelete.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/iam` | OvhCloudPublicCloud/containerRegistry/createIamPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/management` | OvhCloudPublicCloud/containerRegistry/getIpRestrictionsManagementListGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/management` | OvhCloudPublicCloud/containerRegistry/updateIpRestrictionsManagementPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/registry` | OvhCloudPublicCloud/containerRegistry/getIpRestrictionsRegistryListGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/registry` | OvhCloudPublicCloud/containerRegistry/updateIpRestrictionsRegistryPut.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/deleteOpenIdConnectDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/getOpenIdConnectGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/createOpenIdConnectPost.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/updateOpenIdConnectPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/plan` | OvhCloudPublicCloud/containerRegistry/getPlanGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/plan` | OvhCloudPublicCloud/containerRegistry/updatePlanPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/users` | OvhCloudPublicCloud/containerRegistry/listUsersGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/users` | OvhCloudPublicCloud/containerRegistry/createUserPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/users/{x}` | OvhCloudPublicCloud/containerRegistry/deleteUserDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/users/{x}` | OvhCloudPublicCloud/containerRegistry/getUserDetailGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/users/{x}/setAsAdmin` | OvhCloudPublicCloud/containerRegistry/createUserSetAsAdminPost.operation.ts |
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
| cloud (v1) | GET | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/createPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/deleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/getDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/updatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/private` | OvhCloudPublicCloud/network/listPrivateNetworksGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/network/private` | OvhCloudPublicCloud/network/createPrivateNetworkPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/network/private/{x}` | OvhCloudPublicCloud/network/deletePrivateNetworkDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/private/{x}` | OvhCloudPublicCloud/network/getPrivateNetworkDetailGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/network/private/{x}` | OvhCloudPublicCloud/network/updatePrivateNetworkPut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/network/private/{x}/region` | OvhCloudPublicCloud/network/activatePrivateNetworkRegionPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/private/{x}/subnet` | OvhCloudPublicCloud/network/listSubnetsGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/network/private/{x}/subnet` | OvhCloudPublicCloud/network/createSubnetPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/network/private/{x}/subnet/{x}` | OvhCloudPublicCloud/network/deleteSubnetDelete.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/network/private/{x}/subnet/{x}` | OvhCloudPublicCloud/network/updateSubnetPut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/public` | OvhCloudPublicCloud/network/listPublicNetworksGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/getSubnetDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities` | OvhCloudPublicCloud/quantum/listCapabilitiesGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities/region` | OvhCloudPublicCloud/quantum/listCapabilitiesRegionGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/quantum/capabilities/region/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesRegionDetailGet.operation.ts |
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
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/coldArchive` | OvhCloudPublicCloud/region/regionColdArchiveListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive` | OvhCloudPublicCloud/region/regionColdArchiveCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}` | OvhCloudPublicCloud/region/regionColdArchiveDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}` | OvhCloudPublicCloud/region/regionColdArchiveGetGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/archive` | OvhCloudPublicCloud/region/regionColdArchiveArchivePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/destroy` | OvhCloudPublicCloud/region/regionColdArchiveDestroyPost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/object/{x}` | OvhCloudPublicCloud/region/regionColdArchiveObjectDeleteDelete.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/policy/{x}` | OvhCloudPublicCloud/region/regionColdArchivePolicyCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/presign` | OvhCloudPublicCloud/region/regionColdArchivePresignPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/restore` | OvhCloudPublicCloud/region/regionColdArchiveRestorePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/floatingip` | OvhCloudPublicCloud/region/floatingip/floatingIpListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/floatingip` | OvhCloudPublicCloud/region/floatingip/floatingIpCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/floatingip/{x}` | OvhCloudPublicCloud/region/floatingip/floatingIpDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/floatingip/{x}` | OvhCloudPublicCloud/region/floatingip/floatingIpGetGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/floatingip/{x}/detach` | OvhCloudPublicCloud/region/floatingip/floatingIpDetachPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/gateway` | OvhCloudPublicCloud/region/gateway/gatewayListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/gateway` | OvhCloudPublicCloud/region/gateway/gatewayCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/gateway/{x}` | OvhCloudPublicCloud/region/gateway/gatewayDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/gateway/{x}` | OvhCloudPublicCloud/region/gateway/gatewayGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/gateway/{x}` | OvhCloudPublicCloud/region/gateway/gatewayUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/gateway/{x}/expose` | OvhCloudPublicCloud/region/gateway/gatewayExposePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface/{x}` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface/{x}` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/instance` | OvhCloudPublicCloud/region/regionInstanceListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/instance/{x}` | OvhCloudPublicCloud/region/regionInstanceGetGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/abortSnapshot` | OvhCloudPublicCloud/region/regionInstanceAbortSnapshotPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/associateFloatingIp` | OvhCloudPublicCloud/region/regionInstanceAssociateFloatingIpPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/autobackup` | OvhCloudPublicCloud/region/regionInstanceAutobackupPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/floatingIp` | OvhCloudPublicCloud/region/regionInstanceFloatingIpPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/reinstall` | OvhCloudPublicCloud/region/regionInstanceReinstallPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/snapshot` | OvhCloudPublicCloud/region/regionInstanceSnapshotPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/certificate` | OvhCloudPublicCloud/region/regionKeymanagerCertificateListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/keymanager/certificate` | OvhCloudPublicCloud/region/regionKeymanagerCertificateCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/keymanager/certificate/{x}` | OvhCloudPublicCloud/region/regionKeymanagerCertificateDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/certificate/{x}` | OvhCloudPublicCloud/region/regionKeymanagerCertificateGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/secret` | OvhCloudPublicCloud/region/regionKeymanagerSecretListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/keymanager/secret` | OvhCloudPublicCloud/region/regionKeymanagerSecretCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/keymanager/secret/{x}` | OvhCloudPublicCloud/region/regionKeymanagerSecretDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/secret/{x}` | OvhCloudPublicCloud/region/regionKeymanagerSecretGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/flavor` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingFlavorListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/flavor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingFlavorGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/associateFloatingIp` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerAssociateFloatingIpPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/floatingIp` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerFloatingIpPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionGetGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/url` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogUrlPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/stats` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerStatsGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/log/kind` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLogKindListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/log/kind/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLogKindGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/network` | OvhCloudPublicCloud/region/regionNetworkListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/network` | OvhCloudPublicCloud/region/regionNetworkCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/network/{x}` | OvhCloudPublicCloud/region/regionNetworkDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/network/{x}` | OvhCloudPublicCloud/region/regionNetworkGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet` | OvhCloudPublicCloud/region/regionNetworkSubnetListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet` | OvhCloudPublicCloud/region/regionNetworkSubnetCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet/{x}` | OvhCloudPublicCloud/region/regionNetworkSubnetDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet/{x}` | OvhCloudPublicCloud/region/regionNetworkSubnetGetGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet/{x}/gateway` | OvhCloudPublicCloud/region/regionNetworkSubnetGatewayPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/quota` | OvhCloudPublicCloud/region/regionQuotaListGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/quota/allowed` | OvhCloudPublicCloud/region/regionQuotaAllowedGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/quota/storage` | OvhCloudPublicCloud/region/regionQuotaStorageGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotGetGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage` | OvhCloudPublicCloud/region/regionStorageListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage` | OvhCloudPublicCloud/region/regionStorageCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}` | OvhCloudPublicCloud/region/regionStorageDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}` | OvhCloudPublicCloud/region/regionStorageGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}` | OvhCloudPublicCloud/region/regionStorageUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/bulkDeleteObjects` | OvhCloudPublicCloud/region/regionStorageBulkDeleteObjectsPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/job/replication` | OvhCloudPublicCloud/region/regionStorageReplicationListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/job/replication` | OvhCloudPublicCloud/region/regionStorageReplicationCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}/lifecycle` | OvhCloudPublicCloud/region/regionStorageLifecycleDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/lifecycle` | OvhCloudPublicCloud/region/regionStorageLifecycleGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}/lifecycle` | OvhCloudPublicCloud/region/regionStorageLifecycleUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object` | OvhCloudPublicCloud/region/regionStorageObjectListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object` | OvhCloudPublicCloud/region/regionStorageObjectCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}` | OvhCloudPublicCloud/region/regionStorageObjectDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}` | OvhCloudPublicCloud/region/regionStorageObjectGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}` | OvhCloudPublicCloud/region/regionStorageObjectUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/copy` | OvhCloudPublicCloud/region/regionStorageObjectCopyPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/restore` | OvhCloudPublicCloud/region/regionStorageObjectRestorePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version` | OvhCloudPublicCloud/region/regionStorageObjectVersionListGet.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` | OvhCloudPublicCloud/region/regionStorageObjectVersionDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` | OvhCloudPublicCloud/region/regionStorageObjectVersionGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` | OvhCloudPublicCloud/region/regionStorageObjectVersionUpdatePut.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}/copy` | OvhCloudPublicCloud/region/regionStorageObjectVersionCopyPost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}/restore` | OvhCloudPublicCloud/region/regionStorageObjectVersionRestorePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/policy/{x}` | OvhCloudPublicCloud/region/regionStoragePolicyCreatePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/presign` | OvhCloudPublicCloud/region/regionStoragePresignPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeUpdatePut.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/volumeBackup` | OvhCloudPublicCloud/region/regionVolumeBackupListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/volumeBackup` | OvhCloudPublicCloud/region/regionVolumeBackupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}` | OvhCloudPublicCloud/region/regionVolumeBackupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}` | OvhCloudPublicCloud/region/regionVolumeBackupGetGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}/restore` | OvhCloudPublicCloud/region/regionVolumeBackupRestorePost.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeBackupVolumePost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/volumeType` | OvhCloudPublicCloud/region/regionVolumeTypeListGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/region/{x}/workflow/backup` | OvhCloudPublicCloud/region/regionWorkflowBackupCreatePost.operation.ts |
| cloud (v1) | DELETE | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupDeleteDelete.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupGetGet.operation.ts |
| cloud (v1) | PUT | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupUpdatePut.operation.ts |
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
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/current` | OvhCloudPublicCloud/usage/getCurrentGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/forecast` | OvhCloudPublicCloud/usage/getForecastGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/history` | OvhCloudPublicCloud/usage/listHistoryGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/usage/history/{x}` | OvhCloudPublicCloud/usage/getHistoryDetailGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/listGet.operation.ts |
| cloud (v1) | POST | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/createPost.operation.ts |
| cloud (v1) | GET | `/publicCloud/project/{x}/vrack` | OvhCloudPublicCloud/vrack/listGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/blockStorage/capability/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumeCapabilityListGetByRegionNameGet.operation.ts |
| cloud (v1) | GET | `/publicCloud/reference/blockStorage/plan/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumePlanCapabilityListGetByRegionNameGet.operation.ts |
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
| dedicated (v1) | DELETE | `/dedicated/server/{x}/features/ipmi/access` | OvhCloudDedicated/resources/featuresIpmiAccessPost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/features/ipmi/resetInterface` | OvhCloudDedicated/resources/featuresIpmiResetInterfacePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/features/ipmi/resetSessions` | OvhCloudDedicated/resources/featuresIpmiResetSessionsPost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/features/ipmi/test` | OvhCloudDedicated/resources/featuresIpmiTestPost.operation.ts |
| dedicated (v1) | POST | `/dedicated/server/{x}/install` | OvhCloudDedicated/resources/installation/installPost.operation.ts |
| dedicated (v1) | GET | `/dedicated/server/{x}/monitoring` | OvhCloudDedicated/resources/monitoring/monitoringGetGet.operation.ts |
| dedicated (v1) | GET | `/dedicated/server/{x}/monitoring/{x}` | OvhCloudDedicated/resources/monitoring/monitoringMetricGetGet.operation.ts |
| dedicated (v1) | PUT | `/dedicated/server/{x}/netboot/order` | OvhCloudDedicated/resources/netbootOrderPut.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/ola/reset` | OvhCloudDedicated/resources/olaResetPost.operation.ts |
| dedicated (v1) | POST | `/dedicated/server/{x}/option/{x}` | OvhCloudDedicated/resources/option/optionCreatePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/spla/{x}/revoke` | OvhCloudDedicated/resources/splaRevokePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/support/replace/cooling` | OvhCloudDedicated/resources/supportReplaceCoolingPost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/support/replace/hardDiskDrive` | OvhCloudDedicated/resources/supportReplaceHardDiskDrivePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/support/replace/memory` | OvhCloudDedicated/resources/supportReplaceMemoryPost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/task/{x}/cancel` | OvhCloudDedicated/resources/taskCancelPost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/terminate` | OvhCloudDedicated/resources/terminatePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/virtualNetworkInterface/{x}/disable` | OvhCloudDedicated/resources/virtualNetworkInterfaceDisablePost.operation.ts |
| dedicated (v1) | DELETE | `/dedicated/server/{x}/virtualNetworkInterface/{x}/enable` | OvhCloudDedicated/resources/virtualNetworkInterfaceEnablePost.operation.ts |
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
| email (v1) | GET | `/email/mxplan` | OvhCloudMxPlan/misc/MxPlanList.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}` | OvhCloudMxPlan/misc/MxPlanGet.operation.ts |
| email (v1) | PUT | `/email/mxplan/{x}` | OvhCloudMxPlan/misc/MxPlanPut.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountList.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}/account/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountGet.operation.ts |
| email (v1) | PUT | `/email/mxplan/{x}/account/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountUpdate.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/alias` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountAliasList.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/account/{x}/alias` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountAliasCreate.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}/account/{x}/alias/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountAliasDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/alias/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountAliasGet.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/capabilities` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountCapabilitiesGet.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/account/{x}/changePassword` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountChangePasswordCreate.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/diagnostic` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountDiagnosticGet.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/account/{x}/diagnostic` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountDiagnosticCreate.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/fullAccess` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountFullAccessList.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/account/{x}/fullAccess` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountFullAccessCreate.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}/account/{x}/fullAccess/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountFullAccessDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/fullAccess/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountFullAccessGet.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/sendAs` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendAsList.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/account/{x}/sendAs` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendAsCreate.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}/account/{x}/sendAs/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendAsDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/sendAs/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendAsGet.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendOnBehalfToList.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendOnBehalfToCreate.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendOnBehalfToDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountSendOnBehalfToGet.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/task` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountTaskList.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/account/{x}/task/{x}` | OvhCloudMxPlan/mxplanAccount/MxPlanAccountTaskGet.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/domain` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainList.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/domain/{x}` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainGet.operation.ts |
| email (v1) | PUT | `/email/mxplan/{x}/domain/{x}` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainUpdate.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}/domain/{x}/disclaimer` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainDisclaimerDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/domain/{x}/disclaimer` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainDisclaimerList.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/domain/{x}/disclaimer` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainDisclaimerCreate.operation.ts |
| email (v1) | PUT | `/email/mxplan/{x}/domain/{x}/disclaimer` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainDisclaimerUpdate.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/domain/{x}/disclaimerAttribute` | OvhCloudMxPlan/mxplanDomain/MxPlanDomainDisclaimerAttributeGet.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/externalContact` | OvhCloudMxPlan/mxplanExternalContact/MxPlanExternalContactList.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/externalContact` | OvhCloudMxPlan/mxplanExternalContact/MxPlanExternalContactCreate.operation.ts |
| email (v1) | DELETE | `/email/mxplan/{x}/externalContact/{x}` | OvhCloudMxPlan/mxplanExternalContact/MxPlanExternalContactDelete.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/externalContact/{x}` | OvhCloudMxPlan/mxplanExternalContact/MxPlanExternalContactGet.operation.ts |
| email (v1) | PUT | `/email/mxplan/{x}/externalContact/{x}` | OvhCloudMxPlan/mxplanExternalContact/MxPlanExternalContactUpdate.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/server` | OvhCloudMxPlan/mxplanServer/MxPlanServerGet.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/task` | OvhCloudMxPlan/mxplanTask/MxPlanTaskList.operation.ts |
| email (v1) | GET | `/email/mxplan/{x}/task/{x}` | OvhCloudMxPlan/mxplanTask/MxPlanTaskGet.operation.ts |
| email (v1) | POST | `/email/mxplan/{x}/updateFlagsOnAllAccounts` | OvhCloudMxPlan/mxplanUpdateFlagsOnAllAccounts/MxPlanUpdateFlagsOnAllAccountsCreate.operation.ts |
| email (v1) | PUT | `/email/pro/{x}/suspendStatus` | OvhCloudEmailPro/resources/updateSuspendStatusByServiceNamePut.operation.ts |
| email (v1) | GET | `/email/pro/{x}/tasks` | OvhCloudEmailPro/resources/taskListGet.operation.ts |
| email (v1) | GET | `/email/pro/{x}/tasks/{x}` | OvhCloudEmailPro/resources/taskGetGet.operation.ts |
| freefax (v1) | GET | `/freefax/{x}/directory/getDirectoryServiceCode?apeCode={x}` | OvhCloudFreefax/resources/directoryGetDirectoryServiceCodeGet.operation.ts |
| hosting (v1) | POST | `/hosting/web/{x}/cdn/domain` | OvhCloudHosting/cdn/cdnDomainCreatePost.operation.ts |
| hosting (v1) | DELETE | `/hosting/web/{x}/cdn/domain/{x}` | OvhCloudHosting/cdn/cdnDomainDeleteDelete.operation.ts |
| hosting (v1) | PUT | `/hosting/web/{x}/cdn/serviceInfos` | OvhCloudHosting/cdn/cdnServiceInfosUpdatePut.operation.ts |
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
| licenseCloudLinux (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseCloudLinux (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseCloudLinux (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseCloudLinux (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseCloudLinux (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseCloudLinux (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseCloudLinux (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseCloudLinux (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseCloudLinux (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseCpanel (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseCpanel (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseCpanel (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseCpanel (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseCpanel (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseCpanel (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseCpanel (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseCpanel (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseCpanel (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseDirectadmin (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseDirectadmin (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseDirectadmin (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseDirectadmin (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseDirectadmin (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseDirectadmin (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseDirectadmin (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseDirectadmin (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseDirectadmin (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseHycu (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseHycu (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseHycu (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseHycu (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseHycu (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseHycu (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseHycu (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseHycu (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseHycu (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseOffice (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseOffice (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseOffice (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseOffice (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseOffice (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseOffice (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseOffice (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseOffice (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseOffice (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseOfficePrepaid (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseOfficePrepaid (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseOfficePrepaid (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseOfficePrepaid (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseOfficePrepaid (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseOfficePrepaid (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseOfficePrepaid (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseOfficePrepaid (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseOfficePrepaid (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licensePlesk (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licensePlesk (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licensePlesk (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licensePlesk (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licensePlesk (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licensePlesk (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licensePlesk (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licensePlesk (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licensePlesk (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseRedhat (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseRedhat (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseRedhat (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseRedhat (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseRedhat (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseRedhat (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseRedhat (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseRedhat (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseRedhat (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseSqlserver (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseSqlserver (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseSqlserver (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseSqlserver (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseSqlserver (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseSqlserver (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseSqlserver (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseSqlserver (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseSqlserver (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseVirtuozzo (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseVirtuozzo (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseVirtuozzo (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseVirtuozzo (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseVirtuozzo (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseVirtuozzo (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseVirtuozzo (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseVirtuozzo (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseVirtuozzo (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| licenseWindows (v1) | GET | `/license/worklight` | OvhCloudLicense/resources/list.operation.ts |
| licenseWindows (v1) | GET | `/license/worklight/{x}` | OvhCloudLicense/resources/get.operation.ts |
| licenseWindows (v1) | PUT | `/license/worklight/{x}` | OvhCloudLicense/resources/updatePut.operation.ts |
| licenseWindows (v1) | GET | `/license/worklight/{x}/allowedDestinationIp` | OvhCloudLicense/resources/allowedDestinationIpGet.operation.ts |
| licenseWindows (v1) | GET | `/license/worklight/{x}/canLicenseBeMovedTo?destinationIp={x}` | OvhCloudLicense/resources/canLicenseBeMovedToGet.operation.ts |
| licenseWindows (v1) | POST | `/license/worklight/{x}/changeIp` | OvhCloudLicense/resources/changeIpPost.operation.ts |
| licenseWindows (v1) | POST | `/license/worklight/{x}/confirmTermination` | OvhCloudLicense/resources/confirmTerminationPost.operation.ts |
| licenseWindows (v1) | POST | `/license/worklight/{x}/terminate` | OvhCloudLicense/resources/terminatePost.operation.ts |
| licenseWindows (v1) | GET | `/license/worklight/orderableVersions?ip={x}` | OvhCloudLicense/resources/orderableVersionsGet.operation.ts |
| metrics (v1) | GET | `/metrics/{x}/quota` | OvhCloudMetrics/resources/quotaGet.operation.ts |
| msServices (v1) | DELETE | `/msServices/{x}` | OvhCloudMsServices/msServicesDeleteDelete.operation.ts |
| msServices (v1) | POST | `/msServices/{x}/reinstall` | OvhCloudMsServices/reinstallPost.operation.ts |
| order (v1) | PUT | `/order/cart/{x}/item/{x}/configuration/{x}` | OvhCloudOrder/cart/cartItemConfigurationUpdatePut.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/backupServices/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionbackupservicesserviceget.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/baremetalServers/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionbaremetalserversserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/baremetalServers/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionbaremetalserversservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/cloud/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptioncloudserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/cloud/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptioncloudservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/dedicated/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptiondedicatedserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/dedicated/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptiondedicatedservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/dns/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptiondnsserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/dns/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptiondnsservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/domain/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptiondomainserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/domain/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptiondomainservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/emailpro/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionemailproserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/emailpro/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionemailproservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/ipLoadbalancing/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptioniploadbalancingserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/ipLoadbalancing/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptioniploadbalancingservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/licenseHycu/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionlicensehycuserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/licenseHycu/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionlicensehycuservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/logs/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionlogsserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/logs/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionlogsservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/microsoft/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionmicrosoftserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/microsoft/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionmicrosoftservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/microsoftExchange/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionmicrosoftexchangeserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/microsoftExchange/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionmicrosoftexchangeservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/nutanix/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionnutanixserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/nutanix/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionnutanixservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/office365Prepaid/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionoffice365prepaidserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/office365Prepaid/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionoffice365prepaidservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/officePrepaid/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionofficeprepaidserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/officePrepaid/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionofficeprepaidservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/privateCloud/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/privateCloud/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/privateCloudEnterprise/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudenterpriseserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/privateCloudEnterprise/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudenterpriseservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/privateCloudReseller/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudresellerserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/privateCloudReseller/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudresellerservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriseserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriseservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/sharepoint/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsharepointserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/sharepoint/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsharepointservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/sms/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsmsserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/sms/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsmsservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/sncNetworkServices/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsncnetworkservicesserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/sncNetworkServices/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsncnetworkservicesservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/sslGateway/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsslgatewayserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/sslGateway/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsslgatewayservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/vdi/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvdiserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/vdi/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvdiservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/vmwareCloudDirector/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvmwareclouddirectorserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/vmwareCloudDirector/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvmwareclouddirectorservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/vmwareCloudDirectorBackup/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvmwareclouddirectorbackupserviceget.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/vps/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvpsserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/vps/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvpsservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/vrack/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvrackserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/vrack/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionvrackservicepost.operation.ts |
| order (v1) | GET | `/order/cartServiceOption/webHosting/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionwebhostingserviceget.operation.ts |
| order (v1) | POST | `/order/cartServiceOption/webHosting/{serviceName}` | OvhCloudOrder/cart/cartServiceOption/cartserviceoptionwebhostingservicepost.operation.ts |
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
| order (v1) | GET | `/order/domain` | OvhCloudOrder/domain/domainListGet.operation.ts |
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
| order (v1) | GET | `/order/upgrade/bandwidthVrack/{serviceName}` | OvhCloudOrder/upgrade/upgradebandwidthvrackserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/bandwidthVrack/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradebandwidthvrackplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/bandwidthVrack/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradebandwidthvrackplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/baremetalPrivateBandwidth/{serviceName}` | OvhCloudOrder/upgrade/upgradebaremetalprivatebandwidthserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradebaremetalprivatebandwidthplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradebaremetalprivatebandwidthplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/baremetalPublicBandwidth/{serviceName}` | OvhCloudOrder/upgrade/upgradebaremetalpublicbandwidthserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradebaremetalpublicbandwidthplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradebaremetalpublicbandwidthplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/cephaas/{serviceName}` | OvhCloudOrder/upgrade/upgradecephaasserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/cephaas/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradecephaasplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/cephaas/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradecephaasplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/cloudDB/{domain}` | OvhCloudOrder/upgrade/upgradeclouddbserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/cloudDB/{domain}/{planCode}` | OvhCloudOrder/upgrade/upgradeclouddbplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/cloudDB/{domain}/{planCode}` | OvhCloudOrder/upgrade/upgradeclouddbplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/emailDomain/{serviceName}` | OvhCloudOrder/upgrade/upgradeemaildomainserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/emailDomain/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeemaildomainplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/emailDomain/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeemaildomainplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/ipLoadbalancing/{serviceName}` | OvhCloudOrder/upgrade/upgradeiploadbalancingserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeiploadbalancingplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeiploadbalancingplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/licensecPanel/{serviceName}` | OvhCloudOrder/upgrade/upgradelicensecpanelserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/licensecPanel/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelicensecpanelplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/licensecPanel/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelicensecpanelplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/licenseHycu/{serviceName}` | OvhCloudOrder/upgrade/upgradelicensehycuserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/licenseHycu/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelicensehycuplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/licenseHycu/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelicensehycuplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/licensePlesk/{serviceName}` | OvhCloudOrder/upgrade/upgradelicensepleskserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/licensePlesk/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelicensepleskplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/licensePlesk/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelicensepleskplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/logs/{serviceName}` | OvhCloudOrder/upgrade/upgradelogsserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/logs/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelogsplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/logs/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradelogsplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/metrics/{serviceName}` | OvhCloudOrder/upgrade/upgrademetricsserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/metrics/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgrademetricsplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/metrics/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgrademetricsplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/microsoftExchange/{serviceName}` | OvhCloudOrder/upgrade/upgrademicrosoftexchangeserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/microsoftExchange/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgrademicrosoftexchangeplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/microsoftExchange/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgrademicrosoftexchangeplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/privateCloud/{serviceName}` | OvhCloudOrder/upgrade/upgradeprivatecloudserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/privateCloud/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeprivatecloudplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/privateCloud/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeprivatecloudplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/privateCloudManagementFee/{serviceName}` | OvhCloudOrder/upgrade/upgradeprivatecloudmanagementfeeserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/privateCloudManagementFee/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeprivatecloudmanagementfeeplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/privateCloudManagementFee/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradeprivatecloudmanagementfeeplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/privateSQL/{domain}` | OvhCloudOrder/upgrade/upgradeprivatesqlserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/privateSQL/{domain}/{planCode}` | OvhCloudOrder/upgrade/upgradeprivatesqlplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/privateSQL/{domain}/{planCode}` | OvhCloudOrder/upgrade/upgradeprivatesqlplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/sslGateway/{serviceName}` | OvhCloudOrder/upgrade/upgradesslgatewayserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/sslGateway/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradesslgatewayplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/sslGateway/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradesslgatewayplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/vps/{serviceName}` | OvhCloudOrder/upgrade/upgradevpsserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/vps/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradevpsplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/vps/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradevpsplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/vpsAdditionalDisk/{serviceName}` | OvhCloudOrder/upgrade/upgradevpsadditionaldiskserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradevpsadditionaldiskplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradevpsadditionaldiskplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/webHosting/{serviceName}` | OvhCloudOrder/upgrade/upgradewebhostingserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/webHosting/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradewebhostingplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/webHosting/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradewebhostingplanpost.operation.ts |
| order (v1) | GET | `/order/upgrade/zimbra/{serviceName}` | OvhCloudOrder/upgrade/upgradezimbraserviceget.operation.ts |
| order (v1) | GET | `/order/upgrade/zimbra/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradezimbraplanget.operation.ts |
| order (v1) | POST | `/order/upgrade/zimbra/{serviceName}/{planCode}` | OvhCloudOrder/upgrade/upgradezimbraplanpost.operation.ts |
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
| publicCloud (v2) | GET | `/cloud/project/{x}/acl` | OvhCloudPublicCloud/acl/listGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/acl` | OvhCloudPublicCloud/acl/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/acl/{x}` | OvhCloudPublicCloud/acl/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/acl/{x}` | OvhCloudPublicCloud/acl/getDetailGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/activateMonthlyBilling` | OvhCloudPublicCloud/activateMonthlyBilling/activateMonthlyBillingPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/alerting` | OvhCloudPublicCloud/alerting/listGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/alerting` | OvhCloudPublicCloud/alerting/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/alerting/{x}` | OvhCloudPublicCloud/alerting/updatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/bill` | OvhCloudPublicCloud/bill/listGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/cancel` | OvhCloudPublicCloud/cancel/cancelPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/changeContact` | OvhCloudPublicCloud/changeContact/changeContactPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/confirmTermination` | OvhCloudPublicCloud/confirmTermination/confirmTerminationPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/credit` | OvhCloudPublicCloud/credit/listGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/credit` | OvhCloudPublicCloud/credit/createPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/credit/{x}` | OvhCloudPublicCloud/credit/getDetailGet.operation.ts |
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
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse` | OvhCloudPublicCloud/database/clickhouse/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse` | OvhCloudPublicCloud/database/clickhouse/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/clickhouse/{x}` | OvhCloudPublicCloud/database/clickhouse/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/backup` | OvhCloudPublicCloud/database/clickhouse/backupListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/backup` | OvhCloudPublicCloud/database/clickhouse/backupCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/backup/{x}` | OvhCloudPublicCloud/database/clickhouse/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/clickhouse/capabilitiesBackupRegionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/capabilities/integration` | OvhCloudPublicCloud/database/clickhouse/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/certificates` | OvhCloudPublicCloud/database/clickhouse/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/certificates` | OvhCloudPublicCloud/database/clickhouse/certificateCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/currentQueries` | OvhCloudPublicCloud/database/clickhouse/currentQueriesGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/currentQueries/cancel` | OvhCloudPublicCloud/database/clickhouse/currentQueriesCancelPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/database` | OvhCloudPublicCloud/database/clickhouse/databaseListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/database` | OvhCloudPublicCloud/database/clickhouse/databaseCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/database/{x}` | OvhCloudPublicCloud/database/clickhouse/databaseDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/database/{x}` | OvhCloudPublicCloud/database/clickhouse/databaseGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/enableWrites` | OvhCloudPublicCloud/database/clickhouse/enableWritesPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/integration` | OvhCloudPublicCloud/database/clickhouse/integrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/integration` | OvhCloudPublicCloud/database/clickhouse/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/integration/{x}` | OvhCloudPublicCloud/database/clickhouse/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/integration/{x}` | OvhCloudPublicCloud/database/clickhouse/integrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions/{x}` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions/{x}` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/clickhouse/{x}/ipRestrictions/{x}` | OvhCloudPublicCloud/database/clickhouse/ipRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/log` | OvhCloudPublicCloud/database/clickhouse/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/log/kind` | OvhCloudPublicCloud/database/clickhouse/logKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/clickhouse/logKindGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/clickhouse/logSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/log/url` | OvhCloudPublicCloud/database/clickhouse/logUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/maintenance` | OvhCloudPublicCloud/database/clickhouse/maintenanceGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/clickhouse/maintenanceGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/clickhouse/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/metric` | OvhCloudPublicCloud/database/clickhouse/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/metric/{x}` | OvhCloudPublicCloud/database/clickhouse/metricGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/node` | OvhCloudPublicCloud/database/clickhouse/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/node` | OvhCloudPublicCloud/database/clickhouse/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/clickhouse/{x}/node/{x}` | OvhCloudPublicCloud/database/clickhouse/nodeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/prometheus` | OvhCloudPublicCloud/database/clickhouse/prometheusGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/clickhouse/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/queryStatistics` | OvhCloudPublicCloud/database/clickhouse/queryStatisticsGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/queryStatistics/reset` | OvhCloudPublicCloud/database/clickhouse/queryStatisticsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/roles` | OvhCloudPublicCloud/database/clickhouse/rolesGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/user` | OvhCloudPublicCloud/database/clickhouse/userListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/user` | OvhCloudPublicCloud/database/clickhouse/userCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}` | OvhCloudPublicCloud/database/clickhouse/userUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/clickhouse/userCredentialsResetPost.operation.ts |
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
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaMirrorMaker` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/capabilities/integration` | OvhCloudPublicCloud/database/kafkaMirrorMaker/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration` | OvhCloudPublicCloud/database/kafkaMirrorMaker/integrationGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration` | OvhCloudPublicCloud/database/kafkaMirrorMaker/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/integrationGetById.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/kind` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logKindGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logKindNameGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logSubscriptionGetById.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/url` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logUrlPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/logs` | OvhCloudPublicCloud/database/kafkaMirrorMaker/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/maintenance` | OvhCloudPublicCloud/database/kafkaMirrorMaker/maintenanceGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/maintenanceGetById.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/kafkaMirrorMaker/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/metric` | OvhCloudPublicCloud/database/kafkaMirrorMaker/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/metric/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/metricNameGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/node` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/node/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/nodeGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/prometheus` | OvhCloudPublicCloud/database/kafkaMirrorMaker/prometheusGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/prometheus/credentials/reset` | OvhCloudPublicCloud/database/kafkaMirrorMaker/prometheusCredentialsResetPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication` | OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication` | OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationGetById.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication/{x}` | OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator` | OvhCloudPublicCloud/database/m3aggregator/clusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3aggregator` | OvhCloudPublicCloud/database/m3aggregator/clusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/m3aggregator/{x}` | OvhCloudPublicCloud/database/m3aggregator/clusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/capabilities/integration` | OvhCloudPublicCloud/database/m3aggregator/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/integration` | OvhCloudPublicCloud/database/m3aggregator/integrationGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3aggregator/{x}/integration` | OvhCloudPublicCloud/database/m3aggregator/integrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3aggregator/{x}/integration/{x}` | OvhCloudPublicCloud/database/m3aggregator/integrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/integration/{x}` | OvhCloudPublicCloud/database/m3aggregator/integrationGetById.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/kind` | OvhCloudPublicCloud/database/m3aggregator/logKindGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/m3aggregator/logKindNameGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3aggregator/logSubscriptionGetById.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3aggregator/{x}/log/url` | OvhCloudPublicCloud/database/m3aggregator/logUrlPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/logs` | OvhCloudPublicCloud/database/m3aggregator/logsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/maintenance` | OvhCloudPublicCloud/database/m3aggregator/maintenanceGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/m3aggregator/maintenanceGetById.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3aggregator/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/m3aggregator/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/metric` | OvhCloudPublicCloud/database/m3aggregator/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/metric/{x}` | OvhCloudPublicCloud/database/m3aggregator/metricNameGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/node` | OvhCloudPublicCloud/database/m3aggregator/nodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3aggregator/{x}/node/{x}` | OvhCloudPublicCloud/database/m3aggregator/nodeGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db` | OvhCloudPublicCloud/database/m3db/M3dbClusterListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db` | OvhCloudPublicCloud/database/m3db/M3dbClusterCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/M3dbClusterDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/M3dbClusterGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/m3db/{x}` | OvhCloudPublicCloud/database/m3db/M3dbClusterUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/m3db/M3dbAdvancedConfigurationGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/m3db/{x}/advancedConfiguration` | OvhCloudPublicCloud/database/m3db/M3dbAdvancedConfigurationUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/backup` | OvhCloudPublicCloud/database/m3db/M3dbBackupListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/backup/{x}` | OvhCloudPublicCloud/database/m3db/M3dbBackupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/m3db/M3dbCapabilitiesAdvancedConfigurationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/capabilities/integration` | OvhCloudPublicCloud/database/m3db/M3dbCapabilitiesIntegrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/integration` | OvhCloudPublicCloud/database/m3db/M3dbIntegrationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/integration` | OvhCloudPublicCloud/database/m3db/M3dbIntegrationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3db/{x}/integration/{x}` | OvhCloudPublicCloud/database/m3db/M3dbIntegrationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/integration/{x}` | OvhCloudPublicCloud/database/m3db/M3dbIntegrationGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3db/M3dbIpRestrictionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/ipRestriction` | OvhCloudPublicCloud/database/m3db/M3dbIpRestrictionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3db/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/m3db/M3dbIpRestrictionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/m3db/M3dbIpRestrictionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/m3db/{x}/ipRestriction/{x}` | OvhCloudPublicCloud/database/m3db/M3dbIpRestrictionUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/log/kind` | OvhCloudPublicCloud/database/m3db/M3dbLogKindListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/log/kind/{x}` | OvhCloudPublicCloud/database/m3db/M3dbLogKindGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/log/subscription` | OvhCloudPublicCloud/database/m3db/M3dbLogSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/log/subscription` | OvhCloudPublicCloud/database/m3db/M3dbLogSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3db/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3db/M3dbLogSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/log/subscription/{x}` | OvhCloudPublicCloud/database/m3db/M3dbLogSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/log/url` | OvhCloudPublicCloud/database/m3db/M3dbLogUrlCreatePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/logs` | OvhCloudPublicCloud/database/m3db/M3dbLogsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/maintenance` | OvhCloudPublicCloud/database/m3db/M3dbMaintenanceListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/m3db/M3dbMaintenanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/m3db/M3dbMaintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/metric` | OvhCloudPublicCloud/database/m3db/M3dbMetricListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/metric/{x}` | OvhCloudPublicCloud/database/m3db/M3dbMetricGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/namespace` | OvhCloudPublicCloud/database/m3db/M3dbNamespaceListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/namespace` | OvhCloudPublicCloud/database/m3db/M3dbNamespaceCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3db/{x}/namespace/{x}` | OvhCloudPublicCloud/database/m3db/M3dbNamespaceDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/namespace/{x}` | OvhCloudPublicCloud/database/m3db/M3dbNamespaceGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/m3db/{x}/namespace/{x}` | OvhCloudPublicCloud/database/m3db/M3dbNamespaceUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/node` | OvhCloudPublicCloud/database/m3db/M3dbNodeListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/node/{x}` | OvhCloudPublicCloud/database/m3db/M3dbNodeGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/user` | OvhCloudPublicCloud/database/m3db/M3dbUserListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/user` | OvhCloudPublicCloud/database/m3db/M3dbUserCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/M3dbUserDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/M3dbUserGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/m3db/{x}/user/{x}` | OvhCloudPublicCloud/database/m3db/M3dbUserUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/m3db/{x}/user/{x}/credentials/reset` | OvhCloudPublicCloud/database/m3db/M3dbUserCredentialsResetPost.operation.ts |
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
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/backup` | OvhCloudPublicCloud/database/postgresql/backupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/backup/{x}` | OvhCloudPublicCloud/database/postgresql/backupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/backup/{x}` | OvhCloudPublicCloud/database/postgresql/backupGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/capabilities/advancedConfiguration` | OvhCloudPublicCloud/database/postgresql/capabilitiesAdvancedConfigurationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/capabilities/backupRegions` | OvhCloudPublicCloud/database/postgresql/capabilitiesBackupRegionsGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/capabilities/integration` | OvhCloudPublicCloud/database/postgresql/capabilitiesIntegrationGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/certificates` | OvhCloudPublicCloud/database/postgresql/certificateListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/certificates` | OvhCloudPublicCloud/database/postgresql/certificateCreatePost.operation.ts |
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
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/postgresql/{x}/maintenance` | OvhCloudPublicCloud/database/postgresql/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/maintenance/{x}` | OvhCloudPublicCloud/database/postgresql/maintenanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/maintenance/{x}/apply` | OvhCloudPublicCloud/database/postgresql/maintenanceApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/metric` | OvhCloudPublicCloud/database/postgresql/metricGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/metric/{x}` | OvhCloudPublicCloud/database/postgresql/metricGetGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/node` | OvhCloudPublicCloud/database/postgresql/nodeListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/database/postgresql/{x}/node` | OvhCloudPublicCloud/database/postgresql/nodeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/database/postgresql/{x}/node/{x}` | OvhCloudPublicCloud/database/postgresql/nodeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/database/postgresql/{x}/node/{x}` | OvhCloudPublicCloud/database/postgresql/nodeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/database/postgresql/{x}/node/{x}` | OvhCloudPublicCloud/database/postgresql/nodeUpdatePut.operation.ts |
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
| publicCloud (v2) | GET | `/cloud/project/{x}/ip/failover` | OvhCloudPublicCloud/ip/failoverListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/ip/failover/{x}` | OvhCloudPublicCloud/ip/failoverGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/ip/failover/{x}/attach` | OvhCloudPublicCloud/ip/failoverAttachPost.operation.ts |
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
| publicCloud (v2) | GET | `/cloud/project/{x}/lab` | OvhCloudPublicCloud/lab/listGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/lab` | OvhCloudPublicCloud/lab/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/lab/{x}` | OvhCloudPublicCloud/lab/updatePut.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/lab/{x}/agreement` | OvhCloudPublicCloud/lab/agreementListGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/loadbalancer/{x}/configuration` | OvhCloudPublicCloud/loadbalancer/configurationListGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/loadbalancer/{x}/configuration` | OvhCloudPublicCloud/loadbalancer/configurationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/loadbalancer/{x}/configuration/{x}` | OvhCloudPublicCloud/loadbalancer/configurationDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/loadbalancer/{x}/configuration/{x}` | OvhCloudPublicCloud/loadbalancer/configurationGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/loadbalancer/{x}/configuration/{x}/apply` | OvhCloudPublicCloud/loadbalancer/configurationApplyPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/operation` | OvhCloudPublicCloud/operation/listGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/operation/{x}` | OvhCloudPublicCloud/operation/getDetailGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/quota` | OvhCloudPublicCloud/quota/listGet.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/regionAvailable` | OvhCloudPublicCloud/regionAvailable/checkRegionAvailableGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/retain` | OvhCloudPublicCloud/retain/retainPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/role` | OvhCloudPublicCloud/role/createPost.operation.ts |
| publicCloud (v2) | PUT | `/cloud/project/{x}/serviceInfos` | OvhCloudPublicCloud/serviceInfos/updatePut.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/storage/{x}/cors` | OvhCloudPublicCloud/storage/corsDeleteDelete.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/storage/{x}/cors` | OvhCloudPublicCloud/storage/corsPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/storage/{x}/publicUrl` | OvhCloudPublicCloud/storage/publicUrlPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/storage/{x}/static` | OvhCloudPublicCloud/storage/staticPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/storage/{x}/user` | OvhCloudPublicCloud/storage/userPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/storage/access` | OvhCloudPublicCloud/storage/accessPost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/storage/quota` | OvhCloudPublicCloud/storage/quotaGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/terminate` | OvhCloudPublicCloud/terminate/terminatePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/unleash` | OvhCloudPublicCloud/unleash/unleashPost.operation.ts |
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
| publicCloud (v2) | POST | `/cloud/project/{x}/volume/{x}/attach` | OvhCloudPublicCloud/volume/attachPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/volume/{x}/detach` | OvhCloudPublicCloud/volume/detachPost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/volume/{x}/snapshot` | OvhCloudPublicCloud/volume/snapshotCreatePost.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/volume/{x}/upsize` | OvhCloudPublicCloud/volume/upsizePost.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/volume/snapshot` | OvhCloudPublicCloud/volume/snapshotListGet.operation.ts |
| publicCloud (v2) | DELETE | `/cloud/project/{x}/volume/snapshot/{x}` | OvhCloudPublicCloud/volume/snapshotDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/cloud/project/{x}/volume/snapshot/{x}` | OvhCloudPublicCloud/volume/snapshotGetGet.operation.ts |
| publicCloud (v2) | POST | `/cloud/project/{x}/vrack` | OvhCloudPublicCloud/vrack/createPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/agreements` | OvhCloudPublicCloud/cloud/agreementsGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/eligibility` | OvhCloudPublicCloud/cloud/eligibilityGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/order` | OvhCloudPublicCloud/cloud/orderListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/order/rule/availability` | OvhCloudPublicCloud/cloud/orderRuleAvailabilityGet.operation.ts |
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
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities` | OvhCloudPublicCloud/capabilities/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/kube` | OvhCloudPublicCloud/capabilities/listKubeGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/kube/{x}` | OvhCloudPublicCloud/capabilities/getKubeDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer` | OvhCloudPublicCloud/capabilities/listLoadbalancerGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/loadbalancer/{x}` | OvhCloudPublicCloud/capabilities/getLoadbalancerDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/region` | OvhCloudPublicCloud/capabilities/listRegionGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/region/{x}` | OvhCloudPublicCloud/capabilities/getRegionDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/capabilities/region/{x}/{x}` | OvhCloudPublicCloud/capabilities/getRegionProductDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/cassandra/{x}/maintenance` | OvhCloudPublicCloud/database/cassandra/maintenanceUpdatePut.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/clickhouse/{x}/backup/{x}` | OvhCloudPublicCloud/database/clickhouse/backupDeleteDelete.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/clickhouse/{x}/maintenance` | OvhCloudPublicCloud/database/clickhouse/maintenanceUpdatePut.operation.ts |
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
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/containerRegistry` | OvhCloudPublicCloud/containerRegistry/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}` | OvhCloudPublicCloud/containerRegistry/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/capabilities/plan` | OvhCloudPublicCloud/containerRegistry/getCapabilitiesPlanGet.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/iam` | OvhCloudPublicCloud/containerRegistry/deleteIamDelete.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/iam` | OvhCloudPublicCloud/containerRegistry/createIamPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/management` | OvhCloudPublicCloud/containerRegistry/getIpRestrictionsManagementListGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/management` | OvhCloudPublicCloud/containerRegistry/updateIpRestrictionsManagementPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/registry` | OvhCloudPublicCloud/containerRegistry/getIpRestrictionsRegistryListGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/ipRestrictions/registry` | OvhCloudPublicCloud/containerRegistry/updateIpRestrictionsRegistryPut.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/deleteOpenIdConnectDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/getOpenIdConnectGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/createOpenIdConnectPost.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/openIdConnect` | OvhCloudPublicCloud/containerRegistry/updateOpenIdConnectPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/plan` | OvhCloudPublicCloud/containerRegistry/getPlanGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/containerRegistry/{x}/plan` | OvhCloudPublicCloud/containerRegistry/updatePlanPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/users` | OvhCloudPublicCloud/containerRegistry/listUsersGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/users` | OvhCloudPublicCloud/containerRegistry/createUserPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/containerRegistry/{x}/users/{x}` | OvhCloudPublicCloud/containerRegistry/deleteUserDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/containerRegistry/{x}/users/{x}` | OvhCloudPublicCloud/containerRegistry/getUserDetailGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/containerRegistry/{x}/users/{x}/setAsAdmin` | OvhCloudPublicCloud/containerRegistry/createUserSetAsAdminPost.operation.ts |
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
| publicCloud (v2) | GET | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/loadbalancer` | OvhCloudPublicCloud/loadbalancer/createPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/deleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/getDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/loadbalancer/{x}` | OvhCloudPublicCloud/loadbalancer/updatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/private` | OvhCloudPublicCloud/network/listPrivateNetworksGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/network/private` | OvhCloudPublicCloud/network/createPrivateNetworkPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/network/private/{x}` | OvhCloudPublicCloud/network/deletePrivateNetworkDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/private/{x}` | OvhCloudPublicCloud/network/getPrivateNetworkDetailGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/network/private/{x}` | OvhCloudPublicCloud/network/updatePrivateNetworkPut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/network/private/{x}/region` | OvhCloudPublicCloud/network/activatePrivateNetworkRegionPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/private/{x}/subnet` | OvhCloudPublicCloud/network/listSubnetsGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/network/private/{x}/subnet` | OvhCloudPublicCloud/network/createSubnetPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/network/private/{x}/subnet/{x}` | OvhCloudPublicCloud/network/deleteSubnetDelete.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/network/private/{x}/subnet/{x}` | OvhCloudPublicCloud/network/updateSubnetPut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/public` | OvhCloudPublicCloud/network/listPublicNetworksGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/network/subnet/{x}` | OvhCloudPublicCloud/network/getSubnetDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities` | OvhCloudPublicCloud/quantum/listCapabilitiesGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities/region` | OvhCloudPublicCloud/quantum/listCapabilitiesRegionGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/quantum/capabilities/region/{x}` | OvhCloudPublicCloud/quantum/getCapabilitiesRegionDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/rancher/{x}/adminCredentials` | OvhCloudPublicCloud/rancher/adminCredentials.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region` | OvhCloudPublicCloud/region/regionListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}` | OvhCloudPublicCloud/region/regionGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/coldArchive` | OvhCloudPublicCloud/region/regionColdArchiveListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive` | OvhCloudPublicCloud/region/regionColdArchiveCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}` | OvhCloudPublicCloud/region/regionColdArchiveDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}` | OvhCloudPublicCloud/region/regionColdArchiveGetGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/archive` | OvhCloudPublicCloud/region/regionColdArchiveArchivePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/destroy` | OvhCloudPublicCloud/region/regionColdArchiveDestroyPost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/object/{x}` | OvhCloudPublicCloud/region/regionColdArchiveObjectDeleteDelete.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/policy/{x}` | OvhCloudPublicCloud/region/regionColdArchivePolicyCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/presign` | OvhCloudPublicCloud/region/regionColdArchivePresignPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/coldArchive/{x}/restore` | OvhCloudPublicCloud/region/regionColdArchiveRestorePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/floatingip` | OvhCloudPublicCloud/region/floatingip/floatingIpListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/floatingip` | OvhCloudPublicCloud/region/floatingip/floatingIpCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/floatingip/{x}` | OvhCloudPublicCloud/region/floatingip/floatingIpDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/floatingip/{x}` | OvhCloudPublicCloud/region/floatingip/floatingIpGetGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/floatingip/{x}/detach` | OvhCloudPublicCloud/region/floatingip/floatingIpDetachPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/gateway` | OvhCloudPublicCloud/region/gateway/gatewayListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/gateway` | OvhCloudPublicCloud/region/gateway/gatewayCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/gateway/{x}` | OvhCloudPublicCloud/region/gateway/gatewayDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/gateway/{x}` | OvhCloudPublicCloud/region/gateway/gatewayGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/gateway/{x}` | OvhCloudPublicCloud/region/gateway/gatewayUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/gateway/{x}/expose` | OvhCloudPublicCloud/region/gateway/gatewayExposePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface/{x}` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/gateway/{x}/interface/{x}` | OvhCloudPublicCloud/region/gateway/gatewayInterfaceGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/instance` | OvhCloudPublicCloud/region/regionInstanceListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/instance/{x}` | OvhCloudPublicCloud/region/regionInstanceGetGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/abortSnapshot` | OvhCloudPublicCloud/region/regionInstanceAbortSnapshotPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/associateFloatingIp` | OvhCloudPublicCloud/region/regionInstanceAssociateFloatingIpPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/autobackup` | OvhCloudPublicCloud/region/regionInstanceAutobackupPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/floatingIp` | OvhCloudPublicCloud/region/regionInstanceFloatingIpPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/reinstall` | OvhCloudPublicCloud/region/regionInstanceReinstallPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/instance/{x}/snapshot` | OvhCloudPublicCloud/region/regionInstanceSnapshotPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/certificate` | OvhCloudPublicCloud/region/regionKeymanagerCertificateListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/keymanager/certificate` | OvhCloudPublicCloud/region/regionKeymanagerCertificateCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/keymanager/certificate/{x}` | OvhCloudPublicCloud/region/regionKeymanagerCertificateDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/certificate/{x}` | OvhCloudPublicCloud/region/regionKeymanagerCertificateGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/secret` | OvhCloudPublicCloud/region/regionKeymanagerSecretListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/keymanager/secret` | OvhCloudPublicCloud/region/regionKeymanagerSecretCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/keymanager/secret/{x}` | OvhCloudPublicCloud/region/regionKeymanagerSecretDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/keymanager/secret/{x}` | OvhCloudPublicCloud/region/regionKeymanagerSecretGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/flavor` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingFlavorListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/flavor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingFlavorGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingHealthMonitorUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingL7PolicyL7RuleUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/listener/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingListenerUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/associateFloatingIp` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerAssociateFloatingIpPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/floatingIp` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerFloatingIpPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionGetGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/url` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerLogUrlPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/stats` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLoadBalancerStatsGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/log/kind` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLogKindListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/log/kind/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingLogKindGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` | OvhCloudPublicCloud/region/loadbalancing/loadbalancingPoolMemberUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/network` | OvhCloudPublicCloud/region/regionNetworkListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/network` | OvhCloudPublicCloud/region/regionNetworkCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/network/{x}` | OvhCloudPublicCloud/region/regionNetworkDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/network/{x}` | OvhCloudPublicCloud/region/regionNetworkGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet` | OvhCloudPublicCloud/region/regionNetworkSubnetListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet` | OvhCloudPublicCloud/region/regionNetworkSubnetCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet/{x}` | OvhCloudPublicCloud/region/regionNetworkSubnetDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet/{x}` | OvhCloudPublicCloud/region/regionNetworkSubnetGetGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/network/{x}/subnet/{x}/gateway` | OvhCloudPublicCloud/region/regionNetworkSubnetGatewayPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/quota` | OvhCloudPublicCloud/region/regionQuotaListGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/quota/allowed` | OvhCloudPublicCloud/region/regionQuotaAllowedGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/quota/storage` | OvhCloudPublicCloud/region/regionQuotaStorageGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/share` | OvhCloudPublicCloud/region/regionShareCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/share/{x}` | OvhCloudPublicCloud/region/regionShareUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot` | OvhCloudPublicCloud/region/regionShareSnapshotCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` | OvhCloudPublicCloud/region/regionShareSnapshotGetGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage` | OvhCloudPublicCloud/region/regionStorageListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage` | OvhCloudPublicCloud/region/regionStorageCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}` | OvhCloudPublicCloud/region/regionStorageDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}` | OvhCloudPublicCloud/region/regionStorageGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}` | OvhCloudPublicCloud/region/regionStorageUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/bulkDeleteObjects` | OvhCloudPublicCloud/region/regionStorageBulkDeleteObjectsPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/job/replication` | OvhCloudPublicCloud/region/regionStorageReplicationListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/job/replication` | OvhCloudPublicCloud/region/regionStorageReplicationCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}/lifecycle` | OvhCloudPublicCloud/region/regionStorageLifecycleDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/lifecycle` | OvhCloudPublicCloud/region/regionStorageLifecycleGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}/lifecycle` | OvhCloudPublicCloud/region/regionStorageLifecycleUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object` | OvhCloudPublicCloud/region/regionStorageObjectListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object` | OvhCloudPublicCloud/region/regionStorageObjectCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}` | OvhCloudPublicCloud/region/regionStorageObjectDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}` | OvhCloudPublicCloud/region/regionStorageObjectGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}` | OvhCloudPublicCloud/region/regionStorageObjectUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/copy` | OvhCloudPublicCloud/region/regionStorageObjectCopyPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/restore` | OvhCloudPublicCloud/region/regionStorageObjectRestorePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version` | OvhCloudPublicCloud/region/regionStorageObjectVersionListGet.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` | OvhCloudPublicCloud/region/regionStorageObjectVersionDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` | OvhCloudPublicCloud/region/regionStorageObjectVersionGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` | OvhCloudPublicCloud/region/regionStorageObjectVersionUpdatePut.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}/copy` | OvhCloudPublicCloud/region/regionStorageObjectVersionCopyPost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}/restore` | OvhCloudPublicCloud/region/regionStorageObjectVersionRestorePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/policy/{x}` | OvhCloudPublicCloud/region/regionStoragePolicyCreatePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/storage/{x}/presign` | OvhCloudPublicCloud/region/regionStoragePresignPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/volume/{x}` | OvhCloudPublicCloud/region/regionVolumeUpdatePut.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/volumeBackup` | OvhCloudPublicCloud/region/regionVolumeBackupListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/volumeBackup` | OvhCloudPublicCloud/region/regionVolumeBackupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}` | OvhCloudPublicCloud/region/regionVolumeBackupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}` | OvhCloudPublicCloud/region/regionVolumeBackupGetGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}/restore` | OvhCloudPublicCloud/region/regionVolumeBackupRestorePost.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/volumeBackup/{x}/volume` | OvhCloudPublicCloud/region/regionVolumeBackupVolumePost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/volumeType` | OvhCloudPublicCloud/region/regionVolumeTypeListGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/region/{x}/workflow/backup` | OvhCloudPublicCloud/region/regionWorkflowBackupCreatePost.operation.ts |
| publicCloud (v2) | DELETE | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupDeleteDelete.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupGetGet.operation.ts |
| publicCloud (v2) | PUT | `/publicCloud/project/{x}/region/{x}/workflow/backup/{x}` | OvhCloudPublicCloud/region/regionWorkflowBackupUpdatePut.operation.ts |
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
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/current` | OvhCloudPublicCloud/usage/getCurrentGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/forecast` | OvhCloudPublicCloud/usage/getForecastGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/history` | OvhCloudPublicCloud/usage/listHistoryGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/usage/history/{x}` | OvhCloudPublicCloud/usage/getHistoryDetailGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/listGet.operation.ts |
| publicCloud (v2) | POST | `/publicCloud/project/{x}/user` | OvhCloudPublicCloud/user/createPost.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/project/{x}/vrack` | OvhCloudPublicCloud/vrack/listGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/reference/blockStorage/capability/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumeCapabilityListGetByRegionNameGet.operation.ts |
| publicCloud (v2) | GET | `/publicCloud/reference/blockStorage/plan/getByRegionName` | OvhCloudPublicCloud/blockstorage/volumePlanCapabilityListGetByRegionNameGet.operation.ts |
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
| webhosting (v2) | GET | `/hosting/web/{x}/cdn` | OvhCloudHosting/cdn/cdnGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/availableOptions` | OvhCloudHosting/cdn/cdnAvailableOptionsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/domain` | OvhCloudHosting/cdn/cdnDomainListGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/cdn/domain` | OvhCloudHosting/cdn/cdnDomainCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/cdn/domain/{x}` | OvhCloudHosting/cdn/cdnDomainDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/domain/{x}` | OvhCloudHosting/cdn/cdnDomainGetGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/domain/{x}/logs` | OvhCloudHosting/cdn/cdnDomainLogsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/domain/{x}/option` | OvhCloudHosting/cdn/cdnDomainOptionListGet.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/cdn/domain/{x}/option` | OvhCloudHosting/cdn/cdnDomainOptionCreatePost.operation.ts |
| webhosting (v2) | DELETE | `/hosting/web/{x}/cdn/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionDeleteDelete.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionGetGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/cdn/domain/{x}/option/{x}` | OvhCloudHosting/cdn/cdnDomainOptionUpdatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/cdn/domain/{x}/purge` | OvhCloudHosting/cdn/cdnDomainPurgePost.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/cdn/domain/{x}/refresh` | OvhCloudHosting/cdn/cdnDomainRefreshPost.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/domain/{x}/statistics` | OvhCloudHosting/cdn/cdnDomainStatisticsGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/operation` | OvhCloudHosting/cdn/cdnOperationListGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/operation/{x}` | OvhCloudHosting/cdn/cdnOperationGetGet.operation.ts |
| webhosting (v2) | GET | `/hosting/web/{x}/cdn/serviceInfos` | OvhCloudHosting/cdn/cdnServiceInfosGet.operation.ts |
| webhosting (v2) | PUT | `/hosting/web/{x}/cdn/serviceInfos` | OvhCloudHosting/cdn/cdnServiceInfosUpdatePut.operation.ts |
| webhosting (v2) | POST | `/hosting/web/{x}/cdn/terminate` | OvhCloudHosting/cdn/cdnTerminateCreate.operation.ts |
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