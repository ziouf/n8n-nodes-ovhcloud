import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainName identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get a domain name resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/name/{domainName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const domainName = this.getNodeParameter('domainName', _itemIndex) as string;

	const data = (await client.httpGet(
		`/domain/name/${encodeURIComponent(domainName)}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
