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
			displayName: 'storage Id',
			name: 'storageId',
			type: 'string',
			default: '',
			required: true,
			description: 'The storageId identifier',
		},

	];
}

/**
 * Executes the Put UpdateStorage operation.
 *
 * HTTP method: PUT
 * Endpoint: /storage/{storageId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const storageId = this.getNodeParameter('storageId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/storage/' + storageId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
