import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain name',
			displayOptions,
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'The redirect path (e.g. /blog)',
			displayOptions,
		},
		{
			displayName: 'Url',
			name: 'url',
			type: 'string',
			default: '',
			required: true,
			description: 'The target URL',
			displayOptions,
		},
		{
			displayName: 'Status Code',
			name: 'statusCode',
			type: 'options',
			options: [
				{ name: '301 Moved Permanently', value: 301 },
				{ name: '302 Found', value: 302 },
				{ name: '303 See Other', value: 303 },
				{ name: '307 Temporary Redirect', value: 307 },
				{ name: '308 Permanent Redirect', value: 308 },
			],
			default: 301,
			description: 'HTTP status code for the redirect',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Redirect operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/redirect/{domainName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const url = this.getNodeParameter('url', 0) as string;
	const statusCode = this.getNodeParameter('statusCode', 0, 301) as number;

	const body: IDataObject = { path, url, statusCode };

	await client.httpPost(`/domain/redirect/${domainName}`, body);
	return this.helpers.returnJsonArray([{ path, success: true }]);
}
