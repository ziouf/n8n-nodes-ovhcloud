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
			displayName: 'Storage ID',
			name: 'storageId',
			type: 'string',
			default: '',
			required: true,
			description: 'The storageId identifier',
		},
		{
			displayName: 'Container ID',
			name: 'containerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The containerId identifier',
		},

	];
}

/**
 * Executes the Get GetContainer operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/{storageId}/container/{containerId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const storageId = this.getNodeParameter('storageId', itemIndex) as string;
	const containerId = this.getNodeParameter('containerId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/storage/' + storageId + '/container/' + containerId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
