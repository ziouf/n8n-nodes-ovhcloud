import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'The type of form characteristics to retrieve',
			displayOptions,
		},
	];
}

/**
 * Retrieve form characteristics.
 *
 * HTTP method: GET
 * Endpoint: /contact/form
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const type = (this.getNodeParameter('type', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (type) {
		qs.type = type;
	}

	const data = (await client.httpGet('/contact/form', qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
