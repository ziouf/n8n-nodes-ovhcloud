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
		{
			displayName: 'Pool ID',
			name: 'poolId',
			type: 'string',
			default: '',
			required: true,
			description: 'The pool identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Pool operation.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/dnsZone/{domainName}/pool/{poolId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const poolId = this.getNodeParameter('poolId', 0) as string;
	await new ApiClient(this).httpDelete(`/domain/dnsZone/${domainName}/pool/${poolId}`);
	return this.helpers.returnJsonArray([{ poolId, success: true }]);
}
