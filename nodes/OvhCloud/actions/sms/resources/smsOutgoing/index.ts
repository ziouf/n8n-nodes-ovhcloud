/**
 * @brief SMS Outgoing resource operations
 *
 * Provides operations for managing outgoing SMS messages:
 * - List: List all outgoing SMS messages
 * - Get: Get details of a specific outgoing SMS message
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
			displayName: 'SMS Outgoing Operation',
			name: 'smsOutgoingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'List', value: 'list', action: 'List all outgoing SMS messages' },
				{ name: 'Get', value: 'get', action: 'Get details of an outgoing SMS message' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, smsOutgoingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, smsOutgoingOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('smsOutgoingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "smsOutgoing"`);
}
