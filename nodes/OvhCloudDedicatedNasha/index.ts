import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeNashaPartitionAccessCreatePost,
	description as descriptionNashaPartitionAccessCreatePost,
} from './NashaPartitionAccessCreate.operation';

import {
	execute as executeDedicatedNashaUpdatePut,
	description as descriptionDedicatedNashaUpdatePut,
} from './DedicatedNashaUpdate.operation';

import {
	execute as executeDedicatedNashaPartitionUpdatePut,
	description as descriptionDedicatedNashaPartitionUpdatePut,
} from './DedicatedNashaPartitionUpdate.operation';

import {
	execute as executeDedicatedNashaTerminateCreatePost,
	description as descriptionDedicatedNashaTerminateCreatePost,
} from './DedicatedNashaTerminateCreate.operation';

import {
	execute as executeDedicatedNashaConfirmterminationCreatePost,
	description as descriptionDedicatedNashaConfirmterminationCreatePost,
} from './DedicatedNashaConfirmterminationCreate.operation';

import {
	execute as executeDedicatedNashaPartitionCreatePost,
	description as descriptionDedicatedNashaPartitionCreatePost,
} from './DedicatedNashaPartitionCreate.operation';

import {
	execute as executeNashaPartitionCustomsnapshotCreatePost,
	description as descriptionNashaPartitionCustomsnapshotCreatePost,
} from './NashaPartitionCustomsnapshotCreate.operation';

import {
	execute as executeNashaPartitionQuotaDeleteDelete,
	description as descriptionNashaPartitionQuotaDeleteDelete,
} from './NashaPartitionQuotaDelete.operation';

import {
	execute as executeNashaPartitionCustomsnapshotDeleteDelete,
	description as descriptionNashaPartitionCustomsnapshotDeleteDelete,
} from './NashaPartitionCustomsnapshotDelete.operation';

import {
	execute as executeNashaPartitionSnapshotDeleteDelete,
	description as descriptionNashaPartitionSnapshotDeleteDelete,
} from './NashaPartitionSnapshotDelete.operation';

import {
	execute as executeNashaPartitionAccessDeleteDelete,
	description as descriptionNashaPartitionAccessDeleteDelete,
} from './NashaPartitionAccessDelete.operation';

import {
	execute as executeDedicatedNashaPartitionDeleteDelete,
	description as descriptionDedicatedNashaPartitionDeleteDelete,
} from './DedicatedNashaPartitionDelete.operation';

import {
	execute as executeNashaPartitionAccessGetGet,
	description as descriptionNashaPartitionAccessGetGet,
} from './NashaPartitionAccessGet.operation';

import {
	execute as executeNashaPartitionAuthorizableipsGetGet,
	description as descriptionNashaPartitionAuthorizableipsGetGet,
} from './NashaPartitionAuthorizableipsGet.operation';

import {
	execute as executeNashaPartitionAuthorizableblocksGetGet,
	description as descriptionNashaPartitionAuthorizableblocksGetGet,
} from './NashaPartitionAuthorizableblocksGet.operation';

import {
	execute as executeNashaPartitionTemplateusageGetGet,
	description as descriptionNashaPartitionTemplateusageGetGet,
} from './NashaPartitionTemplateusageGet.operation';

import {
	execute as executeNashaPartitionCustomsnapshotGetGet,
	description as descriptionNashaPartitionCustomsnapshotGetGet,
} from './NashaPartitionCustomsnapshotGet.operation';

import {
	execute as executeDedicatedNashaPartitionGetGet,
	description as descriptionDedicatedNashaPartitionGetGet,
} from './DedicatedNashaPartitionGet.operation';

import {
	execute as executeNashaPartitionQuotaGetGet,
	description as descriptionNashaPartitionQuotaGetGet,
} from './NashaPartitionQuotaGet.operation';

import {
	execute as executeNashaPartitionSnapshotGetGet,
	description as descriptionNashaPartitionSnapshotGetGet,
} from './NashaPartitionSnapshotGet.operation';

import {
	execute as executeDedicatedNashaServiceinfosGetGet,
	description as descriptionDedicatedNashaServiceinfosGetGet,
} from './DedicatedNashaServiceinfosGet.operation';

import {
	execute as executeDedicatedNashaGetServicenameGet,
	description as descriptionDedicatedNashaGetServicenameGet,
} from './DedicatedNashaGetServicename.operation';

import {
	execute as executeDedicatedNashaPartitionGetPartitionnameGet,
	description as descriptionDedicatedNashaPartitionGetPartitionnameGet,
} from './DedicatedNashaPartitionGetPartitionname.operation';

import {
	execute as executeNashaPartitionAccessGetIpGet,
	description as descriptionNashaPartitionAccessGetIpGet,
} from './NashaPartitionAccessGetIp.operation';

import {
	execute as executeNashaPartitionCustomsnapshotGetNameGet,
	description as descriptionNashaPartitionCustomsnapshotGetNameGet,
} from './NashaPartitionCustomsnapshotGetName.operation';

import {
	execute as executeNashaPartitionOptionsGetGet,
	description as descriptionNashaPartitionOptionsGetGet,
} from './NashaPartitionOptionsGet.operation';

import {
	execute as executeNashaPartitionQuotaGetUidGet,
	description as descriptionNashaPartitionQuotaGetUidGet,
} from './NashaPartitionQuotaGetUid.operation';

import {
	execute as executeNashaPartitionSnapshotGetSnapshottypeGet,
	description as descriptionNashaPartitionSnapshotGetSnapshottypeGet,
} from './NashaPartitionSnapshotGetSnapshottype.operation';

import {
	execute as executeDedicatedNashaTaskGetTaskidGet,
	description as descriptionDedicatedNashaTaskGetTaskidGet,
} from './DedicatedNashaTaskGetTaskid.operation';

import {
	execute as executeDedicatedNashaChangecontactCreatePost,
	description as descriptionDedicatedNashaChangecontactCreatePost,
} from './DedicatedNashaChangecontactCreate.operation';

import {
	execute as executeDedicatedNashaGetGet,
	description as descriptionDedicatedNashaGetGet,
} from './DedicatedNashaGet.operation';

import {
	execute as executeDedicatedNashaMetricstokenGetGet,
	description as descriptionDedicatedNashaMetricstokenGetGet,
} from './DedicatedNashaMetricstokenGet.operation';

import {
	execute as executeDedicatedNashaUseGetGet,
	description as descriptionDedicatedNashaUseGetGet,
} from './DedicatedNashaUseGet.operation';

import {
	execute as executeNashaPartitionUseGetGet,
	description as descriptionNashaPartitionUseGetGet,
} from './NashaPartitionUseGet.operation';

import {
	execute as executeNashaPartitionSnapshotCreatePost,
	description as descriptionNashaPartitionSnapshotCreatePost,
} from './NashaPartitionSnapshotCreate.operation';

import {
	execute as executeNashaPartitionQuotaCreatePost,
	description as descriptionNashaPartitionQuotaCreatePost,
} from './NashaPartitionQuotaCreate.operation';

import {
	execute as executeNashaPartitionOptionsCreatePost,
	description as descriptionNashaPartitionOptionsCreatePost,
} from './NashaPartitionOptionsCreate.operation';

import {
	execute as executeDedicatedNashaServiceinfosUpdatePut,
	description as descriptionDedicatedNashaServiceinfosUpdatePut,
} from './DedicatedNashaServiceinfosUpdate.operation';

import {
	execute as executeDedicatedNashaTaskGetGet,
	description as descriptionDedicatedNashaTaskGetGet,
} from './DedicatedNashaTaskGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedNashaOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Add A New Acl Entry',
					value: 'NashaPartitionAccessCreate',
					action: 'Add a new ACL entry',
				},
				{
					name: 'Alter This Object Properties',
					value: 'DedicatedNashaUpdate',
					action: 'Alter this object properties',
				},
				{
					name: 'Ask For The Termination Of Your Service',
					value: 'DedicatedNashaTerminateCreate',
					action: 'Ask for the termination of your service',
				},
				{
					name: 'Confirm Service Termination',
					value: 'DedicatedNashaConfirmterminationCreate',
					action: 'Confirm service termination',
				},
				{
					name: 'Create A New Partition',
					value: 'DedicatedNashaPartitionCreate',
					action: 'Create a new partition',
				},
				{
					name: 'Create A New Snapshot',
					value: 'NashaPartitionCustomsnapshotCreate',
					action: 'Create a new snapshot',
				},
				{
					name: 'Delete A Given Quota',
					value: 'NashaPartitionQuotaDelete',
					action: 'Delete a given quota',
				},
				{
					name: 'Delete A Given Snapshot',
					value: 'NashaPartitionCustomsnapshotDelete',
					action: 'Delete a given snapshot',
				},
				{
					name: 'Delete An Acl Entry',
					value: 'NashaPartitionAccessDelete',
					action: 'Delete an ACL entry',
				},
				{
					name: 'Delete This Partition',
					value: 'DedicatedNashaPartitionDelete',
					action: 'Delete this partition',
				},
				{
					name: 'Get Acl For This Partition',
					value: 'NashaPartitionAccessGet',
					action: 'get ACL for this partition',
				},
				{
					name: 'Get All Ips That Can Be Used In The Acl',
					value: 'NashaPartitionAuthorizableipsGet',
					action: 'Get all IPs that can be used in the ACL',
				},
				{
					name: 'Get All Ripe/arin Blocks That Can Be Used In The Acl',
					value: 'NashaPartitionAuthorizableblocksGet',
					action: 'Get all RIPE/ARIN blocks that can be used in the ACL',
				},
				{
					name: 'Get All The Template Usages Options Applicable To This Partition.',
					value: 'NashaPartitionTemplateusageGet',
					action: 'Get all the template usages options applicable to this partition.',
				},
				{
					name: 'Get Custom Snapshots For This Partition',
					value: 'NashaPartitionCustomsnapshotGet',
					action: 'Get custom snapshots for this partition',
				},
				{
					name: 'Get Partition List',
					value: 'DedicatedNashaPartitionGet',
					action: 'Get partition list',
				},
				{
					name: 'Get Quota For This Partition',
					value: 'NashaPartitionQuotaGet',
					action: 'Get quota for this partition',
				},
				{
					name: 'Get Scheduled Snapshot Types For This Partition',
					value: 'NashaPartitionSnapshotGet',
					action: 'Get scheduled snapshot types for this partition',
				},
				{
					name: 'Get Service Information',
					value: 'DedicatedNashaServiceinfosGet',
					action: 'Get service information',
				},
				{
					name: 'Get This Object Properties',
					value: 'DedicatedNashaGetServicename',
					action: 'Get this object properties',
				},
				{
					name: 'Launch A Contact Change Procedure',
					value: 'DedicatedNashaChangecontactCreate',
					action: 'Launch a contact change procedure',
				},
				{
					name: 'List Available Services',
					value: 'DedicatedNashaGet',
					action: 'List available services',
				},
				{
					name: 'Return A Read Token For Manager Mimir Metrics',
					value: 'DedicatedNashaMetricstokenGet',
					action: 'Return a read token for manager mimir metrics',
				},
				{
					name: 'Return Statistics About The Nas',
					value: 'DedicatedNashaUseGet',
					action: 'Return statistics about the nas',
				},
				{
					name: 'Return Statistics About The Partition',
					value: 'NashaPartitionUseGet',
					action: 'Return statistics about the partition',
				},
				{
					name: 'Schedule A New Snapshot Type',
					value: 'NashaPartitionSnapshotCreate',
					action: 'Schedule a new snapshot type',
				},
				{
					name: 'Set A New Quota',
					value: 'NashaPartitionQuotaCreate',
					action: 'Set a new quota',
				},
				{
					name: 'Setup Options',
					value: 'NashaPartitionOptionsCreate',
					action: 'Setup options',
				},
				{
					name: 'Update Service Information',
					value: 'DedicatedNashaServiceinfosUpdate',
					action: 'Update service information',
				},
				{
					name: 'View Task List',
					value: 'DedicatedNashaTaskGet',
					action: 'View task list',
				},
			],
			default: 'NashaPartitionAccessCreate',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...descriptionNashaPartitionAccessCreatePost(),
		...descriptionDedicatedNashaUpdatePut(),
		...descriptionDedicatedNashaPartitionUpdatePut(),
		...descriptionDedicatedNashaTerminateCreatePost({}),
		...descriptionDedicatedNashaConfirmterminationCreatePost(),
		...descriptionDedicatedNashaPartitionCreatePost(),
		...descriptionNashaPartitionCustomsnapshotCreatePost(),
		...descriptionNashaPartitionQuotaDeleteDelete(),
		...descriptionNashaPartitionCustomsnapshotDeleteDelete(),
		...descriptionNashaPartitionSnapshotDeleteDelete(),
		...descriptionNashaPartitionAccessDeleteDelete(),
		...descriptionDedicatedNashaPartitionDeleteDelete(),
		...descriptionNashaPartitionAccessGetGet(),
		...descriptionNashaPartitionAuthorizableipsGetGet(),
		...descriptionNashaPartitionAuthorizableblocksGetGet(),
		...descriptionNashaPartitionTemplateusageGetGet(),
		...descriptionNashaPartitionCustomsnapshotGetGet(),
		...descriptionDedicatedNashaPartitionGetGet(),
		...descriptionNashaPartitionQuotaGetGet(),
		...descriptionNashaPartitionSnapshotGetGet(),
		...descriptionDedicatedNashaServiceinfosGetGet(),
		...descriptionDedicatedNashaGetServicenameGet(),
		...descriptionDedicatedNashaPartitionGetPartitionnameGet(),
		...descriptionNashaPartitionAccessGetIpGet(),
		...descriptionNashaPartitionCustomsnapshotGetNameGet(),
		...descriptionNashaPartitionOptionsGetGet(),
		...descriptionNashaPartitionQuotaGetUidGet(),
		...descriptionNashaPartitionSnapshotGetSnapshottypeGet(),
		...descriptionDedicatedNashaTaskGetTaskidGet(),
		...descriptionDedicatedNashaChangecontactCreatePost(),
		...descriptionDedicatedNashaGetGet(),
		...descriptionDedicatedNashaMetricstokenGetGet(),
		...descriptionDedicatedNashaUseGetGet(),
		...descriptionNashaPartitionUseGetGet(),
		...descriptionNashaPartitionSnapshotCreatePost(),
		...descriptionNashaPartitionQuotaCreatePost(),
		...descriptionNashaPartitionOptionsCreatePost(),
		...descriptionDedicatedNashaServiceinfosUpdatePut(),
		...descriptionDedicatedNashaTaskGetGet(),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedNashaOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'NashaPartitionAccessCreate':
			return executeNashaPartitionAccessCreatePost.call(this, itemIndex);
		case 'DedicatedNashaUpdate':
			return executeDedicatedNashaUpdatePut.call(this, itemIndex);
		case 'DedicatedNashaPartitionUpdate':
			return executeDedicatedNashaPartitionUpdatePut.call(this, itemIndex);
		case 'DedicatedNashaTerminateCreate':
			return executeDedicatedNashaTerminateCreatePost.call(this, itemIndex);
		case 'DedicatedNashaConfirmterminationCreate':
			return executeDedicatedNashaConfirmterminationCreatePost.call(this, itemIndex);
		case 'DedicatedNashaPartitionCreate':
			return executeDedicatedNashaPartitionCreatePost.call(this, itemIndex);
		case 'NashaPartitionCustomsnapshotCreate':
			return executeNashaPartitionCustomsnapshotCreatePost.call(this, itemIndex);
		case 'NashaPartitionQuotaDelete':
			return executeNashaPartitionQuotaDeleteDelete.call(this, itemIndex);
		case 'NashaPartitionCustomsnapshotDelete':
			return executeNashaPartitionCustomsnapshotDeleteDelete.call(this, itemIndex);
		case 'NashaPartitionSnapshotDelete':
			return executeNashaPartitionSnapshotDeleteDelete.call(this, itemIndex);
		case 'NashaPartitionAccessDelete':
			return executeNashaPartitionAccessDeleteDelete.call(this, itemIndex);
		case 'DedicatedNashaPartitionDelete':
			return executeDedicatedNashaPartitionDeleteDelete.call(this, itemIndex);
		case 'NashaPartitionAccessGet':
			return executeNashaPartitionAccessGetGet.call(this, itemIndex);
		case 'NashaPartitionAuthorizableipsGet':
			return executeNashaPartitionAuthorizableipsGetGet.call(this, itemIndex);
		case 'NashaPartitionAuthorizableblocksGet':
			return executeNashaPartitionAuthorizableblocksGetGet.call(this, itemIndex);
		case 'NashaPartitionTemplateusageGet':
			return executeNashaPartitionTemplateusageGetGet.call(this, itemIndex);
		case 'NashaPartitionCustomsnapshotGet':
			return executeNashaPartitionCustomsnapshotGetGet.call(this, itemIndex);
		case 'DedicatedNashaPartitionGet':
			return executeDedicatedNashaPartitionGetGet.call(this, itemIndex);
		case 'NashaPartitionQuotaGet':
			return executeNashaPartitionQuotaGetGet.call(this, itemIndex);
		case 'NashaPartitionSnapshotGet':
			return executeNashaPartitionSnapshotGetGet.call(this, itemIndex);
		case 'DedicatedNashaServiceinfosGet':
			return executeDedicatedNashaServiceinfosGetGet.call(this, itemIndex);
		case 'DedicatedNashaGetServicename':
			return executeDedicatedNashaGetServicenameGet.call(this, itemIndex);
		case 'DedicatedNashaPartitionGetPartitionname':
			return executeDedicatedNashaPartitionGetPartitionnameGet.call(this, itemIndex);
		case 'NashaPartitionAccessGetIp':
			return executeNashaPartitionAccessGetIpGet.call(this, itemIndex);
		case 'NashaPartitionCustomsnapshotGetName':
			return executeNashaPartitionCustomsnapshotGetNameGet.call(this, itemIndex);
		case 'NashaPartitionOptionsGet':
			return executeNashaPartitionOptionsGetGet.call(this, itemIndex);
		case 'NashaPartitionQuotaGetUid':
			return executeNashaPartitionQuotaGetUidGet.call(this, itemIndex);
		case 'NashaPartitionSnapshotGetSnapshottype':
			return executeNashaPartitionSnapshotGetSnapshottypeGet.call(this, itemIndex);
		case 'DedicatedNashaTaskGetTaskid':
			return executeDedicatedNashaTaskGetTaskidGet.call(this, itemIndex);
		case 'DedicatedNashaChangecontactCreate':
			return executeDedicatedNashaChangecontactCreatePost.call(this, itemIndex);
		case 'DedicatedNashaGet':
			return executeDedicatedNashaGetGet.call(this, itemIndex);
		case 'DedicatedNashaMetricstokenGet':
			return executeDedicatedNashaMetricstokenGetGet.call(this, itemIndex);
		case 'DedicatedNashaUseGet':
			return executeDedicatedNashaUseGetGet.call(this, itemIndex);
		case 'NashaPartitionUseGet':
			return executeNashaPartitionUseGetGet.call(this, itemIndex);
		case 'NashaPartitionSnapshotCreate':
			return executeNashaPartitionSnapshotCreatePost.call(this, itemIndex);
		case 'NashaPartitionQuotaCreate':
			return executeNashaPartitionQuotaCreatePost.call(this, itemIndex);
		case 'NashaPartitionOptionsCreate':
			return executeNashaPartitionOptionsCreatePost.call(this, itemIndex);
		case 'DedicatedNashaServiceinfosUpdate':
			return executeDedicatedNashaServiceinfosUpdatePut.call(this, itemIndex);
		case 'DedicatedNashaTaskGet':
			return executeDedicatedNashaTaskGetGet.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "/dedicated/nasha"`);
}
