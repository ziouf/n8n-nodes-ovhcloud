import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Datacenter',
			displayOptions,
		},
		{
			displayName: 'Virtual Machine ID',
			name: 'vmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the virtual machine',
			displayOptions,
		},
		{
			displayName: 'Backup Days',
			name: 'backupDays',
			type: 'multiOptions',
			options: [
				{ name: 'Friday', value: 'Friday' },
				{ name: 'Monday', value: 'Monday' },
				{ name: 'Saturday', value: 'Saturday' },
				{ name: 'Sunday', value: 'Sunday' },
				{ name: 'Thursday', value: 'Thursday' },
				{ name: 'Tuesday', value: 'Tuesday' },
				{ name: 'Wednesday', value: 'Wednesday' },
			],
			default: [],
			required: true,
			description: 'List of days your Virtual Machine will be backuped',
			displayOptions,
		},
	];
}

/**
 * Executes the Update backup job operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', itemIndex) as string;
	const body: IDataObject = {};
	body.backupDays = this.getNodeParameter('backupDays', itemIndex, []) as string[];
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
