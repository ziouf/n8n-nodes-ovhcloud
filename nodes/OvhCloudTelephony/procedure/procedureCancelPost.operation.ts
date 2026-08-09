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
			description: 'Procedure ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Post Procedure Cancel operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/procedure/{id}/cancel
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost(
		'/telephony/procedure/' + encodeURIComponent(id) + '/cancel',
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
