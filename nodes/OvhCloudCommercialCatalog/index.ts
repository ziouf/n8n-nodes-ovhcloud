import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeCommercialCatalogoffersListGet,
	description as descriptionCommercialCatalogoffersListGet,
} from './commercialCatalogoffersListGet.operation';
import {
	execute as executeCommercialCatalogoffersListGet2,
	description as descriptionCommercialCatalogoffersListGet2,
} from './commercialCatalogoffersListGet2.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'commercialCatalogOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List All Offers',
				value: 'commercialCatalogoffersListGet',
				action: 'List all offers',
			},
			{
				name: 'Get Details of an Offer',
				value: 'commercialCatalogoffersListGet2',
				action: 'Get details of an offer',
			},

			],
			default: 'commercialCatalogoffersListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionCommercialCatalogoffersListGet({
			...displayOptions,
			show: { commercialCatalogOperation: ['commercialCatalogoffersListGet'] },
		}) as INodeProperties[]),
		...(descriptionCommercialCatalogoffersListGet2({
			...displayOptions,
			show: { commercialCatalogOperation: ['commercialCatalogoffersListGet2'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('commercialCatalogOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'commercialCatalogoffersListGet':
			return executeCommercialCatalogoffersListGet.call(this, itemIndex);
		case 'commercialCatalogoffersListGet2':
			return executeCommercialCatalogoffersListGet2.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudCommercialCatalog"`);
}
