import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
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
			displayName: 'Secondary Datacenter ID',
			name: 'secondaryDatacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Your secondary datacenter ID',
			displayOptions,
		},
		{
			displayName: 'Secondary Service Name',
			name: 'secondaryServiceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Your secondary dedicatedCloud',
			displayOptions,
		},
	];
}

/**
 * Executes the Disable Zerto Disaster Recovery operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.secondaryDatacenterId = this.getNodeParameter('secondaryDatacenterId', _itemIndex) as number;
	body.secondaryServiceName = this.getNodeParameter('secondaryServiceName', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/disable`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
