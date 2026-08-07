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
 * Update spam and virus flags on all active accounts
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/updateFlagsOnAllAccounts
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'updateFlagsOnAllAccounts', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

