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
 * Executes the Create Wildcard operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/dnsZone/{domainName}/wildcard
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const data = (await new ApiClient(this).httpPost(
		`/domain/dnsZone/${domainName}/wildcard`,
		{},
	)) as string;
	return this.helpers.returnJsonArray([{ wildcardId: data }]);
}
