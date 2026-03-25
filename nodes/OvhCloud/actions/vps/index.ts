import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import {
	executeDatacenterList as executeListDatacenters,
	descriptionDatacenterList as descriptionListDatacenters,
} from './resources/datacenter/list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	descriptionSnapshotCreate as descriptionCreateSnapshot,
	executeSnapshotCreate as executeCreateSnapshot,
} from './resources/snapshot';
import {
	executeDisksList as executeDisks,
	descriptionDisksList as descriptionDisks,
} from './resources/disks';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const description: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vpsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create VPS Snapshot',
					value: 'createSnapshot',
					action: 'Create a snapshot of a VPS',
				},
				{
					name: 'Get VPS Details',
					value: 'get',
					action: 'Get details of a VPS',
				},
				{
					name: 'List Datacenters',
					value: 'listDatacenters',
					action: 'List all datacenters of the authenticated user',
				},
				{
					name: 'List VPS',
					value: 'list',
					action: 'List VPS',
				},
				{
					name: 'Manage Disks',
					value: 'disks',
					action: 'Manage VPS disks',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...description,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, vpsOperation: ['list'] },
		}),
		...descriptionListDatacenters({
			...displayOptions,
			show: { ...displayOptions?.show, vpsOperation: ['listDatacenters'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, vpsOperation: ['get'] },
		}),
		...descriptionCreateSnapshot({
			...displayOptions,
			show: { ...displayOptions?.show, vpsOperation: ['createSnapshot'] },
		}),
		...descriptionDisks({
			...displayOptions,
			show: { ...displayOptions?.show, vpsOperation: ['disks'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vpsOperation', 0, { extractValue: true }) as string;

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'listDatacenters':
			return await executeListDatacenters.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'createSnapshot':
			return await executeCreateSnapshot.call(this);
		case 'disks':
			return await executeDisks.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "vps"`);
}
