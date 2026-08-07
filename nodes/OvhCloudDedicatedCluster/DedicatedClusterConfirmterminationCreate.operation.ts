import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Service name',
		},
	];
}

/**
 * Confirm service termination
 *
 * HTTP method: POST
 * Endpoint: /dedicated/cluster/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const token = this.getNodeParameter('token', itemIndex) as string;
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['token'] = token;
	const data = (await client.httpPost('/dedicated/cluster/' + encodeURIComponent(serviceName) + '/confirmTermination', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
