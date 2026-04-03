/**
 * @brief Hosting User resource operations for Hosting
 *
 * Provides operations for managing private database users:
 * - List: List all users
 * - Get: Get details of a specific user
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
			displayName: 'Hosting User Operation',
			name: 'hostingUserOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all users' },
				{ name: 'Get', value: 'get', action: 'Get details of a user' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, hostingUserOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, hostingUserOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('hostingUserOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hostingUser"`);
}
