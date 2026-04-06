import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List Extensions By Category operation
 *
 * Lists domain extensions by category.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions/byCategory
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Category Type',
			name: 'categoryType',
			type: 'string',
			default: '',
			description: 'Filter by category type',
			displayOptions,
		},
	];
}

/**
 * Executes the List Extensions By Category operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
	const categoryType = this.getNodeParameter('categoryType', 0, '') as string;
	if (categoryType) qs.categoryType = categoryType;

	const data = (await client.httpGet('/domain/extensions/byCategory', qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
