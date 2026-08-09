import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Search Value',
			name: 'searchValue',
			type: 'string',
			default: '',
			description: 'Search value to filter AllDom resources',
			displayOptions,
		},
	];
}

/**
 * Executes the List all the AllDom resources operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/alldom
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
	const searchValue = this.getNodeParameter('searchValue', _itemIndex, '') as string;
	if (searchValue !== '' && searchValue !== undefined) qs['searchValue'] = searchValue;

	const data = (await client.httpGet(`/domain/alldom`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
