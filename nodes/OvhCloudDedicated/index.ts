import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { execute as executeList, description as descriptionList } from './resources/list.operation';
import { execute as executeGet, description as descriptionGet } from './resources/get.operation';
import {
	execute as executeAvailabilityRawGet,
	description as descriptionAvailabilityRawGet,
} from './resources/availabilityRawGet.operation';
import {
	execute as executeDatacenterAvailabilityList,
	description as descriptionDatacenterAvailabilityList,
} from './resources/datacenterAvailabilityList.operation';
import {
	execute as executeBiosSettingsGet,
	description as descriptionBiosSettingsGet,
} from './resources/biosSettingsGet.operation';
import {
	execute as executeAuthSecretGet,
	description as descriptionAuthSecretGet,
} from './resources/authSecretGet.operation';
import {
	execute as executeBackupCloudDelete,
	description as descriptionBackupCloudDelete,
} from './resources/backupCloudDelete.operation';
import {
	execute as executeBackupCloudGetByIdGet,
	description as descriptionBackupCloudGetByIdGet,
} from './resources/backupCloudGetByIdGet.operation';
import {
	execute as executeBurstUpdate,
	description as descriptionBurstUpdate,
} from './resources/burstUpdate.operation';
import {
	execute as executeChangeContactCreate,
	description as descriptionChangeContactCreate,
} from './resources/changeContactCreate.operation';
import {
	execute as executeConfirmTerminationCreate,
	description as descriptionConfirmTerminationCreate,
} from './resources/confirmTerminationCreate.operation';
import {
	execute as executeBackupCloudOfferDetailsCreate,
	description as descriptionBackupCloudOfferDetailsCreate,
} from './resources/backupCloudOfferDetailsCreate.operation';
import {
	execute as executeBiosSgxGet,
	description as descriptionBiosSgxGet,
} from './resources/biosSgxGet.operation';
import {
	execute as executeBootListGet,
	description as descriptionBootListGet,
} from './resources/bootListGet.operation';
import {
	execute as executeBackupCloudGet,
	description as descriptionBackupCloudGet,
} from './resources/backupCloudGet.operation';
import {
	execute as executeBackupFtpPost,
	description as descriptionBackupFtpPost,
} from './resources/backupFtpPost.operation';
import {
	execute as executeBackupFtpGet,
	description as descriptionBackupFtpGet,
} from './resources/backupFtpGet.operation';
import {
	execute as executeBackupFtpDelete,
	description as descriptionBackupFtpDelete,
} from './resources/backupFtpDelete.operation';
import {
	execute as executeBackupFtpAccessListGet,
	description as descriptionBackupFtpAccessListGet,
} from './resources/backupFtpAccessListGet.operation';
import {
	execute as executeBackupFtpAccessPost,
	description as descriptionBackupFtpAccessPost,
} from './resources/backupFtpAccessPost.operation';
import {
	execute as executeBackupFtpAccessDelete,
	description as descriptionBackupFtpAccessDelete,
} from './resources/backupFtpAccessDelete.operation';
import {
	execute as executeBackupFtpAccessEditPut,
	description as descriptionBackupFtpAccessEditPut,
} from './resources/backupFtpAccessEditPut.operation';
import {
	execute as executeBackupFtpPasswordPost,
	description as descriptionBackupFtpPasswordPost,
} from './resources/backupFtpPasswordPost.operation';
import {
	execute as executeBiosSgxConfigurePost,
	description as descriptionBiosSgxConfigurePost,
} from './resources/biosSgxConfigurePost.operation';
import {
	execute as executeFirewallGet,
	description as descriptionFirewallGet,
} from './resources/firewallGet.operation';
import {
	execute as executeFirewallUpdate,
	description as descriptionFirewallUpdate,
} from './resources/firewallUpdate.operation';
import {
	execute as executeIpmiGet,
	description as descriptionIpmiGet,
} from './resources/ipmiGet.operation';
import {
	execute as executeOptionDelete,
	description as descriptionOptionDelete,
} from './resources/optionDelete.operation';
import {
	execute as executeServerUpdate,
	description as descriptionServerUpdate,
} from './resources/serverUpdate.operation';
import {
	execute as executeNetbootOrderPut,
	description as descriptionNetbootOrderPut,
} from './resources/netbootOrderPut.operation';
import {
	execute as executeTaskListGet,
	description as descriptionTaskListGet,
} from './resources/taskListGet.operation';
import {
	execute as executeTaskDetailGet,
	description as descriptionTaskDetailGet,
} from './resources/taskDetailGet.operation';

// Ceph (Nasha) operations
import {
	execute as executeNashaListGet,
	description as descriptionNashaListGet,
} from './resources/ceph/nashaListGet.operation';
import {
	execute as executeNashaGetGet,
	description as descriptionNashaGetGet,
} from './resources/ceph/nashaGetGet.operation';
import {
	execute as executeSnapshotListGet,
	description as descriptionSnapshotListGet,
} from './resources/ceph/snapshotListGet.operation';
import {
	execute as executeSnapshotCreatePost,
	description as descriptionSnapshotCreatePost,
} from './resources/ceph/snapshotCreatePost.operation';
import {
	execute as executeSnapshotGetGet,
	description as descriptionSnapshotGetGet,
} from './resources/ceph/snapshotGetGet.operation';
import {
	execute as executeSnapshotDeleteDelete,
	description as descriptionSnapshotDeleteDelete,
} from './resources/ceph/snapshotDeleteDelete.operation';
import {
	execute as executeShareListGet,
	description as descriptionShareListGet,
} from './resources/ceph/shareListGet.operation';
import {
	execute as executeShareCreatePost,
	description as descriptionShareCreatePost,
} from './resources/ceph/shareCreatePost.operation';
import {
	execute as executeShareGetGet,
	description as descriptionShareGetGet,
} from './resources/ceph/shareGetGet.operation';
import {
	execute as executeShareUpdatePut,
	description as descriptionShareUpdatePut,
} from './resources/ceph/shareUpdatePut.operation';
import {
	execute as executeShareDeleteDelete,
	description as descriptionShareDeleteDelete,
} from './resources/ceph/shareDeleteDelete.operation';

// Cluster operations
import {
	execute as executeClusterListGet,
	description as descriptionClusterListGet,
} from './resources/cluster/clusterListGet.operation';
import {
	execute as executeClusterGetGet,
	description as descriptionClusterGetGet,
} from './resources/cluster/clusterGetGet.operation';
import {
	execute as executeClusterUpdatePut,
	description as descriptionClusterUpdatePut,
} from './resources/cluster/clusterUpdatePut.operation';
import {
	execute as executeClusterDeleteDelete,
	description as descriptionClusterDeleteDelete,
} from './resources/cluster/clusterDeleteDelete.operation';
import {
	execute as executeNodeListGet,
	description as descriptionNodeListGet,
} from './resources/cluster/nodeListGet.operation';
import {
	execute as executeNodeGetGet,
	description as descriptionNodeGetGet,
} from './resources/cluster/nodeGetGet.operation';
import {
	execute as executeNodeUpdatePut,
	description as descriptionNodeUpdatePut,
} from './resources/cluster/nodeUpdatePut.operation';
import {
	execute as executeNodeDeleteDelete,
	description as descriptionNodeDeleteDelete,
} from './resources/cluster/nodeDeleteDelete.operation';

// Housing operations
import {
	execute as executeHousingListGet,
	description as descriptionHousingListGet,
} from './resources/housing/housingListGet.operation';
import {
	execute as executeHousingGetGet,
	description as descriptionHousingGetGet,
} from './resources/housing/housingGetGet.operation';
import {
	execute as executeHousingUpdatePut,
	description as descriptionHousingUpdatePut,
} from './resources/housing/housingUpdatePut.operation';
import {
	execute as executeBandwidthGetGet,
	description as descriptionBandwidthGetGet,
} from './resources/housing/bandwidthGetGet.operation';
import {
	execute as executeBandwidthCreatePost,
	description as descriptionBandwidthCreatePost,
} from './resources/housing/bandwidthCreatePost.operation';
import {
	execute as executeBandwidthVrackGetGet,
	description as descriptionBandwidthVrackGetGet,
} from './resources/housing/bandwidthVrackGetGet.operation';
import {
	execute as executeBandwidthVrackCreatePost,
	description as descriptionBandwidthVrackCreatePost,
} from './resources/housing/bandwidthVrackCreatePost.operation';

// Installation Template operations
import {
	execute as executeTemplateListGet,
	description as descriptionTemplateListGet,
} from './resources/installation/templateListGet.operation';
import {
	execute as executeTemplateGetGet,
	description as descriptionTemplateGetGet,
} from './resources/installation/templateGetGet.operation';
import {
	execute as executeInstallPost,
	description as descriptionInstallPost,
} from './resources/installation/installPost.operation';

// Option operations (list, get, create)
import {
	execute as executeOptionListGet,
	description as descriptionOptionListGet,
} from './resources/option/optionListGet.operation';
import {
	execute as executeOptionGetGet,
	description as descriptionOptionGetGet,
} from './resources/option/optionGetGet.operation';
import {
	execute as executeOptionCreatePost,
	description as descriptionOptionCreatePost,
} from './resources/option/optionCreatePost.operation';

// Monitoring operations
import {
	execute as executeMonitoringGetGet,
	description as descriptionMonitoringGetGet,
} from './resources/monitoring/monitoringGetGet.operation';
import {
	execute as executeMonitoringMetricGetGet,
	description as descriptionMonitoringMetricGetGet,
} from './resources/monitoring/monitoringMetricGetGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedServerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Auth Secret Get',
					value: 'authSecretGet',
					action: 'Retrieve authentication secret of a dedicated server',
				},
				{
					name: 'Backup Cloud Delete',
					value: 'backupCloudDelete',
					action: 'Deactivate and remove cloud backup from a dedicated server (irreversible)',
				},
				{
					name: 'Backup Cloud Get',
					value: 'backupCloudGet',
					action: 'Get cloud backup properties of a dedicated server',
				},
				{
					name: 'Backup Cloud Offer Details Create',
					value: 'backupCloudOfferDetailsCreate',
					action: 'Activate cloud backup for a dedicated server',
				},
				{
					name: 'Backup FTP Access List',
					value: 'backupFtpAccessListGet',
					action: 'List ACLs for FTP backup access control',
				},
				{
					name: 'Backup FTP Access Post',
					value: 'backupFtpAccessPost',
					action: 'Add IP ACL rule to FTP backup access control of a dedicated server',
				},
				{
					name: 'Backup FTP ACL Delete',
					value: 'backupFtpAccessDelete',
					action: 'Remove an IP block from the backup FTP ACL on a dedicated server',
				},
				{
					name: 'Backup FTP ACL Edit',
					value: 'backupFtpAccessEditPut',
					action:
						'Update protocol access permissions for an IP block in the backup FTP ACL of a dedicated server',
				},
				{
					name: 'Backup FTP Delete',
					value: 'backupFtpDelete',
					action: 'Terminate FTP backup for a dedicated server (irreversible)',
				},
				{
					name: 'Backup FTP Get',
					value: 'backupFtpGet',
					action: 'Get FTP backup properties of a dedicated server',
				},
				{
					name: 'Backup FTP Password Update',
					value: 'backupFtpPasswordPost',
					action: 'Change the password for backup FTP on a dedicated server',
				},
				{
					name: 'Backup FTP Post Create',
					value: 'backupFtpPost',
					action: 'Create FTP backup for a dedicated server (irreversible)',
				},
				{
					name: 'Bandwidth Create',
					value: 'bandwidthCreatePost',
					action: 'Create bandwidth for a housing service',
				},
				{
					name: 'Bandwidth Get',
					value: 'bandwidthGetGet',
					action: 'Get bandwidth details of a housing service',
				},
				{
					name: 'Bandwidth vRack Create',
					value: 'bandwidthVrackCreatePost',
					action: 'Create vRack bandwidth for a housing service',
				},
				{
					name: 'Bandwidth vRack Get',
					value: 'bandwidthVrackGetGet',
					action: 'Get vRack bandwidth details of a housing service',
				},
				{
					name: 'BIOS Settings Get',
					value: 'biosSettingsGet',
					action: 'Get BIOS settings of a dedicated server',
				},
				{
					name: 'BIOS SGX Configure Post',
					value: 'biosSgxConfigurePost',
					action: 'Configure BIOS SGX (PRMRR size and status) on a dedicated server (BETA)',
				},
				{
					name: 'BIOS SGX Get',
					value: 'biosSgxGet',
					action: 'Get BIOS SGX parameters of a dedicated server',
				},
				{
					name: 'Boot List',
					value: 'bootListGet',
					action: 'List compatible netboots for a dedicated server',
				},
				{
					name: 'Burst Update',
					value: 'burstUpdate',
					action: 'Update over-provisioning configuration of a dedicated server',
				},
				{
					name: 'Change Contact Create',
					value: 'changeContactCreate',
					action: 'Initiate contact change procedure for a dedicated server',
				},
				{
					name: 'Cluster Delete',
					value: 'clusterDeleteDelete',
					action: 'Delete a cluster',
				},
				{
					name: 'Cluster Get',
					value: 'clusterGetGet',
					action: 'Get details of a cluster',
				},
				{
					name: 'Cluster List',
					value: 'clusterListGet',
					action: 'List clusters',
				},
				{
					name: 'Cluster Update',
					value: 'clusterUpdatePut',
					action: 'Update a cluster',
				},
				{
					name: 'Confirm Termination Create',
					value: 'confirmTerminationCreate',
					action: 'Confirm termination of a dedicated server (irreversible)',
				},
				{
					name: 'Datacenter Availability List',
					value: 'datacenterAvailabilityList',
					action: 'List available datacenters for a dedicated server',
				},
				{
					name: 'Firewall Get',
					value: 'firewallGet',
					action: 'Get firewall properties of a dedicated server',
				},
				{
					name: 'Firewall Update',
					value: 'firewallUpdate',
					action: 'Modify firewall rules of a dedicated server',
				},
				{
					name: 'Get Server Properties',
					value: 'get',
					action: 'Get properties of a dedicated server',
				},
				{
					name: 'Get Task',
					value: 'taskDetailGet',
					action: 'Get details of a specific dedicated server task',
				},
				{
					name: 'Housing Get',
					value: 'housingGetGet',
					action: 'Get details of a housing service',
				},
				{
					name: 'Housing List',
					value: 'housingListGet',
					action: 'List housing services',
				},
				{
					name: 'Housing Update',
					value: 'housingUpdatePut',
					action: 'Update a housing service',
				},
				{
					name: 'Install Server',
					value: 'installPost',
					action: 'Install or reinstall an OS on a dedicated server',
				},
				{ name: 'IPMI Get', value: 'ipmiGet', action: 'Get IPMI info of a dedicated server' },
				{
					name: 'List',
					value: 'list',
					action: 'List all dedicated servers',
				},
				{
					name: 'List Tasks',
					value: 'taskListGet',
					action: 'List all tasks for a dedicated server',
				},
				{
					name: 'Monitoring Get',
					value: 'monitoringGetGet',
					action: 'Get monitoring data of a dedicated server',
				},
				{
					name: 'Monitoring Metric Get',
					value: 'monitoringMetricGetGet',
					action: 'Get monitoring metric data of a dedicated server',
				},
				{
					name: 'Nasha Get',
					value: 'nashaGetGet',
					action: 'Get details of a Nasha (NAS) service',
				},
				{
					name: 'Nasha List',
					value: 'nashaListGet',
					action: 'List Nasha (NAS) services',
				},
				{
					name: 'Netboot Order Update',
					value: 'netbootOrderUpdate',
					action: 'Set netboot order for a dedicated server',
				},
				{
					name: 'Node Delete',
					value: 'nodeDeleteDelete',
					action: 'Delete a cluster node',
				},
				{
					name: 'Node Get',
					value: 'nodeGetGet',
					action: 'Get details of a cluster node',
				},
				{
					name: 'Node List',
					value: 'nodeListGet',
					action: 'List nodes of a cluster',
				},
				{
					name: 'Node Update',
					value: 'nodeUpdatePut',
					action: 'Update a cluster node',
				},
				{
					name: 'Option Create',
					value: 'optionCreatePost',
					action: 'Add an option to a dedicated server',
				},
				{
					name: 'Option Delete',
					value: 'optionDelete',
					action: 'Release an option from a dedicated server (irreversible)',
				},
				{
					name: 'Option Get',
					value: 'optionGetGet',
					action: 'Get details of a dedicated server option',
				},
				{
					name: 'Option List',
					value: 'optionListGet',
					action: 'List options of a dedicated server',
				},
				{
					name: 'Raw Availability List',
					value: 'availabilityRawGet',
					action: 'List raw dedicated server availabilities',
				},
				{
					name: 'Server Update',
					value: 'serverUpdate',
					action: "Modify a dedicated server's name and/or status",
				},
				{
					name: 'Share Create',
					value: 'shareCreatePost',
					action: 'Create a share on a Nasha (NAS) service',
				},
				{
					name: 'Share Delete',
					value: 'shareDeleteDelete',
					action: 'Delete a Nasha (NAS) share',
				},
				{
					name: 'Share Get',
					value: 'shareGetGet',
					action: 'Get details of a Nasha (NAS) share',
				},
				{
					name: 'Share List',
					value: 'shareListGet',
					action: 'List shares of a Nasha (NAS) service',
				},
				{
					name: 'Share Update',
					value: 'shareUpdatePut',
					action: 'Update a Nasha (NAS) share',
				},
				{
					name: 'Snapshot Create',
					value: 'snapshotCreatePost',
					action: 'Create a snapshot of a Nasha (NAS) service',
				},
				{
					name: 'Snapshot Delete',
					value: 'snapshotDeleteDelete',
					action: 'Delete a Nasha (NAS) snapshot',
				},
				{
					name: 'Snapshot Get',
					value: 'snapshotGetGet',
					action: 'Get details of a Nasha (NAS) snapshot',
				},
				{
					name: 'Snapshot List',
					value: 'snapshotListGet',
					action: 'List snapshots of a Nasha (NAS) service',
				},
				{
					name: 'Template Get',
					value: 'templateGetGet',
					action: 'Get details of an installation template',
				},
				{
					name: 'Template List',
					value: 'templateListGet',
					action: 'List installation templates',
				},
			],
			default: 'get',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionList({
			...displayOptions,
			show: { dedicatedServerOperation: ['list'] },
		}) as INodeProperties[]),
		...(descriptionGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['get'] },
		}) as INodeProperties[]),
		...(descriptionAuthSecretGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['authSecretGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudGetByIdGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudGetByIdGet'] },
		}) as INodeProperties[]),
		...(descriptionBurstUpdate({
			...displayOptions,
			show: { dedicatedServerOperation: ['burstUpdate'] },
		}) as INodeProperties[]),
		...(descriptionChangeContactCreate({
			...displayOptions,
			show: { dedicatedServerOperation: ['changeContactCreate'] },
		}) as INodeProperties[]),
		...(descriptionConfirmTerminationCreate({
			...displayOptions,
			show: { dedicatedServerOperation: ['confirmTerminationCreate'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudOfferDetailsCreate({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudOfferDetailsCreate'] },
		}) as INodeProperties[]),
		...(descriptionAvailabilityRawGet() as INodeProperties[]),
		...(descriptionDatacenterAvailabilityList({
			...displayOptions,
			show: { dedicatedServerOperation: ['datacenterAvailabilityList'] },
		}) as INodeProperties[]),
		...(descriptionBiosSettingsGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['biosSettingsGet'] },
		}) as INodeProperties[]),
		...(descriptionBiosSgxGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['biosSgxGet'] },
		}) as INodeProperties[]),
		...(descriptionBiosSgxConfigurePost({
			...displayOptions,
			show: { dedicatedServerOperation: ['biosSgxConfigurePost'] },
		}) as INodeProperties[]),
		...(descriptionBootListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['bootListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupCloudGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupCloudGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpPost({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpPost'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessPost({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessPost'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpAccessEditPut({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpAccessEditPut'] },
		}) as INodeProperties[]),
		...(descriptionBackupFtpPasswordPost({
			...displayOptions,
			show: { dedicatedServerOperation: ['backupFtpPasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionFirewallGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['firewallGet'] },
		}) as INodeProperties[]),
		...(descriptionFirewallUpdate({
			...displayOptions,
			show: { dedicatedServerOperation: ['firewallUpdate'] },
		}) as INodeProperties[]),
		...(descriptionIpmiGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['ipmiGet'] },
		}) as INodeProperties[]),
		...(descriptionOptionDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['optionDelete'] },
		}) as INodeProperties[]),
		...(descriptionServerUpdate({
			...displayOptions,
			show: { dedicatedServerOperation: ['serverUpdate'] },
		}) as INodeProperties[]),
		...(descriptionNetbootOrderPut({
			...displayOptions,
			show: { dedicatedServerOperation: ['netbootOrderUpdate'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['taskListGet'] },
		}) as INodeProperties[]),
		...(descriptionTaskDetailGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['taskDetailGet'] },
		}) as INodeProperties[]),
		// Ceph (Nasha) displayOptions
		...(descriptionNashaListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['nashaListGet'] },
		}) as INodeProperties[]),
		...(descriptionNashaGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['nashaGetGet'] },
		}) as INodeProperties[]),
		...(descriptionSnapshotListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['snapshotListGet'] },
		}) as INodeProperties[]),
		...(descriptionSnapshotCreatePost({
			...displayOptions,
			show: { dedicatedServerOperation: ['snapshotCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionSnapshotGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['snapshotGetGet'] },
		}) as INodeProperties[]),
		...(descriptionSnapshotDeleteDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['snapshotDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionShareListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['shareListGet'] },
		}) as INodeProperties[]),
		...(descriptionShareCreatePost({
			...displayOptions,
			show: { dedicatedServerOperation: ['shareCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionShareGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['shareGetGet'] },
		}) as INodeProperties[]),
		...(descriptionShareUpdatePut({
			...displayOptions,
			show: { dedicatedServerOperation: ['shareUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionShareDeleteDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['shareDeleteDelete'] },
		}) as INodeProperties[]),
		// Cluster displayOptions
		...(descriptionClusterListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['clusterListGet'] },
		}) as INodeProperties[]),
		...(descriptionClusterGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['clusterGetGet'] },
		}) as INodeProperties[]),
		...(descriptionClusterUpdatePut({
			...displayOptions,
			show: { dedicatedServerOperation: ['clusterUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionClusterDeleteDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['clusterDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionNodeListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['nodeListGet'] },
		}) as INodeProperties[]),
		...(descriptionNodeGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['nodeGetGet'] },
		}) as INodeProperties[]),
		...(descriptionNodeUpdatePut({
			...displayOptions,
			show: { dedicatedServerOperation: ['nodeUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionNodeDeleteDelete({
			...displayOptions,
			show: { dedicatedServerOperation: ['nodeDeleteDelete'] },
		}) as INodeProperties[]),
		// Housing displayOptions
		...(descriptionHousingListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['housingListGet'] },
		}) as INodeProperties[]),
		...(descriptionHousingGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['housingGetGet'] },
		}) as INodeProperties[]),
		...(descriptionHousingUpdatePut({
			...displayOptions,
			show: { dedicatedServerOperation: ['housingUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionBandwidthGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['bandwidthGetGet'] },
		}) as INodeProperties[]),
		...(descriptionBandwidthCreatePost({
			...displayOptions,
			show: { dedicatedServerOperation: ['bandwidthCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionBandwidthVrackGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['bandwidthVrackGetGet'] },
		}) as INodeProperties[]),
		...(descriptionBandwidthVrackCreatePost({
			...displayOptions,
			show: { dedicatedServerOperation: ['bandwidthVrackCreatePost'] },
		}) as INodeProperties[]),
		// Installation Template displayOptions
		...(descriptionTemplateListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['templateListGet'] },
		}) as INodeProperties[]),
		...(descriptionTemplateGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['templateGetGet'] },
		}) as INodeProperties[]),
		...(descriptionInstallPost({
			...displayOptions,
			show: { dedicatedServerOperation: ['installPost'] },
		}) as INodeProperties[]),
		// Option displayOptions
		...(descriptionOptionListGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['optionListGet'] },
		}) as INodeProperties[]),
		...(descriptionOptionGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['optionGetGet'] },
		}) as INodeProperties[]),
		...(descriptionOptionCreatePost({
			...displayOptions,
			show: { dedicatedServerOperation: ['optionCreatePost'] },
		}) as INodeProperties[]),
		// Monitoring displayOptions
		...(descriptionMonitoringGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['monitoringGetGet'] },
		}) as INodeProperties[]),
		...(descriptionMonitoringMetricGetGet({
			...displayOptions,
			show: { dedicatedServerOperation: ['monitoringMetricGetGet'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedServerOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return executeList.call(this, itemIndex ?? 0);
		case 'get':
			return executeGet.call(this, itemIndex ?? 0);
		case 'authSecretGet':
			return executeAuthSecretGet.call(this, itemIndex ?? 0);
		case 'backupCloudDelete':
			return executeBackupCloudDelete.call(this, itemIndex ?? 0);
		case 'backupCloudGetByIdGet':
			return executeBackupCloudGetByIdGet.call(this, itemIndex ?? 0);
		case 'burstUpdate':
			return executeBurstUpdate.call(this, itemIndex ?? 0);
		case 'changeContactCreate':
			return executeChangeContactCreate.call(this, itemIndex ?? 0);
		case 'confirmTerminationCreate':
			return executeConfirmTerminationCreate.call(this, itemIndex ?? 0);
		case 'backupCloudOfferDetailsCreate':
			return executeBackupCloudOfferDetailsCreate.call(this, itemIndex ?? 0);
		case 'availabilityRawGet':
			return executeAvailabilityRawGet.call(this, itemIndex ?? 0);
		case 'datacenterAvailabilityList':
			return executeDatacenterAvailabilityList.call(this, itemIndex ?? 0);
		case 'biosSettingsGet':
			return executeBiosSettingsGet.call(this, itemIndex ?? 0);
		case 'biosSgxGet':
			return executeBiosSgxGet.call(this, itemIndex ?? 0);
		case 'biosSgxConfigurePost':
			return executeBiosSgxConfigurePost.call(this, itemIndex ?? 0);
		case 'bootListGet':
			return executeBootListGet.call(this, itemIndex ?? 0);
		case 'backupCloudGet':
			return executeBackupCloudGet.call(this, itemIndex ?? 0);
		case 'backupFtpPost':
			return executeBackupFtpPost.call(this, itemIndex ?? 0);
		case 'backupFtpDelete':
			return executeBackupFtpDelete.call(this, itemIndex ?? 0);
		case 'backupFtpGet':
			return executeBackupFtpGet.call(this, itemIndex ?? 0);
		case 'backupFtpAccessListGet':
			return executeBackupFtpAccessListGet.call(this, itemIndex ?? 0);
		case 'backupFtpAccessPost':
			return executeBackupFtpAccessPost.call(this, itemIndex ?? 0);
		case 'backupFtpAccessDelete':
			return executeBackupFtpAccessDelete.call(this, itemIndex ?? 0);
		case 'backupFtpAccessEditPut':
			return executeBackupFtpAccessEditPut.call(this, itemIndex ?? 0);
		case 'backupFtpPasswordPost':
			return executeBackupFtpPasswordPost.call(this, itemIndex ?? 0);
		case 'firewallGet':
			return executeFirewallGet.call(this, itemIndex ?? 0);
		case 'firewallUpdate':
			return executeFirewallUpdate.call(this, itemIndex ?? 0);
		case 'ipmiGet':
			return executeIpmiGet.call(this, itemIndex ?? 0);
		case 'optionDelete':
			return executeOptionDelete.call(this, itemIndex ?? 0);
		case 'serverUpdate':
			return executeServerUpdate.call(this, itemIndex ?? 0);
		case 'netbootOrderUpdate':
			return executeNetbootOrderPut.call(this, itemIndex ?? 0);
		case 'taskListGet':
			return executeTaskListGet.call(this, itemIndex ?? 0);
		case 'taskDetailGet':
			return executeTaskDetailGet.call(this, itemIndex ?? 0);
		// Ceph (Nasha) operations
		case 'nashaListGet':
			return executeNashaListGet.call(this, itemIndex ?? 0);
		case 'nashaGetGet':
			return executeNashaGetGet.call(this, itemIndex ?? 0);
		case 'snapshotListGet':
			return executeSnapshotListGet.call(this, itemIndex ?? 0);
		case 'snapshotCreatePost':
			return executeSnapshotCreatePost.call(this, itemIndex ?? 0);
		case 'snapshotGetGet':
			return executeSnapshotGetGet.call(this, itemIndex ?? 0);
		case 'snapshotDeleteDelete':
			return executeSnapshotDeleteDelete.call(this, itemIndex ?? 0);
		case 'shareListGet':
			return executeShareListGet.call(this, itemIndex ?? 0);
		case 'shareCreatePost':
			return executeShareCreatePost.call(this, itemIndex ?? 0);
		case 'shareGetGet':
			return executeShareGetGet.call(this, itemIndex ?? 0);
		case 'shareUpdatePut':
			return executeShareUpdatePut.call(this, itemIndex ?? 0);
		case 'shareDeleteDelete':
			return executeShareDeleteDelete.call(this, itemIndex ?? 0);
		// Cluster operations
		case 'clusterListGet':
			return executeClusterListGet.call(this, itemIndex ?? 0);
		case 'clusterGetGet':
			return executeClusterGetGet.call(this, itemIndex ?? 0);
		case 'clusterUpdatePut':
			return executeClusterUpdatePut.call(this, itemIndex ?? 0);
		case 'clusterDeleteDelete':
			return executeClusterDeleteDelete.call(this, itemIndex ?? 0);
		case 'nodeListGet':
			return executeNodeListGet.call(this, itemIndex ?? 0);
		case 'nodeGetGet':
			return executeNodeGetGet.call(this, itemIndex ?? 0);
		case 'nodeUpdatePut':
			return executeNodeUpdatePut.call(this, itemIndex ?? 0);
		case 'nodeDeleteDelete':
			return executeNodeDeleteDelete.call(this, itemIndex ?? 0);
		// Housing operations
		case 'housingListGet':
			return executeHousingListGet.call(this, itemIndex ?? 0);
		case 'housingGetGet':
			return executeHousingGetGet.call(this, itemIndex ?? 0);
		case 'housingUpdatePut':
			return executeHousingUpdatePut.call(this, itemIndex ?? 0);
		case 'bandwidthGetGet':
			return executeBandwidthGetGet.call(this, itemIndex ?? 0);
		case 'bandwidthCreatePost':
			return executeBandwidthCreatePost.call(this, itemIndex ?? 0);
		case 'bandwidthVrackGetGet':
			return executeBandwidthVrackGetGet.call(this, itemIndex ?? 0);
		case 'bandwidthVrackCreatePost':
			return executeBandwidthVrackCreatePost.call(this, itemIndex ?? 0);
		// Installation Template operations
		case 'templateListGet':
			return executeTemplateListGet.call(this, itemIndex ?? 0);
		case 'templateGetGet':
			return executeTemplateGetGet.call(this, itemIndex ?? 0);
		case 'installPost':
			return executeInstallPost.call(this, itemIndex ?? 0);
		// Option operations
		case 'optionListGet':
			return executeOptionListGet.call(this, itemIndex ?? 0);
		case 'optionGetGet':
			return executeOptionGetGet.call(this, itemIndex ?? 0);
		case 'optionCreatePost':
			return executeOptionCreatePost.call(this, itemIndex ?? 0);
		// Monitoring operations
		case 'monitoringGetGet':
			return executeMonitoringGetGet.call(this, itemIndex ?? 0);
		case 'monitoringMetricGetGet':
			return executeMonitoringMetricGetGet.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedServer"`);
}
