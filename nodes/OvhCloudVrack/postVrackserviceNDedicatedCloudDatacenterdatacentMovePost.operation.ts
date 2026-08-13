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
		{
			displayName: 'TargetServiceName',
			name: 'targetServiceName',
			type: 'string',
			default: '',
			description: 'The targetservicename value',
			displayOptions,
		},
	];
}

/**
 * Move your dedicatedCloud datacenter from a Vrack to another
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenter = this.getNodeParameter('datacenter', _itemIndex) as string;



	const targetServiceName = this.getNodeParameter('targetServiceName', _itemIndex) as string;


const body: IDataObject = {
    targetServiceName: targetServiceName
    };

	const client = getClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedCloudDatacenter' + '/' + encodeURIComponent(datacenter) + '/' + 'move', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

