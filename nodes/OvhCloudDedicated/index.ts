import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionAuthSecretGet,
	execute as executeAuthSecretGet,
} from './resources/authSecretGet.operation';
import {
	description as descriptionAvailabilityRawGet,
	execute as executeAvailabilityRawGet,
} from './resources/availabilityRawGet.operation';
import {
	description as descriptionBackupCloudDelete,
	execute as executeBackupCloudDelete,
} from './resources/backupCloudDelete.operation';
import {
	description as descriptionBackupCloudGet,
	execute as executeBackupCloudGet,
} from './resources/backupCloudGet.operation';
import {
	description as descriptionBackupCloudOfferDetailsCreate,
	execute as executeBackupCloudOfferDetailsCreate,
} from './resources/backupCloudOfferDetailsCreate.operation';
import {
	description as descriptionBackupFtpAccessDelete,
	execute as executeBackupFtpAccessDelete,
} from './resources/backupFtpAccessDelete.operation';
import {
	description as descriptionBackupFtpAccessEditPut,
	execute as executeBackupFtpAccessEditPut,
} from './resources/backupFtpAccessEditPut.operation';
import {
	description as descriptionBackupFtpAccessListGet,
	execute as executeBackupFtpAccessListGet,
} from './resources/backupFtpAccessListGet.operation';
import {
	description as descriptionBackupFtpAccessPost,
	execute as executeBackupFtpAccessPost,
} from './resources/backupFtpAccessPost.operation';
import {
	description as descriptionBackupFtpDelete,
	execute as executeBackupFtpDelete,
} from './resources/backupFtpDelete.operation';
import {
	description as descriptionBackupFtpGet,
	execute as executeBackupFtpGet,
} from './resources/backupFtpGet.operation';
import {
	description as descriptionBackupFtpPasswordPost,
	execute as executeBackupFtpPasswordPost,
} from './resources/backupFtpPasswordPost.operation';
import {
	description as descriptionBackupFtpPost,
	execute as executeBackupFtpPost,
} from './resources/backupFtpPost.operation';
import {
	description as descriptionBiosSettingsGet,
	execute as executeBiosSettingsGet,
} from './resources/biosSettingsGet.operation';
import {
	description as descriptionBiosSgxConfigurePost,
	execute as executeBiosSgxConfigurePost,
} from './resources/biosSgxConfigurePost.operation';
import {
	description as descriptionBiosSgxGet,
	execute as executeBiosSgxGet,
} from './resources/biosSgxGet.operation';
import {
	description as descriptionBootListGet,
	execute as executeBootListGet,
} from './resources/bootListGet.operation';
import {
	description as descriptionBurstUpdate,
	execute as executeBurstUpdate,
} from './resources/burstUpdate.operation';
import {
	description as descriptionNashaGetGet,
	execute as executeNashaGetGet,
} from './resources/ceph/nashaGetGet.operation';
import {
	description as descriptionNashaListGet,
	execute as executeNashaListGet,
} from './resources/ceph/nashaListGet.operation';
import {
	description as descriptionShareCreatePost,
	execute as executeShareCreatePost,
} from './resources/ceph/shareCreatePost.operation';
import {
	description as descriptionShareDeleteDelete,
	execute as executeShareDeleteDelete,
} from './resources/ceph/shareDeleteDelete.operation';
import {
	description as descriptionShareGetGet,
	execute as executeShareGetGet,
} from './resources/ceph/shareGetGet.operation';
import {
	description as descriptionShareListGet,
	execute as executeShareListGet,
} from './resources/ceph/shareListGet.operation';
import {
	description as descriptionShareUpdatePut,
	execute as executeShareUpdatePut,
} from './resources/ceph/shareUpdatePut.operation';
import {
	description as descriptionSnapshotCreatePost,
	execute as executeSnapshotCreatePost,
} from './resources/ceph/snapshotCreatePost.operation';
import {
	description as descriptionSnapshotDeleteDelete,
	execute as executeSnapshotDeleteDelete,
} from './resources/ceph/snapshotDeleteDelete.operation';
import {
	description as descriptionSnapshotGetGet,
	execute as executeSnapshotGetGet,
} from './resources/ceph/snapshotGetGet.operation';
import {
	description as descriptionSnapshotListGet,
	execute as executeSnapshotListGet,
} from './resources/ceph/snapshotListGet.operation';
import {
	description as descriptionChangeContactCreate,
	execute as executeChangeContactCreate,
} from './resources/changeContactCreate.operation';
import {
	description as descriptionClusterDeleteDelete,
	execute as executeClusterDeleteDelete,
} from './resources/cluster/clusterDeleteDelete.operation';
import {
	description as descriptionClusterGetGet,
	execute as executeClusterGetGet,
} from './resources/cluster/clusterGetGet.operation';
import {
	description as descriptionClusterListGet,
	execute as executeClusterListGet,
} from './resources/cluster/clusterListGet.operation';
import {
	description as descriptionClusterUpdatePut,
	execute as executeClusterUpdatePut,
} from './resources/cluster/clusterUpdatePut.operation';
import {
	description as descriptionNodeDeleteDelete,
	execute as executeNodeDeleteDelete,
} from './resources/cluster/nodeDeleteDelete.operation';
import {
	description as descriptionNodeGetGet,
	execute as executeNodeGetGet,
} from './resources/cluster/nodeGetGet.operation';
import {
	description as descriptionNodeListGet,
	execute as executeNodeListGet,
} from './resources/cluster/nodeListGet.operation';
import {
	description as descriptionNodeUpdatePut,
	execute as executeNodeUpdatePut,
} from './resources/cluster/nodeUpdatePut.operation';
import {
	description as descriptionConfirmTerminationCreate,
	execute as executeConfirmTerminationCreate,
} from './resources/confirmTerminationCreate.operation';
import {
	description as descriptionDatacenterAvailabilityList,
	execute as executeDatacenterAvailabilityList,
} from './resources/datacenterAvailabilityList.operation';
import {
	description as descriptionFirewallGet,
	execute as executeFirewallGet,
} from './resources/firewallGet.operation';
import {
	description as descriptionFirewallUpdate,
	execute as executeFirewallUpdate,
} from './resources/firewallUpdate.operation';
import {
	description as descriptionGet,
	execute as executeGet,
} from './resources/get.operation';
import {
	description as descriptionBandwidthCreatePost,
	execute as executeBandwidthCreatePost,
} from './resources/housing/bandwidthCreatePost.operation';
import {
	description as descriptionBandwidthGetGet,
	execute as executeBandwidthGetGet,
} from './resources/housing/bandwidthGetGet.operation';
import {
	description as descriptionBandwidthVrackCreatePost,
	execute as executeBandwidthVrackCreatePost,
} from './resources/housing/bandwidthVrackCreatePost.operation';
import {
	description as descriptionBandwidthVrackGetGet,
	execute as executeBandwidthVrackGetGet,
} from './resources/housing/bandwidthVrackGetGet.operation';
import {
	description as descriptionHousingGetGet,
	execute as executeHousingGetGet,
} from './resources/housing/housingGetGet.operation';
import {
	description as descriptionHousingListGet,
	execute as executeHousingListGet,
} from './resources/housing/housingListGet.operation';
import {
	description as descriptionHousingUpdatePut,
	execute as executeHousingUpdatePut,
} from './resources/housing/housingUpdatePut.operation';
import {
	description as descriptionInstallPost,
	execute as executeInstallPost,
} from './resources/installation/installPost.operation';
import {
	description as descriptionTemplateGetGet,
	execute as executeTemplateGetGet,
} from './resources/installation/templateGetGet.operation';
import {
	description as descriptionTemplateListGet,
	execute as executeTemplateListGet,
} from './resources/installation/templateListGet.operation';
import {
	description as descriptionIpmiGet,
	execute as executeIpmiGet,
} from './resources/ipmiGet.operation';
import {
	description as descriptionList,
	execute as executeList,
} from './resources/list.operation';
import {
	description as descriptionMonitoringGetGet,
	execute as executeMonitoringGetGet,
} from './resources/monitoring/monitoringGetGet.operation';
import {
	description as descriptionMonitoringMetricGetGet,
	execute as executeMonitoringMetricGetGet,
} from './resources/monitoring/monitoringMetricGetGet.operation';
import {
	description as descriptionNetbootOrderPut,
	execute as executeNetbootOrderPut,
} from './resources/netbootOrderPut.operation';
import {
	description as descriptionOptionCreatePost,
	execute as executeOptionCreatePost,
} from './resources/option/optionCreatePost.operation';
import {
	description as descriptionOptionGetGet,
	execute as executeOptionGetGet,
} from './resources/option/optionGetGet.operation';
import {
	description as descriptionOptionListGet,
	execute as executeOptionListGet,
} from './resources/option/optionListGet.operation';
import {
	description as descriptionOptionDelete,
	execute as executeOptionDelete,
} from './resources/optionDelete.operation';
import {
	description as descriptionTaskDetailGet,
	execute as executeTaskDetailGet,
} from './resources/taskDetailGet.operation';
import {
	description as descriptionTaskListGet,
	execute as executeTaskListGet,
} from './resources/taskListGet.operation';

const { description, execute } = createOperationDispatcher(
	'dedicatedServerOperation',
	'dedicatedServer',
	[
	{
		name: 'Auth Secret Get',
		value: 'authSecretGet',
		action: 'Retrieve authentication secret of a dedicated server',
		execute: executeAuthSecretGet,
		description: descriptionAuthSecretGet,
	},
	{
		name: 'Backup Cloud Delete',
		value: 'backupCloudDelete',
		action: 'Deactivate and remove cloud backup from a dedicated server (irreversible)',
		execute: executeBackupCloudDelete,
		description: descriptionBackupCloudDelete,
	},
	{
		name: 'Backup Cloud Get',
		value: 'backupCloudGet',
		action: 'Get cloud backup properties of a dedicated server',
		execute: executeBackupCloudGet,
		description: descriptionBackupCloudGet,
	},
	{
		name: 'Backup Cloud Offer Details Create',
		value: 'backupCloudOfferDetailsCreate',
		action: 'Activate cloud backup for a dedicated server',
		execute: executeBackupCloudOfferDetailsCreate,
		description: descriptionBackupCloudOfferDetailsCreate,
	},
	{
		name: 'Backup FTP Access List',
		value: 'backupFtpAccessListGet',
		action: 'List ACLs for FTP backup access control',
		execute: executeBackupFtpAccessListGet,
		description: descriptionBackupFtpAccessListGet,
	},
	{
		name: 'Backup FTP Access Post',
		value: 'backupFtpAccessPost',
		action: 'Add IP ACL rule to FTP backup access control of a dedicated server',
		execute: executeBackupFtpAccessPost,
		description: descriptionBackupFtpAccessPost,
	},
	{
		name: 'Backup FTP ACL Delete',
		value: 'backupFtpAccessDelete',
		action: 'Remove an IP block from the backup FTP ACL on a dedicated server',
		execute: executeBackupFtpAccessDelete,
		description: descriptionBackupFtpAccessDelete,
	},
	{
		name: 'Backup FTP ACL Edit',
		value: 'backupFtpAccessEditPut',
		action: 'Update protocol access permissions for an IP block in the backup FTP ACL of a dedicated server',
		execute: executeBackupFtpAccessEditPut,
		description: descriptionBackupFtpAccessEditPut,
	},
	{
		name: 'Backup FTP Delete',
		value: 'backupFtpDelete',
		action: 'Terminate FTP backup for a dedicated server (irreversible)',
		execute: executeBackupFtpDelete,
		description: descriptionBackupFtpDelete,
	},
	{
		name: 'Backup FTP Get',
		value: 'backupFtpGet',
		action: 'Get FTP backup properties of a dedicated server',
		execute: executeBackupFtpGet,
		description: descriptionBackupFtpGet,
	},
	{
		name: 'Backup FTP Password Update',
		value: 'backupFtpPasswordPost',
		action: 'Change the password for backup FTP on a dedicated server',
		execute: executeBackupFtpPasswordPost,
		description: descriptionBackupFtpPasswordPost,
	},
	{
		name: 'Backup FTP Post Create',
		value: 'backupFtpPost',
		action: 'Create FTP backup for a dedicated server (irreversible)',
		execute: executeBackupFtpPost,
		description: descriptionBackupFtpPost,
	},
	{
		name: 'Bandwidth Create',
		value: 'bandwidthCreatePost',
		action: 'Create bandwidth for a housing service',
		execute: executeBandwidthCreatePost,
		description: descriptionBandwidthCreatePost,
	},
	{
		name: 'Bandwidth Get',
		value: 'bandwidthGetGet',
		action: 'Get bandwidth details of a housing service',
		execute: executeBandwidthGetGet,
		description: descriptionBandwidthGetGet,
	},
	{
		name: 'Bandwidth vRack Create',
		value: 'bandwidthVrackCreatePost',
		action: 'Create vRack bandwidth for a housing service',
		execute: executeBandwidthVrackCreatePost,
		description: descriptionBandwidthVrackCreatePost,
	},
	{
		name: 'Bandwidth vRack Get',
		value: 'bandwidthVrackGetGet',
		action: 'Get vRack bandwidth details of a housing service',
		execute: executeBandwidthVrackGetGet,
		description: descriptionBandwidthVrackGetGet,
	},
	{
		name: 'BIOS Settings Get',
		value: 'biosSettingsGet',
		action: 'Get BIOS settings of a dedicated server',
		execute: executeBiosSettingsGet,
		description: descriptionBiosSettingsGet,
	},
	{
		name: 'BIOS SGX Configure Post',
		value: 'biosSgxConfigurePost',
		action: 'Configure BIOS SGX (PRMRR size and status) on a dedicated server (BETA)',
		execute: executeBiosSgxConfigurePost,
		description: descriptionBiosSgxConfigurePost,
	},
	{
		name: 'BIOS SGX Get',
		value: 'biosSgxGet',
		action: 'Get BIOS SGX parameters of a dedicated server',
		execute: executeBiosSgxGet,
		description: descriptionBiosSgxGet,
	},
	{
		name: 'Boot List',
		value: 'bootListGet',
		action: 'List compatible netboots for a dedicated server',
		execute: executeBootListGet,
		description: descriptionBootListGet,
	},
	{
		name: 'Burst Update',
		value: 'burstUpdate',
		action: 'Update over-provisioning configuration of a dedicated server',
		execute: executeBurstUpdate,
		description: descriptionBurstUpdate,
	},
	{
		name: 'Change Contact Create',
		value: 'changeContactCreate',
		action: 'Initiate contact change procedure for a dedicated server',
		execute: executeChangeContactCreate,
		description: descriptionChangeContactCreate,
	},
	{
		name: 'Cluster Delete',
		value: 'clusterDeleteDelete',
		action: 'Delete a cluster',
		execute: executeClusterDeleteDelete,
		description: descriptionClusterDeleteDelete,
	},
	{
		name: 'Cluster Get',
		value: 'clusterGetGet',
		action: 'Get details of a cluster',
		execute: executeClusterGetGet,
		description: descriptionClusterGetGet,
	},
	{
		name: 'Cluster List',
		value: 'clusterListGet',
		action: 'List clusters',
		execute: executeClusterListGet,
		description: descriptionClusterListGet,
	},
	{
		name: 'Cluster Update',
		value: 'clusterUpdatePut',
		action: 'Update a cluster',
		execute: executeClusterUpdatePut,
		description: descriptionClusterUpdatePut,
	},
	{
		name: 'Confirm Termination Create',
		value: 'confirmTerminationCreate',
		action: 'Confirm termination of a dedicated server (irreversible)',
		execute: executeConfirmTerminationCreate,
		description: descriptionConfirmTerminationCreate,
	},
	{
		name: 'Datacenter Availability List',
		value: 'datacenterAvailabilityList',
		action: 'List available datacenters for a dedicated server',
		execute: executeDatacenterAvailabilityList,
		description: descriptionDatacenterAvailabilityList,
	},
	{
		name: 'Firewall Get',
		value: 'firewallGet',
		action: 'Get firewall properties of a dedicated server',
		execute: executeFirewallGet,
		description: descriptionFirewallGet,
	},
	{
		name: 'Firewall Update',
		value: 'firewallUpdate',
		action: 'Modify firewall rules of a dedicated server',
		execute: executeFirewallUpdate,
		description: descriptionFirewallUpdate,
	},
	{
		name: 'Get Server Properties',
		value: 'get',
		action: 'Get properties of a dedicated server',
		execute: executeGet,
		description: descriptionGet,
		default: true,
	},
	{
		name: 'Get Task',
		value: 'taskDetailGet',
		action: 'Get details of a specific dedicated server task',
		execute: executeTaskDetailGet,
		description: descriptionTaskDetailGet,
	},
	{
		name: 'Housing Get',
		value: 'housingGetGet',
		action: 'Get details of a housing service',
		execute: executeHousingGetGet,
		description: descriptionHousingGetGet,
	},
	{
		name: 'Housing List',
		value: 'housingListGet',
		action: 'List housing services',
		execute: executeHousingListGet,
		description: descriptionHousingListGet,
	},
	{
		name: 'Housing Update',
		value: 'housingUpdatePut',
		action: 'Update a housing service',
		execute: executeHousingUpdatePut,
		description: descriptionHousingUpdatePut,
	},
	{
		name: 'Install Server',
		value: 'installPost',
		action: 'Install or reinstall an OS on a dedicated server',
		execute: executeInstallPost,
		description: descriptionInstallPost,
	},
	{
		name: 'IPMI Get',
		value: 'ipmiGet',
		action: 'Get IPMI info of a dedicated server',
		execute: executeIpmiGet,
		description: descriptionIpmiGet,
	},
	{
		name: 'List',
		value: 'list',
		action: 'List all dedicated servers',
		execute: executeList,
		description: descriptionList,
	},
	{
		name: 'List Tasks',
		value: 'taskListGet',
		action: 'List all tasks for a dedicated server',
		execute: executeTaskListGet,
		description: descriptionTaskListGet,
	},
	{
		name: 'Monitoring Get',
		value: 'monitoringGetGet',
		action: 'Get monitoring data of a dedicated server',
		execute: executeMonitoringGetGet,
		description: descriptionMonitoringGetGet,
	},
	{
		name: 'Monitoring Metric Get',
		value: 'monitoringMetricGetGet',
		action: 'Get monitoring metric data of a dedicated server',
		execute: executeMonitoringMetricGetGet,
		description: descriptionMonitoringMetricGetGet,
	},
	{
		name: 'Nasha Get',
		value: 'nashaGetGet',
		action: 'Get details of a Nasha (NAS) service',
		execute: executeNashaGetGet,
		description: descriptionNashaGetGet,
	},
	{
		name: 'Nasha List',
		value: 'nashaListGet',
		action: 'List Nasha (NAS) services',
		execute: executeNashaListGet,
		description: descriptionNashaListGet,
	},
	{
		name: 'Netboot Order Update',
		value: 'netbootOrderUpdate',
		action: 'Set netboot order for a dedicated server',
		execute: executeNetbootOrderPut,
		description: descriptionNetbootOrderPut,
	},
	{
		name: 'Node Delete',
		value: 'nodeDeleteDelete',
		action: 'Delete a cluster node',
		execute: executeNodeDeleteDelete,
		description: descriptionNodeDeleteDelete,
	},
	{
		name: 'Node Get',
		value: 'nodeGetGet',
		action: 'Get details of a cluster node',
		execute: executeNodeGetGet,
		description: descriptionNodeGetGet,
	},
	{
		name: 'Node List',
		value: 'nodeListGet',
		action: 'List nodes of a cluster',
		execute: executeNodeListGet,
		description: descriptionNodeListGet,
	},
	{
		name: 'Node Update',
		value: 'nodeUpdatePut',
		action: 'Update a cluster node',
		execute: executeNodeUpdatePut,
		description: descriptionNodeUpdatePut,
	},
	{
		name: 'Option Create',
		value: 'optionCreatePost',
		action: 'Add an option to a dedicated server',
		execute: executeOptionCreatePost,
		description: descriptionOptionCreatePost,
	},
	{
		name: 'Option Delete',
		value: 'optionDelete',
		action: 'Release an option from a dedicated server (irreversible)',
		execute: executeOptionDelete,
		description: descriptionOptionDelete,
	},
	{
		name: 'Option Get',
		value: 'optionGetGet',
		action: 'Get details of a dedicated server option',
		execute: executeOptionGetGet,
		description: descriptionOptionGetGet,
	},
	{
		name: 'Option List',
		value: 'optionListGet',
		action: 'List options of a dedicated server',
		execute: executeOptionListGet,
		description: descriptionOptionListGet,
	},
	{
		name: 'Raw Availability List',
		value: 'availabilityRawGet',
		action: 'List raw dedicated server availabilities',
		execute: executeAvailabilityRawGet,
		description: descriptionAvailabilityRawGet,
		show: false,
	},
	{
		name: 'Share Create',
		value: 'shareCreatePost',
		action: 'Create a share on a Nasha (NAS) service',
		execute: executeShareCreatePost,
		description: descriptionShareCreatePost,
	},
	{
		name: 'Share Delete',
		value: 'shareDeleteDelete',
		action: 'Delete a Nasha (NAS) share',
		execute: executeShareDeleteDelete,
		description: descriptionShareDeleteDelete,
	},
	{
		name: 'Share Get',
		value: 'shareGetGet',
		action: 'Get details of a Nasha (NAS) share',
		execute: executeShareGetGet,
		description: descriptionShareGetGet,
	},
	{
		name: 'Share List',
		value: 'shareListGet',
		action: 'List shares of a Nasha (NAS) service',
		execute: executeShareListGet,
		description: descriptionShareListGet,
	},
	{
		name: 'Share Update',
		value: 'shareUpdatePut',
		action: 'Update a Nasha (NAS) share',
		execute: executeShareUpdatePut,
		description: descriptionShareUpdatePut,
	},
	{
		name: 'Snapshot Create',
		value: 'snapshotCreatePost',
		action: 'Create a snapshot of a Nasha (NAS) service',
		execute: executeSnapshotCreatePost,
		description: descriptionSnapshotCreatePost,
	},
	{
		name: 'Snapshot Delete',
		value: 'snapshotDeleteDelete',
		action: 'Delete a Nasha (NAS) snapshot',
		execute: executeSnapshotDeleteDelete,
		description: descriptionSnapshotDeleteDelete,
	},
	{
		name: 'Snapshot Get',
		value: 'snapshotGetGet',
		action: 'Get details of a Nasha (NAS) snapshot',
		execute: executeSnapshotGetGet,
		description: descriptionSnapshotGetGet,
	},
	{
		name: 'Snapshot List',
		value: 'snapshotListGet',
		action: 'List snapshots of a Nasha (NAS) service',
		execute: executeSnapshotListGet,
		description: descriptionSnapshotListGet,
	},
	{
		name: 'Template Get',
		value: 'templateGetGet',
		action: 'Get details of an installation template',
		execute: executeTemplateGetGet,
		description: descriptionTemplateGetGet,
	},
	{
		name: 'Template List',
		value: 'templateListGet',
		action: 'List installation templates',
		execute: executeTemplateListGet,
		description: descriptionTemplateListGet,
	},
	],
);

export { description, execute };
