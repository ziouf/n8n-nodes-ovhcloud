import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionAllowedNetworkCreate,
	execute as executeAllowedNetworkCreate,
} from './allowedNetwork/allowedNetworkCreate.operation';
import {
	description as descriptionAllowedNetworkDelete,
	execute as executeAllowedNetworkDelete,
} from './allowedNetwork/allowedNetworkDelete.operation';
import {
	description as descriptionAllowedNetworkGet,
	execute as executeAllowedNetworkGet,
} from './allowedNetwork/allowedNetworkGet.operation';
import {
	description as descriptionAllowedNetworkList,
	execute as executeAllowedNetworkList,
} from './allowedNetwork/allowedNetworkList.operation';
import {
	description as descriptionAllowedNetworkTaskChangeMaintenanceExecutionDate,
	execute as executeAllowedNetworkTaskChangeMaintenanceExecutionDate,
} from './allowedNetwork/allowedNetworkTaskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionAllowedNetworkTaskGet,
	execute as executeAllowedNetworkTaskGet,
} from './allowedNetwork/allowedNetworkTaskGet.operation';
import {
	description as descriptionAllowedNetworkTaskList,
	execute as executeAllowedNetworkTaskList,
} from './allowedNetwork/allowedNetworkTaskList.operation';
import {
	description as descriptionAllowedNetworkTaskResetTaskState,
	execute as executeAllowedNetworkTaskResetTaskState,
} from './allowedNetwork/allowedNetworkTaskResetTaskState.operation';
import {
	description as descriptionAllowedNetworkUpdate,
	execute as executeAllowedNetworkUpdate,
} from './allowedNetwork/allowedNetworkUpdate.operation';
import {
	description as descriptionBackupRepositoryGet,
	execute as executeBackupRepositoryGet,
} from './backupRepository/backupRepositoryGet.operation';
import {
	description as descriptionBackupRepositoryList,
	execute as executeBackupRepositoryList,
} from './backupRepository/backupRepositoryList.operation';
import {
	description as descriptionCommercialRangeComplianceList,
	execute as executeCommercialRangeComplianceList,
} from './commercialRangeComplianceList.operation';
import {
	description as descriptionCommercialRangeGet,
	execute as executeCommercialRangeGet,
} from './commercialRangeGet.operation';
import {
	description as descriptionCommercialRangeList,
	execute as executeCommercialRangeList,
} from './commercialRangeList.operation';
import {
	description as descriptionCommercialRangeOrderableList,
	execute as executeCommercialRangeOrderableList,
} from './commercialRangeOrderableList.operation';
import {
	description as descriptiondatacenterBackupBatchRestore,
	execute as executedatacenterBackupBatchRestore,
} from './datacenter/backup/datacenterBackupBatchRestore.operation';
import {
	description as descriptiondatacenterBackupCanOptimizeProxies,
	execute as executedatacenterBackupCanOptimizeProxies,
} from './datacenter/backup/datacenterBackupCanOptimizeProxies.operation';
import {
	description as descriptiondatacenterBackupChangeProperties,
	execute as executedatacenterBackupChangeProperties,
} from './datacenter/backup/datacenterBackupChangeProperties.operation';
import {
	description as descriptiondatacenterBackupDisable,
	execute as executedatacenterBackupDisable,
} from './datacenter/backup/datacenterBackupDisable.operation';
import {
	description as descriptiondatacenterBackupEnable,
	execute as executedatacenterBackupEnable,
} from './datacenter/backup/datacenterBackupEnable.operation';
import {
	description as descriptiondatacenterBackupGenerateReport,
	execute as executedatacenterBackupGenerateReport,
} from './datacenter/backup/datacenterBackupGenerateReport.operation';
import {
	description as descriptiondatacenterBackupGet,
	execute as executedatacenterBackupGet,
} from './datacenter/backup/datacenterBackupGet.operation';
import {
	description as descriptiondatacenterBackupOfferCapabilities,
	execute as executedatacenterBackupOfferCapabilities,
} from './datacenter/backup/datacenterBackupOfferCapabilities.operation';
import {
	description as descriptiondatacenterBackupOptimizeProxies,
	execute as executedatacenterBackupOptimizeProxies,
} from './datacenter/backup/datacenterBackupOptimizeProxies.operation';
import {
	description as descriptionclusterGet,
	execute as executeclusterGet,
} from './datacenter/cluster/clusterGet.operation';
import {
	description as descriptionclusterList,
	execute as executeclusterList,
} from './datacenter/cluster/clusterList.operation';
import {
	description as descriptionclusterNsxtCreate,
	execute as executeclusterNsxtCreate,
} from './datacenter/cluster/clusterNsxtCreate.operation';
import {
	description as descriptionclusterNsxtDelete,
	execute as executeclusterNsxtDelete,
} from './datacenter/cluster/clusterNsxtDelete.operation';
import {
	description as descriptionclusterNsxtUpdate,
	execute as executeclusterNsxtUpdate,
} from './datacenter/cluster/clusterNsxtUpdate.operation';
import {
	description as descriptionDatacenterBackupRepositoryGet,
	execute as executeDatacenterBackupRepositoryGet,
} from './datacenter/datacenterBackupRepositoryGet.operation';
import {
	description as descriptionDatacenterBackupRepositoryList,
	execute as executeDatacenterBackupRepositoryList,
} from './datacenter/datacenterBackupRepositoryList.operation';
import {
	description as descriptionDatacenterCheckBackupJobs,
	execute as executeDatacenterCheckBackupJobs,
} from './datacenter/datacenterCheckBackupJobs.operation';
import {
	description as descriptionDatacenterCreate,
	execute as executeDatacenterCreate,
} from './datacenter/datacenterCreate.operation';
import {
	description as descriptionDatacenterDelete,
	execute as executeDatacenterDelete,
} from './datacenter/datacenterDelete.operation';
import {
	description as descriptionDatacenterGet,
	execute as executeDatacenterGet,
} from './datacenter/datacenterGet.operation';
import {
	description as descriptionDatacenterList,
	execute as executeDatacenterList,
} from './datacenter/datacenterList.operation';
import {
	description as descriptionDatacenterOrderNewFilerHourly,
	execute as executeDatacenterOrderNewFilerHourly,
} from './datacenter/datacenterOrderNewFilerHourly.operation';
import {
	description as descriptionDatacenterOrderNewHostHourly,
	execute as executeDatacenterOrderNewHostHourly,
} from './datacenter/datacenterOrderNewHostHourly.operation';
import {
	description as descriptionDatacenterOrderableFilerProfiles,
	execute as executeDatacenterOrderableFilerProfiles,
} from './datacenter/datacenterOrderableFilerProfiles.operation';
import {
	description as descriptionDatacenterOrderableHostProfiles,
	execute as executeDatacenterOrderableHostProfiles,
} from './datacenter/datacenterOrderableHostProfiles.operation';
import {
	description as descriptionDatacenterTaskChangeMaintenanceExecutionDate,
	execute as executeDatacenterTaskChangeMaintenanceExecutionDate,
} from './datacenter/datacenterTaskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionDatacenterTaskGet,
	execute as executeDatacenterTaskGet,
} from './datacenter/datacenterTaskGet.operation';
import {
	description as descriptionDatacenterTaskList,
	execute as executeDatacenterTaskList,
} from './datacenter/datacenterTaskList.operation';
import {
	description as descriptionDatacenterTaskResetTaskState,
	execute as executeDatacenterTaskResetTaskState,
} from './datacenter/datacenterTaskResetTaskState.operation';
import {
	description as descriptionDatacenterUpdate,
	execute as executeDatacenterUpdate,
} from './datacenter/datacenterUpdate.operation';
import {
	description as descriptionzertoDisable,
	execute as executezertoDisable,
} from './datacenter/disasterRecovery/zerto/zertoDisable.operation';
import {
	description as descriptionzertoEnable,
	execute as executezertoEnable,
} from './datacenter/disasterRecovery/zerto/zertoEnable.operation';
import {
	description as descriptionzertoEndMigration,
	execute as executezertoEndMigration,
} from './datacenter/disasterRecovery/zerto/zertoEndMigration.operation';
import {
	description as descriptionzertoEndpointPublicIp,
	execute as executezertoEndpointPublicIp,
} from './datacenter/disasterRecovery/zerto/zertoEndpointPublicIp.operation';
import {
	description as descriptionzertoRemoteSiteCreate,
	execute as executezertoRemoteSiteCreate,
} from './datacenter/disasterRecovery/zerto/zertoRemoteSiteCreate.operation';
import {
	description as descriptionzertoRemoteSiteDelete,
	execute as executezertoRemoteSiteDelete,
} from './datacenter/disasterRecovery/zerto/zertoRemoteSiteDelete.operation';
import {
	description as descriptionzertoRemoteSiteList,
	execute as executezertoRemoteSiteList,
} from './datacenter/disasterRecovery/zerto/zertoRemoteSiteList.operation';
import {
	description as descriptionzertoRequestHealthCheck,
	execute as executezertoRequestHealthCheck,
} from './datacenter/disasterRecovery/zerto/zertoRequestHealthCheck.operation';
import {
	description as descriptionzertoStartMigration,
	execute as executezertoStartMigration,
} from './datacenter/disasterRecovery/zerto/zertoStartMigration.operation';
import {
	description as descriptionzertoStatusGet,
	execute as executezertoStatusGet,
} from './datacenter/disasterRecovery/zerto/zertoStatusGet.operation';
import {
	description as descriptionzertoUsageReport,
	execute as executezertoUsageReport,
} from './datacenter/disasterRecovery/zerto/zertoUsageReport.operation';
import {
	description as descriptionzertoVraResourcesList,
	execute as executezertoVraResourcesList,
} from './datacenter/disasterRecovery/zerto/zertoVraResourcesList.operation';
import {
	description as descriptionzertoVraResourcesUpdate,
	execute as executezertoVraResourcesUpdate,
} from './datacenter/disasterRecovery/zerto/zertoVraResourcesUpdate.operation';
import {
	description as descriptionzertoSingleConfigureVpn,
	execute as executezertoSingleConfigureVpn,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleConfigureVpn.operation';
import {
	description as descriptionzertoSingleDefaultLocalVraNetwork,
	execute as executezertoSingleDefaultLocalVraNetwork,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleDefaultLocalVraNetwork.operation';
import {
	description as descriptionzertoSingleDisable,
	execute as executezertoSingleDisable,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleDisable.operation';
import {
	description as descriptionzertoSingleEnable,
	execute as executezertoSingleEnable,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleEnable.operation';
import {
	description as descriptionzertoSingleEndpointPublicIp,
	execute as executezertoSingleEndpointPublicIp,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleEndpointPublicIp.operation';
import {
	description as descriptionzertoSingleRemoteSiteCreate,
	execute as executezertoSingleRemoteSiteCreate,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteCreate.operation';
import {
	description as descriptionzertoSingleRemoteSiteDelete,
	execute as executezertoSingleRemoteSiteDelete,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteDelete.operation';
import {
	description as descriptionzertoSingleRemoteSiteList,
	execute as executezertoSingleRemoteSiteList,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteList.operation';
import {
	description as descriptionzertoSingleRequestPairingToken,
	execute as executezertoSingleRequestPairingToken,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleRequestPairingToken.operation';
import {
	description as descriptionzertoSingleVraResourcesList,
	execute as executezertoSingleVraResourcesList,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleVraResourcesList.operation';
import {
	description as descriptionzertoSingleVraResourcesUpdate,
	execute as executezertoSingleVraResourcesUpdate,
} from './datacenter/disasterRecovery/zertoSingle/zertoSingleVraResourcesUpdate.operation';
import {
	description as descriptionnsxtEdgeCreate,
	execute as executensxtEdgeCreate,
} from './datacenter/nsxtEdge/nsxtEdgeCreate.operation';
import {
	description as descriptionnsxtEdgeDelete,
	execute as executensxtEdgeDelete,
} from './datacenter/nsxtEdge/nsxtEdgeDelete.operation';
import {
	description as descriptionnsxtEdgeGet,
	execute as executensxtEdgeGet,
} from './datacenter/nsxtEdge/nsxtEdgeGet.operation';
import {
	description as descriptionnsxtEdgeList,
	execute as executensxtEdgeList,
} from './datacenter/nsxtEdge/nsxtEdgeList.operation';
import {
	description as descriptionnsxtEdgeRelocateEdge,
	execute as executensxtEdgeRelocateEdge,
} from './datacenter/nsxtEdge/nsxtEdgeRelocateEdge.operation';
import {
	description as descriptionnsxtEdgeResilience,
	execute as executensxtEdgeResilience,
} from './datacenter/nsxtEdge/nsxtEdgeResilience.operation';
import {
	description as descriptionnsxtEdgeResilienceCanBeEnabled,
	execute as executensxtEdgeResilienceCanBeEnabled,
} from './datacenter/nsxtEdge/nsxtEdgeResilienceCanBeEnabled.operation';
import {
	description as descriptionnsxtEdgeResilienceDisable,
	execute as executensxtEdgeResilienceDisable,
} from './datacenter/nsxtEdge/nsxtEdgeResilienceDisable.operation';
import {
	description as descriptionnsxtEdgeResilienceEnable,
	execute as executensxtEdgeResilienceEnable,
} from './datacenter/nsxtEdge/nsxtEdgeResilienceEnable.operation';
import {
	description as descriptionnsxtEdgesResizingCapabilities,
	execute as executensxtEdgesResizingCapabilities,
} from './datacenter/nsxtEdge/nsxtEdgesResizingCapabilities.operation';
import {
	description as descriptionnsxtEdgesScalingCapabilities,
	execute as executensxtEdgesScalingCapabilities,
} from './datacenter/nsxtEdge/nsxtEdgesScalingCapabilities.operation';
import {
	description as descriptionresizeNsxtEdgeCluster,
	execute as executeresizeNsxtEdgeCluster,
} from './datacenter/nsxtEdge/resizeNsxtEdgeCluster.operation';
import {
	description as descriptionprivateGatewayDisable,
	execute as executeprivateGatewayDisable,
} from './datacenter/privateGateway/privateGatewayDisable.operation';
import {
	description as descriptionprivateGatewayEnable,
	execute as executeprivateGatewayEnable,
} from './datacenter/privateGateway/privateGatewayEnable.operation';
import {
	description as descriptionprivateGatewayGet,
	execute as executeprivateGatewayGet,
} from './datacenter/privateGateway/privateGatewayGet.operation';
import {
	description as descriptionprivateGatewayReconfigure,
	execute as executeprivateGatewayReconfigure,
} from './datacenter/privateGateway/privateGatewayReconfigure.operation';
import {
	description as descriptionfederationActiveDirectoryChangeProperties,
	execute as executefederationActiveDirectoryChangeProperties,
} from './federation/federationActiveDirectoryChangeProperties.operation';
import {
	description as descriptionfederationActiveDirectoryCreate,
	execute as executefederationActiveDirectoryCreate,
} from './federation/federationActiveDirectoryCreate.operation';
import {
	description as descriptionfederationActiveDirectoryDelete,
	execute as executefederationActiveDirectoryDelete,
} from './federation/federationActiveDirectoryDelete.operation';
import {
	description as descriptionfederationActiveDirectoryGet,
	execute as executefederationActiveDirectoryGet,
} from './federation/federationActiveDirectoryGet.operation';
import {
	description as descriptionfederationActiveDirectoryGrantGroup,
	execute as executefederationActiveDirectoryGrantGroup,
} from './federation/federationActiveDirectoryGrantGroup.operation';
import {
	description as descriptionfederationActiveDirectoryGrantUser,
	execute as executefederationActiveDirectoryGrantUser,
} from './federation/federationActiveDirectoryGrantUser.operation';
import {
	description as descriptionfederationActiveDirectoryList,
	execute as executefederationActiveDirectoryList,
} from './federation/federationActiveDirectoryList.operation';
import {
	description as descriptionfederationGet,
	execute as executefederationGet,
} from './federation/federationGet.operation';
import {
	description as descriptionFilerCheckGlobalCompatible,
	execute as executeFilerCheckGlobalCompatible,
} from './filer/filerCheckGlobalCompatible.operation';
import {
	description as descriptionFilerConvertToGlobal,
	execute as executeFilerConvertToGlobal,
} from './filer/filerConvertToGlobal.operation';
import {
	description as descriptionFilerGet,
	execute as executeFilerGet,
} from './filer/filerGet.operation';
import {
	description as descriptionFilerGlobalCheckGlobalCompatible,
	execute as executeFilerGlobalCheckGlobalCompatible,
} from './filer/filerGlobalCheckGlobalCompatible.operation';
import {
	description as descriptionFilerGlobalConvertToGlobal,
	execute as executeFilerGlobalConvertToGlobal,
} from './filer/filerGlobalConvertToGlobal.operation';
import {
	description as descriptionFilerGlobalGet,
	execute as executeFilerGlobalGet,
} from './filer/filerGlobalGet.operation';
import {
	description as descriptionFilerGlobalHourlyConsumption,
	execute as executeFilerGlobalHourlyConsumption,
} from './filer/filerGlobalHourlyConsumption.operation';
import {
	description as descriptionFilerGlobalList,
	execute as executeFilerGlobalList,
} from './filer/filerGlobalList.operation';
import {
	description as descriptionFilerGlobalLocation,
	execute as executeFilerGlobalLocation,
} from './filer/filerGlobalLocation.operation';
import {
	description as descriptionFilerGlobalRemove,
	execute as executeFilerGlobalRemove,
} from './filer/filerGlobalRemove.operation';
import {
	description as descriptionFilerGlobalTaskChangeMaintenanceExecutionDate,
	execute as executeFilerGlobalTaskChangeMaintenanceExecutionDate,
} from './filer/filerGlobalTaskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionFilerGlobalTaskGet,
	execute as executeFilerGlobalTaskGet,
} from './filer/filerGlobalTaskGet.operation';
import {
	description as descriptionFilerGlobalTaskList,
	execute as executeFilerGlobalTaskList,
} from './filer/filerGlobalTaskList.operation';
import {
	description as descriptionFilerGlobalTaskResetTaskState,
	execute as executeFilerGlobalTaskResetTaskState,
} from './filer/filerGlobalTaskResetTaskState.operation';
import {
	description as descriptionFilerHourlyConsumption,
	execute as executeFilerHourlyConsumption,
} from './filer/filerHourlyConsumption.operation';
import {
	description as descriptionFilerList,
	execute as executeFilerList,
} from './filer/filerList.operation';
import {
	description as descriptionFilerLocation,
	execute as executeFilerLocation,
} from './filer/filerLocation.operation';
import {
	description as descriptionFilerRemove,
	execute as executeFilerRemove,
} from './filer/filerRemove.operation';
import {
	description as descriptionFilerTaskChangeMaintenanceExecutionDate,
	execute as executeFilerTaskChangeMaintenanceExecutionDate,
} from './filer/filerTaskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionFilerTaskGet,
	execute as executeFilerTaskGet,
} from './filer/filerTaskGet.operation';
import {
	description as descriptionFilerTaskList,
	execute as executeFilerTaskList,
} from './filer/filerTaskList.operation';
import {
	description as descriptionFilerTaskResetTaskState,
	execute as executeFilerTaskResetTaskState,
} from './filer/filerTaskResetTaskState.operation';
import {
	description as descriptionGet,
	execute as executeGet,
} from './get.operation';
import {
	description as descriptionhcxCanBeDisabled,
	execute as executehcxCanBeDisabled,
} from './hcx/hcxCanBeDisabled.operation';
import {
	description as descriptionhcxCanBeEnabled,
	execute as executehcxCanBeEnabled,
} from './hcx/hcxCanBeEnabled.operation';
import {
	description as descriptionhcxDisable,
	execute as executehcxDisable,
} from './hcx/hcxDisable.operation';
import {
	description as descriptionhcxEnable,
	execute as executehcxEnable,
} from './hcx/hcxEnable.operation';
import {
	description as descriptionhcxGet,
	execute as executehcxGet,
} from './hcx/hcxGet.operation';
import {
	description as descriptionhdsCanBeDisabled,
	execute as executehdsCanBeDisabled,
} from './hds/hdsCanBeDisabled.operation';
import {
	description as descriptionhdsCanBeEnabled,
	execute as executehdsCanBeEnabled,
} from './hds/hdsCanBeEnabled.operation';
import {
	description as descriptionhdsDisable,
	execute as executehdsDisable,
} from './hds/hdsDisable.operation';
import {
	description as descriptionhdsEnable,
	execute as executehdsEnable,
} from './hds/hdsEnable.operation';
import {
	description as descriptionhdsGet,
	execute as executehdsGet,
} from './hds/hdsGet.operation';
import {
	description as descriptionhipaaCanBeDisabled,
	execute as executehipaaCanBeDisabled,
} from './hipaa/hipaaCanBeDisabled.operation';
import {
	description as descriptionhipaaCanBeEnabled,
	execute as executehipaaCanBeEnabled,
} from './hipaa/hipaaCanBeEnabled.operation';
import {
	description as descriptionhipaaDisable,
	execute as executehipaaDisable,
} from './hipaa/hipaaDisable.operation';
import {
	description as descriptionhipaaEnable,
	execute as executehipaaEnable,
} from './hipaa/hipaaEnable.operation';
import {
	description as descriptionhipaaGet,
	execute as executehipaaGet,
} from './hipaa/hipaaGet.operation';
import {
	description as descriptionHostAddHostSpare,
	execute as executeHostAddHostSpare,
} from './host/hostAddHostSpare.operation';
import {
	description as descriptionHostGet,
	execute as executeHostGet,
} from './host/hostGet.operation';
import {
	description as descriptionHostHourlyConsumption,
	execute as executeHostHourlyConsumption,
} from './host/hostHourlyConsumption.operation';
import {
	description as descriptionHostList,
	execute as executeHostList,
} from './host/hostList.operation';
import {
	description as descriptionHostLocation,
	execute as executeHostLocation,
} from './host/hostLocation.operation';
import {
	description as descriptionHostRemove,
	execute as executeHostRemove,
} from './host/hostRemove.operation';
import {
	description as descriptionHostResilience,
	execute as executeHostResilience,
} from './host/hostResilience.operation';
import {
	description as descriptionHostResilienceCanBeEnabled,
	execute as executeHostResilienceCanBeEnabled,
} from './host/hostResilienceCanBeEnabled.operation';
import {
	description as descriptionHostResilienceDisable,
	execute as executeHostResilienceDisable,
} from './host/hostResilienceDisable.operation';
import {
	description as descriptionHostResilienceEnable,
	execute as executeHostResilienceEnable,
} from './host/hostResilienceEnable.operation';
import {
	description as descriptionHostTaskChangeMaintenanceExecutionDate,
	execute as executeHostTaskChangeMaintenanceExecutionDate,
} from './host/hostTaskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionHostTaskGet,
	execute as executeHostTaskGet,
} from './host/hostTaskGet.operation';
import {
	description as descriptionHostTaskList,
	execute as executeHostTaskList,
} from './host/hostTaskList.operation';
import {
	description as descriptionHostTaskResetTaskState,
	execute as executeHostTaskResetTaskState,
} from './host/hostTaskResetTaskState.operation';
import {
	description as descriptionHostProfileGet,
	execute as executeHostProfileGet,
} from './hostProfileGet.operation';
import {
	description as descriptionHostProfileList,
	execute as executeHostProfileList,
} from './hostProfileList.operation';
import {
	description as descriptionHostProfileServiceGet,
	execute as executeHostProfileServiceGet,
} from './hostProfileServiceGet.operation';
import {
	description as descriptionHostProfileServiceList,
	execute as executeHostProfileServiceList,
} from './hostProfileServiceList.operation';
import {
	description as descriptionHypervisorGet,
	execute as executeHypervisorGet,
} from './hypervisorGet.operation';
import {
	description as descriptionHypervisorList,
	execute as executeHypervisorList,
} from './hypervisorList.operation';
import {
	description as descriptionHypervisorServiceGet,
	execute as executeHypervisorServiceGet,
} from './hypervisorServiceGet.operation';
import {
	description as descriptionHypervisorServiceList,
	execute as executeHypervisorServiceList,
} from './hypervisorServiceList.operation';
import {
	description as descriptioniamAddRole,
	execute as executeiamAddRole,
} from './iam/iamAddRole.operation';
import {
	description as descriptioniamCanBeDisabled,
	execute as executeiamCanBeDisabled,
} from './iam/iamCanBeDisabled.operation';
import {
	description as descriptioniamCanBeEnabled,
	execute as executeiamCanBeEnabled,
} from './iam/iamCanBeEnabled.operation';
import {
	description as descriptioniamDisable,
	execute as executeiamDisable,
} from './iam/iamDisable.operation';
import {
	description as descriptioniamEnable,
	execute as executeiamEnable,
} from './iam/iamEnable.operation';
import {
	description as descriptioniamGet,
	execute as executeiamGet,
} from './iam/iamGet.operation';
import {
	description as descriptionIpDetails,
	execute as executeIpDetails,
} from './ip/ipDetails.operation';
import {
	description as descriptionIpGet,
	execute as executeIpGet,
} from './ip/ipGet.operation';
import {
	description as descriptionIpList,
	execute as executeIpList,
} from './ip/ipList.operation';
import {
	description as descriptionIpTaskChangeMaintenanceExecutionDate,
	execute as executeIpTaskChangeMaintenanceExecutionDate,
} from './ip/ipTaskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionIpTaskGet,
	execute as executeIpTaskGet,
} from './ip/ipTaskGet.operation';
import {
	description as descriptionIpTaskList,
	execute as executeIpTaskList,
} from './ip/ipTaskList.operation';
import {
	description as descriptionIpTaskResetTaskState,
	execute as executeIpTaskResetTaskState,
} from './ip/ipTaskResetTaskState.operation';
import {
	description as descriptionList,
	execute as executeList,
} from './list.operation';
import {
	description as descriptionLocationGet,
	execute as executeLocationGet,
} from './locationGet.operation';
import {
	description as descriptionLocationList,
	execute as executeLocationList,
} from './locationList.operation';
import {
	description as descriptionLocationServiceGet,
	execute as executeLocationServiceGet,
} from './locationServiceGet.operation';
import {
	description as descriptionlogKindGet,
	execute as executelogKindGet,
} from './log/logKindGet.operation';
import {
	description as descriptionlogKindList,
	execute as executelogKindList,
} from './log/logKindList.operation';
import {
	description as descriptionlogSubscriptionCreate,
	execute as executelogSubscriptionCreate,
} from './log/logSubscriptionCreate.operation';
import {
	description as descriptionlogSubscriptionDelete,
	execute as executelogSubscriptionDelete,
} from './log/logSubscriptionDelete.operation';
import {
	description as descriptionlogSubscriptionGet,
	execute as executelogSubscriptionGet,
} from './log/logSubscriptionGet.operation';
import {
	description as descriptionlogSubscriptionList,
	execute as executelogSubscriptionList,
} from './log/logSubscriptionList.operation';
import {
	description as descriptionlogUrlCreate,
	execute as executelogUrlCreate,
} from './log/logUrlCreate.operation';
import {
	description as descriptionlogForwarderCanBeDisabled,
	execute as executelogForwarderCanBeDisabled,
} from './logForwarder/logForwarderCanBeDisabled.operation';
import {
	description as descriptionlogForwarderCanBeEnabled,
	execute as executelogForwarderCanBeEnabled,
} from './logForwarder/logForwarderCanBeEnabled.operation';
import {
	description as descriptionlogForwarderDisable,
	execute as executelogForwarderDisable,
} from './logForwarder/logForwarderDisable.operation';
import {
	description as descriptionlogForwarderEnable,
	execute as executelogForwarderEnable,
} from './logForwarder/logForwarderEnable.operation';
import {
	description as descriptionlogForwarderGet,
	execute as executelogForwarderGet,
} from './logForwarder/logForwarderGet.operation';
import {
	description as descriptionnsxCanBeDisabled,
	execute as executensxCanBeDisabled,
} from './nsx/nsxCanBeDisabled.operation';
import {
	description as descriptionnsxCanBeEnabled,
	execute as executensxCanBeEnabled,
} from './nsx/nsxCanBeEnabled.operation';
import {
	description as descriptionnsxDisable,
	execute as executensxDisable,
} from './nsx/nsxDisable.operation';
import {
	description as descriptionnsxEnable,
	execute as executensxEnable,
} from './nsx/nsxEnable.operation';
import {
	description as descriptionnsxGet,
	execute as executensxGet,
} from './nsx/nsxGet.operation';
import {
	description as descriptionpcidssCanBeDisabled,
	execute as executepcidssCanBeDisabled,
} from './pcidss/pcidssCanBeDisabled.operation';
import {
	description as descriptionpcidssCanBeEnabled,
	execute as executepcidssCanBeEnabled,
} from './pcidss/pcidssCanBeEnabled.operation';
import {
	description as descriptionpcidssDisable,
	execute as executepcidssDisable,
} from './pcidss/pcidssDisable.operation';
import {
	description as descriptionpcidssEnable,
	execute as executepcidssEnable,
} from './pcidss/pcidssEnable.operation';
import {
	description as descriptionpcidssGet,
	execute as executepcidssGet,
} from './pcidss/pcidssGet.operation';
import {
	description as descriptionrobotGet,
	execute as executerobotGet,
} from './robot/robotGet.operation';
import {
	description as descriptionrobotList,
	execute as executerobotList,
} from './robot/robotList.operation';
import {
	description as descriptioncanDeployNsxtEdgesOnGlobalDatastores,
	execute as executecanDeployNsxtEdgesOnGlobalDatastores,
} from './root/canDeployNsxtEdgesOnGlobalDatastores.operation';
import {
	description as descriptioncapabilitiesGet,
	execute as executecapabilitiesGet,
} from './root/capabilitiesGet.operation';
import {
	description as descriptionChangeContact,
	execute as executeChangeContact,
} from './root/changeContact.operation';
import {
	description as descriptionChangeProperties,
	execute as executeChangeProperties,
} from './root/changeProperties.operation';
import {
	description as descriptionConfirmTermination,
	execute as executeConfirmTermination,
} from './root/confirmTermination.operation';
import {
	description as descriptiongenerateNsxvInventory,
	execute as executegenerateNsxvInventory,
} from './root/generateNsxvInventory.operation';
import {
	description as descriptiongenerateVxlanToVrackMapping,
	execute as executegenerateVxlanToVrackMapping,
} from './root/generateVxlanToVrackMapping.operation';
import {
	description as descriptionglobalTasksList,
	execute as executeglobalTasksList,
} from './root/globalTasksList.operation';
import {
	description as descriptionnewPricesGet,
	execute as executenewPricesGet,
} from './root/newPricesGet.operation';
import {
	description as descriptionnsxtGet,
	execute as executensxtGet,
} from './root/nsxtGet.operation';
import {
	description as descriptionorderNewFilerHourly,
	execute as executeorderNewFilerHourly,
} from './root/orderNewFilerHourly.operation';
import {
	description as descriptionorderableIpCountriesGet,
	execute as executeorderableIpCountriesGet,
} from './root/orderableIpCountriesGet.operation';
import {
	description as descriptionpasswordPolicyGet,
	execute as executepasswordPolicyGet,
} from './root/passwordPolicyGet.operation';
import {
	description as descriptionresetTriggeredAlarm,
	execute as executeresetTriggeredAlarm,
} from './root/resetTriggeredAlarm.operation';
import {
	description as descriptionTerminate,
	execute as executeTerminate,
} from './root/terminate.operation';
import {
	description as descriptionUpdate,
	execute as executeUpdate,
} from './root/update.operation';
import {
	description as descriptionupgradeHypervisor,
	execute as executeupgradeHypervisor,
} from './root/upgradeHypervisor.operation';
import {
	description as descriptionupgradeVcenter,
	execute as executeupgradeVcenter,
} from './root/upgradeVcenter.operation';
import {
	description as descriptionvcenterVersionGet,
	execute as executevcenterVersionGet,
} from './root/vcenterVersionGet.operation';
import {
	description as descriptionvmwareCloudDirectorEligibility,
	execute as executevmwareCloudDirectorEligibility,
} from './root/vmwareCloudDirectorEligibility.operation';
import {
	description as descriptionsapCreate,
	execute as executesapCreate,
} from './sap/sapCreate.operation';
import {
	description as descriptionsapDelete,
	execute as executesapDelete,
} from './sap/sapDelete.operation';
import {
	description as descriptionsapGet,
	execute as executesapGet,
} from './sap/sapGet.operation';
import {
	description as descriptionsapList,
	execute as executesapList,
} from './sap/sapList.operation';
import {
	description as descriptionsecurityOptionsCompatibilityMatrix,
	execute as executesecurityOptionsCompatibilityMatrix,
} from './securityOptions/securityOptionsCompatibilityMatrix.operation';
import {
	description as descriptionsecurityOptionsDependenciesTree,
	execute as executesecurityOptionsDependenciesTree,
} from './securityOptions/securityOptionsDependenciesTree.operation';
import {
	description as descriptionsecurityOptionsGet,
	execute as executesecurityOptionsGet,
} from './securityOptions/securityOptionsGet.operation';
import {
	description as descriptionsecurityOptionsPendingOptions,
	execute as executesecurityOptionsPendingOptions,
} from './securityOptions/securityOptionsPendingOptions.operation';
import {
	description as descriptionsecurityOptionsResumePendingEnabling,
	execute as executesecurityOptionsResumePendingEnabling,
} from './securityOptions/securityOptionsResumePendingEnabling.operation';
import {
	description as descriptionServiceInfosGet,
	execute as executeServiceInfosGet,
} from './serviceInfos/serviceInfosGet.operation';
import {
	description as descriptionServiceInfosUpdate,
	execute as executeServiceInfosUpdate,
} from './serviceInfos/serviceInfosUpdate.operation';
import {
	description as descriptionservicePackGet,
	execute as executeservicePackGet,
} from './servicePack/servicePackGet.operation';
import {
	description as descriptionservicePacksGet,
	execute as executeservicePacksGet,
} from './servicePacks/servicePacksGet.operation';
import {
	description as descriptionservicePacksList,
	execute as executeservicePacksList,
} from './servicePacks/servicePacksList.operation';
import {
	description as descriptionStockHostList,
	execute as executeStockHostList,
} from './stockHostList.operation';
import {
	description as descriptionStockPccList,
	execute as executeStockPccList,
} from './stockPccList.operation';
import {
	description as descriptionStockZpoolList,
	execute as executeStockZpoolList,
} from './stockZpoolList.operation';
import {
	description as descriptiontagGet,
	execute as executetagGet,
} from './tag/tagGet.operation';
import {
	description as descriptiontagList,
	execute as executetagList,
} from './tag/tagList.operation';
import {
	description as descriptionTaskChangeMaintenanceExecutionDate,
	execute as executeTaskChangeMaintenanceExecutionDate,
} from './task/taskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionTaskGet,
	execute as executeTaskGet,
} from './task/taskGet.operation';
import {
	description as descriptionTaskList,
	execute as executeTaskList,
} from './task/taskList.operation';
import {
	description as descriptionTaskResetTaskState,
	execute as executeTaskResetTaskState,
} from './task/taskResetTaskState.operation';
import {
	description as descriptiontwoFAWhitelistChangeProperties,
	execute as executetwoFAWhitelistChangeProperties,
} from './twoFAWhitelist/twoFAWhitelistChangeProperties.operation';
import {
	description as descriptiontwoFAWhitelistCreate,
	execute as executetwoFAWhitelistCreate,
} from './twoFAWhitelist/twoFAWhitelistCreate.operation';
import {
	description as descriptiontwoFAWhitelistDelete,
	execute as executetwoFAWhitelistDelete,
} from './twoFAWhitelist/twoFAWhitelistDelete.operation';
import {
	description as descriptiontwoFAWhitelistGet,
	execute as executetwoFAWhitelistGet,
} from './twoFAWhitelist/twoFAWhitelistGet.operation';
import {
	description as descriptiontwoFAWhitelistList,
	execute as executetwoFAWhitelistList,
} from './twoFAWhitelist/twoFAWhitelistList.operation';
import {
	description as descriptionUserChangePassword,
	execute as executeUserChangePassword,
} from './user/userChangePassword.operation';
import {
	description as descriptionUserChangeProperties,
	execute as executeUserChangeProperties,
} from './user/userChangeProperties.operation';
import {
	description as descriptionUserConfirmPhoneNumber,
	execute as executeUserConfirmPhoneNumber,
} from './user/userConfirmPhoneNumber.operation';
import {
	description as descriptionUserCreate,
	execute as executeUserCreate,
} from './user/userCreate.operation';
import {
	description as descriptionUserDelete,
	execute as executeUserDelete,
} from './user/userDelete.operation';
import {
	description as descriptionUserDisable,
	execute as executeUserDisable,
} from './user/userDisable.operation';
import {
	description as descriptionUserEnable,
	execute as executeUserEnable,
} from './user/userEnable.operation';
import {
	description as descriptionUserGet,
	execute as executeUserGet,
} from './user/userGet.operation';
import {
	description as descriptionUserList,
	execute as executeUserList,
} from './user/userList.operation';
import {
	description as descriptionUserObjectRightCreate,
	execute as executeUserObjectRightCreate,
} from './user/userObjectRightCreate.operation';
import {
	description as descriptionUserObjectRightDelete,
	execute as executeUserObjectRightDelete,
} from './user/userObjectRightDelete.operation';
import {
	description as descriptionUserObjectRightGet,
	execute as executeUserObjectRightGet,
} from './user/userObjectRightGet.operation';
import {
	description as descriptionUserObjectRightList,
	execute as executeUserObjectRightList,
} from './user/userObjectRightList.operation';
import {
	description as descriptionUserRightGet,
	execute as executeUserRightGet,
} from './user/userRightGet.operation';
import {
	description as descriptionUserRightList,
	execute as executeUserRightList,
} from './user/userRightList.operation';
import {
	description as descriptionUserRightUpdate,
	execute as executeUserRightUpdate,
} from './user/userRightUpdate.operation';
import {
	description as descriptionUserTaskChangeMaintenanceExecutionDate,
	execute as executeUserTaskChangeMaintenanceExecutionDate,
} from './user/userTaskChangeMaintenanceExecutionDate.operation';
import {
	description as descriptionUserTaskGet,
	execute as executeUserTaskGet,
} from './user/userTaskGet.operation';
import {
	description as descriptionUserTaskList,
	execute as executeUserTaskList,
} from './user/userTaskList.operation';
import {
	description as descriptionUserTaskResetTaskState,
	execute as executeUserTaskResetTaskState,
} from './user/userTaskResetTaskState.operation';
import {
	description as descriptionvendorGet,
	execute as executevendorGet,
} from './vendor/vendorGet.operation';
import {
	description as descriptionvendorObjectTypeList,
	execute as executevendorObjectTypeList,
} from './vendor/vendorObjectTypeList.operation';
import {
	description as descriptionvendorOvhId,
	execute as executevendorOvhId,
} from './vendor/vendorOvhId.operation';
import {
	description as descriptionvlanGet,
	execute as executevlanGet,
} from './vlan/vlanGet.operation';
import {
	description as descriptionvlanList,
	execute as executevlanList,
} from './vlan/vlanList.operation';
import {
	description as descriptionVmBackupJobDisable,
	execute as executeVmBackupJobDisable,
} from './vm/vmBackupJobDisable.operation';
import {
	description as descriptionVmBackupJobEnable,
	execute as executeVmBackupJobEnable,
} from './vm/vmBackupJobEnable.operation';
import {
	description as descriptionVmBackupJobGet,
	execute as executeVmBackupJobGet,
} from './vm/vmBackupJobGet.operation';
import {
	description as descriptionVmBackupJobUpdate,
	execute as executeVmBackupJobUpdate,
} from './vm/vmBackupJobUpdate.operation';
import {
	description as descriptionVmDisableBackup,
	execute as executeVmDisableBackup,
} from './vm/vmDisableBackup.operation';
import {
	description as descriptionVmDisableCarp,
	execute as executeVmDisableCarp,
} from './vm/vmDisableCarp.operation';
import {
	description as descriptionVmEditBackup,
	execute as executeVmEditBackup,
} from './vm/vmEditBackup.operation';
import {
	description as descriptionVmEnableBackup,
	execute as executeVmEnableBackup,
} from './vm/vmEnableBackup.operation';
import {
	description as descriptionVmEnableCarp,
	execute as executeVmEnableCarp,
} from './vm/vmEnableCarp.operation';
import {
	description as descriptionVmGet,
	execute as executeVmGet,
} from './vm/vmGet.operation';
import {
	description as descriptionVmLicensedList,
	execute as executeVmLicensedList,
} from './vm/vmLicensedList.operation';
import {
	description as descriptionVmList,
	execute as executeVmList,
} from './vm/vmList.operation';
import {
	description as descriptionVmRemoveLicense,
	execute as executeVmRemoveLicense,
} from './vm/vmRemoveLicense.operation';
import {
	description as descriptionVmRestoreBackup,
	execute as executeVmRestoreBackup,
} from './vm/vmRestoreBackup.operation';
import {
	description as descriptionVmRestorePointGet,
	execute as executeVmRestorePointGet,
} from './vm/vmRestorePointGet.operation';
import {
	description as descriptionVmRestorePointRestore,
	execute as executeVmRestorePointRestore,
} from './vm/vmRestorePointRestore.operation';
import {
	description as descriptionVmRestorePointsList,
	execute as executeVmRestorePointsList,
} from './vm/vmRestorePointsList.operation';
import {
	description as descriptionVmSetLicense,
	execute as executeVmSetLicense,
} from './vm/vmSetLicense.operation';
import {
	description as descriptionvmEncryptionKmsChangeProperties,
	execute as executevmEncryptionKmsChangeProperties,
} from './vmEncryption/kms/vmEncryptionKmsChangeProperties.operation';
import {
	description as descriptionvmEncryptionKmsCreate,
	execute as executevmEncryptionKmsCreate,
} from './vmEncryption/kms/vmEncryptionKmsCreate.operation';
import {
	description as descriptionvmEncryptionKmsDelete,
	execute as executevmEncryptionKmsDelete,
} from './vmEncryption/kms/vmEncryptionKmsDelete.operation';
import {
	description as descriptionvmEncryptionKmsGet,
	execute as executevmEncryptionKmsGet,
} from './vmEncryption/kms/vmEncryptionKmsGet.operation';
import {
	description as descriptionvmEncryptionKmsList,
	execute as executevmEncryptionKmsList,
} from './vmEncryption/kms/vmEncryptionKmsList.operation';
import {
	description as descriptionvmEncryptionGet,
	execute as executevmEncryptionGet,
} from './vmEncryption/vmEncryptionGet.operation';
import {
	description as descriptionvrackDelete,
	execute as executevrackDelete,
} from './vrack/vrackDelete.operation';
import {
	description as descriptionvrackGet,
	execute as executevrackGet,
} from './vrack/vrackGet.operation';
import {
	description as descriptionvrackList,
	execute as executevrackList,
} from './vrack/vrackList.operation';
import {
	description as descriptionvropsCanBeDisabled,
	execute as executevropsCanBeDisabled,
} from './vrops/vropsCanBeDisabled.operation';
import {
	description as descriptionvropsCanBeEnabled,
	execute as executevropsCanBeEnabled,
} from './vrops/vropsCanBeEnabled.operation';
import {
	description as descriptionvropsDisable,
	execute as executevropsDisable,
} from './vrops/vropsDisable.operation';
import {
	description as descriptionvropsEnable,
	execute as executevropsEnable,
} from './vrops/vropsEnable.operation';
import {
	description as descriptionvropsGet,
	execute as executevropsGet,
} from './vrops/vropsGet.operation';
import {
	description as descriptionvropsOutgoingFlowChangeProperties,
	execute as executevropsOutgoingFlowChangeProperties,
} from './vrops/vropsOutgoingFlowChangeProperties.operation';
import {
	description as descriptionvropsOutgoingFlowCreate,
	execute as executevropsOutgoingFlowCreate,
} from './vrops/vropsOutgoingFlowCreate.operation';
import {
	description as descriptionvropsOutgoingFlowDelete,
	execute as executevropsOutgoingFlowDelete,
} from './vrops/vropsOutgoingFlowDelete.operation';
import {
	description as descriptionvropsOutgoingFlowGet,
	execute as executevropsOutgoingFlowGet,
} from './vrops/vropsOutgoingFlowGet.operation';
import {
	description as descriptionvropsOutgoingFlowList,
	execute as executevropsOutgoingFlowList,
} from './vrops/vropsOutgoingFlowList.operation';
import {
	description as descriptionvropsUpgrade,
	execute as executevropsUpgrade,
} from './vrops/vropsUpgrade.operation';

const { description, execute } = createOperationDispatcher(
	'dedicatedCloudOperation',
	'dedicatedCloud',
	[
	{
		name: 'Activate Backup on Virtual Machine',
		value: 'vmEnableBackup',
		action: 'Activate backup on virtual machine',
		execute: executeVmEnableBackup,
		description: descriptionVmEnableBackup,
	},
	{
		name: 'Add NSX-T Edge',
		value: 'nsxtEdgeCreate',
		action: 'add NSX-T Edge',
		execute: executensxtEdgeCreate,
		description: descriptionnsxtEdgeCreate,
	},
	{
		name: 'Ask for the Termination of Your Service',
		value: 'terminate',
		action: 'Ask for the termination of your service',
		execute: executeTerminate,
		description: descriptionTerminate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (Allowed Network)',
		value: 'allowedNetworkTaskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeAllowedNetworkTaskChangeMaintenanceExecutionDate,
		description: descriptionAllowedNetworkTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (Datacenter)',
		value: 'datacenterTaskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeDatacenterTaskChangeMaintenanceExecutionDate,
		description: descriptionDatacenterTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (Datastore)',
		value: 'filerTaskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeFilerTaskChangeMaintenanceExecutionDate,
		description: descriptionFilerTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (Global Datastore)',
		value: 'filerGlobalTaskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeFilerGlobalTaskChangeMaintenanceExecutionDate,
		description: descriptionFilerGlobalTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (Host)',
		value: 'hostTaskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeHostTaskChangeMaintenanceExecutionDate,
		description: descriptionHostTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (IP Block)',
		value: 'ipTaskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeIpTaskChangeMaintenanceExecutionDate,
		description: descriptionIpTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (Task)',
		value: 'taskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeTaskChangeMaintenanceExecutionDate,
		description: descriptionTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change the Execution Date of a Maintenance Operation (User)',
		value: 'userTaskChangeMaintenanceExecutionDate',
		action: 'Change the execution date of a maintenance operation',
		execute: executeUserTaskChangeMaintenanceExecutionDate,
		description: descriptionUserTaskChangeMaintenanceExecutionDate,
	},
	{
		name: 'Change User Password',
		value: 'userChangePassword',
		action: 'Change user password',
		execute: executeUserChangePassword,
		description: descriptionUserChangePassword,
	},
	{
		name: 'Change Zerto Endpoint Public IP',
		value: 'zertoEndpointPublicIp',
		action: 'change Zerto Endpoint Public IP',
		execute: executezertoEndpointPublicIp,
		description: descriptionzertoEndpointPublicIp,
	},
	{
		name: 'Change Zerto Single Endpoint Public IP',
		value: 'zertoSingleEndpointPublicIp',
		action: 'change Zerto Single Endpoint Public IP',
		execute: executezertoSingleEndpointPublicIp,
		description: descriptionzertoSingleEndpointPublicIp,
	},
	{
		name: 'Check Ability to Convert Datastore to Global Datastore',
		value: 'filerCheckGlobalCompatible',
		action: 'Check ability to convert datastore to global datastore',
		execute: executeFilerCheckGlobalCompatible,
		description: descriptionFilerCheckGlobalCompatible,
	},
	{
		name: 'Check Global Datastore Compatibility',
		value: 'filerGlobalCheckGlobalCompatible',
		action: 'Check ability to convert datastore to global datastore',
		execute: executeFilerGlobalCheckGlobalCompatible,
		description: descriptionFilerGlobalCheckGlobalCompatible,
	},
	{
		name: 'Check if Aria Operations Can Be Disabled',
		value: 'vropsCanBeDisabled',
		action: 'check if Aria Operations Can Be Disabled',
		execute: executevropsCanBeDisabled,
		description: descriptionvropsCanBeDisabled,
	},
	{
		name: 'Check if Aria Operations Can Be Enabled',
		value: 'vropsCanBeEnabled',
		action: 'check if Aria Operations Can Be Enabled',
		execute: executevropsCanBeEnabled,
		description: descriptionvropsCanBeEnabled,
	},
	{
		name: 'Check if Backup Jobs Are Correctly Set in Virtual Datacenter',
		value: 'datacenterCheckBackupJobs',
		action: 'Check if backup jobs are correctly set in virtual datacenter',
		execute: executeDatacenterCheckBackupJobs,
		description: descriptionDatacenterCheckBackupJobs,
	},
	{
		name: 'Check if HCX Option Can Be Disabled',
		value: 'hcxCanBeDisabled',
		action: 'check if HCX Option Can Be Disabled',
		execute: executehcxCanBeDisabled,
		description: descriptionhcxCanBeDisabled,
	},
	{
		name: 'Check if HCX Option Can Be Enabled',
		value: 'hcxCanBeEnabled',
		action: 'check if HCX Option Can Be Enabled',
		execute: executehcxCanBeEnabled,
		description: descriptionhcxCanBeEnabled,
	},
	{
		name: 'Check if HDS Certification Can Be Disabled',
		value: 'hdsCanBeDisabled',
		action: 'check if HDS Certification Can Be Disabled',
		execute: executehdsCanBeDisabled,
		description: descriptionhdsCanBeDisabled,
	},
	{
		name: 'Check if HDS Certification Can Be Enabled',
		value: 'hdsCanBeEnabled',
		action: 'check if HDS Certification Can Be Enabled',
		execute: executehdsCanBeEnabled,
		description: descriptionhdsCanBeEnabled,
	},
	{
		name: 'Check if HIPAA Certification Can Be Disabled',
		value: 'hipaaCanBeDisabled',
		action: 'check if HIPAA Certification Can Be Disabled',
		execute: executehipaaCanBeDisabled,
		description: descriptionhipaaCanBeDisabled,
	},
	{
		name: 'Check if HIPAA Certification Can Be Enabled',
		value: 'hipaaCanBeEnabled',
		action: 'check if HIPAA Certification Can Be Enabled',
		execute: executehipaaCanBeEnabled,
		description: descriptionhipaaCanBeEnabled,
	},
	{
		name: 'Check if IAM Option Can Be Disabled',
		value: 'iamCanBeDisabled',
		action: 'check if IAM Option Can Be Disabled',
		execute: executeiamCanBeDisabled,
		description: descriptioniamCanBeDisabled,
	},
	{
		name: 'Check if IAM Option Can Be Enabled',
		value: 'iamCanBeEnabled',
		action: 'check if IAM Option Can Be Enabled',
		execute: executeiamCanBeEnabled,
		description: descriptioniamCanBeEnabled,
	},
	{
		name: 'Check if Log Forwarder Can Be Disabled',
		value: 'logForwarderCanBeDisabled',
		action: 'check if Log Forwarder Can Be Disabled',
		execute: executelogForwarderCanBeDisabled,
		description: descriptionlogForwarderCanBeDisabled,
	},
	{
		name: 'Check if Log Forwarder Can Be Enabled',
		value: 'logForwarderCanBeEnabled',
		action: 'check if Log Forwarder Can Be Enabled',
		execute: executelogForwarderCanBeEnabled,
		description: descriptionlogForwarderCanBeEnabled,
	},
	{
		name: 'Check if NSX-V Option Can Be Disabled',
		value: 'nsxCanBeDisabled',
		action: 'check if NSX-V Option Can Be Disabled',
		execute: executensxCanBeDisabled,
		description: descriptionnsxCanBeDisabled,
	},
	{
		name: 'Check if NSX-V Option Can Be Enabled',
		value: 'nsxCanBeEnabled',
		action: 'check if NSX-V Option Can Be Enabled',
		execute: executensxCanBeEnabled,
		description: descriptionnsxCanBeEnabled,
	},
	{
		name: 'Check if PCI-DSS Certification Can Be Disabled',
		value: 'pcidssCanBeDisabled',
		action: 'check if PCI-DSS Certification Can Be Disabled',
		execute: executepcidssCanBeDisabled,
		description: descriptionpcidssCanBeDisabled,
	},
	{
		name: 'Check if PCI-DSS Certification Can Be Enabled',
		value: 'pcidssCanBeEnabled',
		action: 'check if PCI-DSS Certification Can Be Enabled',
		execute: executepcidssCanBeEnabled,
		description: descriptionpcidssCanBeEnabled,
	},
	{
		name: 'Check if Resilience Test Can Be Performed',
		value: 'hostResilienceCanBeEnabled',
		action: 'Check if resilience test can be performed',
		execute: executeHostResilienceCanBeEnabled,
		description: descriptionHostResilienceCanBeEnabled,
	},
	{
		name: 'Check NSX-T Edge Deployment on Global Datastores',
		value: 'canDeployNsxtEdgesOnGlobalDatastores',
		action: 'check NSX-T Edge Deployment on Global Datastores',
		execute: executecanDeployNsxtEdgesOnGlobalDatastores,
		description: descriptioncanDeployNsxtEdgesOnGlobalDatastores,
	},
	{
		name: 'Check NSX-T Edge Resilience Test Availability',
		value: 'nsxtEdgeResilienceCanBeEnabled',
		action: 'check NSX-T Edge Resilience Test Availability',
		execute: executensxtEdgeResilienceCanBeEnabled,
		description: descriptionnsxtEdgeResilienceCanBeEnabled,
	},
	{
		name: 'Check PCC Eligibility for VCD Migration',
		value: 'vmwareCloudDirectorEligibility',
		action: 'check PCC Eligibility for VCD Migration',
		execute: executevmwareCloudDirectorEligibility,
		description: descriptionvmwareCloudDirectorEligibility,
	},
	{
		name: 'Configure NSX-T on Cluster',
		value: 'clusterNsxtCreate',
		action: 'configure NSX-T on Cluster',
		execute: executeclusterNsxtCreate,
		description: descriptionclusterNsxtCreate,
	},
	{
		name: 'Configure Zerto Single VPN',
		value: 'zertoSingleConfigureVpn',
		action: 'configure Zerto Single VPN',
		execute: executezertoSingleConfigureVpn,
		description: descriptionzertoSingleConfigureVpn,
	},
	{
		name: 'Confirm Service Termination',
		value: 'confirmTermination',
		action: 'Confirm service termination',
		execute: executeConfirmTermination,
		description: descriptionConfirmTermination,
	},
	{
		name: 'Confirm User Phone Number',
		value: 'userConfirmPhoneNumber',
		action: 'Confirm user phone number',
		execute: executeUserConfirmPhoneNumber,
		description: descriptionUserConfirmPhoneNumber,
	},
	{
		name: 'Convert Datastore to Global Datastore',
		value: 'filerConvertToGlobal',
		action: 'Convert datastore to global datastore',
		execute: executeFilerConvertToGlobal,
		description: descriptionFilerConvertToGlobal,
	},
	{
		name: 'Convert Global Datastore',
		value: 'filerGlobalConvertToGlobal',
		action: 'Convert datastore to global datastore',
		execute: executeFilerGlobalConvertToGlobal,
		description: descriptionFilerGlobalConvertToGlobal,
	},
	{
		name: 'Create a SAP Pre-Installation Task',
		value: 'sapCreate',
		action: 'create a SAP Pre-installation Task',
		execute: executesapCreate,
		description: descriptionsapCreate,
	},
	{
		name: 'Create Aria Operations Outgoing Flow',
		value: 'vropsOutgoingFlowCreate',
		action: 'create Aria Operations Outgoing Flow',
		execute: executevropsOutgoingFlowCreate,
		description: descriptionvropsOutgoingFlowCreate,
	},
	{
		name: 'Create Federated Active Directory',
		value: 'federationActiveDirectoryCreate',
		action: 'create Federated Active Directory',
		execute: executefederationActiveDirectoryCreate,
		description: descriptionfederationActiveDirectoryCreate,
	},
	{
		name: 'Create IAM Role',
		value: 'iamAddRole',
		action: 'create IAM Role',
		execute: executeiamAddRole,
		description: descriptioniamAddRole,
	},
	{
		name: 'Create Log Subscription',
		value: 'logSubscriptionCreate',
		action: 'create Log Subscription',
		execute: executelogSubscriptionCreate,
		description: descriptionlogSubscriptionCreate,
	},
	{
		name: 'Create Network Allowed on Infrastructure Firewall',
		value: 'allowedNetworkCreate',
		action: 'Create network allowed on infrastructure firewall',
		execute: executeAllowedNetworkCreate,
		description: descriptionAllowedNetworkCreate,
	},
	{
		name: 'Create Two Factor Authentication Whitelisted Network',
		value: 'twoFAWhitelistCreate',
		action: 'create Two Factor Authentication Whitelisted Network',
		execute: executetwoFAWhitelistCreate,
		description: descriptiontwoFAWhitelistCreate,
	},
	{
		name: 'Create User',
		value: 'userCreate',
		action: 'Create user',
		execute: executeUserCreate,
		description: descriptionUserCreate,
	},
	{
		name: 'Create User Object Right',
		value: 'userObjectRightCreate',
		action: 'Create user object right',
		execute: executeUserObjectRightCreate,
		description: descriptionUserObjectRightCreate,
	},
	{
		name: 'Create Virtual Datacenter',
		value: 'datacenterCreate',
		action: 'Create virtual datacenter',
		execute: executeDatacenterCreate,
		description: descriptionDatacenterCreate,
	},
	{
		name: 'Create VM Encryption KMS Server',
		value: 'vmEncryptionKmsCreate',
		action: 'create VM Encryption KMS Server',
		execute: executevmEncryptionKmsCreate,
		description: descriptionvmEncryptionKmsCreate,
	},
	{
		name: 'Create Zerto Remote Site',
		value: 'zertoRemoteSiteCreate',
		action: 'create Zerto Remote Site',
		execute: executezertoRemoteSiteCreate,
		description: descriptionzertoRemoteSiteCreate,
	},
	{
		name: 'Create Zerto Single Remote Site',
		value: 'zertoSingleRemoteSiteCreate',
		action: 'create Zerto Single Remote Site',
		execute: executezertoSingleRemoteSiteCreate,
		description: descriptionzertoSingleRemoteSiteCreate,
	},
	{
		name: 'Deactivate Backup on Virtual Machine',
		value: 'vmDisableBackup',
		action: 'Deactivate backup on virtual machine',
		execute: executeVmDisableBackup,
		description: descriptionVmDisableBackup,
	},
	{
		name: 'Delete a SAP Pre-Installation Task',
		value: 'sapDelete',
		action: 'delete a SAP Pre-installation Task',
		execute: executesapDelete,
		description: descriptionsapDelete,
	},
	{
		name: 'Delete Log Subscription',
		value: 'logSubscriptionDelete',
		action: 'delete Log Subscription',
		execute: executelogSubscriptionDelete,
		description: descriptionlogSubscriptionDelete,
	},
	{
		name: 'Deploy Private Management Gateway',
		value: 'privateGatewayEnable',
		action: 'deploy Private Management Gateway',
		execute: executeprivateGatewayEnable,
		description: descriptionprivateGatewayEnable,
	},
	{
		name: 'Disable Aria Operations Option',
		value: 'vropsDisable',
		action: 'disable Aria Operations Option',
		execute: executevropsDisable,
		description: descriptionvropsDisable,
	},
	{
		name: 'Disable Backup Job',
		value: 'vmBackupJobDisable',
		action: 'Disable backup job',
		execute: executeVmBackupJobDisable,
		description: descriptionVmBackupJobDisable,
	},
	{
		name: 'Disable Backup Option',
		value: 'datacenterBackupDisable',
		action: 'disable Backup Option',
		execute: executedatacenterBackupDisable,
		description: descriptiondatacenterBackupDisable,
	},
	{
		name: 'Disable CARP on Virtual Machine on VM Network Portgroup',
		value: 'vmDisableCarp',
		action: 'Disable CARP on virtual machine on VM Network portgroup',
		execute: executeVmDisableCarp,
		description: descriptionVmDisableCarp,
	},
	{
		name: 'Disable HCX Option',
		value: 'hcxDisable',
		action: 'disable HCX Option',
		execute: executehcxDisable,
		description: descriptionhcxDisable,
	},
	{
		name: 'Disable HDS Certification Option',
		value: 'hdsDisable',
		action: 'disable HDS Certification Option',
		execute: executehdsDisable,
		description: descriptionhdsDisable,
	},
	{
		name: 'Disable HIPAA Certification Option',
		value: 'hipaaDisable',
		action: 'disable HIPAA Certification Option',
		execute: executehipaaDisable,
		description: descriptionhipaaDisable,
	},
	{
		name: 'Disable IAM Option',
		value: 'iamDisable',
		action: 'disable IAM Option',
		execute: executeiamDisable,
		description: descriptioniamDisable,
	},
	{
		name: 'Disable Log Forwarder Option',
		value: 'logForwarderDisable',
		action: 'disable Log Forwarder Option',
		execute: executelogForwarderDisable,
		description: descriptionlogForwarderDisable,
	},
	{
		name: 'Disable NSX-V Option',
		value: 'nsxDisable',
		action: 'disable NSX-V Option',
		execute: executensxDisable,
		description: descriptionnsxDisable,
	},
	{
		name: 'Disable PCI-DSS Certification Option',
		value: 'pcidssDisable',
		action: 'disable PCI-DSS Certification Option',
		execute: executepcidssDisable,
		description: descriptionpcidssDisable,
	},
	{
		name: 'Disable User',
		value: 'userDisable',
		action: 'Disable user',
		execute: executeUserDisable,
		description: descriptionUserDisable,
	},
	{
		name: 'Disable Zerto Disaster Recovery',
		value: 'zertoDisable',
		action: 'disable Zerto Disaster Recovery',
		execute: executezertoDisable,
		description: descriptionzertoDisable,
	},
	{
		name: 'Disable Zerto Single Disaster Recovery',
		value: 'zertoSingleDisable',
		action: 'disable Zerto Single Disaster Recovery',
		execute: executezertoSingleDisable,
		description: descriptionzertoSingleDisable,
	},
	{
		name: 'Enable Aria Operations Option',
		value: 'vropsEnable',
		action: 'enable Aria Operations Option',
		execute: executevropsEnable,
		description: descriptionvropsEnable,
	},
	{
		name: 'Enable Backup Job',
		value: 'vmBackupJobEnable',
		action: 'Enable backup job',
		execute: executeVmBackupJobEnable,
		description: descriptionVmBackupJobEnable,
	},
	{
		name: 'Enable Backup Option',
		value: 'datacenterBackupEnable',
		action: 'enable Backup Option',
		execute: executedatacenterBackupEnable,
		description: descriptiondatacenterBackupEnable,
	},
	{
		name: 'Enable CARP on Virtual Machine on VM Network Portgroup',
		value: 'vmEnableCarp',
		action: 'Enable CARP on virtual machine on VM Network portgroup',
		execute: executeVmEnableCarp,
		description: descriptionVmEnableCarp,
	},
	{
		name: 'Enable HCX Option',
		value: 'hcxEnable',
		action: 'enable HCX Option',
		execute: executehcxEnable,
		description: descriptionhcxEnable,
	},
	{
		name: 'Enable HDS Certification Option',
		value: 'hdsEnable',
		action: 'enable HDS Certification Option',
		execute: executehdsEnable,
		description: descriptionhdsEnable,
	},
	{
		name: 'Enable HIPAA Certification Option',
		value: 'hipaaEnable',
		action: 'enable HIPAA Certification Option',
		execute: executehipaaEnable,
		description: descriptionhipaaEnable,
	},
	{
		name: 'Enable IAM Option',
		value: 'iamEnable',
		action: 'enable IAM Option',
		execute: executeiamEnable,
		description: descriptioniamEnable,
	},
	{
		name: 'Enable Log Forwarder Option',
		value: 'logForwarderEnable',
		action: 'enable Log Forwarder Option',
		execute: executelogForwarderEnable,
		description: descriptionlogForwarderEnable,
	},
	{
		name: 'Enable NSX-V Option',
		value: 'nsxEnable',
		action: 'enable NSX-V Option',
		execute: executensxEnable,
		description: descriptionnsxEnable,
	},
	{
		name: 'Enable PCI-DSS Certification Option',
		value: 'pcidssEnable',
		action: 'enable PCI-DSS Certification Option',
		execute: executepcidssEnable,
		description: descriptionpcidssEnable,
	},
	{
		name: 'Enable User',
		value: 'userEnable',
		action: 'Enable user',
		execute: executeUserEnable,
		description: descriptionUserEnable,
	},
	{
		name: 'Enable Zerto Disaster Recovery',
		value: 'zertoEnable',
		action: 'enable Zerto Disaster Recovery',
		execute: executezertoEnable,
		description: descriptionzertoEnable,
	},
	{
		name: 'Enable Zerto Single Disaster Recovery',
		value: 'zertoSingleEnable',
		action: 'enable Zerto Single Disaster Recovery',
		execute: executezertoSingleEnable,
		description: descriptionzertoSingleEnable,
	},
	{
		name: 'End Zerto Migration',
		value: 'zertoEndMigration',
		action: 'end Zerto Migration',
		execute: executezertoEndMigration,
		description: descriptionzertoEndMigration,
	},
	{
		name: 'Generate a Log URL',
		value: 'logUrlCreate',
		action: 'generate a Log URL',
		execute: executelogUrlCreate,
		description: descriptionlogUrlCreate,
	},
	{
		name: 'Generate a NSX-V Inventory',
		value: 'generateNsxvInventory',
		action: 'generate a NSX-V Inventory',
		execute: executegenerateNsxvInventory,
		description: descriptiongenerateNsxvInventory,
	},
	{
		name: 'Generate Backup Report',
		value: 'datacenterBackupGenerateReport',
		action: 'generate Backup Report',
		execute: executedatacenterBackupGenerateReport,
		description: descriptiondatacenterBackupGenerateReport,
	},
	{
		name: 'Generate NSX-V VXLAN to vRack Mapping',
		value: 'generateVxlanToVrackMapping',
		action: 'generate NSX-V VXLAN to vRack Mapping',
		execute: executegenerateVxlanToVrackMapping,
		description: descriptiongenerateVxlanToVrackMapping,
	},
	{
		name: 'Get',
		value: 'get',
		action: 'Get VMware on OVHcloud infrastructure details',
		execute: executeGet,
		description: descriptionGet,
	},
	{
		name: 'Get Active Directory Federation Option',
		value: 'federationGet',
		action: 'get Active Directory Federation Option',
		execute: executefederationGet,
		description: descriptionfederationGet,
	},
	{
		name: 'Get Aria Operations Outgoing Flow',
		value: 'vropsOutgoingFlowGet',
		action: 'get Aria Operations Outgoing Flow',
		execute: executevropsOutgoingFlowGet,
		description: descriptionvropsOutgoingFlowGet,
	},
	{
		name: 'Get Available Features',
		value: 'capabilitiesGet',
		action: 'get Available Features',
		execute: executecapabilitiesGet,
		description: descriptioncapabilitiesGet,
	},
	{
		name: 'Get Available vCenter Upgrades',
		value: 'vcenterVersionGet',
		action: 'get Available vCenter Upgrades',
		execute: executevcenterVersionGet,
		description: descriptionvcenterVersionGet,
	},
	{
		name: 'Get Backup Option',
		value: 'datacenterBackupGet',
		action: 'get Backup Option',
		execute: executedatacenterBackupGet,
		description: descriptiondatacenterBackupGet,
	},
	{
		name: 'Get Backup Proxies Optimization Recommendations',
		value: 'datacenterBackupCanOptimizeProxies',
		action: 'get Backup Proxies Optimization Recommendations',
		execute: executedatacenterBackupCanOptimizeProxies,
		description: descriptiondatacenterBackupCanOptimizeProxies,
	},
	{
		name: 'Get Backup Repository',
		value: 'backupRepositoryGet',
		action: 'Get backup repository',
		execute: executeBackupRepositoryGet,
		description: descriptionBackupRepositoryGet,
	},
	{
		name: 'Get Backup Repository in Virtual Datacenter',
		value: 'datacenterBackupRepositoryGet',
		action: 'Get backup repository in virtual datacenter',
		execute: executeDatacenterBackupRepositoryGet,
		description: descriptionDatacenterBackupRepositoryGet,
	},
	{
		name: 'Get Cluster',
		value: 'clusterGet',
		action: 'get Cluster',
		execute: executeclusterGet,
		description: descriptionclusterGet,
	},
	{
		name: 'Get Commercial Range',
		value: 'commercialRangeGet',
		action: 'Get a commercial range',
		execute: executeCommercialRangeGet,
		description: descriptionCommercialRangeGet,
	},
	{
		name: 'Get Compliant Commercial Ranges',
		value: 'commercialRangeComplianceList',
		action: 'Get compliant commercial ranges',
		execute: executeCommercialRangeComplianceList,
		description: descriptionCommercialRangeComplianceList,
	},
	{
		name: 'Get Datastore',
		value: 'filerGet',
		action: 'Get datastore',
		execute: executeFilerGet,
		description: descriptionFilerGet,
	},
	{
		name: 'Get Datastore Hourly Consumption',
		value: 'filerHourlyConsumption',
		action: 'Get datastore hourly consumption',
		execute: executeFilerHourlyConsumption,
		description: descriptionFilerHourlyConsumption,
	},
	{
		name: 'Get Datastore Location',
		value: 'filerLocation',
		action: 'Get datastore location',
		execute: executeFilerLocation,
		description: descriptionFilerLocation,
	},
	{
		name: 'Get Datastores Stock',
		value: 'stockZpoolList',
		action: 'Get datastores stock',
		execute: executeStockZpoolList,
		description: descriptionStockZpoolList,
	},
	{
		name: 'Get Details About This IP Block',
		value: 'ipDetails',
		action: 'Get details about this IP Block',
		execute: executeIpDetails,
		description: descriptionIpDetails,
	},
	{
		name: 'Get Federated Active Directory',
		value: 'federationActiveDirectoryGet',
		action: 'get Federated Active Directory',
		execute: executefederationActiveDirectoryGet,
		description: descriptionfederationActiveDirectoryGet,
	},
	{
		name: 'Get Global Datastore',
		value: 'filerGlobalGet',
		action: 'Get a global datastore',
		execute: executeFilerGlobalGet,
		description: descriptionFilerGlobalGet,
	},
	{
		name: 'Get Global Datastore Hourly Consumption',
		value: 'filerGlobalHourlyConsumption',
		action: 'Get global datastore hourly consumption',
		execute: executeFilerGlobalHourlyConsumption,
		description: descriptionFilerGlobalHourlyConsumption,
	},
	{
		name: 'Get Global Datastore Location',
		value: 'filerGlobalLocation',
		action: 'Get global datastore location',
		execute: executeFilerGlobalLocation,
		description: descriptionFilerGlobalLocation,
	},
	{
		name: 'Get HDS Certification Option',
		value: 'hdsGet',
		action: 'get HDS Certification Option',
		execute: executehdsGet,
		description: descriptionhdsGet,
	},
	{
		name: 'Get HIPAA Certification Option',
		value: 'hipaaGet',
		action: 'get HIPAA Certification Option',
		execute: executehipaaGet,
		description: descriptionhipaaGet,
	},
	{
		name: 'Get Host',
		value: 'hostGet',
		action: 'Get host',
		execute: executeHostGet,
		description: descriptionHostGet,
	},
	{
		name: 'Get Host Hourly Consumption',
		value: 'hostHourlyConsumption',
		action: 'Get host hourly consumption',
		execute: executeHostHourlyConsumption,
		description: descriptionHostHourlyConsumption,
	},
	{
		name: 'Get Host Location',
		value: 'hostLocation',
		action: 'Get host location',
		execute: executeHostLocation,
		description: descriptionHostLocation,
	},
	{
		name: 'Get Host Profile',
		value: 'hostProfileGet',
		action: 'Get a host profile',
		execute: executeHostProfileGet,
		description: descriptionHostProfileGet,
	},
	{
		name: 'Get Host Resilience Test Status',
		value: 'hostResilience',
		action: 'Get host resilience test status',
		execute: executeHostResilience,
		description: descriptionHostResilience,
	},
	{
		name: 'Get Hypervisor',
		value: 'hypervisorGet',
		action: 'Get a hypervisor by short name in a PCC zone',
		execute: executeHypervisorGet,
		description: descriptionHypervisorGet,
	},
	{
		name: 'Get Hypervisors Stock',
		value: 'stockPccList',
		action: 'Get hypervisors stock',
		execute: executeStockPccList,
		description: descriptionStockPccList,
	},
	{
		name: 'Get IP Block',
		value: 'ipGet',
		action: 'Get IP block',
		execute: executeIpGet,
		description: descriptionIpGet,
	},
	{
		name: 'Get Location',
		value: 'locationGet',
		action: 'Get a hosting location',
		execute: executeLocationGet,
		description: descriptionLocationGet,
	},
	{
		name: 'Get Log Forwarder Option',
		value: 'logForwarderGet',
		action: 'get Log Forwarder Option',
		execute: executelogForwarderGet,
		description: descriptionlogForwarderGet,
	},
	{
		name: 'Get Log Kind',
		value: 'logKindGet',
		action: 'get Log Kind',
		execute: executelogKindGet,
		description: descriptionlogKindGet,
	},
	{
		name: 'Get Log Subscription',
		value: 'logSubscriptionGet',
		action: 'get Log Subscription',
		execute: executelogSubscriptionGet,
		description: descriptionlogSubscriptionGet,
	},
	{
		name: 'Get Network Allowed on Infrastructure Firewall',
		value: 'allowedNetworkGet',
		action: 'Get network allowed on infrastructure firewall',
		execute: executeAllowedNetworkGet,
		description: descriptionAllowedNetworkGet,
	},
	{
		name: 'Get New Prices',
		value: 'newPricesGet',
		action: 'get New Prices',
		execute: executenewPricesGet,
		description: descriptionnewPricesGet,
	},
	{
		name: 'Get NSX-T Edge',
		value: 'nsxtEdgeGet',
		action: 'get NSX-T Edge',
		execute: executensxtEdgeGet,
		description: descriptionnsxtEdgeGet,
	},
	{
		name: 'Get NSX-T Edge Resilience Test Status',
		value: 'nsxtEdgeResilience',
		action: 'get NSX-T Edge Resilience Test Status',
		execute: executensxtEdgeResilience,
		description: descriptionnsxtEdgeResilience,
	},
	{
		name: 'Get NSX-T Edges Resizing Capabilities',
		value: 'nsxtEdgesResizingCapabilities',
		action: 'Get NSX-T edges resizing capabilities',
		execute: executensxtEdgesResizingCapabilities,
		description: descriptionnsxtEdgesResizingCapabilities,
	},
	{
		name: 'Get NSX-T Edges Scaling Capabilities',
		value: 'nsxtEdgesScalingCapabilities',
		action: 'Get NSX-T edges scaling capabilities',
		execute: executensxtEdgesScalingCapabilities,
		description: descriptionnsxtEdgesScalingCapabilities,
	},
	{
		name: 'Get Operation',
		value: 'taskGet',
		action: 'Get operation',
		execute: executeTaskGet,
		description: descriptionTaskGet,
	},
	{
		name: 'Get Operation for Allowed Network',
		value: 'allowedNetworkTaskGet',
		action: 'Get operation for allowed network',
		execute: executeAllowedNetworkTaskGet,
		description: descriptionAllowedNetworkTaskGet,
	},
	{
		name: 'Get Operation for Datastore',
		value: 'filerTaskGet',
		action: 'Get operation for datastore',
		execute: executeFilerTaskGet,
		description: descriptionFilerTaskGet,
	},
	{
		name: 'Get Operation for Global Datastore',
		value: 'filerGlobalTaskGet',
		action: 'Get operation for global datastore',
		execute: executeFilerGlobalTaskGet,
		description: descriptionFilerGlobalTaskGet,
	},
	{
		name: 'Get Operation for Host',
		value: 'hostTaskGet',
		action: 'Get operation for host',
		execute: executeHostTaskGet,
		description: descriptionHostTaskGet,
	},
	{
		name: 'Get Operation for IP Block',
		value: 'ipTaskGet',
		action: 'Get operation for IP block',
		execute: executeIpTaskGet,
		description: descriptionIpTaskGet,
	},
	{
		name: 'Get Operation for User',
		value: 'userTaskGet',
		action: 'Get operation for user',
		execute: executeUserTaskGet,
		description: descriptionUserTaskGet,
	},
	{
		name: 'Get Operation for Virtual Datacenter',
		value: 'datacenterTaskGet',
		action: 'Get operation for virtual datacenter',
		execute: executeDatacenterTaskGet,
		description: descriptionDatacenterTaskGet,
	},
	{
		name: 'Get Orderable Commercial Ranges',
		value: 'commercialRangeOrderableList',
		action: 'Get orderable commercial ranges',
		execute: executeCommercialRangeOrderableList,
		description: descriptionCommercialRangeOrderableList,
	},
	{
		name: 'Get Orderable IP Block Countries',
		value: 'orderableIpCountriesGet',
		action: 'get Orderable IP Block Countries',
		execute: executeorderableIpCountriesGet,
		description: descriptionorderableIpCountriesGet,
	},
	{
		name: 'Get OVHcloud IAM Option',
		value: 'iamGet',
		action: 'get OVHcloud IAM Option',
		execute: executeiamGet,
		description: descriptioniamGet,
	},
	{
		name: 'Get OVHcloud ID for Vendor Object',
		value: 'vendorOvhId',
		action: 'get OVHcloud ID for Vendor Object',
		execute: executevendorOvhId,
		description: descriptionvendorOvhId,
	},
	{
		name: 'Get Password Policy',
		value: 'passwordPolicyGet',
		action: 'get Password Policy',
		execute: executepasswordPolicyGet,
		description: descriptionpasswordPolicyGet,
	},
	{
		name: 'Get PCI-DSS Certification Option',
		value: 'pcidssGet',
		action: 'get PCI-DSS Certification Option',
		execute: executepcidssGet,
		description: descriptionpcidssGet,
	},
	{
		name: 'Get Pending Activation Security Options',
		value: 'securityOptionsPendingOptions',
		action: 'get Pending Activation Security Options',
		execute: executesecurityOptionsPendingOptions,
		description: descriptionsecurityOptionsPendingOptions,
	},
	{
		name: 'Get Private Management Gateway',
		value: 'privateGatewayGet',
		action: 'get Private Management Gateway',
		execute: executeprivateGatewayGet,
		description: descriptionprivateGatewayGet,
	},
	{
		name: 'Get Restore Point',
		value: 'vmRestorePointGet',
		action: 'Get restore point',
		execute: executeVmRestorePointGet,
		description: descriptionVmRestorePointGet,
	},
	{
		name: 'Get Robot',
		value: 'robotGet',
		action: 'get Robot',
		execute: executerobotGet,
		description: descriptionrobotGet,
	},
	{
		name: 'Get SAP Pre-Installation Task',
		value: 'sapGet',
		action: 'get SAP Pre-installation Task',
		execute: executesapGet,
		description: descriptionsapGet,
	},
	{
		name: 'Get Security Options',
		value: 'securityOptionsGet',
		action: 'get Security Options',
		execute: executesecurityOptionsGet,
		description: descriptionsecurityOptionsGet,
	},
	{
		name: 'Get Security Options Compatibility Matrix',
		value: 'securityOptionsCompatibilityMatrix',
		action: 'get Security Options Compatibility Matrix',
		execute: executesecurityOptionsCompatibilityMatrix,
		description: descriptionsecurityOptionsCompatibilityMatrix,
	},
	{
		name: 'Get Security Options Dependencies Tree',
		value: 'securityOptionsDependenciesTree',
		action: 'get Security Options Dependencies Tree',
		execute: executesecurityOptionsDependenciesTree,
		description: descriptionsecurityOptionsDependenciesTree,
	},
	{
		name: 'Get Service Host Profile',
		value: 'serviceHostProfileGet',
		action: 'Get host profile on hosting location',
		execute: executeHostProfileServiceGet,
		description: descriptionHostProfileServiceGet,
	},
	{
		name: 'Get Service Hypervisor',
		value: 'serviceHypervisorGet',
		action: 'Get hypervisor on hosting location',
		execute: executeHypervisorServiceGet,
		description: descriptionHypervisorServiceGet,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information',
		execute: executeServiceInfosGet,
		description: descriptionServiceInfosGet,
	},
	{
		name: 'Get Service Location',
		value: 'serviceLocationGet',
		action: 'Get hosting location of a service',
		execute: executeLocationServiceGet,
		description: descriptionLocationServiceGet,
	},
	{
		name: 'Get Service Pack',
		value: 'servicePacksGet',
		action: 'get Service Pack',
		execute: executeservicePacksGet,
		description: descriptionservicePacksGet,
	},
	{
		name: 'Get Service Pack Information',
		value: 'servicePackGet',
		action: 'get Service Pack Information',
		execute: executeservicePackGet,
		description: descriptionservicePackGet,
	},
	{
		name: 'Get Stock Host',
		value: 'stockHostList',
		action: 'List available host stocks for a location',
		execute: executeStockHostList,
		description: descriptionStockHostList,
	},
	{
		name: 'Get Tag',
		value: 'tagGet',
		action: 'get Tag',
		execute: executetagGet,
		description: descriptiontagGet,
	},
	{
		name: 'Get Two Factor Authentication Whitelisted Network',
		value: 'twoFAWhitelistGet',
		action: 'get Two Factor Authentication Whitelisted Network',
		execute: executetwoFAWhitelistGet,
		description: descriptiontwoFAWhitelistGet,
	},
	{
		name: 'Get User',
		value: 'userGet',
		action: 'Get user',
		execute: executeUserGet,
		description: descriptionUserGet,
	},
	{
		name: 'Get User Datacenter Right',
		value: 'userRightGet',
		action: 'Get user datacenter right',
		execute: executeUserRightGet,
		description: descriptionUserRightGet,
	},
	{
		name: 'Get User Object Right',
		value: 'userObjectRightGet',
		action: 'Get user object right',
		execute: executeUserObjectRightGet,
		description: descriptionUserObjectRightGet,
	},
	{
		name: 'Get Vendor Information',
		value: 'vendorGet',
		action: 'get Vendor Information',
		execute: executevendorGet,
		description: descriptionvendorGet,
	},
	{
		name: 'Get Vendor Object Types',
		value: 'vendorObjectTypeList',
		action: 'get Vendor Object Types',
		execute: executevendorObjectTypeList,
		description: descriptionvendorObjectTypeList,
	},
	{
		name: 'Get Virtual Datacenter',
		value: 'datacenterGet',
		action: 'Get virtual datacenter',
		execute: executeDatacenterGet,
		description: descriptionDatacenterGet,
	},
	{
		name: 'Get Virtual Machine',
		value: 'vmGet',
		action: 'Get virtual machine',
		execute: executeVmGet,
		description: descriptionVmGet,
	},
	{
		name: 'Get Virtual Machine Backup Job',
		value: 'vmBackupJobGet',
		action: 'Get virtual machine backup job',
		execute: executeVmBackupJobGet,
		description: descriptionVmBackupJobGet,
	},
	{
		name: 'Get Virtual Machine Encryption Option',
		value: 'vmEncryptionGet',
		action: 'get Virtual Machine Encryption Option',
		execute: executevmEncryptionGet,
		description: descriptionvmEncryptionGet,
	},
	{
		name: 'Get Virtual Machines with Managed License',
		value: 'vmLicensedList',
		action: 'Get virtual machines with managed license',
		execute: executeVmLicensedList,
		description: descriptionVmLicensedList,
	},
	{
		name: 'Get vLAN',
		value: 'vlanGet',
		action: 'get vLAN',
		execute: executevlanGet,
		description: descriptionvlanGet,
	},
	{
		name: 'Get VM Encryption KMS Server',
		value: 'vmEncryptionKmsGet',
		action: 'get VM Encryption KMS Server',
		execute: executevmEncryptionKmsGet,
		description: descriptionvmEncryptionKmsGet,
	},
	{
		name: 'Get VMware Aria Operations Option',
		value: 'vropsGet',
		action: 'get VMware Aria Operations Option',
		execute: executevropsGet,
		description: descriptionvropsGet,
	},
	{
		name: 'Get VMware Hybrid Cloud Extension Option',
		value: 'hcxGet',
		action: 'get VMware Hybrid Cloud Extension Option',
		execute: executehcxGet,
		description: descriptionhcxGet,
	},
	{
		name: 'Get VMware NSX-T Option',
		value: 'nsxtGet',
		action: 'get VMware NSX-T Option',
		execute: executensxtGet,
		description: descriptionnsxtGet,
	},
	{
		name: 'Get VMware NSX-V Option',
		value: 'nsxGet',
		action: 'get VMware NSX-V Option',
		execute: executensxGet,
		description: descriptionnsxGet,
	},
	{
		name: 'Get vRack',
		value: 'vrackGet',
		action: 'get vRack',
		execute: executevrackGet,
		description: descriptionvrackGet,
	},
	{
		name: 'Get Zerto Disaster Recovery Status',
		value: 'zertoStatusGet',
		action: 'get Zerto Disaster Recovery Status',
		execute: executezertoStatusGet,
		description: descriptionzertoStatusGet,
	},
	{
		name: 'Get Zerto Single Default Local VRA Network',
		value: 'zertoSingleDefaultLocalVraNetwork',
		action: 'get Zerto Single Default Local VRA Network',
		execute: executezertoSingleDefaultLocalVraNetwork,
		description: descriptionzertoSingleDefaultLocalVraNetwork,
	},
	{
		name: 'Grant Active Directory Group',
		value: 'federationActiveDirectoryGrantGroup',
		action: 'grant Active Directory Group',
		execute: executefederationActiveDirectoryGrantGroup,
		description: descriptionfederationActiveDirectoryGrantGroup,
	},
	{
		name: 'Grant Active Directory User',
		value: 'federationActiveDirectoryGrantUser',
		action: 'grant Active Directory User',
		execute: executefederationActiveDirectoryGrantUser,
		description: descriptionfederationActiveDirectoryGrantUser,
	},
	{
		name: 'Launch a Contact Change Procedure',
		value: 'changeContact',
		action: 'Launch a contact change procedure',
		execute: executeChangeContact,
		description: descriptionChangeContact,
	},
	{
		name: 'List',
		value: 'list',
		action: 'List all VMware on OVHcloud infrastructures',
		execute: executeList,
		description: descriptionList,
		default: true,
	},
	{
		name: 'List Aria Operations Outgoing Flows',
		value: 'vropsOutgoingFlowList',
		action: 'list Aria Operations Outgoing Flows',
		execute: executevropsOutgoingFlowList,
		description: descriptionvropsOutgoingFlowList,
	},
	{
		name: 'List Available Datastore Profiles',
		value: 'datacenterOrderableFilerProfiles',
		action: 'List available datastore profiles',
		execute: executeDatacenterOrderableFilerProfiles,
		description: descriptionDatacenterOrderableFilerProfiles,
	},
	{
		name: 'List Available Host Profiles',
		value: 'datacenterOrderableHostProfiles',
		action: 'List available host profiles',
		execute: executeDatacenterOrderableHostProfiles,
		description: descriptionDatacenterOrderableHostProfiles,
	},
	{
		name: 'List Backup Offer Capabilities',
		value: 'datacenterBackupOfferCapabilities',
		action: 'list Backup Offer Capabilities',
		execute: executedatacenterBackupOfferCapabilities,
		description: descriptiondatacenterBackupOfferCapabilities,
	},
	{
		name: 'List Backup Repositories',
		value: 'backupRepositoryList',
		action: 'List backup repositories',
		execute: executeBackupRepositoryList,
		description: descriptionBackupRepositoryList,
	},
	{
		name: 'List Backup Repositories in Virtual Datacenter',
		value: 'datacenterBackupRepositoryList',
		action: 'List backup repositories in virtual datacenter',
		execute: executeDatacenterBackupRepositoryList,
		description: descriptionDatacenterBackupRepositoryList,
	},
	{
		name: 'List Clusters',
		value: 'clusterList',
		action: 'list Clusters',
		execute: executeclusterList,
		description: descriptionclusterList,
	},
	{
		name: 'List Commercial Ranges',
		value: 'commercialRangeList',
		action: 'List all commercial ranges',
		execute: executeCommercialRangeList,
		description: descriptionCommercialRangeList,
	},
	{
		name: 'List Datastores in Virtual Datacenter',
		value: 'filerList',
		action: 'List datastores in virtual datacenter',
		execute: executeFilerList,
		description: descriptionFilerList,
	},
	{
		name: 'List Federated Active Directories',
		value: 'federationActiveDirectoryList',
		action: 'list Federated Active Directories',
		execute: executefederationActiveDirectoryList,
		description: descriptionfederationActiveDirectoryList,
	},
	{
		name: 'List Filtered Operations',
		value: 'globalTasksList',
		action: 'list Filtered Operations',
		execute: executeglobalTasksList,
		description: descriptionglobalTasksList,
	},
	{
		name: 'List Global Datastores',
		value: 'filerGlobalList',
		action: 'List global datastores mounted on all virtual datacenters',
		execute: executeFilerGlobalList,
		description: descriptionFilerGlobalList,
	},
	{
		name: 'List Host Profiles',
		value: 'hostProfileList',
		action: 'List host profiles for a location',
		execute: executeHostProfileList,
		description: descriptionHostProfileList,
	},
	{
		name: 'List Hosts in Virtual Datacenter',
		value: 'hostList',
		action: 'List hosts in virtual datacenter',
		execute: executeHostList,
		description: descriptionHostList,
	},
	{
		name: 'List Hypervisors',
		value: 'hypervisorList',
		action: 'List hypervisors in a PCC zone',
		execute: executeHypervisorList,
		description: descriptionHypervisorList,
	},
	{
		name: 'List IP Blocks',
		value: 'ipList',
		action: 'List IP blocks',
		execute: executeIpList,
		description: descriptionIpList,
	},
	{
		name: 'List Locations',
		value: 'locationList',
		action: 'List all hosting locations',
		execute: executeLocationList,
		description: descriptionLocationList,
	},
	{
		name: 'List Log Kinds',
		value: 'logKindList',
		action: 'list Log Kinds',
		execute: executelogKindList,
		description: descriptionlogKindList,
	},
	{
		name: 'List Log Subscriptions',
		value: 'logSubscriptionList',
		action: 'list Log Subscriptions',
		execute: executelogSubscriptionList,
		description: descriptionlogSubscriptionList,
	},
	{
		name: 'List Networks Allowed on Infrastructure Firewall',
		value: 'allowedNetworkList',
		action: 'List networks allowed on infrastructure firewall',
		execute: executeAllowedNetworkList,
		description: descriptionAllowedNetworkList,
	},
	{
		name: 'List NSX-T Edges',
		value: 'nsxtEdgeList',
		action: 'list NSX-T Edges',
		execute: executensxtEdgeList,
		description: descriptionnsxtEdgeList,
	},
	{
		name: 'List Operations',
		value: 'taskList',
		action: 'List operations',
		execute: executeTaskList,
		description: descriptionTaskList,
	},
	{
		name: 'List Operations Associated to a Network Allowed on Infrastructure Firewall',
		value: 'allowedNetworkTaskList',
		action: 'List operations associated to a network allowed on infrastructure firewall',
		execute: executeAllowedNetworkTaskList,
		description: descriptionAllowedNetworkTaskList,
	},
	{
		name: 'List Operations Associated to Datastore',
		value: 'filerTaskList',
		action: 'List operations associated to datastore',
		execute: executeFilerTaskList,
		description: descriptionFilerTaskList,
	},
	{
		name: 'List Operations Associated to Global Datastore',
		value: 'filerGlobalTaskList',
		action: 'List operations associated to global datastore',
		execute: executeFilerGlobalTaskList,
		description: descriptionFilerGlobalTaskList,
	},
	{
		name: 'List Operations Associated to Host',
		value: 'hostTaskList',
		action: 'List operations associated to host',
		execute: executeHostTaskList,
		description: descriptionHostTaskList,
	},
	{
		name: 'List Operations Associated to IP Block',
		value: 'ipTaskList',
		action: 'List operations associated to IP block',
		execute: executeIpTaskList,
		description: descriptionIpTaskList,
	},
	{
		name: 'List Operations Associated to User',
		value: 'userTaskList',
		action: 'List operations associated to user',
		execute: executeUserTaskList,
		description: descriptionUserTaskList,
	},
	{
		name: 'List Operations Associated to Virtual Datacenter',
		value: 'datacenterTaskList',
		action: 'List operations associated to virtual datacenter',
		execute: executeDatacenterTaskList,
		description: descriptionDatacenterTaskList,
	},
	{
		name: 'List Restore Points',
		value: 'vmRestorePointsList',
		action: 'List restore points',
		execute: executeVmRestorePointsList,
		description: descriptionVmRestorePointsList,
	},
	{
		name: 'List Robots',
		value: 'robotList',
		action: 'list Robots',
		execute: executerobotList,
		description: descriptionrobotList,
	},
	{
		name: 'List SAP Pre-Installation Tasks',
		value: 'sapList',
		action: 'list SAP Pre-installation Tasks',
		execute: executesapList,
		description: descriptionsapList,
	},
	{
		name: 'List Service Host Profiles',
		value: 'serviceHostProfileList',
		action: 'List host profiles on hosting location',
		execute: executeHostProfileServiceList,
		description: descriptionHostProfileServiceList,
	},
	{
		name: 'List Service Hypervisors',
		value: 'serviceHypervisorList',
		action: 'List hypervisor versions on hosting location',
		execute: executeHypervisorServiceList,
		description: descriptionHypervisorServiceList,
	},
	{
		name: 'List Service Packs',
		value: 'servicePacksList',
		action: 'list Service Packs',
		execute: executeservicePacksList,
		description: descriptionservicePacksList,
	},
	{
		name: 'List Tags',
		value: 'tagList',
		action: 'list Tags',
		execute: executetagList,
		description: descriptiontagList,
	},
	{
		name: 'List Two Factor Authentication Whitelisted Networks',
		value: 'twoFAWhitelistList',
		action: 'list Two Factor Authentication Whitelisted Networks',
		execute: executetwoFAWhitelistList,
		description: descriptiontwoFAWhitelistList,
	},
	{
		name: 'List User Datacenter Rights',
		value: 'userRightList',
		action: 'List user datacenter rights',
		execute: executeUserRightList,
		description: descriptionUserRightList,
	},
	{
		name: 'List User Object Rights',
		value: 'userObjectRightList',
		action: 'List user object rights',
		execute: executeUserObjectRightList,
		description: descriptionUserObjectRightList,
	},
	{
		name: 'List Users',
		value: 'userList',
		action: 'List users',
		execute: executeUserList,
		description: descriptionUserList,
	},
	{
		name: 'List Virtual Datacenters',
		value: 'datacenterList',
		action: 'List virtual datacenters',
		execute: executeDatacenterList,
		description: descriptionDatacenterList,
	},
	{
		name: 'List Virtual Machines Within Virtual Datacenter',
		value: 'vmList',
		action: 'List virtual machines within virtual datacenter',
		execute: executeVmList,
		description: descriptionVmList,
	},
	{
		name: 'List vLANs',
		value: 'vlanList',
		action: 'list vLANs',
		execute: executevlanList,
		description: descriptionvlanList,
	},
	{
		name: 'List VM Encryption KMS Servers',
		value: 'vmEncryptionKmsList',
		action: 'list VM Encryption KMS Servers',
		execute: executevmEncryptionKmsList,
		description: descriptionvmEncryptionKmsList,
	},
	{
		name: 'List vRacks',
		value: 'vrackList',
		action: 'list vRacks',
		execute: executevrackList,
		description: descriptionvrackList,
	},
	{
		name: 'List Zerto Protected Virtual Machines',
		value: 'zertoUsageReport',
		action: 'list Zerto Protected Virtual Machines',
		execute: executezertoUsageReport,
		description: descriptionzertoUsageReport,
	},
	{
		name: 'List Zerto Remote Sites',
		value: 'zertoRemoteSiteList',
		action: 'list Zerto Remote Sites',
		execute: executezertoRemoteSiteList,
		description: descriptionzertoRemoteSiteList,
	},
	{
		name: 'List Zerto Single Remote Sites',
		value: 'zertoSingleRemoteSiteList',
		action: 'list Zerto Single Remote Sites',
		execute: executezertoSingleRemoteSiteList,
		description: descriptionzertoSingleRemoteSiteList,
	},
	{
		name: 'List Zerto Single VRA Resources',
		value: 'zertoSingleVraResourcesList',
		action: 'list Zerto Single VRA Resources',
		execute: executezertoSingleVraResourcesList,
		description: descriptionzertoSingleVraResourcesList,
	},
	{
		name: 'List Zerto VRA Resources',
		value: 'zertoVraResourcesList',
		action: 'list Zerto VRA Resources',
		execute: executezertoVraResourcesList,
		description: descriptionzertoVraResourcesList,
	},
	{
		name: 'Optimize Backup Proxies',
		value: 'datacenterBackupOptimizeProxies',
		action: 'optimize Backup Proxies',
		execute: executedatacenterBackupOptimizeProxies,
		description: descriptiondatacenterBackupOptimizeProxies,
	},
	{
		name: 'Order Hourly Datastore',
		value: 'datacenterOrderNewFilerHourly',
		action: 'Order hourly datastore',
		execute: executeDatacenterOrderNewFilerHourly,
		description: descriptionDatacenterOrderNewFilerHourly,
	},
	{
		name: 'Order Hourly Global Datastore',
		value: 'orderNewFilerHourly',
		action: 'order Hourly Global Datastore',
		execute: executeorderNewFilerHourly,
		description: descriptionorderNewFilerHourly,
	},
	{
		name: 'Order Hourly Host',
		value: 'datacenterOrderNewHostHourly',
		action: 'Order hourly host',
		execute: executeDatacenterOrderNewHostHourly,
		description: descriptionDatacenterOrderNewHostHourly,
	},
	{
		name: 'Reconfigure Private Management Gateway',
		value: 'privateGatewayReconfigure',
		action: 'reconfigure Private Management Gateway',
		execute: executeprivateGatewayReconfigure,
		description: descriptionprivateGatewayReconfigure,
	},
	{
		name: 'Relaunch Operation Currently in Error State (Allowed Network)',
		value: 'allowedNetworkTaskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeAllowedNetworkTaskResetTaskState,
		description: descriptionAllowedNetworkTaskResetTaskState,
	},
	{
		name: 'Relaunch Operation Currently in Error State (Datacenter)',
		value: 'datacenterTaskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeDatacenterTaskResetTaskState,
		description: descriptionDatacenterTaskResetTaskState,
	},
	{
		name: 'Relaunch Operation Currently in Error State (Datastore)',
		value: 'filerTaskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeFilerTaskResetTaskState,
		description: descriptionFilerTaskResetTaskState,
	},
	{
		name: 'Relaunch Operation Currently in Error State (Host)',
		value: 'hostTaskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeHostTaskResetTaskState,
		description: descriptionHostTaskResetTaskState,
	},
	{
		name: 'Relaunch Operation Currently in Error State (IP Block)',
		value: 'ipTaskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeIpTaskResetTaskState,
		description: descriptionIpTaskResetTaskState,
	},
	{
		name: 'Relaunch Operation Currently in Error State (Task)',
		value: 'taskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeTaskResetTaskState,
		description: descriptionTaskResetTaskState,
	},
	{
		name: 'Relaunch Operation Currently in Error State (User)',
		value: 'userTaskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeUserTaskResetTaskState,
		description: descriptionUserTaskResetTaskState,
	},
	{
		name: 'Relocate NSX-T Edge',
		value: 'nsxtEdgeRelocateEdge',
		action: 'relocate NSX-T Edge',
		execute: executensxtEdgeRelocateEdge,
		description: descriptionnsxtEdgeRelocateEdge,
	},
	{
		name: 'Remove a Managed License From Virtual Machine',
		value: 'vmRemoveLicense',
		action: 'Remove a managed license from virtual machine',
		execute: executeVmRemoveLicense,
		description: descriptionVmRemoveLicense,
	},
	{
		name: 'Remove Aria Operations Outgoing Flow',
		value: 'vropsOutgoingFlowDelete',
		action: 'remove Aria Operations Outgoing Flow',
		execute: executevropsOutgoingFlowDelete,
		description: descriptionvropsOutgoingFlowDelete,
	},
	{
		name: 'Remove Datastore',
		value: 'filerRemove',
		action: 'Remove datastore',
		execute: executeFilerRemove,
		description: descriptionFilerRemove,
	},
	{
		name: 'Remove Federated Active Directory',
		value: 'federationActiveDirectoryDelete',
		action: 'remove Federated Active Directory',
		execute: executefederationActiveDirectoryDelete,
		description: descriptionfederationActiveDirectoryDelete,
	},
	{
		name: 'Remove Global Datastore',
		value: 'filerGlobalRemove',
		action: 'Remove a global datastore',
		execute: executeFilerGlobalRemove,
		description: descriptionFilerGlobalRemove,
	},
	{
		name: 'Remove Host',
		value: 'hostRemove',
		action: 'Remove host',
		execute: executeHostRemove,
		description: descriptionHostRemove,
	},
	{
		name: 'Remove Network Allowed on Infrastructure Firewall',
		value: 'allowedNetworkDelete',
		action: 'Remove network allowed on infrastructure firewall',
		execute: executeAllowedNetworkDelete,
		description: descriptionAllowedNetworkDelete,
	},
	{
		name: 'Remove NSX-T Edge',
		value: 'nsxtEdgeDelete',
		action: 'remove NSX-T Edge',
		execute: executensxtEdgeDelete,
		description: descriptionnsxtEdgeDelete,
	},
	{
		name: 'Remove Private Management Gateway',
		value: 'privateGatewayDisable',
		action: 'remove Private Management Gateway',
		execute: executeprivateGatewayDisable,
		description: descriptionprivateGatewayDisable,
	},
	{
		name: 'Remove Two Factor Authentication Whitelisted Network',
		value: 'twoFAWhitelistDelete',
		action: 'remove Two Factor Authentication Whitelisted Network',
		execute: executetwoFAWhitelistDelete,
		description: descriptiontwoFAWhitelistDelete,
	},
	{
		name: 'Remove User',
		value: 'userDelete',
		action: 'Remove user',
		execute: executeUserDelete,
		description: descriptionUserDelete,
	},
	{
		name: 'Remove User Object Right',
		value: 'userObjectRightDelete',
		action: 'Remove user object right',
		execute: executeUserObjectRightDelete,
		description: descriptionUserObjectRightDelete,
	},
	{
		name: 'Remove Virtual Datacenter',
		value: 'datacenterDelete',
		action: 'Remove virtual datacenter',
		execute: executeDatacenterDelete,
		description: descriptionDatacenterDelete,
	},
	{
		name: 'Remove VM Encryption KMS Server',
		value: 'vmEncryptionKmsDelete',
		action: 'remove VM Encryption KMS Server',
		execute: executevmEncryptionKmsDelete,
		description: descriptionvmEncryptionKmsDelete,
	},
	{
		name: 'Remove VMware on OVHcloud From vRack',
		value: 'vrackDelete',
		action: 'remove VMware on OVHcloud from vRack',
		execute: executevrackDelete,
		description: descriptionvrackDelete,
	},
	{
		name: 'Remove Zerto Remote Site',
		value: 'zertoRemoteSiteDelete',
		action: 'remove Zerto Remote Site',
		execute: executezertoRemoteSiteDelete,
		description: descriptionzertoRemoteSiteDelete,
	},
	{
		name: 'Remove Zerto Single Remote Site',
		value: 'zertoSingleRemoteSiteDelete',
		action: 'remove Zerto Single Remote Site',
		execute: executezertoSingleRemoteSiteDelete,
		description: descriptionzertoSingleRemoteSiteDelete,
	},
	{
		name: 'Request Host Replacement',
		value: 'hostAddHostSpare',
		action: 'Request host replacement',
		execute: executeHostAddHostSpare,
		description: descriptionHostAddHostSpare,
	},
	{
		name: 'Request Zerto Single Pairing Token',
		value: 'zertoSingleRequestPairingToken',
		action: 'request Zerto Single Pairing Token',
		execute: executezertoSingleRequestPairingToken,
		description: descriptionzertoSingleRequestPairingToken,
	},
	{
		name: 'Reset All Hypervisor Triggered Alarms',
		value: 'resetTriggeredAlarm',
		action: 'reset All Hypervisor Triggered Alarms',
		execute: executeresetTriggeredAlarm,
		description: descriptionresetTriggeredAlarm,
	},
	{
		name: 'Reset Task State (Global Datastore)',
		value: 'filerGlobalTaskResetTaskState',
		action: 'Relaunch operation currently in error state',
		execute: executeFilerGlobalTaskResetTaskState,
		description: descriptionFilerGlobalTaskResetTaskState,
	},
	{
		name: 'Resize NSX-T Edge Cluster',
		value: 'resizeNsxtEdgeCluster',
		action: 'Resize NSX-T edges on specified datacenter',
		execute: executeresizeNsxtEdgeCluster,
		description: descriptionresizeNsxtEdgeCluster,
	},
	{
		name: 'Restore Backup',
		value: 'vmRestoreBackup',
		action: 'Restore backup',
		execute: executeVmRestoreBackup,
		description: descriptionVmRestoreBackup,
	},
	{
		name: 'Restore Backup Jobs in Batch',
		value: 'datacenterBackupBatchRestore',
		action: 'restore Backup Jobs in Batch',
		execute: executedatacenterBackupBatchRestore,
		description: descriptiondatacenterBackupBatchRestore,
	},
	{
		name: 'Restore From Point',
		value: 'vmRestorePointRestore',
		action: 'Restore from point',
		execute: executeVmRestorePointRestore,
		description: descriptionVmRestorePointRestore,
	},
	{
		name: 'Retry Pending Security Option Activation',
		value: 'securityOptionsResumePendingEnabling',
		action: 'retry Pending Security Option Activation',
		execute: executesecurityOptionsResumePendingEnabling,
		description: descriptionsecurityOptionsResumePendingEnabling,
	},
	{
		name: 'Run Zerto Health Check',
		value: 'zertoRequestHealthCheck',
		action: 'run Zerto Health Check',
		execute: executezertoRequestHealthCheck,
		description: descriptionzertoRequestHealthCheck,
	},
	{
		name: 'Set a Managed License on Virtual Machine',
		value: 'vmSetLicense',
		action: 'Set a managed license on virtual machine',
		execute: executeVmSetLicense,
		description: descriptionVmSetLicense,
	},
	{
		name: 'Start NSX-T Edge Resilience Test',
		value: 'nsxtEdgeResilienceEnable',
		action: 'start NSX-T Edge Resilience Test',
		execute: executensxtEdgeResilienceEnable,
		description: descriptionnsxtEdgeResilienceEnable,
	},
	{
		name: 'Start Resilience Test',
		value: 'hostResilienceEnable',
		action: 'Start resilience test',
		execute: executeHostResilienceEnable,
		description: descriptionHostResilienceEnable,
	},
	{
		name: 'Start Zerto Migration',
		value: 'zertoStartMigration',
		action: 'start Zerto Migration',
		execute: executezertoStartMigration,
		description: descriptionzertoStartMigration,
	},
	{
		name: 'Stop NSX-T Edge Resilience Test',
		value: 'nsxtEdgeResilienceDisable',
		action: 'stop NSX-T Edge Resilience Test',
		execute: executensxtEdgeResilienceDisable,
		description: descriptionnsxtEdgeResilienceDisable,
	},
	{
		name: 'Stop Resilience Test',
		value: 'hostResilienceDisable',
		action: 'Stop resilience test',
		execute: executeHostResilienceDisable,
		description: descriptionHostResilienceDisable,
	},
	{
		name: 'Unconfigure NSX-T on Cluster',
		value: 'clusterNsxtDelete',
		action: 'unconfigure NSX-T on Cluster',
		execute: executeclusterNsxtDelete,
		description: descriptionclusterNsxtDelete,
	},
	{
		name: 'Update Aria Operations Outgoing Flow',
		value: 'vropsOutgoingFlowChangeProperties',
		action: 'update Aria Operations Outgoing Flow',
		execute: executevropsOutgoingFlowChangeProperties,
		description: descriptionvropsOutgoingFlowChangeProperties,
	},
	{
		name: 'Update Backup Configuration',
		value: 'vmEditBackup',
		action: 'Update backup configuration',
		execute: executeVmEditBackup,
		description: descriptionVmEditBackup,
	},
	{
		name: 'Update Backup Job',
		value: 'vmBackupJobUpdate',
		action: 'Update backup job',
		execute: executeVmBackupJobUpdate,
		description: descriptionVmBackupJobUpdate,
	},
	{
		name: 'Update Backup Option',
		value: 'datacenterBackupChangeProperties',
		action: 'update Backup Option',
		execute: executedatacenterBackupChangeProperties,
		description: descriptiondatacenterBackupChangeProperties,
	},
	{
		name: 'Update Federated Active Directory',
		value: 'federationActiveDirectoryChangeProperties',
		action: 'update Federated Active Directory',
		execute: executefederationActiveDirectoryChangeProperties,
		description: descriptionfederationActiveDirectoryChangeProperties,
	},
	{
		name: 'Update Network Allowed on Infrastructure Firewall',
		value: 'allowedNetworkUpdate',
		action: 'Update network allowed on infrastructure firewall',
		execute: executeAllowedNetworkUpdate,
		description: descriptionAllowedNetworkUpdate,
	},
	{
		name: 'Update NSX-T Configuration on Cluster',
		value: 'clusterNsxtUpdate',
		action: 'update NSX-T Configuration on Cluster',
		execute: executeclusterNsxtUpdate,
		description: descriptionclusterNsxtUpdate,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdate',
		action: 'Update service information',
		execute: executeServiceInfosUpdate,
		description: descriptionServiceInfosUpdate,
	},
	{
		name: 'Update Two Factor Authentication Whitelisted Network',
		value: 'twoFAWhitelistChangeProperties',
		action: 'update Two Factor Authentication Whitelisted Network',
		execute: executetwoFAWhitelistChangeProperties,
		description: descriptiontwoFAWhitelistChangeProperties,
	},
	{
		name: 'Update User Datacenter Right',
		value: 'userRightUpdate',
		action: 'Update user datacenter right',
		execute: executeUserRightUpdate,
		description: descriptionUserRightUpdate,
	},
	{
		name: 'Update User Properties',
		value: 'userChangeProperties',
		action: 'Update user properties',
		execute: executeUserChangeProperties,
		description: descriptionUserChangeProperties,
	},
	{
		name: 'Update Virtual Datacenter',
		value: 'datacenterUpdate',
		action: 'Update virtual datacenter',
		execute: executeDatacenterUpdate,
		description: descriptionDatacenterUpdate,
	},
	{
		name: 'Update VM Encryption KMS Server',
		value: 'vmEncryptionKmsChangeProperties',
		action: 'update VM Encryption KMS Server',
		execute: executevmEncryptionKmsChangeProperties,
		description: descriptionvmEncryptionKmsChangeProperties,
	},
	{
		name: 'Update VMware on OVHcloud',
		value: 'update',
		action: 'Update VMware on OVHcloud',
		execute: executeUpdate,
		description: descriptionUpdate,
	},
	{
		name: 'Update VMware on OVHcloud Properties',
		value: 'changeProperties',
		action: 'Update VMware on OVHcloud properties',
		execute: executeChangeProperties,
		description: descriptionChangeProperties,
	},
	{
		name: 'Update Zerto Single VRA Resources',
		value: 'zertoSingleVraResourcesUpdate',
		action: 'update Zerto Single VRA Resources',
		execute: executezertoSingleVraResourcesUpdate,
		description: descriptionzertoSingleVraResourcesUpdate,
	},
	{
		name: 'Update Zerto VRA Resources',
		value: 'zertoVraResourcesUpdate',
		action: 'update Zerto VRA Resources',
		execute: executezertoVraResourcesUpdate,
		description: descriptionzertoVraResourcesUpdate,
	},
	{
		name: 'Upgrade Hypervisor to Next Version',
		value: 'upgradeHypervisor',
		action: 'upgrade Hypervisor to Next Version',
		execute: executeupgradeHypervisor,
		description: descriptionupgradeHypervisor,
	},
	{
		name: 'Upgrade vCenter to Next Version',
		value: 'upgradeVcenter',
		action: 'upgrade vCenter to Next Version',
		execute: executeupgradeVcenter,
		description: descriptionupgradeVcenter,
	},
	{
		name: 'Upgrade VMware Aria Operations',
		value: 'vropsUpgrade',
		action: 'upgrade VMware Aria Operations',
		execute: executevropsUpgrade,
		description: descriptionvropsUpgrade,
	},
	],
);

export { description, execute };
