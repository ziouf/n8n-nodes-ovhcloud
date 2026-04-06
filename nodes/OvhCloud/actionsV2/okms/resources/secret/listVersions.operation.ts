import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List OKMS secret versions.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/resource/{okmsId}/secret/{path}/version
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OKMS ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the OKMS resource',
			displayOptions,
		},
		{
			displayName: 'Secret Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'The path of the secret',
			displayOptions,
		},
	];
}

/**
 * Executes the List OKMS Secret Versions operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const okmsId = this.getNodeParameter('okmsId', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const data = (await client.httpGet(`/v2/okms/resource/${okmsId}/secret/${path}/version`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
