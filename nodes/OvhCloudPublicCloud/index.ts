import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';
import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import {
	execute as aclCreatePostExecute,
	description as aclCreatePostDescription,
} from './acl/createPost.operation';

import {
	execute as aclDeleteDeleteExecute,
	description as aclDeleteDeleteDescription,
} from './acl/deleteDelete.operation';

import {
	execute as aclGetDetailGetExecute,
	description as aclGetDetailGetDescription,
} from './acl/getDetailGet.operation';

import {
	execute as aclListGetExecute,
	description as aclListGetDescription,
} from './acl/listGet.operation';

import {
	execute as activateMonthlyBillingPostExecute,
	description as activateMonthlyBillingPostDescription,
} from './activateMonthlyBilling/activateMonthlyBillingPost.operation';

import {
	execute as alertingCreatePostExecute,
	description as alertingCreatePostDescription,
} from './alerting/createPost.operation';

import {
	execute as alertingDeleteDeleteExecute,
	description as alertingDeleteDeleteDescription,
} from './alerting/deleteDelete.operation';

import {
	execute as alertingGetDetailGetExecute,
	description as alertingGetDetailGetDescription,
} from './alerting/getDetailGet.operation';

import {
	execute as alertingListGetExecute,
	description as alertingListGetDescription,
} from './alerting/listGet.operation';

import {
	execute as alertingUpdatePutExecute,
	description as alertingUpdatePutDescription,
} from './alerting/updatePut.operation';

import {
	execute as billListGetExecute,
	description as billListGetDescription,
} from './bill/listGet.operation';

import {
	execute as backupCreatePostExecute,
	description as backupCreatePostDescription,
} from './blockstorage/backupCreatePost.operation';

import {
	execute as backupDeleteDeleteExecute,
	description as backupDeleteDeleteDescription,
} from './blockstorage/backupDeleteDelete.operation';

import {
	execute as backupGetExecute,
	description as backupGetDescription,
} from './blockstorage/backupGet.operation';

import {
	execute as backupListGetExecute,
	description as backupListGetDescription,
} from './blockstorage/backupListGet.operation';

import {
	execute as backupUpdatePutExecute,
	description as backupUpdatePutDescription,
} from './blockstorage/backupUpdatePut.operation';

import {
	execute as snapshotCreatePostExecute,
	description as snapshotCreatePostDescription,
} from './blockstorage/snapshotCreatePost.operation';

import {
	execute as snapshotDeleteDeleteExecute,
	description as snapshotDeleteDeleteDescription,
} from './blockstorage/snapshotDeleteDelete.operation';

import {
	execute as snapshotGetExecute,
	description as snapshotGetDescription,
} from './blockstorage/snapshotGet.operation';

import {
	execute as snapshotListGetExecute,
	description as snapshotListGetDescription,
} from './blockstorage/snapshotListGet.operation';

import {
	execute as snapshotUpdatePutExecute,
	description as snapshotUpdatePutDescription,
} from './blockstorage/snapshotUpdatePut.operation';

import {
	execute as volumeCreatePostExecute,
	description as volumeCreatePostDescription,
} from './blockstorage/volumeCreatePost.operation';

import {
	execute as volumeDeleteDeleteExecute,
	description as volumeDeleteDeleteDescription,
} from './blockstorage/volumeDeleteDelete.operation';

import {
	execute as volumeGetExecute,
	description as volumeGetDescription,
} from './blockstorage/volumeGet.operation';

import {
	execute as volumeListGetExecute,
	description as volumeListGetDescription,
} from './blockstorage/volumeListGet.operation';

import {
	execute as volumeUpdatePutExecute,
	description as volumeUpdatePutDescription,
} from './blockstorage/volumeUpdatePut.operation';

import {
	execute as cancelPostExecute,
	description as cancelPostDescription,
} from './cancel/cancelPost.operation';

import {
	execute as capabilitiesGetKubeDetailGetExecute,
	description as capabilitiesGetKubeDetailGetDescription,
} from './capabilities/getKubeDetailGet.operation';

import {
	execute as capabilitiesGetLoadbalancerDetailGetExecute,
	description as capabilitiesGetLoadbalancerDetailGetDescription,
} from './capabilities/getLoadbalancerDetailGet.operation';

import {
	execute as capabilitiesGetRegionDetailGetExecute,
	description as capabilitiesGetRegionDetailGetDescription,
} from './capabilities/getRegionDetailGet.operation';

import {
	execute as capabilitiesGetRegionProductDetailGetExecute,
	description as capabilitiesGetRegionProductDetailGetDescription,
} from './capabilities/getRegionProductDetailGet.operation';

import {
	execute as capabilitiesListGetExecute,
	description as capabilitiesListGetDescription,
} from './capabilities/listGet.operation';

import {
	execute as capabilitiesListKubeGetExecute,
	description as capabilitiesListKubeGetDescription,
} from './capabilities/listKubeGet.operation';

import {
	execute as capabilitiesListLoadbalancerGetExecute,
	description as capabilitiesListLoadbalancerGetDescription,
} from './capabilities/listLoadbalancerGet.operation';

import {
	execute as capabilitiesListRegionGetExecute,
	description as capabilitiesListRegionGetDescription,
} from './capabilities/listRegionGet.operation';

import {
	execute as changeContactPostExecute,
	description as changeContactPostDescription,
} from './changeContact/changeContactPost.operation';

import {
	execute as cloudAgreementsGetExecute,
	description as cloudAgreementsGetDescription,
} from './cloud/agreementsGet.operation';

import {
	execute as cloudEligibilityGetExecute,
	description as cloudEligibilityGetDescription,
} from './cloud/eligibilityGet.operation';

import {
	execute as cloudOrderListGetExecute,
	description as cloudOrderListGetDescription,
} from './cloud/orderListGet.operation';

import {
	execute as cloudOrderRuleAvailabilityGetExecute,
	description as cloudOrderRuleAvailabilityGetDescription,
} from './cloud/orderRuleAvailabilityGet.operation';

import {
	execute as confirmTerminationPostExecute,
	description as confirmTerminationPostDescription,
} from './confirmTermination/confirmTerminationPost.operation';

import {
	execute as containerRegistryCreateIamPostExecute,
	description as containerRegistryCreateIamPostDescription,
} from './containerRegistry/createIamPost.operation';

import {
	execute as containerRegistryCreateOpenIdConnectPostExecute,
	description as containerRegistryCreateOpenIdConnectPostDescription,
} from './containerRegistry/createOpenIdConnectPost.operation';

import {
	execute as containerRegistryCreatePostExecute,
	description as containerRegistryCreatePostDescription,
} from './containerRegistry/createPost.operation';

import {
	execute as containerRegistryCreateUserPostExecute,
	description as containerRegistryCreateUserPostDescription,
} from './containerRegistry/createUserPost.operation';

import {
	execute as containerRegistryCreateUserSetAsAdminPostExecute,
	description as containerRegistryCreateUserSetAsAdminPostDescription,
} from './containerRegistry/createUserSetAsAdminPost.operation';

import {
	execute as containerRegistryDeleteDeleteExecute,
	description as containerRegistryDeleteDeleteDescription,
} from './containerRegistry/deleteDelete.operation';

import {
	execute as containerRegistryDeleteIamDeleteExecute,
	description as containerRegistryDeleteIamDeleteDescription,
} from './containerRegistry/deleteIamDelete.operation';

import {
	execute as containerRegistryDeleteOpenIdConnectDeleteExecute,
	description as containerRegistryDeleteOpenIdConnectDeleteDescription,
} from './containerRegistry/deleteOpenIdConnectDelete.operation';

import {
	execute as containerRegistryDeleteUserDeleteExecute,
	description as containerRegistryDeleteUserDeleteDescription,
} from './containerRegistry/deleteUserDelete.operation';

import {
	execute as containerRegistryGetCapabilitiesPlanGetExecute,
	description as containerRegistryGetCapabilitiesPlanGetDescription,
} from './containerRegistry/getCapabilitiesPlanGet.operation';

import {
	execute as containerRegistryGetDetailGetExecute,
	description as containerRegistryGetDetailGetDescription,
} from './containerRegistry/getDetailGet.operation';

import {
	execute as containerRegistryGetIpRestrictionsManagementListGetExecute,
	description as containerRegistryGetIpRestrictionsManagementListGetDescription,
} from './containerRegistry/getIpRestrictionsManagementListGet.operation';

import {
	execute as containerRegistryGetIpRestrictionsRegistryListGetExecute,
	description as containerRegistryGetIpRestrictionsRegistryListGetDescription,
} from './containerRegistry/getIpRestrictionsRegistryListGet.operation';

import {
	execute as containerRegistryGetOpenIdConnectGetExecute,
	description as containerRegistryGetOpenIdConnectGetDescription,
} from './containerRegistry/getOpenIdConnectGet.operation';

import {
	execute as containerRegistryGetPlanGetExecute,
	description as containerRegistryGetPlanGetDescription,
} from './containerRegistry/getPlanGet.operation';

import {
	execute as containerRegistryGetUserDetailGetExecute,
	description as containerRegistryGetUserDetailGetDescription,
} from './containerRegistry/getUserDetailGet.operation';

import {
	execute as containerRegistryListGetExecute,
	description as containerRegistryListGetDescription,
} from './containerRegistry/listGet.operation';

import {
	execute as containerRegistryListUsersGetExecute,
	description as containerRegistryListUsersGetDescription,
} from './containerRegistry/listUsersGet.operation';

import {
	execute as containerRegistryUpdateIpRestrictionsManagementPutExecute,
	description as containerRegistryUpdateIpRestrictionsManagementPutDescription,
} from './containerRegistry/updateIpRestrictionsManagementPut.operation';

import {
	execute as containerRegistryUpdateIpRestrictionsRegistryPutExecute,
	description as containerRegistryUpdateIpRestrictionsRegistryPutDescription,
} from './containerRegistry/updateIpRestrictionsRegistryPut.operation';

import {
	execute as containerRegistryUpdateOpenIdConnectPutExecute,
	description as containerRegistryUpdateOpenIdConnectPutDescription,
} from './containerRegistry/updateOpenIdConnectPut.operation';

import {
	execute as containerRegistryUpdatePlanPutExecute,
	description as containerRegistryUpdatePlanPutDescription,
} from './containerRegistry/updatePlanPut.operation';

import {
	execute as containerRegistryUpdatePutExecute,
	description as containerRegistryUpdatePutDescription,
} from './containerRegistry/updatePut.operation';

import {
	execute as creditCreatePostExecute,
	description as creditCreatePostDescription,
} from './credit/createPost.operation';

import {
	execute as creditGetDetailGetExecute,
	description as creditGetDetailGetDescription,
} from './credit/getDetailGet.operation';

import {
	execute as creditListGetExecute,
	description as creditListGetDescription,
} from './credit/listGet.operation';

import {
	execute as cassandraAdvancedConfigurationGetExecute,
	description as cassandraAdvancedConfigurationGetDescription,
} from './database/cassandra/advancedConfigurationGet.operation';

import {
	execute as cassandraAdvancedConfigurationUpdatePutExecute,
	description as cassandraAdvancedConfigurationUpdatePutDescription,
} from './database/cassandra/advancedConfigurationUpdatePut.operation';

import {
	execute as cassandraBackupCreatePostExecute,
	description as cassandraBackupCreatePostDescription,
} from './database/cassandra/backupCreatePost.operation';

import {
	execute as cassandraBackupDeleteDeleteExecute,
	description as cassandraBackupDeleteDeleteDescription,
} from './database/cassandra/backupDeleteDelete.operation';

import {
	execute as cassandraBackupGetGetExecute,
	description as cassandraBackupGetGetDescription,
} from './database/cassandra/backupGetGet.operation';

import {
	execute as cassandraBackupListGetExecute,
	description as cassandraBackupListGetDescription,
} from './database/cassandra/backupListGet.operation';

import {
	execute as cassandraCapabilitiesAdvancedConfigurationGetExecute,
	description as cassandraCapabilitiesAdvancedConfigurationGetDescription,
} from './database/cassandra/capabilitiesAdvancedConfigurationGet.operation';

import {
	execute as cassandraCapabilitiesIntegrationGetExecute,
	description as cassandraCapabilitiesIntegrationGetDescription,
} from './database/cassandra/capabilitiesIntegrationGet.operation';

import {
	execute as cassandraCertificateCreatePostExecute,
	description as cassandraCertificateCreatePostDescription,
} from './database/cassandra/certificateCreatePost.operation';

import {
	execute as cassandraCertificateListGetExecute,
	description as cassandraCertificateListGetDescription,
} from './database/cassandra/certificateListGet.operation';

import {
	execute as cassandraClusterCreatePostExecute,
	description as cassandraClusterCreatePostDescription,
} from './database/cassandra/clusterCreatePost.operation';

import {
	execute as cassandraClusterDeleteDeleteExecute,
	description as cassandraClusterDeleteDeleteDescription,
} from './database/cassandra/clusterDeleteDelete.operation';

import {
	execute as cassandraClusterGetGetExecute,
	description as cassandraClusterGetGetDescription,
} from './database/cassandra/clusterGetGet.operation';

import {
	execute as cassandraClusterListGetExecute,
	description as cassandraClusterListGetDescription,
} from './database/cassandra/clusterListGet.operation';

import {
	execute as cassandraClusterUpdatePutExecute,
	description as cassandraClusterUpdatePutDescription,
} from './database/cassandra/clusterUpdatePut.operation';

import {
	execute as cassandraIntegrationCreatePostExecute,
	description as cassandraIntegrationCreatePostDescription,
} from './database/cassandra/integrationCreatePost.operation';

import {
	execute as cassandraIntegrationDeleteDeleteExecute,
	description as cassandraIntegrationDeleteDeleteDescription,
} from './database/cassandra/integrationDeleteDelete.operation';

import {
	execute as cassandraIntegrationGetGetExecute,
	description as cassandraIntegrationGetGetDescription,
} from './database/cassandra/integrationGetGet.operation';

import {
	execute as cassandraIntegrationListGetExecute,
	description as cassandraIntegrationListGetDescription,
} from './database/cassandra/integrationListGet.operation';

import {
	execute as cassandraIpRestrictionCreatePostExecute,
	description as cassandraIpRestrictionCreatePostDescription,
} from './database/cassandra/ipRestrictionCreatePost.operation';

import {
	execute as cassandraIpRestrictionDeleteDeleteExecute,
	description as cassandraIpRestrictionDeleteDeleteDescription,
} from './database/cassandra/ipRestrictionDeleteDelete.operation';

import {
	execute as cassandraIpRestrictionGetGetExecute,
	description as cassandraIpRestrictionGetGetDescription,
} from './database/cassandra/ipRestrictionGetGet.operation';

import {
	execute as cassandraIpRestrictionListGetExecute,
	description as cassandraIpRestrictionListGetDescription,
} from './database/cassandra/ipRestrictionListGet.operation';

import {
	execute as cassandraIpRestrictionUpdatePutExecute,
	description as cassandraIpRestrictionUpdatePutDescription,
} from './database/cassandra/ipRestrictionUpdatePut.operation';

import {
	execute as cassandraLogKindGetGetExecute,
	description as cassandraLogKindGetGetDescription,
} from './database/cassandra/logKindGetGet.operation';

import {
	execute as cassandraLogKindListGetExecute,
	description as cassandraLogKindListGetDescription,
} from './database/cassandra/logKindListGet.operation';

import {
	execute as cassandraLogSubscriptionCreatePostExecute,
	description as cassandraLogSubscriptionCreatePostDescription,
} from './database/cassandra/logSubscriptionCreatePost.operation';

import {
	execute as cassandraLogSubscriptionDeleteDeleteExecute,
	description as cassandraLogSubscriptionDeleteDeleteDescription,
} from './database/cassandra/logSubscriptionDeleteDelete.operation';

import {
	execute as cassandraLogSubscriptionGetGetExecute,
	description as cassandraLogSubscriptionGetGetDescription,
} from './database/cassandra/logSubscriptionGetGet.operation';

import {
	execute as cassandraLogSubscriptionListGetExecute,
	description as cassandraLogSubscriptionListGetDescription,
} from './database/cassandra/logSubscriptionListGet.operation';

import {
	execute as cassandraLogUrlCreatePostExecute,
	description as cassandraLogUrlCreatePostDescription,
} from './database/cassandra/logUrlCreatePost.operation';

import {
	execute as cassandraLogsGetExecute,
	description as cassandraLogsGetDescription,
} from './database/cassandra/logsGet.operation';

import {
	execute as cassandraMaintenanceApplyPostExecute,
	description as cassandraMaintenanceApplyPostDescription,
} from './database/cassandra/maintenanceApplyPost.operation';

import {
	execute as cassandraMaintenanceGetExecute,
	description as cassandraMaintenanceGetDescription,
} from './database/cassandra/maintenanceGet.operation';

import {
	execute as cassandraMaintenanceGetGetExecute,
	description as cassandraMaintenanceGetGetDescription,
} from './database/cassandra/maintenanceGetGet.operation';

import {
	execute as cassandraMaintenanceUpdatePutExecute,
	description as cassandraMaintenanceUpdatePutDescription,
} from './database/cassandra/maintenanceUpdatePut.operation';

import {
	execute as cassandraMetricGetExecute,
	description as cassandraMetricGetDescription,
} from './database/cassandra/metricGet.operation';

import {
	execute as cassandraMetricGetGetExecute,
	description as cassandraMetricGetGetDescription,
} from './database/cassandra/metricGetGet.operation';

import {
	execute as cassandraNodeCreatePostExecute,
	description as cassandraNodeCreatePostDescription,
} from './database/cassandra/nodeCreatePost.operation';

import {
	execute as cassandraNodeDeleteDeleteExecute,
	description as cassandraNodeDeleteDeleteDescription,
} from './database/cassandra/nodeDeleteDelete.operation';

import {
	execute as cassandraNodeGetGetExecute,
	description as cassandraNodeGetGetDescription,
} from './database/cassandra/nodeGetGet.operation';

import {
	execute as cassandraNodeListGetExecute,
	description as cassandraNodeListGetDescription,
} from './database/cassandra/nodeListGet.operation';

import {
	execute as cassandraNodeUpdatePutExecute,
	description as cassandraNodeUpdatePutDescription,
} from './database/cassandra/nodeUpdatePut.operation';

import {
	execute as cassandraPrometheusCredentialsResetPostExecute,
	description as cassandraPrometheusCredentialsResetPostDescription,
} from './database/cassandra/prometheusCredentialsResetPost.operation';

import {
	execute as cassandraPrometheusGetExecute,
	description as cassandraPrometheusGetDescription,
} from './database/cassandra/prometheusGet.operation';

import {
	execute as cassandraUserCreatePostExecute,
	description as cassandraUserCreatePostDescription,
} from './database/cassandra/userCreatePost.operation';

import {
	execute as cassandraUserCredentialsResetPostExecute,
	description as cassandraUserCredentialsResetPostDescription,
} from './database/cassandra/userCredentialsResetPost.operation';

import {
	execute as cassandraUserDeleteDeleteExecute,
	description as cassandraUserDeleteDeleteDescription,
} from './database/cassandra/userDeleteDelete.operation';

import {
	execute as cassandraUserGetGetExecute,
	description as cassandraUserGetGetDescription,
} from './database/cassandra/userGetGet.operation';

import {
	execute as cassandraUserListGetExecute,
	description as cassandraUserListGetDescription,
} from './database/cassandra/userListGet.operation';

import {
	execute as cassandraUserUpdatePutExecute,
	description as cassandraUserUpdatePutDescription,
} from './database/cassandra/userUpdatePut.operation';

import {
	execute as clickhouseBackupCreatePostExecute,
	description as clickhouseBackupCreatePostDescription,
} from './database/clickhouse/backupCreatePost.operation';

import {
	execute as clickhouseBackupDeleteDeleteExecute,
	description as clickhouseBackupDeleteDeleteDescription,
} from './database/clickhouse/backupDeleteDelete.operation';

import {
	execute as clickhouseBackupGetGetExecute,
	description as clickhouseBackupGetGetDescription,
} from './database/clickhouse/backupGetGet.operation';

import {
	execute as clickhouseBackupListGetExecute,
	description as clickhouseBackupListGetDescription,
} from './database/clickhouse/backupListGet.operation';

import {
	execute as clickhouseCertificateCreatePostExecute,
	description as clickhouseCertificateCreatePostDescription,
} from './database/clickhouse/certificateCreatePost.operation';

import {
	execute as clickhouseCertificateListGetExecute,
	description as clickhouseCertificateListGetDescription,
} from './database/clickhouse/certificateListGet.operation';

import {
	execute as clickhouseClusterCreatePostExecute,
	description as clickhouseClusterCreatePostDescription,
} from './database/clickhouse/clusterCreatePost.operation';

import {
	execute as clickhouseClusterDeleteDeleteExecute,
	description as clickhouseClusterDeleteDeleteDescription,
} from './database/clickhouse/clusterDeleteDelete.operation';

import {
	execute as clickhouseClusterGetGetExecute,
	description as clickhouseClusterGetGetDescription,
} from './database/clickhouse/clusterGetGet.operation';

import {
	execute as clickhouseClusterListGetExecute,
	description as clickhouseClusterListGetDescription,
} from './database/clickhouse/clusterListGet.operation';

import {
	execute as clickhouseClusterUpdatePutExecute,
	description as clickhouseClusterUpdatePutDescription,
} from './database/clickhouse/clusterUpdatePut.operation';

import {
	execute as clickhouseIntegrationCreatePostExecute,
	description as clickhouseIntegrationCreatePostDescription,
} from './database/clickhouse/integrationCreatePost.operation';

import {
	execute as clickhouseIntegrationListGetExecute,
	description as clickhouseIntegrationListGetDescription,
} from './database/clickhouse/integrationListGet.operation';

import {
	execute as clickhouseIpRestrictionCreatePostExecute,
	description as clickhouseIpRestrictionCreatePostDescription,
} from './database/clickhouse/ipRestrictionCreatePost.operation';

import {
	execute as clickhouseIpRestrictionListGetExecute,
	description as clickhouseIpRestrictionListGetDescription,
} from './database/clickhouse/ipRestrictionListGet.operation';

import {
	execute as clickhouseLogSubscriptionCreatePostExecute,
	description as clickhouseLogSubscriptionCreatePostDescription,
} from './database/clickhouse/logSubscriptionCreatePost.operation';

import {
	execute as clickhouseLogSubscriptionGetGetExecute,
	description as clickhouseLogSubscriptionGetGetDescription,
} from './database/clickhouse/logSubscriptionGetGet.operation';

import {
	execute as clickhouseLogSubscriptionListGetExecute,
	description as clickhouseLogSubscriptionListGetDescription,
} from './database/clickhouse/logSubscriptionListGet.operation';

import {
	execute as clickhouseMaintenanceGetExecute,
	description as clickhouseMaintenanceGetDescription,
} from './database/clickhouse/maintenanceGet.operation';

import {
	execute as clickhouseMaintenanceUpdatePutExecute,
	description as clickhouseMaintenanceUpdatePutDescription,
} from './database/clickhouse/maintenanceUpdatePut.operation';

import {
	execute as clickhouseMetricGetExecute,
	description as clickhouseMetricGetDescription,
} from './database/clickhouse/metricGet.operation';

import {
	execute as clickhouseNodeCreatePostExecute,
	description as clickhouseNodeCreatePostDescription,
} from './database/clickhouse/nodeCreatePost.operation';

import {
	execute as clickhouseNodeDeleteDeleteExecute,
	description as clickhouseNodeDeleteDeleteDescription,
} from './database/clickhouse/nodeDeleteDelete.operation';

import {
	execute as clickhouseNodeGetGetExecute,
	description as clickhouseNodeGetGetDescription,
} from './database/clickhouse/nodeGetGet.operation';

import {
	execute as clickhouseNodeListGetExecute,
	description as clickhouseNodeListGetDescription,
} from './database/clickhouse/nodeListGet.operation';

import {
	execute as clickhouseNodeUpdatePutExecute,
	description as clickhouseNodeUpdatePutDescription,
} from './database/clickhouse/nodeUpdatePut.operation';

import {
	execute as clickhousePrometheusGetExecute,
	description as clickhousePrometheusGetDescription,
} from './database/clickhouse/prometheusGet.operation';

import {
	execute as clickhouseUserCreatePostExecute,
	description as clickhouseUserCreatePostDescription,
} from './database/clickhouse/userCreatePost.operation';

import {
	execute as clickhouseUserDeleteDeleteExecute,
	description as clickhouseUserDeleteDeleteDescription,
} from './database/clickhouse/userDeleteDelete.operation';

import {
	execute as clickhouseUserGetGetExecute,
	description as clickhouseUserGetGetDescription,
} from './database/clickhouse/userGetGet.operation';

import {
	execute as clickhouseUserListGetExecute,
	description as clickhouseUserListGetDescription,
} from './database/clickhouse/userListGet.operation';

import {
	execute as clickhouseUserUpdatePutExecute,
	description as clickhouseUserUpdatePutDescription,
} from './database/clickhouse/userUpdatePut.operation';

import {
	execute as grafanaAdvancedConfigurationGetExecute,
	description as grafanaAdvancedConfigurationGetDescription,
} from './database/grafana/advancedConfigurationGet.operation';

import {
	execute as grafanaAdvancedConfigurationUpdatePutExecute,
	description as grafanaAdvancedConfigurationUpdatePutDescription,
} from './database/grafana/advancedConfigurationUpdatePut.operation';

import {
	execute as grafanaBackupGetGetExecute,
	description as grafanaBackupGetGetDescription,
} from './database/grafana/backupGetGet.operation';

import {
	execute as grafanaBackupListGetExecute,
	description as grafanaBackupListGetDescription,
} from './database/grafana/backupListGet.operation';

import {
	execute as grafanaCapabilitiesAdvancedConfigurationGetExecute,
	description as grafanaCapabilitiesAdvancedConfigurationGetDescription,
} from './database/grafana/capabilitiesAdvancedConfigurationGet.operation';

import {
	execute as grafanaCapabilitiesBackupRegionsGetExecute,
	description as grafanaCapabilitiesBackupRegionsGetDescription,
} from './database/grafana/capabilitiesBackupRegionsGet.operation';

import {
	execute as grafanaCapabilitiesIntegrationGetExecute,
	description as grafanaCapabilitiesIntegrationGetDescription,
} from './database/grafana/capabilitiesIntegrationGet.operation';

import {
	execute as grafanaClusterCreatePostExecute,
	description as grafanaClusterCreatePostDescription,
} from './database/grafana/clusterCreatePost.operation';

import {
	execute as grafanaClusterDeleteDeleteExecute,
	description as grafanaClusterDeleteDeleteDescription,
} from './database/grafana/clusterDeleteDelete.operation';

import {
	execute as grafanaClusterGetGetExecute,
	description as grafanaClusterGetGetDescription,
} from './database/grafana/clusterGetGet.operation';

import {
	execute as grafanaClusterListGetExecute,
	description as grafanaClusterListGetDescription,
} from './database/grafana/clusterListGet.operation';

import {
	execute as grafanaClusterUpdatePutExecute,
	description as grafanaClusterUpdatePutDescription,
} from './database/grafana/clusterUpdatePut.operation';

import {
	execute as grafanaIntegrationCreatePostExecute,
	description as grafanaIntegrationCreatePostDescription,
} from './database/grafana/integrationCreatePost.operation';

import {
	execute as grafanaIntegrationDeleteDeleteExecute,
	description as grafanaIntegrationDeleteDeleteDescription,
} from './database/grafana/integrationDeleteDelete.operation';

import {
	execute as grafanaIntegrationGetGetExecute,
	description as grafanaIntegrationGetGetDescription,
} from './database/grafana/integrationGetGet.operation';

import {
	execute as grafanaIntegrationListGetExecute,
	description as grafanaIntegrationListGetDescription,
} from './database/grafana/integrationListGet.operation';

import {
	execute as grafanaIpRestrictionCreatePostExecute,
	description as grafanaIpRestrictionCreatePostDescription,
} from './database/grafana/ipRestrictionCreatePost.operation';

import {
	execute as grafanaIpRestrictionDeleteDeleteExecute,
	description as grafanaIpRestrictionDeleteDeleteDescription,
} from './database/grafana/ipRestrictionDeleteDelete.operation';

import {
	execute as grafanaIpRestrictionGetGetExecute,
	description as grafanaIpRestrictionGetGetDescription,
} from './database/grafana/ipRestrictionGetGet.operation';

import {
	execute as grafanaIpRestrictionListGetExecute,
	description as grafanaIpRestrictionListGetDescription,
} from './database/grafana/ipRestrictionListGet.operation';

import {
	execute as grafanaIpRestrictionUpdatePutExecute,
	description as grafanaIpRestrictionUpdatePutDescription,
} from './database/grafana/ipRestrictionUpdatePut.operation';

import {
	execute as grafanaLogKindGetExecute,
	description as grafanaLogKindGetDescription,
} from './database/grafana/logKindGet.operation';

import {
	execute as grafanaLogKindListGetExecute,
	description as grafanaLogKindListGetDescription,
} from './database/grafana/logKindListGet.operation';

import {
	execute as grafanaLogSubscriptionCreatePostExecute,
	description as grafanaLogSubscriptionCreatePostDescription,
} from './database/grafana/logSubscriptionCreatePost.operation';

import {
	execute as grafanaLogSubscriptionDeleteDeleteExecute,
	description as grafanaLogSubscriptionDeleteDeleteDescription,
} from './database/grafana/logSubscriptionDeleteDelete.operation';

import {
	execute as grafanaLogSubscriptionGetGetExecute,
	description as grafanaLogSubscriptionGetGetDescription,
} from './database/grafana/logSubscriptionGetGet.operation';

import {
	execute as grafanaLogSubscriptionListGetExecute,
	description as grafanaLogSubscriptionListGetDescription,
} from './database/grafana/logSubscriptionListGet.operation';

import {
	execute as grafanaLogUrlCreatePostExecute,
	description as grafanaLogUrlCreatePostDescription,
} from './database/grafana/logUrlCreatePost.operation';

import {
	execute as grafanaLogsGetExecute,
	description as grafanaLogsGetDescription,
} from './database/grafana/logsGet.operation';

import {
	execute as grafanaMaintenanceApplyPostExecute,
	description as grafanaMaintenanceApplyPostDescription,
} from './database/grafana/maintenanceApplyPost.operation';

import {
	execute as grafanaMaintenanceGetExecute,
	description as grafanaMaintenanceGetDescription,
} from './database/grafana/maintenanceGet.operation';

import {
	execute as grafanaMaintenanceListGetExecute,
	description as grafanaMaintenanceListGetDescription,
} from './database/grafana/maintenanceListGet.operation';

import {
	execute as grafanaMetricGetExecute,
	description as grafanaMetricGetDescription,
} from './database/grafana/metricGet.operation';

import {
	execute as grafanaMetricListGetExecute,
	description as grafanaMetricListGetDescription,
} from './database/grafana/metricListGet.operation';

import {
	execute as grafanaNodeGetGetExecute,
	description as grafanaNodeGetGetDescription,
} from './database/grafana/nodeGetGet.operation';

import {
	execute as grafanaNodeListGetExecute,
	description as grafanaNodeListGetDescription,
} from './database/grafana/nodeListGet.operation';

import {
	execute as grafanaUserCredentialsResetPostExecute,
	description as grafanaUserCredentialsResetPostDescription,
} from './database/grafana/userCredentialsResetPost.operation';

import {
	execute as grafanaUserGetGetExecute,
	description as grafanaUserGetGetDescription,
} from './database/grafana/userGetGet.operation';

import {
	execute as grafanaUserListGetExecute,
	description as grafanaUserListGetDescription,
} from './database/grafana/userListGet.operation';

import {
	execute as kafkaAclCreatePostExecute,
	description as kafkaAclCreatePostDescription,
} from './database/kafka/aclCreatePost.operation';

import {
	execute as kafkaAclDeleteDeleteExecute,
	description as kafkaAclDeleteDeleteDescription,
} from './database/kafka/aclDeleteDelete.operation';

import {
	execute as kafkaAclGetGetExecute,
	description as kafkaAclGetGetDescription,
} from './database/kafka/aclGetGet.operation';

import {
	execute as kafkaAclListGetExecute,
	description as kafkaAclListGetDescription,
} from './database/kafka/aclListGet.operation';

import {
	execute as kafkaAdvancedConfigurationGetExecute,
	description as kafkaAdvancedConfigurationGetDescription,
} from './database/kafka/advancedConfigurationGet.operation';

import {
	execute as kafkaAdvancedConfigurationUpdatePutExecute,
	description as kafkaAdvancedConfigurationUpdatePutDescription,
} from './database/kafka/advancedConfigurationUpdatePut.operation';

import {
	execute as kafkaCapabilitiesAdvancedConfigurationGetExecute,
	description as kafkaCapabilitiesAdvancedConfigurationGetDescription,
} from './database/kafka/capabilitiesAdvancedConfigurationGet.operation';

import {
	execute as kafkaCapabilitiesBackupRegionsGetExecute,
	description as kafkaCapabilitiesBackupRegionsGetDescription,
} from './database/kafka/capabilitiesBackupRegionsGet.operation';

import {
	execute as kafkaCapabilitiesIntegrationGetExecute,
	description as kafkaCapabilitiesIntegrationGetDescription,
} from './database/kafka/capabilitiesIntegrationGet.operation';

import {
	execute as kafkaCertificateListGetExecute,
	description as kafkaCertificateListGetDescription,
} from './database/kafka/certificateListGet.operation';

import {
	execute as kafkaClusterCreatePostExecute,
	description as kafkaClusterCreatePostDescription,
} from './database/kafka/clusterCreatePost.operation';

import {
	execute as kafkaClusterDeleteDeleteExecute,
	description as kafkaClusterDeleteDeleteDescription,
} from './database/kafka/clusterDeleteDelete.operation';

import {
	execute as kafkaClusterGetGetExecute,
	description as kafkaClusterGetGetDescription,
} from './database/kafka/clusterGetGet.operation';

import {
	execute as kafkaClusterListGetExecute,
	description as kafkaClusterListGetDescription,
} from './database/kafka/clusterListGet.operation';

import {
	execute as kafkaClusterUpdatePutExecute,
	description as kafkaClusterUpdatePutDescription,
} from './database/kafka/clusterUpdatePut.operation';

import {
	execute as kafkaIntegrationCreatePostExecute,
	description as kafkaIntegrationCreatePostDescription,
} from './database/kafka/integrationCreatePost.operation';

import {
	execute as kafkaIntegrationDeleteDeleteExecute,
	description as kafkaIntegrationDeleteDeleteDescription,
} from './database/kafka/integrationDeleteDelete.operation';

import {
	execute as kafkaIntegrationGetGetExecute,
	description as kafkaIntegrationGetGetDescription,
} from './database/kafka/integrationGetGet.operation';

import {
	execute as kafkaIntegrationListGetExecute,
	description as kafkaIntegrationListGetDescription,
} from './database/kafka/integrationListGet.operation';

import {
	execute as kafkaIpRestrictionCreatePostExecute,
	description as kafkaIpRestrictionCreatePostDescription,
} from './database/kafka/ipRestrictionCreatePost.operation';

import {
	execute as kafkaIpRestrictionDeleteDeleteExecute,
	description as kafkaIpRestrictionDeleteDeleteDescription,
} from './database/kafka/ipRestrictionDeleteDelete.operation';

import {
	execute as kafkaIpRestrictionGetGetExecute,
	description as kafkaIpRestrictionGetGetDescription,
} from './database/kafka/ipRestrictionGetGet.operation';

import {
	execute as kafkaIpRestrictionListGetExecute,
	description as kafkaIpRestrictionListGetDescription,
} from './database/kafka/ipRestrictionListGet.operation';

import {
	execute as kafkaIpRestrictionUpdatePutExecute,
	description as kafkaIpRestrictionUpdatePutDescription,
} from './database/kafka/ipRestrictionUpdatePut.operation';

import {
	execute as kafkaLogKindGetExecute,
	description as kafkaLogKindGetDescription,
} from './database/kafka/logKindGet.operation';

import {
	execute as kafkaLogKindListGetExecute,
	description as kafkaLogKindListGetDescription,
} from './database/kafka/logKindListGet.operation';

import {
	execute as kafkaLogSubscriptionCreatePostExecute,
	description as kafkaLogSubscriptionCreatePostDescription,
} from './database/kafka/logSubscriptionCreatePost.operation';

import {
	execute as kafkaLogSubscriptionDeleteDeleteExecute,
	description as kafkaLogSubscriptionDeleteDeleteDescription,
} from './database/kafka/logSubscriptionDeleteDelete.operation';

import {
	execute as kafkaLogSubscriptionGetGetExecute,
	description as kafkaLogSubscriptionGetGetDescription,
} from './database/kafka/logSubscriptionGetGet.operation';

import {
	execute as kafkaLogSubscriptionListGetExecute,
	description as kafkaLogSubscriptionListGetDescription,
} from './database/kafka/logSubscriptionListGet.operation';

import {
	execute as kafkaLogUrlCreatePostExecute,
	description as kafkaLogUrlCreatePostDescription,
} from './database/kafka/logUrlCreatePost.operation';

import {
	execute as kafkaLogsGetExecute,
	description as kafkaLogsGetDescription,
} from './database/kafka/logsGet.operation';

import {
	execute as kafkaMaintenanceApplyPostExecute,
	description as kafkaMaintenanceApplyPostDescription,
} from './database/kafka/maintenanceApplyPost.operation';

import {
	execute as kafkaMaintenanceGetExecute,
	description as kafkaMaintenanceGetDescription,
} from './database/kafka/maintenanceGet.operation';

import {
	execute as kafkaMaintenanceListGetExecute,
	description as kafkaMaintenanceListGetDescription,
} from './database/kafka/maintenanceListGet.operation';

import {
	execute as kafkaMetricGetExecute,
	description as kafkaMetricGetDescription,
} from './database/kafka/metricGet.operation';

import {
	execute as kafkaMetricListGetExecute,
	description as kafkaMetricListGetDescription,
} from './database/kafka/metricListGet.operation';

import {
	execute as kafkaNodeGetGetExecute,
	description as kafkaNodeGetGetDescription,
} from './database/kafka/nodeGetGet.operation';

import {
	execute as kafkaNodeListGetExecute,
	description as kafkaNodeListGetDescription,
} from './database/kafka/nodeListGet.operation';

import {
	execute as kafkaPermissionsGetExecute,
	description as kafkaPermissionsGetDescription,
} from './database/kafka/permissionsGet.operation';

import {
	execute as kafkaPrometheusCredentialsResetPostExecute,
	description as kafkaPrometheusCredentialsResetPostDescription,
} from './database/kafka/prometheusCredentialsResetPost.operation';

import {
	execute as kafkaPrometheusGetExecute,
	description as kafkaPrometheusGetDescription,
} from './database/kafka/prometheusGet.operation';

import {
	execute as kafkaSchemaRegistryAclCreatePostExecute,
	description as kafkaSchemaRegistryAclCreatePostDescription,
} from './database/kafka/schemaRegistryAclCreatePost.operation';

import {
	execute as kafkaSchemaRegistryAclDeleteDeleteExecute,
	description as kafkaSchemaRegistryAclDeleteDeleteDescription,
} from './database/kafka/schemaRegistryAclDeleteDelete.operation';

import {
	execute as kafkaSchemaRegistryAclGetGetExecute,
	description as kafkaSchemaRegistryAclGetGetDescription,
} from './database/kafka/schemaRegistryAclGetGet.operation';

import {
	execute as kafkaSchemaRegistryAclListGetExecute,
	description as kafkaSchemaRegistryAclListGetDescription,
} from './database/kafka/schemaRegistryAclListGet.operation';

import {
	execute as kafkaTopicAclCreatePostExecute,
	description as kafkaTopicAclCreatePostDescription,
} from './database/kafka/topicAclCreatePost.operation';

import {
	execute as kafkaTopicAclDeleteDeleteExecute,
	description as kafkaTopicAclDeleteDeleteDescription,
} from './database/kafka/topicAclDeleteDelete.operation';

import {
	execute as kafkaTopicAclGetGetExecute,
	description as kafkaTopicAclGetGetDescription,
} from './database/kafka/topicAclGetGet.operation';

import {
	execute as kafkaTopicAclListGetExecute,
	description as kafkaTopicAclListGetDescription,
} from './database/kafka/topicAclListGet.operation';

import {
	execute as kafkaTopicCreatePostExecute,
	description as kafkaTopicCreatePostDescription,
} from './database/kafka/topicCreatePost.operation';

import {
	execute as kafkaTopicDeleteDeleteExecute,
	description as kafkaTopicDeleteDeleteDescription,
} from './database/kafka/topicDeleteDelete.operation';

import {
	execute as kafkaTopicGetGetExecute,
	description as kafkaTopicGetGetDescription,
} from './database/kafka/topicGetGet.operation';

import {
	execute as kafkaTopicListGetExecute,
	description as kafkaTopicListGetDescription,
} from './database/kafka/topicListGet.operation';

import {
	execute as kafkaTopicUpdatePutExecute,
	description as kafkaTopicUpdatePutDescription,
} from './database/kafka/topicUpdatePut.operation';

import {
	execute as kafkaUserAccessGetExecute,
	description as kafkaUserAccessGetDescription,
} from './database/kafka/userAccessGet.operation';

import {
	execute as kafkaUserCreatePostExecute,
	description as kafkaUserCreatePostDescription,
} from './database/kafka/userCreatePost.operation';

import {
	execute as kafkaUserCredentialsResetPostExecute,
	description as kafkaUserCredentialsResetPostDescription,
} from './database/kafka/userCredentialsResetPost.operation';

import {
	execute as kafkaUserDeleteDeleteExecute,
	description as kafkaUserDeleteDeleteDescription,
} from './database/kafka/userDeleteDelete.operation';

import {
	execute as kafkaUserGetGetExecute,
	description as kafkaUserGetGetDescription,
} from './database/kafka/userGetGet.operation';

import {
	execute as kafkaUserListGetExecute,
	description as kafkaUserListGetDescription,
} from './database/kafka/userListGet.operation';

import {
	execute as kafkaConnectadvancedConfigurationGetExecute,
	description as kafkaConnectadvancedConfigurationGetDescription,
} from './database/kafkaConnect/advancedConfigurationGet.operation';

import {
	execute as kafkaConnectadvancedConfigurationUpdatePutExecute,
	description as kafkaConnectadvancedConfigurationUpdatePutDescription,
} from './database/kafkaConnect/advancedConfigurationUpdatePut.operation';

import {
	execute as kafkaConnectBackupCreatePostExecute,
	description as kafkaConnectBackupCreatePostDescription,
} from './database/kafkaConnect/backupCreatePost.operation';

import {
	execute as kafkaConnectBackupDeleteDeleteExecute,
	description as kafkaConnectBackupDeleteDeleteDescription,
} from './database/kafkaConnect/backupDeleteDelete.operation';

import {
	execute as kafkaConnectBackupGetGetExecute,
	description as kafkaConnectBackupGetGetDescription,
} from './database/kafkaConnect/backupGetGet.operation';

import {
	execute as kafkaConnectBackupListGetExecute,
	description as kafkaConnectBackupListGetDescription,
} from './database/kafkaConnect/backupListGet.operation';

import {
	execute as kafkaConnectcapabilitiesAdvancedConfigurationGetExecute,
	description as kafkaConnectcapabilitiesAdvancedConfigurationGetDescription,
} from './database/kafkaConnect/capabilitiesAdvancedConfigurationGet.operation';

import {
	execute as kafkaConnectcapabilitiesBackupRegionsGetExecute,
	description as kafkaConnectcapabilitiesBackupRegionsGetDescription,
} from './database/kafkaConnect/capabilitiesBackupRegionsGet.operation';

import {
	execute as kafkaConnectcapabilitiesConnectorConfigurationGetExecute,
	description as kafkaConnectcapabilitiesConnectorConfigurationGetDescription,
} from './database/kafkaConnect/capabilitiesConnectorConfigurationGet.operation';

import {
	execute as kafkaConnectcapabilitiesConnectorGetExecute,
	description as kafkaConnectcapabilitiesConnectorGetDescription,
} from './database/kafkaConnect/capabilitiesConnectorGet.operation';

import {
	execute as kafkaConnectcapabilitiesConnectorListGetExecute,
	description as kafkaConnectcapabilitiesConnectorListGetDescription,
} from './database/kafkaConnect/capabilitiesConnectorListGet.operation';

import {
	execute as kafkaConnectcapabilitiesConnectorTransformsGetExecute,
	description as kafkaConnectcapabilitiesConnectorTransformsGetDescription,
} from './database/kafkaConnect/capabilitiesConnectorTransformsGet.operation';

import {
	execute as kafkaConnectcapabilitiesIntegrationGetExecute,
	description as kafkaConnectcapabilitiesIntegrationGetDescription,
} from './database/kafkaConnect/capabilitiesIntegrationGet.operation';

import {
	execute as kafkaConnectCertificateCreatePostExecute,
	description as kafkaConnectCertificateCreatePostDescription,
} from './database/kafkaConnect/certificateCreatePost.operation';

import {
	execute as kafkaConnectCertificateListGetExecute,
	description as kafkaConnectCertificateListGetDescription,
} from './database/kafkaConnect/certificateListGet.operation';

import {
	execute as kafkaConnectClusterCreatePostExecute,
	description as kafkaConnectClusterCreatePostDescription,
} from './database/kafkaConnect/clusterCreatePost.operation';

import {
	execute as kafkaConnectClusterDeleteDeleteExecute,
	description as kafkaConnectClusterDeleteDeleteDescription,
} from './database/kafkaConnect/clusterDeleteDelete.operation';

import {
	execute as kafkaConnectClusterGetGetExecute,
	description as kafkaConnectClusterGetGetDescription,
} from './database/kafkaConnect/clusterGetGet.operation';

import {
	execute as kafkaConnectClusterListGetExecute,
	description as kafkaConnectClusterListGetDescription,
} from './database/kafkaConnect/clusterListGet.operation';

import {
	execute as kafkaConnectClusterUpdatePutExecute,
	description as kafkaConnectClusterUpdatePutDescription,
} from './database/kafkaConnect/clusterUpdatePut.operation';

import {
	execute as kafkaConnectconnectorCreatePostExecute,
	description as kafkaConnectconnectorCreatePostDescription,
} from './database/kafkaConnect/connectorCreatePost.operation';

import {
	execute as kafkaConnectconnectorDeleteDeleteExecute,
	description as kafkaConnectconnectorDeleteDeleteDescription,
} from './database/kafkaConnect/connectorDeleteDelete.operation';

import {
	execute as kafkaConnectconnectorGetGetExecute,
	description as kafkaConnectconnectorGetGetDescription,
} from './database/kafkaConnect/connectorGetGet.operation';

import {
	execute as kafkaConnectconnectorListGetExecute,
	description as kafkaConnectconnectorListGetDescription,
} from './database/kafkaConnect/connectorListGet.operation';

import {
	execute as kafkaConnectconnectorPausePostExecute,
	description as kafkaConnectconnectorPausePostDescription,
} from './database/kafkaConnect/connectorPausePost.operation';

import {
	execute as kafkaConnectconnectorRestartPostExecute,
	description as kafkaConnectconnectorRestartPostDescription,
} from './database/kafkaConnect/connectorRestartPost.operation';

import {
	execute as kafkaConnectconnectorResumePostExecute,
	description as kafkaConnectconnectorResumePostDescription,
} from './database/kafkaConnect/connectorResumePost.operation';

import {
	execute as kafkaConnectconnectorTaskGetExecute,
	description as kafkaConnectconnectorTaskGetDescription,
} from './database/kafkaConnect/connectorTaskGet.operation';

import {
	execute as kafkaConnectconnectorTaskListGetExecute,
	description as kafkaConnectconnectorTaskListGetDescription,
} from './database/kafkaConnect/connectorTaskListGet.operation';

import {
	execute as kafkaConnectconnectorTaskRestartPostExecute,
	description as kafkaConnectconnectorTaskRestartPostDescription,
} from './database/kafkaConnect/connectorTaskRestartPost.operation';

import {
	execute as kafkaConnectconnectorUpdatePutExecute,
	description as kafkaConnectconnectorUpdatePutDescription,
} from './database/kafkaConnect/connectorUpdatePut.operation';

import {
	execute as kafkaConnectintegrationCreatePostExecute,
	description as kafkaConnectintegrationCreatePostDescription,
} from './database/kafkaConnect/integrationCreatePost.operation';

import {
	execute as kafkaConnectintegrationDeleteDeleteExecute,
	description as kafkaConnectintegrationDeleteDeleteDescription,
} from './database/kafkaConnect/integrationDeleteDelete.operation';

import {
	execute as kafkaConnectintegrationGetGetExecute,
	description as kafkaConnectintegrationGetGetDescription,
} from './database/kafkaConnect/integrationGetGet.operation';

import {
	execute as kafkaConnectintegrationListGetExecute,
	description as kafkaConnectintegrationListGetDescription,
} from './database/kafkaConnect/integrationListGet.operation';

import {
	execute as kafkaConnectIpRestrictionCreatePostExecute,
	description as kafkaConnectIpRestrictionCreatePostDescription,
} from './database/kafkaConnect/ipRestrictionCreatePost.operation';

import {
	execute as kafkaConnectipRestrictionDeleteDeleteExecute,
	description as kafkaConnectipRestrictionDeleteDeleteDescription,
} from './database/kafkaConnect/ipRestrictionDeleteDelete.operation';

import {
	execute as kafkaConnectipRestrictionGetGetExecute,
	description as kafkaConnectipRestrictionGetGetDescription,
} from './database/kafkaConnect/ipRestrictionGetGet.operation';

import {
	execute as kafkaConnectIpRestrictionListGetExecute,
	description as kafkaConnectIpRestrictionListGetDescription,
} from './database/kafkaConnect/ipRestrictionListGet.operation';

import {
	execute as kafkaConnectipRestrictionUpdatePutExecute,
	description as kafkaConnectipRestrictionUpdatePutDescription,
} from './database/kafkaConnect/ipRestrictionUpdatePut.operation';

import {
	execute as kafkaConnectlogKindGetExecute,
	description as kafkaConnectlogKindGetDescription,
} from './database/kafkaConnect/logKindGet.operation';

import {
	execute as kafkaConnectlogKindListGetExecute,
	description as kafkaConnectlogKindListGetDescription,
} from './database/kafkaConnect/logKindListGet.operation';

import {
	execute as kafkaConnectLogSubscriptionCreatePostExecute,
	description as kafkaConnectLogSubscriptionCreatePostDescription,
} from './database/kafkaConnect/logSubscriptionCreatePost.operation';

import {
	execute as kafkaConnectlogSubscriptionDeleteDeleteExecute,
	description as kafkaConnectlogSubscriptionDeleteDeleteDescription,
} from './database/kafkaConnect/logSubscriptionDeleteDelete.operation';

import {
	execute as kafkaConnectLogSubscriptionGetGetExecute,
	description as kafkaConnectLogSubscriptionGetGetDescription,
} from './database/kafkaConnect/logSubscriptionGetGet.operation';

import {
	execute as kafkaConnectLogSubscriptionListGetExecute,
	description as kafkaConnectLogSubscriptionListGetDescription,
} from './database/kafkaConnect/logSubscriptionListGet.operation';

import {
	execute as kafkaConnectlogUrlCreatePostExecute,
	description as kafkaConnectlogUrlCreatePostDescription,
} from './database/kafkaConnect/logUrlCreatePost.operation';

import {
	execute as kafkaConnectlogsGetExecute,
	description as kafkaConnectlogsGetDescription,
} from './database/kafkaConnect/logsGet.operation';

import {
	execute as kafkaConnectmaintenanceApplyPostExecute,
	description as kafkaConnectmaintenanceApplyPostDescription,
} from './database/kafkaConnect/maintenanceApplyPost.operation';

import {
	execute as kafkaConnectMaintenanceGetExecute,
	description as kafkaConnectMaintenanceGetDescription,
} from './database/kafkaConnect/maintenanceGet.operation';

import {
	execute as kafkaConnectmaintenanceListGetExecute,
	description as kafkaConnectmaintenanceListGetDescription,
} from './database/kafkaConnect/maintenanceListGet.operation';

import {
	execute as kafkaConnectMaintenanceUpdatePutExecute,
	description as kafkaConnectMaintenanceUpdatePutDescription,
} from './database/kafkaConnect/maintenanceUpdatePut.operation';

import {
	execute as kafkaConnectMetricGetExecute,
	description as kafkaConnectMetricGetDescription,
} from './database/kafkaConnect/metricGet.operation';

import {
	execute as kafkaConnectmetricListGetExecute,
	description as kafkaConnectmetricListGetDescription,
} from './database/kafkaConnect/metricListGet.operation';

import {
	execute as kafkaConnectNodeCreatePostExecute,
	description as kafkaConnectNodeCreatePostDescription,
} from './database/kafkaConnect/nodeCreatePost.operation';

import {
	execute as kafkaConnectNodeDeleteDeleteExecute,
	description as kafkaConnectNodeDeleteDeleteDescription,
} from './database/kafkaConnect/nodeDeleteDelete.operation';

import {
	execute as kafkaConnectnodeGetExecute,
	description as kafkaConnectnodeGetDescription,
} from './database/kafkaConnect/nodeGet.operation';

import {
	execute as kafkaConnectNodeGetGetExecute,
	description as kafkaConnectNodeGetGetDescription,
} from './database/kafkaConnect/nodeGetGet.operation';

import {
	execute as kafkaConnectNodeListGetExecute,
	description as kafkaConnectNodeListGetDescription,
} from './database/kafkaConnect/nodeListGet.operation';

import {
	execute as kafkaConnectNodeUpdatePutExecute,
	description as kafkaConnectNodeUpdatePutDescription,
} from './database/kafkaConnect/nodeUpdatePut.operation';

import {
	execute as kafkaConnectprometheusCredentialsResetPostExecute,
	description as kafkaConnectprometheusCredentialsResetPostDescription,
} from './database/kafkaConnect/prometheusCredentialsResetPost.operation';

import {
	execute as kafkaConnectPrometheusGetExecute,
	description as kafkaConnectPrometheusGetDescription,
} from './database/kafkaConnect/prometheusGet.operation';

import {
	execute as kafkaConnectUserCreatePostExecute,
	description as kafkaConnectUserCreatePostDescription,
} from './database/kafkaConnect/userCreatePost.operation';

import {
	execute as kafkaConnectuserCredentialsResetPostExecute,
	description as kafkaConnectuserCredentialsResetPostDescription,
} from './database/kafkaConnect/userCredentialsResetPost.operation';

import {
	execute as kafkaConnectUserDeleteDeleteExecute,
	description as kafkaConnectUserDeleteDeleteDescription,
} from './database/kafkaConnect/userDeleteDelete.operation';

import {
	execute as kafkaConnectUserGetGetExecute,
	description as kafkaConnectUserGetGetDescription,
} from './database/kafkaConnect/userGetGet.operation';

import {
	execute as kafkaConnectUserListGetExecute,
	description as kafkaConnectUserListGetDescription,
} from './database/kafkaConnect/userListGet.operation';

import {
	execute as kafkaConnectUserUpdatePutExecute,
	description as kafkaConnectUserUpdatePutDescription,
} from './database/kafkaConnect/userUpdatePut.operation';

import {
	execute as kafkaMirrorMakerCapabilitiesIntegrationGetExecute,
	description as kafkaMirrorMakerCapabilitiesIntegrationGetDescription,
} from './database/kafkaMirrorMaker/capabilitiesIntegrationGet.operation';

import {
	execute as kafkaMirrorMakerClusterCreatePostExecute,
	description as kafkaMirrorMakerClusterCreatePostDescription,
} from './database/kafkaMirrorMaker/clusterCreatePost.operation';

import {
	execute as kafkaMirrorMakerClusterDeleteDeleteExecute,
	description as kafkaMirrorMakerClusterDeleteDeleteDescription,
} from './database/kafkaMirrorMaker/clusterDeleteDelete.operation';

import {
	execute as kafkaMirrorMakerClusterGetGetExecute,
	description as kafkaMirrorMakerClusterGetGetDescription,
} from './database/kafkaMirrorMaker/clusterGetGet.operation';

import {
	execute as kafkaMirrorMakerClusterListGetExecute,
	description as kafkaMirrorMakerClusterListGetDescription,
} from './database/kafkaMirrorMaker/clusterListGet.operation';

import {
	execute as kafkaMirrorMakerClusterUpdatePutExecute,
	description as kafkaMirrorMakerClusterUpdatePutDescription,
} from './database/kafkaMirrorMaker/clusterUpdatePut.operation';

import {
	execute as kafkaMirrorMakerIntegrationCreatePostExecute,
	description as kafkaMirrorMakerIntegrationCreatePostDescription,
} from './database/kafkaMirrorMaker/integrationCreatePost.operation';

import {
	execute as kafkaMirrorMakerIntegrationDeleteDeleteExecute,
	description as kafkaMirrorMakerIntegrationDeleteDeleteDescription,
} from './database/kafkaMirrorMaker/integrationDeleteDelete.operation';

import {
	execute as kafkaMirrorMakerIntegrationGetExecute,
	description as kafkaMirrorMakerIntegrationGetDescription,
} from './database/kafkaMirrorMaker/integrationGet.operation';

import {
	execute as kafkaMirrorMakerIntegrationGetByIdExecute,
	description as kafkaMirrorMakerIntegrationGetByIdDescription,
} from './database/kafkaMirrorMaker/integrationGetById.operation';

import {
	execute as kafkaMirrorMakerLogKindGetExecute,
	description as kafkaMirrorMakerLogKindGetDescription,
} from './database/kafkaMirrorMaker/logKindGet.operation';

import {
	execute as kafkaMirrorMakerLogKindNameGetExecute,
	description as kafkaMirrorMakerLogKindNameGetDescription,
} from './database/kafkaMirrorMaker/logKindNameGet.operation';

import {
	execute as kafkaMirrorMakerLogSubscriptionCreatePostExecute,
	description as kafkaMirrorMakerLogSubscriptionCreatePostDescription,
} from './database/kafkaMirrorMaker/logSubscriptionCreatePost.operation';

import {
	execute as kafkaMirrorMakerLogSubscriptionDeleteDeleteExecute,
	description as kafkaMirrorMakerLogSubscriptionDeleteDeleteDescription,
} from './database/kafkaMirrorMaker/logSubscriptionDeleteDelete.operation';

import {
	execute as kafkaMirrorMakerLogSubscriptionGetByIdExecute,
	description as kafkaMirrorMakerLogSubscriptionGetByIdDescription,
} from './database/kafkaMirrorMaker/logSubscriptionGetById.operation';

import {
	execute as kafkaMirrorMakerLogUrlPostExecute,
	description as kafkaMirrorMakerLogUrlPostDescription,
} from './database/kafkaMirrorMaker/logUrlPost.operation';

import {
	execute as kafkaMirrorMakerLogsGetExecute,
	description as kafkaMirrorMakerLogsGetDescription,
} from './database/kafkaMirrorMaker/logsGet.operation';

import {
	execute as kafkaMirrorMakerMaintenanceApplyPostExecute,
	description as kafkaMirrorMakerMaintenanceApplyPostDescription,
} from './database/kafkaMirrorMaker/maintenanceApplyPost.operation';

import {
	execute as kafkaMirrorMakerMaintenanceGetExecute,
	description as kafkaMirrorMakerMaintenanceGetDescription,
} from './database/kafkaMirrorMaker/maintenanceGet.operation';

import {
	execute as kafkaMirrorMakerMaintenanceGetByIdExecute,
	description as kafkaMirrorMakerMaintenanceGetByIdDescription,
} from './database/kafkaMirrorMaker/maintenanceGetById.operation';

import {
	execute as kafkaMirrorMakerMetricGetExecute,
	description as kafkaMirrorMakerMetricGetDescription,
} from './database/kafkaMirrorMaker/metricGet.operation';

import {
	execute as kafkaMirrorMakerMetricNameGetExecute,
	description as kafkaMirrorMakerMetricNameGetDescription,
} from './database/kafkaMirrorMaker/metricNameGet.operation';

import {
	execute as kafkaMirrorMakerNodeGetGetExecute,
	description as kafkaMirrorMakerNodeGetGetDescription,
} from './database/kafkaMirrorMaker/nodeGetGet.operation';

import {
	execute as kafkaMirrorMakerNodeListGetExecute,
	description as kafkaMirrorMakerNodeListGetDescription,
} from './database/kafkaMirrorMaker/nodeListGet.operation';

import {
	execute as kafkaMirrorMakerPrometheusCredentialsResetPostExecute,
	description as kafkaMirrorMakerPrometheusCredentialsResetPostDescription,
} from './database/kafkaMirrorMaker/prometheusCredentialsResetPost.operation';

import {
	execute as kafkaMirrorMakerPrometheusGetExecute,
	description as kafkaMirrorMakerPrometheusGetDescription,
} from './database/kafkaMirrorMaker/prometheusGet.operation';

import {
	execute as kafkaMirrorMakerReplicationCreatePostExecute,
	description as kafkaMirrorMakerReplicationCreatePostDescription,
} from './database/kafkaMirrorMaker/replicationCreatePost.operation';

import {
	execute as kafkaMirrorMakerReplicationDeleteDeleteExecute,
	description as kafkaMirrorMakerReplicationDeleteDeleteDescription,
} from './database/kafkaMirrorMaker/replicationDeleteDelete.operation';

import {
	execute as kafkaMirrorMakerReplicationGetExecute,
	description as kafkaMirrorMakerReplicationGetDescription,
} from './database/kafkaMirrorMaker/replicationGet.operation';

import {
	execute as kafkaMirrorMakerReplicationGetByIdExecute,
	description as kafkaMirrorMakerReplicationGetByIdDescription,
} from './database/kafkaMirrorMaker/replicationGetById.operation';

import {
	execute as kafkaMirrorMakerReplicationUpdatePutExecute,
	description as kafkaMirrorMakerReplicationUpdatePutDescription,
} from './database/kafkaMirrorMaker/replicationUpdatePut.operation';

import {
	execute as m3aggregatorCapabilitiesIntegrationGetExecute,
	description as m3aggregatorCapabilitiesIntegrationGetDescription,
} from './database/m3aggregator/capabilitiesIntegrationGet.operation';

import {
	execute as m3aggregatorClusterCreatePostExecute,
	description as m3aggregatorClusterCreatePostDescription,
} from './database/m3aggregator/clusterCreatePost.operation';

import {
	execute as m3aggregatorClusterDeleteDeleteExecute,
	description as m3aggregatorClusterDeleteDeleteDescription,
} from './database/m3aggregator/clusterDeleteDelete.operation';

import {
	execute as m3aggregatorClusterGetGetExecute,
	description as m3aggregatorClusterGetGetDescription,
} from './database/m3aggregator/clusterGetGet.operation';

import {
	execute as m3aggregatorClusterListGetExecute,
	description as m3aggregatorClusterListGetDescription,
} from './database/m3aggregator/clusterListGet.operation';

import {
	execute as m3aggregatorClusterUpdatePutExecute,
	description as m3aggregatorClusterUpdatePutDescription,
} from './database/m3aggregator/clusterUpdatePut.operation';

import {
	execute as m3aggregatorIntegrationCreatePostExecute,
	description as m3aggregatorIntegrationCreatePostDescription,
} from './database/m3aggregator/integrationCreatePost.operation';

import {
	execute as m3aggregatorIntegrationDeleteDeleteExecute,
	description as m3aggregatorIntegrationDeleteDeleteDescription,
} from './database/m3aggregator/integrationDeleteDelete.operation';

import {
	execute as m3aggregatorIntegrationGetExecute,
	description as m3aggregatorIntegrationGetDescription,
} from './database/m3aggregator/integrationGet.operation';

import {
	execute as m3aggregatorIntegrationGetByIdExecute,
	description as m3aggregatorIntegrationGetByIdDescription,
} from './database/m3aggregator/integrationGetById.operation';

import {
	execute as m3aggregatorLogKindGetExecute,
	description as m3aggregatorLogKindGetDescription,
} from './database/m3aggregator/logKindGet.operation';

import {
	execute as m3aggregatorLogKindNameGetExecute,
	description as m3aggregatorLogKindNameGetDescription,
} from './database/m3aggregator/logKindNameGet.operation';

import {
	execute as m3aggregatorLogSubscriptionCreatePostExecute,
	description as m3aggregatorLogSubscriptionCreatePostDescription,
} from './database/m3aggregator/logSubscriptionCreatePost.operation';

import {
	execute as m3aggregatorLogSubscriptionDeleteDeleteExecute,
	description as m3aggregatorLogSubscriptionDeleteDeleteDescription,
} from './database/m3aggregator/logSubscriptionDeleteDelete.operation';

import {
	execute as m3aggregatorLogSubscriptionGetByIdExecute,
	description as m3aggregatorLogSubscriptionGetByIdDescription,
} from './database/m3aggregator/logSubscriptionGetById.operation';

import {
	execute as m3aggregatorLogSubscriptionListGetExecute,
	description as m3aggregatorLogSubscriptionListGetDescription,
} from './database/m3aggregator/logSubscriptionListGet.operation';

import {
	execute as m3aggregatorLogUrlPostExecute,
	description as m3aggregatorLogUrlPostDescription,
} from './database/m3aggregator/logUrlPost.operation';

import {
	execute as m3aggregatorLogsGetExecute,
	description as m3aggregatorLogsGetDescription,
} from './database/m3aggregator/logsGet.operation';

import {
	execute as m3aggregatorMaintenanceApplyPostExecute,
	description as m3aggregatorMaintenanceApplyPostDescription,
} from './database/m3aggregator/maintenanceApplyPost.operation';

import {
	execute as m3aggregatorMaintenanceGetExecute,
	description as m3aggregatorMaintenanceGetDescription,
} from './database/m3aggregator/maintenanceGet.operation';

import {
	execute as m3aggregatorMaintenanceGetByIdExecute,
	description as m3aggregatorMaintenanceGetByIdDescription,
} from './database/m3aggregator/maintenanceGetById.operation';

import {
	execute as m3aggregatorMetricGetExecute,
	description as m3aggregatorMetricGetDescription,
} from './database/m3aggregator/metricGet.operation';

import {
	execute as m3aggregatorMetricNameGetExecute,
	description as m3aggregatorMetricNameGetDescription,
} from './database/m3aggregator/metricNameGet.operation';

import {
	execute as m3aggregatorNodeGetGetExecute,
	description as m3aggregatorNodeGetGetDescription,
} from './database/m3aggregator/nodeGetGet.operation';

import {
	execute as m3aggregatorNodeListGetExecute,
	description as m3aggregatorNodeListGetDescription,
} from './database/m3aggregator/nodeListGet.operation';

import {
	execute as m3dbAdvancedConfigurationGetGetExecute,
	description as m3dbAdvancedConfigurationGetGetDescription,
} from './database/m3db/M3dbAdvancedConfigurationGetGet.operation';

import {
	execute as m3dbAdvancedConfigurationUpdatePutExecute,
	description as m3dbAdvancedConfigurationUpdatePutDescription,
} from './database/m3db/M3dbAdvancedConfigurationUpdatePut.operation';

import {
	execute as m3dbBackupGetGetExecute,
	description as m3dbBackupGetGetDescription,
} from './database/m3db/M3dbBackupGetGet.operation';

import {
	execute as m3dbBackupListGetExecute,
	description as m3dbBackupListGetDescription,
} from './database/m3db/M3dbBackupListGet.operation';

import {
	execute as m3dbCapabilitiesAdvancedConfigurationGetGetExecute,
	description as m3dbCapabilitiesAdvancedConfigurationGetGetDescription,
} from './database/m3db/M3dbCapabilitiesAdvancedConfigurationGetGet.operation';

import {
	execute as m3dbCapabilitiesIntegrationGetGetExecute,
	description as m3dbCapabilitiesIntegrationGetGetDescription,
} from './database/m3db/M3dbCapabilitiesIntegrationGetGet.operation';

import {
	execute as m3dbClusterCreatePostExecute,
	description as m3dbClusterCreatePostDescription,
} from './database/m3db/M3dbClusterCreatePost.operation';

import {
	execute as m3dbClusterDeleteDeleteExecute,
	description as m3dbClusterDeleteDeleteDescription,
} from './database/m3db/M3dbClusterDeleteDelete.operation';

import {
	execute as m3dbClusterGetGetExecute,
	description as m3dbClusterGetGetDescription,
} from './database/m3db/M3dbClusterGetGet.operation';

import {
	execute as m3dbClusterListGetExecute,
	description as m3dbClusterListGetDescription,
} from './database/m3db/M3dbClusterListGet.operation';

import {
	execute as m3dbClusterUpdatePutExecute,
	description as m3dbClusterUpdatePutDescription,
} from './database/m3db/M3dbClusterUpdatePut.operation';

import {
	execute as m3dbIntegrationCreatePostExecute,
	description as m3dbIntegrationCreatePostDescription,
} from './database/m3db/M3dbIntegrationCreatePost.operation';

import {
	execute as m3dbIntegrationDeleteDeleteExecute,
	description as m3dbIntegrationDeleteDeleteDescription,
} from './database/m3db/M3dbIntegrationDeleteDelete.operation';

import {
	execute as m3dbIntegrationGetGetExecute,
	description as m3dbIntegrationGetGetDescription,
} from './database/m3db/M3dbIntegrationGetGet.operation';

import {
	execute as m3dbIntegrationListGetExecute,
	description as m3dbIntegrationListGetDescription,
} from './database/m3db/M3dbIntegrationListGet.operation';

import {
	execute as m3dbIpRestrictionCreatePostExecute,
	description as m3dbIpRestrictionCreatePostDescription,
} from './database/m3db/M3dbIpRestrictionCreatePost.operation';

import {
	execute as m3dbIpRestrictionDeleteDeleteExecute,
	description as m3dbIpRestrictionDeleteDeleteDescription,
} from './database/m3db/M3dbIpRestrictionDeleteDelete.operation';

import {
	execute as m3dbIpRestrictionGetGetExecute,
	description as m3dbIpRestrictionGetGetDescription,
} from './database/m3db/M3dbIpRestrictionGetGet.operation';

import {
	execute as m3dbIpRestrictionListGetExecute,
	description as m3dbIpRestrictionListGetDescription,
} from './database/m3db/M3dbIpRestrictionListGet.operation';

import {
	execute as m3dbIpRestrictionUpdatePutExecute,
	description as m3dbIpRestrictionUpdatePutDescription,
} from './database/m3db/M3dbIpRestrictionUpdatePut.operation';

import {
	execute as m3dbLogKindGetGetExecute,
	description as m3dbLogKindGetGetDescription,
} from './database/m3db/M3dbLogKindGetGet.operation';

import {
	execute as m3dbLogKindListGetExecute,
	description as m3dbLogKindListGetDescription,
} from './database/m3db/M3dbLogKindListGet.operation';

import {
	execute as m3dbLogSubscriptionCreatePostExecute,
	description as m3dbLogSubscriptionCreatePostDescription,
} from './database/m3db/M3dbLogSubscriptionCreatePost.operation';

import {
	execute as m3dbLogSubscriptionDeleteDeleteExecute,
	description as m3dbLogSubscriptionDeleteDeleteDescription,
} from './database/m3db/M3dbLogSubscriptionDeleteDelete.operation';

import {
	execute as m3dbLogSubscriptionGetGetExecute,
	description as m3dbLogSubscriptionGetGetDescription,
} from './database/m3db/M3dbLogSubscriptionGetGet.operation';

import {
	execute as m3dbLogSubscriptionListGetExecute,
	description as m3dbLogSubscriptionListGetDescription,
} from './database/m3db/M3dbLogSubscriptionListGet.operation';

import {
	execute as m3dbLogUrlCreatePostExecute,
	description as m3dbLogUrlCreatePostDescription,
} from './database/m3db/M3dbLogUrlCreatePost.operation';

import {
	execute as m3dbLogsGetExecute,
	description as m3dbLogsGetDescription,
} from './database/m3db/M3dbLogsGet.operation';

import {
	execute as m3dbMaintenanceApplyPostExecute,
	description as m3dbMaintenanceApplyPostDescription,
} from './database/m3db/M3dbMaintenanceApplyPost.operation';

import {
	execute as m3dbMaintenanceGetGetExecute,
	description as m3dbMaintenanceGetGetDescription,
} from './database/m3db/M3dbMaintenanceGetGet.operation';

import {
	execute as m3dbMaintenanceListGetExecute,
	description as m3dbMaintenanceListGetDescription,
} from './database/m3db/M3dbMaintenanceListGet.operation';

import {
	execute as m3dbMetricGetGetExecute,
	description as m3dbMetricGetGetDescription,
} from './database/m3db/M3dbMetricGetGet.operation';

import {
	execute as m3dbMetricListGetExecute,
	description as m3dbMetricListGetDescription,
} from './database/m3db/M3dbMetricListGet.operation';

import {
	execute as m3dbNamespaceCreatePostExecute,
	description as m3dbNamespaceCreatePostDescription,
} from './database/m3db/M3dbNamespaceCreatePost.operation';

import {
	execute as m3dbNamespaceDeleteDeleteExecute,
	description as m3dbNamespaceDeleteDeleteDescription,
} from './database/m3db/M3dbNamespaceDeleteDelete.operation';

import {
	execute as m3dbNamespaceGetGetExecute,
	description as m3dbNamespaceGetGetDescription,
} from './database/m3db/M3dbNamespaceGetGet.operation';

import {
	execute as m3dbNamespaceListGetExecute,
	description as m3dbNamespaceListGetDescription,
} from './database/m3db/M3dbNamespaceListGet.operation';

import {
	execute as m3dbNamespaceUpdatePutExecute,
	description as m3dbNamespaceUpdatePutDescription,
} from './database/m3db/M3dbNamespaceUpdatePut.operation';

import {
	execute as m3dbNodeGetGetExecute,
	description as m3dbNodeGetGetDescription,
} from './database/m3db/M3dbNodeGetGet.operation';

import {
	execute as m3dbNodeListGetExecute,
	description as m3dbNodeListGetDescription,
} from './database/m3db/M3dbNodeListGet.operation';

import {
	execute as m3dbUserCreatePostExecute,
	description as m3dbUserCreatePostDescription,
} from './database/m3db/M3dbUserCreatePost.operation';

import {
	execute as m3dbUserCredentialsResetPostExecute,
	description as m3dbUserCredentialsResetPostDescription,
} from './database/m3db/M3dbUserCredentialsResetPost.operation';

import {
	execute as m3dbUserDeleteDeleteExecute,
	description as m3dbUserDeleteDeleteDescription,
} from './database/m3db/M3dbUserDeleteDelete.operation';

import {
	execute as m3dbUserGetGetExecute,
	description as m3dbUserGetGetDescription,
} from './database/m3db/M3dbUserGetGet.operation';

import {
	execute as m3dbUserListGetExecute,
	description as m3dbUserListGetDescription,
} from './database/m3db/M3dbUserListGet.operation';

import {
	execute as m3dbUserUpdatePutExecute,
	description as m3dbUserUpdatePutDescription,
} from './database/m3db/M3dbUserUpdatePut.operation';

import {
	execute as mongodbBackupDeleteDeleteExecute,
	description as mongodbBackupDeleteDeleteDescription,
} from './database/mongodb/backupDeleteDelete.operation';

import {
	execute as mongodbBackupGetGetExecute,
	description as mongodbBackupGetGetDescription,
} from './database/mongodb/backupGetGet.operation';

import {
	execute as mongodbBackupListGetExecute,
	description as mongodbBackupListGetDescription,
} from './database/mongodb/backupListGet.operation';

import {
	execute as mongodbBackupRestorePostExecute,
	description as mongodbBackupRestorePostDescription,
} from './database/mongodb/backupRestorePost.operation';

import {
	execute as mongodbClusterCreatePostExecute,
	description as mongodbClusterCreatePostDescription,
} from './database/mongodb/clusterCreatePost.operation';

import {
	execute as mongodbClusterDeleteDeleteExecute,
	description as mongodbClusterDeleteDeleteDescription,
} from './database/mongodb/clusterDeleteDelete.operation';

import {
	execute as mongodbClusterGetGetExecute,
	description as mongodbClusterGetGetDescription,
} from './database/mongodb/clusterGetGet.operation';

import {
	execute as mongodbClusterListGetExecute,
	description as mongodbClusterListGetDescription,
} from './database/mongodb/clusterListGet.operation';

import {
	execute as mongodbClusterUpdatePutExecute,
	description as mongodbClusterUpdatePutDescription,
} from './database/mongodb/clusterUpdatePut.operation';

import {
	execute as mongodbIpRestrictionCreatePostExecute,
	description as mongodbIpRestrictionCreatePostDescription,
} from './database/mongodb/ipRestrictionCreatePost.operation';

import {
	execute as mongodbIpRestrictionDeleteDeleteExecute,
	description as mongodbIpRestrictionDeleteDeleteDescription,
} from './database/mongodb/ipRestrictionDeleteDelete.operation';

import {
	execute as mongodbIpRestrictionGetGetExecute,
	description as mongodbIpRestrictionGetGetDescription,
} from './database/mongodb/ipRestrictionGetGet.operation';

import {
	execute as mongodbIpRestrictionListGetExecute,
	description as mongodbIpRestrictionListGetDescription,
} from './database/mongodb/ipRestrictionListGet.operation';

import {
	execute as mongodbIpRestrictionUpdatePutExecute,
	description as mongodbIpRestrictionUpdatePutDescription,
} from './database/mongodb/ipRestrictionUpdatePut.operation';

import {
	execute as mongodbLogKindGetGetExecute,
	description as mongodbLogKindGetGetDescription,
} from './database/mongodb/logKindGetGet.operation';

import {
	execute as mongodbLogKindListGetExecute,
	description as mongodbLogKindListGetDescription,
} from './database/mongodb/logKindListGet.operation';

import {
	execute as mongodbLogListGetExecute,
	description as mongodbLogListGetDescription,
} from './database/mongodb/logListGet.operation';

import {
	execute as mongodbLogSubscriptionCreatePostExecute,
	description as mongodbLogSubscriptionCreatePostDescription,
} from './database/mongodb/logSubscriptionCreatePost.operation';

import {
	execute as mongodbLogSubscriptionDeleteDeleteExecute,
	description as mongodbLogSubscriptionDeleteDeleteDescription,
} from './database/mongodb/logSubscriptionDeleteDelete.operation';

import {
	execute as mongodbLogSubscriptionGetGetExecute,
	description as mongodbLogSubscriptionGetGetDescription,
} from './database/mongodb/logSubscriptionGetGet.operation';

import {
	execute as mongodbLogSubscriptionListGetExecute,
	description as mongodbLogSubscriptionListGetDescription,
} from './database/mongodb/logSubscriptionListGet.operation';

import {
	execute as mongodbLogUrlCreatePostExecute,
	description as mongodbLogUrlCreatePostDescription,
} from './database/mongodb/logUrlCreatePost.operation';

import {
	execute as mongodbMaintenanceApplyPostExecute,
	description as mongodbMaintenanceApplyPostDescription,
} from './database/mongodb/maintenanceApplyPost.operation';

import {
	execute as mongodbMaintenanceGetGetExecute,
	description as mongodbMaintenanceGetGetDescription,
} from './database/mongodb/maintenanceGetGet.operation';

import {
	execute as mongodbMaintenanceListGetExecute,
	description as mongodbMaintenanceListGetDescription,
} from './database/mongodb/maintenanceListGet.operation';

import {
	execute as mongodbMetricListGetExecute,
	description as mongodbMetricListGetDescription,
} from './database/mongodb/metricListGet.operation';

import {
	execute as mongodbMetricNameGetGetExecute,
	description as mongodbMetricNameGetGetDescription,
} from './database/mongodb/metricNameGetGet.operation';

import {
	execute as mongodbNodeCreatePostExecute,
	description as mongodbNodeCreatePostDescription,
} from './database/mongodb/nodeCreatePost.operation';

import {
	execute as mongodbNodeDeleteDeleteExecute,
	description as mongodbNodeDeleteDeleteDescription,
} from './database/mongodb/nodeDeleteDelete.operation';

import {
	execute as mongodbNodeGetGetExecute,
	description as mongodbNodeGetGetDescription,
} from './database/mongodb/nodeGetGet.operation';

import {
	execute as mongodbNodeListGetExecute,
	description as mongodbNodeListGetDescription,
} from './database/mongodb/nodeListGet.operation';

import {
	execute as mongodbNodeUpdatePutExecute,
	description as mongodbNodeUpdatePutDescription,
} from './database/mongodb/nodeUpdatePut.operation';

import {
	execute as mongodbPrometheusCredentialsResetPostExecute,
	description as mongodbPrometheusCredentialsResetPostDescription,
} from './database/mongodb/prometheusCredentialsResetPost.operation';

import {
	execute as mongodbPrometheusGetGetExecute,
	description as mongodbPrometheusGetGetDescription,
} from './database/mongodb/prometheusGetGet.operation';

import {
	execute as mongodbRestoreCreatePostExecute,
	description as mongodbRestoreCreatePostDescription,
} from './database/mongodb/restoreCreatePost.operation';

import {
	execute as mongodbRoleListGetExecute,
	description as mongodbRoleListGetDescription,
} from './database/mongodb/roleListGet.operation';

import {
	execute as mongodbUserCreatePostExecute,
	description as mongodbUserCreatePostDescription,
} from './database/mongodb/userCreatePost.operation';

import {
	execute as mongodbUserCredentialsResetPostExecute,
	description as mongodbUserCredentialsResetPostDescription,
} from './database/mongodb/userCredentialsResetPost.operation';

import {
	execute as mongodbUserDeleteDeleteExecute,
	description as mongodbUserDeleteDeleteDescription,
} from './database/mongodb/userDeleteDelete.operation';

import {
	execute as mongodbUserGetGetExecute,
	description as mongodbUserGetGetDescription,
} from './database/mongodb/userGetGet.operation';

import {
	execute as mongodbUserListGetExecute,
	description as mongodbUserListGetDescription,
} from './database/mongodb/userListGet.operation';

import {
	execute as mongodbUserUpdatePutExecute,
	description as mongodbUserUpdatePutDescription,
} from './database/mongodb/userUpdatePut.operation';

import {
	execute as mysqlBackupCreatePostExecute,
	description as mysqlBackupCreatePostDescription,
} from './database/mysql/backupCreatePost.operation';

import {
	execute as mysqlBackupDeleteDeleteExecute,
	description as mysqlBackupDeleteDeleteDescription,
} from './database/mysql/backupDeleteDelete.operation';

import {
	execute as mysqlBackupGetGetExecute,
	description as mysqlBackupGetGetDescription,
} from './database/mysql/backupGetGet.operation';

import {
	execute as mysqlBackupListGetExecute,
	description as mysqlBackupListGetDescription,
} from './database/mysql/backupListGet.operation';

import {
	execute as mysqlCertificateCreatePostExecute,
	description as mysqlCertificateCreatePostDescription,
} from './database/mysql/certificateCreatePost.operation';

import {
	execute as mysqlCertificateListGetExecute,
	description as mysqlCertificateListGetDescription,
} from './database/mysql/certificateListGet.operation';

import {
	execute as mysqlClusterCreatePostExecute,
	description as mysqlClusterCreatePostDescription,
} from './database/mysql/clusterCreatePost.operation';

import {
	execute as mysqlClusterDeleteDeleteExecute,
	description as mysqlClusterDeleteDeleteDescription,
} from './database/mysql/clusterDeleteDelete.operation';

import {
	execute as mysqlClusterGetGetExecute,
	description as mysqlClusterGetGetDescription,
} from './database/mysql/clusterGetGet.operation';

import {
	execute as mysqlClusterListGetExecute,
	description as mysqlClusterListGetDescription,
} from './database/mysql/clusterListGet.operation';

import {
	execute as mysqlClusterUpdatePutExecute,
	description as mysqlClusterUpdatePutDescription,
} from './database/mysql/clusterUpdatePut.operation';

import {
	execute as mysqlIntegrationCreatePostExecute,
	description as mysqlIntegrationCreatePostDescription,
} from './database/mysql/integrationCreatePost.operation';

import {
	execute as mysqlIntegrationListGetExecute,
	description as mysqlIntegrationListGetDescription,
} from './database/mysql/integrationListGet.operation';

import {
	execute as mysqlIpRestrictionCreatePostExecute,
	description as mysqlIpRestrictionCreatePostDescription,
} from './database/mysql/ipRestrictionCreatePost.operation';

import {
	execute as mysqlIpRestrictionListGetExecute,
	description as mysqlIpRestrictionListGetDescription,
} from './database/mysql/ipRestrictionListGet.operation';

import {
	execute as mysqlLogSubscriptionCreatePostExecute,
	description as mysqlLogSubscriptionCreatePostDescription,
} from './database/mysql/logSubscriptionCreatePost.operation';

import {
	execute as mysqlLogSubscriptionGetGetExecute,
	description as mysqlLogSubscriptionGetGetDescription,
} from './database/mysql/logSubscriptionGetGet.operation';

import {
	execute as mysqlLogSubscriptionListGetExecute,
	description as mysqlLogSubscriptionListGetDescription,
} from './database/mysql/logSubscriptionListGet.operation';

import {
	execute as mysqlMaintenanceGetExecute,
	description as mysqlMaintenanceGetDescription,
} from './database/mysql/maintenanceGet.operation';

import {
	execute as mysqlMaintenanceUpdatePutExecute,
	description as mysqlMaintenanceUpdatePutDescription,
} from './database/mysql/maintenanceUpdatePut.operation';

import {
	execute as mysqlMetricGetExecute,
	description as mysqlMetricGetDescription,
} from './database/mysql/metricGet.operation';

import {
	execute as mysqlNodeCreatePostExecute,
	description as mysqlNodeCreatePostDescription,
} from './database/mysql/nodeCreatePost.operation';

import {
	execute as mysqlNodeDeleteDeleteExecute,
	description as mysqlNodeDeleteDeleteDescription,
} from './database/mysql/nodeDeleteDelete.operation';

import {
	execute as mysqlNodeGetGetExecute,
	description as mysqlNodeGetGetDescription,
} from './database/mysql/nodeGetGet.operation';

import {
	execute as mysqlNodeListGetExecute,
	description as mysqlNodeListGetDescription,
} from './database/mysql/nodeListGet.operation';

import {
	execute as mysqlNodeUpdatePutExecute,
	description as mysqlNodeUpdatePutDescription,
} from './database/mysql/nodeUpdatePut.operation';

import {
	execute as mysqlPrometheusGetExecute,
	description as mysqlPrometheusGetDescription,
} from './database/mysql/prometheusGet.operation';

import {
	execute as mysqlUserCreatePostExecute,
	description as mysqlUserCreatePostDescription,
} from './database/mysql/userCreatePost.operation';

import {
	execute as mysqlUserDeleteDeleteExecute,
	description as mysqlUserDeleteDeleteDescription,
} from './database/mysql/userDeleteDelete.operation';

import {
	execute as mysqlUserGetGetExecute,
	description as mysqlUserGetGetDescription,
} from './database/mysql/userGetGet.operation';

import {
	execute as mysqlUserListGetExecute,
	description as mysqlUserListGetDescription,
} from './database/mysql/userListGet.operation';

import {
	execute as mysqlUserUpdatePutExecute,
	description as mysqlUserUpdatePutDescription,
} from './database/mysql/userUpdatePut.operation';

import {
	execute as opensearchAdvancedConfigurationListGetExecute,
	description as opensearchAdvancedConfigurationListGetDescription,
} from './database/opensearch/AdvancedConfigurationListGet.operation';

import {
	execute as opensearchAdvancedConfigurationUpdatePutExecute,
	description as opensearchAdvancedConfigurationUpdatePutDescription,
} from './database/opensearch/AdvancedConfigurationUpdatePut.operation';

import {
	execute as opensearchBackupGetGetExecute,
	description as opensearchBackupGetGetDescription,
} from './database/opensearch/BackupGetGet.operation';

import {
	execute as opensearchBackupListGetExecute,
	description as opensearchBackupListGetDescription,
} from './database/opensearch/BackupListGet.operation';

import {
	execute as opensearchCapabilitiesAdvancedConfigurationListGetExecute,
	description as opensearchCapabilitiesAdvancedConfigurationListGetDescription,
} from './database/opensearch/CapabilitiesAdvancedConfigurationListGet.operation';

import {
	execute as opensearchCapabilitiesBackupRegionsListGetExecute,
	description as opensearchCapabilitiesBackupRegionsListGetDescription,
} from './database/opensearch/CapabilitiesBackupRegionsListGet.operation';

import {
	execute as opensearchCapabilitiesIntegrationListGetExecute,
	description as opensearchCapabilitiesIntegrationListGetDescription,
} from './database/opensearch/CapabilitiesIntegrationListGet.operation';

import {
	execute as opensearchClusterCreatePostExecute,
	description as opensearchClusterCreatePostDescription,
} from './database/opensearch/ClusterCreatePost.operation';

import {
	execute as opensearchClusterDeleteDeleteExecute,
	description as opensearchClusterDeleteDeleteDescription,
} from './database/opensearch/ClusterDeleteDelete.operation';

import {
	execute as opensearchClusterGetGetExecute,
	description as opensearchClusterGetGetDescription,
} from './database/opensearch/ClusterGetGet.operation';

import {
	execute as opensearchClusterListGetExecute,
	description as opensearchClusterListGetDescription,
} from './database/opensearch/ClusterListGet.operation';

import {
	execute as opensearchClusterUpdatePutExecute,
	description as opensearchClusterUpdatePutDescription,
} from './database/opensearch/ClusterUpdatePut.operation';

import {
	execute as opensearchIndexDeleteDeleteExecute,
	description as opensearchIndexDeleteDeleteDescription,
} from './database/opensearch/IndexDeleteDelete.operation';

import {
	execute as opensearchIndexGetGetExecute,
	description as opensearchIndexGetGetDescription,
} from './database/opensearch/IndexGetGet.operation';

import {
	execute as opensearchIndexListGetExecute,
	description as opensearchIndexListGetDescription,
} from './database/opensearch/IndexListGet.operation';

import {
	execute as opensearchIntegrationCreatePostExecute,
	description as opensearchIntegrationCreatePostDescription,
} from './database/opensearch/IntegrationCreatePost.operation';

import {
	execute as opensearchIntegrationDeleteDeleteExecute,
	description as opensearchIntegrationDeleteDeleteDescription,
} from './database/opensearch/IntegrationDeleteDelete.operation';

import {
	execute as opensearchIntegrationGetGetExecute,
	description as opensearchIntegrationGetGetDescription,
} from './database/opensearch/IntegrationGetGet.operation';

import {
	execute as opensearchIntegrationListGetExecute,
	description as opensearchIntegrationListGetDescription,
} from './database/opensearch/IntegrationListGet.operation';

import {
	execute as opensearchIpRestrictionCreatePostExecute,
	description as opensearchIpRestrictionCreatePostDescription,
} from './database/opensearch/IpRestrictionCreatePost.operation';

import {
	execute as opensearchIpRestrictionDeleteDeleteExecute,
	description as opensearchIpRestrictionDeleteDeleteDescription,
} from './database/opensearch/IpRestrictionDeleteDelete.operation';

import {
	execute as opensearchIpRestrictionGetGetExecute,
	description as opensearchIpRestrictionGetGetDescription,
} from './database/opensearch/IpRestrictionGetGet.operation';

import {
	execute as opensearchIpRestrictionListGetExecute,
	description as opensearchIpRestrictionListGetDescription,
} from './database/opensearch/IpRestrictionListGet.operation';

import {
	execute as opensearchIpRestrictionUpdatePutExecute,
	description as opensearchIpRestrictionUpdatePutDescription,
} from './database/opensearch/IpRestrictionUpdatePut.operation';

import {
	execute as opensearchLogKindGetExecute,
	description as opensearchLogKindGetDescription,
} from './database/opensearch/LogKindGet.operation';

import {
	execute as opensearchLogKindListGetExecute,
	description as opensearchLogKindListGetDescription,
} from './database/opensearch/LogKindListGet.operation';

import {
	execute as opensearchLogSubscriptionCreatePostExecute,
	description as opensearchLogSubscriptionCreatePostDescription,
} from './database/opensearch/LogSubscriptionCreatePost.operation';

import {
	execute as opensearchLogSubscriptionDeleteDeleteExecute,
	description as opensearchLogSubscriptionDeleteDeleteDescription,
} from './database/opensearch/LogSubscriptionDeleteDelete.operation';

import {
	execute as opensearchLogSubscriptionGetExecute,
	description as opensearchLogSubscriptionGetDescription,
} from './database/opensearch/LogSubscriptionGet.operation';

import {
	execute as opensearchLogSubscriptionListGetExecute,
	description as opensearchLogSubscriptionListGetDescription,
} from './database/opensearch/LogSubscriptionListGet.operation';

import {
	execute as opensearchLogUrlCreatePostExecute,
	description as opensearchLogUrlCreatePostDescription,
} from './database/opensearch/LogUrlCreatePost.operation';

import {
	execute as opensearchLogsListGetExecute,
	description as opensearchLogsListGetDescription,
} from './database/opensearch/LogsListGet.operation';

import {
	execute as opensearchMaintenanceApplyPostExecute,
	description as opensearchMaintenanceApplyPostDescription,
} from './database/opensearch/MaintenanceApplyPost.operation';

import {
	execute as opensearchMaintenanceGetGetExecute,
	description as opensearchMaintenanceGetGetDescription,
} from './database/opensearch/MaintenanceGetGet.operation';

import {
	execute as opensearchMaintenanceListGetExecute,
	description as opensearchMaintenanceListGetDescription,
} from './database/opensearch/MaintenanceListGet.operation';

import {
	execute as opensearchMetricGetGetExecute,
	description as opensearchMetricGetGetDescription,
} from './database/opensearch/MetricGetGet.operation';

import {
	execute as opensearchMetricListGetExecute,
	description as opensearchMetricListGetDescription,
} from './database/opensearch/MetricListGet.operation';

import {
	execute as opensearchNodeGetGetExecute,
	description as opensearchNodeGetGetDescription,
} from './database/opensearch/NodeGetGet.operation';

import {
	execute as opensearchNodeListGetExecute,
	description as opensearchNodeListGetDescription,
} from './database/opensearch/NodeListGet.operation';

import {
	execute as opensearchPatternCreatePostExecute,
	description as opensearchPatternCreatePostDescription,
} from './database/opensearch/PatternCreatePost.operation';

import {
	execute as opensearchPatternDeleteDeleteExecute,
	description as opensearchPatternDeleteDeleteDescription,
} from './database/opensearch/PatternDeleteDelete.operation';

import {
	execute as opensearchPatternGetGetExecute,
	description as opensearchPatternGetGetDescription,
} from './database/opensearch/PatternGetGet.operation';

import {
	execute as opensearchPatternListGetExecute,
	description as opensearchPatternListGetDescription,
} from './database/opensearch/PatternListGet.operation';

import {
	execute as opensearchPermissionsListGetExecute,
	description as opensearchPermissionsListGetDescription,
} from './database/opensearch/PermissionsListGet.operation';

import {
	execute as opensearchPrometheusCredentialsResetPostExecute,
	description as opensearchPrometheusCredentialsResetPostDescription,
} from './database/opensearch/PrometheusCredentialsResetPost.operation';

import {
	execute as opensearchPrometheusListGetExecute,
	description as opensearchPrometheusListGetDescription,
} from './database/opensearch/PrometheusListGet.operation';

import {
	execute as opensearchUserCreatePostExecute,
	description as opensearchUserCreatePostDescription,
} from './database/opensearch/UserCreatePost.operation';

import {
	execute as opensearchUserCredentialsResetPostExecute,
	description as opensearchUserCredentialsResetPostDescription,
} from './database/opensearch/UserCredentialsResetPost.operation';

import {
	execute as opensearchUserDeleteDeleteExecute,
	description as opensearchUserDeleteDeleteDescription,
} from './database/opensearch/UserDeleteDelete.operation';

import {
	execute as opensearchUserGetGetExecute,
	description as opensearchUserGetGetDescription,
} from './database/opensearch/UserGetGet.operation';

import {
	execute as opensearchUserListGetExecute,
	description as opensearchUserListGetDescription,
} from './database/opensearch/UserListGet.operation';

import {
	execute as opensearchUserUpdatePutExecute,
	description as opensearchUserUpdatePutDescription,
} from './database/opensearch/UserUpdatePut.operation';

import {
	execute as postgresqlBackupCreatePostExecute,
	description as postgresqlBackupCreatePostDescription,
} from './database/postgresql/backupCreatePost.operation';

import {
	execute as postgresqlBackupDeleteDeleteExecute,
	description as postgresqlBackupDeleteDeleteDescription,
} from './database/postgresql/backupDeleteDelete.operation';

import {
	execute as postgresqlBackupGetGetExecute,
	description as postgresqlBackupGetGetDescription,
} from './database/postgresql/backupGetGet.operation';

import {
	execute as postgresqlBackupListGetExecute,
	description as postgresqlBackupListGetDescription,
} from './database/postgresql/backupListGet.operation';

import {
	execute as postgresqlCertificateCreatePostExecute,
	description as postgresqlCertificateCreatePostDescription,
} from './database/postgresql/certificateCreatePost.operation';

import {
	execute as postgresqlCertificateListGetExecute,
	description as postgresqlCertificateListGetDescription,
} from './database/postgresql/certificateListGet.operation';

import {
	execute as postgresqlClusterCreatePostExecute,
	description as postgresqlClusterCreatePostDescription,
} from './database/postgresql/clusterCreatePost.operation';

import {
	execute as postgresqlClusterDeleteDeleteExecute,
	description as postgresqlClusterDeleteDeleteDescription,
} from './database/postgresql/clusterDeleteDelete.operation';

import {
	execute as postgresqlClusterGetGetExecute,
	description as postgresqlClusterGetGetDescription,
} from './database/postgresql/clusterGetGet.operation';

import {
	execute as postgresqlClusterListGetExecute,
	description as postgresqlClusterListGetDescription,
} from './database/postgresql/clusterListGet.operation';

import {
	execute as postgresqlClusterUpdatePutExecute,
	description as postgresqlClusterUpdatePutDescription,
} from './database/postgresql/clusterUpdatePut.operation';

import {
	execute as postgresqlIntegrationCreatePostExecute,
	description as postgresqlIntegrationCreatePostDescription,
} from './database/postgresql/integrationCreatePost.operation';

import {
	execute as postgresqlIntegrationListGetExecute,
	description as postgresqlIntegrationListGetDescription,
} from './database/postgresql/integrationListGet.operation';

import {
	execute as postgresqlIpRestrictionCreatePostExecute,
	description as postgresqlIpRestrictionCreatePostDescription,
} from './database/postgresql/ipRestrictionCreatePost.operation';

import {
	execute as postgresqlIpRestrictionListGetExecute,
	description as postgresqlIpRestrictionListGetDescription,
} from './database/postgresql/ipRestrictionListGet.operation';

import {
	execute as postgresqlLogSubscriptionCreatePostExecute,
	description as postgresqlLogSubscriptionCreatePostDescription,
} from './database/postgresql/logSubscriptionCreatePost.operation';

import {
	execute as postgresqlLogSubscriptionGetGetExecute,
	description as postgresqlLogSubscriptionGetGetDescription,
} from './database/postgresql/logSubscriptionGetGet.operation';

import {
	execute as postgresqlLogSubscriptionListGetExecute,
	description as postgresqlLogSubscriptionListGetDescription,
} from './database/postgresql/logSubscriptionListGet.operation';

import {
	execute as postgresqlMaintenanceGetExecute,
	description as postgresqlMaintenanceGetDescription,
} from './database/postgresql/maintenanceGet.operation';

import {
	execute as postgresqlMaintenanceUpdatePutExecute,
	description as postgresqlMaintenanceUpdatePutDescription,
} from './database/postgresql/maintenanceUpdatePut.operation';

import {
	execute as postgresqlMetricGetExecute,
	description as postgresqlMetricGetDescription,
} from './database/postgresql/metricGet.operation';

import {
	execute as postgresqlNodeCreatePostExecute,
	description as postgresqlNodeCreatePostDescription,
} from './database/postgresql/nodeCreatePost.operation';

import {
	execute as postgresqlNodeDeleteDeleteExecute,
	description as postgresqlNodeDeleteDeleteDescription,
} from './database/postgresql/nodeDeleteDelete.operation';

import {
	execute as postgresqlNodeGetGetExecute,
	description as postgresqlNodeGetGetDescription,
} from './database/postgresql/nodeGetGet.operation';

import {
	execute as postgresqlNodeListGetExecute,
	description as postgresqlNodeListGetDescription,
} from './database/postgresql/nodeListGet.operation';

import {
	execute as postgresqlNodeUpdatePutExecute,
	description as postgresqlNodeUpdatePutDescription,
} from './database/postgresql/nodeUpdatePut.operation';

import {
	execute as postgresqlPrometheusGetExecute,
	description as postgresqlPrometheusGetDescription,
} from './database/postgresql/prometheusGet.operation';

import {
	execute as postgresqlUserCreatePostExecute,
	description as postgresqlUserCreatePostDescription,
} from './database/postgresql/userCreatePost.operation';

import {
	execute as postgresqlUserDeleteDeleteExecute,
	description as postgresqlUserDeleteDeleteDescription,
} from './database/postgresql/userDeleteDelete.operation';

import {
	execute as postgresqlUserGetGetExecute,
	description as postgresqlUserGetGetDescription,
} from './database/postgresql/userGetGet.operation';

import {
	execute as postgresqlUserListGetExecute,
	description as postgresqlUserListGetDescription,
} from './database/postgresql/userListGet.operation';

import {
	execute as postgresqlUserUpdatePutExecute,
	description as postgresqlUserUpdatePutDescription,
} from './database/postgresql/userUpdatePut.operation';

import {
	execute as redisAdvancedConfigurationGetExecute,
	description as redisAdvancedConfigurationGetDescription,
} from './database/redis/advancedConfigurationGet.operation';

import {
	execute as redisAdvancedConfigurationUpdatePutExecute,
	description as redisAdvancedConfigurationUpdatePutDescription,
} from './database/redis/advancedConfigurationUpdatePut.operation';

import {
	execute as redisBackupGetGetExecute,
	description as redisBackupGetGetDescription,
} from './database/redis/backupGetGet.operation';

import {
	execute as redisBackupListGetExecute,
	description as redisBackupListGetDescription,
} from './database/redis/backupListGet.operation';

import {
	execute as redisCapabilitiesAdvancedConfigurationGetExecute,
	description as redisCapabilitiesAdvancedConfigurationGetDescription,
} from './database/redis/capabilitiesAdvancedConfigurationGet.operation';

import {
	execute as redisCapabilitiesCategoriesGetExecute,
	description as redisCapabilitiesCategoriesGetDescription,
} from './database/redis/capabilitiesCategoriesGet.operation';

import {
	execute as redisCapabilitiesCommandsGetExecute,
	description as redisCapabilitiesCommandsGetDescription,
} from './database/redis/capabilitiesCommandsGet.operation';

import {
	execute as redisCapabilitiesIntegrationGetExecute,
	description as redisCapabilitiesIntegrationGetDescription,
} from './database/redis/capabilitiesIntegrationGet.operation';

import {
	execute as redisClusterCreatePostExecute,
	description as redisClusterCreatePostDescription,
} from './database/redis/clusterCreatePost.operation';

import {
	execute as redisClusterDeleteDeleteExecute,
	description as redisClusterDeleteDeleteDescription,
} from './database/redis/clusterDeleteDelete.operation';

import {
	execute as redisClusterGetGetExecute,
	description as redisClusterGetGetDescription,
} from './database/redis/clusterGetGet.operation';

import {
	execute as redisClusterListGetExecute,
	description as redisClusterListGetDescription,
} from './database/redis/clusterListGet.operation';

import {
	execute as redisClusterUpdatePutExecute,
	description as redisClusterUpdatePutDescription,
} from './database/redis/clusterUpdatePut.operation';

import {
	execute as redisIntegrationCreatePostExecute,
	description as redisIntegrationCreatePostDescription,
} from './database/redis/integrationCreatePost.operation';

import {
	execute as redisIntegrationDeleteDeleteExecute,
	description as redisIntegrationDeleteDeleteDescription,
} from './database/redis/integrationDeleteDelete.operation';

import {
	execute as redisIntegrationGetGetExecute,
	description as redisIntegrationGetGetDescription,
} from './database/redis/integrationGetGet.operation';

import {
	execute as redisIntegrationListGetExecute,
	description as redisIntegrationListGetDescription,
} from './database/redis/integrationListGet.operation';

import {
	execute as redisIpRestrictionCreatePostExecute,
	description as redisIpRestrictionCreatePostDescription,
} from './database/redis/ipRestrictionCreatePost.operation';

import {
	execute as redisIpRestrictionDeleteDeleteExecute,
	description as redisIpRestrictionDeleteDeleteDescription,
} from './database/redis/ipRestrictionDeleteDelete.operation';

import {
	execute as redisIpRestrictionGetGetExecute,
	description as redisIpRestrictionGetGetDescription,
} from './database/redis/ipRestrictionGetGet.operation';

import {
	execute as redisIpRestrictionListGetExecute,
	description as redisIpRestrictionListGetDescription,
} from './database/redis/ipRestrictionListGet.operation';

import {
	execute as redisIpRestrictionUpdatePutExecute,
	description as redisIpRestrictionUpdatePutDescription,
} from './database/redis/ipRestrictionUpdatePut.operation';

import {
	execute as redisLogKindGetExecute,
	description as redisLogKindGetDescription,
} from './database/redis/logKindGet.operation';

import {
	execute as redisLogKindListGetExecute,
	description as redisLogKindListGetDescription,
} from './database/redis/logKindListGet.operation';

import {
	execute as redisLogSubscriptionCreatePostExecute,
	description as redisLogSubscriptionCreatePostDescription,
} from './database/redis/logSubscriptionCreatePost.operation';

import {
	execute as redisLogSubscriptionDeleteDeleteExecute,
	description as redisLogSubscriptionDeleteDeleteDescription,
} from './database/redis/logSubscriptionDeleteDelete.operation';

import {
	execute as redisLogSubscriptionGetGetExecute,
	description as redisLogSubscriptionGetGetDescription,
} from './database/redis/logSubscriptionGetGet.operation';

import {
	execute as redisLogSubscriptionListGetExecute,
	description as redisLogSubscriptionListGetDescription,
} from './database/redis/logSubscriptionListGet.operation';

import {
	execute as redisLogUrlCreatePostExecute,
	description as redisLogUrlCreatePostDescription,
} from './database/redis/logUrlCreatePost.operation';

import {
	execute as redisLogsGetExecute,
	description as redisLogsGetDescription,
} from './database/redis/logsGet.operation';

import {
	execute as redisMaintenanceApplyPostExecute,
	description as redisMaintenanceApplyPostDescription,
} from './database/redis/maintenanceApplyPost.operation';

import {
	execute as redisMaintenanceGetExecute,
	description as redisMaintenanceGetDescription,
} from './database/redis/maintenanceGet.operation';

import {
	execute as redisMaintenanceListGetExecute,
	description as redisMaintenanceListGetDescription,
} from './database/redis/maintenanceListGet.operation';

import {
	execute as redisMetricGetExecute,
	description as redisMetricGetDescription,
} from './database/redis/metricGet.operation';

import {
	execute as redisMetricListGetExecute,
	description as redisMetricListGetDescription,
} from './database/redis/metricListGet.operation';

import {
	execute as redisNodeGetGetExecute,
	description as redisNodeGetGetDescription,
} from './database/redis/nodeGetGet.operation';

import {
	execute as redisNodeListGetExecute,
	description as redisNodeListGetDescription,
} from './database/redis/nodeListGet.operation';

import {
	execute as redisPrometheusCredentialsResetPostExecute,
	description as redisPrometheusCredentialsResetPostDescription,
} from './database/redis/prometheusCredentialsResetPost.operation';

import {
	execute as redisPrometheusGetExecute,
	description as redisPrometheusGetDescription,
} from './database/redis/prometheusGet.operation';

import {
	execute as redisUserCreatePostExecute,
	description as redisUserCreatePostDescription,
} from './database/redis/userCreatePost.operation';

import {
	execute as redisUserCredentialsResetPostExecute,
	description as redisUserCredentialsResetPostDescription,
} from './database/redis/userCredentialsResetPost.operation';

import {
	execute as redisUserDeleteDeleteExecute,
	description as redisUserDeleteDeleteDescription,
} from './database/redis/userDeleteDelete.operation';

import {
	execute as redisUserGetGetExecute,
	description as redisUserGetGetDescription,
} from './database/redis/userGetGet.operation';

import {
	execute as redisUserListGetExecute,
	description as redisUserListGetDescription,
} from './database/redis/userListGet.operation';

import {
	execute as redisUserUpdatePutExecute,
	description as redisUserUpdatePutDescription,
} from './database/redis/userUpdatePut.operation';

import {
	execute as valkeyBackupCreatePostExecute,
	description as valkeyBackupCreatePostDescription,
} from './database/valkey/backupCreatePost.operation';

import {
	execute as valkeyBackupDeleteDeleteExecute,
	description as valkeyBackupDeleteDeleteDescription,
} from './database/valkey/backupDeleteDelete.operation';

import {
	execute as valkeyBackupGetGetExecute,
	description as valkeyBackupGetGetDescription,
} from './database/valkey/backupGetGet.operation';

import {
	execute as valkeyBackupListGetExecute,
	description as valkeyBackupListGetDescription,
} from './database/valkey/backupListGet.operation';

import {
	execute as valkeyCertificateCreatePostExecute,
	description as valkeyCertificateCreatePostDescription,
} from './database/valkey/certificateCreatePost.operation';

import {
	execute as valkeyCertificateListGetExecute,
	description as valkeyCertificateListGetDescription,
} from './database/valkey/certificateListGet.operation';

import {
	execute as valkeyClusterCreatePostExecute,
	description as valkeyClusterCreatePostDescription,
} from './database/valkey/clusterCreatePost.operation';

import {
	execute as valkeyClusterDeleteDeleteExecute,
	description as valkeyClusterDeleteDeleteDescription,
} from './database/valkey/clusterDeleteDelete.operation';

import {
	execute as valkeyClusterGetGetExecute,
	description as valkeyClusterGetGetDescription,
} from './database/valkey/clusterGetGet.operation';

import {
	execute as valkeyClusterListGetExecute,
	description as valkeyClusterListGetDescription,
} from './database/valkey/clusterListGet.operation';

import {
	execute as valkeyClusterUpdatePutExecute,
	description as valkeyClusterUpdatePutDescription,
} from './database/valkey/clusterUpdatePut.operation';

import {
	execute as valkeyIntegrationCreatePostExecute,
	description as valkeyIntegrationCreatePostDescription,
} from './database/valkey/integrationCreatePost.operation';

import {
	execute as valkeyIntegrationListGetExecute,
	description as valkeyIntegrationListGetDescription,
} from './database/valkey/integrationListGet.operation';

import {
	execute as valkeyIpRestrictionCreatePostExecute,
	description as valkeyIpRestrictionCreatePostDescription,
} from './database/valkey/ipRestrictionCreatePost.operation';

import {
	execute as valkeyIpRestrictionListGetExecute,
	description as valkeyIpRestrictionListGetDescription,
} from './database/valkey/ipRestrictionListGet.operation';

import {
	execute as valkeyLogSubscriptionCreatePostExecute,
	description as valkeyLogSubscriptionCreatePostDescription,
} from './database/valkey/logSubscriptionCreatePost.operation';

import {
	execute as valkeyLogSubscriptionGetGetExecute,
	description as valkeyLogSubscriptionGetGetDescription,
} from './database/valkey/logSubscriptionGetGet.operation';

import {
	execute as valkeyLogSubscriptionListGetExecute,
	description as valkeyLogSubscriptionListGetDescription,
} from './database/valkey/logSubscriptionListGet.operation';

import {
	execute as valkeyMaintenanceGetExecute,
	description as valkeyMaintenanceGetDescription,
} from './database/valkey/maintenanceGet.operation';

import {
	execute as valkeyMaintenanceUpdatePutExecute,
	description as valkeyMaintenanceUpdatePutDescription,
} from './database/valkey/maintenanceUpdatePut.operation';

import {
	execute as valkeyMetricGetExecute,
	description as valkeyMetricGetDescription,
} from './database/valkey/metricGet.operation';

import {
	execute as valkeyNodeCreatePostExecute,
	description as valkeyNodeCreatePostDescription,
} from './database/valkey/nodeCreatePost.operation';

import {
	execute as valkeyNodeDeleteDeleteExecute,
	description as valkeyNodeDeleteDeleteDescription,
} from './database/valkey/nodeDeleteDelete.operation';

import {
	execute as valkeyNodeGetGetExecute,
	description as valkeyNodeGetGetDescription,
} from './database/valkey/nodeGetGet.operation';

import {
	execute as valkeyNodeListGetExecute,
	description as valkeyNodeListGetDescription,
} from './database/valkey/nodeListGet.operation';

import {
	execute as valkeyNodeUpdatePutExecute,
	description as valkeyNodeUpdatePutDescription,
} from './database/valkey/nodeUpdatePut.operation';

import {
	execute as valkeyPrometheusGetExecute,
	description as valkeyPrometheusGetDescription,
} from './database/valkey/prometheusGet.operation';

import {
	execute as valkeyUserCreatePostExecute,
	description as valkeyUserCreatePostDescription,
} from './database/valkey/userCreatePost.operation';

import {
	execute as valkeyUserDeleteDeleteExecute,
	description as valkeyUserDeleteDeleteDescription,
} from './database/valkey/userDeleteDelete.operation';

import {
	execute as valkeyUserGetGetExecute,
	description as valkeyUserGetGetDescription,
} from './database/valkey/userGetGet.operation';

import {
	execute as valkeyUserListGetExecute,
	description as valkeyUserListGetDescription,
} from './database/valkey/userListGet.operation';

import {
	execute as valkeyUserUpdatePutExecute,
	description as valkeyUserUpdatePutDescription,
} from './database/valkey/userUpdatePut.operation';

import {
	execute as flavorGetDetailGetExecute,
	description as flavorGetDetailGetDescription,
} from './flavor/getDetailGet.operation';

import {
	execute as flavorListGetExecute,
	description as flavorListGetDescription,
} from './flavor/listGet.operation';

import {
	execute as imageGetDetailGetExecute,
	description as imageGetDetailGetDescription,
} from './image/getDetailGet.operation';

import {
	execute as imageListGetExecute,
	description as imageListGetDescription,
} from './image/listGet.operation';

import {
	execute as instanceActiveMonthlyBillingPostExecute,
	description as instanceActiveMonthlyBillingPostDescription,
} from './instance/instanceActiveMonthlyBillingPost.operation';

import {
	execute as instanceApplicationAccessPostExecute,
	description as instanceApplicationAccessPostDescription,
} from './instance/instanceApplicationAccessPost.operation';

import {
	execute as instanceBulkPostExecute,
	description as instanceBulkPostDescription,
} from './instance/instanceBulkPost.operation';

import {
	execute as instanceCreatePostExecute,
	description as instanceCreatePostDescription,
} from './instance/instanceCreatePost.operation';

import {
	execute as instanceDeleteDeleteExecute,
	description as instanceDeleteDeleteDescription,
} from './instance/instanceDeleteDelete.operation';

import {
	execute as instanceGetGetExecute,
	description as instanceGetGetDescription,
} from './instance/instanceGetGet.operation';

import {
	execute as instanceGroupCreatePostExecute,
	description as instanceGroupCreatePostDescription,
} from './instance/instanceGroupCreatePost.operation';

import {
	execute as instanceGroupDeleteDeleteExecute,
	description as instanceGroupDeleteDeleteDescription,
} from './instance/instanceGroupDeleteDelete.operation';

import {
	execute as instanceGroupGetGetExecute,
	description as instanceGroupGetGetDescription,
} from './instance/instanceGroupGetGet.operation';

import {
	execute as instanceGroupListGetExecute,
	description as instanceGroupListGetDescription,
} from './instance/instanceGroupListGet.operation';

import {
	execute as instanceInterfaceCreatePostExecute,
	description as instanceInterfaceCreatePostDescription,
} from './instance/instanceInterfaceCreatePost.operation';

import {
	execute as instanceInterfaceDeleteDeleteExecute,
	description as instanceInterfaceDeleteDeleteDescription,
} from './instance/instanceInterfaceDeleteDelete.operation';

import {
	execute as instanceInterfaceGetGetExecute,
	description as instanceInterfaceGetGetDescription,
} from './instance/instanceInterfaceGetGet.operation';

import {
	execute as instanceInterfaceListGetExecute,
	description as instanceInterfaceListGetDescription,
} from './instance/instanceInterfaceListGet.operation';

import {
	execute as instanceListGetExecute,
	description as instanceListGetDescription,
} from './instance/instanceListGet.operation';

import {
	execute as instanceRebootPostExecute,
	description as instanceRebootPostDescription,
} from './instance/instanceRebootPost.operation';

import {
	execute as instanceReinstallPostExecute,
	description as instanceReinstallPostDescription,
} from './instance/instanceReinstallPost.operation';

import {
	execute as instanceRescueModePostExecute,
	description as instanceRescueModePostDescription,
} from './instance/instanceRescueModePost.operation';

import {
	execute as instanceResizePostExecute,
	description as instanceResizePostDescription,
} from './instance/instanceResizePost.operation';

import {
	execute as instanceResumePostExecute,
	description as instanceResumePostDescription,
} from './instance/instanceResumePost.operation';

import {
	execute as instanceShelvePostExecute,
	description as instanceShelvePostDescription,
} from './instance/instanceShelvePost.operation';

import {
	execute as instanceSnapshotPostExecute,
	description as instanceSnapshotPostDescription,
} from './instance/instanceSnapshotPost.operation';

import {
	execute as instanceStartPostExecute,
	description as instanceStartPostDescription,
} from './instance/instanceStartPost.operation';

import {
	execute as instanceStopPostExecute,
	description as instanceStopPostDescription,
} from './instance/instanceStopPost.operation';

import {
	execute as instanceUnshelvePostExecute,
	description as instanceUnshelvePostDescription,
} from './instance/instanceUnshelvePost.operation';

import {
	execute as instanceUpdatePutExecute,
	description as instanceUpdatePutDescription,
} from './instance/instanceUpdatePut.operation';

import {
	execute as instanceVncPostExecute,
	description as instanceVncPostDescription,
} from './instance/instanceVncPost.operation';

import {
	execute as ipCreatePostExecute,
	description as ipCreatePostDescription,
} from './ip/createPost.operation';

import {
	execute as ipDeleteDeleteExecute,
	description as ipDeleteDeleteDescription,
} from './ip/deleteDelete.operation';

import {
	execute as ipFailoverAttachPostExecute,
	description as ipFailoverAttachPostDescription,
} from './ip/failoverAttachPost.operation';

import {
	execute as ipFailoverGetGetExecute,
	description as ipFailoverGetGetDescription,
} from './ip/failoverGetGet.operation';

import {
	execute as ipFailoverListGetExecute,
	description as ipFailoverListGetDescription,
} from './ip/failoverListGet.operation';

import {
	execute as ipGetDetailGetExecute,
	description as ipGetDetailGetDescription,
} from './ip/getDetailGet.operation';

import {
	execute as ipListGetExecute,
	description as ipListGetDescription,
} from './ip/listGet.operation';

import {
	execute as ipUpdatePutExecute,
	description as ipUpdatePutDescription,
} from './ip/updatePut.operation';

import {
	execute as kubeAuditLogsPostExecute,
	description as kubeAuditLogsPostDescription,
} from './kube/kubeAuditLogsPost.operation';

import {
	execute as kubeCustomizationGetExecute,
	description as kubeCustomizationGetDescription,
} from './kube/kubeCustomizationGet.operation';

import {
	execute as kubeCustomizationUpdatePutExecute,
	description as kubeCustomizationUpdatePutDescription,
} from './kube/kubeCustomizationUpdatePut.operation';

import {
	execute as kubeDeleteDeleteExecute,
	description as kubeDeleteDeleteDescription,
} from './kube/kubeDeleteDelete.operation';

import {
	execute as kubeFlavorsGetExecute,
	description as kubeFlavorsGetDescription,
} from './kube/kubeFlavorsGet.operation';

import {
	execute as kubeGetGetExecute,
	description as kubeGetGetDescription,
} from './kube/kubeGetGet.operation';

import {
	execute as kubeIpRestrictionsDeleteDeleteExecute,
	description as kubeIpRestrictionsDeleteDeleteDescription,
} from './kube/kubeIpRestrictionsDeleteDelete.operation';

import {
	execute as kubeIpRestrictionsGetExecute,
	description as kubeIpRestrictionsGetDescription,
} from './kube/kubeIpRestrictionsGet.operation';

import {
	execute as kubeIpRestrictionsPostExecute,
	description as kubeIpRestrictionsPostDescription,
} from './kube/kubeIpRestrictionsPost.operation';

import {
	execute as kubeIpRestrictionsUpdatePutExecute,
	description as kubeIpRestrictionsUpdatePutDescription,
} from './kube/kubeIpRestrictionsUpdatePut.operation';

import {
	execute as kubeKubeconfigPostExecute,
	description as kubeKubeconfigPostDescription,
} from './kube/kubeKubeconfigPost.operation';

import {
	execute as kubeKubeconfigResetPostExecute,
	description as kubeKubeconfigResetPostDescription,
} from './kube/kubeKubeconfigResetPost.operation';

import {
	execute as kubeListGetExecute,
	description as kubeListGetDescription,
} from './kube/kubeListGet.operation';

import {
	execute as kubeLogSubscriptionDeleteDeleteExecute,
	description as kubeLogSubscriptionDeleteDeleteDescription,
} from './kube/kubeLogSubscriptionDeleteDelete.operation';

import {
	execute as kubeLogSubscriptionGetExecute,
	description as kubeLogSubscriptionGetDescription,
} from './kube/kubeLogSubscriptionGet.operation';

import {
	execute as kubeLogSubscriptionListGetExecute,
	description as kubeLogSubscriptionListGetDescription,
} from './kube/kubeLogSubscriptionListGet.operation';

import {
	execute as kubeLogSubscriptionPostExecute,
	description as kubeLogSubscriptionPostDescription,
} from './kube/kubeLogSubscriptionPost.operation';

import {
	execute as kubeLogUrlPostExecute,
	description as kubeLogUrlPostDescription,
} from './kube/kubeLogUrlPost.operation';

import {
	execute as kubeMetricsEtcdUsageGetExecute,
	description as kubeMetricsEtcdUsageGetDescription,
} from './kube/kubeMetricsEtcdUsageGet.operation';

import {
	execute as kubeNodeDeleteDeleteExecute,
	description as kubeNodeDeleteDeleteDescription,
} from './kube/kubeNodeDeleteDelete.operation';

import {
	execute as kubeNodeGetExecute,
	description as kubeNodeGetDescription,
} from './kube/kubeNodeGet.operation';

import {
	execute as kubeNodeListGetExecute,
	description as kubeNodeListGetDescription,
} from './kube/kubeNodeListGet.operation';

import {
	execute as kubeNodepoolCreatePostExecute,
	description as kubeNodepoolCreatePostDescription,
} from './kube/kubeNodepoolCreatePost.operation';

import {
	execute as kubeNodepoolDeleteDeleteExecute,
	description as kubeNodepoolDeleteDeleteDescription,
} from './kube/kubeNodepoolDeleteDelete.operation';

import {
	execute as kubeNodepoolGetGetExecute,
	description as kubeNodepoolGetGetDescription,
} from './kube/kubeNodepoolGetGet.operation';

import {
	execute as kubeNodepoolListGetExecute,
	description as kubeNodepoolListGetDescription,
} from './kube/kubeNodepoolListGet.operation';

import {
	execute as kubeNodepoolListNodepoolNodesGetExecute,
	description as kubeNodepoolListNodepoolNodesGetDescription,
} from './kube/kubeNodepoolListNodepoolNodesGet.operation';

import {
	execute as kubeNodepoolUpdatePutExecute,
	description as kubeNodepoolUpdatePutDescription,
} from './kube/kubeNodepoolUpdatePut.operation';

import {
	execute as kubeOpenIdConnectDeleteDeleteExecute,
	description as kubeOpenIdConnectDeleteDeleteDescription,
} from './kube/kubeOpenIdConnectDeleteDelete.operation';

import {
	execute as kubeOpenIdConnectGetExecute,
	description as kubeOpenIdConnectGetDescription,
} from './kube/kubeOpenIdConnectGet.operation';

import {
	execute as kubeOpenIdConnectPostExecute,
	description as kubeOpenIdConnectPostDescription,
} from './kube/kubeOpenIdConnectPost.operation';

import {
	execute as kubeOpenIdConnectUpdatePutExecute,
	description as kubeOpenIdConnectUpdatePutDescription,
} from './kube/kubeOpenIdConnectUpdatePut.operation';

import {
	execute as kubePrivateNetworkConfigurationGetExecute,
	description as kubePrivateNetworkConfigurationGetDescription,
} from './kube/kubePrivateNetworkConfigurationGet.operation';

import {
	execute as kubePrivateNetworkConfigurationUpdatePutExecute,
	description as kubePrivateNetworkConfigurationUpdatePutDescription,
} from './kube/kubePrivateNetworkConfigurationUpdatePut.operation';

import {
	execute as kubeResetPostExecute,
	description as kubeResetPostDescription,
} from './kube/kubeResetPost.operation';

import {
	execute as kubeRestartPostExecute,
	description as kubeRestartPostDescription,
} from './kube/kubeRestartPost.operation';

import {
	execute as kubeUpdateLoadBalancersSubnetIdUpdatePutExecute,
	description as kubeUpdateLoadBalancersSubnetIdUpdatePutDescription,
} from './kube/kubeUpdateLoadBalancersSubnetIdUpdatePut.operation';

import {
	execute as kubeUpdatePolicyUpdatePutExecute,
	description as kubeUpdatePolicyUpdatePutDescription,
} from './kube/kubeUpdatePolicyUpdatePut.operation';

import {
	execute as kubeUpdatePostExecute,
	description as kubeUpdatePostDescription,
} from './kube/kubeUpdatePost.operation';

import {
	execute as kubeUpdatePutExecute,
	description as kubeUpdatePutDescription,
} from './kube/kubeUpdatePut.operation';

import {
	execute as labAgreementListGetExecute,
	description as labAgreementListGetDescription,
} from './lab/agreementListGet.operation';

import {
	execute as labCreatePostExecute,
	description as labCreatePostDescription,
} from './lab/createPost.operation';

import {
	execute as labGetDetailGetExecute,
	description as labGetDetailGetDescription,
} from './lab/getDetailGet.operation';

import {
	execute as labListGetExecute,
	description as labListGetDescription,
} from './lab/listGet.operation';

import {
	execute as loadbalancerConfigurationApplyPostExecute,
	description as loadbalancerConfigurationApplyPostDescription,
} from './loadbalancer/configurationApplyPost.operation';

import {
	execute as loadbalancerConfigurationCreatePostExecute,
	description as loadbalancerConfigurationCreatePostDescription,
} from './loadbalancer/configurationCreatePost.operation';

import {
	execute as loadbalancerConfigurationDeleteDeleteExecute,
	description as loadbalancerConfigurationDeleteDeleteDescription,
} from './loadbalancer/configurationDeleteDelete.operation';

import {
	execute as loadbalancerConfigurationGetGetExecute,
	description as loadbalancerConfigurationGetGetDescription,
} from './loadbalancer/configurationGetGet.operation';

import {
	execute as loadbalancerConfigurationListGetExecute,
	description as loadbalancerConfigurationListGetDescription,
} from './loadbalancer/configurationListGet.operation';

import {
	execute as loadbalancerCreatePostExecute,
	description as loadbalancerCreatePostDescription,
} from './loadbalancer/createPost.operation';

import {
	execute as loadbalancerDeleteDeleteExecute,
	description as loadbalancerDeleteDeleteDescription,
} from './loadbalancer/deleteDelete.operation';

import {
	execute as loadbalancerGetDetailGetExecute,
	description as loadbalancerGetDetailGetDescription,
} from './loadbalancer/getDetailGet.operation';

import {
	execute as loadbalancerListGetExecute,
	description as loadbalancerListGetDescription,
} from './loadbalancer/listGet.operation';

import {
	execute as loadbalancerUpdatePutExecute,
	description as loadbalancerUpdatePutDescription,
} from './loadbalancer/updatePut.operation';

import {
	execute as networkActivatePrivateNetworkRegionPostExecute,
	description as networkActivatePrivateNetworkRegionPostDescription,
} from './network/activatePrivateNetworkRegionPost.operation';

import {
	execute as networkCreatePrivateNetworkPostExecute,
	description as networkCreatePrivateNetworkPostDescription,
} from './network/createPrivateNetworkPost.operation';

import {
	execute as networkCreateSubnetPostExecute,
	description as networkCreateSubnetPostDescription,
} from './network/createSubnetPost.operation';

import {
	execute as networkDeletePrivateNetworkDeleteExecute,
	description as networkDeletePrivateNetworkDeleteDescription,
} from './network/deletePrivateNetworkDelete.operation';

import {
	execute as networkDeleteSubnetDeleteExecute,
	description as networkDeleteSubnetDeleteDescription,
} from './network/deleteSubnetDelete.operation';

import {
	execute as networkGetPrivateNetworkDetailGetExecute,
	description as networkGetPrivateNetworkDetailGetDescription,
} from './network/getPrivateNetworkDetailGet.operation';

import {
	execute as networkGetSubnetDetailGetExecute,
	description as networkGetSubnetDetailGetDescription,
} from './network/getSubnetDetailGet.operation';

import {
	execute as networkListPrivateNetworksGetExecute,
	description as networkListPrivateNetworksGetDescription,
} from './network/listPrivateNetworksGet.operation';

import {
	execute as networkListPublicNetworksGetExecute,
	description as networkListPublicNetworksGetDescription,
} from './network/listPublicNetworksGet.operation';

import {
	execute as networkListSubnetsGetExecute,
	description as networkListSubnetsGetDescription,
} from './network/listSubnetsGet.operation';

import {
	execute as networkUpdatePrivateNetworkPutExecute,
	description as networkUpdatePrivateNetworkPutDescription,
} from './network/updatePrivateNetworkPut.operation';

import {
	execute as networkUpdateSubnetPutExecute,
	description as networkUpdateSubnetPutDescription,
} from './network/updateSubnetPut.operation';

import {
	execute as operationGetDetailGetExecute,
	description as operationGetDetailGetDescription,
} from './operation/getDetailGet.operation';

import {
	execute as operationListGetExecute,
	description as operationListGetDescription,
} from './operation/listGet.operation';

import {
	execute as projectDetailGetExecute,
	description as projectDetailGetDescription,
} from './project/getDetailGet.operation';

import {
	execute as getDetailGetV2Execute,
	description as getDetailGetV2Description,
} from './project/getDetailGetV2.operation';

import {
	execute as projectListGetExecute,
	description as projectListGetDescription,
} from './project/listGet.operation';

import {
	execute as listGetV2Execute,
} from './project/listGetV2.operation';

import {
	execute as quantumGetCapabilitiesDetailGetExecute,
	description as quantumGetCapabilitiesDetailGetDescription,
} from './quantum/getCapabilitiesDetailGet.operation';

import {
	execute as quantumGetCapabilitiesRegionDetailGetExecute,
	description as quantumGetCapabilitiesRegionDetailGetDescription,
} from './quantum/getCapabilitiesRegionDetailGet.operation';

import {
	execute as quantumListCapabilitiesGetExecute,
	description as quantumListCapabilitiesGetDescription,
} from './quantum/listCapabilitiesGet.operation';

import {
	execute as quantumListCapabilitiesRegionGetExecute,
	description as quantumListCapabilitiesRegionGetDescription,
} from './quantum/listCapabilitiesRegionGet.operation';

import {
	execute as quotaListGetExecute,
	description as quotaListGetDescription,
} from './quota/listGet.operation';

import {
	executeGet as rancherAdminCredentialsGetExecute,
	descriptionGet as rancherAdminCredentialsGetDescription,
	executePost as rancherAdminCredentialsPostExecute,
	descriptionPost as rancherAdminCredentialsPostDescription,
} from './rancher/adminCredentials.operation';

import {
	execute as adminCredentialsResetV2Execute,
	description as adminCredentialsResetV2Description,
} from './rancher/adminCredentialsResetV2.operation';

import {
	execute as rancherEventListGetExecute,
	description as rancherEventListGetDescription,
} from './rancher/eventListGet.operation';

import {
	execute as eventListGetV2Execute,
	description as eventListGetV2Description,
} from './rancher/eventListGetV2.operation';

import {
	execute as globalReferencePlanListGetV2Execute,
	description as globalReferencePlanListGetV2Description,
} from './rancher/globalReferencePlanListGetV2.operation';

import {
	execute as globalReferenceVersionListGetV2Execute,
	description as globalReferenceVersionListGetV2Description,
} from './rancher/globalReferenceVersionListGetV2.operation';

import {
	execute as rancherPlanCapabilityListGetExecute,
	description as rancherPlanCapabilityListGetDescription,
} from './rancher/planCapabilityListGet.operation';

import {
	execute as planCapabilityListGetV2Execute,
	description as planCapabilityListGetV2Description,
} from './rancher/planCapabilityListGetV2.operation';

import {
	execute as referencePlanListGetV2Execute,
	description as referencePlanListGetV2Description,
} from './rancher/referencePlanListGetV2.operation';

import {
	execute as referenceVersionListGetV2Execute,
	description as referenceVersionListGetV2Description,
} from './rancher/referenceVersionListGetV2.operation';

import {
	execute as rancherServiceCreatePostExecute,
	description as rancherServiceCreatePostDescription,
} from './rancher/serviceCreatePost.operation';

import {
	execute as serviceCreatePostV2Execute,
	description as serviceCreatePostV2Description,
} from './rancher/serviceCreatePostV2.operation';

import {
	execute as rancherServiceDeleteDeleteExecute,
	description as rancherServiceDeleteDeleteDescription,
} from './rancher/serviceDeleteDelete.operation';

import {
	execute as serviceDeleteDeleteV2Execute,
	description as serviceDeleteDeleteV2Description,
} from './rancher/serviceDeleteDeleteV2.operation';

import {
	execute as rancherServiceGetExecute,
	description as rancherServiceGetDescription,
} from './rancher/serviceGet.operation';

import {
	execute as serviceGetGetV2Execute,
	description as serviceGetGetV2Description,
} from './rancher/serviceGetGetV2.operation';

import {
	execute as rancherServiceListGetExecute,
	description as rancherServiceListGetDescription,
} from './rancher/serviceListGet.operation';

import {
	execute as serviceListGetV2Execute,
	description as serviceListGetV2Description,
} from './rancher/serviceListGetV2.operation';

import {
	execute as rancherServiceUpdatePutExecute,
	description as rancherServiceUpdatePutDescription,
} from './rancher/serviceUpdatePut.operation';

import {
	execute as serviceUpdatePutV2Execute,
	description as serviceUpdatePutV2Description,
} from './rancher/serviceUpdatePutV2.operation';

import {
	execute as rancherTaskDetailGetExecute,
	description as rancherTaskDetailGetDescription,
} from './rancher/taskDetailGet.operation';

import {
	execute as taskDetailGetV2Execute,
	description as taskDetailGetV2Description,
} from './rancher/taskDetailGetV2.operation';

import {
	execute as rancherTaskListGetExecute,
	description as rancherTaskListGetDescription,
} from './rancher/taskListGet.operation';

import {
	execute as taskListGetV2Execute,
	description as taskListGetV2Description,
} from './rancher/taskListGetV2.operation';

import {
	execute as rancherVersionCapabilityListGetExecute,
	description as rancherVersionCapabilityListGetDescription,
} from './rancher/versionCapabilityListGet.operation';

import {
	execute as versionCapabilityListGetV2Execute,
	description as versionCapabilityListGetV2Description,
} from './rancher/versionCapabilityListGetV2.operation';

import {
	execute as floatingIpCreatePostExecute,
} from './region/floatingip/floatingIpCreatePost.operation';

import {
	execute as floatingIpDeleteDeleteExecute,
} from './region/floatingip/floatingIpDeleteDelete.operation';

import {
	execute as floatingIpDetachPostExecute,
} from './region/floatingip/floatingIpDetachPost.operation';

import {
	execute as floatingIpGetGetExecute,
} from './region/floatingip/floatingIpGetGet.operation';

import {
	execute as floatingIpListGetExecute,
} from './region/floatingip/floatingIpListGet.operation';

import {
	execute as gatewayCreatePostExecute,
} from './region/gateway/gatewayCreatePost.operation';

import {
	execute as gatewayDeleteDeleteExecute,
} from './region/gateway/gatewayDeleteDelete.operation';

import {
	execute as gatewayExposePostExecute,
} from './region/gateway/gatewayExposePost.operation';

import {
	execute as gatewayGetGetExecute,
} from './region/gateway/gatewayGetGet.operation';

import {
	execute as gatewayInterfaceCreatePostExecute,
} from './region/gateway/gatewayInterfaceCreatePost.operation';

import {
	execute as gatewayInterfaceDeleteDeleteExecute,
} from './region/gateway/gatewayInterfaceDeleteDelete.operation';

import {
	execute as gatewayInterfaceGetGetExecute,
} from './region/gateway/gatewayInterfaceGetGet.operation';

import {
	execute as gatewayInterfaceListGetExecute,
} from './region/gateway/gatewayInterfaceListGet.operation';

import {
	execute as gatewayListGetExecute,
} from './region/gateway/gatewayListGet.operation';

import {
	execute as gatewayUpdatePutExecute,
} from './region/gateway/gatewayUpdatePut.operation';

import {
	execute as loadbalancingFlavorGetGetExecute,
} from './region/loadbalancing/loadbalancingFlavorGetGet.operation';

import {
	execute as loadbalancingFlavorListGetExecute,
} from './region/loadbalancing/loadbalancingFlavorListGet.operation';

import {
	execute as loadbalancingHealthMonitorCreatePostExecute,
} from './region/loadbalancing/loadbalancingHealthMonitorCreatePost.operation';

import {
	execute as loadbalancingHealthMonitorDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingHealthMonitorDeleteDelete.operation';

import {
	execute as loadbalancingHealthMonitorGetGetExecute,
} from './region/loadbalancing/loadbalancingHealthMonitorGetGet.operation';

import {
	execute as loadbalancingHealthMonitorListGetExecute,
} from './region/loadbalancing/loadbalancingHealthMonitorListGet.operation';

import {
	execute as loadbalancingHealthMonitorUpdatePutExecute,
} from './region/loadbalancing/loadbalancingHealthMonitorUpdatePut.operation';

import {
	execute as loadbalancingL7PolicyCreatePostExecute,
} from './region/loadbalancing/loadbalancingL7PolicyCreatePost.operation';

import {
	execute as loadbalancingL7PolicyDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingL7PolicyDeleteDelete.operation';

import {
	execute as loadbalancingL7PolicyGetGetExecute,
} from './region/loadbalancing/loadbalancingL7PolicyGetGet.operation';

import {
	execute as loadbalancingL7PolicyL7RuleCreatePostExecute,
} from './region/loadbalancing/loadbalancingL7PolicyL7RuleCreatePost.operation';

import {
	execute as loadbalancingL7PolicyL7RuleDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingL7PolicyL7RuleDeleteDelete.operation';

import {
	execute as loadbalancingL7PolicyL7RuleGetGetExecute,
} from './region/loadbalancing/loadbalancingL7PolicyL7RuleGetGet.operation';

import {
	execute as loadbalancingL7PolicyL7RuleListGetExecute,
} from './region/loadbalancing/loadbalancingL7PolicyL7RuleListGet.operation';

import {
	execute as loadbalancingL7PolicyL7RuleUpdatePutExecute,
} from './region/loadbalancing/loadbalancingL7PolicyL7RuleUpdatePut.operation';

import {
	execute as loadbalancingL7PolicyListGetExecute,
} from './region/loadbalancing/loadbalancingL7PolicyListGet.operation';

import {
	execute as loadbalancingL7PolicyUpdatePutExecute,
} from './region/loadbalancing/loadbalancingL7PolicyUpdatePut.operation';

import {
	execute as loadbalancingListenerCreatePostExecute,
} from './region/loadbalancing/loadbalancingListenerCreatePost.operation';

import {
	execute as loadbalancingListenerDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingListenerDeleteDelete.operation';

import {
	execute as loadbalancingListenerGetGetExecute,
} from './region/loadbalancing/loadbalancingListenerGetGet.operation';

import {
	execute as loadbalancingListenerListGetExecute,
} from './region/loadbalancing/loadbalancingListenerListGet.operation';

import {
	execute as loadbalancingListenerUpdatePutExecute,
} from './region/loadbalancing/loadbalancingListenerUpdatePut.operation';

import {
	execute as loadbalancingLoadBalancerAssociateFloatingIpPostExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerAssociateFloatingIpPost.operation';

import {
	execute as loadbalancingLoadBalancerCreatePostExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerCreatePost.operation';

import {
	execute as loadbalancingLoadBalancerDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerDeleteDelete.operation';

import {
	execute as loadbalancingLoadBalancerFloatingIpPostExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerFloatingIpPost.operation';

import {
	execute as loadbalancingLoadBalancerGetGetExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerGetGet.operation';

import {
	execute as loadbalancingLoadBalancerListGetExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerListGet.operation';

import {
	execute as loadbalancingLoadBalancerLogSubscriptionCreatePostExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionCreatePost.operation';

import {
	execute as loadbalancingLoadBalancerLogSubscriptionDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionDeleteDelete.operation';

import {
	execute as loadbalancingLoadBalancerLogSubscriptionGetGetExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionGetGet.operation';

import {
	execute as loadbalancingLoadBalancerLogSubscriptionListGetExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerLogSubscriptionListGet.operation';

import {
	execute as loadbalancingLoadBalancerLogUrlPostExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerLogUrlPost.operation';

import {
	execute as loadbalancingLoadBalancerStatsGetExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerStatsGet.operation';

import {
	execute as loadbalancingLoadBalancerUpdatePutExecute,
} from './region/loadbalancing/loadbalancingLoadBalancerUpdatePut.operation';

import {
	execute as loadbalancingLogKindGetGetExecute,
} from './region/loadbalancing/loadbalancingLogKindGetGet.operation';

import {
	execute as loadbalancingLogKindListGetExecute,
} from './region/loadbalancing/loadbalancingLogKindListGet.operation';

import {
	execute as loadbalancingPoolCreatePostExecute,
} from './region/loadbalancing/loadbalancingPoolCreatePost.operation';

import {
	execute as loadbalancingPoolDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingPoolDeleteDelete.operation';

import {
	execute as loadbalancingPoolGetGetExecute,
} from './region/loadbalancing/loadbalancingPoolGetGet.operation';

import {
	execute as loadbalancingPoolListGetExecute,
} from './region/loadbalancing/loadbalancingPoolListGet.operation';

import {
	execute as loadbalancingPoolMemberCreatePostExecute,
} from './region/loadbalancing/loadbalancingPoolMemberCreatePost.operation';

import {
	execute as loadbalancingPoolMemberDeleteDeleteExecute,
} from './region/loadbalancing/loadbalancingPoolMemberDeleteDelete.operation';

import {
	execute as loadbalancingPoolMemberGetGetExecute,
} from './region/loadbalancing/loadbalancingPoolMemberGetGet.operation';

import {
	execute as loadbalancingPoolMemberListGetExecute,
} from './region/loadbalancing/loadbalancingPoolMemberListGet.operation';

import {
	execute as loadbalancingPoolMemberUpdatePutExecute,
} from './region/loadbalancing/loadbalancingPoolMemberUpdatePut.operation';

import {
	execute as loadbalancingPoolUpdatePutExecute,
} from './region/loadbalancing/loadbalancingPoolUpdatePut.operation';

import {
	execute as regionColdArchiveArchivePostExecute,
	description as regionColdArchiveArchivePostDescription,
} from './region/regionColdArchiveArchivePost.operation';

import {
	execute as regionColdArchiveCreatePostExecute,
	description as regionColdArchiveCreatePostDescription,
} from './region/regionColdArchiveCreatePost.operation';

import {
	execute as regionColdArchiveDeleteDeleteExecute,
	description as regionColdArchiveDeleteDeleteDescription,
} from './region/regionColdArchiveDeleteDelete.operation';

import {
	execute as regionColdArchiveDestroyPostExecute,
	description as regionColdArchiveDestroyPostDescription,
} from './region/regionColdArchiveDestroyPost.operation';

import {
	execute as regionColdArchiveGetGetExecute,
	description as regionColdArchiveGetGetDescription,
} from './region/regionColdArchiveGetGet.operation';

import {
	execute as regionColdArchiveListGetExecute,
	description as regionColdArchiveListGetDescription,
} from './region/regionColdArchiveListGet.operation';

import {
	execute as regionColdArchiveObjectDeleteDeleteExecute,
	description as regionColdArchiveObjectDeleteDeleteDescription,
} from './region/regionColdArchiveObjectDeleteDelete.operation';

import {
	execute as regionColdArchivePolicyCreatePostExecute,
	description as regionColdArchivePolicyCreatePostDescription,
} from './region/regionColdArchivePolicyCreatePost.operation';

import {
	execute as regionColdArchivePresignPostExecute,
	description as regionColdArchivePresignPostDescription,
} from './region/regionColdArchivePresignPost.operation';

import {
	execute as regionColdArchiveRestorePostExecute,
	description as regionColdArchiveRestorePostDescription,
} from './region/regionColdArchiveRestorePost.operation';

import {
	execute as regionGetGetExecute,
	description as regionGetGetDescription,
} from './region/regionGetGet.operation';

import {
	execute as regionListGetExecute,
	description as regionListGetDescription,
} from './region/regionListGet.operation';

import {
	execute as regionShareCreatePostExecute,
	description as regionShareCreatePostDescription,
} from './region/regionShareCreatePost.operation';

import {
	execute as regionShareDeleteDeleteExecute,
	description as regionShareDeleteDeleteDescription,
} from './region/regionShareDeleteDelete.operation';

import {
	execute as regionShareGetGetExecute,
	description as regionShareGetGetDescription,
} from './region/regionShareGetGet.operation';

import {
	execute as regionShareListGetExecute,
	description as regionShareListGetDescription,
} from './region/regionShareListGet.operation';

import {
	execute as regionShareSnapshotCreatePostExecute,
	description as regionShareSnapshotCreatePostDescription,
} from './region/regionShareSnapshotCreatePost.operation';

import {
	execute as regionShareSnapshotDeleteDeleteExecute,
	description as regionShareSnapshotDeleteDeleteDescription,
} from './region/regionShareSnapshotDeleteDelete.operation';

import {
	execute as regionShareSnapshotGetGetExecute,
	description as regionShareSnapshotGetGetDescription,
} from './region/regionShareSnapshotGetGet.operation';

import {
	execute as regionShareSnapshotListGetExecute,
	description as regionShareSnapshotListGetDescription,
} from './region/regionShareSnapshotListGet.operation';

import {
	execute as regionShareUpdatePutExecute,
	description as regionShareUpdatePutDescription,
} from './region/regionShareUpdatePut.operation';

import {
	execute as regionStorageBulkDeleteObjectsPostExecute,
	description as regionStorageBulkDeleteObjectsPostDescription,
} from './region/regionStorageBulkDeleteObjectsPost.operation';

import {
	execute as regionStorageCreatePostExecute,
	description as regionStorageCreatePostDescription,
} from './region/regionStorageCreatePost.operation';

import {
	execute as regionStorageDeleteDeleteExecute,
	description as regionStorageDeleteDeleteDescription,
} from './region/regionStorageDeleteDelete.operation';

import {
	execute as regionStorageGetGetExecute,
	description as regionStorageGetGetDescription,
} from './region/regionStorageGetGet.operation';

import {
	execute as regionStorageLifecycleDeleteDeleteExecute,
	description as regionStorageLifecycleDeleteDeleteDescription,
} from './region/regionStorageLifecycleDeleteDelete.operation';

import {
	execute as regionStorageLifecycleGetGetExecute,
	description as regionStorageLifecycleGetGetDescription,
} from './region/regionStorageLifecycleGetGet.operation';

import {
	execute as regionStorageLifecycleUpdatePutExecute,
	description as regionStorageLifecycleUpdatePutDescription,
} from './region/regionStorageLifecycleUpdatePut.operation';

import {
	execute as regionStorageListGetExecute,
	description as regionStorageListGetDescription,
} from './region/regionStorageListGet.operation';

import {
	execute as regionStorageObjectCopyPostExecute,
	description as regionStorageObjectCopyPostDescription,
} from './region/regionStorageObjectCopyPost.operation';

import {
	execute as regionStorageObjectCreatePostExecute,
	description as regionStorageObjectCreatePostDescription,
} from './region/regionStorageObjectCreatePost.operation';

import {
	execute as regionStorageObjectDeleteDeleteExecute,
	description as regionStorageObjectDeleteDeleteDescription,
} from './region/regionStorageObjectDeleteDelete.operation';

import {
	execute as regionStorageObjectGetGetExecute,
	description as regionStorageObjectGetGetDescription,
} from './region/regionStorageObjectGetGet.operation';

import {
	execute as regionStorageObjectListGetExecute,
	description as regionStorageObjectListGetDescription,
} from './region/regionStorageObjectListGet.operation';

import {
	execute as regionStorageObjectRestorePostExecute,
	description as regionStorageObjectRestorePostDescription,
} from './region/regionStorageObjectRestorePost.operation';

import {
	execute as regionStorageObjectUpdatePutExecute,
	description as regionStorageObjectUpdatePutDescription,
} from './region/regionStorageObjectUpdatePut.operation';

import {
	execute as regionStorageObjectVersionCopyPostExecute,
	description as regionStorageObjectVersionCopyPostDescription,
} from './region/regionStorageObjectVersionCopyPost.operation';

import {
	execute as regionStorageObjectVersionDeleteDeleteExecute,
	description as regionStorageObjectVersionDeleteDeleteDescription,
} from './region/regionStorageObjectVersionDeleteDelete.operation';

import {
	execute as regionStorageObjectVersionGetGetExecute,
	description as regionStorageObjectVersionGetGetDescription,
} from './region/regionStorageObjectVersionGetGet.operation';

import {
	execute as regionStorageObjectVersionListGetExecute,
	description as regionStorageObjectVersionListGetDescription,
} from './region/regionStorageObjectVersionListGet.operation';

import {
	execute as regionStorageObjectVersionRestorePostExecute,
	description as regionStorageObjectVersionRestorePostDescription,
} from './region/regionStorageObjectVersionRestorePost.operation';

import {
	execute as regionStorageObjectVersionUpdatePutExecute,
	description as regionStorageObjectVersionUpdatePutDescription,
} from './region/regionStorageObjectVersionUpdatePut.operation';

import {
	execute as regionStoragePolicyCreatePostExecute,
	description as regionStoragePolicyCreatePostDescription,
} from './region/regionStoragePolicyCreatePost.operation';

import {
	execute as regionStoragePresignPostExecute,
	description as regionStoragePresignPostDescription,
} from './region/regionStoragePresignPost.operation';

import {
	execute as regionStorageReplicationCreatePostExecute,
	description as regionStorageReplicationCreatePostDescription,
} from './region/regionStorageReplicationCreatePost.operation';

import {
	execute as regionStorageReplicationListGetExecute,
	description as regionStorageReplicationListGetDescription,
} from './region/regionStorageReplicationListGet.operation';

import {
	execute as regionStorageUpdatePutExecute,
	description as regionStorageUpdatePutDescription,
} from './region/regionStorageUpdatePut.operation';

import {
	execute as regionVolumeCreatePostExecute,
	description as regionVolumeCreatePostDescription,
} from './region/regionVolumeCreatePost.operation';

import {
	execute as regionVolumeDeleteDeleteExecute,
	description as regionVolumeDeleteDeleteDescription,
} from './region/regionVolumeDeleteDelete.operation';

import {
	execute as regionVolumeGetGetExecute,
	description as regionVolumeGetGetDescription,
} from './region/regionVolumeGetGet.operation';

import {
	execute as regionVolumeListGetExecute,
	description as regionVolumeListGetDescription,
} from './region/regionVolumeListGet.operation';

import {
	execute as regionVolumeUpdatePutExecute,
	description as regionVolumeUpdatePutDescription,
} from './region/regionVolumeUpdatePut.operation';

import {
	execute as regionWorkflowBackupCreatePostExecute,
	description as regionWorkflowBackupCreatePostDescription,
} from './region/regionWorkflowBackupCreatePost.operation';

import {
	execute as regionWorkflowBackupDeleteDeleteExecute,
	description as regionWorkflowBackupDeleteDeleteDescription,
} from './region/regionWorkflowBackupDeleteDelete.operation';

import {
	execute as regionWorkflowBackupGetGetExecute,
	description as regionWorkflowBackupGetGetDescription,
} from './region/regionWorkflowBackupGetGet.operation';

import {
	execute as regionWorkflowBackupUpdatePutExecute,
	description as regionWorkflowBackupUpdatePutDescription,
} from './region/regionWorkflowBackupUpdatePut.operation';

import {
	execute as regionAvailableCheckRegionAvailableGetExecute,
	description as regionAvailableCheckRegionAvailableGetDescription,
} from './regionAvailable/checkRegionAvailableGet.operation';

import {
	execute as retainPostExecute,
	description as retainPostDescription,
} from './retain/retainPost.operation';

import {
	execute as roleCreatePostExecute,
	description as roleCreatePostDescription,
} from './role/createPost.operation';

import {
	execute as roleListGetExecute,
	description as roleListGetDescription,
} from './role/listGet.operation';

import {
	execute as serviceInfosGetServiceInfosGetExecute,
	description as serviceInfosGetServiceInfosGetDescription,
} from './serviceInfos/getServiceInfosGet.operation';

import {
	execute as serviceInfosUpdatePutExecute,
	description as serviceInfosUpdatePutDescription,
} from './serviceInfos/updatePut.operation';

import {
	execute as snapshotsCreatePostExecute,
	description as snapshotsCreatePostDescription,
} from './snapshot/createPost.operation';

import {
	execute as snapshotsDeleteDeleteExecute,
	description as snapshotsDeleteDeleteDescription,
} from './snapshot/deleteDelete.operation';

import {
	execute as snapshotsListGetExecute,
	description as snapshotsListGetDescription,
} from './snapshot/listGet.operation';

import {
	execute as sshkeyCreatePostExecute,
	description as sshkeyCreatePostDescription,
} from './sshkey/createPost.operation';

import {
	execute as sshkeyDeleteDeleteExecute,
	description as sshkeyDeleteDeleteDescription,
} from './sshkey/deleteDelete.operation';

import {
	execute as sshkeyListGetExecute,
	description as sshkeyListGetDescription,
} from './sshkey/listGet.operation';

import {
	execute as storageAccessPostExecute,
	description as storageAccessPostDescription,
} from './storage/accessPost.operation';

import {
	execute as storageCorsDeleteDeleteExecute,
	description as storageCorsDeleteDeleteDescription,
} from './storage/corsDeleteDelete.operation';

import {
	execute as storageCorsPostExecute,
	description as storageCorsPostDescription,
} from './storage/corsPost.operation';

import {
	execute as storageCreateContainerPostExecute,
	description as storageCreateContainerPostDescription,
} from './storage/createContainerPost.operation';

import {
	execute as storageDeleteContainerDeleteExecute,
	description as storageDeleteContainerDeleteDescription,
} from './storage/deleteContainerDelete.operation';

import {
	execute as storageDeleteDeleteExecute,
	description as storageDeleteDeleteDescription,
} from './storage/deleteDelete.operation';

import {
	execute as storageGetContainerDetailGetExecute,
	description as storageGetContainerDetailGetDescription,
} from './storage/getContainerDetailGet.operation';

import {
	execute as storageGetDetailGetExecute,
	description as storageGetDetailGetDescription,
} from './storage/getDetailGet.operation';

import {
	execute as storageListContainersGetExecute,
	description as storageListContainersGetDescription,
} from './storage/listContainersGet.operation';

import {
	execute as storageListGetExecute,
	description as storageListGetDescription,
} from './storage/listGet.operation';

import {
	execute as storagePublicUrlPostExecute,
	description as storagePublicUrlPostDescription,
} from './storage/publicUrlPost.operation';

import {
	execute as storageQuotaGetExecute,
	description as storageQuotaGetDescription,
} from './storage/quotaGet.operation';

import {
	execute as storageStaticPostExecute,
	description as storageStaticPostDescription,
} from './storage/staticPost.operation';

import {
	execute as storageUpdateContainerPutExecute,
	description as storageUpdateContainerPutDescription,
} from './storage/updateContainerPut.operation';

import {
	execute as storageUpdatePutExecute,
	description as storageUpdatePutDescription,
} from './storage/updatePut.operation';

import {
	execute as storageUserPostExecute,
	description as storageUserPostDescription,
} from './storage/userPost.operation';

import {
	execute as terminatePostExecute,
	description as terminatePostDescription,
} from './terminate/terminatePost.operation';

import {
	execute as unleashPostExecute,
	description as unleashPostDescription,
} from './unleash/unleashPost.operation';

import {
	execute as usageGetCurrentGetExecute,
	description as usageGetCurrentGetDescription,
} from './usage/getCurrentGet.operation';

import {
	execute as usageGetForecastGetExecute,
	description as usageGetForecastGetDescription,
} from './usage/getForecastGet.operation';

import {
	execute as usageGetHistoryDetailGetExecute,
	description as usageGetHistoryDetailGetDescription,
} from './usage/getHistoryDetailGet.operation';

import {
	execute as usageListHistoryGetExecute,
	description as usageListHistoryGetDescription,
} from './usage/listHistoryGet.operation';

import {
	execute as userCreatePostExecute,
	description as userCreatePostDescription,
} from './user/createPost.operation';

import {
	execute as userCreateS3CredentialSecretPostExecute,
	description as userCreateS3CredentialSecretPostDescription,
} from './user/createS3CredentialSecretPost.operation';

import {
	execute as userCreateUserPolicyPostExecute,
	description as userCreateUserPolicyPostDescription,
} from './user/createUserPolicyPost.operation';

import {
	execute as userCreateUserRolePostExecute,
	description as userCreateUserRolePostDescription,
} from './user/createUserRolePost.operation';

import {
	execute as userCreateUserS3CredentialsPostExecute,
	description as userCreateUserS3CredentialsPostDescription,
} from './user/createUserS3CredentialsPost.operation';

import {
	execute as userCreateUserTokenPostExecute,
	description as userCreateUserTokenPostDescription,
} from './user/createUserTokenPost.operation';

import {
	execute as userDeleteDeleteExecute,
	description as userDeleteDeleteDescription,
} from './user/deleteDelete.operation';

import {
	execute as userDeleteUserRoleDeleteExecute,
	description as userDeleteUserRoleDeleteDescription,
} from './user/deleteUserRoleDelete.operation';

import {
	execute as userDeleteUserS3CredentialDeleteExecute,
	description as userDeleteUserS3CredentialDeleteDescription,
} from './user/deleteUserS3CredentialDelete.operation';

import {
	execute as userGetDetailGetExecute,
	description as userGetDetailGetDescription,
} from './user/getDetailGet.operation';

import {
	execute as userGetUserConfigurationGetExecute,
	description as userGetUserConfigurationGetDescription,
} from './user/getUserConfigurationGet.operation';

import {
	execute as userGetUserOpenrcGetExecute,
	description as userGetUserOpenrcGetDescription,
} from './user/getUserOpenrcGet.operation';

import {
	execute as userGetUserPolicyGetExecute,
	description as userGetUserPolicyGetDescription,
} from './user/getUserPolicyGet.operation';

import {
	execute as userGetUserRcloneGetExecute,
	description as userGetUserRcloneGetDescription,
} from './user/getUserRcloneGet.operation';

import {
	execute as userGetUserRoleDetailGetExecute,
	description as userGetUserRoleDetailGetDescription,
} from './user/getUserRoleDetailGet.operation';

import {
	execute as userGetUserRoleGetExecute,
	description as userGetUserRoleGetDescription,
} from './user/getUserRoleGet.operation';

import {
	execute as userGetUserS3CredentialDetailGetExecute,
	description as userGetUserS3CredentialDetailGetDescription,
} from './user/getUserS3CredentialDetailGet.operation';

import {
	execute as userGetUserS3CredentialsGetExecute,
	description as userGetUserS3CredentialsGetDescription,
} from './user/getUserS3CredentialsGet.operation';

import {
	execute as userListGetExecute,
	description as userListGetDescription,
} from './user/listGet.operation';

import {
	execute as userRegeneratePasswordPostExecute,
	description as userRegeneratePasswordPostDescription,
} from './user/regeneratePasswordPost.operation';

import {
	execute as userUpdateUserRolePutExecute,
	description as userUpdateUserRolePutDescription,
} from './user/updateUserRolePut.operation';

import {
	execute as volumeAttachPostExecute,
	description as volumeAttachPostDescription,
} from './volume/attachPost.operation';

import {
	execute as volumeDetachPostExecute,
	description as volumeDetachPostDescription,
} from './volume/detachPost.operation';

import {
	execute as volumeSnapshotCreatePostExecute,
	description as volumeSnapshotCreatePostDescription,
} from './volume/snapshotCreatePost.operation';

import {
	execute as volumeSnapshotDeleteDeleteExecute,
	description as volumeSnapshotDeleteDeleteDescription,
} from './volume/snapshotDeleteDelete.operation';

import {
	execute as volumeSnapshotGetGetExecute,
	description as volumeSnapshotGetGetDescription,
} from './volume/snapshotGetGet.operation';

import {
	execute as volumeSnapshotListGetExecute,
	description as volumeSnapshotListGetDescription,
} from './volume/snapshotListGet.operation';

import {
	execute as volumeUpsizePostExecute,
	description as volumeUpsizePostDescription,
} from './volume/upsizePost.operation';

import {
	execute as vrackCreatePostExecute,
	description as vrackCreatePostDescription,
} from './vrack/createPost.operation';

import {
	execute as vrackListGetExecute,
	description as vrackListGetDescription,
} from './vrack/listGet.operation';

const noProps = (): never[] => [];

const apiVersionSelector: INodeProperties = {
	displayName: 'API Version',
	name: 'apiVersion',
	type: 'options',
	options: [
		{ name: 'V1 API', value: 'v1' },
		{ name: 'V2 API', value: 'v2' },
	],
	default: 'v1',
	description: 'Select the API version to use',
};

const v1 = createOperationDispatcher(
	'publicCloudOperation',
	'publicCloud',
	[
	{
		name: 'Create Backup',
		value: 'createBackupPost',
		action: 'Create a new block storage backup',
		execute: backupCreatePostExecute,
		description: backupCreatePostDescription,
	},
	{
		name: 'Create Snapshot',
		value: 'createSnapshotPost',
		action: 'Create a new block storage snapshot',
		execute: snapshotCreatePostExecute,
		description: snapshotCreatePostDescription,
	},
	{
		name: 'Create Volume',
		value: 'createVolumePost',
		action: 'Create a new block storage volume',
		execute: volumeCreatePostExecute,
		description: volumeCreatePostDescription,
	},
	{
		name: 'Create Rancher Service',
		value: 'createRancherPost',
		action: 'Create a new Rancher service for a project',
		execute: rancherServiceCreatePostExecute,
		description: rancherServiceCreatePostDescription,
	},
	{
		name: 'Delete Backup',
		value: 'deleteBackupDelete',
		action: 'Delete a specific backup',
		execute: backupDeleteDeleteExecute,
		description: backupDeleteDeleteDescription,
	},
	{
		name: 'Delete Snapshot',
		value: 'deleteSnapshotDelete',
		action: 'Delete a specific snapshot',
		execute: snapshotDeleteDeleteExecute,
		description: snapshotDeleteDeleteDescription,
	},
	{
		name: 'Delete Rancher Service',
		value: 'deleteRancherDelete',
		action: 'Delete a specific Rancher service',
		execute: rancherServiceDeleteDeleteExecute,
		description: rancherServiceDeleteDeleteDescription,
	},
	{
		name: 'Delete Volume',
		value: 'deleteVolumeDelete',
		action: 'Delete a specific volume',
		execute: volumeDeleteDeleteExecute,
		description: volumeDeleteDeleteDescription,
	},
	{
		name: 'Get Backup Details',
		value: 'getBackupDetail',
		action: 'Get details of a specific backup',
		execute: backupGetExecute,
		description: backupGetDescription,
	},
	{
		name: 'Get Project Details',
		value: 'getProjectDetail',
		action: 'Get details of a specific Public Cloud project',
		execute: projectDetailGetExecute,
		description: projectDetailGetDescription,
	},
	{
		name: 'Get Rancher Service',
		value: 'getRancherService',
		action: 'Get details of a specific Rancher service',
		execute: rancherServiceGetExecute,
		description: rancherServiceGetDescription,
	},
	{
		name: 'Get Snapshot Details',
		value: 'getSnapshotDetail',
		action: 'Get details of a specific snapshot',
		execute: snapshotGetExecute,
		description: snapshotGetDescription,
	},
	{
		name: 'Get Volume Details',
		value: 'getVolumeDetail',
		action: 'Get details of a specific volume',
		execute: volumeGetExecute,
		description: volumeGetDescription,
	},
	{
		name: 'List Backups',
		value: 'backupListGet',
		action: 'List block storage backups in a project',
		execute: backupListGetExecute,
		description: backupListGetDescription,
	},
	{
		name: 'List Projects',
		value: 'projectListGet',
		action: 'List all Public Cloud projects',
		execute: projectListGetExecute,
		description: projectListGetDescription,
		show: false,
		default: true,
	},
	{
		name: 'List Plan Capabilities',
		value: 'rancherPlanCapabilityListGet',
		action: 'List available plan capabilities for a Rancher service',
		execute: rancherPlanCapabilityListGetExecute,
		description: rancherPlanCapabilityListGetDescription,
	},
	{
		name: 'List Rancher Services',
		value: 'rancherServiceListGet',
		action: 'List Rancher services for a project',
		execute: rancherServiceListGetExecute,
		description: rancherServiceListGetDescription,
	},
	{
		name: 'List Tasks',
		value: 'rancherTaskListGet',
		action: 'List all tasks for a Rancher service',
		execute: rancherTaskListGetExecute,
		description: rancherTaskListGetDescription,
	},
	{
		name: 'Get Task',
		value: 'rancherTaskDetailGet',
		action: 'Get details of a specific Rancher task',
		execute: rancherTaskDetailGetExecute,
		description: rancherTaskDetailGetDescription,
	},
	{
		name: 'List Events',
		value: 'rancherEventListGet',
		action: 'List all events for a Rancher service',
		execute: rancherEventListGetExecute,
		description: rancherEventListGetDescription,
	},
	{
		name: 'Get Admin Credentials',
		value: 'rancherAdminCredentialsGet',
		action: 'Get admin credentials for a Rancher service',
		execute: rancherAdminCredentialsGetExecute,
		description: rancherAdminCredentialsGetDescription,
	},
	{
		name: 'Reset Admin Credentials',
		value: 'rancherAdminCredentialsReset',
		action: 'Reset admin password for a Rancher service',
		execute: rancherAdminCredentialsPostExecute,
		description: rancherAdminCredentialsPostDescription,
	},
	{
		name: 'List Snapshots',
		value: 'snapshotListGet',
		action: 'List block storage snapshots in a project',
		execute: snapshotListGetExecute,
		description: snapshotListGetDescription,
	},
	{
		name: 'List Version Capabilities',
		value: 'rancherVersionCapabilityListGet',
		action: 'List available version capabilities for a Rancher service',
		execute: rancherVersionCapabilityListGetExecute,
		description: rancherVersionCapabilityListGetDescription,
	},
	{
		name: 'List Volumes',
		value: 'volumeListGet',
		action: 'List block storage volumes in a project',
		execute: volumeListGetExecute,
		description: volumeListGetDescription,
	},
	{
		name: 'Update Backup',
		value: 'updateBackupPut',
		action: 'Update an existing backup',
		execute: backupUpdatePutExecute,
		description: backupUpdatePutDescription,
	},
	{
		name: 'Update Snapshot',
		value: 'updateSnapshotPut',
		action: 'Update an existing snapshot',
		execute: snapshotUpdatePutExecute,
		description: snapshotUpdatePutDescription,
	},
	{
		name: 'Update Volume',
		value: 'updateVolumePut',
		action: 'Update an existing volume',
		execute: volumeUpdatePutExecute,
		description: volumeUpdatePutDescription,
	},
	{
		name: 'Update Rancher Service',
		value: 'updateRancherPut',
		action: 'Update a specific Rancher service (plan change)',
		execute: rancherServiceUpdatePutExecute,
		description: rancherServiceUpdatePutDescription,
	},
	{
		name: 'redisClusterListGet',
		value: 'redisClusterListGet',
		action: 'List Redis clusters in a project',
		execute: redisClusterListGetExecute,
		description: redisClusterListGetDescription,
	},
	{
		name: 'redisClusterGetGet',
		value: 'redisClusterGetGet',
		action: 'Get Redis cluster',
		execute: redisClusterGetGetExecute,
		description: redisClusterGetGetDescription,
	},
	{
		name: 'redisClusterCreatePost',
		value: 'redisClusterCreatePost',
		action: 'Create Redis cluster',
		execute: redisClusterCreatePostExecute,
		description: redisClusterCreatePostDescription,
	},
	{
		name: 'redisClusterUpdatePut',
		value: 'redisClusterUpdatePut',
		action: 'Update Redis cluster',
		execute: redisClusterUpdatePutExecute,
		description: redisClusterUpdatePutDescription,
	},
	{
		name: 'redisClusterDeleteDelete',
		value: 'redisClusterDeleteDelete',
		action: 'Delete Redis cluster',
		execute: redisClusterDeleteDeleteExecute,
		description: redisClusterDeleteDeleteDescription,
	},
	{
		name: 'redisBackupListGet',
		value: 'redisBackupListGet',
		action: 'List Redis backups',
		execute: redisBackupListGetExecute,
		description: redisBackupListGetDescription,
	},
	{
		name: 'redisBackupGetGet',
		value: 'redisBackupGetGet',
		action: 'Get Redis backup',
		execute: redisBackupGetGetExecute,
		description: redisBackupGetGetDescription,
	},
	{
		name: 'redisAdvancedConfigurationGet',
		value: 'redisAdvancedConfigurationGet',
		action: 'Get Redis advanced configuration',
		execute: redisAdvancedConfigurationGetExecute,
		description: redisAdvancedConfigurationGetDescription,
	},
	{
		name: 'redisAdvancedConfigurationUpdatePut',
		value: 'redisAdvancedConfigurationUpdatePut',
		action: 'Update Redis advanced configuration',
		execute: redisAdvancedConfigurationUpdatePutExecute,
		description: redisAdvancedConfigurationUpdatePutDescription,
	},
	{
		name: 'redisCapabilitiesAdvancedConfigurationGet',
		value: 'redisCapabilitiesAdvancedConfigurationGet',
		action: 'Get Redis advanced configuration capabilities',
		execute: redisCapabilitiesAdvancedConfigurationGetExecute,
		description: redisCapabilitiesAdvancedConfigurationGetDescription,
	},
	{
		name: 'redisCapabilitiesCategoriesGet',
		value: 'redisCapabilitiesCategoriesGet',
		action: 'Get Redis categories capabilities',
		execute: redisCapabilitiesCategoriesGetExecute,
		description: redisCapabilitiesCategoriesGetDescription,
	},
	{
		name: 'redisCapabilitiesCommandsGet',
		value: 'redisCapabilitiesCommandsGet',
		action: 'Get Redis commands capabilities',
		execute: redisCapabilitiesCommandsGetExecute,
		description: redisCapabilitiesCommandsGetDescription,
	},
	{
		name: 'redisCapabilitiesIntegrationGet',
		value: 'redisCapabilitiesIntegrationGet',
		action: 'Get Redis integration capabilities',
		execute: redisCapabilitiesIntegrationGetExecute,
		description: redisCapabilitiesIntegrationGetDescription,
	},
	{
		name: 'redisIntegrationListGet',
		value: 'redisIntegrationListGet',
		action: 'List Redis integrations',
		execute: redisIntegrationListGetExecute,
		description: redisIntegrationListGetDescription,
	},
	{
		name: 'redisIntegrationCreatePost',
		value: 'redisIntegrationCreatePost',
		action: 'Create Redis integration',
		execute: redisIntegrationCreatePostExecute,
		description: redisIntegrationCreatePostDescription,
	},
	{
		name: 'redisIntegrationGetGet',
		value: 'redisIntegrationGetGet',
		action: 'Get Redis integration',
		execute: redisIntegrationGetGetExecute,
		description: redisIntegrationGetGetDescription,
	},
	{
		name: 'redisIntegrationDeleteDelete',
		value: 'redisIntegrationDeleteDelete',
		action: 'Delete Redis integration',
		execute: redisIntegrationDeleteDeleteExecute,
		description: redisIntegrationDeleteDeleteDescription,
	},
	{
		name: 'redisIpRestrictionListGet',
		value: 'redisIpRestrictionListGet',
		action: 'List Redis IP restrictions',
		execute: redisIpRestrictionListGetExecute,
		description: redisIpRestrictionListGetDescription,
	},
	{
		name: 'redisIpRestrictionCreatePost',
		value: 'redisIpRestrictionCreatePost',
		action: 'Create Redis IP restriction',
		execute: redisIpRestrictionCreatePostExecute,
		description: redisIpRestrictionCreatePostDescription,
	},
	{
		name: 'redisIpRestrictionGetGet',
		value: 'redisIpRestrictionGetGet',
		action: 'Get Redis IP restriction',
		execute: redisIpRestrictionGetGetExecute,
		description: redisIpRestrictionGetGetDescription,
	},
	{
		name: 'redisIpRestrictionUpdatePut',
		value: 'redisIpRestrictionUpdatePut',
		action: 'Update Redis IP restriction',
		execute: redisIpRestrictionUpdatePutExecute,
		description: redisIpRestrictionUpdatePutDescription,
	},
	{
		name: 'redisIpRestrictionDeleteDelete',
		value: 'redisIpRestrictionDeleteDelete',
		action: 'Delete Redis IP restriction',
		execute: redisIpRestrictionDeleteDeleteExecute,
		description: redisIpRestrictionDeleteDeleteDescription,
	},
	{
		name: 'redisLogKindListGet',
		value: 'redisLogKindListGet',
		action: 'List Redis log kinds',
		execute: redisLogKindListGetExecute,
		description: redisLogKindListGetDescription,
	},
	{
		name: 'redisLogKindGet',
		value: 'redisLogKindGet',
		action: 'Get Redis log kind',
		execute: redisLogKindGetExecute,
		description: redisLogKindGetDescription,
	},
	{
		name: 'redisLogSubscriptionListGet',
		value: 'redisLogSubscriptionListGet',
		action: 'List Redis log subscriptions',
		execute: redisLogSubscriptionListGetExecute,
		description: redisLogSubscriptionListGetDescription,
	},
	{
		name: 'redisLogSubscriptionCreatePost',
		value: 'redisLogSubscriptionCreatePost',
		action: 'Create Redis log subscription',
		execute: redisLogSubscriptionCreatePostExecute,
		description: redisLogSubscriptionCreatePostDescription,
	},
	{
		name: 'redisLogSubscriptionGetGet',
		value: 'redisLogSubscriptionGetGet',
		action: 'Get Redis log subscription',
		execute: redisLogSubscriptionGetGetExecute,
		description: redisLogSubscriptionGetGetDescription,
	},
	{
		name: 'redisLogSubscriptionDeleteDelete',
		value: 'redisLogSubscriptionDeleteDelete',
		action: 'Delete Redis log subscription',
		execute: redisLogSubscriptionDeleteDeleteExecute,
		description: redisLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'redisLogUrlCreatePost',
		value: 'redisLogUrlCreatePost',
		action: 'Generate Redis log URL',
		execute: redisLogUrlCreatePostExecute,
		description: redisLogUrlCreatePostDescription,
	},
	{
		name: 'redisLogsGet',
		value: 'redisLogsGet',
		action: 'Get Redis logs',
		execute: redisLogsGetExecute,
		description: redisLogsGetDescription,
	},
	{
		name: 'redisMaintenanceListGet',
		value: 'redisMaintenanceListGet',
		action: 'List Redis maintenances',
		execute: redisMaintenanceListGetExecute,
		description: redisMaintenanceListGetDescription,
	},
	{
		name: 'redisMaintenanceGet',
		value: 'redisMaintenanceGet',
		action: 'Get Redis maintenance',
		execute: redisMaintenanceGetExecute,
		description: redisMaintenanceGetDescription,
	},
	{
		name: 'redisMaintenanceApplyPost',
		value: 'redisMaintenanceApplyPost',
		action: 'Apply Redis maintenance',
		execute: redisMaintenanceApplyPostExecute,
		description: redisMaintenanceApplyPostDescription,
	},
	{
		name: 'redisMetricListGet',
		value: 'redisMetricListGet',
		action: 'List Redis metrics',
		execute: redisMetricListGetExecute,
		description: redisMetricListGetDescription,
	},
	{
		name: 'redisMetricGet',
		value: 'redisMetricGet',
		action: 'Get Redis metric',
		execute: redisMetricGetExecute,
		description: redisMetricGetDescription,
	},
	{
		name: 'redisNodeListGet',
		value: 'redisNodeListGet',
		action: 'List Redis nodes',
		execute: redisNodeListGetExecute,
		description: redisNodeListGetDescription,
	},
	{
		name: 'redisNodeGetGet',
		value: 'redisNodeGetGet',
		action: 'Get Redis node',
		execute: redisNodeGetGetExecute,
		description: redisNodeGetGetDescription,
	},
	{
		name: 'redisPrometheusGet',
		value: 'redisPrometheusGet',
		action: 'Get Redis prometheus endpoint',
		execute: redisPrometheusGetExecute,
		description: redisPrometheusGetDescription,
	},
	{
		name: 'redisPrometheusCredentialsResetPost',
		value: 'redisPrometheusCredentialsResetPost',
		action: 'Reset Redis prometheus credentials',
		execute: redisPrometheusCredentialsResetPostExecute,
		description: redisPrometheusCredentialsResetPostDescription,
	},
	{
		name: 'redisUserListGet',
		value: 'redisUserListGet',
		action: 'List Redis users',
		execute: redisUserListGetExecute,
		description: redisUserListGetDescription,
	},
	{
		name: 'redisUserCreatePost',
		value: 'redisUserCreatePost',
		action: 'Create Redis user',
		execute: redisUserCreatePostExecute,
		description: redisUserCreatePostDescription,
	},
	{
		name: 'redisUserGetGet',
		value: 'redisUserGetGet',
		action: 'Get Redis user',
		execute: redisUserGetGetExecute,
		description: redisUserGetGetDescription,
	},
	{
		name: 'redisUserUpdatePut',
		value: 'redisUserUpdatePut',
		action: 'Update Redis user',
		execute: redisUserUpdatePutExecute,
		description: redisUserUpdatePutDescription,
	},
	{
		name: 'redisUserDeleteDelete',
		value: 'redisUserDeleteDelete',
		action: 'Delete Redis user',
		execute: redisUserDeleteDeleteExecute,
		description: redisUserDeleteDeleteDescription,
	},
	{
		name: 'redisUserCredentialsResetPost',
		value: 'redisUserCredentialsResetPost',
		action: 'Reset Redis user credentials',
		execute: redisUserCredentialsResetPostExecute,
		description: redisUserCredentialsResetPostDescription,
	},
	{
		name: 'cassandraClusterListGet',
		value: 'cassandraClusterListGet',
		action: 'List Cassandra clusters in a project',
		execute: cassandraClusterListGetExecute,
		description: cassandraClusterListGetDescription,
	},
	{
		name: 'cassandraClusterGetGet',
		value: 'cassandraClusterGetGet',
		action: 'Get Cassandra cluster',
		execute: cassandraClusterGetGetExecute,
		description: cassandraClusterGetGetDescription,
	},
	{
		name: 'cassandraClusterCreatePost',
		value: 'cassandraClusterCreatePost',
		action: 'Create Cassandra cluster',
		execute: cassandraClusterCreatePostExecute,
		description: cassandraClusterCreatePostDescription,
	},
	{
		name: 'cassandraClusterUpdatePut',
		value: 'cassandraClusterUpdatePut',
		action: 'Update Cassandra cluster',
		execute: cassandraClusterUpdatePutExecute,
		description: cassandraClusterUpdatePutDescription,
	},
	{
		name: 'cassandraClusterDeleteDelete',
		value: 'cassandraClusterDeleteDelete',
		action: 'Delete Cassandra cluster',
		execute: cassandraClusterDeleteDeleteExecute,
		description: cassandraClusterDeleteDeleteDescription,
	},
	{
		name: 'cassandraBackupListGet',
		value: 'cassandraBackupListGet',
		action: 'List Cassandra backups',
		execute: cassandraBackupListGetExecute,
		description: cassandraBackupListGetDescription,
	},
	{
		name: 'cassandraBackupCreatePost',
		value: 'cassandraBackupCreatePost',
		action: 'Create Cassandra backup',
		execute: cassandraBackupCreatePostExecute,
		description: cassandraBackupCreatePostDescription,
	},
	{
		name: 'cassandraBackupGetGet',
		value: 'cassandraBackupGetGet',
		action: 'Get Cassandra backup',
		execute: cassandraBackupGetGetExecute,
		description: cassandraBackupGetGetDescription,
	},
	{
		name: 'cassandraBackupDeleteDelete',
		value: 'cassandraBackupDeleteDelete',
		action: 'Delete Cassandra backup',
		execute: cassandraBackupDeleteDeleteExecute,
		description: cassandraBackupDeleteDeleteDescription,
	},
	{
		name: 'cassandraUserListGet',
		value: 'cassandraUserListGet',
		action: 'List Cassandra users',
		execute: cassandraUserListGetExecute,
		description: cassandraUserListGetDescription,
	},
	{
		name: 'cassandraUserCreatePost',
		value: 'cassandraUserCreatePost',
		action: 'Create Cassandra user',
		execute: cassandraUserCreatePostExecute,
		description: cassandraUserCreatePostDescription,
	},
	{
		name: 'cassandraUserGetGet',
		value: 'cassandraUserGetGet',
		action: 'Get Cassandra user',
		execute: cassandraUserGetGetExecute,
		description: cassandraUserGetGetDescription,
	},
	{
		name: 'cassandraUserUpdatePut',
		value: 'cassandraUserUpdatePut',
		action: 'Update Cassandra user',
		execute: cassandraUserUpdatePutExecute,
		description: cassandraUserUpdatePutDescription,
	},
	{
		name: 'cassandraUserDeleteDelete',
		value: 'cassandraUserDeleteDelete',
		action: 'Delete Cassandra user',
		execute: cassandraUserDeleteDeleteExecute,
		description: cassandraUserDeleteDeleteDescription,
	},
	{
		name: 'cassandraNodeListGet',
		value: 'cassandraNodeListGet',
		action: 'List Cassandra nodes',
		execute: cassandraNodeListGetExecute,
		description: cassandraNodeListGetDescription,
	},
	{
		name: 'cassandraNodeCreatePost',
		value: 'cassandraNodeCreatePost',
		action: 'Create Cassandra node',
		execute: cassandraNodeCreatePostExecute,
		description: cassandraNodeCreatePostDescription,
	},
	{
		name: 'cassandraNodeGetGet',
		value: 'cassandraNodeGetGet',
		action: 'Get Cassandra node',
		execute: cassandraNodeGetGetExecute,
		description: cassandraNodeGetGetDescription,
	},
	{
		name: 'cassandraNodeUpdatePut',
		value: 'cassandraNodeUpdatePut',
		action: 'Update Cassandra node',
		execute: cassandraNodeUpdatePutExecute,
		description: cassandraNodeUpdatePutDescription,
	},
	{
		name: 'cassandraNodeDeleteDelete',
		value: 'cassandraNodeDeleteDelete',
		action: 'Delete Cassandra node',
		execute: cassandraNodeDeleteDeleteExecute,
		description: cassandraNodeDeleteDeleteDescription,
	},
	{
		name: 'cassandraIpRestrictionListGet',
		value: 'cassandraIpRestrictionListGet',
		action: 'List Cassandra IP restrictions',
		execute: cassandraIpRestrictionListGetExecute,
		description: cassandraIpRestrictionListGetDescription,
	},
	{
		name: 'cassandraIpRestrictionCreatePost',
		value: 'cassandraIpRestrictionCreatePost',
		action: 'Create Cassandra IP restriction',
		execute: cassandraIpRestrictionCreatePostExecute,
		description: cassandraIpRestrictionCreatePostDescription,
	},
	{
		name: 'cassandraLogSubscriptionListGet',
		value: 'cassandraLogSubscriptionListGet',
		action: 'List Cassandra log subscriptions',
		execute: cassandraLogSubscriptionListGetExecute,
		description: cassandraLogSubscriptionListGetDescription,
	},
	{
		name: 'cassandraLogSubscriptionCreatePost',
		value: 'cassandraLogSubscriptionCreatePost',
		action: 'Create Cassandra log subscription',
		execute: cassandraLogSubscriptionCreatePostExecute,
		description: cassandraLogSubscriptionCreatePostDescription,
	},
	{
		name: 'cassandraLogSubscriptionGetGet',
		value: 'cassandraLogSubscriptionGetGet',
		action: 'Get Cassandra log subscription',
		execute: cassandraLogSubscriptionGetGetExecute,
		description: cassandraLogSubscriptionGetGetDescription,
	},
	{
		name: 'cassandraMaintenanceGet',
		value: 'cassandraMaintenanceGet',
		action: 'Get Cassandra maintenance',
		execute: cassandraMaintenanceGetExecute,
		description: cassandraMaintenanceGetDescription,
	},
	{
		name: 'cassandraMaintenanceUpdatePut',
		value: 'cassandraMaintenanceUpdatePut',
		action: 'Update Cassandra maintenance',
		execute: cassandraMaintenanceUpdatePutExecute,
		description: cassandraMaintenanceUpdatePutDescription,
	},
	{
		name: 'cassandraMetricGet',
		value: 'cassandraMetricGet',
		action: 'Get Cassandra metric',
		execute: cassandraMetricGetExecute,
		description: cassandraMetricGetDescription,
	},
	{
		name: 'cassandraPrometheusGet',
		value: 'cassandraPrometheusGet',
		action: 'Get Cassandra prometheus',
		execute: cassandraPrometheusGetExecute,
		description: cassandraPrometheusGetDescription,
	},
	{
		name: 'cassandraCertificateListGet',
		value: 'cassandraCertificateListGet',
		action: 'List Cassandra certificates',
		execute: cassandraCertificateListGetExecute,
		description: cassandraCertificateListGetDescription,
	},
	{
		name: 'cassandraCertificateCreatePost',
		value: 'cassandraCertificateCreatePost',
		action: 'Create Cassandra certificate',
		execute: cassandraCertificateCreatePostExecute,
		description: cassandraCertificateCreatePostDescription,
	},
	{
		name: 'cassandraIntegrationListGet',
		value: 'cassandraIntegrationListGet',
		action: 'List Cassandra integrations',
		execute: cassandraIntegrationListGetExecute,
		description: cassandraIntegrationListGetDescription,
	},
	{
		name: 'cassandraIntegrationCreatePost',
		value: 'cassandraIntegrationCreatePost',
		action: 'Create Cassandra integration',
		execute: cassandraIntegrationCreatePostExecute,
		description: cassandraIntegrationCreatePostDescription,
	},
	{
		name: 'cassandraAdvancedConfigurationGet',
		value: 'cassandraAdvancedConfigurationGet',
		action: 'Get Cassandra advanced configuration',
		execute: cassandraAdvancedConfigurationGetExecute,
		description: cassandraAdvancedConfigurationGetDescription,
	},
	{
		name: 'cassandraAdvancedConfigurationUpdatePut',
		value: 'cassandraAdvancedConfigurationUpdatePut',
		action: 'Update Cassandra advanced configuration',
		execute: cassandraAdvancedConfigurationUpdatePutExecute,
		description: cassandraAdvancedConfigurationUpdatePutDescription,
	},
	{
		name: 'cassandraCapabilitiesAdvancedConfigurationGet',
		value: 'cassandraCapabilitiesAdvancedConfigurationGet',
		action: 'Get Cassandra capabilities advanced configuration',
		execute: cassandraCapabilitiesAdvancedConfigurationGetExecute,
		description: cassandraCapabilitiesAdvancedConfigurationGetDescription,
	},
	{
		name: 'cassandraCapabilitiesIntegrationGet',
		value: 'cassandraCapabilitiesIntegrationGet',
		action: 'Get Cassandra capabilities integration',
		execute: cassandraCapabilitiesIntegrationGetExecute,
		description: cassandraCapabilitiesIntegrationGetDescription,
	},
	{
		name: 'cassandraIntegrationGetGet',
		value: 'cassandraIntegrationGetGet',
		action: 'Get Cassandra integration',
		execute: cassandraIntegrationGetGetExecute,
		description: cassandraIntegrationGetGetDescription,
	},
	{
		name: 'cassandraIntegrationDeleteDelete',
		value: 'cassandraIntegrationDeleteDelete',
		action: 'Delete Cassandra integration',
		execute: cassandraIntegrationDeleteDeleteExecute,
		description: cassandraIntegrationDeleteDeleteDescription,
	},
	{
		name: 'cassandraIpRestrictionGetGet',
		value: 'cassandraIpRestrictionGetGet',
		action: 'Get Cassandra IP restriction',
		execute: cassandraIpRestrictionGetGetExecute,
		description: cassandraIpRestrictionGetGetDescription,
	},
	{
		name: 'cassandraIpRestrictionDeleteDelete',
		value: 'cassandraIpRestrictionDeleteDelete',
		action: 'Delete Cassandra IP restriction',
		execute: cassandraIpRestrictionDeleteDeleteExecute,
		description: cassandraIpRestrictionDeleteDeleteDescription,
	},
	{
		name: 'cassandraIpRestrictionUpdatePut',
		value: 'cassandraIpRestrictionUpdatePut',
		action: 'Update Cassandra IP restriction',
		execute: cassandraIpRestrictionUpdatePutExecute,
		description: cassandraIpRestrictionUpdatePutDescription,
	},
	{
		name: 'cassandraLogKindListGet',
		value: 'cassandraLogKindListGet',
		action: 'List Cassandra log kinds',
		execute: cassandraLogKindListGetExecute,
		description: cassandraLogKindListGetDescription,
	},
	{
		name: 'cassandraLogKindGetGet',
		value: 'cassandraLogKindGetGet',
		action: 'Get Cassandra log kind',
		execute: cassandraLogKindGetGetExecute,
		description: cassandraLogKindGetGetDescription,
	},
	{
		name: 'cassandraLogSubscriptionDeleteDelete',
		value: 'cassandraLogSubscriptionDeleteDelete',
		action: 'Delete Cassandra log subscription',
		execute: cassandraLogSubscriptionDeleteDeleteExecute,
		description: cassandraLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'cassandraLogUrlCreatePost',
		value: 'cassandraLogUrlCreatePost',
		action: 'Create Cassandra log URL',
		execute: cassandraLogUrlCreatePostExecute,
		description: cassandraLogUrlCreatePostDescription,
	},
	{
		name: 'cassandraLogsGet',
		value: 'cassandraLogsGet',
		action: 'Get Cassandra logs',
		execute: cassandraLogsGetExecute,
		description: cassandraLogsGetDescription,
	},
	{
		name: 'cassandraMaintenanceApplyPost',
		value: 'cassandraMaintenanceApplyPost',
		action: 'Apply Cassandra maintenance',
		execute: cassandraMaintenanceApplyPostExecute,
		description: cassandraMaintenanceApplyPostDescription,
	},
	{
		name: 'cassandraMaintenanceGetGet',
		value: 'cassandraMaintenanceGetGet',
		action: 'Get Cassandra maintenance details',
		execute: cassandraMaintenanceGetGetExecute,
		description: cassandraMaintenanceGetGetDescription,
	},
	{
		name: 'cassandraMetricGetGet',
		value: 'cassandraMetricGetGet',
		action: 'Get Cassandra metric values',
		execute: cassandraMetricGetGetExecute,
		description: cassandraMetricGetGetDescription,
	},
	{
		name: 'cassandraPrometheusCredentialsResetPost',
		value: 'cassandraPrometheusCredentialsResetPost',
		action: 'Reset Cassandra Prometheus credentials',
		execute: cassandraPrometheusCredentialsResetPostExecute,
		description: cassandraPrometheusCredentialsResetPostDescription,
	},
	{
		name: 'cassandraUserCredentialsResetPost',
		value: 'cassandraUserCredentialsResetPost',
		action: 'Reset Cassandra user credentials',
		execute: cassandraUserCredentialsResetPostExecute,
		description: cassandraUserCredentialsResetPostDescription,
	},
	{
		name: 'clickhouseClusterListGet',
		value: 'clickhouseClusterListGet',
		action: 'List ClickHouse clusters in a project',
		execute: clickhouseClusterListGetExecute,
		description: clickhouseClusterListGetDescription,
	},
	{
		name: 'clickhouseClusterGetGet',
		value: 'clickhouseClusterGetGet',
		action: 'Get ClickHouse cluster',
		execute: clickhouseClusterGetGetExecute,
		description: clickhouseClusterGetGetDescription,
	},
	{
		name: 'clickhouseClusterCreatePost',
		value: 'clickhouseClusterCreatePost',
		action: 'Create ClickHouse cluster',
		execute: clickhouseClusterCreatePostExecute,
		description: clickhouseClusterCreatePostDescription,
	},
	{
		name: 'clickhouseClusterUpdatePut',
		value: 'clickhouseClusterUpdatePut',
		action: 'Update ClickHouse cluster',
		execute: clickhouseClusterUpdatePutExecute,
		description: clickhouseClusterUpdatePutDescription,
	},
	{
		name: 'clickhouseClusterDeleteDelete',
		value: 'clickhouseClusterDeleteDelete',
		action: 'Delete ClickHouse cluster',
		execute: clickhouseClusterDeleteDeleteExecute,
		description: clickhouseClusterDeleteDeleteDescription,
	},
	{
		name: 'clickhouseBackupListGet',
		value: 'clickhouseBackupListGet',
		action: 'List ClickHouse backups',
		execute: clickhouseBackupListGetExecute,
		description: clickhouseBackupListGetDescription,
	},
	{
		name: 'clickhouseBackupCreatePost',
		value: 'clickhouseBackupCreatePost',
		action: 'Create ClickHouse backup',
		execute: clickhouseBackupCreatePostExecute,
		description: clickhouseBackupCreatePostDescription,
	},
	{
		name: 'clickhouseBackupGetGet',
		value: 'clickhouseBackupGetGet',
		action: 'Get ClickHouse backup',
		execute: clickhouseBackupGetGetExecute,
		description: clickhouseBackupGetGetDescription,
	},
	{
		name: 'clickhouseBackupDeleteDelete',
		value: 'clickhouseBackupDeleteDelete',
		action: 'Delete ClickHouse backup',
		execute: clickhouseBackupDeleteDeleteExecute,
		description: clickhouseBackupDeleteDeleteDescription,
	},
	{
		name: 'clickhouseUserListGet',
		value: 'clickhouseUserListGet',
		action: 'List ClickHouse users',
		execute: clickhouseUserListGetExecute,
		description: clickhouseUserListGetDescription,
	},
	{
		name: 'clickhouseUserCreatePost',
		value: 'clickhouseUserCreatePost',
		action: 'Create ClickHouse user',
		execute: clickhouseUserCreatePostExecute,
		description: clickhouseUserCreatePostDescription,
	},
	{
		name: 'clickhouseUserGetGet',
		value: 'clickhouseUserGetGet',
		action: 'Get ClickHouse user',
		execute: clickhouseUserGetGetExecute,
		description: clickhouseUserGetGetDescription,
	},
	{
		name: 'clickhouseUserUpdatePut',
		value: 'clickhouseUserUpdatePut',
		action: 'Update ClickHouse user',
		execute: clickhouseUserUpdatePutExecute,
		description: clickhouseUserUpdatePutDescription,
	},
	{
		name: 'clickhouseUserDeleteDelete',
		value: 'clickhouseUserDeleteDelete',
		action: 'Delete ClickHouse user',
		execute: clickhouseUserDeleteDeleteExecute,
		description: clickhouseUserDeleteDeleteDescription,
	},
	{
		name: 'clickhouseNodeListGet',
		value: 'clickhouseNodeListGet',
		action: 'List ClickHouse nodes',
		execute: clickhouseNodeListGetExecute,
		description: clickhouseNodeListGetDescription,
	},
	{
		name: 'clickhouseNodeCreatePost',
		value: 'clickhouseNodeCreatePost',
		action: 'Create ClickHouse node',
		execute: clickhouseNodeCreatePostExecute,
		description: clickhouseNodeCreatePostDescription,
	},
	{
		name: 'clickhouseNodeGetGet',
		value: 'clickhouseNodeGetGet',
		action: 'Get ClickHouse node',
		execute: clickhouseNodeGetGetExecute,
		description: clickhouseNodeGetGetDescription,
	},
	{
		name: 'clickhouseNodeUpdatePut',
		value: 'clickhouseNodeUpdatePut',
		action: 'Update ClickHouse node',
		execute: clickhouseNodeUpdatePutExecute,
		description: clickhouseNodeUpdatePutDescription,
	},
	{
		name: 'clickhouseNodeDeleteDelete',
		value: 'clickhouseNodeDeleteDelete',
		action: 'Delete ClickHouse node',
		execute: clickhouseNodeDeleteDeleteExecute,
		description: clickhouseNodeDeleteDeleteDescription,
	},
	{
		name: 'clickhouseIpRestrictionListGet',
		value: 'clickhouseIpRestrictionListGet',
		action: 'List ClickHouse IP restrictions',
		execute: clickhouseIpRestrictionListGetExecute,
		description: clickhouseIpRestrictionListGetDescription,
	},
	{
		name: 'clickhouseIpRestrictionCreatePost',
		value: 'clickhouseIpRestrictionCreatePost',
		action: 'Create ClickHouse IP restriction',
		execute: clickhouseIpRestrictionCreatePostExecute,
		description: clickhouseIpRestrictionCreatePostDescription,
	},
	{
		name: 'clickhouseLogSubscriptionListGet',
		value: 'clickhouseLogSubscriptionListGet',
		action: 'List ClickHouse log subscriptions',
		execute: clickhouseLogSubscriptionListGetExecute,
		description: clickhouseLogSubscriptionListGetDescription,
	},
	{
		name: 'clickhouseLogSubscriptionCreatePost',
		value: 'clickhouseLogSubscriptionCreatePost',
		action: 'Create ClickHouse log subscription',
		execute: clickhouseLogSubscriptionCreatePostExecute,
		description: clickhouseLogSubscriptionCreatePostDescription,
	},
	{
		name: 'clickhouseLogSubscriptionGetGet',
		value: 'clickhouseLogSubscriptionGetGet',
		action: 'Get ClickHouse log subscription',
		execute: clickhouseLogSubscriptionGetGetExecute,
		description: clickhouseLogSubscriptionGetGetDescription,
	},
	{
		name: 'clickhouseMaintenanceGet',
		value: 'clickhouseMaintenanceGet',
		action: 'Get ClickHouse maintenance',
		execute: clickhouseMaintenanceGetExecute,
		description: clickhouseMaintenanceGetDescription,
	},
	{
		name: 'clickhouseMaintenanceUpdatePut',
		value: 'clickhouseMaintenanceUpdatePut',
		action: 'Update ClickHouse maintenance',
		execute: clickhouseMaintenanceUpdatePutExecute,
		description: clickhouseMaintenanceUpdatePutDescription,
	},
	{
		name: 'clickhouseMetricGet',
		value: 'clickhouseMetricGet',
		action: 'Get ClickHouse metric',
		execute: clickhouseMetricGetExecute,
		description: clickhouseMetricGetDescription,
	},
	{
		name: 'clickhousePrometheusGet',
		value: 'clickhousePrometheusGet',
		action: 'Get ClickHouse prometheus',
		execute: clickhousePrometheusGetExecute,
		description: clickhousePrometheusGetDescription,
	},
	{
		name: 'clickhouseCertificateListGet',
		value: 'clickhouseCertificateListGet',
		action: 'List ClickHouse certificates',
		execute: clickhouseCertificateListGetExecute,
		description: clickhouseCertificateListGetDescription,
	},
	{
		name: 'clickhouseCertificateCreatePost',
		value: 'clickhouseCertificateCreatePost',
		action: 'Create ClickHouse certificate',
		execute: clickhouseCertificateCreatePostExecute,
		description: clickhouseCertificateCreatePostDescription,
	},
	{
		name: 'clickhouseIntegrationListGet',
		value: 'clickhouseIntegrationListGet',
		action: 'List ClickHouse integrations',
		execute: clickhouseIntegrationListGetExecute,
		description: clickhouseIntegrationListGetDescription,
	},
	{
		name: 'clickhouseIntegrationCreatePost',
		value: 'clickhouseIntegrationCreatePost',
		action: 'Create ClickHouse integration',
		execute: clickhouseIntegrationCreatePostExecute,
		description: clickhouseIntegrationCreatePostDescription,
	},
	{
		name: 'grafanaClusterListGet',
		value: 'grafanaClusterListGet',
		action: 'List Grafana clusters in a project',
		execute: grafanaClusterListGetExecute,
		description: grafanaClusterListGetDescription,
	},
	{
		name: 'grafanaClusterGetGet',
		value: 'grafanaClusterGetGet',
		action: 'Get Grafana cluster',
		execute: grafanaClusterGetGetExecute,
		description: grafanaClusterGetGetDescription,
	},
	{
		name: 'grafanaClusterCreatePost',
		value: 'grafanaClusterCreatePost',
		action: 'Create Grafana cluster',
		execute: grafanaClusterCreatePostExecute,
		description: grafanaClusterCreatePostDescription,
	},
	{
		name: 'grafanaClusterUpdatePut',
		value: 'grafanaClusterUpdatePut',
		action: 'Update Grafana cluster',
		execute: grafanaClusterUpdatePutExecute,
		description: grafanaClusterUpdatePutDescription,
	},
	{
		name: 'grafanaClusterDeleteDelete',
		value: 'grafanaClusterDeleteDelete',
		action: 'Delete Grafana cluster',
		execute: grafanaClusterDeleteDeleteExecute,
		description: grafanaClusterDeleteDeleteDescription,
	},
	{
		name: 'grafanaBackupListGet',
		value: 'grafanaBackupListGet',
		action: 'List Grafana backups',
		execute: grafanaBackupListGetExecute,
		description: grafanaBackupListGetDescription,
	},
	{
		name: 'grafanaBackupGetGet',
		value: 'grafanaBackupGetGet',
		action: 'Get Grafana backup',
		execute: grafanaBackupGetGetExecute,
		description: grafanaBackupGetGetDescription,
	},
	{
		name: 'grafanaUserListGet',
		value: 'grafanaUserListGet',
		action: 'List Grafana users',
		execute: grafanaUserListGetExecute,
		description: grafanaUserListGetDescription,
	},
	{
		name: 'grafanaUserGetGet',
		value: 'grafanaUserGetGet',
		action: 'Get Grafana user',
		execute: grafanaUserGetGetExecute,
		description: grafanaUserGetGetDescription,
	},
	{
		name: 'grafanaUserCredentialsResetPost',
		value: 'grafanaUserCredentialsResetPost',
		action: 'Reset Grafana user credentials',
		execute: grafanaUserCredentialsResetPostExecute,
		description: grafanaUserCredentialsResetPostDescription,
	},
	{
		name: 'grafanaNodeListGet',
		value: 'grafanaNodeListGet',
		action: 'List Grafana nodes',
		execute: grafanaNodeListGetExecute,
		description: grafanaNodeListGetDescription,
	},
	{
		name: 'grafanaNodeGetGet',
		value: 'grafanaNodeGetGet',
		action: 'Get Grafana node',
		execute: grafanaNodeGetGetExecute,
		description: grafanaNodeGetGetDescription,
	},
	{
		name: 'grafanaIpRestrictionListGet',
		value: 'grafanaIpRestrictionListGet',
		action: 'List Grafana IP restrictions',
		execute: grafanaIpRestrictionListGetExecute,
		description: grafanaIpRestrictionListGetDescription,
	},
	{
		name: 'grafanaIpRestrictionCreatePost',
		value: 'grafanaIpRestrictionCreatePost',
		action: 'Create Grafana IP restriction',
		execute: grafanaIpRestrictionCreatePostExecute,
		description: grafanaIpRestrictionCreatePostDescription,
	},
	{
		name: 'grafanaIpRestrictionGetGet',
		value: 'grafanaIpRestrictionGetGet',
		action: 'Get Grafana IP restriction',
		execute: grafanaIpRestrictionGetGetExecute,
		description: grafanaIpRestrictionGetGetDescription,
	},
	{
		name: 'grafanaIpRestrictionUpdatePut',
		value: 'grafanaIpRestrictionUpdatePut',
		action: 'Update Grafana IP restriction',
		execute: grafanaIpRestrictionUpdatePutExecute,
		description: grafanaIpRestrictionUpdatePutDescription,
	},
	{
		name: 'grafanaIpRestrictionDeleteDelete',
		value: 'grafanaIpRestrictionDeleteDelete',
		action: 'Delete Grafana IP restriction',
		execute: grafanaIpRestrictionDeleteDeleteExecute,
		description: grafanaIpRestrictionDeleteDeleteDescription,
	},
	{
		name: 'grafanaLogKindListGet',
		value: 'grafanaLogKindListGet',
		action: 'List Grafana log kinds',
		execute: grafanaLogKindListGetExecute,
		description: grafanaLogKindListGetDescription,
	},
	{
		name: 'grafanaLogKindGet',
		value: 'grafanaLogKindGet',
		action: 'Get Grafana log kind',
		execute: grafanaLogKindGetExecute,
		description: grafanaLogKindGetDescription,
	},
	{
		name: 'grafanaLogSubscriptionListGet',
		value: 'grafanaLogSubscriptionListGet',
		action: 'List Grafana log subscriptions',
		execute: grafanaLogSubscriptionListGetExecute,
		description: grafanaLogSubscriptionListGetDescription,
	},
	{
		name: 'grafanaLogSubscriptionCreatePost',
		value: 'grafanaLogSubscriptionCreatePost',
		action: 'Create Grafana log subscription',
		execute: grafanaLogSubscriptionCreatePostExecute,
		description: grafanaLogSubscriptionCreatePostDescription,
	},
	{
		name: 'grafanaLogSubscriptionGetGet',
		value: 'grafanaLogSubscriptionGetGet',
		action: 'Get Grafana log subscription',
		execute: grafanaLogSubscriptionGetGetExecute,
		description: grafanaLogSubscriptionGetGetDescription,
	},
	{
		name: 'grafanaLogSubscriptionDeleteDelete',
		value: 'grafanaLogSubscriptionDeleteDelete',
		action: 'Delete Grafana log subscription',
		execute: grafanaLogSubscriptionDeleteDeleteExecute,
		description: grafanaLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'grafanaLogUrlCreatePost',
		value: 'grafanaLogUrlCreatePost',
		action: 'Get Grafana log URL',
		execute: grafanaLogUrlCreatePostExecute,
		description: grafanaLogUrlCreatePostDescription,
	},
	{
		name: 'grafanaLogsGet',
		value: 'grafanaLogsGet',
		action: 'Get Grafana logs',
		execute: grafanaLogsGetExecute,
		description: grafanaLogsGetDescription,
	},
	{
		name: 'grafanaMaintenanceListGet',
		value: 'grafanaMaintenanceListGet',
		action: 'List Grafana maintenances',
		execute: grafanaMaintenanceListGetExecute,
		description: grafanaMaintenanceListGetDescription,
	},
	{
		name: 'grafanaMaintenanceGet',
		value: 'grafanaMaintenanceGet',
		action: 'Get Grafana maintenance',
		execute: grafanaMaintenanceGetExecute,
		description: grafanaMaintenanceGetDescription,
	},
	{
		name: 'grafanaMaintenanceApplyPost',
		value: 'grafanaMaintenanceApplyPost',
		action: 'Apply Grafana maintenance',
		execute: grafanaMaintenanceApplyPostExecute,
		description: grafanaMaintenanceApplyPostDescription,
	},
	{
		name: 'grafanaMetricListGet',
		value: 'grafanaMetricListGet',
		action: 'List Grafana metrics',
		execute: grafanaMetricListGetExecute,
		description: grafanaMetricListGetDescription,
	},
	{
		name: 'grafanaMetricGet',
		value: 'grafanaMetricGet',
		action: 'Get Grafana metric',
		execute: grafanaMetricGetExecute,
		description: grafanaMetricGetDescription,
	},
	{
		name: 'grafanaAdvancedConfigurationGet',
		value: 'grafanaAdvancedConfigurationGet',
		action: 'Get Grafana advanced configuration',
		execute: grafanaAdvancedConfigurationGetExecute,
		description: grafanaAdvancedConfigurationGetDescription,
	},
	{
		name: 'grafanaAdvancedConfigurationUpdatePut',
		value: 'grafanaAdvancedConfigurationUpdatePut',
		action: 'Update Grafana advanced configuration',
		execute: grafanaAdvancedConfigurationUpdatePutExecute,
		description: grafanaAdvancedConfigurationUpdatePutDescription,
	},
	{
		name: 'grafanaCapabilitiesAdvancedConfigurationGet',
		value: 'grafanaCapabilitiesAdvancedConfigurationGet',
		action: 'Get Grafana advanced configuration capabilities',
		execute: grafanaCapabilitiesAdvancedConfigurationGetExecute,
		description: grafanaCapabilitiesAdvancedConfigurationGetDescription,
	},
	{
		name: 'grafanaCapabilitiesBackupRegionsGet',
		value: 'grafanaCapabilitiesBackupRegionsGet',
		action: 'Get Grafana backup regions capabilities',
		execute: grafanaCapabilitiesBackupRegionsGetExecute,
		description: grafanaCapabilitiesBackupRegionsGetDescription,
	},
	{
		name: 'grafanaCapabilitiesIntegrationGet',
		value: 'grafanaCapabilitiesIntegrationGet',
		action: 'Get Grafana integration capabilities',
		execute: grafanaCapabilitiesIntegrationGetExecute,
		description: grafanaCapabilitiesIntegrationGetDescription,
	},
	{
		name: 'grafanaIntegrationListGet',
		value: 'grafanaIntegrationListGet',
		action: 'List Grafana integrations',
		execute: grafanaIntegrationListGetExecute,
		description: grafanaIntegrationListGetDescription,
	},
	{
		name: 'grafanaIntegrationCreatePost',
		value: 'grafanaIntegrationCreatePost',
		action: 'Create Grafana integration',
		execute: grafanaIntegrationCreatePostExecute,
		description: grafanaIntegrationCreatePostDescription,
	},
	{
		name: 'grafanaIntegrationGetGet',
		value: 'grafanaIntegrationGetGet',
		action: 'Get Grafana integration',
		execute: grafanaIntegrationGetGetExecute,
		description: grafanaIntegrationGetGetDescription,
	},
	{
		name: 'grafanaIntegrationDeleteDelete',
		value: 'grafanaIntegrationDeleteDelete',
		action: 'Delete Grafana integration',
		execute: grafanaIntegrationDeleteDeleteExecute,
		description: grafanaIntegrationDeleteDeleteDescription,
	},
	{
		name: 'kafkaClusterListGet',
		value: 'kafkaClusterListGet',
		action: 'List Kafka clusters in a project',
		execute: kafkaClusterListGetExecute,
		description: kafkaClusterListGetDescription,
	},
	{
		name: 'kafkaClusterGetGet',
		value: 'kafkaClusterGetGet',
		action: 'Get Kafka cluster',
		execute: kafkaClusterGetGetExecute,
		description: kafkaClusterGetGetDescription,
	},
	{
		name: 'kafkaClusterCreatePost',
		value: 'kafkaClusterCreatePost',
		action: 'Create Kafka cluster',
		execute: kafkaClusterCreatePostExecute,
		description: kafkaClusterCreatePostDescription,
	},
	{
		name: 'kafkaClusterUpdatePut',
		value: 'kafkaClusterUpdatePut',
		action: 'Update Kafka cluster',
		execute: kafkaClusterUpdatePutExecute,
		description: kafkaClusterUpdatePutDescription,
	},
	{
		name: 'kafkaClusterDeleteDelete',
		value: 'kafkaClusterDeleteDelete',
		action: 'Delete Kafka cluster',
		execute: kafkaClusterDeleteDeleteExecute,
		description: kafkaClusterDeleteDeleteDescription,
	},
	{
		name: 'kafkaAclListGet',
		value: 'kafkaAclListGet',
		action: 'List Kafka ACLs',
		execute: kafkaAclListGetExecute,
		description: kafkaAclListGetDescription,
	},
	{
		name: 'kafkaAclCreatePost',
		value: 'kafkaAclCreatePost',
		action: 'Create Kafka ACL',
		execute: kafkaAclCreatePostExecute,
		description: kafkaAclCreatePostDescription,
	},
	{
		name: 'kafkaAclGetGet',
		value: 'kafkaAclGetGet',
		action: 'Get Kafka ACL',
		execute: kafkaAclGetGetExecute,
		description: kafkaAclGetGetDescription,
	},
	{
		name: 'kafkaAclDeleteDelete',
		value: 'kafkaAclDeleteDelete',
		action: 'Delete Kafka ACL',
		execute: kafkaAclDeleteDeleteExecute,
		description: kafkaAclDeleteDeleteDescription,
	},
	{
		name: 'kafkaAdvancedConfigurationGet',
		value: 'kafkaAdvancedConfigurationGet',
		action: 'Get Kafka advanced configuration',
		execute: kafkaAdvancedConfigurationGetExecute,
		description: kafkaAdvancedConfigurationGetDescription,
	},
	{
		name: 'kafkaAdvancedConfigurationUpdatePut',
		value: 'kafkaAdvancedConfigurationUpdatePut',
		action: 'Update Kafka advanced configuration',
		execute: kafkaAdvancedConfigurationUpdatePutExecute,
		description: kafkaAdvancedConfigurationUpdatePutDescription,
	},
	{
		name: 'kafkaCapabilitiesAdvancedConfigurationGet',
		value: 'kafkaCapabilitiesAdvancedConfigurationGet',
		action: 'Get Kafka advanced configuration capabilities',
		execute: kafkaCapabilitiesAdvancedConfigurationGetExecute,
		description: kafkaCapabilitiesAdvancedConfigurationGetDescription,
	},
	{
		name: 'kafkaCapabilitiesBackupRegionsGet',
		value: 'kafkaCapabilitiesBackupRegionsGet',
		action: 'Get Kafka backup regions capabilities',
		execute: kafkaCapabilitiesBackupRegionsGetExecute,
		description: kafkaCapabilitiesBackupRegionsGetDescription,
	},
	{
		name: 'kafkaCapabilitiesIntegrationGet',
		value: 'kafkaCapabilitiesIntegrationGet',
		action: 'Get Kafka integration capabilities',
		execute: kafkaCapabilitiesIntegrationGetExecute,
		description: kafkaCapabilitiesIntegrationGetDescription,
	},
	{
		name: 'kafkaCertificateListGet',
		value: 'kafkaCertificateListGet',
		action: 'List Kafka certificates',
		execute: kafkaCertificateListGetExecute,
		description: kafkaCertificateListGetDescription,
	},
	{
		name: 'kafkaIntegrationListGet',
		value: 'kafkaIntegrationListGet',
		action: 'List Kafka integrations',
		execute: kafkaIntegrationListGetExecute,
		description: kafkaIntegrationListGetDescription,
	},
	{
		name: 'kafkaIntegrationCreatePost',
		value: 'kafkaIntegrationCreatePost',
		action: 'Create Kafka integration',
		execute: kafkaIntegrationCreatePostExecute,
		description: kafkaIntegrationCreatePostDescription,
	},
	{
		name: 'kafkaIntegrationGetGet',
		value: 'kafkaIntegrationGetGet',
		action: 'Get Kafka integration',
		execute: kafkaIntegrationGetGetExecute,
		description: kafkaIntegrationGetGetDescription,
	},
	{
		name: 'kafkaIntegrationDeleteDelete',
		value: 'kafkaIntegrationDeleteDelete',
		action: 'Delete Kafka integration',
		execute: kafkaIntegrationDeleteDeleteExecute,
		description: kafkaIntegrationDeleteDeleteDescription,
	},
	{
		name: 'kafkaIpRestrictionListGet',
		value: 'kafkaIpRestrictionListGet',
		action: 'List Kafka IP restrictions',
		execute: kafkaIpRestrictionListGetExecute,
		description: kafkaIpRestrictionListGetDescription,
	},
	{
		name: 'kafkaIpRestrictionCreatePost',
		value: 'kafkaIpRestrictionCreatePost',
		action: 'Create Kafka IP restriction',
		execute: kafkaIpRestrictionCreatePostExecute,
		description: kafkaIpRestrictionCreatePostDescription,
	},
	{
		name: 'kafkaIpRestrictionGetGet',
		value: 'kafkaIpRestrictionGetGet',
		action: 'Get Kafka IP restriction',
		execute: kafkaIpRestrictionGetGetExecute,
		description: kafkaIpRestrictionGetGetDescription,
	},
	{
		name: 'kafkaIpRestrictionUpdatePut',
		value: 'kafkaIpRestrictionUpdatePut',
		action: 'Update Kafka IP restriction',
		execute: kafkaIpRestrictionUpdatePutExecute,
		description: kafkaIpRestrictionUpdatePutDescription,
	},
	{
		name: 'kafkaIpRestrictionDeleteDelete',
		value: 'kafkaIpRestrictionDeleteDelete',
		action: 'Delete Kafka IP restriction',
		execute: kafkaIpRestrictionDeleteDeleteExecute,
		description: kafkaIpRestrictionDeleteDeleteDescription,
	},
	{
		name: 'kafkaLogKindListGet',
		value: 'kafkaLogKindListGet',
		action: 'List Kafka log kinds',
		execute: kafkaLogKindListGetExecute,
		description: kafkaLogKindListGetDescription,
	},
	{
		name: 'kafkaLogKindGet',
		value: 'kafkaLogKindGet',
		action: 'Get Kafka log kind',
		execute: kafkaLogKindGetExecute,
		description: kafkaLogKindGetDescription,
	},
	{
		name: 'kafkaLogSubscriptionListGet',
		value: 'kafkaLogSubscriptionListGet',
		action: 'List Kafka log subscriptions',
		execute: kafkaLogSubscriptionListGetExecute,
		description: kafkaLogSubscriptionListGetDescription,
	},
	{
		name: 'kafkaLogSubscriptionCreatePost',
		value: 'kafkaLogSubscriptionCreatePost',
		action: 'Create Kafka log subscription',
		execute: kafkaLogSubscriptionCreatePostExecute,
		description: kafkaLogSubscriptionCreatePostDescription,
	},
	{
		name: 'kafkaLogSubscriptionGetGet',
		value: 'kafkaLogSubscriptionGetGet',
		action: 'Get Kafka log subscription',
		execute: kafkaLogSubscriptionGetGetExecute,
		description: kafkaLogSubscriptionGetGetDescription,
	},
	{
		name: 'kafkaLogSubscriptionDeleteDelete',
		value: 'kafkaLogSubscriptionDeleteDelete',
		action: 'Delete Kafka log subscription',
		execute: kafkaLogSubscriptionDeleteDeleteExecute,
		description: kafkaLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'kafkaLogUrlCreatePost',
		value: 'kafkaLogUrlCreatePost',
		action: 'Generate Kafka log URL',
		execute: kafkaLogUrlCreatePostExecute,
		description: kafkaLogUrlCreatePostDescription,
	},
	{
		name: 'kafkaLogsGet',
		value: 'kafkaLogsGet',
		action: 'Get Kafka logs',
		execute: kafkaLogsGetExecute,
		description: kafkaLogsGetDescription,
	},
	{
		name: 'kafkaMaintenanceListGet',
		value: 'kafkaMaintenanceListGet',
		action: 'List Kafka maintenances',
		execute: kafkaMaintenanceListGetExecute,
		description: kafkaMaintenanceListGetDescription,
	},
	{
		name: 'kafkaMaintenanceGet',
		value: 'kafkaMaintenanceGet',
		action: 'Get Kafka maintenance',
		execute: kafkaMaintenanceGetExecute,
		description: kafkaMaintenanceGetDescription,
	},
	{
		name: 'kafkaMaintenanceApplyPost',
		value: 'kafkaMaintenanceApplyPost',
		action: 'Apply Kafka maintenance',
		execute: kafkaMaintenanceApplyPostExecute,
		description: kafkaMaintenanceApplyPostDescription,
	},
	{
		name: 'kafkaMetricListGet',
		value: 'kafkaMetricListGet',
		action: 'List Kafka metrics',
		execute: kafkaMetricListGetExecute,
		description: kafkaMetricListGetDescription,
	},
	{
		name: 'kafkaMetricGet',
		value: 'kafkaMetricGet',
		action: 'Get Kafka metric',
		execute: kafkaMetricGetExecute,
		description: kafkaMetricGetDescription,
	},
	{
		name: 'kafkaNodeListGet',
		value: 'kafkaNodeListGet',
		action: 'List Kafka nodes',
		execute: kafkaNodeListGetExecute,
		description: kafkaNodeListGetDescription,
	},
	{
		name: 'kafkaNodeGetGet',
		value: 'kafkaNodeGetGet',
		action: 'Get Kafka node',
		execute: kafkaNodeGetGetExecute,
		description: kafkaNodeGetGetDescription,
	},
	{
		name: 'kafkaPermissionsGet',
		value: 'kafkaPermissionsGet',
		action: 'Get Kafka permissions',
		execute: kafkaPermissionsGetExecute,
		description: kafkaPermissionsGetDescription,
	},
	{
		name: 'kafkaPrometheusGet',
		value: 'kafkaPrometheusGet',
		action: 'Get Kafka prometheus endpoint',
		execute: kafkaPrometheusGetExecute,
		description: kafkaPrometheusGetDescription,
	},
	{
		name: 'kafkaPrometheusCredentialsResetPost',
		value: 'kafkaPrometheusCredentialsResetPost',
		action: 'Reset Kafka prometheus credentials',
		execute: kafkaPrometheusCredentialsResetPostExecute,
		description: kafkaPrometheusCredentialsResetPostDescription,
	},
	{
		name: 'kafkaSchemaRegistryAclListGet',
		value: 'kafkaSchemaRegistryAclListGet',
		action: 'List Kafka schema registry ACLs',
		execute: kafkaSchemaRegistryAclListGetExecute,
		description: kafkaSchemaRegistryAclListGetDescription,
	},
	{
		name: 'kafkaSchemaRegistryAclCreatePost',
		value: 'kafkaSchemaRegistryAclCreatePost',
		action: 'Create Kafka schema registry ACL',
		execute: kafkaSchemaRegistryAclCreatePostExecute,
		description: kafkaSchemaRegistryAclCreatePostDescription,
	},
	{
		name: 'kafkaSchemaRegistryAclGetGet',
		value: 'kafkaSchemaRegistryAclGetGet',
		action: 'Get Kafka schema registry ACL',
		execute: kafkaSchemaRegistryAclGetGetExecute,
		description: kafkaSchemaRegistryAclGetGetDescription,
	},
	{
		name: 'kafkaSchemaRegistryAclDeleteDelete',
		value: 'kafkaSchemaRegistryAclDeleteDelete',
		action: 'Delete Kafka schema registry ACL',
		execute: kafkaSchemaRegistryAclDeleteDeleteExecute,
		description: kafkaSchemaRegistryAclDeleteDeleteDescription,
	},
	{
		name: 'kafkaTopicListGet',
		value: 'kafkaTopicListGet',
		action: 'List Kafka topics',
		execute: kafkaTopicListGetExecute,
		description: kafkaTopicListGetDescription,
	},
	{
		name: 'kafkaTopicCreatePost',
		value: 'kafkaTopicCreatePost',
		action: 'Create Kafka topic',
		execute: kafkaTopicCreatePostExecute,
		description: kafkaTopicCreatePostDescription,
	},
	{
		name: 'kafkaTopicGetGet',
		value: 'kafkaTopicGetGet',
		action: 'Get Kafka topic',
		execute: kafkaTopicGetGetExecute,
		description: kafkaTopicGetGetDescription,
	},
	{
		name: 'kafkaTopicUpdatePut',
		value: 'kafkaTopicUpdatePut',
		action: 'Update Kafka topic',
		execute: kafkaTopicUpdatePutExecute,
		description: kafkaTopicUpdatePutDescription,
	},
	{
		name: 'kafkaTopicDeleteDelete',
		value: 'kafkaTopicDeleteDelete',
		action: 'Delete Kafka topic',
		execute: kafkaTopicDeleteDeleteExecute,
		description: kafkaTopicDeleteDeleteDescription,
	},
	{
		name: 'kafkaTopicAclListGet',
		value: 'kafkaTopicAclListGet',
		action: 'List Kafka topic ACLs',
		execute: kafkaTopicAclListGetExecute,
		description: kafkaTopicAclListGetDescription,
	},
	{
		name: 'kafkaTopicAclCreatePost',
		value: 'kafkaTopicAclCreatePost',
		action: 'Create Kafka topic ACL',
		execute: kafkaTopicAclCreatePostExecute,
		description: kafkaTopicAclCreatePostDescription,
	},
	{
		name: 'kafkaTopicAclGetGet',
		value: 'kafkaTopicAclGetGet',
		action: 'Get Kafka topic ACL',
		execute: kafkaTopicAclGetGetExecute,
		description: kafkaTopicAclGetGetDescription,
	},
	{
		name: 'kafkaTopicAclDeleteDelete',
		value: 'kafkaTopicAclDeleteDelete',
		action: 'Delete Kafka topic ACL',
		execute: kafkaTopicAclDeleteDeleteExecute,
		description: kafkaTopicAclDeleteDeleteDescription,
	},
	{
		name: 'kafkaUserListGet',
		value: 'kafkaUserListGet',
		action: 'List Kafka users',
		execute: kafkaUserListGetExecute,
		description: kafkaUserListGetDescription,
	},
	{
		name: 'kafkaUserCreatePost',
		value: 'kafkaUserCreatePost',
		action: 'Create Kafka user',
		execute: kafkaUserCreatePostExecute,
		description: kafkaUserCreatePostDescription,
	},
	{
		name: 'kafkaUserGetGet',
		value: 'kafkaUserGetGet',
		action: 'Get Kafka user',
		execute: kafkaUserGetGetExecute,
		description: kafkaUserGetGetDescription,
	},
	{
		name: 'kafkaUserDeleteDelete',
		value: 'kafkaUserDeleteDelete',
		action: 'Delete Kafka user',
		execute: kafkaUserDeleteDeleteExecute,
		description: kafkaUserDeleteDeleteDescription,
	},
	{
		name: 'kafkaUserAccessGet',
		value: 'kafkaUserAccessGet',
		action: 'Get Kafka user access',
		execute: kafkaUserAccessGetExecute,
		description: kafkaUserAccessGetDescription,
	},
	{
		name: 'kafkaUserCredentialsResetPost',
		value: 'kafkaUserCredentialsResetPost',
		action: 'Reset Kafka user credentials',
		execute: kafkaUserCredentialsResetPostExecute,
		description: kafkaUserCredentialsResetPostDescription,
	},
	{
		name: 'kafkaConnectClusterListGet',
		value: 'kafkaConnectClusterListGet',
		action: 'List Kafka Connect clusters in a project',
		execute: kafkaConnectClusterListGetExecute,
		description: kafkaConnectClusterListGetDescription,
	},
	{
		name: 'kafkaConnectClusterGetGet',
		value: 'kafkaConnectClusterGetGet',
		action: 'Get Kafka Connect cluster',
		execute: kafkaConnectClusterGetGetExecute,
		description: kafkaConnectClusterGetGetDescription,
	},
	{
		name: 'kafkaConnectClusterCreatePost',
		value: 'kafkaConnectClusterCreatePost',
		action: 'Create Kafka Connect cluster',
		execute: kafkaConnectClusterCreatePostExecute,
		description: kafkaConnectClusterCreatePostDescription,
	},
	{
		name: 'kafkaConnectClusterUpdatePut',
		value: 'kafkaConnectClusterUpdatePut',
		action: 'Update Kafka Connect cluster',
		execute: kafkaConnectClusterUpdatePutExecute,
		description: kafkaConnectClusterUpdatePutDescription,
	},
	{
		name: 'kafkaConnectClusterDeleteDelete',
		value: 'kafkaConnectClusterDeleteDelete',
		action: 'Delete Kafka Connect cluster',
		execute: kafkaConnectClusterDeleteDeleteExecute,
		description: kafkaConnectClusterDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectBackupListGet',
		value: 'kafkaConnectBackupListGet',
		action: 'List Kafka Connect backups',
		execute: kafkaConnectBackupListGetExecute,
		description: kafkaConnectBackupListGetDescription,
	},
	{
		name: 'kafkaConnectBackupCreatePost',
		value: 'kafkaConnectBackupCreatePost',
		action: 'Create Kafka Connect backup',
		execute: kafkaConnectBackupCreatePostExecute,
		description: kafkaConnectBackupCreatePostDescription,
	},
	{
		name: 'kafkaConnectBackupGetGet',
		value: 'kafkaConnectBackupGetGet',
		action: 'Get Kafka Connect backup',
		execute: kafkaConnectBackupGetGetExecute,
		description: kafkaConnectBackupGetGetDescription,
	},
	{
		name: 'kafkaConnectBackupDeleteDelete',
		value: 'kafkaConnectBackupDeleteDelete',
		action: 'Delete Kafka Connect backup',
		execute: kafkaConnectBackupDeleteDeleteExecute,
		description: kafkaConnectBackupDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectUserListGet',
		value: 'kafkaConnectUserListGet',
		action: 'List Kafka Connect users',
		execute: kafkaConnectUserListGetExecute,
		description: kafkaConnectUserListGetDescription,
	},
	{
		name: 'kafkaConnectUserCreatePost',
		value: 'kafkaConnectUserCreatePost',
		action: 'Create Kafka Connect user',
		execute: kafkaConnectUserCreatePostExecute,
		description: kafkaConnectUserCreatePostDescription,
	},
	{
		name: 'kafkaConnectUserGetGet',
		value: 'kafkaConnectUserGetGet',
		action: 'Get Kafka Connect user',
		execute: kafkaConnectUserGetGetExecute,
		description: kafkaConnectUserGetGetDescription,
	},
	{
		name: 'kafkaConnectUserUpdatePut',
		value: 'kafkaConnectUserUpdatePut',
		action: 'Update Kafka Connect user',
		execute: kafkaConnectUserUpdatePutExecute,
		description: kafkaConnectUserUpdatePutDescription,
	},
	{
		name: 'kafkaConnectUserDeleteDelete',
		value: 'kafkaConnectUserDeleteDelete',
		action: 'Delete Kafka Connect user',
		execute: kafkaConnectUserDeleteDeleteExecute,
		description: kafkaConnectUserDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectNodeListGet',
		value: 'kafkaConnectNodeListGet',
		action: 'List Kafka Connect nodes',
		execute: kafkaConnectNodeListGetExecute,
		description: kafkaConnectNodeListGetDescription,
	},
	{
		name: 'kafkaConnectNodeCreatePost',
		value: 'kafkaConnectNodeCreatePost',
		action: 'Create Kafka Connect node',
		execute: kafkaConnectNodeCreatePostExecute,
		description: kafkaConnectNodeCreatePostDescription,
	},
	{
		name: 'kafkaConnectNodeGetGet',
		value: 'kafkaConnectNodeGetGet',
		action: 'Get Kafka Connect node',
		execute: kafkaConnectNodeGetGetExecute,
		description: kafkaConnectNodeGetGetDescription,
	},
	{
		name: 'kafkaConnectNodeUpdatePut',
		value: 'kafkaConnectNodeUpdatePut',
		action: 'Update Kafka Connect node',
		execute: kafkaConnectNodeUpdatePutExecute,
		description: kafkaConnectNodeUpdatePutDescription,
	},
	{
		name: 'kafkaConnectNodeDeleteDelete',
		value: 'kafkaConnectNodeDeleteDelete',
		action: 'Delete Kafka Connect node',
		execute: kafkaConnectNodeDeleteDeleteExecute,
		description: kafkaConnectNodeDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectIpRestrictionListGet',
		value: 'kafkaConnectIpRestrictionListGet',
		action: 'List Kafka Connect IP restrictions',
		execute: kafkaConnectIpRestrictionListGetExecute,
		description: kafkaConnectIpRestrictionListGetDescription,
	},
	{
		name: 'kafkaConnectIpRestrictionCreatePost',
		value: 'kafkaConnectIpRestrictionCreatePost',
		action: 'Create Kafka Connect IP restriction',
		execute: kafkaConnectIpRestrictionCreatePostExecute,
		description: kafkaConnectIpRestrictionCreatePostDescription,
	},
	{
		name: 'kafkaConnectLogSubscriptionListGet',
		value: 'kafkaConnectLogSubscriptionListGet',
		action: 'List Kafka Connect log subscriptions',
		execute: kafkaConnectLogSubscriptionListGetExecute,
		description: kafkaConnectLogSubscriptionListGetDescription,
	},
	{
		name: 'kafkaConnectLogSubscriptionCreatePost',
		value: 'kafkaConnectLogSubscriptionCreatePost',
		action: 'Create Kafka Connect log subscription',
		execute: kafkaConnectLogSubscriptionCreatePostExecute,
		description: kafkaConnectLogSubscriptionCreatePostDescription,
	},
	{
		name: 'kafkaConnectLogSubscriptionGetGet',
		value: 'kafkaConnectLogSubscriptionGetGet',
		action: 'Get Kafka Connect log subscription',
		execute: kafkaConnectLogSubscriptionGetGetExecute,
		description: kafkaConnectLogSubscriptionGetGetDescription,
	},
	{
		name: 'kafkaConnectMaintenanceGet',
		value: 'kafkaConnectMaintenanceGet',
		action: 'Get Kafka Connect maintenance',
		execute: kafkaConnectMaintenanceGetExecute,
		description: kafkaConnectMaintenanceGetDescription,
	},
	{
		name: 'kafkaConnectMaintenanceUpdatePut',
		value: 'kafkaConnectMaintenanceUpdatePut',
		action: 'Update Kafka Connect maintenance',
		execute: kafkaConnectMaintenanceUpdatePutExecute,
		description: kafkaConnectMaintenanceUpdatePutDescription,
	},
	{
		name: 'kafkaConnectMetricGet',
		value: 'kafkaConnectMetricGet',
		action: 'Get Kafka Connect metric',
		execute: kafkaConnectMetricGetExecute,
		description: kafkaConnectMetricGetDescription,
	},
	{
		name: 'kafkaConnectPrometheusGet',
		value: 'kafkaConnectPrometheusGet',
		action: 'Get Kafka Connect prometheus',
		execute: kafkaConnectPrometheusGetExecute,
		description: kafkaConnectPrometheusGetDescription,
	},
	{
		name: 'kafkaConnectCertificateListGet',
		value: 'kafkaConnectCertificateListGet',
		action: 'List Kafka Connect certificates',
		execute: kafkaConnectCertificateListGetExecute,
		description: kafkaConnectCertificateListGetDescription,
	},
	{
		name: 'kafkaConnectCertificateCreatePost',
		value: 'kafkaConnectCertificateCreatePost',
		action: 'Create Kafka Connect certificate',
		execute: kafkaConnectCertificateCreatePostExecute,
		description: kafkaConnectCertificateCreatePostDescription,
	},
	{
		name: 'kafkaConnectadvancedConfigurationGet',
		value: 'kafkaConnectadvancedConfigurationGet',
		action: 'Get Advanced Configuration',
		execute: kafkaConnectadvancedConfigurationGetExecute,
		description: kafkaConnectadvancedConfigurationGetDescription,
	},
	{
		name: 'kafkaConnectadvancedConfigurationUpdatePut',
		value: 'kafkaConnectadvancedConfigurationUpdatePut',
		action: 'Update Advanced Configuration',
		execute: kafkaConnectadvancedConfigurationUpdatePutExecute,
		description: kafkaConnectadvancedConfigurationUpdatePutDescription,
	},
	{
		name: 'kafkaConnectcapabilitiesAdvancedConfigurationGet',
		value: 'kafkaConnectcapabilitiesAdvancedConfigurationGet',
		action: 'Get Advanced Configuration Capabilities',
		execute: kafkaConnectcapabilitiesAdvancedConfigurationGetExecute,
		description: kafkaConnectcapabilitiesAdvancedConfigurationGetDescription,
	},
	{
		name: 'kafkaConnectcapabilitiesBackupRegionsGet',
		value: 'kafkaConnectcapabilitiesBackupRegionsGet',
		action: 'Get Backup Regions Capabilities',
		execute: kafkaConnectcapabilitiesBackupRegionsGetExecute,
		description: kafkaConnectcapabilitiesBackupRegionsGetDescription,
	},
	{
		name: 'kafkaConnectcapabilitiesConnectorListGet',
		value: 'kafkaConnectcapabilitiesConnectorListGet',
		action: 'List Connector Capabilities',
		execute: kafkaConnectcapabilitiesConnectorListGetExecute,
		description: kafkaConnectcapabilitiesConnectorListGetDescription,
	},
	{
		name: 'kafkaConnectcapabilitiesConnectorGet',
		value: 'kafkaConnectcapabilitiesConnectorGet',
		action: 'Get Connector Capability',
		execute: kafkaConnectcapabilitiesConnectorGetExecute,
		description: kafkaConnectcapabilitiesConnectorGetDescription,
	},
	{
		name: 'kafkaConnectcapabilitiesConnectorConfigurationGet',
		value: 'kafkaConnectcapabilitiesConnectorConfigurationGet',
		action: 'Get Connector Configuration',
		execute: kafkaConnectcapabilitiesConnectorConfigurationGetExecute,
		description: kafkaConnectcapabilitiesConnectorConfigurationGetDescription,
	},
	{
		name: 'kafkaConnectcapabilitiesConnectorTransformsGet',
		value: 'kafkaConnectcapabilitiesConnectorTransformsGet',
		action: 'Get Connector Transforms',
		execute: kafkaConnectcapabilitiesConnectorTransformsGetExecute,
		description: kafkaConnectcapabilitiesConnectorTransformsGetDescription,
	},
	{
		name: 'kafkaConnectcapabilitiesIntegrationGet',
		value: 'kafkaConnectcapabilitiesIntegrationGet',
		action: 'Get Integration Capabilities',
		execute: kafkaConnectcapabilitiesIntegrationGetExecute,
		description: kafkaConnectcapabilitiesIntegrationGetDescription,
	},
	{
		name: 'kafkaConnectconnectorListGet',
		value: 'kafkaConnectconnectorListGet',
		action: 'List Connectors',
		execute: kafkaConnectconnectorListGetExecute,
		description: kafkaConnectconnectorListGetDescription,
	},
	{
		name: 'kafkaConnectconnectorCreatePost',
		value: 'kafkaConnectconnectorCreatePost',
		action: 'Create a Connector',
		execute: kafkaConnectconnectorCreatePostExecute,
		description: kafkaConnectconnectorCreatePostDescription,
	},
	{
		name: 'kafkaConnectconnectorGetGet',
		value: 'kafkaConnectconnectorGetGet',
		action: 'Get Connector Details',
		execute: kafkaConnectconnectorGetGetExecute,
		description: kafkaConnectconnectorGetGetDescription,
	},
	{
		name: 'kafkaConnectconnectorUpdatePut',
		value: 'kafkaConnectconnectorUpdatePut',
		action: 'Update a Connector',
		execute: kafkaConnectconnectorUpdatePutExecute,
		description: kafkaConnectconnectorUpdatePutDescription,
	},
	{
		name: 'kafkaConnectconnectorDeleteDelete',
		value: 'kafkaConnectconnectorDeleteDelete',
		action: 'Delete a Connector',
		execute: kafkaConnectconnectorDeleteDeleteExecute,
		description: kafkaConnectconnectorDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectconnectorPausePost',
		value: 'kafkaConnectconnectorPausePost',
		action: 'Pause a Connector',
		execute: kafkaConnectconnectorPausePostExecute,
		description: kafkaConnectconnectorPausePostDescription,
	},
	{
		name: 'kafkaConnectconnectorRestartPost',
		value: 'kafkaConnectconnectorRestartPost',
		action: 'Restart a Connector',
		execute: kafkaConnectconnectorRestartPostExecute,
		description: kafkaConnectconnectorRestartPostDescription,
	},
	{
		name: 'kafkaConnectconnectorResumePost',
		value: 'kafkaConnectconnectorResumePost',
		action: 'Resume a Connector',
		execute: kafkaConnectconnectorResumePostExecute,
		description: kafkaConnectconnectorResumePostDescription,
	},
	{
		name: 'kafkaConnectconnectorTaskListGet',
		value: 'kafkaConnectconnectorTaskListGet',
		action: 'List Connector Tasks',
		execute: kafkaConnectconnectorTaskListGetExecute,
		description: kafkaConnectconnectorTaskListGetDescription,
	},
	{
		name: 'kafkaConnectconnectorTaskGet',
		value: 'kafkaConnectconnectorTaskGet',
		action: 'Get Connector Task Details',
		execute: kafkaConnectconnectorTaskGetExecute,
		description: kafkaConnectconnectorTaskGetDescription,
	},
	{
		name: 'kafkaConnectconnectorTaskRestartPost',
		value: 'kafkaConnectconnectorTaskRestartPost',
		action: 'Restart a Connector Task',
		execute: kafkaConnectconnectorTaskRestartPostExecute,
		description: kafkaConnectconnectorTaskRestartPostDescription,
	},
	{
		name: 'kafkaConnectintegrationListGet',
		value: 'kafkaConnectintegrationListGet',
		action: 'List Integrations',
		execute: kafkaConnectintegrationListGetExecute,
		description: kafkaConnectintegrationListGetDescription,
	},
	{
		name: 'kafkaConnectintegrationCreatePost',
		value: 'kafkaConnectintegrationCreatePost',
		action: 'Create an Integration',
		execute: kafkaConnectintegrationCreatePostExecute,
		description: kafkaConnectintegrationCreatePostDescription,
	},
	{
		name: 'kafkaConnectintegrationGetGet',
		value: 'kafkaConnectintegrationGetGet',
		action: 'Get Integration Details',
		execute: kafkaConnectintegrationGetGetExecute,
		description: kafkaConnectintegrationGetGetDescription,
	},
	{
		name: 'kafkaConnectintegrationDeleteDelete',
		value: 'kafkaConnectintegrationDeleteDelete',
		action: 'Delete an Integration',
		execute: kafkaConnectintegrationDeleteDeleteExecute,
		description: kafkaConnectintegrationDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectipRestrictionGetGet',
		value: 'kafkaConnectipRestrictionGetGet',
		action: 'Get IP Restriction Details',
		execute: kafkaConnectipRestrictionGetGetExecute,
		description: kafkaConnectipRestrictionGetGetDescription,
	},
	{
		name: 'kafkaConnectipRestrictionUpdatePut',
		value: 'kafkaConnectipRestrictionUpdatePut',
		action: 'Update an IP Restriction',
		execute: kafkaConnectipRestrictionUpdatePutExecute,
		description: kafkaConnectipRestrictionUpdatePutDescription,
	},
	{
		name: 'kafkaConnectipRestrictionDeleteDelete',
		value: 'kafkaConnectipRestrictionDeleteDelete',
		action: 'Delete an IP Restriction',
		execute: kafkaConnectipRestrictionDeleteDeleteExecute,
		description: kafkaConnectipRestrictionDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectlogKindListGet',
		value: 'kafkaConnectlogKindListGet',
		action: 'List Log Kinds',
		execute: kafkaConnectlogKindListGetExecute,
		description: kafkaConnectlogKindListGetDescription,
	},
	{
		name: 'kafkaConnectlogKindGet',
		value: 'kafkaConnectlogKindGet',
		action: 'Get a Log Kind',
		execute: kafkaConnectlogKindGetExecute,
		description: kafkaConnectlogKindGetDescription,
	},
	{
		name: 'kafkaConnectlogSubscriptionDeleteDelete',
		value: 'kafkaConnectlogSubscriptionDeleteDelete',
		action: 'Delete a Log Subscription',
		execute: kafkaConnectlogSubscriptionDeleteDeleteExecute,
		description: kafkaConnectlogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'kafkaConnectlogUrlCreatePost',
		value: 'kafkaConnectlogUrlCreatePost',
		action: 'Generate Log URL',
		execute: kafkaConnectlogUrlCreatePostExecute,
		description: kafkaConnectlogUrlCreatePostDescription,
	},
	{
		name: 'kafkaConnectlogsGet',
		value: 'kafkaConnectlogsGet',
		action: 'Get Logs',
		execute: kafkaConnectlogsGetExecute,
		description: kafkaConnectlogsGetDescription,
	},
	{
		name: 'kafkaConnectmaintenanceListGet',
		value: 'kafkaConnectmaintenanceListGet',
		action: 'List Maintenances',
		execute: kafkaConnectmaintenanceListGetExecute,
		description: kafkaConnectmaintenanceListGetDescription,
	},
	{
		name: 'kafkaConnectmaintenanceApplyPost',
		value: 'kafkaConnectmaintenanceApplyPost',
		action: 'Apply Maintenance',
		execute: kafkaConnectmaintenanceApplyPostExecute,
		description: kafkaConnectmaintenanceApplyPostDescription,
	},
	{
		name: 'kafkaConnectmetricListGet',
		value: 'kafkaConnectmetricListGet',
		action: 'List Metrics',
		execute: kafkaConnectmetricListGetExecute,
		description: kafkaConnectmetricListGetDescription,
	},
	{
		name: 'kafkaConnectnodeGet',
		value: 'kafkaConnectnodeGet',
		action: 'Get a Node',
		execute: kafkaConnectnodeGetExecute,
		description: kafkaConnectnodeGetDescription,
	},
	{
		name: 'kafkaConnectprometheusCredentialsResetPost',
		value: 'kafkaConnectprometheusCredentialsResetPost',
		action: 'Reset Prometheus Credentials',
		execute: kafkaConnectprometheusCredentialsResetPostExecute,
		description: kafkaConnectprometheusCredentialsResetPostDescription,
	},
	{
		name: 'kafkaConnectuserCredentialsResetPost',
		value: 'kafkaConnectuserCredentialsResetPost',
		action: 'Reset User Credentials',
		execute: kafkaConnectuserCredentialsResetPostExecute,
		description: kafkaConnectuserCredentialsResetPostDescription,
	},
	{
		name: 'kafkaMirrorMakerClusterListGet',
		value: 'kafkaMirrorMakerClusterListGet',
		action: 'kafkaMirrorMakerClusterListGet',
		execute: kafkaMirrorMakerClusterListGetExecute,
		description: kafkaMirrorMakerClusterListGetDescription,
	},
	{
		name: 'kafkaMirrorMakerClusterCreatePost',
		value: 'kafkaMirrorMakerClusterCreatePost',
		action: 'kafkaMirrorMakerClusterCreatePost',
		execute: kafkaMirrorMakerClusterCreatePostExecute,
		description: kafkaMirrorMakerClusterCreatePostDescription,
	},
	{
		name: 'kafkaMirrorMakerClusterGetGet',
		value: 'kafkaMirrorMakerClusterGetGet',
		action: 'kafkaMirrorMakerClusterGetGet',
		execute: kafkaMirrorMakerClusterGetGetExecute,
		description: kafkaMirrorMakerClusterGetGetDescription,
	},
	{
		name: 'kafkaMirrorMakerClusterUpdatePut',
		value: 'kafkaMirrorMakerClusterUpdatePut',
		action: 'kafkaMirrorMakerClusterUpdatePut',
		execute: kafkaMirrorMakerClusterUpdatePutExecute,
		description: kafkaMirrorMakerClusterUpdatePutDescription,
	},
	{
		name: 'kafkaMirrorMakerClusterDeleteDelete',
		value: 'kafkaMirrorMakerClusterDeleteDelete',
		action: 'kafkaMirrorMakerClusterDeleteDelete',
		execute: kafkaMirrorMakerClusterDeleteDeleteExecute,
		description: kafkaMirrorMakerClusterDeleteDeleteDescription,
	},
	{
		name: 'kafkaMirrorMakerCapabilitiesIntegrationGet',
		value: 'kafkaMirrorMakerCapabilitiesIntegrationGet',
		action: 'kafkaMirrorMakerCapabilitiesIntegrationGet',
		execute: kafkaMirrorMakerCapabilitiesIntegrationGetExecute,
		description: kafkaMirrorMakerCapabilitiesIntegrationGetDescription,
	},
	{
		name: 'kafkaMirrorMakerIntegrationGet',
		value: 'kafkaMirrorMakerIntegrationGet',
		action: 'kafkaMirrorMakerIntegrationGet',
		execute: kafkaMirrorMakerIntegrationGetExecute,
		description: kafkaMirrorMakerIntegrationGetDescription,
	},
	{
		name: 'kafkaMirrorMakerIntegrationCreatePost',
		value: 'kafkaMirrorMakerIntegrationCreatePost',
		action: 'kafkaMirrorMakerIntegrationCreatePost',
		execute: kafkaMirrorMakerIntegrationCreatePostExecute,
		description: kafkaMirrorMakerIntegrationCreatePostDescription,
	},
	{
		name: 'kafkaMirrorMakerIntegrationDeleteDelete',
		value: 'kafkaMirrorMakerIntegrationDeleteDelete',
		action: 'kafkaMirrorMakerIntegrationDeleteDelete',
		execute: kafkaMirrorMakerIntegrationDeleteDeleteExecute,
		description: kafkaMirrorMakerIntegrationDeleteDeleteDescription,
	},
	{
		name: 'kafkaMirrorMakerIntegrationGetById',
		value: 'kafkaMirrorMakerIntegrationGetById',
		action: 'kafkaMirrorMakerIntegrationGetById',
		execute: kafkaMirrorMakerIntegrationGetByIdExecute,
		description: kafkaMirrorMakerIntegrationGetByIdDescription,
	},
	{
		name: 'kafkaMirrorMakerLogKindGet',
		value: 'kafkaMirrorMakerLogKindGet',
		action: 'kafkaMirrorMakerLogKindGet',
		execute: kafkaMirrorMakerLogKindGetExecute,
		description: kafkaMirrorMakerLogKindGetDescription,
	},
	{
		name: 'kafkaMirrorMakerLogKindNameGet',
		value: 'kafkaMirrorMakerLogKindNameGet',
		action: 'kafkaMirrorMakerLogKindNameGet',
		execute: kafkaMirrorMakerLogKindNameGetExecute,
		description: kafkaMirrorMakerLogKindNameGetDescription,
	},
	{
		name: 'kafkaMirrorMakerLogSubscriptionCreatePost',
		value: 'kafkaMirrorMakerLogSubscriptionCreatePost',
		action: 'kafkaMirrorMakerLogSubscriptionCreatePost',
		execute: kafkaMirrorMakerLogSubscriptionCreatePostExecute,
		description: kafkaMirrorMakerLogSubscriptionCreatePostDescription,
	},
	{
		name: 'kafkaMirrorMakerLogSubscriptionDeleteDelete',
		value: 'kafkaMirrorMakerLogSubscriptionDeleteDelete',
		action: 'kafkaMirrorMakerLogSubscriptionDeleteDelete',
		execute: kafkaMirrorMakerLogSubscriptionDeleteDeleteExecute,
		description: kafkaMirrorMakerLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'kafkaMirrorMakerLogSubscriptionGetById',
		value: 'kafkaMirrorMakerLogSubscriptionGetById',
		action: 'kafkaMirrorMakerLogSubscriptionGetById',
		execute: kafkaMirrorMakerLogSubscriptionGetByIdExecute,
		description: kafkaMirrorMakerLogSubscriptionGetByIdDescription,
	},
	{
		name: 'kafkaMirrorMakerLogUrlPost',
		value: 'kafkaMirrorMakerLogUrlPost',
		action: 'kafkaMirrorMakerLogUrlPost',
		execute: kafkaMirrorMakerLogUrlPostExecute,
		description: kafkaMirrorMakerLogUrlPostDescription,
	},
	{
		name: 'kafkaMirrorMakerLogsGet',
		value: 'kafkaMirrorMakerLogsGet',
		action: 'kafkaMirrorMakerLogsGet',
		execute: kafkaMirrorMakerLogsGetExecute,
		description: kafkaMirrorMakerLogsGetDescription,
	},
	{
		name: 'kafkaMirrorMakerMaintenanceGet',
		value: 'kafkaMirrorMakerMaintenanceGet',
		action: 'kafkaMirrorMakerMaintenanceGet',
		execute: kafkaMirrorMakerMaintenanceGetExecute,
		description: kafkaMirrorMakerMaintenanceGetDescription,
	},
	{
		name: 'kafkaMirrorMakerMaintenanceGetById',
		value: 'kafkaMirrorMakerMaintenanceGetById',
		action: 'kafkaMirrorMakerMaintenanceGetById',
		execute: kafkaMirrorMakerMaintenanceGetByIdExecute,
		description: kafkaMirrorMakerMaintenanceGetByIdDescription,
	},
	{
		name: 'kafkaMirrorMakerMaintenanceApplyPost',
		value: 'kafkaMirrorMakerMaintenanceApplyPost',
		action: 'kafkaMirrorMakerMaintenanceApplyPost',
		execute: kafkaMirrorMakerMaintenanceApplyPostExecute,
		description: kafkaMirrorMakerMaintenanceApplyPostDescription,
	},
	{
		name: 'kafkaMirrorMakerMetricGet',
		value: 'kafkaMirrorMakerMetricGet',
		action: 'kafkaMirrorMakerMetricGet',
		execute: kafkaMirrorMakerMetricGetExecute,
		description: kafkaMirrorMakerMetricGetDescription,
	},
	{
		name: 'kafkaMirrorMakerMetricNameGet',
		value: 'kafkaMirrorMakerMetricNameGet',
		action: 'kafkaMirrorMakerMetricNameGet',
		execute: kafkaMirrorMakerMetricNameGetExecute,
		description: kafkaMirrorMakerMetricNameGetDescription,
	},
	{
		name: 'kafkaMirrorMakerNodeListGet',
		value: 'kafkaMirrorMakerNodeListGet',
		action: 'kafkaMirrorMakerNodeListGet',
		execute: kafkaMirrorMakerNodeListGetExecute,
		description: kafkaMirrorMakerNodeListGetDescription,
	},
	{
		name: 'kafkaMirrorMakerNodeGetGet',
		value: 'kafkaMirrorMakerNodeGetGet',
		action: 'kafkaMirrorMakerNodeGetGet',
		execute: kafkaMirrorMakerNodeGetGetExecute,
		description: kafkaMirrorMakerNodeGetGetDescription,
	},
	{
		name: 'kafkaMirrorMakerPrometheusGet',
		value: 'kafkaMirrorMakerPrometheusGet',
		action: 'kafkaMirrorMakerPrometheusGet',
		execute: kafkaMirrorMakerPrometheusGetExecute,
		description: kafkaMirrorMakerPrometheusGetDescription,
	},
	{
		name: 'kafkaMirrorMakerPrometheusCredentialsResetPost',
		value: 'kafkaMirrorMakerPrometheusCredentialsResetPost',
		action: 'kafkaMirrorMakerPrometheusCredentialsResetPost',
		execute: kafkaMirrorMakerPrometheusCredentialsResetPostExecute,
		description: kafkaMirrorMakerPrometheusCredentialsResetPostDescription,
	},
	{
		name: 'kafkaMirrorMakerReplicationGet',
		value: 'kafkaMirrorMakerReplicationGet',
		action: 'kafkaMirrorMakerReplicationGet',
		execute: kafkaMirrorMakerReplicationGetExecute,
		description: kafkaMirrorMakerReplicationGetDescription,
	},
	{
		name: 'kafkaMirrorMakerReplicationCreatePost',
		value: 'kafkaMirrorMakerReplicationCreatePost',
		action: 'kafkaMirrorMakerReplicationCreatePost',
		execute: kafkaMirrorMakerReplicationCreatePostExecute,
		description: kafkaMirrorMakerReplicationCreatePostDescription,
	},
	{
		name: 'kafkaMirrorMakerReplicationDeleteDelete',
		value: 'kafkaMirrorMakerReplicationDeleteDelete',
		action: 'kafkaMirrorMakerReplicationDeleteDelete',
		execute: kafkaMirrorMakerReplicationDeleteDeleteExecute,
		description: kafkaMirrorMakerReplicationDeleteDeleteDescription,
	},
	{
		name: 'kafkaMirrorMakerReplicationGetById',
		value: 'kafkaMirrorMakerReplicationGetById',
		action: 'kafkaMirrorMakerReplicationGetById',
		execute: kafkaMirrorMakerReplicationGetByIdExecute,
		description: kafkaMirrorMakerReplicationGetByIdDescription,
	},
	{
		name: 'kafkaMirrorMakerReplicationUpdatePut',
		value: 'kafkaMirrorMakerReplicationUpdatePut',
		action: 'kafkaMirrorMakerReplicationUpdatePut',
		execute: kafkaMirrorMakerReplicationUpdatePutExecute,
		description: kafkaMirrorMakerReplicationUpdatePutDescription,
	},
	{
		name: 'm3aggregatorClusterListGet',
		value: 'm3aggregatorClusterListGet',
		action: 'List M3 Aggregator clusters in a project',
		execute: m3aggregatorClusterListGetExecute,
		description: m3aggregatorClusterListGetDescription,
	},
	{
		name: 'm3aggregatorClusterCreatePost',
		value: 'm3aggregatorClusterCreatePost',
		action: 'Create M3 Aggregator cluster',
		execute: m3aggregatorClusterCreatePostExecute,
		description: m3aggregatorClusterCreatePostDescription,
	},
	{
		name: 'm3aggregatorClusterGetGet',
		value: 'm3aggregatorClusterGetGet',
		action: 'Get M3 Aggregator cluster',
		execute: m3aggregatorClusterGetGetExecute,
		description: m3aggregatorClusterGetGetDescription,
	},
	{
		name: 'm3aggregatorClusterUpdatePut',
		value: 'm3aggregatorClusterUpdatePut',
		action: 'Update M3 Aggregator cluster',
		execute: m3aggregatorClusterUpdatePutExecute,
		description: m3aggregatorClusterUpdatePutDescription,
	},
	{
		name: 'm3aggregatorClusterDeleteDelete',
		value: 'm3aggregatorClusterDeleteDelete',
		action: 'Delete M3 Aggregator cluster',
		execute: m3aggregatorClusterDeleteDeleteExecute,
		description: m3aggregatorClusterDeleteDeleteDescription,
	},
	{
		name: 'm3aggregatorCapabilitiesIntegrationGet',
		value: 'm3aggregatorCapabilitiesIntegrationGet',
		action: 'Get integration capabilities related to the m3aggregator service',
		execute: m3aggregatorCapabilitiesIntegrationGetExecute,
		description: m3aggregatorCapabilitiesIntegrationGetDescription,
	},
	{
		name: 'm3aggregatorIntegrationGet',
		value: 'm3aggregatorIntegrationGet',
		action: 'List integrations',
		execute: m3aggregatorIntegrationGetExecute,
		description: m3aggregatorIntegrationGetDescription,
	},
	{
		name: 'm3aggregatorIntegrationCreatePost',
		value: 'm3aggregatorIntegrationCreatePost',
		action: 'Create an integration',
		execute: m3aggregatorIntegrationCreatePostExecute,
		description: m3aggregatorIntegrationCreatePostDescription,
	},
	{
		name: 'm3aggregatorIntegrationDeleteDelete',
		value: 'm3aggregatorIntegrationDeleteDelete',
		action: 'Delete an integration',
		execute: m3aggregatorIntegrationDeleteDeleteExecute,
		description: m3aggregatorIntegrationDeleteDeleteDescription,
	},
	{
		name: 'm3aggregatorIntegrationGetById',
		value: 'm3aggregatorIntegrationGetById',
		action: 'Get an integration',
		execute: m3aggregatorIntegrationGetByIdExecute,
		description: m3aggregatorIntegrationGetByIdDescription,
	},
	{
		name: 'm3aggregatorLogKindGet',
		value: 'm3aggregatorLogKindGet',
		action: 'List available log kinds',
		execute: m3aggregatorLogKindGetExecute,
		description: m3aggregatorLogKindGetDescription,
	},
	{
		name: 'm3aggregatorLogKindNameGet',
		value: 'm3aggregatorLogKindNameGet',
		action: 'Get a log kind',
		execute: m3aggregatorLogKindNameGetExecute,
		description: m3aggregatorLogKindNameGetDescription,
	},
	{
		name: 'm3aggregatorLogSubscriptionListGet',
		value: 'm3aggregatorLogSubscriptionListGet',
		action: 'List subscription IDs for a cluster',
		execute: m3aggregatorLogSubscriptionListGetExecute,
		description: m3aggregatorLogSubscriptionListGetDescription,
	},
	{
		name: 'm3aggregatorLogSubscriptionCreatePost',
		value: 'm3aggregatorLogSubscriptionCreatePost',
		action: 'Create subscription to log to customer for a m3aggregator',
		execute: m3aggregatorLogSubscriptionCreatePostExecute,
		description: m3aggregatorLogSubscriptionCreatePostDescription,
	},
	{
		name: 'm3aggregatorLogSubscriptionDeleteDelete',
		value: 'm3aggregatorLogSubscriptionDeleteDelete',
		action: 'Delete a subscription',
		execute: m3aggregatorLogSubscriptionDeleteDeleteExecute,
		description: m3aggregatorLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'm3aggregatorLogSubscriptionGetById',
		value: 'm3aggregatorLogSubscriptionGetById',
		action: 'Get subscription details',
		execute: m3aggregatorLogSubscriptionGetByIdExecute,
		description: m3aggregatorLogSubscriptionGetByIdDescription,
	},
	{
		name: 'm3aggregatorLogUrlPost',
		value: 'm3aggregatorLogUrlPost',
		action: 'Generate a temporary URL to retrieve logs',
		execute: m3aggregatorLogUrlPostExecute,
		description: m3aggregatorLogUrlPostDescription,
	},
	{
		name: 'm3aggregatorLogsGet',
		value: 'm3aggregatorLogsGet',
		action: 'Retrieve the most recent m3aggregator log messages',
		execute: m3aggregatorLogsGetExecute,
		description: m3aggregatorLogsGetDescription,
	},
	{
		name: 'm3aggregatorMaintenanceGet',
		value: 'm3aggregatorMaintenanceGet',
		action: 'List maintenances for the m3aggregator cluster',
		execute: m3aggregatorMaintenanceGetExecute,
		description: m3aggregatorMaintenanceGetDescription,
	},
	{
		name: 'm3aggregatorMaintenanceGetById',
		value: 'm3aggregatorMaintenanceGetById',
		action: 'Get the maintenance for the m3aggregator cluster',
		execute: m3aggregatorMaintenanceGetByIdExecute,
		description: m3aggregatorMaintenanceGetByIdDescription,
	},
	{
		name: 'm3aggregatorMaintenanceApplyPost',
		value: 'm3aggregatorMaintenanceApplyPost',
		action: 'Apply the maintenance',
		execute: m3aggregatorMaintenanceApplyPostExecute,
		description: m3aggregatorMaintenanceApplyPostDescription,
	},
	{
		name: 'm3aggregatorMetricGet',
		value: 'm3aggregatorMetricGet',
		action: 'List available metrics for the m3aggregator',
		execute: m3aggregatorMetricGetExecute,
		description: m3aggregatorMetricGetDescription,
	},
	{
		name: 'm3aggregatorMetricNameGet',
		value: 'm3aggregatorMetricNameGet',
		action: 'Get the metric values for the m3aggregator',
		execute: m3aggregatorMetricNameGetExecute,
		description: m3aggregatorMetricNameGetDescription,
	},
	{
		name: 'm3aggregatorNodeListGet',
		value: 'm3aggregatorNodeListGet',
		action: 'List nodes of the m3aggregator',
		execute: m3aggregatorNodeListGetExecute,
		description: m3aggregatorNodeListGetDescription,
	},
	{
		name: 'm3aggregatorNodeGetGet',
		value: 'm3aggregatorNodeGetGet',
		action: 'Get m3aggregator nodes',
		execute: m3aggregatorNodeGetGetExecute,
		description: m3aggregatorNodeGetGetDescription,
	},
	{
		name: 'M3dbClusterListGet',
		value: 'M3dbClusterListGet',
		action: 'List all the m3db clusters of the project',
		execute: m3dbClusterListGetExecute,
		description: m3dbClusterListGetDescription,
	},
	{
		name: 'M3dbClusterCreatePost',
		value: 'M3dbClusterCreatePost',
		action: 'Create a new m3db cluster',
		execute: m3dbClusterCreatePostExecute,
		description: m3dbClusterCreatePostDescription,
	},
	{
		name: 'M3dbClusterDeleteDelete',
		value: 'M3dbClusterDeleteDelete',
		action: 'Delete a m3db cluster',
		execute: m3dbClusterDeleteDeleteExecute,
		description: m3dbClusterDeleteDeleteDescription,
	},
	{
		name: 'M3dbClusterGetGet',
		value: 'M3dbClusterGetGet',
		action: 'Get m3db cluster properties',
		execute: m3dbClusterGetGetExecute,
		description: m3dbClusterGetGetDescription,
	},
	{
		name: 'M3dbClusterUpdatePut',
		value: 'M3dbClusterUpdatePut',
		action: 'Update an existing m3db cluster',
		execute: m3dbClusterUpdatePutExecute,
		description: m3dbClusterUpdatePutDescription,
	},
	{
		name: 'M3dbAdvancedConfigurationGetGet',
		value: 'M3dbAdvancedConfigurationGetGet',
		action: 'Get m3db advanced configuration',
		execute: m3dbAdvancedConfigurationGetGetExecute,
		description: m3dbAdvancedConfigurationGetGetDescription,
	},
	{
		name: 'M3dbAdvancedConfigurationUpdatePut',
		value: 'M3dbAdvancedConfigurationUpdatePut',
		action: 'Update m3db advanced configuration',
		execute: m3dbAdvancedConfigurationUpdatePutExecute,
		description: m3dbAdvancedConfigurationUpdatePutDescription,
	},
	{
		name: 'M3dbBackupListGet',
		value: 'M3dbBackupListGet',
		action: 'List backups of the m3db',
		execute: m3dbBackupListGetExecute,
		description: m3dbBackupListGetDescription,
	},
	{
		name: 'M3dbBackupGetGet',
		value: 'M3dbBackupGetGet',
		action: 'Get m3db backups',
		execute: m3dbBackupGetGetExecute,
		description: m3dbBackupGetGetDescription,
	},
	{
		name: 'M3dbCapabilitiesAdvancedConfigurationGetGet',
		value: 'M3dbCapabilitiesAdvancedConfigurationGetGet',
		action: 'Get m3db advanced configuration fields',
		execute: m3dbCapabilitiesAdvancedConfigurationGetGetExecute,
		description: m3dbCapabilitiesAdvancedConfigurationGetGetDescription,
	},
	{
		name: 'M3dbCapabilitiesIntegrationGetGet',
		value: 'M3dbCapabilitiesIntegrationGetGet',
		action: 'Get integration capabilities related to the m3db service',
		execute: m3dbCapabilitiesIntegrationGetGetExecute,
		description: m3dbCapabilitiesIntegrationGetGetDescription,
	},
	{
		name: 'M3dbIntegrationListGet',
		value: 'M3dbIntegrationListGet',
		action: 'List integrations',
		execute: m3dbIntegrationListGetExecute,
		description: m3dbIntegrationListGetDescription,
	},
	{
		name: 'M3dbIntegrationCreatePost',
		value: 'M3dbIntegrationCreatePost',
		action: 'Create a new integration',
		execute: m3dbIntegrationCreatePostExecute,
		description: m3dbIntegrationCreatePostDescription,
	},
	{
		name: 'M3dbIntegrationDeleteDelete',
		value: 'M3dbIntegrationDeleteDelete',
		action: 'Delete an integration',
		execute: m3dbIntegrationDeleteDeleteExecute,
		description: m3dbIntegrationDeleteDeleteDescription,
	},
	{
		name: 'M3dbIntegrationGetGet',
		value: 'M3dbIntegrationGetGet',
		action: 'Get an integration',
		execute: m3dbIntegrationGetGetExecute,
		description: m3dbIntegrationGetGetDescription,
	},
	{
		name: 'M3dbIpRestrictionListGet',
		value: 'M3dbIpRestrictionListGet',
		action: 'List m3db ip restrictions',
		execute: m3dbIpRestrictionListGetExecute,
		description: m3dbIpRestrictionListGetDescription,
	},
	{
		name: 'M3dbIpRestrictionCreatePost',
		value: 'M3dbIpRestrictionCreatePost',
		action: 'Add ip restrictions to the m3db',
		execute: m3dbIpRestrictionCreatePostExecute,
		description: m3dbIpRestrictionCreatePostDescription,
	},
	{
		name: 'M3dbIpRestrictionDeleteDelete',
		value: 'M3dbIpRestrictionDeleteDelete',
		action: 'Deletes the given IP from the restricted IPs of the m3db',
		execute: m3dbIpRestrictionDeleteDeleteExecute,
		description: m3dbIpRestrictionDeleteDeleteDescription,
	},
	{
		name: 'M3dbIpRestrictionGetGet',
		value: 'M3dbIpRestrictionGetGet',
		action: 'Get m3db ip restrictions',
		execute: m3dbIpRestrictionGetGetExecute,
		description: m3dbIpRestrictionGetGetDescription,
	},
	{
		name: 'M3dbIpRestrictionUpdatePut',
		value: 'M3dbIpRestrictionUpdatePut',
		action: 'Changes the list of ip restrictions to the m3db',
		execute: m3dbIpRestrictionUpdatePutExecute,
		description: m3dbIpRestrictionUpdatePutDescription,
	},
	{
		name: 'M3dbLogKindListGet',
		value: 'M3dbLogKindListGet',
		action: 'List available log kinds',
		execute: m3dbLogKindListGetExecute,
		description: m3dbLogKindListGetDescription,
	},
	{
		name: 'M3dbLogKindGetGet',
		value: 'M3dbLogKindGetGet',
		action: 'Get a log kind',
		execute: m3dbLogKindGetGetExecute,
		description: m3dbLogKindGetGetDescription,
	},
	{
		name: 'M3dbLogSubscriptionListGet',
		value: 'M3dbLogSubscriptionListGet',
		action: 'List subscription IDs for a cluster',
		execute: m3dbLogSubscriptionListGetExecute,
		description: m3dbLogSubscriptionListGetDescription,
	},
	{
		name: 'M3dbLogSubscriptionCreatePost',
		value: 'M3dbLogSubscriptionCreatePost',
		action: 'Create subscription to log to customer for a m3db',
		execute: m3dbLogSubscriptionCreatePostExecute,
		description: m3dbLogSubscriptionCreatePostDescription,
	},
	{
		name: 'M3dbLogSubscriptionDeleteDelete',
		value: 'M3dbLogSubscriptionDeleteDelete',
		action: 'Delete a subscription',
		execute: m3dbLogSubscriptionDeleteDeleteExecute,
		description: m3dbLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'M3dbLogSubscriptionGetGet',
		value: 'M3dbLogSubscriptionGetGet',
		action: 'Get subscription details',
		execute: m3dbLogSubscriptionGetGetExecute,
		description: m3dbLogSubscriptionGetGetDescription,
	},
	{
		name: 'M3dbLogUrlCreatePost',
		value: 'M3dbLogUrlCreatePost',
		action: 'Generate a temporary URL to retrieve logs',
		execute: m3dbLogUrlCreatePostExecute,
		description: m3dbLogUrlCreatePostDescription,
	},
	{
		name: 'M3dbLogsGet',
		value: 'M3dbLogsGet',
		action: 'Retrieve the most recent m3db log messages (limited to 1000)',
		execute: m3dbLogsGetExecute,
		description: m3dbLogsGetDescription,
	},
	{
		name: 'M3dbMaintenanceListGet',
		value: 'M3dbMaintenanceListGet',
		action: 'List maintenances for the m3db cluster',
		execute: m3dbMaintenanceListGetExecute,
		description: m3dbMaintenanceListGetDescription,
	},
	{
		name: 'M3dbMaintenanceGetGet',
		value: 'M3dbMaintenanceGetGet',
		action: 'Get the maintenance for the m3db cluster',
		execute: m3dbMaintenanceGetGetExecute,
		description: m3dbMaintenanceGetGetDescription,
	},
	{
		name: 'M3dbMaintenanceApplyPost',
		value: 'M3dbMaintenanceApplyPost',
		action: 'Apply the maintenance',
		execute: m3dbMaintenanceApplyPostExecute,
		description: m3dbMaintenanceApplyPostDescription,
	},
	{
		name: 'M3dbMetricListGet',
		value: 'M3dbMetricListGet',
		action: 'List available metrics for the m3db cluster',
		execute: m3dbMetricListGetExecute,
		description: m3dbMetricListGetDescription,
	},
	{
		name: 'M3dbMetricGetGet',
		value: 'M3dbMetricGetGet',
		action: 'Get the metric values for the m3db cluster',
		execute: m3dbMetricGetGetExecute,
		description: m3dbMetricGetGetDescription,
	},
	{
		name: 'M3dbNamespaceListGet',
		value: 'M3dbNamespaceListGet',
		action: 'List namespaces of the m3db',
		execute: m3dbNamespaceListGetExecute,
		description: m3dbNamespaceListGetDescription,
	},
	{
		name: 'M3dbNamespaceCreatePost',
		value: 'M3dbNamespaceCreatePost',
		action: 'Create a new namespace on the m3db cluster',
		execute: m3dbNamespaceCreatePostExecute,
		description: m3dbNamespaceCreatePostDescription,
	},
	{
		name: 'M3dbNamespaceDeleteDelete',
		value: 'M3dbNamespaceDeleteDelete',
		action: 'Delete m3db namespace',
		execute: m3dbNamespaceDeleteDeleteExecute,
		description: m3dbNamespaceDeleteDeleteDescription,
	},
	{
		name: 'M3dbNamespaceGetGet',
		value: 'M3dbNamespaceGetGet',
		action: 'Get m3db namespaces',
		execute: m3dbNamespaceGetGetExecute,
		description: m3dbNamespaceGetGetDescription,
	},
	{
		name: 'M3dbNamespaceUpdatePut',
		value: 'M3dbNamespaceUpdatePut',
		action: 'Updates the namespace on the m3db cluster',
		execute: m3dbNamespaceUpdatePutExecute,
		description: m3dbNamespaceUpdatePutDescription,
	},
	{
		name: 'M3dbNodeListGet',
		value: 'M3dbNodeListGet',
		action: 'List nodes of the m3db',
		execute: m3dbNodeListGetExecute,
		description: m3dbNodeListGetDescription,
	},
	{
		name: 'M3dbNodeGetGet',
		value: 'M3dbNodeGetGet',
		action: 'Get m3db nodes',
		execute: m3dbNodeGetGetExecute,
		description: m3dbNodeGetGetDescription,
	},
	{
		name: 'M3dbUserListGet',
		value: 'M3dbUserListGet',
		action: 'List users of the m3db',
		execute: m3dbUserListGetExecute,
		description: m3dbUserListGetDescription,
	},
	{
		name: 'M3dbUserCreatePost',
		value: 'M3dbUserCreatePost',
		action: 'Create a new user on the m3db cluster',
		execute: m3dbUserCreatePostExecute,
		description: m3dbUserCreatePostDescription,
	},
	{
		name: 'M3dbUserDeleteDelete',
		value: 'M3dbUserDeleteDelete',
		action: 'Delete m3db user',
		execute: m3dbUserDeleteDeleteExecute,
		description: m3dbUserDeleteDeleteDescription,
	},
	{
		name: 'M3dbUserGetGet',
		value: 'M3dbUserGetGet',
		action: 'Get m3db users',
		execute: m3dbUserGetGetExecute,
		description: m3dbUserGetGetDescription,
	},
	{
		name: 'M3dbUserUpdatePut',
		value: 'M3dbUserUpdatePut',
		action: 'Updates the user on the m3db cluster',
		execute: m3dbUserUpdatePutExecute,
		description: m3dbUserUpdatePutDescription,
	},
	{
		name: 'M3dbUserCredentialsResetPost',
		value: 'M3dbUserCredentialsResetPost',
		action: 'Reset the password of a user',
		execute: m3dbUserCredentialsResetPostExecute,
		description: m3dbUserCredentialsResetPostDescription,
	},
	{
		name: 'mongodbClusterListGet',
		value: 'mongodbClusterListGet',
		action: 'List MongoDB Clusters',
		execute: mongodbClusterListGetExecute,
		description: mongodbClusterListGetDescription,
	},
	{
		name: 'mongodbClusterGetGet',
		value: 'mongodbClusterGetGet',
		action: 'Get MongoDB Cluster',
		execute: mongodbClusterGetGetExecute,
		description: mongodbClusterGetGetDescription,
	},
	{
		name: 'mongodbClusterCreatePost',
		value: 'mongodbClusterCreatePost',
		action: 'Create MongoDB Cluster',
		execute: mongodbClusterCreatePostExecute,
		description: mongodbClusterCreatePostDescription,
	},
	{
		name: 'mongodbClusterUpdatePut',
		value: 'mongodbClusterUpdatePut',
		action: 'Update MongoDB Cluster',
		execute: mongodbClusterUpdatePutExecute,
		description: mongodbClusterUpdatePutDescription,
	},
	{
		name: 'mongodbClusterDeleteDelete',
		value: 'mongodbClusterDeleteDelete',
		action: 'Delete MongoDB Cluster',
		execute: mongodbClusterDeleteDeleteExecute,
		description: mongodbClusterDeleteDeleteDescription,
	},
	{
		name: 'mongodbBackupListGet',
		value: 'mongodbBackupListGet',
		action: 'List MongoDB Backups',
		execute: mongodbBackupListGetExecute,
		description: mongodbBackupListGetDescription,
	},
	{
		name: 'mongodbBackupGetGet',
		value: 'mongodbBackupGetGet',
		action: 'Get MongoDB Backup',
		execute: mongodbBackupGetGetExecute,
		description: mongodbBackupGetGetDescription,
	},
	{
		name: 'mongodbBackupDeleteDelete',
		value: 'mongodbBackupDeleteDelete',
		action: 'Delete MongoDB Backup',
		execute: mongodbBackupDeleteDeleteExecute,
		description: mongodbBackupDeleteDeleteDescription,
	},
	{
		name: 'mongodbBackupRestorePost',
		value: 'mongodbBackupRestorePost',
		action: 'Restore MongoDB Backup',
		execute: mongodbBackupRestorePostExecute,
		description: mongodbBackupRestorePostDescription,
	},
	{
		name: 'mongodbIpRestrictionListGet',
		value: 'mongodbIpRestrictionListGet',
		action: 'List MongoDB IP Restrictions',
		execute: mongodbIpRestrictionListGetExecute,
		description: mongodbIpRestrictionListGetDescription,
	},
	{
		name: 'mongodbIpRestrictionCreatePost',
		value: 'mongodbIpRestrictionCreatePost',
		action: 'Create MongoDB IP Restriction',
		execute: mongodbIpRestrictionCreatePostExecute,
		description: mongodbIpRestrictionCreatePostDescription,
	},
	{
		name: 'mongodbIpRestrictionGetGet',
		value: 'mongodbIpRestrictionGetGet',
		action: 'Get MongoDB IP Restriction',
		execute: mongodbIpRestrictionGetGetExecute,
		description: mongodbIpRestrictionGetGetDescription,
	},
	{
		name: 'mongodbIpRestrictionUpdatePut',
		value: 'mongodbIpRestrictionUpdatePut',
		action: 'Update MongoDB IP Restriction',
		execute: mongodbIpRestrictionUpdatePutExecute,
		description: mongodbIpRestrictionUpdatePutDescription,
	},
	{
		name: 'mongodbIpRestrictionDeleteDelete',
		value: 'mongodbIpRestrictionDeleteDelete',
		action: 'Delete MongoDB IP Restriction',
		execute: mongodbIpRestrictionDeleteDeleteExecute,
		description: mongodbIpRestrictionDeleteDeleteDescription,
	},
	{
		name: 'mongodbLogKindListGet',
		value: 'mongodbLogKindListGet',
		action: 'List MongoDB Log Kinds',
		execute: mongodbLogKindListGetExecute,
		description: mongodbLogKindListGetDescription,
	},
	{
		name: 'mongodbLogKindGetGet',
		value: 'mongodbLogKindGetGet',
		action: 'Get MongoDB Log Kind',
		execute: mongodbLogKindGetGetExecute,
		description: mongodbLogKindGetGetDescription,
	},
	{
		name: 'mongodbLogSubscriptionListGet',
		value: 'mongodbLogSubscriptionListGet',
		action: 'List MongoDB Log Subscriptions',
		execute: mongodbLogSubscriptionListGetExecute,
		description: mongodbLogSubscriptionListGetDescription,
	},
	{
		name: 'mongodbLogSubscriptionCreatePost',
		value: 'mongodbLogSubscriptionCreatePost',
		action: 'Create MongoDB Log Subscription',
		execute: mongodbLogSubscriptionCreatePostExecute,
		description: mongodbLogSubscriptionCreatePostDescription,
	},
	{
		name: 'mongodbLogSubscriptionGetGet',
		value: 'mongodbLogSubscriptionGetGet',
		action: 'Get MongoDB Log Subscription',
		execute: mongodbLogSubscriptionGetGetExecute,
		description: mongodbLogSubscriptionGetGetDescription,
	},
	{
		name: 'mongodbLogSubscriptionDeleteDelete',
		value: 'mongodbLogSubscriptionDeleteDelete',
		action: 'Delete MongoDB Log Subscription',
		execute: mongodbLogSubscriptionDeleteDeleteExecute,
		description: mongodbLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'mongodbLogUrlCreatePost',
		value: 'mongodbLogUrlCreatePost',
		action: 'Create MongoDB Log URL',
		execute: mongodbLogUrlCreatePostExecute,
		description: mongodbLogUrlCreatePostDescription,
	},
	{
		name: 'mongodbLogListGet',
		value: 'mongodbLogListGet',
		action: 'List MongoDB Logs',
		execute: mongodbLogListGetExecute,
		description: mongodbLogListGetDescription,
	},
	{
		name: 'mongodbMaintenanceListGet',
		value: 'mongodbMaintenanceListGet',
		action: 'List MongoDB Maintenances',
		execute: mongodbMaintenanceListGetExecute,
		description: mongodbMaintenanceListGetDescription,
	},
	{
		name: 'mongodbMaintenanceGetGet',
		value: 'mongodbMaintenanceGetGet',
		action: 'Get MongoDB Maintenance',
		execute: mongodbMaintenanceGetGetExecute,
		description: mongodbMaintenanceGetGetDescription,
	},
	{
		name: 'mongodbMaintenanceApplyPost',
		value: 'mongodbMaintenanceApplyPost',
		action: 'Apply MongoDB Maintenance',
		execute: mongodbMaintenanceApplyPostExecute,
		description: mongodbMaintenanceApplyPostDescription,
	},
	{
		name: 'mongodbMetricListGet',
		value: 'mongodbMetricListGet',
		action: 'List MongoDB Metrics',
		execute: mongodbMetricListGetExecute,
		description: mongodbMetricListGetDescription,
	},
	{
		name: 'mongodbMetricNameGetGet',
		value: 'mongodbMetricNameGetGet',
		action: 'Get MongoDB Metric',
		execute: mongodbMetricNameGetGetExecute,
		description: mongodbMetricNameGetGetDescription,
	},
	{
		name: 'mongodbNodeListGet',
		value: 'mongodbNodeListGet',
		action: 'List MongoDB Nodes',
		execute: mongodbNodeListGetExecute,
		description: mongodbNodeListGetDescription,
	},
	{
		name: 'mongodbNodeCreatePost',
		value: 'mongodbNodeCreatePost',
		action: 'Create MongoDB Node',
		execute: mongodbNodeCreatePostExecute,
		description: mongodbNodeCreatePostDescription,
	},
	{
		name: 'mongodbNodeGetGet',
		value: 'mongodbNodeGetGet',
		action: 'Get MongoDB Node',
		execute: mongodbNodeGetGetExecute,
		description: mongodbNodeGetGetDescription,
	},
	{
		name: 'mongodbNodeUpdatePut',
		value: 'mongodbNodeUpdatePut',
		action: 'Update MongoDB Node',
		execute: mongodbNodeUpdatePutExecute,
		description: mongodbNodeUpdatePutDescription,
	},
	{
		name: 'mongodbNodeDeleteDelete',
		value: 'mongodbNodeDeleteDelete',
		action: 'Delete MongoDB Node',
		execute: mongodbNodeDeleteDeleteExecute,
		description: mongodbNodeDeleteDeleteDescription,
	},
	{
		name: 'mongodbPrometheusGetGet',
		value: 'mongodbPrometheusGetGet',
		action: 'Get MongoDB Prometheus',
		execute: mongodbPrometheusGetGetExecute,
		description: mongodbPrometheusGetGetDescription,
	},
	{
		name: 'mongodbPrometheusCredentialsResetPost',
		value: 'mongodbPrometheusCredentialsResetPost',
		action: 'Reset MongoDB Prometheus Credentials',
		execute: mongodbPrometheusCredentialsResetPostExecute,
		description: mongodbPrometheusCredentialsResetPostDescription,
	},
	{
		name: 'mongodbRestoreCreatePost',
		value: 'mongodbRestoreCreatePost',
		action: 'Restore MongoDB Cluster',
		execute: mongodbRestoreCreatePostExecute,
		description: mongodbRestoreCreatePostDescription,
	},
	{
		name: 'mongodbRoleListGet',
		value: 'mongodbRoleListGet',
		action: 'List MongoDB Roles',
		execute: mongodbRoleListGetExecute,
		description: mongodbRoleListGetDescription,
	},
	{
		name: 'mongodbUserListGet',
		value: 'mongodbUserListGet',
		action: 'List MongoDB Users',
		execute: mongodbUserListGetExecute,
		description: mongodbUserListGetDescription,
	},
	{
		name: 'mongodbUserCreatePost',
		value: 'mongodbUserCreatePost',
		action: 'Create MongoDB User',
		execute: mongodbUserCreatePostExecute,
		description: mongodbUserCreatePostDescription,
	},
	{
		name: 'mongodbUserGetGet',
		value: 'mongodbUserGetGet',
		action: 'Get MongoDB User',
		execute: mongodbUserGetGetExecute,
		description: mongodbUserGetGetDescription,
	},
	{
		name: 'mongodbUserUpdatePut',
		value: 'mongodbUserUpdatePut',
		action: 'Update MongoDB User',
		execute: mongodbUserUpdatePutExecute,
		description: mongodbUserUpdatePutDescription,
	},
	{
		name: 'mongodbUserDeleteDelete',
		value: 'mongodbUserDeleteDelete',
		action: 'Delete MongoDB User',
		execute: mongodbUserDeleteDeleteExecute,
		description: mongodbUserDeleteDeleteDescription,
	},
	{
		name: 'mongodbUserCredentialsResetPost',
		value: 'mongodbUserCredentialsResetPost',
		action: 'Reset MongoDB User Credentials',
		execute: mongodbUserCredentialsResetPostExecute,
		description: mongodbUserCredentialsResetPostDescription,
	},
	{
		name: 'mysqlClusterListGet',
		value: 'mysqlClusterListGet',
		action: 'List MySQL clusters in a project',
		execute: mysqlClusterListGetExecute,
		description: mysqlClusterListGetDescription,
	},
	{
		name: 'mysqlClusterGetGet',
		value: 'mysqlClusterGetGet',
		action: 'Get MySQL cluster',
		execute: mysqlClusterGetGetExecute,
		description: mysqlClusterGetGetDescription,
	},
	{
		name: 'mysqlClusterCreatePost',
		value: 'mysqlClusterCreatePost',
		action: 'Create MySQL cluster',
		execute: mysqlClusterCreatePostExecute,
		description: mysqlClusterCreatePostDescription,
	},
	{
		name: 'mysqlClusterUpdatePut',
		value: 'mysqlClusterUpdatePut',
		action: 'Update MySQL cluster',
		execute: mysqlClusterUpdatePutExecute,
		description: mysqlClusterUpdatePutDescription,
	},
	{
		name: 'mysqlClusterDeleteDelete',
		value: 'mysqlClusterDeleteDelete',
		action: 'Delete MySQL cluster',
		execute: mysqlClusterDeleteDeleteExecute,
		description: mysqlClusterDeleteDeleteDescription,
	},
	{
		name: 'mysqlBackupListGet',
		value: 'mysqlBackupListGet',
		action: 'List MySQL backups',
		execute: mysqlBackupListGetExecute,
		description: mysqlBackupListGetDescription,
	},
	{
		name: 'mysqlBackupCreatePost',
		value: 'mysqlBackupCreatePost',
		action: 'Create MySQL backup',
		execute: mysqlBackupCreatePostExecute,
		description: mysqlBackupCreatePostDescription,
	},
	{
		name: 'mysqlBackupGetGet',
		value: 'mysqlBackupGetGet',
		action: 'Get MySQL backup',
		execute: mysqlBackupGetGetExecute,
		description: mysqlBackupGetGetDescription,
	},
	{
		name: 'mysqlBackupDeleteDelete',
		value: 'mysqlBackupDeleteDelete',
		action: 'Delete MySQL backup',
		execute: mysqlBackupDeleteDeleteExecute,
		description: mysqlBackupDeleteDeleteDescription,
	},
	{
		name: 'mysqlUserListGet',
		value: 'mysqlUserListGet',
		action: 'List MySQL users',
		execute: mysqlUserListGetExecute,
		description: mysqlUserListGetDescription,
	},
	{
		name: 'mysqlUserCreatePost',
		value: 'mysqlUserCreatePost',
		action: 'Create MySQL user',
		execute: mysqlUserCreatePostExecute,
		description: mysqlUserCreatePostDescription,
	},
	{
		name: 'mysqlUserGetGet',
		value: 'mysqlUserGetGet',
		action: 'Get MySQL user',
		execute: mysqlUserGetGetExecute,
		description: mysqlUserGetGetDescription,
	},
	{
		name: 'mysqlUserUpdatePut',
		value: 'mysqlUserUpdatePut',
		action: 'Update MySQL user',
		execute: mysqlUserUpdatePutExecute,
		description: mysqlUserUpdatePutDescription,
	},
	{
		name: 'mysqlUserDeleteDelete',
		value: 'mysqlUserDeleteDelete',
		action: 'Delete MySQL user',
		execute: mysqlUserDeleteDeleteExecute,
		description: mysqlUserDeleteDeleteDescription,
	},
	{
		name: 'mysqlNodeListGet',
		value: 'mysqlNodeListGet',
		action: 'List MySQL nodes',
		execute: mysqlNodeListGetExecute,
		description: mysqlNodeListGetDescription,
	},
	{
		name: 'mysqlNodeCreatePost',
		value: 'mysqlNodeCreatePost',
		action: 'Create MySQL node',
		execute: mysqlNodeCreatePostExecute,
		description: mysqlNodeCreatePostDescription,
	},
	{
		name: 'mysqlNodeGetGet',
		value: 'mysqlNodeGetGet',
		action: 'Get MySQL node',
		execute: mysqlNodeGetGetExecute,
		description: mysqlNodeGetGetDescription,
	},
	{
		name: 'mysqlNodeUpdatePut',
		value: 'mysqlNodeUpdatePut',
		action: 'Update MySQL node',
		execute: mysqlNodeUpdatePutExecute,
		description: mysqlNodeUpdatePutDescription,
	},
	{
		name: 'mysqlNodeDeleteDelete',
		value: 'mysqlNodeDeleteDelete',
		action: 'Delete MySQL node',
		execute: mysqlNodeDeleteDeleteExecute,
		description: mysqlNodeDeleteDeleteDescription,
	},
	{
		name: 'mysqlIpRestrictionListGet',
		value: 'mysqlIpRestrictionListGet',
		action: 'List MySQL IP restrictions',
		execute: mysqlIpRestrictionListGetExecute,
		description: mysqlIpRestrictionListGetDescription,
	},
	{
		name: 'mysqlIpRestrictionCreatePost',
		value: 'mysqlIpRestrictionCreatePost',
		action: 'Create MySQL IP restriction',
		execute: mysqlIpRestrictionCreatePostExecute,
		description: mysqlIpRestrictionCreatePostDescription,
	},
	{
		name: 'mysqlLogSubscriptionListGet',
		value: 'mysqlLogSubscriptionListGet',
		action: 'List MySQL log subscriptions',
		execute: mysqlLogSubscriptionListGetExecute,
		description: mysqlLogSubscriptionListGetDescription,
	},
	{
		name: 'mysqlLogSubscriptionCreatePost',
		value: 'mysqlLogSubscriptionCreatePost',
		action: 'Create MySQL log subscription',
		execute: mysqlLogSubscriptionCreatePostExecute,
		description: mysqlLogSubscriptionCreatePostDescription,
	},
	{
		name: 'mysqlLogSubscriptionGetGet',
		value: 'mysqlLogSubscriptionGetGet',
		action: 'Get MySQL log subscription',
		execute: mysqlLogSubscriptionGetGetExecute,
		description: mysqlLogSubscriptionGetGetDescription,
	},
	{
		name: 'mysqlMaintenanceGet',
		value: 'mysqlMaintenanceGet',
		action: 'Get MySQL maintenance',
		execute: mysqlMaintenanceGetExecute,
		description: mysqlMaintenanceGetDescription,
	},
	{
		name: 'mysqlMaintenanceUpdatePut',
		value: 'mysqlMaintenanceUpdatePut',
		action: 'Update MySQL maintenance',
		execute: mysqlMaintenanceUpdatePutExecute,
		description: mysqlMaintenanceUpdatePutDescription,
	},
	{
		name: 'mysqlMetricGet',
		value: 'mysqlMetricGet',
		action: 'Get MySQL metric',
		execute: mysqlMetricGetExecute,
		description: mysqlMetricGetDescription,
	},
	{
		name: 'mysqlPrometheusGet',
		value: 'mysqlPrometheusGet',
		action: 'Get MySQL prometheus',
		execute: mysqlPrometheusGetExecute,
		description: mysqlPrometheusGetDescription,
	},
	{
		name: 'mysqlCertificateListGet',
		value: 'mysqlCertificateListGet',
		action: 'List MySQL certificates',
		execute: mysqlCertificateListGetExecute,
		description: mysqlCertificateListGetDescription,
	},
	{
		name: 'mysqlCertificateCreatePost',
		value: 'mysqlCertificateCreatePost',
		action: 'Create MySQL certificate',
		execute: mysqlCertificateCreatePostExecute,
		description: mysqlCertificateCreatePostDescription,
	},
	{
		name: 'mysqlIntegrationListGet',
		value: 'mysqlIntegrationListGet',
		action: 'List MySQL integrations',
		execute: mysqlIntegrationListGetExecute,
		description: mysqlIntegrationListGetDescription,
	},
	{
		name: 'mysqlIntegrationCreatePost',
		value: 'mysqlIntegrationCreatePost',
		action: 'Create MySQL integration',
		execute: mysqlIntegrationCreatePostExecute,
		description: mysqlIntegrationCreatePostDescription,
	},
	{
		name: 'opensearchAdvancedConfigurationListGet',
		value: 'opensearchAdvancedConfigurationListGet',
		action: 'List Advanced Configuration OpenSearch',
		execute: opensearchAdvancedConfigurationListGetExecute,
		description: opensearchAdvancedConfigurationListGetDescription,
	},
	{
		name: 'opensearchAdvancedConfigurationUpdatePut',
		value: 'opensearchAdvancedConfigurationUpdatePut',
		action: 'Update Advanced Configuration OpenSearch',
		execute: opensearchAdvancedConfigurationUpdatePutExecute,
		description: opensearchAdvancedConfigurationUpdatePutDescription,
	},
	{
		name: 'opensearchBackupGetGet',
		value: 'opensearchBackupGetGet',
		action: 'Get Backup OpenSearch',
		execute: opensearchBackupGetGetExecute,
		description: opensearchBackupGetGetDescription,
	},
	{
		name: 'opensearchBackupListGet',
		value: 'opensearchBackupListGet',
		action: 'List Backup OpenSearch',
		execute: opensearchBackupListGetExecute,
		description: opensearchBackupListGetDescription,
	},
	{
		name: 'opensearchCapabilitiesAdvancedConfigurationListGet',
		value: 'opensearchCapabilitiesAdvancedConfigurationListGet',
		action: 'List Capabilities Advanced Configuration OpenSearch',
		execute: opensearchCapabilitiesAdvancedConfigurationListGetExecute,
		description: opensearchCapabilitiesAdvancedConfigurationListGetDescription,
	},
	{
		name: 'opensearchCapabilitiesBackupRegionsListGet',
		value: 'opensearchCapabilitiesBackupRegionsListGet',
		action: 'List Capabilities Backup Regions OpenSearch',
		execute: opensearchCapabilitiesBackupRegionsListGetExecute,
		description: opensearchCapabilitiesBackupRegionsListGetDescription,
	},
	{
		name: 'opensearchCapabilitiesIntegrationListGet',
		value: 'opensearchCapabilitiesIntegrationListGet',
		action: 'List Capabilities Integration OpenSearch',
		execute: opensearchCapabilitiesIntegrationListGetExecute,
		description: opensearchCapabilitiesIntegrationListGetDescription,
	},
	{
		name: 'opensearchClusterCreatePost',
		value: 'opensearchClusterCreatePost',
		action: 'Create Cluster OpenSearch',
		execute: opensearchClusterCreatePostExecute,
		description: opensearchClusterCreatePostDescription,
	},
	{
		name: 'opensearchClusterDeleteDelete',
		value: 'opensearchClusterDeleteDelete',
		action: 'Delete Cluster OpenSearch',
		execute: opensearchClusterDeleteDeleteExecute,
		description: opensearchClusterDeleteDeleteDescription,
	},
	{
		name: 'opensearchClusterGetGet',
		value: 'opensearchClusterGetGet',
		action: 'Get Cluster OpenSearch',
		execute: opensearchClusterGetGetExecute,
		description: opensearchClusterGetGetDescription,
	},
	{
		name: 'opensearchClusterListGet',
		value: 'opensearchClusterListGet',
		action: 'List Cluster OpenSearch',
		execute: opensearchClusterListGetExecute,
		description: opensearchClusterListGetDescription,
	},
	{
		name: 'opensearchClusterUpdatePut',
		value: 'opensearchClusterUpdatePut',
		action: 'Update Cluster OpenSearch',
		execute: opensearchClusterUpdatePutExecute,
		description: opensearchClusterUpdatePutDescription,
	},
	{
		name: 'opensearchIndexDeleteDelete',
		value: 'opensearchIndexDeleteDelete',
		action: 'Delete Index OpenSearch',
		execute: opensearchIndexDeleteDeleteExecute,
		description: opensearchIndexDeleteDeleteDescription,
	},
	{
		name: 'opensearchIndexGetGet',
		value: 'opensearchIndexGetGet',
		action: 'Get Index OpenSearch',
		execute: opensearchIndexGetGetExecute,
		description: opensearchIndexGetGetDescription,
	},
	{
		name: 'opensearchIndexListGet',
		value: 'opensearchIndexListGet',
		action: 'List Index OpenSearch',
		execute: opensearchIndexListGetExecute,
		description: opensearchIndexListGetDescription,
	},
	{
		name: 'opensearchIntegrationCreatePost',
		value: 'opensearchIntegrationCreatePost',
		action: 'Create Integration OpenSearch',
		execute: opensearchIntegrationCreatePostExecute,
		description: opensearchIntegrationCreatePostDescription,
	},
	{
		name: 'opensearchIntegrationDeleteDelete',
		value: 'opensearchIntegrationDeleteDelete',
		action: 'Delete Integration OpenSearch',
		execute: opensearchIntegrationDeleteDeleteExecute,
		description: opensearchIntegrationDeleteDeleteDescription,
	},
	{
		name: 'opensearchIntegrationGetGet',
		value: 'opensearchIntegrationGetGet',
		action: 'Get Integration OpenSearch',
		execute: opensearchIntegrationGetGetExecute,
		description: opensearchIntegrationGetGetDescription,
	},
	{
		name: 'opensearchIntegrationListGet',
		value: 'opensearchIntegrationListGet',
		action: 'List Integration OpenSearch',
		execute: opensearchIntegrationListGetExecute,
		description: opensearchIntegrationListGetDescription,
	},
	{
		name: 'opensearchIpRestrictionCreatePost',
		value: 'opensearchIpRestrictionCreatePost',
		action: 'Create Ip Restriction OpenSearch',
		execute: opensearchIpRestrictionCreatePostExecute,
		description: opensearchIpRestrictionCreatePostDescription,
	},
	{
		name: 'opensearchIpRestrictionDeleteDelete',
		value: 'opensearchIpRestrictionDeleteDelete',
		action: 'Delete Ip Restriction OpenSearch',
		execute: opensearchIpRestrictionDeleteDeleteExecute,
		description: opensearchIpRestrictionDeleteDeleteDescription,
	},
	{
		name: 'opensearchIpRestrictionGetGet',
		value: 'opensearchIpRestrictionGetGet',
		action: 'Get Ip Restriction OpenSearch',
		execute: opensearchIpRestrictionGetGetExecute,
		description: opensearchIpRestrictionGetGetDescription,
	},
	{
		name: 'opensearchIpRestrictionListGet',
		value: 'opensearchIpRestrictionListGet',
		action: 'List Ip Restriction OpenSearch',
		execute: opensearchIpRestrictionListGetExecute,
		description: opensearchIpRestrictionListGetDescription,
	},
	{
		name: 'opensearchIpRestrictionUpdatePut',
		value: 'opensearchIpRestrictionUpdatePut',
		action: 'Update Ip Restriction OpenSearch',
		execute: opensearchIpRestrictionUpdatePutExecute,
		description: opensearchIpRestrictionUpdatePutDescription,
	},
	{
		name: 'opensearchLogKindGet',
		value: 'opensearchLogKindGet',
		action: 'Cluster OpenSearch',
		execute: opensearchLogKindGetExecute,
		description: opensearchLogKindGetDescription,
	},
	{
		name: 'opensearchLogKindListGet',
		value: 'opensearchLogKindListGet',
		action: 'List Log Kind OpenSearch',
		execute: opensearchLogKindListGetExecute,
		description: opensearchLogKindListGetDescription,
	},
	{
		name: 'opensearchLogSubscriptionCreatePost',
		value: 'opensearchLogSubscriptionCreatePost',
		action: 'Create Log Subscription OpenSearch',
		execute: opensearchLogSubscriptionCreatePostExecute,
		description: opensearchLogSubscriptionCreatePostDescription,
	},
	{
		name: 'opensearchLogSubscriptionDeleteDelete',
		value: 'opensearchLogSubscriptionDeleteDelete',
		action: 'Delete Log Subscription OpenSearch',
		execute: opensearchLogSubscriptionDeleteDeleteExecute,
		description: opensearchLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'opensearchLogSubscriptionGet',
		value: 'opensearchLogSubscriptionGet',
		action: 'Cluster OpenSearch',
		execute: opensearchLogSubscriptionGetExecute,
		description: opensearchLogSubscriptionGetDescription,
	},
	{
		name: 'opensearchLogSubscriptionListGet',
		value: 'opensearchLogSubscriptionListGet',
		action: 'List Log Subscription OpenSearch',
		execute: opensearchLogSubscriptionListGetExecute,
		description: opensearchLogSubscriptionListGetDescription,
	},
	{
		name: 'opensearchLogUrlCreatePost',
		value: 'opensearchLogUrlCreatePost',
		action: 'Create Log Url OpenSearch',
		execute: opensearchLogUrlCreatePostExecute,
		description: opensearchLogUrlCreatePostDescription,
	},
	{
		name: 'opensearchLogsListGet',
		value: 'opensearchLogsListGet',
		action: 'List Logs OpenSearch',
		execute: opensearchLogsListGetExecute,
		description: opensearchLogsListGetDescription,
	},
	{
		name: 'opensearchMaintenanceApplyPost',
		value: 'opensearchMaintenanceApplyPost',
		action: 'Cluster OpenSearch',
		execute: opensearchMaintenanceApplyPostExecute,
		description: opensearchMaintenanceApplyPostDescription,
	},
	{
		name: 'opensearchMaintenanceGetGet',
		value: 'opensearchMaintenanceGetGet',
		action: 'Get Maintenance OpenSearch',
		execute: opensearchMaintenanceGetGetExecute,
		description: opensearchMaintenanceGetGetDescription,
	},
	{
		name: 'opensearchMaintenanceListGet',
		value: 'opensearchMaintenanceListGet',
		action: 'List Maintenance OpenSearch',
		execute: opensearchMaintenanceListGetExecute,
		description: opensearchMaintenanceListGetDescription,
	},
	{
		name: 'opensearchMetricGetGet',
		value: 'opensearchMetricGetGet',
		action: 'Get Metric OpenSearch',
		execute: opensearchMetricGetGetExecute,
		description: opensearchMetricGetGetDescription,
	},
	{
		name: 'opensearchMetricListGet',
		value: 'opensearchMetricListGet',
		action: 'List Metric OpenSearch',
		execute: opensearchMetricListGetExecute,
		description: opensearchMetricListGetDescription,
	},
	{
		name: 'opensearchNodeGetGet',
		value: 'opensearchNodeGetGet',
		action: 'Get Node OpenSearch',
		execute: opensearchNodeGetGetExecute,
		description: opensearchNodeGetGetDescription,
	},
	{
		name: 'opensearchNodeListGet',
		value: 'opensearchNodeListGet',
		action: 'List Node OpenSearch',
		execute: opensearchNodeListGetExecute,
		description: opensearchNodeListGetDescription,
	},
	{
		name: 'opensearchPatternCreatePost',
		value: 'opensearchPatternCreatePost',
		action: 'Create Pattern OpenSearch',
		execute: opensearchPatternCreatePostExecute,
		description: opensearchPatternCreatePostDescription,
	},
	{
		name: 'opensearchPatternDeleteDelete',
		value: 'opensearchPatternDeleteDelete',
		action: 'Delete Pattern OpenSearch',
		execute: opensearchPatternDeleteDeleteExecute,
		description: opensearchPatternDeleteDeleteDescription,
	},
	{
		name: 'opensearchPatternGetGet',
		value: 'opensearchPatternGetGet',
		action: 'Get Pattern OpenSearch',
		execute: opensearchPatternGetGetExecute,
		description: opensearchPatternGetGetDescription,
	},
	{
		name: 'opensearchPatternListGet',
		value: 'opensearchPatternListGet',
		action: 'List Pattern OpenSearch',
		execute: opensearchPatternListGetExecute,
		description: opensearchPatternListGetDescription,
	},
	{
		name: 'opensearchPermissionsListGet',
		value: 'opensearchPermissionsListGet',
		action: 'List Permissions OpenSearch',
		execute: opensearchPermissionsListGetExecute,
		description: opensearchPermissionsListGetDescription,
	},
	{
		name: 'opensearchPrometheusCredentialsResetPost',
		value: 'opensearchPrometheusCredentialsResetPost',
		action: 'Cluster OpenSearch',
		execute: opensearchPrometheusCredentialsResetPostExecute,
		description: opensearchPrometheusCredentialsResetPostDescription,
	},
	{
		name: 'opensearchPrometheusListGet',
		value: 'opensearchPrometheusListGet',
		action: 'List Prometheus OpenSearch',
		execute: opensearchPrometheusListGetExecute,
		description: opensearchPrometheusListGetDescription,
	},
	{
		name: 'opensearchUserCreatePost',
		value: 'opensearchUserCreatePost',
		action: 'Create User OpenSearch',
		execute: opensearchUserCreatePostExecute,
		description: opensearchUserCreatePostDescription,
	},
	{
		name: 'opensearchUserCredentialsResetPost',
		value: 'opensearchUserCredentialsResetPost',
		action: 'Cluster OpenSearch',
		execute: opensearchUserCredentialsResetPostExecute,
		description: opensearchUserCredentialsResetPostDescription,
	},
	{
		name: 'opensearchUserDeleteDelete',
		value: 'opensearchUserDeleteDelete',
		action: 'Delete User OpenSearch',
		execute: opensearchUserDeleteDeleteExecute,
		description: opensearchUserDeleteDeleteDescription,
	},
	{
		name: 'opensearchUserGetGet',
		value: 'opensearchUserGetGet',
		action: 'Get User OpenSearch',
		execute: opensearchUserGetGetExecute,
		description: opensearchUserGetGetDescription,
	},
	{
		name: 'opensearchUserListGet',
		value: 'opensearchUserListGet',
		action: 'List User OpenSearch',
		execute: opensearchUserListGetExecute,
		description: opensearchUserListGetDescription,
	},
	{
		name: 'opensearchUserUpdatePut',
		value: 'opensearchUserUpdatePut',
		action: 'Update User OpenSearch',
		execute: opensearchUserUpdatePutExecute,
		description: opensearchUserUpdatePutDescription,
	},
	{
		name: 'postgresqlClusterListGet',
		value: 'postgresqlClusterListGet',
		action: 'List PostgreSQL clusters in a project',
		execute: postgresqlClusterListGetExecute,
		description: postgresqlClusterListGetDescription,
	},
	{
		name: 'postgresqlClusterGetGet',
		value: 'postgresqlClusterGetGet',
		action: 'Get PostgreSQL cluster',
		execute: postgresqlClusterGetGetExecute,
		description: postgresqlClusterGetGetDescription,
	},
	{
		name: 'postgresqlClusterCreatePost',
		value: 'postgresqlClusterCreatePost',
		action: 'Create PostgreSQL cluster',
		execute: postgresqlClusterCreatePostExecute,
		description: postgresqlClusterCreatePostDescription,
	},
	{
		name: 'postgresqlClusterUpdatePut',
		value: 'postgresqlClusterUpdatePut',
		action: 'Update PostgreSQL cluster',
		execute: postgresqlClusterUpdatePutExecute,
		description: postgresqlClusterUpdatePutDescription,
	},
	{
		name: 'postgresqlClusterDeleteDelete',
		value: 'postgresqlClusterDeleteDelete',
		action: 'Delete PostgreSQL cluster',
		execute: postgresqlClusterDeleteDeleteExecute,
		description: postgresqlClusterDeleteDeleteDescription,
	},
	{
		name: 'postgresqlBackupListGet',
		value: 'postgresqlBackupListGet',
		action: 'List PostgreSQL backups',
		execute: postgresqlBackupListGetExecute,
		description: postgresqlBackupListGetDescription,
	},
	{
		name: 'postgresqlBackupCreatePost',
		value: 'postgresqlBackupCreatePost',
		action: 'Create PostgreSQL backup',
		execute: postgresqlBackupCreatePostExecute,
		description: postgresqlBackupCreatePostDescription,
	},
	{
		name: 'postgresqlBackupGetGet',
		value: 'postgresqlBackupGetGet',
		action: 'Get PostgreSQL backup',
		execute: postgresqlBackupGetGetExecute,
		description: postgresqlBackupGetGetDescription,
	},
	{
		name: 'postgresqlBackupDeleteDelete',
		value: 'postgresqlBackupDeleteDelete',
		action: 'Delete PostgreSQL backup',
		execute: postgresqlBackupDeleteDeleteExecute,
		description: postgresqlBackupDeleteDeleteDescription,
	},
	{
		name: 'postgresqlUserListGet',
		value: 'postgresqlUserListGet',
		action: 'List PostgreSQL users',
		execute: postgresqlUserListGetExecute,
		description: postgresqlUserListGetDescription,
	},
	{
		name: 'postgresqlUserCreatePost',
		value: 'postgresqlUserCreatePost',
		action: 'Create PostgreSQL user',
		execute: postgresqlUserCreatePostExecute,
		description: postgresqlUserCreatePostDescription,
	},
	{
		name: 'postgresqlUserGetGet',
		value: 'postgresqlUserGetGet',
		action: 'Get PostgreSQL user',
		execute: postgresqlUserGetGetExecute,
		description: postgresqlUserGetGetDescription,
	},
	{
		name: 'postgresqlUserUpdatePut',
		value: 'postgresqlUserUpdatePut',
		action: 'Update PostgreSQL user',
		execute: postgresqlUserUpdatePutExecute,
		description: postgresqlUserUpdatePutDescription,
	},
	{
		name: 'postgresqlUserDeleteDelete',
		value: 'postgresqlUserDeleteDelete',
		action: 'Delete PostgreSQL user',
		execute: postgresqlUserDeleteDeleteExecute,
		description: postgresqlUserDeleteDeleteDescription,
	},
	{
		name: 'postgresqlNodeListGet',
		value: 'postgresqlNodeListGet',
		action: 'List PostgreSQL nodes',
		execute: postgresqlNodeListGetExecute,
		description: postgresqlNodeListGetDescription,
	},
	{
		name: 'postgresqlNodeCreatePost',
		value: 'postgresqlNodeCreatePost',
		action: 'Create PostgreSQL node',
		execute: postgresqlNodeCreatePostExecute,
		description: postgresqlNodeCreatePostDescription,
	},
	{
		name: 'postgresqlNodeGetGet',
		value: 'postgresqlNodeGetGet',
		action: 'Get PostgreSQL node',
		execute: postgresqlNodeGetGetExecute,
		description: postgresqlNodeGetGetDescription,
	},
	{
		name: 'postgresqlNodeUpdatePut',
		value: 'postgresqlNodeUpdatePut',
		action: 'Update PostgreSQL node',
		execute: postgresqlNodeUpdatePutExecute,
		description: postgresqlNodeUpdatePutDescription,
	},
	{
		name: 'postgresqlNodeDeleteDelete',
		value: 'postgresqlNodeDeleteDelete',
		action: 'Delete PostgreSQL node',
		execute: postgresqlNodeDeleteDeleteExecute,
		description: postgresqlNodeDeleteDeleteDescription,
	},
	{
		name: 'postgresqlIpRestrictionListGet',
		value: 'postgresqlIpRestrictionListGet',
		action: 'List PostgreSQL IP restrictions',
		execute: postgresqlIpRestrictionListGetExecute,
		description: postgresqlIpRestrictionListGetDescription,
	},
	{
		name: 'postgresqlIpRestrictionCreatePost',
		value: 'postgresqlIpRestrictionCreatePost',
		action: 'Create PostgreSQL IP restriction',
		execute: postgresqlIpRestrictionCreatePostExecute,
		description: postgresqlIpRestrictionCreatePostDescription,
	},
	{
		name: 'postgresqlLogSubscriptionListGet',
		value: 'postgresqlLogSubscriptionListGet',
		action: 'List PostgreSQL log subscriptions',
		execute: postgresqlLogSubscriptionListGetExecute,
		description: postgresqlLogSubscriptionListGetDescription,
	},
	{
		name: 'postgresqlLogSubscriptionCreatePost',
		value: 'postgresqlLogSubscriptionCreatePost',
		action: 'Create PostgreSQL log subscription',
		execute: postgresqlLogSubscriptionCreatePostExecute,
		description: postgresqlLogSubscriptionCreatePostDescription,
	},
	{
		name: 'postgresqlLogSubscriptionGetGet',
		value: 'postgresqlLogSubscriptionGetGet',
		action: 'Get PostgreSQL log subscription',
		execute: postgresqlLogSubscriptionGetGetExecute,
		description: postgresqlLogSubscriptionGetGetDescription,
	},
	{
		name: 'postgresqlMaintenanceGet',
		value: 'postgresqlMaintenanceGet',
		action: 'Get PostgreSQL maintenance',
		execute: postgresqlMaintenanceGetExecute,
		description: postgresqlMaintenanceGetDescription,
	},
	{
		name: 'postgresqlMaintenanceUpdatePut',
		value: 'postgresqlMaintenanceUpdatePut',
		action: 'Update PostgreSQL maintenance',
		execute: postgresqlMaintenanceUpdatePutExecute,
		description: postgresqlMaintenanceUpdatePutDescription,
	},
	{
		name: 'postgresqlMetricGet',
		value: 'postgresqlMetricGet',
		action: 'Get PostgreSQL metric',
		execute: postgresqlMetricGetExecute,
		description: postgresqlMetricGetDescription,
	},
	{
		name: 'postgresqlPrometheusGet',
		value: 'postgresqlPrometheusGet',
		action: 'Get PostgreSQL prometheus',
		execute: postgresqlPrometheusGetExecute,
		description: postgresqlPrometheusGetDescription,
	},
	{
		name: 'postgresqlCertificateListGet',
		value: 'postgresqlCertificateListGet',
		action: 'List PostgreSQL certificates',
		execute: postgresqlCertificateListGetExecute,
		description: postgresqlCertificateListGetDescription,
	},
	{
		name: 'postgresqlCertificateCreatePost',
		value: 'postgresqlCertificateCreatePost',
		action: 'Create PostgreSQL certificate',
		execute: postgresqlCertificateCreatePostExecute,
		description: postgresqlCertificateCreatePostDescription,
	},
	{
		name: 'postgresqlIntegrationListGet',
		value: 'postgresqlIntegrationListGet',
		action: 'List PostgreSQL integrations',
		execute: postgresqlIntegrationListGetExecute,
		description: postgresqlIntegrationListGetDescription,
	},
	{
		name: 'postgresqlIntegrationCreatePost',
		value: 'postgresqlIntegrationCreatePost',
		action: 'Create PostgreSQL integration',
		execute: postgresqlIntegrationCreatePostExecute,
		description: postgresqlIntegrationCreatePostDescription,
	},
	{
		name: 'valkeyClusterListGet',
		value: 'valkeyClusterListGet',
		action: 'List Valkey clusters in a project',
		execute: valkeyClusterListGetExecute,
		description: valkeyClusterListGetDescription,
	},
	{
		name: 'valkeyClusterGetGet',
		value: 'valkeyClusterGetGet',
		action: 'Get Valkey cluster',
		execute: valkeyClusterGetGetExecute,
		description: valkeyClusterGetGetDescription,
	},
	{
		name: 'valkeyClusterCreatePost',
		value: 'valkeyClusterCreatePost',
		action: 'Create Valkey cluster',
		execute: valkeyClusterCreatePostExecute,
		description: valkeyClusterCreatePostDescription,
	},
	{
		name: 'valkeyClusterUpdatePut',
		value: 'valkeyClusterUpdatePut',
		action: 'Update Valkey cluster',
		execute: valkeyClusterUpdatePutExecute,
		description: valkeyClusterUpdatePutDescription,
	},
	{
		name: 'valkeyClusterDeleteDelete',
		value: 'valkeyClusterDeleteDelete',
		action: 'Delete Valkey cluster',
		execute: valkeyClusterDeleteDeleteExecute,
		description: valkeyClusterDeleteDeleteDescription,
	},
	{
		name: 'valkeyBackupListGet',
		value: 'valkeyBackupListGet',
		action: 'List Valkey backups',
		execute: valkeyBackupListGetExecute,
		description: valkeyBackupListGetDescription,
	},
	{
		name: 'valkeyBackupCreatePost',
		value: 'valkeyBackupCreatePost',
		action: 'Create Valkey backup',
		execute: valkeyBackupCreatePostExecute,
		description: valkeyBackupCreatePostDescription,
	},
	{
		name: 'valkeyBackupGetGet',
		value: 'valkeyBackupGetGet',
		action: 'Get Valkey backup',
		execute: valkeyBackupGetGetExecute,
		description: valkeyBackupGetGetDescription,
	},
	{
		name: 'valkeyBackupDeleteDelete',
		value: 'valkeyBackupDeleteDelete',
		action: 'Delete Valkey backup',
		execute: valkeyBackupDeleteDeleteExecute,
		description: valkeyBackupDeleteDeleteDescription,
	},
	{
		name: 'valkeyUserListGet',
		value: 'valkeyUserListGet',
		action: 'List Valkey users',
		execute: valkeyUserListGetExecute,
		description: valkeyUserListGetDescription,
	},
	{
		name: 'valkeyUserCreatePost',
		value: 'valkeyUserCreatePost',
		action: 'Create Valkey user',
		execute: valkeyUserCreatePostExecute,
		description: valkeyUserCreatePostDescription,
	},
	{
		name: 'valkeyUserGetGet',
		value: 'valkeyUserGetGet',
		action: 'Get Valkey user',
		execute: valkeyUserGetGetExecute,
		description: valkeyUserGetGetDescription,
	},
	{
		name: 'valkeyUserUpdatePut',
		value: 'valkeyUserUpdatePut',
		action: 'Update Valkey user',
		execute: valkeyUserUpdatePutExecute,
		description: valkeyUserUpdatePutDescription,
	},
	{
		name: 'valkeyUserDeleteDelete',
		value: 'valkeyUserDeleteDelete',
		action: 'Delete Valkey user',
		execute: valkeyUserDeleteDeleteExecute,
		description: valkeyUserDeleteDeleteDescription,
	},
	{
		name: 'valkeyNodeListGet',
		value: 'valkeyNodeListGet',
		action: 'List Valkey nodes',
		execute: valkeyNodeListGetExecute,
		description: valkeyNodeListGetDescription,
	},
	{
		name: 'valkeyNodeCreatePost',
		value: 'valkeyNodeCreatePost',
		action: 'Create Valkey node',
		execute: valkeyNodeCreatePostExecute,
		description: valkeyNodeCreatePostDescription,
	},
	{
		name: 'valkeyNodeGetGet',
		value: 'valkeyNodeGetGet',
		action: 'Get Valkey node',
		execute: valkeyNodeGetGetExecute,
		description: valkeyNodeGetGetDescription,
	},
	{
		name: 'valkeyNodeUpdatePut',
		value: 'valkeyNodeUpdatePut',
		action: 'Update Valkey node',
		execute: valkeyNodeUpdatePutExecute,
		description: valkeyNodeUpdatePutDescription,
	},
	{
		name: 'valkeyNodeDeleteDelete',
		value: 'valkeyNodeDeleteDelete',
		action: 'Delete Valkey node',
		execute: valkeyNodeDeleteDeleteExecute,
		description: valkeyNodeDeleteDeleteDescription,
	},
	{
		name: 'valkeyIpRestrictionListGet',
		value: 'valkeyIpRestrictionListGet',
		action: 'List Valkey IP restrictions',
		execute: valkeyIpRestrictionListGetExecute,
		description: valkeyIpRestrictionListGetDescription,
	},
	{
		name: 'valkeyIpRestrictionCreatePost',
		value: 'valkeyIpRestrictionCreatePost',
		action: 'Create Valkey IP restriction',
		execute: valkeyIpRestrictionCreatePostExecute,
		description: valkeyIpRestrictionCreatePostDescription,
	},
	{
		name: 'valkeyLogSubscriptionListGet',
		value: 'valkeyLogSubscriptionListGet',
		action: 'List Valkey log subscriptions',
		execute: valkeyLogSubscriptionListGetExecute,
		description: valkeyLogSubscriptionListGetDescription,
	},
	{
		name: 'valkeyLogSubscriptionCreatePost',
		value: 'valkeyLogSubscriptionCreatePost',
		action: 'Create Valkey log subscription',
		execute: valkeyLogSubscriptionCreatePostExecute,
		description: valkeyLogSubscriptionCreatePostDescription,
	},
	{
		name: 'valkeyLogSubscriptionGetGet',
		value: 'valkeyLogSubscriptionGetGet',
		action: 'Get Valkey log subscription',
		execute: valkeyLogSubscriptionGetGetExecute,
		description: valkeyLogSubscriptionGetGetDescription,
	},
	{
		name: 'valkeyMaintenanceGet',
		value: 'valkeyMaintenanceGet',
		action: 'Get Valkey maintenance',
		execute: valkeyMaintenanceGetExecute,
		description: valkeyMaintenanceGetDescription,
	},
	{
		name: 'valkeyMaintenanceUpdatePut',
		value: 'valkeyMaintenanceUpdatePut',
		action: 'Update Valkey maintenance',
		execute: valkeyMaintenanceUpdatePutExecute,
		description: valkeyMaintenanceUpdatePutDescription,
	},
	{
		name: 'valkeyMetricGet',
		value: 'valkeyMetricGet',
		action: 'Get Valkey metric',
		execute: valkeyMetricGetExecute,
		description: valkeyMetricGetDescription,
	},
	{
		name: 'valkeyPrometheusGet',
		value: 'valkeyPrometheusGet',
		action: 'Get Valkey prometheus',
		execute: valkeyPrometheusGetExecute,
		description: valkeyPrometheusGetDescription,
	},
	{
		name: 'valkeyCertificateListGet',
		value: 'valkeyCertificateListGet',
		action: 'List Valkey certificates',
		execute: valkeyCertificateListGetExecute,
		description: valkeyCertificateListGetDescription,
	},
	{
		name: 'valkeyCertificateCreatePost',
		value: 'valkeyCertificateCreatePost',
		action: 'Create Valkey certificate',
		execute: valkeyCertificateCreatePostExecute,
		description: valkeyCertificateCreatePostDescription,
	},
	{
		name: 'valkeyIntegrationListGet',
		value: 'valkeyIntegrationListGet',
		action: 'List Valkey integrations',
		execute: valkeyIntegrationListGetExecute,
		description: valkeyIntegrationListGetDescription,
	},
	{
		name: 'valkeyIntegrationCreatePost',
		value: 'valkeyIntegrationCreatePost',
		action: 'Create Valkey integration',
		execute: valkeyIntegrationCreatePostExecute,
		description: valkeyIntegrationCreatePostDescription,
	},
	{
		name: 'kubeAuditLogsPost',
		value: 'kubeAuditLogsPost',
		action: 'Create Kubernetes audit logs',
		execute: kubeAuditLogsPostExecute,
		description: kubeAuditLogsPostDescription,
	},
	{
		name: 'kubeCustomizationGet',
		value: 'kubeCustomizationGet',
		action: 'Get Kubernetes customization',
		execute: kubeCustomizationGetExecute,
		description: kubeCustomizationGetDescription,
	},
	{
		name: 'kubeCustomizationUpdatePut',
		value: 'kubeCustomizationUpdatePut',
		action: 'Update Kubernetes customization',
		execute: kubeCustomizationUpdatePutExecute,
		description: kubeCustomizationUpdatePutDescription,
	},
	{
		name: 'kubeDeleteDelete',
		value: 'kubeDeleteDelete',
		action: 'Delete Kubernetes cluster',
		execute: kubeDeleteDeleteExecute,
		description: kubeDeleteDeleteDescription,
	},
	{
		name: 'kubeFlavorsGet',
		value: 'kubeFlavorsGet',
		action: 'List Kubernetes flavors',
		execute: kubeFlavorsGetExecute,
		description: kubeFlavorsGetDescription,
	},
	{
		name: 'kubeGetGet',
		value: 'kubeGetGet',
		action: 'Get Kubernetes cluster',
		execute: kubeGetGetExecute,
		description: kubeGetGetDescription,
	},
	{
		name: 'kubeIpRestrictionsDeleteDelete',
		value: 'kubeIpRestrictionsDeleteDelete',
		action: 'Delete Kubernetes IP restriction',
		execute: kubeIpRestrictionsDeleteDeleteExecute,
		description: kubeIpRestrictionsDeleteDeleteDescription,
	},
	{
		name: 'kubeIpRestrictionsGet',
		value: 'kubeIpRestrictionsGet',
		action: 'List Kubernetes IP restrictions',
		execute: kubeIpRestrictionsGetExecute,
		description: kubeIpRestrictionsGetDescription,
	},
	{
		name: 'kubeIpRestrictionsPost',
		value: 'kubeIpRestrictionsPost',
		action: 'Create Kubernetes IP restriction',
		execute: kubeIpRestrictionsPostExecute,
		description: kubeIpRestrictionsPostDescription,
	},
	{
		name: 'kubeIpRestrictionsUpdatePut',
		value: 'kubeIpRestrictionsUpdatePut',
		action: 'Update Kubernetes IP restrictions',
		execute: kubeIpRestrictionsUpdatePutExecute,
		description: kubeIpRestrictionsUpdatePutDescription,
	},
	{
		name: 'kubeKubeconfigPost',
		value: 'kubeKubeconfigPost',
		action: 'Get Kubernetes kubeconfig',
		execute: kubeKubeconfigPostExecute,
		description: kubeKubeconfigPostDescription,
	},
	{
		name: 'kubeKubeconfigResetPost',
		value: 'kubeKubeconfigResetPost',
		action: 'Reset Kubernetes kubeconfig',
		execute: kubeKubeconfigResetPostExecute,
		description: kubeKubeconfigResetPostDescription,
	},
	{
		name: 'kubeListGet',
		value: 'kubeListGet',
		action: 'List Kubernetes clusters in a project',
		execute: kubeListGetExecute,
		description: kubeListGetDescription,
	},
	{
		name: 'kubeLogSubscriptionDeleteDelete',
		value: 'kubeLogSubscriptionDeleteDelete',
		action: 'Delete Kubernetes log subscription',
		execute: kubeLogSubscriptionDeleteDeleteExecute,
		description: kubeLogSubscriptionDeleteDeleteDescription,
	},
	{
		name: 'kubeLogSubscriptionGet',
		value: 'kubeLogSubscriptionGet',
		action: 'Get Kubernetes log subscription',
		execute: kubeLogSubscriptionGetExecute,
		description: kubeLogSubscriptionGetDescription,
	},
	{
		name: 'kubeLogSubscriptionPost',
		value: 'kubeLogSubscriptionPost',
		action: 'Create Kubernetes log subscription',
		execute: kubeLogSubscriptionPostExecute,
		description: kubeLogSubscriptionPostDescription,
	},
	{
		name: 'kubeLogSubscriptionListGet',
		value: 'kubeLogSubscriptionListGet',
		action: 'List Kubernetes log subscriptions',
		execute: kubeLogSubscriptionListGetExecute,
		description: kubeLogSubscriptionListGetDescription,
	},
	{
		name: 'kubeLogUrlPost',
		value: 'kubeLogUrlPost',
		action: 'Get Kubernetes log URL',
		execute: kubeLogUrlPostExecute,
		description: kubeLogUrlPostDescription,
	},
	{
		name: 'kubeMetricsEtcdUsageGet',
		value: 'kubeMetricsEtcdUsageGet',
		action: 'Get Kubernetes etcd usage metrics',
		execute: kubeMetricsEtcdUsageGetExecute,
		description: kubeMetricsEtcdUsageGetDescription,
	},
	{
		name: 'kubeNodeDeleteDelete',
		value: 'kubeNodeDeleteDelete',
		action: 'Delete Kubernetes node',
		execute: kubeNodeDeleteDeleteExecute,
		description: kubeNodeDeleteDeleteDescription,
	},
	{
		name: 'kubeNodeGet',
		value: 'kubeNodeGet',
		action: 'Get Kubernetes node',
		execute: kubeNodeGetExecute,
		description: kubeNodeGetDescription,
	},
	{
		name: 'kubeNodeListGet',
		value: 'kubeNodeListGet',
		action: 'List Kubernetes nodes',
		execute: kubeNodeListGetExecute,
		description: kubeNodeListGetDescription,
	},
	{
		name: 'kubeNodepoolCreatePost',
		value: 'kubeNodepoolCreatePost',
		action: 'Create Kubernetes nodepool',
		execute: kubeNodepoolCreatePostExecute,
		description: kubeNodepoolCreatePostDescription,
	},
	{
		name: 'kubeNodepoolListGet',
		value: 'kubeNodepoolListGet',
		action: 'List Kubernetes nodepools',
		execute: kubeNodepoolListGetExecute,
		description: kubeNodepoolListGetDescription,
	},
	{
		name: 'kubeNodepoolDeleteDelete',
		value: 'kubeNodepoolDeleteDelete',
		action: 'Delete Kubernetes nodepool',
		execute: kubeNodepoolDeleteDeleteExecute,
		description: kubeNodepoolDeleteDeleteDescription,
	},
	{
		name: 'kubeNodepoolGetGet',
		value: 'kubeNodepoolGetGet',
		action: 'Get Kubernetes nodepool',
		execute: kubeNodepoolGetGetExecute,
		description: kubeNodepoolGetGetDescription,
	},
	{
		name: 'kubeNodepoolListNodepoolNodesGet',
		value: 'kubeNodepoolListNodepoolNodesGet',
		action: 'List Kubernetes nodepool nodes',
		execute: kubeNodepoolListNodepoolNodesGetExecute,
		description: kubeNodepoolListNodepoolNodesGetDescription,
	},
	{
		name: 'kubeNodepoolUpdatePut',
		value: 'kubeNodepoolUpdatePut',
		action: 'Update Kubernetes nodepool',
		execute: kubeNodepoolUpdatePutExecute,
		description: kubeNodepoolUpdatePutDescription,
	},
	{
		name: 'kubeOpenIdConnectDeleteDelete',
		value: 'kubeOpenIdConnectDeleteDelete',
		action: 'Delete Kubernetes OpenID Connect configuration',
		execute: kubeOpenIdConnectDeleteDeleteExecute,
		description: kubeOpenIdConnectDeleteDeleteDescription,
	},
	{
		name: 'kubeOpenIdConnectGet',
		value: 'kubeOpenIdConnectGet',
		action: 'Get Kubernetes OpenID Connect configuration',
		execute: kubeOpenIdConnectGetExecute,
		description: kubeOpenIdConnectGetDescription,
	},
	{
		name: 'kubeOpenIdConnectPost',
		value: 'kubeOpenIdConnectPost',
		action: 'Create Kubernetes OpenID Connect configuration',
		execute: kubeOpenIdConnectPostExecute,
		description: kubeOpenIdConnectPostDescription,
	},
	{
		name: 'kubeOpenIdConnectUpdatePut',
		value: 'kubeOpenIdConnectUpdatePut',
		action: 'Update Kubernetes OpenID Connect configuration',
		execute: kubeOpenIdConnectUpdatePutExecute,
		description: kubeOpenIdConnectUpdatePutDescription,
	},
	{
		name: 'kubePrivateNetworkConfigurationGet',
		value: 'kubePrivateNetworkConfigurationGet',
		action: 'Get Kubernetes private network configuration',
		execute: kubePrivateNetworkConfigurationGetExecute,
		description: kubePrivateNetworkConfigurationGetDescription,
	},
	{
		name: 'kubePrivateNetworkConfigurationUpdatePut',
		value: 'kubePrivateNetworkConfigurationUpdatePut',
		action: 'Update Kubernetes private network configuration',
		execute: kubePrivateNetworkConfigurationUpdatePutExecute,
		description: kubePrivateNetworkConfigurationUpdatePutDescription,
	},
	{
		name: 'kubeResetPost',
		value: 'kubeResetPost',
		action: 'Reset Kubernetes cluster',
		execute: kubeResetPostExecute,
		description: kubeResetPostDescription,
	},
	{
		name: 'kubeRestartPost',
		value: 'kubeRestartPost',
		action: 'Restart Kubernetes cluster',
		execute: kubeRestartPostExecute,
		description: kubeRestartPostDescription,
	},
	{
		name: 'kubeUpdateLoadBalancersSubnetIdUpdatePut',
		value: 'kubeUpdateLoadBalancersSubnetIdUpdatePut',
		action: 'Update Kubernetes load balancer subnet ID',
		execute: kubeUpdateLoadBalancersSubnetIdUpdatePutExecute,
		description: kubeUpdateLoadBalancersSubnetIdUpdatePutDescription,
	},
	{
		name: 'kubeUpdatePolicyUpdatePut',
		value: 'kubeUpdatePolicyUpdatePut',
		action: 'Update Kubernetes update policy',
		execute: kubeUpdatePolicyUpdatePutExecute,
		description: kubeUpdatePolicyUpdatePutDescription,
	},
	{
		name: 'kubeUpdatePost',
		value: 'kubeUpdatePost',
		action: 'Update Kubernetes cluster',
		execute: kubeUpdatePostExecute,
		description: kubeUpdatePostDescription,
	},
	{
		name: 'kubeUpdatePut',
		value: 'kubeUpdatePut',
		action: 'Update Kubernetes cluster',
		execute: kubeUpdatePutExecute,
		description: kubeUpdatePutDescription,
	},
	{
		name: 'instanceActiveMonthlyBillingPost',
		value: 'instanceActiveMonthlyBillingPost',
		action: 'Activate monthly billing for instance',
		execute: instanceActiveMonthlyBillingPostExecute,
		description: instanceActiveMonthlyBillingPostDescription,
	},
	{
		name: 'instanceApplicationAccessPost',
		value: 'instanceApplicationAccessPost',
		action: 'Get instance application access',
		execute: instanceApplicationAccessPostExecute,
		description: instanceApplicationAccessPostDescription,
	},
	{
		name: 'instanceBulkPost',
		value: 'instanceBulkPost',
		action: 'Bulk create instances',
		execute: instanceBulkPostExecute,
		description: instanceBulkPostDescription,
	},
	{
		name: 'instanceCreatePost',
		value: 'instanceCreatePost',
		action: 'Create instance',
		execute: instanceCreatePostExecute,
		description: instanceCreatePostDescription,
	},
	{
		name: 'instanceDeleteDelete',
		value: 'instanceDeleteDelete',
		action: 'Delete instance',
		execute: instanceDeleteDeleteExecute,
		description: instanceDeleteDeleteDescription,
	},
	{
		name: 'instanceGetGet',
		value: 'instanceGetGet',
		action: 'Get instance',
		execute: instanceGetGetExecute,
		description: instanceGetGetDescription,
	},
	{
		name: 'instanceGroupCreatePost',
		value: 'instanceGroupCreatePost',
		action: 'Create instance group',
		execute: instanceGroupCreatePostExecute,
		description: instanceGroupCreatePostDescription,
	},
	{
		name: 'instanceGroupDeleteDelete',
		value: 'instanceGroupDeleteDelete',
		action: 'Delete instance group',
		execute: instanceGroupDeleteDeleteExecute,
		description: instanceGroupDeleteDeleteDescription,
		show: false,
	},
	{
		name: 'instanceGroupGetGet',
		value: 'instanceGroupGetGet',
		action: 'Get instance group',
		execute: instanceGroupGetGetExecute,
		description: instanceGroupGetGetDescription,
		show: false,
	},
	{
		name: 'instanceGroupListGet',
		value: 'instanceGroupListGet',
		action: 'List instance groups',
		execute: instanceGroupListGetExecute,
		description: instanceGroupListGetDescription,
		show: false,
	},
	{
		name: 'instanceInterfaceCreatePost',
		value: 'instanceInterfaceCreatePost',
		action: 'Create instance interface',
		execute: instanceInterfaceCreatePostExecute,
		description: instanceInterfaceCreatePostDescription,
	},
	{
		name: 'instanceInterfaceDeleteDelete',
		value: 'instanceInterfaceDeleteDelete',
		action: 'Delete instance interface',
		execute: instanceInterfaceDeleteDeleteExecute,
		description: instanceInterfaceDeleteDeleteDescription,
	},
	{
		name: 'instanceInterfaceGetGet',
		value: 'instanceInterfaceGetGet',
		action: 'Get instance interface',
		execute: instanceInterfaceGetGetExecute,
		description: instanceInterfaceGetGetDescription,
	},
	{
		name: 'instanceInterfaceListGet',
		value: 'instanceInterfaceListGet',
		action: 'List instance interfaces',
		execute: instanceInterfaceListGetExecute,
		description: instanceInterfaceListGetDescription,
	},
	{
		name: 'instanceListGet',
		value: 'instanceListGet',
		action: 'List instances in a project',
		execute: instanceListGetExecute,
		description: instanceListGetDescription,
		show: false,
	},
	{
		name: 'instanceRebootPost',
		value: 'instanceRebootPost',
		action: 'Reboot instance',
		execute: instanceRebootPostExecute,
		description: instanceRebootPostDescription,
	},
	{
		name: 'instanceReinstallPost',
		value: 'instanceReinstallPost',
		action: 'Reinstall instance',
		execute: instanceReinstallPostExecute,
		description: instanceReinstallPostDescription,
	},
	{
		name: 'instanceRescueModePost',
		value: 'instanceRescueModePost',
		action: 'Set instance rescue mode',
		execute: instanceRescueModePostExecute,
		description: instanceRescueModePostDescription,
	},
	{
		name: 'instanceResizePost',
		value: 'instanceResizePost',
		action: 'Resize instance',
		execute: instanceResizePostExecute,
		description: instanceResizePostDescription,
	},
	{
		name: 'instanceResumePost',
		value: 'instanceResumePost',
		action: 'Resume instance',
		execute: instanceResumePostExecute,
		description: instanceResumePostDescription,
	},
	{
		name: 'instanceShelvePost',
		value: 'instanceShelvePost',
		action: 'Shelve instance',
		execute: instanceShelvePostExecute,
		description: instanceShelvePostDescription,
	},
	{
		name: 'instanceSnapshotPost',
		value: 'instanceSnapshotPost',
		action: 'Create instance snapshot',
		execute: instanceSnapshotPostExecute,
		description: instanceSnapshotPostDescription,
	},
	{
		name: 'instanceStartPost',
		value: 'instanceStartPost',
		action: 'Start instance',
		execute: instanceStartPostExecute,
		description: instanceStartPostDescription,
	},
	{
		name: 'instanceStopPost',
		value: 'instanceStopPost',
		action: 'Stop instance',
		execute: instanceStopPostExecute,
		description: instanceStopPostDescription,
	},
	{
		name: 'instanceUnshelvePost',
		value: 'instanceUnshelvePost',
		action: 'Unshelve instance',
		execute: instanceUnshelvePostExecute,
		description: instanceUnshelvePostDescription,
	},
	{
		name: 'instanceUpdatePut',
		value: 'instanceUpdatePut',
		action: 'Update instance',
		execute: instanceUpdatePutExecute,
		description: instanceUpdatePutDescription,
	},
	{
		name: 'instanceVncPost',
		value: 'instanceVncPost',
		action: 'Get instance VNC console',
		execute: instanceVncPostExecute,
		description: instanceVncPostDescription,
	},
	{
		name: 'networkCreatePrivateNetworkPost',
		value: 'networkCreatePrivateNetworkPost',
		action: 'Create private network',
		execute: networkCreatePrivateNetworkPostExecute,
		description: networkCreatePrivateNetworkPostDescription,
	},
	{
		name: 'networkCreateSubnetPost',
		value: 'networkCreateSubnetPost',
		action: 'Create subnet',
		execute: networkCreateSubnetPostExecute,
		description: networkCreateSubnetPostDescription,
	},
	{
		name: 'networkDeletePrivateNetworkDelete',
		value: 'networkDeletePrivateNetworkDelete',
		action: 'Delete private network',
		execute: networkDeletePrivateNetworkDeleteExecute,
		description: networkDeletePrivateNetworkDeleteDescription,
	},
	{
		name: 'networkDeleteSubnetDelete',
		value: 'networkDeleteSubnetDelete',
		action: 'Delete subnet',
		execute: networkDeleteSubnetDeleteExecute,
		description: networkDeleteSubnetDeleteDescription,
	},
	{
		name: 'networkGetPrivateNetworkDetailGet',
		value: 'networkGetPrivateNetworkDetailGet',
		action: 'Get private network',
		execute: networkGetPrivateNetworkDetailGetExecute,
		description: networkGetPrivateNetworkDetailGetDescription,
	},
	{
		name: 'networkGetSubnetDetailGet',
		value: 'networkGetSubnetDetailGet',
		action: 'Get subnet',
		execute: networkGetSubnetDetailGetExecute,
		description: networkGetSubnetDetailGetDescription,
	},
	{
		name: 'networkListPrivateNetworksGet',
		value: 'networkListPrivateNetworksGet',
		action: 'List private networks in a project',
		execute: networkListPrivateNetworksGetExecute,
		description: networkListPrivateNetworksGetDescription,
	},
	{
		name: 'networkListPublicNetworksGet',
		value: 'networkListPublicNetworksGet',
		action: 'List public networks in a project',
		execute: networkListPublicNetworksGetExecute,
		description: networkListPublicNetworksGetDescription,
	},
	{
		name: 'networkListSubnetsGet',
		value: 'networkListSubnetsGet',
		action: 'List subnets in a project',
		execute: networkListSubnetsGetExecute,
		description: networkListSubnetsGetDescription,
	},
	{
		name: 'networkUpdatePrivateNetworkPut',
		value: 'networkUpdatePrivateNetworkPut',
		action: 'Update private network',
		execute: networkUpdatePrivateNetworkPutExecute,
		description: networkUpdatePrivateNetworkPutDescription,
	},
	{
		name: 'networkUpdateSubnetPut',
		value: 'networkUpdateSubnetPut',
		action: 'Update subnet',
		execute: networkUpdateSubnetPutExecute,
		description: networkUpdateSubnetPutDescription,
	},
	{
		name: 'networkActivatePrivateNetworkRegionPost',
		value: 'networkActivatePrivateNetworkRegionPost',
		action: 'Activate private network region',
		execute: networkActivatePrivateNetworkRegionPostExecute,
		description: networkActivatePrivateNetworkRegionPostDescription,
	},
	{
		name: 'regionGetGet',
		value: 'regionGetGet',
		action: 'Get region',
		execute: regionGetGetExecute,
		description: regionGetGetDescription,
	},
	{
		name: 'regionListGet',
		value: 'regionListGet',
		action: 'List regions in a project',
		execute: regionListGetExecute,
		description: regionListGetDescription,
	},
	{
		name: 'regionShareCreatePost',
		value: 'regionShareCreatePost',
		action: 'Create region share',
		execute: regionShareCreatePostExecute,
		description: regionShareCreatePostDescription,
	},
	{
		name: 'regionShareDeleteDelete',
		value: 'regionShareDeleteDelete',
		action: 'Delete region share',
		execute: regionShareDeleteDeleteExecute,
		description: regionShareDeleteDeleteDescription,
	},
	{
		name: 'regionShareGetGet',
		value: 'regionShareGetGet',
		action: 'Get region share',
		execute: regionShareGetGetExecute,
		description: regionShareGetGetDescription,
	},
	{
		name: 'regionShareListGet',
		value: 'regionShareListGet',
		action: 'List region shares',
		execute: regionShareListGetExecute,
		description: regionShareListGetDescription,
	},
	{
		name: 'regionShareSnapshotCreatePost',
		value: 'regionShareSnapshotCreatePost',
		action: 'Create region share snapshot',
		execute: regionShareSnapshotCreatePostExecute,
		description: regionShareSnapshotCreatePostDescription,
	},
	{
		name: 'regionShareSnapshotDeleteDelete',
		value: 'regionShareSnapshotDeleteDelete',
		action: 'Delete region share snapshot',
		execute: regionShareSnapshotDeleteDeleteExecute,
		description: regionShareSnapshotDeleteDeleteDescription,
	},
	{
		name: 'regionShareSnapshotGetGet',
		value: 'regionShareSnapshotGetGet',
		action: 'Get region share snapshot',
		execute: regionShareSnapshotGetGetExecute,
		description: regionShareSnapshotGetGetDescription,
	},
	{
		name: 'regionShareSnapshotListGet',
		value: 'regionShareSnapshotListGet',
		action: 'List region share snapshots',
		execute: regionShareSnapshotListGetExecute,
		description: regionShareSnapshotListGetDescription,
	},
	{
		name: 'regionShareUpdatePut',
		value: 'regionShareUpdatePut',
		action: 'Update region share',
		execute: regionShareUpdatePutExecute,
		description: regionShareUpdatePutDescription,
	},
	{
		name: 'regionVolumeCreatePost',
		value: 'regionVolumeCreatePost',
		action: 'Create region volume',
		execute: regionVolumeCreatePostExecute,
		description: regionVolumeCreatePostDescription,
	},
	{
		name: 'regionVolumeDeleteDelete',
		value: 'regionVolumeDeleteDelete',
		action: 'Delete region volume',
		execute: regionVolumeDeleteDeleteExecute,
		description: regionVolumeDeleteDeleteDescription,
	},
	{
		name: 'regionVolumeGetGet',
		value: 'regionVolumeGetGet',
		action: 'Get region volume',
		execute: regionVolumeGetGetExecute,
		description: regionVolumeGetGetDescription,
	},
	{
		name: 'regionVolumeListGet',
		value: 'regionVolumeListGet',
		action: 'List region volumes',
		execute: regionVolumeListGetExecute,
		description: regionVolumeListGetDescription,
	},
	{
		name: 'regionVolumeUpdatePut',
		value: 'regionVolumeUpdatePut',
		action: 'Update region volume',
		execute: regionVolumeUpdatePutExecute,
		description: regionVolumeUpdatePutDescription,
	},
	{
		name: 'regionWorkflowBackupCreatePost',
		value: 'regionWorkflowBackupCreatePost',
		action: 'Create region workflow backup',
		execute: regionWorkflowBackupCreatePostExecute,
		description: regionWorkflowBackupCreatePostDescription,
	},
	{
		name: 'regionWorkflowBackupDeleteDelete',
		value: 'regionWorkflowBackupDeleteDelete',
		action: 'Delete region workflow backup',
		execute: regionWorkflowBackupDeleteDeleteExecute,
		description: regionWorkflowBackupDeleteDeleteDescription,
	},
	{
		name: 'regionWorkflowBackupGetGet',
		value: 'regionWorkflowBackupGetGet',
		action: 'Get region workflow backup',
		execute: regionWorkflowBackupGetGetExecute,
		description: regionWorkflowBackupGetGetDescription,
	},
	{
		name: 'regionWorkflowBackupUpdatePut',
		value: 'regionWorkflowBackupUpdatePut',
		action: 'Update region workflow backup',
		execute: regionWorkflowBackupUpdatePutExecute,
		description: regionWorkflowBackupUpdatePutDescription,
	},
	{
		name: 'regionColdArchiveListGet',
		value: 'regionColdArchiveListGet',
		action: 'List cold archive containers',
		execute: regionColdArchiveListGetExecute,
		description: regionColdArchiveListGetDescription,
	},
	{
		name: 'regionColdArchiveCreatePost',
		value: 'regionColdArchiveCreatePost',
		action: 'Create cold archive container',
		execute: regionColdArchiveCreatePostExecute,
		description: regionColdArchiveCreatePostDescription,
	},
	{
		name: 'regionColdArchiveDeleteDelete',
		value: 'regionColdArchiveDeleteDelete',
		action: 'Delete cold archive container',
		execute: regionColdArchiveDeleteDeleteExecute,
		description: regionColdArchiveDeleteDeleteDescription,
	},
	{
		name: 'regionColdArchiveGetGet',
		value: 'regionColdArchiveGetGet',
		action: 'Get cold archive container',
		execute: regionColdArchiveGetGetExecute,
		description: regionColdArchiveGetGetDescription,
	},
	{
		name: 'regionColdArchiveArchivePost',
		value: 'regionColdArchiveArchivePost',
		action: 'Archive cold archive container',
		execute: regionColdArchiveArchivePostExecute,
		description: regionColdArchiveArchivePostDescription,
	},
	{
		name: 'regionColdArchiveDestroyPost',
		value: 'regionColdArchiveDestroyPost',
		action: 'Destroy cold archive container',
		execute: regionColdArchiveDestroyPostExecute,
		description: regionColdArchiveDestroyPostDescription,
	},
	{
		name: 'regionColdArchiveObjectDeleteDelete',
		value: 'regionColdArchiveObjectDeleteDelete',
		action: 'Delete cold archive object',
		execute: regionColdArchiveObjectDeleteDeleteExecute,
		description: regionColdArchiveObjectDeleteDeleteDescription,
	},
	{
		name: 'regionColdArchivePolicyCreatePost',
		value: 'regionColdArchivePolicyCreatePost',
		action: 'Add cold archive policy',
		execute: regionColdArchivePolicyCreatePostExecute,
		description: regionColdArchivePolicyCreatePostDescription,
	},
	{
		name: 'regionColdArchivePresignPost',
		value: 'regionColdArchivePresignPost',
		action: 'Generate cold archive presigned URL',
		execute: regionColdArchivePresignPostExecute,
		description: regionColdArchivePresignPostDescription,
	},
	{
		name: 'regionColdArchiveRestorePost',
		value: 'regionColdArchiveRestorePost',
		action: 'Restore cold archive container',
		execute: regionColdArchiveRestorePostExecute,
		description: regionColdArchiveRestorePostDescription,
	},
	{
		name: 'regionStorageListGet',
		value: 'regionStorageListGet',
		action: 'List storage containers',
		execute: regionStorageListGetExecute,
		description: regionStorageListGetDescription,
	},
	{
		name: 'regionStorageCreatePost',
		value: 'regionStorageCreatePost',
		action: 'Create storage container',
		execute: regionStorageCreatePostExecute,
		description: regionStorageCreatePostDescription,
	},
	{
		name: 'regionStorageDeleteDelete',
		value: 'regionStorageDeleteDelete',
		action: 'Delete storage container',
		execute: regionStorageDeleteDeleteExecute,
		description: regionStorageDeleteDeleteDescription,
	},
	{
		name: 'regionStorageGetGet',
		value: 'regionStorageGetGet',
		action: 'Get storage container',
		execute: regionStorageGetGetExecute,
		description: regionStorageGetGetDescription,
	},
	{
		name: 'regionStorageUpdatePut',
		value: 'regionStorageUpdatePut',
		action: 'Update storage container',
		execute: regionStorageUpdatePutExecute,
		description: regionStorageUpdatePutDescription,
	},
	{
		name: 'regionStorageBulkDeleteObjectsPost',
		value: 'regionStorageBulkDeleteObjectsPost',
		action: 'Bulk delete storage objects',
		execute: regionStorageBulkDeleteObjectsPostExecute,
		description: regionStorageBulkDeleteObjectsPostDescription,
	},
	{
		name: 'regionStorageReplicationListGet',
		value: 'regionStorageReplicationListGet',
		action: 'List storage replication jobs',
		execute: regionStorageReplicationListGetExecute,
		description: regionStorageReplicationListGetDescription,
	},
	{
		name: 'regionStorageReplicationCreatePost',
		value: 'regionStorageReplicationCreatePost',
		action: 'Create storage replication job',
		execute: regionStorageReplicationCreatePostExecute,
		description: regionStorageReplicationCreatePostDescription,
	},
	{
		name: 'regionStorageLifecycleDeleteDelete',
		value: 'regionStorageLifecycleDeleteDelete',
		action: 'Delete storage lifecycle',
		execute: regionStorageLifecycleDeleteDeleteExecute,
		description: regionStorageLifecycleDeleteDeleteDescription,
	},
	{
		name: 'regionStorageLifecycleGetGet',
		value: 'regionStorageLifecycleGetGet',
		action: 'Get storage lifecycle',
		execute: regionStorageLifecycleGetGetExecute,
		description: regionStorageLifecycleGetGetDescription,
	},
	{
		name: 'regionStorageLifecycleUpdatePut',
		value: 'regionStorageLifecycleUpdatePut',
		action: 'Update storage lifecycle',
		execute: regionStorageLifecycleUpdatePutExecute,
		description: regionStorageLifecycleUpdatePutDescription,
	},
	{
		name: 'regionStorageObjectListGet',
		value: 'regionStorageObjectListGet',
		action: 'List storage objects',
		execute: regionStorageObjectListGetExecute,
		description: regionStorageObjectListGetDescription,
	},
	{
		name: 'regionStorageObjectCreatePost',
		value: 'regionStorageObjectCreatePost',
		action: 'Create storage object',
		execute: regionStorageObjectCreatePostExecute,
		description: regionStorageObjectCreatePostDescription,
	},
	{
		name: 'regionStorageObjectDeleteDelete',
		value: 'regionStorageObjectDeleteDelete',
		action: 'Delete storage object',
		execute: regionStorageObjectDeleteDeleteExecute,
		description: regionStorageObjectDeleteDeleteDescription,
	},
	{
		name: 'regionStorageObjectGetGet',
		value: 'regionStorageObjectGetGet',
		action: 'Get storage object',
		execute: regionStorageObjectGetGetExecute,
		description: regionStorageObjectGetGetDescription,
	},
	{
		name: 'regionStorageObjectUpdatePut',
		value: 'regionStorageObjectUpdatePut',
		action: 'Update storage object',
		execute: regionStorageObjectUpdatePutExecute,
		description: regionStorageObjectUpdatePutDescription,
	},
	{
		name: 'regionStorageObjectCopyPost',
		value: 'regionStorageObjectCopyPost',
		action: 'Copy storage object',
		execute: regionStorageObjectCopyPostExecute,
		description: regionStorageObjectCopyPostDescription,
	},
	{
		name: 'regionStorageObjectRestorePost',
		value: 'regionStorageObjectRestorePost',
		action: 'Restore storage object',
		execute: regionStorageObjectRestorePostExecute,
		description: regionStorageObjectRestorePostDescription,
	},
	{
		name: 'regionStorageObjectVersionListGet',
		value: 'regionStorageObjectVersionListGet',
		action: 'List storage object versions',
		execute: regionStorageObjectVersionListGetExecute,
		description: regionStorageObjectVersionListGetDescription,
	},
	{
		name: 'regionStorageObjectVersionDeleteDelete',
		value: 'regionStorageObjectVersionDeleteDelete',
		action: 'Delete storage object version',
		execute: regionStorageObjectVersionDeleteDeleteExecute,
		description: regionStorageObjectVersionDeleteDeleteDescription,
	},
	{
		name: 'regionStorageObjectVersionGetGet',
		value: 'regionStorageObjectVersionGetGet',
		action: 'Get storage object version',
		execute: regionStorageObjectVersionGetGetExecute,
		description: regionStorageObjectVersionGetGetDescription,
	},
	{
		name: 'regionStorageObjectVersionUpdatePut',
		value: 'regionStorageObjectVersionUpdatePut',
		action: 'Update storage object version',
		execute: regionStorageObjectVersionUpdatePutExecute,
		description: regionStorageObjectVersionUpdatePutDescription,
	},
	{
		name: 'regionStorageObjectVersionCopyPost',
		value: 'regionStorageObjectVersionCopyPost',
		action: 'Copy storage object version',
		execute: regionStorageObjectVersionCopyPostExecute,
		description: regionStorageObjectVersionCopyPostDescription,
	},
	{
		name: 'regionStorageObjectVersionRestorePost',
		value: 'regionStorageObjectVersionRestorePost',
		action: 'Restore storage object version',
		execute: regionStorageObjectVersionRestorePostExecute,
		description: regionStorageObjectVersionRestorePostDescription,
	},
	{
		name: 'regionStoragePolicyCreatePost',
		value: 'regionStoragePolicyCreatePost',
		action: 'Add storage policy',
		execute: regionStoragePolicyCreatePostExecute,
		description: regionStoragePolicyCreatePostDescription,
	},
	{
		name: 'regionStoragePresignPost',
		value: 'regionStoragePresignPost',
		action: 'Generate storage presigned URL',
		execute: regionStoragePresignPostExecute,
		description: regionStoragePresignPostDescription,
	},
	{
		name: 'floatingIpListGet',
		value: 'floatingIpListGet',
		action: 'floatingIpListGet',
		execute: floatingIpListGetExecute,
		description: noProps,
	},
	{
		name: 'floatingIpCreatePost',
		value: 'floatingIpCreatePost',
		action: 'floatingIpCreatePost',
		execute: floatingIpCreatePostExecute,
		description: noProps,
	},
	{
		name: 'floatingIpGetGet',
		value: 'floatingIpGetGet',
		action: 'floatingIpGetGet',
		execute: floatingIpGetGetExecute,
		description: noProps,
	},
	{
		name: 'floatingIpDeleteDelete',
		value: 'floatingIpDeleteDelete',
		action: 'floatingIpDeleteDelete',
		execute: floatingIpDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'floatingIpDetachPost',
		value: 'floatingIpDetachPost',
		action: 'floatingIpDetachPost',
		execute: floatingIpDetachPostExecute,
		description: noProps,
	},
	{
		name: 'gatewayListGet',
		value: 'gatewayListGet',
		action: 'gatewayListGet',
		execute: gatewayListGetExecute,
		description: noProps,
	},
	{
		name: 'gatewayCreatePost',
		value: 'gatewayCreatePost',
		action: 'gatewayCreatePost',
		execute: gatewayCreatePostExecute,
		description: noProps,
	},
	{
		name: 'gatewayGetGet',
		value: 'gatewayGetGet',
		action: 'gatewayGetGet',
		execute: gatewayGetGetExecute,
		description: noProps,
	},
	{
		name: 'gatewayUpdatePut',
		value: 'gatewayUpdatePut',
		action: 'gatewayUpdatePut',
		execute: gatewayUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'gatewayDeleteDelete',
		value: 'gatewayDeleteDelete',
		action: 'gatewayDeleteDelete',
		execute: gatewayDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'gatewayExposePost',
		value: 'gatewayExposePost',
		action: 'gatewayExposePost',
		execute: gatewayExposePostExecute,
		description: noProps,
	},
	{
		name: 'gatewayInterfaceListGet',
		value: 'gatewayInterfaceListGet',
		action: 'gatewayInterfaceListGet',
		execute: gatewayInterfaceListGetExecute,
		description: noProps,
	},
	{
		name: 'gatewayInterfaceCreatePost',
		value: 'gatewayInterfaceCreatePost',
		action: 'gatewayInterfaceCreatePost',
		execute: gatewayInterfaceCreatePostExecute,
		description: noProps,
	},
	{
		name: 'gatewayInterfaceGetGet',
		value: 'gatewayInterfaceGetGet',
		action: 'gatewayInterfaceGetGet',
		execute: gatewayInterfaceGetGetExecute,
		description: noProps,
	},
	{
		name: 'gatewayInterfaceDeleteDelete',
		value: 'gatewayInterfaceDeleteDelete',
		action: 'gatewayInterfaceDeleteDelete',
		execute: gatewayInterfaceDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingFlavorListGet',
		value: 'loadbalancingFlavorListGet',
		action: 'loadbalancingFlavorListGet',
		execute: loadbalancingFlavorListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingFlavorGetGet',
		value: 'loadbalancingFlavorGetGet',
		action: 'loadbalancingFlavorGetGet',
		execute: loadbalancingFlavorGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingHealthMonitorListGet',
		value: 'loadbalancingHealthMonitorListGet',
		action: 'loadbalancingHealthMonitorListGet',
		execute: loadbalancingHealthMonitorListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingHealthMonitorCreatePost',
		value: 'loadbalancingHealthMonitorCreatePost',
		action: 'loadbalancingHealthMonitorCreatePost',
		execute: loadbalancingHealthMonitorCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingHealthMonitorGetGet',
		value: 'loadbalancingHealthMonitorGetGet',
		action: 'loadbalancingHealthMonitorGetGet',
		execute: loadbalancingHealthMonitorGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingHealthMonitorUpdatePut',
		value: 'loadbalancingHealthMonitorUpdatePut',
		action: 'loadbalancingHealthMonitorUpdatePut',
		execute: loadbalancingHealthMonitorUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingHealthMonitorDeleteDelete',
		value: 'loadbalancingHealthMonitorDeleteDelete',
		action: 'loadbalancingHealthMonitorDeleteDelete',
		execute: loadbalancingHealthMonitorDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyListGet',
		value: 'loadbalancingL7PolicyListGet',
		action: 'loadbalancingL7PolicyListGet',
		execute: loadbalancingL7PolicyListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyCreatePost',
		value: 'loadbalancingL7PolicyCreatePost',
		action: 'loadbalancingL7PolicyCreatePost',
		execute: loadbalancingL7PolicyCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyGetGet',
		value: 'loadbalancingL7PolicyGetGet',
		action: 'loadbalancingL7PolicyGetGet',
		execute: loadbalancingL7PolicyGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyUpdatePut',
		value: 'loadbalancingL7PolicyUpdatePut',
		action: 'loadbalancingL7PolicyUpdatePut',
		execute: loadbalancingL7PolicyUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyDeleteDelete',
		value: 'loadbalancingL7PolicyDeleteDelete',
		action: 'loadbalancingL7PolicyDeleteDelete',
		execute: loadbalancingL7PolicyDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyL7RuleListGet',
		value: 'loadbalancingL7PolicyL7RuleListGet',
		action: 'loadbalancingL7PolicyL7RuleListGet',
		execute: loadbalancingL7PolicyL7RuleListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyL7RuleCreatePost',
		value: 'loadbalancingL7PolicyL7RuleCreatePost',
		action: 'loadbalancingL7PolicyL7RuleCreatePost',
		execute: loadbalancingL7PolicyL7RuleCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyL7RuleGetGet',
		value: 'loadbalancingL7PolicyL7RuleGetGet',
		action: 'loadbalancingL7PolicyL7RuleGetGet',
		execute: loadbalancingL7PolicyL7RuleGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyL7RuleUpdatePut',
		value: 'loadbalancingL7PolicyL7RuleUpdatePut',
		action: 'loadbalancingL7PolicyL7RuleUpdatePut',
		execute: loadbalancingL7PolicyL7RuleUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingL7PolicyL7RuleDeleteDelete',
		value: 'loadbalancingL7PolicyL7RuleDeleteDelete',
		action: 'loadbalancingL7PolicyL7RuleDeleteDelete',
		execute: loadbalancingL7PolicyL7RuleDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingListenerListGet',
		value: 'loadbalancingListenerListGet',
		action: 'loadbalancingListenerListGet',
		execute: loadbalancingListenerListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingListenerCreatePost',
		value: 'loadbalancingListenerCreatePost',
		action: 'loadbalancingListenerCreatePost',
		execute: loadbalancingListenerCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingListenerGetGet',
		value: 'loadbalancingListenerGetGet',
		action: 'loadbalancingListenerGetGet',
		execute: loadbalancingListenerGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingListenerUpdatePut',
		value: 'loadbalancingListenerUpdatePut',
		action: 'loadbalancingListenerUpdatePut',
		execute: loadbalancingListenerUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingListenerDeleteDelete',
		value: 'loadbalancingListenerDeleteDelete',
		action: 'loadbalancingListenerDeleteDelete',
		execute: loadbalancingListenerDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerListGet',
		value: 'loadbalancingLoadBalancerListGet',
		action: 'loadbalancingLoadBalancerListGet',
		execute: loadbalancingLoadBalancerListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerCreatePost',
		value: 'loadbalancingLoadBalancerCreatePost',
		action: 'loadbalancingLoadBalancerCreatePost',
		execute: loadbalancingLoadBalancerCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerGetGet',
		value: 'loadbalancingLoadBalancerGetGet',
		action: 'loadbalancingLoadBalancerGetGet',
		execute: loadbalancingLoadBalancerGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerUpdatePut',
		value: 'loadbalancingLoadBalancerUpdatePut',
		action: 'loadbalancingLoadBalancerUpdatePut',
		execute: loadbalancingLoadBalancerUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerDeleteDelete',
		value: 'loadbalancingLoadBalancerDeleteDelete',
		action: 'loadbalancingLoadBalancerDeleteDelete',
		execute: loadbalancingLoadBalancerDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerAssociateFloatingIpPost',
		value: 'loadbalancingLoadBalancerAssociateFloatingIpPost',
		action: 'loadbalancingLoadBalancerAssociateFloatingIpPost',
		execute: loadbalancingLoadBalancerAssociateFloatingIpPostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerFloatingIpPost',
		value: 'loadbalancingLoadBalancerFloatingIpPost',
		action: 'loadbalancingLoadBalancerFloatingIpPost',
		execute: loadbalancingLoadBalancerFloatingIpPostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerLogSubscriptionListGet',
		value: 'loadbalancingLoadBalancerLogSubscriptionListGet',
		action: 'loadbalancingLoadBalancerLogSubscriptionListGet',
		execute: loadbalancingLoadBalancerLogSubscriptionListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerLogSubscriptionCreatePost',
		value: 'loadbalancingLoadBalancerLogSubscriptionCreatePost',
		action: 'loadbalancingLoadBalancerLogSubscriptionCreatePost',
		execute: loadbalancingLoadBalancerLogSubscriptionCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerLogSubscriptionGetGet',
		value: 'loadbalancingLoadBalancerLogSubscriptionGetGet',
		action: 'loadbalancingLoadBalancerLogSubscriptionGetGet',
		execute: loadbalancingLoadBalancerLogSubscriptionGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerLogSubscriptionDeleteDelete',
		value: 'loadbalancingLoadBalancerLogSubscriptionDeleteDelete',
		action: 'loadbalancingLoadBalancerLogSubscriptionDeleteDelete',
		execute: loadbalancingLoadBalancerLogSubscriptionDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerLogUrlPost',
		value: 'loadbalancingLoadBalancerLogUrlPost',
		action: 'loadbalancingLoadBalancerLogUrlPost',
		execute: loadbalancingLoadBalancerLogUrlPostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLoadBalancerStatsGet',
		value: 'loadbalancingLoadBalancerStatsGet',
		action: 'loadbalancingLoadBalancerStatsGet',
		execute: loadbalancingLoadBalancerStatsGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLogKindListGet',
		value: 'loadbalancingLogKindListGet',
		action: 'loadbalancingLogKindListGet',
		execute: loadbalancingLogKindListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingLogKindGetGet',
		value: 'loadbalancingLogKindGetGet',
		action: 'loadbalancingLogKindGetGet',
		execute: loadbalancingLogKindGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolListGet',
		value: 'loadbalancingPoolListGet',
		action: 'loadbalancingPoolListGet',
		execute: loadbalancingPoolListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolCreatePost',
		value: 'loadbalancingPoolCreatePost',
		action: 'loadbalancingPoolCreatePost',
		execute: loadbalancingPoolCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolGetGet',
		value: 'loadbalancingPoolGetGet',
		action: 'loadbalancingPoolGetGet',
		execute: loadbalancingPoolGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolUpdatePut',
		value: 'loadbalancingPoolUpdatePut',
		action: 'loadbalancingPoolUpdatePut',
		execute: loadbalancingPoolUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolDeleteDelete',
		value: 'loadbalancingPoolDeleteDelete',
		action: 'loadbalancingPoolDeleteDelete',
		execute: loadbalancingPoolDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolMemberListGet',
		value: 'loadbalancingPoolMemberListGet',
		action: 'loadbalancingPoolMemberListGet',
		execute: loadbalancingPoolMemberListGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolMemberCreatePost',
		value: 'loadbalancingPoolMemberCreatePost',
		action: 'loadbalancingPoolMemberCreatePost',
		execute: loadbalancingPoolMemberCreatePostExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolMemberGetGet',
		value: 'loadbalancingPoolMemberGetGet',
		action: 'loadbalancingPoolMemberGetGet',
		execute: loadbalancingPoolMemberGetGetExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolMemberUpdatePut',
		value: 'loadbalancingPoolMemberUpdatePut',
		action: 'loadbalancingPoolMemberUpdatePut',
		execute: loadbalancingPoolMemberUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'loadbalancingPoolMemberDeleteDelete',
		value: 'loadbalancingPoolMemberDeleteDelete',
		action: 'loadbalancingPoolMemberDeleteDelete',
		execute: loadbalancingPoolMemberDeleteDeleteExecute,
		description: noProps,
	},
	{
		name: 'userCreatePost',
		value: 'userCreatePost',
		action: 'Create user',
		execute: userCreatePostExecute,
		description: userCreatePostDescription,
	},
	{
		name: 'userCreateS3CredentialSecretPost',
		value: 'userCreateS3CredentialSecretPost',
		action: 'Create user S3 credential secret',
		execute: userCreateS3CredentialSecretPostExecute,
		description: userCreateS3CredentialSecretPostDescription,
	},
	{
		name: 'userCreateUserPolicyPost',
		value: 'userCreateUserPolicyPost',
		action: 'Create user policy',
		execute: userCreateUserPolicyPostExecute,
		description: userCreateUserPolicyPostDescription,
	},
	{
		name: 'userCreateUserRolePost',
		value: 'userCreateUserRolePost',
		action: 'Create user role',
		execute: userCreateUserRolePostExecute,
		description: userCreateUserRolePostDescription,
	},
	{
		name: 'userCreateUserS3CredentialsPost',
		value: 'userCreateUserS3CredentialsPost',
		action: 'Create user S3 credentials',
		execute: userCreateUserS3CredentialsPostExecute,
		description: userCreateUserS3CredentialsPostDescription,
	},
	{
		name: 'userCreateUserTokenPost',
		value: 'userCreateUserTokenPost',
		action: 'Create user token',
		execute: userCreateUserTokenPostExecute,
		description: userCreateUserTokenPostDescription,
	},
	{
		name: 'userDeleteDelete',
		value: 'userDeleteDelete',
		action: 'Delete user',
		execute: userDeleteDeleteExecute,
		description: userDeleteDeleteDescription,
	},
	{
		name: 'userDeleteUserRoleDelete',
		value: 'userDeleteUserRoleDelete',
		action: 'Delete user role',
		execute: userDeleteUserRoleDeleteExecute,
		description: userDeleteUserRoleDeleteDescription,
	},
	{
		name: 'userDeleteUserS3CredentialDelete',
		value: 'userDeleteUserS3CredentialDelete',
		action: 'Delete user S3 credential',
		execute: userDeleteUserS3CredentialDeleteExecute,
		description: userDeleteUserS3CredentialDeleteDescription,
	},
	{
		name: 'userGetDetailGet',
		value: 'userGetDetailGet',
		action: 'Get user',
		execute: userGetDetailGetExecute,
		description: userGetDetailGetDescription,
	},
	{
		name: 'userGetUserConfigurationGet',
		value: 'userGetUserConfigurationGet',
		action: 'Get user configuration',
		execute: userGetUserConfigurationGetExecute,
		description: userGetUserConfigurationGetDescription,
	},
	{
		name: 'userGetUserOpenrcGet',
		value: 'userGetUserOpenrcGet',
		action: 'Get user OpenRC file',
		execute: userGetUserOpenrcGetExecute,
		description: userGetUserOpenrcGetDescription,
	},
	{
		name: 'userGetUserPolicyGet',
		value: 'userGetUserPolicyGet',
		action: 'Get user policy',
		execute: userGetUserPolicyGetExecute,
		description: userGetUserPolicyGetDescription,
	},
	{
		name: 'userGetUserRcloneGet',
		value: 'userGetUserRcloneGet',
		action: 'Get user rclone configuration',
		execute: userGetUserRcloneGetExecute,
		description: userGetUserRcloneGetDescription,
	},
	{
		name: 'userGetUserRoleDetailGet',
		value: 'userGetUserRoleDetailGet',
		action: 'Get user role',
		execute: userGetUserRoleDetailGetExecute,
		description: userGetUserRoleDetailGetDescription,
	},
	{
		name: 'userGetUserRoleGet',
		value: 'userGetUserRoleGet',
		action: 'List user roles',
		execute: userGetUserRoleGetExecute,
		description: userGetUserRoleGetDescription,
	},
	{
		name: 'userGetUserS3CredentialDetailGet',
		value: 'userGetUserS3CredentialDetailGet',
		action: 'Get user S3 credential',
		execute: userGetUserS3CredentialDetailGetExecute,
		description: userGetUserS3CredentialDetailGetDescription,
	},
	{
		name: 'userGetUserS3CredentialsGet',
		value: 'userGetUserS3CredentialsGet',
		action: 'List user S3 credentials',
		execute: userGetUserS3CredentialsGetExecute,
		description: userGetUserS3CredentialsGetDescription,
	},
	{
		name: 'userListGet',
		value: 'userListGet',
		action: 'List users in a project',
		execute: userListGetExecute,
		description: userListGetDescription,
	},
	{
		name: 'userRegeneratePasswordPost',
		value: 'userRegeneratePasswordPost',
		action: 'Regenerate user password',
		execute: userRegeneratePasswordPostExecute,
		description: userRegeneratePasswordPostDescription,
	},
	{
		name: 'userUpdateUserRolePut',
		value: 'userUpdateUserRolePut',
		action: 'Update user role',
		execute: userUpdateUserRolePutExecute,
		description: userUpdateUserRolePutDescription,
	},
	{
		name: 'cloudAgreementsGet',
		value: 'cloudAgreementsGet',
		action: 'Get agreements',
		execute: cloudAgreementsGetExecute,
		description: cloudAgreementsGetDescription,
	},
	{
		name: 'cloudEligibilityGet',
		value: 'cloudEligibilityGet',
		action: 'Get eligibility',
		execute: cloudEligibilityGetExecute,
		description: cloudEligibilityGetDescription,
	},
	{
		name: 'cloudOrderListGet',
		value: 'cloudOrderListGet',
		action: 'List orders',
		execute: cloudOrderListGetExecute,
		description: cloudOrderListGetDescription,
	},
	{
		name: 'cloudOrderRuleAvailabilityGet',
		value: 'cloudOrderRuleAvailabilityGet',
		action: 'Get order rule availability',
		execute: cloudOrderRuleAvailabilityGetExecute,
		description: cloudOrderRuleAvailabilityGetDescription,
	},
	{
		name: 'aclCreatePost',
		value: 'aclCreatePost',
		action: 'Create ACL',
		execute: aclCreatePostExecute,
		description: aclCreatePostDescription,
	},
	{
		name: 'aclDeleteDelete',
		value: 'aclDeleteDelete',
		action: 'Delete ACL',
		execute: aclDeleteDeleteExecute,
		description: aclDeleteDeleteDescription,
	},
	{
		name: 'aclGetDetailGet',
		value: 'aclGetDetailGet',
		action: 'Get ACL details',
		execute: aclGetDetailGetExecute,
		description: aclGetDetailGetDescription,
	},
	{
		name: 'aclListGet',
		value: 'aclListGet',
		action: 'List ACLs in a project',
		execute: aclListGetExecute,
		description: aclListGetDescription,
	},
	{
		name: 'activateMonthlyBillingPost',
		value: 'activateMonthlyBillingPost',
		action: 'Activate monthly billing',
		execute: activateMonthlyBillingPostExecute,
		description: activateMonthlyBillingPostDescription,
	},
	{
		name: 'alertingCreatePost',
		value: 'alertingCreatePost',
		action: 'Create alert',
		execute: alertingCreatePostExecute,
		description: alertingCreatePostDescription,
	},
	{
		name: 'alertingDeleteDelete',
		value: 'alertingDeleteDelete',
		action: 'Delete alert',
		execute: alertingDeleteDeleteExecute,
		description: alertingDeleteDeleteDescription,
	},
	{
		name: 'alertingGetDetailGet',
		value: 'alertingGetDetailGet',
		action: 'Get alert',
		execute: alertingGetDetailGetExecute,
		description: alertingGetDetailGetDescription,
	},
	{
		name: 'alertingListGet',
		value: 'alertingListGet',
		action: 'List alerts in a project',
		execute: alertingListGetExecute,
		description: alertingListGetDescription,
	},
	{
		name: 'alertingUpdatePut',
		value: 'alertingUpdatePut',
		action: 'Update alert',
		execute: alertingUpdatePutExecute,
		description: alertingUpdatePutDescription,
	},
	{
		name: 'billListGet',
		value: 'billListGet',
		action: 'List bills',
		execute: billListGetExecute,
		description: billListGetDescription,
	},
	{
		name: 'cancelPost',
		value: 'cancelPost',
		action: 'Cancel project',
		execute: cancelPostExecute,
		description: cancelPostDescription,
	},
	{
		name: 'capabilitiesGetKubeDetailGet',
		value: 'capabilitiesGetKubeDetailGet',
		action: 'Get Kube capabilities',
		execute: capabilitiesGetKubeDetailGetExecute,
		description: capabilitiesGetKubeDetailGetDescription,
	},
	{
		name: 'capabilitiesGetLoadbalancerDetailGet',
		value: 'capabilitiesGetLoadbalancerDetailGet',
		action: 'Get load balancer capabilities',
		execute: capabilitiesGetLoadbalancerDetailGetExecute,
		description: capabilitiesGetLoadbalancerDetailGetDescription,
	},
	{
		name: 'capabilitiesGetRegionDetailGet',
		value: 'capabilitiesGetRegionDetailGet',
		action: 'Get region capabilities',
		execute: capabilitiesGetRegionDetailGetExecute,
		description: capabilitiesGetRegionDetailGetDescription,
	},
	{
		name: 'capabilitiesGetRegionProductDetailGet',
		value: 'capabilitiesGetRegionProductDetailGet',
		action: 'Get region product capabilities',
		execute: capabilitiesGetRegionProductDetailGetExecute,
		description: capabilitiesGetRegionProductDetailGetDescription,
	},
	{
		name: 'capabilitiesListGet',
		value: 'capabilitiesListGet',
		action: 'List capabilities',
		execute: capabilitiesListGetExecute,
		description: capabilitiesListGetDescription,
	},
	{
		name: 'capabilitiesListKubeGet',
		value: 'capabilitiesListKubeGet',
		action: 'List Kube capabilities',
		execute: capabilitiesListKubeGetExecute,
		description: capabilitiesListKubeGetDescription,
	},
	{
		name: 'capabilitiesListLoadbalancerGet',
		value: 'capabilitiesListLoadbalancerGet',
		action: 'List load balancer capabilities',
		execute: capabilitiesListLoadbalancerGetExecute,
		description: capabilitiesListLoadbalancerGetDescription,
	},
	{
		name: 'capabilitiesListRegionGet',
		value: 'capabilitiesListRegionGet',
		action: 'List region capabilities',
		execute: capabilitiesListRegionGetExecute,
		description: capabilitiesListRegionGetDescription,
	},
	{
		name: 'changeContactPost',
		value: 'changeContactPost',
		action: 'Change project contact',
		execute: changeContactPostExecute,
		description: changeContactPostDescription,
	},
	{
		name: 'confirmTerminationPost',
		value: 'confirmTerminationPost',
		action: 'Confirm termination',
		execute: confirmTerminationPostExecute,
		description: confirmTerminationPostDescription,
	},
	{
		name: 'containerRegistryCreatePost',
		value: 'containerRegistryCreatePost',
		action: 'Create container registry',
		execute: containerRegistryCreatePostExecute,
		description: containerRegistryCreatePostDescription,
	},
	{
		name: 'containerRegistryCreateUserPost',
		value: 'containerRegistryCreateUserPost',
		action: 'Create registry user',
		execute: containerRegistryCreateUserPostExecute,
		description: containerRegistryCreateUserPostDescription,
	},
	{
		name: 'containerRegistryDeleteDelete',
		value: 'containerRegistryDeleteDelete',
		action: 'Delete container registry',
		execute: containerRegistryDeleteDeleteExecute,
		description: containerRegistryDeleteDeleteDescription,
	},
	{
		name: 'containerRegistryDeleteUserDelete',
		value: 'containerRegistryDeleteUserDelete',
		action: 'Delete registry user',
		execute: containerRegistryDeleteUserDeleteExecute,
		description: containerRegistryDeleteUserDeleteDescription,
	},
	{
		name: 'containerRegistryGetDetailGet',
		value: 'containerRegistryGetDetailGet',
		action: 'Get container registry',
		execute: containerRegistryGetDetailGetExecute,
		description: containerRegistryGetDetailGetDescription,
	},
	{
		name: 'containerRegistryGetUserDetailGet',
		value: 'containerRegistryGetUserDetailGet',
		action: 'Get registry user',
		execute: containerRegistryGetUserDetailGetExecute,
		description: containerRegistryGetUserDetailGetDescription,
	},
	{
		name: 'containerRegistryListGet',
		value: 'containerRegistryListGet',
		action: 'List container registries in a project',
		execute: containerRegistryListGetExecute,
		description: containerRegistryListGetDescription,
	},
	{
		name: 'containerRegistryListUsersGet',
		value: 'containerRegistryListUsersGet',
		action: 'List registry users',
		execute: containerRegistryListUsersGetExecute,
		description: containerRegistryListUsersGetDescription,
	},
	{
		name: 'containerRegistryUpdatePut',
		value: 'containerRegistryUpdatePut',
		action: 'Update container registry',
		execute: containerRegistryUpdatePutExecute,
		description: containerRegistryUpdatePutDescription,
	},
	{
		name: 'containerRegistryGetCapabilitiesPlanGet',
		value: 'containerRegistryGetCapabilitiesPlanGet',
		action: 'Get container registry capabilities plan',
		execute: containerRegistryGetCapabilitiesPlanGetExecute,
		description: containerRegistryGetCapabilitiesPlanGetDescription,
	},
	{
		name: 'containerRegistryDeleteIamDelete',
		value: 'containerRegistryDeleteIamDelete',
		action: 'Delete IAM',
		execute: containerRegistryDeleteIamDeleteExecute,
		description: containerRegistryDeleteIamDeleteDescription,
	},
	{
		name: 'containerRegistryCreateIamPost',
		value: 'containerRegistryCreateIamPost',
		action: 'Create IAM',
		execute: containerRegistryCreateIamPostExecute,
		description: containerRegistryCreateIamPostDescription,
	},
	{
		name: 'containerRegistryGetIpRestrictionsManagementListGet',
		value: 'containerRegistryGetIpRestrictionsManagementListGet',
		action: 'Get IP restrictions management',
		execute: containerRegistryGetIpRestrictionsManagementListGetExecute,
		description: containerRegistryGetIpRestrictionsManagementListGetDescription,
	},
	{
		name: 'containerRegistryUpdateIpRestrictionsManagementPut',
		value: 'containerRegistryUpdateIpRestrictionsManagementPut',
		action: 'Update IP restrictions management',
		execute: containerRegistryUpdateIpRestrictionsManagementPutExecute,
		description: containerRegistryUpdateIpRestrictionsManagementPutDescription,
	},
	{
		name: 'containerRegistryGetIpRestrictionsRegistryListGet',
		value: 'containerRegistryGetIpRestrictionsRegistryListGet',
		action: 'Get IP restrictions registry',
		execute: containerRegistryGetIpRestrictionsRegistryListGetExecute,
		description: containerRegistryGetIpRestrictionsRegistryListGetDescription,
	},
	{
		name: 'containerRegistryUpdateIpRestrictionsRegistryPut',
		value: 'containerRegistryUpdateIpRestrictionsRegistryPut',
		action: 'Update IP restrictions registry',
		execute: containerRegistryUpdateIpRestrictionsRegistryPutExecute,
		description: containerRegistryUpdateIpRestrictionsRegistryPutDescription,
	},
	{
		name: 'containerRegistryDeleteOpenIdConnectDelete',
		value: 'containerRegistryDeleteOpenIdConnectDelete',
		action: 'Delete OpenID Connect',
		execute: containerRegistryDeleteOpenIdConnectDeleteExecute,
		description: containerRegistryDeleteOpenIdConnectDeleteDescription,
	},
	{
		name: 'containerRegistryGetOpenIdConnectGet',
		value: 'containerRegistryGetOpenIdConnectGet',
		action: 'Get OpenID Connect',
		execute: containerRegistryGetOpenIdConnectGetExecute,
		description: containerRegistryGetOpenIdConnectGetDescription,
	},
	{
		name: 'containerRegistryCreateOpenIdConnectPost',
		value: 'containerRegistryCreateOpenIdConnectPost',
		action: 'Create OpenID Connect',
		execute: containerRegistryCreateOpenIdConnectPostExecute,
		description: containerRegistryCreateOpenIdConnectPostDescription,
	},
	{
		name: 'containerRegistryUpdateOpenIdConnectPut',
		value: 'containerRegistryUpdateOpenIdConnectPut',
		action: 'Update OpenID Connect',
		execute: containerRegistryUpdateOpenIdConnectPutExecute,
		description: containerRegistryUpdateOpenIdConnectPutDescription,
	},
	{
		name: 'containerRegistryGetPlanGet',
		value: 'containerRegistryGetPlanGet',
		action: 'Get plan',
		execute: containerRegistryGetPlanGetExecute,
		description: containerRegistryGetPlanGetDescription,
	},
	{
		name: 'containerRegistryUpdatePlanPut',
		value: 'containerRegistryUpdatePlanPut',
		action: 'Update plan',
		execute: containerRegistryUpdatePlanPutExecute,
		description: containerRegistryUpdatePlanPutDescription,
	},
	{
		name: 'containerRegistryCreateUserSetAsAdminPost',
		value: 'containerRegistryCreateUserSetAsAdminPost',
		action: 'Set user as admin',
		execute: containerRegistryCreateUserSetAsAdminPostExecute,
		description: containerRegistryCreateUserSetAsAdminPostDescription,
	},
	{
		name: 'creditCreatePost',
		value: 'creditCreatePost',
		action: 'Add credit to project',
		execute: creditCreatePostExecute,
		description: creditCreatePostDescription,
	},
	{
		name: 'creditGetDetailGet',
		value: 'creditGetDetailGet',
		action: 'Get credit',
		execute: creditGetDetailGetExecute,
		description: creditGetDetailGetDescription,
	},
	{
		name: 'creditListGet',
		value: 'creditListGet',
		action: 'List credits',
		execute: creditListGetExecute,
		description: creditListGetDescription,
	},
	{
		name: 'flavorGetDetailGet',
		value: 'flavorGetDetailGet',
		action: 'Get flavor',
		execute: flavorGetDetailGetExecute,
		description: flavorGetDetailGetDescription,
	},
	{
		name: 'flavorListGet',
		value: 'flavorListGet',
		action: 'List flavors',
		execute: flavorListGetExecute,
		description: flavorListGetDescription,
	},
	{
		name: 'imageGetDetailGet',
		value: 'imageGetDetailGet',
		action: 'Get image',
		execute: imageGetDetailGetExecute,
		description: imageGetDetailGetDescription,
	},
	{
		name: 'imageListGet',
		value: 'imageListGet',
		action: 'List images',
		execute: imageListGetExecute,
		description: imageListGetDescription,
	},
	{
		name: 'ipCreatePost',
		value: 'ipCreatePost',
		action: 'Create IP address',
		execute: ipCreatePostExecute,
		description: ipCreatePostDescription,
	},
	{
		name: 'ipDeleteDelete',
		value: 'ipDeleteDelete',
		action: 'Delete IP address',
		execute: ipDeleteDeleteExecute,
		description: ipDeleteDeleteDescription,
	},
	{
		name: 'ipGetDetailGet',
		value: 'ipGetDetailGet',
		action: 'Get IP address',
		execute: ipGetDetailGetExecute,
		description: ipGetDetailGetDescription,
	},
	{
		name: 'ipListGet',
		value: 'ipListGet',
		action: 'List IP addresses in a project',
		execute: ipListGetExecute,
		description: ipListGetDescription,
	},
	{
		name: 'ipUpdatePut',
		value: 'ipUpdatePut',
		action: 'Update IP address',
		execute: ipUpdatePutExecute,
		description: ipUpdatePutDescription,
	},
	{
		name: 'labCreatePost',
		value: 'labCreatePost',
		action: 'Create lab',
		execute: labCreatePostExecute,
		description: labCreatePostDescription,
	},
	{
		name: 'labAgreementListGet',
		value: 'labAgreementListGet',
		action: 'List lab agreements',
		execute: labAgreementListGetExecute,
		description: labAgreementListGetDescription,
	},
	{
		name: 'labGetDetailGet',
		value: 'labGetDetailGet',
		action: 'Get lab',
		execute: labGetDetailGetExecute,
		description: labGetDetailGetDescription,
	},
	{
		name: 'labListGet',
		value: 'labListGet',
		action: 'List labs',
		execute: labListGetExecute,
		description: labListGetDescription,
	},
	{
		name: 'loadbalancerCreatePost',
		value: 'loadbalancerCreatePost',
		action: 'Create load balancer',
		execute: loadbalancerCreatePostExecute,
		description: loadbalancerCreatePostDescription,
	},
	{
		name: 'loadbalancerDeleteDelete',
		value: 'loadbalancerDeleteDelete',
		action: 'Delete load balancer',
		execute: loadbalancerDeleteDeleteExecute,
		description: loadbalancerDeleteDeleteDescription,
	},
	{
		name: 'loadbalancerGetDetailGet',
		value: 'loadbalancerGetDetailGet',
		action: 'Get load balancer',
		execute: loadbalancerGetDetailGetExecute,
		description: loadbalancerGetDetailGetDescription,
	},
	{
		name: 'loadbalancerListGet',
		value: 'loadbalancerListGet',
		action: 'List load balancers in a project',
		execute: loadbalancerListGetExecute,
		description: loadbalancerListGetDescription,
	},
	{
		name: 'loadbalancerUpdatePut',
		value: 'loadbalancerUpdatePut',
		action: 'Update load balancer',
		execute: loadbalancerUpdatePutExecute,
		description: loadbalancerUpdatePutDescription,
	},
	{
		name: 'operationGetDetailGet',
		value: 'operationGetDetailGet',
		action: 'Get operation',
		execute: operationGetDetailGetExecute,
		description: operationGetDetailGetDescription,
	},
	{
		name: 'operationListGet',
		value: 'operationListGet',
		action: 'List operations',
		execute: operationListGetExecute,
		description: operationListGetDescription,
	},
	{
		name: 'quantumGetCapabilitiesDetailGet',
		value: 'quantumGetCapabilitiesDetailGet',
		action: 'Get quantum capability',
		execute: quantumGetCapabilitiesDetailGetExecute,
		description: quantumGetCapabilitiesDetailGetDescription,
	},
	{
		name: 'quantumGetCapabilitiesRegionDetailGet',
		value: 'quantumGetCapabilitiesRegionDetailGet',
		action: 'Get quantum region capability',
		execute: quantumGetCapabilitiesRegionDetailGetExecute,
		description: quantumGetCapabilitiesRegionDetailGetDescription,
	},
	{
		name: 'quantumListCapabilitiesGet',
		value: 'quantumListCapabilitiesGet',
		action: 'List quantum capabilities',
		execute: quantumListCapabilitiesGetExecute,
		description: quantumListCapabilitiesGetDescription,
	},
	{
		name: 'quantumListCapabilitiesRegionGet',
		value: 'quantumListCapabilitiesRegionGet',
		action: 'List quantum region capabilities',
		execute: quantumListCapabilitiesRegionGetExecute,
		description: quantumListCapabilitiesRegionGetDescription,
	},
	{
		name: 'quotaListGet',
		value: 'quotaListGet',
		action: 'List quota',
		execute: quotaListGetExecute,
		description: quotaListGetDescription,
	},
	{
		name: 'regionAvailableCheckRegionAvailableGet',
		value: 'regionAvailableCheckRegionAvailableGet',
		action: 'Check region availability',
		execute: regionAvailableCheckRegionAvailableGetExecute,
		description: regionAvailableCheckRegionAvailableGetDescription,
	},
	{
		name: 'retainPost',
		value: 'retainPost',
		action: 'Retain project',
		execute: retainPostExecute,
		description: retainPostDescription,
	},
	{
		name: 'roleListGet',
		value: 'roleListGet',
		action: 'List roles',
		execute: roleListGetExecute,
		description: roleListGetDescription,
	},
	{
		name: 'serviceInfosGetServiceInfosGet',
		value: 'serviceInfosGetServiceInfosGet',
		action: 'Get service information',
		execute: serviceInfosGetServiceInfosGetExecute,
		description: serviceInfosGetServiceInfosGetDescription,
	},
	{
		name: 'snapshotsCreatePost',
		value: 'snapshotsCreatePost',
		action: 'Create snapshot',
		execute: snapshotsCreatePostExecute,
		description: snapshotsCreatePostDescription,
	},
	{
		name: 'snapshotsDeleteDelete',
		value: 'snapshotsDeleteDelete',
		action: 'Delete snapshot',
		execute: snapshotsDeleteDeleteExecute,
		description: snapshotsDeleteDeleteDescription,
	},
	{
		name: 'snapshotsListGet',
		value: 'snapshotsListGet',
		action: 'List snapshots',
		execute: snapshotsListGetExecute,
		description: snapshotsListGetDescription,
	},
	{
		name: 'sshkeyCreatePost',
		value: 'sshkeyCreatePost',
		action: 'Create SSH key',
		execute: sshkeyCreatePostExecute,
		description: sshkeyCreatePostDescription,
	},
	{
		name: 'sshkeyDeleteDelete',
		value: 'sshkeyDeleteDelete',
		action: 'Delete SSH key',
		execute: sshkeyDeleteDeleteExecute,
		description: sshkeyDeleteDeleteDescription,
	},
	{
		name: 'sshkeyListGet',
		value: 'sshkeyListGet',
		action: 'List SSH keys',
		execute: sshkeyListGetExecute,
		description: sshkeyListGetDescription,
	},
	{
		name: 'storageCreateContainerPost',
		value: 'storageCreateContainerPost',
		action: 'Create storage container',
		execute: storageCreateContainerPostExecute,
		description: storageCreateContainerPostDescription,
	},
	{
		name: 'storageDeleteContainerDelete',
		value: 'storageDeleteContainerDelete',
		action: 'Delete storage container',
		execute: storageDeleteContainerDeleteExecute,
		description: storageDeleteContainerDeleteDescription,
	},
	{
		name: 'storageDeleteDelete',
		value: 'storageDeleteDelete',
		action: 'Delete storage',
		execute: storageDeleteDeleteExecute,
		description: storageDeleteDeleteDescription,
	},
	{
		name: 'storageGetContainerDetailGet',
		value: 'storageGetContainerDetailGet',
		action: 'Get storage container',
		execute: storageGetContainerDetailGetExecute,
		description: storageGetContainerDetailGetDescription,
	},
	{
		name: 'storageGetDetailGet',
		value: 'storageGetDetailGet',
		action: 'Get storage',
		execute: storageGetDetailGetExecute,
		description: storageGetDetailGetDescription,
	},
	{
		name: 'storageListContainersGet',
		value: 'storageListContainersGet',
		action: 'List storage containers',
		execute: storageListContainersGetExecute,
		description: storageListContainersGetDescription,
	},
	{
		name: 'storageListGet',
		value: 'storageListGet',
		action: 'List storages in a project',
		execute: storageListGetExecute,
		description: storageListGetDescription,
	},
	{
		name: 'storageUpdateContainerPut',
		value: 'storageUpdateContainerPut',
		action: 'Update storage container',
		execute: storageUpdateContainerPutExecute,
		description: storageUpdateContainerPutDescription,
	},
	{
		name: 'storageUpdatePut',
		value: 'storageUpdatePut',
		action: 'Update storage',
		execute: storageUpdatePutExecute,
		description: storageUpdatePutDescription,
	},
	{
		name: 'terminatePost',
		value: 'terminatePost',
		action: 'Terminate project',
		execute: terminatePostExecute,
		description: terminatePostDescription,
	},
	{
		name: 'unleashPost',
		value: 'unleashPost',
		action: 'Unleash project',
		execute: unleashPostExecute,
		description: unleashPostDescription,
	},
	{
		name: 'usageGetCurrentGet',
		value: 'usageGetCurrentGet',
		action: 'Get current usage',
		execute: usageGetCurrentGetExecute,
		description: usageGetCurrentGetDescription,
	},
	{
		name: 'usageGetForecastGet',
		value: 'usageGetForecastGet',
		action: 'Get usage forecast',
		execute: usageGetForecastGetExecute,
		description: usageGetForecastGetDescription,
	},
	{
		name: 'usageGetHistoryDetailGet',
		value: 'usageGetHistoryDetailGet',
		action: 'Get usage history',
		execute: usageGetHistoryDetailGetExecute,
		description: usageGetHistoryDetailGetDescription,
	},
	{
		name: 'usageListHistoryGet',
		value: 'usageListHistoryGet',
		action: 'List usage history',
		execute: usageListHistoryGetExecute,
		description: usageListHistoryGetDescription,
	},
	{
		name: 'vrackListGet',
		value: 'vrackListGet',
		action: 'List vRacks',
		execute: vrackListGetExecute,
		description: vrackListGetDescription,
	},
	{
		name: 'Attach vRack',
		value: 'vrackCreatePost',
		action: 'Order and attach a new vRack to your project',
		execute: vrackCreatePostExecute,
		description: vrackCreatePostDescription,
	},
	{
		name: 'List Failover IPs',
		value: 'ipFailoverListGet',
		action: 'List failover IPs in your project',
		execute: ipFailoverListGetExecute,
		description: ipFailoverListGetDescription,
	},
	{
		name: 'Get Failover IP',
		value: 'ipFailoverGetGet',
		action: 'Get details of a failover IP',
		execute: ipFailoverGetGetExecute,
		description: ipFailoverGetGetDescription,
	},
	{
		name: 'Attach Failover IP',
		value: 'ipFailoverAttachPost',
		action: 'Attach a failover IP to an instance',
		execute: ipFailoverAttachPostExecute,
		description: ipFailoverAttachPostDescription,
	},
	{
		name: 'List LB Configurations',
		value: 'loadbalancerConfigurationListGet',
		action: 'List load balancer configuration versions',
		execute: loadbalancerConfigurationListGetExecute,
		description: loadbalancerConfigurationListGetDescription,
	},
	{
		name: 'Create LB Configuration',
		value: 'loadbalancerConfigurationCreatePost',
		action: 'Create a load balancer configuration',
		execute: loadbalancerConfigurationCreatePostExecute,
		description: loadbalancerConfigurationCreatePostDescription,
	},
	{
		name: 'Get LB Configuration',
		value: 'loadbalancerConfigurationGetGet',
		action: 'Get a load balancer configuration version',
		execute: loadbalancerConfigurationGetGetExecute,
		description: loadbalancerConfigurationGetGetDescription,
	},
	{
		name: 'Delete LB Configuration',
		value: 'loadbalancerConfigurationDeleteDelete',
		action: 'Delete a load balancer configuration version',
		execute: loadbalancerConfigurationDeleteDeleteExecute,
		description: loadbalancerConfigurationDeleteDeleteDescription,
	},
	{
		name: 'Apply LB Configuration',
		value: 'loadbalancerConfigurationApplyPost',
		action: 'Apply a load balancer configuration',
		execute: loadbalancerConfigurationApplyPostExecute,
		description: loadbalancerConfigurationApplyPostDescription,
	},
	{
		name: 'Assign Role',
		value: 'roleCreatePost',
		action: 'Assign a role to a user in your project',
		execute: roleCreatePostExecute,
		description: roleCreatePostDescription,
	},
	{
		name: 'Update Service Info',
		value: 'serviceInfosUpdatePut',
		action: 'Update service information (e.g. renew mode)',
		execute: serviceInfosUpdatePutExecute,
		description: serviceInfosUpdatePutDescription,
	},
	{
		name: 'Get Storage Access',
		value: 'storageAccessPost',
		action: 'Get SWIFT storage API access credentials',
		execute: storageAccessPostExecute,
		description: storageAccessPostDescription,
	},
	{
		name: 'Get Storage Quota',
		value: 'storageQuotaGet',
		action: 'List storage quotas for your project',
		execute: storageQuotaGetExecute,
		description: storageQuotaGetDescription,
	},
	{
		name: 'Add CORS',
		value: 'storageCorsPost',
		action: 'Add CORS support to a SWIFT container',
		execute: storageCorsPostExecute,
		description: storageCorsPostDescription,
	},
	{
		name: 'Delete CORS',
		value: 'storageCorsDeleteDelete',
		action: 'Delete CORS support from a SWIFT container',
		execute: storageCorsDeleteDeleteExecute,
		description: storageCorsDeleteDeleteDescription,
	},
	{
		name: 'Get Public URL',
		value: 'storagePublicUrlPost',
		action: 'Get a temporary public URL for a SWIFT object',
		execute: storagePublicUrlPostExecute,
		description: storagePublicUrlPostDescription,
	},
	{
		name: 'Deploy Static Website',
		value: 'storageStaticPost',
		action: 'Deploy a SWIFT container as a static website',
		execute: storageStaticPostExecute,
		description: storageStaticPostDescription,
	},
	{
		name: 'Create OpenStack User',
		value: 'storageUserPost',
		action: 'Create an OpenStack user for a SWIFT container',
		execute: storageUserPostExecute,
		description: storageUserPostDescription,
	},
	{
		name: 'List Volume Snapshots',
		value: 'volumeSnapshotListGet',
		action: 'List volume snapshots in your project',
		execute: volumeSnapshotListGetExecute,
		description: volumeSnapshotListGetDescription,
	},
	{
		name: 'Get Volume Snapshot',
		value: 'volumeSnapshotGetGet',
		action: 'Get details of a volume snapshot',
		execute: volumeSnapshotGetGetExecute,
		description: volumeSnapshotGetGetDescription,
	},
	{
		name: 'Delete Volume Snapshot',
		value: 'volumeSnapshotDeleteDelete',
		action: 'Delete a volume snapshot',
		execute: volumeSnapshotDeleteDeleteExecute,
		description: volumeSnapshotDeleteDeleteDescription,
	},
	{
		name: 'Attach Volume',
		value: 'volumeAttachPost',
		action: 'Attach a volume to an instance',
		execute: volumeAttachPostExecute,
		description: volumeAttachPostDescription,
	},
	{
		name: 'Detach Volume',
		value: 'volumeDetachPost',
		action: 'Detach a volume from an instance',
		execute: volumeDetachPostExecute,
		description: volumeDetachPostDescription,
	},
	{
		name: 'Create Volume Snapshot',
		value: 'volumeSnapshotCreatePost',
		action: 'Create a snapshot from a volume',
		execute: volumeSnapshotCreatePostExecute,
		description: volumeSnapshotCreatePostDescription,
	},
	{
		name: 'Upsize Volume',
		value: 'volumeUpsizePost',
		action: 'Extend a volume size',
		execute: volumeUpsizePostExecute,
		description: volumeUpsizePostDescription,
	},
	],
	{ operationDisplayOptions: { show: { apiVersion: ['v1'] } } },
);

const v2 = createOperationDispatcher(
	'publicCloudOperationV2',
	'publicCloud',
	[
	{
		name: 'V2 - Create Rancher Service',
		value: 'createRancherServiceV2',
		action: 'createRancherServiceV2',
		execute: serviceCreatePostV2Execute,
		description: serviceCreatePostV2Description,
	},
	{
		name: 'V2 - Delete Rancher Service',
		value: 'deleteRancherServiceV2',
		action: 'deleteRancherServiceV2',
		execute: serviceDeleteDeleteV2Execute,
		description: serviceDeleteDeleteV2Description,
	},
	{
		name: 'V2 - Get Project Detail',
		value: 'getProjectDetailV2',
		action: 'getProjectDetailV2',
		execute: getDetailGetV2Execute,
		description: getDetailGetV2Description,
	},
	{
		name: 'V2 - Get Rancher Service',
		value: 'getRancherServiceV2',
		action: 'getRancherServiceV2',
		execute: serviceGetGetV2Execute,
		description: serviceGetGetV2Description,
	},
	{
		name: 'V2 - Get Rancher Task',
		value: 'getRancherTaskV2',
		action: 'getRancherTaskV2',
		execute: taskDetailGetV2Execute,
		description: taskDetailGetV2Description,
	},
	{
		name: 'V2 - List Global Reference Plans',
		value: 'listGlobalReferencePlansV2',
		action: 'listGlobalReferencePlansV2',
		execute: globalReferencePlanListGetV2Execute,
		description: globalReferencePlanListGetV2Description,
	},
	{
		name: 'V2 - List Global Reference Versions',
		value: 'listGlobalReferenceVersionsV2',
		action: 'listGlobalReferenceVersionsV2',
		execute: globalReferenceVersionListGetV2Execute,
		description: globalReferenceVersionListGetV2Description,
	},
	{
		name: 'V2 - List Projects',
		value: 'listProjectsV2',
		action: 'listProjectsV2',
		execute: listGetV2Execute,
		description: backupListGetDescription,
		default: true,
	},
	{
		name: 'V2 - List Rancher Events',
		value: 'listRancherEventsV2',
		action: 'listRancherEventsV2',
		execute: eventListGetV2Execute,
		description: eventListGetV2Description,
	},
	{
		name: 'V2 - List Rancher Plans',
		value: 'listRancherPlansV2',
		action: 'listRancherPlansV2',
		execute: planCapabilityListGetV2Execute,
		description: planCapabilityListGetV2Description,
	},
	{
		name: 'V2 - List Rancher Services',
		value: 'listRancherServicesV2',
		action: 'listRancherServicesV2',
		execute: serviceListGetV2Execute,
		description: serviceListGetV2Description,
	},
	{
		name: 'V2 - List Rancher Tasks',
		value: 'listRancherTasksV2',
		action: 'listRancherTasksV2',
		execute: taskListGetV2Execute,
		description: taskListGetV2Description,
	},
	{
		name: 'V2 - List Rancher Versions',
		value: 'listRancherVersionsV2',
		action: 'listRancherVersionsV2',
		execute: versionCapabilityListGetV2Execute,
		description: versionCapabilityListGetV2Description,
	},
	{
		name: 'V2 - List Reference Plans',
		value: 'listReferencePlansV2',
		action: 'listReferencePlansV2',
		execute: referencePlanListGetV2Execute,
		description: referencePlanListGetV2Description,
	},
	{
		name: 'V2 - List Reference Versions',
		value: 'listReferenceVersionsV2',
		action: 'listReferenceVersionsV2',
		execute: referenceVersionListGetV2Execute,
		description: referenceVersionListGetV2Description,
	},
	{
		name: 'V2 - Reset Rancher Admin Password',
		value: 'resetRancherAdminPasswordV2',
		action: 'resetRancherAdminPasswordV2',
		execute: adminCredentialsResetV2Execute,
		description: adminCredentialsResetV2Description,
	},
	{
		name: 'V2 - Update Rancher Service',
		value: 'updateRancherServiceV2',
		action: 'updateRancherServiceV2',
		execute: serviceUpdatePutV2Execute,
		description: serviceUpdatePutV2Description,
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
