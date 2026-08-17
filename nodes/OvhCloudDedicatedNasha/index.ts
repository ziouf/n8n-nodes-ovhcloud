import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionDedicatedNashaChangecontactCreatePost,
	execute as executeDedicatedNashaChangecontactCreatePost,
} from './DedicatedNashaChangecontactCreate.operation';
import {
	description as descriptionDedicatedNashaConfirmterminationCreatePost,
	execute as executeDedicatedNashaConfirmterminationCreatePost,
} from './DedicatedNashaConfirmterminationCreate.operation';
import {
	description as descriptionDedicatedNashaGetGet,
	execute as executeDedicatedNashaGetGet,
} from './DedicatedNashaGet.operation';
import {
	description as descriptionDedicatedNashaGetServicenameGet,
	execute as executeDedicatedNashaGetServicenameGet,
} from './DedicatedNashaGetServicename.operation';
import {
	description as descriptionDedicatedNashaMetricstokenGetGet,
	execute as executeDedicatedNashaMetricstokenGetGet,
} from './DedicatedNashaMetricstokenGet.operation';
import {
	description as descriptionDedicatedNashaPartitionCreatePost,
	execute as executeDedicatedNashaPartitionCreatePost,
} from './DedicatedNashaPartitionCreate.operation';
import {
	description as descriptionDedicatedNashaPartitionDeleteDelete,
	execute as executeDedicatedNashaPartitionDeleteDelete,
} from './DedicatedNashaPartitionDelete.operation';
import {
	description as descriptionDedicatedNashaPartitionGetGet,
	execute as executeDedicatedNashaPartitionGetGet,
} from './DedicatedNashaPartitionGet.operation';
import {
	description as descriptionDedicatedNashaServiceinfosGetGet,
	execute as executeDedicatedNashaServiceinfosGetGet,
} from './DedicatedNashaServiceinfosGet.operation';
import {
	description as descriptionDedicatedNashaServiceinfosUpdatePut,
	execute as executeDedicatedNashaServiceinfosUpdatePut,
} from './DedicatedNashaServiceinfosUpdate.operation';
import {
	description as descriptionDedicatedNashaTaskGetGet,
	execute as executeDedicatedNashaTaskGetGet,
} from './DedicatedNashaTaskGet.operation';
import {
	description as descriptionDedicatedNashaTerminateCreatePost,
	execute as executeDedicatedNashaTerminateCreatePost,
} from './DedicatedNashaTerminateCreate.operation';
import {
	description as descriptionDedicatedNashaUpdatePut,
	execute as executeDedicatedNashaUpdatePut,
} from './DedicatedNashaUpdate.operation';
import {
	description as descriptionDedicatedNashaUseGetGet,
	execute as executeDedicatedNashaUseGetGet,
} from './DedicatedNashaUseGet.operation';
import {
	description as descriptionNashaPartitionAccessCreatePost,
	execute as executeNashaPartitionAccessCreatePost,
} from './NashaPartitionAccessCreate.operation';
import {
	description as descriptionNashaPartitionAccessDeleteDelete,
	execute as executeNashaPartitionAccessDeleteDelete,
} from './NashaPartitionAccessDelete.operation';
import {
	description as descriptionNashaPartitionAccessGetGet,
	execute as executeNashaPartitionAccessGetGet,
} from './NashaPartitionAccessGet.operation';
import {
	description as descriptionNashaPartitionAuthorizableblocksGetGet,
	execute as executeNashaPartitionAuthorizableblocksGetGet,
} from './NashaPartitionAuthorizableblocksGet.operation';
import {
	description as descriptionNashaPartitionAuthorizableipsGetGet,
	execute as executeNashaPartitionAuthorizableipsGetGet,
} from './NashaPartitionAuthorizableipsGet.operation';
import {
	description as descriptionNashaPartitionCustomsnapshotCreatePost,
	execute as executeNashaPartitionCustomsnapshotCreatePost,
} from './NashaPartitionCustomsnapshotCreate.operation';
import {
	description as descriptionNashaPartitionCustomsnapshotDeleteDelete,
	execute as executeNashaPartitionCustomsnapshotDeleteDelete,
} from './NashaPartitionCustomsnapshotDelete.operation';
import {
	description as descriptionNashaPartitionCustomsnapshotGetGet,
	execute as executeNashaPartitionCustomsnapshotGetGet,
} from './NashaPartitionCustomsnapshotGet.operation';
import {
	description as descriptionNashaPartitionOptionsCreatePost,
	execute as executeNashaPartitionOptionsCreatePost,
} from './NashaPartitionOptionsCreate.operation';
import {
	description as descriptionNashaPartitionQuotaCreatePost,
	execute as executeNashaPartitionQuotaCreatePost,
} from './NashaPartitionQuotaCreate.operation';
import {
	description as descriptionNashaPartitionQuotaDeleteDelete,
	execute as executeNashaPartitionQuotaDeleteDelete,
} from './NashaPartitionQuotaDelete.operation';
import {
	description as descriptionNashaPartitionQuotaGetGet,
	execute as executeNashaPartitionQuotaGetGet,
} from './NashaPartitionQuotaGet.operation';
import {
	description as descriptionNashaPartitionSnapshotCreatePost,
	execute as executeNashaPartitionSnapshotCreatePost,
} from './NashaPartitionSnapshotCreate.operation';
import {
	description as descriptionNashaPartitionSnapshotGetGet,
	execute as executeNashaPartitionSnapshotGetGet,
} from './NashaPartitionSnapshotGet.operation';
import {
	description as descriptionNashaPartitionTemplateusageGetGet,
	execute as executeNashaPartitionTemplateusageGetGet,
} from './NashaPartitionTemplateusageGet.operation';
import {
	description as descriptionNashaPartitionUseGetGet,
	execute as executeNashaPartitionUseGetGet,
} from './NashaPartitionUseGet.operation';


const { description, execute } = createOperationDispatcher(
	'dedicatedNashaOperation',
	'dedicatednasha',
	[
	{
		name: 'Add A New Acl Entry',
		value: 'NashaPartitionAccessCreate',
		action: 'Add a new ACL entry',
		execute: executeNashaPartitionAccessCreatePost,
		description: descriptionNashaPartitionAccessCreatePost,
		show: false,
		default: true,
	},
	{
		name: 'Alter This Object Properties',
		value: 'DedicatedNashaUpdate',
		action: 'Alter this object properties',
		execute: executeDedicatedNashaUpdatePut,
		description: descriptionDedicatedNashaUpdatePut,
		show: false,
	},
	{
		name: 'Ask For The Termination Of Your Service',
		value: 'DedicatedNashaTerminateCreate',
		action: 'Ask for the termination of your service',
		execute: executeDedicatedNashaTerminateCreatePost,
		description: descriptionDedicatedNashaTerminateCreatePost,
		show: false,
	},
	{
		name: 'Confirm Service Termination',
		value: 'DedicatedNashaConfirmterminationCreate',
		action: 'Confirm service termination',
		execute: executeDedicatedNashaConfirmterminationCreatePost,
		description: descriptionDedicatedNashaConfirmterminationCreatePost,
		show: false,
	},
	{
		name: 'Create A New Partition',
		value: 'DedicatedNashaPartitionCreate',
		action: 'Create a new partition',
		execute: executeDedicatedNashaPartitionCreatePost,
		description: descriptionDedicatedNashaPartitionCreatePost,
		show: false,
	},
	{
		name: 'Create A New Snapshot',
		value: 'NashaPartitionCustomsnapshotCreate',
		action: 'Create a new snapshot',
		execute: executeNashaPartitionCustomsnapshotCreatePost,
		description: descriptionNashaPartitionCustomsnapshotCreatePost,
		show: false,
	},
	{
		name: 'Delete A Given Quota',
		value: 'NashaPartitionQuotaDelete',
		action: 'Delete a given quota',
		execute: executeNashaPartitionQuotaDeleteDelete,
		description: descriptionNashaPartitionQuotaDeleteDelete,
		show: false,
	},
	{
		name: 'Delete A Given Snapshot',
		value: 'NashaPartitionCustomsnapshotDelete',
		action: 'Delete a given snapshot',
		execute: executeNashaPartitionCustomsnapshotDeleteDelete,
		description: descriptionNashaPartitionCustomsnapshotDeleteDelete,
		show: false,
	},
	{
		name: 'Delete An Acl Entry',
		value: 'NashaPartitionAccessDelete',
		action: 'Delete an ACL entry',
		execute: executeNashaPartitionAccessDeleteDelete,
		description: descriptionNashaPartitionAccessDeleteDelete,
		show: false,
	},
	{
		name: 'Delete This Partition',
		value: 'DedicatedNashaPartitionDelete',
		action: 'Delete this partition',
		execute: executeDedicatedNashaPartitionDeleteDelete,
		description: descriptionDedicatedNashaPartitionDeleteDelete,
		show: false,
	},
	{
		name: 'Get Acl For This Partition',
		value: 'NashaPartitionAccessGet',
		action: 'get ACL for this partition',
		execute: executeNashaPartitionAccessGetGet,
		description: descriptionNashaPartitionAccessGetGet,
		show: false,
	},
	{
		name: 'Get All Ips That Can Be Used In The Acl',
		value: 'NashaPartitionAuthorizableipsGet',
		action: 'Get all IPs that can be used in the ACL',
		execute: executeNashaPartitionAuthorizableipsGetGet,
		description: descriptionNashaPartitionAuthorizableipsGetGet,
		show: false,
	},
	{
		name: 'Get All Ripe/arin Blocks That Can Be Used In The Acl',
		value: 'NashaPartitionAuthorizableblocksGet',
		action: 'Get all RIPE/ARIN blocks that can be used in the ACL',
		execute: executeNashaPartitionAuthorizableblocksGetGet,
		description: descriptionNashaPartitionAuthorizableblocksGetGet,
		show: false,
	},
	{
		name: 'Get All The Template Usages Options Applicable To This Partition.',
		value: 'NashaPartitionTemplateusageGet',
		action: 'Get all the template usages options applicable to this partition.',
		execute: executeNashaPartitionTemplateusageGetGet,
		description: descriptionNashaPartitionTemplateusageGetGet,
		show: false,
	},
	{
		name: 'Get Custom Snapshots For This Partition',
		value: 'NashaPartitionCustomsnapshotGet',
		action: 'Get custom snapshots for this partition',
		execute: executeNashaPartitionCustomsnapshotGetGet,
		description: descriptionNashaPartitionCustomsnapshotGetGet,
		show: false,
	},
	{
		name: 'Get Partition List',
		value: 'DedicatedNashaPartitionGet',
		action: 'Get partition list',
		execute: executeDedicatedNashaPartitionGetGet,
		description: descriptionDedicatedNashaPartitionGetGet,
		show: false,
	},
	{
		name: 'Get Quota For This Partition',
		value: 'NashaPartitionQuotaGet',
		action: 'Get quota for this partition',
		execute: executeNashaPartitionQuotaGetGet,
		description: descriptionNashaPartitionQuotaGetGet,
		show: false,
	},
	{
		name: 'Get Scheduled Snapshot Types For This Partition',
		value: 'NashaPartitionSnapshotGet',
		action: 'Get scheduled snapshot types for this partition',
		execute: executeNashaPartitionSnapshotGetGet,
		description: descriptionNashaPartitionSnapshotGetGet,
		show: false,
	},
	{
		name: 'Get Service Information',
		value: 'DedicatedNashaServiceinfosGet',
		action: 'Get service information',
		execute: executeDedicatedNashaServiceinfosGetGet,
		description: descriptionDedicatedNashaServiceinfosGetGet,
		show: false,
	},
	{
		name: 'Get This Object Properties',
		value: 'DedicatedNashaGetServicename',
		action: 'Get this object properties',
		execute: executeDedicatedNashaGetServicenameGet,
		description: descriptionDedicatedNashaGetServicenameGet,
		show: false,
	},
	{
		name: 'Launch A Contact Change Procedure',
		value: 'DedicatedNashaChangecontactCreate',
		action: 'Launch a contact change procedure',
		execute: executeDedicatedNashaChangecontactCreatePost,
		description: descriptionDedicatedNashaChangecontactCreatePost,
		show: false,
	},
	{
		name: 'List Available Services',
		value: 'DedicatedNashaGet',
		action: 'List available services',
		execute: executeDedicatedNashaGetGet,
		description: descriptionDedicatedNashaGetGet,
		show: false,
	},
	{
		name: 'Return A Read Token For Manager Mimir Metrics',
		value: 'DedicatedNashaMetricstokenGet',
		action: 'Return a read token for manager mimir metrics',
		execute: executeDedicatedNashaMetricstokenGetGet,
		description: descriptionDedicatedNashaMetricstokenGetGet,
		show: false,
	},
	{
		name: 'Return Statistics About The Nas',
		value: 'DedicatedNashaUseGet',
		action: 'Return statistics about the nas',
		execute: executeDedicatedNashaUseGetGet,
		description: descriptionDedicatedNashaUseGetGet,
		show: false,
	},
	{
		name: 'Return Statistics About The Partition',
		value: 'NashaPartitionUseGet',
		action: 'Return statistics about the partition',
		execute: executeNashaPartitionUseGetGet,
		description: descriptionNashaPartitionUseGetGet,
		show: false,
	},
	{
		name: 'Schedule A New Snapshot Type',
		value: 'NashaPartitionSnapshotCreate',
		action: 'Schedule a new snapshot type',
		execute: executeNashaPartitionSnapshotCreatePost,
		description: descriptionNashaPartitionSnapshotCreatePost,
		show: false,
	},
	{
		name: 'Set A New Quota',
		value: 'NashaPartitionQuotaCreate',
		action: 'Set a new quota',
		execute: executeNashaPartitionQuotaCreatePost,
		description: descriptionNashaPartitionQuotaCreatePost,
		show: false,
	},
	{
		name: 'Setup Options',
		value: 'NashaPartitionOptionsCreate',
		action: 'Setup options',
		execute: executeNashaPartitionOptionsCreatePost,
		description: descriptionNashaPartitionOptionsCreatePost,
		show: false,
	},
	{
		name: 'Update Service Information',
		value: 'DedicatedNashaServiceinfosUpdate',
		action: 'Update service information',
		execute: executeDedicatedNashaServiceinfosUpdatePut,
		description: descriptionDedicatedNashaServiceinfosUpdatePut,
		show: false,
	},
	{
		name: 'View Task List',
		value: 'DedicatedNashaTaskGet',
		action: 'View task list',
		execute: executeDedicatedNashaTaskGetGet,
		description: descriptionDedicatedNashaTaskGetGet,
		show: false,
	},
	],
);

export { description, execute };
