/**
 * @brief LicenseVirtuozzo resource operations for n8n node
 *
 * Provides operations for managing OVH Virtuozzo License services including:
 * - List all Virtuozzo License services for the authenticated account
 * - Get detailed information about a specific Virtuozzo License service
 *
 * Available operations:
 * - `list`: ListLicenseVirtuozzoServices - List all Virtuozzo License services
 * - `get`: GetLicenseVirtuozzoService - Get details of a specific Virtuozzo License service
 *
 * @remarks
 * Virtuozzo License services are managed under `/license/virtuozzo` route.
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
			displayName: 'License Virtuozzo Operation',
			name: 'licenseVirtuozzoOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Virtuozzo License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Virtuozzo License service',
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
			show: { ...displayOptions?.show, licenseVirtuozzoOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseVirtuozzoOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License Virtuozzo operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseVirtuozzoOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseVirtuozzo"`);
}
