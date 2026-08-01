import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
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
 * Executes the Update Wildcard operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/dnsZone/{domainName}/wildcard/{wildcardId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const wildcardId = this.getNodeParameter('wildcardId', 0) as string;
	const data = (await client.httpPut(
		`/domain/dnsZone/${domainName}/wildcard/${wildcardId}`,
		{},
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
