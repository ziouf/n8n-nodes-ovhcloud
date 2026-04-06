/**
 * @brief DNS Zone DNSSEC resource operations
 *
 * Provides operations for managing DNSSEC on DNS zones:
 * - Get: Get DNSSEC configuration
 * - Enable: Enable DNSSEC
 * - Disable: Disable DNSSEC
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeEnable, description as descriptionEnable } from './enable.operation';
import { execute as executeDisable, description as descriptionDisable } from './disable.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DNS Zone DNSSEC Operation',
			name: 'dnsZoneDnssecOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Get', value: 'get', action: 'Get DNSSEC configuration' },
				{ name: 'Enable', value: 'enable', action: 'Enable DNSSEC' },
				{ name: 'Disable', value: 'disable', action: 'Disable DNSSEC' },
			],
			default: 'get',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneDnssecOperation: ['get'] } }),
		...descriptionEnable({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneDnssecOperation: ['enable'] } }),
		...descriptionDisable({ ...displayOptions, show: { ...displayOptions?.show, dnsZoneDnssecOperation: ['disable'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneDnssecOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
		case 'enable':
			return await executeEnable.call(this);
		case 'disable':
			return await executeDisable.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneDnssec"`);
}
