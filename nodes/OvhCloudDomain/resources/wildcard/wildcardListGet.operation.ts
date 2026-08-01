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
			displayOptions,
		},
	];
}

/**
 * Executes the List Wildcard operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/dnsZone/{domainName}/wildcard
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const wildcards = (await new ApiClient(this).httpGet(
		`/domain/dnsZone/${domainName}/wildcard`,
	)) as string[];
	return this.helpers.returnJsonArray(wildcards.map((w: string) => ({ wildcardId: w })));
}
