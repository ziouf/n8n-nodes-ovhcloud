import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Encryption Key ID',
			name: 'encryptionKeyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The encryptionKeyId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the GET encryptionKeyGetGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const encryptionKeyId = this.getNodeParameter('encryptionKeyId', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/encryptionKey/${encodeURIComponent(encryptionKeyId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
