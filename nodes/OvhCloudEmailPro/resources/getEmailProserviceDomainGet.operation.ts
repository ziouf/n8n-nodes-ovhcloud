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
			displayName: 'State',
			name: 'state',
			type: 'string',
			default: '',
			description: 'The state parameter',
		},
	];
}

/**
 * Domains associated to this service
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/domain
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;

	const state = this.getNodeParameter('state', 0) as string;


const qs: IDataObject = {
    state: state
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'domain', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

