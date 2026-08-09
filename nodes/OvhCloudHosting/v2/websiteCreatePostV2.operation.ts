import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Post Create a website operation.
 *
 * HTTP method: POST
 * Endpoint: /webhosting/resource/{name}/website
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', _itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/webhosting/resource/' + name + '/website', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
