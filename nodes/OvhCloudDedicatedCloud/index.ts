import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeCommercialRangeGet, description as descriptionCommercialRangeGet } from './commercialRangeGet.operation';
import { execute as executeCommercialRangeList, description as descriptionCommercialRangeList } from './commercialRangeList.operation';
import { execute as executeCommercialRangeComplianceList, description as descriptionCommercialRangeComplianceList } from './commercialRangeComplianceList.operation';
import { execute as executeCommercialRangeOrderableList, description as descriptionCommercialRangeOrderableList } from './commercialRangeOrderableList.operation';
import { execute as executeHostProfileGet, description as descriptionHostProfileGet } from './hostProfileGet.operation';
import { execute as executeHostProfileList, description as descriptionHostProfileList } from './hostProfileList.operation';
import { execute as executeHostProfileServiceList, description as descriptionHostProfileServiceList } from './hostProfileServiceList.operation';
import { execute as executeHostProfileServiceGet, description as descriptionHostProfileServiceGet } from './hostProfileServiceGet.operation';
import { execute as executeLocationGet, description as descriptionLocationGet } from './locationGet.operation';
import { execute as executeLocationList, description as descriptionLocationList } from './locationList.operation';
import { execute as executeLocationServiceGet, description as descriptionLocationServiceGet } from './locationServiceGet.operation';
import { execute as executeStockHostList, description as descriptionStockHostList } from './stockHostList.operation';
import { execute as executeStockPccList, description as descriptionStockPccList } from './stockPccList.operation';
import { execute as executeStockZpoolList, description as descriptionStockZpoolList } from './stockZpoolList.operation';
import { execute as executeHypervisorList, description as descriptionHypervisorList } from './hypervisorList.operation';
import { execute as executeHypervisorGet, description as descriptionHypervisorGet } from './hypervisorGet.operation';
import { execute as executeHypervisorServiceList, description as descriptionHypervisorServiceList } from './hypervisorServiceList.operation';
import { execute as executeHypervisorServiceGet, description as descriptionHypervisorServiceGet } from './hypervisorServiceGet.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './root/update.operation';
import { execute as executeTerminate, description as descriptionTerminate } from './root/terminate.operation';
import { execute as executeConfirmTermination, description as descriptionConfirmTermination } from './root/confirmTermination.operation';
import { execute as executeChangeContact, description as descriptionChangeContact } from './root/changeContact.operation';
import { execute as executeChangeProperties, description as descriptionChangeProperties } from './root/changeProperties.operation';
import { execute as executeAllowedNetworkList, description as descriptionAllowedNetworkList } from './allowedNetwork/allowedNetworkList.operation';
import { execute as executeAllowedNetworkCreate, description as descriptionAllowedNetworkCreate } from './allowedNetwork/allowedNetworkCreate.operation';
import { execute as executeAllowedNetworkGet, description as descriptionAllowedNetworkGet } from './allowedNetwork/allowedNetworkGet.operation';
import { execute as executeAllowedNetworkUpdate, description as descriptionAllowedNetworkUpdate } from './allowedNetwork/allowedNetworkUpdate.operation';
import { execute as executeAllowedNetworkDelete, description as descriptionAllowedNetworkDelete } from './allowedNetwork/allowedNetworkDelete.operation';
import { execute as executeAllowedNetworkTaskList, description as descriptionAllowedNetworkTaskList } from './allowedNetwork/allowedNetworkTaskList.operation';
import { execute as executeAllowedNetworkTaskGet, description as descriptionAllowedNetworkTaskGet } from './allowedNetwork/allowedNetworkTaskGet.operation';
import { execute as executeAllowedNetworkTaskChangeMaintenanceExecutionDate, description as descriptionAllowedNetworkTaskChangeMaintenanceExecutionDate } from './allowedNetwork/allowedNetworkTaskChangeMaintenanceExecutionDate.operation';
import { execute as executeAllowedNetworkTaskResetTaskState, description as descriptionAllowedNetworkTaskResetTaskState } from './allowedNetwork/allowedNetworkTaskResetTaskState.operation';
import { execute as executeDatacenterList, description as descriptionDatacenterList } from './datacenter/datacenterList.operation';
import { execute as executeDatacenterCreate, description as descriptionDatacenterCreate } from './datacenter/datacenterCreate.operation';
import { execute as executeDatacenterGet, description as descriptionDatacenterGet } from './datacenter/datacenterGet.operation';
import { execute as executeDatacenterUpdate, description as descriptionDatacenterUpdate } from './datacenter/datacenterUpdate.operation';
import { execute as executeDatacenterDelete, description as descriptionDatacenterDelete } from './datacenter/datacenterDelete.operation';
import { execute as executeDatacenterBackupRepositoryList, description as descriptionDatacenterBackupRepositoryList } from './datacenter/datacenterBackupRepositoryList.operation';
import { execute as executeDatacenterBackupRepositoryGet, description as descriptionDatacenterBackupRepositoryGet } from './datacenter/datacenterBackupRepositoryGet.operation';
import { execute as executeDatacenterCheckBackupJobs, description as descriptionDatacenterCheckBackupJobs } from './datacenter/datacenterCheckBackupJobs.operation';
import { execute as executeDatacenterOrderableFilerProfiles, description as descriptionDatacenterOrderableFilerProfiles } from './datacenter/datacenterOrderableFilerProfiles.operation';
import { execute as executeDatacenterOrderableHostProfiles, description as descriptionDatacenterOrderableHostProfiles } from './datacenter/datacenterOrderableHostProfiles.operation';
import { execute as executeDatacenterOrderNewFilerHourly, description as descriptionDatacenterOrderNewFilerHourly } from './datacenter/datacenterOrderNewFilerHourly.operation';
import { execute as executeDatacenterOrderNewHostHourly, description as descriptionDatacenterOrderNewHostHourly } from './datacenter/datacenterOrderNewHostHourly.operation';
import { execute as executeDatacenterTaskList, description as descriptionDatacenterTaskList } from './datacenter/datacenterTaskList.operation';
import { execute as executeDatacenterTaskGet, description as descriptionDatacenterTaskGet } from './datacenter/datacenterTaskGet.operation';
import { execute as executeDatacenterTaskChangeMaintenanceExecutionDate, description as descriptionDatacenterTaskChangeMaintenanceExecutionDate } from './datacenter/datacenterTaskChangeMaintenanceExecutionDate.operation';
import { execute as executeDatacenterTaskResetTaskState, description as descriptionDatacenterTaskResetTaskState } from './datacenter/datacenterTaskResetTaskState.operation';
import { execute as executeHostList, description as descriptionHostList } from './host/hostList.operation';
import { execute as executeHostGet, description as descriptionHostGet } from './host/hostGet.operation';
import { execute as executeHostAddHostSpare, description as descriptionHostAddHostSpare } from './host/hostAddHostSpare.operation';
import { execute as executeHostHourlyConsumption, description as descriptionHostHourlyConsumption } from './host/hostHourlyConsumption.operation';
import { execute as executeHostLocation, description as descriptionHostLocation } from './host/hostLocation.operation';
import { execute as executeHostRemove, description as descriptionHostRemove } from './host/hostRemove.operation';
import { execute as executeHostResilience, description as descriptionHostResilience } from './host/hostResilience.operation';
import { execute as executeHostResilienceCanBeEnabled, description as descriptionHostResilienceCanBeEnabled } from './host/hostResilienceCanBeEnabled.operation';
import { execute as executeHostResilienceDisable, description as descriptionHostResilienceDisable } from './host/hostResilienceDisable.operation';
import { execute as executeHostResilienceEnable, description as descriptionHostResilienceEnable } from './host/hostResilienceEnable.operation';
import { execute as executeHostTaskList, description as descriptionHostTaskList } from './host/hostTaskList.operation';
import { execute as executeHostTaskGet, description as descriptionHostTaskGet } from './host/hostTaskGet.operation';
import { execute as executeHostTaskChangeMaintenanceExecutionDate, description as descriptionHostTaskChangeMaintenanceExecutionDate } from './host/hostTaskChangeMaintenanceExecutionDate.operation';
import { execute as executeHostTaskResetTaskState, description as descriptionHostTaskResetTaskState } from './host/hostTaskResetTaskState.operation';
import { execute as executeFilerList, description as descriptionFilerList } from './filer/filerList.operation';
import { execute as executeFilerGet, description as descriptionFilerGet } from './filer/filerGet.operation';
import { execute as executeFilerCheckGlobalCompatible, description as descriptionFilerCheckGlobalCompatible } from './filer/filerCheckGlobalCompatible.operation';
import { execute as executeFilerConvertToGlobal, description as descriptionFilerConvertToGlobal } from './filer/filerConvertToGlobal.operation';
import { execute as executeFilerHourlyConsumption, description as descriptionFilerHourlyConsumption } from './filer/filerHourlyConsumption.operation';
import { execute as executeFilerLocation, description as descriptionFilerLocation } from './filer/filerLocation.operation';
import { execute as executeFilerRemove, description as descriptionFilerRemove } from './filer/filerRemove.operation';
import { execute as executeFilerTaskList, description as descriptionFilerTaskList } from './filer/filerTaskList.operation';
import { execute as executeFilerTaskGet, description as descriptionFilerTaskGet } from './filer/filerTaskGet.operation';
import { execute as executeFilerTaskChangeMaintenanceExecutionDate, description as descriptionFilerTaskChangeMaintenanceExecutionDate } from './filer/filerTaskChangeMaintenanceExecutionDate.operation';
import { execute as executeFilerTaskResetTaskState, description as descriptionFilerTaskResetTaskState } from './filer/filerTaskResetTaskState.operation';
import { execute as executeFilerGlobalList, description as descriptionFilerGlobalList } from './filer/filerGlobalList.operation';
import { execute as executeFilerGlobalGet, description as descriptionFilerGlobalGet } from './filer/filerGlobalGet.operation';
import { execute as executeFilerGlobalCheckGlobalCompatible, description as descriptionFilerGlobalCheckGlobalCompatible } from './filer/filerGlobalCheckGlobalCompatible.operation';
import { execute as executeFilerGlobalConvertToGlobal, description as descriptionFilerGlobalConvertToGlobal } from './filer/filerGlobalConvertToGlobal.operation';
import { execute as executeFilerGlobalHourlyConsumption, description as descriptionFilerGlobalHourlyConsumption } from './filer/filerGlobalHourlyConsumption.operation';
import { execute as executeFilerGlobalLocation, description as descriptionFilerGlobalLocation } from './filer/filerGlobalLocation.operation';
import { execute as executeFilerGlobalRemove, description as descriptionFilerGlobalRemove } from './filer/filerGlobalRemove.operation';
import { execute as executeFilerGlobalTaskList, description as descriptionFilerGlobalTaskList } from './filer/filerGlobalTaskList.operation';
import { execute as executeFilerGlobalTaskGet, description as descriptionFilerGlobalTaskGet } from './filer/filerGlobalTaskGet.operation';
import { execute as executeFilerGlobalTaskChangeMaintenanceExecutionDate, description as descriptionFilerGlobalTaskChangeMaintenanceExecutionDate } from './filer/filerGlobalTaskChangeMaintenanceExecutionDate.operation';
import { execute as executeFilerGlobalTaskResetTaskState, description as descriptionFilerGlobalTaskResetTaskState } from './filer/filerGlobalTaskResetTaskState.operation';
import { execute as executeVmList, description as descriptionVmList } from './vm/vmList.operation';
import { execute as executeVmGet, description as descriptionVmGet } from './vm/vmGet.operation';
import { execute as executeVmBackupJobGet, description as descriptionVmBackupJobGet } from './vm/vmBackupJobGet.operation';
import { execute as executeVmBackupJobUpdate, description as descriptionVmBackupJobUpdate } from './vm/vmBackupJobUpdate.operation';
import { execute as executeVmBackupJobDisable, description as descriptionVmBackupJobDisable } from './vm/vmBackupJobDisable.operation';
import { execute as executeVmBackupJobEnable, description as descriptionVmBackupJobEnable } from './vm/vmBackupJobEnable.operation';
import { execute as executeVmRestorePointsList, description as descriptionVmRestorePointsList } from './vm/vmRestorePointsList.operation';
import { execute as executeVmRestorePointGet, description as descriptionVmRestorePointGet } from './vm/vmRestorePointGet.operation';
import { execute as executeVmRestorePointRestore, description as descriptionVmRestorePointRestore } from './vm/vmRestorePointRestore.operation';
import { execute as executeVmDisableBackup, description as descriptionVmDisableBackup } from './vm/vmDisableBackup.operation';
import { execute as executeVmDisableCarp, description as descriptionVmDisableCarp } from './vm/vmDisableCarp.operation';
import { execute as executeVmEditBackup, description as descriptionVmEditBackup } from './vm/vmEditBackup.operation';
import { execute as executeVmEnableBackup, description as descriptionVmEnableBackup } from './vm/vmEnableBackup.operation';
import { execute as executeVmEnableCarp, description as descriptionVmEnableCarp } from './vm/vmEnableCarp.operation';
import { execute as executeVmRemoveLicense, description as descriptionVmRemoveLicense } from './vm/vmRemoveLicense.operation';
import { execute as executeVmRestoreBackup, description as descriptionVmRestoreBackup } from './vm/vmRestoreBackup.operation';
import { execute as executeVmSetLicense, description as descriptionVmSetLicense } from './vm/vmSetLicense.operation';
import { execute as executeVmLicensedList, description as descriptionVmLicensedList } from './vm/vmLicensedList.operation';
import { execute as executeServiceInfosGet, description as descriptionServiceInfosGet } from './serviceInfos/serviceInfosGet.operation';
import { execute as executeServiceInfosUpdate, description as descriptionServiceInfosUpdate } from './serviceInfos/serviceInfosUpdate.operation';
import { execute as executeUserList, description as descriptionUserList } from './user/userList.operation';
import { execute as executeUserCreate, description as descriptionUserCreate } from './user/userCreate.operation';
import { execute as executeUserGet, description as descriptionUserGet } from './user/userGet.operation';
import { execute as executeUserDelete, description as descriptionUserDelete } from './user/userDelete.operation';
import { execute as executeUserChangePassword, description as descriptionUserChangePassword } from './user/userChangePassword.operation';
import { execute as executeUserChangeProperties, description as descriptionUserChangeProperties } from './user/userChangeProperties.operation';
import { execute as executeUserConfirmPhoneNumber, description as descriptionUserConfirmPhoneNumber } from './user/userConfirmPhoneNumber.operation';
import { execute as executeUserDisable, description as descriptionUserDisable } from './user/userDisable.operation';
import { execute as executeUserEnable, description as descriptionUserEnable } from './user/userEnable.operation';
import { execute as executeUserObjectRightList, description as descriptionUserObjectRightList } from './user/userObjectRightList.operation';
import { execute as executeUserObjectRightCreate, description as descriptionUserObjectRightCreate } from './user/userObjectRightCreate.operation';
import { execute as executeUserObjectRightGet, description as descriptionUserObjectRightGet } from './user/userObjectRightGet.operation';
import { execute as executeUserObjectRightDelete, description as descriptionUserObjectRightDelete } from './user/userObjectRightDelete.operation';
import { execute as executeUserRightList, description as descriptionUserRightList } from './user/userRightList.operation';
import { execute as executeUserRightGet, description as descriptionUserRightGet } from './user/userRightGet.operation';
import { execute as executeUserRightUpdate, description as descriptionUserRightUpdate } from './user/userRightUpdate.operation';
import { execute as executeUserTaskList, description as descriptionUserTaskList } from './user/userTaskList.operation';
import { execute as executeUserTaskGet, description as descriptionUserTaskGet } from './user/userTaskGet.operation';
import { execute as executeUserTaskChangeMaintenanceExecutionDate, description as descriptionUserTaskChangeMaintenanceExecutionDate } from './user/userTaskChangeMaintenanceExecutionDate.operation';
import { execute as executeUserTaskResetTaskState, description as descriptionUserTaskResetTaskState } from './user/userTaskResetTaskState.operation';
import { execute as executeTaskList, description as descriptionTaskList } from './task/taskList.operation';
import { execute as executeTaskGet, description as descriptionTaskGet } from './task/taskGet.operation';
import { execute as executeTaskChangeMaintenanceExecutionDate, description as descriptionTaskChangeMaintenanceExecutionDate } from './task/taskChangeMaintenanceExecutionDate.operation';
import { execute as executeTaskResetTaskState, description as descriptionTaskResetTaskState } from './task/taskResetTaskState.operation';
import { execute as executeBackupRepositoryList, description as descriptionBackupRepositoryList } from './backupRepository/backupRepositoryList.operation';
import { execute as executeBackupRepositoryGet, description as descriptionBackupRepositoryGet } from './backupRepository/backupRepositoryGet.operation';
import { execute as executeIpList, description as descriptionIpList } from './ip/ipList.operation';
import { execute as executeIpGet, description as descriptionIpGet } from './ip/ipGet.operation';
import { execute as executeIpDetails, description as descriptionIpDetails } from './ip/ipDetails.operation';
import { execute as executeIpTaskList, description as descriptionIpTaskList } from './ip/ipTaskList.operation';
import { execute as executeIpTaskGet, description as descriptionIpTaskGet } from './ip/ipTaskGet.operation';
import { execute as executeIpTaskChangeMaintenanceExecutionDate, description as descriptionIpTaskChangeMaintenanceExecutionDate } from './ip/ipTaskChangeMaintenanceExecutionDate.operation';
import { execute as executeIpTaskResetTaskState, description as descriptionIpTaskResetTaskState } from './ip/ipTaskResetTaskState.operation';

import { execute as executezertoDisable, description as descriptionzertoDisable } from './datacenter/disasterRecovery/zerto/zertoDisable.operation';
import { execute as executezertoEnable, description as descriptionzertoEnable } from './datacenter/disasterRecovery/zerto/zertoEnable.operation';
import { execute as executezertoEndMigration, description as descriptionzertoEndMigration } from './datacenter/disasterRecovery/zerto/zertoEndMigration.operation';
import { execute as executezertoEndpointPublicIp, description as descriptionzertoEndpointPublicIp } from './datacenter/disasterRecovery/zerto/zertoEndpointPublicIp.operation';
import { execute as executezertoRemoteSiteDelete, description as descriptionzertoRemoteSiteDelete } from './datacenter/disasterRecovery/zerto/zertoRemoteSiteDelete.operation';
import { execute as executezertoRemoteSiteList, description as descriptionzertoRemoteSiteList } from './datacenter/disasterRecovery/zerto/zertoRemoteSiteList.operation';
import { execute as executezertoRemoteSiteCreate, description as descriptionzertoRemoteSiteCreate } from './datacenter/disasterRecovery/zerto/zertoRemoteSiteCreate.operation';
import { execute as executezertoRequestHealthCheck, description as descriptionzertoRequestHealthCheck } from './datacenter/disasterRecovery/zerto/zertoRequestHealthCheck.operation';
import { execute as executezertoStartMigration, description as descriptionzertoStartMigration } from './datacenter/disasterRecovery/zerto/zertoStartMigration.operation';
import { execute as executezertoStatusGet, description as descriptionzertoStatusGet } from './datacenter/disasterRecovery/zerto/zertoStatusGet.operation';
import { execute as executezertoUsageReport, description as descriptionzertoUsageReport } from './datacenter/disasterRecovery/zerto/zertoUsageReport.operation';
import { execute as executezertoVraResourcesList, description as descriptionzertoVraResourcesList } from './datacenter/disasterRecovery/zerto/zertoVraResourcesList.operation';
import { execute as executezertoVraResourcesUpdate, description as descriptionzertoVraResourcesUpdate } from './datacenter/disasterRecovery/zerto/zertoVraResourcesUpdate.operation';
import { execute as executezertoSingleConfigureVpn, description as descriptionzertoSingleConfigureVpn } from './datacenter/disasterRecovery/zertoSingle/zertoSingleConfigureVpn.operation';
import { execute as executezertoSingleDefaultLocalVraNetwork, description as descriptionzertoSingleDefaultLocalVraNetwork } from './datacenter/disasterRecovery/zertoSingle/zertoSingleDefaultLocalVraNetwork.operation';
import { execute as executezertoSingleDisable, description as descriptionzertoSingleDisable } from './datacenter/disasterRecovery/zertoSingle/zertoSingleDisable.operation';
import { execute as executezertoSingleEnable, description as descriptionzertoSingleEnable } from './datacenter/disasterRecovery/zertoSingle/zertoSingleEnable.operation';
import { execute as executezertoSingleEndpointPublicIp, description as descriptionzertoSingleEndpointPublicIp } from './datacenter/disasterRecovery/zertoSingle/zertoSingleEndpointPublicIp.operation';
import { execute as executezertoSingleRemoteSiteDelete, description as descriptionzertoSingleRemoteSiteDelete } from './datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteDelete.operation';
import { execute as executezertoSingleRemoteSiteList, description as descriptionzertoSingleRemoteSiteList } from './datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteList.operation';
import { execute as executezertoSingleRemoteSiteCreate, description as descriptionzertoSingleRemoteSiteCreate } from './datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteCreate.operation';
import { execute as executezertoSingleRequestPairingToken, description as descriptionzertoSingleRequestPairingToken } from './datacenter/disasterRecovery/zertoSingle/zertoSingleRequestPairingToken.operation';
import { execute as executezertoSingleVraResourcesList, description as descriptionzertoSingleVraResourcesList } from './datacenter/disasterRecovery/zertoSingle/zertoSingleVraResourcesList.operation';
import { execute as executezertoSingleVraResourcesUpdate, description as descriptionzertoSingleVraResourcesUpdate } from './datacenter/disasterRecovery/zertoSingle/zertoSingleVraResourcesUpdate.operation';
import { execute as executedatacenterBackupGet, description as descriptiondatacenterBackupGet } from './datacenter/backup/datacenterBackupGet.operation';
import { execute as executedatacenterBackupBatchRestore, description as descriptiondatacenterBackupBatchRestore } from './datacenter/backup/datacenterBackupBatchRestore.operation';
import { execute as executedatacenterBackupCanOptimizeProxies, description as descriptiondatacenterBackupCanOptimizeProxies } from './datacenter/backup/datacenterBackupCanOptimizeProxies.operation';
import { execute as executedatacenterBackupChangeProperties, description as descriptiondatacenterBackupChangeProperties } from './datacenter/backup/datacenterBackupChangeProperties.operation';
import { execute as executedatacenterBackupDisable, description as descriptiondatacenterBackupDisable } from './datacenter/backup/datacenterBackupDisable.operation';
import { execute as executedatacenterBackupEnable, description as descriptiondatacenterBackupEnable } from './datacenter/backup/datacenterBackupEnable.operation';
import { execute as executedatacenterBackupGenerateReport, description as descriptiondatacenterBackupGenerateReport } from './datacenter/backup/datacenterBackupGenerateReport.operation';
import { execute as executedatacenterBackupOfferCapabilities, description as descriptiondatacenterBackupOfferCapabilities } from './datacenter/backup/datacenterBackupOfferCapabilities.operation';
import { execute as executedatacenterBackupOptimizeProxies, description as descriptiondatacenterBackupOptimizeProxies } from './datacenter/backup/datacenterBackupOptimizeProxies.operation';
import { execute as executensxtEdgeList, description as descriptionnsxtEdgeList } from './datacenter/nsxtEdge/nsxtEdgeList.operation';
import { execute as executensxtEdgesResizingCapabilities, description as descriptionnsxtEdgesResizingCapabilities } from './datacenter/nsxtEdge/nsxtEdgesResizingCapabilities.operation';
import { execute as executensxtEdgesScalingCapabilities, description as descriptionnsxtEdgesScalingCapabilities } from './datacenter/nsxtEdge/nsxtEdgesScalingCapabilities.operation';
import { execute as executeresizeNsxtEdgeCluster, description as descriptionresizeNsxtEdgeCluster } from './datacenter/nsxtEdge/resizeNsxtEdgeCluster.operation';
import { execute as executensxtEdgeCreate, description as descriptionnsxtEdgeCreate } from './datacenter/nsxtEdge/nsxtEdgeCreate.operation';
import { execute as executensxtEdgeDelete, description as descriptionnsxtEdgeDelete } from './datacenter/nsxtEdge/nsxtEdgeDelete.operation';
import { execute as executensxtEdgeGet, description as descriptionnsxtEdgeGet } from './datacenter/nsxtEdge/nsxtEdgeGet.operation';
import { execute as executensxtEdgeRelocateEdge, description as descriptionnsxtEdgeRelocateEdge } from './datacenter/nsxtEdge/nsxtEdgeRelocateEdge.operation';
import { execute as executensxtEdgeResilience, description as descriptionnsxtEdgeResilience } from './datacenter/nsxtEdge/nsxtEdgeResilience.operation';
import { execute as executensxtEdgeResilienceCanBeEnabled, description as descriptionnsxtEdgeResilienceCanBeEnabled } from './datacenter/nsxtEdge/nsxtEdgeResilienceCanBeEnabled.operation';
import { execute as executensxtEdgeResilienceDisable, description as descriptionnsxtEdgeResilienceDisable } from './datacenter/nsxtEdge/nsxtEdgeResilienceDisable.operation';
import { execute as executensxtEdgeResilienceEnable, description as descriptionnsxtEdgeResilienceEnable } from './datacenter/nsxtEdge/nsxtEdgeResilienceEnable.operation';
import { execute as executeclusterList, description as descriptionclusterList } from './datacenter/cluster/clusterList.operation';
import { execute as executeclusterGet, description as descriptionclusterGet } from './datacenter/cluster/clusterGet.operation';
import { execute as executeclusterNsxtDelete, description as descriptionclusterNsxtDelete } from './datacenter/cluster/clusterNsxtDelete.operation';
import { execute as executeclusterNsxtCreate, description as descriptionclusterNsxtCreate } from './datacenter/cluster/clusterNsxtCreate.operation';
import { execute as executeclusterNsxtUpdate, description as descriptionclusterNsxtUpdate } from './datacenter/cluster/clusterNsxtUpdate.operation';
import { execute as executeprivateGatewayGet, description as descriptionprivateGatewayGet } from './datacenter/privateGateway/privateGatewayGet.operation';
import { execute as executeprivateGatewayDisable, description as descriptionprivateGatewayDisable } from './datacenter/privateGateway/privateGatewayDisable.operation';
import { execute as executeprivateGatewayEnable, description as descriptionprivateGatewayEnable } from './datacenter/privateGateway/privateGatewayEnable.operation';
import { execute as executeprivateGatewayReconfigure, description as descriptionprivateGatewayReconfigure } from './datacenter/privateGateway/privateGatewayReconfigure.operation';
import { execute as executefederationGet, description as descriptionfederationGet } from './federation/federationGet.operation';
import { execute as executefederationActiveDirectoryList, description as descriptionfederationActiveDirectoryList } from './federation/federationActiveDirectoryList.operation';
import { execute as executefederationActiveDirectoryCreate, description as descriptionfederationActiveDirectoryCreate } from './federation/federationActiveDirectoryCreate.operation';
import { execute as executefederationActiveDirectoryDelete, description as descriptionfederationActiveDirectoryDelete } from './federation/federationActiveDirectoryDelete.operation';
import { execute as executefederationActiveDirectoryGet, description as descriptionfederationActiveDirectoryGet } from './federation/federationActiveDirectoryGet.operation';
import { execute as executefederationActiveDirectoryChangeProperties, description as descriptionfederationActiveDirectoryChangeProperties } from './federation/federationActiveDirectoryChangeProperties.operation';
import { execute as executefederationActiveDirectoryGrantGroup, description as descriptionfederationActiveDirectoryGrantGroup } from './federation/federationActiveDirectoryGrantGroup.operation';
import { execute as executefederationActiveDirectoryGrantUser, description as descriptionfederationActiveDirectoryGrantUser } from './federation/federationActiveDirectoryGrantUser.operation';
import { execute as executehcxGet, description as descriptionhcxGet } from './hcx/hcxGet.operation';
import { execute as executehcxCanBeDisabled, description as descriptionhcxCanBeDisabled } from './hcx/hcxCanBeDisabled.operation';
import { execute as executehcxCanBeEnabled, description as descriptionhcxCanBeEnabled } from './hcx/hcxCanBeEnabled.operation';
import { execute as executehcxDisable, description as descriptionhcxDisable } from './hcx/hcxDisable.operation';
import { execute as executehcxEnable, description as descriptionhcxEnable } from './hcx/hcxEnable.operation';
import { execute as executehdsGet, description as descriptionhdsGet } from './hds/hdsGet.operation';
import { execute as executehdsCanBeDisabled, description as descriptionhdsCanBeDisabled } from './hds/hdsCanBeDisabled.operation';
import { execute as executehdsCanBeEnabled, description as descriptionhdsCanBeEnabled } from './hds/hdsCanBeEnabled.operation';
import { execute as executehdsDisable, description as descriptionhdsDisable } from './hds/hdsDisable.operation';
import { execute as executehdsEnable, description as descriptionhdsEnable } from './hds/hdsEnable.operation';
import { execute as executehipaaGet, description as descriptionhipaaGet } from './hipaa/hipaaGet.operation';
import { execute as executehipaaCanBeDisabled, description as descriptionhipaaCanBeDisabled } from './hipaa/hipaaCanBeDisabled.operation';
import { execute as executehipaaCanBeEnabled, description as descriptionhipaaCanBeEnabled } from './hipaa/hipaaCanBeEnabled.operation';
import { execute as executehipaaDisable, description as descriptionhipaaDisable } from './hipaa/hipaaDisable.operation';
import { execute as executehipaaEnable, description as descriptionhipaaEnable } from './hipaa/hipaaEnable.operation';
import { execute as executepcidssGet, description as descriptionpcidssGet } from './pcidss/pcidssGet.operation';
import { execute as executepcidssCanBeDisabled, description as descriptionpcidssCanBeDisabled } from './pcidss/pcidssCanBeDisabled.operation';
import { execute as executepcidssCanBeEnabled, description as descriptionpcidssCanBeEnabled } from './pcidss/pcidssCanBeEnabled.operation';
import { execute as executepcidssDisable, description as descriptionpcidssDisable } from './pcidss/pcidssDisable.operation';
import { execute as executepcidssEnable, description as descriptionpcidssEnable } from './pcidss/pcidssEnable.operation';
import { execute as executensxGet, description as descriptionnsxGet } from './nsx/nsxGet.operation';
import { execute as executensxCanBeDisabled, description as descriptionnsxCanBeDisabled } from './nsx/nsxCanBeDisabled.operation';
import { execute as executensxCanBeEnabled, description as descriptionnsxCanBeEnabled } from './nsx/nsxCanBeEnabled.operation';
import { execute as executensxDisable, description as descriptionnsxDisable } from './nsx/nsxDisable.operation';
import { execute as executensxEnable, description as descriptionnsxEnable } from './nsx/nsxEnable.operation';
import { execute as executesapList, description as descriptionsapList } from './sap/sapList.operation';
import { execute as executesapCreate, description as descriptionsapCreate } from './sap/sapCreate.operation';
import { execute as executesapDelete, description as descriptionsapDelete } from './sap/sapDelete.operation';
import { execute as executesapGet, description as descriptionsapGet } from './sap/sapGet.operation';
import { execute as executevropsGet, description as descriptionvropsGet } from './vrops/vropsGet.operation';
import { execute as executevropsCanBeDisabled, description as descriptionvropsCanBeDisabled } from './vrops/vropsCanBeDisabled.operation';
import { execute as executevropsCanBeEnabled, description as descriptionvropsCanBeEnabled } from './vrops/vropsCanBeEnabled.operation';
import { execute as executevropsDisable, description as descriptionvropsDisable } from './vrops/vropsDisable.operation';
import { execute as executevropsEnable, description as descriptionvropsEnable } from './vrops/vropsEnable.operation';
import { execute as executevropsOutgoingFlowList, description as descriptionvropsOutgoingFlowList } from './vrops/vropsOutgoingFlowList.operation';
import { execute as executevropsOutgoingFlowCreate, description as descriptionvropsOutgoingFlowCreate } from './vrops/vropsOutgoingFlowCreate.operation';
import { execute as executevropsOutgoingFlowDelete, description as descriptionvropsOutgoingFlowDelete } from './vrops/vropsOutgoingFlowDelete.operation';
import { execute as executevropsOutgoingFlowGet, description as descriptionvropsOutgoingFlowGet } from './vrops/vropsOutgoingFlowGet.operation';
import { execute as executevropsOutgoingFlowChangeProperties, description as descriptionvropsOutgoingFlowChangeProperties } from './vrops/vropsOutgoingFlowChangeProperties.operation';
import { execute as executevropsUpgrade, description as descriptionvropsUpgrade } from './vrops/vropsUpgrade.operation';
import { execute as executeiamGet, description as descriptioniamGet } from './iam/iamGet.operation';
import { execute as executeiamAddRole, description as descriptioniamAddRole } from './iam/iamAddRole.operation';
import { execute as executeiamCanBeDisabled, description as descriptioniamCanBeDisabled } from './iam/iamCanBeDisabled.operation';
import { execute as executeiamCanBeEnabled, description as descriptioniamCanBeEnabled } from './iam/iamCanBeEnabled.operation';
import { execute as executeiamDisable, description as descriptioniamDisable } from './iam/iamDisable.operation';
import { execute as executeiamEnable, description as descriptioniamEnable } from './iam/iamEnable.operation';
import { execute as executelogForwarderGet, description as descriptionlogForwarderGet } from './logForwarder/logForwarderGet.operation';
import { execute as executelogForwarderCanBeDisabled, description as descriptionlogForwarderCanBeDisabled } from './logForwarder/logForwarderCanBeDisabled.operation';
import { execute as executelogForwarderCanBeEnabled, description as descriptionlogForwarderCanBeEnabled } from './logForwarder/logForwarderCanBeEnabled.operation';
import { execute as executelogForwarderDisable, description as descriptionlogForwarderDisable } from './logForwarder/logForwarderDisable.operation';
import { execute as executelogForwarderEnable, description as descriptionlogForwarderEnable } from './logForwarder/logForwarderEnable.operation';
import { execute as executelogKindList, description as descriptionlogKindList } from './log/logKindList.operation';
import { execute as executelogKindGet, description as descriptionlogKindGet } from './log/logKindGet.operation';
import { execute as executelogSubscriptionList, description as descriptionlogSubscriptionList } from './log/logSubscriptionList.operation';
import { execute as executelogSubscriptionCreate, description as descriptionlogSubscriptionCreate } from './log/logSubscriptionCreate.operation';
import { execute as executelogSubscriptionDelete, description as descriptionlogSubscriptionDelete } from './log/logSubscriptionDelete.operation';
import { execute as executelogSubscriptionGet, description as descriptionlogSubscriptionGet } from './log/logSubscriptionGet.operation';
import { execute as executelogUrlCreate, description as descriptionlogUrlCreate } from './log/logUrlCreate.operation';
import { execute as executetwoFAWhitelistList, description as descriptiontwoFAWhitelistList } from './twoFAWhitelist/twoFAWhitelistList.operation';
import { execute as executetwoFAWhitelistCreate, description as descriptiontwoFAWhitelistCreate } from './twoFAWhitelist/twoFAWhitelistCreate.operation';
import { execute as executetwoFAWhitelistDelete, description as descriptiontwoFAWhitelistDelete } from './twoFAWhitelist/twoFAWhitelistDelete.operation';
import { execute as executetwoFAWhitelistGet, description as descriptiontwoFAWhitelistGet } from './twoFAWhitelist/twoFAWhitelistGet.operation';
import { execute as executetwoFAWhitelistChangeProperties, description as descriptiontwoFAWhitelistChangeProperties } from './twoFAWhitelist/twoFAWhitelistChangeProperties.operation';
import { execute as executevlanList, description as descriptionvlanList } from './vlan/vlanList.operation';
import { execute as executevlanGet, description as descriptionvlanGet } from './vlan/vlanGet.operation';
import { execute as executevendorGet, description as descriptionvendorGet } from './vendor/vendorGet.operation';
import { execute as executevendorObjectTypeList, description as descriptionvendorObjectTypeList } from './vendor/vendorObjectTypeList.operation';
import { execute as executevendorOvhId, description as descriptionvendorOvhId } from './vendor/vendorOvhId.operation';
import { execute as executevmEncryptionGet, description as descriptionvmEncryptionGet } from './vmEncryption/vmEncryptionGet.operation';
import { execute as executevmEncryptionKmsList, description as descriptionvmEncryptionKmsList } from './vmEncryption/kms/vmEncryptionKmsList.operation';
import { execute as executevmEncryptionKmsCreate, description as descriptionvmEncryptionKmsCreate } from './vmEncryption/kms/vmEncryptionKmsCreate.operation';
import { execute as executevmEncryptionKmsDelete, description as descriptionvmEncryptionKmsDelete } from './vmEncryption/kms/vmEncryptionKmsDelete.operation';
import { execute as executevmEncryptionKmsGet, description as descriptionvmEncryptionKmsGet } from './vmEncryption/kms/vmEncryptionKmsGet.operation';
import { execute as executevmEncryptionKmsChangeProperties, description as descriptionvmEncryptionKmsChangeProperties } from './vmEncryption/kms/vmEncryptionKmsChangeProperties.operation';
import { execute as executevrackList, description as descriptionvrackList } from './vrack/vrackList.operation';
import { execute as executevrackDelete, description as descriptionvrackDelete } from './vrack/vrackDelete.operation';
import { execute as executevrackGet, description as descriptionvrackGet } from './vrack/vrackGet.operation';
import { execute as executerobotList, description as descriptionrobotList } from './robot/robotList.operation';
import { execute as executerobotGet, description as descriptionrobotGet } from './robot/robotGet.operation';
import { execute as executetagList, description as descriptiontagList } from './tag/tagList.operation';
import { execute as executetagGet, description as descriptiontagGet } from './tag/tagGet.operation';
import { execute as executeservicePackGet, description as descriptionservicePackGet } from './servicePack/servicePackGet.operation';
import { execute as executeservicePacksList, description as descriptionservicePacksList } from './servicePacks/servicePacksList.operation';
import { execute as executeservicePacksGet, description as descriptionservicePacksGet } from './servicePacks/servicePacksGet.operation';
import { execute as executesecurityOptionsGet, description as descriptionsecurityOptionsGet } from './securityOptions/securityOptionsGet.operation';
import { execute as executesecurityOptionsCompatibilityMatrix, description as descriptionsecurityOptionsCompatibilityMatrix } from './securityOptions/securityOptionsCompatibilityMatrix.operation';
import { execute as executesecurityOptionsDependenciesTree, description as descriptionsecurityOptionsDependenciesTree } from './securityOptions/securityOptionsDependenciesTree.operation';
import { execute as executesecurityOptionsPendingOptions, description as descriptionsecurityOptionsPendingOptions } from './securityOptions/securityOptionsPendingOptions.operation';
import { execute as executesecurityOptionsResumePendingEnabling, description as descriptionsecurityOptionsResumePendingEnabling } from './securityOptions/securityOptionsResumePendingEnabling.operation';
import { execute as executevcenterVersionGet, description as descriptionvcenterVersionGet } from './root/vcenterVersionGet.operation';
import { execute as executecapabilitiesGet, description as descriptioncapabilitiesGet } from './root/capabilitiesGet.operation';
import { execute as executecanDeployNsxtEdgesOnGlobalDatastores, description as descriptioncanDeployNsxtEdgesOnGlobalDatastores } from './root/canDeployNsxtEdgesOnGlobalDatastores.operation';
import { execute as executegenerateNsxvInventory, description as descriptiongenerateNsxvInventory } from './root/generateNsxvInventory.operation';
import { execute as executegenerateVxlanToVrackMapping, description as descriptiongenerateVxlanToVrackMapping } from './root/generateVxlanToVrackMapping.operation';
import { execute as executeglobalTasksList, description as descriptionglobalTasksList } from './root/globalTasksList.operation';
import { execute as executenewPricesGet, description as descriptionnewPricesGet } from './root/newPricesGet.operation';
import { execute as executensxtGet, description as descriptionnsxtGet } from './root/nsxtGet.operation';
import { execute as executeorderableIpCountriesGet, description as descriptionorderableIpCountriesGet } from './root/orderableIpCountriesGet.operation';
import { execute as executepasswordPolicyGet, description as descriptionpasswordPolicyGet } from './root/passwordPolicyGet.operation';
import { execute as executeresetTriggeredAlarm, description as descriptionresetTriggeredAlarm } from './root/resetTriggeredAlarm.operation';
import { execute as executeupgradeHypervisor, description as descriptionupgradeHypervisor } from './root/upgradeHypervisor.operation';
import { execute as executeupgradeVcenter, description as descriptionupgradeVcenter } from './root/upgradeVcenter.operation';
import { execute as executevmwareCloudDirectorEligibility, description as descriptionvmwareCloudDirectorEligibility } from './root/vmwareCloudDirectorEligibility.operation';
import { execute as executeorderNewFilerHourly, description as descriptionorderNewFilerHourly } from './root/orderNewFilerHourly.operation';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedCloudOperation',
			type: 'options',
			noDataExpression: true,
			options: [
{
					name: 'Activate Backup on Virtual Machine',
					value: 'vmEnableBackup',
					action: 'Activate backup on virtual machine',
				},
{
					name: 'Add NSX-T Edge',
					value: 'nsxtEdgeCreate',
					action: 'add NSX-T Edge',
				},
{
					name: 'Ask for the Termination of Your Service',
					value: 'terminate',
					action: 'Ask for the termination of your service',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (Allowed Network)',
					value: 'allowedNetworkTaskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (Datacenter)',
					value: 'datacenterTaskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (Datastore)',
					value: 'filerTaskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (Global Datastore)',
					value: 'filerGlobalTaskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (Host)',
					value: 'hostTaskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (IP Block)',
					value: 'ipTaskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (Task)',
					value: 'taskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change the Execution Date of a Maintenance Operation (User)',
					value: 'userTaskChangeMaintenanceExecutionDate',
					action: 'Change the execution date of a maintenance operation',
				},
{
					name: 'Change User Password',
					value: 'userChangePassword',
					action: 'Change user password',
				},
{
					name: 'Change Zerto Endpoint Public IP',
					value: 'zertoEndpointPublicIp',
					action: 'change Zerto Endpoint Public IP',
				},
{
					name: 'Change Zerto Single Endpoint Public IP',
					value: 'zertoSingleEndpointPublicIp',
					action: 'change Zerto Single Endpoint Public IP',
				},
{
					name: 'Check Ability to Convert Datastore to Global Datastore',
					value: 'filerCheckGlobalCompatible',
					action: 'Check ability to convert datastore to global datastore',
				},
{
					name: 'Check Global Datastore Compatibility',
					value: 'filerGlobalCheckGlobalCompatible',
					action: 'Check ability to convert datastore to global datastore',
				},
{
					name: 'Check if Aria Operations Can Be Disabled',
					value: 'vropsCanBeDisabled',
					action: 'check if Aria Operations Can Be Disabled',
				},
{
					name: 'Check if Aria Operations Can Be Enabled',
					value: 'vropsCanBeEnabled',
					action: 'check if Aria Operations Can Be Enabled',
				},
{
					name: 'Check if Backup Jobs Are Correctly Set in Virtual Datacenter',
					value: 'datacenterCheckBackupJobs',
					action: 'Check if backup jobs are correctly set in virtual datacenter',
				},
{
					name: 'Check if HCX Option Can Be Disabled',
					value: 'hcxCanBeDisabled',
					action: 'check if HCX Option Can Be Disabled',
				},
{
					name: 'Check if HCX Option Can Be Enabled',
					value: 'hcxCanBeEnabled',
					action: 'check if HCX Option Can Be Enabled',
				},
{
					name: 'Check if HDS Certification Can Be Disabled',
					value: 'hdsCanBeDisabled',
					action: 'check if HDS Certification Can Be Disabled',
				},
{
					name: 'Check if HDS Certification Can Be Enabled',
					value: 'hdsCanBeEnabled',
					action: 'check if HDS Certification Can Be Enabled',
				},
{
					name: 'Check if HIPAA Certification Can Be Disabled',
					value: 'hipaaCanBeDisabled',
					action: 'check if HIPAA Certification Can Be Disabled',
				},
{
					name: 'Check if HIPAA Certification Can Be Enabled',
					value: 'hipaaCanBeEnabled',
					action: 'check if HIPAA Certification Can Be Enabled',
				},
{
					name: 'Check if IAM Option Can Be Disabled',
					value: 'iamCanBeDisabled',
					action: 'check if IAM Option Can Be Disabled',
				},
{
					name: 'Check if IAM Option Can Be Enabled',
					value: 'iamCanBeEnabled',
					action: 'check if IAM Option Can Be Enabled',
				},
{
					name: 'Check if Log Forwarder Can Be Disabled',
					value: 'logForwarderCanBeDisabled',
					action: 'check if Log Forwarder Can Be Disabled',
				},
{
					name: 'Check if Log Forwarder Can Be Enabled',
					value: 'logForwarderCanBeEnabled',
					action: 'check if Log Forwarder Can Be Enabled',
				},
{
					name: 'Check if NSX-V Option Can Be Disabled',
					value: 'nsxCanBeDisabled',
					action: 'check if NSX-V Option Can Be Disabled',
				},
{
					name: 'Check if NSX-V Option Can Be Enabled',
					value: 'nsxCanBeEnabled',
					action: 'check if NSX-V Option Can Be Enabled',
				},
{
					name: 'Check if PCI-DSS Certification Can Be Disabled',
					value: 'pcidssCanBeDisabled',
					action: 'check if PCI-DSS Certification Can Be Disabled',
				},
{
					name: 'Check if PCI-DSS Certification Can Be Enabled',
					value: 'pcidssCanBeEnabled',
					action: 'check if PCI-DSS Certification Can Be Enabled',
				},
{
					name: 'Check if Resilience Test Can Be Performed',
					value: 'hostResilienceCanBeEnabled',
					action: 'Check if resilience test can be performed',
				},
{
					name: 'Check NSX-T Edge Deployment on Global Datastores',
					value: 'canDeployNsxtEdgesOnGlobalDatastores',
					action: 'check NSX-T Edge Deployment on Global Datastores',
				},
{
					name: 'Check NSX-T Edge Resilience Test Availability',
					value: 'nsxtEdgeResilienceCanBeEnabled',
					action: 'check NSX-T Edge Resilience Test Availability',
				},
{
					name: 'Check PCC Eligibility for VCD Migration',
					value: 'vmwareCloudDirectorEligibility',
					action: 'check PCC Eligibility for VCD Migration',
				},
{
					name: 'Configure NSX-T on Cluster',
					value: 'clusterNsxtCreate',
					action: 'configure NSX-T on Cluster',
				},
{
					name: 'Configure Zerto Single VPN',
					value: 'zertoSingleConfigureVpn',
					action: 'configure Zerto Single VPN',
				},
{
					name: 'Confirm Service Termination',
					value: 'confirmTermination',
					action: 'Confirm service termination',
				},
{
					name: 'Confirm User Phone Number',
					value: 'userConfirmPhoneNumber',
					action: 'Confirm user phone number',
				},
{
					name: 'Convert Datastore to Global Datastore',
					value: 'filerConvertToGlobal',
					action: 'Convert datastore to global datastore',
				},
{
					name: 'Convert Global Datastore',
					value: 'filerGlobalConvertToGlobal',
					action: 'Convert datastore to global datastore',
				},
{
					name: 'Create a SAP Pre-Installation Task',
					value: 'sapCreate',
					action: 'create a SAP Pre-installation Task',
				},
{
					name: 'Create Aria Operations Outgoing Flow',
					value: 'vropsOutgoingFlowCreate',
					action: 'create Aria Operations Outgoing Flow',
				},
{
					name: 'Create Federated Active Directory',
					value: 'federationActiveDirectoryCreate',
					action: 'create Federated Active Directory',
				},
{
					name: 'Create IAM Role',
					value: 'iamAddRole',
					action: 'create IAM Role',
				},
{
					name: 'Create Log Subscription',
					value: 'logSubscriptionCreate',
					action: 'create Log Subscription',
				},
{
					name: 'Create Network Allowed on Infrastructure Firewall',
					value: 'allowedNetworkCreate',
					action: 'Create network allowed on infrastructure firewall',
				},
{
					name: 'Create Two Factor Authentication Whitelisted Network',
					value: 'twoFAWhitelistCreate',
					action: 'create Two Factor Authentication Whitelisted Network',
				},
{
					name: 'Create User',
					value: 'userCreate',
					action: 'Create user',
				},
{
					name: 'Create User Object Right',
					value: 'userObjectRightCreate',
					action: 'Create user object right',
				},
{
					name: 'Create Virtual Datacenter',
					value: 'datacenterCreate',
					action: 'Create virtual datacenter',
				},
{
					name: 'Create VM Encryption KMS Server',
					value: 'vmEncryptionKmsCreate',
					action: 'create VM Encryption KMS Server',
				},
{
					name: 'Create Zerto Remote Site',
					value: 'zertoRemoteSiteCreate',
					action: 'create Zerto Remote Site',
				},
{
					name: 'Create Zerto Single Remote Site',
					value: 'zertoSingleRemoteSiteCreate',
					action: 'create Zerto Single Remote Site',
				},
{
					name: 'Deactivate Backup on Virtual Machine',
					value: 'vmDisableBackup',
					action: 'Deactivate backup on virtual machine',
				},
{
					name: 'Delete a SAP Pre-Installation Task',
					value: 'sapDelete',
					action: 'delete a SAP Pre-installation Task',
				},
{
					name: 'Delete Log Subscription',
					value: 'logSubscriptionDelete',
					action: 'delete Log Subscription',
				},
{
					name: 'Deploy Private Management Gateway',
					value: 'privateGatewayEnable',
					action: 'deploy Private Management Gateway',
				},
{
					name: 'Disable Aria Operations Option',
					value: 'vropsDisable',
					action: 'disable Aria Operations Option',
				},
{
					name: 'Disable Backup Job',
					value: 'vmBackupJobDisable',
					action: 'Disable backup job',
				},
{
					name: 'Disable Backup Option',
					value: 'datacenterBackupDisable',
					action: 'disable Backup Option',
				},
{
					name: 'Disable CARP on Virtual Machine on VM Network Portgroup',
					value: 'vmDisableCarp',
					action: 'Disable CARP on virtual machine on VM Network portgroup',
				},
{
					name: 'Disable HCX Option',
					value: 'hcxDisable',
					action: 'disable HCX Option',
				},
{
					name: 'Disable HDS Certification Option',
					value: 'hdsDisable',
					action: 'disable HDS Certification Option',
				},
{
					name: 'Disable HIPAA Certification Option',
					value: 'hipaaDisable',
					action: 'disable HIPAA Certification Option',
				},
{
					name: 'Disable IAM Option',
					value: 'iamDisable',
					action: 'disable IAM Option',
				},
{
					name: 'Disable Log Forwarder Option',
					value: 'logForwarderDisable',
					action: 'disable Log Forwarder Option',
				},
{
					name: 'Disable NSX-V Option',
					value: 'nsxDisable',
					action: 'disable NSX-V Option',
				},
{
					name: 'Disable PCI-DSS Certification Option',
					value: 'pcidssDisable',
					action: 'disable PCI-DSS Certification Option',
				},
{
					name: 'Disable User',
					value: 'userDisable',
					action: 'Disable user',
				},
{
					name: 'Disable Zerto Disaster Recovery',
					value: 'zertoDisable',
					action: 'disable Zerto Disaster Recovery',
				},
{
					name: 'Disable Zerto Single Disaster Recovery',
					value: 'zertoSingleDisable',
					action: 'disable Zerto Single Disaster Recovery',
				},
{
					name: 'Enable Aria Operations Option',
					value: 'vropsEnable',
					action: 'enable Aria Operations Option',
				},
{
					name: 'Enable Backup Job',
					value: 'vmBackupJobEnable',
					action: 'Enable backup job',
				},
{
					name: 'Enable Backup Option',
					value: 'datacenterBackupEnable',
					action: 'enable Backup Option',
				},
{
					name: 'Enable CARP on Virtual Machine on VM Network Portgroup',
					value: 'vmEnableCarp',
					action: 'Enable CARP on virtual machine on VM Network portgroup',
				},
{
					name: 'Enable HCX Option',
					value: 'hcxEnable',
					action: 'enable HCX Option',
				},
{
					name: 'Enable HDS Certification Option',
					value: 'hdsEnable',
					action: 'enable HDS Certification Option',
				},
{
					name: 'Enable HIPAA Certification Option',
					value: 'hipaaEnable',
					action: 'enable HIPAA Certification Option',
				},
{
					name: 'Enable IAM Option',
					value: 'iamEnable',
					action: 'enable IAM Option',
				},
{
					name: 'Enable Log Forwarder Option',
					value: 'logForwarderEnable',
					action: 'enable Log Forwarder Option',
				},
{
					name: 'Enable NSX-V Option',
					value: 'nsxEnable',
					action: 'enable NSX-V Option',
				},
{
					name: 'Enable PCI-DSS Certification Option',
					value: 'pcidssEnable',
					action: 'enable PCI-DSS Certification Option',
				},
{
					name: 'Enable User',
					value: 'userEnable',
					action: 'Enable user',
				},
{
					name: 'Enable Zerto Disaster Recovery',
					value: 'zertoEnable',
					action: 'enable Zerto Disaster Recovery',
				},
{
					name: 'Enable Zerto Single Disaster Recovery',
					value: 'zertoSingleEnable',
					action: 'enable Zerto Single Disaster Recovery',
				},
{
					name: 'End Zerto Migration',
					value: 'zertoEndMigration',
					action: 'end Zerto Migration',
				},
{
					name: 'Generate a Log URL',
					value: 'logUrlCreate',
					action: 'generate a Log URL',
				},
{
					name: 'Generate a NSX-V Inventory',
					value: 'generateNsxvInventory',
					action: 'generate a NSX-V Inventory',
				},
{
					name: 'Generate Backup Report',
					value: 'datacenterBackupGenerateReport',
					action: 'generate Backup Report',
				},
{
					name: 'Generate NSX-V VXLAN to vRack Mapping',
					value: 'generateVxlanToVrackMapping',
					action: 'generate NSX-V VXLAN to vRack Mapping',
				},
{
					name: 'Get',
					value: 'get',
					action: 'Get VMware on OVHcloud infrastructure details',
				},
{
					name: 'Get Active Directory Federation Option',
					value: 'federationGet',
					action: 'get Active Directory Federation Option',
				},
{
					name: 'Get Aria Operations Outgoing Flow',
					value: 'vropsOutgoingFlowGet',
					action: 'get Aria Operations Outgoing Flow',
				},
{
					name: 'Get Available Features',
					value: 'capabilitiesGet',
					action: 'get Available Features',
				},
{
					name: 'Get Available vCenter Upgrades',
					value: 'vcenterVersionGet',
					action: 'get Available vCenter Upgrades',
				},
{
					name: 'Get Backup Option',
					value: 'datacenterBackupGet',
					action: 'get Backup Option',
				},
{
					name: 'Get Backup Proxies Optimization Recommendations',
					value: 'datacenterBackupCanOptimizeProxies',
					action: 'get Backup Proxies Optimization Recommendations',
				},
{
					name: 'Get Backup Repository',
					value: 'backupRepositoryGet',
					action: 'Get backup repository',
				},
{
					name: 'Get Backup Repository in Virtual Datacenter',
					value: 'datacenterBackupRepositoryGet',
					action: 'Get backup repository in virtual datacenter',
				},
{
					name: 'Get Cluster',
					value: 'clusterGet',
					action: 'get Cluster',
				},
{
					name: 'Get Commercial Range',
					value: 'commercialRangeGet',
					action: 'Get a commercial range',
				},
{
					name: 'Get Compliant Commercial Ranges',
					value: 'commercialRangeComplianceList',
					action: 'Get compliant commercial ranges',
				},
{
					name: 'Get Datastore',
					value: 'filerGet',
					action: 'Get datastore',
				},
{
					name: 'Get Datastore Hourly Consumption',
					value: 'filerHourlyConsumption',
					action: 'Get datastore hourly consumption',
				},
{
					name: 'Get Datastore Location',
					value: 'filerLocation',
					action: 'Get datastore location',
				},
{
					name: 'Get Datastores Stock',
					value: 'stockZpoolList',
					action: 'Get datastores stock',
				},
{
					name: 'Get Details About This IP Block',
					value: 'ipDetails',
					action: 'Get details about this IP Block',
				},
{
					name: 'Get Federated Active Directory',
					value: 'federationActiveDirectoryGet',
					action: 'get Federated Active Directory',
				},
{
					name: 'Get Global Datastore',
					value: 'filerGlobalGet',
					action: 'Get a global datastore',
				},
{
					name: 'Get Global Datastore Hourly Consumption',
					value: 'filerGlobalHourlyConsumption',
					action: 'Get global datastore hourly consumption',
				},
{
					name: 'Get Global Datastore Location',
					value: 'filerGlobalLocation',
					action: 'Get global datastore location',
				},
{
					name: 'Get HDS Certification Option',
					value: 'hdsGet',
					action: 'get HDS Certification Option',
				},
{
					name: 'Get HIPAA Certification Option',
					value: 'hipaaGet',
					action: 'get HIPAA Certification Option',
				},
{
					name: 'Get Host',
					value: 'hostGet',
					action: 'Get host',
				},
{
					name: 'Get Host Hourly Consumption',
					value: 'hostHourlyConsumption',
					action: 'Get host hourly consumption',
				},
{
					name: 'Get Host Location',
					value: 'hostLocation',
					action: 'Get host location',
				},
{
					name: 'Get Host Profile',
					value: 'hostProfileGet',
					action: 'Get a host profile',
				},
{
					name: 'Get Host Resilience Test Status',
					value: 'hostResilience',
					action: 'Get host resilience test status',
				},
{
					name: 'Get Hypervisor',
					value: 'hypervisorGet',
					action: 'Get a hypervisor by short name in a PCC zone',
				},
{
					name: 'Get Hypervisors Stock',
					value: 'stockPccList',
					action: 'Get hypervisors stock',
				},
{
					name: 'Get IP Block',
					value: 'ipGet',
					action: 'Get IP block',
				},
{
					name: 'Get Location',
					value: 'locationGet',
					action: 'Get a hosting location',
				},
{
					name: 'Get Log Forwarder Option',
					value: 'logForwarderGet',
					action: 'get Log Forwarder Option',
				},
{
					name: 'Get Log Kind',
					value: 'logKindGet',
					action: 'get Log Kind',
				},
{
					name: 'Get Log Subscription',
					value: 'logSubscriptionGet',
					action: 'get Log Subscription',
				},
{
					name: 'Get Network Allowed on Infrastructure Firewall',
					value: 'allowedNetworkGet',
					action: 'Get network allowed on infrastructure firewall',
				},
{
					name: 'Get New Prices',
					value: 'newPricesGet',
					action: 'get New Prices',
				},
{
					name: 'Get NSX-T Edge',
					value: 'nsxtEdgeGet',
					action: 'get NSX-T Edge',
				},
{
					name: 'Get NSX-T Edge Resilience Test Status',
					value: 'nsxtEdgeResilience',
					action: 'get NSX-T Edge Resilience Test Status',
				},
{
					name: 'Get NSX-T Edges Resizing Capabilities',
					value: 'nsxtEdgesResizingCapabilities',
					action: 'Get NSX-T edges resizing capabilities',
				},
{
					name: 'Get NSX-T Edges Scaling Capabilities',
					value: 'nsxtEdgesScalingCapabilities',
					action: 'Get NSX-T edges scaling capabilities',
				},
{
					name: 'Get Operation',
					value: 'taskGet',
					action: 'Get operation',
				},
{
					name: 'Get Operation for Allowed Network',
					value: 'allowedNetworkTaskGet',
					action: 'Get operation for allowed network',
				},
{
					name: 'Get Operation for Datastore',
					value: 'filerTaskGet',
					action: 'Get operation for datastore',
				},
{
					name: 'Get Operation for Global Datastore',
					value: 'filerGlobalTaskGet',
					action: 'Get operation for global datastore',
				},
{
					name: 'Get Operation for Host',
					value: 'hostTaskGet',
					action: 'Get operation for host',
				},
{
					name: 'Get Operation for IP Block',
					value: 'ipTaskGet',
					action: 'Get operation for IP block',
				},
{
					name: 'Get Operation for User',
					value: 'userTaskGet',
					action: 'Get operation for user',
				},
{
					name: 'Get Operation for Virtual Datacenter',
					value: 'datacenterTaskGet',
					action: 'Get operation for virtual datacenter',
				},
{
					name: 'Get Orderable Commercial Ranges',
					value: 'commercialRangeOrderableList',
					action: 'Get orderable commercial ranges',
				},
{
					name: 'Get Orderable IP Block Countries',
					value: 'orderableIpCountriesGet',
					action: 'get Orderable IP Block Countries',
				},
{
					name: 'Get OVHcloud IAM Option',
					value: 'iamGet',
					action: 'get OVHcloud IAM Option',
				},
{
					name: 'Get OVHcloud ID for Vendor Object',
					value: 'vendorOvhId',
					action: 'get OVHcloud ID for Vendor Object',
				},
{
					name: 'Get Password Policy',
					value: 'passwordPolicyGet',
					action: 'get Password Policy',
				},
{
					name: 'Get PCI-DSS Certification Option',
					value: 'pcidssGet',
					action: 'get PCI-DSS Certification Option',
				},
{
					name: 'Get Pending Activation Security Options',
					value: 'securityOptionsPendingOptions',
					action: 'get Pending Activation Security Options',
				},
{
					name: 'Get Private Management Gateway',
					value: 'privateGatewayGet',
					action: 'get Private Management Gateway',
				},
{
					name: 'Get Restore Point',
					value: 'vmRestorePointGet',
					action: 'Get restore point',
				},
{
					name: 'Get Robot',
					value: 'robotGet',
					action: 'get Robot',
				},
{
					name: 'Get SAP Pre-Installation Task',
					value: 'sapGet',
					action: 'get SAP Pre-installation Task',
				},
{
					name: 'Get Security Options',
					value: 'securityOptionsGet',
					action: 'get Security Options',
				},
{
					name: 'Get Security Options Compatibility Matrix',
					value: 'securityOptionsCompatibilityMatrix',
					action: 'get Security Options Compatibility Matrix',
				},
{
					name: 'Get Security Options Dependencies Tree',
					value: 'securityOptionsDependenciesTree',
					action: 'get Security Options Dependencies Tree',
				},
{
					name: 'Get Service Host Profile',
					value: 'serviceHostProfileGet',
					action: 'Get host profile on hosting location',
				},
{
					name: 'Get Service Hypervisor',
					value: 'serviceHypervisorGet',
					action: 'Get hypervisor on hosting location',
				},
{
					name: 'Get Service Information',
					value: 'serviceInfosGet',
					action: 'Get service information',
				},
{
					name: 'Get Service Location',
					value: 'serviceLocationGet',
					action: 'Get hosting location of a service',
				},
{
					name: 'Get Service Pack',
					value: 'servicePacksGet',
					action: 'get Service Pack',
				},
{
					name: 'Get Service Pack Information',
					value: 'servicePackGet',
					action: 'get Service Pack Information',
				},
{
					name: 'Get Stock Host',
					value: 'stockHostList',
					action: 'List available host stocks for a location',
				},
{
					name: 'Get Tag',
					value: 'tagGet',
					action: 'get Tag',
				},
{
					name: 'Get Two Factor Authentication Whitelisted Network',
					value: 'twoFAWhitelistGet',
					action: 'get Two Factor Authentication Whitelisted Network',
				},
{
					name: 'Get User',
					value: 'userGet',
					action: 'Get user',
				},
{
					name: 'Get User Datacenter Right',
					value: 'userRightGet',
					action: 'Get user datacenter right',
				},
{
					name: 'Get User Object Right',
					value: 'userObjectRightGet',
					action: 'Get user object right',
				},
{
					name: 'Get Vendor Information',
					value: 'vendorGet',
					action: 'get Vendor Information',
				},
{
					name: 'Get Vendor Object Types',
					value: 'vendorObjectTypeList',
					action: 'get Vendor Object Types',
				},
{
					name: 'Get Virtual Datacenter',
					value: 'datacenterGet',
					action: 'Get virtual datacenter',
				},
{
					name: 'Get Virtual Machine',
					value: 'vmGet',
					action: 'Get virtual machine',
				},
{
					name: 'Get Virtual Machine Backup Job',
					value: 'vmBackupJobGet',
					action: 'Get virtual machine backup job',
				},
{
					name: 'Get Virtual Machine Encryption Option',
					value: 'vmEncryptionGet',
					action: 'get Virtual Machine Encryption Option',
				},
{
					name: 'Get Virtual Machines with Managed License',
					value: 'vmLicensedList',
					action: 'Get virtual machines with managed license',
				},
{
					name: 'Get vLAN',
					value: 'vlanGet',
					action: 'get vLAN',
				},
{
					name: 'Get VM Encryption KMS Server',
					value: 'vmEncryptionKmsGet',
					action: 'get VM Encryption KMS Server',
				},
{
					name: 'Get VMware Aria Operations Option',
					value: 'vropsGet',
					action: 'get VMware Aria Operations Option',
				},
{
					name: 'Get VMware Hybrid Cloud Extension Option',
					value: 'hcxGet',
					action: 'get VMware Hybrid Cloud Extension Option',
				},
{
					name: 'Get VMware NSX-T Option',
					value: 'nsxtGet',
					action: 'get VMware NSX-T Option',
				},
{
					name: 'Get VMware NSX-V Option',
					value: 'nsxGet',
					action: 'get VMware NSX-V Option',
				},
{
					name: 'Get vRack',
					value: 'vrackGet',
					action: 'get vRack',
				},
{
					name: 'Get Zerto Disaster Recovery Status',
					value: 'zertoStatusGet',
					action: 'get Zerto Disaster Recovery Status',
				},
{
					name: 'Get Zerto Single Default Local VRA Network',
					value: 'zertoSingleDefaultLocalVraNetwork',
					action: 'get Zerto Single Default Local VRA Network',
				},
{
					name: 'Grant Active Directory Group',
					value: 'federationActiveDirectoryGrantGroup',
					action: 'grant Active Directory Group',
				},
{
					name: 'Grant Active Directory User',
					value: 'federationActiveDirectoryGrantUser',
					action: 'grant Active Directory User',
				},
{
					name: 'Launch a Contact Change Procedure',
					value: 'changeContact',
					action: 'Launch a contact change procedure',
				},
{
					name: 'List',
					value: 'list',
					action: 'List all VMware on OVHcloud infrastructures',
				},
{
					name: 'List Aria Operations Outgoing Flows',
					value: 'vropsOutgoingFlowList',
					action: 'list Aria Operations Outgoing Flows',
				},
{
					name: 'List Available Datastore Profiles',
					value: 'datacenterOrderableFilerProfiles',
					action: 'List available datastore profiles',
				},
{
					name: 'List Available Host Profiles',
					value: 'datacenterOrderableHostProfiles',
					action: 'List available host profiles',
				},
{
					name: 'List Backup Offer Capabilities',
					value: 'datacenterBackupOfferCapabilities',
					action: 'list Backup Offer Capabilities',
				},
{
					name: 'List Backup Repositories',
					value: 'backupRepositoryList',
					action: 'List backup repositories',
				},
{
					name: 'List Backup Repositories in Virtual Datacenter',
					value: 'datacenterBackupRepositoryList',
					action: 'List backup repositories in virtual datacenter',
				},
{
					name: 'List Clusters',
					value: 'clusterList',
					action: 'list Clusters',
				},
{
					name: 'List Commercial Ranges',
					value: 'commercialRangeList',
					action: 'List all commercial ranges',
				},
{
					name: 'List Datastores in Virtual Datacenter',
					value: 'filerList',
					action: 'List datastores in virtual datacenter',
				},
{
					name: 'List Federated Active Directories',
					value: 'federationActiveDirectoryList',
					action: 'list Federated Active Directories',
				},
{
					name: 'List Filtered Operations',
					value: 'globalTasksList',
					action: 'list Filtered Operations',
				},
{
					name: 'List Global Datastores',
					value: 'filerGlobalList',
					action: 'List global datastores mounted on all virtual datacenters',
				},
{
					name: 'List Host Profiles',
					value: 'hostProfileList',
					action: 'List host profiles for a location',
				},
{
					name: 'List Hosts in Virtual Datacenter',
					value: 'hostList',
					action: 'List hosts in virtual datacenter',
				},
{
					name: 'List Hypervisors',
					value: 'hypervisorList',
					action: 'List hypervisors in a PCC zone',
				},
{
					name: 'List IP Blocks',
					value: 'ipList',
					action: 'List IP blocks',
				},
{
					name: 'List Locations',
					value: 'locationList',
					action: 'List all hosting locations',
				},
{
					name: 'List Log Kinds',
					value: 'logKindList',
					action: 'list Log Kinds',
				},
{
					name: 'List Log Subscriptions',
					value: 'logSubscriptionList',
					action: 'list Log Subscriptions',
				},
{
					name: 'List Networks Allowed on Infrastructure Firewall',
					value: 'allowedNetworkList',
					action: 'List networks allowed on infrastructure firewall',
				},
{
					name: 'List NSX-T Edges',
					value: 'nsxtEdgeList',
					action: 'list NSX-T Edges',
				},
{
					name: 'List Operations',
					value: 'taskList',
					action: 'List operations',
				},
{
					name: 'List Operations Associated to a Network Allowed on Infrastructure Firewall',
					value: 'allowedNetworkTaskList',
					action: 'List operations associated to a network allowed on infrastructure firewall',
				},
{
					name: 'List Operations Associated to Datastore',
					value: 'filerTaskList',
					action: 'List operations associated to datastore',
				},
{
					name: 'List Operations Associated to Global Datastore',
					value: 'filerGlobalTaskList',
					action: 'List operations associated to global datastore',
				},
{
					name: 'List Operations Associated to Host',
					value: 'hostTaskList',
					action: 'List operations associated to host',
				},
{
					name: 'List Operations Associated to IP Block',
					value: 'ipTaskList',
					action: 'List operations associated to IP block',
				},
{
					name: 'List Operations Associated to User',
					value: 'userTaskList',
					action: 'List operations associated to user',
				},
{
					name: 'List Operations Associated to Virtual Datacenter',
					value: 'datacenterTaskList',
					action: 'List operations associated to virtual datacenter',
				},
{
					name: 'List Restore Points',
					value: 'vmRestorePointsList',
					action: 'List restore points',
				},
{
					name: 'List Robots',
					value: 'robotList',
					action: 'list Robots',
				},
{
					name: 'List SAP Pre-Installation Tasks',
					value: 'sapList',
					action: 'list SAP Pre-installation Tasks',
				},
{
					name: 'List Service Host Profiles',
					value: 'serviceHostProfileList',
					action: 'List host profiles on hosting location',
				},
{
					name: 'List Service Hypervisors',
					value: 'serviceHypervisorList',
					action: 'List hypervisor versions on hosting location',
				},
{
					name: 'List Service Packs',
					value: 'servicePacksList',
					action: 'list Service Packs',
				},
{
					name: 'List Tags',
					value: 'tagList',
					action: 'list Tags',
				},
{
					name: 'List Two Factor Authentication Whitelisted Networks',
					value: 'twoFAWhitelistList',
					action: 'list Two Factor Authentication Whitelisted Networks',
				},
{
					name: 'List User Datacenter Rights',
					value: 'userRightList',
					action: 'List user datacenter rights',
				},
{
					name: 'List User Object Rights',
					value: 'userObjectRightList',
					action: 'List user object rights',
				},
{
					name: 'List Users',
					value: 'userList',
					action: 'List users',
				},
{
					name: 'List Virtual Datacenters',
					value: 'datacenterList',
					action: 'List virtual datacenters',
				},
{
					name: 'List Virtual Machines Within Virtual Datacenter',
					value: 'vmList',
					action: 'List virtual machines within virtual datacenter',
				},
{
					name: 'List vLANs',
					value: 'vlanList',
					action: 'list vLANs',
				},
{
					name: 'List VM Encryption KMS Servers',
					value: 'vmEncryptionKmsList',
					action: 'list VM Encryption KMS Servers',
				},
{
					name: 'List vRacks',
					value: 'vrackList',
					action: 'list vRacks',
				},
{
					name: 'List Zerto Protected Virtual Machines',
					value: 'zertoUsageReport',
					action: 'list Zerto Protected Virtual Machines',
				},
{
					name: 'List Zerto Remote Sites',
					value: 'zertoRemoteSiteList',
					action: 'list Zerto Remote Sites',
				},
{
					name: 'List Zerto Single Remote Sites',
					value: 'zertoSingleRemoteSiteList',
					action: 'list Zerto Single Remote Sites',
				},
{
					name: 'List Zerto Single VRA Resources',
					value: 'zertoSingleVraResourcesList',
					action: 'list Zerto Single VRA Resources',
				},
{
					name: 'List Zerto VRA Resources',
					value: 'zertoVraResourcesList',
					action: 'list Zerto VRA Resources',
				},
{
					name: 'Optimize Backup Proxies',
					value: 'datacenterBackupOptimizeProxies',
					action: 'optimize Backup Proxies',
				},
{
					name: 'Order Hourly Datastore',
					value: 'datacenterOrderNewFilerHourly',
					action: 'Order hourly datastore',
				},
{
					name: 'Order Hourly Global Datastore',
					value: 'orderNewFilerHourly',
					action: 'order Hourly Global Datastore',
				},
{
					name: 'Order Hourly Host',
					value: 'datacenterOrderNewHostHourly',
					action: 'Order hourly host',
				},
{
					name: 'Reconfigure Private Management Gateway',
					value: 'privateGatewayReconfigure',
					action: 'reconfigure Private Management Gateway',
				},
{
					name: 'Relaunch Operation Currently in Error State (Allowed Network)',
					value: 'allowedNetworkTaskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Relaunch Operation Currently in Error State (Datacenter)',
					value: 'datacenterTaskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Relaunch Operation Currently in Error State (Datastore)',
					value: 'filerTaskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Relaunch Operation Currently in Error State (Host)',
					value: 'hostTaskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Relaunch Operation Currently in Error State (IP Block)',
					value: 'ipTaskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Relaunch Operation Currently in Error State (Task)',
					value: 'taskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Relaunch Operation Currently in Error State (User)',
					value: 'userTaskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Relocate NSX-T Edge',
					value: 'nsxtEdgeRelocateEdge',
					action: 'relocate NSX-T Edge',
				},
{
					name: 'Remove a Managed License From Virtual Machine',
					value: 'vmRemoveLicense',
					action: 'Remove a managed license from virtual machine',
				},
{
					name: 'Remove Aria Operations Outgoing Flow',
					value: 'vropsOutgoingFlowDelete',
					action: 'remove Aria Operations Outgoing Flow',
				},
{
					name: 'Remove Datastore',
					value: 'filerRemove',
					action: 'Remove datastore',
				},
{
					name: 'Remove Federated Active Directory',
					value: 'federationActiveDirectoryDelete',
					action: 'remove Federated Active Directory',
				},
{
					name: 'Remove Global Datastore',
					value: 'filerGlobalRemove',
					action: 'Remove a global datastore',
				},
{
					name: 'Remove Host',
					value: 'hostRemove',
					action: 'Remove host',
				},
{
					name: 'Remove Network Allowed on Infrastructure Firewall',
					value: 'allowedNetworkDelete',
					action: 'Remove network allowed on infrastructure firewall',
				},
{
					name: 'Remove NSX-T Edge',
					value: 'nsxtEdgeDelete',
					action: 'remove NSX-T Edge',
				},
{
					name: 'Remove Private Management Gateway',
					value: 'privateGatewayDisable',
					action: 'remove Private Management Gateway',
				},
{
					name: 'Remove Two Factor Authentication Whitelisted Network',
					value: 'twoFAWhitelistDelete',
					action: 'remove Two Factor Authentication Whitelisted Network',
				},
{
					name: 'Remove User',
					value: 'userDelete',
					action: 'Remove user',
				},
{
					name: 'Remove User Object Right',
					value: 'userObjectRightDelete',
					action: 'Remove user object right',
				},
{
					name: 'Remove Virtual Datacenter',
					value: 'datacenterDelete',
					action: 'Remove virtual datacenter',
				},
{
					name: 'Remove VM Encryption KMS Server',
					value: 'vmEncryptionKmsDelete',
					action: 'remove VM Encryption KMS Server',
				},
{
					name: 'Remove VMware on OVHcloud From vRack',
					value: 'vrackDelete',
					action: 'remove VMware on OVHcloud from vRack',
				},
{
					name: 'Remove Zerto Remote Site',
					value: 'zertoRemoteSiteDelete',
					action: 'remove Zerto Remote Site',
				},
{
					name: 'Remove Zerto Single Remote Site',
					value: 'zertoSingleRemoteSiteDelete',
					action: 'remove Zerto Single Remote Site',
				},
{
					name: 'Request Host Replacement',
					value: 'hostAddHostSpare',
					action: 'Request host replacement',
				},
{
					name: 'Request Zerto Single Pairing Token',
					value: 'zertoSingleRequestPairingToken',
					action: 'request Zerto Single Pairing Token',
				},
{
					name: 'Reset All Hypervisor Triggered Alarms',
					value: 'resetTriggeredAlarm',
					action: 'reset All Hypervisor Triggered Alarms',
				},
{
					name: 'Reset Task State (Global Datastore)',
					value: 'filerGlobalTaskResetTaskState',
					action: 'Relaunch operation currently in error state',
				},
{
					name: 'Resize NSX-T Edge Cluster',
					value: 'resizeNsxtEdgeCluster',
					action: 'Resize NSX-T edges on specified datacenter',
				},
{
					name: 'Restore Backup',
					value: 'vmRestoreBackup',
					action: 'Restore backup',
				},
{
					name: 'Restore Backup Jobs in Batch',
					value: 'datacenterBackupBatchRestore',
					action: 'restore Backup Jobs in Batch',
				},
{
					name: 'Restore From Point',
					value: 'vmRestorePointRestore',
					action: 'Restore from point',
				},
{
					name: 'Retry Pending Security Option Activation',
					value: 'securityOptionsResumePendingEnabling',
					action: 'retry Pending Security Option Activation',
				},
{
					name: 'Run Zerto Health Check',
					value: 'zertoRequestHealthCheck',
					action: 'run Zerto Health Check',
				},
{
					name: 'Set a Managed License on Virtual Machine',
					value: 'vmSetLicense',
					action: 'Set a managed license on virtual machine',
				},
{
					name: 'Start NSX-T Edge Resilience Test',
					value: 'nsxtEdgeResilienceEnable',
					action: 'start NSX-T Edge Resilience Test',
				},
{
					name: 'Start Resilience Test',
					value: 'hostResilienceEnable',
					action: 'Start resilience test',
				},
{
					name: 'Start Zerto Migration',
					value: 'zertoStartMigration',
					action: 'start Zerto Migration',
				},
{
					name: 'Stop NSX-T Edge Resilience Test',
					value: 'nsxtEdgeResilienceDisable',
					action: 'stop NSX-T Edge Resilience Test',
				},
{
					name: 'Stop Resilience Test',
					value: 'hostResilienceDisable',
					action: 'Stop resilience test',
				},
{
					name: 'Unconfigure NSX-T on Cluster',
					value: 'clusterNsxtDelete',
					action: 'unconfigure NSX-T on Cluster',
				},
{
					name: 'Update Aria Operations Outgoing Flow',
					value: 'vropsOutgoingFlowChangeProperties',
					action: 'update Aria Operations Outgoing Flow',
				},
{
					name: 'Update Backup Configuration',
					value: 'vmEditBackup',
					action: 'Update backup configuration',
				},
{
					name: 'Update Backup Job',
					value: 'vmBackupJobUpdate',
					action: 'Update backup job',
				},
{
					name: 'Update Backup Option',
					value: 'datacenterBackupChangeProperties',
					action: 'update Backup Option',
				},
{
					name: 'Update Federated Active Directory',
					value: 'federationActiveDirectoryChangeProperties',
					action: 'update Federated Active Directory',
				},
{
					name: 'Update Network Allowed on Infrastructure Firewall',
					value: 'allowedNetworkUpdate',
					action: 'Update network allowed on infrastructure firewall',
				},
{
					name: 'Update NSX-T Configuration on Cluster',
					value: 'clusterNsxtUpdate',
					action: 'update NSX-T Configuration on Cluster',
				},
{
					name: 'Update Service Information',
					value: 'serviceInfosUpdate',
					action: 'Update service information',
				},
{
					name: 'Update Two Factor Authentication Whitelisted Network',
					value: 'twoFAWhitelistChangeProperties',
					action: 'update Two Factor Authentication Whitelisted Network',
				},
{
					name: 'Update User Datacenter Right',
					value: 'userRightUpdate',
					action: 'Update user datacenter right',
				},
{
					name: 'Update User Properties',
					value: 'userChangeProperties',
					action: 'Update user properties',
				},
{
					name: 'Update Virtual Datacenter',
					value: 'datacenterUpdate',
					action: 'Update virtual datacenter',
				},
{
					name: 'Update VM Encryption KMS Server',
					value: 'vmEncryptionKmsChangeProperties',
					action: 'update VM Encryption KMS Server',
				},
{
					name: 'Update VMware on OVHcloud',
					value: 'update',
					action: 'Update VMware on OVHcloud',
				},
{
					name: 'Update VMware on OVHcloud Properties',
					value: 'changeProperties',
					action: 'Update VMware on OVHcloud properties',
				},
{
					name: 'Update Zerto Single VRA Resources',
					value: 'zertoSingleVraResourcesUpdate',
					action: 'update Zerto Single VRA Resources',
				},
{
					name: 'Update Zerto VRA Resources',
					value: 'zertoVraResourcesUpdate',
					action: 'update Zerto VRA Resources',
				},
{
					name: 'Upgrade Hypervisor to Next Version',
					value: 'upgradeHypervisor',
					action: 'upgrade Hypervisor to Next Version',
				},
{
					name: 'Upgrade vCenter to Next Version',
					value: 'upgradeVcenter',
					action: 'upgrade vCenter to Next Version',
				},
{
					name: 'Upgrade VMware Aria Operations',
					value: 'vropsUpgrade',
					action: 'upgrade VMware Aria Operations',
				},
		],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['get'] },
		}),
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['list'] },
		}),
		...descriptionCommercialRangeGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['commercialRangeGet'] },
		}),
		...descriptionCommercialRangeComplianceList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['commercialRangeComplianceList'] },
		}),
		...descriptionCommercialRangeOrderableList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['commercialRangeOrderableList'] },
		}),
		...descriptionCommercialRangeList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['commercialRangeList'] },
		}),
		...descriptionHostProfileGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostProfileGet'] },
		}),
		...descriptionHostProfileServiceGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['serviceHostProfileGet'] },
		}),
		...descriptionHostProfileList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostProfileList'] },
		}),
		...descriptionHostProfileServiceList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['serviceHostProfileList'] },
		}),
		...descriptionLocationGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['locationGet'] },
		}),
		...descriptionLocationList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['locationList'] },
		}),
		...descriptionStockHostList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['stockHostList'] },
		}),
		...descriptionStockPccList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['stockPccList'] },
		}),
		...descriptionStockZpoolList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['stockZpoolList'] },
		}),
		...descriptionHypervisorList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hypervisorList'] },
		}),
		...descriptionHypervisorServiceList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['serviceHypervisorList'] },
		}),
		...descriptionHypervisorGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hypervisorGet'] },
		}),
		...descriptionHypervisorServiceGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['serviceHypervisorGet'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['update'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['confirmTermination'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['changeContact'] },
		}),
		...descriptionChangeProperties({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['changeProperties'] },
		}),
		...descriptionAllowedNetworkList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkList'] },
		}),
		...descriptionAllowedNetworkCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkCreate'] },
		}),
		...descriptionAllowedNetworkGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkGet'] },
		}),
		...descriptionAllowedNetworkUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkUpdate'] },
		}),
		...descriptionAllowedNetworkDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkDelete'] },
		}),
		...descriptionAllowedNetworkTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkTaskList'] },
		}),
		...descriptionAllowedNetworkTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkTaskGet'] },
		}),
		...descriptionAllowedNetworkTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkTaskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionAllowedNetworkTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['allowedNetworkTaskResetTaskState'] },
		}),
		...descriptionDatacenterList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterList'] },
		}),
		...descriptionDatacenterCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterCreate'] },
		}),
		...descriptionDatacenterGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterGet'] },
		}),
		...descriptionDatacenterUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterUpdate'] },
		}),
		...descriptionDatacenterDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterDelete'] },
		}),
		...descriptionDatacenterBackupRepositoryList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupRepositoryList'] },
		}),
		...descriptionDatacenterBackupRepositoryGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupRepositoryGet'] },
		}),
		...descriptionDatacenterCheckBackupJobs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterCheckBackupJobs'] },
		}),
		...descriptionDatacenterOrderableFilerProfiles({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterOrderableFilerProfiles'] },
		}),
		...descriptionDatacenterOrderableHostProfiles({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterOrderableHostProfiles'] },
		}),
		...descriptionDatacenterOrderNewFilerHourly({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterOrderNewFilerHourly'] },
		}),
		...descriptionDatacenterOrderNewHostHourly({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterOrderNewHostHourly'] },
		}),
		...descriptionDatacenterTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterTaskList'] },
		}),
		...descriptionDatacenterTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterTaskGet'] },
		}),
		...descriptionDatacenterTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterTaskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionDatacenterTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterTaskResetTaskState'] },
		}),
		...descriptionHostList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostList'] },
		}),
		...descriptionHostGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostGet'] },
		}),
		...descriptionHostAddHostSpare({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostAddHostSpare'] },
		}),
		...descriptionHostHourlyConsumption({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostHourlyConsumption'] },
		}),
		...descriptionHostLocation({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostLocation'] },
		}),
		...descriptionHostRemove({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostRemove'] },
		}),
		...descriptionHostResilience({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostResilience'] },
		}),
		...descriptionHostResilienceCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostResilienceCanBeEnabled'] },
		}),
		...descriptionHostResilienceDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostResilienceDisable'] },
		}),
		...descriptionHostResilienceEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostResilienceEnable'] },
		}),
		...descriptionHostTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostTaskList'] },
		}),
		...descriptionHostTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostTaskGet'] },
		}),
		...descriptionHostTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostTaskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionHostTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostTaskResetTaskState'] },
		}),
		...descriptionFilerList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerList'] },
		}),
		...descriptionFilerGlobalList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalList'] },
		}),
		...descriptionFilerGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGet'] },
		}),
		...descriptionFilerGlobalGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalGet'] },
		}),
		...descriptionFilerCheckGlobalCompatible({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerCheckGlobalCompatible'] },
		}),
		...descriptionFilerGlobalCheckGlobalCompatible({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalCheckGlobalCompatible'] },
		}),
		...descriptionFilerConvertToGlobal({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerConvertToGlobal'] },
		}),
		...descriptionFilerGlobalConvertToGlobal({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalConvertToGlobal'] },
		}),
		...descriptionFilerHourlyConsumption({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerHourlyConsumption'] },
		}),
		...descriptionFilerGlobalHourlyConsumption({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalHourlyConsumption'] },
		}),
		...descriptionFilerLocation({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerLocation'] },
		}),
		...descriptionFilerGlobalLocation({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalLocation'] },
		}),
		...descriptionFilerRemove({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerRemove'] },
		}),
		...descriptionFilerGlobalRemove({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalRemove'] },
		}),
		...descriptionFilerTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerTaskList'] },
		}),
		...descriptionFilerGlobalTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalTaskList'] },
		}),
		...descriptionFilerTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerTaskGet'] },
		}),
		...descriptionFilerGlobalTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalTaskGet'] },
		}),
		...descriptionFilerTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerTaskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionFilerGlobalTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalTaskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionFilerTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerTaskResetTaskState'] },
		}),
		...descriptionFilerGlobalTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['filerGlobalTaskResetTaskState'] },
		}),
		...descriptionVmList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmList'] },
		}),
		...descriptionVmGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmGet'] },
		}),
		...descriptionVmBackupJobGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmBackupJobGet'] },
		}),
		...descriptionVmBackupJobUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmBackupJobUpdate'] },
		}),
		...descriptionVmBackupJobDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmBackupJobDisable'] },
		}),
		...descriptionVmBackupJobEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmBackupJobEnable'] },
		}),
		...descriptionVmRestorePointsList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmRestorePointsList'] },
		}),
		...descriptionVmRestorePointGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmRestorePointGet'] },
		}),
		...descriptionVmRestorePointRestore({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmRestorePointRestore'] },
		}),
		...descriptionVmDisableBackup({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmDisableBackup'] },
		}),
		...descriptionVmDisableCarp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmDisableCarp'] },
		}),
		...descriptionVmEditBackup({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEditBackup'] },
		}),
		...descriptionVmEnableBackup({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEnableBackup'] },
		}),
		...descriptionVmEnableCarp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEnableCarp'] },
		}),
		...descriptionVmRemoveLicense({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmRemoveLicense'] },
		}),
		...descriptionVmRestoreBackup({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmRestoreBackup'] },
		}),
		...descriptionVmSetLicense({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmSetLicense'] },
		}),
		...descriptionVmLicensedList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmLicensedList'] },
		}),
		...descriptionServiceInfosGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['serviceInfosGet'] },
		}),
		...descriptionServiceInfosUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['serviceInfosUpdate'] },
		}),
		...descriptionUserList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userList'] },
		}),
		...descriptionUserCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userCreate'] },
		}),
		...descriptionUserGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userGet'] },
		}),
		...descriptionUserDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userDelete'] },
		}),
		...descriptionUserChangePassword({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userChangePassword'] },
		}),
		...descriptionUserChangeProperties({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userChangeProperties'] },
		}),
		...descriptionUserConfirmPhoneNumber({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userConfirmPhoneNumber'] },
		}),
		...descriptionUserDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userDisable'] },
		}),
		...descriptionUserEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userEnable'] },
		}),
		...descriptionUserObjectRightList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userObjectRightList'] },
		}),
		...descriptionUserObjectRightCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userObjectRightCreate'] },
		}),
		...descriptionUserObjectRightGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userObjectRightGet'] },
		}),
		...descriptionUserObjectRightDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userObjectRightDelete'] },
		}),
		...descriptionUserRightList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userRightList'] },
		}),
		...descriptionUserRightGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userRightGet'] },
		}),
		...descriptionUserRightUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userRightUpdate'] },
		}),
		...descriptionUserTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userTaskList'] },
		}),
		...descriptionUserTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userTaskGet'] },
		}),
		...descriptionUserTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userTaskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionUserTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['userTaskResetTaskState'] },
		}),
		...descriptionTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['taskList'] },
		}),
		...descriptionTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['taskGet'] },
		}),
		...descriptionTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['taskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['taskResetTaskState'] },
		}),
		...descriptionBackupRepositoryList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['backupRepositoryList'] },
		}),
		...descriptionBackupRepositoryGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['backupRepositoryGet'] },
		}),
		...descriptionIpList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['ipList'] },
		}),
		...descriptionIpGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['ipGet'] },
		}),
		...descriptionIpDetails({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['ipDetails'] },
		}),
		...descriptionIpTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['ipTaskList'] },
		}),
		...descriptionIpTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['ipTaskGet'] },
		}),
		...descriptionIpTaskChangeMaintenanceExecutionDate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['ipTaskChangeMaintenanceExecutionDate'] },
		}),
		...descriptionIpTaskResetTaskState({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['ipTaskResetTaskState'] },
		...descriptionzertoDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoDisable'] },
		}),
		...descriptionzertoEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoEnable'] },
		}),
		...descriptionzertoEndMigration({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoEndMigration'] },
		}),
		...descriptionzertoEndpointPublicIp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoEndpointPublicIp'] },
		}),
		...descriptionzertoRemoteSiteDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoRemoteSiteDelete'] },
		}),
		...descriptionzertoRemoteSiteList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoRemoteSiteList'] },
		}),
		...descriptionzertoRemoteSiteCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoRemoteSiteCreate'] },
		}),
		...descriptionzertoRequestHealthCheck({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoRequestHealthCheck'] },
		}),
		...descriptionzertoStartMigration({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoStartMigration'] },
		}),
		...descriptionzertoStatusGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoStatusGet'] },
		}),
		...descriptionzertoUsageReport({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoUsageReport'] },
		}),
		...descriptionzertoVraResourcesList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoVraResourcesList'] },
		}),
		...descriptionzertoVraResourcesUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoVraResourcesUpdate'] },
		}),
		...descriptionzertoSingleConfigureVpn({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleConfigureVpn'] },
		}),
		...descriptionzertoSingleDefaultLocalVraNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleDefaultLocalVraNetwork'] },
		}),
		...descriptionzertoSingleDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleDisable'] },
		}),
		...descriptionzertoSingleEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleEnable'] },
		}),
		...descriptionzertoSingleEndpointPublicIp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleEndpointPublicIp'] },
		}),
		...descriptionzertoSingleRemoteSiteDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleRemoteSiteDelete'] },
		}),
		...descriptionzertoSingleRemoteSiteList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleRemoteSiteList'] },
		}),
		...descriptionzertoSingleRemoteSiteCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleRemoteSiteCreate'] },
		}),
		...descriptionzertoSingleRequestPairingToken({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleRequestPairingToken'] },
		}),
		...descriptionzertoSingleVraResourcesList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleVraResourcesList'] },
		}),
		...descriptionzertoSingleVraResourcesUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['zertoSingleVraResourcesUpdate'] },
		}),
		...descriptiondatacenterBackupGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupGet'] },
		}),
		...descriptiondatacenterBackupBatchRestore({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupBatchRestore'] },
		}),
		...descriptiondatacenterBackupCanOptimizeProxies({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupCanOptimizeProxies'] },
		}),
		...descriptiondatacenterBackupChangeProperties({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupChangeProperties'] },
		}),
		...descriptiondatacenterBackupDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupDisable'] },
		}),
		...descriptiondatacenterBackupEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupEnable'] },
		}),
		...descriptiondatacenterBackupGenerateReport({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupGenerateReport'] },
		}),
		...descriptiondatacenterBackupOfferCapabilities({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupOfferCapabilities'] },
		}),
		...descriptiondatacenterBackupOptimizeProxies({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['datacenterBackupOptimizeProxies'] },
		}),
		...descriptionnsxtEdgeList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeList'] },
		}),
		...descriptionnsxtEdgeCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeCreate'] },
		}),
		...descriptionnsxtEdgeDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeDelete'] },
		}),
		...descriptionnsxtEdgeGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeGet'] },
		}),
		...descriptionnsxtEdgesResizingCapabilities({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgesResizingCapabilities'] },
		}),
		...descriptionnsxtEdgesScalingCapabilities({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgesScalingCapabilities'] },
		}),
		...descriptionnsxtEdgeRelocateEdge({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeRelocateEdge'] },
		}),
		...descriptionresizeNsxtEdgeCluster({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['resizeNsxtEdgeCluster'] },
		}),
		...descriptionnsxtEdgeResilience({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeResilience'] },
		}),
		...descriptionnsxtEdgeResilienceCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeResilienceCanBeEnabled'] },
		}),
		...descriptionnsxtEdgeResilienceDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeResilienceDisable'] },
		}),
		...descriptionnsxtEdgeResilienceEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtEdgeResilienceEnable'] },
		}),
		...descriptionclusterList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['clusterList'] },
		}),
		...descriptionclusterGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['clusterGet'] },
		}),
		...descriptionclusterNsxtDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['clusterNsxtDelete'] },
		}),
		...descriptionclusterNsxtCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['clusterNsxtCreate'] },
		}),
		...descriptionclusterNsxtUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['clusterNsxtUpdate'] },
		}),
		...descriptionprivateGatewayGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['privateGatewayGet'] },
		}),
		...descriptionprivateGatewayDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['privateGatewayDisable'] },
		}),
		...descriptionprivateGatewayEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['privateGatewayEnable'] },
		}),
		...descriptionprivateGatewayReconfigure({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['privateGatewayReconfigure'] },
		}),
		...descriptionfederationGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationGet'] },
		}),
		...descriptionfederationActiveDirectoryList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationActiveDirectoryList'] },
		}),
		...descriptionfederationActiveDirectoryCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationActiveDirectoryCreate'] },
		}),
		...descriptionfederationActiveDirectoryDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationActiveDirectoryDelete'] },
		}),
		...descriptionfederationActiveDirectoryGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationActiveDirectoryGet'] },
		}),
		...descriptionfederationActiveDirectoryChangeProperties({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationActiveDirectoryChangeProperties'] },
		}),
		...descriptionfederationActiveDirectoryGrantGroup({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationActiveDirectoryGrantGroup'] },
		}),
		...descriptionfederationActiveDirectoryGrantUser({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['federationActiveDirectoryGrantUser'] },
		}),
		...descriptionhcxGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hcxGet'] },
		}),
		...descriptionhcxCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hcxCanBeDisabled'] },
		}),
		...descriptionhcxCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hcxCanBeEnabled'] },
		}),
		...descriptionhcxDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hcxDisable'] },
		}),
		...descriptionhcxEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hcxEnable'] },
		}),
		...descriptionhdsGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hdsGet'] },
		}),
		...descriptionhdsCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hdsCanBeDisabled'] },
		}),
		...descriptionhdsCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hdsCanBeEnabled'] },
		}),
		...descriptionhdsDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hdsDisable'] },
		}),
		...descriptionhdsEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hdsEnable'] },
		}),
		...descriptionhipaaGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hipaaGet'] },
		}),
		...descriptionhipaaCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hipaaCanBeDisabled'] },
		}),
		...descriptionhipaaCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hipaaCanBeEnabled'] },
		}),
		...descriptionhipaaDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hipaaDisable'] },
		}),
		...descriptionhipaaEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hipaaEnable'] },
		}),
		...descriptionpcidssGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['pcidssGet'] },
		}),
		...descriptionpcidssCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['pcidssCanBeDisabled'] },
		}),
		...descriptionpcidssCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['pcidssCanBeEnabled'] },
		}),
		...descriptionpcidssDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['pcidssDisable'] },
		}),
		...descriptionpcidssEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['pcidssEnable'] },
		}),
		...descriptionnsxGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxGet'] },
		}),
		...descriptionnsxCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxCanBeDisabled'] },
		}),
		...descriptionnsxCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxCanBeEnabled'] },
		}),
		...descriptionnsxDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxDisable'] },
		}),
		...descriptionnsxEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxEnable'] },
		}),
		...descriptionsapList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['sapList'] },
		}),
		...descriptionsapCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['sapCreate'] },
		}),
		...descriptionsapDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['sapDelete'] },
		}),
		...descriptionsapGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['sapGet'] },
		}),
		...descriptionvropsGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsGet'] },
		}),
		...descriptionvropsCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsCanBeDisabled'] },
		}),
		...descriptionvropsCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsCanBeEnabled'] },
		}),
		...descriptionvropsDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsDisable'] },
		}),
		...descriptionvropsEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsEnable'] },
		}),
		...descriptionvropsOutgoingFlowList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsOutgoingFlowList'] },
		}),
		...descriptionvropsOutgoingFlowCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsOutgoingFlowCreate'] },
		}),
		...descriptionvropsOutgoingFlowDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsOutgoingFlowDelete'] },
		}),
		...descriptionvropsOutgoingFlowGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsOutgoingFlowGet'] },
		}),
		...descriptionvropsOutgoingFlowChangeProperties({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsOutgoingFlowChangeProperties'] },
		}),
		...descriptionvropsUpgrade({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vropsUpgrade'] },
		}),
		...descriptioniamGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['iamGet'] },
		}),
		...descriptioniamAddRole({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['iamAddRole'] },
		}),
		...descriptioniamCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['iamCanBeDisabled'] },
		}),
		...descriptioniamCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['iamCanBeEnabled'] },
		}),
		...descriptioniamDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['iamDisable'] },
		}),
		...descriptioniamEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['iamEnable'] },
		}),
		...descriptionlogForwarderGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logForwarderGet'] },
		}),
		...descriptionlogForwarderCanBeDisabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logForwarderCanBeDisabled'] },
		}),
		...descriptionlogForwarderCanBeEnabled({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logForwarderCanBeEnabled'] },
		}),
		...descriptionlogForwarderDisable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logForwarderDisable'] },
		}),
		...descriptionlogForwarderEnable({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logForwarderEnable'] },
		}),
		...descriptionlogKindList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logKindList'] },
		}),
		...descriptionlogKindGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logKindGet'] },
		}),
		...descriptionlogSubscriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logSubscriptionList'] },
		}),
		...descriptionlogSubscriptionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logSubscriptionCreate'] },
		}),
		...descriptionlogSubscriptionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logSubscriptionDelete'] },
		}),
		...descriptionlogSubscriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logSubscriptionGet'] },
		}),
		...descriptionlogUrlCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['logUrlCreate'] },
		}),
		...descriptiontwoFAWhitelistList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['twoFAWhitelistList'] },
		}),
		...descriptiontwoFAWhitelistCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['twoFAWhitelistCreate'] },
		}),
		...descriptiontwoFAWhitelistDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['twoFAWhitelistDelete'] },
		}),
		...descriptiontwoFAWhitelistGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['twoFAWhitelistGet'] },
		}),
		...descriptiontwoFAWhitelistChangeProperties({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['twoFAWhitelistChangeProperties'] },
		}),
		...descriptionvlanList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vlanList'] },
		}),
		...descriptionvlanGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vlanGet'] },
		}),
		...descriptionvendorGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vendorGet'] },
		}),
		...descriptionvendorObjectTypeList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vendorObjectTypeList'] },
		}),
		...descriptionvendorOvhId({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vendorOvhId'] },
		}),
		...descriptionvmEncryptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEncryptionGet'] },
		}),
		...descriptionvmEncryptionKmsList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEncryptionKmsList'] },
		}),
		...descriptionvmEncryptionKmsCreate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEncryptionKmsCreate'] },
		}),
		...descriptionvmEncryptionKmsDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEncryptionKmsDelete'] },
		}),
		...descriptionvmEncryptionKmsGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEncryptionKmsGet'] },
		}),
		...descriptionvmEncryptionKmsChangeProperties({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmEncryptionKmsChangeProperties'] },
		}),
		...descriptionvrackList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vrackList'] },
		}),
		...descriptionvrackDelete({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vrackDelete'] },
		}),
		...descriptionvrackGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vrackGet'] },
		}),
		...descriptionrobotList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['robotList'] },
		}),
		...descriptionrobotGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['robotGet'] },
		}),
		...descriptiontagList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['tagList'] },
		}),
		...descriptiontagGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['tagGet'] },
		}),
		...descriptionservicePackGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['servicePackGet'] },
		}),
		...descriptionLocationServiceGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['serviceLocationGet'] },
		}),
		...descriptionservicePacksList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['servicePacksList'] },
		}),
		...descriptionservicePacksGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['servicePacksGet'] },
		}),
		...descriptionsecurityOptionsGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['securityOptionsGet'] },
		}),
		...descriptionsecurityOptionsCompatibilityMatrix({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['securityOptionsCompatibilityMatrix'] },
		}),
		...descriptionsecurityOptionsDependenciesTree({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['securityOptionsDependenciesTree'] },
		}),
		...descriptionsecurityOptionsPendingOptions({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['securityOptionsPendingOptions'] },
		}),
		...descriptionsecurityOptionsResumePendingEnabling({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['securityOptionsResumePendingEnabling'] },
		}),
		...descriptionvcenterVersionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vcenterVersionGet'] },
		}),
		...descriptioncapabilitiesGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['capabilitiesGet'] },
		}),
		...descriptioncanDeployNsxtEdgesOnGlobalDatastores({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['canDeployNsxtEdgesOnGlobalDatastores'] },
		}),
		...descriptiongenerateNsxvInventory({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['generateNsxvInventory'] },
		}),
		...descriptiongenerateVxlanToVrackMapping({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['generateVxlanToVrackMapping'] },
		}),
		...descriptionglobalTasksList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['globalTasksList'] },
		}),
		...descriptionnewPricesGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['newPricesGet'] },
		}),
		...descriptionnsxtGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['nsxtGet'] },
		}),
		...descriptionorderableIpCountriesGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['orderableIpCountriesGet'] },
		}),
		...descriptionpasswordPolicyGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['passwordPolicyGet'] },
		}),
		...descriptionresetTriggeredAlarm({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['resetTriggeredAlarm'] },
		}),
		...descriptionupgradeHypervisor({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['upgradeHypervisor'] },
		}),
		...descriptionupgradeVcenter({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['upgradeVcenter'] },
		}),
		...descriptionvmwareCloudDirectorEligibility({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['vmwareCloudDirectorEligibility'] },
		}),
		...descriptionorderNewFilerHourly({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['orderNewFilerHourly'] },
		}),
		}),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedCloudOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'get':
			return await executeGet.call(this, itemIndex ?? 0);
		case 'list':
			return await executeList.call(this, itemIndex ?? 0);
		case 'commercialRangeGet':
			return await executeCommercialRangeGet.call(this, itemIndex ?? 0);
		case 'commercialRangeComplianceList':
			return await executeCommercialRangeComplianceList.call(this, itemIndex ?? 0);
		case 'commercialRangeOrderableList':
			return await executeCommercialRangeOrderableList.call(this, itemIndex ?? 0);
		case 'commercialRangeList':
			return await executeCommercialRangeList.call(this, itemIndex ?? 0);
		case 'hostProfileGet':
			return await executeHostProfileGet.call(this, itemIndex ?? 0);
		case 'serviceHostProfileGet':
			return await executeHostProfileServiceGet.call(this, itemIndex ?? 0);
		case 'hostProfileList':
			return await executeHostProfileList.call(this, itemIndex ?? 0);
		case 'serviceHostProfileList':
			return await executeHostProfileServiceList.call(this, itemIndex ?? 0);
		case 'locationGet':
			return await executeLocationGet.call(this, itemIndex ?? 0);
		case 'locationList':
			return await executeLocationList.call(this, itemIndex ?? 0);
		case 'stockHostList':
			return await executeStockHostList.call(this, itemIndex ?? 0);
		case 'stockPccList':
			return await executeStockPccList.call(this, itemIndex ?? 0);
		case 'stockZpoolList':
			return await executeStockZpoolList.call(this, itemIndex ?? 0);
		case 'hypervisorList':
			return await executeHypervisorList.call(this, itemIndex ?? 0);
		case 'serviceHypervisorList':
			return await executeHypervisorServiceList.call(this, itemIndex ?? 0);
		case 'hypervisorGet':
			return await executeHypervisorGet.call(this, itemIndex ?? 0);
		case 'serviceHypervisorGet':
			return await executeHypervisorServiceGet.call(this, itemIndex ?? 0);
		case 'update':
			return await executeUpdate.call(this, itemIndex ?? 0);
		case 'terminate':
			return await executeTerminate.call(this, itemIndex ?? 0);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this, itemIndex ?? 0);
		case 'changeContact':
			return await executeChangeContact.call(this, itemIndex ?? 0);
		case 'changeProperties':
			return await executeChangeProperties.call(this, itemIndex ?? 0);
		case 'allowedNetworkList':
			return await executeAllowedNetworkList.call(this, itemIndex ?? 0);
		case 'allowedNetworkCreate':
			return await executeAllowedNetworkCreate.call(this, itemIndex ?? 0);
		case 'allowedNetworkGet':
			return await executeAllowedNetworkGet.call(this, itemIndex ?? 0);
		case 'allowedNetworkUpdate':
			return await executeAllowedNetworkUpdate.call(this, itemIndex ?? 0);
		case 'allowedNetworkDelete':
			return await executeAllowedNetworkDelete.call(this, itemIndex ?? 0);
		case 'allowedNetworkTaskList':
			return await executeAllowedNetworkTaskList.call(this, itemIndex ?? 0);
		case 'allowedNetworkTaskGet':
			return await executeAllowedNetworkTaskGet.call(this, itemIndex ?? 0);
		case 'allowedNetworkTaskChangeMaintenanceExecutionDate':
			return await executeAllowedNetworkTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'allowedNetworkTaskResetTaskState':
			return await executeAllowedNetworkTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'datacenterList':
			return await executeDatacenterList.call(this, itemIndex ?? 0);
		case 'datacenterCreate':
			return await executeDatacenterCreate.call(this, itemIndex ?? 0);
		case 'datacenterGet':
			return await executeDatacenterGet.call(this, itemIndex ?? 0);
		case 'datacenterUpdate':
			return await executeDatacenterUpdate.call(this, itemIndex ?? 0);
		case 'datacenterDelete':
			return await executeDatacenterDelete.call(this, itemIndex ?? 0);
		case 'datacenterBackupRepositoryList':
			return await executeDatacenterBackupRepositoryList.call(this, itemIndex ?? 0);
		case 'datacenterBackupRepositoryGet':
			return await executeDatacenterBackupRepositoryGet.call(this, itemIndex ?? 0);
		case 'datacenterCheckBackupJobs':
			return await executeDatacenterCheckBackupJobs.call(this, itemIndex ?? 0);
		case 'datacenterOrderableFilerProfiles':
			return await executeDatacenterOrderableFilerProfiles.call(this, itemIndex ?? 0);
		case 'datacenterOrderableHostProfiles':
			return await executeDatacenterOrderableHostProfiles.call(this, itemIndex ?? 0);
		case 'datacenterOrderNewFilerHourly':
			return await executeDatacenterOrderNewFilerHourly.call(this, itemIndex ?? 0);
		case 'datacenterOrderNewHostHourly':
			return await executeDatacenterOrderNewHostHourly.call(this, itemIndex ?? 0);
		case 'datacenterTaskList':
			return await executeDatacenterTaskList.call(this, itemIndex ?? 0);
		case 'datacenterTaskGet':
			return await executeDatacenterTaskGet.call(this, itemIndex ?? 0);
		case 'datacenterTaskChangeMaintenanceExecutionDate':
			return await executeDatacenterTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'datacenterTaskResetTaskState':
			return await executeDatacenterTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'hostList':
			return await executeHostList.call(this, itemIndex ?? 0);
		case 'hostGet':
			return await executeHostGet.call(this, itemIndex ?? 0);
		case 'hostAddHostSpare':
			return await executeHostAddHostSpare.call(this, itemIndex ?? 0);
		case 'hostHourlyConsumption':
			return await executeHostHourlyConsumption.call(this, itemIndex ?? 0);
		case 'hostLocation':
			return await executeHostLocation.call(this, itemIndex ?? 0);
		case 'hostRemove':
			return await executeHostRemove.call(this, itemIndex ?? 0);
		case 'hostResilience':
			return await executeHostResilience.call(this, itemIndex ?? 0);
		case 'hostResilienceCanBeEnabled':
			return await executeHostResilienceCanBeEnabled.call(this, itemIndex ?? 0);
		case 'hostResilienceDisable':
			return await executeHostResilienceDisable.call(this, itemIndex ?? 0);
		case 'hostResilienceEnable':
			return await executeHostResilienceEnable.call(this, itemIndex ?? 0);
		case 'hostTaskList':
			return await executeHostTaskList.call(this, itemIndex ?? 0);
		case 'hostTaskGet':
			return await executeHostTaskGet.call(this, itemIndex ?? 0);
		case 'hostTaskChangeMaintenanceExecutionDate':
			return await executeHostTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'hostTaskResetTaskState':
			return await executeHostTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'filerList':
			return await executeFilerList.call(this, itemIndex ?? 0);
		case 'filerGlobalList':
			return await executeFilerGlobalList.call(this, itemIndex ?? 0);
		case 'filerGet':
			return await executeFilerGet.call(this, itemIndex ?? 0);
		case 'filerGlobalGet':
			return await executeFilerGlobalGet.call(this, itemIndex ?? 0);
		case 'filerCheckGlobalCompatible':
			return await executeFilerCheckGlobalCompatible.call(this, itemIndex ?? 0);
		case 'filerGlobalCheckGlobalCompatible':
			return await executeFilerGlobalCheckGlobalCompatible.call(this, itemIndex ?? 0);
		case 'filerConvertToGlobal':
			return await executeFilerConvertToGlobal.call(this, itemIndex ?? 0);
		case 'filerGlobalConvertToGlobal':
			return await executeFilerGlobalConvertToGlobal.call(this, itemIndex ?? 0);
		case 'filerHourlyConsumption':
			return await executeFilerHourlyConsumption.call(this, itemIndex ?? 0);
		case 'filerGlobalHourlyConsumption':
			return await executeFilerGlobalHourlyConsumption.call(this, itemIndex ?? 0);
		case 'filerLocation':
			return await executeFilerLocation.call(this, itemIndex ?? 0);
		case 'filerGlobalLocation':
			return await executeFilerGlobalLocation.call(this, itemIndex ?? 0);
		case 'filerRemove':
			return await executeFilerRemove.call(this, itemIndex ?? 0);
		case 'filerGlobalRemove':
			return await executeFilerGlobalRemove.call(this, itemIndex ?? 0);
		case 'filerTaskList':
			return await executeFilerTaskList.call(this, itemIndex ?? 0);
		case 'filerGlobalTaskList':
			return await executeFilerGlobalTaskList.call(this, itemIndex ?? 0);
		case 'filerTaskGet':
			return await executeFilerTaskGet.call(this, itemIndex ?? 0);
		case 'filerGlobalTaskGet':
			return await executeFilerGlobalTaskGet.call(this, itemIndex ?? 0);
		case 'filerTaskChangeMaintenanceExecutionDate':
			return await executeFilerTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'filerGlobalTaskChangeMaintenanceExecutionDate':
			return await executeFilerGlobalTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'filerTaskResetTaskState':
			return await executeFilerTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'filerGlobalTaskResetTaskState':
			return await executeFilerGlobalTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'vmList':
			return await executeVmList.call(this, itemIndex ?? 0);
		case 'vmGet':
			return await executeVmGet.call(this, itemIndex ?? 0);
		case 'vmBackupJobGet':
			return await executeVmBackupJobGet.call(this, itemIndex ?? 0);
		case 'vmBackupJobUpdate':
			return await executeVmBackupJobUpdate.call(this, itemIndex ?? 0);
		case 'vmBackupJobDisable':
			return await executeVmBackupJobDisable.call(this, itemIndex ?? 0);
		case 'vmBackupJobEnable':
			return await executeVmBackupJobEnable.call(this, itemIndex ?? 0);
		case 'vmRestorePointsList':
			return await executeVmRestorePointsList.call(this, itemIndex ?? 0);
		case 'vmRestorePointGet':
			return await executeVmRestorePointGet.call(this, itemIndex ?? 0);
		case 'vmRestorePointRestore':
			return await executeVmRestorePointRestore.call(this, itemIndex ?? 0);
		case 'vmDisableBackup':
			return await executeVmDisableBackup.call(this, itemIndex ?? 0);
		case 'vmDisableCarp':
			return await executeVmDisableCarp.call(this, itemIndex ?? 0);
		case 'vmEditBackup':
			return await executeVmEditBackup.call(this, itemIndex ?? 0);
		case 'vmEnableBackup':
			return await executeVmEnableBackup.call(this, itemIndex ?? 0);
		case 'vmEnableCarp':
			return await executeVmEnableCarp.call(this, itemIndex ?? 0);
		case 'vmRemoveLicense':
			return await executeVmRemoveLicense.call(this, itemIndex ?? 0);
		case 'vmRestoreBackup':
			return await executeVmRestoreBackup.call(this, itemIndex ?? 0);
		case 'vmSetLicense':
			return await executeVmSetLicense.call(this, itemIndex ?? 0);
		case 'vmLicensedList':
			return await executeVmLicensedList.call(this, itemIndex ?? 0);
		case 'serviceInfosGet':
			return await executeServiceInfosGet.call(this, itemIndex ?? 0);
		case 'serviceInfosUpdate':
			return await executeServiceInfosUpdate.call(this, itemIndex ?? 0);
		case 'userList':
			return await executeUserList.call(this, itemIndex ?? 0);
		case 'userCreate':
			return await executeUserCreate.call(this, itemIndex ?? 0);
		case 'userGet':
			return await executeUserGet.call(this, itemIndex ?? 0);
		case 'userDelete':
			return await executeUserDelete.call(this, itemIndex ?? 0);
		case 'userChangePassword':
			return await executeUserChangePassword.call(this, itemIndex ?? 0);
		case 'userChangeProperties':
			return await executeUserChangeProperties.call(this, itemIndex ?? 0);
		case 'userConfirmPhoneNumber':
			return await executeUserConfirmPhoneNumber.call(this, itemIndex ?? 0);
		case 'userDisable':
			return await executeUserDisable.call(this, itemIndex ?? 0);
		case 'userEnable':
			return await executeUserEnable.call(this, itemIndex ?? 0);
		case 'userObjectRightList':
			return await executeUserObjectRightList.call(this, itemIndex ?? 0);
		case 'userObjectRightCreate':
			return await executeUserObjectRightCreate.call(this, itemIndex ?? 0);
		case 'userObjectRightGet':
			return await executeUserObjectRightGet.call(this, itemIndex ?? 0);
		case 'userObjectRightDelete':
			return await executeUserObjectRightDelete.call(this, itemIndex ?? 0);
		case 'userRightList':
			return await executeUserRightList.call(this, itemIndex ?? 0);
		case 'userRightGet':
			return await executeUserRightGet.call(this, itemIndex ?? 0);
		case 'userRightUpdate':
			return await executeUserRightUpdate.call(this, itemIndex ?? 0);
		case 'userTaskList':
			return await executeUserTaskList.call(this, itemIndex ?? 0);
		case 'userTaskGet':
			return await executeUserTaskGet.call(this, itemIndex ?? 0);
		case 'userTaskChangeMaintenanceExecutionDate':
			return await executeUserTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'userTaskResetTaskState':
			return await executeUserTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'taskList':
			return await executeTaskList.call(this, itemIndex ?? 0);
		case 'taskGet':
			return await executeTaskGet.call(this, itemIndex ?? 0);
		case 'taskChangeMaintenanceExecutionDate':
			return await executeTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'taskResetTaskState':
			return await executeTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'backupRepositoryList':
			return await executeBackupRepositoryList.call(this, itemIndex ?? 0);
		case 'backupRepositoryGet':
			return await executeBackupRepositoryGet.call(this, itemIndex ?? 0);
		case 'ipList':
			return await executeIpList.call(this, itemIndex ?? 0);
		case 'ipGet':
			return await executeIpGet.call(this, itemIndex ?? 0);
		case 'ipDetails':
			return await executeIpDetails.call(this, itemIndex ?? 0);
		case 'ipTaskList':
			return await executeIpTaskList.call(this, itemIndex ?? 0);
		case 'ipTaskGet':
			return await executeIpTaskGet.call(this, itemIndex ?? 0);
		case 'ipTaskChangeMaintenanceExecutionDate':
			return await executeIpTaskChangeMaintenanceExecutionDate.call(this, itemIndex ?? 0);
		case 'ipTaskResetTaskState':
			return await executeIpTaskResetTaskState.call(this, itemIndex ?? 0);
		case 'zertoDisable':
			return await executezertoDisable.call(this, itemIndex ?? 0);
		case 'zertoEnable':
			return await executezertoEnable.call(this, itemIndex ?? 0);
		case 'zertoEndMigration':
			return await executezertoEndMigration.call(this, itemIndex ?? 0);
		case 'zertoEndpointPublicIp':
			return await executezertoEndpointPublicIp.call(this, itemIndex ?? 0);
		case 'zertoRemoteSiteDelete':
			return await executezertoRemoteSiteDelete.call(this, itemIndex ?? 0);
		case 'zertoRemoteSiteList':
			return await executezertoRemoteSiteList.call(this, itemIndex ?? 0);
		case 'zertoRemoteSiteCreate':
			return await executezertoRemoteSiteCreate.call(this, itemIndex ?? 0);
		case 'zertoRequestHealthCheck':
			return await executezertoRequestHealthCheck.call(this, itemIndex ?? 0);
		case 'zertoStartMigration':
			return await executezertoStartMigration.call(this, itemIndex ?? 0);
		case 'zertoStatusGet':
			return await executezertoStatusGet.call(this, itemIndex ?? 0);
		case 'zertoUsageReport':
			return await executezertoUsageReport.call(this, itemIndex ?? 0);
		case 'zertoVraResourcesList':
			return await executezertoVraResourcesList.call(this, itemIndex ?? 0);
		case 'zertoVraResourcesUpdate':
			return await executezertoVraResourcesUpdate.call(this, itemIndex ?? 0);
		case 'zertoSingleConfigureVpn':
			return await executezertoSingleConfigureVpn.call(this, itemIndex ?? 0);
		case 'zertoSingleDefaultLocalVraNetwork':
			return await executezertoSingleDefaultLocalVraNetwork.call(this, itemIndex ?? 0);
		case 'zertoSingleDisable':
			return await executezertoSingleDisable.call(this, itemIndex ?? 0);
		case 'zertoSingleEnable':
			return await executezertoSingleEnable.call(this, itemIndex ?? 0);
		case 'zertoSingleEndpointPublicIp':
			return await executezertoSingleEndpointPublicIp.call(this, itemIndex ?? 0);
		case 'zertoSingleRemoteSiteDelete':
			return await executezertoSingleRemoteSiteDelete.call(this, itemIndex ?? 0);
		case 'zertoSingleRemoteSiteList':
			return await executezertoSingleRemoteSiteList.call(this, itemIndex ?? 0);
		case 'zertoSingleRemoteSiteCreate':
			return await executezertoSingleRemoteSiteCreate.call(this, itemIndex ?? 0);
		case 'zertoSingleRequestPairingToken':
			return await executezertoSingleRequestPairingToken.call(this, itemIndex ?? 0);
		case 'zertoSingleVraResourcesList':
			return await executezertoSingleVraResourcesList.call(this, itemIndex ?? 0);
		case 'zertoSingleVraResourcesUpdate':
			return await executezertoSingleVraResourcesUpdate.call(this, itemIndex ?? 0);
		case 'datacenterBackupGet':
			return await executedatacenterBackupGet.call(this, itemIndex ?? 0);
		case 'datacenterBackupBatchRestore':
			return await executedatacenterBackupBatchRestore.call(this, itemIndex ?? 0);
		case 'datacenterBackupCanOptimizeProxies':
			return await executedatacenterBackupCanOptimizeProxies.call(this, itemIndex ?? 0);
		case 'datacenterBackupChangeProperties':
			return await executedatacenterBackupChangeProperties.call(this, itemIndex ?? 0);
		case 'datacenterBackupDisable':
			return await executedatacenterBackupDisable.call(this, itemIndex ?? 0);
		case 'datacenterBackupEnable':
			return await executedatacenterBackupEnable.call(this, itemIndex ?? 0);
		case 'datacenterBackupGenerateReport':
			return await executedatacenterBackupGenerateReport.call(this, itemIndex ?? 0);
		case 'datacenterBackupOfferCapabilities':
			return await executedatacenterBackupOfferCapabilities.call(this, itemIndex ?? 0);
		case 'datacenterBackupOptimizeProxies':
			return await executedatacenterBackupOptimizeProxies.call(this, itemIndex ?? 0);
		case 'nsxtEdgeList':
			return await executensxtEdgeList.call(this, itemIndex ?? 0);
		case 'nsxtEdgeCreate':
			return await executensxtEdgeCreate.call(this, itemIndex ?? 0);
		case 'nsxtEdgeDelete':
			return await executensxtEdgeDelete.call(this, itemIndex ?? 0);
		case 'nsxtEdgeGet':
			return await executensxtEdgeGet.call(this, itemIndex ?? 0);
		case 'nsxtEdgesResizingCapabilities':
			return await executensxtEdgesResizingCapabilities.call(this, itemIndex ?? 0);
		case 'nsxtEdgesScalingCapabilities':
			return await executensxtEdgesScalingCapabilities.call(this, itemIndex ?? 0);
		case 'nsxtEdgeRelocateEdge':
			return await executensxtEdgeRelocateEdge.call(this, itemIndex ?? 0);
		case 'resizeNsxtEdgeCluster':
			return await executeresizeNsxtEdgeCluster.call(this, itemIndex ?? 0);
		case 'nsxtEdgeResilience':
			return await executensxtEdgeResilience.call(this, itemIndex ?? 0);
		case 'nsxtEdgeResilienceCanBeEnabled':
			return await executensxtEdgeResilienceCanBeEnabled.call(this, itemIndex ?? 0);
		case 'nsxtEdgeResilienceDisable':
			return await executensxtEdgeResilienceDisable.call(this, itemIndex ?? 0);
		case 'nsxtEdgeResilienceEnable':
			return await executensxtEdgeResilienceEnable.call(this, itemIndex ?? 0);
		case 'clusterList':
			return await executeclusterList.call(this, itemIndex ?? 0);
		case 'clusterGet':
			return await executeclusterGet.call(this, itemIndex ?? 0);
		case 'clusterNsxtDelete':
			return await executeclusterNsxtDelete.call(this, itemIndex ?? 0);
		case 'clusterNsxtCreate':
			return await executeclusterNsxtCreate.call(this, itemIndex ?? 0);
		case 'clusterNsxtUpdate':
			return await executeclusterNsxtUpdate.call(this, itemIndex ?? 0);
		case 'privateGatewayGet':
			return await executeprivateGatewayGet.call(this, itemIndex ?? 0);
		case 'privateGatewayDisable':
			return await executeprivateGatewayDisable.call(this, itemIndex ?? 0);
		case 'privateGatewayEnable':
			return await executeprivateGatewayEnable.call(this, itemIndex ?? 0);
		case 'privateGatewayReconfigure':
			return await executeprivateGatewayReconfigure.call(this, itemIndex ?? 0);
		case 'federationGet':
			return await executefederationGet.call(this, itemIndex ?? 0);
		case 'federationActiveDirectoryList':
			return await executefederationActiveDirectoryList.call(this, itemIndex ?? 0);
		case 'federationActiveDirectoryCreate':
			return await executefederationActiveDirectoryCreate.call(this, itemIndex ?? 0);
		case 'federationActiveDirectoryDelete':
			return await executefederationActiveDirectoryDelete.call(this, itemIndex ?? 0);
		case 'federationActiveDirectoryGet':
			return await executefederationActiveDirectoryGet.call(this, itemIndex ?? 0);
		case 'federationActiveDirectoryChangeProperties':
			return await executefederationActiveDirectoryChangeProperties.call(this, itemIndex ?? 0);
		case 'federationActiveDirectoryGrantGroup':
			return await executefederationActiveDirectoryGrantGroup.call(this, itemIndex ?? 0);
		case 'federationActiveDirectoryGrantUser':
			return await executefederationActiveDirectoryGrantUser.call(this, itemIndex ?? 0);
		case 'hcxGet':
			return await executehcxGet.call(this, itemIndex ?? 0);
		case 'hcxCanBeDisabled':
			return await executehcxCanBeDisabled.call(this, itemIndex ?? 0);
		case 'hcxCanBeEnabled':
			return await executehcxCanBeEnabled.call(this, itemIndex ?? 0);
		case 'hcxDisable':
			return await executehcxDisable.call(this, itemIndex ?? 0);
		case 'hcxEnable':
			return await executehcxEnable.call(this, itemIndex ?? 0);
		case 'hdsGet':
			return await executehdsGet.call(this, itemIndex ?? 0);
		case 'hdsCanBeDisabled':
			return await executehdsCanBeDisabled.call(this, itemIndex ?? 0);
		case 'hdsCanBeEnabled':
			return await executehdsCanBeEnabled.call(this, itemIndex ?? 0);
		case 'hdsDisable':
			return await executehdsDisable.call(this, itemIndex ?? 0);
		case 'hdsEnable':
			return await executehdsEnable.call(this, itemIndex ?? 0);
		case 'hipaaGet':
			return await executehipaaGet.call(this, itemIndex ?? 0);
		case 'hipaaCanBeDisabled':
			return await executehipaaCanBeDisabled.call(this, itemIndex ?? 0);
		case 'hipaaCanBeEnabled':
			return await executehipaaCanBeEnabled.call(this, itemIndex ?? 0);
		case 'hipaaDisable':
			return await executehipaaDisable.call(this, itemIndex ?? 0);
		case 'hipaaEnable':
			return await executehipaaEnable.call(this, itemIndex ?? 0);
		case 'pcidssGet':
			return await executepcidssGet.call(this, itemIndex ?? 0);
		case 'pcidssCanBeDisabled':
			return await executepcidssCanBeDisabled.call(this, itemIndex ?? 0);
		case 'pcidssCanBeEnabled':
			return await executepcidssCanBeEnabled.call(this, itemIndex ?? 0);
		case 'pcidssDisable':
			return await executepcidssDisable.call(this, itemIndex ?? 0);
		case 'pcidssEnable':
			return await executepcidssEnable.call(this, itemIndex ?? 0);
		case 'nsxGet':
			return await executensxGet.call(this, itemIndex ?? 0);
		case 'nsxCanBeDisabled':
			return await executensxCanBeDisabled.call(this, itemIndex ?? 0);
		case 'nsxCanBeEnabled':
			return await executensxCanBeEnabled.call(this, itemIndex ?? 0);
		case 'nsxDisable':
			return await executensxDisable.call(this, itemIndex ?? 0);
		case 'nsxEnable':
			return await executensxEnable.call(this, itemIndex ?? 0);
		case 'sapList':
			return await executesapList.call(this, itemIndex ?? 0);
		case 'sapCreate':
			return await executesapCreate.call(this, itemIndex ?? 0);
		case 'sapDelete':
			return await executesapDelete.call(this, itemIndex ?? 0);
		case 'sapGet':
			return await executesapGet.call(this, itemIndex ?? 0);
		case 'vropsGet':
			return await executevropsGet.call(this, itemIndex ?? 0);
		case 'vropsCanBeDisabled':
			return await executevropsCanBeDisabled.call(this, itemIndex ?? 0);
		case 'vropsCanBeEnabled':
			return await executevropsCanBeEnabled.call(this, itemIndex ?? 0);
		case 'vropsDisable':
			return await executevropsDisable.call(this, itemIndex ?? 0);
		case 'vropsEnable':
			return await executevropsEnable.call(this, itemIndex ?? 0);
		case 'vropsOutgoingFlowList':
			return await executevropsOutgoingFlowList.call(this, itemIndex ?? 0);
		case 'vropsOutgoingFlowCreate':
			return await executevropsOutgoingFlowCreate.call(this, itemIndex ?? 0);
		case 'vropsOutgoingFlowDelete':
			return await executevropsOutgoingFlowDelete.call(this, itemIndex ?? 0);
		case 'vropsOutgoingFlowGet':
			return await executevropsOutgoingFlowGet.call(this, itemIndex ?? 0);
		case 'vropsOutgoingFlowChangeProperties':
			return await executevropsOutgoingFlowChangeProperties.call(this, itemIndex ?? 0);
		case 'vropsUpgrade':
			return await executevropsUpgrade.call(this, itemIndex ?? 0);
		case 'iamGet':
			return await executeiamGet.call(this, itemIndex ?? 0);
		case 'iamAddRole':
			return await executeiamAddRole.call(this, itemIndex ?? 0);
		case 'iamCanBeDisabled':
			return await executeiamCanBeDisabled.call(this, itemIndex ?? 0);
		case 'iamCanBeEnabled':
			return await executeiamCanBeEnabled.call(this, itemIndex ?? 0);
		case 'iamDisable':
			return await executeiamDisable.call(this, itemIndex ?? 0);
		case 'iamEnable':
			return await executeiamEnable.call(this, itemIndex ?? 0);
		case 'logForwarderGet':
			return await executelogForwarderGet.call(this, itemIndex ?? 0);
		case 'logForwarderCanBeDisabled':
			return await executelogForwarderCanBeDisabled.call(this, itemIndex ?? 0);
		case 'logForwarderCanBeEnabled':
			return await executelogForwarderCanBeEnabled.call(this, itemIndex ?? 0);
		case 'logForwarderDisable':
			return await executelogForwarderDisable.call(this, itemIndex ?? 0);
		case 'logForwarderEnable':
			return await executelogForwarderEnable.call(this, itemIndex ?? 0);
		case 'logKindList':
			return await executelogKindList.call(this, itemIndex ?? 0);
		case 'logKindGet':
			return await executelogKindGet.call(this, itemIndex ?? 0);
		case 'logSubscriptionList':
			return await executelogSubscriptionList.call(this, itemIndex ?? 0);
		case 'logSubscriptionCreate':
			return await executelogSubscriptionCreate.call(this, itemIndex ?? 0);
		case 'logSubscriptionDelete':
			return await executelogSubscriptionDelete.call(this, itemIndex ?? 0);
		case 'logSubscriptionGet':
			return await executelogSubscriptionGet.call(this, itemIndex ?? 0);
		case 'logUrlCreate':
			return await executelogUrlCreate.call(this, itemIndex ?? 0);
		case 'twoFAWhitelistList':
			return await executetwoFAWhitelistList.call(this, itemIndex ?? 0);
		case 'twoFAWhitelistCreate':
			return await executetwoFAWhitelistCreate.call(this, itemIndex ?? 0);
		case 'twoFAWhitelistDelete':
			return await executetwoFAWhitelistDelete.call(this, itemIndex ?? 0);
		case 'twoFAWhitelistGet':
			return await executetwoFAWhitelistGet.call(this, itemIndex ?? 0);
		case 'twoFAWhitelistChangeProperties':
			return await executetwoFAWhitelistChangeProperties.call(this, itemIndex ?? 0);
		case 'vlanList':
			return await executevlanList.call(this, itemIndex ?? 0);
		case 'vlanGet':
			return await executevlanGet.call(this, itemIndex ?? 0);
		case 'vendorGet':
			return await executevendorGet.call(this, itemIndex ?? 0);
		case 'vendorObjectTypeList':
			return await executevendorObjectTypeList.call(this, itemIndex ?? 0);
		case 'vendorOvhId':
			return await executevendorOvhId.call(this, itemIndex ?? 0);
		case 'vmEncryptionGet':
			return await executevmEncryptionGet.call(this, itemIndex ?? 0);
		case 'vmEncryptionKmsList':
			return await executevmEncryptionKmsList.call(this, itemIndex ?? 0);
		case 'vmEncryptionKmsCreate':
			return await executevmEncryptionKmsCreate.call(this, itemIndex ?? 0);
		case 'vmEncryptionKmsDelete':
			return await executevmEncryptionKmsDelete.call(this, itemIndex ?? 0);
		case 'vmEncryptionKmsGet':
			return await executevmEncryptionKmsGet.call(this, itemIndex ?? 0);
		case 'vmEncryptionKmsChangeProperties':
			return await executevmEncryptionKmsChangeProperties.call(this, itemIndex ?? 0);
		case 'vrackList':
			return await executevrackList.call(this, itemIndex ?? 0);
		case 'vrackDelete':
			return await executevrackDelete.call(this, itemIndex ?? 0);
		case 'vrackGet':
			return await executevrackGet.call(this, itemIndex ?? 0);
		case 'robotList':
			return await executerobotList.call(this, itemIndex ?? 0);
		case 'robotGet':
			return await executerobotGet.call(this, itemIndex ?? 0);
		case 'tagList':
			return await executetagList.call(this, itemIndex ?? 0);
		case 'tagGet':
			return await executetagGet.call(this, itemIndex ?? 0);
		case 'servicePackGet':
			return await executeservicePackGet.call(this, itemIndex ?? 0);
		case 'serviceLocationGet':
			return await executeLocationServiceGet.call(this, itemIndex ?? 0);
		case 'servicePacksList':
			return await executeservicePacksList.call(this, itemIndex ?? 0);
		case 'servicePacksGet':
			return await executeservicePacksGet.call(this, itemIndex ?? 0);
		case 'securityOptionsGet':
			return await executesecurityOptionsGet.call(this, itemIndex ?? 0);
		case 'securityOptionsCompatibilityMatrix':
			return await executesecurityOptionsCompatibilityMatrix.call(this, itemIndex ?? 0);
		case 'securityOptionsDependenciesTree':
			return await executesecurityOptionsDependenciesTree.call(this, itemIndex ?? 0);
		case 'securityOptionsPendingOptions':
			return await executesecurityOptionsPendingOptions.call(this, itemIndex ?? 0);
		case 'securityOptionsResumePendingEnabling':
			return await executesecurityOptionsResumePendingEnabling.call(this, itemIndex ?? 0);
		case 'vcenterVersionGet':
			return await executevcenterVersionGet.call(this, itemIndex ?? 0);
		case 'capabilitiesGet':
			return await executecapabilitiesGet.call(this, itemIndex ?? 0);
		case 'canDeployNsxtEdgesOnGlobalDatastores':
			return await executecanDeployNsxtEdgesOnGlobalDatastores.call(this, itemIndex ?? 0);
		case 'generateNsxvInventory':
			return await executegenerateNsxvInventory.call(this, itemIndex ?? 0);
		case 'generateVxlanToVrackMapping':
			return await executegenerateVxlanToVrackMapping.call(this, itemIndex ?? 0);
		case 'globalTasksList':
			return await executeglobalTasksList.call(this, itemIndex ?? 0);
		case 'newPricesGet':
			return await executenewPricesGet.call(this, itemIndex ?? 0);
		case 'nsxtGet':
			return await executensxtGet.call(this, itemIndex ?? 0);
		case 'orderableIpCountriesGet':
			return await executeorderableIpCountriesGet.call(this, itemIndex ?? 0);
		case 'passwordPolicyGet':
			return await executepasswordPolicyGet.call(this, itemIndex ?? 0);
		case 'resetTriggeredAlarm':
			return await executeresetTriggeredAlarm.call(this, itemIndex ?? 0);
		case 'upgradeHypervisor':
			return await executeupgradeHypervisor.call(this, itemIndex ?? 0);
		case 'upgradeVcenter':
			return await executeupgradeVcenter.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorEligibility':
			return await executevmwareCloudDirectorEligibility.call(this, itemIndex ?? 0);
		case 'orderNewFilerHourly':
			return await executeorderNewFilerHourly.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedCloud"`);
}
