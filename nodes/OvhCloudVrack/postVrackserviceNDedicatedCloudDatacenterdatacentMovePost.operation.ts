import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'Datacenter',
			name: 'datacenter',
			type: 'string',
			default: '',
			required: true,
			description: 'The datacenter identifier',
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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const datacenter = this.getNodeParameter('datacenter', itemIndex) as string;



	const targetServiceName = this.getNodeParameter('targetServiceName', itemIndex) as string;


const body: IDataObject = {
    targetServiceName: targetServiceName
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedCloudDatacenter' + '/' + encodeURIComponent(datacenter) + '/' + 'move', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

