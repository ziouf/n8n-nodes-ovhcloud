/**
 * @brief LicenseRedhat resource operations for n8n node
 *
 * Provides operations for managing OVH Redhat License services including:
 * - List all Redhat License services for the authenticated account
 * - Get detailed information about a specific Redhat License service
 *
 * Available operations:
 * - `list`: ListLicenseRedhatServices - List all Redhat License services
 * - `get`: GetLicenseRedhatService - Get details of a specific Redhat License service
 *
 * @remarks
 * Redhat License services are managed under `/license/redhat` route.
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
			displayName: 'License Redhat Operation',
			name: 'licenseRedhatOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Redhat License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Redhat License service',
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
			show: { ...displayOptions?.show, licenseRedhatOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseRedhatOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License Redhat operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseRedhatOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseRedhat"`);
}
