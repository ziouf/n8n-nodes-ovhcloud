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

	];
}

/**
 * Executes the Get Retrieve a resource operation.
 *
 * HTTP method: GET
 * Endpoint: /iam/resource/{resourceURN}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const resourceURN = this.getNodeParameter('resourceURN', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/iam/resource/' + resourceURN)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
