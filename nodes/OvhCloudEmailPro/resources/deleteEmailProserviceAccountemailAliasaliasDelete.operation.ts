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
			required: true,
			description: 'The alias identifier',
		},
	];
}

/**
 * Delete existing alias
 *
 * HTTP method: DELETE
 * Endpoint: /email/pro/{service}/account/{email}/alias/{alias}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const alias = this.getNodeParameter('alias', _itemIndex ?? 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'account' + '/' + encodeURIComponent(email) + '/' + 'alias' + '/' + encodeURIComponent(alias))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

