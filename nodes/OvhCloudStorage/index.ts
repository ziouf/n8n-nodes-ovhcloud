import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeaccessPathGetGet,
	description as descriptionaccessPathGetGet,
} from './share/accessPath/accessPathGetGet.operation';
import {
	execute as executeaccessPathListGet,
	description as descriptionaccessPathListGet,
} from './share/accessPath/accessPathListGet.operation';
import {
	execute as executeaclCreatePost,
	description as descriptionaclCreatePost,
} from './share/acl/aclCreatePost.operation';
import {
	execute as executeaclDeleteDelete,
	description as descriptionaclDeleteDelete,
} from './share/acl/aclDeleteDelete.operation';
import {
	execute as executeaclGetGet,
	description as descriptionaclGetGet,
} from './share/acl/aclGetGet.operation';
import {
	execute as executeaclListGet,
	description as descriptionaclListGet,
} from './share/acl/aclListGet.operation';
import {
	execute as executechangeContactPost,
	description as descriptionchangeContactPost,
} from './service/changeContactPost.operation';
import {
	execute as executeconfirmTerminationPost,
	description as descriptionconfirmTerminationPost,
} from './service/confirmTerminationPost.operation';
import {
	execute as executemetricsTokenGet,
	description as descriptionmetricsTokenGet,
} from './service/metricsTokenGet.operation';
import {
	execute as executenetworkGetGet,
	description as descriptionnetworkGetGet,
} from './network/networkGetGet.operation';
import {
	execute as executenetworkListGet,
	description as descriptionnetworkListGet,
} from './network/networkListGet.operation';
import {
	execute as executeserviceGetGet,
	description as descriptionserviceGetGet,
} from './service/serviceGetGet.operation';
import {
	execute as executeserviceInfosGet,
	description as descriptionserviceInfosGet,
} from './service/serviceInfosGet.operation';
import {
	execute as executeserviceInfosUpdatePut,
	description as descriptionserviceInfosUpdatePut,
} from './service/serviceInfosUpdatePut.operation';
import {
	execute as executeserviceListGet,
	description as descriptionserviceListGet,
} from './service/serviceListGet.operation';
import {
	execute as executeserviceUpdatePut,
	description as descriptionserviceUpdatePut,
} from './service/serviceUpdatePut.operation';
import {
	execute as executeshareCreatePost,
	description as descriptionshareCreatePost,
} from './share/shareCreatePost.operation';
import {
	execute as executeshareDeleteDelete,
	description as descriptionshareDeleteDelete,
} from './share/shareDeleteDelete.operation';
import {
	execute as executeshareExtendPost,
	description as descriptionshareExtendPost,
} from './share/shareExtendPost.operation';
import {
	execute as executeshareGetGet,
	description as descriptionshareGetGet,
} from './share/shareGetGet.operation';
import {
	execute as executeshareListGet,
	description as descriptionshareListGet,
} from './share/shareListGet.operation';
import {
	execute as executeshareReplicationAcceptPost,
	description as descriptionshareReplicationAcceptPost,
} from './shareReplication/shareReplicationAcceptPost.operation';
import {
	execute as executeshareReplicationCreatePost,
	description as descriptionshareReplicationCreatePost,
} from './shareReplication/shareReplicationCreatePost.operation';
import {
	execute as executeshareReplicationCutoverPost,
	description as descriptionshareReplicationCutoverPost,
} from './shareReplication/shareReplicationCutoverPost.operation';
import {
	execute as executeshareReplicationDeleteDelete,
	description as descriptionshareReplicationDeleteDelete,
} from './shareReplication/shareReplicationDeleteDelete.operation';
import {
	execute as executeshareReplicationGetGet,
	description as descriptionshareReplicationGetGet,
} from './shareReplication/shareReplicationGetGet.operation';
import {
	execute as executeshareReplicationListGet,
	description as descriptionshareReplicationListGet,
} from './shareReplication/shareReplicationListGet.operation';
import {
	execute as executeshareReplicationServicesCompatibilityGet,
	description as descriptionshareReplicationServicesCompatibilityGet,
} from './shareReplication/shareReplicationServicesCompatibilityGet.operation';
import {
	execute as executeshareRevertPost,
	description as descriptionshareRevertPost,
} from './share/shareRevertPost.operation';
import {
	execute as executeshareShrinkPost,
	description as descriptionshareShrinkPost,
} from './share/shareShrinkPost.operation';
import {
	execute as executeshareSnapshotPolicyGet,
	description as descriptionshareSnapshotPolicyGet,
} from './share/snapshot/shareSnapshotPolicyGet.operation';
import {
	execute as executeshareSnapshotPolicyUpdatePut,
	description as descriptionshareSnapshotPolicyUpdatePut,
} from './share/snapshot/shareSnapshotPolicyUpdatePut.operation';
import {
	execute as executeshareSnapshotReserveGet,
	description as descriptionshareSnapshotReserveGet,
} from './share/snapshot/shareSnapshotReserveGet.operation';
import {
	execute as executeshareSnapshotReserveUpdatePut,
	description as descriptionshareSnapshotReserveUpdatePut,
} from './share/snapshot/shareSnapshotReserveUpdatePut.operation';
import {
	execute as executeshareUpdatePut,
	description as descriptionshareUpdatePut,
} from './share/shareUpdatePut.operation';
import {
	execute as executesnapshotCreatePost,
	description as descriptionsnapshotCreatePost,
} from './share/snapshot/snapshotCreatePost.operation';
import {
	execute as executesnapshotDeleteDelete,
	description as descriptionsnapshotDeleteDelete,
} from './share/snapshot/snapshotDeleteDelete.operation';
import {
	execute as executesnapshotGetGet,
	description as descriptionsnapshotGetGet,
} from './share/snapshot/snapshotGetGet.operation';
import {
	execute as executesnapshotHoldPost,
	description as descriptionsnapshotHoldPost,
} from './share/snapshot/snapshotHoldPost.operation';
import {
	execute as executesnapshotListGet,
	description as descriptionsnapshotListGet,
} from './share/snapshot/snapshotListGet.operation';
import {
	execute as executesnapshotPolicyCreatePost,
	description as descriptionsnapshotPolicyCreatePost,
} from './snapshotPolicy/snapshotPolicyCreatePost.operation';
import {
	execute as executesnapshotPolicyDeleteDelete,
	description as descriptionsnapshotPolicyDeleteDelete,
} from './snapshotPolicy/snapshotPolicyDeleteDelete.operation';
import {
	execute as executesnapshotPolicyGetGet,
	description as descriptionsnapshotPolicyGetGet,
} from './snapshotPolicy/snapshotPolicyGetGet.operation';
import {
	execute as executesnapshotPolicyListGet,
	description as descriptionsnapshotPolicyListGet,
} from './snapshotPolicy/snapshotPolicyListGet.operation';
import {
	execute as executesnapshotPolicyUpdatePut,
	description as descriptionsnapshotPolicyUpdatePut,
} from './snapshotPolicy/snapshotPolicyUpdatePut.operation';
import {
	execute as executesnapshotUpdatePut,
	description as descriptionsnapshotUpdatePut,
} from './share/snapshot/snapshotUpdatePut.operation';
import {
	execute as executeterminatePost,
	description as descriptionterminatePost,
} from './service/terminatePost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'storageOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Accept Share Replication',
					value: 'shareReplicationAcceptPost',
					action: 'accept Share Replication',
				},
				{
					name: 'Change Contact',
					value: 'changeContactPost',
					action: 'change Contact',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTerminationPost',
					action: 'confirm Termination',
				},
				{
					name: 'Create ACL',
					value: 'aclCreatePost',
					action: 'create ACL',
				},
				{
					name: 'Create Share',
					value: 'shareCreatePost',
					action: 'create Share',
				},
				{
					name: 'Create Share Replication',
					value: 'shareReplicationCreatePost',
					action: 'create Share Replication',
				},
				{
					name: 'Create Snapshot',
					value: 'snapshotCreatePost',
					action: 'create Snapshot',
				},
				{
					name: 'Create Snapshot Policy',
					value: 'snapshotPolicyCreatePost',
					action: 'create Snapshot Policy',
				},
				{
					name: 'Cutover Share Replication',
					value: 'shareReplicationCutoverPost',
					action: 'cutover Share Replication',
				},
				{
					name: 'Delete ACL',
					value: 'aclDeleteDelete',
					action: 'delete ACL',
				},
				{
					name: 'Delete Share',
					value: 'shareDeleteDelete',
					action: 'delete Share',
				},
				{
					name: 'Delete Share Replication',
					value: 'shareReplicationDeleteDelete',
					action: 'delete Share Replication',
				},
				{
					name: 'Delete Snapshot',
					value: 'snapshotDeleteDelete',
					action: 'delete Snapshot',
				},
				{
					name: 'Delete Snapshot Policy',
					value: 'snapshotPolicyDeleteDelete',
					action: 'delete Snapshot Policy',
				},
				{
					name: 'Extend Share',
					value: 'shareExtendPost',
					action: 'extend Share',
				},
				{
					name: 'Get Access Path',
					value: 'accessPathGetGet',
					action: 'get Access Path',
				},
				{
					name: 'Get ACL',
					value: 'aclGetGet',
					action: 'get ACL',
				},
				{
					name: 'Get Metrics Token',
					value: 'metricsTokenGet',
					action: 'get Metrics Token',
				},
				{
					name: 'Get Network',
					value: 'networkGetGet',
					action: 'get Network',
				},
				{
					name: 'Get Service',
					value: 'serviceGetGet',
					action: 'get Service',
				},
				{
					name: 'Get Service Infos',
					value: 'serviceInfosGet',
					action: 'get Service Infos',
				},
				{
					name: 'Get Share',
					value: 'shareGetGet',
					action: 'get Share',
				},
				{
					name: 'Get Share Replication',
					value: 'shareReplicationGetGet',
					action: 'get Share Replication',
				},
				{
					name: 'Get Share Snapshot Policy',
					value: 'shareSnapshotPolicyGet',
					action: 'get Share Snapshot Policy',
				},
				{
					name: 'Get Share Snapshot Reserve',
					value: 'shareSnapshotReserveGet',
					action: 'get Share Snapshot Reserve',
				},
				{
					name: 'Get Snapshot',
					value: 'snapshotGetGet',
					action: 'get Snapshot',
				},
				{
					name: 'Get Snapshot Policy',
					value: 'snapshotPolicyGetGet',
					action: 'get Snapshot Policy',
				},
				{
					name: 'Hold Snapshot',
					value: 'snapshotHoldPost',
					action: 'hold Snapshot',
				},
				{
					name: 'List Access Paths',
					value: 'accessPathListGet',
					action: 'list Access Paths',
				},
				{
					name: 'List ACLs',
					value: 'aclListGet',
					action: 'list ACLs',
				},
				{
					name: 'List Networks',
					value: 'networkListGet',
					action: 'list Networks',
				},
				{
					name: 'List Services',
					value: 'serviceListGet',
					action: 'list Services',
				},
				{
					name: 'List Share Replication Compatible Services',
					value: 'shareReplicationServicesCompatibilityGet',
					action: 'list Share Replication Compatible Services',
				},
				{
					name: 'List Share Replications',
					value: 'shareReplicationListGet',
					action: 'list Share Replications',
				},
				{
					name: 'List Shares',
					value: 'shareListGet',
					action: 'list Shares',
				},
				{
					name: 'List Snapshot Policies',
					value: 'snapshotPolicyListGet',
					action: 'list Snapshot Policies',
				},
				{
					name: 'List Snapshots',
					value: 'snapshotListGet',
					action: 'list Snapshots',
				},
				{
					name: 'Revert Share',
					value: 'shareRevertPost',
					action: 'revert Share',
				},
				{
					name: 'Shrink Share',
					value: 'shareShrinkPost',
					action: 'shrink Share',
				},
				{
					name: 'Terminate Service',
					value: 'terminatePost',
					action: 'terminate Service',
				},
				{
					name: 'Update Service',
					value: 'serviceUpdatePut',
					action: 'update Service',
				},
				{
					name: 'Update Service Infos',
					value: 'serviceInfosUpdatePut',
					action: 'update Service Infos',
				},
				{
					name: 'Update Share',
					value: 'shareUpdatePut',
					action: 'update Share',
				},
				{
					name: 'Update Share Snapshot Policy',
					value: 'shareSnapshotPolicyUpdatePut',
					action: 'update Share Snapshot Policy',
				},
				{
					name: 'Update Share Snapshot Reserve',
					value: 'shareSnapshotReserveUpdatePut',
					action: 'update Share Snapshot Reserve',
				},
				{
					name: 'Update Snapshot',
					value: 'snapshotUpdatePut',
					action: 'update Snapshot',
				},
				{
					name: 'Update Snapshot Policy',
					value: 'snapshotPolicyUpdatePut',
					action: 'update Snapshot Policy',
				},
			],
			default: 'serviceListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...descriptionaccessPathGetGet({
			...displayOptions,
			show: { storageOperation: ['accessPathGetGet'] },
		}),
		...descriptionaccessPathListGet({
			...displayOptions,
			show: { storageOperation: ['accessPathListGet'] },
		}),
		...descriptionaclCreatePost({
			...displayOptions,
			show: { storageOperation: ['aclCreatePost'] },
		}),
		...descriptionaclDeleteDelete({
			...displayOptions,
			show: { storageOperation: ['aclDeleteDelete'] },
		}),
		...descriptionaclGetGet({
			...displayOptions,
			show: { storageOperation: ['aclGetGet'] },
		}),
		...descriptionaclListGet({
			...displayOptions,
			show: { storageOperation: ['aclListGet'] },
		}),
		...descriptionchangeContactPost({
			...displayOptions,
			show: { storageOperation: ['changeContactPost'] },
		}),
		...descriptionconfirmTerminationPost({
			...displayOptions,
			show: { storageOperation: ['confirmTerminationPost'] },
		}),
		...descriptionmetricsTokenGet({
			...displayOptions,
			show: { storageOperation: ['metricsTokenGet'] },
		}),
		...descriptionnetworkGetGet({
			...displayOptions,
			show: { storageOperation: ['networkGetGet'] },
		}),
		...descriptionnetworkListGet({
			...displayOptions,
			show: { storageOperation: ['networkListGet'] },
		}),
		...descriptionserviceGetGet({
			...displayOptions,
			show: { storageOperation: ['serviceGetGet'] },
		}),
		...descriptionserviceInfosGet({
			...displayOptions,
			show: { storageOperation: ['serviceInfosGet'] },
		}),
		...descriptionserviceInfosUpdatePut({
			...displayOptions,
			show: { storageOperation: ['serviceInfosUpdatePut'] },
		}),
		...descriptionserviceListGet({
			...displayOptions,
			show: { storageOperation: ['serviceListGet'] },
		}),
		...descriptionserviceUpdatePut({
			...displayOptions,
			show: { storageOperation: ['serviceUpdatePut'] },
		}),
		...descriptionshareCreatePost({
			...displayOptions,
			show: { storageOperation: ['shareCreatePost'] },
		}),
		...descriptionshareDeleteDelete({
			...displayOptions,
			show: { storageOperation: ['shareDeleteDelete'] },
		}),
		...descriptionshareExtendPost({
			...displayOptions,
			show: { storageOperation: ['shareExtendPost'] },
		}),
		...descriptionshareGetGet({
			...displayOptions,
			show: { storageOperation: ['shareGetGet'] },
		}),
		...descriptionshareListGet({
			...displayOptions,
			show: { storageOperation: ['shareListGet'] },
		}),
		...descriptionshareReplicationAcceptPost({
			...displayOptions,
			show: { storageOperation: ['shareReplicationAcceptPost'] },
		}),
		...descriptionshareReplicationCreatePost({
			...displayOptions,
			show: { storageOperation: ['shareReplicationCreatePost'] },
		}),
		...descriptionshareReplicationCutoverPost({
			...displayOptions,
			show: { storageOperation: ['shareReplicationCutoverPost'] },
		}),
		...descriptionshareReplicationDeleteDelete({
			...displayOptions,
			show: { storageOperation: ['shareReplicationDeleteDelete'] },
		}),
		...descriptionshareReplicationGetGet({
			...displayOptions,
			show: { storageOperation: ['shareReplicationGetGet'] },
		}),
		...descriptionshareReplicationListGet({
			...displayOptions,
			show: { storageOperation: ['shareReplicationListGet'] },
		}),
		...descriptionshareReplicationServicesCompatibilityGet({
			...displayOptions,
			show: { storageOperation: ['shareReplicationServicesCompatibilityGet'] },
		}),
		...descriptionshareRevertPost({
			...displayOptions,
			show: { storageOperation: ['shareRevertPost'] },
		}),
		...descriptionshareShrinkPost({
			...displayOptions,
			show: { storageOperation: ['shareShrinkPost'] },
		}),
		...descriptionshareSnapshotPolicyGet({
			...displayOptions,
			show: { storageOperation: ['shareSnapshotPolicyGet'] },
		}),
		...descriptionshareSnapshotPolicyUpdatePut({
			...displayOptions,
			show: { storageOperation: ['shareSnapshotPolicyUpdatePut'] },
		}),
		...descriptionshareSnapshotReserveGet({
			...displayOptions,
			show: { storageOperation: ['shareSnapshotReserveGet'] },
		}),
		...descriptionshareSnapshotReserveUpdatePut({
			...displayOptions,
			show: { storageOperation: ['shareSnapshotReserveUpdatePut'] },
		}),
		...descriptionshareUpdatePut({
			...displayOptions,
			show: { storageOperation: ['shareUpdatePut'] },
		}),
		...descriptionsnapshotCreatePost({
			...displayOptions,
			show: { storageOperation: ['snapshotCreatePost'] },
		}),
		...descriptionsnapshotDeleteDelete({
			...displayOptions,
			show: { storageOperation: ['snapshotDeleteDelete'] },
		}),
		...descriptionsnapshotGetGet({
			...displayOptions,
			show: { storageOperation: ['snapshotGetGet'] },
		}),
		...descriptionsnapshotHoldPost({
			...displayOptions,
			show: { storageOperation: ['snapshotHoldPost'] },
		}),
		...descriptionsnapshotListGet({
			...displayOptions,
			show: { storageOperation: ['snapshotListGet'] },
		}),
		...descriptionsnapshotPolicyCreatePost({
			...displayOptions,
			show: { storageOperation: ['snapshotPolicyCreatePost'] },
		}),
		...descriptionsnapshotPolicyDeleteDelete({
			...displayOptions,
			show: { storageOperation: ['snapshotPolicyDeleteDelete'] },
		}),
		...descriptionsnapshotPolicyGetGet({
			...displayOptions,
			show: { storageOperation: ['snapshotPolicyGetGet'] },
		}),
		...descriptionsnapshotPolicyListGet({
			...displayOptions,
			show: { storageOperation: ['snapshotPolicyListGet'] },
		}),
		...descriptionsnapshotPolicyUpdatePut({
			...displayOptions,
			show: { storageOperation: ['snapshotPolicyUpdatePut'] },
		}),
		...descriptionsnapshotUpdatePut({
			...displayOptions,
			show: { storageOperation: ['snapshotUpdatePut'] },
		}),
		...descriptionterminatePost({
			...displayOptions,
			show: { storageOperation: ['terminatePost'] },
		}),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('storageOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'accessPathGetGet':
			return executeaccessPathGetGet.call(this, itemIndex);
		case 'accessPathListGet':
			return executeaccessPathListGet.call(this, itemIndex);
		case 'aclCreatePost':
			return executeaclCreatePost.call(this, itemIndex);
		case 'aclDeleteDelete':
			return executeaclDeleteDelete.call(this, itemIndex);
		case 'aclGetGet':
			return executeaclGetGet.call(this, itemIndex);
		case 'aclListGet':
			return executeaclListGet.call(this, itemIndex);
		case 'changeContactPost':
			return executechangeContactPost.call(this, itemIndex);
		case 'confirmTerminationPost':
			return executeconfirmTerminationPost.call(this, itemIndex);
		case 'metricsTokenGet':
			return executemetricsTokenGet.call(this, itemIndex);
		case 'networkGetGet':
			return executenetworkGetGet.call(this, itemIndex);
		case 'networkListGet':
			return executenetworkListGet.call(this, itemIndex);
		case 'serviceGetGet':
			return executeserviceGetGet.call(this, itemIndex);
		case 'serviceInfosGet':
			return executeserviceInfosGet.call(this, itemIndex);
		case 'serviceInfosUpdatePut':
			return executeserviceInfosUpdatePut.call(this, itemIndex);
		case 'serviceListGet':
			return executeserviceListGet.call(this, itemIndex);
		case 'serviceUpdatePut':
			return executeserviceUpdatePut.call(this, itemIndex);
		case 'shareCreatePost':
			return executeshareCreatePost.call(this, itemIndex);
		case 'shareDeleteDelete':
			return executeshareDeleteDelete.call(this, itemIndex);
		case 'shareExtendPost':
			return executeshareExtendPost.call(this, itemIndex);
		case 'shareGetGet':
			return executeshareGetGet.call(this, itemIndex);
		case 'shareListGet':
			return executeshareListGet.call(this, itemIndex);
		case 'shareReplicationAcceptPost':
			return executeshareReplicationAcceptPost.call(this, itemIndex);
		case 'shareReplicationCreatePost':
			return executeshareReplicationCreatePost.call(this, itemIndex);
		case 'shareReplicationCutoverPost':
			return executeshareReplicationCutoverPost.call(this, itemIndex);
		case 'shareReplicationDeleteDelete':
			return executeshareReplicationDeleteDelete.call(this, itemIndex);
		case 'shareReplicationGetGet':
			return executeshareReplicationGetGet.call(this, itemIndex);
		case 'shareReplicationListGet':
			return executeshareReplicationListGet.call(this, itemIndex);
		case 'shareReplicationServicesCompatibilityGet':
			return executeshareReplicationServicesCompatibilityGet.call(this, itemIndex);
		case 'shareRevertPost':
			return executeshareRevertPost.call(this, itemIndex);
		case 'shareShrinkPost':
			return executeshareShrinkPost.call(this, itemIndex);
		case 'shareSnapshotPolicyGet':
			return executeshareSnapshotPolicyGet.call(this, itemIndex);
		case 'shareSnapshotPolicyUpdatePut':
			return executeshareSnapshotPolicyUpdatePut.call(this, itemIndex);
		case 'shareSnapshotReserveGet':
			return executeshareSnapshotReserveGet.call(this, itemIndex);
		case 'shareSnapshotReserveUpdatePut':
			return executeshareSnapshotReserveUpdatePut.call(this, itemIndex);
		case 'shareUpdatePut':
			return executeshareUpdatePut.call(this, itemIndex);
		case 'snapshotCreatePost':
			return executesnapshotCreatePost.call(this, itemIndex);
		case 'snapshotDeleteDelete':
			return executesnapshotDeleteDelete.call(this, itemIndex);
		case 'snapshotGetGet':
			return executesnapshotGetGet.call(this, itemIndex);
		case 'snapshotHoldPost':
			return executesnapshotHoldPost.call(this, itemIndex);
		case 'snapshotListGet':
			return executesnapshotListGet.call(this, itemIndex);
		case 'snapshotPolicyCreatePost':
			return executesnapshotPolicyCreatePost.call(this, itemIndex);
		case 'snapshotPolicyDeleteDelete':
			return executesnapshotPolicyDeleteDelete.call(this, itemIndex);
		case 'snapshotPolicyGetGet':
			return executesnapshotPolicyGetGet.call(this, itemIndex);
		case 'snapshotPolicyListGet':
			return executesnapshotPolicyListGet.call(this, itemIndex);
		case 'snapshotPolicyUpdatePut':
			return executesnapshotPolicyUpdatePut.call(this, itemIndex);
		case 'snapshotUpdatePut':
			return executesnapshotUpdatePut.call(this, itemIndex);
		case 'terminatePost':
			return executeterminatePost.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudStorage"`);
}

