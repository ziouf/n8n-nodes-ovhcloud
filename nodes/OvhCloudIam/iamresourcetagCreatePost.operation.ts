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
			displayName: 'resource U R N',
			name: 'resourceURN',
			type: 'string',
			default: '',
			required: true,
			description: 'The resourceURN identifier',
		},

	];
}

/**
 * Executes the Post Add a tag to a resource operation.
 *
 * HTTP method: POST
 * Endpoint: /iam/resource/{resourceURN}/tag
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const resourceURN = this.getNodeParameter('resourceURN', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/iam/resource/' + resourceURN + '/tag', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
