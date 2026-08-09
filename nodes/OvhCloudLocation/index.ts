import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeLocationListGet,
	description as descriptionLocationListGet,
} from './locationListGet.operation';
import {
	execute as executeLocationListGet2,
	description as descriptionLocationListGet2,
} from './locationListGet2.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'locationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List Available Regions and Their Availability Zones',
				value: 'locationListGet',
				action: 'List available regions and their availability zones',
			},
			{
				name: 'Get Available Region and Its Availability Zones',
				value: 'locationListGet2',
				action: 'Get available region and its availability zones',
			},

			],
			default: 'locationListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionLocationListGet({
			...displayOptions,
			show: { locationOperation: ['locationListGet'] },
		}) as INodeProperties[]),
		...(descriptionLocationListGet2({
			...displayOptions,
			show: { locationOperation: ['locationListGet2'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('locationOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'locationListGet':
			return executeLocationListGet.call(this, itemIndex ?? 0);
		case 'locationListGet2':
			return executeLocationListGet2.call(this, itemIndex ?? 0);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudLocation"`);
}
