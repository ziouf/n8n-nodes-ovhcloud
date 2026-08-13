import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'Datacenter',
			name: 'datacenter',
			type: 'string',
			default: '',
			required: true,
			description: 'The data center',
			displayOptions,
		},
	];
}

/**
 * Vracks allowed for your dedicatedCloud datacenter
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenter = this.getNodeParameter('datacenter', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedCloudDatacenter' + '/' + encodeURIComponent(datacenter) + '/' + 'allowedVrack')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

