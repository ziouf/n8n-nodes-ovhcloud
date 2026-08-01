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
		{
			displayName: 'Record ID',
			name: 'recordId',
			type: 'string',
			default: '',
			required: true,
			description: 'The record identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Flush DNS Zone Record operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/dnsZone/{domainName}/record/{recordId}/flush
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const recordId = this.getNodeParameter('recordId', 0) as string;
	await new ApiClient(this).httpPost(`/domain/dnsZone/${domainName}/record/${recordId}/flush`);
	return this.helpers.returnJsonArray([{ recordId, flushed: true }]);
}
