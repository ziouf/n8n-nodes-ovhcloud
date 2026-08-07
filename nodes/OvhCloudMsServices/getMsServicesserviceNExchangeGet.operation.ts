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
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/exchange
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'exchange')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

