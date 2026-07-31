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
 * Executes the List DNS Zone Records operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/dnsZone/{domainName}/record
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const records = (await new ApiClient(this).httpGet(
		`/domain/dnsZone/${domainName}/record`,
	)) as string[];
	return this.helpers.returnJsonArray(records.map((r: string) => ({ recordId: r })));
}
