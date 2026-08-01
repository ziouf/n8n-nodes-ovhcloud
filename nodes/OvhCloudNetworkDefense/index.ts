import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeNetworkDefensevaceventListGet,
	description as descriptionNetworkDefensevaceventListGet,
} from './networkDefensevaceventListGet.operation';
import {
	execute as executeNetworkDefensevactrafficListGet,
	description as descriptionNetworkDefensevactrafficListGet,
} from './networkDefensevactrafficListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'networkDefenseOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Get All Network Defense Events',
				value: 'networkDefensevaceventListGet',
				action: 'Get all Network Defense events',
			},
			{
				name: 'Get All Network Defense Traffic Statistics',
				value: 'networkDefensevactrafficListGet',
				action: 'Get all Network Defense traffic statistics',
			},

			],
			default: 'networkDefensevaceventListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionNetworkDefensevaceventListGet({
			...displayOptions,
			show: { networkDefenseOperation: ['networkDefensevaceventListGet'] },
		}) as INodeProperties[]),
		...(descriptionNetworkDefensevactrafficListGet({
			...displayOptions,
			show: { networkDefenseOperation: ['networkDefensevactrafficListGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('networkDefenseOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'networkDefensevaceventListGet':
			return executeNetworkDefensevaceventListGet.call(this, itemIndex);
		case 'networkDefensevactrafficListGet':
			return executeNetworkDefensevactrafficListGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudNetworkDefense"`);
}
