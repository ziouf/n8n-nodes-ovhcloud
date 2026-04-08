import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the List VPS Disks operation.
 *
 * Defines the VPS service selector for listing all disks attached to a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name input
 */
export function descriptionDisksList(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'disk.serviceName',
			description:
				'The name of the VPS service whose disks you want to list. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a VPS service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the List VPS Disks operation.
 *
 * Retrieves all disks attached to a specific VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the list of disks
 * @throws NodeApiError if the VPS service is not found
 *
 * @example
 * ```typescript
 * // Input: serviceName = "vps1234567"
 * // Output: Array of disk details with size, status, type, etc.
 * ```
 */
export async function executeDisksList(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('disk.serviceName', 0, {
		extractValue: true,
	}) as string;

	const disks = (await client.httpGet(`/vps/${serviceName}/disks`)) as IDataObject[];
	return this.helpers.returnJsonArray(disks);
}
