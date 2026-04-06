import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties, IDataObject } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get SharePoint billing migration status.
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/sharepoint/billingMigrated
 */
 
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the MS service',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/msServices/${serviceName}/sharepoint/billingMigrated`)) as IDataObject;
	return [{ json: data }];
}
