/**
 * @brief CDN resource operations for n8n node
 *
 * Provides operations for managing OVH CDN Dedicated services including:
 * - List all CDN Dedicated services for the authenticated account
 * - Get detailed information about a specific CDN Dedicated service
 *
 * Available operations:
 * - `list`: ListCdnServices - List all CDN Dedicated services
 * - `get`: GetCdnService - Get details of a specific CDN Dedicated service
 *
 * @remarks
 * CDN Dedicated services are managed under `/cdn/dedicated` route.
 * Service name can be entered manually or selected from dynamic dropdown.
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
			displayName: 'CDN Operation',
			name: 'cdnOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all CDN Dedicated services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a CDN Dedicated service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, cdnOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, cdnOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected CDN operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('cdnOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "cdn"`);
}
