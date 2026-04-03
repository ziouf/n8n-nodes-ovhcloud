/**
 * @brief LicenseDirectadmin resource operations for n8n node
 *
 * Provides operations for managing OVH Directadmin License services including:
 * - List all Directadmin License services for the authenticated account
 * - Get detailed information about a specific Directadmin License service
 *
 * Available operations:
 * - `list`: ListLicenseDirectadminServices - List all Directadmin License services
 * - `get`: GetLicenseDirectadminService - Get details of a specific Directadmin License service
 *
 * @remarks
 * Directadmin License services are managed under `/license/directadmin` route.
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
			displayName: 'License Directadmin Operation',
			name: 'licenseDirectadminOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Directadmin License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Directadmin License service',
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
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseDirectadminOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License Directadmin operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseDirectadminOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseDirectadmin"`);
}
