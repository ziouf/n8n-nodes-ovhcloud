/**
 * @brief DedicatedCeph resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Ceph services including:
 * - List all Dedicated Ceph services for the authenticated account
 * - Get detailed information about a specific Dedicated Ceph service
 *
 * Available operations:
 * - `list`: ListDedicatedCephServices - List all Dedicated Ceph services
 * - `get`: GetDedicatedCephService - Get details of a specific Dedicated Ceph service
 *
 * @remarks
 * Dedicated Ceph services are managed under `/dedicated/ceph` route.
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
			displayName: 'Dedicated Ceph Operation',
			name: 'dedicatedCephOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Ceph services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Ceph service',
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
			show: { ...displayOptions?.show, dedicatedCephOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Ceph operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedCephOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedCeph"`);
}
