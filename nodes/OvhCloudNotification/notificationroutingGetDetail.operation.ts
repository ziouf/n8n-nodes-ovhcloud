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
			displayName: 'Routing ID',
			name: 'routingId',
			type: 'string',
			default: '',
			required: true,
			description: 'The routingId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Retrieve information about a routing operation.
 *
 * HTTP method: GET
 * Endpoint: /notification/routing/{routingId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const routingId = this.getNodeParameter('routingId', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/notification/routing/' + routingId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
