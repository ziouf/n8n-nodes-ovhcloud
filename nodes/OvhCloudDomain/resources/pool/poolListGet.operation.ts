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
 * Executes the List Pool operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/dnsZone/{domainName}/pool
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const pools = (await new ApiClient(this).httpGet(
		`/domain/dnsZone/${domainName}/pool`,
	)) as string[];
	return this.helpers.returnJsonArray(pools.map((p: string) => ({ poolId: p })));
}
