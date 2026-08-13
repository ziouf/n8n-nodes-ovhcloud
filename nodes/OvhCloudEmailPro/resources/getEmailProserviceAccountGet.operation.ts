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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'The ID parameter',
		},
		{
			displayName: 'PrimaryEmailAddress',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			description: 'The primaryemailaddress parameter',
		},
	];
}

/**
 * Accounts associated to this pro service
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/account
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;

	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', _itemIndex ?? 0) as string;


const qs: IDataObject = {
    id: id,
    primaryEmailAddress: primaryEmailAddress
  };



	const client = getClient(this);
	const data = (await client.httpGet('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'account', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

