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
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /email/pro/{service}/domain/{domainName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPut('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'domain' + '/' + encodeURIComponent(domainName), {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

