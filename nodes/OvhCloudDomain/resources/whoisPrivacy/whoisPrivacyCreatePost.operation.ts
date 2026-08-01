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
 * Executes the Create Whois Privacy operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/whoisPrivacy/{domainName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	await new ApiClient(this).httpPost(`/domain/whoisPrivacy/${domainName}`, {});
	return this.helpers.returnJsonArray([{ domainName, activated: true }]);
}
