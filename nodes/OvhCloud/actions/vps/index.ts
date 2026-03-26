/**
 * @brief VPS resource operations for n8n node
 *
 * Provides comprehensive operations for managing OVH Virtual Private Servers including:
 * - VPS instances: List and get with dynamic service selection
 * - Disks: List and get individual disk details
 * - Snapshot management: Create and get snapshots
 * - Datacenter information: Get specific datacenter or list by country
 * - Service information: Get service status, models, distribution, options
 * - Network resources: IPs, secondary DNS domains
 *
 * @remarks
 * All VPS operations require specification of a service name.
 * Service names can be entered manually or selected from dynamic dropdown using getVpsServices.
 *
 * @example
 * // Configure in n8n node
 * Resource: VPS
 * Operation: List VPS
 * Output: Array of VPS details with plan, state, IP addresses, etc.
 *
 * @example
 * // Create snapshot for a VPS
 * // Resource: VPS -> Snapshot
 * // snapshotOperation = "Create"
 * // serviceName = "vps1234567" (or from dynamic list)
 * // Output: Snapshot details with id, description, status, etc.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	automatedBackup,
	availableUpgrade,
	backupftp,
	datacenter,
	distribution,
	ipCountryAvailable,
	ips,
	models,
	option,
	secondaryDnsDomains,
	serviceInfos,
	snapshot,
	status,
} from './resources';
import { description as descriptionVpsGet, execute as executeVpsGet } from './get.operation';
import { description as descriptionVpsList, execute as executeVpsList } from './list.operation';
import {
	description as descriptionDisksGet,
	execute as executeDisksGet,
} from './resources/disks/get.operation';
import { descriptionDisksList, executeDisksList } from './resources/disks/list.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const description: INodeProperties[] = [
		{
			displayName: 'VPS Resource',
			name: 'vpsResource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Automated Backup',
					value: 'automatedBackup',
				},
				{
					name: 'Available Upgrade',
					value: 'availableUpgrade',
				},
				{
					name: 'Backup FTP',
					value: 'backupftp',
				},
				{
					name: 'Datacenter',
					value: 'datacenter',
				},
				{
					name: 'Distribution',
					value: 'distribution',
				},
				{
					name: 'IP Country Available',
					value: 'ipCountryAvailable',
				},
				{
					name: 'IPs',
					value: 'ips',
				},
				{
					name: 'Models',
					value: 'models',
				},
				{
					name: 'Option',
					value: 'option',
				},
				{
					name: 'Secondary DNS Domains',
					value: 'secondaryDnsDomains',
				},
				{
					name: 'Service Infos',
					value: 'serviceInfos',
				},
				{
					name: 'Snapshot',
					value: 'snapshot',
				},
				{
					name: 'Status',
					value: 'status',
				},
				{
					name: 'VPS',
					value: 'vps',
				},
			],
			default: 'vps',
		},
		{
			displayName: 'VPS Operation',
			name: 'vpsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a VPS service',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all VPS services',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['vps'],
				},
			},
		},
		{
			displayName: 'Disks Operation',
			name: 'vpsDisksOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Disks',
					value: 'list',
					action: 'Get all disks of a VPS',
				},
				{
					name: 'Get Disk',
					value: 'get',
					action: 'Get details of a disk of a VPS',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['disks'],
				},
			},
		},
	];

	return [
		...description,
		...descriptionVpsGet({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['vps'], vpsOperation: ['get'] },
		}),
		...descriptionVpsList({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['vps'], vpsOperation: ['list'] },
		}),
		...automatedBackup.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['automatedBackup'] },
		}),
		...availableUpgrade.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['availableUpgrade'] },
		}),
		...backupftp.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['backupftp'] },
		}),
		...datacenter.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['datacenter'] },
		}),
		...descriptionDisksGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['disks'],
				vpsDisksOperation: ['get'],
			},
		}),
		...descriptionDisksList({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['disks'],
				vpsDisksOperation: ['list'],
			},
		}),
		...distribution.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['distribution'] },
		}),
		...ipCountryAvailable.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['ipCountryAvailable'] },
		}),
		...ips.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['ips'] },
		}),
		...models.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['models'] },
		}),
		...option.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['option'] },
		}),
		...secondaryDnsDomains.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['secondaryDnsDomains'] },
		}),
		...serviceInfos.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['serviceInfos'] },
		}),
		...snapshot.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['snapshot'] },
		}),
		...status.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['status'] },
		}),
	];
}

/**
 * Executes the selected VPS resource operation.
 *
 * Routes execution to the appropriate handler based on the selected resource.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const resource = this.getNodeParameter('vpsResource', 0, { extractValue: true }) as string;

	switch (resource) {
		case 'vps': {
			const operation = this.getNodeParameter('vpsOperation', 0, { extractValue: true }) as string;
			switch (operation) {
				case 'get':
					return await executeVpsGet.call(this);
				case 'list':
					return await executeVpsList.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "vps"`);
			}
		}
		case 'automatedBackup':
			return await automatedBackup.execute.call(this);
		case 'availableUpgrade':
			return await availableUpgrade.execute.call(this);
		case 'backupftp':
			return await backupftp.execute.call(this);
		case 'datacenter':
			return await datacenter.execute.call(this);
		case 'disks': {
			const operation = this.getNodeParameter('vpsDisksOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await executeDisksGet.call(this);
				case 'list':
					return await executeDisksList.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "disks"`);
			}
		}
		case 'distribution':
			return await distribution.execute.call(this);
		case 'ipCountryAvailable':
			return await ipCountryAvailable.execute.call(this);
		case 'ips':
			return await ips.execute.call(this);
		case 'models':
			return await models.execute.call(this);
		case 'option':
			return await option.execute.call(this);
		case 'secondaryDnsDomains':
			return await secondaryDnsDomains.execute.call(this);
		case 'serviceInfos':
			return await serviceInfos.execute.call(this);
		case 'snapshot':
			return await snapshot.execute.call(this);
		case 'status':
			return await status.execute.call(this);
	}

	throw new Error(`Unsupported resource "${resource}" for VPS operations`);
}
