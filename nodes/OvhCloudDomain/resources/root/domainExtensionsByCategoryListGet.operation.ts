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
			displayName: 'Category Type',
			name: 'categoryType',
			type: 'json',
			default: '',
			description: 'Filter by category types',
			displayOptions,
		},
	];
}

/**
 * Executes the List extensions, grouped by category types (like 'thematic', 'geolocalization') and category names (like 'europe') operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions/byCategory
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
		const categoryType = this.getNodeParameter('categoryType', _itemIndex, '') as string;
		if (categoryType !== '' && categoryType !== undefined) qs['categoryType'] = categoryType;

	const data = (await client.httpGet(`/domain/extensions/byCategory`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
