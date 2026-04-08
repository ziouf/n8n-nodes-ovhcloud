import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Get Disk Usage operation.
 *
 * Defines inputs for retrieving disk usage metrics for a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name, disk ID, and type inputs
 */
export function descriptionDisksGetUsage(displayOptions: IDisplayOptions): INodeProperties[] {
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
			description: 'The unique identifier of the disk to retrieve usage data for',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'disk.type',
			type: 'options',
			required: true,
			default: 'usage',
			description: 'The type of usage data to retrieve',
			options: [
				{
					name: 'Usage',
					value: 'usage',
				},
				{
					name: 'IOPS',
					value: 'iops',
				},
				{
					name: 'Read',
					value: 'read',
				},
				{
					name: 'Write',
					value: 'write',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get Disk Usage operation.
 *
 * Retrieves usage metrics for a specific disk attached to a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the disk usage information
 */
export async function executeDisksGetUsage(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('disk.serviceName', 0, {
		extractValue: true,
	}) as string;
	const diskId = this.getNodeParameter('disk.diskId', 0) as string;
	const type = this.getNodeParameter('disk.type', 0) as string;

	const usage = (await client.httpGet(`/vps/${serviceName}/disks/${diskId}/use`, {
		type,
	})) as IDataObject;

	return this.helpers.returnJsonArray(usage);
}
