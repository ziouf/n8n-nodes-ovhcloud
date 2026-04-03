/**
 * @brief LicenseOffice resource operations for n8n node
 *
 * Provides operations for managing OVH Office License services including:
 * - List all Office License services for the authenticated account
 * - Get detailed information about a specific Office License service
 *
 * Available operations:
 * - `list`: ListLicenseOfficeServices - List all Office License services
 * - `get`: GetLicenseOfficeService - Get details of a specific Office License service
 *
 * @remarks
 * Office License services are managed under `/license/office` route.
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
			displayName: 'License Office Operation',
			name: 'licenseOfficeOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Office License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an Office License service',
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
			show: { ...displayOptions?.show, licenseOfficeOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficeOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License Office operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseOfficeOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseOffice"`);
}
