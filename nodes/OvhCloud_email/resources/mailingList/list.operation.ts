import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List mailing lists for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/mailingList
 * Query: name (optional)
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Filter by mailing list name',
			displayOptions,
		},
	];
}

/**
 * Executes the List Mailing Lists operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const name = this.getNodeParameter('name', 0, '') as string;
	const qs: IDataObject = {};
	if (name) qs.name = name;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/mailingList`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
