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
 * Executes the Get DNS Zone Record operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/dnsZone/{domainName}/record/{recordId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	
	
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const recordId = this.getNodeParameter('recordId', 0) as string;
	const data = (await new ApiClient(this).httpGet(
		`/domain/dnsZone/${domainName}/record/${recordId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
