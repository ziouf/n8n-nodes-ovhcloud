import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List redirections for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/redirection
 * Query: from (optional), to (optional)
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Filter by source address',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			description: 'Filter by target address',
			displayOptions,
		},
	];
}

/**
 * Executes the List Redirections operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const from = this.getNodeParameter('from', 0, '') as string;
	const to = this.getNodeParameter('to', 0, '') as string;
	const qs: IDataObject = {};
	if (from) qs.from = from;
	if (to) qs.to = to;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/redirection`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
