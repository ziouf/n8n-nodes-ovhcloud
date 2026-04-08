/**
 * @brief DNS Zone Service Infos resource operations
 *
 * Provides operations for managing DNS zone service information:
 * - Get: Retrieve service info
 * - Update: Update service info
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DNS Zone Service Infos Operation',
			name: 'dnsZoneServiceInfosOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Get', value: 'get', action: 'Get DNS zone service info' },
				{ name: 'Update', value: 'update', action: 'Update DNS zone service info' },
			],
			default: 'get',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneServiceInfosOperation: ['get'] } }),
		...descriptionUpdate({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneServiceInfosOperation: ['update'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneServiceInfosOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneServiceInfos"`);
}
