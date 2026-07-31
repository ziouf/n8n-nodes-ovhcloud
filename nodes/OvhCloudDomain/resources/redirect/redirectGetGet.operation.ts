import type { IDataObject,  IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
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
	];
}

/**
 * Executes the Get Redirect operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/redirect/{domainName}/{path}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const data = (await new ApiClient(this).httpGet(
		`/domain/redirect/${domainName}/${encodeURIComponent(path)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
