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
			displayName: 'Search Value',
			name: 'searchValue',
			type: 'string',
			default: '',
			description: 'Search value to filter domain name resources',
			displayOptions,
		},
	];
}

/**
 * Executes the List all domain name resources operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/name
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const qs: IDataObject = {};
	const searchValue = this.getNodeParameter('searchValue', _itemIndex, '') as string;
	if (searchValue !== '' && searchValue !== undefined) qs['searchValue'] = searchValue;

	const data = (await client.httpGet(`/domain/name`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
