import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { descriptionVeeamGet, executeVeeamGet } from './get.operation';
import {
	descriptionVeeamListRestorePoints,
	executeVeeamListRestorePoints,
} from './listRestorePoints.operation';
import {
	descriptionVeeamGetRestorePoint,
	executeVeeamGetRestorePoint,
} from './getRestorePoint.operation';
import {
	descriptionVeeamRestoreRestorePoint,
	executeVeeamRestoreRestorePoint,
} from './restoreRestorePoint.operation';
import {
	descriptionVeeamGetRestoredBackup,
	executeVeeamGetRestoredBackup,
} from './getRestoredBackup.operation';
import {
	descriptionVeeamDeleteRestoredBackup,
	executeVeeamDeleteRestoredBackup,
} from './deleteRestoredBackup.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Veeam Operation',
			name: 'veeamOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Delete Restored Backup',
					value: 'deleteRestoredBackup',
				},
				{
					name: 'Get Restore Point',
					value: 'getRestorePoint',
				},
				{
					name: 'Get Restored Backup',
					value: 'getRestoredBackup',
				},
				{
					name: 'Get Veeam',
					value: 'get',
				},
				{
					name: 'List Restore Points',
					value: 'listRestorePoints',
				},
				{
					name: 'Restore Restore Point',
					value: 'restoreRestorePoint',
				},
			],
			default: 'get',
			displayOptions,
		},
		...descriptionVeeamGet({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['get'] },
		}),
		...descriptionVeeamListRestorePoints({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['listRestorePoints'] },
		}),
		...descriptionVeeamGetRestorePoint({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['getRestorePoint'] },
		}),
		...descriptionVeeamRestoreRestorePoint({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['restoreRestorePoint'] },
		}),
		...descriptionVeeamGetRestoredBackup({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['getRestoredBackup'] },
		}),
		...descriptionVeeamDeleteRestoredBackup({
			...displayOptions,
			show: { ...displayOptions?.show, veeamOperation: ['deleteRestoredBackup'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('veeamOperation', 0) as string;

	switch (operation) {
		case 'get':
			return await executeVeeamGet.call(this);
		case 'listRestorePoints':
			return await executeVeeamListRestorePoints.call(this);
		case 'getRestorePoint':
			return await executeVeeamGetRestorePoint.call(this);
		case 'restoreRestorePoint':
			return await executeVeeamRestoreRestorePoint.call(this);
		case 'getRestoredBackup':
			return await executeVeeamGetRestoredBackup.call(this);
		case 'deleteRestoredBackup':
			return await executeVeeamDeleteRestoredBackup.call(this);
		default:
			throw new Error(`The operation "${operation}" is not supported for the "veeam" resource.`);
	}
}
