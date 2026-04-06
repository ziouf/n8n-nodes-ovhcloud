import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific encryption key for a DBaaS log service.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}
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
			displayName: 'Encryption Key ID',
			name: 'encryptionKeyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the encryption key',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Encryption Key operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const encryptionKeyId = this.getNodeParameter('encryptionKeyId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/encryptionKey/${encryptionKeyId}`,
	)) as IDataObject;
	return [{ json: data }];
}
