import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

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
 * Executes the Get Get available region and its availability zones operation.
 *
 * HTTP method: GET
 * Endpoint: /location/{name}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/location/' + name)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
