/**
 * @brief Hosting Whitelist resource operations for Hosting
 *
 * Provides operations for managing private database IP whitelists:
 * - List: List all whitelisted IPs
 * - Get: Get details of a specific whitelisted IP
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Hosting Whitelist Operation',
			name: 'hostingWhitelistOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all whitelisted IPs' },
				{ name: 'Get', value: 'get', action: 'Get details of a whitelisted IP' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingWhitelistOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingWhitelistOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('hostingWhitelistOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hostingWhitelist"`);
}
