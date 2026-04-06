import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get OKMS secret config.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/resource/{okmsId}/secretConfig
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
	];
}

/**
 * Executes the Get OKMS Secret Config operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const okmsId = this.getNodeParameter('okmsId', 0) as string;
	const data = (await client.httpGet(`/v2/okms/resource/${okmsId}/secretConfig`)) as IDataObject;
	return [{ json: data }];
}
