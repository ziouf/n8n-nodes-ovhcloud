/**
 * @brief LicensePlesk resource operations for n8n node
 *
 * Provides operations for managing OVH Plesk License services including:
 * - List all Plesk License services for the authenticated account
 * - Get detailed information about a specific Plesk License service
 *
 * Available operations:
 * - `list`: ListLicensePleskServices - List all Plesk License services
 * - `get`: GetLicensePleskService - Get details of a specific Plesk License service
 *
 * @remarks
 * Plesk License services are managed under `/license/plesk` route.
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
			displayName: 'License Plesk Operation',
			name: 'licensePleskOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Plesk License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Plesk License service',
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
			show: { ...displayOptions?.show, licensePleskOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licensePleskOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License Plesk operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licensePleskOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licensePlesk"`);
}
