import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';


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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;



	const alias = this.getNodeParameter('alias', _itemIndex ?? 0) as string;


const body: IDataObject = {
    alias: alias
    };

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'account' + '/' + encodeURIComponent(email) + '/' + 'alias', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

