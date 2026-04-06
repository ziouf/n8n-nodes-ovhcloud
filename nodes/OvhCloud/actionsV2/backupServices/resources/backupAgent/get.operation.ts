import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific backup service agent.
 *
 * HTTP method: GET
 * Endpoint: /v2/backupServices/backupAgent/{agentId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Agent ID',
			name: 'agentId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the backup agent',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Backup Service Agent operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const agentId = this.getNodeParameter('agentId', 0) as string;
	const data = (await client.httpGet(`/v2/backupServices/backupAgent/${agentId}`)) as IDataObject;
	return [{ json: data }];
}
