/**
 * @brief VMware Cloud Director resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH VMware Cloud Director services including:
 * - List all VMware Cloud Director services
 * - Get detailed information about a specific VMware Cloud Director service
 * - Manage backups, organizations, virtual data centers, and references
 *
 * Available operations:
 * - `list`: List all VMware Cloud Director services
 * - `get`: Get details of a specific VMware Cloud Director service
 * - `listBackups`: List VMware Cloud Director backups
 * - `getBackup`: Get a specific backup
 * - `listBackupTasks`: List backup tasks
 * - `getBackupTask`: Get a specific backup task
 * - `listOrganizations`: List VMware Cloud Director organizations
 * - `getOrganization`: Get a specific organization
 * - `getOrganizationPassword`: Get organization password
 * - `listOrganizationTasks`: List organization tasks
 * - `getOrganizationTask`: Get a specific organization task
 * - `listOrganizationNetworkAcls`: List organization network ACLs
 * - `getOrganizationNetworkAcl`: Get a specific network ACL
 * - `listOrganizationVirtualDataCenters`: List organization virtual data centers
 * - `getOrganizationVirtualDataCenter`: Get a specific virtual data center
 * - `listOrganizationVdcTasks`: List VDC tasks
 * - `getOrganizationVdcTask`: Get a specific VDC task
 * - `listOrganizationVdcComputes`: List VDC computes
 * - `getOrganizationVdcCompute`: Get a specific VDC compute
 * - `listOrganizationVdcStorages`: List VDC storages
 * - `getOrganizationVdcStorage`: Get a specific VDC storage
 * - `listOrganizationVdcOrderableResources`: List VDC orderable resources
 * - `listOrganizationVdcVrackSegments`: List VDC vRack segments
 * - `getOrganizationVdcVrackSegment`: Get a specific vRack segment
 * - `listOrganizationVdcVrackSegmentTasks`: List vRack segment tasks
 * - `getOrganizationVdcVrackSegmentTask`: Get a specific vRack segment task
 * - `listReferenceRegions`: List reference regions
 *
 * @remarks
 * VMware Cloud Director services are managed under `/v2/vmwareCloudDirector` route.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as resources from './resources';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'VMware Cloud Director Operation',
			name: 'vmwareCloudDirectorOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a VMware Cloud Director service',
				},
				{
					name: 'Get Backup',
					value: 'getBackup',
					action: 'Get a specific backup',
				},
				{
					name: 'Get Backup Task',
					value: 'getBackupTask',
					action: 'Get a specific backup task',
				},
				{
					name: 'Get Organization',
					value: 'getOrganization',
					action: 'Get a specific organization',
				},
				{
					name: 'Get Organization Network ACL',
					value: 'getOrganizationNetworkAcl',
					action: 'Get a specific network ACL',
				},
				{
					name: 'Get Organization Password',
					value: 'getOrganizationPassword',
					action: 'Get organization password',
				},
				{
					name: 'Get Organization Task',
					value: 'getOrganizationTask',
					action: 'Get a specific organization task',
				},
				{
					name: 'Get Organization VDC Compute',
					value: 'getOrganizationVdcCompute',
					action: 'Get a specific VDC compute',
				},
				{
					name: 'Get Organization VDC Storage',
					value: 'getOrganizationVdcStorage',
					action: 'Get a specific VDC storage',
				},
				{
					name: 'Get Organization VDC Task',
					value: 'getOrganizationVdcTask',
					action: 'Get a specific VDC task',
				},
				{
					name: 'Get Organization VDC vRack Segment',
					value: 'getOrganizationVdcVrackSegment',
					action: 'Get a specific vRack segment',
				},
				{
					name: 'Get Organization VDC vRack Segment Task',
					value: 'getOrganizationVdcVrackSegmentTask',
					action: 'Get a specific vRack segment task',
				},
				{
					name: 'Get Organization Virtual Data Center',
					value: 'getOrganizationVirtualDataCenter',
					action: 'Get a specific virtual data center',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all VMware Cloud Director services',
				},
				{
					name: 'List Backup Tasks',
					value: 'listBackupTasks',
					action: 'List backup tasks',
				},
				{
					name: 'List Backups',
					value: 'listBackups',
					action: 'List VMware Cloud Director backups',
				},
				{
					name: 'List Organization Network ACLs',
					value: 'listOrganizationNetworkAcls',
					action: 'List organization network ACLs',
				},
				{
					name: 'List Organization Tasks',
					value: 'listOrganizationTasks',
					action: 'List organization tasks',
				},
				{
					name: 'List Organization VDC Computes',
					value: 'listOrganizationVdcComputes',
					action: 'List VDC computes',
				},
				{
					name: 'List Organization VDC Orderable Resources',
					value: 'listOrganizationVdcOrderableResources',
					action: 'List VDC orderable resources',
				},
				{
					name: 'List Organization VDC Storages',
					value: 'listOrganizationVdcStorages',
					action: 'List VDC storages',
				},
				{
					name: 'List Organization VDC Tasks',
					value: 'listOrganizationVdcTasks',
					action: 'List VDC tasks',
				},
				{
					name: 'List Organization VDC vRack Segment Tasks',
					value: 'listOrganizationVdcVrackSegmentTasks',
					action: 'List vRack segment tasks',
				},
				{
					name: 'List Organization VDC vRack Segments',
					value: 'listOrganizationVdcVrackSegments',
					action: 'List VDC vRack segments',
				},
				{
					name: 'List Organization Virtual Data Centers',
					value: 'listOrganizationVirtualDataCenters',
					action: 'List organization virtual data centers',
				},
				{
					name: 'List Organizations',
					value: 'listOrganizations',
					action: 'List VMware Cloud Director organizations',
				},
				{
					name: 'List Reference Regions',
					value: 'listReferenceRegions',
					action: 'List reference regions',
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
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['get'] },
		}),
		...resources.backup.descriptionListVmwareCloudDirectorBackups({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['listBackups'] },
		}),
		...resources.backup.descriptionGetVmwareCloudDirectorBackup({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['getBackup'] },
		}),
		...resources.backup.descriptionListVmwareCloudDirectorBackupTasks({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['listBackupTasks'] },
		}),
		...resources.backup.descriptionGetVmwareCloudDirectorBackupTask({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['getBackupTask'] },
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizations({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['listOrganizations'] },
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganization({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['getOrganization'] },
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationPassword({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['getOrganizationPassword'],
			},
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationTasks({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['listOrganizationTasks'] },
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationTask({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['getOrganizationTask'] },
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationNetworkAcls({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationNetworkAcls'],
			},
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationNetworkAcl({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['getOrganizationNetworkAcl'],
			},
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationVirtualDataCenters({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationVirtualDataCenters'],
			},
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationVirtualDataCenter({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['getOrganizationVirtualDataCenter'],
			},
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationVdcTasks({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationVdcTasks'],
			},
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationVdcTask({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['getOrganizationVdcTask'] },
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationVdcComputes({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationVdcComputes'],
			},
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationVdcCompute({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['getOrganizationVdcCompute'],
			},
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationVdcStorages({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationVdcStorages'],
			},
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationVdcStorage({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['getOrganizationVdcStorage'],
			},
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationVdcOrderableResources({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationVdcOrderableResources'],
			},
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationVdcVrackSegments({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationVdcVrackSegments'],
			},
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationVdcVrackSegment({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['getOrganizationVdcVrackSegment'],
			},
		}),
		...resources.organization.descriptionListVmwareCloudDirectorOrganizationVdcVrackSegmentTasks({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['listOrganizationVdcVrackSegmentTasks'],
			},
		}),
		...resources.organization.descriptionGetVmwareCloudDirectorOrganizationVdcVrackSegmentTask({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vmwareCloudDirectorOperation: ['getOrganizationVdcVrackSegmentTask'],
			},
		}),
		...resources.reference.descriptionListVmwareCloudDirectorReferenceRegions({
			...displayOptions,
			show: { ...displayOptions?.show, vmwareCloudDirectorOperation: ['listReferenceRegions'] },
		}),
	];
}

/**
 * Executes the selected VMware Cloud Director operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vmwareCloudDirectorOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listBackups':
			return await resources.backup.executeListVmwareCloudDirectorBackups.call(this);
		case 'getBackup':
			return await resources.backup.executeGetVmwareCloudDirectorBackup.call(this);
		case 'listBackupTasks':
			return await resources.backup.executeListVmwareCloudDirectorBackupTasks.call(this);
		case 'getBackupTask':
			return await resources.backup.executeGetVmwareCloudDirectorBackupTask.call(this);
		case 'listOrganizations':
			return await resources.organization.executeListVmwareCloudDirectorOrganizations.call(this);
		case 'getOrganization':
			return await resources.organization.executeGetVmwareCloudDirectorOrganization.call(this);
		case 'getOrganizationPassword':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationPassword.call(
				this,
			);
		case 'listOrganizationTasks':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationTasks.call(
				this,
			);
		case 'getOrganizationTask':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationTask.call(this);
		case 'listOrganizationNetworkAcls':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationNetworkAcls.call(
				this,
			);
		case 'getOrganizationNetworkAcl':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationNetworkAcl.call(
				this,
			);
		case 'listOrganizationVirtualDataCenters':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationVirtualDataCenters.call(
				this,
			);
		case 'getOrganizationVirtualDataCenter':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationVirtualDataCenter.call(
				this,
			);
		case 'listOrganizationVdcTasks':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationVdcTasks.call(
				this,
			);
		case 'getOrganizationVdcTask':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationVdcTask.call(
				this,
			);
		case 'listOrganizationVdcComputes':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationVdcComputes.call(
				this,
			);
		case 'getOrganizationVdcCompute':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationVdcCompute.call(
				this,
			);
		case 'listOrganizationVdcStorages':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationVdcStorages.call(
				this,
			);
		case 'getOrganizationVdcStorage':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationVdcStorage.call(
				this,
			);
		case 'listOrganizationVdcOrderableResources':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationVdcOrderableResources.call(
				this,
			);
		case 'listOrganizationVdcVrackSegments':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationVdcVrackSegments.call(
				this,
			);
		case 'getOrganizationVdcVrackSegment':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationVdcVrackSegment.call(
				this,
			);
		case 'listOrganizationVdcVrackSegmentTasks':
			return await resources.organization.executeListVmwareCloudDirectorOrganizationVdcVrackSegmentTasks.call(
				this,
			);
		case 'getOrganizationVdcVrackSegmentTask':
			return await resources.organization.executeGetVmwareCloudDirectorOrganizationVdcVrackSegmentTask.call(
				this,
			);
		case 'listReferenceRegions':
			return await resources.reference.executeListVmwareCloudDirectorReferenceRegions.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vmwareCloudDirector"`);
}
