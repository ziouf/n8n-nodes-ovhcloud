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
			displayName: 'ExternalEmailAddress',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The externalemailaddress identifier',
		},
	];
}

/**
 * delete external contact
 *
 * HTTP method: DELETE
 * Endpoint: /email/pro/{service}/externalContact/{externalEmailAddress}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'externalContact' + '/' + encodeURIComponent(externalEmailAddress))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

