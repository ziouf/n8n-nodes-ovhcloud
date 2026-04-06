import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific backup service tenant.
 *
 * HTTP method: GET
 * Endpoint: /v2/backupServices/tenant/{tenantId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Tenant ID',
			name: 'tenantId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the tenant',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Backup Service Tenant operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const tenantId = this.getNodeParameter('tenantId', 0) as string;
	const data = (await client.httpGet(`/v2/backupServices/tenant/${tenantId}`)) as IDataObject;
	return [{ json: data }];
}
