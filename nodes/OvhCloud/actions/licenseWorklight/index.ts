/**
 * @brief LicenseWorklight resource operations for n8n node
 *
 * Provides operations for managing OVH Worklight License services including:
 * - List all Worklight License services for the authenticated account
 * - Get detailed information about a specific Worklight License service
 *
 * Available operations:
 * - `list`: ListLicenseWorklightServices - List all Worklight License services
 * - `get`: GetLicenseWorklightService - Get details of a specific Worklight License service
 *
 * @remarks
 * Worklight License services are managed under `/license/worklight` route.
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
			displayName: 'License Worklight Operation',
			name: 'licenseWorklightOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Worklight License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Worklight License service',
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
			show: { ...displayOptions?.show, licenseWorklightOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseWorklightOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License Worklight operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseWorklightOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseWorklight"`);
}
