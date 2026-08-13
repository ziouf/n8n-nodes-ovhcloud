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
			displayName: 'X',
			name: 'x',
			type: 'string',
			default: '',
			required: true,
			description: 'The x parameter',
			displayOptions,
		}
	];
}

/**
 * Executes the List operation.
 *
 * HTTP method: GET
 * Endpoint: /order/dedicated/server/{x}/traffic/{x}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const x = this.getNodeParameter('x', _itemIndex) as string;
	const client = getClient(this);

	const data = (await client.httpGet(`/order/dedicated/server/${x}/traffic/{x}`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
