import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Okms ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The okmsId identifier',
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'The path identifier',
		},

	];
}

/**
 * Executes the Get List the versions of a secret operation.
 *
 * HTTP method: GET
 * Endpoint: /okms/resource/{okmsId}/secret/{path}/version
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;
	const path = this.getNodeParameter('path', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/okms/resource/' + okmsId + '/secret/' + path + '/version')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
