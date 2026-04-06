import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific OKMS credential.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/resource/{okmsId}/credential/{credentialId}
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
			displayName: 'Credential ID',
			name: 'credentialId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the credential',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OKMS Credential operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const okmsId = this.getNodeParameter('okmsId', 0) as string;
	const credentialId = this.getNodeParameter('credentialId', 0) as string;
	const data = (await client.httpGet(`/v2/okms/resource/${okmsId}/credential/${credentialId}`)) as IDataObject;
	return [{ json: data }];
}
