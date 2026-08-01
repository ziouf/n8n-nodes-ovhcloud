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
			displayName: 'Resource U R N',
			name: 'resourceURN',
			type: 'string',
			default: '',
			required: true,
			description: 'The resourceURN identifier',
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'The key identifier',
		},

	];
}

/**
 * Executes the Delete Remove a tag from a resource operation.
 *
 * HTTP method: DELETE
 * Endpoint: /iam/resource/{resourceURN}/tag/{key}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const resourceURN = this.getNodeParameter('resourceURN', itemIndex) as string;
	const key = this.getNodeParameter('key', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/iam/resource/' + resourceURN + '/tag/' + key)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
