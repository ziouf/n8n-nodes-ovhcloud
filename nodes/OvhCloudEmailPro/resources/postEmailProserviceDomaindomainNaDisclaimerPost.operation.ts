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
		{
			displayName: 'Content',
			name: 'content',
			type: 'string',
			default: '',
			description: 'The content value',
		},
		{
			displayName: 'OutsideOnly',
			name: 'outsideOnly',
			type: 'string',
			default: '',
			description: 'The outsideonly value',
		},
	];
}

/**
 * Create organization disclaimer of each email
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/domain/{domainName}/disclaimer
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const domainName = this.getNodeParameter('domainName', _itemIndex ?? 0) as string;



	const content = this.getNodeParameter('content', _itemIndex ?? 0) as string;
	const outsideOnly = this.getNodeParameter('outsideOnly', _itemIndex ?? 0) as string;


const body: IDataObject = {
    content: content,
    outsideOnly: outsideOnly
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'domain' + '/' + encodeURIComponent(domainName) + '/' + 'disclaimer', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

