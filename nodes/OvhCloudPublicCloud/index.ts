import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	description as projectListGetDescription,
	execute as projectListGetExecute,
} from './project/listGet.operation';
import {
	description as projectDetailGetDescription,
	execute as projectDetailGetExecute,
} from './project/getDetailGet.operation';

import {
	description as listGetV2Description,
	execute as listGetV2Execute,
} from './project/listGetV2.operation';
import {
	description as getDetailGetV2Description,
	execute as getDetailGetV2Execute,
} from './project/getDetailGetV2.operation';

import {
	description as rancherServiceListGetDescription,
	execute as rancherServiceListGetExecute,
} from './rancher/serviceListGet.operation';
import {
	description as rancherServiceGetDescription,
	execute as rancherServiceGetExecute,
} from './rancher/serviceGet.operation';
import {
	description as rancherPlanCapabilityListGetDescription,
	execute as rancherPlanCapabilityListGetExecute,
} from './rancher/planCapabilityListGet.operation';
import {
	description as rancherVersionCapabilityListGetDescription,
	execute as rancherVersionCapabilityListGetExecute,
} from './rancher/versionCapabilityListGet.operation';
import {
	description as rancherServiceCreatePostDescription,
	execute as rancherServiceCreatePostExecute,
} from './rancher/serviceCreatePost.operation';
import {
	description as rancherServiceUpdatePutDescription,
	execute as rancherServiceUpdatePutExecute,
} from './rancher/serviceUpdatePut.operation';
import {
	description as rancherServiceDeleteDeleteDescription,
	execute as rancherServiceDeleteDeleteExecute,
} from './rancher/serviceDeleteDelete.operation';
import {
	descriptionGet as rancherAdminCredentialsGetDescription,
	descriptionPost as rancherAdminCredentialsPostDescription,
	executeGet as rancherAdminCredentialsGetExecute,
	executePost as rancherAdminCredentialsPostExecute,
} from './rancher/adminCredentials.operation';
import {
	description as rancherTaskListGetDescription,
	execute as rancherTaskListGetExecute,
} from './rancher/taskListGet.operation';
import {
	description as rancherTaskDetailGetDescription,
	execute as rancherTaskDetailGetExecute,
} from './rancher/taskDetailGet.operation';
import {
	description as rancherEventListGetDescription,
	execute as rancherEventListGetExecute,
} from './rancher/eventListGet.operation';

import {
	description as serviceListGetV2Description,
	execute as serviceListGetV2Execute,
} from './rancher/serviceListGetV2.operation';
import {
	description as serviceCreatePostV2Description,
	execute as serviceCreatePostV2Execute,
} from './rancher/serviceCreatePostV2.operation';
import {
	description as serviceDeleteDeleteV2Description,
	execute as serviceDeleteDeleteV2Execute,
} from './rancher/serviceDeleteDeleteV2.operation';
import {
	description as serviceGetGetV2Description,
	execute as serviceGetGetV2Execute,
} from './rancher/serviceGetGetV2.operation';
import {
	description as serviceUpdatePutV2Description,
	execute as serviceUpdatePutV2Execute,
} from './rancher/serviceUpdatePutV2.operation';
import {
	description as adminCredentialsResetV2Description,
	execute as adminCredentialsResetV2Execute,
} from './rancher/adminCredentialsResetV2.operation';
import {
	description as planCapabilityListGetV2Description,
	execute as planCapabilityListGetV2Execute,
} from './rancher/planCapabilityListGetV2.operation';
import {
	description as versionCapabilityListGetV2Description,
	execute as versionCapabilityListGetV2Execute,
} from './rancher/versionCapabilityListGetV2.operation';
import {
	description as eventListGetV2Description,
	execute as eventListGetV2Execute,
} from './rancher/eventListGetV2.operation';
import {
	description as taskListGetV2Description,
	execute as taskListGetV2Execute,
} from './rancher/taskListGetV2.operation';
import {
	description as taskDetailGetV2Description,
	execute as taskDetailGetV2Execute,
} from './rancher/taskDetailGetV2.operation';
import {
	description as referencePlanListGetV2Description,
	execute as referencePlanListGetV2Execute,
} from './rancher/referencePlanListGetV2.operation';
import {
	description as referenceVersionListGetV2Description,
	execute as referenceVersionListGetV2Execute,
} from './rancher/referenceVersionListGetV2.operation';
import {
	description as globalReferencePlanListGetV2Description,
	execute as globalReferencePlanListGetV2Execute,
} from './rancher/globalReferencePlanListGetV2.operation';
import {
	description as globalReferenceVersionListGetV2Description,
	execute as globalReferenceVersionListGetV2Execute,
} from './rancher/globalReferenceVersionListGetV2.operation';

import {
	description as volumeListGetDescription,
	execute as volumeListGetExecute,
} from './blockstorage/volumeListGet.operation';
import {
	description as volumeGetDescription,
	execute as volumeGetExecute,
} from './blockstorage/volumeGet.operation';
import {
	description as volumeCreatePostDescription,
	execute as volumeCreatePostExecute,
} from './blockstorage/volumeCreatePost.operation';
import {
	description as volumeUpdatePutDescription,
	execute as volumeUpdatePutExecute,
} from './blockstorage/volumeUpdatePut.operation';
import {
	description as volumeDeleteDeleteDescription,
	execute as volumeDeleteDeleteExecute,
} from './blockstorage/volumeDeleteDelete.operation';

import {
	description as backupListGetDescription,
	execute as backupListGetExecute,
} from './blockstorage/backupListGet.operation';
import {
	description as backupGetDescription,
	execute as backupGetExecute,
} from './blockstorage/backupGet.operation';
import {
	description as backupCreatePostDescription,
	execute as backupCreatePostExecute,
} from './blockstorage/backupCreatePost.operation';
import {
	description as backupUpdatePutDescription,
	execute as backupUpdatePutExecute,
} from './blockstorage/backupUpdatePut.operation';
import {
	description as backupDeleteDeleteDescription,
	execute as backupDeleteDeleteExecute,
} from './blockstorage/backupDeleteDelete.operation';

import {
	description as snapshotListGetDescription,
	execute as snapshotListGetExecute,
} from './blockstorage/snapshotListGet.operation';
import {
	description as snapshotGetDescription,
	execute as snapshotGetExecute,
} from './blockstorage/snapshotGet.operation';
import {
	description as snapshotCreatePostDescription,
	execute as snapshotCreatePostExecute,
} from './blockstorage/snapshotCreatePost.operation';
import {
	description as snapshotUpdatePutDescription,
	execute as snapshotUpdatePutExecute,
} from './blockstorage/snapshotUpdatePut.operation';
import {
	description as snapshotDeleteDeleteDescription,
	execute as snapshotDeleteDeleteExecute,
} from './blockstorage/snapshotDeleteDelete.operation';

import {
	description as redisClusterListGetDescription,
	execute as redisClusterListGetExecute,
} from './database/redis/clusterListGet.operation';

import {
	description as redisClusterGetGetDescription,
	execute as redisClusterGetGetExecute,
} from './database/redis/clusterGetGet.operation';

import {
	description as redisClusterCreatePostDescription,
	execute as redisClusterCreatePostExecute,
} from './database/redis/clusterCreatePost.operation';

import {
	description as redisClusterUpdatePutDescription,
	execute as redisClusterUpdatePutExecute,
} from './database/redis/clusterUpdatePut.operation';

import {
	description as redisClusterDeleteDeleteDescription,
	execute as redisClusterDeleteDeleteExecute,
} from './database/redis/clusterDeleteDelete.operation';

import {
	description as redisBackupListGetDescription,
	execute as redisBackupListGetExecute,
} from './database/redis/backupListGet.operation';

import {
	description as redisBackupGetGetDescription,
	execute as redisBackupGetGetExecute,
} from './database/redis/backupGetGet.operation';

import {
	description as redisAdvancedConfigurationGetDescription,
	execute as redisAdvancedConfigurationGetExecute,
} from './database/redis/advancedConfigurationGet.operation';

import {
	description as redisAdvancedConfigurationUpdatePutDescription,
	execute as redisAdvancedConfigurationUpdatePutExecute,
} from './database/redis/advancedConfigurationUpdatePut.operation';

import {
	description as redisCapabilitiesAdvancedConfigurationGetDescription,
	execute as redisCapabilitiesAdvancedConfigurationGetExecute,
} from './database/redis/capabilitiesAdvancedConfigurationGet.operation';

import {
	description as redisCapabilitiesCategoriesGetDescription,
	execute as redisCapabilitiesCategoriesGetExecute,
} from './database/redis/capabilitiesCategoriesGet.operation';

import {
	description as redisCapabilitiesCommandsGetDescription,
	execute as redisCapabilitiesCommandsGetExecute,
} from './database/redis/capabilitiesCommandsGet.operation';

import {
	description as redisCapabilitiesIntegrationGetDescription,
	execute as redisCapabilitiesIntegrationGetExecute,
} from './database/redis/capabilitiesIntegrationGet.operation';

import {
	description as redisIntegrationListGetDescription,
	execute as redisIntegrationListGetExecute,
} from './database/redis/integrationListGet.operation';

import {
	description as redisIntegrationCreatePostDescription,
	execute as redisIntegrationCreatePostExecute,
} from './database/redis/integrationCreatePost.operation';

import {
	description as redisIntegrationGetGetDescription,
	execute as redisIntegrationGetGetExecute,
} from './database/redis/integrationGetGet.operation';

import {
	description as redisIntegrationDeleteDeleteDescription,
	execute as redisIntegrationDeleteDeleteExecute,
} from './database/redis/integrationDeleteDelete.operation';

import {
	description as redisIpRestrictionListGetDescription,
	execute as redisIpRestrictionListGetExecute,
} from './database/redis/ipRestrictionListGet.operation';

import {
	description as redisIpRestrictionCreatePostDescription,
	execute as redisIpRestrictionCreatePostExecute,
} from './database/redis/ipRestrictionCreatePost.operation';

import {
	description as redisIpRestrictionGetGetDescription,
	execute as redisIpRestrictionGetGetExecute,
} from './database/redis/ipRestrictionGetGet.operation';

import {
	description as redisIpRestrictionUpdatePutDescription,
	execute as redisIpRestrictionUpdatePutExecute,
} from './database/redis/ipRestrictionUpdatePut.operation';

import {
	description as redisIpRestrictionDeleteDeleteDescription,
	execute as redisIpRestrictionDeleteDeleteExecute,
} from './database/redis/ipRestrictionDeleteDelete.operation';

import {
	description as redisLogKindListGetDescription,
	execute as redisLogKindListGetExecute,
} from './database/redis/logKindListGet.operation';

import {
	description as redisLogKindGetDescription,
	execute as redisLogKindGetExecute,
} from './database/redis/logKindGet.operation';

import {
	description as redisLogSubscriptionListGetDescription,
	execute as redisLogSubscriptionListGetExecute,
} from './database/redis/logSubscriptionListGet.operation';

import {
	description as redisLogSubscriptionCreatePostDescription,
	execute as redisLogSubscriptionCreatePostExecute,
} from './database/redis/logSubscriptionCreatePost.operation';

import {
	description as redisLogSubscriptionGetGetDescription,
	execute as redisLogSubscriptionGetGetExecute,
} from './database/redis/logSubscriptionGetGet.operation';

import {
	description as redisLogSubscriptionDeleteDeleteDescription,
	execute as redisLogSubscriptionDeleteDeleteExecute,
} from './database/redis/logSubscriptionDeleteDelete.operation';

import {
	description as redisLogUrlCreatePostDescription,
	execute as redisLogUrlCreatePostExecute,
} from './database/redis/logUrlCreatePost.operation';

import {
	description as redisLogsGetDescription,
	execute as redisLogsGetExecute,
} from './database/redis/logsGet.operation';

import {
	description as redisMaintenanceListGetDescription,
	execute as redisMaintenanceListGetExecute,
} from './database/redis/maintenanceListGet.operation';

import {
	description as redisMaintenanceGetDescription,
	execute as redisMaintenanceGetExecute,
} from './database/redis/maintenanceGet.operation';

import {
	description as redisMaintenanceApplyPostDescription,
	execute as redisMaintenanceApplyPostExecute,
} from './database/redis/maintenanceApplyPost.operation';

import {
	description as redisMetricListGetDescription,
	execute as redisMetricListGetExecute,
} from './database/redis/metricListGet.operation';

import {
	description as redisMetricGetDescription,
	execute as redisMetricGetExecute,
} from './database/redis/metricGet.operation';

import {
	description as redisNodeListGetDescription,
	execute as redisNodeListGetExecute,
} from './database/redis/nodeListGet.operation';

import {
	description as redisNodeGetGetDescription,
	execute as redisNodeGetGetExecute,
} from './database/redis/nodeGetGet.operation';

import {
	description as redisPrometheusGetDescription,
	execute as redisPrometheusGetExecute,
} from './database/redis/prometheusGet.operation';

import {
	description as redisPrometheusCredentialsResetPostDescription,
	execute as redisPrometheusCredentialsResetPostExecute,
} from './database/redis/prometheusCredentialsResetPost.operation';

import {
	description as redisUserListGetDescription,
	execute as redisUserListGetExecute,
} from './database/redis/userListGet.operation';

import {
	description as redisUserCreatePostDescription,
	execute as redisUserCreatePostExecute,
} from './database/redis/userCreatePost.operation';

import {
	description as redisUserGetGetDescription,
	execute as redisUserGetGetExecute,
} from './database/redis/userGetGet.operation';

import {
	description as redisUserUpdatePutDescription,
	execute as redisUserUpdatePutExecute,
} from './database/redis/userUpdatePut.operation';

import {
	description as redisUserDeleteDeleteDescription,
	execute as redisUserDeleteDeleteExecute,
} from './database/redis/userDeleteDelete.operation';

import {
	description as redisUserCredentialsResetPostDescription,
	execute as redisUserCredentialsResetPostExecute,
} from './database/redis/userCredentialsResetPost.operation';

import {
	description as valkeyClusterListGetDescription,
	execute as valkeyClusterListGetExecute,
} from './database/valkey/clusterListGet.operation';

import {
	description as valkeyClusterGetGetDescription,
	execute as valkeyClusterGetGetExecute,
} from './database/valkey/clusterGetGet.operation';

import {
	description as valkeyClusterCreatePostDescription,
	execute as valkeyClusterCreatePostExecute,
} from './database/valkey/clusterCreatePost.operation';

import {
	description as valkeyClusterUpdatePutDescription,
	execute as valkeyClusterUpdatePutExecute,
} from './database/valkey/clusterUpdatePut.operation';

import {
	description as valkeyClusterDeleteDeleteDescription,
	execute as valkeyClusterDeleteDeleteExecute,
} from './database/valkey/clusterDeleteDelete.operation';

import {
	description as valkeyBackupListGetDescription,
	execute as valkeyBackupListGetExecute,
} from './database/valkey/backupListGet.operation';

import {
	description as valkeyBackupGetGetDescription,
	execute as valkeyBackupGetGetExecute,
} from './database/valkey/backupGetGet.operation';

import {
	description as valkeyUserListGetDescription,
	execute as valkeyUserListGetExecute,
} from './database/valkey/userListGet.operation';

import {
	description as valkeyUserCreatePostDescription,
	execute as valkeyUserCreatePostExecute,
} from './database/valkey/userCreatePost.operation';

import {
	description as valkeyUserGetGetDescription,
	execute as valkeyUserGetGetExecute,
} from './database/valkey/userGetGet.operation';

import {
	description as valkeyUserUpdatePutDescription,
	execute as valkeyUserUpdatePutExecute,
} from './database/valkey/userUpdatePut.operation';

import {
	description as valkeyUserDeleteDeleteDescription,
	execute as valkeyUserDeleteDeleteExecute,
} from './database/valkey/userDeleteDelete.operation';

import {
	description as valkeyNodeListGetDescription,
	execute as valkeyNodeListGetExecute,
} from './database/valkey/nodeListGet.operation';

import {
	description as valkeyNodeGetGetDescription,
	execute as valkeyNodeGetGetExecute,
} from './database/valkey/nodeGetGet.operation';

import {
	description as valkeyLogSubscriptionListGetDescription,
	execute as valkeyLogSubscriptionListGetExecute,
} from './database/valkey/logSubscriptionListGet.operation';

import {
	description as valkeyLogSubscriptionCreatePostDescription,
	execute as valkeyLogSubscriptionCreatePostExecute,
} from './database/valkey/logSubscriptionCreatePost.operation';

import {
	description as valkeyLogSubscriptionGetGetDescription,
	execute as valkeyLogSubscriptionGetGetExecute,
} from './database/valkey/logSubscriptionGetGet.operation';

import {
	description as valkeyMaintenanceGetDescription,
	execute as valkeyMaintenanceGetExecute,
} from './database/valkey/maintenanceGet.operation';

import {
	description as valkeyMetricGetDescription,
	execute as valkeyMetricGetExecute,
} from './database/valkey/metricGet.operation';

import {
	description as valkeyPrometheusGetDescription,
	execute as valkeyPrometheusGetExecute,
} from './database/valkey/prometheusGet.operation';

import {
	description as valkeyIntegrationListGetDescription,
	execute as valkeyIntegrationListGetExecute,
} from './database/valkey/integrationListGet.operation';

import {
	description as valkeyIntegrationCreatePostDescription,
	execute as valkeyIntegrationCreatePostExecute,
} from './database/valkey/integrationCreatePost.operation';

import {
	description as cassandraClusterListGetDescription,
	execute as cassandraClusterListGetExecute,
} from './database/cassandra/clusterListGet.operation';
import {
	description as cassandraClusterGetGetDescription,
	execute as cassandraClusterGetGetExecute,
} from './database/cassandra/clusterGetGet.operation';
import {
	description as cassandraClusterCreatePostDescription,
	execute as cassandraClusterCreatePostExecute,
} from './database/cassandra/clusterCreatePost.operation';
import {
	description as cassandraClusterUpdatePutDescription,
	execute as cassandraClusterUpdatePutExecute,
} from './database/cassandra/clusterUpdatePut.operation';
import {
	description as cassandraClusterDeleteDeleteDescription,
	execute as cassandraClusterDeleteDeleteExecute,
} from './database/cassandra/clusterDeleteDelete.operation';
import {
	description as cassandraBackupListGetDescription,
	execute as cassandraBackupListGetExecute,
} from './database/cassandra/backupListGet.operation';
import {
	description as cassandraBackupCreatePostDescription,
	execute as cassandraBackupCreatePostExecute,
} from './database/cassandra/backupCreatePost.operation';
import {
	description as cassandraBackupGetGetDescription,
	execute as cassandraBackupGetGetExecute,
} from './database/cassandra/backupGetGet.operation';
import {
	description as cassandraBackupDeleteDeleteDescription,
	execute as cassandraBackupDeleteDeleteExecute,
} from './database/cassandra/backupDeleteDelete.operation';
import {
	description as cassandraUserListGetDescription,
	execute as cassandraUserListGetExecute,
} from './database/cassandra/userListGet.operation';
import {
	description as cassandraUserCreatePostDescription,
	execute as cassandraUserCreatePostExecute,
} from './database/cassandra/userCreatePost.operation';
import {
	description as cassandraUserGetGetDescription,
	execute as cassandraUserGetGetExecute,
} from './database/cassandra/userGetGet.operation';
import {
	description as cassandraUserUpdatePutDescription,
	execute as cassandraUserUpdatePutExecute,
} from './database/cassandra/userUpdatePut.operation';
import {
	description as cassandraUserDeleteDeleteDescription,
	execute as cassandraUserDeleteDeleteExecute,
} from './database/cassandra/userDeleteDelete.operation';
import {
	description as cassandraNodeListGetDescription,
	execute as cassandraNodeListGetExecute,
} from './database/cassandra/nodeListGet.operation';
import {
	description as cassandraNodeCreatePostDescription,
	execute as cassandraNodeCreatePostExecute,
} from './database/cassandra/nodeCreatePost.operation';
import {
	description as cassandraNodeGetGetDescription,
	execute as cassandraNodeGetGetExecute,
} from './database/cassandra/nodeGetGet.operation';
import {
	description as cassandraNodeUpdatePutDescription,
	execute as cassandraNodeUpdatePutExecute,
} from './database/cassandra/nodeUpdatePut.operation';
import {
	description as cassandraNodeDeleteDeleteDescription,
	execute as cassandraNodeDeleteDeleteExecute,
} from './database/cassandra/nodeDeleteDelete.operation';
import {
	description as cassandraIpRestrictionListGetDescription,
	execute as cassandraIpRestrictionListGetExecute,
} from './database/cassandra/ipRestrictionListGet.operation';
import {
	description as cassandraIpRestrictionCreatePostDescription,
	execute as cassandraIpRestrictionCreatePostExecute,
} from './database/cassandra/ipRestrictionCreatePost.operation';
import {
	description as cassandraLogSubscriptionListGetDescription,
	execute as cassandraLogSubscriptionListGetExecute,
} from './database/cassandra/logSubscriptionListGet.operation';
import {
	description as cassandraLogSubscriptionCreatePostDescription,
	execute as cassandraLogSubscriptionCreatePostExecute,
} from './database/cassandra/logSubscriptionCreatePost.operation';
import {
	description as cassandraLogSubscriptionGetGetDescription,
	execute as cassandraLogSubscriptionGetGetExecute,
} from './database/cassandra/logSubscriptionGetGet.operation';
import {
	description as cassandraMaintenanceGetDescription,
	execute as cassandraMaintenanceGetExecute,
} from './database/cassandra/maintenanceGet.operation';
import {
	description as cassandraMaintenanceUpdatePutDescription,
	execute as cassandraMaintenanceUpdatePutExecute,
} from './database/cassandra/maintenanceUpdatePut.operation';
import {
	description as cassandraMetricGetDescription,
	execute as cassandraMetricGetExecute,
} from './database/cassandra/metricGet.operation';
import {
	description as cassandraPrometheusGetDescription,
	execute as cassandraPrometheusGetExecute,
} from './database/cassandra/prometheusGet.operation';
import {
	description as cassandraCertificateListGetDescription,
	execute as cassandraCertificateListGetExecute,
} from './database/cassandra/certificateListGet.operation';
import {
	description as cassandraCertificateCreatePostDescription,
	execute as cassandraCertificateCreatePostExecute,
} from './database/cassandra/certificateCreatePost.operation';
import {
	description as cassandraIntegrationListGetDescription,
	execute as cassandraIntegrationListGetExecute,
} from './database/cassandra/integrationListGet.operation';
import {
	description as cassandraIntegrationCreatePostDescription,
	execute as cassandraIntegrationCreatePostExecute,
} from './database/cassandra/integrationCreatePost.operation';
import {
	description as clickhouseClusterListGetDescription,
	execute as clickhouseClusterListGetExecute,
} from './database/clickhouse/clusterListGet.operation';
import {
	description as clickhouseClusterGetGetDescription,
	execute as clickhouseClusterGetGetExecute,
} from './database/clickhouse/clusterGetGet.operation';
import {
	description as clickhouseClusterCreatePostDescription,
	execute as clickhouseClusterCreatePostExecute,
} from './database/clickhouse/clusterCreatePost.operation';
import {
	description as clickhouseClusterUpdatePutDescription,
	execute as clickhouseClusterUpdatePutExecute,
} from './database/clickhouse/clusterUpdatePut.operation';
import {
	description as clickhouseClusterDeleteDeleteDescription,
	execute as clickhouseClusterDeleteDeleteExecute,
} from './database/clickhouse/clusterDeleteDelete.operation';
import {
	description as clickhouseBackupListGetDescription,
	execute as clickhouseBackupListGetExecute,
} from './database/clickhouse/backupListGet.operation';
import {
	description as clickhouseBackupCreatePostDescription,
	execute as clickhouseBackupCreatePostExecute,
} from './database/clickhouse/backupCreatePost.operation';
import {
	description as clickhouseBackupGetGetDescription,
	execute as clickhouseBackupGetGetExecute,
} from './database/clickhouse/backupGetGet.operation';
import {
	description as clickhouseBackupDeleteDeleteDescription,
	execute as clickhouseBackupDeleteDeleteExecute,
} from './database/clickhouse/backupDeleteDelete.operation';
import {
	description as clickhouseUserListGetDescription,
	execute as clickhouseUserListGetExecute,
} from './database/clickhouse/userListGet.operation';
import {
	description as clickhouseUserCreatePostDescription,
	execute as clickhouseUserCreatePostExecute,
} from './database/clickhouse/userCreatePost.operation';
import {
	description as clickhouseUserGetGetDescription,
	execute as clickhouseUserGetGetExecute,
} from './database/clickhouse/userGetGet.operation';
import {
	description as clickhouseUserUpdatePutDescription,
	execute as clickhouseUserUpdatePutExecute,
} from './database/clickhouse/userUpdatePut.operation';
import {
	description as clickhouseUserDeleteDeleteDescription,
	execute as clickhouseUserDeleteDeleteExecute,
} from './database/clickhouse/userDeleteDelete.operation';
import {
	description as clickhouseNodeListGetDescription,
	execute as clickhouseNodeListGetExecute,
} from './database/clickhouse/nodeListGet.operation';
import {
	description as clickhouseNodeCreatePostDescription,
	execute as clickhouseNodeCreatePostExecute,
} from './database/clickhouse/nodeCreatePost.operation';
import {
	description as clickhouseNodeGetGetDescription,
	execute as clickhouseNodeGetGetExecute,
} from './database/clickhouse/nodeGetGet.operation';
import {
	description as clickhouseNodeUpdatePutDescription,
	execute as clickhouseNodeUpdatePutExecute,
} from './database/clickhouse/nodeUpdatePut.operation';
import {
	description as clickhouseNodeDeleteDeleteDescription,
	execute as clickhouseNodeDeleteDeleteExecute,
} from './database/clickhouse/nodeDeleteDelete.operation';
import {
	description as clickhouseIpRestrictionListGetDescription,
	execute as clickhouseIpRestrictionListGetExecute,
} from './database/clickhouse/ipRestrictionListGet.operation';
import {
	description as clickhouseIpRestrictionCreatePostDescription,
	execute as clickhouseIpRestrictionCreatePostExecute,
} from './database/clickhouse/ipRestrictionCreatePost.operation';
import {
	description as clickhouseLogSubscriptionListGetDescription,
	execute as clickhouseLogSubscriptionListGetExecute,
} from './database/clickhouse/logSubscriptionListGet.operation';
import {
	description as clickhouseLogSubscriptionCreatePostDescription,
	execute as clickhouseLogSubscriptionCreatePostExecute,
} from './database/clickhouse/logSubscriptionCreatePost.operation';
import {
	description as clickhouseLogSubscriptionGetGetDescription,
	execute as clickhouseLogSubscriptionGetGetExecute,
} from './database/clickhouse/logSubscriptionGetGet.operation';
import {
	description as clickhouseMaintenanceGetDescription,
	execute as clickhouseMaintenanceGetExecute,
} from './database/clickhouse/maintenanceGet.operation';
import {
	description as clickhouseMaintenanceUpdatePutDescription,
	execute as clickhouseMaintenanceUpdatePutExecute,
} from './database/clickhouse/maintenanceUpdatePut.operation';
import {
	description as clickhouseMetricGetDescription,
	execute as clickhouseMetricGetExecute,
} from './database/clickhouse/metricGet.operation';
import {
	description as clickhousePrometheusGetDescription,
	execute as clickhousePrometheusGetExecute,
} from './database/clickhouse/prometheusGet.operation';
import {
	description as clickhouseCertificateListGetDescription,
	execute as clickhouseCertificateListGetExecute,
} from './database/clickhouse/certificateListGet.operation';
import {
	description as clickhouseCertificateCreatePostDescription,
	execute as clickhouseCertificateCreatePostExecute,
} from './database/clickhouse/certificateCreatePost.operation';
import {
	description as clickhouseIntegrationListGetDescription,
	execute as clickhouseIntegrationListGetExecute,
} from './database/clickhouse/integrationListGet.operation';
import {
	description as clickhouseIntegrationCreatePostDescription,
	execute as clickhouseIntegrationCreatePostExecute,
} from './database/clickhouse/integrationCreatePost.operation';
import {
	description as grafanaClusterListGetDescription,
	execute as grafanaClusterListGetExecute,
} from './database/grafana/clusterListGet.operation';
import {
	description as grafanaClusterGetGetDescription,
	execute as grafanaClusterGetGetExecute,
} from './database/grafana/clusterGetGet.operation';
import {
	description as grafanaClusterCreatePostDescription,
	execute as grafanaClusterCreatePostExecute,
} from './database/grafana/clusterCreatePost.operation';
import {
	description as grafanaClusterUpdatePutDescription,
	execute as grafanaClusterUpdatePutExecute,
} from './database/grafana/clusterUpdatePut.operation';
import {
	description as grafanaClusterDeleteDeleteDescription,
	execute as grafanaClusterDeleteDeleteExecute,
} from './database/grafana/clusterDeleteDelete.operation';
import {
	description as grafanaBackupListGetDescription,
	execute as grafanaBackupListGetExecute,
} from './database/grafana/backupListGet.operation';
import {
	description as grafanaBackupGetGetDescription,
	execute as grafanaBackupGetGetExecute,
} from './database/grafana/backupGetGet.operation';
import {
	description as grafanaUserListGetDescription,
	execute as grafanaUserListGetExecute,
} from './database/grafana/userListGet.operation';
import {
	description as grafanaUserGetGetDescription,
	execute as grafanaUserGetGetExecute,
} from './database/grafana/userGetGet.operation';
import {
	description as grafanaUserCredentialsResetPostDescription,
	execute as grafanaUserCredentialsResetPostExecute,
} from './database/grafana/userCredentialsResetPost.operation';
import {
	description as grafanaNodeListGetDescription,
	execute as grafanaNodeListGetExecute,
} from './database/grafana/nodeListGet.operation';
import {
	description as grafanaNodeGetGetDescription,
	execute as grafanaNodeGetGetExecute,
} from './database/grafana/nodeGetGet.operation';
import {
	description as grafanaIpRestrictionListGetDescription,
	execute as grafanaIpRestrictionListGetExecute,
} from './database/grafana/ipRestrictionListGet.operation';
import {
	description as grafanaIpRestrictionCreatePostDescription,
	execute as grafanaIpRestrictionCreatePostExecute,
} from './database/grafana/ipRestrictionCreatePost.operation';
import {
	description as grafanaIpRestrictionGetGetDescription,
	execute as grafanaIpRestrictionGetGetExecute,
} from './database/grafana/ipRestrictionGetGet.operation';
import {
	description as grafanaIpRestrictionUpdatePutDescription,
	execute as grafanaIpRestrictionUpdatePutExecute,
} from './database/grafana/ipRestrictionUpdatePut.operation';
import {
	description as grafanaIpRestrictionDeleteDeleteDescription,
	execute as grafanaIpRestrictionDeleteDeleteExecute,
} from './database/grafana/ipRestrictionDeleteDelete.operation';
import {
	description as grafanaLogKindListGetDescription,
	execute as grafanaLogKindListGetExecute,
} from './database/grafana/logKindListGet.operation';
import {
	description as grafanaLogKindGetDescription,
	execute as grafanaLogKindGetExecute,
} from './database/grafana/logKindGet.operation';
import {
	description as grafanaLogSubscriptionListGetDescription,
	execute as grafanaLogSubscriptionListGetExecute,
} from './database/grafana/logSubscriptionListGet.operation';
import {
	description as grafanaLogSubscriptionCreatePostDescription,
	execute as grafanaLogSubscriptionCreatePostExecute,
} from './database/grafana/logSubscriptionCreatePost.operation';
import {
	description as grafanaLogSubscriptionGetGetDescription,
	execute as grafanaLogSubscriptionGetGetExecute,
} from './database/grafana/logSubscriptionGetGet.operation';
import {
	description as grafanaLogSubscriptionDeleteDeleteDescription,
	execute as grafanaLogSubscriptionDeleteDeleteExecute,
} from './database/grafana/logSubscriptionDeleteDelete.operation';
import {
	description as grafanaLogUrlCreatePostDescription,
	execute as grafanaLogUrlCreatePostExecute,
} from './database/grafana/logUrlCreatePost.operation';
import {
	description as grafanaLogsGetDescription,
	execute as grafanaLogsGetExecute,
} from './database/grafana/logsGet.operation';
import {
	description as grafanaMaintenanceListGetDescription,
	execute as grafanaMaintenanceListGetExecute,
} from './database/grafana/maintenanceListGet.operation';
import {
	description as grafanaMaintenanceGetDescription,
	execute as grafanaMaintenanceGetExecute,
} from './database/grafana/maintenanceGet.operation';
import {
	description as grafanaMaintenanceApplyPostDescription,
	execute as grafanaMaintenanceApplyPostExecute,
} from './database/grafana/maintenanceApplyPost.operation';
import {
	description as grafanaMetricListGetDescription,
	execute as grafanaMetricListGetExecute,
} from './database/grafana/metricListGet.operation';
import {
	description as grafanaMetricGetDescription,
	execute as grafanaMetricGetExecute,
} from './database/grafana/metricGet.operation';
import {
	description as grafanaAdvancedConfigurationGetDescription,
	execute as grafanaAdvancedConfigurationGetExecute,
} from './database/grafana/advancedConfigurationGet.operation';
import {
	description as grafanaAdvancedConfigurationUpdatePutDescription,
	execute as grafanaAdvancedConfigurationUpdatePutExecute,
} from './database/grafana/advancedConfigurationUpdatePut.operation';
import {
	description as grafanaCapabilitiesAdvancedConfigurationGetDescription,
	execute as grafanaCapabilitiesAdvancedConfigurationGetExecute,
} from './database/grafana/capabilitiesAdvancedConfigurationGet.operation';
import {
	description as grafanaCapabilitiesBackupRegionsGetDescription,
	execute as grafanaCapabilitiesBackupRegionsGetExecute,
} from './database/grafana/capabilitiesBackupRegionsGet.operation';
import {
	description as grafanaCapabilitiesIntegrationGetDescription,
	execute as grafanaCapabilitiesIntegrationGetExecute,
} from './database/grafana/capabilitiesIntegrationGet.operation';
import {
	description as grafanaIntegrationListGetDescription,
	execute as grafanaIntegrationListGetExecute,
} from './database/grafana/integrationListGet.operation';
import {
	description as grafanaIntegrationCreatePostDescription,
	execute as grafanaIntegrationCreatePostExecute,
} from './database/grafana/integrationCreatePost.operation';
import {
	description as grafanaIntegrationGetGetDescription,
	execute as grafanaIntegrationGetGetExecute,
} from './database/grafana/integrationGetGet.operation';
import {
	description as grafanaIntegrationDeleteDeleteDescription,
	execute as grafanaIntegrationDeleteDeleteExecute,
} from './database/grafana/integrationDeleteDelete.operation';

import {
	description as kafkaClusterListGetDescription,
	execute as kafkaClusterListGetExecute,
} from './database/kafka/clusterListGet.operation';
import {
	description as kafkaClusterGetGetDescription,
	execute as kafkaClusterGetGetExecute,
} from './database/kafka/clusterGetGet.operation';
import {
	description as kafkaClusterCreatePostDescription,
	execute as kafkaClusterCreatePostExecute,
} from './database/kafka/clusterCreatePost.operation';
import {
	description as kafkaClusterUpdatePutDescription,
	execute as kafkaClusterUpdatePutExecute,
} from './database/kafka/clusterUpdatePut.operation';
import {
	description as kafkaClusterDeleteDeleteDescription,
	execute as kafkaClusterDeleteDeleteExecute,
} from './database/kafka/clusterDeleteDelete.operation';
import {
	description as kafkaAclListGetDescription,
	execute as kafkaAclListGetExecute,
} from './database/kafka/aclListGet.operation';
import {
	description as kafkaAclCreatePostDescription,
	execute as kafkaAclCreatePostExecute,
} from './database/kafka/aclCreatePost.operation';
import {
	description as kafkaAclGetGetDescription,
	execute as kafkaAclGetGetExecute,
} from './database/kafka/aclGetGet.operation';
import {
	description as kafkaAclDeleteDeleteDescription,
	execute as kafkaAclDeleteDeleteExecute,
} from './database/kafka/aclDeleteDelete.operation';
import {
	description as kafkaAdvancedConfigurationGetDescription,
	execute as kafkaAdvancedConfigurationGetExecute,
} from './database/kafka/advancedConfigurationGet.operation';
import {
	description as kafkaAdvancedConfigurationUpdatePutDescription,
	execute as kafkaAdvancedConfigurationUpdatePutExecute,
} from './database/kafka/advancedConfigurationUpdatePut.operation';
import {
	description as kafkaCapabilitiesAdvancedConfigurationGetDescription,
	execute as kafkaCapabilitiesAdvancedConfigurationGetExecute,
} from './database/kafka/capabilitiesAdvancedConfigurationGet.operation';
import {
	description as kafkaCapabilitiesBackupRegionsGetDescription,
	execute as kafkaCapabilitiesBackupRegionsGetExecute,
} from './database/kafka/capabilitiesBackupRegionsGet.operation';
import {
	description as kafkaCapabilitiesIntegrationGetDescription,
	execute as kafkaCapabilitiesIntegrationGetExecute,
} from './database/kafka/capabilitiesIntegrationGet.operation';
import {
	description as kafkaCertificateListGetDescription,
	execute as kafkaCertificateListGetExecute,
} from './database/kafka/certificateListGet.operation';
import {
	description as kafkaIntegrationListGetDescription,
	execute as kafkaIntegrationListGetExecute,
} from './database/kafka/integrationListGet.operation';
import {
	description as kafkaIntegrationCreatePostDescription,
	execute as kafkaIntegrationCreatePostExecute,
} from './database/kafka/integrationCreatePost.operation';
import {
	description as kafkaIntegrationGetGetDescription,
	execute as kafkaIntegrationGetGetExecute,
} from './database/kafka/integrationGetGet.operation';
import {
	description as kafkaIntegrationDeleteDeleteDescription,
	execute as kafkaIntegrationDeleteDeleteExecute,
} from './database/kafka/integrationDeleteDelete.operation';
import {
	description as kafkaIpRestrictionListGetDescription,
	execute as kafkaIpRestrictionListGetExecute,
} from './database/kafka/ipRestrictionListGet.operation';
import {
	description as kafkaIpRestrictionCreatePostDescription,
	execute as kafkaIpRestrictionCreatePostExecute,
} from './database/kafka/ipRestrictionCreatePost.operation';
import {
	description as kafkaIpRestrictionGetGetDescription,
	execute as kafkaIpRestrictionGetGetExecute,
} from './database/kafka/ipRestrictionGetGet.operation';
import {
	description as kafkaIpRestrictionUpdatePutDescription,
	execute as kafkaIpRestrictionUpdatePutExecute,
} from './database/kafka/ipRestrictionUpdatePut.operation';
import {
	description as kafkaIpRestrictionDeleteDeleteDescription,
	execute as kafkaIpRestrictionDeleteDeleteExecute,
} from './database/kafka/ipRestrictionDeleteDelete.operation';
import {
	description as kafkaLogKindListGetDescription,
	execute as kafkaLogKindListGetExecute,
} from './database/kafka/logKindListGet.operation';
import {
	description as kafkaLogKindGetDescription,
	execute as kafkaLogKindGetExecute,
} from './database/kafka/logKindGet.operation';
import {
	description as kafkaLogSubscriptionListGetDescription,
	execute as kafkaLogSubscriptionListGetExecute,
} from './database/kafka/logSubscriptionListGet.operation';
import {
	description as kafkaLogSubscriptionCreatePostDescription,
	execute as kafkaLogSubscriptionCreatePostExecute,
} from './database/kafka/logSubscriptionCreatePost.operation';
import {
	description as kafkaLogSubscriptionGetGetDescription,
	execute as kafkaLogSubscriptionGetGetExecute,
} from './database/kafka/logSubscriptionGetGet.operation';
import {
	description as kafkaLogSubscriptionDeleteDeleteDescription,
	execute as kafkaLogSubscriptionDeleteDeleteExecute,
} from './database/kafka/logSubscriptionDeleteDelete.operation';
import {
	description as kafkaLogUrlCreatePostDescription,
	execute as kafkaLogUrlCreatePostExecute,
} from './database/kafka/logUrlCreatePost.operation';
import {
	description as kafkaLogsGetDescription,
	execute as kafkaLogsGetExecute,
} from './database/kafka/logsGet.operation';
import {
	description as kafkaMaintenanceListGetDescription,
	execute as kafkaMaintenanceListGetExecute,
} from './database/kafka/maintenanceListGet.operation';
import {
	description as kafkaMaintenanceGetDescription,
	execute as kafkaMaintenanceGetExecute,
} from './database/kafka/maintenanceGet.operation';
import {
	description as kafkaMaintenanceApplyPostDescription,
	execute as kafkaMaintenanceApplyPostExecute,
} from './database/kafka/maintenanceApplyPost.operation';
import {
	description as kafkaMetricListGetDescription,
	execute as kafkaMetricListGetExecute,
} from './database/kafka/metricListGet.operation';
import {
	description as kafkaMetricGetDescription,
	execute as kafkaMetricGetExecute,
} from './database/kafka/metricGet.operation';
import {
	description as kafkaNodeListGetDescription,
	execute as kafkaNodeListGetExecute,
} from './database/kafka/nodeListGet.operation';
import {
	description as kafkaNodeGetGetDescription,
	execute as kafkaNodeGetGetExecute,
} from './database/kafka/nodeGetGet.operation';
import {
	description as kafkaPermissionsGetDescription,
	execute as kafkaPermissionsGetExecute,
} from './database/kafka/permissionsGet.operation';
import {
	description as kafkaPrometheusGetDescription,
	execute as kafkaPrometheusGetExecute,
} from './database/kafka/prometheusGet.operation';
import {
	description as kafkaPrometheusCredentialsResetPostDescription,
	execute as kafkaPrometheusCredentialsResetPostExecute,
} from './database/kafka/prometheusCredentialsResetPost.operation';
import {
	description as kafkaSchemaRegistryAclListGetDescription,
	execute as kafkaSchemaRegistryAclListGetExecute,
} from './database/kafka/schemaRegistryAclListGet.operation';
import {
	description as kafkaSchemaRegistryAclCreatePostDescription,
	execute as kafkaSchemaRegistryAclCreatePostExecute,
} from './database/kafka/schemaRegistryAclCreatePost.operation';
import {
	description as kafkaSchemaRegistryAclGetGetDescription,
	execute as kafkaSchemaRegistryAclGetGetExecute,
} from './database/kafka/schemaRegistryAclGetGet.operation';
import {
	description as kafkaSchemaRegistryAclDeleteDeleteDescription,
	execute as kafkaSchemaRegistryAclDeleteDeleteExecute,
} from './database/kafka/schemaRegistryAclDeleteDelete.operation';
import {
	description as kafkaTopicListGetDescription,
	execute as kafkaTopicListGetExecute,
} from './database/kafka/topicListGet.operation';
import {
	description as kafkaTopicCreatePostDescription,
	execute as kafkaTopicCreatePostExecute,
} from './database/kafka/topicCreatePost.operation';
import {
	description as kafkaTopicGetGetDescription,
	execute as kafkaTopicGetGetExecute,
} from './database/kafka/topicGetGet.operation';
import {
	description as kafkaTopicUpdatePutDescription,
	execute as kafkaTopicUpdatePutExecute,
} from './database/kafka/topicUpdatePut.operation';
import {
	description as kafkaTopicDeleteDeleteDescription,
	execute as kafkaTopicDeleteDeleteExecute,
} from './database/kafka/topicDeleteDelete.operation';
import {
	description as kafkaTopicAclListGetDescription,
	execute as kafkaTopicAclListGetExecute,
} from './database/kafka/topicAclListGet.operation';
import {
	description as kafkaTopicAclCreatePostDescription,
	execute as kafkaTopicAclCreatePostExecute,
} from './database/kafka/topicAclCreatePost.operation';
import {
	description as kafkaTopicAclGetGetDescription,
	execute as kafkaTopicAclGetGetExecute,
} from './database/kafka/topicAclGetGet.operation';
import {
	description as kafkaTopicAclDeleteDeleteDescription,
	execute as kafkaTopicAclDeleteDeleteExecute,
} from './database/kafka/topicAclDeleteDelete.operation';
import {
	description as kafkaUserListGetDescription,
	execute as kafkaUserListGetExecute,
} from './database/kafka/userListGet.operation';
import {
	description as kafkaUserCreatePostDescription,
	execute as kafkaUserCreatePostExecute,
} from './database/kafka/userCreatePost.operation';
import {
	description as kafkaUserGetGetDescription,
	execute as kafkaUserGetGetExecute,
} from './database/kafka/userGetGet.operation';
import {
	description as kafkaUserDeleteDeleteDescription,
	execute as kafkaUserDeleteDeleteExecute,
} from './database/kafka/userDeleteDelete.operation';
import {
	description as kafkaUserAccessGetDescription,
	execute as kafkaUserAccessGetExecute,
} from './database/kafka/userAccessGet.operation';
import {
	description as kafkaUserCredentialsResetPostDescription,
	execute as kafkaUserCredentialsResetPostExecute,
} from './database/kafka/userCredentialsResetPost.operation';

import {
	description as kafkaConnectClusterListGetDescription,
	execute as kafkaConnectClusterListGetExecute,
} from './database/kafkaConnect/clusterListGet.operation';
import {
	description as kafkaConnectClusterGetGetDescription,
	execute as kafkaConnectClusterGetGetExecute,
} from './database/kafkaConnect/clusterGetGet.operation';
import {
	description as kafkaConnectClusterCreatePostDescription,
	execute as kafkaConnectClusterCreatePostExecute,
} from './database/kafkaConnect/clusterCreatePost.operation';
import {
	description as kafkaConnectClusterUpdatePutDescription,
	execute as kafkaConnectClusterUpdatePutExecute,
} from './database/kafkaConnect/clusterUpdatePut.operation';
import {
	description as kafkaConnectClusterDeleteDeleteDescription,
	execute as kafkaConnectClusterDeleteDeleteExecute,
} from './database/kafkaConnect/clusterDeleteDelete.operation';
import {
	description as kafkaConnectBackupListGetDescription,
	execute as kafkaConnectBackupListGetExecute,
} from './database/kafkaConnect/backupListGet.operation';
import {
	description as kafkaConnectBackupCreatePostDescription,
	execute as kafkaConnectBackupCreatePostExecute,
} from './database/kafkaConnect/backupCreatePost.operation';
import {
	description as kafkaConnectBackupGetGetDescription,
	execute as kafkaConnectBackupGetGetExecute,
} from './database/kafkaConnect/backupGetGet.operation';
import {
	description as kafkaConnectBackupDeleteDeleteDescription,
	execute as kafkaConnectBackupDeleteDeleteExecute,
} from './database/kafkaConnect/backupDeleteDelete.operation';
import {
	description as kafkaConnectUserListGetDescription,
	execute as kafkaConnectUserListGetExecute,
} from './database/kafkaConnect/userListGet.operation';
import {
	description as kafkaConnectUserCreatePostDescription,
	execute as kafkaConnectUserCreatePostExecute,
} from './database/kafkaConnect/userCreatePost.operation';
import {
	description as kafkaConnectUserGetGetDescription,
	execute as kafkaConnectUserGetGetExecute,
} from './database/kafkaConnect/userGetGet.operation';
import {
	description as kafkaConnectUserUpdatePutDescription,
	execute as kafkaConnectUserUpdatePutExecute,
} from './database/kafkaConnect/userUpdatePut.operation';
import {
	description as kafkaConnectUserDeleteDeleteDescription,
	execute as kafkaConnectUserDeleteDeleteExecute,
} from './database/kafkaConnect/userDeleteDelete.operation';
import {
	description as kafkaConnectNodeListGetDescription,
	execute as kafkaConnectNodeListGetExecute,
} from './database/kafkaConnect/nodeListGet.operation';
import {
	description as kafkaConnectNodeCreatePostDescription,
	execute as kafkaConnectNodeCreatePostExecute,
} from './database/kafkaConnect/nodeCreatePost.operation';
import {
	description as kafkaConnectNodeGetGetDescription,
	execute as kafkaConnectNodeGetGetExecute,
} from './database/kafkaConnect/nodeGetGet.operation';
import {
	description as kafkaConnectNodeUpdatePutDescription,
	execute as kafkaConnectNodeUpdatePutExecute,
} from './database/kafkaConnect/nodeUpdatePut.operation';
import {
	description as kafkaConnectNodeDeleteDeleteDescription,
	execute as kafkaConnectNodeDeleteDeleteExecute,
} from './database/kafkaConnect/nodeDeleteDelete.operation';
import {
	description as kafkaConnectIpRestrictionListGetDescription,
	execute as kafkaConnectIpRestrictionListGetExecute,
} from './database/kafkaConnect/ipRestrictionListGet.operation';
import {
	description as kafkaConnectIpRestrictionCreatePostDescription,
	execute as kafkaConnectIpRestrictionCreatePostExecute,
} from './database/kafkaConnect/ipRestrictionCreatePost.operation';
import {
	description as kafkaConnectLogSubscriptionListGetDescription,
	execute as kafkaConnectLogSubscriptionListGetExecute,
} from './database/kafkaConnect/logSubscriptionListGet.operation';
import {
	description as kafkaConnectLogSubscriptionCreatePostDescription,
	execute as kafkaConnectLogSubscriptionCreatePostExecute,
} from './database/kafkaConnect/logSubscriptionCreatePost.operation';
import {
	description as kafkaConnectLogSubscriptionGetGetDescription,
	execute as kafkaConnectLogSubscriptionGetGetExecute,
} from './database/kafkaConnect/logSubscriptionGetGet.operation';
import {
	description as kafkaConnectMaintenanceGetDescription,
	execute as kafkaConnectMaintenanceGetExecute,
} from './database/kafkaConnect/maintenanceGet.operation';
import {
	description as kafkaConnectMaintenanceUpdatePutDescription,
	execute as kafkaConnectMaintenanceUpdatePutExecute,
} from './database/kafkaConnect/maintenanceUpdatePut.operation';
import {
	description as kafkaConnectMetricGetDescription,
	execute as kafkaConnectMetricGetExecute,
} from './database/kafkaConnect/metricGet.operation';
import {
	description as kafkaConnectPrometheusGetDescription,
	execute as kafkaConnectPrometheusGetExecute,
} from './database/kafkaConnect/prometheusGet.operation';
import {
	description as kafkaConnectCertificateListGetDescription,
	execute as kafkaConnectCertificateListGetExecute,
} from './database/kafkaConnect/certificateListGet.operation';
import {
	description as kafkaConnectCertificateCreatePostDescription,
	execute as kafkaConnectCertificateCreatePostExecute,
} from './database/kafkaConnect/certificateCreatePost.operation';
import {
	description as kafkaMirrorMakerClusterListGetDescription,
	execute as kafkaMirrorMakerClusterListGetExecute,
} from './database/kafkaMirrorMaker/clusterListGet.operation';
import {
	description as kafkaMirrorMakerClusterGetGetDescription,
	execute as kafkaMirrorMakerClusterGetGetExecute,
} from './database/kafkaMirrorMaker/clusterGetGet.operation';
import {
	description as kafkaMirrorMakerClusterCreatePostDescription,
	execute as kafkaMirrorMakerClusterCreatePostExecute,
} from './database/kafkaMirrorMaker/clusterCreatePost.operation';
import {
	description as kafkaMirrorMakerClusterUpdatePutDescription,
	execute as kafkaMirrorMakerClusterUpdatePutExecute,
} from './database/kafkaMirrorMaker/clusterUpdatePut.operation';
import {
	description as kafkaMirrorMakerClusterDeleteDeleteDescription,
	execute as kafkaMirrorMakerClusterDeleteDeleteExecute,
} from './database/kafkaMirrorMaker/clusterDeleteDelete.operation';
import {
	description as kafkaMirrorMakerBackupListGetDescription,
	execute as kafkaMirrorMakerBackupListGetExecute,
} from './database/kafkaMirrorMaker/backupListGet.operation';
import {
	description as kafkaMirrorMakerBackupCreatePostDescription,
	execute as kafkaMirrorMakerBackupCreatePostExecute,
} from './database/kafkaMirrorMaker/backupCreatePost.operation';
import {
	description as kafkaMirrorMakerBackupGetGetDescription,
	execute as kafkaMirrorMakerBackupGetGetExecute,
} from './database/kafkaMirrorMaker/backupGetGet.operation';
import {
	description as kafkaMirrorMakerBackupDeleteDeleteDescription,
	execute as kafkaMirrorMakerBackupDeleteDeleteExecute,
} from './database/kafkaMirrorMaker/backupDeleteDelete.operation';
import {
	description as kafkaMirrorMakerUserListGetDescription,
	execute as kafkaMirrorMakerUserListGetExecute,
} from './database/kafkaMirrorMaker/userListGet.operation';
import {
	description as kafkaMirrorMakerUserCreatePostDescription,
	execute as kafkaMirrorMakerUserCreatePostExecute,
} from './database/kafkaMirrorMaker/userCreatePost.operation';
import {
	description as kafkaMirrorMakerUserGetGetDescription,
	execute as kafkaMirrorMakerUserGetGetExecute,
} from './database/kafkaMirrorMaker/userGetGet.operation';
import {
	description as kafkaMirrorMakerUserUpdatePutDescription,
	execute as kafkaMirrorMakerUserUpdatePutExecute,
} from './database/kafkaMirrorMaker/userUpdatePut.operation';
import {
	description as kafkaMirrorMakerUserDeleteDeleteDescription,
	execute as kafkaMirrorMakerUserDeleteDeleteExecute,
} from './database/kafkaMirrorMaker/userDeleteDelete.operation';
import {
	description as kafkaMirrorMakerNodeListGetDescription,
	execute as kafkaMirrorMakerNodeListGetExecute,
} from './database/kafkaMirrorMaker/nodeListGet.operation';
import {
	description as kafkaMirrorMakerNodeCreatePostDescription,
	execute as kafkaMirrorMakerNodeCreatePostExecute,
} from './database/kafkaMirrorMaker/nodeCreatePost.operation';
import {
	description as kafkaMirrorMakerNodeGetGetDescription,
	execute as kafkaMirrorMakerNodeGetGetExecute,
} from './database/kafkaMirrorMaker/nodeGetGet.operation';
import {
	description as kafkaMirrorMakerNodeUpdatePutDescription,
	execute as kafkaMirrorMakerNodeUpdatePutExecute,
} from './database/kafkaMirrorMaker/nodeUpdatePut.operation';
import {
	description as kafkaMirrorMakerNodeDeleteDeleteDescription,
	execute as kafkaMirrorMakerNodeDeleteDeleteExecute,
} from './database/kafkaMirrorMaker/nodeDeleteDelete.operation';
import {
	description as kafkaMirrorMakerIpRestrictionListGetDescription,
	execute as kafkaMirrorMakerIpRestrictionListGetExecute,
} from './database/kafkaMirrorMaker/ipRestrictionListGet.operation';
import {
	description as kafkaMirrorMakerIpRestrictionCreatePostDescription,
	execute as kafkaMirrorMakerIpRestrictionCreatePostExecute,
} from './database/kafkaMirrorMaker/ipRestrictionCreatePost.operation';
import {
	description as kafkaMirrorMakerLogSubscriptionListGetDescription,
	execute as kafkaMirrorMakerLogSubscriptionListGetExecute,
} from './database/kafkaMirrorMaker/logSubscriptionListGet.operation';
import {
	description as kafkaMirrorMakerLogSubscriptionCreatePostDescription,
	execute as kafkaMirrorMakerLogSubscriptionCreatePostExecute,
} from './database/kafkaMirrorMaker/logSubscriptionCreatePost.operation';
import {
	description as kafkaMirrorMakerLogSubscriptionGetGetDescription,
	execute as kafkaMirrorMakerLogSubscriptionGetGetExecute,
} from './database/kafkaMirrorMaker/logSubscriptionGetGet.operation';
import {
	description as kafkaMirrorMakerMaintenanceGetDescription,
	execute as kafkaMirrorMakerMaintenanceGetExecute,
} from './database/kafkaMirrorMaker/maintenanceGet.operation';
import {
	description as kafkaMirrorMakerMaintenanceUpdatePutDescription,
	execute as kafkaMirrorMakerMaintenanceUpdatePutExecute,
} from './database/kafkaMirrorMaker/maintenanceUpdatePut.operation';
import {
	description as kafkaMirrorMakerMetricGetDescription,
	execute as kafkaMirrorMakerMetricGetExecute,
} from './database/kafkaMirrorMaker/metricGet.operation';
import {
	description as kafkaMirrorMakerPrometheusGetDescription,
	execute as kafkaMirrorMakerPrometheusGetExecute,
} from './database/kafkaMirrorMaker/prometheusGet.operation';
import {
	description as kafkaMirrorMakerCertificateListGetDescription,
	execute as kafkaMirrorMakerCertificateListGetExecute,
} from './database/kafkaMirrorMaker/certificateListGet.operation';
import {
	description as kafkaMirrorMakerCertificateCreatePostDescription,
	execute as kafkaMirrorMakerCertificateCreatePostExecute,
} from './database/kafkaMirrorMaker/certificateCreatePost.operation';
import {
	description as m3aggregatorClusterListGetDescription,
	execute as m3aggregatorClusterListGetExecute,
} from './database/m3aggregator/clusterListGet.operation';
import {
	description as m3aggregatorClusterGetGetDescription,
	execute as m3aggregatorClusterGetGetExecute,
} from './database/m3aggregator/clusterGetGet.operation';
import {
	description as m3aggregatorClusterCreatePostDescription,
	execute as m3aggregatorClusterCreatePostExecute,
} from './database/m3aggregator/clusterCreatePost.operation';
import {
	description as m3aggregatorClusterUpdatePutDescription,
	execute as m3aggregatorClusterUpdatePutExecute,
} from './database/m3aggregator/clusterUpdatePut.operation';
import {
	description as m3aggregatorClusterDeleteDeleteDescription,
	execute as m3aggregatorClusterDeleteDeleteExecute,
} from './database/m3aggregator/clusterDeleteDelete.operation';
import {
	description as m3aggregatorBackupListGetDescription,
	execute as m3aggregatorBackupListGetExecute,
} from './database/m3aggregator/backupListGet.operation';
import {
	description as m3aggregatorBackupCreatePostDescription,
	execute as m3aggregatorBackupCreatePostExecute,
} from './database/m3aggregator/backupCreatePost.operation';
import {
	description as m3aggregatorBackupGetGetDescription,
	execute as m3aggregatorBackupGetGetExecute,
} from './database/m3aggregator/backupGetGet.operation';
import {
	description as m3aggregatorBackupDeleteDeleteDescription,
	execute as m3aggregatorBackupDeleteDeleteExecute,
} from './database/m3aggregator/backupDeleteDelete.operation';
import {
	description as m3aggregatorUserListGetDescription,
	execute as m3aggregatorUserListGetExecute,
} from './database/m3aggregator/userListGet.operation';
import {
	description as m3aggregatorUserCreatePostDescription,
	execute as m3aggregatorUserCreatePostExecute,
} from './database/m3aggregator/userCreatePost.operation';
import {
	description as m3aggregatorUserGetGetDescription,
	execute as m3aggregatorUserGetGetExecute,
} from './database/m3aggregator/userGetGet.operation';
import {
	description as m3aggregatorUserUpdatePutDescription,
	execute as m3aggregatorUserUpdatePutExecute,
} from './database/m3aggregator/userUpdatePut.operation';
import {
	description as m3aggregatorUserDeleteDeleteDescription,
	execute as m3aggregatorUserDeleteDeleteExecute,
} from './database/m3aggregator/userDeleteDelete.operation';
import {
	description as m3aggregatorNodeListGetDescription,
	execute as m3aggregatorNodeListGetExecute,
} from './database/m3aggregator/nodeListGet.operation';
import {
	description as m3aggregatorNodeCreatePostDescription,
	execute as m3aggregatorNodeCreatePostExecute,
} from './database/m3aggregator/nodeCreatePost.operation';
import {
	description as m3aggregatorNodeGetGetDescription,
	execute as m3aggregatorNodeGetGetExecute,
} from './database/m3aggregator/nodeGetGet.operation';
import {
	description as m3aggregatorNodeUpdatePutDescription,
	execute as m3aggregatorNodeUpdatePutExecute,
} from './database/m3aggregator/nodeUpdatePut.operation';
import {
	description as m3aggregatorNodeDeleteDeleteDescription,
	execute as m3aggregatorNodeDeleteDeleteExecute,
} from './database/m3aggregator/nodeDeleteDelete.operation';
import {
	description as m3aggregatorIpRestrictionListGetDescription,
	execute as m3aggregatorIpRestrictionListGetExecute,
} from './database/m3aggregator/ipRestrictionListGet.operation';
import {
	description as m3aggregatorIpRestrictionCreatePostDescription,
	execute as m3aggregatorIpRestrictionCreatePostExecute,
} from './database/m3aggregator/ipRestrictionCreatePost.operation';
import {
	description as m3aggregatorLogSubscriptionListGetDescription,
	execute as m3aggregatorLogSubscriptionListGetExecute,
} from './database/m3aggregator/logSubscriptionListGet.operation';
import {
	description as m3aggregatorLogSubscriptionCreatePostDescription,
	execute as m3aggregatorLogSubscriptionCreatePostExecute,
} from './database/m3aggregator/logSubscriptionCreatePost.operation';
import {
	description as m3aggregatorLogSubscriptionGetGetDescription,
	execute as m3aggregatorLogSubscriptionGetGetExecute,
} from './database/m3aggregator/logSubscriptionGetGet.operation';
import {
	description as m3aggregatorMaintenanceGetDescription,
	execute as m3aggregatorMaintenanceGetExecute,
} from './database/m3aggregator/maintenanceGet.operation';
import {
	description as m3aggregatorMaintenanceUpdatePutDescription,
	execute as m3aggregatorMaintenanceUpdatePutExecute,
} from './database/m3aggregator/maintenanceUpdatePut.operation';
import {
	description as m3aggregatorMetricGetDescription,
	execute as m3aggregatorMetricGetExecute,
} from './database/m3aggregator/metricGet.operation';
import {
	description as m3aggregatorPrometheusGetDescription,
	execute as m3aggregatorPrometheusGetExecute,
} from './database/m3aggregator/prometheusGet.operation';
import {
	description as m3aggregatorCertificateListGetDescription,
	execute as m3aggregatorCertificateListGetExecute,
} from './database/m3aggregator/certificateListGet.operation';
import {
	description as m3aggregatorCertificateCreatePostDescription,
	execute as m3aggregatorCertificateCreatePostExecute,
} from './database/m3aggregator/certificateCreatePost.operation';
import {
	description as m3dbClusterListGetDescription,
	execute as m3dbClusterListGetExecute,
} from './database/m3db/clusterListGet.operation';
import {
	description as m3dbClusterGetGetDescription,
	execute as m3dbClusterGetGetExecute,
} from './database/m3db/clusterGetGet.operation';
import {
	description as m3dbClusterCreatePostDescription,
	execute as m3dbClusterCreatePostExecute,
} from './database/m3db/clusterCreatePost.operation';
import {
	description as m3dbClusterUpdatePutDescription,
	execute as m3dbClusterUpdatePutExecute,
} from './database/m3db/clusterUpdatePut.operation';
import {
	description as m3dbClusterDeleteDeleteDescription,
	execute as m3dbClusterDeleteDeleteExecute,
} from './database/m3db/clusterDeleteDelete.operation';
import {
	description as m3dbBackupListGetDescription,
	execute as m3dbBackupListGetExecute,
} from './database/m3db/backupListGet.operation';
import {
	description as m3dbBackupCreatePostDescription,
	execute as m3dbBackupCreatePostExecute,
} from './database/m3db/backupCreatePost.operation';
import {
	description as m3dbBackupGetGetDescription,
	execute as m3dbBackupGetGetExecute,
} from './database/m3db/backupGetGet.operation';
import {
	description as m3dbBackupDeleteDeleteDescription,
	execute as m3dbBackupDeleteDeleteExecute,
} from './database/m3db/backupDeleteDelete.operation';
import {
	description as m3dbUserListGetDescription,
	execute as m3dbUserListGetExecute,
} from './database/m3db/userListGet.operation';
import {
	description as m3dbUserCreatePostDescription,
	execute as m3dbUserCreatePostExecute,
} from './database/m3db/userCreatePost.operation';
import {
	description as m3dbUserGetGetDescription,
	execute as m3dbUserGetGetExecute,
} from './database/m3db/userGetGet.operation';
import {
	description as m3dbUserUpdatePutDescription,
	execute as m3dbUserUpdatePutExecute,
} from './database/m3db/userUpdatePut.operation';
import {
	description as m3dbUserDeleteDeleteDescription,
	execute as m3dbUserDeleteDeleteExecute,
} from './database/m3db/userDeleteDelete.operation';
import {
	description as m3dbNodeListGetDescription,
	execute as m3dbNodeListGetExecute,
} from './database/m3db/nodeListGet.operation';
import {
	description as m3dbNodeCreatePostDescription,
	execute as m3dbNodeCreatePostExecute,
} from './database/m3db/nodeCreatePost.operation';
import {
	description as m3dbNodeGetGetDescription,
	execute as m3dbNodeGetGetExecute,
} from './database/m3db/nodeGetGet.operation';
import {
	description as m3dbNodeUpdatePutDescription,
	execute as m3dbNodeUpdatePutExecute,
} from './database/m3db/nodeUpdatePut.operation';
import {
	description as m3dbNodeDeleteDeleteDescription,
	execute as m3dbNodeDeleteDeleteExecute,
} from './database/m3db/nodeDeleteDelete.operation';
import {
	description as m3dbIpRestrictionListGetDescription,
	execute as m3dbIpRestrictionListGetExecute,
} from './database/m3db/ipRestrictionListGet.operation';
import {
	description as m3dbIpRestrictionCreatePostDescription,
	execute as m3dbIpRestrictionCreatePostExecute,
} from './database/m3db/ipRestrictionCreatePost.operation';
import {
	description as m3dbLogSubscriptionListGetDescription,
	execute as m3dbLogSubscriptionListGetExecute,
} from './database/m3db/logSubscriptionListGet.operation';
import {
	description as m3dbLogSubscriptionCreatePostDescription,
	execute as m3dbLogSubscriptionCreatePostExecute,
} from './database/m3db/logSubscriptionCreatePost.operation';
import {
	description as m3dbLogSubscriptionGetGetDescription,
	execute as m3dbLogSubscriptionGetGetExecute,
} from './database/m3db/logSubscriptionGetGet.operation';
import {
	description as m3dbMaintenanceGetDescription,
	execute as m3dbMaintenanceGetExecute,
} from './database/m3db/maintenanceGet.operation';
import {
	description as m3dbMaintenanceUpdatePutDescription,
	execute as m3dbMaintenanceUpdatePutExecute,
} from './database/m3db/maintenanceUpdatePut.operation';
import {
	description as m3dbMetricGetDescription,
	execute as m3dbMetricGetExecute,
} from './database/m3db/metricGet.operation';
import {
	description as m3dbPrometheusGetDescription,
	execute as m3dbPrometheusGetExecute,
} from './database/m3db/prometheusGet.operation';
import {
	description as m3dbCertificateListGetDescription,
	execute as m3dbCertificateListGetExecute,
} from './database/m3db/certificateListGet.operation';
import {
	description as m3dbCertificateCreatePostDescription,
	execute as m3dbCertificateCreatePostExecute,
} from './database/m3db/certificateCreatePost.operation';
import {
	description as mongodbClusterListGetDescription,
	execute as mongodbClusterListGetExecute,
} from './database/mongodb/clusterListGet.operation';
import {
	description as mongodbClusterGetGetDescription,
	execute as mongodbClusterGetGetExecute,
} from './database/mongodb/clusterGetGet.operation';
import {
	description as mongodbClusterCreatePostDescription,
	execute as mongodbClusterCreatePostExecute,
} from './database/mongodb/clusterCreatePost.operation';
import {
	description as mongodbClusterUpdatePutDescription,
	execute as mongodbClusterUpdatePutExecute,
} from './database/mongodb/clusterUpdatePut.operation';
import {
	description as mongodbClusterDeleteDeleteDescription,
	execute as mongodbClusterDeleteDeleteExecute,
} from './database/mongodb/clusterDeleteDelete.operation';
import {
	description as mongodbBackupListGetDescription,
	execute as mongodbBackupListGetExecute,
} from './database/mongodb/backupListGet.operation';
import {
	description as mongodbBackupCreatePostDescription,
	execute as mongodbBackupCreatePostExecute,
} from './database/mongodb/backupCreatePost.operation';
import {
	description as mongodbBackupGetGetDescription,
	execute as mongodbBackupGetGetExecute,
} from './database/mongodb/backupGetGet.operation';
import {
	description as mongodbBackupDeleteDeleteDescription,
	execute as mongodbBackupDeleteDeleteExecute,
} from './database/mongodb/backupDeleteDelete.operation';
import {
	description as mongodbUserListGetDescription,
	execute as mongodbUserListGetExecute,
} from './database/mongodb/userListGet.operation';
import {
	description as mongodbUserCreatePostDescription,
	execute as mongodbUserCreatePostExecute,
} from './database/mongodb/userCreatePost.operation';
import {
	description as mongodbUserGetGetDescription,
	execute as mongodbUserGetGetExecute,
} from './database/mongodb/userGetGet.operation';
import {
	description as mongodbUserUpdatePutDescription,
	execute as mongodbUserUpdatePutExecute,
} from './database/mongodb/userUpdatePut.operation';
import {
	description as mongodbUserDeleteDeleteDescription,
	execute as mongodbUserDeleteDeleteExecute,
} from './database/mongodb/userDeleteDelete.operation';
import {
	description as mongodbNodeListGetDescription,
	execute as mongodbNodeListGetExecute,
} from './database/mongodb/nodeListGet.operation';
import {
	description as mongodbNodeCreatePostDescription,
	execute as mongodbNodeCreatePostExecute,
} from './database/mongodb/nodeCreatePost.operation';
import {
	description as mongodbNodeGetGetDescription,
	execute as mongodbNodeGetGetExecute,
} from './database/mongodb/nodeGetGet.operation';
import {
	description as mongodbNodeUpdatePutDescription,
	execute as mongodbNodeUpdatePutExecute,
} from './database/mongodb/nodeUpdatePut.operation';
import {
	description as mongodbNodeDeleteDeleteDescription,
	execute as mongodbNodeDeleteDeleteExecute,
} from './database/mongodb/nodeDeleteDelete.operation';
import {
	description as mongodbIpRestrictionListGetDescription,
	execute as mongodbIpRestrictionListGetExecute,
} from './database/mongodb/ipRestrictionListGet.operation';
import {
	description as mongodbIpRestrictionCreatePostDescription,
	execute as mongodbIpRestrictionCreatePostExecute,
} from './database/mongodb/ipRestrictionCreatePost.operation';
import {
	description as mongodbLogSubscriptionListGetDescription,
	execute as mongodbLogSubscriptionListGetExecute,
} from './database/mongodb/logSubscriptionListGet.operation';
import {
	description as mongodbLogSubscriptionCreatePostDescription,
	execute as mongodbLogSubscriptionCreatePostExecute,
} from './database/mongodb/logSubscriptionCreatePost.operation';
import {
	description as mongodbLogSubscriptionGetGetDescription,
	execute as mongodbLogSubscriptionGetGetExecute,
} from './database/mongodb/logSubscriptionGetGet.operation';
import {
	description as mongodbMaintenanceGetDescription,
	execute as mongodbMaintenanceGetExecute,
} from './database/mongodb/maintenanceGet.operation';
import {
	description as mongodbMaintenanceUpdatePutDescription,
	execute as mongodbMaintenanceUpdatePutExecute,
} from './database/mongodb/maintenanceUpdatePut.operation';
import {
	description as mongodbMetricGetDescription,
	execute as mongodbMetricGetExecute,
} from './database/mongodb/metricGet.operation';
import {
	description as mongodbPrometheusGetDescription,
	execute as mongodbPrometheusGetExecute,
} from './database/mongodb/prometheusGet.operation';
import {
	description as mongodbCertificateListGetDescription,
	execute as mongodbCertificateListGetExecute,
} from './database/mongodb/certificateListGet.operation';
import {
	description as mongodbCertificateCreatePostDescription,
	execute as mongodbCertificateCreatePostExecute,
} from './database/mongodb/certificateCreatePost.operation';
import {
	description as mongodbIntegrationListGetDescription,
	execute as mongodbIntegrationListGetExecute,
} from './database/mongodb/integrationListGet.operation';
import {
	description as mongodbIntegrationCreatePostDescription,
	execute as mongodbIntegrationCreatePostExecute,
} from './database/mongodb/integrationCreatePost.operation';
import {
	description as mysqlClusterListGetDescription,
	execute as mysqlClusterListGetExecute,
} from './database/mysql/clusterListGet.operation';
import {
	description as mysqlClusterGetGetDescription,
	execute as mysqlClusterGetGetExecute,
} from './database/mysql/clusterGetGet.operation';
import {
	description as mysqlClusterCreatePostDescription,
	execute as mysqlClusterCreatePostExecute,
} from './database/mysql/clusterCreatePost.operation';
import {
	description as mysqlClusterUpdatePutDescription,
	execute as mysqlClusterUpdatePutExecute,
} from './database/mysql/clusterUpdatePut.operation';
import {
	description as mysqlClusterDeleteDeleteDescription,
	execute as mysqlClusterDeleteDeleteExecute,
} from './database/mysql/clusterDeleteDelete.operation';
import {
	description as mysqlBackupListGetDescription,
	execute as mysqlBackupListGetExecute,
} from './database/mysql/backupListGet.operation';
import {
	description as mysqlBackupCreatePostDescription,
	execute as mysqlBackupCreatePostExecute,
} from './database/mysql/backupCreatePost.operation';
import {
	description as mysqlBackupGetGetDescription,
	execute as mysqlBackupGetGetExecute,
} from './database/mysql/backupGetGet.operation';
import {
	description as mysqlBackupDeleteDeleteDescription,
	execute as mysqlBackupDeleteDeleteExecute,
} from './database/mysql/backupDeleteDelete.operation';
import {
	description as mysqlUserListGetDescription,
	execute as mysqlUserListGetExecute,
} from './database/mysql/userListGet.operation';
import {
	description as mysqlUserCreatePostDescription,
	execute as mysqlUserCreatePostExecute,
} from './database/mysql/userCreatePost.operation';
import {
	description as mysqlUserGetGetDescription,
	execute as mysqlUserGetGetExecute,
} from './database/mysql/userGetGet.operation';
import {
	description as mysqlUserUpdatePutDescription,
	execute as mysqlUserUpdatePutExecute,
} from './database/mysql/userUpdatePut.operation';
import {
	description as mysqlUserDeleteDeleteDescription,
	execute as mysqlUserDeleteDeleteExecute,
} from './database/mysql/userDeleteDelete.operation';
import {
	description as mysqlNodeListGetDescription,
	execute as mysqlNodeListGetExecute,
} from './database/mysql/nodeListGet.operation';
import {
	description as mysqlNodeCreatePostDescription,
	execute as mysqlNodeCreatePostExecute,
} from './database/mysql/nodeCreatePost.operation';
import {
	description as mysqlNodeGetGetDescription,
	execute as mysqlNodeGetGetExecute,
} from './database/mysql/nodeGetGet.operation';
import {
	description as mysqlNodeUpdatePutDescription,
	execute as mysqlNodeUpdatePutExecute,
} from './database/mysql/nodeUpdatePut.operation';
import {
	description as mysqlNodeDeleteDeleteDescription,
	execute as mysqlNodeDeleteDeleteExecute,
} from './database/mysql/nodeDeleteDelete.operation';
import {
	description as mysqlIpRestrictionListGetDescription,
	execute as mysqlIpRestrictionListGetExecute,
} from './database/mysql/ipRestrictionListGet.operation';
import {
	description as mysqlIpRestrictionCreatePostDescription,
	execute as mysqlIpRestrictionCreatePostExecute,
} from './database/mysql/ipRestrictionCreatePost.operation';
import {
	description as mysqlLogSubscriptionListGetDescription,
	execute as mysqlLogSubscriptionListGetExecute,
} from './database/mysql/logSubscriptionListGet.operation';
import {
	description as mysqlLogSubscriptionCreatePostDescription,
	execute as mysqlLogSubscriptionCreatePostExecute,
} from './database/mysql/logSubscriptionCreatePost.operation';
import {
	description as mysqlLogSubscriptionGetGetDescription,
	execute as mysqlLogSubscriptionGetGetExecute,
} from './database/mysql/logSubscriptionGetGet.operation';
import {
	description as mysqlMaintenanceGetDescription,
	execute as mysqlMaintenanceGetExecute,
} from './database/mysql/maintenanceGet.operation';
import {
	description as mysqlMaintenanceUpdatePutDescription,
	execute as mysqlMaintenanceUpdatePutExecute,
} from './database/mysql/maintenanceUpdatePut.operation';
import {
	description as mysqlMetricGetDescription,
	execute as mysqlMetricGetExecute,
} from './database/mysql/metricGet.operation';
import {
	description as mysqlPrometheusGetDescription,
	execute as mysqlPrometheusGetExecute,
} from './database/mysql/prometheusGet.operation';
import {
	description as mysqlCertificateListGetDescription,
	execute as mysqlCertificateListGetExecute,
} from './database/mysql/certificateListGet.operation';
import {
	description as mysqlCertificateCreatePostDescription,
	execute as mysqlCertificateCreatePostExecute,
} from './database/mysql/certificateCreatePost.operation';
import {
	description as mysqlIntegrationListGetDescription,
	execute as mysqlIntegrationListGetExecute,
} from './database/mysql/integrationListGet.operation';
import {
	description as mysqlIntegrationCreatePostDescription,
	execute as mysqlIntegrationCreatePostExecute,
} from './database/mysql/integrationCreatePost.operation';
import {
	description as opensearchAdvancedConfigurationListGetDescription,
	execute as opensearchAdvancedConfigurationListGetExecute,
} from './database/opensearch/AdvancedConfigurationListGet.operation';
import {
	description as opensearchAdvancedConfigurationUpdatePutDescription,
	execute as opensearchAdvancedConfigurationUpdatePutExecute,
} from './database/opensearch/AdvancedConfigurationUpdatePut.operation';
import {
	description as opensearchBackupGetGetDescription,
	execute as opensearchBackupGetGetExecute,
} from './database/opensearch/BackupGetGet.operation';
import {
	description as opensearchBackupListGetDescription,
	execute as opensearchBackupListGetExecute,
} from './database/opensearch/BackupListGet.operation';
import {
	description as opensearchCapabilitiesAdvancedConfigurationListGetDescription,
	execute as opensearchCapabilitiesAdvancedConfigurationListGetExecute,
} from './database/opensearch/CapabilitiesAdvancedConfigurationListGet.operation';
import {
	description as opensearchCapabilitiesBackupRegionsListGetDescription,
	execute as opensearchCapabilitiesBackupRegionsListGetExecute,
} from './database/opensearch/CapabilitiesBackupRegionsListGet.operation';
import {
	description as opensearchCapabilitiesIntegrationListGetDescription,
	execute as opensearchCapabilitiesIntegrationListGetExecute,
} from './database/opensearch/CapabilitiesIntegrationListGet.operation';
import {
	description as opensearchClusterCreatePostDescription,
	execute as opensearchClusterCreatePostExecute,
} from './database/opensearch/ClusterCreatePost.operation';
import {
	description as opensearchClusterDeleteDeleteDescription,
	execute as opensearchClusterDeleteDeleteExecute,
} from './database/opensearch/ClusterDeleteDelete.operation';
import {
	description as opensearchClusterGetGetDescription,
	execute as opensearchClusterGetGetExecute,
} from './database/opensearch/ClusterGetGet.operation';
import {
	description as opensearchClusterListGetDescription,
	execute as opensearchClusterListGetExecute,
} from './database/opensearch/ClusterListGet.operation';
import {
	description as opensearchClusterUpdatePutDescription,
	execute as opensearchClusterUpdatePutExecute,
} from './database/opensearch/ClusterUpdatePut.operation';
import {
	description as opensearchIndexDeleteDeleteDescription,
	execute as opensearchIndexDeleteDeleteExecute,
} from './database/opensearch/IndexDeleteDelete.operation';
import {
	description as opensearchIndexGetGetDescription,
	execute as opensearchIndexGetGetExecute,
} from './database/opensearch/IndexGetGet.operation';
import {
	description as opensearchIndexListGetDescription,
	execute as opensearchIndexListGetExecute,
} from './database/opensearch/IndexListGet.operation';
import {
	description as opensearchIntegrationCreatePostDescription,
	execute as opensearchIntegrationCreatePostExecute,
} from './database/opensearch/IntegrationCreatePost.operation';
import {
	description as opensearchIntegrationDeleteDeleteDescription,
	execute as opensearchIntegrationDeleteDeleteExecute,
} from './database/opensearch/IntegrationDeleteDelete.operation';
import {
	description as opensearchIntegrationGetGetDescription,
	execute as opensearchIntegrationGetGetExecute,
} from './database/opensearch/IntegrationGetGet.operation';
import {
	description as opensearchIntegrationListGetDescription,
	execute as opensearchIntegrationListGetExecute,
} from './database/opensearch/IntegrationListGet.operation';
import {
	description as opensearchIpRestrictionCreatePostDescription,
	execute as opensearchIpRestrictionCreatePostExecute,
} from './database/opensearch/IpRestrictionCreatePost.operation';
import {
	description as opensearchIpRestrictionDeleteDeleteDescription,
	execute as opensearchIpRestrictionDeleteDeleteExecute,
} from './database/opensearch/IpRestrictionDeleteDelete.operation';
import {
	description as opensearchIpRestrictionGetGetDescription,
	execute as opensearchIpRestrictionGetGetExecute,
} from './database/opensearch/IpRestrictionGetGet.operation';
import {
	description as opensearchIpRestrictionListGetDescription,
	execute as opensearchIpRestrictionListGetExecute,
} from './database/opensearch/IpRestrictionListGet.operation';
import {
	description as opensearchIpRestrictionUpdatePutDescription,
	execute as opensearchIpRestrictionUpdatePutExecute,
} from './database/opensearch/IpRestrictionUpdatePut.operation';
import {
	description as opensearchLogKindGetDescription,
	execute as opensearchLogKindGetExecute,
} from './database/opensearch/LogKindGet.operation';
import {
	description as opensearchLogKindListGetDescription,
	execute as opensearchLogKindListGetExecute,
} from './database/opensearch/LogKindListGet.operation';
import {
	description as opensearchLogSubscriptionCreatePostDescription,
	execute as opensearchLogSubscriptionCreatePostExecute,
} from './database/opensearch/LogSubscriptionCreatePost.operation';
import {
	description as opensearchLogSubscriptionDeleteDeleteDescription,
	execute as opensearchLogSubscriptionDeleteDeleteExecute,
} from './database/opensearch/LogSubscriptionDeleteDelete.operation';
import {
	description as opensearchLogSubscriptionGetDescription,
	execute as opensearchLogSubscriptionGetExecute,
} from './database/opensearch/LogSubscriptionGet.operation';
import {
	description as opensearchLogSubscriptionListGetDescription,
	execute as opensearchLogSubscriptionListGetExecute,
} from './database/opensearch/LogSubscriptionListGet.operation';
import {
	description as opensearchLogUrlCreatePostDescription,
	execute as opensearchLogUrlCreatePostExecute,
} from './database/opensearch/LogUrlCreatePost.operation';
import {
	description as opensearchLogsListGetDescription,
	execute as opensearchLogsListGetExecute,
} from './database/opensearch/LogsListGet.operation';
import {
	description as opensearchMaintenanceApplyPostDescription,
	execute as opensearchMaintenanceApplyPostExecute,
} from './database/opensearch/MaintenanceApplyPost.operation';
import {
	description as opensearchMaintenanceGetGetDescription,
	execute as opensearchMaintenanceGetGetExecute,
} from './database/opensearch/MaintenanceGetGet.operation';
import {
	description as opensearchMaintenanceListGetDescription,
	execute as opensearchMaintenanceListGetExecute,
} from './database/opensearch/MaintenanceListGet.operation';
import {
	description as opensearchMetricGetGetDescription,
	execute as opensearchMetricGetGetExecute,
} from './database/opensearch/MetricGetGet.operation';
import {
	description as opensearchMetricListGetDescription,
	execute as opensearchMetricListGetExecute,
} from './database/opensearch/MetricListGet.operation';
import {
	description as opensearchNodeGetGetDescription,
	execute as opensearchNodeGetGetExecute,
} from './database/opensearch/NodeGetGet.operation';
import {
	description as opensearchNodeListGetDescription,
	execute as opensearchNodeListGetExecute,
} from './database/opensearch/NodeListGet.operation';
import {
	description as opensearchPatternCreatePostDescription,
	execute as opensearchPatternCreatePostExecute,
} from './database/opensearch/PatternCreatePost.operation';
import {
	description as opensearchPatternDeleteDeleteDescription,
	execute as opensearchPatternDeleteDeleteExecute,
} from './database/opensearch/PatternDeleteDelete.operation';
import {
	description as opensearchPatternGetGetDescription,
	execute as opensearchPatternGetGetExecute,
} from './database/opensearch/PatternGetGet.operation';
import {
	description as opensearchPatternListGetDescription,
	execute as opensearchPatternListGetExecute,
} from './database/opensearch/PatternListGet.operation';
import {
	description as opensearchPermissionsListGetDescription,
	execute as opensearchPermissionsListGetExecute,
} from './database/opensearch/PermissionsListGet.operation';
import {
	description as opensearchPrometheusCredentialsResetPostDescription,
	execute as opensearchPrometheusCredentialsResetPostExecute,
} from './database/opensearch/PrometheusCredentialsResetPost.operation';
import {
	description as opensearchPrometheusListGetDescription,
	execute as opensearchPrometheusListGetExecute,
} from './database/opensearch/PrometheusListGet.operation';
import {
	description as opensearchUserCreatePostDescription,
	execute as opensearchUserCreatePostExecute,
} from './database/opensearch/UserCreatePost.operation';
import {
	description as opensearchUserCredentialsResetPostDescription,
	execute as opensearchUserCredentialsResetPostExecute,
} from './database/opensearch/UserCredentialsResetPost.operation';
import {
	description as opensearchUserDeleteDeleteDescription,
	execute as opensearchUserDeleteDeleteExecute,
} from './database/opensearch/UserDeleteDelete.operation';
import {
	description as opensearchUserGetGetDescription,
	execute as opensearchUserGetGetExecute,
} from './database/opensearch/UserGetGet.operation';
import {
	description as opensearchUserListGetDescription,
	execute as opensearchUserListGetExecute,
} from './database/opensearch/UserListGet.operation';
import {
	description as opensearchUserUpdatePutDescription,
	execute as opensearchUserUpdatePutExecute,
} from './database/opensearch/UserUpdatePut.operation';
import {
	description as postgresqlClusterListGetDescription,
	execute as postgresqlClusterListGetExecute,
} from './database/postgresql/clusterListGet.operation';
import {
	description as postgresqlClusterGetGetDescription,
	execute as postgresqlClusterGetGetExecute,
} from './database/postgresql/clusterGetGet.operation';
import {
	description as postgresqlClusterCreatePostDescription,
	execute as postgresqlClusterCreatePostExecute,
} from './database/postgresql/clusterCreatePost.operation';
import {
	description as postgresqlClusterUpdatePutDescription,
	execute as postgresqlClusterUpdatePutExecute,
} from './database/postgresql/clusterUpdatePut.operation';
import {
	description as postgresqlClusterDeleteDeleteDescription,
	execute as postgresqlClusterDeleteDeleteExecute,
} from './database/postgresql/clusterDeleteDelete.operation';
import {
	description as postgresqlBackupListGetDescription,
	execute as postgresqlBackupListGetExecute,
} from './database/postgresql/backupListGet.operation';
import {
	description as postgresqlBackupGetGetDescription,
	execute as postgresqlBackupGetGetExecute,
} from './database/postgresql/backupGetGet.operation';
import {
	description as postgresqlUserListGetDescription,
	execute as postgresqlUserListGetExecute,
} from './database/postgresql/userListGet.operation';
import {
	description as postgresqlUserCreatePostDescription,
	execute as postgresqlUserCreatePostExecute,
} from './database/postgresql/userCreatePost.operation';
import {
	description as postgresqlUserGetGetDescription,
	execute as postgresqlUserGetGetExecute,
} from './database/postgresql/userGetGet.operation';
import {
	description as postgresqlUserUpdatePutDescription,
	execute as postgresqlUserUpdatePutExecute,
} from './database/postgresql/userUpdatePut.operation';
import {
	description as postgresqlUserDeleteDeleteDescription,
	execute as postgresqlUserDeleteDeleteExecute,
} from './database/postgresql/userDeleteDelete.operation';
import {
	description as postgresqlNodeListGetDescription,
	execute as postgresqlNodeListGetExecute,
} from './database/postgresql/nodeListGet.operation';
import {
	description as postgresqlNodeGetGetDescription,
	execute as postgresqlNodeGetGetExecute,
} from './database/postgresql/nodeGetGet.operation';
import {
	description as postgresqlIpRestrictionListGetDescription,
	execute as postgresqlIpRestrictionListGetExecute,
} from './database/postgresql/ipRestrictionListGet.operation';
import {
	description as postgresqlIpRestrictionCreatePostDescription,
	execute as postgresqlIpRestrictionCreatePostExecute,
} from './database/postgresql/ipRestrictionCreatePost.operation';
import {
	description as postgresqlLogSubscriptionListGetDescription,
	execute as postgresqlLogSubscriptionListGetExecute,
} from './database/postgresql/logSubscriptionListGet.operation';
import {
	description as postgresqlLogSubscriptionCreatePostDescription,
	execute as postgresqlLogSubscriptionCreatePostExecute,
} from './database/postgresql/logSubscriptionCreatePost.operation';
import {
	description as postgresqlLogSubscriptionGetGetDescription,
	execute as postgresqlLogSubscriptionGetGetExecute,
} from './database/postgresql/logSubscriptionGetGet.operation';
import {
	description as postgresqlMaintenanceGetDescription,
	execute as postgresqlMaintenanceGetExecute,
} from './database/postgresql/maintenanceGet.operation';
import {
	description as postgresqlMetricGetDescription,
	execute as postgresqlMetricGetExecute,
} from './database/postgresql/metricGet.operation';
import {
	description as postgresqlPrometheusGetDescription,
	execute as postgresqlPrometheusGetExecute,
} from './database/postgresql/prometheusGet.operation';
import {
	description as postgresqlCertificateListGetDescription,
	execute as postgresqlCertificateListGetExecute,
} from './database/postgresql/certificateListGet.operation';
import {
	description as postgresqlIntegrationListGetDescription,
	execute as postgresqlIntegrationListGetExecute,
} from './database/postgresql/integrationListGet.operation';
import {
	description as postgresqlIntegrationCreatePostDescription,
	execute as postgresqlIntegrationCreatePostExecute,
} from './database/postgresql/integrationCreatePost.operation';
import {
	description as kubeAuditLogsPostDescription,
	execute as kubeAuditLogsPostExecute,
} from './kube/kubeAuditLogsPost.operation';
import {
	description as kubeCustomizationGetDescription,
	execute as kubeCustomizationGetExecute,
} from './kube/kubeCustomizationGet.operation';
import {
	description as kubeCustomizationUpdatePutDescription,
	execute as kubeCustomizationUpdatePutExecute,
} from './kube/kubeCustomizationUpdatePut.operation';
import {
	description as kubeDeleteDeleteDescription,
	execute as kubeDeleteDeleteExecute,
} from './kube/kubeDeleteDelete.operation';
import {
	description as kubeFlavorsGetDescription,
	execute as kubeFlavorsGetExecute,
} from './kube/kubeFlavorsGet.operation';
import {
	description as kubeGetGetDescription,
	execute as kubeGetGetExecute,
} from './kube/kubeGetGet.operation';
import {
	description as kubeIpRestrictionsDeleteDeleteDescription,
	execute as kubeIpRestrictionsDeleteDeleteExecute,
} from './kube/kubeIpRestrictionsDeleteDelete.operation';
import {
	description as kubeIpRestrictionsGetDescription,
	execute as kubeIpRestrictionsGetExecute,
} from './kube/kubeIpRestrictionsGet.operation';
import {
	description as kubeIpRestrictionsPostDescription,
	execute as kubeIpRestrictionsPostExecute,
} from './kube/kubeIpRestrictionsPost.operation';
import {
	description as kubeIpRestrictionsUpdatePutDescription,
	execute as kubeIpRestrictionsUpdatePutExecute,
} from './kube/kubeIpRestrictionsUpdatePut.operation';
import {
	description as kubeKubeconfigPostDescription,
	execute as kubeKubeconfigPostExecute,
} from './kube/kubeKubeconfigPost.operation';
import {
	description as kubeKubeconfigResetPostDescription,
	execute as kubeKubeconfigResetPostExecute,
} from './kube/kubeKubeconfigResetPost.operation';
import {
	description as kubeListGetDescription,
	execute as kubeListGetExecute,
} from './kube/kubeListGet.operation';
import {
	description as kubeLogSubscriptionDeleteDeleteDescription,
	execute as kubeLogSubscriptionDeleteDeleteExecute,
} from './kube/kubeLogSubscriptionDeleteDelete.operation';
import {
	description as kubeLogSubscriptionGetDescription,
	execute as kubeLogSubscriptionGetExecute,
} from './kube/kubeLogSubscriptionGet.operation';
import {
	description as kubeLogSubscriptionPostDescription,
	execute as kubeLogSubscriptionPostExecute,
} from './kube/kubeLogSubscriptionPost.operation';
import {
	description as kubeLogSubscriptionListGetDescription,
	execute as kubeLogSubscriptionListGetExecute,
} from './kube/kubeLogSubscriptionListGet.operation';
import {
	description as kubeLogUrlPostDescription,
	execute as kubeLogUrlPostExecute,
} from './kube/kubeLogUrlPost.operation';
import {
	description as kubeMetricsEtcdUsageGetDescription,
	execute as kubeMetricsEtcdUsageGetExecute,
} from './kube/kubeMetricsEtcdUsageGet.operation';
import {
	description as kubeNodeDeleteDeleteDescription,
	execute as kubeNodeDeleteDeleteExecute,
} from './kube/kubeNodeDeleteDelete.operation';
import {
	description as kubeNodeGetDescription,
	execute as kubeNodeGetExecute,
} from './kube/kubeNodeGet.operation';
import {
	description as kubeNodeListGetDescription,
	execute as kubeNodeListGetExecute,
} from './kube/kubeNodeListGet.operation';
import {
	description as kubeNodepoolCreatePostDescription,
	execute as kubeNodepoolCreatePostExecute,
} from './kube/kubeNodepoolCreatePost.operation';
import {
	description as kubeNodepoolListGetDescription,
	execute as kubeNodepoolListGetExecute,
} from './kube/kubeNodepoolListGet.operation';
import {
	description as kubeNodepoolDeleteDeleteDescription,
	execute as kubeNodepoolDeleteDeleteExecute,
} from './kube/kubeNodepoolDeleteDelete.operation';
import {
	description as kubeNodepoolGetGetDescription,
	execute as kubeNodepoolGetGetExecute,
} from './kube/kubeNodepoolGetGet.operation';
import {
	description as kubeNodepoolListNodepoolNodesGetDescription,
	execute as kubeNodepoolListNodepoolNodesGetExecute,
} from './kube/kubeNodepoolListNodepoolNodesGet.operation';
import {
	description as kubeNodepoolUpdatePutDescription,
	execute as kubeNodepoolUpdatePutExecute,
} from './kube/kubeNodepoolUpdatePut.operation';
import {
	description as kubeOpenIdConnectDeleteDeleteDescription,
	execute as kubeOpenIdConnectDeleteDeleteExecute,
} from './kube/kubeOpenIdConnectDeleteDelete.operation';
import {
	description as kubeOpenIdConnectGetDescription,
	execute as kubeOpenIdConnectGetExecute,
} from './kube/kubeOpenIdConnectGet.operation';
import {
	description as kubeOpenIdConnectPostDescription,
	execute as kubeOpenIdConnectPostExecute,
} from './kube/kubeOpenIdConnectPost.operation';
import {
	description as kubeOpenIdConnectUpdatePutDescription,
	execute as kubeOpenIdConnectUpdatePutExecute,
} from './kube/kubeOpenIdConnectUpdatePut.operation';
import {
	description as kubePrivateNetworkConfigurationGetDescription,
	execute as kubePrivateNetworkConfigurationGetExecute,
} from './kube/kubePrivateNetworkConfigurationGet.operation';
import {
	description as kubePrivateNetworkConfigurationUpdatePutDescription,
	execute as kubePrivateNetworkConfigurationUpdatePutExecute,
} from './kube/kubePrivateNetworkConfigurationUpdatePut.operation';
import {
	description as kubeResetPostDescription,
	execute as kubeResetPostExecute,
} from './kube/kubeResetPost.operation';
import {
	description as kubeRestartPostDescription,
	execute as kubeRestartPostExecute,
} from './kube/kubeRestartPost.operation';
import {
	description as kubeUpdateLoadBalancersSubnetIdUpdatePutDescription,
	execute as kubeUpdateLoadBalancersSubnetIdUpdatePutExecute,
} from './kube/kubeUpdateLoadBalancersSubnetIdUpdatePut.operation';
import {
	description as kubeUpdatePolicyUpdatePutDescription,
	execute as kubeUpdatePolicyUpdatePutExecute,
} from './kube/kubeUpdatePolicyUpdatePut.operation';
import {
	description as kubeUpdatePostDescription,
	execute as kubeUpdatePostExecute,
} from './kube/kubeUpdatePost.operation';
import {
	description as kubeUpdatePutDescription,
	execute as kubeUpdatePutExecute,
} from './kube/kubeUpdatePut.operation';
import {
	description as instanceActiveMonthlyBillingPostDescription,
	execute as instanceActiveMonthlyBillingPostExecute,
} from './instance/instanceActiveMonthlyBillingPost.operation';
import {
	description as instanceApplicationAccessPostDescription,
	execute as instanceApplicationAccessPostExecute,
} from './instance/instanceApplicationAccessPost.operation';
import {
	description as instanceBulkPostDescription,
	execute as instanceBulkPostExecute,
} from './instance/instanceBulkPost.operation';
import {
	description as instanceCreatePostDescription,
	execute as instanceCreatePostExecute,
} from './instance/instanceCreatePost.operation';
import {
	description as instanceDeleteDeleteDescription,
	execute as instanceDeleteDeleteExecute,
} from './instance/instanceDeleteDelete.operation';
import {
	description as instanceGetGetDescription,
	execute as instanceGetGetExecute,
} from './instance/instanceGetGet.operation';
import {
	description as instanceGroupCreatePostDescription,
	execute as instanceGroupCreatePostExecute,
} from './instance/instanceGroupCreatePost.operation';
import {
	description as instanceGroupDeleteDeleteDescription,
	execute as instanceGroupDeleteDeleteExecute,
} from './instance/instanceGroupDeleteDelete.operation';
import {
	description as instanceGroupGetGetDescription,
	execute as instanceGroupGetGetExecute,
} from './instance/instanceGroupGetGet.operation';
import {
	description as instanceGroupListGetDescription,
	execute as instanceGroupListGetExecute,
} from './instance/instanceGroupListGet.operation';
import {
	description as instanceInterfaceCreatePostDescription,
	execute as instanceInterfaceCreatePostExecute,
} from './instance/instanceInterfaceCreatePost.operation';
import {
	description as instanceInterfaceDeleteDeleteDescription,
	execute as instanceInterfaceDeleteDeleteExecute,
} from './instance/instanceInterfaceDeleteDelete.operation';
import {
	description as instanceInterfaceGetGetDescription,
	execute as instanceInterfaceGetGetExecute,
} from './instance/instanceInterfaceGetGet.operation';
import {
	description as instanceInterfaceListGetDescription,
	execute as instanceInterfaceListGetExecute,
} from './instance/instanceInterfaceListGet.operation';
import {
	description as instanceListGetDescription,
	execute as instanceListGetExecute,
} from './instance/instanceListGet.operation';
import {
	description as instanceRebootPostDescription,
	execute as instanceRebootPostExecute,
} from './instance/instanceRebootPost.operation';
import {
	description as instanceReinstallPostDescription,
	execute as instanceReinstallPostExecute,
} from './instance/instanceReinstallPost.operation';
import {
	description as instanceRescueModePostDescription,
	execute as instanceRescueModePostExecute,
} from './instance/instanceRescueModePost.operation';
import {
	description as instanceResizePostDescription,
	execute as instanceResizePostExecute,
} from './instance/instanceResizePost.operation';
import {
	description as instanceResumePostDescription,
	execute as instanceResumePostExecute,
} from './instance/instanceResumePost.operation';
import {
	description as instanceShelvePostDescription,
	execute as instanceShelvePostExecute,
} from './instance/instanceShelvePost.operation';
import {
	description as instanceSnapshotPostDescription,
	execute as instanceSnapshotPostExecute,
} from './instance/instanceSnapshotPost.operation';
import {
	description as instanceStartPostDescription,
	execute as instanceStartPostExecute,
} from './instance/instanceStartPost.operation';
import {
	description as instanceStopPostDescription,
	execute as instanceStopPostExecute,
} from './instance/instanceStopPost.operation';
import {
	description as instanceUnshelvePostDescription,
	execute as instanceUnshelvePostExecute,
} from './instance/instanceUnshelvePost.operation';
import {
	description as instanceUpdatePutDescription,
	execute as instanceUpdatePutExecute,
} from './instance/instanceUpdatePut.operation';
import {
	description as instanceVncPostDescription,
	execute as instanceVncPostExecute,
} from './instance/instanceVncPost.operation';
import {
	description as networkCreatePrivateNetworkPostDescription,
	execute as networkCreatePrivateNetworkPostExecute,
} from './network/createPrivateNetworkPost.operation';
import {
	description as networkCreateSubnetPostDescription,
	execute as networkCreateSubnetPostExecute,
} from './network/createSubnetPost.operation';
import {
	description as networkDeletePrivateNetworkDeleteDescription,
	execute as networkDeletePrivateNetworkDeleteExecute,
} from './network/deletePrivateNetworkDelete.operation';
import {
	description as networkDeleteSubnetDeleteDescription,
	execute as networkDeleteSubnetDeleteExecute,
} from './network/deleteSubnetDelete.operation';
import {
	description as networkGetPrivateNetworkDetailGetDescription,
	execute as networkGetPrivateNetworkDetailGetExecute,
} from './network/getPrivateNetworkDetailGet.operation';
import {
	description as networkGetSubnetDetailGetDescription,
	execute as networkGetSubnetDetailGetExecute,
} from './network/getSubnetDetailGet.operation';
import {
	description as networkListPrivateNetworksGetDescription,
	execute as networkListPrivateNetworksGetExecute,
} from './network/listPrivateNetworksGet.operation';
import {
	description as networkListPublicNetworksGetDescription,
	execute as networkListPublicNetworksGetExecute,
} from './network/listPublicNetworksGet.operation';
import {
	description as networkListSubnetsGetDescription,
	execute as networkListSubnetsGetExecute,
} from './network/listSubnetsGet.operation';
import {
	description as networkUpdatePrivateNetworkPutDescription,
	execute as networkUpdatePrivateNetworkPutExecute,
} from './network/updatePrivateNetworkPut.operation';
import {
	description as networkUpdateSubnetPutDescription,
	execute as networkUpdateSubnetPutExecute,
} from './network/updateSubnetPut.operation';
import {
	description as regionGetGetDescription,
	execute as regionGetGetExecute,
} from './region/regionGetGet.operation';
import {
	description as regionListGetDescription,
	execute as regionListGetExecute,
} from './region/regionListGet.operation';
import {
	description as regionShareCreatePostDescription,
	execute as regionShareCreatePostExecute,
} from './region/regionShareCreatePost.operation';
import {
	description as regionShareDeleteDeleteDescription,
	execute as regionShareDeleteDeleteExecute,
} from './region/regionShareDeleteDelete.operation';
import {
	description as regionShareGetGetDescription,
	execute as regionShareGetGetExecute,
} from './region/regionShareGetGet.operation';
import {
	description as regionShareListGetDescription,
	execute as regionShareListGetExecute,
} from './region/regionShareListGet.operation';
import {
	description as regionShareSnapshotCreatePostDescription,
	execute as regionShareSnapshotCreatePostExecute,
} from './region/regionShareSnapshotCreatePost.operation';
import {
	description as regionShareSnapshotDeleteDeleteDescription,
	execute as regionShareSnapshotDeleteDeleteExecute,
} from './region/regionShareSnapshotDeleteDelete.operation';
import {
	description as regionShareSnapshotGetGetDescription,
	execute as regionShareSnapshotGetGetExecute,
} from './region/regionShareSnapshotGetGet.operation';
import {
	description as regionShareSnapshotListGetDescription,
	execute as regionShareSnapshotListGetExecute,
} from './region/regionShareSnapshotListGet.operation';
import {
	description as regionShareUpdatePutDescription,
	execute as regionShareUpdatePutExecute,
} from './region/regionShareUpdatePut.operation';
import {
	description as regionVolumeCreatePostDescription,
	execute as regionVolumeCreatePostExecute,
} from './region/regionVolumeCreatePost.operation';
import {
	description as regionVolumeDeleteDeleteDescription,
	execute as regionVolumeDeleteDeleteExecute,
} from './region/regionVolumeDeleteDelete.operation';
import {
	description as regionVolumeGetGetDescription,
	execute as regionVolumeGetGetExecute,
} from './region/regionVolumeGetGet.operation';
import {
	description as regionVolumeListGetDescription,
	execute as regionVolumeListGetExecute,
} from './region/regionVolumeListGet.operation';
import {
	description as regionVolumeUpdatePutDescription,
	execute as regionVolumeUpdatePutExecute,
} from './region/regionVolumeUpdatePut.operation';
import {
	description as regionWorkflowBackupCreatePostDescription,
	execute as regionWorkflowBackupCreatePostExecute,
} from './region/regionWorkflowBackupCreatePost.operation';
import {
	description as regionWorkflowBackupDeleteDeleteDescription,
	execute as regionWorkflowBackupDeleteDeleteExecute,
} from './region/regionWorkflowBackupDeleteDelete.operation';
import {
	description as regionWorkflowBackupGetGetDescription,
	execute as regionWorkflowBackupGetGetExecute,
} from './region/regionWorkflowBackupGetGet.operation';
import {
	description as regionWorkflowBackupUpdatePutDescription,
	execute as regionWorkflowBackupUpdatePutExecute,
} from './region/regionWorkflowBackupUpdatePut.operation';
import {
	description as userCreatePostDescription,
	execute as userCreatePostExecute,
} from './user/createPost.operation';
import {
	description as userCreateS3CredentialSecretPostDescription,
	execute as userCreateS3CredentialSecretPostExecute,
} from './user/createS3CredentialSecretPost.operation';
import {
	description as userCreateUserPolicyPostDescription,
	execute as userCreateUserPolicyPostExecute,
} from './user/createUserPolicyPost.operation';
import {
	description as userCreateUserRolePostDescription,
	execute as userCreateUserRolePostExecute,
} from './user/createUserRolePost.operation';
import {
	description as userCreateUserS3CredentialsPostDescription,
	execute as userCreateUserS3CredentialsPostExecute,
} from './user/createUserS3CredentialsPost.operation';
import {
	description as userCreateUserTokenPostDescription,
	execute as userCreateUserTokenPostExecute,
} from './user/createUserTokenPost.operation';
import {
	description as userDeleteDeleteDescription,
	execute as userDeleteDeleteExecute,
} from './user/deleteDelete.operation';
import {
	description as userDeleteUserRoleDeleteDescription,
	execute as userDeleteUserRoleDeleteExecute,
} from './user/deleteUserRoleDelete.operation';
import {
	description as userDeleteUserS3CredentialDeleteDescription,
	execute as userDeleteUserS3CredentialDeleteExecute,
} from './user/deleteUserS3CredentialDelete.operation';
import {
	description as userGetDetailGetDescription,
	execute as userGetDetailGetExecute,
} from './user/getDetailGet.operation';
import {
	description as userGetUserConfigurationGetDescription,
	execute as userGetUserConfigurationGetExecute,
} from './user/getUserConfigurationGet.operation';
import {
	description as userGetUserOpenrcGetDescription,
	execute as userGetUserOpenrcGetExecute,
} from './user/getUserOpenrcGet.operation';
import {
	description as userGetUserPolicyGetDescription,
	execute as userGetUserPolicyGetExecute,
} from './user/getUserPolicyGet.operation';
import {
	description as userGetUserRcloneGetDescription,
	execute as userGetUserRcloneGetExecute,
} from './user/getUserRcloneGet.operation';
import {
	description as userGetUserRoleDetailGetDescription,
	execute as userGetUserRoleDetailGetExecute,
} from './user/getUserRoleDetailGet.operation';
import {
	description as userGetUserRoleGetDescription,
	execute as userGetUserRoleGetExecute,
} from './user/getUserRoleGet.operation';
import {
	description as userGetUserS3CredentialDetailGetDescription,
	execute as userGetUserS3CredentialDetailGetExecute,
} from './user/getUserS3CredentialDetailGet.operation';
import {
	description as userGetUserS3CredentialsGetDescription,
	execute as userGetUserS3CredentialsGetExecute,
} from './user/getUserS3CredentialsGet.operation';
import {
	description as userListGetDescription,
	execute as userListGetExecute,
} from './user/listGet.operation';
import {
	description as userRegeneratePasswordPostDescription,
	execute as userRegeneratePasswordPostExecute,
} from './user/regeneratePasswordPost.operation';
import {
	description as userUpdateUserRolePutDescription,
	execute as userUpdateUserRolePutExecute,
} from './user/updateUserRolePut.operation';
import {
	description as aclCreatePostDescription,
	execute as aclCreatePostExecute,
} from './acl/createPost.operation';
import {
	description as aclDeleteDeleteDescription,
	execute as aclDeleteDeleteExecute,
} from './acl/deleteDelete.operation';
import {
	description as aclListGetDescription,
	execute as aclListGetExecute,
} from './acl/listGet.operation';
import {
	description as activateMonthlyBillingPostDescription,
	execute as activateMonthlyBillingPostExecute,
} from './activateMonthlyBilling/activateMonthlyBillingPost.operation';
import {
	description as alertingCreatePostDescription,
	execute as alertingCreatePostExecute,
} from './alerting/createPost.operation';
import {
	description as alertingDeleteDeleteDescription,
	execute as alertingDeleteDeleteExecute,
} from './alerting/deleteDelete.operation';
import {
	description as alertingGetDetailGetDescription,
	execute as alertingGetDetailGetExecute,
} from './alerting/getDetailGet.operation';
import {
	description as alertingListGetDescription,
	execute as alertingListGetExecute,
} from './alerting/listGet.operation';
import {
	description as alertingUpdatePutDescription,
	execute as alertingUpdatePutExecute,
} from './alerting/updatePut.operation';
import {
	description as billListGetDescription,
	execute as billListGetExecute,
} from './bill/listGet.operation';
import {
	description as cancelPostDescription,
	execute as cancelPostExecute,
} from './cancel/cancelPost.operation';
import {
	description as capabilitiesGetKubeDetailGetDescription,
	execute as capabilitiesGetKubeDetailGetExecute,
} from './capabilities/getKubeDetailGet.operation';
import {
	description as capabilitiesGetLoadbalancerDetailGetDescription,
	execute as capabilitiesGetLoadbalancerDetailGetExecute,
} from './capabilities/getLoadbalancerDetailGet.operation';
import {
	description as capabilitiesGetRegionDetailGetDescription,
	execute as capabilitiesGetRegionDetailGetExecute,
} from './capabilities/getRegionDetailGet.operation';
import {
	description as capabilitiesGetRegionProductDetailGetDescription,
	execute as capabilitiesGetRegionProductDetailGetExecute,
} from './capabilities/getRegionProductDetailGet.operation';
import {
	description as capabilitiesListGetDescription,
	execute as capabilitiesListGetExecute,
} from './capabilities/listGet.operation';
import {
	description as capabilitiesListKubeGetDescription,
	execute as capabilitiesListKubeGetExecute,
} from './capabilities/listKubeGet.operation';
import {
	description as capabilitiesListLoadbalancerGetDescription,
	execute as capabilitiesListLoadbalancerGetExecute,
} from './capabilities/listLoadbalancerGet.operation';
import {
	description as capabilitiesListRegionGetDescription,
	execute as capabilitiesListRegionGetExecute,
} from './capabilities/listRegionGet.operation';
import {
	description as changeContactPostDescription,
	execute as changeContactPostExecute,
} from './changeContact/changeContactPost.operation';
import {
	description as confirmTerminationPostDescription,
	execute as confirmTerminationPostExecute,
} from './confirmTermination/confirmTerminationPost.operation';
import {
	description as containerRegistryCreatePostDescription,
	execute as containerRegistryCreatePostExecute,
} from './containerRegistry/createPost.operation';
import {
	description as containerRegistryCreateUserPostDescription,
	execute as containerRegistryCreateUserPostExecute,
} from './containerRegistry/createUserPost.operation';
import {
	description as containerRegistryDeleteDeleteDescription,
	execute as containerRegistryDeleteDeleteExecute,
} from './containerRegistry/deleteDelete.operation';
import {
	description as containerRegistryDeleteUserDeleteDescription,
	execute as containerRegistryDeleteUserDeleteExecute,
} from './containerRegistry/deleteUserDelete.operation';
import {
	description as containerRegistryGetDetailGetDescription,
	execute as containerRegistryGetDetailGetExecute,
} from './containerRegistry/getDetailGet.operation';
import {
	description as containerRegistryGetUserDetailGetDescription,
	execute as containerRegistryGetUserDetailGetExecute,
} from './containerRegistry/getUserDetailGet.operation';
import {
	description as containerRegistryListGetDescription,
	execute as containerRegistryListGetExecute,
} from './containerRegistry/listGet.operation';
import {
	description as containerRegistryListUsersGetDescription,
	execute as containerRegistryListUsersGetExecute,
} from './containerRegistry/listUsersGet.operation';
import {
	description as containerRegistryUpdatePutDescription,
	execute as containerRegistryUpdatePutExecute,
} from './containerRegistry/updatePut.operation';
import {
	description as creditGetDetailGetDescription,
	execute as creditGetDetailGetExecute,
} from './credit/getDetailGet.operation';
import {
	description as creditListGetDescription,
	execute as creditListGetExecute,
} from './credit/listGet.operation';
import {
	description as flavorGetDetailGetDescription,
	execute as flavorGetDetailGetExecute,
} from './flavor/getDetailGet.operation';
import {
	description as flavorListGetDescription,
	execute as flavorListGetExecute,
} from './flavor/listGet.operation';
import {
	description as imageGetDetailGetDescription,
	execute as imageGetDetailGetExecute,
} from './image/getDetailGet.operation';
import {
	description as imageListGetDescription,
	execute as imageListGetExecute,
} from './image/listGet.operation';
import {
	description as ipCreatePostDescription,
	execute as ipCreatePostExecute,
} from './ip/createPost.operation';
import {
	description as ipDeleteDeleteDescription,
	execute as ipDeleteDeleteExecute,
} from './ip/deleteDelete.operation';
import {
	description as ipGetDetailGetDescription,
	execute as ipGetDetailGetExecute,
} from './ip/getDetailGet.operation';
import {
	description as ipListGetDescription,
	execute as ipListGetExecute,
} from './ip/listGet.operation';
import {
	description as ipUpdatePutDescription,
	execute as ipUpdatePutExecute,
} from './ip/updatePut.operation';
import {
	description as labCreatePostDescription,
	execute as labCreatePostExecute,
} from './lab/createPost.operation';
import {
	description as labDeleteDeleteDescription,
	execute as labDeleteDeleteExecute,
} from './lab/deleteDelete.operation';
import {
	description as labGetDetailGetDescription,
	execute as labGetDetailGetExecute,
} from './lab/getDetailGet.operation';
import {
	description as labListGetDescription,
	execute as labListGetExecute,
} from './lab/listGet.operation';
import {
	description as labUpdatePutDescription,
	execute as labUpdatePutExecute,
} from './lab/updatePut.operation';
import {
	description as loadbalancerCreatePostDescription,
	execute as loadbalancerCreatePostExecute,
} from './loadbalancer/createPost.operation';
import {
	description as loadbalancerDeleteDeleteDescription,
	execute as loadbalancerDeleteDeleteExecute,
} from './loadbalancer/deleteDelete.operation';
import {
	description as loadbalancerGetDetailGetDescription,
	execute as loadbalancerGetDetailGetExecute,
} from './loadbalancer/getDetailGet.operation';
import {
	description as loadbalancerListGetDescription,
	execute as loadbalancerListGetExecute,
} from './loadbalancer/listGet.operation';
import {
	description as loadbalancerUpdatePutDescription,
	execute as loadbalancerUpdatePutExecute,
} from './loadbalancer/updatePut.operation';
import {
	description as operationGetDetailGetDescription,
	execute as operationGetDetailGetExecute,
} from './operation/getDetailGet.operation';
import {
	description as operationListGetDescription,
	execute as operationListGetExecute,
} from './operation/listGet.operation';
import {
	description as quantumGetCapabilitiesDetailGetDescription,
	execute as quantumGetCapabilitiesDetailGetExecute,
} from './quantum/getCapabilitiesDetailGet.operation';
import {
	description as quantumGetCapabilitiesRegionDetailGetDescription,
	execute as quantumGetCapabilitiesRegionDetailGetExecute,
} from './quantum/getCapabilitiesRegionDetailGet.operation';
import {
	description as quantumListCapabilitiesGetDescription,
	execute as quantumListCapabilitiesGetExecute,
} from './quantum/listCapabilitiesGet.operation';
import {
	description as quantumListCapabilitiesRegionGetDescription,
	execute as quantumListCapabilitiesRegionGetExecute,
} from './quantum/listCapabilitiesRegionGet.operation';
import {
	description as quotaListGetDescription,
	execute as quotaListGetExecute,
} from './quota/listGet.operation';
import {
	description as regionAvailableCheckRegionAvailableGetDescription,
	execute as regionAvailableCheckRegionAvailableGetExecute,
} from './regionAvailable/checkRegionAvailableGet.operation';
import {
	description as retainPostDescription,
	execute as retainPostExecute,
} from './retain/retainPost.operation';
import {
	description as roleListGetDescription,
	execute as roleListGetExecute,
} from './role/listGet.operation';
import {
	description as serviceInfosGetServiceInfosGetDescription,
	execute as serviceInfosGetServiceInfosGetExecute,
} from './serviceInfos/getServiceInfosGet.operation';
import {
	description as snapshotsCreatePostDescription,
	execute as snapshotsCreatePostExecute,
} from './snapshot/createPost.operation';
import {
	description as snapshotsDeleteDeleteDescription,
	execute as snapshotsDeleteDeleteExecute,
} from './snapshot/deleteDelete.operation';
import {
	description as snapshotsListGetDescription,
	execute as snapshotsListGetExecute,
} from './snapshot/listGet.operation';
import {
	description as sshkeyCreatePostDescription,
	execute as sshkeyCreatePostExecute,
} from './sshkey/createPost.operation';
import {
	description as sshkeyDeleteDeleteDescription,
	execute as sshkeyDeleteDeleteExecute,
} from './sshkey/deleteDelete.operation';
import {
	description as sshkeyListGetDescription,
	execute as sshkeyListGetExecute,
} from './sshkey/listGet.operation';
import {
	description as storageCreateContainerPostDescription,
	execute as storageCreateContainerPostExecute,
} from './storage/createContainerPost.operation';
import {
	description as storageDeleteContainerDeleteDescription,
	execute as storageDeleteContainerDeleteExecute,
} from './storage/deleteContainerDelete.operation';
import {
	description as storageDeleteDeleteDescription,
	execute as storageDeleteDeleteExecute,
} from './storage/deleteDelete.operation';
import {
	description as storageGetContainerDetailGetDescription,
	execute as storageGetContainerDetailGetExecute,
} from './storage/getContainerDetailGet.operation';
import {
	description as storageGetDetailGetDescription,
	execute as storageGetDetailGetExecute,
} from './storage/getDetailGet.operation';
import {
	description as storageListContainersGetDescription,
	execute as storageListContainersGetExecute,
} from './storage/listContainersGet.operation';
import {
	description as storageListGetDescription,
	execute as storageListGetExecute,
} from './storage/listGet.operation';
import {
	description as storageUpdateContainerPutDescription,
	execute as storageUpdateContainerPutExecute,
} from './storage/updateContainerPut.operation';
import {
	description as storageUpdatePutDescription,
	execute as storageUpdatePutExecute,
} from './storage/updatePut.operation';
import {
	description as terminatePostDescription,
	execute as terminatePostExecute,
} from './terminate/terminatePost.operation';
import {
	description as unleashPostDescription,
	execute as unleashPostExecute,
} from './unleash/unleashPost.operation';
import {
	description as usageGetCurrentGetDescription,
	execute as usageGetCurrentGetExecute,
} from './usage/getCurrentGet.operation';
import {
	description as usageGetForecastGetDescription,
	execute as usageGetForecastGetExecute,
} from './usage/getForecastGet.operation';
import {
	description as usageGetHistoryDetailGetDescription,
	execute as usageGetHistoryDetailGetExecute,
} from './usage/getHistoryDetailGet.operation';
import {
	description as usageListHistoryGetDescription,
	execute as usageListHistoryGetExecute,
} from './usage/listHistoryGet.operation';
import {
	description as vrackListGetDescription,
	execute as vrackListGetExecute,
} from './vrack/listGet.operation';

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

	properties.push({
		displayName: 'Operation',
		name: 'publicCloudOperation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiVersion: ['v1'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Create Backup',
				value: 'createBackupPost',
				action: 'Create a new block storage backup',
			},
			{
				name: 'Create Snapshot',
				value: 'createSnapshotPost',
				action: 'Create a new block storage snapshot',
			},
			{
				name: 'Create Volume',
				value: 'createVolumePost',
				action: 'Create a new block storage volume',
			},
			{
				name: 'Create Rancher Service',
				value: 'createRancherPost',
				action: 'Create a new Rancher service for a project',
			},
			{ name: 'Delete Backup', value: 'deleteBackupDelete', action: 'Delete a specific backup' },
			{
				name: 'Delete Snapshot',
				value: 'deleteSnapshotDelete',
				action: 'Delete a specific snapshot',
			},
			{
				name: 'Delete Rancher Service',
				value: 'deleteRancherDelete',
				action: 'Delete a specific Rancher service',
			},
			{ name: 'Delete Volume', value: 'deleteVolumeDelete', action: 'Delete a specific volume' },
			{
				name: 'Get Backup Details',
				value: 'getBackupDetail',
				action: 'Get details of a specific backup',
			},
			{
				name: 'Get Project Details',
				value: 'getProjectDetail',
				action: 'Get details of a specific Public Cloud project',
			},
			{
				name: 'Get Rancher Service',
				value: 'getRancherService',
				action: 'Get details of a specific Rancher service',
			},
			{
				name: 'Get Snapshot Details',
				value: 'getSnapshotDetail',
				action: 'Get details of a specific snapshot',
			},
			{
				name: 'Get Volume Details',
				value: 'getVolumeDetail',
				action: 'Get details of a specific volume',
			},
			{
				name: 'List Backups',
				value: 'backupListGet',
				action: 'List block storage backups in a project',
			},
			{ name: 'List Projects', value: 'projectListGet', action: 'List all Public Cloud projects' },
			{
				name: 'List Plan Capabilities',
				value: 'rancherPlanCapabilityListGet',
				action: 'List available plan capabilities for a Rancher service',
			},
			{
				name: 'List Rancher Services',
				value: 'rancherServiceListGet',
				action: 'List Rancher services for a project',
			},
			{
				name: 'List Tasks',
				value: 'rancherTaskListGet',
				action: 'List all tasks for a Rancher service',
			},
			{
				name: 'Get Task',
				value: 'rancherTaskDetailGet',
				action: 'Get details of a specific Rancher task',
			},
			{
				name: 'List Events',
				value: 'rancherEventListGet',
				action: 'List all events for a Rancher service',
			},
			{
				name: 'Get Admin Credentials',
				value: 'rancherAdminCredentialsGet',
				action: 'Get admin credentials for a Rancher service',
			},
			{
				name: 'Reset Admin Credentials',
				value: 'rancherAdminCredentialsReset',
				action: 'Reset admin password for a Rancher service',
			},
			{
				name: 'List Snapshots',
				value: 'snapshotListGet',
				action: 'List block storage snapshots in a project',
			},
			{
				name: 'List Version Capabilities',
				value: 'rancherVersionCapabilityListGet',
				action: 'List available version capabilities for a Rancher service',
			},
			{
				name: 'List Volumes',
				value: 'volumeListGet',
				action: 'List block storage volumes in a project',
			},
			{ name: 'Update Backup', value: 'updateBackupPut', action: 'Update an existing backup' },
			{
				name: 'Update Snapshot',
				value: 'updateSnapshotPut',
				action: 'Update an existing snapshot',
			},
			{ name: 'Update Volume', value: 'updateVolumePut', action: 'Update an existing volume' },
			{
				name: 'Update Rancher Service',
				value: 'updateRancherPut',
				action: 'Update a specific Rancher service (plan change)',
			},
			{
				name: 'redisClusterListGet',
				value: 'redisClusterListGet',
				action: 'List Redis clusters in a project',
			},
			{
				name: 'redisClusterGetGet',
				value: 'redisClusterGetGet',
				action: 'Get Redis cluster',
			},
			{
				name: 'redisClusterCreatePost',
				value: 'redisClusterCreatePost',
				action: 'Create Redis cluster',
			},
			{
				name: 'redisClusterUpdatePut',
				value: 'redisClusterUpdatePut',
				action: 'Update Redis cluster',
			},
			{
				name: 'redisClusterDeleteDelete',
				value: 'redisClusterDeleteDelete',
				action: 'Delete Redis cluster',
			},
			{
				name: 'redisBackupListGet',
				value: 'redisBackupListGet',
				action: 'List Redis backups',
			},
			{
				name: 'redisBackupGetGet',
				value: 'redisBackupGetGet',
				action: 'Get Redis backup',
			},
			{
				name: 'redisAdvancedConfigurationGet',
				value: 'redisAdvancedConfigurationGet',
				action: 'Get Redis advanced configuration',
			},
			{
				name: 'redisAdvancedConfigurationUpdatePut',
				value: 'redisAdvancedConfigurationUpdatePut',
				action: 'Update Redis advanced configuration',
			},
			{
				name: 'redisCapabilitiesAdvancedConfigurationGet',
				value: 'redisCapabilitiesAdvancedConfigurationGet',
				action: 'Get Redis advanced configuration capabilities',
			},
			{
				name: 'redisCapabilitiesCategoriesGet',
				value: 'redisCapabilitiesCategoriesGet',
				action: 'Get Redis categories capabilities',
			},
			{
				name: 'redisCapabilitiesCommandsGet',
				value: 'redisCapabilitiesCommandsGet',
				action: 'Get Redis commands capabilities',
			},
			{
				name: 'redisCapabilitiesIntegrationGet',
				value: 'redisCapabilitiesIntegrationGet',
				action: 'Get Redis integration capabilities',
			},
			{
				name: 'redisIntegrationListGet',
				value: 'redisIntegrationListGet',
				action: 'List Redis integrations',
			},
			{
				name: 'redisIntegrationCreatePost',
				value: 'redisIntegrationCreatePost',
				action: 'Create Redis integration',
			},
			{
				name: 'redisIntegrationGetGet',
				value: 'redisIntegrationGetGet',
				action: 'Get Redis integration',
			},
			{
				name: 'redisIntegrationDeleteDelete',
				value: 'redisIntegrationDeleteDelete',
				action: 'Delete Redis integration',
			},
			{
				name: 'redisIpRestrictionListGet',
				value: 'redisIpRestrictionListGet',
				action: 'List Redis IP restrictions',
			},
			{
				name: 'redisIpRestrictionCreatePost',
				value: 'redisIpRestrictionCreatePost',
				action: 'Create Redis IP restriction',
			},
			{
				name: 'redisIpRestrictionGetGet',
				value: 'redisIpRestrictionGetGet',
				action: 'Get Redis IP restriction',
			},
			{
				name: 'redisIpRestrictionUpdatePut',
				value: 'redisIpRestrictionUpdatePut',
				action: 'Update Redis IP restriction',
			},
			{
				name: 'redisIpRestrictionDeleteDelete',
				value: 'redisIpRestrictionDeleteDelete',
				action: 'Delete Redis IP restriction',
			},
			{
				name: 'redisLogKindListGet',
				value: 'redisLogKindListGet',
				action: 'List Redis log kinds',
			},
			{
				name: 'redisLogKindGet',
				value: 'redisLogKindGet',
				action: 'Get Redis log kind',
			},
			{
				name: 'redisLogSubscriptionListGet',
				value: 'redisLogSubscriptionListGet',
				action: 'List Redis log subscriptions',
			},
			{
				name: 'redisLogSubscriptionCreatePost',
				value: 'redisLogSubscriptionCreatePost',
				action: 'Create Redis log subscription',
			},
			{
				name: 'redisLogSubscriptionGetGet',
				value: 'redisLogSubscriptionGetGet',
				action: 'Get Redis log subscription',
			},
			{
				name: 'redisLogSubscriptionDeleteDelete',
				value: 'redisLogSubscriptionDeleteDelete',
				action: 'Delete Redis log subscription',
			},
			{
				name: 'redisLogUrlCreatePost',
				value: 'redisLogUrlCreatePost',
				action: 'Generate Redis log URL',
			},
			{
				name: 'redisLogsGet',
				value: 'redisLogsGet',
				action: 'Get Redis logs',
			},
			{
				name: 'redisMaintenanceListGet',
				value: 'redisMaintenanceListGet',
				action: 'List Redis maintenances',
			},
			{
				name: 'redisMaintenanceGet',
				value: 'redisMaintenanceGet',
				action: 'Get Redis maintenance',
			},
			{
				name: 'redisMaintenanceApplyPost',
				value: 'redisMaintenanceApplyPost',
				action: 'Apply Redis maintenance',
			},
			{
				name: 'redisMetricListGet',
				value: 'redisMetricListGet',
				action: 'List Redis metrics',
			},
			{
				name: 'redisMetricGet',
				value: 'redisMetricGet',
				action: 'Get Redis metric',
			},
			{
				name: 'redisNodeListGet',
				value: 'redisNodeListGet',
				action: 'List Redis nodes',
			},
			{
				name: 'redisNodeGetGet',
				value: 'redisNodeGetGet',
				action: 'Get Redis node',
			},
			{
				name: 'redisPrometheusGet',
				value: 'redisPrometheusGet',
				action: 'Get Redis prometheus endpoint',
			},
			{
				name: 'redisPrometheusCredentialsResetPost',
				value: 'redisPrometheusCredentialsResetPost',
				action: 'Reset Redis prometheus credentials',
			},
			{
				name: 'redisUserListGet',
				value: 'redisUserListGet',
				action: 'List Redis users',
			},
			{
				name: 'redisUserCreatePost',
				value: 'redisUserCreatePost',
				action: 'Create Redis user',
			},
			{
				name: 'redisUserGetGet',
				value: 'redisUserGetGet',
				action: 'Get Redis user',
			},
			{
				name: 'redisUserUpdatePut',
				value: 'redisUserUpdatePut',
				action: 'Update Redis user',
			},
			{
				name: 'redisUserDeleteDelete',
				value: 'redisUserDeleteDelete',
				action: 'Delete Redis user',
			},
			{
				name: 'redisUserCredentialsResetPost',
				value: 'redisUserCredentialsResetPost',
				action: 'Reset Redis user credentials',
			},
			{
				name: 'cassandraClusterListGet',
				value: 'cassandraClusterListGet',
				action: 'List Cassandra clusters in a project',
			},
			{
				name: 'cassandraClusterGetGet',
				value: 'cassandraClusterGetGet',
				action: 'Get Cassandra cluster',
			},
			{
				name: 'cassandraClusterCreatePost',
				value: 'cassandraClusterCreatePost',
				action: 'Create Cassandra cluster',
			},
			{
				name: 'cassandraClusterUpdatePut',
				value: 'cassandraClusterUpdatePut',
				action: 'Update Cassandra cluster',
			},
			{
				name: 'cassandraClusterDeleteDelete',
				value: 'cassandraClusterDeleteDelete',
				action: 'Delete Cassandra cluster',
			},
			{
				name: 'cassandraBackupListGet',
				value: 'cassandraBackupListGet',
				action: 'List Cassandra backups',
			},
			{
				name: 'cassandraBackupCreatePost',
				value: 'cassandraBackupCreatePost',
				action: 'Create Cassandra backup',
			},
			{
				name: 'cassandraBackupGetGet',
				value: 'cassandraBackupGetGet',
				action: 'Get Cassandra backup',
			},
			{
				name: 'cassandraBackupDeleteDelete',
				value: 'cassandraBackupDeleteDelete',
				action: 'Delete Cassandra backup',
			},
			{
				name: 'cassandraUserListGet',
				value: 'cassandraUserListGet',
				action: 'List Cassandra users',
			},
			{
				name: 'cassandraUserCreatePost',
				value: 'cassandraUserCreatePost',
				action: 'Create Cassandra user',
			},
			{
				name: 'cassandraUserGetGet',
				value: 'cassandraUserGetGet',
				action: 'Get Cassandra user',
			},
			{
				name: 'cassandraUserUpdatePut',
				value: 'cassandraUserUpdatePut',
				action: 'Update Cassandra user',
			},
			{
				name: 'cassandraUserDeleteDelete',
				value: 'cassandraUserDeleteDelete',
				action: 'Delete Cassandra user',
			},
			{
				name: 'cassandraNodeListGet',
				value: 'cassandraNodeListGet',
				action: 'List Cassandra nodes',
			},
			{
				name: 'cassandraNodeCreatePost',
				value: 'cassandraNodeCreatePost',
				action: 'Create Cassandra node',
			},
			{
				name: 'cassandraNodeGetGet',
				value: 'cassandraNodeGetGet',
				action: 'Get Cassandra node',
			},
			{
				name: 'cassandraNodeUpdatePut',
				value: 'cassandraNodeUpdatePut',
				action: 'Update Cassandra node',
			},
			{
				name: 'cassandraNodeDeleteDelete',
				value: 'cassandraNodeDeleteDelete',
				action: 'Delete Cassandra node',
			},
			{
				name: 'cassandraIpRestrictionListGet',
				value: 'cassandraIpRestrictionListGet',
				action: 'List Cassandra IP restrictions',
			},
			{
				name: 'cassandraIpRestrictionCreatePost',
				value: 'cassandraIpRestrictionCreatePost',
				action: 'Create Cassandra IP restriction',
			},
			{
				name: 'cassandraLogSubscriptionListGet',
				value: 'cassandraLogSubscriptionListGet',
				action: 'List Cassandra log subscriptions',
			},
			{
				name: 'cassandraLogSubscriptionCreatePost',
				value: 'cassandraLogSubscriptionCreatePost',
				action: 'Create Cassandra log subscription',
			},
			{
				name: 'cassandraLogSubscriptionGetGet',
				value: 'cassandraLogSubscriptionGetGet',
				action: 'Get Cassandra log subscription',
			},
			{
				name: 'cassandraMaintenanceGet',
				value: 'cassandraMaintenanceGet',
				action: 'Get Cassandra maintenance',
			},
			{
				name: 'cassandraMaintenanceUpdatePut',
				value: 'cassandraMaintenanceUpdatePut',
				action: 'Update Cassandra maintenance',
			},
			{
				name: 'cassandraMetricGet',
				value: 'cassandraMetricGet',
				action: 'Get Cassandra metric',
			},
			{
				name: 'cassandraPrometheusGet',
				value: 'cassandraPrometheusGet',
				action: 'Get Cassandra prometheus',
			},
			{
				name: 'cassandraCertificateListGet',
				value: 'cassandraCertificateListGet',
				action: 'List Cassandra certificates',
			},
			{
				name: 'cassandraCertificateCreatePost',
				value: 'cassandraCertificateCreatePost',
				action: 'Create Cassandra certificate',
			},
			{
				name: 'cassandraIntegrationListGet',
				value: 'cassandraIntegrationListGet',
				action: 'List Cassandra integrations',
			},
			{
				name: 'cassandraIntegrationCreatePost',
				value: 'cassandraIntegrationCreatePost',
				action: 'Create Cassandra integration',
			},
			{
				name: 'clickhouseClusterListGet',
				value: 'clickhouseClusterListGet',
				action: 'List ClickHouse clusters in a project',
			},
			{
				name: 'clickhouseClusterGetGet',
				value: 'clickhouseClusterGetGet',
				action: 'Get ClickHouse cluster',
			},
			{
				name: 'clickhouseClusterCreatePost',
				value: 'clickhouseClusterCreatePost',
				action: 'Create ClickHouse cluster',
			},
			{
				name: 'clickhouseClusterUpdatePut',
				value: 'clickhouseClusterUpdatePut',
				action: 'Update ClickHouse cluster',
			},
			{
				name: 'clickhouseClusterDeleteDelete',
				value: 'clickhouseClusterDeleteDelete',
				action: 'Delete ClickHouse cluster',
			},
			{
				name: 'clickhouseBackupListGet',
				value: 'clickhouseBackupListGet',
				action: 'List ClickHouse backups',
			},
			{
				name: 'clickhouseBackupCreatePost',
				value: 'clickhouseBackupCreatePost',
				action: 'Create ClickHouse backup',
			},
			{
				name: 'clickhouseBackupGetGet',
				value: 'clickhouseBackupGetGet',
				action: 'Get ClickHouse backup',
			},
			{
				name: 'clickhouseBackupDeleteDelete',
				value: 'clickhouseBackupDeleteDelete',
				action: 'Delete ClickHouse backup',
			},
			{
				name: 'clickhouseUserListGet',
				value: 'clickhouseUserListGet',
				action: 'List ClickHouse users',
			},
			{
				name: 'clickhouseUserCreatePost',
				value: 'clickhouseUserCreatePost',
				action: 'Create ClickHouse user',
			},
			{
				name: 'clickhouseUserGetGet',
				value: 'clickhouseUserGetGet',
				action: 'Get ClickHouse user',
			},
			{
				name: 'clickhouseUserUpdatePut',
				value: 'clickhouseUserUpdatePut',
				action: 'Update ClickHouse user',
			},
			{
				name: 'clickhouseUserDeleteDelete',
				value: 'clickhouseUserDeleteDelete',
				action: 'Delete ClickHouse user',
			},
			{
				name: 'clickhouseNodeListGet',
				value: 'clickhouseNodeListGet',
				action: 'List ClickHouse nodes',
			},
			{
				name: 'clickhouseNodeCreatePost',
				value: 'clickhouseNodeCreatePost',
				action: 'Create ClickHouse node',
			},
			{
				name: 'clickhouseNodeGetGet',
				value: 'clickhouseNodeGetGet',
				action: 'Get ClickHouse node',
			},
			{
				name: 'clickhouseNodeUpdatePut',
				value: 'clickhouseNodeUpdatePut',
				action: 'Update ClickHouse node',
			},
			{
				name: 'clickhouseNodeDeleteDelete',
				value: 'clickhouseNodeDeleteDelete',
				action: 'Delete ClickHouse node',
			},
			{
				name: 'clickhouseIpRestrictionListGet',
				value: 'clickhouseIpRestrictionListGet',
				action: 'List ClickHouse IP restrictions',
			},
			{
				name: 'clickhouseIpRestrictionCreatePost',
				value: 'clickhouseIpRestrictionCreatePost',
				action: 'Create ClickHouse IP restriction',
			},
			{
				name: 'clickhouseLogSubscriptionListGet',
				value: 'clickhouseLogSubscriptionListGet',
				action: 'List ClickHouse log subscriptions',
			},
			{
				name: 'clickhouseLogSubscriptionCreatePost',
				value: 'clickhouseLogSubscriptionCreatePost',
				action: 'Create ClickHouse log subscription',
			},
			{
				name: 'clickhouseLogSubscriptionGetGet',
				value: 'clickhouseLogSubscriptionGetGet',
				action: 'Get ClickHouse log subscription',
			},
			{
				name: 'clickhouseMaintenanceGet',
				value: 'clickhouseMaintenanceGet',
				action: 'Get ClickHouse maintenance',
			},
			{
				name: 'clickhouseMaintenanceUpdatePut',
				value: 'clickhouseMaintenanceUpdatePut',
				action: 'Update ClickHouse maintenance',
			},
			{
				name: 'clickhouseMetricGet',
				value: 'clickhouseMetricGet',
				action: 'Get ClickHouse metric',
			},
			{
				name: 'clickhousePrometheusGet',
				value: 'clickhousePrometheusGet',
				action: 'Get ClickHouse prometheus',
			},
			{
				name: 'clickhouseCertificateListGet',
				value: 'clickhouseCertificateListGet',
				action: 'List ClickHouse certificates',
			},
			{
				name: 'clickhouseCertificateCreatePost',
				value: 'clickhouseCertificateCreatePost',
				action: 'Create ClickHouse certificate',
			},
			{
				name: 'clickhouseIntegrationListGet',
				value: 'clickhouseIntegrationListGet',
				action: 'List ClickHouse integrations',
			},
			{
				name: 'clickhouseIntegrationCreatePost',
				value: 'clickhouseIntegrationCreatePost',
				action: 'Create ClickHouse integration',
			},
			{
				name: 'grafanaClusterListGet',
				value: 'grafanaClusterListGet',
				action: 'List Grafana clusters in a project',
			},
			{
				name: 'grafanaClusterGetGet',
				value: 'grafanaClusterGetGet',
				action: 'Get Grafana cluster',
			},
			{
				name: 'grafanaClusterCreatePost',
				value: 'grafanaClusterCreatePost',
				action: 'Create Grafana cluster',
			},
			{
				name: 'grafanaClusterUpdatePut',
				value: 'grafanaClusterUpdatePut',
				action: 'Update Grafana cluster',
			},
			{
				name: 'grafanaClusterDeleteDelete',
				value: 'grafanaClusterDeleteDelete',
				action: 'Delete Grafana cluster',
			},
			{
				name: 'grafanaBackupListGet',
				value: 'grafanaBackupListGet',
				action: 'List Grafana backups',
			},
			{
				name: 'grafanaBackupGetGet',
				value: 'grafanaBackupGetGet',
				action: 'Get Grafana backup',
			},
			{
				name: 'grafanaUserListGet',
				value: 'grafanaUserListGet',
				action: 'List Grafana users',
			},
			{
				name: 'grafanaUserGetGet',
				value: 'grafanaUserGetGet',
				action: 'Get Grafana user',
			},
			{
				name: 'grafanaUserCredentialsResetPost',
				value: 'grafanaUserCredentialsResetPost',
				action: 'Reset Grafana user credentials',
			},
			{
				name: 'grafanaNodeListGet',
				value: 'grafanaNodeListGet',
				action: 'List Grafana nodes',
			},
			{
				name: 'grafanaNodeGetGet',
				value: 'grafanaNodeGetGet',
				action: 'Get Grafana node',
			},
			{
				name: 'grafanaIpRestrictionListGet',
				value: 'grafanaIpRestrictionListGet',
				action: 'List Grafana IP restrictions',
			},
			{
				name: 'grafanaIpRestrictionCreatePost',
				value: 'grafanaIpRestrictionCreatePost',
				action: 'Create Grafana IP restriction',
			},
			{
				name: 'grafanaIpRestrictionGetGet',
				value: 'grafanaIpRestrictionGetGet',
				action: 'Get Grafana IP restriction',
			},
			{
				name: 'grafanaIpRestrictionUpdatePut',
				value: 'grafanaIpRestrictionUpdatePut',
				action: 'Update Grafana IP restriction',
			},
			{
				name: 'grafanaIpRestrictionDeleteDelete',
				value: 'grafanaIpRestrictionDeleteDelete',
				action: 'Delete Grafana IP restriction',
			},
			{
				name: 'grafanaLogKindListGet',
				value: 'grafanaLogKindListGet',
				action: 'List Grafana log kinds',
			},
			{
				name: 'grafanaLogKindGet',
				value: 'grafanaLogKindGet',
				action: 'Get Grafana log kind',
			},
			{
				name: 'grafanaLogSubscriptionListGet',
				value: 'grafanaLogSubscriptionListGet',
				action: 'List Grafana log subscriptions',
			},
			{
				name: 'grafanaLogSubscriptionCreatePost',
				value: 'grafanaLogSubscriptionCreatePost',
				action: 'Create Grafana log subscription',
			},
			{
				name: 'grafanaLogSubscriptionGetGet',
				value: 'grafanaLogSubscriptionGetGet',
				action: 'Get Grafana log subscription',
			},
			{
				name: 'grafanaLogSubscriptionDeleteDelete',
				value: 'grafanaLogSubscriptionDeleteDelete',
				action: 'Delete Grafana log subscription',
			},
			{
				name: 'grafanaLogUrlCreatePost',
				value: 'grafanaLogUrlCreatePost',
				action: 'Get Grafana log URL',
			},
			{
				name: 'grafanaLogsGet',
				value: 'grafanaLogsGet',
				action: 'Get Grafana logs',
			},
			{
				name: 'grafanaMaintenanceListGet',
				value: 'grafanaMaintenanceListGet',
				action: 'List Grafana maintenances',
			},
			{
				name: 'grafanaMaintenanceGet',
				value: 'grafanaMaintenanceGet',
				action: 'Get Grafana maintenance',
			},
			{
				name: 'grafanaMaintenanceApplyPost',
				value: 'grafanaMaintenanceApplyPost',
				action: 'Apply Grafana maintenance',
			},
			{
				name: 'grafanaMetricListGet',
				value: 'grafanaMetricListGet',
				action: 'List Grafana metrics',
			},
			{
				name: 'grafanaMetricGet',
				value: 'grafanaMetricGet',
				action: 'Get Grafana metric',
			},
			{
				name: 'grafanaAdvancedConfigurationGet',
				value: 'grafanaAdvancedConfigurationGet',
				action: 'Get Grafana advanced configuration',
			},
			{
				name: 'grafanaAdvancedConfigurationUpdatePut',
				value: 'grafanaAdvancedConfigurationUpdatePut',
				action: 'Update Grafana advanced configuration',
			},
			{
				name: 'grafanaCapabilitiesAdvancedConfigurationGet',
				value: 'grafanaCapabilitiesAdvancedConfigurationGet',
				action: 'Get Grafana advanced configuration capabilities',
			},
			{
				name: 'grafanaCapabilitiesBackupRegionsGet',
				value: 'grafanaCapabilitiesBackupRegionsGet',
				action: 'Get Grafana backup regions capabilities',
			},
			{
				name: 'grafanaCapabilitiesIntegrationGet',
				value: 'grafanaCapabilitiesIntegrationGet',
				action: 'Get Grafana integration capabilities',
			},
			{
				name: 'grafanaIntegrationListGet',
				value: 'grafanaIntegrationListGet',
				action: 'List Grafana integrations',
			},
			{
				name: 'grafanaIntegrationCreatePost',
				value: 'grafanaIntegrationCreatePost',
				action: 'Create Grafana integration',
			},
			{
				name: 'grafanaIntegrationGetGet',
				value: 'grafanaIntegrationGetGet',
				action: 'Get Grafana integration',
			},
			{
				name: 'grafanaIntegrationDeleteDelete',
				value: 'grafanaIntegrationDeleteDelete',
				action: 'Delete Grafana integration',
			},
			{
				name: 'kafkaClusterListGet',
				value: 'kafkaClusterListGet',
				action: 'List Kafka clusters in a project',
			},
			{
				name: 'kafkaClusterGetGet',
				value: 'kafkaClusterGetGet',
				action: 'Get Kafka cluster',
			},
			{
				name: 'kafkaClusterCreatePost',
				value: 'kafkaClusterCreatePost',
				action: 'Create Kafka cluster',
			},
			{
				name: 'kafkaClusterUpdatePut',
				value: 'kafkaClusterUpdatePut',
				action: 'Update Kafka cluster',
			},
			{
				name: 'kafkaClusterDeleteDelete',
				value: 'kafkaClusterDeleteDelete',
				action: 'Delete Kafka cluster',
			},
			{
				name: 'kafkaAclListGet',
				value: 'kafkaAclListGet',
				action: 'List Kafka ACLs',
			},
			{
				name: 'kafkaAclCreatePost',
				value: 'kafkaAclCreatePost',
				action: 'Create Kafka ACL',
			},
			{
				name: 'kafkaAclGetGet',
				value: 'kafkaAclGetGet',
				action: 'Get Kafka ACL',
			},
			{
				name: 'kafkaAclDeleteDelete',
				value: 'kafkaAclDeleteDelete',
				action: 'Delete Kafka ACL',
			},
			{
				name: 'kafkaAdvancedConfigurationGet',
				value: 'kafkaAdvancedConfigurationGet',
				action: 'Get Kafka advanced configuration',
			},
			{
				name: 'kafkaAdvancedConfigurationUpdatePut',
				value: 'kafkaAdvancedConfigurationUpdatePut',
				action: 'Update Kafka advanced configuration',
			},
			{
				name: 'kafkaCapabilitiesAdvancedConfigurationGet',
				value: 'kafkaCapabilitiesAdvancedConfigurationGet',
				action: 'Get Kafka advanced configuration capabilities',
			},
			{
				name: 'kafkaCapabilitiesBackupRegionsGet',
				value: 'kafkaCapabilitiesBackupRegionsGet',
				action: 'Get Kafka backup regions capabilities',
			},
			{
				name: 'kafkaCapabilitiesIntegrationGet',
				value: 'kafkaCapabilitiesIntegrationGet',
				action: 'Get Kafka integration capabilities',
			},
			{
				name: 'kafkaCertificateListGet',
				value: 'kafkaCertificateListGet',
				action: 'List Kafka certificates',
			},
			{
				name: 'kafkaIntegrationListGet',
				value: 'kafkaIntegrationListGet',
				action: 'List Kafka integrations',
			},
			{
				name: 'kafkaIntegrationCreatePost',
				value: 'kafkaIntegrationCreatePost',
				action: 'Create Kafka integration',
			},
			{
				name: 'kafkaIntegrationGetGet',
				value: 'kafkaIntegrationGetGet',
				action: 'Get Kafka integration',
			},
			{
				name: 'kafkaIntegrationDeleteDelete',
				value: 'kafkaIntegrationDeleteDelete',
				action: 'Delete Kafka integration',
			},
			{
				name: 'kafkaIpRestrictionListGet',
				value: 'kafkaIpRestrictionListGet',
				action: 'List Kafka IP restrictions',
			},
			{
				name: 'kafkaIpRestrictionCreatePost',
				value: 'kafkaIpRestrictionCreatePost',
				action: 'Create Kafka IP restriction',
			},
			{
				name: 'kafkaIpRestrictionGetGet',
				value: 'kafkaIpRestrictionGetGet',
				action: 'Get Kafka IP restriction',
			},
			{
				name: 'kafkaIpRestrictionUpdatePut',
				value: 'kafkaIpRestrictionUpdatePut',
				action: 'Update Kafka IP restriction',
			},
			{
				name: 'kafkaIpRestrictionDeleteDelete',
				value: 'kafkaIpRestrictionDeleteDelete',
				action: 'Delete Kafka IP restriction',
			},
			{
				name: 'kafkaLogKindListGet',
				value: 'kafkaLogKindListGet',
				action: 'List Kafka log kinds',
			},
			{
				name: 'kafkaLogKindGet',
				value: 'kafkaLogKindGet',
				action: 'Get Kafka log kind',
			},
			{
				name: 'kafkaLogSubscriptionListGet',
				value: 'kafkaLogSubscriptionListGet',
				action: 'List Kafka log subscriptions',
			},
			{
				name: 'kafkaLogSubscriptionCreatePost',
				value: 'kafkaLogSubscriptionCreatePost',
				action: 'Create Kafka log subscription',
			},
			{
				name: 'kafkaLogSubscriptionGetGet',
				value: 'kafkaLogSubscriptionGetGet',
				action: 'Get Kafka log subscription',
			},
			{
				name: 'kafkaLogSubscriptionDeleteDelete',
				value: 'kafkaLogSubscriptionDeleteDelete',
				action: 'Delete Kafka log subscription',
			},
			{
				name: 'kafkaLogUrlCreatePost',
				value: 'kafkaLogUrlCreatePost',
				action: 'Generate Kafka log URL',
			},
			{
				name: 'kafkaLogsGet',
				value: 'kafkaLogsGet',
				action: 'Get Kafka logs',
			},
			{
				name: 'kafkaMaintenanceListGet',
				value: 'kafkaMaintenanceListGet',
				action: 'List Kafka maintenances',
			},
			{
				name: 'kafkaMaintenanceGet',
				value: 'kafkaMaintenanceGet',
				action: 'Get Kafka maintenance',
			},
			{
				name: 'kafkaMaintenanceApplyPost',
				value: 'kafkaMaintenanceApplyPost',
				action: 'Apply Kafka maintenance',
			},
			{
				name: 'kafkaMetricListGet',
				value: 'kafkaMetricListGet',
				action: 'List Kafka metrics',
			},
			{
				name: 'kafkaMetricGet',
				value: 'kafkaMetricGet',
				action: 'Get Kafka metric',
			},
			{
				name: 'kafkaNodeListGet',
				value: 'kafkaNodeListGet',
				action: 'List Kafka nodes',
			},
			{
				name: 'kafkaNodeGetGet',
				value: 'kafkaNodeGetGet',
				action: 'Get Kafka node',
			},
			{
				name: 'kafkaPermissionsGet',
				value: 'kafkaPermissionsGet',
				action: 'Get Kafka permissions',
			},
			{
				name: 'kafkaPrometheusGet',
				value: 'kafkaPrometheusGet',
				action: 'Get Kafka prometheus endpoint',
			},
			{
				name: 'kafkaPrometheusCredentialsResetPost',
				value: 'kafkaPrometheusCredentialsResetPost',
				action: 'Reset Kafka prometheus credentials',
			},
			{
				name: 'kafkaSchemaRegistryAclListGet',
				value: 'kafkaSchemaRegistryAclListGet',
				action: 'List Kafka schema registry ACLs',
			},
			{
				name: 'kafkaSchemaRegistryAclCreatePost',
				value: 'kafkaSchemaRegistryAclCreatePost',
				action: 'Create Kafka schema registry ACL',
			},
			{
				name: 'kafkaSchemaRegistryAclGetGet',
				value: 'kafkaSchemaRegistryAclGetGet',
				action: 'Get Kafka schema registry ACL',
			},
			{
				name: 'kafkaSchemaRegistryAclDeleteDelete',
				value: 'kafkaSchemaRegistryAclDeleteDelete',
				action: 'Delete Kafka schema registry ACL',
			},
			{
				name: 'kafkaTopicListGet',
				value: 'kafkaTopicListGet',
				action: 'List Kafka topics',
			},
			{
				name: 'kafkaTopicCreatePost',
				value: 'kafkaTopicCreatePost',
				action: 'Create Kafka topic',
			},
			{
				name: 'kafkaTopicGetGet',
				value: 'kafkaTopicGetGet',
				action: 'Get Kafka topic',
			},
			{
				name: 'kafkaTopicUpdatePut',
				value: 'kafkaTopicUpdatePut',
				action: 'Update Kafka topic',
			},
			{
				name: 'kafkaTopicDeleteDelete',
				value: 'kafkaTopicDeleteDelete',
				action: 'Delete Kafka topic',
			},
			{
				name: 'kafkaTopicAclListGet',
				value: 'kafkaTopicAclListGet',
				action: 'List Kafka topic ACLs',
			},
			{
				name: 'kafkaTopicAclCreatePost',
				value: 'kafkaTopicAclCreatePost',
				action: 'Create Kafka topic ACL',
			},
			{
				name: 'kafkaTopicAclGetGet',
				value: 'kafkaTopicAclGetGet',
				action: 'Get Kafka topic ACL',
			},
			{
				name: 'kafkaTopicAclDeleteDelete',
				value: 'kafkaTopicAclDeleteDelete',
				action: 'Delete Kafka topic ACL',
			},
			{
				name: 'kafkaUserListGet',
				value: 'kafkaUserListGet',
				action: 'List Kafka users',
			},
			{
				name: 'kafkaUserCreatePost',
				value: 'kafkaUserCreatePost',
				action: 'Create Kafka user',
			},
			{
				name: 'kafkaUserGetGet',
				value: 'kafkaUserGetGet',
				action: 'Get Kafka user',
			},
			{
				name: 'kafkaUserDeleteDelete',
				value: 'kafkaUserDeleteDelete',
				action: 'Delete Kafka user',
			},
			{
				name: 'kafkaUserAccessGet',
				value: 'kafkaUserAccessGet',
				action: 'Get Kafka user access',
			},
			{
				name: 'kafkaUserCredentialsResetPost',
				value: 'kafkaUserCredentialsResetPost',
				action: 'Reset Kafka user credentials',
			},
			{
				name: 'kafkaConnectClusterListGet',
				value: 'kafkaConnectClusterListGet',
				action: 'List Kafka Connect clusters in a project',
			},
			{
				name: 'kafkaConnectClusterGetGet',
				value: 'kafkaConnectClusterGetGet',
				action: 'Get Kafka Connect cluster',
			},
			{
				name: 'kafkaConnectClusterCreatePost',
				value: 'kafkaConnectClusterCreatePost',
				action: 'Create Kafka Connect cluster',
			},
			{
				name: 'kafkaConnectClusterUpdatePut',
				value: 'kafkaConnectClusterUpdatePut',
				action: 'Update Kafka Connect cluster',
			},
			{
				name: 'kafkaConnectClusterDeleteDelete',
				value: 'kafkaConnectClusterDeleteDelete',
				action: 'Delete Kafka Connect cluster',
			},
			{
				name: 'kafkaConnectBackupListGet',
				value: 'kafkaConnectBackupListGet',
				action: 'List Kafka Connect backups',
			},
			{
				name: 'kafkaConnectBackupCreatePost',
				value: 'kafkaConnectBackupCreatePost',
				action: 'Create Kafka Connect backup',
			},
			{
				name: 'kafkaConnectBackupGetGet',
				value: 'kafkaConnectBackupGetGet',
				action: 'Get Kafka Connect backup',
			},
			{
				name: 'kafkaConnectBackupDeleteDelete',
				value: 'kafkaConnectBackupDeleteDelete',
				action: 'Delete Kafka Connect backup',
			},
			{
				name: 'kafkaConnectUserListGet',
				value: 'kafkaConnectUserListGet',
				action: 'List Kafka Connect users',
			},
			{
				name: 'kafkaConnectUserCreatePost',
				value: 'kafkaConnectUserCreatePost',
				action: 'Create Kafka Connect user',
			},
			{
				name: 'kafkaConnectUserGetGet',
				value: 'kafkaConnectUserGetGet',
				action: 'Get Kafka Connect user',
			},
			{
				name: 'kafkaConnectUserUpdatePut',
				value: 'kafkaConnectUserUpdatePut',
				action: 'Update Kafka Connect user',
			},
			{
				name: 'kafkaConnectUserDeleteDelete',
				value: 'kafkaConnectUserDeleteDelete',
				action: 'Delete Kafka Connect user',
			},
			{
				name: 'kafkaConnectNodeListGet',
				value: 'kafkaConnectNodeListGet',
				action: 'List Kafka Connect nodes',
			},
			{
				name: 'kafkaConnectNodeCreatePost',
				value: 'kafkaConnectNodeCreatePost',
				action: 'Create Kafka Connect node',
			},
			{
				name: 'kafkaConnectNodeGetGet',
				value: 'kafkaConnectNodeGetGet',
				action: 'Get Kafka Connect node',
			},
			{
				name: 'kafkaConnectNodeUpdatePut',
				value: 'kafkaConnectNodeUpdatePut',
				action: 'Update Kafka Connect node',
			},
			{
				name: 'kafkaConnectNodeDeleteDelete',
				value: 'kafkaConnectNodeDeleteDelete',
				action: 'Delete Kafka Connect node',
			},
			{
				name: 'kafkaConnectIpRestrictionListGet',
				value: 'kafkaConnectIpRestrictionListGet',
				action: 'List Kafka Connect IP restrictions',
			},
			{
				name: 'kafkaConnectIpRestrictionCreatePost',
				value: 'kafkaConnectIpRestrictionCreatePost',
				action: 'Create Kafka Connect IP restriction',
			},
			{
				name: 'kafkaConnectLogSubscriptionListGet',
				value: 'kafkaConnectLogSubscriptionListGet',
				action: 'List Kafka Connect log subscriptions',
			},
			{
				name: 'kafkaConnectLogSubscriptionCreatePost',
				value: 'kafkaConnectLogSubscriptionCreatePost',
				action: 'Create Kafka Connect log subscription',
			},
			{
				name: 'kafkaConnectLogSubscriptionGetGet',
				value: 'kafkaConnectLogSubscriptionGetGet',
				action: 'Get Kafka Connect log subscription',
			},
			{
				name: 'kafkaConnectMaintenanceGet',
				value: 'kafkaConnectMaintenanceGet',
				action: 'Get Kafka Connect maintenance',
			},
			{
				name: 'kafkaConnectMaintenanceUpdatePut',
				value: 'kafkaConnectMaintenanceUpdatePut',
				action: 'Update Kafka Connect maintenance',
			},
			{
				name: 'kafkaConnectMetricGet',
				value: 'kafkaConnectMetricGet',
				action: 'Get Kafka Connect metric',
			},
			{
				name: 'kafkaConnectPrometheusGet',
				value: 'kafkaConnectPrometheusGet',
				action: 'Get Kafka Connect prometheus',
			},
			{
				name: 'kafkaConnectCertificateListGet',
				value: 'kafkaConnectCertificateListGet',
				action: 'List Kafka Connect certificates',
			},
			{
				name: 'kafkaConnectCertificateCreatePost',
				value: 'kafkaConnectCertificateCreatePost',
				action: 'Create Kafka Connect certificate',
			},
			{
				name: 'kafkaMirrorMakerClusterListGet',
				value: 'kafkaMirrorMakerClusterListGet',
				action: 'List Kafka MirrorMaker clusters in a project',
			},
			{
				name: 'kafkaMirrorMakerClusterGetGet',
				value: 'kafkaMirrorMakerClusterGetGet',
				action: 'Get Kafka MirrorMaker cluster',
			},
			{
				name: 'kafkaMirrorMakerClusterCreatePost',
				value: 'kafkaMirrorMakerClusterCreatePost',
				action: 'Create Kafka MirrorMaker cluster',
			},
			{
				name: 'kafkaMirrorMakerClusterUpdatePut',
				value: 'kafkaMirrorMakerClusterUpdatePut',
				action: 'Update Kafka MirrorMaker cluster',
			},
			{
				name: 'kafkaMirrorMakerClusterDeleteDelete',
				value: 'kafkaMirrorMakerClusterDeleteDelete',
				action: 'Delete Kafka MirrorMaker cluster',
			},
			{
				name: 'kafkaMirrorMakerBackupListGet',
				value: 'kafkaMirrorMakerBackupListGet',
				action: 'List Kafka MirrorMaker backups',
			},
			{
				name: 'kafkaMirrorMakerBackupCreatePost',
				value: 'kafkaMirrorMakerBackupCreatePost',
				action: 'Create Kafka MirrorMaker backup',
			},
			{
				name: 'kafkaMirrorMakerBackupGetGet',
				value: 'kafkaMirrorMakerBackupGetGet',
				action: 'Get Kafka MirrorMaker backup',
			},
			{
				name: 'kafkaMirrorMakerBackupDeleteDelete',
				value: 'kafkaMirrorMakerBackupDeleteDelete',
				action: 'Delete Kafka MirrorMaker backup',
			},
			{
				name: 'kafkaMirrorMakerUserListGet',
				value: 'kafkaMirrorMakerUserListGet',
				action: 'List Kafka MirrorMaker users',
			},
			{
				name: 'kafkaMirrorMakerUserCreatePost',
				value: 'kafkaMirrorMakerUserCreatePost',
				action: 'Create Kafka MirrorMaker user',
			},
			{
				name: 'kafkaMirrorMakerUserGetGet',
				value: 'kafkaMirrorMakerUserGetGet',
				action: 'Get Kafka MirrorMaker user',
			},
			{
				name: 'kafkaMirrorMakerUserUpdatePut',
				value: 'kafkaMirrorMakerUserUpdatePut',
				action: 'Update Kafka MirrorMaker user',
			},
			{
				name: 'kafkaMirrorMakerUserDeleteDelete',
				value: 'kafkaMirrorMakerUserDeleteDelete',
				action: 'Delete Kafka MirrorMaker user',
			},
			{
				name: 'kafkaMirrorMakerNodeListGet',
				value: 'kafkaMirrorMakerNodeListGet',
				action: 'List Kafka MirrorMaker nodes',
			},
			{
				name: 'kafkaMirrorMakerNodeCreatePost',
				value: 'kafkaMirrorMakerNodeCreatePost',
				action: 'Create Kafka MirrorMaker node',
			},
			{
				name: 'kafkaMirrorMakerNodeGetGet',
				value: 'kafkaMirrorMakerNodeGetGet',
				action: 'Get Kafka MirrorMaker node',
			},
			{
				name: 'kafkaMirrorMakerNodeUpdatePut',
				value: 'kafkaMirrorMakerNodeUpdatePut',
				action: 'Update Kafka MirrorMaker node',
			},
			{
				name: 'kafkaMirrorMakerNodeDeleteDelete',
				value: 'kafkaMirrorMakerNodeDeleteDelete',
				action: 'Delete Kafka MirrorMaker node',
			},
			{
				name: 'kafkaMirrorMakerIpRestrictionListGet',
				value: 'kafkaMirrorMakerIpRestrictionListGet',
				action: 'List Kafka MirrorMaker IP restrictions',
			},
			{
				name: 'kafkaMirrorMakerIpRestrictionCreatePost',
				value: 'kafkaMirrorMakerIpRestrictionCreatePost',
				action: 'Create Kafka MirrorMaker IP restriction',
			},
			{
				name: 'kafkaMirrorMakerLogSubscriptionListGet',
				value: 'kafkaMirrorMakerLogSubscriptionListGet',
				action: 'List Kafka MirrorMaker log subscriptions',
			},
			{
				name: 'kafkaMirrorMakerLogSubscriptionCreatePost',
				value: 'kafkaMirrorMakerLogSubscriptionCreatePost',
				action: 'Create Kafka MirrorMaker log subscription',
			},
			{
				name: 'kafkaMirrorMakerLogSubscriptionGetGet',
				value: 'kafkaMirrorMakerLogSubscriptionGetGet',
				action: 'Get Kafka MirrorMaker log subscription',
			},
			{
				name: 'kafkaMirrorMakerMaintenanceGet',
				value: 'kafkaMirrorMakerMaintenanceGet',
				action: 'Get Kafka MirrorMaker maintenance',
			},
			{
				name: 'kafkaMirrorMakerMaintenanceUpdatePut',
				value: 'kafkaMirrorMakerMaintenanceUpdatePut',
				action: 'Update Kafka MirrorMaker maintenance',
			},
			{
				name: 'kafkaMirrorMakerMetricGet',
				value: 'kafkaMirrorMakerMetricGet',
				action: 'Get Kafka MirrorMaker metric',
			},
			{
				name: 'kafkaMirrorMakerPrometheusGet',
				value: 'kafkaMirrorMakerPrometheusGet',
				action: 'Get Kafka MirrorMaker prometheus',
			},
			{
				name: 'kafkaMirrorMakerCertificateListGet',
				value: 'kafkaMirrorMakerCertificateListGet',
				action: 'List Kafka MirrorMaker certificates',
			},
			{
				name: 'kafkaMirrorMakerCertificateCreatePost',
				value: 'kafkaMirrorMakerCertificateCreatePost',
				action: 'Create Kafka MirrorMaker certificate',
			},
			{
				name: 'm3aggregatorClusterListGet',
				value: 'm3aggregatorClusterListGet',
				action: 'List M3 Aggregator clusters in a project',
			},
			{
				name: 'm3aggregatorClusterGetGet',
				value: 'm3aggregatorClusterGetGet',
				action: 'Get M3 Aggregator cluster',
			},
			{
				name: 'm3aggregatorClusterCreatePost',
				value: 'm3aggregatorClusterCreatePost',
				action: 'Create M3 Aggregator cluster',
			},
			{
				name: 'm3aggregatorClusterUpdatePut',
				value: 'm3aggregatorClusterUpdatePut',
				action: 'Update M3 Aggregator cluster',
			},
			{
				name: 'm3aggregatorClusterDeleteDelete',
				value: 'm3aggregatorClusterDeleteDelete',
				action: 'Delete M3 Aggregator cluster',
			},
			{
				name: 'm3aggregatorBackupListGet',
				value: 'm3aggregatorBackupListGet',
				action: 'List M3 Aggregator backups',
			},
			{
				name: 'm3aggregatorBackupCreatePost',
				value: 'm3aggregatorBackupCreatePost',
				action: 'Create M3 Aggregator backup',
			},
			{
				name: 'm3aggregatorBackupGetGet',
				value: 'm3aggregatorBackupGetGet',
				action: 'Get M3 Aggregator backup',
			},
			{
				name: 'm3aggregatorBackupDeleteDelete',
				value: 'm3aggregatorBackupDeleteDelete',
				action: 'Delete M3 Aggregator backup',
			},
			{
				name: 'm3aggregatorUserListGet',
				value: 'm3aggregatorUserListGet',
				action: 'List M3 Aggregator users',
			},
			{
				name: 'm3aggregatorUserCreatePost',
				value: 'm3aggregatorUserCreatePost',
				action: 'Create M3 Aggregator user',
			},
			{
				name: 'm3aggregatorUserGetGet',
				value: 'm3aggregatorUserGetGet',
				action: 'Get M3 Aggregator user',
			},
			{
				name: 'm3aggregatorUserUpdatePut',
				value: 'm3aggregatorUserUpdatePut',
				action: 'Update M3 Aggregator user',
			},
			{
				name: 'm3aggregatorUserDeleteDelete',
				value: 'm3aggregatorUserDeleteDelete',
				action: 'Delete M3 Aggregator user',
			},
			{
				name: 'm3aggregatorNodeListGet',
				value: 'm3aggregatorNodeListGet',
				action: 'List M3 Aggregator nodes',
			},
			{
				name: 'm3aggregatorNodeCreatePost',
				value: 'm3aggregatorNodeCreatePost',
				action: 'Create M3 Aggregator node',
			},
			{
				name: 'm3aggregatorNodeGetGet',
				value: 'm3aggregatorNodeGetGet',
				action: 'Get M3 Aggregator node',
			},
			{
				name: 'm3aggregatorNodeUpdatePut',
				value: 'm3aggregatorNodeUpdatePut',
				action: 'Update M3 Aggregator node',
			},
			{
				name: 'm3aggregatorNodeDeleteDelete',
				value: 'm3aggregatorNodeDeleteDelete',
				action: 'Delete M3 Aggregator node',
			},
			{
				name: 'm3aggregatorIpRestrictionListGet',
				value: 'm3aggregatorIpRestrictionListGet',
				action: 'List M3 Aggregator IP restrictions',
			},
			{
				name: 'm3aggregatorIpRestrictionCreatePost',
				value: 'm3aggregatorIpRestrictionCreatePost',
				action: 'Create M3 Aggregator IP restriction',
			},
			{
				name: 'm3aggregatorLogSubscriptionListGet',
				value: 'm3aggregatorLogSubscriptionListGet',
				action: 'List M3 Aggregator log subscriptions',
			},
			{
				name: 'm3aggregatorLogSubscriptionCreatePost',
				value: 'm3aggregatorLogSubscriptionCreatePost',
				action: 'Create M3 Aggregator log subscription',
			},
			{
				name: 'm3aggregatorLogSubscriptionGetGet',
				value: 'm3aggregatorLogSubscriptionGetGet',
				action: 'Get M3 Aggregator log subscription',
			},
			{
				name: 'm3aggregatorMaintenanceGet',
				value: 'm3aggregatorMaintenanceGet',
				action: 'Get M3 Aggregator maintenance',
			},
			{
				name: 'm3aggregatorMaintenanceUpdatePut',
				value: 'm3aggregatorMaintenanceUpdatePut',
				action: 'Update M3 Aggregator maintenance',
			},
			{
				name: 'm3aggregatorMetricGet',
				value: 'm3aggregatorMetricGet',
				action: 'Get M3 Aggregator metric',
			},
			{
				name: 'm3aggregatorPrometheusGet',
				value: 'm3aggregatorPrometheusGet',
				action: 'Get M3 Aggregator prometheus',
			},
			{
				name: 'm3aggregatorCertificateListGet',
				value: 'm3aggregatorCertificateListGet',
				action: 'List M3 Aggregator certificates',
			},
			{
				name: 'm3aggregatorCertificateCreatePost',
				value: 'm3aggregatorCertificateCreatePost',
				action: 'Create M3 Aggregator certificate',
			},
			{
				name: 'm3dbClusterListGet',
				value: 'm3dbClusterListGet',
				action: 'List M3DB clusters in a project',
			},
			{
				name: 'm3dbClusterGetGet',
				value: 'm3dbClusterGetGet',
				action: 'Get M3DB cluster',
			},
			{
				name: 'm3dbClusterCreatePost',
				value: 'm3dbClusterCreatePost',
				action: 'Create M3DB cluster',
			},
			{
				name: 'm3dbClusterUpdatePut',
				value: 'm3dbClusterUpdatePut',
				action: 'Update M3DB cluster',
			},
			{
				name: 'm3dbClusterDeleteDelete',
				value: 'm3dbClusterDeleteDelete',
				action: 'Delete M3DB cluster',
			},
			{
				name: 'm3dbBackupListGet',
				value: 'm3dbBackupListGet',
				action: 'List M3DB backups',
			},
			{
				name: 'm3dbBackupCreatePost',
				value: 'm3dbBackupCreatePost',
				action: 'Create M3DB backup',
			},
			{
				name: 'm3dbBackupGetGet',
				value: 'm3dbBackupGetGet',
				action: 'Get M3DB backup',
			},
			{
				name: 'm3dbBackupDeleteDelete',
				value: 'm3dbBackupDeleteDelete',
				action: 'Delete M3DB backup',
			},
			{
				name: 'm3dbUserListGet',
				value: 'm3dbUserListGet',
				action: 'List M3DB users',
			},
			{
				name: 'm3dbUserCreatePost',
				value: 'm3dbUserCreatePost',
				action: 'Create M3DB user',
			},
			{
				name: 'm3dbUserGetGet',
				value: 'm3dbUserGetGet',
				action: 'Get M3DB user',
			},
			{
				name: 'm3dbUserUpdatePut',
				value: 'm3dbUserUpdatePut',
				action: 'Update M3DB user',
			},
			{
				name: 'm3dbUserDeleteDelete',
				value: 'm3dbUserDeleteDelete',
				action: 'Delete M3DB user',
			},
			{
				name: 'm3dbNodeListGet',
				value: 'm3dbNodeListGet',
				action: 'List M3DB nodes',
			},
			{
				name: 'm3dbNodeCreatePost',
				value: 'm3dbNodeCreatePost',
				action: 'Create M3DB node',
			},
			{
				name: 'm3dbNodeGetGet',
				value: 'm3dbNodeGetGet',
				action: 'Get M3DB node',
			},
			{
				name: 'm3dbNodeUpdatePut',
				value: 'm3dbNodeUpdatePut',
				action: 'Update M3DB node',
			},
			{
				name: 'm3dbNodeDeleteDelete',
				value: 'm3dbNodeDeleteDelete',
				action: 'Delete M3DB node',
			},
			{
				name: 'm3dbIpRestrictionListGet',
				value: 'm3dbIpRestrictionListGet',
				action: 'List M3DB IP restrictions',
			},
			{
				name: 'm3dbIpRestrictionCreatePost',
				value: 'm3dbIpRestrictionCreatePost',
				action: 'Create M3DB IP restriction',
			},
			{
				name: 'm3dbLogSubscriptionListGet',
				value: 'm3dbLogSubscriptionListGet',
				action: 'List M3DB log subscriptions',
			},
			{
				name: 'm3dbLogSubscriptionCreatePost',
				value: 'm3dbLogSubscriptionCreatePost',
				action: 'Create M3DB log subscription',
			},
			{
				name: 'm3dbLogSubscriptionGetGet',
				value: 'm3dbLogSubscriptionGetGet',
				action: 'Get M3DB log subscription',
			},
			{
				name: 'm3dbMaintenanceGet',
				value: 'm3dbMaintenanceGet',
				action: 'Get M3DB maintenance',
			},
			{
				name: 'm3dbMaintenanceUpdatePut',
				value: 'm3dbMaintenanceUpdatePut',
				action: 'Update M3DB maintenance',
			},
			{
				name: 'm3dbMetricGet',
				value: 'm3dbMetricGet',
				action: 'Get M3DB metric',
			},
			{
				name: 'm3dbPrometheusGet',
				value: 'm3dbPrometheusGet',
				action: 'Get M3DB prometheus',
			},
			{
				name: 'm3dbCertificateListGet',
				value: 'm3dbCertificateListGet',
				action: 'List M3DB certificates',
			},
			{
				name: 'm3dbCertificateCreatePost',
				value: 'm3dbCertificateCreatePost',
				action: 'Create M3DB certificate',
			},
			{
				name: 'mongodbClusterListGet',
				value: 'mongodbClusterListGet',
				action: 'List MongoDB clusters in a project',
			},
			{
				name: 'mongodbClusterGetGet',
				value: 'mongodbClusterGetGet',
				action: 'Get MongoDB cluster',
			},
			{
				name: 'mongodbClusterCreatePost',
				value: 'mongodbClusterCreatePost',
				action: 'Create MongoDB cluster',
			},
			{
				name: 'mongodbClusterUpdatePut',
				value: 'mongodbClusterUpdatePut',
				action: 'Update MongoDB cluster',
			},
			{
				name: 'mongodbClusterDeleteDelete',
				value: 'mongodbClusterDeleteDelete',
				action: 'Delete MongoDB cluster',
			},
			{
				name: 'mongodbBackupListGet',
				value: 'mongodbBackupListGet',
				action: 'List MongoDB backups',
			},
			{
				name: 'mongodbBackupCreatePost',
				value: 'mongodbBackupCreatePost',
				action: 'Create MongoDB backup',
			},
			{
				name: 'mongodbBackupGetGet',
				value: 'mongodbBackupGetGet',
				action: 'Get MongoDB backup',
			},
			{
				name: 'mongodbBackupDeleteDelete',
				value: 'mongodbBackupDeleteDelete',
				action: 'Delete MongoDB backup',
			},
			{
				name: 'mongodbUserListGet',
				value: 'mongodbUserListGet',
				action: 'List MongoDB users',
			},
			{
				name: 'mongodbUserCreatePost',
				value: 'mongodbUserCreatePost',
				action: 'Create MongoDB user',
			},
			{
				name: 'mongodbUserGetGet',
				value: 'mongodbUserGetGet',
				action: 'Get MongoDB user',
			},
			{
				name: 'mongodbUserUpdatePut',
				value: 'mongodbUserUpdatePut',
				action: 'Update MongoDB user',
			},
			{
				name: 'mongodbUserDeleteDelete',
				value: 'mongodbUserDeleteDelete',
				action: 'Delete MongoDB user',
			},
			{
				name: 'mongodbNodeListGet',
				value: 'mongodbNodeListGet',
				action: 'List MongoDB nodes',
			},
			{
				name: 'mongodbNodeCreatePost',
				value: 'mongodbNodeCreatePost',
				action: 'Create MongoDB node',
			},
			{
				name: 'mongodbNodeGetGet',
				value: 'mongodbNodeGetGet',
				action: 'Get MongoDB node',
			},
			{
				name: 'mongodbNodeUpdatePut',
				value: 'mongodbNodeUpdatePut',
				action: 'Update MongoDB node',
			},
			{
				name: 'mongodbNodeDeleteDelete',
				value: 'mongodbNodeDeleteDelete',
				action: 'Delete MongoDB node',
			},
			{
				name: 'mongodbIpRestrictionListGet',
				value: 'mongodbIpRestrictionListGet',
				action: 'List MongoDB IP restrictions',
			},
			{
				name: 'mongodbIpRestrictionCreatePost',
				value: 'mongodbIpRestrictionCreatePost',
				action: 'Create MongoDB IP restriction',
			},
			{
				name: 'mongodbLogSubscriptionListGet',
				value: 'mongodbLogSubscriptionListGet',
				action: 'List MongoDB log subscriptions',
			},
			{
				name: 'mongodbLogSubscriptionCreatePost',
				value: 'mongodbLogSubscriptionCreatePost',
				action: 'Create MongoDB log subscription',
			},
			{
				name: 'mongodbLogSubscriptionGetGet',
				value: 'mongodbLogSubscriptionGetGet',
				action: 'Get MongoDB log subscription',
			},
			{
				name: 'mongodbMaintenanceGet',
				value: 'mongodbMaintenanceGet',
				action: 'Get MongoDB maintenance',
			},
			{
				name: 'mongodbMaintenanceUpdatePut',
				value: 'mongodbMaintenanceUpdatePut',
				action: 'Update MongoDB maintenance',
			},
			{
				name: 'mongodbMetricGet',
				value: 'mongodbMetricGet',
				action: 'Get MongoDB metric',
			},
			{
				name: 'mongodbPrometheusGet',
				value: 'mongodbPrometheusGet',
				action: 'Get MongoDB prometheus',
			},
			{
				name: 'mongodbCertificateListGet',
				value: 'mongodbCertificateListGet',
				action: 'List MongoDB certificates',
			},
			{
				name: 'mongodbCertificateCreatePost',
				value: 'mongodbCertificateCreatePost',
				action: 'Create MongoDB certificate',
			},
			{
				name: 'mongodbIntegrationListGet',
				value: 'mongodbIntegrationListGet',
				action: 'List MongoDB integrations',
			},
			{
				name: 'mongodbIntegrationCreatePost',
				value: 'mongodbIntegrationCreatePost',
				action: 'Create MongoDB integration',
			},
			{
				name: 'mysqlClusterListGet',
				value: 'mysqlClusterListGet',
				action: 'List MySQL clusters in a project',
			},
			{
				name: 'mysqlClusterGetGet',
				value: 'mysqlClusterGetGet',
				action: 'Get MySQL cluster',
			},
			{
				name: 'mysqlClusterCreatePost',
				value: 'mysqlClusterCreatePost',
				action: 'Create MySQL cluster',
			},
			{
				name: 'mysqlClusterUpdatePut',
				value: 'mysqlClusterUpdatePut',
				action: 'Update MySQL cluster',
			},
			{
				name: 'mysqlClusterDeleteDelete',
				value: 'mysqlClusterDeleteDelete',
				action: 'Delete MySQL cluster',
			},
			{
				name: 'mysqlBackupListGet',
				value: 'mysqlBackupListGet',
				action: 'List MySQL backups',
			},
			{
				name: 'mysqlBackupCreatePost',
				value: 'mysqlBackupCreatePost',
				action: 'Create MySQL backup',
			},
			{
				name: 'mysqlBackupGetGet',
				value: 'mysqlBackupGetGet',
				action: 'Get MySQL backup',
			},
			{
				name: 'mysqlBackupDeleteDelete',
				value: 'mysqlBackupDeleteDelete',
				action: 'Delete MySQL backup',
			},
			{
				name: 'mysqlUserListGet',
				value: 'mysqlUserListGet',
				action: 'List MySQL users',
			},
			{
				name: 'mysqlUserCreatePost',
				value: 'mysqlUserCreatePost',
				action: 'Create MySQL user',
			},
			{
				name: 'mysqlUserGetGet',
				value: 'mysqlUserGetGet',
				action: 'Get MySQL user',
			},
			{
				name: 'mysqlUserUpdatePut',
				value: 'mysqlUserUpdatePut',
				action: 'Update MySQL user',
			},
			{
				name: 'mysqlUserDeleteDelete',
				value: 'mysqlUserDeleteDelete',
				action: 'Delete MySQL user',
			},
			{
				name: 'mysqlNodeListGet',
				value: 'mysqlNodeListGet',
				action: 'List MySQL nodes',
			},
			{
				name: 'mysqlNodeCreatePost',
				value: 'mysqlNodeCreatePost',
				action: 'Create MySQL node',
			},
			{
				name: 'mysqlNodeGetGet',
				value: 'mysqlNodeGetGet',
				action: 'Get MySQL node',
			},
			{
				name: 'mysqlNodeUpdatePut',
				value: 'mysqlNodeUpdatePut',
				action: 'Update MySQL node',
			},
			{
				name: 'mysqlNodeDeleteDelete',
				value: 'mysqlNodeDeleteDelete',
				action: 'Delete MySQL node',
			},
			{
				name: 'mysqlIpRestrictionListGet',
				value: 'mysqlIpRestrictionListGet',
				action: 'List MySQL IP restrictions',
			},
			{
				name: 'mysqlIpRestrictionCreatePost',
				value: 'mysqlIpRestrictionCreatePost',
				action: 'Create MySQL IP restriction',
			},
			{
				name: 'mysqlLogSubscriptionListGet',
				value: 'mysqlLogSubscriptionListGet',
				action: 'List MySQL log subscriptions',
			},
			{
				name: 'mysqlLogSubscriptionCreatePost',
				value: 'mysqlLogSubscriptionCreatePost',
				action: 'Create MySQL log subscription',
			},
			{
				name: 'mysqlLogSubscriptionGetGet',
				value: 'mysqlLogSubscriptionGetGet',
				action: 'Get MySQL log subscription',
			},
			{
				name: 'mysqlMaintenanceGet',
				value: 'mysqlMaintenanceGet',
				action: 'Get MySQL maintenance',
			},
			{
				name: 'mysqlMaintenanceUpdatePut',
				value: 'mysqlMaintenanceUpdatePut',
				action: 'Update MySQL maintenance',
			},
			{
				name: 'mysqlMetricGet',
				value: 'mysqlMetricGet',
				action: 'Get MySQL metric',
			},
			{
				name: 'mysqlPrometheusGet',
				value: 'mysqlPrometheusGet',
				action: 'Get MySQL prometheus',
			},
			{
				name: 'mysqlCertificateListGet',
				value: 'mysqlCertificateListGet',
				action: 'List MySQL certificates',
			},
			{
				name: 'mysqlCertificateCreatePost',
				value: 'mysqlCertificateCreatePost',
				action: 'Create MySQL certificate',
			},
			{
				name: 'mysqlIntegrationListGet',
				value: 'mysqlIntegrationListGet',
				action: 'List MySQL integrations',
			},
			{
				name: 'mysqlIntegrationCreatePost',
				value: 'mysqlIntegrationCreatePost',
				action: 'Create MySQL integration',
			},
			{
				name: 'opensearchAdvancedConfigurationListGet',
				value: 'opensearchAdvancedConfigurationListGet',
				action: 'List Advanced Configuration OpenSearch',
			},
			{
				name: 'opensearchAdvancedConfigurationUpdatePut',
				value: 'opensearchAdvancedConfigurationUpdatePut',
				action: 'Update Advanced Configuration OpenSearch',
			},
			{
				name: 'opensearchBackupGetGet',
				value: 'opensearchBackupGetGet',
				action: 'Get Backup OpenSearch',
			},
			{
				name: 'opensearchBackupListGet',
				value: 'opensearchBackupListGet',
				action: 'List Backup OpenSearch',
			},
			{
				name: 'opensearchCapabilitiesAdvancedConfigurationListGet',
				value: 'opensearchCapabilitiesAdvancedConfigurationListGet',
				action: 'List Capabilities Advanced Configuration OpenSearch',
			},
			{
				name: 'opensearchCapabilitiesBackupRegionsListGet',
				value: 'opensearchCapabilitiesBackupRegionsListGet',
				action: 'List Capabilities Backup Regions OpenSearch',
			},
			{
				name: 'opensearchCapabilitiesIntegrationListGet',
				value: 'opensearchCapabilitiesIntegrationListGet',
				action: 'List Capabilities Integration OpenSearch',
			},
			{
				name: 'opensearchClusterCreatePost',
				value: 'opensearchClusterCreatePost',
				action: 'Create Cluster OpenSearch',
			},
			{
				name: 'opensearchClusterDeleteDelete',
				value: 'opensearchClusterDeleteDelete',
				action: 'Delete Cluster OpenSearch',
			},
			{
				name: 'opensearchClusterGetGet',
				value: 'opensearchClusterGetGet',
				action: 'Get Cluster OpenSearch',
			},
			{
				name: 'opensearchClusterListGet',
				value: 'opensearchClusterListGet',
				action: 'List Cluster OpenSearch',
			},
			{
				name: 'opensearchClusterUpdatePut',
				value: 'opensearchClusterUpdatePut',
				action: 'Update Cluster OpenSearch',
			},
			{
				name: 'opensearchIndexDeleteDelete',
				value: 'opensearchIndexDeleteDelete',
				action: 'Delete Index OpenSearch',
			},
			{
				name: 'opensearchIndexGetGet',
				value: 'opensearchIndexGetGet',
				action: 'Get Index OpenSearch',
			},
			{
				name: 'opensearchIndexListGet',
				value: 'opensearchIndexListGet',
				action: 'List Index OpenSearch',
			},
			{
				name: 'opensearchIntegrationCreatePost',
				value: 'opensearchIntegrationCreatePost',
				action: 'Create Integration OpenSearch',
			},
			{
				name: 'opensearchIntegrationDeleteDelete',
				value: 'opensearchIntegrationDeleteDelete',
				action: 'Delete Integration OpenSearch',
			},
			{
				name: 'opensearchIntegrationGetGet',
				value: 'opensearchIntegrationGetGet',
				action: 'Get Integration OpenSearch',
			},
			{
				name: 'opensearchIntegrationListGet',
				value: 'opensearchIntegrationListGet',
				action: 'List Integration OpenSearch',
			},
			{
				name: 'opensearchIpRestrictionCreatePost',
				value: 'opensearchIpRestrictionCreatePost',
				action: 'Create Ip Restriction OpenSearch',
			},
			{
				name: 'opensearchIpRestrictionDeleteDelete',
				value: 'opensearchIpRestrictionDeleteDelete',
				action: 'Delete Ip Restriction OpenSearch',
			},
			{
				name: 'opensearchIpRestrictionGetGet',
				value: 'opensearchIpRestrictionGetGet',
				action: 'Get Ip Restriction OpenSearch',
			},
			{
				name: 'opensearchIpRestrictionListGet',
				value: 'opensearchIpRestrictionListGet',
				action: 'List Ip Restriction OpenSearch',
			},
			{
				name: 'opensearchIpRestrictionUpdatePut',
				value: 'opensearchIpRestrictionUpdatePut',
				action: 'Update Ip Restriction OpenSearch',
			},
			{
				name: 'opensearchLogKindGet',
				value: 'opensearchLogKindGet',
				action: ' Cluster OpenSearch',
			},
			{
				name: 'opensearchLogKindListGet',
				value: 'opensearchLogKindListGet',
				action: 'List Log Kind OpenSearch',
			},
			{
				name: 'opensearchLogSubscriptionCreatePost',
				value: 'opensearchLogSubscriptionCreatePost',
				action: 'Create Log Subscription OpenSearch',
			},
			{
				name: 'opensearchLogSubscriptionDeleteDelete',
				value: 'opensearchLogSubscriptionDeleteDelete',
				action: 'Delete Log Subscription OpenSearch',
			},
			{
				name: 'opensearchLogSubscriptionGet',
				value: 'opensearchLogSubscriptionGet',
				action: ' Cluster OpenSearch',
			},
			{
				name: 'opensearchLogSubscriptionListGet',
				value: 'opensearchLogSubscriptionListGet',
				action: 'List Log Subscription OpenSearch',
			},
			{
				name: 'opensearchLogUrlCreatePost',
				value: 'opensearchLogUrlCreatePost',
				action: 'Create Log Url OpenSearch',
			},
			{
				name: 'opensearchLogsListGet',
				value: 'opensearchLogsListGet',
				action: 'List Logs OpenSearch',
			},
			{
				name: 'opensearchMaintenanceApplyPost',
				value: 'opensearchMaintenanceApplyPost',
				action: ' Cluster OpenSearch',
			},
			{
				name: 'opensearchMaintenanceGetGet',
				value: 'opensearchMaintenanceGetGet',
				action: 'Get Maintenance OpenSearch',
			},
			{
				name: 'opensearchMaintenanceListGet',
				value: 'opensearchMaintenanceListGet',
				action: 'List Maintenance OpenSearch',
			},
			{
				name: 'opensearchMetricGetGet',
				value: 'opensearchMetricGetGet',
				action: 'Get Metric OpenSearch',
			},
			{
				name: 'opensearchMetricListGet',
				value: 'opensearchMetricListGet',
				action: 'List Metric OpenSearch',
			},
			{
				name: 'opensearchNodeGetGet',
				value: 'opensearchNodeGetGet',
				action: 'Get Node OpenSearch',
			},
			{
				name: 'opensearchNodeListGet',
				value: 'opensearchNodeListGet',
				action: 'List Node OpenSearch',
			},
			{
				name: 'opensearchPatternCreatePost',
				value: 'opensearchPatternCreatePost',
				action: 'Create Pattern OpenSearch',
			},
			{
				name: 'opensearchPatternDeleteDelete',
				value: 'opensearchPatternDeleteDelete',
				action: 'Delete Pattern OpenSearch',
			},
			{
				name: 'opensearchPatternGetGet',
				value: 'opensearchPatternGetGet',
				action: 'Get Pattern OpenSearch',
			},
			{
				name: 'opensearchPatternListGet',
				value: 'opensearchPatternListGet',
				action: 'List Pattern OpenSearch',
			},
			{
				name: 'opensearchPermissionsListGet',
				value: 'opensearchPermissionsListGet',
				action: 'List Permissions OpenSearch',
			},
			{
				name: 'opensearchPrometheusCredentialsResetPost',
				value: 'opensearchPrometheusCredentialsResetPost',
				action: ' Cluster OpenSearch',
			},
			{
				name: 'opensearchPrometheusListGet',
				value: 'opensearchPrometheusListGet',
				action: 'List Prometheus OpenSearch',
			},
			{
				name: 'opensearchUserCreatePost',
				value: 'opensearchUserCreatePost',
				action: 'Create User OpenSearch',
			},
			{
				name: 'opensearchUserCredentialsResetPost',
				value: 'opensearchUserCredentialsResetPost',
				action: ' Cluster OpenSearch',
			},
			{
				name: 'opensearchUserDeleteDelete',
				value: 'opensearchUserDeleteDelete',
				action: 'Delete User OpenSearch',
			},
			{
				name: 'opensearchUserGetGet',
				value: 'opensearchUserGetGet',
				action: 'Get User OpenSearch',
			},
			{
				name: 'opensearchUserListGet',
				value: 'opensearchUserListGet',
				action: 'List User OpenSearch',
			},
			{
				name: 'opensearchUserUpdatePut',
				value: 'opensearchUserUpdatePut',
				action: 'Update User OpenSearch',
			},
			{
				name: 'postgresqlClusterListGet',
				value: 'postgresqlClusterListGet',
				action: 'List PostgreSQL clusters in a project',
			},
			{
				name: 'postgresqlClusterGetGet',
				value: 'postgresqlClusterGetGet',
				action: 'Get PostgreSQL cluster',
			},
			{
				name: 'postgresqlClusterCreatePost',
				value: 'postgresqlClusterCreatePost',
				action: 'Create PostgreSQL cluster',
			},
			{
				name: 'postgresqlClusterUpdatePut',
				value: 'postgresqlClusterUpdatePut',
				action: 'Update PostgreSQL cluster',
			},
			{
				name: 'postgresqlClusterDeleteDelete',
				value: 'postgresqlClusterDeleteDelete',
				action: 'Delete PostgreSQL cluster',
			},
			{
				name: 'postgresqlBackupListGet',
				value: 'postgresqlBackupListGet',
				action: 'List PostgreSQL backups',
			},
			{
				name: 'postgresqlBackupCreatePost',
				value: 'postgresqlBackupCreatePost',
				action: 'Create PostgreSQL backup',
			},
			{
				name: 'postgresqlBackupGetGet',
				value: 'postgresqlBackupGetGet',
				action: 'Get PostgreSQL backup',
			},
			{
				name: 'postgresqlBackupDeleteDelete',
				value: 'postgresqlBackupDeleteDelete',
				action: 'Delete PostgreSQL backup',
			},
			{
				name: 'postgresqlUserListGet',
				value: 'postgresqlUserListGet',
				action: 'List PostgreSQL users',
			},
			{
				name: 'postgresqlUserCreatePost',
				value: 'postgresqlUserCreatePost',
				action: 'Create PostgreSQL user',
			},
			{
				name: 'postgresqlUserGetGet',
				value: 'postgresqlUserGetGet',
				action: 'Get PostgreSQL user',
			},
			{
				name: 'postgresqlUserUpdatePut',
				value: 'postgresqlUserUpdatePut',
				action: 'Update PostgreSQL user',
			},
			{
				name: 'postgresqlUserDeleteDelete',
				value: 'postgresqlUserDeleteDelete',
				action: 'Delete PostgreSQL user',
			},
			{
				name: 'postgresqlNodeListGet',
				value: 'postgresqlNodeListGet',
				action: 'List PostgreSQL nodes',
			},
			{
				name: 'postgresqlNodeCreatePost',
				value: 'postgresqlNodeCreatePost',
				action: 'Create PostgreSQL node',
			},
			{
				name: 'postgresqlNodeGetGet',
				value: 'postgresqlNodeGetGet',
				action: 'Get PostgreSQL node',
			},
			{
				name: 'postgresqlNodeUpdatePut',
				value: 'postgresqlNodeUpdatePut',
				action: 'Update PostgreSQL node',
			},
			{
				name: 'postgresqlNodeDeleteDelete',
				value: 'postgresqlNodeDeleteDelete',
				action: 'Delete PostgreSQL node',
			},
			{
				name: 'postgresqlIpRestrictionListGet',
				value: 'postgresqlIpRestrictionListGet',
				action: 'List PostgreSQL IP restrictions',
			},
			{
				name: 'postgresqlIpRestrictionCreatePost',
				value: 'postgresqlIpRestrictionCreatePost',
				action: 'Create PostgreSQL IP restriction',
			},
			{
				name: 'postgresqlLogSubscriptionListGet',
				value: 'postgresqlLogSubscriptionListGet',
				action: 'List PostgreSQL log subscriptions',
			},
			{
				name: 'postgresqlLogSubscriptionCreatePost',
				value: 'postgresqlLogSubscriptionCreatePost',
				action: 'Create PostgreSQL log subscription',
			},
			{
				name: 'postgresqlLogSubscriptionGetGet',
				value: 'postgresqlLogSubscriptionGetGet',
				action: 'Get PostgreSQL log subscription',
			},
			{
				name: 'postgresqlMaintenanceGet',
				value: 'postgresqlMaintenanceGet',
				action: 'Get PostgreSQL maintenance',
			},
			{
				name: 'postgresqlMaintenanceUpdatePut',
				value: 'postgresqlMaintenanceUpdatePut',
				action: 'Update PostgreSQL maintenance',
			},
			{
				name: 'postgresqlMetricGet',
				value: 'postgresqlMetricGet',
				action: 'Get PostgreSQL metric',
			},
			{
				name: 'postgresqlPrometheusGet',
				value: 'postgresqlPrometheusGet',
				action: 'Get PostgreSQL prometheus',
			},
			{
				name: 'postgresqlCertificateListGet',
				value: 'postgresqlCertificateListGet',
				action: 'List PostgreSQL certificates',
			},
			{
				name: 'postgresqlCertificateCreatePost',
				value: 'postgresqlCertificateCreatePost',
				action: 'Create PostgreSQL certificate',
			},
			{
				name: 'postgresqlIntegrationListGet',
				value: 'postgresqlIntegrationListGet',
				action: 'List PostgreSQL integrations',
			},
			{
				name: 'postgresqlIntegrationCreatePost',
				value: 'postgresqlIntegrationCreatePost',
				action: 'Create PostgreSQL integration',
			},
			{
				name: 'valkeyClusterListGet',
				value: 'valkeyClusterListGet',
				action: 'List Valkey clusters in a project',
			},
			{
				name: 'valkeyClusterGetGet',
				value: 'valkeyClusterGetGet',
				action: 'Get Valkey cluster',
			},
			{
				name: 'valkeyClusterCreatePost',
				value: 'valkeyClusterCreatePost',
				action: 'Create Valkey cluster',
			},
			{
				name: 'valkeyClusterUpdatePut',
				value: 'valkeyClusterUpdatePut',
				action: 'Update Valkey cluster',
			},
			{
				name: 'valkeyClusterDeleteDelete',
				value: 'valkeyClusterDeleteDelete',
				action: 'Delete Valkey cluster',
			},
			{
				name: 'valkeyBackupListGet',
				value: 'valkeyBackupListGet',
				action: 'List Valkey backups',
			},
			{
				name: 'valkeyBackupCreatePost',
				value: 'valkeyBackupCreatePost',
				action: 'Create Valkey backup',
			},
			{
				name: 'valkeyBackupGetGet',
				value: 'valkeyBackupGetGet',
				action: 'Get Valkey backup',
			},
			{
				name: 'valkeyBackupDeleteDelete',
				value: 'valkeyBackupDeleteDelete',
				action: 'Delete Valkey backup',
			},
			{
				name: 'valkeyUserListGet',
				value: 'valkeyUserListGet',
				action: 'List Valkey users',
			},
			{
				name: 'valkeyUserCreatePost',
				value: 'valkeyUserCreatePost',
				action: 'Create Valkey user',
			},
			{
				name: 'valkeyUserGetGet',
				value: 'valkeyUserGetGet',
				action: 'Get Valkey user',
			},
			{
				name: 'valkeyUserUpdatePut',
				value: 'valkeyUserUpdatePut',
				action: 'Update Valkey user',
			},
			{
				name: 'valkeyUserDeleteDelete',
				value: 'valkeyUserDeleteDelete',
				action: 'Delete Valkey user',
			},
			{
				name: 'valkeyNodeListGet',
				value: 'valkeyNodeListGet',
				action: 'List Valkey nodes',
			},
			{
				name: 'valkeyNodeCreatePost',
				value: 'valkeyNodeCreatePost',
				action: 'Create Valkey node',
			},
			{
				name: 'valkeyNodeGetGet',
				value: 'valkeyNodeGetGet',
				action: 'Get Valkey node',
			},
			{
				name: 'valkeyNodeUpdatePut',
				value: 'valkeyNodeUpdatePut',
				action: 'Update Valkey node',
			},
			{
				name: 'valkeyNodeDeleteDelete',
				value: 'valkeyNodeDeleteDelete',
				action: 'Delete Valkey node',
			},
			{
				name: 'valkeyIpRestrictionListGet',
				value: 'valkeyIpRestrictionListGet',
				action: 'List Valkey IP restrictions',
			},
			{
				name: 'valkeyIpRestrictionCreatePost',
				value: 'valkeyIpRestrictionCreatePost',
				action: 'Create Valkey IP restriction',
			},
			{
				name: 'valkeyLogSubscriptionListGet',
				value: 'valkeyLogSubscriptionListGet',
				action: 'List Valkey log subscriptions',
			},
			{
				name: 'valkeyLogSubscriptionCreatePost',
				value: 'valkeyLogSubscriptionCreatePost',
				action: 'Create Valkey log subscription',
			},
			{
				name: 'valkeyLogSubscriptionGetGet',
				value: 'valkeyLogSubscriptionGetGet',
				action: 'Get Valkey log subscription',
			},
			{
				name: 'valkeyMaintenanceGet',
				value: 'valkeyMaintenanceGet',
				action: 'Get Valkey maintenance',
			},
			{
				name: 'valkeyMaintenanceUpdatePut',
				value: 'valkeyMaintenanceUpdatePut',
				action: 'Update Valkey maintenance',
			},
			{
				name: 'valkeyMetricGet',
				value: 'valkeyMetricGet',
				action: 'Get Valkey metric',
			},
			{
				name: 'valkeyPrometheusGet',
				value: 'valkeyPrometheusGet',
				action: 'Get Valkey prometheus',
			},
			{
				name: 'valkeyCertificateListGet',
				value: 'valkeyCertificateListGet',
				action: 'List Valkey certificates',
			},
			{
				name: 'valkeyCertificateCreatePost',
				value: 'valkeyCertificateCreatePost',
				action: 'Create Valkey certificate',
			},
			{
				name: 'valkeyIntegrationListGet',
				value: 'valkeyIntegrationListGet',
				action: 'List Valkey integrations',
			},
			{
				name: 'valkeyIntegrationCreatePost',
				value: 'valkeyIntegrationCreatePost',
				action: 'Create Valkey integration',
			},
			{
				name: 'kubeAuditLogsPost',
				value: 'kubeAuditLogsPost',
				action: 'Create Kubernetes audit logs',
			},
			{
				name: 'kubeCustomizationGet',
				value: 'kubeCustomizationGet',
				action: 'Get Kubernetes customization',
			},
			{
				name: 'kubeCustomizationUpdatePut',
				value: 'kubeCustomizationUpdatePut',
				action: 'Update Kubernetes customization',
			},
			{
				name: 'kubeDeleteDelete',
				value: 'kubeDeleteDelete',
				action: 'Delete Kubernetes cluster',
			},
			{
				name: 'kubeFlavorsGet',
				value: 'kubeFlavorsGet',
				action: 'List Kubernetes flavors',
			},
			{
				name: 'kubeGetGet',
				value: 'kubeGetGet',
				action: 'Get Kubernetes cluster',
			},
			{
				name: 'kubeIpRestrictionsDeleteDelete',
				value: 'kubeIpRestrictionsDeleteDelete',
				action: 'Delete Kubernetes IP restriction',
			},
			{
				name: 'kubeIpRestrictionsGet',
				value: 'kubeIpRestrictionsGet',
				action: 'List Kubernetes IP restrictions',
			},
			{
				name: 'kubeIpRestrictionsPost',
				value: 'kubeIpRestrictionsPost',
				action: 'Create Kubernetes IP restriction',
			},
			{
				name: 'kubeIpRestrictionsUpdatePut',
				value: 'kubeIpRestrictionsUpdatePut',
				action: 'Update Kubernetes IP restrictions',
			},
			{
				name: 'kubeKubeconfigPost',
				value: 'kubeKubeconfigPost',
				action: 'Get Kubernetes kubeconfig',
			},
			{
				name: 'kubeKubeconfigResetPost',
				value: 'kubeKubeconfigResetPost',
				action: 'Reset Kubernetes kubeconfig',
			},
			{
				name: 'kubeListGet',
				value: 'kubeListGet',
				action: 'List Kubernetes clusters in a project',
			},
			{
				name: 'kubeLogSubscriptionDeleteDelete',
				value: 'kubeLogSubscriptionDeleteDelete',
				action: 'Delete Kubernetes log subscription',
			},
			{
				name: 'kubeLogSubscriptionGet',
				value: 'kubeLogSubscriptionGet',
				action: 'Get Kubernetes log subscription',
			},
			{
				name: 'kubeLogSubscriptionPost',
				value: 'kubeLogSubscriptionPost',
				action: 'Create Kubernetes log subscription',
			},
			{
				name: 'kubeLogSubscriptionListGet',
				value: 'kubeLogSubscriptionListGet',
				action: 'List Kubernetes log subscriptions',
			},
			{
				name: 'kubeLogUrlPost',
				value: 'kubeLogUrlPost',
				action: 'Get Kubernetes log URL',
			},
			{
				name: 'kubeMetricsEtcdUsageGet',
				value: 'kubeMetricsEtcdUsageGet',
				action: 'Get Kubernetes etcd usage metrics',
			},
			{
				name: 'kubeNodeDeleteDelete',
				value: 'kubeNodeDeleteDelete',
				action: 'Delete Kubernetes node',
			},
			{
				name: 'kubeNodeGet',
				value: 'kubeNodeGet',
				action: 'Get Kubernetes node',
			},
			{
				name: 'kubeNodeListGet',
				value: 'kubeNodeListGet',
				action: 'List Kubernetes nodes',
			},
			{
				name: 'kubeNodepoolCreatePost',
				value: 'kubeNodepoolCreatePost',
				action: 'Create Kubernetes nodepool',
			},
			{
				name: 'kubeNodepoolListGet',
				value: 'kubeNodepoolListGet',
				action: 'List Kubernetes nodepools',
			},
			{
				name: 'kubeNodepoolDeleteDelete',
				value: 'kubeNodepoolDeleteDelete',
				action: 'Delete Kubernetes nodepool',
			},
			{
				name: 'kubeNodepoolGetGet',
				value: 'kubeNodepoolGetGet',
				action: 'Get Kubernetes nodepool',
			},
			{
				name: 'kubeNodepoolListNodepoolNodesGet',
				value: 'kubeNodepoolListNodepoolNodesGet',
				action: 'List Kubernetes nodepool nodes',
			},
			{
				name: 'kubeNodepoolUpdatePut',
				value: 'kubeNodepoolUpdatePut',
				action: 'Update Kubernetes nodepool',
			},
			{
				name: 'kubeOpenIdConnectDeleteDelete',
				value: 'kubeOpenIdConnectDeleteDelete',
				action: 'Delete Kubernetes OpenID Connect configuration',
			},
			{
				name: 'kubeOpenIdConnectGet',
				value: 'kubeOpenIdConnectGet',
				action: 'Get Kubernetes OpenID Connect configuration',
			},
			{
				name: 'kubeOpenIdConnectPost',
				value: 'kubeOpenIdConnectPost',
				action: 'Create Kubernetes OpenID Connect configuration',
			},
			{
				name: 'kubeOpenIdConnectUpdatePut',
				value: 'kubeOpenIdConnectUpdatePut',
				action: 'Update Kubernetes OpenID Connect configuration',
			},
			{
				name: 'kubePrivateNetworkConfigurationGet',
				value: 'kubePrivateNetworkConfigurationGet',
				action: 'Get Kubernetes private network configuration',
			},
			{
				name: 'kubePrivateNetworkConfigurationUpdatePut',
				value: 'kubePrivateNetworkConfigurationUpdatePut',
				action: 'Update Kubernetes private network configuration',
			},
			{
				name: 'kubeResetPost',
				value: 'kubeResetPost',
				action: 'Reset Kubernetes cluster',
			},
			{
				name: 'kubeRestartPost',
				value: 'kubeRestartPost',
				action: 'Restart Kubernetes cluster',
			},
			{
				name: 'kubeUpdateLoadBalancersSubnetIdUpdatePut',
				value: 'kubeUpdateLoadBalancersSubnetIdUpdatePut',
				action: 'Update Kubernetes load balancer subnet ID',
			},
			{
				name: 'kubeUpdatePolicyUpdatePut',
				value: 'kubeUpdatePolicyUpdatePut',
				action: 'Update Kubernetes update policy',
			},
			{
				name: 'kubeUpdatePost',
				value: 'kubeUpdatePost',
				action: 'Update Kubernetes cluster',
			},
			{
				name: 'kubeUpdatePut',
				value: 'kubeUpdatePut',
				action: 'Update Kubernetes cluster',
			},
			{
				name: 'instanceActiveMonthlyBillingPost',
				value: 'instanceActiveMonthlyBillingPost',
				action: 'Activate monthly billing for instance',
			},
			{
				name: 'instanceApplicationAccessPost',
				value: 'instanceApplicationAccessPost',
				action: 'Get instance application access',
			},
			{
				name: 'instanceBulkPost',
				value: 'instanceBulkPost',
				action: 'Bulk create instances',
			},
			{
				name: 'instanceCreatePost',
				value: 'instanceCreatePost',
				action: 'Create instance',
			},
			{
				name: 'instanceDeleteDelete',
				value: 'instanceDeleteDelete',
				action: 'Delete instance',
			},
			{
				name: 'instanceGetGet',
				value: 'instanceGetGet',
				action: 'Get instance',
			},
			{
				name: 'instanceGroupCreatePost',
				value: 'instanceGroupCreatePost',
				action: 'Create instance group',
			},
			{
				name: 'instanceGroupDeleteDelete',
				value: 'instanceGroupDeleteDelete',
				action: 'Delete instance group',
			},
			{
				name: 'instanceGroupGetGet',
				value: 'instanceGroupGetGet',
				action: 'Get instance group',
			},
			{
				name: 'instanceGroupListGet',
				value: 'instanceGroupListGet',
				action: 'List instance groups',
			},
			{
				name: 'instanceInterfaceCreatePost',
				value: 'instanceInterfaceCreatePost',
				action: 'Create instance interface',
			},
			{
				name: 'instanceInterfaceDeleteDelete',
				value: 'instanceInterfaceDeleteDelete',
				action: 'Delete instance interface',
			},
			{
				name: 'instanceInterfaceGetGet',
				value: 'instanceInterfaceGetGet',
				action: 'Get instance interface',
			},
			{
				name: 'instanceInterfaceListGet',
				value: 'instanceInterfaceListGet',
				action: 'List instance interfaces',
			},
			{
				name: 'instanceListGet',
				value: 'instanceListGet',
				action: 'List instances in a project',
			},
			{
				name: 'instanceRebootPost',
				value: 'instanceRebootPost',
				action: 'Reboot instance',
			},
			{
				name: 'instanceReinstallPost',
				value: 'instanceReinstallPost',
				action: 'Reinstall instance',
			},
			{
				name: 'instanceRescueModePost',
				value: 'instanceRescueModePost',
				action: 'Set instance rescue mode',
			},
			{
				name: 'instanceResizePost',
				value: 'instanceResizePost',
				action: 'Resize instance',
			},
			{
				name: 'instanceResumePost',
				value: 'instanceResumePost',
				action: 'Resume instance',
			},
			{
				name: 'instanceShelvePost',
				value: 'instanceShelvePost',
				action: 'Shelve instance',
			},
			{
				name: 'instanceSnapshotPost',
				value: 'instanceSnapshotPost',
				action: 'Create instance snapshot',
			},
			{
				name: 'instanceStartPost',
				value: 'instanceStartPost',
				action: 'Start instance',
			},
			{
				name: 'instanceStopPost',
				value: 'instanceStopPost',
				action: 'Stop instance',
			},
			{
				name: 'instanceUnshelvePost',
				value: 'instanceUnshelvePost',
				action: 'Unshelve instance',
			},
			{
				name: 'instanceUpdatePut',
				value: 'instanceUpdatePut',
				action: 'Update instance',
			},
			{
				name: 'instanceVncPost',
				value: 'instanceVncPost',
				action: 'Get instance VNC console',
			},
			{
				name: 'networkCreatePrivateNetworkPost',
				value: 'networkCreatePrivateNetworkPost',
				action: 'Create private network',
			},
			{
				name: 'networkCreateSubnetPost',
				value: 'networkCreateSubnetPost',
				action: 'Create subnet',
			},
			{
				name: 'networkDeletePrivateNetworkDelete',
				value: 'networkDeletePrivateNetworkDelete',
				action: 'Delete private network',
			},
			{
				name: 'networkDeleteSubnetDelete',
				value: 'networkDeleteSubnetDelete',
				action: 'Delete subnet',
			},
			{
				name: 'networkGetPrivateNetworkDetailGet',
				value: 'networkGetPrivateNetworkDetailGet',
				action: 'Get private network',
			},
			{
				name: 'networkGetSubnetDetailGet',
				value: 'networkGetSubnetDetailGet',
				action: 'Get subnet',
			},
			{
				name: 'networkListPrivateNetworksGet',
				value: 'networkListPrivateNetworksGet',
				action: 'List private networks in a project',
			},
			{
				name: 'networkListPublicNetworksGet',
				value: 'networkListPublicNetworksGet',
				action: 'List public networks in a project',
			},
			{
				name: 'networkListSubnetsGet',
				value: 'networkListSubnetsGet',
				action: 'List subnets in a project',
			},
			{
				name: 'networkUpdatePrivateNetworkPut',
				value: 'networkUpdatePrivateNetworkPut',
				action: 'Update private network',
			},
			{
				name: 'networkUpdateSubnetPut',
				value: 'networkUpdateSubnetPut',
				action: 'Update subnet',
			},
			{
				name: 'regionGetGet',
				value: 'regionGetGet',
				action: 'Get region',
			},
			{
				name: 'regionListGet',
				value: 'regionListGet',
				action: 'List regions in a project',
			},
			{
				name: 'regionShareCreatePost',
				value: 'regionShareCreatePost',
				action: 'Create region share',
			},
			{
				name: 'regionShareDeleteDelete',
				value: 'regionShareDeleteDelete',
				action: 'Delete region share',
			},
			{
				name: 'regionShareGetGet',
				value: 'regionShareGetGet',
				action: 'Get region share',
			},
			{
				name: 'regionShareListGet',
				value: 'regionShareListGet',
				action: 'List region shares',
			},
			{
				name: 'regionShareSnapshotCreatePost',
				value: 'regionShareSnapshotCreatePost',
				action: 'Create region share snapshot',
			},
			{
				name: 'regionShareSnapshotDeleteDelete',
				value: 'regionShareSnapshotDeleteDelete',
				action: 'Delete region share snapshot',
			},
			{
				name: 'regionShareSnapshotGetGet',
				value: 'regionShareSnapshotGetGet',
				action: 'Get region share snapshot',
			},
			{
				name: 'regionShareSnapshotListGet',
				value: 'regionShareSnapshotListGet',
				action: 'List region share snapshots',
			},
			{
				name: 'regionShareUpdatePut',
				value: 'regionShareUpdatePut',
				action: 'Update region share',
			},
			{
				name: 'regionVolumeCreatePost',
				value: 'regionVolumeCreatePost',
				action: 'Create region volume',
			},
			{
				name: 'regionVolumeDeleteDelete',
				value: 'regionVolumeDeleteDelete',
				action: 'Delete region volume',
			},
			{
				name: 'regionVolumeGetGet',
				value: 'regionVolumeGetGet',
				action: 'Get region volume',
			},
			{
				name: 'regionVolumeListGet',
				value: 'regionVolumeListGet',
				action: 'List region volumes',
			},
			{
				name: 'regionVolumeUpdatePut',
				value: 'regionVolumeUpdatePut',
				action: 'Update region volume',
			},
			{
				name: 'regionWorkflowBackupCreatePost',
				value: 'regionWorkflowBackupCreatePost',
				action: 'Create region workflow backup',
			},
			{
				name: 'regionWorkflowBackupDeleteDelete',
				value: 'regionWorkflowBackupDeleteDelete',
				action: 'Delete region workflow backup',
			},
			{
				name: 'regionWorkflowBackupGetGet',
				value: 'regionWorkflowBackupGetGet',
				action: 'Get region workflow backup',
			},
			{
				name: 'regionWorkflowBackupUpdatePut',
				value: 'regionWorkflowBackupUpdatePut',
				action: 'Update region workflow backup',
			},
			{
				name: 'userCreatePost',
				value: 'userCreatePost',
				action: 'Create user',
			},
			{
				name: 'userCreateS3CredentialSecretPost',
				value: 'userCreateS3CredentialSecretPost',
				action: 'Create user S3 credential secret',
			},
			{
				name: 'userCreateUserPolicyPost',
				value: 'userCreateUserPolicyPost',
				action: 'Create user policy',
			},
			{
				name: 'userCreateUserRolePost',
				value: 'userCreateUserRolePost',
				action: 'Create user role',
			},
			{
				name: 'userCreateUserS3CredentialsPost',
				value: 'userCreateUserS3CredentialsPost',
				action: 'Create user S3 credentials',
			},
			{
				name: 'userCreateUserTokenPost',
				value: 'userCreateUserTokenPost',
				action: 'Create user token',
			},
			{
				name: 'userDeleteDelete',
				value: 'userDeleteDelete',
				action: 'Delete user',
			},
			{
				name: 'userDeleteUserRoleDelete',
				value: 'userDeleteUserRoleDelete',
				action: 'Delete user role',
			},
			{
				name: 'userDeleteUserS3CredentialDelete',
				value: 'userDeleteUserS3CredentialDelete',
				action: 'Delete user S3 credential',
			},
			{
				name: 'userGetDetailGet',
				value: 'userGetDetailGet',
				action: 'Get user',
			},
			{
				name: 'userGetUserConfigurationGet',
				value: 'userGetUserConfigurationGet',
				action: 'Get user configuration',
			},
			{
				name: 'userGetUserOpenrcGet',
				value: 'userGetUserOpenrcGet',
				action: 'Get user OpenRC file',
			},
			{
				name: 'userGetUserPolicyGet',
				value: 'userGetUserPolicyGet',
				action: 'Get user policy',
			},
			{
				name: 'userGetUserRcloneGet',
				value: 'userGetUserRcloneGet',
				action: 'Get user rclone configuration',
			},
			{
				name: 'userGetUserRoleDetailGet',
				value: 'userGetUserRoleDetailGet',
				action: 'Get user role',
			},
			{
				name: 'userGetUserRoleGet',
				value: 'userGetUserRoleGet',
				action: 'List user roles',
			},
			{
				name: 'userGetUserS3CredentialDetailGet',
				value: 'userGetUserS3CredentialDetailGet',
				action: 'Get user S3 credential',
			},
			{
				name: 'userGetUserS3CredentialsGet',
				value: 'userGetUserS3CredentialsGet',
				action: 'List user S3 credentials',
			},
			{
				name: 'userListGet',
				value: 'userListGet',
				action: 'List users in a project',
			},
			{
				name: 'userRegeneratePasswordPost',
				value: 'userRegeneratePasswordPost',
				action: 'Regenerate user password',
			},
			{
				name: 'userUpdateUserRolePut',
				value: 'userUpdateUserRolePut',
				action: 'Update user role',
			},
			{
				name: 'aclCreatePost',
				value: 'aclCreatePost',
				action: 'Create ACL',
			},
			{
				name: 'aclDeleteDelete',
				value: 'aclDeleteDelete',
				action: 'Delete ACL',
			},
			{
				name: 'aclListGet',
				value: 'aclListGet',
				action: 'List ACLs in a project',
			},
			{
				name: 'activateMonthlyBillingPost',
				value: 'activateMonthlyBillingPost',
				action: 'Activate monthly billing',
			},
			{
				name: 'alertingCreatePost',
				value: 'alertingCreatePost',
				action: 'Create alert',
			},
			{
				name: 'alertingDeleteDelete',
				value: 'alertingDeleteDelete',
				action: 'Delete alert',
			},
			{
				name: 'alertingGetDetailGet',
				value: 'alertingGetDetailGet',
				action: 'Get alert',
			},
			{
				name: 'alertingListGet',
				value: 'alertingListGet',
				action: 'List alerts in a project',
			},
			{
				name: 'alertingUpdatePut',
				value: 'alertingUpdatePut',
				action: 'Update alert',
			},
			{
				name: 'billListGet',
				value: 'billListGet',
				action: 'List bills',
			},
			{
				name: 'cancelPost',
				value: 'cancelPost',
				action: 'Cancel project',
			},
			{
				name: 'capabilitiesGetKubeDetailGet',
				value: 'capabilitiesGetKubeDetailGet',
				action: 'Get Kube capabilities',
			},
			{
				name: 'capabilitiesGetLoadbalancerDetailGet',
				value: 'capabilitiesGetLoadbalancerDetailGet',
				action: 'Get load balancer capabilities',
			},
			{
				name: 'capabilitiesGetRegionDetailGet',
				value: 'capabilitiesGetRegionDetailGet',
				action: 'Get region capabilities',
			},
			{
				name: 'capabilitiesGetRegionProductDetailGet',
				value: 'capabilitiesGetRegionProductDetailGet',
				action: 'Get region product capabilities',
			},
			{
				name: 'capabilitiesListGet',
				value: 'capabilitiesListGet',
				action: 'List capabilities',
			},
			{
				name: 'capabilitiesListKubeGet',
				value: 'capabilitiesListKubeGet',
				action: 'List Kube capabilities',
			},
			{
				name: 'capabilitiesListLoadbalancerGet',
				value: 'capabilitiesListLoadbalancerGet',
				action: 'List load balancer capabilities',
			},
			{
				name: 'capabilitiesListRegionGet',
				value: 'capabilitiesListRegionGet',
				action: 'List region capabilities',
			},
			{
				name: 'changeContactPost',
				value: 'changeContactPost',
				action: 'Change project contact',
			},
			{
				name: 'confirmTerminationPost',
				value: 'confirmTerminationPost',
				action: 'Confirm termination',
			},
			{
				name: 'containerRegistryCreatePost',
				value: 'containerRegistryCreatePost',
				action: 'Create container registry',
			},
			{
				name: 'containerRegistryCreateUserPost',
				value: 'containerRegistryCreateUserPost',
				action: 'Create registry user',
			},
			{
				name: 'containerRegistryDeleteDelete',
				value: 'containerRegistryDeleteDelete',
				action: 'Delete container registry',
			},
			{
				name: 'containerRegistryDeleteUserDelete',
				value: 'containerRegistryDeleteUserDelete',
				action: 'Delete registry user',
			},
			{
				name: 'containerRegistryGetDetailGet',
				value: 'containerRegistryGetDetailGet',
				action: 'Get container registry',
			},
			{
				name: 'containerRegistryGetUserDetailGet',
				value: 'containerRegistryGetUserDetailGet',
				action: 'Get registry user',
			},
			{
				name: 'containerRegistryListGet',
				value: 'containerRegistryListGet',
				action: 'List container registries in a project',
			},
			{
				name: 'containerRegistryListUsersGet',
				value: 'containerRegistryListUsersGet',
				action: 'List registry users',
			},
			{
				name: 'containerRegistryUpdatePut',
				value: 'containerRegistryUpdatePut',
				action: 'Update container registry',
			},
			{
				name: 'creditGetDetailGet',
				value: 'creditGetDetailGet',
				action: 'Get credit',
			},
			{
				name: 'creditListGet',
				value: 'creditListGet',
				action: 'List credits',
			},
			{
				name: 'flavorGetDetailGet',
				value: 'flavorGetDetailGet',
				action: 'Get flavor',
			},
			{
				name: 'flavorListGet',
				value: 'flavorListGet',
				action: 'List flavors',
			},
			{
				name: 'imageGetDetailGet',
				value: 'imageGetDetailGet',
				action: 'Get image',
			},
			{
				name: 'imageListGet',
				value: 'imageListGet',
				action: 'List images',
			},
			{
				name: 'ipCreatePost',
				value: 'ipCreatePost',
				action: 'Create IP address',
			},
			{
				name: 'ipDeleteDelete',
				value: 'ipDeleteDelete',
				action: 'Delete IP address',
			},
			{
				name: 'ipGetDetailGet',
				value: 'ipGetDetailGet',
				action: 'Get IP address',
			},
			{
				name: 'ipListGet',
				value: 'ipListGet',
				action: 'List IP addresses in a project',
			},
			{
				name: 'ipUpdatePut',
				value: 'ipUpdatePut',
				action: 'Update IP address',
			},
			{
				name: 'labCreatePost',
				value: 'labCreatePost',
				action: 'Create lab',
			},
			{
				name: 'labDeleteDelete',
				value: 'labDeleteDelete',
				action: 'Delete lab',
			},
			{
				name: 'labGetDetailGet',
				value: 'labGetDetailGet',
				action: 'Get lab',
			},
			{
				name: 'labListGet',
				value: 'labListGet',
				action: 'List labs',
			},
			{
				name: 'labUpdatePut',
				value: 'labUpdatePut',
				action: 'Update lab',
			},
			{
				name: 'loadbalancerCreatePost',
				value: 'loadbalancerCreatePost',
				action: 'Create load balancer',
			},
			{
				name: 'loadbalancerDeleteDelete',
				value: 'loadbalancerDeleteDelete',
				action: 'Delete load balancer',
			},
			{
				name: 'loadbalancerGetDetailGet',
				value: 'loadbalancerGetDetailGet',
				action: 'Get load balancer',
			},
			{
				name: 'loadbalancerListGet',
				value: 'loadbalancerListGet',
				action: 'List load balancers in a project',
			},
			{
				name: 'loadbalancerUpdatePut',
				value: 'loadbalancerUpdatePut',
				action: 'Update load balancer',
			},
			{
				name: 'operationGetDetailGet',
				value: 'operationGetDetailGet',
				action: 'Get operation',
			},
			{
				name: 'operationListGet',
				value: 'operationListGet',
				action: 'List operations',
			},
			{
				name: 'quantumGetCapabilitiesDetailGet',
				value: 'quantumGetCapabilitiesDetailGet',
				action: 'Get quantum capability',
			},
			{
				name: 'quantumGetCapabilitiesRegionDetailGet',
				value: 'quantumGetCapabilitiesRegionDetailGet',
				action: 'Get quantum region capability',
			},
			{
				name: 'quantumListCapabilitiesGet',
				value: 'quantumListCapabilitiesGet',
				action: 'List quantum capabilities',
			},
			{
				name: 'quantumListCapabilitiesRegionGet',
				value: 'quantumListCapabilitiesRegionGet',
				action: 'List quantum region capabilities',
			},
			{
				name: 'quotaListGet',
				value: 'quotaListGet',
				action: 'List quota',
			},
			{
				name: 'regionAvailableCheckRegionAvailableGet',
				value: 'regionAvailableCheckRegionAvailableGet',
				action: 'Check region availability',
			},
			{
				name: 'retainPost',
				value: 'retainPost',
				action: 'Retain project',
			},
			{
				name: 'roleListGet',
				value: 'roleListGet',
				action: 'List roles',
			},
			{
				name: 'serviceInfosGetServiceInfosGet',
				value: 'serviceInfosGetServiceInfosGet',
				action: 'Get service information',
			},
			{
				name: 'snapshotsCreatePost',
				value: 'snapshotsCreatePost',
				action: 'Create snapshot',
			},
			{
				name: 'snapshotsDeleteDelete',
				value: 'snapshotsDeleteDelete',
				action: 'Delete snapshot',
			},
			{
				name: 'snapshotsListGet',
				value: 'snapshotsListGet',
				action: 'List snapshots',
			},
			{
				name: 'sshkeyCreatePost',
				value: 'sshkeyCreatePost',
				action: 'Create SSH key',
			},
			{
				name: 'sshkeyDeleteDelete',
				value: 'sshkeyDeleteDelete',
				action: 'Delete SSH key',
			},
			{
				name: 'sshkeyListGet',
				value: 'sshkeyListGet',
				action: 'List SSH keys',
			},
			{
				name: 'storageCreateContainerPost',
				value: 'storageCreateContainerPost',
				action: 'Create storage container',
			},
			{
				name: 'storageDeleteContainerDelete',
				value: 'storageDeleteContainerDelete',
				action: 'Delete storage container',
			},
			{
				name: 'storageDeleteDelete',
				value: 'storageDeleteDelete',
				action: 'Delete storage',
			},
			{
				name: 'storageGetContainerDetailGet',
				value: 'storageGetContainerDetailGet',
				action: 'Get storage container',
			},
			{
				name: 'storageGetDetailGet',
				value: 'storageGetDetailGet',
				action: 'Get storage',
			},
			{
				name: 'storageListContainersGet',
				value: 'storageListContainersGet',
				action: 'List storage containers',
			},
			{
				name: 'storageListGet',
				value: 'storageListGet',
				action: 'List storages in a project',
			},
			{
				name: 'storageUpdateContainerPut',
				value: 'storageUpdateContainerPut',
				action: 'Update storage container',
			},
			{
				name: 'storageUpdatePut',
				value: 'storageUpdatePut',
				action: 'Update storage',
			},
			{
				name: 'terminatePost',
				value: 'terminatePost',
				action: 'Terminate project',
			},
			{
				name: 'unleashPost',
				value: 'unleashPost',
				action: 'Unleash project',
			},
			{
				name: 'usageGetCurrentGet',
				value: 'usageGetCurrentGet',
				action: 'Get current usage',
			},
			{
				name: 'usageGetForecastGet',
				value: 'usageGetForecastGet',
				action: 'Get usage forecast',
			},
			{
				name: 'usageGetHistoryDetailGet',
				value: 'usageGetHistoryDetailGet',
				action: 'Get usage history',
			},
			{
				name: 'usageListHistoryGet',
				value: 'usageListHistoryGet',
				action: 'List usage history',
			},
			{
				name: 'vrackListGet',
				value: 'vrackListGet',
				action: 'List vRacks',
			},
		],
		default: 'projectListGet',
	});

	// Separate operation picker for v2
	properties.push({
		displayName: 'Operation (v2)',
		name: 'publicCloudOperationV2',
		type: 'options',
		noDataExpression: true,
		default: 'listProjectsV2',
		displayOptions: {
			show: {
				apiVersion: ['v2'],
			},
		},
		options: [
			{
				displayName: 'v2 - Create Rancher Service',
				name: 'createRancherServiceV2',
				value: 'createRancherServiceV2',
			},
			{
				displayName: 'v2 - Delete Rancher Service',
				name: 'deleteRancherServiceV2',
				value: 'deleteRancherServiceV2',
			},
			{
				displayName: 'v2 - Get Project Detail',
				name: 'getProjectDetailV2',
				value: 'getProjectDetailV2',
			},
			{
				displayName: 'v2 - Get Rancher Service',
				name: 'getRancherServiceV2',
				value: 'getRancherServiceV2',
			},
			{ displayName: 'v2 - Get Rancher Task', name: 'getRancherTaskV2', value: 'getRancherTaskV2' },
			{
				displayName: 'v2 - List Global Reference Plans',
				name: 'listGlobalReferencePlansV2',
				value: 'listGlobalReferencePlansV2',
			},
			{
				displayName: 'v2 - List Global Reference Versions',
				name: 'listGlobalReferenceVersionsV2',
				value: 'listGlobalReferenceVersionsV2',
			},
			{ displayName: 'v2 - List Projects', name: 'listProjectsV2', value: 'listProjectsV2' },
			{
				displayName: 'v2 - List Rancher Events',
				name: 'listRancherEventsV2',
				value: 'listRancherEventsV2',
			},
			{
				displayName: 'v2 - List Rancher Plans',
				name: 'listRancherPlansV2',
				value: 'listRancherPlansV2',
			},
			{
				displayName: 'v2 - List Rancher Services',
				name: 'listRancherServicesV2',
				value: 'listRancherServicesV2',
			},
			{
				displayName: 'v2 - List Rancher Tasks',
				name: 'listRancherTasksV2',
				value: 'listRancherTasksV2',
			},
			{
				displayName: 'v2 - List Rancher Versions',
				name: 'listRancherVersionsV2',
				value: 'listRancherVersionsV2',
			},
			{
				displayName: 'v2 - List Reference Plans',
				name: 'listReferencePlansV2',
				value: 'listReferencePlansV2',
			},
			{
				displayName: 'v2 - List Reference Versions',
				name: 'listReferenceVersionsV2',
				value: 'listReferenceVersionsV2',
			},
			{
				displayName: 'v2 - Reset Rancher Admin Password',
				name: 'resetRancherAdminPasswordV2',
				value: 'resetRancherAdminPasswordV2',
			},
			{
				displayName: 'v2 - Update Rancher Service',
				name: 'updateRancherServiceV2',
				value: 'updateRancherServiceV2',
			},
		],
	});

	properties.push(...projectListGetDescription());

	properties.push(
		...(backupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['backupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['createBackupPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['createSnapshotPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['createVolumePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['deleteBackupDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['deleteSnapshotDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['deleteVolumeDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getBackupDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(projectDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getProjectDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherServiceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getRancherService'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getSnapshotDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['getVolumeDetail'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherPlanCapabilityListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherPlanCapabilityListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherServiceListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherServiceListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherVersionCapabilityListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherVersionCapabilityListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['snapshotListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(backupUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['updateBackupPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['updateSnapshotPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['updateVolumePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherServiceCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['createRancherPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherServiceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['updateRancherPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherServiceDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['deleteRancherDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherAdminCredentialsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherAdminCredentialsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherAdminCredentialsPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherAdminCredentialsReset'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherTaskListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherTaskListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherTaskDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherTaskDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(rancherEventListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['rancherEventListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(volumeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['volumeListGet'] },
		}) as INodeProperties[]),
	);

	properties.push(
		...(redisClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisAdvancedConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisAdvancedConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisAdvancedConfigurationUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisAdvancedConfigurationUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisCapabilitiesAdvancedConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisCapabilitiesAdvancedConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisCapabilitiesCategoriesGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisCapabilitiesCategoriesGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisCapabilitiesCommandsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisCapabilitiesCommandsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisCapabilitiesIntegrationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisCapabilitiesIntegrationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIntegrationGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIntegrationGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIntegrationDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIntegrationDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIpRestrictionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIpRestrictionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIpRestrictionUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIpRestrictionUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisIpRestrictionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisIpRestrictionDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogKindListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogKindListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogKindGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogKindGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogSubscriptionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogSubscriptionDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogUrlCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogUrlCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisLogsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisLogsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisMaintenanceListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMaintenanceListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisMaintenanceApplyPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMaintenanceApplyPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisMetricListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMetricListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisPrometheusCredentialsResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisPrometheusCredentialsResetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisUserCredentialsResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisUserCredentialsResetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(valkeyIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['valkeyIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);

	properties.push(
		...(cassandraClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cassandraIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cassandraIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhousePrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhousePrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(clickhouseIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['clickhouseIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaUserCredentialsResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaUserCredentialsResetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIpRestrictionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIpRestrictionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIpRestrictionUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIpRestrictionUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIpRestrictionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIpRestrictionDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogKindListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogKindListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogKindGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogKindGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogSubscriptionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogSubscriptionDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogUrlCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogUrlCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaLogsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaLogsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaMaintenanceListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaMaintenanceListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaMaintenanceApplyPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaMaintenanceApplyPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaMetricListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaMetricListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaAdvancedConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaAdvancedConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaAdvancedConfigurationUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaAdvancedConfigurationUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaCapabilitiesAdvancedConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaCapabilitiesAdvancedConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaCapabilitiesBackupRegionsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaCapabilitiesBackupRegionsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaCapabilitiesIntegrationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaCapabilitiesIntegrationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIntegrationGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIntegrationGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(grafanaIntegrationDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['grafanaIntegrationDeleteDelete'] },
		}) as INodeProperties[]),
	);

	properties.push(
		...(kafkaClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaAclListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaAclListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaAclCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaAclCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaAclGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaAclGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaAclDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaAclDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaAdvancedConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaAdvancedConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaAdvancedConfigurationUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaAdvancedConfigurationUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaCapabilitiesAdvancedConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaCapabilitiesAdvancedConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaCapabilitiesBackupRegionsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaCapabilitiesBackupRegionsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaCapabilitiesIntegrationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaCapabilitiesIntegrationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIntegrationGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIntegrationGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIntegrationDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIntegrationDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIpRestrictionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIpRestrictionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIpRestrictionUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIpRestrictionUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaIpRestrictionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaIpRestrictionDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogKindListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogKindListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogKindGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogKindGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogSubscriptionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogSubscriptionDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogUrlCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogUrlCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaLogsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaLogsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMaintenanceListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMaintenanceListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMaintenanceApplyPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMaintenanceApplyPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMetricListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMetricListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaPermissionsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaPermissionsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaPrometheusCredentialsResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaPrometheusCredentialsResetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaSchemaRegistryAclListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaSchemaRegistryAclListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaSchemaRegistryAclCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaSchemaRegistryAclCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaSchemaRegistryAclGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaSchemaRegistryAclGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaSchemaRegistryAclDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaSchemaRegistryAclDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicAclListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicAclListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicAclCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicAclCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicAclGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicAclGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaTopicAclDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaTopicAclDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaUserAccessGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaUserAccessGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaUserCredentialsResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaUserCredentialsResetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaConnectCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaConnectCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kafkaMirrorMakerCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kafkaMirrorMakerCertificateCreatePost'] },
		}) as INodeProperties[]),
	);

	properties.push(
		...(m3aggregatorClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3aggregatorCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3aggregatorCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(m3dbCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['m3dbCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mongodbIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mongodbIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(mysqlIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['mysqlIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(opensearchAdvancedConfigurationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchAdvancedConfigurationListGet'] },
		}) as INodeProperties[]),
		...(opensearchAdvancedConfigurationUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchAdvancedConfigurationUpdatePut'] },
		}) as INodeProperties[]),
		...(opensearchBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchBackupGetGet'] },
		}) as INodeProperties[]),
		...(opensearchBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchBackupListGet'] },
		}) as INodeProperties[]),
		...(opensearchCapabilitiesAdvancedConfigurationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchCapabilitiesAdvancedConfigurationListGet'] },
		}) as INodeProperties[]),
		...(opensearchCapabilitiesBackupRegionsListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchCapabilitiesBackupRegionsListGet'] },
		}) as INodeProperties[]),
		...(opensearchCapabilitiesIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchCapabilitiesIntegrationListGet'] },
		}) as INodeProperties[]),
		...(opensearchClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchClusterCreatePost'] },
		}) as INodeProperties[]),
		...(opensearchClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchClusterDeleteDelete'] },
		}) as INodeProperties[]),
		...(opensearchClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchClusterGetGet'] },
		}) as INodeProperties[]),
		...(opensearchClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchClusterListGet'] },
		}) as INodeProperties[]),
		...(opensearchClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchClusterUpdatePut'] },
		}) as INodeProperties[]),
		...(opensearchIndexDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIndexDeleteDelete'] },
		}) as INodeProperties[]),
		...(opensearchIndexGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIndexGetGet'] },
		}) as INodeProperties[]),
		...(opensearchIndexListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIndexListGet'] },
		}) as INodeProperties[]),
		...(opensearchIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIntegrationCreatePost'] },
		}) as INodeProperties[]),
		...(opensearchIntegrationDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIntegrationDeleteDelete'] },
		}) as INodeProperties[]),
		...(opensearchIntegrationGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIntegrationGetGet'] },
		}) as INodeProperties[]),
		...(opensearchIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIntegrationListGet'] },
		}) as INodeProperties[]),
		...(opensearchIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
		...(opensearchIpRestrictionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIpRestrictionDeleteDelete'] },
		}) as INodeProperties[]),
		...(opensearchIpRestrictionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIpRestrictionGetGet'] },
		}) as INodeProperties[]),
		...(opensearchIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIpRestrictionListGet'] },
		}) as INodeProperties[]),
		...(opensearchIpRestrictionUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchIpRestrictionUpdatePut'] },
		}) as INodeProperties[]),
		...(opensearchLogKindGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogKindGet'] },
		}) as INodeProperties[]),
		...(opensearchLogKindListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogKindListGet'] },
		}) as INodeProperties[]),
		...(opensearchLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
		...(opensearchLogSubscriptionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogSubscriptionDeleteDelete'] },
		}) as INodeProperties[]),
		...(opensearchLogSubscriptionGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogSubscriptionGet'] },
		}) as INodeProperties[]),
		...(opensearchLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogSubscriptionListGet'] },
		}) as INodeProperties[]),
		...(opensearchLogUrlCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogUrlCreatePost'] },
		}) as INodeProperties[]),
		...(opensearchLogsListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchLogsListGet'] },
		}) as INodeProperties[]),
		...(opensearchMaintenanceApplyPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchMaintenanceApplyPost'] },
		}) as INodeProperties[]),
		...(opensearchMaintenanceGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchMaintenanceGetGet'] },
		}) as INodeProperties[]),
		...(opensearchMaintenanceListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchMaintenanceListGet'] },
		}) as INodeProperties[]),
		...(opensearchMetricGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchMetricGetGet'] },
		}) as INodeProperties[]),
		...(opensearchMetricListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchMetricListGet'] },
		}) as INodeProperties[]),
		...(opensearchNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchNodeGetGet'] },
		}) as INodeProperties[]),
		...(opensearchNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchNodeListGet'] },
		}) as INodeProperties[]),
		...(opensearchPatternCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchPatternCreatePost'] },
		}) as INodeProperties[]),
		...(opensearchPatternDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchPatternDeleteDelete'] },
		}) as INodeProperties[]),
		...(opensearchPatternGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchPatternGetGet'] },
		}) as INodeProperties[]),
		...(opensearchPatternListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchPatternListGet'] },
		}) as INodeProperties[]),
		...(opensearchPermissionsListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchPermissionsListGet'] },
		}) as INodeProperties[]),
		...(opensearchPrometheusCredentialsResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchPrometheusCredentialsResetPost'] },
		}) as INodeProperties[]),
		...(opensearchPrometheusListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchPrometheusListGet'] },
		}) as INodeProperties[]),
		...(opensearchUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchUserCreatePost'] },
		}) as INodeProperties[]),
		...(opensearchUserCredentialsResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchUserCredentialsResetPost'] },
		}) as INodeProperties[]),
		...(opensearchUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchUserDeleteDelete'] },
		}) as INodeProperties[]),
		...(opensearchUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchUserGetGet'] },
		}) as INodeProperties[]),
		...(opensearchUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchUserListGet'] },
		}) as INodeProperties[]),
		...(opensearchUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['opensearchUserUpdatePut'] },
		}) as INodeProperties[]),
		...(postgresqlClusterListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlClusterListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlClusterGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlClusterGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlClusterCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlClusterCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlClusterUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlClusterUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlClusterDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlClusterDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlBackupListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlBackupListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlUserListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlUserListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlUserCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlUserCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlUserGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlUserGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlUserUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlUserUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlUserDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlUserDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlIpRestrictionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlIpRestrictionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlIpRestrictionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlIpRestrictionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlLogSubscriptionCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlLogSubscriptionCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlLogSubscriptionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlLogSubscriptionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlCertificateCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlIntegrationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlIntegrationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(postgresqlIntegrationCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['postgresqlIntegrationCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeAuditLogsPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeAuditLogsPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeCustomizationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeCustomizationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeCustomizationUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeCustomizationUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeFlavorsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeFlavorsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeIpRestrictionsDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeIpRestrictionsDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeIpRestrictionsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeIpRestrictionsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeIpRestrictionsPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeIpRestrictionsPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeIpRestrictionsUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeIpRestrictionsUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeKubeconfigPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeKubeconfigPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeKubeconfigResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeKubeconfigResetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeLogSubscriptionDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeLogSubscriptionDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeLogSubscriptionGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeLogSubscriptionGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeLogSubscriptionPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeLogSubscriptionPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeLogSubscriptionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeLogSubscriptionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeLogUrlPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeLogUrlPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeMetricsEtcdUsageGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeMetricsEtcdUsageGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodeGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodeGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodepoolCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodepoolCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodepoolListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodepoolListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodepoolDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodepoolDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodepoolGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodepoolGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodepoolListNodepoolNodesGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodepoolListNodepoolNodesGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeNodepoolUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeNodepoolUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeOpenIdConnectDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeOpenIdConnectDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeOpenIdConnectGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeOpenIdConnectGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeOpenIdConnectPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeOpenIdConnectPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeOpenIdConnectUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeOpenIdConnectUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubePrivateNetworkConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubePrivateNetworkConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubePrivateNetworkConfigurationUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubePrivateNetworkConfigurationUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeResetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeResetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeRestartPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeRestartPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeUpdateLoadBalancersSubnetIdUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeUpdateLoadBalancersSubnetIdUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeUpdatePolicyUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeUpdatePolicyUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeUpdatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeUpdatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(kubeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['kubeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceActiveMonthlyBillingPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceActiveMonthlyBillingPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceApplicationAccessPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceApplicationAccessPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceBulkPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceBulkPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceGroupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceGroupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(...instanceGroupDeleteDeleteDescription());
	properties.push(...instanceGroupGetGetDescription());
	properties.push(...instanceGroupListGetDescription());
	properties.push(
		...(instanceInterfaceCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceInterfaceCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceInterfaceDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceInterfaceDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceInterfaceGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceInterfaceGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceInterfaceListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceInterfaceListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(...instanceListGetDescription());
	properties.push(
		...(instanceRebootPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceRebootPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceReinstallPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceReinstallPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceRescueModePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceRescueModePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceResizePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceResizePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceResumePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceResumePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceShelvePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceShelvePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceSnapshotPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceSnapshotPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceStartPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceStartPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceStopPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceStopPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceUnshelvePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceUnshelvePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(instanceVncPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['instanceVncPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkCreatePrivateNetworkPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkCreatePrivateNetworkPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkCreateSubnetPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkCreateSubnetPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkDeletePrivateNetworkDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkDeletePrivateNetworkDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkDeleteSubnetDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkDeleteSubnetDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkGetPrivateNetworkDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkGetPrivateNetworkDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkGetSubnetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkGetSubnetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkListPrivateNetworksGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkListPrivateNetworksGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkListPublicNetworksGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkListPublicNetworksGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkListSubnetsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkListSubnetsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkUpdatePrivateNetworkPutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkUpdatePrivateNetworkPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(networkUpdateSubnetPutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['networkUpdateSubnetPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareSnapshotCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareSnapshotCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareSnapshotDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareSnapshotDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareSnapshotGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareSnapshotGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareSnapshotListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareSnapshotListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionShareUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionShareUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionVolumeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionVolumeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionVolumeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionVolumeDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionVolumeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionVolumeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionVolumeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionVolumeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionVolumeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionVolumeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionWorkflowBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionWorkflowBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionWorkflowBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionWorkflowBackupDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionWorkflowBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionWorkflowBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionWorkflowBackupUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionWorkflowBackupUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userCreateS3CredentialSecretPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userCreateS3CredentialSecretPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userCreateUserPolicyPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userCreateUserPolicyPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userCreateUserRolePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userCreateUserRolePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userCreateUserS3CredentialsPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userCreateUserS3CredentialsPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userCreateUserTokenPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userCreateUserTokenPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userDeleteUserRoleDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userDeleteUserRoleDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userDeleteUserS3CredentialDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userDeleteUserS3CredentialDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserConfigurationGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserConfigurationGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserOpenrcGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserOpenrcGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserPolicyGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserPolicyGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserRcloneGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserRcloneGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserRoleDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserRoleDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserRoleGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserRoleGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserS3CredentialDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserS3CredentialDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userGetUserS3CredentialsGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userGetUserS3CredentialsGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userRegeneratePasswordPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userRegeneratePasswordPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(userUpdateUserRolePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['userUpdateUserRolePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(aclCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['aclCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(aclDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['aclDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(aclListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['aclListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(activateMonthlyBillingPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['activateMonthlyBillingPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(alertingCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['alertingCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(alertingDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['alertingDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(alertingGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['alertingGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(alertingListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['alertingListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(alertingUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['alertingUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(billListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['billListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(cancelPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['cancelPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesGetKubeDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesGetKubeDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesGetLoadbalancerDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesGetLoadbalancerDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesGetRegionDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesGetRegionDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesGetRegionProductDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesGetRegionProductDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesListKubeGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesListKubeGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesListLoadbalancerGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesListLoadbalancerGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(capabilitiesListRegionGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['capabilitiesListRegionGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(changeContactPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['changeContactPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(confirmTerminationPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['confirmTerminationPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryCreateUserPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryCreateUserPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryDeleteUserDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryDeleteUserDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryGetUserDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryGetUserDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryListUsersGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryListUsersGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(containerRegistryUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['containerRegistryUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(creditGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['creditGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(creditListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['creditListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(flavorGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['flavorGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(flavorListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['flavorListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(imageGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['imageGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(imageListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['imageListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(ipCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['ipCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(ipDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['ipDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(ipGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['ipGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(ipListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['ipListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(ipUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['ipUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(labCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['labCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(labDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['labDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(labGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['labGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(labListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['labListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(labUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['labUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(loadbalancerCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['loadbalancerCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(loadbalancerDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['loadbalancerDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(loadbalancerGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['loadbalancerGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(loadbalancerListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['loadbalancerListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(loadbalancerUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['loadbalancerUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(operationGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['operationGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(operationListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['operationListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(quantumGetCapabilitiesDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['quantumGetCapabilitiesDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(quantumGetCapabilitiesRegionDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['quantumGetCapabilitiesRegionDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(quantumListCapabilitiesGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['quantumListCapabilitiesGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(quantumListCapabilitiesRegionGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['quantumListCapabilitiesRegionGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(quotaListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['quotaListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(regionAvailableCheckRegionAvailableGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['regionAvailableCheckRegionAvailableGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(retainPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['retainPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(roleListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['roleListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(serviceInfosGetServiceInfosGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['serviceInfosGetServiceInfosGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotsCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['snapshotsCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotsDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['snapshotsDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(snapshotsListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['snapshotsListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(sshkeyCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['sshkeyCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(sshkeyDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['sshkeyDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(sshkeyListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['sshkeyListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageCreateContainerPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageCreateContainerPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageDeleteContainerDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageDeleteContainerDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageDeleteDelete'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageGetContainerDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageGetContainerDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageGetDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageGetDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageListContainersGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageListContainersGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageUpdateContainerPutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageUpdateContainerPut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(storageUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['storageUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(terminatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['terminatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(unleashPostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['unleashPost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(usageGetCurrentGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['usageGetCurrentGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(usageGetForecastGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['usageGetForecastGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(usageGetHistoryDetailGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['usageGetHistoryDetailGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(usageListHistoryGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['usageListHistoryGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(vrackListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['vrackListGet'] },
		}) as INodeProperties[]),
	);

	// v2 operation descriptions
	properties.push(
		...(listGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listProjectsV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(getDetailGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['getProjectDetailV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(serviceListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listRancherServicesV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(serviceCreatePostV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['createRancherServiceV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(serviceDeleteDeleteV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['deleteRancherServiceV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(serviceGetGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['getRancherServiceV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(serviceUpdatePutV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['updateRancherServiceV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(adminCredentialsResetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['resetRancherAdminPasswordV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(planCapabilityListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listRancherPlansV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(versionCapabilityListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listRancherVersionsV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(eventListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listRancherEventsV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(taskListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listRancherTasksV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(taskDetailGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['getRancherTaskV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(referencePlanListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listReferencePlansV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(referenceVersionListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listReferenceVersionsV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(globalReferencePlanListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listGlobalReferencePlansV2'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(globalReferenceVersionListGetV2Description({
			...displayOptions,
			show: { apiVersion: ['v2'], publicCloudOperationV2: ['listGlobalReferenceVersionsV2'] },
		}) as INodeProperties[]),
	);
	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const apiVersion = this.getNodeParameter('apiVersion', 0) as string;
	const operation = this.getNodeParameter(
		apiVersion === 'v2' ? 'publicCloudOperationV2' : 'publicCloudOperation',
		itemIndex,
		{ extractValue: true },
	);

	switch (operation) {
		case 'projectListGet':
			return projectListGetExecute.call(this);
		case 'backupListGet':
			return backupListGetExecute.call(this);
		case 'createBackupPost':
			return backupCreatePostExecute.call(this);
		case 'createSnapshotPost':
			return snapshotCreatePostExecute.call(this);
		case 'createVolumePost':
			return volumeCreatePostExecute.call(this);
		case 'createRancherPost':
			return rancherServiceCreatePostExecute.call(this);
		case 'deleteBackupDelete':
			return backupDeleteDeleteExecute.call(this);
		case 'deleteSnapshotDelete':
			return snapshotDeleteDeleteExecute.call(this);
		case 'deleteRancherDelete':
			return rancherServiceDeleteDeleteExecute.call(this);
		case 'deleteVolumeDelete':
			return volumeDeleteDeleteExecute.call(this);
		case 'rancherAdminCredentialsGet':
			return rancherAdminCredentialsGetExecute.call(this);
		case 'rancherAdminCredentialsReset':
			return rancherAdminCredentialsPostExecute.call(this);
		case 'rancherTaskListGet':
			return rancherTaskListGetExecute.call(this);
		case 'rancherTaskDetailGet':
			return rancherTaskDetailGetExecute.call(this);
		case 'rancherEventListGet':
			return rancherEventListGetExecute.call(this);
		case 'getBackupDetail':
			return backupGetExecute.call(this);
		case 'getProjectDetail':
			return projectDetailGetExecute.call(this);
		case 'getRancherService':
			return rancherServiceGetExecute.call(this);
		case 'getSnapshotDetail':
			return snapshotGetExecute.call(this);
		case 'getVolumeDetail':
			return volumeGetExecute.call(this);
		case 'rancherPlanCapabilityListGet':
			return rancherPlanCapabilityListGetExecute.call(this);
		case 'rancherServiceListGet':
			return rancherServiceListGetExecute.call(this);
		case 'rancherVersionCapabilityListGet':
			return rancherVersionCapabilityListGetExecute.call(this);
		case 'snapshotListGet':
			return snapshotListGetExecute.call(this);
		case 'updateBackupPut':
			return backupUpdatePutExecute.call(this);
		case 'updateSnapshotPut':
			return snapshotUpdatePutExecute.call(this);
		case 'updateRancherPut':
			return rancherServiceUpdatePutExecute.call(this);
		case 'updateVolumePut':
			return volumeUpdatePutExecute.call(this);
		case 'volumeListGet':
			return volumeListGetExecute.call(this);

		case 'redisClusterListGet':
			return redisClusterListGetExecute.call(this);
		case 'redisClusterGetGet':
			return redisClusterGetGetExecute.call(this);
		case 'redisClusterCreatePost':
			return redisClusterCreatePostExecute.call(this);
		case 'redisClusterUpdatePut':
			return redisClusterUpdatePutExecute.call(this);
		case 'redisClusterDeleteDelete':
			return redisClusterDeleteDeleteExecute.call(this);
		case 'redisBackupListGet':
			return redisBackupListGetExecute.call(this);
		case 'redisBackupGetGet':
			return redisBackupGetGetExecute.call(this);
		case 'redisAdvancedConfigurationGet':
			return redisAdvancedConfigurationGetExecute.call(this);
		case 'redisAdvancedConfigurationUpdatePut':
			return redisAdvancedConfigurationUpdatePutExecute.call(this);
		case 'redisCapabilitiesAdvancedConfigurationGet':
			return redisCapabilitiesAdvancedConfigurationGetExecute.call(this);
		case 'redisCapabilitiesCategoriesGet':
			return redisCapabilitiesCategoriesGetExecute.call(this);
		case 'redisCapabilitiesCommandsGet':
			return redisCapabilitiesCommandsGetExecute.call(this);
		case 'redisCapabilitiesIntegrationGet':
			return redisCapabilitiesIntegrationGetExecute.call(this);
		case 'redisIntegrationListGet':
			return redisIntegrationListGetExecute.call(this);
		case 'redisIntegrationCreatePost':
			return redisIntegrationCreatePostExecute.call(this);
		case 'redisIntegrationGetGet':
			return redisIntegrationGetGetExecute.call(this);
		case 'redisIntegrationDeleteDelete':
			return redisIntegrationDeleteDeleteExecute.call(this);
		case 'redisIpRestrictionListGet':
			return redisIpRestrictionListGetExecute.call(this);
		case 'redisIpRestrictionCreatePost':
			return redisIpRestrictionCreatePostExecute.call(this);
		case 'redisIpRestrictionGetGet':
			return redisIpRestrictionGetGetExecute.call(this);
		case 'redisIpRestrictionUpdatePut':
			return redisIpRestrictionUpdatePutExecute.call(this);
		case 'redisIpRestrictionDeleteDelete':
			return redisIpRestrictionDeleteDeleteExecute.call(this);
		case 'redisLogKindListGet':
			return redisLogKindListGetExecute.call(this);
		case 'redisLogKindGet':
			return redisLogKindGetExecute.call(this);
		case 'redisLogSubscriptionListGet':
			return redisLogSubscriptionListGetExecute.call(this);
		case 'redisLogSubscriptionCreatePost':
			return redisLogSubscriptionCreatePostExecute.call(this);
		case 'redisLogSubscriptionGetGet':
			return redisLogSubscriptionGetGetExecute.call(this);
		case 'redisLogSubscriptionDeleteDelete':
			return redisLogSubscriptionDeleteDeleteExecute.call(this);
		case 'redisLogUrlCreatePost':
			return redisLogUrlCreatePostExecute.call(this);
		case 'redisLogsGet':
			return redisLogsGetExecute.call(this);
		case 'redisMaintenanceListGet':
			return redisMaintenanceListGetExecute.call(this);
		case 'redisMaintenanceGet':
			return redisMaintenanceGetExecute.call(this);
		case 'redisMaintenanceApplyPost':
			return redisMaintenanceApplyPostExecute.call(this);
		case 'redisMetricListGet':
			return redisMetricListGetExecute.call(this);
		case 'redisMetricGet':
			return redisMetricGetExecute.call(this);
		case 'redisNodeListGet':
			return redisNodeListGetExecute.call(this);
		case 'redisNodeGetGet':
			return redisNodeGetGetExecute.call(this);
		case 'redisPrometheusGet':
			return redisPrometheusGetExecute.call(this);
		case 'redisPrometheusCredentialsResetPost':
			return redisPrometheusCredentialsResetPostExecute.call(this);
		case 'redisUserListGet':
			return redisUserListGetExecute.call(this);
		case 'redisUserCreatePost':
			return redisUserCreatePostExecute.call(this);
		case 'redisUserGetGet':
			return redisUserGetGetExecute.call(this);
		case 'redisUserUpdatePut':
			return redisUserUpdatePutExecute.call(this);
		case 'redisUserDeleteDelete':
			return redisUserDeleteDeleteExecute.call(this);
		case 'redisUserCredentialsResetPost':
			return redisUserCredentialsResetPostExecute.call(this);
		case 'valkeyClusterListGet':
			return valkeyClusterListGetExecute.call(this);
		case 'valkeyClusterGetGet':
			return valkeyClusterGetGetExecute.call(this);
		case 'valkeyClusterCreatePost':
			return valkeyClusterCreatePostExecute.call(this);
		case 'valkeyClusterUpdatePut':
			return valkeyClusterUpdatePutExecute.call(this);
		case 'valkeyClusterDeleteDelete':
			return valkeyClusterDeleteDeleteExecute.call(this);
		case 'valkeyBackupListGet':
			return valkeyBackupListGetExecute.call(this);
		case 'valkeyBackupCreatePost':
			return valkeyBackupCreatePostExecute.call(this);
		case 'valkeyBackupGetGet':
			return valkeyBackupGetGetExecute.call(this);
		case 'valkeyBackupDeleteDelete':
			return valkeyBackupDeleteDeleteExecute.call(this);
		case 'valkeyUserListGet':
			return valkeyUserListGetExecute.call(this);
		case 'valkeyUserCreatePost':
			return valkeyUserCreatePostExecute.call(this);
		case 'valkeyUserGetGet':
			return valkeyUserGetGetExecute.call(this);
		case 'valkeyUserUpdatePut':
			return valkeyUserUpdatePutExecute.call(this);
		case 'valkeyUserDeleteDelete':
			return valkeyUserDeleteDeleteExecute.call(this);
		case 'valkeyNodeListGet':
			return valkeyNodeListGetExecute.call(this);
		case 'valkeyNodeCreatePost':
			return valkeyNodeCreatePostExecute.call(this);
		case 'valkeyNodeGetGet':
			return valkeyNodeGetGetExecute.call(this);
		case 'valkeyNodeUpdatePut':
			return valkeyNodeUpdatePutExecute.call(this);
		case 'valkeyNodeDeleteDelete':
			return valkeyNodeDeleteDeleteExecute.call(this);
		case 'valkeyIpRestrictionListGet':
			return valkeyIpRestrictionListGetExecute.call(this);
		case 'valkeyIpRestrictionCreatePost':
			return valkeyIpRestrictionCreatePostExecute.call(this);
		case 'valkeyLogSubscriptionListGet':
			return valkeyLogSubscriptionListGetExecute.call(this);
		case 'valkeyLogSubscriptionCreatePost':
			return valkeyLogSubscriptionCreatePostExecute.call(this);
		case 'valkeyLogSubscriptionGetGet':
			return valkeyLogSubscriptionGetGetExecute.call(this);
		case 'valkeyMaintenanceGet':
			return valkeyMaintenanceGetExecute.call(this);
		case 'valkeyMaintenanceUpdatePut':
			return valkeyMaintenanceUpdatePutExecute.call(this);
		case 'valkeyMetricGet':
			return valkeyMetricGetExecute.call(this);
		case 'valkeyPrometheusGet':
			return valkeyPrometheusGetExecute.call(this);
		case 'valkeyCertificateListGet':
			return valkeyCertificateListGetExecute.call(this);
		case 'valkeyCertificateCreatePost':
			return valkeyCertificateCreatePostExecute.call(this);
		case 'valkeyIntegrationListGet':
			return valkeyIntegrationListGetExecute.call(this);
		case 'valkeyIntegrationCreatePost':
			return valkeyIntegrationCreatePostExecute.call(this);
		case 'cassandraClusterListGet':
			return cassandraClusterListGetExecute.call(this);
		case 'cassandraClusterGetGet':
			return cassandraClusterGetGetExecute.call(this);
		case 'cassandraClusterCreatePost':
			return cassandraClusterCreatePostExecute.call(this);
		case 'cassandraClusterUpdatePut':
			return cassandraClusterUpdatePutExecute.call(this);
		case 'cassandraClusterDeleteDelete':
			return cassandraClusterDeleteDeleteExecute.call(this);
		case 'cassandraBackupListGet':
			return cassandraBackupListGetExecute.call(this);
		case 'cassandraBackupCreatePost':
			return cassandraBackupCreatePostExecute.call(this);
		case 'cassandraBackupGetGet':
			return cassandraBackupGetGetExecute.call(this);
		case 'cassandraBackupDeleteDelete':
			return cassandraBackupDeleteDeleteExecute.call(this);
		case 'cassandraUserListGet':
			return cassandraUserListGetExecute.call(this);
		case 'cassandraUserCreatePost':
			return cassandraUserCreatePostExecute.call(this);
		case 'cassandraUserGetGet':
			return cassandraUserGetGetExecute.call(this);
		case 'cassandraUserUpdatePut':
			return cassandraUserUpdatePutExecute.call(this);
		case 'cassandraUserDeleteDelete':
			return cassandraUserDeleteDeleteExecute.call(this);
		case 'cassandraNodeListGet':
			return cassandraNodeListGetExecute.call(this);
		case 'cassandraNodeCreatePost':
			return cassandraNodeCreatePostExecute.call(this);
		case 'cassandraNodeGetGet':
			return cassandraNodeGetGetExecute.call(this);
		case 'cassandraNodeUpdatePut':
			return cassandraNodeUpdatePutExecute.call(this);
		case 'cassandraNodeDeleteDelete':
			return cassandraNodeDeleteDeleteExecute.call(this);
		case 'cassandraIpRestrictionListGet':
			return cassandraIpRestrictionListGetExecute.call(this);
		case 'cassandraIpRestrictionCreatePost':
			return cassandraIpRestrictionCreatePostExecute.call(this);
		case 'cassandraLogSubscriptionListGet':
			return cassandraLogSubscriptionListGetExecute.call(this);
		case 'cassandraLogSubscriptionCreatePost':
			return cassandraLogSubscriptionCreatePostExecute.call(this);
		case 'cassandraLogSubscriptionGetGet':
			return cassandraLogSubscriptionGetGetExecute.call(this);
		case 'cassandraMaintenanceGet':
			return cassandraMaintenanceGetExecute.call(this);
		case 'cassandraMaintenanceUpdatePut':
			return cassandraMaintenanceUpdatePutExecute.call(this);
		case 'cassandraMetricGet':
			return cassandraMetricGetExecute.call(this);
		case 'cassandraPrometheusGet':
			return cassandraPrometheusGetExecute.call(this);
		case 'cassandraCertificateListGet':
			return cassandraCertificateListGetExecute.call(this);
		case 'cassandraCertificateCreatePost':
			return cassandraCertificateCreatePostExecute.call(this);
		case 'cassandraIntegrationListGet':
			return cassandraIntegrationListGetExecute.call(this);
		case 'cassandraIntegrationCreatePost':
			return cassandraIntegrationCreatePostExecute.call(this);
		case 'clickhouseClusterListGet':
			return clickhouseClusterListGetExecute.call(this);
		case 'clickhouseClusterGetGet':
			return clickhouseClusterGetGetExecute.call(this);
		case 'clickhouseClusterCreatePost':
			return clickhouseClusterCreatePostExecute.call(this);
		case 'clickhouseClusterUpdatePut':
			return clickhouseClusterUpdatePutExecute.call(this);
		case 'clickhouseClusterDeleteDelete':
			return clickhouseClusterDeleteDeleteExecute.call(this);
		case 'clickhouseBackupListGet':
			return clickhouseBackupListGetExecute.call(this);
		case 'clickhouseBackupCreatePost':
			return clickhouseBackupCreatePostExecute.call(this);
		case 'clickhouseBackupGetGet':
			return clickhouseBackupGetGetExecute.call(this);
		case 'clickhouseBackupDeleteDelete':
			return clickhouseBackupDeleteDeleteExecute.call(this);
		case 'clickhouseUserListGet':
			return clickhouseUserListGetExecute.call(this);
		case 'clickhouseUserCreatePost':
			return clickhouseUserCreatePostExecute.call(this);
		case 'clickhouseUserGetGet':
			return clickhouseUserGetGetExecute.call(this);
		case 'clickhouseUserUpdatePut':
			return clickhouseUserUpdatePutExecute.call(this);
		case 'clickhouseUserDeleteDelete':
			return clickhouseUserDeleteDeleteExecute.call(this);
		case 'clickhouseNodeListGet':
			return clickhouseNodeListGetExecute.call(this);
		case 'clickhouseNodeCreatePost':
			return clickhouseNodeCreatePostExecute.call(this);
		case 'clickhouseNodeGetGet':
			return clickhouseNodeGetGetExecute.call(this);
		case 'clickhouseNodeUpdatePut':
			return clickhouseNodeUpdatePutExecute.call(this);
		case 'clickhouseNodeDeleteDelete':
			return clickhouseNodeDeleteDeleteExecute.call(this);
		case 'clickhouseIpRestrictionListGet':
			return clickhouseIpRestrictionListGetExecute.call(this);
		case 'clickhouseIpRestrictionCreatePost':
			return clickhouseIpRestrictionCreatePostExecute.call(this);
		case 'clickhouseLogSubscriptionListGet':
			return clickhouseLogSubscriptionListGetExecute.call(this);
		case 'clickhouseLogSubscriptionCreatePost':
			return clickhouseLogSubscriptionCreatePostExecute.call(this);
		case 'clickhouseLogSubscriptionGetGet':
			return clickhouseLogSubscriptionGetGetExecute.call(this);
		case 'clickhouseMaintenanceGet':
			return clickhouseMaintenanceGetExecute.call(this);
		case 'clickhouseMaintenanceUpdatePut':
			return clickhouseMaintenanceUpdatePutExecute.call(this);
		case 'clickhouseMetricGet':
			return clickhouseMetricGetExecute.call(this);
		case 'clickhousePrometheusGet':
			return clickhousePrometheusGetExecute.call(this);
		case 'clickhouseCertificateListGet':
			return clickhouseCertificateListGetExecute.call(this);
		case 'clickhouseCertificateCreatePost':
			return clickhouseCertificateCreatePostExecute.call(this);
		case 'clickhouseIntegrationListGet':
			return clickhouseIntegrationListGetExecute.call(this);
		case 'clickhouseIntegrationCreatePost':
			return clickhouseIntegrationCreatePostExecute.call(this);
		case 'grafanaClusterListGet':
			return grafanaClusterListGetExecute.call(this);
		case 'grafanaClusterGetGet':
			return grafanaClusterGetGetExecute.call(this);
		case 'grafanaClusterCreatePost':
			return grafanaClusterCreatePostExecute.call(this);
		case 'grafanaClusterUpdatePut':
			return grafanaClusterUpdatePutExecute.call(this);
		case 'grafanaClusterDeleteDelete':
			return grafanaClusterDeleteDeleteExecute.call(this);
		case 'grafanaBackupListGet':
			return grafanaBackupListGetExecute.call(this);
		case 'grafanaBackupGetGet':
			return grafanaBackupGetGetExecute.call(this);
		case 'grafanaUserListGet':
			return grafanaUserListGetExecute.call(this);
		case 'grafanaUserGetGet':
			return grafanaUserGetGetExecute.call(this);
		case 'grafanaUserCredentialsResetPost':
			return grafanaUserCredentialsResetPostExecute.call(this);
		case 'grafanaNodeListGet':
			return grafanaNodeListGetExecute.call(this);
		case 'grafanaNodeGetGet':
			return grafanaNodeGetGetExecute.call(this);
		case 'grafanaIpRestrictionListGet':
			return grafanaIpRestrictionListGetExecute.call(this);
		case 'grafanaIpRestrictionCreatePost':
			return grafanaIpRestrictionCreatePostExecute.call(this);
		case 'grafanaIpRestrictionGetGet':
			return grafanaIpRestrictionGetGetExecute.call(this);
		case 'grafanaIpRestrictionUpdatePut':
			return grafanaIpRestrictionUpdatePutExecute.call(this);
		case 'grafanaIpRestrictionDeleteDelete':
			return grafanaIpRestrictionDeleteDeleteExecute.call(this);
		case 'grafanaLogKindListGet':
			return grafanaLogKindListGetExecute.call(this);
		case 'grafanaLogKindGet':
			return grafanaLogKindGetExecute.call(this);
		case 'grafanaLogSubscriptionListGet':
			return grafanaLogSubscriptionListGetExecute.call(this);
		case 'grafanaLogSubscriptionCreatePost':
			return grafanaLogSubscriptionCreatePostExecute.call(this);
		case 'grafanaLogSubscriptionGetGet':
			return grafanaLogSubscriptionGetGetExecute.call(this);
		case 'grafanaLogSubscriptionDeleteDelete':
			return grafanaLogSubscriptionDeleteDeleteExecute.call(this);
		case 'grafanaLogUrlCreatePost':
			return grafanaLogUrlCreatePostExecute.call(this);
		case 'grafanaLogsGet':
			return grafanaLogsGetExecute.call(this);
		case 'grafanaMaintenanceListGet':
			return grafanaMaintenanceListGetExecute.call(this);
		case 'grafanaMaintenanceGet':
			return grafanaMaintenanceGetExecute.call(this);
		case 'grafanaMaintenanceApplyPost':
			return grafanaMaintenanceApplyPostExecute.call(this);
		case 'grafanaMetricListGet':
			return grafanaMetricListGetExecute.call(this);
		case 'grafanaMetricGet':
			return grafanaMetricGetExecute.call(this);
		case 'grafanaAdvancedConfigurationGet':
			return grafanaAdvancedConfigurationGetExecute.call(this);
		case 'grafanaAdvancedConfigurationUpdatePut':
			return grafanaAdvancedConfigurationUpdatePutExecute.call(this);
		case 'grafanaCapabilitiesAdvancedConfigurationGet':
			return grafanaCapabilitiesAdvancedConfigurationGetExecute.call(this);
		case 'grafanaCapabilitiesBackupRegionsGet':
			return grafanaCapabilitiesBackupRegionsGetExecute.call(this);
		case 'grafanaCapabilitiesIntegrationGet':
			return grafanaCapabilitiesIntegrationGetExecute.call(this);
		case 'grafanaIntegrationListGet':
			return grafanaIntegrationListGetExecute.call(this);
		case 'grafanaIntegrationCreatePost':
			return grafanaIntegrationCreatePostExecute.call(this);
		case 'grafanaIntegrationGetGet':
			return grafanaIntegrationGetGetExecute.call(this);
		case 'grafanaIntegrationDeleteDelete':
			return grafanaIntegrationDeleteDeleteExecute.call(this);
		case 'kafkaClusterListGet':
			return kafkaClusterListGetExecute.call(this);
		case 'kafkaClusterGetGet':
			return kafkaClusterGetGetExecute.call(this);
		case 'kafkaClusterCreatePost':
			return kafkaClusterCreatePostExecute.call(this);
		case 'kafkaClusterUpdatePut':
			return kafkaClusterUpdatePutExecute.call(this);
		case 'kafkaClusterDeleteDelete':
			return kafkaClusterDeleteDeleteExecute.call(this);
		case 'kafkaAclListGet':
			return kafkaAclListGetExecute.call(this);
		case 'kafkaAclCreatePost':
			return kafkaAclCreatePostExecute.call(this);
		case 'kafkaAclGetGet':
			return kafkaAclGetGetExecute.call(this);
		case 'kafkaAclDeleteDelete':
			return kafkaAclDeleteDeleteExecute.call(this);
		case 'kafkaAdvancedConfigurationGet':
			return kafkaAdvancedConfigurationGetExecute.call(this);
		case 'kafkaAdvancedConfigurationUpdatePut':
			return kafkaAdvancedConfigurationUpdatePutExecute.call(this);
		case 'kafkaCapabilitiesAdvancedConfigurationGet':
			return kafkaCapabilitiesAdvancedConfigurationGetExecute.call(this);
		case 'kafkaCapabilitiesBackupRegionsGet':
			return kafkaCapabilitiesBackupRegionsGetExecute.call(this);
		case 'kafkaCapabilitiesIntegrationGet':
			return kafkaCapabilitiesIntegrationGetExecute.call(this);
		case 'kafkaCertificateListGet':
			return kafkaCertificateListGetExecute.call(this);
		case 'kafkaIntegrationListGet':
			return kafkaIntegrationListGetExecute.call(this);
		case 'kafkaIntegrationCreatePost':
			return kafkaIntegrationCreatePostExecute.call(this);
		case 'kafkaIntegrationGetGet':
			return kafkaIntegrationGetGetExecute.call(this);
		case 'kafkaIntegrationDeleteDelete':
			return kafkaIntegrationDeleteDeleteExecute.call(this);
		case 'kafkaIpRestrictionListGet':
			return kafkaIpRestrictionListGetExecute.call(this);
		case 'kafkaIpRestrictionCreatePost':
			return kafkaIpRestrictionCreatePostExecute.call(this);
		case 'kafkaIpRestrictionGetGet':
			return kafkaIpRestrictionGetGetExecute.call(this);
		case 'kafkaIpRestrictionUpdatePut':
			return kafkaIpRestrictionUpdatePutExecute.call(this);
		case 'kafkaIpRestrictionDeleteDelete':
			return kafkaIpRestrictionDeleteDeleteExecute.call(this);
		case 'kafkaLogKindListGet':
			return kafkaLogKindListGetExecute.call(this);
		case 'kafkaLogKindGet':
			return kafkaLogKindGetExecute.call(this);
		case 'kafkaLogSubscriptionListGet':
			return kafkaLogSubscriptionListGetExecute.call(this);
		case 'kafkaLogSubscriptionCreatePost':
			return kafkaLogSubscriptionCreatePostExecute.call(this);
		case 'kafkaLogSubscriptionGetGet':
			return kafkaLogSubscriptionGetGetExecute.call(this);
		case 'kafkaLogSubscriptionDeleteDelete':
			return kafkaLogSubscriptionDeleteDeleteExecute.call(this);
		case 'kafkaLogUrlCreatePost':
			return kafkaLogUrlCreatePostExecute.call(this);
		case 'kafkaLogsGet':
			return kafkaLogsGetExecute.call(this);
		case 'kafkaMaintenanceListGet':
			return kafkaMaintenanceListGetExecute.call(this);
		case 'kafkaMaintenanceGet':
			return kafkaMaintenanceGetExecute.call(this);
		case 'kafkaMaintenanceApplyPost':
			return kafkaMaintenanceApplyPostExecute.call(this);
		case 'kafkaMetricListGet':
			return kafkaMetricListGetExecute.call(this);
		case 'kafkaMetricGet':
			return kafkaMetricGetExecute.call(this);
		case 'kafkaNodeListGet':
			return kafkaNodeListGetExecute.call(this);
		case 'kafkaNodeGetGet':
			return kafkaNodeGetGetExecute.call(this);
		case 'kafkaPermissionsGet':
			return kafkaPermissionsGetExecute.call(this);
		case 'kafkaPrometheusGet':
			return kafkaPrometheusGetExecute.call(this);
		case 'kafkaPrometheusCredentialsResetPost':
			return kafkaPrometheusCredentialsResetPostExecute.call(this);
		case 'kafkaSchemaRegistryAclListGet':
			return kafkaSchemaRegistryAclListGetExecute.call(this);
		case 'kafkaSchemaRegistryAclCreatePost':
			return kafkaSchemaRegistryAclCreatePostExecute.call(this);
		case 'kafkaSchemaRegistryAclGetGet':
			return kafkaSchemaRegistryAclGetGetExecute.call(this);
		case 'kafkaSchemaRegistryAclDeleteDelete':
			return kafkaSchemaRegistryAclDeleteDeleteExecute.call(this);
		case 'kafkaTopicListGet':
			return kafkaTopicListGetExecute.call(this);
		case 'kafkaTopicCreatePost':
			return kafkaTopicCreatePostExecute.call(this);
		case 'kafkaTopicGetGet':
			return kafkaTopicGetGetExecute.call(this);
		case 'kafkaTopicUpdatePut':
			return kafkaTopicUpdatePutExecute.call(this);
		case 'kafkaTopicDeleteDelete':
			return kafkaTopicDeleteDeleteExecute.call(this);
		case 'kafkaTopicAclListGet':
			return kafkaTopicAclListGetExecute.call(this);
		case 'kafkaTopicAclCreatePost':
			return kafkaTopicAclCreatePostExecute.call(this);
		case 'kafkaTopicAclGetGet':
			return kafkaTopicAclGetGetExecute.call(this);
		case 'kafkaTopicAclDeleteDelete':
			return kafkaTopicAclDeleteDeleteExecute.call(this);
		case 'kafkaUserListGet':
			return kafkaUserListGetExecute.call(this);
		case 'kafkaUserCreatePost':
			return kafkaUserCreatePostExecute.call(this);
		case 'kafkaUserGetGet':
			return kafkaUserGetGetExecute.call(this);
		case 'kafkaUserDeleteDelete':
			return kafkaUserDeleteDeleteExecute.call(this);
		case 'kafkaUserAccessGet':
			return kafkaUserAccessGetExecute.call(this);
		case 'kafkaUserCredentialsResetPost':
			return kafkaUserCredentialsResetPostExecute.call(this);
		case 'kafkaConnectClusterListGet':
			return kafkaConnectClusterListGetExecute.call(this);
		case 'kafkaConnectClusterGetGet':
			return kafkaConnectClusterGetGetExecute.call(this);
		case 'kafkaConnectClusterCreatePost':
			return kafkaConnectClusterCreatePostExecute.call(this);
		case 'kafkaConnectClusterUpdatePut':
			return kafkaConnectClusterUpdatePutExecute.call(this);
		case 'kafkaConnectClusterDeleteDelete':
			return kafkaConnectClusterDeleteDeleteExecute.call(this);
		case 'kafkaConnectBackupListGet':
			return kafkaConnectBackupListGetExecute.call(this);
		case 'kafkaConnectBackupCreatePost':
			return kafkaConnectBackupCreatePostExecute.call(this);
		case 'kafkaConnectBackupGetGet':
			return kafkaConnectBackupGetGetExecute.call(this);
		case 'kafkaConnectBackupDeleteDelete':
			return kafkaConnectBackupDeleteDeleteExecute.call(this);
		case 'kafkaConnectUserListGet':
			return kafkaConnectUserListGetExecute.call(this);
		case 'kafkaConnectUserCreatePost':
			return kafkaConnectUserCreatePostExecute.call(this);
		case 'kafkaConnectUserGetGet':
			return kafkaConnectUserGetGetExecute.call(this);
		case 'kafkaConnectUserUpdatePut':
			return kafkaConnectUserUpdatePutExecute.call(this);
		case 'kafkaConnectUserDeleteDelete':
			return kafkaConnectUserDeleteDeleteExecute.call(this);
		case 'kafkaConnectNodeListGet':
			return kafkaConnectNodeListGetExecute.call(this);
		case 'kafkaConnectNodeCreatePost':
			return kafkaConnectNodeCreatePostExecute.call(this);
		case 'kafkaConnectNodeGetGet':
			return kafkaConnectNodeGetGetExecute.call(this);
		case 'kafkaConnectNodeUpdatePut':
			return kafkaConnectNodeUpdatePutExecute.call(this);
		case 'kafkaConnectNodeDeleteDelete':
			return kafkaConnectNodeDeleteDeleteExecute.call(this);
		case 'kafkaConnectIpRestrictionListGet':
			return kafkaConnectIpRestrictionListGetExecute.call(this);
		case 'kafkaConnectIpRestrictionCreatePost':
			return kafkaConnectIpRestrictionCreatePostExecute.call(this);
		case 'kafkaConnectLogSubscriptionListGet':
			return kafkaConnectLogSubscriptionListGetExecute.call(this);
		case 'kafkaConnectLogSubscriptionCreatePost':
			return kafkaConnectLogSubscriptionCreatePostExecute.call(this);
		case 'kafkaConnectLogSubscriptionGetGet':
			return kafkaConnectLogSubscriptionGetGetExecute.call(this);
		case 'kafkaConnectMaintenanceGet':
			return kafkaConnectMaintenanceGetExecute.call(this);
		case 'kafkaConnectMaintenanceUpdatePut':
			return kafkaConnectMaintenanceUpdatePutExecute.call(this);
		case 'kafkaConnectMetricGet':
			return kafkaConnectMetricGetExecute.call(this);
		case 'kafkaConnectPrometheusGet':
			return kafkaConnectPrometheusGetExecute.call(this);
		case 'kafkaConnectCertificateListGet':
			return kafkaConnectCertificateListGetExecute.call(this);
		case 'kafkaConnectCertificateCreatePost':
			return kafkaConnectCertificateCreatePostExecute.call(this);
		case 'kafkaMirrorMakerClusterListGet':
			return kafkaMirrorMakerClusterListGetExecute.call(this);
		case 'kafkaMirrorMakerClusterGetGet':
			return kafkaMirrorMakerClusterGetGetExecute.call(this);
		case 'kafkaMirrorMakerClusterCreatePost':
			return kafkaMirrorMakerClusterCreatePostExecute.call(this);
		case 'kafkaMirrorMakerClusterUpdatePut':
			return kafkaMirrorMakerClusterUpdatePutExecute.call(this);
		case 'kafkaMirrorMakerClusterDeleteDelete':
			return kafkaMirrorMakerClusterDeleteDeleteExecute.call(this);
		case 'kafkaMirrorMakerBackupListGet':
			return kafkaMirrorMakerBackupListGetExecute.call(this);
		case 'kafkaMirrorMakerBackupCreatePost':
			return kafkaMirrorMakerBackupCreatePostExecute.call(this);
		case 'kafkaMirrorMakerBackupGetGet':
			return kafkaMirrorMakerBackupGetGetExecute.call(this);
		case 'kafkaMirrorMakerBackupDeleteDelete':
			return kafkaMirrorMakerBackupDeleteDeleteExecute.call(this);
		case 'kafkaMirrorMakerUserListGet':
			return kafkaMirrorMakerUserListGetExecute.call(this);
		case 'kafkaMirrorMakerUserCreatePost':
			return kafkaMirrorMakerUserCreatePostExecute.call(this);
		case 'kafkaMirrorMakerUserGetGet':
			return kafkaMirrorMakerUserGetGetExecute.call(this);
		case 'kafkaMirrorMakerUserUpdatePut':
			return kafkaMirrorMakerUserUpdatePutExecute.call(this);
		case 'kafkaMirrorMakerUserDeleteDelete':
			return kafkaMirrorMakerUserDeleteDeleteExecute.call(this);
		case 'kafkaMirrorMakerNodeListGet':
			return kafkaMirrorMakerNodeListGetExecute.call(this);
		case 'kafkaMirrorMakerNodeCreatePost':
			return kafkaMirrorMakerNodeCreatePostExecute.call(this);
		case 'kafkaMirrorMakerNodeGetGet':
			return kafkaMirrorMakerNodeGetGetExecute.call(this);
		case 'kafkaMirrorMakerNodeUpdatePut':
			return kafkaMirrorMakerNodeUpdatePutExecute.call(this);
		case 'kafkaMirrorMakerNodeDeleteDelete':
			return kafkaMirrorMakerNodeDeleteDeleteExecute.call(this);
		case 'kafkaMirrorMakerIpRestrictionListGet':
			return kafkaMirrorMakerIpRestrictionListGetExecute.call(this);
		case 'kafkaMirrorMakerIpRestrictionCreatePost':
			return kafkaMirrorMakerIpRestrictionCreatePostExecute.call(this);
		case 'kafkaMirrorMakerLogSubscriptionListGet':
			return kafkaMirrorMakerLogSubscriptionListGetExecute.call(this);
		case 'kafkaMirrorMakerLogSubscriptionCreatePost':
			return kafkaMirrorMakerLogSubscriptionCreatePostExecute.call(this);
		case 'kafkaMirrorMakerLogSubscriptionGetGet':
			return kafkaMirrorMakerLogSubscriptionGetGetExecute.call(this);
		case 'kafkaMirrorMakerMaintenanceGet':
			return kafkaMirrorMakerMaintenanceGetExecute.call(this);
		case 'kafkaMirrorMakerMaintenanceUpdatePut':
			return kafkaMirrorMakerMaintenanceUpdatePutExecute.call(this);
		case 'kafkaMirrorMakerMetricGet':
			return kafkaMirrorMakerMetricGetExecute.call(this);
		case 'kafkaMirrorMakerPrometheusGet':
			return kafkaMirrorMakerPrometheusGetExecute.call(this);
		case 'kafkaMirrorMakerCertificateListGet':
			return kafkaMirrorMakerCertificateListGetExecute.call(this);
		case 'kafkaMirrorMakerCertificateCreatePost':
			return kafkaMirrorMakerCertificateCreatePostExecute.call(this);

		case 'm3aggregatorClusterListGet':
			return m3aggregatorClusterListGetExecute.call(this);
		case 'm3aggregatorClusterGetGet':
			return m3aggregatorClusterGetGetExecute.call(this);
		case 'm3aggregatorClusterCreatePost':
			return m3aggregatorClusterCreatePostExecute.call(this);
		case 'm3aggregatorClusterUpdatePut':
			return m3aggregatorClusterUpdatePutExecute.call(this);
		case 'm3aggregatorClusterDeleteDelete':
			return m3aggregatorClusterDeleteDeleteExecute.call(this);
		case 'm3aggregatorBackupListGet':
			return m3aggregatorBackupListGetExecute.call(this);
		case 'm3aggregatorBackupCreatePost':
			return m3aggregatorBackupCreatePostExecute.call(this);
		case 'm3aggregatorBackupGetGet':
			return m3aggregatorBackupGetGetExecute.call(this);
		case 'm3aggregatorBackupDeleteDelete':
			return m3aggregatorBackupDeleteDeleteExecute.call(this);
		case 'm3aggregatorUserListGet':
			return m3aggregatorUserListGetExecute.call(this);
		case 'm3aggregatorUserCreatePost':
			return m3aggregatorUserCreatePostExecute.call(this);
		case 'm3aggregatorUserGetGet':
			return m3aggregatorUserGetGetExecute.call(this);
		case 'm3aggregatorUserUpdatePut':
			return m3aggregatorUserUpdatePutExecute.call(this);
		case 'm3aggregatorUserDeleteDelete':
			return m3aggregatorUserDeleteDeleteExecute.call(this);
		case 'm3aggregatorNodeListGet':
			return m3aggregatorNodeListGetExecute.call(this);
		case 'm3aggregatorNodeCreatePost':
			return m3aggregatorNodeCreatePostExecute.call(this);
		case 'm3aggregatorNodeGetGet':
			return m3aggregatorNodeGetGetExecute.call(this);
		case 'm3aggregatorNodeUpdatePut':
			return m3aggregatorNodeUpdatePutExecute.call(this);
		case 'm3aggregatorNodeDeleteDelete':
			return m3aggregatorNodeDeleteDeleteExecute.call(this);
		case 'm3aggregatorIpRestrictionListGet':
			return m3aggregatorIpRestrictionListGetExecute.call(this);
		case 'm3aggregatorIpRestrictionCreatePost':
			return m3aggregatorIpRestrictionCreatePostExecute.call(this);
		case 'm3aggregatorLogSubscriptionListGet':
			return m3aggregatorLogSubscriptionListGetExecute.call(this);
		case 'm3aggregatorLogSubscriptionCreatePost':
			return m3aggregatorLogSubscriptionCreatePostExecute.call(this);
		case 'm3aggregatorLogSubscriptionGetGet':
			return m3aggregatorLogSubscriptionGetGetExecute.call(this);
		case 'm3aggregatorMaintenanceGet':
			return m3aggregatorMaintenanceGetExecute.call(this);
		case 'm3aggregatorMaintenanceUpdatePut':
			return m3aggregatorMaintenanceUpdatePutExecute.call(this);
		case 'm3aggregatorMetricGet':
			return m3aggregatorMetricGetExecute.call(this);
		case 'm3aggregatorPrometheusGet':
			return m3aggregatorPrometheusGetExecute.call(this);
		case 'm3aggregatorCertificateListGet':
			return m3aggregatorCertificateListGetExecute.call(this);
		case 'm3aggregatorCertificateCreatePost':
			return m3aggregatorCertificateCreatePostExecute.call(this);
		case 'm3dbClusterListGet':
			return m3dbClusterListGetExecute.call(this);
		case 'm3dbClusterGetGet':
			return m3dbClusterGetGetExecute.call(this);
		case 'm3dbClusterCreatePost':
			return m3dbClusterCreatePostExecute.call(this);
		case 'm3dbClusterUpdatePut':
			return m3dbClusterUpdatePutExecute.call(this);
		case 'm3dbClusterDeleteDelete':
			return m3dbClusterDeleteDeleteExecute.call(this);
		case 'm3dbBackupListGet':
			return m3dbBackupListGetExecute.call(this);
		case 'm3dbBackupCreatePost':
			return m3dbBackupCreatePostExecute.call(this);
		case 'm3dbBackupGetGet':
			return m3dbBackupGetGetExecute.call(this);
		case 'm3dbBackupDeleteDelete':
			return m3dbBackupDeleteDeleteExecute.call(this);
		case 'm3dbUserListGet':
			return m3dbUserListGetExecute.call(this);
		case 'm3dbUserCreatePost':
			return m3dbUserCreatePostExecute.call(this);
		case 'm3dbUserGetGet':
			return m3dbUserGetGetExecute.call(this);
		case 'm3dbUserUpdatePut':
			return m3dbUserUpdatePutExecute.call(this);
		case 'm3dbUserDeleteDelete':
			return m3dbUserDeleteDeleteExecute.call(this);
		case 'm3dbNodeListGet':
			return m3dbNodeListGetExecute.call(this);
		case 'm3dbNodeCreatePost':
			return m3dbNodeCreatePostExecute.call(this);
		case 'm3dbNodeGetGet':
			return m3dbNodeGetGetExecute.call(this);
		case 'm3dbNodeUpdatePut':
			return m3dbNodeUpdatePutExecute.call(this);
		case 'm3dbNodeDeleteDelete':
			return m3dbNodeDeleteDeleteExecute.call(this);
		case 'm3dbIpRestrictionListGet':
			return m3dbIpRestrictionListGetExecute.call(this);
		case 'm3dbIpRestrictionCreatePost':
			return m3dbIpRestrictionCreatePostExecute.call(this);
		case 'm3dbLogSubscriptionListGet':
			return m3dbLogSubscriptionListGetExecute.call(this);
		case 'm3dbLogSubscriptionCreatePost':
			return m3dbLogSubscriptionCreatePostExecute.call(this);
		case 'm3dbLogSubscriptionGetGet':
			return m3dbLogSubscriptionGetGetExecute.call(this);
		case 'm3dbMaintenanceGet':
			return m3dbMaintenanceGetExecute.call(this);
		case 'm3dbMaintenanceUpdatePut':
			return m3dbMaintenanceUpdatePutExecute.call(this);
		case 'm3dbMetricGet':
			return m3dbMetricGetExecute.call(this);
		case 'm3dbPrometheusGet':
			return m3dbPrometheusGetExecute.call(this);
		case 'm3dbCertificateListGet':
			return m3dbCertificateListGetExecute.call(this);
		case 'm3dbCertificateCreatePost':
			return m3dbCertificateCreatePostExecute.call(this);
		case 'mongodbClusterListGet':
			return mongodbClusterListGetExecute.call(this);
		case 'mongodbClusterGetGet':
			return mongodbClusterGetGetExecute.call(this);
		case 'mongodbClusterCreatePost':
			return mongodbClusterCreatePostExecute.call(this);
		case 'mongodbClusterUpdatePut':
			return mongodbClusterUpdatePutExecute.call(this);
		case 'mongodbClusterDeleteDelete':
			return mongodbClusterDeleteDeleteExecute.call(this);
		case 'mongodbBackupListGet':
			return mongodbBackupListGetExecute.call(this);
		case 'mongodbBackupCreatePost':
			return mongodbBackupCreatePostExecute.call(this);
		case 'mongodbBackupGetGet':
			return mongodbBackupGetGetExecute.call(this);
		case 'mongodbBackupDeleteDelete':
			return mongodbBackupDeleteDeleteExecute.call(this);
		case 'mongodbUserListGet':
			return mongodbUserListGetExecute.call(this);
		case 'mongodbUserCreatePost':
			return mongodbUserCreatePostExecute.call(this);
		case 'mongodbUserGetGet':
			return mongodbUserGetGetExecute.call(this);
		case 'mongodbUserUpdatePut':
			return mongodbUserUpdatePutExecute.call(this);
		case 'mongodbUserDeleteDelete':
			return mongodbUserDeleteDeleteExecute.call(this);
		case 'mongodbNodeListGet':
			return mongodbNodeListGetExecute.call(this);
		case 'mongodbNodeCreatePost':
			return mongodbNodeCreatePostExecute.call(this);
		case 'mongodbNodeGetGet':
			return mongodbNodeGetGetExecute.call(this);
		case 'mongodbNodeUpdatePut':
			return mongodbNodeUpdatePutExecute.call(this);
		case 'mongodbNodeDeleteDelete':
			return mongodbNodeDeleteDeleteExecute.call(this);
		case 'mongodbIpRestrictionListGet':
			return mongodbIpRestrictionListGetExecute.call(this);
		case 'mongodbIpRestrictionCreatePost':
			return mongodbIpRestrictionCreatePostExecute.call(this);
		case 'mongodbLogSubscriptionListGet':
			return mongodbLogSubscriptionListGetExecute.call(this);
		case 'mongodbLogSubscriptionCreatePost':
			return mongodbLogSubscriptionCreatePostExecute.call(this);
		case 'mongodbLogSubscriptionGetGet':
			return mongodbLogSubscriptionGetGetExecute.call(this);
		case 'mongodbMaintenanceGet':
			return mongodbMaintenanceGetExecute.call(this);
		case 'mongodbMaintenanceUpdatePut':
			return mongodbMaintenanceUpdatePutExecute.call(this);
		case 'mongodbMetricGet':
			return mongodbMetricGetExecute.call(this);
		case 'mongodbPrometheusGet':
			return mongodbPrometheusGetExecute.call(this);
		case 'mongodbCertificateListGet':
			return mongodbCertificateListGetExecute.call(this);
		case 'mongodbCertificateCreatePost':
			return mongodbCertificateCreatePostExecute.call(this);
		case 'mongodbIntegrationListGet':
			return mongodbIntegrationListGetExecute.call(this);
		case 'mongodbIntegrationCreatePost':
			return mongodbIntegrationCreatePostExecute.call(this);
		case 'mysqlClusterListGet':
			return mysqlClusterListGetExecute.call(this);
		case 'mysqlClusterGetGet':
			return mysqlClusterGetGetExecute.call(this);
		case 'mysqlClusterCreatePost':
			return mysqlClusterCreatePostExecute.call(this);
		case 'mysqlClusterUpdatePut':
			return mysqlClusterUpdatePutExecute.call(this);
		case 'mysqlClusterDeleteDelete':
			return mysqlClusterDeleteDeleteExecute.call(this);
		case 'mysqlBackupListGet':
			return mysqlBackupListGetExecute.call(this);
		case 'mysqlBackupCreatePost':
			return mysqlBackupCreatePostExecute.call(this);
		case 'mysqlBackupGetGet':
			return mysqlBackupGetGetExecute.call(this);
		case 'mysqlBackupDeleteDelete':
			return mysqlBackupDeleteDeleteExecute.call(this);
		case 'mysqlUserListGet':
			return mysqlUserListGetExecute.call(this);
		case 'mysqlUserCreatePost':
			return mysqlUserCreatePostExecute.call(this);
		case 'mysqlUserGetGet':
			return mysqlUserGetGetExecute.call(this);
		case 'mysqlUserUpdatePut':
			return mysqlUserUpdatePutExecute.call(this);
		case 'mysqlUserDeleteDelete':
			return mysqlUserDeleteDeleteExecute.call(this);
		case 'mysqlNodeListGet':
			return mysqlNodeListGetExecute.call(this);
		case 'mysqlNodeCreatePost':
			return mysqlNodeCreatePostExecute.call(this);
		case 'mysqlNodeGetGet':
			return mysqlNodeGetGetExecute.call(this);
		case 'mysqlNodeUpdatePut':
			return mysqlNodeUpdatePutExecute.call(this);
		case 'mysqlNodeDeleteDelete':
			return mysqlNodeDeleteDeleteExecute.call(this);
		case 'mysqlIpRestrictionListGet':
			return mysqlIpRestrictionListGetExecute.call(this);
		case 'mysqlIpRestrictionCreatePost':
			return mysqlIpRestrictionCreatePostExecute.call(this);
		case 'mysqlLogSubscriptionListGet':
			return mysqlLogSubscriptionListGetExecute.call(this);
		case 'mysqlLogSubscriptionCreatePost':
			return mysqlLogSubscriptionCreatePostExecute.call(this);
		case 'mysqlLogSubscriptionGetGet':
			return mysqlLogSubscriptionGetGetExecute.call(this);
		case 'mysqlMaintenanceGet':
			return mysqlMaintenanceGetExecute.call(this);
		case 'mysqlMaintenanceUpdatePut':
			return mysqlMaintenanceUpdatePutExecute.call(this);
		case 'mysqlMetricGet':
			return mysqlMetricGetExecute.call(this);
		case 'mysqlPrometheusGet':
			return mysqlPrometheusGetExecute.call(this);
		case 'mysqlCertificateListGet':
			return mysqlCertificateListGetExecute.call(this);
		case 'mysqlCertificateCreatePost':
			return mysqlCertificateCreatePostExecute.call(this);
		case 'mysqlIntegrationListGet':
			return mysqlIntegrationListGetExecute.call(this);
		case 'mysqlIntegrationCreatePost':
			return mysqlIntegrationCreatePostExecute.call(this);
		case 'opensearchAdvancedConfigurationListGet':
			return opensearchAdvancedConfigurationListGetExecute.call(this);
		case 'opensearchAdvancedConfigurationUpdatePut':
			return opensearchAdvancedConfigurationUpdatePutExecute.call(this);
		case 'opensearchBackupGetGet':
			return opensearchBackupGetGetExecute.call(this);
		case 'opensearchBackupListGet':
			return opensearchBackupListGetExecute.call(this);
		case 'opensearchCapabilitiesAdvancedConfigurationListGet':
			return opensearchCapabilitiesAdvancedConfigurationListGetExecute.call(this);
		case 'opensearchCapabilitiesBackupRegionsListGet':
			return opensearchCapabilitiesBackupRegionsListGetExecute.call(this);
		case 'opensearchCapabilitiesIntegrationListGet':
			return opensearchCapabilitiesIntegrationListGetExecute.call(this);
		case 'opensearchClusterCreatePost':
			return opensearchClusterCreatePostExecute.call(this);
		case 'opensearchClusterDeleteDelete':
			return opensearchClusterDeleteDeleteExecute.call(this);
		case 'opensearchClusterGetGet':
			return opensearchClusterGetGetExecute.call(this);
		case 'opensearchClusterListGet':
			return opensearchClusterListGetExecute.call(this);
		case 'opensearchClusterUpdatePut':
			return opensearchClusterUpdatePutExecute.call(this);
		case 'opensearchIndexDeleteDelete':
			return opensearchIndexDeleteDeleteExecute.call(this);
		case 'opensearchIndexGetGet':
			return opensearchIndexGetGetExecute.call(this);
		case 'opensearchIndexListGet':
			return opensearchIndexListGetExecute.call(this);
		case 'opensearchIntegrationCreatePost':
			return opensearchIntegrationCreatePostExecute.call(this);
		case 'opensearchIntegrationDeleteDelete':
			return opensearchIntegrationDeleteDeleteExecute.call(this);
		case 'opensearchIntegrationGetGet':
			return opensearchIntegrationGetGetExecute.call(this);
		case 'opensearchIntegrationListGet':
			return opensearchIntegrationListGetExecute.call(this);
		case 'opensearchIpRestrictionCreatePost':
			return opensearchIpRestrictionCreatePostExecute.call(this);
		case 'opensearchIpRestrictionDeleteDelete':
			return opensearchIpRestrictionDeleteDeleteExecute.call(this);
		case 'opensearchIpRestrictionGetGet':
			return opensearchIpRestrictionGetGetExecute.call(this);
		case 'opensearchIpRestrictionListGet':
			return opensearchIpRestrictionListGetExecute.call(this);
		case 'opensearchIpRestrictionUpdatePut':
			return opensearchIpRestrictionUpdatePutExecute.call(this);
		case 'opensearchLogKindGet':
			return opensearchLogKindGetExecute.call(this);
		case 'opensearchLogKindListGet':
			return opensearchLogKindListGetExecute.call(this);
		case 'opensearchLogSubscriptionCreatePost':
			return opensearchLogSubscriptionCreatePostExecute.call(this);
		case 'opensearchLogSubscriptionDeleteDelete':
			return opensearchLogSubscriptionDeleteDeleteExecute.call(this);
		case 'opensearchLogSubscriptionGet':
			return opensearchLogSubscriptionGetExecute.call(this);
		case 'opensearchLogSubscriptionListGet':
			return opensearchLogSubscriptionListGetExecute.call(this);
		case 'opensearchLogUrlCreatePost':
			return opensearchLogUrlCreatePostExecute.call(this);
		case 'opensearchLogsListGet':
			return opensearchLogsListGetExecute.call(this);
		case 'opensearchMaintenanceApplyPost':
			return opensearchMaintenanceApplyPostExecute.call(this);
		case 'opensearchMaintenanceGetGet':
			return opensearchMaintenanceGetGetExecute.call(this);
		case 'opensearchMaintenanceListGet':
			return opensearchMaintenanceListGetExecute.call(this);
		case 'opensearchMetricGetGet':
			return opensearchMetricGetGetExecute.call(this);
		case 'opensearchMetricListGet':
			return opensearchMetricListGetExecute.call(this);
		case 'opensearchNodeGetGet':
			return opensearchNodeGetGetExecute.call(this);
		case 'opensearchNodeListGet':
			return opensearchNodeListGetExecute.call(this);
		case 'opensearchPatternCreatePost':
			return opensearchPatternCreatePostExecute.call(this);
		case 'opensearchPatternDeleteDelete':
			return opensearchPatternDeleteDeleteExecute.call(this);
		case 'opensearchPatternGetGet':
			return opensearchPatternGetGetExecute.call(this);
		case 'opensearchPatternListGet':
			return opensearchPatternListGetExecute.call(this);
		case 'opensearchPermissionsListGet':
			return opensearchPermissionsListGetExecute.call(this);
		case 'opensearchPrometheusCredentialsResetPost':
			return opensearchPrometheusCredentialsResetPostExecute.call(this);
		case 'opensearchPrometheusListGet':
			return opensearchPrometheusListGetExecute.call(this);
		case 'opensearchUserCreatePost':
			return opensearchUserCreatePostExecute.call(this);
		case 'opensearchUserCredentialsResetPost':
			return opensearchUserCredentialsResetPostExecute.call(this);
		case 'opensearchUserDeleteDelete':
			return opensearchUserDeleteDeleteExecute.call(this);
		case 'opensearchUserGetGet':
			return opensearchUserGetGetExecute.call(this);
		case 'opensearchUserListGet':
			return opensearchUserListGetExecute.call(this);
		case 'opensearchUserUpdatePut':
			return opensearchUserUpdatePutExecute.call(this);
		case 'postgresqlClusterListGet':
			return postgresqlClusterListGetExecute.call(this);
		case 'postgresqlClusterGetGet':
			return postgresqlClusterGetGetExecute.call(this);
		case 'postgresqlClusterCreatePost':
			return postgresqlClusterCreatePostExecute.call(this);
		case 'postgresqlClusterUpdatePut':
			return postgresqlClusterUpdatePutExecute.call(this);
		case 'postgresqlClusterDeleteDelete':
			return postgresqlClusterDeleteDeleteExecute.call(this);
		case 'postgresqlBackupListGet':
			return postgresqlBackupListGetExecute.call(this);
		case 'postgresqlBackupCreatePost':
			return postgresqlBackupCreatePostExecute.call(this);
		case 'postgresqlBackupGetGet':
			return postgresqlBackupGetGetExecute.call(this);
		case 'postgresqlBackupDeleteDelete':
			return postgresqlBackupDeleteDeleteExecute.call(this);
		case 'postgresqlUserListGet':
			return postgresqlUserListGetExecute.call(this);
		case 'postgresqlUserCreatePost':
			return postgresqlUserCreatePostExecute.call(this);
		case 'postgresqlUserGetGet':
			return postgresqlUserGetGetExecute.call(this);
		case 'postgresqlUserUpdatePut':
			return postgresqlUserUpdatePutExecute.call(this);
		case 'postgresqlUserDeleteDelete':
			return postgresqlUserDeleteDeleteExecute.call(this);
		case 'postgresqlNodeListGet':
			return postgresqlNodeListGetExecute.call(this);
		case 'postgresqlNodeCreatePost':
			return postgresqlNodeCreatePostExecute.call(this);
		case 'postgresqlNodeGetGet':
			return postgresqlNodeGetGetExecute.call(this);
		case 'postgresqlNodeUpdatePut':
			return postgresqlNodeUpdatePutExecute.call(this);
		case 'postgresqlNodeDeleteDelete':
			return postgresqlNodeDeleteDeleteExecute.call(this);
		case 'postgresqlIpRestrictionListGet':
			return postgresqlIpRestrictionListGetExecute.call(this);
		case 'postgresqlIpRestrictionCreatePost':
			return postgresqlIpRestrictionCreatePostExecute.call(this);
		case 'postgresqlLogSubscriptionListGet':
			return postgresqlLogSubscriptionListGetExecute.call(this);
		case 'postgresqlLogSubscriptionCreatePost':
			return postgresqlLogSubscriptionCreatePostExecute.call(this);
		case 'postgresqlLogSubscriptionGetGet':
			return postgresqlLogSubscriptionGetGetExecute.call(this);
		case 'postgresqlMaintenanceGet':
			return postgresqlMaintenanceGetExecute.call(this);
		case 'postgresqlMaintenanceUpdatePut':
			return postgresqlMaintenanceUpdatePutExecute.call(this);
		case 'postgresqlMetricGet':
			return postgresqlMetricGetExecute.call(this);
		case 'postgresqlPrometheusGet':
			return postgresqlPrometheusGetExecute.call(this);
		case 'postgresqlCertificateListGet':
			return postgresqlCertificateListGetExecute.call(this);
		case 'postgresqlCertificateCreatePost':
			return postgresqlCertificateCreatePostExecute.call(this);
		case 'postgresqlIntegrationListGet':
			return postgresqlIntegrationListGetExecute.call(this);
		case 'postgresqlIntegrationCreatePost':
			return postgresqlIntegrationCreatePostExecute.call(this);
		case 'kubeAuditLogsPost':
			return kubeAuditLogsPostExecute.call(this);
		case 'kubeCustomizationGet':
			return kubeCustomizationGetExecute.call(this);
		case 'kubeCustomizationUpdatePut':
			return kubeCustomizationUpdatePutExecute.call(this);
		case 'kubeDeleteDelete':
			return kubeDeleteDeleteExecute.call(this);
		case 'kubeFlavorsGet':
			return kubeFlavorsGetExecute.call(this);
		case 'kubeGetGet':
			return kubeGetGetExecute.call(this);
		case 'kubeIpRestrictionsDeleteDelete':
			return kubeIpRestrictionsDeleteDeleteExecute.call(this);
		case 'kubeIpRestrictionsGet':
			return kubeIpRestrictionsGetExecute.call(this);
		case 'kubeIpRestrictionsPost':
			return kubeIpRestrictionsPostExecute.call(this);
		case 'kubeIpRestrictionsUpdatePut':
			return kubeIpRestrictionsUpdatePutExecute.call(this);
		case 'kubeKubeconfigPost':
			return kubeKubeconfigPostExecute.call(this);
		case 'kubeKubeconfigResetPost':
			return kubeKubeconfigResetPostExecute.call(this);
		case 'kubeListGet':
			return kubeListGetExecute.call(this);
		case 'kubeLogSubscriptionDeleteDelete':
			return kubeLogSubscriptionDeleteDeleteExecute.call(this);
		case 'kubeLogSubscriptionGet':
			return kubeLogSubscriptionGetExecute.call(this);
		case 'kubeLogSubscriptionPost':
			return kubeLogSubscriptionPostExecute.call(this);
		case 'kubeLogSubscriptionListGet':
			return kubeLogSubscriptionListGetExecute.call(this);
		case 'kubeLogUrlPost':
			return kubeLogUrlPostExecute.call(this);
		case 'kubeMetricsEtcdUsageGet':
			return kubeMetricsEtcdUsageGetExecute.call(this);
		case 'kubeNodeDeleteDelete':
			return kubeNodeDeleteDeleteExecute.call(this);
		case 'kubeNodeGet':
			return kubeNodeGetExecute.call(this);
		case 'kubeNodeListGet':
			return kubeNodeListGetExecute.call(this);
		case 'kubeNodepoolCreatePost':
			return kubeNodepoolCreatePostExecute.call(this);
		case 'kubeNodepoolListGet':
			return kubeNodepoolListGetExecute.call(this);
		case 'kubeNodepoolDeleteDelete':
			return kubeNodepoolDeleteDeleteExecute.call(this);
		case 'kubeNodepoolGetGet':
			return kubeNodepoolGetGetExecute.call(this);
		case 'kubeNodepoolListNodepoolNodesGet':
			return kubeNodepoolListNodepoolNodesGetExecute.call(this);
		case 'kubeNodepoolUpdatePut':
			return kubeNodepoolUpdatePutExecute.call(this);
		case 'kubeOpenIdConnectDeleteDelete':
			return kubeOpenIdConnectDeleteDeleteExecute.call(this);
		case 'kubeOpenIdConnectGet':
			return kubeOpenIdConnectGetExecute.call(this);
		case 'kubeOpenIdConnectPost':
			return kubeOpenIdConnectPostExecute.call(this);
		case 'kubeOpenIdConnectUpdatePut':
			return kubeOpenIdConnectUpdatePutExecute.call(this);
		case 'kubePrivateNetworkConfigurationGet':
			return kubePrivateNetworkConfigurationGetExecute.call(this);
		case 'kubePrivateNetworkConfigurationUpdatePut':
			return kubePrivateNetworkConfigurationUpdatePutExecute.call(this);
		case 'kubeResetPost':
			return kubeResetPostExecute.call(this);
		case 'kubeRestartPost':
			return kubeRestartPostExecute.call(this);
		case 'kubeUpdateLoadBalancersSubnetIdUpdatePut':
			return kubeUpdateLoadBalancersSubnetIdUpdatePutExecute.call(this);
		case 'kubeUpdatePolicyUpdatePut':
			return kubeUpdatePolicyUpdatePutExecute.call(this);
		case 'kubeUpdatePost':
			return kubeUpdatePostExecute.call(this);
		case 'kubeUpdatePut':
			return kubeUpdatePutExecute.call(this);
		case 'instanceActiveMonthlyBillingPost':
			return instanceActiveMonthlyBillingPostExecute.call(this);
		case 'instanceApplicationAccessPost':
			return instanceApplicationAccessPostExecute.call(this);
		case 'instanceBulkPost':
			return instanceBulkPostExecute.call(this);
		case 'instanceCreatePost':
			return instanceCreatePostExecute.call(this);
		case 'instanceDeleteDelete':
			return instanceDeleteDeleteExecute.call(this);
		case 'instanceGetGet':
			return instanceGetGetExecute.call(this);
		case 'instanceGroupCreatePost':
			return instanceGroupCreatePostExecute.call(this);
		case 'instanceGroupDeleteDelete':
			return instanceGroupDeleteDeleteExecute.call(this);
		case 'instanceGroupGetGet':
			return instanceGroupGetGetExecute.call(this);
		case 'instanceGroupListGet':
			return instanceGroupListGetExecute.call(this);
		case 'instanceInterfaceCreatePost':
			return instanceInterfaceCreatePostExecute.call(this);
		case 'instanceInterfaceDeleteDelete':
			return instanceInterfaceDeleteDeleteExecute.call(this);
		case 'instanceInterfaceGetGet':
			return instanceInterfaceGetGetExecute.call(this);
		case 'instanceInterfaceListGet':
			return instanceInterfaceListGetExecute.call(this);
		case 'instanceListGet':
			return instanceListGetExecute.call(this);
		case 'instanceRebootPost':
			return instanceRebootPostExecute.call(this);
		case 'instanceReinstallPost':
			return instanceReinstallPostExecute.call(this);
		case 'instanceRescueModePost':
			return instanceRescueModePostExecute.call(this);
		case 'instanceResizePost':
			return instanceResizePostExecute.call(this);
		case 'instanceResumePost':
			return instanceResumePostExecute.call(this);
		case 'instanceShelvePost':
			return instanceShelvePostExecute.call(this);
		case 'instanceSnapshotPost':
			return instanceSnapshotPostExecute.call(this);
		case 'instanceStartPost':
			return instanceStartPostExecute.call(this);
		case 'instanceStopPost':
			return instanceStopPostExecute.call(this);
		case 'instanceUnshelvePost':
			return instanceUnshelvePostExecute.call(this);
		case 'instanceUpdatePut':
			return instanceUpdatePutExecute.call(this);
		case 'instanceVncPost':
			return instanceVncPostExecute.call(this);
		case 'networkCreatePrivateNetworkPost':
			return networkCreatePrivateNetworkPostExecute.call(this);
		case 'networkCreateSubnetPost':
			return networkCreateSubnetPostExecute.call(this);
		case 'networkDeletePrivateNetworkDelete':
			return networkDeletePrivateNetworkDeleteExecute.call(this);
		case 'networkDeleteSubnetDelete':
			return networkDeleteSubnetDeleteExecute.call(this);
		case 'networkGetPrivateNetworkDetailGet':
			return networkGetPrivateNetworkDetailGetExecute.call(this);
		case 'networkGetSubnetDetailGet':
			return networkGetSubnetDetailGetExecute.call(this);
		case 'networkListPrivateNetworksGet':
			return networkListPrivateNetworksGetExecute.call(this);
		case 'networkListPublicNetworksGet':
			return networkListPublicNetworksGetExecute.call(this);
		case 'networkListSubnetsGet':
			return networkListSubnetsGetExecute.call(this);
		case 'networkUpdatePrivateNetworkPut':
			return networkUpdatePrivateNetworkPutExecute.call(this);
		case 'networkUpdateSubnetPut':
			return networkUpdateSubnetPutExecute.call(this);
		case 'regionGetGet':
			return regionGetGetExecute.call(this);
		case 'regionListGet':
			return regionListGetExecute.call(this);
		case 'regionShareCreatePost':
			return regionShareCreatePostExecute.call(this);
		case 'regionShareDeleteDelete':
			return regionShareDeleteDeleteExecute.call(this);
		case 'regionShareGetGet':
			return regionShareGetGetExecute.call(this);
		case 'regionShareListGet':
			return regionShareListGetExecute.call(this);
		case 'regionShareSnapshotCreatePost':
			return regionShareSnapshotCreatePostExecute.call(this);
		case 'regionShareSnapshotDeleteDelete':
			return regionShareSnapshotDeleteDeleteExecute.call(this);
		case 'regionShareSnapshotGetGet':
			return regionShareSnapshotGetGetExecute.call(this);
		case 'regionShareSnapshotListGet':
			return regionShareSnapshotListGetExecute.call(this);
		case 'regionShareUpdatePut':
			return regionShareUpdatePutExecute.call(this);
		case 'regionVolumeCreatePost':
			return regionVolumeCreatePostExecute.call(this);
		case 'regionVolumeDeleteDelete':
			return regionVolumeDeleteDeleteExecute.call(this);
		case 'regionVolumeGetGet':
			return regionVolumeGetGetExecute.call(this);
		case 'regionVolumeListGet':
			return regionVolumeListGetExecute.call(this);
		case 'regionVolumeUpdatePut':
			return regionVolumeUpdatePutExecute.call(this);
		case 'regionWorkflowBackupCreatePost':
			return regionWorkflowBackupCreatePostExecute.call(this);
		case 'regionWorkflowBackupDeleteDelete':
			return regionWorkflowBackupDeleteDeleteExecute.call(this);
		case 'regionWorkflowBackupGetGet':
			return regionWorkflowBackupGetGetExecute.call(this);
		case 'regionWorkflowBackupUpdatePut':
			return regionWorkflowBackupUpdatePutExecute.call(this);
		case 'userCreatePost':
			return userCreatePostExecute.call(this);
		case 'userCreateS3CredentialSecretPost':
			return userCreateS3CredentialSecretPostExecute.call(this);
		case 'userCreateUserPolicyPost':
			return userCreateUserPolicyPostExecute.call(this);
		case 'userCreateUserRolePost':
			return userCreateUserRolePostExecute.call(this);
		case 'userCreateUserS3CredentialsPost':
			return userCreateUserS3CredentialsPostExecute.call(this);
		case 'userCreateUserTokenPost':
			return userCreateUserTokenPostExecute.call(this);
		case 'userDeleteDelete':
			return userDeleteDeleteExecute.call(this);
		case 'userDeleteUserRoleDelete':
			return userDeleteUserRoleDeleteExecute.call(this);
		case 'userDeleteUserS3CredentialDelete':
			return userDeleteUserS3CredentialDeleteExecute.call(this);
		case 'userGetDetailGet':
			return userGetDetailGetExecute.call(this);
		case 'userGetUserConfigurationGet':
			return userGetUserConfigurationGetExecute.call(this);
		case 'userGetUserOpenrcGet':
			return userGetUserOpenrcGetExecute.call(this);
		case 'userGetUserPolicyGet':
			return userGetUserPolicyGetExecute.call(this);
		case 'userGetUserRcloneGet':
			return userGetUserRcloneGetExecute.call(this);
		case 'userGetUserRoleDetailGet':
			return userGetUserRoleDetailGetExecute.call(this);
		case 'userGetUserRoleGet':
			return userGetUserRoleGetExecute.call(this);
		case 'userGetUserS3CredentialDetailGet':
			return userGetUserS3CredentialDetailGetExecute.call(this);
		case 'userGetUserS3CredentialsGet':
			return userGetUserS3CredentialsGetExecute.call(this);
		case 'userListGet':
			return userListGetExecute.call(this);
		case 'userRegeneratePasswordPost':
			return userRegeneratePasswordPostExecute.call(this);
		case 'userUpdateUserRolePut':
			return userUpdateUserRolePutExecute.call(this);
		case 'aclCreatePost':
			return aclCreatePostExecute.call(this);
		case 'aclDeleteDelete':
			return aclDeleteDeleteExecute.call(this);
		case 'aclListGet':
			return aclListGetExecute.call(this);
		case 'activateMonthlyBillingPost':
			return activateMonthlyBillingPostExecute.call(this);
		case 'alertingCreatePost':
			return alertingCreatePostExecute.call(this);
		case 'alertingDeleteDelete':
			return alertingDeleteDeleteExecute.call(this);
		case 'alertingGetDetailGet':
			return alertingGetDetailGetExecute.call(this);
		case 'alertingListGet':
			return alertingListGetExecute.call(this);
		case 'alertingUpdatePut':
			return alertingUpdatePutExecute.call(this);
		case 'billListGet':
			return billListGetExecute.call(this);
		case 'cancelPost':
			return cancelPostExecute.call(this);
		case 'capabilitiesGetKubeDetailGet':
			return capabilitiesGetKubeDetailGetExecute.call(this);
		case 'capabilitiesGetLoadbalancerDetailGet':
			return capabilitiesGetLoadbalancerDetailGetExecute.call(this);
		case 'capabilitiesGetRegionDetailGet':
			return capabilitiesGetRegionDetailGetExecute.call(this);
		case 'capabilitiesGetRegionProductDetailGet':
			return capabilitiesGetRegionProductDetailGetExecute.call(this);
		case 'capabilitiesListGet':
			return capabilitiesListGetExecute.call(this);
		case 'capabilitiesListKubeGet':
			return capabilitiesListKubeGetExecute.call(this);
		case 'capabilitiesListLoadbalancerGet':
			return capabilitiesListLoadbalancerGetExecute.call(this);
		case 'capabilitiesListRegionGet':
			return capabilitiesListRegionGetExecute.call(this);
		case 'changeContactPost':
			return changeContactPostExecute.call(this);
		case 'confirmTerminationPost':
			return confirmTerminationPostExecute.call(this);
		case 'containerRegistryCreatePost':
			return containerRegistryCreatePostExecute.call(this);
		case 'containerRegistryCreateUserPost':
			return containerRegistryCreateUserPostExecute.call(this);
		case 'containerRegistryDeleteDelete':
			return containerRegistryDeleteDeleteExecute.call(this);
		case 'containerRegistryDeleteUserDelete':
			return containerRegistryDeleteUserDeleteExecute.call(this);
		case 'containerRegistryGetDetailGet':
			return containerRegistryGetDetailGetExecute.call(this);
		case 'containerRegistryGetUserDetailGet':
			return containerRegistryGetUserDetailGetExecute.call(this);
		case 'containerRegistryListGet':
			return containerRegistryListGetExecute.call(this);
		case 'containerRegistryListUsersGet':
			return containerRegistryListUsersGetExecute.call(this);
		case 'containerRegistryUpdatePut':
			return containerRegistryUpdatePutExecute.call(this);
		case 'creditGetDetailGet':
			return creditGetDetailGetExecute.call(this);
		case 'creditListGet':
			return creditListGetExecute.call(this);
		case 'flavorGetDetailGet':
			return flavorGetDetailGetExecute.call(this);
		case 'flavorListGet':
			return flavorListGetExecute.call(this);
		case 'imageGetDetailGet':
			return imageGetDetailGetExecute.call(this);
		case 'imageListGet':
			return imageListGetExecute.call(this);
		case 'ipCreatePost':
			return ipCreatePostExecute.call(this);
		case 'ipDeleteDelete':
			return ipDeleteDeleteExecute.call(this);
		case 'ipGetDetailGet':
			return ipGetDetailGetExecute.call(this);
		case 'ipListGet':
			return ipListGetExecute.call(this);
		case 'ipUpdatePut':
			return ipUpdatePutExecute.call(this);
		case 'labCreatePost':
			return labCreatePostExecute.call(this);
		case 'labDeleteDelete':
			return labDeleteDeleteExecute.call(this);
		case 'labGetDetailGet':
			return labGetDetailGetExecute.call(this);
		case 'labListGet':
			return labListGetExecute.call(this);
		case 'labUpdatePut':
			return labUpdatePutExecute.call(this);
		case 'loadbalancerCreatePost':
			return loadbalancerCreatePostExecute.call(this);
		case 'loadbalancerDeleteDelete':
			return loadbalancerDeleteDeleteExecute.call(this);
		case 'loadbalancerGetDetailGet':
			return loadbalancerGetDetailGetExecute.call(this);
		case 'loadbalancerListGet':
			return loadbalancerListGetExecute.call(this);
		case 'loadbalancerUpdatePut':
			return loadbalancerUpdatePutExecute.call(this);
		case 'operationGetDetailGet':
			return operationGetDetailGetExecute.call(this);
		case 'operationListGet':
			return operationListGetExecute.call(this);
		case 'quantumGetCapabilitiesDetailGet':
			return quantumGetCapabilitiesDetailGetExecute.call(this);
		case 'quantumGetCapabilitiesRegionDetailGet':
			return quantumGetCapabilitiesRegionDetailGetExecute.call(this);
		case 'quantumListCapabilitiesGet':
			return quantumListCapabilitiesGetExecute.call(this);
		case 'quantumListCapabilitiesRegionGet':
			return quantumListCapabilitiesRegionGetExecute.call(this);
		case 'quotaListGet':
			return quotaListGetExecute.call(this);
		case 'regionAvailableCheckRegionAvailableGet':
			return regionAvailableCheckRegionAvailableGetExecute.call(this);
		case 'retainPost':
			return retainPostExecute.call(this);
		case 'roleListGet':
			return roleListGetExecute.call(this);
		case 'serviceInfosGetServiceInfosGet':
			return serviceInfosGetServiceInfosGetExecute.call(this);
		case 'snapshotsCreatePost':
			return snapshotsCreatePostExecute.call(this);
		case 'snapshotsDeleteDelete':
			return snapshotsDeleteDeleteExecute.call(this);
		case 'snapshotsListGet':
			return snapshotsListGetExecute.call(this);
		case 'sshkeyCreatePost':
			return sshkeyCreatePostExecute.call(this);
		case 'sshkeyDeleteDelete':
			return sshkeyDeleteDeleteExecute.call(this);
		case 'sshkeyListGet':
			return sshkeyListGetExecute.call(this);
		case 'storageCreateContainerPost':
			return storageCreateContainerPostExecute.call(this);
		case 'storageDeleteContainerDelete':
			return storageDeleteContainerDeleteExecute.call(this);
		case 'storageDeleteDelete':
			return storageDeleteDeleteExecute.call(this);
		case 'storageGetContainerDetailGet':
			return storageGetContainerDetailGetExecute.call(this);
		case 'storageGetDetailGet':
			return storageGetDetailGetExecute.call(this);
		case 'storageListContainersGet':
			return storageListContainersGetExecute.call(this);
		case 'storageListGet':
			return storageListGetExecute.call(this);
		case 'storageUpdateContainerPut':
			return storageUpdateContainerPutExecute.call(this);
		case 'storageUpdatePut':
			return storageUpdatePutExecute.call(this);
		case 'terminatePost':
			return terminatePostExecute.call(this);
		case 'unleashPost':
			return unleashPostExecute.call(this);
		case 'usageGetCurrentGet':
			return usageGetCurrentGetExecute.call(this);
		case 'usageGetForecastGet':
			return usageGetForecastGetExecute.call(this);
		case 'usageGetHistoryDetailGet':
			return usageGetHistoryDetailGetExecute.call(this);
		case 'usageListHistoryGet':
			return usageListHistoryGetExecute.call(this);
		case 'vrackListGet':
			return vrackListGetExecute.call(this);

		// v2 cases
		case 'listProjectsV2':
			return listGetV2Execute.call(this, itemIndex);
		case 'getProjectDetailV2':
			return getDetailGetV2Execute.call(this, itemIndex);
		case 'listRancherServicesV2':
			return serviceListGetV2Execute.call(this, itemIndex);
		case 'createRancherServiceV2':
			return serviceCreatePostV2Execute.call(this, itemIndex);
		case 'deleteRancherServiceV2':
			return serviceDeleteDeleteV2Execute.call(this, itemIndex);
		case 'getRancherServiceV2':
			return serviceGetGetV2Execute.call(this, itemIndex);
		case 'updateRancherServiceV2':
			return serviceUpdatePutV2Execute.call(this, itemIndex);
		case 'resetRancherAdminPasswordV2':
			return adminCredentialsResetV2Execute.call(this, itemIndex);
		case 'listRancherPlansV2':
			return planCapabilityListGetV2Execute.call(this, itemIndex);
		case 'listRancherVersionsV2':
			return versionCapabilityListGetV2Execute.call(this, itemIndex);
		case 'listRancherEventsV2':
			return eventListGetV2Execute.call(this, itemIndex);
		case 'listRancherTasksV2':
			return taskListGetV2Execute.call(this, itemIndex);
		case 'getRancherTaskV2':
			return taskDetailGetV2Execute.call(this, itemIndex);
		case 'listReferencePlansV2':
			return referencePlanListGetV2Execute.call(this, itemIndex);
		case 'listReferenceVersionsV2':
			return referenceVersionListGetV2Execute.call(this, itemIndex);
		case 'listGlobalReferencePlansV2':
			return globalReferencePlanListGetV2Execute.call(this, itemIndex);
		case 'listGlobalReferenceVersionsV2':
			return globalReferenceVersionListGetV2Execute.call(this, itemIndex);
		default:
			throw new Error(`Unsupported operation "${operation}" for resource "publicCloud"`);
	}
}
