/**
 * @brief DedicatedHousing resource operations for n8n node
 *
 * Provides comprehensive operations for managing OVH Dedicated Housing services including:
 * - List and get Dedicated Housing services
 * - Service information: Get and update service info
 * - Backup FTP: Manage backup FTP space, ACLs, authorizable blocks, and password
 * - Tasks: List, get, and cancel tasks
 * - Orderable: Check if APC is orderable
 *
 * Available operations:
 * - `list`: List all Dedicated Housing services
 * - `get`: Get details of a Dedicated Housing service
 * - `getServiceInfos`: Get service information
 * - `updateServiceInfos`: Update service information
 * - `getBackupFtp`: Get backup FTP properties
 * - `createBackupFtp`: Create backup FTP space
 * - `deleteBackupFtp`: Terminate backup FTP
 * - `listBackupFtpAccess`: List authorized IP blocks
 * - `getBackupFtpAccess`: Get ACL properties
 * - `createBackupFtpAccess`: Create ACL
 * - `updateBackupFtpAccess`: Update ACL
 * - `deleteBackupFtpAccess`: Revoke ACL
 * - `listBackupFtpAuthorizableBlocks`: Get authorizable IP blocks
 * - `changeBackupFtpPassword`: Change backup FTP password
 * - `listTasks`: List tasks
 * - `getTask`: Get task details
 * - `cancelTask`: Cancel task
 * - `getOrderableApc`: Check if APC is orderable
 *
 * @remarks
 * Dedicated Housing services are managed under `/dedicated/housing` route.
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
import * as serviceInfos from './resources/serviceInfos/index';
import * as backupFtp from './resources/backupFtp/index';
import * as task from './resources/task/index';
import * as orderable from './resources/orderable/index';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Dedicated Housing Operation',
			name: 'dedicatedHousingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Cancel Task',
					value: 'cancelTask',
					action: 'Cancel a specific task',
				},
				{
					name: 'Change Backup FTP Password',
					value: 'changeBackupFtpPassword',
					action: 'Change the backup FTP password',
				},
				{
					name: 'Create Backup FTP',
					value: 'createBackupFtp',
					action: 'Create backup FTP space',
				},
				{
					name: 'Create Backup FTP Access',
					value: 'createBackupFtpAccess',
					action: 'Create an ACL entry for backup FTP',
				},
				{
					name: 'Delete Backup FTP',
					value: 'deleteBackupFtp',
					action: 'Terminate backup FTP space',
				},
				{
					name: 'Delete Backup FTP Access',
					value: 'deleteBackupFtpAccess',
					action: 'Revoke an ACL entry for backup FTP',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Housing service',
				},
				{
					name: 'Get Backup FTP',
					value: 'getBackupFtp',
					action: 'Get backup FTP properties',
				},
				{
					name: 'Get Backup FTP Access',
					value: 'getBackupFtpAccess',
					action: 'Get ACL properties for backup FTP',
				},
				{
					name: 'Get Orderable APC',
					value: 'getOrderableApc',
					action: 'Check if APC is orderable for a Dedicated Housing service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a Dedicated Housing service',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get details of a specific task',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Housing services',
				},
				{
					name: 'List Backup FTP Access',
					value: 'listBackupFtpAccess',
					action: 'List authorized IP blocks for backup FTP',
				},
				{
					name: 'List Backup FTP Authorizable Blocks',
					value: 'listBackupFtpAuthorizableBlocks',
					action: 'Get authorizable IP blocks for backup FTP',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List all tasks for a Dedicated Housing service',
				},
				{
					name: 'Update Backup FTP Access',
					value: 'updateBackupFtpAccess',
					action: 'Update an ACL entry for backup FTP',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a Dedicated Housing service',
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
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['get'] },
		}),
		...serviceInfos.descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['getServiceInfos'] },
		}),
		...serviceInfos.descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['updateServiceInfos'] },
		}),
		...backupFtp.descriptionGetBackupFtp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['getBackupFtp'] },
		}),
		...backupFtp.descriptionCreateBackupFtp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['createBackupFtp'] },
		}),
		...backupFtp.descriptionDeleteBackupFtp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['deleteBackupFtp'] },
		}),
		...backupFtp.descriptionListBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['listBackupFtpAccess'] },
		}),
		...backupFtp.descriptionGetBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['getBackupFtpAccess'] },
		}),
		...backupFtp.descriptionCreateBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['createBackupFtpAccess'] },
		}),
		...backupFtp.descriptionUpdateBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['updateBackupFtpAccess'] },
		}),
		...backupFtp.descriptionDeleteBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['deleteBackupFtpAccess'] },
		}),
		...backupFtp.descriptionListBackupFtpAuthorizableBlocks({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedHousingOperation: ['listBackupFtpAuthorizableBlocks'],
			},
		}),
		...backupFtp.descriptionChangeBackupFtpPassword({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['changeBackupFtpPassword'] },
		}),
		...task.descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['listTasks'] },
		}),
		...task.descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['getTask'] },
		}),
		...task.descriptionCancelTask({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['cancelTask'] },
		}),
		...orderable.descriptionOrderableApc({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedHousingOperation: ['getOrderableApc'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Housing operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedHousingOperation', 0, {
		extractValue: true,
	}) as string;

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getServiceInfos':
			return await serviceInfos.executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await serviceInfos.executeUpdateServiceInfos.call(this);
		case 'getBackupFtp':
			return await backupFtp.executeGetBackupFtp.call(this);
		case 'createBackupFtp':
			return await backupFtp.executeCreateBackupFtp.call(this);
		case 'deleteBackupFtp':
			return await backupFtp.executeDeleteBackupFtp.call(this);
		case 'listBackupFtpAccess':
			return await backupFtp.executeListBackupFtpAccess.call(this);
		case 'getBackupFtpAccess':
			return await backupFtp.executeGetBackupFtpAccess.call(this);
		case 'createBackupFtpAccess':
			return await backupFtp.executeCreateBackupFtpAccess.call(this);
		case 'updateBackupFtpAccess':
			return await backupFtp.executeUpdateBackupFtpAccess.call(this);
		case 'deleteBackupFtpAccess':
			return await backupFtp.executeDeleteBackupFtpAccess.call(this);
		case 'listBackupFtpAuthorizableBlocks':
			return await backupFtp.executeListBackupFtpAuthorizableBlocks.call(this);
		case 'changeBackupFtpPassword':
			return await backupFtp.executeChangeBackupFtpPassword.call(this);
		case 'listTasks':
			return await task.executeListTasks.call(this);
		case 'getTask':
			return await task.executeGetTask.call(this);
		case 'cancelTask':
			return await task.executeCancelTask.call(this);
		case 'getOrderableApc':
			return await orderable.executeOrderableApc.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedHousing"`);
}
