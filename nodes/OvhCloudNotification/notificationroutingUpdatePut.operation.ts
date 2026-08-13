import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Routing ID',
			name: 'routingId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Put Update a routing operation.
 *
 * HTTP method: PUT
 * Endpoint: /notification/routing/{routingId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const routingId = this.getNodeParameter('routingId', _itemIndex) as string;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPut('/notification/routing/' + routingId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
