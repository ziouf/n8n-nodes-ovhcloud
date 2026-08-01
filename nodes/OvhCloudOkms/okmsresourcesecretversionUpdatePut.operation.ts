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
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'The version identifier',
		},

	];
}

/**
 * Executes the Put Update the state of a secret version operation.
 *
 * HTTP method: PUT
 * Endpoint: /okms/resource/{okmsId}/secret/{path}/version/{version}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;
	const path = this.getNodeParameter('path', itemIndex) as string;
	const version = this.getNodeParameter('version', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/okms/resource/' + okmsId + '/secret/' + path + '/version/' + version, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
