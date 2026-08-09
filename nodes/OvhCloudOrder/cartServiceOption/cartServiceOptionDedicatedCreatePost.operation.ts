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
 * Executes the Create operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cartServiceOption/dedicated/{x}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const x = this.getNodeParameter('x', _itemIndex) as string;
	const body: IDataObject = {};

	const client = new ApiClient(this);

	const data = (await client.httpPost(`/order/cartServiceOption/dedicated/${x}`, body)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
