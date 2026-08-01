import type {

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
 * Executes the Get GET /webhosting/resource/{name}/website/{websiteId}/domain operation.
 *
 * HTTP method: GET
 * Endpoint: /webhosting/resource/{name}/website/{websiteId}/domain
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', itemIndex) as string;
	const websiteId = this.getNodeParameter('websiteId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/webhosting/resource/' + name + '/website/' + websiteId + '/domain')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
