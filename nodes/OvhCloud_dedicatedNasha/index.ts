/**
 * @brief DedicatedNasha resource operations for n8n node
 *
 * Provides comprehensive operations for managing OVH Dedicated Nasha services including:
 * - List all Dedicated Nasha services for the authenticated account
 * - Get detailed information about a specific Dedicated Nasha service
 * - Update storage properties
 * - Manage service information
 * - Change contact, terminate, and confirm termination
 * - Retrieve metrics tokens and usage statistics
 * - Manage partitions, ACLs, quotas, snapshots, and tasks
 *
 * Available operations:
 * - `list`: List all Dedicated Nasha services
 * - `get`: Get details of a specific Dedicated Nasha service
 * - `update`: Update storage properties
 * - `getServiceInfos`: Get service information
 * - `updateServiceInfos`: Update service information
 * - `changeContact`: Change the contact for a service
 * - `terminate`: Request termination of a service
 * - `confirmTermination`: Confirm termination of a service
 * - `getMetricsToken`: Get metrics read token
 * - `getUse`: Get NAS usage statistics
 * - `listPartitions`: List all partitions
 * - `getPartition`: Get partition properties
 * - `createPartition`: Create a new partition
 * - `updatePartition`: Update partition properties
 * - `deletePartition`: Delete a partition
 * - `listPartitionAccess`: List ACLs for a partition
 * - `getPartitionAccess`: Get ACL details
 * - `createPartitionAccess`: Add an ACL
 * - `deletePartitionAccess`: Delete an ACL
 * - `listPartitionAuthorizableBlocks`: Get authorizable blocks
 * - `listPartitionAuthorizableIps`: Get authorizable IPs
 * - `listPartitionCustomSnapshots`: List custom snapshots
 * - `getPartitionCustomSnapshot`: Get custom snapshot details
 * - `createPartitionCustomSnapshot`: Create a custom snapshot
 * - `deletePartitionCustomSnapshot`: Delete a custom snapshot
 * - `getPartitionOptions`: Get partition options
 * - `setupPartitionOptions`: Setup partition options
 * - `listPartitionQuotas`: List quotas
 * - `getPartitionQuota`: Get quota details
 * - `createPartitionQuota`: Set a quota
 * - `deletePartitionQuota`: Delete a quota
 * - `listPartitionSnapshots`: List scheduled snapshots
 * - `getPartitionSnapshot`: Get scheduled snapshot details
 * - `createPartitionSnapshot`: Schedule a snapshot
 * - `deletePartitionSnapshot`: Delete a scheduled snapshot
 * - `getPartitionTemplateUsage`: Get template usage options
 * - `getPartitionUse`: Get partition usage statistics
 * - `listTasks`: List all tasks
 * - `getTask`: Get task details
 *
 * @remarks
 * Dedicated Nasha services are managed under `/dedicated/nasha` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import * as serviceInfos from './resources/serviceInfos/index';
import * as changeContact from './resources/changeContact/index';
import * as terminate from './resources/terminate/index';
import * as confirmTermination from './resources/confirmTermination/index';
import * as metricsToken from './resources/metricsToken/index';
import * as use from './resources/use/index';
import * as partition from './resources/partition/index';
import * as partitionAccess from './resources/partitionAccess/index';
import * as partitionAuthorizable from './resources/partitionAuthorizable/index';
import * as partitionCustomSnapshot from './resources/partitionCustomSnapshot/index';
import * as partitionOptions from './resources/partitionOptions/index';
import * as partitionQuota from './resources/partitionQuota/index';
import * as partitionSnapshot from './resources/partitionSnapshot/index';
import * as partitionTemplateUsage from './resources/partitionTemplateUsage/index';
import * as partitionUse from './resources/partitionUse/index';
import * as task from './resources/task/index';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Dedicated Nasha Operation',
			name: 'dedicatedNashaOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change the contact for a Dedicated Nasha service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a Dedicated Nasha service',
				},
				{
					name: 'Create Partition',
					value: 'createPartition',
					action: 'Create a new partition',
				},
				{
					name: 'Create Partition Access',
					value: 'createPartitionAccess',
					action: 'Add an ACL to a partition',
				},
				{
					name: 'Create Partition Custom Snapshot',
					value: 'createPartitionCustomSnapshot',
					action: 'Create a custom snapshot for a partition',
				},
				{
					name: 'Create Partition Quota',
					value: 'createPartitionQuota',
					action: 'Set a quota for a partition',
				},
				{
					name: 'Create Partition Snapshot',
					value: 'createPartitionSnapshot',
					action: 'Schedule a snapshot for a partition',
				},
				{
					name: 'Delete Partition',
					value: 'deletePartition',
					action: 'Delete a partition',
				},
				{
					name: 'Delete Partition Access',
					value: 'deletePartitionAccess',
					action: 'Delete an ACL from a partition',
				},
				{
					name: 'Delete Partition Custom Snapshot',
					value: 'deletePartitionCustomSnapshot',
					action: 'Delete a custom snapshot',
				},
				{
					name: 'Delete Partition Quota',
					value: 'deletePartitionQuota',
					action: 'Delete a quota',
				},
				{
					name: 'Delete Partition Snapshot',
					value: 'deletePartitionSnapshot',
					action: 'Delete a scheduled snapshot',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Nasha service',
				},
				{
					name: 'Get Metrics Token',
					value: 'getMetricsToken',
					action: 'Get the metrics read token',
				},
				{
					name: 'Get Partition',
					value: 'getPartition',
					action: 'Get partition properties',
				},
				{
					name: 'Get Partition Access',
					value: 'getPartitionAccess',
					action: 'Get ACL details',
				},
				{
					name: 'Get Partition Custom Snapshot',
					value: 'getPartitionCustomSnapshot',
					action: 'Get custom snapshot details',
				},
				{
					name: 'Get Partition Options',
					value: 'getPartitionOptions',
					action: 'Get partition options',
				},
				{
					name: 'Get Partition Quota',
					value: 'getPartitionQuota',
					action: 'Get quota details',
				},
				{
					name: 'Get Partition Snapshot',
					value: 'getPartitionSnapshot',
					action: 'Get scheduled snapshot details',
				},
				{
					name: 'Get Partition Template Usage',
					value: 'getPartitionTemplateUsage',
					action: 'Get template usage options',
				},
				{
					name: 'Get Partition Use',
					value: 'getPartitionUse',
					action: 'Get partition usage statistics',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get task details',
				},
				{
					name: 'Get Use',
					value: 'getUse',
					action: 'Get NAS usage statistics',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Nasha services',
				},
				{
					name: 'List Partition Access',
					value: 'listPartitionAccess',
					action: 'List ACLs for a partition',
				},
				{
					name: 'List Partition Authorizable Blocks',
					value: 'listPartitionAuthorizableBlocks',
					action: 'Get authorizable blocks for a partition',
				},
				{
					name: 'List Partition Authorizable IPs',
					value: 'listPartitionAuthorizableIps',
					action: 'Get authorizable IPs for a partition',
				},
				{
					name: 'List Partition Custom Snapshots',
					value: 'listPartitionCustomSnapshots',
					action: 'List custom snapshots for a partition',
				},
				{
					name: 'List Partition Quotas',
					value: 'listPartitionQuotas',
					action: 'List quotas for a partition',
				},
				{
					name: 'List Partition Snapshots',
					value: 'listPartitionSnapshots',
					action: 'List scheduled snapshots for a partition',
				},
				{
					name: 'List Partitions',
					value: 'listPartitions',
					action: 'List all partitions',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List all tasks',
				},
				{
					name: 'Setup Partition Options',
					value: 'setupPartitionOptions',
					action: 'Setup partition options',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Request termination of a Dedicated Nasha service',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update storage properties',
				},
				{
					name: 'Update Partition',
					value: 'updatePartition',
					action: 'Update partition properties',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['update'] },
		}),
		...serviceInfos.descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getServiceInfos'] },
		}),
		...serviceInfos.descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['updateServiceInfos'] },
		}),
		...changeContact.descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['changeContact'] },
		}),
		...terminate.descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['terminate'] },
		}),
		...confirmTermination.descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['confirmTermination'] },
		}),
		...metricsToken.descriptionGetMetricsToken({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getMetricsToken'] },
		}),
		...use.descriptionGetUse({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getUse'] },
		}),
		...partition.descriptionListPartitions({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['listPartitions'] },
		}),
		...partition.descriptionGetPartition({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getPartition'] },
		}),
		...partition.descriptionCreatePartition({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['createPartition'] },
		}),
		...partition.descriptionUpdatePartition({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['updatePartition'] },
		}),
		...partition.descriptionDeletePartition({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['deletePartition'] },
		}),
		...partitionAccess.descriptionListPartitionAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['listPartitionAccess'] },
		}),
		...partitionAccess.descriptionGetPartitionAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getPartitionAccess'] },
		}),
		...partitionAccess.descriptionCreatePartitionAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['createPartitionAccess'] },
		}),
		...partitionAccess.descriptionDeletePartitionAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['deletePartitionAccess'] },
		}),
		...partitionAuthorizable.descriptionListPartitionAuthorizableBlocks({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedNashaOperation: ['listPartitionAuthorizableBlocks'],
			},
		}),
		...partitionAuthorizable.descriptionListPartitionAuthorizableIps({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedNashaOperation: ['listPartitionAuthorizableIps'],
			},
		}),
		...partitionCustomSnapshot.descriptionListPartitionCustomSnapshots({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedNashaOperation: ['listPartitionCustomSnapshots'],
			},
		}),
		...partitionCustomSnapshot.descriptionGetPartitionCustomSnapshot({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedNashaOperation: ['getPartitionCustomSnapshot'],
			},
		}),
		...partitionCustomSnapshot.descriptionCreatePartitionCustomSnapshot({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedNashaOperation: ['createPartitionCustomSnapshot'],
			},
		}),
		...partitionCustomSnapshot.descriptionDeletePartitionCustomSnapshot({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedNashaOperation: ['deletePartitionCustomSnapshot'],
			},
		}),
		...partitionOptions.descriptionGetPartitionOptions({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getPartitionOptions'] },
		}),
		...partitionOptions.descriptionSetupPartitionOptions({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['setupPartitionOptions'] },
		}),
		...partitionQuota.descriptionListPartitionQuotas({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['listPartitionQuotas'] },
		}),
		...partitionQuota.descriptionGetPartitionQuota({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getPartitionQuota'] },
		}),
		...partitionQuota.descriptionCreatePartitionQuota({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['createPartitionQuota'] },
		}),
		...partitionQuota.descriptionDeletePartitionQuota({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['deletePartitionQuota'] },
		}),
		...partitionSnapshot.descriptionListPartitionSnapshots({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['listPartitionSnapshots'] },
		}),
		...partitionSnapshot.descriptionGetPartitionSnapshot({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getPartitionSnapshot'] },
		}),
		...partitionSnapshot.descriptionCreatePartitionSnapshot({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['createPartitionSnapshot'] },
		}),
		...partitionSnapshot.descriptionDeletePartitionSnapshot({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['deletePartitionSnapshot'] },
		}),
		...partitionTemplateUsage.descriptionGetPartitionTemplateUsage({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedNashaOperation: ['getPartitionTemplateUsage'],
			},
		}),
		...partitionUse.descriptionGetPartitionUse({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getPartitionUse'] },
		}),
		...task.descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['listTasks'] },
		}),
		...task.descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedNashaOperation: ['getTask'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Nasha operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedNashaOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'getServiceInfos':
			return await serviceInfos.executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await serviceInfos.executeUpdateServiceInfos.call(this);
		case 'changeContact':
			return await changeContact.executeChangeContact.call(this);
		case 'terminate':
			return await terminate.executeTerminate.call(this);
		case 'confirmTermination':
			return await confirmTermination.executeConfirmTermination.call(this);
		case 'getMetricsToken':
			return await metricsToken.executeGetMetricsToken.call(this);
		case 'getUse':
			return await use.executeGetUse.call(this);
		case 'listPartitions':
			return await partition.executeListPartitions.call(this);
		case 'getPartition':
			return await partition.executeGetPartition.call(this);
		case 'createPartition':
			return await partition.executeCreatePartition.call(this);
		case 'updatePartition':
			return await partition.executeUpdatePartition.call(this);
		case 'deletePartition':
			return await partition.executeDeletePartition.call(this);
		case 'listPartitionAccess':
			return await partitionAccess.executeListPartitionAccess.call(this);
		case 'getPartitionAccess':
			return await partitionAccess.executeGetPartitionAccess.call(this);
		case 'createPartitionAccess':
			return await partitionAccess.executeCreatePartitionAccess.call(this);
		case 'deletePartitionAccess':
			return await partitionAccess.executeDeletePartitionAccess.call(this);
		case 'listPartitionAuthorizableBlocks':
			return await partitionAuthorizable.executeListPartitionAuthorizableBlocks.call(this);
		case 'listPartitionAuthorizableIps':
			return await partitionAuthorizable.executeListPartitionAuthorizableIps.call(this);
		case 'listPartitionCustomSnapshots':
			return await partitionCustomSnapshot.executeListPartitionCustomSnapshots.call(this);
		case 'getPartitionCustomSnapshot':
			return await partitionCustomSnapshot.executeGetPartitionCustomSnapshot.call(this);
		case 'createPartitionCustomSnapshot':
			return await partitionCustomSnapshot.executeCreatePartitionCustomSnapshot.call(this);
		case 'deletePartitionCustomSnapshot':
			return await partitionCustomSnapshot.executeDeletePartitionCustomSnapshot.call(this);
		case 'getPartitionOptions':
			return await partitionOptions.executeGetPartitionOptions.call(this);
		case 'setupPartitionOptions':
			return await partitionOptions.executeSetupPartitionOptions.call(this);
		case 'listPartitionQuotas':
			return await partitionQuota.executeListPartitionQuotas.call(this);
		case 'getPartitionQuota':
			return await partitionQuota.executeGetPartitionQuota.call(this);
		case 'createPartitionQuota':
			return await partitionQuota.executeCreatePartitionQuota.call(this);
		case 'deletePartitionQuota':
			return await partitionQuota.executeDeletePartitionQuota.call(this);
		case 'listPartitionSnapshots':
			return await partitionSnapshot.executeListPartitionSnapshots.call(this);
		case 'getPartitionSnapshot':
			return await partitionSnapshot.executeGetPartitionSnapshot.call(this);
		case 'createPartitionSnapshot':
			return await partitionSnapshot.executeCreatePartitionSnapshot.call(this);
		case 'deletePartitionSnapshot':
			return await partitionSnapshot.executeDeletePartitionSnapshot.call(this);
		case 'getPartitionTemplateUsage':
			return await partitionTemplateUsage.executeGetPartitionTemplateUsage.call(this);
		case 'getPartitionUse':
			return await partitionUse.executeGetPartitionUse.call(this);
		case 'listTasks':
			return await task.executeListTasks.call(this);
		case 'getTask':
			return await task.executeGetTask.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedNasha"`);
}
