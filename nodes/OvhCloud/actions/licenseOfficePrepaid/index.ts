/**
 * @brief LicenseOfficePrepaid resource operations for n8n node
 *
 * Provides operations for managing OVH Office Prepaid License services including:
 * - List all Office Prepaid License services for the authenticated account
 * - Get detailed information about a specific Office Prepaid License service
 *
 * Available operations:
 * - `list`: ListLicenseOfficePrepaidServices - List all Office Prepaid License services
 * - `get`: GetLicenseOfficePrepaidService - Get details of a specific Office Prepaid License service
 *
 * @remarks
 * Office Prepaid License services are managed under `/license/officePrepaid` route.
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
			displayName: 'License Office Prepaid Operation',
			name: 'licenseOfficePrepaidOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Office Prepaid License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an Office Prepaid License service',
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
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License Office Prepaid operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseOfficePrepaidOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseOfficePrepaid"`);
}
