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
			displayName: 'Wildcard ID',
			name: 'wildcardId',
			type: 'string',
			default: '',
			required: true,
			description: 'The wildcard identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Wildcard operation.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/dnsZone/{domainName}/wildcard/{wildcardId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const wildcardId = this.getNodeParameter('wildcardId', 0) as string;
	await new ApiClient(this).httpDelete(`/domain/dnsZone/${domainName}/wildcard/${wildcardId}`);
	return this.helpers.returnJsonArray([{ wildcardId, success: true }]);
}
