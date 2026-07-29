import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeLocationList,
	description as descriptionLocationList,
} from './locationList.operation';
import {
	execute as executeLocationGet,
	description as descriptionLocationGet,
} from './locationGet.operation';
import {
	execute as executeHostProfileList,
	description as descriptionHostProfileList,
} from './hostProfileList.operation';
import {
	execute as executeHostProfileGet,
	description as descriptionHostProfileGet,
} from './hostProfileGet.operation';
import {
	execute as executeStockHostList,
	description as descriptionStockHostList,
} from './stockHostList.operation';
import {
	execute as executeCommercialRangeList,
	description as descriptionCommercialRangeList,
} from './commercialRangeList.operation';
import {
	execute as executeCommercialRangeGet,
	description as descriptionCommercialRangeGet,
} from './commercialRangeGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedCloudOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get VMware on OVHcloud infrastructure details',
				},
				{
					name: 'Get Commercial Range',
					value: 'commercialRangeGet',
					action: 'Get a commercial range',
				},
				{
					name: 'Get Host Profile',
					value: 'hostProfileGet',
					action: 'Get a host profile',
				},
				{
					name: 'Get Location',
					value: 'locationGet',
					action: 'Get a hosting location',
				},
				{
					name: 'Get Stock Host',
					value: 'stockHostList',
					action: 'List available host stocks for a location',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all VMware on OVHcloud infrastructures',
				},
				{
					name: 'List Commercial Ranges',
					value: 'commercialRangeList',
					action: 'List all commercial ranges',
				},
				{
					name: 'List Host Profiles',
					value: 'hostProfileList',
					action: 'List host profiles for a location',
				},
				{
					name: 'List Locations',
					value: 'locationList',
					action: 'List all hosting locations',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['get'] },
		}),
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['list'] },
		}),
		...descriptionCommercialRangeGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['commercialRangeGet'] },
		}),
		...descriptionCommercialRangeList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['commercialRangeList'] },
		}),
		...descriptionHostProfileGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostProfileGet'] },
		}),
		...descriptionHostProfileList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['hostProfileList'] },
		}),
		...descriptionLocationGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['locationGet'] },
		}),
		...descriptionLocationList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['locationList'] },
		}),
		...descriptionStockHostList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCloudOperation: ['stockHostList'] },
		}),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedCloudOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'get':
			return await executeGet.call(this, itemIndex);
		case 'list':
			return await executeList.call(this, itemIndex);
		case 'commercialRangeGet':
			return await executeCommercialRangeGet.call(this, itemIndex);
		case 'commercialRangeList':
			return await executeCommercialRangeList.call(this, itemIndex);
		case 'hostProfileGet':
			return await executeHostProfileGet.call(this, itemIndex);
		case 'hostProfileList':
			return await executeHostProfileList.call(this, itemIndex);
		case 'locationGet':
			return await executeLocationGet.call(this, itemIndex);
		case 'locationList':
			return await executeLocationList.call(this, itemIndex);
		case 'stockHostList':
			return await executeStockHostList.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedCloud"`);
}
