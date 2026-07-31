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
			displayName: 'routing Id',
			name: 'routingId',
			type: 'string',
			default: '',
			required: true,
			description: 'The routingId identifier',
		},

	];
}

/**
 * Executes the Put Update a routing operation.
 *
 * HTTP method: PUT
 * Endpoint: /notification/routing/{routingId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const routingId = this.getNodeParameter('routingId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/notification/routing/' + routingId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
