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
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /email/pro/{service}/externalContact/{externalEmailAddress}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', _itemIndex ?? 0) as string;





	const client = getClient(this);
	const data = (await client.httpPut('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'externalContact' + '/' + encodeURIComponent(externalEmailAddress), {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

