import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific backup service policy.
 *
 * HTTP method: GET
 * Endpoint: /v2/backupServices/backupPolicy/{policyId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Policy ID',
			name: 'policyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the backup policy',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Backup Service Policy operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const policyId = this.getNodeParameter('policyId', 0) as string;
	const data = (await client.httpGet(`/v2/backupServices/backupPolicy/${policyId}`)) as IDataObject;
	return [{ json: data }];
}
