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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'Sound ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Sound operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/sounds/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/sounds/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
