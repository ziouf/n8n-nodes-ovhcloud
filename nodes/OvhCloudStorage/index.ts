import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionnetworkGetGet,
	execute as executenetworkGetGet,
} from './network/networkGetGet.operation';
import {
	description as descriptionnetworkListGet,
	execute as executenetworkListGet,
} from './network/networkListGet.operation';
import {
	description as descriptionchangeContactPost,
	execute as executechangeContactPost,
} from './service/changeContactPost.operation';
import {
	description as descriptionconfirmTerminationPost,
	execute as executeconfirmTerminationPost,
} from './service/confirmTerminationPost.operation';
import {
	description as descriptionmetricsTokenGet,
	execute as executemetricsTokenGet,
} from './service/metricsTokenGet.operation';
import {
	description as descriptionserviceGetGet,
	execute as executeserviceGetGet,
} from './service/serviceGetGet.operation';
import {
	description as descriptionserviceInfosGet,
	execute as executeserviceInfosGet,
} from './service/serviceInfosGet.operation';
import {
	description as descriptionserviceInfosUpdatePut,
	execute as executeserviceInfosUpdatePut,
} from './service/serviceInfosUpdatePut.operation';
import {
	description as descriptionserviceListGet,
	execute as executeserviceListGet,
} from './service/serviceListGet.operation';
import {
	description as descriptionserviceUpdatePut,
	execute as executeserviceUpdatePut,
} from './service/serviceUpdatePut.operation';
import {
	description as descriptionterminatePost,
	execute as executeterminatePost,
} from './service/terminatePost.operation';
import {
	description as descriptionaccessPathGetGet,
	execute as executeaccessPathGetGet,
} from './share/accessPath/accessPathGetGet.operation';
import {
	description as descriptionaccessPathListGet,
	execute as executeaccessPathListGet,
} from './share/accessPath/accessPathListGet.operation';
import {
	description as descriptionaclCreatePost,
	execute as executeaclCreatePost,
} from './share/acl/aclCreatePost.operation';
import {
	description as descriptionaclDeleteDelete,
	execute as executeaclDeleteDelete,
} from './share/acl/aclDeleteDelete.operation';
import {
	description as descriptionaclGetGet,
	execute as executeaclGetGet,
} from './share/acl/aclGetGet.operation';
import {
	description as descriptionaclListGet,
	execute as executeaclListGet,
} from './share/acl/aclListGet.operation';
import {
	description as descriptionshareCreatePost,
	execute as executeshareCreatePost,
} from './share/shareCreatePost.operation';
import {
	description as descriptionshareDeleteDelete,
	execute as executeshareDeleteDelete,
} from './share/shareDeleteDelete.operation';
import {
	description as descriptionshareExtendPost,
	execute as executeshareExtendPost,
} from './share/shareExtendPost.operation';
import {
	description as descriptionshareGetGet,
	execute as executeshareGetGet,
} from './share/shareGetGet.operation';
import {
	description as descriptionshareListGet,
	execute as executeshareListGet,
} from './share/shareListGet.operation';
import {
	description as descriptionshareRevertPost,
	execute as executeshareRevertPost,
} from './share/shareRevertPost.operation';
import {
	description as descriptionshareShrinkPost,
	execute as executeshareShrinkPost,
} from './share/shareShrinkPost.operation';
import {
	description as descriptionshareUpdatePut,
	execute as executeshareUpdatePut,
} from './share/shareUpdatePut.operation';
import {
	description as descriptionshareSnapshotPolicyGet,
	execute as executeshareSnapshotPolicyGet,
} from './share/snapshot/shareSnapshotPolicyGet.operation';
import {
	description as descriptionshareSnapshotPolicyUpdatePut,
	execute as executeshareSnapshotPolicyUpdatePut,
} from './share/snapshot/shareSnapshotPolicyUpdatePut.operation';
import {
	description as descriptionshareSnapshotReserveGet,
	execute as executeshareSnapshotReserveGet,
} from './share/snapshot/shareSnapshotReserveGet.operation';
import {
	description as descriptionshareSnapshotReserveUpdatePut,
	execute as executeshareSnapshotReserveUpdatePut,
} from './share/snapshot/shareSnapshotReserveUpdatePut.operation';
import {
	description as descriptionsnapshotCreatePost,
	execute as executesnapshotCreatePost,
} from './share/snapshot/snapshotCreatePost.operation';
import {
	description as descriptionsnapshotDeleteDelete,
	execute as executesnapshotDeleteDelete,
} from './share/snapshot/snapshotDeleteDelete.operation';
import {
	description as descriptionsnapshotGetGet,
	execute as executesnapshotGetGet,
} from './share/snapshot/snapshotGetGet.operation';
import {
	description as descriptionsnapshotHoldPost,
	execute as executesnapshotHoldPost,
} from './share/snapshot/snapshotHoldPost.operation';
import {
	description as descriptionsnapshotListGet,
	execute as executesnapshotListGet,
} from './share/snapshot/snapshotListGet.operation';
import {
	description as descriptionsnapshotUpdatePut,
	execute as executesnapshotUpdatePut,
} from './share/snapshot/snapshotUpdatePut.operation';
import {
	description as descriptionshareReplicationAcceptPost,
	execute as executeshareReplicationAcceptPost,
} from './shareReplication/shareReplicationAcceptPost.operation';
import {
	description as descriptionshareReplicationCreatePost,
	execute as executeshareReplicationCreatePost,
} from './shareReplication/shareReplicationCreatePost.operation';
import {
	description as descriptionshareReplicationCutoverPost,
	execute as executeshareReplicationCutoverPost,
} from './shareReplication/shareReplicationCutoverPost.operation';
import {
	description as descriptionshareReplicationDeleteDelete,
	execute as executeshareReplicationDeleteDelete,
} from './shareReplication/shareReplicationDeleteDelete.operation';
import {
	description as descriptionshareReplicationGetGet,
	execute as executeshareReplicationGetGet,
} from './shareReplication/shareReplicationGetGet.operation';
import {
	description as descriptionshareReplicationListGet,
	execute as executeshareReplicationListGet,
} from './shareReplication/shareReplicationListGet.operation';
import {
	description as descriptionshareReplicationServicesCompatibilityGet,
	execute as executeshareReplicationServicesCompatibilityGet,
} from './shareReplication/shareReplicationServicesCompatibilityGet.operation';
import {
	description as descriptionsnapshotPolicyCreatePost,
	execute as executesnapshotPolicyCreatePost,
} from './snapshotPolicy/snapshotPolicyCreatePost.operation';
import {
	description as descriptionsnapshotPolicyDeleteDelete,
	execute as executesnapshotPolicyDeleteDelete,
} from './snapshotPolicy/snapshotPolicyDeleteDelete.operation';
import {
	description as descriptionsnapshotPolicyGetGet,
	execute as executesnapshotPolicyGetGet,
} from './snapshotPolicy/snapshotPolicyGetGet.operation';
import {
	description as descriptionsnapshotPolicyListGet,
	execute as executesnapshotPolicyListGet,
} from './snapshotPolicy/snapshotPolicyListGet.operation';
import {
	description as descriptionsnapshotPolicyUpdatePut,
	execute as executesnapshotPolicyUpdatePut,
} from './snapshotPolicy/snapshotPolicyUpdatePut.operation';

const { description, execute } = createOperationDispatcher(
	'storageOperation',
	'ovhCloudStorage',
	[
	{
		name: 'Accept Share Replication',
		value: 'shareReplicationAcceptPost',
		action: 'accept Share Replication',
		execute: executeshareReplicationAcceptPost,
		description: descriptionshareReplicationAcceptPost,
	},
	{
		name: 'Change Contact',
		value: 'changeContactPost',
		action: 'change Contact',
		execute: executechangeContactPost,
		description: descriptionchangeContactPost,
	},
	{
		name: 'Confirm Termination',
		value: 'confirmTerminationPost',
		action: 'confirm Termination',
		execute: executeconfirmTerminationPost,
		description: descriptionconfirmTerminationPost,
	},
	{
		name: 'Create ACL',
		value: 'aclCreatePost',
		action: 'create ACL',
		execute: executeaclCreatePost,
		description: descriptionaclCreatePost,
	},
	{
		name: 'Create Share',
		value: 'shareCreatePost',
		action: 'create Share',
		execute: executeshareCreatePost,
		description: descriptionshareCreatePost,
	},
	{
		name: 'Create Share Replication',
		value: 'shareReplicationCreatePost',
		action: 'create Share Replication',
		execute: executeshareReplicationCreatePost,
		description: descriptionshareReplicationCreatePost,
	},
	{
		name: 'Create Snapshot',
		value: 'snapshotCreatePost',
		action: 'create Snapshot',
		execute: executesnapshotCreatePost,
		description: descriptionsnapshotCreatePost,
	},
	{
		name: 'Create Snapshot Policy',
		value: 'snapshotPolicyCreatePost',
		action: 'create Snapshot Policy',
		execute: executesnapshotPolicyCreatePost,
		description: descriptionsnapshotPolicyCreatePost,
	},
	{
		name: 'Cutover Share Replication',
		value: 'shareReplicationCutoverPost',
		action: 'cutover Share Replication',
		execute: executeshareReplicationCutoverPost,
		description: descriptionshareReplicationCutoverPost,
	},
	{
		name: 'Delete ACL',
		value: 'aclDeleteDelete',
		action: 'delete ACL',
		execute: executeaclDeleteDelete,
		description: descriptionaclDeleteDelete,
	},
	{
		name: 'Delete Share',
		value: 'shareDeleteDelete',
		action: 'delete Share',
		execute: executeshareDeleteDelete,
		description: descriptionshareDeleteDelete,
	},
	{
		name: 'Delete Share Replication',
		value: 'shareReplicationDeleteDelete',
		action: 'delete Share Replication',
		execute: executeshareReplicationDeleteDelete,
		description: descriptionshareReplicationDeleteDelete,
	},
	{
		name: 'Delete Snapshot',
		value: 'snapshotDeleteDelete',
		action: 'delete Snapshot',
		execute: executesnapshotDeleteDelete,
		description: descriptionsnapshotDeleteDelete,
	},
	{
		name: 'Delete Snapshot Policy',
		value: 'snapshotPolicyDeleteDelete',
		action: 'delete Snapshot Policy',
		execute: executesnapshotPolicyDeleteDelete,
		description: descriptionsnapshotPolicyDeleteDelete,
	},
	{
		name: 'Extend Share',
		value: 'shareExtendPost',
		action: 'extend Share',
		execute: executeshareExtendPost,
		description: descriptionshareExtendPost,
	},
	{
		name: 'Get Access Path',
		value: 'accessPathGetGet',
		action: 'get Access Path',
		execute: executeaccessPathGetGet,
		description: descriptionaccessPathGetGet,
	},
	{
		name: 'Get ACL',
		value: 'aclGetGet',
		action: 'get ACL',
		execute: executeaclGetGet,
		description: descriptionaclGetGet,
	},
	{
		name: 'Get Metrics Token',
		value: 'metricsTokenGet',
		action: 'get Metrics Token',
		execute: executemetricsTokenGet,
		description: descriptionmetricsTokenGet,
	},
	{
		name: 'Get Network',
		value: 'networkGetGet',
		action: 'get Network',
		execute: executenetworkGetGet,
		description: descriptionnetworkGetGet,
	},
	{
		name: 'Get Service',
		value: 'serviceGetGet',
		action: 'get Service',
		execute: executeserviceGetGet,
		description: descriptionserviceGetGet,
	},
	{
		name: 'Get Service Infos',
		value: 'serviceInfosGet',
		action: 'get Service Infos',
		execute: executeserviceInfosGet,
		description: descriptionserviceInfosGet,
	},
	{
		name: 'Get Share',
		value: 'shareGetGet',
		action: 'get Share',
		execute: executeshareGetGet,
		description: descriptionshareGetGet,
	},
	{
		name: 'Get Share Replication',
		value: 'shareReplicationGetGet',
		action: 'get Share Replication',
		execute: executeshareReplicationGetGet,
		description: descriptionshareReplicationGetGet,
	},
	{
		name: 'Get Share Snapshot Policy',
		value: 'shareSnapshotPolicyGet',
		action: 'get Share Snapshot Policy',
		execute: executeshareSnapshotPolicyGet,
		description: descriptionshareSnapshotPolicyGet,
	},
	{
		name: 'Get Share Snapshot Reserve',
		value: 'shareSnapshotReserveGet',
		action: 'get Share Snapshot Reserve',
		execute: executeshareSnapshotReserveGet,
		description: descriptionshareSnapshotReserveGet,
	},
	{
		name: 'Get Snapshot',
		value: 'snapshotGetGet',
		action: 'get Snapshot',
		execute: executesnapshotGetGet,
		description: descriptionsnapshotGetGet,
	},
	{
		name: 'Get Snapshot Policy',
		value: 'snapshotPolicyGetGet',
		action: 'get Snapshot Policy',
		execute: executesnapshotPolicyGetGet,
		description: descriptionsnapshotPolicyGetGet,
	},
	{
		name: 'Hold Snapshot',
		value: 'snapshotHoldPost',
		action: 'hold Snapshot',
		execute: executesnapshotHoldPost,
		description: descriptionsnapshotHoldPost,
	},
	{
		name: 'List Access Paths',
		value: 'accessPathListGet',
		action: 'list Access Paths',
		execute: executeaccessPathListGet,
		description: descriptionaccessPathListGet,
	},
	{
		name: 'List ACLs',
		value: 'aclListGet',
		action: 'list ACLs',
		execute: executeaclListGet,
		description: descriptionaclListGet,
	},
	{
		name: 'List Networks',
		value: 'networkListGet',
		action: 'list Networks',
		execute: executenetworkListGet,
		description: descriptionnetworkListGet,
	},
	{
		name: 'List Services',
		value: 'serviceListGet',
		action: 'list Services',
		execute: executeserviceListGet,
		description: descriptionserviceListGet,
		default: true,
	},
	{
		name: 'List Share Replication Compatible Services',
		value: 'shareReplicationServicesCompatibilityGet',
		action: 'list Share Replication Compatible Services',
		execute: executeshareReplicationServicesCompatibilityGet,
		description: descriptionshareReplicationServicesCompatibilityGet,
	},
	{
		name: 'List Share Replications',
		value: 'shareReplicationListGet',
		action: 'list Share Replications',
		execute: executeshareReplicationListGet,
		description: descriptionshareReplicationListGet,
	},
	{
		name: 'List Shares',
		value: 'shareListGet',
		action: 'list Shares',
		execute: executeshareListGet,
		description: descriptionshareListGet,
	},
	{
		name: 'List Snapshot Policies',
		value: 'snapshotPolicyListGet',
		action: 'list Snapshot Policies',
		execute: executesnapshotPolicyListGet,
		description: descriptionsnapshotPolicyListGet,
	},
	{
		name: 'List Snapshots',
		value: 'snapshotListGet',
		action: 'list Snapshots',
		execute: executesnapshotListGet,
		description: descriptionsnapshotListGet,
	},
	{
		name: 'Revert Share',
		value: 'shareRevertPost',
		action: 'revert Share',
		execute: executeshareRevertPost,
		description: descriptionshareRevertPost,
	},
	{
		name: 'Shrink Share',
		value: 'shareShrinkPost',
		action: 'shrink Share',
		execute: executeshareShrinkPost,
		description: descriptionshareShrinkPost,
	},
	{
		name: 'Terminate Service',
		value: 'terminatePost',
		action: 'terminate Service',
		execute: executeterminatePost,
		description: descriptionterminatePost,
	},
	{
		name: 'Update Service',
		value: 'serviceUpdatePut',
		action: 'update Service',
		execute: executeserviceUpdatePut,
		description: descriptionserviceUpdatePut,
	},
	{
		name: 'Update Service Infos',
		value: 'serviceInfosUpdatePut',
		action: 'update Service Infos',
		execute: executeserviceInfosUpdatePut,
		description: descriptionserviceInfosUpdatePut,
	},
	{
		name: 'Update Share',
		value: 'shareUpdatePut',
		action: 'update Share',
		execute: executeshareUpdatePut,
		description: descriptionshareUpdatePut,
	},
	{
		name: 'Update Share Snapshot Policy',
		value: 'shareSnapshotPolicyUpdatePut',
		action: 'update Share Snapshot Policy',
		execute: executeshareSnapshotPolicyUpdatePut,
		description: descriptionshareSnapshotPolicyUpdatePut,
	},
	{
		name: 'Update Share Snapshot Reserve',
		value: 'shareSnapshotReserveUpdatePut',
		action: 'update Share Snapshot Reserve',
		execute: executeshareSnapshotReserveUpdatePut,
		description: descriptionshareSnapshotReserveUpdatePut,
	},
	{
		name: 'Update Snapshot',
		value: 'snapshotUpdatePut',
		action: 'update Snapshot',
		execute: executesnapshotUpdatePut,
		description: descriptionsnapshotUpdatePut,
	},
	{
		name: 'Update Snapshot Policy',
		value: 'snapshotPolicyUpdatePut',
		action: 'update Snapshot Policy',
		execute: executesnapshotPolicyUpdatePut,
		description: descriptionsnapshotPolicyUpdatePut,
	},
	],
);

export { description, execute };
