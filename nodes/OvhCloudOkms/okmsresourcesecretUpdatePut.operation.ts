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
 * Executes the Put Update a secret operation.
 *
 * HTTP method: PUT
 * Endpoint: /okms/resource/{okmsId}/secret/{path}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;
	const path = this.getNodeParameter('path', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/okms/resource/' + okmsId + '/secret/' + path, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
