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
			displayName: 'AllowedAccountId',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'The allowedaccountid identifier',
		},
	];
}

/**
 * Delete allowed user for sendAs
 *
 * HTTP method: DELETE
 * Endpoint: /email/pro/{service}/account/{email}/sendAs/{allowedAccountId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'account' + '/' + encodeURIComponent(email) + '/' + 'sendAs' + '/' + encodeURIComponent(allowedAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

