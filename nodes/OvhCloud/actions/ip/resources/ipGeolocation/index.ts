/**
 * @brief IP Geolocation sub-resource operations for IP resource
 *
 * Provides operations for retrieving IP geolocation information:
 * - Get: Get geolocation details for an IP block
 *
 * Available operations:
 * - `get`: Get geolocation details
 *
 * @remarks
 * Geolocation information is managed under `/ip/{ip}/geolocation` route.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Geolocation Operation',
			name: 'ipGeolocationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get geolocation details',
				},
			],
			default: 'get',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipGeolocationOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected IP Geolocation operation (get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipGeolocationOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipGeolocation"`);
}
