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
			displayName: 'AllowAccountId',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			description: 'The allowaccountid value',
		},
	];
}

/**
 * Allow another user to Send On Behalf To mails from this mailbox
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/account/{email}/sendOnBehalfTo
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;



	const allowAccountId = this.getNodeParameter('allowAccountId', _itemIndex ?? 0) as string;


const body: IDataObject = {
    allowAccountId: allowAccountId
    };

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'account' + '/' + encodeURIComponent(email) + '/' + 'sendOnBehalfTo', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

