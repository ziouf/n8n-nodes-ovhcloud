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
			description: 'The target URL',
			displayOptions,
		},
		{
			displayName: 'Status Code',
			name: 'statusCode',
			type: 'number',
			default: 301,
			description: 'HTTP status code for the redirect',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Redirect operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/redirect/{domainName}/{path}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const url = (this.getNodeParameter('url', 0, '') as string) || undefined;
	const statusCode = (this.getNodeParameter('statusCode', 0, 301) as number) || undefined;

	const body: IDataObject = {};
	if (url) body.url = url;
	if (statusCode) body.statusCode = statusCode;

	const data = (await client.httpPut(
		`/domain/redirect/${domainName}/${encodeURIComponent(path)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
