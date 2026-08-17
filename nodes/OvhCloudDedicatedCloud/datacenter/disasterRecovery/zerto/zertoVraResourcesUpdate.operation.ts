import { SERVICE_NAME } from '../../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
			displayName: 'Resources Size',
			name: 'resourcesSize',
			type: 'options',
			options: [
				{ name: 'L', value: 'L' },
				{ name: 'S', value: 'S' },
				{ name: 'XL', value: 'XL' },
				{ name: 'XS', value: 'XS' },
			],
			default: 'L',
			required: true,
			description: 'The desired CPU and RAM configuration for the VRA',
			displayOptions,
		},
		{
			displayName: 'VM ID',
			name: 'vmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The unique identifier of the VRA vm',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Zerto VRA Resources operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/vraResources
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.resourcesSize = this.getNodeParameter('resourcesSize', _itemIndex) as string;
	body.vmId = this.getNodeParameter('vmId', _itemIndex) as number;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/vraResources`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
