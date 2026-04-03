/**
 * @brief LicenseCloudLinux resource operations for n8n node
 *
 * Provides operations for managing OVH Cloud Linux License services including:
 * - List all Cloud Linux License services for the authenticated account
 * - Get detailed information about a specific Cloud Linux License service
 *
 * Available operations:
 * - `list`: ListLicenseCloudLinuxServices - List all Cloud Linux License services
 * - `get`: GetLicenseCloudLinuxService - Get details of a specific Cloud Linux License service
 *
 * @remarks
 * Cloud Linux License services are managed under `/license/cloudLinux` route.
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
			displayName: 'License CloudLinux Operation',
			name: 'licenseCloudLinuxOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Cloud Linux License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Cloud Linux License service',
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
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseCloudLinuxOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected License CloudLinux operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseCloudLinuxOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseCloudLinux"`);
}
