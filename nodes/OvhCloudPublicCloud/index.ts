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
	description as redisBackupCreatePostDescription,
	execute as redisBackupCreatePostExecute,
} from './database/redis/backupCreatePost.operation';

import {
	description as redisBackupGetGetDescription,
	execute as redisBackupGetGetExecute,
} from './database/redis/backupGetGet.operation';

import {
	description as redisBackupDeleteDeleteDescription,
	execute as redisBackupDeleteDeleteExecute,
} from './database/redis/backupDeleteDelete.operation';

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
	description as redisNodeListGetDescription,
	execute as redisNodeListGetExecute,
} from './database/redis/nodeListGet.operation';

import {
	description as redisNodeCreatePostDescription,
	execute as redisNodeCreatePostExecute,
} from './database/redis/nodeCreatePost.operation';

import {
	description as redisNodeGetGetDescription,
	execute as redisNodeGetGetExecute,
} from './database/redis/nodeGetGet.operation';

import {
	description as redisNodeUpdatePutDescription,
	execute as redisNodeUpdatePutExecute,
} from './database/redis/nodeUpdatePut.operation';

import {
	description as redisNodeDeleteDeleteDescription,
	execute as redisNodeDeleteDeleteExecute,
} from './database/redis/nodeDeleteDelete.operation';

import {
	description as redisIpRestrictionListGetDescription,
	execute as redisIpRestrictionListGetExecute,
} from './database/redis/ipRestrictionListGet.operation';

import {
	description as redisIpRestrictionCreatePostDescription,
	execute as redisIpRestrictionCreatePostExecute,
} from './database/redis/ipRestrictionCreatePost.operation';

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
	description as redisMaintenanceGetDescription,
	execute as redisMaintenanceGetExecute,
} from './database/redis/maintenanceGet.operation';

import {
	description as redisMaintenanceUpdatePutDescription,
	execute as redisMaintenanceUpdatePutExecute,
} from './database/redis/maintenanceUpdatePut.operation';

import {
	description as redisMetricGetDescription,
	execute as redisMetricGetExecute,
} from './database/redis/metricGet.operation';

import {
	description as redisPrometheusGetDescription,
	execute as redisPrometheusGetExecute,
} from './database/redis/prometheusGet.operation';

import {
	description as redisCertificateListGetDescription,
	execute as redisCertificateListGetExecute,
} from './database/redis/certificateListGet.operation';

import {
	description as redisCertificateCreatePostDescription,
	execute as redisCertificateCreatePostExecute,
} from './database/redis/certificateCreatePost.operation';

import {
	description as redisIntegrationListGetDescription,
	execute as redisIntegrationListGetExecute,
} from './database/redis/integrationListGet.operation';

import {
	description as redisIntegrationCreatePostDescription,
	execute as redisIntegrationCreatePostExecute,
} from './database/redis/integrationCreatePost.operation';

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
	description as valkeyBackupCreatePostDescription,
	execute as valkeyBackupCreatePostExecute,
} from './database/valkey/backupCreatePost.operation';

import {
	description as valkeyBackupGetGetDescription,
	execute as valkeyBackupGetGetExecute,
} from './database/valkey/backupGetGet.operation';

import {
	description as valkeyBackupDeleteDeleteDescription,
	execute as valkeyBackupDeleteDeleteExecute,
} from './database/valkey/backupDeleteDelete.operation';

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
	description as valkeyNodeCreatePostDescription,
	execute as valkeyNodeCreatePostExecute,
} from './database/valkey/nodeCreatePost.operation';

import {
	description as valkeyNodeGetGetDescription,
	execute as valkeyNodeGetGetExecute,
} from './database/valkey/nodeGetGet.operation';

import {
	description as valkeyNodeUpdatePutDescription,
	execute as valkeyNodeUpdatePutExecute,
} from './database/valkey/nodeUpdatePut.operation';

import {
	description as valkeyNodeDeleteDeleteDescription,
	execute as valkeyNodeDeleteDeleteExecute,
} from './database/valkey/nodeDeleteDelete.operation';

import {
	description as valkeyIpRestrictionListGetDescription,
	execute as valkeyIpRestrictionListGetExecute,
} from './database/valkey/ipRestrictionListGet.operation';

import {
	description as valkeyIpRestrictionCreatePostDescription,
	execute as valkeyIpRestrictionCreatePostExecute,
} from './database/valkey/ipRestrictionCreatePost.operation';

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
	description as valkeyMaintenanceUpdatePutDescription,
	execute as valkeyMaintenanceUpdatePutExecute,
} from './database/valkey/maintenanceUpdatePut.operation';

import {
	description as valkeyMetricGetDescription,
	execute as valkeyMetricGetExecute,
} from './database/valkey/metricGet.operation';

import {
	description as valkeyPrometheusGetDescription,
	execute as valkeyPrometheusGetExecute,
} from './database/valkey/prometheusGet.operation';

import {
	description as valkeyCertificateListGetDescription,
	execute as valkeyCertificateListGetExecute,
} from './database/valkey/certificateListGet.operation';

import {
	description as valkeyCertificateCreatePostDescription,
	execute as valkeyCertificateCreatePostExecute,
} from './database/valkey/certificateCreatePost.operation';

import {
	description as valkeyIntegrationListGetDescription,
	execute as valkeyIntegrationListGetExecute,
} from './database/valkey/integrationListGet.operation';

import {
	description as valkeyIntegrationCreatePostDescription,
	execute as valkeyIntegrationCreatePostExecute,
} from './database/valkey/integrationCreatePost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Operation',
		name: 'publicCloudOperation',
		type: 'options',
		noDataExpression: true,
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
				name: 'clusterListGet',
				value: 'redisClusterListGet',
				action: 'List Redis clusters in a project',
			},
			{
				name: 'clusterGetGet',
				value: 'redisClusterGetGet',
				action: 'Get Redis cluster',
			},
			{
				name: 'clusterCreatePost',
				value: 'redisClusterCreatePost',
				action: 'Create Redis cluster',
			},
			{
				name: 'clusterUpdatePut',
				value: 'redisClusterUpdatePut',
				action: 'Update Redis cluster',
			},
			{
				name: 'clusterDeleteDelete',
				value: 'redisClusterDeleteDelete',
				action: 'Delete Redis cluster',
			},
			{
				name: 'backupListGet',
				value: 'redisBackupListGet',
				action: 'List Redis backups',
			},
			{
				name: 'backupCreatePost',
				value: 'redisBackupCreatePost',
				action: 'Create Redis backup',
			},
			{
				name: 'backupGetGet',
				value: 'redisBackupGetGet',
				action: 'Get Redis backup',
			},
			{
				name: 'backupDeleteDelete',
				value: 'redisBackupDeleteDelete',
				action: 'Delete Redis backup',
			},
			{
				name: 'userListGet',
				value: 'redisUserListGet',
				action: 'List Redis users',
			},
			{
				name: 'userCreatePost',
				value: 'redisUserCreatePost',
				action: 'Create Redis user',
			},
			{
				name: 'userGetGet',
				value: 'redisUserGetGet',
				action: 'Get Redis user',
			},
			{
				name: 'userUpdatePut',
				value: 'redisUserUpdatePut',
				action: 'Update Redis user',
			},
			{
				name: 'userDeleteDelete',
				value: 'redisUserDeleteDelete',
				action: 'Delete Redis user',
			},
			{
				name: 'nodeListGet',
				value: 'redisNodeListGet',
				action: 'List Redis nodes',
			},
			{
				name: 'nodeCreatePost',
				value: 'redisNodeCreatePost',
				action: 'Create Redis node',
			},
			{
				name: 'nodeGetGet',
				value: 'redisNodeGetGet',
				action: 'Get Redis node',
			},
			{
				name: 'nodeUpdatePut',
				value: 'redisNodeUpdatePut',
				action: 'Update Redis node',
			},
			{
				name: 'nodeDeleteDelete',
				value: 'redisNodeDeleteDelete',
				action: 'Delete Redis node',
			},
			{
				name: 'ipRestrictionListGet',
				value: 'redisIpRestrictionListGet',
				action: 'List Redis IP restrictions',
			},
			{
				name: 'ipRestrictionCreatePost',
				value: 'redisIpRestrictionCreatePost',
				action: 'Create Redis IP restriction',
			},
			{
				name: 'logSubscriptionListGet',
				value: 'redisLogSubscriptionListGet',
				action: 'List Redis log subscriptions',
			},
			{
				name: 'logSubscriptionCreatePost',
				value: 'redisLogSubscriptionCreatePost',
				action: 'Create Redis log subscription',
			},
			{
				name: 'logSubscriptionGetGet',
				value: 'redisLogSubscriptionGetGet',
				action: 'Get Redis log subscription',
			},
			{
				name: 'maintenanceGet',
				value: 'redisMaintenanceGet',
				action: 'Get Redis maintenance',
			},
			{
				name: 'maintenanceUpdatePut',
				value: 'redisMaintenanceUpdatePut',
				action: 'Update Redis maintenance',
			},
			{
				name: 'metricGet',
				value: 'redisMetricGet',
				action: 'Get Redis metric',
			},
			{
				name: 'prometheusGet',
				value: 'redisPrometheusGet',
				action: 'Get Redis prometheus',
			},
			{
				name: 'certificateListGet',
				value: 'redisCertificateListGet',
				action: 'List Redis certificates',
			},
			{
				name: 'certificateCreatePost',
				value: 'redisCertificateCreatePost',
				action: 'Create Redis certificate',
			},
			{
				name: 'integrationListGet',
				value: 'redisIntegrationListGet',
				action: 'List Redis integrations',
			},
			{
				name: 'integrationCreatePost',
				value: 'redisIntegrationCreatePost',
				action: 'Create Redis integration',
			},
			{
				name: 'integrationListGet',
				value: 'valkeyIntegrationListGet',
				action: 'List Valkey integrations',
			},
			{
				name: 'integrationCreatePost',
				value: 'valkeyIntegrationCreatePost',
				action: 'Create Valkey integration',
			},
		],
		default: 'projectListGet',
		displayOptions,
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
		...(redisBackupCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisBackupCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisBackupGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisBackupGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisBackupDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisBackupDeleteDelete'] },
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
		...(redisNodeListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisNodeListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisNodeCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisNodeCreatePost'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisNodeGetGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisNodeGetGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisNodeUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisNodeUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisNodeDeleteDeleteDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisNodeDeleteDelete'] },
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
		...(redisMaintenanceGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMaintenanceGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisMaintenanceUpdatePutDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMaintenanceUpdatePut'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisMetricGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisMetricGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisPrometheusGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisPrometheusGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisCertificateListGetDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisCertificateListGet'] },
		}) as INodeProperties[]),
	);
	properties.push(
		...(redisCertificateCreatePostDescription({
			...displayOptions,
			show: { publicCloudOperation: ['redisCertificateCreatePost'] },
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
	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('publicCloudOperation', itemIndex, {
		extractValue: true,
	});

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
		case 'redisBackupCreatePost':
			return redisBackupCreatePostExecute.call(this);
		case 'redisBackupGetGet':
			return redisBackupGetGetExecute.call(this);
		case 'redisBackupDeleteDelete':
			return redisBackupDeleteDeleteExecute.call(this);
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
		case 'redisNodeListGet':
			return redisNodeListGetExecute.call(this);
		case 'redisNodeCreatePost':
			return redisNodeCreatePostExecute.call(this);
		case 'redisNodeGetGet':
			return redisNodeGetGetExecute.call(this);
		case 'redisNodeUpdatePut':
			return redisNodeUpdatePutExecute.call(this);
		case 'redisNodeDeleteDelete':
			return redisNodeDeleteDeleteExecute.call(this);
		case 'redisIpRestrictionListGet':
			return redisIpRestrictionListGetExecute.call(this);
		case 'redisIpRestrictionCreatePost':
			return redisIpRestrictionCreatePostExecute.call(this);
		case 'redisLogSubscriptionListGet':
			return redisLogSubscriptionListGetExecute.call(this);
		case 'redisLogSubscriptionCreatePost':
			return redisLogSubscriptionCreatePostExecute.call(this);
		case 'redisLogSubscriptionGetGet':
			return redisLogSubscriptionGetGetExecute.call(this);
		case 'redisMaintenanceGet':
			return redisMaintenanceGetExecute.call(this);
		case 'redisMaintenanceUpdatePut':
			return redisMaintenanceUpdatePutExecute.call(this);
		case 'redisMetricGet':
			return redisMetricGetExecute.call(this);
		case 'redisPrometheusGet':
			return redisPrometheusGetExecute.call(this);
		case 'redisCertificateListGet':
			return redisCertificateListGetExecute.call(this);
		case 'redisCertificateCreatePost':
			return redisCertificateCreatePostExecute.call(this);
		case 'redisIntegrationListGet':
			return redisIntegrationListGetExecute.call(this);
		case 'redisIntegrationCreatePost':
			return redisIntegrationCreatePostExecute.call(this);
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
		default:
			throw new Error(`Unsupported operation "${operation}" for resource "publicCloud"`);
	}
}
