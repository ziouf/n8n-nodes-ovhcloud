import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Get GET /webhosting/resource/{name} operation.
 *
 * HTTP method: GET
 * Endpoint: /webhosting/resource/{name}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/webhosting/resource/' + name)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
