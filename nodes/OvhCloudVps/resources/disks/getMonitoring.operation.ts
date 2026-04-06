import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Get Disk Monitoring operation.
 *
 * Defines inputs for retrieving disk monitoring metrics for a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name, disk ID, period, and type inputs
 */
export function descriptionDisksGetMonitoring(displayOptions: IDisplayOptions): INodeProperties[] {
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
			description: 'The unique identifier of the disk to retrieve monitoring data for',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'disk.period',
			type: 'options',
			required: true,
			default: '5min',
			description: 'The time period for monitoring data',
			options: [
				{
					name: '5 Minutes',
					value: '5min',
				},
				{
					name: '1 Hour',
					value: '1hour',
				},
				{
					name: '1 Day',
					value: '1day',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'disk.type',
			type: 'options',
			required: true,
			default: 'usage',
			description: 'The type of monitoring data to retrieve',
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
 * Executes the Get Disk Monitoring operation.
 *
 * Retrieves monitoring metrics for a specific disk attached to a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the disk monitoring information
 */
export async function executeDisksGetMonitoring(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('disk.serviceName', 0, {
		extractValue: true,
	}) as string;
	const diskId = this.getNodeParameter('disk.diskId', 0) as string;
	const period = this.getNodeParameter('disk.period', 0) as string;
	const type = this.getNodeParameter('disk.type', 0) as string;

	const monitoring = (await client.httpGet(`/vps/${serviceName}/disks/${diskId}/monitoring`, {
		period,
		type,
	})) as IDataObject;

	return this.helpers.returnJsonArray(monitoring);
}
