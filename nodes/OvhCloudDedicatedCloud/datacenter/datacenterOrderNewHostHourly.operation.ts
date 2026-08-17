import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Host profile you want to order',
			displayOptions,
		},
		{
			displayName: 'VMware Cluster ID',
			name: 'vmwareClusterId',
			type: 'string',
			default: '',
			description: 'ID of the cluster you want the host to be added ("domain-cXX")',
			displayOptions,
		},
	];
}

/**
 * Executes the Order hourly host operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const body: IDataObject = {};
	body.name = this.getNodeParameter('name', _itemIndex) as string;
	const vmwareClusterId = this.getNodeParameter('vmwareClusterId', _itemIndex, '') as string;
	if (vmwareClusterId !== '') { body.vmwareClusterId = vmwareClusterId; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderNewHostHourly`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
