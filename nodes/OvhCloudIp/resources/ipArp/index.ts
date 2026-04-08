/**
 * @brief IP ARP sub-resource operations for IP resource
 *
 * Provides operations for managing ARP blocked IPs.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUnblock, description as descriptionUnblock } from './unblock.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP ARP Operation',
			name: 'ipArpOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List ARP blocked IPs',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get ARP blocked IP details',
				},
				{
					name: 'Unblock',
					value: 'unblock',
					action: 'Unblock an ARP blocked IP',
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
			show: { ...displayOptions?.show, ipArpOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipArpOperation: ['get'] },
		}),
		...descriptionUnblock({
			...displayOptions,
			show: { ...displayOptions?.show, ipArpOperation: ['unblock'] },
		}),
	];
}

/**
 * Executes the selected IP ARP operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipArpOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'unblock':
			return await executeUnblock.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipArp"`);
}
