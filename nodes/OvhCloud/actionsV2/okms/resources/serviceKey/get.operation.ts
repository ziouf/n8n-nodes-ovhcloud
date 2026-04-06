import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific OKMS service key.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/resource/{okmsId}/serviceKey/{keyId}
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
			displayName: 'Key ID',
			name: 'keyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service key',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OKMS Service Key operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const okmsId = this.getNodeParameter('okmsId', 0) as string;
	const keyId = this.getNodeParameter('keyId', 0) as string;
	const data = (await client.httpGet(`/v2/okms/resource/${okmsId}/serviceKey/${keyId}`)) as IDataObject;
	return [{ json: data }];
}
