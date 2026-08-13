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
 * Executes the Create operation.
 *
 * HTTP method: POST
 * Endpoint: /order/telephony/trunks/{x}/updateSimultaneousChannels
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const x = this.getNodeParameter('x', _itemIndex) as string;
	const body: IDataObject = {};

	const client = getClient(this);

	const data = (await client.httpPost(`/order/telephony/trunks/${x}/updateSimultaneousChannels`, body)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
