/**
 * @brief IP Mitigation sub-resource operations for IP resource
 *
 * Provides operations for retrieving IP mitigation information:
 * - Get: Get mitigation details for an IP block
 *
 * Available operations:
 * - `get`: Get mitigation details
 *
 * @remarks
 * Mitigation information is managed under `/ip/{ip}/mitigation` route.
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
			displayName: 'IP Mitigation Operation',
			name: 'ipMitigationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get mitigation details',
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
			show: { ...displayOptions?.show, ipMitigationOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected IP Mitigation operation (get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipMitigationOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipMitigation"`);
}
