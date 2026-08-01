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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name identifier',
		},
		{
			displayName: 'Website ID',
			name: 'websiteId',
			type: 'string',
			default: '',
			required: true,
			description: 'The websiteId identifier',
		},

	];
}

/**
 * Executes the Put Update an existing website operation.
 *
 * HTTP method: PUT
 * Endpoint: /webhosting/resource/{name}/website/{websiteId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', itemIndex) as string;
	const websiteId = this.getNodeParameter('websiteId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/webhosting/resource/' + name + '/website/' + websiteId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
