import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	description as descriptionSnapshotCreate,
	execute as executeSnapshotCreate,
} from './create.operation';
import { descriptionSnapshotDelete, executeSnapshotDelete } from './delete.operation';
import { descriptionSnapshotDownload, executeSnapshotDownload } from './download.operation';
import {
	description as descriptionSnapshotGet,
	execute as executeSnapshotGet,
} from './get.operation';
import { descriptionSnapshotRevert, executeSnapshotRevert } from './revert.operation';
import { descriptionSnapshotUpdate, executeSnapshotUpdate } from './update.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Snapshot Operation',
			name: 'snapshotOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create',
					value: 'create',
					action: 'Create a snapshot of this VPS',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete the VPS snapshot',
				},
				{
					name: 'Download',
					value: 'download',
					action: 'Generate a download URL for the VPS snapshot',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get information about the current VPS snapshot',
				},
				{
					name: 'Revert',
					value: 'revert',
					action: 'Revert this VPS to the specified snapshot',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update the VPS snapshot properties',
				},
			],
			default: 'get',
			displayOptions,
		},
		...descriptionSnapshotCreate({
			...displayOptions,
			show: { ...displayOptions?.show, snapshotOperation: ['create'] },
		}),
		...descriptionSnapshotDelete({
			...displayOptions,
			show: { ...displayOptions?.show, snapshotOperation: ['delete'] },
		}),
		...descriptionSnapshotDownload({
			...displayOptions,
			show: { ...displayOptions?.show, snapshotOperation: ['download'] },
		}),
		...descriptionSnapshotGet({
			...displayOptions,
			show: { ...displayOptions?.show, snapshotOperation: ['get'] },
		}),
		...descriptionSnapshotRevert({
			...displayOptions,
			show: { ...displayOptions?.show, snapshotOperation: ['revert'] },
		}),
		...descriptionSnapshotUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, snapshotOperation: ['update'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('snapshotOperation', 0) as string;

	switch (operation) {
		case 'create':
			return await executeSnapshotCreate.call(this);
		case 'delete':
			return await executeSnapshotDelete.call(this);
		case 'download':
			return await executeSnapshotDownload.call(this);
		case 'get':
			return await executeSnapshotGet.call(this);
		case 'revert':
			return await executeSnapshotRevert.call(this);
		case 'update':
			return await executeSnapshotUpdate.call(this);
		default:
			throw new Error(`The operation "${operation}" is not supported for the "snapshot" resource.`);
	}
}
