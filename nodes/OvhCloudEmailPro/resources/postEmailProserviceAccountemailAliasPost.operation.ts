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
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'The email identifier',
		},
		{
			displayName: 'Alias',
			name: 'alias',
			type: 'string',
			default: '',
			description: 'The alias value',
		},
	];
}

/**
 * Create new alias
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/account/{email}/alias
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;



	const alias = this.getNodeParameter('alias', 0) as string;


const body: IDataObject = {
    alias: alias
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'account' + '/' + encodeURIComponent(email) + '/' + 'alias', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

