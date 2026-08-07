import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';


export function description() {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The service identifier',
		},
	];
}

/**
 * Pending actions
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/task
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'task')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

