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
	];
}

/**
 * Executes the Get Whois Privacy operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/whoisPrivacy/{domainName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const data = (await new ApiClient(this).httpGet(
		`/domain/whoisPrivacy/${domainName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
