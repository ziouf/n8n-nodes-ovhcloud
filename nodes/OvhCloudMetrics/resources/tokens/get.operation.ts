import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific token for a metrics service.
 *
 * HTTP method: GET
 * Endpoint: /metrics/{serviceName}/token/{tokenId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the metrics service',
			displayOptions,
		},
		{
			displayName: 'Token ID',
			name: 'tokenId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The ID of the token',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Token operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const tokenId = this.getNodeParameter('tokenId', 0) as string;
	const data = (await client.httpGet(`/metrics/${serviceName}/token/${tokenId}`)) as IDataObject;
	return [{ json: data }];
}
