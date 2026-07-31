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
 * Executes the Delete DeleteStorage operation.
 *
 * HTTP method: DELETE
 * Endpoint: /storage/{storageId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const storageId = this.getNodeParameter('storageId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/storage/' + storageId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
