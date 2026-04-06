import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get DNS MX filter for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/dnsMXFilter
 * Query: subDomain (optional)
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Filter by sub-domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Get DNS MX Filter operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	const qs: IDataObject = {};
	if (subDomain) qs.subDomain = subDomain;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/dnsMXFilter`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
