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
			displayName: 'okms Id',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The okmsId identifier',
		},
		{
			displayName: 'path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'The path identifier',
		},
		{
			displayName: 'version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'The version identifier',
		},

	];
}

/**
 * Executes the Get Retrieve a secret version operation.
 *
 * HTTP method: GET
 * Endpoint: /okms/resource/{okmsId}/secret/{path}/version/{version}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;
	const path = this.getNodeParameter('path', itemIndex) as string;
	const version = this.getNodeParameter('version', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/okms/resource/' + okmsId + '/secret/' + path + '/version/' + version)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
