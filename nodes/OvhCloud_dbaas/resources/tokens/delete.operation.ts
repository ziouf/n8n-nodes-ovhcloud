import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a token for a DBaaS log service.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/token/{tokenId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
		{
			displayName: 'Token ID',
			name: 'tokenId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The ID of the token to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Token operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const tokenId = this.getNodeParameter('tokenId', 0) as string;
	const data = (await client.httpDelete(
		`/dbaas/logs/${serviceName}/token/${tokenId}`,
	)) as IDataObject;
	return [{ json: data }];
}
