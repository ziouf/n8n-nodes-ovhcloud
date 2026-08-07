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
			displayName: 'DomainName',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainname identifier',
		},
	];
}

/**
 * Delete existing organization disclaimer
 *
 * HTTP method: DELETE
 * Endpoint: /email/pro/{service}/domain/{domainName}/disclaimer
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'domain' + '/' + encodeURIComponent(domainName) + '/' + 'disclaimer')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

