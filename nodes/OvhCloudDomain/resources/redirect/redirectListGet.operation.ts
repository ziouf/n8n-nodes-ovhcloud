import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
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
	];
}

/**
 * Executes the List Redirect operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/redirect/{domainName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const redirects = (await new ApiClient(this).httpGet(`/domain/redirect/${domainName}`)) as Record<
		string,
		string
	>[];
	return this.helpers.returnJsonArray(redirects);
}
