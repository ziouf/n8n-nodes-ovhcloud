import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Get VPS Disk operation.
 *
 * Defines inputs for selecting a VPS service and its disk to retrieve details.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name and disk ID inputs
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'disk.serviceName',
			description:
				'The name of the VPS service that contains the disk. This can be set manually or selected from the list of services.',
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
		{
			displayName: 'Disk ID',
			name: 'disk.diskId',
			type: 'string',
			required: true,
			default: '',
			description: 'The unique identifier of the disk to retrieve (e.g., `disk-123456`)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get VPS Disk operation.
 *
 * Retrieves the details of a specific disk attached to a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the disk information
 * @throws NodeApiError if the disk is not found or credentials are invalid
 *
 * @example
 * ```typescript
 * // Input: serviceName = "vps1234567", diskId = "disk-123456"
 * // Output: Disk details with size, status, type, etc.
 * ```
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('disk.serviceName', 0, {
		extractValue: true,
	}) as string;
	const id = this.getNodeParameter('disk.diskId', 0, { extractValue: true }) as string;

	const disk = (await client.httpGet(`/vps/${serviceName}/disks/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray(disk);
}
